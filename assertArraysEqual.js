/*
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
*/


const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)  === true) {
    console.log(`✅ Assertion Passed `);
  } else {
    console.log(`🛑 Assertion Failed `);
  }
};


const eqArrays = function (arr1, arr2) {

  //check if arrays length match
  //DOES NOT WORK ONLY IN THIS assertArraysEqual.js file
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }

  //iterate through arr1 to get the values
  for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
    //if values of arr1 and arr2 is does not complitly match return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2"])) // => false => FAIL
assertArraysEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"])) // => true => PASS