import {
  a as a3
} from "./chunk-7FHK22OY.js";
import {
  C
} from "./chunk-F23MXZYK.js";
import {
  m as m2
} from "./chunk-J6MQFQDT.js";
import {
  l as l2
} from "./chunk-LVOCICBG.js";
import {
  p as p2
} from "./chunk-SCNACYSF.js";
import {
  S as S2,
  u
} from "./chunk-HCXUWF52.js";
import {
  l,
  p
} from "./chunk-WZ7EFR6C.js";
import {
  q
} from "./chunk-LCBD3JEK.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
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
import {
  e
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/TrackPartInfo.js
var a4 = class extends a2.ClonableMixin(S) {
  constructor(o) {
    super(o), this.labelingInfo = null, this.labelsVisible = true, this.renderer = null, this.visible = true;
  }
};
r([m({ type: [C], json: { write: true } })], a4.prototype, "labelingInfo", void 0), r([m(p)], a4.prototype, "labelsVisible", void 0), r([m({ types: m2, json: { write: true } })], a4.prototype, "renderer", void 0), r([m({ type: Boolean, json: { write: true } })], a4.prototype, "visible", void 0), a4 = r([a("esri.layers.support.TrackPartInfo")], a4);
var n = a4;

// node_modules/@arcgis/core/layers/support/TrackInfo.js
var u2 = class extends a2.ClonableMixin(S) {
  constructor(e3) {
    super(e3), this.enabled = true, this.fields = [], this.latestObservations = new n({ renderer: new p2({ symbol: S2.clone() }) }), this.maxDisplayDuration = null, this.maxDisplayObservationsPerTrack = 0, this.popupEnabled = true, this.popupTemplate = null, this.previousObservations = new n({ renderer: new p2({ symbol: S2.clone() }) }), this.trackLines = new n({ renderer: new p2({ symbol: u.clone() }) }), this.timeField = "startTimeField";
  }
  writeFields(e3, o, r3) {
    const t = e3.filter((e4) => "avg_angle" !== e4.statisticType).map((e4) => e4.toJSON());
    e(r3, t, o);
  }
};
r([m({ type: Boolean, json: { write: true } })], u2.prototype, "enabled", void 0), r([m({ type: [a3], json: { write: true } })], u2.prototype, "fields", void 0), r([r2("fields")], u2.prototype, "writeFields", null), r([m({ type: n, json: { write: true } })], u2.prototype, "latestObservations", void 0), r([m({ type: l2, json: { write: true } })], u2.prototype, "maxDisplayDuration", void 0), r([m({ type: Number, json: { write: true } })], u2.prototype, "maxDisplayObservationsPerTrack", void 0), r([m(l)], u2.prototype, "popupEnabled", void 0), r([m({ type: q, json: { name: "popupInfo", write: true } })], u2.prototype, "popupTemplate", void 0), r([m({ type: n, json: { write: true } })], u2.prototype, "previousObservations", void 0), r([m({ type: n, json: { write: true } })], u2.prototype, "trackLines", void 0), r([m({ type: ["timeReceived", "startTimeField", "endTimeField"], json: { read: true, write: true } })], u2.prototype, "timeField", void 0), u2 = r([a("esri.layers.support.TrackInfo")], u2);
var f = u2;

// node_modules/@arcgis/core/layers/mixins/TrackableLayer.js
var e2 = (e3) => {
  let c = class extends e3 {
    constructor() {
      super(...arguments), this.trackInfo = null;
    }
  };
  return r([m({ type: f })], c.prototype, "trackInfo", void 0), c = r([a("esri.layers.mixins.TrackableLayer")], c), c;
};

export {
  e2 as e
};
//# sourceMappingURL=chunk-4KVDFBS3.js.map
