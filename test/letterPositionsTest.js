const assert = require("chai").assert;
const letterPosition = require("../letterPositions");

// result1 = "hello";
// expected = { h: 0, e: 1 l: 2};

describe("#letterPositions", () => {
  it("returns a position of a letter in a given string", () => {
    assert.deepEqual(letterPosition("hello").e, [1]);
  });
});
