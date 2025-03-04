import {
  o
} from "./chunk-JZNIMAZ2.js";
import {
  d
} from "./chunk-NVSB3M2P.js";
import {
  n,
  t
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js
var o2;
!function(o3) {
  o3[o3.NONE = 0] = "NONE", o3[o3.ColorAlpha = 1] = "ColorAlpha", o3[o3.FrontFace = 2] = "FrontFace", o3[o3.COUNT = 3] = "COUNT";
}(o2 || (o2 = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js
function d2(d3, { occlusionPass: i, terrainDepthTest: a, cullAboveTerrain: s }) {
  const n2 = d3.vertex, p = d3.fragment;
  if (!a) return n2.code.add("void forwardViewPosDepth(vec3 pos) {}"), void p.code.add(`${i ? "bool" : "void"} discardByTerrainDepth() { ${t(i, "return false;")}}`);
  d3.varyings.add("viewPosDepth", "float"), n2.code.add("void forwardViewPosDepth(vec3 pos) {\n    viewPosDepth = pos.z;\n  }"), p.include(d), p.uniforms.add(new o("terrainDepthTexture", (e2) => {
    var _a;
    return (_a = e2.terrainDepth) == null ? void 0 : _a.attachment;
  })).code.add(n`
    ${i ? "bool" : "void"} discardByTerrainDepth() {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${i ? "return viewPosDepth < linearDepth && depth < 1.0;" : `if(viewPosDepth ${s ? ">" : "<="} linearDepth) discard;`}
    }`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js
function e(e2) {
  e2.code.add(n`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);
}

export {
  o2 as o,
  d2 as d,
  e
};
//# sourceMappingURL=chunk-C5H3KDE3.js.map
