const tail = function(array) {
  let arrayTail = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrayTail.push(array[i + 1]);
  }
  return arrayTail;
};

module.exports = tail;

