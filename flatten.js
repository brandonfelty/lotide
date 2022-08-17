// const flatten = (array) => {
//   let newArray = [];
  
//   while (array.length > 0) {
//     const element = array.shift();

//     if (Array.isArray(element)) {
//       element.reverse().forEach((newElement) => {
//         array.unshift(newElement);
//       });
//     } else {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// };

  // looping method
/*for (const num of array) {
  if (Array.isArray(num)) {
    for (let i = 0; i < num.length; i++) {
      newArray.push(num[i]);
      //newArray.push(num[i]);
    }
  } else {
    newArray.push(num);
  }
}
  console.log(newArray)
  return newArray;
  */

const flatten = function(array) {
  let flattenedArray = [];
  // base case
  array.forEach(item => {
    if (Array.isArray(item)) {
      flattenedArray.push(...flatten(item));
    } else {
      flattenedArray.push(item);
    }
  });

  return flattenedArray;
};

module.exports = flatten;

