import {
  t as t3
} from "./chunk-XFIIM3OH.js";
import {
  D,
  E,
  H,
  z
} from "./chunk-VWA3EWRM.js";
import {
  C,
  C2,
  Ct,
  Dt,
  Ee,
  K,
  Kt,
  Le,
  Me,
  P,
  St,
  Tt,
  U,
  Ue,
  Ut,
  W,
  X,
  Xt,
  Y,
  Yt,
  Ze,
  _ as _2,
  _e,
  ce,
  cn,
  ee,
  g as g3,
  h,
  ie,
  j as j2,
  m as m3,
  nn,
  pe,
  pn,
  qe,
  rt as rt2,
  sn,
  un,
  v,
  w,
  zt
} from "./chunk-ZPDSNSZE.js";
import {
  n as n3
} from "./chunk-3SEDCXI3.js";
import {
  t as t2
} from "./chunk-FSHULOB2.js";
import {
  t
} from "./chunk-KIKC4LVZ.js";
import {
  J
} from "./chunk-LTF4JXOW.js";
import {
  r as r6
} from "./chunk-CWQRKBLB.js";
import {
  _
} from "./chunk-3WMBBCKF.js";
import {
  L as L2
} from "./chunk-RD3QRDRK.js";
import {
  $,
  Gt,
  Rt,
  bt,
  kt,
  pt,
  rt
} from "./chunk-NDCL5BI2.js";
import {
  L,
  M,
  N
} from "./chunk-ANT4QPJQ.js";
import {
  n as n2
} from "./chunk-O2L6JAHP.js";
import {
  o as o2,
  r as r5,
  u as u2
} from "./chunk-K35H6D4D.js";
import {
  g as g2,
  o,
  r as r4
} from "./chunk-UMYFDXOJ.js";
import {
  m as m2
} from "./chunk-WR4Z7HZ2.js";
import {
  c,
  f
} from "./chunk-JLFV7EBO.js";
import {
  n,
  r as r3
} from "./chunk-JLFSX3JT.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  r as r2
} from "./chunk-6P7HXSJ6.js";
import {
  p
} from "./chunk-YSPSOPLL.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  e,
  r
} from "./chunk-PPIAYGRE.js";
import {
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js
var e2 = { shaders: { vertexShader: n3("bitBlit/bitBlit.vert"), fragmentShader: n3("bitBlit/bitBlit.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]) };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js
var r7 = { shaders: { vertexShader: n3("stencil/stencil.vert"), fragmentShader: n3("stencil/stencil.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/BlendShader.js
var q = class extends C2 {
};
r([h(0, C)], q.prototype, "position", void 0);
var z2 = class extends v {
};
var A = class extends P {
};
r([g3(U)], A.prototype, "layerTexture", void 0), r([g3(U)], A.prototype, "backbufferTexture", void 0), r([g3(_2)], A.prototype, "opacity", void 0), r([g3(_2)], A.prototype, "inFadeOpacity", void 0);
var D2 = class extends j2 {
  constructor() {
    super(...arguments), this.type = "BlendShader";
  }
  vertex(t7) {
    return { uv: t7.position, glPosition: new Y(z(t7.position), 0, 1) };
  }
  fragment(t7) {
    const l3 = new w(), e4 = pn(this.config.layerTexture, t7.uv), r13 = pn(this.config.backbufferTexture, t7.uv), n6 = zt(Ut(e4.a, new _2(0)), e4.rgb, e4.rgb.divide(e4.a)), i3 = zt(Ut(r13.a, new _2(0)), r13.rgb, r13.rgb.divide(r13.a)), a5 = this.config.opacity.multiply(e4.a), o4 = r13.a;
    switch (this.blendMode) {
      case "destination-over":
        l3.fragColor = new Y(n6.multiply(a5).multiply(D(o4)).add(i3.multiply(o4)), a5.add(o4).subtract(a5.multiply(o4)));
        break;
      case "source-in":
        {
          const t8 = new Y(n6.multiply(a5).multiply(o4), a5.multiply(o4)), e5 = new Y(i3.multiply(o4), o4).multiply(D(this.config.opacity)).multiply(this.config.inFadeOpacity);
          l3.fragColor = t8.add(e5);
        }
        break;
      case "destination-in":
        {
          const t8 = new Y(i3.multiply(o4).multiply(a5), o4.multiply(a5)), e5 = new Y(i3.multiply(o4), o4).multiply(new Y(D(this.config.opacity).multiply(this.config.inFadeOpacity)));
          l3.fragColor = t8.add(e5);
        }
        break;
      case "source-out":
        l3.fragColor = new Y(n6.multiply(a5).multiply(D(o4)), a5.multiply(D(o4)));
        break;
      case "destination-out":
        l3.fragColor = new Y(i3.multiply(o4).multiply(D(a5)), o4.multiply(D(a5)));
        break;
      case "source-atop":
        l3.fragColor = new Y(n6.multiply(a5).multiply(o4).add(i3.multiply(o4.multiply(D(a5)))), o4);
        break;
      case "destination-atop":
        l3.fragColor = new Y(n6.multiply(a5.multiply(D(o4))).add(i3.multiply(o4).multiply(a5)), a5);
        break;
      case "xor":
        l3.fragColor = new Y(n6.multiply(a5.multiply(D(o4))).add(i3.multiply(o4.multiply(D(a5)))), a5.multiply(D(o4)).add(o4.multiply(D(a5))));
        break;
      case "multiply":
        l3.fragColor = new Y(n6.multiply(a5).multiply(i3.multiply(o4)).add(n6.multiply(a5).multiply(D(o4))).add(i3.multiply(o4).multiply(D(a5))), a5.add(o4.multiply(D(a5))));
        break;
      case "screen":
        l3.fragColor = new Y(n6.add(i3).subtract(n6.multiply(i3)).multiply(a5.multiply(o4)).add(n6.multiply(a5).multiply(D(o4))).add(i3.multiply(o4).multiply(D(a5))), a5.add(o4.multiply(D(a5))));
        break;
      case "overlay":
        {
          const t8 = new X(H2(i3.r, n6.r), H2(i3.g, n6.g), H2(i3.b, n6.b));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "darken":
        {
          const t8 = Ue(n6, i3);
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "lighter":
        l3.fragColor = new Y(n6.multiply(a5).add(i3.multiply(o4)), a5.add(o4));
        break;
      case "lighten":
        {
          const t8 = qe(n6, i3);
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "color-dodge":
        {
          const t8 = ce(new X(I(i3.r, n6.r), I(i3.g, n6.g), I(i3.b, n6.b)), new X(0), new X(1));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "color-burn":
        {
          const t8 = new X(J2(i3.r, n6.r), J2(i3.g, n6.g), J2(i3.b, n6.b));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "hard-light":
        {
          const t8 = new X(K2(i3.r, n6.r), K2(i3.g, n6.g), K2(i3.b, n6.b));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "soft-light":
        {
          const t8 = new X(L3(i3.r, n6.r), L3(i3.g, n6.g), L3(i3.b, n6.b));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "difference":
        {
          const t8 = Kt(i3.subtract(n6));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "exclusion":
        {
          const t8 = n6.add(i3).subtract(new _2(2).multiply(n6).multiply(i3));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "invert":
        l3.fragColor = new Y(new X(1).subtract(i3).multiply(a5).multiply(o4).add(i3.multiply(o4).multiply(D(a5))), o4);
        break;
      case "vivid-light":
        {
          const t8 = new X(ce(N2(i3.r, n6.r), new _2(0), new _2(1)), ce(N2(i3.g, n6.g), new _2(0), new _2(1)), ce(N2(i3.b, n6.b), new _2(0), new _2(1)));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "hue":
        {
          const t8 = Y2(n6, i3, i3);
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "saturation":
        {
          const t8 = Y2(i3, n6, i3);
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "color":
        {
          const t8 = X2(n6, i3);
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "luminosity":
        {
          const t8 = X2(i3, n6);
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "plus":
        l3.fragColor = ce(new Y(e4.r.add(i3.r), e4.g.add(i3.g), e4.b.add(i3.b), a5.add(o4)), new Y(0), new Y(1));
        break;
      case "minus":
        l3.fragColor = new Y(ce(new X(i3.r.subtract(e4.r), i3.g.subtract(e4.g), i3.b.subtract(e4.b)), new X(0), new X(1)), o4.multiply(a5));
        break;
      case "average":
        {
          const t8 = i3.add(n6).divide(2);
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      case "reflect":
        {
          const t8 = ce(new X(Z(i3.r, n6.r), Z(i3.g, n6.g), Z(i3.b, n6.b)), new X(0), new X(1));
          l3.fragColor = E2(t8, n6, i3, a5, o4);
        }
        break;
      default:
        l3.fragColor = e4.multiply(this.config.opacity);
    }
    return l3;
  }
};
function E2(t7, l3, e4, r13, n6) {
  return new Y(t7.multiply(r13).multiply(n6).add(l3.multiply(r13).multiply(D(n6))).add(e4.multiply(n6).multiply(D(r13))), r13.add(n6.multiply(D(r13))));
}
function H2(t7, l3) {
  return new _2(1).subtract(sn(new _2(0.5), l3)).multiply(D(new _2(2).multiply(D(l3).multiply(D(t7))))).add(sn(new _2(0.5), l3).multiply(new _2(2).multiply(l3).multiply(t7)));
}
function I(t7, l3) {
  return zt(Ut(t7, new _2(0)), new _2(0), zt(Ut(l3, new _2(1)), new _2(1), Ue(new _2(1), t7.divide(new _2(1).subtract(l3)))));
}
function J2(t7, l3) {
  return zt(Ut(t7, new _2(1)), new _2(1), zt(Ut(l3, new _2(0)), new _2(0), D(Ue(new _2(1), D(t7).divide(l3)))));
}
function K2(t7, l3) {
  return new _2(1).subtract(sn(new _2(0.5), l3)).multiply(new _2(2).multiply(l3).multiply(t7)).add(sn(new _2(0.5), l3).multiply(D(new _2(2).multiply(D(l3).multiply(D(t7))))));
}
function L3(t7, l3) {
  return Tt([Xt(l3, new _2(0.5)), () => {
    const e4 = new _2(2).multiply(l3), r13 = D(e4), n6 = D(t7);
    return t7.subtract(r13.multiply(t7).multiply(n6));
  }], [Xt(t7, new _2(0.25)), () => {
    const e4 = new _2(2).multiply(l3), r13 = E(e4).multiply(t7), n6 = new _2(16).multiply(t7).subtract(new _2(12)).multiply(t7).add(new _2(3));
    return t7.add(r13.multiply(n6));
  }], [true, () => {
    const e4 = new _2(2).multiply(l3), r13 = E(e4), n6 = un(t7).subtract(t7);
    return t7.add(r13.multiply(n6));
  }]);
}
function N2(t7, l3) {
  const e4 = D(sn(new _2(0.5), l3)).multiply(J2(t7, new _2(2).multiply(l3))), r13 = sn(new _2(0.5), l3).multiply(I(t7, new _2(2).multiply(H(l3, 0.5))));
  return e4.add(r13);
}
function Q(t7) {
  return Ue(Ue(t7.r, t7.g), t7.b);
}
function R(t7) {
  return qe(qe(t7.r, t7.g), t7.b);
}
function U2(t7) {
  return pe(t7, new X(0.3, 0.59, 0.11));
}
function V(t7) {
  return R(t7).subtract(Q(t7));
}
function W2(t7) {
  const l3 = U2(t7), e4 = Q(t7), r13 = R(t7);
  return Tt([Ct(e4, new _2(0)), () => {
    const r14 = t7.subtract(l3).multiply(l3), n6 = l3.subtract(e4);
    return l3.add(r14.divide(n6));
  }], [Yt(r13, new _2(1)), () => {
    const e5 = t7.subtract(l3), n6 = D(l3), i3 = e5.multiply(n6), a5 = r13.subtract(l3);
    return l3.add(i3.divide(a5));
  }], [true, t7]);
}
function X2(t7, l3) {
  const e4 = U2(t7), r13 = U2(l3).subtract(e4);
  return W2(t7.add(new X(r13)));
}
function Y2(t7, l3, e4) {
  const r13 = Q(t7), n6 = V(t7), i3 = V(l3);
  return X2(zt(Yt(n6, new _2(0)), () => t7.subtract(r13).multiply(i3).divide(n6), new X(0)), e4);
}
function Z(t7, l3) {
  return zt(Ut(l3, new _2(1)), l3, () => {
    const e4 = D(l3), r13 = t7.multiply(t7).divide(e4);
    return Ue(r13, new _2(1));
  });
}
r([K], D2.prototype, "blendMode", void 0), r([g3(A)], D2.prototype, "config", void 0), r([e(0, m3(q))], D2.prototype, "vertex", null), r([e(0, m3(z2))], D2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/OpacityShader.js
var f2 = class extends C2 {
};
r([h(0, C)], f2.prototype, "position", void 0);
var g4 = class extends v {
};
var x = class extends P {
};
r([g3(U)], x.prototype, "layerTexture", void 0), r([g3(_2)], x.prototype, "opacity", void 0);
var h2 = class extends j2 {
  constructor() {
    super(...arguments), this.type = "OpacityShader";
  }
  vertex(t7) {
    return { uv: t7.position, glPosition: new Y(t7.position.subtract(new C(0.5)).multiply(2), 0, 1) };
  }
  fragment(t7) {
    const o4 = new w();
    return o4.fragColor = pn(this.config.layerTexture, t7.uv).multiply(this.config.opacity), o4;
  }
};
r([g3(x)], h2.prototype, "config", void 0), r([e(0, m3(f2))], h2.prototype, "vertex", null), r([e(0, m3(g4))], h2.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js
var t4 = { shaders: { vertexShader: n3("highlight/textured.vert"), fragmentShader: n3("highlight/highlight.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
var r8 = { shaders: { vertexShader: n3("highlight/textured.vert"), fragmentShader: n3("highlight/blur.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };

// node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js
var r9 = !!has("esri-2d-profiler");
var n4 = class {
  constructor(n6, i3) {
    if (this._events = new i(), this._entries = /* @__PURE__ */ new Map(), this._timings = new t2(10), this._currentContainer = null, this._currentPass = null, this._currentBrush = null, this._currentSummary = null, !r9) return;
    this._ext = t3(n6.gl, {}), this._debugOutput = i3;
    const o4 = n6.gl;
    if (!this.enableCommandLogging) return;
    let a5;
    for (a5 in o4) if ("function" == typeof o4[a5]) {
      const e4 = o4[a5], t7 = a5.includes("draw");
      o4[a5] = (...s3) => (this._events.emit("command", { container: this._currentContainer, pass: this._currentPass, brush: this._currentBrush, method: a5, args: s3, isDrawCommand: t7 }), this._currentSummary && (this._currentSummary.commands++, t7 && this._currentSummary.drawCommands++), e4.apply(o4, s3));
    }
  }
  get enableCommandLogging() {
    return !("object" == typeof r9 && r9.disableCommands);
  }
  recordContainerStart(e4) {
    r9 && (this._currentContainer = e4);
  }
  recordContainerEnd() {
    r9 && (this._currentContainer = null);
  }
  recordPassStart(e4) {
    r9 && (this._currentPass = e4, this._initSummary());
  }
  recordPassEnd() {
    r9 && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(e4) {
    r9 && (this._currentBrush = e4);
  }
  recordBrushEnd() {
    r9 && (this._currentBrush = null);
  }
  recordStart(e4) {
    if (r9 && null != this._ext) {
      if (this._entries.has(e4)) {
        const t8 = this._entries.get(e4), s3 = this._ext.resultAvailable(t8.query), r13 = this._ext.disjoint();
        if (s3 && !r13) {
          const s4 = this._ext.getResult(t8.query) / 1e6;
          let r14 = 0;
          if (null != this._timings.enqueue(s4)) {
            const e5 = this._timings.entries, t9 = e5.length;
            let s5 = 0;
            for (const r15 of e5) s5 += r15;
            r14 = s5 / t9;
          }
          const n6 = s4.toFixed(2), i3 = r14 ? r14.toFixed(2) : "--";
          this.enableCommandLogging ? (console.groupCollapsed(`Frame report for ${e4}, ${n6} ms (${i3} last 10 avg)
${t8.commandsLen} Commands (${t8.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(t8.summaries), console.log("Commands: ", t8.commands), console.groupEnd()) : console.log(`Frame report for ${e4}, ${n6} ms (${i3} last 10 avg)`), this._debugOutput.innerHTML = `${n6} (${i3})`;
        }
        for (const e5 of t8.handles) e5.remove();
        this._ext.deleteQuery(t8.query), this._entries.delete(e4);
      }
      const t7 = { name: e4, query: this._ext.createQuery(), commands: [], commandsLen: 0, drawCommands: 0, summaries: [], handles: [] };
      this.enableCommandLogging && (t7.handles.push(this._events.on("command", (e5) => {
        t7.commandsLen++, t7.commands.push(e5), e5.isDrawCommand && t7.drawCommands++;
      })), t7.handles.push(this._events.on("summary", (e5) => {
        t7.summaries.push(e5);
      }))), this._ext.beginTimeElapsed(t7.query), this._entries.set(e4, t7);
    }
  }
  recordEnd(e4) {
    r9 && null != this._ext && this._entries.has(e4) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = { container: this._currentContainer, pass: this._currentPass, drawCommands: 0, commands: 0 });
  }
  _emitSummary() {
    this.enableCommandLogging && this._currentSummary && this._events.emit("summary", this._currentSummary);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js
var i2 = 1;
var e3 = 0;
var h3 = 1;
var o3 = 2;
var r10 = class {
  constructor(t7, e4, h5) {
    this._width = t7 * h5, this._height = e4 * h5, this._pixelRatio = h5;
    const o4 = Math.ceil(this._width / i2), r13 = Math.ceil(this._height / i2);
    this._cols = o4, this._rows = r13, this._cells = t.create(o4 * r13);
  }
  insertMetrics(t7) {
    this._markMetrics(t7);
  }
  hasCollision(t7) {
    let s3 = 0;
    for (const { transformedX: i3, transformedY: e4, width: r13, height: l3 } of t7.bounds) {
      const t8 = r13 * this._pixelRatio, a5 = l3 * this._pixelRatio, c5 = i3 * this._pixelRatio, _6 = e4 * this._pixelRatio;
      switch (this._collide(c5, _6, t8, a5)) {
        case o3:
          return o3;
        case h3:
          s3++;
      }
    }
    return s3 === t7.bounds.length ? h3 : e3;
  }
  getCellId(t7, s3) {
    return t7 + s3 * this._cols;
  }
  has(t7) {
    return this._cells.has(t7);
  }
  hasRange(t7, s3) {
    return this._cells.hasRange(t7, s3);
  }
  set(t7) {
    this._cells.set(t7);
  }
  setRange(t7, s3) {
    this._cells.setRange(t7, s3);
  }
  _collide(s3, r13, l3, a5) {
    const c5 = s3 - l3 / 2, _6 = r13 - a5 / 2, n6 = c5 + l3, f6 = _6 + a5;
    if (n6 < 0 || f6 < 0 || c5 > this._width || _6 > this._height) return h3;
    const d7 = r2(Math.floor(c5 / i2), 0, this._cols), u4 = r2(Math.floor(_6 / i2), 0, this._rows), p2 = r2(Math.ceil(n6 / i2), 0, this._cols), g7 = r2(Math.ceil(f6 / i2), 0, this._rows);
    for (let t7 = u4; t7 <= g7; t7++) for (let s4 = d7; s4 <= p2; s4++) {
      const i3 = this.getCellId(s4, t7);
      if (this.has(i3)) return o3;
    }
    return e3;
  }
  _mark(s3, e4, h5, o4) {
    const r13 = s3 - h5 / 2, l3 = e4 - o4 / 2, a5 = r13 + h5, c5 = l3 + o4, _6 = r2(Math.floor(r13 / i2), 0, this._cols), n6 = r2(Math.floor(l3 / i2), 0, this._rows), f6 = r2(Math.ceil(a5 / i2), 0, this._cols), d7 = r2(Math.ceil(c5 / i2), 0, this._rows);
    for (let t7 = n6; t7 <= d7; t7++) for (let s4 = _6; s4 <= f6; s4++) {
      const i3 = this.getCellId(s4, t7);
      this.set(i3);
    }
    return false;
  }
  _markMetrics(t7) {
    for (const { transformedX: s3, transformedY: i3, width: e4, height: h5 } of t7.bounds) {
      const t8 = e4 * this._pixelRatio, o4 = h5 * this._pixelRatio, r13 = s3 * this._pixelRatio, l3 = i3 * this._pixelRatio;
      this._mark(r13, l3, t8, o4);
    }
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js
var a2 = 254;
var c2 = 255;
var f3 = 0;
function d(e4, t7) {
  const o4 = e4.children.slice();
  o4.sort((e5, t8) => e5.tileAge - t8.tileAge), o4.forEach((e5) => {
    null != e5.labelMetrics && e5.isReady && t7(e5, e5.labelMetrics);
  });
}
function u3(e4, t7) {
  return (!e4.minScale || e4.minScale >= t7) && (!e4.maxScale || e4.maxScale <= t7);
}
var b = class {
  run(e4, t7, o4, n6) {
    var _a;
    const i3 = [];
    for (let s3 = e4.length - 1; s3 >= 0; s3--) {
      const t8 = e4[s3];
      ((_a = t8.labelingCollisionInfos) == null ? void 0 : _a.length) && i3.push(...t8.labelingCollisionInfos);
    }
    has("esri-2d-update-debug") && i3.length && console.debug("CollisionEngine.run"), this._transformMetrics(i3), this._runCollision(i3, t7, o4, n6);
    for (const s3 of i3) s3.container.requestRender();
  }
  _runCollision(e4, t7, o4, n6) {
    const [s3, l3] = t7.state.size, r13 = new r10(s3, l3, t7.pixelRatio);
    for (const { container: i3, deconflictionEnabled: b2, visible: m4 } of e4) {
      const e5 = i3.attributeView;
      b2 ? m4 ? (this._prepare(i3), this._collideVisible(r13, i3, o4, n6), this._collideInvisible(r13, i3)) : d(i3, (t8, o5) => {
        for (const n7 of o5) e5.setLabelMinZoom(n7.entityTexel, c2);
      }) : d(i3, (t8, n7) => {
        for (const i4 of n7) u3(i4, o4) ? (e5.setLabelMinZoom(i4.entityTexel, f3), m4 && r13.insertMetrics(i4)) : e5.setLabelMinZoom(i4.entityTexel, a2);
      });
    }
  }
  _isFiltered(o4, n6, i3) {
    const s3 = n6.getFilterFlags(o4), l3 = s3 & M, r13 = null == i3.featureEffect || i3.featureEffect.excludedLabelsVisible || s3 & N;
    return !(l3 && r13);
  }
  _prepare(e4) {
    const t7 = e4.attributeView, o4 = /* @__PURE__ */ new Set();
    d(e4, (n6, i3) => {
      for (const s3 of i3) {
        const n7 = s3.entityTexel;
        if (o4.has(n7)) continue;
        if (o4.add(n7), this._isFiltered(n7, t7, e4.layerView)) {
          t7.setLabelMinZoom(n7, a2);
          continue;
        }
        t7.getLabelMinZoom(n7) !== f3 ? t7.setLabelMinZoom(n7, c2) : t7.setLabelMinZoom(n7, f3);
      }
    });
  }
  _collideVisible(e4, t7, o4, n6) {
    const i3 = t7.attributeView, c5 = /* @__PURE__ */ new Set();
    d(t7, (t8, d7) => {
      for (let b2 = 0; b2 < d7.length; b2++) {
        const m4 = d7[b2].entityTexel;
        if (c5.has(m4)) continue;
        if (t8.key.level !== n6) {
          i3.setLabelMinZoom(m4, a2), c5.add(m4);
          continue;
        }
        if (!u3(d7[b2], o4)) {
          i3.setLabelMinZoom(m4, a2), c5.add(m4);
          continue;
        }
        if (0 !== i3.getLabelMinZoom(m4)) {
          c5.add(m4);
          continue;
        }
        let h5 = false, M3 = true;
        const g7 = b2;
        let y2 = b2;
        for (; y2 < d7.length; y2++) {
          const t9 = d7[y2];
          if (t9.entityTexel !== m4) break;
          if (h5) continue;
          switch (e4.hasCollision(t9)) {
            case h3:
              break;
            case o3:
              h5 = true, M3 = false;
              break;
            case e3:
              M3 = false;
          }
        }
        if (!h5) for (let t9 = g7; t9 < y2; t9++) e4.insertMetrics(d7[t9]);
        b2 = y2 - 1, M3 || (c5.add(m4), i3.setLabelMinZoom(m4, h5 ? a2 : f3));
      }
    });
  }
  _collideInvisible(e4, t7) {
    const o4 = t7.attributeView, n6 = /* @__PURE__ */ new Set();
    d(t7, (t8, i3) => {
      for (let a5 = 0; a5 < i3.length; a5++) {
        const t9 = i3[a5].entityTexel;
        if (n6.has(t9)) continue;
        if (o4.getLabelMinZoom(t9) !== c2) {
          n6.add(t9);
          continue;
        }
        let d7 = false, u4 = true;
        const b2 = a5;
        let m4 = a5;
        for (; m4 < i3.length; m4++) {
          const o5 = i3[m4];
          if (o5.entityTexel !== t9) break;
          if (d7) continue;
          switch (e4.hasCollision(o5)) {
            case h3:
              break;
            case o3:
              d7 = true, u4 = false;
              break;
            case e3:
              u4 = false;
          }
        }
        if (!d7) for (let o5 = b2; o5 < m4; o5++) e4.insertMetrics(i3[o5]);
        a5 = m4 - 1, u4 || (n6.add(t9), o4.setLabelMinZoom(t9, d7 ? c2 : f3));
      }
    });
  }
  _transformMetrics(e4) {
    for (const { container: t7, geometryType: i3, vvEvaluators: s3 } of e4) d(t7, (e5, l3) => {
      var _a;
      const r13 = t7.attributeView, a5 = e5.transforms.labelMat2d;
      a5[4] = Math.round(a5[4]), a5[5] = Math.round(a5[5]);
      const c5 = "polyline" === i3;
      for (const t8 of l3) {
        const { entityTexel: e6, anchorX: i4, anchorY: l4 } = t8;
        let f6 = ((_a = t8.referenceBounds) == null ? void 0 : _a.size) ?? 0;
        const d7 = s3[0];
        if (null != d7) {
          const t9 = d7(r13.getVisualVariableData(e6, L2.SIZE));
          f6 = isNaN(t9) || null == t9 || t9 === 1 / 0 ? f6 : t9;
        }
        const u4 = L + f6 / 2, b2 = t8.directionX * u4, m4 = t8.directionY * u4;
        for (const o4 of t8.bounds) {
          let e7 = i4, t9 = l4;
          if (c5) {
            const n6 = i4 + o4.x + b2, s4 = l4 + o4.y + m4;
            e7 = a5[0] * n6 + a5[2] * s4 + a5[4], t9 = a5[1] * n6 + a5[3] * s4 + a5[5];
            const r14 = e7, c6 = t9;
            o4.transformedX = Math.floor(r14), o4.transformedY = Math.floor(c6);
          } else {
            e7 = a5[0] * i4 + a5[2] * l4 + a5[4], t9 = a5[1] * i4 + a5[3] * l4 + a5[5];
            const n6 = e7 + o4.x + b2, s4 = t9 + o4.y + m4;
            o4.transformedX = n6, o4.transformedY = s4;
          }
        }
      }
    });
  }
};

// node_modules/@arcgis/core/views/2d/LabelManager.js
var r11 = 32;
var a3 = class extends g {
  constructor(e4) {
    super(e4), this._lastUpdate = 0, this.collisionEngine = new b(), this.lastUpdateId = -1, this.updateRequested = false, this.view = null;
  }
  get updating() {
    return has("esri-2d-log-updating") && console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`), this.updateRequested;
  }
  update(e4) {
    const t7 = performance.now();
    t7 - this._lastUpdate >= r11 ? (this._lastUpdate = t7, this.doUpdate(e4)) : this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    var _a;
    this.updateRequested || (this.updateRequested = true, (_a = this.view) == null ? void 0 : _a.requestUpdate());
  }
  processUpdate(e4) {
    this.updateRequested && (this.updateRequested = false, this.update(e4));
  }
  doUpdate(e4) {
    const t7 = this.view;
    if (t7) try {
      const s3 = e4.state.scale, o4 = t7.featuresTilingScheme.getClosestInfoForScale(s3).level;
      this.collisionEngine.run(t7.allLayerViews.items, e4, s3, o4);
    } catch (s3) {
    }
  }
};
r([m()], a3.prototype, "updateRequested", void 0), r([m()], a3.prototype, "updating", null), r([m()], a3.prototype, "view", void 0), a3 = r([a("esri.views.2d.LabelManager")], a3);

// node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js
var n5 = "esri-zoom-box";
var h4 = { container: `${n5}__container`, overlay: `${n5}__overlay`, background: `${n5}__overlay-background`, box: `${n5}__outline` };
var l = { zoom: "Shift", counter: "Control" };
var d2 = class extends g {
  constructor(t7) {
    super(t7), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = { x: 0, y: 0, width: 0, height: 0 }, this._rafId = null, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(t7) {
    this.removeAllHandles(), this._destroyOverlay(), this._set("view", t7), t7 && this.addHandles([t7.on("drag", [l.zoom], (t8) => this._handleDrag(t8, 1), _.INTERNAL), t7.on("drag", [l.zoom, l.counter], (t8) => this._handleDrag(t8, -1), _.INTERNAL)]);
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(t7, e4, i3, r13) {
    this._box.x = t7, this._box.y = e4, this._box.width = i3, this._box.height = r13, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(t7, e4, r13, o4, a5) {
    const n6 = this.view, h5 = n6.toMap(c(t7 + 0.5 * r13, e4 + 0.5 * o4));
    let l3 = Math.max(r13 / n6.width, o4 / n6.height);
    -1 === a5 && (l3 = 1 / l3), this._destroyOverlay(), this.navigation.end(), n6.goTo({ center: h5, scale: n6.scale * l3 }, { animationMode: "always", duration: r6() });
  }
  _updateBox(t7, e4, i3, r13) {
    const o4 = this._boxShape;
    o4.setAttributeNS(null, "x", "" + t7), o4.setAttributeNS(null, "y", "" + e4), o4.setAttributeNS(null, "width", "" + i3), o4.setAttributeNS(null, "height", "" + r13), o4.setAttributeNS(null, "class", h4.box);
  }
  _updateBackground(t7, e4, i3, r13) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t7, e4, i3, r13, this.view.width, this.view.height));
  }
  _createContainer() {
    const t7 = document.createElement("div");
    t7.className = h4.container, this.view.root.appendChild(t7), this._container = t7;
  }
  _createOverlay() {
    const t7 = this.view.width, e4 = this.view.height, i3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i3.setAttributeNS(null, "d", "M 0 0 L " + t7 + " 0 L " + t7 + " " + e4 + " L 0 " + e4 + " Z"), i3.setAttributeNS(null, "class", h4.background);
    const r13 = document.createElementNS("http://www.w3.org/2000/svg", "rect"), o4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    o4.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), o4.setAttributeNS(null, "class", h4.overlay), o4.appendChild(i3), o4.appendChild(r13), this._container.appendChild(o4), this._backgroundShape = i3, this._boxShape = r13, this._overlay = o4;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(t7, e4, i3, r13, o4, s3) {
    const a5 = t7 + i3, n6 = e4 + r13;
    return "M 0 0 L " + o4 + " 0 L " + o4 + " " + s3 + " L 0 " + s3 + " ZM " + t7 + " " + e4 + " L " + t7 + " " + n6 + " L " + a5 + " " + n6 + " L " + a5 + " " + e4 + " Z";
  }
  _handleDrag(t7, e4) {
    const i3 = t7.x, r13 = t7.y, o4 = t7.origin.x, s3 = t7.origin.y;
    let a5, n6, h5, l3;
    switch (i3 > o4 ? (a5 = o4, h5 = i3 - o4) : (a5 = i3, h5 = o4 - i3), r13 > s3 ? (n6 = s3, l3 = r13 - s3) : (n6 = r13, l3 = s3 - r13), t7.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(a5, n6, h5, l3);
        break;
      case "end":
        this._end(a5, n6, h5, l3, e4);
    }
    t7.stopPropagation();
  }
  _redraw() {
    if (!this._rafId) return;
    if (this._rafId = null, !this._overlay) return;
    const { x: t7, y: e4, width: i3, height: r13 } = this._box;
    this._updateBox(t7, e4, i3, r13), this._updateBackground(t7, e4, i3, r13), this._rafId = requestAnimationFrame(this._redraw);
  }
};
r([m()], d2.prototype, "navigation", void 0), r([m()], d2.prototype, "view", null), d2 = r([a("esri.views.2d.navigation.ZoomBox")], d2);
var c3 = d2;

// node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js
var t5 = class {
  constructor(t7) {
    this._gain = t7, this.lastValue = void 0, this.filteredDelta = void 0;
  }
  update(t7) {
    if (this.hasLastValue()) {
      const e4 = this.computeDelta(t7);
      this._updateDelta(e4);
    }
    this.lastValue = t7;
  }
  reset() {
    this.lastValue = void 0, this.filteredDelta = void 0;
  }
  hasLastValue() {
    return void 0 !== this.lastValue;
  }
  hasFilteredDelta() {
    return void 0 !== this.filteredDelta;
  }
  computeDelta(t7) {
    return void 0 === this.lastValue ? NaN : t7 - this.lastValue;
  }
  _updateDelta(t7) {
    void 0 !== this.filteredDelta ? this.filteredDelta = (1 - this._gain) * this.filteredDelta + this._gain * t7 : this.filteredDelta = t7;
  }
};

// node_modules/@arcgis/core/views/navigation/Momentum.js
var t6 = class {
  constructor(t7, i3, o4) {
    this._initialVelocity = t7, this._stopVelocity = i3, this._friction = o4, this._duration = Math.abs(Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) / Math.log(1 - this._friction));
  }
  get duration() {
    return this._duration;
  }
  isFinished(t7) {
    return t7 > this.duration;
  }
  get friction() {
    return this._friction;
  }
  value(t7) {
    return this.valueFromInitialVelocity(this._initialVelocity, t7);
  }
  valueDelta(t7, i3) {
    const o4 = this.value(t7);
    return this.value(t7 + i3) - o4;
  }
  valueFromInitialVelocity(t7, i3) {
    i3 = Math.min(i3, this.duration);
    const o4 = 1 - this.friction;
    return t7 * (o4 ** i3 - 1) / Math.log(o4);
  }
};

// node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js
var l2 = class extends t6 {
  constructor(e4, t7, i3, s3, n6) {
    super(e4, t7, i3), this._sceneVelocity = s3, this.direction = n6;
  }
  value(e4) {
    return super.valueFromInitialVelocity(this._sceneVelocity, e4);
  }
};
var c4 = class {
  constructor(e4 = 300, t7 = 12, i3 = 0.84) {
    this._minimumInitialVelocity = e4, this._stopVelocity = t7, this._friction = i3, this.enabled = true, this._time = new t5(0.6), this._screen = [new t5(0.4), new t5(0.4)], this._scene = [new t5(0.6), new t5(0.6), new t5(0.6)], this._tmpDirection = n();
  }
  add(e4, t7, i3) {
    if (this.enabled) {
      if (this._time.hasLastValue()) {
        if (this._time.computeDelta(i3) < 0.015) return;
      }
      this._screen[0].update(e4[0]), this._screen[1].update(e4[1]), this._scene[0].update(t7[0]), this._scene[1].update(t7[1]), this._scene[2].update(t7[2]), this._time.update(i3);
    }
  }
  reset() {
    this._screen[0].reset(), this._screen[1].reset(), this._scene[0].reset(), this._scene[1].reset(), this._scene[2].reset(), this._time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this._screen[0].hasFilteredDelta() || !this._time.hasFilteredDelta()) return null;
    const e4 = this._screen[0].filteredDelta, t7 = this._screen[1].filteredDelta, i3 = null == e4 || null == t7 ? 0 : Math.sqrt(e4 * e4 + t7 * t7), s3 = this._time.filteredDelta, n6 = null == s3 || null == i3 ? 0 : i3 / s3;
    return Math.abs(n6) < this._minimumInitialVelocity ? null : this.createMomentum(n6, this._stopVelocity, this._friction);
  }
  createMomentum(s3, n6, r13) {
    o(this._tmpDirection, this._scene[0].filteredDelta ?? 0, this._scene[1].filteredDelta ?? 0, this._scene[2].filteredDelta ?? 0);
    const c5 = r4(this._tmpDirection);
    c5 > 0 && g2(this._tmpDirection, this._tmpDirection, 1 / c5);
    const h5 = this._time.filteredDelta;
    return new l2(s3, n6, r13, null == h5 ? 0 : c5 / h5, this._tmpDirection);
  }
};

// node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js
var v2 = class extends g {
  constructor(t7) {
    super(t7), this.animationTime = 0, this.momentumEstimator = new c4(500, 6, 0.92), this.momentum = null, this.tmpMomentum = n(), this.momentumFinished = false, this.viewpoint = new m2({ targetGeometry: new j(), scale: 0, rotation: 0 }), this._previousDrag = null, p(() => this.momentumFinished, () => this.navigation.stop());
  }
  begin(t7, i3) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(i3), this._previousDrag = i3;
  }
  update(t7, i3) {
    this.addToEstimator(i3);
    let o4 = i3.center.x, e4 = i3.center.y;
    const s3 = this._previousDrag;
    o4 = s3 ? s3.center.x - o4 : -o4, e4 = s3 ? e4 - s3.center.y : e4, t7.viewpoint = kt(this.viewpoint, t7.viewpoint, [o4 || 0, e4 || 0]), this._previousDrag = i3;
  }
  end(t7, i3) {
    this.addToEstimator(i3);
    const o4 = t7.navigation.effectiveMomentumEnabled;
    this.momentum = o4 ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(t7), this._previousDrag = null, this.navigation.end();
  }
  addToEstimator(t7) {
    const i3 = t7.center.x, o4 = t7.center.y, e4 = f(-i3, o4), m4 = r3(-i3, o4, 0);
    this.momentumEstimator.add(e4, m4, 1e-3 * t7.timestamp);
  }
  onAnimationUpdate(t7) {
    var _a;
    (_a = this.navigation.animationManager) == null ? void 0 : _a.animateContinuous(t7.viewpoint, (i3, o4) => {
      const { momentum: e4, animationTime: s3, tmpMomentum: m4 } = this, n6 = 1e-3 * o4;
      if (!(this.momentumFinished = !e4 || e4.isFinished(s3))) {
        const o5 = e4.valueDelta(s3, n6);
        g2(m4, e4.direction, o5), kt(i3, i3, m4), t7.constraints.constrainByGeometry(i3);
      }
      this.animationTime += n6;
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
r([m()], v2.prototype, "momentumFinished", void 0), r([m()], v2.prototype, "viewpoint", void 0), r([m()], v2.prototype, "navigation", void 0), v2 = r([a("esri.views.2d.navigation.actions.Pan")], v2);
var d3 = v2;

// node_modules/@arcgis/core/views/navigation/MomentumEstimator.js
var s = class {
  constructor(t7 = 2.5, i3 = 0.01, s3 = 0.95, l3 = 12) {
    this._minimumInitialVelocity = t7, this._stopVelocity = i3, this._friction = s3, this._maxVelocity = l3, this.enabled = true, this.value = new t5(0.8), this.time = new t5(0.3);
  }
  add(t7, e4) {
    if (this.enabled && null != e4) {
      if (this.time.hasLastValue()) {
        if (this.time.computeDelta(e4) < 0.01) return;
        if (this.value.hasFilteredDelta()) {
          const e5 = this.value.computeDelta(t7);
          this.value.filteredDelta * e5 < 0 && this.value.reset();
        }
      }
      this.time.update(e4), this.value.update(t7);
    }
  }
  reset() {
    this.value.reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.value.hasFilteredDelta() || !this.time.hasFilteredDelta()) return null;
    let e4 = this.value.filteredDelta / this.time.filteredDelta;
    return e4 = r2(e4, -this._maxVelocity, this._maxVelocity), Math.abs(e4) < this._minimumInitialVelocity ? null : this.createMomentum(e4, this._stopVelocity, this._friction);
  }
  createMomentum(t7, e4, s3) {
    return new t6(t7, e4, s3);
  }
};

// node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js
var a4 = class extends s {
  constructor(t7 = 3, a5 = 0.01, s3 = 0.95, o4 = 12) {
    super(t7, a5, s3, o4);
  }
  add(t7, a5) {
    const s3 = this.value.lastValue;
    if (null != s3) {
      let a6 = t7 - s3;
      for (; a6 > Math.PI; ) a6 -= 2 * Math.PI;
      for (; a6 < -Math.PI; ) a6 += 2 * Math.PI;
      t7 = s3 + a6;
    }
    super.add(t7, a5);
  }
};

// node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js
var r12 = class extends t6 {
  constructor(e4, t7, r13) {
    super(e4, t7, r13);
  }
  value(e4) {
    const t7 = super.value(e4);
    return Math.exp(t7);
  }
  valueDelta(e4, t7) {
    const r13 = super.value(e4), s3 = super.value(e4 + t7) - r13;
    return Math.exp(s3);
  }
};
var s2 = class extends s {
  constructor(e4 = 2.5, t7 = 0.01, r13 = 0.95, s3 = 12) {
    super(e4, t7, r13, s3);
  }
  add(e4, t7) {
    super.add(Math.log(e4), t7);
  }
  createMomentum(e4, t7, s3) {
    return new r12(e4, t7, s3);
  }
};

// node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js
var _3 = class extends g {
  constructor(t7) {
    super(t7), this._animationTime = 0, this._momentumFinished = false, this._previousAngle = 0, this._previousRadius = 0, this._previousCenter = null, this._rotationMomentumEstimator = new a4(0.6, 0.15, 0.95), this._rotationDirection = 1, this._startAngle = 0, this._startRadius = 0, this._updateTimestamp = null, this._zoomDirection = 1, this._zoomMomentumEstimator = new s2(), this._zoomOnly = null, this.viewpoint = new m2({ targetGeometry: new j(), scale: 0, rotation: 0 }), this.zoomMomentum = null, this.rotateMomentum = null, this.addHandles(p(() => this._momentumFinished, () => this.navigation.stop()));
  }
  begin(t7, o4) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = o4.angle, this._previousRadius = this._startRadius = o4.radius, this._previousCenter = o4.center, this._updateTimestamp = null, t7.constraints.rotationEnabled && this.addToRotateEstimator(0, o4.timestamp), this.addToZoomEstimator(o4, 1);
  }
  update(t7, o4) {
    null === this._updateTimestamp && (this._updateTimestamp = o4.timestamp);
    const i3 = o4.angle, s3 = o4.radius, e4 = o4.center, n6 = Math.abs(180 * (i3 - this._startAngle) / Math.PI), m4 = Math.abs(s3 - this._startRadius), a5 = this._startRadius / s3;
    if (this._previousRadius && this._previousCenter) {
      const r13 = s3 / this._previousRadius;
      let h5 = 180 * (i3 - this._previousAngle) / Math.PI;
      this._rotationDirection = h5 >= 0 ? 1 : -1, this._zoomDirection = r13 >= 1 ? 1 : -1, t7.constraints.rotationEnabled ? (null === this._zoomOnly && o4.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = m4 - n6 > 0), null === this._zoomOnly || this._zoomOnly ? h5 = 0 : this.addToRotateEstimator(i3 - this._startAngle, o4.timestamp)) : h5 = 0, this.addToZoomEstimator(o4, a5), this.navigation.setViewpoint([e4.x, e4.y], 1 / r13, h5, [this._previousCenter.x - e4.x, e4.y - this._previousCenter.y]);
    }
    this._previousAngle = i3, this._previousRadius = s3, this._previousCenter = e4;
  }
  end(t7) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t7), this.navigation.end();
  }
  addToRotateEstimator(t7, o4) {
    this._rotationMomentumEstimator.add(t7, 1e-3 * o4);
  }
  addToZoomEstimator(t7, o4) {
    this._zoomMomentumEstimator.add(o4, 1e-3 * t7.timestamp);
  }
  canZoomIn(t7) {
    const o4 = t7.scale, i3 = t7.constraints.effectiveMaxScale;
    return 0 === i3 || o4 > i3;
  }
  canZoomOut(t7) {
    const o4 = t7.scale, i3 = t7.constraints.effectiveMinScale;
    return 0 === i3 || o4 < i3;
  }
  onAnimationUpdate(t7) {
    var _a;
    (_a = this.navigation.animationManager) == null ? void 0 : _a.animateContinuous(t7.viewpoint, (o4, i3) => {
      const s3 = !this.canZoomIn(t7) && this._zoomDirection > 1 || !this.canZoomOut(t7) && this._zoomDirection < 1, e4 = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), n6 = s3 || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), h5 = 1e-3 * i3;
      if (this._momentumFinished = e4 && n6, !this._momentumFinished) {
        const i4 = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, h5)) * this._rotationDirection * 180 / Math.PI : 0;
        let s4 = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, h5)) : 1;
        const e5 = n2(), n7 = n2();
        if (this._previousCenter) {
          o2(e5, this._previousCenter.x, this._previousCenter.y), rt(n7, t7.size, t7.padding), u2(e5, e5, n7);
          const { constraints: r13, scale: h6 } = t7, p2 = h6 * s4;
          s4 < 1 && !r13.canZoomInTo(p2) ? (s4 = h6 / r13.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : s4 > 1 && !r13.canZoomOutTo(p2) && (s4 = h6 / r13.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), Gt(o4, t7.viewpoint, s4, i4, e5, t7.size), t7.constraints.constrainByGeometry(o4);
        }
      }
      this._animationTime += h5;
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
r([m()], _3.prototype, "_momentumFinished", void 0), r([m()], _3.prototype, "viewpoint", void 0), r([m()], _3.prototype, "navigation", void 0), _3 = r([a("esri.views.2d.navigation.actions.Pinch")], _3);
var d4 = _3;

// node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js
var d5 = n2();
var g5 = n2();
var f4 = class extends g {
  constructor(t7) {
    super(t7), this._previousCenter = n2(), this.viewpoint = new m2({ targetGeometry: new j(), scale: 0, rotation: 0 });
  }
  begin(t7, e4) {
    this.navigation.begin(), o2(this._previousCenter, e4.center.x, e4.center.y);
  }
  update(t7, e4) {
    const { state: { size: o4, padding: r13 } } = t7;
    o2(d5, e4.center.x, e4.center.y), $(g5, o4, r13), t7.viewpoint = bt(this.viewpoint, t7.state.paddedViewState.viewpoint, pt(g5, this._previousCenter, d5)), r5(this._previousCenter, d5);
  }
  end() {
    this.navigation.end();
  }
};
r([m()], f4.prototype, "viewpoint", void 0), r([m()], f4.prototype, "navigation", void 0), f4 = r([a("esri.views.2d.navigation.actions.Rotate")], f4);
var j3 = f4;

// node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js
var v3 = 10;
var g6 = 1;
var d6 = new m2({ targetGeometry: new j() });
var _4 = [0, 0];
var T = 250;
var f5 = class extends g {
  constructor(t7) {
    super(t7), this._endTimer = null, this._lastEventTimestamp = null, this.animationManager = null, this.interacting = false;
  }
  initialize() {
    this.pan = new d3({ navigation: this }), this.rotate = new j3({ navigation: this }), this.pinch = new d4({ navigation: this }), this.zoomBox = new c3({ view: this.view, navigation: this });
  }
  destroy() {
    this.pan = u(this.pan), this.rotate = u(this.rotate), this.pinch = u(this.pinch), this.zoomBox = u(this.zoomBox), this.animationManager = null;
  }
  begin() {
    this.stop(), this._set("interacting", true);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(T);
  }
  async zoom(t7, i3 = this._getDefaultAnchor()) {
    if (this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs) return t7 < 1 ? this.zoomIn(i3) : this.zoomOut(i3);
    this.setViewpoint(i3, t7, 0, [0, 0]);
  }
  async zoomIn(t7) {
    const i3 = this.view, o4 = i3.constraints.snapToNextScale(i3.scale);
    return this._zoomToScale(o4, t7);
  }
  async zoomOut(t7) {
    const i3 = this.view, o4 = i3.constraints.snapToPreviousScale(i3.scale);
    return this._zoomToScale(o4, t7);
  }
  setViewpoint(t7, i3, o4, n6) {
    this.begin(), this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t7, i3, o4, n6), this.end();
  }
  setViewpointImmediate(t7, i3 = 0, o4 = [0, 0], n6 = this._getDefaultAnchor()) {
    this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n6, t7, i3, o4);
  }
  continuousRotateClockwise() {
    var _a;
    const t7 = this.view.viewpoint;
    (_a = this.animationManager) == null ? void 0 : _a.animateContinuous(t7, (t8) => {
      bt(t8, t8, -1);
    });
  }
  continuousRotateCounterclockwise() {
    var _a;
    const t7 = this.view.viewpoint;
    (_a = this.animationManager) == null ? void 0 : _a.animateContinuous(t7, (t8) => {
      bt(t8, t8, g6);
    });
  }
  resetRotation() {
    this.view.constraints.rotationEnabled && (this.view.rotation = 0);
  }
  continuousPanLeft() {
    this._continuousPan([-10, 0]);
  }
  continuousPanRight() {
    this._continuousPan([v3, 0]);
  }
  continuousPanUp() {
    this._continuousPan([0, v3]);
  }
  continuousPanDown() {
    this._continuousPan([0, -10]);
  }
  continuousPanVector({ x: t7, y: i3 }) {
    this._continuousPan([t7 * v3, i3 * v3]);
  }
  stop() {
    var _a;
    this.pan.stopMomentumNavigation(), (_a = this.animationManager) == null ? void 0 : _a.stop(), this.end(), null !== this._endTimer && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", false));
  }
  _continuousPan(t7) {
    var _a;
    const i3 = this.view.viewpoint;
    (_a = this.animationManager) == null ? void 0 : _a.animateContinuous(i3, (i4) => {
      kt(i4, i4, t7), this.view.constraints.constrainByGeometry(i4);
    });
  }
  _startTimer(t7) {
    return null !== this._endTimer || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const t8 = performance.now() - (this._lastEventTimestamp ?? 0);
      t8 < T ? this._endTimer = this._startTimer(t8) : this._set("interacting", false);
    }, t7)), this._endTimer;
  }
  _getDefaultAnchor() {
    const { size: t7, padding: { left: i3, right: o4, top: n6, bottom: e4 } } = this.view;
    return _4[0] = 0.5 * (t7[0] - o4 + i3), _4[1] = 0.5 * (t7[1] - e4 + n6), _4;
  }
  async _zoomToScale(t7, i3 = this._getDefaultAnchor()) {
    const { view: o4 } = this, { constraints: n6, scale: e4, viewpoint: s3, size: a5, padding: r13 } = o4, c5 = n6.canZoomInTo(t7), p2 = n6.canZoomOutTo(t7);
    if (!(t7 < e4 && !c5 || t7 > e4 && !p2)) return Rt(d6, s3, t7 / e4, 0, i3, a5, r13), n6.constrainByGeometry(d6), o4.goTo(d6, { animate: true, animationMode: "always", duration: r6(), pickClosestTarget: false });
  }
  _scaleRotateTranslateViewpoint(t7, i3, o4, n6, e4) {
    const { view: s3 } = this, { size: a5, padding: r13, constraints: h5, scale: p2, viewpoint: u4 } = s3, l3 = p2 * o4, w2 = h5.canZoomInTo(l3), v4 = h5.canZoomOutTo(l3);
    return (o4 < 1 && !w2 || o4 > 1 && !v4) && (o4 = 1), kt(u4, u4, e4), Rt(t7, u4, o4, n6, i3, a5, r13), h5.constrainByGeometry(t7);
  }
};
r([m()], f5.prototype, "animationManager", void 0), r([m({ type: Boolean, readOnly: true })], f5.prototype, "interacting", void 0), r([m()], f5.prototype, "pan", void 0), r([m()], f5.prototype, "pinch", void 0), r([m()], f5.prototype, "rotate", void 0), r([m()], f5.prototype, "view", void 0), r([m()], f5.prototype, "zoomBox", void 0), f5 = r([a("esri.views.2d.navigation.MapViewNavigation")], f5);
var y = f5;

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/MagnifierShader.js
var T2 = class extends C2 {
};
r([h(0, C)], T2.prototype, "position", void 0);
var C3 = class extends v {
};
var j4 = class extends P {
};
r([g3(U)], j4.prototype, "readbackTexture", void 0), r([g3(U)], j4.prototype, "maskTexture", void 0), r([g3(U)], j4.prototype, "overlayTexture", void 0), r([g3(Y)], j4.prototype, "background", void 0), r([g3(Y)], j4.prototype, "drawPos", void 0), r([g3(_2)], j4.prototype, "maskEnabled", void 0), r([g3(_2)], j4.prototype, "overlayEnabled", void 0);
var E3 = class extends j2 {
  constructor() {
    super(...arguments), this.type = "MagnifierShader";
  }
  vertex(t7) {
    const o4 = t7.position, e4 = t7.position.subtract(new C(0.5)).multiply(this.config.drawPos.zw), r13 = this.config.drawPos.xy.add(e4);
    return { glPosition: new Y(r13, 0, 1), texCoord: o4 };
  }
  fragment(t7) {
    let o4 = pn(this.config.readbackTexture, P2(t7.texCoord));
    o4 = o4.add(new _2(1).subtract(o4.a)).multiply(this.config.background);
    const e4 = zt(Ut(this.config.maskEnabled, new _2(1)), pn(this.config.maskTexture, t7.texCoord).a, new _2(1));
    o4 = o4.multiply(e4);
    const r13 = zt(Ut(this.config.overlayEnabled, new _2(1)), pn(this.config.overlayTexture, t7.texCoord), new Y(0)), n6 = new w();
    return n6.fragColor = r13.add(new _2(1).subtract(r13.a).multiply(o4)), n6;
  }
};
function P2(t7) {
  const o4 = t7.multiply(new C(2)).subtract(1);
  return zt(Ut(o4.x, new _2(0)).and(Ut(o4.y, new _2(0))), new C(0.5), () => {
    const t8 = ee(o4.y, o4.x), e4 = Le(Me(o4), new _2(J)), r13 = new C(ie(t8), nn(t8));
    return e4.multiply(r13).multiply(new C(0.5)).add(new _2(0.5));
  });
}
r([g3(j4)], E3.prototype, "config", void 0), r([e(0, m3(T2))], E3.prototype, "vertex", null), r([e(0, m3(C3))], E3.prototype, "fragment", null);

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/GridShader.js
var G = class extends C2 {
};
r([h(0, C)], G.prototype, "position", void 0);
var S = class extends v {
};
var k = class extends P {
};
r([g3(rt2)], k.prototype, "dvs", void 0);
var M2 = class extends P {
};
r([g3(_2)], M2.prototype, "halfWidth", void 0), r([g3(_2)], M2.prototype, "aaWidth", void 0), r([g3(_2)], M2.prototype, "pxPerCell", void 0), r([g3(Y)], M2.prototype, "minorLineColor", void 0), r([g3(Y)], M2.prototype, "majorLineColor", void 0), r([g3(W)], M2.prototype, "majorLineInterval", void 0);
var _5 = class extends j2 {
  constructor() {
    super(...arguments), this.type = "GridShader";
  }
  vertex(t7) {
    const o4 = t7.position.multiply(2).subtract(1);
    return { gridPos: this.transform.dvs.multiply(new X(o4, 1)).xy, glPosition: new Y(o4, 0, 1) };
  }
  fragment(t7) {
    const o4 = Kt(t7.gridPos), e4 = Ee(o4), r13 = Ue(e4.x, new _2(1).subtract(e4.x)), i3 = Ue(e4.y, new _2(1).subtract(e4.y)), n6 = new C(r13, i3).multiply(this.config.pxPerCell).subtract(this.config.halfWidth), s3 = Ue(n6.x, n6.y), p2 = new _2(1).subtract(cn(new _2(0), this.config.aaWidth, s3)), l3 = new W(Ze(o4.x)), d7 = new W(Ze(o4.y)), c5 = new _2(St(l3, this.config.majorLineInterval)), I2 = new _2(St(d7, this.config.majorLineInterval)), G2 = zt(Ct(n6.x, n6.y), c5, I2), S2 = Yt(Dt(sn(n6.x, this.config.aaWidth), sn(n6.y, this.config.aaWidth)), new _2(0.5)), k2 = Ue(c5, I2), M3 = zt(S2, k2, G2), _6 = _e(this.config.majorLineColor, this.config.minorLineColor, Ue(M3, new _2(1))), q2 = new w();
    return q2.fragColor = _6.multiply(p2), q2;
  }
};
r([g3(k)], _5.prototype, "transform", void 0), r([g3(M2)], _5.prototype, "config", void 0), r([e(0, m3(G))], _5.prototype, "vertex", null), r([e(0, m3(S))], _5.prototype, "fragment", null);

export {
  e2 as e,
  r7 as r,
  D2 as D,
  h2 as h,
  t4 as t,
  r8 as r2,
  n4 as n,
  a3 as a,
  y,
  E3 as E,
  _5 as _
};
//# sourceMappingURL=chunk-TXYI6AAS.js.map
