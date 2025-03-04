import {
  n as n2
} from "./chunk-647JB2RE.js";
import {
  n
} from "./chunk-4BTKBTXL.js";
import {
  gt
} from "./chunk-FAAI5VMG.js";

// node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js
var r = class extends n2 {
  constructor(n3) {
    super({ ...n3, constraint: new gt(n3.targetPoint) });
  }
  get hints() {
    return [new n(this.targetPoint, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-DVLQPRGL.js.map
