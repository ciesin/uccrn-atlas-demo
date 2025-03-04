import {
  $,
  I,
  P,
  d as d2,
  f,
  m,
  p,
  v,
  w
} from "./chunk-HGATF7BF.js";
import {
  i as i2
} from "./chunk-ELTPMWLT.js";
import "./chunk-PZ5WNCF2.js";
import "./chunk-QCTBKAKN.js";
import {
  i,
  t2 as t
} from "./chunk-EWFN6VXR.js";
import {
  o
} from "./chunk-ACFHOOS7.js";
import {
  E,
  a as a2,
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
import {
  L
} from "./chunk-XWXWIBVO.js";
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
import {
  d2 as d
} from "./chunk-UFBX3XSC.js";
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
import {
  s2
} from "./chunk-CWMZW2S5.js";
import {
  G,
  a,
  s
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/save/featureLayerUtils.js
var L2 = "Feature Service";
var P2 = "feature-layer-utils";
var E2 = `${P2}-save`;
var g = `${P2}-save-as`;
var O = `${P2}-saveall`;
var x = `${P2}-saveall-as`;
function A(e) {
  return { isValid: L(e) && (!("dynamicDataSource" in e) || !e.dynamicDataSource), errorMessage: "Feature layer should be a layer or table in a map or feature service" };
}
function N(e, r) {
  const a3 = o(e, "portal-item");
  return (r == null ? void 0 : r.isTable) && (a3.layerContainerType = "tables"), a3;
}
function $2(e) {
  const r = N(e), a3 = N(e);
  return a3.layerContainerType = "tables", { forLayers: r, forTables: a3 };
}
function j(e) {
  const r = [], a3 = [];
  for (const { layer: t2, layerJSON: o2 } of e) t2.isTable ? a3.push(o2) : r.push(o2);
  return { layers: r, tables: a3 };
}
function U(e) {
  return j([e]);
}
async function R(e, r) {
  return /\/\d+\/?$/.test(e.url) ? U(r[0]) : J(r, e);
}
async function J(e, r) {
  if (e.reverse(), !r) return j(e);
  const a3 = await F(r, e);
  for (const t2 of e) z(t2.layer, t2.layerJSON, a3);
  return D(a3, e), a3;
}
async function F(e, r) {
  let a3 = await e.fetchData("json");
  if (_(a3)) return a3;
  a3 || (a3 = {}), C(a3);
  const { layer: { url: t2, customParameters: o2, apiKey: s3 } } = r[0];
  return await Y(a3, { url: t2 ?? "", customParameters: o2, apiKey: s3 }, r.map((e2) => e2.layer.layerId)), a3;
}
function _(e) {
  return !!(e && Array.isArray(e.layers) && Array.isArray(e.tables));
}
function C(e) {
  e.layers || (e.layers = []), e.tables || (e.tables = []);
}
function D(e, r) {
  const a3 = [], t2 = [];
  for (const { layer: o2 } of r) {
    const { isTable: e2, layerId: r2 } = o2;
    e2 ? t2.push(r2) : a3.push(r2);
  }
  G2(e.layers, a3), G2(e.tables, t2);
}
function G2(r, a3) {
  if (r.length < 2) return;
  const t2 = [];
  for (const { id: e } of r) t2.push(e);
  s(t2.sort(M), a3.slice().sort(M)) && r.sort((e, r2) => {
    const t3 = a3.indexOf(e.id), o2 = a3.indexOf(r2.id);
    return t3 < o2 ? -1 : t3 > o2 ? 1 : 0;
  });
}
function M(e, r) {
  return e < r ? -1 : e > r ? 1 : 0;
}
async function Y(e, r, a3) {
  const { url: t2, customParameters: o2, apiKey: s3 } = r, { serviceJSON: n, layersJSON: l2 } = await t(t2, { customParameters: o2, apiKey: s3 }), i3 = k(e.layers, n.layers, a3), c = k(e.tables, n.tables, a3);
  e.layers = i3.itemResources, e.tables = c.itemResources;
  const u2 = [...i3.added, ...c.added], y = l2 ? [...l2.layers, ...l2.tables] : [];
  await B(e, u2, t2, y);
}
function k(e, a3, t2) {
  const o2 = a(e, a3, (e2, r) => e2.id === r.id);
  e = e.filter((e2) => !o2.removed.some((r) => r.id === e2.id));
  const s3 = o2.added;
  return s3.forEach(({ id: r }) => {
    e.push({ id: r });
  }), { itemResources: e, added: s3.filter(({ id: e2 }) => !t2.includes(e2)) };
}
async function B(e, r, a3, t2) {
  const o2 = await K(r), s3 = r.map(({ id: e2, type: r2 }) => new (o2.get(r2))({ url: a3, layerId: e2, sourceJSON: t2.find(({ id: r3 }) => r3 === e2) }));
  await Promise.allSettled(s3.map((e2) => e2.load())), s3.forEach((r2) => {
    const { layerId: a4, loaded: t3, defaultPopupTemplate: o3 } = r2;
    if (!t3 || null == o3) return;
    const s4 = { id: a4, popupInfo: o3.toJSON() };
    "ArcGISFeatureLayer" !== r2.operationalLayerType && (s4.layerType = r2.operationalLayerType), z(r2, s4, e);
  });
}
async function K(e) {
  const r = [];
  e.forEach(({ type: e2 }) => {
    switch (i(e2)) {
      case "CatalogLayer":
        r.push(import("./CatalogLayer-KAPRB4UP.js").then((e3) => e3.default));
        break;
      case "FeatureLayer":
        r.push(import("./FeatureLayer-JWLNPFWJ.js").then((e3) => e3.default));
        break;
      case "OrientedImageryLayer":
        r.push(import("./OrientedImageryLayer-7MUU2PVP.js").then((e3) => e3.default));
    }
  });
  const a3 = await Promise.all(r), t2 = /* @__PURE__ */ new Map();
  return e.forEach(({ type: e2 }, r2) => {
    t2.set(e2, a3[r2]);
  }), t2;
}
function z(e, r, a3) {
  e.isTable ? V(a3.tables, r) : V(a3.layers, r);
}
function V(e, r) {
  const a3 = e.findIndex(({ id: e2 }) => e2 === r.id);
  -1 === a3 ? e.push(r) : e[a3] = r;
}
function q(e, r) {
  if (!e.length) throw new s2(`${r}:missing-parameters`, "'layers' array should contain at least one feature layer");
}
function H(e, r) {
  const a3 = e.map((e2) => e2.portalItem.id);
  if (new Set(a3).size > 1) throw new s2(`${r}:invalid-parameters`, "All layers in the 'layers' array should be loaded from the same portal item");
}
function Q(e, r) {
  const a3 = e.map((e2) => e2.layerId);
  if (new Set(a3).size !== a3.length) throw new s2(`${r}:invalid-parameters`, "'layers' array should contain only one instance each of layer or table in a feature service");
}
async function W(e) {
  q(e, O), await Promise.all(e.map((e2) => e2.load()));
  for (const r of e) p(r, O, A), f({ layer: r, itemType: L2, errorNamePrefix: O });
  H(e, O), Q(e, O);
}
function X(e, r) {
  let a3 = 0, t2 = 0, o2 = 0;
  for (const { layerType: s3 } of [...r.layers, ...r.tables]) switch (s3) {
    case "OrientedImageryLayer":
      a3++;
      break;
    case "SubtypeGroupLayer":
      t2++;
      break;
    case "SubtypeGroupTable":
      o2++;
  }
  u(e, E.ORIENTED_IMAGERY_LAYER, a3 > 0), u(e, E.SUBTYPE_GROUP_LAYER, t2 > 0), u(e, E.SUBTYPE_GROUP_TABLE, o2 > 0);
}
function Z(e, r, a3) {
  a2(r, E.METADATA), u(r, E.MULTI_LAYER, e.length > 1), u(r, E.SINGLE_LAYER, 1 === e.length), u(r, E.TABLE, a3.tables.length > 0 && 0 === a3.layers.length), X(r, a3);
}
async function ee(e, r, a3) {
  X(r, a3);
}
async function re(e, r, a3) {
  const { url: t2, layerId: o2, title: s3, fullExtent: n, isTable: l2 } = e, i3 = d(t2);
  r.url = ("FeatureServer" === (i3 == null ? void 0 : i3.serverType) ? t2 : `${t2}/${o2}`) ?? null, r.title || (r.title = s3), r.extent = null, l2 || null == n || (r.extent = await l(n)), Z([e], r, a3);
}
function ae(e, r) {
  for (const n of e) {
    const a4 = n.parsedUrl.path, o3 = d(a4), s4 = o3 == null ? void 0 : o3.url.path;
    if (!s4) throw new s2(`${r}:invalid-parameters`, m(n, `has unsupported url pattern: ${a4}`), { layer: n });
    const l2 = o3 == null ? void 0 : o3.serverType;
    if ("FeatureServer" !== l2 && "MapServer" !== l2) throw new s2(`${r}:invalid-parameters`, m(n, `has unsupported server type: ${l2}`), { layer: n });
    if ("MapServer" === l2 && e.length > 1) throw new s2(`${r}:invalid-parameters`, "Only one layer or table in a map service can be saved");
  }
  const a3 = d(e[0].parsedUrl.path), o2 = a3 == null ? void 0 : a3.url.path, s3 = e.every((e2) => {
    const r2 = d(e2.parsedUrl.path);
    return (r2 == null ? void 0 : r2.url.path) === o2;
  });
  if (!s3) throw new s2(`${r}:invalid-parameters`, "'layers' array should only contain layers or tables that belong to the same feature service");
}
async function te(e) {
  q(e, x), await Promise.all(e.map((e2) => e2.load()));
  for (const r of e) p(r, x, A);
  ae(e, x), Q(e, x);
}
function oe(e, r) {
  X(e, r), I(e);
}
async function se(e, r, t2) {
  let o2 = 0;
  for (const { isTable: a3 } of e) a3 || o2++;
  const s3 = e[0].parsedUrl.path, n = d(s3);
  if (r.url = "FeatureServer" === (n == null ? void 0 : n.serverType) ? n.url.path : s3, r.title || (r.title = n.title), r.extent = null, o2 > 0) {
    const t3 = e.map((e2) => e2.fullExtent).filter(G).reduce((e2, r2) => e2.clone().union(r2));
    t3 && (r.extent = await l(t3));
  }
  Z(e, r, t2), I(r);
}
async function ne(e, r) {
  return P({ layer: e, itemType: L2, validateLayer: A, createJSONContext: (r2) => N(r2, e), createItemData: (e2, r2) => R(r2, [e2]), errorNamePrefix: E2, setItemProperties: ee }, r);
}
async function le(e, r) {
  await W(e);
  const a3 = e[0].portalItem, t2 = $2(a3), s3 = await Promise.all(e.map((e2) => w(e2, e2.isTable ? t2.forTables : t2.forLayers, r))), l2 = await R(a3, e.map((e2, r2) => ({ layer: e2, layerJSON: s3[r2] })));
  return oe(a3, l2), await a3.update({ data: l2 }), await Promise.all(e.slice(1).map((e2) => e2.portalItem.reload())), i2(t2.forLayers), i2(t2.forTables), a3.clone();
}
async function ie(e, r, a3) {
  return $({ layer: e, itemType: L2, validateLayer: A, createJSONContext: (r2) => N(r2, e), createItemData: (e2, r2) => Promise.resolve(U(e2)), errorNamePrefix: g, newItem: r, setItemProperties: re }, a3);
}
async function ce(e, r, a3) {
  await te(e);
  const t2 = d2({ itemType: L2, errorNamePrefix: x, newItem: r }), s3 = $2(t2), l2 = await Promise.all(e.map((e2) => w(e2, e2.isTable ? s3.forTables : s3.forLayers, a3))), u2 = await J(e.map((e2, r2) => ({ layer: e2, layerJSON: l2[r2] })));
  await se(e, t2, u2), await v(t2, u2, a3);
  for (const o2 of e) o2.portalItem = t2.clone();
  return i2(s3.forLayers), i2(s3.forTables), t2;
}
export {
  ne as save,
  le as saveAll,
  ce as saveAllAs,
  ie as saveAs
};
//# sourceMappingURL=featureLayerUtils-TGTOJA3L.js.map
