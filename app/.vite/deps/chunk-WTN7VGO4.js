import {
  o as o3
} from "./chunk-W3SIP2H3.js";
import {
  o as o2
} from "./chunk-F6RMQNRI.js";
import {
  n as n3
} from "./chunk-OULJFYM2.js";
import {
  n as n2
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";
import {
  n
} from "./chunk-MHM4GDCM.js";
import {
  s
} from "./chunk-363AT5UF.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js
function f(r) {
  r.fragment.uniforms.add(new o3("projInfo", (r2) => n4(r2.camera))), r.fragment.uniforms.add(new o2("zScale", (r2) => m(r2.camera))), r.fragment.code.add(n3`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function n4(r) {
  const o4 = r.projectionMatrix;
  return 0 === o4[11] ? s(c, 2 / (r.fullWidth * o4[0]), 2 / (r.fullHeight * o4[5]), (1 + o4[12]) / o4[0], (1 + o4[13]) / o4[5]) : s(c, -2 / (r.fullWidth * o4[0]), -2 / (r.fullHeight * o4[5]), (1 - o4[8]) / o4[0], (1 - o4[9]) / o4[5]);
}
var c = n();
function m(o4) {
  return 0 === o4.projectionMatrix[11] ? o(l, 0, 1) : o(l, 1, 0);
}
var l = n2();

export {
  f
};
//# sourceMappingURL=chunk-WTN7VGO4.js.map
