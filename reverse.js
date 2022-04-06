const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};

let args = process.argv.slice(2);

const reverse = function(args) {
  for (let i = 0; i < args.length; i++) {
    let reverseString = "";
    for (let ri = args[i].length - 1; ri >= 0; ri--) {
      reverseString += args[i][ri];
    }
    console.log(reverseString); 
  } 
};

console.log(reverse(args));
