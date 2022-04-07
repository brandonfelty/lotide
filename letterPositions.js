const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    let isEqual = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {

      } else {
        return false;
      }
    }
    return true;
  }
}
const assertArraysEqual = function(array1,  array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`)
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${array1}] !== [${array2}]`)
  }
}

// return all the indices in the string where the character is found

const letterPositions = function(string) {
  let results = {};

  for (let i = 0; i < string.length; i++) {

    if (string[i] !== ' ') {
      if (results[string[i]]) {
        results[string[i]].push(i);  //if this index value exsists inside output already and the current index value to output as well
      } else {
        results[string[i]] = [i];   //if this letter does NOT exsist within output, add it and set its initial value to 1
      }
    }
  }
  return results;
};
console.log(letterPositions("hello"));



const sentence = "hello";
const test = letterPositions(sentence);

assertArraysEqual(test["h"], [0]);
assertArraysEqual(test["e"], [1]);
assertArraysEqual(test["l"], [2, 3]);
assertArraysEqual(test["o"], [4]);
