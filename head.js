const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(array) {
  if (!array || array.length === 0) return undefined
  return array[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([3]), 5);
assertEqual(head([3]), 3);