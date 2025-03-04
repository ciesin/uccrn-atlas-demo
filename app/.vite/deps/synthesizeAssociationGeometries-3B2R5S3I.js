import {
  d
} from "./chunk-QWAJYOS6.js";
import "./chunk-6MP23PR5.js";
import "./chunk-CXW7QK2T.js";
import {
  f,
  i,
  s
} from "./chunk-D4CSBMND.js";
import "./chunk-W633AKTD.js";
import "./chunk-G34KEQQG.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/rest/networks/support/AssociationGeometriesResult.js
var p = class extends S {
  constructor(o) {
    super(o), this.maxGeometryCountExceeded = false, this.associations = [];
  }
};
r([m({ type: Boolean, json: { write: true } })], p.prototype, "maxGeometryCountExceeded", void 0), r([m({ type: [d], json: { write: true } })], p.prototype, "associations", void 0), p = r([a("esri.rest.networks.support.AssociationGeometriesResult")], p);
var i2 = p;

// node_modules/@arcgis/core/rest/networks/synthesizeAssociationGeometries.js
async function n(r2, n2, a2) {
  const c = f(r2), f2 = { ...n2.toJSON(), f: "json" }, m2 = s({ ...c.query, ...f2 });
  a2 ? a2.method = "post" : a2 = { method: "post" };
  const p2 = i(m2, a2), u = `${c.path}/synthesizeAssociationGeometries`;
  return P(u, p2).then((t) => i3(t, n2.outSpatialReference));
}
function i3(t, e) {
  const { data: o } = t;
  if (e) for (const s2 of o.associations) s2.geometry.spatialReference || (s2.geometry.spatialReference = e.clone());
  return i2.fromJSON(o);
}
export {
  n as synthesizeAssociationGeometries
};
//# sourceMappingURL=synthesizeAssociationGeometries-3B2R5S3I.js.map
