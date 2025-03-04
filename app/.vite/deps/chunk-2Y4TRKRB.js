import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
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
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/symbols/Symbol.js
var p = new o({ esriSMS: "simple-marker", esriPMS: "picture-marker", esriSLS: "simple-line", esriSFS: "simple-fill", esriPFS: "picture-fill", esriTS: "text", esriSHD: "shield-label-symbol", PointSymbol3D: "point-3d", LineSymbol3D: "line-3d", PolygonSymbol3D: "polygon-3d", WebStyleSymbol: "web-style", MeshSymbol3D: "mesh-3d", LabelSymbol3D: "label-3d", CIMSymbolReference: "cim" });
var m2 = 0;
var c = class extends S {
  constructor(o4) {
    super(o4), this.id = "sym" + m2++, this.type = null, this.color = new h([0, 0, 0, 1]);
  }
  readColor(o4) {
    return null != (o4 == null ? void 0 : o4[0]) ? [o4[0], o4[1], o4[2], o4[3] / 255] : o4;
  }
  async collectRequiredFields(o4, r4) {
  }
  hash() {
    return JSON.stringify(this.toJSON());
  }
  clone() {
  }
};
r([m({ type: p.apiValues, readOnly: true, json: { read: false, write: { ignoreOrigin: true, writer: p.write, isRequired: true } } })], c.prototype, "type", void 0), r([m({ type: h, json: { write: { allowNull: true } } })], c.prototype, "color", void 0), r([o2("color")], c.prototype, "readColor", null), c = r([a2("esri.symbols.Symbol")], c);
var n = c;

// node_modules/@arcgis/core/symbols/LineSymbol.js
var p2 = class extends n {
  constructor(o4) {
    super(o4), this.type = "simple-line", this.width = 0.75;
  }
  hash() {
    return `${this.type}.${this.width}`;
  }
};
r([r3({ esriSLS: "simple-line" }, { readOnly: true })], p2.prototype, "type", void 0), r([m({ type: Number, cast: o3, json: { write: true } })], p2.prototype, "width", void 0), p2 = r([a2("esri.symbols.LineSymbol")], p2);
var c2 = p2;

// node_modules/@arcgis/core/symbols/support/lineMarkers.js
var e = ["begin", "end", "begin-end"];
var n2 = ["arrow", "circle", "square", "diamond", "cross", "x"];

// node_modules/@arcgis/core/symbols/LineSymbolMarker.js
var n3;
var m3 = n3 = class extends S {
  constructor(r4) {
    super(r4), this.placement = "begin-end", this.type = "line-marker", this.style = "arrow";
  }
  writeStyle(r4, o4, e2, t) {
    o4[e2] = "web-map" === (t == null ? void 0 : t.origin) ? "arrow" : r4;
  }
  set color(r4) {
    this._set("color", r4);
  }
  readColor(r4) {
    return null != (r4 == null ? void 0 : r4[0]) ? [r4[0], r4[1], r4[2], r4[3] / 255] : r4;
  }
  writeColor(r4, o4, e2, t) {
    "web-map" === (t == null ? void 0 : t.origin) || (o4[e2] = r4);
  }
  clone() {
    return new n3({ color: a(this.color), placement: this.placement, style: this.style });
  }
  hash() {
    var _a;
    return `${this.placement}.${(_a = this.color) == null ? void 0 : _a.hash()}.${this.style}`;
  }
};
r([m({ type: ["begin", "end", "begin-end"], json: { write: true } })], m3.prototype, "placement", void 0), r([r3({ "line-marker": "line-marker" }, { readOnly: true }), m({ json: { origins: { "web-map": { write: false } } } })], m3.prototype, "type", void 0), r([m({ type: n2 })], m3.prototype, "style", void 0), r([r2("style")], m3.prototype, "writeStyle", null), r([m({ type: h, value: null, json: { write: { allowNull: true } } })], m3.prototype, "color", null), r([o2("color")], m3.prototype, "readColor", null), r([r2("color")], m3.prototype, "writeColor", null), m3 = n3 = r([a2("esri.symbols.LineSymbolMarker")], m3);
var u = m3;

// node_modules/@arcgis/core/symbols/SimpleLineSymbol.js
var h2;
var p3 = new o({ esriSLSSolid: "solid", esriSLSDash: "dash", esriSLSDot: "dot", esriSLSDashDot: "dash-dot", esriSLSDashDotDot: "long-dash-dot-dot", esriSLSNull: "none", esriSLSShortDash: "short-dash", esriSLSShortDot: "short-dot", esriSLSShortDashDot: "short-dash-dot", esriSLSShortDashDotDot: "short-dash-dot-dot", esriSLSLongDash: "long-dash", esriSLSLongDashDot: "long-dash-dot" });
var m4 = h2 = class extends c2 {
  constructor(...o4) {
    super(...o4), this.type = "simple-line", this.style = "solid", this.cap = "round", this.join = "round", this.marker = null, this.miterLimit = 2;
  }
  normalizeCtorArgs(o4, r4, t, s, i, n4) {
    if (o4 && "string" != typeof o4) return o4;
    const l = {};
    return null != o4 && (l.style = o4), null != r4 && (l.color = r4), null != t && (l.width = o3(t)), null != s && (l.cap = s), null != i && (l.join = i), null != n4 && (l.miterLimit = o3(n4)), l;
  }
  clone() {
    var _a;
    return new h2({ color: a(this.color), style: this.style, width: this.width, cap: this.cap, join: this.join, miterLimit: this.miterLimit, marker: (_a = this.marker) == null ? void 0 : _a.clone() });
  }
  hash() {
    var _a, _b;
    return `${super.hash()}.${(_a = this.color) == null ? void 0 : _a.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${(_b = this.marker) == null ? void 0 : _b.hash()}`;
  }
};
r([r3({ esriSLS: "simple-line" }, { readOnly: true })], m4.prototype, "type", void 0), r([m({ type: p3.apiValues, json: { read: p3.read, write: p3.write } })], m4.prototype, "style", void 0), r([m({ type: ["butt", "round", "square"], json: { write: { overridePolicy: (o4, r4, t) => ({ enabled: "round" !== o4 && null == (t == null ? void 0 : t.origin) }) } } })], m4.prototype, "cap", void 0), r([m({ type: ["miter", "round", "bevel"], json: { write: { overridePolicy: (o4, r4, t) => ({ enabled: "round" !== o4 && null == (t == null ? void 0 : t.origin) }) } } })], m4.prototype, "join", void 0), r([m({ types: { key: "type", base: null, defaultKeyValue: "line-marker", typeMap: { "line-marker": u } }, json: { write: true, origins: { "web-scene": { write: false } } } })], m4.prototype, "marker", void 0), r([m({ type: Number, json: { read: false, write: false } })], m4.prototype, "miterLimit", void 0), m4 = h2 = r([a2("esri.symbols.SimpleLineSymbol")], m4);
var d = m4;

export {
  n,
  e,
  n2,
  d
};
//# sourceMappingURL=chunk-2Y4TRKRB.js.map
