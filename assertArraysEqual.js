const eqArrays = require("./eqArrays");

let assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ the arrays are equal`);
  } else {
    console.log(`🔴 the arrays are not equal`);
  }
};

module.exports = assertArraysEqual;
