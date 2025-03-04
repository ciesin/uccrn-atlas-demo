import {
  l
} from "./chunk-VRFYHG34.js";
import {
  d,
  e,
  t
} from "./chunk-EZQWXU2P.js";
import {
  c
} from "./chunk-W5EXEGLR.js";
import {
  f,
  g,
  u as u2,
  y
} from "./chunk-M6YQSYSW.js";
import "./chunk-4FQK362J.js";
import {
  L
} from "./chunk-ZD4JXG4O.js";
import {
  U,
  k
} from "./chunk-A4LAIXK6.js";
import "./chunk-AI444EOP.js";
import "./chunk-CTBXY22F.js";
import "./chunk-7EIXRVA4.js";
import "./chunk-BSRIVWBN.js";
import "./chunk-BTTTF5H4.js";
import "./chunk-MEC6IDRX.js";
import "./chunk-ZH6PYRVF.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-TOMXDOXB.js";
import "./chunk-VTPZW6H5.js";
import "./chunk-JST5QDP2.js";
import "./chunk-A4BGGF5Z.js";
import "./chunk-IPFYNOOY.js";
import {
  s as s2
} from "./chunk-PUC7IJYJ.js";
import "./chunk-ESU5C3MV.js";
import "./chunk-TYJOGWKZ.js";
import "./chunk-4WO6KUCB.js";
import "./chunk-2Y4TRKRB.js";
import "./chunk-XEBZUAYT.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-MLOZK7WX.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import {
  u
} from "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/symbols/support/previewSymbol2D.js
var f2 = "picture-fill";
var y2 = "picture-marker";
var w = "simple-fill";
var x = "simple-line";
var b = "simple-marker";
var v = "text";
var M = "Aa";
var S = t.size;
var z = t.maxSize;
var k2 = t.maxOutlineSize;
var L2 = t.lineWidth;
var C = 225;
var $ = document.createElement("canvas");
function j(t2, e2, i) {
  if ("polygon" === t2.type) {
    const o = t2.extent, n = 0 === o.width ? 1 : o.width, l2 = 0 === o.height ? 1 : o.height;
    t2 = U({ originPosition: "upperLeft", scale: [n / e2, l2 / i], translate: [o.xmin, o.ymax] }, {}, t2);
    let s3 = "";
    for (let e3 = 0; e3 < t2.rings.length; e3++) {
      const i2 = t2.rings[e3];
      for (let t3 = 0; t3 < i2.length; t3++) {
        const e4 = i2[t3][0], o2 = i2[t3][1];
        let n2 = "";
        0 === t3 ? (n2 = `M${e4.toString()} ${o2.toString()}`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2) : t3 === i2.length - 1 ? (n2 = `l${e4.toString()} ${o2.toString()} Z`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2) : (n2 = `l${e4.toString()} ${o2.toString()}`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2);
      }
    }
    return s3;
  }
  if ("polyline" === t2.type) {
    const o = t2.extent, n = 0 === o.width ? 1 : o.width, a = 0 === o.height ? 1 : o.height;
    t2 = k({ originPosition: "upperLeft", scale: [n / e2, a / i], translate: [o.xmin, o.ymax] }, {}, t2);
    let s3 = "";
    for (let e3 = 0; e3 < t2.paths.length; e3++) {
      const i2 = t2.paths[e3];
      for (let t3 = 0; t3 < i2.length; t3++) {
        const e4 = i2[t3][0], o2 = i2[t3][1];
        let n2 = "";
        0 === t3 ? (n2 = `M${e4.toString()} ${o2.toString()}`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2) : (n2 = `l${e4.toString()} ${o2.toString()}`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2);
      }
    }
    return s3;
  }
  return "";
}
function B(t2, e2) {
  const i = $.getContext("2d"), o = [];
  e2 && (e2.weight && o.push(e2.weight), e2.size && o.push(e2.size + "px"), e2.family && o.push(e2.family)), i.font = o.join(" ");
  const { width: n, actualBoundingBoxLeft: a, actualBoundingBoxRight: l2, actualBoundingBoxAscent: s3, actualBoundingBoxDescent: r } = i.measureText(t2);
  return { width: Math.ceil(Math.max(n, a + l2)), height: Math.ceil(s3 + r), x: Math.floor(a), y: Math.floor((s3 - r) / 2) };
}
function P(t2) {
  const e2 = t2 == null ? void 0 : t2.size;
  return { width: null != e2 && "object" == typeof e2 && "width" in e2 ? u(e2.width) : null, height: null != e2 && "object" == typeof e2 && "height" in e2 ? u(e2.height) : null };
}
async function U2(t2, e2) {
  const i = e2.fill, o = t2.color;
  if ("pattern" === (i == null ? void 0 : i.type) && o && t2.type !== f2) {
    const t3 = await f(i.src, o.toCss(true));
    i.src = t3, e2.fill = i;
  }
}
async function A(t2, e2, i, n) {
  var _a, _b, _c;
  if (!("font" in t2) || !t2.font || "text" !== e2.shape.type) return;
  try {
    await c(t2.font);
  } catch {
  }
  const { width: a, height: l2 } = P(n);
  if (!/[\uE600-\uE6FF]/.test(e2.shape.text)) {
    const { width: o, height: s3, x: r, y: h2 } = B(e2.shape.text, { weight: (_a = e2.font) == null ? void 0 : _a.weight, size: (_b = e2.font) == null ? void 0 : _b.size, family: (_c = e2.font) == null ? void 0 : _c.family });
    i[0] = a ?? o, i[1] = l2 ?? s3, e2.shape.x = r, e2.shape.y = h2;
    let c2 = "angle" in t2 ? t2.angle : null;
    if (null != (n == null ? void 0 : n.rotation) && (c2 = (c2 ?? 0) + n.rotation), c2) {
      const t3 = c2 * (Math.PI / 180), e3 = Math.abs(Math.sin(t3)), o2 = Math.abs(Math.cos(t3));
      i[1] = i[0] * e3 + i[1] * o2;
    }
  }
}
function E(t2, e2, i, o, a) {
  var _a;
  if (null != t2.haloColor && null != t2.haloSize) {
    a.masking ?? (a.masking = i.map(() => []));
    const l2 = u(t2.haloSize);
    o[0] += l2, o[1] += l2, i.unshift([{ ...e2, fill: null, stroke: { color: t2.haloColor, width: 2 * l2, join: "round", cap: "round" } }]), a.masking.unshift([{ shape: { type: "rect", x: 0, y: 0, width: o[0] + 2 * s2, height: o[1] + 2 * s2 }, fill: [255, 255, 255], stroke: null }, { ...e2, fill: [0, 0, 0, 0], stroke: null }]);
  }
  null == t2.backgroundColor && null == t2.borderLineColor || (o[0] += 2 * s2, o[1] += 2 * s2, i.unshift([{ shape: { type: "rect", x: 0, y: 0, width: o[0], height: o[1] }, fill: t2.backgroundColor, stroke: { color: t2.borderLineColor, width: u(t2.borderLineSize) } }]), (_a = a.masking) == null ? void 0 : _a.unshift([]));
}
function F(t2, e2) {
  return t2 > e2 ? "dark" : "light";
}
function Z(t2, e2) {
  var _a, _b, _c, _d, _e;
  const i = "number" == typeof (e2 == null ? void 0 : e2.size) ? e2 == null ? void 0 : e2.size : null, o = null != i ? u(i) : null, a = null != (e2 == null ? void 0 : e2.maxSize) ? u(e2.maxSize) : null;
  let l2 = "angle" in t2 ? t2.angle : null;
  null != (e2 == null ? void 0 : e2.rotation) && (l2 = (l2 ?? 0) + e2.rotation);
  const c2 = u2(t2);
  let m = y(t2);
  "dark" !== q(t2, 245) || (e2 == null ? void 0 : e2.ignoreWhiteSymbols) || (m = { width: 0.75, ...m, color: "#bdc3c7" });
  let p = null;
  const d2 = { shape: null, fill: c2, stroke: m, offset: [0, 0] };
  (m == null ? void 0 : m.width) && (m.width = Math.min(m.width, k2));
  const g2 = (m == null ? void 0 : m.width) || 0;
  let C2 = null != (e2 == null ? void 0 : e2.size) && (null == (e2 == null ? void 0 : e2.scale) || (e2 == null ? void 0 : e2.scale)), $2 = 0, U3 = 0, A2 = false;
  switch (t2.type) {
    case b: {
      const i2 = t2.style, { width: s3, height: r } = P(e2);
      let h2 = s3 === r && null != s3 ? s3 : null != o ? o : Math.min(u(t2.size), a || z);
      if (true === (e2 == null ? void 0 : e2.useMarkerSymbolSize) && null !== s3 && null !== r) {
        const e3 = Math.min(u(t2.size), a || z);
        h2 = e3 > s3 && e3 > r ? Math.min(s3, r) : e3;
      }
      switch ($2 = h2, U3 = h2, i2) {
        case "circle":
          d2.shape = { type: "circle", cx: 0, cy: 0, r: 0.5 * h2 }, C2 || ($2 += g2, U3 += g2);
          break;
        case "cross":
          d2.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * U3] }, { command: "L", values: [$2, 0.5 * U3] }, { command: "M", values: [0.5 * $2, 0] }, { command: "L", values: [0.5 * $2, U3] }] };
          break;
        case "diamond":
          d2.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * U3] }, { command: "L", values: [0.5 * $2, 0] }, { command: "L", values: [$2, 0.5 * U3] }, { command: "L", values: [0.5 * $2, U3] }, { command: "Z", values: [] }] }, C2 || ($2 += g2, U3 += g2);
          break;
        case "square":
          d2.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [$2, 0] }, { command: "L", values: [$2, U3] }, { command: "L", values: [0, U3] }, { command: "Z", values: [] }] }, C2 || ($2 += g2, U3 += g2), l2 && (A2 = true);
          break;
        case "triangle":
          d2.shape = { type: "path", path: [{ command: "M", values: [0.5 * $2, 0] }, { command: "L", values: [$2, U3] }, { command: "L", values: [0, U3] }, { command: "Z", values: [] }] }, C2 || ($2 += g2, U3 += g2), l2 && (A2 = true);
          break;
        case "x":
          d2.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [$2, U3] }, { command: "M", values: [$2, 0] }, { command: "L", values: [0, U3] }] }, l2 && (A2 = true);
          break;
        case "path":
          d2.shape = { type: "path", path: t2.path || "" }, C2 || ($2 += g2, U3 += g2), l2 && (A2 = true), C2 = true;
      }
      break;
    }
    case x: {
      const { width: t3, height: i2 } = P(e2), n = g(m).reduce((t4, e3) => t4 + e3, 0), a2 = n && Math.ceil(L2 / n), l3 = i2 ?? o ?? g2, s3 = t3 ?? (n * a2 || L2);
      if (C2 = true, "polyline" === ((_a = e2 == null ? void 0 : e2.geometry) == null ? void 0 : _a.type) && ((_b = e2 == null ? void 0 : e2.geometry) == null ? void 0 : _b.extent)) {
        $2 = s3, U3 = i2 ?? $2;
        const t4 = 1e3, o2 = 0.15 * t4;
        p = [$2, U3], U3 = p[0] > p[1] ? t4 * p[1] / p[0] : t4, $2 = p[0] > p[1] ? t4 : t4 * p[0] / p[1], (m == null ? void 0 : m.width) && (m.width = m.width * t4 / (p[1] > p[0] ? p[1] : p[0]), m.width > o2 && (m.width = o2)), d2.shape = { type: "path", path: j(e2.geometry, $2, U3) };
      } else $2 = null != (e2 == null ? void 0 : e2.maxSize) ? Math.min(s3, e2.maxSize) : s3, U3 = l3, m && (m.width = l3), d2.shape = { type: "path", path: [{ command: "M", values: [l3 / 2, U3 / 2] }, { command: "L", values: [$2 - l3 / 2, U3 / 2] }] };
      break;
    }
    case f2:
    case w: {
      const t3 = "object" == typeof (e2 == null ? void 0 : e2.symbolConfig) && !!((_c = e2 == null ? void 0 : e2.symbolConfig) == null ? void 0 : _c.isSquareFill), { width: i2, height: n } = P(e2);
      $2 = !t3 && i2 !== n || null == i2 ? null != o ? o : S : i2, U3 = !t3 && i2 !== n || null == n ? $2 : n, C2 || ($2 += g2, U3 += g2), C2 = true, ((_d = e2 == null ? void 0 : e2.geometry) == null ? void 0 : _d.extent) && "polygon" === ((_e = e2 == null ? void 0 : e2.geometry) == null ? void 0 : _e.type) ? (p = [$2, U3], U3 = p[0] > p[1] ? 1e3 * p[1] / p[0] : 1e3, $2 = p[0] > p[1] ? 1e3 : 1e3 * p[0] / p[1], d2.shape = { type: "path", path: j(e2.geometry, $2, U3) }) : d2.shape = t3 ? { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [$2, 0] }, { command: "L", values: [$2, U3] }, { command: "L", values: [0, U3] }, { command: "L", values: [0, 0] }, { command: "Z", values: [] }] } : e.fill[0];
      break;
    }
    case y2: {
      const i2 = Math.min(u(t2.width), a || z), s3 = Math.min(u(t2.height), a || z), { width: r, height: h2 } = P(e2), c3 = r === h2 && null != r ? r : null != o ? o : Math.max(i2, s3), m2 = t2.width / t2.height;
      $2 = m2 <= 1 ? Math.ceil(c3 * m2) : c3, U3 = m2 <= 1 ? c3 : Math.ceil(c3 / m2), d2.shape = { type: "image", x: -Math.round($2 / 2), y: -Math.round(U3 / 2), width: $2, height: U3, src: t2.url || "" }, l2 && (A2 = true);
      break;
    }
    case v: {
      const i2 = t2, l3 = (e2 == null ? void 0 : e2.overrideText) || i2.text || M, s3 = i2.font, { width: r, height: h2 } = P(e2), c3 = null != h2 ? h2 : null != o ? o : Math.min(u(s3.size), a || z), { width: m2, height: u3 } = B(l3, { weight: s3.weight, size: c3, family: s3.family }), p2 = /[\uE600-\uE6FF]/.test(l3);
      $2 = r ?? (p2 ? c3 : m2), U3 = p2 ? c3 : u3;
      let g3 = 0.5 * (p2 ? c3 : u3);
      p2 && (g3 += 5), d2.shape = { type: "text", text: l3, x: i2.xoffset || 0, y: i2.yoffset || g3, align: "middle", alignBaseline: i2.verticalAlignment, decoration: s3 && s3.decoration, rotated: i2.rotated, kerning: i2.kerning }, d2.font = s3 && { size: c3, style: s3.style, decoration: s3.decoration, weight: s3.weight, family: s3.family };
      break;
    }
  }
  return { shapeDescriptor: d2, size: [$2, U3], outputSize: p, renderOptions: { node: e2 == null ? void 0 : e2.node, scale: C2, opacity: e2 == null ? void 0 : e2.opacity, rotations: [l2], useRotationSize: A2, effectView: e2 == null ? void 0 : e2.effectView, ariaLabel: e2 == null ? void 0 : e2.ariaLabel } };
}
async function D(t2, e2) {
  var _a, _b, _c, _d, _e;
  const { shapeDescriptor: o, size: n, renderOptions: a, outputSize: l2 } = Z(t2, e2);
  if (!o.shape) throw new s("symbolPreview: renderPreviewHTML2D", "symbol not supported.");
  await U2(t2, o), await A(t2, o, n, e2);
  const s3 = [[o]];
  if ("object" == typeof (e2 == null ? void 0 : e2.symbolConfig) && ((_a = e2 == null ? void 0 : e2.symbolConfig) == null ? void 0 : _a.applyColorModulation)) {
    const t3 = 0.6 * n[0];
    s3.unshift([{ ...o, offset: [-t3, 0], fill: d(o.fill, -0.3) }]), s3.push([{ ...o, offset: [t3, 0], fill: d(o.fill, 0.3) }]), n[0] += 2 * t3, a.scale = false;
  }
  "text" === t2.type && E(t2, o, s3, n, a);
  const r = l(s3, n, a);
  if (l2 && r) {
    const t3 = "img" === r.nodeName.toLowerCase() ? r : r.firstChild;
    "svg" === t3.nodeName.toLowerCase() && t3.setAttribute("viewBox", `0 0 ${n[0].toString()} ${n[1].toString()}`), t3.setAttribute("width", l2[0].toString()), t3.setAttribute("height", l2[1].toString()), l2.length > 2 && (t3.style.setProperty("padding-left", ((_b = l2[2]) == null ? void 0 : _b.toString()) + "px"), t3.style.setProperty("padding-right", ((_c = l2[2]) == null ? void 0 : _c.toString()) + "px"), t3.style.setProperty("padding-top", ((_d = l2[3]) == null ? void 0 : _d.toString()) + "px"), t3.style.setProperty("padding-bottom", ((_e = l2[3]) == null ? void 0 : _e.toString()) + "px"), t3.style.setProperty("box-sizing", "border-box"));
  }
  return r;
}
function q(i, o = C) {
  const n = u2(i), a = y(i), l2 = !n || "type" in n ? null : new h(n), h2 = (a == null ? void 0 : a.color) ? new h(a == null ? void 0 : a.color) : null, c2 = l2 ? F(L(l2), o) : null, m = h2 ? F(L(h2), o) : null;
  return m ? c2 ? c2 === m ? c2 : o >= C ? "light" : "dark" : m : c2;
}
export {
  q as getContrastingBackgroundTheme,
  Z as getRenderSymbolParameters,
  D as previewSymbol2D
};
//# sourceMappingURL=previewSymbol2D-CTSV4ETQ.js.map
