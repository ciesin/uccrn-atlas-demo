import {
  C
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  i2 as i,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/core/CollectionFlattener.js
var l = class extends V {
  constructor(t) {
    super(t), this.getCollections = null;
  }
  initialize() {
    this.addHandles(i(() => this._refresh(), C));
  }
  destroy() {
    this.getCollections = null;
  }
  _refresh() {
    const t = null != this.getCollections ? this.getCollections() : null;
    if (null == t) return void this.removeAll();
    let o = 0;
    for (const e of t) null != e && (o = this._processCollection(o, e));
    this.splice(o, this.length);
  }
  _createNewInstance(t) {
    return new V(t);
  }
  _processCollection(t, o) {
    if (!o) return t;
    const e = this.itemFilterFunction ?? ((t2) => !!t2);
    for (const s of o) if (s) {
      if (e(s)) {
        const o2 = this.indexOf(s, t);
        o2 >= 0 ? o2 !== t && this.reorder(s, t) : this.add(s, t), ++t;
      }
      if (this.getChildrenFunction) {
        const o2 = this.getChildrenFunction(s);
        if (Array.isArray(o2)) for (const e2 of o2) t = this._processCollection(t, e2);
        else t = this._processCollection(t, o2);
      }
    }
    return t;
  }
};
r([m()], l.prototype, "getCollections", void 0), r([m()], l.prototype, "getChildrenFunction", void 0), r([m()], l.prototype, "itemFilterFunction", void 0), l = r([a("esri.core.CollectionFlattener")], l);
var n = l;

export {
  n
};
//# sourceMappingURL=chunk-45XNKFWX.js.map
