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

let without = function(array, unwanted) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!unwanted.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);
