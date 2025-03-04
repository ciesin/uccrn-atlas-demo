import {
  s
} from "./chunk-IR5AHWR5.js";
import {
  e
} from "./chunk-JQSC2CLC.js";
import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  L,
  M,
  O,
  S,
  T,
  U,
  V,
  a,
  b,
  c,
  d,
  g,
  h,
  i,
  j,
  k,
  l,
  m as m2,
  o,
  p,
  q,
  u,
  v,
  w,
  x,
  y,
  z
} from "./chunk-WXGA2B5U.js";
import {
  m
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/support/FloatArray.js
function n(n2, t = false) {
  return n2 <= m ? t ? new Array(n2).fill(0) : new Array(n2) : new Float32Array(n2);
}
function a2(n2) {
  return (Array.isArray(n2) ? n2.length : n2.byteLength / 8) <= m ? Array.from(n2) : new Float32Array(n2);
}
function e2(r, n2, t) {
  return Array.isArray(r) ? r.slice(n2, n2 + t) : r.subarray(n2, n2 + t);
}

// node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var D2 = class _D {
  constructor(e3, t) {
    this.layout = e3, this.buffer = "number" == typeof t ? new ArrayBuffer(t * e3.stride) : t;
    for (const i2 of e3.fields.keys()) {
      const t2 = e3.fields.get(i2);
      this[i2] = new t2.constructor(this.buffer, t2.offset, this.stride);
    }
  }
  get stride() {
    return this.layout.stride;
  }
  get count() {
    return this.buffer.byteLength / this.stride;
  }
  get byteLength() {
    return this.buffer.byteLength;
  }
  getField(e3, t) {
    const i2 = this[e3];
    return i2 && i2.elementCount === t.ElementCount && i2.elementType === t.ElementType ? i2 : null;
  }
  slice(e3, t) {
    return new _D(this.layout, this.buffer.slice(e3 * this.stride, t * this.stride));
  }
  copyFrom(e3, t = 0, i2 = 0, s2 = e3.count) {
    const r = this.stride;
    if (r % 4 == 0) {
      const n2 = new Uint32Array(e3.buffer, t * r, s2 * r / 4);
      new Uint32Array(this.buffer, i2 * r, s2 * r / 4).set(n2);
    } else {
      const n2 = new Uint8Array(e3.buffer, t * r, s2 * r);
      new Uint8Array(this.buffer, i2 * r, s2 * r).set(n2);
    }
    return this;
  }
  get cachedMemory() {
    return this.byteLength;
  }
  dispose() {
  }
};
var G2 = class _G {
  constructor(e3) {
    this._stride = 0, this._lastAligned = 0, this._fields = /* @__PURE__ */ new Map(), e3 && (this._stride = e3.stride, e3.fields.forEach((e4) => this._fields.set(e4[0], { ...e4[1], constructor: N(e4[1].constructor) })));
  }
  freeze() {
    return this;
  }
  vec2f(t, i2) {
    return this._appendField(t, u, i2), this;
  }
  vec2f64(e3, i2) {
    return this._appendField(e3, m2, i2), this;
  }
  vec3f(e3, t) {
    return this._appendField(e3, i, t), this;
  }
  vec3f64(e3, t) {
    return this._appendField(e3, T, t), this;
  }
  vec4f(e3, t) {
    return this._appendField(e3, c, t), this;
  }
  vec4f64(e3, t) {
    return this._appendField(e3, h, t), this;
  }
  mat3f(e3, t) {
    return this._appendField(e3, l, t), this;
  }
  mat3f64(e3, t) {
    return this._appendField(e3, a, t), this;
  }
  mat4f(e3, t) {
    return this._appendField(e3, p, t), this;
  }
  mat4f64(e3, t) {
    return this._appendField(e3, b, t), this;
  }
  vec4u8(e3, t) {
    return this._appendField(e3, x, t), this;
  }
  f32(e3, t) {
    return this._appendField(e3, y, t), this;
  }
  f64(e3, t) {
    return this._appendField(e3, o, t), this;
  }
  u8(e3, t) {
    return this._appendField(e3, d, t), this;
  }
  u16(e3, t) {
    return this._appendField(e3, g, t), this;
  }
  i8(e3, t) {
    return this._appendField(e3, j, t), this;
  }
  vec2i8(e3, t) {
    return this._appendField(e3, V, t), this;
  }
  vec2i16(e3, t) {
    return this._appendField(e3, q, t), this;
  }
  vec2u8(e3, t) {
    return this._appendField(e3, A, t), this;
  }
  vec4u16(e3, t) {
    return this._appendField(e3, L, t), this;
  }
  u32(e3, t) {
    return this._appendField(e3, B, t), this;
  }
  _appendField(e3, t, i2) {
    if (this._fields.has(e3)) return void s(false, `${e3} already added to vertex buffer layout`);
    const s2 = t.ElementCount * e(t.ElementType), r = this._stride;
    this._stride += s2, this._fields.set(e3, { size: s2, constructor: t, offset: r, optional: i2 });
  }
  createBuffer(e3) {
    return new D2(this, e3);
  }
  createView(e3) {
    return new D2(this, e3);
  }
  clone() {
    const e3 = new _G();
    return e3._stride = this._stride, e3._fields = /* @__PURE__ */ new Map(), this._fields.forEach((t, i2) => e3._fields.set(i2, t)), e3.BufferType = this.BufferType, e3;
  }
  get stride() {
    if (this._lastAligned !== this._fields.size) {
      let e3 = 1;
      this._fields.forEach((t) => e3 = Math.max(e3, e(t.constructor.ElementType))), this._stride = Math.floor((this._stride + e3 - 1) / e3) * e3, this._lastAligned = this._fields.size;
    }
    return this._stride;
  }
  get fields() {
    return this._fields;
  }
};
function H2() {
  return new G2();
}
var I2 = class {
  constructor(e3) {
    this.fields = new Array(), e3.fields.forEach((e4, t) => {
      const i2 = { ...e4, constructor: K(e4.constructor) };
      this.fields.push([t, i2]);
    }), this.stride = e3.stride;
  }
};
var J = [y, u, i, c, l, p, o, m2, T, h, a, b, d, A, O, x, g, w, E, L, B, F, I, U, j, V, M, S, k, q, v, z, C, D, G, H];
function K(e3) {
  return `${e3.ElementType}_${e3.ElementCount}`;
}
function N(e3) {
  return O2.get(e3);
}
var O2 = /* @__PURE__ */ new Map();
J.forEach((e3) => O2.set(K(e3), e3));

export {
  n,
  a2 as a,
  e2 as e,
  G2 as G,
  H2 as H,
  I2 as I
};
//# sourceMappingURL=chunk-FWGIWKNF.js.map
