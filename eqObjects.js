const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}.`);
  }
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  if (
    Array.isArray(Object.keys(object1)) === true ||
    Array.isArray(Object.keys(object2)) === true
  ) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (!Array.isArray(object1[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else {
      return eqArrays(object1[key], object2[key]);
    }
  }
  return true;
};

eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
