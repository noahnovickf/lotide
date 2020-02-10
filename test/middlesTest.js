const assertArrayEqual = require("../assertArraysEqual");
const middles = require("../middles");

console.log(assertArrayEqual(middles([1, 2, 3, 4]), [2, 3]));
console.log(assertArrayEqual(middles([1, 2, 3, 4, 5]), [3]));
console.log(assertArrayEqual(middles([1, 2, 3, 4, 6, 7]), [2, 3]));
