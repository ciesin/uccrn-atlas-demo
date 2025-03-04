import {
  o
} from "./chunk-JJAT7JGD.js";
import {
  f,
  i
} from "./chunk-D4CSBMND.js";
import {
  v
} from "./chunk-WZBMMIVS.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  c
} from "./chunk-LTDNORB5.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/rest/support/ProjectParameters.js
var p = class extends S {
  constructor(r2) {
    super(r2), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const r2 = this.geometries.map((r3) => r3.toJSON()), o2 = this.geometries[0], t = {};
    return t.outSR = c(this.outSpatialReference), t.inSR = c(o2.spatialReference), t.geometries = JSON.stringify({ geometryType: v(o2), geometries: r2 }), this.transformation && (t.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), null != this.transformForward && (t.transformForward = this.transformForward), t;
  }
};
r([m()], p.prototype, "geometries", void 0), r([m({ type: g, json: { read: { source: "outSR" } } })], p.prototype, "outSpatialReference", void 0), r([m()], p.prototype, "transformation", void 0), r([m()], p.prototype, "transformForward", void 0), p = r([a("esri.rest.support.ProjectParameters")], p);
var m2 = p;

// node_modules/@arcgis/core/rest/geometryService/project.js
var i2 = w(m2);
async function n(o2, m3, n2) {
  m3 = i2(m3);
  const u = f(o2), c2 = { ...u.query, f: "json", ...m3.toJSON() }, j = m3.outSpatialReference, a2 = v(m3.geometries[0]), f2 = i(c2, n2);
  return P(u.path + "/project", f2).then(({ data: { geometries: r2 } }) => o(r2, a2, j));
}

export {
  m2 as m,
  n
};
//# sourceMappingURL=chunk-H3KNPVGL.js.map
