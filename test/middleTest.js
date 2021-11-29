const middle = require("../middle.js");

const assertArraysEqual = require("../assertArraysEqual.js");



assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);
assertArraysEqual(middle(["a", "b", "c", "d"]), ["a", "c"]);