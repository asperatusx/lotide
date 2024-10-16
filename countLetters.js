const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  const result = {}
  for (const letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1
      }
      else result[letter] = 1
    }
  }
  console.log(result)
  return result;
}

let results = countLetters("lighthouse in the house");
assertEqual(results.l, 1);
assertEqual(results.i, 2);
assertEqual(results.e, 3);
assertEqual(results[" "], undefined);