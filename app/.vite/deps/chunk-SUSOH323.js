import {
  t
} from "./chunk-AZYU3Z5M.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  j2 as j,
  y
} from "./chunk-YUVX6H42.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  N,
  P2 as P,
  Q,
  d,
  s2 as s
} from "./chunk-LTDNORB5.js";
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
  a3 as a,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/support/LOD.js
var i;
var l = i = class extends S {
  constructor(e) {
    super(e), this.cols = null, this.level = 0, this.levelValue = null, this.origin = null, this.resolution = 0, this.rows = null, this.scale = 0;
  }
  clone() {
    return new i({ cols: this.cols, level: this.level, levelValue: this.levelValue, resolution: this.resolution, rows: this.rows, scale: this.scale });
  }
};
r([m({ json: { write: true, origins: { "web-document": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], l.prototype, "cols", void 0), r([m({ type: x, json: { write: true } })], l.prototype, "level", void 0), r([m({ type: String, json: { write: true } })], l.prototype, "levelValue", void 0), r([m({ json: { write: true, origins: { "web-document": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], l.prototype, "origin", void 0), r([m({ type: Number, json: { write: true } })], l.prototype, "resolution", void 0), r([m({ json: { write: true, origins: { "web-document": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], l.prototype, "rows", void 0), r([m({ type: Number, json: { write: true } })], l.prototype, "scale", void 0), l = i = r([a("esri.layers.support.LOD")], l);
var p = l;

// node_modules/@arcgis/core/layers/support/TileInfo.js
var w;
var x2 = new o({ PNG: "png", PNG8: "png8", PNG24: "png24", PNG32: "png32", JPEG: "jpg", JPG: "jpg", DIB: "dib", TIFF: "tiff", EMF: "emf", PS: "ps", PDF: "pdf", GIF: "gif", SVG: "svg", SVGZ: "svgz", Mixed: "mixed", MIXED: "mixed", LERC: "lerc", LERC2D: "lerc2d", RAW: "raw", pbf: "pbf" });
var j2 = w = class extends S {
  static create(e = {}) {
    const { resolutionFactor: t2 = 1, scales: o3, size: r3 = 256, spatialReference: i2 = g.WebMercator, numLODs: l2 = 24 } = e;
    if (!N(i2)) {
      const e2 = [];
      if (o3) for (let t3 = 0; t3 < o3.length; t3++) {
        const s2 = o3[t3];
        e2.push(new p({ level: t3, scale: s2, resolution: s2 }));
      }
      else {
        let t3 = 5e-4;
        for (let o4 = l2 - 1; o4 >= 0; o4--) e2.unshift(new p({ level: o4, scale: t3, resolution: t3 })), t3 *= 2;
      }
      return new w({ dpi: 96, lods: e2, origin: new j(0, 0, i2), size: [r3, r3], spatialReference: i2 });
    }
    const n = d(i2), p2 = e.origin ? new j({ x: e.origin.x, y: e.origin.y, spatialReference: i2 }) : new j(n ? { x: n.origin[0], y: n.origin[1], spatialReference: i2 } : { x: 0, y: 0, spatialReference: i2 }), u2 = 96, d2 = 1 / (Q(i2) * 39.37 * u2), g2 = [];
    if (o3) for (let s2 = 0; s2 < o3.length; s2++) {
      const e2 = o3[s2], t3 = e2 * d2;
      g2.push(new p({ level: s2, scale: e2, resolution: t3 }));
    }
    else {
      let e2 = P(i2) ? 512 / r3 * 5916575275917094e-7 : 256 / r3 * 591657527591555e-6;
      const o4 = Math.ceil(l2 / t2);
      g2.push(new p({ level: 0, scale: e2, resolution: e2 * d2 }));
      for (let s2 = 1; s2 < o4; s2++) {
        const o5 = e2 / 2 ** t2, r4 = o5 * d2;
        g2.push(new p({ level: s2, scale: o5, resolution: r4 })), e2 = o5;
      }
    }
    return new w({ dpi: u2, lods: g2, origin: p2, size: [r3, r3], spatialReference: i2 });
  }
  constructor(e) {
    super(e), this.dpi = 96, this.format = null, this.origin = null, this.size = null, this.spatialReference = null;
  }
  get isWrappable() {
    const { spatialReference: e, origin: t2 } = this;
    if (e && t2) {
      const o3 = d(e);
      return e.isWrappable && !!o3 && Math.abs(o3.origin[0] - t2.x) <= o3.dx;
    }
    return false;
  }
  readOrigin(e, t2) {
    return j.fromJSON({ spatialReference: t2.spatialReference, ...e });
  }
  set lods(e) {
    let t2 = 0, o3 = 0;
    const s2 = [], r3 = this._levelToLOD = {};
    e && (t2 = -1 / 0, o3 = 1 / 0, e.forEach((e2) => {
      s2.push(e2.scale), t2 = e2.scale > t2 ? e2.scale : t2, o3 = e2.scale < o3 ? e2.scale : o3, r3[e2.level] = e2;
    })), this._set("scales", s2), this._set("lods", e), this._initializeUpsampleLevels();
  }
  readSize(e, t2) {
    return [t2.cols, t2.rows];
  }
  writeSize(e, t2) {
    t2.cols = e[0], t2.rows = e[1];
  }
  zoomToScale(e) {
    const t2 = this.scales;
    if (e <= 0) return t2[0];
    if (e >= t2.length - 1) return t2[t2.length - 1];
    const o3 = Math.floor(e), s2 = o3 + 1;
    return t2[o3] / (t2[o3] / t2[s2]) ** (e - o3);
  }
  scaleToZoom(e) {
    const t2 = this.scales, o3 = t2.length - 1;
    let s2 = 0;
    for (; s2 < o3; s2++) {
      const o4 = t2[s2], r3 = t2[s2 + 1];
      if (o4 <= e) return s2;
      if (r3 === e) return s2 + 1;
      if (o4 > e && r3 < e) return s2 + Math.log(o4 / e) / Math.log(o4 / r3);
    }
    return s2;
  }
  tileAt(e, t2, o3, s2) {
    const r3 = this.lodAt(e);
    if (!r3) return null;
    let i2, l2;
    if ("number" == typeof t2) i2 = t2, l2 = o3;
    else if (s(t2.spatialReference, this.spatialReference)) i2 = t2.x, l2 = t2.y, s2 = o3;
    else {
      const e2 = y(t2, this.spatialReference);
      if (null == e2) return null;
      i2 = e2.x, l2 = e2.y, s2 = o3;
    }
    const n = r3.resolution * this.size[0], p2 = r3.resolution * this.size[1];
    return s2 || (s2 = new t(null, 0, 0, 0, u())), s2.level = e, s2.row = Math.floor((this.origin.y - l2) / p2 + 1e-3), s2.col = Math.floor((i2 - this.origin.x) / n + 1e-3), this.updateTileInfo(s2), s2;
  }
  updateTileInfo(e, t2 = w.ExtrapolateOptions.NONE) {
    let o3 = this.lodAt(e.level);
    if (!o3 && t2 === w.ExtrapolateOptions.POWER_OF_TWO) {
      const t3 = this.lods[this.lods.length - 1];
      t3.level < e.level && (o3 = t3);
    }
    if (!o3) return;
    const s2 = e.level - o3.level, r3 = o3.resolution * this.size[0] / 2 ** s2, i2 = o3.resolution * this.size[1] / 2 ** s2;
    e.id = `${e.level}/${e.row}/${e.col}`, e.extent || (e.extent = u()), e.extent[0] = this.origin.x + e.col * r3, e.extent[1] = this.origin.y - (e.row + 1) * i2, e.extent[2] = e.extent[0] + r3, e.extent[3] = e.extent[1] + i2;
  }
  upsampleTile(e) {
    const t2 = this._upsampleLevels[e.level];
    return !(!t2 || -1 === t2.parentLevel) && (e.level = t2.parentLevel, e.row = Math.floor(e.row / t2.factor + 1e-3), e.col = Math.floor(e.col / t2.factor + 1e-3), this.updateTileInfo(e), true);
  }
  getTileBounds(e, t2) {
    const o3 = this.lodAt(t2.level);
    if (null == o3) return null;
    const { resolution: s2 } = o3, r3 = s2 * this.size[0], i2 = s2 * this.size[1];
    return e[0] = this.origin.x + t2.col * r3, e[1] = this.origin.y - (t2.row + 1) * i2, e[2] = e[0] + r3, e[3] = e[1] + i2, e;
  }
  lodAt(e) {
    var _a;
    return ((_a = this._levelToLOD) == null ? void 0 : _a[e]) ?? null;
  }
  clone() {
    return w.fromJSON(this.write({}));
  }
  getCompatibleForVTL(e) {
    if (this.size[0] !== this.size[1] || 256 === this.size[0] && 512 === e) return null;
    const t2 = (512 === this.size[0] && 256 === e ? -1 : 0) + (this.spatialReference.isGeographic ? 1 : 0);
    if (this.size[0] === e && 0 === t2) return this;
    const o3 = [], s2 = this.lods.length - t2;
    for (let r3 = 0; r3 < s2; r3++) {
      const e2 = r3 + t2, { scale: s3, resolution: i2 } = e2 >= 0 ? this.lods[e2] : { scale: 2 * this.lods[0].scale, resolution: 2 * this.lods[0].resolution };
      o3.push(new p({ level: r3, scale: s3, resolution: i2 }));
    }
    return new w({ size: [e, e], dpi: this.dpi, format: this.format, compressionQuality: this.compressionQuality, origin: this.origin, spatialReference: this.spatialReference, lods: o3 });
  }
  _initializeUpsampleLevels() {
    const e = this.lods;
    this._upsampleLevels = [];
    let t2 = null;
    for (let o3 = 0; o3 < e.length; o3++) {
      const s2 = e[o3];
      this._upsampleLevels[s2.level] = { parentLevel: t2 ? t2.level : -1, factor: t2 ? t2.resolution / s2.resolution : 0 }, t2 = s2;
    }
  }
};
r([m({ type: Number, json: { write: true } })], j2.prototype, "compressionQuality", void 0), r([m({ type: Number, json: { write: true } })], j2.prototype, "dpi", void 0), r([m({ type: String, json: { read: x2.read, write: x2.write, origins: { "web-scene": { read: false, write: false } } } })], j2.prototype, "format", void 0), r([m({ readOnly: true })], j2.prototype, "isWrappable", null), r([m({ type: j, json: { write: true } })], j2.prototype, "origin", void 0), r([o2("origin")], j2.prototype, "readOrigin", null), r([m({ type: [p], value: null, json: { write: true } })], j2.prototype, "lods", null), r([m({ readOnly: true })], j2.prototype, "scales", void 0), r([m({ cast: (e) => Array.isArray(e) ? e : "number" == typeof e ? [e, e] : [256, 256] })], j2.prototype, "size", void 0), r([o2("size", ["rows", "cols"])], j2.prototype, "readSize", null), r([r2("size", { cols: { type: x }, rows: { type: x } })], j2.prototype, "writeSize", null), r([m({ type: g, json: { write: true } })], j2.prototype, "spatialReference", void 0), j2 = w = r([a("esri.layers.support.TileInfo")], j2), function(e) {
  var t2;
  (t2 = e.ExtrapolateOptions || (e.ExtrapolateOptions = {}))[t2.NONE = 0] = "NONE", t2[t2.POWER_OF_TWO = 1] = "POWER_OF_TWO";
}(j2 || (j2 = {}));
var z = j2;

export {
  p,
  z
};
//# sourceMappingURL=chunk-SUSOH323.js.map
