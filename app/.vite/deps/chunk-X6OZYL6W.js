import {
  f as f5,
  m as m2,
  u as u2
} from "./chunk-UCWGKGC3.js";
import {
  T,
  U
} from "./chunk-JUMO2VIG.js";
import {
  t as t4
} from "./chunk-2UBP7L6V.js";
import {
  f as f4
} from "./chunk-TY5FDDRF.js";
import {
  $,
  B,
  D,
  F,
  M as M2,
  b,
  d as d4,
  g as g5,
  h,
  j as j3,
  p as p4,
  w as w3,
  x,
  y as y2
} from "./chunk-SA7DV5I6.js";
import {
  a as a4,
  f as f3,
  i as i4,
  o as o4,
  s as s6
} from "./chunk-DMO5AKFB.js";
import {
  n as n5
} from "./chunk-GTKHPYCP.js";
import {
  N as N3
} from "./chunk-WHV4I2Y7.js";
import {
  a as a3,
  w as w2
} from "./chunk-H2PMLL3X.js";
import {
  t as t3
} from "./chunk-YINRFSE5.js";
import {
  o as o5
} from "./chunk-G4RTXQCG.js";
import {
  J,
  g as g4,
  o as o3,
  p as p3,
  y
} from "./chunk-UMYFDXOJ.js";
import {
  n as n2
} from "./chunk-5XMOCUPU.js";
import {
  O,
  c,
  e as e2
} from "./chunk-4O2ECRMV.js";
import {
  i as i2,
  n
} from "./chunk-7EIXRVA4.js";
import {
  g as g2,
  v
} from "./chunk-BSRIVWBN.js";
import {
  a as a2,
  n as n3
} from "./chunk-3ATECVKT.js";
import {
  c as c2,
  i as i3
} from "./chunk-JLFV7EBO.js";
import {
  N as N2,
  n as n4,
  s as s5,
  t as t2
} from "./chunk-JLFSX3JT.js";
import {
  C as C3
} from "./chunk-PAGKMWJH.js";
import {
  d as d3,
  j2
} from "./chunk-YUVX6H42.js";
import {
  g as g3
} from "./chunk-RDUV6YP6.js";
import {
  P as P2
} from "./chunk-6P7HXSJ6.js";
import {
  A as A3,
  A2 as A4,
  C as C2,
  N2 as N,
  O2,
  R2,
  _,
  f as f2,
  ie,
  j,
  ne,
  oe,
  p as p2,
  r as r2,
  s as s3,
  s2 as s4,
  w
} from "./chunk-LTDNORB5.js";
import {
  l,
  o as o2
} from "./chunk-PODRVOXS.js";
import {
  A as A2,
  C,
  P,
  d as d2,
  p
} from "./chunk-YSPSOPLL.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  d
} from "./chunk-ACGZOBZ6.js";
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
  M,
  R
} from "./chunk-WCGYJMU3.js";
import {
  A,
  e,
  f2 as f,
  o4 as o,
  s as s2,
  t,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/coordinateFormatter.js
function _2() {
  return r2();
}
function w4() {
  return _();
}
function E(n17, e6) {
  const t6 = [];
  n17 = (n17 = (n17 = n17.replaceAll(/[\u00B0\u00BA]/g, "^")).replaceAll("′", "'")).replaceAll("″", '"');
  const o7 = R3(e6);
  return f2.dmsToGeog(o7, 1, [n17], t6) ? new j2(t6[0][0], t6[0][1], e6 || g3.WGS84) : null;
}
function g6(n17) {
  var _a, _b;
  return n17 && _2() ? o2(n17) ?? ((_a = E(`0° 0' 0" N | ${n17}`)) == null ? void 0 : _a.longitude) ?? ((_b = E(`0 | ${n17}`)) == null ? void 0 : _b.longitude) ?? null : null;
}
function m3(n17) {
  var _a, _b;
  return n17 && _2() ? o2(n17) ?? ((_a = E(`${n17} | 0° 0' 0" E`)) == null ? void 0 : _a.latitude) ?? ((_b = E(`${n17} | 0`)) == null ? void 0 : _b.latitude) ?? null : null;
}
function R3(e6) {
  let t6 = null;
  if (e6 || (e6 = g3.WGS84), e6.wkid) {
    if (t6 = p2.geogcs(e6.wkid), !t6) throw new s("coordinate-formatter:invalid-spatial-reference", "wkid is not valid");
  } else {
    if (!e6.wkt2 && !e6.wkt) throw new s("coordinate-formatter:invalid-spatial-reference", "wkid and wkt are missing");
    if (t6 = p2.fromString(s3.PE_TYPE_GEOGCS, e6.wkt2 || e6.wkt), !t6) throw new s("coordinate-formatter:invalid-spatial-reference", "wkt is not valid");
  }
  return t6;
}

// node_modules/@arcgis/core/views/interactive/tooltip/css.js
var e3 = "esri-tooltip";
var t5 = `${e3}-content`;
var n7 = `${e3}-content--input`;
var _3 = `${e3}-content__header`;
var a5 = `${e3}-content__header__spacer`;
var o6 = `${e3}-content__header__actions`;
var s7 = `${e3}-draw-header-actions`;
var c3 = `${e3}-table`;
var $2 = `${e3}-help-message`;
var r3 = `${e3}-help-message__text`;
var h2 = `${e3}-help-message__icon`;

// node_modules/@arcgis/core/views/interactive/tooltip/components/TooltipField.js
var p5 = `${e3}-field`;
var d5 = { base: p5, inputMode: `${p5}--input`, title: `${p5}__title`, value: `${p5}__value` };
var a6 = class extends O {
  constructor() {
    super(...arguments), this.hidden = false, this.mode = "feedback";
  }
  render() {
    return n("div", { class: this.classes({ [d5.base]: true, [d5.inputMode]: "input" === this.mode }) }, n("div", { class: d5.title, key: "title" }, this.title), n("div", { class: d5.value, key: "value" }, this.value));
  }
};
r([m()], a6.prototype, "hidden", void 0), r([m()], a6.prototype, "mode", void 0), r([m()], a6.prototype, "title", void 0), r([m()], a6.prototype, "value", void 0), a6 = r([a("esri.views.interactive.tooltip.components.TooltipField")], a6);

// node_modules/@arcgis/core/views/interactive/tooltip/components/ValueByValue.js
var p6 = { base: `${e3}-value-by-value` };
var a7 = class extends O {
  constructor() {
    super(...arguments), this.divider = "×";
  }
  render() {
    return n("div", { class: p6.base }, n("span", null, this.left), n("span", null, this.divider), n("span", null, this.right));
  }
};
r([m()], a7.prototype, "left", void 0), r([m()], a7.prototype, "divider", void 0), r([m()], a7.prototype, "right", void 0), a7 = r([a("esri.views.interactive.tooltip.components.ValueByValue")], a7);

// node_modules/@arcgis/core/support/getDefaultUnitForView.js
function e4(e6) {
  var _a, _b;
  const n17 = "metric";
  if (null == e6) return n17;
  const i11 = e6.map, l6 = (i11 && "portalItem" in i11 ? (_a = i11.portalItem) == null ? void 0 : _a.portal : null) ?? C3.getDefault();
  switch (((_b = l6.user) == null ? void 0 : _b.units) ?? l6.units) {
    case n17:
      return n17;
    case "english":
      return "imperial";
  }
  return oe(e6.spatialReference) ?? n17;
}

// node_modules/@arcgis/core/core/quantityFormatUtils.js
function g7(t6, a9, n17, i11 = 2, u4 = "abbr") {
  return g5(t6, s6(a9, n17).value, n17, i11, u4);
}
function L(t6, e6, n17, i11 = 2, u4 = "abbr") {
  return p4(t6, s6(e6, n17).value, n17, i11, u4);
}
function d6(t6, r5, e6 = 2, a9 = "abbr") {
  return D(t6, r5.value, r5.unit, e6, a9);
}
function M3(t6, r5, e6 = 2, a9 = "abbr") {
  return x(t6, r5.value, r5.unit, e6, a9);
}
function w5(t6, r5, e6 = 2, a9 = "abbr") {
  return y2(t6, r5.value, r5.unit, e6, a9);
}
function I(t6, r5, e6 = 2, a9 = "abbr") {
  return F(t6, r5.value, r5.unit, e6, a9);
}
function R4(t6, r5, e6 = 2, a9 = "abbr") {
  return $(t6, r5.value, r5.unit, e6, a9);
}
function y4(t6, r5, e6 = 2, a9 = "abbr") {
  return d4(t6, r5.value, r5.unit, e6, a9);
}
function V(t6, r5, e6 = 2, a9 = "abbr") {
  return h(t6, r5.value, r5.unit, e6, a9);
}
function j4(t6, r5, e6 = 2, a9 = "abbr") {
  return B(t6, r5.value, r5.unit, e6, a9);
}
function D2(t6, r5, e6 = 2, a9 = "abbr") {
  return M2(t6, r5.value, r5.unit, e6, a9);
}
function A5(t6, r5, e6 = 2, a9 = "abbr") {
  return j3(t6, r5.value, r5.unit, e6, a9);
}
function U2(r5, e6, a9, n17 = a2, i11 = true) {
  return w3(r5.value, r5.unit, r5.rotationType, e6, a9, n17, i11);
}
function x2(t6, r5, e6, a9, n17 = "abbr") {
  switch (a9 = a9 ?? 2, e6) {
    case "imperial":
      return y4(t6, r5, a9, n17);
    case "metric":
      return d6(t6, r5, a9, n17);
    default:
      return g7(t6, r5, e6, a9, n17);
  }
}
function C4(t6, r5, e6, a9 = 2, n17 = "abbr") {
  switch (e6) {
    case "imperial":
      return V(t6, r5, a9, n17);
    case "metric":
      return M3(t6, r5, a9, n17);
    default:
      return L(t6, r5, e6, a9, n17);
  }
}
function F2(t6, r5, e6, a9 = 2, n17 = "abbr") {
  switch (e6) {
    case "imperial":
      return j4(t6, r5, a9, n17);
    case "metric":
      return w5(t6, r5, a9, n17);
    default:
      return g7(t6, r5, e6, a9, n17);
  }
}
function S3(t6, r5, e6, a9 = 2, n17 = "abbr") {
  switch (e6) {
    case "imperial":
      return D2(t6, r5, a9, n17);
    case "metric":
      return I(t6, r5, a9, n17);
    default:
      return L(t6, r5, e6, a9, n17);
  }
}
function k(t6, r5, e6, a9 = 2, n17 = "abbr") {
  switch (e6) {
    case "imperial":
      return A5(t6, r5, a9, n17);
    case "metric":
      return R4(t6, r5, a9, n17);
    default:
      return g7(t6, r5, e6, a9, n17);
  }
}

// node_modules/@arcgis/core/views/interactive/tooltip/fields/parsingAndFormattingUtils.js
var v2 = 1;
var y5 = 6;
function D3(t6, l6) {
  return { angleRelative: x3, direction: j5, directionRelative: R5, directionRelativeBilateral: $3, latitudeDecimalDegrees: L2, longitudeDecimalDegrees: F3, area: (e6, r5) => k(t6, e6, r5 ?? l6.area), length: (n17, r5, i11) => x2(t6, n17, r5 ?? l6.length, i11), lengthRelative: (n17, e6) => C4(t6, n17, e6 ?? l6.length), totalLength: (n17, r5) => x2(t6, n17, r5 ?? l6.length), verticalLength: (n17, e6) => F2(t6, n17, e6 ?? l6.verticalLength), verticalLengthRelative: (n17, e6) => S3(t6, n17, e6 ?? l6.verticalLength), percentage: z, scalar: Z2, scale: T2 };
}
function x3(t6) {
  return l(t6, { signDisplay: "exceptZero", ...b2(v2) });
}
function j5(t6) {
  return U2(t6, t6.rotationType, v2);
}
function R5(t6) {
  const n17 = T(t6);
  return l(n17, { style: "unit", unitDisplay: "narrow", unit: "degree", signDisplay: n17 > 0 ? "never" : "exceptZero", ...b2(v2) });
}
function $3(t6) {
  return U2(t6, t6.rotationType, v2);
}
function F3(t6) {
  return U3(t6, N4);
}
function L2(t6) {
  return U3(t6, O3);
}
function w6(t6) {
  return q(t6, N4);
}
function A6(t6) {
  return q(t6, O3);
}
function U3(t6, n17) {
  const e6 = false, r5 = "geographic";
  return U2(s6(t6, "degrees"), r5, y5, n17, e6);
}
function q(t6, n17) {
  const e6 = false, r5 = n17.normalize(s6(t6, "degrees").value, void 0, e6);
  return Z2(i4(r5), y5);
}
function z(t6) {
  return l(t6.value, { style: "percent" });
}
function T2(t6) {
  return l(t6, { style: "percent", maximumFractionDigits: 0 });
}
function Z2(t6, n17) {
  return l(t6.value, b2(n17));
}
function b2(t6) {
  return { minimumFractionDigits: t6, maximumFractionDigits: t6 };
}
function B2({ createQuantity: t6, sanitize: n17 }) {
  return (e6, r5) => {
    if (null == e6) return null;
    n17 && (e6 = n17(e6));
    const i11 = o2(e6);
    return null == i11 ? null : t6(i11, r5);
  };
}
function C5(t6) {
  return t6.replaceAll(/[*^~°º]/g, "");
}
var E2 = (t6) => {
  let n17 = `[-+]?[0-9${t6.thousands}]+`;
  return "" !== t6.decimal && (n17 += `${t6.decimal}[0-9]+`), new RegExp(`^(${n17}\\s*)${t6.separator}(\\s*${n17})$`, "i");
};
var I2 = " ";
var M4 = [];
for (const P5 of [",", "\\|", "\\s+"]) for (const t6 of ["\\.", ",", ""]) for (const n17 of ["", ",", "\\.", I2, "\\s+"]) P5 !== t6 && P5 !== n17 && t6 !== n17 && M4.push({ separator: P5, decimal: t6, thousands: n17, pattern: E2({ decimal: t6, thousands: n17, separator: P5 }) });
function Q(t6) {
  for (const { decimal: n17, thousands: e6, pattern: r5 } of M4) {
    r5.lastIndex = 0;
    const i11 = t6.match(r5);
    if (!i11) continue;
    const o7 = o2(k2(i11[1], n17, e6)), l6 = o2(k2(i11[2], n17, e6));
    if (null != o7 && null != l6) return { x: i4(o7), y: i4(l6) };
  }
  return null;
}
function k2(t6, n17, e6) {
  let r5 = t6.replaceAll(/[\s+]/g, "");
  return "" !== e6 && (r5 = r5.replaceAll(e6, "")), "" !== n17 && (r5 = r5.replaceAll(n17, ".")), r5;
}
function G(t6) {
  if (!t6 || null != o2(t6) || !_2()) return null;
  const n17 = E(t6), e6 = K(n17 == null ? void 0 : n17.latitude), r5 = K(n17 == null ? void 0 : n17.longitude);
  return null != r5 && null != e6 ? { latitude: e6, longitude: r5 } : null;
}
function H(t6) {
  return K(g6(t6));
}
function J2(t6) {
  return K(m3(t6));
}
function K(t6) {
  return null != t6 ? o4(t6, "degrees", "geographic") : null;
}
var N4 = new n3(-180, 180);
var O3 = new n3(-90, 90);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContent.js
var E3 = Symbol("dragHandles");
var S4 = class extends O {
  constructor() {
    super(...arguments), this._focusAbortController = new AbortController(), this._transitionInfo = null, this._mode = "feedback", this._getFormatters = t4(D3), this._onHeaderPointerDown = (t6) => {
      var _a;
      const e6 = t6.target;
      e6 instanceof HTMLElement && "calcite-button" !== ((_a = e6 == null ? void 0 : e6.tagName) == null ? void 0 : _a.toLowerCase()) && (this.removeHandles(E3), e6.setPointerCapture(t6.pointerId), this.tooltip.onDragStart(t6.clientX, t6.clientY), this.addHandles([o(e6, "pointermove", ({ clientX: t7, clientY: e7 }) => {
        this.tooltip.onDrag(t7, e7);
      }), o(e6, ["pointerup", "pointercancel"], (o7) => {
        this.removeHandles(E3), e6.releasePointerCapture(t6.pointerId), this.tooltip.onDragEnd();
      }), o(e6, "touchstart", (t7) => t7.preventDefault())], E3));
    }, this._onDiscard = () => {
      this.destroyed || (this.tooltip.emit("discard"), this.info.clearInputValues(), this.exitInputMode());
    }, this._onCommit = (t6, e6) => {
      if (this.destroyed) return;
      if (this.tooltip.emit("commit", { type: e6 }), "commit-and-exit" === e6) return void this.exitInputMode();
      if ("commit-on-blur" === e6) return;
      const o7 = this._getFocusableElements(), s11 = o7.length, i11 = o7.indexOf(t6);
      if (-1 === i11) return void this.exitInputMode();
      const n17 = ((i11 + ("commit-and-next" === e6 ? 1 : -1)) % s11 + s11) % s11;
      L3(o7.at(n17));
    }, this._onKeyDown = (t6) => {
      switch (t6.code) {
        case f4.next:
          return this._onNextKey(t6);
        case f4.discard:
          return t6.stopPropagation(), this._onDiscard();
      }
    };
  }
  get mode() {
    return this._mode;
  }
  get _displayUnits() {
    const { displayUnits: t6 } = this.info.sketchOptions.values, e6 = e4(this.tooltip.view);
    return { length: t6.length ?? e6, verticalLength: t6.verticalLength ?? e6, area: t6.area ?? e6 };
  }
  get _inputUnitInfos() {
    const t6 = this._messagesUnits, e6 = (e7) => ({ unit: e7, abbreviation: b(t6, e7, "abbr") }), { inputUnits: o7 } = this.info.sketchOptions.values, s11 = e4(this.tooltip.view), i11 = o7.length ?? s11, n17 = o7.verticalLength ?? s11, r5 = o7.area ?? s11;
    return { length: e6(j(i11)), verticalLength: e6(R2(n17)), area: e6(N(r5)), angle: e6("degrees") };
  }
  get _formatters() {
    return this._getFormatters(this._messagesUnits, this._displayUnits);
  }
  get fieldContext() {
    return { formatters: this._formatters, inputUnitInfos: this._inputUnitInfos, messages: this._messagesTooltip, sketchOptions: this.info.sketchOptions, onCommit: this._onCommit, onDiscard: this._onDiscard };
  }
  render() {
    const { visibleElements: t6 } = this.info.sketchOptions.tooltips, e6 = this._renderedContent, o7 = this._renderedActions, s11 = this._renderedHelpMessage, i11 = e6.length > 0, n17 = i11 || !!s11, r5 = "input" === this.mode;
    return n("div", { class: v(t5, r5 && n7), onkeydown: this._onKeyDown, tabIndex: -1 }, r5 && n17 && t6.header ? n("div", { class: _3, "data-testid": "tooltip-header", key: "header", onpointerdown: this._onHeaderPointerDown }, n("calcite-button", { appearance: "transparent", "data-testid": "tooltip-back-button", iconFlipRtl: "both", iconStart: "chevron-left", key: "discard-button", kind: "neutral", onclick: this._onDiscard, scale: "s", tabIndex: -1 }), o7.length > 0 ? n(i2, null, n("div", { class: a5, key: "spacer" }), n("div", { class: o6, key: "actions" }, o7)) : null) : null, i11 ? n("div", { class: c3, key: "content" }, ...e6) : null, s11);
  }
  destroy() {
    var _a;
    this._focusAbortController.abort(), (_a = this._transitionInfo) == null ? void 0 : _a.transition.skipTransition();
  }
  _renderActions() {
    return null;
  }
  loadDependencies() {
    return c({ button: () => import("./calcite-button-JBDKJEJZ.js"), icon: () => import("./calcite-icon-6QWLC3AJ.js"), input: () => import("./calcite-input-LDDQP5AR.js") });
  }
  async enterInputMode(t6, e6) {
    try {
      await this._transitionTo("input", e6), await this._focusField(t6);
    } catch (o7) {
      f(o7);
    }
  }
  async exitInputMode({ focusOnView: t6 = true } = {}) {
    var _a;
    try {
      const { container: e6, info: o7 } = this;
      o7.clearInputValues();
      const s11 = t6 ? (_a = e6 == null ? void 0 : e6.closest(".esri-view")) == null ? void 0 : _a.querySelector(".esri-view-surface") : null;
      await this._transitionTo("feedback"), s11 instanceof HTMLElement && s11.focus();
    } catch (e6) {
      f(e6);
    }
  }
  _onNextKey(t6) {
    const e6 = this._getFocusableElements(), o7 = e6.at(0), s11 = e6.at(-1);
    o7 && s11 && (t6.shiftKey ? document.activeElement === o7 && (t6.preventDefault(), t6.stopPropagation(), L3(s11)) : document.activeElement === s11 && (t6.preventDefault(), t6.stopPropagation(), L3(o7)));
  }
  get _renderedContent() {
    return N5(this._renderContent());
  }
  get _renderedActions() {
    return N5(this._renderActions());
  }
  get _renderedHelpMessage() {
    const { sketchOptions: t6, visibleElements: e6 } = this.info;
    if (!e6.helpMessage) return null;
    const o7 = t6.tooltips.helpMessage ?? this._defaultHelpMessage;
    if (!o7) return null;
    const s11 = t6.tooltips.helpMessageIcon ?? "information";
    return n("div", { class: $2, key: "help-message" }, s11 ? n("calcite-icon", { class: h2, icon: s11, scale: "s" }) : null, n("div", { class: r3 }, o7));
  }
  get _defaultHelpMessage() {
    var _a, _b, _c;
    const { helpMessage: t6, viewType: e6 } = this.info;
    if (null == t6) return null;
    const o7 = "3d" === e6 ? "helpMessages3d" : "helpMessages2d";
    return (_c = (_b = (_a = this._messagesTooltip) == null ? void 0 : _a.sketch) == null ? void 0 : _b[o7]) == null ? void 0 : _c[t6];
  }
  async _focusField(t6) {
    var _a;
    (_a = this._focusAbortController) == null ? void 0 : _a.abort(), this._focusAbortController = new AbortController();
    const { signal: e6 } = this._focusAbortController;
    await this._waitForInputs(), s2(e6);
    const o7 = this._getFocusableInputs(), s11 = t6 ? o7.find((e7) => e7.getAttribute("data-field-name") === t6) : o7.at(0);
    await L3(s11);
  }
  async _transitionTo(t6, o7) {
    var _a, _b, _c;
    if (this._mode === t6 && !this._transitionInfo) return;
    if (((_a = this._transitionInfo) == null ? void 0 : _a.mode) === t6) return this._transitionInfo.transition.finished;
    (_b = this._transitionInfo) == null ? void 0 : _b.transition.skipTransition();
    const s11 = async () => {
      this.destroyed || (this._mode = t6, await M(), this.destroyed || (this.renderNow(), await M(), this.destroyed || (o7 == null ? void 0 : o7())));
    };
    if (!((_c = this.domNode) == null ? void 0 : _c.firstChild) || !document.startViewTransition || o5()) return void await s11();
    this.autoRenderingEnabled = false;
    const i11 = this._transitionInfo = { transition: document.startViewTransition(async () => {
      this.destroyed || i11 !== this._transitionInfo || (this.autoRenderingEnabled = true, await s11());
    }), mode: t6 };
    try {
      await i11.transition.finished;
    } finally {
      i11 === this._transitionInfo && (this._transitionInfo = null);
    }
  }
  async _waitForInputs() {
    const t6 = () => {
      var _a;
      return Array.from(((_a = this.domNode) == null ? void 0 : _a.querySelectorAll("calcite-input")) ?? []);
    };
    for (; 0 === t6().length; ) await A(O4);
    await R();
  }
  _getFocusableInputs() {
    var _a;
    return Array.from(((_a = this.domNode) == null ? void 0 : _a.querySelectorAll("calcite-input:not([read-only]):not([disabled])")) ?? []);
  }
  _getFocusableElements() {
    var _a;
    const t6 = (_a = this.domNode) == null ? void 0 : _a.querySelector(`.${s7}`);
    return [...Array.from((t6 == null ? void 0 : t6.querySelectorAll(`.${o6} calcite-button:not([disabled])`)) ?? []), ...this._getFocusableInputs()];
  }
};
async function L3(t6) {
  await (t6 == null ? void 0 : t6.setFocus());
}
function N5(t6) {
  return (Array.isArray(t6) ? t6 : [t6]).flat(10).filter((t7) => !!t7);
}
r([e2("esri/core/t9n/Units"), m()], S4.prototype, "_messagesUnits", void 0), r([e2("esri/views/interactive/tooltip/t9n/Tooltip"), m()], S4.prototype, "_messagesTooltip", void 0), r([m()], S4.prototype, "info", void 0), r([m()], S4.prototype, "tooltip", void 0), r([m()], S4.prototype, "_mode", void 0), r([m()], S4.prototype, "mode", null), r([m()], S4.prototype, "_displayUnits", null), r([m()], S4.prototype, "_inputUnitInfos", null), r([m()], S4.prototype, "_formatters", null), r([m()], S4.prototype, "fieldContext", null), r([m()], S4.prototype, "_renderedContent", null), r([m()], S4.prototype, "_renderedActions", null), r([m()], S4.prototype, "_renderedHelpMessage", null), r([m()], S4.prototype, "_defaultHelpMessage", null), S4 = r([a("esri.views.interactive.tooltip.content.TooltipContent")], S4);
var O4 = 20;

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawCircle.js
var n8 = class extends S4 {
  _renderContent() {
    const { area: t6, radius: e6, xSize: s11, ySize: n17, visibleElements: a9 } = this.info, p10 = this._messagesTooltip.sketch, m6 = this._formatters;
    return n(i2, null, a9.radius && null != e6 ? n(a6, { title: p10.radius, value: m6.length(e6) }) : null, a9.size && null != s11 && null != n17 ? n(a6, { title: p10.size, value: n(a7, { left: m6.length(s11), right: m6.length(n17) }) }) : null, a9.area ? n(a6, { title: p10.area, value: m6.area(t6) }) : null);
  }
};
n8 = r([a("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")], n8);

// node_modules/@arcgis/core/views/interactive/tooltip/components/TooltipEditableField.js
var p7 = `${e3}-editable-field`;
var d7 = { base: p7, inputMode: `${p7}--input`, feedbackMode: `${p7}--feedback`, readOnly: `${p7}--read-only`, locked: `${p7}--locked`, title: `${p7}__title`, value: `${p7}__value`, valueContent: `${p7}__value__content`, valueContentReadOnly: `${p7}__value__content--read-only`, lockIcon: `${p7}__lock-icon`, input: `${p7}__input`, inputWrapper: `${p7}__input-wrapper`, inputMessage: `${p7}__input-message`, inputSuffix: `${p7}__input-suffix`, button: `${p7}__button` };
var h3 = { lock: "lock", unlock: "unlock" };
var _4 = class extends O {
  constructor() {
    super(...arguments), this._input = null, this._lock = null, this._onLockClick = () => {
      this.field.toggleLock(this.context);
    }, this._onLockAfterCreate = (t6) => {
      this._lock = t6;
    }, this._onLockAfterRemoved = () => {
      this._lock = null;
    }, this._onKeyDown = (t6) => {
      t6.key === f4.discard && "input" === this.mode && this._input && this.context.onDiscard(this._input);
    }, this._onInputKeyDown = (t6) => {
      const e6 = this._input;
      if (e6) switch (t6.key) {
        case f4.commit:
          return this.field.onCommit("commit-and-exit", e6, this.context);
        case f4.next: {
          t6.preventDefault(), t6.stopPropagation();
          const i11 = t6.shiftKey ? "commit-and-previous" : "commit-and-next";
          return this.field.onCommit(i11, e6, this.context);
        }
      }
    }, this._onInput = (t6) => {
      this.field.onInput(t6.currentTarget.value);
    }, this._onInputBlur = (t6) => {
      const e6 = this._input;
      e6 && t6.relatedTarget !== this._lock && this.field.onCommit("commit-on-blur", e6, this.context);
    }, this._selectText = () => {
      const t6 = () => {
        var _a;
        this._input === document.activeElement && ((_a = this._input) == null ? void 0 : _a.selectText());
      };
      t6(), R().then(t6);
    }, this._onAfterCreate = (t6) => {
      this._input = t6, t6.addEventListener("paste", this._onPaste), t6.addEventListener("beforeinput", this._onBeforeInput);
    }, this._onAfterRemoved = (t6) => {
      t6.removeEventListener("paste", this._onPaste), t6.removeEventListener("beforeinput", this._onBeforeInput);
    }, this._onPaste = (t6) => {
      var _a;
      const e6 = (_a = t6.clipboardData) == null ? void 0 : _a.getData("text");
      if (!e6) return;
      null != this.field.parse(e6, this.context) && (t6.stopPropagation(), this.field.onInput(e6));
    }, this._onBeforeInput = (t6) => {
      ("historyUndo" === t6.inputType || "historyRedo" === t6.inputType) && !this.field.dirty && t6.preventDefault();
    };
  }
  initialize() {
    this.addHandles(d2(() => this._rawDisplayValue, () => {
      const { committed: t6, inputValue: e6 } = this.field;
      t6 || e6 || this._input !== document.activeElement || this._selectText();
    }));
  }
  loadDependencies() {
    return c({ button: () => import("./calcite-button-JBDKJEJZ.js"), icon: () => import("./calcite-icon-6QWLC3AJ.js"), input: () => import("./calcite-input-LDDQP5AR.js"), "input-message": () => import("./calcite-input-message-D3TAS3FI.js") });
  }
  render() {
    const { field: t6, mode: e6 } = this, i11 = "input" === e6, { locked: o7, readOnly: n17 } = t6;
    return n("div", { class: this.classes({ [d7.base]: true, [d7.feedbackMode]: "feedback" === e6, [d7.inputMode]: "input" === e6, [d7.locked]: o7, [d7.readOnly]: n17 }) }, n("div", { class: d7.title, key: "title" }, this._title), n("div", { class: d7.value, key: "value", onkeydown: this._onKeyDown }, i11 ? this._renderValueInputMode() : this._renderValueFeedbackMode()));
  }
  get _formattedValue() {
    return this.field.getFormattedValue(this.context) || m4;
  }
  get _rawDisplayValue() {
    return this.field.getRawDisplayValue(this.context);
  }
  get _suffix() {
    return this.field.getSuffix(this.context);
  }
  get _title() {
    const { title: t6 } = this.field;
    return "string" == typeof t6 ? t6 : t6(this.context);
  }
  get _messages() {
    var _a;
    return ((_a = this.context) == null ? void 0 : _a.messages.sketch) ?? {};
  }
  _renderValueFeedbackMode() {
    return n(i2, null, n("div", { class: d7.valueContent, key: "value-feedback" }, this._formattedValue), this.field.locked && "input" !== this.mode ? n("calcite-icon", { class: d7.lockIcon, icon: h3.lock, key: "icon", scale: "s" }) : null);
  }
  _renderValueInputMode() {
    return this.field.readOnly ? this._renderValueReadOnly() : this._renderValueWritable();
  }
  _renderValueReadOnly() {
    return n("div", { class: this.classes(d7.valueContent, d7.valueContentReadOnly), key: "value-read-only" }, this._formattedValue);
  }
  _renderValueWritable() {
    const { field: t6 } = this, e6 = this._messages, { name: i11, invalid: o7 } = t6;
    return n(i2, null, n("div", { class: d7.inputWrapper, key: "value-input" }, n("calcite-input", { afterCreate: this._onAfterCreate, afterRemoved: this._onAfterRemoved, class: d7.input, "data-field-name": i11, "data-testid": `tooltip-field-${i11}`, key: "input", onblur: this._onInputBlur, onfocus: this._selectText, onkeydown: this._onInputKeyDown, scale: "s", status: o7 ? "invalid" : "idle", type: "text", value: this._rawDisplayValue ?? m4, onCalciteInputInput: this._onInput }), o7 ? n("calcite-input-message", { class: d7.inputMessage, scale: "s", status: "invalid" }, e6.invalidValue) : null), n("div", { class: d7.inputSuffix, key: "suffix" }, this._suffix), this._renderedLockButton);
  }
  get _renderedLockButton() {
    const { name: t6, locked: e6, lockable: i11 } = this.field;
    if (!i11) return n("div", { key: "no-lock-button" });
    const o7 = this._messages, n17 = e6 ? o7.unlockConstraint : o7.lockConstraint;
    return n("calcite-button", { afterCreate: this._onLockAfterCreate, afterRemoved: this._onLockAfterRemoved, alignment: "center", appearance: "transparent", class: d7.button, "data-testid": `tooltip-field-${t6}-lock`, iconStart: e6 ? h3.lock : h3.unlock, key: "lock-button", kind: "neutral", label: n17, onclick: this._onLockClick, scale: "s", tabIndex: -1, title: n17 });
  }
};
r([m()], _4.prototype, "field", void 0), r([m()], _4.prototype, "context", void 0), r([m()], _4.prototype, "mode", void 0), r([m()], _4.prototype, "_input", void 0), r([m()], _4.prototype, "_lock", void 0), r([m()], _4.prototype, "_formattedValue", null), r([m()], _4.prototype, "_rawDisplayValue", null), r([m()], _4.prototype, "_suffix", null), r([m()], _4.prototype, "_title", null), r([m()], _4.prototype, "_messages", null), r([m()], _4.prototype, "_renderedLockButton", null), _4 = r([a("esri.views.interactive.tooltip.components.TooltipEditableField")], _4);
var m4 = "—";

// node_modules/@arcgis/core/views/interactive/tooltip/content/Fields.js
function i5(i11) {
  const l6 = i11.fields.filter((t6) => true === (t6 == null ? void 0 : t6.visible));
  return 0 === l6.length ? null : n(i2, null, l6.map((e6) => n(_4, { context: i11.context, field: e6, key: e6.id, mode: i11.mode })));
}

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawMesh.js
var s8 = class extends S4 {
  _renderContent() {
    const { fieldContext: o7, info: t6, mode: i11 } = this, { visibleElements: s11 } = t6;
    return n(i5, { context: o7, fields: [s11.coordinates ? t6.effectiveX : void 0, s11.coordinates ? t6.effectiveY : void 0, s11.elevation ? t6.elevation : void 0, s11.orientation ? t6.orientation : void 0, s11.scale ? t6.scale : void 0], mode: i11 });
  }
};
s8 = r([a("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")], s8);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPoint.js
var i6 = class extends S4 {
  _renderContent() {
    const { fieldContext: o7, info: t6, mode: r5 } = this, { elevation: i11, visibleElements: n17 } = t6;
    return n(i5, { context: o7, fields: [n17.coordinates ? t6.effectiveX : void 0, n17.coordinates ? t6.effectiveY : void 0, n17.elevation ? i11 : void 0], mode: r5 });
  }
};
i6 = r([a("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")], i6);

// node_modules/@arcgis/core/views/interactive/tooltip/components/directionModeIcons.js
var e5 = { absolute: "absolute-direction", relative: "relative-direction" };

// node_modules/@arcgis/core/views/interactive/tooltip/components/DrawHeaderActions.js
var p8 = class extends O {
  constructor(e6) {
    super(e6), this.visibleElements = {};
  }
  render() {
    return n("div", { class: s7 }, this._isElementVisible("direction") ? n(l3, { messages: this.messages, sketchOptions: this.sketchOptions }) : null);
  }
  loadDependencies() {
    return c({ button: () => import("./calcite-button-JBDKJEJZ.js"), dropdown: () => import("./calcite-dropdown-35U4TSJY.js"), "dropdown-item": () => import("./calcite-dropdown-item-WXQWAKMR.js"), "dropdown-group": () => import("./calcite-dropdown-group-EJ4E5U36.js") });
  }
  _isElementVisible(e6) {
    var _a;
    return ((_a = this.visibleElements) == null ? void 0 : _a[e6]) ?? this.sketchOptions.tooltips.visibleElements[e6];
  }
};
function l3(e6) {
  var _a, _b, _c, _d;
  const { directionMode: t6 } = e6.sketchOptions.values, o7 = (_a = e6.messages) == null ? void 0 : _a.sketch, s11 = (_b = o7 == null ? void 0 : o7.directionModeSelect) == null ? void 0 : _b.title, r5 = "absolute", c5 = "relative";
  return n("calcite-dropdown", { key: "direction-mode", placement: "bottom-end", scale: "s", widthScale: "s", onCalciteDropdownSelect: (t7) => {
    var _a2, _b2;
    const o8 = (_b2 = (_a2 = t7.currentTarget.selectedItems) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.getAttribute("data-mode");
    e6.sketchOptions.values.directionMode = o8 ?? "absolute";
  } }, n("calcite-button", { alignment: "end", appearance: "transparent", iconStart: e5[t6], kind: "neutral", label: s11, scale: "s", slot: "trigger", title: s11 }), n("calcite-dropdown-group", { selectionMode: "single" }, n("calcite-dropdown-item", { "data-mode": c5, "data-testid": "tooltip-direction-mode-relative", iconStart: e5.relative, key: "relative", selected: t6 === c5 }, (_c = o7 == null ? void 0 : o7.directionModeSelect) == null ? void 0 : _c.relative), n("calcite-dropdown-item", { "data-mode": r5, "data-testid": "tooltip-direction-mode-absolute", iconStart: e5.absolute, key: "absolute", selected: t6 === r5 }, (_d = o7 == null ? void 0 : o7.directionModeSelect) == null ? void 0 : _d.absolute)));
}
r([e2("esri/views/interactive/tooltip/t9n/Tooltip"), m()], p8.prototype, "messages", void 0), r([m()], p8.prototype, "sketchOptions", void 0), r([m()], p8.prototype, "visibleElements", void 0), p8 = r([a("esri.views.interactive.tooltip.components.DrawHeaderActions")], p8);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPolygon.js
var n9 = class extends S4 {
  _renderContent() {
    const { fieldContext: o7, info: e6, mode: t6 } = this, { xyMode: r5, visibleElements: n17 } = e6;
    return n(i5, { context: o7, fields: [..."direction-distance" === r5 ? [n17.direction ? e6.direction : void 0, n17.distance ? e6.distance : void 0] : [n17.coordinates ? e6.effectiveX : void 0, n17.coordinates ? e6.effectiveY : void 0], n17.elevation ? e6.elevation : void 0, n17.area ? e6.area : void 0], mode: t6 });
  }
  _renderActions() {
    const { xyMode: o7, sketchOptions: e6 } = this.info;
    return n(p8, { sketchOptions: e6, visibleElements: { direction: "direction-distance" === o7 } });
  }
};
n9 = r([a("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")], n9);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPolyline.js
var n10 = class extends S4 {
  _renderContent() {
    const { fieldContext: o7, info: t6, mode: e6 } = this, { xyMode: s11, visibleElements: n17 } = t6;
    return n(i5, { context: o7, fields: [..."direction-distance" === s11 ? [n17.direction ? t6.direction : void 0, n17.distance ? t6.distance : void 0] : [n17.coordinates ? t6.effectiveX : void 0, n17.coordinates ? t6.effectiveY : void 0], n17.elevation ? t6.elevation : void 0, n17.totalLength ? t6.totalLength : void 0], mode: e6 });
  }
  _renderActions() {
    const { xyMode: o7, sketchOptions: t6 } = this.info;
    return n(p8, { sketchOptions: t6, visibleElements: { direction: "direction-distance" === o7 } });
  }
};
n10 = r([a("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")], n10);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawRectangle.js
var n11 = class extends S4 {
  _renderContent() {
    const { area: t6, xSize: e6, ySize: s11, visibleElements: n17 } = this.info, a9 = this._messagesTooltip.sketch, p10 = this._formatters;
    return n(i2, null, n17.size && null != e6 && null != s11 ? n(a6, { title: a9.size, value: n(a7, { left: p10.length(e6), right: p10.length(s11) }) }) : null, n17.area ? n(a6, { title: a9.area, value: p10.area(t6) }) : null);
  }
};
n11 = r([a("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")], n11);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentExtentRotate.js
var n12 = class extends S4 {
  _renderContent() {
    const { angle: t6, visibleElements: o7 } = this.info, s11 = this._messagesTooltip.sketch;
    return n(i2, null, o7.rotation ? n(a6, { title: s11.rotation, value: this._formatters.angleRelative(t6) }) : null);
  }
};
n12 = r([a("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")], n12);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentExtentScale.js
var n13 = class extends S4 {
  _renderContent() {
    const t6 = this.info, { visibleElements: e6 } = t6, r5 = this._messagesTooltip.sketch, n17 = this._formatters;
    return n(i2, null, e6.size ? n(a6, { title: r5.size, value: n(a7, { left: n17.length(t6.xSize), right: n17.length(t6.ySize) }) }) : null, e6.scale ? n(a6, { title: r5.scale, value: n(a7, { left: n17.scale(t6.xScale), right: n17.scale(t6.yScale) }) }) : null);
  }
};
n13 = r([a("esri.views.interactive.tooltip.content.TooltipContentExtentScale")], n13);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentMovePoint.js
var i7 = class extends S4 {
  _renderContent() {
    const { fieldContext: o7, info: t6, mode: r5 } = this, { visibleElements: i11 } = t6;
    return n(i5, { context: o7, fields: [i11.coordinates ? t6.effectiveX : void 0, i11.coordinates ? t6.effectiveY : void 0, i11.elevation ? t6.elevation : void 0], mode: r5 });
  }
};
i7 = r([a("esri.views.interactive.tooltip.content.TooltipContentMovePoint")], i7);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentReshapeEdgeOffset.js
var i8 = class extends S4 {
  _renderContent() {
    const { fieldContext: t6, info: o7, mode: s11 } = this, { visibleElements: i11 } = o7;
    return n(i5, { context: t6, fields: [i11.distance ? o7.distance : void 0, i11.area ? o7.area : void 0, i11.totalLength ? o7.totalLength : void 0], mode: s11 });
  }
};
i8 = r([a("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")], i8);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentSelectedVertex.js
var i9 = class extends S4 {
  _renderContent() {
    const { fieldContext: e6, info: o7, mode: r5 } = this, { visibleElements: i11 } = o7;
    return n(i5, { context: e6, fields: [i11.coordinates ? o7.effectiveX : void 0, i11.coordinates ? o7.effectiveY : void 0, i11.elevation ? o7.elevation : void 0, i11.area && "polygon" === o7.geometryType ? o7.area : null, i11.totalLength && "polyline" === o7.geometryType ? o7.totalLength : null], mode: r5 });
  }
};
i9 = r([a("esri.views.interactive.tooltip.content.TooltipContentSelectedVertex")], i9);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformMesh.js
var s9 = class extends S4 {
  _renderContent() {
    const { fieldContext: o7, info: t6, mode: i11 } = this, { visibleElements: s11 } = t6;
    return n(i5, { context: o7, fields: [s11.coordinates ? t6.effectiveX : void 0, s11.coordinates ? t6.effectiveY : void 0, s11.elevation ? t6.elevation : void 0, s11.orientation ? t6.orientation : void 0, s11.scale ? t6.scale : void 0], mode: i11 });
  }
};
s9 = r([a("esri.views.interactive.tooltip.content.TooltipContentTransformMesh")], s9);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformPoint.js
var s10 = class extends S4 {
  _renderContent() {
    const { fieldContext: o7, info: t6, mode: i11 } = this, { visibleElements: s11 } = t6;
    return n(i5, { context: o7, fields: [s11.coordinates ? t6.effectiveX : void 0, s11.coordinates ? t6.effectiveY : void 0, s11.elevation ? t6.elevation : void 0, s11.orientation ? t6.orientation : void 0, s11.size ? t6.size : void 0], mode: i11 });
  }
};
s10 = r([a("esri.views.interactive.tooltip.content.TooltipContentTransformPoint")], s10);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslate.js
var n14 = class extends S4 {
  _renderContent() {
    const { info: t6 } = this, { visibleElements: o7 } = t6, e6 = this._messagesTooltip.sketch, n17 = this._formatters;
    return n(i2, null, o7.distance ? n(a6, { title: e6.distance, value: n17.length(t6.distance) }) : null);
  }
};
n14 = r([a("esri.views.interactive.tooltip.content.TooltipContentTranslate")], n14);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateVertex.js
var i10 = class extends S4 {
  _renderContent() {
    const { distance: t6, elevation: e6, area: l6, totalLength: i11, visibleElements: n17 } = this.info, a9 = this._messagesTooltip.sketch, c5 = this._formatters;
    return n(i2, null, n17.distance ? n(a6, { title: a9.distance, value: c5.length(t6) }) : null, n17.elevation && null != (e6 == null ? void 0 : e6.actual) ? n(a6, { title: a9.elevation, value: c5.verticalLength(e6.actual) }) : null, n17.area && null != l6 ? n(a6, { title: a9.area, value: c5.area(l6) }) : null, n17.totalLength && null != i11 ? n(a6, { title: a9.totalLength, value: c5.length(i11) }) : null);
  }
};
i10 = r([a("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")], i10);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateXY.js
var n15 = class extends S4 {
  _renderContent() {
    const { info: t6 } = this, { visibleElements: o7 } = t6, e6 = this._messagesTooltip.sketch, n17 = this._formatters;
    return n(i2, null, o7.distance ? n(a6, { title: e6.distance, value: n17.length(t6.distance) }) : null);
  }
};
n15 = r([a("esri.views.interactive.tooltip.content.TooltipContentTranslateXY")], n15);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateZ.js
var n16 = class extends S4 {
  _renderContent() {
    const { info: t6 } = this, { visibleElements: o7 } = t6, e6 = this._messagesTooltip.sketch;
    return n(i2, null, o7.distance ? n(a6, { title: e6.distance, value: this._formatters.verticalLengthRelative(t6.distance) }) : null);
  }
};
n16 = r([a("esri.views.interactive.tooltip.content.TooltipContentTranslateZ")], n16);

// node_modules/@arcgis/core/views/interactive/tooltip/content/tooltipContentFactory.js
function j6(j9, d8) {
  if (null == d8) return null;
  const x6 = document.createElement("div");
  switch (d8.type) {
    case "draw-point":
    case "draw-multipoint":
      return new i6({ tooltip: j9, info: d8, container: x6 });
    case "draw-polygon":
      return new n9({ tooltip: j9, info: d8, container: x6 });
    case "draw-polyline":
      return new n10({ tooltip: j9, info: d8, container: x6 });
    case "draw-mesh":
      return new s8({ tooltip: j9, info: d8, container: x6 });
    case "draw-rectangle":
      return new n11({ tooltip: j9, info: d8, container: x6 });
    case "draw-circle":
      return new n8({ tooltip: j9, info: d8, container: x6 });
    case "extent-rotate":
      return new n12({ tooltip: j9, info: d8, container: x6 });
    case "extent-scale":
      return new n13({ tooltip: j9, info: d8, container: x6 });
    case "move-point":
      return new i7({ tooltip: j9, info: d8, container: x6 });
    case "selected-vertex":
      return new i9({ tooltip: j9, info: d8, container: x6 });
    case "transform-point":
      return new s10({ tooltip: j9, info: d8, container: x6 });
    case "transform-mesh":
      return new s9({ tooltip: j9, info: d8, container: x6 });
    case "translate":
      return new n14({ tooltip: j9, info: d8, container: x6 });
    case "translate-vertex":
      return new i10({ tooltip: j9, info: d8, container: x6 });
    case "translate-z":
      return new n16({ tooltip: j9, info: d8, container: x6 });
    case "translate-xy":
      return new n15({ tooltip: j9, info: d8, container: x6 });
    case "reshape-edge-offset":
      return new i8({ tooltip: j9, info: d8, container: x6 });
  }
}

// node_modules/@arcgis/core/views/interactive/Tooltip.js
var y6 = { base: `${e3}`, ltr: `${e3}--ltr`, rtl: `${e3}--rtl`, debug: `${e3}--debug` };
var g8 = 20;
var _5 = 16;
var C6 = "bottom-end";
var b3 = class extends i.EventedAccessor {
  constructor(t6) {
    super(t6), this.info = null, this.options = null, this.position = null, this.content = null, this._focused = false, this.outerContainer = document.createElement("div"), this.debug = false, this._lastPosition = null, this._rtl = false, this._prevXY = [0, 0];
  }
  initialize() {
    const { outerContainer: t6 } = this;
    this.addHandles([d2(() => {
      var _a;
      return (_a = this.view.overlay) == null ? void 0 : _a.surface;
    }, (e6) => {
      t6.remove(), e6 == null ? void 0 : e6.appendChild(t6), this._rtl = g2(e6);
    }, A2), d2(() => this.info, (e6, o7) => {
      if (null != this.content && null != e6 && null != o7 && e6.type === o7.type) this.content.info = e6;
      else {
        u(this.content);
        const o8 = j6(this, e6);
        o8 ? (this.content = o8, o8.container && t6.appendChild(o8.container), this.exitInputMode()) : this.content = null;
      }
    }, A2), d2(() => ({ container: this.outerContainer, style: this._outerContainerStyle }), ({ container: t7, style: e6 }) => {
      Object.assign(t7.style, e6);
    }, P), d2(() => ({ outerContainer: this.outerContainer, placement: this.effectivePlacement, effectiveOffset: this._effectiveOffset, rtl: this._rtl, debug: this.debug }), ({ outerContainer: t7, placement: e6, effectiveOffset: o7, rtl: n17, debug: i11 }) => {
      const { classList: s11 } = t7;
      s11.add(y6.base), s11.toggle(y6.rtl, n17), s11.toggle(y6.ltr, !n17), s11.toggle(y6.debug, i11), this.outerContainer.style.setProperty("--offset", `${o7}px`), n2(t7), w7(t7, e6);
    }, P), p(() => "feedback" === this.mode, () => {
      this.position = null, this._clearOverride("effectivePlacement");
    }, C), o(this.outerContainer, "paste", (t7) => {
      this.emit("paste", t7);
    }), o(this.outerContainer, ["focusin", "focusout"], () => {
      setTimeout(() => {
        var _a, _b;
        this._focused = ((_b = (_a = this.content) == null ? void 0 : _a.container) == null ? void 0 : _b.contains(document.activeElement)) ?? false;
      });
    })]);
  }
  destroy() {
    this.info = null, this.content = u(this.content), this.outerContainer.remove();
  }
  get mode() {
    var _a;
    return ((_a = this.content) == null ? void 0 : _a.mode) ?? "feedback";
  }
  get focused() {
    return this._focused;
  }
  get visible() {
    return "none" !== this._outerContainerStyle.display;
  }
  get contentContainer() {
    var _a;
    return (_a = this.content) == null ? void 0 : _a.container;
  }
  get effectivePlacement() {
    var _a;
    const t6 = (_a = this.options) == null ? void 0 : _a.placement;
    return "auto" === t6 ? "bottom-end" : t6 ?? C6;
  }
  get _screenPoint() {
    const { inputManager: t6 } = this.view;
    return (t6 == null ? void 0 : t6.multiTouchActive) ? null : t6 == null ? void 0 : t6.latestPointerLocation;
  }
  get _effectiveOffset() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.offset) ?? g8;
  }
  get _outerContainerStyle() {
    const t6 = this.position ?? this._screenPoint;
    if (this._lastPosition = i3(t6), null != t6 && null != this.content) {
      return { display: "block", transform: `translate(${Math.round(t6.x)}px, ${Math.round(t6.y)}px)` };
    }
    return { display: "none", transform: "none" };
  }
  clear() {
    this.info = null;
  }
  async enterInputMode(t6) {
    var _a;
    const e6 = this.position ?? this._lastPosition ?? this._screenPoint, o7 = this.position = i3(e6), { effectivePlacement: n17 } = this;
    this._override("effectivePlacement", n17);
    const i11 = () => {
      o7 && (this.position = j7(this.contentContainer, o7, this._effectiveOffset, this.view), Object.assign(this.outerContainer.style, this._outerContainerStyle));
    };
    await ((_a = this.content) == null ? void 0 : _a.enterInputMode(t6, i11));
  }
  async exitInputMode(t6) {
    var _a;
    await ((_a = this.content) == null ? void 0 : _a.exitInputMode(t6));
  }
  onDragStart(t6, e6) {
    this._prevXY = [t6, e6];
  }
  onDrag(t6, e6) {
    const o7 = t6 - this._prevXY[0], n17 = e6 - this._prevXY[1];
    this._prevXY = [t6, e6];
    const { position: i11 } = this;
    if (i11) {
      const { view: s11 } = this, r5 = t6 - s11.position[0], c5 = e6 - s11.position[1];
      if (r5 < 0 || r5 > s11.width || c5 < 0 || c5 > s11.height - _5) return;
      this.position = c2(i11.x + o7, i11.y + n17);
    }
  }
  onDragEnd() {
    this._prevXY = [0, 0];
  }
};
function j7(t6, e6, o7, n17) {
  if (!t6 || !n17.container) return e6;
  const i11 = t6.getBoundingClientRect(), { left: s11, top: r5 } = n17.container.getBoundingClientRect();
  let { x: c5, y: l6 } = e6;
  const a9 = i11.left - s11 - o7;
  a9 < 0 && (c5 -= a9);
  const u4 = i11.right - s11 + o7 - n17.width;
  u4 > 0 && (c5 -= u4);
  const h4 = i11.top - r5 - o7;
  h4 < 0 && (l6 -= h4);
  const f8 = i11.bottom - r5 + o7 - n17.height;
  return f8 > 0 && (l6 -= f8), c2(c5, l6);
}
r([m({ nonNullable: true })], b3.prototype, "view", void 0), r([m()], b3.prototype, "info", void 0), r([m()], b3.prototype, "options", void 0), r([m()], b3.prototype, "position", void 0), r([m()], b3.prototype, "content", void 0), r([m({ readOnly: true })], b3.prototype, "mode", null), r([m()], b3.prototype, "_focused", void 0), r([m({ readOnly: true })], b3.prototype, "focused", null), r([m({ readOnly: true })], b3.prototype, "outerContainer", void 0), r([m({ readOnly: true })], b3.prototype, "contentContainer", null), r([m({ readOnly: true })], b3.prototype, "effectivePlacement", null), r([m()], b3.prototype, "debug", void 0), r([m()], b3.prototype, "_lastPosition", void 0), r([m()], b3.prototype, "_screenPoint", null), r([m()], b3.prototype, "_rtl", void 0), r([m()], b3.prototype, "_effectiveOffset", null), r([m()], b3.prototype, "_outerContainerStyle", null), b3 = r([a("esri.views.interactive.Tooltip")], b3);
var P3 = ["top", "bottom", "leading", "trailing"].flatMap((t6) => [O5(`${t6}-start`), O5(t6), O5(`${t6}-end`)]);
function O5(t6) {
  return `${y6.base}--${t6}`;
}
function w7({ classList: t6 }, e6) {
  P3.forEach((e7) => t6.remove(e7)), t6.add(O5(e6));
}
var x4 = b3;

// node_modules/@arcgis/core/views/interactive/tooltip/tooltipCommonUtils.js
function R6(t6) {
  const o7 = new x4(t6());
  return o7.addHandles(d2(() => t6(), ({ view: t7, options: e6, info: n17 }) => {
    o7.view = t7, void 0 !== e6 && (o7.options = e6), void 0 !== n17 && (o7.info = n17);
  })), o7;
}
function V2(t6, o7) {
  const e6 = t3(o7.vertexSpace), { scale: n17, orientation: l6 } = t6, { transform: a9 } = o7, s11 = T3(a9);
  e6 && null != s11 ? (l6.actual = o4(s11, "degrees", "arithmetic"), l6.visible = true) : (l6.actual = null, l6.visible = false), e6 ? (n17.actual = i4(H2(a9)), n17.visible = true) : (n17.actual = null, n17.visible = false);
}
function z2(t6, o7, e6) {
  if (!o7 || !t3(o7.vertexSpace)) return;
  const n17 = o7.transform ?? (o7.transform = new N3());
  D4(t6, n17, e6), P4(t6, n17, e6);
}
function D4(t6, o7, e6) {
  const n17 = U(t6.orientation.actual), r5 = q2(o7.rotationAxis);
  if (null == n17 || null == r5) return;
  const i11 = o7.rotationAngle, l6 = n17 * r5, a9 = (n17 - i11) * r5;
  i11 !== l6 && (e6 == null ? void 0 : e6.onRotateStart(0), o7.rotationAngle = l6, e6 == null ? void 0 : e6.onRotate(a9), e6 == null ? void 0 : e6.onRotateStop(a9));
}
function P4(t6, o7, e6) {
  var _a;
  const n17 = (_a = t6.scale.actual) == null ? void 0 : _a.value, r5 = H2(o7);
  if (null == n17 || n17 === r5) return;
  const { scale: i11 } = o7;
  let l6;
  if (0 === r5) l6 = t2(s5);
  else {
    const t7 = n17 / r5;
    l6 = g4(n4(), i11, t7);
  }
  e6 == null ? void 0 : e6.onScaleStart(i11[0], i11[1], i11[2]), o7.scale = l6, e6 == null ? void 0 : e6.onScale(l6[0], l6[1], l6[2]), e6 == null ? void 0 : e6.onScaleStop(l6[0], l6[1], l6[2]);
}
function F4(t6, o7) {
  const { x: e6, y: r5, z: i11 } = o7, { x: l6, y: a9, z: s11 } = I3(t6, o7.spatialReference);
  return { dx: null == l6 || P2(l6, e6) ? 0 : l6 - e6, dy: null == a9 || P2(a9, r5) ? 0 : a9 - r5, dz: null == s11 || null == i11 || P2(s11, i11) ? 0 : s11 - i11 };
}
function I3(t6, o7) {
  var _a, _b;
  let e6, n17;
  t6.geographic ? (e6 = T(t6.longitude.actual), n17 = T(t6.latitude.actual), O2(o7) && (null != e6 && null != n17 ? [e6, n17] = d3(e6, n17, E4) : null != e6 ? e6 = d3(e6, 0, E4)[0] : null != n17 && (n17 = d3(0, n17, E4)[1]))) : (e6 = (_a = t6.x.actual) == null ? void 0 : _a.value, n17 = (_b = t6.y.actual) == null ? void 0 : _b.value);
  const r5 = t6.elevation.actual, i11 = ne(o7);
  return { x: e6, y: n17, z: null != i11 && null != r5 ? f3(r5, i11) : void 0 };
}
var E4 = [0, 0];
function T3(t6) {
  if (!t6) return 0;
  const o7 = q2(t6.rotationAxis);
  return null != o7 ? o7 * t6.rotationAngle : null;
}
function q2(t6) {
  return J(t6, N2) ? 1 : J(t6, B3) ? -1 : null;
}
var B3 = y(n4(), N2);
function H2(t6) {
  return t6 ? Math.max(...t6.scale) : 1;
}
function O6(t6, o7) {
  return !("key-down" !== t6.type || t6.key !== f4.enterInputMode || !o7 || !C7(o7.info)) && (o7.enterInputMode(), t6.preventDefault(), t6.stopPropagation(), true);
}
function C7(t6) {
  const o7 = t6 == null ? void 0 : t6.sketchOptions;
  if (!o7) return false;
  const { inputEnabled: e6, visibleElements: n17 } = o7.tooltips;
  return e6 && true === t6.editableFields.some(({ name: t7 }) => "x" === t7 || "y" === t7 ? n17.coordinates : n17[t7]);
}
function G2(n17, r5) {
  let i11 = null;
  return t([n17.on("paste", async (o7) => {
    i11 == null ? void 0 : i11.abort(), i11 = d(async () => {
      _2() || await w4(), J3(o7, n17.info, r5);
    });
  }), d(() => w4()), e(() => i11 == null ? void 0 : i11.abort())]);
}
function J3(t6, o7, e6) {
  var _a;
  if (!o7 || !("geographic" in o7)) return;
  const n17 = (_a = t6.clipboardData) == null ? void 0 : _a.getData("text");
  if (!n17) return;
  const r5 = (o8) => {
    t6.stopPropagation(), t6.preventDefault(), e6 == null ? void 0 : e6.onBeforePaste(), o8(), e6 == null ? void 0 : e6.onAfterPaste();
  };
  if (o7.geographic) {
    const t7 = G(n17);
    t7 && r5(() => {
      o7.longitude.applyValue(t7.longitude), o7.latitude.applyValue(t7.latitude);
    });
  } else {
    const t7 = Q(n17);
    t7 && r5(() => {
      o7.x.applyValue(t7.x), o7.y.applyValue(t7.y);
    });
  }
}

// node_modules/@arcgis/core/views/support/measurementUtils.js
function l4(l6) {
  return A3(l6) ? C2(l6) || O2(l6) || w(l6) || A4(l6) ? w2 : l6 : a3(l6);
}

// node_modules/@arcgis/core/views/support/euclideanLengthMeasurementUtils.js
var a8;
function f6(t6) {
  return p9(t6, a8.Horizontal);
}
function p9(r5, e6) {
  const { hasZ: i11, spatialReference: l6 } = r5, o7 = l4(l6);
  let c5 = 0;
  const s11 = ie(o7);
  if (null == s11) return null;
  const f8 = e6 === a8.Direct ? x5 : Z3;
  for (const t6 of r5.paths) {
    if (t6.length < 2) continue;
    const n17 = t6.length - 1;
    for (let r6 = 0; r6 < n17; ++r6) {
      const n18 = t6[r6];
      D5[0] = n18[0], D5[1] = n18[1], D5[2] = i11 ? n18[2] : 0;
      const e7 = t6[r6 + 1];
      H3[0] = e7[0], H3[1] = e7[1], H3[2] = i11 ? e7[2] : 0;
      const o8 = f8(D5, H3, l6);
      if (null == o8) return null;
      c5 += o8.value;
    }
  }
  return a4(c5, s11);
}
function z3(t6, n17) {
  const { spatialReference: r5 } = t6;
  return s4(r5, n17.spatialReference) ? (D5[0] = t6.x, D5[1] = t6.y, D5[2] = t6.hasZ ? t6.z : 0, H3[0] = n17.x, H3[1] = n17.y, H3[2] = n17.hasZ ? n17.z : 0, Z3(D5, H3, r5)) : null;
}
function y7(t6, n17) {
  const { spatialReference: r5 } = t6;
  return s4(r5, n17.spatialReference) ? (D5[0] = t6.x, D5[1] = t6.y, D5[2] = t6.hasZ ? t6.z : 0, H3[0] = n17.x, H3[1] = n17.y, H3[2] = n17.hasZ ? n17.z : 0, g9(D5, H3, r5)) : null;
}
function R7(t6) {
  return null != t6 ? j8(t6.hasZ ? t6.z : 0, t6.spatialReference) : null;
}
function j8(n17, e6) {
  const i11 = ne(e6);
  return null != i11 ? a4(n17 ?? 0, i11) : null;
}
function x5(n17, r5, e6) {
  const i11 = V3(n17, r5, e6, a8.Direct);
  return null != i11 ? a4(i11.direct, i11.unit) : null;
}
function Z3(n17, r5, e6) {
  const i11 = V3(n17, r5, e6, a8.Horizontal);
  return null != i11 ? a4(i11.horizontal, i11.unit) : null;
}
function g9(n17, r5, e6) {
  const i11 = V3(n17, r5, e6, a8.Vertical);
  return null != i11 ? a4(i11.verticalSigned, i11.unit) : null;
}
function V3(t6, r5, l6, c5) {
  const s11 = l4(l6), f8 = ie(s11);
  if (null == f8) return null;
  const p10 = r5[2] - t6[2];
  if (c5 === a8.Vertical) return { verticalSigned: p10, unit: f8 };
  if (!n5(t6, l6, U4, s11) || !n5(r5, l6, b4, s11)) return null;
  if (c5 === a8.Direct) {
    return { direct: p3(b4, U4), unit: f8 };
  }
  if (o3(S5, t6[0], t6[1], r5[2]), !n5(S5, l6, S5, s11)) return null;
  const h4 = p3(S5, b4);
  if (c5 === a8.Horizontal) return { horizontal: h4, unit: f8 };
  return { direct: p3(b4, U4), horizontal: h4, vertical: Math.abs(p10), unit: f8 };
}
!function(t6) {
  t6[t6.Direct = 0] = "Direct", t6[t6.Horizontal = 1] = "Horizontal", t6[t6.Vertical = 2] = "Vertical";
}(a8 || (a8 = {}));
var D5 = n4();
var H3 = n4();
var U4 = n4();
var b4 = n4();
var S5 = n4();

// node_modules/@arcgis/core/views/support/automaticLengthMeasurementUtils.js
function c4(e6) {
  return m2(e6) ?? f6(e6);
}
function m5(e6, t6) {
  return f5(e6, t6) ?? z3(e6, t6);
}
function u3(e6, t6, r5) {
  return f7[0] = e6[0], f7[1] = e6[1], f7[2] = 3 === e6.length ? e6[2] : 0, l5[0] = t6[0], l5[1] = t6[1], l5[2] = 3 === t6.length ? t6[2] : 0, u2(f7, l5, r5) ?? Z3(f7, l5, r5);
}
var f7 = n4();
var l5 = n4();

// node_modules/@arcgis/core/views/interactive/tooltip/infos/SketchTooltipInfo.js
var r4 = class extends g {
  constructor(e6) {
    super(e6), this.helpMessage = void 0, this.viewType = void 0;
  }
  get visibleElements() {
    return this.sketchOptions.tooltips.visibleElements;
  }
  get allFields() {
    return [];
  }
  get editableFields() {
    return this.allFields.filter((e6) => e6.visible && !e6.readOnly);
  }
  clearInputValues() {
    this.allFields.forEach((e6) => e6.clearInputValue());
  }
};
r([m()], r4.prototype, "sketchOptions", void 0), r([m()], r4.prototype, "visibleElements", null), r([m()], r4.prototype, "helpMessage", void 0), r([m()], r4.prototype, "viewType", void 0), r([m()], r4.prototype, "allFields", null), r([m()], r4.prototype, "editableFields", null), r4 = r([a("esri.views.interactive.tooltip.infos.SketchTooltipInfo")], r4);

export {
  w4 as w,
  e4 as e,
  U2 as U,
  x2 as x,
  w6 as w2,
  A6 as A,
  B2 as B,
  C5 as C,
  H,
  J2 as J,
  K,
  R6 as R,
  V2 as V,
  z2 as z,
  F4 as F,
  O6 as O,
  G2 as G,
  J3 as J2,
  r4 as r,
  l4 as l,
  y7 as y,
  R7 as R2,
  j8 as j,
  g9 as g,
  c4 as c,
  m5 as m,
  u3 as u
};
//# sourceMappingURL=chunk-X6OZYL6W.js.map
