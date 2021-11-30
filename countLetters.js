
/*
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
*/
const countLetters = function(sentence){

  const results = {};
  for (const letter of sentence){

    if(results[letter]){
      results[letter] += 1;
    }else{
      results[letter] = 1;
    }
  }
return results;

};

// assertEqual(countLetters("h")["h"], 1); //PASS

// console.log(countLetters("hello")["l"]);
// assertEqual(countLetters("hello")["l"], 2);//PASS

module.exports = countLetters;