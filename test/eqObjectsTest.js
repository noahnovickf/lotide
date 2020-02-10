const eqObjects = require("../eqObjects");
const assertEqual = require("../assertEqual");

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
