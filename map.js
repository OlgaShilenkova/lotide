/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

// console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));

// console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]));

//console.log(assertArraysEqual(results3, ['G', 'C', 'T', 'M', 'T']));

module.exports = map;