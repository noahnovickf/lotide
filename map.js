const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    // console.log("item b4", item);
    // console.log("item aft", cb(item));
    // console.log("*******");
    results.push(cb(item));
  }
  return results;
};

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

let assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ the arrays are equal`);
  } else {
    console.log(`🔴 the arrays are not equal`);
  }
};

let words = ["ground", "control", "to", "major", "tom"];

let results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

words = [["2"], ["2"], ["3"], ["4"], ["5"]];

results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["2", "2", "3", "4", "5"]);
