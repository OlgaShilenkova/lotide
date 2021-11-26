/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[0].toUpperCase());
// console.log(results1);


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed `);
  } else {
    console.log(`🛑 Assertion Failed `);
  }
};

const eqArrays = function (arr1, arr2) {

  //check if arrays length match
  //DOES NOT WORK ONLY IN assertArraysEqual.js file
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));

console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]));

console.log(assertArraysEqual(results3, ['G', 'C', 'T', 'M', 'T']));