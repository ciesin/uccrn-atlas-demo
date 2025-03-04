import {
  e,
  g
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  t
} from "./chunk-STW6HRXO.js";
import {
  n
} from "./chunk-M6FNW7GP.js";
import {
  p
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/Clonable.js
var i = (s) => {
  let i2 = class extends s {
    clone() {
      var _a;
      const o = t(this);
      n(o, "unable to clone instance of non-accessor class");
      const s2 = o.metadata, c = o.store, i3 = {}, l2 = /* @__PURE__ */ new Map();
      for (const e2 in s2) {
        const o2 = s2[e2], n2 = c == null ? void 0 : c.originOf(e2), a4 = o2.clonable;
        if (o2.readOnly || false === a4 || n2 !== e.USER && n2 !== e.DEFAULTS && n2 !== e.WEB_MAP && n2 !== e.WEB_SCENE) continue;
        const f = this[e2];
        let p2 = null;
        p2 = "function" == typeof a4 ? a4(f) : "reference" === a4 ? f : p(f), null != f && null == p2 || (n2 === e.DEFAULTS ? l2.set(e2, p2) : i3[e2] = p2);
      }
      const a3 = new (0, Object.getPrototypeOf(this).constructor)(i3);
      if (l2.size) {
        const o2 = (_a = t(a3)) == null ? void 0 : _a.store;
        if (o2) for (const [s3, t2] of l2) o2.set(s3, t2, e.DEFAULTS);
      }
      return a3;
    }
  };
  return i2 = r([a("esri.core.Clonable")], i2), i2;
};
var l = class extends i(g) {
};
l = r([a("esri.core.Clonable")], l), function(o) {
  o.ClonableMixin = i;
}(l || (l = {}));
var a2 = l;

export {
  a2 as a
};
//# sourceMappingURL=chunk-WJNMFEXQ.js.map
