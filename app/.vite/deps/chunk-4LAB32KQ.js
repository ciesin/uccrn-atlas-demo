import {
  m
} from "./chunk-J6MQFQDT.js";
import {
  s2 as s,
  u2 as u
} from "./chunk-4LTV6KQ5.js";

// node_modules/@arcgis/core/renderers/support/jsonUtils.js
function t(e, r) {
  return o(e, null, r);
}
var s2 = u({ types: m });
function o(r, n, t2) {
  return r ? r && (r.styleName || r.styleUrl) && "uniqueValue" !== r.type ? ((t2 == null ? void 0 : t2.messages) && t2.messages.push(new s("renderer:unsupported", "Only UniqueValueRenderer can be referenced from a web style, but found '" + r.type + "'", { definition: r, context: t2 })), null) : s2(r, n, t2) : null;
}

export {
  t,
  o
};
//# sourceMappingURL=chunk-4LAB32KQ.js.map
