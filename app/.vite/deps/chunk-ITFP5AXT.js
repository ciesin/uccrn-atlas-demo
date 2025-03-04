import {
  n as n3
} from "./chunk-4ATVMSVD.js";
import {
  r as r3
} from "./chunk-F4RJF7LN.js";
import {
  g as g2,
  t
} from "./chunk-2DHEJENI.js";
import {
  c3 as c,
  u
} from "./chunk-RD3QRDRK.js";
import {
  s as s2
} from "./chunk-UQ4WWETM.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  j
} from "./chunk-T7KGE6VP.js";
import {
  n as n2
} from "./chunk-MLOZK7WX.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  n
} from "./chunk-YUVX6H42.js";
import {
  A,
  d,
  v
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  r2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/linkChart/utils.js
function e(e3) {
  return null != e3 && "object" == typeof e3 && "2d" === e3.type && "linkchart" === e3.view2dType;
}

// node_modules/@arcgis/core/views/2d/layers/support/HighlightCounter.js
var i = class extends g {
  constructor() {
    super(...arguments), this._idToCounters = new s2();
  }
  get size() {
    return this._idToCounters.size;
  }
  get objectIds() {
    return this._idToCounters.keys();
  }
  get highlightNamesByObjectId() {
    return n4(this._idToCounters);
  }
  add(e3, t3) {
    let s4 = false;
    for (const r4 of e3) {
      const e4 = r2(this._idToCounters, r4, () => (s4 = true, /* @__PURE__ */ new Map())), i3 = e4.get(t3) ?? 0;
      i3 || (s4 = true), e4.set(t3, i3 + 1);
    }
    return s4;
  }
  delete(e3, t3) {
    let o = false;
    for (const s4 of e3) {
      const e4 = this._idToCounters.get(s4);
      if (!e4) continue;
      let r4 = e4.get(t3);
      null != r4 && (r4--, r4 > 0 ? e4.set(t3, r4) : (e4.delete(t3), o = true), 0 === e4.size && (this._idToCounters.delete(s4), o = true));
    }
    return o;
  }
};
function* n4(e3) {
  for (const [t3, o] of e3) yield [t3, o.keys()];
}
i = r([a("esri.views.2d.layers.support.HighlightCounter")], i);

// node_modules/@arcgis/core/views/layers/support/ClipArea.js
var t2 = class extends S {
  get version() {
    return this.commitVersionProperties(), (this._get("version") || 0) + 1;
  }
};
r([m({ readOnly: true })], t2.prototype, "version", null), t2 = r([a("esri.views.layers.support.ClipArea")], t2);
var p = t2;

// node_modules/@arcgis/core/views/layers/support/ClipRect.js
var s3;
var i2 = s3 = class extends p {
  constructor(t3) {
    super(t3), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new s3({ left: this.left, right: this.right, top: this.top, bottom: this.bottom });
  }
  commitVersionProperties() {
    this.commitProperty("left"), this.commitProperty("right"), this.commitProperty("top"), this.commitProperty("bottom");
  }
};
r([m({ type: [Number, String], json: { write: true } })], i2.prototype, "left", void 0), r([m({ type: [Number, String], json: { write: true } })], i2.prototype, "right", void 0), r([m({ type: [Number, String], json: { write: true } })], i2.prototype, "top", void 0), r([m({ type: [Number, String], json: { write: true } })], i2.prototype, "bottom", void 0), i2 = s3 = r([a("esri.views.layers.support.ClipRect")], i2);
var p2 = i2;

// node_modules/@arcgis/core/views/layers/support/Geometry.js
var y;
var c2 = { base: n, key: "type", typeMap: { extent: w, polygon: j } };
var n5 = y = class extends p {
  constructor(o) {
    super(o), this.type = "geometry", this.geometry = null;
  }
  clone() {
    var _a;
    return new y({ geometry: ((_a = this.geometry) == null ? void 0 : _a.clone()) ?? null });
  }
  commitVersionProperties() {
    this.commitProperty("geometry");
  }
};
r([m({ types: c2, json: { read: f, write: true } })], n5.prototype, "geometry", void 0), n5 = y = r([a("esri.views.layers.support.Geometry")], n5);
var a2 = n5;

// node_modules/@arcgis/core/views/layers/support/Path.js
var e2 = class extends p {
  constructor(r4) {
    super(r4), this.type = "path", this.path = [];
  }
  commitVersionProperties() {
    this.commitProperty("path");
  }
};
r([m({ type: [[[Number]]], json: { write: true } })], e2.prototype, "path", void 0), e2 = r([a("esri.views.layers.support.Path")], e2);
var p3 = e2;

// node_modules/@arcgis/core/views/2d/layers/LayerView2D.js
var R = V.ofType({ key: "type", base: null, typeMap: { rect: p2, path: p3, geometry: a2 } });
var _ = new (V.ofType(u))();
var S2 = (m2) => {
  let f2 = class extends m2 {
    constructor() {
      super(...arguments), this._highlightCounter = new i(), this.attached = false, this.clips = new R(), this.highlights = null, this.lastUpdateId = -1, this.moving = false, this.updateRequested = false, this._visibleAtCurrentScale = true;
    }
    initialize() {
      var _a, _b, _c;
      const t3 = ((_a = this.view) == null ? void 0 : _a.spatialReferenceLocked) ?? true, e3 = (_b = this.view) == null ? void 0 : _b.spatialReference;
      e3 && t3 && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer }))) : (this.container || (this.container = new n3()), this.container.fadeTransitionEnabled = true, this.container.visible = false, this.container.endTransitions(), this.addHandles([d(() => this.suspended, (t4) => {
        this.container && (this.container.visible = !t4);
      }, A), d(() => this.updateSuspended, (t4) => {
        this.view && !t4 && this.updateRequested && this.view.requestUpdate();
      }, A), d(() => {
        var _a2;
        return ((_a2 = this.layer) == null ? void 0 : _a2.opacity) ?? 1;
      }, (t4) => {
        this.container && (this.container.opacity = t4);
      }, A), d(() => this.layer && "blendMode" in this.layer ? this.layer.blendMode : "normal", (t4) => {
        this.container && (this.container.blendMode = t4);
      }, A), d(() => this.layer && "effect" in this.layer ? this.layer.effect : null, (t4) => {
        this.container && (this.container.effect = t4);
      }, A), d(() => this._mergedHighlights.items.map((t4) => ({ name: t4.name, options: { fillColor: t4.color, haloColor: t4.haloColor, fillOpacity: t4.fillOpacity, haloOpacity: t4.haloOpacity, haloWidth: t4.haloWidth, haloBlur: t4.haloBlur } })), () => {
        this.container.highlightGradient = c(this.container.highlightGradient, this._mergedHighlights.items);
      }, A), d(() => this._mergedHighlights.items.map((t4) => t4.name), () => {
        this._processHighlight();
      }), v(() => this.clips, "change", () => {
        this.container && (this.container.clips = this.clips);
      }, A), d(() => {
        var _a2;
        return { scale: (_a2 = this.view) == null ? void 0 : _a2.scale, scaleRange: this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null };
      }, ({ scale: t4, scaleRange: e4 }) => {
        const i3 = r3(e4, t4);
        i3 !== this._visibleAtCurrentScale && (this._visibleAtCurrentScale = i3);
      }, A)], "constructor"), ((_c = this.view) == null ? void 0 : _c.whenLayerView) ? this.view.whenLayerView(this.layer).then((t4) => {
        t4 === this && this.processAttach();
      }, () => {
      }) : this.when().then(() => {
        this.processAttach();
      }, () => {
      }));
    }
    destroy() {
      this.processDetach(), this.updateRequested = false;
    }
    get highlightOptions() {
      return t(this);
    }
    set highlightOptions(t3) {
      g2(this, t3);
    }
    get hasHighlight() {
      return this._highlightCounter.size > 0;
    }
    get _mergedHighlights() {
      if (!this.view) return _;
      if (!this.highlights) return this.view.highlights;
      const t3 = this.view.highlights.clone();
      for (const e3 of this.highlights) {
        const i3 = t3.find((t4) => t4.name === e3.name);
        i3 && i3.assignFrom(e3);
      }
      return t3;
    }
    get highlightIds() {
      return Array.from(this._highlightCounter.objectIds);
    }
    get scheduler() {
      return this.view.scheduler;
    }
    get spatialReferenceSupported() {
      var _a;
      const t3 = (_a = this.view) == null ? void 0 : _a.spatialReference;
      return null == t3 || this.supportsSpatialReference(t3);
    }
    get updating() {
      var _a;
      return this.spatialReferenceSupported && (!this.attached || !this.suspended && (this.updateRequested || this.isUpdating()) || !!((_a = this._updatingHandles) == null ? void 0 : _a.updating) || this.container.transitioning);
    }
    get visibleAtCurrentScale() {
      return this._visibleAtCurrentScale;
    }
    processAttach() {
      this.isResolved() && !this.attached && !this.destroyed && this.spatialReferenceSupported && (this.attach(), this.attached = true, this.requestUpdate());
    }
    processDetach() {
      this.attached && (this.attached = false, this.removeHandles("attach"), this.detach(), this.updateRequested = false);
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = true, this.updateSuspended || this.view.requestUpdate());
    }
    processUpdate(t3) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", t3), this.updateRequested && !this.updateSuspended && (this.updateRequested = false, this.update(t3))) : this.updateRequested = false;
    }
    hitTest(t3, e3) {
      return Promise.resolve(null);
    }
    supportsSpatialReference(t3) {
      return true;
    }
    canResume() {
      var _a;
      if (!this.spatialReferenceSupported) return false;
      switch ((_a = this.layer) == null ? void 0 : _a.type) {
        case "link-chart":
        case "knowledge-graph-sublayer":
        case "graphics":
          break;
        default:
          if (e(this.view) && !this.view.inGeographicLayout) return false;
      }
      return !!super.canResume() && this.visibleAtCurrentScale;
    }
    getSuspendInfo() {
      const t3 = super.getSuspendInfo(), e3 = !this.spatialReferenceSupported;
      return e3 && (t3.spatialReferenceNotSupported = e3), t3;
    }
    addAttachHandles(t3) {
      this.addHandles(t3, "attach");
    }
    _addHighlights(t3, e3) {
      this._highlightCounter.add(t3, e3) && this._processHighlight();
    }
    _removeHighlights(t3, e3) {
      this._highlightCounter.delete(t3, e3) && this._processHighlight();
    }
    _processHighlight() {
    }
    _getHighlights() {
      const t3 = [];
      for (const [e3, i3] of this._highlightCounter.highlightNamesByObjectId) {
        const s4 = this._getHighlightBits(i3);
        t3.push({ objectId: e3, highlightFlags: s4 });
      }
      return t3;
    }
    _getHighlightBits(t3) {
      const e3 = new Set(t3);
      let i3 = 1, s4 = 0;
      if (!this.view) return 0;
      const r4 = this._mergedHighlights;
      for (const { name: h } of r4) e3.delete(h) && (s4 = i3), i3 <<= 1;
      return s4;
    }
  };
  return r([m()], f2.prototype, "attached", void 0), r([m({ type: R, set(t3) {
    const e3 = n2(t3, this._get("clips"), R);
    this._set("clips", e3);
  } })], f2.prototype, "clips", void 0), r([m()], f2.prototype, "container", void 0), r([m({ type: u })], f2.prototype, "highlightOptions", null), r([m({ type: V.ofType(u) })], f2.prototype, "highlights", void 0), r([m()], f2.prototype, "_mergedHighlights", null), r([m()], f2.prototype, "moving", void 0), r([m({ readOnly: true })], f2.prototype, "spatialReferenceSupported", null), r([m({ readOnly: true })], f2.prototype, "updateParameters", void 0), r([m()], f2.prototype, "updateRequested", void 0), r([m()], f2.prototype, "updating", null), r([m()], f2.prototype, "view", void 0), r([m()], f2.prototype, "_visibleAtCurrentScale", void 0), r([m({ readOnly: true })], f2.prototype, "visibleAtCurrentScale", null), f2 = r([a("esri.views.2d.layers.LayerView2D")], f2), f2;
};

export {
  a2 as a,
  S2 as S
};
//# sourceMappingURL=chunk-ITFP5AXT.js.map
