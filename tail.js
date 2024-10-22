const tail = function(array) {
  if (!array || array.length === 0 || array.length === 1) return [];
  return array.slice(1);
};

module.exports = tail;