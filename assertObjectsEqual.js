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

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require("util").inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅ ${inspect(obj1)} is equal to ${inspect(obj2)}`);
  } else {
    console.log(`🔴 ${inspect(obj1)} is not equal to ${inspect(obj2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(dc, cd);
