/*
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 🛑Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

//FUNCTION ITSELF

const findKeyByValue = function(object, valueToFind) {

  const keysOfObject = Object.keys(object);

  for (const key of keysOfObject) {
    // get access to values

    let value = object[key];

    // compare value that we have with given valueToFind
    if (value === valueToFind) {
      return key;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama": "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The "));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "musical");

module.exports = findKeyByValue;