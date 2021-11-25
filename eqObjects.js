/*
Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 🛑Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};


// FUNCTION STARTS HERE

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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
    //get access to values of obj
    let value1 = object1[key];
    let value2 = object2[key];

    //if values are arrays send to eqArray function
    if (Array.isArray(value1) && Array.isArray(value2)) {
      eqArrays(value1, value2);
    } else {
      //if values are primitive value
      //compare values of obj1 and obj2
      if (value1 !== value2) {
        return false;
      }
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
    // console.log(arr1[i]);
    //if values of arr1 and arr2 is does not complitly match return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// console.log(eqObjects(ab, ba)); // => true
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };

// console.log(eqObjects(ab, abc)); // => false
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
// assertEqual(eqObjects(cd, dc), true);

//WHY THIS DOES NOT PASS??
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false);