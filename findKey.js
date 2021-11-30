/*
Implement the function findKey which takes
 - an object
and
- a callback.
 
 It should scan the object and return the first KEY for which the callback returns a truthy VALUE.
 If no key is found, then it should return undefined.
*/

const findKey = function(object, callback) {

  for (const key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
  return undefined;
};

/*
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 4), undefined);

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3), "Akaleri");
*/

module.exports = findKey;