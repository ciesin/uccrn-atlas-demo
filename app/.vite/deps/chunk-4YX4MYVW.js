import {
  html,
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/interactive.js
function s() {
  const { disabled: e } = this;
  e || HTMLElement.prototype.click.call(this);
}
function i(e) {
  e.target.disabled && e.preventDefault();
}
var r = ["mousedown", "mouseup", "click"];
function a(e) {
  e.target.disabled && (e.stopImmediatePropagation(), e.preventDefault());
}
var n = { capture: true };
function m(e) {
  if (e.disabled) {
    e.el.setAttribute("aria-disabled", "true"), e.el.contains(document.activeElement) && document.activeElement.blur(), l(e);
    return;
  }
  u(e), e.el.removeAttribute("aria-disabled");
}
function l(e) {
  e.el.click = s, d(e.el);
}
function d(e) {
  e.addEventListener("pointerdown", i, n), r.forEach((t) => e.addEventListener(t, a, n));
}
function u(e) {
  delete e.el.click, f(e.el);
}
function f(e) {
  e.removeEventListener("pointerdown", i, n), r.forEach((t) => e.removeEventListener(t, a, n));
}
var v = {
  container: "interaction-container"
};
var p = ({ children: e, disabled: t }) => html`<div class=${safeClassMap(v.container)} .inert=${t}>${e}</div>`;

export {
  m,
  p
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/interactive.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-4YX4MYVW.js.map
