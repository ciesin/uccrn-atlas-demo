import {
  C,
  Z,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  s,
  t
} from "./chunk-VUD5O2WG.js";
import {
  j
} from "./chunk-67PUVBHA.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorAffineTransform.js
var n = class {
  getOperatorType() {
    return 10303;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, r, t2) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  executeMany(e, r, t2) {
    return new o(e, r, t2);
  }
  execute(e, r, t2) {
    const n2 = e.clone();
    return n2.applyTransformation(r), n2;
  }
};
var o = class extends t {
  constructor(e, r, t2) {
    super(), this.m_index = -1, this.m_transformation = r.clone(), this.m_inputGeometryCursor = e;
  }
  next() {
    let e;
    if (e = this.m_inputGeometryCursor.next()) {
      j(e), this.m_index = this.m_inputGeometryCursor.getGeometryID();
      const r = e.clone();
      return r.applyTransformation(this.m_transformation), r;
    }
    return null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
};
var s2 = new n();
function u(e, r) {
  return s2.execute(e, r, null);
}
function m(e, t2) {
  const n2 = s2.executeMany(new s(e), t2, null);
  return Array.from(n2);
}
function c() {
  return s2.supportsCurves();
}

// node_modules/@arcgis/core/geometry/operators/affineTransformOperator.js
function p(r, o2) {
  const s3 = C(r);
  return Z(u(x(r), o2.transform), s3);
}
function f(o2, t2) {
  const p2 = o2.map(x), f2 = C(o2);
  return m(p2, t2.transform).map((r) => Z(r, f2)).filter(G);
}
var m2 = c();

export {
  p,
  f,
  m2 as m
};
//# sourceMappingURL=chunk-T3YG4OQI.js.map
