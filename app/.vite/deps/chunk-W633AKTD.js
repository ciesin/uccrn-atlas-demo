import {
  u
} from "./chunk-G34KEQQG.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n
} from "./chunk-YUVX6H42.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
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
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/boundsUtils.js
function t(n2) {
  return void 0 !== n2.xmin && void 0 !== n2.ymin && void 0 !== n2.xmax && void 0 !== n2.ymax;
}
function i(n2) {
  return void 0 !== n2.points;
}
function o(n2) {
  return void 0 !== n2.x && void 0 !== n2.y;
}
function e(n2) {
  return void 0 !== n2.paths;
}
function r3(n2) {
  return void 0 !== n2.rings;
}
function u2(n2) {
  function t3(t4, i2) {
    return null == t4 ? i2 : null == i2 ? t4 : n2(t4, i2);
  }
  return t3;
}
var l = u2(Math.min);
var h = u2(Math.max);
function a3(n2, u5) {
  return e(u5) ? x(n2, u5.paths, false, false) : r3(u5) ? x(n2, u5.rings, false, false) : i(u5) ? g2(n2, u5.points, false, false, false, false) : t(u5) ? s(n2, u5) : (o(u5) && (n2[0] = u5.x, n2[1] = u5.y, n2[2] = u5.x, n2[3] = u5.y), n2);
}
function c(t3) {
  let i2, o3, e3, r5;
  for (t3.reset(), i2 = e3 = 1 / 0, o3 = r5 = -1 / 0; t3.nextPath(); ) {
    const n2 = f(t3);
    i2 = Math.min(n2[0], i2), e3 = Math.min(n2[1], e3), o3 = Math.max(n2[2], o3), r5 = Math.max(n2[3], r5);
  }
  return u([i2, e3, o3, r5]);
}
function f(t3) {
  let i2, o3, e3, r5;
  for (i2 = e3 = 1 / 0, o3 = r5 = -1 / 0; t3.nextPoint(); ) i2 = Math.min(t3.x, i2), e3 = Math.min(t3.y, e3), o3 = Math.max(t3.x, o3), r5 = Math.max(t3.y, r5);
  return u([i2, e3, o3, r5]);
}
function m2(n2, u5) {
  return e(u5) ? x(n2, u5.paths, true, false) : r3(u5) ? x(n2, u5.rings, true, false) : i(u5) ? g2(n2, u5.points, true, false, true, false) : t(u5) ? s(n2, u5, true, false, true, false) : (o(u5) && (n2[0] = u5.x, n2[1] = u5.y, n2[2] = u5.z, n2[3] = u5.x, n2[4] = u5.y, n2[5] = u5.z), n2);
}
function x(n2, t3, i2, o3) {
  const e3 = i2 ? 3 : 2;
  if (!t3.length || !t3[0].length) return null;
  let r5, u5, a5, c4, [f4, m5] = t3[0][0], [x3, s3] = t3[0][0];
  for (let g3 = 0; g3 < t3.length; g3++) {
    const n3 = t3[g3];
    for (let t4 = 0; t4 < n3.length; t4++) {
      const g4 = n3[t4], [y3, d2] = g4;
      if (f4 = l(f4, y3), m5 = l(m5, d2), x3 = h(x3, y3), s3 = h(s3, d2), i2 && g4.length > 2) {
        const n4 = g4[2];
        r5 = l(r5, n4), u5 = h(u5, n4);
      }
      if (o3 && g4.length > e3) {
        const n4 = g4[e3];
        a5 = l(r5, n4), c4 = h(u5, n4);
      }
    }
  }
  return i2 ? o3 ? (n2[0] = f4, n2[1] = m5, n2[2] = r5, n2[3] = a5, n2[4] = x3, n2[5] = s3, n2[6] = u5, n2[7] = c4, n2.length = 8, n2) : (n2[0] = f4, n2[1] = m5, n2[2] = r5, n2[3] = x3, n2[4] = s3, n2[5] = u5, n2.length = 6, n2) : o3 ? (n2[0] = f4, n2[1] = m5, n2[2] = a5, n2[3] = x3, n2[4] = s3, n2[5] = c4, n2.length = 6, n2) : (n2[0] = f4, n2[1] = m5, n2[2] = x3, n2[3] = s3, n2.length = 4, n2);
}
function s(n2, t3, i2, o3, e3, r5) {
  const u5 = t3.xmin, l3 = t3.xmax, h4 = t3.ymin, a5 = t3.ymax;
  let c4 = t3.zmin, f4 = t3.zmax, m5 = t3.mmin, x3 = t3.mmax;
  return e3 ? (c4 = c4 || 0, f4 = f4 || 0, r5 ? (m5 = m5 || 0, x3 = x3 || 0, n2[0] = u5, n2[1] = h4, n2[2] = c4, n2[3] = m5, n2[4] = l3, n2[5] = a5, n2[6] = f4, n2[7] = x3, n2) : (n2[0] = u5, n2[1] = h4, n2[2] = c4, n2[3] = l3, n2[4] = a5, n2[5] = f4, n2)) : r5 ? (m5 = m5 || 0, x3 = x3 || 0, n2[0] = u5, n2[1] = h4, n2[2] = m5, n2[3] = l3, n2[4] = a5, n2[5] = x3, n2) : (n2[0] = u5, n2[1] = h4, n2[2] = l3, n2[3] = a5, n2);
}
function g2(n2, t3, i2, o3, e3, r5) {
  const u5 = i2 ? 3 : 2, a5 = o3 && r5, c4 = i2 && e3;
  if (!t3.length || !t3[0].length) return null;
  let f4, m5, x3, s3, [g3, y3] = t3[0], [d2, M] = t3[0];
  for (let v2 = 0; v2 < t3.length; v2++) {
    const n3 = t3[v2], [i3, o4] = n3;
    if (g3 = l(g3, i3), y3 = l(y3, o4), d2 = h(d2, i3), M = h(M, o4), c4 && n3.length > 2) {
      const t4 = n3[2];
      f4 = l(f4, t4), m5 = h(m5, t4);
    }
    if (a5 && n3.length > u5) {
      const t4 = n3[u5];
      x3 = l(f4, t4), s3 = h(m5, t4);
    }
  }
  return e3 ? (f4 = f4 || 0, m5 = m5 || 0, r5 ? (x3 = x3 || 0, s3 = s3 || 0, n2[0] = g3, n2[1] = y3, n2[2] = f4, n2[3] = x3, n2[4] = d2, n2[5] = M, n2[6] = m5, n2[7] = s3, n2) : (n2[0] = g3, n2[1] = y3, n2[2] = f4, n2[3] = d2, n2[4] = M, n2[5] = m5, n2)) : r5 ? (x3 = x3 || 0, s3 = s3 || 0, n2[0] = g3, n2[1] = y3, n2[2] = x3, n2[3] = d2, n2[4] = M, n2[5] = s3, n2) : (n2[0] = g3, n2[1] = y3, n2[2] = d2, n2[3] = M, n2);
}

// node_modules/@arcgis/core/geometry/support/extentUtils.js
function t2(n2) {
  return void 0 !== n2.xmin && void 0 !== n2.ymin && void 0 !== n2.xmax && void 0 !== n2.ymax;
}
function u3(n2) {
  return void 0 !== n2.points;
}
function m3(n2) {
  return void 0 !== n2.x && void 0 !== n2.y;
}
function o2(n2) {
  return void 0 !== n2.paths;
}
function r4(n2) {
  return void 0 !== n2.rings;
}
var x2 = [];
function a4(n2, i2, t3, u5) {
  return { xmin: n2, ymin: i2, xmax: t3, ymax: u5 };
}
function c2(n2, i2, t3, u5, m5, o3) {
  return { xmin: n2, ymin: i2, zmin: t3, xmax: u5, ymax: m5, zmax: o3 };
}
function s2(n2, i2, t3, u5, m5, o3) {
  return { xmin: n2, ymin: i2, mmin: t3, xmax: u5, ymax: m5, mmax: o3 };
}
function e2(n2, i2, t3, u5, m5, o3, r5, x3) {
  return { xmin: n2, ymin: i2, zmin: t3, mmin: u5, xmax: m5, ymax: o3, zmax: r5, mmax: x3 };
}
function f2(n2, i2 = false, t3 = false) {
  return i2 ? t3 ? e2(n2[0], n2[1], n2[2], n2[3], n2[4], n2[5], n2[6], n2[7]) : c2(n2[0], n2[1], n2[2], n2[3], n2[4], n2[5]) : t3 ? s2(n2[0], n2[1], n2[2], n2[3], n2[4], n2[5]) : a4(n2[0], n2[1], n2[2], n2[3]);
}
function l2(n2) {
  return n2 ? t2(n2) ? n2 : m3(n2) ? d(n2) : r4(n2) ? v(n2) : o2(n2) ? h2(n2) : u3(n2) ? y(n2) : null : null;
}
function y(i2) {
  const { hasZ: t3, hasM: u5, points: m5 } = i2;
  return f2(g2(x2, m5, t3 ?? false, u5 ?? false), t3, u5);
}
function d(n2) {
  const { x: i2, y: t3, z: u5, m: m5 } = n2, o3 = null != m5;
  return null != u5 ? o3 ? e2(i2, t3, u5, m5, i2, t3, u5, m5) : c2(i2, t3, u5, i2, t3, u5) : o3 ? s2(i2, t3, m5, i2, t3, m5) : a4(i2, t3, i2, t3);
}
function v(n2) {
  const { hasZ: t3, hasM: u5, rings: m5 } = n2, o3 = x(x2, m5, t3 ?? false, u5 ?? false);
  return o3 ? f2(o3, t3, u5) : null;
}
function h2(n2) {
  const { hasZ: t3, hasM: u5, paths: m5 } = n2, o3 = x(x2, m5, t3 ?? false, u5 ?? false);
  return o3 ? f2(o3, t3, u5) : null;
}

// node_modules/@arcgis/core/geometry/support/zmUtils.js
function h3(h4, a5, s3 = false) {
  let { hasM: t3, hasZ: e3 } = h4;
  Array.isArray(a5) ? 4 !== a5.length || t3 || e3 ? 3 === a5.length && s3 && !t3 ? (e3 = true, t3 = false) : 3 === a5.length && t3 && e3 && (t3 = false, e3 = false) : (t3 = true, e3 = true) : (e3 = !e3 && a5.hasZ && (!t3 || a5.hasM), t3 = !t3 && a5.hasM && (!e3 || a5.hasZ)), h4.hasZ = e3, h4.hasM = t3;
}

// node_modules/@arcgis/core/geometry/Polyline.js
var c3;
function u4(t3) {
  return !Array.isArray(t3[0]);
}
function f3(t3) {
  var _a;
  return "number" == typeof ((_a = t3[0]) == null ? void 0 : _a[0]);
}
function m4(t3) {
  var _a, _b;
  if (!t3) return;
  let { paths: e3, hasM: s3, hasZ: r5, spatialReference: i2 } = t3;
  switch (e3 ?? (e3 = []), f3(e3) && (e3 = [e3]), (_b = (_a = e3[0]) == null ? void 0 : _a[0]) == null ? void 0 : _b.length) {
    case 4:
      r5 ?? (r5 = true), s3 ?? (s3 = true);
      break;
    case 3:
      r5 ?? (r5 = true !== s3), s3 ?? (s3 = !r5);
      break;
    default:
      r5 ?? (r5 = false), s3 ?? (s3 = false);
  }
  return i2 ?? (i2 = g.WGS84), { ...t3, hasM: s3, hasZ: r5, paths: e3, spatialReference: i2 };
}
var y2 = c3 = class extends n {
  constructor(t3) {
    super(m4(t3)), this.curvePaths = void 0, this.paths = [], this.type = "polyline";
  }
  get cache() {
    return this.commitProperty("curvePaths"), this.commitProperty("hasM"), this.commitProperty("hasZ"), this.commitProperty("paths"), this.commitProperty("spatialReference"), {};
  }
  writeCurvePaths(t3, s3) {
    s3.curvePaths = a(t3);
  }
  get extent() {
    const t3 = h2(this), { spatialReference: e3 } = this;
    return t3 ? new w({ ...t3, spatialReference: e3 }) : null;
  }
  writePaths(t3, s3) {
    s3.paths = a(this.paths);
  }
  addPath(t3) {
    if (!t3) return;
    const e3 = this.paths, s3 = e3.length;
    if (u4(t3)) {
      const r5 = [];
      for (let e4 = 0, s4 = t3.length; e4 < s4; e4++) r5[e4] = t3[e4].toArray();
      e3[s3] = r5;
    } else e3[s3] = t3.slice();
    return this.notifyChange("paths"), this;
  }
  clone() {
    const t3 = new c3();
    return t3.spatialReference = this.spatialReference, t3.paths = a(this.paths), t3.curvePaths = a(this.curvePaths), t3.hasZ = this.hasZ, t3.hasM = this.hasM, t3;
  }
  getPoint(t3, e3) {
    if (!this._validateInputs(t3, e3)) return null;
    const s3 = this.paths[t3][e3], r5 = this.hasZ, i2 = this.hasM;
    return r5 && !i2 ? new j(s3[0], s3[1], s3[2], void 0, this.spatialReference) : i2 && !r5 ? new j(s3[0], s3[1], void 0, s3[2], this.spatialReference) : r5 && i2 ? new j(s3[0], s3[1], s3[2], s3[3], this.spatialReference) : new j(s3[0], s3[1], this.spatialReference);
  }
  insertPoint(t3, e3, s3) {
    return this._validateInputs(t3, e3, true) ? (h3(this, s3), Array.isArray(s3) || (s3 = s3.toArray()), this.paths[t3].splice(e3, 0, s3), this.notifyChange("paths"), this) : this;
  }
  removePath(t3) {
    if (!this._validateInputs(t3, null)) return null;
    const e3 = this.paths.splice(t3, 1)[0], s3 = this.spatialReference, r5 = e3.map((t4) => new j(t4, s3));
    return this.notifyChange("paths"), r5;
  }
  removePoint(t3, e3) {
    if (!this._validateInputs(t3, e3)) return null;
    const s3 = new j(this.paths[t3].splice(e3, 1)[0], this.spatialReference);
    return this.notifyChange("paths"), s3;
  }
  setPoint(t3, e3, s3) {
    return this._validateInputs(t3, e3) ? (h3(this, s3), Array.isArray(s3) || (s3 = s3.toArray()), this.paths[t3][e3] = s3, this.notifyChange("paths"), this) : this;
  }
  _validateInputs(t3, e3, s3 = false) {
    if (null == t3 || t3 < 0 || t3 >= this.paths.length) return false;
    if (null != e3) {
      const r5 = this.paths[t3];
      if (s3 && (e3 < 0 || e3 > r5.length)) return false;
      if (!s3 && (e3 < 0 || e3 >= r5.length)) return false;
    }
    return true;
  }
  toJSON(t3) {
    return this.write({}, t3);
  }
};
r([m({ readOnly: true })], y2.prototype, "cache", null), r([m({ json: { write: true, origins: { "portal-item": { write: false }, "web-map": { write: false }, "web-scene": { write: false } } } })], y2.prototype, "curvePaths", void 0), r([r2("curvePaths")], y2.prototype, "writeCurvePaths", null), r([m({ readOnly: true })], y2.prototype, "extent", null), r([m({ type: [[[Number]]], json: { write: { isRequired: true } } })], y2.prototype, "paths", void 0), r([r2("paths")], y2.prototype, "writePaths", null), y2 = c3 = r([a2("esri.geometry.Polyline")], y2);
var P = y2;
y2.prototype.toJSON.isDefaultToJSON = true;

export {
  h3 as h,
  a3 as a,
  c,
  f,
  m2 as m,
  x,
  l2 as l,
  v,
  P
};
//# sourceMappingURL=chunk-W633AKTD.js.map
