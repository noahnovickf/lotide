const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const findKey = function(obj, cb) {
  let keyArr = Object.keys(obj);
  for (let item of keyArr) {
    if (cb(obj[item])) {
      return item;
    }
  }
};

// assertEqual(
findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  },
  x => x.stars === 2
),
  "noma";
// );
let val = "a";

//x is { stars: 1 }
//x.stars looks for stars key inside x
//if x.stars === 2 > return true
//if x.stars doesnt find 2(false) as the value of stars, the loop will continue
