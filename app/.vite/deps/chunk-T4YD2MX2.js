import {
  w
} from "./chunk-NENDDUWH.js";
import {
  s as s4
} from "./chunk-6P7HXSJ6.js";
import {
  d
} from "./chunk-LTDNORB5.js";
import {
  s as s3
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
  s as s2
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has,
  t
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/support/SimpleBandStatistics.js
var l = class {
  constructor(l5 = null, a7 = null, t3 = null) {
    this.minValue = l5, this.maxValue = a7, this.noDataValue = t3;
  }
};

// node_modules/@arcgis/core/layers/support/rasterFormats/pixelRangeUtils.js
var t2 = 9999999e31;
var n2 = 2e-7;
var e = { u1: [0, 1], u2: [0, 3], u4: [0, 15], u8: [0, 255], s8: [-128, 127], u16: [0, 65535], s16: [-32768, 32767], u32: [0, 4294967295], s32: [-2147483648, 2147483647], f32: [-34028234663852886e22, 34028234663852886e22], f64: [-Number.MAX_VALUE, Number.MAX_VALUE], unknown: void 0, c64: void 0, c128: void 0 };
function s5(t3) {
  return e[t3] ?? [-34028234663852886e22, 34028234663852886e22];
}
function l2(t3, n4) {
  return null == t3 || null == n4 ? "s32" : t3 < 0 ? t3 >= -128 && n4 < 128 ? "s8" : t3 >= -32768 && n4 < 32768 ? "s16" : "s32" : n4 < 256 ? "u8" : n4 < 65536 ? "u16" : "u32";
}
function o2(t3) {
  return ((t3 == null ? void 0 : t3.startsWith("s")) || (t3 == null ? void 0 : t3.startsWith("u"))) ?? false;
}
function u(t3, n4, e2, l5) {
  let [u6, i5] = s5(e2);
  const a7 = o2(e2);
  return a7 && (u6 -= 1e-5, i5 += 1e-5), a7 ? e2.startsWith("u") ? r2(t3, n4, l5, [u6, i5]) : c(t3, n4, l5, [u6, i5]) : f(t3, n4, l5, [u6, i5]);
}
function i(t3, n4) {
  for (let e2 = 0; e2 < n4.length; e2++) n4[e2] && isNaN(t3[e2]) && (n4[e2] = 0, t3[e2] = 0);
}
function r2(t3, n4, e2, s8) {
  const [l5, o5] = s8;
  for (let u6 = 0; u6 < n4.length; u6++) if (n4[u6]) {
    const s9 = t3[u6];
    s9 < l5 || s9 > o5 ? n4[u6] = 0 : e2[u6] = s9 + 0.5 | 0;
  }
}
function c(t3, n4, e2, s8) {
  const [l5, o5] = s8;
  for (let u6 = 0; u6 < n4.length; u6++) if (n4[u6]) {
    const s9 = t3[u6];
    s9 < l5 || s9 > o5 ? n4[u6] = 0 : e2[u6] = s9 + (s9 > 0 ? 0.5 : -0.5) | 0;
  }
}
function f(t3, n4, e2, s8) {
  const [l5, o5] = s8;
  for (let u6 = 0; u6 < n4.length; u6++) if (n4[u6]) {
    const s9 = t3[u6];
    s9 < l5 || s9 > o5 ? n4[u6] = 0 : e2[u6] = s9;
  }
}
function a3(e2, l5, o5) {
  var _a, _b;
  if (e2.depthCount && e2.depthCount > 1) return;
  const { pixels: u6, statistics: i5, pixelType: r5 } = e2, c6 = u6[0].length, f5 = e2.bandMasks ?? [], a7 = e2.mask ?? new Uint8Array(c6).fill(255), h4 = "f32" === r5 || "f64" === r5, g5 = s5(r5);
  let m5 = false;
  for (let s8 = 0; s8 < u6.length; s8++) {
    const e3 = "number" == typeof l5 ? l5 : l5[s8];
    if (null == e3) continue;
    const c7 = ((_a = i5 == null ? void 0 : i5[s8]) == null ? void 0 : _a.minValue) ?? g5[0], b4 = ((_b = i5 == null ? void 0 : i5[s8]) == null ? void 0 : _b.maxValue) ?? g5[1];
    if (c7 > e3 + Number.EPSILON || b4 < e3 - Number.EPSILON) continue;
    const N = f5[s8] || a7.slice(), d5 = u6[s8], p5 = o5 == null ? void 0 : o5.customFloatTolerance;
    if (h4 && 0 !== p5) {
      let s9 = p5;
      s9 || (s9 = Math.abs(e3) >= t2 ? n2 * Math.abs(e3) : "f32" === r5 ? 2 ** -23 : Number.EPSILON);
      for (let t3 = 0; t3 < d5.length; t3++) N[t3] && Math.abs(d5[t3] - e3) < s9 && (d5[t3] = 0, N[t3] = 0, a7[t3] = 0, m5 = true);
    } else for (let t3 = 0; t3 < d5.length; t3++) N[t3] && d5[t3] === e3 && (d5[t3] = 0, N[t3] = 0, a7[t3] = 0, m5 = true);
    f5[s8] = N;
  }
  if (m5) {
    const t3 = e2.bandMasks || e2.pixels.length > 1 ? f5 : null;
    (o5 == null ? void 0 : o5.matchAllNoData) ? e2.mask = t3 && t3.length > 1 ? b3(t3) : a7 : (e2.bandMasks = t3, e2.mask = a7);
  }
  function b3(t3) {
    if (t3.length < 2) return t3[0];
    const n4 = t3[0].length, e3 = new Uint8Array(n4).fill(0);
    for (let s8 = 0; s8 < t3.length; s8++) {
      const l6 = t3[s8];
      for (let t4 = 0; t4 < n4; t4++) l6[t4] && (e3[t4] = 255);
    }
    return e3;
  }
  m5 && "updateStatistics" in e2 && e2.updateStatistics();
}

// node_modules/@arcgis/core/layers/support/PixelBlock.js
var p;
var c2 = p = class extends S {
  static createEmptyBand(t3, e2) {
    return new (p.getPixelArrayConstructor(t3))(e2);
  }
  static combineBandMasks(t3) {
    if (t3.length < 2) return t3[0];
    const e2 = t3[0].length, s8 = new Uint8Array(e2).fill(255);
    for (let i5 = 0; i5 < t3.length; i5++) {
      const l5 = t3[i5];
      for (let t4 = 0; t4 < e2; t4++) l5[t4] || (s8[t4] = 0);
    }
    return s8;
  }
  static getPixelArrayConstructor(t3) {
    let e2;
    switch (t3) {
      case "u1":
      case "u2":
      case "u4":
      case "u8":
        e2 = Uint8Array;
        break;
      case "u16":
        e2 = Uint16Array;
        break;
      case "u32":
        e2 = Uint32Array;
        break;
      case "s8":
        e2 = Int8Array;
        break;
      case "s16":
        e2 = Int16Array;
        break;
      case "s32":
        e2 = Int32Array;
        break;
      case "f32":
      case "c64":
      case "c128":
      case "unknown":
        e2 = Float32Array;
        break;
      case "f64":
        e2 = Float64Array;
    }
    return e2;
  }
  constructor(t3) {
    super(t3), this.width = null, this.height = null, this.pixelType = "f32", this.validPixelCount = null, this.mask = null, this.maskIsAlpha = false, this.premultiplyAlpha = false, this.statistics = null, this.depthCount = 1;
  }
  castPixelType(t3) {
    if (!t3) return "f32";
    let e2 = t3.toLowerCase();
    return ["u1", "u2", "u4"].includes(e2) ? e2 = "u8" : ["unknown", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"].includes(e2) || (e2 = "f32"), e2;
  }
  getPlaneCount() {
    var _a;
    return (_a = this.pixels) == null ? void 0 : _a.length;
  }
  addData(t3) {
    if (!t3.pixels || t3.pixels.length !== this.width * this.height) throw new s("pixelblock:invalid-or-missing-pixels", "add data requires valid pixels array that has same length defined by pixel block width * height");
    this.pixels || (this.pixels = []), this.statistics || (this.statistics = []), this.pixels.push(t3.pixels), this.statistics.push(t3.statistics ?? new l());
  }
  getAsRGBA() {
    const t3 = new ArrayBuffer(this.width * this.height * 4);
    switch (this.pixelType) {
      case "s8":
      case "s16":
      case "u16":
      case "s32":
      case "u32":
      case "f32":
      case "f64":
        this._fillFromNon8Bit(t3);
        break;
      default:
        this._fillFrom8Bit(t3);
    }
    return new Uint8ClampedArray(t3);
  }
  getAsRGBAFloat() {
    const t3 = new Float32Array(this.width * this.height * 4);
    return this._fillFrom32Bit(t3), t3;
  }
  updateStatistics() {
    if (!this.pixels) return;
    this.statistics = this.pixels.map((t4) => u2(t4, this.mask));
    const t3 = this.mask;
    let e2 = 0;
    if (null != t3) for (let s8 = 0; s8 < t3.length; s8++) t3[s8] && e2++;
    else e2 = this.width * this.height;
    this.validPixelCount = e2;
  }
  clamp(t3) {
    if (!t3 || "f64" === t3 || "f32" === t3 || !this.pixels) return;
    const [e2, s8] = s5(t3), i5 = this.pixels, l5 = this.width * this.height, r5 = i5.length;
    let o5, n4, a7;
    const c6 = [];
    for (let h4 = 0; h4 < r5; h4++) {
      a7 = p.createEmptyBand(t3, l5), o5 = i5[h4];
      for (let t4 = 0; t4 < l5; t4++) n4 = o5[t4], a7[t4] = n4 > s8 ? s8 : n4 < e2 ? e2 : n4;
      c6.push(a7);
    }
    this.pixels = c6, this.pixelType = t3;
  }
  extractBands(t3) {
    var _a;
    const { pixels: e2, statistics: s8 } = this;
    if (null == t3 || 0 === t3.length || !e2 || 0 === e2.length) return this;
    const i5 = e2.length, l5 = t3.some((t4) => t4 >= e2.length), r5 = i5 === t3.length && !t3.some((t4, e3) => t4 !== e3);
    if (l5 || r5) return this;
    const o5 = ((_a = this.bandMasks) == null ? void 0 : _a.length) === i5 ? t3.map((t4) => this.bandMasks[t4]) : void 0;
    let { mask: n4, validPixelCount: a7 } = this;
    const { width: h4, height: c6 } = this;
    return (o5 == null ? void 0 : o5.length) && (n4 = p.combineBandMasks(o5), a7 = n4.filter((t4) => !!t4).length), new p({ pixelType: this.pixelType, width: h4, height: c6, mask: n4, bandMasks: o5, validPixelCount: a7, maskIsAlpha: this.maskIsAlpha, pixels: t3.map((t4) => e2[t4]), statistics: s8 && t3.map((t4) => s8[t4]) });
  }
  clone() {
    const t3 = new p({ width: this.width, height: this.height, pixelType: this.pixelType, maskIsAlpha: this.maskIsAlpha, validPixelCount: this.validPixelCount });
    let e2;
    null != this.mask && (t3.mask = new Uint8Array(this.mask)), this.bandMasks && (t3.bandMasks = this.bandMasks.map((t4) => new Uint8Array(t4)));
    const s8 = p.getPixelArrayConstructor(this.pixelType);
    if (this.pixels && this.pixels.length > 0) {
      t3.pixels = [];
      const i5 = !!this.pixels[0].slice;
      for (e2 = 0; e2 < this.pixels.length; e2++) t3.pixels[e2] = i5 ? this.pixels[e2].slice() : new s8(this.pixels[e2]);
    }
    if (this.statistics) for (t3.statistics = [], e2 = 0; e2 < this.statistics.length; e2++) t3.statistics[e2] = a(this.statistics[e2]);
    return t3.premultiplyAlpha = this.premultiplyAlpha, t3;
  }
  _fillFrom8Bit(t3) {
    const { mask: e2, maskIsAlpha: s8, premultiplyAlpha: i5, pixels: r5 } = this;
    if (!t3 || !(r5 == null ? void 0 : r5.length)) return void n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    let o5, n4, a7, h4;
    o5 = n4 = a7 = r5[0], r5.length >= 3 ? (n4 = r5[1], a7 = r5[2]) : 2 === r5.length && (n4 = r5[1]);
    const p5 = new Uint32Array(t3), c6 = this.width * this.height;
    if (o5.length === c6) if (null != e2 && e2.length === c6) if (s8) for (h4 = 0; h4 < c6; h4++) {
      const t4 = e2[h4];
      if (t4) {
        const e3 = t4 / 255;
        p5[h4] = i5 ? t4 << 24 | a7[h4] * e3 << 16 | n4[h4] * e3 << 8 | o5[h4] * e3 : t4 << 24 | a7[h4] << 16 | n4[h4] << 8 | o5[h4];
      }
    }
    else for (h4 = 0; h4 < c6; h4++) e2[h4] && (p5[h4] = 255 << 24 | a7[h4] << 16 | n4[h4] << 8 | o5[h4]);
    else for (h4 = 0; h4 < c6; h4++) p5[h4] = 255 << 24 | a7[h4] << 16 | n4[h4] << 8 | o5[h4];
    else n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
  }
  _fillFromNon8Bit(t3) {
    const { pixels: e2, mask: s8, statistics: i5 } = this;
    if (!t3 || !(e2 == null ? void 0 : e2.length)) return void n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    const r5 = this.pixelType;
    let o5 = 1, n4 = 0, a7 = 1;
    if (i5 && i5.length > 0) {
      for (const t4 of i5) if (null != t4.minValue && (n4 = Math.min(n4, t4.minValue)), null != t4.maxValue && null != t4.minValue) {
        const e3 = t4.maxValue - t4.minValue;
        a7 = Math.max(a7, e3);
      }
      o5 = 255 / a7;
    } else {
      let t4 = 255;
      "s8" === r5 ? (n4 = -128, t4 = 127) : "u16" === r5 ? t4 = 65535 : "s16" === r5 ? (n4 = -32768, t4 = 32767) : "u32" === r5 ? t4 = 4294967295 : "s32" === r5 ? (n4 = -2147483648, t4 = 2147483647) : "f32" === r5 ? (n4 = -34e38, t4 = 34e38) : "f64" === r5 && (n4 = -Number.MAX_VALUE, t4 = Number.MAX_VALUE), o5 = 255 / (t4 - n4);
    }
    const h4 = new Uint32Array(t3), p5 = this.width * this.height;
    let c6, u6, g5, f5, m5;
    if (c6 = u6 = g5 = e2[0], c6.length !== p5) return n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
    if (e2.length >= 2) if (u6 = e2[1], e2.length >= 3 && (g5 = e2[2]), null != s8 && s8.length === p5) for (f5 = 0; f5 < p5; f5++) s8[f5] && (h4[f5] = 255 << 24 | (g5[f5] - n4) * o5 << 16 | (u6[f5] - n4) * o5 << 8 | (c6[f5] - n4) * o5);
    else for (f5 = 0; f5 < p5; f5++) h4[f5] = 255 << 24 | (g5[f5] - n4) * o5 << 16 | (u6[f5] - n4) * o5 << 8 | (c6[f5] - n4) * o5;
    else if (null != s8 && s8.length === p5) for (f5 = 0; f5 < p5; f5++) m5 = (c6[f5] - n4) * o5, s8[f5] && (h4[f5] = 255 << 24 | m5 << 16 | m5 << 8 | m5);
    else for (f5 = 0; f5 < p5; f5++) m5 = (c6[f5] - n4) * o5, h4[f5] = 255 << 24 | m5 << 16 | m5 << 8 | m5;
  }
  _fillFrom32Bit(t3) {
    const { pixels: e2, mask: s8 } = this;
    if (!t3 || !(e2 == null ? void 0 : e2.length)) return n.getLogger(this).error("getAsRGBAFloat()", "Unable to convert to RGBA. The input pixel block is empty.");
    let i5, r5, o5, n4;
    i5 = r5 = o5 = e2[0], e2.length >= 3 ? (r5 = e2[1], o5 = e2[2]) : 2 === e2.length && (r5 = e2[1]);
    const a7 = this.width * this.height;
    if (i5.length !== a7) return n.getLogger(this).error("getAsRGBAFloat()", "Unable to convert to RGBA. The pixelblock is invalid.");
    let h4 = 0;
    if (null != s8 && s8.length === a7) for (n4 = 0; n4 < a7; n4++) t3[h4++] = i5[n4], t3[h4++] = r5[n4], t3[h4++] = o5[n4], t3[h4++] = 1 & s8[n4];
    else for (n4 = 0; n4 < a7; n4++) t3[h4++] = i5[n4], t3[h4++] = r5[n4], t3[h4++] = o5[n4], t3[h4++] = 1;
  }
};
function u2(t3, e2) {
  let s8 = 1 / 0, i5 = -1 / 0;
  const l5 = t3.length;
  let r5, o5 = 0;
  if (null != e2) for (r5 = 0; r5 < l5; r5++) e2[r5] && (o5 = t3[r5], s8 = o5 < s8 ? o5 : s8, i5 = o5 > i5 ? o5 : i5);
  else for (r5 = 0; r5 < l5; r5++) o5 = t3[r5], s8 = o5 < s8 ? o5 : s8, i5 = o5 > i5 ? o5 : i5;
  return new l(s8, i5);
}
r([m({ json: { write: true } })], c2.prototype, "width", void 0), r([m({ json: { write: true } })], c2.prototype, "height", void 0), r([m({ json: { write: true } })], c2.prototype, "pixelType", void 0), r([s3("pixelType")], c2.prototype, "castPixelType", null), r([m({ json: { write: true } })], c2.prototype, "validPixelCount", void 0), r([m({ json: { write: true } })], c2.prototype, "mask", void 0), r([m({ json: { write: true } })], c2.prototype, "maskIsAlpha", void 0), r([m({ json: { write: true } })], c2.prototype, "pixels", void 0), r([m()], c2.prototype, "premultiplyAlpha", void 0), r([m({ json: { write: true } })], c2.prototype, "statistics", void 0), r([m({ json: { write: true } })], c2.prototype, "depthCount", void 0), r([m({ json: { write: true } })], c2.prototype, "noDataValues", void 0), r([m({ json: { write: true } })], c2.prototype, "bandMasks", void 0), c2 = p = r([a2("esri.layers.support.PixelBlock")], c2);
var g = c2;

// node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js
var n3;
var l3;
!function(t3) {
  t3[t3.matchAny = 0] = "matchAny", t3[t3.matchAll = 1] = "matchAll";
}(n3 || (n3 = {})), function(t3) {
  t3[t3.bestMatch = 0] = "bestMatch", t3[t3.fail = 1] = "fail";
}(l3 || (l3 = {}));
var i2 = 6;
function o3(t3) {
  return null != t3 && "esri.layers.support.PixelBlock" === t3.declaredClass && t3.pixels && t3.pixels.length > 0;
}
function r3(e2) {
  var _a;
  if (!(e2 == null ? void 0 : e2.length) || e2.some((t3) => !o3(t3))) return null;
  if (1 === e2.length) return ((_a = e2[0]) == null ? void 0 : _a.clone()) ?? null;
  const n4 = e2, { width: l5, height: i5, pixelType: s8 } = n4[0];
  if (n4.some((t3) => t3.width !== l5 || t3.height !== i5)) return null;
  const r5 = n4.map(({ mask: t3 }) => t3).filter((t3) => null != t3);
  let a7 = null;
  r5.length && (a7 = new Uint8Array(l5 * i5), a7.set(r5[0]), r5.length > 1 && m2(r5.slice(1), a7));
  const h4 = [];
  n4.forEach(({ pixels: t3 }) => h4.push(...t3));
  const f5 = n4.map(({ statistics: t3 }) => t3).filter((t3) => t3 == null ? void 0 : t3.length), c6 = [];
  return f5.forEach((t3) => c6.push(...t3)), new g({ pixelType: s8, width: l5, height: i5, mask: a7, pixels: h4, statistics: c6.length ? c6 : null });
}
function a4(t3) {
  if (!t3) return;
  const e2 = t3.colormap;
  if (!e2 || 0 === e2.length) return;
  const n4 = e2.sort((t4, e3) => t4[0] - e3[0]);
  let l5 = 0;
  n4[0][0] < 0 && (l5 = n4[0][0]);
  const i5 = Math.max(256, n4[n4.length - 1][0] - l5 + 1), o5 = new Uint8Array(4 * i5), s8 = [];
  let r5, a7 = 0, h4 = 0;
  const f5 = 5 === n4[0].length;
  if (i5 > 65536) return n4.forEach((t4) => {
    s8[t4[0] - l5] = f5 ? t4.slice(1) : t4.slice(1).concat([255]);
  }), { indexed2DColormap: s8, offset: l5, alphaSpecified: f5 };
  if (t3.fillUnspecified) for (r5 = n4[h4], a7 = r5[0] - l5; a7 < i5; a7++) o5[4 * a7] = r5[1], o5[4 * a7 + 1] = r5[2], o5[4 * a7 + 2] = r5[3], o5[4 * a7 + 3] = f5 ? r5[4] : 255, a7 === r5[0] - l5 && (r5 = h4 === n4.length - 1 ? r5 : n4[++h4]);
  else for (a7 = 0; a7 < n4.length; a7++) r5 = n4[a7], h4 = 4 * (r5[0] - l5), o5[h4] = r5[1], o5[h4 + 1] = r5[2], o5[h4 + 2] = r5[3], o5[h4 + 3] = f5 ? r5[4] : 255;
  return { indexedColormap: o5, offset: l5, alphaSpecified: f5 };
}
function h(t3, e2) {
  if (!o3(t3)) return t3;
  if (!e2 || !e2.indexedColormap && !e2.indexed2DColormap) return t3;
  const n4 = t3.clone(), l5 = n4.pixels;
  let i5 = n4.mask;
  const s8 = n4.width * n4.height;
  if (1 !== l5.length) return t3;
  const { indexedColormap: r5, indexed2DColormap: a7, offset: h4, alphaSpecified: f5 } = e2;
  let c6 = 0;
  const u6 = l5[0], p5 = new Uint8Array(u6.length), x3 = new Uint8Array(u6.length), d5 = new Uint8Array(u6.length);
  let m5, g5 = 0;
  if (r5) {
    const t4 = r5.length - 1;
    if (null != i5) for (c6 = 0; c6 < s8; c6++) i5[c6] && (g5 = 4 * (u6[c6] - h4), g5 < h4 || g5 > t4 ? i5[c6] = 0 : (p5[c6] = r5[g5], x3[c6] = r5[g5 + 1], d5[c6] = r5[g5 + 2], i5[c6] = r5[g5 + 3]));
    else {
      for (i5 = new Uint8Array(s8), c6 = 0; c6 < s8; c6++) g5 = 4 * (u6[c6] - h4), g5 < h4 || g5 > t4 ? i5[c6] = 0 : (p5[c6] = r5[g5], x3[c6] = r5[g5 + 1], d5[c6] = r5[g5 + 2], i5[c6] = r5[g5 + 3]);
      n4.mask = i5;
    }
  } else if (a7) if (null != i5) for (c6 = 0; c6 < s8; c6++) i5[c6] && (m5 = a7[u6[c6]], p5[c6] = m5[0], x3[c6] = m5[1], d5[c6] = m5[2], i5[c6] = m5[3]);
  else {
    for (i5 = new Uint8Array(s8), c6 = 0; c6 < s8; c6++) m5 = a7[u6[c6]], p5[c6] = m5[0], x3[c6] = m5[1], d5[c6] = m5[2], i5[c6] = m5[3];
    n4.mask = i5;
  }
  return n4.pixels = [p5, x3, d5], n4.statistics = null, n4.pixelType = "u8", n4.maskIsAlpha = f5, n4;
}
function f2(e2, n4) {
  if (!o3(e2)) return null;
  const { pixels: l5, mask: i5 } = e2, s8 = l5.length;
  let r5 = n4.lut;
  const { offset: a7 } = n4;
  r5 && 1 === r5[0].length && (r5 = l5.map(() => r5));
  const h4 = [], f5 = n4.outputPixelType || "u8";
  for (let t3 = 0; t3 < s8; t3++) {
    const e3 = c3(l5[t3], i5, r5[t3], a7 || 0, f5);
    h4.push(e3);
  }
  const u6 = new g({ width: e2.width, height: e2.height, pixels: h4, mask: i5, pixelType: f5 });
  return u6.updateStatistics(), u6;
}
function c3(e2, n4, l5, i5, o5) {
  const s8 = e2.length, r5 = g.createEmptyBand(o5, s8);
  if (n4) for (let t3 = 0; t3 < s8; t3++) n4[t3] && (r5[t3] = l5[e2[t3] - i5]);
  else for (let t3 = 0; t3 < s8; t3++) r5[t3] = l5[e2[t3] - i5];
  return r5;
}
function u3(t3, e2) {
  if (!o3(t3)) return null;
  const n4 = t3.clone(), { pixels: l5 } = n4, i5 = n4.width * n4.height, s8 = e2.length, r5 = Math.floor(s8 / 2), a7 = e2[Math.floor(r5)], h4 = l5[0];
  let f5, c6, u6, p5, x3, d5, m5 = false;
  const g5 = new Uint8Array(i5), y4 = new Uint8Array(i5), w5 = new Uint8Array(i5);
  let k3 = n4.mask;
  const M3 = 4 === e2[0].mappedColor.length;
  for (k3 || (k3 = new Uint8Array(i5), k3.fill(M3 ? 255 : 1), n4.mask = k3), x3 = 0; x3 < i5; x3++) if (k3[x3]) {
    for (f5 = h4[x3], m5 = false, d5 = r5, c6 = a7, u6 = 0, p5 = s8 - 1; p5 - u6 > 1; ) {
      if (f5 === c6.value) {
        m5 = true;
        break;
      }
      f5 > c6.value ? u6 = d5 : p5 = d5, d5 = Math.floor((u6 + p5) / 2), c6 = e2[Math.floor(d5)];
    }
    m5 || (f5 === e2[u6].value ? (c6 = e2[u6], m5 = true) : f5 === e2[p5].value ? (c6 = e2[p5], m5 = true) : f5 < e2[u6].value ? (m5 = false, c6 = null) : f5 > e2[u6].value && (f5 < e2[p5].value ? (c6 = e2[u6], m5 = true) : p5 === s8 - 1 ? (m5 = false, c6 = null) : (c6 = e2[p5], m5 = true))), m5 ? (g5[x3] = c6.mappedColor[0], y4[x3] = c6.mappedColor[1], w5[x3] = c6.mappedColor[2], k3[x3] = c6.mappedColor[3]) : g5[x3] = y4[x3] = w5[x3] = k3[x3] = 0;
  }
  return n4.pixels = [g5, y4, w5], n4.mask = k3, n4.pixelType = "u8", n4.maskIsAlpha = M3, n4;
}
function p2(n4, l5) {
  if (!o3(n4)) return null;
  const { width: i5, height: s8 } = n4, { inputRanges: r5, outputValues: a7, outputPixelType: h4, noDataRanges: f5, allowUnmatched: c6, isLastInputRangeInclusive: u6 } = l5, p5 = n4.pixels[0], x3 = g.createEmptyBand(h4, p5.length), d5 = n4.mask, m5 = new Uint8Array(i5 * s8);
  d5 ? m5.set(d5) : m5.fill(255);
  const g5 = n4.pixelType.startsWith("f") ? 1e-6 : 0, y4 = r5.map((t3) => t3 - g5);
  y4[0] = r5[0], y4[y4.length - 1] = r5[r5.length - 1] + (u6 ? 1e-6 : 0);
  const w5 = r5.length / 2, [k3, M3] = s5(h4);
  for (let t3 = 0; t3 < s8; t3++) for (let e2 = 0; e2 < i5; e2++) {
    const n5 = t3 * i5 + e2;
    if (m5[n5]) {
      const t4 = p5[n5];
      let e3 = false;
      for (let l6 = w5 - 1; l6 >= 0; l6--) if (t4 === y4[2 * l6] || t4 > y4[2 * l6] && t4 < y4[2 * l6 + 1]) {
        x3[n5] = a7[l6], e3 = true;
        break;
      }
      e3 || (c6 ? x3[n5] = t4 > M3 ? M3 : t4 < k3 ? k3 : t4 : m5[n5] = 0);
    }
  }
  const A3 = f5 == null ? void 0 : f5.length;
  if (A3) for (let t3 = 0; t3 < s8; t3++) for (let e2 = 0; e2 < i5; e2++) {
    const n5 = t3 * i5 + e2;
    if (!d5 || d5[n5]) {
      const t4 = p5[n5];
      for (let e3 = 0; e3 < A3; e3 += 2) if (t4 >= f5[e3] && t4 <= f5[e3 + 1]) {
        x3[n5] = 0, m5[n5] = 0;
        break;
      }
    }
  }
  return new g({ width: i5, height: s8, pixelType: h4, pixels: [x3], mask: m5 });
}
function x(t3, e2, n4, l5) {
  const i5 = null != n4 && n4.length >= 2 ? new Set(n4) : null, o5 = 1 === (n4 == null ? void 0 : n4.length) ? n4[0] : null, s8 = !!(e2 == null ? void 0 : e2.length);
  for (let r5 = 0; r5 < t3.length; r5++) if (l5[r5]) {
    const n5 = t3[r5];
    if (s8) {
      let t4 = false;
      for (let l6 = 0; l6 < e2.length; l6 += 2) if (n5 >= e2[l6] && n5 <= e2[l6 + 1]) {
        t4 = true;
        break;
      }
      t4 || (l5[r5] = 0);
    }
    l5[r5] && (n5 === o5 || (i5 == null ? void 0 : i5.has(n5))) && (l5[r5] = 0);
  }
}
function d2(t3, e2) {
  const n4 = t3[0].length;
  for (let l5 = 0; l5 < n4; l5++) if (e2[l5]) {
    let n5 = false;
    for (let e3 = 0; e3 < t3.length; e3++) if (t3[e3][l5]) {
      n5 = true;
      break;
    }
    n5 || (e2[l5] = 0);
  }
}
function m2(t3, e2) {
  const n4 = t3[0].length;
  for (let l5 = 0; l5 < n4; l5++) if (e2[l5]) {
    let n5 = false;
    for (let e3 = 0; e3 < t3.length; e3++) if (0 === t3[e3][l5]) {
      n5 = true;
      break;
    }
    n5 && (e2[l5] = 0);
  }
}
function g2(e2, n4) {
  if (!o3(e2)) return null;
  const { width: l5, height: i5, pixels: s8 } = e2, r5 = l5 * i5, a7 = new Uint8Array(r5);
  e2.mask ? a7.set(e2.mask) : a7.fill(255);
  const h4 = s8.length, { includedRanges: f5, noDataValues: u6, outputPixelType: p5, matchAll: g5, lookups: y4 } = n4;
  if (y4) {
    const t3 = [];
    for (let e3 = 0; e3 < h4; e3++) {
      const n5 = y4[e3], l6 = c3(s8[e3], a7, n5.lut, n5.offset || 0, "u8");
      t3.push(l6);
    }
    1 === t3.length ? a7.set(t3[0]) : g5 ? d2(t3, a7) : m2(t3, a7);
  } else if (g5) {
    const t3 = [];
    for (let e3 = 0; e3 < h4; e3++) {
      const n5 = new Uint8Array(r5);
      n5.set(a7), x(s8[e3], f5 == null ? void 0 : f5.slice(2 * e3, 2 * e3 + 2), u6 == null ? void 0 : u6[e3], n5), t3.push(n5);
    }
    1 === t3.length ? a7.set(t3[0]) : d2(t3, a7);
  } else for (let t3 = 0; t3 < h4; t3++) x(s8[t3], f5 == null ? void 0 : f5.slice(2 * t3, 2 * t3 + 2), u6 == null ? void 0 : u6[t3], a7);
  return new g({ width: l5, height: i5, pixelType: p5, pixels: s8, mask: a7 });
}
function y(n4) {
  const { srcPixelType: l5, inputRanges: i5, outputValues: o5, allowUnmatched: s8, noDataRanges: r5, isLastInputRangeInclusive: a7, outputPixelType: h4 } = n4;
  if ("u8" !== l5 && "s8" !== l5 && "u16" !== l5 && "s16" !== l5) return null;
  const f5 = l5.includes("16") ? 65536 : 256, c6 = l5.includes("s") ? -f5 / 2 : 0, u6 = g.createEmptyBand(h4, f5), p5 = new Uint8Array(f5);
  s8 && p5.fill(255);
  const [x3, d5] = s5(h4);
  if ((i5 == null ? void 0 : i5.length) && (o5 == null ? void 0 : o5.length)) {
    const t3 = 1e-6, e2 = i5.map((e3) => e3 - t3);
    e2[0] = i5[0], a7 && (e2[e2.length - 1] = i5[i5.length - 1]);
    for (let n5 = 0; n5 < e2.length; n5++) {
      const t4 = o5[n5] > d5 ? d5 : o5[n5] < x3 ? x3 : o5[n5], l6 = Math.ceil(e2[2 * n5] - c6), i6 = Math.floor(e2[2 * n5 + 1] - c6);
      for (let e3 = l6; e3 <= i6; e3++) u6[e3] = t4, p5[e3] = 255;
    }
  }
  if (r5 == null ? void 0 : r5.length) for (let t3 = 0; t3 < r5.length; t3++) {
    const e2 = Math.ceil(r5[2 * t3] - c6), n5 = Math.floor(r5[2 * t3 + 1] - c6);
    for (let t4 = e2; t4 <= n5; t4++) p5[t4] = 0;
  }
  return { lut: u6, offset: c6, mask: p5 };
}
function w2(t3, e2, n4) {
  if ("u8" !== t3 && "s8" !== t3 && "u16" !== t3 && "s16" !== t3) return null;
  const l5 = t3.includes("16") ? 65536 : 256, i5 = t3.includes("s") ? -l5 / 2 : 0, o5 = new Uint8Array(l5);
  if (e2) for (let s8 = 0; s8 < e2.length; s8++) {
    const t4 = Math.ceil(e2[2 * s8] - i5), n5 = Math.floor(e2[2 * s8 + 1] - i5);
    for (let e3 = t4; e3 <= n5; e3++) o5[e3] = 255;
  }
  else o5.fill(255);
  if (n4) for (let s8 = 0; s8 < n4.length; s8++) o5[n4[s8] - i5] = 0;
  return { lut: o5, offset: i5 };
}
function k(t3, e2, n4, l5, i5, o5, s8, r5) {
  return { xmin: i5 <= n4 * t3 ? 0 : i5 < n4 * t3 + t3 ? i5 - n4 * t3 : t3, ymin: o5 <= l5 * e2 ? 0 : o5 < l5 * e2 + e2 ? o5 - l5 * e2 : e2, xmax: i5 + s8 <= n4 * t3 ? 0 : i5 + s8 < n4 * t3 + t3 ? i5 + s8 - n4 * t3 : t3, ymax: o5 + r5 <= l5 * e2 ? 0 : o5 + r5 < l5 * e2 + e2 ? o5 + r5 - l5 * e2 : e2 };
}
function M(t3, e2) {
  if (!t3 || 0 === t3.length) return null;
  const n4 = t3.find((t4) => t4.pixelBlock);
  if (null == (n4 == null ? void 0 : n4.pixelBlock)) return null;
  const l5 = (n4.extent.xmax - n4.extent.xmin) / n4.pixelBlock.width, i5 = (n4.extent.ymax - n4.extent.ymin) / n4.pixelBlock.height, o5 = 0.01 * Math.min(l5, i5), s8 = t3.sort((t4, e3) => Math.abs(t4.extent.ymax - e3.extent.ymax) > o5 ? e3.extent.ymax - t4.extent.ymax : Math.abs(t4.extent.xmin - e3.extent.xmin) > o5 ? t4.extent.xmin - e3.extent.xmin : 0), r5 = Math.min.apply(null, s8.map((t4) => t4.extent.xmin)), a7 = Math.min.apply(null, s8.map((t4) => t4.extent.ymin)), h4 = Math.max.apply(null, s8.map((t4) => t4.extent.xmax)), f5 = Math.max.apply(null, s8.map((t4) => t4.extent.ymax)), c6 = { x: Math.round((e2.xmin - r5) / l5), y: Math.round((f5 - e2.ymax) / i5) }, u6 = { width: Math.round((h4 - r5) / l5), height: Math.round((f5 - a7) / i5) }, p5 = { width: Math.round((e2.xmax - e2.xmin) / l5), height: Math.round((e2.ymax - e2.ymin) / i5) };
  if (Math.round(u6.width / n4.pixelBlock.width) * Math.round(u6.height / n4.pixelBlock.height) !== s8.length || c6.x < 0 || c6.y < 0 || u6.width < p5.width || u6.height < p5.height) return null;
  return { extent: e2, pixelBlock: U(s8.map((t4) => t4.pixelBlock), u6, { clipOffset: c6, clipSize: p5 }) };
}
function A(t3, e2, n4, l5, i5, o5) {
  const { width: s8, height: r5 } = n4.block, { x: a7, y: h4 } = n4.offset, { width: f5, height: c6 } = n4.mosaic, u6 = k(s8, r5, l5, i5, a7, h4, f5, c6);
  let p5 = 0, x3 = 0;
  if (o5) {
    const t4 = o5.hasGCSSShiftTransform ? 360 : o5.halfWorldWidth ?? 0, e3 = s8 * o5.resolutionX, n5 = o5.startX + l5 * e3;
    n5 < t4 && n5 + e3 > t4 ? x3 = o5.rightPadding : n5 >= t4 && (p5 = o5.leftMargin - o5.rightPadding, x3 = 0);
  }
  if (u6.xmax -= x3, "number" != typeof e2) for (let d5 = u6.ymin; d5 < u6.ymax; d5++) {
    const n5 = (i5 * r5 + d5 - h4) * f5 + (l5 * s8 - a7) + p5, o6 = d5 * s8;
    for (let l6 = u6.xmin; l6 < u6.xmax; l6++) t3[n5 + l6] = e2[o6 + l6];
  }
  else for (let d5 = u6.ymin; d5 < u6.ymax; d5++) {
    const n5 = (i5 * r5 + d5 - h4) * f5 + (l5 * s8 - a7) + p5;
    for (let l6 = u6.xmin; l6 < u6.xmax; l6++) t3[n5 + l6] = e2;
  }
}
function U(e2, n4, l5 = {}) {
  var _a;
  const { clipOffset: i5, clipSize: s8, alignmentInfo: r5, blockWidths: a7 } = l5;
  if (a7) return b(e2, n4, { blockWidths: a7 });
  const h4 = e2.find((t3) => o3(t3));
  if (null == h4) return null;
  const f5 = s8 ? s8.width : n4.width, c6 = s8 ? s8.height : n4.height, u6 = h4.width, p5 = h4.height, x3 = n4.width / u6, d5 = n4.height / p5, m5 = { offset: i5 || { x: 0, y: 0 }, mosaic: s8 || n4, block: { width: u6, height: p5 } }, g5 = h4.pixelType, y4 = g.getPixelArrayConstructor(g5), w5 = h4.pixels.length, k3 = [];
  let M3, U3;
  for (let t3 = 0; t3 < w5; t3++) {
    U3 = new y4(f5 * c6);
    for (let n5 = 0; n5 < d5; n5++) for (let l6 = 0; l6 < x3; l6++) {
      const i6 = e2[n5 * x3 + l6];
      o3(i6) && (M3 = i6.pixels[t3], A(U3, M3, m5, l6, n5, r5));
    }
    k3.push(U3);
  }
  const T2 = e2.some((t3) => null == t3 || null != t3.mask && t3.mask.length > 0), v3 = e2.some((t3) => (t3 == null ? void 0 : t3.bandMasks) && t3.bandMasks.length > 1), B2 = T2 ? new Uint8Array(f5 * c6) : void 0, C2 = v3 ? [] : void 0;
  if (B2) {
    for (let t3 = 0; t3 < d5; t3++) for (let n5 = 0; n5 < x3; n5++) {
      const l6 = e2[t3 * x3 + n5], i6 = null != l6 ? l6.mask : null;
      A(B2, null != i6 ? i6 : l6 ? 255 : 0, m5, n5, t3, r5);
    }
    if (C2) for (let t3 = 0; t3 < w5; t3++) {
      const n5 = new Uint8Array(f5 * c6);
      for (let l6 = 0; l6 < d5; l6++) for (let i6 = 0; i6 < x3; i6++) {
        const o5 = e2[l6 * x3 + i6], s9 = ((_a = o5 == null ? void 0 : o5.bandMasks) == null ? void 0 : _a[t3]) ?? (o5 == null ? void 0 : o5.mask);
        A(n5, null != s9 ? s9 : o5 ? 255 : 0, m5, i6, l6, r5);
      }
      C2.push(n5);
    }
  }
  const S4 = new g({ width: f5, height: c6, pixels: k3, pixelType: g5, bandMasks: C2, mask: B2 });
  return S4.updateStatistics(), S4;
}
function b(e2, n4, l5) {
  var _a;
  const i5 = e2.find((t3) => null != t3);
  if (null == i5) return null;
  const s8 = e2.some((t3) => null == t3 || !!t3.mask), { width: r5, height: a7 } = n4, h4 = s8 ? new Uint8Array(r5 * a7) : null, { blockWidths: f5 } = l5, c6 = [], u6 = i5.getPlaneCount(), p5 = g.getPixelArrayConstructor(i5.pixelType);
  if (s8) for (let t3 = 0, y4 = 0; t3 < e2.length; y4 += f5[t3], t3++) {
    const n5 = e2[t3];
    if (!o3(n5)) continue;
    const l6 = n5.mask;
    for (let e3 = 0; e3 < a7; e3++) for (let i6 = 0; i6 < f5[t3]; i6++) h4[e3 * r5 + i6 + y4] = null == l6 ? 255 : l6[e3 * n5.width + i6];
  }
  const x3 = e2.some((t3) => (t3 == null ? void 0 : t3.bandMasks) && t3.bandMasks.length > 1), d5 = x3 ? [] : void 0, m5 = r5 * a7;
  for (let t3 = 0; t3 < u6; t3++) {
    const n5 = new p5(m5), l6 = x3 ? new Uint8Array(m5) : void 0;
    for (let i6 = 0, s9 = 0; i6 < e2.length; s9 += f5[i6], i6++) {
      const h5 = e2[i6];
      if (!o3(h5)) continue;
      const c7 = h5.pixels[t3];
      if (null != c7) {
        for (let t4 = 0; t4 < a7; t4++) for (let e3 = 0; e3 < f5[i6]; e3++) n5[t4 * r5 + e3 + s9] = c7[t4 * h5.width + e3];
        if (l6) {
          const e3 = ((_a = h5.bandMasks) == null ? void 0 : _a[t3]) ?? h5.mask;
          for (let t4 = 0; t4 < a7; t4++) for (let n6 = 0; n6 < f5[i6]; n6++) l6[t4 * r5 + n6 + s9] = e3 ? e3[t4 * h5.width + n6] : 255;
        }
      }
    }
    c6.push(n5), d5 && l6 && d5.push(l6);
  }
  const g5 = new g({ width: r5, height: a7, mask: h4, bandMasks: d5, pixels: c6, pixelType: i5.pixelType });
  return g5.updateStatistics(), g5;
}
function T(t3, e2, n4) {
  if (!o3(t3)) return null;
  const { width: l5, height: i5 } = t3, s8 = e2.x, r5 = e2.y, a7 = n4.width + s8, h4 = n4.height + r5;
  if (s8 < 0 || r5 < 0 || a7 > l5 || h4 > i5) return t3;
  if (0 === s8 && 0 === r5 && a7 === l5 && h4 === i5) return t3;
  t3.mask || (t3.mask = new Uint8Array(l5 * i5));
  const f5 = t3.mask;
  for (let o5 = 0; o5 < i5; o5++) {
    const t4 = o5 * l5;
    for (let e3 = 0; e3 < l5; e3++) f5[t4 + e3] = o5 < r5 || o5 >= h4 || e3 < s8 || e3 >= a7 ? 0 : 1;
  }
  return t3.updateStatistics(), t3;
}
function v(t3) {
  if (!o3(t3)) return null;
  const e2 = t3.clone(), { width: n4, height: l5, pixels: i5 } = t3, s8 = i5[0], r5 = e2.pixels[0], a7 = t3.mask;
  for (let o5 = 2; o5 < l5 - 1; o5++) {
    const t4 = /* @__PURE__ */ new Map();
    for (let l6 = o5 - 2; l6 < o5 + 2; l6++) for (let e4 = 0; e4 < 4; e4++) {
      const i6 = l6 * n4 + e4;
      S2(t4, s8[i6], a7 ? a7[i6] : 1);
    }
    r5[o5 * n4] = B(t4), r5[o5 * n4 + 1] = r5[o5 * n4 + 2] = r5[o5 * n4];
    let e3 = 3;
    for (; e3 < n4 - 1; e3++) {
      let l6 = (o5 - 2) * n4 + e3 + 1;
      S2(t4, s8[l6], a7 ? a7[l6] : 1), l6 = (o5 - 1) * n4 + e3 + 1, S2(t4, s8[l6], a7 ? a7[l6] : 1), l6 = o5 * n4 + e3 + 1, S2(t4, s8[l6], a7 ? a7[l6] : 1), l6 = (o5 + 1) * n4 + e3 + 1, S2(t4, s8[l6], a7 ? a7[l6] : 1), l6 = (o5 - 2) * n4 + e3 - 3, C(t4, s8[l6], a7 ? a7[l6] : 1), l6 = (o5 - 1) * n4 + e3 - 3, C(t4, s8[l6], a7 ? a7[l6] : 1), l6 = o5 * n4 + e3 - 3, C(t4, s8[l6], a7 ? a7[l6] : 1), l6 = (o5 + 1) * n4 + e3 - 3, C(t4, s8[l6], a7 ? a7[l6] : 1), r5[o5 * n4 + e3] = B(t4);
    }
    r5[o5 * n4 + e3 + 1] = r5[o5 * n4 + e3];
  }
  for (let o5 = 0; o5 < n4; o5++) r5[o5] = r5[n4 + o5] = r5[2 * n4 + o5], r5[(l5 - 1) * n4 + o5] = r5[(l5 - 2) * n4 + o5];
  return e2.updateStatistics(), e2;
}
function B(t3) {
  if (0 === t3.size) return 0;
  let e2 = 0, n4 = -1, l5 = 0;
  const i5 = t3.keys();
  let o5 = i5.next();
  for (; !o5.done; ) l5 = t3.get(o5.value), l5 > e2 && (n4 = o5.value, e2 = l5), o5 = i5.next();
  return n4;
}
function C(t3, e2, n4) {
  if (0 === n4) return;
  const l5 = t3.get(e2);
  1 === l5 ? t3.delete(e2) : t3.set(e2, l5 - 1);
}
function S2(t3, e2, n4) {
  0 !== n4 && t3.set(e2, t3.has(e2) ? t3.get(e2) + 1 : 1);
}
function P(e2, n4, l5) {
  let { x: i5, y: s8 } = n4;
  const { width: r5, height: a7 } = l5;
  if (0 === i5 && 0 === s8 && a7 === e2.height && r5 === e2.width) return e2;
  const { width: h4, height: f5 } = e2, c6 = Math.max(0, s8), u6 = Math.max(0, i5), p5 = Math.min(i5 + r5, h4), x3 = Math.min(s8 + a7, f5);
  if (p5 < 0 || x3 < 0 || !o3(e2)) return null;
  i5 = Math.max(0, -i5), s8 = Math.max(0, -s8);
  const { pixels: d5 } = e2, m5 = r5 * a7, g5 = d5.length, y4 = [];
  for (let o5 = 0; o5 < g5; o5++) {
    const n5 = d5[o5], l6 = g.createEmptyBand(e2.pixelType, m5);
    for (let t3 = c6; t3 < x3; t3++) {
      const e3 = t3 * h4;
      let o6 = (t3 + s8 - c6) * r5 + i5;
      for (let t4 = u6; t4 < p5; t4++) l6[o6++] = n5[e3 + t4];
    }
    y4.push(l6);
  }
  const w5 = new Uint8Array(m5), k3 = e2.mask;
  for (let t3 = c6; t3 < x3; t3++) {
    const e3 = t3 * h4;
    let n5 = (t3 + s8 - c6) * r5 + i5;
    for (let t4 = u6; t4 < p5; t4++) w5[n5++] = k3 ? k3[e3 + t4] : 1;
  }
  const M3 = new g({ width: l5.width, height: l5.height, pixelType: e2.pixelType, pixels: y4, mask: w5 });
  return M3.updateStatistics(), M3;
}
function _(e2, n4 = true) {
  if (!o3(e2)) return null;
  const { pixels: l5, width: i5, height: s8, mask: r5, pixelType: a7 } = e2, h4 = [], f5 = Math.round(i5 / 2), c6 = Math.round(s8 / 2), u6 = s8 - 1, p5 = i5 - 1;
  for (let o5 = 0; o5 < l5.length; o5++) {
    const e3 = l5[o5], r6 = g.createEmptyBand(a7, f5 * c6);
    let x4 = 0;
    for (let t3 = 0; t3 < s8; t3 += 2) for (let l6 = 0; l6 < i5; l6 += 2) {
      const o6 = e3[t3 * i5 + l6];
      if (n4) {
        const n5 = l6 === p5 ? o6 : e3[t3 * i5 + l6 + 1], s9 = t3 === u6 ? o6 : e3[t3 * i5 + l6 + i5], a8 = l6 === p5 ? s9 : t3 === u6 ? n5 : e3[t3 * i5 + l6 + i5 + 1];
        r6[x4++] = (o6 + n5 + s9 + a8) / 4;
      } else r6[x4++] = o6;
    }
    h4.push(r6);
  }
  let x3 = null;
  if (null != r5) {
    x3 = new Uint8Array(f5 * c6);
    let t3 = 0;
    for (let e3 = 0; e3 < s8; e3 += 2) for (let l6 = 0; l6 < i5; l6 += 2) {
      const o5 = r5[e3 * i5 + l6];
      if (n4) {
        const n5 = l6 === p5 ? o5 : r5[e3 * i5 + l6 + 1], s9 = e3 === u6 ? o5 : r5[e3 * i5 + l6 + i5], a8 = l6 === p5 ? s9 : e3 === u6 ? n5 : r5[e3 * i5 + l6 + i5 + 1];
        x3[t3++] = o5 * n5 * s9 * a8 ? 1 : 0;
      } else x3[t3++] = o5;
    }
  }
  return new g({ width: f5, height: c6, pixelType: a7, pixels: h4, mask: x3 });
}
function W(t3, e2, n4 = 0, l5 = true) {
  if (!o3(t3)) return null;
  const { width: i5, height: s8 } = e2;
  let { width: r5, height: a7 } = t3;
  const h4 = /* @__PURE__ */ new Map(), f5 = { x: 0, y: 0 }, c6 = 1 + n4;
  let u6 = t3;
  for (let o5 = 0; o5 < c6; o5++) {
    const t4 = Math.ceil(r5 / i5), n5 = Math.ceil(a7 / s8);
    for (let l6 = 0; l6 < n5; l6++) {
      f5.y = l6 * s8;
      for (let n6 = 0; n6 < t4; n6++) {
        f5.x = n6 * i5;
        const t5 = P(u6, f5, e2);
        h4.set(`${o5}/${l6}/${n6}`, t5);
      }
    }
    o5 < c6 - 1 && (u6 = _(u6, l5)), r5 = Math.round(r5 / 2), a7 = Math.round(a7 / 2);
  }
  return h4;
}
function E(t3) {
  const { pixelBlock: e2, tileSize: n4, level: l5, row: i5, col: s8, useBilinear: r5 } = t3;
  if (!o3(e2)) return null;
  const { width: a7, height: h4 } = n4, f5 = 2 ** l5, c6 = f5 * a7, u6 = f5 * h4;
  let p5 = P(e2, { y: i5 * u6, x: s8 * c6 }, { width: c6, height: u6 });
  if (!p5) return null;
  for (let o5 = l5; o5 > 0; o5--) p5 = _(p5, r5);
  return p5;
}
function I(t3, e2, n4, l5, i5 = 0) {
  const { width: o5, height: s8 } = t3, { width: r5, height: a7 } = e2, h4 = l5.cols, f5 = l5.rows, c6 = Math.ceil(r5 / h4 - 0.1 / h4), u6 = Math.ceil(a7 / f5 - 0.1 / f5);
  let p5, x3, d5, m5, g5, y4, w5;
  const k3 = c6 * h4, M3 = k3 * u6 * f5, A3 = new Float32Array(M3), U3 = new Float32Array(M3), b3 = new Uint32Array(M3), T2 = new Uint32Array(M3);
  let v3, B2, C2 = 0;
  for (let S4 = 0; S4 < u6; S4++) for (let t4 = 0; t4 < c6; t4++) {
    p5 = 12 * (S4 * c6 + t4), x3 = n4[p5], d5 = n4[p5 + 1], m5 = n4[p5 + 2], g5 = n4[p5 + 3], y4 = n4[p5 + 4], w5 = n4[p5 + 5];
    for (let e3 = 0; e3 < f5; e3++) {
      C2 = (S4 * f5 + e3) * k3 + t4 * h4, B2 = (e3 + 0.5) / f5;
      for (let t5 = 0; t5 < e3; t5++) v3 = (t5 + 0.5) / h4, A3[C2 + t5] = (x3 * v3 + d5 * B2 + m5) * o5 + i5, U3[C2 + t5] = (g5 * v3 + y4 * B2 + w5) * s8 + i5, b3[C2 + t5] = Math.floor(A3[C2 + t5]), T2[C2 + t5] = Math.floor(U3[C2 + t5]);
    }
    p5 += 6, x3 = n4[p5], d5 = n4[p5 + 1], m5 = n4[p5 + 2], g5 = n4[p5 + 3], y4 = n4[p5 + 4], w5 = n4[p5 + 5];
    for (let e3 = 0; e3 < f5; e3++) {
      C2 = (S4 * f5 + e3) * k3 + t4 * h4, B2 = (e3 + 0.5) / f5;
      for (let t5 = e3; t5 < h4; t5++) v3 = (t5 + 0.5) / h4, A3[C2 + t5] = (x3 * v3 + d5 * B2 + m5) * o5 + i5, U3[C2 + t5] = (g5 * v3 + y4 * B2 + w5) * s8 + i5, b3[C2 + t5] = Math.floor(A3[C2 + t5]), T2[C2 + t5] = Math.floor(U3[C2 + t5]);
    }
  }
  return { offsets_x: A3, offsets_y: U3, offsets_xi: b3, offsets_yi: T2, gridWidth: k3 };
}
function R(t3, e2) {
  const { coefficients: n4, spacing: l5 } = e2, { offsets_x: i5, offsets_y: o5, gridWidth: s8 } = I(t3, t3, n4, { rows: l5[0], cols: l5[1] }), { width: r5, height: a7 } = t3, h4 = new Float32Array(r5 * a7), f5 = 180 / Math.PI;
  for (let c6 = 0; c6 < a7; c6++) for (let t4 = 0; t4 < r5; t4++) {
    const e3 = c6 * s8 + t4, n5 = 0 === c6 ? e3 : e3 - s8, l6 = c6 === a7 - 1 ? e3 : e3 + s8, u6 = i5[n5] - i5[l6], p5 = o5[l6] - o5[n5];
    if (isNaN(u6) || isNaN(p5)) h4[c6 * r5 + t4] = 90;
    else {
      let e4 = Math.atan2(p5, u6) * f5;
      e4 = (360 + e4) % 360, h4[c6 * r5 + t4] = e4;
    }
  }
  return h4;
}
function D(e2, n4, l5, i5, s8 = "nearest") {
  if (!o3(e2)) return null;
  "majority" === s8 && (e2 = v(e2));
  const { pixels: r5, mask: a7, bandMasks: h4, pixelType: f5 } = e2, c6 = e2.width, u6 = e2.height, p5 = g.getPixelArrayConstructor(f5), x3 = r5.length, { width: d5, height: m5 } = n4;
  let g5 = false;
  for (let t3 = 0; t3 < l5.length; t3 += 3) -1 === l5[t3] && -1 === l5[t3 + 1] && -1 === l5[t3 + 2] && (g5 = true);
  const { offsets_x: y4, offsets_y: w5, offsets_xi: k3, offsets_yi: M3, gridWidth: A3 } = I({ width: c6, height: u6 }, n4, l5, i5, "majority" === s8 ? 0.5 : 0);
  let U3;
  const b3 = (t3, e3, n5, l6) => {
    const i6 = t3 instanceof Float32Array || t3 instanceof Float64Array ? 0 : 0.5;
    for (let o5 = 0; o5 < m5; o5++) {
      U3 = o5 * A3;
      for (let s9 = 0; s9 < d5; s9++) {
        if (y4[U3] < 0 || w5[U3] < 0) t3[o5 * d5 + s9] = 0;
        else if (l6) t3[o5 * d5 + s9] = e3[k3[U3] + M3[U3] * c6];
        else {
          const l7 = Math.floor(y4[U3]), r6 = Math.floor(w5[U3]), a8 = Math.ceil(y4[U3]), h5 = Math.ceil(w5[U3]), f6 = y4[U3] - l7, u7 = w5[U3] - r6;
          if (!n5 || n5[l7 + r6 * c6] && n5[a8 + r6 * c6] && n5[l7 + h5 * c6] && n5[a8 + h5 * c6]) {
            const n6 = (1 - f6) * e3[l7 + r6 * c6] + f6 * e3[a8 + r6 * c6], p6 = (1 - f6) * e3[l7 + h5 * c6] + f6 * e3[a8 + h5 * c6];
            t3[o5 * d5 + s9] = (1 - u7) * n6 + u7 * p6 + i6;
          } else t3[o5 * d5 + s9] = e3[k3[U3] + M3[U3] * c6];
        }
        U3++;
      }
    }
  }, T2 = [];
  let B2;
  const C2 = (h4 == null ? void 0 : h4.length) === x3, S4 = [];
  for (let t3 = 0; t3 < x3; t3++) {
    if (C2) {
      const e3 = new Uint8Array(d5 * m5);
      b3(e3, h4[t3], h4[t3], true), S4.push(e3);
    }
    B2 = new p5(d5 * m5), b3(B2, r5[t3], C2 ? h4[t3] : a7, "nearest" === s8 || "majority" === s8), T2.push(B2);
  }
  const P3 = new g({ width: d5, height: m5, pixelType: f5, pixels: T2, bandMasks: C2 ? S4 : void 0 });
  if (null != a7) P3.mask = new Uint8Array(d5 * m5), b3(P3.mask, a7, a7, true);
  else if (g5) {
    P3.mask = new Uint8Array(d5 * m5);
    for (let t3 = 0; t3 < d5 * m5; t3++) P3.mask[t3] = y4[t3] < 0 || w5[t3] < 0 ? 0 : 1;
  }
  return P3.updateStatistics(), P3;
}

// node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js
var r4 = /* @__PURE__ */ new Map();
r4.set("meter-per-second", 1), r4.set("kilometer-per-hour", 0.277778), r4.set("knots", 0.514444), r4.set("feet-per-second", 0.3048), r4.set("mile-per-hour", 0.44704);
var o4 = 180 / Math.PI;
var i3 = 5;
var s6 = new o({ esriMetersPerSecond: "meter-per-second", esriKilometersPerHour: "kilometer-per-hour", esriKnots: "knots", esriFeetPerSecond: "feet-per-second", esriMilesPerHour: "mile-per-hour" });
function a5(t3, e2) {
  return r4.get(t3) / r4.get(e2) || 1;
}
function h2(t3) {
  return (450 - t3) % 360;
}
function l4(t3, e2 = "geographic") {
  const [n4, r5] = t3, i5 = Math.sqrt(n4 * n4 + r5 * r5);
  let s8 = Math.atan2(r5, n4) * o4;
  return s8 = (360 + s8) % 360, "geographic" === e2 && (s8 = h2(s8)), [i5, s8];
}
function c4(t3, e2 = "geographic") {
  let n4 = t3[1];
  "geographic" === e2 && (n4 = h2(n4)), n4 %= 360;
  const r5 = t3[0];
  return [r5 * Math.cos(n4 / o4), r5 * Math.sin(n4 / o4)];
}
function u4(t3, e2, r5, o5 = "geographic") {
  if (!o3(t3) || null == r5) return t3;
  const i5 = "vector-magdir" === e2 ? t3.clone() : f3(t3, e2), s8 = i5.pixels[1];
  for (let n4 = 0; n4 < s8.length; n4++) s8[n4] = "geographic" === o5 ? (s8[n4] + r5[n4] + 270) % 360 : (s8[n4] + 360 - r5[n4]) % 360;
  return "vector-magdir" === e2 ? i5 : f3(i5, "vector-magdir");
}
function f3(t3, r5, o5 = "geographic", i5 = 1) {
  if (!o3(t3)) return t3;
  const { pixels: s8, width: a7, height: h4 } = t3, u6 = a7 * h4, f5 = s8[0], p5 = s8[1], m5 = t3.pixelType.startsWith("f") ? t3.pixelType : "f32", d5 = g.createEmptyBand(m5, u6), g5 = g.createEmptyBand(m5, u6);
  let x3 = 0;
  for (let e2 = 0; e2 < h4; e2++) for (let t4 = 0; t4 < a7; t4++) "vector-uv" === r5 ? ([d5[x3], g5[x3]] = l4([f5[x3], p5[x3]], o5), d5[x3] *= i5) : ([d5[x3], g5[x3]] = c4([f5[x3], p5[x3]], o5), d5[x3] *= i5, g5[x3] *= i5), x3++;
  const M3 = new g({ pixelType: m5, width: t3.width, height: t3.height, mask: t3.mask, validPixelCount: t3.validPixelCount, maskIsAlpha: t3.maskIsAlpha, pixels: [d5, g5] });
  return M3.updateStatistics(), M3;
}
function p3(t3, e2, r5 = 1) {
  if (1 === r5 || !o3(t3)) return t3;
  const o5 = t3.clone(), { pixels: i5, width: s8, height: a7 } = o5, h4 = i5[0], l5 = i5[1];
  let c6 = 0;
  for (let n4 = 0; n4 < a7; n4++) for (let t4 = 0; t4 < s8; t4++) "vector-uv" === e2 ? (h4[c6] *= r5, l5[c6] *= r5) : h4[c6] *= r5, c6++;
  return o5.updateStatistics(), o5;
}
function m3(t3, e2, n4, r5, o5) {
  if (null == o5 || !o5.spatialReference.equals(t3.spatialReference)) return { extent: t3, width: Math.round(e2 / r5), height: Math.round(n4 / r5), resolution: t3.width / e2 };
  const i5 = o5.xmin, s8 = o5.ymax, a7 = (t3.xmax - t3.xmin) / e2 * r5, h4 = (t3.ymax - t3.ymin) / n4 * r5, l5 = (a7 + h4) / 2;
  return t3.xmin = i5 + Math.floor((t3.xmin - i5) / a7) * a7, t3.xmax = i5 + Math.ceil((t3.xmax - i5) / a7) * a7, t3.ymin = s8 + Math.floor((t3.ymin - s8) / h4) * h4, t3.ymax = s8 + Math.ceil((t3.ymax - s8) / h4) * h4, { extent: t3, width: Math.round(t3.width / a7), height: Math.round(t3.height / h4), resolution: l5 };
}
var d3 = g3(0, 0, 0);
function g3(t3 = 0, e2 = 0, n4 = Math.PI, r5 = true) {
  r5 && (n4 = (2 * Math.PI - n4) % (2 * Math.PI));
  const o5 = r5 ? -1 : 1, i5 = 13 * o5, s8 = -7 * o5, a7 = -2 * o5, h4 = -16 * o5, l5 = 21.75, [c6, u6] = M2(0, e2 + i5, n4, l5), [f5, p5] = M2(t3 - 5.5, e2 + s8, n4, l5), [m5, d5] = M2(t3 + 5.5, e2 + s8, n4, l5), [g5, x3] = M2(t3 - 1.5, e2 + a7, n4, l5), [k3, w5] = M2(t3 + 1.5, e2 + a7, n4, l5), [y4, P3] = M2(t3 - 1.5, e2 + h4, n4, l5), [b3, v3] = M2(t3 + 1.5, e2 + h4, n4, l5);
  return [c6, u6, f5, p5, g5, x3, k3, w5, m5, d5, y4, P3, b3, v3];
}
function x2(t3 = 0, e2 = Math.PI, n4 = true) {
  n4 && (e2 = (2 * Math.PI - e2) % (2 * Math.PI));
  const r5 = 10, o5 = n4 ? -1 : 1, s8 = 5 * o5, a7 = 20 * o5, h4 = 25 * o5, l5 = 45, c6 = 0, u6 = 0, f5 = 2, p5 = 0, m5 = f5 * o5, d5 = n4 ? 1 : -1, g5 = r5 / 2 * d5;
  let [x3, k3] = [c6 + g5, u6 - a7], [w5, y4] = [x3 + f5 * d5, k3], [P3, b3] = [w5 - p5 * d5, y4 + m5], [v3, I3] = [c6 - g5, u6 - h4], [A3, _3] = [v3 + p5 * d5, I3 - m5], U3 = Math.ceil(t3 / i3), S4 = Math.floor(U3 / 10);
  U3 -= 8 * S4;
  const D2 = [], F = [];
  for (let i5 = 0; i5 < U3 / 2; i5++, S4--) {
    S4 <= 0 && U3 % 2 == 1 && i5 === (U3 - 1) / 2 && (v3 = c6, A3 = v3 + p5 * d5, I3 = (I3 + k3) / 2, _3 = I3 - m5);
    const [t4, n5] = M2(v3, I3, e2, l5);
    if (S4 > 0) {
      const [r6, o6] = M2(w5, I3, e2, l5), [i6, s9] = M2(x3, k3, e2, l5);
      D2.push(r6), D2.push(o6), D2.push(t4), D2.push(n5), D2.push(i6), D2.push(s9);
    } else {
      const [r6, o6] = M2(w5, y4, e2, l5), [i6, s9] = M2(P3, b3, e2, l5), [a8, h5] = M2(A3, _3, e2, l5);
      F.push(t4), F.push(n5), F.push(a8), F.push(h5), F.push(i6), F.push(s9), F.push(r6), F.push(o6);
    }
    I3 += s8, k3 += s8, y4 += s8, b3 += s8, _3 += s8;
  }
  const [N, j] = M2(c6 + g5, u6 + a7, e2, l5), J = (r5 / 2 + f5) * d5, [O, q] = M2(c6 + J, u6 + a7, e2, l5), [B2, E2] = M2(c6 + g5, u6 - h4, e2, l5), [T2, C2] = M2(c6 + J, u6 - h4, e2, l5);
  return { pennants: D2, barbs: F, shaft: [N, j, O, q, B2, E2, T2, C2] };
}
function M2(t3, e2, n4, r5 = 1) {
  const o5 = Math.sqrt(t3 * t3 + e2 * e2) / r5, i5 = (2 * Math.PI + Math.atan2(e2, t3)) % (2 * Math.PI);
  return [o5, (2 * Math.PI + i5 - n4) % (2 * Math.PI)];
}
var k2 = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63];
var w3 = [0, 0.5, 1, 1.5, 2];
var y2 = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
function P2(t3, e2, n4, r5) {
  const o5 = a5(r5 || "knots", n4);
  let i5;
  for (i5 = 1; i5 < e2.length; i5++) if (i5 === e2.length - 1) {
    if (t3 < e2[i5] * o5) break;
  } else if (t3 <= e2[i5] * o5) break;
  return Math.min(i5 - 1, e2.length - 2);
}
function b2(t3, e2, n4, r5, o5) {
  let i5 = 0;
  switch (e2) {
    case "beaufort_kn":
      i5 = P2(t3, k2, "knots", n4);
      break;
    case "beaufort_km":
      i5 = P2(t3, k2, "kilometer-per-hour", n4);
      break;
    case "beaufort_ft":
      i5 = P2(t3, k2, "feet-per-second", n4);
      break;
    case "beaufort_m":
      i5 = P2(t3, k2, "meter-per-second", n4);
      break;
    case "classified_arrow":
      i5 = P2(t3, o5 ?? [], r5, n4);
      break;
    case "ocean_current_m":
      i5 = P2(t3, w3, "meter-per-second", n4);
      break;
    case "ocean_current_kn":
      i5 = P2(t3, y2, "knots", n4);
  }
  return i5;
}
function v2(t3, e2) {
  const { style: n4, inputUnit: r5, outputUnit: o5, breakValues: i5 } = e2, a7 = s6.fromJSON(r5), h4 = s6.fromJSON(o5), l5 = 7 * 6, c6 = 15;
  let u6 = 0, f5 = 0;
  const { width: p5, height: m5, mask: x3 } = t3, M3 = t3.pixels[0], k3 = t3.pixels[1], w5 = null != x3 ? x3.filter((t4) => t4 > 0).length : p5 * m5, y4 = new Float32Array(w5 * l5), P3 = new Uint32Array(c6 * w5), v3 = e2.invertDirection ? g3(0, 0, 0, false) : d3;
  for (let s8 = 0; s8 < m5; s8++) for (let t4 = 0; t4 < p5; t4++) {
    const e3 = s8 * p5 + t4;
    if (!x3 || x3[s8 * p5 + t4]) {
      const r6 = (k3[e3] + 360) % 360 / 180 * Math.PI, o6 = b2(M3[e3], n4, a7, h4, i5);
      for (let n5 = 0; n5 < v3.length; n5 += 2) y4[u6++] = (t4 + 0.5) / p5, y4[u6++] = (s8 + 0.5) / m5, y4[u6++] = v3[n5], y4[u6++] = v3[n5 + 1] + r6, y4[u6++] = o6, y4[u6++] = M3[e3];
      const c7 = 7 * (u6 / l5 - 1);
      P3[f5++] = c7, P3[f5++] = c7 + 1, P3[f5++] = c7 + 2, P3[f5++] = c7 + 0, P3[f5++] = c7 + 4, P3[f5++] = c7 + 3, P3[f5++] = c7 + 0, P3[f5++] = c7 + 2, P3[f5++] = c7 + 3, P3[f5++] = c7 + 2, P3[f5++] = c7 + 5, P3[f5++] = c7 + 3, P3[f5++] = c7 + 5, P3[f5++] = c7 + 6, P3[f5++] = c7 + 3;
    }
  }
  return { vertexData: y4, indexData: P3 };
}
var I2 = [];
function A2(t3, e2) {
  if (0 === I2.length) for (let i5 = 0; i5 < 30; i5++) I2.push(x2(5 * i5, 0, !e2.invertDirection));
  const n4 = a5(s6.fromJSON(e2.inputUnit), "knots"), { width: r5, height: o5, mask: h4 } = t3, l5 = t3.pixels[0], c6 = t3.pixels[1], u6 = 6, f5 = [], p5 = [];
  let m5 = 0, d5 = 0;
  for (let s8 = 0; s8 < o5; s8++) for (let t4 = 0; t4 < r5; t4++) {
    const e3 = s8 * r5 + t4, a7 = l5[e3] * n4;
    if ((!h4 || h4[s8 * r5 + t4]) && a7 >= i3) {
      const n5 = (c6[e3] + 360) % 360 / 180 * Math.PI, { pennants: i5, barbs: h5, shaft: l6 } = I2[Math.min(Math.floor(a7 / 5), 29)];
      if (i5.length + h5.length === 0) continue;
      let g5 = f5.length / u6;
      const x3 = (t4 + 0.5) / r5, M3 = (s8 + 0.5) / o5;
      for (let t5 = 0; t5 < i5.length; t5 += 2) f5[m5++] = x3, f5[m5++] = M3, f5[m5++] = i5[t5], f5[m5++] = i5[t5 + 1] + n5, f5[m5++] = 0, f5[m5++] = a7;
      for (let t5 = 0; t5 < h5.length; t5 += 2) f5[m5++] = x3, f5[m5++] = M3, f5[m5++] = h5[t5], f5[m5++] = h5[t5 + 1] + n5, f5[m5++] = 0, f5[m5++] = a7;
      for (let t5 = 0; t5 < l6.length; t5 += 2) f5[m5++] = x3, f5[m5++] = M3, f5[m5++] = l6[t5], f5[m5++] = l6[t5 + 1] + n5, f5[m5++] = 0, f5[m5++] = a7;
      for (let t5 = 0; t5 < i5.length / 6; t5++) p5[d5++] = g5, p5[d5++] = g5 + 1, p5[d5++] = g5 + 2, g5 += 3;
      for (let t5 = 0; t5 < h5.length / 8; t5++) p5[d5++] = g5, p5[d5++] = g5 + 1, p5[d5++] = g5 + 2, p5[d5++] = g5 + 1, p5[d5++] = g5 + 2, p5[d5++] = g5 + 3, g5 += 4;
      p5[d5++] = g5 + 0, p5[d5++] = g5 + 1, p5[d5++] = g5 + 2, p5[d5++] = g5 + 1, p5[d5++] = g5 + 3, p5[d5++] = g5 + 2, g5 += 4;
    }
  }
  return { vertexData: new Float32Array(f5), indexData: new Uint32Array(p5) };
}
function _2(t3, e2) {
  const n4 = 4 * 6;
  let r5 = 0, o5 = 0;
  const { width: h4, height: l5, mask: c6 } = t3, u6 = t3.pixels[0], f5 = [], p5 = [], m5 = a5(s6.fromJSON(e2.inputUnit), "knots"), d5 = "wind_speed" === e2.style ? i3 : Number.MAX_VALUE;
  for (let i5 = 0; i5 < l5; i5++) for (let t4 = 0; t4 < h4; t4++) {
    const e3 = u6[i5 * h4 + t4] * m5;
    if ((!c6 || c6[i5 * h4 + t4]) && e3 < d5) {
      for (let n5 = 0; n5 < 4; n5++) f5[r5++] = (t4 + 0.5) / h4, f5[r5++] = (i5 + 0.5) / l5, f5[r5++] = n5 < 2 ? -0.5 : 0.5, f5[r5++] = n5 % 2 == 0 ? -0.5 : 0.5, f5[r5++] = 0, f5[r5++] = e3;
      const s8 = 4 * (r5 / n4 - 1);
      p5[o5++] = s8, p5[o5++] = s8 + 1, p5[o5++] = s8 + 2, p5[o5++] = s8 + 1, p5[o5++] = s8 + 2, p5[o5++] = s8 + 3;
    }
  }
  return { vertexData: new Float32Array(f5), indexData: new Uint32Array(p5) };
}
function U2(t3, e2) {
  return "simple_scalar" === e2.style ? _2(t3, e2) : "wind_speed" === e2.style ? A2(t3, e2) : v2(t3, e2);
}
function S3(t3, n4, r5, o5 = [0, 0], i5 = 0.5) {
  const { width: s8, height: a7, mask: h4 } = t3, [u6, f5] = t3.pixels, [p5, m5] = o5, d5 = Math.round((s8 - p5) / r5), g5 = Math.round((a7 - m5) / r5), x3 = d5 * g5, M3 = new Float32Array(x3), k3 = new Float32Array(x3), w5 = new Uint8Array(x3), y4 = "vector-uv" === n4;
  for (let e2 = 0; e2 < g5; e2++) for (let t4 = 0; t4 < d5; t4++) {
    let n5 = 0;
    const o6 = e2 * d5 + t4, g6 = Math.max(0, e2 * r5 + m5), x4 = Math.max(0, t4 * r5 + p5), P4 = Math.min(a7, g6 + r5), b3 = Math.min(s8, x4 + r5);
    for (let t5 = g6; t5 < P4; t5++) for (let e3 = x4; e3 < b3; e3++) {
      const r6 = t5 * s8 + e3;
      if (!h4 || h4[r6]) {
        n5++;
        const t6 = y4 ? [u6[r6], f5[r6]] : [u6[r6], (360 + f5[r6]) % 360], [e4, i6] = y4 ? t6 : c4(t6);
        M3[o6] += e4, k3[o6] += i6;
      }
    }
    if (n5 >= (P4 - g6) * (b3 - x4) * (1 - i5)) {
      w5[o6] = 1;
      const [t5, e3] = l4([M3[o6] / n5, k3[o6] / n5]);
      M3[o6] = t5, k3[o6] = e3;
    } else w5[o6] = 0, M3[o6] = 0, k3[o6] = 0;
  }
  const P3 = new g({ width: d5, height: g5, pixels: [M3, k3], mask: w5 });
  return P3.updateStatistics(), P3;
}

// node_modules/@arcgis/core/views/2d/engine/flow/dataUtils.js
var i4 = () => n.getLogger("esri.views.2d.engine.flow.dataUtils");
var a6 = 10;
async function s7(t3, e2, r5, o5) {
  const l5 = performance.now(), s8 = c5(e2, r5), f5 = performance.now(), h4 = u5(e2, s8, r5.width, r5.height), p5 = performance.now(), g5 = m4(h4, true), y4 = performance.now(), x3 = "Streamlines" === t3 ? d4(g5, a6) : w4(g5), M3 = performance.now();
  return has("esri-2d-profiler") && (i4().info("I.1", "_createFlowFieldFromData (ms)", Math.round(f5 - l5)), i4().info("I.2", "_getStreamlines (ms)", Math.round(p5 - f5)), i4().info("I.3", "createAnimatedLinesData (ms)", Math.round(y4 - p5)), i4().info("I.4", "create{Streamlines|Particles}Mesh (ms)", Math.round(M3 - y4)), i4().info("I.5", "createFlowMesh (ms)", Math.round(M3 - l5)), i4().info("I.6", "Mesh size (bytes)", x3.vertexData.buffer.byteLength + x3.indexData.buffer.byteLength)), await Promise.resolve(), s2(o5), x3;
}
function c5(t3, e2) {
  const n4 = h3(e2.data, e2.width, e2.height, t3.smoothing);
  if (t3.interpolate) {
    return (t4, r5) => {
      const o5 = Math.floor(t4), l5 = Math.floor(r5);
      if (o5 < 0 || o5 >= e2.width) return [0, 0];
      if (l5 < 0 || l5 >= e2.height) return [0, 0];
      const i5 = t4 - o5, a7 = r5 - l5, s8 = o5, c6 = l5, f5 = o5 < e2.width - 1 ? o5 + 1 : o5, u6 = l5 < e2.height - 1 ? l5 + 1 : l5, h4 = n4[2 * (c6 * e2.width + s8)], m5 = n4[2 * (c6 * e2.width + f5)], d5 = n4[2 * (u6 * e2.width + s8)], w5 = n4[2 * (u6 * e2.width + f5)], p5 = n4[2 * (c6 * e2.width + s8) + 1], g5 = n4[2 * (c6 * e2.width + f5) + 1];
      return [(h4 * (1 - a7) + d5 * a7) * (1 - i5) + (m5 * (1 - a7) + w5 * a7) * i5, (p5 * (1 - a7) + n4[2 * (u6 * e2.width + s8) + 1] * a7) * (1 - i5) + (g5 * (1 - a7) + n4[2 * (u6 * e2.width + f5) + 1] * a7) * i5];
    };
  }
  return (t4, r5) => {
    const o5 = Math.round(t4), l5 = Math.round(r5);
    return o5 < 0 || o5 >= e2.width || l5 < 0 || l5 >= e2.height ? [0, 0] : [n4[2 * (l5 * e2.width + o5)], n4[2 * (l5 * e2.width + o5) + 1]];
  };
}
function f4(t3, e2, n4, r5, o5, l5, i5, a7, s8) {
  const c6 = [];
  let f5 = n4, u6 = r5, h4 = 0, [m5, d5] = e2(f5, u6);
  m5 *= t3.velocityScale, d5 *= t3.velocityScale;
  const w5 = Math.sqrt(m5 * m5 + d5 * d5);
  let p5, g5;
  c6.push({ x: f5, y: u6, t: h4, speed: w5 });
  for (let y4 = 0; y4 < t3.verticesPerLine; y4++) {
    let [n5, r6] = e2(f5, u6);
    n5 *= t3.velocityScale, r6 *= t3.velocityScale;
    const m6 = Math.sqrt(n5 * n5 + r6 * r6);
    if (m6 < t3.minSpeedThreshold) return c6;
    const d6 = n5 / m6, w6 = r6 / m6;
    f5 += d6 * t3.segmentLength, u6 += w6 * t3.segmentLength;
    if (h4 += t3.segmentLength / m6, Math.acos(d6 * p5 + w6 * g5) > t3.maxTurnAngle) return c6;
    if (t3.collisions) {
      const t4 = Math.round(f5 * s8), e3 = Math.round(u6 * s8);
      if (t4 < 0 || t4 > i5 - 1 || e3 < 0 || e3 > a7 - 1) return c6;
      const n6 = l5[e3 * i5 + t4];
      if (-1 !== n6 && n6 !== o5) return c6;
      l5[e3 * i5 + t4] = o5;
    }
    c6.push({ x: f5, y: u6, t: h4, speed: m6 }), p5 = d6, g5 = w6;
  }
  return c6;
}
function u5(t3, e2, n4, o5) {
  const l5 = [], i5 = new t(), a7 = 1 / Math.max(t3.lineCollisionWidth, 1), s8 = Math.round(n4 * a7), c6 = Math.round(o5 * a7), u6 = new Int32Array(s8 * c6);
  for (let r5 = 0; r5 < u6.length; r5++) u6[r5] = -1;
  const h4 = [];
  for (let r5 = 0; r5 < o5; r5 += t3.lineSpacing) for (let e3 = 0; e3 < n4; e3 += t3.lineSpacing) h4.push({ x: e3, y: r5, sort: i5.getFloat() });
  h4.sort((t4, e3) => t4.sort - e3.sort);
  for (const { x: r5, y: m5 } of h4) if (i5.getFloat() < t3.density) {
    const n5 = f4(t3, e2, r5, m5, l5.length, u6, s8, c6, a7);
    if (n5.length < 2) continue;
    l5.push(n5);
  }
  return l5;
}
function h3(t3, e2, n4, r5) {
  if (0 === r5) return t3;
  const o5 = Math.round(3 * r5), l5 = new Array(2 * o5 + 1);
  let i5 = 0;
  for (let c6 = -o5; c6 <= o5; c6++) {
    const t4 = Math.exp(-c6 * c6 / (r5 * r5));
    l5[c6 + o5] = t4, i5 += t4;
  }
  for (let c6 = -o5; c6 <= o5; c6++) l5[c6 + o5] /= i5;
  const a7 = new Float32Array(t3.length);
  for (let c6 = 0; c6 < n4; c6++) for (let n5 = 0; n5 < e2; n5++) {
    let r6 = 0, i6 = 0;
    for (let a8 = -o5; a8 <= o5; a8++) {
      if (n5 + a8 < 0 || n5 + a8 >= e2) continue;
      const s9 = l5[a8 + o5];
      r6 += s9 * t3[2 * (c6 * e2 + (n5 + a8))], i6 += s9 * t3[2 * (c6 * e2 + (n5 + a8)) + 1];
    }
    a7[2 * (c6 * e2 + n5)] = r6, a7[2 * (c6 * e2 + n5) + 1] = i6;
  }
  const s8 = new Float32Array(t3.length);
  for (let c6 = 0; c6 < e2; c6++) for (let t4 = 0; t4 < n4; t4++) {
    let r6 = 0, i6 = 0;
    for (let s9 = -o5; s9 <= o5; s9++) {
      if (t4 + s9 < 0 || t4 + s9 >= n4) continue;
      const f5 = l5[s9 + o5];
      r6 += f5 * a7[2 * ((t4 + s9) * e2 + c6)], i6 += f5 * a7[2 * ((t4 + s9) * e2 + c6) + 1];
    }
    s8[2 * (t4 * e2 + c6)] = r6, s8[2 * (t4 * e2 + c6) + 1] = i6;
  }
  return s8;
}
function m4(t3, e2) {
  const n4 = new t(), o5 = t3.reduce((t4, e3) => t4 + e3.length, 0), l5 = new Float32Array(4 * o5), i5 = new Array(t3.length);
  let a7 = 0, s8 = 0;
  for (const r5 of t3) {
    const t4 = a7;
    for (const e3 of r5) l5[4 * a7] = e3.x, l5[4 * a7 + 1] = e3.y, l5[4 * a7 + 2] = e3.t, l5[4 * a7 + 3] = e3.speed, a7++;
    i5[s8++] = { startVertex: t4, numberOfVertices: r5.length, totalTime: r5[r5.length - 1].t, timeSeed: e2 ? n4.getFloat() : 0 };
  }
  return { lineVertices: l5, lineDescriptors: i5 };
}
function d4(t3, e2) {
  const n4 = 9, { lineVertices: r5, lineDescriptors: o5 } = t3;
  let l5 = 0, i5 = 0;
  for (const m5 of o5) {
    l5 += 2 * m5.numberOfVertices;
    i5 += 6 * (m5.numberOfVertices - 1);
  }
  const a7 = new Float32Array(l5 * n4), s8 = new Uint32Array(i5);
  let c6 = 0, f5 = 0;
  function u6() {
    s8[f5++] = c6 - 2, s8[f5++] = c6, s8[f5++] = c6 - 1, s8[f5++] = c6, s8[f5++] = c6 + 1, s8[f5++] = c6 - 1;
  }
  function h4(t4, e3, r6, o6, l6, i6, s9, f6) {
    const u7 = c6 * n4;
    let h5 = 0;
    a7[u7 + h5++] = t4, a7[u7 + h5++] = e3, a7[u7 + h5++] = 1, a7[u7 + h5++] = r6, a7[u7 + h5++] = i6, a7[u7 + h5++] = s9, a7[u7 + h5++] = o6 / 2, a7[u7 + h5++] = l6 / 2, a7[u7 + h5++] = f6, c6++, a7[u7 + h5++] = t4, a7[u7 + h5++] = e3, a7[u7 + h5++] = -1, a7[u7 + h5++] = r6, a7[u7 + h5++] = i6, a7[u7 + h5++] = s9, a7[u7 + h5++] = -o6 / 2, a7[u7 + h5++] = -l6 / 2, a7[u7 + h5++] = f6, c6++;
  }
  for (const m5 of o5) {
    const { totalTime: t4, timeSeed: n5 } = m5;
    let o6 = null, l6 = null, i6 = null, a8 = null, s9 = null, c7 = null;
    for (let f6 = 0; f6 < m5.numberOfVertices; f6++) {
      const d5 = r5[4 * (m5.startVertex + f6)], w5 = r5[4 * (m5.startVertex + f6) + 1], p5 = r5[4 * (m5.startVertex + f6) + 2], g5 = r5[4 * (m5.startVertex + f6) + 3];
      let y4 = null, x3 = null, M3 = null, A3 = null;
      if (f6 > 0) {
        y4 = d5 - o6, x3 = w5 - l6;
        const r6 = Math.sqrt(y4 * y4 + x3 * x3);
        if (y4 /= r6, x3 /= r6, f6 > 1) {
          let t5 = y4 + s9, n6 = x3 + c7;
          const r7 = Math.sqrt(t5 * t5 + n6 * n6);
          t5 /= r7, n6 /= r7;
          const o7 = Math.min(1 / (t5 * y4 + n6 * x3), e2);
          t5 *= o7, n6 *= o7, M3 = -n6, A3 = t5;
        } else M3 = -x3, A3 = y4;
        null !== M3 && null !== A3 && (h4(o6, l6, i6, M3, A3, t4, n5, g5), u6());
      }
      o6 = d5, l6 = w5, i6 = p5, s9 = y4, c7 = x3, a8 = g5;
    }
    h4(o6, l6, i6, -c7, s9, t4, n5, a8);
  }
  return { vertexData: a7, indexData: s8 };
}
function w4(t3) {
  const e2 = 16, n4 = 1, r5 = 2, { lineVertices: o5, lineDescriptors: l5 } = t3;
  let i5 = 0, a7 = 0;
  for (const U3 of l5) {
    const t4 = U3.numberOfVertices - 1;
    i5 += 4 * t4 * 2, a7 += 6 * t4 * 2;
  }
  const s8 = new Float32Array(i5 * e2), c6 = new Uint32Array(a7);
  let f5, u6, h4, m5, d5, w5, p5, g5, y4, x3, M3, A3, I3, V, F = 0, v3 = 0;
  function D2() {
    c6[v3++] = F - 8, c6[v3++] = F - 7, c6[v3++] = F - 6, c6[v3++] = F - 7, c6[v3++] = F - 5, c6[v3++] = F - 6, c6[v3++] = F - 4, c6[v3++] = F - 3, c6[v3++] = F - 2, c6[v3++] = F - 3, c6[v3++] = F - 1, c6[v3++] = F - 2;
  }
  function b3(t4, o6, l6, i6, a8, c7, f6, u7, h5, m6, d6, w6, p6, g6) {
    const y5 = F * e2;
    let x4 = 0;
    for (const e3 of [n4, r5]) for (const n5 of [1, 2, 3, 4]) s8[y5 + x4++] = t4, s8[y5 + x4++] = o6, s8[y5 + x4++] = l6, s8[y5 + x4++] = i6, s8[y5 + x4++] = f6, s8[y5 + x4++] = u7, s8[y5 + x4++] = h5, s8[y5 + x4++] = m6, s8[y5 + x4++] = e3, s8[y5 + x4++] = n5, s8[y5 + x4++] = p6, s8[y5 + x4++] = g6, s8[y5 + x4++] = a8 / 2, s8[y5 + x4++] = c7 / 2, s8[y5 + x4++] = d6 / 2, s8[y5 + x4++] = w6 / 2, F++;
  }
  function S4(t4, e3) {
    let n5 = y4 + M3, r6 = x3 + A3;
    const o6 = Math.sqrt(n5 * n5 + r6 * r6);
    n5 /= o6, r6 /= o6;
    const l6 = y4 * n5 + x3 * r6;
    n5 /= l6, r6 /= l6;
    let i6 = M3 + I3, a8 = A3 + V;
    const s9 = Math.sqrt(i6 * i6 + a8 * a8);
    i6 /= s9, a8 /= s9;
    const c7 = M3 * i6 + A3 * a8;
    i6 /= c7, a8 /= c7, b3(f5, u6, h4, m5, -r6, n5, d5, w5, p5, g5, -a8, i6, t4, e3), D2();
  }
  function k3(t4, e3, n5, r6, o6, l6) {
    if (y4 = M3, x3 = A3, M3 = I3, A3 = V, null == y4 && null == x3 && (y4 = M3, x3 = A3), null != d5 && null != w5) {
      I3 = t4 - d5, V = e3 - w5;
      const n6 = Math.sqrt(I3 * I3 + V * V);
      I3 /= n6, V /= n6;
    }
    null != y4 && null != x3 && S4(o6, l6), f5 = d5, u6 = w5, h4 = p5, m5 = g5, d5 = t4, w5 = e3, p5 = n5, g5 = r6;
  }
  function L(t4, e3) {
    y4 = M3, x3 = A3, M3 = I3, A3 = V, null == y4 && null == x3 && (y4 = M3, x3 = A3), null != y4 && null != x3 && S4(t4, e3);
  }
  for (const U3 of l5) {
    f5 = null, u6 = null, h4 = null, m5 = null, d5 = null, w5 = null, p5 = null, g5 = null, y4 = null, x3 = null, M3 = null, A3 = null, I3 = null, V = null;
    const { totalTime: t4, timeSeed: e3 } = U3;
    for (let n5 = 0; n5 < U3.numberOfVertices; n5++) {
      k3(o5[4 * (U3.startVertex + n5)], o5[4 * (U3.startVertex + n5) + 1], o5[4 * (U3.startVertex + n5) + 2], o5[4 * (U3.startVertex + n5) + 3], t4, e3);
    }
    L(t4, e3);
  }
  return { vertexData: s8, indexData: c6 };
}
function p4(t3, n4) {
  const r5 = n4.pixels, { width: o5, height: l5 } = n4, i5 = new Float32Array(o5 * l5 * 2), a7 = n4.mask || new Uint8Array(o5 * l5 * 2);
  if (n4.mask || a7.fill(255), "vector-uv" === t3) for (let e2 = 0; e2 < o5 * l5; e2++) i5[2 * e2] = r5[0][e2], i5[2 * e2 + 1] = -r5[1][e2];
  else if ("vector-magdir" === t3) for (let s8 = 0; s8 < o5 * l5; s8++) {
    const t4 = r5[0][s8], n5 = s4(r5[1][s8]), o6 = Math.cos(n5 - Math.PI / 2), l6 = Math.sin(n5 - Math.PI / 2);
    i5[2 * s8] = o6 * t4, i5[2 * s8 + 1] = l6 * t4;
  }
  return { data: i5, mask: a7, width: o5, height: l5 };
}
async function g4(t3, e2, n4, r5, a7, s8) {
  const c6 = performance.now(), f5 = d(e2.spatialReference);
  if (!f5) {
    const o5 = await y3(t3, e2, n4, r5, a7, s8);
    return has("esri-2d-profiler") && i4().info("I.7", "loadImagery, early exit (ms)", Math.round(performance.now() - c6)), has("esri-2d-profiler") && i4().info("I.9", "Number of parts", 1), o5;
  }
  const [u6, h4] = f5.valid, m5 = h4 - u6, d5 = Math.ceil(e2.width / m5), w5 = e2.width / d5, p5 = Math.round(n4 / d5);
  let g5 = e2.xmin;
  const x3 = [], M3 = performance.now();
  for (let l5 = 0; l5 < d5; l5++) {
    const n5 = new w({ xmin: g5, xmax: g5 + w5, ymin: e2.ymin, ymax: e2.ymax, spatialReference: e2.spatialReference });
    x3.push(y3(t3, n5, p5, r5, a7, s8)), g5 += w5;
  }
  const A3 = await Promise.all(x3);
  has("esri-2d-profiler") && i4().info("I.8", "All calls to _fetchPart (ms)", Math.round(performance.now() - M3)), has("esri-2d-profiler") && i4().info("I.9", "Number of parts", A3.length);
  const I3 = { data: new Float32Array(n4 * r5 * 2), mask: new Uint8Array(n4 * r5), width: n4, height: r5 };
  let V = 0;
  for (const o5 of A3) {
    for (let t4 = 0; t4 < o5.height; t4++) for (let e3 = 0; e3 < o5.width; e3++) V + e3 >= n4 || (I3.data[2 * (t4 * n4 + V + e3)] = o5.data[2 * (t4 * o5.width + e3)], I3.data[2 * (t4 * n4 + V + e3) + 1] = o5.data[2 * (t4 * o5.width + e3) + 1], I3.mask[t4 * n4 + V + e3] = o5.mask[t4 * o5.width + e3]);
    V += o5.width;
  }
  return has("esri-2d-profiler") && i4().info("I.10", "loadImagery, general exit (ms)", Math.round(performance.now() - c6)), I3;
}
async function y3(t3, e2, n4, r5, o5, l5) {
  var _a;
  const i5 = { requestProjectedLocalDirections: true, signal: l5 };
  if (null != o5 && (i5.timeExtent = o5), "imagery" === t3.type) {
    await t3.load({ signal: l5 });
    const o6 = t3.rasterInfo.dataType, a8 = await t3.fetchImage(e2, n4, r5, i5);
    return null == ((_a = a8 == null ? void 0 : a8.pixelData) == null ? void 0 : _a.pixelBlock) ? { data: new Float32Array(n4 * r5 * 2), mask: new Uint8Array(n4 * r5), width: n4, height: r5 } : p4(o6, a8.pixelData.pixelBlock);
  }
  await t3.load({ signal: l5 });
  const a7 = t3.serviceRasterInfo.dataType, s8 = await t3.fetchPixels(e2, n4, r5, i5);
  return null == (s8 == null ? void 0 : s8.pixelBlock) ? { data: new Float32Array(n4 * r5 * 2), mask: new Uint8Array(n4 * r5), width: n4, height: r5 } : p4(a7, s8.pixelBlock);
}

export {
  s5 as s,
  l2 as l,
  o2 as o,
  u,
  i,
  a3 as a,
  l as l2,
  g,
  n3 as n,
  l3,
  i2,
  o3 as o2,
  r3 as r,
  a4 as a2,
  h,
  f2 as f,
  c3 as c,
  u3 as u2,
  p2 as p,
  g2,
  y,
  w2 as w,
  M,
  U,
  T,
  P,
  W,
  E,
  R,
  D,
  s6 as s2,
  a5 as a3,
  l4,
  u4 as u3,
  f3 as f2,
  p3 as p2,
  m3 as m,
  _2 as _,
  U2,
  S3 as S,
  s7 as s3,
  g4 as g3
};
//# sourceMappingURL=chunk-T4YD2MX2.js.map
