import {
  u
} from "./chunk-4A3WH4AR.js";
import {
  a as a3
} from "./chunk-4KREATVZ.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
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
  a3 as a2,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js
var s;
var i2 = s = class extends S {
  constructor() {
    super(...arguments), this.field = null, this.minValue = 0, this.maxValue = 255;
  }
  clone() {
    return new s({ field: this.field, minValue: this.minValue, maxValue: this.maxValue });
  }
};
r([m({ type: String, json: { write: { isRequired: true } } })], i2.prototype, "field", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], i2.prototype, "minValue", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], i2.prototype, "maxValue", void 0), i2 = s = r([a2("esri.renderers.support.pointCloud.ColorModulation")], i2);
var l = i2;

// node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js
var p = new o({ pointCloudFixedSizeAlgorithm: "fixed-size", pointCloudSplatAlgorithm: "splat" });
var i3 = class extends S {
};
r([m({ type: p.apiValues, readOnly: true, nonNullable: true, json: { type: p.jsonValues, read: false, write: { writer: p.write, isRequired: true } } })], i3.prototype, "type", void 0), i3 = r([a2("esri.renderers.support.pointCloud.PointSizeAlgorithm")], i3);
var a4 = i3;

// node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js
var i4;
var p2 = i4 = class extends a4 {
  constructor() {
    super(...arguments), this.type = "fixed-size", this.size = 0, this.useRealWorldSymbolSizes = null;
  }
  clone() {
    return new i4({ size: this.size, useRealWorldSymbolSizes: this.useRealWorldSymbolSizes });
  }
};
r([r2({ pointCloudFixedSizeAlgorithm: "fixed-size" })], p2.prototype, "type", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], p2.prototype, "size", void 0), r([m({ type: Boolean, json: { write: true } })], p2.prototype, "useRealWorldSymbolSizes", void 0), p2 = i4 = r([a2("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")], p2);
var l2 = p2;

// node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js
var p3;
var c = p3 = class extends a4 {
  constructor() {
    super(...arguments), this.type = "splat", this.scaleFactor = 1;
  }
  clone() {
    return new p3({ scaleFactor: this.scaleFactor });
  }
};
r([r2({ pointCloudSplatAlgorithm: "splat" })], c.prototype, "type", void 0), r([m({ type: Number, value: 1, nonNullable: true, json: { write: { isRequired: true } } })], c.prototype, "scaleFactor", void 0), c = p3 = r([a2("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")], c);
var a5 = c;

// node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js
var e = { key: "type", base: a4, typeMap: { "fixed-size": l2, splat: a5 } };

// node_modules/@arcgis/core/renderers/PointCloudRenderer.js
var u2 = i()({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks", pointCloudRGBRenderer: "point-cloud-rgb", pointCloudStretchRenderer: "point-cloud-stretch", pointCloudUniqueValueRenderer: "point-cloud-unique-value" });
var c2 = class extends S {
  constructor(o2) {
    super(o2), this.type = void 0, this.pointSizeAlgorithm = null, this.colorModulation = null, this.pointsPerInch = 10;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
  cloneProperties() {
    return { pointSizeAlgorithm: a(this.pointSizeAlgorithm), colorModulation: a(this.colorModulation), pointsPerInch: a(this.pointsPerInch) };
  }
};
r([m({ type: u2.apiValues, readOnly: true, nonNullable: true, json: { type: u2.jsonValues, read: false, write: { writer: u2.write, isRequired: true } } })], c2.prototype, "type", void 0), r([m({ types: e, json: { write: true } })], c2.prototype, "pointSizeAlgorithm", void 0), r([m({ type: l, json: { write: true } })], c2.prototype, "colorModulation", void 0), r([m({ json: { write: true }, nonNullable: true, type: Number })], c2.prototype, "pointsPerInch", void 0), c2 = r([a2("esri.renderers.PointCloudRenderer")], c2), function(o2) {
  o2.fieldTransformTypeKebabDict = new o({ none: "none", lowFourBit: "low-four-bit", highFourBit: "high-four-bit", absoluteValue: "absolute-value", moduloTen: "modulo-ten" });
}(c2 || (c2 = {}));
var d = c2;

// node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js
var a6;
var p4 = a6 = class extends S {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.minValue = 0, this.maxValue = 0, this.color = null;
  }
  clone() {
    return new a6({ description: this.description, label: this.label, minValue: this.minValue, maxValue: this.maxValue, color: a(this.color) });
  }
};
r([m({ type: String, json: { write: true } })], p4.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], p4.prototype, "label", void 0), r([m({ type: Number, json: { read: { source: "classMinValue" }, write: { target: "classMinValue", isRequired: true } } })], p4.prototype, "minValue", void 0), r([m({ type: Number, json: { read: { source: "classMaxValue" }, write: { target: "classMaxValue", isRequired: true } } })], p4.prototype, "maxValue", void 0), r([m({ type: h, json: { type: [x], write: { isRequired: true } } })], p4.prototype, "color", void 0), p4 = a6 = r([a2("esri.renderers.support.pointCloud.ColorClassBreakInfo")], p4);
var u3 = p4;

// node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js
var l3;
var a7 = l3 = class extends d {
  constructor(e2) {
    super(e2), this.type = "point-cloud-class-breaks", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.colorClassBreakInfos = null;
  }
  clone() {
    return new l3({ ...this.cloneProperties(), field: this.field, fieldTransformType: this.fieldTransformType, colorClassBreakInfos: a(this.colorClassBreakInfos), legendOptions: a(this.legendOptions) });
  }
};
r([r2({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks" })], a7.prototype, "type", void 0), r([m({ json: { write: { isRequired: true } }, type: String })], a7.prototype, "field", void 0), r([m({ type: u, json: { write: true } })], a7.prototype, "legendOptions", void 0), r([m({ type: d.fieldTransformTypeKebabDict.apiValues, json: { type: d.fieldTransformTypeKebabDict.jsonValues, read: d.fieldTransformTypeKebabDict.read, write: d.fieldTransformTypeKebabDict.write } })], a7.prototype, "fieldTransformType", void 0), r([m({ type: [u3], json: { write: { isRequired: true } } })], a7.prototype, "colorClassBreakInfos", void 0), a7 = l3 = r([a2("esri.renderers.PointCloudClassBreaksRenderer")], a7);
var d2 = a7;

// node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js
var l4;
var d3 = l4 = class extends d {
  constructor(e2) {
    super(e2), this.type = "point-cloud-stretch", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.stops = null;
  }
  clone() {
    return new l4({ ...this.cloneProperties(), field: a(this.field), fieldTransformType: a(this.fieldTransformType), stops: a(this.stops), legendOptions: a(this.legendOptions) });
  }
};
r([r2({ pointCloudStretchRenderer: "point-cloud-stretch" })], d3.prototype, "type", void 0), r([m({ json: { write: { isRequired: true } }, type: String })], d3.prototype, "field", void 0), r([m({ type: u, json: { write: true } })], d3.prototype, "legendOptions", void 0), r([m({ type: d.fieldTransformTypeKebabDict.apiValues, json: { type: d.fieldTransformTypeKebabDict.jsonValues, read: d.fieldTransformTypeKebabDict.read, write: d.fieldTransformTypeKebabDict.write } })], d3.prototype, "fieldTransformType", void 0), r([m({ type: [a3], json: { write: { isRequired: true } } })], d3.prototype, "stops", void 0), d3 = l4 = r([a2("esri.renderers.PointCloudStretchRenderer")], d3);
var a8 = d3;

// node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js
var l5;
var c3 = l5 = class extends S {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.values = null, this.color = null;
  }
  clone() {
    return new l5({ description: this.description, label: this.label, values: a(this.values), color: a(this.color) });
  }
};
r([m({ type: String, json: { write: true } })], c3.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], c3.prototype, "label", void 0), r([m({ type: [String], json: { write: { isRequired: true } } })], c3.prototype, "values", void 0), r([m({ type: h, json: { type: [x], write: { isRequired: true } } })], c3.prototype, "color", void 0), c3 = l5 = r([a2("esri.renderers.support.pointCloud.ColorUniqueValueInfo")], c3);
var n = c3;

// node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js
var l6;
var u4 = l6 = class extends d {
  constructor(e2) {
    super(e2), this.type = "point-cloud-unique-value", this.field = null, this.fieldTransformType = null, this.colorUniqueValueInfos = null, this.legendOptions = null;
  }
  clone() {
    return new l6({ ...this.cloneProperties(), field: a(this.field), fieldTransformType: a(this.fieldTransformType), colorUniqueValueInfos: a(this.colorUniqueValueInfos), legendOptions: a(this.legendOptions) });
  }
};
r([r2({ pointCloudUniqueValueRenderer: "point-cloud-unique-value" })], u4.prototype, "type", void 0), r([m({ json: { write: { isRequired: true } }, type: String })], u4.prototype, "field", void 0), r([m({ type: d.fieldTransformTypeKebabDict.apiValues, json: { type: d.fieldTransformTypeKebabDict.jsonValues, read: d.fieldTransformTypeKebabDict.read, write: d.fieldTransformTypeKebabDict.write } })], u4.prototype, "fieldTransformType", void 0), r([m({ type: [n], json: { write: { isRequired: true } } })], u4.prototype, "colorUniqueValueInfos", void 0), r([m({ type: u, json: { write: true } })], u4.prototype, "legendOptions", void 0), u4 = l6 = r([a2("esri.renderers.PointCloudUniqueValueRenderer")], u4);
var d4 = u4;

export {
  d,
  d2,
  a8 as a,
  d4 as d3
};
//# sourceMappingURL=chunk-PTXLIK52.js.map
