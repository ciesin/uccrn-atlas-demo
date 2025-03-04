import {
  S as S2,
  l,
  o,
  r,
  s,
  t,
  y as y2
} from "./chunk-ZCYDEY6S.js";
import {
  m3 as m
} from "./chunk-PUC7IJYJ.js";
import {
  S,
  y
} from "./chunk-4WO6KUCB.js";
import {
  d
} from "./chunk-2Y4TRKRB.js";

// node_modules/@arcgis/core/symbols/support/defaults.js
var S3 = y.fromJSON(l);
var u = d.fromJSON(o);
var c = S.fromJSON(S2);
var a = m.fromJSON(t);
function J(r2) {
  if (null == r2) return null;
  switch (r2.type) {
    case "mesh":
      return null;
    case "point":
    case "multipoint":
      return S3;
    case "polyline":
      return u;
    case "polygon":
    case "extent":
      return c;
  }
  return null;
}
var N = y.fromJSON(r);
var O = d.fromJSON(s);
var y3 = S.fromJSON(y2);

export {
  S3 as S,
  u,
  c,
  a,
  J,
  N,
  O,
  y3 as y
};
//# sourceMappingURL=chunk-HCXUWF52.js.map
