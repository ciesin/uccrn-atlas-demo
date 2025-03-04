import {
  a,
  i as i2
} from "./chunk-NQBVVSVQ.js";
import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  e
} from "./chunk-LN4OREZH.js";
import {
  d
} from "./chunk-NVSB3M2P.js";
import {
  o
} from "./chunk-F6RMQNRI.js";
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
  t
} from "./chunk-BDV3SAJ7.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/CompositingTechniqueConfiguration.js
var i3;
!function(t2) {
  t2[t2.None = 0] = "None", t2[t2.Alpha = 1] = "Alpha", t2[t2.PremultipliedAlpha = 2] = "PremultipliedAlpha", t2[t2.Depth = 3] = "Depth", t2[t2.COUNT = 4] = "COUNT";
}(i3 || (i3 = {}));
var r2 = class extends a {
  constructor() {
    super(...arguments), this.blitMode = i3.None, this.hasOpacityFactor = false;
  }
};
r([i2({ count: i3.COUNT })], r2.prototype, "blitMode", void 0), r([i2()], r2.prototype, "hasOpacityFactor", void 0);

// node_modules/@arcgis/core/chunks/Compositing.glsl.js
var m = class extends c {
  constructor() {
    super(...arguments), this.opacity = 1;
  }
};
function g(l) {
  const m2 = new i();
  m2.include(e), m2.fragment.uniforms.add(new s("tex", (e2) => e2.texture)), l.hasOpacityFactor && m2.fragment.uniforms.add(new s2("opacity", (e2) => e2.opacity));
  const g2 = l.blitMode === i3.Depth;
  return g2 && (m2.fragment.uniforms.add(new o("nearFar", (e2) => e2.camera.nearFar)), m2.fragment.include(d), m2.fragment.include(t)), m2.fragment.main.add(n`
    ${g2 ? n`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = float2rgba(normalizedLinearDepth);` : n`
          fragColor = texture(tex, uv) ${l.hasOpacityFactor ? "* opacity" : ""};`}`), m2;
}
var c2 = Object.freeze(Object.defineProperty({ __proto__: null, CompositingPassParameters: m, build: g }, Symbol.toStringTag, { value: "Module" }));

export {
  i3 as i,
  r2 as r,
  m,
  g,
  c2 as c
};
//# sourceMappingURL=chunk-X2Y2LF3Z.js.map
