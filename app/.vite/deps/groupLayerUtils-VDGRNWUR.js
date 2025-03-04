import {
  $,
  P
} from "./chunk-HGATF7BF.js";
import {
  p
} from "./chunk-VLPXOXHN.js";
import "./chunk-ELTPMWLT.js";
import "./chunk-PZ5WNCF2.js";
import "./chunk-QCTBKAKN.js";
import "./chunk-ZJ7EGTR4.js";
import {
  o
} from "./chunk-ACFHOOS7.js";
import {
  E,
  a,
  i,
  s
} from "./chunk-VY225BNN.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-5EWD56QJ.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-IP4HFFRO.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/save/groupLayerUtils.js
var u = "Group Layer";
var c = "group-layer-save";
var l = "group-layer-save-as";
var p2 = E.GROUP_LAYER_MAP;
function m(e) {
  return { isValid: "group" === e.type, errorMessage: "Layer.type should be 'group'" };
}
function y(e) {
  return { isValid: s(e, p2), errorMessage: `Layer.portalItem.typeKeywords should have '${p2}'` };
}
function f(e, r) {
  return { ...o(e, "web-map", true), initiator: r };
}
function v(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function d(e, r) {
  r.title || (r.title = e.title), a(r, E.METADATA), i(r, p2);
}
async function I(r, t) {
  return P({ layer: r, itemType: u, validateLayer: m, validateItem: y, createJSONContext: (e) => f(e, r), createItemData: v, errorNamePrefix: c, saveResources: async (e, t2) => (r.sourceIsPortalItem || await e.removeAllResources().catch(() => {
  }), p(r.resourceReferences, t2)) }, t);
}
async function g(e, t, o2) {
  return $({ layer: e, itemType: u, validateLayer: m, createJSONContext: (r) => f(r, e), createItemData: v, errorNamePrefix: l, newItem: t, setItemProperties: d, saveResources: (r, t2) => p(e.resourceReferences, t2) }, o2);
}
export {
  I as save,
  g as saveAs
};
//# sourceMappingURL=groupLayerUtils-VDGRNWUR.js.map
