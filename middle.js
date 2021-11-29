/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
*/

//TEST/ASSERTION FUNCTION

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)  === true) {
    console.log(`✅ Assertion Passed ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed${arr1} !== ${arr2}`);
  }
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

//ACTUAL FUNCTION

const middle = function(array) {
  //empty Array to store the value
  const newArray = [];

  //check array length
  const numberOfElementsInArray = array.length;
  // console.log(numberOfElementsInArray);

  //if array has 1 or 2 elements return empty array
  if (numberOfElementsInArray <= 2) {
    return newArray;
  }
  //check if length is even number
  if (numberOfElementsInArray % 2 === 0) {
    // console.log(" I am even array", numberOfElementsInArray);
    // devide the length by 2 to get the center
    //decrease in 1 because index starts from ziro
    let center1 = (numberOfElementsInArray / 2) - 1;

    //find second element from center
    let center2 = center1 + 1;

    //get value of those two centers elements
    const middleElement1 = array[center1];
    const middleElement2 = array[center2];

    //push those two elements to new array

    newArray.push(middleElement1);
    newArray.push(middleElement2);

    return newArray;
  }
  if (numberOfElementsInArray % 2 !== 0) {
    // console.log(" I am odd array", numberOfElementsInArray);
    // devide the length by 2 to get the center
    // round it down
    let center = Math.floor(numberOfElementsInArray / 2);

    // take element from Array with index of center
    const middleElement = array[center];
    //push this element to newArray that we will return
    newArray.push(middleElement);
    return newArray;
  }
};


 //console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle(["a", "b", "c", "d", "e"]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle(["a", "b", "c", "d"]));

//  assertArraysEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);

// console.log(middle([1,2]));
// console.log(middle([1]));


module.exports = middle;