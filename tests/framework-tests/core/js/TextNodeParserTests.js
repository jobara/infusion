/*
Copyright The Infusion copyright holders
See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/infusion/raw/main/AUTHORS.md.

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/main/Infusion-LICENSE.txt
*/

/* global fluid, jqUnit */

(function ($) {
    "use strict";

    $(document).ready(function () {

        fluid.registerNamespace("fluid.tests.textNodeParser");

        /****************************************************************
         * fluid.textNodeParser.hasGlyph Tests
         ****************************************************************/

        fluid.tests.textNodeParser.hasGlyphTestCases = {
            "trueCase": ["a", "hello", "test string"],
            "falseCase": ["", " ", "\t", "\n", undefined, null]
        };

        jqUnit.test("Test fluid.textNodeParser.hasGlyph", function () {
            // test trueCase
            fluid.each(fluid.tests.textNodeParser.hasGlyphTestCases.trueCase, function (str) {
                jqUnit.assertTrue("\"" + str + "\" is considered a word.", fluid.textNodeParser.hasGlyph(str));
            });

            // test falseCase
            fluid.each(fluid.tests.textNodeParser.hasGlyphTestCases.falseCase, function (str) {
                jqUnit.assertFalse("\"" + str + "\" is not considered a word.", fluid.textNodeParser.hasGlyph(str));
            });
        });

        /****************************************************************
         * fluid.textNodeParser.hasTextToRead Tests
         ****************************************************************/

        fluid.tests.textNodeParser.assertTextToRead = function (testCases) {
            // The innerText method called in fluid.textNodeParser.hasTextToRead returns text from some hidden elements
            // in IE 11 that modern browsers do not.
            if ($.browser.msie) {
                jqUnit.assert("Tests were not run because innerText works differently on IE 11 and is used for a feature not supported in IE");
            } else {

                // exclude hidden
                fluid.each(testCases.hasTextToRead, function (selector) {
                    jqUnit.assertTrue("Exclude hidden: \"" + selector + "\" should have text to read.", fluid.textNodeParser.hasTextToRead($(selector)));
                });
                fluid.each(testCases.noTextToRead.concat(testCases.ariaHidden, testCases.visiblyHidden), function (selector) {
                    jqUnit.assertFalse("Exclude hidden: \"" + selector + "\" shouldn't have text to read.", fluid.textNodeParser.hasTextToRead($(selector)));
                });

                // include visibly hidden
                fluid.each(testCases.hasTextToRead.concat(testCases.visiblyHidden), function (selector) {
                    jqUnit.assertTrue("Include visibly hidden: \"" + selector + "\" should have text to read.", fluid.textNodeParser.hasTextToRead($(selector), {visiblyHidden: true}));
                });
                fluid.each(testCases.noTextToRead.concat(testCases.ariaHidden), function (selector) {
                    jqUnit.assertFalse("Include visibly hidden: \"" + selector + "\" shouldn't have text to read.", fluid.textNodeParser.hasTextToRead($(selector), {visiblyHidden: true}));
                });

                // include aria-hidden
                fluid.each(testCases.hasTextToRead.concat(testCases.ariaHidden), function (selector) {
                    jqUnit.assertTrue("Include aria hidden: \"" + selector + "\" should have text to read.", fluid.textNodeParser.hasTextToRead($(selector), {ariaHidden: true}));
                });
                fluid.each(testCases.noTextToRead.concat(testCases.visiblyHidden), function (selector) {
                    jqUnit.assertFalse("Include aria hidden: \"" + selector + "\" shouldn't have text to read.", fluid.textNodeParser.hasTextToRead($(selector), {ariaHidden: true}));
                });

                // include all hidden
                fluid.each(testCases.hasTextToRead.concat(testCases.ariaHidden, testCases.visiblyHidden), function (selector) {
                    jqUnit.assertTrue("Include all hidden: \"" + selector + "\" should have text to read.", fluid.textNodeParser.hasTextToRead($(selector), true));
                });
                fluid.each(testCases.noTextToRead, function (selector) {
                    jqUnit.assertFalse("Include all hidden: \"" + selector + "\" shouldn't have text to read.", fluid.textNodeParser.hasTextToRead($(selector), true));
                });
            }
        };

        fluid.tests.textNodeParser.hasTextToReadTestCases = {
            "hasTextToRead": [
                "body",
                ".flc-textNodeParser-test-checkDOMText",
                ".flc-textNodeParser-test-checkDOMText-ariaHiddenFalse",
                ".flc-textNodeParser-test-checkDOMText-ariaHiddenFalse-nested",
                ".flc-textNodeParser-test-checkDOMText-hiddenA11y",
                ".flc-textNodeParser-test-checkDOMText-hiddenA11y-nested",
                ".flc-textNodeParser-test-checkDOMText-visible",
                ".flc-textNodeParser-test-checkDOMText-floatParent",
                ".flc-textNodeParser-test-checkDOMText-fixedParent",
                ".flc-textNodeParser-test-checkDOMText-absoluteParent"
            ],
            "noTextToRead": [
                ".flc-textNodeParser-test-checkDOMText-noNode",
                ".flc-textNodeParser-test-checkDOMText-empty",
                ".flc-textNodeParser-test-checkDOMText-script",
                ".flc-textNodeParser-test-checkDOMText-nestedScript"
            ],
            "ariaHidden": [
                ".flc-textNodeParser-test-checkDOMText-ariaHiddenTrue",
                ".flc-textNodeParser-test-checkDOMText-ariaHiddenTrue-nested"
            ],
            "visiblyHidden": [
                ".flc-textNodeParser-test-checkDOMText-none",
                ".flc-textNodeParser-test-checkDOMText-none-nested",
                ".flc-textNodeParser-test-checkDOMText-visHidden",
                ".flc-textNodeParser-test-checkDOMText-visHidden-nested",
                ".flc-textNodeParser-test-checkDOMText-hidden",
                ".flc-textNodeParser-test-checkDOMText-hidden-nested",
                ".flc-textNodeParser-test-checkDOMText-nestedNone"
            ]
        };

        jqUnit.test("Test fluid.textNodeParser.hasTextToRead", function () {
            fluid.tests.textNodeParser.assertTextToRead(fluid.tests.textNodeParser.hasTextToReadTestCases);
        });

        /****************************************************************
         * fluid.textNodeParser.getLang Tests
         ****************************************************************/

        fluid.tests.textNodeParser.getLangTestCases = [{
            selector: ".flc-textNodeParser-test-lang-none",
            lang: undefined
        }, {
            selector: ".flc-textNodeParser-test-lang-self",
            lang: "en-US"
        }, {
            selector: ".flc-textNodeParser-test-lang-parent",
            lang: "en-CA"
        }];

        jqUnit.test("Test fluid.textNodeParser.getLang", function () {
            fluid.each(fluid.tests.textNodeParser.getLangTestCases, function (testCase) {
                var result = fluid.textNodeParser.getLang(testCase.selector);
                jqUnit.assertEquals("The correct language code should be found for selector " + testCase.selector, testCase.lang, result);
            });
        });
        /****************************************************************
         * fluid.textNodeParser Tests
         ****************************************************************/

        fluid.tests.textNodeParser.parsed = [{
            lang: "en-CA",
            text: "",
            childIndex: 0
        }, {
            lang: "en-CA",
            text: "Text to test. Including",
            childIndex: 0
        }, {
            lang: "en",
            text: "nested",
            childIndex: 0
        }, {
            lang: "en",
            text: "text",
            childIndex: 0
        }, {
            lang: "en",
            text: "nodes",
            childIndex: 2
        }, {
            lang: "en",
            text: "to verify proper parsing.",
            childIndex: 0
        }];

        fluid.defaults("fluid.tests.textNodeParser", {
            gradeNames: ["fluid.textNodeParser"],
            members: {
                record: []
            },
            listeners: {
                "onParsedTextNode.record": {
                    listener: "fluid.tests.textNodeParser.record",
                    args: ["{that}.record", "{arguments}.0"]
                }
            }
        });

        fluid.tests.textNodeParser.nodeToText = function (textNodeData) {
            return {
                text: textNodeData.node.textContent.trim(),
                lang: textNodeData.lang,
                childIndex: textNodeData.childIndex
            };
        };

        fluid.tests.textNodeParser.record = function (record, textNodeData) {
            record.push(fluid.tests.textNodeParser.nodeToText(textNodeData));
        };

        jqUnit.test("Test fluid.textNodeParser", function () {
            jqUnit.expect(2);
            var that = fluid.tests.textNodeParser({
                listeners: {
                    "afterParse.test": {
                        listener: function (that) {
                            jqUnit.assertDeepEq("The DOM structure should have been parsed correctly.", fluid.tests.textNodeParser.parsed, that.record);
                        },
                        args: ["{that}"]
                    }
                }
            });
            var parsed = that.parse($(".flc-textNodeParser-test"));
            parsed = fluid.transform(parsed, fluid.tests.textNodeParser.nodeToText);

            jqUnit.assertDeepEq("The returned parsed TextNodeData[] should be populated correctly.", fluid.tests.textNodeParser.parsed, parsed);
        });

    });
})(jQuery);
