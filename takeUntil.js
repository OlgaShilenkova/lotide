/*
It will take in two parameters :

The array to work with
The callback (which Lodash calls "predicate")

The function will return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.
To keep things simple, the callback should only be provided one value: The item in the array.

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

Expected Output
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false)
      results.push(item);
    if (callback(item) === true) {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed `);
  } else {
    console.log(`🛑 Assertion Failed `);
  }
};

const eqArrays = function(arr1, arr2) {

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
};

//console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

//console.log(assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']));

module.exports = takeUntil;
