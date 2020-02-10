const assert = require("chai").assert;
const middles = require("../middles");
describe("#middles", () => {
  it("returns [7, 8] for [5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middles([5, 6, 7, 8, 9, 10]), [7, 8]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middles([1, 2, 3, 4, 5]), [3]);
  });
});
