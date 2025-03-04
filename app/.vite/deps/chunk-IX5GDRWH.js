import {
  o as o3
} from "./chunk-MX7BI6XG.js";
import {
  n as n2
} from "./chunk-H263NTAU.js";
import {
  i as i3,
  se
} from "./chunk-VDYWILM2.js";
import {
  n,
  p as p2
} from "./chunk-NMUUXFTE.js";
import {
  R
} from "./chunk-67XXGAOA.js";
import {
  i,
  u
} from "./chunk-2KG6WO5I.js";
import {
  f as f2,
  i as i2,
  s as s3
} from "./chunk-D4CSBMND.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  y
} from "./chunk-4WO6KUCB.js";
import {
  x
} from "./chunk-6REABBOQ.js";
import {
  r as r4
} from "./chunk-STBNLAGT.js";
import {
  o as o2
} from "./chunk-HSI6V34N.js";
import {
  l,
  m as m2
} from "./chunk-XCRRZPKE.js";
import {
  f,
  v as v2
} from "./chunk-WZBMMIVS.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g as g2,
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  Q,
  c
} from "./chunk-LTDNORB5.js";
import {
  v
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  h,
  r2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  k,
  s as s2
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G,
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/rest/operations/identify.js
function o4(e, r5) {
  const { dpi: n3, gdbVersion: s4, geometry: o5, geometryPrecision: a4, height: m5, historicMoment: p4, layerOption: f4, mapExtent: y2, maxAllowableOffset: u3, returnFieldName: c3, returnGeometry: d2, returnUnformattedValues: g3, returnZ: x2, spatialReference: h2, timeExtent: b2, tolerance: E, width: O } = e.toJSON(), { dynamicLayers: S3, layerDefs: j2, layerIds: N } = l2(e), $ = null != (r5 == null ? void 0 : r5.geometry) ? r5.geometry : null, I = { historicMoment: p4, geometryPrecision: a4, maxAllowableOffset: u3, returnFieldName: c3, returnGeometry: d2, returnUnformattedValues: g3, returnZ: x2, tolerance: E }, R3 = ($ == null ? void 0 : $.toJSON()) || o5;
  I.imageDisplay = `${O},${m5},${n3}`, s4 && (I.gdbVersion = s4), R3 && (delete R3.spatialReference, I.geometry = JSON.stringify(R3), I.geometryType = v2(R3));
  const U2 = h2 ?? (R3 == null ? void 0 : R3.spatialReference) ?? (y2 == null ? void 0 : y2.spatialReference);
  if (U2 && (I.sr = c(U2)), I.time = b2 ? [b2.start, b2.end].join(",") : null, y2) {
    const { xmin: e2, ymin: t, xmax: r6, ymax: i4 } = y2;
    I.mapExtent = `${e2},${t},${r6},${i4}`;
  }
  return j2 && (I.layerDefs = j2), S3 && !j2 && (I.dynamicLayers = S3), I.layers = "popup" === f4 ? "visible" : f4, N && !S3 && (I.layers += `:${N.join(",")}`), I;
}
function l2(e) {
  var _a, _b;
  const { mapExtent: t, floors: i4, width: o5, sublayers: l3, layerIds: m5, layerOption: p4, gdbVersion: f4 } = e, y2 = (_b = (_a = l3 == null ? void 0 : l3.find((e2) => null != e2.layer)) == null ? void 0 : _a.layer) == null ? void 0 : _b.serviceSublayers, u3 = "popup" === p4, c3 = {}, d2 = i({ extent: t, width: o5, spatialReference: t == null ? void 0 : t.spatialReference }), g3 = [], x2 = (e2) => {
    const t2 = 0 === d2, r5 = 0 === e2.minScale || d2 <= e2.minScale, i5 = 0 === e2.maxScale || d2 >= e2.maxScale;
    if (e2.visible && (t2 || r5 && i5)) if (e2.sublayers) e2.sublayers.forEach(x2);
    else {
      if (false === (m5 == null ? void 0 : m5.includes(e2.id)) || u3 && (!e2.popupTemplate || !e2.popupEnabled)) return;
      g3.unshift(e2);
    }
  };
  if (l3 == null ? void 0 : l3.forEach(x2), l3 && !g3.length) c3.layerIds = [];
  else {
    const e2 = i3(g3, y2, f4), t2 = g3.map((e3) => {
      const t3 = n2(i4, e3);
      return e3.toExportImageJSON(t3);
    });
    if (e2) c3.dynamicLayers = JSON.stringify(t2);
    else {
      if (l3) {
        let e4 = g3.map(({ id: e5 }) => e5);
        m5 && (e4 = e4.filter((e5) => m5.includes(e5))), c3.layerIds = e4;
      } else (m5 == null ? void 0 : m5.length) && (c3.layerIds = m5);
      const e3 = a2(i4, g3);
      if (null != e3 && e3.length) {
        const t3 = {};
        for (const r5 of e3) r5.definitionExpression && (t3[r5.id] = r5.definitionExpression);
        Object.keys(t3).length && (c3.layerDefs = JSON.stringify(t3));
      }
    }
  }
  return c3;
}
function a2(t, r5) {
  const i4 = !!(t == null ? void 0 : t.length), s4 = r5.filter((e) => null != e.definitionExpression || i4 && null != e.floorInfo);
  return s4.length ? s4.map((r6) => {
    const i5 = n2(t, r6), s5 = r4(i5, r6.definitionExpression);
    return { id: r6.id, definitionExpression: s5 ?? void 0 };
  }) : null;
}

// node_modules/@arcgis/core/rest/support/IdentifyParameters.js
var d;
var c2 = d = class extends S {
  static from(t) {
    return h(d, t);
  }
  constructor(t) {
    super(t), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.historicMoment = null, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = true, this.returnGeometry = false, this.returnM = false, this.returnUnformattedValues = true, this.returnZ = false, this.spatialReference = null, this.sublayers = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
  writeHistoricMoment(t, e) {
    e.historicMoment = t && t.getTime();
  }
};
r([m({ type: Number, json: { write: true } })], c2.prototype, "dpi", void 0), r([m()], c2.prototype, "floors", void 0), r([m({ type: String, json: { write: true } })], c2.prototype, "gdbVersion", void 0), r([m({ types: l, json: { read: f, write: true } })], c2.prototype, "geometry", void 0), r([m({ type: Number, json: { write: true } })], c2.prototype, "geometryPrecision", void 0), r([m({ type: Number, json: { write: true } })], c2.prototype, "height", void 0), r([m({ type: Date })], c2.prototype, "historicMoment", void 0), r([r3("historicMoment")], c2.prototype, "writeHistoricMoment", null), r([m({ type: [Number], json: { write: true } })], c2.prototype, "layerIds", void 0), r([m({ type: ["top", "visible", "all", "popup"], json: { write: true } })], c2.prototype, "layerOption", void 0), r([m({ type: w, json: { write: true } })], c2.prototype, "mapExtent", void 0), r([m({ type: Number, json: { write: true } })], c2.prototype, "maxAllowableOffset", void 0), r([m({ type: Boolean, json: { write: true } })], c2.prototype, "returnFieldName", void 0), r([m({ type: Boolean, json: { write: true } })], c2.prototype, "returnGeometry", void 0), r([m({ type: Boolean, json: { write: true } })], c2.prototype, "returnM", void 0), r([m({ type: Boolean, json: { write: true } })], c2.prototype, "returnUnformattedValues", void 0), r([m({ type: Boolean, json: { write: true } })], c2.prototype, "returnZ", void 0), r([m({ type: g2, json: { write: true } })], c2.prototype, "spatialReference", void 0), r([m({ type: V.ofType(se) })], c2.prototype, "sublayers", void 0), r([m({ type: p, json: { write: true } })], c2.prototype, "timeExtent", void 0), r([m({ type: Number, json: { write: true } })], c2.prototype, "tolerance", void 0), r([m({ type: Number, json: { write: true } })], c2.prototype, "width", void 0), c2 = d = r([a("esri.rest.support.IdentifyParameters")], c2);
var j = c2;

// node_modules/@arcgis/core/rest/support/IdentifyResult.js
var u2 = class extends S {
  constructor(r5) {
    super(r5), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(r5, t) {
    return b.fromJSON({ attributes: { ...t.attributes }, geometry: { ...t.geometry } });
  }
  writeFeature(r5, e) {
    if (!r5) return;
    const { attributes: t, geometry: o5 } = r5;
    t && (e.attributes = { ...t }), null != o5 && (e.geometry = o5.toJSON(), e.geometryType = m2.toJSON(o5.type));
  }
};
r([m({ type: String, json: { write: true } })], u2.prototype, "displayFieldName", void 0), r([m({ type: b })], u2.prototype, "feature", void 0), r([o("feature", ["attributes", "geometry"])], u2.prototype, "readFeature", null), r([r3("feature")], u2.prototype, "writeFeature", null), r([m({ type: Number, json: { write: true } })], u2.prototype, "layerId", void 0), r([m({ type: String, json: { write: true } })], u2.prototype, "layerName", void 0), u2 = r([a("esri.rest.support.IdentifyResult")], u2);
var m3 = u2;

// node_modules/@arcgis/core/rest/identify.js
async function f3(u3, i4, f4) {
  const c3 = (i4 = a3(i4)).geometry ? [i4.geometry] : [], l3 = f2(u3);
  return l3.path += "/identify", R(c3).then((e) => {
    const t = o4(i4, { geometry: e == null ? void 0 : e[0] }), u4 = s3({ ...l3.query, f: "json", ...t }), a4 = i2(u4, f4);
    return P(l3.path, a4).then(m4).then((r5) => p3(r5, i4.sublayers));
  });
}
function m4(r5) {
  const e = r5.data;
  return e.results = e.results || [], e.exceededTransferLimit = Boolean(e.exceededTransferLimit), e.results = e.results.map((r6) => m3.fromJSON(r6)), e;
}
function a3(r5) {
  return r5 = j.from(r5);
}
function p3(r5, e) {
  if (!(e == null ? void 0 : e.length)) return r5;
  const t = /* @__PURE__ */ new Map();
  function o5(r6) {
    t.set(r6.id, r6), r6.sublayers && r6.sublayers.forEach(o5);
  }
  e.forEach(o5);
  for (const s4 of r5.results) s4.feature.sourceLayer = t.get(s4.layerId);
  return r5;
}

// node_modules/@arcgis/core/views/layers/support/MapServiceLayerViewHelper.js
var F = null;
function P2(e, t) {
  return "tile" === t.type || "map-image" === t.type;
}
var S2 = class extends g {
  constructor(e) {
    super(e), this._featuresResolutions = /* @__PURE__ */ new WeakMap(), this.highlightGraphics = null, this.highlightGraphicUpdated = null, this.updateHighlightedFeatures = k(async (e2) => {
      this.destroyed || this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e2).catch(() => {
      }));
    });
  }
  initialize() {
    const e = (e2) => {
      for (const t of e2) {
        const { sourceLayer: e3 } = t;
        null != e3 && "geometryType" in e3 && "point" === e3.geometryType && (t.visible = false);
      }
      this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e2).catch(() => {
      })), this.updateHighlightedFeatures(this._highlightGeometriesResolution);
    };
    this.addHandles([v(() => this.highlightGraphics, "change", (t) => e(t.added), { onListenerAdd: (t) => e(t) })]);
  }
  async fetchPopupFeaturesAtLocation(e, t) {
    var _a, _b;
    const { layerView: { layer: r5, view: { scale: i4 } } } = this;
    if (!e) throw new s("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", { layer: r5 });
    const o5 = U(r5.sublayers, i4, t);
    if (!o5.length) return [];
    const a4 = await G2(r5, o5);
    if (!((((_b = (_a = r5.capabilities) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsIdentify) ?? true) && r5.version >= 10.5) && !a4) throw new s("fetchPopupFeatures:not-supported", "query operation is disabled for this service", { layer: r5 });
    return a4 ? this._fetchPopupFeaturesUsingQueries(e, o5, t) : this._fetchPopupFeaturesUsingIdentify(e, o5, t);
  }
  clearHighlights() {
    var _a;
    (_a = this.highlightGraphics) == null ? void 0 : _a.removeAll();
  }
  async _updateHighlightedFeaturesSymbols(e) {
    const { layerView: { view: t }, highlightGraphics: r5, highlightGraphicUpdated: s4 } = this;
    if (r5 && s4) for (const i4 of e) {
      const e2 = i4.sourceLayer && "renderer" in i4.sourceLayer && i4.sourceLayer.renderer;
      i4.sourceLayer && "geometryType" in i4.sourceLayer && "point" === i4.sourceLayer.geometryType && e2 && "getSymbolAsync" in e2 && e2.getSymbolAsync(i4).then(async (o5) => {
        var _a;
        o5 || (o5 = new y());
        let a4 = null;
        const n3 = "visualVariables" in e2 ? (_a = e2.visualVariables) == null ? void 0 : _a.find((e3) => "size" === e3.type) : void 0;
        n3 && (F || (F = (await import("./visualVariableUtils-ZEYVTAMY.js")).getSize), a4 = F(n3, i4, { view: t.type, scale: t.scale, shape: "simple-marker" === o5.type ? o5.style : null })), a4 || (a4 = "width" in o5 && "height" in o5 && null != o5.width && null != o5.height ? Math.max(o5.width, o5.height) : "size" in o5 ? o5.size : 16), r5.includes(i4) && (i4.symbol = new y({ style: "square", size: a4, xoffset: "xoffset" in o5 ? o5.xoffset : 0, yoffset: "yoffset" in o5 ? o5.yoffset : 0 }), s4(i4, "symbol"), i4.visible = true);
      });
    }
  }
  async _updateHighlightedFeaturesGeometries(e) {
    const { layerView: { layer: t, view: r5 }, highlightGraphics: s4, highlightGraphicUpdated: o5 } = this;
    if (this._highlightGeometriesResolution = e, !o5 || !(s4 == null ? void 0 : s4.length) || !t.capabilities.operations.supportsQuery) return;
    const a4 = this._getTargetResolution(e), n3 = /* @__PURE__ */ new Map();
    for (const c3 of s4) if (!this._featuresResolutions.has(c3) || this._featuresResolutions.get(c3) > a4) {
      const e2 = c3.sourceLayer;
      r2(n3, e2, () => /* @__PURE__ */ new Map()).set(c3.getObjectId(), c3);
    }
    const l3 = Array.from(n3, ([e2, t2]) => {
      const s5 = e2.createQuery();
      return s5.objectIds = [...t2.keys()], s5.outFields = [e2.objectIdField], s5.returnGeometry = true, s5.maxAllowableOffset = a4, s5.outSpatialReference = r5.spatialReference, e2.queryFeatures(s5);
    }), p4 = await Promise.all(l3);
    if (!this.destroyed) for (const { features: i4 } of p4) for (const e2 of i4) {
      const t2 = e2.sourceLayer, r6 = n3.get(t2).get(e2.getObjectId());
      r6 && s4.includes(r6) && (r6.geometry = e2.geometry, o5(r6, "geometry"), this._featuresResolutions.set(r6, a4));
    }
  }
  _getTargetResolution(e) {
    const t = e * Q(this.layerView.view.spatialReference), r5 = t / 16;
    return r5 <= 10 ? 0 : e / t * r5;
  }
  async _fetchPopupFeaturesUsingIdentify(e, t, r5) {
    const s4 = await this._createIdentifyParameters(e, t, r5);
    if (null == s4) return [];
    const { results: i4 } = await f3(this.layerView.layer.parsedUrl, s4, r5);
    return i4.map((e2) => e2.feature);
  }
  async _createIdentifyParameters(e, t, r5) {
    const { floors: s4, layer: i4, timeExtent: o5, view: { spatialReference: a4, scale: n3 } } = this.layerView;
    if (!t.length) return null;
    await Promise.all(t.map(({ sublayer: e2 }) => e2.load(r5).catch(() => {
    })));
    const l3 = Math.min(has("mapservice-popup-identify-max-tolerance"), i4.allSublayers.reduce((e2, t2) => t2.renderer ? o3({ renderer: t2.renderer, pointerType: r5 == null ? void 0 : r5.pointerType }) : e2, 2)), p4 = this.createFetchPopupFeaturesQueryGeometry(e, l3), c3 = u(n3, a4), u3 = Math.round(p4.width / c3), m5 = new w({ xmin: p4.center.x - c3 * u3, ymin: p4.center.y - c3 * u3, xmax: p4.center.x + c3 * u3, ymax: p4.center.y + c3 * u3, spatialReference: p4.spatialReference });
    return new j({ floors: s4, gdbVersion: "gdbVersion" in i4 ? i4.gdbVersion : void 0, geometry: e, height: u3, layerOption: "popup", mapExtent: m5, returnGeometry: true, spatialReference: a4, sublayers: i4.sublayers, timeExtent: o5, tolerance: l3, width: u3 });
  }
  async _fetchPopupFeaturesUsingQueries(e, t, s4) {
    const { layerView: { floors: i4, timeExtent: o5 } } = this, n3 = t.map(async ({ sublayer: t2, popupTemplate: r5 }) => {
      var _a, _b, _c;
      if (await t2.load(s4).catch(() => {
      }), t2.capabilities && !t2.capabilities.operations.supportsQuery) return [];
      const n4 = t2.createQuery(), p4 = o3({ renderer: t2.renderer, pointerType: s4 == null ? void 0 : s4.pointerType }), c3 = this.createFetchPopupFeaturesQueryGeometry(e, p4), u3 = /* @__PURE__ */ new Set(), [y2] = await Promise.all([n(t2, r5), (_a = t2.renderer) == null ? void 0 : _a.collectRequiredFields(u3, t2.fieldsIndex)]);
      s2(s4), x(u3, t2.fieldsIndex, y2);
      const h2 = Array.from(u3).sort();
      n4.geometry = c3, n4.outFields = h2, n4.timeExtent = o5;
      const g3 = n2(i4, t2);
      if (n4.where = r4(n4.where, g3), ((_b = t2.capabilities) == null ? void 0 : _b.query.supportsOrderBy) && ((_c = t2.orderBy) == null ? void 0 : _c[0])) {
        const e2 = t2.orderBy[0], r6 = !e2.valueExpression && e2.field, s5 = "ascending" === e2.order ? "asc" : "desc";
        r6 && (n4.orderByFields = [`${r6} ${s5}`]);
      }
      const w2 = this._getTargetResolution(c3.width / p4), b2 = await _(r5);
      s2(s4);
      const v3 = "point" === t2.geometryType || b2 && b2.arcadeUtils.hasGeometryOperations(r5);
      v3 || (n4.maxAllowableOffset = w2);
      let { features: j2 } = await t2.queryFeatures(n4, s4);
      const F2 = v3 ? 0 : w2;
      j2 = await R2(t2, j2, s4);
      for (const e2 of j2) this._featuresResolutions.set(e2, F2);
      return j2;
    });
    return (await Promise.allSettled(n3)).reduce((e2, t2) => "fulfilled" === t2.status ? [...e2, ...t2.value] : e2, []).filter(G);
  }
};
function U(e, t, r5) {
  const s4 = [];
  if (!e) return s4;
  const i4 = (e2) => {
    const o5 = 0 === e2.minScale || t <= e2.minScale, a4 = 0 === e2.maxScale || t >= e2.maxScale;
    if (e2.visible && o5 && a4) {
      if (e2.sublayers) e2.sublayers.forEach(i4);
      else if (e2.popupEnabled) {
        const t2 = p2(e2, { ...r5, defaultPopupTemplateEnabled: false });
        null != t2 && s4.unshift({ sublayer: e2, popupTemplate: t2 });
      }
    }
  };
  return e.map(i4), s4;
}
function _(e) {
  var _a;
  return ((_a = e.expressionInfos) == null ? void 0 : _a.length) || Array.isArray(e.content) && e.content.some((e2) => "expression" === e2.type) ? o2() : Promise.resolve();
}
async function G2(e, t) {
  var _a, _b;
  if ((_b = (_a = e.capabilities) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsQuery) return true;
  try {
    return await Promise.any(t.map(({ sublayer: e2 }) => e2.load().then(() => e2.capabilities.operations.supportsQuery)));
  } catch {
    return false;
  }
}
async function R2(e, t, r5) {
  const s4 = e.renderer;
  return s4 && "defaultSymbol" in s4 && !s4.defaultSymbol && (t = s4.valueExpression ? await Promise.all(t.map((e2) => s4.getSymbolAsync(e2, r5).then((t2) => t2 ? e2 : null))).then((e2) => e2.filter((e3) => null != e3)) : t.filter((e2) => null != s4.getSymbol(e2))), t;
}
r([m({ constructOnly: true })], S2.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), r([m({ constructOnly: true })], S2.prototype, "layerView", void 0), r([m({ constructOnly: true })], S2.prototype, "highlightGraphics", void 0), r([m({ constructOnly: true })], S2.prototype, "highlightGraphicUpdated", void 0), r([m({ constructOnly: true })], S2.prototype, "updatingHandles", void 0), S2 = r([a("esri.views.layers.support.MapServiceLayerViewHelper")], S2);

export {
  P2 as P,
  S2 as S
};
//# sourceMappingURL=chunk-IX5GDRWH.js.map
