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

assertEqual(countLetters("lighthouse in the house").l, 1);
assertEqual(countLetters("lighthouse in the house").i, 2);
assertEqual(countLetters("lighthouse in the house").e, 3);
assertEqual(countLetters("lighthouse in the house")[" "], undefined);