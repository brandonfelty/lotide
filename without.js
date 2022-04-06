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

const without = function(source, itemsToRemove) {
  let newArray = source.filter(element => ! itemsToRemove.includes(element));
  return newArray;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);