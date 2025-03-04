import {
  Xe,
  _,
  x as x2
} from "./chunk-6REABBOQ.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  n as n2
} from "./chunk-SWBNCJYN.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  Y
} from "./chunk-REAPFM7O.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  i,
  o
} from "./chunk-WE4EKKVR.js";
import {
  S as S2
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  N,
  a3 as a2,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  S
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/popup/ExpressionInfo.js
var s2;
var p = s2 = class extends S2 {
  constructor(r7) {
    super(r7), this.name = null, this.title = null, this.expression = null, this.returnType = null;
  }
  clone() {
    return new s2({ name: this.name, title: this.title, expression: this.expression, returnType: this.returnType });
  }
};
r([m({ type: String, json: { write: true } })], p.prototype, "name", void 0), r([m({ type: String, json: { write: true } })], p.prototype, "title", void 0), r([m({ type: String, json: { write: true } })], p.prototype, "expression", void 0), r([m({ type: ["string", "number"], json: { write: true } })], p.prototype, "returnType", void 0), p = s2 = r([a2("esri.popup.ExpressionInfo")], p);
var i2 = p;

// node_modules/@arcgis/core/support/actions/ActionBase.js
var r4;
var c = r4 = class extends n2.IdentifiableMixin(g) {
  constructor(i16) {
    super(i16), this.active = false, this.className = null, this.disabled = false, this.icon = null, this.id = null, this.indicator = false, this.title = null, this.type = null, this.visible = true;
  }
  clone() {
    return new r4({ active: this.active, className: this.className, disabled: this.disabled, icon: this.icon, id: this.id, indicator: this.indicator, title: this.title, visible: this.visible });
  }
};
r([m()], c.prototype, "active", void 0), r([m()], c.prototype, "className", void 0), r([m()], c.prototype, "disabled", void 0), r([m()], c.prototype, "icon", void 0), r([m()], c.prototype, "id", void 0), r([m()], c.prototype, "indicator", void 0), r([m()], c.prototype, "title", void 0), r([m()], c.prototype, "type", void 0), r([m()], c.prototype, "visible", void 0), c = r4 = r([a2("esri.support.actions.ActionBase")], c);
var p2 = c;

// node_modules/@arcgis/core/support/actions/ActionButton.js
var e;
var r5 = e = class extends p2 {
  constructor(s7) {
    super(s7), this.image = null, this.type = "button";
  }
  clone() {
    return new e({ active: this.active, className: this.className, disabled: this.disabled, icon: this.icon, id: this.id, indicator: this.indicator, title: this.title, visible: this.visible, image: this.image });
  }
};
r([m()], r5.prototype, "image", void 0), r5 = e = r([a2("esri.support.actions.ActionButton")], r5);
var c2 = r5;

// node_modules/@arcgis/core/popup/content/Content.js
var e2 = class extends S2 {
  constructor(o3) {
    super(o3), this.type = null;
  }
};
r([m({ type: ["attachments", "custom", "fields", "media", "text", "expression", "relationship", "utility-network-associations"], readOnly: true, json: { read: false, write: true } })], e2.prototype, "type", void 0), e2 = r([a2("esri.popup.content.Content")], e2);
var p3 = e2;

// node_modules/@arcgis/core/popup/support/AttachmentsOrderByInfo.js
var c3 = new o({ asc: "ascending", desc: "descending" });
var i3 = class extends a3.ClonableMixin(S2) {
  constructor(o3) {
    super(o3), this.field = null, this.order = "ascending";
  }
};
r([m({ type: String, json: { write: true } })], i3.prototype, "field", void 0), r([m({ type: c3.apiValues, json: { type: c3.jsonValues, read: c3.read, write: c3.write } })], i3.prototype, "order", void 0), i3 = r([a2("esri.popup.support.AttachmentsOrderByInfo")], i3);
var n3 = i3;

// node_modules/@arcgis/core/popup/content/AttachmentsContent.js
var i4 = class extends a3.ClonableMixin(p3) {
  constructor(t3) {
    super(t3), this.description = null, this.displayType = "auto", this.orderByFields = null, this.title = null, this.type = "attachments";
  }
};
r([m({ type: String, json: { write: true } })], i4.prototype, "description", void 0), r([m({ type: ["auto", "preview", "list"], json: { write: true } })], i4.prototype, "displayType", void 0), r([m({ type: [n3], json: { write: true } })], i4.prototype, "orderByFields", void 0), r([m({ type: String, json: { write: true } })], i4.prototype, "title", void 0), r([m({ type: ["attachments"], readOnly: true, json: { read: false, write: { isRequired: true } } })], i4.prototype, "type", void 0), i4 = r([a2("esri.popup.content.AttachmentsContent")], i4);
var n4 = i4;

// node_modules/@arcgis/core/popup/content/CustomContent.js
var p4;
var i5 = p4 = class extends p3 {
  constructor(o3) {
    super(o3), this.creator = null, this.destroyer = null, this.outFields = null, this.type = "custom";
  }
  clone() {
    return new p4({ creator: this.creator, destroyer: this.destroyer, outFields: Array.isArray(this.outFields) ? a(this.outFields) : null });
  }
};
r([m()], i5.prototype, "creator", void 0), r([m()], i5.prototype, "destroyer", void 0), r([m()], i5.prototype, "outFields", void 0), r([m({ type: ["custom"], readOnly: true })], i5.prototype, "type", void 0), i5 = p4 = r([a2("esri.popup.content.CustomContent")], i5);
var c4 = i5;

// node_modules/@arcgis/core/popup/ElementExpressionInfo.js
var s3;
var p5 = s3 = class extends S2 {
  constructor(r7) {
    super(r7), this.title = null, this.expression = null, this.returnType = "dictionary";
  }
  clone() {
    return new s3({ title: this.title, expression: this.expression });
  }
};
r([m({ type: String, json: { write: true } })], p5.prototype, "title", void 0), r([m({ type: String, json: { write: true } })], p5.prototype, "expression", void 0), r([m({ type: ["dictionary"], readOnly: true, json: { read: false, write: true } })], p5.prototype, "returnType", void 0), p5 = s3 = r([a2("esri.popup.ElementExpressionInfo")], p5);
var i6 = p5;

// node_modules/@arcgis/core/popup/content/ExpressionContent.js
var p6;
var n5 = p6 = class extends p3 {
  constructor(o3) {
    super(o3), this.expressionInfo = null, this.type = "expression";
  }
  clone() {
    var _a;
    return new p6({ expressionInfo: (_a = this.expressionInfo) == null ? void 0 : _a.clone() });
  }
};
r([m({ type: i6, json: { write: true } })], n5.prototype, "expressionInfo", void 0), r([m({ type: ["expression"], readOnly: true, json: { read: false, write: true } })], n5.prototype, "type", void 0), n5 = p6 = r([a2("esri.popup.content.ExpressionContent")], n5);
var i7 = n5;

// node_modules/@arcgis/core/popup/support/FieldInfoFormat.js
var c5 = class extends a3.ClonableMixin(S2) {
  constructor(o3) {
    super(o3), this.dateFormat = null, this.digitSeparator = false, this.places = null;
  }
};
r([r3(Y)], c5.prototype, "dateFormat", void 0), r([m({ type: Boolean, json: { write: true } })], c5.prototype, "digitSeparator", void 0), r([m({ type: x, json: { write: true } })], c5.prototype, "places", void 0), c5 = r([a2("esri.popup.support.FieldInfoFormat")], c5);
var m2 = c5;

// node_modules/@arcgis/core/popup/FieldInfo.js
var a4;
var l = a4 = class extends S2 {
  constructor(t3) {
    super(t3), this.fieldName = null, this.format = void 0, this.isEditable = true, this.label = null, this.stringFieldOption = "text-box", this.statisticType = null, this.tooltip = null, this.visible = true;
  }
  clone() {
    var _a;
    return new a4({ fieldName: this.fieldName, format: (_a = this.format) == null ? void 0 : _a.clone(), isEditable: this.isEditable, label: this.label, stringFieldOption: this.stringFieldOption, statisticType: this.statisticType, tooltip: this.tooltip, visible: this.visible });
  }
};
r([m({ type: String, json: { write: true } })], l.prototype, "fieldName", void 0), r([m({ type: m2, json: { write: true } })], l.prototype, "format", void 0), r([m({ type: Boolean, json: { write: { alwaysWriteDefaults: true }, default: true } })], l.prototype, "isEditable", void 0), r([m({ type: String, json: { write: true } })], l.prototype, "label", void 0), r([r3(new o({ richtext: "rich-text", textarea: "text-area", textbox: "text-box" }), { default: "text-box" })], l.prototype, "stringFieldOption", void 0), r([m({ type: ["count", "sum", "min", "max", "avg", "stddev", "var"], json: { write: true } })], l.prototype, "statisticType", void 0), r([m({ type: String, json: { write: true } })], l.prototype, "tooltip", void 0), r([m({ type: Boolean, json: { write: true } })], l.prototype, "visible", void 0), l = a4 = r([a2("esri.popup.FieldInfo")], l);
var n6 = l;

// node_modules/@arcgis/core/popup/content/FieldsContent.js
var n7;
var l2 = n7 = class extends p3 {
  constructor(t3) {
    super(t3), this.attributes = null, this.description = null, this.fieldInfos = null, this.title = null, this.type = "fields";
  }
  writeFieldInfos(t3, o3) {
    o3.fieldInfos = t3 && t3.map((t4) => t4.toJSON());
  }
  clone() {
    return new n7(a({ attributes: this.attributes, description: this.description, fieldInfos: this.fieldInfos, title: this.title }));
  }
};
r([m({ type: Object, json: { write: true } })], l2.prototype, "attributes", void 0), r([m({ type: String, json: { write: true } })], l2.prototype, "description", void 0), r([m({ type: [n6] })], l2.prototype, "fieldInfos", void 0), r([r2("fieldInfos")], l2.prototype, "writeFieldInfos", null), r([m({ type: String, json: { write: true } })], l2.prototype, "title", void 0), r([m({ type: ["fields"], readOnly: true, json: { read: false, write: { isRequired: true } } })], l2.prototype, "type", void 0), l2 = n7 = r([a2("esri.popup.content.FieldsContent")], l2);
var d = l2;

// node_modules/@arcgis/core/popup/content/mixins/MediaInfo.js
var s4 = class extends S2 {
  constructor(t3) {
    super(t3), this.altText = null, this.caption = "", this.title = "", this.type = null;
  }
};
r([m({ type: String, json: { write: true } })], s4.prototype, "altText", void 0), r([m({ type: String, json: { write: true } })], s4.prototype, "caption", void 0), r([m({ type: String, json: { write: true } })], s4.prototype, "title", void 0), r([m({ type: ["image", "bar-chart", "column-chart", "line-chart", "pie-chart"], readOnly: true, json: { read: false, write: true } })], s4.prototype, "type", void 0), s4 = r([a2("esri.popup.content.mixins.MediaInfo")], s4);
var p7 = s4;

// node_modules/@arcgis/core/popup/content/support/ChartMediaInfoValueSeries.js
var s5;
var l3 = s5 = class extends g {
  constructor(o3) {
    super(o3), this.color = null, this.fieldName = null, this.tooltip = null, this.value = null;
  }
  clone() {
    var _a;
    return new s5({ color: (_a = this.color) == null ? void 0 : _a.clone(), fieldName: this.fieldName, tooltip: this.tooltip, value: this.value });
  }
};
r([m()], l3.prototype, "color", void 0), r([m()], l3.prototype, "fieldName", void 0), r([m()], l3.prototype, "tooltip", void 0), r([m()], l3.prototype, "value", void 0), l3 = s5 = r([a2("esri.popup.content.support.ChartMediaInfoValueSeries")], l3);
var p8 = l3;

// node_modules/@arcgis/core/popup/content/support/ChartMediaInfoValue.js
var n8;
var c6 = n8 = class extends S2 {
  constructor(o3) {
    super(o3), this.colors = null, this.fields = [], this.normalizeField = null, this.series = [], this.tooltipField = null;
  }
  clone() {
    return new n8({ colors: a(this.colors), fields: a(this.fields), normalizeField: this.normalizeField, series: a(this.series), tooltipField: this.tooltipField });
  }
};
r([m({ type: [h], json: { type: [[x]], write: true } })], c6.prototype, "colors", void 0), r([m({ type: [String], json: { write: { isRequired: true } } })], c6.prototype, "fields", void 0), r([m({ type: String, json: { write: true } })], c6.prototype, "normalizeField", void 0), r([m({ type: [p8], json: { read: false } })], c6.prototype, "series", void 0), r([m({ type: String, json: { write: true } })], c6.prototype, "tooltipField", void 0), c6 = n8 = r([a2("esri.popup.content.support.ChartMediaInfoValue")], c6);
var d2 = c6;

// node_modules/@arcgis/core/popup/content/mixins/ChartMediaInfo.js
var p9 = class extends p7 {
  constructor(o3) {
    super(o3), this.type = null, this.value = void 0;
  }
};
r([m({ type: ["bar-chart", "column-chart", "line-chart", "pie-chart"], readOnly: true, json: { read: false, write: true } })], p9.prototype, "type", void 0), r([m({ type: d2, json: { write: { isRequired: true } } })], p9.prototype, "value", void 0), p9 = r([a2("esri.popup.content.mixins.ChartMediaInfo")], p9);
var a5 = p9;

// node_modules/@arcgis/core/popup/content/support/chartMediaInfoUtils.js
var c7 = i()({ barchart: "bar-chart", columnchart: "column-chart", linechart: "line-chart", piechart: "pie-chart" });

// node_modules/@arcgis/core/popup/content/BarChartMediaInfo.js
var a6;
var i8 = a6 = class extends a5 {
  constructor(r7) {
    super(r7), this.type = "bar-chart";
  }
  clone() {
    var _a;
    return new a6({ altText: this.altText, title: this.title, caption: this.caption, value: (_a = this.value) == null ? void 0 : _a.clone() });
  }
};
r([m({ type: ["bar-chart"], readOnly: true, json: { type: ["barchart"], read: false, write: { writer: c7.write, isRequired: true } } })], i8.prototype, "type", void 0), i8 = a6 = r([a2("esri.popup.content.BarChartMediaInfo")], i8);
var p10 = i8;

// node_modules/@arcgis/core/popup/content/ColumnChartMediaInfo.js
var i9;
var a7 = i9 = class extends a5 {
  constructor(t3) {
    super(t3), this.type = "column-chart";
  }
  clone() {
    var _a;
    return new i9({ altText: this.altText, title: this.title, caption: this.caption, value: (_a = this.value) == null ? void 0 : _a.clone() });
  }
};
r([m({ type: ["column-chart"], readOnly: true, json: { type: ["columnchart"], read: false, write: { writer: c7.write, isRequired: true } } })], a7.prototype, "type", void 0), a7 = i9 = r([a2("esri.popup.content.ColumnChartMediaInfo")], a7);
var c8 = a7;

// node_modules/@arcgis/core/popup/content/support/ImageMediaInfoValue.js
var t;
var p11 = t = class extends S2 {
  constructor(o3) {
    super(o3), this.linkURL = null, this.sourceURL = null;
  }
  clone() {
    return new t({ linkURL: this.linkURL, sourceURL: this.sourceURL });
  }
};
r([m({ type: String, json: { write: true } })], p11.prototype, "linkURL", void 0), r([m({ type: String, json: { write: { isRequired: true } } })], p11.prototype, "sourceURL", void 0), p11 = t = r([a2("esri.popup.content.support.ImageMediaInfoValue")], p11);
var i10 = p11;

// node_modules/@arcgis/core/popup/content/ImageMediaInfo.js
var i11;
var a8 = i11 = class extends p7 {
  constructor(e5) {
    super(e5), this.refreshInterval = 0, this.type = "image", this.value = void 0;
  }
  clone() {
    var _a;
    return new i11({ altText: this.altText, title: this.title, caption: this.caption, refreshInterval: this.refreshInterval, value: (_a = this.value) == null ? void 0 : _a.clone() });
  }
};
r([m({ type: Number, json: { write: true } })], a8.prototype, "refreshInterval", void 0), r([m({ type: ["image"], readOnly: true, json: { read: false, write: { isRequired: true } } })], a8.prototype, "type", void 0), r([m({ type: i10, json: { write: { isRequired: true } } })], a8.prototype, "value", void 0), a8 = i11 = r([a2("esri.popup.content.ImageMediaInfo")], a8);
var p12 = a8;

// node_modules/@arcgis/core/popup/content/LineChartMediaInfo.js
var i12;
var a9 = i12 = class extends a5 {
  constructor(t3) {
    super(t3), this.type = "line-chart";
  }
  clone() {
    var _a;
    return new i12({ altText: this.altText, title: this.title, caption: this.caption, value: (_a = this.value) == null ? void 0 : _a.clone() });
  }
};
r([m({ type: ["line-chart"], readOnly: true, json: { type: ["linechart"], read: false, write: { writer: c7.write, isRequired: true } } })], a9.prototype, "type", void 0), a9 = i12 = r([a2("esri.popup.content.LineChartMediaInfo")], a9);
var p13 = a9;

// node_modules/@arcgis/core/popup/content/PieChartMediaInfo.js
var i13;
var p14 = i13 = class extends a5 {
  constructor(t3) {
    super(t3), this.type = "pie-chart";
  }
  clone() {
    var _a;
    return new i13({ altText: this.altText, title: this.title, caption: this.caption, value: (_a = this.value) == null ? void 0 : _a.clone() });
  }
};
r([m({ type: ["pie-chart"], readOnly: true, json: { type: ["piechart"], read: false, write: { writer: c7.write, isRequired: true } } })], p14.prototype, "type", void 0), p14 = i13 = r([a2("esri.popup.content.PieChartMediaInfo")], p14);
var a10 = p14;

// node_modules/@arcgis/core/popup/content/support/mediaInfoTypes.js
var m3 = { base: p7, key: "type", defaultKeyValue: "image", typeMap: { "bar-chart": p10, "column-chart": c8, "line-chart": p13, "pie-chart": a10, image: p12 } };

// node_modules/@arcgis/core/popup/content/MediaContent.js
var l4;
var u = l4 = class extends p3 {
  constructor(t3) {
    super(t3), this.activeMediaInfoIndex = null, this.attributes = null, this.description = null, this.mediaInfos = null, this.title = null, this.type = "media";
  }
  readMediaInfos(t3) {
    return t3 && t3.map((t4) => "image" === t4.type ? p12.fromJSON(t4) : "barchart" === t4.type ? p10.fromJSON(t4) : "columnchart" === t4.type ? c8.fromJSON(t4) : "linechart" === t4.type ? p13.fromJSON(t4) : "piechart" === t4.type ? a10.fromJSON(t4) : void 0).filter(Boolean);
  }
  writeMediaInfos(t3, o3) {
    o3.mediaInfos = t3 && t3.map((t4) => t4.toJSON());
  }
  clone() {
    return new l4(a({ activeMediaInfoIndex: this.activeMediaInfoIndex, attributes: this.attributes, description: this.description, mediaInfos: this.mediaInfos, title: this.title }));
  }
};
r([m()], u.prototype, "activeMediaInfoIndex", void 0), r([m({ type: Object, json: { write: true } })], u.prototype, "attributes", void 0), r([m({ type: String, json: { write: true } })], u.prototype, "description", void 0), r([m({ types: [m3] })], u.prototype, "mediaInfos", void 0), r([o2("mediaInfos")], u.prototype, "readMediaInfos", null), r([r2("mediaInfos")], u.prototype, "writeMediaInfos", null), r([m({ type: String, json: { write: true } })], u.prototype, "title", void 0), r([m({ type: ["media"], readOnly: true, json: { read: false, write: { isRequired: true } } })], u.prototype, "type", void 0), u = l4 = r([a2("esri.popup.content.MediaContent")], u);
var I = u;

// node_modules/@arcgis/core/popup/support/RelatedRecordsInfoFieldOrder.js
var t2;
var p15 = t2 = class extends S2 {
  constructor(r7) {
    super(r7), this.field = null, this.order = null;
  }
  clone() {
    return new t2({ field: this.field, order: this.order });
  }
};
r([m({ type: String, json: { write: true } })], p15.prototype, "field", void 0), r([m({ type: ["asc", "desc"], json: { write: true } })], p15.prototype, "order", void 0), p15 = t2 = r([a2("esri.popup.support.RelatedRecordsInfoFieldOrder")], p15);
var i14 = p15;

// node_modules/@arcgis/core/popup/content/RelationshipContent.js
var n9 = class extends a3.ClonableMixin(p3) {
  constructor(t3) {
    super(t3), this.description = null, this.displayCount = null, this.displayType = "list", this.orderByFields = null, this.relationshipId = null, this.title = null, this.type = "relationship";
  }
};
r([m({ type: String, json: { write: true } })], n9.prototype, "description", void 0), r([m({ type: Number, json: { type: x, write: true } })], n9.prototype, "displayCount", void 0), r([m({ type: ["list"], json: { write: { isRequired: true } } })], n9.prototype, "displayType", void 0), r([m({ type: [i14], json: { write: true } })], n9.prototype, "orderByFields", void 0), r([m({ type: Number, json: { type: x, write: { isRequired: true } } })], n9.prototype, "relationshipId", void 0), r([m({ type: String, json: { write: true } })], n9.prototype, "title", void 0), r([m({ type: ["relationship"], readOnly: true, json: { read: false, write: { isRequired: true } } })], n9.prototype, "type", void 0), n9 = r([a2("esri.popup.content.RelationshipContent")], n9);
var l5 = n9;

// node_modules/@arcgis/core/popup/content/TextContent.js
var s6;
var p16 = s6 = class extends p3 {
  constructor(t3) {
    super(t3), this.text = null, this.type = "text";
  }
  clone() {
    return new s6({ text: this.text });
  }
};
r([m({ type: String, json: { write: true } })], p16.prototype, "text", void 0), r([m({ type: ["text"], readOnly: true, json: { read: false, write: { isRequired: true } } })], p16.prototype, "type", void 0), p16 = s6 = r([a2("esri.popup.content.TextContent")], p16);
var c9 = p16;

// node_modules/@arcgis/core/popup/support/UtilityNetworkAssociationType.js
var i15 = class extends a3.ClonableMixin(S2) {
  constructor(t3) {
    super(t3), this.title = null, this.description = null, this.type = null, this.associatedNetworkSourceId = null, this.associatedAssetGroup = null, this.associatedAssetType = null;
  }
};
r([m({ type: String, json: { write: true } })], i15.prototype, "title", void 0), r([m({ type: String, json: { write: true } })], i15.prototype, "description", void 0), r([m({ type: ["attachment", "connectivity", "container", "content", "structure"], json: { write: true } })], i15.prototype, "type", void 0), r([m({ type: Number, json: { type: x, write: true } })], i15.prototype, "associatedNetworkSourceId", void 0), r([m({ type: Number, json: { type: x, write: true } })], i15.prototype, "associatedAssetGroup", void 0), r([m({ type: Number, json: { type: x, write: true } })], i15.prototype, "associatedAssetType", void 0), i15 = r([a2("esri.popup.support.UtilityNetworkAssociationType")], i15);
var c10 = i15;

// node_modules/@arcgis/core/popup/content/UtilityNetworkAssociationsContent.js
var c11 = class extends a3.ClonableMixin(p3) {
  constructor(o3) {
    super(o3), this.description = null, this.displayCount = null, this.title = null, this.associationTypes = [], this.type = "utility-network-associations";
  }
};
r([m({ type: String, json: { write: true } })], c11.prototype, "description", void 0), r([m({ type: Number, json: { type: x, write: true } })], c11.prototype, "displayCount", void 0), r([m({ type: String, json: { write: true } })], c11.prototype, "title", void 0), r([m({ type: [c10], json: { write: true } })], c11.prototype, "associationTypes", void 0), r([r3({ utilityNetworkAssociations: "utility-network-associations" })], c11.prototype, "type", void 0), c11 = r([a2("esri.popup.content.UtilityNetworkAssociationsContent")], c11);
var a11 = c11;

// node_modules/@arcgis/core/popup/content.js
var a12 = { base: null, key: "type", typeMap: { attachment: n4, media: I, text: c9, expression: i7, field: d, relationship: l5, utilityNetworkAssociations: a11 } };
var c12 = { base: null, key: "type", typeMap: { attachment: n4, media: I, text: c9, expression: i7, field: d, relationship: l5 } };

// node_modules/@arcgis/core/popup/LayerOptions.js
var e3;
var p17 = e3 = class extends S2 {
  constructor(o3) {
    super(o3), this.returnTopmostRaster = null, this.showNoDataRecords = null;
  }
  clone() {
    return new e3({ showNoDataRecords: this.showNoDataRecords, returnTopmostRaster: this.returnTopmostRaster });
  }
};
r([m({ type: Boolean, json: { write: true } })], p17.prototype, "returnTopmostRaster", void 0), r([m({ type: Boolean, json: { write: true } })], p17.prototype, "showNoDataRecords", void 0), p17 = e3 = r([a2("esri.popup.LayerOptions")], p17);
var a13 = p17;

// node_modules/@arcgis/core/popup/RelatedRecordsInfo.js
var p18;
var l6 = p18 = class extends S2 {
  constructor(o3) {
    super(o3), this.showRelatedRecords = null, this.orderByFields = null;
  }
  clone() {
    return new p18({ showRelatedRecords: this.showRelatedRecords, orderByFields: this.orderByFields ? a(this.orderByFields) : null });
  }
};
r([m({ type: Boolean, json: { write: true } })], l6.prototype, "showRelatedRecords", void 0), r([m({ type: [i14], json: { write: true } })], l6.prototype, "orderByFields", void 0), l6 = p18 = r([a2("esri.popup.RelatedRecordsInfo")], l6);
var c13 = l6;

// node_modules/@arcgis/core/support/actions/ActionToggle.js
var e4;
var r6 = e4 = class extends p2 {
  constructor(s7) {
    super(s7), this.image = null, this.type = "toggle", this.value = false;
  }
  clone() {
    return new e4({ active: this.active, className: this.className, disabled: this.disabled, icon: this.icon, id: this.id, indicator: this.indicator, title: this.title, visible: this.visible, image: this.image, value: this.value });
  }
};
r([m()], r6.prototype, "image", void 0), r([m()], r6.prototype, "value", void 0), r6 = e4 = r([a2("esri.support.actions.ActionToggle")], r6);
var a14 = r6;

// node_modules/@arcgis/core/PopupTemplate.js
var B = "relationships/";
var L = "expression/";
var M = V.ofType({ key: "type", defaultKeyValue: "button", base: p2, typeMap: { button: c2, toggle: a14 } });
var k = { base: p3, key: "type", typeMap: { media: I, custom: c4, text: c9, attachments: n4, fields: d, expression: i7, relationship: l5, utilityNetworkAssociations: a11 } };
var P = /* @__PURE__ */ new Set(["attachments", "fields", "media", "text", "expression", "relationship"]);
var W = /* @__PURE__ */ new Set([...P, "utility-network-associations"]);
var U = class extends a3.ClonableMixin(S2) {
  constructor() {
    super(...arguments), this.actions = null, this.content = "", this.expressionInfos = null, this.fieldInfos = null, this.layerOptions = null, this.lastEditInfoEnabled = true, this.outFields = null, this.overwriteActions = false, this.returnGeometry = false, this.title = "";
  }
  castContent(t3) {
    return Array.isArray(t3) ? t3.map((t4) => N(k, t4)) : "string" == typeof t3 || "function" == typeof t3 || t3 instanceof HTMLElement || S(t3) ? t3 : (n.getLogger(this).error("content error", "unsupported content value", { value: t3 }), null);
  }
  readContent(t3, e5) {
    const { popupElements: o3 } = e5;
    return Array.isArray(o3) && o3.length > 0 ? this._readPopupInfoElements(e5.description, e5.mediaInfos, o3) : this._readPopupInfo(e5);
  }
  writeWebSceneContent(t3, e5, o3, s7) {
    this._writePopupTemplateContent(t3, e5, s7);
  }
  writeWebMapContent(t3, e5, o3, s7) {
    this._writePopupTemplateContent(t3, e5, s7);
  }
  writeFieldInfos(t3, e5, o3, s7) {
    const { content: i16 } = this, r7 = Array.isArray(i16) ? i16 : null;
    if (t3) {
      const o4 = r7 ? r7.filter((t4) => "fields" === t4.type) : [], i17 = o4.length && o4.every((t4) => {
        var _a;
        return (_a = t4.fieldInfos) == null ? void 0 : _a.length;
      });
      e5.fieldInfos = t3.filter(Boolean).map((t4) => {
        const e6 = t4.toJSON(s7);
        return i17 && (e6.visible = false), e6;
      });
    }
    if (r7) for (const n10 of r7) "fields" === n10.type && this._writeFieldsContent(n10, e5);
  }
  writeLayerOptions(t3, e5, o3, s7) {
    e5[o3] = !t3 || null === t3.showNoDataRecords && null === t3.returnTopmostRaster ? null : t3.toJSON(s7);
  }
  writeTitle(t3, e5) {
    e5.title = t3 || "";
  }
  async collectRequiredFields(t3, e5) {
    const o3 = this.expressionInfos || [];
    await this._collectExpressionInfoFields(t3, e5, [...o3, ...this._getContentExpressionInfos(this.content, o3)]), x2(t3, e5, [...this.outFields || [], ...this._getActionsFields(this.actions), ...this._getTitleFields(this.title), ...this._getContentFields(this.content)]);
  }
  async getRequiredFields(t3) {
    const e5 = /* @__PURE__ */ new Set();
    return await this.collectRequiredFields(e5, t3), [...e5].sort();
  }
  _writePopupTemplateContent(t3, e5, o3) {
    "string" != typeof t3 ? Array.isArray(t3) && (e5.popupElements = t3.filter((t4) => "web-scene" === (o3 == null ? void 0 : o3.origin) ? P.has(t4.type) : W.has(t4.type)).map((t4) => t4 == null ? void 0 : t4.toJSON(o3)), e5.popupElements.forEach((t4) => {
      "attachments" === t4.type ? this._writeAttachmentContent(e5) : "media" === t4.type ? this._writeMediaContent(t4, e5) : "text" === t4.type ? this._writeTextContent(t4, e5) : "relationship" === t4.type && this._writeRelationshipContent(t4, e5);
    })) : e5.description = t3;
  }
  _writeFieldsContent(t3, e5) {
    if (!Array.isArray(t3.fieldInfos) || !t3.fieldInfos.length) return;
    const o3 = a(t3.fieldInfos);
    Array.isArray(e5.fieldInfos) ? o3.forEach((t4) => {
      const o4 = e5.fieldInfos.find((e6) => {
        var _a, _b;
        return ((_a = e6.fieldName) == null ? void 0 : _a.toLowerCase()) === ((_b = t4.fieldName) == null ? void 0 : _b.toLowerCase());
      });
      o4 ? o4.visible = true : e5.fieldInfos.push(t4);
    }) : e5.fieldInfos = o3;
  }
  _writeAttachmentContent(t3) {
    t3.showAttachments || (t3.showAttachments = true);
  }
  _writeRelationshipContent(t3, e5) {
    var _a, _b;
    const o3 = ((_a = t3.orderByFields) == null ? void 0 : _a.map((e6) => this._toFieldOrderJSON(e6, t3.relationshipId))) || [], s7 = [...((_b = e5.relatedRecordsInfo) == null ? void 0 : _b.orderByFields) || [], ...o3];
    e5.relatedRecordsInfo = { showRelatedRecords: true, ...(s7 == null ? void 0 : s7.length) && { orderByFields: s7 } };
  }
  _writeTextContent(t3, e5) {
    !e5.description && t3.text && (e5.description = t3.text);
  }
  _writeMediaContent(t3, e5) {
    if (!Array.isArray(t3.mediaInfos) || !t3.mediaInfos.length) return;
    const o3 = a(t3.mediaInfos);
    Array.isArray(e5.mediaInfos) ? e5.mediaInfos = [...e5.mediaInfos, ...o3] : e5.mediaInfos = o3;
  }
  _readPopupInfoElements(t3, e5, o3) {
    const s7 = { description: false, mediaInfos: false };
    return o3.map((o4) => "media" === o4.type ? (o4.mediaInfos || !e5 || s7.mediaInfos || (o4.mediaInfos = e5, s7.mediaInfos = true), I.fromJSON(o4)) : "text" === o4.type ? (o4.text || !t3 || s7.description || (o4.text = t3, s7.description = true), c9.fromJSON(o4)) : "attachments" === o4.type ? n4.fromJSON(o4) : "fields" === o4.type ? d.fromJSON(o4) : "expression" === o4.type ? i7.fromJSON(o4) : "relationship" === o4.type ? l5.fromJSON(o4) : "utilityNetworkAssociations" === o4.type ? a11.fromJSON(o4) : void 0).filter(Boolean);
  }
  _toRelationshipContent(t3) {
    const { field: e5, order: o3 } = t3;
    if (!(e5 == null ? void 0 : e5.startsWith(B))) return null;
    const s7 = e5.replace(B, "").split("/");
    if (2 !== s7.length) return null;
    const i16 = parseInt(s7[0], 10), r7 = s7[1];
    return !Number.isNaN(i16) && r7 ? l5.fromJSON({ relationshipId: i16, orderByFields: [{ field: r7, order: o3 }] }) : null;
  }
  _toFieldOrderJSON(t3, e5) {
    const { order: o3, field: s7 } = t3;
    return { field: `${B}${e5}/${s7}`, order: o3 };
  }
  _readPopupInfo({ description: t3, mediaInfos: e5, showAttachments: o3, relatedRecordsInfo: s7 = { showRelatedRecords: false } }) {
    const i16 = [];
    t3 ? i16.push(new c9({ text: t3 })) : i16.push(new d()), Array.isArray(e5) && e5.length && i16.push(I.fromJSON({ mediaInfos: e5 })), o3 && i16.push(n4.fromJSON({ displayType: "auto" }));
    const { showRelatedRecords: r7, orderByFields: n10 } = s7;
    return r7 && (n10 == null ? void 0 : n10.length) && n10.forEach((t4) => {
      const e6 = this._toRelationshipContent(t4);
      e6 && i16.push(e6);
    }), i16.length ? i16 : t3;
  }
  _getContentElementFields(t3) {
    const e5 = t3 == null ? void 0 : t3.type;
    if ("attachments" === e5) return [...this._extractFieldNames(t3.title), ...this._extractFieldNames(t3.description)];
    if ("custom" === e5) return t3.outFields || [];
    if ("fields" === e5) return [...this._extractFieldNames(t3.title), ...this._extractFieldNames(t3.description), ...this._getFieldInfoFields(t3.fieldInfos ?? this.fieldInfos)];
    if ("media" === e5) {
      const e6 = t3.mediaInfos || [];
      return [...this._extractFieldNames(t3.title), ...this._extractFieldNames(t3.description), ...e6.reduce((t4, e7) => [...t4, ...this._getMediaInfoFields(e7)], [])];
    }
    return "text" === e5 ? this._extractFieldNames(t3.text) : "relationship" === e5 || "utility-network-associations" === e5 ? [...this._extractFieldNames(t3.title), ...this._extractFieldNames(t3.description)] : [];
  }
  _getMediaInfoFields(t3) {
    const { caption: e5, title: o3, value: s7 } = t3, i16 = s7 || {}, { fields: r7, normalizeField: n10, tooltipField: p19, sourceURL: l7, linkURL: a15 } = i16, d3 = [...this._extractFieldNames(o3), ...this._extractFieldNames(e5), ...this._extractFieldNames(l7), ...this._extractFieldNames(a15), ...r7 ?? []];
    return n10 && d3.push(n10), p19 && d3.push(p19), d3;
  }
  _getContentExpressionInfos(t3, e5) {
    return Array.isArray(t3) ? t3.reduce((t4, e6) => [...t4, ..."expression" === e6.type && e6.expressionInfo ? [e6.expressionInfo] : []], e5) : [];
  }
  _getContentFields(t3) {
    return "string" == typeof t3 ? this._extractFieldNames(t3) : Array.isArray(t3) ? t3.reduce((t4, e5) => [...t4, ...this._getContentElementFields(e5)], []) : [];
  }
  async _collectExpressionInfoFields(t3, e5, o3) {
    o3 && await Promise.all(o3.map((o4) => _(t3, e5, o4.expression)));
  }
  _getFieldInfoFields(t3) {
    return t3 ? t3.filter(({ fieldName: t4, visible: e5 }) => !(void 0 !== e5 && !e5 || !t4 || t4.startsWith(B) || t4.startsWith(L))).map((t4) => t4.fieldName) : [];
  }
  _getActionsFields(t3) {
    return t3 ? t3.toArray().reduce((t4, e5) => [...t4, ...this._getActionFields(e5)], []) : [];
  }
  _getActionFields(t3) {
    const { className: e5, title: o3, type: s7 } = t3, i16 = "button" === s7 || "toggle" === s7 ? t3.image : "";
    return [...this._extractFieldNames(o3), ...this._extractFieldNames(e5), ...this._extractFieldNames(i16)];
  }
  _getTitleFields(t3) {
    return "string" == typeof t3 ? this._extractFieldNames(t3) : [];
  }
  _extractFieldNames(t3) {
    return Xe(t3).filter((t4) => !(0 === t4.indexOf(B) || 0 === t4.indexOf(L)));
  }
};
r([m({ type: M })], U.prototype, "actions", void 0), r([m()], U.prototype, "content", void 0), r([s("content")], U.prototype, "castContent", null), r([o2("content", ["description", "fieldInfos", "popupElements", "mediaInfos", "showAttachments", "relatedRecordsInfo"])], U.prototype, "readContent", null), r([r2("web-scene", "content", { popupElements: { type: V.ofType(c12) }, showAttachments: { type: Boolean }, mediaInfos: { type: V.ofType(m3) }, description: { type: String }, relatedRecordsInfo: { type: c13 } })], U.prototype, "writeWebSceneContent", null), r([r2("content", { popupElements: { type: V.ofType(a12) }, showAttachments: { type: Boolean }, mediaInfos: { type: V.ofType(m3) }, description: { type: String }, relatedRecordsInfo: { type: c13 } })], U.prototype, "writeWebMapContent", null), r([m({ type: [i2], json: { write: true } })], U.prototype, "expressionInfos", void 0), r([m({ type: [n6] })], U.prototype, "fieldInfos", void 0), r([r2("fieldInfos")], U.prototype, "writeFieldInfos", null), r([m({ type: a13 })], U.prototype, "layerOptions", void 0), r([r2("layerOptions")], U.prototype, "writeLayerOptions", null), r([m({ type: Boolean, json: { read: { source: "showLastEditInfo" }, write: { target: "showLastEditInfo" }, default: true } })], U.prototype, "lastEditInfoEnabled", void 0), r([m()], U.prototype, "outFields", void 0), r([m()], U.prototype, "overwriteActions", void 0), r([m()], U.prototype, "returnGeometry", void 0), r([m({ json: { type: String } })], U.prototype, "title", void 0), r([r2("title")], U.prototype, "writeTitle", null), U = r([a2("esri.PopupTemplate")], U);
var q = U;

export {
  n3 as n,
  n4 as n2,
  i6 as i,
  m2 as m,
  n6 as n3,
  d,
  p8 as p,
  I,
  i14 as i2,
  c9 as c,
  c10 as c2,
  i2 as i3,
  p2,
  c2 as c3,
  a14 as a,
  q
};
//# sourceMappingURL=chunk-LCBD3JEK.js.map
