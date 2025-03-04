import {
  h as h3,
  i as i2,
  m as m4,
  s as s3,
  x as x2
} from "./chunk-C5H6RRX5.js";
import {
  T,
  h as h4,
  l as l3
} from "./chunk-I34S26RP.js";
import {
  B,
  V,
  Z,
  ae,
  j as j4,
  me,
  oe,
  re,
  te,
  ue,
  z as z3
} from "./chunk-LHHFTRIL.js";
import {
  E,
  L,
  U as U2,
  W,
  c,
  c2,
  ee,
  g as g3,
  l as l2,
  p as p3,
  q,
  t,
  w as w2,
  z as z2
} from "./chunk-7WEKAJI2.js";
import {
  N,
  a2 as a4,
  d2 as d3,
  f2 as f,
  g as g2,
  h as h2,
  i,
  p as p2,
  v2 as v,
  w as w3
} from "./chunk-LZBUPIMY.js";
import {
  _ as _2,
  a as a2,
  j as j3,
  m2 as m3,
  n3 as n2
} from "./chunk-GLICEWE6.js";
import {
  D,
  R,
  U,
  a as a3,
  f2,
  l4 as l,
  s3 as s2,
  u3 as u
} from "./chunk-T4YD2MX2.js";
import {
  _
} from "./chunk-HVQIKA6N.js";
import {
  p,
  z
} from "./chunk-SUSOH323.js";
import {
  d as d2
} from "./chunk-ONZPKEDE.js";
import {
  y as y2
} from "./chunk-WZ7EFR6C.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
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
  o
} from "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  d
} from "./chunk-LTDNORB5.js";
import {
  P2 as P,
  y2 as y
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  h,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  m as m2
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/rasterDatasets/BaseRaster.js
var N2 = 8;
var V2 = 256;
var U3 = 0;
var $ = class extends S {
  constructor() {
    super(...arguments), this._tileFetchQueue = new _({ concurrency: 32, process: (e2, t3) => this._fetchRawTile(e2.pyramidLevel, e2.row, e2.col, { ...e2.options, signal: t3 }) }), this.datasetName = null, this.datasetFormat = null, this.hasUniqueSourceStorageInfo = true, this.rasterInfo = null, this.ioConfig = { sampling: "closest" };
  }
  normalizeCtorArgs(e2) {
    return (e2 == null ? void 0 : e2.ioConfig) && (e2 = { ...e2, ioConfig: { resolution: null, bandIds: null, sampling: "closest", tileInfo: z.create(), ...e2.ioConfig } }), e2;
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: e2 } = this, t3 = te(e2.spatialReference);
    return null != t3 && e2.extent.width >= t3 / 2;
  }
  get _hasNoneOrGCSShiftTransform() {
    const { transform: e2 } = this.rasterInfo;
    return null == e2 || "gcs-shift" === e2.type;
  }
  set rasterJobHandler(e2) {
    var _a, _b;
    this._set("rasterJobHandler", e2), "Function" === this.datasetFormat && ((_b = (_a = this.primaryRasters) == null ? void 0 : _a.rasters) == null ? void 0 : _b.forEach((t3) => t3.rasterJobHandler = e2));
  }
  get rasterId() {
    return this.url || "rasterId-" + U3++;
  }
  set url(e2) {
    this._set("url", y(e2, n.getLogger(this)));
  }
  async open(e2) {
    return this._openPromise ?? (this._openPromise = j4().then(() => this._open(e2))), this._openPromise;
  }
  async fetchTile(e2, t3, i4, o3 = {}) {
    const r4 = o3.tileInfo || this.rasterInfo.storageInfo.tileInfo, n4 = this.getTileExtentFromTileInfo(e2, t3, i4, r4);
    return o3 = { noClip: true, ...o3 }, this.fetchPixels(n4, r4.size[0], r4.size[1], o3);
  }
  async identify(e2, t3 = {}) {
    var _a;
    e2 = h(j, e2).clone().normalize();
    const { multidimensionalDefinition: i4, timeExtent: o3 } = t3, { rasterInfo: r4 } = this, { hasMultidimensionalTranspose: n4, multidimensionalInfo: s4 } = r4;
    let { transposedVariableName: l5 } = t3;
    const c4 = null != s4 && n4 && (null != o3 || g2(i4));
    if (c4 && !l5) {
      l5 = null != i4 && i4.length > 0 ? i4[0].variableName ?? void 0 : s4.variables[0].name, t3 = { ...t3, transposedVariableName: l5 };
    }
    t3 = this._getRequestOptionsWithSliceId(t3);
    const { spatialReference: u4, extent: h6 } = r4, { datumTransformation: p5 } = t3;
    let d4 = B(e2, u4, p5);
    if (!h6.intersects(d4)) return { location: d4, value: null };
    if (null != r4.transform) {
      const e3 = r4.transform.inverseTransform(d4);
      if (!r4.nativeExtent.intersects(e3)) return { location: e3, value: null };
      d4 = e3;
    }
    let x3 = 0;
    const y3 = null != l5 && null != s4 && r4.hasMultidimensionalTranspose;
    if ("Function" === this.datasetFormat) {
      const e3 = this.primaryRasters.rasters[0];
      if (y3) return e3.identify(d4, t3);
      const { pixelSize: o4 } = r4, n5 = 3, s5 = o4.x * n5 / 2, l6 = o4.y * n5 / 2, a5 = new w({ xmin: d4.x - s5, xmax: d4.x + s5, ymin: d4.y - l6, ymax: d4.y + l6, spatialReference: u4 }), c5 = { interpolation: "nearest", multidimensionalDefinition: i4, sliceId: t3.sliceId }, { pixelBlock: m6 } = await e3.fetchPixels(a5, n5, n5, c5), { pixelBlock: h7 } = await this.fetchPixels(a5, n5, n5, c5);
      if (null == m6) return { location: d4, value: null };
      const p6 = Math.floor(n5 * n5 * 0.5), x4 = !m6.mask || m6.mask[p6] ? m6.pixels.map((e4) => e4[p6]) : null;
      let g5;
      return null != h7 && (g5 = !h7.mask || h7.mask[p6] ? h7.pixels.map((e4) => e4[p6]) : void 0), { location: d4, value: x4, processedValue: g5, pyramidLevel: 0 };
    }
    if (!y3) {
      if (t3.srcResolution) {
        x3 = me(t3.srcResolution, r4, this.ioConfig.sampling).pyramidLevel;
      } else if (x3 = await this.computeBestPyramidLevelForLocation(e2, t3), null == x3) return { location: d4, value: null };
    }
    const g4 = this.identifyPixelLocation(d4, x3, null, y3);
    if (null === g4) return { location: d4, value: null };
    const { row: R2, col: w4, rowOffset: S2, colOffset: b, blockWidth: P2 } = g4, B2 = l5 ?? t3.sliceId, _3 = i2(this.rasterId, B2), M = `${x3}/${R2}/${w4}`;
    let C = m4(_3, null, M);
    null == C && (C = this.fetchRawTile(x3, R2, w4, t3), h3(_3, null, M, C));
    const W2 = await C;
    if (!((_a = W2 == null ? void 0 : W2.pixels) == null ? void 0 : _a.length)) return { location: d4, value: null };
    const j5 = S2 * P2 + b;
    return this._processIdentifyResult(W2, { srcLocation: d4, position: j5, pyramidLevel: x3, useTransposedTile: !!y3, requestSomeSlices: c4, identifyOptions: t3 });
  }
  async fetchPixels(e2, t3, i4, o3 = {}) {
    e2 = ue(e2), o3 = this._getRequestOptionsWithSliceId(o3);
    const { _hasNoneOrGCSShiftTransform: r4 } = this;
    if (o3.requestRawData && r4) return this._fetchPixels(e2, t3, i4, o3);
    const n4 = te(e2.spatialReference), s4 = oe(e2);
    if (null == n4 || 0 === s4 || 1 === s4 && this._isGlobalWrappableSource && r4) return this._fetchPixels(e2, t3, i4, o3);
    if (s4 >= 3) return { extent: e2, pixelBlock: null };
    const l5 = [], { xmin: a5, xmax: c4 } = e2, m6 = Math.round(n4 / (c4 - a5) * t3), u4 = m6 - Math.round((n4 / 2 - a5) / (c4 - a5) * t3);
    let h6 = 0;
    const p5 = [];
    for (let g4 = 0; g4 <= s4; g4++) {
      const r5 = new w({ xmin: 0 === g4 ? a5 : -n4 / 2, xmax: g4 === s4 ? c4 - n4 * g4 : n4 / 2, ymin: e2.ymin, ymax: e2.ymax, spatialReference: e2.spatialReference }), d5 = 0 === g4 ? m6 - u4 : g4 === s4 ? t3 - h6 : m6;
      h6 += d5, p5.push(d5);
      const x4 = o3.disableWrapAround && g4 > 0 ? null : this._fetchPixels(r5, d5, i4, o3);
      l5.push(x4);
    }
    const d4 = (await Promise.all(l5)).map((e3) => e3 == null ? void 0 : e3.pixelBlock);
    let x3 = null;
    const y3 = { width: t3, height: i4 };
    if (this.rasterJobHandler) {
      x3 = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: d4, srcMosaicSize: y3, destDimension: null, coefs: null, sampleSpacing: null, interpolation: "nearest", alignmentInfo: null, blockWidths: p5 }, o3)).pixelBlock;
    } else x3 = U(d4, y3, { blockWidths: p5 });
    return { extent: e2, srcExtent: V(e2, this.rasterInfo.spatialReference, o3.datumTransformation), pixelBlock: x3 };
  }
  async fetchRawPixels(e2, t3, i4, o3 = {}) {
    t3 = { x: Math.floor(t3.x), y: Math.floor(t3.y) };
    const r4 = await this._fetchRawTiles(e2, t3, i4, o3), { nativeExtent: n4, nativePixelSize: s4, storageInfo: l5 } = this.rasterInfo, a5 = 2 ** e2, c4 = s4.x * a5, m6 = s4.y * a5, u4 = new w({ xmin: n4.xmin + c4 * t3.x, xmax: n4.xmin + c4 * (t3.x + i4.width - 1), ymin: n4.ymax - m6 * (t3.y + i4.height - 1), ymax: n4.ymax - m6 * t3.y, spatialReference: n4.spatialReference });
    if (!r4) return { extent: u4, srcExtent: u4, pixelBlock: null };
    const { pixelBlocks: h6, mosaicSize: p5 } = r4;
    if (1 === h6.length && null != h6[0] && h6[0].width === i4.width && h6[0].height === i4.height) return { extent: u4, srcExtent: u4, pixelBlock: r4.pixelBlocks[0] };
    const d4 = e2 > 0 ? l5.pyramidBlockWidth : l5.blockWidth, x3 = e2 > 0 ? l5.pyramidBlockHeight : l5.blockHeight, y3 = { x: t3.x % d4, y: t3.y % x3 };
    let g4;
    if (this.rasterJobHandler) {
      g4 = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: h6, srcMosaicSize: p5, destDimension: i4, clipOffset: y3, clipSize: i4, coefs: null, sampleSpacing: null, interpolation: o3.interpolation, alignmentInfo: null, blockWidths: null }, o3)).pixelBlock;
    } else g4 = U(h6, p5, { clipOffset: y3, clipSize: i4 });
    return { extent: u4, srcExtent: u4, pixelBlock: g4 };
  }
  fetchRawTile(e2, t3, o3, r4) {
    throw new s("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(e2) {
    return V(this.rasterInfo.extent, e2);
  }
  decodePixelBlock(e2, t3) {
    return !this.rasterJobHandler || t3.useCanvas ? j3(e2, t3) : this.rasterJobHandler.decode({ data: e2, options: t3 });
  }
  async request(e2, i4, o3 = 0) {
    const { customFetchParameters: r4 } = this.ioConfig, { range: n4, query: s4, headers: l5 } = i4;
    o3 = o3 ?? i4.retryCount ?? this.ioConfig.retryCount;
    const a5 = n4 ? { Range: `bytes=${n4.from}-${n4.to}` } : null;
    try {
      return await P(e2, { ...i4, query: { ...s4, ...r4 }, headers: { ...l5, ...a5 } });
    } catch (c4) {
      if (o3 > 0) return o3--, this.request(e2, i4, o3);
      throw c4;
    }
  }
  getSliceIndex(e2) {
    const { multidimensionalInfo: t3 } = this.rasterInfo;
    return null == t3 || null == e2 || 0 === e2.length ? null : N(e2, t3);
  }
  getTileExtentFromTileInfo(e2, t3, i4, o3) {
    const r4 = o3.lodAt(e2);
    return this.getTileExtent({ x: r4.resolution, y: r4.resolution }, t3, i4, o3.origin, o3.spatialReference, o3.size);
  }
  updateTileInfo() {
    const { storageInfo: e2, spatialReference: t3, extent: i4, pixelSize: o3 } = this.rasterInfo, { pyramidResolutions: r4 } = e2;
    if (!e2.tileInfo) {
      const n4 = [], s4 = e2.maximumPyramidLevel || 0;
      let l5 = (o3.x + o3.y) / 2, a5 = 1 / 0.0254 * 96 * l5;
      for (let e3 = 0; e3 <= s4 && (n4.unshift(new p({ level: s4 - e3, resolution: l5, scale: a5 })), e3 !== s4); e3++) if (r4) {
        const t4 = (r4[e3].x + r4[e3].y) / 2;
        a5 *= t4 / l5, l5 = t4;
      } else l5 *= 2, a5 *= 2;
      const c4 = new j({ x: i4.xmin, y: i4.ymax, spatialReference: t3 });
      e2.tileInfo = new z({ origin: c4, size: [e2.blockWidth, e2.blockHeight], spatialReference: t3, lods: n4 }), e2.isVirtualTileInfo = true;
    }
  }
  createRemoteDatasetStorageInfo(e2, t3 = 512, i4 = 512, o3) {
    const { width: r4, height: n4, nativeExtent: s4, pixelSize: l5, spatialReference: a5 } = e2, c4 = new j({ x: s4.xmin, y: s4.ymax, spatialReference: a5 });
    null == o3 && (o3 = Math.max(0, Math.round(Math.log(Math.max(r4, n4)) / Math.LN2 - 8)));
    const f4 = this.computeBlockBoundary(s4, 512, 512, { x: s4.xmin, y: s4.ymax }, [l5], o3);
    e2.storageInfo = new n2({ blockWidth: t3, blockHeight: i4, pyramidBlockWidth: t3, pyramidBlockHeight: i4, origin: c4, firstPyramidLevel: 1, maximumPyramidLevel: o3, blockBoundary: f4 });
  }
  async computeBestPyramidLevelForLocation(e2, t3 = {}) {
    return 0;
  }
  computeBlockBoundary(e2, t3, i4, o3, r4, n4 = 0, s4 = 2) {
    if (1 === r4.length && n4 > 0) {
      r4 = [...r4];
      let { x: e3, y: t4 } = r4[0];
      for (let i5 = 0; i5 < n4; i5++) e3 *= s4, t4 *= s4, r4.push({ x: e3, y: t4 });
    }
    const l5 = [], { x: a5, y: c4 } = o3;
    for (let f4 = 0; f4 < r4.length; f4++) {
      const { x: o4, y: n5 } = r4[f4];
      l5.push({ minCol: Math.floor((e2.xmin - a5 + 0.1 * o4) / t3 / o4), maxCol: Math.floor((e2.xmax - a5 - 0.1 * o4) / t3 / o4), minRow: Math.floor((c4 - e2.ymax + 0.1 * n5) / i4 / n5), maxRow: Math.floor((c4 - e2.ymin - 0.1 * n5) / i4 / n5) });
    }
    return l5;
  }
  getPyramidPixelSize(e2) {
    const { nativePixelSize: t3 } = this.rasterInfo, { pyramidResolutions: i4, pyramidScalingFactor: o3 } = this.rasterInfo.storageInfo;
    if (0 === e2) return t3;
    if (null != i4 && i4.length) return i4[e2 - 1];
    const r4 = o3 ** e2;
    return { x: t3.x * r4, y: t3.y * r4 };
  }
  identifyPixelLocation(e2, t3, i4, o3) {
    const { spatialReference: r4, nativeExtent: n4, storageInfo: s4 } = this.rasterInfo, { maximumPyramidLevel: l5, origin: a5, transposeInfo: c4 } = s4, f4 = o3 && null != c4 ? c4.tileSize[0] : s4.blockWidth, m6 = o3 && null != c4 ? c4.tileSize[1] : s4.blockHeight, u4 = B(e2, r4, i4);
    if (!n4.intersects(u4)) return null;
    if (t3 < 0 || t3 > l5) return null;
    const h6 = this.getPyramidPixelSize(t3), { x: p5, y: d4 } = h6, x3 = (a5.y - u4.y) / d4 / m6, y3 = (u4.x - a5.x) / p5 / f4, g4 = Math.min(m6 - 1, Math.floor((x3 - Math.floor(x3)) * m6)), I = Math.min(f4 - 1, Math.floor((y3 - Math.floor(y3)) * f4));
    return { pyramidLevel: t3, row: Math.floor(x3), col: Math.floor(y3), rowOffset: g4, colOffset: I, blockWidth: f4, srcLocation: u4 };
  }
  getTileExtent(e2, t3, i4, o3, r4, n4) {
    const [s4, l5] = n4, a5 = o3.x + i4 * s4 * e2.x, c4 = a5 + s4 * e2.x, m6 = o3.y - t3 * l5 * e2.y, u4 = m6 - l5 * e2.y;
    return new w({ xmin: a5, xmax: c4, ymin: u4, ymax: m6, spatialReference: r4 });
  }
  getBlockWidthHeight(e2) {
    return { blockWidth: e2 > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: e2 > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(e2, t3, i4) {
    const o3 = this.rasterInfo.storageInfo.blockBoundary[e2];
    return !o3 || o3.maxRow < t3 || o3.maxCol < i4 || o3.minRow > t3 || o3.minCol > i4;
  }
  updateImageSpaceRasterInfo(e2) {
    const { pixelSize: t3 } = e2, { width: i4, height: o3 } = e2, r4 = g.WebMercator;
    e2.spatialReference = r4, e2.extent = e2.nativeExtent = new w({ xmin: -0.5, ymax: 0.5, xmax: i4 - 0.5, ymin: 0.5 - o3, spatialReference: r4 }), e2.isPseudoSpatialReference = true, e2.transform = null, e2.pixelSize = new j({ x: 1, y: 1, spatialReference: r4 });
    const { extent: n4, storageInfo: s4 } = e2;
    if (s4) {
      s4.origin = new j({ x: n4.xmin, y: n4.ymax, spatialReference: r4 });
      const { pyramidResolutions: i5, tileInfo: o4 } = s4;
      if (i5 && i5.forEach((e3) => {
        e3.x /= t3.x, e3.y /= t3.y;
      }), o4) {
        o4.origin = s4.origin;
        const t4 = (e2.nativePixelSize.x + e2.nativePixelSize.y) / 2;
        o4.lods.forEach((e3, i6) => {
          e3.resolution = t4 * 2 ** i6, e3.scale = 96 * e3.resolution / 0.0254;
        });
      }
    }
  }
  async _fetchPixels(e2, t3, i4, o3 = {}) {
    let r4 = oe(e2);
    if (r4 >= 2) return { extent: e2, pixelBlock: null };
    const n4 = this._getSourceDataInfo(e2, t3, i4, o3), { pyramidLevel: s4, srcResolution: l5, srcExtent: a5, srcWidth: c4, srcHeight: f4, ul: u4 } = n4;
    if (0 === c4 || 0 === f4) return { extent: e2, srcExtent: a5, pixelBlock: null };
    const { rasterInfo: h6 } = this, p5 = h6.transform, d4 = "gcs-shift" === (p5 == null ? void 0 : p5.type), x3 = null != te(e2.spatialReference);
    !d4 && x3 || (r4 = oe(n4.srcExtent, d4));
    const y3 = await this._fetchRawTiles(s4, u4, { width: c4, height: f4, wrapCount: r4 }, o3);
    if (!y3) return { extent: e2, srcExtent: a5, pixelBlock: null };
    const g4 = h6.storageInfo, I = s4 > 0 ? g4.pyramidBlockWidth : g4.blockWidth, R2 = s4 > 0 ? g4.pyramidBlockHeight : g4.blockHeight;
    let { x: w4, y: S2 } = h6.pixelSize;
    if (s4 > 0) {
      const { pyramidResolutions: e3, pyramidScalingFactor: t4 } = g4;
      if (null != e3 && e3[s4 - 1]) ({ x: w4, y: S2 } = e3[s4 - 1]);
      else {
        const e4 = t4 ** s4;
        w4 *= e4, S2 *= e4;
      }
    }
    const k = h6.spatialReference, T2 = new j({ x: w4, y: S2, spatialReference: k }), v2 = I === c4 && R2 === f4 && u4.x % I == 0 && u4.y % R2 == 0, b = new j({ x: (e2.xmax - e2.xmin) / t3, y: (e2.ymax - e2.ymin) / i4, spatialReference: e2.spatialReference }), P2 = !e2.spatialReference.equals(k), B2 = k.isGeographic ? 1e-9 : 1e-4, { datumTransformation: _3 } = o3;
    if (!P2 && v2 && 1 === y3.pixelBlocks.length && I === t3 && R2 === i4 && Q(l5, b, B2)) return { extent: e2, srcExtent: a5, srcTilePixelSize: T2, pixelBlock: y3.pixelBlocks[0] };
    const H = x3 && null != te(a5.spatialReference) && this._hasNoneOrGCSShiftTransform, L2 = o3.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
    L2 && !this.rasterJobHandler && await j4();
    const E2 = this.rasterJobHandler ? await this.rasterJobHandler.getProjectionOffsetGrid({ projectedExtent: e2, srcBufferExtent: y3.extent, pixelSize: b.toJSON(), datumTransformation: _3, rasterTransform: p5, hasWrapAround: r4 > 0 || H, isAdaptive: false !== this.ioConfig.optimizeProjectionAccuracy, includeGCSGrid: L2 }, o3) : ae({ projectedExtent: e2, srcBufferExtent: y3.extent, pixelSize: b, datumTransformation: _3, rasterTransform: p5, hasWrapAround: r4 > 0 || H, isAdaptive: false, includeGCSGrid: L2 });
    let F;
    const A = !o3.requestRawData, G = { rows: E2.spacing[0], cols: E2.spacing[1] }, J = this._hasNoneOrGCSShiftTransform ? this._getRasterTileAlignmentInfo(s4, y3.extent.xmin) : void 0, { pixelBlocks: N3, mosaicSize: V3, isPartiallyFilled: U4 } = y3;
    let $2 = null;
    if (this.rasterJobHandler) {
      const e3 = await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: N3, srcMosaicSize: V3, destDimension: A ? { width: t3, height: i4 } : null, coefs: A ? E2.coefficients : null, sampleSpacing: A ? G : null, projectDirections: L2, gcsGrid: L2 ? E2.gcsGrid : null, isUV: "vector-uv" === this.rasterInfo.dataType, interpolation: o3.interpolation, alignmentInfo: J, blockWidths: null }, o3);
      ({ pixelBlock: F, localNorthDirections: $2 } = e3);
    } else {
      const e3 = U(N3, V3, { alignmentInfo: J });
      F = A ? D(e3, { width: t3, height: i4 }, E2.coefficients, G, o3.interpolation) : e3, L2 && E2.gcsGrid && ($2 = R({ width: t3, height: i4 }, E2.gcsGrid), F = u(F, this.rasterInfo.dataType, $2));
    }
    return o3.requestRawData || L2 ? { extent: e2, srcExtent: a5, srcTilePixelSize: T2, pixelBlock: F, transformGrid: E2, localNorthDirections: $2, isPartiallyFilled: U4 } : { extent: e2, srcExtent: a5, srcTilePixelSize: T2, pixelBlock: F };
  }
  async _fetchRawTiles(e2, t3, i4, o3) {
    const { origin: r4, blockBoundary: n4 } = this.rasterInfo.storageInfo, { blockWidth: s4, blockHeight: l5 } = this.getBlockWidthHeight(e2);
    let { x: a5, y: c4 } = t3, { width: m6, height: u4, wrapCount: h6 } = i4;
    const p5 = this._getRasterTileAlignmentInfo(e2, 0);
    o3.buffer && (a5 -= o3.buffer.cols, c4 -= o3.buffer.rows, m6 += 2 * o3.buffer.cols, u4 += 2 * o3.buffer.rows);
    let d4 = 0, x3 = 0, y3 = 0;
    if (h6 && null != p5) {
      ({ worldColumnCountFromOrigin: x3, originColumnOffset: y3, rightPadding: d4 } = p5);
      x3 * p5.blockWidth - d4 >= a5 + m6 && (d4 = 0);
    }
    const g4 = Math.floor(a5 / s4), I = Math.floor(c4 / l5), R2 = Math.floor((a5 + m6 + d4 - 1) / s4), w4 = Math.floor((c4 + u4 + d4 - 1) / l5), S2 = n4[e2];
    if (!S2) return null;
    const { minRow: k, minCol: T2, maxCol: v2, maxRow: b } = S2;
    if (0 === h6 && (w4 < k || R2 < T2 || I > b || g4 > v2)) return null;
    const P2 = new Array();
    let B2 = false;
    const _3 = null == this.ioConfig.allowPartialFill ? o3.allowPartialFill : this.ioConfig.allowPartialFill;
    for (let f4 = I; f4 <= w4; f4++) for (let t4 = g4; t4 <= R2; t4++) {
      let i5 = t4;
      if (!o3.disableWrapAround && h6 && null != p5 && x3 <= t4 && (i5 = t4 - x3 - y3), f4 >= k && i5 >= T2 && b >= f4 && v2 >= i5) {
        const t5 = this._tileFetchQueue.push({ pyramidLevel: e2, row: f4, col: i5, options: o3 }, { signal: o3.signal });
        _3 ? P2.push(new Promise((e3) => {
          t5.then((t6) => e3(t6)).catch(() => {
            B2 = true, e3(null);
          });
        })) : P2.push(t5);
      } else P2.push(Promise.resolve(null));
    }
    if (0 === P2.length) return null;
    const M = await Promise.all(P2), C = { height: (w4 - I + 1) * l5, width: (R2 - g4 + 1) * s4 }, { spatialReference: W2 } = this.rasterInfo, j5 = this.getPyramidPixelSize(e2), { x: z4, y: H } = j5;
    return { extent: new w({ xmin: r4.x + g4 * s4 * z4, xmax: r4.x + (R2 + 1) * s4 * z4, ymin: r4.y - (w4 + 1) * l5 * H, ymax: r4.y - I * l5 * H, spatialReference: W2 }), pixelBlocks: M, mosaicSize: C, isPartiallyFilled: B2 };
  }
  _fetchRawTile(e2, t3, i4, o3) {
    const r4 = this.rasterInfo.storageInfo.blockBoundary[e2];
    if (!r4) return Promise.resolve(null);
    const { minRow: s4, minCol: l5, maxCol: a5, maxRow: c4 } = r4;
    if (t3 < s4 || i4 < l5 || t3 > c4 || i4 > a5) return Promise.resolve(null);
    const f4 = i2(this.rasterId, o3.sliceId), m6 = `${e2}/${t3}/${i4}`;
    let u4 = m4(f4, o3.registryId, m6);
    if (null == u4) {
      const r5 = new AbortController();
      u4 = this.fetchRawTile(e2, t3, i4, { ...o3, signal: r5.signal }), h3(f4, o3.registryId, m6, u4, r5), u4.catch(() => x2(f4, o3.registryId, m6));
    }
    return o3.signal && m2(o3, () => {
      s3(f4, o3.registryId, m6);
    }), u4;
  }
  _computeMagDirValues(e2) {
    var _a;
    const { bandCount: t3, dataType: i4 } = this.rasterInfo;
    if (!(2 === t3 && "vector-magdir" === i4 || "vector-uv" === i4) || 2 !== (e2 == null ? void 0 : e2.length) || !((_a = e2[0]) == null ? void 0 : _a.length)) return null;
    const o3 = e2[0].length;
    if ("vector-magdir" === i4) {
      const t4 = e2[1].map((e3) => (e3 + 360) % 360);
      return [e2[0], t4];
    }
    const [r4, n4] = e2, s4 = [], l5 = [];
    for (let a5 = 0; a5 < o3; a5++) {
      const [e3, t4] = l([r4[a5], n4[a5]]);
      s4.push(e3), l5.push(t4);
    }
    return [s4, l5];
  }
  _getRasterTileAlignmentInfo(e2, t3) {
    return null == this._rasterTileAlignmentInfo && (this._rasterTileAlignmentInfo = re(this.rasterInfo)), null == this._rasterTileAlignmentInfo.pyramidsInfo ? null : { startX: t3, halfWorldWidth: this._rasterTileAlignmentInfo.halfWorldWidth, hasGCSSShiftTransform: this._rasterTileAlignmentInfo.hasGCSSShiftTransform, ...this._rasterTileAlignmentInfo.pyramidsInfo[e2] };
  }
  _getSourceDataInfo(e2, t3, i4, o3 = {}) {
    const r4 = { datumTransformation: o3.datumTransformation, pyramidLevel: 0, pyramidResolution: null, srcExtent: null, srcHeight: 0, srcResolution: null, srcWidth: 0, ul: { x: 0, y: 0 } };
    o3.srcResolution && (r4.srcResolution = o3.srcResolution, this._updateSourceDataInfo(e2, r4));
    const n4 = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, { srcWidth: s4, srcHeight: l5, pyramidLevel: a5 } = r4, c4 = s4 / t3, f4 = l5 / i4, u4 = a5 < n4 && c4 * f4 >= 16, h6 = a5 === n4 && this._requireTooManySrcTiles(s4, l5, t3, i4);
    if (u4 || h6 || (0 === s4 || 0 === l5)) {
      const s5 = new j({ x: (e2.xmax - e2.xmin) / t3, y: (e2.ymax - e2.ymin) / i4, spatialReference: e2.spatialReference });
      let l6 = z3(s5, this.rasterInfo.spatialReference, e2, r4.datumTransformation);
      const h7 = !l6 || o3.srcResolution && l6.x + l6.y < o3.srcResolution.x + o3.srcResolution.y;
      if (u4 && o3.srcResolution && h7) {
        const e3 = Math.round(Math.log(Math.max(c4, f4)) / Math.LN2) - 1;
        if (n4 - a5 + 3 >= e3) {
          const t4 = 2 ** e3;
          l6 = { x: o3.srcResolution.x * t4, y: o3.srcResolution.y * t4 };
        }
      }
      l6 && (r4.srcResolution = l6, this._updateSourceDataInfo(e2, r4));
    }
    return this._requireTooManySrcTiles(r4.srcWidth, r4.srcHeight, t3, i4) && (r4.srcWidth = 0, r4.srcHeight = 0), r4;
  }
  _requireTooManySrcTiles(e2, t3, i4, o3) {
    const { tileInfo: r4 } = this.rasterInfo.storageInfo, n4 = Math.ceil(e2 / r4.size[0]) * Math.ceil(t3 / r4.size[1]), s4 = e2 / i4, l5 = t3 / o3, a5 = Math.max(1, (i4 + o3) / 1024);
    return n4 >= V2 * a5 || s4 > N2 || l5 > N2;
  }
  _updateSourceDataInfo(e2, t3) {
    t3.srcWidth = 0, t3.srcHeight = 0;
    const { rasterInfo: i4 } = this, o3 = i4.spatialReference, { srcResolution: r4, datumTransformation: n4 } = t3, { pyramidLevel: s4, pyramidResolution: l5, excessiveReading: a5 } = me(r4, i4, this.ioConfig.sampling);
    if (a5) return;
    let c4 = t3.srcExtent || V(e2, o3, n4);
    if (null == c4) return;
    const f4 = i4.transform;
    f4 && (c4 = f4.inverseTransform(c4)), t3.srcExtent = c4;
    const { x: m6, y: u4 } = i4.storageInfo.origin, h6 = Math.floor((c4.xmin - m6) / l5.x + 0.1), p5 = Math.floor((u4 - c4.ymax) / l5.y + 0.1), d4 = Math.floor((c4.xmax - m6) / l5.x - 0.1), x3 = Math.floor((u4 - c4.ymin) / l5.y - 0.1), y3 = c4.width < 0.1 * l5.x ? 0 : d4 - h6 + 1, g4 = c4.height < 0.1 * l5.y ? 0 : x3 - p5 + 1;
    t3.pyramidLevel = s4, t3.pyramidResolution = l5, t3.srcWidth = y3, t3.srcHeight = g4, t3.ul = { x: h6, y: p5 };
  }
  _getRequestOptionsWithSliceId(e2) {
    return null != this.rasterInfo.multidimensionalInfo && null == e2.sliceId && (e2 = { ...e2, sliceId: this.getSliceIndex(e2.multidimensionalDefinition) }), e2;
  }
  _processIdentifyResult(e2, t3) {
    const { srcLocation: i4, position: o3, pyramidLevel: r4, useTransposedTile: n4 } = t3, s4 = e2.pixels[0].length / e2.width / e2.height;
    if (!(!e2.mask || e2.mask[o3])) return { location: i4, value: null };
    const { multidimensionalInfo: l5 } = this.rasterInfo;
    if (null == l5 || !n4) {
      const t4 = e2.pixels.map((e3) => e3[o3]), n5 = { location: i4, value: t4, pyramidLevel: r4 }, s5 = this._computeMagDirValues(t4.map((e3) => [e3]));
      return (s5 == null ? void 0 : s5.length) && (n5.magdirValue = s5.map((e3) => e3[0])), n5;
    }
    let a5 = e2.pixels.map((e3) => e3.slice(o3 * s4, o3 * s4 + s4)), c4 = this._computeMagDirValues(a5);
    const { requestSomeSlices: f4, identifyOptions: m6 } = t3;
    let u4 = i(l5, m6.transposedVariableName);
    if (f4) {
      const e3 = a4(u4, m6.multidimensionalDefinition, m6.timeExtent);
      a5 = a5.map((t4) => e3.map((e4) => t4[e4])), c4 = c4 == null ? void 0 : c4.map((t4) => e3.map((e4) => t4[e4])), u4 = e3.map((e4) => u4[e4]);
    }
    const h6 = e2.noDataValues || this.rasterInfo.noDataValue, p5 = { pixels: a5, pixelType: e2.pixelType };
    let x3;
    null != h6 && (a3(p5, h6), x3 = p5.mask);
    return { location: i4, value: null, dataSeries: u4.map((e3, t4) => {
      const i5 = { value: 0 === (x3 == null ? void 0 : x3[t4]) ? null : a5.map((e4) => e4[t4]), multidimensionalDefinition: e3.multidimensionalDefinition.map((e4) => new p2({ ...e4, isSlice: true })) };
      return (c4 == null ? void 0 : c4.length) && (i5.magdirValue = [c4[0][t4], c4[1][t4]]), i5;
    }), pyramidLevel: r4 };
  }
};
function Q(e2, t3, i4) {
  return Math.abs(e2.x - t3.x) < i4 && Math.abs(e2.y - t3.y) < i4;
}
r([m()], $.prototype, "_rasterTileAlignmentInfo", void 0), r([m()], $.prototype, "_tileFetchQueue", void 0), r([m({ readOnly: true })], $.prototype, "_isGlobalWrappableSource", null), r([m({ readOnly: true })], $.prototype, "_hasNoneOrGCSShiftTransform", null), r([m()], $.prototype, "_openPromise", void 0), r([m()], $.prototype, "rasterJobHandler", null), r([m({ readOnly: true })], $.prototype, "rasterId", null), r([m(y2)], $.prototype, "url", null), r([m({ type: String, json: { write: true } })], $.prototype, "datasetName", void 0), r([m({ type: String, json: { write: true } })], $.prototype, "datasetFormat", void 0), r([m()], $.prototype, "hasUniqueSourceStorageInfo", void 0), r([m()], $.prototype, "rasterInfo", void 0), r([m()], $.prototype, "ioConfig", void 0), r([m()], $.prototype, "sourceJSON", void 0), $ = r([a("esri.layers.support.rasterDatasets.BaseRaster")], $);
var X = $;

// node_modules/@arcgis/core/layers/support/rasterDatasets/FunctionRaster.js
var p4 = 40;
var m5 = class extends X {
  constructor() {
    super(...arguments), this.datasetFormat = "Function", this.tileType = "Raster", this.rasterFunction = null, this._clippingGeometry = /* @__PURE__ */ new Map();
  }
  async fetchPixels(t3, e2, r4, s4 = {}) {
    var _a, _b;
    const { rasters: i4, rasterIds: o3 } = this.primaryRasters;
    let l5 = false;
    const { interpolation: c4 } = s4, p5 = (_a = this.rasterFunction.flatWebGLFunctionChain) == null ? void 0 : _a.hasFocalFunction;
    !s4.requestRawData && p5 && (l5 = 1 === i4.length && !s4.skipRasterFunction, s4 = { ...s4, interpolation: "bilinear", requestRawData: l5 });
    const m6 = i4.map((i5) => i5.fetchPixels(t3, e2, r4, s4)), u4 = await Promise.all(m6), h6 = u4.map((t4) => t4.pixelBlock), f4 = l5 || s4.requestRawData ? u4.map((t4) => t4.srcTilePixelSize) : null;
    if (s4.skipRasterFunction || h6.every((t4) => null == t4)) return u4[0];
    const d4 = ((_b = u4.find((t4) => null != t4.pixelBlock)) == null ? void 0 : _b.extent) ?? t3;
    let y3 = this.rasterJobHandler ? await this.rasterJobHandler.process({ extent: d4, primaryPixelBlocks: h6, primaryPixelSizes: f4, primaryRasterIds: o3 }) : this.rasterFunction.process({ extent: d4, primaryPixelBlocks: h6, primaryPixelSizes: f4, primaryRasterIds: o3 });
    const { transformGrid: g4 } = u4[0];
    if (!l5 || null == y3 || null == g4) {
      const t4 = s4.noClip ? null : this.getClippingGeometry(d4.spatialReference);
      return s4.noClip || s4.requestRawData || null == y3 || !t4 || (y3 = await h4(y3, d4, t4)), { ...u4[0], pixelBlock: y3 };
    }
    const x3 = { rows: g4.spacing[0], cols: g4.spacing[1] };
    let R2;
    if (this.rasterJobHandler) {
      R2 = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: [y3], srcMosaicSize: { width: y3.width, height: y3.height }, destDimension: { width: e2, height: r4 }, coefs: g4.coefficients, sampleSpacing: x3, projectDirections: false, gcsGrid: null, isUV: false, interpolation: c4, alignmentInfo: void 0, blockWidths: null }, s4)).pixelBlock;
    } else R2 = D(y3, { width: e2, height: r4 }, g4.coefficients, x3, c4);
    const w4 = s4.noClip ? null : this.getClippingGeometry(t3.spatialReference);
    return s4.noClip || s4.requestRawData || null == R2 || null == w4 || (R2 = await h4(R2, t3, w4)), { extent: t3, srcExtent: u4[0].srcExtent, pixelBlock: R2 };
  }
  getClippingGeometry(t3) {
    const e2 = this._clippingGeometry.get("0");
    if (!t3 || !e2) return e2;
    const r4 = f3(t3);
    let s4 = this._clippingGeometry.get(r4);
    return null != s4 || (s4 = t3.equals(e2.spatialReference) ? e2 : Z(e2, t3), this._clippingGeometry.set(r4, s4)), s4;
  }
  async _open(t3) {
    var _a, _b, _c, _d;
    const { rasterFunction: r4 } = this;
    ((_b = (_a = this.primaryRasters) == null ? void 0 : _a.rasters) == null ? void 0 : _b.length) ? r4.sourceRasters = this.primaryRasters.rasters : (this.primaryRasters = r4.getPrimaryRasters(), this.rasterJobHandler && ((_c = this.primaryRasters.rasters) == null ? void 0 : _c.forEach((t4) => t4.rasterJobHandler = this.rasterJobHandler)));
    const { rasters: s4, rasterIds: i4 } = this.primaryRasters, o3 = s4.map((e2) => e2.rasterInfo ? void 0 : e2.open(t3));
    await Promise.all(o3);
    const n4 = s4.map(({ rasterInfo: t4 }) => t4), a5 = r4.bind({ rasterInfos: n4, rasterIds: i4 });
    if (r4.rawSourceRasterInfos = n4, !a5.success || 0 === n4.length) throw new s("raster-function:open", `cannot bind the function: ${a5.error ?? ""}`);
    const l5 = "Table" === r4.functionName ? r4 : (_d = r4.functionArguments) == null ? void 0 : _d.raster;
    "Table" === (l5 == null ? void 0 : l5.functionName) && (r4.rasterInfo.attributeTable = d2.fromJSON(l5.functionArguments.attributeTableAsRecordSet)), await this.syncJobHandler();
    const p5 = n4[0];
    this.hasUniqueSourceStorageInfo = 1 === n4.length || n4.slice(1).every((t4) => h5(t4, p5)), this.set("sourceJSON", s4[0].sourceJSON), this.set("rasterInfo", r4.rasterInfo), await this._updateClipGeometry();
  }
  async syncJobHandler() {
    var _a;
    return (_a = this.rasterJobHandler) == null ? void 0 : _a.updateRasterFunction(this.rasterFunction);
  }
  async _updateClipGeometry() {
    const t3 = this.rasterFunction.getClippingGeometries()[0];
    let e2 = t3 == null ? void 0 : t3.clippingGeometry;
    if (e2 && "inside" === t3.clippingType) {
      const { extent: t4 } = this.rasterInfo, { difference: r4, densify: s4 } = await import("./geometryEngine-NZOZ5KZJ.js");
      let o3 = s4(j2.fromExtent(t4), 2 * (t4.width + t4.height) / p4);
      o3 = Z(o3, e2.spatialReference), e2 = r4(o3, e2);
    }
    this._clippingGeometry.clear(), e2 && this._clippingGeometry.set("0", e2);
  }
};
r([m({ type: String, json: { write: true } })], m5.prototype, "datasetFormat", void 0), r([m()], m5.prototype, "tileType", void 0), r([m()], m5.prototype, "rasterFunction", void 0), r([m()], m5.prototype, "primaryRasters", void 0), m5 = r([a("esri.layers.support.rasterDatasets.FunctionRaster")], m5);
var u2 = m5;
function h5(t3, e2) {
  const { storageInfo: r4, pixelSize: s4, spatialReference: i4, extent: o3 } = t3, { storageInfo: n4, pixelSize: a5, spatialReference: l5, extent: c4 } = e2;
  return s4.x === a5.x && s4.y === a5.y && i4.equals(l5) && o3.equals(c4) && r4.blockHeight === n4.blockHeight && r4.blockWidth === n4.blockWidth && r4.maximumPyramidLevel === n4.maximumPyramidLevel;
}
function f3(t3) {
  return String(t3.wkid ?? t3.wkt ?? t3.wkt2);
}

// node_modules/@arcgis/core/layers/mixins/ImageryTileMixin.js
var K = (K2) => {
  let Q2 = class extends K2 {
    constructor(...e2) {
      var _a, _b;
      super(...e2), this._isConstructedFromFunctionRaster = false, this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this.bandIds = null, this.copyright = null, this.interpolation = null, this.multidimensionalSubset = null, this.raster = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.symbolizer = null, this._isConstructedFromFunctionRaster = "Function" === ((_b = (_a = e2[0]) == null ? void 0 : _a.raster) == null ? void 0 : _b.datasetFormat);
    }
    get fullExtent() {
      var _a;
      return (_a = this.serviceRasterInfo) == null ? void 0 : _a.extent;
    }
    set multidimensionalDefinition(e2) {
      this._set("multidimensionalDefinition", e2), this.updateRenderer();
    }
    set rasterFunction(e2) {
      var _a;
      "none" === ((_a = e2 == null ? void 0 : e2.functionName) == null ? void 0 : _a.toLowerCase()) && (e2 = void 0), this._set("rasterFunction", e2), this.updateRasterFunction();
    }
    set url(e2) {
      this._set("url", y(e2, n.getLogger(this)));
    }
    get renderer() {
      if ("imagery-tile" !== this.type) return this.internalRenderer;
      const { activePresetRendererName: e2, presetRenderers: t3 } = this;
      if (e2) {
        const r4 = t3 == null ? void 0 : t3.find(({ name: t4 }) => t4 === e2);
        return r4 == null ? void 0 : r4.renderer.clone();
      }
      return this.internalRenderer;
    }
    set renderer(e2) {
      "imagery-tile" === this.type && (this.activePresetRendererName = null), this.internalRenderer = e2;
    }
    set internalRenderer(e2) {
      null == e2 && null == this.rasterFunction ? this._configDefaultRenderer("override") : (this._set("internalRenderer", e2), this.updateRenderer());
    }
    readRenderer(e2, t3, r4) {
      var _a, _b;
      const i4 = (_b = (_a = t3 == null ? void 0 : t3.layerDefinition) == null ? void 0 : _a.drawingInfo) == null ? void 0 : _b.renderer;
      return c2(i4, r4) || void 0;
    }
    async convertVectorFieldData(e2, t3) {
      const { serviceRasterInfo: r4 } = this;
      if (null == e2 || !r4) return null;
      const i4 = this._rasterJobHandler.instance, s4 = r4.dataType;
      return i4 ? i4.convertVectorFieldData({ pixelBlock: e2, dataType: s4 }, t3) : f2(e2, s4);
    }
    async computeStatisticsHistograms(e2, t3) {
      await this.load(t3), e2 = h(g3, e2).clone();
      const { serviceRasterInfo: i4 } = this;
      if (null == i4) throw new s("imagery-tile-mixin:compute-statistics-histograms", "serviceRasterInfo must be specified");
      const { geometry: s4 } = e2;
      if (null == s4) throw new s("imagery-tile-mixin:compute-statistics-histograms", "geometry must be specified");
      let n4 = s4;
      const { spatialReference: a5 } = i4;
      s4.spatialReference.equals(a5) || (await j4(), n4 = "extent" === s4.type ? V(s4, a5) : Z(s4, a5));
      const l5 = e2.pixelSize ?? new j({ x: i4.pixelSize.x, y: i4.pixelSize.y, spatialReference: a5 }), { extent: c4, width: d4, height: m6 } = l3(i4, n4, l5), h6 = await this.fetchPixels(c4, d4, m6, { ...t3, interpolation: "nearest" });
      if (null == h6.pixelBlock) throw new s("imagery-tile-mixin:compute-statistics-histograms", "failed to fetch pixels");
      const p5 = await h4(h6.pixelBlock, c4, n4), f4 = this._rasterJobHandler.instance;
      return f4 ? f4.computeStatisticsHistograms({ pixelBlock: p5 }, t3) : m3(p5);
    }
    async createFlowMesh(e2, t3) {
      const r4 = this._rasterJobHandler.instance;
      return r4 ? r4.createFlowMesh(e2, t3) : s2(e2.meshType, e2.simulationSettings, e2.flowData, null != t3.signal ? t3.signal : new AbortController().signal);
    }
    normalizeRasterFetchOptions(e2) {
      const { multidimensionalInfo: t3 } = this.serviceRasterInfo ?? {};
      if (null == t3) return e2;
      const r4 = f({ rasterInfo: this.raster.rasterInfo, multidimensionalDefinition: e2.multidimensionalDefinition || this.multidimensionalDefinition, timeExtent: e2.timeExtent ?? this.timeExtent, multidimensionalSubset: this.multidimensionalSubset });
      return { ...e2, multidimensionalDefinition: r4 };
    }
    async updateRasterFunction() {
      var _a;
      return this.loaded && "imagery-tile" === this.type && (this.rasterFunction || this._cachedRasterFunctionJson) && JSON.stringify(this.rasterFunction) !== JSON.stringify(this._cachedRasterFunctionJson) ? (this._cachedRasterFunctionJson = (_a = this.rasterFunction) == null ? void 0 : _a.toJSON(), this._rasterFunctionUpdatePromise = this._updateRasterFunction(), this._rasterFunctionUpdatePromise) : this._rasterFunctionUpdatePromise;
    }
    async updateRenderer() {
      const { loaded: e2, symbolizer: t3 } = this;
      if (!e2 || !t3 || !this.renderer) return;
      const { rasterInfo: r4 } = this.raster, i4 = d3(r4, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), s4 = i4 == null ? void 0 : i4.name, n4 = ee({ ...this.renderer.toJSON(), variableName: s4 });
      if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(n4)) return;
      const o3 = this._rasterJobHandler.instance;
      o3 && (t3.rasterInfo = W(r4, s4), t3.rendererJSON = n4, t3.bind(), await o3.updateSymbolizer(t3), this._cachedRendererJson = n4);
    }
    async applyRenderer(e2, t3) {
      const r4 = e2 == null ? void 0 : e2.pixelBlock;
      if (!(null != r4 && r4.pixels && r4.pixels.length > 0)) return null;
      let i4;
      await this.updateRenderer();
      const s4 = this._rasterJobHandler.instance, n4 = this.bandIds ?? [];
      return i4 = s4 ? await s4.symbolize({ ...e2, simpleStretchParams: t3, bandIds: n4 }) : this.symbolizer.symbolize({ ...e2, simpleStretchParams: t3, bandIds: n4 }), i4;
    }
    getTileUrl(e2, t3, r4) {
      return "RasterTileServer" === this.raster.datasetFormat ? `${this.url}/tile/${e2}/${t3}/${r4}` : "";
    }
    getCompatibleTileInfo(e2, t3, r4 = false) {
      if (!this.loaded || null == t3) return null;
      if (r4 && e2.equals(this.spatialReference)) return this.tileInfo;
      const i4 = d(e2);
      return z.create({ size: 256, spatialReference: e2, origin: i4 ? { x: i4.origin[0], y: i4.origin[1] } : { x: t3.xmin, y: t3.ymax } });
    }
    getCompatibleFullExtent(e2) {
      var _a;
      return this.loaded ? (((_a = this._compatibleFullExtent) == null ? void 0 : _a.spatialReference.equals(e2)) || (this._compatibleFullExtent = this.raster.computeExtent(e2)), this._compatibleFullExtent) : null;
    }
    async fetchTile(e2, r4, i4, s4 = {}) {
      var _a;
      if (X2(this), s4.requestAsImageElement) {
        const n5 = this.getTileUrl(e2, r4, i4);
        return P(n5, { responseType: "image", query: { ...this.refreshParameters, ...this.raster.ioConfig.customFetchParameters }, signal: s4.signal }).then((e3) => e3.data);
      }
      const { serviceRasterInfo: n4 } = this;
      if (null != n4.multidimensionalInfo && null == (s4 = this.normalizeRasterFetchOptions(s4)).multidimensionalDefinition) {
        const t3 = s4.tileInfo || n4.storageInfo.tileInfo;
        return { extent: this.raster.getTileExtentFromTileInfo(e2, r4, i4, t3), pixelBlock: null };
      }
      return await this._initJobHandler(), await this.updateRasterFunction(), "raster-shaded-relief" === ((_a = this.renderer) == null ? void 0 : _a.type) && (s4 = { ...s4, buffer: { cols: 1, rows: 1 } }), this.raster.fetchTile(e2, r4, i4, s4);
    }
    async fetchPixels(e2, t3, r4, i4 = {}) {
      return null != this.serviceRasterInfo.multidimensionalInfo && null == (i4 = this.normalizeRasterFetchOptions(i4)).multidimensionalDefinition ? { extent: e2, pixelBlock: null } : (await this._initJobHandler(), await this.updateRasterFunction(), t3 = Math.round(t3), r4 = Math.round(r4), this.raster.fetchPixels(e2, t3, r4, i4));
    }
    async identify(e2, t3 = {}) {
      var _a;
      await this.load();
      const { raster: i4, serviceRasterInfo: s4 } = this;
      if (null != (s4 == null ? void 0 : s4.multidimensionalInfo)) {
        if (!(s4.hasMultidimensionalTranspose && !!(g2(t3.multidimensionalDefinition) || t3.transposedVariableName || t3.timeExtent)) && null == (t3 = this.normalizeRasterFetchOptions(t3)).multidimensionalDefinition) return { location: e2, value: null };
      }
      const n4 = (_a = this.multidimensionalSubset) == null ? void 0 : _a.areaOfInterest;
      if (n4 && !n4.contains(e2)) throw new s("imagery-tile-mixin:identify", "the request cannot be fulfilled when falling outside of the multidimensional subset");
      return i4.identify(e2, t3);
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    hasStandardTime() {
      var _a, _b, _c;
      const e2 = (_a = this.serviceRasterInfo) == null ? void 0 : _a.multidimensionalInfo;
      if (null == e2 || "standard-time" !== ((_b = this.serviceRasterInfo) == null ? void 0 : _b.dataType)) return false;
      const t3 = this.multidimensionalDefinition, r4 = (_c = t3 == null ? void 0 : t3[0]) == null ? void 0 : _c.variableName;
      return e2.variables.some((e3) => e3.name === r4 && (!(t3 == null ? void 0 : t3[0].dimensionName) || e3.dimensions.some((e4) => "StdTime" === e4.name)));
    }
    getStandardTimeValue(e2) {
      return new Date(w3(e2)).toISOString();
    }
    getMultidimensionalSubsetVariables(e2) {
      var _a;
      const t3 = e2 ?? ((_a = this.serviceRasterInfo) == null ? void 0 : _a.multidimensionalInfo);
      return v(this.multidimensionalSubset, t3);
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = h2(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset })), this.rasterFunction && "Function" === this.raster.datasetFormat && (this._cachedRasterFunctionJson = this.rasterFunction.toJSON()), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (null != this._rasterJobHandler.connectionPromise) return this._rasterJobHandler.connectionPromise;
      const e2 = new t();
      return this._rasterJobHandler.connectionPromise = e2.initialize().then(async () => {
        X2(this), this._rasterJobHandler.instance = e2, this.raster.rasterJobHandler = e2, "Function" === this.raster.datasetFormat && this.raster.syncJobHandler(), this.rasterFunction && await this.updateRasterFunction().catch(() => {
        }), this.renderer && this.updateRenderer();
      }).catch(() => {
      }), this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this._cachedRendererJson = null, this.raster && (this.raster.rasterJobHandler = null);
    }
    _configDefaultInterpolation() {
      var _a;
      if (null == this.interpolation) {
        X2(this);
        const { raster: e2 } = this, t3 = z2(e2.rasterInfo, e2.tileType, (_a = this.sourceJSON) == null ? void 0 : _a.defaultResamplingMethod);
        this._set("interpolation", t3);
      }
    }
    _configDefaultRenderer(e2 = "no") {
      var _a, _b, _c;
      X2(this);
      const { rasterInfo: t3 } = this.raster, r4 = d3(t3, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), s4 = r4 == null ? void 0 : r4.name, n4 = L({ variableName: s4, rasterFunctionName: (_a = this.rasterFunction) == null ? void 0 : _a.functionName, presetRenderers: this.presetRenderers });
      if (!this.bandIds && t3.bandCount > 1 && (this.bandIds = (n4 == null ? void 0 : n4.bandIds) ?? U2(t3)), !this.renderer || "override" === e2) {
        const e3 = E(this.raster), r5 = (n4 == null ? void 0 : n4.renderer) ?? q(t3, { bandIds: this.bandIds, variableName: s4, rasterFunctionColorRamp: e3 }), i4 = t3.statistics, o4 = i4 && i4.length > 0 ? i4[0] : null, a6 = (o4 == null ? void 0 : o4.max) ?? 0, l6 = (o4 == null ? void 0 : o4.min) ?? 0;
        "WCSServer" === this.raster.datasetFormat && "raster-stretch" === r5.type && (a6 > 1e24 || l6 < -1e24) && (r5.dynamicRangeAdjustment = true, r5.customStatistics = null, "none" === r5.stretchType && (r5.stretchType = "min-max")), this.renderer = r5;
      }
      const o3 = ee({ ...this.renderer.toJSON(), variableName: s4 }), a5 = W(t3, s4);
      this.symbolizer ? (this.symbolizer.rendererJSON = o3, this.symbolizer.rasterInfo = a5) : this.symbolizer = new _2({ rendererJSON: o3, rasterInfo: a5 });
      const l5 = this.symbolizer.bind();
      if (l5.success) {
        if ("auto" === e2) {
          const { colormap: e3 } = this.raster.rasterInfo, t4 = this.renderer;
          if (null != e3 && "raster-colormap" === t4.type) {
            const e4 = q(this.raster.rasterInfo);
            JSON.stringify(e4) !== JSON.stringify(t4) && this._configDefaultRenderer("override");
          } else if ("raster-stretch" === t4.type) {
            const e4 = (_b = this.bandIds) == null ? void 0 : _b.length, r5 = (_c = t4.customStatistics) == null ? void 0 : _c.length;
            !t4.dynamicRangeAdjustment && r5 && e4 && r5 !== e4 && this._configDefaultRenderer("override");
          }
        }
      } else n.getLogger(this).warn("imagery-tile-mixin", l5.error || "The given renderer is not supported by the layer."), "auto" === e2 && this._configDefaultRenderer("override");
    }
    async _updateRasterFunction() {
      var _a;
      if (this._isConstructedFromFunctionRaster && "Function" === this.raster.datasetFormat) {
        const e3 = this.raster.rasterFunction.toJSON();
        return void (!this.rasterFunction && e3 && this._set("rasterFunction", w2.fromJSON(e3)));
      }
      let e2, t3 = this.raster, r4 = false;
      "Function" === t3.datasetFormat ? (e2 = t3.primaryRasters.rasters, t3 = e2[0], r4 = true) : e2 = [t3];
      const { rasterFunction: i4 } = this;
      if (i4) {
        const r5 = { raster: t3 };
        e2.length > 1 && e2.forEach((e3) => r5[e3.url] = e3);
        const s5 = T(((_a = i4.functionDefinition) == null ? void 0 : _a.toJSON()) ?? i4.toJSON(), r5), n5 = new u2({ rasterFunction: s5 });
        n5.rasterJobHandler = this._rasterJobHandler.instance, await n5.open(), this.raster = n5;
      } else this.raster = t3, await t3.open();
      if (this._cachedRendererJson = null, !r4 && !i4) return;
      const { bandIds: s4 } = this, { bandCount: n4 } = this.raster.rasterInfo, o3 = (s4 == null ? void 0 : s4.length) ? s4.some((e3) => e3 >= n4) : n4 >= 3;
      s4 && (o3 || this.renderer && "raster-stretch" !== this.renderer.type) && this._set("bandIds", null), this._configDefaultRenderer("auto");
    }
  };
  function X2(e2) {
    if (!e2.raster || !e2.serviceRasterInfo) throw new s("imagery-tile", "no raster");
  }
  return r([m({ clonable: false })], Q2.prototype, "_cachedRendererJson", void 0), r([m({ clonable: false })], Q2.prototype, "_cachedRasterFunctionJson", void 0), r([m({ clonable: false })], Q2.prototype, "_compatibleFullExtent", void 0), r([m({ clonable: false })], Q2.prototype, "_isConstructedFromFunctionRaster", void 0), r([m({ clonable: false })], Q2.prototype, "_rasterJobHandler", void 0), r([m({ clonable: false })], Q2.prototype, "_rasterFunctionUpdatePromise", void 0), r([m({ type: [x], json: { write: { overridePolicy() {
    var _a;
    return { enabled: !this.loaded || "Raster" === this.raster.tileType || "0,1,2" !== ((_a = this.bandIds) == null ? void 0 : _a.join(",")) };
  } } } })], Q2.prototype, "bandIds", void 0), r([m({ json: { origins: { service: { read: { source: "copyrightText" } } } } })], Q2.prototype, "copyright", void 0), r([m({ json: { read: false } })], Q2.prototype, "fullExtent", null), r([m({ json: { write: { overridePolicy() {
    return { enabled: !this.loaded || "Raster" === this.raster.tileType || "bilinear" !== this.interpolation };
  } } } }), r2(a2)], Q2.prototype, "interpolation", void 0), r([m()], Q2.prototype, "ioConfig", void 0), r([m({ type: [p2], json: { write: true } })], Q2.prototype, "multidimensionalDefinition", null), r([m({ type: c, json: { write: true } })], Q2.prototype, "multidimensionalSubset", void 0), r([m()], Q2.prototype, "raster", void 0), r([m({ type: w2 })], Q2.prototype, "rasterFunction", null), r([m()], Q2.prototype, "serviceRasterInfo", void 0), r([m()], Q2.prototype, "sourceJSON", void 0), r([m({ readOnly: true, type: g, json: { read: false } })], Q2.prototype, "spatialReference", void 0), r([m({ type: z })], Q2.prototype, "tileInfo", void 0), r([m(y2)], Q2.prototype, "url", null), r([m()], Q2.prototype, "renderer", null), r([m({ types: l2, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy() {
    var _a;
    const e2 = "raster-stretch" === ((_a = this.renderer) == null ? void 0 : _a.type) && "none" === this.renderer.stretchType && !this.renderer.useGamma;
    return { enabled: !this.loaded || "Raster" === this.raster.tileType || !e2 };
  } }, origins: { "web-scene": { types: p3, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (e2) => ({ enabled: e2 && "vector-field" !== e2.type && "flow" !== e2.type }) } } } } })], Q2.prototype, "internalRenderer", null), r([o("internalRenderer")], Q2.prototype, "readRenderer", null), r([m({ clonable: false })], Q2.prototype, "symbolizer", void 0), Q2 = r([a("esri.layers.mixins.ImageryTileMixin")], Q2), Q2;
};

// node_modules/@arcgis/core/layers/support/rasterDatasets/xmlUtilities.js
function n3(e2, t3) {
  if (!e2 || !t3) return [];
  let l5 = t3;
  t3.includes("/") ? (l5 = t3.slice(0, t3.indexOf("/")), t3 = t3.slice(t3.indexOf("/") + 1)) : t3 = "";
  const r4 = [];
  if (t3) {
    const u5 = n3(e2, l5);
    for (let e3 = 0; e3 < u5.length; e3++) {
      n3(u5[e3], t3).forEach((n4) => r4.push(n4));
    }
    return r4;
  }
  const u4 = e2.getElementsByTagNameNS("*", l5);
  if (!u4 || 0 === u4.length) return [];
  for (let n4 = 0; n4 < u4.length; n4++) r4.push(u4[n4] || u4.item(n4));
  return r4;
}
function e(t3, l5) {
  if (!t3 || !l5) return null;
  let r4 = l5;
  l5.includes("/") ? (r4 = l5.slice(0, l5.indexOf("/")), l5 = l5.slice(l5.indexOf("/") + 1)) : l5 = "";
  const u4 = n3(t3, r4);
  return u4.length > 0 ? l5 ? e(u4[0], l5) : u4[0] : null;
}
function t2(n4, t3 = null) {
  const l5 = t3 ? e(n4, t3) : n4;
  let r4;
  return l5 ? (r4 = l5.textContent || l5.nodeValue, r4 ? r4.trim() : null) : null;
}
function l4(e2, t3) {
  const l5 = n3(e2, t3), r4 = [];
  let u4;
  for (let n4 = 0; n4 < l5.length; n4++) u4 = l5[n4].textContent || l5[n4].nodeValue, u4 && (u4 = u4.trim(), "" !== u4 && r4.push(u4));
  return r4;
}
function r3(n4, e2 = null) {
  const l5 = t2(n4, e2);
  return (l5 == null ? void 0 : l5.split(" ").map((n5) => Number(n5))) ?? [];
}
function u3(n4, e2) {
  return l4(n4, e2).map((n5) => Number(n5));
}
function o2(n4, e2) {
  const l5 = t2(n4, e2);
  return Number(l5);
}
function i3(n4, e2) {
  var _a;
  const t3 = (_a = n4 == null ? void 0 : n4.nodeName) == null ? void 0 : _a.toLowerCase(), l5 = e2.toLowerCase();
  return t3.slice(t3.lastIndexOf(":") + 1) === l5;
}
function c3(n4) {
  return n4.nodeName.slice(n4.nodeName.lastIndexOf(":") + 1);
}

export {
  X,
  u2 as u,
  K,
  n3 as n,
  e,
  t2 as t,
  l4 as l,
  r3 as r,
  u3 as u2,
  o2 as o,
  i3 as i,
  c3 as c
};
//# sourceMappingURL=chunk-X3CD4QSJ.js.map
