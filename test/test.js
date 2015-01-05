var acorn = require("acorn");

console.log(JSON.stringify(acorn.parse('var f = (a, b, c) {}'), null, 4));
