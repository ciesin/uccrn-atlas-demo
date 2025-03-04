import {
  r
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js
function s(t, n3, r2, o, a, s2 = 2) {
  const e2 = 1 / (Math.abs(r2) + Math.abs(o) + Math.abs(a)), c = r2 * e2, f = o * e2, h = a <= 0 ? (c >= 0 ? 1 : -1) * (1 - Math.abs(f)) : c, u = a <= 0 ? (f >= 0 ? 1 : -1) * (1 - Math.abs(c)) : f, l = n3 * s2;
  t[l] = i(h), t[l + 1] = i(u);
}
function e(t) {
  const n3 = t.length / 3, r2 = new Int16Array(2 * n3);
  let o = 0;
  for (let a = 0; a < n3; ++a) s(r2, a, t[o++], t[o++], t[o++]);
  return r2;
}
function i(n3) {
  return r(Math.round(32767 * n3), -32767, 32767);
}

export {
  s,
  e
};
//# sourceMappingURL=chunk-3Y5232PZ.js.map
