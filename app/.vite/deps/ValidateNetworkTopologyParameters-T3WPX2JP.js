import {
  c
} from "./chunk-6MP23PR5.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  h
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

// node_modules/@arcgis/core/rest/networks/support/ValidateNetworkTopologyParameters.js
var n;
var c2 = n = class extends S {
  static from(t) {
    return h(n, t);
  }
  constructor(t) {
    super(t), this.gdbVersion = null, this.sessionID = null, this.validationType = null, this.validateArea = null, this.validationSet = null, this.outSpatialReference = null;
  }
  writeOutSR(t, o, e) {
    if (null != t) {
      const { wkid: r3, latestWkid: s, wkt: i, wkt2: p } = t;
      o[e] = JSON.stringify({ wkid: r3 ?? void 0, latestWkid: s ?? void 0, wkt: i ?? void 0, wkt2: p ?? void 0 });
    }
  }
};
r([m({ type: String, json: { write: true } })], c2.prototype, "gdbVersion", void 0), r([m({ type: String, json: { write: true } })], c2.prototype, "sessionID", void 0), r([m({ type: c.apiValues, json: { type: c.jsonValues, read: c.read, write: c.write } })], c2.prototype, "validationType", void 0), r([m({ type: w, json: { write: true } })], c2.prototype, "validateArea", void 0), r([m({ type: [Object], json: { write: true } })], c2.prototype, "validationSet", void 0), r([m({ type: g, json: { write: { allowNull: true, target: "outSR" } } })], c2.prototype, "outSpatialReference", void 0), r([r2("outSpatialReference")], c2.prototype, "writeOutSR", null), c2 = n = r([a("esri.rest.networks.support.ValidateNetworkTopologyParameters")], c2);
var d = c2;
export {
  d as default
};
//# sourceMappingURL=ValidateNetworkTopologyParameters-T3WPX2JP.js.map
