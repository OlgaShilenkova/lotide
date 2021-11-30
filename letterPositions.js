/*
implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.


*/

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed `);
  } else {
    console.log(`🛑 Assertion Failed `);
  }
};

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

///////FUNCTION ITSELF

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (!results[sentence[i]]) {
      //here we create an array
      results[sentence[i]] = [i];
    } else {
      //here we push index to the array
      //we can use push to propery/key of the object
      results[sentence[i]].push(i);
    }
  }
  return results;
};


// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").o, [4]);

module.exports = letterPositions;