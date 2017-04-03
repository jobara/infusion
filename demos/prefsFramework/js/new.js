/*
Copyright 2017 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

/*global demo:true, fluid */

var demo = demo || {};

(function ($, fluid) {
    "use strict";

    // TODO: Create toggle button subcomponents that are bound to the toggle in the menu and the mobile toggle.
    //       The desktop version is as currently implemented, the mobile will use the pre-existing icons with
    //       "MENU" and "CLOSE" text but will be implemented as a toggle button instead of two separate controls
    //       Will also need to add aria-controls to the toggles pointing at the menu

    fluid.defaults("demo.toggleButton", {
        gradeNames: ["fluid.viewComponent"],
        strings: {
            pressed: "close",
            notPressed: "menu"
        },
        model: {
            pressed: false
        },
        invokers: {
            setState: {
                funcName: "demo.toggleButton.setStateLabel",
                args: ["{that}", "{arguments}.0"]
            },
            toggle: {
                funcName: "demo.toggleButton.toggle",
                args: ["{that}"]
            }
        },
        listeners: {
            "onCreate.bindClick": {
                "this": "{that}.container",
                method: "on",
                args: ["click", "{that}.toggle"]
            }
        },
        modelListeners: {
            "pressed": {
                listener: "{that}.setState",
                args: ["{change}.value"]
            }
        }
    });

    demo.toggleButton.toggle = function (that) {
        that.applier.change("pressed", !that.model.pressed);
    };

    demo.toggleButton.setStateLabel = function (that, state) {
        that.container.attr({
            "aria-label": that.options.strings[state ? "pressed" : "notPressed"],
            "aria-pressed": state
        });
    };

    demo.toggleButton.setStateText = function (that, state) {
        that.container.attr({
            "aria-pressed": state
        });
        that.container.text(that.options.strings[state ? "pressed" : "notPressed"]);
    };

    fluid.defaults("demo.sideMenu", {
        gradeNames: ["fluid.viewComponent"],
        selectors: {
            menu: ".demo-sideMenu-menu",
            menuToggle: ".demo-sideMenu-toggle",
            mobileToggle: ".demo-sideMenu-mobileToggle"
        },
        styles: {
            open: "demo-sideMenu-open"
        },
        model: {
            open: false
        },
        modelListeners: {
            "open": {
                "this": "{that}.dom.menu",
                method: "toggleClass",
                args: ["{that}.options.styles.open", "{change}.value"]
            }
        },
        components: {
            toggle: {
                type: "demo.toggleButton",
                container: "{that}.dom.menuToggle",
                options: {
                    model: {
                        pressed: "{demo.sideMenu}.model.open"
                    }
                }
            },
            mobileToggle: {
                type: "demo.toggleButton",
                container: "{that}.dom.mobileToggle",
                options: {
                    model: {
                        pressed: "{demo.sideMenu}.model.open"
                    },
                    invokers: {
                        setState: {
                            funcName: "demo.toggleButton.setStateText"
                        }
                    }
                }
            }
        }
    });
})(jQuery, fluid);
