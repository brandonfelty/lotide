const assertArraysEqual = function(array1,  array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`)
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${array1}] !== [${array2}]`)
  }
};

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
  return false;
};

const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
};

const words = ['ground', 'control', 'to', 'major', 'tom'];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(['dog', 'cat', 'bird'], animal => `This is a ${animal}`);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
assertArraysEqual(results3, ['This is a dog', 'This is a cat', 'This is a bird']);