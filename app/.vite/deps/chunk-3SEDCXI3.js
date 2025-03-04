import {
  e as e9,
  n as n9
} from "./chunk-4ATVMSVD.js";
import {
  e as e7,
  e2 as e8
} from "./chunk-UPNK3SFT.js";
import {
  e as e5
} from "./chunk-Z7G6RNT2.js";
import {
  E as E2,
  o as o3
} from "./chunk-HABQD3Y4.js";
import {
  $ as $2,
  n as n6,
  r as r4,
  s as s3,
  s2 as s4,
  s3 as s5
} from "./chunk-PMUCRJCT.js";
import {
  n as n8
} from "./chunk-QHF36O7C.js";
import {
  l,
  n as n5,
  r as r2
} from "./chunk-5ZG44LB7.js";
import {
  t as t2
} from "./chunk-3VWS6Q3L.js";
import {
  W,
  X
} from "./chunk-F7TFMQ3A.js";
import {
  e
} from "./chunk-J7454WTE.js";
import {
  e as e2
} from "./chunk-ZZ4UNY3F.js";
import {
  n as n10
} from "./chunk-G3KHB63E.js";
import {
  E as E3,
  N as N3,
  S,
  e as e6,
  f
} from "./chunk-RD3QRDRK.js";
import {
  n as n7
} from "./chunk-AI444EOP.js";
import {
  e as e4,
  r as r3
} from "./chunk-CTBXY22F.js";
import {
  e as e3
} from "./chunk-ZRT3UCXK.js";
import {
  $,
  Z,
  _,
  a,
  bi,
  ji,
  ki,
  xi
} from "./chunk-ANT4QPJQ.js";
import {
  n as n4,
  t
} from "./chunk-HYJ4YR5G.js";
import {
  p,
  w
} from "./chunk-5AJMZDUM.js";
import {
  C,
  D,
  E,
  F,
  I,
  L,
  N as N2,
  O,
  R
} from "./chunk-CRKFUUKK.js";
import {
  n as n3
} from "./chunk-O2L6JAHP.js";
import {
  i as i2,
  r,
  s as s2
} from "./chunk-LH36NQSN.js";
import {
  o as o2
} from "./chunk-K35H6D4D.js";
import {
  N,
  o
} from "./chunk-UMYFDXOJ.js";
import {
  i
} from "./chunk-6P7HXSJ6.js";
import {
  d
} from "./chunk-YSPSOPLL.js";
import {
  n as n2,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f32.js
function n11() {
  return new Float32Array(4);
}
function t3(n19) {
  const t11 = new Float32Array(4);
  return t11[0] = n19[0], t11[1] = n19[1], t11[2] = n19[2], t11[3] = n19[3], t11;
}
function r5(n19, t11, r12, e14) {
  const o7 = new Float32Array(4);
  return o7[0] = n19, o7[1] = t11, o7[2] = r12, o7[3] = e14, o7;
}
function e10(n19, t11) {
  return new Float32Array(n19, t11, 4);
}
function o4() {
  return n11();
}
function u2() {
  return r5(1, 1, 1, 1);
}
function c() {
  return r5(1, 0, 0, 0);
}
function i3() {
  return r5(0, 1, 0, 0);
}
function a2() {
  return r5(0, 0, 1, 0);
}
function f2() {
  return r5(0, 0, 0, 1);
}
var l2 = o4();
var _2 = u2();
var s6 = c();
var y = i3();
var w2 = a2();
var N4 = f2();
var T = Object.freeze(Object.defineProperty({ __proto__: null, ONES: _2, UNIT_W: N4, UNIT_X: s6, UNIT_Y: y, UNIT_Z: w2, ZEROS: l2, clone: t3, create: n11, createView: e10, fromValues: r5, ones: u2, unitW: f2, unitX: c, unitY: i3, unitZ: a2, zeros: o4 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/shaderRepository.js
var e11 = { background: { "background.frag": "uniform lowp vec4 u_color;\nvoid main() {\ngl_FragColor = u_color;\n}", "background.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_coord_range;\nuniform mediump float u_depth;\nvoid main() {\nvec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\n}" }, bitBlit: { "bitBlit.frag": "uniform lowp sampler2D u_tex;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nlowp vec4 color = texture2D(u_tex, v_uv);\ngl_FragColor = color * u_opacity;\n}", "bitBlit.vert": "attribute vec2 a_pos;\nattribute vec2 a_tex;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_pos , 0.0, 1.0);\nv_uv = a_tex;\n}" }, debug: { overlay: { "overlay.frag": "precision mediump float;\nvarying vec4 v_color;\nvoid main(void) {\ngl_FragColor = v_color;\n}", "overlay.vert": "attribute vec3 a_PositionAndFlags;\nuniform mat3 u_dvsMat3;\nuniform vec4 u_colors[4];\nuniform float u_opacities[4];\nvarying vec4 v_color;\nvoid main(void) {\nvec2 position = a_PositionAndFlags.xy;\nfloat flags = a_PositionAndFlags.z;\nint colorIndex = int(mod(flags, 4.0));\nvec4 color;\nfor (int i = 0; i < 4; i++) {\ncolor = u_colors[i];\nif (i == colorIndex) {\nbreak;\n}\n}\nint opacityIndex = int(mod(floor(flags / 4.0), 4.0));\nfloat opacity;\nfor (int i = 0; i < 4; i++) {\nopacity = u_opacities[i];\nif (i == opacityIndex) {\nbreak;\n}\n}\nv_color = color * opacity;\ngl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);\n}" } }, dot: { dot: { "dot.frag": "precision mediump float;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nuniform highp float u_tileZoomFactor;\nvoid main()\n{\nfloat dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;\nfloat alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);\ngl_FragColor = v_color * alpha;\n}", "dot.vert": "precision highp float;\nattribute vec2 a_pos;\nuniform sampler2D u_texture;\nuniform highp mat3 u_dvsMat3;\nuniform highp float u_tileZoomFactor;\nuniform highp float u_dotSize;\nuniform highp float u_pixelRatio;\nvarying vec2 v_pos;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nconst float EPSILON = 0.000001;\nvoid main()\n{\nmat3 tileToTileTexture = mat3(  1., 0., 0.,\n0., -1., 0.,\n0., 1., 1.  );\nvec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);\nv_color = texture2D(u_texture, texCoords.xy);\nfloat smoothEdgeWidth = max(u_dotSize / 2., 1.) ;\nfloat z = 0.;\nz += 2.0 * step(v_color.a, EPSILON);\ngl_PointSize = (smoothEdgeWidth + u_dotSize);\ngl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);\nv_dotRatio = u_dotSize / gl_PointSize;\nv_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );\ngl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);\n}" } }, filtering: { "bicubic.glsl": "vec4 computeWeights(float v) {\nfloat b = 1.0 / 6.0;\nfloat v2 = v * v;\nfloat v3 = v2 * v;\nfloat w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);\nfloat w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);\nfloat w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);\nfloat w3 = b * v3;\nreturn vec4(w0, w1, w2, w3);\n}\nvec4 bicubicOffsetsAndWeights(float v) {\nvec4 w = computeWeights(v);\nfloat g0 = w.x + w.y;\nfloat g1 = w.z + w.w;\nfloat h0 = 1.0 - (w.y / g0) + v;\nfloat h1 = 1.0 + (w.w / g1) - v;\nreturn vec4(h0, h1, g0, g1);\n}\nvec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 eX = vec2(1.0 / texSize.x, 0.0);\nvec2 eY = vec2(0.0, 1.0 / texSize.y);\nvec2 texel = coords * texSize - 0.5;\nvec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;\nvec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;\nvec2 coords10 = coords + hgX.x * eX;\nvec2 coords00 = coords - hgX.y * eX;\nvec2 coords11 = coords10 + hgY.x * eY;\nvec2 coords01 = coords00 + hgY.x * eY;\ncoords10 = coords10 - hgY.y * eY;\ncoords00 = coords00 - hgY.y * eY;\nvec4 color00 = texture2D(sampler, coords00);\nvec4 color10 = texture2D(sampler, coords10);\nvec4 color01 = texture2D(sampler, coords01);\nvec4 color11 = texture2D(sampler, coords11);\ncolor00 = mix(color00, color01, hgY.z);\ncolor10 = mix(color10, color11, hgY.z);\ncolor00 = mix(color00, color10, hgX.z);\nreturn color00;\n}", "bilinear.glsl": "vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 texelStart = floor(coords * texSize);\nvec2 coord0 = texelStart / texSize;\nvec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;\nvec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;\nvec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;\nvec4 color0 = texture2D(sampler, coord0);\nvec4 color1 = texture2D(sampler, coord1);\nvec4 color2 = texture2D(sampler, coord2);\nvec4 color3 = texture2D(sampler, coord3);\nvec2 blend = fract(coords * texSize);\nvec4 color01 = mix(color0, color1, blend.x);\nvec4 color23 = mix(color2, color3, blend.x);\nvec4 color = mix(color01, color23, blend.y);\n#ifdef NNEDGE\nfloat alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);\ncolor = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);\n#endif\nreturn color;\n}", "epx.glsl": "vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {\nvec2 invSize = 1.0 / texSize;\nvec2 texel = coords * texSize;\nvec2 texel_i = floor(texel);\nvec2 texel_frac = fract(texel);\nvec4 colorP = texture2D(sampler, texel_i * invSize);\nvec4 colorP1 = vec4(colorP);\nvec4 colorP2 = vec4(colorP);\nvec4 colorP3 = vec4(colorP);\nvec4 colorP4 = vec4(colorP);\nvec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);\nvec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);\nvec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);\nvec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);\nif (colorC == colorA && colorC != colorD && colorA != colorB) {\ncolorP1 = colorA;\n}\nif (colorA == colorB && colorA != colorC && colorB != colorD) {\ncolorP2 = colorB;\n}\nif (colorD == colorC && colorD != colorB && colorC != colorA) {\ncolorP3 = colorC;\n}\nif (colorB == colorD && colorB != colorA && colorD != colorC) {\ncolorP4 = colorD;\n}\nvec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);\nvec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);\nreturn mix(colorP12, colorP34, texel_frac.y);\n}" }, heatmap: { heatmapResolve: { "heatmapResolve.frag": "precision highp float;\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 4.0\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform sampler2D u_texture;\nuniform sampler2D u_gradient;\nuniform vec2 u_densityMinAndInvRange;\nuniform float u_densityNormalization;\nvarying vec2 v_uv;\nvoid main() {\nvec4 data = texture2D(u_texture, v_uv);\nfloat density = data.r * COMPRESSION_FACTOR;\ndensity *= u_densityNormalization;\ndensity = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;\nvec4 color = texture2D(u_gradient, vec2(density, 0.5));\ngl_FragColor = vec4(color.rgb * color.a, color.a);\n}", "heatmapResolve.vert": "precision highp float;\nattribute vec2 a_pos;\nvarying vec2 v_uv;\nvoid main() {\nv_uv = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);\n}" } }, highlight: { "blur.frag": "varying mediump vec2 v_texcoord;\nuniform mediump vec4 u_direction;\nuniform mediump mat4 u_channelSelector;\nuniform mediump float u_sigma;\nuniform sampler2D u_texture;\nmediump float gauss1(mediump vec2 dir) {\nreturn exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));\n}\nmediump vec4 selectChannel(mediump vec4 sample) {\nreturn u_channelSelector * sample;\n}\nvoid accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {\nmediump float w = gauss1(i * u_direction.xy);\ntot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;\nweight += w;\n}\nvoid main(void) {\nmediump float tot = 0.0;\nmediump float weight = 0.0;\naccumGauss1(-5.0, tot, weight);\naccumGauss1(-4.0, tot, weight);\naccumGauss1(-3.0, tot, weight);\naccumGauss1(-2.0, tot, weight);\naccumGauss1(-1.0, tot, weight);\naccumGauss1(0.0, tot, weight);\naccumGauss1(1.0, tot, weight);\naccumGauss1(2.0, tot, weight);\naccumGauss1(3.0, tot, weight);\naccumGauss1(4.0, tot, weight);\naccumGauss1(5.0, tot, weight);\ngl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);\n}", "highlight.frag": "varying mediump vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform mediump float u_sigma;\nuniform sampler2D u_shade;\nuniform mediump vec2 u_minMaxDistance;\nmediump float estimateDistance() {\nmediump float y = texture2D(u_texture, v_texcoord)[3];\nconst mediump float y0 = 0.5;\nmediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);\nmediump float d = (y - y0) / m0;\nreturn d;\n}\nmediump vec4 shade(mediump float d) {\nmediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);\nmappedDistance = clamp(mappedDistance, 0.0, 1.0);\nreturn texture2D(u_shade, vec2(mappedDistance, 0.5));\n}\nvoid main(void) {\nmediump float d = estimateDistance();\ngl_FragColor = shade(d);\n}", "textured.vert": "attribute mediump vec2 a_position;\nattribute mediump vec2 a_texcoord;\nvarying mediump vec2 v_texcoord;\nvoid main(void) {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}" }, materials: { "attributeData.glsl": "uniform highp sampler2D filterFlags;\nuniform highp sampler2D animation;\nuniform highp sampler2D gpgpu;\nuniform highp sampler2D visualVariableData;\nuniform highp sampler2D dataDriven0;\nuniform highp sampler2D dataDriven1;\nuniform highp sampler2D dataDriven2;\nuniform float size;\nhighp vec2 getAttributeDataCoords(in highp vec3 id) {\nhighp vec3  texel = unpackDisplayIdTexel(id);\nhighp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);\nhighp float col = mod(u32, size);\nhighp float row = (u32 - col) / size;\nhighp float u = col / size;\nhighp float v = row / size;\nreturn vec2(u, v);\n}\nhighp vec2 getAttributeDataTextureCoords(in highp vec3 id) {\nreturn (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(size));\n}\nhighp vec4 getFilterData(in highp vec3 id) {\nvec2 coords = getAttributeDataCoords(id);\nreturn texture2D(filterFlags, coords);\n}\nhighp vec4 getAnimation(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(animation, coords);\n}\nhighp vec4 getVisualVariableData(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(visualVariableData, coords);\n}\nhighp vec4 getDataDriven0(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(dataDriven0, coords);\n}\nhighp vec4 getDataDriven1(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(dataDriven1, coords);\n}\nhighp vec4 getGPGPU(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(gpgpu, coords);\n}\nhighp vec4 getDataDriven2(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(dataDriven2, coords);\n}\nfloat u88VVToFloat(in vec2 v) {\nbool isMagic = v.x == 255.0 && v.y == 255.0;\nif (isMagic) {\nreturn NAN_MAGIC_NUMBER;\n}\nreturn (v.x + v.y * float(0x100)) - 32768.0;\n}", "barycentric.glsl": "float inTriangle(vec3 bary) {\nvec3 absBary = abs(bary);\nreturn step((absBary.x + absBary.y + absBary.z), 1.05);\n}\nvec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {\nmat3 xyToBarycentricMat3 = mat3(\nv1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,\nv1.y - v2.y, v2.y - v0.y, v0.y - v1.y,\nv2.x - v1.x, v0.x - v2.x, v1.x - v0.x\n);\nfloat A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);\nreturn (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);\n}", "constants.glsl": "const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_RAD_TO_DEG = 180.0 / 3.141592654;\nconst float POSITION_PRECISION = 1.0 / 8.0;\nconst float FILL_POSITION_PRECISION = 1.0 / 1.0;\nconst float SOFT_EDGE_RATIO = 1.0;\nconst float THIN_LINE_WIDTH_FACTOR = 1.1;\nconst float THIN_LINE_HALF_WIDTH = 1.0;\nconst float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;\nconst float OFFSET_PRECISION = 1.0 / 8.0;\nconst float OUTLINE_SCALE = 1.0 / 5.0;\nconst float SDF_FONT_SIZE = 24.0;\nconst float MAX_SDF_DISTANCE = 8.0;\nconst float PLACEMENT_PADDING = 8.0;\nconst float EPSILON = 0.00001;\nconst float EPSILON_HITTEST = 0.05;\nconst int MAX_FILTER_COUNT = 2;\nconst int ATTR_VV_SIZE = 0;\nconst int ATTR_VV_COLOR = 1;\nconst int ATTR_VV_OPACITY = 2;\nconst int ATTR_VV_ROTATION = 3;\nconst highp float NAN_MAGIC_NUMBER = 1e-30;\nconst int BITSET_GENERIC_LOCK_COLOR = 1;\nconst int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;\nconst int BITSET_MARKER_ALIGNMENT_MAP = 0;\nconst int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;\nconst int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;\nconst int BITSET_TYPE_FILL_OUTLINE = 0;\nconst int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;\nconst int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;\nconst int BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR = 5;\nconst int BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR = 6;\nconst int BITSET_LINE_SCALE_DASH = 2;", fill: { "common.glsl": "#include <materials/symbologyTypeUtils.glsl>\n#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform lowp vec4 u_isActive[ 2 ];\nuniform highp float u_dotValue;\nuniform highp float u_tileDotsOverArea;\nuniform highp float u_dotTextureDotCount;\nuniform mediump float u_tileZoomFactor;\n#endif\nvarying highp vec3 v_id;\nvarying lowp vec4 v_color;\nvarying lowp float v_opacity;\nvarying mediump vec4 v_aux1;\n#ifdef PATTERN\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvarying lowp float v_isOutline;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvarying highp vec2 v_dotTextureCoords;\nvarying highp vec4 v_dotThresholds[ 2 ];\n#endif", "fill.frag": "precision highp float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/fill/common.glsl>\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform mediump mat4 u_dotColors[ 2 ];\nuniform sampler2D u_dotTextures[ 2 ];\nuniform vec4 u_dotBackgroundColor;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\nlowp vec4 drawLine() {\nfloat v_lineWidth = v_aux1.x;\nvec2  v_normal    = v_aux1.yz;\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineWidth,\nv_opacity,\nv_id\n);\nreturn shadeLine(inputs);\n}\n#endif\nlowp vec4 drawFill() {\nlowp vec4 out_color = vec4(0.);\n#ifdef HITTEST\nout_color = v_color;\n#elif defined(PATTERN)\nmediump vec4 v_tlbr = v_aux1;\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\nout_color = v_opacity * v_color * color;\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)\nvec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);\nvec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);\nvec4 difference0 = v_dotThresholds[0] - textureThresholds0;\nvec4 difference1 = v_dotThresholds[1] - textureThresholds1;\n#ifdef DD_DOT_BLENDING\nvec4 isPositive0 = step(0.0, difference0);\nvec4 isPositive1 = step(0.0, difference1);\nfloat weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);\nfloat lessThanEqZero = step(weightSum, 0.0);\nfloat greaterThanZero = 1.0 - lessThanEqZero ;\nfloat divisor = (weightSum + lessThanEqZero);\nvec4 weights0 = difference0 * isPositive0 / divisor;\nvec4 weights1 = difference1 * isPositive1 / divisor;\nvec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;\nvec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;\n#else\nfloat diffMax = max(max4(difference0), max4(difference1));\nfloat lessThanZero = step(diffMax, 0.0);\nfloat greaterOrEqZero = 1.0 - lessThanZero;\nvec4 isMax0 = step(diffMax, difference0);\nvec4 isMax1 = step(diffMax, difference1);\nvec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;\nvec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;\n#endif\nout_color = preEffectColor;\n#else\nout_color = v_opacity * v_color;\n#endif\n#ifdef HIGHLIGHT\nout_color.a = 1.0;\n#endif\nreturn out_color;\n}\nvoid main() {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (v_isOutline > 0.5) {\ngl_FragColor = drawLine();\n} else {\ngl_FragColor = drawFill();\n}\n#else\ngl_FragColor = drawFill();\n#endif\n}", "fill.vert": "#include <materials/symbologyTypeUtils.glsl>\n#define PACKED_LINE\nprecision highp float;\nattribute float a_bitset;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nattribute float a_inverseArea;\nvec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#else\nattribute vec4 a_color;\nattribute vec4 a_aux2;\nattribute vec4 a_aux3;\n#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\nattribute vec4 a_aux1;\nattribute vec2 a_zoomRange;\n#else\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#endif\n#endif\nuniform vec2 u_tileOffset;\nuniform vec2 u_maxIntNumOfCrossing;\n#include <util/encoding.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/fill/common.glsl>\n#include <materials/fill/hittest.glsl>\nconst float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;\nconst float MAX_REPRESENTABLE_INT = 16777216.0;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {\nreturn featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);\n}\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\nvoid drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {\nLineData outputs = buildLine(\nout_pos,\na_id,\na_pos,\na_color,\n(a_aux3.xy - 128.) / 16.,\n(a_aux3.zw - 128.) / 16.,\n0.,\na_aux2.z / 16.,\na_bitset,\nvec4(0.),\nvec2(0.),\na_aux2.w / 16.\n);\nv_id      = outputs.id;\nv_opacity = outputs.opacity;\nv_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);\nout_color = outputs.color;\n}\n#endif\nvoid drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {\nfloat a_bitSet = a_bitset;\nout_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity = getOpacity();\nv_id      = norm(a_id);\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nmat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,\n0., -2. / 512.,  0.,\n-1.,  1.,  1.  );\nout_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);\n#else\nout_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);\n#endif\n#ifdef PATTERN\nvec4  a_tlbr   = a_aux1;\nfloat a_width  = a_aux2.x;\nfloat a_height = a_aux2.y;\nvec2  a_offset = a_aux2.zw;\nvec2  a_scale  = a_aux3.xy;\nfloat a_angle  = a_aux3.z;\nif (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR) > 0.5) {\na_width *= INV_SCALE_COMPRESSION_FACTOR;\n}\nif (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR) > 0.5) {\na_height *= INV_SCALE_COMPRESSION_FACTOR;\n}\nvec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;\nfloat width = u_zoomFactor * a_width * scale.x;\nfloat height = u_zoomFactor * a_height * scale.y;\nfloat angle = C_256_TO_RAD * a_angle;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nfloat dx = 0.0;\nfloat dy = 0.0;\nif (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {\nfloat id = rgba2float(vec4(a_id, 0.0));\ndx = rand(vec2(id, 0.0));\ndy = rand(vec2(0.0, id));\n}\nmat3 patternMatrix = mat3(cosA / width, sinA / height, 0,\n-sinA / width, cosA / height, 0,\ndx,            dy,           1);\nvec2 patternSize = vec2(a_width, a_height);\nvec2 numPatternsPerMaxInt = vec2(MAX_REPRESENTABLE_INT) / patternSize;\nvec2 maxIntCrossingOffsetCorrection = patternSize * fract(u_maxIntNumOfCrossing * numPatternsPerMaxInt);\nvec2 tileOffset = u_tileOffset + maxIntCrossingOffsetCorrection - 0.5 * patternSize;\ntileOffset = vec2(tileOffset.x * cosA - tileOffset.y * sinA, tileOffset.x * sinA + tileOffset.y * cosA);\ntileOffset = mod(tileOffset, patternSize);\nvec2 symbolOffset = u_zoomFactor * scale * vec2(a_offset - tileOffset) / vec2(width, height);\nv_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;\nv_aux1 = a_tlbr / u_mosaicSize.xyxy;\nv_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\nif (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {\n#ifdef VV_COLOR\nv_sampleAlphaOnly *= (1.0 - float(isNan(VV_ADATA[ATTR_VV_COLOR]))) * (1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR));\n#else\nv_sampleAlphaOnly = 0.0;\n#endif\n}\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;\nvec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;\nfloat size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;\nv_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);\nv_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);\nv_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;\n#endif\n}\n#ifdef HITTEST\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {\nout_pos = vec3(0., 0., 2.);\nreturn;\n}\n#endif\nhittestFill(out_color, out_pos);\ngl_PointSize = 1.0;\n}\n#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\nv_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);\nif (v_isOutline > 0.5) {\ndrawLine(out_color, out_pos);\n} else {\ndrawFill(out_color, out_pos);\n}\n}\n#else\n#define draw drawFill\n#endif\nvoid main()\n{\nINIT;\nhighp vec3 pos  = vec3(0.);\nhighp vec4 color  = vec4(0.);\ndraw(color, pos);\nv_color = color;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}", "hittest.glsl": "#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestFill(\nout lowp vec4 out_color,\nout highp vec3 out_pos\n) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);\nfloat hittestDist = u_hittestDist;\nfloat dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist < 0. || dist >= hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);\n}\n#endif" }, hittest: { "common.glsl": "#ifdef HITTEST\nuniform float hittestDist;\nuniform highp vec2 hittestPos;\nfloat projectScalar(vec2 a, vec2 b) {\nreturn dot(a, normalize(b));\n}\nfloat distPointSegment(vec2 p0, vec2 p1, vec2 p2) {\nvec2 L = p2 - p1;\nvec2 A = p0 - p1;\nfloat projAL = projectScalar(A, L);\nfloat t = clamp(projAL / length(L), 0., 1.);\nreturn distance(p0, p1 + t * (p2 - p1));\n}\nvoid hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {\nfloat dist = distance(pos, vec3(hittestPos, 1.));\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif ((dist - size) > hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);\n}\nfloat intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {\nreturn inTriangle(xyToBarycentric(p, a, b, c));\n}\nfloat distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {\nvec2 ba = b - a;\nvec2 ca = c - a;\nfloat crossProduct = ba.x * ca.y - ca.x * ba.y;\nbool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;\nif (isParallel) {\nreturn -1.;\n}\nif (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {\nreturn 0.;\n}\nfloat distAB = distPointSegment(p, a, b);\nfloat distBC = distPointSegment(p, b, c);\nfloat distCA = distPointSegment(p, c, a);\nreturn min(min(distAB, distBC), distCA);\n}\n#endif" }, icon: { "common.glsl": "#include <util/encoding.glsl>\nuniform lowp vec2 u_mosaicSize;\nvarying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying highp vec4 v_sizeTex;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nvarying lowp vec4 v_outlineColor;\nvarying mediump float v_outlineWidth;\nvarying mediump float v_distRatio;\nvarying mediump float v_overridingOutlineColor;\nvarying mediump float v_isThin;\n#endif\n#ifdef SDF\nvec4 getColor(vec2 v_size, vec2 v_tex) {\n#ifdef HITTEST\nlowp vec4 fillPixelColor = vec4(1.0);\n#else\nlowp vec4 fillPixelColor = v_color;\n#endif\nfloat d = 0.5 - rgba2float(texture2D(u_texture, v_tex));\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * size * SOFT_EDGE_RATIO * v_distRatio;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nfloat outlineWidth = v_outlineWidth;\n#ifdef HIGHLIGHT\noutlineWidth = max(outlineWidth, 4.0 * v_isThin);\n#endif\nif (outlineWidth > 0.25) {\nlowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;\nfloat clampedOutlineSize = min(outlineWidth, size);\noutlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\nreturn v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\n}\nreturn v_opacity * fillPixelColor;\n}\n#else\nvec4 getColor(vec2 _v_size, vec2 v_tex) {\nlowp vec4 texColor = texture2D(u_texture, v_tex);\nreturn v_opacity * texColor * v_color;\n}\n#endif", heatmapAccumulate: { "common.glsl": "varying lowp vec4 v_hittestResult;\nvarying mediump vec2 v_offsetFromCenter;\nvarying highp float v_fieldValue;", "heatmapAccumulate.frag": "precision mediump float;\n#include <materials/icon/heatmapAccumulate/common.glsl>\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 0.25\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform lowp sampler2D u_texture;\nvoid main() {\n#ifdef HITTEST\ngl_FragColor = v_hittestResult;\n#else\nfloat radius = length(v_offsetFromCenter);\nfloat shapeWeight = step(radius, 1.0);\nfloat oneMinusRadiusSquared = 1.0 - radius * radius;\nfloat kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;\ngl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);\n#endif\n}", "heatmapAccumulate.vert": "precision highp float;\nattribute vec2 a_vertexOffset;\nvec4 a_color = vec4(0.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\nuniform float u_radius;\nuniform float u_isFieldActive;\n#include <materials/vcommon.glsl>\n#include <materials/hittest/common.glsl>\n#include <materials/icon/heatmapAccumulate/common.glsl>\nvoid main() {\nfloat filterFlags = getFilterFlags();\n#ifdef HITTEST\nhighp vec4 out_hittestResult = vec4(0.);\nhighp vec3 out_pos = vec3(0.);\nvec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nhittestMarker(out_hittestResult, out_pos, pos, u_radius);\nv_hittestResult = out_hittestResult;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\nv_offsetFromCenter = sign(a_vertexOffset);\nv_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;\nvec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nvec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;\ngl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);\n#endif\n}" }, "hittest.glsl": "#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_vertexOffset1;\nattribute vec2 a_vertexOffset2;\nattribute vec2 a_texCoords1;\nattribute vec2 a_texCoords2;\nvec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {\nreturn texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;\n}\nvoid hittestIcon(\ninout lowp vec4 out_color,\nout highp vec3 out_pos,\nin vec3 pos,\nin vec3 offset,\nin vec2 size,\nin float scaleFactor,\nin float isMapAligned\n) {\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nvec3 posBase = u_viewMat3 * u_tileMat3  * pos;\nvec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);\nvec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);\nvec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;\nvec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;\nvec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;\nvec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);\nvec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);\nvec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);\nvec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec2 tex0 = a_texCoords  / u_mosaicSize;\nvec2 tex1 = a_texCoords1 / u_mosaicSize;\nvec2 tex2 = a_texCoords2 / u_mosaicSize;\nfloat alphaSum = 0.;\nalphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;\nout_pos.z += step(alphaSum, .05) * 2.0;\nout_color = vec4(1. / 255., 0., 0., alphaSum / 255.);\n}\n#endif", "icon.frag": "precision mediump float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/icon/common.glsl>\nvoid main()\n{\n#ifdef HITTEST\nvec4 color = v_color;\n#else\nvec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);\n#endif\n#ifdef HIGHLIGHT\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}", "icon.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\n#include <materials/icon/hittest.glsl>\nfloat getMarkerScaleFactor(inout vec2 size, in float referenceSize) {\n#ifdef VV_SIZE\nfloat f = getSize(size.y) / size.y;\nfloat sizeFactor = size.y / referenceSize;\nreturn getSize(referenceSize) / referenceSize;\n#else\nreturn 1.;\n#endif\n}\nvoid main()\n{\nINIT;\nfloat a_bitSet = a_bitSetAndDistRatio.x;\nvec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);\nvec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\nvec3  offset        = vec3(a_vertexOffset / 16.0, 0.);\nfloat outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;\nfloat isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nfloat referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;\nfloat scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\nfloat scaleFactor               = getMarkerScaleFactor(size, referenceSize);\nsize.xy     *= scaleFactor;\noffset.xy   *= scaleFactor;\noutlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;\nvec2 v_tex   = a_texCoords / u_mosaicSize;\nfloat filterFlags = getFilterFlags();\nv_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity  = getOpacity();\nv_id       = norm(a_id);\nv_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;\nv_sizeTex  = vec4(size.xy, v_tex.xy);\n#ifdef SDF\nv_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);\n#ifdef VV_COLOR\nv_overridingOutlineColor = v_isThin;\n#else\nv_overridingOutlineColor = 0.0;\n#endif\nv_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));\nv_outlineColor = a_outlineColor;\nv_distRatio = a_bitSetAndDistRatio.y / 128.0;\n#endif\n#ifdef HITTEST\nhighp vec4 out_color = vec4(0.);\nhighp vec3 out_pos   = vec3(0.);\nhittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);\nv_color = out_color;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}" }, label: { "common.glsl": "uniform mediump float u_zoomLevel;\nuniform mediump float u_mapRotation;\nuniform mediump float u_mapAligned;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying mediump vec2 v_tex;\nvarying mediump vec4 v_color;\nvarying lowp vec4 v_animation;", "label.frag": "#include <materials/text/text.frag>", "label.vert": "precision highp float;\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texAndSize;\nattribute vec4 a_refSymbolAndPlacementOffset;\nattribute vec4 a_glyphData;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHaloPass;\nuniform float u_isBackgroundPass;\nuniform float u_mapRotation;\nuniform float u_mapAligned;\nfloat getZ(in float minZoom, in float maxZoom, in float angle) {\nfloat glyphAngle = angle * 360.0 / 254.0;\nfloat mapAngle = u_mapRotation * 360.0 / 254.0;\nfloat diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));\nfloat z = 0.0;\nz += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));\nz += u_mapAligned * 2.0 * step(90.0, diffAngle);\nz += 2.0 * (1.0 - step(u_currentZoom, maxZoom));\nreturn z;\n}\nvoid main()\n{\nINIT;\nfloat groupMinZoom    = getMinZoom();\nfloat glyphMinZoom    = a_glyphData.x;\nfloat glyphMaxZoom    = a_glyphData.y;\nfloat glyphAngle      = a_glyphData.z;\nfloat a_isBackground  = a_glyphData.w;\nfloat a_minZoom          = max(groupMinZoom, glyphMinZoom);\nfloat a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;\nvec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);\nfloat a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;\nfloat fontSize           = a_texAndSize.z;\nfloat haloSize           = a_texAndSize.w * OUTLINE_SCALE;\nvec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;\nvec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);\nfloat fontScale    = fontSize / SDF_FONT_SIZE;\nfloat halfSize     = getSize(a_refSymbolSize) / 2.0;\nfloat animation    = pow(getAnimationState(), vec4(2.0)).r;\nfloat isText = 1.0 - a_isBackground;\nfloat isBackground = u_isBackgroundPass * a_isBackground;\nvec4  nonHaloColor = (isBackground + isText) * a_color;\nv_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));\nv_opacity   = 1.0;\nv_tex       = a_texCoords / u_mosaicSize;\nv_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\nvec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);\nvec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);\nvec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);\nfloat isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;\nv_pos.z += 2.0 * isHidden;\ngl_Position = vec4(v_pos, 1.0);\n#ifdef DEBUG\nv_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);\n#endif\n}" }, line: { "common.glsl": "varying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying mediump vec2 v_normal;\nvarying mediump float v_lineHalfWidth;\nvarying lowp float v_opacity;\n#ifdef PATTERN\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\n#endif\n#if defined(PATTERN) || defined(SDF)\nvarying highp float v_accumulatedDistance;\n#endif\n#ifdef SDF\nvarying mediump float v_lineWidthRatio;\n#endif", "hittest.glsl": "#include <materials/hittest/common.glsl>\n#ifdef HITTEST\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);\nvec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nfloat dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),\ndistPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist >= u_hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);\n}\n#endif", "line.frag": "precision lowp float;\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\n#ifdef HITTEST\nvoid main() {\ngl_FragColor = v_color;\n}\n#else\nvoid main() {\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineHalfWidth,\nv_opacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr,\nv_patternSize,\n#endif\n#ifdef SDF\nv_lineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance,\n#endif\n#endif\nv_id\n);\ngl_FragColor = shadeLine(inputs);\n}\n#endif", "line.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistanceAndHalfWidth;\nattribute vec4 a_tlbr;\nattribute vec4 a_segmentDirection;\nattribute vec2 a_aux;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/line/hittest.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\n#ifdef HITTEST\nvoid draw() {\nfloat aa        = 0.5 * u_antialiasing;\nfloat a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;\nfloat a_cimHalfWidth = a_aux.x / 16. ;\nvec2  a_offset = a_offsetAndNormal.xy / 16.;\nfloat baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nhighp vec3 pos  = vec3(0.);\nv_color = vec4(0.);\nhittestLine(v_color, pos, halfWidth);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#else\nvoid draw()\n{\nhighp vec3 pos = vec3(0.);\nLineData outputs = buildLine(\npos,\na_id,\na_pos,\na_color,\na_offsetAndNormal.xy / 16.,\na_offsetAndNormal.zw / 16.,\na_accumulatedDistanceAndHalfWidth.x,\na_accumulatedDistanceAndHalfWidth.y / 16.,\na_segmentDirection.w,\na_tlbr,\na_segmentDirection.xy / 16.,\na_aux.x / 16.\n);\nv_id              = outputs.id;\nv_color           = outputs.color;\nv_normal          = outputs.normal;\nv_lineHalfWidth   = outputs.lineHalfWidth;\nv_opacity         = outputs.opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr          = outputs.tlbr;\nv_patternSize   = outputs.patternSize;\n#endif\n#ifdef SDF\nv_lineWidthRatio = outputs.lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance = outputs.accumulatedDistance;\n#endif\n#endif\ngl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#endif\nvoid main() {\nINIT;\ndraw();\n}" }, pie: { "pie.common.glsl": "uniform float outlineWidth;\nuniform mediump float sectorThreshold;\nvarying vec3  v_id;\nvarying vec3  v_pos;\nvarying vec2  v_offset;\nvarying vec4  v_color;\nvarying float v_size;\nvarying float v_numOfEntries;\nvarying float v_maxSectorAngle;\nvarying vec2  v_filteredSectorToColorId[numberOfFields];\nvarying vec2  v_texCoords;\nvarying float v_outlineWidth;\nvarying float v_opacity;\nstruct FilteredChartInfo {\nfloat endSectorAngle;\nint colorId;\n};", "pie.frag": "precision highp float;\n#include <util/atan2.glsl>\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/pie/pie.common.glsl>\nuniform lowp vec4 colors[numberOfFields];\nuniform lowp vec4 defaultColor;\nuniform lowp vec4 othersColor;\nuniform lowp vec4 outlineColor;\nuniform float donutRatio;\nlowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[numberOfFields]) {\nmediump int colorIndex = int(filteredSectorToColorId[index].y);\nreturn colors[colorIndex];\n}\nconst int OTHER_SECTOR_ID = 255;\n#ifdef HITTEST\nvec4 getColor() {\nfloat distanceSize = length(v_offset) * v_size;\nfloat donutSize = donutRatio * v_size;\nfloat alpha = step(donutSize, distanceSize) * (1.0 - step(v_size, distanceSize));\nreturn v_color;\n}\n#else\nvec4 getColor() {\nfloat angle = 90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x);\nif (angle < 0.0) {\nangle += 360.0;\n} else if (angle > 360.0) {\nangle = mod(angle, 360.0);\n}\nint numOfEntries = int(v_numOfEntries);\nfloat maxSectorAngle = v_maxSectorAngle;\nlowp vec4 fillColor = (maxSectorAngle > 0.0 || sectorThreshold > 0.0) ? othersColor : defaultColor;\nlowp vec4 prevColor = vec4(0.0);\nlowp vec4 nextColor = vec4(0.0);\nfloat startSectorAngle = 0.0;\nfloat endSectorAngle = 0.0;\nif (angle < maxSectorAngle) {\nfor (int index = 0; index < numberOfFields; ++index) {\nstartSectorAngle = endSectorAngle;\nendSectorAngle = v_filteredSectorToColorId[index].x;\nif (endSectorAngle > angle) {\nfillColor = getSectorColor(index, v_filteredSectorToColorId);\nprevColor = sectorThreshold != 0.0 && index == 0 && abs(360.0 - maxSectorAngle) < EPSILON ? othersColor :\ngetSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON ? othersColor :\ngetSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);\nbreak;\n}\nif (index == numOfEntries - 1) {\nbreak;\n}\n}\n} else {\nprevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = getSectorColor(0, v_filteredSectorToColorId);\nstartSectorAngle = maxSectorAngle;\nendSectorAngle = 360.0;\n}\nlowp vec4 outlineColor = outlineColor;\nfloat offset = length(v_offset);\nfloat distanceSize = offset * v_size;\nif (startSectorAngle != 0.0 || endSectorAngle != 360.0) {\nfloat distanceToStartSector = (angle - startSectorAngle);\nfloat distanceToEndSector = (endSectorAngle - angle);\nfloat sectorThreshold = 0.6;\nfloat beginSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToStartSector * offset);\nfloat endSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToEndSector * offset);\nif (endSectorAlpha > 0.0) {\nfillColor = mix(nextColor, fillColor, endSectorAlpha);\n} else if (beginSectorAlpha > 0.0) {\nfillColor = mix(prevColor, fillColor, beginSectorAlpha);\n}\n}\nfloat donutSize = donutRatio * (v_size - v_outlineWidth);\nfloat endOfDonut = donutSize - v_outlineWidth;\nfloat aaThreshold = 0.75;\nfloat innerCircleAlpha = endOfDonut - aaThreshold > 0.0 ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;\nfloat outerCircleAlpha = 1.0 - smoothstep(v_size - aaThreshold, v_size + aaThreshold , distanceSize);\nfloat circleAlpha = innerCircleAlpha * outerCircleAlpha;\nfloat startOfOutline = v_size - v_outlineWidth;\nif (startOfOutline > 0.0 && v_outlineWidth > 0.25) {\nfloat outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);\nfloat innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;\nfillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);\n}\nreturn v_opacity * circleAlpha * fillColor;\n}\n#endif\nvoid main()\n{\nvec4 color = getColor();\n#ifdef highlight\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}", "pie.vert": "#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/barycentric.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/vv.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/pie/pie.common.glsl>\n#include <materials/hittest/common.glsl>\nattribute float a_bitSet;\nattribute vec2  a_offset;\nattribute vec2  a_texCoords;\nattribute vec2  a_size;\nattribute float a_referenceSize;\nattribute vec2  a_zoomRange;\nint filterValue(in float sectorAngle,\nin int currentIndex,\ninout FilteredChartInfo filteredInfo,\ninout vec2 filteredSectorToColorId[numberOfFields]) {\nif (sectorAngle > sectorThreshold * 360.0) {\nfilteredInfo.endSectorAngle += sectorAngle;\nfilteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);\n++filteredInfo.colorId;\n}\nreturn 0;\n}\nint filterValues(inout vec2 filteredSectorToColorId[numberOfFields],\ninout FilteredChartInfo filteredInfo,\nin float sectorAngles[numberOfFields]) {\nfor (int index = 0; index < numberOfFields; ++index) {\nfloat sectorValue = sectorAngles[index];\nfilterValue(sectorValue, index, filteredInfo, filteredSectorToColorId);\n}\nreturn filteredInfo.colorId;\n}\nvec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float a_referenceSize, in float bitSet) {\nvec2 outSize = baseSize;\n#ifdef VV_SIZE\nfloat r = getSize(a_referenceSize, currentScale) / a_referenceSize;\noutSize.xy *= r;\noffset.xy *= r;\nfloat scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\noutlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;\n#endif\nreturn outSize;\n}\nvec3 getOffset(in vec2 in_offset, float a_bitSet) {\nfloat isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nvec3  offset       = vec3(in_offset, 0.0);\nreturn getMatrix(isMapAligned) * offset;\n}\nfloat filterNaNValues(in float value) {\nreturn value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;\n}\nvoid main()\n{\nINIT;\nvec2  a_size   = a_size;\nvec2  a_offset = a_offset / 16.0;\nfloat outlineSize = outlineWidth;\nfloat a_bitSet = a_bitSet;\nfloat a_referenceSize = a_referenceSize;\nvec2 a_texCoords = a_texCoords / 4.0;\nvec2 markerSize = getMarkerSize(a_offset, a_size, outlineSize, a_referenceSize, a_bitSet);\nfloat filterFlags = getFilterFlags();\nvec3  pos         = vec3(a_pos / 10.0, 1.0);\nv_opacity      = getOpacity();\nv_id           = norm(a_id);\nv_pos          = displayViewScreenMat3 * pos + getOffset(a_offset, a_bitSet);\nv_offset       = sign(a_texCoords - 0.5);\nv_size         = max(markerSize.x, markerSize.y);\nv_outlineWidth = outlineSize;\nfloat attributeData[10];\nvec4 attributeData3 = getDataDriven0(a_id);\nattributeData[0] = filterNaNValues(attributeData3.x);\nattributeData[1] = filterNaNValues(attributeData3.y);\nattributeData[2] = filterNaNValues(attributeData3.z);\nattributeData[3] = filterNaNValues(attributeData3.w);\n#if (numberOfFields > 4)\nvec4 attributeData4 = getDataDriven1(a_id);\nattributeData[4] = filterNaNValues(attributeData4.x);\nattributeData[5] = filterNaNValues(attributeData4.y);\nattributeData[6] = filterNaNValues(attributeData4.z);\nattributeData[7] = filterNaNValues(attributeData4.w);\n#endif\n#if (numberOfFields > 8)\nvec4 attributeData5 = getDataDriven2(a_id);\nattributeData[8] = filterNaNValues(attributeData5.x);\nattributeData[9] = filterNaNValues(attributeData5.y);\n#endif\nfloat sum = 0.0;\nfor (int i = 0; i < numberOfFields; ++i) {\nsum += attributeData[i];\n}\nfloat sectorAngles[numberOfFields];\nfor (int i = 0; i < numberOfFields; ++i) {\nsectorAngles[i] = 360.0 * attributeData[i] / sum;\n}\nvec2 filteredSectorToColorId[numberOfFields];\nFilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);\nint numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);\nv_numOfEntries = float(numOfEntries);\nv_maxSectorAngle = filteredInfo.endSectorAngle;\nv_filteredSectorToColorId = filteredSectorToColorId;\n#ifdef HITTEST\nhighp vec3 out_pos = vec3(0.0);\nv_color            = vec4(0.0);\nhittestMarker(v_color, out_pos, viewMat3 * tileMat3 *  pos, v_size);\ngl_PointSize = 1.0;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}" }, shared: { line: { "common.glsl": "#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\nstruct LineData {\nlowp vec4 color;\nmediump vec2 normal;\nmediump float lineHalfWidth;\nlowp float opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nmediump vec4 tlbr;\nmediump vec2 patternSize;\n#endif\n#ifdef SDF\nmediump float lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nhighp float accumulatedDistance;\n#endif\n#endif\nhighp vec3 id;\n};", "line.frag": "uniform lowp float u_blur;\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)\n#if defined(PATTERN) || defined(SDF)\nuniform sampler2D u_texture;\nuniform highp float u_pixelRatio;\n#endif\n#endif\n#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;\nmediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);\nmediump float relativeTexY = 0.5 + 0.25 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * line.lineHalfWidth;\nreturn line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;\n}\n#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float lineHalfWidth = line.lineHalfWidth;\nmediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;\nmediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);\nmediump float relativeTexX = 0.5 + 0.5 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\n#ifdef VV_COLOR\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\n#endif\nreturn line.opacity * line.color * color;\n}\n#else\nlowp vec4 getLineColor(LineData line) {\nreturn line.opacity * line.color;\n}\n#endif\nvec4 shadeLine(LineData line)\n{\nmediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nmediump float fragDist = length(line.normal) * line.lineHalfWidth;\nlowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);\nlowp vec4 out_color = getLineColor(line) * alpha;\n#ifdef HIGHLIGHT\nout_color.a = step(1.0 / 255.0, out_color.a);\n#endif\n#ifdef ID\nif (out_color.a < 1.0 / 255.0) {\ndiscard;\n}\nout_color = vec4(line.id, 0.0);\n#endif\nreturn out_color;\n}", "line.vert": "float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {\n#ifdef VV_SIZE\nfloat refLineWidth = 2.0 * referenceHalfWidth;\nreturn 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);\n#else\nreturn lineHalfWidth;\n#endif\n}\nfloat getLineHalfWidth(in float baseWidth, in float aa) {\nfloat halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;\n#ifdef HIGHLIGHT\nhalfWidth = max(halfWidth, 2.0);\n#endif\nreturn halfWidth;\n}\nvec2 getDist(in vec2 offset, in float halfWidth) {\nfloat thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nreturn thinLineFactor * halfWidth * offset;\n}\nLineData buildLine(\nout vec3 out_pos,\nin vec3 in_id,\nin vec2 in_pos,\nin vec4 in_color,\nin vec2 in_offset,\nin vec2 in_normal,\nin float in_accumulatedDist,\nin float in_lineHalfWidth,\nin float in_bitSet,\nin vec4 in_tlbr,\nin vec2 in_segmentDirection,\nin float in_referenceHalfWidth\n)\n{\nfloat aa        = 0.5 * u_antialiasing;\nfloat baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nfloat z         = 2.0 * step(baseWidth, 0.0);\nvec2  dist      = getDist(in_offset, halfWidth);\nvec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);\nvec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvec4  color     = in_color;\nfloat opacity   = 1.0;\n#else\nvec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);\nfloat opacity   = getOpacity();\n#ifdef SDF\nconst float SDF_PATTERN_HALF_WIDTH = 15.5;\nfloat scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);\nfloat lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;\n#endif\n#endif\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nv_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\n#endif\nout_pos = vec3(pos.xy, z);\nreturn LineData(\ncolor,\nin_normal,\nhalfWidth,\nopacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nin_tlbr / u_mosaicSize.xyxy,\nvec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),\n#endif\n#ifdef SDF\nlineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nin_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),\n#endif\n#endif\nnorm(in_id)\n);\n}" } }, "symbologyTypeUtils.glsl": "#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\n#endif", text: { "common.glsl": "uniform highp vec2 u_mosaicSize;\nvarying highp vec3 v_id;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec2 v_tex;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying lowp float v_transparency;", "hittest.glsl": "#include <materials/hittest/common.glsl>", "text.frag": "precision mediump float;\n#include <materials/text/common.glsl>\nuniform lowp sampler2D u_texture;\n#ifdef HITTEST\nvec4 getColor() {\nreturn v_color;\n}\n#else\nvec4 getColor()\n{\nfloat SDF_CUTOFF = (2.0 / 8.0);\nfloat SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;\n#ifdef HIGHLIGHT\nedge /= 2.0;\n#endif\nlowp float aa = v_antialiasingWidth;\nlowp float alpha = smoothstep(edge - aa, edge + aa, dist);\nreturn alpha * v_color * v_opacity;\n}\n#endif\nvoid main()\n{\ngl_FragColor = getColor();\n}", "text.vert": "precision highp float;\n#include <materials/utils.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\n#include <materials/text/hittest.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texFontSize;\nattribute vec4 a_aux;\nattribute vec2 a_zoomRange;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHaloPass;\nuniform float u_isBackgroundPass;\nfloat getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {\n#ifdef VV_SIZE\nfloat r = getSize(referenceSize) / referenceSize;\nbaseSize *= r;\noffset.xy *= r;\nreturn baseSize;\n#endif\nreturn baseSize;\n}\nvoid main()\n{\nINIT;\nfloat a_isBackground  = a_aux.y;\nfloat a_referenceSize = a_aux.z * a_aux.z / 256.0;\nfloat a_bitSet        = a_aux.w;\nfloat a_fontSize      = a_texFontSize.z;\nvec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;\nvec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);\nfloat fontScale     = fontSize / SDF_FONT_SIZE;\nvec3  offset        = getRotation() * vec3(a_offset, 0.0);\nmat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;\nfloat isText = 1.0 - a_isBackground;\nfloat isBackground = u_isBackgroundPass * a_isBackground;\nvec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));\nv_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;\nv_opacity = getOpacity();\nv_id      = norm(a_id);\nv_tex     = a_texCoords / u_mosaicSize;\nv_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;\nfloat isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;\nv_pos.z += 2.0 * isHidden;\nv_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n#ifdef HITTEST\nhighp vec3 out_pos  = vec3(0.);\nv_color = vec4(0.);\nhittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)\n+ u_tileMat3 * offset, fontSize / 2.);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);\n#else\ngl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);\n#endif\n}" }, "utils.glsl": "float rshift(in float u32, in int amount) {\nreturn floor(u32 / pow(2.0, float(amount)));\n}\nfloat getBit(in float bitset, in int bitIndex) {\nfloat offset = pow(2.0, float(bitIndex));\nreturn mod(floor(bitset / offset), 2.0);\n}\nconst int maxHighlightReasons = 6;\nfloat getFilterBit(in float bitset, in int bitIndex) {\nreturn getBit(bitset, bitIndex + maxHighlightReasons);\n}\nfloat getHighlightBit(in float bitset, in int bitIndex) {\nreturn getBit(bitset, bitIndex);\n}\nhighp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {\nfloat isAggregate = getBit(bitset.b, 7);\nreturn (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));\n}\nvec4 unpack(in float u32) {\nfloat r = mod(rshift(u32, 0), 255.0);\nfloat g = mod(rshift(u32, 8), 255.0);\nfloat b = mod(rshift(u32, 16), 255.0);\nfloat a = mod(rshift(u32, 24), 255.0);\nreturn vec4(r, g, b, a);\n}\nvec3 norm(in vec3 v) {\nreturn v /= 255.0;\n}\nvec4 norm(in vec4 v) {\nreturn v /= 255.0;\n}\nfloat max4(vec4 target) {\nreturn max(max(max(target.x, target.y), target.z), target.w);\n}\nvec2 unpack_u8_nf32(vec2 bytes) {\nreturn (bytes - 127.0) / 127.0;\n}\nhighp float rand(in vec2 co) {\nhighp float a = 12.9898;\nhighp float b = 78.233;\nhighp float c = 43758.5453;\nhighp float dt = dot(co, vec2(a,b));\nhighp float sn = mod(dt, 3.14);\nreturn fract(sin(sn) * c);\n}", "vcommon.glsl": "#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/vv.glsl>\n#include <materials/barycentric.glsl>\nattribute vec2 a_pos;\nattribute highp vec3 a_id;\nuniform highp mat3 displayViewScreenMat3;\nuniform highp mat3 displayViewMat3;\nuniform highp mat3 displayMat3;\nuniform highp mat3 tileMat3;\nuniform highp mat3 viewMat3;\nuniform highp float pixelRatio;\nuniform mediump float zoomFactor;\nuniform mediump float antialiasing;\nuniform mediump float currentScale;\nuniform mediump float currentZoom;\nuniform mediump float metersPerSRUnit;\nvec4 VV_ADATA = vec4(0.0);\nvoid loadVisualVariableData(inout vec4 target) {\ntarget.rgba = getVisualVariableData(a_id);\n}\n#ifdef VV\n#define INIT loadVisualVariableData(VV_ADATA)\n#else\n#define INIT\n#endif\nvec4 getColor(in vec4 a_color, in float a_bitSet, int index) {\n#ifdef VV_COLOR\nfloat isColorLocked   = getBit(a_bitSet, index);\nreturn getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);\n#else\nreturn a_color;\n#endif\n}\nfloat getOpacity() {\n#ifdef VV_OPACITY\nreturn getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);\n#else\nreturn 1.0;\n#endif\n}\nfloat getSize(in float in_size, in float currentScale) {\n#ifdef VV_SIZE\nreturn getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE], currentScale);\n#else\nreturn in_size;\n#endif\n}\nmat3 getRotation() {\n#ifdef VV_ROTATION\nreturn getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));\n#else\nreturn mat3(1.0);\n#endif\n}\nfloat getFilterFlags() {\n#ifdef IGNORES_SAMPLER_PRECISION\nreturn ceil(getFilterData(a_id).x * 255.0);\n#else\nreturn getFilterData(a_id).x * 255.0;\n#endif\n}\nvec4 getAnimationState() {\nreturn getAnimation(a_id);\n}\nfloat getMinZoom() {\nvec4 data0 = getFilterData(a_id) * 255.0;\nreturn data0.g;\n}\nmat3 getMatrixNoDisplay(float isMapAligned) {\nreturn isMapAligned * viewMat3 * tileMat3 + (1.0 - isMapAligned) * tileMat3;\n}\nmat3 getMatrix(float isMapAligned) {\nreturn isMapAligned * displayViewMat3 + (1.0 - isMapAligned) * displayMat3;\n}\nfloat checkHighlightBit(float filterFlags, int index) {\nreturn getHighlightBit(filterFlags, index);\n}\nfloat checkHighlight(float filterFlags) {\nfloat result = checkHighlightBit(filterFlags, 0);\nfor (int i = 1; i < maxHighlightReasons; i++) {\nresult = result + checkHighlightBit(filterFlags, i);\n}\nreturn step(0.1, result);\n}\nvec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifdef inside\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#elif defined(outside)\npos.z += 2.0 * getFilterBit(filterFlags, 1);\n#elif defined(highlight)\n#if !defined(highlight_all)\npos.z += 2.0 * (1.0 - checkHighlight(filterFlags));\n#endif\n#endif\npos.z += 2.0 * (step(minMaxZoom.y, currentZoom) + (1.0 - step(minMaxZoom.x, currentZoom)));\nreturn pos;\n}", "vv.glsl": "#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n#define VV_SIZE\n#endif\n#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n#define VV\n#endif\n#ifdef VV_COLOR\nuniform highp float colorValues[8];\nuniform vec4 colors[8];\n#endif\n#ifdef VV_SIZE_MIN_MAX_VALUE\nuniform highp vec4 minMaxValueAndSize;\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nuniform highp float values[8];\nuniform float sizes[8];\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nuniform highp float values[8];\nuniform float sizes[8];\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nuniform highp float unitMeterRatio;\n#endif\n#ifdef VV_OPACITY\nuniform highp float opacityValues[8];\nuniform float opacities[8];\n#endif\n#ifdef VV_ROTATION\nuniform lowp float rotationType;\n#endif\nbool isNan(float val) {\nreturn (val == NAN_MAGIC_NUMBER);\n}\n#ifdef VV_SIZE_MIN_MAX_VALUE\nfloat getVVMinMaxSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nfloat interpolationRatio = (sizeValue  - minMaxValueAndSize.x) / (minMaxValueAndSize.y - minMaxValueAndSize.x);\ninterpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\nreturn minMaxValueAndSize.z + interpolationRatio * (minMaxValueAndSize.w - minMaxValueAndSize.z);\n}\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nfloat getVVScaleStopsSize(float currentScale) {\nfloat outSize;\nif (currentScale <= values[0]) {\noutSize = sizes[0];\n} else {\nif (currentScale >= values[7]) {\noutSize = sizes[7];\n} else {\nint index;\nindex = -1;\nfor (int i = 0; i < 8; i++) {\nif (values[i] > currentScale) {\nindex = i;\nbreak;\n}\n}\nint prevIndex = index - 1;\nfloat a = currentScale - values[prevIndex];\nfloat b = values[index] - values[prevIndex];\noutSize = mix(sizes[prevIndex], sizes[index], a / b);\n}\n}\nreturn outSize;\n}\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nconst int VV_SIZE_N = 8;\nfloat getVVStopsSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nif (sizeValue <= values[0]) {\nreturn sizes[0];\n}\nif (sizeValue >= values[VV_SIZE_N - 1]) {\nreturn sizes[VV_SIZE_N - 1];\n}\nfor (int i = 1; i < VV_SIZE_N; ++i) {\nif (values[i] >= sizeValue) {\nfloat f = (sizeValue - values[i-1]) / (values[i] - values[i-1]);\nreturn mix(sizes[i-1], sizes[i], f);\n}\n}\nreturn sizes[VV_SIZE_N - 1];\n}\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nfloat getVVUnitValue(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nreturn sizeValue * (metersPerSRUnit / unitMeterRatio);\n}\n#endif\n#ifdef VV_OPACITY\nconst int VV_OPACITY_N = 8;\nfloat getVVOpacity(float opacityValue) {\nif (isNan(opacityValue)) {\nreturn 1.0;\n}\nif (opacityValue <= opacityValues[0]) {\nreturn opacities[0];\n}\nfor (int i = 1; i < VV_OPACITY_N; ++i) {\nif (opacityValues[i] >= opacityValue) {\nfloat f = (opacityValue - opacityValues[i-1]) / (opacityValues[i] - opacityValues[i-1]);\nreturn mix(opacities[i-1], opacities[i], f);\n}\n}\nreturn opacities[VV_OPACITY_N - 1];\n}\n#endif\n#ifdef VV_ROTATION\nmat4 getVVRotation(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat4(1, 0, 0, 0,\n0, 1, 0, 0,\n0, 0, 1, 0,\n0, 0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (rotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat4(cosA, sinA, 0, 0,\n-sinA,  cosA, 0, 0,\n0,     0, 1, 0,\n0,     0, 0, 1);\n}\nmat3 getVVRotationMat3(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat3(1, 0, 0,\n0, 1, 0,\n0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (rotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * -rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat3(cosA, -sinA, 0,\nsinA, cosA, 0,\n0,    0,    1);\n}\n#endif\n#ifdef VV_COLOR\nconst int VV_COLOR_N = 8;\nvec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {\nif (isNan(colorValue) || isColorLocked == 1.0) {\nreturn fallback;\n}\nif (colorValue <= colorValues[0]) {\nreturn colors[0];\n}\nfor (int i = 1; i < VV_COLOR_N; ++i) {\nif (colorValues[i] >= colorValue) {\nfloat f = (colorValue - colorValues[i-1]) / (colorValues[i] - colorValues[i-1]);\nreturn mix(colors[i-1], colors[i], f);\n}\n}\nreturn colors[VV_COLOR_N - 1];\n}\n#endif\nfloat getVVSize(in float size, in float vvSize, in float currentScale)  {\n#ifdef VV_SIZE_MIN_MAX_VALUE\nreturn getVVMinMaxSize(vvSize, size);\n#elif defined(VV_SIZE_SCALE_STOPS)\nfloat outSize = getVVScaleStopsSize(currentScale);\nreturn isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_FIELD_STOPS)\nfloat outSize = getVVStopsSize(vvSize, size);\nreturn isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_UNIT_VALUE)\nreturn getVVUnitValue(vvSize, size);\n#else\nreturn size;\n#endif\n}" }, "post-processing": { blit: { "blit.frag": "precision mediump float;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\ngl_FragColor = texture2D(u_texture, v_uv);\n}" }, bloom: { composite: { "composite.frag": "precision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D u_blurTexture1;\nuniform sampler2D u_blurTexture2;\nuniform sampler2D u_blurTexture3;\nuniform sampler2D u_blurTexture4;\nuniform sampler2D u_blurTexture5;\nuniform float u_bloomStrength;\nuniform float u_bloomRadius;\nuniform float u_bloomFactors[NUMMIPS];\nuniform vec3 u_bloomTintColors[NUMMIPS];\nfloat lerpBloomFactor(const in float factor) {\nfloat mirrorFactor = 1.2 - factor;\nreturn mix(factor, mirrorFactor, u_bloomRadius);\n}\nvoid main() {\nvec4 color = u_bloomStrength * (\nlerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\nlerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\nlerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\nlerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\nlerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n);\ngl_FragColor = clamp(color, 0.0, 1.0);\n}" }, gaussianBlur: { "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\n#define SIGMA RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = float(SIGMA);\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}" }, luminosityHighPass: { "luminosityHighPass.frag": "precision mediump float;\nuniform sampler2D u_texture;\nuniform vec3 u_defaultColor;\nuniform float u_defaultOpacity;\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\nvarying vec2 v_uv;\nvoid main() {\nvec4 texel = texture2D(u_texture, v_uv);\nvec3 luma = vec3(0.299, 0.587, 0.114);\nfloat v = dot(texel.xyz, luma);\nvec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);\nfloat alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);\ngl_FragColor = mix(outputColor, texel, alpha);\n}" } }, blur: { gaussianBlur: { "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nuniform float u_sigma;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = u_sigma;\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}" }, "radial-blur": { "radial-blur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nconst float sampleDist = 1.0;\nconst float sampleStrength = 2.2;\nvoid main(void) {\nfloat samples[10];\nsamples[0] = -0.08;\nsamples[1] = -0.05;\nsamples[2] = -0.03;\nsamples[3] = -0.02;\nsamples[4] = -0.01;\nsamples[5] =  0.01;\nsamples[6] =  0.02;\nsamples[7] =  0.03;\nsamples[8] =  0.05;\nsamples[9] =  0.08;\nvec2 dir = 0.5 - v_uv;\nfloat dist = sqrt(dir.x * dir.x + dir.y * dir.y);\ndir = dir / dist;\nvec4 color = texture2D(u_colorTexture,v_uv);\nvec4 sum = color;\nfor (int i = 0; i < 10; i++) {\nsum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);\n}\nsum *= 1.0 / 11.0;\nfloat t = dist * sampleStrength;\nt = clamp(t, 0.0, 1.0);\ngl_FragColor = mix(color, sum, t);\n}" } }, dra: { "dra.frag": "precision mediump float;\nuniform sampler2D u_minColor;\nuniform sampler2D u_maxColor;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\nvec4 minColor = texture2D(u_minColor, vec2(0.5));\nvec4 maxColor = texture2D(u_maxColor, vec2(0.5));\nvec4 color = texture2D(u_texture, v_uv);\nvec3 minColorUnpremultiply = minColor.rgb / minColor.a;\nvec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;\nvec3 colorUnpremultiply = color.rgb / color.a;\nvec3 range = maxColorUnpremultiply - minColorUnpremultiply;\ngl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);\n}", "min-max": { "min-max.frag": "#extension GL_EXT_draw_buffers : require\nprecision mediump float;\n#define CELL_SIZE 2\nuniform sampler2D u_minTexture;\nuniform sampler2D u_maxTexture;\nuniform vec2 u_srcResolution;\nuniform vec2 u_dstResolution;\nvarying vec2 v_uv;\nvoid main() {\nvec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);\nvec2 onePixel = vec2(1.0) / u_srcResolution;\nvec2 uv = (srcPixel + 0.5) / u_srcResolution;\nvec4 minColor = vec4(1.0);\nvec4 maxColor = vec4(0.0);\nfor (int y = 0; y < CELL_SIZE; ++y) {\nfor (int x = 0; x < CELL_SIZE; ++x) {\nvec2 offset = uv + vec2(x, y) * onePixel;\nminColor = min(minColor, texture2D(u_minTexture, offset));\nmaxColor = max(maxColor, texture2D(u_maxTexture, offset));\n}\n}\ngl_FragData[0] = minColor;\ngl_FragData[1] = maxColor;\n}" } }, "drop-shadow": { composite: { "composite.frag": "precision mediump float;\nuniform sampler2D u_layerFBOTexture;\nuniform sampler2D u_blurTexture;\nuniform vec4 u_shadowColor;\nuniform vec2 u_shadowOffset;\nuniform highp mat3 u_displayViewMat3;\nvarying vec2 v_uv;\nvoid main() {\nvec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);\nvec4 layerColor = texture2D(u_layerFBOTexture, v_uv);\nvec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);\ngl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);\n}" } }, "edge-detect": { "frei-chen": { "frei-chen.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nvarying vec2 v_uv;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[9];\nconst mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );\nconst mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );\nconst mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );\nconst mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );\nconst mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );\nconst mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );\nconst mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );\nconst mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );\nconst mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );\nvoid main() {\nG[0] = g0,\nG[1] = g1,\nG[2] = g2,\nG[3] = g3,\nG[4] = g4,\nG[5] = g5,\nG[6] = g6,\nG[7] = g7,\nG[8] = g8;\nmat3 I;\nfloat cnv[9];\nvec3 sample;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 9; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);\nfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\ngl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);\n}" }, sobel: { "sobel.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\ngl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);\n}" } }, "edge-enhance": { "edge-enhance.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nvec4 color = texture2D(u_colorTexture, v_uv);\ngl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);\n}" }, filterEffect: { "filterEffect.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform mat4 u_coefficients;\nvarying vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_colorTexture, v_uv);\nvec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);\nfloat a = color.a;\ngl_FragColor = vec4(a * rgbw.rgb, a);\n}" }, pp: { "pp.vert": "precision mediump float;\nattribute vec2 a_position;\nvarying vec2 v_uv;\nvoid main() {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}" } }, raster: { common: { "common.glsl": "uniform sampler2D u_image;\nuniform int u_bandCount;\nuniform bool u_flipY;\nuniform float u_opacity;\nuniform int u_resampling;\nuniform vec2 u_srcImageSize;\n#ifdef APPLY_PROJECTION\n#include <raster/common/projection.glsl>\n#endif\n#ifdef BICUBIC\n#include <filtering/bicubic.glsl>\n#endif\n#ifdef BILINEAR\n#include <filtering/bilinear.glsl>\n#endif\nvec2 getPixelLocation(vec2 coords) {\nvec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n#ifdef APPLY_PROJECTION\ntargetLocation = projectPixelLocation(targetLocation);\n#endif\nreturn targetLocation;\n}\nbool isOutside(vec2 coords){\nif (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\nreturn true;\n} else {\nreturn false;\n}\n}\nvec4 getPixel(vec2 pixelLocation) {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);\n#elif defined(BILINEAR)\nvec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);\n#else\nvec4 color = texture2D(u_image, pixelLocation);\n#endif\nreturn color;\n}", "common.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos * u_scale + u_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}", "contrastBrightness.glsl": "uniform float u_contrastOffset;\nuniform float u_brightnessOffset;\nvec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {\nvec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;\nfloat maxI = 255.0;\nfloat mid = 128.0;\nfloat c = u_contrastOffset;\nfloat b = u_brightnessOffset;\nvec4 v;\nif (c > 0.0 && c < 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;\n} else if (c <= 0.0 && c > -100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;\n} else if (c == 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);\nv = (sign(v) + 1.0) / 2.0;\n} else if (c == -100.0) {\nv = vec4(mid, mid, mid, currentPixel.a);\n}\nvec3 rgb = clamp(v.rgb / 255.0, 0.0, 1.0);\nreturn vec4(rgb, currentPixel.a);\n}", "getSurfaceValues.glsl": "#include <raster/common/mirror.glsl>\nvoid getSurfaceValues(sampler2D imageTexture, vec2 texCoord, vec2 srcImageSize, inout float values[10]) {\nvec2 onePixel = 1.0 / srcImageSize;\nvec4 va = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, -1.0)));\nvec4 vb = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(0.0, -1.0)));\nvec4 vc = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, -1.0)));\nvec4 vd = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, 0.0)));\nvec4 ve = texture2D(imageTexture, mirror(texCoord));\nvec4 vf = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, 0.0)));\nvec4 vg = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, 1.0)));\nvec4 vh = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(0.0, 1.0)));\nvec4 vi = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, 1.0)));\nfloat alpha = va.a * vb.a * vc.a * vd.a * ve.a * vf.a * vg.a * vh.a * vi.a;\nvalues[0] = va.r;\nvalues[1] = vb.r;\nvalues[2] = vc.r;\nvalues[3] = vd.r;\nvalues[4] = ve.r;\nvalues[5] = vf.r;\nvalues[6] = vg.r;\nvalues[7] = vh.r;\nvalues[8] = vi.r;\nvalues[9] = alpha;\n}", "inverse.glsl": "float invertValue(float value) {\nfloat s = sign(value);\nreturn (s * s) / (value + abs(s) - 1.0);\n}", "mirror.glsl": "vec2 mirror(vec2 pos) {\nvec2 pos1 = abs(pos);\nreturn step(pos1, vec2(1.0, 1.0)) * pos1 + step(1.0, pos1) * (2.0 - pos1);\n}", "projection.glsl": "uniform sampler2D u_transformGrid;\nuniform vec2 u_transformSpacing;\nuniform vec2 u_transformGridSize;\nuniform vec2 u_targetImageSize;\nvec2 projectPixelLocation(vec2 coords) {\n#ifdef LOOKUP_PROJECTION\nvec4 pv = texture2D(u_transformGrid, coords);\nreturn vec2(pv.r, pv.g);\n#endif\nvec2 index_image = floor(coords * u_targetImageSize);\nvec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);\nvec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;\nvec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);\nvec2 srcLocation;\nvec2 transform_location = index_transform + oneTransformPixel * 0.5;\nif (pos.s <= pos.t) {\nvec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));\nvec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));\n} else {\nvec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));\nvec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));\n}\nreturn srcLocation;\n}" }, flow: { "getFadeOpacity.glsl": "uniform float u_decayRate;\nuniform float u_fadeToZero;\nfloat getFadeOpacity(float x) {\nfloat cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);\nreturn (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);\n}", "getFragmentColor.glsl": "vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {\nfloat featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);\nif (dist > featheringStart) {\ncolor *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);\n}\nreturn color;\n}", imagery: { "imagery.frag": "precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform float u_Min;\nuniform float u_Max;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nfloat getIntensity(float v) {\nreturn u_Min + v * (u_Max - u_Min);\n}\nvoid main(void) {\nvec4 sampled = texture2D(u_texture, v_texcoord);\nfloat intensity = getIntensity(sampled.r);\ngl_FragColor = getColor(intensity);\ngl_FragColor.a *= getOpacity(sampled.r);\ngl_FragColor.a *= sampled.a;\ngl_FragColor.rgb *= gl_FragColor.a;\n}", "imagery.vert": "attribute vec2 a_position;\nattribute vec2 a_texcoord;\nuniform mat3 u_dvsMat3;\nvarying vec2 v_texcoord;\nvoid main(void) {\nvec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}" }, particles: { "particles.frag": "precision highp float;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/getFragmentColor.glsl>\nvoid main(void) {\ngl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);\n}", "particles.vert": "attribute vec4 a_xyts0;\nattribute vec4 a_xyts1;\nattribute vec4 a_typeIdDurationSeed;\nattribute vec4 a_extrudeInfo;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/vv.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nvec2 position0 = a_xyts0.xy;\nfloat t0 = a_xyts0.z;\nfloat speed0 = a_xyts0.w;\nvec2 position1 = a_xyts1.xy;\nfloat t1 = a_xyts1.z;\nfloat speed1 = a_xyts1.w;\nfloat type = a_typeIdDurationSeed.x;\nfloat id = a_typeIdDurationSeed.y;\nfloat duration = a_typeIdDurationSeed.z;\nfloat seed = a_typeIdDurationSeed.w;\nvec2 e0 = a_extrudeInfo.xy;\nvec2 e1 = a_extrudeInfo.zw;\nfloat animationPeriod = duration + u_trailLength;\nfloat scaledTime = u_time * u_flowSpeed;\nfloat randomizedTime = scaledTime + seed * animationPeriod;\nfloat t = mod(randomizedTime, animationPeriod);\nfloat fUnclamped = (t - t0) / (t1 - t0);\nfloat f = clamp(fUnclamped, 0.0, 1.0);\nfloat clampedTime = mix(t0, t1, f);\nfloat speed = mix(speed0, speed1, f);\nvec2 extrude;\nvec2 position;\nfloat fadeOpacity;\nfloat introOpacity;\nif (type == 2.0) {\nif (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nvec2 ortho = mix(e0, e1, f);\nvec2 parallel;\nparallel = normalize(position1 - position0) * 0.5;\nif (id == 1.0) {\nextrude = ortho;\nv_texcoord = vec2(0.5, 0.0);\n} else if (id == 2.0) {\nextrude = -ortho;\nv_texcoord = vec2(0.5, 1.0);\n} else if (id == 3.0) {\nextrude = ortho + parallel;\nv_texcoord = vec2(1.0, 0.0);\n} else if (id == 4.0) {\nextrude = -ortho + parallel;\nv_texcoord = vec2(1.0, 1.0);\n}\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else {\nif (fUnclamped < 0.0) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nif (id == 1.0) {\nextrude = e0;\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 2.0) {\nextrude = -e0;\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 3.0) {\nextrude = mix(e0, e1, f);\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else if (id == 4.0) {\nextrude = -mix(e0, e1, f);\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n}\n}\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_color.a *= fadeOpacity;\nv_color.a *= mix(1.0, introOpacity, u_introFade);\nv_color.rgb *= v_color.a;\n}" }, streamlines: { "streamlines.frag": "precision highp float;\nvarying float v_side;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_size;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/getFragmentColor.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nfloat t = mod(v_timeSeed * (v_totalTime + u_trailLength) + u_time * u_flowSpeed, v_totalTime + u_trailLength) - v_time;\nvec4 color = v_color * step(0.0, t) * getFadeOpacity(t / u_trailLength);\ncolor *= mix(1.0, 1.0 - exp(-v_time), u_introFade);\ngl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);\n}", "streamlines.vert": "attribute vec3 a_positionAndSide;\nattribute vec3 a_timeInfo;\nattribute vec2 a_extrude;\nattribute float a_speed;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_side;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nvoid main(void) {\nvec4 lineColor = getColor(a_speed);\nfloat lineOpacity = getOpacity(a_speed);\nfloat lineSize = getSize(a_speed);\nvec2 position = a_positionAndSide.xy;\nv_side = a_positionAndSide.z;\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_time = a_timeInfo.x;\nv_totalTime = a_timeInfo.y;\nv_timeSeed = a_timeInfo.z;\nv_color = lineColor;\nv_color.a *= lineOpacity;\nv_color.rgb *= v_color.a;\nv_size = lineSize;\n}" }, "vv.glsl": "#define MAX_STOPS 8\n#ifdef VV_COLOR\nuniform float u_color_stops[MAX_STOPS];\nuniform vec4 u_color_values[MAX_STOPS];\nuniform int u_color_count;\n#else\nuniform vec4 u_color;\n#endif\n#ifdef VV_OPACITY\nuniform float u_opacity_stops[MAX_STOPS];\nuniform float u_opacity_values[MAX_STOPS];\nuniform int u_opacity_count;\n#else\nuniform float u_opacity;\n#endif\n#ifdef VV_SIZE\nuniform float u_size_stops[MAX_STOPS];\nuniform float u_size_values[MAX_STOPS];\nuniform int u_size_count;\n#else\nuniform float u_size;\n#endif\nuniform float u_featheringOffset;\nvec4 getColor(float x) {\n#ifdef VV_COLOR\nvec4 color = u_color_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_color_count) {\nbreak;\n}\nfloat x1 = u_color_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_color_stops[i];\nvec4 y2 = u_color_values[i];\nif (x < x2) {\nvec4 y1 = u_color_values[i - 1];\ncolor = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\ncolor = y2;\n}\n}\n}\n#else\nvec4 color = u_color;\n#endif\nreturn color;\n}\nfloat getOpacity(float x) {\n#ifdef VV_OPACITY\nfloat opacity = u_opacity_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_opacity_count) {\nbreak;\n}\nfloat x1 = u_opacity_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_opacity_stops[i];\nfloat y2 = u_opacity_values[i];\nif (x < x2) {\nfloat y1 = u_opacity_values[i - 1];\nopacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nopacity = y2;\n}\n}\n}\n#else\nfloat opacity = u_opacity;\n#endif\nreturn opacity;\n}\nfloat getSize(float x) {\n#ifdef VV_SIZE\nfloat size = u_size_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_size_count) {\nbreak;\n}\nfloat x1 = u_size_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_size_stops[i];\nfloat y2 = u_size_values[i];\nif (x < x2) {\nfloat y1 = u_size_values[i - 1];\nsize = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nsize = y2;\n}\n}\n}\n#else\nfloat size = u_size;\n#endif\nreturn size + 2.0 * u_featheringSize * u_featheringOffset;\n}" }, hillshade: { "hillshade.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform int u_hillshadeType;\nuniform float u_sinZcosAs[6];\nuniform float u_sinZsinAs[6];\nuniform float u_cosZs[6];\nuniform float u_weights[6];\nuniform vec2 u_factor;\nuniform float u_minValue;\nuniform float u_maxValue;\nuniform float u_scaling;\n#include <raster/lut/colorize.glsl>\n#include <raster/common/getSurfaceValues.glsl>\nvec3 rgb2hsv(vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 overlay(float val, float minValue, float maxValue, float hillshade) {\nval = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);\nvec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);\nvec3 hsv = rgb2hsv(rgb.xyz);\nhsv.z = hillshade;\nreturn vec4(hsv2rgb(hsv) * u_scaling, 1.0) * rgb.a;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nif (currentPixel.a == 0.0) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nfloat pv[10];\ngetSurfaceValues(u_image, pixelLocation, u_srcImageSize, pv);\nfloat alpha = pv[9];\nfloat dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) * u_factor.s;\nfloat dzy = (pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) * u_factor.t;\nfloat dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);\nfloat hillshade = 0.0;\nif (u_hillshadeType == 0){\nfloat cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;\nfloat z = (u_cosZs[0] + cosDelta) / dzd;\nif (z < 0.0)  z = 0.0;\nhillshade = z;\n} else {\nfor (int k = 0; k < 6; k++) {\nfloat cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;\nfloat z = (u_cosZs[k] + cosDelta) / dzd;\nif (z < 0.0) z = 0.0;\nhillshade = hillshade + z * u_weights[k];\nif (k == 5) break;\n}\n}\n#ifdef APPLY_COLORMAP\nvec4 result = overlay(pv[4], u_minValue, u_maxValue, hillshade) * alpha * u_opacity;\n#else\nhillshade *= u_scaling;\nvec4 result = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;\n#endif\n#ifdef ROUND_OUTPUT\nresult = vec4(floor(result.xyz + 0.5), result.a);\n#endif\ngl_FragColor = result;\n}" }, lut: { "colorize.glsl": "uniform sampler2D u_colormap;\nuniform float u_colormapOffset;\nuniform float u_colormapMaxIndex;\nvec4 colorize(vec4 currentPixel, float scaleFactor) {\nfloat clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);\nvec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\nvec4 color = texture2D(u_colormap, clrPosition);\nvec4 result = vec4(color.rgb, color.a * currentPixel.a);\nreturn result;\n}\nvec4 colorizeNoClamp(vec4 currentPixel, float scaleFactor) {\nfloat value = currentPixel.r * scaleFactor - u_colormapOffset;\nvec4 result = colorize(currentPixel, scaleFactor);\nreturn result * step(0.0, value) * step(value, u_colormapMaxIndex);\n}", "lut.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\n#include <raster/lut/colorize.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nvec4 result = colorizeNoClamp(currentPixel, 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;\n}" }, magdir: { "magdir.frag": "precision mediump float;\nvarying vec4 v_color;\nuniform lowp float u_opacity;\nvoid main() {\ngl_FragColor = v_color * u_opacity;\n}", "magdir.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nuniform float u_rotation;\nuniform vec4 u_colors[12];\nvarying vec4 v_color;\nvoid main()\n{\nfloat angle = a_offset.y + u_rotation;\n#ifndef ROTATION_GEOGRAPHIC\nangle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;\n#endif\nvec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 pos = a_pos + offset * sizePercentage * u_symbolSize;\nv_color = u_colors[int(a_vv.x)];\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}" }, reproject: { "reproject.frag": "precision mediump float;\nvarying vec2 v_texcoord;\n#include <raster/common/common.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\n}", "reproject.vert": "precision mediump float;\nattribute vec2 a_position;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_position;\ngl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);\n}" }, rfx: { aspect: { "aspect.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_cellSize;\nuniform vec2 u_srcImageSize;\n#include <raster/common/getSurfaceValues.glsl>\nconst float pi = 3.14159265359;\nvoid main() {\nfloat pv[10];\ngetSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);\nfloat alpha = pv[9];\nfloat dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) / (8.0 * u_cellSize[0]);\nfloat dzy = -(pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) / (8.0 * u_cellSize[1]);\nalpha *= sign(abs(dzx) + abs(dzy));\nfloat aspect_rad = (dzx == 0.0) ? (step(0.0, dzy) * 0.5 * pi + step(dzy, 0.0) * 1.5 * pi) : mod((2.5 * pi + atan(dzy, -dzx)), 2.0 * pi);\nfloat aspect = aspect_rad * 180.0 / pi;\ngl_FragColor = vec4(aspect, aspect, aspect, 1.0) * alpha;\n}" }, bandarithmetic: { "bandarithmetic.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\nuniform float u_adjustments[3];\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\nfloat nir = pv2.r;\nfloat red = pv2.g;\nfloat index;\n#ifdef NDXI\nindex = (nir - red) * invertValue(nir + red);\n#elif defined(SR)\nindex = nir * invertValue(red);\n#elif defined(CI)\nindex = nir * invertValue(red) - 1.0;\n#elif defined(SAVI)\nindex = (nir - red) * invertValue(nir + red + u_adjustments[0]) * (1.0 + u_adjustments[0]);\n#elif defined(TSAVI)\nfloat s = u_adjustments[0];\nfloat a = u_adjustments[1];\nfloat x = u_adjustments[2];\nfloat y = -a * s + x * (1.0 + s * s);\nindex = (s * (nir - s * red - a)) * invertValue(a * nir + red + y);\n#elif defined(MSAVI)\nfloat nir2 = 2.0 * nir + 1.0;\nindex = 0.5 * (nir2 - sqrt(nir2 * nir2 - 8.0 * (nir - red)));\n#elif defined(GEMI)\nfloat eta = (2.0 * (nir * nir - red * red) + 1.5 * nir + 0.5 * red) * invertValue(nir + red + 0.5);\nindex = eta * (1.0 - 0.25 * eta) - (red - 0.125) * invertValue(1.0 - red);\n#elif defined(PVI)\nfloat a = u_adjustments[0];\nfloat b = u_adjustments[1];\nfloat y = sqrt(1.0 + a * a);\nindex = (nir - a * red - b) * invertValue(y);\n#elif defined(VARI)\nindex = (pv2.g - pv2.r) * invertValue(pv2.g + pv2.r - pv2.b);\n#elif defined(MTVI)\nfloat green = pv2.b;\nfloat v = sqrt(pow((2.0 * nir + 1.0), 2.0) - (6.0 * nir - 5.0 * sqrt(red)) - 0.5);\nindex = 1.5 * (1.2 * (nir - green) - 2.5 * (red - green)) * invertValue(v);\n#elif defined(RTVICORE)\nfloat green = pv2.b;\nindex = 100.0 * (nir - red) - 10.0 * (nir - green);\n#elif defined(EVI)\nfloat blue = pv2.b;\nfloat denom = nir + 6.0 * red - 7.5 * blue + 1.0;\nindex =  (2.5 * (nir - red)) * invertValue(denom);\n#elif defined(WNDWI)\nfloat g = pv2.r;\nfloat n = pv2.g;\nfloat s = pv2.b;\nfloat a = u_adjustments[0];\nfloat denom = g + a * n + (1.0 - a) * s;\nindex = (g - a * n - (1.0 - a) * s) * invertValue(denom);\n#elif defined(BAI)\nindex = invertValue(pow((0.1 - red), 2.0) + pow((0.06 - nir), 2.0));\n#else\ngl_FragColor = pv;\nreturn;\n#endif\n#ifdef ROUND_OUTPUT\nindex = floor(index + 0.5);\n#endif\ngl_FragColor = vec4(index, index, index, pv.a);\n}" }, colormap2rgb: { "colormap2rgb.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#include <raster/lut/colorize.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec4 result = colorizeNoClamp(vec4(pv.r, pv.r, pv.r, 1.0), 1.0);\ngl_FragColor = vec4(result.xyz * 255.0, 1.0) * result.a * pv.a;\n}" }, compositeband: { "compositeband.frag": "precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\nuniform sampler2D u_image2;\n#ifdef ONE_CONSTANT\nuniform float u_image1Const;\n#ifdef TWO_CONSTANT\nuniform float u_image2Const;\n#endif\nuniform mat3 u_imageSwap;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\nvec4 pv0 = texture2D(u_image, v_texcoord);\nfloat a = pv0.r;\nfloat alpha = pv0.a;\n#ifdef TWO_CONSTANT\nfloat b = u_image1Const;\nfloat c = u_image2Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#elif defined(ONE_CONSTANT)\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\nfloat c = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\nalpha *= pv1.a;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nvec4 pv2 = texture2D(u_image2, v_texcoord);\nfloat b = pv1.r;\nfloat c = pv2.r;\nalpha = alpha * pv1.a * pv2.a;\n#endif\ngl_FragColor = vec4(a, b, c, alpha);\n}" }, computechange: { "computechange.frag": "precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\n#ifdef ONE_CONSTANT\nuniform float u_image1Const;\nuniform mat3 u_imageSwap;\n#endif\nvarying vec2 v_texcoord;\nuniform vec2 u_domainRange;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv0 = texture2D(u_image, v_texcoord);\nfloat a = pv0.r;\n#ifdef ONE_CONSTANT\nfloat b = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, 0);\na = abc.s;\nb = abc.t;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\n#endif\nfloat result = a;\nfloat alpha = pv0.a;\n#ifdef DIFFERENCE\nresult = a - b;\n#elif defined(RELATIVE)\nresult = (a - b) * invertValue(max(abs(a), abs(b)));\n#endif\nbool isInvalid = result < u_domainRange.s || result > u_domainRange.t;\nresult = isInvalid ? 0.0 : result;\nalpha *= float(!isInvalid);\n#ifdef ROUND_OUTPUT\nresult = floor(result + 0.5);\n#endif\ngl_FragColor = vec4(result, result, result, alpha);\n}" }, contrast: { "contrast.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#include <raster/common/contrastBrightness.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec4 result = adjustContrastBrightness(pv, false);\ngl_FragColor = vec4(floor(result.rgb * 255.0 + 0.5), result.a);\n}" }, convolution: { "convolution.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_srcImageSize;\n#define KERNEL_SIZE_ROWS ROWS\n#define KERNEL_SIZE_COLS COLS\nuniform vec2 u_clampRange;\nuniform float u_kernel[25];\n#include <raster/common/mirror.glsl>\nvoid main() {\nvec3 rgb = vec3(0.0, 0.0, 0.0);\nvec2 resolution = 1.0 / u_srcImageSize;\nfloat rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));\nfloat colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));\nfloat alpha = 1.0;\nfor (int row = 0; row < KERNEL_SIZE_ROWS; row++) {\nfloat pos_row = rowOffset + float(row);\nfor (int col = 0; col < KERNEL_SIZE_COLS; col++) {\nvec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;\nvec4 pv = texture2D(u_image, mirror(pos));\nrgb += pv.rgb * u_kernel[row * KERNEL_SIZE_COLS + col];\nalpha *= pv.a;\n}\n}\nrgb = clamp(rgb, u_clampRange.s, u_clampRange.t);\ngl_FragColor = vec4(rgb * alpha, alpha);\n}" }, curvature: { "curvature.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform float u_zlFactor;\nuniform vec2 u_srcImageSize;\n#include <raster/common/getSurfaceValues.glsl>\nvoid main() {\nfloat pv[10];\ngetSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);\nfloat alpha = pv[9];\nfloat d = ((pv[3] + pv[5]) * 0.5 - pv[4]);\nfloat e = ((pv[1] + pv[7]) * 0.5 - pv[4]);\nfloat curvature = 0.0;\n#ifdef STANDARD\ncurvature = -u_zlFactor * (d + e);\ngl_FragColor = vec4(curvature, curvature, curvature, alpha);\n#else\nfloat f = (-pv[0] + pv[2] + pv[6] - pv[8]) / 4.0;\nfloat g = (-pv[3] + pv[5]) / 2.0;\nfloat h = (pv[1] - pv[7]) / 2.0;\nfloat g2 = g * g;\nfloat h2 = h * h;\n#ifdef PROFILE\ncurvature = (u_zlFactor * (d * g2 + e * h2 + f * g * h)) / (g2 + h2);\n#else\ncurvature = (-u_zlFactor * (d * h2 + e * g2 - f * g * h)) / (g2 + h2);\n#endif\n#endif\ngl_FragColor = vec4(curvature, curvature, curvature, alpha);\n}" }, extractband: { "extractband.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\ngl_FragColor = vec4(pv2, pv.a);\n}" }, focalstatistics: { "focalstatistics.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_srcImageSize;\n#define KERNEL_SIZE_ROWS ROWS\n#define KERNEL_SIZE_COLS COLS\nuniform vec2 u_clampRange;\n#include <raster/common/mirror.glsl>\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec2 resolution = 1.0 / u_srcImageSize;\nfloat rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));\nfloat colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));\nfloat count = 0.0;\n#ifdef STDDEV\nvec3 sum = vec3(0.0, 0.0, 0.0);\nvec3 sum2 = vec3(0.0, 0.0, 0.0);\n#endif\nvec4 currentPixel = texture2D(u_image, v_texcoord);\nvec3 rgb = currentPixel.rgb;\nfor (int row = 0; row < KERNEL_SIZE_ROWS; row++) {\nfloat pos_row = rowOffset + float(row);\nfor (int col = 0; col < KERNEL_SIZE_COLS; col++) {\nvec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;\nvec4 pv = texture2D(u_image, mirror(pos));\ncount += pv.a;\n#ifdef MIN\nrgb = min(rgb, pv.rgb);\n#elif defined(MAX)\nrgb = max(rgb, pv.rgb);\n#elif defined(MEAN)\nrgb += pv.rgb;\n#elif defined(STDDEV)\nsum += pv.rgb;\nsum2 += (pv.rgb * pv.rgb);\n#endif\n}\n}\n#ifdef MEAN\nrgb *= invertValue(count);\n#elif defined(STDDEV)\nrgb = sqrt((sum2 - sum * sum * invertValue(count)) * invertValue(count));\n#endif\nfloat alpha = step(0.9999, count);\nrgb = clamp(rgb, u_clampRange.s, u_clampRange.t);\n#ifdef FILL\nrgb = (1.0 - currentPixel.a) * rgb + currentPixel.a * currentPixel.rgb;\n#endif\ngl_FragColor = vec4(rgb * alpha, alpha);\n}" }, grayscale: { "grayscale.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec3 u_weights;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat value = dot(u_weights, pv.rgb);\ngl_FragColor = vec4(value, value, value, pv.a);\n}" }, local: { "local.frag": "precision highp float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\n#ifdef ONE_CONSTANT\nuniform float u_image1Const;\n#ifdef TWO_CONSTANT\nuniform float u_image2Const;\n#endif\nuniform mat3 u_imageSwap;\n#endif\nvarying vec2 v_texcoord;\nuniform vec2 u_domainRange;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv0 = texture2D(u_image, v_texcoord);\nfloat a = pv0.r;\n#ifdef TWO_IMAGES\n#ifdef ONE_CONSTANT\nfloat b = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, 0);\na = abc.s;\nb = abc.t;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\n#endif\n#elif defined(CONDITIONAL)\n#ifdef TWO_CONSTANT\nfloat b = u_image1Const;\nfloat c = u_image2Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#elif defined(ONE_CONSTANT)\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\nfloat c = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nvec4 pv2 = texture2D(u_image2, v_texcoord);\nfloat b = pv1.r;\nfloat c = pv2.r;\n#endif\n#endif\nfloat result = a;\nfloat alpha = pv0.a;\n#ifdef PLUS\nresult = a + b;\n#elif defined(MINUS)\nresult = a - b;\n#elif defined(TIMES)\nresult = a * b;\n#elif defined(DIVIDE)\nresult = a * invertValue(b);\nalpha *= float(abs(sign(b)));\n#elif defined(FLOATDIVIDE)\nresult = a * invertValue(b);\nalpha *= float(abs(sign(b)));\n#elif defined(FLOORDIVIDE)\nresult = floor(a * invertValue(b));\nalpha *= float(abs(sign(b)));\n#elif defined(SQUARE)\nresult = a * a;\n#elif defined(SQRT)\nresult = sqrt(a);\n#elif defined(POWER)\nresult = pow(a, b);\n#elif defined(LN)\nresult = a <= 0.0 ? 0.0: log(a);\nalpha *= float(a > 0.0);\n#elif defined(LOG_1_0)\nresult = a <= 0.0 ? 0.0: log2(a) * invertValue(log2(10.0));\nalpha *= float(a > 0.0);\n#elif defined(LOG_2)\nresult = a <= 0.0 ? 0.0: log2(a);\nalpha *= float(a > 0.0);\n#elif defined(EXP)\nresult = exp(a);\n#elif defined(EXP_1_0)\nresult = pow(10.0, a);\n#elif defined(EXP_2)\nresult = pow(2.0, a);\n#elif defined(ROUNDDOWN)\nresult = floor(a);\n#elif defined(ROUNDUP)\nresult = ceil(a);\n#elif defined(INT)\nresult = float(sign(a)) * floor(abs(a));\n#elif defined(MOD)\nresult = mod(a, b);\n#elif defined(NEGATE)\nresult = -a;\n#elif defined(ABS)\nresult = abs(a);\n#elif defined(ACOS)\nresult = abs(a) > 1.0 ? 0.0: acos(a);\nalpha *= step(abs(a), 1.00001);\n#elif defined(ACOSH)\nresult = acosh(a);\n#elif defined(ASIN)\nresult = abs(a) > 1.0 ? 0.0: asin(a);\nalpha *= step(abs(a), 1.00001);\n#elif defined(ASINH)\nresult = asinh(a);\n#elif defined(ATAN)\nresult = atan(a);\n#elif defined(ATANH)\nresult = abs(a) > 1.0 ? 0.0: atanh(a);\nalpha *= step(abs(a), 1.0);\n#elif defined(ATAN_2)\nresult = atan(a, b);\n#elif defined(COS)\nresult = cos(a);\n#elif defined(COSH)\nresult = cosh(a);\n#elif defined(SIN)\nresult = sin(a);\n#elif defined(SINH)\nresult = sinh(a);\n#elif defined(TAN)\nresult = tan(a);\n#elif defined(TANH)\nresult = tanh(a);\n#elif defined(BITWISEAND)\nresult = float(int(a) & int(b));\n#elif defined(BITWISEOR)\nresult = float(int(a) | int(b));\n#elif defined(BITWISELEFTSHIFT)\nresult = float(int(a) << int(b));\n#elif defined(BITWISERIGHTSHIFT)\nresult = float(int(a) >> int(b));\n#elif defined(BITWISENOT)\nresult = float(~(int(a)));\n#elif defined(BITWISEXOR)\nresult = float(int(a) ^ int(b));\n#elif defined(BOOLEANAND)\nresult = float((a != 0.0) && (b != 0.0));\n#elif defined(BOOLEANNOT)\nresult = float(a == 0.0);\n#elif defined(BOOLEANOR)\nresult = float((a != 0.0) || (b != 0.0));\n#elif defined(BOOLEANXOR)\nresult = float((a != 0.0) ^^ (b != 0.0));\n#elif defined(GREATERTHAN)\nresult = float(a > b);\n#elif defined(GREATERTHANEQUAL)\nresult = float(a >= b);\n#elif defined(LESSTHAN)\nresult = float(a < b);\n#elif defined(LESSTHANEQUAL)\nresult = float(a <= b);\n#elif defined(EQUALTO)\nresult = float(a == b);\n#elif defined(NOTEQUAL)\nresult = float(a != b);\n#elif defined(ISNULL)\nresult = float(alpha == 0.0);\nalpha = 1.0;\n#elif defined(SETNULL)\nfloat maskValue = float(a == 0.0);\nresult = maskValue * b;\nalpha *= maskValue;\n#elif defined(CONDITIONAL)\nfloat weight = float(abs(sign(a)));\nresult = weight * b + (1.0 - weight) * c;\n#endif\nfloat rangeFactor = step(u_domainRange.s, result) * step(result, u_domainRange.t);\nresult *= rangeFactor;\nalpha *= rangeFactor;\n#ifdef ROUND_OUTPUT\nresult = floor(result + 0.5);\n#endif\ngl_FragColor = vec4(result, result, result, alpha);\n}" }, mask: { "mask.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#define LEN_INCLUDED_RANGES 6\n#define LEN_NODATA_VALUES 6\nuniform highp float u_includedRanges[6];\nuniform highp float u_noDataValues[6];\nfloat maskFactor(float bandValue, float fromValue, float to) {\nfloat factor = 1.0;\nfor (int i = 0; i < LEN_NODATA_VALUES; i++) {\nfactor *= float(u_noDataValues[i] != bandValue);\n}\nfactor *= step(fromValue, bandValue) * step(bandValue, to);\nreturn factor;\n}\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat redFactor = maskFactor(pv.r, u_includedRanges[0], u_includedRanges[1]);\n#ifdef MULTI_BAND\nfloat greenFactor = maskFactor(pv.g, u_includedRanges[2], u_includedRanges[3]);\nfloat blueFactor = maskFactor(pv.b, u_includedRanges[4], u_includedRanges[5]);\nfloat maskFactor = redFactor * greenFactor * blueFactor;\ngl_FragColor = pv * maskFactor;\n#else\ngl_FragColor = pv * redFactor;\n#endif\n}" }, ndvi: { "ndvi.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\nfloat nir = pv2.r;\nfloat red = pv2.g;\nfloat index = (nir - red) * invertValue(nir + red);\n#ifdef SCALED\nindex = floor((index + 1.0) * 100.0 + 0.5);\n#endif\ngl_FragColor = vec4(index, index, index, pv.a);\n}" }, remap: { "remap.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#define LEN_REMAP_RANGES 18\n#define LEN_NODATA_RANGES 12\nuniform highp float u_rangeMaps[18];\nuniform highp float u_noDataRanges[12];\nuniform highp float u_unmatchMask;\nuniform vec2 u_clampRange;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat factor = 1.0;\nfloat bandValue = pv.r;\nfor (int i = 0; i < LEN_NODATA_RANGES; i+=2) {\nfloat inside = 1.0 - step(u_noDataRanges[i], bandValue) * step(bandValue, u_noDataRanges[i+1]);\nfactor *= inside;\n}\nfloat mapValue = 0.0;\nfloat includeMask = 0.0;\nfor (int i = 0; i < LEN_REMAP_RANGES; i+=3) {\nfloat stepMask = step(u_rangeMaps[i], bandValue) * step(bandValue, u_rangeMaps[i+1]);\nincludeMask = (1.0 - stepMask) * includeMask + stepMask;\nmapValue = (1.0 - stepMask) * mapValue + stepMask * u_rangeMaps[i+2];\n}\nbandValue = factor * (mapValue + (1.0 - includeMask) * u_unmatchMask * pv.r);\nfloat bandMask = factor * max(u_unmatchMask, includeMask);\nbandValue = clamp(bandValue, u_clampRange.s, u_clampRange.t);\ngl_FragColor = vec4(bandValue, bandValue, bandValue, bandMask * pv.a);\n}" }, slope: { "slope.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_cellSize;\nuniform float u_zFactor;\nuniform vec2 u_srcImageSize;\nuniform float u_pixelSizePower;\nuniform float u_pixelSizeFactor;\n#include <raster/common/getSurfaceValues.glsl>\nvoid main() {\nfloat pv[10];\ngetSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);\nfloat alpha = pv[9];\nfloat xf = (u_zFactor + pow(u_cellSize[0], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[0]);\nfloat yf = (u_zFactor + pow(u_cellSize[1], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[1]);\nfloat dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) * xf;\nfloat dzy = -(pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) * yf;\nfloat rise2run = sqrt(dzx * dzx + dzy * dzy);\n#ifdef PERCENT_RISE\nfloat result = rise2run * 100.0;\n#else\nfloat result = atan(rise2run) * 57.2957795;\n#endif\n#ifdef ROUND_OUTPUT\nresult = floor(result + 0.5);\n#endif\ngl_FragColor = vec4(result, result, result, alpha);\n}" }, stretch: { "stretch.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying highp vec2 v_texcoord;\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, float gamma, float gammaCorrection) {\nval = clamp(val, minCutOff, maxCutOff);\nfloat stretchedVal;\n#ifdef USE_GAMMA\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\ntempf -= step(1.0, gamma) * sign(gamma - 1.0) * pow(1.0 / outRange, relativeVal * gammaCorrection);\nstretchedVal = tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput;\nstretchedVal = clamp(stretchedVal, minOutput, maxOutput);\n#else\nstretchedVal = minOutput + (val - minCutOff) * factor;\n#endif\n#ifdef ROUND_OUTPUT\nstretchedVal = floor(stretchedVal + 0.5);\n#endif\nreturn stretchedVal;\n}\nvoid main() {\nvec4 currentPixel = texture2D(u_image, v_texcoord);\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_gamma[0], u_gammaCorrection[0]);\n#ifdef MULTI_BAND\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, currentPixel.a);\n#else\ngl_FragColor = vec4(redVal, redVal, redVal, currentPixel.a);\n#endif\n}" }, vs: { "vs.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" } }, scalar: { "scalar.frag": "precision mediump float;\nuniform lowp float u_opacity;\nvarying vec2 v_pos;\nconst vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);\nconst float outlineSize = 0.02;\nconst float innerRadius = 0.25;\nconst float outerRadius = 0.42;\nconst float innerSquareLength = 0.15;\nvoid main() {\nmediump float dist = length(v_pos);\nmediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);\nfillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));\n#ifdef INNER_CIRCLE\nmediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);\nfillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));\n#else\nmediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);\n#endif\ngl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;\n}", "scalar.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nvarying vec2 v_pos;\nvoid main()\n{\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 size = u_symbolSize * sizePercentage;\nvec2 pos = a_pos + a_offset * size;\nv_pos = a_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}" }, stretch: { "stretch.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform bool u_useGamma;\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\n#include <raster/lut/colorize.glsl>\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {\nif (val >= maxCutOff) {\nreturn maxOutput;\n} else if (val <= minCutOff) {\nreturn minOutput;\n}\nfloat stretchedVal;\nif (useGamma) {\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\nif (gamma > 1.0) {\ntempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);\n}\nstretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;\n} else {\nstretchedVal = minOutput + (val - minCutOff) * factor;\n}\n#ifdef ROUND_OUTPUT\nstretchedVal = floor(stretchedVal + 0.5);\n#endif\nreturn stretchedVal;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\n#ifdef NOOP\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\nreturn;\n#endif\nif (u_bandCount == 1) {\nfloat grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n#ifdef APPLY_COLORMAP\nvec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;\n#else\ngl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;\n#endif\n} else {\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;\n}\n}" } }, stencil: { "stencil.frag": "void main() {\ngl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}", "stencil.vert": "attribute vec2 a_pos;\nuniform mat3 u_worldExtent;\nvoid main() {\ngl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);\n}" }, test: { "TestShader.common.glsl": "#ifndef RETURN_RED\nvarying    vec4      v_color;\n#endif\nvarying    vec2      v_offset;", "TestShader.frag": "precision highp float;\n#include <test/TestShader.common.glsl>\nvoid main() {\nif (v_offset.x > -.5 && v_offset.y > -.5 && v_offset.x < .5 && v_offset.y < .5) {\ndiscard;\n}\n#ifdef RETURN_RED\ngl_FragColor = vec4(1., 0., 0., 1.);\n#else\ngl_FragColor = v_color;\n#endif\n}", "TestShader.vert": "const float POS_PRECISION_FACTOR = 10.;\nconst float OFFSET_PRECISION_FACTOR = 10.;\nconst float SIZE_PRECISION_FACTOR = 10.;\nattribute  vec2      a_pos_packed;\nattribute  vec2      a_offset_packed;\nattribute  float     a_size_packed;\n#ifdef DATA_DRIVEN_COLOR\nconst float u_dataDrivenColor_validValues[4] = float[4](0., 0., 1., 0.);\nuniform    vec4      u_dataDrivenColor_colorFallback;\nuniform    vec4      u_dataDrivenColor_color;\n#endif\nuniform    float     u_view_zoomLevel;\n#include <test/TestShader.common.glsl>\n#ifdef DATA_DRIVEN_COLOR\nvec4 getColor(float value) {\nint index = -1;\nfor (int i = 0; i < 4; i++) {\nif (u_dataDrivenColor_validValues[i] == value) {\nindex = i;\nbreak;\n}\n}\nif (index == -1) {\nreturn u_dataDrivenColor_colorFallback;\n}\nreturn u_dataDrivenColor_color;\n}\n#endif\nvoid main() {\nvec2  a_pos = a_pos_packed / POS_PRECISION_FACTOR;\nvec2  a_offset = a_offset_packed / OFFSET_PRECISION_FACTOR;\nfloat a_size = a_size_packed / SIZE_PRECISION_FACTOR;\nvec4 color = vec4(1., 0., 0., 1.);\n#ifdef DATA_DRIVEN_COLOR\ncolor = getColor(1.);\n#endif\nvec2 offsetScaled = a_offset * a_size;\nvec4 pos = vec4(a_pos.xy + offsetScaled, 0., 1.);\ngl_Position = pos;\n#ifndef RETURN_RED\nv_color = color;\n#endif\nv_offset = a_offset;\n}" }, tileInfo: { "tileInfo.frag": "uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\nvoid main(void) {\nlowp vec4 color = texture2D(u_texture, v_tex);\ncolor.rgb *= color.a;\ngl_FragColor = color;\n}", "tileInfo.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_coord_ratio;\nuniform mediump vec2 u_delta;\nuniform mediump vec2 u_dimensions;\nvarying mediump vec2 v_tex;\nvoid main() {\nmediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\nvec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\nv_tex = a_pos;\n}" }, util: { "atan2.glsl": "float atan2(in float y, in float x) {\nfloat t0, t1, t2, t3, t4;\nt3 = abs(x);\nt1 = abs(y);\nt0 = max(t3, t1);\nt1 = min(t3, t1);\nt3 = 1.0 / t0;\nt3 = t1 * t3;\nt4 = t3 * t3;\nt0 =         - 0.013480470;\nt0 = t0 * t4 + 0.057477314;\nt0 = t0 * t4 - 0.121239071;\nt0 = t0 * t4 + 0.195635925;\nt0 = t0 * t4 - 0.332994597;\nt0 = t0 * t4 + 0.999995630;\nt3 = t0 * t3;\nt3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;\nt3 = x < 0.0 ?  3.141592654 - t3 : t3;\nt3 = y < 0.0 ? -t3 : t3;\nreturn t3;\n}", "encoding.glsl": "const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}" } };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js
function o5(r12) {
  return function(e14) {
    let o7 = r12;
    return e14.split("/").forEach((r13) => {
      o7 && (o7 = o7[r13]);
    }), o7;
  };
}
var t4 = new e7(o5(e11));
function n12(r12) {
  return t4.resolveIncludes(r12);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BackgroundPrograms.js
var e12 = { shaders: { vertexShader: n12("background/background.vert"), fragmentShader: n12("background/background.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };

// node_modules/@arcgis/core/views/2d/engine/webgl/DefaultVertexAttributeLayouts.js
var r6 = /* @__PURE__ */ new Map([["geometry", [new t2("a_pos", 2, C.BYTE, 0, 2)]]]);
var t5 = /* @__PURE__ */ new Map([["geometry", [new t2("a_pos", 2, C.BYTE, 0, 4), new t2("a_tex", 2, C.BYTE, 2, 4)]]]);
var n13 = /* @__PURE__ */ new Map([["geometry", [new t2("a_pos", 2, C.UNSIGNED_SHORT, 0, 4)]]]);

// node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js
var r7 = class extends e9 {
  constructor(t11, e14, i5, r12, n19, o7, h3 = n19, l5 = o7) {
    super(), this.tileDebugInfoTexture = null, this.debugInfo = { display: { length: 0, minOrderedLength: 0, minUnorderedLength: 0, triangleCount: 0 }, memory: { bytesUsed: 0, bytesReserved: 0 } }, this._destroyed = false, this.key = new e3(t11), this.resolution = e14, this.x = i5, this.y = r12, this.width = n19, this.height = o7, this.rangeX = h3, this.rangeY = l5;
  }
  destroy() {
    this.tileDebugInfoTexture && (this.tileDebugInfoTexture.dispose(), this.tileDebugInfoTexture = null), this._destroyed = true;
  }
  get debugSlot() {
    let t11 = this;
    for (; t11.parent !== this._stage; ) {
      if (!t11.parent) return 0;
      t11 = t11.parent;
    }
    return this._stage.children.indexOf(t11);
  }
  setTransform(i5) {
    const s10 = this.resolution / (i5.resolution * i5.pixelRatio), r12 = this.transforms.tileMat3, [n19, o7] = i5.toScreenNoRotation([0, 0], [this.x, this.y]), h3 = this.width / this.rangeX * s10, l5 = this.height / this.rangeY * s10;
    r(r12, h3, 0, 0, 0, l5, 0, n19, o7, 1), i2(this.transforms.displayViewScreenMat3, i5.displayViewMat3, r12);
  }
  get destroyed() {
    return this._destroyed;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/AFeatureTile.js
var f3 = e6();
var p2 = n8();
var d2 = class extends r7 {
  constructor(t11, s10, r12, i5) {
    super(t11, s10, r12, i5, a, a);
  }
  destroy() {
    super.destroy();
  }
  setTransform(o7) {
    const a8 = this.resolution / o7.resolution, m3 = this.transforms.tileMat3, [n19, l5] = o7.toScreenNoRotation([0, 0], [this.x, this.y]), c4 = this.width / this.rangeX * a8, h3 = this.height / this.rangeY * a8;
    r(m3, c4, 0, 0, 0, h3, 0, n19, l5, 1), i2(this.transforms.displayViewScreenMat3, o7.displayViewMat3, m3);
    const f6 = r3(n7(), c4, 0, 0, h3, n19, l5);
    e4(this.transforms.labelMat2d, o7.viewMat2d, f6);
  }
  _createTransforms() {
    return { labelMat2d: n7(), tileMat3: e6(), displayViewScreenMat3: e6() };
  }
  containsScreenPoint(t11, s10, r12) {
    const i5 = i2(f3, t11.viewMat3, this.transforms.tileMat3), a8 = s2(f3, i5);
    if (null == a8) return true;
    o(p2, ...s10, 1);
    const l5 = N(p2, p2, a8), c4 = r12 * (this.resolution / t11.resolution);
    return l5[0] >= -c4 && l5[0] < this.width + c4 && l5[1] >= -c4 && l5[1] < this.height + c4;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/FreeList.js
var t6 = class _t {
  constructor(a8) {
    if (this.next = null, !Array.isArray(a8)) return void (this.data = a8);
    this.data = a8[0];
    let e14 = this;
    for (let n19 = 1; n19 < a8.length; n19++) e14.next = new _t([a8[n19]]), e14 = e14.next;
  }
  *values() {
    let t11 = this;
    for (; t11; ) yield t11.data, t11 = t11.next;
  }
  forEach(t11) {
    let a8 = this;
    for (; a8; ) t11(a8.data), a8 = a8.next;
  }
  get last() {
    return this.next ? this.next.last : this;
  }
};
var a3 = class {
  constructor(a8) {
    this._head = null, null != a8 && (this._head = new t6(a8));
  }
  get head() {
    return this._head;
  }
  maxAvailableSpace() {
    if (null == this._head) return 0;
    let t11 = 0;
    return this._head.forEach((a8) => {
      const e14 = a8.end - a8.start;
      t11 = Math.max(t11, e14);
    }), t11;
  }
  firstFit(t11) {
    if (null == this._head) return null;
    let a8 = null, e14 = this._head;
    for (; e14; ) {
      const n19 = e14.data.end - e14.data.start;
      if (n19 === t11) return a8 ? a8.next = e14.next : this._head = e14.next, e14.data.start;
      if (n19 > t11) {
        const a9 = e14.data.start;
        return e14.data.start += t11, a9;
      }
      a8 = e14, e14 = e14.next;
    }
    return null;
  }
  free(a8, e14) {
    const n19 = a8 + e14;
    if (null == this._head) {
      const e15 = new t6({ start: a8, end: n19 });
      return void (this._head = e15);
    }
    if (n19 <= this._head.data.start) {
      if (n19 === this._head.data.start) return void (this._head.data.start -= e14);
      const r13 = new t6({ start: a8, end: n19 });
      return r13.next = this._head, void (this._head = r13);
    }
    let r12 = this._head, d6 = r12.next;
    for (; d6; ) {
      if (d6.data.start >= n19) {
        if (r12.data.end === a8) {
          if (r12.data.end += e14, r12.data.end === d6.data.start) {
            const t11 = d6.data.end - d6.data.start;
            return r12.data.end += t11, void (r12.next = d6.next);
          }
          return;
        }
        if (d6.data.start === n19) return void (d6.data.start -= e14);
        const s11 = new t6({ start: a8, end: n19 });
        return s11.next = r12.next, void (r12.next = s11);
      }
      r12 = d6, d6 = d6.next;
    }
    if (a8 === r12.data.end) return void (r12.data.end += e14);
    const s10 = new t6({ start: a8, end: n19 });
    r12.next = s10;
  }
  clear() {
    this._head = null;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/PooledUint32Array.js
var r8 = has("esri-2d-log-allocations");
var s7 = class _s {
  static create(t11, e14) {
    const r12 = e14.acquireUint32Array(t11);
    return new _s(r12, e14);
  }
  constructor(t11, e14) {
    this._array = t11, this._pool = e14;
  }
  get array() {
    return this._array;
  }
  get length() {
    return this._array.length;
  }
  getUint32View(t11, e14) {
    return new Uint32Array(this._array.buffer, t11 + this._array.byteOffset, e14);
  }
  expand(t11) {
    if (t11 <= this._array.byteLength) return;
    const e14 = this._pool.acquireUint32Array(t11);
    e14.set(this._array), this._pool.releaseUint32Array(this._array), this._array = e14;
  }
  destroy() {
    this._pool.releaseUint32Array(this._array);
  }
};
var a4 = class _a {
  constructor() {
    this._data = new ArrayBuffer(_a.BYTE_LENGTH), this._freeList = new a3({ start: 0, end: this._data.byteLength });
  }
  static get BYTE_LENGTH() {
    return 16e6;
  }
  get buffer() {
    return this._data;
  }
  acquireUint32Array(t11) {
    const e14 = this._freeList.firstFit(t11);
    return null == e14 ? null : new Uint32Array(this._data, e14, t11 / Uint32Array.BYTES_PER_ELEMENT);
  }
  releaseUint32Array(t11) {
    this._freeList.free(t11.byteOffset, t11.byteLength);
  }
};
var i4 = class {
  constructor() {
    this._pages = [], this._pagesByBuffer = /* @__PURE__ */ new Map(), this._bytesAllocated = 0;
  }
  destroy() {
    this._pages = [], this._pagesByBuffer = null;
  }
  get _bytesTotal() {
    return this._pages.length * a4.BYTE_LENGTH;
  }
  acquireUint32Array(e14) {
    if (this._bytesAllocated += e14, r8 && console.log(`Allocating ${e14}, (${this._bytesAllocated} / ${this._bytesTotal})`), e14 >= a4.BYTE_LENGTH) return new Uint32Array(e14 / Uint32Array.BYTES_PER_ELEMENT);
    for (const t11 of this._pages) {
      const r12 = t11.acquireUint32Array(e14);
      if (null != r12) return r12;
    }
    const s10 = this._addPage().acquireUint32Array(e14);
    return n2(s10, "Expected to allocate page"), s10;
  }
  releaseUint32Array(t11) {
    this._bytesAllocated -= t11.byteLength, r8 && console.log(`Freeing ${t11.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);
    const e14 = this._pagesByBuffer.get(t11.buffer);
    e14 && e14.releaseUint32Array(t11);
  }
  _addPage() {
    const t11 = new a4();
    return this._pages.push(t11), this._pagesByBuffer.set(t11.buffer, t11), t11;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaders/TileInfoPrograms.js
var r9 = { shaders: { vertexShader: n12("tileInfo/tileInfo.vert"), fragmentShader: n12("tileInfo/tileInfo.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };

// node_modules/@arcgis/core/views/2d/engine/webgl/FeatureDisplayList.js
function r10(t11, e14) {
  return t11 << 16 | 255 & e14;
}
function d3(t11) {
  return 255 & t11;
}
var h = class {
  constructor(t11, e14, n19, i5, a8) {
    this.instance = t11, this.materialKey = e14, this.target = n19, this.start = i5, this.count = a8;
  }
  get textureKey() {
    return d3(this.materialKey);
  }
  get indexEnd() {
    return this.start + this.count;
  }
  extend(t11) {
    this.count += t11;
  }
  render(t11) {
    this.instance.techniqueRef.render(t11, this);
  }
  getStencilReference() {
    return this.target.stencilRef;
  }
  getAttributePrecisionPackFactors() {
    const t11 = this.instance.instanceId;
    return this.target.getMesh(t11).getAttributePrecisionPackFactors();
  }
  draw(t11, e14) {
    f(t11) ? this.drawCompute(t11.context, e14) : this.drawGeometry(t11.context, e14);
  }
  drawCompute(t11, e14) {
    const n19 = this.instance.instanceId, i5 = this.target.getMesh(n19).getComputeVAO(t11, e14), r12 = this.start * Uint32Array.BYTES_PER_ELEMENT / 3;
    t11.bindVAO(i5), t11.drawElements(E.POINTS, this.count / 3, C.UNSIGNED_INT, r12), t11.bindVAO(null);
  }
  drawGeometry(t11, e14) {
    const n19 = this.instance.instanceId, i5 = this.target.getMesh(n19).getGeometryVAO(t11, e14), r12 = this.start * Uint32Array.BYTES_PER_ELEMENT;
    t11.bindVAO(i5), t11.drawElements(E.TRIANGLES, this.count, C.UNSIGNED_INT, r12), t11.bindVAO(null);
  }
};
var l3 = class _l {
  constructor() {
    this._length = 0, this._minOrderedLength = 0, this._materialKeys = /* @__PURE__ */ new Set();
  }
  static fromDisplayEntities(t11, e14, n19, i5) {
    const a8 = new _l();
    for (const s10 of t11.values()) for (const t12 of s10.records) {
      const s11 = n19.getInstance(t12.instanceId), d6 = r10(s11.instanceId, t12.textureKey);
      a8.addRecord(s11, d6, t12.indexStart, t12.indexCount, t12.vertexStart, t12.vertexCount, e14, i5);
    }
    return a8;
  }
  get length() {
    return this._length;
  }
  get minOrderedLength() {
    return this._minOrderedLength;
  }
  get minUnorderedLength() {
    return this._materialKeys.size;
  }
  render(t11, e14) {
    const { drawPhase: n19 } = t11;
    for (const i5 of this.infos()) {
      const a8 = i5.instance.techniqueRef;
      a8.drawPhase & n19 && (null == e14 || a8.type === e14) && i5.render(t11);
    }
  }
  addRecord(i5, a8, s10, r12, d6, l5, o7, c4) {
    let u6 = s10, _5 = r12;
    if (_5 || (u6 = d6, _5 = l5), !_5) return;
    if (null == this._head) {
      const t11 = new h(i5, a8, o7, u6, _5);
      return this._head = new t6(t11), this._tail = this._head, this._length++, void this._minOrderedLength++;
    }
    if (c4 === N3.STRICT_ORDER) return this._insert(i5, a8, o7, u6, _5, this._tail, null);
    let g4 = null, m3 = this._head;
    const f6 = i5.instanceId, E4 = i5.techniqueRef.symbologyPlane;
    if (c4 === N3.STRICT_MARKERS_AND_TEXT && (E4 === S.MARKER || E4 === S.TEXT)) return this._insert(i5, a8, o7, u6, _5, this._tail, null);
    for (; m3; ) {
      const t11 = m3.data.instance, e14 = t11.instanceId, n19 = t11.techniqueRef.symbologyPlane, s11 = g4 == null ? void 0 : g4.data.instance.instanceId;
      if (E4 < n19 || f6 === s11 && f6 !== e14) return this._insert(i5, a8, o7, u6, _5, g4, m3);
      g4 = m3, m3 = m3.next;
    }
    this._insert(i5, a8, o7, u6, _5, g4, null);
  }
  *infos() {
    if (null != this._head) for (const t11 of this._head.values()) yield t11;
  }
  _insert(t11, e14, i5, a8, s10, r12, d6) {
    if (null == r12 && null == d6) {
      const r13 = new h(t11, e14, i5, a8, s10);
      return this._head = new t6(r13), this._tail = this._head, this._length++, void this._minOrderedLength++;
    }
    return e14 !== this._tail.data.materialKey && this._minOrderedLength++, this._materialKeys.add(e14), null == r12 && null != d6 ? this._insertAtHead(t11, e14, i5, a8, s10, d6) : null != r12 && null == d6 ? this._insertAtEnd(t11, e14, i5, a8, s10, r12) : null != r12 && null != d6 ? this._insertAtMiddle(t11, e14, i5, a8, s10, r12, d6) : void 0;
  }
  _insertAtHead(t11, e14, i5, a8, s10, r12) {
    const d6 = a8 + s10;
    if (e14 === r12.data.materialKey && i5 === r12.data.target && d6 === r12.data.start) r12.data.start = a8, r12.data.count += s10;
    else {
      const d7 = new h(t11, e14, i5, a8, s10);
      this._head = new t6(d7), this._head.next = r12, this._length++;
    }
  }
  _insertAtEnd(t11, e14, i5, a8, s10, r12) {
    if (r12.data.materialKey === e14 && r12.data.indexEnd === a8) r12.data.count += s10;
    else {
      const d6 = new h(t11, e14, i5, a8, s10);
      this._tail = new t6(d6), r12.next = this._tail, this._length++;
    }
  }
  _insertAtMiddle(t11, e14, i5, a8, s10, r12, d6) {
    const l5 = a8 + s10;
    if (r12.data.materialKey === e14 && r12.data.target === i5 && r12.data.indexEnd === a8) r12.data.count += s10, r12.data.materialKey === d6.data.materialKey && r12.data.target === d6.data.target && r12.data.indexEnd === d6.data.start && (r12.data.count += d6.data.count, r12.next = d6.next, this._length--);
    else if (e14 === d6.data.materialKey && i5 === d6.data.target && l5 === d6.data.start) d6.data.start = a8, d6.data.count += s10;
    else {
      const l6 = new h(t11, e14, i5, a8, s10), o7 = new t6(l6);
      r12.next = o7, o7.next = d6, this._length++;
    }
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/ReshufflePlan.js
var t7 = class {
  constructor(t11) {
    this._indexOnly = t11, this.vertex = { count: 0, operations: [] }, this.index = { count: 0, operations: [] };
  }
  copyRecord(t11) {
    let e14 = 0;
    this._indexOnly || (e14 = this.vertex.count - t11.vertexStart, this.vertex.operations.push({ srcFrom: t11.vertexStart, dstFrom: this.vertex.count, count: t11.vertexCount, mutate: 0 }), t11.vertexStart = this.vertex.count, this.vertex.count += t11.vertexCount);
    let n19 = false;
    if (this._indexOnly && this.index.operations.length >= 1) {
      const e15 = this.index.operations[this.index.operations.length - 1];
      e15.srcFrom + e15.count === t11.indexStart && (e15.count += t11.indexCount, n19 = true);
    }
    n19 || this.index.operations.push({ srcFrom: t11.indexStart, dstFrom: this.index.count, count: t11.indexCount, mutate: e14 }), t11.indexStart = this.index.count, this.index.count += t11.indexCount;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Buffer.js
var n14 = 1.25;
var h2 = 32767;
var a5 = h2 << 16 | h2;
var d4 = class {
  constructor(t11, e14, r12, s10) {
    this._pool = s10;
    const n19 = s7.create(e14 * r12 * Uint32Array.BYTES_PER_ELEMENT, this._pool);
    this.size = e14, this.strideInt = r12, this.bufferType = t11, this.dirty = { start: 1 / 0, end: 0 }, this.memoryStats = { bytesUsed: 0, bytesReserved: e14 * r12 * Uint32Array.BYTES_PER_ELEMENT }, this._gpu = null, this._cpu = n19, this.clear();
  }
  get elementSize() {
    return this._cpu.length / this.strideInt;
  }
  get intSize() {
    return this.fillPointer * this.strideInt;
  }
  get byteSize() {
    return this.intSize * Uint32Array.BYTES_PER_ELEMENT;
  }
  get invalidated() {
    return this.bufferSize > 0 && !this._gpu;
  }
  get invalidatedComputeBuffer() {
    return this.bufferSize > 0 && !this._gpuComputeTriangles;
  }
  invalidate() {
    var _a;
    this._invalidateTriangleBuffer(), (_a = this._gpu) == null ? void 0 : _a.dispose(), this._gpu = null;
  }
  _invalidateTriangleBuffer() {
    var _a;
    (_a = this._gpuComputeTriangles) == null ? void 0 : _a.dispose(), this._gpuComputeTriangles = null;
  }
  destroy() {
    var _a, _b, _c;
    (_a = this._gpu) == null ? void 0 : _a.dispose(), (_b = this._gpuComputeTriangles) == null ? void 0 : _b.dispose(), (_c = this._cpu) == null ? void 0 : _c.destroy();
  }
  clear() {
    this.dirty.start = 1 / 0, this.dirty.end = 0, this.freeList = new a3({ start: 0, end: this._cpu.length / this.strideInt }), this.fillPointer = 0;
  }
  ensure(t11) {
    if (this.maxAvailableSpace() >= t11) return;
    if (t11 * this.strideInt > this._cpu.length - this.fillPointer) {
      this.invalidate();
      const i5 = this._cpu.length / this.strideInt, e14 = Math.round((i5 + t11) * n14), r12 = e14 * this.strideInt;
      this._cpu.expand(r12 * Uint32Array.BYTES_PER_ELEMENT), this.freeList.free(i5, e14 - i5), this.memoryStats.bytesReserved += (e14 - i5) * this.strideInt * Uint32Array.BYTES_PER_ELEMENT;
    }
  }
  set(t11, i5) {
    this._cpu.array[t11] !== i5 && (this._cpu.array[t11] = i5, this.dirty.start = Math.min(t11, this.dirty.start), this.dirty.end = Math.max(t11 + 1, this.dirty.end));
  }
  getGPUBuffer(t11, i5 = false) {
    if (!this.bufferSize) return null;
    if (i5) {
      if ("index" !== this.bufferType) throw new Error("Tired to get triangle buffer, but target is not an index buffer");
      return null == this._gpuComputeTriangles && (this._gpuComputeTriangles = this._createComputeBuffer(t11)), this._gpuComputeTriangles;
    }
    return null == this._gpu && (this._gpu = this._createBuffer(t11)), this._gpu;
  }
  getView(t11, i5) {
    return this._cpu.getUint32View(t11, i5 / Uint32Array.BYTES_PER_ELEMENT);
  }
  get bufferSize() {
    return this._cpu.length / this.strideInt;
  }
  maxAvailableSpace() {
    return this.freeList.maxAvailableSpace();
  }
  insert(i5, e14, r12, s10) {
    const n19 = r12 * this.strideInt;
    if (!n19) return 0;
    const h3 = e14 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, a8 = new Uint32Array(i5, h3, n19), d6 = this.freeList.firstFit(r12);
    n2(d6, "First fit region must be defined");
    const u6 = d6 * this.strideInt, o7 = n19;
    if (this._cpu.array.set(a8, u6), 0 !== s10) for (let t11 = 0; t11 < a8.length; t11++) this._cpu.array[t11 + u6] += s10;
    return this.dirty.start = Math.min(this.dirty.start, u6), this.dirty.end = Math.max(this.dirty.end, u6 + o7), this.fillPointer = Math.max(this.fillPointer, u6 + o7), this.memoryStats.bytesUsed += r12 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, d6;
  }
  copyFrom(i5, e14, r12, s10, n19) {
    const h3 = r12 * this.strideInt;
    if (!h3) return 0;
    const a8 = e14 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, d6 = i5._cpu.getUint32View(a8, h3), u6 = this.freeList.firstFit(r12);
    n2(u6, "First fit region must be defined");
    const o7 = u6 * this.strideInt, f6 = h3;
    if (this._cpu.array.set(d6, o7), 0 !== s10) for (let t11 = 0; t11 < h3; t11++) this._cpu.array[o7 + t11 * this.strideInt + n19] += s10;
    return this.dirty.start = Math.min(this.dirty.start, o7), this.dirty.end = Math.max(this.dirty.end, o7 + f6), this.fillPointer = Math.max(this.fillPointer, o7 + f6), this.memoryStats.bytesUsed += r12 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, u6;
  }
  free(t11, i5, e14) {
    const r12 = t11 * this.strideInt, s10 = (t11 + i5) * this.strideInt;
    if (true === e14) for (let n19 = t11; n19 !== t11 + i5; n19++) this._cpu.array[n19 * this.strideInt] = a5;
    this.dirty.start = Math.min(this.dirty.start, r12), this.dirty.end = Math.max(this.dirty.end, s10), this.freeList.free(t11, i5), this.memoryStats.bytesUsed -= i5 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT;
  }
  upload() {
    if (this.dirty.end) {
      if (this._invalidateTriangleBuffer(), null == this._gpu) return this.dirty.start = 1 / 0, void (this.dirty.end = 0);
      this._gpu.setSubData(this._cpu.array, this.dirty.start, this.dirty.start, this.dirty.end), this.dirty.start = 1 / 0, this.dirty.end = 0;
    }
  }
  reshuffle(t11, e14) {
    if (0 === e14.length) return;
    const r12 = this.byteSize, s10 = t11 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, n19 = r12 > s10, h3 = this._cpu, a8 = s7.create(s10, this._pool);
    n19 || a8.array.set(this._cpu.getUint32View(0, this.intSize));
    for (const i5 of e14) if (n19 || i5.srcFrom !== i5.dstFrom || 0 !== i5.mutate) {
      this.dirty.start = Math.min(this.dirty.start, i5.dstFrom * this.strideInt), this.dirty.end = Math.max(this.dirty.end, (i5.dstFrom + i5.count) * this.strideInt);
      for (let t12 = 0; t12 < i5.count; t12++) {
        const e15 = (i5.dstFrom + t12) * this.strideInt, r13 = (i5.srcFrom + t12) * this.strideInt;
        for (let t13 = 0; t13 < this.strideInt; t13++) a8.array[e15 + t13] = h3.array[r13 + t13] + i5.mutate;
      }
    }
    this._cpu.destroy(), this._cpu = a8, n19 && this.invalidate(), this.freeList.clear(), this.memoryStats.bytesUsed = this.memoryStats.bytesReserved = s10;
  }
  _createBuffer(t11) {
    const i5 = F.DYNAMIC_DRAW;
    return "index" === this.bufferType ? E2.createIndex(t11, i5, this._cpu.array) : E2.createVertex(t11, i5, this._cpu.array);
  }
  _createComputeBuffer(t11) {
    const i5 = F.DYNAMIC_DRAW, e14 = new Uint32Array(this.fillPointer / 3);
    for (let r12 = 0; r12 < this.fillPointer; r12 += 3) e14[r12 / 3] = this._cpu.array[r12];
    return E2.createIndex(t11, i5, e14);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/MappedMesh.js
var f4 = 1e3;
function n15(e14, t11) {
  const r12 = e14.attributes.filter((e15) => t11.locations.has(e15.name)).map((t12) => ({ name: t12.name, type: t12.type, count: t12.count, divisor: 0, normalized: t12.normalized ?? false, offset: t12.offset, stride: e14.stride }));
  return /* @__PURE__ */ new Map([["geometry", r12]]);
}
function u3(e14, t11) {
  const r12 = [], i5 = e14.attributes.filter((e15) => t11.locations.has(e15.name));
  for (const s10 of i5) {
    r12.push({ name: s10.name, type: s10.type, count: s10.count, divisor: 0, normalized: s10.normalized ?? false, offset: s10.offset, stride: e14.stride });
    const i6 = t11.computeAttributeMap[s10.name];
    null != i6 && 2 === i6.length && (r12.push({ name: i6[0], count: s10.count, divisor: 0, type: s10.type, normalized: s10.normalized ?? false, offset: s10.offset + e14.stride, stride: e14.stride }), r12.push({ name: i6[1], count: s10.count, divisor: 0, type: s10.type, normalized: s10.normalized ?? false, offset: s10.offset + 2 * e14.stride, stride: e14.stride }));
  }
  return /* @__PURE__ */ new Map([["geometry", r12]]);
}
var a6 = class {
  constructor(e14, t11) {
    if (this._bufferPool = e14, this._layout = t11, this._invalidatedGeometry = false, this._invalidatedCompute = false, this._position = this._layout.attributes.find((e15) => "pos" === e15.name || "position" === e15.name), !this._position) throw new Error("InternalError: Unable to find position attribute");
  }
  destroy() {
    var _a2, _b;
    this._indexBuffer = u(this._indexBuffer), this._vertexBuffer = u(this._vertexBuffer), (_a2 = this._computeVAO) == null ? void 0 : _a2.disposeVAOOnly(), (_b = this._geometryVAO) == null ? void 0 : _b.disposeVAOOnly();
  }
  get layout() {
    return this._layout;
  }
  getDrawArgs(e14, t11, r12, i5) {
    return i5 ? { primitive: E.POINTS, count: t11 / 3, offset: r12 / 3 } : { primitive: e14, count: t11, offset: r12 };
  }
  getAttributePrecisionPackFactors() {
    const e14 = {};
    for (const t11 of this.layout.attributes) t11.packPrecisionFactor && (e14[t11.name] = t11.packPrecisionFactor);
    return e14;
  }
  getDebugVertexInfo(e14 = false, t11) {
    if (!this._vertexBuffer) return null;
    const r12 = this._layout, s10 = r12.stride, o7 = this._vertexBuffer.getView(0, this._vertexBuffer.byteSize), f6 = [];
    if (e14) if (null == t11) console.log("must provide location info to see compute attributes");
    else for (const i5 of r12.attributes) {
      const e15 = t11.computeAttributeMap[i5.name];
      null != e15 && 2 === e15.length && (f6.push({ ...i5, name: e15[0], offset: i5.offset + s10 }), f6.push({ ...i5, name: e15[1], offset: i5.offset + 2 * s10 }));
    }
    const n19 = new DataView(o7.slice().buffer);
    let u6 = o7.byteLength / s10;
    e14 && (u6 = this._indexBuffer.fillPointer / 3);
    const a8 = this._indexBuffer.getView(0, this._indexBuffer.byteSize);
    let h3 = 0;
    const d6 = [];
    for (let m3 = 0; m3 < u6; m3++) {
      if (e14) {
        h3 = a8[3 * m3] * s10;
      }
      const t12 = {};
      for (const e15 of [...r12.attributes, ...f6]) {
        let r13 = `${e15.offset} ${e15.name}`, s11 = s5(n19, e15, h3);
        if (e15.packPrecisionFactor) if (r13 += ` (precision: ${e15.packPrecisionFactor})`, "number" == typeof s11) s11 /= e15.packPrecisionFactor;
        else for (let t13 = 0; t13 < s11.length; t13++) s11[t13] /= e15.packPrecisionFactor;
        t12[r13] = s11;
      }
      h3 += s10, d6.push(t12);
    }
    return { vertices: d6, layout: r12 };
  }
  _ensure(e14, t11) {
    if (this._vertexBuffer && this._indexBuffer) this._indexBuffer.ensure(Math.max(e14, 1e3)), this._vertexBuffer.ensure(Math.max(t11, 1e3));
    else {
      const i5 = this._layout.stride / Uint32Array.BYTES_PER_ELEMENT;
      this._indexBuffer = new d4("index", Math.max(e14, f4), 1, this._bufferPool), this._vertexBuffer = new d4("vertex", Math.max(t11, f4), i5, this._bufferPool);
    }
  }
  append(e14) {
    const t11 = e14.layout.stride, r12 = e14.indices.byteLength / Uint32Array.BYTES_PER_ELEMENT, i5 = e14.vertices.byteLength / t11;
    this._ensure(r12, i5);
    const { vertices: s10, indices: o7 } = e14, f6 = this._vertexBuffer.insert(s10, 0, s10.byteLength / t11, 0);
    return { vertexFrom: f6, indexFrom: this._indexBuffer.insert(o7, 0, o7.byteLength / 4, f6) };
  }
  copyRecordFrom(e14, r12, i5, s10) {
    const { indexStart: o7, indexCount: f6, vertexStart: n19, vertexCount: u6 } = r12;
    this._ensure(f6, u6);
    const a8 = e14._position, h3 = i5 * (a8.packPrecisionFactor ?? 1), d6 = s10 * (a8.packPrecisionFactor ?? 1), m3 = a8.offset, c4 = s4(h3, d6), l5 = this._vertexBuffer.copyFrom(e14._vertexBuffer, n19, u6, c4, m3), _5 = this._indexBuffer.copyFrom(e14._indexBuffer, o7, f6, l5 - n19, 0), p6 = r12.clone();
    return p6.vertexStart = l5, p6.indexStart = _5, p6.overlaps = 0, p6;
  }
  remove(e14, t11, r12, i5) {
    this._indexBuffer.free(e14, t11), this._vertexBuffer.free(r12, i5);
  }
  upload() {
    this._invalidatedGeometry = true, this._invalidatedCompute = true;
  }
  getGeometryVAO(e14, t11) {
    var _a2;
    if (!this._vertexBuffer || !this._indexBuffer || !this._vertexBuffer.bufferSize) return null;
    if (this._invalidatedGeometry) {
      (this._vertexBuffer.invalidated || this._indexBuffer.invalidated) && (this._vertexBuffer.invalidate(), this._indexBuffer.invalidate(), (_a2 = this._geometryVAO) == null ? void 0 : _a2.disposeVAOOnly(), this._geometryVAO = null), this._vertexBuffer.upload(), this._indexBuffer.upload();
      const r12 = this._indexBuffer.getGPUBuffer(e14, false), i5 = this._vertexBuffer.getGPUBuffer(e14);
      this._geometryVAO || (this._geometryVAO = new o3(e14, t11.locations, n15(this.layout, t11), /* @__PURE__ */ new Map([["geometry", i5]]), r12)), this._invalidatedGeometry = false;
    }
    return this._geometryVAO;
  }
  getComputeVAO(e14, t11) {
    var _a2;
    if (!this._vertexBuffer || !this._indexBuffer || !this._vertexBuffer.bufferSize) return null;
    if (this._invalidatedCompute) {
      (this._vertexBuffer.invalidated || this._indexBuffer.invalidatedComputeBuffer) && (this._vertexBuffer.invalidate(), this._indexBuffer.invalidate(), (_a2 = this._computeVAO) == null ? void 0 : _a2.disposeVAOOnly(), this._computeVAO = null), this._vertexBuffer.upload(), this._indexBuffer.upload();
      const r12 = this._indexBuffer.getGPUBuffer(e14, true), i5 = this._vertexBuffer.getGPUBuffer(e14);
      this._computeVAO || (this._computeVAO = new o3(e14, t11.locations, u3(this.layout, t11), /* @__PURE__ */ new Map([["geometry", i5]]), r12), this._invalidatedCompute = false);
    }
    return this._computeVAO;
  }
  get memoryStats() {
    return { bytesUsed: this._vertexBuffer.memoryStats.bytesUsed + this._indexBuffer.memoryStats.bytesUsed, bytesReserved: this._vertexBuffer.memoryStats.bytesReserved + this._indexBuffer.memoryStats.bytesReserved, vertex: this._vertexBuffer.memoryStats, index: this._indexBuffer.memoryStats };
  }
  reshuffle(e14) {
    this._vertexBuffer && this._vertexBuffer.reshuffle(e14.vertex.count, e14.vertex.operations), this._indexBuffer && this._indexBuffer.reshuffle(e14.index.count, e14.index.operations);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/util/Reader.js
var t8 = class {
  constructor(t11) {
    this._pos = 0, this._buffer = t11, this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer);
  }
  readInt32() {
    return this._i32View[this._pos++];
  }
  readF32() {
    return this._f32View[this._pos++];
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/meshDebugUtils.js
function o6(e14) {
  if (!e14) return null;
  return { entities: n6(new t8(e14.entities), s3), vertexData: e14.data.map(a7) };
}
function a7(t11) {
  const i5 = t11.layout.stride, r12 = new DataView(t11.vertices), o7 = [], a8 = t11.vertices.byteLength / i5;
  let s10 = 0;
  for (let n19 = 0; n19 < a8; n19++) {
    const a9 = {};
    for (const i6 of t11.layout.attributes) {
      let t12 = `${i6.offset} ${i6.name}`, o8 = s5(r12, i6, s10);
      if (i6.packPrecisionFactor) if (t12 += ` (precision: ${i6.packPrecisionFactor})`, "number" == typeof o8) o8 /= i6.packPrecisionFactor;
      else for (let e14 = 0; e14 < o8.length; e14++) o8[e14] /= i6.packPrecisionFactor;
      a9[t12] = o8;
    }
    s10 += i5, o7.push(a9);
  }
  return { vertices: o7, layout: t11.layout };
}

// node_modules/@arcgis/core/views/2d/engine/webgl/FeatureTile.js
var y2 = () => n.getLogger("esri.views.2d.engine.webgl.FeatureTile");
var g = 0;
var b = class extends d2 {
  constructor(e14, s10, i5, r12, o7 = false) {
    super(e14, s10, i5, r12), this._meshes = /* @__PURE__ */ new Map(), this._entities = [], this._invalidated = false, this._nextUploadAllowed = false, this.tileAge = g++, this._metrics = [], this._entityIds = /* @__PURE__ */ new Set(), this._entityIdsFromBuffer = /* @__PURE__ */ new Set(), this._attributeEpoch = 0, this._encounteredEnd = false, this._objectIdMap = null, this.visible = true, this.transforms.labelMat2d = n7(), this.enableDeferredUploads = o7;
  }
  destroy() {
    super.destroy(), this.clear();
  }
  clear() {
    for (const e14 of this._meshes.values()) e14.destroy();
    this._meshes.clear(), this._entities = [], this._metrics = [], this._displayList = null, this._invalidated = true, this._entityIds.clear(), this._nextUploadAllowed = true;
  }
  beforeRender(e14) {
    super.beforeRender(e14), this._needsReshuffle && e14.reshuffleManager.schedule(this);
  }
  tryReady(e14) {
    const t11 = this._invalidated && !this._uploadAllowed;
    return !(this.isReady || t11 || !this._encounteredEnd || !(e14 >= this._attributeEpoch)) && (has("esri-2d-update-debug") && console.debug(`Tile[${this.key.id}] FeatureTile.ready [epoch=${e14}]`), this.ready(), this.requestRender(), true);
  }
  get labelMetrics() {
    return this._metrics;
  }
  get hasData() {
    return !!this._meshes.size;
  }
  get hasAnimations() {
    return !!this._objectIdMap;
  }
  get needsUpload() {
    return this._invalidated;
  }
  get _uploadAllowed() {
    return !this.enableDeferredUploads || this._nextUploadAllowed;
  }
  upload() {
    this._nextUploadAllowed = true;
  }
  getDisplayList(e14, t11) {
    if (this._uploadAllowed && this._invalidated) {
      this._entities.sort((e15, t12) => {
        const s10 = t12.sortKey, i5 = e15.sortKey;
        return i5 === s10 ? e15.id - t12.id : i5 - s10;
      }), t11 === N3.BATCHING && this.reshuffle(true), this._displayList = l3.fromDisplayEntities(this._entities, this, e14, t11);
      for (const e15 of this._meshes.values()) e15.upload();
      this.debugInfo.display.length = this._displayList.length, this.debugInfo.display.minOrderedLength = this._displayList.minOrderedLength, this.debugInfo.display.minUnorderedLength = this._displayList.minUnorderedLength, this.requestRender(), this._invalidated = false, this._nextUploadAllowed = false;
    }
    return this._displayList;
  }
  getMesh(e14) {
    if (!this._meshes.has(e14)) throw new Error(`InternalError: Unable to find VAO for instance: ${e14}`);
    return this._meshes.get(e14);
  }
  getSortKeys(e14) {
    const t11 = /* @__PURE__ */ new Map();
    for (const { id: s10, sortKey: i5 } of this._entities) if (e14.has(s10) && t11.set(s10, i5), t11.size === e14.size) break;
    return t11;
  }
  onMessage(e14) {
    if (e14.objectIdMap) for (const t11 in e14.objectIdMap) this._objectIdMap || (this._objectIdMap = {}), this._objectIdMap[t11] = e14.objectIdMap[t11];
    switch (e14.type) {
      case "append":
        this._onAppendMessage(e14);
        break;
      case "update":
        this._onUpdateMessage(e14);
    }
    if (this._aggregateMemoryStats(), this.requestRender(), e14.end) {
      if (has("esri-2d-update-debug") && console.debug(`Tile[${this.key.id}] FeatureTile.end [epoch=${e14.attributeEpoch}]`), !e14.attributeEpoch) throw new Error("InternalError: Attribute epoch not defined.");
      this._attributeEpoch = e14.attributeEpoch, this._encounteredEnd = true;
    }
  }
  _onAppendMessage(e14) {
    if (has("esri-2d-update-debug") && console.debug(`Tile[${this.key.id}] FeatureTile.append`, { append: o6(e14 == null ? void 0 : e14.append) }), e14.clear && this.clear(), !e14.append) return;
    const t11 = n6(new t8(e14.append.entities), s3);
    this._insert(t11, e14.append.data, false);
  }
  _onUpdateMessage(e14) {
    has("esri-2d-update-debug") && console.debug(`Tile[${this.key.id}] FeatureTile.update`, { isPixelBuffer: e14.isPixelBuffer, modify: o6(e14.modify), remove: e14.remove });
    const t11 = n6(new t8(e14.modify.entities), s3), s10 = t11.map((e15) => e15.id), i5 = e14.isPixelBuffer ?? false, r12 = [...e14.remove, ...s10];
    i5 ? this._removeByIdsFromBuffer(r12) : this._removeByIds(r12), this._insert(t11, e14.modify.data, i5);
  }
  reshuffle(e14 = false) {
    if (this.destroyed) return;
    const t11 = /* @__PURE__ */ new Map();
    for (const s10 of this._entities) for (const i5 of s10.records) {
      const s11 = this._meshes.get(i5.instanceId);
      let r12 = t11.get(s11);
      r12 || (r12 = new t7(e14), t11.set(s11, r12)), r12.copyRecord(i5);
    }
    for (const [s10, i5] of t11) s10.reshuffle(i5);
    this._invalidated = true, this._aggregateMemoryStats(), has("esri-2d-update-debug") && y2().info(`Tile ${this.key.id} was reshuffled.`);
  }
  copyPixelBufferedEntitesFrom(e14, t11, s10, i5) {
    const r12 = s10 * a, o7 = i5 * a;
    for (const d6 of e14._entities) {
      let s11 = null;
      for (const i6 of d6.records) if (i6.overlaps & t11) {
        const t12 = e14.getMesh(i6.instanceId), n19 = this._ensureMesh(i6.instanceId, t12.layout).copyRecordFrom(t12, i6, r12, o7);
        s11 || (s11 = new s3(d6.id, d6.sortKey), this._entityIdsFromBuffer.add(d6.id), this._entities.push(s11)), s11.records.push(n19);
      }
    }
    this._invalidated = true;
  }
  _ensureMesh(e14, t11) {
    return this._meshes.has(e14) || this._meshes.set(e14, new a6(this._stage.bufferPool, t11)), this._meshes.get(e14);
  }
  _insert(e14, t11, s10) {
    if (!e14.length) return;
    this._removeDuplicatedBufferedEntites(e14);
    const i5 = this._insertVertexData(t11);
    for (const r12 of e14) {
      for (const e15 of r12.records) e15.updateBaseOffsets(i5.get(e15.instanceId));
      s10 ? this._tryInsertBufferedEntity(r12) : this._insertEntity(r12);
    }
    this._invalidated = true;
  }
  _insertVertexData(e14) {
    const t11 = /* @__PURE__ */ new Map();
    for (const s10 of e14) {
      const { instanceId: e15, layout: i5 } = s10, r12 = this._ensureMesh(e15, i5).append(s10);
      if (s10.metrics) {
        const e16 = n6(new t8(s10.metrics), r4) ?? [];
        this._metrics.push(...e16);
      }
      t11.set(e15, r12);
    }
    return t11;
  }
  _insertEntity(e14) {
    has("esri-2d-update-debug") && this._entityIds.has(e14.id) && console.error(`Tile ${this.key.id} insertEnitty: Already have entityId ${e14.id}`), this._entityIds.add(e14.id), this._entities.push(e14);
  }
  _tryInsertBufferedEntity(e14) {
    this._entityIds.has(e14.id) ? this._removeRecordsFromMesh(e14.records) : (this._entityIdsFromBuffer.add(e14.id), this._entities.push(e14));
  }
  _removeDuplicatedBufferedEntites(e14) {
    if (!this._entityIdsFromBuffer.size) return;
    const t11 = [];
    for (const s10 of e14) this._entityIdsFromBuffer.has(s10.id) && t11.push(s10.id);
    this._removeByIds(t11);
  }
  _removeByIdsFromBuffer(e14) {
    this._removeByIds(e14.filter((e15) => this._entityIdsFromBuffer.has(e15)));
  }
  _removeByIds(e14) {
    if (0 === e14.length) return;
    const t11 = new Set(e14), s10 = [];
    for (const i5 of this._entities) t11.has(i5.id) ? this._remove(i5) : s10.push(i5);
    this._entities = s10, this._invalidated = true;
  }
  _remove(e14) {
    this._removeRecordsFromMesh(e14.records), this._entityIds.delete(e14.id), this._entityIdsFromBuffer.delete(e14.id);
    for (let t11 = this._metrics.length - 1; t11 >= 0; t11--) this._metrics[t11].entityTexel === e14.id && this._metrics.splice(t11, 1);
  }
  _removeRecordsFromMesh(e14) {
    var _a;
    for (const t11 of e14) {
      const { instanceId: e15, indexStart: s10, indexCount: i5, vertexStart: r12, vertexCount: o7 } = t11;
      (_a = this._meshes.get(e15)) == null ? void 0 : _a.remove(s10, i5, r12, o7);
    }
  }
  _aggregateMemoryStats() {
    this.debugInfo.memory.bytesUsed = 0, this.debugInfo.memory.bytesReserved = 0;
    for (const e14 of this._meshes.values()) this.debugInfo.memory.bytesUsed += e14.memoryStats.bytesUsed, this.debugInfo.memory.bytesReserved += e14.memoryStats.bytesReserved;
  }
  get _needsReshuffle() {
    if (this.destroyed) return false;
    const { bytesUsed: e14, bytesReserved: t11 } = this.debugInfo.memory, s10 = e14 / t11, { minOrderedLength: n19, length: h3 } = this.debugInfo.display;
    return t11 > xi && s10 < bi || h3 > ji && n19 / h3 < ki;
  }
  get entityIds() {
    return this._objectIdMap ? this._entities.map(({ id: e14 }) => ({ objectId: this._objectIdMap[e14], displayId: e14 })) : [];
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrush.js
var t9 = class {
  constructor() {
    this.name = this.constructor.name || "UnnamedBrush", this.brushEffect = null;
  }
  prepareState(t11, r12) {
  }
  draw(t11, r12, s10) {
  }
  drawMany(t11, r12, s10) {
    for (const a8 of r12) a8.visible && this.draw(t11, a8, s10);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/BrushClip.js
var m = () => $2("clip", { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.SHORT }] });
var p3 = class extends t9 {
  constructor() {
    super(...arguments), this._color = r5(0, 1, 0, 1);
  }
  dispose() {
    this._program && this._program.dispose();
  }
  prepareState({ context: r12 }) {
    r12.setStencilTestEnabled(true), r12.setBlendingEnabled(false), r12.setFaceCullingEnabled(false), r12.setColorMask(false, false, false, false), r12.setStencilOp(I.KEEP, I.KEEP, I.REPLACE), r12.setStencilWriteMask(255), r12.setStencilFunction(O.ALWAYS, 0, 255);
  }
  draw(r12, e14) {
    const { context: t11, state: o7, requestRender: i5, allowDelayedRender: p6 } = r12, c4 = m(), d6 = e14.getVAO(t11, o7, c4.attributes, c4.bufferLayouts);
    null != d6.indexBuffer && (this._program || (this._program = e8(t11, e12)), !p6 || null == i5 || this._program.compiled ? (t11.useProgram(this._program), this._program.setUniform2fv("u_coord_range", [1, 1]), this._program.setUniform4fv("u_color", this._color), this._program.setUniformMatrix3fv("u_dvsMat3", o7.displayMat3), t11.bindVAO(d6), t11.drawElements(E.TRIANGLES, d6.indexBuffer.size, C.UNSIGNED_INT, 0), t11.bindVAO()) : i5());
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushStencil.js
var _3 = class extends t9 {
  constructor() {
    super(...arguments), this._color = r5(1, 0, 0, 1), this._initialized = false;
  }
  dispose() {
    this._solidProgram && (this._solidProgram.dispose(), this._solidProgram = null), this._solidVertexArrayObject && (this._solidVertexArrayObject.dispose(), this._solidVertexArrayObject = null);
  }
  prepareState({ context: e14 }) {
    e14.setDepthWriteEnabled(false), e14.setDepthTestEnabled(false), e14.setStencilTestEnabled(true), e14.setBlendingEnabled(false), e14.setColorMask(false, false, false, false), e14.setStencilOp(I.KEEP, I.KEEP, I.REPLACE), e14.setStencilWriteMask(255);
  }
  draw(e14, r12) {
    const { context: t11, requestRender: i5, allowDelayedRender: s10 } = e14;
    this._initialized || this._initialize(t11), !s10 || null == i5 || this._solidProgram.compiled ? (t11.setStencilFunctionSeparate(N2.FRONT_AND_BACK, O.GREATER, r12.stencilRef, 255), t11.bindVAO(this._solidVertexArrayObject), t11.useProgram(this._solidProgram), this._solidProgram.setUniformMatrix3fv("u_dvsMat3", r12.transforms.displayViewScreenMat3), this._solidProgram.setUniform2fv("u_coord_range", [r12.rangeX, r12.rangeY]), this._solidProgram.setUniform1f("u_depth", 0), this._solidProgram.setUniform4fv("u_color", this._color), t11.drawArrays(E.TRIANGLE_STRIP, 0, 4), t11.bindVAO()) : i5();
  }
  _initialize(e14) {
    if (this._initialized) return true;
    const t11 = e8(e14, e12);
    if (!t11) return false;
    const o7 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), a8 = E2.createVertex(e14, F.STATIC_DRAW, o7), l5 = new o3(e14, e12.attributes, r6, /* @__PURE__ */ new Map([["geometry", a8]]));
    return this._solidProgram = t11, this._solidVertexArrayObject = l5, this._initialized = true, true;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushTileDebugInfo.js
var _4 = 512;
var x = 512;
var b2 = 16;
var p4 = 8;
var T2 = (x - 2 * p4) / 5;
var y3 = class extends t9 {
  constructor() {
    super(...arguments), this._color = r5(1, 0, 0, 1);
  }
  dispose() {
    var _a, _b, _c, _d;
    (_a = this._outlineProgram) == null ? void 0 : _a.dispose(), this._outlineProgram = null, (_b = this._tileInfoProgram) == null ? void 0 : _b.dispose(), this._tileInfoProgram = null, (_c = this._outlineVertexArrayObject) == null ? void 0 : _c.dispose(), this._outlineVertexArrayObject = null, (_d = this._tileInfoVertexArrayObject) == null ? void 0 : _d.dispose(), this._tileInfoVertexArrayObject = null, this._ctx = null;
  }
  prepareState({ context: e14 }) {
    e14.setBlendingEnabled(true), e14.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e14.setColorMask(true, true, true, true), e14.setStencilWriteMask(0), e14.setStencilTestEnabled(false);
  }
  draw(e14, t11) {
    const { context: o7, requestRender: i5, allowDelayedRender: s10 } = e14;
    if (!t11.isReady && t11 instanceof b && t11.hasData) return;
    if (this._loadWGLResources(o7), s10 && null != i5 && (!this._outlineProgram.compiled || !this._tileInfoProgram.compiled)) return void i5();
    o7.bindVAO(this._outlineVertexArrayObject), o7.useProgram(this._outlineProgram), this._outlineProgram.setUniformMatrix3fv("u_dvsMat3", t11.transforms.displayViewScreenMat3), this._outlineProgram.setUniform2f("u_coord_range", t11.rangeX, t11.rangeY), this._outlineProgram.setUniform1f("u_depth", 0), this._outlineProgram.setUniform4fv("u_color", this._color), o7.drawArrays(E.LINE_STRIP, 0, 4);
    const n19 = this._getTexture(o7, t11);
    n19 ? (o7.bindVAO(this._tileInfoVertexArrayObject), o7.useProgram(this._tileInfoProgram), o7.bindTexture(n19, 0), this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3", t11.transforms.displayViewScreenMat3), this._tileInfoProgram.setUniform1f("u_depth", 0), this._tileInfoProgram.setUniform2f("u_coord_ratio", t11.rangeX / t11.width, t11.rangeY / t11.height), this._tileInfoProgram.setUniform2f("u_delta", 0, 0), this._tileInfoProgram.setUniform2f("u_dimensions", n19.descriptor.width, n19.descriptor.height), o7.drawArrays(E.TRIANGLE_STRIP, 0, 4), o7.bindVAO()) : o7.bindVAO();
  }
  _loadWGLResources(e14) {
    if (this._outlineProgram && this._tileInfoProgram) return;
    const r12 = e8(e14, e12), o7 = e8(e14, r9), a8 = new Int8Array([0, 0, 1, 0, 1, 1, 0, 1]), l5 = E2.createVertex(e14, F.STATIC_DRAW, a8), m3 = new o3(e14, e12.attributes, r6, /* @__PURE__ */ new Map([["geometry", l5]])), u6 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), d6 = E2.createVertex(e14, F.STATIC_DRAW, u6), h3 = new o3(e14, r9.attributes, r6, /* @__PURE__ */ new Map([["geometry", d6]]));
    this._outlineProgram = r12, this._tileInfoProgram = o7, this._outlineVertexArrayObject = m3, this._tileInfoVertexArrayObject = h3;
  }
  _getTexture(e14, t11) {
    if (!this._ctx) {
      const e15 = document.createElement("canvas");
      e15.width = _4, e15.height = x, this._ctx = e15.getContext("2d");
    }
    if (!t11.tileDebugInfoTexture) {
      const r13 = new p();
      r13.wrapMode = D.CLAMP_TO_EDGE, r13.samplingMode = L.LINEAR, r13.isImmutable = true, r13.width = _4, r13.height = x, t11.tileDebugInfoTexture = new w(e14, r13);
    }
    const r12 = this._ctx;
    r12.clearRect(0, 0, r12.canvas.width, r12.canvas.height), r12.textAlign = "left", r12.textBaseline = "top", r12.font = b2 - 2 + "px sans-serif", r12.lineWidth = 2, r12.fillStyle = "white", r12.strokeStyle = "black";
    const { debugSlot: o7 } = t11;
    let i5 = p4 + T2 * o7;
    const s10 = `${o7}) ${t11.key.id} (${t11.constructor.name})`;
    r12.strokeText(s10, p4, i5), r12.fillText(s10, p4, i5), i5 += b2;
    const { debugInfo: n19 } = t11;
    if (n19) {
      const { length: e15, minOrderedLength: t12, minUnorderedLength: o8, triangleCount: s11 } = n19.display;
      if (e15 > 0) {
        const t13 = `Length: ${e15}`;
        r12.strokeText(t13, p4, i5), r12.fillText(t13, p4, i5), i5 += b2;
      }
      if (t12) {
        const e16 = `Min ordered length: ${t12}`;
        r12.strokeText(e16, p4, i5), r12.fillText(e16, p4, i5), i5 += b2;
      }
      if (o8) {
        const e16 = `Min unordered length: ${o8}`;
        r12.strokeText(e16, p4, i5), r12.fillText(e16, p4, i5), i5 += b2;
      }
      if (s11 > 0) {
        s11 > 1e5 && (r12.fillStyle = "red", r12.strokeStyle = "white");
        const e16 = `Triangle count: ${s11}`;
        r12.strokeText(e16, p4, i5), r12.fillText(e16, p4, i5), i5 += b2;
      }
      const { bytesUsed: a8, bytesReserved: l5 } = n19.memory;
      if (r12.fillStyle = "white", r12.strokeStyle = "black", a8 > 0 || l5 > 0) {
        const e16 = `Memory usage: ${a8} of ${l5} bytes`;
        r12.strokeText(e16, p4, i5), r12.fillText(e16, p4, i5), i5 += b2;
      }
    }
    return t11.tileDebugInfoTexture.setData(r12.canvas), t11.tileDebugInfoTexture;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLBackground.js
var u4 = class extends t9 {
  constructor() {
    super(...arguments), this._color = r5(1, 0, 0, 1), this._patternMatrix = e6(), this._programOptions = { id: false, pattern: false };
  }
  dispose() {
    this._vao && (this._vao.dispose(), this._vao = null);
  }
  drawMany(e14, r12) {
    const { context: s10, painter: a8, requestRender: f6, allowDelayedRender: m3 } = e14;
    this._loadWGLResources(e14);
    const u6 = e14.displayLevel, p6 = e14.styleLayer, _5 = p6.backgroundMaterial, d6 = a8.vectorTilesMaterialManager, g4 = p6.getPaintValue("background-color", u6), h3 = p6.getPaintValue("background-opacity", u6), x2 = p6.getPaintValue("background-pattern", u6), M = void 0 !== x2, b3 = 1 | window.devicePixelRatio, v = e14.spriteMosaic;
    let y5, w3;
    const j = b3 > _ ? 2 : 1, A = this._programOptions;
    A.pattern = M;
    const L2 = d6.getMaterialProgram(s10, _5, A);
    if (!m3 || null == f6 || L2.compiled) {
      if (s10.bindVAO(this._vao), s10.useProgram(L2), M) {
        const t11 = v.getMosaicItemPosition(x2, true);
        if (null != t11) {
          const { tl: e15, br: r13, page: i5 } = t11;
          y5 = r13[0] - e15[0], w3 = r13[1] - e15[1];
          const a9 = v.getPageSize(i5);
          null != a9 && (v.bind(s10, L.LINEAR, i5, Z), L2.setUniform4f("u_tlbr", e15[0], e15[1], r13[0], r13[1]), L2.setUniform2fv("u_mosaicSize", a9), L2.setUniform1i("u_texture", Z));
        }
        L2.setUniform1f("u_opacity", h3);
      } else {
        const t11 = g4[3] * h3;
        this._color[0] = t11 * g4[0], this._color[1] = t11 * g4[1], this._color[2] = t11 * g4[2], this._color[3] = t11, L2.setUniform4fv("u_color", this._color);
      }
      L2.setUniform1f("u_depth", p6.z || 0);
      for (const e15 of r12) {
        if (L2.setUniform1f("u_coord_range", e15.rangeX), L2.setUniformMatrix3fv("u_dvsMat3", e15.transforms.displayViewScreenMat3), M) {
          const r13 = Math.max(2 ** (Math.round(u6) - e15.key.level), 1), o7 = j * e15.width * r13, i5 = o7 / i(y5), s11 = o7 / i(w3);
          this._patternMatrix[0] = i5, this._patternMatrix[4] = s11, L2.setUniformMatrix3fv("u_pattern_matrix", this._patternMatrix);
        }
        s10.setStencilFunction(O.EQUAL, 0, 255), s10.drawArrays(E.TRIANGLE_STRIP, 0, 4);
      }
    } else f6();
  }
  _loadWGLResources(t11) {
    if (this._vao) return;
    const { context: e14, styleLayer: r12 } = t11, o7 = r12.backgroundMaterial, i5 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), s10 = E2.createVertex(e14, F.STATIC_DRAW, i5), n19 = new o3(e14, o7.getAttributeLocations(), o7.getLayoutInfo(), /* @__PURE__ */ new Map([["geometry", s10]]));
    this._vao = n19;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLCircle.js
var n16 = class extends t9 {
  constructor() {
    super(...arguments), this._programOptions = { id: false };
  }
  dispose() {
  }
  drawMany(t11, n19) {
    const { context: l5, displayLevel: s10, requiredLevel: o7, state: c4, painter: u6, spriteMosaic: d6, styleLayerUID: f6, requestRender: m3, allowDelayedRender: p6 } = t11;
    if (!n19.some((e14) => {
      var _a;
      return ((_a = e14.layerData.get(f6)) == null ? void 0 : _a.circleIndexCount) ?? false;
    })) return;
    const y5 = t11.styleLayer, g4 = y5.circleMaterial, M = u6.vectorTilesMaterialManager, v = 1.2, E4 = y5.getPaintValue("circle-translate", s10), x2 = y5.getPaintValue("circle-translate-anchor", s10), I2 = this._programOptions, U = M.getMaterialProgram(l5, g4, I2);
    if (p6 && null != m3 && !U.compiled) return void m3();
    l5.useProgram(U), U.setUniformMatrix3fv("u_displayMat3", x2 === r2.VIEWPORT ? c4.displayMat3 : c4.displayViewMat3), U.setUniform2fv("u_circleTranslation", E4), U.setUniform1f("u_depth", y5.z), U.setUniform1f("u_antialiasingWidth", v);
    let _5 = -1;
    for (const e14 of n19) {
      if (!e14.layerData.has(f6)) continue;
      e14.key.level !== _5 && (_5 = e14.key.level, g4.setDataUniforms(U, s10, y5, _5, d6));
      const t12 = e14.layerData.get(f6);
      if (!t12.circleIndexCount) continue;
      t12.prepareForRendering(l5);
      const n20 = t12.vao;
      null != n20 && (l5.bindVAO(n20), U.setUniformMatrix3fv("u_dvsMat3", e14.transforms.displayViewScreenMat3), o7 !== e14.key.level ? l5.setStencilFunction(O.EQUAL, e14.stencilRef, 255) : l5.setStencilFunction(O.GREATER, 255, 255), l5.drawElements(E.TRIANGLES, t12.circleIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * t12.circleIndexStart), e14.triangleCount += t12.circleIndexCount / 3);
    }
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLFill.js
var s8 = 1 / 65536;
var f5 = class extends t9 {
  constructor() {
    super(...arguments), this._fillProgramOptions = { id: false, pattern: false }, this._outlineProgramOptions = { id: false };
  }
  dispose() {
  }
  drawMany(t11, e14) {
    const { displayLevel: i5, renderPass: n19, spriteMosaic: a8, styleLayerUID: l5 } = t11;
    let r12 = false;
    for (const _5 of e14) if (_5.layerData.has(l5)) {
      const t12 = _5.layerData.get(l5);
      if (t12.fillIndexCount > 0 || t12.outlineIndexCount > 0) {
        r12 = true;
        break;
      }
    }
    if (!r12) return;
    const o7 = t11.styleLayer, s10 = o7.getPaintProperty("fill-pattern"), f6 = void 0 !== s10, u6 = f6 && s10.isDataDriven;
    let c4;
    if (f6 && !u6) {
      const t12 = s10.getValue(i5);
      c4 = a8.getMosaicItemPosition(t12, true);
    }
    const d6 = !f6 && o7.getPaintValue("fill-antialias", i5);
    let p6 = true, m3 = 1;
    if (!f6) {
      const t12 = o7.getPaintProperty("fill-color"), e15 = o7.getPaintProperty("fill-opacity");
      if (!(t12 == null ? void 0 : t12.isDataDriven) && !(e15 == null ? void 0 : e15.isDataDriven)) {
        const t13 = o7.getPaintValue("fill-color", i5);
        m3 = o7.getPaintValue("fill-opacity", i5) * t13[3], m3 >= 1 && (p6 = false);
      }
    }
    if (p6 && "opaque" === n19) return;
    const y5 = o7.getPaintValue("fill-translate", i5), g4 = o7.getPaintValue("fill-translate-anchor", i5);
    (p6 || "translucent" !== n19) && this._drawFill(t11, l5, o7, e14, y5, g4, f6, c4, u6);
    const M = !o7.hasDataDrivenOutlineColor && o7.outlineUsesFillColor && m3 < 1;
    d6 && "opaque" !== n19 && !M && this._drawOutline(t11, l5, o7, e14, y5, g4);
  }
  _drawFill(n19, f6, u6, c4, d6, p6, m3, y5, g4) {
    if (m3 && !g4 && null == y5) return;
    const { context: M, displayLevel: _5, state: E4, painter: v, pixelRatio: P, spriteMosaic: U, requestRender: I2, allowDelayedRender: x2 } = n19, D2 = u6.fillMaterial, R2 = v.vectorTilesMaterialManager, S2 = P > _ ? 2 : 1, T3 = this._fillProgramOptions;
    T3.pattern = m3;
    const h3 = R2.getMaterialProgram(M, D2, T3);
    if (x2 && null != I2 && !h3.compiled) return void I2();
    if (M.useProgram(h3), null != y5) {
      const { page: t11 } = y5, i5 = U.getPageSize(t11);
      null != i5 && (U.bind(M, L.LINEAR, t11, Z), h3.setUniform2fv("u_mosaicSize", i5), h3.setUniform1i("u_texture", Z));
    }
    h3.setUniformMatrix3fv("u_displayMat3", p6 === r2.VIEWPORT ? E4.displayMat3 : E4.displayViewMat3), h3.setUniform2fv("u_fillTranslation", d6), h3.setUniform1f("u_depth", u6.z + s8);
    let w3 = -1;
    for (const t11 of c4) {
      if (!t11.layerData.has(f6)) continue;
      t11.key.level !== w3 && (w3 = t11.key.level, D2.setDataUniforms(h3, _5, u6, w3, U));
      const i5 = t11.layerData.get(f6);
      if (!i5.fillIndexCount) continue;
      i5.prepareForRendering(M);
      const n20 = i5.fillVAO;
      if (null != n20) {
        if (M.bindVAO(n20), h3.setUniformMatrix3fv("u_dvsMat3", t11.transforms.displayViewScreenMat3), M.setStencilFunction(O.EQUAL, t11.stencilRef, 255), m3) {
          const e14 = Math.max(2 ** (Math.round(_5) - t11.key.level), 1), i6 = t11.rangeX / (S2 * t11.width * e14);
          h3.setUniform1f("u_patternFactor", i6);
        }
        if (g4) {
          const t12 = i5.patternMap;
          if (!t12) continue;
          for (const [i6, n21] of t12) {
            const t13 = U.getPageSize(i6);
            null != t13 && (U.bind(M, L.LINEAR, i6, Z), h3.setUniform2fv("u_mosaicSize", t13), h3.setUniform1i("u_texture", Z), M.drawElements(E.TRIANGLES, n21[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * n21[0]));
          }
        } else M.drawElements(E.TRIANGLES, i5.fillIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * i5.fillIndexStart);
        t11.triangleCount += i5.fillIndexCount / 3;
      }
    }
  }
  _drawOutline(e14, i5, n19, a8, f6, u6) {
    const { context: c4, displayLevel: d6, state: p6, painter: m3, pixelRatio: y5, spriteMosaic: g4, requestRender: M, allowDelayedRender: _5 } = e14, E4 = n19.outlineMaterial, v = m3.vectorTilesMaterialManager, P = 0.75 / y5, U = this._outlineProgramOptions, I2 = v.getMaterialProgram(c4, E4, U);
    if (_5 && null != M && !I2.compiled) return void M();
    c4.useProgram(I2), I2.setUniformMatrix3fv("u_displayMat3", u6 === r2.VIEWPORT ? p6.displayMat3 : p6.displayViewMat3), I2.setUniform2fv("u_fillTranslation", f6), I2.setUniform1f("u_depth", n19.z + s8), I2.setUniform1f("u_outline_width", P);
    let x2 = -1;
    for (const t11 of a8) {
      if (!t11.layerData.has(i5)) continue;
      t11.key.level !== x2 && (x2 = t11.key.level, E4.setDataUniforms(I2, d6, n19, x2, g4));
      const e15 = t11.layerData.get(i5);
      if (e15.prepareForRendering(c4), !e15.outlineIndexCount) continue;
      const a9 = e15.outlineVAO;
      null != a9 && (c4.bindVAO(a9), I2.setUniformMatrix3fv("u_dvsMat3", t11.transforms.displayViewScreenMat3), c4.setStencilFunction(O.EQUAL, t11.stencilRef, 255), c4.drawElements(E.TRIANGLES, e15.outlineIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * e15.outlineIndexStart), t11.triangleCount += e15.outlineIndexCount / 3);
    }
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLLine.js
var s9 = class extends t9 {
  constructor() {
    super(...arguments), this._programOptions = { id: false, pattern: false, sdf: false };
  }
  dispose() {
  }
  drawMany(i5, s10) {
    const { context: l5, displayLevel: f6, state: u6, painter: c4, pixelRatio: d6, spriteMosaic: m3, styleLayerUID: p6, requestRender: g4, allowDelayedRender: y5 } = i5;
    if (!s10.some((e14) => {
      var _a;
      return ((_a = e14.layerData.get(p6)) == null ? void 0 : _a.lineIndexCount) ?? false;
    })) return;
    const M = i5.styleLayer, E4 = M.lineMaterial, _5 = c4.vectorTilesMaterialManager, v = M.getPaintValue("line-translate", f6), U = M.getPaintValue("line-translate-anchor", f6), I2 = M.getPaintProperty("line-pattern"), P = void 0 !== I2, x2 = P && I2.isDataDriven;
    let D2, S2;
    if (P && !x2) {
      const e14 = I2.getValue(f6);
      D2 = m3.getMosaicItemPosition(e14);
    }
    let L2 = false;
    if (!P) {
      const e14 = M.getPaintProperty("line-dasharray");
      if (S2 = void 0 !== e14, L2 = S2 && e14.isDataDriven, S2 && !L2) {
        const t11 = e14.getValue(f6), i6 = M.getDashKey(t11, M.getLayoutValue("line-cap", f6));
        D2 = m3.getMosaicItemPosition(i6);
      }
    }
    const N5 = 1 / d6, R2 = this._programOptions;
    R2.pattern = P, R2.sdf = S2;
    const T3 = _5.getMaterialProgram(l5, E4, R2);
    if (y5 && null != g4 && !T3.compiled) return void g4();
    if (l5.useProgram(T3), T3.setUniformMatrix3fv("u_displayViewMat3", u6.displayViewMat3), T3.setUniformMatrix3fv("u_displayMat3", U === r2.VIEWPORT ? u6.displayMat3 : u6.displayViewMat3), T3.setUniform2fv("u_lineTranslation", v), T3.setUniform1f("u_depth", M.z), T3.setUniform1f("u_antialiasing", N5), D2 && null != D2) {
      const { page: e14 } = D2, i6 = m3.getPageSize(e14);
      null != i6 && (m3.bind(l5, L.LINEAR, e14, Z), T3.setUniform2fv("u_mosaicSize", i6), T3.setUniform1i("u_texture", Z));
    }
    let V = -1;
    for (const e14 of s10) {
      if (!e14.layerData.has(p6)) continue;
      e14.key.level !== V && (V = e14.key.level, E4.setDataUniforms(T3, f6, M, V, m3));
      const i6 = 2 ** (f6 - V) / d6;
      T3.setUniform1f("u_zoomFactor", i6);
      const s11 = e14.layerData.get(p6);
      if (!s11.lineIndexCount) continue;
      s11.prepareForRendering(l5);
      const u7 = s11.vao;
      if (null != u7) {
        if (l5.bindVAO(u7), T3.setUniformMatrix3fv("u_dvsMat3", e14.transforms.displayViewScreenMat3), l5.setStencilFunction(O.EQUAL, e14.stencilRef, 255), x2 || L2) {
          const e15 = s11.patternMap;
          if (!e15) continue;
          for (const [i7, a8] of e15) {
            const e16 = m3.getPageSize(i7);
            null != e16 && (m3.bind(l5, L.LINEAR, i7, Z), T3.setUniform2fv("u_mosaicSize", e16), T3.setUniform1i("u_texture", Z), l5.drawElements(E.TRIANGLES, a8[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * a8[0]));
          }
        } else l5.drawElements(E.TRIANGLES, s11.lineIndexCount, C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * s11.lineIndexStart);
        e14.triangleCount += s11.lineIndexCount / 3;
      }
    }
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js
var n17 = 128 / Math.PI;
var t10 = 256 / 360;
var r11 = 1 / Math.LN2;
function u5(n19, t11) {
  return (n19 %= t11) >= 0 ? n19 : n19 + t11;
}
function c2(n19) {
  return u5(n19 * t10, 256);
}
function e13(n19) {
  return Math.log(n19) * r11;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLSymbol.js
var g2 = 1 / 65536;
var d5 = class extends t9 {
  constructor() {
    super(...arguments), this._iconProgramOptions = { id: false, sdf: false }, this._sdfProgramOptions = { id: false }, this._spritesTextureSize = n4();
  }
  dispose() {
  }
  drawMany(e14, t11) {
    const i5 = e14.styleLayer;
    this._drawIcons(e14, i5, t11), this._drawText(e14, i5, t11);
  }
  _drawIcons(e14, t11, o7) {
    const { context: f6, displayLevel: c4, painter: u6, spriteMosaic: p6, state: m3, styleLayerUID: g4, requestRender: d6, allowDelayedRender: y5 } = e14, _5 = t11.iconMaterial, M = u6.vectorTilesMaterialManager;
    let h3, P = false;
    for (const i5 of o7) if (i5.layerData.has(g4) && (h3 = i5.layerData.get(g4), h3.iconPerPageElementsMap.size > 0)) {
      P = true;
      break;
    }
    if (!P) return;
    const U = t11.getPaintValue("icon-translate", c4), E4 = t11.getPaintValue("icon-translate-anchor", c4);
    let T3 = t11.getLayoutValue("icon-rotation-alignment", c4);
    T3 === l.AUTO && (T3 = t11.getLayoutValue("symbol-placement", c4) === n5.POINT ? l.VIEWPORT : l.MAP);
    const x2 = T3 === l.MAP, S2 = t11.getLayoutValue("icon-keep-upright", c4) && x2, v = h3.isIconSDF, D2 = this._iconProgramOptions;
    D2.sdf = v;
    const V = M.getMaterialProgram(f6, _5, D2);
    if (y5 && null != d6 && !V.compiled) return void d6();
    f6.useProgram(V), V.setUniformMatrix3fv("u_displayViewMat3", T3 === l.MAP ? m3.displayViewMat3 : m3.displayMat3), V.setUniformMatrix3fv("u_displayMat3", E4 === r2.VIEWPORT ? m3.displayMat3 : m3.displayViewMat3), V.setUniform2fv("u_iconTranslation", U), V.setUniform1f("u_depth", t11.z), V.setUniform1f("u_mapRotation", c2(m3.rotation)), V.setUniform1f("u_keepUpright", S2 ? 1 : 0), V.setUniform1f("u_level", 10 * c4), V.setUniform1i("u_texture", Z), V.setUniform1f("u_fadeDuration", e5 / 1e3);
    let R2 = -1;
    for (const i5 of o7) {
      if (!i5.layerData.has(g4)) continue;
      if (i5.key.level !== R2 && (R2 = i5.key.level, _5.setDataUniforms(V, c4, t11, R2, p6)), h3 = i5.layerData.get(g4), 0 === h3.iconPerPageElementsMap.size) continue;
      h3.prepareForRendering(f6), h3.updateOpacityInfo();
      const a8 = h3.iconVAO;
      if (null != a8) {
        f6.bindVAO(a8), V.setUniformMatrix3fv("u_dvsMat3", i5.transforms.displayViewScreenMat3), V.setUniform1f("u_time", (performance.now() - h3.lastOpacityUpdate) / 1e3);
        for (const [t12, a9] of h3.iconPerPageElementsMap) this._renderIconRange(e14, V, a9, t12, i5);
      }
    }
  }
  _renderIconRange(e14, t11, i5, a8, r12) {
    const { context: n19, spriteMosaic: o7 } = e14;
    this._spritesTextureSize[0] = o7.getWidth(a8) / 4, this._spritesTextureSize[1] = o7.getHeight(a8) / 4, t11.setUniform2fv("u_mosaicSize", this._spritesTextureSize), o7.bind(n19, L.LINEAR, a8, Z), this._setStencilState(e14, r12), n19.drawElements(E.TRIANGLES, i5[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * i5[0]), r12.triangleCount += i5[1] / 3;
  }
  _drawText(e14, s10, f6) {
    const { context: c4, displayLevel: u6, glyphMosaic: p6, painter: m3, pixelRatio: d6, spriteMosaic: y5, state: _5, styleLayerUID: M, requestRender: h3, allowDelayedRender: P } = e14, U = s10.textMaterial, E4 = m3.vectorTilesMaterialManager;
    let T3, x2 = false;
    for (const t11 of f6) if (t11.layerData.has(M) && (T3 = t11.layerData.get(M), T3.glyphPerPageElementsMap.size > 0)) {
      x2 = true;
      break;
    }
    if (!x2) return;
    const S2 = s10.getPaintProperty("text-opacity");
    if (S2 && !S2.isDataDriven && 0 === S2.getValue(u6)) return;
    const v = s10.getPaintProperty("text-color"), D2 = !v || v.isDataDriven || v.getValue(u6)[3] > 0, V = s10.getPaintProperty("text-halo-width"), R2 = s10.getPaintProperty("text-halo-color"), I2 = (!V || V.isDataDriven || V.getValue(u6) > 0) && (!R2 || R2.isDataDriven || R2.getValue(u6)[3] > 0);
    if (!D2 && !I2) return;
    const A = 24 / 8;
    let w3 = s10.getLayoutValue("text-rotation-alignment", u6);
    w3 === l.AUTO && (w3 = s10.getLayoutValue("symbol-placement", u6) === n5.POINT ? l.VIEWPORT : l.MAP);
    const L2 = w3 === l.MAP, O2 = s10.getLayoutValue("text-keep-upright", u6) && L2, N5 = 0.8 * A / d6;
    this._glyphTextureSize || (this._glyphTextureSize = t(p6.width / 4, p6.height / 4));
    const z = s10.getPaintValue("text-translate", u6), b3 = s10.getPaintValue("text-translate-anchor", u6), k = this._sdfProgramOptions, G = E4.getMaterialProgram(c4, U, k);
    if (P && null != h3 && !G.compiled) return void h3();
    c4.useProgram(G), G.setUniformMatrix3fv("u_displayViewMat3", w3 === l.MAP ? _5.displayViewMat3 : _5.displayMat3), G.setUniformMatrix3fv("u_displayMat3", b3 === r2.VIEWPORT ? _5.displayMat3 : _5.displayViewMat3), G.setUniform2fv("u_textTranslation", z), G.setUniform1f("u_depth", s10.z + g2), G.setUniform2fv("u_mosaicSize", this._glyphTextureSize), G.setUniform1f("u_mapRotation", c2(_5.rotation)), G.setUniform1f("u_keepUpright", O2 ? 1 : 0), G.setUniform1f("u_level", 10 * u6), G.setUniform1i("u_texture", $), G.setUniform1f("u_antialiasingWidth", N5), G.setUniform1f("u_fadeDuration", e5 / 1e3);
    let W2 = -1;
    for (const t11 of f6) {
      if (!t11.layerData.has(M)) continue;
      if (t11.key.level !== W2 && (W2 = t11.key.level, U.setDataUniforms(G, u6, s10, W2, y5)), T3 = t11.layerData.get(M), 0 === T3.glyphPerPageElementsMap.size) continue;
      T3.prepareForRendering(c4), T3.updateOpacityInfo();
      const i5 = T3.textVAO;
      if (null == i5) continue;
      c4.bindVAO(i5), G.setUniformMatrix3fv("u_dvsMat3", t11.transforms.displayViewScreenMat3), this._setStencilState(e14, t11);
      const a8 = (performance.now() - T3.lastOpacityUpdate) / 1e3;
      G.setUniform1f("u_time", a8), T3.glyphPerPageElementsMap.forEach((e15, i6) => {
        this._renderGlyphRange(c4, e15, i6, p6, G, I2, D2, t11);
      });
    }
  }
  _renderGlyphRange(e14, t11, i5, a8, r12, n19, s10, l5) {
    a8.bind(e14, L.LINEAR, i5, $), n19 && (r12.setUniform1f("u_halo", 1), e14.drawElements(E.TRIANGLES, t11[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * t11[0]), l5.triangleCount += t11[1] / 3), s10 && (r12.setUniform1f("u_halo", 0), e14.drawElements(E.TRIANGLES, t11[1], C.UNSIGNED_INT, Uint32Array.BYTES_PER_ELEMENT * t11[0]), l5.triangleCount += t11[1] / 3);
  }
  _setStencilState(e14, t11) {
    const { context: i5, is3D: a8, stencilSymbols: r12 } = e14;
    if (i5.setStencilTestEnabled(true), r12) return i5.setStencilWriteMask(255), void i5.setStencilFunction(O.ALWAYS, t11.stencilRef, 255);
    i5.setStencilWriteMask(0), a8 ? i5.setStencilFunction(O.EQUAL, t11.stencilRef, 255) : i5.setStencilFunction(O.GREATER, 255, 255);
  }
};

// node_modules/@arcgis/core/views/2d/engine/brushes.js
var m2 = { clip: p3, stencil: _3, tileDebugInfo: y3, vtlBackground: u4, vtlFill: f5, vtlLine: s9, vtlCircle: n16, vtlSymbol: d5 };

// node_modules/@arcgis/core/views/2d/engine/webgl/Mesh2D.js
var l4 = (r12) => {
  switch (r12.BYTES_PER_ELEMENT) {
    case 1:
      return C.UNSIGNED_BYTE;
    case 2:
      return C.UNSIGNED_SHORT;
    case 4:
      return C.UNSIGNED_INT;
    default:
      throw new s("Cannot get DataType of array");
  }
};
var y4 = (e14, r12, t11, n19) => {
  let o7 = 0;
  for (let s10 = 1; s10 < t11; s10++) {
    const t12 = e14[2 * (r12 + s10 - 1)], n20 = e14[2 * (r12 + s10 - 1) + 1];
    o7 += (e14[2 * (r12 + s10)] - t12) * (e14[2 * (r12 + s10) + 1] + n20);
  }
  return n19 ? o7 > 0 : o7 < 0;
};
var g3 = ({ coords: e14, lengths: r12 }, n19) => {
  const o7 = [];
  for (let s10 = 0, i5 = 0; s10 < r12.length; i5 += r12[s10], s10 += 1) {
    const c4 = i5, a8 = [];
    for (; s10 < r12.length - 1 && y4(e14, i5 + r12[s10], r12[s10 + 1], n19); s10 += 1, i5 += r12[s10]) a8.push(i5 + r12[s10] - c4);
    const f6 = e14.slice(2 * c4, 2 * (i5 + r12[s10])), m3 = e2(f6, a8, 2);
    for (const e15 of m3) o7.push(e15 + c4);
  }
  return o7;
};
var p5 = class _p {
  constructor(e14, r12, t11, n19 = false) {
    this._cache = {}, this.vertices = e14, this.indices = r12, this.primitiveType = t11, this.isMapSpace = n19;
  }
  static fromPath(e14) {
    const r12 = X(new e(), e14.path, false, false), t11 = r12.coords, n19 = new Uint32Array(g3(r12, true)), o7 = new Uint32Array(t11.length / 2);
    for (let s10 = 0; s10 < o7.length; s10++) o7[s10] = s4(Math.floor(t11[2 * s10]), Math.floor(t11[2 * s10 + 1]));
    return new _p({ geometry: o7 }, n19, E.TRIANGLES);
  }
  static fromGeometry(t11, n19) {
    var _a;
    const o7 = (_a = n19.geometry) == null ? void 0 : _a.type;
    switch (o7) {
      case "polygon":
        return _p.fromPolygon(t11, n19.geometry);
      case "extent":
        return _p.fromMapExtent(t11, n19.geometry);
      default:
        return n.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new s("mapview-bad-type", `Unable to create a mesh from type ${o7}`, n19)), _p.fromScreenExtent({ xmin: 0, ymin: 0, xmax: 1, ymax: 1 });
    }
  }
  static fromPolygon(e14, r12) {
    const t11 = W(new e(), r12, false, false), s10 = t11.coords, f6 = new Uint32Array(g3(t11, false)), h3 = new Uint32Array(s10.length / 2), u6 = n3(), l5 = n3();
    for (let o7 = 0; o7 < h3.length; o7++) o2(u6, s10[2 * o7], s10[2 * o7 + 1]), e14.toScreen(l5, u6), h3[o7] = s4(Math.floor(l5[0]), Math.floor(l5[1]));
    return new _p({ geometry: h3 }, f6, E.TRIANGLES, true);
  }
  static fromScreenExtent({ xmin: e14, xmax: r12, ymin: t11, ymax: n19 }) {
    const o7 = { geometry: new Uint32Array([s4(e14, t11), s4(r12, t11), s4(e14, n19), s4(e14, n19), s4(r12, t11), s4(r12, n19)]) }, s10 = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new _p(o7, s10, E.TRIANGLES);
  }
  static fromMapExtent(e14, r12) {
    const [t11, n19] = e14.toScreen([0, 0], [r12.xmin, r12.ymin]), [o7, s10] = e14.toScreen([0, 0], [r12.xmax, r12.ymax]), i5 = { geometry: new Uint32Array([s4(t11, n19), s4(o7, n19), s4(t11, s10), s4(t11, s10), s4(o7, n19), s4(o7, s10)]) }, c4 = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new _p(i5, c4, E.TRIANGLES);
  }
  destroy() {
    var _a;
    null != this._cache.indexBuffer && this._cache.indexBuffer.dispose(), (_a = this._cache.vertexBuffers) == null ? void 0 : _a.forEach((e14) => e14 == null ? void 0 : e14.dispose()), this._cache.indexBuffer = this._cache.vertexBuffers = null;
  }
  get elementType() {
    return l4(this.indices);
  }
  getIndexBuffer(e14, r12 = F.STATIC_DRAW) {
    var _a;
    return (_a = this._cache).indexBuffer ?? (_a.indexBuffer = E2.createIndex(e14, r12, this.indices)), this._cache.indexBuffer;
  }
  getVertexBuffers(e14, r12 = F.STATIC_DRAW) {
    var _a;
    return (_a = this._cache).vertexBuffers ?? (_a.vertexBuffers = new Map(Object.keys(this.vertices).reduce((t11, n19) => (t11.push([n19, E2.createVertex(e14, r12, this.vertices[n19])]), t11), new Array()))), this._cache.vertexBuffers;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/ClippingInfo.js
var c3 = class _c extends e9 {
  constructor(e14, t11) {
    super(), this._clip = t11, this._cache = {}, this.stage = e14, this._handle = d(() => t11.version, () => this._invalidate()), this.ready();
  }
  static fromClipArea(e14, t11) {
    return new _c(e14, t11);
  }
  _destroyGL() {
    null != this._cache.mesh && (this._cache.mesh.destroy(), this._cache.mesh = null), null != this._cache.vao && (this._cache.vao.dispose(), this._cache.vao = null);
  }
  destroy() {
    this._destroyGL(), this._handle.remove();
  }
  getVAO(e14, t11, r12, s10) {
    const [i5, a8] = t11.size;
    if ("geometry" !== this._clip.type && this._lastWidth === i5 && this._lastHeight === a8 || (this._lastWidth = i5, this._lastHeight = a8, this._destroyGL()), null == this._cache.vao) {
      const i6 = this._createMesh(t11, this._clip), a9 = i6.getIndexBuffer(e14), o7 = i6.getVertexBuffers(e14);
      this._cache.mesh = i6, this._cache.vao = new o3(e14, r12, s10, o7, a9);
    }
    return this._cache.vao;
  }
  _createTransforms() {
    return { displayViewScreenMat3: e6() };
  }
  _invalidate() {
    this._destroyGL(), this.requestRender();
  }
  _createMesh(r12, s10) {
    switch (s10.type) {
      case "rect":
        return p5.fromScreenExtent(n10(s10, r12.size[0], r12.size[1]));
      case "path":
        return p5.fromPath(s10);
      case "geometry":
        return p5.fromGeometry(r12, s10);
      default:
        return n.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new s("mapview-bad-type", "Unable to create ClippingInfo mesh from clip of type: ${clip.type}")), p5.fromScreenExtent({ xmin: 0, ymin: 0, xmax: 1, ymax: 1 });
    }
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/WGLContainer.js
var n18 = class extends n9 {
  set clips(s10) {
    super.clips = s10, this._updateClippingInfo(s10);
  }
  renderChildren(s10) {
    s10.painter.setPipelineState(null), null == this._renderPasses && (this._renderPasses = this.prepareRenderPasses(s10.painter));
    for (const r12 of this._renderPasses) try {
      r12.render(s10);
    } catch (e14) {
    }
  }
  prepareRenderPasses(e14) {
    return [e14.registerRenderPass({ name: "clip", brushes: [m2.clip], target: () => this._clippingInfos, drawPhase: E3.MAP | E3.LABEL | E3.LABEL_ALPHA | E3.DEBUG | E3.HIGHLIGHT })];
  }
  _updateClippingInfo(s10) {
    null != this._clippingInfos && (this._clippingInfos.forEach((s11) => s11.destroy()), this._clippingInfos = null), null != s10 && s10.length && (this._clippingInfos = s10.items.map((s11) => c3.fromClipArea(this.stage, s11))), this.requestRender();
  }
};

export {
  t9 as t,
  n12 as n,
  t5 as t2,
  n13 as n2,
  _3 as _,
  r7 as r,
  i4 as i,
  b,
  y3 as y,
  e13 as e,
  m2 as m,
  n18 as n3
};
//# sourceMappingURL=chunk-3SEDCXI3.js.map
