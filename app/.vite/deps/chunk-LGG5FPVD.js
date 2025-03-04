import {
  a as a3,
  n
} from "./chunk-TOMXDOXB.js";
import {
  a as a2
} from "./chunk-CVABZLLM.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var n2 = { type: ["average", "color-burn", "color-dodge", "color", "darken", "destination-atop", "destination-in", "destination-out", "destination-over", "difference", "exclusion", "hard-light", "hue", "invert", "lighten", "lighter", "luminosity", "minus", "multiply", "normal", "overlay", "plus", "reflect", "saturation", "screen", "soft-light", "source-atop", "source-in", "source-out", "vivid-light", "xor"], nonNullable: true, json: { read: false, write: false, origins: { "web-map": { read: true, write: { layerContainerTypes: a2 } }, "portal-item": { read: true, write: { layerContainerTypes: a2 } } } } };
var a4 = { read: { reader: n }, write: { allowNull: true, writer: a3, layerContainerTypes: a2 } };
var l = { json: { read: false, write: false, origins: { "web-map": a4, "portal-item": a4 } } };
var p = (t) => {
  let s = class extends t {
    constructor() {
      super(...arguments), this.blendMode = "normal", this.effect = null;
    }
  };
  return r([m(n2)], s.prototype, "blendMode", void 0), r([m(l)], s.prototype, "effect", void 0), s = r([a("esri.layers.mixins.BlendLayer")], s), s;
};

export {
  n2 as n,
  l,
  p
};
//# sourceMappingURL=chunk-LGG5FPVD.js.map
