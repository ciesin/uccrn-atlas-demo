import {
  o
} from "./chunk-MDKBTLVE.js";
import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  e
} from "./chunk-LN4OREZH.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/views/3d/terrain/interfaces.js
var E;
var A;
var O;
!function(E2) {
  E2[E2.INNER = 0] = "INNER", E2[E2.OUTER = 1] = "OUTER";
}(E || (E = {})), function(E2) {
  E2[E2.REGULAR = 0] = "REGULAR", E2[E2.HAS_NORTH_POLE = 1] = "HAS_NORTH_POLE", E2[E2.HAS_SOUTH_POLE = 2] = "HAS_SOUTH_POLE", E2[E2.HAS_BOTH_POLES = 3] = "HAS_BOTH_POLES";
}(A || (A = {})), function(E2) {
  E2[E2.FADING = 0] = "FADING", E2[E2.IMMEDIATE = 1] = "IMMEDIATE", E2[E2.UNFADED = 2] = "UNFADED";
}(O || (O = {}));

// node_modules/@arcgis/core/chunks/OverlayCompositing.glsl.js
var d = class extends c {
  constructor() {
    super(...arguments), this.overlayIndex = E.INNER, this.opacity = 1;
  }
};
function l() {
  const e2 = new i();
  return e2.include(e), e2.fragment.uniforms.add(new s("tex", (e3) => e3.texture)), e2.fragment.uniforms.add(new o("overlayIdx", (e3) => e3.overlayIndex)), e2.fragment.uniforms.add(new s2("opacity", (e3) => e3.opacity)), e2.fragment.main.add(n`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`), e2;
}
var m = Object.freeze(Object.defineProperty({ __proto__: null, OverlayCompositingPassParameters: d, build: l }, Symbol.toStringTag, { value: "Module" }));

export {
  E,
  d,
  l,
  m
};
//# sourceMappingURL=chunk-R7NU4UJM.js.map
