import {
  p
} from "./chunk-7LY6RE4Z.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  s2 as s
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  e2 as e,
  w
} from "./chunk-M6FNW7GP.js";
import {
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/Loadable.js
var i = "not-loaded";
var d = "loading";
var h = "failed";
var c = "loaded";
var u = (s3) => {
  let u2 = class extends s3 {
    constructor(...o) {
      super(...o), this._loadController = null, this.loadError = null, this.loadStatus = "not-loaded", this._set("loadWarnings", []), this.addResolvingPromise(new Promise((o2) => {
        const r2 = this.load.bind(this);
        this.load = (s4) => {
          const e2 = new Promise((o3, r3) => {
            const e3 = w(s4, r3);
            this.destroyed && r3(new s2("load:instance-destroyed", `Instance of '${this.declaredClass || this.constructor.name}' is already destroyed`, { instance: this })), this.when(o3, r3).finally(() => {
              e3 && e3.remove();
            });
          });
          if (this.loadStatus === i) {
            this._set("loadStatus", d);
            const o3 = this._loadController = new AbortController();
            r2({ signal: o3.signal });
          }
          return o2(), e2;
        };
      })), this.when(() => {
        this._set("loadStatus", c), this._loadController = null;
      }, (o2) => {
        this._set("loadStatus", h), this._set("loadError", o2), this._loadController = null;
      });
    }
    destroy() {
      this._loadController && (this._loadController = e(this._loadController), this._promiseProps.abort()), this._set("loadError", null), this._set("loadWarnings", []);
    }
    get loaded() {
      return this.loadStatus === c;
    }
    get loadWarnings() {
      return this._get("loadWarnings");
    }
    load() {
      return null;
    }
    cancelLoad() {
      var _a;
      return this.isFulfilled() || (this._set("loadError", new s2("load:cancelled", "Cancelled")), (_a = this._loadController) == null ? void 0 : _a.abort(), this._promiseProps.abort()), this;
    }
  };
  return r([m({ readOnly: true })], u2.prototype, "loaded", null), r([m({ readOnly: true })], u2.prototype, "loadError", void 0), r([m({ clonable: false })], u2.prototype, "loadStatus", void 0), r([m({ type: [s], readOnly: true })], u2.prototype, "loadWarnings", null), u2 = r([a("esri.core.Loadable")], u2), u2;
};
var p2 = class extends u(p) {
};
p2 = r([a("esri.core.Loadable")], p2), function(o) {
  function t(o2) {
    return !(!o2 || !o2.load);
  }
  o.LoadableMixin = u, o.isLoadable = t;
}(p2 || (p2 = {}));
var m2 = p2;

export {
  m2 as m
};
//# sourceMappingURL=chunk-CHL75CEP.js.map
