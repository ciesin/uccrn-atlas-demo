import {
  d as d2,
  e as e2,
  f as f4,
  n2 as n5,
  t as t2
} from "./chunk-7EIXRVA4.js";
import {
  c,
  e,
  o as o2,
  t,
  v
} from "./chunk-BSRIVWBN.js";
import {
  I
} from "./chunk-RVUV2HD7.js";
import {
  n as n4
} from "./chunk-5EWD56QJ.js";
import {
  f as f3
} from "./chunk-NALU24NB.js";
import {
  A,
  d,
  p
} from "./chunk-YSPSOPLL.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  p as p2
} from "./chunk-7LY6RE4Z.js";
import {
  h
} from "./chunk-A42OBC4U.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
import {
  n as n3
} from "./chunk-7AOPU62X.js";
import {
  _
} from "./chunk-F7TCEOHX.js";
import {
  m,
  s4 as s
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  f
} from "./chunk-STW6HRXO.js";
import {
  f2,
  k,
  n2,
  o4 as o,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@esri/calcite-components/dist/index.js
var e3 = false;
var o3 = (t4) => {
  e3 = true, I(t4);
};

// node_modules/@arcgis/core/widgets/support/componentsUtils.js
var n6;
function r2() {
  e3 || o3(_(n3(n6)));
}
function c2(t4) {
  var _a;
  const o5 = [];
  for (const s4 of Object.keys(t4)) customElements.get(`calcite-${s4}`) || o5.push((_a = t4[s4]) == null ? void 0 : _a.call(t4));
  return o5.length > 0 ? Promise.all(o5) : null;
}
n6 = "components/assets";

// node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js
function e4(e8) {
  return (s4, r4) => {
    s4.hasOwnProperty("_messageBundleProps") || (s4._messageBundleProps = s4._messageBundleProps ? s4._messageBundleProps.slice() : []);
    s4._messageBundleProps.push({ bundlePath: e8, propertyName: r4 });
  };
}

// node_modules/@arcgis/core/core/domUtils.js
function n7(n10) {
  return "string" == typeof n10 ? document.getElementById(n10) : n10 ?? null;
}
function t3(n10, t4) {
  for (; ; ) {
    const e8 = n10.firstChild;
    if (!e8) break;
    t4.appendChild(e8);
  }
}

// node_modules/@arcgis/core/libs/maquette-advanced-projector/advanced-projector-options.js
var e5 = { handleInterceptedEvent: (e8, p3, t4, n10) => (e8.scheduleRender(), p3.properties[`on${n10.type}`].apply(p3.properties.bind || t4, [n10])) };

// node_modules/@arcgis/core/libs/maquette-advanced-projector/utils.js
var e6 = { namespace: void 0, performanceLogger: () => {
}, eventHandlerInterceptor: void 0, styleApplyer: (e8, r4, t4) => {
  "-" === r4.charAt(0) ? e8.style.setProperty(r4, t4) : e8.style[r4] = t4;
} };
var r3 = (r4) => ({ ...e6, ...r4 });

// node_modules/@arcgis/core/libs/maquette-advanced-projector/projector.js
var o4 = (e8, r4) => {
  const t4 = [];
  for (; e8 && e8 !== r4; ) t4.push(e8), e8 = e8.parentNode;
  return t4;
};
var n8 = (e8, r4) => e8.find(r4);
var d3 = (e8, r4, t4 = false) => {
  let o5 = e8;
  return r4.forEach((e9, d4) => {
    const s4 = (o5 == null ? void 0 : o5.children) ? n8(o5.children, (r5) => r5.domNode === e9) : void 0;
    t4 && !s4 && d4 !== r4.length - 1 || (o5 = s4);
  }), o5;
};
var s3 = (n10) => {
  let s4;
  const c3 = { ...e5, ...n10 }, i2 = r3(c3), a3 = i2.performanceLogger;
  let m2, p3 = true, l = false;
  const f5 = [], u2 = [], h2 = (e8, r4, t4) => {
    var _a;
    let n11;
    i2.eventHandlerInterceptor = (e9, r5, t5, i3) => function(e10) {
      let r6;
      a3("domEvent", e10);
      const t6 = o4(e10.currentTarget, n11.domNode), i4 = t6.some((e11) => {
        var _a2;
        return customElements.get((_a2 = e11 == null ? void 0 : e11.tagName) == null ? void 0 : _a2.toLowerCase());
      });
      if (e10.eventPhase === Event.CAPTURING_PHASE || !i4) t6.reverse(), r6 = d3(n11.getLastRender(), t6);
      else {
        const t7 = e10.composedPath(), o5 = t7.slice(t7.indexOf(e10.currentTarget), t7.indexOf(n11.domNode)).reverse();
        r6 = d3(n11.getLastRender(), o5, true);
      }
      let m4;
      return r6 && (m4 = c3.handleInterceptedEvent(s4, r6, this, e10)), a3("domEventProcessed", e10), m4;
    }, (_a = c3.postProcessProjectionOptions) == null ? void 0 : _a.call(c3, i2);
    const m3 = t4();
    n11 = e8(r4, m3, i2), i2.eventHandlerInterceptor = void 0, f5.push(n11), u2.push(t4), c3.afterFirstVNodeRendered && c3.afterFirstVNodeRendered(n11, m3);
  };
  let v2 = () => {
    if (m2 = void 0, p3) {
      p3 = false, a3("renderStart", void 0);
      for (let r4 = 0; r4 < f5.length; r4++) {
        const t4 = u2[r4]();
        a3("rendered", void 0);
        try {
          f5[r4].update(t4);
        } catch (e8) {
          console.error(e8);
        }
        a3("patched", void 0);
      }
      a3("renderDone", void 0), p3 = true;
    }
  };
  return c3.modifyDoRenderImplementation && (v2 = c3.modifyDoRenderImplementation(v2, f5, u2)), s4 = { renderNow: v2, scheduleRender: () => {
    m2 || l || (m2 = requestAnimationFrame(v2));
  }, stop: () => {
    m2 && (cancelAnimationFrame(m2), m2 = void 0), l = true;
  }, resume: () => {
    l = false, p3 = true, s4.scheduleRender();
  }, append: (r4, t4) => {
    h2(n5.append, r4, t4);
  }, insertBefore: (r4, t4) => {
    h2(n5.insertBefore, r4, t4);
  }, merge: (r4, t4) => {
    h2(n5.merge, r4, t4);
  }, replace: (r4, t4) => {
    h2(n5.replace, r4, t4);
  }, detach: (e8) => {
    for (let r4 = 0; r4 < u2.length; r4++) if (u2[r4] === e8) return u2.splice(r4, 1), f5.splice(r4, 1)[0];
    throw new Error("renderFunction was not found");
  } }, s4;
};

// node_modules/@arcgis/core/widgets/support/tests.js
var e7 = /* @__PURE__ */ new Set();
function n9(n10) {
  e7.add(n10), n10.finally(() => e7.delete(n10));
}

// node_modules/@arcgis/core/widgets/Widget.js
var $;
var U = "esri.widgets.Widget";
var H = 0;
function z(e8, t4) {
  const r4 = Object.prototype.hasOwnProperty;
  for (const s4 in t4) r4.call(t4, s4) && r4.call(e8, s4) && (null != e8[s4] && null != t4[s4] && "object" == typeof e8[s4] && "object" == typeof t4[s4] ? z(e8[s4], t4[s4]) : e8[s4] = t4[s4]);
  return e8;
}
var x = s3({ postProcessProjectionOptions(e8) {
  const t4 = e8.eventHandlerInterceptor, r4 = /capture$/i;
  e8.eventHandlerInterceptor = (e9, s4, o5, i2) => {
    const n10 = t4 == null ? void 0 : t4(e9, s4, o5, i2), a3 = r4.test(e9);
    if (!((e9 = e9.replace(r4, "")).toLowerCase() in o5) || a3) {
      const t5 = e9[2].toLowerCase() + e9.slice(3), r5 = (e10) => n10 == null ? void 0 : n10.call(o5, e10);
      o5.addEventListener(t5, r5, a3);
      const s5 = () => o5.removeEventListener(t5, r5, a3), l = i2.afterRemoved;
      i2.afterRemoved = (e10) => {
        l == null ? void 0 : l(e10), s5();
      };
    }
    return n10;
  };
}, handleInterceptedEvent(e8, t4, r4, s4) {
  const { eventPhase: o5, type: i2 } = s4, n10 = o5 === Event.CAPTURING_PHASE;
  let a3 = `on${i2}${n10 ? "capture" : ""}`;
  const l = t4.properties;
  (l && a3 in l || (a3 = `on${i2[0].toUpperCase()}${i2.slice(1)}${n10 ? "Capture" : ""}`, l && a3 in l)) && (t(), e8.scheduleRender(), l[a3].call(l.bind || r4, s4));
} });
var A2 = false;
var M = class extends p2.EsriPromiseMixin(i.EventedAccessor) {
  constructor(e8, t4) {
    super(e8, t4), this._attached = false, this._projector = x, this._readyForTrueRender = false, this.key = this, this.autoRenderingEnabled = true, this._loadLocale = k(async () => {
      var _a;
      if ((_a = this._messageBundleProps) == null ? void 0 : _a.length) {
        const e9 = await Promise.allSettled(this._messageBundleProps.map(async ({ bundlePath: e10, propertyName: t5 }) => {
          if (this.destroyed) return;
          let r5 = await f3(e10);
          this.uiStrings && Object.keys(this.uiStrings) && (r5 = z(a(r5), this.uiStrings)), this[t5] = r5;
        }));
        if (this.destroyed) return;
        for (const t5 of e9) "rejected" === t5.status && n.getLogger(this).error("widget-intl:locale-error", this.declaredClass, t5.reason);
      }
      await this.loadLocale();
    }), r2();
    const r4 = "esri-widget-uid-" + n4(), s4 = this.render.bind(this);
    this._trackingTarget = new s(() => {
      this.autoRenderingEnabled && this.scheduleRender();
    });
    const o5 = () => ({ vnodeSelector: "div", properties: { key: `${r4}-hidden`, class: "", styles: { display: "none" } }, domNode: null, children: void 0, text: void 0 }), a3 = () => {
      var _a, _b;
      if (!this._readyForTrueRender || this.destroyed) return null;
      const e9 = s4() ?? o5(), t5 = e9.properties ?? (e9.properties = {});
      if (t5.key ?? (t5.key = r4), f4(e9.vnodeSelector)) {
        if (!this.visible) return o5();
      } else this.visible ? t5.styles || (t5.styles = {}) : (t5.class = "", t5.styles = { display: "none" }), (_a = t5.styles).display ?? (_a.display = "");
      let i2 = 0;
      return (_b = e9.children) == null ? void 0 : _b.forEach((e10) => {
        var _a2;
        f4(e10.vnodeSelector) || (e10.properties ?? (e10.properties = {}), (_a2 = e10.properties).key ?? (_a2.key = `${this.id}--${i2++}`));
      }), d2(this, e9);
    };
    this.render = () => {
      if (A2) return a3();
      let e9 = e(this) ?? null;
      if (e9) return e9;
      this._trackingTarget.clear(), A2 = true;
      try {
        e9 = f(this._trackingTarget, a3);
      } catch (t5) {
        throw n.getLogger(this).error(t5), t5;
      } finally {
        A2 = false;
      }
      return e9 && c(this, e9), e9;
    };
    const l = this.beforeFirstRender();
    l ? this._resourcesFetch = l.then(() => {
      this._readyForTrueRender = true, this._postInitialize();
    }) : (this._resourcesFetch = Promise.resolve().then(() => {
      this._postInitialize();
    }), this._readyForTrueRender = true), this.addResolvingPromise(this._resourcesFetch), n9(this._resourcesFetch);
  }
  normalizeCtorArgs(e8, t4) {
    const r4 = { ...e8 };
    return t4 && (r4.container = t4), r4;
  }
  postInitialize() {
  }
  beforeFirstRender() {
    var _a;
    const e8 = this.loadDependencies();
    return ((_a = this._messageBundleProps) == null ? void 0 : _a.length) || e8 ? Promise.all([e8, this._loadLocale()]).then(() => {
    }).catch(f2) : null;
  }
  loadDependencies() {
    return null;
  }
  loadLocale() {
    return null;
  }
  destroy() {
    this.destroyed || (u(this._trackingTarget), u(this.viewModel), this._detach(this.container), this._set("container", null), this._emitter.clear(), this.render = () => null, this._projector = null, o2(this));
  }
  set container(e8) {
    this._get("container") || this._set("container", e8);
  }
  castContainer(e8) {
    return n7(e8);
  }
  get domNode() {
    return this.container;
  }
  set domNode(e8) {
    this.container = e8;
  }
  get icon() {
    return null;
  }
  set icon(e8) {
    this._overrideIfSome("icon", e8);
  }
  get id() {
    var _a;
    return this._get("id") || ((_a = this.container) == null ? void 0 : _a.id) || Date.now().toString(16) + "-widget-" + H++;
  }
  set id(e8) {
    e8 && this._set("id", e8);
  }
  get label() {
    return this.declaredClass.split(".").pop();
  }
  set label(e8) {
    this._overrideIfSome("label", e8);
  }
  get renderable() {
    return this._resourcesFetch;
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e8) {
    this._set("visible", e8);
  }
  get [($ = t2, e2)]() {
    return { projector: this._projector };
  }
  render() {
    throw new Error("not implemented");
  }
  scheduleRender() {
    this.destroyed || (o2(this), this._projector.scheduleRender());
  }
  classes(...e8) {
    return v.apply(this, e8);
  }
  renderNow() {
    o2(this), this._projector.renderNow();
  }
  _postInitialize() {
    var _a;
    if (this.destroyed) return;
    this.scheduleRender(), ((_a = this._delegatedEventNames) == null ? void 0 : _a.length) && this.addHandles(d(() => this.viewModel, (e9, t4) => {
      t4 && this.removeHandles("delegated-events"), e9 && n2(e9) && this.addHandles(this._delegatedEventNames.map((t5) => o(e9, t5, (e10) => {
        this.emit(t5, e10);
      })), "delegated-events");
    }, A)), this.postInitialize();
    const e8 = async () => {
      await this._loadLocale().catch(f2), this.scheduleRender();
    };
    this.addHandles([h(e8), d(() => this.uiStrings, e8), p(() => this.container, (e9) => {
      this.destroyed || this._attach(e9);
    }, { initial: true, once: true })]);
  }
  _attach(e8) {
    e8 && (this._projector.merge(e8, this.render), this._attached = true);
  }
  _detach(e8) {
    var _a;
    this._attached && (this._projector.detach(this.render), this._attached = false), (_a = e8 == null ? void 0 : e8.parentNode) == null ? void 0 : _a.removeChild(e8);
  }
};
M[$] = true, M.vnodeSelector = "div", r([m()], M.prototype, "_readyForTrueRender", void 0), r([m({ value: null })], M.prototype, "container", null), r([s2("container")], M.prototype, "castContainer", null), r([m()], M.prototype, "icon", null), r([m()], M.prototype, "id", null), r([m()], M.prototype, "label", null), r([m()], M.prototype, "renderable", null), r([m()], M.prototype, "uiStrings", void 0), r([m()], M.prototype, "viewModel", void 0), r([m({ value: true })], M.prototype, "visible", null), r([m()], M.prototype, "key", void 0), r([m()], M.prototype, "children", void 0), r([m()], M.prototype, "afterCreate", void 0), r([m()], M.prototype, "afterUpdate", void 0), r([m()], M.prototype, "afterRemoved", void 0), M = r([a2(U)], M);
var O = M;

export {
  c2 as c,
  e4 as e,
  n7 as n,
  t3 as t,
  O
};
/*! Bundled license information:

@esri/calcite-components/dist/index.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-4O2ECRMV.js.map
