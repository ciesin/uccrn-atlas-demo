import {
  s2 as s
} from "./chunk-56B7NEQF.js";
import {
  o as o2
} from "./chunk-6MP23PR5.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-7AOPU62X.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
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

// node_modules/@arcgis/core/rest/networks/support/TraceLocation.js
var i = new o({ startingPoint: "starting-point", barrier: "barrier" });
var p = class extends S {
  constructor(r3) {
    super(r3), this.globalId = null, this.isFilterBarrier = false, this.percentAlong = null, this.terminalId = null, this.type = null;
  }
};
r([m({ type: String, json: { write: true } })], p.prototype, "globalId", void 0), r([m({ type: Boolean, json: { write: true } })], p.prototype, "isFilterBarrier", void 0), r([m({ type: Number, json: { write: true } })], p.prototype, "percentAlong", void 0), r([m({ type: Number, json: { write: true } })], p.prototype, "terminalId", void 0), r([m({ type: i.apiValues, json: { type: i.jsonValues, read: { reader: i.read, source: "traceLocationType" }, write: { writer: i.write, target: "traceLocationType" } } })], p.prototype, "type", void 0), p = r([a("esri.rest.networks.support.TraceLocation")], p);
var a2 = p;

// node_modules/@arcgis/core/rest/networks/support/TraceParameters.js
var l;
var u = l = class extends S {
  static from(t) {
    return h(l, t);
  }
  constructor(t) {
    super(t), this.namedTraceConfigurationGlobalId = null, this.gdbVersion = null, this.traceLocations = [], this.moment = null, this.outSpatialReference = null, this.traceConfiguration = null, this.resultTypes = null, this.traceType = null;
  }
  writeOutSR(t, o3, r3) {
    if (null != t) {
      const { wkid: e, latestWkid: i2, wkt: s2, wkt2: p2 } = t;
      o3[r3] = JSON.stringify({ wkid: e ?? void 0, latestWkid: i2 ?? void 0, wkt: s2 ?? void 0, wkt2: p2 ?? void 0 });
    }
  }
};
r([m({ type: String, json: { read: { source: "traceConfigurationGlobalId" }, write: { target: "traceConfigurationGlobalId" } } })], u.prototype, "namedTraceConfigurationGlobalId", void 0), r([m({ type: String, json: { write: true } })], u.prototype, "gdbVersion", void 0), r([m({ type: [a2], json: { write: true } })], u.prototype, "traceLocations", void 0), r([m({ type: Date, json: { type: Number, write: { writer: (t, o3) => {
  o3.moment = t ? t.getTime() : null;
} } } })], u.prototype, "moment", void 0), r([m({ type: g, json: { write: { allowNull: true, target: "outSR" } } })], u.prototype, "outSpatialReference", void 0), r([r2("outSpatialReference")], u.prototype, "writeOutSR", null), r([m({ type: s, json: { write: true } })], u.prototype, "traceConfiguration", void 0), r([m({ type: [Object], json: { write: true } })], u.prototype, "resultTypes", void 0), r([m({ type: o2.apiValues, json: { type: o2.jsonValues, read: o2.read, write: o2.write } })], u.prototype, "traceType", void 0), u = l = r([a("esri.rest.networks.support.TraceParameters")], u);
var m2 = u;
export {
  m2 as default
};
//# sourceMappingURL=TraceParameters-X653GOQB.js.map
