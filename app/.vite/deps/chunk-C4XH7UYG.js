import {
  c
} from "./chunk-XJOBEGIR.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  h as h3
} from "./chunk-3UHB6K6P.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  h as h2,
  m as m2
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  h
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/geometry/support/MeshTexture.js
var p;
var h4 = /* @__PURE__ */ new WeakMap();
var d = 0;
var u = p = class extends S {
  constructor(t) {
    super(t), this.wrap = "repeat";
  }
  get url() {
    return this._get("url") || null;
  }
  set url(t) {
    this._set("url", t), t && this._set("data", null);
  }
  get data() {
    return this._get("data") || null;
  }
  set data(t) {
    this._set("data", t), t && this._set("url", null);
  }
  writeData(t, e, a4, r3) {
    if (t instanceof HTMLImageElement) {
      const s = { type: "image-element", src: m2(t.src, r3), crossOrigin: t.crossOrigin };
      e[a4] = s;
    } else if (t instanceof HTMLCanvasElement) {
      const r4 = { type: "canvas-element", imageData: m3(t.getContext("2d").getImageData(0, 0, t.width, t.height)) };
      e[a4] = r4;
    } else if (t instanceof HTMLVideoElement) {
      const s = { type: "video-element", src: m2(t.src, r3), autoplay: t.autoplay, loop: t.loop, muted: t.muted, crossOrigin: t.crossOrigin, preload: t.preload };
      e[a4] = s;
    } else if (t instanceof ImageData) {
      const r4 = { type: "image-data", imageData: m3(t) };
      e[a4] = r4;
    }
  }
  readData(t) {
    switch (t.type) {
      case "image-element": {
        const e = new Image();
        return e.src = t.src, e.crossOrigin = t.crossOrigin, e;
      }
      case "canvas-element": {
        const e = g(t.imageData), a4 = document.createElement("canvas");
        return a4.width = e.width, a4.height = e.height, a4.getContext("2d").putImageData(e, 0, 0), a4;
      }
      case "image-data":
        return g(t.imageData);
      case "video-element": {
        const e = document.createElement("video");
        return e.src = t.src, e.crossOrigin = t.crossOrigin, e.autoplay = t.autoplay, e.loop = t.loop, e.muted = t.muted, e.preload = t.preload, e;
      }
      default:
        return;
    }
  }
  get transparent() {
    const { data: t, url: e } = this;
    return t instanceof HTMLCanvasElement ? f(t.getContext("2d").getImageData(0, 0, t.width, t.height)) : t instanceof ImageData ? f(t) : !(!(e == null ? void 0 : e.toLowerCase().endsWith(".png")) && !(e == null ? void 0 : e.toLocaleLowerCase().startsWith("data:image/png;")));
  }
  set transparent(t) {
    this._overrideIfSome("transparent", t);
  }
  get contentHash() {
    const t = "string" == typeof this.wrap ? this.wrap : "object" == typeof this.wrap ? `${this.wrap.horizontal}/${this.wrap.vertical}` : "", e = (e2 = "") => `d:${e2},t:${this.transparent},w:${t}`;
    return null != this.url ? e(this.url) : null != this.data ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? e(this.data.src) : (h4.has(this.data) || h4.set(this.data, ++d), e(h4.get(this.data))) : e();
  }
  get memoryUsage() {
    let t = 0;
    if (t += null != this.url ? this.url.length : 0, null != this.data) {
      const e = this.data;
      "data" in e ? t += e.data.byteLength : e instanceof HTMLImageElement ? t += e.naturalWidth * e.naturalHeight * 3 : e instanceof HTMLCanvasElement && (t += e.width * e.height * 3);
    }
    return t;
  }
  clone() {
    const t = { url: this.url, data: this.data, wrap: this._cloneWrap() };
    return new p(t);
  }
  cloneWithDeduplication(t) {
    const e = t.get(this);
    if (e) return e;
    const a4 = this.clone();
    return t.set(this, a4), a4;
  }
  _cloneWrap() {
    return "string" == typeof this.wrap ? this.wrap : { horizontal: this.wrap.horizontal, vertical: this.wrap.vertical };
  }
  static from(t) {
    return "string" == typeof t ? new p({ url: t }) : t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageData || t instanceof HTMLVideoElement ? new p({ data: t }) : h(p, t);
  }
};
function m3(t) {
  let e = "";
  for (let a4 = 0; a4 < t.data.length; a4++) e += String.fromCharCode(t.data[a4]);
  return { data: btoa(e), width: t.width, height: t.height };
}
function g(t) {
  const a4 = atob(t.data), r3 = new Uint8ClampedArray(a4.length);
  for (let e = 0; e < a4.length; e++) r3[e] = a4.charCodeAt(e);
  return c(r3, t.width, t.height);
}
function f(t) {
  for (let e = 3; e < t.data.length; e += 4) if (255 !== t.data[e]) return true;
  return false;
}
r([m({ type: String, json: { write: h2 } })], u.prototype, "url", null), r([m({ json: { write: { overridePolicy() {
  return { enabled: !this.url };
} } } }), m()], u.prototype, "data", null), r([r2("data")], u.prototype, "writeData", null), r([o("data")], u.prototype, "readData", null), r([m({ type: Boolean, json: { write: { overridePolicy() {
  return { enabled: this._isOverridden("transparent") };
} } } })], u.prototype, "transparent", null), r([m({ json: { write: true } })], u.prototype, "wrap", void 0), r([m({ readOnly: true })], u.prototype, "contentHash", null), u = p = r([a("esri.geometry.support.MeshTexture")], u);
var w = u;

// node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js
var p2 = class extends a2.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.offset = [0, 0], this.rotation = 0, this.scale = [1, 1];
  }
};
r([m({ type: [Number], nonNullable: true, json: { write: true } })], p2.prototype, "offset", void 0), r([m({ type: Number, nonNullable: true, json: { write: true } })], p2.prototype, "rotation", void 0), r([m({ type: [Number], nonNullable: true, json: { write: true } })], p2.prototype, "scale", void 0), p2 = r([a("esri.geometry.support.MeshTextureTransform")], p2);
var i = p2;

// node_modules/@arcgis/core/geometry/support/MeshMaterial.js
var n;
var u2 = n = class extends S {
  constructor(o2) {
    super(o2), this.color = null, this.colorTexture = null, this.colorTextureTransform = null, this.normalTexture = void 0, this.normalTextureTransform = void 0, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = true;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(o2, r3) {
    const e = null != o2 ? o2.get(this) : null;
    if (e) return e;
    const t = new n(this.clonePropertiesWithDeduplication(r3));
    return null != o2 && o2.set(this, t), t;
  }
  clonePropertiesWithDeduplication(o2) {
    var _a, _b, _c, _d;
    return { color: null != this.color ? this.color.clone() : null, colorTexture: (_a = this.colorTexture) == null ? void 0 : _a.cloneWithDeduplication(o2), normalTexture: (_b = this.normalTexture) == null ? void 0 : _b.cloneWithDeduplication(o2), alphaMode: this.alphaMode, alphaCutoff: this.alphaCutoff, doubleSided: this.doubleSided, colorTextureTransform: (_c = this.colorTextureTransform) == null ? void 0 : _c.clone(), normalTextureTransform: (_d = this.normalTextureTransform) == null ? void 0 : _d.clone() };
  }
  get memoryUsage() {
    return this.getMemoryUsage();
  }
  getMemoryUsage() {
    let o2 = 0;
    return o2 += null != this.color ? 16 : 0, null != this.colorTexture && (o2 += this.colorTexture.memoryUsage), o2 += null != this.colorTextureTransform ? 20 : 0, null != this.normalTexture && (o2 += this.normalTexture.memoryUsage), o2 += null != this.normalTextureTransform ? 20 : 0, o2;
  }
};
r([m({ type: h3, json: { write: true } })], u2.prototype, "color", void 0), r([m({ type: w, json: { write: true } })], u2.prototype, "colorTexture", void 0), r([m({ type: i, json: { write: true } })], u2.prototype, "colorTextureTransform", void 0), r([m({ type: w, json: { write: true } })], u2.prototype, "normalTexture", void 0), r([m({ type: i, json: { write: true } })], u2.prototype, "normalTextureTransform", void 0), r([m({ nonNullable: true, json: { write: true } })], u2.prototype, "alphaMode", void 0), r([m({ nonNullable: true, json: { write: true } })], u2.prototype, "alphaCutoff", void 0), r([m({ nonNullable: true, json: { write: true } })], u2.prototype, "doubleSided", void 0), u2 = n = r([a("esri.geometry.support.MeshMaterial")], u2);
var a3 = u2;

// node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js
var n2;
var u3 = n2 = class extends a3 {
  constructor(e) {
    super(e), this.emissiveColor = null, this.emissiveTexture = null, this.emissiveTextureTransform = void 0, this.occlusionTexture = null, this.occlusionTextureTransform = void 0, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null, this.metallicRoughnessTextureTransform = void 0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, s) {
    const o2 = null != e ? e.get(this) : null;
    if (o2) return o2;
    const t = new n2(this.clonePropertiesWithDeduplication(s));
    return null != e && e.set(this, t), t;
  }
  getMemoryUsage() {
    let e = super.getMemoryUsage();
    return e += null != this.emissiveColor ? 16 : 0, null != this.emissiveTexture && (e += this.emissiveTexture.memoryUsage), e += null != this.emissiveTextureTransform ? 20 : 0, null != this.occlusionTexture && (e += this.occlusionTexture.memoryUsage), e += null != this.occlusionTextureTransform ? 20 : 0, null != this.metallicRoughnessTexture && (e += this.metallicRoughnessTexture.memoryUsage), e += null != this.metallicRoughnessTextureTransform ? 20 : 0, e;
  }
  clonePropertiesWithDeduplication(e) {
    var _a, _b, _c, _d, _e, _f, _g;
    return { ...super.clonePropertiesWithDeduplication(e), emissiveColor: (_a = this.emissiveColor) == null ? void 0 : _a.clone(), emissiveTexture: (_b = this.emissiveTexture) == null ? void 0 : _b.cloneWithDeduplication(e), emissiveTextureTransform: (_c = this.emissiveTextureTransform) == null ? void 0 : _c.clone(), occlusionTexture: (_d = this.occlusionTexture) == null ? void 0 : _d.cloneWithDeduplication(e), occlusionTextureTransform: (_e = this.occlusionTextureTransform) == null ? void 0 : _e.clone(), metallic: this.metallic, roughness: this.roughness, metallicRoughnessTexture: (_f = this.metallicRoughnessTexture) == null ? void 0 : _f.cloneWithDeduplication(e), metallicRoughnessTextureTransform: (_g = this.metallicRoughnessTextureTransform) == null ? void 0 : _g.clone() };
  }
};
r([m({ type: h3, json: { write: true } })], u3.prototype, "emissiveColor", void 0), r([m({ type: w, json: { write: true } })], u3.prototype, "emissiveTexture", void 0), r([m({ type: i, json: { write: true } })], u3.prototype, "emissiveTextureTransform", void 0), r([m({ type: w, json: { write: true } })], u3.prototype, "occlusionTexture", void 0), r([m({ type: i, json: { write: true } })], u3.prototype, "occlusionTextureTransform", void 0), r([m({ type: Number, nonNullable: true, json: { write: true }, range: { min: 0, max: 1 } })], u3.prototype, "metallic", void 0), r([m({ type: Number, nonNullable: true, json: { write: true }, range: { min: 0, max: 1 } })], u3.prototype, "roughness", void 0), r([m({ type: w, json: { write: true } })], u3.prototype, "metallicRoughnessTexture", void 0), r([m({ type: i, json: { write: true } })], u3.prototype, "metallicRoughnessTextureTransform", void 0), u3 = n2 = r([a("esri.geometry.support.MeshMaterialMetallicRoughness")], u3);
var m4 = u3;

export {
  w,
  i,
  a3 as a,
  m4 as m
};
//# sourceMappingURL=chunk-C4XH7UYG.js.map
