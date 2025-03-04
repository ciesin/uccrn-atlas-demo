import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  m as m2
} from "./chunk-HP7OWCUK.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  a as a2
} from "./chunk-UNGOQUF2.js";
import {
  i
} from "./chunk-WE4EKKVR.js";
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

// node_modules/@arcgis/core/portal/timeUnitKebabDictionary.js
var e = i()({ esriTimeUnitsMilliseconds: "milliseconds", esriTimeUnitsSeconds: "seconds", esriTimeUnitsMinutes: "minutes", esriTimeUnitsHours: "hours", esriTimeUnitsDays: "days", esriTimeUnitsWeeks: "weeks", esriTimeUnitsMonths: "months", esriTimeUnitsYears: "years", esriTimeUnitsDecades: "decades", esriTimeUnitsCenturies: "centuries", esriTimeUnitsUnknown: void 0 });

// node_modules/@arcgis/core/time/TimeInterval.js
var m3 = class extends a3.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.unit = "milliseconds", this.value = 0;
  }
  toMilliseconds() {
    return m2(this.value, this.unit, "milliseconds");
  }
};
r([r3(e, { nonNullable: true })], m3.prototype, "unit", void 0), r([m({ type: Number, json: { write: true }, nonNullable: true })], m3.prototype, "value", void 0), m3 = r([a("esri.time.TimeInterval")], m3);
var l = m3;

// node_modules/@arcgis/core/layers/support/TimeInfo.js
function p2(t, e2) {
  return l.fromJSON({ value: t, unit: e2 });
}
var u = class extends a3.ClonableMixin(S) {
  constructor(t) {
    super(t), this.cumulative = false, this.endField = null, this.fullTimeExtent = null, this.hasLiveData = false, this.interval = null, this.startField = null, this.timeZone = null, this.trackIdField = null, this.useTime = true, this.stops = null;
  }
  readFullTimeExtent(t, e2) {
    return e2.timeExtent && Array.isArray(e2.timeExtent) && 2 === e2.timeExtent.length ? p.fromArray(e2.timeExtent) : null;
  }
  writeFullTimeExtent(t, e2) {
    null != (t == null ? void 0 : t.start) && null != t.end ? e2.timeExtent = t.toArray() : e2.timeExtent = null;
  }
  readInterval(t, e2) {
    return e2.timeInterval && e2.timeIntervalUnits ? p2(e2.timeInterval, e2.timeIntervalUnits) : e2.defaultTimeInterval && e2.defaultTimeIntervalUnits ? p2(e2.defaultTimeInterval, e2.defaultTimeIntervalUnits) : null;
  }
  writeInterval(t, e2) {
    e2.timeInterval = (t == null ? void 0 : t.toJSON().value) ?? null, e2.timeIntervalUnits = (t == null ? void 0 : t.toJSON().unit) ?? null;
  }
};
r([m({ type: Boolean, json: { name: "exportOptions.timeDataCumulative", write: true } })], u.prototype, "cumulative", void 0), r([m({ type: String, json: { name: "endTimeField", write: { enabled: true, allowNull: true } } })], u.prototype, "endField", void 0), r([m({ type: p, json: { write: { enabled: true, allowNull: true } } })], u.prototype, "fullTimeExtent", void 0), r([o("fullTimeExtent", ["timeExtent"])], u.prototype, "readFullTimeExtent", null), r([r2("fullTimeExtent")], u.prototype, "writeFullTimeExtent", null), r([m({ type: Boolean, json: { write: true } })], u.prototype, "hasLiveData", void 0), r([m({ type: l, json: { write: { enabled: true, allowNull: true } } })], u.prototype, "interval", void 0), r([o("interval", ["timeInterval", "timeIntervalUnits", "defaultTimeInterval", "defaultTimeIntervalUnits"])], u.prototype, "readInterval", null), r([r2("interval")], u.prototype, "writeInterval", null), r([m({ type: String, json: { name: "startTimeField", write: { enabled: true, allowNull: true } } })], u.prototype, "startField", void 0), r([m(a2("timeReference", true))], u.prototype, "timeZone", void 0), r([m({ type: String, json: { write: { enabled: true, allowNull: true } } })], u.prototype, "trackIdField", void 0), r([m({ type: Boolean, json: { name: "exportOptions.useTime", write: true } })], u.prototype, "useTime", void 0), r([m({ type: [Date], json: { read: false } })], u.prototype, "stops", void 0), u = r([a("esri.layers.support.TimeInfo")], u);
var d = u;

export {
  e,
  l,
  d
};
//# sourceMappingURL=chunk-LVOCICBG.js.map
