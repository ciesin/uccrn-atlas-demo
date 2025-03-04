import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  G2 as G,
  I,
  T,
  p2 as p,
  p3 as p2,
  u
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var p3 = new g(T);
var l = new g(G);
var f = new g(p2);
var w = new g(u);
function a(e) {
  const t = c.get(e);
  if (t) return t;
  let s = p3;
  if (e) if (e === l) s = l;
  else if (e === f) s = f;
  else {
    const t2 = e.wkid, n = e.latestWkid;
    if (null != t2 || null != n) I(t2) || I(n) ? s = l : (p(t2) || p(n)) && (s = f);
    else {
      const t3 = e.wkt2 ?? e.wkt;
      if (t3) {
        const e2 = t3.toUpperCase();
        e2 === k ? s = l : e2 === m && (s = f);
      }
    }
  }
  return c.set(e, s), s;
}
var c = /* @__PURE__ */ new Map();
var k = l.wkt.toUpperCase();
var m = f.wkt.toUpperCase();

export {
  w,
  a
};
//# sourceMappingURL=chunk-H2PMLL3X.js.map
