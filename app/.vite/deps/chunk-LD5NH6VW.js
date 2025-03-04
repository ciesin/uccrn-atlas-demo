import {
  t as t2
} from "./chunk-PN3U57DO.js";
import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  i as i2
} from "./chunk-36LA23CO.js";
import {
  t
} from "./chunk-OZ4EAB4F.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e as e2
} from "./chunk-ZAYRG6WM.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  i
} from "./chunk-53ZTROGC.js";
import {
  _
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/chunks/FocusAreaMask.glsl.js
var l = class extends c {
  constructor() {
    super(...arguments), this.origin = _;
  }
};
function d() {
  const r = new i2();
  return r.attributes.add(e2.POSITION, "vec3"), r.outputs.add("fragColor", "vec4", 0), r.vertex.uniforms.add(new t("proj", (e3) => e3.camera.projectionMatrix), new t2("view", (r2, o) => i(c2, o.camera.viewMatrix, r2.origin))).main.add(n`gl_Position = proj * view * vec4(position, 1.0);`), r.fragment.main.add(n`fragColor = vec4(1., 0., 0., 1.);`), r;
}
var c2 = e();
var f = Object.freeze(Object.defineProperty({ __proto__: null, FocusAreaMaskDrawParameters: l, build: d }, Symbol.toStringTag, { value: "Module" }));

export {
  l,
  d,
  f
};
//# sourceMappingURL=chunk-LD5NH6VW.js.map
