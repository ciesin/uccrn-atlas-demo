import {
  t as t2
} from "./chunk-ZJIETAJ2.js";
import {
  u
} from "./chunk-M5YS3OM7.js";
import {
  o as o3
} from "./chunk-B2Y4XQVD.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  o as o2
} from "./chunk-U5M766SV.js";
import {
  e as e2
} from "./chunk-D7JG6K4Y.js";
import {
  o
} from "./chunk-EJHUCCX3.js";
import {
  n,
  t
} from "./chunk-OULJFYM2.js";
import {
  a
} from "./chunk-NWA7NYLF.js";
import {
  H
} from "./chunk-UMYFDXOJ.js";
import {
  _,
  e
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js
function n2({ normalTexture: u2, metallicRoughnessTexture: n6, metallicFactor: r2, roughnessFactor: t6, emissiveTexture: o7, emissiveFactor: s3, occlusionTexture: c }) {
  return null == u2 && null == n6 && null == o7 && (null == s3 || H(s3, _)) && null == c && (null == t6 || 1 === t6) && (null == r2 || 1 === r2);
}
var t3 = e(1, 1, 0.5);
var o4 = e(0, 0.6, 0.2);
var s2 = e(0, 1, 0.2);

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var n4;
!function(e4) {
  e4[e4.Disabled = 0] = "Disabled", e4[e4.Normal = 1] = "Normal", e4[e4.Schematic = 2] = "Schematic", e4[e4.Water = 3] = "Water", e4[e4.WaterOnIntegratedMesh = 4] = "WaterOnIntegratedMesh", e4[e4.Simplified = 5] = "Simplified", e4[e4.TerrainWithWater = 6] = "TerrainWithWater", e4[e4.COUNT = 7] = "COUNT";
}(n4 || (n4 = {}));
function m(c, l) {
  const d = l.pbrMode, m2 = c.fragment;
  if (d !== n4.Schematic && d !== n4.Disabled && d !== n4.Normal) return void m2.code.add(n`void applyPBRFactors() {}`);
  if (d === n4.Disabled) return void m2.code.add(n`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);
  if (d === n4.Schematic) return void m2.code.add(n`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);
  const { hasMetallicRoughnessTexture: p, hasMetallicRoughnessTextureTransform: f, hasOcclusionTexture: h, hasOcclusionTextureTransform: g, bindType: v } = l;
  (p || h) && c.include(u, l), m2.code.add(n`vec3 mrr;
float occlusion;`), p && m2.uniforms.add(v === a.Pass ? new s("texMetallicRoughness", (e4) => e4.textureMetallicRoughness) : new o("texMetallicRoughness", (e4) => e4.textureMetallicRoughness)), h && m2.uniforms.add(v === a.Pass ? new s("texOcclusion", (e4) => e4.textureOcclusion) : new o("texOcclusion", (e4) => e4.textureOcclusion)), m2.uniforms.add(v === a.Pass ? new e2("mrrFactors", (e4) => e4.mrrFactors) : new o2("mrrFactors", (e4) => e4.mrrFactors)), m2.code.add(n`
    ${t(p, n`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${t(h, "void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${h ? "occlusion" : "1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${t(p, `applyMetallicRoughness(${f ? "metallicRoughnessUV" : "vuv0"});`)}
      ${t(h, `applyOcclusion(${g ? "occlusionUV" : "vuv0"});`)}
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js
function t4(n6) {
  n6.uniforms.add(new o3("mainLightDirection", (i) => i.lighting.mainLight.direction));
}
function o5(n6) {
  n6.uniforms.add(new o3("mainLightIntensity", (i) => i.lighting.mainLight.intensity));
}
function a2(i) {
  t4(i.fragment), o5(i.fragment), i.fragment.code.add(n`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js
function t5(t6) {
  const a3 = t6.fragment.code;
  a3.add(n`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`), a3.add(n`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`), a3.add(n`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js
function n5(n6, r2) {
  const l = n6.fragment.code;
  n6.include(t2), r2.pbrMode !== n4.Normal && r2.pbrMode !== n4.Schematic && r2.pbrMode !== n4.Simplified && r2.pbrMode !== n4.TerrainWithWater || (l.add(n`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`), l.add(n`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)), r2.pbrMode !== n4.Normal && r2.pbrMode !== n4.Schematic || (n6.include(t5), l.add(n`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`), l.add(n`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`), l.add(n`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`), l.add(n`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));
}
function r(e4, o7) {
  const n6 = e4.fragment.code;
  e4.include(t2), n6.add(n`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o7.useCustomDTRExponentForWater ? "2.2" : "2.0"};
  `), n6.add(n`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`), n6.add(n`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`), n6.add(n`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`), n6.add(n`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceConstants.js
var e3 = 3e5;
var o6 = 5e5;

export {
  n2 as n,
  t3 as t,
  o4 as o,
  s2 as s,
  n4 as n2,
  m,
  e3 as e,
  o6 as o2,
  t4 as t2,
  o5 as o3,
  a2 as a,
  n5 as n3,
  r
};
//# sourceMappingURL=chunk-AY7NUQ6K.js.map
