import {
  N,
  b,
  j,
  q
} from "./chunk-NJTJZUTI.js";
import {
  m as m2,
  o as o2
} from "./chunk-DMO5AKFB.js";
import {
  n as n4
} from "./chunk-GTKHPYCP.js";
import {
  m,
  n as n3
} from "./chunk-O2L6JAHP.js";
import {
  L
} from "./chunk-K35H6D4D.js";
import {
  H,
  o,
  s as s2
} from "./chunk-UMYFDXOJ.js";
import {
  a,
  n
} from "./chunk-3ATECVKT.js";
import {
  n as n2
} from "./chunk-JLFSX3JT.js";
import {
  s2 as s,
  x
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/views/support/angularMeasurementUtils.js
var j2;
function R(e, t) {
  if (null == e || null == t) return;
  const i = b2(e, t);
  return null != i ? o2(i, "radians", "geographic") : void 0;
}
!function(e) {
  e.Absolute = "absolute", e.Relative = "relative", e.RelativeBilateral = "relative-bilateral";
}(j2 || (j2 = {}));
var b2 = (() => {
  const e = n2(), t = n2();
  return (r, i) => (o(e, r.x, r.y, r.z ?? 0), o(t, i.x, i.y, i.z ?? 0), y(e, t, r.spatialReference, i.spatialReference));
})();
var y = (() => {
  const e = n3(), t = n2(), r = n2();
  return (i, s3, c, u) => {
    if (H(i, s3)) return;
    const f = N(c), v = N(u);
    if (f && v && s(f, v) && n4(i, c, t, f) && n4(s3, u, r, v)) {
      const { azimuth: e2 } = q(k, t, r, f);
      return null != e2 ? x(e2, "degrees", "radians") : void 0;
    }
    e[0] = s3[0] - i[0], e[1] = s3[1] - i[1];
    let d = L(m, e);
    return e[0] < 0 && (d = q2 - d), d;
  };
})();
function x2(e, t, r, i = j2.Absolute) {
  if (t && r) switch (i) {
    case j2.Absolute:
      return R(t, r);
    case j2.Relative:
      return w(z(e, t, r), j2.Relative);
    case j2.RelativeBilateral:
      return w(z(e, t, r), j2.RelativeBilateral);
  }
}
function z(e, t, i) {
  if (!e || !t || !i) return;
  const o3 = b2(e, t), n5 = b2(t, i);
  return null != o3 && null != n5 ? o2(n5 - o3, "radians", "geographic") : void 0;
}
function w(e, t) {
  if (null != e) switch (t) {
    case j2.Absolute:
      return A(e);
    case j2.Relative: {
      const t2 = T(e);
      let i = I.normalize(t2, 0, true);
      return -180 === i && (i = 180), o2(i, "degrees", "geographic");
    }
    case j2.RelativeBilateral: {
      const t2 = T(e), i = Math.abs(I.normalize(t2, 0, true));
      return o2(i, "degrees", "geographic");
    }
  }
}
function A(e) {
  const t = T(e), i = C.normalize(t, 0, true);
  return o2(i, "degrees", "geographic");
}
var M = (() => {
  const e = n2();
  return (t, r, n5, a2, s3, l = "geodesic") => {
    s2(e, r);
    const f = T(s3);
    if ("geodesic" === l) {
      const i = N(n5);
      if (i && n4(e, n5, e, i)) return j(t, e, f, a2, i), t[2] = r[2], !!n4(t, i, t, n5);
    }
    const p = m2(f, "geographic", "arithmetic"), d = x(p, "degrees", "radians"), h = r[0] + a2 * Math.cos(d), j3 = r[1] + a2 * Math.sin(d), R2 = r[2];
    return o(t, h, j3, R2), true;
  };
})();
function T(e) {
  if (null != e) return m2(V(e), e.rotationType, "geographic");
}
function U(e) {
  if (null != e) return m2(V(e), e.rotationType, "arithmetic");
}
function V(e) {
  return x(e.value, e.unit, "degrees");
}
var k = new b();
var q2 = 2 * Math.PI;
var C = a;
var I = new n(-180, 180);

export {
  j2 as j,
  R,
  y,
  x2 as x,
  w,
  A,
  M,
  T,
  U
};
//# sourceMappingURL=chunk-JUMO2VIG.js.map
