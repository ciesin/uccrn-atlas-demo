import {
  c
} from "./chunk-JLFV7EBO.js";

// node_modules/@arcgis/core/views/support/screenUtils.js
function n(t) {
  return c(t.x, t.y);
}
function i(t, n2) {
  var _a;
  const c2 = (_a = t instanceof HTMLElement ? t : t.surface) == null ? void 0 : _a.getBoundingClientRect();
  return c2 ? c(n2.clientX - c2.left, n2.clientY - c2.top) : c(0, 0);
}
function r(e, t) {
  return t instanceof Event ? i(e, t) : n(t);
}
function o(e) {
  if (e instanceof Event) return true;
  if ("object" == typeof e && "type" in e) {
    switch (e.type) {
      case "click":
      case "double-click":
      case "pointer-down":
      case "pointer-drag":
      case "pointer-enter":
      case "pointer-leave":
      case "pointer-up":
      case "pointer-move":
      case "immediate-click":
      case "immediate-double-click":
      case "hold":
      case "drag":
      case "mouse-wheel":
        return true;
      default:
        return false;
    }
  }
  return false;
}

export {
  n,
  i,
  r,
  o
};
//# sourceMappingURL=chunk-XNRLY735.js.map
