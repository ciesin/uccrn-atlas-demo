import {
  a as a2
} from "./chunk-BWQFRI3E.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  e
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/mixins/OrderedLayer.js
function i(r2, o, e2) {
  if (!r2) return null;
  const t = r2.find((r3) => !!r3.field);
  if (!t) return null;
  const i2 = new a2();
  return i2.read(t, e2), [i2];
}
function n(r2, e2, t, s) {
  const i2 = r2.find((r3) => !!r3.field);
  i2 && e(t, [i2.toJSON()], e2);
}
var c = { type: [a2], json: { origins: { "web-scene": { write: false, read: false } }, name: "layerDefinition.orderBy", read: { reader: i }, write: { writer: n } } };
var p = (o) => {
  let s = class extends o {
    constructor() {
      super(...arguments), this.orderBy = null;
    }
  };
  return r([m(c)], s.prototype, "orderBy", void 0), s = r([a("esri.layers.mixins.OrderedLayer")], s), s;
};

export {
  i,
  c,
  p
};
//# sourceMappingURL=chunk-D4RMC5GM.js.map
