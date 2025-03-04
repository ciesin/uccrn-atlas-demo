import {
  t
} from "./chunk-AZYU3Z5M.js";
import {
  O,
  Q as Q2
} from "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import {
  u
} from "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import {
  P
} from "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import {
  c,
  d,
  o,
  u as u2,
  w
} from "./chunk-G34KEQQG.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-NENDDUWH.js";
import {
  j2 as j,
  y
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  Q
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import {
  _
} from "./chunk-ACGZOBZ6.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  a,
  e,
  h,
  n as n2
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/support/ElevationSampler.js
var l = () => n.getLogger("esri.layers.support.ElevationSampler");
var c2 = class {
  queryElevation(e2) {
    return p(e2.clone(), this);
  }
  on() {
    return e();
  }
  projectIfRequired(e2, t4) {
    return h2(e2, t4);
  }
};
var m = class extends c2 {
  get spatialReference() {
    return this.extent.spatialReference;
  }
  constructor(e2, t4, s2) {
    super(), this.tile = e2, this.noDataValue = s2;
    const o2 = e2.tile.extent;
    this.extent = c(o2, t4.spatialReference), this.extent.zmin = e2.zmin, this.extent.zmax = e2.zmax, this._aaExtent = o2;
    const a2 = Q(t4.spatialReference), r = t4.lodAt(e2.tile.level).resolution * a2;
    this.demResolution = { min: r, max: r };
  }
  contains(e2) {
    const t4 = this.projectIfRequired(e2, this.spatialReference);
    return null != t4 && this.containsAt(t4.x, t4.y);
  }
  containsAt(e2, t4) {
    return w(this._aaExtent, e2, t4);
  }
  elevationAt(e2, t4) {
    if (!this.containsAt(e2, t4)) {
      const n3 = this.extent, s2 = `${n3.xmin}, ${n3.ymin}, ${n3.xmax}, ${n3.ymax}`;
      return l().warn("#elevationAt()", `Point used to sample elevation (${e2}, ${t4}) is outside of the sampler extent (${s2})`), this.noDataValue;
    }
    return this.tile.sample(e2, t4) ?? this.noDataValue;
  }
};
var u3 = class extends c2 {
  get spatialReference() {
    return this.extent.spatialReference;
  }
  constructor(e2, t4, n3) {
    let s2;
    super(), "number" == typeof t4 ? (this.noDataValue = t4, s2 = null) : (s2 = t4, this.noDataValue = n3), this.samplers = s2 ? e2.map((e3) => new m(e3, s2, this.noDataValue)) : e2;
    const o2 = this.samplers[0];
    if (o2) {
      this.extent = o2.extent.clone();
      const { min: e3, max: t5 } = o2.demResolution;
      this.demResolution = { min: e3, max: t5 };
      for (let n4 = 1; n4 < this.samplers.length; n4++) {
        const e4 = this.samplers[n4];
        this.extent.union(e4.extent), this.demResolution.min = Math.min(this.demResolution.min, e4.demResolution.min), this.demResolution.max = Math.max(this.demResolution.max, e4.demResolution.max);
      }
    } else this.extent = c(u2(), s2.spatialReference), this.demResolution = { min: 0, max: 0 };
  }
  elevationAt(e2, t4) {
    let n3, s2 = false;
    for (const i of this.samplers) if (i.containsAt(e2, t4) && (s2 = true, n3 = i.elevationAt(e2, t4), n3 !== i.noDataValue)) return n3;
    return null != n3 ? n3 : (s2 || l().warn("#elevationAt()", `Point used to sample elevation (${e2}, ${t4}) is outside of the sampler`), this.noDataValue);
  }
};
function p(e2, t4) {
  const n3 = h2(e2, t4.spatialReference);
  if (!n3) return null;
  switch (e2.type) {
    case "point":
      f(e2, n3, t4);
      break;
    case "polyline":
      x(e2, n3, t4);
      break;
    case "multipoint":
      R(e2, n3, t4);
  }
  return e2;
}
function h2(e2, t4) {
  if (null == e2) return null;
  const n3 = e2.spatialReference;
  if (n3.equals(t4)) return e2;
  const s2 = y(e2, t4);
  return s2 || l().error(`Cannot project geometry spatial reference (wkid:${n3.wkid}) to elevation sampler spatial reference (wkid:${t4.wkid})`), s2;
}
function f(e2, t4, n3) {
  e2.z = n3.elevationAt(t4.x, t4.y);
}
function x(e2, t4, n3) {
  d2.spatialReference = t4.spatialReference;
  const s2 = e2.hasM && !e2.hasZ;
  for (let i = 0; i < e2.paths.length; i++) {
    const o2 = e2.paths[i], a2 = t4.paths[i];
    for (let e3 = 0; e3 < o2.length; e3++) {
      const t5 = o2[e3], i2 = a2[e3];
      d2.x = i2[0], d2.y = i2[1], s2 && (t5[3] = t5[2]), t5[2] = n3.elevationAt(d2.x, d2.y);
    }
  }
  e2.hasZ = true;
}
function R(e2, t4, n3) {
  d2.spatialReference = t4.spatialReference;
  const s2 = e2.hasM && !e2.hasZ;
  for (let i = 0; i < e2.points.length; i++) {
    const o2 = e2.points[i], a2 = t4.points[i];
    d2.x = a2[0], d2.y = a2[1], s2 && (o2[3] = o2[2]), o2[2] = n3.elevationAt(d2.x, d2.y);
  }
  e2.hasZ = true;
}
var d2 = new j();

// node_modules/@arcgis/core/layers/support/ElevationSamplerData.js
var t2 = class {
  constructor(t4, h3) {
    this.data = t4, this.safeWidth = 0.99999999 * (t4.width - 1), this.dx = (t4.width - 1) / (h3[2] - h3[0]), this.dy = (t4.width - 1) / (h3[3] - h3[1]), this.x0 = h3[0], this.y1 = h3[3];
  }
};

// node_modules/@arcgis/core/layers/support/ElevationTile.js
var t3 = class {
  constructor(t4, l3 = null) {
    if (this.tile = t4, null != l3 && null != t4) {
      const e2 = t4.extent;
      this._samplerData = new t2(l3, e2);
    }
  }
  get zmin() {
    return null != this._samplerData ? this._samplerData.data.minValue : 0;
  }
  get zmax() {
    return null != this._samplerData ? this._samplerData.data.maxValue : 0;
  }
  get hasNoDataValues() {
    var _a;
    return !!((_a = this._samplerData) == null ? void 0 : _a.data.hasNoDataValues);
  }
  sample(a2, t4) {
    if (null == this._samplerData) return;
    const { safeWidth: e2, data: s2, dx: r, dy: n3, y1: i, x0: u4 } = this._samplerData, { width: o2, values: m2, noDataValue: h3 } = s2, p2 = l2(n3 * (i - t4), 0, e2), D2 = l2(r * (a2 - u4), 0, e2), d3 = Math.floor(p2), f2 = Math.floor(D2), _3 = d3 * o2 + f2, c3 = _3 + o2, x3 = m2[_3], V = m2[c3], g2 = m2[_3 + 1], v2 = m2[c3 + 1];
    if (x3 !== h3 && V !== h3 && g2 !== h3 && v2 !== h3) {
      const a3 = D2 - f2, t5 = x3 + (g2 - x3) * a3;
      return t5 + (V + (v2 - V) * a3 - t5) * (p2 - d3);
    }
  }
};
function l2(a2, t4, l3) {
  return a2 < t4 ? t4 : a2 > l3 ? l3 : a2;
}

// node_modules/@arcgis/core/layers/support/ElevationQuery.js
var T = class {
  async queryAll(e2, i, n3) {
    if (!(e2 = (n3 == null ? void 0 : n3.ignoreInvisibleLayers) ? e2.filter((e3) => e3.visible) : e2.slice()).length) throw new s("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
    const o2 = w2.fromGeometry(i);
    let l3 = false;
    (n3 == null ? void 0 : n3.returnSampleInfo) || (l3 = true);
    const s2 = { ...R2, ...n3, returnSampleInfo: true }, a2 = await this.query(e2[e2.length - 1], o2, s2), r = await this._queryAllContinue(e2, a2, s2);
    return r.geometry = r.geometry.export(), l3 && delete r.sampleInfo, r;
  }
  async query(e2, i, n3) {
    if (!e2) throw new s("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
    if (!i || !(i instanceof w2) && "point" !== i.type && "multipoint" !== i.type && "polyline" !== i.type) throw new s("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");
    const o2 = { ...R2, ...n3 }, l3 = new x2(e2, i.spatialReference, o2), s2 = o2.signal;
    return await e2.load({ signal: s2 }), await q(l3, i, s2), await this._selectTiles(l3, s2), await F(l3, s2), j2(l3), b(l3, s2);
  }
  async createSampler(e2, i, n3) {
    if (!e2) throw new s("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
    if (!i || "extent" !== i.type) throw new s("elevation-query:invalid-extent", "Invalid or undefined extent");
    const o2 = { ...R2, ...n3 };
    return this._createSampler(e2, i, o2);
  }
  async createSamplerAll(e2, i, n3) {
    if (!(e2 = (n3 == null ? void 0 : n3.ignoreInvisibleLayers) ? e2.filter((e3) => e3.visible) : e2.slice()).length) throw new s("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
    if (!i || "extent" !== i.type) throw new s("elevation-query:invalid-extent", "Invalid or undefined extent");
    const o2 = { ...R2, ...n3, returnSampleInfo: true }, l3 = await this._createSampler(e2[e2.length - 1], i, o2);
    return this._createSamplerAllContinue(e2, i, l3, o2);
  }
  async _createSampler(e2, t4, i, n3) {
    const o2 = i.signal;
    await e2.load({ signal: o2 });
    const l3 = t4.spatialReference, s2 = e2.tileInfo.spatialReference;
    l3.equals(s2) || (await Q2([{ source: l3, dest: s2 }], { signal: o2 }), t4 = O(t4, s2));
    const a2 = new _2(e2, t4, i, n3);
    return await this._selectTiles(a2, o2), await F(a2, o2), new u3(a2.elevationTiles, a2.layer.tileInfo, a2.options.noDataValue);
  }
  async _createSamplerAllContinue(e2, t4, i, n3) {
    if (e2.pop(), !e2.length) return i;
    const o2 = i.samplers.filter((e3) => !e3.tile.hasNoDataValues).map((e3) => o(e3.extent)), l3 = await this._createSampler(e2[e2.length - 1], t4, n3, o2);
    if (0 === l3.samplers.length) return i;
    const s2 = i.samplers.concat(l3.samplers), a2 = new u3(s2, n3.noDataValue);
    return this._createSamplerAllContinue(e2, t4, a2, n3);
  }
  async _queryAllContinue(e2, t4, n3) {
    const o2 = e2.pop(), l3 = t4.geometry.coordinates, s2 = t4.sampleInfo;
    n2(s2);
    const a2 = [], r = [];
    for (let i = 0; i < l3.length; i++) {
      const t5 = s2[i];
      t5.demResolution >= 0 ? t5.source || (t5.source = o2) : e2.length && (a2.push(l3[i]), r.push(i));
    }
    if (!e2.length || 0 === a2.length) return t4;
    const c3 = t4.geometry.clone(a2), u4 = await this.query(e2[e2.length - 1], c3, n3), h3 = u4.sampleInfo;
    if (!h3) throw new Error("no sampleInfo");
    return r.forEach((e3, t5) => {
      l3[e3].z = u4.geometry.coordinates[t5].z, s2[e3].demResolution = h3[t5].demResolution;
    }), this._queryAllContinue(e2, t4, n3);
  }
  async _selectTiles(e2, i) {
    "geometry" === e2.type && I(e2);
    const n3 = e2.options.demResolution;
    if ("number" == typeof n3) C(e2, n3);
    else if ("finest-contiguous" === n3) await this._selectTilesFinestContiguous(e2, i);
    else {
      if ("auto" !== n3) throw new s("elevation-query:invalid-dem-resolution", `Invalid dem resolution value '${n3}', expected a number, "finest-contiguous" or "auto"`);
      await this._selectTilesAuto(e2, i);
    }
  }
  async _selectTilesFinestContiguous(e2, t4) {
    const { tileInfo: i, tilemapCache: n3 } = e2.layer, o2 = E(i, n3, e2.options.minDemResolution);
    await this._selectTilesFinestContiguousAt(e2, o2, t4);
  }
  async _selectTilesFinestContiguousAt(e2, i, l3) {
    const s2 = e2.layer;
    if (e2.selectTilesAtLOD(i), i < 0) return;
    const a2 = s2.tilemapCache, r = e2.getTilesToFetch();
    try {
      if (a2 && !L(a2)) await h(Promise.all(r.map((e3) => a2.fetchAvailability(e3.level, e3.row, e3.col, { signal: l3 }))), l3);
      else if (await F(e2, l3), !e2.allElevationTilesFetched()) throw e2.clearElevationTiles(), new s("elevation-query:has-unavailable-tiles");
    } catch (c3) {
      a(c3), await this._selectTilesFinestContiguousAt(e2, i - 1, l3);
    }
  }
  async _selectTilesAuto(t4, i) {
    M(t4), S(t4);
    const l3 = t4.layer.tilemapCache;
    if (!l3 || L(l3)) return this._selectTilesAutoPrefetchUpsample(t4, i);
    const s2 = t4.getTilesToFetch(), a2 = {}, r = s2.map(async (t5) => {
      const n3 = new t(null, 0, 0, 0, u2()), s3 = await _(l3.fetchAvailabilityUpsample(t5.level, t5.row, t5.col, n3, { signal: i }));
      false !== s3.ok ? null != t5.id && (a2[t5.id] = n3) : a(s3.error);
    });
    await h(Promise.all(r), i), t4.remapTiles(a2);
  }
  async _selectTilesAutoPrefetchUpsample(e2, t4) {
    const i = e2.layer.tileInfo;
    await F(e2, t4);
    let n3 = false;
    e2.forEachTileToFetch((e3, t5) => {
      i.upsampleTile(e3) ? n3 = true : t5();
    }), n3 && await this._selectTilesAutoPrefetchUpsample(e2, t4);
  }
};
var w2 = class _w {
  export() {
    return this._exporter(this.coordinates, this.spatialReference);
  }
  clone(e2) {
    const t4 = new _w();
    return t4.geometry = this.geometry, t4.spatialReference = this.spatialReference, t4.coordinates = e2 || this.coordinates.map((e3) => e3.clone()), t4._exporter = this._exporter, t4;
  }
  async project(e2, t4) {
    if (this.spatialReference.equals(e2)) return this.clone();
    await Q2([{ source: this.spatialReference, dest: e2 }], { signal: t4 });
    const i = new u({ spatialReference: this.spatialReference, points: this.coordinates.map((e3) => [e3.x, e3.y]) }), n3 = O(i, e2);
    if (!n3) return null;
    const o2 = this.coordinates.map((e3, t5) => {
      const i2 = e3.clone(), o3 = n3.points[t5];
      return i2.x = o3[0], i2.y = o3[1], i2;
    }), l3 = this.clone(o2);
    return l3.spatialReference = e2, l3;
  }
  static fromGeometry(e2) {
    const t4 = new _w();
    if (t4.geometry = e2, t4.spatialReference = e2.spatialReference, e2 instanceof _w) t4.coordinates = e2.coordinates.map((e3) => e3.clone()), t4._exporter = (t5, i) => {
      const n3 = e2.clone(t5);
      return n3.spatialReference = i, n3;
    };
    else switch (e2.type) {
      case "point": {
        const i = e2, { hasZ: n3, hasM: o2 } = i;
        t4.coordinates = n3 && o2 ? [new v(i.x, i.y, i.z, i.m)] : n3 ? [new v(i.x, i.y, i.z)] : o2 ? [new v(i.x, i.y, null, i.m)] : [new v(i.x, i.y)], t4._exporter = (t5, i2) => e2.hasM ? new j(t5[0].x, t5[0].y, t5[0].z, t5[0].m, i2) : new j(t5[0].x, t5[0].y, t5[0].z, i2);
        break;
      }
      case "multipoint": {
        const i = e2, { hasZ: n3, hasM: o2 } = i;
        t4.coordinates = n3 && o2 ? i.points.map((e3) => new v(e3[0], e3[1], e3[2], e3[3])) : n3 ? i.points.map((e3) => new v(e3[0], e3[1], e3[2])) : o2 ? i.points.map((e3) => new v(e3[0], e3[1], null, e3[2])) : i.points.map((e3) => new v(e3[0], e3[1])), t4._exporter = (t5, i2) => e2.hasM ? new u({ points: t5.map((e3) => [e3.x, e3.y, e3.z, e3.m]), hasZ: true, hasM: true, spatialReference: i2 }) : new u(t5.map((e3) => [e3.x, e3.y, e3.z]), i2);
        break;
      }
      case "polyline": {
        const i = e2, n3 = [], o2 = [], { hasZ: l3, hasM: s2 } = e2;
        let a2 = 0;
        for (const e3 of i.paths) if (o2.push([a2, a2 + e3.length]), a2 += e3.length, l3 && s2) for (const t5 of e3) n3.push(new v(t5[0], t5[1], t5[2], t5[3]));
        else if (l3) for (const t5 of e3) n3.push(new v(t5[0], t5[1], t5[2]));
        else if (s2) for (const t5 of e3) n3.push(new v(t5[0], t5[1], null, t5[2]));
        else for (const t5 of e3) n3.push(new v(t5[0], t5[1]));
        t4.coordinates = n3, t4._exporter = (t5, i2) => {
          const n4 = e2.hasM ? t5.map((e3) => [e3.x, e3.y, e3.z ?? 0, e3.m ?? 0]) : t5.map((e3) => [e3.x, e3.y, e3.z ?? 0]), l4 = o2.map((e3) => n4.slice(e3[0], e3[1]));
          return new P({ paths: l4, hasM: e2.hasM, hasZ: true, spatialReference: i2 });
        };
        break;
      }
    }
    return t4;
  }
};
var v = class _v {
  constructor(e2, t4, i = null, n3 = null, o2 = null, l3 = null) {
    this.x = e2, this.y = t4, this.z = i, this.m = n3, this.tile = o2, this.elevationTile = l3;
  }
  clone() {
    return new _v(this.x, this.y, this.z, this.m);
  }
};
var g = class {
  constructor(e2, t4) {
    this.layer = e2, this.options = t4;
  }
};
var x2 = class extends g {
  constructor(e2, t4, i) {
    super(e2, i), this.outSpatialReference = t4, this.type = "geometry";
  }
  selectTilesAtLOD(e2) {
    if (e2 < 0) this.geometry.coordinates.forEach((e3) => e3.tile = null);
    else {
      const { tileInfo: t4, tilemapCache: i } = this.layer, n3 = D(t4, i)[e2].level;
      this.geometry.coordinates.forEach((e3) => e3.tile = t4.tileAt(n3, e3.x, e3.y));
    }
  }
  allElevationTilesFetched() {
    return !this.geometry.coordinates.some((e2) => !e2.elevationTile);
  }
  clearElevationTiles() {
    for (const e2 of this.geometry.coordinates) e2.elevationTile !== this.outsideExtentTile && (e2.elevationTile = null);
  }
  populateElevationTiles(e2) {
    var _a;
    for (const t4 of this.geometry.coordinates) !t4.elevationTile && ((_a = t4.tile) == null ? void 0 : _a.id) && (t4.elevationTile = e2[t4.tile.id]);
  }
  remapTiles(e2) {
    var _a;
    for (const t4 of this.geometry.coordinates) {
      const i = (_a = t4.tile) == null ? void 0 : _a.id;
      t4.tile = i ? e2[i] : null;
    }
  }
  getTilesToFetch() {
    var _a;
    const e2 = {}, t4 = [];
    for (const i of this.geometry.coordinates) {
      const n3 = i.tile;
      if (!n3) continue;
      const o2 = (_a = i.tile) == null ? void 0 : _a.id;
      i.elevationTile || !o2 || e2[o2] || (e2[o2] = n3, t4.push(n3));
    }
    return t4;
  }
  forEachTileToFetch(e2) {
    for (const t4 of this.geometry.coordinates) t4.tile && !t4.elevationTile && e2(t4.tile, () => {
      t4.tile = null;
    });
  }
};
var _2 = class extends g {
  constructor(e2, t4, i, n3) {
    super(e2, i), this.type = "extent", this.elevationTiles = [], this._candidateTiles = [], this._fetchedCandidates = /* @__PURE__ */ new Set(), this.extent = t4.clone().intersection(e2.fullExtent), this.maskExtents = n3;
  }
  selectTilesAtLOD(e2, t4) {
    const i = this._maximumLodForRequests(t4), n3 = Math.min(i, e2);
    n3 < 0 ? this._candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(n3);
  }
  _maximumLodForRequests(e2) {
    const { tileInfo: t4, tilemapCache: i } = this.layer, n3 = D(t4, i);
    if (!e2) return n3.length - 1;
    const o2 = this.extent;
    if (null == o2) return -1;
    for (let l3 = n3.length - 1; l3 >= 0; l3--) {
      const i2 = n3[l3], s2 = i2.resolution * t4.size[0], a2 = i2.resolution * t4.size[1];
      if (Math.ceil(o2.width / s2) * Math.ceil(o2.height / a2) <= e2) return l3;
    }
    return -1;
  }
  allElevationTilesFetched() {
    return this._candidateTiles.length === this.elevationTiles.length;
  }
  clearElevationTiles() {
    this.elevationTiles.length = 0, this._fetchedCandidates.clear();
  }
  populateElevationTiles(e2) {
    for (const t4 of this._candidateTiles) {
      const i = t4.id && e2[t4.id];
      i && (this._fetchedCandidates.add(t4), this.elevationTiles.push(i));
    }
  }
  remapTiles(e2) {
    this._candidateTiles = z(this._candidateTiles.map((t4) => e2[t4.id]));
  }
  getTilesToFetch() {
    return this._candidateTiles;
  }
  forEachTileToFetch(e2, t4) {
    const i = this._candidateTiles;
    this._candidateTiles = [], i.forEach((i2) => {
      if (this._fetchedCandidates.has(i2)) return void (t4 && t4(i2));
      let n3 = false;
      e2(i2, () => n3 = true), n3 ? t4 && t4(i2) : this._candidateTiles.push(i2);
    }), this._candidateTiles = z(this._candidateTiles, t4);
  }
  _selectCandidateTilesCoveringExtentAt(e2) {
    this._candidateTiles.length = 0;
    const t4 = this.extent;
    if (null == t4) return;
    const { tileInfo: i, tilemapCache: n3 } = this.layer, o2 = D(i, n3)[e2], l3 = i.tileAt(o2.level, t4.xmin, t4.ymin), s2 = l3.extent;
    if (null == s2) return;
    const a2 = o2.resolution * i.size[0], r = o2.resolution * i.size[1], c3 = Math.ceil((t4.xmax - s2[0]) / a2), u4 = Math.ceil((t4.ymax - s2[1]) / r);
    for (let h3 = 0; h3 < u4; h3++) for (let e3 = 0; e3 < c3; e3++) {
      const t5 = new t(null, l3.level, l3.row - h3, l3.col + e3);
      i.updateTileInfo(t5), this._tileIsMasked(t5) || this._candidateTiles.push(t5);
    }
  }
  _tileIsMasked(e2) {
    return !!this.maskExtents && this.maskExtents.some((t4) => e2.extent && d(t4, e2.extent));
  }
};
function E(e2, t4, i = 0) {
  const n3 = D(e2, t4);
  let o2 = n3.length - 1;
  if (i > 0) {
    const t5 = i / Q(e2.spatialReference), s2 = n3.findIndex((e3) => e3.resolution < t5);
    0 === s2 ? o2 = 0 : s2 > 0 && (o2 = s2 - 1);
  }
  return o2;
}
var R2 = { maximumAutoTileRequests: 20, noDataValue: 0, returnSampleInfo: false, demResolution: "auto", minDemResolution: 0 };
async function q(e2, i, n3) {
  let o2;
  const l3 = e2.layer.tileInfo.spatialReference;
  if (i instanceof w2 ? o2 = await i.project(l3, n3) : (await Q2([{ source: i.spatialReference, dest: l3 }], { signal: n3 }), o2 = O(i, l3)), !o2) throw new s("elevation-query:spatial-reference-mismatch", `Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${l3.wkid}'`);
  e2.geometry = w2.fromGeometry(o2);
}
function I(e2) {
  if (null == e2.layer.fullExtent) return;
  const t4 = new t3(null);
  t4.sample = () => e2.options.noDataValue, e2.outsideExtentTile = t4;
  const i = e2.layer.fullExtent;
  e2.geometry.coordinates.forEach((e3) => {
    const n3 = e3.x, o2 = e3.y;
    (n3 < i.xmin || n3 > i.xmax || o2 < i.ymin || o2 > i.ymax) && (e3.elevationTile = t4);
  });
}
function A(e2, t4) {
  const { tileInfo: i, tilemapCache: n3 } = e2.layer, o2 = t4 / Q(i.spatialReference), s2 = D(i, n3);
  let a2 = s2[0], r = 0;
  for (let l3 = 1; l3 < s2.length; l3++) {
    const e3 = s2[l3];
    Math.abs(e3.resolution - o2) < Math.abs(a2.resolution - o2) && (a2 = e3, r = l3);
  }
  return r;
}
function C(e2, t4) {
  const i = A(e2, t4);
  e2.selectTilesAtLOD(i);
}
function M(e2) {
  const { tileInfo: t4, tilemapCache: i } = e2.layer, n3 = E(t4, i, e2.options.minDemResolution);
  e2.selectTilesAtLOD(n3, e2.options.maximumAutoTileRequests);
}
function D(e2, t4) {
  const i = e2.lods;
  if (L(t4)) {
    const { effectiveMinLOD: e3, effectiveMaxLOD: n3 } = t4;
    return i.filter((t5) => t5.level >= e3 && t5.level <= n3);
  }
  return i;
}
async function F(e2, t4) {
  const i = e2.getTilesToFetch(), o2 = {}, l3 = e2.options.cache, s2 = e2.options.noDataValue, a2 = i.map(async (i2) => {
    if (null == i2.id) return;
    const n3 = `${e2.layer.uid}:${i2.id}:${s2}`, a3 = null != l3 ? l3.get(n3) : null, r = null != a3 ? a3 : await e2.layer.fetchTile(i2.level, i2.row, i2.col, { noDataValue: s2, signal: t4 });
    null != l3 && l3.put(n3, r), o2[i2.id] = new t3(i2, r);
  });
  await h(Promise.allSettled(a2), t4), e2.populateElevationTiles(o2);
}
function S(e2) {
  const t4 = e2.layer.tileInfo;
  let i = 0;
  const n3 = {}, o2 = (e3) => {
    null != e3.id && (e3.id in n3 ? n3[e3.id]++ : (n3[e3.id] = 1, i++));
  }, l3 = (e3) => {
    if (null == e3.id) return;
    const t5 = n3[e3.id];
    1 === t5 ? (delete n3[e3.id], i--) : n3[e3.id] = t5 - 1;
  };
  e2.forEachTileToFetch(o2, l3);
  let s2 = true;
  for (; s2 && (s2 = false, e2.forEachTileToFetch((n4) => {
    i <= e2.options.maximumAutoTileRequests || (l3(n4), t4.upsampleTile(n4) && (s2 = true), o2(n4));
  }, l3), s2); ) ;
}
function j2(e2) {
  e2.geometry.coordinates.forEach((t4) => {
    const i = t4.elevationTile;
    let n3 = e2.options.noDataValue;
    if (i) {
      const e3 = i.sample(t4.x, t4.y);
      null != e3 ? n3 = e3 : t4.elevationTile = null;
    }
    t4.z = n3;
  });
}
function z(e2, t4) {
  const i = {}, n3 = [];
  for (const l3 of e2) {
    const e3 = l3.id;
    e3 && !i[e3] ? (i[e3] = l3, n3.push(l3)) : t4 && t4(l3);
  }
  const o2 = n3.sort((e3, t5) => e3.level - t5.level);
  return o2.filter((e3, i2) => {
    for (let n4 = 0; n4 < i2; n4++) {
      const i3 = o2[n4].extent;
      if (i3 && e3.extent && d(i3, e3.extent)) return t4 && t4(e3), false;
    }
    return true;
  });
}
async function b(e2, t4) {
  const n3 = await e2.geometry.project(e2.outSpatialReference, t4);
  n2(n3);
  const o2 = { geometry: n3.export(), noDataValue: e2.options.noDataValue };
  return e2.options.returnSampleInfo && (o2.sampleInfo = k(e2)), e2.geometry.coordinates.forEach((e3) => {
    e3.tile = null, e3.elevationTile = null;
  }), o2;
}
function k(e2) {
  const t4 = e2.layer.tileInfo, i = Q(t4.spatialReference);
  return e2.geometry.coordinates.map((n3) => {
    let o2 = -1;
    if (n3.elevationTile && n3.elevationTile !== e2.outsideExtentTile) {
      o2 = t4.lodAt(n3.elevationTile.tile.level).resolution * i;
    }
    return { demResolution: o2 };
  });
}
function L(e2) {
  return null != (e2 == null ? void 0 : e2.tileInfo);
}
export {
  T as ElevationQuery,
  w2 as GeometryDescriptor,
  E as getFinestLodIndex
};
//# sourceMappingURL=ElevationQuery-X3NQOIHP.js.map
