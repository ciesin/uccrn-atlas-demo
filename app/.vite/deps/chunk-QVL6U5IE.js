import {
  n
} from "./chunk-JJDD37IJ.js";
import {
  s as s3,
  s2 as s4
} from "./chunk-GEXVSPF3.js";
import {
  a as a2
} from "./chunk-3B5XHATW.js";
import {
  x
} from "./chunk-5UCWBFBR.js";
import {
  d
} from "./chunk-ONZPKEDE.js";
import {
  d as d2
} from "./chunk-37HZDVD7.js";
import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  R
} from "./chunk-4NGIUHKX.js";
import {
  f
} from "./chunk-D4CSBMND.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  s2
} from "./chunk-LTDNORB5.js";
import {
  I
} from "./chunk-F7TCEOHX.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  h
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/rest/query/executeForExtent.js
async function a3(a4, m2, e) {
  const i = f(a4), s5 = await x(i, b.from(m2), { ...e }), u = s5.data.extent;
  return !u || isNaN(u.xmin) || isNaN(u.ymin) || isNaN(u.xmax) || isNaN(u.ymax) ? { count: s5.data.count, extent: null } : { count: s5.data.count, extent: w.fromJSON(u) };
}

// node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js
var x2 = class extends g {
  constructor(e) {
    super(e), this.dynamicDataSource = null, this.fieldsIndex = null, this.gdbVersion = null, this.infoFor3D = null, this.pbfSupported = false, this.queryAttachmentsSupported = false, this.sourceSpatialReference = null, this.url = null;
  }
  get parsedUrl() {
    return I(this.url);
  }
  async execute(e, t) {
    const r2 = await this.executeJSON(e, t);
    return this.featureSetFromJSON(e, r2, t);
  }
  async executeJSON(e, t) {
    var _a;
    const r2 = this._normalizeQuery(e), o = null != ((_a = e.outStatistics) == null ? void 0 : _a[0]), s5 = has("featurelayer-pbf-statistics"), i = (!o || s5) && true !== e.returnTrueCurves;
    let u;
    if (this.pbfSupported && i) try {
      u = await n(this.url, r2, t);
    } catch (a4) {
      if ("query:parsing-pbf" !== a4.name) throw a4;
      this.pbfSupported = false;
    }
    return this.pbfSupported && i || (u = await a2(this.url, r2, t)), this._normalizeFields(u.fields), u;
  }
  async featureSetFromJSON(e, t, r2) {
    if (!this._queryIs3DObjectFormat(e) || null == this.infoFor3D || !t.features) return d.fromJSON(t);
    const { meshFeatureSetFromJSON: s5 } = await h(import("./meshFeatureSet-QFBIVPKY.js"), r2);
    return s5(e, this.infoFor3D, t);
  }
  executeForCount(e, t) {
    return s3(this.url, this._normalizeQuery(e), t);
  }
  executeForExtent(e, t) {
    return a3(this.url, this._normalizeQuery(e), t);
  }
  executeForIds(e, t) {
    return s4(this.url, this._normalizeQuery(e), t);
  }
  async executeRelationshipQuery(e, t) {
    const [{ default: r2 }, { executeRelationshipQuery: s5 }] = await h(Promise.all([import("./RelationshipQuery-XYMESO2V.js"), import("./executeRelationshipQuery-JF7IVJC7.js")]), t);
    return e = r2.from(e), (this.gdbVersion || this.dynamicDataSource) && ((e = e.clone()).gdbVersion = e.gdbVersion || this.gdbVersion, e.dynamicDataSource = e.dynamicDataSource || this.dynamicDataSource), s5(this.url, e, t);
  }
  async executeRelationshipQueryForCount(e, t) {
    const [{ default: r2 }, { executeRelationshipQueryForCount: s5 }] = await h(Promise.all([import("./RelationshipQuery-XYMESO2V.js"), import("./executeRelationshipQuery-JF7IVJC7.js")]), t);
    return e = r2.from(e), (this.gdbVersion || this.dynamicDataSource) && ((e = e.clone()).gdbVersion = e.gdbVersion || this.gdbVersion, e.dynamicDataSource = e.dynamicDataSource || this.dynamicDataSource), s5(this.url, e, t);
  }
  async executeAttachmentQuery(e, t) {
    const { executeAttachmentQuery: r2, fetchAttachments: s5, processAttachmentQueryResult: i } = await h(import("./queryAttachments-MWSFGQZH.js"), t), u = f(this.url);
    return i(u, await (this.queryAttachmentsSupported ? r2(u, e, t) : s5(u, e, t)));
  }
  async executeAttributeBinsQuery(e, t) {
    const { executeAttributeBinsQuery: r2 } = await h(import("./executeAttributeBinsQuery-KX2AIMB4.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  async executeTopFeaturesQuery(e, t) {
    const { executeTopFeaturesQuery: r2 } = await h(import("./executeTopFeaturesQuery-MLLF3PIO.js"), t);
    return r2(this.parsedUrl, e, this.sourceSpatialReference, t);
  }
  async executeForTopIds(e, t) {
    const { executeForTopIds: r2 } = await h(import("./executeForTopIds-P6VXP2WB.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  async executeForTopExtents(e, t) {
    const { executeForTopExtents: r2 } = await h(import("./executeForTopExtents-RGLQRRDP.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  async executeForTopCount(e, t) {
    const { executeForTopCount: r2 } = await h(import("./executeForTopCount-QTSAPYKH.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  _normalizeQuery(e) {
    let t = b.from(e);
    t.sourceSpatialReference = t.sourceSpatialReference || this.sourceSpatialReference, (this.gdbVersion || this.dynamicDataSource) && (t = t === e ? t.clone() : t, t.gdbVersion = e.gdbVersion || this.gdbVersion, t.dynamicDataSource = e.dynamicDataSource ? R.from(e.dynamicDataSource) : this.dynamicDataSource);
    const { infoFor3D: o } = this;
    if (null != o && this._queryIs3DObjectFormat(e)) {
      if (t = t === e ? t.clone() : t, t.formatOf3DObjects = d2(o), !t.formatOf3DObjects) throw new s("query:unsupported-3d-query-formats", "Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");
      if (t.outSpatialReference && !s2(t.outSpatialReference, this.sourceSpatialReference)) throw new s("query:unsupported-out-spatial-reference", "3D object feature services do not support projection of geometries");
      if (null == t.outFields || !t.outFields.includes("*")) {
        t = t === e ? t.clone() : t, null == t.outFields && (t.outFields = []);
        const { originX: r2, originY: s5, originZ: i, translationX: u, translationY: a4, translationZ: n2, scaleX: c, scaleY: p, scaleZ: l, rotationX: m2, rotationY: y, rotationZ: d3, rotationDeg: f2 } = o.transformFieldRoles;
        t.outFields.push(r2, s5, i, u, a4, n2, c, p, l, m2, y, d3, f2);
      }
    }
    return t;
  }
  _normalizeFields(e) {
    if (null != this.fieldsIndex && null != e) for (const t of e) {
      const e2 = this.fieldsIndex.get(t.name);
      e2 && Object.assign(t, e2.toJSON());
    }
  }
  _queryIs3DObjectFormat(e) {
    return null != this.infoFor3D && true === e.returnGeometry && "xyFootprint" !== e.multipatchOption && !e.outStatistics;
  }
};
r([m({ type: R })], x2.prototype, "dynamicDataSource", void 0), r([m()], x2.prototype, "fieldsIndex", void 0), r([m()], x2.prototype, "gdbVersion", void 0), r([m()], x2.prototype, "infoFor3D", void 0), r([m({ readOnly: true })], x2.prototype, "parsedUrl", null), r([m()], x2.prototype, "pbfSupported", void 0), r([m()], x2.prototype, "queryAttachmentsSupported", void 0), r([m()], x2.prototype, "sourceSpatialReference", void 0), r([m({ type: String })], x2.prototype, "url", void 0), x2 = r([a("esri.layers.graphics.sources.support.QueryTask")], x2);
var F = x2;

export {
  F
};
//# sourceMappingURL=chunk-QVL6U5IE.js.map
