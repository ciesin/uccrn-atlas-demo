import {
  d,
  n
} from "./chunk-2Y4TRKRB.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  o as o2
} from "./chunk-JLFV7EBO.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a as a2,
  a3
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/symbols/FillSymbol.js
var l = class extends n {
  constructor(e) {
    super(e), this.outline = null, this.type = null;
  }
  hash() {
    var _a;
    return `${this.type}.${(_a = this.outline) == null ? void 0 : _a.hash()}`;
  }
};
r([m({ types: { key: "type", base: null, defaultKeyValue: "simple-line", typeMap: { "simple-line": d } }, json: { default: null, write: true } })], l.prototype, "outline", void 0), r([m({ type: ["simple-fill", "picture-fill"], readOnly: true })], l.prototype, "type", void 0), l = r([a3("esri.symbols.FillSymbol")], l);
var p = l;

// node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var p2;
var c = new o({ esriSFSSolid: "solid", esriSFSNull: "none", esriSFSHorizontal: "horizontal", esriSFSVertical: "vertical", esriSFSForwardDiagonal: "forward-diagonal", esriSFSBackwardDiagonal: "backward-diagonal", esriSFSCross: "cross", esriSFSDiagonalCross: "diagonal-cross" });
var m2 = p2 = class extends p {
  constructor(...o3) {
    super(...o3), this.color = new h([0, 0, 0, 0.25]), this.outline = new d(), this.type = "simple-fill", this.style = "solid";
  }
  normalizeCtorArgs(o3, r4, s) {
    if (o3 && "string" != typeof o3) return o3;
    const e = {};
    return o3 && (e.style = o3), r4 && (e.outline = r4), s && (e.color = s), e;
  }
  clone() {
    return new p2({ color: a(this.color), outline: this.outline && this.outline.clone(), style: this.style });
  }
  hash() {
    return `${super.hash()}${this.style}.${this.color && this.color.hash()}`;
  }
};
r([m()], m2.prototype, "color", void 0), r([m()], m2.prototype, "outline", void 0), r([r3({ esriSFS: "simple-fill" }, { readOnly: true })], m2.prototype, "type", void 0), r([m({ type: c.apiValues, json: { read: c.read, write: c.write } })], m2.prototype, "style", void 0), m2 = p2 = r([a3("esri.symbols.SimpleFillSymbol")], m2);
var S = m2;

// node_modules/@arcgis/core/symbols/MarkerSymbol.js
var i = class extends n {
  constructor(t) {
    super(t), this.angle = 0, this.type = null, this.xoffset = 0, this.yoffset = 0, this.size = 9;
  }
  hash() {
    return `${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`;
  }
};
r([m({ type: Number, json: { read: (t) => t && -1 * t, write: (t, e) => e.angle = t && -1 * t } })], i.prototype, "angle", void 0), r([m({ type: ["simple-marker", "picture-marker"], readOnly: true })], i.prototype, "type", void 0), r([m({ type: Number, cast: o2, json: { write: true } })], i.prototype, "xoffset", void 0), r([m({ type: Number, cast: o2, json: { write: true } })], i.prototype, "yoffset", void 0), r([m({ cast: (t) => "auto" === t ? t : a2(o2(t)), json: { write: true } })], i.prototype, "size", void 0), i = r([a3("esri.symbols.MarkerSymbol")], i);
var a4 = i;

// node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var h2;
var m3 = new o({ esriSMSCircle: "circle", esriSMSSquare: "square", esriSMSCross: "cross", esriSMSX: "x", esriSMSDiamond: "diamond", esriSMSTriangle: "triangle", esriSMSPath: "path" });
var u = h2 = class extends a4 {
  constructor(...o3) {
    super(...o3), this.color = new h([255, 255, 255, 0.25]), this.type = "simple-marker", this.size = 12, this.style = "circle", this.outline = new d();
  }
  normalizeCtorArgs(o3, e, r4, t) {
    if (o3 && "string" != typeof o3) return o3;
    const i2 = {};
    return o3 && (i2.style = o3), null != e && (i2.size = o2(e)), r4 && (i2.outline = r4), t && (i2.color = t), i2;
  }
  writeColor(o3, e) {
    o3 && "x" !== this.style && "cross" !== this.style && (e.color = o3.toJSON()), null === o3 && (e.color = null);
  }
  set path(o3) {
    this.style = "path", this._set("path", o3);
  }
  clone() {
    return new h2({ angle: this.angle, color: a(this.color), outline: this.outline && this.outline.clone(), path: this.path, size: this.size, style: this.style, xoffset: this.xoffset, yoffset: this.yoffset });
  }
  hash() {
    var _a;
    return `${super.hash()}.${this.color && this.color.hash()}.${this.path}.${this.style}.${(_a = this.outline) == null ? void 0 : _a.hash()}`;
  }
};
r([m()], u.prototype, "color", void 0), r([r2("color")], u.prototype, "writeColor", null), r([r3({ esriSMS: "simple-marker" }, { readOnly: true })], u.prototype, "type", void 0), r([m()], u.prototype, "size", void 0), r([m({ type: m3.apiValues, json: { read: m3.read, write: m3.write } })], u.prototype, "style", void 0), r([m({ type: String, json: { write: true } })], u.prototype, "path", null), r([m({ types: { key: "type", base: null, defaultKeyValue: "simple-line", typeMap: { "simple-line": d } }, json: { default: null, write: true } })], u.prototype, "outline", void 0), u = h2 = r([a3("esri.symbols.SimpleMarkerSymbol")], u);
var y = u;

export {
  p,
  a4 as a,
  S,
  y
};
//# sourceMappingURL=chunk-4WO6KUCB.js.map
