const tail = function(array) {
 return array.slice(1);;
};


 console.log((tail([5, 6, 7])));
// console.log((tail(["Hello", "Lighthouse", "Labs"])));
// console.log((tail([5])));
// console.log((tail([])));

module.exports = tail;