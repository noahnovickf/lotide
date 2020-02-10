const head = require("../head");

const assert = require("chai").assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
});
