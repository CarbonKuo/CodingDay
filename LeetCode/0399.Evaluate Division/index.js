'use strict';

module.exports = { calcEquation };

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]} res
 */
function calcEquation(equations, values, queries) {
  let nvars = 0;
  const variables = new Map();

  const n = equations.length;
  for (let i = 0; i < n; i++) {
    if (!variables.has(equations[i][0])) {
      variables.set(equations[i][0], nvars++);
    }
    if (!variables.has(equations[i][1])) {
      variables.set(equations[i][1], nvars++);
    }
  }
  const f = new Array(nvars).fill(0).map((val, index) => index);
  const w = new Array(nvars).fill(1.0);

  for (let i = 0; i < n; i++) {
    let va = variables.get(equations[i][0]);
    let vb = variables.get(equations[i][1]);
    merge(f, w, va, vb, values[i]);
  }
  const queriesCount = queries.length;
  const res = new Array(queriesCount).fill(0);
  for (let i = 0; i < queriesCount; i++) {
    const query = queries[i];
    let result = -1.0;
    if (variables.has(query[0]) && variables.has(query[1])) {
      const ia = variables.get(query[0]);
      const ib = variables.get(query[1]);
      const fa = findf(f, w, ia);
      const fb = findf(f, w, ib);
      if (fa == fb) {
        result = w[ia] / w[ib];
      }
    }
    res[i] = result;
  }
  return res;
}

const merge = (f, w, x, y, val) => {
  const fx = findf(f, w, x);
  const fy = findf(f, w, y);
  f[fx] = fy;
  w[fx] = (val * w[y]) / w[x];
};

const findf = (f, w, x) => {
  if (f[x] != x) {
    const father = findf(f, w, f[x]);
    w[x] = w[x] * w[f[x]];
    f[x] = father;
  }
  return f[x];
};
