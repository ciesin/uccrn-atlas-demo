import {
  o as o4
} from "./chunk-UPCUQD3Z.js";
import {
  o as o3
} from "./chunk-UG5RBJGC.js";
import {
  I as I2,
  p as p3
} from "./chunk-IEVGWQJH.js";
import {
  e
} from "./chunk-UAMCCNF6.js";
import {
  o as o2
} from "./chunk-A4ZIOFBT.js";
import {
  p as p2,
  z
} from "./chunk-SUSOH323.js";
import "./chunk-AZYU3Z5M.js";
import {
  j as j2
} from "./chunk-7FOAM45I.js";
import "./chunk-VY225BNN.js";
import {
  f as f2
} from "./chunk-FBQYHS7L.js";
import {
  p
} from "./chunk-LGG5FPVD.js";
import "./chunk-TOMXDOXB.js";
import "./chunk-VTPZW6H5.js";
import {
  t as t2
} from "./chunk-DWXK7D3B.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S as S2
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-XWXWIBVO.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-IP4HFFRO.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  R,
  r2 as r3
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  C,
  d,
  v as v2
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  I,
  v
} from "./chunk-F7TCEOHX.js";
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
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  a as a3
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  a,
  s2 as s,
  t
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/support/TileMatrixSet.js
var l;
var n = l = class extends S {
  constructor(t3) {
    super(t3), this.fullExtent = null, this.id = null, this.tileInfo = null;
  }
  clone() {
    var _a, _b;
    const t3 = new l();
    return this.hasOwnProperty("fullExtent") && (t3.fullExtent = ((_a = this.fullExtent) == null ? void 0 : _a.clone()) ?? null), this.hasOwnProperty("id") && (t3.id = this.id), this.hasOwnProperty("tileInfo") && (t3.tileInfo = ((_b = this.tileInfo) == null ? void 0 : _b.clone()) ?? null), t3;
  }
};
r([m({ type: w, json: { read: { source: "fullExtent" } } })], n.prototype, "fullExtent", void 0), r([m({ type: String, json: { read: { source: "id" } } })], n.prototype, "id", void 0), r([m({ type: z, json: { read: { source: "tileInfo" } } })], n.prototype, "tileInfo", void 0), n = l = r([a2("esri.layers.support.TileMatrixSet")], n);
var p4 = n;

// node_modules/@arcgis/core/layers/support/WMTSStyle.js
var o5;
var i = o5 = class extends S {
  constructor(r4) {
    super(r4), this.id = null, this.title = null, this.description = null, this.legendUrl = null;
  }
  clone() {
    const r4 = new o5();
    return this.hasOwnProperty("description") && (r4.description = this.description), this.hasOwnProperty("id") && (r4.id = this.id), this.hasOwnProperty("isDefault") && (r4.isDefault = this.isDefault), this.hasOwnProperty("keywords") && (r4.keywords = this.keywords && this.keywords.slice()), this.hasOwnProperty("legendUrl") && (r4.legendUrl = this.legendUrl), this.hasOwnProperty("title") && (r4.title = this.title), r4;
  }
};
r([m({ json: { read: { source: "id" } } })], i.prototype, "id", void 0), r([m({ json: { read: { source: "title" } } })], i.prototype, "title", void 0), r([m({ json: { read: { source: "abstract" } } })], i.prototype, "description", void 0), r([m({ json: { read: { source: "legendUrl" } } })], i.prototype, "legendUrl", void 0), r([m({ json: { read: { source: "isDefault" } } })], i.prototype, "isDefault", void 0), r([m({ json: { read: { source: "keywords" } } })], i.prototype, "keywords", void 0), i = o5 = r([a2("esri.layers.support.WMTSStyle")], i);
var p5 = i;

// node_modules/@arcgis/core/layers/support/WMTSSublayer.js
var p6;
var m2 = p6 = class extends S {
  constructor(t3) {
    super(t3), this.description = null, this.fullExtent = null, this.fullExtents = null, this.id = null, this.imageFormats = null, this.layer = null, this.parent = null, this.styles = null, this.title = null, this.tileMatrixSetId = null, this.tileMatrixSets = null;
  }
  readFullExtent(t3, e2) {
    return (t3 = e2.fullExtent) ? w.fromJSON(t3) : null;
  }
  readFullExtents(t3, e2) {
    var _a, _b;
    return ((_a = e2.fullExtents) == null ? void 0 : _a.length) ? e2.fullExtents.map((t4) => w.fromJSON(t4)) : ((_b = e2.tileMatrixSets) == null ? void 0 : _b.map((t4) => w.fromJSON(t4.fullExtent)).filter((t4) => t4)) ?? [];
  }
  get imageFormat() {
    var _a;
    let t3 = this._get("imageFormat");
    return t3 || (t3 = ((_a = this.imageFormats) == null ? void 0 : _a.length) ? this.imageFormats[0] : ""), t3;
  }
  set imageFormat(t3) {
    const e2 = this.imageFormats;
    t3 && (t3.includes("image/") || e2 && !e2.includes(t3)) && (t3.includes("image/") || (t3 = "image/" + t3), e2 && !e2.includes(t3)) ? console.error("The layer doesn't support the format of " + t3) : this._set("imageFormat", t3);
  }
  get styleId() {
    var _a, _b;
    let t3 = this._get("styleId");
    return t3 || (t3 = ((_b = (_a = this.styles) == null ? void 0 : _a.at(0)) == null ? void 0 : _b.id) ?? ""), t3;
  }
  set styleId(t3) {
    this._set("styleId", t3);
  }
  get tileMatrixSet() {
    var _a;
    return ((_a = this.tileMatrixSets) == null ? void 0 : _a.find(({ id: t3 }) => t3 === this.tileMatrixSetId)) ?? null;
  }
  clone() {
    var _a, _b, _c, _d;
    const t3 = new p6();
    return this.hasOwnProperty("description") && (t3.description = this.description), this.hasOwnProperty("imageFormats") && (t3.imageFormats = ((_a = this.imageFormats) == null ? void 0 : _a.slice()) ?? null), this.hasOwnProperty("imageFormat") && (t3.imageFormat = this.imageFormat), this.hasOwnProperty("fullExtent") && (t3.fullExtent = (_b = this.fullExtent) == null ? void 0 : _b.clone()), this.hasOwnProperty("id") && (t3.id = this.id), this.hasOwnProperty("layer") && (t3.layer = this.layer), this.hasOwnProperty("styleId") && (t3.styleId = this.styleId), this.hasOwnProperty("styles") && (t3.styles = (_c = this.styles) == null ? void 0 : _c.clone()), this.hasOwnProperty("tileMatrixSetId") && (t3.tileMatrixSetId = this.tileMatrixSetId), this.hasOwnProperty("tileMatrixSets") && (t3.tileMatrixSets = (_d = this.tileMatrixSets) == null ? void 0 : _d.clone()), this.hasOwnProperty("title") && (t3.title = this.title), t3;
  }
};
r([m()], m2.prototype, "description", void 0), r([m({ type: w })], m2.prototype, "fullExtent", void 0), r([o("fullExtent", ["fullExtent"])], m2.prototype, "readFullExtent", null), r([m({ readOnly: true })], m2.prototype, "fullExtents", void 0), r([o("fullExtents", ["fullExtents", "tileMatrixSets"])], m2.prototype, "readFullExtents", null), r([m()], m2.prototype, "id", void 0), r([m()], m2.prototype, "imageFormat", null), r([m({ json: { read: { source: "formats" } } })], m2.prototype, "imageFormats", void 0), r([m()], m2.prototype, "layer", void 0), r([m()], m2.prototype, "parent", void 0), r([m()], m2.prototype, "styleId", null), r([m({ type: V.ofType(p5), json: { read: { source: "styles" } } })], m2.prototype, "styles", void 0), r([m({ json: { write: { ignoreOrigin: true } } })], m2.prototype, "title", void 0), r([m()], m2.prototype, "tileMatrixSetId", void 0), r([m({ readOnly: true })], m2.prototype, "tileMatrixSet", null), r([m({ type: V.ofType(p4), json: { read: { source: "tileMatrixSets" } } })], m2.prototype, "tileMatrixSets", void 0), m2 = p6 = r([a2("esri.layers.support.WMTSSublayer")], m2);
var u = m2;

// node_modules/@arcgis/core/layers/support/wmtsUtils.js
var u2 = 90.71428571428571;
function p7(e2) {
  const i2 = e2.replaceAll(/ows:/gi, "");
  if (!x("Contents", new DOMParser().parseFromString(i2, "text/xml").documentElement)) throw new s("wmtslayer:wmts-capabilities-xml-is-not-valid", "the wmts get capabilities response is not compliant", { text: e2 });
}
function f3(e2, i2) {
  var _a;
  e2 = e2.replaceAll(/ows:/gi, "");
  const n2 = new DOMParser().parseFromString(e2, "text/xml").documentElement, r4 = /* @__PURE__ */ new Map(), l2 = /* @__PURE__ */ new Map(), o6 = x("Contents", n2);
  if (!o6) throw new s("wmtslayer:wmts-capabilities-xml-is-not-valid");
  const s2 = x("OperationsMetadata", n2), a4 = s2 == null ? void 0 : s2.querySelector("[name='GetTile']"), c = a4 == null ? void 0 : a4.getElementsByTagName("Get"), u3 = c && Array.prototype.slice.call(c), p8 = (_a = i2.url) == null ? void 0 : _a.indexOf("https"), f4 = void 0 !== p8 && p8 > -1;
  let d3, m4, h2 = i2.serviceMode, T2 = i2 == null ? void 0 : i2.url;
  if ((u3 == null ? void 0 : u3.length) && u3.some((e3) => {
    const t3 = x("Constraint", e3);
    return !t3 || C2("AllowedValues", "Value", h2, t3) ? (T2 = e3.attributes[0].nodeValue, true) : (!t3 || C2("AllowedValues", "Value", "RESTful", t3) || C2("AllowedValues", "Value", "REST", t3) ? m4 = e3.attributes[0].nodeValue : t3 && !C2("AllowedValues", "Value", "KVP", t3) || (d3 = e3.attributes[0].nodeValue), false);
  }), !T2) if (m4) T2 = m4, h2 = "RESTful";
  else if (d3) T2 = d3, h2 = "KVP";
  else {
    const e3 = x("ServiceMetadataURL", n2);
    T2 = e3 == null ? void 0 : e3.getAttribute("xlink:href");
  }
  const y2 = T2.indexOf("1.0.0/");
  -1 === y2 && "RESTful" === h2 ? T2 += "/" : y2 > -1 && (T2 = T2.slice(0, y2)), "KVP" === h2 && (T2 += y2 > -1 ? "" : "?"), f4 && (T2 = T2.replace(/^http:/i, "https:"));
  const R3 = w2("ServiceIdentification>ServiceTypeVersion", n2), S4 = w2("ServiceIdentification>AccessConstraints", n2), A2 = S4 && /^none$/i.test(S4) ? null : S4, V4 = g("Layer", o6), E2 = g("TileMatrixSet", o6), L2 = V4.map((e3) => {
    const t3 = w2("Identifier", e3);
    return r4.set(t3, e3), M(t3, e3, E2, f4, R3);
  });
  return { copyright: A2, dimensionMap: l2, layerMap: r4, layers: L2, serviceMode: h2, tileUrl: T2 };
}
function d2(e2) {
  return e2.layers.forEach((e3) => {
    var _a;
    (_a = e3.tileMatrixSets) == null ? void 0 : _a.forEach((e4) => {
      var _a2;
      const t3 = e4.tileInfo;
      t3 && 96 !== t3.dpi && ((_a2 = t3.lods) == null ? void 0 : _a2.forEach((i2) => {
        var _a3;
        i2.scale = 96 * i2.scale / t3.dpi, i2.resolution = j3((_a3 = t3.spatialReference) == null ? void 0 : _a3.wkid, i2.scale * u2 / 96, e4.id);
      }), t3.dpi = 96);
    });
  }), e2;
}
function m3(e2) {
  return e2.nodeType === Node.ELEMENT_NODE;
}
function x(e2, t3) {
  for (let i2 = 0; i2 < t3.childNodes.length; i2++) {
    const n2 = t3.childNodes[i2];
    if (m3(n2) && n2.nodeName === e2) return n2;
  }
  return null;
}
function g(e2, t3) {
  const i2 = [];
  for (let n2 = 0; n2 < t3.childNodes.length; n2++) {
    const r4 = t3.childNodes[n2];
    m3(r4) && r4.nodeName === e2 && i2.push(r4);
  }
  return i2;
}
function h(t3, i2) {
  const n2 = [];
  for (let e2 = 0; e2 < i2.childNodes.length; e2++) {
    const r4 = i2.childNodes[e2];
    m3(r4) && r4.nodeName === t3 && n2.push(r4);
  }
  return n2.map((e2) => e2.textContent).filter(G);
}
function w2(e2, t3) {
  return e2.split(">").forEach((e3) => {
    t3 && (t3 = x(e3, t3));
  }), t3 && t3.textContent;
}
function C2(e2, t3, i2, n2) {
  let r4;
  return Array.prototype.slice.call(n2.childNodes).some((n3) => {
    if (n3.nodeName.includes(e2)) {
      const e3 = x(t3, n3), l2 = e3 == null ? void 0 : e3.textContent;
      if (l2 === i2 || i2.split(":") && i2.split(":")[1] === l2) return r4 = n3, true;
    }
    return false;
  }), r4;
}
function M(e2, t3, i2, n2, r4) {
  const l2 = w2("Abstract", t3), o6 = h("Format", t3);
  return { id: e2, fullExtent: A(t3), fullExtents: V2(t3), description: l2, formats: o6, styles: E(t3, n2), title: w2("Title", t3), tileMatrixSets: L(r4, t3, i2) };
}
function T(e2, t3) {
  var _a;
  const i2 = [], n2 = (_a = e2.layerMap) == null ? void 0 : _a.get(t3);
  if (!n2) return null;
  const r4 = g("ResourceURL", n2), l2 = g("Dimension", n2);
  let o6, s2, a4, c;
  return l2.length && (o6 = w2("Identifier", l2[0]), s2 = h("Default", l2[0])), l2.length > 1 && (a4 = w2("Identifier", l2[1]), c = h("Default", l2[1])), e2.dimensionMap.set(t3, { dimensions: s2, dimensions2: c }), r4.forEach((e3) => {
    let t4 = e3.getAttribute("template");
    if ("tile" === e3.getAttribute("resourceType")) {
      if (o6 && s2.length) if (t4.includes("{" + o6 + "}")) t4 = t4.replace("{" + o6 + "}", "{dimensionValue}");
      else {
        const e4 = t4.toLowerCase().indexOf("{" + o6.toLowerCase() + "}");
        e4 > -1 && (t4 = t4.slice(0, e4) + "{dimensionValue}" + t4.slice(e4 + o6.length + 2));
      }
      if (a4 && c.length) if (t4.includes("{" + a4 + "}")) t4 = t4.replace("{" + a4 + "}", "{dimensionValue2}");
      else {
        const e4 = t4.toLowerCase().indexOf("{" + a4.toLowerCase() + "}");
        e4 > -1 && (t4 = t4.slice(0, e4) + "{dimensionValue2}" + t4.slice(e4 + a4.length + 2));
      }
      i2.push({ template: t4, format: e3.getAttribute("format"), resourceType: "tile" });
    }
  }), i2;
}
function y(e2, t3, i2, n2, r4, l2, o6, s2) {
  var _a, _b;
  const a4 = R2(e2, t3, n2);
  if (!((a4 == null ? void 0 : a4.length) > 0)) return "";
  const { dimensionMap: c } = e2, u3 = (_a = c.get(t3).dimensions) == null ? void 0 : _a[0], p8 = (_b = c.get(t3).dimensions2) == null ? void 0 : _b[0];
  return a4[o6 % a4.length].template.replaceAll(/\{Style\}/gi, r4 ?? "").replaceAll(/\{TileMatrixSet\}/gi, i2 ?? "").replaceAll(/\{TileMatrix\}/gi, l2).replaceAll(/\{TileRow\}/gi, "" + o6).replaceAll(/\{TileCol\}/gi, "" + s2).replaceAll(/\{dimensionValue\}/gi, u3).replaceAll(/\{dimensionValue2\}/gi, p8);
}
function R2(e2, t3, i2) {
  const n2 = T(e2, t3), r4 = n2 == null ? void 0 : n2.filter((e3) => e3.format === i2);
  return ((r4 == null ? void 0 : r4.length) ? r4 : n2) ?? [];
}
function S3(e2, t3, i2, n2) {
  var _a, _b;
  const { dimensionMap: r4 } = e2, l2 = T(e2, t3);
  let o6 = "";
  if (l2 && l2.length > 0) {
    const e3 = (_a = r4.get(t3).dimensions) == null ? void 0 : _a[0], s2 = (_b = r4.get(t3).dimensions2) == null ? void 0 : _b[0];
    o6 = l2[0].template, o6.endsWith(".xxx") && (o6 = o6.slice(0, -4)), o6 = o6.replaceAll(/\{Style\}/gi, n2), o6 = o6.replaceAll(/\{TileMatrixSet\}/gi, i2), o6 = o6.replaceAll(/\{TileMatrix\}/gi, "{level}"), o6 = o6.replaceAll(/\{TileRow\}/gi, "{row}"), o6 = o6.replaceAll(/\{TileCol\}/gi, "{col}"), o6 = o6.replaceAll(/\{dimensionValue\}/gi, e3), o6 = o6.replaceAll(/\{dimensionValue2\}/gi, s2);
  }
  return o6;
}
function A(e2) {
  const t3 = x("WGS84BoundingBox", e2), i2 = t3 ? w2("LowerCorner", t3).split(" ") : ["-180", "-90"], n2 = t3 ? w2("UpperCorner", t3).split(" ") : ["180", "90"];
  return { xmin: parseFloat(i2[0]), ymin: parseFloat(i2[1]), xmax: parseFloat(n2[0]), ymax: parseFloat(n2[1]), spatialReference: { wkid: 4326 } };
}
function V2(e2) {
  const t3 = [];
  return o4(e2, { BoundingBox: (e3) => {
    if (!e3.getAttribute("crs")) return;
    const i2 = e3.getAttribute("crs").toLowerCase(), n2 = I3(i2), r4 = i2.includes("epsg") && o3(n2.wkid);
    let l2, a4, c, u3;
    o4(e3, { LowerCorner: (e4) => {
      [l2, a4] = e4.textContent.split(" ").map((e5) => Number.parseFloat(e5)), r4 && ([l2, a4] = [a4, l2]);
    }, UpperCorner: (e4) => {
      [c, u3] = e4.textContent.split(" ").map((e5) => Number.parseFloat(e5)), r4 && ([c, u3] = [u3, c]);
    } }), t3.push({ xmin: l2, ymin: a4, xmax: c, ymax: u3, spatialReference: n2 });
  } }), t3;
}
function E(e2, t3) {
  return g("Style", e2).map((e3) => {
    const i2 = x("LegendURL", e3), n2 = x("Keywords", e3), r4 = n2 ? h("Keyword", n2) : [];
    let l2 = i2 == null ? void 0 : i2.getAttribute("xlink:href");
    t3 && (l2 = l2 == null ? void 0 : l2.replace(/^http:/i, "https:"));
    return { abstract: w2("Abstract", e3), id: w2("Identifier", e3), isDefault: "true" === e3.getAttribute("isDefault"), keywords: r4, legendUrl: l2, title: w2("Title", e3) };
  });
}
function L(e2, t3, i2) {
  return g("TileMatrixSetLink", t3).map((t4) => b2(e2, t4, i2));
}
function b2(e2, t3, i2) {
  const n2 = x("TileMatrixSet", t3).textContent, r4 = h("TileMatrix", t3), l2 = i2.find((e3) => {
    const t4 = x("Identifier", e3), i3 = t4 == null ? void 0 : t4.textContent;
    return !!(i3 === n2 || n2.split(":") && n2.split(":")[1] === i3);
  }), o6 = x("TileMatrixSetLimits", t3), s2 = o6 && g("TileMatrixLimits", o6), a4 = /* @__PURE__ */ new Map();
  if (s2 == null ? void 0 : s2.length) for (const c of s2) {
    const e3 = x("TileMatrix", c).textContent, t4 = +x("MinTileRow", c).textContent, i3 = +x("MaxTileRow", c).textContent, n3 = +x("MinTileCol", c).textContent, r5 = +x("MaxTileCol", c).textContent;
    a4.set(e3, { minCol: n3, maxCol: r5, minRow: t4, maxRow: i3 });
  }
  const u3 = w2("SupportedCRS", l2).toLowerCase(), p8 = N(l2, u3), f4 = p8.spatialReference, d3 = x("TileMatrix", l2), m4 = [parseInt(w2("TileWidth", d3), 10), parseInt(w2("TileHeight", d3), 10)], M2 = [];
  if (r4.length) r4.forEach((e3, t4) => {
    const i3 = C2("TileMatrix", "Identifier", e3, l2);
    M2.push(k(i3, u3, t4, n2, a4));
  });
  else {
    g("TileMatrix", l2).forEach((e3, t4) => {
      M2.push(k(e3, u3, t4, n2, a4));
    });
  }
  const T2 = F(e2, l2, p8, m4, M2[0]).toJSON(), y2 = new z({ dpi: 96, spatialReference: f4, size: m4, origin: p8, lods: M2 }).toJSON();
  return { id: n2, fullExtent: T2, tileInfo: y2 };
}
function I3(e2) {
  e2 = e2.toLowerCase();
  let t3 = parseInt(e2.split(":").pop(), 10);
  900913 !== t3 && 3857 !== t3 || (t3 = 102100);
  const i2 = O(e2);
  return null != i2 && (t3 = i2), { wkid: t3 };
}
function N(e2, t3) {
  return v3(x("TileMatrix", e2), t3);
}
function v3(e2, t3) {
  const i2 = I3(t3), [n2, l2] = w2("TopLeftCorner", e2).split(" ").map((e3) => parseFloat(e3)), s2 = t3.includes("epsg") && o3(i2.wkid);
  return new j(s2 ? { x: l2, y: n2, spatialReference: i2 } : { x: n2, y: l2, spatialReference: i2 });
}
function F(e2, t3, i2, r4, l2) {
  const o6 = x("BoundingBox", t3);
  let s2, a4, c, u3, p8, f4;
  if (o6 && (s2 = w2("LowerCorner", o6).split(" "), a4 = w2("UpperCorner", o6).split(" ")), s2 && s2.length > 1 && a4 && a4.length > 1) c = parseFloat(s2[0]), p8 = parseFloat(s2[1]), u3 = parseFloat(a4[0]), f4 = parseFloat(a4[1]);
  else {
    const e3 = x("TileMatrix", t3), n2 = parseInt(w2("MatrixWidth", e3), 10), o7 = parseInt(w2("MatrixHeight", e3), 10);
    c = i2.x, f4 = i2.y, u3 = c + n2 * r4[0] * l2.resolution, p8 = f4 - o7 * r4[1] * l2.resolution;
  }
  return U(e2, i2.spatialReference, i2) ? new w(p8, c, f4, u3, i2.spatialReference) : new w(c, p8, u3, f4, i2.spatialReference);
}
function U(e2, t3, i2) {
  return "1.0.0" === e2 && o3(t3.wkid) && !(i2.spatialReference.isGeographic && i2.x < -90 && i2.y >= -90);
}
var D;
function O(e2) {
  return e2.includes("crs84") || e2.includes("crs:84") ? D.CRS84 : e2.includes("crs83") || e2.includes("crs:83") ? D.CRS83 : e2.includes("crs27") || e2.includes("crs:27") ? D.CRS27 : null;
}
function k(e2, t3, i2, n2, r4) {
  const l2 = I3(t3), o6 = w2("Identifier", e2);
  let s2 = parseFloat(w2("ScaleDenominator", e2));
  const c = j3(l2.wkid, s2, n2);
  s2 *= 96 / u2;
  const p8 = +w2("MatrixWidth", e2), f4 = +w2("MatrixHeight", e2), { maxCol: d3 = p8 - 1, maxRow: m4 = f4 - 1, minCol: x2 = 0, minRow: g2 = 0 } = r4.get(o6) ?? {}, { x: h2, y: C3 } = v3(e2, t3);
  return new p2({ cols: [x2, d3], level: i2, levelValue: o6, origin: [h2, C3], scale: s2, resolution: c, rows: [g2, m4] });
}
function j3(e2, t3, n2) {
  let r4;
  return r4 = r3.hasOwnProperty("" + e2) ? r3.values[r3[e2]] : "default028mm" === n2 ? 6370997 * Math.PI / 180 : R(e2).metersPerDegree, 7 * t3 / 25e3 / r4;
}
!function(e2) {
  e2[e2.CRS84 = 4326] = "CRS84", e2[e2.CRS83 = 4269] = "CRS83", e2[e2.CRS27 = 4267] = "CRS27";
}(D || (D = {}));

// node_modules/@arcgis/core/layers/WMTSLayer.js
var W;
var F2 = { "image/png": ".png", "image/png8": ".png", "image/png24": ".png", "image/png32": ".png", "image/jpg": ".jpg", "image/jpeg": ".jpeg", "image/gif": ".gif", "image/bmp": ".bmp", "image/tiff": ".tif", "image/jpgpng": "", "image/jpegpng": "", "image/unknown": "" };
var V3 = /* @__PURE__ */ new Set(["version", "service", "request", "layer", "style", "format", "tilematrixset", "tilematrix", "tilerow", "tilecol"]);
var B = W = class extends p(f2(t2(b(j2(S2(f)))))) {
  constructor(...e2) {
    super(...e2), this.activeLayer = null, this.copyright = "", this.customParameters = null, this.customLayerParameters = null, this.fullExtent = null, this.operationalLayerType = "WebTiledLayer", this.resourceInfo = null, this.serviceMode = "RESTful", this.sublayers = null, this.type = "wmts", this.version = "1.0.0", this.addHandles([d(() => this.activeLayer, (e3, t3) => {
      var _a;
      t3 && !((_a = this.sublayers) == null ? void 0 : _a.includes(t3)) && (t3.layer = null, t3.parent = null), e3 && (e3.layer = this, e3.parent = this);
    }, C), v2(() => this.sublayers, "after-add", ({ item: e3 }) => {
      e3.layer = this, e3.parent = this;
    }, C), v2(() => this.sublayers, "after-remove", ({ item: e3 }) => {
      e3.layer = null, e3.parent = null;
    }, C), d(() => this.sublayers, (e3, t3) => {
      if (t3) for (const r4 of t3) r4.layer = null, r4.parent = null;
      if (e3) for (const r4 of e3) r4.layer = this, r4.parent = this;
    }, C)]);
  }
  normalizeCtorArgs(e2, t3) {
    return "string" == typeof e2 ? { url: e2, ...t3 } : e2;
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMTS"] }, e2).catch(a3).then(() => this._fetchService(e2)).catch((e3) => {
      throw a3(e3), new s("wmtslayer:unsupported-service-data", "Invalid response from the WMTS service.", { error: e3 });
    })), Promise.resolve(this);
  }
  readActiveLayerFromService(e2, t3, r4) {
    this.activeLayer || (this.activeLayer = new u());
    let i2 = t3.layers.find((e3) => e3.id === this.activeLayer.id);
    return i2 || (i2 = t3.layers[0]), this.activeLayer.read(i2, r4), this.activeLayer;
  }
  readActiveLayerFromItemOrWebDoc(e2, t3) {
    const { templateUrl: r4, wmtsInfo: i2 } = t3, s2 = r4 ? this._getLowerCasedUrlParams(r4) : null, a4 = i2 == null ? void 0 : i2.layerIdentifier;
    let o6 = null;
    const l2 = i2 == null ? void 0 : i2.tileMatrixSet;
    l2 && (Array.isArray(l2) ? l2.length && (o6 = l2[0]) : o6 = l2);
    const n2 = s2 == null ? void 0 : s2.format, m4 = s2 == null ? void 0 : s2.style;
    return new u({ id: a4, imageFormat: n2, styleId: m4, tileMatrixSetId: o6 });
  }
  writeActiveLayer(e2, t3, r4, i2) {
    const s2 = this.activeLayer;
    t3.templateUrl = this.getUrlTemplate(s2.id, s2.tileMatrixSetId, s2.imageFormat, s2.styleId);
    const a4 = t("tileMatrixSet.tileInfo", s2);
    t3.tileInfo = a4 ? a4.toJSON(i2) : null, t3.wmtsInfo = { ...t3.wmtsInfo, layerIdentifier: s2.id, tileMatrixSet: s2.tileMatrixSetId };
  }
  readCustomParameters(e2, t3) {
    const r4 = t3.wmtsInfo;
    return r4 ? this._mergeParams(r4.customParameters, r4.url) : null;
  }
  get fullExtents() {
    return this.activeLayer.fullExtents;
  }
  readServiceMode(e2, t3) {
    return t3.templateUrl.includes("?") ? "KVP" : "RESTful";
  }
  readSublayersFromService(e2, t3, r4) {
    return $(t3.layers, r4);
  }
  get supportedSpatialReferences() {
    var _a;
    return ((_a = this.activeLayer.tileMatrixSets) == null ? void 0 : _a.map((e2) => {
      var _a2;
      return (_a2 = e2.tileInfo) == null ? void 0 : _a2.spatialReference;
    }).toArray().filter(G)) ?? [];
  }
  get tilemapCache() {
    var _a, _b;
    const e2 = (_b = (_a = this.activeLayer) == null ? void 0 : _a.tileMatrixSet) == null ? void 0 : _b.tileInfo;
    return e2 ? new e(e2) : void 0;
  }
  get title() {
    var _a;
    return ((_a = this.activeLayer) == null ? void 0 : _a.title) ?? "Layer";
  }
  set title(e2) {
    this._overrideIfSome("title", e2);
  }
  get url() {
    return this._get("url");
  }
  set url(e2) {
    e2 && e2.endsWith("/") ? this._set("url", e2.slice(0, -1)) : this._set("url", e2);
  }
  createWebTileLayer(e2) {
    const t3 = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId), r4 = this._getTileMatrixSetById(e2.tileMatrixSetId), i2 = r4 == null ? void 0 : r4.tileInfo, s2 = e2.fullExtent, a4 = new p3({ layerIdentifier: e2.id, tileMatrixSet: e2.tileMatrixSetId, url: this.url });
    return this.customLayerParameters && (a4.customLayerParameters = this.customLayerParameters), this.customParameters && (a4.customParameters = this.customParameters), new I2({ fullExtent: s2, urlTemplate: t3, tileInfo: i2, wmtsInfo: a4 });
  }
  async fetchTile(e2, r4, i2, s2 = {}) {
    const { signal: a4 } = s2, o6 = this.getTileUrl(e2, r4, i2), { data: l2 } = await P(o6, { responseType: "image", signal: a4 });
    return l2;
  }
  async fetchImageBitmapTile(e2, r4, i2, s2 = {}) {
    const { signal: a4 } = s2;
    if (this.fetchTile !== W.prototype.fetchTile) {
      const t3 = await this.fetchTile(e2, r4, i2, s2);
      return o2(t3, e2, r4, i2, a4);
    }
    const o6 = this.getTileUrl(e2, r4, i2), { data: l2 } = await P(o6, { responseType: "blob", signal: a4 });
    return o2(l2, e2, r4, i2, a4);
  }
  findSublayerById(e2) {
    var _a;
    return (_a = this.sublayers) == null ? void 0 : _a.find((t3) => t3.id === e2);
  }
  getTileUrl(e2, t3, r4) {
    var _a;
    const i2 = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId), s2 = (_a = i2 == null ? void 0 : i2.tileInfo) == null ? void 0 : _a.lods[e2], a4 = s2 ? s2.levelValue || `${s2.level}` : `${e2}`;
    let o6 = this.resourceInfo ? "" : y({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId, a4, t3, r4);
    if (!o6) {
      o6 = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId).replaceAll(/\{level\}/gi, a4).replaceAll(/\{row\}/gi, `${t3}`).replaceAll(/\{col\}/gi, `${r4}`);
    }
    return o6 = this._appendCustomLayerParameters(o6), o6;
  }
  getUrlTemplate(e2, t3, r4, i2) {
    if (!this.resourceInfo) {
      const r5 = S3({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, e2, t3, i2);
      if (r5) return r5;
    }
    if ("KVP" === this.serviceMode) return this.url + "?SERVICE=WMTS&VERSION=" + this.version + "&REQUEST=GetTile&LAYER=" + e2 + "&STYLE=" + i2 + "&FORMAT=" + r4 + "&TILEMATRIXSET=" + t3 + "&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";
    if ("RESTful" === this.serviceMode) {
      let s2 = "";
      return F2[r4.toLowerCase()] && (s2 = F2[r4.toLowerCase()]), this.url + e2 + "/" + i2 + "/" + t3 + "/{level}/{row}/{col}" + s2;
    }
    return "";
  }
  async _fetchService(e2) {
    let t3;
    if (this.resourceInfo) "KVP" === this.resourceInfo.serviceMode && (this.url += this.url.includes("?") ? "" : "?"), t3 = { ssl: false, data: this.resourceInfo };
    else try {
      t3 = await this._getCapabilities(this.serviceMode, e2), p7(t3.data);
    } catch {
      const i2 = "KVP" === this.serviceMode ? "RESTful" : "KVP";
      try {
        t3 = await this._getCapabilities(i2, e2), p7(t3.data), this.serviceMode = i2;
      } catch (r4) {
        throw new s("wmtslayer:unsupported-service-data", "Services does not support RESTful or KVP service modes.", { error: r4 });
      }
    }
    this.resourceInfo ? t3.data = d2(t3.data) : t3.data = f3(t3.data, { serviceMode: this.serviceMode, url: this.url }), t3.data && this.read(t3.data, { origin: "service" });
  }
  async _getCapabilities(e2, r4) {
    const i2 = this._getCapabilitiesUrl(e2);
    return await P(i2, { ...r4, responseType: "text" });
  }
  _getTileMatrixSetById(e2) {
    var _a;
    const t3 = this.findSublayerById(this.activeLayer.id), r4 = (_a = t3 == null ? void 0 : t3.tileMatrixSets) == null ? void 0 : _a.find((t4) => t4.id === e2);
    return r4;
  }
  _appendCustomParameters(e2) {
    return this._appendParameters(e2, this.customParameters);
  }
  _appendCustomLayerParameters(e2) {
    return this._appendParameters(e2, { ...a(this.customParameters), ...this.customLayerParameters });
  }
  _appendParameters(e2, t3) {
    const r4 = I(e2), i2 = { ...r4.query, ...t3 }, s2 = v(i2);
    return "" === s2 ? r4.path : `${r4.path}?${s2}`;
  }
  _getCapabilitiesUrl(e2) {
    this.url = I(this.url).path;
    let t3 = this.url;
    switch (e2) {
      case "KVP":
        t3 += `?request=GetCapabilities&service=WMTS&version=${this.version}`;
        break;
      case "RESTful": {
        const e3 = `/${this.version}/WMTSCapabilities.xml`, r4 = new RegExp(e3, "i");
        t3 = t3.replace(r4, ""), t3 += e3;
        break;
      }
    }
    return this._appendCustomParameters(t3);
  }
  _getLowerCasedUrlParams(e2) {
    if (!e2) return null;
    const t3 = I(e2).query;
    if (!t3) return null;
    const r4 = {};
    return Object.keys(t3).forEach((e3) => {
      r4[e3.toLowerCase()] = t3[e3];
    }), r4;
  }
  _mergeParams(e2, t3) {
    const r4 = this._getLowerCasedUrlParams(t3);
    if (r4) {
      const t4 = Object.keys(r4);
      t4.length && (e2 = e2 ? a(e2) : {}, t4.forEach((t5) => {
        e2.hasOwnProperty(t5) || V3.has(t5) || (e2[t5] = r4[t5]);
      }));
    }
    return e2;
  }
};
function $(e2, t3) {
  return e2.map((e3) => {
    const r4 = new u();
    return r4.read(e3, t3), r4;
  });
}
r([m()], B.prototype, "dimensionMap", void 0), r([m()], B.prototype, "layerMap", void 0), r([m({ type: u, json: { origins: { "web-document": { write: { ignoreOrigin: true } } } } })], B.prototype, "activeLayer", void 0), r([o("service", "activeLayer", ["layers"])], B.prototype, "readActiveLayerFromService", null), r([o(["web-document", "portal-item"], "activeLayer", ["wmtsInfo"])], B.prototype, "readActiveLayerFromItemOrWebDoc", null), r([r2(["web-document", "portal-item"], "activeLayer", { templateUrl: { type: String }, tileInfo: { type: z }, "wmtsInfo.layerIdentifier": { type: String }, "wmtsInfo.tileMatrixSet": { type: String } })], B.prototype, "writeActiveLayer", null), r([m({ type: String, value: "", json: { write: true } })], B.prototype, "copyright", void 0), r([m({ type: ["show", "hide"] })], B.prototype, "listMode", void 0), r([m({ json: { read: true, write: true } })], B.prototype, "blendMode", void 0), r([m({ json: { origins: { "web-document": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } }, "portal-item": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } } } } })], B.prototype, "customParameters", void 0), r([o(["portal-item", "web-document"], "customParameters")], B.prototype, "readCustomParameters", null), r([m({ json: { origins: { "web-document": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } }, "portal-item": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } } } } })], B.prototype, "customLayerParameters", void 0), r([m({ type: w, json: { write: { ignoreOrigin: true }, origins: { "web-document": { read: { source: "fullExtent" } }, "portal-item": { read: { source: "fullExtent" } } } } })], B.prototype, "fullExtent", void 0), r([m({ readOnly: true })], B.prototype, "fullExtents", null), r([m({ type: ["WebTiledLayer"] })], B.prototype, "operationalLayerType", void 0), r([m()], B.prototype, "resourceInfo", void 0), r([m()], B.prototype, "serviceMode", void 0), r([o(["portal-item", "web-document"], "serviceMode", ["templateUrl"])], B.prototype, "readServiceMode", null), r([m({ type: V.ofType(u) })], B.prototype, "sublayers", void 0), r([o("service", "sublayers", ["layers"])], B.prototype, "readSublayersFromService", null), r([m({ readOnly: true })], B.prototype, "supportedSpatialReferences", null), r([m({ readOnly: true })], B.prototype, "tilemapCache", null), r([m({ json: { read: { source: "title" } } })], B.prototype, "title", null), r([m({ json: { read: false }, readOnly: true, value: "wmts" })], B.prototype, "type", void 0), r([m({ json: { origins: { service: { read: { source: "tileUrl" } }, "web-document": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } }, "portal-item": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } } } } })], B.prototype, "url", null), r([m()], B.prototype, "version", void 0), B = W = r([a2("esri.layers.WMTSLayer")], B);
var K = B;
export {
  K as default
};
//# sourceMappingURL=WMTSLayer-GX4M3R5T.js.map
