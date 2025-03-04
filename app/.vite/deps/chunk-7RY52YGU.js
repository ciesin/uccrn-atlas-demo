import {
  R,
  y
} from "./chunk-NJTJZUTI.js";
import {
  M
} from "./chunk-67XXGAOA.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  S,
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  N,
  Q
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/views/2d/grid/constants.js
var o = 50;
var t = 5;

// node_modules/@arcgis/core/views/2d/grid/gridUtils.js
function a(e, t2) {
  return Math.log(e) / Math.log(t2);
}
function l(e, t2, r) {
  const o2 = 1 === e ? 10 : e;
  return o2 ** (r ? Math.round(a(o / t2, o2)) : 0);
}
function f(e) {
  const { isGeographic: t2, isWebMercator: r } = e;
  return !t2 && !r;
}
function u(c, a2, l2) {
  const u2 = "number" == typeof c ? null : c, y2 = l2 ?? (u2 == null ? void 0 : u2.spatialReference);
  if (null == y2 || !N(y2) || f(y2)) return Q(y2);
  let g2 = (u2 == null ? void 0 : u2.x) ?? c, j2 = (u2 == null ? void 0 : u2.y) ?? a2;
  const h = 1 / Math.sqrt(2);
  let M2 = g2 + h, x = j2 + h;
  const { isWebMercator: R2, isGeographic: U } = y2;
  let b = U && !y(y2) ? g.WGS84 : y2;
  if (R2) {
    let e = new j({ x: g2, y: j2, spatialReference: y2 });
    S(e, true, e), g2 = e.x, j2 = e.y, e = new j({ x: M2, y: x, spatialReference: y2 }), S(e, true, e), M2 = e.x, x = e.y, b = g.WGS84;
  }
  const w = new P({ paths: [[[g2, j2], [M2, x]]], spatialReference: b }), G = M(w, 10);
  let W;
  try {
    [W] = R([G], "meters");
  } catch {
    return Q(y2);
  }
  return W;
}

export {
  t,
  l,
  u
};
//# sourceMappingURL=chunk-7RY52YGU.js.map
