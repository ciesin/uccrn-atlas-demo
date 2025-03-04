import {
  c,
  v
} from "./chunk-WZBMMIVS.js";

// node_modules/@arcgis/core/rest/geometryService/utils.js
function r(t) {
  return { geometryType: v(t[0]), geometries: t.map((e) => e.toJSON()) };
}
function o(e, r2, o2) {
  const n = c(r2);
  return e.map((e2) => {
    const t = n.fromJSON(e2);
    return t.spatialReference = o2, t;
  });
}

export {
  r,
  o
};
//# sourceMappingURL=chunk-JJAT7JGD.js.map
