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

const middle = function(array) {
  let middleIndex;
  if (array.length <= 2) return []
  if (array.length % 3 === 0) {
    middleIndex = Math.floor(array.length / 2);
    const newArray = [array[middleIndex]]
    return newArray
  }
  else {
    middleIndex = array.length / 2;
    return array.slice(middleIndex - 1, middleIndex + 1)
  }
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
