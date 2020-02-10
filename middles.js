let middles = function(array) {
  let mid = [];
  if (array.length % 2 === 0) {
    let halfIndex = (array.length - 1) / 2;
    let lowerHalfIndex = Math.floor(halfIndex);
    let upperHalfIndex = lowerHalfIndex + 1;
    mid.push(array[lowerHalfIndex]);
    mid.push(array[upperHalfIndex]);
  } else {
    let oddMiddle = (array.length - 1) / 2;
    mid.push(array[oddMiddle]);
  }
  return mid;
};

module.exports = middles;
