import {
  i,
  s,
  u
} from "./chunk-U6JFTJMZ.js";
import {
  N,
  q
} from "./chunk-XEBZUAYT.js";
import {
  H,
  h
} from "./chunk-G34KEQQG.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/layers/graphics/densificationConstants.js
function e() {
  return has("curve-densification-coarse-segments");
}
function n() {
  return has("curve-densification-max-segments");
}
function i2() {
  return has("curve-densification-min-segments");
}
function r() {
  return has("curve-densification-pixels-per-segment");
}

// node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js
var d = class {
  constructor(e4, t, s2) {
    this.uid = e4, this.geometry = t, this.attributes = s2, this.visible = true, this.objectId = null, this.centroid = null;
  }
};
function b(e4) {
  return null != e4.geometry;
}
var x = class {
  constructor() {
    this.exceededTransferLimit = false, this.features = [], this.fields = [], this.hasM = false, this.hasZ = false, this.geometryType = null, this.objectIdFieldName = null, this.globalIdFieldName = null, this.geometryProperties = null, this.geohashFieldName = null, this.spatialReference = null, this.transform = null;
  }
};
function F(n2) {
  if (null == n2) return 0;
  switch (n2.type) {
    case "point":
      return s + 10 + 8 + 24;
    case "polyline":
    case "polygon": {
      let t = 0;
      const r2 = 2 + (n2.hasZ ? 1 : 0) + (n2.hasM ? 1 : 0), i3 = "polyline" === n2.type ? n2.paths : n2.rings, o = "polyline" === n2.type ? n2.curvePaths : n2.curveRings;
      if (o == null ? void 0 : o.length) {
        const e4 = 3 * n() * 128;
        t = 8 * e4 * r2 + 128 * e4 + 32 * (i3.length + 1);
      } else t = u(i3);
      return s + 64 + t + 34;
    }
    case "multipoint": {
      const t = u(n2.points);
      return s + t + 64 + 34 + 32;
    }
    case "extent":
      return s + 10 + 64 + 34;
    case "mesh": {
      const s2 = n2.vertexAttributes;
      return s + i(s2.position, s2.normal, s2.uv, s2.tangent);
    }
    default:
      return s;
  }
}
function v(e4, t) {
  switch (q(t), "mesh" === e4.type && (e4 = e4.extent), e4.type) {
    case "point":
      t[0] = t[3] = e4.x, t[1] = t[4] = e4.y, e4.hasZ && (t[2] = t[5] = e4.z);
      break;
    case "polyline":
      for (let s2 = 0; s2 < e4.paths.length; s2++) N(t, e4.paths[s2], !!e4.hasZ);
      break;
    case "polygon":
      for (let s2 = 0; s2 < e4.rings.length; s2++) N(t, e4.rings[s2], !!e4.hasZ);
      break;
    case "multipoint":
      N(t, e4.points, !!e4.hasZ);
      break;
    case "extent":
      t[0] = e4.xmin, t[1] = e4.ymin, t[3] = e4.xmax, t[4] = e4.ymax, null != e4.zmin && (t[2] = e4.zmin), null != e4.zmax && (t[5] = e4.zmax);
  }
}
function z(e4, t) {
  switch (H(t), "mesh" === e4.type && (e4 = e4.extent), e4.type) {
    case "point":
      t[0] = t[2] = e4.x, t[1] = t[3] = e4.y;
      break;
    case "polyline":
      for (let s2 = 0; s2 < e4.paths.length; s2++) h(t, e4.paths[s2]);
      break;
    case "polygon":
      for (let s2 = 0; s2 < e4.rings.length; s2++) h(t, e4.rings[s2]);
      break;
    case "multipoint":
      h(t, e4.points);
      break;
    case "extent":
      t[0] = e4.xmin, t[1] = e4.ymin, t[2] = e4.xmax, t[3] = e4.ymax;
  }
}
function R(e4, t) {
  return null != e4.objectId ? e4.objectId : e4.attributes && t ? e4.attributes[t] : null;
}
function w(e4, t, s2, n2) {
  if ((t == null ? void 0 : t.size) && null != s2 && e4) for (const r2 in e4) {
    if (!t.has(r2)) continue;
    const i3 = e4[r2];
    "string" == typeof i3 && i3.length > s2 && (n2(r2), e4[r2] = "");
  }
}

export {
  e,
  n,
  i2 as i,
  r,
  d,
  b,
  x,
  F,
  v,
  z,
  R,
  w
};
//# sourceMappingURL=chunk-HS463BGE.js.map
