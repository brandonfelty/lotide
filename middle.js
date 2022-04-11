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

module.exports = middle;

