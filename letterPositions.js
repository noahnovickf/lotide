let letterPositions = function(sentence) {
  const results = {};
  newStr = sentence.split("");
  for (let [index, letter] of newStr.entries()) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [];
        results[letter].push(index);
      }
    }
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

assertArraysEqual(letterPositions("hello").e, [1]);
