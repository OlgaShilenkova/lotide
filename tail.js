
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);

  }

};

const tail = function(array) {
  let total = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      total.push(array[i]);
    }
  }
  return total;

};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail([5, 6, 7]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log(tail([5]));
console.log(tail([]));