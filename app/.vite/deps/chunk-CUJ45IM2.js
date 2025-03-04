import {
  p
} from "./chunk-LTPPCHKR.js";
import {
  e
} from "./chunk-K24WU5UX.js";
import {
  c,
  i,
  r as r2,
  u
} from "./chunk-LH36NQSN.js";
import {
  o as o3
} from "./chunk-K35H6D4D.js";
import {
  N,
  o as o2
} from "./chunk-UMYFDXOJ.js";
import {
  X
} from "./chunk-4WERUJEK.js";
import {
  j
} from "./chunk-T7KGE6VP.js";
import {
  o
} from "./chunk-G34KEQQG.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/support/mediaLayerUtils.js
var n2 = Symbol("ImageElementInstance");
var e2 = Symbol("VideoElementInstance");
function t(e3) {
  return null != e3 && "object" == typeof e3 && n2 in e3;
}
function o4(n4) {
  return null != n4 && "object" == typeof n4 && e2 in n4;
}
function c2(n4) {
  return t(n4) || o4(n4);
}

// node_modules/@arcgis/core/layers/support/MediaElementView.js
var m2 = class extends g {
  constructor(o5) {
    super(o5);
  }
  get bounds() {
    const o5 = this.coords;
    return null == (o5 == null ? void 0 : o5.extent) ? null : o(o5.extent);
  }
  get coords() {
    var _a;
    const o5 = (_a = this.element.georeference) == null ? void 0 : _a.coords;
    return X(o5, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return j.fromJSON(p(this.coords));
  }
  get normalizedBounds() {
    const o5 = null != this.normalizedCoords ? this.normalizedCoords.extent : null;
    return null != o5 ? o(o5) : null;
  }
};
r([m()], m2.prototype, "spatialReference", void 0), r([m()], m2.prototype, "element", void 0), r([m()], m2.prototype, "bounds", null), r([m()], m2.prototype, "coords", null), r([m()], m2.prototype, "normalizedCoords", null), r([m()], m2.prototype, "normalizedBounds", null), m2 = r([a("esri.layers.support.MediaElementView")], m2);

// node_modules/@arcgis/core/core/perspectiveUtils.js
var f = n();
var n3 = e();
var l = e();
var u2 = e();
function p2(r3, s, i2) {
  return o2(f, s[0], s[1], 1), N(f, f, u(n3, i2)), 0 === f[2] ? o3(r3, f[0], f[1]) : o3(r3, f[0] / f[2], f[1] / f[2]);
}
function j2(t2, i2, m3) {
  return x(l, i2[0], i2[1], i2[2], i2[3], i2[4], i2[5], i2[6], i2[7]), x(u2, m3[0], m3[1], m3[2], m3[3], m3[4], m3[5], m3[6], m3[7]), i(t2, c(l, l), u2), 0 !== t2[8] && (t2[0] /= t2[8], t2[1] /= t2[8], t2[2] /= t2[8], t2[3] /= t2[8], t2[4] /= t2[8], t2[5] /= t2[8], t2[6] /= t2[8], t2[7] /= t2[8], t2[8] /= t2[8]), t2;
}
function x(m3, o5, c3, l2, u3, p3, j3, x2, b) {
  r2(m3, o5, l2, p3, c3, u3, j3, 1, 1, 1), o2(f, x2, b, 1), c(n3, m3);
  const [g2, h, v] = N(f, f, u(n3, n3));
  return r2(n3, g2, 0, 0, 0, h, 0, 0, 0, v), i(m3, n3, m3);
}

export {
  p2 as p,
  j2 as j,
  n2 as n,
  e2 as e,
  o4 as o,
  c2 as c,
  m2 as m
};
//# sourceMappingURL=chunk-CUJ45IM2.js.map
