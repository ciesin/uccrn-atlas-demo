import {
  e as e2
} from "./chunk-6BJQY5YG.js";
import {
  o2 as o
} from "./chunk-TP7H7H6D.js";
import {
  d,
  o as o2
} from "./chunk-YIMQSH52.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  f
} from "./chunk-TWZMNVWK.js";
import {
  e as e3
} from "./chunk-QXP5ULTQ.js";
import {
  s
} from "./chunk-EDOH6SI4.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n as n2,
  u
} from "./chunk-BSNHCIEC.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/chunks/NativeLine.glsl.js
function u2(u3) {
  const p3 = new i(), { vertex: w, fragment: f2 } = p3;
  return p3.include(o, u3), p3.include(e2, u3), f(w, u3), p3.attributes.add(e.POSITION, "vec3"), p3.varyings.add("vpos", "vec3"), w.main.add(n`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`), p3.include(d, u3), p3.fragment.include(p, u3), f2.uniforms.add(new s("alphaCoverage", (e4, r) => Math.min(1, e4.width * r.camera.pixelRatio))), u3.hasVertexColors || f2.uniforms.add(new e3("constantColor", (e4) => e4.color)), f2.main.add(n`
    discardBySlice(vpos);

    vec4 color = ${u3.hasVertexColors ? "vColor" : "constantColor"};

    ${u3.output === n2.ObjectAndLayerIdColor ? "color.a = 1.0;" : ""}

    if (color.a < ${n.float(o2)}) {
      discard;
    }

    ${u(u3.output) ? n`fragColor = applySlice(color, vpos);` : ""}
    calculateOcclusionAndOutputHighlight();
  `), p3;
}
var p2 = Object.freeze(Object.defineProperty({ __proto__: null, build: u2 }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  p2 as p
};
//# sourceMappingURL=chunk-JW3JMZWV.js.map
