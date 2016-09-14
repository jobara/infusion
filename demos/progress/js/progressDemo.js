/*
Copyright 2009 University of California, Berkeley
Copyright 2010-2016 OCAD University
Copyright 2011 Lucendo Development Ltd.

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

/* global fluid */

var demo = demo || {};

(function ($, fluid) {
    "use strict";

    fluid.defaults("demo.timer", {
        gradeNames: ["fluid.modelComponent"],
        events: {
            afterFinish: null
        },
        model: {
            percent: 0,
            steps: 100
        },
        invokers: {
            start: {
                funcName: "demo.timer.simulateTime",
                args: ["{that}", "{that}.events.onStep.fire", "{that}.events.afterFinish.fire"]
            }
        }
    });

    demo.timer.invokeAfterRandomDelay = function (fn) {
        var delay = Math.floor(Math.random() * 1000 + 100);
        setTimeout(fn, delay);
    };

    demo.timer.getSmallRandomNumber = function () {
        return Math.floor(Math.random() * 10);
    };

    /**
     * Used to simulate an application that would call Progress.
     * @param {Object} that             the component to source the model and applier from
     * @param {Function} stepFunction   the function to update the progress component
     * @param {Function} finishFunction the function to enable the submit button, hide the progress simulation and update the text
     */
    demo.timer.simulateTime = function (that, stepFunction, finishFunction) {
        var steps = that.model.steps;
        var percent = that.model.percent;
        var increment = (steps) ? (100 / steps) : 10;

        if (percent < 100) {
            // bump up the current percentage
            percent = Math.round(Math.min(percent + increment + demo.timer.getSmallRandomNumber(), 100));
            that.applier.change("percent", percent);

            // after a random delay, do it all over again
            demo.timer.invokeAfterRandomDelay(function () {
                demo.timer.simulateTime(that, stepFunction, finishFunction);
            });
        } else {
            finishFunction();
        }
    };

    fluid.defaults("demo.shoppingDemo", {
        gradeNames: ["fluid.viewComponent"],
        selectors: {
            submitButton: ".progress-demo-submit button",
            statusText: ".demoSelector-progress-status-text",
            restartDemo: ".demoSelector-progress-restart",
            liveRegion: ".demoSelector-liveRegion",
            progress: ".demoSelector-progress-theComponent"
        },
        strings: {
            confirmStatus: "Confirm and submit your order.",
            orderSubmitted: "Order Submitted. Demo finished.",
            percentCompleted: "%percent% Complete",
            progressTitle: "Checking inventory, please wait."
        },
        events: {
            afterOrderSubmitted: null,
            onSubmit: null
        },
        listeners: {
            "onCreate.setInitialStatus": {
                "this": "{that}.dom.statusText",
                method: "text",
                args: ["{that}.options.strings.confirmStatus"]
            },
            "onCreate.setAria": {
                funcName: "demo.shoppingDemo.setAriaAttr",
                args: ["{that}.dom.liveRegion", "{that}.dom.submitButton", "{that}.containerID"]
            },
            "onCreate.bindSubmitEvents": {
                "this": "{that}.dom.submitButton",
                "method": "on",
                args: ["click", "{that}.events.onSubmit.fire"]
            },
            "onSubmit.verifyInventory": {
                funcName: "demo.shoppingDemo.verifyInventory",
                args: ["{that}"]
            },
            "afterOrderSubmitted.confirm": {
                funcName: "demo.shoppingDemo.confirmOrder",
                args: ["{that}.dom.statusText", "{that}.options.strings.orderSubmitted", "{that}.dom.restartDemo"]
            }
        },
        members: {
            containerID: {
                expander: {
                    funcName: "fluid.allocateSimpleId",
                    args: ["{that}.container"]
                }
            }
        },
        components: {
            progress: {
                type: "fluid.progress",
                container: "{that}.dom.progress",
                options: {
                    speed: 1000,
                    listeners: {
                        "afterProgressHidden.myProgressHide": "{shoppingDemo}.events.afterOrderSubmitted"
                    }
                }
            },
            timer: {
                type: "demo.timer",
                options: {
                    model: {
                        steps: 200
                    },
                    listeners: {
                        "afterFinish.hideProgress": {
                            func: "{progress}.hide",
                            args: [1000]
                        }
                    },
                    modelListeners: {
                        "percent": {
                            func: "{progress}.update",
                            args: ["{change}.value"],
                            excludeSource: "init"
                        }
                    }
                }
            }
        }
    });

    demo.shoppingDemo.setAriaAttr = function (liveRegion, submitButton, controlsID) {
        // set the aria live region attributes
        liveRegion.attr("aria-relevant", "additions text");
        liveRegion.attr("aria-atomic", "false");
        liveRegion.attr("role", "status");

        // set default aria-controls to one of the container
        submitButton.attr("aria-controls", controlsID);
    };

    demo.shoppingDemo.verifyInventory = function (that) {
        var submitButton = that.locate("submitButton");
        that.timer.start();
        submitButton.blur();

        // disable the button
        submitButton.prop("disabled", true);

        // add area role to the progress title
        that.locate("statusText").text(that.options.strings.progressTitle).show();
    };

    demo.shoppingDemo.confirmOrder = function (statusElm, confirmation, restartDemo) {
        statusElm.text(confirmation);
        statusElm.show();
        restartDemo.show();
    };

})(jQuery, fluid);
