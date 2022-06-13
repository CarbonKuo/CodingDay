'use strict';

const assert = require('assert');

const { minimumTotal } = require('./');

describe('#minimumTotal', () => {
  const tests = [
    {
      triangle: [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
      result: 11,
    },
    {
      triangle: [[-10]],
      result: -10,
    },
    {
      triangle: [[-1], [2, 3], [1, -1, -3]],
      result: -1,
    },
  ];

  for (const { triangle, result } of tests) {
    it(`${triangle} -> ${result}`, () => {
      assert.deepStrictEqual(minimumTotal(triangle), result);
    });
  }
});
