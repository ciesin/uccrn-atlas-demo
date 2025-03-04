import {
  d
} from "./chunk-QWAJYOS6.js";
import {
  i as i2
} from "./chunk-6MP23PR5.js";
import {
  f,
  i,
  s as s2
} from "./chunk-D4CSBMND.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m,
  s2 as s
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/networks/support/QueryAssociationsResult.js
var p = class extends S {
  constructor(o) {
    super(o), this.associations = [];
  }
};
r([m({ type: [d], json: { write: true } })], p.prototype, "associations", void 0), p = r([a("esri.rest.networks.support.QueryAssociationsResult")], p);
var c = p;

// node_modules/@arcgis/core/rest/networks/queryAssociations.js
function a2(e) {
  const { returnDeletes: t, elements: r2, gdbVersion: s3, moment: n2 } = e.toJSON();
  return { returnDeletes: t, elements: JSON.stringify(r2.map((e2) => ({ globalId: e2.globalId, networkSourceId: e2.networkSourceId, terminalId: e2.terminalId }))), types: JSON.stringify(e.types.map((e2) => i2.toJSON(e2))).replaceAll('"connectivity"', '"junctionJunctionConnectivity"'), gdbVersion: s3, moment: n2 };
}
async function p2(o, p3, m2) {
  const u = f(o), l = { ...a2(p3), f: "json" }, y = s2({ ...u.query, ...l }), d2 = i(y, { ...m2, method: "post" }), f2 = `${u.path}/associations/query`, { data: g } = await P(f2, d2), j = c.fromJSON(g);
  return p3.types.includes("connectivity") && s(n.getLogger("esri/rest/networks/support/QueryAssociationsParameters"), "types", { replacement: "Please use 'junction-junction-connectivity' instead of 'connectivity'.", see: "https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types", version: "4.29", warnOnce: true }), j;
}

export {
  p2 as p
};
//# sourceMappingURL=chunk-XUSH2QIE.js.map
