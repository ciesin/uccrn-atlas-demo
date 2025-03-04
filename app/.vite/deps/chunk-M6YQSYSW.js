import {
  C
} from "./chunk-4FQK362J.js";
import {
  i
} from "./chunk-TOMXDOXB.js";
import {
  e as e2
} from "./chunk-JST5QDP2.js";
import {
  S,
  k,
  m
} from "./chunk-IPFYNOOY.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  e,
  u
} from "./chunk-JLFV7EBO.js";
import {
  s
} from "./chunk-JLFSX3JT.js";
import {
  a
} from "./chunk-ACGZOBZ6.js";
import {
  n
} from "./chunk-7AOPU62X.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";

// node_modules/@arcgis/core/symbols/support/gfxUtils.js
var i2 = "picture-fill";
var a2 = "simple-fill";
var l = "simple-line";
var c = "simple-marker";
var h2 = "text";
var d = "cim";
var m2 = /* @__PURE__ */ new Map([["dash", [4, 3]], ["dashdot", [4, 3, 1, 3]], ["dot", [1, 3]], ["longdash", [8, 3]], ["longdashdot", [8, 3, 1, 3]], ["longdashdotdot", [8, 3, 1, 3, 1, 3]], ["shortdash", [4, 1]], ["shortdashdot", [4, 1, 1, 1]], ["shortdashdotdot", [4, 1, 1, 1, 1, 1]], ["shortdot", [1, 1]], ["solid", []]]);
var p = new e2(1e3);
function u2(e3) {
  const o = e3.style;
  let s2 = null;
  if (e3) switch (e3.type) {
    case c:
      "cross" !== o && "x" !== o && (s2 = e3.color);
      break;
    case a2:
      o && "solid" !== o ? "none" !== o && (s2 = { type: "pattern", x: 0, y: 0, src: n(`esri/symbols/patterns/${o}.png`), width: 5, height: 5 }) : s2 = e3.color;
      break;
    case i2:
      s2 = { type: "pattern", src: e3.url, width: u(e3.width) * e3.xscale, height: u(e3.height) * e3.yscale, x: u(e3.xoffset), y: u(e3.yoffset) };
      break;
    case h2:
      s2 = e3.color;
      break;
    case d:
      s2 = C(e3);
  }
  return s2;
}
function f(t, e3) {
  const s2 = t + "-" + e3;
  return void 0 !== p.get(s2) ? Promise.resolve(p.get(s2)) : P(t, { responseType: "image" }).then((t2) => {
    const o = t2.data, r = o.naturalWidth, n2 = o.naturalHeight, i3 = document.createElement("canvas");
    i3.width = r, i3.height = n2;
    const a4 = i3.getContext("2d");
    a4.fillStyle = e3, a4.fillRect(0, 0, r, n2), a4.globalCompositeOperation = "destination-in", a4.drawImage(o, 0, 0);
    const l2 = i3.toDataURL();
    return p.put(s2, l2), l2;
  });
}
function y(t) {
  if (!t) return null;
  let e3 = null;
  switch (t.type) {
    case a2:
    case i2:
    case c:
      e3 = y(t.outline);
      break;
    case l: {
      const o = u(t.width);
      null != t.style && "none" !== t.style && 0 !== o && (e3 = { color: t.color, style: w(t.style), width: o, cap: t.cap, join: "miter" === t.join ? u(t.miterLimit) : t.join }, e3.dashArray = g(e3).join(",") || "none");
      break;
    }
    default:
      e3 = null;
  }
  return e3;
}
function g(t) {
  if (!(t == null ? void 0 : t.style)) return [];
  const { dashArray: e3, style: o, width: s2 } = t;
  if ("string" == typeof e3 && "none" !== e3) return e3.split(",").map((t2) => Number(t2));
  const r = s2 ?? 0, n2 = m2.has(o) ? m2.get(o).map((t2) => t2 * r) : [];
  if ("butt" !== t.cap) for (const [i3, a4] of n2.entries()) n2[i3] = i3 % 2 == 1 ? a4 + r : Math.max(a4 - r, 1);
  return n2;
}
var w = /* @__PURE__ */ (() => {
  const t = {};
  return (e3) => {
    if (t[e3]) return t[e3];
    const o = e3.replaceAll("-", "");
    return t[e3] = o, o;
  };
})();
var b = new h([128, 128, 128]);

// node_modules/@arcgis/core/symbols/support/utils.js
var a3 = new h("white");
function f2(e3) {
  var _a, _b;
  const t = (_a = e3.symbolLayers) == null ? void 0 : _a.at(-1);
  if (t && "outline" in t) return (_b = t == null ? void 0 : t.outline) == null ? void 0 : _b.size;
}
function m3(e3) {
  var _a;
  if (!e3) return 0;
  if (S(e3)) {
    const t = f2(e3);
    return null != t ? t : 0;
  }
  return e((_a = y(e3)) == null ? void 0 : _a.width);
}
function y2(e3) {
  if (null == e3 || !("symbolLayers" in e3) || null == e3.symbolLayers) return false;
  switch (e3.type) {
    case "point-3d":
      return e3.symbolLayers.some((e4) => "object" === e4.type);
    case "line-3d":
      return e3.symbolLayers.some((e4) => "path" === e4.type);
    case "polygon-3d":
      return e3.symbolLayers.some((e4) => "object" === e4.type || "extrude" === e4.type);
    default:
      return false;
  }
}
function p2(e3) {
  var _a;
  return ((_a = e3.resource) == null ? void 0 : _a.href) ?? "";
}
function h3(t, o) {
  if (!t) return null;
  let r = null;
  return S(t) ? r = b2(t) : k(t) && (r = "cim" === t.type ? C(t) : t.color ? new h(t.color) : null), r ? w2(r, o) : null;
}
function b2(t) {
  const o = t.symbolLayers;
  if (!o) return null;
  let r = null;
  return o.forEach((e3) => {
    var _a;
    "object" === e3.type && ((_a = e3.resource) == null ? void 0 : _a.href) || (r = "water" === e3.type ? e3.color : e3.material ? e3.material.color : null);
  }), r ? new h(r) : null;
}
function w2(t, o) {
  if (null == o || null == t) return t;
  const r = t.toRgba();
  return r[3] = r[3] * o, new h(r);
}
function d2(e3, t, o) {
  const r = e3.symbolLayers;
  if (!r) return;
  const n2 = (e4) => w2(t = t ?? e4 ?? (null != o ? a3 : null), o);
  r.forEach((e4) => {
    var _a, _b;
    if ("object" !== e4.type || !((_a = e4.resource) == null ? void 0 : _a.href) || t) if ("water" === e4.type) e4.color = n2(e4.color);
    else {
      const t2 = null != e4.material ? e4.material.color : null, r2 = n2(t2);
      null == e4.material ? e4.material = new m({ color: r2 }) : e4.material.color = r2, null != o && "outline" in e4 && null != ((_b = e4.outline) == null ? void 0 : _b.color) && (e4.outline.color = w2(e4.outline.color, o));
    }
  });
}
function j(e3, t, o) {
  var _a;
  (t = t ?? e3.color) && (e3.color = w2(t, o)), null != o && "outline" in e3 && ((_a = e3.outline) == null ? void 0 : _a.color) && (e3.outline.color = w2(e3.outline.color, o));
}
function g2(t, o, r) {
  t && (o || null != r) && (o && (o = new h(o)), S(t) ? d2(t, o, r) : k(t) && j(t, o, r));
}
async function k2(e3, o) {
  const r = e3.symbolLayers;
  r && await a(r, async (e4) => L(e4, o));
}
async function L(e3, t) {
  switch (e3.type) {
    case "extrude":
      S2(e3, t);
      break;
    case "icon":
    case "line":
    case "text":
      z(e3, t);
      break;
    case "path":
      v(e3, t);
      break;
    case "object":
      await U(e3, t);
  }
}
function z(e3, t) {
  const o = x(t);
  null != o && (e3.size = o);
}
function x(e3) {
  for (const t of e3) if ("number" == typeof t) return t;
  return null;
}
function S2(e3, t) {
  e3.size = "number" == typeof t[2] ? t[2] : 0;
}
async function U(e3, t) {
  const { resourceSize: o, symbolSize: r } = await O(e3), n2 = E(t, o, r);
  e3.width = R(t[0], r[0], o[0], n2), e3.depth = R(t[1], r[1], o[1], n2), e3.height = R(t[2], r[2], o[2], n2);
}
function v(e3, t) {
  const o = E(t, s, [e3.width, void 0, e3.height]);
  e3.width = R(t[0], e3.width, 1, o), e3.height = R(t[2], e3.height, 1, o);
}
function E(e3, t, o) {
  for (let r = 0; r < 3; r++) {
    const n2 = e3[r];
    switch (n2) {
      case "symbol-value": {
        const e4 = o[r];
        return null != e4 ? e4 / t[r] : 1;
      }
      case "proportional":
        break;
      default:
        if (n2 && t[r]) return n2 / t[r];
    }
  }
  return 1;
}
async function O(e3) {
  const { computeObjectLayerResourceSize: t } = await import("./symbolLayerUtils-OCHJFHRK.js"), o = await t(e3, 10), { width: r, height: n2, depth: l2 } = e3, i3 = [r, l2, n2];
  let c2 = 1;
  for (let s2 = 0; s2 < 3; s2++) {
    const e4 = i3[s2];
    if (null != e4) {
      c2 = e4 / o[s2];
      break;
    }
  }
  for (let s2 = 0; s2 < 3; s2++) null == i3[s2] && (i3[s2] = o[s2] * c2);
  return { resourceSize: o, symbolSize: i3 };
}
function R(e3, t, o, r) {
  switch (e3) {
    case "proportional":
      return o * r;
    case "symbol-value":
      return null != t ? t : o;
    default:
      return e3;
  }
}
function C2(e3, t) {
  const o = x(t);
  if (null != o) switch (e3.type) {
    case "simple-marker":
      e3.size = o;
      break;
    case "picture-marker": {
      const t2 = e3.width / e3.height;
      t2 > 1 ? (e3.width = o, e3.height = o * t2) : (e3.width = o * t2, e3.height = o);
      break;
    }
    case "simple-line":
      e3.width = o;
      break;
    case "text":
      e3.font.size = o;
  }
}
async function D(e3, t) {
  if (e3 && t) return S(e3) ? k2(e3, t) : void (k(e3) && C2(e3, t));
}
function J(e3, t, o) {
  if (e3 && null != t) if (S(e3)) {
    const r = e3.symbolLayers;
    r && r.forEach((e4) => {
      if ("object" === e4.type) switch (o) {
        case "tilt":
          e4.tilt = (e4.tilt ?? 0) + t;
          break;
        case "roll":
          e4.roll = (e4.roll ?? 0) + t;
          break;
        default:
          e4.heading = (e4.heading ?? 0) + t;
      }
      "icon" === e4.type && (e4.angle += t);
    });
  } else k(e3) && ("simple-marker" !== e3.type && "picture-marker" !== e3.type && "text" !== e3.type || (e3.angle += t));
}
function M(e3) {
  if (!e3) return null;
  const t = e3.effects.filter((e4) => "bloom" !== e4.type).map((e4) => e4.toJSON());
  return i(t);
}
function N(e3) {
  return null != e3 && "polygon-3d" === e3.type && e3.symbolLayers.some((e4) => "extrude" === e4.type);
}

export {
  u2 as u,
  f,
  y,
  g,
  w,
  b,
  m3 as m,
  y2,
  p2 as p,
  h3 as h,
  g2,
  D,
  J,
  M,
  N
};
//# sourceMappingURL=chunk-M6YQSYSW.js.map
