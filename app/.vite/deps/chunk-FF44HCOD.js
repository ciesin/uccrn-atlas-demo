import {
  i
} from "./chunk-AVY6RZDG.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/CodedValue.js
var t;
var p = t = class extends S {
  constructor(r3) {
    super(r3), this.name = null, this.code = null;
  }
  clone() {
    return new t({ name: this.name, code: this.code });
  }
};
r([m({ type: String, json: { write: { isRequired: true } } })], p.prototype, "name", void 0), r([m({ type: [String, Number], json: { write: { isRequired: true } } })], p.prototype, "code", void 0), p = t = r([a2("esri.layers.support.CodedValue")], p);

// node_modules/@arcgis/core/layers/support/Domain.js
var c = new o({ inherited: "inherited", codedValue: "coded-value", range: "range" });
var i2 = class extends S {
  constructor(o3) {
    super(o3), this.name = null, this.type = null;
  }
};
r([m({ type: String, json: { write: true } })], i2.prototype, "name", void 0), r([r2(c), m({ json: { write: { isRequired: true } } })], i2.prototype, "type", void 0), i2 = r([a2("esri.layers.support.Domain")], i2);
var a3 = i2;

// node_modules/@arcgis/core/layers/support/CodedValueDomain.js
var d;
var i3 = d = class extends a3 {
  constructor(e) {
    super(e), this.codedValues = null, this.type = "coded-value";
  }
  getName(e) {
    let o3 = null;
    if (this.codedValues) {
      const r3 = String(e);
      this.codedValues.some((e2) => (String(e2.code) === r3 && (o3 = e2.name), !!o3));
    }
    return o3;
  }
  clone() {
    return new d({ codedValues: a(this.codedValues), name: this.name });
  }
};
r([m({ type: [p], json: { write: { isRequired: true } } })], i3.prototype, "codedValues", void 0), r([r2({ codedValue: "coded-value" })], i3.prototype, "type", void 0), i3 = d = r([a2("esri.layers.support.CodedValueDomain")], i3);
var p2 = i3;

// node_modules/@arcgis/core/layers/support/InheritedDomain.js
var t2;
var i4 = t2 = class extends a3 {
  constructor(r3) {
    super(r3), this.type = "inherited";
  }
  clone() {
    return new t2();
  }
};
r([r2({ inherited: "inherited" })], i4.prototype, "type", void 0), i4 = t2 = r([a2("esri.layers.support.InheritedDomain")], i4);
var p3 = i4;

// node_modules/@arcgis/core/layers/support/RangeDomain.js
var s;
var i5 = s = class extends a3 {
  constructor(e) {
    super(e), this.maxValue = null, this.minValue = null, this.type = "range";
  }
  clone() {
    return new s({ maxValue: this.maxValue, minValue: this.minValue, name: this.name });
  }
};
r([m({ json: { type: [Number], read: { source: "range", reader: (e, r3) => {
  var _a;
  return (_a = r3.range) == null ? void 0 : _a[1];
} }, write: { enabled: false, overridePolicy() {
  return { enabled: null != this.maxValue && null == this.minValue };
}, target: "range", writer(e, r3, o3) {
  r3[o3] = [this.minValue || 0, e];
}, isRequired: true } } })], i5.prototype, "maxValue", void 0), r([m({ json: { type: [Number], read: { source: "range", reader: (e, r3) => {
  var _a;
  return (_a = r3.range) == null ? void 0 : _a[0];
} }, write: { target: "range", writer(e, r3, o3) {
  r3[o3] = [e, this.maxValue || 0];
}, isRequired: true } } })], i5.prototype, "minValue", void 0), r([r2({ range: "range" })], i5.prototype, "type", void 0), i5 = s = r([a2("esri.layers.support.RangeDomain")], i5);
var n = i5;

// node_modules/@arcgis/core/layers/support/domains.js
var n2 = { key: "type", base: a3, typeMap: { range: n, "coded-value": p2, inherited: p3 } };
function i6(r3) {
  if (!(r3 == null ? void 0 : r3.type)) return null;
  switch (r3.type) {
    case "range":
      return n.fromJSON(r3);
    case "codedValue":
      return p2.fromJSON(r3);
    case "inherited":
      return p3.fromJSON(r3);
  }
  return null;
}

// node_modules/@arcgis/core/layers/support/Field.js
var u;
var c2 = new o({ binary: "binary", coordinate: "coordinate", countOrAmount: "count-or-amount", dateAndTime: "date-and-time", description: "description", locationOrPlaceName: "location-or-place-name", measurement: "measurement", nameOrTitle: "name-or-title", none: "none", orderedOrRanked: "ordered-or-ranked", percentageOrRatio: "percentage-or-ratio", typeOrCategory: "type-or-category", uniqueIdentifier: "unique-identifier" });
var m2 = u = class extends S {
  constructor(e) {
    super(e), this.alias = null, this.defaultValue = void 0, this.description = null, this.domain = null, this.editable = true, this.length = void 0, this.name = null, this.nullable = true, this.type = null, this.valueType = null, this.visible = true;
  }
  readDescription(e, { description: t3 }) {
    let o3 = null;
    try {
      o3 = t3 ? JSON.parse(t3) : null;
    } catch (r3) {
    }
    return (o3 == null ? void 0 : o3.value) ?? null;
  }
  readValueType(e, { description: t3 }) {
    let o3 = null;
    try {
      o3 = t3 ? JSON.parse(t3) : null;
    } catch (r3) {
    }
    return o3 ? c2.fromJSON(o3.fieldValueType) : null;
  }
  clone() {
    var _a;
    return new u({ alias: this.alias, defaultValue: this.defaultValue, description: this.description, domain: ((_a = this.domain) == null ? void 0 : _a.clone()) ?? null, editable: this.editable, length: this.length, name: this.name, nullable: this.nullable, type: this.type, valueType: this.valueType, visible: this.visible });
  }
};
r([m({ type: String, json: { write: true } })], m2.prototype, "alias", void 0), r([m({ type: [String, Number], json: { write: { allowNull: true } } })], m2.prototype, "defaultValue", void 0), r([m()], m2.prototype, "description", void 0), r([o2("description")], m2.prototype, "readDescription", null), r([m({ types: n2, json: { read: { reader: i6 }, write: true } })], m2.prototype, "domain", void 0), r([m({ type: Boolean, json: { write: true } })], m2.prototype, "editable", void 0), r([m({ type: x, json: { write: { overridePolicy: (e) => ({ enabled: Number.isFinite(e) }) } } })], m2.prototype, "length", void 0), r([m({ type: String, json: { write: true } })], m2.prototype, "name", void 0), r([m({ type: Boolean, json: { write: true } })], m2.prototype, "nullable", void 0), r([r2(i)], m2.prototype, "type", void 0), r([m()], m2.prototype, "valueType", void 0), r([o2("valueType", ["description"])], m2.prototype, "readValueType", null), r([m({ type: Boolean, json: { read: false } })], m2.prototype, "visible", void 0), m2 = u = r([a2("esri.layers.support.Field")], m2);
var y = m2;

export {
  p,
  p2,
  n2 as n,
  i6 as i,
  y
};
//# sourceMappingURL=chunk-FF44HCOD.js.map
