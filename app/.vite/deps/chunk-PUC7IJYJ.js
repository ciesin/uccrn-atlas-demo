import {
  n
} from "./chunk-2Y4TRKRB.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  r as r4
} from "./chunk-ZYOZHQFS.js";
import {
  o
} from "./chunk-JLFV7EBO.js";
import {
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  r as r2
} from "./chunk-6P7HXSJ6.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  S
} from "./chunk-5BULKNR2.js";
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

// node_modules/@arcgis/core/symbols/support/textUtils.js
var l = ["none", "underline", "line-through"];
var t = ["normal", "italic", "oblique"];
var r5 = ["normal", "lighter", "bold", "bolder"];
var n2 = { type: Number, cast: (l3) => {
  const t2 = a2(l3);
  return 0 === t2 ? 1 : r2(t2, 0.1, 4);
}, nonNullable: true };
var i = ["left", "right", "center"];
var a4 = ["baseline", "top", "middle", "bottom"];
var m2 = { type: i, nonNullable: true };
var p = { type: a4, nonNullable: true };
var s2 = 8;

// node_modules/@arcgis/core/symbols/Font.js
var c;
var l2 = c = class extends S {
  constructor(t2) {
    super(t2), this.decoration = "none", this.family = "sans-serif", this.size = 9, this.style = "normal", this.weight = "normal";
  }
  castSize(t2) {
    return o(t2);
  }
  clone() {
    return new c({ decoration: this.decoration, family: this.family, size: this.size, style: this.style, weight: this.weight });
  }
  hash() {
    return `${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`;
  }
};
r([m({ type: l, json: { default: "none", write: true } })], l2.prototype, "decoration", void 0), r([m({ type: String, json: { write: true } })], l2.prototype, "family", void 0), r([m({ type: Number, json: { write: { overridePolicy: (t2, o2, e) => ({ enabled: !e || !e.textSymbol3D }) } } })], l2.prototype, "size", void 0), r([s("size")], l2.prototype, "castSize", null), r([m({ type: t, json: { default: "normal", write: true } })], l2.prototype, "style", void 0), r([m({ type: r5, json: { default: "normal", write: true } })], l2.prototype, "weight", void 0), l2 = c = r([a3("esri.symbols.Font")], l2);
var m3 = l2;

// node_modules/@arcgis/core/symbols/TextSymbol.js
var f;
var g = f = class extends n {
  constructor(...t2) {
    super(...t2), this.backgroundColor = null, this.borderLineColor = null, this.borderLineSize = null, this.font = new m3(), this.horizontalAlignment = "center", this.kerning = true, this.haloColor = null, this.haloSize = null, this.rightToLeft = null, this.rotated = false, this.text = "", this.type = "text", this.verticalAlignment = "baseline", this.xoffset = 0, this.yoffset = 0, this.angle = 0, this.width = null, this.lineWidth = 192, this.lineHeight = 1;
  }
  normalizeCtorArgs(t2, o2, e) {
    if (t2 && "string" != typeof t2) return t2;
    const i2 = {};
    return t2 && (i2.text = t2), o2 && (i2.font = o2), e && (i2.color = e), i2;
  }
  writeLineWidth(t2, o2, e, i2) {
    i2 && "string" != typeof i2 ? i2.origin : o2[e] = t2;
  }
  castLineWidth(t2) {
    return o(t2);
  }
  writeLineHeight(t2, o2, e, i2) {
    i2 && "string" != typeof i2 ? i2.origin : o2[e] = t2;
  }
  clone() {
    return new f({ angle: this.angle, backgroundColor: a(this.backgroundColor), borderLineColor: a(this.borderLineColor), borderLineSize: this.borderLineSize, color: a(this.color), font: this.font && this.font.clone(), haloColor: a(this.haloColor), haloSize: this.haloSize, horizontalAlignment: this.horizontalAlignment, kerning: this.kerning, lineHeight: this.lineHeight, lineWidth: this.lineWidth, rightToLeft: this.rightToLeft, rotated: this.rotated, text: this.text, verticalAlignment: this.verticalAlignment, width: this.width, xoffset: this.xoffset, yoffset: this.yoffset });
  }
  hash() {
    var _a, _b, _c;
    return `${(_a = this.backgroundColor) == null ? void 0 : _a.hash()}.${this.borderLineColor}.${this.borderLineSize}.${(_b = this.color) == null ? void 0 : _b.hash()}.${this.font && this.font.hash()}.${(_c = this.haloColor) == null ? void 0 : _c.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`;
  }
};
r([m({ type: h, json: { write: true } })], g.prototype, "backgroundColor", void 0), r([m({ type: h, json: { write: true } })], g.prototype, "borderLineColor", void 0), r([m({ type: Number, json: { write: true }, cast: o })], g.prototype, "borderLineSize", void 0), r([m({ type: m3, json: { write: true } })], g.prototype, "font", void 0), r([m({ ...m2, json: { write: true } })], g.prototype, "horizontalAlignment", void 0), r([m({ type: Boolean, json: { write: true } })], g.prototype, "kerning", void 0), r([m({ type: h, json: { write: true } })], g.prototype, "haloColor", void 0), r([m({ type: Number, cast: o, json: { write: true } })], g.prototype, "haloSize", void 0), r([m({ type: Boolean, json: { write: true } })], g.prototype, "rightToLeft", void 0), r([m({ type: Boolean, json: { write: true } })], g.prototype, "rotated", void 0), r([m({ type: String, json: { write: true } })], g.prototype, "text", void 0), r([r4({ esriTS: "text" }, { readOnly: true })], g.prototype, "type", void 0), r([m({ ...p, json: { write: true } })], g.prototype, "verticalAlignment", void 0), r([m({ type: Number, cast: o, json: { write: true } })], g.prototype, "xoffset", void 0), r([m({ type: Number, cast: o, json: { write: true } })], g.prototype, "yoffset", void 0), r([m({ type: Number, json: { read: (t2) => t2 && -1 * t2, write: (t2, o2) => o2.angle = t2 && -1 * t2 } })], g.prototype, "angle", void 0), r([m({ type: Number, json: { write: true } })], g.prototype, "width", void 0), r([m({ type: Number })], g.prototype, "lineWidth", void 0), r([r3("lineWidth")], g.prototype, "writeLineWidth", null), r([s("lineWidth")], g.prototype, "castLineWidth", null), r([m(n2)], g.prototype, "lineHeight", void 0), r([r3("lineHeight")], g.prototype, "writeLineHeight", null), g = f = r([a3("esri.symbols.TextSymbol")], g);
var m4 = g;

export {
  n2 as n,
  m2 as m,
  p,
  s2 as s,
  m3 as m2,
  m4 as m3
};
//# sourceMappingURL=chunk-PUC7IJYJ.js.map
