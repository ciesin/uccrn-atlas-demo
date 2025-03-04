import {
  o
} from "./chunk-JZNIMAZ2.js";
import {
  f
} from "./chunk-WTN7VGO4.js";
import {
  d
} from "./chunk-NVSB3M2P.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  e
} from "./chunk-D7JG6K4Y.js";
import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl.js
function i(i2, p) {
  const d2 = i2.fragment;
  d2.include(d), i2.include(f), d2.uniforms.add(new s2("globalAlpha", (e2) => e2.globalAlpha), new e("glowColor", (e2) => e2.glowColor), new s2("glowWidth", (e2, o2) => e2.glowWidth * o2.camera.pixelRatio), new s2("glowFalloff", (e2) => e2.glowFalloff), new e("innerColor", (e2) => e2.innerColor), new s2("innerWidth", (e2, o2) => e2.innerWidth * o2.camera.pixelRatio), new o("depthMap", (e2) => {
    var _a;
    return (_a = e2.depth) == null ? void 0 : _a.attachment;
  }), new s("normalMap", (e2) => e2.normals)), d2.code.add(n`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`), d2.code.add(n`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`), d2.code.add(n`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`), d2.code.add(n`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`), p.contrastControlEnabled ? d2.uniforms.add(new s("frameColor", (e2, o2) => e2.colors), new s2("globalAlphaContrastBoost", (e2) => e2.globalAlphaContrastBoost)).code.add(n`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`) : d2.code.add(n`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`);
}

export {
  i
};
//# sourceMappingURL=chunk-FZIAHPUP.js.map
