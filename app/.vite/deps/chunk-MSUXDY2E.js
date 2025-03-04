import {
  f as f2,
  t as t3,
  t2 as t4
} from "./chunk-XFIIM3OH.js";
import {
  n as n5
} from "./chunk-3SEDCXI3.js";
import {
  n as n4,
  s
} from "./chunk-7VHN5LXB.js";
import {
  x
} from "./chunk-XXK557ZF.js";
import {
  E as E2,
  o as o2
} from "./chunk-HABQD3Y4.js";
import {
  t as t2
} from "./chunk-3VWS6Q3L.js";
import {
  t
} from "./chunk-4TJZAUWN.js";
import {
  B,
  Q,
  a as a2
} from "./chunk-TKKZ7DIH.js";
import {
  r as r4
} from "./chunk-LZUCOHH2.js";
import {
  n as n3
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-JXV2GGQH.js";
import {
  a,
  o,
  p,
  u,
  w
} from "./chunk-5AJMZDUM.js";
import {
  A as A2,
  C,
  D,
  E,
  F,
  G,
  I,
  L,
  M,
  N,
  O,
  P,
  R,
  S,
  T,
  U,
  V,
  X,
  Y,
  _,
  f,
  i,
  n as n2,
  r as r3
} from "./chunk-CRKFUUKK.js";
import {
  r as r2
} from "./chunk-JLFSX3JT.js";
import {
  A,
  r2 as r
} from "./chunk-M6FNW7GP.js";
import {
  n
} from "./chunk-5HI5HAKB.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js
var t5 = (e7) => {
  let r6 = "";
  r6 += e7[0].toUpperCase();
  for (let t8 = 1; t8 < e7.length; t8++) {
    const s3 = e7[t8];
    s3 === s3.toUpperCase() ? (r6 += "_", r6 += s3) : r6 += s3.toUpperCase();
  }
  return r6;
};
var s2 = (e7) => {
  const s3 = {};
  for (const r6 in e7) {
    s3[t5(r6)] = e7[r6];
  }
  return n4(s3);
};
var o3 = (r6, t8, o4, a3) => {
  const n8 = r6 + r6.slice(Math.max(0, r6.lastIndexOf("/"))), l = t8 + t8.slice(Math.max(0, t8.lastIndexOf("/"))), p2 = s2(a3);
  return { attributes: o4, shaders: { vertexShader: p2 + n5(`${n8}.vert`), fragmentShader: p2 + n5(`${l}.frag`) } };
};

// node_modules/@arcgis/core/views/webgl/ContextState.js
var h = class {
  constructor() {
    this.blend = false, this.blendColor = { r: 0, g: 0, b: 0, a: 0 }, this.blendFunction = { srcRGB: R.ONE, dstRGB: R.ZERO, srcAlpha: R.ONE, dstAlpha: R.ZERO }, this.blendEquation = { mode: T.ADD, modeAlpha: T.ADD }, this.colorMask = { r: true, g: true, b: true, a: true }, this.faceCulling = false, this.cullFace = N.BACK, this.frontFace = S.CCW, this.scissorTest = false, this.scissorRect = { x: 0, y: 0, width: 0, height: 0 }, this.depthTest = false, this.depthFunction = O.LESS, this.clearDepth = 1, this.depthWrite = true, this.depthRange = { zNear: 0, zFar: 1 }, this.viewport = null, this.stencilTest = false, this.polygonOffsetFill = false, this.polygonOffset = [0, 0], this.stencilFunction = { face: N.FRONT_AND_BACK, func: O.ALWAYS, ref: 0, mask: 1 }, this.clearStencil = 0, this.stencilWriteMask = 1, this.stencilOperation = { face: N.FRONT_AND_BACK, fail: I.KEEP, zFail: I.KEEP, zPass: I.KEEP }, this.clearColor = { r: 0, g: 0, b: 0, a: 0 }, this.program = null, this.vertexBuffer = null, this.indexBuffer = null, this.uniformBuffer = null, this.pixelPackBuffer = null, this.pixelUnpackBuffer = null, this.copyReadBuffer = null, this.copyWriteBuffer = null, this.transformFeedbackBuffer = null, this.uniformBufferBindingPoints = new Array(), this.transformBufferBindingPoints = new Array(), this.readFramebuffer = null, this.drawFramebuffer = null, this.drawBuffers = { defaultFramebuffer: [f.BACK], fbos: /* @__PURE__ */ new WeakMap() }, this.renderbuffer = null, this.activeTexture = 0, this.textureUnitMap = new Array(), this.vertexArrayObject = null;
  }
};

// node_modules/@arcgis/core/views/webgl/AllocationTracer.js
var e2 = class {
  constructor(e7) {
    this._objectType = e7, this._active = /* @__PURE__ */ new Map();
  }
  get _stack() {
    const e7 = new Error().stack.split("\n");
    return e7.shift(), e7.shift(), e7.shift(), e7.join("\n");
  }
  add(e7) {
    this._active.set(e7, new t6(this._stack));
  }
  remove(e7) {
    this._active.delete(e7);
  }
  addReference(e7) {
    const t8 = this._active.get(e7);
    t8 && t8.retains.push(this._stack);
  }
  removeReference(e7) {
    const t8 = this._active.get(e7);
    t8 && t8.releases.push(this._stack);
  }
  resetLog() {
    const e7 = /* @__PURE__ */ new Map();
    let t8 = "";
    this._active.forEach((s4, { usedMemory: r7 }) => {
      e7.has(s4.from) || (e7.set(s4.from, /* @__PURE__ */ new Map()), s4.retains.length > 0 && (t8 += `  First reference count mismatch:
  Retain:
    ${s4.retains.join("\n\n    ")}

  Release:    ${s4.releases.join("\n\n    ")}
`));
      const n8 = e7.get(s4.from);
      n8.set(r7 ?? 0, n8.get(r7 ?? 0) ?? 1);
    }), this._active.clear();
    let s3 = 0;
    const r6 = new Array();
    return e7.forEach((e8, t9) => {
      let n8 = 0;
      e8.forEach((e9, t10) => n8 += e9 * t10), e8.set(-1, n8), s3 += n8, r6.push([t9, e8]);
    }), e7.clear(), r6.sort((e8, t9) => t9[1].get(-1) - e8[1].get(-1)), r6.reduce((e8, [t9, s4]) => {
      const r7 = Math.round(s4.get(-1) / 1024);
      s4.delete(-1);
      return e8 += `  ${r7}KB from ${Array.from(s4.values()).reduce((e9, t10) => e9 + t10, 0)} allocations at ${t9}
`;
    }, `Total ${this._objectType} memory: ${Math.round(s3 / 1024)}KB
${t8}`);
  }
};
var t6 = class {
  constructor(e7) {
    this.from = e7, this.retains = new Array(), this.releases = new Array();
  }
};

// node_modules/@arcgis/core/views/webgl/InstanceCounter.js
var e3 = { RECORD_ALLOCATIONS: false };
var n6 = class {
  constructor() {
    for (this._current = new Array(), this._allocations = e3.RECORD_ALLOCATIONS ? new e2("WebGLObject") : null; this._current.length < V.COUNT; ) this._current.push(0);
  }
  increment(t8, r6, e7 = 1) {
    var _a;
    this._current[t8] += e7, (_a = this._allocations) == null ? void 0 : _a.add(r6);
  }
  decrement(t8, r6, e7 = 1) {
    var _a;
    this._current[t8] -= e7, (_a = this._allocations) == null ? void 0 : _a.remove(r6);
  }
  get current() {
    return this._current;
  }
  get total() {
    return this.current.reduce((t8, e7, n8) => t8 + (n8 < V.UNCOUNTED ? e7 : 0), 0);
  }
  get resourceInformation() {
    var _a;
    let t8 = "";
    if (this.total > 0) {
      t8 += "Live objects:\n";
      for (let e7 = 0; e7 < V.COUNT; ++e7) {
        const n8 = this._current[e7];
        n8 > 0 && (t8 += `${V[e7]}: ${n8}
`);
      }
    }
    return t8 += (_a = this._allocations) == null ? void 0 : _a.resetLog(), t8;
  }
};

// node_modules/@arcgis/core/views/webgl/Parameters.js
var e4 = class {
  constructor(e7, t8, r6) {
    const a3 = t8.textureFilterAnisotropic, m = r6.maxAnisotropy ?? 1 / 0;
    this.versionString = e7.getParameter(e7.VERSION), this.maxVertexTextureImageUnits = e7.getParameter(e7.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxVertexAttributes = e7.getParameter(e7.MAX_VERTEX_ATTRIBS), this.maxMaxAnisotropy = a3 ? Math.min(e7.getParameter(a3.MAX_TEXTURE_MAX_ANISOTROPY), m) : 1, this.maxTextureImageUnits = e7.getParameter(e7.MAX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = e7.getParameter(e7.MAX_TEXTURE_SIZE), this.maxRenderbufferSize = e7.getParameter(e7.MAX_RENDERBUFFER_SIZE), this.maxViewportDims = e7.getParameter(e7.MAX_VIEWPORT_DIMS), this.maxUniformBufferBindings = e7.getParameter(e7.MAX_UNIFORM_BUFFER_BINDINGS), this.maxVertexUniformBlocks = e7.getParameter(e7.MAX_VERTEX_UNIFORM_BLOCKS), this.maxFragmentUniformBlocks = e7.getParameter(e7.MAX_FRAGMENT_UNIFORM_BLOCKS), this.maxUniformBlockSize = e7.getParameter(e7.MAX_UNIFORM_BLOCK_SIZE), this.uniformBufferOffsetAlignment = e7.getParameter(e7.UNIFORM_BUFFER_OFFSET_ALIGNMENT), this.maxArrayTextureLayers = e7.getParameter(e7.MAX_ARRAY_TEXTURE_LAYERS), this.maxSamples = e7.getParameter(e7.MAX_SAMPLES), this.maxDrawBuffers = e7.getParameter(e7.MAX_DRAW_BUFFERS);
  }
};

// node_modules/@arcgis/core/views/webgl/AppleAmdDriverHelper.js
var n7 = class _n {
  constructor(r6) {
    this._rctx = r6, this._indexBuffer = this._createIndexbuffer(), this._program = this._createHelperProgram();
  }
  static getShaderSources() {
    return { vertex: "#version 300 es\n    precision highp float;\n\n    void main(void) {\n      gl_Position = vec4(0.0, 0.0, float(gl_VertexID)-2.0, 1.0);\n    }", fragment: "#version 300 es\n    precision highp float;\n\n    out vec4 fragColor;\n\n    void main(void) {\n      fragColor = vec4(0.0, 0.0, 0.0, 1.0);\n    }" };
  }
  _createHelperProgram() {
    const r6 = _n.getShaderSources();
    return this._rctx.programCache.acquire(r6.vertex, r6.fragment, /* @__PURE__ */ new Map([]));
  }
  _createIndexbuffer() {
    return E2.createIndex(this._rctx, F.STATIC_DRAW, new Uint32Array([0]));
  }
  run() {
    this._program.compiled && this._indexBuffer && (this._rctx.bindVAO(null), this._rctx.useProgram(this._program), this._rctx.bindBuffer(this._indexBuffer, A2.ELEMENT_ARRAY_BUFFER), this._rctx.drawElements(E.POINTS, 1, C.UNSIGNED_INT, 0));
  }
  dispose() {
    this._program.dispose(), this._indexBuffer.dispose();
  }
  get test() {
  }
};

// node_modules/@arcgis/core/views/webgl/testAppleAmdDrawArrays.js
var d = class extends t4 {
  constructor(e7) {
    super(), this._rctx = e7, this._helperProgram = null, has("mac") && has("chrome") && (this._program = this._prepareProgram(), this._helperProgram = this._prepareHelperProgram());
  }
  dispose() {
    var _a;
    super.dispose(), (_a = this._helperProgram) == null ? void 0 : _a.dispose(), this._helperProgram = null;
  }
  _test(e7) {
    const r6 = this._rctx, f3 = r6.getBoundFramebufferObject(), { x: d2, y: h2, width: u2, height: _5 } = r6.getViewport();
    r6.resetState();
    const v = new p(1);
    v.wrapMode = D.CLAMP_TO_EDGE, v.samplingMode = L.NEAREST;
    const P2 = new x(r6, v), w2 = E2.createIndex(this._rctx, F.STATIC_DRAW, new Uint8Array([0]));
    r6.bindFramebuffer(P2), r6.setViewport(0, 0, 1, 1), r6.useProgram(this._helperProgram), r6.bindBuffer(w2, A2.ELEMENT_ARRAY_BUFFER), r6.drawElements(E.POINTS, 1, C.UNSIGNED_BYTE, 0), r6.useProgram(e7), r6.bindVAO(null), r6.drawArrays(E.TRIANGLES, 0, 258);
    const x2 = new Uint8Array(4);
    return P2.readPixels(0, 0, 1, 1, G.RGBA, U.UNSIGNED_BYTE, x2), r6.setViewport(d2, h2, u2, _5), r6.bindFramebuffer(f3), P2.dispose(), w2.dispose(), 255 === x2[0];
  }
  _prepareProgram() {
    const r6 = 85, t8 = `#version 300 es
    precision highp float;

    out float triangleId;

    const vec3 triangleVertices[3] = vec3[3](vec3(-0.5, -0.5, 0.0), vec3(0.5, -0.5, 0.0), vec3(0.0, 0.5, 0.0));

    void main(void) {
      triangleId = floor(float(gl_VertexID)/3.0);

      vec3 position = triangleVertices[gl_VertexID % 3];
      float offset = triangleId / ${n3.float(r6)};
      position.z = 0.5 - offset;

      gl_Position = vec4(position, 1.0);
    }
    `, o4 = `#version 300 es
    precision highp float;

    in float triangleId;

    out vec4 fragColor;

    void main(void) {
      fragColor = triangleId == ${n3.float(r6)} ? vec4(0.0, 1.0, 0.0, 1.0) : vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;
    return this._rctx.programCache.acquire(t8, o4, /* @__PURE__ */ new Map([]));
  }
  _prepareHelperProgram() {
    const e7 = n7.getShaderSources();
    return this._rctx.programCache.acquire(e7.vertex, e7.fragment, /* @__PURE__ */ new Map([]));
  }
};

// node_modules/@arcgis/core/views/webgl/testDoublePrecisionArithmetic.js
var _2 = class extends t4 {
  constructor(e7) {
    super(), this._rctx = e7, this._program = A3(this._rctx, false), this._obfuscated = A3(this._rctx, true);
  }
  dispose() {
    super.dispose(), this._obfuscated = r(this._obfuscated);
  }
  _test(e7) {
    if (has("force-double-precision-obfuscation")) return true;
    if (null == this._obfuscated) return false;
    const n8 = this._rctx, t8 = n8.getBoundFramebufferObject(), { x: r6, y: o4, width: i2, height: s3 } = n8.getViewport(), c = this._runProgram(e7), a3 = this._runProgram(this._obfuscated);
    return n8.setViewport(r6, o4, i2, s3), n8.bindFramebuffer(t8), 0 !== c && (0 === a3 || c / a3 > 5);
  }
  _runProgram(n8) {
    const d2 = this._rctx;
    d2.resetState();
    const _5 = new p(1);
    _5.wrapMode = D.CLAMP_TO_EDGE, _5.samplingMode = L.NEAREST;
    const A4 = new x(d2, _5), b2 = E2.createVertex(d2, F.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), g = new o2(d2, /* @__PURE__ */ new Map([["position", 0]]), /* @__PURE__ */ new Map([["geometry", [new t2("position", 2, C.UNSIGNED_SHORT, 0, 4)]]]), /* @__PURE__ */ new Map([["geometry", b2]])), B2 = r2(5633261287538229e-9, 2626832878767164e-9, 1.4349880495278358e6), w2 = r2(563327146742708e-8, 2.6268736381334523e6, 1434963231608387e-9), F2 = new Float32Array(6);
    t(B2, F2, 3);
    const O2 = new Float32Array(6);
    t(w2, O2, 3), d2.useProgram(n8), n8.setUniform3f("u_highA", F2[0], F2[2], F2[4]), n8.setUniform3f("u_lowA", F2[1], F2[3], F2[5]), n8.setUniform3f("u_highB", O2[0], O2[2], O2[4]), n8.setUniform3f("u_lowB", O2[1], O2[3], O2[5]), d2.bindFramebuffer(A4), d2.setViewport(0, 0, 1, 1), d2.bindVAO(g), d2.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const E4 = new Uint8Array(4);
    A4.readPixels(0, 0, 1, 1, G.RGBA, U.UNSIGNED_BYTE, E4), g.dispose(), A4.dispose();
    const x2 = (B2[2] - w2[2]) / 25, I2 = r4(E4);
    return Math.abs(x2 - I2);
  }
};
function A3(e7, n8) {
  const t8 = `

  precision highp float;

  attribute vec2 position;

  uniform vec3 u_highA;
  uniform vec3 u_lowA;
  uniform vec3 u_highB;
  uniform vec3 u_lowB;

  varying vec4 v_color;

  ${n8 ? "#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION" : ""}

  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION

  vec3 dpPlusFrc(vec3 a, vec3 b) {
    return mix(a, a + b, vec3(notEqual(b, vec3(0))));
  }

  vec3 dpMinusFrc(vec3 a, vec3 b) {
    return mix(vec3(0), a - b, vec3(notEqual(a, b)));
  }

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = dpPlusFrc(hiA, hiB);
    vec3 e = dpMinusFrc(t1, hiA);
    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
    return t1 + t2;
  }

  #else

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = hiA + hiB;
    vec3 e = t1 - hiA;
    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
    return t1 + t2;
  }

  #endif

  const float MAX_RGBA_FLOAT =
    255.0 / 256.0 +
    255.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 / 256.0;

  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

  vec4 float2rgba(const float value) {
    // Make sure value is in the domain we can represent
    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

    // Decompose value in 32bit fixed point parts represented as
    // uint8 rgba components. Decomposition uses the fractional part after multiplying
    // by a power of 256 (this removes the bits that are represented in the previous
    // component) and then converts the fractional part to 8bits.
    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

    // Convert uint8 values (from 0 to 255) to floating point representation for
    // the shader
    const float toU8AsFloat = 1.0 / 255.0;

    return fixedPointU8 * toU8AsFloat;
  }

  void main() {
    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);

    v_color = float2rgba(val.z / 25.0);

    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
  }
  `, r6 = "\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ";
  return e7.programCache.acquire(t8, r6, /* @__PURE__ */ new Map([["position", 0]]));
}

// node_modules/@arcgis/core/views/webgl/testFloatBufferBlend.js
var b = class extends t4 {
  constructor(e7) {
    var _a, _b2;
    if (super(), this._rctx = e7, !e7.gl) return;
    if (!(((_a = e7.capabilities.colorBufferFloat) == null ? void 0 : _a.textureFloat) && ((_b2 = e7.capabilities.colorBufferFloat) == null ? void 0 : _b2.floatBlend))) return;
    const r6 = "\n    precision highp float;\n    attribute vec2 a_pos;\n\n    void main() {\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ", t8 = "\n     precision highp float;\n\n     void main() {\n      gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n     }\n    ";
    this._program = e7.programCache.acquire(r6, t8, /* @__PURE__ */ new Map([["a_pos", 0]]));
  }
  _test(g) {
    const b2 = this._rctx, d2 = new p(1);
    d2.wrapMode = D.CLAMP_TO_EDGE, d2.dataType = U.FLOAT, d2.internalFormat = P.RGBA32F, d2.samplingMode = L.NEAREST;
    const _5 = new x(b2, d2), w2 = E2.createVertex(b2, F.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), A4 = new o2(b2, /* @__PURE__ */ new Map([["a_pos", 0]]), /* @__PURE__ */ new Map([["geometry", [new t2("a_pos", 2, C.UNSIGNED_SHORT, 0, 4)]]]), /* @__PURE__ */ new Map([["geometry", w2]]));
    b2.gl.getError(), b2.useProgram(g);
    const T2 = b2.getBoundFramebufferObject(), { x: j, y: x2, width: E4, height: h2 } = b2.getViewport();
    b2.bindFramebuffer(_5), b2.setViewport(0, 0, 1, 1), b2.bindVAO(A4), b2.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const F2 = B({ blending: a2 });
    b2.setPipelineState(F2), b2.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const O2 = b2.gl.getError();
    return b2.setViewport(j, x2, E4, h2), b2.bindFramebuffer(T2), A4.dispose(), _5.dispose(), O2 !== b2.gl.INVALID_OPERATION || (console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."), false);
  }
};

// node_modules/@arcgis/core/views/webgl/WebGLDriverTest.js
var r5 = class {
  constructor(r6) {
    this.rctx = r6, this.floatBufferBlend = new b(r6), this.svgPremultipliesAlpha = new f2(r6), this.doublePrecisionRequiresObfuscation = new _2(r6), this.drawArraysRequiresIndicesTypeReset = new d(r6);
  }
  dispose() {
    this.doublePrecisionRequiresObfuscation.dispose(), this.svgPremultipliesAlpha.dispose(), this.floatBufferBlend.dispose(), this.drawArraysRequiresIndicesTypeReset.dispose();
  }
};

// node_modules/@arcgis/core/views/webgl/capabilities/load.js
function _3(_5, E4) {
  if (E4.compressedTextureETC) return null;
  const R3 = _5.getExtension("WEBGL_compressed_texture_etc");
  return R3 ? { COMPRESSED_R11_EAC: R3.COMPRESSED_R11_EAC, COMPRESSED_SIGNED_R11_EAC: R3.COMPRESSED_SIGNED_R11_EAC, COMPRESSED_RG11_EAC: R3.COMPRESSED_RG11_EAC, COMPRESSED_SIGNED_RG11_EAC: R3.COMPRESSED_SIGNED_RG11_EAC, COMPRESSED_RGB8_ETC2: R3.COMPRESSED_RGB8_ETC2, COMPRESSED_SRGB8_ETC2: R3.COMPRESSED_SRGB8_ETC2, COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: R3.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: R3.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_RGBA8_ETC2_EAC: R3.COMPRESSED_RGBA8_ETC2_EAC, COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: R3.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC } : null;
}
function E3(_5, E4) {
  if (E4.compressedTextureS3TC) return null;
  const R3 = _5.getExtension("WEBGL_compressed_texture_s3tc");
  return R3 ? { COMPRESSED_RGB_S3TC_DXT1: R3.COMPRESSED_RGB_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT1: R3.COMPRESSED_RGBA_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT3: R3.COMPRESSED_RGBA_S3TC_DXT3_EXT, COMPRESSED_RGBA_S3TC_DXT5: R3.COMPRESSED_RGBA_S3TC_DXT5_EXT } : null;
}
function R2(_5, E4) {
  if (E4.textureFilterAnisotropic) return null;
  const R3 = _5.getExtension("EXT_texture_filter_anisotropic") || _5.getExtension("MOZ_EXT_texture_filter_anisotropic") || _5.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
  return R3 ? { MAX_TEXTURE_MAX_ANISOTROPY: R3.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY: R3.TEXTURE_MAX_ANISOTROPY_EXT } : null;
}
function t7(_5, E4) {
  const R3 = !E4.colorBufferHalfFloat && _5.getExtension("EXT_color_buffer_half_float") || !E4.colorBufferFloat && _5.getExtension("EXT_color_buffer_float"), t8 = !E4.colorBufferFloat && _5.getExtension("EXT_color_buffer_float"), S3 = !E4.floatBlend && !E4.colorBufferFloat && _5.getExtension("EXT_float_blend");
  return R3 || t8 || S3 ? { textureFloat: !!t8, textureHalfFloat: !!R3, floatBlend: !!S3, R16F: _5.R16F, RG16F: _5.RG16F, RGBA16F: _5.RGBA16F, R32F: _5.R32F, RG32F: _5.RG32F, RGBA32F: _5.RGBA32F, R11F_G11F_B10F: _5.R11F_G11F_B10F, RGB16F: _5.RGB16F } : null;
}
function S2(_5, E4, R3, t8, S3) {
  if (t8) return true;
  if (E4[R3]) return false;
  for (const e7 of S3) if (_5.getExtension(e7)) return true;
  return false;
}
function e5(_5, E4) {
  if (E4.textureNorm16) return null;
  const R3 = _5.getExtension("EXT_texture_norm16");
  return R3 ? { R16: R3.R16_EXT, RG16: R3.RG16_EXT, RGB16: R3.RGB16_EXT, RGBA16: R3.RGBA16_EXT, R16_SNORM: R3.R16_SNORM_EXT, RG16_SNORM: R3.RG16_SNORM_EXT, RGB16_SNORM: R3.RGB16_SNORM_EXT, RGBA16_SNORM: R3.RGBA16_SNORM_EXT } : null;
}

// node_modules/@arcgis/core/views/webgl/capabilities/LoseContext.js
function e6(e7, t8) {
  const n8 = t8.loseContext && e7.getExtension("WEBGL_lose_context");
  return n8 ? { loseRenderingContext: () => n8.loseContext() } : null;
}

// node_modules/@arcgis/core/views/webgl/capabilities/Capabilities.js
var _4 = class {
  constructor(e7, t8) {
    this._gl = e7, this._compressedTextureETC = null, this._compressedTextureS3TC = null, this._textureFilterAnisotropic = null, this._colorBufferFloat = null, this._loseContext = null, this._textureNorm16 = null, this._textureFloatLinear = null, this._debugRendererInfo = null, this._disabledExtensions = t8.disabledExtensions || {}, this._debugWebGLExtensions = t8.debugWebGLExtensions || {};
  }
  get compressedTextureETC() {
    return this._compressedTextureETC ?? (this._compressedTextureETC = _3(this._gl, this._disabledExtensions)), this._compressedTextureETC;
  }
  get compressedTextureS3TC() {
    return this._compressedTextureS3TC ?? (this._compressedTextureS3TC = E3(this._gl, this._disabledExtensions)), this._compressedTextureS3TC;
  }
  get textureFilterAnisotropic() {
    return this._textureFilterAnisotropic ?? (this._textureFilterAnisotropic = R2(this._gl, this._disabledExtensions)), this._textureFilterAnisotropic;
  }
  get disjointTimerQuery() {
    return this._disjointTimerQuery ?? (this._disjointTimerQuery = t3(this._gl, this._disabledExtensions)), this._disjointTimerQuery;
  }
  get colorBufferFloat() {
    return this._colorBufferFloat ?? (this._colorBufferFloat = t7(this._gl, this._disabledExtensions)), this._colorBufferFloat;
  }
  get textureNorm16() {
    return this._textureNorm16 ?? (this._textureNorm16 = e5(this._gl, this._disabledExtensions)), this._textureNorm16;
  }
  get textureFloatLinear() {
    return this._textureFloatLinear ?? (this._textureFloatLinear = S2(this._gl, this._disabledExtensions, "textureFloatLinear", false, ["OES_texture_float_linear"])), this._textureFloatLinear;
  }
  get loseContext() {
    return this._loseContext ?? (this._loseContext = e6(this._gl, this._debugWebGLExtensions)), this._loseContext;
  }
  get debugRendererInfo() {
    return this._debugRendererInfo ?? (this._debugRendererInfo = e(this._gl, this._debugWebGLExtensions)), this._debugRendererInfo;
  }
  enable(e7) {
    return this[e7];
  }
};

// node_modules/@arcgis/core/views/webgl/RenderingContext.js
var y = class {
  constructor(t8, e7) {
    this.gl = t8, this.instanceCounter = new n6(), this.programCache = new s(this), this._transformFeedbackRequestInfo = null, this._state = new h(), this._numOfDrawCalls = 0, this._numOfTriangles = 0, this._loadExtensions(), this.configure(e7);
  }
  configure(e7) {
    this._capabilities = new _4(this.gl, e7), this._parameters = new e4(this.gl, this._capabilities, e7), w.TEXTURE_UNIT_FOR_UPDATES = this._parameters.maxTextureImageUnits - 1;
    const s3 = this.gl.getParameter(this.gl.VIEWPORT);
    this._state = new h(), this._state.viewport = { x: s3[0], y: s3[1], width: s3[2], height: s3[3] }, this._stateTracker = new Q({ setBlending: (t8) => {
      if (t8) {
        this.setBlendingEnabled(true), this.setBlendEquationSeparate(t8.opRgb, t8.opAlpha), this.setBlendFunctionSeparate(t8.srcRgb, t8.dstRgb, t8.srcAlpha, t8.dstAlpha);
        const e8 = t8.color;
        this.setBlendColor(e8.r, e8.g, e8.b, e8.a);
      } else this.setBlendingEnabled(false);
    }, setCulling: (t8) => {
      t8 ? (this.setFaceCullingEnabled(true), this.setCullFace(t8.face), this.setFrontFace(t8.mode)) : this.setFaceCullingEnabled(false);
    }, setPolygonOffset: (t8) => {
      t8 ? (this.setPolygonOffsetFillEnabled(true), this.setPolygonOffset(t8.factor, t8.units)) : this.setPolygonOffsetFillEnabled(false);
    }, setDepthTest: (t8) => {
      t8 ? (this.setDepthTestEnabled(true), this.setDepthFunction(t8.func)) : this.setDepthTestEnabled(false);
    }, setStencilTest: (t8) => {
      if (t8) {
        this.setStencilTestEnabled(true);
        const e8 = t8.function;
        this.setStencilFunction(e8.func, e8.ref, e8.mask);
        const s4 = t8.operation;
        this.setStencilOp(s4.fail, s4.zFail, s4.zPass);
      } else this.setStencilTestEnabled(false);
    }, setDepthWrite: (t8) => {
      t8 ? (this.setDepthWriteEnabled(true), this.setDepthRange(t8.zNear, t8.zFar)) : this.setDepthWriteEnabled(false);
    }, setColorWrite: (t8) => {
      t8 ? this.setColorMask(t8.r, t8.g, t8.b, t8.a) : this.setColorMask(false, false, false, false);
    }, setStencilWrite: (t8) => {
      t8 ? this.setStencilWriteMask(t8.mask) : this.setStencilWriteMask(0);
    }, setDrawBuffers: (t8) => {
      if (t8) this.setDrawBuffers(t8.buffers);
      else {
        const { drawFramebuffer: t9 } = this._state;
        null === t9 ? this.setDrawBuffers([f.BACK]) : 0 === t9.colorAttachments.length ? this.setDrawBuffers([f.NONE]) : this.setDrawBuffers([X.COLOR_ATTACHMENT0]);
      }
    } }), this.enforceState(), r(this._driverTest), this._driverTest = new r5(this);
  }
  dispose() {
    r(this._driverTest), this.programCache.dispose(), this.bindVAO(null), this.unbindBuffer(A2.ARRAY_BUFFER), this.unbindBuffer(A2.ELEMENT_ARRAY_BUFFER), this.unbindBuffer(A2.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(A2.PIXEL_PACK_BUFFER), this.unbindBuffer(A2.PIXEL_UNPACK_BUFFER), this.unbindBuffer(A2.COPY_READ_BUFFER), this.unbindBuffer(A2.COPY_WRITE_BUFFER), this._state.textureUnitMap.length = 0, a() && console.log(this.instanceCounter.resourceInformation);
  }
  get driverTest() {
    return this._driverTest;
  }
  get contextAttributes() {
    return this.gl.getContextAttributes();
  }
  get parameters() {
    return this._parameters;
  }
  setPipelineState(t8) {
    this._stateTracker.setPipeline(t8);
  }
  setBlendingEnabled(t8) {
    this._state.blend !== t8 && (true === t8 ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), this._state.blend = t8, this._stateTracker.invalidateBlending());
  }
  externalProgramUpdate() {
    var _a;
    (_a = this._state.program) == null ? void 0 : _a.stop(), this._state.program = null;
  }
  externalTextureUnitUpdate(t8, e7) {
    for (let s3 = 0; s3 < t8.length; ++s3) this._state.textureUnitMap[t8[s3]] = null;
    e7 >= 0 && (this._state.activeTexture = e7);
  }
  externalVertexArrayObjectUpdate() {
    this.gl.bindVertexArray(null), this._state.vertexArrayObject = null, this._state.vertexBuffer = null, this._state.indexBuffer = null;
  }
  externalVertexBufferUpdate() {
    this._state.vertexBuffer = null;
  }
  externalIndexBufferUpdate() {
    this._state.indexBuffer = null;
  }
  setBlendColor(t8, e7, s3, i2) {
    t8 === this._state.blendColor.r && e7 === this._state.blendColor.g && s3 === this._state.blendColor.b && i2 === this._state.blendColor.a || (this.gl.blendColor(t8, e7, s3, i2), this._state.blendColor.r = t8, this._state.blendColor.g = e7, this._state.blendColor.b = s3, this._state.blendColor.a = i2, this._stateTracker.invalidateBlending());
  }
  setBlendFunction(t8, e7) {
    t8 === this._state.blendFunction.srcRGB && e7 === this._state.blendFunction.dstRGB || (this.gl.blendFunc(t8, e7), this._state.blendFunction.srcRGB = t8, this._state.blendFunction.srcAlpha = t8, this._state.blendFunction.dstRGB = e7, this._state.blendFunction.dstAlpha = e7, this._stateTracker.invalidateBlending());
  }
  setBlendFunctionSeparate(t8, e7, s3, i2) {
    this._state.blendFunction.srcRGB === t8 && this._state.blendFunction.srcAlpha === s3 && this._state.blendFunction.dstRGB === e7 && this._state.blendFunction.dstAlpha === i2 || (this.gl.blendFuncSeparate(t8, e7, s3, i2), this._state.blendFunction.srcRGB = t8, this._state.blendFunction.srcAlpha = s3, this._state.blendFunction.dstRGB = e7, this._state.blendFunction.dstAlpha = i2, this._stateTracker.invalidateBlending());
  }
  setBlendEquation(t8) {
    this._state.blendEquation.mode !== t8 && (this.gl.blendEquation(t8), this._state.blendEquation.mode = t8, this._state.blendEquation.modeAlpha = t8, this._stateTracker.invalidateBlending());
  }
  setBlendEquationSeparate(t8, e7) {
    this._state.blendEquation.mode === t8 && this._state.blendEquation.modeAlpha === e7 || (this.gl.blendEquationSeparate(t8, e7), this._state.blendEquation.mode = t8, this._state.blendEquation.modeAlpha = e7, this._stateTracker.invalidateBlending());
  }
  setColorMask(t8, e7, s3, i2) {
    this._state.colorMask.r === t8 && this._state.colorMask.g === e7 && this._state.colorMask.b === s3 && this._state.colorMask.a === i2 || (this.gl.colorMask(t8, e7, s3, i2), this._state.colorMask.r = t8, this._state.colorMask.g = e7, this._state.colorMask.b = s3, this._state.colorMask.a = i2, this._stateTracker.invalidateColorWrite());
  }
  setClearColor(t8, e7, s3, i2) {
    this._state.clearColor.r === t8 && this._state.clearColor.g === e7 && this._state.clearColor.b === s3 && this._state.clearColor.a === i2 || (this.gl.clearColor(t8, e7, s3, i2), this._state.clearColor.r = t8, this._state.clearColor.g = e7, this._state.clearColor.b = s3, this._state.clearColor.a = i2);
  }
  setFaceCullingEnabled(t8) {
    this._state.faceCulling !== t8 && (true === t8 ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this._state.faceCulling = t8, this._stateTracker.invalidateCulling());
  }
  setPolygonOffsetFillEnabled(t8) {
    this._state.polygonOffsetFill !== t8 && (true === t8 ? this.gl.enable(this.gl.POLYGON_OFFSET_FILL) : this.gl.disable(this.gl.POLYGON_OFFSET_FILL), this._state.polygonOffsetFill = t8, this._stateTracker.invalidatePolygonOffset());
  }
  setPolygonOffset(t8, e7) {
    this._state.polygonOffset[0] === t8 && this._state.polygonOffset[1] === e7 || (this._state.polygonOffset[0] = t8, this._state.polygonOffset[1] = e7, this.gl.polygonOffset(t8, e7), this._stateTracker.invalidatePolygonOffset());
  }
  setCullFace(t8) {
    this._state.cullFace !== t8 && (this.gl.cullFace(t8), this._state.cullFace = t8, this._stateTracker.invalidateCulling());
  }
  setFrontFace(t8) {
    this._state.frontFace !== t8 && (this.gl.frontFace(t8), this._state.frontFace = t8, this._stateTracker.invalidateCulling());
  }
  setScissorTestEnabled(t8) {
    this._state.scissorTest !== t8 && (true === t8 ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), this._state.scissorTest = t8);
  }
  setScissorRect(t8, e7, s3, i2) {
    this._state.scissorRect.x === t8 && this._state.scissorRect.y === e7 && this._state.scissorRect.width === s3 && this._state.scissorRect.height === i2 || (this.gl.scissor(t8, e7, s3, i2), this._state.scissorRect.x = t8, this._state.scissorRect.y = e7, this._state.scissorRect.width = s3, this._state.scissorRect.height = i2);
  }
  setDepthTestEnabled(t8) {
    this._state.depthTest !== t8 && (true === t8 ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST), this._state.depthTest = t8, this._stateTracker.invalidateDepthTest());
  }
  setClearDepth(t8) {
    this._state.clearDepth !== t8 && (this.gl.clearDepth(t8), this._state.clearDepth = t8);
  }
  setDepthFunction(t8) {
    this._state.depthFunction !== t8 && (this.gl.depthFunc(t8), this._state.depthFunction = t8, this._stateTracker.invalidateDepthTest());
  }
  setDepthWriteEnabled(t8) {
    this._state.depthWrite !== t8 && (this.gl.depthMask(t8), this._state.depthWrite = t8, this._stateTracker.invalidateDepthWrite());
  }
  setDepthRange(t8, e7) {
    this._state.depthRange.zNear === t8 && this._state.depthRange.zFar === e7 || (this.gl.depthRange(t8, e7), this._state.depthRange.zNear = t8, this._state.depthRange.zFar = e7, this._stateTracker.invalidateDepthWrite());
  }
  setStencilTestEnabled(t8) {
    this._state.stencilTest !== t8 && (true === t8 ? this.gl.enable(this.gl.STENCIL_TEST) : this.gl.disable(this.gl.STENCIL_TEST), this._state.stencilTest = t8, this._stateTracker.invalidateStencilTest());
  }
  setClearStencil(t8) {
    t8 !== this._state.clearStencil && (this.gl.clearStencil(t8), this._state.clearStencil = t8);
  }
  setStencilFunction(t8, e7, s3) {
    this._state.stencilFunction.func === t8 && this._state.stencilFunction.ref === e7 && this._state.stencilFunction.mask === s3 || (this.gl.stencilFunc(t8, e7, s3), this._state.stencilFunction.face = N.FRONT_AND_BACK, this._state.stencilFunction.func = t8, this._state.stencilFunction.ref = e7, this._state.stencilFunction.mask = s3, this._stateTracker.invalidateStencilTest());
  }
  setStencilFunctionSeparate(t8, e7, s3, i2) {
    this._state.stencilFunction.face === t8 && this._state.stencilFunction.func === e7 && this._state.stencilFunction.ref === s3 && this._state.stencilFunction.mask === i2 || (this.gl.stencilFuncSeparate(t8, e7, s3, i2), this._state.stencilFunction.face = t8, this._state.stencilFunction.func = e7, this._state.stencilFunction.ref = s3, this._state.stencilFunction.mask = i2, this._stateTracker.invalidateStencilTest());
  }
  setStencilWriteMask(t8) {
    this._state.stencilWriteMask !== t8 && (this.gl.stencilMask(t8), this._state.stencilWriteMask = t8, this._stateTracker.invalidateStencilWrite());
  }
  setStencilOp(t8, e7, s3) {
    this._state.stencilOperation.face === N.FRONT_AND_BACK && this._state.stencilOperation.fail === t8 && this._state.stencilOperation.zFail === e7 && this._state.stencilOperation.zPass === s3 || (this.gl.stencilOp(t8, e7, s3), this._state.stencilOperation.face = N.FRONT_AND_BACK, this._state.stencilOperation.fail = t8, this._state.stencilOperation.zFail = e7, this._state.stencilOperation.zPass = s3, this._stateTracker.invalidateStencilTest());
  }
  setStencilOpSeparate(t8, e7, s3, i2) {
    this._state.stencilOperation.face === t8 && this._state.stencilOperation.fail === e7 && this._state.stencilOperation.zFail === s3 && this._state.stencilOperation.zPass === i2 || (this.gl.stencilOpSeparate(t8, e7, s3, i2), this._state.stencilOperation.face = t8, this._state.stencilOperation.fail = e7, this._state.stencilOperation.zFail = s3, this._state.stencilOperation.zPass = i2, this._stateTracker.invalidateStencilTest());
  }
  setActiveTexture(t8, e7 = false) {
    const s3 = this._state.activeTexture;
    return t8 >= 0 && (e7 || t8 !== this._state.activeTexture) && (this.gl.activeTexture(Y + t8), this._state.activeTexture = t8), s3;
  }
  setDrawBuffers(t8) {
    const { drawFramebuffer: e7 } = this._state, s3 = null === e7, i2 = s3 ? this._state.drawBuffers.defaultFramebuffer : this._state.drawBuffers.fbos.get(e7);
    if ((i2 == null ? void 0 : i2.length) !== t8.length || !i2.every((e8, s4) => e8 === t8[s4])) if (t8.length > this.parameters.maxDrawBuffers) console.error("Setting more active draw buffers than GL.MAX_DRAW_BUFFERS allows.");
    else {
      if (s3) {
        if (t8.length > 1) return void console.error("The default framebuffer can only have one active draw buffer.");
        if (t8[0] !== f.BACK && t8[0] !== f.NONE) return void console.error("The default framebuffer can only use the constants GL.BACK or GL.NONE as draw buffers.");
      }
      s3 || !t8.includes(f.BACK) ? (this.gl.drawBuffers(t8), s3 ? this._state.drawBuffers.defaultFramebuffer = t8 : this._state.drawBuffers.fbos.set(e7, t8), this._stateTracker.invalidateDrawBuffers()) : console.error("A framebuffer object can only use the constants GL.COLOR_ATTACHMENTi or GL.NONE as draw buffers.");
    }
  }
  clear(t8, e7 = 255) {
    var _a;
    if (t8) {
      if (t8 & _.COLOR) {
        const t9 = (_a = this._state.drawFramebuffer) == null ? void 0 : _a.colorAttachments;
        t9 && this.setDrawBuffers(t9), this.setColorMask(true, true, true, true);
      }
      t8 & _.DEPTH && this.setDepthWriteEnabled(true), t8 & _.STENCIL && this.setStencilWriteMask(e7), this.gl.clear(t8);
    }
  }
  clearFramebuffer(t8, e7 = false, s3 = false) {
    let i2 = 0;
    if (t8) {
      const e8 = 1e-13, s4 = Math.max(e8, t8[3]);
      this.setClearColor(t8[0], t8[1], t8[2], s4), i2 |= _.COLOR;
    }
    e7 && (i2 |= _.DEPTH), false === s3 ? s3 = 0 : (true === s3 && (s3 = 255), i2 |= _.STENCIL), i2 && this.clear(i2, s3);
  }
  drawArrays(t8, e7, s3) {
    var _a, _b;
    if (this._transformFeedbackRequestInfo) {
      if (t8 !== this._transformFeedbackRequestInfo.primitiveType) throw new Error("DrawArrays called during transform feedback, but primitiveType does not match that of the current transform feedback request");
      if (null == ((_a = this._state.program) == null ? void 0 : _a.hasTransformFeedbackVaryings)) throw new Error("DrawArrays called during transform feedback, but the shader program was not linked with a transform feedback varying");
    }
    if (a()) {
      this._numOfDrawCalls++, this._numOfTriangles += D2(t8, s3);
      const e8 = this._state.textureUnitMap;
      for (let t9 = 0; t9 < e8.length; t9++) {
        const s4 = e8[t9];
        if (null != s4 && s4 === ((_b = this._state.drawFramebuffer) == null ? void 0 : _b.colorTexture)) throw new Error(`Detected readWrite. Texture already bound at index ${t9}`);
      }
    }
    this.gl.drawArrays(t8, e7, s3), u(this.gl);
  }
  drawArraysInstanced(t8, e7, s3, i2) {
    this.gl.drawArraysInstanced(t8, e7, s3, i2), u(this.gl);
  }
  drawElements(t8, e7, s3, a3) {
    if (this._transformFeedbackRequestInfo) throw new Error("Cannot called drawElements during a transform feedback request");
    if (a() && (this._numOfDrawCalls++, this._numOfTriangles += D2(t8, e7)), this.gl.drawElements(t8, e7, s3, a3), a()) {
      const i2 = o(this);
      if (i2) {
        const r6 = this.getBoundVAO(), n8 = r6 == null ? void 0 : r6.indexBuffer, l = r6 == null ? void 0 : r6.vertexBuffers, h2 = { indexBuffer: n8, vertexBuffers: l }, f3 = { mode: t8, count: e7, type: s3, offset: a3 }, o4 = (n8 == null ? void 0 : n8.size) ?? 0, u2 = a3 + e7, c = o4 < u2 ? `. Buffer is too small. Attempted to draw index ${u2} of ${o4}` : "";
        console.error(`drawElements: ${i2}${c}`, { args: f3, vao: h2 });
      }
    }
  }
  drawElementsInstanced(t8, e7, s3, i2, r6) {
    this.gl.drawElementsInstanced(t8, e7, s3, i2, r6), u(this.gl);
  }
  logInfo() {
    a() && console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`);
  }
  resetInfo() {
    a() && (this._numOfDrawCalls = 0, this._numOfTriangles = 0);
  }
  get capabilities() {
    return this._capabilities;
  }
  setViewport(t8, e7, s3, i2) {
    s3 = Math.max(Math.round(s3), 1), i2 = Math.max(Math.round(i2), 1);
    const a3 = this._state.viewport;
    a3.x === t8 && a3.y === e7 && a3.width === s3 && a3.height === i2 || (a3.x = t8, a3.y = e7, a3.width = s3, a3.height = i2, this.gl.viewport(t8, e7, s3, i2));
  }
  setViewport4fv(t8) {
    this.setViewport(t8[0], t8[1], t8[2], t8[3]);
  }
  restoreViewport({ x: t8, y: e7, width: s3, height: i2 }) {
    this.setViewport(t8, e7, s3, i2);
  }
  getViewport() {
    const t8 = this._state.viewport;
    return { x: t8.x, y: t8.y, width: t8.width, height: t8.height };
  }
  useProgram(t8) {
    var _a;
    this._state.program !== t8 && ((_a = this._state.program) == null ? void 0 : _a.stop(), this._state.program = t8, this.gl.useProgram((t8 == null ? void 0 : t8.glName) ?? null));
  }
  bindTexture(t8, e7, s3 = false) {
    (e7 >= this.parameters.maxTextureImageUnits || e7 < 0) && console.error("Input texture unit is out of range of available units!");
    const i2 = this._state.textureUnitMap[e7];
    return null == (t8 == null ? void 0 : t8.glName) ? (null != i2 && (this.setActiveTexture(e7, s3), this.gl.bindTexture(i2.descriptor.target, null)), this._state.textureUnitMap[e7] = null, i2) : s3 || i2 !== t8 ? (this.setActiveTexture(e7, s3), this.gl.bindTexture(t8.descriptor.target, t8.glName), t8.applyChanges(), this._state.textureUnitMap[e7] = t8, i2) : (t8.isDirty && (this.setActiveTexture(e7, s3), t8.applyChanges()), i2);
  }
  unbindTexture(t8) {
    if (null != t8) for (let e7 = 0; e7 < this.parameters.maxTextureImageUnits; e7++) this._state.textureUnitMap[e7] === t8 && (this.bindTexture(null, e7), this._state.textureUnitMap[e7] = null);
  }
  bindFramebuffer(t8, e7 = false) {
    if (e7 || this._state.readFramebuffer !== t8 || this._state.drawFramebuffer !== t8) {
      if (this._stateTracker.invalidateDrawBuffers(), null == t8) return this.gl.bindFramebuffer(n2.FRAMEBUFFER, null), void (this._state.readFramebuffer = this._state.drawFramebuffer = null);
      t8.initializeAndBind(n2.FRAMEBUFFER), this._state.readFramebuffer = t8, this._state.drawFramebuffer = t8;
    }
  }
  bindFramebufferSeparate(t8, e7, s3 = false) {
    const i2 = e7 === n2.READ_FRAMEBUFFER, a3 = i2 ? this._state.readFramebuffer : this._state.drawFramebuffer;
    (s3 || a3 !== t8) && (null == t8 ? this.gl.bindFramebuffer(e7, null) : t8.initializeAndBind(e7), i2 ? this._state.readFramebuffer = t8 ?? null : (this._stateTracker.invalidateDrawBuffers(), this._state.drawFramebuffer = t8 ?? null));
  }
  blitFramebuffer(t8, e7, s3 = 0, i2 = 0, a3 = t8.width, r6 = t8.height, n8 = 0, l = 0, h2 = e7.width, f3 = e7.height, o4 = _.COLOR, d2 = L.NEAREST) {
    this.bindFramebufferSeparate(t8, n2.READ_FRAMEBUFFER), this.bindFramebufferSeparate(e7, n2.DRAW_FRAMEBUFFER), this.gl.blitFramebuffer(s3, i2, a3, r6, n8, l, h2, f3, o4, d2);
  }
  bindBuffer(t8, e7) {
    if (t8) switch (e7 ?? (e7 = t8.bufferType), e7) {
      case A2.ARRAY_BUFFER:
        this._state.vertexBuffer = N2(this.gl, t8, e7, this._state.vertexBuffer);
        break;
      case A2.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = N2(this.gl, t8, e7, this._state.indexBuffer);
        break;
      case A2.UNIFORM_BUFFER:
        this._state.uniformBuffer = N2(this.gl, t8, e7, this._state.uniformBuffer);
        break;
      case A2.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = N2(this.gl, t8, e7, this._state.pixelPackBuffer);
        break;
      case A2.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = N2(this.gl, t8, e7, this._state.pixelUnpackBuffer);
        break;
      case A2.COPY_READ_BUFFER:
        this._state.copyReadBuffer = N2(this.gl, t8, e7, this._state.copyReadBuffer);
        break;
      case A2.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = N2(this.gl, t8, e7, this._state.copyWriteBuffer);
        break;
      case A2.TRANSFORM_FEEDBACK_BUFFER:
        this._state.transformFeedbackBuffer = N2(this.gl, t8, e7, this._state.transformFeedbackBuffer);
    }
  }
  bindRenderbuffer(t8) {
    const e7 = this.gl;
    t8 || (e7.bindRenderbuffer(e7.RENDERBUFFER, null), this._state.renderbuffer = null), this._state.renderbuffer !== t8 && (e7.bindRenderbuffer(e7.RENDERBUFFER, t8.glName), this._state.renderbuffer = t8);
  }
  _getBufferBinding(t8, e7) {
    if (e7 >= this.parameters.maxUniformBufferBindings || e7 < 0) return console.error("Uniform buffer binding point is out of range!"), null;
    const s3 = t8 === A2.UNIFORM_BUFFER ? this._state.uniformBufferBindingPoints : this._state.transformBufferBindingPoints;
    let i2 = s3[e7];
    return null == i2 && (i2 = { buffer: null, offset: 0, size: 0 }, s3[e7] = i2), i2;
  }
  bindBufferBase(t8, e7, s3) {
    const i2 = this._getBufferBinding(t8, e7);
    null != i2 && (i2.buffer === s3 && 0 === i2.offset && 0 === i2.size || (this.gl.bindBufferBase(t8, e7, s3 ? s3.glName : null), i2.buffer = s3, i2.offset = 0, i2.size = 0));
  }
  bindBufferRange(t8, e7, s3, i2, a3) {
    const r6 = this._getBufferBinding(t8, e7);
    null != r6 && (r6.buffer === s3 && r6.offset === i2 && r6.size === a3 || (i2 % this._parameters.uniformBufferOffsetAlignment == 0 ? (this.gl.bindBufferRange(t8, e7, s3.glName, i2, a3), r6.buffer = s3, r6.offset = i2, r6.size = a3) : console.error("Uniform buffer binding offset is not a multiple of the context offset alignment")));
  }
  bindUBO(t8, e7, s3, a3) {
    null != e7 ? (a() && (a3 ?? e7.byteLength) > this._parameters.maxUniformBlockSize && console.error("Attempting to bind more data than the maximum uniform block size"), e7.initialize(), void 0 !== s3 && void 0 !== a3 ? this.bindBufferRange(A2.UNIFORM_BUFFER, t8, e7.buffer, s3, a3) : this.bindBufferBase(A2.UNIFORM_BUFFER, t8, e7.buffer)) : this.bindBufferBase(A2.UNIFORM_BUFFER, t8, null);
  }
  unbindUBO(t8) {
    for (let e7 = 0, s3 = this._state.uniformBufferBindingPoints.length; e7 < s3; e7++) {
      const s4 = this._state.uniformBufferBindingPoints[e7];
      null != s4 && s4.buffer === t8.buffer && this.bindBufferBase(A2.UNIFORM_BUFFER, e7, null);
    }
  }
  unbindBuffer(t8) {
    switch (t8) {
      case A2.ARRAY_BUFFER:
        this._state.vertexBuffer = N2(this.gl, null, t8, this._state.vertexBuffer);
        break;
      case A2.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = N2(this.gl, null, t8, this._state.indexBuffer);
        break;
      case A2.UNIFORM_BUFFER:
        this._state.uniformBuffer = N2(this.gl, null, t8, this._state.uniformBuffer);
        break;
      case A2.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = N2(this.gl, null, t8, this._state.pixelPackBuffer);
        break;
      case A2.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = N2(this.gl, null, t8, this._state.pixelUnpackBuffer);
        break;
      case A2.COPY_READ_BUFFER:
        this._state.copyReadBuffer = N2(this.gl, null, t8, this._state.copyReadBuffer);
        break;
      case A2.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = N2(this.gl, null, t8, this._state.copyWriteBuffer);
    }
  }
  bindVAO(t8 = null) {
    null != t8 ? this._state.vertexArrayObject !== t8 && (t8.bind(), this._state.vertexArrayObject = t8) : this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null);
  }
  bindTransformFeedback(t8) {
    const { gl: e7 } = this;
    e7.bindTransformFeedback(e7.TRANSFORM_FEEDBACK, t8.glName);
  }
  beginTransformFeedback(t8, e7) {
    if (this._transformFeedbackRequestInfo) throw new Error("Already in a transform feedback request");
    const { gl: s3 } = this;
    s3.bindTransformFeedback(s3.TRANSFORM_FEEDBACK, t8.glName), s3.beginTransformFeedback(e7), this._transformFeedbackRequestInfo = { primitiveType: e7 };
  }
  endTransformFeedback() {
    if (!this._transformFeedbackRequestInfo) throw new Error("Not in a transform feedback request");
    const { gl: t8 } = this;
    t8.endTransformFeedback(), t8.bindTransformFeedback(t8.TRANSFORM_FEEDBACK, null), this._transformFeedbackRequestInfo = null;
  }
  async clientWaitAsync(t8 = n(10)) {
    const { gl: i2 } = this, a3 = i2.fenceSync(r3.SYNC_GPU_COMMANDS_COMPLETE, 0);
    if (!a3) throw new Error("Client wait failed, could not create sync object");
    let r6;
    this.instanceCounter.increment(V.Sync, a3), i2.flush();
    do {
      await A(t8), r6 = i2.clientWaitSync(a3, 0, 0);
    } while (r6 === i.TIMEOUT_EXPIRED);
    if (this.instanceCounter.decrement(V.Sync, a3), i2.deleteSync(a3), r6 === i.WAIT_FAILED) throw new Error("Client wait failed");
  }
  getBoundFramebufferObject(t8 = n2.FRAMEBUFFER) {
    return t8 === n2.READ_FRAMEBUFFER ? this._state.readFramebuffer : this._state.drawFramebuffer;
  }
  getBoundVAO() {
    return this._state.vertexArrayObject;
  }
  resetState() {
    this.useProgram(null), this.bindVAO(null), this.bindFramebuffer(null, true), this.unbindBuffer(A2.ARRAY_BUFFER), this.unbindBuffer(A2.ELEMENT_ARRAY_BUFFER), this.unbindBuffer(A2.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(A2.PIXEL_PACK_BUFFER), this.unbindBuffer(A2.PIXEL_UNPACK_BUFFER), this.unbindBuffer(A2.COPY_READ_BUFFER), this.unbindBuffer(A2.COPY_WRITE_BUFFER);
    for (let t8 = 0; t8 < this.parameters.maxTextureImageUnits; ++t8) this.bindTexture(null, t8);
    this.setBlendingEnabled(false), this.setBlendFunction(R.ONE, R.ZERO), this.setBlendEquation(T.ADD), this.setBlendColor(0, 0, 0, 0), this.setFaceCullingEnabled(false), this.setCullFace(N.BACK), this.setFrontFace(S.CCW), this.setPolygonOffsetFillEnabled(false), this.setPolygonOffset(0, 0), this.setScissorTestEnabled(false), this.setScissorRect(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setDepthTestEnabled(false), this.setDepthFunction(O.LESS), this.setDepthRange(0, 1), this.setStencilTestEnabled(false), this.setStencilFunction(O.ALWAYS, 0, 0), this.setStencilOp(I.KEEP, I.KEEP, I.KEEP), this.setClearColor(0, 0, 0, 0), this.setClearDepth(1), this.setClearStencil(0), this.setColorMask(true, true, true, true), this.setStencilWriteMask(4294967295), this.setDepthWriteEnabled(true), this.setDrawBuffers([f.BACK]), this.setViewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  enforceState() {
    var _a, _b, _c;
    const { gl: t8 } = this;
    t8.bindVertexArray(null);
    for (let s3 = 0; s3 < this.parameters.maxVertexAttributes; s3++) t8.disableVertexAttribArray(s3);
    this._state.vertexBuffer ? t8.bindBuffer(this._state.vertexBuffer.bufferType, this._state.vertexBuffer.glName) : t8.bindBuffer(A2.ARRAY_BUFFER, null), this._state.indexBuffer ? t8.bindBuffer(this._state.indexBuffer.bufferType, this._state.indexBuffer.glName) : t8.bindBuffer(A2.ELEMENT_ARRAY_BUFFER, null), this._state.uniformBuffer ? t8.bindBuffer(this._state.uniformBuffer.bufferType, this._state.uniformBuffer.glName) : t8.bindBuffer(A2.UNIFORM_BUFFER, null);
    for (let s3 = 0; s3 < this._parameters.maxUniformBufferBindings; s3++) {
      const e8 = this._state.uniformBufferBindingPoints[s3];
      if (null != e8) {
        const { buffer: i2, offset: a3, size: r6 } = e8;
        null !== i2 ? 0 === a3 && 0 === r6 ? t8.bindBufferBase(A2.UNIFORM_BUFFER, s3, i2.glName) : t8.bindBufferRange(A2.UNIFORM_BUFFER, s3, i2.glName, a3, r6) : t8.bindBufferBase(A2.UNIFORM_BUFFER, s3, null);
      }
    }
    if (this._state.pixelPackBuffer ? t8.bindBuffer(this._state.pixelPackBuffer.bufferType, this._state.pixelPackBuffer.glName) : t8.bindBuffer(A2.PIXEL_PACK_BUFFER, null), this._state.pixelUnpackBuffer ? t8.bindBuffer(this._state.pixelUnpackBuffer.bufferType, this._state.pixelUnpackBuffer.glName) : t8.bindBuffer(A2.PIXEL_UNPACK_BUFFER, null), this._state.copyReadBuffer ? t8.bindBuffer(this._state.copyReadBuffer.bufferType, this._state.copyReadBuffer.glName) : t8.bindBuffer(A2.COPY_READ_BUFFER, null), this._state.copyWriteBuffer ? t8.bindBuffer(this._state.copyWriteBuffer.bufferType, this._state.copyWriteBuffer.glName) : t8.bindBuffer(A2.COPY_WRITE_BUFFER, null), t8.bindFramebuffer(n2.READ_FRAMEBUFFER, null), t8.readBuffer(t8.BACK), this._state.readFramebuffer && (t8.bindFramebuffer(n2.READ_FRAMEBUFFER, this._state.readFramebuffer.glName), t8.readBuffer(X.COLOR_ATTACHMENT0)), t8.bindFramebuffer(n2.DRAW_FRAMEBUFFER, ((_a = this._state.drawFramebuffer) == null ? void 0 : _a.glName) ?? null), null === this._state.drawFramebuffer) {
      const e8 = this._state.drawBuffers.defaultFramebuffer;
      t8.drawBuffers(e8 ?? [f.BACK]);
    } else {
      const e8 = this._state.drawBuffers.fbos.get(this._state.drawFramebuffer);
      t8.drawBuffers(e8 ?? [X.COLOR_ATTACHMENT0]);
    }
    if (this._state.vertexArrayObject) {
      const t9 = this._state.vertexArrayObject;
      this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null), this.bindVAO(t9);
    }
    t8.useProgram(((_b = this._state.program) == null ? void 0 : _b.glName) ?? null), t8.blendColor(this._state.blendColor.r, this._state.blendColor.g, this._state.blendColor.b, this._state.blendColor.a), t8.bindRenderbuffer(t8.RENDERBUFFER, ((_c = this._state.renderbuffer) == null ? void 0 : _c.glName) ?? null), true === this._state.blend ? t8.enable(this.gl.BLEND) : t8.disable(this.gl.BLEND), t8.blendEquationSeparate(this._state.blendEquation.mode, this._state.blendEquation.modeAlpha), t8.blendFuncSeparate(this._state.blendFunction.srcRGB, this._state.blendFunction.dstRGB, this._state.blendFunction.srcAlpha, this._state.blendFunction.dstAlpha), t8.clearColor(this._state.clearColor.r, this._state.clearColor.g, this._state.clearColor.b, this._state.clearColor.a), t8.clearDepth(this._state.clearDepth), t8.clearStencil(this._state.clearStencil), t8.colorMask(this._state.colorMask.r, this._state.colorMask.g, this._state.colorMask.b, this._state.colorMask.a), t8.cullFace(this._state.cullFace), t8.depthFunc(this._state.depthFunction), t8.depthRange(this._state.depthRange.zNear, this._state.depthRange.zFar), true === this._state.depthTest ? t8.enable(t8.DEPTH_TEST) : t8.disable(t8.DEPTH_TEST), t8.depthMask(this._state.depthWrite), t8.frontFace(this._state.frontFace), t8.lineWidth(1), true === this._state.faceCulling ? t8.enable(t8.CULL_FACE) : t8.disable(t8.CULL_FACE), t8.polygonOffset(this._state.polygonOffset[0], this._state.polygonOffset[1]), true === this._state.polygonOffsetFill ? t8.enable(t8.POLYGON_OFFSET_FILL) : t8.disable(t8.POLYGON_OFFSET_FILL), t8.scissor(this._state.scissorRect.x, this._state.scissorRect.y, this._state.scissorRect.width, this._state.scissorRect.height), true === this._state.scissorTest ? t8.enable(t8.SCISSOR_TEST) : t8.disable(t8.SCISSOR_TEST), t8.stencilFunc(this._state.stencilFunction.func, this._state.stencilFunction.ref, this._state.stencilFunction.mask), t8.stencilOpSeparate(this._state.stencilOperation.face, this._state.stencilOperation.fail, this._state.stencilOperation.zFail, this._state.stencilOperation.zPass), true === this._state.stencilTest ? t8.enable(t8.STENCIL_TEST) : t8.disable(t8.STENCIL_TEST), t8.stencilMask(this._state.stencilWriteMask);
    for (let s3 = 0; s3 < this.parameters.maxTextureImageUnits; s3++) {
      t8.activeTexture(Y + s3), t8.bindTexture(M.TEXTURE_2D, null), t8.bindTexture(M.TEXTURE_CUBE_MAP, null), t8.bindTexture(M.TEXTURE_3D, null), t8.bindTexture(M.TEXTURE_2D_ARRAY, null);
      const e8 = this._state.textureUnitMap[s3];
      null != e8 && t8.bindTexture(e8.descriptor.target, e8.glName);
    }
    t8.activeTexture(Y + this._state.activeTexture);
    const e7 = this._state.viewport;
    t8.viewport(e7.x, e7.y, e7.width, e7.height), this.resetInfo();
  }
  _loadExtensions() {
    this.gl.getExtension("KHR_parallel_shader_compile");
  }
};
function N2(t8, e7, s3, i2) {
  return e7 ? i2 !== e7 && t8.bindBuffer(s3, e7.glName) : t8.bindBuffer(s3, null), e7;
}
function D2(t8, e7) {
  switch (t8) {
    case E.POINTS:
      return 2 * e7;
    case E.TRIANGLES:
      return e7 / 3;
    case E.TRIANGLE_STRIP:
    case E.TRIANGLE_FAN:
      return e7 - 2;
    default:
      return 0;
  }
}

export {
  o3 as o,
  y
};
//# sourceMappingURL=chunk-MSUXDY2E.js.map
