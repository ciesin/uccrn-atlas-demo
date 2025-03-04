import {
  n as n2
} from "./chunk-647JB2RE.js";
import {
  Nt,
  h
} from "./chunk-FAAI5VMG.js";
import {
  n
} from "./chunk-6MN3R543.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/DrapedEdgeSnappingCandidate.js
var r = class extends n2 {
  constructor(n3) {
    super({ ...n3, isDraped: true, constraint: new Nt(n3.edgeStart, n3.edgeEnd, n3.getGroundElevation) });
  }
  get hints() {
    return [new n(h.REFERENCE, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-QGVT5UOI.js.map
