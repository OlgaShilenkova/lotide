/*
It will take in two parameters :

The array to work with
The callback (which Lodash calls "predicate")

The function will return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.
To keep things simple, the callback should only be provided one value: The item in the array.

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


//console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

//console.log(assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']));

module.exports = takeUntil;
