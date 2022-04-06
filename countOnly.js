// TEST/ASSERTIONS

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};

// Create function that takes in a collection of items and return counts for a subset of those items



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  // Define new object
  const results = {}

  // Loop over allItems array
  for (const item of allItems) {
    // inside the loop
    // increment the counter for each item
    //  set a property with that string key to the value that was already there (or zero if nothing there) with 1 added to it

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }  
  
  }


// Only count items that we care about
 
    
  // Return number of instances we found in allItems
  // Return object
  return results;
}

// TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavity",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna", undefined]);