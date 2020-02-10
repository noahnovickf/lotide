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

module.exports = letterPositions;
