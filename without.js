/*
Implement without which will return a subset of a given array, removing unwanted elements.
*/


const assertArraysEqual = function (eqArrays) {
  if (eqArrays === true) {
    console.log(`✅ Assertion Passed `);
  } else {
    console.log(`🛑 Assertion Failed `);
  }
};


const eqArrays = function (arr1, arr2) {

  //check if arrays length match
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
};


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

// assertArraysEqual(without([1, 2, 3], [1]), [1]);
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

/*
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false => should FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2"])) // => false => FAIL
assertArraysEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"])) // => true => PASS


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
 assertArraysEqual(words, ["hello", "world", "lighthouse"]);

*/
console.log(without([1, 2, 3], [1]))// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
