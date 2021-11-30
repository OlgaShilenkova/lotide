/*
Implement without which will return a subset of a given array, removing unwanted elements.
*/


const without = function (source, itemsToRemove) {
  //variable as Array to push items that we need to keep
  let newArray = [];
  //iterite through source to find if it icludes itemsToRemove
  for (let i = 0; i < source.length; i++) {
    if (source.includes(itemsToRemove[i])) {
      
    } else {
      //if it does not have items to remove send them in new array
      newArray.push(source[i]);
    }
  }
  return newArray;
}


/*
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2"])) // => false => FAIL
assertArraysEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"])) // => true => PASS
*/


module.exports = without;