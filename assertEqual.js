/*
// const sum = function (a, b) {
//   return a + b;
// }

// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 3); 

// FUNCTION IMPLEMENTATION
const sumBuggy = function(a, b) { 
  return a * b;
}

// TEST CODE
console.assert(sumBuggy(1, 2) === 3); // fails, because bug!

*/

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑Assertion Failed: ${[actual]} !== ${[expected]}`);

  }

};

//test code
assertEqual("Lighhouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("Winter", "Winter");
assertEqual("Winter", "winter");
assertEqual(12, 12);
assertEqual(12, 10);

