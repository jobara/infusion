/*
Copyright 2015 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/fluid-project/first-discovery-server/raw/master/LICENSE.txt
*/

"use strict";

var pkg = require("./package.json");
var execSync = require("child_process").execSync;
var exec = require("child_process").exec;

// @param num {Number}
// @param with {Number} - the min-width of the number,
//                        if the number is shorter it will be padded with zeros on the left
// @returns {String} - a string representation of the number with padding as needed
var padZeros = function (num, width) {
    width = width || 2;
    var numstr = num ? num.toString() : "";

    for (var i = numstr.length; i < width; i++) {
        numstr = "0" + numstr;
    }

    return numstr;
};

// @param timestamp {String} - timestamp in seconds as returned by "git show -s --format=%ct HEAD"
// @returns {Object} - an object of date properties
var fromTimestamp = function (timestamp) {
    var timestampInMS = Number(timestamp) * 1000;
    var date = new Date(timestampInMS);

    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1, // months are zero based by default
        day: date.getUTCDate(),
        hours: date.getUTCHours(),
        minutes: date.getUTCMinutes(),
        seconds: date.getUTCSeconds()
    };
};

// @param timestamp {String} - timestamp in seconds as returned by "git show -s --format=%ct HEAD"
// @returns {String} - the time in the ISO8601 format yyyymmddThhmmssZ
var convertoISO8601 = function (timestamp) {
    var date = fromTimestamp(timestamp);

    for (var key in date) {
        date[key] = padZeros(date[key]);
    }

    return date.year + date.month + date.day + "T" + date.hours + date.minutes + date.seconds + "Z";
};

var gitChanges = execSync("git status -s -uno");
var timestamp = execSync("git show -s --format=%ct HEAD");
var commitHash = execSync("git rev-parse --verify --short HEAD");
var devVersion = [pkg.version, convertoISO8601(timestamp), commitHash].join(".");

if (gitChanges.length) {
    console.log("Error: you have uncommitted changes\n" + gitChanges);
} else {
    // set the version number
    execSync("npm version --no-git-tag-version " + devVersion);

    // publish to npm
    // execSync("npm publish");
    execSync("npm pack");

    // add dist-tag
    // execSync("npm dist-tag add infusion@" + devVersion + " dev");
    console.log("npm dist-tag add infusion@" + devVersion + " dev");

    // cleanup changes
    execSync("git reset HEAD --hard");
}
