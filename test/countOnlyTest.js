const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns count of instances of a given key in an object", () => {
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true
    });
    assert.deepEqual(result1, { Jason: 1, Fang: 2 });
  });
});
