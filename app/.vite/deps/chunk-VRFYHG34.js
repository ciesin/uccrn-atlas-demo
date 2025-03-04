import {
  M,
  g
} from "./chunk-M6YQSYSW.js";
import {
  B,
  U
} from "./chunk-ZD4JXG4O.js";
import {
  n as n3
} from "./chunk-AI444EOP.js";
import {
  a,
  c,
  e,
  i as i2,
  s as s3
} from "./chunk-CTBXY22F.js";
import {
  i2 as i,
  n as n2
} from "./chunk-7EIXRVA4.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  P2 as P,
  s as s2
} from "./chunk-UFBX3XSC.js";
import {
  n
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/symbols/support/svgGlobalState.js
var n4 = 0;
function t() {
  return n4++;
}
var o = 0;
function c2() {
  return o++;
}
var f = 0;
function i3() {
  return f++;
}

// node_modules/@arcgis/core/symbols/support/svgUtils.js
var d = "http://www.w3.org/2000/svg";
var y = has("android");
var p = has("chrome") || y && y >= 4 ? "auto" : "optimizeLegibility";
var g2 = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 };
var m = /([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;
var x = {};
var w = {};
var k = Math.PI;
function b(t2, e2) {
  const i4 = t2 * (k / 180);
  return Math.abs(e2 * Math.sin(i4)) + Math.abs(e2 * Math.cos(i4));
}
function j(t2) {
  return t2.map((t3) => `${t3.command} ${t3.values.join(" ")}`).join(" ").trim();
}
function M2(t2, i4, r, n5, o2) {
  if (t2) {
    if ("circle" === t2.type) return n2("circle", { cx: t2.cx, cy: t2.cy, fill: i4, "fill-rule": "evenodd", r: t2.r, stroke: r.color, "stroke-dasharray": r.dashArray, "stroke-dashoffset": r.dashOffset, "stroke-linecap": r.cap, "stroke-linejoin": r.join, "stroke-miterlimit": "4", "stroke-width": r.width });
    if ("ellipse" === t2.type) return n2("ellipse", { cx: t2.cx, cy: t2.cy, fill: i4, "fill-rule": "evenodd", rx: t2.rx, ry: t2.ry, stroke: r.color, "stroke-dasharray": r.dashArray, "stroke-linecap": r.cap, "stroke-linejoin": r.join, "stroke-miterlimit": "4", "stroke-width": r.width });
    if ("rect" === t2.type) return n2("rect", { fill: i4, "fill-rule": "evenodd", height: t2.height, stroke: r.color, "stroke-dasharray": r.dashArray, "stroke-linecap": r.cap, "stroke-linejoin": r.join, "stroke-miterlimit": "4", "stroke-width": r.width, width: t2.width, x: t2.x, y: t2.y });
    if ("image" === t2.type) return n2("image", { alt: o2 || "image", height: t2.height, href: t2.src, preserveAspectRatio: "none", width: t2.width, x: t2.x, y: t2.y });
    if ("path" === t2.type) {
      const e2 = "string" != typeof t2.path ? j(t2.path) : t2.path;
      return n2("path", { d: e2, fill: i4, "fill-rule": "evenodd", stroke: r.color, "stroke-dasharray": r.dashArray, "stroke-linecap": r.cap, "stroke-linejoin": r.join, "stroke-miterlimit": "4", "stroke-width": r.width });
    }
    if ("text" === t2.type) return n(n5), n2("text", { "dominant-baseline": n5.dominantBaseline, fill: i4, "fill-rule": "evenodd", "font-family": n5.font.family, "font-size": n5.font.size, "font-style": n5.font.style, "font-variant": n5.font.variant, "font-weight": n5.font.weight, kerning: n5.kerning, rotate: n5.rotate, stroke: r.color, "stroke-dasharray": r.dashArray, "stroke-linecap": r.cap, "stroke-linejoin": r.join, "stroke-miterlimit": "4", "stroke-width": r.width, "text-anchor": n5.align, "text-decoration": n5.decoration, "text-rendering": p, x: t2.x, y: t2.y }, t2.text);
  }
  return null;
}
function v(e2) {
  if (!e2) return { fill: "none", pattern: null, linearGradient: null };
  if (!("type" in e2)) return { fill: new h(e2).toString(), pattern: null, linearGradient: null };
  if ("pattern" === e2.type) {
    const t2 = `patternId-${t()}`;
    return { fill: `url(#${t2})`, pattern: { id: t2, x: e2.x, y: e2.y, width: e2.width, height: e2.height, image: { x: 0, y: 0, width: e2.width, height: e2.height, href: e2.src } }, linearGradient: null };
  }
  const i4 = `linearGradientId-${c2()}`;
  return { fill: `url(#${i4})`, pattern: null, linearGradient: { id: i4, x1: e2.x1, y1: e2.y1, x2: e2.x2, y2: e2.y2, stops: e2.colors.map((e3) => ({ offset: e3.offset, color: e3.color && new h(e3.color).toString() })) } };
}
function S(e2) {
  const i4 = { color: "none", width: 1, cap: "butt", join: "4", dashArray: "none", dashOffset: "0" };
  return e2 && (null != e2.width && (i4.width = e2.width), e2.cap && (i4.cap = e2.cap), e2.join && (i4.join = e2.join.toString()), e2.color && (i4.color = new h(e2.color).toString()), e2.dashArray && (i4.dashArray = e2.dashArray), e2.dashoffset && (i4.dashOffset = e2.dashoffset), e2.style && !e2.dashArray && (i4.dashArray = g(e2).join(",") || "none")), i4;
}
function $(t2, i4) {
  const r = { align: null, decoration: null, kerning: null, rotate: null, font: { style: null, variant: null, weight: null, size: null, family: null } };
  if (t2) {
    const n5 = t2.alignBaseline, o2 = "baseline" === n5 ? "auto" : "top" === n5 ? "text-top" : "bottom" === n5 ? "hanging" : n5;
    r.align = t2.align, r.dominantBaseline = o2, r.decoration = t2.decoration, r.kerning = t2.kerning ? "auto" : "0", r.rotate = t2.rotated ? "90" : "0", n(i4), r.font.style = i4.style || "normal", r.font.variant = i4.variant || "normal", r.font.weight = i4.weight || "normal", r.font.size = i4.size && i4.size.toString() || "10pt", r.font.family = i4.family || "serif";
  }
  return r;
}
function A(t2) {
  const { pattern: e2, linearGradient: i4 } = t2;
  if (e2) return n2("pattern", { height: e2.height, id: e2.id, patternUnits: "userSpaceOnUse", width: e2.width, x: e2.x, y: e2.y }, n2("image", { height: e2.image.height, href: e2.image.href, width: e2.image.width, x: e2.image.x, y: e2.image.y }));
  if (i4) {
    const t3 = i4.stops.map((t4, e3) => n2("stop", { key: `${e3}-stop`, offset: t4.offset, "stop-color": t4.color }));
    return n2("linearGradient", { gradientUnits: "userSpaceOnUse", id: i4.id, x1: i4.x1, x2: i4.x2, y1: i4.y1, y2: i4.y2 }, t3);
  }
  return null;
}
function G(t2, e2) {
  if (!t2 || 0 === t2.length) return null;
  const i4 = [];
  for (const r of t2) {
    const { shape: t3, fill: e3, stroke: n5, font: o2 } = r, a2 = v(e3), s5 = S(n5), l2 = "text" === t3.type ? $(t3, o2) : null, h3 = M2(t3, a2.fill, s5, l2);
    h3 && i4.push(h3);
  }
  return n2("mask", { id: e2, maskUnits: "userSpaceOnUse" }, n2("g", null, i4));
}
function N(t2, e2, i4) {
  return i2(t2, a(t2), [e2, i4]);
}
function z(t2, e2, i4, r, n5) {
  return c(t2, a(t2), [e2, i4]), t2[4] = t2[4] * e2 - r * e2 + r, t2[5] = t2[5] * i4 - n5 * i4 + n5, t2;
}
function I(t2, e2, i4, r) {
  const n5 = e2 % 360 * Math.PI / 180;
  s3(t2, a(t2), n5);
  const a2 = Math.cos(n5), l2 = Math.sin(n5), h3 = t2[4], f3 = t2[5];
  return t2[4] = h3 * a2 - f3 * l2 + r * l2 - i4 * a2 + i4, t2[5] = f3 * a2 + h3 * l2 - i4 * l2 - r * a2 + r, t2;
}
function B2(t2, e2) {
  x && "left" in x ? (null != x.left && x.left > t2 && (x.left = t2), (null == x.right || x.right < t2) && (x.right = t2), (null == x.top || x.top > e2) && (x.top = e2), (null == x.bottom || x.bottom < e2) && (x.bottom = e2)) : x = { left: t2, bottom: e2, right: t2, top: e2 };
}
function U2(t2) {
  const e2 = t2.args, i4 = e2.length;
  let r;
  switch (t2.action) {
    case "M":
    case "L":
    case "C":
    case "S":
    case "Q":
    case "T":
      for (r = 0; r < i4; r += 2) B2(e2[r], e2[r + 1]);
      w.x = e2[i4 - 2], w.y = e2[i4 - 1];
      break;
    case "H":
      for (r = 0; r < i4; ++r) B2(e2[r], w.y);
      w.x = e2[i4 - 1];
      break;
    case "V":
      for (r = 0; r < i4; ++r) B2(w.x, e2[r]);
      w.y = e2[i4 - 1];
      break;
    case "m": {
      let t3 = 0;
      "x" in w || (B2(w.x = e2[0], w.y = e2[1]), t3 = 2);
      for (r = t3; r < i4; r += 2) B2(w.x += e2[r], w.y += e2[r + 1]);
      break;
    }
    case "l":
    case "t":
      for (r = 0; r < i4; r += 2) B2(w.x += e2[r], w.y += e2[r + 1]);
      break;
    case "h":
      for (r = 0; r < i4; ++r) B2(w.x += e2[r], w.y);
      break;
    case "v":
      for (r = 0; r < i4; ++r) B2(w.x, w.y += e2[r]);
      break;
    case "c":
      for (r = 0; r < i4; r += 6) B2(w.x + e2[r], w.y + e2[r + 1]), B2(w.x + e2[r + 2], w.y + e2[r + 3]), B2(w.x += e2[r + 4], w.y += e2[r + 5]);
      break;
    case "s":
    case "q":
      for (r = 0; r < i4; r += 4) B2(w.x + e2[r], w.y + e2[r + 1]), B2(w.x += e2[r + 2], w.y += e2[r + 3]);
      break;
    case "A":
      for (r = 0; r < i4; r += 7) B2(e2[r + 5], e2[r + 6]);
      w.x = e2[i4 - 2], w.y = e2[i4 - 1];
      break;
    case "a":
      for (r = 0; r < i4; r += 7) B2(w.x += e2[r + 5], w.y += e2[r + 6]);
  }
}
function F(t2, e2, i4) {
  const r = g2[t2.toLowerCase()];
  let n5;
  "number" == typeof r && (r ? e2.length >= r && (n5 = { action: t2, args: e2.slice(0, e2.length - e2.length % r) }, i4.push(n5), U2(n5)) : (n5 = { action: t2, args: [] }, i4.push(n5), U2(n5)));
}
function O(t2) {
  const e2 = ("string" != typeof t2.path ? j(t2.path) : t2.path).match(m), i4 = [];
  if (x = {}, w = {}, !e2) return null;
  let r = "", n5 = [];
  const o2 = e2.length;
  for (let s5 = 0; s5 < o2; ++s5) {
    const t3 = e2[s5], o3 = parseFloat(t3);
    isNaN(o3) ? (r && F(r, n5, i4), n5 = [], r = t3) : n5.push(o3);
  }
  F(r, n5, i4);
  const a2 = { x: 0, y: 0, width: 0, height: 0 };
  return x && "left" in x && (a2.x = x.left, a2.y = x.top, a2.width = x.right - x.left, a2.height = x.bottom - x.top), a2;
}
function T(t2) {
  const e2 = { x: 0, y: 0, width: 0, height: 0 };
  if ("circle" === t2.type) e2.x = t2.cx - t2.r, e2.y = t2.cy - t2.r, e2.width = 2 * t2.r, e2.height = 2 * t2.r;
  else if ("ellipse" === t2.type) e2.x = t2.cx - t2.rx, e2.y = t2.cy - t2.ry, e2.width = 2 * t2.rx, e2.height = 2 * t2.ry;
  else if ("image" === t2.type || "rect" === t2.type) e2.x = t2.x, e2.y = t2.y, e2.width = t2.width, e2.height = t2.height;
  else if ("path" === t2.type) {
    const i4 = O(t2);
    e2.x = i4.x, e2.y = i4.y, e2.width = i4.width, e2.height = i4.height;
  }
  return e2;
}
function E(t2) {
  const e2 = { x: 0, y: 0, width: 0, height: 0 };
  let i4 = null, r = Number.NEGATIVE_INFINITY, n5 = Number.NEGATIVE_INFINITY;
  for (const o2 of t2) i4 ? (i4.x = Math.min(i4.x, o2.x), i4.y = Math.min(i4.y, o2.y), r = Math.max(r, o2.x + o2.width), n5 = Math.max(n5, o2.y + o2.height)) : (i4 = e2, i4.x = o2.x, i4.y = o2.y, r = o2.x + o2.width, n5 = o2.y + o2.height);
  return i4 && (i4.width = r - i4.x, i4.height = n5 - i4.y), i4;
}
function L(t2, e2, n5, o2, a2, s5, l2, h3, f3) {
  let c3 = (l2 && s5 ? b(s5, e2) : e2) / 2, u2 = (l2 && s5 ? b(s5, n5) : n5) / 2;
  if (f3) {
    const t3 = f3[0], e3 = f3[1];
    c3 = (l2 && s5 ? b(s5, t3) : t3) / 2, u2 = (l2 && s5 ? b(s5, e3) : e3) / 2;
  }
  const d3 = t2.width + o2, y2 = t2.height + o2, p2 = n3(), g4 = n3();
  let m3 = false;
  if (a2 && 0 !== d3 && 0 !== y2) {
    const t3 = e2 !== n5 ? e2 / n5 : d3 / y2, i4 = e2 > n5 ? e2 : n5;
    let o3 = 1, a3 = 1;
    isNaN(i4) || (t3 > 1 ? (o3 = i4 / d3, a3 = i4 / t3 / y2) : (a3 = i4 / y2, o3 = i4 * t3 / d3)), e(g4, g4, z(p2, o3, a3, c3, u2)), m3 = true;
  }
  const x2 = t2.x + (d3 - o2) / 2, w2 = t2.y + (y2 - o2) / 2;
  if (e(g4, g4, N(p2, c3 - x2, u2 - w2)), !m3 && (d3 > e2 || y2 > n5)) {
    const t3 = d3 / e2 > y2 / n5, i4 = (t3 ? e2 : n5) / (t3 ? d3 : y2);
    e(g4, g4, z(p2, i4, i4, x2, w2));
  }
  return h3 && e(g4, g4, N(p2, h3[0], h3[1])), s5 && e(g4, g4, I(p2, s5, x2, w2)), `matrix(${g4[0]},${g4[1]},${g4[2]},${g4[3]},${g4[4]},${g4[5]})`;
}
function R(t2, e2, i4) {
  const r = t2 == null ? void 0 : t2.effects.find((t3) => "bloom" === t3.type);
  if (!r) return null;
  const { strength: n5, radius: o2 } = r, a2 = n5 > 0 ? o2 : 0, s5 = (n5 + a2) * e2, l2 = 4 * n5 + 1;
  return n2("filter", { filterUnits: "userSpaceOnUse", height: "300%", id: `bloom${i4}`, width: "300%", x: "-100%", y: "-100%" }, n2("feMorphology", { in: "SourceGraphic", operator: "dilate", radius: (n5 + 0.5 * a2) * (5 ** (e2 / 100) * (0.4 + e2 / 100)), result: "dilate" }), n2("feGaussianBlur", { in: "dilate", result: "blur", stdDeviation: s5 / 25 }), n2("feGaussianBlur", { in: "blur", result: "intensityBlur", stdDeviation: s5 / 50 }), n2("feComponentTransfer", { in: "SourceGraphic", result: "intensityBrightness" }, n2("feFuncR", { slope: l2, type: "linear" }), n2("feFuncG", { slope: l2, type: "linear" }), n2("feFuncB", { slope: l2, type: "linear" })), n2("feMerge", null, n2("feMergeNode", { in: "intensityBlur" }), n2("feMergeNode", { in: "intensityBrightness" }), n2("feGaussianBlur", { stdDeviation: n5 / 10 })));
}
function V(t2, i4, r, n5 = {}) {
  var _a, _b, _c;
  const o2 = [], a2 = [], s5 = i3(), l2 = R(n5.effectView, i4, s5);
  let h3 = null;
  if (l2) {
    const t3 = (_a = n5.effectView) == null ? void 0 : _a.effects.find((t4) => "bloom" === t4.type), e2 = (t3.strength ? t3.strength + t3.radius / 2 : 0) / 3, o3 = i4 + i4 * e2, a3 = r + r * e2;
    h3 = [Math.max(o3, 10), Math.max(a3, 10)];
  }
  let f3 = i4, y2 = r;
  if (n5.useRotationSize) for (let e2 = 0; e2 < t2.length; e2++) {
    const t3 = ((_b = n5.rotations) == null ? void 0 : _b[e2]) ?? 0;
    f3 = Math.max(b(t3, i4), f3), y2 = Math.max(b(t3, r), y2);
  }
  for (let e2 = 0; e2 < t2.length; e2++) {
    const s6 = t2[e2], l3 = [], c3 = [];
    let d3 = 0, p3 = 0, g4 = 0;
    for (const t3 of s6) {
      const { shape: e3, fill: i5, stroke: r2, font: a3, offset: s7 } = t3;
      n5.ignoreStrokeWidth || "text" === e3.type || (d3 += (r2 == null ? void 0 : r2.width) || 0);
      const h4 = v(i5), f4 = S(r2), u2 = "text" === e3.type ? $(e3, a3) : null;
      o2.push(A(h4)), l3.push(M2(e3, h4.fill, f4, u2, n5.ariaLabel)), c3.push(T(e3)), s7 && (p3 += s7[0], g4 += s7[1]);
    }
    const m3 = ((_c = n5.rotations) == null ? void 0 : _c[e2]) ?? 0;
    n5.useRotationSize && (p3 += (f3 - b(m3, i4)) / 2, g4 += (y2 - b(m3, r)) / 2);
    const x2 = L(E(c3), i4, r, d3, n5.scale ?? false, m3, n5.useRotationSize ?? false, [p3, g4], h3);
    let w2 = null;
    if (n5.masking) {
      const t3 = `mask-${e2}`, i5 = n5.masking[e2];
      o2.push(G(i5, t3)), w2 = `url(#${t3})`;
    }
    a2.push(w2 ? n2("g", { mask: w2 }, n2("g", { transform: x2 }, l3)) : n2("g", { transform: x2 }, l3));
  }
  l2 && (n(h3), f3 = h3[0], y2 = h3[1]);
  const p2 = "display: block;";
  return n2("svg", { "aria-label": n5.ariaLabel, focusable: false, height: y2, role: "img", style: p2, width: f3, xmlns: d }, l2, n2("defs", null, o2), l2 ? n2("g", { filter: `url(#bloom${s5})` }, a2) : a2);
}

// node_modules/@arcgis/core/symbols/support/renderUtils.js
var s4 = i();
function h2(t2, e2) {
  s4.append(t2, e2), s4.detach(e2);
}
function l(t2, e2, i4) {
  const r = Math.ceil(e2[0]), n5 = Math.ceil(e2[1]);
  if (!t2.some((t3) => !!t3.length)) return null;
  const o2 = (i4 == null ? void 0 : i4.node) || document.createElement("div");
  null != i4.opacity && (o2.style.opacity = i4.opacity.toString()), null != i4.effectView && (o2.style.filter = M(i4.effectView));
  return h2(o2, () => V(t2, r, n5, i4)), o2;
}
function m2(t2, e2) {
  t2 = Math.ceil(t2), e2 = Math.ceil(e2);
  const i4 = document.createElement("canvas");
  i4.width = t2, i4.height = e2, i4.style.width = t2 + "px", i4.style.height = e2 + "px";
  const r = i4.getContext("2d");
  return r.clearRect(0, 0, t2, e2), r;
}
function g3(t2, i4, r) {
  return t2 ? P(t2, { responseType: "image" }).then((t3) => {
    const e2 = t3.data, n5 = e2.width, o2 = e2.height, a2 = n5 / o2;
    let c3 = i4;
    if (r) {
      const t4 = Math.max(n5, o2);
      c3 = Math.min(c3, t4);
    }
    return { image: e2, width: a2 <= 1 ? Math.ceil(c3 * a2) : c3, height: a2 <= 1 ? c3 : Math.ceil(c3 / a2) };
  }) : Promise.reject(new s("renderUtils: imageDataSize", "href not provided."));
}
function u(t2, e2) {
  return !(!t2 || "ignore" === e2) && ("multiply" !== e2 || 255 !== t2.r || 255 !== t2.g || 255 !== t2.b || 1 !== t2.a);
}
function f2(t2, e2, n5, o2, a2) {
  switch (a2) {
    case "multiply":
      t2[e2] *= n5[0], t2[e2 + 1] *= n5[1], t2[e2 + 2] *= n5[2], t2[e2 + 3] *= n5[3];
      break;
    default: {
      const a3 = B({ r: t2[e2], g: t2[e2 + 1], b: t2[e2 + 2] });
      a3.h = o2.h, a3.s = o2.s, a3.v = a3.v / 100 * o2.v;
      const c3 = U(a3);
      t2[e2] = c3.r, t2[e2 + 1] = c3.g, t2[e2 + 2] = c3.b, t2[e2 + 3] *= n5[3];
      break;
    }
  }
}
function d2(e2, r, n5, o2, a2) {
  return g3(e2, r, a2).then((a3) => {
    var _a;
    const c3 = a3.width ?? r, s5 = a3.height ?? r;
    if (a3.image && u(n5, o2)) {
      let t2 = a3.image.width, r2 = a3.image.height;
      has("edge") && /\.svg$/i.test(e2) && (t2 -= 1, r2 -= 1);
      const h3 = m2(c3, s5);
      h3.drawImage(a3.image, 0, 0, t2, r2, 0, 0, c3, s5);
      const l2 = h3.getImageData(0, 0, c3, s5), g4 = [n5.r / 255, n5.g / 255, n5.b / 255, n5.a], u2 = B(n5);
      for (let e3 = 0; e3 < l2.data.length; e3 += 4) f2(l2.data, e3, g4, u2, o2);
      h3.putImageData(l2, 0, 0), e2 = h3.canvas.toDataURL("image/png");
    } else {
      const i4 = (_a = s2) == null ? void 0 : _a.findCredential(e2);
      if (i4 == null ? void 0 : i4.token) {
        const t2 = e2.includes("?") ? "&" : "?";
        e2 = `${e2}${t2}token=${i4.token}`;
      }
    }
    return { url: e2, width: c3, height: s5 };
  }).catch(() => ({ url: e2, width: r, height: r }));
}

export {
  l,
  d2 as d
};
//# sourceMappingURL=chunk-VRFYHG34.js.map
