/*
Copyright 2018 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

/* global fluid, nlp_compromise, nlpSyllables, Hypher */

var demo = demo || {};
(function ($, fluid) {
    "use strict";

    fluid.defaults("demo.syllables", {
        gradeNames: ["fluid.viewComponent"],
        selectors: {
            tbody: "tbody",
            nlpSum: ".nlp-summary",
            hypherSum: ".hypher-summary"
        },
        markup: {
            tr: "<tr><td>%word</td><td>%dictionary</td><td class=\"%nlpColour\">%nlp-syllables</td><td class=\"%hypherColour\">%hypher</td></tr>"
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

    demo.syllables.isCorrect = function (correct, test) {
        return correct.includes(test);
    };

    demo.syllables.renderWords = function (that, words) {
        var tbody = that.locate("tbody");
        var nlpSum = that.locate("nlpSum");
        var hypherSum = that.locate("hypherSum");
        var count = 0;
        var nlpAccuracy = 0;
        var hypherAccuracy = 0;

        fluid.each(words, function (syllables, word) {
            count++;
            syllables = fluid.makeArray(syllables);
            var tokens = {
                word: word,
                dictionary: syllables.join(", "),
                "nlp-syllables": demo.syllables.nlpSyllables(word),
                hypher: demo.syllables.hypher(word)
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

            var template = fluid.stringTemplate(that.options.markup.tr, tokens);
            tbody.append(template);
        });

        console.log("TESTING");
        nlpSum.text(fluid.roundToDecimal((nlpAccuracy / count * 100), 2) + "%" );
        hypherSum.text(fluid.roundToDecimal((hypherAccuracy / count * 100), 2) + "%" );
    };

})(jQuery, fluid);
