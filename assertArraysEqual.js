const eqArrays = require("./eqArrays.js")

/*
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
*/


const assertArraysEqual = function(eqArr,bool) {
 
if (eqArr  === false) {
  console.log(`🛑 Assertion Failed ${eqArr}===${false}`);
}
if (eqArr  === true) {
  console.log(`✅ Assertion Passed ${eqArr}===${true}`);
}
 };




 assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

 assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL

  assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should Pass

 assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => shoul FAIL 


  assertArraysEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true) // =>shoul PASS

module.exports = assertArraysEqual;