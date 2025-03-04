import {
  e as e3
} from "./chunk-NOMJWA3C.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  e as e2
} from "./chunk-K24WU5UX.js";
import {
  n as n3
} from "./chunk-O2L6JAHP.js";
import {
  A,
  H,
  P,
  _,
  c,
  g,
  o,
  r as r2,
  u
} from "./chunk-UMYFDXOJ.js";
import {
  n as n2
} from "./chunk-MHM4GDCM.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  b,
  r
} from "./chunk-6P7HXSJ6.js";
import {
  t
} from "./chunk-HS4XAAAN.js";

// node_modules/@arcgis/core/geometry/support/vector.js
function i(t3, o3, s2) {
  const c3 = P(t3, o3) / P(t3, t3);
  return g(s2, t3, c3);
}
function f(t3, n4) {
  return P(t3, n4) / r2(t3);
}
function a(n4, s2) {
  const c3 = P(n4, s2) / (r2(n4) * r2(s2));
  return -b(c3);
}
function u2(n4, o3, e4) {
  A(m, n4), A(h, o3);
  const i2 = P(m, h), f3 = b(i2), a3 = _(m, m, h);
  return P(a3, e4) < 0 ? 2 * Math.PI - f3 : f3;
}
var m = n();
var h = n();

// node_modules/@arcgis/core/core/VectorStack.js
var m2 = class _m {
  constructor(t3) {
    this._create = t3, this._items = new Array(), this._itemsPtr = 0;
  }
  get() {
    return 0 === this._itemsPtr && t(() => this._reset()), this._itemsPtr >= this._items.length && this._items.push(this._create()), this._items[this._itemsPtr++];
  }
  _reset() {
    const t3 = 2 * this._itemsPtr;
    this._items.length > t3 && (this._items.length = t3), this._itemsPtr = 0;
  }
  static createVec2f64() {
    return new _m(n3);
  }
  static createVec3f64() {
    return new _m(n);
  }
  static createVec4f64() {
    return new _m(n2);
  }
  static createMat3f64() {
    return new _m(e2);
  }
  static createMat4f64() {
    return new _m(e);
  }
  static createQuatf64() {
    return new _m(e3);
  }
  get test() {
  }
};

// node_modules/@arcgis/core/geometry/support/vectorStacks.js
var t2 = m2.createVec2f64();
var c2 = m2.createVec3f64();
var r3 = m2.createVec4f64();
var a2 = m2.createMat3f64();
var f2 = m2.createMat4f64();
var o2 = m2.createQuatf64();

// node_modules/@arcgis/core/views/3d/support/mathUtils.js
function m3(t3) {
  const n4 = t3[0] * t3[0] + t3[4] * t3[4] + t3[8] * t3[8], s2 = t3[1] * t3[1] + t3[5] * t3[5] + t3[9] * t3[9], r4 = t3[2] * t3[2] + t3[6] * t3[6] + t3[10] * t3[10];
  return Math.sqrt(Math.max(n4, s2, r4));
}
function g2(t3, s2) {
  const r4 = Math.sqrt(s2[0] * s2[0] + s2[4] * s2[4] + s2[8] * s2[8]), o3 = Math.sqrt(s2[1] * s2[1] + s2[5] * s2[5] + s2[9] * s2[9]), a3 = Math.sqrt(s2[2] * s2[2] + s2[6] * s2[6] + s2[10] * s2[10]);
  return o(t3, r4, o3, a3), t3;
}
function q(t3, s2, a3) {
  Math.abs(t3[0]) > Math.abs(t3[1]) ? o(s2, 0, 1, 0) : o(s2, 1, 0, 0), _(a3, t3, s2), _(s2, a3, t3), A(a3, a3), A(s2, s2);
}
var w = n();
var y = n();
var z = n();
var A2 = n();
var B = n();

// node_modules/@arcgis/core/geometry/support/plane.js
function M(t3 = $) {
  return [t3[0], t3[1], t3[2], t3[3]];
}
function D(t3 = $[0], n4 = $[1], r4 = $[2], o3 = $[3]) {
  return U(t3, n4, r4, o3, r3.get());
}
function h2(t3, n4) {
  return U(n4[0], n4[1], n4[2], n4[3], t3);
}
function O(t3) {
  return t3;
}
function U(t3, n4, r4, o3, c3 = M()) {
  return c3[0] = t3, c3[1] = n4, c3[2] = r4, c3[3] = o3, c3;
}
function l(t3, n4, r4) {
  const o3 = n4[0] * n4[0] + n4[1] * n4[1] + n4[2] * n4[2], c3 = Math.abs(o3 - 1) > 1e-5 && o3 > 1e-12 ? 1 / Math.sqrt(o3) : 1;
  return r4[0] = n4[0] * c3, r4[1] = n4[1] * c3, r4[2] = n4[2] * c3, r4[3] = -(r4[0] * t3[0] + r4[1] * t3[1] + r4[2] * t3[2]), r4;
}
function p(t3, n4, r4, o3 = M()) {
  const c3 = r4[0] - n4[0], e4 = r4[1] - n4[1], u3 = r4[2] - n4[2], I2 = t3[0] - n4[0], i2 = t3[1] - n4[1], f3 = t3[2] - n4[2], s2 = e4 * f3 - u3 * i2, N = u3 * I2 - c3 * f3, E2 = c3 * i2 - e4 * I2, a3 = s2 * s2 + N * N + E2 * E2, T = Math.abs(a3 - 1) > 1e-5 && a3 > 1e-12 ? 1 / Math.sqrt(a3) : 1;
  return o3[0] = s2 * T, o3[1] = N * T, o3[2] = E2 * T, o3[3] = -(o3[0] * t3[0] + o3[1] * t3[1] + o3[2] * t3[2]), o3;
}
function v(t3, n4, u3, I2 = 0, i2 = Math.floor(u3 * (1 / 3)), f3 = Math.floor(u3 * (2 / 3))) {
  if (u3 < 3) return false;
  n4(R, I2);
  let s2 = i2, N = false;
  for (; s2 < u3 - 1 && !N; ) n4(j, s2), s2++, N = !H(R, j);
  if (!N) return false;
  for (s2 = Math.max(s2, f3), N = false; s2 < u3 && !N; ) n4(b2, s2), s2++, c(d, R, j), A(d, d), c(X, j, b2), A(X, X), N = !H(R, b2) && !H(j, b2) && Math.abs(P(d, X)) < F;
  return N ? (p(R, j, b2, t3), true) : (0 !== I2 || 1 !== i2 || 2 !== f3) && v(t3, n4, u3, 0, 1, 2);
}
function A3(t3, n4, r4 = true) {
  const o3 = n4.length / 3;
  return v(t3, (t4, r5) => o(t4, n4[3 * r5 + 0], n4[3 * r5 + 1], n4[3 * r5 + 2]), r4 ? o3 - 1 : o3);
}
var F = 0.99619469809;
var R = n();
var j = n();
var b2 = n();
var d = n();
var X = n();
function y2(t3, n4, r4) {
  return n4 !== t3 && h2(t3, n4), t3[3] = -P(O(t3), r4), t3;
}
function L2(t3, n4) {
  return n4[0] = -t3[0], n4[1] = -t3[1], n4[2] = -t3[2], n4[3] = -t3[3], n4;
}
function P2(t3, n4, r4, o3) {
  return _(b2, n4, t3), l(r4, b2, o3);
}
function k(t3, n4, r4, c3) {
  return Y(Z(t3, n4, c(c2.get(), r4, n4), nt, c3));
}
function x(t3, n4, r4) {
  return null != n4 && Y(Z(t3, n4.origin, n4.direction, rt, r4));
}
function q2(t3, n4, r4) {
  return Y(Z(t3, n4.origin, n4.vector, tt.NONE, r4));
}
function w2(t3, n4, r4) {
  return Y(Z(t3, n4.origin, n4.vector, tt.CLAMP, r4));
}
function z2(t3, n4) {
  return V(t3, n4) >= 0;
}
function G(t3, n4) {
  const r4 = P(O(t3), n4.ray.direction), o3 = -V(t3, n4.ray.origin);
  if (r4 > -1e-6 && r4 < 1e-6) return o3 > 0;
  const c3 = o3 / r4;
  return r4 > 0 ? c3 < n4.c1 && (n4.c1 = c3) : c3 > n4.c0 && (n4.c0 = c3), n4.c0 <= n4.c1;
}
function H2(t3, n4, r4) {
  const c3 = g(c2.get(), O(t3), -t3[3]), e4 = K(t3, c(c2.get(), n4, c3), c2.get());
  return u(r4, e4, c3), r4;
}
function J(t3, n4, r4, c3) {
  const e4 = O(t3), I2 = c2.get(), i2 = c2.get();
  q(e4, I2, i2);
  const f3 = c(c2.get(), r4, n4), s2 = f(I2, f3), N = f(i2, f3), E2 = f(e4, f3);
  return o(c3, s2, N, E2);
}
function K(t3, n4, r4) {
  const c3 = g(c2.get(), O(t3), P(O(t3), n4));
  return c(r4, n4, c3), r4;
}
function Q(t3, n4) {
  return Math.abs(V(t3, n4));
}
function V(t3, n4) {
  return P(O(t3), n4) + t3[3];
}
var W;
function Y(t3) {
  return t3 === W.INTERSECTS_INSIDE_OUT || t3 === W.INTERSECTS_OUTSIDE_IN;
}
function Z(n4, r4, o3, c3, u3) {
  const I2 = P(O(n4), o3), s2 = V(n4, r4);
  if (0 === I2) return s2 >= 0 ? W.INSIDE : W.OUTSIDE;
  let N = -s2 / I2;
  return c3 & tt.CLAMP && (N = r(N, 0, 1)), !(c3 & tt.INFINITE_MIN) && N < 0 || !(c3 & tt.INFINITE_MAX) && N > 1 ? s2 >= 0 ? W.INSIDE : W.OUTSIDE : (u(u3, r4, g(u3, o3, N)), s2 >= 0 ? W.INTERSECTS_INSIDE_OUT : W.INTERSECTS_OUTSIDE_IN);
}
!function(t3) {
  t3[t3.INTERSECTS_INSIDE_OUT = 0] = "INTERSECTS_INSIDE_OUT", t3[t3.INTERSECTS_OUTSIDE_IN = 1] = "INTERSECTS_OUTSIDE_IN", t3[t3.INSIDE = 2] = "INSIDE", t3[t3.OUTSIDE = 3] = "OUTSIDE";
}(W || (W = {}));
var $ = [0, 0, 1, 0];
var tt;
!function(t3) {
  t3[t3.NONE = 0] = "NONE", t3[t3.CLAMP = 1] = "CLAMP", t3[t3.INFINITE_MIN = 4] = "INFINITE_MIN", t3[t3.INFINITE_MAX = 8] = "INFINITE_MAX";
}(tt || (tt = {}));
var nt = tt.INFINITE_MIN | tt.INFINITE_MAX;
var rt = tt.INFINITE_MAX;

export {
  i,
  f,
  a,
  u2 as u,
  t2 as t,
  c2 as c,
  r3 as r,
  f2,
  o2 as o,
  m3 as m,
  g2 as g,
  q,
  M,
  D,
  h2 as h,
  O,
  U,
  l,
  p,
  v,
  A3 as A,
  y2 as y,
  L2 as L,
  P2 as P,
  k,
  x,
  q2,
  w2 as w,
  z2 as z,
  G,
  H2 as H,
  J,
  Q,
  V
};
//# sourceMappingURL=chunk-NVEHOQKI.js.map
