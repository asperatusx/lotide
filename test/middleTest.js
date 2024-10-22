const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns empty array when given [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns empty array when given array with two values', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns [2] when given array [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [2, 3] when given array [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const originalLength = words.length;
    middle(words);
    assert.strictEqual(words.length, originalLength);
  });  
});

