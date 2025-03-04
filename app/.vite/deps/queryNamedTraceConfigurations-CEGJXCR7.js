import {
  d
} from "./chunk-B344ZGRN.js";
import "./chunk-56B7NEQF.js";
import "./chunk-6MP23PR5.js";
import "./chunk-JLW377TH.js";
import {
  f,
  i,
  s
} from "./chunk-D4CSBMND.js";
import "./chunk-5ESATYIQ.js";
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

// node_modules/@arcgis/core/rest/networks/support/QueryNamedTraceConfigurationsResult.js
var a2 = class extends S {
  constructor(r2) {
    super(r2), this.namedTraceConfigurations = [];
  }
};
r([m({ type: [d], json: { read: { source: "traceConfigurations" }, write: { target: "traceConfigurations" } } })], a2.prototype, "namedTraceConfigurations", void 0), a2 = r([a("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")], a2);
var c = a2;

// node_modules/@arcgis/core/rest/networks/queryNamedTraceConfigurations.js
async function e(e2, n, g) {
  const i2 = f(e2), l = n.toJSON();
  n.globalIds && n.globalIds.length > 0 && (l.globalIds = JSON.stringify(n.globalIds)), n.creators && n.creators.length > 0 && (l.creators = JSON.stringify(n.creators)), n.tags && n.tags.length > 0 && (l.tags = JSON.stringify(n.tags)), n.names && n.names.length > 0 && (l.names = JSON.stringify(n.names));
  const m2 = { ...l, f: "json" }, f2 = s({ ...i2.query, ...m2 }), u = i(f2, { ...g, method: "post" }), c2 = `${i2.path}/traceConfigurations/query`, { data: p } = await P(c2, u);
  return c.fromJSON(p);
}
export {
  e as queryNamedTraceConfigurations
};
//# sourceMappingURL=queryNamedTraceConfigurations-CEGJXCR7.js.map
