const assertEqual = require("./assertEqual");

let tail = function(array) {
  let shortArray = array.slice(1);
  return shortArray;
};

module.exports = tail;
// tail(words);
// assertEqual(words.length, 3);
