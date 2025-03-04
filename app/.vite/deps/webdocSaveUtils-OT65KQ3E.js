import {
  p
} from "./chunk-VLPXOXHN.js";
import {
  i as i2
} from "./chunk-ELTPMWLT.js";
import "./chunk-PZ5WNCF2.js";
import {
  r,
  t
} from "./chunk-QCTBKAKN.js";
import "./chunk-ZJ7EGTR4.js";
import {
  m as m3,
  n
} from "./chunk-H3KNPVGL.js";
import {
  o
} from "./chunk-ACFHOOS7.js";
import {
  E,
  a,
  i,
  s as s3
} from "./chunk-VY225BNN.js";
import {
  m
} from "./chunk-JLW377TH.js";
import "./chunk-JJAT7JGD.js";
import "./chunk-D4CSBMND.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-5EWD56QJ.js";
import {
  b,
  d,
  m as m2
} from "./chunk-AZ33ECVF.js";
import "./chunk-FENCNBXD.js";
import {
  L,
  w as w2
} from "./chunk-XWXWIBVO.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import {
  S as S2
} from "./chunk-IP4HFFRO.js";
import {
  C
} from "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-NENDDUWH.js";
import {
  S
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  s2
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-NALU24NB.js";
import {
  w
} from "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  I as I2
} from "./chunk-UFBX3XSC.js";
import {
  I,
  T
} from "./chunk-F7TCEOHX.js";
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
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/webdoc/support/webdocSaveUtils.js
var I3 = ["NatGeo_World_Map", "Ocean_Basemap", "USA_Topo_Maps", "World_Imagery", "World_Street_Map", "World_Terrain_Base", "World_Topo_Map", "World_Hillshade", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Canvas/World_Dark_Gray_Base", "Canvas/World_Dark_Gray_Reference", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Reference/World_Boundaries_and_Places", "Reference/World_Reference_Overlay", "Reference/World_Transportation"].map((e) => e.toLowerCase());
async function A(e, t2, r2) {
  r2 ?? (r2 = {}), U(e, t2), await w(() => !t2.updatingFromView), await t2.load(), await E2(t2), await r(t2), await M(e, t2);
  const a2 = t2.portalItem, { json: i3, jsonContext: n2 } = await O(t2, a2, e.origin);
  return t(n2, { errorName: `${e.name}:save` }, r2), await V(t2, a2), await ye(e, t2, a2, i3, n2), await Promise.all([t2.updateItemThumbnail(), p(t2.resourceReferences, n2)]), a2;
}
async function O(e, t2, o2) {
  const r2 = o(t2, o2, true), a2 = e.write({}, r2);
  return await Promise.all(r2.resources.pendingOperations), { json: a2, jsonContext: r2 };
}
async function T2(e, t2, r2, a2) {
  a2 ?? (a2 = {});
  const i3 = D(e, r2);
  await w(() => !t2.updatingFromView), await t2.load(), await E2(t2), await r(t2), await M(e, t2);
  const { json: n2, jsonContext: s4 } = await O(t2, i3, e.origin);
  t(s4, { errorName: `${e.name}:save` }, a2), await X(t2, i3);
  const l = t2.getThumbnailState();
  return await he(e, t2, i3, n2, s4, a2) && (t2.resourceReferences.portalItem = i3), t2.restoreThumbnailFromState(l), await Promise.all([t2.updateItemThumbnail(), p(t2.resourceReferences, s4)]), i3;
}
function U(t2, o2) {
  if (!o2.portalItem) throw new s(`${t2.name}:portal-item-not-set`, "Portal item to save to has not been set on the WebMap");
  C2(t2, o2.portalItem);
}
function C2(t2, o2) {
  if (o2.type !== t2.itemType) throw new s(`${t2.name}:portal-item-wrong-type`, `Portal item needs to have type "${t2.itemType}"`);
}
async function M(t2, r2) {
  var _a;
  if ("linkchart" === t2.name) return;
  if (!((_a = r2.basemap) == null ? void 0 : _a.baseLayers.length)) throw new s(`${t2.name}:save`, "Map does not have a valid basemap with a base layer.");
  let a2 = null;
  if (await w(() => {
    const e = d(r2.initialViewProperties, r2.basemap);
    return a2 = e.spatialReference, !e.updating;
  }), !s2(a2, r2.initialViewProperties.spatialReference)) throw new s(`${t2.name}:save`, "The spatial reference of the basemap is not compatible with the one from the map.", { expected: r2.initialViewProperties.spatialReference, actual: a2 });
}
function D(e, t2) {
  let o2 = S2.from(t2);
  return o2.id && (o2 = o2.clone(), o2.id = null), o2.type || (o2.type = e.itemType), o2.portal || (o2.portal = C.getDefault()), C2(e, o2), o2;
}
function E2(e) {
  const t2 = [];
  return e.basemap && t2.push(e.basemap.load()), e.ground && t2.push(e.ground.load()), Promise.allSettled(t2).then(() => {
  });
}
async function V(e, t2) {
  t2.extent = await pe(e.portalItem, e.initialViewProperties.viewpoint.targetGeometry), await Y(e, t2);
}
var k = E.JSAPI;
var x = "CollectorDisabled";
var G = "Collector";
var L2 = "Data Editing";
var N = "OfflineDisabled";
var $ = "Offline";
var B = "Workforce Project";
var F = "Workforce Worker";
var K = "Workforce Dispatcher";
var H = "Offline Map Areas";
var J = "FieldMapsDisabled";
var q = E.DEVELOPER_BASEMAP;
var z = "UtilityNetwork";
var Q = "IPS";
async function X(e, t2) {
  a(t2, x), a(t2, J), a(t2, E.METADATA), a(t2, N), a(t2, H), a(t2, K), a(t2, B), a(t2, F), await V(e, t2);
}
async function Y(e, t2) {
  i(t2, k), await Z(e), re(e, t2), ae(e, t2), ie(e, t2), ne(e, t2), se(e, t2), le(e, t2), t2.typeKeywords && (t2.typeKeywords = t2.typeKeywords.filter((e2, t3, o2) => o2.indexOf(e2) === t3));
}
function Z(e) {
  const t2 = ee(e).map((e2) => e2.load()).toArray();
  return Promise.allSettled(t2).then(() => {
  });
}
function ee(e) {
  return e.allLayers.concat(e.allTables);
}
function te(e) {
  return ee(e).some((e2) => e2.loaded && L(e2) && e2.capabilities.operations.supportsEditing && e2.editingEnabled && ("subtype-group" !== e2.type || e2.sublayers.some((e3) => e3.editingEnabled)));
}
function oe(e) {
  return ee(e).filter((e2) => "group" !== e2.type).every((t2) => t2.loaded && me(e, t2));
}
function re(e, t2) {
  s3(t2, x) || s3(t2, B) || s3(t2, F) || s3(t2, K) || !te(e) ? a(t2, G) : i(t2, G);
}
function ae(e, t2) {
  te(e) ? i(t2, L2) : a(t2, L2);
}
function ie(e, t2) {
  !s3(t2, N) && oe(e) ? i(t2, $) : a(t2, $);
}
function ne(e, t2) {
  m2(e.basemap) ? i(t2, q) : a(t2, q);
}
function se(e, t2) {
  var _a;
  ((_a = e.utilityNetworks) == null ? void 0 : _a.length) ? i(t2, z) : a(t2, z);
}
function le(e, t2) {
  e.ipsInfo ? i(t2, Q) : a(t2, Q);
}
async function pe(e, t2) {
  const o2 = t2.clone().normalize();
  let r2;
  if (o2.length > 1) for (const a2 of o2) r2 ? a2.width > r2.width && (r2 = a2) : r2 = a2;
  else r2 = o2[0];
  return ce(e, r2);
}
async function ce(e, t2) {
  const o2 = t2.spatialReference;
  if (o2.isWGS84) return t2.clone();
  if (o2.isWebMercator) return S(t2);
  const { getGeometryServiceURL: r2 } = await import("./geometryServiceUtils-Y7DPQOXO.js"), a2 = await r2(e), i3 = new m3({ geometries: [t2], outSpatialReference: g.WGS84 });
  return (await n(a2, i3))[0];
}
function ue(e) {
  return w2(e) || "map-notes" === e.type || "route" === e.type;
}
function me(e, t2) {
  return L(t2) && t2.capabilities.operations.supportsSync || ue(t2) && !t2.portalItem || fe(t2) && !de(t2) && t2.spatialReference.equals(e.initialViewProperties.spatialReference);
}
function fe(e) {
  return ("tile" === e.type || "vector-tile" === e.type) && (e.capabilities.operations.supportsExportTiles || we(e) || b(e));
}
function de(e) {
  return "vector-tile" === e.type && Object.keys(e.sourceNameToSource).length > 1;
}
function we(e) {
  return "tile" === e.type && (I2(e.url) && I3.some((t2) => {
    var _a;
    return (_a = e.url) == null ? void 0 : _a.toLowerCase().includes("/" + t2 + "/");
  }));
}
async function ye(e, t2, o2, r2, a2) {
  await o2.update({ data: r2 }), be(e, t2, o2, r2, a2);
}
async function he(t2, o2, r2, a2, i3, n2) {
  const s4 = o2.portalItem, l = { item: s4, authenticated: !(!(s4 == null ? void 0 : s4.id) || !s4.portal.user) }, p2 = r2.portal;
  await p2.signIn();
  const { copyAllowed: c, itemReloaded: u } = await ge(l, p2);
  if (l.authenticated || (l.authenticated = u), !c) throw new s(`${t2.name}:save-as-copy-not-allowed`, "Owner of this map does not allow others to save a copy");
  const m4 = await _e(r2, l, a2, n2);
  return o2.portalItem = r2, be(t2, o2, r2, a2, i3), m4;
}
async function ge(e, t2) {
  var _a;
  const { item: o2, authenticated: r2 } = e;
  return (o2 == null ? void 0 : o2.id) && ((_a = o2.typeKeywords) == null ? void 0 : _a.includes("useOnly")) ? o2.portal.portalHostname !== t2.portalHostname ? { copyAllowed: false, itemReloaded: false } : (r2 || await o2.reload(), { copyAllowed: "admin" === o2.itemControl || "update" === o2.itemControl, itemReloaded: true }) : { copyAllowed: true, itemReloaded: false };
}
async function _e(e, t2, o2, a2) {
  const i3 = e.portal, { item: n2 } = t2, { folder: s4, copyAllResources: l } = a2;
  let p2 = false;
  if (l && (n2 == null ? void 0 : n2.id) && T(n2.portal.url, i3.url) && parseInt(n2.portal.currentVersion, 10) >= 2023) {
    const { total: e2 } = await n2.fetchResources();
    p2 = !!e2;
  }
  if (p2) {
    const t3 = await n2.copy({ copyResources: "all", folder: s4 });
    e.id = t3.id, e.portal = t3.portal;
    const r2 = e.toJSON();
    await e.load(), e.read(r2), await e.update({ data: o2 });
  } else await i3.user.addItem({ item: e, folder: s4, data: o2 });
  return p2;
}
function be(e, o2, r2, n2, s4) {
  m.prototype.read.call(o2, { version: n2.version, authoringApp: n2.authoringApp, authoringAppVersion: n2.authoringAppVersion }, { origin: e.origin, ignoreDefaults: true, url: r2.itemUrl ? I(r2.itemUrl) : void 0 }), i2(s4), o2.resourceInfo = n2;
}
export {
  O as createJSON,
  _e as initializeNewItem,
  ge as isCopyAllowed,
  A as save,
  T2 as saveAs
};
//# sourceMappingURL=webdocSaveUtils-OT65KQ3E.js.map
