import {
  l,
  p
} from "./chunk-7WEKAJI2.js";
import {
  d2,
  n3 as n
} from "./chunk-GLICEWE6.js";
import {
  d
} from "./chunk-ONZPKEDE.js";
import {
  f,
  i,
  s
} from "./chunk-D4CSBMND.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/renderers/support/RasterPresetRenderer.js
var d3 = class extends a2.ClonableMixin(S) {
  constructor(e) {
    super(e), this.name = void 0, this.method = "none", this.value = void 0, this.bandIds = void 0, this.renderer = void 0;
  }
};
r([m({ type: String, json: { write: { isRequired: true } } })], d3.prototype, "name", void 0), r([m({ type: ["raster-function-template", "variable", "none"], json: { write: { isRequired: true } } }), r2({ rasterFunctionTemplate: "raster-function-template", variable: "variable", none: "none" })], d3.prototype, "method", void 0), r([m({ type: String, json: { write: { isRequired: true } } })], d3.prototype, "value", void 0), r([m({ type: [x], json: { write: { isRequired: true } } })], d3.prototype, "bandIds", void 0), r([m({ types: l, json: { write: true, origins: { "web-scene": { types: p, write: { overridePolicy: (e) => ({ enabled: e && "vector-field" !== e.type && "flow" !== e.type }) } } } } })], d3.prototype, "renderer", void 0), d3 = r([a("esri.renderers.support.RasterPresetRenderer")], d3);
var c = d3;

// node_modules/@arcgis/core/layers/mixins/RasterPresetRendererMixin.js
var o = (o2) => {
  let i2 = class extends o2 {
    constructor() {
      super(...arguments), this.activePresetRendererName = null, this.presetRenderers = null;
    }
  };
  return r([m({ type: String, json: { name: "layerDefinition.activePresetRendererName", write: { allowNull: true } } })], i2.prototype, "activePresetRendererName", void 0), r([m({ type: [c], json: { name: "layerDefinition.presetRenderers", write: true } })], i2.prototype, "presetRenderers", void 0), i2 = r([a("esri.layers.mixins.RasterPresetRendererMixin")], i2), i2;
};

// node_modules/@arcgis/core/rest/imageService/fetchRasterInfo.js
async function m2(m3, f3, p3) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const c3 = f(m3), { rasterFunction: d4, sourceJSON: h } = f3 || {}, g2 = d4 ? JSON.stringify(d4.rasterFunctionDefinition || d4) : null, y = s({ ...c3.query, renderingRule: g2, f: "json" }), x2 = i(y, p3);
  m3 = c3.path;
  const S2 = h || await P(m3, x2).then((e) => e.data), b = S2.hasRasterAttributeTable ? P(`${m3}/rasterAttributeTable`, x2) : null, v = S2.hasColormap ? P(`${m3}/colormap`, x2) : null, V = S2.hasHistograms ? P(`${m3}/histograms`, x2) : null, D = S2.currentVersion >= 10.3 ? P(`${m3}/keyProperties`, x2) : null, I = S2.hasMultidimensions ? P(`${m3}/multidimensionalInfo`, x2) : null, T = await Promise.allSettled([b, v, V, D, I]);
  let R = null;
  if (S2.minValues && S2.minValues.length === S2.bandCount) {
    R = [];
    for (let e = 0; e < S2.minValues.length; e++) R.push({ min: S2.minValues[e], max: S2.maxValues[e], avg: S2.meanValues[e], stddev: S2.stdvValues[e] });
  }
  const j2 = w.fromJSON(S2.extent), w2 = Math.ceil(j2.width / S2.pixelSizeX - 0.1), M = Math.ceil(j2.height / S2.pixelSizeY - 0.1), N = g.fromJSON(S2.spatialReference || S2.extent.spatialReference), O = "fulfilled" === T[0].status ? (_a = T[0].value) == null ? void 0 : _a.data : null, J = ((_b = O == null ? void 0 : O.features) == null ? void 0 : _b.length) ? d.fromJSON(O) : null, k = "fulfilled" === T[1].status ? (_c = T[1].value) == null ? void 0 : _c.data.colormap : null, C = (k == null ? void 0 : k.length) ? k : null, P2 = "fulfilled" === T[2].status ? (_d = T[2].value) == null ? void 0 : _d.data.histograms : null, z = ((_f = (_e = P2 == null ? void 0 : P2[0]) == null ? void 0 : _e.counts) == null ? void 0 : _f.length) ? P2 : null, F = "fulfilled" === T[3].status ? ((_g = T[3].value) == null ? void 0 : _g.data) ?? {} : {}, $ = "fulfilled" === T[4].status ? (_h = T[4].value) == null ? void 0 : _h.data.multidimensionalInfo : null, E = ((_i = $ == null ? void 0 : $.variables) == null ? void 0 : _i.length) ? $ : null;
  E && E.variables.forEach((e) => {
    var _a2, _b2;
    ((_a2 = e.statistics) == null ? void 0 : _a2.length) && e.statistics.forEach((e2) => {
      e2.avg = e2.mean, e2.stddev = e2.standardDeviation;
    }), (_b2 = e.dimensions) == null ? void 0 : _b2.forEach((e2) => {
      "StdTime" !== e2.name || e2.recurring || e2.unit || (e2.unit = "ISO8601");
    });
  });
  const { defaultVariable: H, serviceDataType: L } = S2;
  H && H !== F.DefaultVariable && (F.DefaultVariable = H), (L == null ? void 0 : L.includes("esriImageServiceDataTypeVector")) && !L.includes(F.DataType) && (F.DataType = L.replace("esriImageServiceDataType", ""));
  let A = S2.noDataValue;
  ((_j = S2.noDataValues) == null ? void 0 : _j.length) && S2.noDataValues.some((e) => e !== A) && (A = S2.noDataValues);
  const q = S2.transposeInfo ? new n({ blockWidth: 256, blockHeight: 256, pyramidBlockWidth: 256, pyramidBlockHeight: 256, pyramidScalingFactor: 2, compression: "lerc", origin: new j({ x: S2.extent.xmin, y: S2.extent.ymax, spatialReference: N }), firstPyramidLevel: 1, maximumPyramidLevel: Math.max(0, Math.round(Math.log(Math.max(w2, M)) / Math.LN2 - 8)), transposeInfo: S2.transposeInfo }) : void 0;
  return new d2({ width: w2, height: M, bandCount: S2.bandCount, extent: w.fromJSON(S2.extent), spatialReference: N, pixelSize: new j({ x: S2.pixelSizeX, y: S2.pixelSizeY, spatialReference: N }), pixelType: S2.pixelType.toLowerCase(), statistics: R, attributeTable: J, colormap: C, histograms: z, keyProperties: F, noDataValue: A, multidimensionalInfo: E, storageInfo: q });
}
function f2(e, t, a3) {
  return m2(e, { sourceJSON: t }, a3);
}
function p2(e, t, a3) {
  return m2(e, { rasterFunction: t }, a3);
}
function c2(e, t) {
  e.attributeTable || (t.hasRasterAttributeTable = false), e.histograms || (t.hasHistograms = false), e.colormap || (t.hasColormap = false), e.multidimensionalInfo || (t.hasMultidimensions = false);
}

export {
  f2 as f,
  p2 as p,
  c2 as c,
  o
};
//# sourceMappingURL=chunk-ULMAXP6O.js.map
