import {
  s
} from "./chunk-KWOLBNIK.js";
import {
  _
} from "./chunk-6REABBOQ.js";
import {
  o as o3
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
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
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  o2
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js
var i2;
var p = i2 = class extends S {
  constructor(r3) {
    super(r3);
  }
  async collectRequiredFields(r3, s2) {
    return _(r3, s2, this.expression);
  }
  clone() {
    return new i2({ expression: this.expression, title: this.title });
  }
  equals(r3) {
    return this.expression === r3.expression && this.title === r3.title;
  }
};
r([m({ type: String, json: { write: { isRequired: true } } })], p.prototype, "expression", void 0), r([m({ type: String, json: { write: true } })], p.prototype, "title", void 0), p = i2 = r([a("esri.symbols.support.FeatureExpressionInfo")], p);
var n = p;

// node_modules/@arcgis/core/symbols/support/ElevationInfo.js
var l;
var m2 = i()({ onTheGround: "on-the-ground", relativeToGround: "relative-to-ground", relativeToScene: "relative-to-scene", absoluteHeight: "absolute-height" });
var d = new o({ foot: "feet", kilometer: "kilometers", meter: "meters", mile: "miles", "us-foot": "us-feet", yard: "yards" });
var c = l = class extends S {
  constructor(e) {
    super(e), this.featureExpressionInfo = void 0, this.offset = null;
  }
  readFeatureExpressionInfo(e, o4) {
    return null != e ? e : o4.featureExpression && 0 === o4.featureExpression.value ? { expression: "0" } : void 0;
  }
  writeFeatureExpressionInfo(e, o4, r3, t) {
    o4[r3] = e.write({}, t), "0" === e.expression && (o4.featureExpression = { value: 0 });
  }
  get mode() {
    const { offset: e, featureExpressionInfo: o4 } = this;
    return this._isOverridden("mode") ? this._get("mode") : null != e || o4 ? "relative-to-ground" : "on-the-ground";
  }
  set mode(e) {
    this._override("mode", e);
  }
  set unit(e) {
    this._set("unit", e);
  }
  write(e, o4) {
    return this.offset || this.mode || this.featureExpressionInfo || this.unit ? super.write(e, o4) : null;
  }
  clone() {
    return new l({ mode: this.mode, offset: this.offset, featureExpressionInfo: this.featureExpressionInfo ? this.featureExpressionInfo.clone() : void 0, unit: this.unit });
  }
  equals(e) {
    return this.mode === e.mode && this.offset === e.offset && this.unit === e.unit && o2(this.featureExpressionInfo, e.featureExpressionInfo);
  }
};
r([m({ type: n, json: { write: true } })], c.prototype, "featureExpressionInfo", void 0), r([o3("featureExpressionInfo", ["featureExpressionInfo", "featureExpression"])], c.prototype, "readFeatureExpressionInfo", null), r([r2("featureExpressionInfo", { featureExpressionInfo: { type: n }, "featureExpression.value": { type: [0] } })], c.prototype, "writeFeatureExpressionInfo", null), r([m({ type: m2.apiValues, nonNullable: true, json: { type: m2.jsonValues, read: m2.read, write: { writer: m2.write, isRequired: true } } })], c.prototype, "mode", null), r([m({ type: Number, json: { write: true } })], c.prototype, "offset", void 0), r([m({ type: s, json: { type: String, read: d.read, write: d.write } })], c.prototype, "unit", null), c = l = r([a("esri.symbols.support.ElevationInfo")], c);
var h = c;

export {
  h
};
//# sourceMappingURL=chunk-DDEXP7LW.js.map
