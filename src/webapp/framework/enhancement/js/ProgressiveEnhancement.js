/*
Copyright 2008-2009 University of Toronto
Copyright 2010-2011 OCAD University
Copyright 2011 Lucendo Development Ltd.

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/*global window, fluid_1_5:true, jQuery, swfobject*/

// JSLint options 
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

var fluid_1_5 = fluid_1_5 || {};

(function ($, fluid) {
    
    fluid.registerNamespace("fluid.progressiveEnhancement");
    
    // Feature Detection Functions
    fluid.progressiveEnhancement.isBrowser = function () {
        return typeof(window) !== "undefined" && window.document;
    };
    fluid.progressiveEnhancement.supportsBinaryXHR = function () {
        return window.FormData || (window.XMLHttpRequest && window.XMLHttpRequest.prototype && window.XMLHttpRequest.prototype.sendAsBinary);
    };
    fluid.progressiveEnhancement.supportsFormData = function () {
        return !!window.FormData;
    };
    fluid.progressiveEnhancement.supportsFlash = function () {
        return (typeof(swfobject) !== "undefined") && (swfobject.getFlashPlayerVersion().major > 8);
    };
    
    /*
     * An object to hold the results of the progressive enhancement checks.
     * Keys represent the key into the static environment
     * Values represent the result of the check
     */
    fluid.progressiveEnhancement.checked = {};
    
    /*
     * The segment separator used by fluid.progressiveEnhancement.typeToKey
     */
    fluid.progressiveEnhancement.sep = "--";
    
    /*
     * Converts a type tag name to one that is safe to use as a key in an object, by replacing all of the "."
     * with the separator specified at fluid.progressiveEnhancement.sep
     */
    fluid.progressiveEnhancement.typeToKey = function (typeName) {
        return typeName.replace(/[.]/gi, fluid.progressiveEnhancement.sep);
    };
    
    /*
     * Takes an object of key/value pairs where the key will be the key in the static enivronment and the value is a function or function name to run.
     * {staticEnvKey: "progressiveCheckFunc"}
     * Note that the function will not be run if it's result is already recorded.
     */
    fluid.progressiveEnhancement.check = function (stuffToCheck) {
        fluid.each(stuffToCheck, function (val, key) {
            var staticKey = fluid.progressiveEnhancement.typeToKey(key);
            
            if (!fluid.progressiveEnhancement.checked.hasOwnProperty(staticKey)) {
                var results = typeof(val) === "string" ? fluid.invokeGlobalFunction(val) : val();
                
                fluid.progressiveEnhancement.checked[staticKey] = results;
                
                if (results) {
                    fluid.staticEnvironment[staticKey] = fluid.typeTag(key);
                }
            }
        });
    };
    
    /*
     * forgets a single item based on the typeName
     */
    fluid.progressiveEnhancement.forget = function (typeName) {
        var key = fluid.progressiveEnhancement.typeToKey(typeName);
        
        if (fluid.progressiveEnhancement.checked.hasOwnProperty(key)) {
            delete fluid.staticEnvironment[key];
            delete fluid.progressiveEnhancement.checked[key];
        }
    };
    
    /*
     * forgets all of the keys added by fluid.progressiveEnhancement.check
     */
    fluid.progressiveEnhancement.forgetAll = function () {
        fluid.each(fluid.progressiveEnhancement.checked, function (val, key) {
            fluid.progressiveEnhancement.forget(key);
        });
    };
    
    fluid.progressiveChecker = function (options) {
        var that = fluid.initLittleComponent("fluid.progressiveChecker", options);
        return fluid.typeTag(fluid.find(that.options.checks, function(check) {
            if (check.feature) {
                return check.contextName;
            }}, that.options.defaultContextName
        ));
    };
    
    fluid.defaults("fluid.progressiveChecker", {
        gradeNames: "fluid.typeFount",
        checks: [], // [{"feature": "{IoC Expression}", "contextName": "context.name"}]
        defaultContextName: undefined
    });
    
    fluid.progressiveCheckerForComponent = function (options) {
        var that = fluid.initLittleComponent("fluid.progressiveCheckerForComponent", options);
        var defaults = fluid.defaults(that.options.componentName);
        return fluid.progressiveChecker(fluid.expandOptions(fluid.copy(defaults.progressiveCheckerOptions), that));  
    };

    fluid.defaults("fluid.progressiveCheckerForComponent", {
        gradeNames: "fluid.typeFount"
    });
    
    /**********************************************************
     * This code runs immediately upon inclusion of this file *
     **********************************************************/
    
    // Use JavaScript to hide any markup that is specifically in place for cases when JavaScript is off.
    // Note: the use of fl-ProgEnhance-basic is deprecated, and replaced by fl-progEnhance-basic.
    // It is included here for backward compatibility only.
    if (fluid.progressiveEnhancement.isBrowser()) {
        $("head").append("<style type='text/css'>.fl-progEnhance-basic, .fl-ProgEnhance-basic { display: none; } .fl-progEnhance-enhanced, .fl-ProgEnhance-enhanced { display: block; }</style>");
    }
    
})(jQuery, fluid_1_5);
