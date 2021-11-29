const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 🛑Assertion Failed: ${[actual]} !== ${[expected]}`);

  }

};

//FUNCTION ITSELF
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //  first iteration, with 'Jason' (is supposed to be counted)
  
  const results = {};

  for (const item of allItems) {  // allItems is array // now results = { 'Jason': 1 , 'Fang' : 2 }
    // item = 'Fang'
    console.log(item);

    if (itemsToCount[item]) { // itemsToCount, does it have a key 'Fang' ?

      if (results[item]) { // does the results object have the key 'Fang'? NO
        
        results[item] += 1;
      } else { // assign value 1 to the key 'Jason' in results
        results[item] = 1;
      }
    }

  }
  return results;

};

const firstNames = [ //allitems
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });//itemsToCount

assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);