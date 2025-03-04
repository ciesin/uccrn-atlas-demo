import {
  a
} from "./chunk-ST4S6525.js";
import {
  C,
  k,
  x
} from "./chunk-FZLDYYQZ.js";

// node_modules/@arcgis/core/chunks/centroidOperator.js
var s = class {
  getOperatorType() {
    return 10205;
  }
  accelerateGeometry(e, r, t) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  execute(r, t) {
    return a(r);
  }
};
var u = new s();
function n(e) {
  const s2 = u.execute(x(e), null);
  return k(s2, C(e));
}
var c = u.supportsCurves();
var p = Object.freeze(Object.defineProperty({ __proto__: null, execute: n, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  c,
  p
};
//# sourceMappingURL=chunk-ZICOUAEG.js.map
