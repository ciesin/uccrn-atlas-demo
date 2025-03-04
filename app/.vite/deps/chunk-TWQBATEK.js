import {
  Ft
} from "./chunk-QD55HJQW.js";

// node_modules/@esri/calcite-components/dist/chunks/openCloseComponent.js
function i(e) {
  return e[e.openProp || "open"];
}
function s(e) {
  requestAnimationFrame(() => {
    e.transitionEl && Ft(
      e.transitionEl,
      e.transitionProp,
      () => {
        i(e) ? e.onBeforeOpen() : e.onBeforeClose();
      },
      () => {
        i(e) ? e.onOpen() : e.onClose();
      }
    );
  });
}

export {
  s
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/openCloseComponent.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-TWQBATEK.js.map
