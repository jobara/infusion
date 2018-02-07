/*
Copyright 2018 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

/* global fluid, nlp_compromise, nlpSyllables, Hypher, Hyphenator, createHyphenator, hyphenationPatternsEnUs */

var demo = demo || {};
(function ($, fluid) {
    "use strict";

    fluid.defaults("demo.syllables", {
        gradeNames: ["fluid.viewComponent"],
        selectors: {
            tbody: "tbody",
            nlpSum: ".nlp-summary",
            hypherSum: ".hypher-summary",
            hyphenatorSum: ".hyphenator-summary",
            hyphenSum: ".hy-phen-summary",
            hyphenate: ".hyphenate"
        },
        markup: {
            tr: "<tr><td>%word</td><td class=\"dictionary\">%dictionary</td><td class=\"%nlpColour\">%nlp-syllables</td><td class=\"%hypherColour\">%hypher</td><td class=\"hyphenate\">%word</td><td class=\"%hyphenColour\">%hyphen</td></tr>"
        },
        events: {
            onWordsLoaded: null
        },
        wordsURL: "json/words.json",
        listeners: {
            "onCreate.getWords": {
                "this": "$",
                method: "getJSON",
                args: ["{that}.options.wordsURL", null, "{that}.events.onWordsLoaded.fire"]
            },
            "onWordsLoaded.renderWords": "{that}.renderWords"
        },
        invokers: {
            renderWords: {
                funcName: "demo.syllables.renderWords",
                args: ["{that}", "{arguments}.0"]
            }
        }
    });

    demo.syllables.nlpSyllables = function (word) {
        nlp_compromise.plugin(nlpSyllables);
        var text = nlp_compromise.text(word);
        var syllables = text.syllables();
        return syllables[0][0].join("·");
    };

    demo.syllables.hypher = function (word) {
        var syllables = Hypher.languages.en.hyphenate(word);
        return syllables.join("·");
    };

    demo.syllables.hyphen = function (word) {
        var hyphenate = createHyphenator(hyphenationPatternsEnUs, {hyphenChar: "·"});
        return hyphenate(word);
    };

    demo.syllables.hyphenator = function (that) {
        Hyphenator.config({
            hyphenchar : "·",
            classname: "hyphenate",
            minwordlength: 3,
            displaytogglebox: true,
            onhyphenationdonecallback: function () {
                var hyphenated = that.locate("hyphenate");
                var hyphenatorAccuracy = 0;
                hyphenated.each(function (idx, elm) {
                    elm = $(elm);
                    var hyphenatedText = elm.text();
                    var dictionaryText = elm.siblings().filter(".dictionary").text();

                    if (dictionaryText.indexOf(hyphenatedText) >= 0) {
                        hyphenatorAccuracy++;
                    } else {
                        elm.addClass("red");
                    }
                });
                that.locate("hyphenatorSum").text(demo.syllables.accuracy(hyphenatorAccuracy, hyphenated.length));
            }
        });
        Hyphenator.run();
    };

    demo.syllables.isCorrect = function (correct, test) {
        return correct.includes(test);
    };

    demo.syllables.accuracy = function (accurate, total) {
        return fluid.roundToDecimal((accurate / total * 100), 2) + "%";
    };

    demo.syllables.renderWords = function (that, words) {
        var tbody = that.locate("tbody");
        var nlpSum = that.locate("nlpSum");
        var hypherSum = that.locate("hypherSum");
        var hyphenSum = that.locate("hyphenSum");
        var count = 0;
        var nlpAccuracy = 0;
        var hypherAccuracy = 0;
        var hyphenAccuracy = 0;

        fluid.each(words, function (syllables, word) {
            count++;
            syllables = fluid.makeArray(syllables);
            var tokens = {
                word: word,
                dictionary: syllables.join(", "),
                "nlp-syllables": demo.syllables.nlpSyllables(word),
                hypher: demo.syllables.hypher(word),
                hyphen: demo.syllables.hyphen(word)
            };

            if (demo.syllables.isCorrect(syllables, tokens["nlp-syllables"])) {
                nlpAccuracy++;
                tokens.nlpColour = "green";
            } else {
                tokens.nlpColour = "red";
            }

            if (demo.syllables.isCorrect(syllables, tokens.hypher)) {
                hypherAccuracy++;
                tokens.hypherColour = "green";
            } else {
                tokens.hypherColour = "red";
            }

            if (demo.syllables.isCorrect(syllables, tokens.hyphen)) {
                hyphenAccuracy++;
                tokens.hyphenColour = "green";
            } else {
                tokens.hyphenColour = "red";
            }

            var template = fluid.stringTemplate(that.options.markup.tr, tokens);
            tbody.append(template);
        });

        nlpSum.text(demo.syllables.accuracy(nlpAccuracy, count));
        hypherSum.text(demo.syllables.accuracy(hypherAccuracy, count));
        hyphenSum.text(demo.syllables.accuracy(hyphenAccuracy, count));

        demo.syllables.hyphenator(that);
    };

})(jQuery, fluid);
