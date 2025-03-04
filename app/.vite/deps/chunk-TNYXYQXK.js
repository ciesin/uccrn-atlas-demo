import {
  d,
  m,
  n2 as n,
  n3 as n2,
  q
} from "./chunk-LCBD3JEK.js";
import {
  H,
  Pe,
  W,
  v
} from "./chunk-6REABBOQ.js";

// node_modules/@arcgis/core/support/popupUtils.js
function p({ displayField: t, editFieldsInfo: n3, fields: i, objectIdField: o, title: s }, r) {
  if (!i) return null;
  const l = g({ editFieldsInfo: n3, fields: i, objectIdField: o }, r);
  if (!l.length) return null;
  const a = I({ titleBase: s, fields: i, displayField: t }), p2 = j();
  return new q({ title: a, content: p2, fieldInfos: l });
}
function c(e) {
  var _a;
  const { title: t, graphic: n3 } = e ?? {}, { attributes: i, sourceLayer: o } = n3 ?? {}, s = o && "displayField" in o ? o.displayField : null, r = s ? i == null ? void 0 : i[s] : null, l = null != r ? JSON.stringify(r) : null, a = (_a = n3 == null ? void 0 : n3.getObjectId()) == null ? void 0 : _a.toString();
  return t || l || a || "";
}
var d2 = (e, t) => t.visibleFieldNames ? t.visibleFieldNames.has(e.name) : H(e, t);
function f({ fields: e, ignoreFieldTypes: t, sortDisabled: n3 }) {
  const i = e;
  return t && (e = e.filter((e2) => !t.includes(e2.type))), e === i && (e = e.slice()), true !== n3 && e.sort(m2), e;
}
function m2(e, t) {
  return "oid" === e.type ? -1 : "oid" === t.type ? 1 : v2(e) ? -1 : v2(t) ? 1 : (e.alias || e.name).toLocaleLowerCase().localeCompare((t.alias || t.name).toLocaleLowerCase());
}
function g(e, n3) {
  const i = n3 == null ? void 0 : n3.visibleFieldNames;
  return f({ fields: e.fields ?? [], ignoreFieldTypes: (n3 == null ? void 0 : n3.ignoreFieldTypes) || S, sortDisabled: n3 == null ? void 0 : n3.sortDisabled }).map((n4) => new n2({ fieldName: n4.name, isEditable: W(n4, e), label: n4.alias, format: y(n4), visible: d2(n4, { ...e, visibleFieldNames: i }) }));
}
function y(e) {
  switch (e.type) {
    case "small-integer":
    case "integer":
    case "single":
      return new m({ digitSeparator: true, places: 0 });
    case "double":
      return new m({ digitSeparator: true, places: 2 });
    case "string":
      return Pe(e.name) ? new m({ digitSeparator: true, places: 0 }) : void 0;
    default:
      return;
  }
}
function j() {
  return [new d(), new n()];
}
function I(e) {
  const t = v(e), { titleBase: n3 } = e;
  return t ? `${n3}: {${t.trim()}}` : n3 ?? "";
}
function v2(e) {
  var _a;
  if ("name" === (e.name && e.name.toLowerCase())) return true;
  const t = (_a = e.alias) == null ? void 0 : _a.toLowerCase();
  return "name" === t;
}
var S = ["geometry", "blob", "raster", "guid", "xml"];

export {
  p,
  c
};
//# sourceMappingURL=chunk-TNYXYQXK.js.map
