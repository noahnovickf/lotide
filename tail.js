let tail = function(array) {
  let shortArray = array.slice(1);
  return shortArray;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}.`);
  }
};
tail(words);
assertEqual(words.length, 3);

