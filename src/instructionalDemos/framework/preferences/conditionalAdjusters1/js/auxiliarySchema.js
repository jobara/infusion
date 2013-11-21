/*
Copyright 2013 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/*global demo:true, fluid, jQuery*/

// JSLint options
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

var demo = demo || {};
(function ($, fluid) {

    /**
     * Auxiliary Schema
     */
    fluid.defaults("demo.auxSchema", {
        gradeNames: ["fluid.prefs.auxSchema", "autoInit"],
        auxiliarySchema: {
            template: "html/prefsEditor.html",
            message: "%prefix/prefsEditor.json",
            groups: {
                speaking: {
                    "container": ".mpe-speaking",
                    "template": "%prefix/speaking.html",
                    "message": "%prefix/speaking.json",
                    "type": "demo.panels.speaking",
                    "panels": {
                        "always": ["speak"],
                        "demo.speakText": ["vol", "wpm"]
                    }
                },
                increasing: {
                    "container": ".mpe-increasing",
                    "template": "%prefix/increasing.html",
                    "message": "%prefix/increasing.json",
                    "type": "demo.panels.increasing",
                    "panels": {
                        "always": ["incSize"],
                        "demo.increaseSize": ["cursor", "magFactor", "magPos"]
                    }
/*
                },
                speakIncrease: {
                    "container": ".mpe-speakIncrease",
                    "template": "%prefix/speakIncrease.html",
                    "message": "%prefix/speakIncrease.json",
                    "type": "demo.panels.speakIncrease",
                    "panels": {
                        "always": ["speak", "incSize"],
                        "demo.speakText": ["vol", "wpm"],
                        "demo.increaseSize": ["cursor", "magFactor", "magPos"]
                    }
                    // also to try: the 'old' format for panels i.e. just an array of panel names, if there are no conditional panels relevant
//                    "panels": ["speak", "incSize", "vol", "wpm", "cursor", "magFactor", "magPos"]
*/
                }
            },
            speak: {
                type: "demo.speakText",
                enactor: {
                    type: "demo.enactors.speak"
                },
                panel: {
                    type: "demo.panels.speak",
                    container: ".mpe-speaking-onOff",
                    template: "%prefix/speak-template.html"
                }
            },
            vol: {
                type: "demo.volume",
                enactor: {
                    type: "demo.enactors.vol"
                },
                panel: {
                    type: "demo.panels.vol",
                    container: ".mpe-speaking-vol",
                    template: "%prefix/slide-template.html"
                }
            },
            wpm: {
                type: "demo.wordsPerMinute",
                enactor: {
                    type: "demo.enactors.wpm"
                },
                panel: {
                    type: "demo.panels.wpm",
                    container: ".mpe-speaking-wpm",
                    template: "%prefix/slide-template.html"
                }
            },
            incSize: {
                type: "demo.increaseSize",
                enactor: {
                    type: "demo.enactors.incSize"
                },
                panel: {
                    type: "demo.panels.incSize",
                    container: ".mpe-increasing-onOff",
                    template: "%prefix/incSize-template.html"
                }
            },
            cursor: {
                type: "demo.cursorSize",
                enactor: {
                    type: "demo.enactors.cursor"
                },
                panel: {
                    type: "demo.panels.cursor",
                    container: ".mpe-increasing-cursor",
                    template: "%prefix/slide-template.html"
                }
            },
            magFactor: {
                type: "demo.magnification",
                enactor: {
                    type: "demo.enactors.magFactor"
                },
                panel: {
                    type: "demo.panels.magFactor",
                    container: ".mpe-increasing-magFactor",
                    template: "%prefix/slide-template.html"
                }
            },
            magPos: {
                type: "demo.magnifierPosition",
                enactor: {
                    type: "demo.enactors.magPos"
                },
                panel: {
                    type: "demo.panels.magPos",
                    container: ".mpe-increasing-magPos",
                    template: "%prefix/radioButton-template.html"
                }
            }
        }
    });            


})(jQuery, fluid);
