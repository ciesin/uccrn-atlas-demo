import {
  a as a3
} from "./chunk-4WO6KUCB.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  o as o2
} from "./chunk-JLFV7EBO.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  h,
  p
} from "./chunk-UFBX3XSC.js";
import {
  V,
  Y,
  it,
  ot,
  tt
} from "./chunk-F7TCEOHX.js";
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

// node_modules/@arcgis/core/symbols/support/urlUtils.js
function l(r3, t, a5) {
  return t.imageData ? it({ mediaType: t.contentType || "image/png", isBase64: true, data: t.imageData }) : o3(t.url, a5);
}
function o3(e, a5) {
  if (!Y(e)) {
    const r3 = p2(a5);
    if (r3) return V(r3, "images", e);
  }
  return p(e, a5);
}
function s(e, r3, t, i) {
  if (tt(e)) {
    const a5 = ot(e);
    if (!a5) return;
    r3.contentType = a5.mediaType, r3.imageData = a5.data, t && t.imageData === r3.imageData && t.url && h(t.url, r3, "url", i);
  } else h(e, r3, "url", i);
}
var m2 = { json: { read: { source: ["imageData", "url"], reader: l }, write: { writer(e, r3, t, a5) {
  s(e, r3, this.source, a5);
} } } };
var c = { readOnly: true, json: { read: { source: ["imageData", "url"], reader(e, r3, t) {
  const a5 = {};
  return r3.imageData && (a5.imageData = r3.imageData), r3.contentType && (a5.contentType = r3.contentType), r3.url && (a5.url = o3(r3.url, t)), a5;
} } } };
function p2(e) {
  var _a, _b;
  if (!e) return null;
  const { origin: r3, layer: t } = e;
  if ("service" !== r3 && "portal-item" !== r3) return null;
  const a5 = t == null ? void 0 : t.type;
  return "feature" === a5 || "stream" === a5 ? (_a = t.parsedUrl) == null ? void 0 : _a.path : "map-image" === a5 || "tile" === a5 ? (_b = e.url) == null ? void 0 : _b.path : null;
}

// node_modules/@arcgis/core/symbols/PictureMarkerSymbol.js
var l2;
var a4 = l2 = class extends a3 {
  constructor(...r3) {
    super(...r3), this.color = null, this.type = "picture-marker", this.url = null, this.source = null, this.height = 12, this.width = 12, this.size = null;
  }
  normalizeCtorArgs(r3, t, o4) {
    if (r3 && "string" != typeof r3 && null == r3.imageData) return r3;
    const s2 = {};
    return r3 && (s2.url = r3), null != t && (s2.width = o2(t)), null != o4 && (s2.height = o2(o4)), s2;
  }
  readHeight(r3, t) {
    return t.size || r3;
  }
  readWidth(r3, t) {
    return t.size || r3;
  }
  clone() {
    const r3 = new l2({ angle: this.angle, height: this.height, url: this.url, width: this.width, xoffset: this.xoffset, yoffset: this.yoffset });
    return r3._set("source", a(this.source)), r3;
  }
  hash() {
    return `${super.hash()}.${this.height}.${this.url}.${this.width}`;
  }
};
r([m({ json: { write: false } })], a4.prototype, "color", void 0), r([r2({ esriPMS: "picture-marker" }, { readOnly: true })], a4.prototype, "type", void 0), r([m(m2)], a4.prototype, "url", void 0), r([m(c)], a4.prototype, "source", void 0), r([m({ type: Number, cast: o2, json: { write: true } })], a4.prototype, "height", void 0), r([o("height", ["height", "size"])], a4.prototype, "readHeight", null), r([m({ type: Number, cast: o2, json: { write: true } })], a4.prototype, "width", void 0), r([m({ json: { write: false } })], a4.prototype, "size", void 0), a4 = l2 = r([a2("esri.symbols.PictureMarkerSymbol")], a4);
var n = a4;

export {
  m2 as m,
  c,
  n
};
//# sourceMappingURL=chunk-TYJOGWKZ.js.map
