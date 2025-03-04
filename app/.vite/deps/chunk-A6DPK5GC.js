import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  n
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

// node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var c;
var i = c = class extends a2.ClonableMixin(S) {
  constructor(e) {
    super(e), this.type = "georeferenced", this.origin = null;
  }
};
i.absolute = new c(), r([r2({ georeferenced: "georeferenced" }, { readOnly: true })], i.prototype, "type", void 0), r([m({ type: [Number], nonNullable: false, json: { write: true } })], i.prototype, "origin", void 0), i = c = r([a("esri.geometry.support.MeshGeoreferencedVertexSpace")], i);
var n2 = i;

// node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var i2 = class extends a2.ClonableMixin(S) {
  constructor(o) {
    super(o), this.type = "local", this.origin = n();
  }
};
r([r2({ local: "local" }, { readOnly: true })], i2.prototype, "type", void 0), r([m({ type: [Number], nonNullable: true, json: { write: true } })], i2.prototype, "origin", void 0), i2 = r([a("esri.geometry.support.MeshLocalVertexSpace")], i2);
var a3 = i2;

export {
  n2 as n,
  a3 as a
};
//# sourceMappingURL=chunk-A6DPK5GC.js.map
