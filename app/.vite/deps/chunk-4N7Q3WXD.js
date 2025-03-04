import {
  r
} from "./chunk-U4J3KS6Z.js";
import {
  s as s2
} from "./chunk-NWL5O6MC.js";
import {
  t as t2
} from "./chunk-ABH42FPX.js";
import {
  Rt,
  h,
  yt
} from "./chunk-FAAI5VMG.js";
import {
  E2 as E,
  a,
  n as n2,
  s
} from "./chunk-6MN3R543.js";
import {
  m
} from "./chunk-K35H6D4D.js";
import {
  H,
  I,
  c,
  u
} from "./chunk-UMYFDXOJ.js";
import {
  n,
  t
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/ParallelLineSnappingCandidate.js
var g = class extends t2 {
  constructor({ referenceLine: i, lineStart: f, targetPoint: o, isDraped: d }) {
    const h2 = t(f), { left: g3, right: p } = i;
    c(h2, u(h2, h2, p), g3), super(o, new Rt(f, a(h2)), d, E.SELF), this._referenceLines = [{ edge: i, fadeLeft: true, fadeRight: true }];
  }
  get hints() {
    return [new n2(h.TARGET, this.constraint.start, this.targetPoint, this.isDraped, this.domain), new r(this.constraint.start, this.targetPoint, this.isDraped, this.domain), ...this._referenceLines.map((e) => new n2(h.REFERENCE, e.edge.left, e.edge.right, this.isDraped, this.domain, e.fadeLeft, e.fadeRight))];
  }
  addReferenceLine(e) {
    const t3 = { edge: e, fadeLeft: true, fadeRight: true };
    this._referenceLines.forEach((r2) => {
      H(e.right, r2.edge.left) && (r2.fadeLeft = false, t3.fadeRight = false), H(e.right, r2.edge.right) && (r2.fadeRight = false, t3.fadeRight = false), H(e.left, r2.edge.right) && (r2.fadeRight = false, t3.fadeLeft = false), H(e.left, r2.edge.left) && (r2.fadeLeft = false, t3.fadeLeft = false);
    }), this._referenceLines.push(t3);
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/candidates/RightAngleTriangleSnappingCandidate.js
var g2 = class extends t2 {
  constructor({ targetPoint: e, point1: m2, point2: a2, isDraped: h2 }) {
    super(e, new yt(a(I(n(), m2, a2, 0.5)), 0.5 * m(s(m2), s(a2))), h2, E.SELF), this._p1 = m2, this._p2 = a2;
  }
  get hints() {
    return [new n2(h.REFERENCE, this.targetPoint, this._p1, this.isDraped, this.domain), new n2(h.REFERENCE, this.targetPoint, this._p2, this.isDraped, this.domain), new s2(this._p1, this.targetPoint, this._p2, this.isDraped, this.domain)];
  }
};

export {
  g,
  g2
};
//# sourceMappingURL=chunk-4N7Q3WXD.js.map
