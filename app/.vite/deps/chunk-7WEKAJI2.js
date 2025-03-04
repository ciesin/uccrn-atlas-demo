import {
  p as p3
} from "./chunk-LZBUPIMY.js";
import {
  B,
  a2 as a6,
  a3 as a7,
  e,
  i2,
  n as n5,
  n2 as n6,
  o as o4,
  r3 as r4,
  t,
  u as u2
} from "./chunk-GLICEWE6.js";
import {
  a3 as a8,
  f2,
  g,
  p2 as p4,
  s2 as s5
} from "./chunk-T4YD2MX2.js";
import {
  D,
  J
} from "./chunk-M6YQSYSW.js";
import {
  R
} from "./chunk-67XXGAOA.js";
import {
  a as a5,
  w as w2
} from "./chunk-WANI2G7M.js";
import {
  A,
  n as n4
} from "./chunk-Q7YUVHCX.js";
import {
  a as a4,
  b as b2,
  j as j3,
  v as v2
} from "./chunk-MG7UOFLP.js";
import {
  a as a3,
  m as m2,
  p as p2
} from "./chunk-5LA23O74.js";
import {
  u
} from "./chunk-4A3WH4AR.js";
import {
  T,
  h as h2
} from "./chunk-POMCHIIZ.js";
import {
  p as p5
} from "./chunk-QM4DRRZI.js";
import {
  y
} from "./chunk-FF44HCOD.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  n as n3
} from "./chunk-TYJOGWKZ.js";
import {
  S as S2,
  y as y2
} from "./chunk-4WO6KUCB.js";
import {
  d
} from "./chunk-2Y4TRKRB.js";
import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  f,
  v
} from "./chunk-WZBMMIVS.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  o as o3
} from "./chunk-JLFV7EBO.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n as n2
} from "./chunk-YUVX6H42.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  s as s4
} from "./chunk-BDBI2KVA.js";
import {
  i,
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m,
  s2 as s3
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  s2 as s,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n2 as n,
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/RasterFunctionInfo.js
var i3 = class extends S {
  constructor() {
    super(...arguments), this.pixelType = "unknown";
  }
};
r([m({ type: String, json: { write: { isRequired: true } } })], i3.prototype, "name", void 0), r([m({ type: String, json: { write: true } })], i3.prototype, "description", void 0), r([m({ type: x, json: { type: x, write: true, name: "_object_id" } })], i3.prototype, "id", void 0), r([m({ type: String, json: { type: n5.jsonValues, read: n5.read, write: { writer: n5.write, isRequired: true } } })], i3.prototype, "pixelType", void 0), r([m({ type: String, json: { write: { isRequired: true } } })], i3.prototype, "type", void 0), i3 = r([a2("esri.layers.support.RasterFunctionInfo")], i3);
var n7 = i3;

// node_modules/@arcgis/core/layers/support/RasterFunctionVariable.js
var p6 = class extends S {
  constructor() {
    super(...arguments), this.isDataset = false, this.isPublic = false, this.type = "RasterFunctionVariable";
  }
};
r([m({ type: String, json: { write: true } })], p6.prototype, "name", void 0), r([m({ type: Number, json: { type: x, write: true, name: "_object_id" } })], p6.prototype, "id", void 0), r([m({ type: Boolean, json: { write: true } })], p6.prototype, "isDataset", void 0), r([m({ type: Boolean, json: { write: true } })], p6.prototype, "isPublic", void 0), r([m({ json: { write: true } })], p6.prototype, "value", void 0), r([m({ type: String, json: { write: true } })], p6.prototype, "type", void 0), p6 = r([a2("esri.layers.support.RasterFunctionVariable")], p6);
var i4 = p6;

// node_modules/@arcgis/core/layers/support/RasterFunctionProperties.js
var i5 = { key: "type", base: null, typeMap: { RasterFunctionVariable: i4 } };
var a9 = class extends S {
};
r([m({ types: i5, json: { types: i5, name: "MatchVariable" } })], a9.prototype, "matchVariable", void 0), r([m({ types: i5, json: { types: i5, name: "UnionDimension" } })], a9.prototype, "unionDimension", void 0), r([m({ type: Number, json: { type: x, write: true, name: "_object_id" } })], a9.prototype, "id", void 0), r([m({ type: String, json: { write: true } })], a9.prototype, "type", void 0), a9 = r([a2("esri.layers.support.RasterFunctionProperties")], a9);
var n8 = a9;

// node_modules/@arcgis/core/layers/support/RasterFunctionTemplate.js
var y3 = new o({ 0: "mosaic", 1: "item", 2: "item-group" }, { useNumericKeys: true });
var a10 = class extends S {
  constructor() {
    super(...arguments), this.description = "", this.functionType = "mosaic", this.type = "RasterFunctionTemplate";
  }
};
r([m({ type: [String], json: { write: true } })], a10.prototype, "aliases", void 0), r([m({ type: Object, json: { write: { isRequired: true } } })], a10.prototype, "arguments", void 0), r([m({ type: String, json: { write: { isRequired: true } } })], a10.prototype, "description", void 0), r([m({ type: n7, json: { write: { isRequired: true }, name: "function" } })], a10.prototype, "functionInfo", void 0), r([m({ type: y3.apiValues, json: { type: [0, 1, 2], read: y3.read, write: { writer: y3.write, isRequired: true } } })], a10.prototype, "functionType", void 0), r([m({ type: String, json: { write: true } })], a10.prototype, "group", void 0), r([m({ type: String, json: { write: true } })], a10.prototype, "help", void 0), r([m({ type: Number, json: { type: x, write: true, name: "_object_id" } })], a10.prototype, "id", void 0), r([m({ type: String, json: { write: { isRequired: true } } })], a10.prototype, "name", void 0), r([m({ type: String, json: { write: true, name: "definition" } })], a10.prototype, "queryDefinition", void 0), r([m({ type: String, json: { write: true } })], a10.prototype, "tag", void 0), r([m({ type: n8, json: { write: true } })], a10.prototype, "properties", void 0), r([m({ type: String, json: { write: true } })], a10.prototype, "thumbnail", void 0), r([m({ type: String, json: { write: true } })], a10.prototype, "thumbnailEx", void 0), r([m({ json: { type: ["RasterFunctionTemplate"], write: true } })], a10.prototype, "type", void 0), a10 = r([a2("esri.layers.support.RasterFunctionTemplate")], a10);
var c = a10;

// node_modules/@arcgis/core/layers/support/RasterFunction.js
var c2;
var p7 = /* @__PURE__ */ new Set(["raster", "raster2", "dem", "fillraster"]);
var m3 = /* @__PURE__ */ new Set(["rasters"]);
var f3 = (t3) => (t3 == null ? void 0 : t3.rasterFunction) ? N.fromJSON(t3) : t3;
var l2 = (t3) => t3 && t3 instanceof N ? t3.toJSON() : t3;
var y4 = (t3) => (t3 == null ? void 0 : t3.functionName) && !t3.declaredClass;
var F = (t3) => y4(t3) ? new N(t3) : t3;
var h3 = (t3) => {
  if (null == t3) return null;
  t3 = a(t3);
  const e2 = {};
  for (const n9 of Object.keys(t3)) p7.has(n9.toLowerCase()) ? e2[n9] = f3(t3[n9]) : m3.has(n9.toLowerCase()) && Array.isArray(t3[n9]) ? e2[n9] = t3[n9].map(f3) : e2[n9] = t3[n9];
  return e2;
};
var d2 = (t3) => t3 ? c.fromJSON({ type: "RasterFunctionTemplate", ...t3 }) : void 0;
var g2 = { types: { key: "type", base: null, typeMap: { RasterFunctionTemplate: c } }, json: { write: true, name: "rasterFunctionDefinition", read: d2 } };
var N = c2 = class extends S {
  constructor(t3) {
    super(t3), this.functionName = null, this.outputPixelType = "unknown", this.variableName = null, this.functionDefinition = null;
  }
  set functionArguments(t3) {
    if (t3) {
      const e2 = Object.keys(t3);
      if (e2.some((e3) => p7.has(e3.toLowerCase()) && y4(t3[e3])) || e2.some((e3) => m3.has(e3.toLowerCase()) && Array.isArray(t3[e3]) && t3[e3].some((t4) => y4(t4)))) {
        t3 = a(t3);
        for (const n9 of e2) p7.has(n9.toLowerCase()) ? t3[n9] = F(t3[n9]) : m3.has(n9.toLowerCase()) && Array.isArray(t3[n9]) && (t3[n9] = t3[n9].map((t4) => F(t4)));
      }
    }
    this._set("functionArguments", t3);
  }
  readFunctionArguments(t3) {
    return h3(t3);
  }
  writeFunctionArguments(t3, e2, n9) {
    const r5 = {};
    for (const o5 of Object.keys(t3)) p7.has(o5.toLowerCase()) ? r5[o5] = l2(t3[o5]) : m3.has(o5.toLowerCase()) && Array.isArray(t3[o5]) ? r5[o5] = t3[o5].map(l2) : r5[o5] = l2(t3[o5]);
    e2[n9] = r5;
  }
  readFunctionName(t3, e2) {
    var _a;
    const n9 = e2.rasterFunctionInfos, r5 = e2.name;
    return r5 || ((n9 == null ? void 0 : n9.length) && "None" !== n9[0].name ? n9[0].name : e2.rasterFunction || ((_a = e2.rasterFunctionDefinition) == null ? void 0 : _a.name));
  }
  get rasterFunctionDefinition() {
    var _a;
    return (_a = this.functionDefinition) == null ? void 0 : _a.toJSON();
  }
  set rasterFunctionDefinition(t3) {
    this.functionDefinition = d2(t3);
  }
  get hasClipFunction() {
    return this.rasterFunctionDefinition ? JSON.stringify(this.rasterFunctionDefinition).includes('"type":"ClipFunction"') : JSON.stringify(this).includes('"rasterFunction":"Clip"');
  }
  clone() {
    return new c2({ functionName: this.functionName, functionArguments: a(this.functionArguments), outputPixelType: this.outputPixelType, variableName: this.variableName, rasterFunctionDefinition: a(this.rasterFunctionDefinition) });
  }
};
r([m({ json: { type: Object, name: "rasterFunctionArguments" } })], N.prototype, "functionArguments", null), r([o2("functionArguments")], N.prototype, "readFunctionArguments", null), r([r2("functionArguments")], N.prototype, "writeFunctionArguments", null), r([m({ json: { type: String, write: { target: "rasterFunction" } } })], N.prototype, "functionName", void 0), r([o2("functionName", ["rasterFunction", "rasterFunctionInfos", "rasterFunctionDefinition"])], N.prototype, "readFunctionName", null), r([r3({ C128: "c128", C64: "c64", F32: "f32", F64: "f64", S16: "s16", S32: "s32", S8: "s8", U1: "u1", U16: "u16", U2: "u2", U32: "u32", U4: "u4", U8: "u8", UNKNOWN: "unknown" }, { ignoreUnknown: false, default: "unknown" })], N.prototype, "outputPixelType", void 0), r([m({ type: String, json: { read: true, write: true } })], N.prototype, "variableName", void 0), r([m()], N.prototype, "rasterFunctionDefinition", null), r([m(g2)], N.prototype, "functionDefinition", void 0), r([m()], N.prototype, "hasClipFunction", null), N = c2 = r([a2("esri.layers.support.RasterFunction")], N);
var w3 = N;

// node_modules/@arcgis/core/layers/support/MosaicRule.js
var m4;
var h4 = i()({ MT_FIRST: "first", MT_LAST: "last", MT_MIN: "min", MT_MAX: "max", MT_MEAN: "mean", MT_BLEND: "blend", MT_SUM: "sum" });
var w4 = i()({ esriMosaicNone: "none", esriMosaicCenter: "center", esriMosaicNadir: "nadir", esriMosaicViewpoint: "viewpoint", esriMosaicAttribute: "attribute", esriMosaicLockRaster: "lock-raster", esriMosaicNorthwest: "northwest", esriMosaicSeamline: "seamline" });
function M(e2) {
  let t3;
  switch (e2 ? e2.toLowerCase().replace("esrimosaic", "") : "") {
    case "byattribute":
    case "attribute":
      t3 = "esriMosaicAttribute";
      break;
    case "lockraster":
      t3 = "esriMosaicLockRaster";
      break;
    case "center":
      t3 = "esriMosaicCenter";
      break;
    case "northwest":
      t3 = "esriMosaicNorthwest";
      break;
    case "nadir":
      t3 = "esriMosaicNadir";
      break;
    case "viewpoint":
      t3 = "esriMosaicViewpoint";
      break;
    case "seamline":
      t3 = "esriMosaicSeamline";
      break;
    default:
      t3 = "esriMosaicNone";
  }
  return w4.fromJSON(t3);
}
var y5 = m4 = class extends S {
  constructor(e2) {
    super(e2), this.ascending = true, this.itemRasterFunction = null, this.lockRasterIds = null, this.method = "none", this.multidimensionalDefinition = null, this.objectIds = null, this.operation = "first", this.sortField = null, this.sortValue = null, this.viewpoint = null, this.where = null;
  }
  readAscending(e2, t3) {
    return null != t3.ascending ? t3.ascending : null == t3.sortAscending || t3.sortAscending;
  }
  readMethod(e2, t3) {
    return M(t3.mosaicMethod || t3.defaultMosaicMethod);
  }
  writeMultidimensionalDefinition(e2, t3, o5) {
    null != e2 && (e2 = e2.filter(({ variableName: e3, dimensionName: t4 }) => e3 && "*" !== e3 || t4)).length && (t3[o5] = e2.map((e3) => e3.toJSON()));
  }
  readOperation(e2, t3) {
    var _a;
    const o5 = t3.mosaicOperation, i7 = (_a = t3.mosaicOperator) == null ? void 0 : _a.toLowerCase(), r5 = o5 || (i7 ? h4.toJSON(i7) : null);
    return h4.fromJSON(r5) || "first";
  }
  castSortValue(e2) {
    return null == e2 || "string" == typeof e2 || "number" == typeof e2 ? e2 : `${e2}`;
  }
  clone() {
    return new m4({ ascending: this.ascending, itemRasterFunction: a(this.itemRasterFunction), lockRasterIds: a(this.lockRasterIds), method: this.method, multidimensionalDefinition: a(this.multidimensionalDefinition), objectIds: a(this.objectIds), operation: this.operation, sortField: this.sortField, sortValue: this.sortValue, viewpoint: a(this.viewpoint), where: this.where });
  }
};
r([m({ type: Boolean, json: { write: true } })], y5.prototype, "ascending", void 0), r([o2("ascending", ["ascending", "sortAscending"])], y5.prototype, "readAscending", null), r([m({ type: w3, json: { name: "itemRenderingRule", write: true } })], y5.prototype, "itemRasterFunction", void 0), r([m({ type: [x], json: { write: { overridePolicy() {
  return { enabled: "lock-raster" === this.method };
} } } })], y5.prototype, "lockRasterIds", void 0), r([m({ type: w4.apiValues, json: { type: w4.jsonValues, write: { target: "mosaicMethod", writer: w4.write, isRequired: true } } })], y5.prototype, "method", void 0), r([o2("method", ["mosaicMethod", "defaultMosaicMethod"])], y5.prototype, "readMethod", null), r([m({ type: [p3], json: { write: true } })], y5.prototype, "multidimensionalDefinition", void 0), r([r2("multidimensionalDefinition")], y5.prototype, "writeMultidimensionalDefinition", null), r([m({ type: [x], json: { name: "fids", write: true } })], y5.prototype, "objectIds", void 0), r([m({ type: h4.apiValues, json: { type: h4.jsonValues, read: { reader: h4.read }, write: { target: "mosaicOperation", writer: h4.write } } })], y5.prototype, "operation", void 0), r([o2("operation", ["mosaicOperation", "mosaicOperator"])], y5.prototype, "readOperation", null), r([m({ type: String, json: { write: { overridePolicy() {
  return { enabled: "attribute" === this.method };
} } } })], y5.prototype, "sortField", void 0), r([m({ type: [String, Number], json: { write: { allowNull: true, overridePolicy() {
  return { enabled: "attribute" === this.method, allowNull: true };
} } } })], y5.prototype, "sortValue", void 0), r([s4("sortValue")], y5.prototype, "castSortValue", null), r([m({ type: j, json: { write: true } })], y5.prototype, "viewpoint", void 0), r([m({ type: String, json: { write: true } })], y5.prototype, "where", void 0), y5 = m4 = r([a2("esri.layers.support.MosaicRule")], y5);
var f4 = y5;

// node_modules/@arcgis/core/layers/support/MultidimensionalSubset.js
var m5;
var p8 = { base: n2, key: "type", typeMap: { extent: w, polygon: j2 } };
var u3 = m5 = class extends S {
  constructor(e2) {
    super(e2), this.areaOfInterest = null, this.subsetDefinitions = null;
  }
  get dimensions() {
    const { subsetDefinitions: e2 } = this;
    if (null == e2 || 0 === e2.length) return [];
    const t3 = /* @__PURE__ */ new Map();
    e2.forEach((e3) => {
      if (!e3.dimensionName) return;
      let s7, o5;
      if (Array.isArray(e3.values[0])) {
        const t4 = e3.values;
        s7 = t4[0][0], o5 = t4[e3.values.length - 1][1];
      } else {
        const t4 = e3.values;
        s7 = t4[0], o5 = t4[e3.values.length - 1];
      }
      if (t3.has(e3.dimensionName)) {
        const r5 = t3.get(e3.dimensionName);
        r5[0] = Math.min(s7, r5[0]), r5[1] = Math.max(o5, r5[1]);
      } else t3.set(e3.dimensionName, [s7, o5]);
    });
    const s6 = [];
    for (const o5 of t3) s6.push({ name: o5[0], extent: o5[1] });
    return s6;
  }
  get variables() {
    const { subsetDefinitions: e2 } = this;
    if (null == e2 || 0 === e2.length) return [];
    const t3 = /* @__PURE__ */ new Set();
    return e2.forEach((e3) => {
      e3.variableName && t3.add(e3.variableName);
    }), [...t3];
  }
  clone() {
    var _a;
    const e2 = (_a = this.subsetDefinitions) == null ? void 0 : _a.map((e3) => e3.clone()), t3 = this.areaOfInterest ? this.areaOfInterest.clone() : this.areaOfInterest;
    return new m5({ areaOfInterest: t3, subsetDefinitions: e2 });
  }
};
r([m({ types: p8, json: { read: f, write: true } })], u3.prototype, "areaOfInterest", void 0), r([m({ readOnly: true })], u3.prototype, "dimensions", null), r([m({ readOnly: true })], u3.prototype, "variables", null), r([m({ type: [p3], json: { write: true } })], u3.prototype, "subsetDefinitions", void 0), u3 = m5 = r([a2("esri.layers.support.MultidimensionalSubset")], u3);
var c3 = u3;

// node_modules/@arcgis/core/layers/support/RasterJobHandler.js
var t2 = class {
  constructor() {
    this._workerThread = null, this._destroyed = false;
  }
  async initialize() {
    const e2 = await p5("RasterWorker");
    this._destroyed ? e2.close() : this._workerThread = e2;
  }
  destroy() {
    this._destroyed = true, this._workerThread && (this._workerThread.close(), this._workerThread = null);
  }
  async convertVectorFieldData(r5, t3) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    const n9 = await this._workerThread.invoke("convertVectorFieldData", { pixelBlock: r5.pixelBlock.toJSON(), type: r5.dataType }, t3);
    return n9 ? new g(n9) : null;
  }
  computeStatisticsHistograms(r5, o5) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    return this._workerThread.invoke("computeStatisticsHistograms", { pixelBlock: r5.pixelBlock.toJSON() }, o5);
  }
  async decode(r5, t3) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    const n9 = await this._workerThread.invoke("decode", r5, t3);
    return n9 ? new g(n9) : null;
  }
  async symbolize(r5, t3) {
    var _a, _b;
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    const n9 = { extent: (_a = r5.extent) == null ? void 0 : _a.toJSON(), pixelBlock: (_b = r5.pixelBlock) == null ? void 0 : _b.toJSON(), simpleStretchParams: r5.simpleStretchParams, bandIds: r5.bandIds }, a13 = await this._workerThread.invoke("symbolize", n9, t3);
    return a13 ? new g(a13) : null;
  }
  async updateSymbolizer(r5, o5) {
    var _a;
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    const t3 = (_a = r5 == null ? void 0 : r5.rendererJSON) == null ? void 0 : _a.histograms;
    await Promise.all(this._workerThread.broadcast("updateSymbolizer", { symbolizerJSON: r5.toJSON(), histograms: t3 }, o5));
  }
  async updateRasterFunction(r5, o5) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    await Promise.all(this._workerThread.broadcast("updateRasterFunction", { rasterFunctionJSON: r5.toJSON() }, o5));
  }
  async process(r5, t3) {
    var _a, _b;
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    const n9 = await this._workerThread.invoke("process", { extent: (_a = r5.extent) == null ? void 0 : _a.toJSON(), primaryPixelSizes: (_b = r5.primaryPixelSizes) == null ? void 0 : _b.map((e2) => null != e2 ? e2.toJSON() : null), primaryPixelBlocks: r5.primaryPixelBlocks.map((e2) => null != e2 ? e2.toJSON() : null), primaryRasterIds: r5.primaryRasterIds }, t3);
    return n9 ? new g(n9) : null;
  }
  async stretch(r5, t3) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    if (!(r5 == null ? void 0 : r5.pixelBlock)) return null;
    const n9 = { srcPixelBlock: r5.pixelBlock.toJSON(), stretchParams: r5.stretchParams }, a13 = await this._workerThread.invoke("stretch", n9, t3);
    return a13 ? new g(a13) : null;
  }
  async split(r5, t3) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    if (!(r5 == null ? void 0 : r5.pixelBlock)) return null;
    const n9 = { srcPixelBlock: r5.pixelBlock.toJSON(), tileSize: r5.tileSize, maximumPyramidLevel: r5.maximumPyramidLevel, useBilinear: r5.useBilinear }, a13 = await this._workerThread.invoke("split", n9, t3);
    return a13 && a13.forEach((e2, r6) => {
      a13.set(r6, e2 ? g.fromJSON(e2) : null);
    }), a13;
  }
  async clipTile(r5, t3) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    if (!(r5 == null ? void 0 : r5.pixelBlock)) return null;
    const n9 = { ...r5, pixelBlock: r5.pixelBlock.toJSON() }, a13 = await this._workerThread.invoke("clipTile", n9, t3);
    return a13 ? g.fromJSON(a13) : null;
  }
  async estimateStatisticsHistograms(r5, o5) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    if (!(r5 == null ? void 0 : r5.pixelBlock)) return null;
    const t3 = { srcPixelBlock: r5.pixelBlock.toJSON() };
    return await this._workerThread.invoke("estimateStatisticsHistograms", t3, o5);
  }
  async mosaicAndTransform(r5, t3) {
    var _a;
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    if (!((_a = r5 == null ? void 0 : r5.srcPixelBlocks) == null ? void 0 : _a.length)) return { pixelBlock: null };
    const n9 = { ...r5, srcPixelBlocks: r5.srcPixelBlocks.map((e2) => null != e2 ? e2.toJSON() : null) }, a13 = await this._workerThread.invoke("mosaicAndTransform", n9, t3);
    return { pixelBlock: a13.pixelBlock ? new g(a13.pixelBlock) : null, localNorthDirections: a13.localNorthDirections };
  }
  async createFlowMesh(r5, o5) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    const t3 = { buffer: r5.flowData.data.buffer, maskBuffer: r5.flowData.mask.buffer, width: r5.flowData.width, height: r5.flowData.height }, { meshType: n9, simulationSettings: a13 } = r5, i7 = await this._workerThread.invoke("createFlowMesh", { meshType: n9, flowData: t3, simulationSettings: a13 }, { ...o5, transferList: [t3.buffer, t3.maskBuffer] });
    return { vertexData: new Float32Array(i7.vertexBuffer), indexData: new Uint32Array(i7.indexBuffer) };
  }
  getProjectionOffsetGrid(r5, o5) {
    if (!this._workerThread) throw new s2("raster-jobhandler:no-connection", "no available worker connection");
    const t3 = null != r5.datumTransformation ? r5.datumTransformation.steps.map((e2) => ({ wkid: e2.wkid, wkt: e2.wkt, isInverse: e2.isInverse })) : null, n9 = null != r5.rasterTransform ? r5.rasterTransform.toJSON() : null, a13 = { projectedExtent: r5.projectedExtent.toJSON(), srcBufferExtent: r5.srcBufferExtent.toJSON(), pixelSize: r5.pixelSize, hasWrapAround: r5.hasWrapAround, spacing: r5.spacing, datumTransformationSteps: t3, rasterTransform: n9, isAdaptive: r5.isAdaptive, includeGCSGrid: r5.includeGCSGrid };
    return this._workerThread.invoke("getProjectionOffsetGrid", a13, o5);
  }
};

// node_modules/@arcgis/core/renderers/FlowRenderer.js
var d3;
var c4 = new o({ flow_from: "flow-from", flow_to: "flow-to" });
var h5 = d3 = class extends v2(S) {
  constructor(o5) {
    super(o5), this.density = 0.8, this.color = new h([255, 255, 255, 1]), this.maxPathLength = 200, this.trailWidth = 1.5, this.flowSpeed = 10, this.trailLength = 100, this.smoothing = 0, this.flowRepresentation = "flow-from", this.type = "flow", this.authoringInfo = null, this.legendOptions = null, this.trailCap = "butt", this.background = "none";
  }
  clone() {
    var _a, _b;
    const { density: o5, maxPathLength: t3, trailWidth: e2, flowSpeed: r5, trailLength: i7, smoothing: s6, flowRepresentation: n9, trailCap: p11, background: a13 } = this, l6 = this.color.clone(), m8 = (this.visualVariables || []).map((o6) => o6.clone()), c9 = (_a = this.authoringInfo) == null ? void 0 : _a.clone(), h7 = (_b = this.legendOptions) == null ? void 0 : _b.clone();
    return new d3({ density: o5, color: l6, maxPathLength: t3, trailWidth: e2, flowSpeed: r5, trailLength: i7, trailCap: p11, background: a13, smoothing: s6, flowRepresentation: n9, visualVariables: m8, authoringInfo: c9, legendOptions: h7 });
  }
  getSymbol(o5, t3) {
  }
  async getSymbolAsync(o5, t3) {
  }
  getSymbols() {
    return [];
  }
};
r([m({ type: Number, json: { write: true } })], h5.prototype, "density", void 0), r([m({ type: h, json: { write: { allowNull: true } } })], h5.prototype, "color", void 0), r([m({ type: Number, cast: o3, json: { write: true } })], h5.prototype, "maxPathLength", void 0), r([m({ type: Number, cast: o3, json: { write: true } })], h5.prototype, "trailWidth", void 0), r([m({ type: Number, json: { write: true } })], h5.prototype, "flowSpeed", void 0), r([m({ type: Number, json: { write: true } })], h5.prototype, "trailLength", void 0), r([m({ type: Number, cast: o3, json: { write: false } })], h5.prototype, "smoothing", void 0), r([m({ type: c4.apiValues, json: { type: c4.jsonValues, read: { reader: c4.read }, write: { writer: c4.write } } })], h5.prototype, "flowRepresentation", void 0), r([r3({ flowRenderer: "flow" })], h5.prototype, "type", void 0), r([m({ type: j3, json: { write: true } })], h5.prototype, "authoringInfo", void 0), r([m({ type: u, json: { write: true } })], h5.prototype, "legendOptions", void 0), r([m({ type: String, json: { write: true } })], h5.prototype, "trailCap", void 0), r([m({ type: String, json: { write: true } })], h5.prototype, "background", void 0), h5 = d3 = r([a2("esri.renderers.FlowRenderer")], h5);
var u4 = h5;

// node_modules/@arcgis/core/renderers/support/ColormapInfo.js
var i6 = class extends S {
  constructor() {
    super(...arguments), this.value = null, this.label = null, this.color = null;
  }
};
r([m({ type: Number, json: { write: { isRequired: true } } })], i6.prototype, "value", void 0), r([m({ type: String, json: { write: true } })], i6.prototype, "label", void 0), r([m({ type: h, json: { type: [x], write: { isRequired: true } } })], i6.prototype, "color", void 0), i6 = r([a2("esri.renderers.support.ColormapInfo")], i6);
var c5 = i6;

// node_modules/@arcgis/core/renderers/RasterColormapRenderer.js
var c6;
var m6 = c6 = class extends S {
  constructor(o5) {
    super(o5), this.colormapInfos = null, this.type = "raster-colormap";
  }
  static createFromColormap(o5, r5) {
    if (!o5) return null;
    const t3 = 5 === o5[0].length, e2 = [...o5].sort((o6, r6) => o6[0] - r6[0]).map((o6) => c5.fromJSON({ value: o6[0], color: t3 ? o6.slice(1, 5) : o6.slice(1, 4).concat([255]), label: r5 ? r5[o6[0]] ?? "" : o6[0] }));
    return new c6({ colormapInfos: e2 });
  }
  static createFromColorramp(o5) {
    const r5 = B(o5);
    return c6.createFromColormap(r5);
  }
  clone() {
    return new c6({ colormapInfos: this.colormapInfos.map((o5) => o5.toJSON()) });
  }
  extractColormap() {
    return this.colormapInfos.map(({ value: o5, color: r5 }) => [o5, r5.r, r5.g, r5.b, r5.a > 1 ? r5.a : 255 * r5.a & 255]).sort((o5, r5) => o5[0] - r5[0]);
  }
};
r([m({ type: [c5], json: { write: { isRequired: true } } })], m6.prototype, "colormapInfos", void 0), r([r3({ rasterColormap: "raster-colormap" }), m({ json: { write: { isRequired: true } } })], m6.prototype, "type", void 0), m6 = c6 = r([a2("esri.renderers.RasterColormapRenderer")], m6);
var l3 = m6;

// node_modules/@arcgis/core/renderers/RasterShadedReliefRenderer.js
var d4;
var c7 = d4 = class extends S {
  constructor(e2) {
    super(e2), this.altitude = 45, this.azimuth = 315, this.colorRamp = null, this.hillshadeType = "traditional", this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.scalingType = "none", this.type = "raster-shaded-relief", this.zFactor = 1;
  }
  readColorRamp(e2) {
    return p2(e2);
  }
  clone() {
    return new d4({ hillshadeType: this.hillshadeType, altitude: this.altitude, azimuth: this.azimuth, zFactor: this.zFactor, scalingType: this.scalingType, pixelSizeFactor: this.pixelSizeFactor, pixelSizePower: this.pixelSizePower, colorRamp: a(this.colorRamp) });
  }
};
r([m({ type: Number, json: { write: { isRequired: true } } })], c7.prototype, "altitude", void 0), r([m({ type: Number, json: { write: { isRequired: true } } })], c7.prototype, "azimuth", void 0), r([m({ types: m2, json: { write: true } })], c7.prototype, "colorRamp", void 0), r([o2("colorRamp")], c7.prototype, "readColorRamp", null), r([m({ type: ["traditional", "multi-directional"], json: { write: { isRequired: true } } })], c7.prototype, "hillshadeType", void 0), r([m({ type: Number, json: { write: true } })], c7.prototype, "pixelSizePower", void 0), r([m({ type: Number, json: { write: true } })], c7.prototype, "pixelSizeFactor", void 0), r([m({ type: ["none", "adjusted"], json: { write: { isRequired: true } } })], c7.prototype, "scalingType", void 0), r([r3({ rasterShadedRelief: "raster-shaded-relief" }), m({ json: { write: { isRequired: true } } })], c7.prototype, "type", void 0), r([m({ type: Number, json: { write: { isRequired: true } } })], c7.prototype, "zFactor", void 0), c7 = d4 = r([a2("esri.renderers.RasterShadedReliefRenderer")], c7);
var m7 = c7;

// node_modules/@arcgis/core/renderers/RasterStretchRenderer.js
var l4;
var y6 = l4 = class extends S {
  constructor(t3) {
    super(t3), this.colorRamp = null, this.computeGamma = false, this.dynamicRangeAdjustment = false, this.gamma = [], this.maxPercent = null, this.minPercent = null, this.numberOfStandardDeviations = null, this.outputMax = null, this.outputMin = null, this.sigmoidStrengthLevel = null, this.histograms = null, this.useGamma = false, this.stretchType = "none", this.type = "raster-stretch";
  }
  readColorRamp(t3) {
    if (t3) return p2(t3);
  }
  get statistics() {
    return this._get("statistics");
  }
  set statistics(t3) {
    s3(n.getLogger(this), "statistics", { replacement: "customStatistics", version: "4.31", warnOnce: true }), this._set("statistics", t3);
  }
  get customStatistics() {
    const t3 = this.statistics;
    return t3 && Array.isArray(t3[0]) ? t3.map((t4) => ({ min: t4[0], max: t4[1], avg: t4[2], stddev: t4[3] })) : t3;
  }
  set customStatistics(t3) {
    this._set("statistics", t3 == null ? void 0 : t3.map((t4) => [t4.min, t4.max, t4.avg ?? 0, t4.stddev ?? 1]));
  }
  readCustomStatistics(t3) {
    return t3 == null ? void 0 : t3.map((t4) => ({ min: t4[0], max: t4[1], avg: t4[2], stddev: t4[3] }));
  }
  writeCustomStatistics(t3, e2, r5) {
    (t3 == null ? void 0 : t3.length) && (e2[r5] = t3.map((t4) => [t4.min, t4.max, t4.avg ?? 0, t4.stddev ?? 1]));
  }
  readStretchType(t3, e2) {
    let r5 = e2.stretchType;
    return "number" == typeof r5 && (r5 = a7[r5]), n6.read(r5);
  }
  clone() {
    const t3 = new l4({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, gamma: a(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, colorRamp: a(this.colorRamp), histograms: a(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment });
    return t3._set("statistics", a(this.statistics)), t3;
  }
};
r([m({ types: m2, json: { write: true } })], y6.prototype, "colorRamp", void 0), r([o2("colorRamp")], y6.prototype, "readColorRamp", null), r([m({ type: Boolean, json: { write: true } })], y6.prototype, "computeGamma", void 0), r([m({ type: Boolean, json: { write: { target: "dra" }, read: { source: "dra" } } })], y6.prototype, "dynamicRangeAdjustment", void 0), r([m({ type: [Number], json: { write: true } })], y6.prototype, "gamma", void 0), r([m({ type: Number, json: { write: true } })], y6.prototype, "maxPercent", void 0), r([m({ type: Number, json: { write: true } })], y6.prototype, "minPercent", void 0), r([m({ type: Number, json: { write: true } })], y6.prototype, "numberOfStandardDeviations", void 0), r([m({ type: Number, json: { read: { source: "max" }, write: { target: "max" } } })], y6.prototype, "outputMax", void 0), r([m({ type: Number, json: { read: { source: "min" }, write: { target: "min" } } })], y6.prototype, "outputMin", void 0), r([m({ type: Number, json: { write: true } })], y6.prototype, "sigmoidStrengthLevel", void 0), r([m({})], y6.prototype, "statistics", null), r([m()], y6.prototype, "histograms", void 0), r([m({ json: { type: [[Number]], name: "statistics", write: true } })], y6.prototype, "customStatistics", null), r([o2("customStatistics")], y6.prototype, "readCustomStatistics", null), r([r2("customStatistics")], y6.prototype, "writeCustomStatistics", null), r([m({ type: Boolean, json: { write: true } })], y6.prototype, "useGamma", void 0), r([m({ type: n6.apiValues, json: { type: n6.jsonValues, write: n6.write } })], y6.prototype, "stretchType", void 0), r([o2("stretchType", ["stretchType"])], y6.prototype, "readStretchType", null), r([r3({ rasterStretch: "raster-stretch" })], y6.prototype, "type", void 0), y6 = l4 = r([a2("esri.renderers.RasterStretchRenderer")], y6);
var g3 = y6;

// node_modules/@arcgis/core/renderers/VectorFieldRenderer.js
var S3;
var z = /* @__PURE__ */ new Set(["esriMetersPerSecond", "esriKilometersPerHour", "esriKnots", "esriFeetPerSecond", "esriMilesPerHour"]);
var u5 = new o({ beaufort_ft: "beaufort-ft", beaufort_km: "beaufort-km", beaufort_kn: "beaufort-kn", beaufort_m: "beaufort-m", beaufort_mi: "beaufort-mi", classified_arrow: "classified-arrow", ocean_current_kn: "ocean-current-kn", ocean_current_m: "ocean-current-m", simple_scalar: "simple-scalar", single_arrow: "single-arrow", wind_speed: "wind-barb" });
var Z = new o({ flow_from: "flow-from", flow_to: "flow-to" });
var b3 = S3 = class extends v2(S) {
  constructor(e2) {
    super(e2), this.attributeField = "Magnitude", this.flowRepresentation = "flow-from", this.rotationType = "arithmetic", this.style = "single-arrow", this.symbolTileSize = 50, this.type = "vector-field";
  }
  readInputUnit(e2, M2) {
    return z.has(e2) ? s5.fromJSON(e2) : null;
  }
  readOutputUnit(e2, M2) {
    return z.has(e2) ? s5.fromJSON(e2) : null;
  }
  get styleRenderer() {
    const e2 = this.style, M2 = this.attributeField, i7 = this._createStyleRenderer(e2);
    return i7.field = M2, i7;
  }
  get sizeVariables() {
    const e2 = [];
    if (this.visualVariables) for (const M2 of this.visualVariables) "size" === M2.type && e2.push(M2);
    if (0 === e2.length) {
      const M2 = new b2({ field: "Magnitude", minSize: 0.2 * this.symbolTileSize, maxSize: 0.8 * this.symbolTileSize });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e2.push(M2);
    }
    return e2;
  }
  get rotationVariables() {
    const e2 = [];
    if (this.visualVariables) for (const M2 of this.visualVariables) "rotation" === M2.type && e2.push(M2);
    if (0 === e2.length) {
      const M2 = new a4({ field: "Direction", rotationType: this.rotationType });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e2.push(M2);
    }
    return e2;
  }
  clone() {
    return new S3({ attributeField: this.attributeField, flowRepresentation: this.flowRepresentation, rotationType: this.rotationType, symbolTileSize: this.symbolTileSize, style: this.style, visualVariables: a(this.visualVariables), inputUnit: this.inputUnit, outputUnit: this.outputUnit });
  }
  async getGraphicsFromPixelData(e2, M2 = false, t3 = []) {
    var _a;
    const a13 = new Array(), I2 = a8(this.inputUnit, this.outputUnit), r5 = ((_a = this.rotationVariables[0]) == null ? void 0 : _a.rotationType) || this.rotationType, g5 = M2 ? f2(e2.pixelBlock, "vector-uv", r5, I2) : p4(e2.pixelBlock, "vector-magdir", I2);
    if (null == g5) return a13;
    const o5 = e2.extent, A3 = null != g5.mask && g5.mask.length > 0;
    let l6 = 0;
    const w5 = (o5.xmax - o5.xmin) / g5.width, y8 = (o5.ymax - o5.ymin) / g5.height;
    for (let n9 = 0; n9 < g5.height; n9++) for (let e3 = 0; e3 < g5.width; e3++, l6++) {
      let M3 = new j({ x: o5.xmin + e3 * w5 + w5 / 2, y: o5.ymax - n9 * y8 - y8 / 2, spatialReference: o5.spatialReference });
      M3 = (await R(M3))[0];
      const I3 = t3.some((e4) => e4.intersects(M3));
      if ((!A3 || g5.mask[l6]) && !I3) {
        const e4 = { Magnitude: g5.pixels[0][l6], Direction: g5.pixels[1][l6] }, t4 = new b({ geometry: new j({ x: M3.x, y: M3.y, spatialReference: o5.spatialReference }), attributes: e4 });
        t4.symbol = this._getVisualVariablesAppliedSymbol(t4), a13.push(t4);
      }
    }
    return a13;
  }
  getSymbol(e2, M2) {
  }
  async getSymbolAsync(e2, M2) {
  }
  getSymbols() {
    return [];
  }
  getClassBreakInfos() {
    var _a;
    return (_a = this.styleRenderer) == null ? void 0 : _a.classBreakInfos;
  }
  getDefaultSymbol() {
    var _a;
    return (_a = this.styleRenderer) == null ? void 0 : _a.defaultSymbol;
  }
  _getDefaultSymbol(e2) {
    return new y2({ path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z", outline: new d({ width: 0 }), size: 20, color: e2 || new h([0, 92, 230]) });
  }
  _getVisualVariablesAppliedSymbol(e2) {
    var _a, _b;
    if (!e2) return;
    const M2 = (_b = (_a = this.styleRenderer) == null ? void 0 : _a.getSymbol(e2)) == null ? void 0 : _b.clone(), i7 = this.sizeVariables, t3 = this.rotationVariables;
    if (i7 && i7.length && this.sizeVariables.forEach((i8) => D(M2, T([i8], e2))), t3 && t3.length) {
      const i8 = "flow-to" === this.flowRepresentation === ("ocean-current-kn" === this.style || "ocean-current-m" === this.style) ? 0 : 180;
      e2.attributes.Direction = e2.attributes.Direction + i8, this.rotationVariables.forEach((i9) => J(M2, h2(i9, e2), i9.axis));
    }
    return M2;
  }
  _createStyleRenderer(e2) {
    let M2 = { defaultSymbol: this._getDefaultSymbol(), classBreakInfos: [] };
    switch (e2) {
      case "single-arrow":
        M2 = this._createSingleArrowRenderer();
        break;
      case "beaufort-kn":
        M2 = this._createBeaufortKnotsRenderer();
        break;
      case "beaufort-m":
        M2 = this._createBeaufortMeterRenderer();
        break;
      case "beaufort-ft":
        M2 = this._createBeaufortFeetRenderer();
        break;
      case "beaufort-mi":
        M2 = this._createBeaufortMilesRenderer();
        break;
      case "beaufort-km":
        M2 = this._createBeaufortKilometersRenderer();
        break;
      case "ocean-current-m":
        M2 = this._createCurrentMeterRenderer();
        break;
      case "ocean-current-kn":
        M2 = this._createCurrentKnotsRenderer();
        break;
      case "simple-scalar":
        M2 = this._createSimpleScalarRenderer();
        break;
      case "wind-barb":
        M2 = this._createWindBarbsRenderer();
        break;
      case "classified-arrow":
        M2 = this._createClassifiedArrowRenderer();
    }
    return new w2(M2);
  }
  _createSingleArrowRenderer() {
    return { defaultSymbol: this._getDefaultSymbol() };
  }
  _createBeaufortKnotsRenderer() {
    const e2 = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], i7 = [[40, 146, 199], [89, 162, 186], [129, 179, 171], [160, 194, 155], [191, 212, 138], [218, 230, 119], [250, 250, 100], [252, 213, 83], [252, 179, 102], [250, 141, 52], [247, 110, 42], [240, 71, 29]];
    return { defaultSymbol: this._getDefaultSymbol(new h([214, 47, 39])), classBreakInfos: this._getClassBreaks(e2, i7) };
  }
  _createBeaufortMeterRenderer() {
    const e2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7], i7 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]];
    return { defaultSymbol: this._getDefaultSymbol(new h([214, 47, 39])), classBreakInfos: this._getClassBreaks(e2, i7) };
  }
  _createBeaufortFeetRenderer() {
    const e2 = this._getDefaultSymbol(new h([214, 47, 39]));
    let i7 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t3 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a13 = 3.28084;
    i7 = i7.map((e3) => e3 * a13);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i7, t3) };
  }
  _createBeaufortMilesRenderer() {
    const e2 = this._getDefaultSymbol(new h([214, 47, 39]));
    let i7 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t3 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a13 = 2.23694;
    i7 = i7.map((e3) => e3 * a13);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i7, t3) };
  }
  _createBeaufortKilometersRenderer() {
    const e2 = this._getDefaultSymbol(new h([214, 47, 39]));
    let i7 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t3 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a13 = 3.6;
    i7 = i7.map((e3) => e3 * a13);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i7, t3) };
  }
  _createCurrentMeterRenderer() {
    const e2 = [0, 0.5, 1, 1.5, 2], i7 = [[78, 26, 153], [179, 27, 26], [202, 128, 26], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new h([177, 177, 177])), classBreakInfos: this._getClassBreaks(e2, i7) };
  }
  _createCurrentKnotsRenderer() {
    const e2 = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], i7 = [[0, 0, 0], [0, 37, 100], [78, 26, 153], [151, 0, 100], [179, 27, 26], [177, 78, 26], [202, 128, 26], [177, 179, 52], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new h([177, 177, 177])), classBreakInfos: this._getClassBreaks(e2, i7) };
  }
  _createClassifiedArrowRenderer() {
    var _a;
    const e2 = this._getDefaultSymbol(new h([56, 168, 0]));
    let i7 = [0, 1e-6, 3.5, 7, 10.5, 14];
    if ((_a = this.sizeVariables) == null ? void 0 : _a.length) {
      const e3 = this.sizeVariables[0].minDataValue, M2 = this.sizeVariables[0].maxDataValue;
      if (e3 && M2) {
        const t4 = (M2 - e3) / 5;
        i7 = Array.from(Array(6).keys()).map((M3) => e3 + t4 * M3);
      }
    }
    const t3 = [[56, 168, 0], [139, 309, 0], [255, 255, 0], [255, 128, 0], [255, 0, 0]];
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(i7, t3) };
  }
  _createSimpleScalarRenderer() {
    return { defaultSymbol: n3.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=", height: 20, width: 20, type: "esriPMS", angle: 0 }) };
  }
  _createWindBarbsRenderer() {
    const e2 = Array.from(Array(31).keys()).map((e3) => 5 * e3), M2 = [{ range: "0-5", path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "5-10", path: "M25 0 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "10-15", path: "M25 0 L25 40 L10 45 L25 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "15-20", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "20-25", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "25-30", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "30-35", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "35-40", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "40-45", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "45-50", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "50-55", path: "M25 0 L25 40 L10 40 L25 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "55-60", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "60-65", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "65-70", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "70-75", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "75-80", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "80-85", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "85-90", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "90-95", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "95-100", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "100-105", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "105-110", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "110-115", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "115-120", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "120-125", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "125-130", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "130-135", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "135-140", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "140-145", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "145-150", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }], i7 = n3.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC", height: 20, width: 20, type: "esriPMS", angle: 0 }), t3 = e2.map((t4, a13) => {
      let I2;
      if (a13 !== e2.length - 1) if (0 === a13) I2 = { minValue: t4, maxValue: e2[a13 + 1], symbol: i7 };
      else {
        const i8 = n3.fromJSON({ type: "esriPMS", imageData: M2[a13].imageData, contentType: "image/svg+xml", height: 32, width: 32, angle: 0 });
        I2 = { minValue: t4, maxValue: e2[a13 + 1], symbol: i8 };
      }
      return new a5(I2);
    });
    return { defaultSymbol: i7, classBreakInfos: t3 };
  }
  _getClassBreaks(e2, i7) {
    return i7.map((i8, t3) => new a5({ minValue: e2[t3], maxValue: e2[t3 + 1], symbol: this._getDefaultSymbol(new h(i8)) }));
  }
};
r([m({ type: ["Magnitude"], json: { write: true } })], b3.prototype, "attributeField", void 0), r([m({ type: Z.apiValues, json: { type: Z.jsonValues, read: { reader: Z.read }, write: { writer: Z.write } } })], b3.prototype, "flowRepresentation", void 0), r([m({ type: ["geographic", "arithmetic"], json: { write: true } })], b3.prototype, "rotationType", void 0), r([m({ type: u5.apiValues, json: { type: u5.jsonValues, read: { reader: u5.read }, write: { writer: u5.write } } })], b3.prototype, "style", void 0), r([m({ json: { write: true } })], b3.prototype, "symbolTileSize", void 0), r([m({ type: s5.apiValues, json: { type: s5.jsonValues, write: { writer: s5.write } } })], b3.prototype, "inputUnit", void 0), r([o2("inputUnit")], b3.prototype, "readInputUnit", null), r([m({ type: s5.apiValues, json: { type: s5.jsonValues, read: { reader: s5.read }, write: { writer: s5.write } } })], b3.prototype, "outputUnit", void 0), r([o2("outputUnit")], b3.prototype, "readOutputUnit", null), r([r3({ vectorField: "vector-field" })], b3.prototype, "type", void 0), r([m({ type: w2 })], b3.prototype, "styleRenderer", null), r([m({ type: b2 })], b3.prototype, "sizeVariables", null), r([m({ type: a4 })], b3.prototype, "rotationVariables", null), b3 = S3 = r([a2("esri.renderers.VectorFieldRenderer")], b3);
var h6 = b3;

// node_modules/@arcgis/core/renderers/support/rasterRendererHelper.js
var I = 0.25;
var S4 = a3.fromJSON({ type: "multipart", colorRamps: [{ fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] });
var k = a3.fromJSON(a6[0]);
var F2 = /* @__PURE__ */ new Set(["scientific", "standard-time", "vector-uv", "vector-magdir", "vector-u", "vector-v", "vector-magnitude", "vector-direction"]);
function L(e2) {
  var _a;
  return (_a = e2.presetRenderers) == null ? void 0 : _a.find(({ method: t3, value: n9 }) => "raster-function-template" === t3 ? n9 === e2.rasterFunctionName : "variable" === t3 && n9 === e2.variableName);
}
function q(e2, t3) {
  const { attributeTable: n9, colormap: a13 } = e2;
  if (o4(e2)) {
    const t4 = Z2(e2);
    if (null != t4) return t4;
  }
  if (t3 == null ? void 0 : t3.rasterFunctionColorRamp) {
    const n10 = N2(e2, t3);
    return n10.colorRamp = t3.rasterFunctionColorRamp, n10;
  }
  if (null != a13) {
    const t4 = H(e2);
    if (null != t4) return t4;
  }
  if (null != n9) {
    const t4 = J2(e2);
    if (null != t4) return t4;
  }
  return N2(e2, t3);
}
function B2(e2, t3 = false) {
  const n9 = ["raster-stretch"];
  return u2(e2, t3) && n9.push("raster-colormap"), t(e2) && n9.push("unique-value"), r4(e2, t3) && n9.push("class-breaks"), e(e2) && n9.push("raster-shaded-relief"), o4(e2) && n9.push("vector-field"), i2(e2) && n9.push("flow"), n9;
}
function E(e2) {
  return "Function" === e2.datasetFormat && "Colormap" === e2.rasterFunction.functionName ? e2.rasterFunction.colorRamp : void 0;
}
function z2(e2, t3, n9) {
  const a13 = ["nearest", "bilinear", "cubic", "majority"], r5 = n9 == null ? void 0 : n9.toLowerCase().replace("bicubic", "cubic"), l6 = a13.find((e3) => e3 === r5);
  if ("Map" === t3) return l6 ?? "bilinear";
  if ("standard-time" === e2.dataType) return l6 ?? "nearest";
  return "thematic" === e2.dataType || e2.attributeTable || e2.colormap ? "nearest" === l6 || "majority" === l6 ? l6 : "nearest" : l6 ?? "bilinear";
}
function N2(e2, t3) {
  var _a;
  e2 = W(e2, t3 == null ? void 0 : t3.variableName);
  const { bandCount: n9 } = e2;
  let { bandIds: a13, stretchType: r5 } = t3 || {};
  (a13 == null ? void 0 : a13.some((e3) => e3 >= n9)) && (a13 = null);
  let l6 = e2.statistics, s6 = e2.histograms;
  n9 > 1 ? (a13 = (a13 == null ? void 0 : a13.length) ? a13 : U(e2), l6 = null == l6 ? null : a13 == null ? void 0 : a13.map((e3) => l6[e3]), s6 = null == s6 ? null : a13 == null ? void 0 : a13.map((e3) => s6[e3])) : a13 = [0], null == r5 && (r5 = A2(e2)), (t3 == null ? void 0 : t3.includeStatisticsInStretch) && ("percent-clip" === r5 || "histogram-equalization" === r5) && ((_a = e2.statistics) == null ? void 0 : _a.length) && (r5 = "min-max");
  let o5 = false;
  switch (r5) {
    case "none":
      o5 = false;
      break;
    case "percent-clip":
      o5 = !(s6 == null ? void 0 : s6.length);
      break;
    default:
      o5 = !(l6 == null ? void 0 : l6.length);
  }
  const { dataType: u7 } = e2, m8 = 1 === (a13 == null ? void 0 : a13.length) && F2.has(u7) ? S4 : null, c9 = new g3({ stretchType: r5, dynamicRangeAdjustment: o5, colorRamp: m8, outputMin: 0, outputMax: 255, gamma: 1 === (a13 == null ? void 0 : a13.length) ? [1] : [1, 1, 1], useGamma: false });
  return "percent-clip" === r5 ? c9.maxPercent = c9.minPercent = I : "standard-deviation" === r5 && (c9.numberOfStandardDeviations = 2), o5 || null == e2.multidimensionalInfo && !(t3 == null ? void 0 : t3.includeStatisticsInStretch) || ("percent-clip" === r5 ? c9.histograms = s6 : "min-max" !== r5 && "standard-deviation" !== r5 || (c9.statistics = l6)), c9;
}
function W(e2, t3) {
  const { multidimensionalInfo: n9 } = e2;
  if (!t3 || !n9) return e2;
  const a13 = n9.variables.find((e3) => e3.name === t3);
  if (!a13) return e2;
  if (e2 = e2.clone(), a13) {
    const { statistics: t4, histograms: n10 } = a13;
    (t4 == null ? void 0 : t4.length) && (e2.statistics = t4.map((e3) => ({ min: e3.min, max: e3.max, avg: e3.avg, stddev: e3.stddev }))), (n10 == null ? void 0 : n10.length) && (e2.histograms = n10);
  }
  return e2;
}
function U(e2) {
  const t3 = e2.bandCount;
  if (1 === t3) return null;
  if (2 === t3) return [0];
  const { bandInfos: n9 } = e2;
  let a13;
  if (n9.length === t3) {
    const { red: e3, green: t4, blue: r5, nir: l6 } = O(n9);
    null != e3 && null != t4 && null != r5 ? a13 = [e3, t4, r5] : null != l6 && null != e3 && null != t4 && (a13 = [l6, e3, t4]);
  }
  return !a13 && t3 >= 3 && (a13 = [0, 1, 2]), a13;
}
function O(e2) {
  const t3 = {};
  for (let n9 = 0; n9 < e2.length; n9++) {
    const a13 = e2[n9], r5 = a13.name.toLowerCase();
    if ("red" === r5) t3.red = n9;
    else if ("green" === r5) t3.green = n9;
    else if ("blue" === r5) t3.blue = n9;
    else if ("nearinfrared" === r5 || "nearinfrared_1" === r5 || "nir" === r5) t3.nir = n9;
    else if (a13.maxWavelength && a13.minWavelength) {
      const e3 = a13.minWavelength, r6 = a13.maxWavelength;
      null == t3.blue && e3 >= 410 && e3 <= 480 && r6 >= 480 && r6 <= 540 ? t3.blue = n9 : null == t3.green && e3 >= 490 && e3 <= 560 && r6 >= 560 && r6 <= 610 ? t3.green = n9 : null == t3.red && e3 >= 595 && e3 <= 670 && r6 >= 660 && r6 <= 730 ? t3.red = n9 : null == t3.nir && e3 >= 700 && e3 <= 860 && r6 >= 800 && r6 <= 950 && (t3.nir = n9);
    }
  }
  return t3;
}
function A2(e2) {
  let t3 = "percent-clip";
  const { pixelType: n9, dataType: a13, histograms: r5, statistics: l6, multidimensionalInfo: s6 } = e2, i7 = F2.has(a13) || "generic" === a13 && null != s6;
  return "u8" !== n9 || "processed" !== a13 && null != r5 && null != l6 ? "u8" === n9 || "elevation" === a13 || i7 ? t3 = "min-max" : null != r5 ? t3 = "percent-clip" : null != l6 && (t3 = "min-max") : t3 = "none", t3;
}
function J2(t3, n9, a13, r5) {
  if (!t(t3, n9)) return null;
  const { attributeTable: l6, statistics: s6 } = t3, i7 = P(l6, n9), u7 = _(l6, "red"), c9 = _(l6, "green"), f5 = _(l6, "blue"), d7 = new j3(), b4 = [], g5 = /* @__PURE__ */ new Set(), v3 = !!(u7 && c9 && f5);
  if (null != l6) l6.features.forEach((t4) => {
    const n10 = t4.attributes[i7.name];
    if (!g5.has(t4.attributes[i7.name]) && null != n10) {
      g5.add(n10);
      const a14 = v3 && ("single" === u7.type || "double" === u7.type) && ("single" === c9.type || "double" === c9.type) && ("single" === f5.type || "double" === f5.type) && !l6.features.some((e2) => e2.attributes[u7.name] > 1 || e2.attributes[c9.name] > 1 || e2.attributes[f5.name] > 1), r6 = a14 ? 255 : 1;
      b4.push(new n4({ value: t4.attributes[i7.name], label: t4.attributes[i7.name] + "", symbol: new S2({ style: "solid", outline: null, color: new h(v3 ? [t4.attributes[u7.name] * r6, t4.attributes[c9.name] * r6, t4.attributes[f5.name] * r6, 1] : [0, 0, 0, 0]) }) }));
    }
  });
  else if (s6 == null ? void 0 : s6[0]) for (let o5 = s6[0].min; o5 <= s6[0].max; o5++) b4.push(new n4({ value: o5, label: o5.toString(), symbol: new S2({ style: "solid", outline: null, color: new h([0, 0, 0, 0]) }) }));
  if (b4.sort((e2, t4) => e2.value && "string" == typeof e2.value.valueOf() ? 0 : e2.value > t4.value ? 1 : -1), !v3) {
    const t4 = B(k, { numColors: b4.length });
    b4.forEach((n10, a14) => n10.symbol.color = new h(t4[a14].slice(1, 4))), d7.colorRamp = k;
  }
  if (a13 || r5) {
    const t4 = a13 || B(r5, { numColors: b4.length }).map((e2) => e2.slice(1));
    b4.forEach((n10, a14) => n10.symbol.color = new h(t4[a14])), d7.colorRamp = r5;
  }
  return new A({ field: i7.name, uniqueValueInfos: b4, authoringInfo: d7 });
}
function P(e2, t3, a13) {
  let r5;
  return null != e2 ? (r5 = t3 ? e2.fields.find((e3) => t3.toLowerCase() === e3.name.toLowerCase()) : G(e2.fields), r5 || (a13 || (r5 = e2.fields.find((e3) => "string" === e3.type)), r5 || (r5 = _(e2, "value")))) : r5 = new y({ name: "value" }), r5;
}
function G(e2) {
  let t3;
  for (let n9 = 0; n9 < e2.length; n9++) {
    const a13 = e2[n9].name.toLowerCase();
    if ("string" === e2[n9].type) {
      if (a13.startsWith("class")) {
        t3 = e2[n9];
        break;
      }
      null == t3 && (a13.endsWith("name") || a13.endsWith("type")) && (t3 = e2[n9]);
    }
  }
  return t3;
}
function _(e2, t3) {
  return null == e2 ? null : e2.fields.find((e3) => e3.name.toLowerCase() === t3);
}
function H(e2) {
  if (!u2(e2)) return null;
  let t3;
  const { attributeTable: n9, colormap: a13 } = e2;
  if (null != n9) {
    const e3 = _(n9, "value"), a14 = P(n9, null, true);
    "string" === a14.type && (t3 = {}, n9.features.forEach((n10) => {
      const r5 = n10.attributes;
      t3[r5[e3.name]] = a14 ? r5[a14.name] : r5[e3.name];
    }));
  }
  return l3.createFromColormap(a13, t3);
}
var Y = /* @__PURE__ */ new Map([["m/s", "meter-per-second"], ["km/h", "kilometer-per-hour"], ["knots", "knots"], ["ft/s", "feet-per-second"], ["mph", "mile-per-hour"]]);
function Z2(e2) {
  if (!o4(e2)) return null;
  let t3;
  if (null != e2.statistics && e2.statistics.length && ("vector-magdir" === e2.dataType || "vector-uv" === e2.dataType)) {
    const { minMagnitude: n10, maxMagnitude: a14 } = ne(e2.dataType, e2.statistics);
    t3 = [new b2({ field: "Magnitude", minSize: 10, maxSize: 40, minDataValue: n10, maxDataValue: a14 })];
  }
  const n9 = null != e2.multidimensionalInfo ? Y.get(e2.multidimensionalInfo.variables[0].unit) : void 0, a13 = new h6({ visualVariables: t3, inputUnit: n9, rotationType: "geographic" });
  return a13.visualVariables = [...a13.sizeVariables, ...a13.rotationVariables], a13;
}
function $(e2) {
  var _a;
  return { color: (_a = e2.symbolLayers[0].material) == null ? void 0 : _a.color, type: "esriSFS", style: "esriSFSSolid" };
}
function ee(e2) {
  var _a, _b;
  if ("uniqueValue" === e2.type) {
    const t3 = e2.uniqueValueInfos, n9 = t3 == null ? void 0 : t3[0].symbol;
    return ((_a = n9 == null ? void 0 : n9.symbolLayers) == null ? void 0 : _a.length) && (e2.uniqueValueInfos = t3 == null ? void 0 : t3.map((e3) => ({ value: e3.value, label: e3.label, symbol: e3.symbol ? $(e3.symbol) : null }))), e2;
  }
  if ("classBreaks" === e2.type) {
    const t3 = e2.classBreakInfos, n9 = t3[0].symbol;
    return ((_b = n9 == null ? void 0 : n9.symbolLayers) == null ? void 0 : _b.length) && (e2.classBreakInfos = t3.map((e3) => ({ classMinValue: e3.classMinValue, classMaxValue: e3.classMaxValue, label: e3.label, symbol: e3.symbol ? $(e3.symbol) : null }))), e2;
  }
  return e2;
}
function ne(e2, t3) {
  let n9, a13;
  if ("vector-magdir" === e2) n9 = t3[0].min, a13 = t3[0].max;
  else {
    const e3 = t3[0].min, r5 = t3[0].max, l6 = t3[1].min, s6 = t3[1].max;
    n9 = 0, a13 = Math.max(Math.abs(e3), Math.abs(l6), Math.abs(r5), Math.abs(s6));
  }
  return { minMagnitude: n9, maxMagnitude: a13 };
}

// node_modules/@arcgis/core/renderers/support/rasterTypeUtils.js
var l5 = { key: "type", base: null, typeMap: { "unique-value": A, "class-breaks": w2, "raster-colormap": l3, "raster-stretch": g3, "vector-field": h6, "raster-shaded-relief": m7, flow: u4 } };
var p10 = { ...l5, typeMap: { ...l5.typeMap } };
delete p10.typeMap["vector-field"], delete p10.typeMap.flow;
var d6 = { uniqueValue: A, classBreaks: w2, rasterStretch: g3, rasterColormap: l3, vectorField: h6, rasterShadedRelief: m7, flowRenderer: u4 };
function u6(e2) {
  return e2 && d6[e2.type] || null;
}
function c8(r5, t3) {
  if (!r5) return null;
  if ("classBreaks" === r5.type && r5.classificationMethod) {
    const e2 = r5.authoringInfo || { classificationMethod: "" };
    e2.classificationMethod = r5.classificationMethod, r5.authoringInfo = e2;
  }
  "vectorField" === r5.type && r5.visualVariables && !Array.isArray(r5.visualVariables) && (r5.visualVariables = [r5.visualVariables]);
  const s6 = u6(r5);
  if (s6) {
    const e2 = new s6();
    return e2.read(r5, t3), e2;
  }
  return (t3 == null ? void 0 : t3.messages) && r5 && t3.messages.push(new s("renderer:unsupported", "Renderers of type '" + (r5.type || "unknown") + "' are not supported", { definition: r5, context: t3 })), null;
}

// node_modules/@arcgis/core/rest/support/ImageHistogramParameters.js
var y7;
var j4 = y7 = class extends S {
  constructor() {
    super(...arguments), this.geometry = null, this.mosaicRule = null, this.rasterFunction = null, this.pixelSize = null, this.raster = void 0, this.timeExtent = null;
  }
  writeGeometry(t3, e2, r5) {
    null != t3 && (e2.geometryType = v(t3), e2[r5] = t3.toJSON());
  }
  clone() {
    return new y7(a({ geometry: this.geometry, mosaicRule: this.mosaicRule, rasterFunction: this.rasterFunction, pixelSize: this.pixelSize, raster: this.raster, timeExtent: this.timeExtent }));
  }
};
r([m({ types: l, json: { read: f } })], j4.prototype, "geometry", void 0), r([r2("geometry")], j4.prototype, "writeGeometry", null), r([m({ type: f4, json: { write: true } })], j4.prototype, "mosaicRule", void 0), r([m({ type: w3, json: { write: true, name: "renderingRule" } })], j4.prototype, "rasterFunction", void 0), r([m({ type: j, json: { write: true } })], j4.prototype, "pixelSize", void 0), r([m({ json: { write: true } })], j4.prototype, "raster", void 0), r([m({ type: p, json: { read: { source: "time" }, write: { target: "time" } } })], j4.prototype, "timeExtent", void 0), j4 = y7 = r([a2("esri.rest.support.ImageHistogramParameters")], j4);
var g4 = j4;

export {
  w3 as w,
  f4 as f,
  c3 as c,
  t2 as t,
  L,
  q,
  B2 as B,
  E,
  z2 as z,
  W,
  U,
  ee,
  l5 as l,
  p10 as p,
  c8 as c2,
  g4 as g
};
//# sourceMappingURL=chunk-7WEKAJI2.js.map
