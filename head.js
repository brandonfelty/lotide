const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};

const head = function(input) {
  return input[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["hello", "Lighthouse", "Labs"]), "hello");
assertEqual(head([1]),1);
assertEqual(head([]), undefined);
