const assertEqual = require("./assertEqual");

let head = function(array) {
  let first = array[0];
  return first;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;
