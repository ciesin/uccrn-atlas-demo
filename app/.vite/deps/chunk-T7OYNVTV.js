import {
  e as e3,
  o2 as o5,
  o3 as o6,
  r as r7,
  t2 as t4
} from "./chunk-AY7NUQ6K.js";
import {
  e as e4
} from "./chunk-ZPEFCSMC.js";
import {
  o as o3
} from "./chunk-B2Y4XQVD.js";
import {
  o as o4
} from "./chunk-JZNIMAZ2.js";
import {
  e as e2
} from "./chunk-IG22ED74.js";
import {
  d
} from "./chunk-NVSB3M2P.js";
import {
  o as o2
} from "./chunk-F6RMQNRI.js";
import {
  t as t3
} from "./chunk-OZ4EAB4F.js";
import {
  i
} from "./chunk-4T44Z66D.js";
import {
  n as n3
} from "./chunk-OULJFYM2.js";
import {
  a as a2
} from "./chunk-NWA7NYLF.js";
import {
  j as j2,
  v,
  w
} from "./chunk-QUEKTCSS.js";
import {
  e,
  o
} from "./chunk-X5RZJMNW.js";
import {
  A,
  c,
  g,
  j,
  r as r6,
  s
} from "./chunk-UMYFDXOJ.js";
import {
  r as r2
} from "./chunk-HLOKDQU3.js";
import {
  r as r4
} from "./chunk-ZYOZHQFS.js";
import {
  b
} from "./chunk-53ZTROGC.js";
import {
  t as t2
} from "./chunk-BV7O6P7Z.js";
import {
  n as n2,
  r as r5
} from "./chunk-JLFSX3JT.js";
import {
  r as r3
} from "./chunk-6P7HXSJ6.js";
import {
  t
} from "./chunk-HQLPC24M.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/FoamRendering.glsl.js
function o7(o10) {
  o10.fragment.code.add(n3`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`);
}
function n4(o10) {
  o10.fragment.code.add(n3`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl.js
function e5(e7) {
  e7.fragment.code.add(n3`
    const float GAMMA = ${n3.float(t2)};
    const float INV_GAMMA = ${n3.float(1 / t2)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceReflections.glsl.js
function d2(d4, n10) {
  if (!n10.screenSpaceReflections) return;
  const c5 = d4.fragment;
  c5.include(d), c5.uniforms.add(new o2("nearFar", (e7) => e7.camera.nearFar), new o4("depthMap", (e7) => {
    var _a;
    return (_a = e7.depth) == null ? void 0 : _a.attachment;
  }), new t3("proj", (e7) => e7.camera.projectionMatrix), new e2("invResolutionHeight", (e7) => 1 / e7.camera.height), new t3("reprojectionMatrix", (e7) => e7.ssr.reprojectionMatrix)).code.add(n3`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${n10.highStepCount ? "150" : "75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `);
}

// node_modules/@arcgis/core/views/3d/environment/Clouds.js
var n5;
var e6;
function d3(n10) {
  return null != n10 && !n10.running;
}
!function(n10) {
  n10[n10.Idle = 0] = "Idle", n10[n10.Rendering = 1] = "Rendering", n10[n10.Ready = 2] = "Ready", n10[n10.Fading = 3] = "Fading";
}(n5 || (n5 = {})), function(n10) {
  n10[n10.RG = 0] = "RG", n10[n10.BA = 1] = "BA", n10[n10.COUNT = 2] = "COUNT";
}(e6 || (e6 = {}));

// node_modules/@arcgis/core/views/3d/environment/CloudyWeather.js
var c2;
var p = c2 = class extends S {
  constructor(o10) {
    super(o10), this.type = "cloudy", this.cloudCover = 0.5;
  }
  clone() {
    return new c2({ cloudCover: this.cloudCover });
  }
};
r([r4({ cloudy: "cloudy" }), m({ json: { write: { isRequired: true } } })], p.prototype, "type", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], p.prototype, "cloudCover", void 0), p = c2 = r([a("esri.views.3d.environment.CloudyWeather")], p);
var i2 = p;

// node_modules/@arcgis/core/views/3d/environment/FoggyWeather.js
var p2;
var c3 = p2 = class extends S {
  constructor(o10) {
    super(o10), this.type = "foggy", this.fogStrength = 0.5;
  }
  clone() {
    return new p2({ fogStrength: this.fogStrength });
  }
};
r([r4({ foggy: "foggy" }), m({ json: { write: { isRequired: true } } })], c3.prototype, "type", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], c3.prototype, "fogStrength", void 0), c3 = p2 = r([a("esri.views.3d.environment.FoggyWeather")], c3);
var i3 = c3;

// node_modules/@arcgis/core/views/3d/environment/RainyWeather.js
var s2;
var p3 = s2 = class extends S {
  constructor(o10) {
    super(o10), this.type = "rainy", this.cloudCover = 0.5, this.precipitation = 0.5;
  }
  clone() {
    return new s2({ cloudCover: this.cloudCover, precipitation: this.precipitation });
  }
};
r([r4({ rainy: "rainy" }), m({ json: { write: { isRequired: true } } })], p3.prototype, "type", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], p3.prototype, "cloudCover", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], p3.prototype, "precipitation", void 0), p3 = s2 = r([a("esri.views.3d.environment.RainyWeather")], p3);
var n6 = p3;

// node_modules/@arcgis/core/views/3d/environment/SnowyWeather.js
var i4;
var p4 = i4 = class extends S {
  constructor(o10) {
    super(o10), this.type = "snowy", this.cloudCover = 0.5, this.precipitation = 0.5, this.snowCover = "disabled";
  }
  clone() {
    return new i4({ cloudCover: this.cloudCover, precipitation: this.precipitation, snowCover: this.snowCover });
  }
};
r([r4({ snowy: "snowy" }), m({ json: { write: { isRequired: true } } })], p4.prototype, "type", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], p4.prototype, "cloudCover", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], p4.prototype, "precipitation", void 0), r([m({ type: ["enabled", "disabled"], nonNullable: true, json: { write: true } })], p4.prototype, "snowCover", void 0), p4 = i4 = r([a("esri.views.3d.environment.SnowyWeather")], p4);
var n7 = p4;

// node_modules/@arcgis/core/views/3d/environment/SunnyWeather.js
var c4;
var n8 = c4 = class extends S {
  constructor(o10) {
    super(o10), this.type = "sunny", this.cloudCover = 0.5;
  }
  clone() {
    return new c4({ cloudCover: this.cloudCover });
  }
};
r([r4({ sunny: "sunny" }), m({ json: { write: { isRequired: true } } })], n8.prototype, "type", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { write: true } })], n8.prototype, "cloudCover", void 0), n8 = c4 = r([a("esri.views.3d.environment.SunnyWeather")], n8);
var p5 = n8;

// node_modules/@arcgis/core/views/3d/environment/weather.js
var n9 = { key: "type", base: p5, typeMap: { sunny: p5, cloudy: i2, rainy: n6, snowy: n7, foggy: i3 } };
var a3 = Object.keys(n9.typeMap);
var p6 = 1e4;
var i5 = 1e5;

// node_modules/@arcgis/core/views/3d/environment/CloudsParameters.js
var x = class {
  constructor() {
    this.startTime = 0, this._data = r2(null), this._readChannels = e6.RG, this.parallax = new O(), this.parallaxNew = new O(), this._anchorPoint = n2(), this._fadeState = r2(A2.HIDE), this._fadeFactor = r2(1);
  }
  get data() {
    return this._data.value;
  }
  set data(a4) {
    this._data.value = a4;
  }
  get readChannels() {
    return this._readChannels;
  }
  get fadeState() {
    return this._fadeState.value;
  }
  get fadeFactor() {
    return this._fadeFactor.value;
  }
  get opacity() {
    switch (this.fadeState) {
      case A2.HIDE:
        return 0;
      case A2.FADE_OUT:
        return 1 - this.fadeFactor;
      case A2.FADE_IN:
        return this.fadeFactor;
      case A2.SHOW:
      case A2.CROSS_FADE:
        return 1;
    }
  }
  fade(a4, e7, s3) {
    this.isFading && this.fadeFactor < 1 && (this._fadeFactor.value = s3 ? r3((e7 - this.startTime) / (H * s3), 0, 1) : 1, 1 === this.fadeFactor && this._endFade()), this._evaluateState(a4, e7), this._updateParallax(a4);
  }
  _evaluateState(a4, t5) {
    const e7 = a4.relativeElevation, s3 = this._updateAnchorPoint(a4);
    (e7 > 1.7 * p6 || e7 < -1e4 || s3 > I) && this.opacity > 0 ? this._startFade(A2.HIDE, t5) : this.isFading || (e7 > p6 || e7 < -0.35 * p6 || s3 > w2 * I ? this.opacity > 0 && this._startFade(A2.FADE_OUT, t5) : d3(this.data) && (0 === this.opacity ? this._startFade(A2.FADE_IN, t5) : this.data.state === n5.Ready && (this.fadeState === A2.SHOW ? this._startFade(A2.CROSS_FADE, t5) : this._startFade(A2.SHOW, t5))));
  }
  _updateParallax(a4) {
    const t5 = j(a4.eye);
    this.parallax.radiusCurvatureCorrection = 0.84 * Math.sqrt(Math.max(t5 - t.radius * t.radius, 0)) / Math.sqrt(t5), v(C, this.parallax.anchorPoint, v2), b(this.parallax.transform, o, v2[3], w(v2)), v(C, this.parallaxNew.anchorPoint, v2), b(this.parallaxNew.transform, o, v2[3], w(v2));
  }
  _updateAnchorPoint(a4) {
    var _a;
    return A(this._anchorPoint, a4.eye), g(this._anchorPoint, this._anchorPoint, t.radius), this.fadeState === A2.HIDE && ((_a = this.data) == null ? void 0 : _a.state) === n5.Ready ? (s(this.parallax.anchorPoint, this._anchorPoint), 0) : r6(c(g2, this.parallax.anchorPoint, this._anchorPoint));
  }
  requestFade() {
    this._fadeFactor.value = 0;
  }
  _startFade(a4, t5) {
    switch (this._fadeState.value = a4, this.startTime = t5, a4) {
      case A2.CROSS_FADE:
        this.requestFade(), this._switchReadChannels(), s(this.parallaxNew.anchorPoint, this._anchorPoint);
        break;
      case A2.FADE_IN:
        this.requestFade(), this._switchReadChannels(), s(this.parallax.anchorPoint, this._anchorPoint), s(this.parallaxNew.anchorPoint, this._anchorPoint);
        break;
      case A2.FADE_OUT:
        this.requestFade();
        break;
      case A2.SHOW:
        this._switchReadChannels(), s(this.parallax.anchorPoint, this._anchorPoint), s(this.parallaxNew.anchorPoint, this._anchorPoint), this._endFade();
        break;
      case A2.HIDE:
        this._endFade();
    }
  }
  _endFade() {
    switch (this._fadeFactor.value = 1, this.data && this.data.state !== n5.Ready && (this.data.state = n5.Idle), this.fadeState) {
      case A2.CROSS_FADE:
        s(this.parallax.anchorPoint, this.parallaxNew.anchorPoint), this._fadeState.value = A2.SHOW;
        break;
      case A2.FADE_IN:
        this._fadeState.value = A2.SHOW;
        break;
      case A2.FADE_OUT:
        this._fadeState.value = A2.HIDE;
        break;
      case A2.SHOW:
      case A2.HIDE:
        break;
      default:
        n(this.fadeState);
    }
  }
  _switchReadChannels() {
    var _a;
    ((_a = this.data) == null ? void 0 : _a.state) === n5.Ready && (this._readChannels = 1 - this._readChannels, this.data.state = n5.Fading);
  }
  get isFading() {
    return this.fadeState === A2.FADE_OUT || this.fadeState === A2.FADE_IN || this.fadeState === A2.CROSS_FADE;
  }
};
var A2;
!function(a4) {
  a4[a4.HIDE = 0] = "HIDE", a4[a4.FADE_IN = 1] = "FADE_IN", a4[a4.SHOW = 2] = "SHOW", a4[a4.CROSS_FADE = 3] = "CROSS_FADE", a4[a4.FADE_OUT = 4] = "FADE_OUT";
}(A2 || (A2 = {}));
var O = class {
  constructor() {
    this.anchorPoint = n2(), this.radiusCurvatureCorrection = 0, this.transform = e();
  }
};
var C = r5(0, 0, 1);
var v2 = j2();
var g2 = n2();
var H = 1.25;
var w2 = 0.5;
var I = 2e5;

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/TextureCubeBindUniform.js
var o8 = class extends i {
  constructor(r8, o10) {
    super(r8, "samplerCube", a2.Bind, (e7, s3) => e7.bindTexture(r8, o10(s3)));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl.js
function h(t5) {
  const r8 = t5.fragment;
  r8.constants.add("radiusCloudsSquared", "float", C2).code.add(n3`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`), r8.uniforms.add(new e2("radiusCurvatureCorrection", ({ clouds: o10 }) => o10.parallax.radiusCurvatureCorrection)).code.add(n3`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`), r8.code.add(n3`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`), t4(r8), o6(r8);
  const h2 = r5(0.28, 0.175, 0.035);
  r8.constants.add("RIM_COLOR", "vec3", h2);
  const v3 = 0.3, f = 140, p7 = 0.2, g3 = 10, w3 = 0.3;
  r8.code.add(n3`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${n3.float(v3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${n3.float(f)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${n3.float(p7)} * pow(dirDotLight, ${n3.float(g3)}) * (1. - pow(sunsetTransition, ${n3.float(w3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `), r8.uniforms.add(new e4("readChannelsRG", (o10) => o10.clouds.readChannels === e6.RG), new o8("cubeMap", (o10) => {
    var _a, _b;
    return ((_b = (_a = o10.clouds.data) == null ? void 0 : _a.cubeMap) == null ? void 0 : _b.colorTexture) ?? null;
  })).code.add(n3`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`), r8.uniforms.add(new o3("anchorPoint", (o10) => o10.clouds.parallax.anchorPoint), new o3("anchorPointNew", (o10) => o10.clouds.parallaxNew.anchorPoint), new t3("rotationClouds", (o10) => o10.clouds.parallax.transform), new t3("rotationCloudsNew", (o10) => o10.clouds.parallaxNew.transform), new e2("cloudsOpacity", (o10) => o10.clouds.opacity), new e2("fadeFactor", (o10) => o10.clouds.fadeFactor), new e4("crossFade", (o10) => o10.clouds.fadeState === A2.CROSS_FADE)).code.add(n3`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`);
}
var C2 = (t.radius + i5) ** 2;

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ToneMapping.glsl.js
function o9(o10) {
  o10.code.add(n3`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl.js
function m2(m3, v3) {
  m3.include(r7, v3), m3.include(e5), m3.include(n4), v3.cloudReflections && m3.include(h), m3.include(d2, v3);
  const u = m3.fragment;
  u.include(o9), u.constants.add("fresnelSky", "vec3", [0.02, 1, 15]), u.constants.add("fresnelMaterial", "vec2", [0.02, 0.1]), u.constants.add("roughness", "float", 0.015), u.constants.add("foamIntensityExternal", "float", 1.7), u.constants.add("ssrIntensity", "float", 0.65), u.constants.add("ssrHeightFadeStart", "float", e3), u.constants.add("ssrHeightFadeEnd", "float", o5), u.constants.add("waterDiffusion", "float", 0.92), u.constants.add("waterSeaColorMod", "float", 0.8), u.constants.add("correctionViewingPowerFactor", "float", 0.4), u.constants.add("skyZenitColor", "vec3", [0.52, 0.68, 0.9]), u.constants.add("skyColor", "vec3", [0.67, 0.79, 0.9]), u.constants.add("cloudFresnelModifier", "vec2", [1.2, 0.01]), u.code.add(n3`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`), u.uniforms.add(new e2("lightingSpecularStrength", (e7) => e7.lighting.mainLight.specularStrength), new e2("lightingEnvironmentStrength", (e7) => e7.lighting.mainLight.environmentStrength)), u.code.add(n3`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`), v3.cloudReflections && u.uniforms.add(new e2("cloudsOpacity", (e7) => e7.clouds.opacity)).code.add(n3`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`), v3.screenSpaceReflections ? u.uniforms.add(new t3("view", (e7) => e7.camera.viewMatrix), new o4("lastFrameColorTexture", (e7) => {
    var _a;
    return (_a = e7.ssr.lastFrameColor) == null ? void 0 : _a.getTexture();
  }), new e2("fadeFactorSSR", (e7) => e7.ssr.fadeFactor)).code.add(n3`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`) : u.code.add(n3`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`), v3.cloudReflections ? v3.screenSpaceReflections ? u.code.add(n3`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`) : u.code.add(n3`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`) : u.code.add(n3`return waterRenderedColor;
}`);
}

export {
  o7 as o,
  x,
  m2 as m
};
//# sourceMappingURL=chunk-T7OYNVTV.js.map
