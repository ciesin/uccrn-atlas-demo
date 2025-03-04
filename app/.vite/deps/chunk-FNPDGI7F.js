import {
  b
} from "./chunk-DUTUUNDM.js";
import {
  C,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  j
} from "./chunk-67PUVBHA.js";
import {
  E
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/chunks/distanceOperator.js
var s = class {
  getOperatorType() {
    return 10100;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, r, t) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(e, r, t) {
    return this.executeEx(e, r, t, null, null, Number.NaN);
  }
  executeEx(t, o, u, s2, n2, a2) {
    if (t.isEmpty() || o.isEmpty()) return Number.NaN;
    j(t), j(o);
    const c2 = t, i2 = o;
    Number.isNaN(a2) && (a2 = Number.POSITIVE_INFINITY);
    const m = new b(a2, u).calculate(c2, i2, s2, n2);
    return Number.isFinite(m) ? m : Number.NaN;
  }
};
var n = new s();
function a(e, r, s2 = {}) {
  const { unit: a2 } = s2;
  let c2 = n.execute(x(e), x(r), null);
  if (c2 && a2) {
    const r2 = C(e);
    c2 = E(c2, r2, a2);
  }
  return c2;
}
var c = n.supportsCurves();
var i = Object.freeze(Object.defineProperty({ __proto__: null, execute: a, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  c,
  i
};
//# sourceMappingURL=chunk-FNPDGI7F.js.map
