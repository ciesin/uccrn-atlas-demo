import {
  t as t2
} from "./chunk-PN3U57DO.js";
import {
  o as o3
} from "./chunk-B2Y4XQVD.js";
import {
  e as e2
} from "./chunk-IG22ED74.js";
import {
  o as o2
} from "./chunk-U5M766SV.js";
import {
  t
} from "./chunk-OZ4EAB4F.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  o
} from "./chunk-UMYFDXOJ.js";
import {
  i
} from "./chunk-53ZTROGC.js";
import {
  _,
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js
function d(r, i2) {
  i2.instancedDoublePrecision ? r.constants.add("cameraPosition", "vec3", _) : r.uniforms.add(new o2("cameraPosition", (r2, i3) => o(v, i3.camera.viewInverseTransposeMatrix[3] - r2.origin[0], i3.camera.viewInverseTransposeMatrix[7] - r2.origin[1], i3.camera.viewInverseTransposeMatrix[11] - r2.origin[2])));
}
function f(i2, o4) {
  if (!o4.instancedDoublePrecision) return void i2.uniforms.add(new t("proj", (r) => r.camera.projectionMatrix), new t2("view", (i3, e3) => i(l, e3.camera.viewMatrix, i3.origin)), new o2("localOrigin", (r) => r.origin));
  const a = ({ camera: r }) => o(v, r.viewInverseTransposeMatrix[3], r.viewInverseTransposeMatrix[7], r.viewInverseTransposeMatrix[11]);
  i2.uniforms.add(new t("proj", (r) => r.camera.projectionMatrix), new t("view", (i3) => i(l, i3.camera.viewMatrix, a(i3))), new o3("localOrigin", (r) => a(r)));
}
var l = e();
var v = n();
function p(r) {
  r.uniforms.add(new t("viewNormal", (r2) => r2.camera.viewInverseTransposeMatrix));
}
function w(r) {
  r.uniforms.add(new e2("pixelRatio", (r2) => r2.camera.pixelRatio / r2.overlayStretch));
}

export {
  d,
  f,
  p,
  w
};
//# sourceMappingURL=chunk-TWZMNVWK.js.map
