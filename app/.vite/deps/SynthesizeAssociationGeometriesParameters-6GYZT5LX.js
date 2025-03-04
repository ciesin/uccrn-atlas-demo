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

// node_modules/@arcgis/core/rest/networks/support/SynthesizeAssociationGeometriesParameters.js
var c;
var p = c = class extends S {
  static from(t) {
    return h(c, t);
  }
  constructor(t) {
    super(t), this.returnAttachmentAssociations = false, this.returnConnectivityAssociations = false, this.returnContainmentAssociations = false, this.extent = null, this.maxGeometryCount = null, this.outSpatialReference = null, this.gdbVersion = null, this.moment = null;
  }
  writeOutSR(t, o, e) {
    if (null != t) {
      const { wkid: r3, latestWkid: s, wkt: i, wkt2: n } = t;
      o[e] = JSON.stringify({ wkid: r3 ?? void 0, latestWkid: s ?? void 0, wkt: i ?? void 0, wkt2: n ?? void 0 });
    }
  }
};
r([m({ type: Boolean, json: { read: { source: "attachmentAssociations" }, write: { target: "attachmentAssociations" } } })], p.prototype, "returnAttachmentAssociations", void 0), r([m({ type: Boolean, json: { read: { source: "connectivityAssociations" }, write: { target: "connectivityAssociations" } } })], p.prototype, "returnConnectivityAssociations", void 0), r([m({ type: Boolean, json: { read: { source: "containmentAssociations" }, write: { target: "containmentAssociations" } } })], p.prototype, "returnContainmentAssociations", void 0), r([m({ type: w, json: { write: true } })], p.prototype, "extent", void 0), r([m({ type: Number, json: { write: true } })], p.prototype, "maxGeometryCount", void 0), r([m({ type: g, json: { write: { target: "outSR" } } })], p.prototype, "outSpatialReference", void 0), r([r2("outSpatialReference")], p.prototype, "writeOutSR", null), r([m({ type: String, json: { write: true } })], p.prototype, "gdbVersion", void 0), r([m({ type: Date, json: { type: Number, write: { writer: (t, o) => {
  o.moment = t == null ? void 0 : t.getTime();
} } } })], p.prototype, "moment", void 0), p = c = r([a("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")], p);
var m2 = p;
export {
  m2 as default
};
//# sourceMappingURL=SynthesizeAssociationGeometriesParameters-6GYZT5LX.js.map
