import {
  p as p3
} from "./chunk-SCNACYSF.js";
import {
  A
} from "./chunk-Q7YUVHCX.js";
import {
  n
} from "./chunk-YLPB3XO6.js";
import {
  d
} from "./chunk-5GAOP2C3.js";
import {
  b as b2
} from "./chunk-AI2O2GKK.js";
import {
  p,
  p2
} from "./chunk-FF44HCOD.js";
import {
  D
} from "./chunk-IPFYNOOY.js";
import {
  Fe,
  ye
} from "./chunk-6REABBOQ.js";
import {
  e as e2
} from "./chunk-STBNLAGT.js";
import {
  e
} from "./chunk-5EWD56QJ.js";
import {
  I,
  x
} from "./chunk-XWXWIBVO.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  b
} from "./chunk-ACGZOBZ6.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  s as s2
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  u2 as u,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/featureQueryAll.js
async function r3(e3, r4, a5) {
  r4 = r4.clone(), e3.capabilities.query.supportsMaxRecordCountFactor && (r4.maxRecordCountFactor = u2(e3));
  const n2 = t(e3), o2 = e3.capabilities.query.supportsPagination;
  r4.start = 0, r4.num = n2;
  let i = null;
  for (; ; ) {
    const t2 = await e3.source.queryFeaturesJSON(r4, a5);
    if (null == i ? i = t2 : i.features = i.features.concat(t2.features), i.exceededTransferLimit = t2.exceededTransferLimit, !o2 || !t2.exceededTransferLimit) break;
    r4.start += n2;
  }
  return i;
}
function t(e3) {
  return u2(e3) * a3(e3);
}
function a3(e3) {
  return e3.capabilities.query.maxRecordCount || 2e3;
}
function u2(r4) {
  return r4.capabilities.query.supportsMaxRecordCountFactor ? b2.MAX_MAX_RECORD_COUNT_FACTOR : 1;
}

// node_modules/@arcgis/core/rest/support/AttachmentQuery.js
var a4;
var p4 = a4 = class extends S {
  constructor(t2) {
    super(t2), this.attachmentTypes = null, this.attachmentsWhere = null, this.cacheHint = void 0, this.keywords = null, this.globalIds = null, this.name = null, this.num = null, this.objectIds = null, this.orderByFields = null, this.returnMetadata = false, this.size = null, this.start = null, this.where = null;
  }
  writeStart(t2, e3) {
    e3.resultOffset = this.start, e3.resultRecordCount = this.num || 10;
  }
  clone() {
    return new a4(a({ attachmentTypes: this.attachmentTypes, attachmentsWhere: this.attachmentsWhere, cacheHint: this.cacheHint, keywords: this.keywords, where: this.where, globalIds: this.globalIds, name: this.name, num: this.num, objectIds: this.objectIds, orderByFields: this.orderByFields, returnMetadata: this.returnMetadata, size: this.size, start: this.start }));
  }
};
r([m({ type: [String], json: { write: true } })], p4.prototype, "attachmentTypes", void 0), r([m({ type: String, json: { read: { source: "attachmentsDefinitionExpression" }, write: { target: "attachmentsDefinitionExpression" } } })], p4.prototype, "attachmentsWhere", void 0), r([m({ type: Boolean, json: { write: true } })], p4.prototype, "cacheHint", void 0), r([m({ type: [String], json: { write: true } })], p4.prototype, "keywords", void 0), r([m({ type: [String], json: { write: true } })], p4.prototype, "globalIds", void 0), r([m({ json: { write: true } })], p4.prototype, "name", void 0), r([m({ type: Number, json: { read: { source: "resultRecordCount" } } })], p4.prototype, "num", void 0), r([m({ type: [Number], json: { write: true } })], p4.prototype, "objectIds", void 0), r([m({ type: [String], json: { write: true } })], p4.prototype, "orderByFields", void 0), r([m({ type: Boolean, json: { default: false, write: true } })], p4.prototype, "returnMetadata", void 0), r([m({ type: [Number], json: { write: true } })], p4.prototype, "size", void 0), r([m({ type: Number, json: { read: { source: "resultOffset" } } })], p4.prototype, "start", void 0), r([r2("start"), r2("num")], p4.prototype, "writeStart", null), r([m({ type: String, json: { read: { source: "definitionExpression" }, write: { target: "definitionExpression" } } })], p4.prototype, "where", void 0), p4 = a4 = r([a2("esri.rest.support.AttachmentQuery")], p4), p4.from = w(p4);
var c = p4;

// node_modules/@arcgis/core/layers/support/featureLayerUtils.js
var j = new o({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch" });
async function F(e3, t2, n2, o2) {
  const i = await $(e3);
  if (await x2(e3, t2, o2), !i.addAttachment) throw new s(o2, "Layer source does not support addAttachment capability");
  return i.addAttachment(t2, n2);
}
function x2(e3, t2, n2) {
  var _a, _b;
  const { attributes: o2 } = t2, { objectIdField: i } = e3;
  return ((_b = (_a = e3.capabilities) == null ? void 0 : _a.data) == null ? void 0 : _b.supportsAttachment) ? t2 ? o2 ? i && o2[i] ? Promise.resolve() : Promise.reject(new s(n2, `feature is missing the identifying attribute ${i}`)) : Promise.reject(new s(n2, "'attributes' are required on a feature to query attachments")) : Promise.reject(new s(n2, "A feature is required to add/delete/update attachments")) : Promise.reject(new s(n2, "this layer doesn't support attachments"));
}
async function P(e3, t2, n2, o2, i) {
  const s3 = await $(e3);
  if (await x2(e3, t2, i), !s3.updateAttachment) throw new s(i, "Layer source does not support updateAttachment capability");
  return s3.updateAttachment(t2, n2, o2);
}
async function q(e3, t2, r4) {
  const { applyEdits: n2 } = await import("./editingSupport-M7JYDPIK.js"), o2 = await e3.load();
  let i = r4;
  return "feature" === o2.type && o2.infoFor3D && null != t2.deleteFeatures && null != o2.globalIdField && (i = { ...i, globalIdToObjectId: await ne(o2, t2.deleteFeatures, o2.globalIdField) }), n2(o2, o2.source, t2, r4);
}
async function S2(e3, t2, r4) {
  const { uploadAssets: n2 } = await import("./editingSupport-M7JYDPIK.js"), o2 = await e3.load();
  return n2(o2, o2.source, t2, r4);
}
async function v(e3, t2, n2, o2) {
  const i = await $(e3);
  if (await x2(e3, t2, o2), !i.deleteAttachments) throw new s(o2, "Layer source does not support deleteAttachments capability");
  return i.deleteAttachments(t2, n2);
}
async function O(e3, t2, n2) {
  const o2 = (await e3.load({ signal: t2 == null ? void 0 : t2.signal })).source;
  if (!o2.fetchRecomputedExtents) throw new s(n2, "Layer source does not support fetchUpdates capability");
  return o2.fetchRecomputedExtents(t2);
}
async function A2(e3, t2, n2, o2) {
  var _a, _b, _c, _d;
  t2 = c.from(t2), await e3.load();
  const i = e3.source, s3 = e3.capabilities;
  if (!((_a = s3 == null ? void 0 : s3.data) == null ? void 0 : _a.supportsAttachment)) throw new s(o2, "this layer doesn't support attachments");
  const { attachmentTypes: a5, objectIds: u3, globalIds: c2, num: l, size: p5, start: d2, where: f } = t2;
  if (!((_b = s3 == null ? void 0 : s3.operations) == null ? void 0 : _b.supportsQueryAttachments)) {
    if ((a5 == null ? void 0 : a5.length) > 0 || (c2 == null ? void 0 : c2.length) > 0 || (p5 == null ? void 0 : p5.length) > 0 || l || d2 || f) throw new s(o2, "when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported", t2);
  }
  if (!((u3 == null ? void 0 : u3.length) || (c2 == null ? void 0 : c2.length) || f)) throw new s(o2, "'objectIds', 'globalIds', or 'where' are required to perform attachment query", t2);
  if (!i.queryAttachments) throw new s(o2, "Layer source does not support queryAttachments capability", t2);
  return !((_c = s3 == null ? void 0 : s3.attachment) == null ? void 0 : _c.supportsOrderByFields) && ((_d = t2.orderByFields) == null ? void 0 : _d.length) && ((t2 = t2.clone()).orderByFields = null), i.queryAttachments(t2);
}
async function L(e3, t2, n2, o2) {
  const i = await $(e3);
  if (!i.queryObjectIds) throw new s(o2, "Layer source does not support queryObjectIds capability");
  return i.queryObjectIds(b2.from(t2) ?? e3.createQuery(), n2);
}
async function E(e3, t2, n2, o2) {
  const i = await $(e3);
  if (!i.queryFeatureCount) throw new s(o2, "Layer source does not support queryFeatureCount capability");
  return i.queryFeatureCount(b2.from(t2) ?? e3.createQuery(), n2);
}
async function D2(e3, t2, n2, o2) {
  const i = await $(e3);
  if (!i.queryExtent) throw new s(o2, "Layer source does not support queryExtent capability");
  return i.queryExtent(b2.from(t2) ?? e3.createQuery(), n2);
}
async function T(e3, t2, n2, o2) {
  const i = await $(e3);
  if (!i.queryRelatedFeatures) throw new s(o2, "Layer source does not support queryRelatedFeatures capability");
  return i.queryRelatedFeatures(d.from(t2), n2);
}
async function C(e3, t2, n2, o2) {
  const i = await $(e3);
  if (!i.queryRelatedFeaturesCount) throw new s(o2, "Layer source does not support queryRelatedFeaturesCount capability");
  return i.queryRelatedFeaturesCount(d.from(t2), n2);
}
async function B(e3) {
  const t2 = e3.source;
  if (t2 == null ? void 0 : t2.refresh) try {
    const { dataChanged: r4, updates: n2 } = await t2.refresh();
    if (null != n2 && (e3.sourceJSON = { ...e3.sourceJSON, ...n2 }, e3.read(n2, { origin: "service", url: e3.parsedUrl })), r4) return true;
  } catch {
  }
  if (e3.definitionExpression) try {
    return (await e2(e3.definitionExpression, e3.fieldsIndex)).hasDateFunctions;
  } catch {
  }
  return false;
}
function R(e3) {
  var _a, _b;
  const t2 = new b2(), r4 = (_a = e3.capabilities) == null ? void 0 : _a.data, n2 = (_b = e3.capabilities) == null ? void 0 : _b.query;
  t2.historicMoment = e3.historicMoment, t2.gdbVersion = e3.gdbVersion, t2.returnGeometry = true, n2 && (t2.compactGeometryEnabled = n2.supportsCompactGeometry, t2.defaultSpatialReferenceEnabled = n2.supportsDefaultSpatialReference), r4 && (r4.supportsZ && null != e3.returnZ && (t2.returnZ = e3.returnZ), r4.supportsM && null != e3.returnM && (t2.returnM = e3.returnM)), t2.outFields = ["*"];
  const { timeOffset: o2, timeExtent: i } = e3;
  return t2.timeExtent = null != o2 && null != i ? i.offset(-o2.value, o2.unit) : i || null, t2.multipatchOption = "multipatch" === e3.geometryType ? "xyFootprint" : null, t2;
}
function M(e3) {
  const { globalIdField: t2, fields: r4 } = e3;
  if (t2) return t2;
  if (r4) {
    for (const n2 of r4) if ("esriFieldTypeGlobalID" === n2.type) return n2.name;
  }
}
function k(e3) {
  const { objectIdField: t2, fields: r4 } = e3;
  if (t2) return t2;
  if (r4) {
    for (const n2 of r4) if ("esriFieldTypeOID" === n2.type) return n2.name;
  }
}
function z(e3) {
  return e3.currentVersion ? e3.currentVersion : e3.hasOwnProperty("capabilities") || e3.hasOwnProperty("drawingInfo") || e3.hasOwnProperty("hasAttachments") || e3.hasOwnProperty("htmlPopupType") || e3.hasOwnProperty("relationships") || e3.hasOwnProperty("timeInfo") || e3.hasOwnProperty("typeIdField") || e3.hasOwnProperty("types") ? 10 : 9.3;
}
function N(e3, t2, r4, n2) {
  var _a, _b;
  const o2 = r4 == null ? void 0 : r4.feature, i = !!((_a = e3.subtypes) == null ? void 0 : _a.length);
  if (i && !(r4 == null ? void 0 : r4.excludeImpliedDomains)) {
    const r5 = V(e3, t2);
    if (r5) return r5;
  }
  const s3 = i && U(e3, o2);
  if (s3) {
    const e4 = (_b = s3 == null ? void 0 : s3.domains) == null ? void 0 : _b[t2];
    return "inherited" === (e4 == null ? void 0 : e4.type) ? n2 : e4;
  }
  const a5 = oe(e3.types, e3.typeIdField, o2);
  if (a5) {
    const e4 = a5.domains && a5.domains[t2];
    if (e4 && "inherited" !== (e4 == null ? void 0 : e4.type)) return e4;
  }
  if (n2) return n2;
  if (!(r4 == null ? void 0 : r4.excludeImpliedDomains)) {
    const r5 = G(e3, t2);
    if (r5) return r5;
  }
  return null;
}
function U(e3, t2) {
  const { subtypes: r4, subtypeField: n2 } = e3;
  if (!(t2 == null ? void 0 : t2.attributes) || !(r4 == null ? void 0 : r4.length) || !n2) return null;
  const o2 = t2.attributes[n2];
  return null == o2 ? null : r4.find((e4) => e4.code === o2);
}
function V(e3, t2) {
  var _a, _b;
  const { fieldsIndex: r4, subtypeField: n2 } = e3, { name: o2, type: i } = r4.get(t2) ?? {};
  if (!o2) return null;
  if ((n2 && ((_a = r4.get(n2)) == null ? void 0 : _a.name)) === o2 && ((_b = e3.subtypes) == null ? void 0 : _b.length)) {
    const t3 = e3.subtypes.map((e4) => new p({ code: Q(e4.code, i), name: e4.name }));
    if (t3 == null ? void 0 : t3.length) return new p2({ codedValues: t3 });
  }
  return null;
}
function G(e3, t2) {
  var _a, _b;
  const { fieldsIndex: r4 } = e3, { name: n2, type: o2 } = r4.get(t2) ?? {};
  if (!n2) return null;
  if (("typeIdField" in e3 ? (_a = r4.get(e3.typeIdField)) == null ? void 0 : _a.name : null) === n2 && "types" in e3 && ((_b = e3.types) == null ? void 0 : _b.length)) {
    const t3 = e3.types.map((e4) => new p({ code: Q(e4.id, o2), name: e4.name }));
    return new p2({ codedValues: t3 });
  }
  return null;
}
function Q(e3, t2) {
  return t2 ? Fe({ type: t2 }) && "number" == typeof e3 ? `${e3}` : ye({ type: t2 }) && "string" == typeof e3 ? Number.parseInt(e3, 10) : e3 : e3;
}
async function $(e3) {
  return (await e3.load()).source;
}
async function J(t2, r4) {
  if (!s2) return;
  const n2 = s2.findCredential(t2);
  if (n2) return n2.userId;
  let o2;
  try {
    const n3 = await x(t2, r4);
    n3 && (o2 = await s2.checkSignInStatus(`${n3}/sharing`));
  } catch (i) {
  }
  return o2 ? o2.userId : null;
}
async function Z(t2, r4) {
  if (!s2) return;
  if (s2.findCredential(t2)) return;
  let n2;
  try {
    const o2 = await x(t2, r4);
    o2 && (n2 = await s2.checkSignInStatus(`${o2}/sharing`));
  } catch (o2) {
  }
  if (n2) try {
    const n3 = null != r4 ? r4.signal : null;
    await s2.getCredential(t2, { signal: n3 });
  } catch (o2) {
  }
}
async function H(e3, t2, r4) {
  var _a;
  const n2 = (_a = e3.parsedUrl) == null ? void 0 : _a.path;
  n2 && e3.authenticationTriggerEvent === t2 && await Z(n2, r4);
}
async function W(e3) {
  var _a;
  const t2 = (_a = e3.parsedUrl) == null ? void 0 : _a.path;
  t2 && _(e3) && await Z(t2);
}
function _(e3) {
  return K(e3) && ("serviceDefinitionExpression" in e3 && X(e3.serviceDefinitionExpression) || "definitionExpression" in e3 && X(e3.definitionExpression));
}
function K(e3) {
  var _a;
  return !(!I(e3) || !((_a = e3.capabilities) == null ? void 0 : _a.query.supportsCurrentUser));
}
function X(e3) {
  return !!(e3 == null ? void 0 : e3.toLowerCase().includes("current_user"));
}
function Y(e3) {
  return !ie(e3) && (e3.userHasUpdateItemPrivileges || e3.editingEnabled);
}
var ee = u({ types: D });
function te(e3, t2) {
  var _a;
  if (e3.defaultSymbol) return ((_a = e3.types) == null ? void 0 : _a.length) ? new A({ defaultSymbol: ee(e3.defaultSymbol, e3, t2), field: e3.typeIdField, uniqueValueInfos: e3.types.map((e4) => ({ id: e4.id, symbol: ee(e4.symbol, e4, t2) })) }) : new p3({ symbol: ee(e3.defaultSymbol, e3, t2) });
}
function re(e3) {
  var _a, _b, _c;
  let t2 = (_a = e3.sourceJSON) == null ? void 0 : _a.cacheMaxAge;
  if (!t2) return false;
  const r4 = (_c = (_b = e3.editingInfo) == null ? void 0 : _b.lastEditDate) == null ? void 0 : _c.getTime();
  return null == r4 || (t2 *= 1e3, Date.now() - r4 < t2);
}
async function ne(e3, r4, n2) {
  if (null == r4) return null;
  const o2 = [], { objectIdField: s3 } = e3;
  if (r4.forEach((e4) => {
    let t2 = null;
    if ("attributes" in e4) {
      const { attributes: r5 } = e4;
      t2 = { globalId: r5[n2], objectId: null != r5[s3] && -1 !== r5[s3] ? r5[s3] : null };
    } else t2 = { globalId: e4.globalId, objectId: null != e4.objectId && -1 !== e4.objectId ? e4.objectId : null };
    null != t2.globalId && (null != t2.objectId && -1 !== t2.objectId || o2.push(t2.globalId));
  }), 0 === o2.length) return null;
  const a5 = e3.createQuery();
  a5.where = o2.map((e4) => `${n2}='${e4}'`).join(" OR "), a5.returnGeometry = false, a5.outFields = [s3, n2], a5.cacheHint = false;
  const u3 = await b(r3(e3, a5));
  if (!u3.ok) return null;
  const l = /* @__PURE__ */ new Map(), p5 = u3.value.features;
  for (const t2 of p5) {
    const e4 = t2.attributes[n2], r5 = t2.attributes[s3];
    null != e4 && null != r5 && -1 !== r5 && l.set(e(e4), r5);
  }
  return l;
}
function oe(e3, t2, r4) {
  if (!t2 || !r4 || !e3) return null;
  const n2 = r4.getAttribute(t2);
  return null == n2 ? null : e3.find((e4) => {
    const { id: t3 } = e4;
    return null != t3 && t3.toString() === n2.toString();
  }) ?? null;
}
function ie(e3) {
  var _a;
  return ((_a = e3.sourceJSON) == null ? void 0 : _a.isMultiServicesView) || se(e3);
}
function se(e3) {
  var _a, _b;
  return !!((_b = (_a = e3.sourceJSON) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.toLowerCase().split(",").map((e4) => e4.trim()).includes("map"));
}
function ae(e3, t2, n2) {
  const o2 = t2 == null ? void 0 : t2.queryAttributeBins;
  if (!o2) throw new s(n2, "Layer source does not support binning");
  switch (e3.binParameters.type) {
    case "auto-interval":
      if (!o2.supportsAutoInterval) throw new s(n2, "Layer source does not support auto-interval binning");
      if (e3.binParameters.normalizationType && (!o2.supportsNormalization || !ue(e3.binParameters.normalizationType, o2.supportedNormalizationTypes))) throw new s(n2, "Layer source does not support normalization binning");
      break;
    case "date":
      if (!o2.supportsDate) throw new s(n2, "Layer source does not support date binning");
      if (e3.binParameters.snapToData && !o2.supportsSnapToData) throw new s(n2, "Layer source does not support snapToData binning");
      if (e3.binParameters.returnFullIntervalBin && !o2.supportsReturnFullIntervalBin) throw new s(n2, "Layer source does not support returnFullIntervalBin binning");
      break;
    case "fixed-boundaries":
      if (!o2.supportsFixedBoundaries) throw new s(n2, "Layer source does not support fixed-boundaries binning");
      break;
    case "fixed-interval":
      if (!o2.supportsFixedInterval) throw new s(n2, "Layer source does not support fixed-interval binning");
      if (e3.binParameters.normalizationType && (!o2.supportsNormalization || !ue(e3.binParameters.normalizationType, o2.supportedNormalizationTypes))) throw new s(n2, "Layer source does not support normalization binning");
  }
  if (e3.binParameters.stackBy && !o2.supportsStackBy) throw new s(n2, "Layer source does not support stackBy binning");
  if (e3.binParameters.splitBy && !o2.supportsSplitBy) throw new s(n2, "Layer source does not support splitBy binning");
  if (e3.binParameters.firstDayOfWeek && !o2.supportsFirstDayOfWeek) throw new s(n2, "Layer source does not support firstDayOfWeek binning");
  const i = o2 == null ? void 0 : o2.supportedStatistics;
  if (e3.outStatistics && i) {
    const t3 = /* @__PURE__ */ new Map([["count", "count"], ["sum", "sum"], ["min", "min"], ["max", "max"], ["avg", "avg"], ["stddev", "stddev"], ["var", "var"], ["percentile-continuous", "percentileContinuous"], ["percentile-discrete", "percentileDiscrete"], ["centroid-aggregate", "centroid"], ["convex-hull-aggregate", "convexHull"], ["envelope-aggregate", "envelope"]]);
    for (const { statisticType: o3 } of e3.outStatistics) {
      const e4 = t3.get(o3);
      if (e4 && !i[e4]) throw new s(n2, `Layer source does not support ${o3} statistic type`);
    }
  }
}
function ue(e3, t2) {
  return null != e3 && !!(t2 == null ? void 0 : t2[n.toJSON(e3)]);
}

export {
  r3 as r,
  c,
  j,
  F,
  P,
  q,
  S2 as S,
  v,
  O,
  A2 as A,
  L,
  E,
  D2 as D,
  T,
  C,
  B,
  R,
  M,
  k,
  z,
  N,
  U,
  V,
  J,
  H,
  W,
  X,
  Y,
  te,
  re,
  ne,
  oe,
  ie,
  ae
};
//# sourceMappingURL=chunk-3GIIPEHS.js.map
