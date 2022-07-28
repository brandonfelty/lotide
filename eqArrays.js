const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if(Array.isArray(array1[i]) || Array.isArray(array2[i])) {
        const checkArray = eqArrays(array1[i], array2[i]);
        if (!checkArray) return false;
      }
      if (!Array.isArray(array1[i]) && array1[i] !== array2[i]) {
       return false;
      }
    }
    return true;
  } 
  return false;
}

module.exports = eqArrays;