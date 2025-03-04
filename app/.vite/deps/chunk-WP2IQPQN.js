import {
  B,
  g as g3,
  o as o3
} from "./chunk-TKKZ7DIH.js";
import {
  O
} from "./chunk-XJ5CGMWY.js";
import {
  a as a2
} from "./chunk-YVJ7MJNT.js";
import {
  a as a3
} from "./chunk-5AJMZDUM.js";
import {
  E
} from "./chunk-CRKFUUKK.js";
import {
  I,
  g as g2,
  o as o2,
  s as s2,
  u,
  y
} from "./chunk-UMYFDXOJ.js";
import {
  c,
  n as n2,
  r as r5
} from "./chunk-JLFSX3JT.js";
import {
  o,
  r as r4
} from "./chunk-6P7HXSJ6.js";
import {
  P,
  d
} from "./chunk-YSPSOPLL.js";
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
  r as r3
} from "./chunk-7QTMSBS3.js";
import {
  r2
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js
var i = class {
  constructor(s3 = c()) {
    this.intensity = s3;
  }
};
var r6 = class {
  constructor(i2 = c(), r8 = r5(0.57735, 0.57735, 0.57735)) {
    this.intensity = i2, this.direction = r8;
  }
};
var c2 = class {
  constructor(i2 = c(), r8 = r5(0.57735, 0.57735, 0.57735), c3 = true, n6 = 1, o5 = 1) {
    this.intensity = i2, this.direction = r8, this.castShadows = c3, this.specularStrength = n6, this.environmentStrength = o5;
  }
};
var n3 = class {
  constructor() {
    this.r = [0], this.g = [0], this.b = [0];
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js
function n4(t3, n6, e3) {
  (e3 = e3 || t3).length = t3.length;
  for (let l5 = 0; l5 < t3.length; l5++) e3[l5] = t3[l5] * n6[l5];
  return e3;
}
function e(t3, n6, e3) {
  (e3 = e3 || t3).length = t3.length;
  for (let l5 = 0; l5 < t3.length; l5++) e3[l5] = t3[l5] * n6;
  return e3;
}
function l(t3, n6, e3) {
  (e3 = e3 || t3).length = t3.length;
  for (let l5 = 0; l5 < t3.length; l5++) e3[l5] = t3[l5] + n6[l5];
  return e3;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js
function u2(t3) {
  return (t3 + 1) * (t3 + 1);
}
function l2(n6) {
  return r4(Math.floor(Math.sqrt(n6) - 1), 0, 2);
}
function m2(t3, n6, o5) {
  const r8 = t3[0], e3 = t3[1], i2 = t3[2], s3 = o5 || [];
  return s3.length = u2(n6), n6 >= 0 && (s3[0] = 0.28209479177), n6 >= 1 && (s3[1] = 0.4886025119 * r8, s3[2] = 0.4886025119 * i2, s3[3] = 0.4886025119 * e3), n6 >= 2 && (s3[4] = 1.09254843059 * r8 * e3, s3[5] = 1.09254843059 * e3 * i2, s3[6] = 0.31539156525 * (3 * i2 * i2 - 1), s3[7] = 1.09254843059 * r8 * i2, s3[8] = 0.54627421529 * (r8 * r8 - e3 * e3)), s3;
}
function p(t3, n6) {
  const o5 = u2(t3), r8 = n6 || { r: [], g: [], b: [] };
  r8.r.length = r8.g.length = r8.b.length = o5;
  for (let e3 = 0; e3 < o5; e3++) r8.r[e3] = r8.g[e3] = r8.b[e3] = 0;
  return r8;
}
function b(t3, o5) {
  const r8 = l2(o5.r.length);
  for (const e3 of t3) y(P2, e3.direction), m2(P2, r8, v), n4(v, w), e(v, e3.intensity[0], I2), l(o5.r, I2), e(v, e3.intensity[1], I2), l(o5.g, I2), e(v, e3.intensity[2], I2), l(o5.b, I2);
  return o5;
}
function y2(t3, n6) {
  m2(P2, 0, v);
  for (const o5 of t3) n6.r[0] += v[0] * w[0] * o5.intensity[0] * 4 * Math.PI, n6.g[0] += v[0] * w[0] * o5.intensity[1] * 4 * Math.PI, n6.b[0] += v[0] * w[0] * o5.intensity[2] * 4 * Math.PI;
  return n6;
}
function M(t3, n6, e3, i2) {
  p(n6, i2), o2(e3.intensity, 0, 0, 0);
  let s3 = false;
  const u4 = S, l5 = d2, m5 = j;
  u4.length = 0, l5.length = 0, m5.length = 0;
  for (const o5 of t3) o5 instanceof c2 && !s3 ? (s2(e3.direction, o5.direction), s2(e3.intensity, o5.intensity), e3.specularStrength = o5.specularStrength, e3.environmentStrength = o5.environmentStrength, e3.castShadows = o5.castShadows, s3 = true) : o5 instanceof c2 || o5 instanceof r6 ? u4.push(o5) : o5 instanceof i ? l5.push(o5) : o5 instanceof n3 && m5.push(o5);
  b(u4, i2), y2(l5, i2);
  for (const o5 of m5) l(i2.r, o5.r), l(i2.g, o5.g), l(i2.b, o5.b);
}
var S = [];
var d2 = [];
var j = [];
var v = [0];
var I2 = [0];
var P2 = n2();
var w = [3.141593, 2.094395, 2.094395, 2.094395, 0.785398, 0.785398, 0.785398, 0.785398, 0.785398];

// node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js
var g4 = class {
  constructor() {
    this.color = n2(), this.intensity = 1;
  }
};
var m3 = class {
  constructor() {
    this.direction = n2(), this.ambient = new g4(), this.diffuse = new g4();
  }
};
var l3 = 0.4;
var _ = class {
  constructor() {
    this._shOrder = 2, this._legacy = new m3(), this.globalFactor = 0.5, this.noonFactor = 0.5, this._sphericalHarmonics = new n3(), this._mainLight = new c2(n2(), r5(1, 0, 0), false);
  }
  get legacy() {
    return this._legacy;
  }
  get sh() {
    return this._sphericalHarmonics;
  }
  get mainLight() {
    return this._mainLight;
  }
  set(i2) {
    M(i2, this._shOrder, this._mainLight, this._sphericalHarmonics), s2(this._legacy.direction, this._mainLight.direction);
    const r8 = 1 / Math.PI;
    this._legacy.ambient.color[0] = 0.282095 * this._sphericalHarmonics.r[0] * r8, this._legacy.ambient.color[1] = 0.282095 * this._sphericalHarmonics.g[0] * r8, this._legacy.ambient.color[2] = 0.282095 * this._sphericalHarmonics.b[0] * r8, g2(this._legacy.diffuse.color, this._mainLight.intensity, r8), s2(L, this._legacy.diffuse.color), g2(L, L, l3 * this.globalFactor), u(this._legacy.ambient.color, this._legacy.ambient.color, L);
  }
  copyFrom(i2) {
    this._sphericalHarmonics.r = Array.from(i2.sh.r), this._sphericalHarmonics.g = Array.from(i2.sh.g), this._sphericalHarmonics.b = Array.from(i2.sh.b), s2(this._mainLight.direction, i2.mainLight.direction), s2(this._mainLight.intensity, i2.mainLight.intensity), this._mainLight.castShadows = i2.mainLight.castShadows, this._mainLight.specularStrength = i2.mainLight.specularStrength, this._mainLight.environmentStrength = i2.mainLight.environmentStrength, this.globalFactor = i2.globalFactor, this.noonFactor = i2.noonFactor;
  }
  lerpLighting(s3, h2, n6) {
    if (I(this._mainLight.intensity, s3.mainLight.intensity, h2.mainLight.intensity, n6), this._mainLight.environmentStrength = o(s3.mainLight.environmentStrength, h2.mainLight.environmentStrength, n6), this._mainLight.specularStrength = o(s3.mainLight.specularStrength, h2.mainLight.specularStrength, n6), s2(this._mainLight.direction, h2.mainLight.direction), this._mainLight.castShadows = h2.mainLight.castShadows, this.globalFactor = o(s3.globalFactor, h2.globalFactor, n6), this.noonFactor = o(s3.noonFactor, h2.noonFactor, n6), s3.sh.r.length === h2.sh.r.length) for (let t3 = 0; t3 < h2.sh.r.length; t3++) this._sphericalHarmonics.r[t3] = o(s3.sh.r[t3], h2.sh.r[t3], n6), this._sphericalHarmonics.g[t3] = o(s3.sh.g[t3], h2.sh.g[t3], n6), this._sphericalHarmonics.b[t3] = o(s3.sh.b[t3], h2.sh.b[t3], n6);
    else for (let i2 = 0; i2 < h2.sh.r.length; i2++) this._sphericalHarmonics.r[i2] = h2.sh.r[i2], this._sphericalHarmonics.g[i2] = h2.sh.g[i2], this._sphericalHarmonics.b[i2] = h2.sh.b[i2];
  }
};
var L = n2();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var t = class {
  constructor(t3, o5) {
    this._module = t3, this._load = o5;
  }
  get() {
    return this._module;
  }
  async reload() {
    return this._module = await this._load(), this._module;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js
var r7 = class {
  constructor(r8, i2, s3) {
    this._context = r8, this._locations = s3, this._textures = /* @__PURE__ */ new Map(), this._freeTextureUnits = new r3({ deallocator: null }), this._glProgram = r8.programCache.acquire(i2.generate("vertex", true), i2.generate("fragment", true), s3), this._glProgram.stop = () => {
      throw new Error("Wrapped _glProgram used directly");
    }, this.bind = i2.generateBind(this), this.bindPass = i2.generateBindPass(this), this.bindDraw = i2.generateBindDraw(this), this._fragmentUniforms = a3() ? i2.fragmentUniforms : null;
  }
  dispose() {
    this._glProgram.dispose();
  }
  get glName() {
    return this._glProgram.glName;
  }
  get hasTransformFeedbackVaryings() {
    return this._glProgram.hasTransformFeedbackVaryings;
  }
  get compiled() {
    return this._glProgram.compiled;
  }
  setUniform1b(t3, e3) {
    this._glProgram.setUniform1i(t3, e3 ? 1 : 0);
  }
  setUniform1i(t3, e3) {
    this._glProgram.setUniform1i(t3, e3);
  }
  setUniform1f(t3, e3) {
    this._glProgram.setUniform1f(t3, e3);
  }
  setUniform2fv(t3, e3) {
    this._glProgram.setUniform2fv(t3, e3);
  }
  setUniform3fv(t3, e3) {
    this._glProgram.setUniform3fv(t3, e3);
  }
  setUniform4fv(t3, e3) {
    this._glProgram.setUniform4fv(t3, e3);
  }
  setUniformMatrix3fv(t3, e3) {
    this._glProgram.setUniformMatrix3fv(t3, e3);
  }
  setUniformMatrix4fv(t3, e3) {
    this._glProgram.setUniformMatrix4fv(t3, e3);
  }
  setUniform1fv(t3, e3) {
    this._glProgram.setUniform1fv(t3, e3);
  }
  setUniform1iv(t3, e3) {
    this._glProgram.setUniform1iv(t3, e3);
  }
  setUniform2iv(t3, e3) {
    this._glProgram.setUniform2iv(t3, e3);
  }
  setUniform3iv(t3, e3) {
    this._glProgram.setUniform3iv(t3, e3);
  }
  setUniform4iv(t3, e3) {
    this._glProgram.setUniform4iv(t3, e3);
  }
  assertCompatibleVertexAttributeLocations(t3) {
    t3.locations !== this._locations && console.error("VertexAttributeLocations are incompatible");
  }
  stop() {
    this._textures.clear(), this._freeTextureUnits.clear();
  }
  bindTexture(t3, e3) {
    if (null == (e3 == null ? void 0 : e3.glName)) {
      const e4 = this._textures.get(t3);
      return e4 && (this._context.bindTexture(null, e4.unit), this._freeTextureUnit(e4), this._textures.delete(t3)), null;
    }
    let r8 = this._textures.get(t3);
    return null == r8 ? (r8 = this._allocTextureUnit(e3), this._textures.set(t3, r8)) : r8.texture = e3, this._context.useProgram(this), this.setUniform1i(t3, r8.unit), this._context.bindTexture(e3, r8.unit), r8.unit;
  }
  rebindTextures() {
    var _a;
    this._context.useProgram(this), this._textures.forEach((t3, e3) => {
      this._context.bindTexture(t3.texture, t3.unit), this.setUniform1i(e3, t3.unit);
    }), (_a = this._fragmentUniforms) == null ? void 0 : _a.forEach((t3) => {
      "sampler2D" !== t3.type && "samplerCube" !== t3.type || this._textures.has(t3.name) || console.error(`Texture sampler ${t3.name} has no bound texture`);
    });
  }
  _allocTextureUnit(t3) {
    return { texture: t3, unit: 0 === this._freeTextureUnits.length ? this._textures.size : this._freeTextureUnits.pop() };
  }
  _freeTextureUnit(t3) {
    this._freeTextureUnits.push(t3.unit);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js
var p2 = () => n.getLogger("esri.views.3d.webgl.ShaderTechnique");
var l4 = class {
  constructor(e3, s3, n6, a4 = O) {
    this.locations = a4, this.primitiveType = E.TRIANGLES, this.key = s3.key, this._program = new r7(e3.rctx, n6.get().build(s3), a4), this._pipeline = this.initializePipeline(s3), this.reload = async (t3) => {
      t3 && await n6.reload(), this.key.equals(s3.key) || p2().warn("Configuration was changed after construction, cannot reload shader.", n6), r2(this._program), this._program = new r7(e3.rctx, n6.get().build(s3), a4), this._pipeline = this.initializePipeline(s3);
    };
  }
  destroy() {
    this._program = r2(this._program), this._pipeline = null;
  }
  get program() {
    return this._program;
  }
  get compiled() {
    return this.program.compiled;
  }
  ensureAttributeLocations(e3) {
    this.program.assertCompatibleVertexAttributeLocations(e3);
  }
  getPipeline(e3, i2) {
    return this._pipeline;
  }
  initializePipeline(e3) {
    return B({ blending: o3, colorWrite: g3 });
  }
};

// node_modules/@arcgis/core/views/3d/webgl.js
var n5;
var t2;
!function(e3) {
  e3.OPAQUE = "opaque-color", e3.TRANSPARENT = "transparent-color", e3.COMPOSITE = "composite-color", e3.FINAL = "final-color";
}(n5 || (n5 = {})), function(e3) {
  e3.SSAO = "ssao", e3.LASERLINES = "laserline-color", e3.ANTIALIASING = "aa-color", e3.HIGHLIGHTS = "highlight-color", e3.MAGNIFIER = "magnifier-color", e3.OCCLUDED = "occluded-color", e3.VIEWSHED = "viewshed-color", e3.OPAQUE_ENVIRONMENT = "opaque-environment-color", e3.TRANSPARENT_ENVIRONMENT = "transparent-environment-color", e3.FOCUSAREA = "focus-area";
}(t2 || (t2 = {}));

// node_modules/@arcgis/core/views/3d/webgl/formats.js
var R;
var E2;
!function(R2) {
  R2[R2.RED = 0] = "RED", R2[R2.RG = 1] = "RG", R2[R2.RGBA4 = 2] = "RGBA4", R2[R2.RGBA = 3] = "RGBA", R2[R2.RGBA_MIPMAP = 4] = "RGBA_MIPMAP", R2[R2.R16F = 5] = "R16F", R2[R2.RGBA16F = 6] = "RGBA16F";
}(R || (R = {})), function(R2) {
  R2[R2.DEPTH_STENCIL_TEXTURE = 0] = "DEPTH_STENCIL_TEXTURE", R2[R2.DEPTH16_BUFFER = 1] = "DEPTH16_BUFFER";
}(E2 || (E2 = {}));

// node_modules/@arcgis/core/views/3d/webgl/RenderNode.js
var u3 = class extends g {
  constructor(e3) {
    super(e3), this.view = null, this.consumes = { required: [] }, this.produces = n5.COMPOSITE, this.requireGeometryDepth = false, this._dirty = true;
  }
  initialize() {
    this.addHandles([d(() => this.view.ready, (e3) => {
      var _a;
      e3 && ((_a = this.view._stage) == null ? void 0 : _a.renderer.addRenderNode(this));
    }, P)]);
  }
  destroy() {
    var _a, _b;
    (_b = (_a = this.view._stage) == null ? void 0 : _a.renderer) == null ? void 0 : _b.removeRenderNode(this);
  }
  precompile() {
  }
  render() {
    throw new s("RenderNode:render-function-not-implemented", "render() is not implemented.");
  }
  get camera() {
    return this.view.state.camera.clone();
  }
  get sunLight() {
    return this.bindParameters.lighting.legacy;
  }
  get gl() {
    return this.view._stage.renderView.renderingContext.gl;
  }
  get techniques() {
    return this.view._stage.renderView.techniques;
  }
  acquireOutputFramebuffer() {
    var _a, _b, _c;
    const e3 = (_b = (_a = this._frameBuffer) == null ? void 0 : _a.getTexture()) == null ? void 0 : _b.descriptor, r8 = this.view._stage.renderer.fboCache.acquire((e3 == null ? void 0 : e3.width) ?? 640, (e3 == null ? void 0 : e3.height) ?? 480, this.produces);
    return (_c = r8.fbo) == null ? void 0 : _c.initializeAndBind(), r8;
  }
  bindRenderTarget() {
    var _a, _b;
    return (_b = (_a = this._frameBuffer) == null ? void 0 : _a.fbo) == null ? void 0 : _b.initializeAndBind(), this._frameBuffer;
  }
  requestRender(e3) {
    var _a;
    e3 === a2.UPDATE && ((_a = this.view._stage) == null ? void 0 : _a.renderView.requestRender(e3)), this._dirty = true;
  }
  resetWebGLState() {
    var _a;
    this.renderingContext.resetState(), this.renderingContext.bindFramebuffer((_a = this._frameBuffer) == null ? void 0 : _a.fbo);
  }
  get fboCache() {
    return this.view._stage.renderer.fboCache;
  }
  get bindParameters() {
    return this.renderContext.bind;
  }
  get renderingContext() {
    return this.view._stage.renderView.renderingContext;
  }
  get renderContext() {
    var _a;
    return (_a = this.view._stage) == null ? void 0 : _a.renderer.renderContext;
  }
  updateAnimation(e3) {
    return !!this._dirty && (this._dirty = false, true);
  }
  doRender(e3) {
    this._frameBuffer = e3.find(({ name: e4 }) => e4 === this.produces);
    try {
      return this.render(e3);
    } finally {
      this._frameBuffer = null;
    }
  }
};
r([m({ constructOnly: true })], u3.prototype, "view", void 0), r([m({ constructOnly: true })], u3.prototype, "consumes", void 0), r([m()], u3.prototype, "produces", void 0), r([m({ readOnly: true })], u3.prototype, "techniques", null), u3 = r([a("esri.views.3d.webgl.RenderNode")], u3);
var h = u3;

export {
  t,
  l4 as l,
  n5 as n,
  t2,
  R,
  E2 as E,
  h,
  i,
  l3 as l2,
  _
};
//# sourceMappingURL=chunk-WP2IQPQN.js.map
