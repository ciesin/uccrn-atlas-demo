import {
  w
} from "./chunk-NENDDUWH.js";

// node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
function r2(n) {
  return n;
}
function u(n = O) {
  return r2([n[0], n[1], n[2], n[3]]);
}
function e(n, t) {
  return n !== t && (n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3]), n;
}
function a(n, t, r3, i, e2 = u()) {
  return e2[0] = n, e2[1] = t, e2[2] = r3, e2[3] = i, e2;
}
function o(n, t = u()) {
  return t[0] = n.xmin, t[1] = n.ymin, t[2] = n.xmax, t[3] = n.ymax, t;
}
function c(n, r3, u2 = new w()) {
  return u2.xmin = n[0], u2.ymin = n[1], u2.xmax = n[2], u2.ymax = n[3], u2.spatialReference = r3, u2;
}
function f(n, t) {
  t[0] < n[0] && (n[0] = t[0]), t[0] > n[2] && (n[2] = t[0]), t[1] < n[1] && (n[1] = t[1]), t[1] > n[3] && (n[3] = t[1]);
}
function m(n, t, r3) {
  if (null != t) if ("length" in t) I(t) ? (r3[0] = Math.min(n[0], t[0]), r3[1] = Math.min(n[1], t[1]), r3[2] = Math.max(n[2], t[2]), r3[3] = Math.max(n[3], t[3])) : 2 !== t.length && 3 !== t.length || (r3[0] = Math.min(n[0], t[0]), r3[1] = Math.min(n[1], t[1]), r3[2] = Math.max(n[2], t[0]), r3[3] = Math.max(n[3], t[1]));
  else switch (t.type) {
    case "extent":
      r3[0] = Math.min(n[0], t.xmin), r3[1] = Math.min(n[1], t.ymin), r3[2] = Math.max(n[2], t.xmax), r3[3] = Math.max(n[3], t.ymax);
      break;
    case "point":
      r3[0] = Math.min(n[0], t.x), r3[1] = Math.min(n[1], t.y), r3[2] = Math.max(n[2], t.x), r3[3] = Math.max(n[3], t.y);
  }
  else e(r3, n);
}
function h(n, t, r3 = n) {
  const u2 = t.length;
  let i = n[0], e2 = n[1], a2 = n[2], o2 = n[3];
  for (let c2 = 0; c2 < u2; c2++) {
    const n2 = t[c2];
    i = Math.min(i, n2[0]), e2 = Math.min(e2, n2[1]), a2 = Math.max(a2, n2[0]), o2 = Math.max(o2, n2[1]);
  }
  return r3[0] = i, r3[1] = e2, r3[2] = a2, r3[3] = o2, r3;
}
function x(n) {
  for (let t = 0; t < 4; t++) if (!isFinite(n[t])) return false;
  return true;
}
function M(n) {
  return null == n || n[0] >= n[2] ? 0 : n[2] - n[0];
}
function s(n) {
  return null == n || n[1] >= n[3] ? 0 : n[3] - n[1];
}
function l(n) {
  return M(n) * s(n);
}
function p(n, t = [0, 0]) {
  return t[0] = (n[0] + n[2]) / 2, t[1] = (n[1] + n[3]) / 2, t;
}
function b(n) {
  const t = M(n), r3 = s(n);
  return Math.sqrt(t * t + r3 * r3);
}
function q(n, t) {
  return w2(n, t.x, t.y);
}
function w2(n, t, r3) {
  return t >= n[0] && r3 >= n[1] && t <= n[2] && r3 <= n[3];
}
function R(n, t) {
  return Math.max(t[0], n[0]) <= Math.min(t[2], n[2]) && Math.max(t[1], n[1]) <= Math.min(t[3], n[3]);
}
function U(n, t, r3) {
  return Math.max(t[0], n[0]) - r3 <= Math.min(t[2], n[2]) && Math.max(t[1], n[1]) - r3 <= Math.min(t[3], n[3]);
}
function d(n, t) {
  return t[0] >= n[0] && t[2] <= n[2] && t[1] >= n[1] && t[3] <= n[3];
}
function B(n, t, r3, u2 = n) {
  return u2[0] = n[0] + t, u2[1] = n[1] + r3, u2[2] = n[2] + t, u2[3] = n[3] + r3, u2;
}
function H(n) {
  return n ? e(n, N) : u(N);
}
function I(n) {
  return null != n && 4 === n.length;
}
function K(n, t) {
  return I(n) && I(t) ? n[0] === t[0] && n[1] === t[1] && n[2] === t[2] && n[3] === t[3] : n === t;
}
var L = r2([-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
var N = r2([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
var O = r2([0, 0, 0, 0]);
var P = r2([0, 0, 1, 1]);

export {
  u,
  e,
  a,
  o,
  c,
  f,
  m,
  h,
  x,
  M,
  s,
  l,
  p,
  b,
  q,
  w2 as w,
  R,
  U,
  d,
  B,
  H,
  K,
  N
};
//# sourceMappingURL=chunk-G34KEQQG.js.map
