// TEST/ASSERTION Functions

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

// ACTUAL FUNCTION

// Function that takes in array and returns the middle-most element(s)

const middle = function(array) {
  let elements = [];
  
  // Edge Case: If array.length is less than or equal to two, return empty array
  if (array.length <= 2) {
    elements = [];
    return elements;
  }
  // If the array is divisible by two, the middle will have two elements

  if (array.length % 2 === 0) { 
    elements.push(array[array.length / 2 - 1]); // Left of center
    elements.push(array[array.length / 2]); // Right of center
    
    return elements;
    // Return two elements
  } else {
    
    elements.push(array[Math.floor(array.length / 2)]); // Since this will be an odd number, use math.floor to round down which will be the center index.
    return elements;
    
    // Return one element
  }

  // Find the middle of the array. Middle = array.length/2

  // return array with middle elements
}

// TEST CODE

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);