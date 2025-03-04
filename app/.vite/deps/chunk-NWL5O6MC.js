import {
  E2 as E,
  s2 as s
} from "./chunk-6MN3R543.js";
import {
  H
} from "./chunk-UMYFDXOJ.js";

// node_modules/@arcgis/core/views/interactive/snapping/hints/RightAngleSnappingHint.js
var s2 = class _s extends s {
  constructor(e, r, s3, i, o = E.ALL) {
    super(i, o), this.previousVertex = e, this.centerVertex = r, this.nextVertex = s3;
  }
  equals(t) {
    return t instanceof _s && (H(this.previousVertex, t.previousVertex) && H(this.centerVertex, t.centerVertex) && H(this.nextVertex, t.nextVertex));
  }
};

export {
  s2 as s
};
//# sourceMappingURL=chunk-NWL5O6MC.js.map
