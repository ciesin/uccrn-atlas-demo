import {
  c
} from "./chunk-5UCWBFBR.js";
import {
  d
} from "./chunk-ONZPKEDE.js";
import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  f
} from "./chunk-D4CSBMND.js";

// node_modules/@arcgis/core/rest/query/executeQueryJSON.js
async function s(r, t, e) {
  const s2 = await a(r, t, e);
  return d.fromJSON(s2);
}
async function a(o, s2, a2) {
  const n = f(o), i = { ...a2 }, p = b.from(s2), { data: u } = await c(n, p, p.sourceSpatialReference, i);
  return u;
}

export {
  s,
  a
};
//# sourceMappingURL=chunk-3B5XHATW.js.map
