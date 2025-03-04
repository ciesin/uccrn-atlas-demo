import {
  t
} from "./chunk-GTAKWPJC.js";
import {
  R as R2
} from "./chunk-67XXGAOA.js";
import {
  L as L2,
  Q,
  V
} from "./chunk-4WERUJEK.js";
import {
  f,
  m,
  s as s3,
  y
} from "./chunk-WZBMMIVS.js";
import {
  l
} from "./chunk-W633AKTD.js";
import {
  M,
  R,
  d
} from "./chunk-YUVX6H42.js";
import {
  N,
  O2 as O,
  P2 as P,
  U,
  s2,
  se
} from "./chunk-LTDNORB5.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  L
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var c = [0, 0];
function l2(s4, t2) {
  if (!t2) return null;
  if ("x" in t2) {
    const e = { x: 0, y: 0 };
    return [e.x, e.y] = s4(t2.x, t2.y, c), null != t2.z && (e.z = t2.z), null != t2.m && (e.m = t2.m), e;
  }
  if ("xmin" in t2) {
    const e = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return [e.xmin, e.ymin] = s4(t2.xmin, t2.ymin, c), [e.xmax, e.ymax] = s4(t2.xmax, t2.ymax, c), t2.hasZ && (e.zmin = t2.zmin, e.zmax = t2.zmax, e.hasZ = true), t2.hasM && (e.mmin = t2.mmin, e.mmax = t2.mmax, e.hasM = true), e;
  }
  return "rings" in t2 ? { rings: h(t2.rings, s4), hasM: t2.hasM, hasZ: t2.hasZ } : "paths" in t2 ? { paths: h(t2.paths, s4), hasM: t2.hasM, hasZ: t2.hasZ } : "points" in t2 ? { points: f2(t2.points, s4), hasM: t2.hasM, hasZ: t2.hasZ } : null;
}
function h(s4, t2) {
  const e = [];
  for (const n of s4) e.push(f2(n, t2));
  return e;
}
function f2(s4, t2) {
  const e = [];
  for (const n of s4) {
    const s5 = t2(n[0], n[1], [0, 0]);
    e.push(s5), n.length > 2 && s5.push(n[2]), n.length > 3 && s5.push(n[3]);
  }
  return e;
}
async function x(t2, n) {
  if (!t2 || !n) return;
  const r = Array.isArray(t2) ? t2.map((s4) => null != s4.geometry ? s4.geometry.spatialReference : null).filter(G) : [t2];
  await Q(r.map((s4) => ({ source: s4, dest: n })));
}
var y2 = l2.bind(null, d);
var g = l2.bind(null, R);
function j(s4, t2, e, m2) {
  if (!s4) return null;
  if (e || (e = t2, t2 = s4.spatialReference), !N(t2) || !N(e) || s2(t2, e)) return s4;
  if (M(t2, e)) {
    const t3 = O(e) ? y2(s4) : g(s4);
    return t3.spatialReference = e, t3;
  }
  return V(t, [s4], t2, e, null, m2)[0];
}
var _ = class {
  constructor() {
    this._jobs = [], this._timer = null, this._process = this._process.bind(this);
  }
  async push(s4, e, n, r) {
    if (!(s4 == null ? void 0 : s4.length) || !e || !n || s2(e, n)) return s4;
    const i = { geometries: s4, inSpatialReference: e, outSpatialReference: n, geographicTransformation: r, resolve: L() };
    return this._jobs.push(i), this._timer ?? (this._timer = setTimeout(this._process, 10)), i.resolve.promise;
  }
  _process() {
    this._timer = null;
    const s4 = this._jobs.shift();
    if (!s4) return;
    const { geometries: t2, inSpatialReference: e, outSpatialReference: i, resolve: o2, geographicTransformation: m2 } = s4;
    M(e, i) ? O(i) ? o2(t2.map(y2)) : o2(t2.map(g)) : o2(V(t, t2, e, i, m2, null)), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
};
var M2 = new _();
function b(s4, t2, e, n) {
  return M2.push(s4, t2, e, n);
}

// node_modules/@arcgis/core/layers/graphics/data/queryUtils.js
var g2 = new o({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
var S = Object.freeze({});
var R3 = "frequency";
async function w(t2, e, i) {
  var _a, _b;
  const r = t2.bin;
  return r.onField && (r.onField = r.onField.trim()), ((_a = r.onExpression) == null ? void 0 : _a.value) && (r.onExpression.value = r.onExpression.value.trim()), r.splitBy && (r.splitBy.value && (r.splitBy.value = r.splitBy.value.trim()), r.splitBy.outAlias && (r.splitBy.outAlias = r.splitBy.outAlias.trim())), r.stackBy && (r.stackBy.value && (r.stackBy.value = r.stackBy.value.trim()), r.stackBy.outAlias && (r.stackBy.outAlias = r.stackBy.outAlias.trim())), "normalizationField" in r.parameters && r.parameters.normalizationField && (r.parameters.normalizationField = r.parameters.normalizationField.trim()), ((_b = t2.outStatistics) == null ? void 0 : _b.length) || (t2.outStatistics = [{ statisticType: "count", onStatisticField: "1", outStatisticFieldName: R3 }]), x2(t2, e, i);
}
async function x2(t2, e, i) {
  const { outFields: r, orderByFields: n, groupByFieldsForStatistics: a, outStatistics: o2 } = t2;
  if (r) for (let s4 = 0; s4 < r.length; s4++) r[s4] = r[s4].trim();
  if (n) for (let s4 = 0; s4 < n.length; s4++) n[s4] = n[s4].trim();
  if (a) for (let s4 = 0; s4 < a.length; s4++) a[s4] = a[s4].trim();
  if (o2) for (let s4 = 0; s4 < o2.length; s4++) o2[s4].onStatisticField && (o2[s4].onStatisticField = o2[s4].onStatisticField.trim());
  return t2.geometry && !t2.outSR && (t2.outSR = t2.geometry.spatialReference), B(t2, e, i);
}
async function B(t2, e, i) {
  var _a;
  if (!t2) return null;
  let { where: r } = t2;
  if (t2.where = r = r == null ? void 0 : r.trim(), (!r || /^1 *= *1$/.test(r) || e && e === r) && (t2.where = null), !t2.geometry) return t2;
  let o2 = await v(t2);
  if (t2.distance = 0, t2.units = null, "esriSpatialRelEnvelopeIntersects" === t2.spatialRel) {
    const { spatialReference: e2 } = t2.geometry;
    o2 = l(o2), o2.spatialReference = e2;
  }
  if (o2) {
    await x(o2.spatialReference, i), o2 = j2(o2, i);
    const e2 = (await R2(f(o2)))[0];
    if (null == e2) throw S;
    const r2 = "quantizationParameters" in t2 && ((_a = t2.quantizationParameters) == null ? void 0 : _a.tolerance) || "maxAllowableOffset" in t2 && t2.maxAllowableOffset || 0, n = r2 && F(o2, i) ? { densificationStep: 8 * r2 } : void 0, s4 = e2.toJSON(), l3 = j(s4, s4.spatialReference, i, n);
    if (!l3) throw S;
    l3.spatialReference = i, t2.geometry = l3;
  }
  return t2;
}
function F(t2, e) {
  if (!t2) return false;
  const i = t2.spatialReference;
  return (m(t2) || y(t2) || s3(t2)) && !s2(i, e) && !L2(i, e);
}
function j2(t2, e) {
  const i = t2.spatialReference;
  return F(t2, e) && m(t2) ? { spatialReference: i, rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] } : t2;
}
async function v(e) {
  const { distance: r, units: n } = e, a = e.geometry;
  if (null == r || "vertexAttributes" in a) return a;
  const o2 = a.spatialReference, l3 = n ? g2.fromJSON(n) : se(o2), m2 = o2 && (P(o2) || O(o2)) ? a : await x(o2, U).then(() => j(a, U)), u = await import("./geodesicBufferOperator-EW6HUHIS.js");
  await u.load();
  const S2 = u.execute(m2, r || 1, { unit: l3 }) ?? void 0;
  if (!S2 || !y(S2) || 0 === S2.rings.length) throw new s("unsupported-query:invalid-parameters", "Invalid parameters for query by distance");
  return S2;
}
function h2(t2, e) {
  return null == t2 ? null : "string" == typeof t2 ? e ? (/* @__PURE__ */ new Date(`1970-01-01T${t2}Z`)).getTime() : new Date(t2).getTime() : t2 instanceof Date ? t2.getTime() : t2;
}

export {
  x,
  j,
  b,
  g2 as g,
  S,
  w,
  x2,
  B,
  h2 as h
};
//# sourceMappingURL=chunk-6X7CIA5N.js.map
