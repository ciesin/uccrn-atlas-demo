import {
  p
} from "./chunk-QM4DRRZI.js";
import "./chunk-LPMFP5XM.js";
import "./chunk-SUVHJC6Z.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/geometry/geometryEngineAsync.js
function r(n) {
  var _a;
  return Array.isArray(n) ? (_a = n[0]) == null ? void 0 : _a.spatialReference : n == null ? void 0 : n.spatialReference;
}
function a(n) {
  return n ? Array.isArray(n) ? n.map(a) : n.toJSON ? n.toJSON() : n : n;
}
function i(n) {
  return Array.isArray(n) ? n.map((n2) => f(n2)) : f(n);
}
function o(n, t) {
  let e;
  return Array.isArray(n) ? e = n : (e = [], e.push(n), null != t && e.push(t)), e;
}
var c;
async function u() {
  return c || (c = p("geometryEngineWorker", { strategy: "distributed" })), c;
}
async function s(n, t) {
  return (await u()).invoke("executeGEOperation", { operation: n, parameters: a(t) });
}
async function f2(n, t) {
  const e = await u();
  return Promise.all(e.broadcast("executeGEOperation", { operation: n, parameters: a(t) }));
}
function l(n) {
  return s("extendedSpatialReferenceInfo", [n]);
}
async function w(n, t) {
  return i(await s("clip", [r(n), n, t]));
}
async function y(n, t) {
  return i(await s("cut", [r(n), n, t]));
}
function p2(n, t) {
  return s("contains", [r(n), n, t]);
}
function m(n, t) {
  return s("crosses", [r(n), n, t]);
}
function d(n, t, e) {
  return s("distance", [r(n), n, t, e]);
}
function g(n, t) {
  return s("equals", [r(n), n, t]);
}
function h(n, t) {
  return s("intersects", [r(n), n, t]);
}
function S(n, t) {
  return s("touches", [r(n), n, t]);
}
function x(n, t) {
  return s("within", [r(n), n, t]);
}
function A(n, t) {
  return s("disjoint", [r(n), n, t]);
}
function O(n, t) {
  return s("overlaps", [r(n), n, t]);
}
function R(n, t, e) {
  return s("relate", [r(n), n, t, e]);
}
function J(n) {
  return s("isSimple", [r(n), n]);
}
async function N(n) {
  return i(await s("simplify", [r(n), n]));
}
async function j2(n, t = false) {
  return i(await s("convexHull", [r(n), n, t]));
}
async function E(n, t) {
  return i(await s("difference", [r(n), n, t]));
}
async function k(n, t) {
  return i(await s("symmetricDifference", [r(n), n, t]));
}
async function D(n, t) {
  return i(await s("intersect", [r(n), n, t]));
}
async function b(n, t = null) {
  const e = o(n, t);
  return i(await s("union", [r(e), e]));
}
async function v(n, t, e, a2, o2, c2) {
  return i(await s("offset", [r(n), n, t, e, a2, o2, c2]));
}
async function L(n, t, e, a2 = false) {
  const o2 = [r(n), n, t, e, a2];
  return i(await s("buffer", o2));
}
async function P(n, t, e, a2, o2, c2) {
  const u2 = [r(n), n, t, e, a2, o2, c2];
  return i(await s("geodesicBuffer", u2));
}
async function T(n, e, a2 = true) {
  const i2 = await s("nearestCoordinate", [r(n), n, e, a2]);
  return { ...i2, coordinate: j.fromJSON(i2.coordinate) };
}
async function V(n, e) {
  const a2 = await s("nearestVertex", [r(n), n, e]);
  return { ...a2, coordinate: j.fromJSON(a2.coordinate) };
}
async function z(n, e, a2, i2) {
  return (await s("nearestVertices", [r(n), n, e, a2, i2])).map((n2) => ({ ...n2, coordinate: j.fromJSON(n2.coordinate) }));
}
function G(n) {
  var _a;
  return "xmin" in n ? n.center : "x" in n ? n : (_a = n.extent) == null ? void 0 : _a.center;
}
async function H(n, t, e) {
  if (null == n) throw new Z();
  const r2 = n.spatialReference;
  if (null == (e = e ?? G(n))) throw new Z();
  const a2 = n.constructor.fromJSON(await s("rotate", [r2, n, t, e]));
  return a2.spatialReference = r2, a2;
}
async function I(n, t) {
  if (null == n) throw new Z();
  const e = n.spatialReference;
  if (null == (t = t ?? G(n))) throw new Z();
  const r2 = n.constructor.fromJSON(await s("flipHorizontal", [e, n, t]));
  return r2.spatialReference = e, r2;
}
async function q(n, t) {
  if (null == n) throw new Z();
  const e = n.spatialReference;
  if (null == (t = t ?? G(n))) throw new Z();
  const r2 = n.constructor.fromJSON(await s("flipVertical", [e, n, t]));
  return r2.spatialReference = e, r2;
}
async function B(n, t, e, a2) {
  return i(await s("generalize", [r(n), n, t, e, a2]));
}
async function C(n, t, e) {
  return i(await s("densify", [r(n), n, t, e]));
}
async function U(n, t, e, a2 = 0) {
  return i(await s("geodesicDensify", [r(n), n, t, e, a2]));
}
function W(n, t) {
  return s("planarArea", [r(n), n, t]);
}
function F(n, t) {
  return s("planarLength", [r(n), n, t]);
}
function K(n, t, e) {
  return s("geodesicArea", [r(n), n, t, e]);
}
function M(n, t, e) {
  return s("geodesicLength", [r(n), n, t, e]);
}
async function Q(n, t) {
  return i(await s("intersectLinesToPoints", [r(n), n, t]));
}
async function X(n, t) {
  await f2("changeDefaultSpatialReferenceTolerance", [n, t]);
}
async function Y(n) {
  await f2("clearDefaultSpatialReferenceTolerance", [n]);
}
var Z = class extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
};
export {
  L as buffer,
  X as changeDefaultSpatialReferenceTolerance,
  Y as clearDefaultSpatialReferenceTolerance,
  w as clip,
  p2 as contains,
  j2 as convexHull,
  m as crosses,
  y as cut,
  C as densify,
  E as difference,
  A as disjoint,
  d as distance,
  g as equals,
  l as extendedSpatialReferenceInfo,
  I as flipHorizontal,
  q as flipVertical,
  B as generalize,
  K as geodesicArea,
  P as geodesicBuffer,
  U as geodesicDensify,
  M as geodesicLength,
  D as intersect,
  Q as intersectLinesToPoints,
  h as intersects,
  J as isSimple,
  T as nearestCoordinate,
  V as nearestVertex,
  z as nearestVertices,
  v as offset,
  O as overlaps,
  W as planarArea,
  F as planarLength,
  R as relate,
  H as rotate,
  N as simplify,
  k as symmetricDifference,
  S as touches,
  b as union,
  x as within
};
//# sourceMappingURL=geometryEngineAsync-KKCD4JUK.js.map
