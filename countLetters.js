const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};

// function that takes in a string and returns count of each of the letters in that sentance

const countLetters = function(sentence) {
  const result = {};
  
  // Need to loop through the sentance
  
  
  for (const letter of sentence) {
    
    // If space, skip
    if (letter !== " ") {
      
      // If a letter, add 1 to result
      
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  // Return the count of all letters in string
  return result;
};

// TEST

const lighthouse = "lighthouse in the house";

const result1 = countLetters(lighthouse);

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);


