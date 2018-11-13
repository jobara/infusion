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
            tbody: ".comparison tbody",
            nlpSum: ".nlp-summary",
            nlpTime: ".nlp-time",
            hypherSum: ".hypher-summary",
            hypherTime: ".hypher-time",
            hyphenatorSum: ".hyphenator-summary",
            hyphenatorTime: ".hyphenator-time",
            hyphenSum: ".hy-phen-summary",
            hyphenTime: ".hy-phen-time",
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

    nlp_compromise.plugin(nlpSyllables);

    demo.syllables.nlpSyllables = function (word) {
        var text = nlp_compromise.text(word);
        var syllables = text.syllables();
        return syllables[0][0].join("·");
    };

    demo.syllables.hypher = function (word) {
        var syllables = Hypher.languages.en.hyphenate(word);
        return syllables.join("·");
    };

    demo.hyphenate = createHyphenator(hyphenationPatternsEnUs, {hyphenChar: "·"});
    demo.syllables.hyphen = function (word) {
        return demo.hyphenate(word);
    };

    demo.syllables.hyphenator = function (that) {
        var startTime = Date.now();
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
                that.locate("hyphenatorTime").text((Date.now() - startTime) + "ms");
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
        var nlpTime = that.locate("nlpTime");
        var hypherSum = that.locate("hypherSum");
        var hypherTime = that.locate("hypherTime");
        var hyphenSum = that.locate("hyphenSum");
        var hyphenTime = that.locate("hyphenTime");
        var count = 0;
        var nlpAccuracy = 0;
        var nlpDuration = 0;
        var hypherAccuracy = 0;
        var hypherDuration = 0;
        var hyphenAccuracy = 0;
        var hyphenDuration = 0;

        fluid.each(words, function (syllables, word) {
            count++;
            syllables = fluid.makeArray(syllables);
            var tokens = {
                word: word,
                dictionary: syllables.join(", ")
            };

            // nlp-syllables
            var startTime = Date.now();
            tokens["nlp-syllables"] = demo.syllables.nlpSyllables(word);
            nlpDuration += (Date.now() - startTime);

            // hypher
            startTime = Date.now();
            tokens.hypher = demo.syllables.hypher(word);
            hypherDuration += (Date.now() - startTime);

            // hyphen
            startTime = Date.now();
            tokens.hyphen = demo.syllables.hyphen(word);
            hyphenDuration += (Date.now() - startTime);

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
        nlpTime.text(nlpDuration + "ms");
        hypherSum.text(demo.syllables.accuracy(hypherAccuracy, count));
        hypherTime.text(hypherDuration + "ms");
        hyphenSum.text(demo.syllables.accuracy(hyphenAccuracy, count));
        hyphenTime.text(hyphenDuration + "ms");

        demo.syllables.hyphenator(that);
    };

})(jQuery, fluid);
