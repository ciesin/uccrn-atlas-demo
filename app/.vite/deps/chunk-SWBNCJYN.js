import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/core/Identifiable.js
var i = 0;
var r2 = (r3) => {
  let s2 = class extends r3 {
    constructor(...e) {
      super(...e), Object.defineProperty(this, "uid", { writable: false, configurable: false, value: Date.now().toString(16) + "-object-" + i++ });
    }
  };
  return s2 = r([a("esri.core.Identifiable")], s2), s2;
};
var s = (r3) => {
  let s2 = class extends r3 {
    constructor(...e) {
      super(...e), Object.defineProperty(this, "uid", { writable: false, configurable: false, value: i++ });
    }
  };
  return s2 = r([a("esri.core.Identifiable.NumericIdentifiable")], s2), s2;
};
var c = class extends r2(class {
}) {
};
c = r([a("esri.core.Identifiable")], c), function(e) {
  e.IdentifiableMixin = r2, e.NumericIdentifiableMixin = s;
}(c || (c = {}));
var n = c;

export {
  n
};
//# sourceMappingURL=chunk-SWBNCJYN.js.map
