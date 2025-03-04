import {
  e as e2,
  n as n2
} from "./chunk-NQPBPVRE.js";
import {
  E,
  j as j2,
  m,
  x
} from "./chunk-PFFYYIYN.js";
import {
  n
} from "./chunk-O2L6JAHP.js";
import {
  d,
  e,
  j,
  l,
  p as p2,
  q,
  u
} from "./chunk-K35H6D4D.js";
import {
  H,
  p
} from "./chunk-UMYFDXOJ.js";
import {
  r
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/interactive/sketch/normalizedPoint.js
var l2;
function f(n4, t, e3) {
  return c(n4, t, e3);
}
function c(t = 0, e3 = 0, o = 0) {
  return r(t, e3, o);
}
function a(n4) {
  return n4;
}
function s(n4) {
  return n4;
}
function d2(t, e3, o) {
  return a(r(t, e3, o));
}
function v(n4) {
  const [t, e3, o] = n4;
  return n4.length > 3 ? [t, e3, o, n4[3]] : [t, e3, o];
}
function p3(n4) {
  return n4[3] = ((n4.length > 3 ? n4[3] : void 0) ?? l2.NONE) | l2.TARGET, n4;
}
function m2(n4) {
  return Boolean(((n4.length > 3 ? n4[3] : void 0) ?? l2.NONE) & l2.TARGET);
}
function N(n4, t, { coordinateHelper: e3, elevationInfo: o }, r4) {
  return n4 ? E2(e3.vectorToDehydratedPoint(n4, g), t, o, r4) : null;
}
function E2(n4, t, e3, u2 = c()) {
  return u2[0] = n4.x, u2[1] = n4.y, u2[2] = n4.z ?? 0, null == t || ("2d" === t.type ? u2[2] = 0 : u2[2] = m(t, n4, e3, j2) ?? 0), u2;
}
function T(n4, o, r4) {
  return r4 ? (n2(r4, n4[0], n4[1], n4[2], o), r4) : e2(n4[0], n4[1], n4[2], o);
}
function h(n4, o, { z: i, m: l3 }, f2, c2) {
  const { spatialReference: a2, elevationInfo: s3 } = f2;
  let d4;
  if (null == i && null == l3) d4 = void 0;
  else if (null == o || "2d" === o.type) d4 = i ?? void 0;
  else {
    d4 = x(o, n4, a2, j2, s3) ?? 0;
  }
  const [v3, p4] = n4;
  return c2 ? n2(c2, v3, p4, d4, a2) : c2 = e2(v3, p4, d4, a2), null != l3 && (c2.m = l3, c2.hasM = true), c2;
}
function y(n4, t, e3, o, u2 = c()) {
  const [f2, a2] = n4;
  return u2[0] = f2, u2[1] = a2, n4.length > 3 && (u2[3] = n4[3] ?? l2.NONE), "3d" !== (e3 == null ? void 0 : e3.type) ? (u2[2] = t.value, u2) : (u2[2] = E(e3, f2, a2, t.value, o, t.elevationInfo, j2) ?? 0, u2);
}
!function(n4) {
  n4[n4.NONE = 0] = "NONE", n4[n4.TARGET = 1] = "TARGET";
}(l2 || (l2 = {}));
var g = e2(0, 0, 0, null);

// node_modules/@arcgis/core/views/interactive/snapping/SnappingDomain.js
var E3;
!function(E5) {
  E5[E5.FEATURE = 1] = "FEATURE", E5[E5.SELF = 2] = "SELF", E5[E5.ALL = 3] = "ALL";
}(E3 || (E3 = {}));

// node_modules/@arcgis/core/views/interactive/snapping/hints/SnappingHint.js
var s2 = class {
  constructor(s3, t) {
    this.isDraped = s3, this.domain = t;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/hints/LineSnappingHint.js
var n3 = class _n extends s2 {
  constructor(t, e3, s3, n4, r4 = E3.ALL, a2 = true, h2 = true) {
    super(n4, r4), this.type = t, this.lineStart = e3, this.lineEnd = s3, this.fadeLeft = a2, this.fadeRight = h2;
  }
  equals(e3) {
    return e3 instanceof _n && (this.type === e3.type && H(this.lineStart, e3.lineStart) && H(this.lineEnd, e3.lineEnd) && this.fadeLeft === e3.fadeLeft && this.fadeRight === e3.fadeRight);
  }
  get length() {
    return p(this.lineStart, this.lineEnd);
  }
};

// node_modules/@arcgis/core/views/support/geometry2dUtils.js
function m5(t, n4) {
  return t[0] * n4[1] - t[1] * n4[0];
}
function E4(t, n4, o) {
  const c2 = j(o, n4) / p2(o);
  return l(t, o, c2);
}
function I(t, n4, r4, e3, s3 = r4) {
  return e(x2, e3, r4), e(g2, n4, s3), E4(A, g2, x2), u(t, s3, A);
}
function N2(t, n4, r4, e3) {
  e(x2, n4, r4);
  const s3 = e3 / q(x2);
  return d(t, r4, x2, s3);
}
function b(t, n4) {
  const r4 = t.start, e3 = t.end, s3 = n4.start, c2 = n4.end, i = e(x2, e3, r4), f2 = e(M, c2, s3), a2 = m5(i, f2);
  if (Math.abs(a2) <= v2) return [];
  const p4 = e(g2, r4, s3), h2 = m5(f2, p4) / a2, E5 = m5(i, p4) / a2;
  if (h2 >= 0) {
    if (E5 >= 0 || n4.type === j3.LINE) return [d(A, r4, i, h2)];
  } else if (t.type === j3.LINE && (E5 >= 0 || n4.type === j3.LINE)) return [d(A, r4, i, h2)];
  return [];
}
function d3(t, n4, s3) {
  const c2 = [], i = e(x2, t.end, t.start), f2 = e(M, t.start, n4), a2 = p2(i), p4 = 2 * j(i, f2), m6 = p4 * p4 - 4 * a2 * (p2(f2) - s3 * s3);
  if (0 === m6) {
    const n5 = -p4 / (2 * a2);
    (t.type === j3.LINE || n5 >= 0) && c2.push(d(A, t.start, i, n5));
  } else if (m6 > 0) {
    const n5 = Math.sqrt(m6), r4 = (-p4 + n5) / (2 * a2);
    (t.type === j3.LINE || r4 >= 0) && c2.push(d(A, t.start, i, r4));
    const e3 = (-p4 - n5) / (2 * a2);
    (t.type === j3.LINE || e3 >= 0) && c2.push(d(g2, t.start, i, e3));
  }
  return c2;
}
var j3;
!function(t) {
  t[t.RAY = 0] = "RAY", t[t.LINE = 1] = "LINE";
}(j3 || (j3 = {}));
var v2 = 1e-6;
var x2 = n();
var M = n();
var g2 = n();
var A = n();

export {
  f,
  c,
  a,
  s,
  d2 as d,
  v,
  p3 as p,
  m2 as m,
  N,
  E2 as E,
  T,
  h,
  y,
  E3 as E2,
  s2,
  n3 as n,
  I,
  N2,
  b,
  d3 as d2,
  j3 as j
};
//# sourceMappingURL=chunk-6MN3R543.js.map
