import {
  s as s2
} from "./chunk-2MCNW6KC.js";
import {
  A,
  B,
  D,
  G,
  L,
  M,
  P,
  U,
  V,
  c
} from "./chunk-CRKFUUKK.js";
import {
  r
} from "./chunk-HLOKDQU3.js";
import {
  b,
  e2 as e
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var o = () => n.getLogger("esri.views.webgl.checkWebGLError");
function t(e4, r3) {
  switch (r3) {
    case e4.INVALID_ENUM:
      return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";
    case e4.INVALID_VALUE:
      return "Invalid Value. A numeric argument is out of range.";
    case e4.INVALID_OPERATION:
      return "Invalid Operation. The specified command is not allowed for the current state.";
    case e4.INVALID_FRAMEBUFFER_OPERATION:
      return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";
    case e4.OUT_OF_MEMORY:
      return "Out of memory. Not enough memory is left to execute the command.";
    case e4.CONTEXT_LOST_WEBGL:
      return "WebGL context has been lost";
    default:
      return "Unknown error";
  }
}
var n2 = !!has("enable-feature:webgl-debug");
function a() {
  return n2;
}
function c2() {
  return n2;
}
function u(r3) {
  if (a()) {
    const n3 = r3.getError();
    if (n3) {
      const a3 = t(r3, n3), c4 = new Error().stack;
      o().error(new s("webgl-error", "WebGL error occurred", { message: a3, stack: c4 }));
    }
  }
}

// node_modules/@arcgis/core/views/webgl/GLObjectType.js
var e2;
!function(e4) {
  e4[e4.Texture = 0] = "Texture", e4[e4.RenderBuffer = 1] = "RenderBuffer";
}(e2 || (e2 = {}));

// node_modules/@arcgis/core/views/webgl/Util.js
function o2(e4) {
  const r3 = e4.gl;
  switch (r3.getError()) {
    case r3.NO_ERROR:
      return null;
    case r3.INVALID_ENUM:
      return "An unacceptable value has been specified for an enumerated argument";
    case r3.INVALID_VALUE:
      return "An unacceptable value has been specified for an argument";
    case r3.INVALID_OPERATION:
      return "The specified command is not allowed for the current state";
    case r3.INVALID_FRAMEBUFFER_OPERATION:
      return "The currently bound framebuffer is not framebuffer complete";
    case r3.OUT_OF_MEMORY:
      return "Not enough memory is left to execute the command";
    case r3.CONTEXT_LOST_WEBGL:
      return "WebGL context is lost";
  }
  return "Unknown error";
}
function E(r3, t2, s3, a3, c4 = 0) {
  var _a;
  const i = r3.gl;
  r3.bindBuffer(s3);
  for (const R of a3) {
    const s4 = t2.get(R.name);
    if (null == s4) {
      console.warn(`There is no location for vertex attribute '${R.name}' defined.`);
      continue;
    }
    const a4 = c4 * R.stride;
    if (R.count <= 4) i.vertexAttribPointer(s4, R.count, R.type, R.normalized, R.stride, R.offset + a4), i.enableVertexAttribArray(s4), R.divisor > 0 && r3.gl.vertexAttribDivisor(s4, R.divisor);
    else if (9 === R.count) for (let e4 = 0; e4 < 3; e4++) i.vertexAttribPointer(s4 + e4, 3, R.type, R.normalized, R.stride, R.offset + 12 * e4 + a4), i.enableVertexAttribArray(s4 + e4), R.divisor > 0 && r3.gl.vertexAttribDivisor(s4 + e4, R.divisor);
    else if (16 === R.count) for (let e4 = 0; e4 < 4; e4++) i.vertexAttribPointer(s4 + e4, 4, R.type, R.normalized, R.stride, R.offset + 16 * e4 + a4), i.enableVertexAttribArray(s4 + e4), R.divisor > 0 && ((_a = r3.gl) == null ? void 0 : _a.vertexAttribDivisor(s4 + e4, R.divisor));
    else console.error("Unsupported vertex attribute element count: " + R.count);
    if (a()) {
      const e4 = o2(r3), t3 = s2(R.type), s5 = R.offset, c5 = Math.round(t3 / s5) !== t3 / s5 ? `. Offset not a multiple of stride. DataType requires ${t3} bytes, but descriptor has an offset of ${s5}` : "";
      e4 && console.error(`Unable to bind vertex attribute "${R.name}" with baseInstanceOffset ${a4}${c5}:`, e4, R);
    }
  }
}
function _(e4, t2, s3, a3) {
  var _a, _b, _c;
  const c4 = e4.gl;
  e4.bindBuffer(s3);
  for (const r3 of a3) {
    const s4 = t2.get(r3.name);
    if (r3.count <= 4) c4.disableVertexAttribArray(s4), r3.divisor && r3.divisor > 0 && ((_a = e4.gl) == null ? void 0 : _a.vertexAttribDivisor(s4, 0));
    else if (9 === r3.count) for (let t3 = 0; t3 < 3; t3++) c4.disableVertexAttribArray(s4 + t3), r3.divisor && r3.divisor > 0 && ((_b = e4.gl) == null ? void 0 : _b.vertexAttribDivisor(s4 + t3, 0));
    else if (16 === r3.count) for (let t3 = 0; t3 < 4; t3++) c4.disableVertexAttribArray(s4 + t3), r3.divisor && r3.divisor > 0 && ((_c = e4.gl) == null ? void 0 : _c.vertexAttribDivisor(s4 + t3, 0));
    else console.error("Unsupported vertex attribute element count: " + r3.count);
  }
  e4.unbindBuffer(A.ARRAY_BUFFER);
}
function u2(e4) {
  switch (e4) {
    case G.ALPHA:
    case G.LUMINANCE:
    case G.RED:
    case G.RED_INTEGER:
    case P.R8:
    case P.R8I:
    case P.R8UI:
    case P.R8_SNORM:
    case B.STENCIL_INDEX8:
      return 1;
    case G.LUMINANCE_ALPHA:
    case G.RG:
    case G.RG_INTEGER:
    case P.RGBA4:
    case P.R16F:
    case P.R16I:
    case P.R16UI:
    case P.RG8:
    case P.RG8I:
    case P.RG8UI:
    case P.RG8_SNORM:
    case P.RGB565:
    case P.RGB5_A1:
    case B.DEPTH_COMPONENT16:
      return 2;
    case G.DEPTH_COMPONENT:
    case G.RGB:
    case G.RGB_INTEGER:
    case P.RGB8:
    case P.RGB8I:
    case P.RGB8UI:
    case P.RGB8_SNORM:
    case P.SRGB8:
    case B.DEPTH_COMPONENT24:
      return 3;
    case G.DEPTH_STENCIL:
    case G.DEPTH24_STENCIL8:
    case G.RGBA:
    case G.RGBA_INTEGER:
    case P.RGBA8:
    case P.R32F:
    case P.R11F_G11F_B10F:
    case P.RG16F:
    case P.R32I:
    case P.R32UI:
    case P.RG16I:
    case P.RG16UI:
    case P.RGBA8I:
    case P.RGBA8UI:
    case P.RGBA8_SNORM:
    case P.SRGB8_ALPHA8:
    case P.RGB9_E5:
    case P.RGB10_A2UI:
    case P.RGB10_A2:
    case B.DEPTH_STENCIL:
    case B.DEPTH_COMPONENT32F:
    case B.DEPTH24_STENCIL8:
      return 4;
    case B.DEPTH32F_STENCIL8:
      return 5;
    case P.RGB16F:
    case P.RGB16I:
    case P.RGB16UI:
      return 6;
    case P.RG32F:
    case P.RG32I:
    case P.RG32UI:
    case P.RGBA16F:
    case P.RGBA16I:
    case P.RGBA16UI:
      return 8;
    case P.RGB32F:
    case P.RGB32I:
    case P.RGB32UI:
      return 12;
    case P.RGBA32F:
    case P.RGBA32I:
    case P.RGBA32UI:
      return 16;
    case c.COMPRESSED_RGB_S3TC_DXT1_EXT:
    case c.COMPRESSED_RGBA_S3TC_DXT1_EXT:
      return 0.5;
    case c.COMPRESSED_RGBA_S3TC_DXT3_EXT:
    case c.COMPRESSED_RGBA_S3TC_DXT5_EXT:
      return 1;
    case c.COMPRESSED_R11_EAC:
    case c.COMPRESSED_SIGNED_R11_EAC:
    case c.COMPRESSED_RGB8_ETC2:
    case c.COMPRESSED_SRGB8_ETC2:
    case c.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
    case c.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return 0.5;
    case c.COMPRESSED_RG11_EAC:
    case c.COMPRESSED_SIGNED_RG11_EAC:
    case c.COMPRESSED_RGBA8_ETC2_EAC:
    case c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
      return 1;
  }
  return 0;
}

// node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var p = class {
  constructor(e4 = 0, p3 = e4) {
    this.width = e4, this.height = p3, this.target = M.TEXTURE_2D, this.pixelFormat = G.RGBA, this.dataType = U.UNSIGNED_BYTE, this.samplingMode = L.LINEAR, this.wrapMode = D.REPEAT, this.maxAnisotropy = 1, this.flipped = false, this.hasMipmap = false, this.isOpaque = false, this.unpackAlignment = 4, this.preMultiplyAlpha = false, this.shouldCompress = false, this.depth = 1, this.isImmutable = false;
  }
};
function r2(i) {
  return i.width <= 0 || i.height <= 0 ? 0 : Math.round(i.width * i.height * i.depth * (i.hasMipmap ? 4 / 3 : 1) * (null == i.internalFormat ? 4 : u2(i.internalFormat)) * (i.target === M.TEXTURE_CUBE_MAP ? 6 : 1));
}

// node_modules/@arcgis/core/views/webgl/textureUtils.js
var u3 = () => n.getLogger("esri/views/webgl/textureUtils");
function l(t2) {
  (null != t2.width && t2.width < 0 || null != t2.height && t2.height < 0 || null != t2.depth && t2.depth < 0) && u3().error("Negative dimension parameters are not allowed!");
}
function h(t2) {
  return t2 in P;
}
function c3(t2) {
  return t2 in c;
}
function d(t2) {
  return null != t2 && "type" in t2 && "compressed" === t2.type;
}
function m(t2) {
  return null != t2 && "byteLength" in t2;
}
function f(t2) {
  return null != t2 && !d(t2) && !m(t2);
}
function p2(t2) {
  return t2 === M.TEXTURE_3D || t2 === M.TEXTURE_2D_ARRAY;
}
function E2(t2, e4, r3, n3 = 1) {
  let o3 = Math.max(e4, r3);
  return t2 === M.TEXTURE_3D && (o3 = Math.max(o3, n3)), Math.floor(Math.log2(o3)) + 1;
}
function T(e4) {
  if (null != e4.internalFormat) return e4.internalFormat === G.DEPTH_STENCIL ? G.DEPTH24_STENCIL8 : e4.internalFormat;
  switch (e4.dataType) {
    case U.FLOAT:
      switch (e4.pixelFormat) {
        case G.RGBA:
          return P.RGBA32F;
        case G.RGB:
          return P.RGB32F;
        default:
          throw new s("Unable to derive format");
      }
    case U.UNSIGNED_BYTE:
      switch (e4.pixelFormat) {
        case G.RGBA:
          return P.RGBA8;
        case G.RGB:
          return P.RGB8;
      }
  }
  return e4.internalFormat = e4.pixelFormat === G.DEPTH_STENCIL ? G.DEPTH24_STENCIL8 : e4.pixelFormat;
}
function g(t2) {
  let e4 = "width" in t2 ? t2.width : t2.codedWidth, r3 = "height" in t2 ? t2.height : t2.codedHeight;
  const n3 = 1;
  return t2 instanceof HTMLVideoElement && (e4 = t2.videoWidth, r3 = t2.videoHeight), { width: e4, height: r3, depth: n3 };
}

// node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js
var a2 = class _a extends p {
  constructor(t2, a3) {
    switch (super(), this.context = t2, Object.assign(this, a3), this.internalFormat) {
      case P.R16F:
      case P.R16I:
      case P.R16UI:
      case P.R32F:
      case P.R32I:
      case P.R32UI:
      case P.R8_SNORM:
      case P.R8:
      case P.R8I:
      case P.R8UI:
        this.pixelFormat = G.RED;
    }
  }
  static validate(s3, e4) {
    return new _a(s3, e4);
  }
};

// node_modules/@arcgis/core/views/webgl/Texture.js
var f2 = () => n.getLogger("esri/views/webgl/Texture");
var w = class e3 {
  constructor(e4, i = null, r3 = null) {
    if (this.type = e2.Texture, this._glName = null, this._samplingModeDirty = false, this._wrapModeDirty = false, this._wasImmutablyAllocated = false, this._compressionAbortController = r(null), "context" in e4) this._descriptor = e4, r3 = i;
    else {
      const r4 = a2.validate(e4, i);
      if (!r4) throw new s("Texture descriptor invalid");
      this._descriptor = r4;
    }
    this._descriptor.target === M.TEXTURE_CUBE_MAP ? this._setDataCubeMap(r3) : this.setData(r3);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  get usedMemory() {
    return r2(this._descriptor);
  }
  get cachedMemory() {
    return this.usedMemory;
  }
  get isDirty() {
    return this._samplingModeDirty || this._wrapModeDirty;
  }
  get isCompressing() {
    return null !== this._compressionAbortController.value;
  }
  dispose() {
    this.abortCompression(), this._glName && this._descriptor.context.instanceCounter.decrement(V.Texture, this), this._descriptor.context.gl && this._glName && (this._descriptor.context.unbindTexture(this), this._descriptor.context.gl.deleteTexture(this._glName), this._glName = null);
  }
  release() {
    this.dispose();
  }
  resize(e4, i) {
    const r3 = this._descriptor;
    if (r3.width !== e4 || r3.height !== i) {
      if (this._wasImmutablyAllocated) throw new s("Immutable textures can't be resized!");
      r3.width = e4, r3.height = i, this._descriptor.target === M.TEXTURE_CUBE_MAP ? this._setDataCubeMap(null) : this.setData(null);
    }
  }
  enableCompression(t2) {
    this._descriptor.shouldCompress = t2;
  }
  setData(t2) {
    this.abortCompression(), !d(t2) && this._descriptor.internalFormat && this._descriptor.internalFormat in c && (this._descriptor.internalFormat = void 0), this._setData(t2), !d(t2) && this._descriptor.shouldCompress && this._compressOnWorker(t2);
  }
  updateData(i, r3, s3, o3, a3, n3, l2 = 0) {
    n3 || f2().error("An attempt to use uninitialized data!"), this._glName || f2().error("An attempt to update uninitialized texture!");
    const p3 = this._descriptor;
    p3.internalFormat = T(p3);
    const { context: m2, pixelFormat: h2, dataType: u4, target: g2, isImmutable: T2 } = p3;
    if (T2 && !this._wasImmutablyAllocated) throw new s("Cannot update immutable texture before allocation!");
    const x = m2.bindTexture(this, e3.TEXTURE_UNIT_FOR_UPDATES, true);
    (r3 < 0 || s3 < 0 || r3 + o3 > p3.width || s3 + a3 > p3.height) && f2().error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const { gl: E3 } = m2;
    l2 && (o3 && a3 || f2().warn("Must pass width and height if `UNPACK_SKIP_ROWS` is used"), E3.pixelStorei(E3.UNPACK_SKIP_ROWS, l2)), f(n3) ? E3.texSubImage2D(g2, i, r3, s3, o3, a3, h2, u4, n3) : d(n3) ? E3.compressedTexSubImage2D(g2, i, r3, s3, o3, a3, p3.internalFormat, n3.levels[i]) : E3.texSubImage2D(g2, i, r3, s3, o3, a3, h2, u4, n3), l2 && E3.pixelStorei(E3.UNPACK_SKIP_ROWS, 0), m2.bindTexture(x, e3.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData3D(i, r3, s3, o3, a3, n3, l2, p3) {
    p3 || f2().error("An attempt to use uninitialized data!"), this._glName || f2().error("An attempt to update an uninitialized texture!");
    const m2 = this._descriptor;
    m2.internalFormat = T(m2);
    const { context: h2, pixelFormat: c4, dataType: g2, isImmutable: T2, target: x } = m2;
    if (T2 && !this._wasImmutablyAllocated) throw new s("Cannot update immutable texture before allocation!");
    p2(x) || f2().warn("Attempting to set 3D texture data on a non-3D texture");
    const E3 = h2.bindTexture(this, e3.TEXTURE_UNIT_FOR_UPDATES);
    h2.setActiveTexture(e3.TEXTURE_UNIT_FOR_UPDATES), (r3 < 0 || s3 < 0 || o3 < 0 || r3 + a3 > m2.width || s3 + n3 > m2.height || o3 + l2 > m2.depth) && f2().error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const { gl: M2 } = h2;
    if (d(p3)) p3 = p3.levels[i], M2.compressedTexSubImage3D(x, i, r3, s3, o3, a3, n3, l2, m2.internalFormat, p3);
    else {
      const t2 = p3;
      M2.texSubImage3D(x, i, r3, s3, o3, a3, n3, l2, c4, g2, t2);
    }
    h2.bindTexture(E3, e3.TEXTURE_UNIT_FOR_UPDATES);
  }
  generateMipmap() {
    const i = this._descriptor;
    if (0 === i.width || 0 === i.height) return;
    if (!i.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new s("Cannot add mipmaps to immutable texture after allocation");
      i.hasMipmap = true, this._samplingModeDirty = true, l(i);
    }
    i.samplingMode === L.LINEAR ? (this._samplingModeDirty = true, i.samplingMode = L.LINEAR_MIPMAP_NEAREST) : i.samplingMode === L.NEAREST && (this._samplingModeDirty = true, i.samplingMode = L.NEAREST_MIPMAP_NEAREST);
    const r3 = this._descriptor.context.bindTexture(this, e3.TEXTURE_UNIT_FOR_UPDATES);
    this._descriptor.context.setActiveTexture(e3.TEXTURE_UNIT_FOR_UPDATES), this._descriptor.context.gl.generateMipmap(i.target), this._descriptor.context.bindTexture(r3, e3.TEXTURE_UNIT_FOR_UPDATES);
  }
  clearMipmap() {
    const e4 = this._descriptor;
    if (e4.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new s("Cannot delete mipmaps to immutable texture after allocation");
      e4.hasMipmap = false, this._samplingModeDirty = true, l(e4);
    }
    e4.samplingMode === L.LINEAR_MIPMAP_NEAREST ? (this._samplingModeDirty = true, e4.samplingMode = L.LINEAR) : e4.samplingMode === L.NEAREST_MIPMAP_NEAREST && (this._samplingModeDirty = true, e4.samplingMode = L.NEAREST);
  }
  setSamplingMode(t2) {
    t2 !== this._descriptor.samplingMode && (this._descriptor.samplingMode = t2, this._samplingModeDirty = true);
  }
  setWrapMode(t2) {
    t2 !== this._descriptor.wrapMode && (this._descriptor.wrapMode = t2, l(this._descriptor), this._wrapModeDirty = true);
  }
  applyChanges() {
    this._samplingModeDirty && (this._applySamplingMode(), this._samplingModeDirty = false), this._wrapModeDirty && (this._applyWrapMode(), this._wrapModeDirty = false);
  }
  abortCompression() {
    this.isCompressing && (this._compressionAbortController.value = e(this._compressionAbortController.value));
  }
  _setData(i, r3) {
    var _a;
    const s3 = this._descriptor, a3 = (_a = s3.context) == null ? void 0 : _a.gl;
    if (!a3) return;
    u(a3), this._glName || (this._glName = a3.createTexture(), this._glName && s3.context.instanceCounter.increment(V.Texture, this)), l(s3);
    const l2 = s3.context.bindTexture(this, e3.TEXTURE_UNIT_FOR_UPDATES);
    s3.context.setActiveTexture(e3.TEXTURE_UNIT_FOR_UPDATES), this._configurePixelStorage(), u(a3);
    const p3 = r3 ?? s3.target, m2 = p2(p3);
    if (f(i)) this._setDataFromTexImageSource(i, p3);
    else {
      const { width: e4, height: r4, depth: n3 } = s3;
      if (null == e4 || null == r4) throw new s("Width and height must be specified!");
      if (m2 && null == n3) throw new s("Depth must be specified!");
      if (s3.internalFormat = T(s3), s3.isImmutable && !this._wasImmutablyAllocated && this._texStorage(p3, s3.internalFormat, s3.hasMipmap, e4, r4, n3), d(i)) {
        if (!c3(s3.internalFormat)) throw new s("Attempting to use compressed data with an uncompressed format!");
        this._setDataFromCompressedSource(i, s3.internalFormat, p3);
      } else this._texImage(p3, 0, s3.internalFormat, e4, r4, n3, i), u(a3), s3.hasMipmap && this.generateMipmap();
    }
    this._applySamplingMode(), this._applyWrapMode(), this._applyAnisotropicFilteringParameters(), u(a3), s3.context.bindTexture(l2, e3.TEXTURE_UNIT_FOR_UPDATES);
  }
  _setDataCubeMap(t2 = null) {
    for (let e4 = M.TEXTURE_CUBE_MAP_POSITIVE_X; e4 <= M.TEXTURE_CUBE_MAP_NEGATIVE_Z; e4++) this._setData(t2, e4);
  }
  _configurePixelStorage() {
    const t2 = this._descriptor.context.gl, { unpackAlignment: e4, flipped: i, preMultiplyAlpha: r3 } = this._descriptor;
    t2.pixelStorei(t2.UNPACK_ALIGNMENT, e4), t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, i ? 1 : 0), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r3 ? 1 : 0);
  }
  _setDataFromTexImageSource(t2, e4) {
    const { gl: i } = this._descriptor.context, r3 = this._descriptor;
    r3.internalFormat = T(r3);
    const s3 = p2(e4), { width: a3, height: n3, depth: l2 } = g(t2);
    r3.width && r3.height, r3.width || (r3.width = a3), r3.height || (r3.height = n3), s3 && r3.depth, s3 && (r3.depth = l2), r3.isImmutable && !this._wasImmutablyAllocated && this._texStorage(e4, r3.internalFormat, r3.hasMipmap, a3, n3, l2), this._texImage(e4, 0, r3.internalFormat, a3, n3, l2, t2), u(i), r3.hasMipmap && (this.generateMipmap(), u(i));
  }
  _setDataFromCompressedSource(t2, e4, i) {
    const r3 = this._descriptor, { width: s3, height: o3, depth: a3 } = r3, n3 = t2.levels, l2 = E2(i, s3, o3, a3), p3 = Math.min(l2, n3.length) - 1;
    this._descriptor.context.gl.texParameteri(r3.target, r3.context.gl.TEXTURE_MAX_LEVEL, p3), this._forEachMipmapLevel((t3, r4, s4, o4) => {
      const a4 = n3[Math.min(t3, n3.length - 1)];
      this._compressedTexImage(i, t3, e4, r4, s4, o4, a4);
    }, p3);
  }
  _texStorage(e4, i, r3, s3, o3, a3) {
    const { gl: n3 } = this._descriptor.context;
    if (!h(i)) throw new s("Immutable textures must have a sized internal format");
    if (!this._descriptor.isImmutable) return;
    const l2 = r3 ? E2(e4, s3, o3, a3) : 1;
    if (p2(e4)) {
      if (null == a3) throw new s("Missing depth dimension for 3D texture upload");
      n3.texStorage3D(e4, l2, i, s3, o3, a3);
    } else n3.texStorage2D(e4, l2, i, s3, o3);
    this._wasImmutablyAllocated = true;
  }
  _texImage(e4, i, r3, s3, o3, a3, n3) {
    const l2 = this._descriptor.context.gl, p3 = p2(e4), { isImmutable: m2, pixelFormat: h2, dataType: _2 } = this._descriptor;
    if (m2) {
      if (null != n3) {
        const r4 = n3;
        if (p3) {
          if (null == a3) throw new s("Missing depth dimension for 3D texture upload");
          l2.texSubImage3D(e4, i, 0, 0, 0, s3, o3, a3, h2, _2, r4);
        } else l2.texSubImage2D(e4, i, 0, 0, s3, o3, h2, _2, r4);
      }
    } else {
      const m3 = n3;
      if (p3) {
        if (null == a3) throw new s("Missing depth dimension for 3D texture upload");
        l2.texImage3D(e4, i, r3, s3, o3, a3, 0, h2, _2, m3);
      } else l2.texImage2D(e4, i, r3, s3, o3, 0, h2, _2, m3);
    }
  }
  _compressedTexImage(e4, i, r3, s3, o3, a3, n3) {
    const l2 = this._descriptor.context.gl, p3 = p2(e4);
    if (this._descriptor.isImmutable) {
      if (null != n3) if (p3) {
        if (null == a3) throw new s("Missing depth dimension for 3D texture upload");
        l2.compressedTexSubImage3D(e4, i, 0, 0, 0, s3, o3, a3, r3, n3);
      } else l2.compressedTexSubImage2D(e4, i, 0, 0, s3, o3, r3, n3);
    } else if (p3) {
      if (null == a3) throw new s("Missing depth dimension for 3D texture upload");
      l2.compressedTexImage3D(e4, i, r3, s3, o3, a3, 0, n3);
    } else l2.compressedTexImage2D(e4, i, r3, s3, o3, 0, n3);
  }
  async _compressOnWorker(t2) {
    var _a, _b;
    if (!e3.compressionWorkerHandle || !e3.compressionWorkerHandle.isCompressible(t2)) return;
    const i = (_a = this._descriptor.context) == null ? void 0 : _a.gl.getExtension("WEBGL_compressed_texture_etc"), s3 = (_b = this._descriptor.context) == null ? void 0 : _b.gl.getExtension("WEBGL_compressed_texture_s3tc");
    if (i || s3) {
      const o3 = new AbortController();
      this._compressionAbortController.value = o3;
      const a3 = { data: await createImageBitmap(t2), flipped: this.descriptor.flipped, width: t2.width, height: t2.height, hasMipmap: this._descriptor.hasMipmap, hasETC: !!i, hasS3TC: !!s3 };
      e3.compressionWorkerHandle.invoke(a3, this._compressionAbortController.value.signal).then((t3) => {
        t3 && this.isCompressing && this.glName && (this._descriptor.internalFormat = t3.internalFormat, this._setData(t3.compressedTexture)), o3 === this._compressionAbortController.value && (this._compressionAbortController.value = null);
      }).catch((t3) => {
        b(t3) || o3 !== this._compressionAbortController.value || (this._compressionAbortController.value = null);
      });
    }
  }
  _forEachMipmapLevel(e4, i = 1 / 0) {
    let { width: r3, height: s3, depth: o3, hasMipmap: n3, target: l2 } = this._descriptor;
    const p3 = l2 === M.TEXTURE_3D;
    if (null == r3 || null == s3 || p3 && null == o3) throw new s("Missing texture dimensions for mipmap calculation");
    for (let t2 = 0; e4(t2, r3, s3, o3), n3 && (1 !== r3 || 1 !== s3 || p3 && 1 !== o3) && !(t2 >= i); ++t2) r3 = Math.max(1, r3 >> 1), s3 = Math.max(1, s3 >> 1), p3 && (o3 = Math.max(1, o3 >> 1));
  }
  _applySamplingMode() {
    var _a;
    const t2 = this._descriptor, e4 = (_a = t2.context) == null ? void 0 : _a.gl;
    let i = t2.samplingMode, r3 = t2.samplingMode;
    i === L.LINEAR_MIPMAP_NEAREST || i === L.LINEAR_MIPMAP_LINEAR ? (i = L.LINEAR, t2.hasMipmap || (r3 = L.LINEAR)) : i !== L.NEAREST_MIPMAP_NEAREST && i !== L.NEAREST_MIPMAP_LINEAR || (i = L.NEAREST, t2.hasMipmap || (r3 = L.NEAREST)), e4.texParameteri(t2.target, e4.TEXTURE_MAG_FILTER, i), e4.texParameteri(t2.target, e4.TEXTURE_MIN_FILTER, r3);
  }
  _applyWrapMode() {
    var _a;
    const t2 = this._descriptor, e4 = (_a = t2.context) == null ? void 0 : _a.gl;
    "number" == typeof t2.wrapMode ? (e4.texParameteri(t2.target, e4.TEXTURE_WRAP_S, t2.wrapMode), e4.texParameteri(t2.target, e4.TEXTURE_WRAP_T, t2.wrapMode)) : (e4.texParameteri(t2.target, e4.TEXTURE_WRAP_S, t2.wrapMode.s), e4.texParameteri(t2.target, e4.TEXTURE_WRAP_T, t2.wrapMode.t));
  }
  _applyAnisotropicFilteringParameters() {
    const t2 = this._descriptor, e4 = t2.context.capabilities.textureFilterAnisotropic;
    if (!e4) return;
    t2.context.gl.texParameterf(t2.target, e4.TEXTURE_MAX_ANISOTROPY, t2.maxAnisotropy ?? 1);
  }
};
w.TEXTURE_UNIT_FOR_UPDATES = 0, w.compressionWorkerHandle = null;

export {
  a,
  c2 as c,
  u,
  e2 as e,
  o2 as o,
  E,
  _,
  u2,
  p,
  a2,
  w
};
//# sourceMappingURL=chunk-5AJMZDUM.js.map
