import {
  a as a2,
  c,
  y
} from "./chunk-ORV73QKC.js";
import {
  T
} from "./chunk-I34S26RP.js";
import {
  ae,
  j as j3,
  w as w2
} from "./chunk-LHHFTRIL.js";
import {
  _,
  h,
  j as j2,
  m2 as m
} from "./chunk-GLICEWE6.js";
import {
  D,
  E,
  R,
  U,
  W,
  f2 as f,
  g,
  s3 as s2,
  u3 as u
} from "./chunk-T4YD2MX2.js";
import "./chunk-ZD4JXG4O.js";
import "./chunk-56GFF6UO.js";
import "./chunk-5LA23O74.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import {
  s
} from "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-XCRRZPKE.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-3UHB6K6P.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import "./chunk-PUM22WTC.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
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

// node_modules/@arcgis/core/layers/support/rasterTransforms/IdentityTransform.js
var e;
var a3 = e = class extends a2 {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new e();
  }
};
r([r2({ IdentityXform: "identity" })], a3.prototype, "type", void 0), a3 = e = r([a("esri.layers.support.rasterTransforms.IdentityTransform")], a3);
var p = a3;

// node_modules/@arcgis/core/layers/support/rasterTransforms/utils.js
var n = { GCSShiftXform: c, IdentityXform: p, PolynomialXform: y };
function f2(r3) {
  const o = r3 == null ? void 0 : r3.type;
  if (!o) return null;
  const t = n[r3 == null ? void 0 : r3.type];
  if (t) {
    const o2 = new t();
    return o2.read(r3), o2;
  }
  return null;
}

// node_modules/@arcgis/core/layers/support/RasterWorker.js
var J = class {
  convertVectorFieldData(r3) {
    const e2 = g.fromJSON(r3.pixelBlock), t = f(e2, r3.type);
    return Promise.resolve(null != t ? t.toJSON() : null);
  }
  computeStatisticsHistograms(r3) {
    const e2 = g.fromJSON(r3.pixelBlock), t = m(e2);
    return Promise.resolve(t);
  }
  async decode(r3) {
    const e2 = await j2(r3.data, r3.options);
    return e2 && e2.toJSON();
  }
  symbolize(e2) {
    e2.pixelBlock = g.fromJSON(e2.pixelBlock), e2.extent = e2.extent ? w.fromJSON(e2.extent) : null;
    const t = this.symbolizer.symbolize(e2);
    return Promise.resolve(null != t ? t.toJSON() : null);
  }
  async updateSymbolizer(r3) {
    var _a;
    this.symbolizer = _.fromJSON(r3.symbolizerJSON), r3.histograms && "rasterStretch" === ((_a = this.symbolizer) == null ? void 0 : _a.rendererJSON.type) && (this.symbolizer.rendererJSON.histograms = r3.histograms);
  }
  async updateRasterFunction(r3) {
    this.rasterFunction = T(r3.rasterFunctionJSON);
  }
  async process(t) {
    var _a;
    const o = this.rasterFunction.process({ extent: w.fromJSON(t.extent), primaryPixelBlocks: t.primaryPixelBlocks.map((r3) => null != r3 ? g.fromJSON(r3) : null), primaryPixelSizes: (_a = t.primaryPixelSizes) == null ? void 0 : _a.map((r3) => null != r3 ? j.fromJSON(r3) : null), primaryRasterIds: t.primaryRasterIds });
    return null != o ? o.toJSON() : null;
  }
  stretch(r3) {
    const e2 = this.symbolizer.simpleStretch(g.fromJSON(r3.srcPixelBlock), r3.stretchParams);
    return Promise.resolve(e2 == null ? void 0 : e2.toJSON());
  }
  estimateStatisticsHistograms(r3) {
    const e2 = h(g.fromJSON(r3.srcPixelBlock));
    return Promise.resolve(e2);
  }
  split(r3) {
    const e2 = W(g.fromJSON(r3.srcPixelBlock), r3.tileSize, r3.maximumPyramidLevel ?? 0, false === r3.useBilinear);
    return e2 && e2.forEach((r4, t) => {
      e2.set(t, r4 == null ? void 0 : r4.toJSON());
    }), Promise.resolve(e2);
  }
  clipTile(r3) {
    const e2 = g.fromJSON(r3.pixelBlock), t = E({ ...r3, pixelBlock: e2 });
    return Promise.resolve(t == null ? void 0 : t.toJSON());
  }
  async mosaicAndTransform(r3) {
    const e2 = r3.srcPixelBlocks.map((r4) => r4 ? new g(r4) : null), t = U(e2, r3.srcMosaicSize, { blockWidths: r3.blockWidths, alignmentInfo: r3.alignmentInfo, clipOffset: r3.clipOffset, clipSize: r3.clipSize });
    let o, i = t;
    return r3.coefs && (i = D(t, r3.destDimension, r3.coefs, r3.sampleSpacing, r3.interpolation)), r3.projectDirections && r3.gcsGrid && (o = R(r3.destDimension, r3.gcsGrid), i = u(i, r3.isUV ? "vector-uv" : "vector-magdir", o)), { pixelBlock: i == null ? void 0 : i.toJSON(), localNorthDirections: o };
  }
  async createFlowMesh(r3, e2) {
    const t = { data: new Float32Array(r3.flowData.buffer), mask: new Uint8Array(r3.flowData.maskBuffer), width: r3.flowData.width, height: r3.flowData.height }, { vertexData: s3, indexData: o } = await s2(r3.meshType, r3.simulationSettings, t, e2.signal);
    return { result: { vertexBuffer: s3.buffer, indexBuffer: o.buffer }, transferList: [s3.buffer, o.buffer] };
  }
  async getProjectionOffsetGrid(e2) {
    const s3 = w.fromJSON(e2.projectedExtent), o = w.fromJSON(e2.srcBufferExtent);
    let i = null;
    e2.datumTransformationSteps && (i = new s({ steps: e2.datumTransformationSteps })), (e2.includeGCSGrid || w2(s3.spatialReference, o.spatialReference, i)) && await j3();
    const n2 = e2.rasterTransform ? f2(e2.rasterTransform) : null;
    return ae({ ...e2, projectedExtent: s3, srcBufferExtent: o, datumTransformation: i, rasterTransform: n2 });
  }
};
export {
  J as default
};
//# sourceMappingURL=RasterWorker-I5MCDSQR.js.map
