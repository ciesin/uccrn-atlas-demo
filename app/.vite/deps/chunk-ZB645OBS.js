import {
  B
} from "./chunk-RJYMNNKW.js";
import {
  n
} from "./chunk-A6DPK5GC.js";
import {
  o
} from "./chunk-QTWG47SG.js";
import {
  s2 as s
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/projectMeshVertexPositions.js
function n2(n3, i) {
  const p = B(n3, n.absolute);
  if (!p) return null;
  let s2 = p.position;
  return s(n3.spatialReference, i) || (s2 = new Float64Array(p.position.length), o(p.position, n3.spatialReference, 0, s2, i, 0)) ? s2 : null;
}

export {
  n2 as n
};
//# sourceMappingURL=chunk-ZB645OBS.js.map
