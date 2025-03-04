import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g as g2,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  C,
  O2 as O,
  P2 as P,
  S2,
  d,
  s2 as s3
} from "./chunk-LTDNORB5.js";
import {
  t
} from "./chunk-HQLPC24M.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a as a2,
  a3
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/Geometry.js
var c = class extends S {
  constructor(...e3) {
    super(...e3), this.type = null, this.hasM = false, this.hasZ = false, this.spatialReference = g2.WGS84;
  }
  get cache() {
    return this.commitProperty("spatialReference"), {};
  }
  get extent() {
    return null;
  }
  readSpatialReference(e3, r4) {
    if (e3 instanceof g2) return e3;
    if (null != e3) {
      const t2 = new g2();
      return t2.read(e3, r4), t2;
    }
    return e3;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
  clearCache() {
    this.notifyChange("cache");
  }
  getCacheValue(e3) {
    return this.cache[e3];
  }
  setCacheValue(e3, r4) {
    this.cache[e3] = r4;
  }
};
r([m()], c.prototype, "type", void 0), r([m({ readOnly: true })], c.prototype, "cache", null), r([m({ readOnly: true })], c.prototype, "extent", null), r([m({ type: Boolean, json: { write: { overridePolicy: (e3) => ({ enabled: e3 }) } } })], c.prototype, "hasM", void 0), r([m({ type: Boolean, json: { write: { overridePolicy: (e3) => ({ enabled: e3 }) } } })], c.prototype, "hasZ", void 0), r([m({ type: g2, json: { write: true }, value: g2.WGS84 })], c.prototype, "spatialReference", void 0), r([o("spatialReference")], c.prototype, "readSpatialReference", null), c = r([a3("esri.geometry.Geometry")], c);
var n2 = c;

// node_modules/@arcgis/core/geometry/asserts.js
function e(e3) {
  if (e3 && "object" == typeof e3 && "type" in e3 && "mesh" === e3.type) throw new s("Mesh geometries are not supported for this operation");
}
function r3(o3) {
  o3.forEach(e);
}

// node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
var l = 57.29577951308232;
var u = 0.017453292519943;
function f(n3) {
  return n3 * l;
}
function p(n3) {
  return n3 * u;
}
function h(n3) {
  return Math.PI / 2 - 2 * Math.atan(Math.exp(-n3 / t.radius));
}
function m2(n3) {
  return null != n3.wkid || null != n3.wkt;
}
var x = [0, 0];
function g3(n3, t2, e3, i2, r4) {
  const s4 = n3, a4 = r4;
  if (a4.spatialReference = e3, "x" in s4 && "x" in a4) [a4.x, a4.y] = t2(s4.x, s4.y, x, i2);
  else if ("xmin" in s4 && "xmin" in a4) [a4.xmin, a4.ymin] = t2(s4.xmin, s4.ymin, x, i2), [a4.xmax, a4.ymax] = t2(s4.xmax, s4.ymax, x, i2);
  else if ("paths" in s4 && "paths" in a4 || "rings" in s4 && "rings" in a4) {
    const n4 = "paths" in s4 ? s4.paths : s4.rings, e4 = [];
    let r5;
    for (let s5 = 0; s5 < n4.length; s5++) {
      const a5 = n4[s5];
      r5 = [], e4.push(r5);
      for (let n5 = 0; n5 < a5.length; n5++) r5.push(t2(a5[n5][0], a5[n5][1], [0, 0], i2)), a5[n5].length > 2 && r5[n5].push(a5[n5][2]), a5[n5].length > 3 && r5[n5].push(a5[n5][3]);
    }
    "paths" in a4 ? a4.paths = e4 : a4.rings = e4;
  } else if ("points" in s4 && "points" in a4) {
    const n4 = s4.points, e4 = [];
    for (let r5 = 0; r5 < n4.length; r5++) e4[r5] = t2(n4[r5][0], n4[r5][1], [0, 0], i2), n4[r5].length > 2 && e4[r5].push(n4[r5][2]), n4[r5].length > 3 && e4[r5].push(n4[r5][3]);
    a4.points = e4;
  }
  return r4;
}
function M(n3, t2) {
  const e3 = n3 && (m2(n3) ? n3 : n3.spatialReference), i2 = t2 && (m2(t2) ? t2 : t2.spatialReference);
  return !(n3 && "type" in n3 && "mesh" === n3.type || t2 && "type" in t2 && "mesh" === t2.type || !e3 || !i2) && (!!s3(i2, e3) || (O(i2) && C(e3) || O(e3) && C(i2)));
}
function y(t2, i2) {
  if (null == t2) return null;
  const o3 = t2.spatialReference, l3 = i2 && (m2(i2) ? i2 : i2.spatialReference);
  return M(o3, l3) ? s3(o3, l3) ? a(t2) : O(l3) ? g3(t2, d2, g2.WebMercator, false, a(t2)) : C(l3) ? g3(t2, R, g2.WGS84, false, a(t2)) : null : null;
}
function d2(n3, t2, e3 = [0, 0]) {
  t2 > 89.99999 ? t2 = 89.99999 : t2 < -89.99999 && (t2 = -89.99999);
  const r4 = p(t2);
  return e3[0] = p(n3) * t.radius, e3[1] = t.halfSemiMajorAxis * Math.log((1 + Math.sin(r4)) / (1 - Math.sin(r4))), e3;
}
function R(n3, t2, e3 = [0, 0], r4 = false) {
  if (n3 === S2[0]) e3[0] = -180;
  else if (n3 === S2[1]) e3[0] = 180;
  else {
    const t3 = f(n3 / t.radius);
    e3[0] = r4 ? t3 : t3 - 360 * Math.floor((t3 + 180) / 360);
  }
  return e3[1] = f(Math.PI / 2 - 2 * Math.atan(Math.exp(-t2 / t.radius))), e3;
}
function j(i2, r4 = false, s4 = a(i2)) {
  return e(i2), e(s4), g3(i2, d2, g2.WebMercator, r4, s4);
}
function S3(i2, r4 = false, s4 = a(i2)) {
  return e(i2), e(s4), g3(i2, R, g2.WGS84, r4, s4);
}

// node_modules/@arcgis/core/geometry/support/pointUtils.js
function e2(n3, r4) {
  const t2 = n3.x - r4.x, e3 = n3.y - r4.y, u3 = null != n3.z && null != r4.z ? n3.z - r4.z : 0;
  return Math.sqrt(t2 * t2 + e3 * e3 + u3 * u3);
}
function u2(n3) {
  var _a;
  return ((_a = i(n3, o2)) == null ? void 0 : _a[0]) ?? null;
}
function l2(n3) {
  var _a;
  return ((_a = i(n3, o2)) == null ? void 0 : _a[1]) ?? null;
}
function i({ x: e3, y: u3, spatialReference: l3 }, i2 = [0, 0]) {
  if (l3) {
    if (O(l3)) return R(e3, u3, i2);
    if (P(l3)) return i2[0] = e3, i2[1] = u3, i2;
  }
  return null;
}
var o2 = [0, 0];

// node_modules/@arcgis/core/geometry/Point.js
var g4;
var w = [0, 0];
function x2(t2) {
  return t2 && ("esri.geometry.SpatialReference" === t2.declaredClass || null != t2.wkid);
}
var _ = g4 = class extends n2 {
  static copy(t2, r4) {
    r4._set("x", t2._get("x")), r4._set("y", t2._get("y")), r4._set("z", t2._get("z")), r4._set("m", t2._get("m"));
    const s4 = t2._get("spatialReference");
    r4._set("spatialReference", g.isFrozen(s4) ? s4 : s4.clone());
  }
  constructor(...t2) {
    super(...t2), this.x = 0, this.y = 0, this.z = void 0, this.m = void 0, this.type = "point";
  }
  normalizeCtorArgs(t2, e3, s4, i2, o3) {
    let l3;
    if (Array.isArray(t2)) l3 = t2, o3 = e3, t2 = l3[0], e3 = l3[1], s4 = l3[2], i2 = l3[3];
    else if (t2 && "object" == typeof t2) {
      if (l3 = t2, t2 = null != l3.x ? l3.x : l3.longitude, e3 = null != l3.y ? l3.y : l3.latitude, s4 = l3.z, i2 = l3.m, (o3 = l3.spatialReference) && "esri.geometry.SpatialReference" !== o3.declaredClass && (o3 = new g2(o3)), null != l3.longitude || null != l3.latitude) {
        if (null == l3.longitude) n.getLogger(this).warn(".longitude=", "Latitude was defined without longitude");
        else if (null == l3.latitude) n.getLogger(this).warn(".latitude=", "Longitude was defined without latitude");
        else if (!l3.declaredClass && (o3 == null ? void 0 : o3.isWebMercator)) {
          const r4 = d2(l3.longitude, l3.latitude, w);
          t2 = r4[0], e3 = r4[1];
        }
      }
    } else x2(s4) ? (o3 = s4, s4 = null) : x2(i2) && (o3 = i2, i2 = null);
    const a4 = { x: t2, y: e3 };
    return null == a4.x && null != a4.y ? n.getLogger(this).warn(".y=", "Y coordinate was defined without an X coordinate") : null == a4.y && null != a4.x && n.getLogger(this).warn(".x=", "X coordinate was defined without a Y coordinate"), null != o3 && (a4.spatialReference = o3), null != s4 && (a4.z = s4), null != i2 && (a4.m = i2), a4;
  }
  get cache() {
    return this.commitProperty("x"), this.commitProperty("y"), this.commitProperty("z"), this.commitProperty("m"), this.commitProperty("spatialReference"), {};
  }
  get hasM() {
    return void 0 !== this.m;
  }
  set hasM(t2) {
    t2 !== (void 0 !== this._get("m")) && (this._set("m", t2 ? 0 : void 0), this._set("hasM", t2));
  }
  get hasZ() {
    return void 0 !== this.z;
  }
  set hasZ(t2) {
    t2 !== (void 0 !== this._get("z")) && (this._set("z", t2 ? 0 : void 0), this._set("hasZ", t2));
  }
  get latitude() {
    return l2(this);
  }
  set latitude(t2) {
    const { spatialReference: e3, x: r4 } = this;
    null != t2 && e3 && (e3.isWebMercator ? this._set("y", d2(r4, t2, w)[1]) : e3.isGeographic && this._set("y", t2), this._set("latitude", t2));
  }
  get longitude() {
    return u2(this);
  }
  set longitude(t2) {
    const { y: e3, spatialReference: r4 } = this;
    null != t2 && r4 && (r4.isWebMercator ? this._set("x", d2(t2, e3, w)[0]) : r4.isGeographic && this._set("x", t2), this._set("longitude", t2));
  }
  writeX(t2, e3, r4) {
    e3[r4] = isNaN(t2) ? "NaN" : t2;
  }
  readX(t2) {
    return "string" == typeof t2 ? NaN : t2;
  }
  clone() {
    const t2 = new g4();
    return t2.x = this.x, t2.y = this.y, t2.z = this.z, t2.m = this.m, t2.spatialReference = this.spatialReference, t2;
  }
  copy(t2) {
    return g4.copy(t2, this), this;
  }
  equals(t2) {
    if (null == t2) return false;
    const { x: e3, y: r4, z: s4, m: i2, spatialReference: o3 } = this, { z: l3, m: a4 } = t2;
    let { x: n3, y: u3, spatialReference: p2 } = t2;
    if (!o3.equals(p2)) if (o3.isWebMercator && p2.isWGS84) [n3, u3] = d2(n3, u3), p2 = o3;
    else {
      if (!o3.isWGS84 || !p2.isWebMercator) return false;
      [n3, u3] = R(n3, u3), p2 = o3;
    }
    return e3 === n3 && r4 === u3 && s4 === l3 && i2 === a4 && o3.wkid === p2.wkid;
  }
  offset(t2, e3, r4) {
    return this.x += t2, this.y += e3, null != r4 && (this.z = (this.z ?? 0) + r4), this;
  }
  normalize() {
    if (!this.spatialReference) return this;
    const t2 = d(this.spatialReference);
    if (!t2) return this;
    let e3 = this.x;
    const [r4, s4] = t2.valid, i2 = 2 * s4;
    let o3;
    return e3 > s4 ? (o3 = Math.ceil(Math.abs(e3 - s4) / i2), e3 -= o3 * i2) : e3 < r4 && (o3 = Math.ceil(Math.abs(e3 - r4) / i2), e3 += o3 * i2), this._set("x", e3), this;
  }
  distance(t2) {
    return e2(this, t2);
  }
  toArray() {
    const t2 = this.hasZ, e3 = this.hasM;
    return t2 && e3 ? [this.x, this.y, this.z, this.m] : t2 ? [this.x, this.y, this.z] : e3 ? [this.x, this.y, this.m] : [this.x, this.y];
  }
  toJSON(t2) {
    return this.write({}, t2);
  }
};
r([m({ readOnly: true })], _.prototype, "cache", null), r([m({ type: Boolean, json: { read: false, write: { enabled: false, overridePolicy: null } } })], _.prototype, "hasM", null), r([m({ type: Boolean, json: { read: false, write: { enabled: false, overridePolicy: null } } })], _.prototype, "hasZ", null), r([m({ type: Number })], _.prototype, "latitude", null), r([m({ type: Number })], _.prototype, "longitude", null), r([m({ type: Number, json: { type: [Number, String], write: { isRequired: true, allowNull: true } } }), s2((t2) => isNaN(t2) ? t2 : a2(t2))], _.prototype, "x", void 0), r([r2("x")], _.prototype, "writeX", null), r([o("x")], _.prototype, "readX", null), r([m({ type: Number, json: { write: true } })], _.prototype, "y", void 0), r([m({ type: Number, json: { write: { overridePolicy() {
  return { enabled: this.hasZ };
} } } })], _.prototype, "z", void 0), r([m({ type: Number, json: { write: { overridePolicy() {
  return { enabled: this.hasM };
} } } })], _.prototype, "m", void 0), _ = g4 = r([a3("esri.geometry.Point")], _), _.prototype.toJSON.isDefaultToJSON = true;
var j2 = _;

export {
  n2 as n,
  e,
  r3 as r,
  h,
  M,
  y,
  d2 as d,
  R,
  j,
  S3 as S,
  e2,
  i,
  j2
};
//# sourceMappingURL=chunk-YUVX6H42.js.map
