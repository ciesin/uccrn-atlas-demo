import {
  S,
  p
} from "./chunk-5UCWBFBR.js";
import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  f
} from "./chunk-D4CSBMND.js";

// node_modules/@arcgis/core/rest/query/executeForCount.js
async function s(s3, i, m) {
  const n = f(s3), { data: p2 } = await S(n, b.from(i), m);
  return p2.count;
}

// node_modules/@arcgis/core/rest/query/executeForIds.js
async function s2(s3, i, m) {
  const p2 = f(s3), { data: a } = await p(p2, b.from(i), m);
  return a.objectIds ?? [];
}

export {
  s,
  s2
};
//# sourceMappingURL=chunk-GEXVSPF3.js.map
