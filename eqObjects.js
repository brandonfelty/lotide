const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
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
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

    
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {

    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      
      return eqArrays(object1[key], object2[key]);
    } 
      if (keys1[key] !== keys2[key]) {
        return false;
      } 
  }
  return true;
};

console.log(eqArrays([3], [3, 4]));

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

