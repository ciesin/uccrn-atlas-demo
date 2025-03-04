import {
  i as i3
} from "./chunk-FZIAHPUP.js";
import {
  o as o2
} from "./chunk-F6CYJMBV.js";
import {
  e as e3
} from "./chunk-IG22ED74.js";
import {
  o as o3
} from "./chunk-F6RMQNRI.js";
import {
  s
} from "./chunk-EDOH6SI4.js";
import {
  i as i2
} from "./chunk-36LA23CO.js";
import {
  t as t2
} from "./chunk-OZ4EAB4F.js";
import {
  n as n2,
  t
} from "./chunk-OULJFYM2.js";
import {
  e as e2
} from "./chunk-ZAYRG6WM.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  n
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";
import {
  i
} from "./chunk-53ZTROGC.js";

// node_modules/@arcgis/core/chunks/LaserlinePath.glsl.js
function w(t3) {
  const r = new i2();
  r.include(i3, t3);
  const { vertex: w2, fragment: u2 } = r;
  w2.uniforms.add(new o2("modelView", (t4, { camera: o4 }) => i(f, o4.viewMatrix, t4.origin)), new t2("proj", ({ camera: e4 }) => e4.projectionMatrix), new s("glowWidth", (e4, { camera: t4 }) => e4.glowWidth * t4.pixelRatio), new o3("pixelToNDC", ({ camera: e4 }) => o(g, 2 / e4.fullViewport[2], 2 / e4.fullViewport[3]))), r.attributes.add(e2.START, "vec3"), r.attributes.add(e2.END, "vec3"), t3.spherical && (r.attributes.add(e2.START_UP, "vec3"), r.attributes.add(e2.END_UP, "vec3")), r.attributes.add(e2.EXTRUDE, "vec2"), r.varyings.add("uv", "vec2"), r.varyings.add("vViewStart", "vec3"), r.varyings.add("vViewEnd", "vec3"), r.varyings.add("vViewSegmentNormal", "vec3"), r.varyings.add("vViewStartNormal", "vec3"), r.varyings.add("vViewEndNormal", "vec3");
  const h = !t3.spherical;
  return w2.main.add(n2`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${t(h, n2`vec3 startUp = vec3(0, 0, 1);`)}
    ${t(h, n2`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `), u2.uniforms.add(new e3("perScreenPixelRatio", (e4) => e4.camera.perScreenPixelRatio)), u2.code.add(n2`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`), u2.main.add(n2`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`), r;
}
var g = n();
var f = e();
var u = Object.freeze(Object.defineProperty({ __proto__: null, build: w }, Symbol.toStringTag, { value: "Module" }));

export {
  w,
  u
};
//# sourceMappingURL=chunk-VNPFZZMU.js.map
