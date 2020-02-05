let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

let assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ the arrays are equal`);
  } else {
    console.log(`🔴 the arrays are not equal`);
  }
};

let middle = function(array) {
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
console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 6, 7]), [2, 3]));
