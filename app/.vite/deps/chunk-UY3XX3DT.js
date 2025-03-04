import {
  c,
  c2,
  p,
  t as t2
} from "./chunk-WRD6NYYH.js";
import {
  a as a2
} from "./chunk-M36OMIGP.js";
import {
  s as s4,
  t
} from "./chunk-6CLOWXHN.js";
import {
  R
} from "./chunk-67XXGAOA.js";
import {
  d
} from "./chunk-ONZPKEDE.js";
import {
  y
} from "./chunk-FF44HCOD.js";
import {
  f,
  s as s3
} from "./chunk-D4CSBMND.js";
import {
  u as u2
} from "./chunk-WLGGSXQY.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P as P2
} from "./chunk-W633AKTD.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n as n3
} from "./chunk-YUVX6H42.js";
import {
  g as g2
} from "./chunk-RDUV6YP6.js";
import {
  n as n2
} from "./chunk-7AOPU62X.js";
import {
  i,
  o
} from "./chunk-WE4EKKVR.js";
import {
  P2 as P,
  s as s2
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  h
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  b,
  m as m2,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/rest/geoprocessor/GPOptions.js
var c3;
var i2 = c3 = class extends g {
  constructor(e10) {
    super(e10), this.outSpatialReference = null, this.processExtent = null, this.processSpatialReference = null, this.returnColumnName = false, this.returnFeatureCollection = false, this.returnM = false, this.returnZ = false;
  }
  static from(e10) {
    return h(c3, e10);
  }
};
r([m({ type: g2 })], i2.prototype, "outSpatialReference", void 0), r([m({ type: w })], i2.prototype, "processExtent", void 0), r([m({ type: g2 })], i2.prototype, "processSpatialReference", void 0), r([m({ nonNullable: true })], i2.prototype, "returnColumnName", void 0), r([m({ nonNullable: true })], i2.prototype, "returnFeatureCollection", void 0), r([m({ nonNullable: true })], i2.prototype, "returnM", void 0), r([m({ nonNullable: true })], i2.prototype, "returnZ", void 0), i2 = c3 = r([a("esri.rest.geoprocessor.GPOptions")], i2);
var l = i2;

// node_modules/@arcgis/core/layers/support/MapImage.js
var p2 = class extends S {
  constructor() {
    super(...arguments), this.extent = null, this.height = null, this.href = null, this.opacity = 1, this.rotation = 0, this.scale = null, this.visible = true, this.width = null;
  }
};
r([m({ type: w })], p2.prototype, "extent", void 0), r([m()], p2.prototype, "height", void 0), r([m()], p2.prototype, "href", void 0), r([m()], p2.prototype, "opacity", void 0), r([m()], p2.prototype, "rotation", void 0), r([m()], p2.prototype, "scale", void 0), r([m()], p2.prototype, "visible", void 0), r([m()], p2.prototype, "width", void 0), p2 = r([a("esri.layers.support.MapImage")], p2);
var i3 = p2;

// node_modules/@arcgis/core/rest/support/ArealUnit.js
var c4 = class extends S {
  constructor(r6) {
    super(r6), this.area = 0, this.units = null;
  }
};
r([m({ json: { write: true } })], c4.prototype, "area", void 0), r([r2(s4)], c4.prototype, "units", void 0), c4 = r([a("esri.rest.support.ArealUnit")], c4);
var i4 = c4;

// node_modules/@arcgis/core/rest/support/DataFile.js
var e = class extends S {
  constructor(r6) {
    super(r6), this.itemId = null, this.url = null;
  }
};
r([m({ type: String, json: { read: { source: "itemID" }, write: { target: "itemID" } } })], e.prototype, "itemId", void 0), r([m({ type: String, json: { write: true } })], e.prototype, "url", void 0), e = r([a("esri.rest.support.DataFile")], e);
var p3 = e;

// node_modules/@arcgis/core/rest/support/LinearUnit.js
var c5 = class extends S {
  constructor(o4) {
    super(o4), this.distance = 0, this.units = null;
  }
};
r([m({ json: { write: true } })], c5.prototype, "distance", void 0), r([r2(t)], c5.prototype, "units", void 0), c5 = r([a("esri.rest.support.LinearUnit")], c5);
var i5 = c5;

// node_modules/@arcgis/core/rest/support/parameterValueUtils.js
var a3 = "multi-value-";
var t3 = new o({ GPArealUnit: "areal-unit", GPBoolean: "boolean", GPComposite: "composite", GPDataFile: "data-file", GPDate: "date", GPDouble: "double", GPFeatureRecordSetLayer: "feature-record-set-layer", Field: "field", GPLinearUnit: "linear-unit", GPLong: "long", GPRasterData: "raster-data", GPRasterDataLayer: "raster-data-layer", GPRecordSet: "record-set", GPString: "string", GPValueTable: "value-table", "GPMultiValue:GPArealUnit": `${a3}areal-unit`, "GPMultiValue:GPBoolean": `${a3}boolean`, "GPMultiValue:GPComposite": `${a3}composite`, "GPMultiValue:GPDataFile": `${a3}data-file`, "GPMultiValue:GPDate": `${a3}date`, "GPMultiValue:GPDouble": `${a3}double`, "GPMultiValue:GPFeatureRecordSetLayer": `${a3}feature-record-set-layer`, "GPMultiValue:Field": `${a3}field`, "GPMultiValue:GPLinearUnit": `${a3}linear-unit`, "GPMultiValue:GPLong": `${a3}long`, "GPMultiValue:GPRasterData": `${a3}raster-data`, "GPMultiValue:GPRasterDataLayer": `${a3}raster-data-layer`, "GPMultiValue:GPRecordSet": `${a3}record-set`, "GPMultiValue:GPString": `${a3}string` });

// node_modules/@arcgis/core/rest/support/ParameterValue.js
var a4 = class extends S {
  constructor(r6) {
    super(r6), this.dataType = null, this.paramName = null, this.value = null;
  }
};
r([r2(t3, { ignoreUnknown: false })], a4.prototype, "dataType", void 0), r([m()], a4.prototype, "paramName", void 0), r([m()], a4.prototype, "value", void 0), a4 = r([a("esri.rest.support.ParameterValue")], a4);
var m3 = a4;

// node_modules/@arcgis/core/rest/support/RasterData.js
var e2 = class extends S {
  constructor(r6) {
    super(r6), this.format = null, this.itemId = null, this.url = null;
  }
};
r([m()], e2.prototype, "format", void 0), r([m({ json: { read: { source: "itemID" }, write: { target: "itemID" } } })], e2.prototype, "itemId", void 0), r([m()], e2.prototype, "url", void 0), e2 = r([a("esri.rest.support.RasterData")], e2);
var p4 = e2;

// node_modules/@arcgis/core/rest/geoprocessor/utils.js
async function S2(r6, a9, n10, s12, i13) {
  const u4 = {}, m6 = {}, c10 = [];
  return d2(s12, c10, u4), R(c10).then((t13) => {
    const { outSpatialReference: c11, processExtent: p19, processSpatialReference: f4, returnColumnName: l4, returnFeatureCollection: y5, returnM: S4, returnZ: d4 } = n10, { path: N3 } = f(r6);
    for (const e10 in u4) {
      const [r7, a10] = u4[e10];
      m6[e10] = t13.slice(r7, a10);
    }
    const j6 = c11 ? c11.wkid || c11 : null, g8 = f4 ? f4.wkid || f4 : null, J4 = "execute" === a9 ? { returnColumnName: l4 || void 0, returnFeatureCollection: y5 || void 0, returnM: S4 || void 0, returnZ: d4 || void 0 } : null, O4 = R2({ ...p19 ? { context: { extent: p19, outSR: j6, processSR: g8 } } : { "env:outSR": j6, "env:processSR": g8 }, ...s12, ...J4, f: "json" }, null, m6), v2 = { ...i13, query: O4 };
    return P(`${N3}/${a9}`, v2);
  });
}
function d2(e10, r6, t13) {
  for (const a9 in e10) {
    const n10 = e10[a9];
    if (n10 && "object" == typeof n10 && n10 instanceof d) {
      const { features: e11 } = n10;
      t13[a9] = [r6.length, r6.length + e11.length], e11.forEach((e12) => {
        r6.push(e12.geometry);
      });
    }
  }
}
async function N(e10, t13) {
  switch (e10) {
    case "areal-unit":
      return i4.fromJSON(t13);
    case "boolean":
    case "double":
    case "long":
    case "string":
    case "value-table":
      return t13;
    case "date":
      return new Date(t13);
    case "data-file":
      return p3.fromJSON(t13);
    case "linear-unit":
      return i5.fromJSON(t13);
    case "feature-record-set-layer":
      if ("url" in t13) return p3.fromJSON(t13);
      if ("layerDefinition" in t13) {
        const e11 = new (0, (await import("./FeatureLayer-JWLNPFWJ.js")).default)(), { layerDefinition: a9, featureSet: n10 } = t13;
        return e11.read({ layerDefinition: a9, featureSet: n10 }, { origin: "portal-item" }), e11.spatialReference = g2.fromJSON(n10.spatialReference ?? a9.spatialReference ?? a9.extent.spatialReference), e11;
      }
      return d.fromJSON(t13);
    case "record-set":
      return "url" in t13 ? p3.fromJSON(t13) : d.fromJSON(t13);
    case "raster-data":
    case "raster-data-layer":
      return "mapImage" in t13 ? i3.fromJSON(t13.mapImage) : p4.fromJSON(t13);
    case "field":
      return y.fromJSON(t13);
  }
}
function j3(e10) {
  return e10.startsWith(a3);
}
function g3(e10) {
  return e10.replace(a3, "");
}
async function J(e10, r6) {
  const t13 = g3(e10), a9 = "composite" === t13 ? r6.map((e11) => N(t3.fromJSON(e11.dataType), e11.value)) : r6.map((e11) => N(t13, e11));
  return Promise.all(a9);
}
async function O(e10) {
  const r6 = t3.fromJSON(e10.dataType), { paramName: t13 } = e10, a9 = j3(r6) ? await J(r6, e10.value) : await N(r6, e10.value);
  return new m3({ dataType: r6, paramName: t13, value: a9 });
}
function R2(e10, r6, t13) {
  for (const a9 in e10) {
    const r7 = e10[a9];
    Array.isArray(r7) ? e10[a9] = JSON.stringify(r7.map((e11) => R2({ item: e11 }, true).item)) : r7 instanceof Date && (e10[a9] = r7.getTime());
  }
  return s3(e10, r6, t13);
}

// node_modules/@arcgis/core/rest/support/JobInfo.js
var p5;
var d3 = i()({ esriJobCancelled: "job-cancelled", esriJobCancelling: "job-cancelling", esriJobDeleted: "job-deleted", esriJobDeleting: "job-deleting", esriJobTimedOut: "job-timed-out", esriJobExecuting: "job-executing", esriJobFailed: "job-failed", esriJobNew: "job-new", esriJobSubmitted: "job-submitted", esriJobSucceeded: "job-succeeded", esriJobWaiting: "job-waiting" }, { ignoreUnknown: false });
var h2 = 1e3;
var g4 = p5 = class extends S {
  constructor(e10) {
    super(e10), this.jobId = null, this.jobStatus = null, this.messages = null, this.progress = null, this.requestOptions = null, this.sourceUrl = null, this._cancelJobTimer = void 0, this._jobCompletionTimer = void 0;
  }
  async cancelJob(e10) {
    const { jobId: t13, sourceUrl: s12 } = this, { path: a9 } = f(s12), c10 = { ...this.requestOptions, ...e10, query: { f: "json" } }, n10 = `${a9}/jobs/${t13}/cancel`, { data: u4 } = await P(n10, c10), { messages: b3, jobStatus: m6, progress: j6 } = p5.fromJSON(u4);
    return this.set({ messages: b3, jobStatus: m6, progress: j6 }), "job-cancelled" === m6 ? this : new Promise((o4, t14) => {
      m2(c10.signal, () => {
        this.clearCancelJobTimer(), t14(u());
      }), this.clearCancelJobTimer();
      const s13 = () => {
        this._cancelJobTimer || t14(u()), this.checkJobStatus(e10).then(({ jobStatus: e11 }) => {
          switch (e11) {
            case "job-cancelling":
            default:
              this._cancelJobTimer = setTimeout(s13, h2);
              break;
            case "job-deleted":
            case "job-deleting":
            case "job-executing":
            case "job-failed":
            case "job-new":
            case "job-submitted":
            case "job-succeeded":
            case "job-timed-out":
            case "job-waiting":
              t14(this);
              break;
            case "job-cancelled":
              o4(this);
          }
        });
      };
      this._cancelJobTimer = setTimeout(s13, h2);
    });
  }
  destroy() {
    clearInterval(this._cancelJobTimer), clearInterval(this._jobCompletionTimer);
  }
  async checkJobStatus(e10) {
    const { path: t13 } = f(this.sourceUrl), s12 = { ...this.requestOptions, ...e10, query: { f: "json" } }, r6 = `${t13}/jobs/${this.jobId}`, { data: i13 } = await P(r6, s12), { messages: a9, jobStatus: c10, progress: n10 } = p5.fromJSON(i13);
    return this.set({ messages: a9, jobStatus: c10, progress: n10 }), this;
  }
  async fetchResultData(e10, t13, s12) {
    t13 = l.from(t13 || {});
    const { returnColumnName: r6, returnFeatureCollection: i13, returnM: a9, returnZ: c10, outSpatialReference: n10 } = t13, { path: j6 } = f(this.sourceUrl), p19 = R2({ returnColumnName: r6 || null, returnFeatureCollection: i13 || null, returnM: a9 || null, returnZ: c10 || null, outSR: n10, returnType: "data", f: "json" }, null), d4 = { ...this.requestOptions, ...s12, query: p19 }, h7 = `${j6}/jobs/${this.jobId}/results/${e10}`, { data: g8 } = await P(h7, d4);
    return O(g8);
  }
  async fetchResultImage(e10, t13, s12) {
    const { path: r6 } = f(this.sourceUrl), i13 = { ...t13.toJSON(), f: "json" }, a9 = R2(i13), c10 = { ...this.requestOptions, ...s12, query: a9 }, n10 = `${r6}/jobs/${this.jobId}/results/${e10}`, { data: u4 } = await P(n10, c10);
    return O(u4);
  }
  async fetchResultMapImageLayer() {
    const { path: e10 } = f(this.sourceUrl), o4 = e10.indexOf("/GPServer/"), t13 = `${e10.slice(0, Math.max(0, o4))}/MapServer/jobs/${this.jobId}`;
    return new (0, (await import("./MapImageLayer-CADQOXRF.js")).default)({ url: t13 });
  }
  async waitForJobCompletion(e10 = {}) {
    const { interval: o4 = h2, signal: t13, statusCallback: s12 } = e10;
    return new Promise((e11, a9) => {
      m2(t13, () => {
        this.clearJobCompletionTimer(), a9(u());
      }), this.clearJobCompletionTimer();
      const c10 = () => {
        this._jobCompletionTimer || a9(u()), this.checkJobStatus().then(({ jobStatus: t14 }) => {
          switch (t14) {
            case "job-succeeded":
              e11(this);
              break;
            case "job-executing":
            case "job-new":
            case "job-submitted":
            case "job-waiting":
              s12 && s12(this), this._jobCompletionTimer = setTimeout(c10, o4);
              break;
            case "job-cancelled":
            case "job-cancelling":
            case "job-deleted":
            case "job-deleting":
            case "job-failed":
            case "job-timed-out":
              a9(this);
              break;
            default:
              this._jobCompletionTimer = setTimeout(c10, o4);
          }
        }).catch((e12) => {
          a9(e12);
        });
      };
      this._jobCompletionTimer = setTimeout(c10, o4);
    });
  }
  clearCancelJobTimer() {
    clearTimeout(this._cancelJobTimer), this._cancelJobTimer = void 0;
  }
  clearJobCompletionTimer() {
    clearTimeout(this._jobCompletionTimer), this._jobCompletionTimer = void 0;
  }
};
r([m()], g4.prototype, "jobId", void 0), r([r2(d3, { ignoreUnknown: false })], g4.prototype, "jobStatus", void 0), r([m({ type: [a2] })], g4.prototype, "messages", void 0), r([m()], g4.prototype, "progress", void 0), r([m()], g4.prototype, "requestOptions", void 0), r([m({ json: { write: true } })], g4.prototype, "sourceUrl", void 0), g4 = p5 = r([a("esri.rest.support.JobInfo")], g4);
var J2 = g4;

// node_modules/@arcgis/core/rest/geoprocessor/submitJob.js
async function s5(s12, m6, n10, f4) {
  return n10 = l.from(n10 || {}), S2(s12, "submitJob", n10, m6 ?? {}, f4).then(({ data: o4 }) => {
    const r6 = J2.fromJSON(o4);
    return r6.sourceUrl = s12, r6;
  });
}

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js
var t4 = class extends g {
  constructor(e10) {
    super(e10), this.headerKeys = [], this.outSpatialReference = null, this.exceededTransferLimit = false;
  }
};
r([m()], t4.prototype, "headerKeys", void 0), r([m()], t4.prototype, "outSpatialReference", void 0), r([m()], t4.prototype, "exceededTransferLimit", void 0), t4 = r([a("esri.rest.knowledgeGraph.GraphQueryResultHeader")], t4);
var p6 = t4;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResult.js
var p7 = class extends g {
  constructor(r6) {
    super(r6), this.resultRows = [], this.resultHeader = new p6();
  }
};
r([m()], p7.prototype, "resultRows", void 0), r([m()], p7.prototype, "resultHeader", void 0), p7 = r([a("esri.rest.knowledgeGraph.GraphQueryResult")], p7);
var c6 = p7;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreamingResult.js
var a5 = class extends g {
  constructor(r6) {
    super(r6), this.resultRowsStream = new ReadableStream(), this.resultHeader = new p6();
  }
};
r([m()], a5.prototype, "resultRowsStream", void 0), r([m()], a5.prototype, "resultHeader", void 0), a5 = r([a("esri.rest.knowledgeGraph.GraphQueryStreamingResult")], a5);
var p8 = a5;

// node_modules/@arcgis/core/rest/knowledgeGraph/FieldIndex.js
var s6 = class extends S {
  constructor(o4) {
    super(o4), this.name = null, this.unique = null, this.ascending = true, this.description = "", this.fieldNames = [];
  }
};
r([m({ type: String, json: { write: true } })], s6.prototype, "name", void 0), r([m({ type: Boolean, json: { write: true } })], s6.prototype, "unique", void 0), r([m({ type: Boolean, json: { write: true } })], s6.prototype, "ascending", void 0), r([m({ type: String, json: { write: true } })], s6.prototype, "description", void 0), r([m({ type: [String], json: { write: true } })], s6.prototype, "fieldNames", void 0), s6 = r([a("esri.rest.knowledgeGraph.FieldIndex")], s6);
var i6 = s6;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphProperty.js
var i7 = class extends S {
  constructor(t13) {
    super(t13), this.name = null, this.alias = null, this.fieldType = null, this.geometryType = null, this.hasM = null, this.hasZ = null, this.nullable = null, this.editable = true, this.required = false, this.defaultVisibility = true, this.systemMaintained = null, this.role = "esriGraphPropertyUNSPECIFIED", this.defaultValue = null;
  }
};
r([m({ type: String, json: { write: true } })], i7.prototype, "name", void 0), r([m({ type: String, json: { write: true } })], i7.prototype, "alias", void 0), r([m({ type: String, json: { write: true } })], i7.prototype, "fieldType", void 0), r([m({ type: String, json: { write: true } })], i7.prototype, "geometryType", void 0), r([m({ type: Boolean, json: { write: true } })], i7.prototype, "hasM", void 0), r([m({ type: Boolean, json: { write: true } })], i7.prototype, "hasZ", void 0), r([m({ type: Boolean, json: { write: true } })], i7.prototype, "nullable", void 0), r([m({ type: Boolean, json: { write: true } })], i7.prototype, "editable", void 0), r([m({ type: Boolean, json: { write: true } })], i7.prototype, "required", void 0), r([m({ type: Boolean, json: { write: true } })], i7.prototype, "defaultVisibility", void 0), r([m({ type: Boolean, json: { write: true } })], i7.prototype, "systemMaintained", void 0), r([m({ type: String, json: { write: true } })], i7.prototype, "role", void 0), r([m({ json: { write: true } })], i7.prototype, "defaultValue", void 0), i7 = r([a("esri.rest.knowledgeGraph.GraphProperty")], i7);
var s7 = i7;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphObjectType.js
var i8 = class extends S {
  constructor(o4) {
    super(o4), this.name = null, this.alias = null, this.role = "Regular", this.strict = null, this.properties = [], this.fieldIndexes = [], this.type = null;
  }
};
r([m({ type: String, json: { write: true } })], i8.prototype, "name", void 0), r([m({ type: String, json: { write: true } })], i8.prototype, "alias", void 0), r([m({ type: String, json: { write: true } })], i8.prototype, "role", void 0), r([m({ type: Boolean, json: { write: true } })], i8.prototype, "strict", void 0), r([m({ type: [s7], json: { write: true } })], i8.prototype, "properties", void 0), r([m({ type: [i6], json: { write: true } })], i8.prototype, "fieldIndexes", void 0), i8 = r([a("esri.rest.knowledgeGraph.GraphObjectType")], i8);
var n4 = i8;

// node_modules/@arcgis/core/rest/knowledgeGraph/EntityType.js
var t5 = class extends n4 {
  constructor(r6) {
    super(r6), this.type = "entity";
  }
};
t5 = r([a("esri.rest.knowledgeGraph.EntityType")], t5);
var e3 = t5;

// node_modules/@arcgis/core/rest/knowledgeGraph/RelationshipType.js
var t6 = class extends n4 {
  constructor(o4) {
    super(o4), this.endPoints = [], this.type = "relationship";
  }
};
r([m({ json: { write: true } })], t6.prototype, "endPoints", void 0), t6 = r([a("esri.rest.knowledgeGraph.RelationshipType")], t6);
var p9 = t6;

// node_modules/@arcgis/core/rest/knowledgeGraph/SourceTypeValueBehavior.js
var t7 = class extends S {
  constructor(o4) {
    super(o4), this.value = null, this.behavior = null;
  }
};
r([m({ type: String, json: { write: true } })], t7.prototype, "value", void 0), r([m({ type: String, json: { write: true } })], t7.prototype, "behavior", void 0), t7 = r([a("esri.rest.knowledgeGraph.SourceTypeValueBehavior")], t7);
var p10 = t7;

// node_modules/@arcgis/core/rest/knowledgeGraph/DataModel.js
var a6 = class extends S {
  constructor(e10) {
    super(e10), this.timestamp = null, this.spatialReference = null, this.strict = null, this.objectIdField = null, this.globalIdField = null, this.arcgisManaged = null, this.identifierInfo = null, this.searchIndexes = [], this.entityTypes = [], this.relationshipTypes = [], this.metaEntityTypes = [], this.provenanceSourceTypeValues = [];
  }
};
r([m({ type: Date, json: { type: Number, write: { writer: (e10, t13) => {
  t13.timestamp = e10 == null ? void 0 : e10.getTime();
} } } })], a6.prototype, "timestamp", void 0), r([m({ type: g2, json: { write: true } })], a6.prototype, "spatialReference", void 0), r([m({ type: Boolean, json: { write: true } })], a6.prototype, "strict", void 0), r([m({ type: String, json: { write: true } })], a6.prototype, "objectIdField", void 0), r([m({ type: String, json: { write: true } })], a6.prototype, "globalIdField", void 0), r([m()], a6.prototype, "arcgisManaged", void 0), r([m()], a6.prototype, "identifierInfo", void 0), r([m()], a6.prototype, "searchIndexes", void 0), r([m({ type: [e3], json: { write: true } })], a6.prototype, "entityTypes", void 0), r([m({ type: [p9], json: { write: true } })], a6.prototype, "relationshipTypes", void 0), r([m({ type: [e3], json: { write: true } })], a6.prototype, "metaEntityTypes", void 0), r([m({ type: [p10], json: { write: true } })], a6.prototype, "provenanceSourceTypeValues", void 0), a6 = r([a("esri.rest.knowledgeGraph.DataModel")], a6);
var y2 = a6;

// node_modules/@arcgis/core/rest/knowledgeGraph/ServiceDefinition.js
var p11 = class extends S {
  constructor(t13) {
    super(t13), this.capabilities = [], this.supportsSearch = false, this.supportedQueryFormats = [], this.allowGeometryUpdates = false, this.searchMaxRecordCount = null, this.serviceCapabilities = null, this.maxRecordCount = null, this.description = "", this.copyrightText = "", this.units = "", this.spatialReference = null, this.currentVersion = null, this.dateFieldsTimeReference = null, this.serviceItemId = "", this.supportsDocuments = false, this.dataEditingNotSupported = false, this.schemaEditingNotSupported = false, this.supportsProvenance = false;
  }
};
r([m({ type: [String], json: { write: true } })], p11.prototype, "capabilities", void 0), r([m({ type: Boolean, json: { write: true } })], p11.prototype, "supportsSearch", void 0), r([m({ type: [String], json: { write: true } })], p11.prototype, "supportedQueryFormats", void 0), r([m({ type: Boolean, json: { write: true } })], p11.prototype, "allowGeometryUpdates", void 0), r([m({ type: Number, json: { write: true } })], p11.prototype, "searchMaxRecordCount", void 0), r([m({ type: Object, json: { write: true } })], p11.prototype, "serviceCapabilities", void 0), r([m({ type: Number, json: { write: true } })], p11.prototype, "maxRecordCount", void 0), r([m({ type: String, json: { write: true } })], p11.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], p11.prototype, "copyrightText", void 0), r([m({ type: String, json: { write: true } })], p11.prototype, "units", void 0), r([m({ type: g2, json: { write: true } })], p11.prototype, "spatialReference", void 0), r([m({ type: Number, json: { write: true } })], p11.prototype, "currentVersion", void 0), r([m({ type: Object, json: { write: true } })], p11.prototype, "dateFieldsTimeReference", void 0), r([m({ type: String, json: { write: true } })], p11.prototype, "serviceItemId", void 0), r([m({ type: Boolean, json: { write: true } })], p11.prototype, "supportsDocuments", void 0), r([m({ type: Boolean, json: { write: true } })], p11.prototype, "dataEditingNotSupported", void 0), r([m({ type: Boolean, json: { write: true } })], p11.prototype, "schemaEditingNotSupported", void 0), r([m({ type: Boolean, json: { write: true } })], p11.prototype, "supportsProvenance", void 0), p11 = r([a("esri.rest.knowledgeGraph.ServiceDefinition")], p11);
var s8 = p11;

// node_modules/@arcgis/core/rest/knowledgeGraph/KnowledgeGraph.js
var p12 = class extends S {
  constructor(o4) {
    super(o4), this.url = null, this.dataModel = null, this.serviceDefinition = null;
  }
};
r([m({ type: String, json: { write: true } })], p12.prototype, "url", void 0), r([m({ type: y2, json: { write: true } })], p12.prototype, "dataModel", void 0), r([m({ type: s8, json: { write: true } })], p12.prototype, "serviceDefinition", void 0), p12 = r([a("esri.rest.knowledgeGraph.KnowledgeGraph")], p12);
var c7 = p12;

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmUtils.js
function e4(e10, o4, s12) {
  if (0 !== e10.error_code) throw new s(o4, s12, { errorCode: e10.error_code, errorMessage: e10.error_message });
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/clientDataToWasmEncodedFactories.js
function t8(t13, r6, a9, o4 = false) {
  const c10 = new a9.ClientDataFetchRequestEncoder();
  c10.deleteLater();
  for (const e10 of t13) {
    const t14 = n5(e10, r6, a9, o4);
    c10.add_client_data_fetch_request_parameter(t14);
  }
  c10.encode();
  const s12 = c10.get_encoding_result();
  return e4(s12.error, "knowledge-graph:fetchClientDataAtKeys-encoding-failed", "Attempting to encode the fetchClientDataAtKeys failed"), structuredClone(s12.get_byte_buffer());
}
function n5(e10, t13, n10, r6) {
  const a9 = new n10.ClientDataKey();
  a9.deleteLater(), a9.key_string = e10;
  const o4 = new n10.ClientDataFetchRequestParameter();
  o4.deleteLater(), o4.set_key(a9);
  const c10 = t13.get(e10);
  return c10 && !r6 && (o4.v_tag = { v_tag: c10.version }), o4;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/knowledgeWasmAccess.js
var t9 = "esri/rest/knowledgeGraph/wasmInterface/";
var s9;
var n6 = null;
async function r3() {
  const e10 = n6 ?? s9;
  if (e10) return e10;
  const t13 = !!has("wasm-simd");
  return s9 = o2(t13), s9;
}
async function o2(s12) {
  if (s12) {
    const { default: s13 } = await import("./arcgis-knowledge-client-core-simd-BSUGB5RX.js").then((e10) => e10.a);
    return s13({ locateFile: (s14) => n2(t9 + s14) });
  }
  const { default: n10 } = await import("./arcgis-knowledge-client-core-IFPPUU4N.js").then((e10) => e10.a);
  return n10({ locateFile: (s13) => n2(t9 + s13) });
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmQueryWrapperInterfaces.js
var e5;
var T;
var i9;
!function(e10) {
  e10[e10.OBJECT = 0] = "OBJECT", e10[e10.ENTITY = 1] = "ENTITY", e10[e10.RELATIONSHIP = 2] = "RELATIONSHIP", e10[e10.PATH = 3] = "PATH", e10[e10.ARRAY = 4] = "ARRAY";
}(e5 || (e5 = {})), function(e10) {
  e10[e10.view = 0] = "view", e10[e10.edit = 1] = "edit";
}(T || (T = {})), function(e10) {
  e10[e10.exclude = 0] = "exclude", e10[e10.include = 1] = "include";
}(i9 || (i9 = {}));

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/queryToWasmEncodedFactories.js
function l2(e10, t13) {
  const n10 = new t13.ArrayValue();
  return n10.deleteLater(), e10.forEach((e11) => {
    n10.add_value(f2(e11, t13));
  }), n10;
}
function s10(e10, t13) {
  const n10 = new t13.ObjectValue();
  n10.deleteLater();
  for (const [o4, r6] of Object.entries(e10)) n10.set_key_value(o4, f2(r6, t13));
  return n10;
}
function u3(t13, i13) {
  if (t13 instanceof u2) return g5(t13, i13);
  if (t13 instanceof j) return h3(t13, i13);
  if (t13 instanceof P2 || t13 instanceof j2) return p13(t13, i13);
  throw new s("knowledge-graph:unsupported-geometry", "Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge", { geometry: t13 });
}
function y3(e10, t13) {
  t13.input_quantization_parameters = { xy_resolution: e10.xyResolution, x_false_origin: e10.xFalseOrigin, y_false_origin: e10.yFalseOrigin, z_resolution: e10.zResolution, z_false_origin: e10.zFalseOrigin, m_resolution: e10.mResolution, m_false_origin: e10.mFalseOrigin };
}
function m4(t13, n10, o4) {
  if (!t13.extent) throw new s("knowledge-graph:illegal-output-quantization", "The Output quantization provided to the encoder had an illegal value as part of its extent", t13.extent);
  if (!t13.quantizeMode) throw new s("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal mode setting", t13.quantizeMode);
  if (!t13.tolerance) throw new s("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal tolerance setting", t13.quantizeMode);
  n10.output_quantization_parameters = { extent: { xmax: t13.extent.xmax, ymax: t13.extent.ymax, xmin: t13.extent.xmin, ymin: t13.extent.ymin }, quantize_mode: o4.esriQuantizeMode[t13.quantizeMode], tolerance: t13.tolerance };
}
function c8(e10, t13) {
  t13.provenance_behavior = { value: i9[e10] };
}
function f2(e10, n10) {
  if (null == e10) return "";
  if ("object" != typeof e10) return e10;
  if (e10 instanceof Date) return e10;
  if (e10 instanceof n3) return u3(e10, n10);
  if (Array.isArray(e10)) {
    const t13 = new n10.ArrayValue();
    return t13.deleteLater(), e10.forEach((e11) => {
      t13.add_value(f2(e11, n10));
    }), t13;
  }
  return s10(e10, n10);
}
function p13(e10, t13) {
  const n10 = new t13.GeometryValue();
  n10.deleteLater(), n10.has_z = e10.hasZ, n10.has_m = e10.hasM;
  const o4 = [], i13 = [];
  let l4 = [];
  e10 instanceof P2 ? (n10.geometry_type = t13.esriGeometryType.esriGeometryPolyline, l4 = e10.paths) : e10 instanceof j2 && (n10.geometry_type = t13.esriGeometryType.esriGeometryPolygon, l4 = e10.rings);
  let s12 = 0, u4 = 0;
  return l4.forEach((e11) => {
    let t14 = 0;
    e11.forEach((e12) => {
      t14++, e12.forEach((e13) => {
        o4[u4] = e13, u4++;
      });
    }), i13[s12] = t14, s12++;
  }), n10.coords = new Float64Array(o4), n10.lengths = new Uint32Array(i13), n10;
}
function g5(e10, t13) {
  const n10 = new t13.GeometryValue();
  n10.deleteLater(), n10.geometry_type = n10.geometry_type = t13.esriGeometryType.esriGeometryMultipoint, n10.has_z = e10.hasZ, n10.has_m = e10.hasM;
  const o4 = [], r6 = [];
  r6[0] = e10.points.length;
  let a9 = 0;
  return e10.points.forEach((e11) => {
    e11.forEach((e12) => {
      o4[a9] = e12, a9++;
    });
  }), n10.coords = new Float64Array(o4), n10.lengths = new Uint32Array(r6), n10;
}
function h3(e10, t13) {
  const n10 = new t13.GeometryValue();
  n10.deleteLater(), n10.geometry_type = t13.esriGeometryType.esriGeometryPoint, n10.has_z = e10.hasZ, n10.has_m = e10.hasM;
  const o4 = [], r6 = [];
  r6[0] = 1, o4[0] = e10.x, o4[1] = e10.y;
  let a9 = 2;
  return e10.hasZ && (o4[a9] = e10.z, a9++), e10.hasM && (o4[a9] = e10.m, a9++), n10.coords = new Float64Array(o4), n10.lengths = new Uint32Array(r6), n10;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/updateToWasmEncodedFactories.js
function r4(t13, n10) {
  if (!t13.typeName) throw new s("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits");
  if (t13 instanceof c) {
    const e10 = new n10.EntityValue();
    e10.deleteLater(), e10.type_name = t13.typeName;
    for (const [o4, i13] of Object.entries(t13.properties)) e10.set_key_value(o4, a7(i13, n10));
    return t13.id && e10.set_id(t13.id), e10;
  }
  if (t13 instanceof p) {
    const e10 = new n10.RelationshipValue();
    e10.deleteLater(), e10.type_name = t13.typeName;
    for (const [o4, i13] of Object.entries(t13.properties)) e10.set_key_value(o4, a7(i13, n10));
    return t13.id && e10.set_id(t13.id), t13.originId && t13.destinationId && e10.set_related_entity_ids(t13.originId, t13.destinationId), e10;
  }
  throw new s("knowledge-graph:applyEdits-encoding-failure", "Could not determine the type of a named graph object passed to the encoder");
}
function s11(e10) {
  return { xy_resolution: e10.xyResolution, x_false_origin: e10.xFalseOrigin, y_false_origin: e10.yFalseOrigin, z_resolution: e10.zResolution, z_false_origin: e10.zFalseOrigin, m_resolution: e10.mResolution, m_false_origin: e10.mFalseOrigin };
}
function a7(e10, o4) {
  return null == e10 ? null : "object" != typeof e10 || e10 instanceof Date ? e10 : e10 instanceof n3 ? u3(e10, o4) : null;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmClientDataInterfaces.js
var e6;
var t10;
var i10;
var n7;
!function(e10) {
  e10[e10.ClientDataKeyTypeUNSPECIFIED = 0] = "ClientDataKeyTypeUNSPECIFIED", e10[e10.ClientDataKeyTypeString = 1] = "ClientDataKeyTypeString";
}(e6 || (e6 = {})), function(e10) {
  e10[e10.ClientDataTypeUNSPECIFIED = 0] = "ClientDataTypeUNSPECIFIED", e10[e10.ClientDataTypeString = 1] = "ClientDataTypeString";
}(t10 || (t10 = {})), function(e10) {
  e10[e10.Unspecified = 0] = "Unspecified", e10[e10.ClientData = 1] = "ClientData", e10[e10.NotModified = 2] = "NotModified";
}(i10 || (i10 = {})), function(e10) {
  e10[e10.Unspecified = 0] = "Unspecified", e10[e10.Error = 1] = "Error", e10[e10.ClientDataValue = 2] = "ClientDataValue";
}(n7 || (n7 = {}));

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToClientDataFactories.js
function n8(a9, n10, _2, s12 = false) {
  const r6 = /* @__PURE__ */ new Map();
  for (let o4 = 0; o4 < a9.get_results_count(); o4++) {
    const g8 = a9.get_result_at(o4);
    if (g8.get_fetch_result_case().value !== n7.ClientDataValue || 0 !== g8.error().error_code) {
      const e10 = g8.get_key().key_string;
      _2.has(e10) && n10.delete(e10);
      continue;
    }
    const l4 = g8.get_value(), i13 = g8.get_key().key_string, c10 = _2.get(i13);
    let u4;
    if (l4.get_data_case().value === i10.NotModified && c10) u4 = c10.value;
    else {
      if (l4.get_data_case().value !== i10.ClientData) continue;
      {
        u4 = l4.get_data().client_data_string;
        const e10 = g8.get_value().get_v_tag().v_tag;
        s12 || n10.set(i13, { key: i13, version: e10, value: u4 });
      }
    }
    r6.set(i13, u4);
  }
  return r6;
}
function _(e10) {
  const t13 = e10.get_keys(), n10 = new Array();
  for (let _2 = 0; _2 < t13.get_keys_count(); _2++) {
    const e11 = t13.get_key_at(_2);
    e11.get_client_data_key_type().value === e6.ClientDataKeyTypeString && n10.push(e11.key_string);
  }
  return n10;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/SearchIndex.js
var t11 = class extends g {
  constructor(r6) {
    super(r6), this.name = null, this.supportedCategory = "esriTypeUNSPECIFIED", this.analyzers = [], this.searchProperties = /* @__PURE__ */ new Map();
  }
};
r([m()], t11.prototype, "name", void 0), r([m()], t11.prototype, "supportedCategory", void 0), r([m()], t11.prototype, "analyzers", void 0), r([m()], t11.prototype, "searchProperties", void 0), t11 = r([a("esri.rest.knowledgeGraph.SearchIndex")], t11);
var p14 = t11;

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmDataModelWrapperInterfaces.js
var e7;
var r5;
var i11;
var t12;
var o3;
var p15;
var n9;
!function(e10) {
  e10[e10.Regular = 0] = "Regular", e10[e10.Provenance = 1] = "Provenance", e10[e10.Document = 2] = "Document";
}(e7 || (e7 = {})), function(e10) {
  e10[e10.esriFieldTypeSmallInteger = 0] = "esriFieldTypeSmallInteger", e10[e10.esriFieldTypeInteger = 1] = "esriFieldTypeInteger", e10[e10.esriFieldTypeSingle = 2] = "esriFieldTypeSingle", e10[e10.esriFieldTypeDouble = 3] = "esriFieldTypeDouble", e10[e10.esriFieldTypeString = 4] = "esriFieldTypeString", e10[e10.esriFieldTypeDate = 5] = "esriFieldTypeDate", e10[e10.esriFieldTypeOID = 6] = "esriFieldTypeOID", e10[e10.esriFieldTypeGeometry = 7] = "esriFieldTypeGeometry", e10[e10.esriFieldTypeBlob = 8] = "esriFieldTypeBlob", e10[e10.esriFieldTypeRaster = 9] = "esriFieldTypeRaster", e10[e10.esriFieldTypeGUID = 10] = "esriFieldTypeGUID", e10[e10.esriFieldTypeGlobalID = 11] = "esriFieldTypeGlobalID", e10[e10.esriFieldTypeXML = 12] = "esriFieldTypeXML", e10[e10.esriFieldTypeBigInteger = 13] = "esriFieldTypeBigInteger", e10[e10.esriFieldTypeDateOnly = 14] = "esriFieldTypeDateOnly", e10[e10.esriFieldTypeTimeOnly = 15] = "esriFieldTypeTimeOnly", e10[e10.esriFieldTypeTimestampOffset = 16] = "esriFieldTypeTimestampOffset";
}(r5 || (r5 = {})), function(e10) {
  e10[e10.esriGeometryNull = 0] = "esriGeometryNull", e10[e10.esriGeometryPoint = 1] = "esriGeometryPoint", e10[e10.esriGeometryMultipoint = 2] = "esriGeometryMultipoint", e10[e10.esriGeometryPolyline = 3] = "esriGeometryPolyline", e10[e10.esriGeometryPolygon = 4] = "esriGeometryPolygon", e10[e10.esriGeometryEnvelope = 5] = "esriGeometryEnvelope", e10[e10.esriGeometryAny = 6] = "esriGeometryAny", e10[e10.esriGeometryMultiPatch = 7] = "esriGeometryMultiPatch";
}(i11 || (i11 = {})), function(e10) {
  e10[e10.esriMethodHintUNSPECIFIED = 0] = "esriMethodHintUNSPECIFIED", e10[e10.esriUUIDESRI = 1] = "esriUUIDESRI", e10[e10.esriUUIDRFC4122 = 2] = "esriUUIDRFC4122";
}(t12 || (t12 = {})), function(e10) {
  e10[e10.esriTypeUNSPECIFIED = 0] = "esriTypeUNSPECIFIED", e10[e10.esriTypeEntity = 1] = "esriTypeEntity", e10[e10.esriTypeRelationship = 2] = "esriTypeRelationship", e10[e10.esriTypeBoth = 4] = "esriTypeBoth";
}(o3 || (o3 = {})), function(e10) {
  e10[e10.esriGraphPropertyUNSPECIFIED = 0] = "esriGraphPropertyUNSPECIFIED", e10[e10.esriGraphPropertyRegular = 1] = "esriGraphPropertyRegular", e10[e10.esriGraphPropertyDocumentName = 2] = "esriGraphPropertyDocumentName", e10[e10.esriGraphPropertyDocumentTitle = 3] = "esriGraphPropertyDocumentTitle", e10[e10.esriGraphPropertyDocumentUrl = 4] = "esriGraphPropertyDocumentUrl", e10[e10.esriGraphPropertyDocumentText = 5] = "esriGraphPropertyDocumentText", e10[e10.esriGraphPropertyDocumentKeywords = 6] = "esriGraphPropertyDocumentKeywords", e10[e10.esriGraphPropertyDocumentContentType = 7] = "esriGraphPropertyDocumentContentType", e10[e10.esriGraphPropertyDocumentMetadata = 8] = "esriGraphPropertyDocumentMetadata", e10[e10.esriGraphPropertyDocumentFileExtension = 9] = "esriGraphPropertyDocumentFileExtension", e10[e10.esriGraphPropertyProvenanceInstanceId = 10] = "esriGraphPropertyProvenanceInstanceId", e10[e10.esriGraphPropertyProvenanceSourceType = 11] = "esriGraphPropertyProvenanceSourceType", e10[e10.esriGraphPropertyProvenanceSourceName = 12] = "esriGraphPropertyProvenanceSourceName", e10[e10.esriGraphPropertyProvenanceSource = 13] = "esriGraphPropertyProvenanceSource", e10[e10.esriGraphPropertyProvenanceComment = 14] = "esriGraphPropertyProvenanceComment", e10[e10.esriGraphPropertyProvenanceTypeName = 15] = "esriGraphPropertyProvenanceTypeName", e10[e10.esriGraphPropertyProvenancePropertyName = 16] = "esriGraphPropertyProvenancePropertyName";
}(p15 || (p15 = {})), function(e10) {
  e10[e10.esriIdentifierInfoTypeUNSPECIFIED = 0] = "esriIdentifierInfoTypeUNSPECIFIED", e10[e10.esriIdentifierInfoTypeDatabaseNative = 1] = "esriIdentifierInfoTypeDatabaseNative", e10[e10.esriIdentifierInfoTypeUniformProperty = 2] = "esriIdentifierInfoTypeUniformProperty";
}(n9 || (n9 = {}));

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToDataModelFactories.js
var g6 = false;
function h4(r6) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  r6.deleteLater(), g6 = false;
  const n10 = new y2({ timestamp: r6.timestamp, spatialReference: new g2(r6.spatial_reference), strict: r6.strict, objectIdField: r6.objectid_property, globalIdField: r6.globalid_property, arcgisManaged: r6.arcgis_managed, identifierInfo: { identifierMappingInfo: { identifierInfoType: n9[(_c = (_b = (_a = r6.identifier_info) == null ? void 0 : _a.identifier_mapping_info) == null ? void 0 : _b.identifier_info_type) == null ? void 0 : _c.value], databaseNativeIdentifier: (_e = (_d = r6.identifier_info) == null ? void 0 : _d.identifier_mapping_info) == null ? void 0 : _e.database_native_identifier, uniformPropertyIdentifier: { identifierPropertyName: (_h = (_g = (_f = r6.identifier_info) == null ? void 0 : _f.identifier_mapping_info) == null ? void 0 : _g.uniform_property_identifier) == null ? void 0 : _h.identifier_property_name } }, identifierGenerationInfo: { uuidMethodHint: t12[(_k = (_j = (_i = r6.identifier_info) == null ? void 0 : _i.identifier_generation_info) == null ? void 0 : _j.uuid_method_hint) == null ? void 0 : _k.value] } }, searchIndexes: S3(r6.search_indexes), entityTypes: L(r6.entity_types), relationshipTypes: F(r6.relationship_types), metaEntityTypes: L(r6.meta_entity_types), provenanceSourceTypeValues: G(r6.provenance_source_type_values.value_behavior_array) });
  return g6 && n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("A big integer field was detected in the retrieved data model.  The `big-integer` field type is not fully supported in web clients.  Please see https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#type"), n10;
}
function v(e10) {
  return e10.deleteLater(), new e3(z(e10));
}
function b2(e10) {
  return e10.deleteLater(), new i6({ name: e10.name, unique: e10.unique, ascending: e10.ascending, description: e10.description, fieldNames: x(e10.fields) });
}
function z(e10) {
  return { name: e10.name, alias: e10.alias, role: e7[e10.role.value], strict: e10.strict, properties: M(e10.properties), fieldIndexes: P3(e10.field_indexes) };
}
function T2(e10) {
  return e10.deleteLater(), new s7({ alias: e10.alias, name: e10.name, fieldType: r5[e10.field_type.value] ? r5[e10.field_type.value] : void 0, geometryType: i11[e10.geometry_type.value] ? i11[e10.geometry_type.value] : null, hasM: e10.has_m, hasZ: e10.has_z, nullable: e10.nullable, editable: e10.editable, required: e10.required, defaultVisibility: e10.default_visibility, systemMaintained: e10.system_maintained, role: p15[e10.role.value], defaultValue: e10.default_value });
}
function w2(e10) {
  e10.deleteLater();
  const t13 = z(e10), i13 = [];
  for (let r6 = 0; r6 < e10.end_points.size(); r6++) {
    const t14 = e10.end_points.get(r6);
    i13.push({ originEntityType: t14.origin_entity_type, destinationEntityType: t14.dest_entity_type });
  }
  return e10.end_points.delete(), new p9(Object.assign({ endPoints: i13 }, t13));
}
function I(e10) {
  return new p10({ behavior: e10.behavior, value: e10.value });
}
function L(e10) {
  const t13 = [];
  for (let i13 = 0; i13 < e10.size(); i13++) t13.push(v(e10.get(i13)));
  return e10.delete(), t13;
}
function x(e10) {
  const t13 = [];
  for (let i13 = 0; i13 < e10.size(); i13++) t13.push(e10.get(i13));
  return e10.delete(), t13;
}
function M(e10) {
  const t13 = [];
  for (let i13 = 0; i13 < e10.size(); i13++) {
    const r6 = T2(e10.get(i13));
    "esriFieldTypeBigInteger" === r6.fieldType && (g6 = true), t13.push(r6);
  }
  return e10.delete(), t13;
}
function P3(e10) {
  const t13 = [];
  for (let i13 = 0; i13 < e10.size(); i13++) t13.push(b2(e10.get(i13)));
  return e10.delete(), t13;
}
function F(e10) {
  const t13 = [];
  for (let i13 = 0; i13 < e10.size(); i13++) t13.push(w2(e10.get(i13)));
  return e10.delete(), t13;
}
function G(e10) {
  const t13 = [];
  for (let i13 = 0; i13 < e10.size(); i13++) {
    const r6 = e10.get(i13);
    r6.deleteLater(), t13.push(I(r6));
  }
  return e10.delete(), t13;
}
function S3(e10) {
  const t13 = [];
  for (let i13 = 0; i13 < e10.size(); i13++) {
    const i14 = new p14(), r6 = e10.get(0);
    i14.name = r6.name, i14.supportedCategory = o3[r6.supported_category.value];
    const n10 = r6.analyzers.size();
    for (let e11 = 0; e11 < n10; e11++) i14.analyzers.push({ name: r6.analyzers.get(e11).name });
    r6.analyzers.delete();
    for (let e11 = 0; e11 < r6.search_properties.keys().size(); e11++) {
      const t14 = r6.search_properties.keys().get(e11), n11 = r6.search_properties.get(t14), a9 = [];
      for (let e12 = 0; e12 < n11.property_names.size(); e12++) a9.push(n11.property_names.get(e12));
      i14.searchProperties.set(t14, { propertyNames: a9 });
    }
    t13.push(i14);
  }
  return e10.delete(), t13;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/KnowledgeWasmInterface.js
var E;
!function(E4) {
  E4[E4.ESRI_GEOMETRY_NULL = 0] = "ESRI_GEOMETRY_NULL", E4[E4.ESRI_GEOMETRY_POINT = 1] = "ESRI_GEOMETRY_POINT", E4[E4.ESRI_GEOMETRY_MULTIPOINT = 2] = "ESRI_GEOMETRY_MULTIPOINT", E4[E4.ESRI_GEOMETRY_POLYLINE = 3] = "ESRI_GEOMETRY_POLYLINE", E4[E4.ESRI_GEOMETRY_POLYGON = 4] = "ESRI_GEOMETRY_POLYGON", E4[E4.ESRI_GEOMETRY_ENVELOPE = 5] = "ESRI_GEOMETRY_ENVELOPE", E4[E4.ESRI_GEOMETRY_ANY = 6] = "ESRI_GEOMETRY_ANY", E4[E4.ESRI_GEOMETRY_MULTI_PATCH = 7] = "ESRI_GEOMETRY_MULTI_PATCH";
}(E || (E = {}));

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToGeometryFactories.js
function a8(e10, o4) {
  const s12 = { spatialReference: o4 }, r6 = c9(e10, s12), n10 = e10.lengths, a9 = e10.coords, h7 = n10[0];
  s12.points = [];
  let l4 = 0;
  for (let t13 = 0; t13 < h7; t13++) {
    const e11 = [];
    for (let t14 = 0; t14 < r6; t14++) e11[t14] = a9[l4], l4++;
    s12.points.push(e11);
  }
  return new u2(s12);
}
function h5(e10, t13) {
  const s12 = { spatialReference: t13 };
  let r6 = 2;
  c9(e10, s12);
  const n10 = e10.coords;
  return s12.x = n10[0], s12.y = n10[1], e10.has_z && (s12.z = n10[r6], r6++), e10.has_m && (s12.m = n10[r6]), new j(s12);
}
function l3(e10, t13) {
  const { paths: o4, hasM: s12, hasZ: a9 } = p16(e10, E.ESRI_GEOMETRY_POLYLINE);
  return new P2({ paths: o4, hasM: s12, hasZ: a9, spatialReference: t13 });
}
function i12(e10, t13) {
  const { paths: o4, hasM: r6, hasZ: a9 } = p16(e10, E.ESRI_GEOMETRY_POLYGON);
  return new j2({ rings: o4, hasM: r6, hasZ: a9, spatialReference: t13 });
}
function p16(t13, o4) {
  const s12 = { paths: [], hasM: false, hasZ: false }, r6 = c9(t13, s12), { coords: n10, geometry_type: a9, lengths: h7 } = t13;
  if (a9.value !== o4) throw new s("KnowledgeGraph:illegal-geometry-type", "Illegal Geometry type for multipath conversion");
  let l4 = 0;
  return h7.forEach((e10) => {
    const t14 = [];
    for (let o5 = 0; o5 < e10; o5++) {
      const e11 = [];
      for (let t15 = 0; t15 < r6; t15++) e11[t15] = n10[l4], l4++;
      t14.push(e11);
    }
    s12.paths.push(t14);
  }), s12;
}
function c9(e10, t13) {
  let o4 = 2;
  return e10.has_z ? (t13.hasZ = e10.has_z, o4++) : t13.hasZ = false, e10.has_m ? (t13.hasM = e10.has_m, o4++) : t13.hasM = false, o4;
}

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories.js
var m5 = () => n.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors");
var f3 = { decodedWasmObjToQueryResponseObj: (e10, t13, r6) => {
  if (null == e10) return null;
  if ("object" != typeof e10) return e10;
  if ("getDate" in e10) return e10;
  if ("geometry_type" in e10) switch (e10.geometry_type.value) {
    case null:
      return null;
    case E.ESRI_GEOMETRY_POINT:
      return h5(e10, r6);
    case E.ESRI_GEOMETRY_MULTIPOINT:
      return a8(e10, r6);
    case E.ESRI_GEOMETRY_POLYLINE:
      return l3(e10, r6);
    case E.ESRI_GEOMETRY_POLYGON:
      return i12(e10, r6);
    case E.ESRI_GEOMETRY_ENVELOPE:
    case E.ESRI_GEOMETRY_MULTI_PATCH:
      return m5().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"), null;
    case E.ESRI_GEOMETRY_NULL:
    case E.ESRI_GEOMETRY_ANY:
    default:
      return m5().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"), null;
  }
  else {
    if (!("object_value_type" in e10)) return m5().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"), null;
    switch (e10.object_value_type.value) {
      case e5.OBJECT:
        return j4(e10, t13, r6);
      case e5.ENTITY:
        return g7(e10, t13, r6);
      case e5.RELATIONSHIP:
        return h6(e10, t13, r6);
      case e5.PATH:
        return T3(e10, t13, r6);
      case e5.ARRAY:
        return y4(e10, t13, r6);
      default:
        return m5().warnOnce("Unknown graph object type detected!  Result interpreted as null"), null;
    }
  }
} };
function y4(e10, t13, r6) {
  const n10 = [], o4 = e10.count();
  for (let s12 = 0; s12 < o4; s12++) {
    const o5 = e10.get_value_at(s12);
    n10.push(E2(o5, t13, r6));
  }
  return n10;
}
function E2(e10, t13, r6) {
  return f3.decodedWasmObjToQueryResponseObj(e10, t13, r6);
}
function g7(e10, t13, n10) {
  const o4 = e10.type_name, s12 = O2(e10, t13, n10), a9 = e10.get_id();
  return new c(Object.assign({ typeName: o4, id: a9 }, s12));
}
function O2(e10, t13, r6) {
  const n10 = {}, o4 = e10.key_count();
  for (let s12 = 0; s12 < o4; s12++) n10[e10.get_key_at(s12)] = E2(e10.get_value_at(s12), t13, r6);
  return { properties: n10 };
}
function j4(e10, t13, r6) {
  return new t2(O2(e10, t13, r6));
}
function T3(e10, t13, r6) {
  const n10 = e10.entity_count(), o4 = e10.relationship_count(), s12 = [];
  for (let a9 = 0; a9 < n10; a9++) s12.push(g7(e10.get_entity_at(a9), t13, r6)), a9 < o4 && s12.push(h6(e10.get_relationship_at(a9), t13, r6));
  return new c2({ path: s12 });
}
function h6(e10, t13, r6) {
  const n10 = e10.type_name, o4 = O2(e10, t13, r6);
  return new p(Object.assign({ typeName: n10, id: e10.get_id(), originId: e10.get_origin_entity_id(), destinationId: e10.get_destination_entity_id() }, o4));
}
function w3(e10) {
  const r6 = [];
  for (let t13 = 0; t13 < e10.get_header_keys().size(); t13++) r6.push(e10.get_header_keys().get(t13));
  const n10 = new g2(e10.get_out_sr());
  return new p6({ headerKeys: r6, outSpatialReference: n10, exceededTransferLimit: e10.exceeded_transfer_limit() });
}

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphApplyEditsResult.js
var e8 = class extends g {
  constructor(r6) {
    super(r6), this.hasError = false, this.error = null, this.editResults = [];
  }
};
r([m()], e8.prototype, "hasError", void 0), r([m()], e8.prototype, "error", void 0), r([m()], e8.prototype, "editResults", void 0), e8 = r([a("esri.rest.knowledgeGraph.GraphApplyEditsResult")], e8);
var p18 = e8;

// node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories.js
function e9(e10) {
  const o4 = e10.has_error(), t13 = new p18({ hasError: o4, error: o4 ? { errorCode: e10.error.error_code, errorMessage: e10.error.error_message } : null }), s12 = e10.get_edit_results_count();
  for (let r6 = 0; r6 < s12; r6++) {
    const o5 = e10.get_edit_results_at(r6), s13 = e10.get_edit_results_type_name_at(r6), _2 = [], d4 = [], u4 = [], a9 = o5.get_add_results_count(), l4 = o5.get_update_results_count(), g8 = o5.get_delete_results_count();
    for (let r7 = 0; r7 < a9; r7++) {
      const e11 = o5.get_add_result_at(r7);
      _2.push({ id: e11.id, error: { errorCode: e11.error.error_code, errorMessage: e11.error.error_message } });
    }
    for (let r7 = 0; r7 < l4; r7++) {
      const e11 = o5.get_update_result_at(r7);
      d4.push({ id: e11.id, error: { errorCode: e11.error.error_code, errorMessage: e11.error.error_message } });
    }
    for (let r7 = 0; r7 < g8; r7++) {
      const e11 = o5.get_delete_result_at(r7);
      u4.push({ id: e11.id, error: { errorCode: e11.error.error_code, errorMessage: e11.error.error_message } });
    }
    t13.editResults.push({ typeName: s13, adds: _2, updates: d4, deletes: u4 });
  }
  return t13;
}

// node_modules/@arcgis/core/rest/knowledgeGraphService.js
var E3 = /* @__PURE__ */ new Map();
var C = () => new Map(E3.entries());
var M2 = { fetchKnowledgeGraph: async (e10) => {
  const t13 = new c7({ url: e10 }), r6 = [];
  return r6.push(U(t13)), r6.push(H(t13)), await Promise.all(r6), t13;
}, refreshDataModel: async (e10) => {
  e10.dataModel = await ie(e10);
}, refreshServiceDefinition: async (e10) => {
  var _a, _b;
  const r6 = (await P(e10.url, { query: { f: "json" } })).data;
  return r6.capabilities = (_a = r6 == null ? void 0 : r6.capabilities) == null ? void 0 : _a.split(","), r6.supportedQueryFormats = (_b = r6 == null ? void 0 : r6.supportedQueryFormats) == null ? void 0 : _b.split(","), e10.serviceDefinition = new s8(r6), e10.serviceDefinition;
}, executeFindPathsAsynchronous: async (e10, t13) => {
  const a9 = e10.inKnowledgeGraphUrl.split("/rest/services");
  if (a9.length < 2) throw new s("knowledge-graph:invalid-tool-url", "The URL for the KG Service was not correctly formatted.  It should contain /reset/services/");
  const n10 = a9[0];
  return await O3(`${n10}/rest/services/System/KnowledgeGraphServerToolsAsync/GPServer/ServerFilteredFindPaths`, { in_knowledge_graph_url: e10.inKnowledgeGraphUrl, config_type: "STRING", config_string: e10.config.toJSON(), result_type: "STRING" }, {}, t13);
}, executeFindPaths: async (e10, t13) => {
  const a9 = e10.inKnowledgeGraphUrl.split("/rest/services");
  if (a9.length < 2) throw new s("knowledge-graph:invalid-tool-url", "The URL for the KG Service was not correctly formatted.  It should contain /reset/services/");
  const n10 = a9[0], o4 = await J3(`${n10}/rest/services/System/KnowledgeGraphServerTools/GPServer/ServerFilteredFindPaths/execute`, { method: "post", query: { f: "pjson", in_knowledge_graph_url: e10.inKnowledgeGraphUrl, config_type: "STRING", config_string: JSON.stringify(e10.config), result_type: "STRING" }, ...t13 });
  if (o4.data.results.length < 1) throw new s("knowledge-graph:no-results", "No results were returned from the FindPaths tool - no results returned", o4);
  let s12;
  for (const r6 of o4.data.results) if ("out_results_string" === r6.paramName) {
    s12 = r6.value;
    break;
  }
  if (!s12) throw new s("knowledge-graph:no-results", "No results were returned from the FindPaths tool - no results were returned on the expected paramater out_results_string", o4);
  return s12;
}, fetchAsynchronousFindPathsResultData: async (e10, t13) => (await e10.fetchResultData("out_results_string", null, t13)).value, executeQueryStreaming: async (e10, t13, a9) => {
  var _a;
  const n10 = "include", o4 = `${e10.url}/graph/query`;
  await V(e10);
  const s12 = await te(o4, a9);
  if (!((_a = e10.serviceDefinition) == null ? void 0 : _a.supportsProvenance) && t13.provenanceBehavior === n10) throw new s("knowledge-graph:provenance-not-supported", "The Knowledge Graph Service definition indicated that provenance is not supported");
  s12.data.body = await Z(t13, e10);
  const i13 = await $(s12.data.url, s12.data);
  if (e10.dataModel) {
    const t14 = await se(i13, e10.dataModel);
    return new p8({ resultRowsStream: t14.readableStream, resultHeader: t14.resultHeader });
  }
  throw new s("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, executeApplyEdits: async (e10, t13, a9) => {
  var _a;
  if ((_a = e10.serviceDefinition) == null ? void 0 : _a.dataEditingNotSupported) throw new s("knowledge-graph:data-editing-not-supported", "The Knowledge Graph Service definition indicated that data editing is not supported");
  const n10 = `${e10.url}/graph/applyEdits`;
  await V(e10);
  const o4 = await te(n10, a9);
  o4.data.body = await X(t13, e10);
  return re(await $(o4.data.url, o4.data));
}, executeQuery: async (e10, a9, n10) => {
  var _a;
  const o4 = `${e10.url}/graph/query`, s12 = await P(o4, { responseType: "array-buffer", query: { f: "pbf", openCypherQuery: a9.openCypherQuery, ...n10 == null ? void 0 : n10.query }, signal: n10 == null ? void 0 : n10.signal, timeout: n10 == null ? void 0 : n10.timeout }), i13 = (_a = s12.getHeader) == null ? void 0 : _a.call(s12, "content-type"), l4 = s12.data;
  if (i13 == null ? void 0 : i13.includes("application/x-protobuf")) {
    const t13 = new (await r3()).GraphQueryDecoder();
    if (t13.deleteLater(), e10.dataModel) {
      const r6 = oe({ wasmQueryDecoder: t13, newArrayBufferToParse: l4, dataModel: e10.dataModel });
      return new c6({ resultRows: r6.resultRows, resultHeader: r6.resultHeader });
    }
    throw new s("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: i13, data: s12.data });
}, executeSearch: async (e10, a9, n10) => {
  var _a;
  const o4 = a9.typeCategoryFilter, s12 = `${e10.url}/graph/search`, i13 = await P(s12, { responseType: "array-buffer", query: { f: "pbf", searchQuery: `"${a9.searchQuery}"`, typeCategoryFilter: o4, ...n10 == null ? void 0 : n10.query }, signal: n10 == null ? void 0 : n10.signal, timeout: n10 == null ? void 0 : n10.timeout }), l4 = (_a = i13.getHeader) == null ? void 0 : _a.call(i13, "content-type"), c10 = i13.data;
  if (l4 == null ? void 0 : l4.includes("application/x-protobuf")) {
    const t13 = new (await r3()).GraphQueryDecoder();
    if (t13.deleteLater(), e10.dataModel) {
      const r6 = oe({ wasmQueryDecoder: t13, newArrayBufferToParse: c10, dataModel: e10.dataModel });
      return new c6({ resultRows: r6.resultRows, resultHeader: r6.resultHeader });
    }
    throw new s("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: l4, data: i13.data });
}, executeSearchStreaming: async (e10, t13, a9) => {
  const n10 = `${e10.url}/graph/search`;
  await V(e10);
  const o4 = await te(n10, a9);
  o4.data.body = await ee(t13);
  const s12 = await $(o4.data.url, o4.data);
  if (e10.dataModel) {
    const t14 = await se(s12, e10.dataModel);
    return new p8({ resultRowsStream: t14.readableStream, resultHeader: t14.resultHeader });
  }
  throw new s("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, fetchClientDataAtKeys: async (e10, t13, a9 = { ignoreCache: false }) => {
  if (!t13.length) return /* @__PURE__ */ new Map();
  let n10 = E3.get(e10.url || "");
  n10 || (n10 = /* @__PURE__ */ new Map(), E3.set(e10.url || "", n10));
  const o4 = new Map(n10.entries()), s12 = `${e10.url}/clientData/fetch`;
  t13 = Array.from(new Set(t13));
  const i13 = await r3(), d4 = t8(t13, n10, i13, a9.ignoreCache), l4 = await te(s12, a9.requestOptions);
  l4.data.body = d4;
  const c10 = await $(l4.data.url, l4.data), p19 = c10.headers.get("content-type");
  if (p19 == null ? void 0 : p19.includes("application/x-protobuf")) {
    const e11 = new i13.ClientDataFetchResponseDecoder();
    e11.deleteLater();
    const t14 = await c10.arrayBuffer();
    return e11.decode(new Uint8Array(t14)), e11.has_error() && e4(e11.error, "knowledge-graph:fetchClientDataAtKeys-decoding-error", "An error occurred while decoding the client data keys response"), n8(e11, n10, o4, a9.ignoreCache);
  }
  throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response when fetching client data", { responseType: p19, data: c10 });
}, fetchAllClientDataKeys: async (e10, a9) => {
  var _a;
  const n10 = `${e10.url}/clientData`, o4 = await P(n10, { responseType: "array-buffer", query: { f: "pbf" }, signal: a9 == null ? void 0 : a9.signal, timeout: a9 == null ? void 0 : a9.timeout }), s12 = (_a = o4.getHeader) == null ? void 0 : _a.call(o4, "content-type"), i13 = o4.data;
  if (s12 == null ? void 0 : s12.includes("application/x-protobuf")) {
    const e11 = new (await r3()).ClientDataKeysResponseDecoder();
    return e11.deleteLater(), e11.decode(new Uint8Array(i13)), e11.has_error() && e4(e11.error, "knowledge-graph:fetchAllClientDataKeys-decoding-error", "An error occurred while decoding the client data keys response"), _(e11);
  }
  throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: s12, data: o4.data });
}, clearClientDataCache: () => E3.clear(), _fetchWrapper: async (e10, t13) => fetch(e10, t13), _submitJobWrapper: async (e10, t13, r6, a9) => s5(e10, t13, r6, a9), _esriRequestWrapper: async (e10, r6) => P(e10, r6) };
async function P4(e10, t13, r6) {
  return M2.executeApplyEdits(e10, t13, r6);
}
async function q(e10, t13, r6) {
  return M2.executeQuery(e10, t13, r6);
}
async function F2(e10, t13, r6) {
  return M2.executeQueryStreaming(e10, t13, r6);
}
async function Q(e10, t13, r6) {
  return M2.executeSearch(e10, t13, r6);
}
async function j5(e10, t13, r6) {
  return M2.executeSearchStreaming(e10, t13, r6);
}
function K(e10, t13) {
  return M2.fetchAllClientDataKeys(e10, t13);
}
function W(e10, t13, r6) {
  return M2.fetchClientDataAtKeys(e10, t13, r6);
}
async function I2(e10) {
  return M2.fetchKnowledgeGraph(e10);
}
async function U(e10) {
  return M2.refreshDataModel(e10);
}
async function H(e10) {
  return M2.refreshServiceDefinition(e10);
}
async function L2(e10, t13) {
  return M2.executeFindPathsAsynchronous(e10, t13);
}
async function N2(e10, t13) {
  return M2.executeFindPaths(e10, t13);
}
async function z2(e10, t13) {
  return M2.fetchAsynchronousFindPathsResultData(e10, t13);
}
function B() {
  return M2.clearClientDataCache();
}
async function $(e10, t13) {
  return M2._fetchWrapper(e10, t13);
}
async function O3(e10, t13, r6, a9) {
  return M2._submitJobWrapper(e10, t13, r6, a9);
}
async function J3(e10, t13) {
  return M2._esriRequestWrapper(e10, t13);
}
async function V(t13) {
  var _a;
  const r6 = (_a = s2) == null ? void 0 : _a.findCredential(t13.url);
  r6 || (t13.dataModel ? await ie(t13) : await U(t13));
}
function Y(e10, t13, r6, a9) {
  null == t13 ? r6.set_param_key_value(e10, "") : "object" != typeof t13 || t13 instanceof Date ? r6.set_param_key_value(e10, t13) : t13 instanceof n3 ? r6.set_param_key_value(e10, u3(t13, a9)) : Array.isArray(t13) ? r6.set_param_key_value(e10, l2(t13, a9)) : r6.set_param_key_value(e10, s10(t13, a9));
}
async function X(e10, t13) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (t13.dataModel || await U(t13), !t13.dataModel) throw new s("knowledge-graph:data-model-undefined", "Encoding could not proceed because a data model was not provided and it could not be determined from the service");
  const a9 = await r3(), n10 = !!((_a = e10.options) == null ? void 0 : _a.cascadeDelete), o4 = new a9.GraphApplyEditsEncoder(a9.SpatialReferenceUtil.WGS84(), ((_b = e10.options) == null ? void 0 : _b.inputQuantizationParameters) ? s11((_c = e10.options) == null ? void 0 : _c.inputQuantizationParameters) : a9.InputQuantizationUtil.WGS84_lossless());
  o4.deleteLater(), o4.cascade_delete = n10;
  try {
    let t14;
    (_d = e10.entityAdds) == null ? void 0 : _d.forEach((e11) => {
      t14 = o4.add_entity(r4(e11, a9)), e4(t14, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), (_e = e10.relationshipAdds) == null ? void 0 : _e.forEach((e11) => {
      if (!e11.originId || !e11.destinationId) throw new s("knowledge-graph:relationship-origin-destination-missing", "When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");
      t14 = o4.add_relationship(r4(e11, a9)), e4(t14, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), (_f = e10.entityUpdates) == null ? void 0 : _f.forEach((e11) => {
      if (!e11.id) throw new s("knowledge-graph:entity-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      t14 = o4.update_entity(r4(e11, a9)), e4(t14, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), (_g = e10.relationshipUpdates) == null ? void 0 : _g.forEach((e11) => {
      if (!e11.id) throw new s("knowledge-graph:relationship-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      t14 = o4.update_relationship(r4(e11, a9)), e4(t14, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), (_h = e10.entityDeletes) == null ? void 0 : _h.forEach((e11) => {
      var _a2;
      if (!e11.typeName) throw new s("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const t15 = o4.make_delete_helper(e11.typeName, true);
      t15.deleteLater(), (_a2 = e11.ids) == null ? void 0 : _a2.forEach((e12) => {
        t15.delete_by_id(e12);
      });
    }), (_i = e10.relationshipDeletes) == null ? void 0 : _i.forEach((e11) => {
      var _a2;
      if (!e11.typeName) throw new s("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const t15 = o4.make_delete_helper(e11.typeName, false);
      (_a2 = e11.ids) == null ? void 0 : _a2.forEach((e12) => {
        t15.delete_by_id(e12);
      });
    }), o4.encode();
  } catch (i13) {
    throw new s("knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed", { error: i13 });
  }
  const s12 = o4.get_encoding_result();
  return e4(s12.error, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed"), structuredClone(s12.get_byte_buffer());
}
async function Z(e10, t13) {
  var _a, _b;
  const a9 = await r3(), n10 = new a9.GraphQueryRequestEncoder();
  if (n10.deleteLater(), e10.outputSpatialReference ? n10.output_spatial_reference = { wkid: e10.outputSpatialReference.wkid, latestWkid: e10.outputSpatialReference.latestWkid, vcsWkid: e10.outputSpatialReference.vcsWkid, latestVcsWkid: e10.outputSpatialReference.latestVcsWkid, wkt: e10.outputSpatialReference.wkt ?? "" } : n10.output_spatial_reference = a9.SpatialReferenceUtil.WGS84(), n10.open_cypher_query = e10.openCypherQuery, e10.bindParameters) for (const [r6, i13] of Object.entries(e10.bindParameters)) Y(r6, i13, n10, a9);
  if (e10.bindGeometryQuantizationParameters) y3(e10.bindGeometryQuantizationParameters, n10);
  else {
    if (t13.dataModel || await U(t13), 4326 !== ((_b = (_a = t13.dataModel) == null ? void 0 : _a.spatialReference) == null ? void 0 : _b.wkid)) throw new s("knowledge-graph:SR-quantization-mismatch", "If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");
    n10.input_quantization_parameters = a9.InputQuantizationUtil.WGS84_lossless();
  }
  e10.outputQuantizationParameters && m4(e10.outputQuantizationParameters, n10, a9), e10.provenanceBehavior && c8(e10.provenanceBehavior, n10);
  try {
    n10.encode();
  } catch (s12) {
    throw new s("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { error: s12 });
  }
  const o4 = n10.get_encoding_result();
  if (0 !== o4.error.error_code) throw new s("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { errorCode: o4.error.error_code, errorMessage: o4.error.error_message });
  return structuredClone(o4.get_byte_buffer());
}
async function ee(e10) {
  var _a;
  const t13 = await r3(), a9 = new t13.GraphSearchRequestEncoder();
  if (a9.deleteLater(), a9.search_query = e10.searchQuery, a9.type_category_filter = t13.esriNamedTypeCategory[e10.typeCategoryFilter], true === e10.returnSearchContext && (a9.return_search_context = e10.returnSearchContext), null != e10.start && e10.start > 0 && (a9.start_index = e10.start), null != e10.num && (a9.max_num_results = e10.num), null != e10.idsFilter && Array.isArray(e10.idsFilter) && e10.idsFilter.length > 0) try {
    a9.set_ids_filter(l2(e10.idsFilter, t13));
  } catch (o4) {
    throw new s("knowledge-graph:ids-format-error", "Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string", { error: o4 });
  }
  (_a = e10.namedTypesFilter) == null ? void 0 : _a.forEach((e11) => {
    a9.add_named_type_filter(e11);
  });
  try {
    a9.encode();
  } catch (o4) {
    throw new s("knowledge-graph:search-encoding-failed", "Attempting to encode the search failed", { error: o4 });
  }
  const n10 = a9.get_encoding_result();
  if (0 !== n10.error.error_code) throw new s("knowledge-graph:search-encoding-failed", "Attempting to get encoding result from the query failed", { errorCode: n10.error.error_code, errorMessage: n10.error.error_message });
  return structuredClone(n10.get_byte_buffer());
}
async function te(e10, r6) {
  return P(e10, { responseType: "native-request-init", method: "post", query: { f: "pbf", ...r6 == null ? void 0 : r6.query }, body: "x", headers: { "Content-Type": "application/octet-stream" }, signal: r6 == null ? void 0 : r6.signal, timeout: r6 == null ? void 0 : r6.timeout });
}
async function re(e10) {
  const t13 = e10.headers.get("content-type");
  if (t13 == null ? void 0 : t13.includes("application/x-protobuf")) {
    const t14 = await e10.arrayBuffer(), r6 = new (await r3()).GraphApplyEditsDecoder();
    return r6.deleteLater(), r6.decode(new Uint8Array(t14)), e9(r6);
  }
  throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: t13, data: e10.text() });
}
var ae = 50;
function ne(e10) {
  ae = e10;
}
function oe({ wasmQueryDecoder: e10, newArrayBufferToParse: t13, dataModel: a9, decodedHeader: n10, limitMaxProcessingTime: o4 = false }) {
  t13 && e10.push_buffer(new Uint8Array(t13));
  const i13 = [];
  let d4, l4, c10 = 0;
  const p19 = Date.now();
  let u4 = true;
  for (; e10.next_row(); ) {
    d4 && l4 || (d4 = n10 ?? w3(e10), l4 = d4.outSpatialReference ?? new g2({ wkid: 4326 })), c10 || (c10 = e10.get_header_keys().size());
    const t14 = new Array(c10);
    for (let r6 = 0; r6 < c10; r6++) {
      const n11 = e10.get_value(r6);
      t14[r6] = E2(n11, a9, l4);
    }
    if (i13.push(t14), o4 && Date.now() - p19 > ae) {
      u4 = false;
      break;
    }
  }
  if (e10.has_error()) throw new s("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded - inner row decoding", { errorCode: e10.error.error_code, errorMessage: e10.error.error_message });
  return { resultHeader: d4, resultRows: i13, parsedAllResultsFromBuffer: u4 };
}
async function se(e10, t13) {
  var _a;
  const o4 = e10.headers.get("content-type");
  if (e10.headers.get("content-length") && n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."), o4 == null ? void 0 : o4.includes("application/x-protobuf")) {
    const o5 = (_a = e10.body) == null ? void 0 : _a.getReader(), s12 = new (await r3()).GraphQueryDecoder();
    let i13, d4, c10;
    s12.deleteLater();
    const p19 = new Promise((e11, t14) => {
      d4 = e11, c10 = t14;
    });
    let u4 = false, h7 = null;
    const f4 = new ReadableStream({ pull: async function e11(p20) {
      if (!o5) {
        const e12 = new s("knowledge-graph:stream-decoding-error", "Error reading from stream - reader is undefined");
        throw c10(e12), e12;
      }
      const { done: w4, value: f5 } = h7 ? { done: false, value: null } : await o5.read().catch((e12) => {
        throw c10(e12), o5.releaseLock(), e12;
      });
      f5 && (h7 = f5);
      try {
        if (w4) {
          let e12;
          if (s12.has_error() ? e12 = new s("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded - query stream done", { errorCode: s12.error.error_code, errorMessage: s12.error.error_message }) : u4 || d4(new p6()), o5.releaseLock(), e12) throw p20.error(e12), c10(e12), e12;
          return void p20.close();
        }
        const { resultHeader: a9, resultRows: n10, parsedAllResultsFromBuffer: g8 } = oe({ wasmQueryDecoder: s12, newArrayBufferToParse: f5, dataModel: t13, decodedHeader: i13, limitMaxProcessingTime: true });
        return g8 && (h7 = null), !i13 && a9 && (i13 = a9, d4(a9), u4 = true), n10.length > 0 ? void p20.enqueue(n10) : await e11(p20);
      } catch (g8) {
        throw n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(g8), c10(g8), o5.releaseLock(), b(g8) ? g8 : new s("knowledge-graph:unexpected-server-response", "Error inside streaming data return parsing", { error: g8 });
      }
    } });
    return { readableStream: f4, resultHeader: await p19 };
  }
  throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: o4, data: e10.text() });
}
async function ie(e10) {
  var _a;
  const a9 = `${e10.url}/dataModel/queryDataModel`, n10 = await P(a9, { responseType: "array-buffer", query: { f: "pbf" } }), o4 = (_a = n10.getHeader) == null ? void 0 : _a.call(n10, "content-type"), s12 = n10.data;
  if (o4 == null ? void 0 : o4.includes("application/x-protobuf")) {
    const e11 = (await r3()).decode_data_model_from_protocol_buffer(new Uint8Array(s12));
    if (!e11) throw new s("knowledge-graph:data-model-decode-failure", "The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");
    return h4(e11);
  }
  throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: o4, data: n10.data });
}

export {
  r3 as r,
  r5 as r2,
  i11 as i,
  E3 as E,
  C,
  M2 as M,
  P4 as P,
  q,
  F2 as F,
  Q,
  j5 as j,
  K,
  W,
  I2 as I,
  U,
  H,
  L2 as L,
  N2 as N,
  z2 as z,
  B,
  $,
  O3 as O,
  J3 as J,
  ne
};
//# sourceMappingURL=chunk-UY3XX3DT.js.map
