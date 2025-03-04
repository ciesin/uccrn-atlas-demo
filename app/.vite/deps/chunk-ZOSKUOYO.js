import {
  e as e3,
  i
} from "./chunk-ARZQ2ENM.js";
import {
  M,
  c,
  c2,
  f2,
  h,
  i as i2,
  i2 as i4
} from "./chunk-KG25RUMS.js";
import {
  p as p2,
  t as t3,
  u as u3,
  v
} from "./chunk-FBCKMXY6.js";
import {
  m2,
  x
} from "./chunk-2ICSBW5I.js";
import {
  m,
  n2,
  n3 as n4,
  o3 as o8
} from "./chunk-AY7NUQ6K.js";
import {
  e as e4
} from "./chunk-6BJQY5YG.js";
import {
  n as n3,
  o as o5,
  o2 as o6
} from "./chunk-TP7H7H6D.js";
import {
  d,
  o as o4,
  p as p3,
  u as u2
} from "./chunk-M5YS3OM7.js";
import {
  s2 as s3
} from "./chunk-ZARQIHWV.js";
import {
  l
} from "./chunk-TD7VJ4Z2.js";
import {
  d as d3
} from "./chunk-C5H3KDE3.js";
import {
  o as o7
} from "./chunk-YIMQSH52.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  d as d2,
  f
} from "./chunk-TWZMNVWK.js";
import {
  e as e5
} from "./chunk-QXP5ULTQ.js";
import {
  e as e6
} from "./chunk-R2BXFO5E.js";
import {
  s as s4
} from "./chunk-EDOH6SI4.js";
import {
  s as s2
} from "./chunk-XUP22FSP.js";
import {
  i as i3
} from "./chunk-36LA23CO.js";
import {
  a2,
  t as t2
} from "./chunk-KJG6NJ7J.js";
import {
  o2 as o3,
  u
} from "./chunk-BSNHCIEC.js";
import {
  e as e2
} from "./chunk-D7JG6K4Y.js";
import {
  o as o2
} from "./chunk-EJHUCCX3.js";
import {
  n,
  t
} from "./chunk-OULJFYM2.js";
import {
  a
} from "./chunk-NWA7NYLF.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  o
} from "./chunk-K24WU5UX.js";
import {
  s
} from "./chunk-O2L6JAHP.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js
function T(T2, u4) {
  const x2 = T2.fragment;
  u4.hasVertexTangents ? (T2.attributes.add(e.TANGENT, "vec4"), T2.varyings.add("vTangent", "vec4"), u4.doubleSidedMode === i.WindingOrder ? x2.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : x2.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : x2.code.add(n`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`), u4.textureCoordinateType !== d.None && (T2.include(u2, u4), x2.uniforms.add(u4.bindType === a.Pass ? new s2("normalTexture", (e7) => e7.textureNormal) : new o2("normalTexture", (e7) => e7.textureNormal)), u4.hasNormalTextureTransform && (x2.uniforms.add(new e6("scale", (e7) => e7.scale ?? s)), x2.uniforms.add(new o3("normalTextureTransformMatrix", (t5) => t5.normalTextureTransformMatrix ?? o))), x2.code.add(n`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`), u4.hasNormalTextureTransform && x2.code.add(n`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`), x2.code.add(n`return tangentSpace * rawNormal;
}`));
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js
function s5(e7, s6) {
  s6.hasColorTextureTransform ? (e7.varyings.add("colorUV", "vec2"), e7.vertex.uniforms.add(new o3("colorTextureTransformMatrix", (e8) => e8.colorTextureTransformMatrix ?? o)).code.add(n`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : e7.vertex.code.add(n`void forwardColorUV(){}`);
}
function i5(s6, i6) {
  i6.hasNormalTextureTransform && i6.textureCoordinateType !== d.None ? (s6.varyings.add("normalUV", "vec2"), s6.vertex.uniforms.add(new o3("normalTextureTransformMatrix", (e7) => e7.normalTextureTransformMatrix ?? o)).code.add(n`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : s6.vertex.code.add(n`void forwardNormalUV(){}`);
}
function t4(s6, i6) {
  i6.hasEmissionTextureTransform && i6.textureCoordinateType !== d.None ? (s6.varyings.add("emissiveUV", "vec2"), s6.vertex.uniforms.add(new o3("emissiveTextureTransformMatrix", (e7) => e7.emissiveTextureTransformMatrix ?? o)).code.add(n`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : s6.vertex.code.add(n`void forwardEmissiveUV(){}`);
}
function d4(s6, i6) {
  i6.hasOcclusionTextureTransform && i6.textureCoordinateType !== d.None ? (s6.varyings.add("occlusionUV", "vec2"), s6.vertex.uniforms.add(new o3("occlusionTextureTransformMatrix", (e7) => e7.occlusionTextureTransformMatrix ?? o)).code.add(n`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : s6.vertex.code.add(n`void forwardOcclusionUV(){}`);
}
function n5(s6, i6) {
  i6.hasMetallicRoughnessTextureTransform && i6.textureCoordinateType !== d.None ? (s6.varyings.add("metallicRoughnessUV", "vec2"), s6.vertex.uniforms.add(new o3("metallicRoughnessTextureTransformMatrix", (e7) => e7.metallicRoughnessTextureTransformMatrix ?? o)).code.add(n`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : s6.vertex.code.add(n`void forwardMetallicRoughnessUV(){}`);
}

// node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js
function J(J2) {
  const K2 = new i3(), { vertex: Q, fragment: X, varyings: Y } = K2, { output: Z, normalType: ee, offsetBackfaces: re, instancedColor: oe, spherical: ie, receiveShadows: ae, snowCover: le, pbrMode: se, textureAlphaPremultiplied: ne, instancedDoublePrecision: te, hasVertexColors: de, hasVertexTangents: ce, hasColorTexture: me, hasNormalTexture: ge, hasNormalTextureTransform: ve, hasColorTextureTransform: ue } = J2;
  if (f(Q, J2), K2.include(o5), Y.add("vpos", "vec3"), K2.include(l, J2), K2.include(M, J2), K2.include(s3, J2), K2.include(s5, J2), !u(Z)) return K2.include(h, J2), K2;
  K2.include(i5, J2), K2.include(t4, J2), K2.include(d4, J2), K2.include(n5, J2), d2(Q, J2), K2.include(t2, J2), K2.include(o6, J2);
  const be = ee === a2.Attribute || ee === a2.Compressed;
  return be && re && K2.include(c2), K2.include(T, J2), K2.include(c, J2), oe && K2.attributes.add(e.INSTANCECOLOR, "vec4"), Y.add("vPositionLocal", "vec3"), K2.include(o4, J2), K2.include(n3, J2), K2.include(i2, J2), K2.include(e4, J2), Q.uniforms.add(new e5("externalColor", (e7) => e7.externalColor)), Y.add("vcolorExt", "vec4"), K2.include(d3, J2), Q.main.add(n`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${t(oe, "vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${t(be, "vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${t(ce, "vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${t(be && re, "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${n.float(o7)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `), K2.include(v, J2), K2.include(t3, J2), K2.include(f2, J2), K2.include(te ? m2 : x, J2), K2.fragment.include(p, J2), K2.include(p3, J2), d2(X, J2), X.uniforms.add(Q.uniforms.get("localOrigin"), new e2("ambient", (e7) => e7.ambient), new e2("diffuse", (e7) => e7.diffuse), new s4("opacity", (e7) => e7.opacity), new s4("layerOpacity", (e7) => e7.layerOpacity)), me && X.uniforms.add(new s2("tex", (e7) => e7.texture)), K2.include(m, J2), K2.include(n4, J2), X.include(i4), K2.include(e3, J2), u3(X), p2(X), o8(X), X.main.add(n`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${me ? n`
            vec4 texColor = texture(tex, ${ue ? "colorUV" : "vuv0"});
            ${t(ne, "texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);` : n`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${ee === a2.ScreenDerivative ? n`vec3 normal = screenDerivativeNormal(vPositionLocal);` : n`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${ae ? "max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))" : t(ie, "lightingGlobalFactor * (1.0 - additionalAmbientScale)", "0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${t(de, "vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${t(de, "vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${ge ? `mat3 tangentSpace = computeTangentSpace(${ce ? "normal" : "normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ve ? "normalUV" : "vuv0"});` : "vec3 shadingNormal = normal;"}
    vec3 normalGround = ${ie ? "normalize(posWorld);" : "vec3(0.0, 0.0, 1.0);"}

    ${t(le, n`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${se === n2.Normal || se === n2.Schematic ? n`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${t(le, n`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${le ? "mix(getEmissions(), vec4(0.0), snow)" : "getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : n`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `), K2;
}
var K = Object.freeze(Object.defineProperty({ __proto__: null, build: J }, Symbol.toStringTag, { value: "Module" }));

export {
  J,
  K
};
//# sourceMappingURL=chunk-ZOSKUOYO.js.map
