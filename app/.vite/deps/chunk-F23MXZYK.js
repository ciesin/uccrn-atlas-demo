import {
  E,
  _,
  f,
  g,
  u,
  x
} from "./chunk-LZTCFOLV.js";
import {
  i
} from "./chunk-XUYUNZTH.js";
import {
  a as a3
} from "./chunk-HCXUWF52.js";
import {
  P,
  T
} from "./chunk-IPFYNOOY.js";
import {
  b
} from "./chunk-XWXWIBVO.js";
import {
  o as o3
} from "./chunk-JLFV7EBO.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
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
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js
var l;
var n2 = l = class extends S {
  constructor() {
    super(...arguments), this.expression = null, this.title = null, this.value = null;
  }
  readExpression(r3, e) {
    return e.value ? E(e.value) : r3;
  }
  writeExpression(r3, e, o4) {
    null != this.value && (r3 = E(this.value)), null != r3 && (e[o4] = r3);
  }
  clone() {
    return new l({ expression: this.expression, title: this.title, value: this.value });
  }
};
r([m({ type: String, json: { write: { writerEnsuresNonNull: true } } })], n2.prototype, "expression", void 0), r([o2("expression", ["expression", "value"])], n2.prototype, "readExpression", null), r([r2("expression")], n2.prototype, "writeExpression", null), r([m({ type: String, json: { write: true, origins: { "web-scene": { write: false } } } })], n2.prototype, "title", void 0), r([m({ json: { read: false, write: false } })], n2.prototype, "value", void 0), n2 = l = r([a2("esri.layers.support.LabelExpressionInfo")], n2);
var a4 = n2;

// node_modules/@arcgis/core/layers/support/LabelClass.js
var S2;
var L = new o({ esriServerPointLabelPlacementAboveCenter: "above-center", esriServerPointLabelPlacementAboveLeft: "above-left", esriServerPointLabelPlacementAboveRight: "above-right", esriServerPointLabelPlacementBelowCenter: "below-center", esriServerPointLabelPlacementBelowLeft: "below-left", esriServerPointLabelPlacementBelowRight: "below-right", esriServerPointLabelPlacementCenterCenter: "center-center", esriServerPointLabelPlacementCenterLeft: "center-left", esriServerPointLabelPlacementCenterRight: "center-right", esriServerLinePlacementAboveAfter: "above-after", esriServerLinePlacementAboveAlong: "above-along", esriServerLinePlacementAboveBefore: "above-before", esriServerLinePlacementAboveStart: "above-start", esriServerLinePlacementAboveEnd: "above-end", esriServerLinePlacementBelowAfter: "below-after", esriServerLinePlacementBelowAlong: "below-along", esriServerLinePlacementBelowBefore: "below-before", esriServerLinePlacementBelowStart: "below-start", esriServerLinePlacementBelowEnd: "below-end", esriServerLinePlacementCenterAfter: "center-after", esriServerLinePlacementCenterAlong: "center-along", esriServerLinePlacementCenterBefore: "center-before", esriServerLinePlacementCenterStart: "center-start", esriServerLinePlacementCenterEnd: "center-end", esriServerPolygonPlacementAlwaysHorizontal: "always-horizontal" }, { ignoreUnknown: true });
function P2(e, r3, t2) {
  return { enabled: !b(t2 == null ? void 0 : t2.layer) };
}
function x2(e) {
  var _a;
  return !e || "service" !== e.origin && !("map-image" === ((_a = e.layer) == null ? void 0 : _a.type));
}
function g2(e) {
  return "map-image" === (e == null ? void 0 : e.type);
}
function E2(e) {
  var _a, _b;
  return !!g2(e) && !!((_b = (_a = e.capabilities) == null ? void 0 : _a.exportMap) == null ? void 0 : _b.supportsArcadeExpressionForLabeling);
}
function j(e) {
  return x2(e) || E2(e == null ? void 0 : e.layer);
}
var A = S2 = class extends S {
  static evaluateWhere(e, r3) {
    const t2 = (e2, r4, t3) => {
      switch (r4) {
        case "=":
          return e2 == t3;
        case "<>":
          return e2 != t3;
        case ">":
          return e2 > t3;
        case ">=":
          return e2 >= t3;
        case "<":
          return e2 < t3;
        case "<=":
          return e2 <= t3;
      }
      return false;
    };
    try {
      if (null == e) return true;
      const o4 = e.split(" ");
      if (3 === o4.length) return t2(r3[o4[0]], o4[1], o4[2]);
      if (7 === o4.length) {
        const e2 = t2(r3[o4[0]], o4[1], o4[2]), i3 = o4[3], l3 = t2(r3[o4[4]], o4[5], o4[6]);
        switch (i3) {
          case "AND":
            return e2 && l3;
          case "OR":
            return e2 || l3;
        }
      }
      return false;
    } catch (o4) {
    }
  }
  constructor(e) {
    super(e), this.type = "label", this.name = null, this.allowOverrun = false, this.deconflictionStrategy = "static", this.labelExpression = null, this.labelExpressionInfo = null, this.labelPlacement = null, this.labelPosition = "curved", this.maxScale = 0, this.minScale = 0, this.repeatLabel = true, this.repeatLabelDistance = null, this.symbol = a3, this.useCodedValues = void 0, this.where = null;
  }
  readLabelExpression(e, r3) {
    const t2 = r3.labelExpressionInfo;
    if (!t2 || !t2.value && !t2.expression) return e;
  }
  writeLabelExpression(e, r3, t2) {
    if (this.labelExpressionInfo) {
      if (null != this.labelExpressionInfo.value) e = u(this.labelExpressionInfo.value);
      else if (null != this.labelExpressionInfo.expression) {
        const r4 = _(this.labelExpressionInfo.expression);
        r4 && (e = "[" + r4 + "]");
      }
    }
    null != e && (r3[t2] = e);
  }
  writeLabelExpressionInfo(e, r3, t2, o4) {
    if (null == e && null != this.labelExpression && x2(o4)) e = new a4({ expression: this.getLabelExpressionArcade() });
    else if (!e) return;
    const i3 = e.toJSON(o4);
    i3.expression && (r3[t2] = i3);
  }
  writeMaxScale(e, r3) {
    (e || this.minScale) && (r3.maxScale = e);
  }
  writeMinScale(e, r3) {
    (e || this.maxScale) && (r3.minScale = e);
  }
  getLabelExpression() {
    return x(this);
  }
  getLabelExpressionArcade() {
    return f(this);
  }
  getLabelExpressionSingleField() {
    return g(this);
  }
  hash() {
    return JSON.stringify(this);
  }
  clone() {
    return new S2({ allowOverrun: this.allowOverrun, deconflictionStrategy: this.deconflictionStrategy, labelExpression: this.labelExpression, labelExpressionInfo: a(this.labelExpressionInfo), labelPosition: this.labelPosition, labelPlacement: this.labelPlacement, maxScale: this.maxScale, minScale: this.minScale, name: this.name, repeatLabel: this.repeatLabel, repeatLabelDistance: this.repeatLabelDistance, symbol: a(this.symbol), where: this.where, useCodedValues: this.useCodedValues });
  }
};
r([m({ type: String, json: { write: true } })], A.prototype, "name", void 0), r([m({ type: Boolean, json: { write: true, default: false, origins: { "web-scene": { write: false }, "portal-item": { default: false, write: { overridePolicy: P2 } } } } })], A.prototype, "allowOverrun", void 0), r([m({ type: String, json: { write: true, default: "static", origins: { "web-scene": { write: false }, "portal-item": { default: "static", write: { overridePolicy: P2 } } } } })], A.prototype, "deconflictionStrategy", void 0), r([m({ type: String, json: { write: { overridePolicy(e, r3, t2) {
  return this.labelExpressionInfo && "service" === (t2 == null ? void 0 : t2.origin) && E2(t2.layer) ? { enabled: false } : { allowNull: true };
} } } })], A.prototype, "labelExpression", void 0), r([o2("labelExpression")], A.prototype, "readLabelExpression", null), r([r2("labelExpression")], A.prototype, "writeLabelExpression", null), r([m({ type: a4, json: { write: { overridePolicy: (e, r3, t2) => j(t2) ? { allowNull: true } : { enabled: false } } } })], A.prototype, "labelExpressionInfo", void 0), r([r2("labelExpressionInfo")], A.prototype, "writeLabelExpressionInfo", null), r([m({ type: L.apiValues, json: { type: L.jsonValues, read: L.read, write: L.write } })], A.prototype, "labelPlacement", void 0), r([m({ type: ["curved", "parallel"], json: { write: true, origins: { "web-map": { write: false }, "web-scene": { write: false }, "portal-item": { write: false } } } })], A.prototype, "labelPosition", void 0), r([m({ type: Number })], A.prototype, "maxScale", void 0), r([r2("maxScale")], A.prototype, "writeMaxScale", null), r([m({ type: Number })], A.prototype, "minScale", void 0), r([r2("minScale")], A.prototype, "writeMinScale", null), r([m({ type: Boolean, json: { write: true, origins: { "web-scene": { write: false }, "portal-item": { write: { overridePolicy: P2 } } } } })], A.prototype, "repeatLabel", void 0), r([m({ type: Number, cast: o3, json: { write: true, origins: { "web-scene": { write: false }, "portal-item": { write: { overridePolicy: P2 } } } } })], A.prototype, "repeatLabelDistance", void 0), r([m({ types: P, json: { origins: { "web-scene": { types: T, write: i, default: null } }, write: i, default: null } })], A.prototype, "symbol", void 0), r([m({ type: Boolean, json: { write: true } })], A.prototype, "useCodedValues", void 0), r([m({ type: String, json: { write: true } })], A.prototype, "where", void 0), A = S2 = r([a2("esri.layers.support.LabelClass")], A);
var C = A;

// node_modules/@arcgis/core/layers/support/labelingInfo.js
var t = () => n.getLogger("esri.layers.support.labelingInfo");
var l2 = /\[([^[\]]+)\]/gi;
function n3(e, o4, t2) {
  return e ? e.map((e2) => {
    var _a;
    const n4 = new C();
    if (n4.read(e2, t2), n4.labelExpression) {
      const e3 = o4.fields || ((_a = o4.layerDefinition) == null ? void 0 : _a.fields) || this.fields;
      n4.labelExpression = n4.labelExpression.replaceAll(l2, (o5, r3) => `[${s2(r3, e3)}]`);
    }
    return n4;
  }) : null;
}
function s2(e, o4) {
  if (!o4) return e;
  const r3 = e.toLowerCase();
  for (let t2 = 0; t2 < o4.length; t2++) {
    const e2 = o4[t2].name;
    if (e2.toLowerCase() === r3) return e2;
  }
  return e;
}
var i2 = { esriGeometryPoint: ["above-right", "above-center", "above-left", "center-center", "center-left", "center-right", "below-center", "below-left", "below-right"], esriGeometryMultiPatch: ["always-horizontal"], esriGeometryPolygon: ["always-horizontal"], esriGeometryPolyline: ["center-along", "above-along", "below-along"], esriGeometryMultipoint: null, esriGeometryEnvelope: null };
function a5(o4, r3) {
  const l3 = [];
  for (const n4 of o4) {
    const o5 = n4.labelPlacement, s3 = i2[r3];
    if (!n4.symbol) return t().warn("No ILabelClass symbol specified."), [];
    if (!s3) return t().error(new s("labeling:unsupported-geometry-type", `Unable to create labels for layer, geometry type '${r3}' is not supported`)), [];
    if (s3.includes(o5)) l3.push(n4);
    else {
      const e = s3[0];
      o5 && t().warn(`Found invalid label placement type ${o5} for ${r3}. Defaulting to ${e}`);
      const i3 = n4.clone();
      i3.labelPlacement = e, l3.push(i3);
    }
  }
  return l3;
}

export {
  a4 as a,
  C,
  n3 as n,
  a5 as a2
};
//# sourceMappingURL=chunk-F23MXZYK.js.map
