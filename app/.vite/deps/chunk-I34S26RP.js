import {
  V,
  Z
} from "./chunk-LHHFTRIL.js";
import {
  B,
  C,
  D,
  M,
  a4,
  a5,
  a6,
  c2,
  d,
  d2,
  d3,
  f as f3,
  g as g3,
  h2 as h,
  l as l5,
  m as m3,
  n5 as n2,
  r4 as r5,
  u2,
  w as w2,
  x
} from "./chunk-GLICEWE6.js";
import {
  a2 as a3,
  c,
  f as f2,
  g,
  g2,
  i,
  i2,
  l as l2,
  l2 as l3,
  l3 as l4,
  n,
  o as o3,
  o2 as o4,
  p as p2,
  r as r4,
  s as s3,
  u,
  w as w3,
  y as y2
} from "./chunk-T4YD2MX2.js";
import {
  U
} from "./chunk-ZD4JXG4O.js";
import {
  m as m2,
  p
} from "./chunk-5LA23O74.js";
import {
  y
} from "./chunk-FF44HCOD.js";
import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  q
} from "./chunk-6P7HXSJ6.js";
import {
  Q
} from "./chunk-LTDNORB5.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/rasterFunctions/BaseFunctionArguments.js
var e = class extends S {
  constructor() {
    super(...arguments), this.raster = void 0;
  }
};
r([m({ json: { write: true } })], e.prototype, "raster", void 0), e = r([a2("esri.layers.support.rasterFunctions.BaseFunctionArguments")], e);
var p3 = e;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ArithmeticFunctionArguments.js
var e2;
var a7 = e2 = class extends p3 {
  constructor() {
    super(...arguments), this.raster2 = void 0;
  }
  get rasters() {
    return [this.raster, this.raster2];
  }
  clone() {
    return new e2({ raster: this.raster, raster2: this.raster2, operation: this.operation });
  }
};
r([m({ json: { write: true } })], a7.prototype, "operation", void 0), r([m({ json: { write: true } })], a7.prototype, "raster2", void 0), r([m({ readOnly: true })], a7.prototype, "rasters", null), a7 = e2 = r([a2("esri.layers.support.rasterFunctions.ArithmeticFunctionArguments")], a7);
var i3 = a7;

// node_modules/@arcgis/core/layers/support/rasterFunctions/BaseRasterFunction.js
var a8 = /* @__PURE__ */ new Set(["slope", "aspect", "curvature", "hillshade", "shadedrelief", "statistics"]);
var u3 = class extends S {
  constructor() {
    super(...arguments), this.functionArguments = null, this.readingBufferSize = 0, this.id = -1, this.isNoopProcess = false, this.rawInputBandIds = [], this.rawSourceRasterInfos = null, this.isInputBandIdsSwizzled = false, this.swizzledBandSelection = [], this.isBranch = false, this._bindingResult = null;
  }
  get supportsGPU() {
    return this._bindingResult.supportsGPU;
  }
  get flatWebGLFunctionChain() {
    var _a;
    const t6 = this.getWebGLProcessorDefinition();
    if (!t6) return null;
    const s12 = [t6], { parameters: e9 } = t6;
    let r12 = e9.rasters || e9.raster && [e9.raster];
    for (; r12 == null ? void 0 : r12.length; ) {
      s12.unshift(...r12);
      const t7 = [];
      for (let s13 = 0; s13 < r12.length; s13++) {
        const { parameters: e10 } = r12[s13], i29 = e10.rasters || e10.raster && [e10.raster];
        (i29 == null ? void 0 : i29.length) && t7.push(...i29);
      }
      r12 = t7;
    }
    for (let a30 = s12.length - 1; a30 >= 0; a30--) s12[a30].isNoopProcess && s12.splice(a30, 1);
    let i28 = false;
    for (let a30 = 0; a30 < s12.length; a30++) {
      const t7 = s12[a30];
      t7.id = s12.length - a30 - 1;
      const { rasters: e10 } = t7.parameters;
      i28 = i28 || null != e10 && e10.length > 1;
    }
    const n18 = s12.some(({ name: t7 }) => a8.has(t7.toLowerCase())), { rawSourceRasterInfos: o11 } = this;
    return { functions: s12, hasBranches: i28, hasFocalFunction: n18, isSourceSingleBand: 1 === ((_a = o11 == null ? void 0 : o11[0]) == null ? void 0 : _a.bandCount) };
  }
  bind(t6, s12 = false, e9 = -1) {
    this.id = e9 + 1;
    const r12 = this._getRasterValues();
    let i28 = true;
    for (let n18 = 0; n18 < r12.length; n18++) {
      const e10 = r12[n18];
      if (null != e10 && this._isRasterFunctionValue(e10)) {
        const r13 = e10.bind(t6, s12, this.id + n18);
        if (!r13.success) return this._bindingResult = r13, r13;
        i28 = i28 && r13.supportsGPU;
      }
    }
    return !this.rasterInfo || s12 ? (this.sourceRasterInfos = this._getSourceRasterInfos(t6), this._bindingResult = this._bindSourceRasters(), this._bindingResult.success && this._patchRasterInfo(), this._bindingResult.supportsGPU = i28 && this._bindingResult.supportsGPU, this.processInputBandIds(), this._bindingResult) : (this._bindingResult = { success: true, supportsGPU: true }, this.processInputBandIds(), this._bindingResult);
  }
  process(t6) {
    const s12 = this._getRasterValues(), e9 = 0 === s12.length ? t6.pixelBlocks ?? t6.primaryPixelBlocks : s12.map((s13) => this._readRasterValue(s13, t6));
    return this._processPixels({ ...t6, pixelBlocks: e9 });
  }
  processInputBandIds() {
    const t6 = this._getRasterValues().filter(this._isRasterFunctionValue);
    let s12;
    if (t6.length > 1) {
      const s13 = t6.map((t7) => t7.processInputBandIds()[0]);
      this.rawInputBandIds = s13, this.isInputBandIdsSwizzled = this.rawInputBandIds.some((t7, s14) => t7 !== s14);
      const e10 = t6.filter((t7) => "ExtractBand" === t7.functionName);
      return e10.length && e10.forEach((t7, s14) => {
        t7.isInputBandIdsSwizzled = true, t7.swizzledBandSelection = [s14, s14, s14];
      }), this.rawInputBandIds;
    }
    const e9 = t6[0];
    if (e9) {
      if (s12 = e9.processInputBandIds(), e9.isInputBandIdsSwizzled) return this.rawInputBandIds = s12, s12;
    } else {
      s12 = [];
      const { bandCount: t7 } = this.sourceRasterInfos[0];
      for (let e10 = 0; e10 < t7; e10++) s12.push(e10);
    }
    const r12 = this._getInputBandIds(s12);
    return this.isInputBandIdsSwizzled = r12.some((t7, s13) => t7 !== s13), this.rawInputBandIds = r12, this.rawInputBandIds;
  }
  getPrimaryRasters() {
    const t6 = [], s12 = [];
    return this._getPrimaryRasters(this, t6, s12), { rasters: t6, rasterIds: s12 };
  }
  getWebGLProcessorDefinition() {
    const t6 = this._getWebGLParameters(), { raster: s12, rasters: e9 } = this.functionArguments;
    return e9 && Array.isArray(e9) && e9.length ? (t6.rasters = e9.map((t7) => this._isRasterFunctionValue(t7) ? t7.getWebGLProcessorDefinition() : "number" == typeof t7 ? { name: "Constant", parameters: { value: t7 }, pixelType: "f32", id: -1, isNoopProcess: false } : { name: "Identity", parameters: { value: t7 }, pixelType: "f32", id: -1, isNoopProcess: false }), t6.rasters.some((t7) => null != t7) || (t6.rasters = null)) : this._isRasterFunctionValue(s12) && (t6.raster = s12.getWebGLProcessorDefinition()), { name: this.functionName, parameters: t6, pixelType: this.outputPixelType, id: this.id, isNoopProcess: this.isNoopProcess };
  }
  getClippingGeometries() {
    const t6 = [];
    "Clip" === this.functionName && t6.push(this.functionArguments);
    const { raster: s12, rasters: e9 } = this.functionArguments;
    if (e9 && Array.isArray(e9) && e9.length) e9.forEach((s13) => {
      if (this._isRasterFunctionValue(s13)) {
        const e10 = s13.getClippingGeometries();
        t6.push(...e10);
      }
    });
    else if (this._isRasterFunctionValue(s12)) {
      const e10 = s12.getClippingGeometries();
      t6.push(...e10);
    }
    return t6;
  }
  _getOutputPixelType(t6) {
    return "unknown" === this.outputPixelType ? t6 : this.outputPixelType ?? t6;
  }
  _getWebGLParameters() {
    return {};
  }
  _getInputBandIds(t6) {
    return t6;
  }
  _removeStatsHistColormapVAT(t6) {
    var _a;
    t6.statistics = null, t6.histograms = null, t6.colormap = null, t6.attributeTable = null, (_a = t6.multidimensionalInfo) == null ? void 0 : _a.variables.forEach((t7) => {
      t7.statistics = void 0, t7.histograms = void 0;
    });
  }
  _getRasterValues() {
    const { rasterArgumentNames: t6 } = this;
    return "rasters" === t6[0] ? this.functionArguments.rasters ?? [] : t6.flatMap((t7) => this.functionArguments[t7]);
  }
  _getSourceRasterInfos(t6) {
    const s12 = this._getRasterValues(), { rasterInfos: e9, rasterIds: r12 } = t6;
    if (0 === s12.length) return e9;
    const i28 = s12.map((t7) => t7 && "object" == typeof t7 && "bind" in t7 && t7.rasterInfo ? t7.rasterInfo : "string" == typeof t7 && r12.includes(t7) ? e9[r12.indexOf(t7)] : "number" != typeof t7 ? e9[0] : void 0), n18 = i28.find((t7) => t7) ?? e9[0];
    return i28.forEach((t7, s13) => {
      void 0 === t7 && (i28[s13] = n18);
    }), i28;
  }
  _getPrimaryRasterId(t6) {
    return t6 == null ? void 0 : t6.rasterId;
  }
  _getPrimaryRasters(t6, s12 = [], e9 = []) {
    for (let r12 = 0; r12 < t6.sourceRasters.length; r12++) {
      const i28 = t6.sourceRasters[r12];
      if ("number" != typeof i28) if ("bind" in i28) this._getPrimaryRasters(i28, s12, e9);
      else {
        const t7 = i28, r13 = this._getPrimaryRasterId(t7);
        if (null == r13) continue;
        e9.includes(r13) || (this.mainPrimaryRasterId === r13 ? (s12.unshift(t7), e9.unshift(r13)) : (s12.push(t7), e9.push(r13)));
      }
    }
  }
  _isRasterFunctionValue(t6) {
    return null != t6 && "object" == typeof t6 && "getWebGLProcessorDefinition" in t6;
  }
  _readRasterValue(t6, s12) {
    const { primaryPixelBlocks: e9 } = s12;
    if (null == t6 || "$$" === t6) {
      const t7 = e9[0];
      return null == t7 ? null : t7.clone();
    }
    if ("string" == typeof t6) {
      const r12 = s12.primaryRasterIds.indexOf(t6);
      return -1 === r12 ? null : e9[r12];
    }
    if ("number" == typeof t6) {
      const s13 = e9[0];
      if (null == s13) return null;
      const { width: r12, height: i28, pixelType: o11 } = s13, a30 = new Float32Array(r12 * i28);
      a30.fill(t6);
      const u20 = this.sourceRasterInfos[0].bandCount, p20 = new Array(u20).fill(a30);
      return new g({ width: r12, height: i28, pixelType: o11, pixels: p20 });
    }
    return t6.process(s12);
  }
  _patchRasterInfo() {
    const { rasterInfo: t6 } = this;
    if (!(t6 == null ? void 0 : t6.keyProperties)) return;
    const { bandCount: s12, keyProperties: e9, statistics: r12, histograms: i28 } = t6, n18 = e9.BandProperties;
    n18 && n18.length !== s12 && (t6.keyProperties = { ...e9, BandProperties: void 0 }), r12 && r12.length !== s12 && (t6.statistics = r12.length > s12 ? r12.slice(0, s12) : null), i28 && i28.length !== s12 && (t6.histograms = i28.length > s12 ? i28.slice(0, s12) : null), e9.BAND_COUNT && Number(e9.BAND_COUNT) !== s12 && (t6.keyProperties = { ...e9, BAND_COUNT: "string" == typeof e9.BAND_COUNT ? String(s12) : s12 });
  }
};
r([m({ json: { write: true } })], u3.prototype, "functionName", void 0), r([m({ json: { write: true } })], u3.prototype, "functionArguments", void 0), r([m()], u3.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } }), s2((t6) => t6 == null ? void 0 : t6.toLowerCase())], u3.prototype, "outputPixelType", void 0), r([m({ json: { write: true } })], u3.prototype, "mainPrimaryRasterId", void 0), r([m()], u3.prototype, "sourceRasters", void 0), r([m({ type: [d2], json: { write: true } })], u3.prototype, "sourceRasterInfos", void 0), r([m({ json: { write: true } })], u3.prototype, "rasterInfo", void 0), r([m({ json: { write: true } })], u3.prototype, "readingBufferSize", void 0), r([m({ json: { write: true } })], u3.prototype, "id", void 0), r([m()], u3.prototype, "isNoopProcess", void 0), r([m()], u3.prototype, "supportsGPU", null), r([m()], u3.prototype, "rawInputBandIds", void 0), r([m()], u3.prototype, "rawSourceRasterInfos", void 0), r([m()], u3.prototype, "isInputBandIdsSwizzled", void 0), r([m()], u3.prototype, "swizzledBandSelection", void 0), r([m()], u3.prototype, "isBranch", void 0), r([m({ readOnly: true })], u3.prototype, "flatWebGLFunctionChain", null), r([m()], u3.prototype, "_bindingResult", void 0), u3 = r([a2("esri.layers.support.rasterFunctions.BaseRasterFunction")], u3);
var p4 = u3;

// node_modules/@arcgis/core/layers/support/rasterFunctionConstants.js
var D2 = { userDefined: -1, lineDetectionHorizontal: 0, lineDetectionVertical: 1, lineDetectionLeftDiagonal: 2, lineDetectionRightDiagonal: 3, gradientNorth: 4, gradientWest: 5, gradientEast: 6, gradientSouth: 7, gradientNorthEast: 8, gradientNorthWest: 9, smoothArithmeticMean: 10, smoothing3x3: 11, smoothing5x5: 12, sharpening3x3: 13, sharpening5x5: 14, laplacian3x3: 15, laplacian5x5: 16, sobelHorizontal: 17, sobelVertical: 18, sharpen: 19, sharpen2: 20, pointSpread: 21, none: 255 };
var d4 = { plus: 1, minus: 2, times: 3, sqrt: 4, power: 5, abs: 10, divide: 23, exp: 25, exp10: 26, exp2: 27, int: 30, float: 32, ln: 35, log10: 36, log2: 37, mod: 44, negate: 45, roundDown: 48, roundUp: 49, square: 53, floatDivide: 64, floorDivide: 65 };
var s4 = { bitwiseAnd: 11, bitwiseLeftShift: 12, bitwiseNot: 13, bitwiseOr: 14, bitwiseRightShift: 15, bitwiseXOr: 16, booleanAnd: 17, booleanNot: 18, booleanOr: 19, booleanXOr: 20, equalTo: 24, greaterThan: 28, greaterThanEqual: 29, lessThan: 33, lessThanEqual: 34, isNull: 31, notEqual: 46 };
var p5 = { acos: 6, asin: 7, atan: 8, atanh: 9, cos: 21, cosh: 22, sin: 51, sinh: 52, tan: 56, tanh: 57, acosh: 59, asinh: 60, atan2: 61 };
var c3 = { majority: 38, max: 39, mean: 40, med: 41, min: 42, minority: 43, range: 47, stddev: 54, sum: 55, variety: 58, majorityIgnoreNoData: 66, maxIgnoreNoData: 67, meanIgnoreNoData: 68, medIgnoreNoData: 69, minIgnoreNoData: 70, minorityIgnoreNoData: 71, rangeIgnoreNoData: 72, stddevIgnoreNoData: 73, sumIgnoreNoData: 74, varietyIgnoreNoData: 75 };
var B2 = { setNull: 50, conditional: 78 };
var m4 = { ...d4, ...s4, ...p5, ...c3, ...B2 };

// node_modules/@arcgis/core/layers/support/rasterFunctions/localUtils.js
var a9 = /* @__PURE__ */ new Map([[p5.acos, { domain: [0, Math.PI], isInteger: false }], [p5.asin, { domain: [-Math.PI / 2, Math.PI / 2], isInteger: false }], [p5.atan, { domain: [-Math.PI / 2, Math.PI / 2], isInteger: false }], [p5.cos, { domain: [-1, 1], isInteger: false }], [p5.sin, { domain: [-1, 1], isInteger: false }], [s4.booleanAnd, { domain: [0, 1], isInteger: true }], [s4.booleanNot, { domain: [0, 1], isInteger: true }], [s4.booleanOr, { domain: [0, 1], isInteger: true }], [s4.booleanXOr, { domain: [0, 1], isInteger: true }], [s4.equalTo, { domain: [0, 1], isInteger: true }], [s4.notEqual, { domain: [0, 1], isInteger: true }], [s4.greaterThan, { domain: [0, 1], isInteger: true }], [s4.greaterThanEqual, { domain: [0, 1], isInteger: true }], [s4.lessThan, { domain: [0, 1], isInteger: true }], [s4.lessThanEqual, { domain: [0, 1], isInteger: true }], [s4.isNull, { domain: [0, 1], isInteger: true }]]);
function l6(t6) {
  return a9.get(t6);
}
var c4 = [0, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 999, 999, 999, 999, 999, 999, 2, 1, 2, 999, 1, 1, 2, 1, 1, 1, 999, 999, 1, 1, 999, 1, 1, 2, 999, 999, 2, 2, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 3, 999, 3];
function f4(t6, e9 = false) {
  const n18 = t6.map((t7) => t7.mask), r12 = n18.filter((t7) => null != t7), o11 = t6[0].pixels[0].length;
  if (0 === r12.length || e9 && r12.length !== n18.length) return new Uint8Array(o11).fill(255);
  const s12 = r12[0], a30 = new Uint8Array(s12);
  if (1 === r12.length) return a30;
  if (!e9) {
    for (let t7 = 1; t7 < r12.length; t7++) {
      const e10 = r12[t7];
      for (let t8 = 0; t8 < a30.length; t8++) a30[t8] && (a30[t8] = e10[t8] ? 255 : 0);
    }
    return a30;
  }
  for (let l22 = 1; l22 < r12.length; l22++) {
    const t7 = r12[l22];
    for (let e10 = 0; e10 < a30.length; e10++) 0 === a30[e10] && (a30[e10] = t7[e10] ? 255 : 0);
  }
  return a30;
}
function i4(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] + s12[t6]);
  return l22;
}
function u4(e9, n18, r12) {
  const [o11] = e9, s12 = o11.length, a30 = g.createEmptyBand("f32", s12);
  return a30.set(o11), a30;
}
function h2(e9, n18, r12) {
  const [o11] = e9, s12 = o11.length, a30 = g.createEmptyBand(r12, s12);
  for (let t6 = 0; t6 < s12; t6++) n18 && !n18[t6] || (a30[t6] = o11[t6] * o11[t6]);
  return a30;
}
function g4(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] - s12[t6]);
  return l22;
}
function p6(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] * s12[t6]);
  return l22;
}
function m5(e9, n18, r12) {
  const [o11] = e9, s12 = o11.length, a30 = g.createEmptyBand(r12, s12);
  for (let t6 = 0; t6 < s12; t6++) n18 && !n18[t6] || (a30[t6] = Math.sign(o11[t6]) * Math.floor(Math.abs(o11[t6])));
  return a30;
}
function d5(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] / s12[t6]);
  return l22;
}
function y3(t6, e9, n18) {
  return d5(t6, e9, "f32");
}
function E(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = Math.floor(o11[t6] / s12[t6]));
  return l22;
}
function M2(n18, r12, o11, s12) {
  const a30 = n18[0], l22 = a30.length, c34 = g.createEmptyBand(o11, l22);
  if (s12 === p5.atanh) {
    for (let t6 = 0; t6 < l22; t6++) if (r12[t6]) {
      const e9 = a30[t6];
      Math.abs(e9) >= 1 ? r12[t6] = 0 : c34[t6] = Math.atanh(e9);
    }
    return c34;
  }
  const f7 = s12 === p5.asin ? Math.asin : Math.acos;
  for (let t6 = 0; t6 < l22; t6++) if (r12[t6]) {
    const e9 = a30[t6];
    Math.abs(e9) > 1 ? r12[t6] = 0 : c34[t6] = f7(e9);
  }
  return c34;
}
function B3(e9, n18, r12, o11) {
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11(s12[t6]));
  return l22;
}
function I(e9, n18, r12, o11) {
  const [s12, a30] = e9, l22 = s12.length, c34 = g.createEmptyBand(r12, l22);
  for (let t6 = 0; t6 < l22; t6++) n18 && !n18[t6] || (c34[t6] = o11(s12[t6], a30[t6]));
  return c34;
}
function w4(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] & s12[t6]);
  return l22;
}
function x2(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] << s12[t6]);
  return l22;
}
function b(e9, n18, r12) {
  const [o11] = e9, s12 = o11.length, a30 = g.createEmptyBand(r12, s12);
  for (let t6 = 0; t6 < s12; t6++) n18 && !n18[t6] || (a30[t6] = ~o11[t6]);
  return a30;
}
function A(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] | s12[t6]);
  return l22;
}
function P(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] >> s12[t6]);
  return l22;
}
function T(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] ^ s12[t6]);
  return l22;
}
function k(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] && s12[t6] ? 1 : 0);
  return l22;
}
function q2(e9, n18, r12) {
  const [o11] = e9, s12 = o11.length, a30 = g.createEmptyBand(r12, s12);
  for (let t6 = 0; t6 < s12; t6++) n18 && !n18[t6] || (a30[t6] = o11[t6] ? 0 : 1);
  return a30;
}
function N(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] || s12[t6] ? 1 : 0);
  return l22;
}
function U2(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = (o11[t6] ? 1 : 0) ^ (s12[t6] ? 1 : 0));
  return l22;
}
function F(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] === s12[t6] ? 1 : 0);
  return l22;
}
function j2(e9, n18, r12, o11) {
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30), c34 = o11 === Math.E;
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = c34 ? Math.exp(s12[t6]) : o11 ** s12[t6]);
  return l22;
}
function z(t6, e9, n18) {
  return j2(t6, e9, n18, 10);
}
function O(t6, e9, n18) {
  return j2(t6, e9, n18, 2);
}
function C2(t6, e9, n18) {
  return j2(t6, e9, n18, Math.E);
}
function R(e9, n18, r12, o11) {
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (s12[t6] <= 0 ? n18[t6] = 0 : l22[t6] = o11(s12[t6]));
  return l22;
}
function S2(t6, e9, n18) {
  return R(t6, e9, n18, Math.log10);
}
function X(t6, e9, n18) {
  return R(t6, e9, n18, Math.log2);
}
function v(t6, e9, n18) {
  return R(t6, e9, n18, Math.log);
}
function D3(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] > s12[t6] ? 1 : 0);
  return l22;
}
function G(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] >= s12[t6] ? 1 : 0);
  return l22;
}
function H(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] < s12[t6] ? 1 : 0);
  return l22;
}
function J(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] <= s12[t6] ? 1 : 0);
  return l22;
}
function K(e9, n18, r12) {
  const [o11] = e9, s12 = o11.length, a30 = g.createEmptyBand(r12, s12);
  if (!n18) return a30;
  for (let t6 = 0; t6 < s12; t6++) a30[t6] = n18[t6] ? 0 : 1;
  return a30;
}
function L(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] % s12[t6]);
  return l22;
}
function Q2(e9, n18, r12) {
  const [o11] = e9, s12 = o11.length, a30 = g.createEmptyBand(r12, s12);
  for (let t6 = 0; t6 < s12; t6++) n18 && !n18[t6] || (a30[t6] = -o11[t6]);
  return a30;
}
function V2(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] === s12[t6] ? 0 : 1);
  return l22;
}
function W(e9, n18, r12) {
  const [o11, s12] = e9, a30 = o11.length, l22 = g.createEmptyBand(r12, a30), c34 = new Uint8Array(a30);
  for (let t6 = 0; t6 < a30; t6++) null != n18 && !n18[t6] || 0 !== o11[t6] || (l22[t6] = s12[t6], c34[t6] = 255);
  return { band: l22, mask: c34 };
}
function Y(e9, n18, r12) {
  const [o11, s12, a30] = e9, l22 = o11.length, c34 = g.createEmptyBand(r12, l22);
  for (let t6 = 0; t6 < l22; t6++) n18 && !n18[t6] || (c34[t6] = o11[t6] ? s12[t6] : a30[t6]);
  return c34;
}
function Z2(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) if (!n18 || n18[t6]) {
    let n19 = s12[t6];
    for (let r13 = 1; r13 < o11; r13++) {
      const o12 = e9[r13][t6];
      n19 < o12 && (n19 = o12);
    }
    l22[t6] = n19;
  }
  return l22;
}
function $(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) if (!n18 || n18[t6]) {
    let n19 = s12[t6];
    for (let r13 = 1; r13 < o11; r13++) {
      const o12 = e9[r13][t6];
      n19 > o12 && (n19 = o12);
    }
    l22[t6] = n19;
  }
  return l22;
}
function _(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) if (!n18 || n18[t6]) {
    let n19 = s12[t6], r13 = n19;
    for (let s13 = 1; s13 < o11; s13++) {
      const o12 = e9[s13][t6];
      r13 < o12 ? r13 = o12 : n19 > o12 && (n19 = o12);
    }
    l22[t6] = r13 - n19;
  }
  return l22;
}
function tt(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) if (!n18 || n18[t6]) {
    let n19 = 0;
    for (let r13 = 0; r13 < o11; r13++) n19 += e9[r13][t6];
    l22[t6] = n19 / o11;
  }
  return l22;
}
function et(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) if (!n18 || n18[t6]) for (let n19 = 0; n19 < o11; n19++) {
    const r13 = e9[n19];
    l22[t6] += r13[t6];
  }
  return l22;
}
function nt(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) if (!n18 || n18[t6]) {
    const n19 = new Float32Array(o11);
    let r13 = 0;
    for (let a31 = 0; a31 < o11; a31++) {
      const o12 = e9[a31];
      r13 += o12[t6], n19[a31] = o12[t6];
    }
    r13 /= o11;
    let s13 = 0;
    for (let t7 = 0; t7 < o11; t7++) s13 += (n19[t7] - r13) ** 2;
    l22[t6] = Math.sqrt(s13 / o11);
  }
  return l22;
}
function rt(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const s12 = Math.floor(o11 / 2), [a30] = e9, l22 = a30.length, c34 = g.createEmptyBand(r12, l22), f7 = new Float32Array(o11), i28 = o11 % 2 == 1;
  for (let t6 = 0; t6 < l22; t6++) if (!n18 || n18[t6]) {
    for (let n19 = 0; n19 < o11; n19++) f7[n19] = e9[n19][t6];
    f7.sort(), c34[t6] = i28 ? f7[s12] : (f7[s12] + f7[s12 - 1]) / 2;
  }
  return c34;
}
function ot(e9, n18, r12) {
  const [o11, s12] = e9;
  if (null == s12) return o11;
  const a30 = o11.length, l22 = g.createEmptyBand(r12, a30);
  for (let t6 = 0; t6 < a30; t6++) n18 && !n18[t6] || (l22[t6] = o11[t6] < s12[t6] ? o11[t6] : s12[t6]);
  return l22;
}
function st(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 <= 2) return ot(e9, n18, r12);
  const s12 = e9[0].length, a30 = g.createEmptyBand(r12, s12), l22 = /* @__PURE__ */ new Map();
  for (let t6 = 0; t6 < s12; t6++) if (!n18 || n18[t6]) {
    l22.clear();
    for (let a31 = 0; a31 < o11; a31++) {
      const n20 = e9[a31][t6];
      l22.set(n20, l22.has(n20) ? l22.get(n20) + 1 : 1);
    }
    let n19 = 0, r13 = 0;
    const s13 = [];
    for (const t7 of l22.keys()) n19 = l22.get(t7), n19 > r13 ? (r13 = n19, s13.length = 0, s13.push(t7)) : n19 === r13 && s13.push(t7);
    s13.length > 1 && s13.sort((t7, e10) => t7 - e10), a30[t6] = s13[0];
  }
  return a30;
}
function at(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 <= 2) return ot(e9, n18, r12);
  const s12 = e9[0].length, a30 = g.createEmptyBand(r12, s12), l22 = /* @__PURE__ */ new Map();
  for (let t6 = 0; t6 < s12; t6++) if (!n18 || n18[t6]) {
    l22.clear();
    for (let a31 = 0; a31 < o11; a31++) {
      const n20 = e9[a31][t6];
      l22.set(n20, l22.has(n20) ? l22.get(n20) + 1 : 1);
    }
    let n19 = 0, r13 = e9.length;
    const s13 = [];
    for (const t7 of l22.keys()) n19 = l22.get(t7), n19 < r13 ? (r13 = n19, s13.length = 0, s13.push(t7)) : n19 === r13 && s13.push(t7);
    s13.length > 1 && s13.sort((t7, e10) => t7 - e10), a30[t6] = s13[0];
  }
  return a30;
}
function lt(e9, n18, r12) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a30 = s12.length, l22 = g.createEmptyBand(r12, a30), c34 = /* @__PURE__ */ new Set();
  for (let t6 = 0; t6 < a30; t6++) if (!n18 || n18[t6]) {
    let n19;
    c34.clear();
    for (let r13 = 0; r13 < o11; r13++) n19 = e9[r13][t6], c34.add(n19);
    l22[t6] = c34.size;
  }
  return l22;
}
var ct = /* @__PURE__ */ new Map();
var ft = /* @__PURE__ */ new Map();
var it = /* @__PURE__ */ new Map();
var ut = /* @__PURE__ */ new Map();
function ht() {
  ct.size || (ct.set(4, Math.sqrt), ct.set(6, Math.acos), ct.set(7, Math.asin), ct.set(8, Math.atan), ct.set(9, Math.atanh), ct.set(10, Math.abs), ct.set(21, Math.cos), ct.set(22, Math.cosh), ct.set(48, Math.floor), ct.set(49, Math.ceil), ct.set(51, Math.sin), ct.set(52, Math.sinh), ct.set(56, Math.tan), ct.set(57, Math.tanh), ct.set(59, Math.acosh), ct.set(60, Math.asinh), ct.set(65, Math.floor), ft.set(5, Math.pow), ft.set(61, Math.atan2), it.set(1, i4), it.set(2, g4), it.set(3, p6), it.set(11, w4), it.set(12, x2), it.set(13, b), it.set(14, A), it.set(15, P), it.set(16, T), it.set(17, k), it.set(18, q2), it.set(19, N), it.set(20, U2), it.set(23, d5), it.set(24, F), it.set(25, C2), it.set(26, z), it.set(27, O), it.set(28, D3), it.set(29, G), it.set(30, m5), it.set(31, K), it.set(32, u4), it.set(33, H), it.set(34, J), it.set(35, v), it.set(36, S2), it.set(37, X), it.set(44, L), it.set(45, Q2), it.set(46, V2), it.set(53, h2), it.set(64, y3), it.set(65, E), it.set(76, Y), it.set(78, Y), ut.set(38, st), ut.set(39, Z2), ut.set(40, tt), ut.set(41, rt), ut.set(42, $), ut.set(43, at), ut.set(47, _), ut.set(54, nt), ut.set(55, et), ut.set(58, lt), ut.set(66, st), ut.set(67, Z2), ut.set(68, tt), ut.set(69, rt), ut.set(70, $), ut.set(71, at), ut.set(72, _), ut.set(73, nt), ut.set(74, et), ut.set(75, lt));
}
function gt(l22, c34, i28 = {}) {
  ht();
  let u20 = f4(l22, c34 >= 66 && c34 <= 75);
  const { outputPixelType: h7 = "f32" } = i28, g7 = !ut.has(c34) || i28.processAsMultiband, p20 = g7 ? l22[0].pixels.length : 1, m17 = [];
  for (let f7 = 0; f7 < p20; f7++) {
    const i29 = ut.has(c34) && !g7 ? l22.flatMap((t6) => t6.pixels) : l22.map((t6) => t6.pixels[f7]);
    let p21, d11 = true;
    if (c34 === B2.setNull) {
      const t6 = W(i29, u20, h7);
      p21 = t6.band, u20 = t6.mask, d11 = false;
    } else if (it.has(c34)) {
      p21 = it.get(c34)(i29, u20, "f64");
    } else if (ct.has(c34)) p21 = c34 === p5.asin || c34 === p5.acos || c34 === p5.atanh ? M2(i29, u20, "f64", c34) : B3(i29, u20, "f64", ct.get(c34));
    else if (ft.has(c34)) p21 = I(i29, u20, "f64", ft.get(c34));
    else if (ut.has(c34)) {
      p21 = ut.get(c34)(i29, u20, "f64");
    } else p21 = i29[0], d11 = false;
    if (d11 && c34 !== s4.isNull && !a9.has(c34)) {
      const e9 = g.createEmptyBand(h7, p21.length);
      u20 || (u20 = new Uint8Array(p21.length).fill(255)), i(p21, u20), u(p21, u20, h7, e9), p21 = e9;
    }
    m17.push(p21);
  }
  const d10 = l22[0];
  return new g({ width: d10.width, height: d10.height, pixelType: h7, mask: c34 === s4.isNull ? null : u20, pixels: m17 });
}
function pt(t6, e9, n18) {
  return gt(t6, e9 = [null, 1, 2, 3, 23, 5, 44][e9] ?? 1, { outputPixelType: n18 });
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/ArithmeticFunction.js
var p7 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Arithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster", "raster2"];
  }
  _bindSourceRasters() {
    const { operation: t6 } = this.functionArguments;
    if (t6 < 1 || t6 > 6) return { success: false, supportsGPU: false, error: "unsupported operation" };
    const e9 = this.sourceRasterInfos[0].clone();
    this.outputPixelType = this._getOutputPixelType(e9.pixelType), e9.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(e9), this.rasterInfo = e9;
    return { success: true, supportsGPU: e9.bandCount <= 3 };
  }
  _processPixels(t6) {
    const { pixelBlocks: e9 } = t6;
    return null == (e9 == null ? void 0 : e9[0]) || null == (e9 == null ? void 0 : e9[1]) ? null : pt(e9, this.functionArguments.operation, this.outputPixelType);
  }
  _getWebGLParameters() {
    const { operation: t6 } = this.functionArguments, e9 = ["", "plus", "minus", "times", "divide", "power", "mod"][t6], r12 = this.outputPixelType ?? "f32";
    let [i28, n18] = s3(r12);
    const u20 = o3(r12);
    return u20 && (i28 -= 1e-4, n18 += 1e-4), { imageCount: 2, operationName: e9, domainRange: [i28, n18], isOutputRounded: u20 };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], p7.prototype, "functionName", void 0), r([m({ type: i3, json: { write: true, name: "rasterFunctionArguments" } })], p7.prototype, "functionArguments", void 0), r([m()], p7.prototype, "rasterArgumentNames", void 0), p7 = r([a2("esri.layers.support.rasterFunctions.ArithmeticFunction")], p7);
var a10 = p7;

// node_modules/@arcgis/core/layers/support/rasterFunctions/AspectFunctionArguments.js
var t;
var e3 = t = class extends p3 {
  clone() {
    return new t({ raster: this.raster });
  }
};
e3 = t = r([a2("esri.layers.support.rasterFunctions.AspectFunctionArguments")], e3);
var c5 = e3;

// node_modules/@arcgis/core/layers/support/rasterFunctions/AspectFunction.js
var n3 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Aspect", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    var _a;
    const t6 = this.sourceRasterInfos[0];
    this.isGCS = ((_a = t6.spatialReference) == null ? void 0 : _a.isGeographic) ?? false, this.outputPixelType = this._getOutputPixelType("f32");
    const s12 = t6.clone();
    return s12.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(s12), s12.statistics = [{ min: -1, max: 360, avg: 180, stddev: 30 }], s12.bandCount = 1, this.rasterInfo = s12, { success: true, supportsGPU: true };
  }
  _processPixels(t6) {
    var _a;
    const s12 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == s12) return null;
    const { extent: e9, primaryPixelSizes: r12 } = t6, o11 = r12 == null ? void 0 : r12[0], n18 = o11 ?? (e9 ? { x: e9.width / s12.width, y: e9.height / s12.height } : { x: 1, y: 1 });
    return u2(s12, { resolution: n18 });
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], n3.prototype, "functionName", void 0), r([m({ type: c5, json: { write: true, name: "rasterFunctionArguments" } })], n3.prototype, "functionArguments", void 0), r([m()], n3.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], n3.prototype, "isGCS", void 0), n3 = r([a2("esri.layers.support.rasterFunctions.AspectFunction")], n3);
var p8 = n3;

// node_modules/@arcgis/core/layers/support/rasterFunctions/customBandIndexUtils.js
var e4 = /* @__PURE__ */ new Set(["+", "-", "*", "/", "(", ")"]);
function t2(t6, r12) {
  (t6 = t6.replaceAll(" ", "")).startsWith("-") && (t6 = "0" + t6), t6.startsWith("+") && (t6 = t6.slice(1));
  const l22 = t6.split(""), o11 = [], s12 = [];
  let a30 = "";
  for (let i28 = 0; i28 < l22.length; i28++) {
    const t7 = l22[i28];
    e4.has(t7) ? (a30.length && s12.push(n4(a30, r12)), o11.push(t7), a30 = "") : a30 = a30.concat(t7);
  }
  return a30.length && s12.push(n4(a30, r12)), { ops: o11, nums: s12 };
}
function n4(e9, t6) {
  return e9.toLowerCase().startsWith("b") ? t6[parseInt(e9.slice(1), 10) - 1] : parseFloat(e9);
}
function r6(e9, t6, n18, r12) {
  if ("number" == typeof n18 && "number" == typeof r12) return n18 + r12;
  let l22, o11, s12;
  "number" == typeof n18 ? (s12 = r12, l22 = s12.length, o11 = new Float32Array(l22), o11.fill(n18)) : (l22 = n18.length, o11 = n18, r12.constructor === Number ? (s12 = new Float32Array(l22), s12.fill(r12)) : s12 = r12);
  const a30 = new Float32Array(l22);
  switch (t6) {
    case "+":
      for (let t7 = 0; t7 < l22; t7++) (null == e9 || e9[t7]) && (a30[t7] = o11[t7] + s12[t7]);
      break;
    case "-":
      for (let t7 = 0; t7 < l22; t7++) (null == e9 || e9[t7]) && (a30[t7] = o11[t7] - s12[t7]);
      break;
    case "*":
      for (let t7 = 0; t7 < l22; t7++) (null == e9 || e9[t7]) && (a30[t7] = o11[t7] * s12[t7]);
      break;
    case "/":
      for (let t7 = 0; t7 < l22; t7++) (null == e9 || e9[t7]) && s12[t7] && (a30[t7] = o11[t7] / s12[t7]);
      break;
    case "(":
    case ")":
      throw new Error("encountered error with custom band index equation");
  }
  return a30;
}
function l7(e9, t6) {
  e9.splice(t6, 1);
  let n18 = 0, r12 = 0;
  do {
    n18 = 0, r12 = 0;
    for (let t7 = 0; t7 < e9.length; t7++) if ("(" === e9[t7]) n18 = t7;
    else if (")" === e9[t7]) {
      r12 = t7;
      break;
    }
    r12 === n18 + 1 && e9.splice(n18, 2);
  } while (r12 === n18 + 1);
  return e9;
}
function o5(e9) {
  if (1 === e9.length) return { opIndex: 0, numIndex: 0 };
  let t6 = 0, n18 = 0;
  for (let s12 = 0; s12 < e9.length; s12++) if ("(" === e9[s12]) t6 = s12;
  else if (")" === e9[s12]) {
    n18 = s12;
    break;
  }
  const r12 = 0 === n18 ? e9 : e9.slice(t6 + 1, n18);
  let l22 = -1;
  for (let s12 = 0; s12 < r12.length; s12++) if ("*" === r12[s12] || "/" === r12[s12]) {
    l22 = s12;
    break;
  }
  if (l22 > -1) n18 > 0 && (l22 += t6 + 1);
  else {
    for (let e10 = 0; e10 < r12.length; e10++) if ("+" === r12[e10] || "-" === r12[e10]) {
      l22 = e10;
      break;
    }
    n18 > 0 && (l22 += t6 + 1);
  }
  let o11 = 0;
  for (let s12 = 0; s12 < l22; s12++) "(" === e9[s12] && o11++;
  return { opIndex: l22, numIndex: l22 - o11 };
}
function s5(e9, n18, s12) {
  let a30, { ops: i28, nums: f7 } = t2(s12, n18);
  if (0 === i28.length) {
    const e10 = 1 === f7.length ? f7[0] : n18[0];
    if (e10 instanceof Float32Array) return [e10];
    const t6 = new Float32Array(n18[0].length);
    return "number" == typeof e10 ? t6.fill(e10) : t6.set(e10), [t6];
  }
  for (; i28.length > 0; ) {
    const { numIndex: t6, opIndex: n19 } = o5(i28);
    if (a30 = r6(e9, i28[n19], f7[t6], f7[t6 + 1]), 1 === i28.length) break;
    i28 = l7(i28, n19), f7.splice(t6, 2, a30);
  }
  return [a30];
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/bandIndexUtils.js
var i5 = new o({ 0: "custom", 1: "ndvi", 2: "savi", 3: "tsavi", 4: "msavi", 5: "gemi", 6: "pvi", 7: "gvitm", 8: "sultan", 9: "vari", 10: "gndvi", 11: "sr", 12: "ndvi-re", 13: "sr-re", 14: "mtvi2", 15: "rtvi-core", 16: "ci-re", 17: "ci-g", 18: "ndwi", 19: "evi", 20: "iron-oxide", 21: "ferrous-minerals", 22: "clay-minerals", 23: "wndwi", 24: "bai", 25: "nbr", 26: "ndbi", 27: "ndmi", 28: "ndsi", 29: "mndwi" }, { useNumericKeys: true });
function s6(t6, i28) {
  if (!o4(t6)) return t6;
  const { equation: s12, method: l22 } = i28, c34 = i28.bandIndexes.map((t7) => t7 - 1), { pixels: U3, mask: q3 } = t6;
  let M4;
  switch (l22) {
    case "gndvi":
    case "nbr":
    case "ndbi":
    case "ndvi":
    case "ndvi-re":
    case "ndsi":
    case "ndmi":
    case "mndwi":
      M4 = u5(q3, U3[c34[0]], U3[c34[1]]);
      break;
    case "ndwi":
      M4 = u5(q3, U3[c34[1]], U3[c34[0]]);
      break;
    case "sr":
    case "sr-re":
    case "iron-oxide":
    case "ferrous-minerals":
    case "clay-minerals":
      M4 = f5(q3, U3[c34[0]], U3[c34[1]]);
      break;
    case "ci-g":
    case "ci-re":
      M4 = h3(q3, U3[c34[0]], U3[c34[1]]);
      break;
    case "savi":
      M4 = w5(q3, U3[c34[0]], U3[c34[1]], c34[2] + 1);
      break;
    case "tsavi":
      M4 = m6(q3, U3[c34[0]], U3[c34[1]], c34[2] + 1, c34[3] + 1, c34[4] + 1);
      break;
    case "msavi":
      M4 = d6(q3, U3[c34[0]], U3[c34[1]]);
      break;
    case "gemi":
      M4 = g5(q3, U3[c34[0]], U3[c34[1]]);
      break;
    case "pvi":
      M4 = y4(q3, U3[c34[0]], U3[c34[1]], c34[2] + 1, c34[3] + 1);
      break;
    case "gvitm":
      M4 = p9(q3, [U3[c34[0]], U3[c34[1]], U3[c34[2]], U3[c34[3]], U3[c34[4]], U3[c34[5]]]);
      break;
    case "sultan":
      M4 = b2(q3, [U3[c34[0]], U3[c34[1]], U3[c34[2]], U3[c34[3]], U3[c34[4]]]);
      break;
    case "vari":
      M4 = v2(q3, [U3[c34[0]], U3[c34[1]], U3[c34[2]]]);
      break;
    case "mtvi2":
      M4 = k2(q3, [U3[c34[0]], U3[c34[1]], U3[c34[2]]]);
      break;
    case "rtvi-core":
      M4 = A2(q3, [U3[c34[0]], U3[c34[1]], U3[c34[2]]]);
      break;
    case "evi":
      M4 = F2(q3, [U3[c34[0]], U3[c34[1]], U3[c34[2]]]);
      break;
    case "wndwi":
      M4 = x3(q3, [U3[c34[0]], U3[c34[1]], U3[c34[2]]], c34[3] ? c34[3] + 1 : 0.5);
      break;
    case "bai":
      M4 = j3(q3, U3[c34[0]], U3[c34[1]]);
      break;
    case "custom":
      M4 = s5(q3, U3, s12);
      break;
    default:
      return t6;
  }
  const { outputPixelType: B5 = "f32" } = i28, T3 = null != B5 && o3(B5);
  let I3;
  q3 ? (I3 = new Uint8Array(t6.width * t6.height), I3.set(q3)) : T3 && (I3 = new Uint8Array(t6.width * t6.height).fill(255)), T3 && (M4 = M4.map((t7) => {
    const e9 = g.createEmptyBand(B5, t7.length);
    return u(t7, I3, B5, e9), e9;
  }));
  const P3 = new g({ width: t6.width, height: t6.height, pixelType: B5, pixels: M4, mask: I3 });
  return P3.updateStatistics(), P3;
}
function l8(t6, e9, r12, a30) {
  const { mask: o11, pixels: i28, width: s12, height: l22 } = t6, c34 = i28[r12], u20 = i28[e9], f7 = u20.length, h7 = a30 ? new Uint8Array(f7) : new Float32Array(f7), w7 = a30 ? 100 : 1, m17 = a30 ? 100.5 : 0;
  for (let n18 = 0; n18 < f7; n18++) if (null == o11 || o11[n18]) {
    const t7 = c34[n18], e10 = u20[n18], r13 = t7 + e10;
    r13 && (h7[n18] = (t7 - e10) / r13 * w7 + m17);
  }
  const d10 = new g({ width: s12, height: l22, mask: o11, pixelType: a30 ? "u8" : "f32", pixels: [h7] });
  return d10.updateStatistics(), d10;
}
function c6(t6) {
  const n18 = new Float32Array(9);
  return n18[3 * t6[0]] = 1, n18[3 * t6[1] + 1] = 1, n18[3 * t6[2] + 2] = 1, n18;
}
function u5(t6, n18, e9) {
  const r12 = e9.length, a30 = new Float32Array(r12);
  for (let o11 = 0; o11 < r12; o11++) if (null == t6 || t6[o11]) {
    const t7 = n18[o11], r13 = e9[o11], i28 = t7 + r13;
    i28 && (a30[o11] = (t7 - r13) / i28);
  }
  return [a30];
}
function f5(t6, n18, e9) {
  const r12 = e9.length, a30 = new Float32Array(r12);
  for (let o11 = 0; o11 < r12; o11++) if (null == t6 || t6[o11]) {
    const t7 = n18[o11], r13 = e9[o11];
    r13 && (a30[o11] = t7 / r13);
  }
  return [a30];
}
function h3(t6, n18, e9) {
  const r12 = n18.length, a30 = new Float32Array(r12);
  for (let o11 = 0; o11 < r12; o11++) if (null == t6 || t6[o11]) {
    const t7 = n18[o11], r13 = e9[o11];
    r13 && (a30[o11] = t7 / r13 - 1);
  }
  return [a30];
}
function w5(t6, n18, e9, r12) {
  const a30 = e9.length, o11 = new Float32Array(a30);
  for (let i28 = 0; i28 < a30; i28++) if (null == t6 || t6[i28]) {
    const t7 = e9[i28], a31 = n18[i28], s12 = a31 + t7 + r12;
    s12 && (o11[i28] = (a31 - t7) / s12 * (1 + r12));
  }
  return [o11];
}
function m6(t6, n18, e9, r12, a30, o11) {
  const i28 = e9.length, s12 = new Float32Array(i28), l22 = -a30 * r12 + o11 * (1 + r12 * r12);
  for (let c34 = 0; c34 < i28; c34++) if (null == t6 || t6[c34]) {
    const t7 = e9[c34], o12 = n18[c34], i29 = a30 * o12 + t7 + l22;
    i29 && (s12[c34] = r12 * (o12 - r12 * t7 - a30) / i29);
  }
  return [s12];
}
function d6(t6, n18, e9) {
  const r12 = e9.length, a30 = new Float32Array(r12);
  for (let o11 = 0; o11 < r12; o11++) if (null == t6 || t6[o11]) {
    const t7 = e9[o11], r13 = n18[o11], i28 = 2 * r13 + 1;
    a30[o11] = 0.5 * (i28 - Math.sqrt(i28 * i28 - 8 * (r13 - t7)));
  }
  return [a30];
}
function g5(t6, n18, e9) {
  const r12 = e9.length, a30 = new Float32Array(r12);
  for (let o11 = 0; o11 < r12; o11++) if (null == t6 || t6[o11]) {
    const t7 = e9[o11], r13 = n18[o11];
    if (1 !== t7 && r13 + t7 + 0.5 !== 0) {
      const n19 = (2 * (r13 * r13 - t7 * t7) + 1.5 * r13 + 0.5 * t7) / (r13 + t7 + 0.5);
      a30[o11] = n19 * (1 - 0.25 * n19) - (t7 - 0.125) / (1 - t7);
    }
  }
  return [a30];
}
function y4(t6, n18, e9, r12, a30) {
  const o11 = e9.length, i28 = new Float32Array(o11), s12 = 1 / Math.sqrt(1 + r12 * r12);
  for (let l22 = 0; l22 < o11; l22++) if (null == t6 || t6[l22]) {
    const t7 = e9[l22], o12 = n18[l22];
    i28[l22] = (o12 - r12 * t7 - a30) * s12;
  }
  return [i28];
}
function p9(t6, n18) {
  const [e9, r12, a30, o11, i28, s12] = n18, l22 = e9.length, c34 = new Float32Array(l22);
  for (let u20 = 0; u20 < l22; u20++) (null == t6 || t6[u20]) && (c34[u20] = -0.2848 * e9[u20] - 0.2435 * r12[u20] - 0.5436 * a30[u20] + 0.7243 * o11[u20] + 0.084 * i28[u20] - 0.18 * s12[u20]);
  return [c34];
}
function b2(t6, n18) {
  const [e9, r12, a30, o11, i28] = n18, s12 = e9.length, l22 = new Float32Array(s12), c34 = new Float32Array(s12), u20 = new Float32Array(s12);
  for (let f7 = 0; f7 < s12; f7++) (null == t6 || t6[f7]) && (l22[f7] = i28[f7] ? o11[f7] / i28[f7] * 100 : 0, c34[f7] = e9[f7] ? o11[f7] / e9[f7] * 100 : 0, u20[f7] = a30[f7] ? r12[f7] / a30[f7] * (o11[f7] / a30[f7]) * 100 : 0);
  return [l22, c34, u20];
}
function v2(t6, n18) {
  const [e9, r12, a30] = n18, o11 = e9.length, i28 = new Float32Array(o11);
  for (let s12 = 0; s12 < o11; s12++) if (null == t6 || t6[s12]) for (s12 = 0; s12 < o11; s12++) {
    const t7 = e9[s12], n19 = r12[s12], o12 = n19 + t7 - a30[s12];
    o12 && (i28[s12] = (n19 - t7) / o12);
  }
  return [i28];
}
function k2(t6, n18) {
  const [e9, r12, a30] = n18, o11 = e9.length, i28 = new Float32Array(o11);
  for (let s12 = 0; s12 < o11; s12++) if (null == t6 || t6[s12]) for (s12 = 0; s12 < o11; s12++) {
    const t7 = e9[s12], n19 = r12[s12], o12 = a30[s12], l22 = Math.sqrt((2 * t7 + 1) ** 2 - (6 * t7 - 5 * Math.sqrt(n19)) - 0.5);
    if (l22) {
      const e10 = 1.5 * (1.2 * (t7 - o12) - 2.5 * (n19 - o12));
      i28[s12] = e10 / l22;
    }
  }
  return [i28];
}
function A2(t6, n18) {
  const [e9, r12, a30] = n18, o11 = e9.length, i28 = new Float32Array(o11);
  for (let s12 = 0; s12 < o11; s12++) if (null == t6 || t6[s12]) for (s12 = 0; s12 < o11; s12++) {
    const t7 = e9[s12], n19 = r12[s12], o12 = a30[s12];
    i28[s12] = 100 * (t7 - n19) - 10 * (t7 - o12);
  }
  return [i28];
}
function F2(t6, n18) {
  const [e9, r12, a30] = n18, o11 = e9.length, i28 = new Float32Array(o11);
  for (let s12 = 0; s12 < o11; s12++) if (null == t6 || t6[s12]) for (s12 = 0; s12 < o11; s12++) {
    const t7 = e9[s12], n19 = r12[s12], o12 = t7 + 6 * n19 - 7.5 * a30[s12] + 1;
    o12 && (i28[s12] = 2.5 * (t7 - n19) / o12);
  }
  return [i28];
}
function x3(t6, n18, e9 = 0.5) {
  const [r12, a30, o11] = n18, i28 = a30.length, s12 = new Float32Array(i28);
  for (let l22 = 0; l22 < i28; l22++) if (null == t6 || t6[l22]) for (l22 = 0; l22 < i28; l22++) {
    const t7 = r12[l22], n19 = a30[l22], i29 = o11[l22], c34 = t7 + e9 * n19 + (1 - e9) * i29;
    c34 && (s12[l22] = (t7 - e9 * n19 - (1 - e9) * i29) / c34);
  }
  return [s12];
}
function j3(t6, n18, e9) {
  const r12 = e9.length, a30 = new Float32Array(r12);
  for (let o11 = 0; o11 < r12; o11++) if (null == t6 || t6[o11]) for (o11 = 0; o11 < r12; o11++) {
    const t7 = (0.1 - n18[o11]) ** 2 + (0.06 - e9[o11]) ** 2;
    t7 && (a30[o11] = 1 / t7);
  }
  return [a30];
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/BandArithmeticFunctionArguments.js
var i6;
var p10 = i6 = class extends p3 {
  constructor() {
    super(...arguments), this.method = "custom";
  }
  clone() {
    return new i6({ method: this.method, bandIndexes: this.bandIndexes, raster: a(this.raster) });
  }
};
r([m({ json: { type: String, write: true } })], p10.prototype, "bandIndexes", void 0), r([r3(i5)], p10.prototype, "method", void 0), p10 = i6 = r([a2("esri.layers.support.rasterFunctions.BandArithmeticFunctionArguments")], p10);
var a11 = p10;

// node_modules/@arcgis/core/layers/support/rasterFunctions/BandArithmeticFunction.js
var c7 = /* @__PURE__ */ new Set(["vari", "mtvi2", "rtvi-core", "evi"]);
var u6 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "BandArithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const e9 = this.sourceRasterInfos[0];
    if (e9.bandCount < 2) return { success: false, supportsGPU: false, error: "band-arithmetic-function: source raster has insufficient amount of raster bands" };
    const t6 = e9.clone();
    t6.pixelType = this.outputPixelType, t6.bandCount = "sultan" === this.functionArguments.method ? 3 : 1, this._removeStatsHistColormapVAT(t6), t6.keyProperties = { ...t6.keyProperties, BandProperties: void 0 }, this.rasterInfo = t6;
    return { success: true, supportsGPU: !["custom", "gvitm", "sultan"].includes(this.functionArguments.method) };
  }
  _processPixels(e9) {
    var _a;
    const t6 = (_a = e9.pixelBlocks) == null ? void 0 : _a[0];
    if (null == t6) return t6;
    const { method: s12, bandIndexes: r12 } = this.functionArguments, i28 = r12.split(" ").map((e10) => parseFloat(e10));
    return s6(t6, { method: s12, bandIndexes: i28, equation: r12, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const e9 = this.functionArguments.bandIndexes.split(" ").map((e10) => parseFloat(e10) - 1);
    2 === e9.length && e9.push(0);
    const t6 = this.isInputBandIdsSwizzled ? [0, 1, 2] : e9;
    let s12, i28;
    const n18 = new Float32Array(3), { method: o11 } = this.functionArguments;
    switch (o11) {
      case "gndvi":
      case "nbr":
      case "ndbi":
      case "ndvi":
      case "ndvi-re":
      case "ndsi":
      case "ndmi":
      case "mndwi":
        s12 = c6([t6[0], t6[1], 0]), i28 = "ndxi";
        break;
      case "ndwi":
        s12 = c6([t6[1], t6[0], 0]), i28 = "ndxi";
        break;
      case "sr":
      case "sr-re":
      case "iron-oxide":
      case "ferrous-minerals":
      case "clay-minerals":
        s12 = c6([t6[0], t6[1], 0]), i28 = "sr";
        break;
      case "ci-g":
      case "ci-re":
        s12 = c6([t6[0], t6[1], 0]), i28 = "ci";
        break;
      case "savi":
        s12 = c6([t6[0], t6[1], 0]), i28 = "savi", n18[0] = e9[2] + 1;
        break;
      case "tsavi":
        s12 = c6([t6[0], t6[1], 0]), i28 = "tsavi", n18[0] = e9[2] + 1, n18[1] = e9[3] + 1, n18[2] = e9[4] + 1;
        break;
      case "msavi":
        s12 = c6([t6[0], t6[1], 0]), i28 = "msavi";
        break;
      case "gemi":
        s12 = c6([t6[0], t6[1], 0]), i28 = "gemi";
        break;
      case "pvi":
        s12 = c6([t6[0], t6[1], 0]), i28 = "tsavi", n18[0] = e9[2] + 1, n18[1] = e9[3] + 1;
        break;
      case "vari":
        s12 = c6([t6[0], t6[1], t6[2]]), i28 = "vari";
        break;
      case "mtvi2":
        s12 = c6([t6[0], t6[1], t6[2]]), i28 = "mtvi";
        break;
      case "rtvi-core":
        s12 = c6([t6[0], t6[1], t6[2]]), i28 = "rtvicore";
        break;
      case "evi":
        s12 = c6([t6[0], t6[1], t6[2]]), i28 = "evi";
        break;
      case "wndwi":
        s12 = c6([t6[0], t6[1], 0]), i28 = "wndwi", n18[0] = e9[3] ? e9[3] + 1 : 0.5;
        break;
      case "bai":
        s12 = c6([t6[1], t6[0], 0]), i28 = "bai";
        break;
      default:
        s12 = c6([0, 1, 2]), i28 = "custom";
    }
    return { bandIndexMat3: s12, indexType: i28, adjustments: n18, isOutputRounded: o3(this.outputPixelType) };
  }
  _getInputBandIds(e9) {
    if ("custom" === this.functionArguments.method) return e9;
    const t6 = this.functionArguments.bandIndexes.split(" ").map((e10) => parseFloat(e10) - 1), s12 = e9.length, r12 = t6.map((e10) => e10 >= s12 ? s12 - 1 : e10), i28 = c7.has(this.functionArguments.method) ? 3 : 2, n18 = r12.slice(0, i28).map((t7) => e9[t7]);
    return 2 === n18.length && n18.push(0), n18;
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], u6.prototype, "functionName", void 0), r([m({ type: a11, json: { write: true, name: "rasterFunctionArguments" } })], u6.prototype, "functionArguments", void 0), r([m()], u6.prototype, "rasterArgumentNames", void 0), u6 = r([a2("esri.layers.support.rasterFunctions.BandArithmeticFunction")], u6);
var m7 = u6;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ClipFunctionArguments.js
var c8;
var n5 = new o({ 1: "outside", 2: "inside" }, { useNumericKeys: true });
var m8 = c8 = class extends p3 {
  constructor() {
    super(...arguments), this.clippingType = "outside";
  }
  clone() {
    return new c8({ clippingGeometry: this.clippingGeometry.clone(), clippingType: this.clippingType });
  }
};
r([m({ types: l, json: { read: f, write: true } })], m8.prototype, "clippingGeometry", void 0), r([m({ json: { read: n5.read, write: n5.write } })], m8.prototype, "clippingType", void 0), m8 = c8 = r([a2("esri.layers.support.rasterFunctions.ClipFunctionArguments")], m8);
var u7 = m8;

// node_modules/@arcgis/core/layers/support/rasterFunctions/clipUtils.js
function a12(e9, i28) {
  if (e9.spatialReference.equals(i28)) return e9;
  const n18 = Q(e9.spatialReference), a30 = Q(i28);
  if (n18 === a30) return e9;
  const h7 = n18 / a30;
  return { x: e9.x * h7, y: e9.y * h7 };
}
async function h4(t6, e9, i28) {
  if ("extent" === i28.type) return o6(t6, e9, i28);
  const { width: a30, height: h7 } = t6, m17 = new Uint8Array(a30 * h7), { contains: l22, intersects: s12 } = await import("./geometryEngine-NZOZ5KZJ.js");
  return s12(e9, i28) ? "polyline" === i28.type ? r7(t6, e9, i28) : l22(i28, e9) ? t6 : x4(t6, e9, i28) : new g({ pixelType: t6.pixelType, width: a30, height: h7, mask: m17, maskIsAlpha: false, pixels: [...t6.pixels] });
}
function x4(t6, e9, i28) {
  if (!t6) return t6;
  const { width: a30, height: h7 } = t6, x7 = e9.width / a30, o11 = e9.height / h7, { xmin: r12, ymax: m17 } = e9;
  let l22;
  if ("extent" === i28.type) {
    const t7 = (i28.xmin - r12) / x7, e10 = (i28.xmax - r12) / x7, n18 = (m17 - i28.ymax) / o11, a31 = (m17 - i28.ymin) / o11;
    l22 = [[[t7, n18], [t7, a31], [e10, a31], [e10, n18], [t7, n18]]];
  } else l22 = i28.rings.map((t7) => t7.map(([t8, e10]) => [(t8 - r12) / x7, (m17 - e10) / o11]));
  const s12 = document.createElement("canvas");
  s12.width = a30, s12.height = h7;
  const p20 = s12.getContext("2d");
  p20.fillStyle = "#f00", p20.beginPath(), l22.forEach((t7) => {
    p20.moveTo(t7[0][0], t7[0][1]);
    for (let e10 = 0; e10 < t7.length; e10++) p20.lineTo(t7[e10][0], t7[e10][1]);
    p20.closePath();
  }), p20.fill();
  const y5 = p20.getImageData(0, 0, a30, h7).data, f7 = t6.mask, c34 = a30 * h7, M4 = new Uint8Array(c34);
  for (let n18 = 0; n18 < c34; n18++) f7 && !f7[n18] || (M4[n18] = y5[4 * n18 + 3] > 127 ? 255 : 0);
  return new g({ pixelType: t6.pixelType, width: a30, height: h7, mask: M4, maskIsAlpha: false, pixels: [...t6.pixels] });
}
function o6(t6, e9, i28) {
  const { width: a30, height: h7 } = t6, x7 = new Uint8Array(a30 * h7), o11 = e9.width / a30, r12 = e9.height / h7;
  if (i28.width / o11 < 0.5 || i28.height / r12 < 0.5) return new g({ pixelType: t6.pixelType, width: a30, height: h7, mask: x7, pixels: [...t6.pixels] });
  const { xmin: m17, xmax: l22, ymin: s12, ymax: p20 } = e9, { xmin: y5, xmax: f7, ymin: c34, ymax: M4 } = i28, u20 = Math.max(m17, y5), d10 = Math.min(l22, f7), w7 = Math.max(s12, c34), g7 = Math.min(p20, M4), T3 = 0.5 * o11, k4 = 0.5 * r12;
  if (d10 - u20 < T3 || g7 - w7 < k4 || d10 < m17 + T3 || u20 > l22 - T3 || w7 > p20 - k4 || g7 < s12 + k4) return new g({ pixelType: t6.pixelType, width: a30, height: h7, mask: x7, pixels: [...t6.pixels] });
  const R2 = Math.max(0, (u20 - m17) / o11), A3 = Math.min(a30, Math.max(0, (d10 - m17) / o11)), j4 = Math.max(0, (p20 - g7) / r12), U3 = Math.min(h7, Math.max(0, (p20 - w7) / r12)), E3 = Math.round(R2), P3 = Math.round(A3) - 1, S3 = Math.round(j4), z2 = Math.round(U3) - 1;
  if (E3 === P3 && R2 % 1 > 0.5 && A3 % 1 < 0.5 || S3 === z2 && j4 % 1 > 0.5 && U3 % 1 < 0.5) return new g({ pixelType: t6.pixelType, width: a30, height: h7, mask: x7, pixels: [...t6.pixels] });
  if (0 === E3 && 0 === S3 && P3 === a30 && z2 === h7) return t6;
  const I3 = t6.mask;
  for (let n18 = S3; n18 <= z2; n18++) for (let t7 = E3; t7 <= P3; t7++) {
    const e10 = n18 * a30 + t7;
    x7[e10] = I3 ? I3[e10] : 255;
  }
  return new g({ pixelType: t6.pixelType, width: a30, height: h7, mask: x7, pixels: [...t6.pixels] });
}
function r7(t6, e9, i28) {
  const { width: a30, height: h7 } = t6, x7 = new Uint8Array(a30 * h7), o11 = e9.width / a30, r12 = e9.height / h7, { xmin: m17, ymax: l22 } = e9, { paths: s12 } = i28, p20 = t6.mask;
  for (let n18 = 0; n18 < s12.length; n18++) {
    const t7 = s12[n18];
    for (let e10 = 0; e10 < t7.length - 1; e10++) {
      const [i29, n19] = t7[e10], [s13, y5] = t7[e10 + 1];
      let f7 = Math.floor((l22 - n19) / r12), c34 = Math.floor((l22 - y5) / r12);
      if (c34 < f7) {
        const t8 = f7;
        f7 = c34, c34 = t8;
      }
      f7 = Math.max(0, f7), c34 = Math.min(h7 - 1, c34);
      const M4 = (s13 - i29) / (y5 - n19);
      for (let t8 = f7; t8 <= c34; t8++) {
        const e11 = t8 === f7 ? Math.max(n19, y5) : (h7 + 1 - t8) * r12, l23 = t8 === c34 ? Math.min(n19, y5) : e11 - r12;
        let u20 = y5 === n19 ? Math.floor((i29 - m17) / o11) : Math.floor((M4 * (e11 - n19) + i29 - m17) / o11), d10 = y5 === n19 ? Math.floor((s13 - m17) / o11) : Math.floor((M4 * (l23 - n19) + i29 - m17) / o11);
        if (d10 < u20) {
          const t9 = u20;
          u20 = d10, d10 = t9;
        }
        const w7 = t8 * a30;
        u20 = Math.max(0, u20), d10 = Math.min(a30 - 1, d10);
        for (let t9 = w7 + u20; t9 <= w7 + d10; t9++) x7[t9] = p20 ? p20[t9] : 255;
      }
    }
  }
  return new g({ pixelType: t6.pixelType, width: a30, height: h7, mask: x7, pixels: [...t6.pixels] });
}
function m9(t6, e9) {
  const { extent: n18 } = l9(t6, e9, new j({ x: t6.pixelSize.x, y: t6.pixelSize.y, spatialReference: t6.spatialReference })), { extent: a30 } = t6.extent;
  if (n18.xmax = Math.min(n18.xmax, a30.xmax), n18.ymax = Math.min(n18.ymax, a30.ymax), n18.xmin < n18.xmax && n18.ymin < n18.ymax) {
    const { x: e10, y: i28 } = t6.pixelSize, a31 = Math.round(n18.width / e10), h7 = Math.round(n18.height / i28);
    t6.extent = n18, t6.width = a31, t6.height = h7;
  }
}
function l9(t6, i28, n18, h7 = true) {
  const { spatialReference: x7 } = t6, { x: o11, y: r12 } = a12(n18, x7);
  let m17, l22, s12;
  const p20 = "extent" === i28.type ? i28 : i28.extent;
  let { xmin: y5, xmax: f7, ymax: c34, ymin: M4 } = p20;
  const { xmin: u20, ymax: d10 } = t6.extent;
  return h7 ? (y5 = u20 + (y5 > u20 ? o11 * Math.round((y5 - u20) / o11) : 0), c34 = d10 - (c34 < d10 ? r12 * Math.round((d10 - c34) / r12) : 0), f7 = u20 + (f7 > u20 ? o11 * Math.round((f7 - u20) / o11) : 0), M4 = d10 - (M4 < d10 ? r12 * Math.round((d10 - M4) / r12) : 0), m17 = new w({ xmin: y5, ymax: c34, xmax: f7, ymin: M4, spatialReference: x7 }), l22 = Math.round(m17.width / o11), s12 = Math.round(m17.height / r12)) : (l22 = Math.floor((f7 - y5) / o11 + 0.8), s12 = Math.floor((c34 - M4) / r12 + 0.8), y5 = u20 + (y5 > u20 ? o11 * Math.floor((y5 - u20) / o11 + 0.1) : 0), c34 = d10 - (c34 < d10 ? r12 * Math.floor((d10 - c34) / r12 + 0.1) : 0), f7 = y5 + l22 * o11, M4 = c34 - s12 * r12, m17 = new w({ xmin: y5, ymax: c34, xmax: f7, ymin: M4, spatialReference: x7 })), { extent: m17, width: l22, height: s12 };
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/ClipFunction.js
var c9 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Clip", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = true;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0].clone();
    this.outputPixelType = this._getOutputPixelType(t6.pixelType), t6.pixelType = this.outputPixelType, this.rasterInfo = t6;
    const { functionArguments: e9 } = this, { clippingGeometry: r12, clippingType: s12 } = e9;
    if (!r12) return { success: false, supportsGPU: false, error: "missing clipping geometry" };
    if ("outside" === s12) try {
      const { spatialReference: e10 } = t6, s13 = "extent" === r12.type ? V(r12, e10) : Z(r12, e10).extent;
      s13 && m9(t6, s13);
    } catch {
    }
    return { success: true, supportsGPU: true };
  }
  _processPixels(t6) {
    var _a;
    return (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
  }
  _getWebGLParameters() {
    const { clippingGeometry: t6, clippingType: e9 } = this.functionArguments;
    return { clippingGeometry: t6.toJSON(), clippingType: e9 };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], c9.prototype, "functionName", void 0), r([m({ type: u7, json: { write: true, name: "rasterFunctionArguments" } })], c9.prototype, "functionArguments", void 0), r([m()], c9.prototype, "rasterArgumentNames", void 0), r([m()], c9.prototype, "isNoopProcess", void 0), c9 = r([a2("esri.layers.support.rasterFunctions.ClipFunction")], c9);
var u8 = c9;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ColormapFunctionArguments.js
var i7;
var u9 = i7 = class extends p3 {
  castColormapName(o11) {
    if (!o11) return null;
    const r12 = o11.toLowerCase();
    return C.includes(r12) ? r12 : null;
  }
  readColorRamp(o11) {
    return p(o11);
  }
  readColorRampName(o11, r12) {
    if (!o11) return null;
    const e9 = m3.jsonValues.find((r13) => r13.toLowerCase() === o11.toLowerCase());
    return e9 ? m3.fromJSON(e9) : null;
  }
  clone() {
    var _a;
    return new i7({ colormap: a(this.colormap), colormapName: this.colormapName, colorRamp: (_a = this.colorRamp) == null ? void 0 : _a.clone(), colorRampName: this.colorRampName });
  }
};
r([m({ type: [[Number]], json: { write: true } })], u9.prototype, "colormap", void 0), r([m({ type: String, json: { write: true } })], u9.prototype, "colormapName", void 0), r([s2("colormapName")], u9.prototype, "castColormapName", null), r([m({ types: m2, json: { write: true } })], u9.prototype, "colorRamp", void 0), r([o2("colorRamp")], u9.prototype, "readColorRamp", null), r([m({ type: m3.apiValues, json: { type: m3.jsonValues, write: m3.write } })], u9.prototype, "colorRampName", void 0), r([o2("colorRampName")], u9.prototype, "readColorRampName", null), u9 = i7 = r([a2("esri.layers.support.rasterFunctions.ColormapFunctionArguments")], u9);
var d7 = u9;

// node_modules/@arcgis/core/layers/support/rasterFunctions/colormaps.js
var t3 = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [112, 75, 3], [113, 76, 3], [114, 77, 3], [115, 77, 3], [116, 78, 3], [117, 79, 3], [118, 79, 3], [119, 80, 3], [121, 81, 4], [122, 82, 4], [123, 82, 4], [124, 83, 4], [125, 84, 4], [126, 84, 4], [127, 85, 4], [128, 86, 4], [129, 86, 4], [130, 87, 4], [131, 88, 4], [132, 89, 4], [133, 89, 4], [134, 90, 4], [135, 91, 4], [136, 91, 4], [137, 92, 4], [138, 93, 4], [139, 94, 4], [140, 94, 4], [142, 95, 5], [143, 96, 5], [144, 96, 5], [145, 97, 5], [146, 98, 5], [147, 99, 5], [148, 99, 5], [149, 100, 5], [150, 101, 5], [151, 101, 5], [152, 102, 5], [153, 103, 5], [154, 104, 5], [155, 104, 5], [156, 105, 5], [157, 106, 5], [158, 106, 5], [159, 107, 5], [160, 108, 5], [161, 108, 5], [162, 109, 5], [164, 110, 6], [165, 111, 6], [166, 111, 6], [167, 112, 6], [168, 113, 6], [169, 113, 6], [170, 114, 6], [171, 115, 6], [172, 116, 6], [173, 116, 6], [174, 117, 6], [245, 0, 0], [245, 5, 0], [245, 10, 0], [246, 15, 0], [246, 20, 0], [246, 25, 0], [246, 30, 0], [247, 35, 0], [247, 40, 0], [247, 45, 0], [247, 50, 0], [247, 55, 0], [248, 60, 0], [248, 65, 0], [248, 70, 0], [248, 75, 0], [249, 81, 0], [249, 86, 0], [249, 91, 0], [249, 96, 0], [250, 101, 0], [250, 106, 0], [250, 111, 0], [250, 116, 0], [250, 121, 0], [251, 126, 0], [251, 131, 0], [251, 136, 0], [251, 141, 0], [252, 146, 0], [252, 151, 0], [252, 156, 0], [252, 156, 0], [251, 159, 0], [250, 162, 0], [249, 165, 0], [248, 168, 0], [247, 171, 0], [246, 174, 0], [245, 177, 0], [245, 179, 0], [244, 182, 0], [243, 185, 0], [242, 188, 0], [241, 191, 0], [240, 194, 0], [239, 197, 0], [238, 200, 0], [237, 203, 0], [236, 206, 0], [235, 209, 0], [234, 212, 0], [233, 215, 0], [232, 218, 0], [231, 221, 0], [230, 224, 0], [230, 226, 0], [229, 229, 0], [228, 232, 0], [227, 235, 0], [226, 238, 0], [225, 241, 0], [224, 244, 0], [223, 247, 0], [165, 247, 0], [163, 244, 0], [161, 240, 0], [158, 237, 0], [156, 233, 1], [154, 230, 1], [152, 227, 1], [149, 223, 1], [147, 220, 1], [145, 216, 1], [143, 213, 1], [140, 210, 2], [138, 206, 2], [136, 203, 2], [134, 200, 2], [132, 196, 2], [129, 193, 2], [127, 189, 2], [125, 186, 3], [123, 183, 3], [120, 179, 3], [118, 176, 3], [116, 172, 3], [114, 169, 3], [111, 166, 3], [109, 162, 4], [107, 159, 4], [105, 155, 4], [103, 152, 4], [100, 149, 4], [98, 145, 4], [96, 142, 4], [94, 138, 5], [91, 135, 5], [89, 132, 5], [87, 128, 5], [85, 125, 5], [82, 121, 5], [80, 118, 5], [78, 115, 6], [76, 111, 6], [73, 108, 6], [71, 105, 6], [69, 101, 6], [67, 98, 6], [65, 94, 6], [62, 91, 7], [60, 88, 7], [58, 84, 7], [56, 81, 7], [53, 77, 7], [51, 74, 7], [49, 71, 7], [47, 67, 8], [44, 64, 8], [42, 60, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8]];
var o7 = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [245, 20, 0], [245, 24, 0], [245, 29, 0], [245, 31, 0], [247, 33, 0], [247, 33, 0], [247, 37, 0], [247, 41, 0], [247, 41, 0], [247, 41, 0], [247, 45, 0], [247, 45, 0], [247, 47, 0], [247, 49, 0], [247, 49, 0], [247, 54, 0], [247, 54, 0], [247, 56, 0], [247, 58, 0], [247, 58, 0], [250, 62, 0], [250, 62, 0], [250, 62, 0], [250, 67, 0], [250, 67, 0], [250, 67, 0], [250, 69, 0], [250, 71, 0], [250, 71, 0], [250, 75, 0], [250, 75, 0], [250, 78, 0], [250, 79, 0], [250, 79, 0], [250, 79, 0], [250, 81, 0], [250, 83, 0], [250, 83, 0], [250, 87, 0], [250, 87, 0], [250, 90, 0], [250, 92, 0], [252, 93, 0], [252, 93, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 105, 0], [252, 105, 0], [252, 107, 0], [252, 109, 0], [252, 109, 0], [252, 113, 13], [255, 118, 20], [255, 119, 23], [255, 121, 25], [255, 126, 33], [255, 132, 38], [255, 133, 40], [255, 135, 43], [255, 141, 48], [255, 144, 54], [255, 150, 59], [255, 152, 61], [255, 153, 64], [255, 159, 69], [255, 163, 77], [255, 165, 79], [255, 168, 82], [255, 174, 87], [255, 176, 92], [255, 181, 97], [255, 183, 99], [255, 186, 102], [255, 191, 107], [255, 197, 115], [255, 201, 120], [255, 203, 123], [255, 205, 125], [255, 209, 130], [255, 214, 138], [255, 216, 141], [255, 218, 143], [255, 224, 150], [255, 228, 156], [255, 234, 163], [255, 236, 165], [255, 238, 168], [255, 243, 173], [255, 248, 181], [255, 252, 186], [253, 252, 186], [250, 252, 187], [244, 250, 180], [238, 247, 176], [234, 246, 173], [231, 245, 169], [223, 240, 163], [217, 237, 157], [211, 235, 150], [205, 233, 146], [200, 230, 142], [195, 227, 136], [189, 224, 132], [184, 222, 126], [180, 220, 123], [174, 217, 119], [169, 214, 114], [163, 212, 108], [160, 210, 105], [154, 207, 101], [148, 204, 96], [143, 201, 93], [138, 199, 88], [134, 197, 84], [130, 194, 81], [126, 191, 77], [117, 189, 70], [115, 186, 68], [112, 184, 64], [106, 181, 60], [100, 179, 55], [94, 176, 49], [92, 174, 47], [90, 173, 45], [81, 168, 37], [75, 166, 33], [71, 163, 28], [66, 160, 24], [62, 158, 21], [56, 156, 14], [51, 153, 0], [51, 153, 0], [51, 153, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [49, 148, 0], [49, 148, 0], [49, 148, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [44, 133, 0], [44, 133, 0], [44, 133, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [42, 128, 0], [42, 128, 0], [42, 128, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0]];
function e5(t6, o11) {
  const e9 = [], n18 = [];
  for (let r12 = 0; r12 < t6.length - 1; r12++) e9.push({ type: "algorithmic", algorithm: "esriHSVAlgorithm", fromColor: t6[r12].slice(1), toColor: t6[r12 + 1].slice(1) }), n18.push(t6[r12 + 1][0] - t6[r12][0]);
  const s12 = t6[t6.length - 1][0];
  return w2({ type: "multipart", colorRamps: e9 }, { numColors: s12, weights: o11 = o11 ?? n18 });
}
function n6() {
  return e5([[0, 0, 191, 191], [51, 0, 0, 255], [102, 255, 0, 255], [153, 255, 0, 127], [204, 191, 63, 127], [256, 20, 20, 20]]);
}
function s7() {
  const r12 = e5([[0, 255, 255, 255], [70, 0, 255, 0], [80, 205, 173, 193], [100, 150, 150, 150], [110, 120, 51, 100], [130, 120, 100, 200], [140, 28, 3, 144], [160, 6, 0, 55], [180, 10, 25, 30], [201, 6, 7, 27]]);
  for (let t6 = r12.length; t6 < 256; t6++) r12.push([6, 27, 7]);
  return r12;
}
function l10() {
  return w2({ type: "algorithmic", algorithm: "esriHSVAlgorithm", fromColor: [0, 0, 0], toColor: [255, 255, 255] });
}
function i8() {
  const r12 = [];
  for (let t6 = 0; t6 < 256; t6++) {
    const t7 = [];
    for (let r13 = 0; r13 < 3; r13++) t7.push(Math.round(255 * Math.random()));
    r12.push(t7);
  }
  return r12;
}
function a13() {
  return e5([[0, 38, 41, 54], [69, 79, 82, 90], [131, 156, 156, 156], [256, 253, 253, 241]], [0.268, 0.238, 0.495]);
}
function c10(r12) {
  let e9;
  switch (r12) {
    case "elevation":
      e9 = n6();
      break;
    case "gray":
      e9 = l10();
      break;
    case "hillshade":
      e9 = a13();
      break;
    case "ndvi":
      e9 = t3;
      break;
    case "ndvi2":
      e9 = s7();
      break;
    case "ndvi3":
      e9 = o7;
      break;
    case "random":
      e9 = i8();
  }
  return e9 ? (e9 = e9.map((r13, t6) => [t6, ...r13]), e9) : null;
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/ColormapFunction.js
var m10 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Colormap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = true;
  }
  _bindSourceRasters() {
    const o11 = this.sourceRasterInfos[0];
    if (o11.bandCount > 1) return { success: false, supportsGPU: false, error: "colormap-function: source data must be single band" };
    let { colormap: r12, colormapName: t6, colorRamp: s12, colorRampName: e9 } = this.functionArguments;
    if (!(r12 == null ? void 0 : r12.length)) if (s12) this.colorRamp = s12, r12 = B(s12, { interpolateAlpha: true });
    else if (e9) {
      const o12 = d(e9);
      o12 && (r12 = B(o12), this.colorRamp = p(o12));
    } else t6 && (r12 = c10(t6));
    if (!(r12 == null ? void 0 : r12.length)) return { success: false, supportsGPU: false, error: "colormap-function: missing colormap argument" };
    const p20 = this._getOutputPixelType(o11.pixelType);
    this.outputPixelType = p20.startsWith("f") ? "s32" : p20;
    const m17 = o11.clone();
    return m17.pixelType = this.outputPixelType, m17.colormap = r12, m17.bandCount = 1, this.rasterInfo = m17, { success: true, supportsGPU: true };
  }
  _processPixels(o11) {
    var _a;
    let r12 = (_a = o11.pixelBlocks) == null ? void 0 : _a[0];
    return !r12 || o3(r12.pixelType) || (r12 = r12.clone(), r12.clamp(this.outputPixelType)), r12;
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], m10.prototype, "functionName", void 0), r([m({ type: d7, json: { write: true, name: "rasterFunctionArguments" } })], m10.prototype, "functionArguments", void 0), r([m()], m10.prototype, "rasterArgumentNames", void 0), r([m()], m10.prototype, "isNoopProcess", void 0), r([m({ json: { write: true } })], m10.prototype, "indexedColormap", void 0), r([m()], m10.prototype, "colorRamp", void 0), m10 = r([a2("esri.layers.support.rasterFunctions.ColormapFunction")], m10);
var u10 = m10;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ColormapToRGBFunctionArguments.js
var t4;
var e6 = t4 = class extends p3 {
  clone() {
    return new t4({ raster: this.raster });
  }
};
e6 = t4 = r([a2("esri.layers.support.rasterFunctions.ColormapToRGBFunctionArguments")], e6);
var a14 = e6;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ColormapToRGBFunction.js
var a15 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "ColormapToRGB", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    var _a;
    const t6 = this.sourceRasterInfos[0];
    if (t6.bandCount > 1 || !((_a = t6.colormap) == null ? void 0 : _a.length)) return { success: false, supportsGPU: false, error: "colormap-to-rgb-function: source data must be single band with a colormap" };
    const o11 = t6.clone();
    o11.pixelType = this.outputPixelType = this._getOutputPixelType("u8"), this._removeStatsHistColormapVAT(o11), o11.bandCount = 3, o11.statistics = [{ min: 0, max: 255, avg: 100, stddev: 20 }, { min: 0, max: 255, avg: 100, stddev: 20 }, { min: 0, max: 255, avg: 100, stddev: 20 }], this.rasterInfo = o11;
    const r12 = [...t6.colormap].sort((t7, o12) => t7[0] - o12[0]), { indexedColormap: e9, offset: s12 } = a3({ colormap: r12 });
    return e9 ? (this.lookup = { indexedColormap: e9, offset: s12 }, { success: true, supportsGPU: a4(e9) }) : { success: false, supportsGPU: false, error: "colormap-to-rgb-function: the colormap is not supported" };
  }
  _processPixels(t6) {
    var _a;
    let o11 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (!o11 || !this.lookup) return o11;
    o11 = o11.clone();
    const r12 = o11.pixels[0], s12 = o11.mask ?? new Uint8Array(r12.length).fill(255), n18 = new Uint8Array(r12.length), i28 = new Uint8Array(r12.length), p20 = new Uint8Array(r12.length), { indexedColormap: a30, offset: u20 } = this.lookup, c34 = a30.length;
    for (let e9 = 0; e9 < r12.length; e9++) if (s12[e9]) {
      let t7 = 4 * (r12[e9] - u20);
      t7 < 0 || t7 > c34 - 4 ? s12[e9] = 0 : (n18[e9] = a30[t7++], i28[e9] = a30[t7++], p20[e9] = a30[t7++]);
    }
    return o11.pixels = [n18, i28, p20], o11.statistics = [new l3(0, 255), new l3(0, 255), new l3(0, 255)], o11.pixelType = this.outputPixelType, o11;
  }
  _getWebGLParameters() {
    return this.lookup;
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], a15.prototype, "functionName", void 0), r([m({ type: a14, json: { write: true, name: "rasterFunctionArguments" } })], a15.prototype, "functionArguments", void 0), r([m()], a15.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], a15.prototype, "lookup", void 0), a15 = r([a2("esri.layers.support.rasterFunctions.ColormapToRGBFunction")], a15);
var u11 = a15;

// node_modules/@arcgis/core/layers/support/rasterFunctions/CompositeBandFunctionArguments.js
var a16;
var c11 = a16 = class extends p3 {
  constructor() {
    super(...arguments), this.rasters = [];
  }
  writeRasters(r12, s12) {
    s12.rasters = r12.map((r13) => "number" == typeof r13 || "string" == typeof r13 ? r13 : r13.toJSON());
  }
  clone() {
    return new a16({ rasters: a(this.rasters) });
  }
};
r([m({ json: { write: true } })], c11.prototype, "rasters", void 0), r([r2("rasters")], c11.prototype, "writeRasters", null), c11 = a16 = r([a2("esri.layers.support.rasterFunctions.CompositeBandFunctionArguments")], c11);
var i9 = c11;

// node_modules/@arcgis/core/layers/support/rasterFunctions/CompositeBandFunction.js
var i10 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "CompositeBand", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t6 } = this, s12 = t6[0];
    this.outputPixelType = this._getOutputPixelType(s12.pixelType);
    const e9 = s12.clone();
    if (e9.attributeTable = null, e9.colormap = null, e9.pixelType = this.outputPixelType, e9.bandCount = t6.map(({ bandCount: t7 }) => t7).reduce((t7, s13) => t7 + s13), t6.every(({ statistics: t7 }) => null != t7 && t7.length)) {
      const s13 = [];
      t6.forEach(({ statistics: t7 }) => null != t7 && s13.push(...t7)), e9.statistics = s13;
    }
    if (t6.every(({ histograms: t7 }) => null != t7 && t7.length)) {
      const s13 = [];
      t6.forEach(({ histograms: t7 }) => null != t7 && s13.push(...t7)), e9.histograms = s13;
    }
    e9.multidimensionalInfo && e9.multidimensionalInfo.variables.forEach((s13) => {
      const e10 = t6.map((t7) => {
        var _a;
        return (_a = t7.multidimensionalInfo) == null ? void 0 : _a.variables.find(({ name: t8 }) => t8 === s13.name);
      }), r13 = e10.map((t7) => {
        var _a;
        return ((_a = t7 == null ? void 0 : t7.statistics) == null ? void 0 : _a.length) ? t7.statistics : null;
      }), o11 = e10.map((t7) => {
        var _a;
        return ((_a = t7 == null ? void 0 : t7.histograms) == null ? void 0 : _a.length) ? t7.histograms : null;
      });
      s13.statistics = r13.every((t7) => null != t7) ? r13.flat() : null, s13.histograms = o11.every((t7) => null != t7) ? o11.flat() : null;
    }), e9.bandCount > 1 && (e9.colormap = null, e9.attributeTable = null);
    const r12 = t6.every((t7) => {
      var _a;
      return (_a = t7.keyProperties.BandProperties) == null ? void 0 : _a.length;
    }) ? t6.flatMap((t7) => t7.keyProperties.BandProperties) : void 0;
    e9.keyProperties = { ...e9.keyProperties, BandProperties: r12 }, this.rasterInfo = e9;
    return { success: true, supportsGPU: e9.bandCount <= 3 };
  }
  _processPixels(t6) {
    const { pixelBlocks: s12 } = t6;
    if (!s12) return null;
    const e9 = s12 == null ? void 0 : s12[0];
    return null == e9 ? null : r4(s12);
  }
  _getWebGLParameters() {
    return { bandCount: this.rasterInfo.bandCount };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], i10.prototype, "functionName", void 0), r([m({ type: i9, json: { write: true, name: "rasterFunctionArguments" } })], i10.prototype, "functionArguments", void 0), r([m()], i10.prototype, "rasterArgumentNames", void 0), i10 = r([a2("esri.layers.support.rasterFunctions.CompositeBandFunction")], i10);
var a17 = i10;

// node_modules/@arcgis/core/layers/support/rasterFunctions/changeDetectionUtils.js
var n7 = new o({ 0: "difference", 1: "relative-difference", 2: "categorical", 3: "euclidean-distance", 4: "angle-difference", 5: "band-with-most-change" }, { useNumericKeys: true });
var s8 = new o({ 0: "all", 1: "changed", 2: "unchanged" }, { useNumericKeys: true });
function i11(e9, n18, s12, i28) {
  const [f7, h7] = e9, m17 = o3(s12) && !o3(f7.pixelType) && !o3(h7.pixelType), p20 = [f7.mask, h7.mask].filter((e10) => e10), u20 = g.combineBandMasks(p20), g7 = e9.map((e10) => e10.pixels[0]), { width: k4, height: x7 } = f7, b3 = g.createEmptyBand(s12, k4 * x7);
  switch (n18) {
    case "difference":
    case "relative-difference":
      o8({ bands: g7, mask: u20, outBand: b3, isRoundingNeeded: m17, isRelative: "relative-difference" === n18 });
      break;
    case "categorical":
      c12({ bands: g7, mask: u20, outBand: b3, ...i28 });
      break;
    case "euclidean-distance":
      l11({ pixels: e9.map((e10) => e10.pixels), mask: u20, outBand: b3 });
      break;
    case "angle-difference":
      r8({ pixels: e9.map((e10) => e10.pixels), mask: u20, outBand: b3 });
      break;
    case "band-with-most-change":
      d8({ pixels: e9.map((e10) => e10.pixels), mask: u20, outBand: b3 });
  }
  const B5 = new g({ width: k4, height: x7, pixels: [b3], pixelType: s12, mask: u20 });
  return B5.updateStatistics(), B5;
}
function o8(e9) {
  const { bands: [t6, a30], mask: n18, isRelative: s12, isRoundingNeeded: i28, outBand: o11 } = e9, c34 = t6.length;
  for (let l22 = 0; l22 < c34; l22++) if (!n18 || n18[l22]) {
    let e10 = t6[l22] - a30[l22];
    if (s12) {
      const n19 = Math.max(Math.abs(t6[l22]) - Math.abs(a30[l22]));
      e10 = n19 > 0 ? e10 / n19 : 0;
    }
    o11[l22] = i28 ? Math.round(e10) : e10;
  }
}
function c12(e9) {
  const { bands: [t6, a30], categoryIndexLookups: [n18, s12], classNames: [i28, o11], mask: c34, keepMethod: l22, outBand: r12 } = e9, d10 = t6.length, f7 = i28.length, h7 = o11.length, m17 = f7 * h7, p20 = m17 + 1, u20 = m17 + 2;
  for (let g7 = 0; g7 < d10; g7++) if (!c34 || c34[g7]) {
    const e10 = t6[g7], c35 = a30[g7], d11 = n18[e10], f8 = s12[c35], k4 = i28[d11], x7 = o11[f8];
    r12[g7] = null == d11 || null == f8 ? m17 : "changed" === l22 && k4 === x7 ? p20 : "unchanged" === l22 && k4 !== x7 ? u20 : d11 * h7 + f8;
  }
}
function l11(e9) {
  const { pixels: [t6, a30], mask: n18, outBand: s12 } = e9, i28 = t6[0].length, o11 = t6.length;
  for (let c34 = 0; c34 < i28; c34++) if (!n18 || n18[c34]) {
    let e10 = 0;
    for (let n19 = 0; n19 < o11; n19++) {
      const s13 = t6[n19][c34] - a30[n19][c34];
      e10 += s13 * s13;
    }
    s12[c34] = Math.sqrt(e10);
  }
}
function r8(e9) {
  const { pixels: [t6, a30], mask: n18, outBand: s12 } = e9, i28 = t6[0].length, o11 = t6.length;
  for (let c34 = 0; c34 < i28; c34++) if (!n18 || n18[c34]) {
    let e10 = 0, n19 = 0, i29 = 0;
    for (let s13 = 0; s13 < o11; s13++) {
      const o12 = t6[s13][c34], l23 = a30[s13][c34];
      e10 += o12 * l23, n19 += o12 * o12, i29 += l23 * l23;
    }
    const l22 = Math.sqrt(n19 * i29);
    s12[c34] = l22 ? Math.acos(e10 / l22) : 1.5707963267948966;
  }
}
function d8(e9) {
  const { pixels: [t6, a30], mask: n18, outBand: s12 } = e9, i28 = t6[0].length, o11 = t6.length;
  for (let c34 = 0; c34 < i28; c34++) if (!n18 || n18[c34]) {
    let e10 = 0, n19 = 0;
    for (let s13 = 0; s13 < o11; s13++) {
      const i29 = Math.abs(t6[s13][c34] - a30[s13][c34]);
      i29 > e10 && (e10 = i29, n19 = s13);
    }
    s12[c34] = n19;
  }
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/ComputeChangeFunctionArguments.js
var i12;
var c13 = i12 = class extends p3 {
  constructor() {
    super(...arguments), this.method = "difference", this.keepMethod = "all", this.raster2 = void 0;
  }
  get rasters() {
    return [this.raster, this.raster2];
  }
  clone() {
    return new i12({ raster: this.raster, raster2: this.raster2, method: this.method, keepMethod: this.keepMethod });
  }
};
r([r3(n7)], c13.prototype, "method", void 0), r([r3(s8)], c13.prototype, "keepMethod", void 0), r([m({ json: { write: true } })], c13.prototype, "raster2", void 0), r([m({ readOnly: true })], c13.prototype, "rasters", null), c13 = i12 = r([a2("esri.layers.support.rasterFunctions.ComputeChangeFunctionArguments")], c13);
var n8 = c13;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ComputeChangeFunction.js
var l12 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "ComputeChange", this.functionArguments = null, this.rasterArgumentNames = ["raster", "raster2"];
  }
  _bindSourceRasters() {
    const { method: e9 } = this.functionArguments, t6 = this.sourceRasterInfos[0].clone();
    if (this.outputPixelType = this._getOutputPixelType(t6.pixelType), t6.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(t6), "categorical" === e9) {
      const e10 = this.sourceRasterInfos.map((e11) => e11.attributeTable), s12 = this._getFieldNames(e10, "value"), r12 = e10.map((e11) => this._getClassFieldName(e11));
      if (null == s12[0] || null == s12[1] || null == r12[0] || null == r12[1]) return { success: false, supportsGPU: false, error: "both inputs must have proper attribute table with value and class fields" };
      this._updateAttributeTable(t6, s12, r12);
    }
    t6.bandCount = 1, this.rasterInfo = t6;
    return { success: true, supportsGPU: "difference" === e9 || "relative-difference" === e9 };
  }
  _processPixels(e9) {
    const { pixelBlocks: t6 } = e9;
    if (null == (t6 == null ? void 0 : t6[0]) || null == (t6 == null ? void 0 : t6[1])) return null;
    const { method: s12 } = this.functionArguments;
    return i11(t6, s12, this.outputPixelType, this._categoryConfig);
  }
  _getWebGLParameters() {
    const e9 = this.outputPixelType ?? "f32";
    let [t6, s12] = s3(e9);
    const r12 = o3(e9);
    return r12 && (t6 -= 1e-4, s12 += 1e-4), { method: this.functionArguments.method, domainRange: [t6, s12], isOutputRounded: r12 };
  }
  _updateAttributeTable(e9, t6, s12) {
    const n18 = this.sourceRasterInfos.map((e10) => e10.attributeTable), o11 = n18.map((e10, s13) => e10.features.map((e11) => e11.attributes[t6[s13]])), a30 = n18.map((e10, t7) => e10.features.map((e11) => e11.attributes[s12[t7]])), i28 = o11.map((e10) => {
      const t7 = [];
      return e10.forEach((e11, s13) => t7[e11] = s13), t7;
    }), { keepMethod: u20 } = this.functionArguments;
    this._categoryConfig = { categoryIndexLookups: i28, classNames: a30, keepMethod: u20 };
    const l22 = n18[0].clone();
    l22.fields = [new y({ name: "OID", type: "oid" }), new y({ name: "Value", type: "integer" }), new y({ name: "ClassName", type: "string" }), new y({ name: "Class_From", type: "string" }), new y({ name: "Class_To", type: "string" })];
    const m17 = this._getFieldNames(n18, "red"), p20 = this._getFieldNames(n18, "green"), c34 = this._getFieldNames(n18, "blue"), d10 = [], g7 = 2 === m17.length && 2 === p20.length && 2 === c34.length;
    g7 && (d10.push(...n18.map((e10, t7) => e10.features.map((e11) => [e11.attributes[m17[t7]], e11.attributes[p20[t7]], e11.attributes[c34[t7]]]))), l22.fields.push(new y({ name: "Red", type: "integer" }), new y({ name: "Green", type: "integer" }), new y({ name: "Blue", type: "integer" })));
    const h7 = l22.features[0].clone();
    h7.geometry = null;
    const f7 = [], [y5, C3] = o11.map((e10) => e10.length);
    let b3 = 1;
    for (let r12 = 0; r12 < y5; r12++) {
      const e10 = a30[0][r12];
      for (let t7 = 0; t7 < C3; t7++) {
        const s13 = a30[1][t7];
        if ("changed" === u20 && e10 === s13 || "unchanged" === u20 && e10 !== s13) continue;
        const n19 = h7.clone();
        n19.attributes = { OID: b3++, Value: r12 * C3 + t7, ClassName: e10 === s13 ? e10 : `${e10} -> ${s13}`, Class_From: e10, Class_To: s13 }, g7 && (n19.attributes.Red = d10[0][r12][0] + d10[1][t7][0] >> 1, n19.attributes.Green = d10[0][r12][1] + d10[1][t7][1] >> 1, n19.attributes.Blue = d10[0][r12][2] + d10[1][t7][2] >> 1), f7.push(n19);
      }
    }
    if ("changed" === u20) {
      const e10 = h7.clone();
      e10.attributes = { OID: b3++, Value: y5 * C3 + 1, ClassName: "No Change", Class_From: "Same", Class_To: "Same" }, f7.push(e10);
    } else if ("unchanged" === u20) {
      const e10 = h7.clone();
      e10.attributes = { OID: b3++, Value: y5 * C3 + 2, ClassName: "Changed", Class_From: "Any", Class_To: "Any" }, f7.push(e10);
    }
    l22.features = f7, e9.attributeTable = l22;
  }
  _getFieldNames(e9, t6) {
    return e9.map(({ fields: e10 }) => {
      var _a;
      return (_a = e10.find((e11) => e11.name.toLowerCase() === t6)) == null ? void 0 : _a.name;
    }).filter((e10) => e10);
  }
  _getClassFieldName(e9) {
    const t6 = e9.fields.find((e10) => "string" === e10.type && e10.name.toLowerCase().startsWith("class")) ?? e9.fields.find((e10) => "string" === e10.type && e10.name.toLowerCase().includes("class") || e10.name.toLowerCase().includes("type") || e10.name.toLowerCase().includes("name")) ?? e9.fields.find((e10) => "string" === e10.type);
    return t6 == null ? void 0 : t6.name;
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], l12.prototype, "functionName", void 0), r([m({ type: n8, json: { write: true, name: "rasterFunctionArguments" } })], l12.prototype, "functionArguments", void 0), r([m()], l12.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], l12.prototype, "_categoryConfig", void 0), l12 = r([a2("esri.layers.support.rasterFunctions.ComputeChangeFunction")], l12);
var m11 = l12;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ContrastBrightnessFunctionArguments.js
var e7;
var n9 = e7 = class extends p3 {
  constructor() {
    super(...arguments), this.contrastOffset = 0, this.brightnessOffset = 0;
  }
  clone() {
    return new e7({ contrastOffset: this.contrastOffset, brightnessOffset: this.brightnessOffset, raster: this.raster });
  }
};
r([m({ json: { write: true } })], n9.prototype, "contrastOffset", void 0), r([m({ json: { write: true } })], n9.prototype, "brightnessOffset", void 0), n9 = e7 = r([a2("esri.layers.support.rasterFunctions.ContrastBrightnessFunctionArguments")], n9);
var i13 = n9;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ContrastBrightnessFunction.js
var u12 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "ContrastBrightness", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t6 } = this, s12 = t6[0];
    if ("u8" !== s12.pixelType) return { success: false, supportsGPU: false, error: "Only unsigned 8 bit raster is supported by ContrastBrightness function." };
    this.outputPixelType = this._getOutputPixelType("u8");
    const r12 = s12.clone();
    this._removeStatsHistColormapVAT(r12), this.rasterInfo = r12;
    const { contrastOffset: o11, brightnessOffset: e9 } = this.functionArguments;
    return this.lookup = l5(o11, e9), { success: true, supportsGPU: true };
  }
  _processPixels(t6) {
    var _a;
    const s12 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    return null == s12 ? null : f2(s12, { lut: s12.pixels.map(() => this.lookup), offset: 0, outputPixelType: "u8" });
  }
  _getWebGLParameters() {
    const { contrastOffset: t6, brightnessOffset: s12 } = this.functionArguments;
    return { contrastOffset: t6, brightnessOffset: s12 };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], u12.prototype, "functionName", void 0), r([m({ type: i13, json: { write: true, name: "rasterFunctionArguments" } })], u12.prototype, "functionArguments", void 0), r([m()], u12.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], u12.prototype, "lookup", void 0), u12 = r([a2("esri.layers.support.rasterFunctions.ContrastBrightnessFunction")], u12);
var p11 = u12;

// node_modules/@arcgis/core/layers/support/rasterFunctions/mirror.js
function o9(o11, t6, f7, r12, l22) {
  const e9 = Math.floor(r12 / 2);
  for (let c34 = 0; c34 < e9; c34++) for (let r13 = 0; r13 < t6; r13++) o11[c34 * t6 + r13] = o11[(l22 - 1 - c34) * t6 + r13], o11[(f7 - 1 - c34) * t6 + r13] = o11[(f7 - l22 + c34) * t6 + r13];
  const n18 = Math.floor(l22 / 2);
  for (let c34 = 0; c34 < f7; c34++) {
    const f8 = c34 * t6;
    for (let r13 = 0; r13 < n18; r13++) o11[f8 + r13] = o11[f8 + l22 - 1 - r13], o11[f8 + t6 - r13 - 1] = o11[f8 + t6 + r13 - l22];
  }
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/convolutionUtils.js
var l13 = /* @__PURE__ */ new Map();
function o10(e9) {
  const t6 = Math.sqrt(e9.length), n18 = e9.slice(0, t6), l22 = [1];
  for (let o11 = 1; o11 < t6; o11++) {
    let n19 = null;
    for (let l23 = 0; l23 < t6; l23++) {
      const r12 = e9[l23 + o11 * t6], s12 = e9[l23];
      if (null == n19) if (0 === s12) {
        if (r12) return { separable: false, row: null, col: null };
      } else n19 = r12 / s12;
      else if (r12 / s12 !== n19) return { separable: false, row: null, col: null };
    }
    if (null == n19) return { separable: false, row: null, col: null };
    l22.push(n19);
  }
  return { separable: true, row: n18, col: l22 };
}
function r9(e9, t6, n18, l22, o11, r12, s12) {
  const i28 = new Float32Array(t6 * n18), a30 = r12.length, h7 = s12 ? 0 : l22, c34 = s12 ? l22 : 0, p20 = s12 ? 1 : t6;
  for (let u20 = h7; u20 < n18 - h7; u20++) {
    const n19 = u20 * t6;
    for (let s13 = c34; s13 < t6 - c34; s13++) {
      if (o11 && !o11[n19 + s13]) continue;
      let t7 = 0;
      for (let o12 = 0; o12 < a30; o12++) t7 += e9[n19 + s13 + (o12 - l22) * p20] * r12[o12];
      i28[n19 + s13] = t7;
    }
  }
  return i28;
}
function s9(e9, t6, n18, l22, o11, r12, s12) {
  const i28 = new Float32Array(t6 * n18), a30 = Math.floor(l22 / 2), h7 = Math.floor(o11 / 2);
  for (let c34 = a30; c34 < n18 - a30; c34++) {
    const n19 = c34 * t6;
    for (let c35 = h7; c35 < t6 - h7; c35++) {
      if (r12 && !r12[n19 + c35]) continue;
      let p20 = 0;
      for (let r13 = 0; r13 < l22; r13++) for (let l23 = 0; l23 < o11; l23++) p20 += e9[n19 + c35 + (r13 - a30) * t6 + l23 - h7] * s12[r13 * o11 + l23];
      i28[n19 + c35] = p20;
    }
  }
  return i28;
}
function i14(t6, l22, o11 = true) {
  const { pixels: r12, width: i28, height: a30, pixelType: h7, mask: c34 } = t6, p20 = r12.length, u20 = [], { kernel: f7, rows: g7, cols: m17 } = l22;
  for (let e9 = 0; e9 < p20; e9++) {
    const t7 = s9(r12[e9], i28, a30, g7, m17, c34, f7);
    o11 && o9(t7, i28, a30, g7, m17), u20.push(t7);
  }
  return new g({ width: i28, height: a30, pixelType: h7, pixels: u20, mask: c34 });
}
function a18(t6, l22, o11, s12 = true) {
  const { pixels: i28, width: a30, height: h7, pixelType: c34, mask: p20 } = t6, u20 = i28.length, f7 = [], g7 = l22.length, m17 = o11.length, x7 = Math.floor(g7 / 2), w7 = Math.floor(m17 / 2);
  for (let e9 = 0; e9 < u20; e9++) {
    let t7 = r9(i28[e9], a30, h7, x7, p20, l22, true);
    t7 = r9(t7, a30, h7, w7, p20, o11, false), s12 && o9(t7, a30, h7, g7, m17), f7.push(t7);
  }
  return new g({ width: a30, height: h7, pixelType: c34, pixels: f7, mask: p20 });
}
function h5(e9, t6) {
  const n18 = o10(t6.kernel), l22 = false !== t6.mirrorEdges, r12 = n18.separable ? a18(e9, n18.row, n18.col, l22) : i14(e9, t6, l22), { outputPixelType: s12 } = t6;
  return s12 && r12.clamp(s12), r12;
}
l13.set(D2.none, [0, 0, 0, 0, 1, 0, 0, 0, 0]), l13.set(D2.lineDetectionHorizontal, [-1, -1, -1, 2, 2, 2, -1, -1, -1]), l13.set(D2.lineDetectionVertical, [-1, 2, -1, -1, 2, -1, -1, 2, -1]), l13.set(D2.lineDetectionLeftDiagonal, [2, -1, -1, -1, 2, -1, -1, -1, 2]), l13.set(D2.lineDetectionRightDiagonal, [-1, -1, 2, -1, 2, -1, 2, -1, -1]), l13.set(D2.gradientNorth, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), l13.set(D2.gradientWest, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), l13.set(D2.gradientEast, [1, 0, -1, 2, 0, -2, 1, 0, -1]), l13.set(D2.gradientSouth, [1, 2, 1, 0, 0, 0, -1, -2, -1]), l13.set(D2.gradientNorthEast, [0, -1, -2, 1, 0, -1, 2, 1, 0]), l13.set(D2.gradientNorthWest, [-2, -1, 0, -1, 0, 1, 0, 1, 2]), l13.set(D2.smoothArithmeticMean, [0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111]), l13.set(D2.smoothing3x3, [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625]), l13.set(D2.smoothing5x5, [1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 12, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1]), l13.set(D2.sharpening3x3, [-1, -1, -1, -1, 9, -1, -1, -1, -1]), l13.set(D2.sharpening5x5, [-1, -3, -4, -3, -1, -3, 0, 6, 0, -3, -4, 6, 21, 6, -4, -3, 0, 6, 0, -3, -1, -3, -4, -3, -1]), l13.set(D2.laplacian3x3, [0, -1, 0, -1, 4, -1, 0, -1, 0]), l13.set(D2.laplacian5x5, [0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 17, -2, -1, 0, -1, -2, -1, 0, 0, 0, -1, 0, 0]), l13.set(D2.sobelHorizontal, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), l13.set(D2.sobelVertical, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), l13.set(D2.sharpen, [0, -0.25, 0, -0.25, 2, -0.25, 0, -0.25, 0]), l13.set(D2.sharpen2, [-0.25, -0.25, -0.25, -0.25, 3, -0.25, -0.25, -0.25, -0.25]), l13.set(D2.pointSpread, [-0.627, 0.352, -0.627, 0.352, 2.923, 0.352, -0.627, 0.352, -0.627]);

// node_modules/@arcgis/core/layers/support/rasterFunctions/ConvolutionFunctionArguments.js
var p12;
var c14 = p12 = class extends p3 {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.kernel = [0, 0, 0, 0, 1, 0, 0, 0, 0];
  }
  set convolutionType(o11) {
    this._set("convolutionType", o11);
    const t6 = l13.get(o11);
    if (!t6 || o11 === D2.userDefined || o11 === D2.none) return;
    const s12 = Math.sqrt(t6.length);
    this._set("kernel", t6), this._set("cols", s12), this._set("rows", s12);
  }
  clone() {
    return new p12({ cols: this.cols, rows: this.rows, kernel: [...this.kernel], convolutionType: this.convolutionType, raster: a(this.raster) });
  }
};
r([m({ json: { type: Number, write: true } })], c14.prototype, "rows", void 0), r([m({ json: { type: Number, write: true } })], c14.prototype, "cols", void 0), r([m({ json: { name: "type", type: Number, write: true } })], c14.prototype, "convolutionType", null), r([m({ json: { type: [Number], write: true } })], c14.prototype, "kernel", void 0), c14 = p12 = r([a2("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")], c14);
var l14 = c14;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ConvolutionFunction.js
var c15 = 25;
var l15 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Convolution", this.rasterArgumentNames = ["raster"];
  }
  get _normalizedKernel() {
    const { kernel: t6, convolutionType: e9 } = this.functionArguments, o11 = t6.reduce((t7, e10) => t7 + e10);
    return -1 === e9 || 0 === o11 || 1 === o11 ? t6 : t6.map((t7) => t7 / o11);
  }
  _bindSourceRasters() {
    const { convolutionType: t6, rows: e9, cols: o11, kernel: n18 } = this.functionArguments;
    if (!Object.values(D2).includes(t6)) return { success: false, supportsGPU: false, error: `convolution-function: the specified kernel type is not supported ${t6}` };
    if (t6 !== D2.none && e9 * o11 !== n18.length) return { success: false, supportsGPU: false, error: "convolution-function: the specified rows and cols do not match the length of the kernel" };
    const r12 = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(r12.pixelType);
    const i28 = r12.clone();
    i28.pixelType = this.outputPixelType;
    const u20 = [D2.none, D2.sharpen, D2.sharpen2, D2.sharpening3x3, D2.sharpening5x5];
    (-1 === t6 || "u8" !== this.outputPixelType && !u20.includes(t6)) && (i28.statistics = null, i28.histograms = null), i28.colormap = null, i28.attributeTable = null, this.rasterInfo = i28;
    return { success: true, supportsGPU: n18.length <= c15 };
  }
  _processPixels(t6) {
    var _a;
    const e9 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == e9 || this.functionArguments.convolutionType === D2.none) return e9;
    const { rows: o11, cols: n18 } = this.functionArguments, { _normalizedKernel: r12 } = this;
    return h5(e9, { kernel: r12, rows: o11, cols: n18, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const t6 = new Float32Array(c15);
    return t6.set(this._normalizedKernel), { kernelRows: this.functionArguments.rows, kernelCols: this.functionArguments.cols, kernel: t6, clampRange: s3(this.outputPixelType) };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], l15.prototype, "functionName", void 0), r([m({ type: l14, json: { write: true, name: "rasterFunctionArguments" } })], l15.prototype, "functionArguments", void 0), r([m()], l15.prototype, "rasterArgumentNames", void 0), r([m()], l15.prototype, "_normalizedKernel", null), l15 = r([a2("esri.layers.support.rasterFunctions.ConvolutionFunction")], l15);
var p13 = l15;

// node_modules/@arcgis/core/layers/support/rasterFunctions/CurvatureFunctionArguments.js
var c16;
var u13 = new o({ 0: "standard", 1: "planform", 2: "profile" }, { useNumericKeys: true });
var n10 = c16 = class extends p3 {
  constructor() {
    super(...arguments), this.curvatureType = "standard", this.zFactor = 1;
  }
  readCurvatureType(r12, e9) {
    return u13.fromJSON(e9.type ?? e9.curvatureType ?? 0);
  }
  clone() {
    return new c16({ curvatureType: this.curvatureType, zFactor: this.zFactor, raster: this.raster });
  }
};
r([m({ json: { write: { target: "type" } } }), r3(u13)], n10.prototype, "curvatureType", void 0), r([o2("curvatureType", ["type", "curvatureType"])], n10.prototype, "readCurvatureType", null), r([m({ type: Number, json: { write: true } })], n10.prototype, "zFactor", void 0), n10 = c16 = r([a2("esri.layers.support.rasterFunctions.CurvatureFunctionArguments")], n10);
var i15 = n10;

// node_modules/@arcgis/core/layers/support/rasterFunctions/CurvatureFunction.js
var u14 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Curvature", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    var _a;
    this.outputPixelType = this._getOutputPixelType("f32");
    const t6 = this.sourceRasterInfos[0].clone();
    return t6.pixelType = this.outputPixelType, t6.bandCount = 1, this._removeStatsHistColormapVAT(t6), this.rasterInfo = t6, this.isGCS = ((_a = t6.spatialReference) == null ? void 0 : _a.isGeographic) ?? false, { success: true, supportsGPU: true };
  }
  _processPixels(t6) {
    var _a;
    const r12 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == r12) return null;
    const { zFactor: e9, curvatureType: s12 } = this.functionArguments, { extent: o11, primaryPixelSizes: u20 } = t6, c34 = u20 == null ? void 0 : u20[0], a30 = c34 ?? (o11 ? { x: o11.width / r12.width, y: o11.height / r12.height } : { x: 1, y: 1 }), p20 = this.isGCS && e9 >= 1 ? e9 * n2 : e9;
    return f3(r12, { zFactor: p20, curvatureType: s12, resolution: a30 });
  }
  _getWebGLParameters() {
    const { zFactor: t6, curvatureType: r12 } = this.functionArguments;
    return { curvatureType: r12, zFactor: this.isGCS && t6 >= 1 ? t6 * n2 : t6 };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], u14.prototype, "functionName", void 0), r([m({ type: i15, json: { write: true, name: "rasterFunctionArguments" } })], u14.prototype, "functionArguments", void 0), r([m()], u14.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], u14.prototype, "isGCS", void 0), u14 = r([a2("esri.layers.support.rasterFunctions.CurvatureFunction")], u14);
var c17 = u14;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ExtractBandFunctionArguments.js
var a19;
var i16 = a19 = class extends p3 {
  constructor() {
    super(...arguments), this.bandIds = [], this.bandNames = [], this.bandWavelengths = [], this.missingBandAction = l4.bestMatch;
  }
  clone() {
    var _a, _b, _c;
    return new a19({ bandIds: (_a = this.bandIds) == null ? void 0 : _a.slice(), bandNames: (_b = this.bandNames) == null ? void 0 : _b.slice(), bandWavelengths: (_c = this.bandWavelengths) == null ? void 0 : _c.slice(), missingBandAction: this.missingBandAction, method: this.method, wavelengthMatchTolerance: this.wavelengthMatchTolerance });
  }
};
r([m({ json: { write: true } })], i16.prototype, "bandIds", void 0), r([m({ json: { write: true } })], i16.prototype, "bandNames", void 0), r([m({ json: { write: true } })], i16.prototype, "bandWavelengths", void 0), r([r3({ 0: "name", 1: "wavelength", 2: "id" })], i16.prototype, "method", void 0), r([m({ json: { write: true } })], i16.prototype, "missingBandAction", void 0), r([m({ json: { write: true } })], i16.prototype, "wavelengthMatchTolerance", void 0), i16 = a19 = r([a2("esri.layers.support.rasterFunctions.ExtractBandFunctionArguments")], i16);
var c18 = i16;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ExtractBandFunction.js
var i17 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "ExtractBand", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    var _a;
    const { functionArguments: t6, sourceRasterInfos: n18 } = this, e9 = n18[0], { method: s12, bandNames: r12, bandWavelengths: o11, bandIds: i28, missingBandAction: l22 } = t6, h7 = (r12 == null ? void 0 : r12.length) && ("name" === s12 || "id" !== s12 && !(i28 == null ? void 0 : i28.length)), d10 = (o11 == null ? void 0 : o11.length) && ("wavelength" === s12 || "id" !== s12 && !(i28 == null ? void 0 : i28.length)), g7 = l22 === l4.fail, p20 = h7 ? u15(e9, r12) : d10 ? m12(e9, o11, this.functionArguments, g7) : c19(e9, i28, g7);
    if (null == p20) {
      return { success: false, supportsGPU: false, error: `extract-band-function: Invalid ${h7 ? "band names" : d10 ? "band wavelengths" : "band ids"} for the imagery data source` };
    }
    this.functionArguments.bandIds = p20, this.functionArguments.method = "id", this.outputPixelType = this._getOutputPixelType("f32");
    const f7 = e9.clone();
    f7.pixelType = this.outputPixelType, f7.bandCount = p20.length;
    const { statistics: b3, histograms: x7 } = f7;
    null != b3 && b3.length && (f7.statistics = p20.map((t7) => b3[t7] || b3[b3.length - 1])), null != x7 && x7.length && (f7.histograms = p20.map((t7) => x7[t7] || x7[x7.length - 1])), f7.multidimensionalInfo && f7.multidimensionalInfo.variables.forEach((t7) => {
      const { statistics: n19, histograms: e10 } = t7;
      null != n19 && n19.length && (t7.statistics = p20.map((t8) => n19[t8] || n19[n19.length - 1])), null != e10 && e10.length && (t7.histograms = p20.map((t8) => e10[t8] || e10[e10.length - 1]));
    });
    let I3 = (_a = f7.keyProperties) == null ? void 0 : _a.BandProperties;
    (I3 == null ? void 0 : I3.length) && (I3 = p20.map((t7) => t7 >= I3.length ? I3[I3.length - 1] : I3[t7]), f7.keyProperties = { ...f7.keyProperties, BandProperties: I3 }), this.rasterInfo = f7;
    return { success: true, supportsGPU: f7.bandCount <= 3 };
  }
  _processPixels(t6) {
    var _a;
    const n18 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == n18) return null;
    const e9 = n18.pixels.length, s12 = this.functionArguments.bandIds.map((t7) => t7 >= e9 ? e9 - 1 : t7);
    return n18.extractBands(s12);
  }
  _getWebGLParameters() {
    let t6;
    if (this.isInputBandIdsSwizzled) t6 = this.swizzledBandSelection.length ? this.swizzledBandSelection : [0, 1, 2];
    else {
      t6 = [...this.functionArguments.bandIds], 0 === t6.length ? t6 = [0, 1, 2] : t6.length < 3 && (t6[1] = t6[1] ?? t6[0], t6[2] = t6[2] ?? t6[1]);
      for (let n18 = 0; n18 < 3; n18++) t6[n18] = Math.min(t6[n18], 2);
    }
    return { bandIndexMat3: c6(t6) };
  }
  _getInputBandIds(t6) {
    const n18 = t6.length;
    return this.functionArguments.bandIds.map((t7) => t7 >= n18 ? n18 - 1 : t7).map((n19) => t6[n19]);
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], i17.prototype, "functionName", void 0), r([m({ type: c18, json: { write: true, name: "rasterFunctionArguments" } })], i17.prototype, "functionArguments", void 0), r([m()], i17.prototype, "rasterArgumentNames", void 0), i17 = r([a2("esri.layers.support.rasterFunctions.ExtractBandFunction")], i17);
var l16 = i17;
function u15(t6, n18) {
  const e9 = t6.bandInfos.map(({ name: t7 }) => t7.toLowerCase()), s12 = [];
  for (let r12 = 0; r12 < n18.length; r12++) {
    const t7 = n18[r12].toLowerCase();
    let o11 = e9.indexOf(t7);
    if (-1 === o11 && "nearinfrared" === t7 && (o11 = e9.findIndex((t8) => t8.startsWith("nearinfrared_1")), -1 === o11 && (o11 = e9.findIndex((t8) => t8.startsWith("nearinfrared")))), -1 === o11) return null;
    s12.push(o11);
  }
  return s12;
}
function c19(t6, n18, e9) {
  const { bandCount: s12 } = t6;
  return !(n18 == null ? void 0 : n18.length) || e9 && n18.some((t7) => t7 < 0 || t7 >= s12) ? null : n18;
}
function m12(t6, n18, { wavelengthMatchTolerance: e9 }, s12) {
  const { bandInfos: r12 } = t6, o11 = [];
  for (let i28 = 0; i28 < r12.length; i28++) {
    const { minWavelength: t7, maxWavelength: n19 } = r12[i28];
    if (!t7 || !n19) return null;
    o11.push({ minWavelength: t7, maxWavelength: n19 });
  }
  const a30 = [];
  for (let i28 = 0; i28 < n18.length; i28++) {
    const t7 = n18[i28];
    let r13 = false, l22 = -1, u20 = Number.MAX_VALUE;
    for (let n19 = 0; n19 < o11.length; n19++) {
      const e10 = o11[n19], s13 = t7 >= e10.minWavelength && t7 <= e10.maxWavelength, a31 = Math.abs(t7 - (e10.minWavelength + e10.maxWavelength) / 2);
      s13 ? a31 < u20 && (r13 = true, l22 = n19, u20 = a31) : !r13 && a31 < u20 && (l22 = n19, u20 = a31);
    }
    if (!r13 && e9 && u20 < e9 && (r13 = true), !r13 && s12) return null;
    a30.push(l22);
  }
  return a30;
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/conversionUtils.js
function i18(i28, s12, a30) {
  const { pixels: l22, width: n18, height: r12, mask: o11, bandMasks: h7 } = i28, p20 = n18 * r12, m17 = (h7 == null ? void 0 : h7.length) ? g.combineBandMasks(h7) : o11, f7 = Math.min(s12.length, l22.length), c34 = a30.startsWith("f"), d10 = !c34 && a30 !== i28.pixelType, [x7, g7] = s3(a30), k4 = g.createEmptyBand(a30, p20);
  for (let t6 = 0; t6 < r12; t6++) {
    let e9 = t6 * n18;
    for (let t7 = 0; t7 < n18; t7++, e9++) if (!m17 || m17[e9]) {
      let t8 = 0;
      for (let i29 = 0; i29 < f7; i29++) t8 += s12[i29] * l22[i29][e9];
      c34 || (t8 = Math.round(t8), d10 && (t8 = t8 > g7 ? g7 : t8 < x7 ? x7 : t8)), k4[e9] = t8;
    }
  }
  const u20 = new g({ width: n18, height: r12, pixels: [k4], pixelType: a30, mask: m17 });
  return u20.updateStatistics(), u20;
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/GrayscaleFunctionArguments.js
var t5;
var a20 = t5 = class extends p3 {
  clone() {
    return new t5({ conversionParameters: [...this.conversionParameters], raster: this.raster });
  }
};
r([m({ type: [Number], json: { write: true } })], a20.prototype, "conversionParameters", void 0), a20 = t5 = r([a2("esri.layers.support.rasterFunctions.GrayscaleFunctionArguments")], a20);
var c20 = a20;

// node_modules/@arcgis/core/layers/support/rasterFunctions/GrayscaleFunction.js
var i19 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Grayscale", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  get _normalizedWeights() {
    const { conversionParameters: t6 } = this.functionArguments, e9 = t6.reduce((t7, e10) => t7 + e10);
    return t6.map((t7) => t7 / e9);
  }
  _bindSourceRasters() {
    const { conversionParameters: t6 } = this.functionArguments;
    if (!(t6 == null ? void 0 : t6.length)) return { success: false, supportsGPU: false, error: "missing valid conversion parameters." };
    const e9 = this.sourceRasterInfos[0].clone();
    this.outputPixelType = this._getOutputPixelType(e9.pixelType), e9.pixelType = this.outputPixelType;
    const s12 = 3 === t6.length || 3 === e9.bandCount && t6.length > 3;
    return e9.bandCount = 1, this._removeStatsHistColormapVAT(e9), this.rasterInfo = e9, { success: true, supportsGPU: s12 };
  }
  _processPixels(t6) {
    var _a;
    const e9 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    return null == e9 ? null : i18(e9, this._normalizedWeights, this.outputPixelType);
  }
  _getWebGLParameters() {
    return { weights: this._normalizedWeights };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], i19.prototype, "functionName", void 0), r([m({ type: c20, json: { write: true, name: "rasterFunctionArguments" } })], i19.prototype, "functionArguments", void 0), r([m()], i19.prototype, "rasterArgumentNames", void 0), r([m()], i19.prototype, "_normalizedWeights", null), i19 = r([a2("esri.layers.support.rasterFunctions.GrayscaleFunction")], i19);
var u16 = i19;

// node_modules/@arcgis/core/layers/support/rasterFunctions/HillshadeFunctionArguments.js
var p14;
var a21 = new o({ 0: "traditional", 1: "multi-directional" }, { useNumericKeys: true });
var c21 = new o({ 1: "degree", 2: "percent-rise", 3: "scaled" }, { useNumericKeys: true });
var l17 = p14 = class extends p3 {
  constructor() {
    super(...arguments), this.altitude = 45, this.azimuth = 315, this.hillshadeType = "traditional", this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.slopeType = "degree", this.zFactor = 1, this.removeEdgeEffect = false;
  }
  clone() {
    return new p14({ hillshadeType: this.hillshadeType, altitude: this.altitude, azimuth: this.azimuth, zFactor: this.zFactor, slopeType: this.slopeType, pixelSizeFactor: this.pixelSizeFactor, pixelSizePower: this.pixelSizePower, removeEdgeEffect: this.removeEdgeEffect, raster: this.raster });
  }
};
r([m({ type: Number, json: { write: true } })], l17.prototype, "altitude", void 0), r([m({ type: Number, json: { write: true } })], l17.prototype, "azimuth", void 0), r([m(), r3(a21)], l17.prototype, "hillshadeType", void 0), r([m({ type: Number, json: { write: true, name: "psPower" } })], l17.prototype, "pixelSizePower", void 0), r([m({ type: Number, json: { write: true, name: "psZFactor" } })], l17.prototype, "pixelSizeFactor", void 0), r([m(), r3(c21)], l17.prototype, "slopeType", void 0), r([m({ type: Number, json: { write: true } })], l17.prototype, "zFactor", void 0), r([m({ type: Boolean, json: { write: true } })], l17.prototype, "removeEdgeEffect", void 0), l17 = p14 = r([a2("esri.layers.support.rasterFunctions.HillshadeFunctionArguments")], l17);
var m13 = l17;

// node_modules/@arcgis/core/layers/support/rasterFunctions/HillshadeFunction.js
var c22 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Hillshade", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    var _a;
    const t6 = this.sourceRasterInfos[0];
    if (t6.bandCount > 1) return { success: false, supportsGPU: false, error: "hillshade-function: source data must be single band" };
    this.outputPixelType = this._getOutputPixelType("u8");
    const s12 = t6.clone();
    return this._removeStatsHistColormapVAT(s12), s12.pixelType = this.outputPixelType, s12.bandCount = 1, s12.statistics = [{ min: 0, max: 255, avg: 60, stddev: 10 }], this.rasterInfo = s12, this.isGCS = ((_a = s12.spatialReference) == null ? void 0 : _a.isGeographic) ?? false, { success: true, supportsGPU: true };
  }
  _processPixels(t6) {
    var _a;
    const s12 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (!s12) return null;
    const { extent: e9, primaryPixelSizes: r12 } = t6, o11 = r12 == null ? void 0 : r12[0], i28 = o11 ?? (e9 ? { x: e9.width / s12.width, y: e9.height / s12.height } : { x: 1, y: 1 }), p20 = d3(this.functionArguments, i28, this.isGCS), a30 = r5(s12, p20);
    return a30.pixelType = this.outputPixelType, a30;
  }
  _getWebGLParameters() {
    const t6 = d3(this.functionArguments, { x: 1, y: 1 }, this.isGCS), s12 = a6(t6), { slopeType: e9, zFactor: o11, pixelSizeFactor: i28, pixelSizePower: u20 } = this.functionArguments, c34 = "scaled" === e9, l22 = o3(this.outputPixelType);
    return { ...s12, zFactor: o11, gcsFactor: this.isGCS ? n2 : 1, pixelSizeFactor: c34 ? i28 : 0, pixelSizePower: c34 ? u20 : 0, isOutputRounded: l22 };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], c22.prototype, "functionName", void 0), r([m({ type: m13, json: { write: true, name: "rasterFunctionArguments" } })], c22.prototype, "functionArguments", void 0), r([m()], c22.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], c22.prototype, "isGCS", void 0), c22 = r([a2("esri.layers.support.rasterFunctions.HillshadeFunction")], c22);
var l18 = c22;

// node_modules/@arcgis/core/layers/support/rasterFunctions/LocalFunctionArguments.js
var i20;
var a22 = i20 = class extends p3 {
  constructor() {
    super(...arguments), this.rasters = [], this.processAsMultiband = true;
  }
  writeRasters(r12, s12) {
    s12.rasters = r12.map((r13) => "number" == typeof r13 || "string" == typeof r13 ? r13 : r13.toJSON());
  }
  clone() {
    return new i20({ operation: this.operation, processAsMultiband: this.processAsMultiband, rasters: a(this.rasters) });
  }
};
r([m({ json: { write: true } })], a22.prototype, "operation", void 0), r([m({ json: { write: true } })], a22.prototype, "rasters", void 0), r([r2("rasters")], a22.prototype, "writeRasters", null), r([m({ json: { write: true } })], a22.prototype, "processAsMultiband", void 0), a22 = i20 = r([a2("esri.layers.support.rasterFunctions.LocalFunctionArguments")], a22);
var c23 = a22;

// node_modules/@arcgis/core/layers/support/rasterFunctions/LocalFunction.js
var m14 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Local", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t6 } = this, s12 = t6[0], { bandCount: e9 } = s12, { processAsMultiband: o11 } = this.functionArguments;
    if (t6.some((t7) => t7.bandCount !== e9)) return { success: false, supportsGPU: false, error: "local-function: input rasters do not have same band count" };
    const { operation: n18, rasters: r12 } = this.functionArguments, i28 = c4[n18];
    if (!(999 === i28 || r12.length === i28 || r12.length <= 1 && 1 === i28)) return { success: false, supportsGPU: false, error: `local-function: the length of functionArguments.rasters does not match operation's requirement: ${i28}` };
    const a30 = s12.clone();
    a30.bandCount = 999 !== i28 || o11 ? e9 : 1, this._removeStatsHistColormapVAT(a30), this._updateStatistics(a30), this._updatePixelType(a30), this.rasterInfo = a30;
    return { success: true, supportsGPU: 1 === a30.bandCount && i28 <= 3 };
  }
  _processPixels(t6) {
    const { pixelBlocks: s12 } = t6;
    return null == s12 || s12.some((t7) => null == t7) ? null : gt(s12, this.functionArguments.operation, { processAsMultiband: this.functionArguments.processAsMultiband, outputPixelType: this.outputPixelType ?? void 0 });
  }
  _getWebGLParameters() {
    var _a;
    const { operation: t6 } = this.functionArguments, s12 = c4[t6], e9 = ((_a = Object.keys(m4).find((s13) => m4[s13] === t6)) == null ? void 0 : _a.toLowerCase()) ?? "undefined", i28 = this.outputPixelType ?? "f32";
    let [a30, u20] = s3(i28);
    const p20 = o3(i28);
    return p20 && (a30 -= 1e-4, u20 += 1e-4), { imageCount: s12, operationName: e9, domainRange: [a30, u20], isOutputRounded: p20 };
  }
  _updateStatistics(t6) {
    var _a, _b;
    const s12 = this.sourceRasterInfos[0], { operation: e9 } = this.functionArguments, o11 = (_a = l6(e9)) == null ? void 0 : _a.domain;
    if (o11) {
      t6.statistics = [];
      for (let s13 = 0; s13 < t6.bandCount; s13++) t6.statistics[s13] = { min: o11[0], max: o11[1], avg: (o11[0] + o11[1]) / 2, stddev: (o11[0] + o11[1]) / 10 };
    } else 45 === e9 && ((_b = s12.statistics) == null ? void 0 : _b.length) && (t6.statistics = s12.statistics.map((t7) => ({ min: -t7.max, max: -t7.min, avg: null != t7.avg ? -t7.avg : void 0, stddev: null != t7.stddev ? -t7.stddev : void 0 })));
  }
  _updatePixelType(t6) {
    const { statistics: s12, pixelType: e9 } = this.sourceRasterInfos[0], { operation: o11 } = this.functionArguments, { domain: n18, isInteger: a30 } = l6(o11) ?? { domain: null, isInteger: false };
    let u20 = "f32";
    if (n18 && a30) u20 = l2(n18[0], n18[1]);
    else if (30 === o11) {
      const t7 = s12 == null ? void 0 : s12[0];
      u20 = t7 ? l2(t7.min, t7.max) : o3(e9) ? e9 : "s32";
    } else if (45 === o11 && o3(e9)) {
      const t7 = s12 == null ? void 0 : s12.map(({ max: t8 }) => -t8), o12 = s12 == null ? void 0 : s12.map(({ min: t8 }) => -t8), n19 = (t7 == null ? void 0 : t7.length) ? Math.min(...t7) : null, r12 = (o12 == null ? void 0 : o12.length) ? Math.min(...o12) : null;
      u20 = null != n19 && null != r12 ? l2(n19, r12) : e9.startsWith("s") ? e9.replace("s", "u") : "u1" === e9 || "u2" === e9 || "u4" === e9 ? "s8" : "u8" === e9 ? "s16" : "s32";
    }
    t6.pixelType = this.outputPixelType = this._getOutputPixelType(u20);
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], m14.prototype, "functionName", void 0), r([m({ type: c23, json: { write: true, name: "rasterFunctionArguments" } })], m14.prototype, "functionArguments", void 0), r([m()], m14.prototype, "rasterArgumentNames", void 0), m14 = r([a2("esri.layers.support.rasterFunctions.LocalFunction")], m14);
var d9 = m14;

// node_modules/@arcgis/core/layers/support/rasterFunctions/MaskFunctionArguments.js
var s10;
var a23 = s10 = class extends p3 {
  constructor() {
    super(...arguments), this.includedRanges = null, this.noDataValues = null, this.noDataInterpretation = n.matchAny;
  }
  get normalizedNoDataValues() {
    const { noDataValues: t6 } = this;
    if (!(t6 == null ? void 0 : t6.length)) return null;
    let e9 = false;
    const r12 = t6.map((t7) => {
      if ("number" == typeof t7) return e9 = true, [t7];
      if ("string" == typeof t7) {
        const r13 = t7.trim().split(" ").filter((t8) => "" !== t8.trim()).map((t8) => Number(t8));
        return e9 = e9 || r13.length > 0, 0 === r13.length ? null : r13;
      }
      return null;
    });
    return e9 ? r12 : null;
  }
  clone() {
    var _a, _b;
    return new s10({ includedRanges: ((_a = this.includedRanges) == null ? void 0 : _a.slice()) ?? [], noDataValues: ((_b = this.noDataValues) == null ? void 0 : _b.slice()) ?? [], noDataInterpretation: this.noDataInterpretation });
  }
};
r([m({ json: { write: true } })], a23.prototype, "includedRanges", void 0), r([m({ json: { write: true } })], a23.prototype, "noDataValues", void 0), r([m()], a23.prototype, "normalizedNoDataValues", null), r([m({ json: { write: true } })], a23.prototype, "noDataInterpretation", void 0), a23 = s10 = r([a2("esri.layers.support.rasterFunctions.MaskFunctionArguments")], a23);
var i21 = a23;

// node_modules/@arcgis/core/layers/support/rasterFunctions/MaskFunction.js
var c24 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Mask", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0].clone(), { pixelType: e9 } = t6;
    this.outputPixelType = this._getOutputPixelType(e9), t6.pixelType = this.outputPixelType, this.rasterInfo = t6;
    const { includedRanges: s12, normalizedNoDataValues: o11 } = this.functionArguments;
    if (!(s12 == null ? void 0 : s12.length) && !(o11 == null ? void 0 : o11.length)) return { success: false, supportsGPU: false, error: "missing includedRanges or noDataValues argument" };
    let r12 = [];
    for (let a30 = 0; a30 < t6.bandCount; a30++) {
      const t7 = w3(e9, s12 == null ? void 0 : s12.slice(2 * a30, 2 * a30 + 2), o11 == null ? void 0 : o11[a30]);
      if (null == t7) {
        r12 = null;
        break;
      }
      r12.push(t7);
    }
    this.lookups = r12;
    const n18 = null != o11 && o11.every((t7) => {
      var _a;
      return (t7 == null ? void 0 : t7.length) === ((_a = o11[0]) == null ? void 0 : _a.length);
    });
    return { success: true, supportsGPU: (!s12 || s12.length <= 2 * i2) && (!o11 || n18 && o11[0].length <= i2) };
  }
  _processPixels(t6) {
    var _a;
    const e9 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == e9) return null;
    const { outputPixelType: s12, lookups: o11 } = this, { includedRanges: r12, noDataInterpretation: n18, normalizedNoDataValues: u20 } = this.functionArguments, a30 = n18 === n.matchAll;
    return g2(e9, { includedRanges: r12, noDataValues: u20, outputPixelType: s12, matchAll: a30, lookups: o11 });
  }
  _getWebGLParameters() {
    var _a;
    const { includedRanges: t6, normalizedNoDataValues: s12 } = this.functionArguments, o11 = new Float32Array(i2);
    o11.fill(q), ((_a = s12 == null ? void 0 : s12[0]) == null ? void 0 : _a.length) && o11.set(s12[0]);
    const r12 = new Float32Array(i2);
    for (let n18 = 0; n18 < r12.length; n18 += 2) r12[n18] = (t6 == null ? void 0 : t6[n18]) ?? -q, r12[n18 + 1] = (t6 == null ? void 0 : t6[n18 + 1]) ?? q;
    return (t6 == null ? void 0 : t6.length) && r12.set(t6), { bandCount: this.sourceRasterInfos[0].bandCount, noDataValues: o11, includedRanges: r12 };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], c24.prototype, "functionName", void 0), r([m({ type: i21, json: { write: true, name: "rasterFunctionArguments" } })], c24.prototype, "functionArguments", void 0), r([m()], c24.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], c24.prototype, "lookups", void 0), c24 = r([a2("esri.layers.support.rasterFunctions.MaskFunction")], c24);
var p15 = c24;

// node_modules/@arcgis/core/layers/support/rasterFunctions/NDVIFunctionArguments.js
var i22;
var e8 = i22 = class extends p3 {
  constructor() {
    super(...arguments), this.visibleBandID = 0, this.infraredBandID = 1, this.scientificOutput = false;
  }
  clone() {
    const { visibleBandID: r12, infraredBandID: t6, scientificOutput: s12 } = this;
    return new i22({ visibleBandID: r12, infraredBandID: t6, scientificOutput: s12 });
  }
};
r([m({ json: { write: true } })], e8.prototype, "visibleBandID", void 0), r([m({ json: { write: true } })], e8.prototype, "infraredBandID", void 0), r([m({ json: { write: true } })], e8.prototype, "scientificOutput", void 0), e8 = i22 = r([a2("esri.layers.support.rasterFunctions.NDVIFunctionArguments")], e8);
var n11 = e8;

// node_modules/@arcgis/core/layers/support/rasterFunctions/NDVIFunction.js
var u17 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "NDVI", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { scientificOutput: t6, visibleBandID: s12, infraredBandID: r12 } = this.functionArguments;
    this.outputPixelType = this._getOutputPixelType(t6 ? "f32" : "u8");
    const e9 = this.sourceRasterInfos[0], n18 = Math.max(s12, r12);
    if (e9.bandCount < 2 || n18 >= e9.bandCount) return { success: false, supportsGPU: false, error: "ndvi-function: source raster has insufficient amount of raster bands" };
    if (s12 < 0 || r12 < 0) return { success: false, supportsGPU: false, error: "ndvi-function: invalid visible or infrared band id" };
    const i28 = e9.clone();
    i28.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(i28), i28.bandCount = 1, i28.keyProperties = { ...i28.keyProperties, BandProperties: void 0 };
    const [o11, u20, a30, c34] = t6 ? [-1, 1, 0, 0.1] : [0, 200, 100, 10];
    return i28.statistics = [{ min: o11, max: u20, avg: a30, stddev: c34 }], this.rasterInfo = i28, { success: true, supportsGPU: true };
  }
  _processPixels(t6) {
    var _a;
    const s12 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == s12) return null;
    const { visibleBandID: r12, infraredBandID: n18, scientificOutput: i28 } = this.functionArguments;
    return l8(s12, r12, n18, !i28);
  }
  _getWebGLParameters() {
    const { visibleBandID: t6, infraredBandID: s12, scientificOutput: r12 } = this.functionArguments, e9 = this.isInputBandIdsSwizzled ? [0, 1, 2] : [s12, t6, 0];
    return { bandIndexMat3: c6(e9), scaled: !r12 };
  }
  _getInputBandIds(t6) {
    const { visibleBandID: s12, infraredBandID: r12 } = this.functionArguments;
    return [r12, s12, 0].map((s13) => t6[s13]);
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], u17.prototype, "functionName", void 0), r([m({ type: n11, json: { write: true, name: "rasterFunctionArguments" } })], u17.prototype, "functionArguments", void 0), r([m()], u17.prototype, "rasterArgumentNames", void 0), u17 = r([a2("esri.layers.support.rasterFunctions.NDVIFunction")], u17);
var a24 = u17;

// node_modules/@arcgis/core/layers/support/rasterFunctions/RemapFunctionArguments.js
var n12;
var a25 = n12 = class extends p3 {
  constructor() {
    super(...arguments), this.inputRanges = null, this.outputValues = null, this.noDataRanges = null, this.allowUnmatched = false, this.isLastInputRangeInclusive = false;
  }
  clone() {
    return new n12({ inputRanges: [...this.inputRanges], outputValues: [...this.outputValues], noDataRanges: [...this.noDataRanges], allowUnmatched: this.allowUnmatched, isLastInputRangeInclusive: this.isLastInputRangeInclusive });
  }
};
r([m({ json: { write: true } })], a25.prototype, "inputRanges", void 0), r([m({ json: { write: true } })], a25.prototype, "outputValues", void 0), r([m({ json: { write: true } })], a25.prototype, "noDataRanges", void 0), r([m({ json: { write: true } })], a25.prototype, "allowUnmatched", void 0), r([m({ json: { write: true } })], a25.prototype, "isLastInputRangeInclusive", void 0), a25 = n12 = r([a2("esri.layers.support.rasterFunctions.RemapFunctionArguments")], a25);
var r10 = a25;

// node_modules/@arcgis/core/layers/support/rasterFunctions/RemapFunction.js
var m15 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Remap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0].clone(), { pixelType: s12 } = t6;
    this.outputPixelType = this._getOutputPixelType(s12), t6.pixelType = this.outputPixelType, t6.bandCount = 1;
    const { statistics: e9 } = t6;
    this._removeStatsHistColormapVAT(t6);
    const { allowUnmatched: n18, outputValues: o11, inputRanges: a30, noDataRanges: i28, isLastInputRangeInclusive: l22 } = this.functionArguments;
    if (null != e9 && e9.length && (o11 == null ? void 0 : o11.length)) if (n18) {
      const s13 = Math.min.apply(null, [...o11, e9[0].min]), n19 = Math.max.apply(null, [...o11, e9[0].max]);
      t6.statistics = [{ ...e9[0], min: s13, max: n19 }];
    } else {
      let s13 = o11[0], n19 = s13;
      for (let t7 = 0; t7 < o11.length; t7++) s13 = s13 > o11[t7] ? o11[t7] : s13, n19 = n19 > o11[t7] ? n19 : o11[t7];
      t6.statistics = [{ ...e9[0], min: s13, max: n19 }];
    }
    this.rasterInfo = t6, this.lookup = n18 ? null : y2({ srcPixelType: s12, inputRanges: a30, outputValues: o11, noDataRanges: i28, allowUnmatched: n18, isLastInputRangeInclusive: l22, outputPixelType: this.outputPixelType });
    return { success: true, supportsGPU: (!o11 || o11.length <= i2) && (!i28 || i28.length <= i2) };
  }
  _processPixels(t6) {
    var _a;
    const s12 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == s12) return null;
    const { lookup: e9, outputPixelType: n18 } = this;
    if (e9) {
      const t7 = f2(s12, { lut: [e9.lut], offset: e9.offset, outputPixelType: n18 });
      return null != t7 && e9.mask && (t7.mask = c(s12.pixels[0], s12.mask, e9.mask, e9.offset, "u8")), t7;
    }
    const { inputRanges: o11, outputValues: a30, noDataRanges: u20, allowUnmatched: r12, isLastInputRangeInclusive: c34 } = this.functionArguments;
    return p2(s12, { inputRanges: o11, outputValues: a30, noDataRanges: u20, outputPixelType: n18, allowUnmatched: r12, isLastInputRangeInclusive: c34 });
  }
  _getWebGLParameters() {
    const { allowUnmatched: t6, noDataRanges: e9, isLastInputRangeInclusive: n18 } = this.functionArguments, a30 = new Float32Array(3 * i2), u20 = 1e-5, i28 = this.functionArguments.inputRanges ?? [], l22 = this.functionArguments.outputValues ?? [], p20 = l22.length;
    for (let o11 = 0; o11 < i2; o11++) a30[3 * o11] = i28[2 * o11] ?? q - 1, a30[3 * o11 + 1] = i28[2 * o11 + 1] ?? q, a30[3 * o11 + 2] = l22[o11] ?? 0, o11 < p20 && (o11 > 0 && (a30[3 * o11] -= u20), (o11 < p20 - 1 || !n18) && (a30[3 * o11 + 1] -= u20));
    const c34 = new Float32Array(2 * i2);
    c34.fill(q), (e9 == null ? void 0 : e9.length) && c34.set(e9);
    return { allowUnmatched: t6, rangeMaps: a30, noDataRanges: c34, clampRange: s3(this.outputPixelType) };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], m15.prototype, "functionName", void 0), r([m({ type: r10, json: { write: true, name: "rasterFunctionArguments" } })], m15.prototype, "functionArguments", void 0), r([m()], m15.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], m15.prototype, "lookup", void 0), m15 = r([a2("esri.layers.support.rasterFunctions.RemapFunction")], m15);
var g6 = m15;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ShadedReliefFunctionArguments.js
var a26;
var c25 = a26 = class extends m13 {
  readColorRamp(o11) {
    if ("string" == typeof o11) {
      const r12 = m3.jsonValues.find((r13) => r13.toLowerCase() === o11.toLowerCase());
      return r12 ? d(m3.fromJSON(r12)) : null;
    }
    return "toJSON" in o11 ? o11.toJSON() : o11;
  }
  clone() {
    return new a26({ hillshadeType: this.hillshadeType, altitude: this.altitude, azimuth: this.azimuth, zFactor: this.zFactor, slopeType: this.slopeType, pixelSizeFactor: this.pixelSizeFactor, pixelSizePower: this.pixelSizePower, removeEdgeEffect: this.removeEdgeEffect, colorRamp: this.colorRamp, colormap: this.colormap, raster: this.raster });
  }
};
r([m({ json: { write: true } })], c25.prototype, "colorRamp", void 0), r([o2("colorRamp")], c25.prototype, "readColorRamp", null), r([m({ type: [[Number]], json: { write: true } })], c25.prototype, "colormap", void 0), c25 = a26 = r([a2("esri.layers.support.rasterFunctions.ShadedReliefFunctionArguments")], c25);
var l19 = c25;

// node_modules/@arcgis/core/layers/support/rasterFunctions/ShadedReliefFunction.js
var h6 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "ShadedRelief", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    var _a;
    const e9 = this.sourceRasterInfos[0];
    if (e9.bandCount > 1) return { success: false, supportsGPU: false, error: "shadedrelief-function: source data must be single band" };
    let { colorRamp: t6, colormap: s12 } = this.functionArguments;
    if (!t6 && !(s12 == null ? void 0 : s12.length)) return { success: false, supportsGPU: false, error: "shadedrelief-function: a color ramp argument must be specified" };
    this.outputPixelType = this._getOutputPixelType("u8");
    const r12 = e9.clone();
    this._removeStatsHistColormapVAT(r12), r12.pixelType = this.outputPixelType, r12.bandCount = 3, r12.statistics = [{ min: 0, max: 255, avg: 60, stddev: 10 }, { min: 0, max: 255, avg: 60, stddev: 10 }, { min: 0, max: 255, avg: 60, stddev: 10 }], this.rasterInfo = r12, this.isGCS = ((_a = r12.spatialReference) == null ? void 0 : _a.isGeographic) ?? false, (s12 == null ? void 0 : s12.length) || (s12 = B(t6, { interpolateAlpha: true }));
    const { indexedColormap: o11, offset: n18 } = a3({ colormap: s12 });
    if (!(o11 == null ? void 0 : o11.length)) return { success: false, supportsGPU: false, error: "shadedrelief-function: a valid colorramp is required" };
    const p20 = D(o11);
    return this.lookup = { indexedColormap: o11, offset: n18, hsvMap: p20 }, { success: true, supportsGPU: a4(o11) };
  }
  _processPixels(e9) {
    var _a, _b, _c;
    const t6 = (_a = e9.pixelBlocks) == null ? void 0 : _a[0];
    if (!t6 || !this.lookup) return null;
    let s12 = (_b = e9.primaryPixelSizes) == null ? void 0 : _b[0];
    if (null == s12) {
      const { extent: r13 } = e9;
      s12 = r13 ? { x: r13.width / t6.width, y: r13.height / t6.height } : { x: 1, y: 1 };
    }
    const r12 = d3(this.functionArguments, s12, this.isGCS), o11 = r5(t6, r12), i28 = ((_c = this.sourceRasterInfos[0].statistics) == null ? void 0 : _c[0]) ?? { min: 0, max: 8e3 };
    return c2(o11, t6, this.lookup.hsvMap, i28), o11.pixelType = this.outputPixelType, o11;
  }
  _getWebGLParameters() {
    var _a;
    const e9 = d3(this.functionArguments, { x: 1, y: 1 }, this.isGCS), t6 = a6(e9), { slopeType: s12, zFactor: o11, pixelSizeFactor: i28, pixelSizePower: n18 } = this.functionArguments, a30 = "scaled" === s12, { indexedColormap: u20, offset: m17 } = this.lookup, d10 = (_a = this.sourceRasterInfos[0].statistics) == null ? void 0 : _a[0], f7 = o3(this.outputPixelType);
    return { ...t6, indexedColormap: u20, offset: m17, zFactor: o11, gcsFactor: this.isGCS ? n2 : 1, pixelSizeFactor: a30 ? i28 : 0, pixelSizePower: a30 ? n18 : 0, minValue: (d10 == null ? void 0 : d10.min) ?? 0, maxValue: (d10 == null ? void 0 : d10.max) ?? 8e3, isOutputRounded: f7 };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], h6.prototype, "functionName", void 0), r([m({ type: l19, json: { write: true, name: "rasterFunctionArguments" } })], h6.prototype, "functionArguments", void 0), r([m()], h6.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], h6.prototype, "isGCS", void 0), r([m({ json: { write: true } })], h6.prototype, "lookup", void 0), h6 = r([a2("esri.layers.support.rasterFunctions.ShadedReliefFunction")], h6);
var x5 = h6;

// node_modules/@arcgis/core/layers/support/rasterFunctions/SlopeFunctionArguments.js
var i23;
var c26 = new o({ 1: "degree", 2: "percent-rise", 3: "adjusted" }, { useNumericKeys: true });
var a27 = i23 = class extends p3 {
  constructor() {
    super(...arguments), this.slopeType = "degree", this.zFactor = 1, this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.removeEdgeEffect = false;
  }
  clone() {
    return new i23({ slopeType: this.slopeType, zFactor: this.zFactor, pixelSizePower: this.pixelSizePower, pixelSizeFactor: this.pixelSizeFactor, removeEdgeEffect: this.removeEdgeEffect, raster: this.raster });
  }
};
r([r3(c26)], a27.prototype, "slopeType", void 0), r([m({ type: Number, json: { write: true } })], a27.prototype, "zFactor", void 0), r([m({ type: Number, json: { name: "psPower", write: true } })], a27.prototype, "pixelSizePower", void 0), r([m({ type: Number, json: { name: "psZFactor", write: true } })], a27.prototype, "pixelSizeFactor", void 0), r([m({ type: Boolean, json: { write: true } })], a27.prototype, "removeEdgeEffect", void 0), a27 = i23 = r([a2("esri.layers.support.rasterFunctions.SlopeFunctionArguments")], a27);
var m16 = a27;

// node_modules/@arcgis/core/layers/support/rasterFunctions/SlopeFunction.js
var u18 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Slope", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    var _a;
    this.outputPixelType = this._getOutputPixelType("f32");
    const e9 = this.sourceRasterInfos[0].clone();
    return e9.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(e9), e9.statistics = "percent-rise" !== this.functionArguments.slopeType ? [{ min: 0, max: 90, avg: 1, stddev: 1 }] : null, e9.bandCount = 1, this.rasterInfo = e9, this.isGCS = ((_a = e9.spatialReference) == null ? void 0 : _a.isGeographic) ?? false, { success: true, supportsGPU: true };
  }
  _processPixels(e9) {
    var _a;
    const t6 = (_a = e9.pixelBlocks) == null ? void 0 : _a[0];
    if (null == t6) return null;
    const { zFactor: s12, slopeType: r12, pixelSizePower: o11, pixelSizeFactor: i28 } = this.functionArguments, { isGCS: n18 } = this, { extent: u20, primaryPixelSizes: c34 } = e9, a30 = c34 == null ? void 0 : c34[0], l22 = a30 ?? (u20 ? { x: u20.width / t6.width, y: u20.height / t6.height } : { x: 1, y: 1 });
    return h(t6, { zFactor: s12, slopeType: r12, pixelSizePower: o11, pixelSizeFactor: i28, isGCS: n18, resolution: l22 });
  }
  _getWebGLParameters() {
    const { zFactor: e9, slopeType: t6, pixelSizeFactor: s12, pixelSizePower: o11 } = this.functionArguments;
    return { zFactor: this.isGCS && e9 >= 1 ? e9 * n2 : e9, slopeType: t6, pixelSizeFactor: s12 ?? 0, pixelSizePower: o11 ?? 0, isOutputRounded: o3(this.outputPixelType) };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], u18.prototype, "functionName", void 0), r([m({ type: m16, json: { write: true, name: "rasterFunctionArguments" } })], u18.prototype, "functionArguments", void 0), r([m()], u18.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], u18.prototype, "isGCS", void 0), u18 = r([a2("esri.layers.support.rasterFunctions.SlopeFunction")], u18);
var c27 = u18;

// node_modules/@arcgis/core/layers/support/rasterFunctions/focalStatUtils.js
var n13 = new o({ 1: "min", 2: "max", 3: "mean", 4: "stddev", 5: "median", 6: "majority", 7: "minority" }, { useNumericKeys: true });
function s11(t6, e9) {
  const { fillNoDataOnly: o11 } = e9, { band: n18, width: s12, height: r12, mask: i28, outBand: l22 } = t6;
  if (o11 && !i28) return void l22.set(n18);
  const { statisticsType: a30, kernelRows: c34, kernelCols: f7 } = e9, h7 = "stddev" === a30, m17 = s12 * r12, u20 = new Float64Array(m17), d10 = new Float64Array(m17), y5 = new Uint32Array(m17);
  for (let A3 = 0; A3 < r12; A3++) {
    const t7 = A3 * s12;
    let e10 = 0, o12 = 0, r13 = 0;
    for (let s13 = 0; s13 < f7; s13++) i28 && !i28[t7 + s13] || (e10 += n18[t7 + s13], h7 && (o12 += n18[t7 + s13] ** 2), r13++);
    u20[t7] = e10, d10[t7] = o12, y5[t7] = r13;
    for (let l23 = 1; l23 <= s12 - f7; l23++) {
      const s13 = t7 + l23 - 1, a31 = s13 + f7;
      i28 ? (i28[s13] && (r13--, e10 -= n18[s13], h7 && (o12 -= n18[s13] ** 2)), i28[a31] && (r13++, e10 += n18[a31], h7 && (o12 += n18[a31] ** 2))) : (e10 -= n18[s13], e10 += n18[a31], h7 && (o12 -= n18[s13] ** 2, o12 += n18[a31] ** 2)), u20[t7 + l23] = e10, y5[t7 + l23] = r13, h7 && (d10[t7 + l23] = o12);
    }
  }
  const k4 = new Float64Array(m17), w7 = new Float64Array(m17), p20 = new Uint32Array(m17), M4 = c34 * s12;
  for (let A3 = 0; A3 <= s12 - f7; A3++) {
    let t7 = 0, e10 = 0, o12 = 0;
    for (let n19 = 0; n19 < c34; n19++) {
      const r13 = n19 * s12 + A3;
      t7 += u20[r13], o12 += y5[r13], h7 && (e10 += d10[r13]);
    }
    k4[A3] = t7, w7[A3] = e10, p20[A3] = o12;
    for (let n19 = 1; n19 <= r12 - c34; n19++) {
      const r13 = (n19 - 1) * s12 + A3, i29 = r13 + M4;
      t7 -= u20[r13], t7 += u20[i29], o12 -= y5[r13], o12 += y5[i29], h7 && (e10 -= d10[r13], e10 += d10[i29]), k4[n19 * s12 + A3] = t7, w7[n19 * s12 + A3] = e10, p20[n19 * s12 + A3] = o12;
    }
  }
  const g7 = Math.floor(c34 / 2), b3 = Math.floor(f7 / 2);
  for (let A3 = g7; A3 < r12 - g7; A3++) {
    const t7 = A3 * s12;
    for (let e10 = b3; e10 < s12 - b3; e10++) {
      const n19 = (A3 - g7) * s12 + e10 - b3, r13 = p20[n19];
      if (0 === r13 || o11 && (!i28 || i28[t7 + e10])) continue;
      const a31 = k4[n19] / r13, c35 = h7 ? Math.sqrt((w7[n19] - k4[n19] * a31) / r13) : a31;
      l22[t7 + e10] = c35, i28 && (i28[t7 + e10] = 255);
    }
  }
}
function r11(t6, e9) {
  const { fillNoDataOnly: o11 } = e9, { band: n18, width: s12, height: r12, mask: i28, outBand: l22 } = t6;
  if (o11 && !i28) return void l22.set(n18);
  const { kernelRows: a30, kernelCols: c34, statisticsType: f7 } = e9, h7 = Math.floor(a30 / 2), m17 = Math.floor(c34 / 2), u20 = "min" === f7, d10 = l22.slice(), y5 = new Uint32Array(s12 * r12);
  for (let k4 = h7; k4 < r12 - h7; k4++) {
    const t7 = k4 * s12;
    for (let e10 = m17; e10 < s12 - m17; e10++) {
      let o12 = u20 ? Number.MAX_VALUE : -Number.MAX_VALUE, r13 = 0;
      for (let l23 = 0; l23 < a30; l23++) for (let a31 = 0; a31 < c34; a31++) {
        const c35 = t7 + e10 + (l23 - h7) * s12 + a31 - m17;
        i28 && !i28[c35] || (o12 = u20 ? Math.min(o12, n18[c35]) : Math.max(o12, n18[c35]), r13++);
      }
      i28 ? (d10[t7 + e10] = 0 === r13 ? 0 : o12, y5[t7 + e10] = r13) : l22[t7 + e10] = 0 === r13 ? 0 : o12;
    }
  }
  if (i28) for (let k4 = h7; k4 < r12 - h7; k4++) {
    const t7 = k4 * s12;
    for (let e10 = m17; e10 < s12 - m17; e10++) if (y5[t7 + e10]) {
      if (o11 && i28[t7 + e10]) continue;
      l22[t7 + e10] = d10[t7 + e10], i28[t7 + e10] = 255;
    }
  }
}
function i24(t6, e9) {
  const { fillNoDataOnly: o11 } = e9, { band: n18, width: s12, height: r12, mask: i28, outBand: l22 } = t6;
  if (o11 && !i28) return void l22.set(n18);
  const { kernelRows: a30, kernelCols: c34 } = e9, f7 = Math.floor(a30 / 2), h7 = Math.floor(c34 / 2), m17 = l22.slice(), u20 = new Uint32Array(s12 * r12);
  for (let d10 = f7; d10 < r12 - f7; d10++) {
    const t7 = d10 * s12;
    for (let e10 = h7; e10 < s12 - h7; e10++) {
      if (o11 && (i28 == null ? void 0 : i28[t7 + e10])) continue;
      const r13 = [];
      for (let o12 = 0; o12 < a30; o12++) for (let l23 = 0; l23 < c34; l23++) {
        const a31 = t7 + e10 + (o12 - f7) * s12 + l23 - h7;
        i28 && !i28[a31] || r13.push(n18[a31]);
      }
      r13.length && (r13.sort((t8, e11) => t8 - e11), i28 ? (m17[t7 + e10] = r13[Math.floor((r13.length - 1) / 2)], u20[t7 + e10] = r13.length) : l22[t7 + e10] = r13[Math.floor((r13.length - 1) / 2)]);
    }
  }
  if (i28) for (let d10 = f7; d10 < r12 - f7; d10++) {
    const t7 = d10 * s12;
    for (let e10 = h7; e10 < s12 - h7; e10++) if (u20[t7 + e10]) {
      if (o11 && i28[t7 + e10]) continue;
      l22[t7 + e10] = m17[t7 + e10], i28[t7 + e10] = 255;
    }
  }
}
function l20(t6, e9) {
  const { fillNoDataOnly: o11 } = e9, { band: n18, width: s12, height: r12, mask: i28, outBand: l22 } = t6;
  if (o11 && !i28) return void l22.set(n18);
  const { kernelRows: a30, kernelCols: c34 } = e9, f7 = Math.floor(a30 / 2), h7 = Math.floor(c34 / 2), m17 = "majority" === e9.statisticsType, u20 = a30 * c34, d10 = l22.slice(), y5 = new Uint32Array(s12 * r12);
  for (let k4 = f7; k4 < r12 - f7; k4++) {
    const t7 = k4 * s12;
    for (let e10 = h7; e10 < s12 - h7; e10++) {
      if (o11 && (i28 == null ? void 0 : i28[t7 + e10])) continue;
      const r13 = /* @__PURE__ */ new Map();
      for (let o12 = 0; o12 < a30; o12++) for (let l23 = 0; l23 < c34; l23++) {
        const a31 = t7 + e10 + (o12 - f7) * s12 + l23 - h7;
        if (i28 && !i28[a31]) continue;
        const c35 = n18[a31];
        r13.set(c35, r13.has(c35) ? r13.get(c35) + 1 : 1);
      }
      if (0 === r13.size) continue;
      let k5 = 0, w7 = 0, p20 = m17 ? 0 : u20 + 1;
      for (const t8 of r13.keys()) w7 = r13.get(t8), m17 === w7 > p20 && (p20 = w7, k5 = t8);
      i28 ? (d10[t7 + e10] = k5, y5[t7 + e10] = r13.size) : l22[t7 + e10] = k5;
    }
  }
  if (i28) for (let k4 = f7; k4 < r12 - f7; k4++) {
    const t7 = k4 * s12;
    for (let e10 = h7; e10 < s12 - h7; e10++) if (y5[t7 + e10]) {
      if (o11 && i28[t7 + e10]) continue;
      l22[t7 + e10] = d10[t7 + e10], i28[t7 + e10] = 255;
    }
  }
}
function a28(t6, n18) {
  const { mask: a30 } = t6, { fillNoDataOnly: c34 } = n18;
  if (c34 && !a30) return t6;
  const { pixels: f7, width: h7, height: m17, bandMasks: u20, pixelType: d10 } = t6, y5 = f7.length, k4 = h7 * m17, w7 = [], { kernelRows: p20, kernelCols: M4, statisticsType: g7, mirrorEdges: b3 } = n18;
  if (c34 && !a30) return t6;
  const A3 = n18.outputPixelType ?? d10, x7 = [];
  for (let N2 = 0; N2 < y5; N2++) {
    const t7 = f7[N2], d11 = g.createEmptyBand(A3, k4);
    c34 && d11.set(t7);
    const y6 = (u20 == null ? void 0 : u20[N2]) ?? a30, j5 = (y6 == null ? void 0 : y6.slice()) ?? null, B6 = { band: t7, width: h7, height: m17, mask: j5, outBand: d11 };
    switch (g7) {
      case "min":
      case "max":
        r11(B6, n18);
        break;
      case "mean":
      case "stddev":
        s11(B6, n18);
        break;
      case "median":
        i24(B6, n18);
        break;
      case "majority":
      case "minority":
        l20(B6, n18);
    }
    b3 && !c34 && o9(d11, h7, m17, p20, M4), w7.push(d11), j5 && x7.push(j5);
  }
  let j4 = x7[0] ?? a30;
  x7.length !== y5 && (x7.length = 0), y5 > 1 && (u20 == null ? void 0 : u20.length) && (j4 = g.combineBandMasks(u20));
  const B5 = new g({ pixelType: A3, width: h7, height: m17, pixels: w7, bandMasks: u20 && x7.length ? x7 : null, mask: j4 });
  return B5.updateStatistics(), B5;
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/StatisticsFunctionArguments.js
var c28;
var p16 = c28 = class extends p3 {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.fillNoDataOnly = false, this.statisticsType = "min";
  }
  clone() {
    return new c28({ rows: this.rows, cols: this.cols, fillNoDataOnly: this.fillNoDataOnly, statisticsType: this.statisticsType, raster: a(this.raster) });
  }
};
r([m({ json: { write: true, read: { source: ["kernelRows", "rows"], reader: (s12, r12) => Number(s12 ?? (r12 == null ? void 0 : r12.kernelRows) ?? 3) } } })], p16.prototype, "rows", void 0), r([m({ json: { write: true, read: { source: ["kernelCols", "cols"], reader: (s12, r12) => Number(s12 ?? (r12 == null ? void 0 : r12.kernelCols) ?? 3) } } })], p16.prototype, "cols", void 0), r([m({ json: { write: true } })], p16.prototype, "fillNoDataOnly", void 0), r([m({ json: { read: { source: ["statisticsType", "type"], reader: (s12, r12) => n13.fromJSON((r12 == null ? void 0 : r12.statisticsType) ?? (r12 == null ? void 0 : r12.type)) ?? "min" }, write: { target: "type" } } }), r3(n13)], p16.prototype, "statisticsType", void 0), p16 = c28 = r([a2("esri.layers.support.rasterFunctions.StatisticsFunctionArguments")], p16);
var l21 = p16;

// node_modules/@arcgis/core/layers/support/rasterFunctions/StatisticsFunction.js
var c29 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Statistics", this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { type: t6 } = this.functionArguments.toJSON();
    if (t6 < 1 || t6 > 7) return { success: false, supportsGPU: false, error: `statistics-function: the given statistics type is not supported ${t6}` };
    const s12 = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(s12.pixelType);
    const e9 = s12.clone();
    e9.pixelType = this.outputPixelType;
    const { statisticsType: o11 } = this.functionArguments;
    "stddev" === o11 && this._removeStatsHistColormapVAT(e9), this.rasterInfo = e9;
    return { success: true, supportsGPU: e9.bandCount <= 3 && t6 < 5 };
  }
  _processPixels(t6) {
    var _a;
    const s12 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == s12) return s12;
    const { statisticsType: e9, rows: o11, cols: r12, fillNoDataOnly: n18 } = this.functionArguments;
    return a28(s12, { kernelRows: o11, kernelCols: r12, fillNoDataOnly: n18, outputPixelType: this.outputPixelType, statisticsType: e9, mirrorEdges: true });
  }
  _getWebGLParameters() {
    const { rows: t6, cols: s12, statisticsType: e9, fillNoDataOnly: r12 } = this.functionArguments;
    return { fillNoDataOnly: r12, kernelRows: t6, kernelCols: s12, statisticsType: e9, clampRange: s3(this.outputPixelType) };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], c29.prototype, "functionName", void 0), r([m({ type: l21, json: { write: true, name: "rasterFunctionArguments" } })], c29.prototype, "functionArguments", void 0), r([m()], c29.prototype, "rasterArgumentNames", void 0), c29 = r([a2("esri.layers.support.rasterFunctions.StatisticsFunction")], c29);
var p17 = c29;

// node_modules/@arcgis/core/layers/support/rasterFunctions/StatisticsHistogramFunctionArguments.js
var c30;
var n14 = c30 = class extends p3 {
  constructor() {
    super(...arguments), this.statistics = null, this.histograms = null;
  }
  readStatistics(t6, s12) {
    if (!(t6 == null ? void 0 : t6.length)) return null;
    const r12 = [];
    return t6.forEach((t7) => {
      const s13 = { min: t7.min, max: t7.max, avg: t7.avg ?? t7.mean, stddev: t7.stddev ?? t7.standardDeviation };
      r12.push(s13);
    }), r12;
  }
  writeStatistics(t6, s12, r12) {
    if (!(t6 == null ? void 0 : t6.length)) return;
    const o11 = [];
    t6.forEach((t7) => {
      const s13 = { ...t7, mean: t7.avg, standardDeviation: t7.stddev };
      delete s13.avg, delete s13.stddev, o11.push(s13);
    }), s12[r12] = o11;
  }
  clone() {
    return new c30({ statistics: a(this.statistics), histograms: a(this.histograms) });
  }
};
r([m({ json: { write: true } })], n14.prototype, "statistics", void 0), r([o2("statistics")], n14.prototype, "readStatistics", null), r([r2("statistics")], n14.prototype, "writeStatistics", null), r([m({ json: { write: true } })], n14.prototype, "histograms", void 0), n14 = c30 = r([a2("esri.layers.support.rasterFunctions.StatisticsHistogramFunctionArguments")], n14);
var p18 = n14;

// node_modules/@arcgis/core/layers/support/rasterFunctions/StatisticsHistogramFunction.js
var i25 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "StatisticsHistogram", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = true;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType("u8");
    const s12 = t6.clone(), { statistics: o11, histograms: r12 } = this.functionArguments;
    return r12 && (s12.histograms = r12), o11 && (s12.statistics = o11), this.rasterInfo = s12, { success: true, supportsGPU: true };
  }
  _processPixels(t6) {
    var _a;
    return (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], i25.prototype, "functionName", void 0), r([m({ type: p18, json: { write: true, name: "rasterFunctionArguments" } })], i25.prototype, "functionArguments", void 0), r([m()], i25.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], i25.prototype, "indexedColormap", void 0), r([m()], i25.prototype, "isNoopProcess", void 0), i25 = r([a2("esri.layers.support.rasterFunctions.StatisticsHistogramFunction")], i25);
var n15 = i25;

// node_modules/@arcgis/core/layers/support/rasterFunctions/StretchFunctionArguments.js
var n16;
var p19 = new o({ 0: "none", 3: "standard-deviation", 4: "histogram-equalization", 5: "min-max", 6: "percent-clip", 9: "sigmoid" }, { useNumericKeys: true });
var c31 = n16 = class extends p3 {
  constructor() {
    super(...arguments), this.computeGamma = false, this.dynamicRangeAdjustment = false, this.gamma = [], this.histograms = null, this.statistics = null, this.stretchType = "none", this.useGamma = false;
  }
  writeStatistics(t6, e9, o11) {
    (t6 == null ? void 0 : t6.length) && (Array.isArray(t6[0]) || (t6 = t6.map((t7) => [t7.min, t7.max, t7.avg, t7.stddev])), e9[o11] = t6);
  }
  clone() {
    return new n16({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, statistics: a(this.statistics), gamma: a(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, histograms: a(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment, raster: this.raster });
  }
};
r([m({ type: Boolean, json: { write: true } })], c31.prototype, "computeGamma", void 0), r([m({ type: Boolean, json: { name: "dra", write: true } })], c31.prototype, "dynamicRangeAdjustment", void 0), r([m({ type: [Number], json: { write: true } })], c31.prototype, "gamma", void 0), r([m()], c31.prototype, "histograms", void 0), r([m({ type: Number, json: { write: true } })], c31.prototype, "maxPercent", void 0), r([m({ type: Number, json: { write: true } })], c31.prototype, "minPercent", void 0), r([m({ type: Number, json: { write: true } })], c31.prototype, "numberOfStandardDeviations", void 0), r([m({ type: Number, json: { name: "max", write: true } })], c31.prototype, "outputMax", void 0), r([m({ type: Number, json: { name: "min", write: true } })], c31.prototype, "outputMin", void 0), r([m({ type: Number, json: { write: true } })], c31.prototype, "sigmoidStrengthLevel", void 0), r([m({ json: { type: [[Number]], write: true } })], c31.prototype, "statistics", void 0), r([r2("statistics")], c31.prototype, "writeStatistics", null), r([r3(p19)], c31.prototype, "stretchType", void 0), r([m({ type: Boolean, json: { write: true } })], c31.prototype, "useGamma", void 0), c31 = n16 = r([a2("esri.layers.support.rasterFunctions.StretchFunctionArguments")], c31);
var u19 = c31;

// node_modules/@arcgis/core/layers/support/rasterFunctions/StretchFunction.js
var c32 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Stretch", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null, this.cutOffs = null;
  }
  _bindSourceRasters() {
    this.lookup = null, this.cutOffs = null;
    const t6 = this.sourceRasterInfos[0], { pixelType: s12 } = t6, { functionArguments: e9 } = this, { dynamicRangeAdjustment: r12, gamma: u20, useGamma: i28 } = e9;
    if (!r12 && ["u8", "u16", "s8", "s16"].includes(s12)) {
      const r13 = g3(e9.toJSON(), { rasterInfo: t6 }), a31 = o3(this.outputPixelType) ? "round" : "float";
      this.lookup = a5({ pixelType: s12, ...r13, gamma: i28 ? u20 : null, rounding: a31 }), this.cutOffs = r13;
    } else r12 || (this.cutOffs = g3(e9.toJSON(), { rasterInfo: t6 }));
    this.outputPixelType = this._getOutputPixelType(s12);
    const a30 = t6.clone();
    a30.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(a30), "u8" === this.outputPixelType && (a30.keyProperties.DataType = "processed");
    const { outputMin: m17 = 0, outputMax: c34 = 255 } = this.functionArguments;
    a30.statistics = [];
    for (let o11 = 0; o11 < a30.bandCount; o11++) a30.statistics[o11] = { min: m17, max: c34 };
    this.rasterInfo = a30;
    return { success: true, supportsGPU: !r12 };
  }
  _processPixels(t6) {
    var _a;
    const s12 = (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
    if (null == s12) return s12;
    const { lookup: e9 } = this;
    if (e9) return f2(s12, { ...e9, outputPixelType: this.rasterInfo.pixelType });
    const { functionArguments: o11 } = this, r12 = this.cutOffs || g3(o11.toJSON(), { rasterInfo: this.sourceRasterInfos[0], pixelBlock: s12 }), i28 = o11.useGamma ? o11.gamma : null;
    return M(s12, { ...r12, gamma: i28, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const { outputMin: t6 = 0, outputMax: s12 = 255, gamma: e9, useGamma: r12 } = this.functionArguments, u20 = this.rasterInfo.bandCount >= 2 ? 3 : 1, i28 = r12 && (e9 == null ? void 0 : e9.length) ? x(u20, e9) : [1, 1, 1], { minCutOff: n18, maxCutOff: p20 } = this.cutOffs ?? { minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255] };
    1 === n18.length && (n18[1] = n18[2] = n18[0], p20[1] = p20[2] = p20[0]);
    const a30 = p20.map((e10, o11) => (s12 - t6) / (p20[o11] - n18[o11])), c34 = o3(this.outputPixelType), f7 = r12 && e9 ? [e9[0], e9[1] ?? e9[0], e9[2] ?? e9[0]] : [1, 1, 1], l22 = r12 ? [i28[0], i28[1] ?? i28[0], i28[2] ?? i28[0]] : [1, 1, 1];
    return { bandCount: u20, minOutput: t6, maxOutput: s12, minCutOff: n18, maxCutOff: p20, factor: a30, useGamma: r12, gamma: f7, gammaCorrection: l22, stretchType: this.functionArguments.stretchType, isOutputRounded: c34, type: "stretch" };
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], c32.prototype, "functionName", void 0), r([m({ type: u19, json: { write: true, name: "rasterFunctionArguments" } })], c32.prototype, "functionArguments", void 0), r([m()], c32.prototype, "rasterArgumentNames", void 0), r([m({ json: { write: true } })], c32.prototype, "lookup", void 0), r([m({ json: { write: true } })], c32.prototype, "cutOffs", void 0), c32 = r([a2("esri.layers.support.rasterFunctions.StretchFunction")], c32);
var f6 = c32;

// node_modules/@arcgis/core/layers/support/rasterFunctions/TableFunctionArguments.js
var c33;
var a29 = c33 = class extends p3 {
  constructor() {
    super(...arguments), this.attributeTableAsRecordSet = null;
  }
  clone() {
    return new c33({ attributeTableAsRecordSet: a(this.attributeTableAsRecordSet) });
  }
};
r([m({ json: { write: true } })], a29.prototype, "attributeTableAsRecordSet", void 0), a29 = c33 = r([a2("esri.layers.support.rasterFunctions.TableFunctionArguments")], a29);
var i26 = a29;

// node_modules/@arcgis/core/layers/support/rasterFunctions/TableFunction.js
var i27 = class extends p4 {
  constructor() {
    super(...arguments), this.functionName = "Table", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = true;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0];
    if (t6.bandCount > 1 || t6.pixelType.startsWith("f")) return { success: false, supportsGPU: false, error: "table-function: Source data must be single band and integer pixel type." };
    const { attributeTableAsRecordSet: e9 } = this.functionArguments;
    if (!e9) return { success: false, supportsGPU: false, error: "table-function: Missing attributeTableAsRecordSet argument." };
    this.outputPixelType = this._getOutputPixelType(t6.pixelType);
    const s12 = t6.clone();
    return s12.pixelType = this.outputPixelType, s12.bandCount = 1, "thematic" !== s12.dataType && (s12.keyProperties = s12.keyProperties ? { ...s12.keyProperties, DataType: "thematic" } : { DataType: "thematic" }), this.rasterInfo = s12, { success: true, supportsGPU: true };
  }
  _processPixels(t6) {
    var _a;
    return (_a = t6.pixelBlocks) == null ? void 0 : _a[0];
  }
};
r([m({ json: { write: true, name: "rasterFunction" } })], i27.prototype, "functionName", void 0), r([m({ type: i26, json: { write: true, name: "rasterFunctionArguments" } })], i27.prototype, "functionArguments", void 0), r([m()], i27.prototype, "rasterArgumentNames", void 0), r([m()], i27.prototype, "isNoopProcess", void 0), i27 = r([a2("esri.layers.support.rasterFunctions.TableFunction")], i27);
var n17 = i27;

// node_modules/@arcgis/core/layers/support/rasterFunctions/rasterFunctionHelper.js
var v3 = /* @__PURE__ */ new Map();
function w6(t6, e9) {
  const { rasterFunctionArguments: r12 } = t6;
  if (!r12) return;
  (r12.rasters || [r12.raster, r12.raster2]).forEach((t7) => {
    t7 && "number" != typeof t7 && ("string" == typeof t7 ? t7.startsWith("http") && (e9.includes(t7) || e9.push(t7)) : "rasterFunctionArguments" in t7 && w6(t7, e9));
  });
}
function T2(t6, n18) {
  if (n18 = n18 ?? {}, "function" in (t6 = a(t6)) && "arguments" in t6 && t6.arguments) {
    const r12 = $2(t6, /* @__PURE__ */ new Map(), n18);
    if (L2(r12), !r12.renderingRule) throw new s("raster-function-helper", "Unsupported raster function json.");
    t6 = r12.renderingRule;
  }
  if ("rasterFunction" in t6) return k3(t6 = B4(t6), n18);
  throw new s("raster-function-helper", "unsupported raster function json.");
}
function D4(t6, e9) {
  return "rasters" === e9[0] && Array.isArray(t6.rasters) ? t6.rasters : e9.map((e10) => t6[e10]);
}
function V3(t6) {
  return !!(t6 && "object" == typeof t6 && t6.rasterFunction && t6.rasterFunctionArguments);
}
function B4(t6) {
  var _a;
  const { rasterFunction: e9, rasterFunctionArguments: r12 } = t6, n18 = {};
  for (const o11 in r12) {
    let t7 = r12[o11];
    const e10 = o11.toLowerCase();
    if ("rasters" === e10 && Array.isArray(t7)) n18.rasters = t7.map((t8) => V3(t8) ? B4(t8) : t8);
    else switch (V3(t7) && (t7 = B4(t7)), e10) {
      case "dra":
        n18.dra = t7;
        break;
      case "pspower":
        n18.psPower = t7;
        break;
      case "pszfactor":
        n18.psZFactor = t7;
        break;
      case "bandids":
        n18.bandIds = t7;
        break;
      default:
        n18[o11[0].toLowerCase() + o11.slice(1)] = t7;
    }
  }
  return "Local" !== e9 || ((_a = n18.rasters) == null ? void 0 : _a.length) || (n18.rasters = ["$$"]), { ...t6, rasterFunctionArguments: n18 };
}
function k3(t6, r12) {
  var _a, _b;
  const { rasterFunction: n18, rasterFunctionArguments: o11 } = t6, s12 = (_a = t6.outputPixelType) == null ? void 0 : _a.toLowerCase();
  if (null == n18 || !v3.has(n18)) throw new s("raster-function-helper", `unsupported raster function: ${n18}`);
  const a30 = v3.get(n18), i28 = ("function" == typeof a30.ctor ? a30.ctor : a30.ctor.default).fromJSON({ ...t6, outputPixelType: s12 }), { rasterArgumentNames: c34 } = i28, u20 = [], m17 = D4(o11, c34), l22 = "rasters" === c34[0] || c34.length > 1, p20 = [];
  for (let e9 = 0; e9 < m17.length; e9++) {
    const t7 = m17[e9];
    let n19;
    null == t7 || "string" == typeof t7 && t7.startsWith("$") ? u20.push(r12 == null ? void 0 : r12.raster) : "string" == typeof t7 ? r12[t7] && u20.push(r12[t7]) : "number" != typeof t7 && "rasterFunction" in t7 && (n19 = k3(t7, r12), l22 || (i28.functionArguments[c34[e9]] = n19), u20.push(n19)), l22 && p20.push(n19 ?? t7);
  }
  if (l22 && ("rasters" === c34[0] ? i28.functionArguments.rasters = p20 : c34.forEach((t7, e9) => {
    i28.functionArguments[t7] = p20[e9];
  })), r12) {
    i28.sourceRasters = u20;
    const t7 = (_b = r12.raster) == null ? void 0 : _b.url;
    t7 && (i28.mainPrimaryRasterId = t7);
  }
  return i28;
}
function x6(t6, e9) {
  if (t6 && e9) for (const r12 in t6) {
    const n18 = t6[r12];
    n18 && "object" == typeof n18 && "type" in n18 && ("RasterFunctionTemplate" === n18.type ? x6(n18.arguments, e9) : "RasterFunctionVariable" === n18.type && null != e9[n18.name] && (n18.value = e9[n18.name]));
  }
}
function E2(t6, r12) {
  var _a;
  if (!t6 || "object" != typeof t6) return t6;
  const { value: n18 } = t6;
  if (!n18 || "object" != typeof n18) return t6.isDataset ? "$$" : n18;
  if (Array.isArray(n18)) return 0 === n18.length ? [] : n18.map((t7) => "object" == typeof t7 && "RasterFunctionVariable" === t7.type ? E2(t7, r12) : t7);
  if ("value" in n18 && ["number", "string", "boolean"].includes(typeof n18.value)) return n18.value;
  if (t6.isDataset && "Scalar" !== n18.type) return "$$";
  if (!("type" in n18)) return n18;
  let o11 = n18;
  switch (n18.type) {
    case "Scalar":
      o11 = n18.value;
      break;
    case "AlgorithmicColorRamp":
      o11 = M3(n18);
      break;
    case "MultiPartColorRamp":
      o11 = { type: "multipart", colorRamps: n18.ArrayOfColorRamp.map(M3) };
      break;
    case "ArgumentArray":
      if (((_a = n18.elements) == null ? void 0 : _a.length) && "RasterStatistics" !== n18.elements[0].type) {
        const t7 = [];
        for (let o12 = 0; o12 < n18.elements.length; o12++) {
          const s12 = n18.elements[o12], { type: a30 } = s12;
          if (a30) if ("RasterFunctionTemplate" === a30) {
            const { renderingRule: e9 } = $2(s12, r12);
            t7.push(e9), null != s12._object_id && r12.set(s12._object_id, e9);
          } else {
            if ("RasterFunctionVariable" !== a30) throw new s("raster-function-helper", "unsupported raster function json.");
            {
              const e9 = E2(s12, r12);
              t7.push(e9), null != s12._object_id && r12.set(s12._object_id, e9);
            }
          }
          else t7.push(s12);
        }
        o11 = t7;
      } else o11 = n18.elements;
  }
  return null != n18._object_id && r12.set(n18._object_id, o11), o11;
}
function M3(e9) {
  const r12 = e9.algorithm ?? "esriHSVAlgorithm";
  let { FromColor: n18, ToColor: o11 } = e9;
  if (!Array.isArray(n18)) {
    const { r: e10, g: r13, b: o12 } = U({ h: n18.Hue, s: n18.Saturation, v: n18.Value });
    n18 = [e10, r13, o12, n18.AlphaValue];
  }
  if (!Array.isArray(o11)) {
    const { r: e10, g: r13, b: n19 } = U({ h: o11.Hue, s: o11.Saturation, v: o11.Value });
    o11 = [e10, r13, n19, o11.AlphaValue];
  }
  return { type: "algorithmic", algorithm: r12, fromColor: n18, toColor: o11 };
}
function $2(t6, e9, r12) {
  r12 && x6(t6, r12);
  const n18 = { renderingRule: {}, templates: e9 };
  return H2(t6, n18), n18;
}
function H2(t6, e9) {
  if (!t6 || !e9.renderingRule) return;
  const { renderingRule: r12, templates: n18 } = e9, { function: o11, arguments: s12, _object_id: a30 } = t6;
  if (!o11 || !s12) return;
  null != a30 && n18.set(a30, r12), r12.rasterFunction = o11.type.replace("Function", ""), r12.outputPixelType = o11.pixelType;
  const i28 = {};
  r12.rasterFunctionArguments = i28;
  for (const c34 in s12) {
    if ("type" === c34 || "object_id" === c34 || "_object_ref_id" === c34) continue;
    const t7 = s12[c34];
    t7 && "object" == typeof t7 && "type" in t7 && ("RasterFunctionTemplate" === t7.type || "RasterFunctionVariable" === t7.type) ? ("RasterFunctionVariable" === t7.type ? i28[c34] = E2(t7, n18) : (r12.rasterFunctionArguments[c34] = {}, H2(t7, { renderingRule: r12.rasterFunctionArguments[c34], templates: n18 })), null != t7._object_id && n18.set(t7._object_id, i28[c34])) : i28[c34] = t7;
  }
  switch (i28.DEM && !i28.Raster && (i28.Raster = i28.DEM, delete i28.DEM), r12.rasterFunction) {
    case "Stretch":
      O2(i28);
      break;
    case "Colormap":
      G2(i28);
      break;
    case "Convolution":
      P2(i28);
      break;
    case "Mask":
      I2(i28);
  }
}
function L2(t6) {
  const { renderingRule: r12, templates: n18 } = t6;
  if ("object" != typeof r12 || !(r12 == null ? void 0 : r12.rasterFunctionArguments) || !n18.size) return;
  const { rasterFunctionArguments: o11 } = r12;
  for (const s12 in o11) {
    const t7 = o11[s12], r13 = "_object_ref_id" === s12 ? t7 : t7 && "object" == typeof t7 && "_object_ref_id" in t7 ? t7._object_ref_id : null;
    if (null == r13) t7 && "object" == typeof t7 && (t7.rasterFunctionArguments && L2({ renderingRule: t7, templates: n18 }), Array.isArray(t7) && t7.forEach((o12, s13) => {
      if ("object" == typeof o12) if (null != o12._object_ref_id) {
        if (!n18.has(o12._object_ref_id)) throw new s("raster-function-helper", `unsupported raster function json. _object_ref_id: ${t7} does not exist`);
        const a30 = n18.get(r13);
        a30 && "object" == typeof a30 ? Object.assign(o12, a30) : t7[s13] = a30;
      } else L2({ renderingRule: o12, templates: n18 });
    }));
    else {
      if (!n18.has(r13)) throw new s("raster-function-helper", `unsupported raster function json. _object_ref_id: ${r13} does not exist`);
      const t8 = n18.get(r13);
      "_object_ref_id" !== s12 ? o11[s12] = t8 : t8 && "object" == typeof t8 && Object.assign(o11, t8);
    }
  }
}
function O2(t6) {
  var _a;
  ((_a = t6.Statistics) == null ? void 0 : _a.length) && "object" == typeof t6.Statistics && (t6.Statistics = t6.Statistics.map((t7) => [t7.min, t7.max, t7.mean, t7.standardDeviation])), null != t6.NumberOfStandardDeviation && (t6.NumberOfStandardDeviations = t6.NumberOfStandardDeviation, delete t6.NumberOfStandardDeviation);
}
function G2(t6) {
  var _a, _b;
  "randomcolorramp" === ((_b = (_a = t6.ColorRamp) == null ? void 0 : _a.type) == null ? void 0 : _b.toLowerCase()) && (delete t6.ColorRamp, t6.ColormapName = "Random"), 0 === t6.ColorSchemeType && delete t6.ColorRamp;
}
function P2(t6) {
  null != t6.ConvolutionType && (t6.Type = t6.ConvolutionType, delete t6.ConvolutionType);
}
function I2(t6) {
  var _a;
  ((_a = t6.NoDataValues) == null ? void 0 : _a.length) && "string" == typeof t6.NoDataValues[0] && (t6.NoDataValues = t6.NoDataValues.filter((t7) => "" !== t7).map((t7) => Number(t7)));
}
v3.set("Arithmetic", { desc: "Arithmetic Function", ctor: a10, rasterArgumentNames: ["rasters"] }), v3.set("Aspect", { desc: "Aspect Function", ctor: p8, rasterArgumentNames: ["raster"] }), v3.set("BandArithmetic", { desc: "Band Arithmetic Function", ctor: m7, rasterArgumentNames: ["raster"] }), v3.set("Colormap", { desc: "Colormap Function", ctor: u10, rasterArgumentNames: ["raster"] }), v3.set("ColormapToRGB", { desc: "ColormapToRGB Function", ctor: u11, rasterArgumentNames: ["raster"] }), v3.set("CompositeBand", { desc: "CompositeBand Function", ctor: a17, rasterArgumentNames: ["rasters"] }), v3.set("ComputeChange", { desc: "ComputeChange Function", ctor: m11, rasterArgumentNames: ["rasters"] }), v3.set("Convolution", { desc: "Convolution Function", ctor: p13, rasterArgumentNames: ["raster"] }), v3.set("ContrastBrightness", { desc: "Contrast Brightness Function", ctor: p11, rasterArgumentNames: ["raster"] }), v3.set("ExtractBand", { desc: "ExtractBand Function", ctor: l16, rasterArgumentNames: ["raster"] }), v3.set("Curvature", { desc: "Curvature Function", ctor: c17, rasterArgumentNames: ["raster"] }), v3.set("Hillshade", { desc: "Hillshade Function", ctor: l18, rasterArgumentNames: ["raster"] }), v3.set("ShadedRelief", { desc: "ShadedRelief Function", ctor: x5, rasterArgumentNames: ["raster"] }), v3.set("Grayscale", { desc: "Grayscale Function", ctor: u16, rasterArgumentNames: ["raster"] }), v3.set("Clip", { desc: "Clip Function", ctor: u8, rasterArgumentNames: ["raster"] }), v3.set("Local", { desc: "Local Function", ctor: d9, rasterArgumentNames: ["rasters"] }), v3.set("Mask", { desc: "Mask Function", ctor: p15, rasterArgumentNames: ["raster"] }), v3.set("NDVI", { desc: "NDVI Function", ctor: a24, rasterArgumentNames: ["raster"] }), v3.set("Remap", { desc: "Remap Function", ctor: g6, rasterArgumentNames: ["raster"] }), v3.set("Slope", { desc: "Slope Function", ctor: c27, rasterArgumentNames: ["raster"] }), v3.set("Statistics", { desc: "Focal Statistics Function", ctor: p17, rasterArgumentNames: ["raster"] }), v3.set("StatisticsHistogram", { desc: "Statistics Histogram Function", ctor: n15, rasterArgumentNames: ["raster"] }), v3.set("Stretch", { desc: "Stretch Function", ctor: f6, rasterArgumentNames: ["raster"] }), v3.set("Table", { desc: "Attribute Table Function", ctor: n17, rasterArgumentNames: ["raster"] });

export {
  h4 as h,
  l9 as l,
  w6 as w,
  T2 as T
};
//# sourceMappingURL=chunk-I34S26RP.js.map
