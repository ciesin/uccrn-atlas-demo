import {
  m
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/utils.js
var c = "calcite-list";
var o = "calcite-list-item-group";
var i = "calcite-list-item";
function a(e) {
  var _a;
  const t = (_a = e.parentElement) == null ? void 0 : _a.closest(i);
  t && (t.open = true, a(t));
}
function f(e) {
  const t = e.assignedElements({ flatten: true }), s = t.filter((n) => n == null ? void 0 : n.matches(o)).map((n) => Array.from(n.querySelectorAll(i))).flat(), l = t.filter((n) => n == null ? void 0 : n.matches(i));
  return {
    lists: t.filter((n) => n == null ? void 0 : n.matches(c)),
    items: s.concat(l)
  };
}
function h(e) {
  const t = e.assignedElements({ flatten: true }).filter((s) => s.matches(i));
  t.forEach((s) => {
    s.setPosition = t.indexOf(s) + 1, s.setSize = t.length;
  });
}
function p(e, t = false) {
  if (!m())
    return 0;
  const s = t ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group" : "ancestor::calcite-list-item";
  return document.evaluate(s, e, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
}
function d(e) {
  return e.tagName === "CALCITE-LIST-ITEM";
}

export {
  c,
  o,
  i,
  a,
  f,
  h,
  p,
  d
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/utils.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-GGM626BI.js.map
