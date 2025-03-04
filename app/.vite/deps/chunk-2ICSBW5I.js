import {
  n2 as n4
} from "./chunk-AY7NUQ6K.js";
import {
  o as o2
} from "./chunk-B2Y4XQVD.js";
import {
  o as o3
} from "./chunk-JZNIMAZ2.js";
import {
  e
} from "./chunk-UYIIVYVP.js";
import {
  o as o4
} from "./chunk-W3SIP2H3.js";
import {
  i
} from "./chunk-4T44Z66D.js";
import {
  n as n3
} from "./chunk-OULJFYM2.js";
import {
  a
} from "./chunk-NWA7NYLF.js";
import {
  o
} from "./chunk-UMYFDXOJ.js";
import {
  n as n2
} from "./chunk-MHM4GDCM.js";
import {
  s
} from "./chunk-363AT5UF.js";
import {
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js
function m(n5, e2) {
  const m3 = n5.fragment, o7 = void 0 !== e2.lightingSphericalHarmonicsOrder ? e2.lightingSphericalHarmonicsOrder : 2;
  0 === o7 ? (m3.uniforms.add(new o2("lightingAmbientSH0", ({ lighting: n6 }) => o(l, n6.sh.r[0], n6.sh.g[0], n6.sh.b[0]))), m3.code.add(n3`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)) : 1 === o7 ? (m3.uniforms.add(new o4("lightingAmbientSH_R", ({ lighting: i2 }) => s(a2, i2.sh.r[0], i2.sh.r[1], i2.sh.r[2], i2.sh.r[3])), new o4("lightingAmbientSH_G", ({ lighting: i2 }) => s(a2, i2.sh.g[0], i2.sh.g[1], i2.sh.g[2], i2.sh.g[3])), new o4("lightingAmbientSH_B", ({ lighting: i2 }) => s(a2, i2.sh.b[0], i2.sh.b[1], i2.sh.b[2], i2.sh.b[3]))), m3.code.add(n3`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)) : 2 === o7 && (m3.uniforms.add(new o2("lightingAmbientSH0", ({ lighting: n6 }) => o(l, n6.sh.r[0], n6.sh.g[0], n6.sh.b[0])), new o4("lightingAmbientSH_R1", ({ lighting: i2 }) => s(a2, i2.sh.r[1], i2.sh.r[2], i2.sh.r[3], i2.sh.r[4])), new o4("lightingAmbientSH_G1", ({ lighting: i2 }) => s(a2, i2.sh.g[1], i2.sh.g[2], i2.sh.g[3], i2.sh.g[4])), new o4("lightingAmbientSH_B1", ({ lighting: i2 }) => s(a2, i2.sh.b[1], i2.sh.b[2], i2.sh.b[3], i2.sh.b[4])), new o4("lightingAmbientSH_R2", ({ lighting: i2 }) => s(a2, i2.sh.r[5], i2.sh.r[6], i2.sh.r[7], i2.sh.r[8])), new o4("lightingAmbientSH_G2", ({ lighting: i2 }) => s(a2, i2.sh.g[5], i2.sh.g[6], i2.sh.g[7], i2.sh.g[8])), new o4("lightingAmbientSH_B2", ({ lighting: i2 }) => s(a2, i2.sh.b[5], i2.sh.b[6], i2.sh.b[7], i2.sh.b[8]))), m3.code.add(n3`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`), e2.pbrMode !== n4.Normal && e2.pbrMode !== n4.Schematic || m3.code.add(n3`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));
}
var l = n();
var a2 = n2();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl.js
function a3(a4) {
  a4.code.add(n3`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js
var t = class extends i {
  constructor(o7, t2, e2) {
    super(o7, "mat4", a.Draw, (r, e3, s2, m3) => r.setUniformMatrix4fv(o7, t2(e3, s2, m3)), e2);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js
var o5 = class extends i {
  constructor(s2, o7, t2) {
    super(s2, "mat4", a.Pass, (r, t3, e2) => r.setUniformMatrix4fv(s2, o7(t3, e2)), t2);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js
function m2(e2, s2) {
  s2.receiveShadows && (e2.fragment.uniforms.add(new o5("shadowMapMatrix", (e3, s3) => s3.shadowMap.getShadowMapMatrices(e3.origin), 4)), f(e2));
}
function x(e2, s2) {
  s2.receiveShadows && (e2.fragment.uniforms.add(new t("shadowMapMatrix", (e3, s3) => s3.shadowMap.getShadowMapMatrices(e3.origin), 4)), f(e2));
}
function f(e2) {
  const s2 = e2.fragment;
  s2.include(a3), s2.uniforms.add(new o3("shadowMap", (e3) => e3.shadowMap.depthTexture), new e("numCascades", (e3) => e3.shadowMap.numCascades), new o4("cascadeDistances", (e3) => e3.shadowMap.cascadeDistances)).code.add(n3`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`);
}

export {
  a3 as a,
  m,
  m2,
  x
};
//# sourceMappingURL=chunk-2ICSBW5I.js.map
