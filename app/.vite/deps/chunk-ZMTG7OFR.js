import {
  it,
  o as o4,
  r as r7
} from "./chunk-G3BTTC3K.js";
import {
  l as l5
} from "./chunk-IHQU26IU.js";
import {
  E as E4
} from "./chunk-HABQD3Y4.js";
import {
  b as b2
} from "./chunk-ET4BF57A.js";
import {
  t as t3
} from "./chunk-RDFKHZPN.js";
import {
  i as i3
} from "./chunk-KGW5IGJ4.js";
import {
  N
} from "./chunk-NTBYJDIM.js";
import {
  A2 as A
} from "./chunk-EMVGISAT.js";
import {
  H
} from "./chunk-FWGIWKNF.js";
import {
  s as s4
} from "./chunk-IR5AHWR5.js";
import {
  O as O2,
  o as o3,
  t as t2
} from "./chunk-XJ5CGMWY.js";
import {
  n as n5
} from "./chunk-BSNHCIEC.js";
import {
  E as E2,
  T as T2,
  U
} from "./chunk-WAKNRSGF.js";
import {
  e as e4
} from "./chunk-ZAYRG6WM.js";
import {
  O
} from "./chunk-YVJ7MJNT.js";
import {
  g as g2,
  m as m2
} from "./chunk-NVEHOQKI.js";
import {
  T,
  b,
  c as c4,
  d,
  h,
  i as i2,
  l as l4,
  u as u3,
  x
} from "./chunk-WXGA2B5U.js";
import {
  e as e2
} from "./chunk-X5RZJMNW.js";
import {
  e as e3
} from "./chunk-K24WU5UX.js";
import {
  c as c5
} from "./chunk-EWSNAOW6.js";
import {
  C,
  g as g3
} from "./chunk-DH57DJ4C.js";
import {
  E as E3,
  _
} from "./chunk-5AJMZDUM.js";
import {
  F as F2
} from "./chunk-CRKFUUKK.js";
import {
  l as l3,
  t
} from "./chunk-O2L6JAHP.js";
import {
  n as n4,
  s as s3,
  u as u2
} from "./chunk-LH36NQSN.js";
import {
  o as o2,
  r as r6
} from "./chunk-K35H6D4D.js";
import {
  E,
  P,
  c as c3,
  o
} from "./chunk-UMYFDXOJ.js";
import {
  n as n3,
  r as r5
} from "./chunk-MHM4GDCM.js";
import {
  F,
  l as l2,
  p,
  q
} from "./chunk-XEBZUAYT.js";
import {
  c as c2
} from "./chunk-53ZTROGC.js";
import {
  n as n2
} from "./chunk-JLFSX3JT.js";
import {
  r as r4
} from "./chunk-6P7HXSJ6.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  n,
  r2 as r3
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  c2 as c,
  s as s2,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G,
  e,
  l,
  r2
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextHelperCanvas.js
function a2(a6, n8, c8) {
  return a6.canvas || (a6.canvas = document.createElement("canvas")), a6.canvas.width = n8, a6.canvas.height = c8, a6.canvas;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/FontMetrics.js
function e5(e7) {
  const { size: c8 } = e7.definition, a6 = e7.fontString(c8);
  let i5 = n6.get(a6);
  if (!i5) {
    const u6 = a2(o5, 0, 0).getContext("2d");
    e7.setFontProperties(u6, c8);
    const x2 = u6.measureText(r8);
    i5 = new s5(x2.actualBoundingBoxAscent, x2.actualBoundingBoxDescent), n6.set(a6, i5);
  }
  return i5;
}
var n6 = /* @__PURE__ */ new Map();
var s5 = class {
  get maxHeight() {
    return this.maxAscent + this.maxDescent;
  }
  constructor(t5, e7) {
    this.maxAscent = t5, this.maxDescent = e7;
  }
};
var o5 = { canvas: null };
var r8 = (() => {
  let t5 = "";
  for (let e7 = 32; e7 < 127; e7++) t5 += String.fromCharCode(e7);
  return t5;
})();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextRenderer.js
var s6 = 1;
var r9 = class {
  constructor(t5, e7, i5, n8) {
    this.text = t5, this._alignment = e7, this._parameters = i5, this._maxSize = n8, this._textWidths = [], this._lineWidths = [], this._renderPixelRatio = null, this._metricsCached = null, this.key = `${t5}--${this._parameters.key}-${this._alignment}`, this._lines = t5.replaceAll(" ", " ").split(/\r?\n/);
  }
  get displayWidth() {
    return Math.ceil(this._displayWidth + 2 * this._horizontalPadding);
  }
  get displayHeight() {
    let t5 = this._metrics.firstLineAscent;
    for (let e7 = 0; e7 < this._lines.length - 1; e7++) t5 += this._lineSpacing;
    return t5 += this._metrics.lastLineDescent, Math.ceil(t5 + 2 * this._haloSize + 2 * this._verticalPadding);
  }
  get renderedWidth() {
    return this._toRoundedRenderUnit(this.displayWidth);
  }
  get renderedHeight() {
    return this._toRoundedRenderUnit(this.displayHeight);
  }
  get firstRenderedBaselinePosition() {
    return this._toRenderUnit(this._firstLineYOffset + this._metrics.firstLineAscent);
  }
  get _firstLineYOffset() {
    return this._verticalPadding + this._haloSize;
  }
  get _metrics() {
    if (null == this._metricsCached) {
      const t5 = a2(a3, l6, l6).getContext("2d"), e7 = this._parameters.definition.pixelRatio, s8 = this._fontSize * e7;
      this._parameters.setFontProperties(t5, s8);
      let r12 = 2 * this._haloSize;
      const h4 = this._parameters.definition.font;
      "italic" !== h4.style && "oblique" !== h4.style && "bold" !== h4.weight && "bolder" !== h4.weight || (r12 += 0.3 * t5.measureText("A").width), this._textWidths.length = 0, this._lineWidths.length = 0;
      let o7 = 0, d3 = 0, _3 = 0, g4 = 0, m4 = 0;
      this._lines.forEach((i5, n8) => {
        const s9 = t5.measureText(i5), h5 = s9.width / e7, a6 = h5 + r12;
        this._textWidths.push(h5), this._lineWidths.push(a6), o7 = Math.max(o7, a6), g4 = Math.max(g4, s9.actualBoundingBoxAscent / e7), m4 = Math.max(m4, s9.actualBoundingBoxDescent / e7), 0 === n8 && (d3 = s9.actualBoundingBoxAscent / e7), n8 === this._lines.length - 1 && (_3 = s9.actualBoundingBoxDescent / e7);
      });
      const f3 = e5(this._parameters), u6 = Math.max(g4, f3.maxAscent), p2 = Math.max(m4, f3.maxDescent), x2 = d3, R2 = "underline" === this._parameters.definition.font.decoration ? p2 : _3, S2 = o7;
      this._metricsCached = new c6(x2, R2, u6, p2, S2);
    }
    return this._metricsCached;
  }
  get _lineSpacing() {
    return (this._midLineHeight + this._linePadding) * this._parameters.definition.lineSpacingFactor;
  }
  get _midLineHeight() {
    return this._metrics.midLineHeight;
  }
  get _linePadding() {
    return this._midLineHeight * d2;
  }
  get _midLineAscent() {
    return this._metrics.maxLineAscent;
  }
  get _renderedFontSize() {
    return this._toRenderUnit(this._fontSize);
  }
  get _fontSize() {
    return this._parameters.definition.size;
  }
  get _renderedHaloSize() {
    return this._toRenderUnit(this._haloSize);
  }
  get _haloSize() {
    return this._parameters.haloSize;
  }
  get _horizontalPadding() {
    return this._hasBackground ? this._parameters.definition.background.padding[0] : 0;
  }
  get _verticalPadding() {
    return Math.max(this._hasBackground ? this._parameters.definition.background.padding[1] : 0, s6);
  }
  get _hasBackground() {
    return !!this._parameters.backgroundStyle;
  }
  get renderPixelRatio() {
    if (null == this._renderPixelRatio) {
      const t5 = this._parameters.definition.pixelRatio;
      this._renderPixelRatio = Math.min(t5, Math.min(this._maxSize[0] / this.displayWidth, this._maxSize[1] / this.displayHeight));
    }
    return this._renderPixelRatio;
  }
  _getLineXOffset(t5) {
    switch (this._alignment) {
      case o6.Left:
        return this._horizontalPadding;
      case o6.Center:
        return (this.displayWidth - this._lineWidths[t5]) / 2;
      case o6.Right:
        return this.displayWidth - this._horizontalPadding - this._lineWidths[t5];
    }
  }
  render(t5, i5, n8) {
    t5.save();
    const s8 = i5 /= this.renderPixelRatio, r12 = n8 /= this.renderPixelRatio, h4 = this._haloSize, o7 = this._firstLineYOffset + this._metrics.firstLineAscent;
    i5 += h4, n8 += o7;
    const a6 = this._haloSize > 0;
    a6 && this._renderHalo(t5, s8, r12, h4, o7), this._parameters.setFontProperties(t5, this._renderedFontSize);
    for (let e7 = 0; e7 < this._lines.length; ++e7) {
      const s9 = this._lines[e7], r13 = this._getLineXOffset(e7);
      a6 && (t5.globalCompositeOperation = "destination-out", t5.fillStyle = "rgb(0, 0, 0)", this._fillText(t5, s9, i5 + r13, n8), this._renderLineDecoration(t5, i5 + r13, n8, this._textWidths[e7])), t5.globalCompositeOperation = "source-over", t5.fillStyle = this._parameters.textStyle, this._fillText(t5, s9, i5 + this._getLineXOffset(e7), n8), this._renderLineDecoration(t5, i5 + r13, n8, this._textWidths[e7]), n8 += this._lineSpacing;
    }
    if (t2.TEXT_SHOW_BASELINE) {
      t5.strokeStyle = _2, t5.setLineDash([2, 2]), t5.lineWidth = 1;
      let e7 = r12 + o7;
      for (let i6 = 0; i6 < this._lines.length; ++i6) this._drawLine(t5, [s8, e7], [s8 + this.displayWidth, e7]), e7 += this._lineSpacing;
    }
    if (t2.TEXT_SHOW_BORDER && (t5.strokeStyle = _2, t5.setLineDash([]), t5.lineWidth = 1, this._drawBox(t5, [s8, r12], [this.displayWidth, this.displayHeight])), this._hasBackground) {
      const e7 = this._parameters.definition.background.borderRadius * this.renderPixelRatio;
      this._roundedRect(t5, s8, r12, e7), t5.globalCompositeOperation = "destination-over", t5.fillStyle = this._parameters.backgroundStyle, t5.fill();
    }
    t5.restore();
  }
  _renderLineDecoration(t5, e7, i5, n8, s8 = false) {
    if ("none" === this._parameters.definition.font.decoration || 0 === n8) return;
    const r12 = 1, h4 = Math.max(this._parameters.definition.size / 16, r12);
    switch (this._parameters.definition.font.decoration) {
      case "underline":
        i5 += 2 * h4;
        break;
      case "line-through":
        i5 -= 0.33 * this._midLineAscent;
    }
    const o7 = s8 ? this._haloSize : 0;
    t5.strokeStyle = s8 ? this._parameters.haloStyle : this._parameters.textStyle, t5.lineWidth = this._toRenderUnit(h4 + 2 * o7), t5.beginPath(), t5.moveTo(this._toRenderUnit(e7 - o7), this._toRenderUnit(i5)), t5.lineTo(this._toRenderUnit(e7 + n8 + o7), this._toRenderUnit(i5)), t5.stroke();
  }
  _roundedRect(e7, i5, n8, s8) {
    i5 = this._toRenderUnit(i5), n8 = this._toRenderUnit(n8);
    const r12 = this.renderedWidth, h4 = this.renderedHeight;
    0 !== s8 ? (s8 = r4(s8, 0, Math.floor(h4 / 2)), e7.beginPath(), e7.moveTo(i5, n8 + s8), e7.arcTo(i5, n8, i5 + s8, n8, s8), e7.lineTo(i5 + r12 - s8, n8), e7.arcTo(i5 + r12, n8, i5 + r12, n8 + s8, s8), e7.lineTo(i5 + r12, n8 + h4 - s8), e7.arcTo(i5 + r12, n8 + h4, i5 + r12 - s8, n8 + h4, s8), e7.lineTo(i5 + s8, n8 + h4), e7.arcTo(i5, n8 + h4, i5, n8 + h4 - s8, s8), e7.closePath()) : e7.rect(i5, n8, r12, h4);
  }
  _renderHalo(t5, e7, i5, s8, r12) {
    const h4 = this.renderedWidth, o7 = this.renderedHeight, d3 = a2(a3, Math.max(h4, l6), Math.max(o7, l6)), _3 = d3.getContext("2d");
    _3.clearRect(0, 0, h4, o7), this._parameters.setFontProperties(_3, this._renderedFontSize), _3.fillStyle = this._parameters.haloStyle, _3.strokeStyle = this._parameters.haloStyle;
    const c8 = this._renderedHaloSize < 3;
    _3.lineJoin = c8 ? "miter" : "round", c8 ? this._renderHaloEmulated(_3, s8, r12) : this._renderHaloNative(_3, s8, r12);
    let g4 = r12;
    for (let n8 = 0; n8 < this._lines.length; ++n8) {
      const t6 = this._getLineXOffset(n8);
      this._renderLineDecoration(_3, s8 + t6, g4, this._textWidths[n8], true), g4 += this._lineSpacing;
    }
    t5.globalAlpha = this._parameters.definition.halo.color[3], t5.drawImage(d3, 0, 0, h4, o7, this._toRenderUnit(e7), this._toRenderUnit(i5), h4, o7), t5.globalAlpha = 1;
  }
  _renderHaloEmulated(t5, e7, i5) {
    for (let n8 = 0; n8 < this._lines.length; ++n8) {
      const s8 = this._lines[n8], r12 = this._getLineXOffset(n8);
      for (const [n9, o7] of h2) this._fillText(t5, s8, e7 + r12 + this._haloSize * n9, i5 + this._haloSize * o7);
      i5 += this._lineSpacing;
    }
  }
  _renderHaloNative(t5, e7, i5) {
    const n8 = 2 * this._haloSize;
    for (let s8 = 0; s8 < this._lines.length; ++s8) {
      const r12 = this._lines[s8], h4 = this._getLineXOffset(s8), o7 = 5, a6 = 0.1;
      for (let s9 = 0; s9 < o7; s9++) {
        const d3 = 1 - (o7 - 1) * a6 + s9 * a6;
        t5.lineWidth = this._toRenderUnit(d3 * n8), this._strokeText(t5, r12, e7 + h4, i5);
      }
      i5 += this._lineSpacing;
    }
  }
  get _displayWidth() {
    return this._metrics.displayWidth;
  }
  _toRenderUnit(t5) {
    return t5 * this.renderPixelRatio;
  }
  _toRoundedRenderUnit(t5) {
    return Math.round(t5 * this.renderPixelRatio);
  }
  _fillText(t5, e7, i5, n8) {
    t5.fillText(e7, this._toRenderUnit(i5), this._toRenderUnit(n8));
  }
  _strokeText(t5, e7, i5, n8) {
    t5.strokeText(e7, this._toRenderUnit(i5), this._toRenderUnit(n8));
  }
  _drawLine(t5, e7, i5) {
    t5.beginPath(), t5.moveTo(this._toRoundedRenderUnit(e7[0]) + 0.5, this._toRoundedRenderUnit(e7[1]) + 0.5), t5.lineTo(this._toRoundedRenderUnit(i5[0]) + 0.5, this._toRoundedRenderUnit(i5[1]) + 0.5), t5.stroke();
  }
  _drawBox(t5, e7, i5) {
    const n8 = this._toRenderUnit(e7[0]), s8 = this._toRenderUnit(e7[1]), r12 = this._toRenderUnit(i5[0]), h4 = this._toRenderUnit(i5[1]), o7 = Math.floor(n8) + 0.5, a6 = Math.ceil(n8 + r12) - 0.5, d3 = Math.floor(s8) + 0.5, l7 = Math.ceil(s8 + h4) - 0.5;
    t5.beginPath(), t5.moveTo(o7, d3), t5.lineTo(a6, d3), t5.lineTo(a6, l7), t5.lineTo(o7, l7), t5.lineTo(o7, d3), t5.stroke();
  }
};
var h2 = [];
{
  const t5 = 16;
  for (let e7 = 0; e7 < 360; e7 += 360 / t5) h2.push([Math.cos(Math.PI * e7 / 180), Math.sin(Math.PI * e7 / 180)]);
}
var o6;
!function(t5) {
  t5[t5.Left = 0] = "Left", t5[t5.Center = 1] = "Center", t5[t5.Right = 2] = "Right";
}(o6 || (o6 = {}));
var a3 = { canvas: null };
var d2 = 0.2;
var l6 = 512;
var _2 = "rgb(255, 0, 255, 0.5)";
var c6 = class {
  get firstLineHeight() {
    return this.firstLineAscent + this.maxLineDescent;
  }
  get midLineHeight() {
    return this.maxLineAscent + this.maxLineDescent;
  }
  get lastLineHeight() {
    return this.maxLineAscent + this.lastLineDescent;
  }
  constructor(t5, e7, i5, n8, s8) {
    this.firstLineAscent = t5, this.lastLineDescent = e7, this.maxLineAscent = i5, this.maxLineDescent = n8, this.displayWidth = s8;
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/placementUtils.js
var i4 = Object.freeze({ left: 0, center: 0.5, right: 1 });
var s7 = Object.freeze({ "bottom-left": t(0, 0), bottom: t(0.5, 0), "bottom-right": t(1, 0), left: t(0, 0.5), center: t(0.5, 0.5), right: t(1, 0.5), "top-left": t(0, 1), top: t(0.5, 1), "top-right": t(1, 1) });
function f(t5) {
  switch (t5) {
    case "left":
      return o6.Left;
    case "right":
      return o6.Right;
    default:
      return o6.Center;
  }
}
function m3(t5, e7) {
  switch (e7) {
    case "bottom":
      return "left" === t5 ? "bottom-left" : "right" === t5 ? "bottom-right" : "bottom";
    case "center":
      return t5;
    case "top":
      return "left" === t5 ? "top-left" : "right" === t5 ? "top-right" : "top";
  }
}
function u4(t5) {
  return "middle" === t5 ? "center" : t5;
}
function h3(r12, c8) {
  switch (r12) {
    case "top":
      return o2(c8, 0, s6);
    case "bottom":
      return o2(c8, 0, -1);
    default:
      return r6(c8, l3);
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/DepthRange.js
var r10 = class {
  constructor(r12 = 1 / 0, t5 = -1 / 0) {
    this.near = r12, this.far = t5;
  }
  set(r12, t5) {
    this.near = r12, this.far = t5;
  }
  union(r12) {
    null != r12 && (this.near = Math.min(this.near, r12.near), this.far = Math.max(this.far, r12.far));
  }
  within(r12) {
    return this.near <= r12 && r12 <= this.far;
  }
};
r10.zero = new r10(0, 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/BackedBufferObject.js
var r11 = class {
  constructor(r12, i5, s8) {
    this._elementSize = i5, this._buffer = E4.createVertex(r12, F2.STATIC_DRAW), this.resize(s8);
  }
  destroy() {
    this._buffer.dispose();
  }
  get elementSize() {
    return this._elementSize;
  }
  get capacity() {
    return this._capacity;
  }
  get array() {
    return this._array;
  }
  get buffer() {
    return this._buffer;
  }
  get usedMemory() {
    return this._array.byteLength + this._buffer.usedMemory;
  }
  copyRange(e7, t5, r12, i5 = 0) {
    const s8 = new Uint8Array(this.array, e7 * this.elementSize, (t5 - e7) * this.elementSize);
    new Uint8Array(r12.array, i5 * this.elementSize).set(s8);
  }
  transferAll() {
    this._buffer.setData(this._array);
  }
  transferRange(e7, t5) {
    const r12 = e7 * this._elementSize, i5 = t5 * this._elementSize;
    this._buffer.setSubData(new Uint8Array(this._array), r12, r12, i5);
  }
  resize(e7) {
    const t5 = e7 * this._elementSize, r12 = new ArrayBuffer(t5);
    this._array && (e7 >= this._capacity ? new Uint8Array(r12).set(new Uint8Array(this._array)) : new Uint8Array(r12).set(new Uint8Array(this._array).subarray(0, e7 * this._elementSize))), this._array = r12, this._buffer.setSize(t5), this._capacity = e7;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/RenderInstanceData.js
var c7 = class {
  constructor(t5) {
    this.modelOriginHi = t5.getField(e4.INSTANCEMODELORIGINHI, i2), this.modelOriginLo = t5.getField(e4.INSTANCEMODELORIGINLO, i2), this.model = t5.getField(e4.INSTANCEMODEL, l4), this.modelNormal = t5.getField(e4.INSTANCEMODELNORMAL, l4), this.featureAttribute = t5.getField(e4.INSTANCEFEATUREATTRIBUTE, c4), this.color = t5.getField(e4.INSTANCECOLOR, x), this.objectAndLayerIdColor = t5.getField(e4.INSTANCEOBJECTANDLAYERIDCOLOR, x);
  }
};
var f2 = class {
  constructor(t5, i5) {
    this._rctx = t5, this._instanceBufferLayout = i5, this._headIndex = 0, this._tailIndex = 0, this._firstIndex = null, this._captureFirstIndex = true, this._updating = false, this._prevHeadIndex = 0, this._resized = false, this._capacity = 1;
  }
  destroy() {
    this._buffer && this._buffer.destroy();
  }
  get buffer() {
    return this._buffer.buffer;
  }
  get view() {
    return this._view;
  }
  get capacity() {
    return this._capacity;
  }
  get size() {
    const t5 = this._headIndex, i5 = this._tailIndex;
    return t5 >= i5 ? t5 - i5 : t5 + this._capacity - i5;
  }
  get isEmpty() {
    return this._headIndex === this._tailIndex;
  }
  get isFull() {
    return this._tailIndex === (this._headIndex + 1) % this._capacity;
  }
  get headIndex() {
    return this._headIndex;
  }
  get tailIndex() {
    return this._tailIndex;
  }
  get firstIndex() {
    return this._firstIndex;
  }
  get usedMemory() {
    var _a;
    return ((_a = this._buffer) == null ? void 0 : _a.usedMemory) ?? 0;
  }
  reset() {
    this._headIndex = 0, this._tailIndex = 0, this._firstIndex = null;
  }
  startUpdateCycle() {
    this._captureFirstIndex = true;
  }
  beginUpdate() {
    s4(!this._updating, "already updating"), this._updating = true, this._prevHeadIndex = this._headIndex;
  }
  endUpdate() {
    s4(this._updating, "not updating"), this.size < l * this.capacity && this._shrink(), this._resized ? (this._buffer.transferAll(), this._resized = false) : this._transferRange(this._prevHeadIndex, this._headIndex), this._updating = false;
  }
  allocateHead() {
    s4(this._updating, "not updating"), this.isFull && this._grow();
    const t5 = this.headIndex;
    return this._captureFirstIndex && (this._firstIndex = t5, this._captureFirstIndex = false), this._incrementHead(), s4(this._headIndex !== this._tailIndex, "invalid pointers"), t5;
  }
  freeTail() {
    s4(this._updating, "not updating"), s4(this.size > 0, "invalid size");
    const t5 = this._tailIndex === this._firstIndex;
    this._incrementTail(), t5 && (this._firstIndex = this._tailIndex);
  }
  _grow() {
    const t5 = Math.max(u5, Math.floor(this._capacity * e));
    this._resize(t5);
  }
  _shrink() {
    const t5 = Math.max(u5, Math.floor(this._capacity * r2));
    this._resize(t5);
  }
  _resize(t5) {
    if (s4(this._updating, "not updating"), t5 === this._capacity) return;
    const i5 = new r11(this._rctx, this._instanceBufferLayout.stride, t5);
    if (this._buffer) {
      this._firstIndex && (this._firstIndex = (this._firstIndex + this._capacity - this._tailIndex) % this._capacity);
      const t6 = this.size, e7 = this._compactInstances(i5);
      s4(e7 === t6, "invalid compaction"), this._buffer.destroy(), this._tailIndex = 0, this._headIndex = e7, this._prevHeadIndex = 0;
    }
    this._resized = true, this._capacity = t5, this._buffer = i5, this._view = new c7(this._instanceBufferLayout.createView(this._buffer.array));
  }
  _compactInstances(t5) {
    const i5 = this._headIndex, e7 = this._tailIndex;
    return e7 < i5 ? (this._buffer.copyRange(e7, i5, t5), i5 - e7) : e7 > i5 ? (this._buffer.copyRange(e7, this._capacity, t5), i5 > 0 && this._buffer.copyRange(0, i5, t5, this._capacity - e7), i5 + (this._capacity - e7)) : 0;
  }
  _incrementHead(t5 = 1) {
    this._headIndex = (this._headIndex + t5) % this._capacity;
  }
  _incrementTail(t5 = 1) {
    this._tailIndex = (this._tailIndex + t5) % this._capacity;
  }
  _transferRange(t5, i5) {
    t5 < i5 ? this._buffer.transferRange(t5, i5) : t5 > i5 && (i5 > 0 && this._buffer.transferRange(0, i5), this._buffer.transferRange(t5, this._capacity));
  }
};
var u5 = 64;

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/InstanceData.js
var S;
function C2(t5) {
  let e7 = H().mat4f64(e4.LOCALTRANSFORM).mat4f64(e4.GLOBALTRANSFORM).vec4f64(e4.BOUNDINGSPHERE).vec3f64(e4.MODELORIGIN).mat3f(e4.INSTANCEMODEL).mat3f(e4.INSTANCEMODELNORMAL).vec2f(e4.MODELSCALEFACTORS);
  return t5.includes(e4.FEATUREATTRIBUTE) && (e7 = e7.vec4f(e4.FEATUREATTRIBUTE)), t5.includes(e4.COLOR) && (e7 = e7.vec4u8(e4.COLOR)), t5.includes(e4.OBJECTANDLAYERIDCOLOR) && (e7 = e7.vec4u8(e4.OBJECTANDLAYERIDCOLOR)), e7 = e7.u8(e4.STATE).u8(e4.LODLEVEL), e7;
}
!function(t5) {
  t5[t5.ALLOCATED = 1] = "ALLOCATED", t5[t5.DEFAULT_ACTIVE = 2] = "DEFAULT_ACTIVE", t5[t5.VISIBLE = 4] = "VISIBLE", t5[t5.HIGHLIGHT = 8] = "HIGHLIGHT", t5[t5.HIGHLIGHT_ACTIVE = 16] = "HIGHLIGHT_ACTIVE", t5[t5.REMOVE = 32] = "REMOVE", t5[t5.TRANSFORM_CHANGED = 64] = "TRANSFORM_CHANGED", t5[t5.ACTIVE = 18] = "ACTIVE";
}(S || (S = {}));
var R = class {
  constructor(t5) {
    this.localTransform = t5.getField(e4.LOCALTRANSFORM, b), this.globalTransform = t5.getField(e4.GLOBALTRANSFORM, b), this.modelOrigin = t5.getField(e4.MODELORIGIN, T), this.model = t5.getField(e4.INSTANCEMODEL, l4), this.modelNormal = t5.getField(e4.INSTANCEMODELNORMAL, l4), this.modelScaleFactors = t5.getField(e4.MODELSCALEFACTORS, u3), this.boundingSphere = t5.getField(e4.BOUNDINGSPHERE, h), this.featureAttribute = t5.getField(e4.FEATUREATTRIBUTE, c4), this.color = t5.getField(e4.COLOR, x), this.objectAndLayerIdColor = t5.getField(e4.OBJECTANDLAYERIDCOLOR, x), this.state = t5.getField(e4.STATE, d), this.lodLevel = t5.getField(e4.LODLEVEL, d);
  }
};
var b3 = class extends g {
  constructor(t5, e7) {
    super(t5), this.events = new i(), this._capacity = 0, this._size = 0, this._next = 0, this._highlightOptionsMap = /* @__PURE__ */ new Map(), this._highlightOptionsMapPrev = /* @__PURE__ */ new Map(), this._layout = C2(e7), this._capacity = u5, this._buffer = this._layout.createBuffer(this._capacity), this._view = new R(this._buffer);
  }
  get capacity() {
    return this._capacity;
  }
  get size() {
    return this._size;
  }
  get view() {
    return this._view;
  }
  addInstance() {
    this._size + 1 > this._capacity && this._grow();
    const t5 = this._findSlot();
    return this._view.state.set(t5, S.ALLOCATED), this._size++, this.events.emit("instances-changed"), t5;
  }
  removeInstance(t5) {
    const e7 = this._view.state;
    s4(t5 >= 0 && t5 < this._capacity && !!(e7.get(t5) & S.ALLOCATED), "invalid instance handle"), this._getStateFlag(t5, S.ACTIVE) ? this._setStateFlags(t5, S.REMOVE) : this.freeInstance(t5), this.events.emit("instances-changed");
  }
  freeInstance(t5) {
    const e7 = this._view.state;
    s4(t5 >= 0 && t5 < this._capacity && !!(e7.get(t5) & S.ALLOCATED), "invalid instance handle"), e7.set(t5, 0), this._size--;
  }
  setLocalTransform(t5, e7, s8 = true) {
    this._view.localTransform.setMat(t5, e7), s8 && this.updateModelTransform(t5);
  }
  getLocalTransform(t5, e7) {
    this._view.localTransform.getMat(t5, e7);
  }
  setGlobalTransform(t5, e7, s8 = true) {
    this._view.globalTransform.setMat(t5, e7), s8 && this.updateModelTransform(t5);
  }
  getGlobalTransform(t5, e7) {
    this._view.globalTransform.getMat(t5, e7);
  }
  updateModelTransform(t5) {
    const e7 = this._view, s8 = y, i5 = N2;
    e7.localTransform.getMat(t5, D), e7.globalTransform.getMat(t5, H2);
    const a6 = c2(H2, H2, D);
    o(s8, a6[12], a6[13], a6[14]), e7.modelOrigin.setVec(t5, s8), n4(i5, a6), e7.model.setMat(t5, i5);
    const r12 = g2(y, a6);
    r12.sort(), e7.modelScaleFactors.set(t5, 0, r12[1]), e7.modelScaleFactors.set(t5, 1, r12[2]), s3(i5, i5), u2(i5, i5), e7.modelNormal.setMat(t5, i5), this._setStateFlags(t5, S.TRANSFORM_CHANGED), this.events.emit("instance-transform-changed", { index: t5 });
  }
  getModelTransform(t5, e7) {
    const s8 = this._view;
    s8.model.getMat(t5, N2), s8.modelOrigin.getVec(t5, y), e7[0] = N2[0], e7[1] = N2[1], e7[2] = N2[2], e7[3] = 0, e7[4] = N2[3], e7[5] = N2[4], e7[6] = N2[5], e7[7] = 0, e7[8] = N2[6], e7[9] = N2[7], e7[10] = N2[8], e7[11] = 0, e7[12] = y[0], e7[13] = y[1], e7[14] = y[2], e7[15] = 1;
  }
  applyShaderTransformation(t5, e7) {
    null != this.shaderTransformation && this.shaderTransformation.applyTransform(this, t5, e7);
  }
  getCombinedModelTransform(t5, e7) {
    return this.getModelTransform(t5, e7), null != this.shaderTransformation && this.shaderTransformation.applyTransform(this, t5, e7), e7;
  }
  getCombinedLocalTransform(t5, e7) {
    this._view.localTransform.getMat(t5, e7), null != this.shaderTransformation && this.shaderTransformation.applyTransform(this, t5, e7);
  }
  getCombinedMaxScaleFactor(t5) {
    let e7 = this._view.modelScaleFactors.get(t5, 1);
    return null != this.shaderTransformation && (this.shaderTransformation.scaleFactor(y, this, t5), e7 *= Math.max(y[0], y[1], y[2])), e7;
  }
  getCombinedMedianScaleFactor(t5) {
    let e7 = this._view.modelScaleFactors.get(t5, 0);
    return null != this.shaderTransformation && (this.shaderTransformation.scaleFactor(y, this, t5), e7 *= w(y[0], y[1], y[2])), e7;
  }
  getModel(t5, e7) {
    this._view.model.getMat(t5, e7);
  }
  setFeatureAttribute(t5, e7) {
    this._view.featureAttribute.setVec(t5, e7);
  }
  getFeatureAttribute(t5, e7) {
    this._view.featureAttribute.getVec(t5, e7);
  }
  setColor(t5, e7) {
    this._view.color.setVec(t5, e7);
  }
  setObjectAndLayerIdColor(t5, e7) {
    this._view.objectAndLayerIdColor.setVec(t5, e7);
  }
  setVisible(t5, e7) {
    e7 !== this.getVisible(t5) && (this._setStateFlag(t5, S.VISIBLE, e7), this.events.emit("instance-visibility-changed", { index: t5 }));
  }
  getVisible(t5) {
    return this._getStateFlag(t5, S.VISIBLE);
  }
  setHighlight(t5, e7) {
    const { _highlightOptionsMap: s8 } = this, i5 = s8.get(t5);
    e7 ? e7 !== i5 && (s8.set(t5, e7), this._setStateFlag(t5, S.HIGHLIGHT, true), this.events.emit("instance-highlight-changed")) : i5 && (s8.delete(t5), this._setStateFlag(t5, S.HIGHLIGHT, false), this.events.emit("instance-highlight-changed"));
  }
  get highlightOptionsMap() {
    return this._highlightOptionsMap;
  }
  getHighlightStateFlag(t5) {
    return this._getStateFlag(t5, S.HIGHLIGHT);
  }
  geHighlightOptionsPrev(t5) {
    const e7 = this._highlightOptionsMapPrev.get(t5) ?? null;
    return this._highlightOptionsMapPrev.delete(t5), e7;
  }
  getHighlightName(t5) {
    const e7 = this.highlightOptionsMap.get(t5) ?? null;
    return e7 ? this._highlightOptionsMapPrev.set(t5, e7) : this._highlightOptionsMapPrev.delete(t5), e7;
  }
  getState(t5) {
    return this._view.state.get(t5);
  }
  getLodLevel(t5) {
    return this._view.lodLevel.get(t5);
  }
  countFlags(t5) {
    let e7 = 0;
    for (let s8 = 0; s8 < this._capacity; ++s8) {
      this.getState(s8) & t5 && ++e7;
    }
    return e7;
  }
  _setStateFlags(t5, e7) {
    const s8 = this._view.state;
    e7 = s8.get(t5) | e7, s8.set(t5, e7);
  }
  _clearStateFlags(t5, e7) {
    const s8 = this._view.state;
    e7 = s8.get(t5) & ~e7, s8.set(t5, e7);
  }
  _setStateFlag(t5, e7, s8) {
    s8 ? this._setStateFlags(t5, e7) : this._clearStateFlags(t5, e7);
  }
  _getStateFlag(t5, e7) {
    return !!(this._view.state.get(t5) & e7);
  }
  _grow() {
    this._capacity = Math.max(u5, Math.floor(this._capacity * e)), this._buffer = this._layout.createBuffer(this._capacity).copyFrom(this._buffer), this._view = new R(this._buffer);
  }
  _findSlot() {
    const t5 = this._view.state;
    let e7 = this._next;
    for (; t5.get(e7) & S.ALLOCATED; ) e7 = e7 + 1 === this._capacity ? 0 : e7 + 1;
    return this._next = e7 + 1 === this._capacity ? 0 : e7 + 1, e7;
  }
};
function w(t5, e7, s8) {
  return Math.max(Math.min(t5, e7), Math.min(Math.max(t5, e7), s8));
}
r([m({ constructOnly: true })], b3.prototype, "shaderTransformation", void 0), r([m()], b3.prototype, "_size", void 0), r([m({ readOnly: true })], b3.prototype, "size", null), b3 = r([a("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")], b3);
var y = n2();
var N2 = e3();
var D = e2();
var H2 = e2();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/InstanceOctree.js
var n7 = class extends b2 {
  constructor(e7, r12) {
    super((t5) => T2(this._instanceData.view.boundingSphere.getVec(t5, this._tmpSphere)), { maximumDepth: 25 }), this._instanceData = e7, this._boundingSphere = r12, this._tmpSphere = E2(), this._tmpMat4 = e2();
  }
  addInstance(t5) {
    const s8 = this._instanceData.view.boundingSphere, i5 = this._instanceData.getCombinedModelTransform(t5, this._tmpMat4);
    E(U(this._tmpSphere), this._boundingSphere.center, i5), this._tmpSphere[3] = this._boundingSphere.radius * m2(i5), s8.setVec(t5, this._tmpSphere), this.add([t5]);
  }
  removeInstance(t5) {
    this.remove([t5]);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LevelSelector.js
var e6 = class {
  constructor(e7, i5) {
    this._worldSpaceRadius = e7, this._minScreenSpaceRadii = i5;
  }
  selectLevel(e7, i5, t5) {
    const c8 = t5.computeScreenPixelSizeAt(e7), r12 = this._worldSpaceRadius * i5 / c8;
    let s8 = 0;
    for (let a6 = 1; a6 < this._minScreenSpaceRadii.length; ++a6) r12 >= this._minScreenSpaceRadii[a6] && (s8 = a6);
    return s8;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterials.js
var t4 = class {
  constructor(s8, t5) {
    this._material = s8, this._repository = t5, this._map = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._map.forEach((s8, t5) => {
      null != s8 && this._repository.release(this._material, t5);
    });
  }
  load(t5, e7, r12) {
    const i5 = this._material.produces.get(e7);
    if (!(i5 == null ? void 0 : i5(r12))) return null;
    this._map.has(r12) || this._map.set(r12, this._repository.acquire(this._material, e7, r12));
    const a6 = this._map.get(r12);
    if (null != a6) {
      if (a6.ensureResources(t5) === O.LOADED) return a6;
      this._repository.requestRender();
    }
    return null;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodComponentData.js
var a4 = class {
  constructor(a6, n8) {
    const m4 = a6.renderContext.rctx, u6 = n8.geometry, f3 = n8.geometry.getRenderGeometry(), g4 = f3.material;
    this._materials = a6.materials, g4.setParameters({ instancedDoublePrecision: true }), this.geometry = u6, this.material = g4, this.glMaterials = new t4(g4, this._materials), this.vertexBufferLayout = f3.vertexBufferLayout, this.vbo = E4.createVertex(m4, F2.STATIC_DRAW, f3.buffer), this.vao = new r7(m4, O2, /* @__PURE__ */ new Map([["geometry", t3(f3.vertexBufferLayout)]]), /* @__PURE__ */ new Map([["geometry", this.vbo]])), this.vertexCount = f3.elementCount;
  }
  destroy() {
    this.glMaterials.dispose(), this.vbo.dispose(), this.vao.dispose();
  }
  get boundingInfo() {
    return this.geometry.boundingInfo;
  }
  get triangleCount() {
    return this.vertexCount / 3;
  }
  get usedMemory() {
    return 128 + this.vbo.usedMemory + this.vao.usedMemory;
  }
  intersect(e7, t5, r12, o7, s8, i5, a6, n8) {
    return this.geometry.intersect(e7, t5, r12, o7, s8, i5, a6, n8);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodLevel.js
var a5 = class _a {
  static async create(e7, r12, i5) {
    const s8 = await Promise.allSettled(r12.components.map((o7) => e7.controller.schedule(() => new a4(e7, o7), i5))), c8 = s8.map((o7) => "fulfilled" === o7.status ? o7.value : null).filter(G);
    if (c(i5) || c8.length !== s8.length) {
      c8.forEach((o7) => o7.destroy()), s2(i5);
      for (const o7 of s8) if ("rejected" === o7.status) throw o7.reason;
    }
    return new _a(r12.minScreenSpaceRadius, c8);
  }
  constructor(o7, n8) {
    this.minScreenSpaceRadius = o7, this.components = n8;
  }
  destroy() {
    this.components.forEach((o7) => o7.destroy());
  }
  intersect(o7, n8, t5, e7, r12, i5, s8) {
    this.components.forEach((c8) => c8.intersect(o7, n8, t5, e7, r12, i5, this.boundingSphere, s8));
  }
  get boundingBox() {
    if (null == this._boundingBox) {
      const o7 = q();
      this.components.forEach((n8) => {
        null != n8.boundingInfo && (l2(o7, n8.boundingInfo.bbMin), l2(o7, n8.boundingInfo.bbMax));
      }), this._boundingBox = o7;
    }
    return this._boundingBox;
  }
  get boundingSphere() {
    if (null == this._boundingSphere) {
      const o7 = this.boundingBox, n8 = n2();
      p(o7, n8), this._boundingSphere = { center: n8, radius: 0.5 * F(o7) };
    }
    return this._boundingSphere;
  }
  get triangleCount() {
    return this.components.reduce((o7, n8) => o7 + n8.triangleCount, 0);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodRenderer.js
var z = (e7) => {
  const t5 = e7.baseBoundingSphere.radius, r12 = e7.levels.map((e8) => e8.minScreenSpaceRadius);
  return new e6(t5, r12);
};
var k = class extends o4 {
  constructor(e7, t5) {
    super(e7), this.type = i3.LOD, this.isGround = false, this._levels = [], this._defaultRenderInstanceData = new Array(), this._highlightRenderInstanceDataMap = /* @__PURE__ */ new Map(), this._instanceIndex = 0, this._cycleStartIndex = 0, this._slicePlane = false, this._camera = new it(), this._updateCyclesWithStaticCamera = -1, this._needFullCycle = false, this.produces = /* @__PURE__ */ new Map([[A.OPAQUE_MATERIAL, (e8) => this._produces(e8)], [A.TRANSPARENT_MATERIAL, (e8) => !!this._hasTransparentLevels() && this._produces(e8)]]), this._instanceData = new b3({ shaderTransformation: e7.shaderTransformation }, e7.optionalFields), this.addHandles(t5.registerTask(g3.LOD_RENDERER, this));
  }
  initialize() {
    this._instanceBufferLayout = Y(this.optionalFields), this._glInstanceBufferLayout = t3(this._instanceBufferLayout, 1), this.addHandles([this._instanceData.events.on("instances-changed", () => this._requestUpdateCycle()), this._instanceData.events.on("instance-transform-changed", ({ index: e7 }) => {
      this._requestUpdateCycle(), this.metadata.notifyGraphicGeometryChanged(e7);
    }), this._instanceData.events.on("instance-visibility-changed", ({ index: e7 }) => {
      this._requestUpdateCycle(true), this.metadata.notifyGraphicVisibilityChanged(e7);
    }), this._instanceData.events.on("instance-highlight-changed", () => this._requestUpdateCycle(true))]);
  }
  get _allRenderInstanceData() {
    const e7 = [this._defaultRenderInstanceData];
    for (const t5 of this._highlightRenderInstanceDataMap) e7.push(t5[1]);
    return e7;
  }
  get _allRenderInstanceDataExceptHighlightShadow() {
    const e7 = [this._defaultRenderInstanceData];
    for (const t5 of this._highlightRenderInstanceDataMap) t5[0] !== c5 && e7.push(t5[1]);
    return e7;
  }
  hasHighlightOptions(e7) {
    return this._highlightRenderInstanceDataMap.has(e7);
  }
  get _enableLevelSelection() {
    return this.symbol.levels.length > 1;
  }
  get levels() {
    return this._levels;
  }
  get baseBoundingBox() {
    return this._levels[this._levels.length - 1].boundingBox;
  }
  get baseBoundingSphere() {
    return this._levels[this._levels.length - 1].boundingSphere;
  }
  get baseMaterial() {
    return this._levels[this._levels.length - 1].components[0].material;
  }
  get slicePlaneEnabled() {
    return this._slicePlane;
  }
  set slicePlaneEnabled(e7) {
    this._slicePlane = e7;
  }
  get layerUid() {
    return this.metadata.layerUid;
  }
  get instanceData() {
    return this._instanceData;
  }
  get hasEmissions() {
    return this._levels.some((e7) => e7.components.some((e8) => e8.material.hasEmissions));
  }
  get usedMemory() {
    return this._allRenderInstanceData.reduce((e7, t5) => t5.reduce((e8, t6) => e8 + t6.usedMemory, e7), this._levels.reduce((e7, t5) => e7 + t5.components.reduce((e8, t6) => e8 + t6.usedMemory, 0), 0));
  }
  get renderStats() {
    const e7 = this._instanceData.size, t5 = [];
    return this._levels.forEach((e8, r12) => {
      const n8 = this._allRenderInstanceData[0][r12].size + this._allRenderInstanceData[1][r12].size, s8 = e8.triangleCount;
      t5.push({ renderedInstances: n8, renderedTriangles: n8 * s8, trianglesPerInstance: s8 });
    }), { totalInstances: e7, renderedInstances: t5.reduce((e8, t6) => e8 + t6.renderedInstances, 0), renderedTriangles: t5.reduce((e8, t6) => e8 + t6.renderedTriangles, 0), levels: t5 };
  }
  _createRenderInstanceDataArray(e7 = []) {
    const { rctx: t5 } = this._context.renderContext;
    return this.symbol.levels.map((r12) => {
      e7.push(new f2(t5, this._instanceBufferLayout));
    }), e7;
  }
  async initializeRenderContext(e7, r12) {
    this._context = e7, this._createRenderInstanceDataArray(this._defaultRenderInstanceData);
    const n8 = await Promise.allSettled(this.symbol.levels.map((t5) => a5.create(e7, t5, r12))), s8 = n8.map((e8) => "fulfilled" === e8.status ? e8.value : null).filter(G);
    if (c(r12) || s8.length !== n8.length) {
      s8.forEach((e8) => e8.destroy()), s2(r12);
      for (const e8 of n8) if ("rejected" === e8.status) throw e8.reason;
    }
    this._levels = s8, this._levelSelector = z(this);
  }
  uninitializeRenderContext() {
    this._invalidateOctree(), this._levels.forEach((e7) => e7.destroy()), this._defaultRenderInstanceData.forEach((e7) => e7.destroy()), this._highlightRenderInstanceDataMap.forEach((e7) => e7.forEach((e8) => e8.destroy()));
  }
  _hasTransparentLevels() {
    return this._levels.some((e7) => e7.components.some((e8) => {
      const t5 = e8.material.produces.get(A.TRANSPARENT_MATERIAL);
      return t5 == null ? void 0 : t5(n5.Color);
    }));
  }
  hasHighlights() {
    return n(this._highlightRenderInstanceDataMap, (e7) => e7.some((e8) => e8.size > 0));
  }
  _produces(e7) {
    return (e7 !== n5.Highlight || this.hasHighlights()) && (e7 !== n5.ShadowHighlight || this.hasHighlightOptions(c5));
  }
  prepareRender(e7) {
    if (!t2.LOD_INSTANCE_RENDERER_DISABLE_UPDATES) {
      if (this._enableLevelSelection) {
        const t5 = e7.bind.contentCamera.equals(this._camera);
        this._camera.copyFrom(e7.bind.contentCamera), t5 || this._requestUpdateCycle();
      }
      this._needFullCycle && (this.runTask(C), this._needFullCycle = false);
    }
  }
  acquireTechniques(e7) {
    if (!this.baseMaterial.visible || !this.baseMaterial.isVisibleForOutput(e7.output)) return null;
    const t5 = this._getInstanceDatas(e7);
    if (!t5) return null;
    const r12 = new Array(), n8 = this.levels;
    return t5.forEach((t6) => n8.forEach(({ components: n9 }, s8) => n9.forEach((n10) => r12.push(this._beginComponent(e7, t6[s8], n10))))), r12;
  }
  render(e7, t5) {
    const r12 = this._getInstanceDatas(e7);
    if (!r12 || null == t5) return;
    let n8 = 0;
    e7.rctx.bindVAO();
    const s8 = this.levels;
    r12.forEach((r13) => s8.forEach(({ components: s9 }, a6) => s9.forEach((s10) => this._renderComponent(e7, t5[n8++], r13[a6], s10, a6))));
  }
  _getInstanceDatas(e7) {
    var _a;
    const { output: t5, bind: r12 } = e7, n8 = t5 === n5.Highlight, s8 = t5 === n5.ShadowHighlight, a6 = !n8 && !s8, i5 = t5 !== n5.ShadowExcludeHighlight;
    if (a6) return i5 ? this._allRenderInstanceData : this._allRenderInstanceDataExceptHighlightShadow;
    if (i5) {
      if (n8) {
        const e9 = (_a = r12.highlight) == null ? void 0 : _a.name;
        if (!e9) return null;
        const t6 = this._highlightRenderInstanceDataMap.get(e9);
        return t6 ? [t6] : null;
      }
      const e8 = this._highlightRenderInstanceDataMap.get(c5);
      return s8 ? e8 ? [e8] : null : Array.from(this._highlightRenderInstanceDataMap.values());
    }
    return null;
  }
  intersect(e7, t5, r12, n8) {
    if (!this.baseMaterial.visible || null == this._octree) return;
    const s8 = n2();
    c3(s8, n8, r12);
    const a6 = (s9) => {
      this._instanceData.getCombinedModelTransform(s9, Z), e7.transform.set(Z), E($, r12, e7.transform.inverse), E(X, n8, e7.transform.inverse);
      const a7 = this._instanceData.getState(s9), i5 = this._instanceData.getLodLevel(s9), o7 = this._levels.length;
      s4(!!(a7 & S.ACTIVE), "invalid instance state"), s4(i5 >= 0 && i5 < o7, "invaid lod level"), this._levels[i5].intersect(e7, t5, $, X, s9, this.metadata, o7);
    };
    this.baseMaterial.parameters.verticalOffset ? this._octree.forEach(a6) : this._octree.forEachAlongRay(r12, s8, a6);
  }
  notifyShaderTransformationChanged() {
    this._invalidateOctree(), this._requestUpdateCycle();
  }
  get _octree() {
    var _a;
    if (null == this._octreeCached) {
      const e7 = this._instanceData, t5 = (_a = e7.view) == null ? void 0 : _a.state;
      if (!t5) return null;
      this._octreeCached = new n7(e7, this.baseBoundingSphere);
      for (let r12 = 0; r12 < e7.capacity; ++r12) t5.get(r12) & S.ACTIVE && this._octreeCached.addInstance(r12);
    }
    return this._octreeCached;
  }
  _invalidateOctree() {
    this._octreeCached = u(this._octreeCached);
  }
  queryDepthRange(e7) {
    if (null == this._octree) return new r10();
    const t5 = e7.viewForward, r12 = this._octree.findClosest(t5, b2.DepthOrder.FRONT_TO_BACK, e7.frustum), n8 = this._octree.findClosest(t5, b2.DepthOrder.BACK_TO_FRONT, e7.frustum);
    if (null == r12 || null == n8) return new r10();
    const s8 = e7.eye, a6 = this._instanceData.view;
    a6.boundingSphere.getVec(r12, Q), c3(Q, Q, s8);
    const i5 = P(Q, t5) - Q[3];
    a6.boundingSphere.getVec(n8, Q), c3(Q, Q, s8);
    const o7 = P(Q, t5) + Q[3];
    return new r10(i5, o7);
  }
  _requestUpdateCycle(e7 = false) {
    this._updateCyclesWithStaticCamera = -1, this._cycleStartIndex = this._instanceIndex, e7 && (this._needFullCycle = true, this._context.requestRender());
  }
  _startUpdateCycle() {
    this._updateCyclesWithStaticCamera++, this._allRenderInstanceData.forEach((e7) => e7.forEach((e8) => e8.startUpdateCycle()));
  }
  get running() {
    return this._instanceData.size > 0 && this._updateCyclesWithStaticCamera < 1;
  }
  runTask(e7) {
    const { _enableLevelSelection: t5, _camera: n8, _levelSelector: a6 } = this;
    this._allRenderInstanceData.forEach((e8) => e8.forEach((e9) => e9.beginUpdate()));
    const i5 = this._instanceData, o7 = i5.view;
    let l7 = i5.size;
    const c8 = i5.capacity;
    let h4 = this._instanceIndex;
    const d3 = Math.ceil(c8 / 500);
    for (let u6 = 0; u6 < l7 && !e7.done; ++u6) {
      h4 === this._cycleStartIndex && this._startUpdateCycle();
      const u7 = o7.state.get(h4);
      let p2 = 0;
      if (!(u7 & S.ALLOCATED)) {
        h4 = h4 + 1 === c8 ? 0 : h4 + 1, l7++;
        continue;
      }
      const m4 = o7.lodLevel.get(h4);
      if (u7 & S.DEFAULT_ACTIVE && this._defaultRenderInstanceData[m4].freeTail(), u7 & S.HIGHLIGHT_ACTIVE) {
        const e8 = i5.geHighlightOptionsPrev(h4);
        if (e8) {
          const t6 = this._highlightRenderInstanceDataMap.get(e8);
          if (!t6) throw new s("Internal error in lodRenderer");
          t6[m4].freeTail();
        }
      }
      if (u7 & S.REMOVE) i5.freeInstance(h4);
      else if (u7 & S.VISIBLE) {
        let e8 = 0;
        if (t5 && (o7.modelOrigin.getVec(h4, J), e8 = a6.selectLevel(J, i5.getCombinedMedianScaleFactor(h4), n8)), p2 = u7 & ~(S.ACTIVE | S.TRANSFORM_CHANGED), e8 >= 0) if (u7 & S.HIGHLIGHT) {
          const t6 = i5.getHighlightName(h4);
          if (t6) {
            const n9 = () => {
              const e9 = this._createRenderInstanceDataArray();
              return e9.forEach((e10) => e10.beginUpdate()), e9;
            }, a7 = r3(this._highlightRenderInstanceDataMap, t6, n9);
            if (e8 >= a7.length) throw new s(`LodRenderer internal error - missing lodLevel ${e8}`);
            W(a7[e8], o7, h4);
          }
          p2 |= S.HIGHLIGHT_ACTIVE;
        } else W(this._defaultRenderInstanceData[e8], o7, h4), p2 |= S.DEFAULT_ACTIVE;
        o7.state.set(h4, p2), o7.lodLevel.set(h4, e8);
      } else p2 = u7 & ~(S.ACTIVE | S.TRANSFORM_CHANGED), o7.state.set(h4, p2);
      if (null != this._octreeCached) {
        const e8 = !!(u7 & S.ACTIVE), t6 = !!(p2 & S.ACTIVE);
        !e8 && t6 ? this._octreeCached.addInstance(h4) : e8 && !t6 ? this._octreeCached.removeInstance(h4) : e8 && t6 && u7 & S.TRANSFORM_CHANGED && (this._octreeCached.removeInstance(h4), this._octreeCached.addInstance(h4));
      }
      h4 = h4 + 1 === c8 ? 0 : h4 + 1, h4 % d3 == 0 && e7.madeProgress();
    }
    this._instanceIndex = h4, this._allRenderInstanceData.forEach((e8) => e8.forEach((e9) => e9.endUpdate())), this._context.requestRender();
  }
  _beginComponent(e7, t5, r12) {
    if (0 === t5.size) return null;
    const n8 = r12.glMaterials.load(e7.rctx, e7.bind.slot, e7.output);
    return n8 == null ? void 0 : n8.beginSlot(e7.bind);
  }
  _renderComponent(e7, t5, r12, n8, s8) {
    if (!t5) return;
    const { bind: a6, rctx: i5 } = e7;
    i5.runAppleAmdDriverHelper();
    const o7 = i5.bindTechnique(t5, a6, n8.material.parameters, te);
    i5.bindVAO(n8.vao), t5.ensureAttributeLocations(n8.vao), t2.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL && e7.output === n5.Color && (o7.setUniform4fv("externalColor", ee[Math.min(s8, ee.length - 1)]), o7.setUniform1i("colorMixMode", o3.replace));
    const l7 = r12.capacity, c8 = r12.headIndex, h4 = r12.tailIndex, d3 = r12.firstIndex, u6 = this._glInstanceBufferLayout, p2 = (e8, s9) => {
      E3(i5, O2, r12.buffer, u6, e8), i5.drawArraysInstanced(t5.primitiveType, 0, n8.vertexCount, s9 - e8), _(i5, O2, r12.buffer, u6);
    };
    n8.material.parameters.transparent && null != d3 ? c8 > h4 ? (s4(d3 >= h4 && d3 <= c8, "invalid firstIndex"), p2(d3, c8), p2(h4, d3)) : c8 < h4 && (d3 <= c8 ? (s4(d3 >= 0 && d3 <= c8, "invalid firstIndex"), p2(d3, c8), p2(h4, l7), p2(0, d3)) : (s4(d3 >= h4 && d3 <= l7, "invalid firstIndex"), p2(d3, l7), p2(0, c8), p2(h4, d3))) : c8 > h4 ? p2(h4, c8) : c8 < h4 && (p2(0, c8), p2(h4, l7)), i5.bindVAO(null);
  }
};
function W(e7, t5, r12) {
  const n8 = e7.allocateHead();
  K(t5, r12, e7.view, n8);
}
function K(e7, t5, r12, n8) {
  l5(e7.modelOrigin, t5, r12.modelOriginHi, r12.modelOriginLo, n8), r12.model.copyFrom(n8, e7.model, t5), r12.modelNormal.copyFrom(n8, e7.modelNormal, t5), e7.color && r12.color && r12.color.copyFrom(n8, e7.color, t5), e7.objectAndLayerIdColor && r12.objectAndLayerIdColor && r12.objectAndLayerIdColor.copyFrom(n8, e7.objectAndLayerIdColor, t5), e7.featureAttribute && r12.featureAttribute && r12.featureAttribute.copyFrom(n8, e7.featureAttribute, t5);
}
function Y(e7) {
  let t5 = H().vec3f(e4.INSTANCEMODELORIGINHI).vec3f(e4.INSTANCEMODELORIGINLO).mat3f(e4.INSTANCEMODEL).mat3f(e4.INSTANCEMODELNORMAL);
  return null != e7 && e7.includes("featureAttribute") && (t5 = t5.vec4f(e4.INSTANCEFEATUREATTRIBUTE)), null != e7 && e7.includes("color") && (t5 = t5.vec4u8(e4.INSTANCECOLOR)), null != e7 && e7.includes("objectAndLayerIdColor") && (t5 = t5.vec4u8(e4.INSTANCEOBJECTANDLAYERIDCOLOR)), t5;
}
r([m({ constructOnly: true })], k.prototype, "symbol", void 0), r([m({ constructOnly: true })], k.prototype, "optionalFields", void 0), r([m({ constructOnly: true })], k.prototype, "metadata", void 0), r([m({ constructOnly: true })], k.prototype, "shaderTransformation", void 0), r([m()], k.prototype, "_instanceData", void 0), r([m()], k.prototype, "_cycleStartIndex", void 0), r([m({ readOnly: true })], k.prototype, "_enableLevelSelection", null), r([m()], k.prototype, "_updateCyclesWithStaticCamera", void 0), r([m({ readOnly: true })], k.prototype, "running", null), k = r([a("esri.views.3d.webgl-engine.lib.lodRendering.LodRenderer")], k);
var J = n2();
var Q = n3();
var Z = e2();
var $ = n2();
var X = n2();
var ee = [r5(1, 0, 1, 1), r5(0, 0, 1, 1), r5(0, 1, 0, 1), r5(1, 1, 0, 1), r5(1, 0, 0, 1)];
var te = new N();

export {
  a2 as a,
  e5 as e,
  r9 as r,
  i4 as i,
  s7 as s,
  f,
  m3 as m,
  u4 as u,
  h3 as h,
  t4 as t,
  k
};
//# sourceMappingURL=chunk-ZMTG7OFR.js.map
