import {
  A,
  D,
  N,
  T,
  g,
  p,
  v
} from "./chunk-6CLOWXHN.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  q
} from "./chunk-LCBD3JEK.js";
import {
  x
} from "./chunk-IPFYNOOY.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/rest/route/utils.js
function r3(r4, e2) {
  if (null == r4) return null;
  const i2 = {}, s2 = new RegExp(`^${e2}`, "i");
  for (const n2 of Object.keys(r4)) if (s2.test(n2)) {
    const s3 = n2.slice(e2.length);
    i2[D.fromJSON(s3)] = r4[n2];
  }
  return i2;
}
function e(r4, e2, i2) {
  if (null != r4) {
    e2.attributes || (e2.attributes = {});
    for (const s2 in r4) {
      const n2 = D.toJSON(s2);
      e2.attributes[`${i2}${n2}`] = r4[s2];
    }
  }
}
function i(r4) {
  const e2 = {};
  for (const i2 of Object.keys(r4)) {
    const s2 = i2;
    e2[D.fromJSON(s2)] = r4[i2];
  }
  return e2;
}
function s(r4) {
  const e2 = {};
  for (const i2 of Object.keys(r4)) {
    const s2 = i2;
    e2[D.toJSON(s2)] = r4[i2];
  }
  return e2;
}
function n(t, r4) {
  return null == t || null == r4 ? null : Math.round((t - r4) / 6e4);
}
function o2(t) {
  var _a, _b, _c;
  const r4 = t.toJSON(), e2 = r4;
  return e2.accumulateAttributeNames && (e2.accumulateAttributeNames = (_a = r4.accumulateAttributeNames) == null ? void 0 : _a.join()), e2.attributeParameterValues && (e2.attributeParameterValues = JSON.stringify(r4.attributeParameterValues)), e2.barriers && (e2.barriers = JSON.stringify(r4.barriers)), e2.outSR && (e2.outSR = (_b = r4.outSR) == null ? void 0 : _b.wkid), e2.overrides && (e2.overrides = JSON.stringify(r4.overrides)), e2.polygonBarriers && (e2.polygonBarriers = JSON.stringify(r4.polygonBarriers)), e2.polylineBarriers && (e2.polylineBarriers = JSON.stringify(r4.polylineBarriers)), e2.restrictionAttributeNames && (e2.restrictionAttributeNames = (_c = r4.restrictionAttributeNames) == null ? void 0 : _c.join()), e2.stops && (e2.stops = JSON.stringify(r4.stops)), e2.travelMode && (e2.travelMode = JSON.stringify(r4.travelMode)), e2;
}

// node_modules/@arcgis/core/rest/support/PointBarrier.js
var C;
var S2 = C = class extends a2.ClonableMixin(S) {
  constructor(t) {
    super(t), this.addedCost = null, this.barrierType = null, this.costs = null, this.curbApproach = null, this.fullEdge = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.sideOfEdge = null, this.sourceId = null, this.sourceOid = null, this.status = null, this.symbol = null, this.type = "point-barrier";
  }
  readCosts(t, e2) {
    return r3(e2.attributes, "Attr_");
  }
  writeCosts(t, e2) {
    e(t, e2, "Attr_");
  }
  static fromGraphic(t) {
    return new C({ addedCost: t.attributes.AddedCost ?? null, barrierType: null != t.attributes.BarrierType ? N.fromJSON(t.attributes.BarrierType) : null, costs: null != t.attributes.Costs ? i(JSON.parse(t.attributes.Costs)) : null, curbApproach: null != t.attributes.CurbApproach ? p.fromJSON(t.attributes.CurbApproach) : null, fullEdge: null != t.attributes.FullEdge ? g.fromJSON(t.attributes.FullEdge) : null, geometry: t.geometry, name: t.attributes.Name ?? null, objectId: t.attributes.ObjectID ?? t.attributes.__OBJECTID, popupTemplate: t.popupTemplate, status: null != t.attributes.Status ? A.fromJSON(t.attributes.Status) : null, symbol: t.symbol });
  }
  toGraphic() {
    const t = { ObjectID: this.objectId, AddedCost: this.addedCost, BarrierType: null != this.barrierType ? N.toJSON(this.barrierType) : null, Costs: null != this.costs ? JSON.stringify(s(this.costs)) : null, CurbApproach: null != this.curbApproach ? p.toJSON(this.curbApproach) : null, FullEdge: null != this.fullEdge ? g.toJSON(this.fullEdge) : null, Name: this.name, Status: null != this.status ? A.toJSON(this.status) : null };
    return new b({ geometry: this.geometry, attributes: t, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
S2.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "AddedCost", alias: "Added Cost", type: "esriFieldTypeDouble" }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger" }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString" }, { name: "CurbApproach", alias: "Curb Approach", type: "esriFieldTypeInteger" }, { name: "FullEdge", alias: "Full Edge", type: "esriFieldTypeInteger" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "Status", alias: "Status", type: "esriFieldTypeInteger" }], r([m()], S2.prototype, "addedCost", void 0), r([m({ type: N.apiValues, json: { name: "attributes.BarrierType", read: { reader: N.read }, write: { writer: N.write } } })], S2.prototype, "barrierType", void 0), r([m()], S2.prototype, "costs", void 0), r([o("costs", ["attributes"])], S2.prototype, "readCosts", null), r([r2("costs")], S2.prototype, "writeCosts", null), r([m({ type: p.apiValues, json: { read: { source: "attributes.CurbApproach", reader: p.read } } })], S2.prototype, "curbApproach", void 0), r([m({ type: g.apiValues, json: { name: "attributes.FullEdge", read: { reader: g.read }, write: { writer: g.write } } })], S2.prototype, "fullEdge", void 0), r([m({ type: j, json: { write: true } })], S2.prototype, "geometry", void 0), r([m({ json: { name: "attributes.Name" } })], S2.prototype, "name", void 0), r([m({ json: { name: "attributes.ObjectID" } })], S2.prototype, "objectId", void 0), r([m({ type: q })], S2.prototype, "popupTemplate", void 0), r([m({ type: T.apiValues, json: { read: { source: "attributes.SideOfEdge", reader: T.read } } })], S2.prototype, "sideOfEdge", void 0), r([m({ json: { read: { source: "attributes.SourceID" } } })], S2.prototype, "sourceId", void 0), r([m({ json: { read: { source: "attributes.SourceOID" } } })], S2.prototype, "sourceOid", void 0), r([m({ type: A.apiValues, json: { read: { source: "attributes.Status", reader: A.read } } })], S2.prototype, "status", void 0), r([m({ types: x })], S2.prototype, "symbol", void 0), r([m({ readOnly: true, json: { read: false } })], S2.prototype, "type", void 0), S2 = C = r([a("esri.rest.support.PointBarrier")], S2);
var T2 = S2;

// node_modules/@arcgis/core/rest/support/PolygonBarrier.js
var j3;
var h = j3 = class extends a2.ClonableMixin(S) {
  constructor(t) {
    super(t), this.barrierType = null, this.costs = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.scaleFactor = null, this.symbol = null, this.type = "polygon-barrier";
  }
  readCosts(t, e2) {
    return r3(e2.attributes, "Attr_");
  }
  writeCosts(t, e2) {
    e(t, e2, "Attr_");
  }
  static fromGraphic(t) {
    return new j3({ barrierType: null != t.attributes.BarrierType ? N.fromJSON(t.attributes.BarrierType) : null, costs: null != t.attributes.Costs ? i(JSON.parse(t.attributes.Costs)) : null, geometry: t.geometry, name: t.attributes.Name ?? null, objectId: t.attributes.ObjectID ?? t.attributes.__OBJECTID, popupTemplate: t.popupTemplate, scaleFactor: t.attributes.ScaleFactor ?? null, symbol: t.symbol });
  }
  toGraphic() {
    const t = { ObjectID: this.objectId, BarrierType: null != this.barrierType ? N.toJSON(this.barrierType) : null, Costs: null != this.costs ? JSON.stringify(s(this.costs)) : null, Name: this.name ?? null, ScaleFactor: this.scaleFactor ?? null };
    return new b({ geometry: this.geometry, attributes: t, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
h.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger" }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "ScaleFactor", alias: "Scale Factor", type: "esriFieldTypeDouble" }], r([m({ type: N.apiValues, json: { name: "attributes.BarrierType", read: { reader: N.read }, write: { writer: N.write } } })], h.prototype, "barrierType", void 0), r([m()], h.prototype, "costs", void 0), r([o("costs", ["attributes"])], h.prototype, "readCosts", null), r([r2("costs")], h.prototype, "writeCosts", null), r([m({ type: j2, json: { write: true } })], h.prototype, "geometry", void 0), r([m({ json: { name: "attributes.Name" } })], h.prototype, "name", void 0), r([m({ json: { name: "attributes.ObjectID" } })], h.prototype, "objectId", void 0), r([m({ type: q })], h.prototype, "popupTemplate", void 0), r([m()], h.prototype, "scaleFactor", void 0), r([m({ types: x })], h.prototype, "symbol", void 0), r([m({ readOnly: true, json: { read: false } })], h.prototype, "type", void 0), h = j3 = r([a("esri.rest.support.PolygonBarrier")], h);
var T3 = h;

// node_modules/@arcgis/core/rest/support/PolylineBarrier.js
var b2;
var d = b2 = class extends a2.ClonableMixin(S) {
  constructor(e2) {
    super(e2), this.barrierType = null, this.costs = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.scaleFactor = null, this.symbol = null, this.type = "polyline-barrier";
  }
  readCosts(e2, t) {
    return r3(t.attributes, "Attr_");
  }
  static fromGraphic(e2) {
    return new b2({ barrierType: null != e2.attributes.BarrierType ? N.fromJSON(e2.attributes.BarrierType) : null, costs: null != e2.attributes.Costs ? i(JSON.parse(e2.attributes.Costs)) : null, geometry: e2.geometry, name: e2.attributes.Name ?? null, objectId: e2.attributes.ObjectID ?? e2.attributes.__OBJECTID, popupTemplate: e2.popupTemplate, scaleFactor: e2.attributes.ScaleFactor ?? null, symbol: e2.symbol });
  }
  toGraphic() {
    const e2 = { ObjectID: this.objectId, BarrierType: null != this.barrierType ? N.toJSON(this.barrierType) : null, Costs: null != this.costs ? JSON.stringify(s(this.costs)) : null, Name: this.name, ScaleFactor: this.scaleFactor };
    return new b({ geometry: this.geometry, attributes: e2, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
d.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "BarrierType", alias: "Barrier Type", type: "esriFieldTypeInteger" }, { name: "Costs", alias: "Costs", type: "esriFieldTypeString" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "ScaleFactor", alias: "Scale Factor", type: "esriFieldTypeDouble" }], r([m({ type: N.apiValues, json: { read: { source: "attributes.BarrierType", reader: N.read } } })], d.prototype, "barrierType", void 0), r([m()], d.prototype, "costs", void 0), r([o("costs", ["attributes"])], d.prototype, "readCosts", null), r([m({ type: P, json: { write: true } })], d.prototype, "geometry", void 0), r([m({ json: { name: "attributes.Name" } })], d.prototype, "name", void 0), r([m({ json: { name: "attributes.ObjectID" } })], d.prototype, "objectId", void 0), r([m({ type: q })], d.prototype, "popupTemplate", void 0), r([m()], d.prototype, "scaleFactor", void 0), r([m({ types: x })], d.prototype, "symbol", void 0), r([m({ readOnly: true, json: { read: false } })], d.prototype, "type", void 0), d = b2 = r([a("esri.rest.support.PolylineBarrier")], d);
var j4 = d;

// node_modules/@arcgis/core/rest/support/Stop.js
var C2;
var S3 = C2 = class extends a2.ClonableMixin(S) {
  constructor(e2) {
    super(e2), this.arriveCurbApproach = null, this.arriveTime = null, this.arriveTimeOffset = null, this.bearing = null, this.bearingTol = null, this.cumulativeCosts = null, this.cumulativeDistance = null, this.cumulativeDuration = null, this.curbApproach = null, this.departCurbApproach = null, this.departTime = null, this.departTimeOffset = null, this.distanceToNetworkInMeters = null, this.geometry = null, this.lateDuration = null, this.locationType = null, this.name = null, this.navLatency = null, this.objectId = null, this.popupTemplate = null, this.posAlong = null, this.routeName = null, this.serviceCosts = null, this.serviceDistance = null, this.serviceDuration = null, this.sequence = null, this.sideOfEdge = null, this.snapX = null, this.snapY = null, this.snapZ = null, this.sourceId = null, this.sourceOid = null, this.status = null, this.symbol = null, this.timeWindowEnd = null, this.timeWindowEndOffset = null, this.timeWindowStart = null, this.timeWindowStartOffset = null, this.type = "stop", this.violations = null, this.waitDuration = null, this.wait = null;
  }
  readArriveTimeOffset(e2, t) {
    return n(t.attributes.ArriveTime, t.attributes.ArriveTimeUTC);
  }
  readCumulativeCosts(e2, t) {
    return r3(t.attributes, "Cumul_");
  }
  readDepartTimeOffset(e2, t) {
    return n(t.attributes.DepartTime, t.attributes.DepartTimeUTC);
  }
  readServiceCosts(e2, t) {
    return r3(t.attributes, "Attr_");
  }
  writeServiceCosts(e2, t) {
    e(e2, t, "Attr_");
  }
  writeTimeWindowEnd(e2, t) {
    null != e2 && (t.attributes || (t.attributes = {}), t.attributes.TimeWindowEnd = e2.getTime());
  }
  writeTimeWindowStart(e2, t) {
    null != e2 && (t.attributes || (t.attributes = {}), t.attributes.TimeWindowStart = e2.getTime());
  }
  readViolations(e2, t) {
    return r3(t.attributes, "Violation_");
  }
  readWait(e2, t) {
    return r3(t.attributes, "Wait_");
  }
  static fromGraphic(e2) {
    return new C2({ arriveCurbApproach: null != e2.attributes.ArrivalCurbApproach ? p.fromJSON(e2.attributes.ArrivalCurbApproach) : null, arriveTime: null != e2.attributes.ArrivalTime ? new Date(e2.attributes.ArrivalTime) : null, arriveTimeOffset: e2.attributes.ArrivalUTCOffset, cumulativeCosts: null != e2.attributes.CumulativeCosts ? i(JSON.parse(e2.attributes.CumulativeCosts)) : null, cumulativeDistance: e2.attributes.CumulativeMeters ?? null, cumulativeDuration: e2.attributes.CumulativeMinutes ?? null, curbApproach: null != e2.attributes.CurbApproach ? p.fromJSON(e2.attributes.CurbApproach) : null, departCurbApproach: null != e2.attributes.DepartureCurbApproach ? p.fromJSON(e2.attributes.DepartureCurbApproach) : null, departTime: null != e2.attributes.DepartureTime ? new Date(e2.attributes.DepartureTime) : null, departTimeOffset: e2.attributes.DepartureUTCOffset ?? null, geometry: e2.geometry, lateDuration: e2.attributes.LateMinutes ?? null, locationType: null != e2.attributes.LocationType ? v.fromJSON(e2.attributes.LocationType) : null, name: e2.attributes.Name, objectId: e2.attributes.ObjectID ?? e2.attributes.__OBJECTID, popupTemplate: e2.popupTemplate, routeName: e2.attributes.RouteName, sequence: e2.attributes.Sequence ?? null, serviceCosts: null != e2.attributes.ServiceCosts ? i(JSON.parse(e2.attributes.ServiceCosts)) : null, serviceDistance: e2.attributes.ServiceMeters ?? null, serviceDuration: e2.attributes.ServiceMinutes ?? null, status: null != e2.attributes.Status ? A.fromJSON(e2.attributes.Status) : null, symbol: e2.symbol, timeWindowEnd: null != e2.attributes.TimeWindowEnd ? new Date(e2.attributes.TimeWindowEnd) : null, timeWindowEndOffset: e2.attributes.TimeWindowEndUTCOffset ?? null, timeWindowStart: null != e2.attributes.TimeWindowStart ? new Date(e2.attributes.TimeWindowStart) : null, timeWindowStartOffset: e2.attributes.TimeWindowStartUTCOffset ?? null, waitDuration: e2.attributes.WaitMinutes ?? null });
  }
  toGraphic() {
    const e2 = { ObjectID: this.objectId, ArrivalCurbApproach: null != this.arriveCurbApproach ? p.toJSON(this.arriveCurbApproach) : null, ArrivalTime: null != this.arriveTime ? this.arriveTime.getTime() : null, ArrivalUTCOffset: this.arriveTimeOffset, CumulativeCosts: null != this.cumulativeCosts ? JSON.stringify(s(this.cumulativeCosts)) : null, CumulativeMeters: this.cumulativeDistance, CumulativeMinutes: this.cumulativeDuration, CurbApproach: null != this.curbApproach ? p.toJSON(this.curbApproach) : null, DepartureCurbApproach: null != this.departCurbApproach ? p.toJSON(this.departCurbApproach) : null, DepartureTime: null != this.departTime ? this.departTime.getTime() : null, DepartureUTCOffset: this.departTimeOffset, LateMinutes: this.lateDuration, LocationType: null != this.locationType ? v.toJSON(this.locationType) : null, Name: this.name, RouteName: this.routeName, Sequence: this.sequence, ServiceCosts: null != this.serviceCosts ? JSON.stringify(s(this.serviceCosts)) : null, ServiceMeters: this.serviceDistance, ServiceMinutes: this.serviceDuration, Status: null != this.status ? A.toJSON(this.status) : null, TimeWindowEnd: null != this.timeWindowEnd ? this.timeWindowEnd.getTime() : null, TimeWindowEndUTCOffset: this.timeWindowEndOffset ?? this.arriveTimeOffset, TimeWindowStart: null != this.timeWindowStart ? this.timeWindowStart.getTime() : null, TimeWindowStartUTCOffset: this.timeWindowStartOffset ?? this.arriveTimeOffset, WaitMinutes: this.waitDuration };
    return new b({ geometry: this.geometry, attributes: e2, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
S3.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "ArrivalCurbApproach", alias: "Arrival Curb Approach", type: "esriFieldTypeInteger" }, { name: "ArrivalTime", alias: "Arrival Time", type: "esriFieldTypeDate" }, { name: "ArrivalUTCOffset", alias: "Arrival Time", type: "esriFieldTypeInteger" }, { name: "CumulativeCosts", alias: "Cumulative Costs", type: "esriFieldTypeString" }, { name: "CumulativeMeters", alias: "Cumulative Meters", type: "esriFieldTypeDouble" }, { name: "CumulativeMinutes", alias: "Cumulative Minutes", type: "esriFieldTypeDouble" }, { name: "CurbApproach", alias: "Curb Approach", type: "esriFieldTypeInteger" }, { name: "DepartureCurbApproach", alias: "Departure Curb Approach", type: "esriFieldTypeInteger" }, { name: "DepartureTime", alias: "Departure Time", type: "esriFieldTypeDate" }, { name: "DepartureUTCOffset", alias: "Departure Time", type: "esriFieldTypeInteger" }, { name: "LateMinutes", alias: "Minutes Late", type: "esriFieldTypeDouble" }, { name: "LocationType", alias: "Location Type", type: "esriFieldTypeInteger" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "RouteName", alias: "Route Name", type: "esriFieldTypeString" }, { name: "Sequence", alias: "Sequence", type: "esriFieldTypeInteger" }, { name: "ServiceCosts", alias: "Service Costs", type: "esriFieldTypeString" }, { name: "ServiceMeters", alias: "Service Meters", type: "esriFieldTypeDouble" }, { name: "ServiceMinutes", alias: "Service Minutes", type: "esriFieldTypeDouble" }, { name: "Status", alias: "Status", type: "esriFieldTypeInteger" }, { name: "TimeWindowEnd", alias: "Time Window End", type: "esriFieldTypeDate" }, { name: "TimeWindowEndUTCOffset", alias: "Time Window End Offset", type: "esriFieldTypeInteger" }, { name: "TimeWindowStart", alias: "Time Window Start", type: "esriFieldTypeDate" }, { name: "TimeWindowStartUTCOffset", alias: "Time Window Start Offset", type: "esriFieldTypeInteger" }, { name: "WaitMinutes", alias: "Minutes Wait", type: "esriFieldTypeDouble" }], r([m({ type: p.apiValues, json: { read: { source: "attributes.ArrivalCurbApproach", reader: p.read } } })], S3.prototype, "arriveCurbApproach", void 0), r([m({ type: Date, json: { read: { source: "attributes.ArriveTimeUTC" } } })], S3.prototype, "arriveTime", void 0), r([m()], S3.prototype, "arriveTimeOffset", void 0), r([o("arriveTimeOffset", ["attributes.ArriveTime", "attributes.ArriveTimeUTC"])], S3.prototype, "readArriveTimeOffset", null), r([m({ json: { name: "attributes.Bearing", read: false, write: true } })], S3.prototype, "bearing", void 0), r([m({ json: { name: "attributes.BearingTol", read: false, write: true } })], S3.prototype, "bearingTol", void 0), r([m()], S3.prototype, "cumulativeCosts", void 0), r([o("cumulativeCosts", ["attributes"])], S3.prototype, "readCumulativeCosts", null), r([m()], S3.prototype, "cumulativeDistance", void 0), r([m()], S3.prototype, "cumulativeDuration", void 0), r([m({ type: p.apiValues, json: { name: "attributes.CurbApproach", read: { reader: p.read }, write: { writer: p.write } } })], S3.prototype, "curbApproach", void 0), r([m({ type: p.apiValues, json: { read: { source: "attributes.DepartCurbApproach", reader: p.read } } })], S3.prototype, "departCurbApproach", void 0), r([m({ type: Date, json: { read: { source: "attributes.DepartTimeUTC" } } })], S3.prototype, "departTime", void 0), r([m()], S3.prototype, "departTimeOffset", void 0), r([o("departTimeOffset", ["attributes.DepartTime", "attributes.DepartTimeUTC"])], S3.prototype, "readDepartTimeOffset", null), r([m({ json: { read: { source: "attributes.DistanceToNetworkInMeters" } } })], S3.prototype, "distanceToNetworkInMeters", void 0), r([m({ type: j, json: { write: true } })], S3.prototype, "geometry", void 0), r([m()], S3.prototype, "lateDuration", void 0), r([m({ type: v.apiValues, json: { name: "attributes.LocationType", read: { reader: v.read }, write: { writer: v.write } } })], S3.prototype, "locationType", void 0), r([m({ json: { name: "attributes.Name" } })], S3.prototype, "name", void 0), r([m({ json: { name: "attributes.NavLatency", read: false, write: true } })], S3.prototype, "navLatency", void 0), r([m({ json: { name: "attributes.ObjectID" } })], S3.prototype, "objectId", void 0), r([m({ type: q })], S3.prototype, "popupTemplate", void 0), r([m({ json: { read: { source: "attributes.PosAlong" } } })], S3.prototype, "posAlong", void 0), r([m({ json: { name: "attributes.RouteName" } })], S3.prototype, "routeName", void 0), r([m()], S3.prototype, "serviceCosts", void 0), r([o("serviceCosts", ["attributes"])], S3.prototype, "readServiceCosts", null), r([r2("serviceCosts")], S3.prototype, "writeServiceCosts", null), r([m()], S3.prototype, "serviceDistance", void 0), r([m()], S3.prototype, "serviceDuration", void 0), r([m({ json: { name: "attributes.Sequence" } })], S3.prototype, "sequence", void 0), r([m({ type: T.apiValues, json: { read: { source: "attributes.SideOfEdge", reader: T.read } } })], S3.prototype, "sideOfEdge", void 0), r([m({ json: { read: { source: "attributes.SnapX" } } })], S3.prototype, "snapX", void 0), r([m({ json: { read: { source: "attributes.SnapY" } } })], S3.prototype, "snapY", void 0), r([m({ json: { read: { source: "attributes.SnapZ" } } })], S3.prototype, "snapZ", void 0), r([m({ json: { read: { source: "attributes.SourceID" } } })], S3.prototype, "sourceId", void 0), r([m({ json: { read: { source: "attributes.SourceOID" } } })], S3.prototype, "sourceOid", void 0), r([m({ type: A.apiValues, json: { read: { source: "attributes.Status", reader: A.read } } })], S3.prototype, "status", void 0), r([m({ types: x })], S3.prototype, "symbol", void 0), r([m({ type: Date, json: { name: "attributes.TimeWindowEnd" } })], S3.prototype, "timeWindowEnd", void 0), r([r2("timeWindowEnd")], S3.prototype, "writeTimeWindowEnd", null), r([m()], S3.prototype, "timeWindowEndOffset", void 0), r([m({ type: Date, json: { name: "attributes.TimeWindowStart" } })], S3.prototype, "timeWindowStart", void 0), r([r2("timeWindowStart")], S3.prototype, "writeTimeWindowStart", null), r([m()], S3.prototype, "timeWindowStartOffset", void 0), r([m({ readOnly: true, json: { read: false } })], S3.prototype, "type", void 0), r([m()], S3.prototype, "violations", void 0), r([o("violations", ["attributes"])], S3.prototype, "readViolations", null), r([m()], S3.prototype, "waitDuration", void 0), r([m()], S3.prototype, "wait", void 0), r([o("wait", ["attributes"])], S3.prototype, "readWait", null), S3 = C2 = r([a("esri.rest.support.Stop")], S3);
var w = S3;

export {
  r3 as r,
  i,
  s,
  n,
  o2 as o,
  T2 as T,
  T3 as T2,
  j4 as j,
  w
};
//# sourceMappingURL=chunk-ZAMDM3UF.js.map
