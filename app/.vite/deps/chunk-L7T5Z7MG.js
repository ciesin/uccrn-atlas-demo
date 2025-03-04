import {
  r
} from "./chunk-577U4F6A.js";

// node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleObservable.js
var s = class extends r {
  notify() {
    const o = this._observers;
    if (o && o.length > 0) {
      const s2 = o.slice();
      for (const o2 of s2) o2.onInvalidated(), o2.onCommitted();
    }
  }
};

export {
  s
};
//# sourceMappingURL=chunk-L7T5Z7MG.js.map
