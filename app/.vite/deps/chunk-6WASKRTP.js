import {
  o
} from "./chunk-5EWD56QJ.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  L
} from "./chunk-M6FNW7GP.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/versionManagement/support/versionManagementUtils.js
var t = o();
var n = /* @__PURE__ */ new Map();
var s = /* @__PURE__ */ new Map();
async function o2(r2, t2, s2) {
  if (!r2 || !s2) return false;
  if (!t2) return true;
  const a4 = new URL(r2).host;
  let o3 = n.get(a4);
  if (!o3) {
    const t3 = r2.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, "");
    o3 = (await P(t3, { responseType: "json", query: { f: "json" } })).data.defaultVersionName;
  }
  return o3 === t2;
}
async function i2(e, r2, n2 = false) {
  var _a, _b, _c;
  if (!e || !r2) return true;
  const a4 = e.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, ""), o3 = (_a = s.get(a4)) == null ? void 0 : _a.entries();
  if (o3) {
    for (const [s2, i3] of o3) if (i3.name === r2) {
      const e2 = !((_b = i3.stack) == null ? void 0 : _b.hasForwardEdits());
      if (!e2 && n2) {
        const [{ deleteForwardEdits: e3 }, { default: r3 }] = await Promise.all([import("./deleteForwardEdits-R2CZJI34.js"), import("./DeleteForwardEditsParameters-M7YBPYEI.js")]), n3 = await e3(a4, s2, new r3({ sessionId: t, moment: i3.moment }));
        return n3.success && ((_c = i3.stack) == null ? void 0 : _c.clearForwardEdits()), n3.success;
      }
      return e2;
    }
  }
  return true;
}
function c(e, r2) {
  var _a;
  if (!e) return false;
  const t2 = e.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, ""), n2 = (_a = s.get(t2)) == null ? void 0 : _a.entries();
  if (n2) {
    for (const [s2, a4] of n2) if (a4.name === r2) {
      return "edit" === a4.lockType;
    }
  }
  return false;
}

// node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var a3 = new i.EventEmitter();
function l(t2) {
  return a3.on("apply-edits", new WeakRef(t2));
}
function h(t2) {
  return a3.on("update-moment", new WeakRef(t2));
}
function c2(t2, e, i3 = null, r2 = false) {
  const d = L();
  return r2 = null == e || r2, a3.emit("apply-edits", { serviceUrl: t2, layerId: e, gdbVersion: i3, mayReceiveServiceEdits: r2, result: d.promise }), d;
}
var m2 = Symbol();
function p(t2) {
  return null != t2 && "object" == typeof t2 && m2 in t2;
}
function b(t2) {
  return null != t2 && "object" == typeof t2 && "gdbVersion" in t2;
}
function g(t2, e, i3) {
  const s2 = new URL(t2).host, r2 = n.get(s2), d = (t3) => !t3 || t3 === r2;
  return d(e) && d(i3) || e === i3;
}
var F = (e) => {
  var s2;
  let o3 = class extends e {
    constructor(...t2) {
      super(...t2), this[s2] = true, this._applyEditsHandler = (t3) => {
        const { serviceUrl: e2, layerId: s3, gdbVersion: r2, mayReceiveServiceEdits: d, result: o4 } = t3, n2 = e2 === this.url, a4 = null != s3 && null != this.layerId && s3 === this.layerId, l2 = b(this), h2 = b(this) && g(e2, r2, this.gdbVersion);
        if (!n2 || l2 && !h2 || !a4 && !d) return;
        const c3 = o4.then((t4) => {
          var _a;
          if (this.lastEditsEventDate = /* @__PURE__ */ new Date(), a4 && (t4.addedFeatures.length || t4.updatedFeatures.length || t4.deletedFeatures.length || t4.addedAttachments.length || t4.updatedAttachments.length || t4.deletedAttachments.length)) return this.emit("edits", a(t4)), t4;
          const s4 = (_a = t4.editedFeatures) == null ? void 0 : _a.find(({ layerId: t5 }) => t5 === this.layerId);
          if (s4) {
            const { adds: e3, updates: r3, deletes: d3 } = s4.editedFeatures, o5 = { edits: null, addedAttachments: [], deletedAttachments: [], updatedAttachments: [], addedFeatures: e3 ? e3.map(({ attributes: t5 }) => ({ objectId: this.objectIdField && t5[this.objectIdField], globalId: this.globalIdField && t5[this.globalIdField] })) : [], deletedFeatures: d3 ? d3.map(({ attributes: t5 }) => ({ objectId: this.objectIdField && t5[this.objectIdField], globalId: this.globalIdField && t5[this.globalIdField] })) : [], updatedFeatures: r3 ? r3.map(({ current: { attributes: t5 } }) => ({ objectId: this.objectIdField && t5[this.objectIdField], globalId: this.globalIdField && t5[this.globalIdField] })) : [], editedFeatures: a(t4.editedFeatures), exceededTransferLimit: false, historicMoment: a(t4.historicMoment) };
            return this.emit("edits", o5), o5;
          }
          const d2 = { edits: null, addedAttachments: [], deletedAttachments: [], updatedAttachments: [], addedFeatures: [], deletedFeatures: [], updatedFeatures: [], editedFeatures: a(t4.editedFeatures), exceededTransferLimit: false, historicMoment: a(t4.historicMoment) };
          return "historicMoment" in this && this._shouldUpdateHistoricMoment(e2, r2, d2.historicMoment) && this.emit("edits", d2), d2;
        }).then((t4) => ("historicMoment" in this && this._shouldUpdateHistoricMoment(e2, r2, t4.historicMoment) && (this.historicMoment = t4.historicMoment), t4));
        this.emit("apply-edits", { result: c3 });
      }, this._updateMomentHandler = (t3) => {
        const { serviceUrl: e2, gdbVersion: i3, moment: s3 } = t3, r2 = e2 === this.url, d = b(this), o4 = b(this) && g(e2, i3, this.gdbVersion), n2 = b(this) && !g(e2, this.gdbVersion, null);
        r2 && d && o4 && n2 && "historicMoment" in this && this.historicMoment !== s3 && (this.historicMoment = s3);
      }, this.when().then(() => {
        this.addHandles(l(this._applyEditsHandler)), "historicMoment" in this && this.addHandles(h(this._updateMomentHandler));
      }, () => {
      });
    }
    _shouldUpdateHistoricMoment(t2, e2, i3) {
      return "historicMoment" in this && this.historicMoment !== i3 && c(t2, e2);
    }
  };
  return s2 = m2, r([m()], o3.prototype, "lastEditsEventDate", void 0), o3 = r([a2("esri.layers.mixins.EditBusLayer")], o3), o3;
};

export {
  t,
  o2 as o,
  i2 as i,
  c,
  l,
  h,
  c2,
  p,
  g,
  F
};
//# sourceMappingURL=chunk-6WASKRTP.js.map
