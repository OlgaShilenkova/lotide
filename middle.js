/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
*/

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

module.exports = middle;