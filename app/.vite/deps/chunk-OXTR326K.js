import {
  P
} from "./chunk-I7YJKQIK.js";
import {
  C,
  Z,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  s
} from "./chunk-VUD5O2WG.js";
import {
  I2 as I
} from "./chunk-LTDNORB5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeneralize.js
var n = new P();
function t(r, e, t2) {
  return n.execute(r, e, t2, null);
}
function o(e, t2, o2) {
  const u3 = n.executeMany(new s(e), t2, o2, null);
  return Array.from(u3);
}
function u() {
  return n.supportsCurves();
}

// node_modules/@arcgis/core/chunks/generalizeOperator.js
function u2(e, t2, s2 = {}) {
  const { removeDegenerateParts: u3 = false, unit: i2 } = s2, m2 = C(e);
  return i2 && (t2 = I(t2, i2, m2)), Z(t(x(e), t2, u3), m2);
}
function i(t2, o2, u3 = {}) {
  const { removeDegenerateParts: i2 = false, unit: m2 } = u3, c2 = t2.map(x), f = C(t2);
  return m2 && (o2 = I(o2, m2, f)), o(c2, o2, i2).map((e) => Z(e, f)).filter(G);
}
var m = u();
var c = Object.freeze(Object.defineProperty({ __proto__: null, execute: u2, executeMany: i, supportsCurves: m }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  i,
  m,
  c
};
//# sourceMappingURL=chunk-OXTR326K.js.map
