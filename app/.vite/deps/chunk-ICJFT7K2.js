import {
  o2 as o
} from "./chunk-TP7H7H6D.js";
import {
  p as p3
} from "./chunk-M5YS3OM7.js";
import {
  d as d2,
  e as e5
} from "./chunk-C5H3KDE3.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  d,
  f,
  p as p2
} from "./chunk-TWZMNVWK.js";
import {
  e as e4
} from "./chunk-QXP5ULTQ.js";
import {
  e as e3
} from "./chunk-IG22ED74.js";
import {
  s
} from "./chunk-EDOH6SI4.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  e as e2
} from "./chunk-D7JG6K4Y.js";
import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  n
} from "./chunk-MHM4GDCM.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl.js
function n3(n4, c) {
  if (!c.screenSizeEnabled) return;
  const t = n4.vertex;
  d(t, c), t.uniforms.add(new e3("perScreenPixelRatio", (e6) => e6.camera.perScreenPixelRatio), new s("screenSizeScale", (e6) => e6.screenSizeScale)).code.add(n2`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`);
}

// node_modules/@arcgis/core/chunks/ShadedColorMaterial.glsl.js
function w(e6) {
  const w2 = new i();
  w2.include(o, e6), w2.include(n3, e6), w2.fragment.include(p, e6), w2.include(p3, e6), w2.include(d2, e6);
  const { vertex: b2, fragment: u2 } = w2;
  return u2.include(e5), f(b2, e6), u2.uniforms.add(new e4("uColor", (e7) => e7.color)), w2.attributes.add(e.POSITION, "vec3"), w2.varyings.add("vWorldPosition", "vec3"), e6.screenSizeEnabled && w2.attributes.add(e.OFFSET, "vec3"), e6.shadingEnabled && (p2(b2), w2.attributes.add(e.NORMAL, "vec3"), w2.varyings.add("vViewNormal", "vec3"), u2.uniforms.add(new e2("shadingDirection", (e7) => e7.shadingDirection)), u2.uniforms.add(new e4("shadedColor", (e7) => f2(e7.shadingTint, e7.color)))), b2.main.add(n2`
      vWorldPosition = ${e6.screenSizeEnabled ? n2`screenSizeScaling(offset, position)` : n2`position`};
      ${e6.shadingEnabled ? n2`vec3 worldNormal = normal;
                 vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;` : ""}
      forwardViewPosDepth((view * vec4(vWorldPosition, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vWorldPosition);
  `), u2.main.add(n2`
      discardBySlice(vWorldPosition);
      discardByTerrainDepth();
      ${e6.shadingEnabled ? n2`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);` : n2`vec4 finalColor = uColor;`}
      outputColorHighlightOID(finalColor, vWorldPosition);`), w2;
}
function f2(e6, r) {
  const i2 = 1 - e6[3], o2 = e6[3] + r[3] * i2;
  return 0 === o2 ? (b[3] = o2, b) : (b[0] = (e6[0] * e6[3] + r[0] * r[3] * i2) / o2, b[1] = (e6[1] * e6[3] + r[1] * r[3] * i2) / o2, b[2] = (e6[2] * e6[3] + r[2] * r[3] * i2) / o2, b[3] = r[3], b);
}
var b = n();
var u = Object.freeze(Object.defineProperty({ __proto__: null, build: w }, Symbol.toStringTag, { value: "Module" }));

export {
  w,
  u
};
//# sourceMappingURL=chunk-ICJFT7K2.js.map
