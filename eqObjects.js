const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (typeof object1[key] === "object" && !Array.isArray(object1[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (!Array.isArray(object1[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else if (!eqArrays(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));

//to check if objects are equal:
//first check if the objects contain the same number of keys: by doing this *** see line: 25 ***
// secondly, check to see what the values of those keys are by looping through the key values *** see line: 28 ***
//within the loop, check to see if the types of values are equal(string, number, object, arrays)
//*** see line: 29 *** to see if the values are nested, and if the nested values are equal)
// *** see line: 33 *** to check to make sure the value is not an array and then on 34 to see if those values are inequal
// at the very end, checking to see if the values are arrays, to check to see if theyre equal or not
