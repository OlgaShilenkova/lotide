/*
function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/

function flatten(arr) {
  //array keep all values
  let output = [];
  //first loop
  arr.forEach((el) => {
    //if needed second loop
    if (Array.isArray(el)) {
      el.forEach((e) => {
        output.push(e);
      });
    }
    if (!Array.isArray(el)) {
      output.push(el);
    }
  });

  return output;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
