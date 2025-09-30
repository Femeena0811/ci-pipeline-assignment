// math.test.js
const add = require('./math'); // Import the function from math.js

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
