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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    // can use trim to remove white space
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      }
      else results[sentence[i]] = [i];
      
    }
  }
  return results
}

let result = letterPositions("lighthouse in the house");
assertArraysEqual(result.l, [0])
assertArraysEqual(result.h, [3 , 5, 15, 18])
assertArraysEqual(result.e, [9, 16, 22])
assertArraysEqual(letterPositions(" "), {})
