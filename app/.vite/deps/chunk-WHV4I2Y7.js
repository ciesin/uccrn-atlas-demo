import {
  B as B2,
  q,
  w,
  y,
  z
} from "./chunk-QUEKTCSS.js";
import {
  b
} from "./chunk-HONYA6AI.js";
import {
  e as e2
} from "./chunk-NOMJWA3C.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  B,
  P,
  h
} from "./chunk-53ZTROGC.js";
import {
  n,
  r as r2,
  t,
  u
} from "./chunk-JLFSX3JT.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/geometry/support/MeshTransform.js
var y2;
var A = y2 = class extends S {
  constructor(t2) {
    super(t2), this.translation = n(), this.rotationAxis = u(B2), this.rotationAngle = 0, this.scale = r2(1, 1, 1);
  }
  get rotation() {
    return q(this.rotationAxis, this.rotationAngle);
  }
  set rotation(t2) {
    this.rotationAxis = t(w(t2)), this.rotationAngle = y(t2);
  }
  get localMatrix() {
    const t2 = e();
    return b(d, w(this.rotation), z(this.rotation)), P(t2, d, this.translation, this.scale), t2;
  }
  get localMatrixInverse() {
    return h(e(), this.localMatrix);
  }
  equals(t2) {
    return this === t2 || null != t2 && B(this.localMatrix, t2.localMatrix);
  }
  clone() {
    const t2 = { translation: t(this.translation), rotationAxis: t(this.rotationAxis), rotationAngle: this.rotationAngle, scale: t(this.scale) };
    return new y2(t2);
  }
};
r([m({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "translation", void 0), r([m({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "rotationAxis", void 0), r([m({ type: Number, nonNullable: true, json: { write: true } })], A.prototype, "rotationAngle", void 0), r([m({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "scale", void 0), r([m()], A.prototype, "rotation", null), r([m()], A.prototype, "localMatrix", null), r([m()], A.prototype, "localMatrixInverse", null), A = y2 = r([a("esri.geometry.support.MeshTransform")], A);
var d = e2();
var N = A;

export {
  N
};
//# sourceMappingURL=chunk-WHV4I2Y7.js.map
