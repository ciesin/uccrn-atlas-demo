import {
  u
} from "./chunk-52SUPZC5.js";
import {
  E,
  d,
  f,
  m,
  p,
  u as u2
} from "./chunk-6S3LK2RR.js";
import "./chunk-3Y5232PZ.js";
import "./chunk-RDFKHZPN.js";
import "./chunk-3VWS6Q3L.js";
import "./chunk-FWGIWKNF.js";
import "./chunk-IR5AHWR5.js";
import "./chunk-ZAYRG6WM.js";
import "./chunk-JQSC2CLC.js";
import "./chunk-J3KMTGEW.js";
import "./chunk-5LZH2YNQ.js";
import "./chunk-WXGA2B5U.js";
import "./chunk-CRKFUUKK.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-PUM22WTC.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js
var o = class {
  async extract(e) {
    const t = c(e), n = f(t), r = [t.data.buffer];
    return { result: u3(n, r), transferList: r };
  }
  async extractComponentsEdgeLocations(t) {
    const s = c(t), i = u2(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a = p(i, p2), o2 = [];
    return { result: u(a.regular.instancesData, o2), transferList: o2 };
  }
  async extractEdgeLocations(t) {
    const s = c(t), i = u2(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a = p(i, f2), o2 = [];
    return { result: u(a.regular.instancesData, o2), transferList: o2 };
  }
};
function c(e) {
  return { data: E.createView(e.dataBuffer), indices: "Uint32Array" === e.indicesType ? new Uint32Array(e.indices) : "Uint16Array" === e.indicesType ? new Uint16Array(e.indices) : e.indices, indicesLength: e.indicesLength, writerSettings: e.writerSettings, skipDeduplicate: e.skipDeduplicate };
}
function u3(t, n) {
  n.push(t.regular.lodInfo.lengths.buffer), n.push(t.silhouette.lodInfo.lengths.buffer);
  return { regular: { instancesData: u(t.regular.instancesData, n), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: u(t.silhouette.instancesData, n), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
var l = class {
  allocate(e) {
    return d.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1);
  }
};
var d2 = class {
  allocate(e) {
    return m.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1), e.componentIndex.set(t, n.componentIndex);
  }
};
var f2 = new l();
var p2 = new d2();
export {
  o as default
};
//# sourceMappingURL=EdgeProcessingWorker-QTXOP37H.js.map
