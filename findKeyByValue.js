const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};

// Implement findKeyByValue
// inputs object and value
// Returns first key which contains the given value
// Return undefined if no matching key


const findKeyByValue = function(obj, target) {
  for (const key in obj) {
    if (obj[key] === target) {
      return key;
    } 
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);