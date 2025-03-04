import {
  a as a3
} from "./chunk-CVABZLLM.js";
import {
  h as h2
} from "./chunk-DDEXP7LW.js";
import {
  r as r3
} from "./chunk-K2PILHWE.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  h
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  N,
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/tables/elements/AttributeTableElement.js
var s2 = class extends S {
  constructor(t) {
    super(t), this.description = null, this.label = null, this.type = null;
  }
};
r([m({ type: String, json: { write: true } })], s2.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], s2.prototype, "label", void 0), r([m()], s2.prototype, "type", void 0), s2 = r([a2("esri.tables.elements.AttributeTableElement")], s2);
var p = s2;

// node_modules/@arcgis/core/tables/elements/AttributeTableAttachmentElement.js
var s3;
var p2 = s3 = class extends p {
  constructor(t) {
    super(t), this.displayType = "auto", this.type = "attachment";
  }
  clone() {
    return new s3({ description: this.description, displayType: this.displayType, label: this.label });
  }
};
r([m({ type: ["auto"], json: { write: true } })], p2.prototype, "displayType", void 0), r([m({ type: ["attachment"], readOnly: true, json: { read: false, write: true } })], p2.prototype, "type", void 0), p2 = s3 = r([a2("esri.tables.elements.AttributeTableAttachmentElement")], p2);
var a4 = p2;

// node_modules/@arcgis/core/tables/elements/AttributeTableFieldElement.js
var s4;
var i = s4 = class extends p {
  constructor(e) {
    super(e), this.fieldName = null, this.type = "field";
  }
  clone() {
    return new s4({ description: this.description, fieldName: this.fieldName, label: this.label });
  }
};
r([m({ type: String, json: { write: true } })], i.prototype, "fieldName", void 0), r([m({ type: String, json: { read: false, write: true } })], i.prototype, "type", void 0), i = s4 = r([a2("esri.tables.elements.AttributeTableFieldElement")], i);
var p3 = i;

// node_modules/@arcgis/core/tables/elements/AttributeTableRelationshipElement.js
var s5;
var i2 = s5 = class extends p {
  constructor(e) {
    super(e), this.relationshipId = null, this.type = "relationship";
  }
  clone() {
    return new s5({ description: this.description, label: this.label, relationshipId: this.relationshipId });
  }
};
r([m({ type: Number, json: { write: true } })], i2.prototype, "relationshipId", void 0), r([m({ type: ["relationship"], json: { read: false, write: true } })], i2.prototype, "type", void 0), i2 = s5 = r([a2("esri.tables.elements.AttributeTableRelationshipElement")], i2);
var p4 = i2;

// node_modules/@arcgis/core/tables/support/tablesUtils.js
function i3(t) {
  return { typesWithGroup: { base: p, key: "type", typeMap: { attachment: a4, field: p3, group: t, relationship: p4 } }, typesWithoutGroup: { base: p, key: "type", typeMap: { attachment: a4, field: p3, relationship: p4 } } };
}
function n(t, e, p6 = true) {
  if (!t) return null;
  const r4 = p6 ? e.typesWithGroup.typeMap : e.typesWithoutGroup.typeMap;
  return t.filter((t2) => r4[t2.type]).map((t2) => r4[t2.type].fromJSON(t2));
}
function u(t, e, p6 = true) {
  if (!t) return null;
  const r4 = p6 ? e.typesWithGroup.typeMap : e.typesWithoutGroup.typeMap;
  return t.filter((t2) => r4[t2.type]).map((t2) => t2.toJSON());
}
function s6(e, p6, r4 = true) {
  return e ? e.map((e2) => N(r4 ? p6.typesWithGroup : p6.typesWithoutGroup, e2)) : null;
}

// node_modules/@arcgis/core/tables/elements/AttributeTableGroupElement.js
var u2;
var b = u2 = class extends p {
  constructor(e) {
    super(e), this.elements = null, this.type = "group";
  }
  castElements(e) {
    return s6(e, d, false);
  }
  readElements(e, t) {
    return n(t.attributeTableElements, d, false);
  }
  writeElements(e, t) {
    t.attributeTableElements = u(e, d, false);
  }
  clone() {
    return new u2({ description: this.description, elements: a(this.elements), label: this.label });
  }
};
r([m({ json: { write: true } })], b.prototype, "elements", void 0), r([s("elements")], b.prototype, "castElements", null), r([o("elements", ["attributeTableElements"])], b.prototype, "readElements", null), r([r2("elements")], b.prototype, "writeElements", null), r([m({ type: String, json: { read: false, write: true } })], b.prototype, "type", void 0), b = u2 = r([a2("esri.tables.elements.AttributeTableGroupElement")], b);
var d = i3(b);
var j = b;

// node_modules/@arcgis/core/tables/AttributeTableTemplate.js
var d2;
var b2 = i3(j);
var j2 = d2 = class extends S {
  constructor(e) {
    super(e), this.elements = null, this.orderByFields = null;
  }
  castElements(e) {
    return s6(e, b2);
  }
  readElements(e, t) {
    return n(t.attributeTableElements, b2);
  }
  writeElements(e, t) {
    t.attributeTableElements = u(e, b2);
  }
  clone() {
    return new d2({ elements: a(this.elements), orderByFields: this.orderByFields });
  }
};
r([m({ json: { write: true } })], j2.prototype, "elements", void 0), r([s("elements")], j2.prototype, "castElements", null), r([o("elements", ["attributeTableElements"])], j2.prototype, "readElements", null), r([r2("elements")], j2.prototype, "writeElements", null), r([m({ type: [Object], json: { write: true } })], j2.prototype, "orderByFields", void 0), j2 = d2 = r([a2("esri.tables.AttributeTableTemplate")], j2);
var f = j2;

// node_modules/@arcgis/core/layers/support/commonProperties.js
var s7 = { type: Boolean, value: true, json: { origins: { service: { read: false, write: false }, "web-map": { read: false, write: false } }, name: "screenSizePerspective", write: { enabled: true, layerContainerTypes: a3 } } };
var l = { type: Boolean, value: true, json: { name: "disablePopup", read: { reader: (e, r4) => !r4.disablePopup }, write: { enabled: true, writer(e, r4, n2) {
  r4[n2] = !e;
} } } };
var p5 = { type: Boolean, value: true, nonNullable: true, json: { name: "showLabels", write: { enabled: true, layerContainerTypes: a3 } } };
var y = { type: String, json: { origins: { "portal-item": { write: false } }, write: { isRequired: true, ignoreOrigin: true, writer: h } } };
var d3 = { type: Boolean, value: true, nonNullable: true, json: { origins: { service: { read: { enabled: false } } }, name: "showLegend", write: { enabled: true, layerContainerTypes: a3 } } };
var c = { value: null, type: h2, json: { origins: { service: { name: "elevationInfo", write: true } }, name: "layerDefinition.elevationInfo", write: { enabled: true, layerContainerTypes: a3 } } };
function m2(e) {
  return { type: e, readOnly: true, json: { origins: { service: { read: true } }, read: false } };
}
var w2 = { write: { enabled: true, layerContainerTypes: a3 }, read: true };
var f2 = { type: Number, json: { origins: { "web-document": w2, "portal-item": { write: { layerContainerTypes: a3 } } } } };
var b3 = { ...f2, json: { ...f2.json, origins: { "web-document": { ...w2, write: { enabled: true, layerContainerTypes: a3, target: { opacity: { type: Number }, "layerDefinition.drawingInfo.transparency": { type: Number } } } } }, read: { source: ["layerDefinition.drawingInfo.transparency", "drawingInfo.transparency"], reader: (e, r4, n2) => {
  var _a;
  return n2 && "service" !== n2.origin || !r4.drawingInfo || void 0 === r4.drawingInfo.transparency ? ((_a = r4.layerDefinition) == null ? void 0 : _a.drawingInfo) && void 0 !== r4.layerDefinition.drawingInfo.transparency ? r3(r4.layerDefinition.drawingInfo.transparency) : void 0 : r3(r4.drawingInfo.transparency);
} } } };
var g2 = { type: w, readOnly: true, json: { origins: { service: { read: { source: ["fullExtent", "spatialReference"], reader: (e, i4) => {
  const a5 = w.fromJSON(e);
  return null != i4.spatialReference && "object" == typeof i4.spatialReference && (a5.spatialReference = g.fromJSON(i4.spatialReference)), a5;
} } } }, read: false } };
var u3 = { type: String, json: { origins: { service: { read: false }, "portal-item": { read: false } } } };
var j3 = { type: Number, json: { origins: { service: { write: { enabled: false } } }, name: "layerDefinition.minScale", write: { layerContainerTypes: a3 } } };
var v = { type: Number, json: { origins: { service: { write: { enabled: false } } }, name: "layerDefinition.maxScale", write: { layerContainerTypes: a3 } } };
var T = { json: { write: { ignoreOrigin: true, layerContainerTypes: a3 }, origins: { "web-map": { read: false, write: false } } } };
var I = { type: f, json: { name: "attributeTableInfo", write: true, origins: { "web-scene": { read: false, write: false } } } };

export {
  f,
  s7 as s,
  l,
  p5 as p,
  y,
  d3 as d,
  c,
  m2 as m,
  f2,
  b3 as b,
  g2 as g,
  u3 as u,
  j3 as j,
  v,
  T,
  I
};
//# sourceMappingURL=chunk-WZ7EFR6C.js.map
