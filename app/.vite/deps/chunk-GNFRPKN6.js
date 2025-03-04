import {
  m as m2
} from "./chunk-YLPB3XO6.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  i,
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  e
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/support/AttributeBinsGrouping.js
var a3 = new o({ esriFieldTypeInteger: "integer", esriFieldTypeString: "string" });
var l = class extends a2.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.alias = null, this.responseType = null, this.type = null, this.value = null, this.valueType = null;
  }
};
r([m({ type: String, json: { name: "outAlias", write: true } })], l.prototype, "alias", void 0), r([m({ type: String })], l.prototype, "responseType", void 0), r([m({ type: String, json: { write: true } })], l.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], l.prototype, "value", void 0), r([r2(a3)], l.prototype, "valueType", void 0), l = r([a("esri.rest.support.AttributeBinsGrouping")], l);
var c = l;
l.from = w(l);

// node_modules/@arcgis/core/rest/support/BinParametersBase.js
var l2 = new o({ esriFieldTypeSmallInteger: "small-integer", esriFieldTypeInteger: "integer", esriFieldTypeSingle: "single", esriFieldTypeDouble: "double", esriFieldTypeLong: "long", esriFieldTypeDate: "date", esriFieldTypeDateOnly: "date-only", esriFieldTypeTimeOnly: "time-only", esriFieldTypeTimestampOffset: "timestamp-offset" });
var a4 = new o({ naturalLog: "natural-log", squareRoot: "square-root" });
var y = class extends a2.ClonableMixin(S) {
  constructor(e2) {
    super(e2), this.expression = null, this.expressionValueType = null, this.field = null, this.firstDayOfWeek = null, this.hideUpperBound = null, this.splitBy = null, this.stackBy = null, this.transformation = null;
  }
};
r([m({ type: String, json: { name: "onExpression.value", write: true } })], y.prototype, "expression", void 0), r([r2(l2, { name: "onExpression.valueType" })], y.prototype, "expressionValueType", void 0), r([m({ type: String, json: { name: "onField", write: true } })], y.prototype, "field", void 0), r([m({ type: String, json: { write: true } })], y.prototype, "firstDayOfWeek", void 0), r([m({ type: String, json: { write: true } })], y.prototype, "hideUpperBound", void 0), r([m({ type: c, json: { write: { overridePolicy() {
  var _a, _b;
  return { enabled: null != ((_a = this.splitBy) == null ? void 0 : _a.value) || null != ((_b = this.splitBy) == null ? void 0 : _b.type) };
} } } })], y.prototype, "splitBy", void 0), r([m({ type: c, json: { write: { target: { stackBy: { type: c }, jsonStyle: { type: String } }, writer: (e2, t) => {
  e2 && (t.stackBy = e2.toJSON(), null != e2.responseType && (t.jsonStyle = e2.responseType));
}, overridePolicy() {
  var _a, _b;
  return { enabled: null != ((_a = this.stackBy) == null ? void 0 : _a.value) || null != ((_b = this.stackBy) == null ? void 0 : _b.type) };
} }, read: { source: ["stackBy", "jsonStyle"], reader: (e2, t) => c.fromJSON({ ...t.stackBy, responseType: t.jsonStyle }) } } })], y.prototype, "stackBy", void 0), r([r2(a4)], y.prototype, "transformation", void 0), y = r([a("esri.rest.support.BinParametersBase")], y);
var u = y;

// node_modules/@arcgis/core/rest/support/AutoIntervalBinParameters.js
function p(r3, e2, o2) {
  e(o2, r3 instanceof Date ? r3.getTime() : r3, e2);
}
var m3 = class extends m2(u) {
  constructor(r3) {
    super(r3), this.numBins = null, this.end = null, this.start = null, this.type = "auto-interval";
  }
};
r([m({ type: Number, json: { name: "parameters.numberOfBins", write: true } })], m3.prototype, "numBins", void 0), r([m({ json: { name: "parameters.end", write: { writer: p } } })], m3.prototype, "end", void 0), r([m({ json: { name: "parameters.start", write: { writer: p } } })], m3.prototype, "start", void 0), r([r2({ autoIntervalBin: "auto-interval" }, { readOnly: true })], m3.prototype, "type", void 0), m3 = r([a("esri.rest.support.AutoIntervalBinParameters")], m3);
var c2 = m3;
m3.from = w(m3);

// node_modules/@arcgis/core/rest/support/DateBinTimeInterval.js
var m4 = i()({ year: "years", quarter: "quarters", month: "months", week: "weeks", day: "days", hour: "hours", minute: "minutes", second: "seconds" });
var n = class extends a2.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.value = null, this.unit = null;
  }
};
r([m({ type: Number, json: { name: "number", write: true } })], n.prototype, "value", void 0), r([r2(m4)], n.prototype, "unit", void 0), n = r([a("esri.rest.support.DateBinTimeInterval")], n);
var u2 = n;
n.from = w(n);

// node_modules/@arcgis/core/rest/support/DateBinParameters.js
function i2(t, r3, o2) {
  e(o2, "string" == typeof t ? t : t == null ? void 0 : t.getTime(), r3);
}
function l3(t, e2) {
  const r3 = t.parameters[e2];
  return r3 ? "string" == typeof r3 ? r3 : new Date(r3) : null;
}
var m5 = class extends u {
  constructor(t) {
    super(t), this.end = null, this.interval = null, this.offset = null, this.returnFullIntervalBin = null, this.start = null, this.snapToData = null, this.type = "date";
  }
};
r([m({ cast: (t) => null != t ? "string" == typeof t ? t : new Date(t) : null, json: { name: "parameters.end", read: { reader: (t, e2) => l3(e2, "end") }, write: { writer: i2 } } })], m5.prototype, "end", void 0), r([m({ type: u2, json: { name: "parameters", write: true } })], m5.prototype, "interval", void 0), r([m({ type: u2, json: { name: "parameters.offset", write: true } })], m5.prototype, "offset", void 0), r([m({ type: Boolean, json: { name: "parameters.returnFullIntervalBin", write: true } })], m5.prototype, "returnFullIntervalBin", void 0), r([m({ cast: (t) => null != t ? "string" == typeof t ? t : new Date(t) : null, json: { name: "parameters.start", read: { reader: (t, e2) => l3(e2, "start") }, write: { writer: i2 } } })], m5.prototype, "start", void 0), r([m({ type: String, json: { name: "parameters.snapToData", write: true } })], m5.prototype, "snapToData", void 0), r([r2({ dateBin: "date" }, { readOnly: true })], m5.prototype, "type", void 0), m5 = r([a("esri.rest.support.DateBinParameters")], m5);
var u3 = m5;
m5.from = w(m5);

// node_modules/@arcgis/core/rest/support/FixedBoundariesBinParameters.js
function p2(r3) {
  return r3[0] instanceof Date;
}
function c3(r3, e2, s) {
  e(s, r3 && p2(r3) ? r3.map((r4) => r4.getTime()) : r3, e2);
}
var n2 = class extends u {
  constructor(r3) {
    super(r3), this.boundaries = [], this.type = "fixed-boundaries";
  }
};
r([m({ json: { name: "parameters.boundaries", write: { writer: c3 } } })], n2.prototype, "boundaries", void 0), r([r2({ fixedBoundariesBin: "fixed-boundaries" }, { readOnly: true })], n2.prototype, "type", void 0), n2 = r([a("esri.rest.support.FixedBoundariesBinParameters")], n2);
var m6 = n2;
n2.from = w(n2);

// node_modules/@arcgis/core/rest/support/FixedIntervalBinParameters.js
function n3(r3, t, o2) {
  e(o2, r3 instanceof Date ? r3.getTime() : r3, t);
}
var m7 = class extends m2(u) {
  constructor(r3) {
    super(r3), this.end = null, this.interval = null, this.start = null, this.type = "fixed-interval";
  }
};
r([m({ json: { name: "parameters.end", write: { writer: n3 } } })], m7.prototype, "end", void 0), r([m({ type: Number, json: { name: "parameters.interval", write: true } })], m7.prototype, "interval", void 0), r([m({ json: { name: "parameters.start", write: { writer: n3 } } })], m7.prototype, "start", void 0), r([r2({ fixedIntervalBin: "fixed-interval" }, { readOnly: true })], m7.prototype, "type", void 0), m7 = r([a("esri.rest.support.FixedIntervalBinParameters")], m7);
var c4 = m7;
m7.from = w(m7);

export {
  u,
  c2 as c,
  u3 as u2,
  m6 as m,
  c4 as c2
};
//# sourceMappingURL=chunk-GNFRPKN6.js.map
