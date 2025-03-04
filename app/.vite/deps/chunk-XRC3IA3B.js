import {
  i,
  n,
  r as r5,
  s
} from "./chunk-ZAMDM3UF.js";
import {
  D,
  S as S2,
  U,
  h,
  k,
  m as m2,
  r as r4,
  w,
  y
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
  P
} from "./chunk-W633AKTD.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
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

// node_modules/@arcgis/core/rest/support/DirectionLine.js
var u;
var m3 = u = class extends a2.ClonableMixin(S) {
  constructor(e) {
    super(e), this.directionLineType = null, this.directionPointId = null, this.distance = null, this.duration = null, this.fromLevel = null, this.geometry = null, this.objectId = null, this.popupTemplate = null, this.symbol = null, this.toLevel = null, this.type = "direction-line";
  }
  static fromGraphic(e) {
    return new u({ directionLineType: S2.fromJSON(e.attributes.DirectionLineType), directionPointId: e.attributes.DirectionPointID, distance: e.attributes.Meters, duration: e.attributes.Minutes, fromLevel: e.attributes.FromLevel ?? null, geometry: e.geometry, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, symbol: e.symbol, toLevel: e.attributes.ToLevel ?? null });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, DirectionLineType: null != this.directionLineType ? S2.toJSON(this.directionLineType) : null, DirectionPointID: this.directionPointId, Meters: this.distance, Minutes: this.duration };
    return null != this.fromLevel && (e.FromLevel = this.fromLevel), null != this.toLevel && (e.ToLevel = this.toLevel), new b({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
m3.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "DirectionLineType", alias: "Line Type", type: "esriFieldTypeInteger" }, { name: "DirectionPointID", alias: "Direction Point ID", type: "esriFieldTypeInteger" }, { name: "FromLevel", alias: "From Level", type: "esriFieldTypeInteger" }, { name: "Meters", alias: "Meters", type: "esriFieldTypeDouble" }, { name: "Minutes", alias: "Minutes", type: "esriFieldTypeDouble" }, { name: "ToLevel", alias: "To Level", type: "esriFieldTypeInteger" }], r([m({ type: S2.apiValues, json: { read: { source: "attributes.DirectionLineType", reader: S2.read } } })], m3.prototype, "directionLineType", void 0), r([m({ json: { read: { source: "attributes.DirectionPointID" } } })], m3.prototype, "directionPointId", void 0), r([m({ json: { read: { source: "attributes.Meters" } } })], m3.prototype, "distance", void 0), r([m({ json: { read: { source: "attributes.Minutes" } } })], m3.prototype, "duration", void 0), r([m({ json: { read: { source: "attributes.FromLevel" } } })], m3.prototype, "fromLevel", void 0), r([m({ type: P })], m3.prototype, "geometry", void 0), r([m({ json: { read: { source: "attributes.ObjectID" } } })], m3.prototype, "objectId", void 0), r([m({ type: q })], m3.prototype, "popupTemplate", void 0), r([m({ types: x })], m3.prototype, "symbol", void 0), r([m({ json: { read: { source: "attributes.ToLevel" } } })], m3.prototype, "toLevel", void 0), r([m({ readOnly: true, json: { read: false } })], m3.prototype, "type", void 0), m3 = u = r([a("esri.rest.support.DirectionLine")], m3);
var c = m3;

// node_modules/@arcgis/core/rest/support/DirectionPoint.js
var m4;
var c2 = m4 = class extends a2.ClonableMixin(S) {
  constructor(e) {
    super(e), this.alternateName = null, this.arrivalTime = null, this.arrivalTimeOffset = null, this.azimuth = null, this.branchName = null, this.directionPointType = null, this.displayText = null, this.exitName = null, this.geometry = null, this.intersectingName = null, this.level = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.sequence = null, this.shortVoiceInstruction = null, this.stopId = null, this.symbol = null, this.towardName = null, this.type = "direction-point", this.voiceInstruction = null;
  }
  readArrivalTime(e, t) {
    return null != t.attributes.ArrivalTime ? new Date(t.attributes.ArrivalTime) : null;
  }
  static fromGraphic(e) {
    return new m4({ alternateName: e.attributes.AlternateName ?? null, arrivalTime: null != e.attributes.ArrivalTime ? new Date(e.attributes.ArrivalTime) : null, arrivalTimeOffset: e.attributes.ArrivalUTCOffset ?? null, azimuth: e.attributes.Azimuth ?? null, branchName: e.attributes.BranchName ?? null, directionPointType: k.fromJSON(e.attributes.DirectionPointType), displayText: e.attributes.DisplayText ?? null, exitName: e.attributes.ExitName ?? null, geometry: e.geometry, intersectingName: e.attributes.IntersectingName ?? null, level: e.attributes.Level ?? null, name: e.attributes.Name ?? null, objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID, popupTemplate: e.popupTemplate, sequence: e.attributes.Sequence, shortVoiceInstruction: e.attributes.ShortVoiceInstruction ?? null, stopId: e.attributes.StopID ?? null, symbol: e.symbol, towardName: e.attributes.TowardName ?? null, voiceInstruction: e.attributes.VoiceInstruction ?? null });
  }
  toGraphic() {
    const e = { ObjectID: this.objectId, DirectionPointType: null != this.directionPointType ? k.toJSON(this.directionPointType) : null, Sequence: this.sequence, StopID: this.stopId };
    return null != this.alternateName && (e.AlternateName = this.alternateName), null != this.arrivalTime && (e.ArrivalTime = this.arrivalTime.getTime()), null != this.arrivalTimeOffset && (e.ArrivalUTCOffset = this.arrivalTimeOffset), null != this.azimuth && (e.Azimuth = this.azimuth), null != this.branchName && (e.BranchName = this.branchName), null != this.displayText && (e.DisplayText = this.displayText), null != this.exitName && (e.ExitName = this.exitName), null != this.intersectingName && (e.IntersectingName = this.intersectingName), null != this.level && (e.Level = this.level), null != this.name && (e.Name = this.name), null != this.shortVoiceInstruction && (e.ShortVoiceInstruction = this.shortVoiceInstruction), null != this.towardName && (e.TowardName = this.towardName), null != this.voiceInstruction && (e.VoiceInstruction = this.voiceInstruction), new b({ geometry: this.geometry, attributes: e, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
c2.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "AlternateName", alias: "Alternative Name", type: "esriFieldTypeString" }, { name: "ArrivalTime", alias: "Arrival Time", type: "esriFieldTypeDate" }, { name: "ArrivalUTCOffset", alias: "Arrival Time Offset", type: "esriFieldTypeInteger" }, { name: "Azimuth", alias: "Azimuth", type: "esriFieldTypeDouble" }, { name: "BranchName", alias: "Branch Name", type: "esriFieldTypeString" }, { name: "DirectionPointType", alias: "Directions Point Type", type: "esriFieldTypeInteger" }, { name: "DisplayText", alias: "Display Text", type: "esriFieldTypeString" }, { name: "ExitName", alias: "Exit Name", type: "esriFieldTypeString" }, { name: "IntersectingName", alias: "Intersecting Name", type: "esriFieldTypeString" }, { name: "Level", alias: "Level", type: "esriFieldTypeInteger" }, { name: "Name", alias: "Name", type: "esriFieldTypeString" }, { name: "Sequence", alias: "Sequence", type: "esriFieldTypeInteger" }, { name: "ShortVoiceInstruction", alias: "Short Voice Instruction", type: "esriFieldTypeString" }, { name: "StopID", alias: "Stop ID", type: "esriFieldTypeInteger" }, { name: "TowardName", alias: "Toward Name", type: "esriFieldTypeString" }, { name: "VoiceInstruction", alias: "Voice Instruction", type: "esriFieldTypeString" }], r([m({ json: { read: { source: "attributes.AlternateName" } } })], c2.prototype, "alternateName", void 0), r([m({ type: Date })], c2.prototype, "arrivalTime", void 0), r([o("arrivalTime", ["attributes.ArrivalTime"])], c2.prototype, "readArrivalTime", null), r([m({ json: { read: { source: "attributes.ArrivalUTCOffset" } } })], c2.prototype, "arrivalTimeOffset", void 0), r([m({ json: { read: { source: "attributes.Azimuth" } } })], c2.prototype, "azimuth", void 0), r([m({ json: { read: { source: "attributes.BranchName" } } })], c2.prototype, "branchName", void 0), r([m({ type: k.apiValues, json: { read: { source: "attributes.DirectionPointType", reader: k.read } } })], c2.prototype, "directionPointType", void 0), r([m({ json: { read: { source: "attributes.DisplayText" } } })], c2.prototype, "displayText", void 0), r([m({ json: { read: { source: "attributes.ExitName" } } })], c2.prototype, "exitName", void 0), r([m({ type: j })], c2.prototype, "geometry", void 0), r([m({ json: { read: { source: "attributes.IntersectingName" } } })], c2.prototype, "intersectingName", void 0), r([m({ json: { read: { source: "attributes.Level" } } })], c2.prototype, "level", void 0), r([m({ json: { read: { source: "attributes.Name" } } })], c2.prototype, "name", void 0), r([m({ json: { read: { source: "attributes.ObjectID" } } })], c2.prototype, "objectId", void 0), r([m({ type: q })], c2.prototype, "popupTemplate", void 0), r([m({ json: { read: { source: "attributes.Sequence" } } })], c2.prototype, "sequence", void 0), r([m({ json: { read: { source: "attributes.ShortVoiceInstruction" } } })], c2.prototype, "shortVoiceInstruction", void 0), r([m({ json: { read: { source: "attributes.StopID" } } })], c2.prototype, "stopId", void 0), r([m({ types: x })], c2.prototype, "symbol", void 0), r([m({ json: { read: { source: "attributes.TowardName" } } })], c2.prototype, "towardName", void 0), r([m({ readOnly: true, json: { read: false } })], c2.prototype, "type", void 0), r([m({ json: { read: { source: "attributes.VoiceInstruction" } } })], c2.prototype, "voiceInstruction", void 0), c2 = m4 = r([a("esri.rest.support.DirectionPoint")], c2);
var y2 = c2;

// node_modules/@arcgis/core/rest/support/TravelMode.js
var b2 = class extends a2.ClonableMixin(S) {
  constructor(t) {
    super(t), this.attributeParameterValues = null, this.description = null, this.distanceAttributeName = null, this.id = null, this.impedanceAttributeName = null, this.name = null, this.restrictionAttributeNames = null, this.simplificationTolerance = null, this.simplificationToleranceUnits = null, this.timeAttributeName = null, this.type = null, this.useHierarchy = null, this.uturnAtJunctions = null;
  }
  readId(t, r6) {
    return r6.id ?? r6.itemId ?? null;
  }
  readRestrictionAttributes(t, r6) {
    const { restrictionAttributeNames: e } = r6;
    return null == e ? null : e.map((t2) => w.fromJSON(t2));
  }
  writeRestrictionAttributes(t, r6, e) {
    null != t && (r6[e] = t.map((t2) => w.toJSON(t2)));
  }
};
r([m({ type: [Object], json: { write: true } })], b2.prototype, "attributeParameterValues", void 0), r([m({ type: String, json: { write: true } })], b2.prototype, "description", void 0), r([r3(y, { ignoreUnknown: false })], b2.prototype, "distanceAttributeName", void 0), r([m({ type: String, json: { write: true } })], b2.prototype, "id", void 0), r([o("id", ["id", "itemId"])], b2.prototype, "readId", null), r([r3(D, { ignoreUnknown: false })], b2.prototype, "impedanceAttributeName", void 0), r([m({ type: String, json: { write: true } })], b2.prototype, "name", void 0), r([m({ type: [String], json: { write: true } })], b2.prototype, "restrictionAttributeNames", void 0), r([o("restrictionAttributeNames")], b2.prototype, "readRestrictionAttributes", null), r([r2("restrictionAttributeNames")], b2.prototype, "writeRestrictionAttributes", null), r([m({ type: Number, json: { write: { allowNull: true } } })], b2.prototype, "simplificationTolerance", void 0), r([r3(r4)], b2.prototype, "simplificationToleranceUnits", void 0), r([r3(U, { ignoreUnknown: false })], b2.prototype, "timeAttributeName", void 0), r([r3(h)], b2.prototype, "type", void 0), r([m({ type: Boolean, json: { write: true } })], b2.prototype, "useHierarchy", void 0), r([r3(m2)], b2.prototype, "uturnAtJunctions", void 0), b2 = r([a("esri.rest.support.TravelMode")], b2);
var j2 = b2;

// node_modules/@arcgis/core/rest/support/RouteSettings.js
var a3 = class extends S {
  constructor(t) {
    super(t), this.accumulateAttributes = null, this.directionsLanguage = null, this.findBestSequence = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.startTimeIsUTC = null, this.timeWindowsAreUTC = null, this.travelMode = null;
  }
  readAccumulateAttributes(t) {
    return null == t ? null : t.map((t2) => D.fromJSON(t2));
  }
  writeAccumulateAttributes(t, e, r6) {
    (t == null ? void 0 : t.length) && (e[r6] = t.map((t2) => D.toJSON(t2)));
  }
};
r([m({ type: [String], json: { name: "accumulateAttributeNames", write: true } })], a3.prototype, "accumulateAttributes", void 0), r([o("accumulateAttributes")], a3.prototype, "readAccumulateAttributes", null), r([r2("accumulateAttributes")], a3.prototype, "writeAccumulateAttributes", null), r([m({ type: String, json: { write: true } })], a3.prototype, "directionsLanguage", void 0), r([m({ type: Boolean, json: { write: true } })], a3.prototype, "findBestSequence", void 0), r([m({ type: Boolean, json: { write: true } })], a3.prototype, "preserveFirstStop", void 0), r([m({ type: Boolean, json: { write: true } })], a3.prototype, "preserveLastStop", void 0), r([m({ type: Boolean, json: { write: true } })], a3.prototype, "startTimeIsUTC", void 0), r([m({ type: Boolean, json: { write: true } })], a3.prototype, "timeWindowsAreUTC", void 0), r([m({ type: j2, json: { write: true } })], a3.prototype, "travelMode", void 0), a3 = r([a("esri.rest.support.RouteSettings")], a3);
var c3 = a3;

// node_modules/@arcgis/core/rest/support/RouteInfo.js
var b3;
var f = b3 = class extends a2.ClonableMixin(S) {
  constructor(t) {
    super(t), this.analysisSettings = null, this.endTime = null, this.endTimeOffset = null, this.firstStopId = null, this.geometry = null, this.lastStopId = null, this.messages = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.startTime = null, this.startTimeOffset = null, this.stopCount = null, this.symbol = null, this.totalCosts = null, this.totalDistance = null, this.totalDuration = null, this.totalLateDuration = null, this.totalViolations = null, this.totalWait = null, this.totalWaitDuration = null, this.type = "route-info", this.version = "1.0.0";
  }
  readEndTime(t, e) {
    return null != e.attributes.EndTimeUTC ? new Date(e.attributes.EndTimeUTC) : null;
  }
  readEndTimeOffset(t, e) {
    return n(e.attributes.EndTime, e.attributes.EndTimeUTC);
  }
  readStartTime(t, e) {
    return null != e.attributes.StartTimeUTC ? new Date(e.attributes.StartTimeUTC) : null;
  }
  readStartTimeOffset(t, e) {
    return n(e.attributes.StartTime, e.attributes.StartTimeUTC);
  }
  readTotalCosts(t, e) {
    return r5(e.attributes, "Total_");
  }
  readTotalViolations(t, e) {
    return r5(e.attributes, "TotalViolation_");
  }
  readTotalWait(t, e) {
    return r5(e.attributes, "TotalWait_");
  }
  static fromGraphic(t) {
    return new b3({ analysisSettings: null != t.attributes.AnalysisSettings ? c3.fromJSON(JSON.parse(t.attributes.AnalysisSettings)) : null, endTime: null != t.attributes.EndTime ? new Date(t.attributes.EndTime) : null, endTimeOffset: t.attributes.EndUTCOffset ?? null, geometry: t.geometry, messages: null != t.attributes.Messages ? JSON.parse(t.attributes.Messages) : null, name: t.attributes.RouteName, objectId: t.attributes.ObjectID ?? t.attributes.__OBJECTID, popupTemplate: t.popupTemplate, startTime: null != t.attributes.StartTime ? new Date(t.attributes.StartTime) : null, startTimeOffset: t.attributes.StartUTCOffset ?? null, symbol: t.symbol, totalCosts: null != t.attributes.TotalCosts ? i(JSON.parse(t.attributes.TotalCosts)) : null, totalDistance: t.attributes.TotalMeters ?? null, totalDuration: t.attributes.TotalMinutes ?? null, totalLateDuration: t.attributes.TotalLateMinutes ?? null, totalWaitDuration: t.attributes.TotalWaitMinutes ?? null, version: t.attributes.Version });
  }
  toGraphic() {
    const t = { ObjectID: this.objectId, AnalysisSettings: null != this.analysisSettings ? JSON.stringify(this.analysisSettings.toJSON()) : null, EndTime: null != this.endTime ? this.endTime.getTime() : null, EndUTCOffset: this.endTimeOffset, Messages: null != this.messages ? JSON.stringify(this.messages) : null, RouteName: this.name, StartTime: null != this.startTime ? this.startTime.getTime() : null, StartUTCOffset: this.startTimeOffset, TotalCosts: null != this.totalCosts ? JSON.stringify(s(this.totalCosts)) : null, TotalLateMinutes: this.totalLateDuration, TotalMeters: this.totalDistance, TotalMinutes: this.totalDuration, TotalWaitMinutes: this.totalWaitDuration, Version: this.version };
    return new b({ geometry: this.geometry, attributes: t, symbol: this.symbol, popupTemplate: this.popupTemplate });
  }
};
f.fields = [{ name: "ObjectID", alias: "ObjectID", type: "esriFieldTypeOID" }, { name: "AnalysisSettings", alias: "Analysis Settings", type: "esriFieldTypeString" }, { name: "EndTime", alias: "End Time", type: "esriFieldTypeDate" }, { name: "EndUTCOffset", alias: "End Time Offset", type: "esriFieldTypeInteger" }, { name: "Messages", alias: "Messages", type: "esriFieldTypeString" }, { name: "RouteName", alias: "Route Name", type: "esriFieldTypeString" }, { name: "StartTime", alias: "Start Time", type: "esriFieldTypeDate" }, { name: "StartUTCOffset", alias: "Start Time Offset", type: "esriFieldTypeInteger" }, { name: "TotalCosts", alias: "Total Costs", type: "esriFieldTypeString" }, { name: "TotalLateMinutes", alias: "Total Late Minutes", type: "esriFieldTypeDouble" }, { name: "TotalMeters", alias: "Total Meters", type: "esriFieldTypeDouble" }, { name: "TotalMinutes", alias: "Total Minutes", type: "esriFieldTypeDouble" }, { name: "TotalWaitMinutes", alias: "Total Wait Minutes", type: "esriFieldTypeDouble" }, { name: "Version", alias: "Version", type: "esriFieldTypeString" }], r([m()], f.prototype, "analysisSettings", void 0), r([m({ type: Date })], f.prototype, "endTime", void 0), r([o("endTime", ["attributes.EndTimeUTC"])], f.prototype, "readEndTime", null), r([m()], f.prototype, "endTimeOffset", void 0), r([o("endTimeOffset", ["attributes.EndTime", "attributes.EndTimeUTC"])], f.prototype, "readEndTimeOffset", null), r([m({ json: { read: { source: "attributes.FirstStopID" } } })], f.prototype, "firstStopId", void 0), r([m({ type: P })], f.prototype, "geometry", void 0), r([m({ json: { read: { source: "attributes.LastStopID" } } })], f.prototype, "lastStopId", void 0), r([m()], f.prototype, "messages", void 0), r([m({ json: { read: { source: "attributes.Name" } } })], f.prototype, "name", void 0), r([m({ json: { read: { source: "attributes.ObjectID" } } })], f.prototype, "objectId", void 0), r([m({ type: q })], f.prototype, "popupTemplate", void 0), r([m({ type: Date })], f.prototype, "startTime", void 0), r([o("startTime", ["attributes.StartTimeUTC"])], f.prototype, "readStartTime", null), r([m()], f.prototype, "startTimeOffset", void 0), r([o("startTimeOffset", ["attributes.StartTime", "attributes.StartTimeUTC"])], f.prototype, "readStartTimeOffset", null), r([m({ json: { read: { source: "attributes.StopCount" } } })], f.prototype, "stopCount", void 0), r([m({ types: x })], f.prototype, "symbol", void 0), r([m()], f.prototype, "totalCosts", void 0), r([o("totalCosts", ["attributes"])], f.prototype, "readTotalCosts", null), r([m()], f.prototype, "totalDistance", void 0), r([m()], f.prototype, "totalDuration", void 0), r([m()], f.prototype, "totalLateDuration", void 0), r([m()], f.prototype, "totalViolations", void 0), r([o("totalViolations", ["attributes"])], f.prototype, "readTotalViolations", null), r([m()], f.prototype, "totalWait", void 0), r([o("totalWait", ["attributes"])], f.prototype, "readTotalWait", null), r([m()], f.prototype, "totalWaitDuration", void 0), r([m({ readOnly: true, json: { read: false } })], f.prototype, "type", void 0), r([m()], f.prototype, "version", void 0), f = b3 = r([a("esri.rest.support.RouteInfo")], f);
var S3 = f;

export {
  j2 as j,
  c,
  y2 as y,
  c3 as c2,
  S3 as S
};
//# sourceMappingURL=chunk-XRC3IA3B.js.map
