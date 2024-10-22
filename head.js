const head = function(array) {
  if (!array || array.length === 0) return undefined
  return array[0];
}

module.exports = head;