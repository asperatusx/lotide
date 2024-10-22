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

module.exports = middle;