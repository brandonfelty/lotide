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

module.exports = eqArrays;