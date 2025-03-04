import {
  f as f3,
  l as l2,
  x as x3
} from "./chunk-JZ73EOI6.js";
import {
  D,
  j as j2,
  w
} from "./chunk-XRSAD6QO.js";
import {
  p as p2
} from "./chunk-ZICOUAEG.js";
import {
  c as c3
} from "./chunk-SAKWOT4E.js";
import "./chunk-ST4S6525.js";
import {
  o as o2,
  s as s3,
  t as t5,
  u as u3
} from "./chunk-LVFK4OUO.js";
import {
  M,
  X,
  _,
  v
} from "./chunk-MTALVDVJ.js";
import {
  g as g2
} from "./chunk-ZKALV3WF.js";
import "./chunk-GUYEM3OQ.js";
import {
  i as i3
} from "./chunk-3GW3EWES.js";
import {
  f,
  m
} from "./chunk-CM7YPB6K.js";
import {
  f as f2,
  m as m2
} from "./chunk-XRDOU55I.js";
import {
  i as i6
} from "./chunk-FNPDGI7F.js";
import {
  l as l3
} from "./chunk-HGZYMQRE.js";
import {
  g,
  l
} from "./chunk-6J2UC6LX.js";
import "./chunk-RI5DYBGC.js";
import {
  c as c2
} from "./chunk-OXTR326K.js";
import "./chunk-I7YJKQIK.js";
import {
  l as l4
} from "./chunk-EEFNENOP.js";
import {
  f as f4
} from "./chunk-ERYEMJJA.js";
import {
  o,
  s as s2,
  t as t2,
  u as u2
} from "./chunk-KOUTR62H.js";
import {
  o as o3,
  s as s4,
  t as t7
} from "./chunk-5P3T3RZH.js";
import {
  m as m3
} from "./chunk-KMF4BOZM.js";
import {
  i as i7
} from "./chunk-KCHKJNR6.js";
import {
  i as i4
} from "./chunk-4666V5PX.js";
import {
  i as i5
} from "./chunk-YAPVFFRU.js";
import {
  t
} from "./chunk-LW2C7HNM.js";
import {
  t as t4
} from "./chunk-BDCHRFF2.js";
import {
  t as t6
} from "./chunk-ZAUKOSRW.js";
import {
  t as t8
} from "./chunk-W5TKDOM5.js";
import {
  t as t3
} from "./chunk-SNQTNZFH.js";
import {
  a,
  c,
  i,
  s,
  u
} from "./chunk-NV4SLGL4.js";
import {
  e
} from "./chunk-565WHU6G.js";
import "./chunk-DUTUUNDM.js";
import {
  i as i2
} from "./chunk-CYOGLYME.js";
import {
  p
} from "./chunk-T3YG4OQI.js";
import {
  C,
  R,
  Z,
  j,
  x as x2
} from "./chunk-FZLDYYQZ.js";
import "./chunk-5GRVYYCJ.js";
import "./chunk-MMRIUVCH.js";
import {
  Xm2 as Xm,
  hl
} from "./chunk-NEFPLHSJ.js";
import "./chunk-VUD5O2WG.js";
import "./chunk-67PUVBHA.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  E,
  I2 as I,
  x
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/geodesicBufferOperator.js
var p3;
var u4;
var m4;
var c4;
var l5;
function f5() {
  return !!p3 && s();
}
async function y() {
  if (!f5()) {
    const [e2] = await Promise.all([import("./apiConverter-FWDHR6ZO.js"), u()]);
    p3 = e2.fromGeometry, u4 = e2.fromSpatialReference, m4 = e2.getSpatialReference, c4 = e2.toPolygon, l5 = a();
  }
}
function g3(e2, r2, o4 = {}) {
  let { curveType: a9 = "geodesic", maxDeviation: i12 = NaN, unit: l9 } = o4;
  l9 && (r2 = x(r2, l9, "meters"), i12 && (i12 = x(i12, l9, "meters")));
  const f9 = m4(e2);
  return c4(i(p3(e2), u4(f9), e[a9], r2, i12), f9);
}
function d(r2, o4, s13 = {}) {
  let { curveType: i12 = "geodesic", maxDeviation: l9 = NaN, union: f9 = false, unit: y2 } = s13;
  y2 && (o4 = o4.map((e2) => x(e2, y2, "meters")), l9 && (l9 = x(l9, y2, "meters")));
  const g4 = r2.map(p3), d2 = m4(r2);
  return c(g4, u4(d2), e[i12], o4, l9, f9).map((e2) => c4(e2, d2)).filter(G);
}
var v2 = Object.freeze(Object.defineProperty({ __proto__: null, execute: g3, executeMany: d, isLoaded: f5, load: y, get supportsCurves() {
  return l5;
} }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/bufferOperator.js
function p4(e2, t9, s13 = {}) {
  const { unit: p13 } = s13, m10 = C(e2);
  return p13 && (t9 = I(t9, p13, m10)), R(f3(x2(e2), j(m10), t9), m10);
}
function m5(t9, o4, p13 = {}) {
  let { maxDeviation: m10 = NaN, maxVerticesInFullCircle: c15 = 96, union: l9 = false, unit: f9 } = p13;
  const x4 = C(t9);
  f9 && (o4 = o4.map((e2) => I(e2, f9, x4)), m10 && (m10 = I(m10, f9, x4)));
  const j3 = t9.map(x2);
  return l2(j3, j(x4), o4, m10, c15, l9).map((e2) => R(e2, x4)).filter(G);
}
var c5 = x3();
var l6 = Object.freeze(Object.defineProperty({ __proto__: null, execute: p4, executeMany: m5, supportsCurves: c5 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/containsOperator.js
var s5 = new Xm();
function n(e2) {
  const n9 = C(e2);
  return s5.accelerateGeometry(x2(e2), j(n9), 1);
}
function a2(e2, r2) {
  return s5.execute(x2(e2), x2(r2), j(e2.spatialReference), null);
}
var c6 = s5.supportsCurves();
var u5 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: n, execute: a2, supportsCurves: c6 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/convexHullOperator.js
function u6(e2) {
  const r2 = C(e2);
  return Z(M(x2(e2)), r2);
}
function p5(e2, o4 = {}) {
  const { merge: t9 = false } = o4, u13 = e2.map(x2), p13 = C(e2);
  return v(u13, t9).map((e3) => Z(e3, p13));
}
function c7(e2) {
  return _(x2(e2));
}
var i8 = X();
var m6 = Object.freeze(Object.defineProperty({ __proto__: null, execute: u6, executeMany: p5, isConvex: c7, supportsCurves: i8 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/crossesOperator.js
var s6 = new t();
function a3(e2) {
  const a9 = C(e2);
  return s6.accelerateGeometry(x2(e2), j(a9), 1);
}
function n2(e2, r2) {
  return s6.execute(x2(e2), x2(r2), j(e2.spatialReference), null);
}
var c8 = s6.supportsCurves();
var p6 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a3, execute: n2, supportsCurves: c8 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/disjointOperator.js
var s7 = new hl();
function a4(e2) {
  const a9 = C(e2);
  return s7.accelerateGeometry(x2(e2), j(a9), 1);
}
function n3(e2, r2) {
  return s7.execute(x2(e2), x2(r2), j(e2.spatialReference));
}
var c9 = s7.supportsCurves();
var p7 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a4, execute: n3, supportsCurves: c9 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/intersectionOperator.js
function u7(e2) {
  const r2 = C(e2);
  return t2(x2(e2), j(r2));
}
function i9(e2, r2) {
  const t9 = C(e2);
  return Z(o(x2(e2), x2(r2), j(t9)), t9);
}
function m7(r2, t9) {
  const o4 = r2.map(x2), u13 = C(r2);
  return u2(o4, x2(t9), j(u13), 7).map((e2) => Z(e2, u13)).filter(G);
}
var f6 = s2();
var l7 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: u7, execute: i9, executeMany: m7, supportsCurves: f6 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/intersectsOperator.js
var s8 = new t3();
function a5(e2) {
  const a9 = C(e2);
  return s8.accelerateGeometry(x2(e2), j(a9), 1);
}
function n4(e2, r2) {
  return s8.execute(x2(e2), x2(r2), j(e2.spatialReference), null);
}
var c10 = s8.supportsCurves();
var p8 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a5, execute: n4, supportsCurves: c10 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/lengthOperator.js
function r(r2, s13 = {}) {
  const { unit: n9 } = s13;
  let u13 = x2(r2).calculateLength2D();
  if (u13 && n9) {
    const t9 = C(r2);
    u13 = E(u13, t9, n9);
  }
  return u13;
}
var s9 = true;
var n5 = Object.freeze(Object.defineProperty({ __proto__: null, execute: r, supportsCurves: s9 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/offsetOperator.js
var p9 = { round: 0, bevel: 1, miter: 2, square: 3 };
function m8(r2, t9, s13 = {}) {
  const { miterLimit: m10 = 10, flattenError: c15 = 0, joins: f9 = "round", unit: l9 } = s13, j3 = C(r2);
  return l9 && (t9 = I(t9, l9, j3)), Z(w(x2(r2), j(j3), t9, p9[f9], m10, c15), j3);
}
function c11(t9, o4, m10 = {}) {
  const { miterLimit: c15 = 10, flattenError: f9 = 0, joins: l9 = "round", unit: j3 } = m10, y2 = C(t9);
  j3 && (o4 = I(o4, j3, y2));
  const x4 = t9.map(x2);
  return j2(x4, j(y2), o4, p9[l9], c15, f9).map((r2) => Z(r2, y2)).filter(G);
}
var f7 = D();
var l8 = Object.freeze(Object.defineProperty({ __proto__: null, execute: m8, executeMany: c11, supportsCurves: f7 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/overlapsOperator.js
var s10 = new t4();
function a6(e2) {
  const a9 = C(e2);
  return s10.accelerateGeometry(x2(e2), j(a9), 1);
}
function n6(e2, r2) {
  return s10.execute(x2(e2), x2(r2), j(e2.spatialReference), null);
}
var p10 = s10.supportsCurves();
var u8 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a6, execute: n6, supportsCurves: p10 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/simplifyOperator.js
function u9(e2) {
  const t9 = C(e2);
  return Z(t5(x2(e2), j(t9), false), t9);
}
function i10(e2) {
  const r2 = e2.map(x2), o4 = C(e2);
  return o2(r2, j(o4), false).map((e3) => Z(e3, o4));
}
function c12(e2) {
  return u3(x2(e2), j(C(e2)), false);
}
var m9 = s3();
var f8 = Object.freeze(Object.defineProperty({ __proto__: null, execute: u9, executeMany: i10, isSimple: c12, supportsCurves: m9 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/touchesOperator.js
var s11 = new t6();
function a7(e2) {
  const a9 = C(e2);
  return s11.accelerateGeometry(x2(e2), j(a9), 1);
}
function n7(e2, r2) {
  return s11.execute(x2(e2), x2(r2), j(e2.spatialReference), null);
}
var u10 = s11.supportsCurves();
var c13 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a7, execute: n7, supportsCurves: u10 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/unionOperator.js
function u11(e2, r2) {
  const u13 = C(e2);
  return Z(o3(x2(e2), x2(r2), j(u13)), u13);
}
function p11(e2) {
  const o4 = e2.map(x2), u13 = C(e2);
  return Z(t7(o4, j(u13)), u13);
}
var c14 = s4();
var i11 = Object.freeze(Object.defineProperty({ __proto__: null, execute: u11, executeMany: p11, supportsCurves: c14 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/withinOperator.js
var s12 = new t8();
function a8(e2) {
  const a9 = C(e2);
  return s12.accelerateGeometry(x2(e2), j(a9), 1);
}
function n8(e2, r2) {
  return s12.execute(x2(e2), x2(r2), j(e2.spatialReference), null);
}
var p12 = s12.supportsCurves();
var u12 = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: a8, execute: n8, supportsCurves: p12 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/arcade/geometry/operators.js
function O(r2, e2, o4, s13) {
  const t9 = new i2().rotate(e2, o4, s13);
  return p(r2, t9);
}
async function k() {
  await Promise.all([m(), y(), l(), m2()]);
}
export {
  i3 as area,
  l6 as buffer,
  p2 as centroid,
  i4 as clip,
  u5 as contains,
  m6 as convexHull,
  p6 as crosses,
  i5 as cut,
  l3 as densify,
  m3 as difference,
  p7 as disjoint,
  i6 as distance,
  l4 as equals,
  c2 as generalize,
  v2 as geodesicBuffer,
  f as geodeticArea,
  g as geodeticDensify,
  f2 as geodeticLength,
  l7 as intersection,
  p8 as intersects,
  c3 as labelPoint,
  n5 as length,
  k as loadAll,
  l8 as offset,
  u8 as overlaps,
  g2 as proximity,
  f4 as relate,
  O as rotate,
  f8 as simplify,
  i7 as symmetricDifference,
  c13 as touches,
  i11 as union,
  u12 as within
};
//# sourceMappingURL=operators-ZSLABIRB.js.map
