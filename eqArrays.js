/*
const sum = function (a, b) {
return a + b;
}

console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3);

// FUNCTION IMPLEMENTATION
const sumBuggy = function(a, b) {
  return a * b;
}

// TEST CODE
console.assert(sumBuggy(1, 2) === 3); // fails, because bug!

*/

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);

  }

};

//test code
// assertEqual("Lighhouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual("Winter", "Winter");
// assertEqual("Winter", "winter");
// assertEqual(12, 12);
// assertEqual(12, 10);

/*
Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
*/

const eqArrays = function (arr1, arr2) {

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
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false) // => false => PASS
