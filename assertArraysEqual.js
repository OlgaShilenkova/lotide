
const eqArrays = require("./eqArrays.js")

/*
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
*/


const assertArraysEqual = function(arr1,arr2) {
  // assertEqual(eqArrays(arr1,arr2), true);
  if (eqArrays(arr1,arr2)  === true) {
    console.log(`✅ Assertion Passed ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed${arr1} !== ${arr2}`);
  }
};


//  assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

//  assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL

//  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should Pass

// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => shoul FAIL 

//  assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]) // =>shoul PASS

module.exports = assertArraysEqual;