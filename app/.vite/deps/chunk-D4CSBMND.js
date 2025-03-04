import {
  I
} from "./chunk-F7TCEOHX.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/utils.js
function i(r, t) {
  return t ? { ...t, query: { ...r ?? {}, ...t.query } } : { query: r };
}
function f(r) {
  return "string" == typeof r ? I(r) : a(r);
}
function s3(r, t, o) {
  const n2 = {};
  for (const e in r) {
    if ("declaredClass" === e) continue;
    const i2 = r[e];
    if (null != i2 && "function" != typeof i2) if (Array.isArray(i2)) n2[e] = i2.map((r2) => s3(r2));
    else if ("object" == typeof i2) if (i2.toJSON) {
      const r2 = i2.toJSON(o == null ? void 0 : o[e]);
      n2[e] = t ? r2 : JSON.stringify(r2);
    } else n2[e] = t ? i2 : JSON.stringify(i2);
    else n2[e] = i2;
  }
  return n2;
}

export {
  i,
  f,
  s3 as s
};
//# sourceMappingURL=chunk-D4CSBMND.js.map
