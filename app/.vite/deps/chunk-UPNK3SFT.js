import {
  c
} from "./chunk-5AJMZDUM.js";
import {
  H,
  V
} from "./chunk-CRKFUUKK.js";

// node_modules/@arcgis/core/views/webgl/reservedWordsGLSL3.js
var e = ["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"];

// node_modules/@arcgis/core/views/webgl/testUtils.js
var e2 = { enableCache: false };

// node_modules/@arcgis/core/views/webgl/ShaderTranspiler.js
var a = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"];
var o = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"];
var n = ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT", "textureSize", "texelFetch"];
var i = 999;
var l = 9999;
var s = 0;
var c2 = 1;
var d = 2;
var u = 3;
var g = 4;
var p = 5;
var f = 6;
var _ = 7;
var h = 8;
var x = 9;
var m = 10;
var y = 11;
var w = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"];
function M() {
  var e5, t, r2, M2 = 0, v2 = 0, T2 = i, b2 = [], P2 = [], E2 = 1, C2 = 0, k2 = 0, D2 = false, j2 = false, F2 = "";
  return function(e6) {
    return P2 = [], null !== e6 ? S2(e6.replace ? e6.replace(/\r\n/g, "\n") : e6) : R2();
  };
  function L2(e6) {
    e6.length && P2.push({ type: w[T2], data: e6, position: k2, line: E2, column: C2 });
  }
  function S2(t2) {
    var a3;
    for (M2 = 0, r2 = (F2 += t2).length; e5 = F2[M2], M2 < r2; ) {
      switch (a3 = M2, T2) {
        case s:
          M2 = I();
          break;
        case c2:
          M2 = G();
          break;
        case d:
          M2 = A();
          break;
        case u:
          M2 = O();
          break;
        case g:
          M2 = B();
          break;
        case y:
          M2 = q();
          break;
        case p:
          M2 = H2();
          break;
        case l:
          M2 = N();
          break;
        case x:
          M2 = X2();
          break;
        case i:
          M2 = V3();
      }
      if (a3 !== M2) if ("\n" === F2[a3]) C2 = 0, ++E2;
      else ++C2;
    }
    return v2 += M2, F2 = F2.slice(M2), P2;
  }
  function R2(e6) {
    return b2.length && L2(b2.join("")), T2 = m, L2("(eof)"), P2;
  }
  function V3() {
    return b2 = b2.length ? [] : b2, "/" === t && "*" === e5 ? (k2 = v2 + M2 - 1, T2 = s, t = e5, M2 + 1) : "/" === t && "/" === e5 ? (k2 = v2 + M2 - 1, T2 = c2, t = e5, M2 + 1) : "#" === e5 ? (T2 = d, k2 = v2 + M2, M2) : /\s/.test(e5) ? (T2 = x, k2 = v2 + M2, M2) : (D2 = /\d/.test(e5), j2 = /[^\w_]/.test(e5), k2 = v2 + M2, T2 = D2 ? g : j2 ? u : l, M2);
  }
  function X2() {
    return /[^\s]/g.test(e5) ? (L2(b2.join("")), T2 = i, M2) : (b2.push(e5), t = e5, M2 + 1);
  }
  function A() {
    return "\r" !== e5 && "\n" !== e5 || "\\" === t ? (b2.push(e5), t = e5, M2 + 1) : (L2(b2.join("")), T2 = i, M2);
  }
  function G() {
    return A();
  }
  function I() {
    return "/" === e5 && "*" === t ? (b2.push(e5), L2(b2.join("")), T2 = i, M2 + 1) : (b2.push(e5), t = e5, M2 + 1);
  }
  function O() {
    if ("." === t && /\d/.test(e5)) return T2 = p, M2;
    if ("/" === t && "*" === e5) return T2 = s, M2;
    if ("/" === t && "/" === e5) return T2 = c2, M2;
    if ("." === e5 && b2.length) {
      for (; U(b2); ) ;
      return T2 = p, M2;
    }
    if (";" === e5 || ")" === e5 || "(" === e5) {
      if (b2.length) for (; U(b2); ) ;
      return L2(e5), T2 = i, M2 + 1;
    }
    var r3 = 2 === b2.length && "=" !== e5;
    if (/[\w_\d\s]/.test(e5) || r3) {
      for (; U(b2); ) ;
      return T2 = i, M2;
    }
    return b2.push(e5), t = e5, M2 + 1;
  }
  function U(e6) {
    for (var t2, r3, a3 = 0; ; ) {
      if (t2 = o.indexOf(e6.slice(0, e6.length + a3).join("")), r3 = o[t2], -1 === t2) {
        if (a3-- + e6.length > 0) continue;
        r3 = e6.slice(0, 1).join("");
      }
      return L2(r3), k2 += r3.length, (b2 = b2.slice(r3.length)).length;
    }
  }
  function q() {
    return /[^a-fA-F0-9]/.test(e5) ? (L2(b2.join("")), T2 = i, M2) : (b2.push(e5), t = e5, M2 + 1);
  }
  function B() {
    return "." === e5 || /[eE]/.test(e5) ? (b2.push(e5), T2 = p, t = e5, M2 + 1) : "x" === e5 && 1 === b2.length && "0" === b2[0] ? (T2 = y, b2.push(e5), t = e5, M2 + 1) : /[^\d]/.test(e5) ? (L2(b2.join("")), T2 = i, M2) : (b2.push(e5), t = e5, M2 + 1);
  }
  function H2() {
    return "f" === e5 && (b2.push(e5), t = e5, M2 += 1), /[eE]/.test(e5) || "-" === e5 && /[eE]/.test(t) ? (b2.push(e5), t = e5, M2 + 1) : /[^\d]/.test(e5) ? (L2(b2.join("")), T2 = i, M2) : (b2.push(e5), t = e5, M2 + 1);
  }
  function N() {
    if (/[^\d\w_]/.test(e5)) {
      var r3 = b2.join("");
      return T2 = a.indexOf(r3) > -1 ? h : n.indexOf(r3) > -1 ? _ : f, L2(b2.join("")), T2 = i, M2;
    }
    return b2.push(e5), t = e5, M2 + 1;
  }
}
function v(e5) {
  var t = M(), r2 = [];
  return r2 = (r2 = r2.concat(t(e5))).concat(t(null));
}
function T(e5) {
  return v(e5);
}
function b(e5) {
  return e5.map((e6) => "eof" !== e6.type ? e6.data : "").join("");
}
var P = /* @__PURE__ */ new Set(["GL_OES_standard_derivatives", "GL_EXT_frag_depth", "GL_EXT_draw_buffers", "GL_EXT_shader_texture_lod"]);
function E(e5, t = "100", r2 = "300 es") {
  const a3 = /^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;
  for (const o3 of e5) if ("preprocessor" === o3.type) {
    const e6 = a3.exec(o3.data);
    if (e6) {
      const a4 = e6[1].replaceAll(/\s{2,}/g, " ");
      if (a4 === r2) return a4;
      if (a4 === t) return o3.data = "#version " + r2, t;
      throw new Error("unknown glsl version: " + a4);
    }
  }
  return e5.splice(0, 0, { type: "preprocessor", data: "#version " + r2 }, { type: "whitespace", data: "\n" }), null;
}
function C(e5, t) {
  for (let r2 = t - 1; r2 >= 0; r2--) {
    const t2 = e5[r2];
    if ("whitespace" !== t2.type && "block-comment" !== t2.type) {
      if ("keyword" !== t2.type) break;
      if ("attribute" === t2.data || "in" === t2.data) return true;
    }
  }
  return false;
}
function k(e5, t, r2, a3) {
  a3 = a3 || r2;
  for (const o3 of e5) if ("ident" === o3.type && o3.data === r2) {
    a3 in t ? t[a3]++ : t[a3] = 0;
    return k(e5, t, a3 + "_" + t[a3], a3);
  }
  return r2;
}
function D(e5, t, r2 = "afterVersion") {
  function a3(e6, t2) {
    for (let r3 = t2; r3 < e6.length; r3++) {
      const t3 = e6[r3];
      if ("operator" === t3.type && ";" === t3.data) return r3;
    }
    return null;
  }
  function o3(e6) {
    let t2 = -1, o4 = 0, n3 = -1;
    for (let i3 = 0; i3 < e6.length; i3++) {
      const l3 = e6[i3];
      if ("preprocessor" === l3.type && (/#(if|ifdef|ifndef)\s+.+/.test(l3.data) ? ++o4 : /#endif\s*.*/.test(l3.data) && --o4), "afterVersion" !== r2 && "afterPrecision" !== r2 || "preprocessor" === l3.type && l3.data.startsWith("#version") && (n3 = Math.max(n3, i3)), "afterPrecision" === r2 && "keyword" === l3.type && "precision" === l3.data) {
        const t3 = a3(e6, i3);
        if (null === t3) throw new Error("precision statement not followed by any semicolons!");
        n3 = Math.max(n3, t3);
      }
      t2 < n3 && 0 === o4 && (t2 = i3);
    }
    return t2 + 1;
  }
  const n2 = { data: "\n", type: "whitespace" }, i2 = (t2) => t2 < e5.length && /[^\r\n]$/.test(e5[t2].data);
  let l2 = o3(e5);
  i2(l2 - 1) && e5.splice(l2++, 0, n2);
  for (const s3 of t) e5.splice(l2++, 0, s3);
  i2(l2 - 1) && i2(l2) && e5.splice(l2, 0, n2);
}
function j(e5, t, r2, a3 = "lowp") {
  D(e5, [{ type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: a3 }, { type: "whitespace", data: " " }, { type: "keyword", data: r2 }, { type: "whitespace", data: " " }, { type: "ident", data: t }, { type: "operator", data: ";" }], "afterPrecision");
}
function F(e5, t, r2, a3, o3 = "lowp") {
  D(e5, [{ type: "keyword", data: "layout" }, { type: "operator", data: "(" }, { type: "keyword", data: "location" }, { type: "whitespace", data: " " }, { type: "operator", data: "=" }, { type: "whitespace", data: " " }, { type: "integer", data: a3.toString() }, { type: "operator", data: ")" }, { type: "whitespace", data: " " }, { type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: o3 }, { type: "whitespace", data: " " }, { type: "keyword", data: r2 }, { type: "whitespace", data: " " }, { type: "ident", data: t }, { type: "operator", data: ";" }], "afterPrecision");
}
function L(e5, t) {
  let r2, a3, o3 = -1;
  for (let n2 = t; n2 < e5.length; n2++) {
    const t2 = e5[n2];
    if ("operator" === t2.type && ("[" === t2.data && (r2 = n2), "]" === t2.data)) {
      a3 = n2;
      break;
    }
    "integer" === t2.type && (o3 = parseInt(t2.data, 10));
  }
  return r2 && a3 && e5.splice(r2, a3 - r2 + 1), o3;
}
function S(r2, a3) {
  if (r2.startsWith("#version 300")) return r2;
  const o3 = V2(r2);
  if (null != o3) return o3;
  const n2 = T(r2);
  if ("300 es" === E(n2, "100", "300 es")) return r2;
  let i2 = null, l2 = null;
  const s3 = {}, c3 = {};
  for (let d2 = 0; d2 < n2.length; ++d2) {
    const r3 = n2[d2];
    switch (r3.type) {
      case "keyword":
        a3 === H.VERTEX_SHADER && "attribute" === r3.data ? r3.data = "in" : "varying" === r3.data && (r3.data = a3 === H.VERTEX_SHADER ? "out" : "in");
        break;
      case "builtin":
        if (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(r3.data.trim()) && (r3.data = r3.data.replaceAll(/(2D|Cube|EXT)/g, "")), a3 === H.FRAGMENT_SHADER && "gl_FragColor" === r3.data && (i2 || (i2 = k(n2, s3, "fragColor"), j(n2, i2, "vec4")), r3.data = i2), a3 === H.FRAGMENT_SHADER && "gl_FragData" === r3.data) {
          const e5 = L(n2, d2 + 1), t = k(n2, s3, "fragData");
          F(n2, t, "vec4", e5, "mediump"), r3.data = t;
        } else a3 === H.FRAGMENT_SHADER && "gl_FragDepthEXT" === r3.data && (l2 || (l2 = k(n2, s3, "gl_FragDepth")), r3.data = l2);
        break;
      case "ident":
        if (e.includes(r3.data)) {
          if (a3 === H.VERTEX_SHADER && C(n2, d2)) throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");
          r3.data in c3 || (c3[r3.data] = k(n2, s3, r3.data)), r3.data = c3[r3.data];
        }
    }
  }
  for (let e5 = n2.length - 1; e5 >= 0; --e5) {
    const t = n2[e5];
    if ("preprocessor" === t.type) {
      const r3 = t.data.match(/#extension\s+(.*):/);
      if ((r3 == null ? void 0 : r3[1]) && P.has(r3[1].trim())) {
        const t2 = n2[e5 + 1];
        n2.splice(e5, t2 && "whitespace" === t2.type ? 2 : 1);
      }
      const a4 = t.data.match(/#ifdef\s+(.*)/);
      (a4 == null ? void 0 : a4[1]) && P.has(a4[1].trim()) && (t.data = "#if 1");
      const o4 = t.data.match(/#ifndef\s+(.*)/);
      (o4 == null ? void 0 : o4[1]) && P.has(o4[1].trim()) && (t.data = "#if 0");
    }
  }
  return X(r2, b(n2));
}
var R = /* @__PURE__ */ new Map();
function V2(e5) {
  return e2.enableCache ? R.get(e5) : null;
}
function X(e5, t) {
  return e2.enableCache && R.set(e5, t), t;
}

// node_modules/@arcgis/core/views/webgl/Program.js
var o2 = 4294967295;
var r = class {
  constructor(r2, a3, h3, m3, c3 = /* @__PURE__ */ new Map(), _2 = []) {
    var _a;
    this._context = r2, this._locations = m3, this._uniformBlockBindings = c3, this._transformFeedbackVaryings = _2, this._refCount = 1, this._compiled = false, this._linesOfCode = 0, this._nameToUniformLocation = /* @__PURE__ */ new Map(), this._nameToUniform1 = /* @__PURE__ */ new Map(), this._nameToUniform1v = /* @__PURE__ */ new Map(), this._nameToUniform2 = /* @__PURE__ */ new Map(), this._nameToUniform3 = /* @__PURE__ */ new Map(), this._nameToUniform4 = /* @__PURE__ */ new Map(), this._nameToUniformMatrix3 = /* @__PURE__ */ new Map(), this._nameToUniformMatrix4 = /* @__PURE__ */ new Map(), r2 || console.error("RenderingContext isn't initialized!"), 0 === a3.length && console.error("Shaders source should not be empty!"), a3 = S(a3, H.VERTEX_SHADER), h3 = S(h3, H.FRAGMENT_SHADER), this._vShader = s2(this._context, H.VERTEX_SHADER, a3), this._fShader = s2(this._context, H.FRAGMENT_SHADER, h3), f2.enabled && (this._linesOfCode = a3.match(/\n/g).length + h3.match(/\n/g).length + 2, this._context.instanceCounter.increment(V.LinesOfCode, this._vShader, this._linesOfCode)), this._vShader && this._fShader || console.error("Error loading shaders!"), this._context.instanceCounter.increment(V.Shader, this), c() && (this.vertexShader = a3, this.fragmentShader = h3), this.usedMemory = a3.length + h3.length;
    const l2 = this._context.gl, g2 = l2.createProgram();
    l2.attachShader(g2, this._vShader), l2.attachShader(g2, this._fShader), this._locations.forEach((t, e5) => l2.bindAttribLocation(g2, t, e5)), ((_a = this._transformFeedbackVaryings) == null ? void 0 : _a.length) && l2.transformFeedbackVaryings(g2, this._transformFeedbackVaryings, l2.SEPARATE_ATTRIBS), l2.linkProgram(g2), c() && !l2.getProgramParameter(g2, l2.LINK_STATUS) && console.error(`Could not link shader
validated: ${l2.getProgramParameter(g2, l2.VALIDATE_STATUS)}, gl error ${l2.getError()}, vertex: ${l2.getShaderParameter(this._vShader, l2.COMPILE_STATUS)}, fragment: ${l2.getShaderParameter(this._fShader, l2.COMPILE_STATUS)}, info log: ${l2.getProgramInfoLog(g2)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);
    for (const [t, e5] of this._uniformBlockBindings) {
      const n2 = l2.getUniformBlockIndex(g2, t);
      n2 < o2 && l2.uniformBlockBinding(g2, n2, e5);
    }
    this._glName = g2, this._context.instanceCounter.increment(V.Program, this);
  }
  get glName() {
    return this._glName;
  }
  get hasGLName() {
    return null != this._glName;
  }
  get hasTransformFeedbackVaryings() {
    var _a;
    return !!((_a = this._transformFeedbackVaryings) == null ? void 0 : _a.length);
  }
  get compiled() {
    if (this._compiled) return true;
    const t = this._context.gl.getExtension("KHR_parallel_shader_compile");
    return null == t || null == this.glName ? (this._compiled = true, true) : (this._compiled = !!this._context.gl.getProgramParameter(this.glName, t.COMPLETION_STATUS_KHR), this._compiled);
  }
  dispose() {
    if (--this._refCount > 0) return;
    const t = this._context.gl, e5 = this._context.instanceCounter;
    this._nameToUniformLocation.forEach((t2) => t2 && e5.decrement(V.Uniform, t2)), this._nameToUniformLocation.clear(), this._vShader && (this._linesOfCode > 0 && (e5.decrement(V.LinesOfCode, this._vShader, this._linesOfCode), this._linesOfCode = 0), t.deleteShader(this._vShader), this._vShader = null, e5.decrement(V.Shader, this)), this._fShader && (t.deleteShader(this._fShader), this._fShader = null), this._glName && (t.deleteProgram(this._glName), this._glName = null, e5.decrement(V.Program, this));
  }
  ref() {
    ++this._refCount;
  }
  _getUniformLocation(t) {
    const e5 = this._nameToUniformLocation.get(t);
    if (void 0 !== e5) return e5;
    if (this.glName) {
      const e6 = this._context.gl.getUniformLocation(this.glName, t);
      return this._nameToUniformLocation.set(t, e6), e6 && this._context.instanceCounter.increment(V.Uniform, e6), e6;
    }
    return null;
  }
  hasUniform(t) {
    return null != this._getUniformLocation(t);
  }
  setUniform1i(t, e5) {
    const n2 = this._nameToUniform1.get(t);
    void 0 !== n2 && e5 === n2 || (this._context.gl.uniform1i(this._getUniformLocation(t), e5), this._nameToUniform1.set(t, e5));
  }
  setUniform1iv(t, e5) {
    m2(this._nameToUniform1v, t, e5) && this._context.gl.uniform1iv(this._getUniformLocation(t), e5);
  }
  setUniform2iv(t, e5) {
    m2(this._nameToUniform2, t, e5) && this._context.gl.uniform2iv(this._getUniformLocation(t), e5);
  }
  setUniform3iv(t, e5) {
    m2(this._nameToUniform3, t, e5) && this._context.gl.uniform3iv(this._getUniformLocation(t), e5);
  }
  setUniform4iv(t, e5) {
    m2(this._nameToUniform4, t, e5) && this._context.gl.uniform4iv(this._getUniformLocation(t), e5);
  }
  setUniform1f(t, e5) {
    const n2 = this._nameToUniform1.get(t);
    void 0 !== n2 && e5 === n2 || (this._context.gl.uniform1f(this._getUniformLocation(t), e5), this._nameToUniform1.set(t, e5));
  }
  setUniform1fv(t, e5) {
    m2(this._nameToUniform1v, t, e5) && this._context.gl.uniform1fv(this._getUniformLocation(t), e5);
  }
  setUniform2f(t, e5, n2) {
    const i2 = this._nameToUniform2.get(t);
    void 0 === i2 ? (this._context.gl.uniform2f(this._getUniformLocation(t), e5, n2), this._nameToUniform2.set(t, [e5, n2])) : e5 === i2[0] && n2 === i2[1] || (this._context.gl.uniform2f(this._getUniformLocation(t), e5, n2), i2[0] = e5, i2[1] = n2);
  }
  setUniform2fv(t, e5) {
    m2(this._nameToUniform2, t, e5) && this._context.gl.uniform2fv(this._getUniformLocation(t), e5);
  }
  setUniform3f(t, e5, n2, i2) {
    const o3 = this._nameToUniform3.get(t);
    void 0 === o3 ? (this._context.gl.uniform3f(this._getUniformLocation(t), e5, n2, i2), this._nameToUniform3.set(t, [e5, n2, i2])) : e5 === o3[0] && n2 === o3[1] && i2 === o3[2] || (this._context.gl.uniform3f(this._getUniformLocation(t), e5, n2, i2), o3[0] = e5, o3[1] = n2, o3[2] = i2);
  }
  setUniform3fv(t, e5) {
    const n2 = this._getUniformLocation(t);
    null != n2 && m2(this._nameToUniform3, t, e5) && this._context.gl.uniform3fv(n2, e5);
  }
  setUniform4f(t, e5, n2, i2, o3) {
    const r2 = this._nameToUniform4.get(t);
    void 0 === r2 ? (this._context.gl.uniform4f(this._getUniformLocation(t), e5, n2, i2, o3), this._nameToUniform4.set(t, [e5, n2, i2, o3])) : void 0 !== r2 && e5 === r2[0] && n2 === r2[1] && i2 === r2[2] && o3 === r2[3] || (this._context.gl.uniform4f(this._getUniformLocation(t), e5, n2, i2, o3), r2[0] = e5, r2[1] = n2, r2[2] = i2, r2[3] = o3);
  }
  setUniform4fv(t, e5) {
    const n2 = this._getUniformLocation(t);
    null != n2 && m2(this._nameToUniform4, t, e5) && this._context.gl.uniform4fv(n2, e5);
  }
  setUniformMatrix3fv(t, e5, n2 = false) {
    const i2 = this._getUniformLocation(t);
    null != i2 && m2(this._nameToUniformMatrix3, t, e5) && this._context.gl.uniformMatrix3fv(i2, n2, e5);
  }
  setUniformMatrix4fv(t, e5, n2 = false) {
    const i2 = this._getUniformLocation(t);
    null != i2 && m2(this._nameToUniformMatrix4, t, e5) && this._context.gl.uniformMatrix4fv(i2, n2, e5);
  }
  stop() {
  }
};
function s2(n2, i2, o3) {
  const r2 = n2.gl, s3 = r2.createShader(i2);
  return r2.shaderSource(s3, o3), r2.compileShader(s3), c() && !r2.getShaderParameter(s3, r2.COMPILE_STATUS) && (console.error("Compile error in ".concat(i2 === H.VERTEX_SHADER ? "vertex" : "fragment", " shader")), console.error(r2.getShaderInfoLog(s3)), console.error(a2(o3))), s3;
}
function a2(t) {
  let e5 = 2;
  return t.replaceAll("\n", () => "\n" + h2(e5++) + ":");
}
function h2(t) {
  return t >= 1e3 ? t.toString() : ("  " + t).slice(-3);
}
function m2(t, e5, n2) {
  const i2 = t.get(e5);
  if (!i2) return t.set(e5, Array.from(n2)), true;
  const o3 = n2.length;
  if (i2.length !== o3) return t.set(e5, Array.from(n2)), true;
  for (let r2 = 0; r2 < o3; ++r2) {
    const t2 = n2[r2];
    if (i2[r2] !== t2) {
      for (i2[r2] = t2; r2 < o3; ++r2) i2[r2] = n2[r2];
      return true;
    }
  }
  return false;
}
var f2 = { enabled: false };

// node_modules/@arcgis/core/views/webgl/ShaderCompiler.js
var e3 = class {
  constructor(e5) {
    this._readFile = e5;
  }
  resolveIncludes(e5) {
    return this._resolve(e5);
  }
  _resolve(e5, t = /* @__PURE__ */ new Map()) {
    if (t.has(e5)) return t.get(e5);
    const r2 = this._read(e5);
    if (!r2) throw new Error(`cannot find shader file ${e5}`);
    const s3 = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
    let n2 = s3.exec(r2);
    const l2 = [];
    for (; null != n2; ) l2.push({ path: n2[1], start: n2.index, length: n2[0].length }), n2 = s3.exec(r2);
    let a3 = 0, h3 = "";
    return l2.forEach((e6) => {
      h3 += r2.slice(a3, e6.start), h3 += t.has(e6.path) ? "" : this._resolve(e6.path, t), a3 = e6.start + e6.length;
    }), h3 += r2.slice(a3), t.set(e5, h3), h3;
  }
  _read(e5) {
    return this._readFile(e5);
  }
};

// node_modules/@arcgis/core/views/webgl/ProgramTemplate.js
function e4(e5, t, a3 = "") {
  return new r(e5, a3 + t.shaders.vertexShader, a3 + t.shaders.fragmentShader, t.attributes);
}

export {
  r,
  e3 as e,
  e4 as e2
};
//# sourceMappingURL=chunk-UPNK3SFT.js.map
