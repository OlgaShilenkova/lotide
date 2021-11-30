/*
Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
*/


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed :  ${inspect([actual])} === ${inspect([expected])}`);
  } else {
    console.log(`🛑 Assertion Failed : ${inspect([actual])} !== ${inspect([expected])} `);
  }
};


const eqObjects = function(object1, object2) {
  //take keys from object1 and object2
  const keysOfObject1 = Object.keys(object1);
  const keysOfObject2 = Object.keys(object2);

  // do they have the same number of keys?
  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;
  }
  //iterate through keys
  for (const key of keysOfObject1) {

    // compare keys from obj 1 and obj2
    //get access to values of obj as object1[key] and object2[key]

    //if values are arrays send to eqArray function
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if arrayes are not equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      //if obj values of are not equal
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
  //check if arrays length match
  if (arr1.length !== arr2.length) {
    return false;
  }
  //iterate through arr1 to get the values
  for (let i = 0; i < arr1.length; i++) {
    //if values of arr1 and arr2 is does not complitly match return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// console.log(assertObjectsEqual({ a: '1', b: '2' }, { a: '1', b: '2' }));
// console.log(assertObjectsEqual({ a: '1' }, { b: '2' }));


