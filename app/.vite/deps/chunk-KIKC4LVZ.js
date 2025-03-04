import {
  f as f3,
  k,
  n2 as n4,
  s2 as s4
} from "./chunk-LTF4JXOW.js";
import {
  i as i3,
  s as s3,
  t as t2
} from "./chunk-PMUCRJCT.js";
import {
  a as a3,
  l as l4
} from "./chunk-UQQJEYZO.js";
import {
  I,
  l as l3
} from "./chunk-RDJPXK25.js";
import {
  Ft,
  Gt,
  Mt,
  ft,
  nt,
  ut
} from "./chunk-F7TFMQ3A.js";
import {
  n as n2,
  o,
  s as s2
} from "./chunk-EM6PL3GZ.js";
import {
  e as e3
} from "./chunk-J7454WTE.js";
import {
  B
} from "./chunk-6X7CIA5N.js";
import {
  a as a2,
  i
} from "./chunk-A4LAIXK6.js";
import {
  i as i2,
  r
} from "./chunk-Z2A222O3.js";
import {
  J,
  K,
  yi
} from "./chunk-ANT4QPJQ.js";
import {
  U
} from "./chunk-CRKFUUKK.js";
import {
  p
} from "./chunk-LZTCFOLV.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  y
} from "./chunk-PXJIE4N5.js";
import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  D
} from "./chunk-XEBZUAYT.js";
import {
  Ie,
  f as f2,
  ge
} from "./chunk-6REABBOQ.js";
import {
  e as e2
} from "./chunk-STBNLAGT.js";
import {
  n as n3,
  p as p2
} from "./chunk-HSI6V34N.js";
import {
  m
} from "./chunk-Y3AY7I5U.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  a
} from "./chunk-W633AKTD.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  l as l2
} from "./chunk-PODRVOXS.js";
import {
  E,
  j
} from "./chunk-REAPFM7O.js";
import {
  e,
  t
} from "./chunk-UNGOQUF2.js";
import {
  l2 as l,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/util/Writer.js
var t3 = 1.25;
var r2 = class {
  get length() {
    return this._pos;
  }
  constructor(t8, r9) {
    this._pos = 0;
    const e5 = r9 ? this._roundToNearest(r9, t8.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(e5), this._buffer = new t8(this._array), this._ctor = t8, this._i16View = new Int16Array(this._array);
  }
  _roundToNearest(t8, r9) {
    const e5 = Math.round(t8);
    return 1 === r9 ? e5 : e5 + (r9 - e5 % r9);
  }
  _ensureSize(r9) {
    if (this._pos + r9 >= this._buffer.length) {
      const e5 = this._roundToNearest((this._array.byteLength + r9 * this._buffer.BYTES_PER_ELEMENT) * t3, this._buffer.BYTES_PER_ELEMENT), s9 = new ArrayBuffer(e5), i7 = new this._ctor(s9);
      i7.set(this._buffer, 0), this._array = s9, this._buffer = i7, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(t8) {
    this._ensureSize(t8);
  }
  writeF32(t8) {
    this._ensureSize(1);
    const r9 = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = t8, this._pos++, r9;
  }
  push(t8) {
    this._ensureSize(1);
    const r9 = this._pos;
    return this._buffer[this._pos++] = t8, r9;
  }
  writeFixed(t8) {
    this._buffer[this._pos++] = t8;
  }
  setValue(t8, r9) {
    this._buffer[t8] = r9;
  }
  i1616Add(t8, r9, e5) {
    this._i16View[2 * t8] += r9, this._i16View[2 * t8 + 1] += e5;
  }
  getValue(t8) {
    return this._buffer[t8];
  }
  getValueF32(t8) {
    return new Float32Array(this._array, 4 * t8, 1)[0];
  }
  incr(t8) {
    if (this._buffer.length < t8) throw new Error("Increment index overflows the target buffer");
    this._buffer[t8]++;
  }
  decr(t8) {
    this._buffer[t8]--;
  }
  writeRegion(t8) {
    this._ensureSize(t8.length);
    const r9 = this._pos;
    return this._buffer.set(t8, this._pos), this._pos += t8.length, r9;
  }
  writeManyFrom(t8, r9, e5) {
    this._ensureSize(e5 - r9);
    for (let s9 = r9; s9 !== e5; s9++) this.writeFixed(t8._buffer[s9]);
  }
  buffer() {
    const t8 = this._array.slice(0, 4 * this._pos);
    return this.destroy(), t8;
  }
  toArray() {
    return [...this._buffer];
  }
  seek(t8) {
    this._pos = t8;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexDataWriter.js
var e4 = 6;
var i4 = 4;
var r3 = class {
  constructor(r9, s9, n10 = 0) {
    const c3 = e4 * n10 * Uint32Array.BYTES_PER_ELEMENT, h = i4 * n10 * s9.stride, u3 = s9.stride / 4, _4 = s9.attributes.find((t8) => "pos" === t8.name || "position" === t8.name);
    if (!_4) throw new Error("InternalError: Unable to find position attribute");
    this.layout = { ...s9, position: _4 }, this._indices = new r2(Uint32Array, c3), this._vertices = new r2(Uint32Array, h), this._metrics = new r2(Uint32Array, 0), this._metricCountOffset = this._metrics.push(0), this._strideInt = u3, this._instanceId = r9;
  }
  serialize(t8) {
    const e5 = this._indices.buffer(), i7 = this._vertices.buffer(), r9 = this._metrics.length ? this._metrics.buffer() : null;
    return t8.push(e5, i7), { instanceId: this._instanceId, layout: this.layout, indices: e5, vertices: i7, metrics: r9 };
  }
  get strideInt() {
    return this._strideInt;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(t8) {
    this._vertices.ensureSize(t8);
  }
  indexEnsureSize(t8) {
    this._indices.ensureSize(t8);
  }
  writeIndex(t8) {
    this._indices.push(t8);
  }
  writeVertex(t8) {
    this._vertices.push(t8);
  }
  writeVertexRegion(t8) {
    this._vertices.writeRegion(t8);
  }
  writeVertexF32(t8) {
    this._vertices.writeF32(t8);
  }
  writeMetric(t8) {
    this._metrics.incr(this._metricCountOffset), t8.serialize(this._metrics);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/MeshData.js
var n5 = class {
  constructor(e5, r9 = 0) {
    this._id = e5, this._sizeHint = r9, this._entityRecordCountOffset = 0, this._entityCountOffset = 0, this._entityIdIndex = 0, this._entitySortKeyIndex = 0, this._didEntityStart = false, this._instanceIdToVertexData = /* @__PURE__ */ new Map(), this._recordIndexStart = 0, this._recordIndexCount = 0, this._recordVertexStart = 0, this._recordVertexCount = 0, this._current = { metric: null, writer: null, start: 0, sortKey: 0, instanceId: 0, layoutHash: 0, indexStart: 0, vertexStart: 0, textureKey: 0, metricBoxLenPointer: 0 }, this._entities = new r2(Uint32Array, this._sizeHint * s3.byteSizeHint), this._entityCountOffset = this._entities.push(0);
  }
  get id() {
    return this._id;
  }
  serialize() {
    const t8 = new Array(), e5 = [], r9 = this._entities.buffer();
    for (const i7 of this._instanceIdToVertexData.values()) e5.push(i7.serialize(t8));
    return { message: { data: e5, entities: r9 }, transferList: t8 };
  }
  vertexCount() {
    var _a;
    return ((_a = this._current.writer) == null ? void 0 : _a.vertexCount) ?? 0;
  }
  indexCount() {
    var _a;
    return ((_a = this._current.writer) == null ? void 0 : _a.indexCount) ?? 0;
  }
  vertexEnsureSize(t8) {
    this._current.writer.vertexEnsureSize(t8);
  }
  indexEnsureSize(t8) {
    this._current.writer.indexEnsureSize(t8);
  }
  vertexWrite(t8) {
    this._current.writer.writeVertex(t8);
  }
  vertexWriteRegion(t8) {
    this._current.writer.writeVertexRegion(t8);
  }
  vertexWriteF32(t8) {
    this._current.writer.writeVertexF32(t8);
  }
  recordBounds(t8, e5, r9, i7) {
  }
  indexWrite(t8) {
    this._current.writer.writeIndex(t8);
  }
  metricStart(t8) {
    this._current.metric = t8;
  }
  metricEnd() {
    const t8 = this._current.writer;
    this._current.metric.bounds.length && t8.writeMetric(this._current.metric);
  }
  metricBoxWrite(t8) {
    this._current.metric.bounds.push(t8);
  }
  entityStart(t8, e5 = t8) {
    this._entityIdIndex = this._entities.push(t8), this._entitySortKeyIndex = this._entities.writeF32(e5), this._entityRecordCountOffset = this._entities.push(0), this._didEntityStart = true;
  }
  entityRecordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  entityEnd() {
    if (!this._didEntityStart) return;
    0 === this.entityRecordCount() ? this._entities.seek(this._entityIdIndex) : this._entities.incr(this._entityCountOffset), this._didEntityStart = false;
  }
  recordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  recordStart(t8, e5, r9 = 0) {
    this._current.writer = this._getVertexWriter(t8, e5), this._current.indexStart = this._current.writer.indexCount, this._current.vertexStart = this._current.writer.vertexCount, this._current.instanceId = t8, this._current.layoutHash = e5.hash, this._current.textureKey = r9;
  }
  recordEnd(t8 = 0) {
    const r9 = this._current.vertexStart, i7 = this._current.writer.vertexCount - r9;
    if (!i7) return false;
    const n10 = this._current.indexStart, s9 = this._current.writer.indexCount - n10;
    return this._recordIndexStart = n10, this._recordIndexCount = s9, this._recordVertexStart = r9, this._recordVertexCount = i7, this._entities.incr(this._entityRecordCountOffset), t2.write(this._entities, this._current.instanceId, this._current.textureKey, n10, s9, r9, i7, t8), true;
  }
  copyLast(t8, r9) {
    const i7 = this._recordVertexStart + this._recordVertexCount;
    this._entities.incr(this._entityRecordCountOffset), t2.write(this._entities, this._current.instanceId, this._current.textureKey, this._recordIndexStart + this._recordIndexCount, this._recordIndexCount, i7, this._recordVertexCount, 0);
    const n10 = this._current.writer.indexWriter, s9 = this._current.writer.vertexWriter, o3 = this._recordIndexStart + this._recordIndexCount, c3 = this._recordVertexCount;
    for (let e5 = this._recordIndexStart; e5 !== o3; e5++) {
      const t9 = n10.getValue(e5);
      n10.push(t9 + c3);
    }
    const u3 = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, h = this._recordVertexStart * u3, _4 = (this._recordVertexStart + this._recordVertexCount) * u3;
    for (let e5 = h; e5 !== _4; e5++) {
      const t9 = s9.getValue(e5);
      s9.push(t9);
    }
    const d2 = this._current.writer.layout.position, a8 = d2.packPrecisionFactor ?? 1, x4 = d2.offset / Uint32Array.BYTES_PER_ELEMENT, y3 = t8 * a8, S2 = r9 * a8;
    for (let e5 = i7 * u3; e5 <= s9.length; e5 += u3) s9.i1616Add(e5 + x4, y3, S2);
  }
  copyLastFrom(t8, e5, r9) {
    const i7 = t8._entities.getValue(t8._entityIdIndex);
    if (i7 !== this._entities.getValue(this._entityIdIndex)) {
      const e6 = t8._entities.getValueF32(t8._entitySortKeyIndex);
      this.entityStart(i7, e6);
    }
    this.recordStart(t8._current.instanceId, t8._current.writer.layout, t8._current.textureKey);
    const n10 = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, s9 = this._current.vertexStart, o3 = t8._current.vertexStart - s9, c3 = this._current.writer.indexWriter, u3 = this._current.writer.vertexWriter, h = t8._current.writer.indexWriter, _4 = t8._current.writer.vertexWriter;
    for (let f5 = t8._current.indexStart; f5 !== h.length; f5++) {
      const t9 = h.getValue(f5);
      c3.push(t9 - o3);
    }
    for (let f5 = t8._current.vertexStart * n10; f5 !== _4.length; f5++) {
      const t9 = _4.getValue(f5);
      u3.push(t9);
    }
    const d2 = this._current.writer.layout.position, a8 = d2.packPrecisionFactor ?? 1, x4 = d2.offset / Uint32Array.BYTES_PER_ELEMENT, y3 = e5 * a8, S2 = r9 * a8;
    for (let f5 = s9 * n10; f5 <= u3.length; f5 += n10) u3.i1616Add(f5 + x4, y3, S2);
    this.recordEnd();
  }
  _getVertexWriter(t8, e5) {
    const i7 = this._instanceIdToVertexData;
    return i7.has(t8) || i7.set(t8, new r3(t8, e5, this._sizeHint)), i7.get(t8);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/urlUtils.js
function r4(r9) {
  return "url" in r9 && "urlHash" in r9 ? { ...r9, url: "" } : r9;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/AResourceProxy.js
var s5 = class {
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/ResourceProxy.js
var s6 = class extends s5 {
  constructor(e5) {
    super(), this._fetcher = e5, this._controller = new AbortController(), this._pendingIds = /* @__PURE__ */ new Set(), this._pendingRequests = [], this._resourceIdToResource = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._controller.abort();
  }
  get _abortOptions() {
    return { signal: this._controller.signal };
  }
  enqueueRequest(r9) {
    const s9 = r4(r9.resource), o3 = l(JSON.stringify(s9));
    return this._pendingIds.has(o3) || (this._pendingIds.add(o3), this._pendingRequests.push({ ...r9, resourceId: o3 })), o3;
  }
  async fetchEnqueuedResources() {
    const e5 = this._pendingRequests;
    if (this._pendingIds.clear(), this._pendingRequests = [], 0 === e5.length) return;
    const t8 = await this._fetcher.fetch(e5, this._abortOptions);
    for (let r9 = 0; r9 < t8.length; r9++) {
      const s9 = e5[r9].resourceId;
      this._resourceIdToResource.set(s9, t8[r9]);
    }
  }
  async fetchResourceImmediate(e5) {
    const t8 = await this._fetcher.fetch([e5], this._abortOptions);
    if (1 !== t8.length) throw new Error("FeaturePipelineResourceProxy: failed to fetch resources");
    return t8[0];
  }
  async fetchDictionaryResourceImmediate(e5) {
    const t8 = await this._fetcher.fetchDictionary([e5], this._abortOptions);
    if (1 !== t8.length) throw new Error("FeaturePipelineResourceProxy: failed to fetch dictionary resources");
    return t8[0];
  }
  getResource(e5) {
    return this._resourceIdToResource.get(e5);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/AComputedField.js
var s7 = class {
  destroy() {
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/CachedField.js
var r5 = class extends s7 {
  constructor(e5) {
    super(), this._field = e5;
  }
  resize(e5) {
    throw new Error("Method not implemented.");
  }
  read(e5, r9) {
    return e5.readAttribute(this._field);
  }
  readWithDefault(e5, r9) {
    return e5.readAttribute(this._field);
  }
  hasArcadeDependency(e5) {
    return false;
  }
};

// node_modules/@arcgis/core/views/2d/arcade/callExpressionWithCursor.js
function r6(r9, n10, t8) {
  var _a;
  if (null == r9) return null;
  const u3 = n10.readArcadeFeature();
  n10.contextTimeZone = (_a = t8.$view) == null ? void 0 : _a.timeZone;
  try {
    return r9.evaluate({ ...t8, $feature: u3 }, r9.services);
  } catch (a8) {
    return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", a8), null;
  }
}
function n6(e5) {
  return null == e5 || e5 === 1 / 0 || e5 === -1 / 0 || "number" == typeof e5 && isNaN(e5);
}
function t4(e5, r9, t8, u3) {
  var _a;
  if (null == e5) return null != u3 ? u3 : null;
  const a8 = r9.readArcadeFeature();
  r9.contextTimeZone = (_a = t8.$view) == null ? void 0 : _a.timeZone;
  const o3 = e5.evaluate({ ...t8, $feature: a8 }, e5.services);
  return n6(o3) ? null != u3 ? u3 : null : o3;
}

// node_modules/@arcgis/core/views/2d/layers/features/support/ComputedExpression.js
function c(e5, t8) {
  const r9 = 43758.5453 * Math.sin(12.9898 * e5 + 78.233 * t8);
  return r9 - Math.floor(r9);
}
var i5 = class _i extends s7 {
  static async create(r9, a8) {
    const s9 = await p2(r9, a8.spatialReference, a8.fields), c3 = l(r9);
    return new _i(s9, c3);
  }
  constructor(e5, t8) {
    super(), this._compiled = e5, this._cacheKey = t8;
  }
  resize(e5) {
  }
  read(e5, t8) {
    return this.hasArcadeDependency("scale") || "system" !== t8.$view.timeZone ? r6(this._compiled, e5, t8) : this._readCached(e5, t8);
  }
  readWithDefault(e5, t8, r9) {
    return this.hasArcadeDependency("scale") || "system" !== t8.$view.timeZone ? t4(this._compiled, e5, t8, r9) : this._readWithDefaultCached(e5, t8, r9);
  }
  hasArcadeDependency(e5) {
    var _a;
    return ((_a = this._compiled) == null ? void 0 : _a.references(e5)) ?? false;
  }
  _getCacheKey(e5) {
    var _a;
    if (!((_a = this._compiled) == null ? void 0 : _a.references("timeProperties"))) return this._cacheKey;
    const { currentStart: t8, currentEnd: r9 } = e5.$view.timeProperties;
    return this._cacheKey + c(t8 ?? 1, r9 ?? 1);
  }
  _readCached(e5, t8) {
    if (e5.setCache(this._getCacheKey(t8)), e5.hasCachedValue()) return e5.getCachedValue();
    const a8 = r6(this._compiled, e5, t8);
    return e5.setCachedValue(a8), a8;
  }
  _readWithDefaultCached(e5, t8, r9) {
    if (e5.setCache(this._getCacheKey(t8)), e5.hasCachedValue()) return e5.getCachedValue();
    const s9 = t4(this._compiled, e5, t8, r9);
    return e5.setCachedValue(s9), s9;
  }
};

// node_modules/@arcgis/core/layers/support/labelFormatUtils.js
function b2(e5, r9) {
  if (null == e5) return "";
  const t8 = r9.domain;
  if (t8) {
    if ("codedValue" === t8.type || "coded-value" === t8.type) {
      const r10 = e5;
      for (const e6 of t8.codedValues) if (e6.code === r10) return e6.name;
    } else if ("range" === t8.type) {
      const { max: n10, min: o3 } = f2(r9), a8 = +e5;
      if (null != o3 && null != n10 && o3 <= a8 && a8 <= n10) return t8.name;
    }
  }
  let l7 = e5;
  return Ie(r9) ? l7 = E(l7, j("short-date")) : ge(r9) && (l7 = l2(+l7)), l7 || "";
}

// node_modules/@arcgis/core/views/2d/layers/features/support/ComputedLegacyLabelExpression.js
var a4 = class _a extends s7 {
  static async create(t8, s9) {
    const l7 = p(t8);
    return new _a((e5) => l7.replaceAll(/{[^}]*}/g, (t9) => {
      const s10 = t9.slice(1, -1), a8 = e5.metadata.fieldsIndex.get(s10);
      if (null == a8) return t9;
      const l8 = e5.readAttribute(s10);
      return null == l8 ? "" : b2(l8, a8);
    }));
  }
  constructor(r9) {
    super(), this._evaluator = r9;
  }
  resize(r9) {
  }
  read(r9, e5) {
    return this._evaluator(r9);
  }
  readWithDefault(r9, e5, s9) {
    const a8 = this._evaluator(r9);
    return n6(a8) ? s9 : a8;
  }
  hasArcadeDependency(r9) {
    return false;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/NormalizedField.js
var r7 = class extends s7 {
  constructor(e5, r9) {
    super(), this._field = e5, this._normalizationInfo = r9;
  }
  resize(e5) {
    throw new Error("Method not implemented.");
  }
  read(e5, r9) {
    return this._readNormalized(e5);
  }
  readWithDefault(e5, r9) {
    return this._readNormalized(e5);
  }
  hasArcadeDependency(e5) {
    return false;
  }
  _readNormalized(e5) {
    const r9 = e5.readAttribute(this._field);
    if (null == r9) return null;
    const { normalizationField: t8, normalizationTotal: i7, normalizationType: o3 } = this._normalizationInfo, a8 = e5.readAttribute(t8);
    switch (o3 ?? "esriNormalizeByField") {
      case "esriNormalizeByField":
        return a8 ? a8 ? r9 / a8 : void 0 : null;
      case "esriNormalizeByLog":
        return Math.log(r9) * Math.LOG10E;
      case "esriNormalizeByPercentOfTotal":
        return i7 ? r9 / i7 * 100 : null;
    }
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/StaticBitSet.js
var t6 = class _t {
  static fromBuffer(e5, s9) {
    return new _t(e5, s9);
  }
  static create(e5, s9 = 4294967295) {
    const r9 = new Uint32Array(Math.ceil(e5 / 32));
    return new _t(r9, s9);
  }
  constructor(t8, e5) {
    this._mask = 0, this._buf = t8, this._mask = e5;
  }
  _getIndex(t8) {
    return Math.floor(t8 / 32);
  }
  has(t8) {
    const e5 = this._mask & t8;
    return !!(this._buf[this._getIndex(e5)] & 1 << e5 % 32);
  }
  hasRange(t8, e5) {
    let s9 = t8, r9 = e5;
    for (; s9 % 32 && s9 !== r9; ) {
      if (this.has(s9)) return true;
      s9++;
    }
    for (; r9 % 32 && s9 !== r9; ) {
      if (this.has(s9)) return true;
      r9--;
    }
    if (s9 === r9) return false;
    for (let h = s9 / 32; h !== r9 / 32; h++) {
      if (this._buf[h]) return true;
    }
    return false;
  }
  set(t8) {
    const e5 = this._mask & t8, s9 = this._getIndex(e5), r9 = 1 << e5 % 32;
    this._buf[s9] |= r9;
  }
  setRange(t8, e5) {
    let s9 = t8, r9 = e5;
    for (; s9 % 32 && s9 !== r9; ) this.set(s9++);
    for (; r9 % 32 && s9 !== r9; ) this.set(r9--);
    if (s9 !== r9) for (let h = s9 / 32; h !== r9 / 32; h++) this._buf[h] = 4294967295;
  }
  unset(t8) {
    const e5 = this._mask & t8, s9 = this._getIndex(e5), r9 = 1 << e5 % 32;
    this._buf[s9] &= 4294967295 ^ r9;
  }
  resize(t8) {
    const e5 = this._buf, s9 = new Uint32Array(Math.ceil(t8 / 32));
    s9.set(e5), this._buf = s9;
  }
  or(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] |= t8._buf[e5];
    return this;
  }
  and(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] &= t8._buf[e5];
    return this;
  }
  xor(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] ^= t8._buf[e5];
    return this;
  }
  ior(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] |= ~t8._buf[e5];
    return this;
  }
  iand(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] &= ~t8._buf[e5];
    return this;
  }
  ixor(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] ^= ~t8._buf[e5];
    return this;
  }
  any() {
    for (let t8 = 0; t8 < this._buf.length; t8++) if (this._buf[t8]) return true;
    return false;
  }
  copy(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] = t8._buf[e5];
    return this;
  }
  clone() {
    return new _t(this._buf.slice(), this._mask);
  }
  clear() {
    for (let t8 = 0; t8 < this._buf.length; t8++) this._buf[t8] = 0;
    return this;
  }
  forEachSet(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) {
      let s9 = this._buf[e5], r9 = 32 * e5;
      if (s9) for (; s9; ) {
        1 & s9 && t8(r9), s9 >>>= 1, r9++;
      }
    }
  }
  countSet() {
    let t8 = 0;
    return this.forEachSet((e5) => {
      t8++;
    }), t8;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js
var n7 = () => n.getLogger("esri.views.2d.layers.FeatureLayerView2D");
var o2 = { getAttribute: (r9, e5) => r9.readAttribute(e5) };
async function a5(e5, a8) {
  try {
    const s9 = await e2(e5, a8);
    return s9.isStandardized || n7().error(new s("sql-parse-error", "expression is not standardized", { where: e5 })), (t8, a9) => {
      const i7 = t8.readArcadeFeature();
      try {
        return s9.testFeatureCompiled(i7, o2, a9.currentUser);
      } catch (u3) {
        return n7().warn(new s("sql-runtime-error", "Encountered an error when evaluating where clause", { where: e5, error: u3 })), true;
      }
    };
  } catch (s9) {
    return n7().warn(new s("sql-runtime-error", "Encountered an error when evaluating where clause", { where: e5, error: s9 })), (r9) => true;
  }
}

// node_modules/@arcgis/core/views/2d/layers/features/support/ComputedAttributeStorage.js
var a6 = () => n.getLogger("esri.views.2d.layers.features.support.ComputedAttributeStorage");
var c2 = 4294967295;
function m2(t8, e5, s9) {
  if (!(t8.length > e5)) for (; t8.length <= e5; ) t8.push(s9);
}
var p3 = class {
  constructor(t8) {
    this._numerics = [], this._strings = [], this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [], this._dirtyBitset = this.getBitset(this.createBitset()), this.compilationOptions = t8;
  }
  createBitset() {
    const t8 = this._bitsets.length;
    return this._bitsets.push(t6.create(this._allocatedSize, n4)), t8 + 1;
  }
  async createComputedField(e5, s9 = false) {
    if (e5.expression) try {
      if (!this.compilationOptions) throw new Error("InternalError: Compilation options not defined");
      if (s9) return await a4.create(e5.expression, this.compilationOptions);
      return await i5.create(e5.expression, this.compilationOptions);
    } catch (d2) {
      const s10 = new s("featurelayer", "Failed to compile arcade expression", { error: d2, expression: e5.expression });
      return a6().error(s10), null;
    }
    if (e5.normalizationType || e5.normalizationField) return new r7(e5.field, e5);
    if (e5.field) return new r5(e5.field);
    const i7 = new s("featurelayer", "Unable to create computed field. No expression or field found", { info: e5 });
    return a6().error(i7), null;
  }
  async createWhereClause(t8) {
    return t8 ? a5(t8, this.compilationOptions.fields) : null;
  }
  getBitset(t8) {
    return this._bitsets[t8 - 1];
  }
  getComputedNumeric(t8, e5) {
    return this.getComputedNumericAtIndex(t8 & n4, 0);
  }
  setComputedNumeric(t8, e5, s9) {
    return this.setComputedNumericAtIndex(t8 & n4, s9, 0);
  }
  getComputedString(t8, e5) {
    return this.getComputedStringAtIndex(t8 & n4, 0);
  }
  setComputedString(t8, e5, s9) {
    return this.setComputedStringAtIndex(t8 & n4, 0, s9);
  }
  getComputedNumericAtIndex(t8, e5) {
    const s9 = t8 & n4;
    return this._ensureNumeric(e5, s9), this._numerics[e5][s9];
  }
  setComputedNumericAtIndex(t8, e5, s9) {
    const r9 = t8 & n4;
    this._ensureNumeric(e5, r9), this._numerics[e5][r9] = s9;
  }
  getPackedChunkId(t8) {
    const e5 = t8 & n4;
    return this._ensureInstanceId(e5), this._instanceIds[e5];
  }
  setPackedChunkId(t8, e5) {
    const s9 = t8 & n4;
    this._ensureInstanceId(s9), this._instanceIds[s9] = e5;
  }
  getComputedStringAtIndex(t8, e5) {
    const s9 = t8 & n4;
    return this._ensureString(e5, s9), this._strings[e5][s9];
  }
  setComputedStringAtIndex(t8, e5, s9) {
    const r9 = t8 & n4;
    this._ensureString(e5, r9), this._strings[e5][r9] = s9;
  }
  getXMin(t8) {
    return this._bounds[4 * (t8 & n4)];
  }
  getYMin(t8) {
    return this._bounds[4 * (t8 & n4) + 1];
  }
  getXMax(t8) {
    return this._bounds[4 * (t8 & n4) + 2];
  }
  getYMax(t8) {
    return this._bounds[4 * (t8 & n4) + 3];
  }
  setBounds(t8, e5, s9 = false) {
    const r9 = t8 & n4;
    if (!s9 && !this._dirtyBitset.has(t8)) return this._bounds[4 * r9] !== c2;
    this._dirtyBitset.unset(t8);
    const n10 = e5.readGeometryWorldSpace();
    if (m2(this._bounds, 4 * r9 + 4, 0), !n10 || !n10.coords.length) return this._bounds[4 * r9] = c2, this._bounds[4 * r9 + 1] = c2, this._bounds[4 * r9 + 2] = c2, this._bounds[4 * r9 + 3] = c2, false;
    let o3 = 1 / 0, u3 = 1 / 0, d2 = -1 / 0, h = -1 / 0;
    return n10.forEachVertex((t9, e6) => {
      o3 = Math.min(o3, t9), u3 = Math.min(u3, e6), d2 = Math.max(d2, t9), h = Math.max(h, e6);
    }), this._bounds[4 * r9] = o3, this._bounds[4 * r9 + 1] = u3, this._bounds[4 * r9 + 2] = d2, this._bounds[4 * r9 + 3] = h, true;
  }
  getBounds(t8, e5) {
    const i7 = this.getXMin(e5), r9 = this.getYMin(e5), n10 = this.getXMax(e5), o3 = this.getYMax(e5);
    return D(t8, i7, r9, n10, o3), i7 !== c2;
  }
  _ensureNumeric(t8, e5) {
    this._numerics[t8] || (this._numerics[t8] = []);
    m2(this._numerics[t8], e5, 0);
  }
  _ensureInstanceId(t8) {
    m2(this._instanceIds, t8, 0);
  }
  _ensureString(t8, e5) {
    this._strings[t8] || (this._strings[t8] = []);
    m2(this._strings[t8], e5, null);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureMetadata.js
var i6 = class _i {
  static minimal(e5, n10, l7 = []) {
    return new _i({ geometryType: e5, fieldsIndex: new Z(l7).toJSON(), objectIdField: n10, subtypes: null, subtypeField: null, types: null, globalIdField: null, spatialReference: null, outSpatialReference: null, timeInfo: null, timeReferenceUnknownClient: null, dateFieldsTimeZone: null, typeIdField: null });
  }
  static createFeature(e5) {
    return new _i(e5);
  }
  constructor(i7) {
    this._options = i7, this._fieldsIndex = Z.fromJSON(i7.fieldsIndex), i7.spatialReference && (this._spatialReference = g.fromJSON(i7.spatialReference)), i7.outSpatialReference && (this._outSpatialReference = g.fromJSON(i7.outSpatialReference)), this._arcadeSchema = { fields: this.fieldsIndex.fields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, objectIdField: this.objectIdField, globalIdField: this._options.globalIdField, spatialReference: this._spatialReference, timeInfo: this._options.timeInfo, typeIdField: this._options.typeIdField ?? void 0, types: this._options.types ?? void 0, subtypeField: this._options.subtypeField, subtypes: this._options.subtypes ?? void 0, datesInUnknownTimezone: this._options.timeReferenceUnknownClient ?? void 0, dateFieldsTimeZone: this._options.dateFieldsTimeZone ?? void 0 };
  }
  get fieldsIndex() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return "esriGeometryMultiPatch" === this._options.geometryType ? "esriGeometryPolygon" : this._options.geometryType;
  }
  get serviceGeometryType() {
    return this._options.geometryType;
  }
  get subtypeField() {
    return this._options.subtypeField;
  }
  get timeInfo() {
    return this._options.timeInfo;
  }
  get objectIdField() {
    return this._options.objectIdField;
  }
  get globalIdField() {
    return this._options.globalIdField;
  }
  get arcadeSchema() {
    return this._arcadeSchema;
  }
  get spatialReference() {
    return this._spatialReference;
  }
  get outSpatialReference() {
    return this._outSpatialReference;
  }
  get timeReferenceUnknownClient() {
    return this._options.timeReferenceUnknownClient;
  }
  weakCloneWithAdditionalFields(e5) {
    return new _i({ fieldsIndex: { fields: [...this._fieldsIndex.fields, ...e5], timeZoneByFieldName: null }, geometryType: this.geometryType, globalIdField: this.globalIdField, objectIdField: this.objectIdField, spatialReference: this.spatialReference, outSpatialReference: this.outSpatialReference, subtypeField: this.subtypeField, subtypes: this._options.subtypes, timeInfo: this.timeInfo, timeReferenceUnknownClient: this.timeReferenceUnknownClient, dateFieldsTimeZone: this._options.dateFieldsTimeZone, typeIdField: this._options.typeIdField, types: this._options.types });
  }
};
var n8 = class _n extends i6 {
  static createGraphics(e5) {
    return new _n({ fieldsIndex: new Z().toJSON(), objectIdField: "uid", geometryType: null, spatialReference: e5, outSpatialReference: e5, globalIdField: null, subtypeField: null, subtypes: null, timeInfo: null, typeIdField: null, types: null, timeReferenceUnknownClient: null, dateFieldsTimeZone: null });
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js
var n9 = (n10, l7) => n10 && ((...n11) => l7.warn("DEBUG:", ...n11)) || (() => null);
var l6 = false;

// node_modules/@arcgis/core/views/2d/layers/features/support/DisplayIdGenerator.js
var t7 = class {
  constructor(e5) {
    this.data = e5, this._referenceCount = 0;
  }
  increment() {
    this._referenceCount += 1;
  }
  decrement() {
    this._referenceCount -= 1;
  }
  empty() {
    return 0 === this._referenceCount;
  }
};
var s8 = class {
  constructor() {
    this._freeIdsGenerationA = [], this._freeIdsGenerationB = [], this._idCounter = 1, this._freeIds = this._freeIdsGenerationA, this._objectIdToDisplayId = /* @__PURE__ */ new Map();
  }
  createIdForObjectId(s9) {
    let r9 = this._objectIdToDisplayId.get(s9);
    return r9 ? r9.increment() : (r9 = new t7(s4(this._getFreeId(), false)), r9.increment(), this._objectIdToDisplayId.set(s9, r9)), r9.data;
  }
  releaseIdForObjectId(e5) {
    const t8 = this._objectIdToDisplayId.get(e5);
    t8 && (t8.decrement(), t8.empty() && (this._objectIdToDisplayId.delete(e5), this._freeIds.push(t8.data)));
  }
  getDisplayIdForObjectId(e5) {
    const t8 = this._objectIdToDisplayId.get(e5);
    return null != t8 ? t8.data : null;
  }
  releaseAll() {
    for (const e5 of this._objectIdToDisplayId.values()) this._freeIds.push(e5.data);
    this._objectIdToDisplayId.clear();
  }
  incrementGeneration() {
    this._freeIds = this._freeIds === this._freeIdsGenerationA ? this._freeIdsGenerationB : this._freeIdsGenerationA;
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetCache.js
var a7 = class {
  constructor(a8) {
    this._valid = t6.create(a8), this._data = new Array(a8);
  }
  has(t8) {
    return this._valid.has(t8);
  }
  set(t8, a8) {
    this._valid.set(t8), this._data[t8] = a8;
  }
  get(t8) {
    return this._data[t8];
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReader.js
var _2 = has("featurelayer-simplify-thresholds") ?? [0.5, 0.5, 0.5, 0.5];
var b3 = _2[0];
var x2 = _2[1];
var D2 = _2[2];
var T = _2[3];
var F = has("featurelayer-simplify-payload-size-factors") ?? [1, 2, 4];
var A = F[0];
var S = F[1];
var I2 = F[2];
var B2 = has("featurelayer-simplify-mobile-factor") ?? 2;
var j2 = has("esri-mobile");
var G = 4294967295;
function C(e5, t8, r9) {
  if (!(e5.length > t8)) for (; e5.length <= t8; ) e5.push(r9);
}
var M = class {
  constructor(e5) {
    this.metadata = e5, this.type = "FeatureSetReader", this._overrides = null, this._joined = [], this._objectIdToIndex = null, this._boundsBuffer = [], this._caches = /* @__PURE__ */ new Map(), this.arcadeDeclaredClass = "esri.arcade.Feature", this._contextTimeZone = null;
  }
  destroy() {
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  getAreaSimplificationThreshold(e5, t8) {
    let r9 = 1;
    const s9 = j2 ? B2 : 1;
    t8 > 4e6 ? r9 = I2 * s9 : t8 > 1e6 ? r9 = S * s9 : t8 > 5e5 ? r9 = A * s9 : t8 > 1e5 && (r9 = s9);
    let i7 = 0;
    return e5 > 4e3 ? i7 = T * r9 : e5 > 2e3 ? i7 = D2 * r9 : e5 > 100 ? i7 = x2 : e5 > 15 && (i7 = b3), i7;
  }
  getBounds(e5) {
    if (C(this._boundsBuffer, 4 * this.getIndex() + 4, 0), this.getBoundsXMin() === G) return false;
    if (0 === this.getBoundsXMin()) {
      const t9 = this.readGeometryWorldSpace();
      if (!t9) return this.setBoundsXMin(G), false;
      let r10 = 1 / 0, s10 = 1 / 0, a9 = -1 / 0, o3 = -1 / 0;
      return t9.forEachVertex((e6, t10) => {
        r10 = Math.min(r10, e6), s10 = Math.min(s10, t10), a9 = Math.max(a9, e6), o3 = Math.max(o3, t10);
      }), this.setBoundsXMin(r10), this.setBoundsYMin(s10), this.setBoundsXMax(a9), this.setBoundsYMax(o3), D(e5, r10, s10, a9, o3), true;
    }
    const t8 = this.getBoundsXMin(), r9 = this.getBoundsYMin(), s9 = this.getBoundsXMax(), a8 = this.getBoundsYMax();
    return D(e5, t8, r9, s9, a8), true;
  }
  getBoundsXMin() {
    return this._boundsBuffer[4 * this.getIndex()];
  }
  setBoundsXMin(e5) {
    this._boundsBuffer[4 * this.getIndex()] = e5;
  }
  getBoundsYMin() {
    return this._boundsBuffer[4 * this.getIndex() + 1];
  }
  setBoundsYMin(e5) {
    this._boundsBuffer[4 * this.getIndex() + 1] = e5;
  }
  getBoundsXMax() {
    return this._boundsBuffer[4 * this.getIndex() + 2];
  }
  setBoundsXMax(e5) {
    this._boundsBuffer[4 * this.getIndex() + 2] = e5;
  }
  getBoundsYMax() {
    return this._boundsBuffer[4 * this.getIndex() + 3];
  }
  setBoundsYMax(e5) {
    this._boundsBuffer[4 * this.getIndex() + 3] = e5;
  }
  readAttributeAsTimestamp(e5) {
    const t8 = this.readAttribute(e5);
    return "string" == typeof t8 ? new Date(t8).getTime() : "number" == typeof t8 || null == t8 ? t8 : null;
  }
  readAttribute(e5, t8 = false) {
    const r9 = this._readAttribute(e5, t8);
    if (void 0 !== r9) return r9;
    for (const s9 of this._joined) {
      s9.setIndex(this.getIndex());
      const r10 = s9._readAttribute(e5, t8);
      if (void 0 !== r10) return r10;
    }
  }
  readAttributes() {
    const e5 = this._readAttributes();
    for (const t8 of this._joined) {
      t8.setIndex(this.getIndex());
      const r9 = t8._readAttributes();
      for (const t9 of Object.keys(r9)) e5[t9] = r9[t9];
    }
    return e5;
  }
  joinAttributes(e5) {
    this._joined.push(e5);
  }
  registerOverrides(e5) {
    this._overrides = e5;
  }
  withoutOverrides() {
    const e5 = this.copy();
    return e5._overrides = null, e5;
  }
  readOptimizedFeatureWorldSpace() {
    const e5 = this.readGeometryWorldSpace(), t8 = this.readAttributes(), r9 = this.readCentroidWorldSpace();
    return new s2(e5, t8, r9, this.getObjectId(), this.getDisplayId());
  }
  readLegacyFeatureForDisplay() {
    const e5 = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e5 && { x: e5.coords[0], y: e5.coords[1] }) ?? null };
  }
  readLegacyFeatureWorldSpace() {
    const e5 = this.readCentroidWorldSpace();
    return { attributes: this.readAttributes(), geometry: this._readLegacyGeometryWorldSpace(), centroid: (e5 && { x: e5.coords[0], y: e5.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e5 = this.readGeometryForDisplay();
    return ut(e5, this.geometryType, false, false);
  }
  readXForDisplay() {
    return this._readX();
  }
  readYForDisplay() {
    return this._readY();
  }
  readXWorldSpace() {
    const e5 = this._readX(), t8 = this.getInTransform();
    return null == t8 ? e5 : e5 * t8.scale[0] + t8.translate[0];
  }
  readYWorldSpace() {
    const e5 = this._readY(), t8 = this.getInTransform();
    return null == t8 ? e5 : t8.translate[1] - e5 * t8.scale[1];
  }
  readGeometryForDisplay() {
    const e5 = this._readGeometryDeltaDecoded(true);
    if (!e5) {
      const e6 = this._createDeltaQuantizedGeometryFromServerCentroid();
      return e6 ? e6.deltaDecode() : null;
    }
    return e5;
  }
  readGeometryForDisplayTransformed(e5) {
    let t8 = this.readGeometryForDisplay();
    if (t8 && (t8 = Ft(t8, e5, this.metadata.geometryType, this.hasZ, this.hasM)), !t8) {
      const t9 = this.readCentroidForDisplay();
      if (!t9) return null;
      const r9 = i(e5, t9.coords[0]), s9 = a2(e5, t9.coords[1]);
      return this._createDeltaQuantizedExtrudedGeometry(r9, s9).deltaDecode();
    }
    return t8;
  }
  readGeometryWorldSpace() {
    let e5 = this._readGeometry();
    if (e5 || (e5 = this._createDeltaQuantizedGeometryFromServerCentroid()), !e5) return null;
    const t8 = e5.clone(), r9 = this.getInTransform();
    return null != r9 && Mt(t8, t8, this.hasZ, this.hasM, r9), t8;
  }
  readCentroidForDisplay() {
    const e5 = this.readGeometryForDisplay();
    return e5 ? this._computeDisplayCentroid(e5) : this._readServerCentroid();
  }
  readCentroidWorldSpace() {
    const e5 = this.readGeometryForDisplay(), t8 = e5 ? this._computeDisplayCentroid(e5) : this._readServerCentroid();
    if (!t8) return null;
    const r9 = t8.clone(), s9 = this.getInTransform();
    return null != s9 && Mt(r9, r9, this.hasZ, this.hasM, s9), r9;
  }
  setCache(e5) {
    let t8 = this._caches.get(e5);
    null == t8 && (t8 = new a7(this.getSize()), this._caches.set(e5, t8)), this._activeCache = t8;
  }
  setCachedValue(e5) {
    this._activeCache.set(this.getIndex(), e5);
  }
  hasCachedValue() {
    return this._activeCache.has(this.getIndex());
  }
  getCachedValue() {
    return this._activeCache.get(this.getIndex());
  }
  _readGeometryDeltaDecoded(e5) {
    const t8 = this._readGeometry(e5);
    return "esriGeometryPoint" !== this.geometryType && t8 && this.getInTransform() ? t8.deltaDecode() : t8;
  }
  get contextTimeZone() {
    return this._contextTimeZone;
  }
  set contextTimeZone(e5) {
    this._contextTimeZone = e5;
  }
  readArcadeFeature() {
    return this;
  }
  hasField(e5) {
    return this.fields.has(e5) || this._joined.some((t8) => t8.hasField(e5));
  }
  geometry() {
    const e5 = this.readGeometryWorldSpace(), t8 = ut(e5, this.geometryType, this.hasZ, this.hasM), r9 = f(t8);
    if (r9) {
      if (!this.metadata.outSpatialReference) throw new Error("InternalError: Expected spatial reference to be defined");
      r9.spatialReference = this.metadata.outSpatialReference;
    }
    return r9;
  }
  autocastArcadeDate(t8, r9) {
    return r9 && r9 instanceof Date ? this.isUnknownDateTimeField(t8) ? m.unknownDateJSToArcadeDate(r9) : m.dateJSAndZoneToArcadeDate(r9, this.contextTimeZone ?? e) : r9;
  }
  isUnknownDateTimeField(e5) {
    return this.metadata.fieldsIndex.getTimeZone(e5) === t;
  }
  field(s9) {
    let i7 = this.fields.get(s9);
    if (i7) switch (i7.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return i2.fromReader(this.readAttribute(s9, false));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return r.fromReader(this.readAttribute(s9, false));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return m.fromReaderAsTimeStampOffset(this.readAttribute(s9, false));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(s9, this.readAttribute(s9, true));
      default:
        return this.readAttribute(s9, false);
    }
    for (const a8 of this._joined) if (a8.setIndex(this.getIndex()), i7 = a8.fields.get(s9), i7) switch (i7.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return i2.fromReader(a8._readAttribute(s9, false));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return r.fromReader(a8._readAttribute(s9, false));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return m.fromReaderAsTimeStampOffset(a8._readAttribute(s9, false));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(s9, a8._readAttribute(s9, true));
      default:
        return this.readAttribute(s9, false);
    }
    throw new Error(`Field ${s9} does not exist`);
  }
  setField(e5, t8) {
    throw new Error("Unable to update feature attribute values, feature is readonly");
  }
  keys() {
    return this.fields.fields.map((e5) => e5.name);
  }
  castToText(e5 = false) {
    if (!e5) return JSON.stringify(this.readLegacyFeatureForDisplay());
    const t8 = this.readLegacyFeatureForDisplay();
    if (!t8) return JSON.stringify(null);
    const r9 = { geometry: t8.geometry, attributes: { ...t8.attributes ?? {} } };
    for (const s9 in r9.attributes) {
      const e6 = r9.attributes[s9];
      e6 instanceof Date && (r9.attributes[s9] = e6.getTime());
    }
    return JSON.stringify(r9);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this.metadata.arcadeSchema;
  }
  castAsJson(e5 = null) {
    var _a;
    return { attributes: this._readAttributes(), geometry: true === (e5 == null ? void 0 : e5.keepGeometryType) ? this.geometry() : ((_a = this.geometry()) == null ? void 0 : _a.toJSON()) ?? null };
  }
  castAsJsonAsync(e5 = null, t8 = null) {
    return Promise.resolve(this.castAsJson(t8));
  }
  _getExists() {
    if (this._overrides) {
      const e5 = this.getObjectId();
      return !this._overrides.hasOverride(e5);
    }
    return true;
  }
  _computeDisplayCentroid(e5) {
    if (null == this.getInTransform()) return n2(new e3(), e5, this.hasM, this.hasZ);
    const t8 = a3.fromOptimized(e5, this.geometryType);
    t8.yFactor *= -1;
    const r9 = l4(t8);
    return r9 ? (r9[1] *= -1, new e3([], r9)) : null;
  }
  copyInto(e5) {
    e5._joined = this._joined, e5._overrides = this._overrides, e5._objectIdToIndex = this._objectIdToIndex, e5._boundsBuffer = this._boundsBuffer, e5._activeCache = this._activeCache, e5._caches = this._caches, e5._contextTimeZone = this._contextTimeZone;
  }
  _readLegacyGeometryWorldSpace() {
    const e5 = this.readGeometryWorldSpace();
    return ut(e5, this.geometryType, false, false);
  }
  _createDeltaQuantizedGeometryFromServerCentroid() {
    const e5 = this._readServerCentroid();
    if (!e5) return null;
    const [t8, r9] = e5.coords;
    return this._createDeltaQuantizedExtrudedGeometry(t8, r9);
  }
  _createDeltaQuantizedExtrudedGeometry(e5, t8) {
    return "esriGeometryPolyline" === this.geometryType ? this._createDeltaQuantizedExtrudedLine(e5, t8) : this._createDeltaQuantizedExtrudedQuad(e5, t8);
  }
  _createDeltaQuantizedExtrudedQuad(e5, t8) {
    return new e3([5], [e5 - 1, t8, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  _createDeltaQuantizedExtrudedLine(e5, t8) {
    return new e3([2], [e5 - 1, t8 + 1, 1, -1]);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderJSON.js
var u2 = class _u extends M {
  static fromFeatures(t8, r9) {
    const { objectIdField: s9, geometryType: i7 } = r9, n10 = nt([], t8, i7, false, false, s9);
    for (let e5 = 0; e5 < n10.length; e5++) n10[e5].displayId = t8[e5].displayId;
    return _u.fromOptimizedFeatures(n10, r9);
  }
  static fromFeatureSet(e5, r9) {
    const s9 = ft(e5, r9.objectIdField);
    return _u.fromOptimizedFeatureSet(s9, r9);
  }
  static fromOptimizedFeatureSet(e5, t8) {
    const r9 = _u.fromOptimizedFeatures(e5.features, t8);
    return r9._exceededTransferLimit = e5.exceededTransferLimit, r9._transform = e5.transform, r9._fieldsIndex = new Z(e5.fields), r9;
  }
  static fromOptimizedFeatures(e5, t8, r9) {
    const s9 = new _u(e5, t8);
    return s9._fieldsIndex = t8.fieldsIndex, s9._transform = r9, s9;
  }
  static empty(e5) {
    return new _u([], e5);
  }
  constructor(e5, t8) {
    super(t8), this._exceededTransferLimit = false, this._featureIndex = -1, this._fieldsIndex = null, this._geometryType = t8.geometryType, this._features = e5;
  }
  get fields() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  get usedMemory() {
    return this._current.usedMemory;
  }
  getSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getInTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let e5 = "";
    for (const t8 in this._current.attributes) e5 += this._current.attributes[t8];
    return e5;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e5) {
    this._featureIndex = e5;
  }
  getObjectId() {
    var _a;
    return (_a = this._current) == null ? void 0 : _a.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(e5) {
    this._current.displayId = e5;
  }
  copy() {
    const e5 = new _u(this._features, this.metadata);
    return this.copyInto(e5), e5;
  }
  next() {
    for (; ++this._featureIndex < this._features.length && !this._getExists(); ) ;
    return this._featureIndex < this._features.length;
  }
  readGeometryArea() {
    return o(this._current) ? Gt(this._current.geometry, 2) : 0;
  }
  _readX() {
    return o(this._current) ? this._current.geometry.coords[0] : 0;
  }
  _readY() {
    return o(this._current) ? this._current.geometry.coords[1] : 0;
  }
  _readGeometry() {
    return o(this._current) ? this._current.geometry ?? null : null;
  }
  _readServerCentroid() {
    return this._current.centroid;
  }
  _readAttribute(e5, t8) {
    if (!this._fieldsIndex) {
      const t9 = this._current.attributes[e5];
      if (void 0 !== t9) return t9;
      const r10 = e5.toLowerCase();
      for (const e6 in this._current.attributes) if (e6.toLowerCase() === r10) return this._current.attributes[e6];
      return;
    }
    const r9 = this._fieldsIndex.get(e5);
    if (!r9) return;
    const s9 = this._current.attributes[r9.name];
    return null == s9 ? s9 : t8 && this.fields.isDateField(e5) ? new Date(s9) : s9;
  }
  _readAttributes() {
    return this._current.attributes;
  }
  copyInto(e5) {
    super.copyInto(e5), e5._featureIndex = this._featureIndex, e5._transform = this._transform, e5._fieldsIndex = this._fieldsIndex;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/FeatureStoreQueryAdapter.js
var r8 = class {
  getObjectId(e5) {
    return e5.getObjectId();
  }
  getAttributes(e5) {
    return e5.readAttributes();
  }
  getAttribute(e5, t8) {
    return e5.readAttribute(t8);
  }
  getAttributeAsTimestamp(e5, t8) {
    return e5.readAttributeAsTimestamp(t8);
  }
  cloneWithGeometry(r9, a8) {
    const i7 = r9.readAttributes(), d2 = new s2(a8, i7, null, r9.getObjectId(), r9.getDisplayId()), s9 = u2.fromOptimizedFeatures([d2], r9.metadata);
    return s9.setIndex(0), s9;
  }
  getGeometry(e5) {
    return e5.readGeometryWorldSpace();
  }
  getCentroid(e5, t8) {
    return e5.readCentroidForDisplay();
  }
};
r8.Shared = new r8();

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureFilterEvaluator.js
var m3 = 1;
var d = 2;
var p4 = class _p {
  constructor(t8) {
    this._geometryBounds = u(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = t8;
  }
  static async create(t8) {
    const e5 = new _p(t8);
    return await e5.update(t8.filterJSON, t8.spatialReference), e5;
  }
  get hash() {
    return this._hash;
  }
  check(t8, e5) {
    return this._applyFilter(t8, e5);
  }
  invalidate() {
    this._idToVisibility.forEach((t8, e5) => {
      this._idToVisibility.set(e5, 0);
    });
  }
  setKnownIds(t8) {
    for (const e5 of t8) this._idToVisibility.set(e5, m3);
  }
  setTrue(t8) {
    const e5 = [], i7 = [], s9 = new Set(t8);
    return this._idToVisibility.forEach((t9, r9) => {
      const o3 = !!(this._idToVisibility.get(r9) & m3), a8 = s9.has(r9);
      !o3 && a8 ? e5.push(r9) : o3 && !a8 && i7.push(r9), this._idToVisibility.set(r9, a8 ? m3 | d : 0);
    }), { show: e5, hide: i7 };
  }
  createQuery() {
    const { geometry: t8, spatialRel: e5, where: i7, timeExtent: s9, objectIds: r9 } = this;
    return b.fromJSON({ geometry: t8, spatialRel: e5, where: i7, timeExtent: s9, objectIds: r9 });
  }
  async update(t8, e5) {
    this._hash = JSON.stringify(t8);
    const i7 = await B(t8, null, e5);
    await Promise.all([this._setGeometryFilter(i7), this._setIdFilter(i7), this._setAttributeFilter(i7), this._setTimeFilter(i7)]);
  }
  async _setAttributeFilter(t8) {
    if (!(t8 == null ? void 0 : t8.where)) return this._clause = null, void (this.where = null);
    this._clause = await a5(t8.where, this._serviceInfo.fieldsIndex), this.where = t8.where;
  }
  _setIdFilter(t8) {
    this._idsToShow = (t8 == null ? void 0 : t8.objectIds) && new Set(t8.objectIds), this._idsToHide = (t8 == null ? void 0 : t8.hiddenIds) && new Set(t8.hiddenIds), this.objectIds = t8 == null ? void 0 : t8.objectIds;
  }
  async _setGeometryFilter(t8) {
    if (!(t8 == null ? void 0 : t8.geometry)) return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const e5 = t8.geometry, i7 = t8.spatialRel ?? "esriSpatialRelIntersects", r9 = await I(i7, e5, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
    a(this._geometryBounds, e5), this._spatialQueryOperator = r9, this.geometry = e5, this.spatialRel = i7;
  }
  _setTimeFilter(i7) {
    if (this.timeExtent = this._timeOperator = null, i7 == null ? void 0 : i7.timeExtent) if (this._serviceInfo.timeInfo) this.timeExtent = i7.timeExtent, this._timeOperator = l3(this._serviceInfo.timeInfo, i7.timeExtent, r8.Shared);
    else {
      const s9 = new s("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", i7.timeExtent);
      n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s9);
    }
  }
  _applyFilter(t8, e5) {
    return this._filterByGeometry(t8) && this._filterById(t8) && this._filterByTime(t8) && this._filterByExpression(t8, e5);
  }
  _filterByExpression(t8, e5) {
    return !this.where || this._clause(t8, e5);
  }
  _filterById(t8) {
    var _a, _b;
    return (!((_a = this._idsToHide) == null ? void 0 : _a.size) || !this._idsToHide.has(t8.getObjectId())) && (!((_b = this._idsToShow) == null ? void 0 : _b.size) || this._idsToShow.has(t8.getObjectId()));
  }
  _filterByGeometry(t8) {
    if (!this.geometry) return true;
    const e5 = t8.readGeometryWorldSpace();
    return !!e5 && this._spatialQueryOperator(e5);
  }
  _filterByTime(t8) {
    return null == this._timeOperator || this._timeOperator(t8);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/AttributeStore.js
function _3(t8, e5) {
  if (!t8 || !e5) return t8;
  switch (e5) {
    case "radius":
    case "distance":
      return 2 * t8;
    case "diameter":
    case "width":
      return t8;
    case "area":
      return Math.sqrt(t8);
  }
  return t8;
}
var y2 = () => n.getLogger("esri.views.layers.2d.features.support.AttributeStore");
var m4 = n9(l6, y2());
var f4 = { sharedArrayBuffer: has("esri-shared-array-buffer"), atomics: has("esri-atomics") };
var b4 = class {
  constructor(t8, e5, i7) {
    this.size = 0, this.texelSize = 4, this.dirtyStart = 0, this.dirtyEnd = 0;
    const { pixelType: s9, layout: r9, textureOnly: a8 } = e5;
    this.textureOnly = a8 || false, this.pixelType = s9, this.layout = r9, this._resetRange(), this.size = t8, this.isLocal = i7, a8 || (this.data = this._initData(s9, t8));
  }
  get buffer() {
    var _a;
    return (_a = this.data) == null ? void 0 : _a.buffer;
  }
  unsetComponentAllTexels(t8, e5) {
    const i7 = this.data;
    for (let s9 = 0; s9 < this.size * this.size; s9++) i7[s9 * this.texelSize + t8] &= ~e5;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(t8, e5) {
    const i7 = this.data;
    for (let s9 = 0; s9 < this.size * this.size; s9++) i7[s9 * this.texelSize + t8] |= 255 & e5;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(t8, e5, i7) {
    const s9 = this.data;
    for (const r9 of i7) s9[r9 * this.texelSize + t8] |= e5, this.dirtyStart = Math.min(this.dirtyStart, r9), this.dirtyEnd = Math.max(this.dirtyEnd, r9);
  }
  setComponentTexel(t8, e5, i7) {
    this.data[i7 * this.texelSize + t8] |= e5, this.dirtyStart = Math.min(this.dirtyStart, i7), this.dirtyEnd = Math.max(this.dirtyEnd, i7);
  }
  unsetComponentTexel(t8, e5, i7) {
    this.data[i7 * this.texelSize + t8] &= ~e5, this.dirtyStart = Math.min(this.dirtyStart, i7), this.dirtyEnd = Math.max(this.dirtyEnd, i7);
  }
  getData(t8, e5) {
    const i7 = f3(t8);
    return this.data[i7 * this.texelSize + e5];
  }
  setData(t8, e5, i7) {
    const s9 = f3(t8), r9 = 1 << e5;
    this.layout & r9 ? null != this.data && (this.data[s9 * this.texelSize + e5] = i7, this.dirtyStart = Math.min(this.dirtyStart, s9), this.dirtyEnd = Math.max(this.dirtyEnd, s9)) : y2().error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  expand(t8) {
    if (this.size = t8, !this.textureOnly) {
      const e5 = this._initData(this.pixelType, t8), i7 = this.data;
      e5.set(i7), this.data = e5;
    }
  }
  toMessage() {
    const t8 = this.dirtyStart, e5 = this.dirtyEnd, i7 = this.texelSize;
    if (t8 > e5) return null;
    this._resetRange();
    const s9 = !this.isLocal, r9 = this.pixelType, a8 = this.layout, n10 = this.data;
    return { start: t8, end: e5, data: s9 && n10.slice(t8 * i7, (e5 + 1) * i7) || null, pixelType: r9, layout: a8 };
  }
  _initData(t8, e5) {
    const i7 = ArrayBuffer, s9 = i3(t8), r9 = new s9(new i7(e5 * e5 * 4 * s9.BYTES_PER_ELEMENT));
    for (let a8 = 0; a8 < r9.length; a8 += 4) r9[a8 + 1] = 255;
    return r9;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
};
var x3 = class {
  constructor(t8) {
    this._client = t8, this._filters = [], this._blocks = new Array(), this._attributeComputeInfo = null, this._abortController = new AbortController(), this._size = yi, this._idsToHighlight = /* @__PURE__ */ new Map(), this._arcadeDependencies = /* @__PURE__ */ new Set(), this._initialized = false, this.version = 0, this._idGenerator = new s8(), this._epoch = 1;
  }
  destroy() {
    this._abortController.abort();
  }
  _initialize() {
    if (null != this._blockDescriptors) return;
    const t8 = U.FLOAT;
    m4(`Creating AttributeStore ${f4.sharedArrayBuffer ? "with" : "without"} shared memory`), this._blockDescriptors = [{ pixelType: U.UNSIGNED_BYTE, layout: 1 }, { pixelType: U.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: U.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: t8, layout: 15 }, { pixelType: t8, layout: 15 }, { pixelType: t8, layout: 15 }, { pixelType: t8, layout: 15 }, { pixelType: U.FLOAT, layout: 15 }], this._blocks = this._blockDescriptors.map(() => null);
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  createDisplayIdForObjectId(t8) {
    return this._idGenerator.createIdForObjectId(t8);
  }
  releaseDisplayIdForObjectId(t8) {
    return this._idGenerator.releaseIdForObjectId(t8);
  }
  getDisplayIdForObjectId(t8) {
    return this._idGenerator.getDisplayIdForObjectId(t8);
  }
  incrementDisplayIdGeneration() {
    this._idGenerator.incrementGeneration();
  }
  hasArcadeDependency(t8) {
    return this._arcadeDependencies.has(t8);
  }
  releaseAllIds() {
    this._idGenerator.releaseAll();
  }
  async update(t8, e5, s9, r9 = 0) {
    const a8 = y(this._schema, t8);
    if (this.version = r9, a8 && (has("esri-2d-update-debug") && console.debug(`Version[${r9}] AttributeStore.update`, { changed: a8 }), this._schema = t8, this._attributeComputeInfo = null, this._initialize(), null != t8)) if (s9 && (this._filters = await Promise.all(t8.filters.map((t9) => t9 ? p4.create({ geometryType: s9.geometryType, hasM: false, hasZ: false, timeInfo: s9.timeInfo, fieldsIndex: s9.fieldsIndex, spatialReference: s9.outSpatialReference, filterJSON: t9 }) : null))), "multi" !== t8.type) this._attributeComputeInfo = { type: "feature", map: /* @__PURE__ */ new Map() }, await Promise.all(t8.bindings.map(async (t9) => {
      const i7 = await this._bind(e5, t9);
      this._updateReferences(i7);
    }));
    else {
      this._attributeComputeInfo = { type: "multi", keyField: t8.keyField, map: /* @__PURE__ */ new Map() };
      for (const i7 in t8.bindings) {
        const s10 = t8.bindings[i7];
        await Promise.all(s10.map(async (t9) => {
          const s11 = await this._bind(e5, t9, parseInt(i7, 10));
          this._updateReferences(s11);
        }));
      }
    }
  }
  setHighlight(t8, e5) {
    const i7 = this._getBlock(0);
    i7.unsetComponentAllTexels(0, (1 << K) - 1);
    for (const { displayId: s9, highlightFlags: r9 } of t8) {
      if (null == s9) continue;
      const t9 = f3(s9);
      i7.setComponent(0, r9, [t9]);
    }
    this._idsToHighlight.clear();
    for (const { objectId: s9, highlightFlags: r9 } of t8) this._idsToHighlight.set(s9, r9);
    for (const { objectId: s9, highlightFlags: r9 } of e5) this._idsToHighlight.set(s9, r9);
  }
  setData(t8, e5, i7, s9) {
    const r9 = f3(t8);
    this._ensureSizeForTexel(r9), this._getBlock(e5).setData(t8, i7, s9);
  }
  getData(t8, e5, i7) {
    return this._getBlock(e5).getData(t8, i7);
  }
  getHighlightFlags(t8) {
    return this._idsToHighlight.get(t8) || 0;
  }
  unsetAttributeData(t8) {
    const e5 = f3(t8);
    this._getBlock(0).setData(e5, 0, 0);
  }
  setAttributeData(t8, e5, i7, s9) {
    const r9 = f3(t8);
    this._ensureSizeForTexel(r9), this._getBlock(0).setData(r9, 0, this.getFilterFlags(e5, s9));
    const a8 = this._attributeComputeInfo, l7 = 1, d2 = 4;
    let c3 = null;
    a8 && (c3 = "multi" === a8.type ? a8.map.get(e5.readAttribute(a8.keyField)) : a8.map, (c3 == null ? void 0 : c3.size) && c3.forEach((t9, s10) => {
      var _a;
      const a9 = s10 * l7 % d2, o3 = Math.floor(s10 * l7 / d2), c4 = this._getBlock(o3 + J.VV);
      let u3 = (_a = t9.field) == null ? void 0 : _a.read(e5, i7);
      t9.valueRepresentation && (u3 = _3(u3, t9.valueRepresentation));
      (null === u3 || isNaN(u3) || u3 === 1 / 0 || u3 === -1 / 0) && (u3 = k), c4.setData(r9, a9, u3);
    }));
  }
  get epoch() {
    return this._epoch;
  }
  sendUpdates() {
    const t8 = this._blocks.map((t9) => null != t9 ? t9.toMessage() : null), e5 = this._getInitArgs();
    has("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.start"), this._client.update({ initArgs: e5, blockData: t8, version: this.version, sendUpdateEpoch: this._epoch }), this._epoch += 1, has("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.end");
  }
  _ensureSizeForTexel(t8) {
    for (; t8 >= this._size * this._size; ) if (this._expand()) return;
  }
  async _bind(t8, e5, i7) {
    const s9 = await t8.createComputedField(e5), { valueRepresentation: r9 } = e5, a8 = this._attributeComputeInfo;
    if ("multi" === a8.type) {
      const t9 = a8.map.get(i7) ?? /* @__PURE__ */ new Map();
      t9.set(e5.binding, { field: s9, valueRepresentation: r9 }), a8.map.set(i7, t9);
    } else a8.map.set(e5.binding, { field: s9, valueRepresentation: r9 });
    return s9;
  }
  _getInitArgs() {
    return this._initialized ? null : (this._initialized = true, this._getBlock(J.Animation), this._getBlock(J.GPGPU), this._getBlock(J.LocalTimeOrigin), { blockSize: this._size, blockDescriptors: this._blocks.map((t8) => null != t8 ? { textureOnly: t8.textureOnly, buffer: t8.buffer, pixelType: t8.pixelType } : null) });
  }
  _getBlock(t8) {
    const e5 = this._blocks[t8];
    if (null != e5) return e5;
    m4(`Initializing AttributeBlock at index ${t8}`);
    const i7 = new b4(this._size, this._blockDescriptors[t8], this._client.isLocal);
    return this._blocks[t8] = i7, this._initialized = false, i7;
  }
  _expand() {
    if (this._size < this._schema.capabilities.maxTextureSize) {
      const t8 = this._size <<= 1;
      m4("Expanding block size to", t8, this._blocks);
      for (const e5 of this._blocks) e5 == null ? void 0 : e5.expand(t8);
      return this._initialized = false, this._size = t8, 0;
    }
    return y2().error(new s("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  _updateReferences(t8) {
    n3(this._arcadeDependencies, t8);
  }
  isVisible(t8) {
    return !!(this._getBlock(0).getData(t8, 0) & 1 << K);
  }
  getFilterFlags(t8, e5) {
    let i7 = 0;
    for (let r9 = 0; r9 < this._filters.length; r9++) {
      const s10 = !!(1 << r9), a8 = this._filters[r9];
      i7 |= (!s10 || null == a8 || a8.check(t8, e5) ? 1 : 0) << r9;
    }
    let s9 = 0;
    if (this._idsToHighlight.size) {
      const e6 = t8.getObjectId();
      s9 = this.getHighlightFlags(e6);
    }
    return i7 << K | s9;
  }
};

export {
  n5 as n,
  r4 as r,
  s6 as s,
  s7 as s2,
  n6 as n2,
  t6 as t,
  p3 as p,
  a7 as a,
  M,
  u2 as u,
  r8 as r2,
  p4 as p2,
  i6 as i,
  n8 as n3,
  x3 as x
};
//# sourceMappingURL=chunk-KIKC4LVZ.js.map
