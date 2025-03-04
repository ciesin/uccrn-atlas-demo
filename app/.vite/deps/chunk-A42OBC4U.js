import {
  e
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/intl/locale.js
var e2;
var t;
var _a, _b;
var o = ((_a = globalThis.esriConfig) == null ? void 0 : _a.locale) ?? ((_b = globalThis.dojoConfig) == null ? void 0 : _b.locale);
var _a2;
var a = (_a2 = globalThis.document) == null ? void 0 : _a2.documentElement;
function i() {
  var _a4;
  const n = a == null ? void 0 : a.getAttribute("lang"), e3 = (_a4 = globalThis.navigator) == null ? void 0 : _a4.language;
  return o ?? n ?? e3 ?? "en";
}
function r() {
  return void 0 === t && (t = i()), t;
}
function s(n = r()) {
  const e3 = /^([a-zA-Z]{2,3})(?:[_-][a-zA-Z0-9]+)*$/.exec(n);
  return e3 == null ? void 0 : e3[1].toLowerCase();
}
var d = [];
function h(e3) {
  return d.push(e3), e(() => d.splice(d.indexOf(e3), 1));
}
var b = [];
function p(e3) {
  return b.push(e3), e(() => b.splice(b.indexOf(e3), 1));
}
function v() {
  const n = e2 ?? i();
  t !== n && ([...b].forEach((e3) => e3(n)), t = n, [...d].forEach((e3) => e3(n)));
}
var _a3;
if ((_a3 = globalThis.addEventListener) == null ? void 0 : _a3.call(globalThis, "languagechange", v), a) {
  new MutationObserver(() => {
    v();
  }).observe(a, { attributeFilter: ["lang"] });
}

export {
  r,
  s,
  h,
  p
};
//# sourceMappingURL=chunk-A42OBC4U.js.map
