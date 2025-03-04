import {
  $,
  P
} from "./chunk-HGATF7BF.js";
import "./chunk-ELTPMWLT.js";
import "./chunk-PZ5WNCF2.js";
import "./chunk-QCTBKAKN.js";
import "./chunk-ACFHOOS7.js";
import {
  E,
  a,
  l,
  u
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

// node_modules/@arcgis/core/layers/save/imageryUtils.js
var y = "Image Service";
var l2 = "imagery-layer-save";
var n = "imagery-layer-save-as";
var m = "imagery-tile-layer-save";
var o = "imagery-tile-layer-save-as";
var c = "WCS";
var p = "wcs-layer-save";
var u2 = "wcs-layer-save-as";
function g(e) {
  var _a;
  if ("imagery" === e.type || "wcs" === e.type) return { isValid: true };
  const { raster: t } = e, r = "Function" === (t == null ? void 0 : t.datasetFormat) ? (_a = t.primaryRasters) == null ? void 0 : _a.rasters[0] : t;
  return { isValid: "RasterTileServer" === (r == null ? void 0 : r.datasetFormat) && ("Raster" === r.tileType || "Map" === r.tileType), errorMessage: "imagery tile layer should be created from a tiled image service." };
}
function v(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
async function f(e, t) {
  const { parsedUrl: y2, title: l3, fullExtent: n2 } = e;
  t.url = y2.path, t.title || (t.title = l3);
  try {
    t.extent = await l(n2);
  } catch {
    t.extent = void 0;
  }
  a(t, E.METADATA), u(t, E.TILED_IMAGERY, "imagery-tile" === e.type);
}
async function d(t, r) {
  const a2 = "imagery" === t.type ? l2 : "imagery-tile" === t.type ? m : p, s = "wcs" === t.type ? c : y;
  return P({ layer: t, itemType: s, validateLayer: g, createItemData: v, errorNamePrefix: a2 }, r);
}
async function I(e, r, a2) {
  const s = "imagery" === e.type ? n : "imagery-tile" === e.type ? o : u2, i = "wcs" === e.type ? c : y;
  return $({ layer: e, itemType: i, validateLayer: g, createItemData: v, errorNamePrefix: s, newItem: r, setItemProperties: f }, a2);
}
export {
  d as save,
  I as saveAs
};
//# sourceMappingURL=imageryUtils-3VRB2QCB.js.map
