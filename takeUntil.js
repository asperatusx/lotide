const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
}

const takeUntil = function(array, callback) {
  let newArray = [];
  for (element of array) {
    if (!callback(element)) {
      newArray.push(element)
    }
    else return newArray;
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])

const data3 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results3 = takeUntil(data3, x => x === 1);
assertArraysEqual(results3, [])