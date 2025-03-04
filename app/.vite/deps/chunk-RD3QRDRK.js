import {
  a as a3,
  c,
  e,
  l,
  n as n2,
  r as r3,
  t
} from "./chunk-EWSNAOW6.js";
import {
  E,
  K,
  a as a2,
  r as r2
} from "./chunk-ANT4QPJQ.js";
import {
  p,
  w
} from "./chunk-5AJMZDUM.js";
import {
  D,
  I,
  O
} from "./chunk-CRKFUUKK.js";
import {
  i
} from "./chunk-ZDVQNOKR.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  Q
} from "./chunk-LTDNORB5.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var T;
var E2;
var L;
var I2;
var A;
var _;
var R;
var N;
var S;
!function(T2) {
  T2[T2.FILL = 0] = "FILL", T2[T2.LINE = 1] = "LINE", T2[T2.MARKER = 2] = "MARKER", T2[T2.TEXT = 3] = "TEXT", T2[T2.LABEL = 4] = "LABEL";
}(T || (T = {})), function(T2) {
  T2[T2.NONE = 0] = "NONE", T2[T2.MAP = 1] = "MAP", T2[T2.LABEL = 2] = "LABEL", T2[T2.LABEL_ALPHA = 4] = "LABEL_ALPHA", T2[T2.HITTEST = 8] = "HITTEST", T2[T2.HIGHLIGHT = 16] = "HIGHLIGHT", T2[T2.CLIP = 32] = "CLIP", T2[T2.DEBUG = 64] = "DEBUG", T2[T2.NUM_DRAW_PHASES = 9] = "NUM_DRAW_PHASES";
}(E2 || (E2 = {})), function(T2) {
  T2[T2.SIZE = 0] = "SIZE", T2[T2.COLOR = 1] = "COLOR", T2[T2.OPACITY = 2] = "OPACITY", T2[T2.ROTATION = 3] = "ROTATION";
}(L || (L = {})), function(T2) {
  T2[T2.MINMAX_TARGETS_OUTLINE = 128] = "MINMAX_TARGETS_OUTLINE", T2[T2.SCALE_TARGETS_OUTLINE = 256] = "SCALE_TARGETS_OUTLINE", T2[T2.FIELD_TARGETS_OUTLINE = 512] = "FIELD_TARGETS_OUTLINE", T2[T2.UNIT_TARGETS_OUTLINE = 1024] = "UNIT_TARGETS_OUTLINE";
}(I2 || (I2 = {})), function(T2) {
  T2[T2.SPRITE = 0] = "SPRITE", T2[T2.GLYPH = 1] = "GLYPH";
}(A || (A = {})), function(T2) {
  T2[T2.DEFAULT = 0] = "DEFAULT", T2[T2.SIMPLE = 1] = "SIMPLE", T2[T2.DOT_DENSITY = 2] = "DOT_DENSITY", T2[T2.OUTLINE_FILL = 3] = "OUTLINE_FILL", T2[T2.OUTLINE_FILL_SIMPLE = 4] = "OUTLINE_FILL_SIMPLE", T2[T2.HEATMAP = 5] = "HEATMAP", T2[T2.PIE_CHART = 6] = "PIE_CHART";
}(_ || (_ = {})), function(T2) {
  T2[T2.All = 0] = "All", T2[T2.Highlight = 1] = "Highlight", T2[T2.InsideEffect = 2] = "InsideEffect", T2[T2.OutsideEffect = 3] = "OutsideEffect";
}(R || (R = {})), function(T2) {
  T2[T2.BATCHING = 0] = "BATCHING", T2[T2.STRICT_ORDER = 1] = "STRICT_ORDER", T2[T2.STRICT_MARKERS_AND_TEXT = 2] = "STRICT_MARKERS_AND_TEXT";
}(N || (N = {})), function(T2) {
  T2[T2.FILL = 0] = "FILL", T2[T2.LINE = 1] = "LINE", T2[T2.MARKER = 2] = "MARKER", T2[T2.TEXT = 3] = "TEXT";
}(S || (S = {}));

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/featureTechniqueUtils.js
var r4 = { color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: { write: false, test: { ref: (t4) => t4.stencilRef, compare: O.EQUAL, mask: 255, op: { fail: I.KEEP, zFail: I.KEEP, zPass: I.REPLACE } } } };
var l2 = { color: { write: [true, true, true, true], blendMode: "additive" }, depth: false, stencil: false };
var a4 = { ...r4, color: { write: [true, true, true, true], blendMode: "delete" } };
function c2({ pixelRatio: e4, state: i2, displayLevel: o4, requiredLevel: n4 }, s2) {
  const r6 = 1 / 2 ** (o4 - s2.key.level), l4 = 1 / 2 ** (n4 - s2.key.level);
  return { displayMat3: i2.displayMat3, displayViewMat3: i2.displayViewMat3, displayViewScreenMat3: s2.transforms.displayViewScreenMat3, viewMat3: i2.viewMat3, tileMat3: s2.transforms.tileMat3, displayZoomFactor: r6, requiredZoomFactor: l4, tileOffset: [s2.x, s2.y], currentScale: i2.scale, currentZoom: o4, metersPerSRUnit: Q(i2.spatialReference), rotation: i2.rotation, pixelRatio: e4 };
}
function p2(t4) {
  var _a;
  return "highlight" === ((_a = t4.passOptions) == null ? void 0 : _a.type);
}
function f(t4) {
  var _a;
  return "hittest" === ((_a = t4.passOptions) == null ? void 0 : _a.type);
}
function u(t4) {
  if (!f(t4)) return null;
  const { position: e4, distance: i2, smallSymbolDistance: o4, smallSymbolSizeThreshold: n4 } = t4.passOptions;
  return { position: e4, distance: i2, smallSymbolDistance: o4, smallSymbolSizeThreshold: n4 };
}
function d(t4) {
  if (!p2(t4)) return null;
  const { activeReasons: e4, highlightAll: i2 } = t4.passOptions;
  return { activeReasons: e4, highlightAll: i2 ? 1 : 0 };
}
function m2(t4, e4, i2) {
  const o4 = {};
  for (const n4 in i2) i2[n4] instanceof Function ? o4[n4] = i2[n4](t4, e4) : o4[n4] = i2[n4];
  return o4;
}
function h2(t4, e4) {
  const { attributeView: i2, context: o4 } = t4;
  return { storage: i2.getUniforms(o4), view: c2(t4, e4), hittestRequest: u(t4), highlight: d(t4) };
}
function y(t4) {
  return { inside: t4.selection === R.InsideEffect, outside: t4.selection === R.OutsideEffect };
}
function M(t4) {
  return f(t4) ? l2 : p2(t4) && "clear" === t4.passOptions.stepType ? a4 : r4;
}
function w2(t4) {
  const { row: o4, col: n4 } = t4.key, s2 = n4 * a2, r6 = o4 * a2;
  return { tileOffsetFromLocalOrigin: [s2 % r2, r6 % r2], maxIntsToLocalOrigin: [Math.floor(s2 / r2), Math.floor(r6 / r2)] };
}

// node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js
var o2 = 1;
var t2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
var c3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var e2 = 256;

// node_modules/@arcgis/core/views/support/HighlightOptions.js
var d2;
var y2 = d2 = class extends g {
  constructor(o4) {
    super(o4), this.name = c, this.color = e.clone(), this.haloColor = null, this.haloOpacity = r3, this.fillOpacity = l, this.shadowColor = n2.clone(), this.shadowOpacity = t, this.shadowDifference = a3, this.haloWidth = 2.1, this.haloBlur = 0.8 / this.haloWidth;
  }
  equals(o4) {
    return this.color.equals(o4.color) && (this.haloColor || this.color).equals(o4.haloColor || o4.color) && this.haloOpacity === o4.haloOpacity && this.fillOpacity === o4.fillOpacity && this.haloWidth === o4.haloWidth && this.haloBlur === o4.haloBlur && this.shadowColor.equals(o4.shadowColor) && this.shadowOpacity === o4.shadowOpacity && this.shadowDifference === o4.shadowDifference;
  }
  clone() {
    var _a, _b;
    return new d2({ ...this, color: this.color.clone(), haloColor: (_a = this.haloColor) == null ? void 0 : _a.clone(), shadowColor: (_b = this.shadowColor) == null ? void 0 : _b.clone() });
  }
  assignFrom(o4) {
    var _a;
    this.color = o4.color.clone(), this.haloColor = (_a = o4.haloColor) == null ? void 0 : _a.clone(), this.haloOpacity = o4.haloOpacity, this.fillOpacity = o4.fillOpacity, this.shadowColor = o4.shadowColor.clone(), this.shadowDifference = o4.shadowDifference, this.shadowOpacity = o4.shadowOpacity, this.haloBlur = o4.haloBlur, this.haloWidth = o4.haloWidth;
  }
};
r([m({ type: String, constructOnly: true, nonNullable: true })], y2.prototype, "name", void 0), r([m({ type: h, nonNullable: true })], y2.prototype, "color", void 0), r([m({ type: h })], y2.prototype, "haloColor", void 0), r([m({ nonNullable: true })], y2.prototype, "haloOpacity", void 0), r([m({ nonNullable: true })], y2.prototype, "fillOpacity", void 0), r([m({ type: h, nonNullable: true })], y2.prototype, "shadowColor", void 0), r([m({ nonNullable: true })], y2.prototype, "shadowOpacity", void 0), r([m({ nonNullable: true })], y2.prototype, "shadowDifference", void 0), r([m({ nonNullable: true })], y2.prototype, "haloWidth", void 0), r([m({ nonNullable: true })], y2.prototype, "haloBlur", void 0), y2 = d2 = r([a("esri.views.support.HighlightOptions")], y2);
var u2 = y2;

// node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js
var a5 = () => n.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");
function u3(o4, i2) {
  i2.fillColor[0] = o4.color.r / 255, i2.fillColor[1] = o4.color.g / 255, i2.fillColor[2] = o4.color.b / 255, i2.fillColor[3] = o4.color.a, o4.haloColor ? (i2.outlineColor[0] = o4.haloColor.r / 255, i2.outlineColor[1] = o4.haloColor.g / 255, i2.outlineColor[2] = o4.haloColor.b / 255, i2.outlineColor[3] = o4.haloColor.a) : (i2.outlineColor[0] = i2.fillColor[0], i2.outlineColor[1] = i2.fillColor[1], i2.outlineColor[2] = i2.fillColor[2], i2.outlineColor[3] = i2.fillColor[3]), i2.fillColor[3] *= o4.fillOpacity, i2.outlineColor[3] *= o4.haloOpacity, i2.fillColor[0] *= i2.fillColor[3], i2.fillColor[1] *= i2.fillColor[3], i2.fillColor[2] *= i2.fillColor[3], i2.outlineColor[0] *= i2.outlineColor[3], i2.outlineColor[1] *= i2.outlineColor[3], i2.outlineColor[2] *= i2.outlineColor[3], i2.outlineWidth = (1 - o4.haloBlur) * o4.haloWidth, i2.outerHaloWidth = o4.haloBlur * o4.haloWidth / 2, i2.innerHaloWidth = o4.haloBlur * o4.haloWidth / 2, i2.outlinePosition = 0;
}
var d3 = [0, 0, 0, 0];
var g2 = class {
  constructor() {
    this.type = "single", this._highlightOptions = new u2(), this._convertedHighlightOptions = { fillColor: [0, 0, 0, 0], outlineColor: [0, 0, 0, 0], outlinePosition: 0, outlineWidth: 0, innerHaloWidth: 0, outerHaloWidth: 0 }, this._optionsShadeTexKey = "", this._texelData = new Uint8Array(4 * e2), this._minMaxDistance = [0, 0];
  }
  setHighlightOptions(o4) {
    this._highlightOptions = o4;
  }
  applyHighlightOptions(o4, t4) {
    this._updateGradientTexture(o4), o4.bindTexture(this._shadeTex, E), t4.setUniform2fv("u_minMaxDistance", this._minMaxDistance);
  }
  destroy() {
    var _a;
    (_a = this._shadeTex) == null ? void 0 : _a.dispose(), this._shadeTex = null;
  }
  getReasonsWithGradients() {
    return [{ activeReasons: (1 << K) - 1, activeGradient: this }];
  }
  _updateGradientTexture(o4) {
    const i2 = f2(this._highlightOptions);
    if (i2 === this._optionsShadeTexKey) return;
    this._optionsShadeTexKey = i2, u3(this._highlightOptions, this._convertedHighlightOptions);
    const t4 = this._convertedHighlightOptions, r6 = t4.outlinePosition - t4.outlineWidth / 2 - t4.outerHaloWidth, g4 = t4.outlinePosition - t4.outlineWidth / 2, p4 = t4.outlinePosition + t4.outlineWidth / 2, C = t4.outlinePosition + t4.outlineWidth / 2 + t4.innerHaloWidth, c5 = Math.sqrt(Math.PI / 2) * o2, m3 = Math.abs(r6) > c5 ? Math.round(10 * (Math.abs(r6) - c5)) / 10 : 0, x = Math.abs(C) > c5 ? Math.round(10 * (Math.abs(C) - c5)) / 10 : 0;
    let _2;
    m3 && !x ? a5().error("The outer rim of the highlight is " + m3 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !m3 && x ? a5().error("The inner rim of the highlight is " + x + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : m3 && x && a5().error("The highlight is " + Math.max(m3, x) + "px away from the edge of the feature; consider reducing some width values.");
    const w3 = [void 0, void 0, void 0, void 0];
    function T2(o5, i3, t5) {
      w3[0] = (1 - t5) * o5[0] + t5 * i3[0], w3[1] = (1 - t5) * o5[1] + t5 * i3[1], w3[2] = (1 - t5) * o5[2] + t5 * i3[2], w3[3] = (1 - t5) * o5[3] + t5 * i3[3];
    }
    const { _texelData: v } = this;
    for (let l4 = 0; l4 < e2; ++l4) _2 = r6 + l4 / (e2 - 1) * (C - r6), _2 < r6 ? (w3[0] = 0, w3[1] = 0, w3[2] = 0, w3[3] = 0) : _2 < g4 ? T2(d3, t4.outlineColor, (_2 - r6) / (g4 - r6)) : _2 < p4 ? [w3[0], w3[1], w3[2], w3[3]] = t4.outlineColor : _2 < C ? T2(t4.outlineColor, t4.fillColor, (_2 - p4) / (C - p4)) : [w3[0], w3[1], w3[2], w3[3]] = t4.fillColor, v[4 * l4] = 255 * w3[0], v[4 * l4 + 1] = 255 * w3[1], v[4 * l4 + 2] = 255 * w3[2], v[4 * l4 + 3] = 255 * w3[3];
    if (this._minMaxDistance[0] = r6, this._minMaxDistance[1] = C, !this._shadeTex) {
      const i3 = new p();
      i3.wrapMode = D.CLAMP_TO_EDGE, i3.width = e2, i3.height = 1, this._shadeTex = new w(o4, i3);
    }
    this._shadeTex.updateData(0, 0, 0, e2, 1, this._texelData);
  }
};
function f2(o4) {
  return `${o4.color};${o4.haloColor};${o4.haloOpacity};${o4.fillOpacity};${o4.haloWidth};${o4.haloBlur}`;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/MultiHighlightGradient.js
var s = class {
  constructor() {
    this.type = "multi", this.gradients = [];
  }
  setHighlightOptions(s2) {
    for (let e4 = 0; e4 < s2.length; e4++) this.gradients[e4] || (this.gradients[e4] = new g2()), this.gradients[e4].setHighlightOptions(s2[e4]);
    for (let t4 = s2.length + 1; t4 < this.gradients.length; t4++) this.gradients[t4].destroy();
    this.gradients.length = s2.length;
  }
  destroy() {
    for (const t4 of this.gradients) t4.destroy();
  }
  getReasonsWithGradients() {
    let t4 = 1;
    const s2 = [];
    for (let e4 = 0; e4 < this.gradients.length; e4++) {
      const i2 = this.gradients[e4];
      s2.push({ activeReasons: t4, activeGradient: i2 }), t4 <<= 1;
    }
    return s2;
  }
};

// node_modules/@arcgis/core/views/2d/layers/support/util.js
var l3 = new o({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch", mesh: "mesh" });
function a6(t4) {
  return l3.toJSON(t4);
}
function p3(t4) {
  const { bandCount: e4, attributeTable: i2, colormap: n4, pixelType: r6 } = t4.raster.rasterInfo;
  return 1 === e4 && (null != i2 || null != n4 || "u8" === r6 || "s8" === r6);
}
function c4(t4, e4) {
  return null == e4 ? (t4 == null ? void 0 : t4.destroy(), null) : ("single" === (t4 == null ? void 0 : t4.type) && Array.isArray(e4) && (t4.destroy(), t4 = null), "multi" !== (t4 == null ? void 0 : t4.type) || Array.isArray(e4) || (t4.destroy(), t4 = null), t4 || (t4 = Array.isArray(e4) ? new s() : new g2()), Array.isArray(e4) ? "multi" === t4.type && t4.setHighlightOptions(e4) : "single" === t4.type && t4.setHighlightOptions(e4), t4);
}
function g3(t4, e4, i2, n4) {
  const { painter: r6, highlightGradient: s2 } = t4, { highlight: l4 } = r6.effects;
  if (!s2) return;
  const a7 = t4.passOptions, h3 = s2.getReasonsWithGradients();
  for (let p4 = 0; p4 < h3.length; p4++) {
    const s3 = { ...t4, passOptions: { type: "highlight", activeGradient: null != n4 ? h3[n4].activeGradient : h3[p4].activeGradient, activeReasons: h3[p4].activeReasons, stepType: "burn", highlightAll: e4 } };
    if (l4.bind(s3), i2(s3), p4 < h3.length - 1) {
      let r7 = 0;
      for (let t5 = p4 + 1; t5 < h3.length; t5++) r7 |= h3[t5].activeReasons;
      i2({ ...t4, passOptions: { type: "highlight", activeGradient: null != n4 ? h3[n4].activeGradient : h3[p4].activeGradient, activeReasons: r7, stepType: "clear", highlightAll: e4 } });
    }
    const a8 = { ...t4, passOptions: { type: "highlight", activeGradient: null != n4 ? h3[n4].activeGradient : h3[p4].activeGradient, activeReasons: h3[p4].activeReasons, stepType: "draw", highlightAll: e4 } };
    r6.setPipelineState(M(t4)), r6.updatePipelineState(t4.context), l4.draw(a8), l4.unbind();
  }
  t4.passOptions = a7;
}
function u4(i2) {
  if (!i2) return [];
  let r6 = i(i2) ? [i2] : V.isCollection(i2) ? i2.toArray() : Array.isArray(i2) ? i2 : [];
  return r6 = r6 == null ? void 0 : r6.filter(G), 0 === ((r6 == null ? void 0 : r6.length) ?? 0) ? [] : r6;
}

// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f32.js
function e3() {
  const e4 = new Float32Array(9);
  return e4[0] = 1, e4[4] = 1, e4[8] = 1, e4;
}
function r5(e4) {
  const r6 = new Float32Array(9);
  return r6[0] = e4[0], r6[1] = e4[1], r6[2] = e4[2], r6[3] = e4[3], r6[4] = e4[4], r6[5] = e4[5], r6[6] = e4[6], r6[7] = e4[7], r6[8] = e4[8], r6;
}
function t3(e4, r6, t4, n4, o4, a7, c5, u5, l4) {
  const f3 = new Float32Array(9);
  return f3[0] = e4, f3[1] = r6, f3[2] = t4, f3[3] = n4, f3[4] = o4, f3[5] = a7, f3[6] = c5, f3[7] = u5, f3[8] = l4, f3;
}
function n3(e4, r6) {
  return new Float32Array(e4, r6, 9);
}
var o3 = Object.freeze(Object.defineProperty({ __proto__: null, clone: r5, create: e3, createView: n3, fromValues: t3 }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  e3 as e,
  r5 as r,
  E2 as E,
  L,
  A,
  R,
  N,
  S,
  c2 as c,
  p2 as p,
  f,
  m2 as m,
  h2 as h,
  y,
  M,
  w2 as w,
  o2 as o,
  t2 as t,
  c3 as c2,
  a6 as a,
  p3 as p2,
  c4 as c3,
  g3 as g,
  u4 as u2
};
//# sourceMappingURL=chunk-RD3QRDRK.js.map
