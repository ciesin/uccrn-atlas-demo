import {
  s as s2
} from "./chunk-NATJDMSF.js";
import {
  a as a2,
  c as c2,
  f2 as f
} from "./chunk-NVEHOQKI.js";
import {
  e as e2
} from "./chunk-K24WU5UX.js";
import {
  A,
  E,
  I,
  P,
  _,
  c,
  g,
  j,
  o,
  p as p2,
  q,
  r as r2,
  s,
  u,
  v
} from "./chunk-UMYFDXOJ.js";
import {
  n as n3,
  r
} from "./chunk-MHM4GDCM.js";
import {
  L,
  a
} from "./chunk-363AT5UF.js";
import {
  n
} from "./chunk-UCMTPLHQ.js";
import {
  p
} from "./chunk-53ZTROGC.js";
import {
  e
} from "./chunk-PUM22WTC.js";
import {
  n as n2,
  t
} from "./chunk-JLFSX3JT.js";
import {
  b,
  l
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/geometry/support/ray.js
function b2(i) {
  return i ? h(t(i.origin), t(i.direction)) : h(n2(), n2());
}
function h(i, r4) {
  return { origin: i, direction: r4 };
}
function k(i, r4) {
  const n5 = O.get();
  return n5.origin = i, n5.direction = r4, n5;
}
function v2(i, r4 = b2()) {
  return q2(i.origin, i.direction, r4);
}
function S(i, r4, n5 = b2()) {
  return s(n5.origin, i), c(n5.direction, r4, i), n5;
}
function q2(i, r4, n5 = b2()) {
  return s(n5.origin, i), s(n5.direction, r4), n5;
}
function w(i, r4) {
  const n5 = _(c2.get(), A(c2.get(), i.direction), c(c2.get(), r4, i.origin));
  return P(n5, n5);
}
function y(i, r4, n5) {
  const t2 = P(i.direction, c(n5, r4, i.origin));
  return u(n5, i.origin, g(n5, i.direction, t2)), n5;
}
var O = new s2(() => b2());
var U = n2();
var z = n2();
var A2 = n2();
var B = e2();

// node_modules/@arcgis/core/geometry/support/sphereUtils.js
function n4(n5, a3) {
  const c3 = r2(n5), i = l(n5[2] / c3), r4 = Math.atan2(n5[1] / c3, n5[0] / c3);
  return o(a3, c3, i, r4), a3;
}

// node_modules/@arcgis/core/chunks/sphere.js
var C = E2();
function E2() {
  return n3();
}
var _2 = L;
var k2 = L;
function w2(t2, r4) {
  return a(r4, t2);
}
function O2(t2, r4) {
  return r(t2[0], t2[1], t2[2], r4);
}
function T(t2) {
  return t2;
}
function z2(t2) {
  t2[0] = t2[1] = t2[2] = t2[3] = 0;
}
function L2(t2, r4) {
  return t2[0] = t2[1] = t2[2] = 0, t2[3] = r4, t2;
}
function N(t2) {
  return t2[3];
}
function U2(t2) {
  return t2;
}
function V(t2, r4, n5, s5) {
  return r(t2, r4, n5, s5);
}
function Z(t2, r4, n5) {
  return t2 !== n5 && (n5[0] = t2[0], n5[1] = t2[1], n5[2] = t2[2]), n5[3] = t2[3] + r4, n5;
}
function B2(t2, r4, n5) {
  return t2 !== n5 && w2(t2, n5), n5;
}
function D(t2, r4) {
  return r4;
}
function F(t2, r4, n5) {
  if (null == r4) return false;
  if (!Y(t2, r4, X)) return false;
  let { t0: s5, t1: o2 } = X;
  if ((s5 < 0 || o2 < s5 && o2 > 0) && (s5 = o2), s5 < 0) return false;
  if (n5) {
    const { origin: t3, direction: o3 } = r4;
    n5[0] = t3[0] + o3[0] * s5, n5[1] = t3[1] + o3[1] * s5, n5[2] = t3[2] + o3[2] * s5;
  }
  return true;
}
function I2(t2, r4, n5) {
  const s5 = S(r4, n5);
  if (!Y(t2, s5, X)) return [];
  const { origin: o2, direction: e3 } = s5, { t0: i, t1: a3 } = X, c3 = (r5) => {
    const n6 = n2();
    return q(n6, o2, e3, r5), $(t2, n6, n6);
  };
  return Math.abs(i - a3) < e() ? [c3(i)] : [c3(i), c3(a3)];
}
var X = { t0: 0, t1: 0 };
function Y(t2, r4, n5) {
  const { origin: s5, direction: o2 } = r4, e3 = G;
  e3[0] = s5[0] - t2[0], e3[1] = s5[1] - t2[1], e3[2] = s5[2] - t2[2];
  const i = o2[0] * o2[0] + o2[1] * o2[1] + o2[2] * o2[2];
  if (0 === i) return false;
  const a3 = 2 * (o2[0] * e3[0] + o2[1] * e3[1] + o2[2] * e3[2]), c3 = a3 * a3 - 4 * i * (e3[0] * e3[0] + e3[1] * e3[1] + e3[2] * e3[2] - t2[3] * t2[3]);
  if (c3 < 0) return false;
  const u2 = Math.sqrt(c3);
  return n5.t0 = (-a3 - u2) / (2 * i), n5.t1 = (-a3 + u2) / (2 * i), true;
}
var G = n2();
function H(t2, r4) {
  return F(t2, r4, null);
}
function J(t2, r4, i) {
  if (F(t2, r4, i)) return i;
  const a3 = K(t2, r4, c2.get());
  return u(i, r4.origin, g(c2.get(), r4.direction, p2(r4.origin, a3) / r2(r4.direction))), i;
}
function K(t2, n5, o2) {
  const c3 = c2.get(), u2 = f.get();
  _(c3, n5.origin, n5.direction);
  const f2 = N(t2);
  _(o2, c3, n5.origin), g(o2, o2, 1 / r2(o2) * f2);
  const m = rt(t2, n5.origin), l2 = a2(n5.origin, o2);
  return p(u2, l2 + m, c3), E(o2, o2, u2), o2;
}
function Q(t2, r4, n5, s5) {
  const o2 = N(t2), e3 = o2 * o2, i = r4 + 0.5 * Math.PI, a3 = n5 * n5 + e3 - 2 * Math.cos(i) * n5 * o2, c3 = Math.sqrt(a3), u2 = a3 - e3;
  if (u2 <= 0) return 0.5;
  const f2 = Math.sqrt(u2), m = Math.acos(f2 / c3) - Math.asin(o2 / (c3 / Math.sin(i)));
  return Math.min(1, (m + 0.5 * s5) / s5);
}
function W(t2, r4, n5) {
  return F(t2, r4, n5) ? n5 : (y(r4, U2(t2), n5), $(t2, n5, n5));
}
function $(t2, r4, o2) {
  const i = c(c2.get(), r4, U2(t2)), a3 = g(c2.get(), i, t2[3] / r2(i));
  return u(o2, a3, U2(t2));
}
function tt(t2, r4) {
  const n5 = c(c2.get(), r4, U2(t2)), s5 = j(n5), o2 = t2[3] * t2[3];
  return Math.sqrt(Math.abs(s5 - o2));
}
function rt(r4, n5) {
  const s5 = c(c2.get(), n5, U2(r4)), o2 = r2(s5), i = N(r4), a3 = i + Math.abs(i - o2);
  return b(i / a3);
}
var nt = n2();
function st(t2, r4, n5, s5) {
  const o2 = c(nt, r4, U2(t2));
  switch (n5) {
    case n.X: {
      const t3 = n4(o2, nt)[2];
      return o(s5, -Math.sin(t3), Math.cos(t3), 0);
    }
    case n.Y: {
      const t3 = n4(o2, nt), r5 = t3[1], n6 = t3[2], e3 = Math.sin(r5);
      return o(s5, -e3 * Math.cos(n6), -e3 * Math.sin(n6), Math.cos(r5));
    }
    case n.Z:
      return A(s5, o2);
    default:
      return;
  }
}
function ot(t2, r4) {
  const n5 = c(ct, r4, U2(t2));
  return r2(n5) - t2[3];
}
function et(t2, r4, o2, e3) {
  const i = ot(t2, r4), a3 = st(t2, r4, n.Z, ct), c3 = g(ct, a3, o2 - i);
  return u(e3, r4, c3);
}
function it(t2, r4) {
  const n5 = v(U2(t2), r4), s5 = N(t2);
  return n5 <= s5 * s5;
}
function at(t2, r4, n5 = n3()) {
  const s5 = p2(U2(t2), U2(r4)), e3 = t2[3], i = r4[3];
  return s5 + i < e3 ? (a(n5, t2), n5) : s5 + e3 < i ? (a(n5, r4), n5) : (I(n5, U2(t2), U2(r4), (s5 + i - e3) / (2 * s5)), n5[3] = (s5 + e3 + i) / 2, n5);
}
var ct = n2();
var ut = E2();
var ft = Object.freeze(Object.defineProperty({ __proto__: null, NullSphere: C, altitudeAt: ot, angleToSilhouette: rt, axisAt: st, cameraFrustumCoverage: Q, clear: z2, closestPoint: W, closestPointOnSilhouette: K, containsPoint: it, copy: w2, create: E2, distanceToSilhouette: tt, elevate: Z, equals: k2, exactEquals: _2, fromCenterAndRadius: O2, fromRadius: L2, fromValues: V, getCenter: U2, getExtent: D, getRadius: N, intersectLine: I2, intersectRay: F, intersectRayClosestSilhouette: J, intersectsRay: H, projectPoint: $, setAltitudeAt: et, setExtent: B2, tmpSphere: ut, union: at, wrap: T }, Symbol.toStringTag, { value: "Module" }));

export {
  b2 as b,
  k,
  v2 as v,
  S,
  w,
  C,
  E2 as E,
  _2 as _,
  w2,
  O2 as O,
  T,
  N,
  U2 as U,
  V,
  I2 as I,
  H,
  $,
  it,
  ft
};
//# sourceMappingURL=chunk-WAKNRSGF.js.map
