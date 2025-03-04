import {
  keyed
} from "./chunk-RWVOOLIP.js";
import {
  ref
} from "./chunk-6Q5AUVK4.js";
import {
  html,
  nothing,
  safeClassMap,
  svg
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/FloatingArrow.js
var h = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
};
var m = {
  width: 12,
  height: 6,
  strokeWidth: 1
};
var S = ({ floatingLayout: c, key: l, ref: d }) => {
  const { width: t, height: r, strokeWidth: o } = m, i = t / 2, e = c === "vertical", s = `M0,0 H${t} L${t - i},${r} Q${i},${r} ${i},${r} Z`;
  return keyed(l, html`<svg aria-hidden=true class=${safeClassMap(h.arrow)} height=${t} viewBox=${`0 0 ${t} ${t + (e ? 0 : o)}`} width=${t + (e ? o : 0)} ${ref(d)}>${svg`${svg`<path class=${safeClassMap(h.arrowStroke)} d=${s ?? nothing} fill=none stroke-width=${o + 1} />` || ""}<path d=${s ?? nothing} stroke=none />`}</svg>`);
};

export {
  S
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/FloatingArrow.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-FXH7S4UL.js.map
