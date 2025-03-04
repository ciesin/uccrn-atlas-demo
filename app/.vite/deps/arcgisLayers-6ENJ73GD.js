import {
  a
} from "./chunk-HKHKDBUI.js";
import {
  i,
  t,
  t2
} from "./chunk-EWFN6VXR.js";
import {
  s as s2
} from "./chunk-F7A3OWWW.js";
import {
  g
} from "./chunk-XWXWIBVO.js";
import "./chunk-IP4HFFRO.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  d2 as d,
  h2 as h
} from "./chunk-UFBX3XSC.js";
import {
  I,
  qt
} from "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
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

// node_modules/@arcgis/core/layers/support/arcgisLayers.js
var y = { FeatureLayer: true, SceneLayer: true };
async function f(e) {
  const { properties: r, url: a2 } = e, t3 = { ...r, url: a2 }, s3 = await w(a2, r == null ? void 0 : r.customParameters), { Constructor: l, layerId: o, sourceJSON: n, parsedUrl: c, layers: i2, tables: u } = s3;
  if (i2.length + u.length === 0) return null != o && (t3.layerId = o), null != n && (t3.sourceJSON = n), new l(t3);
  const y2 = new (0, (await import("./GroupLayer-HGBVBSFH.js")).default)({ title: c.title });
  return await d2(y2, s3, t3), y2;
}
function p(e, r) {
  return e ? e.find(({ id: e2 }) => e2 === r) : null;
}
function m(e, r, a2, t3, s3) {
  const l = { ...s3, layerId: r };
  return null != e && (l.url = e), null != a2 && (l.sourceJSON = a2), "sublayerTitleMode" in t3.prototype && (l.sublayerTitleMode = "service-name"), new t3(l);
}
async function d2(e, r, a2) {
  const t3 = r.sublayerConstructorProvider;
  for (const { id: s3, serverUrl: l } of r.layers) {
    const o = p(r.sublayerInfos, s3), n = m(l, s3, o, (o && (t3 == null ? void 0 : t3(o))) ?? r.Constructor, a2);
    e.add(n);
  }
  if (r.tables.length) {
    const t4 = await I2("FeatureLayer");
    r.tables.forEach(({ id: s3, serverUrl: l }) => {
      const o = m(l, s3, p(r.tableInfos, s3), t4, a2);
      e.tables.add(o);
    });
  }
}
async function w(r, a2) {
  var _a, _b, _c, _d, _e, _f, _g;
  let s3 = d(r);
  if (null == s3 && (s3 = await v(r, a2)), null == s3) throw new s("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: r });
  const { serverType: l, sublayer: n } = s3;
  let i2;
  const f2 = { FeatureServer: "FeatureLayer", KnowledgeGraphServer: "KnowledgeGraphLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer", VideoServer: "VideoLayer" }, p2 = "FeatureServer" === l, m2 = "SceneServer" === l, d3 = { parsedUrl: s3, Constructor: null, layerId: p2 || m2 ? n ?? void 0 : void 0, layers: [], tables: [] };
  switch (l) {
    case "MapServer":
      if (null != n) {
        const { type: t3 } = await t(r, { customParameters: a2 });
        switch (i2 = "FeatureLayer", t3) {
          case "Catalog Layer":
            i2 = "CatalogLayer";
            break;
          case "Catalog Dynamic Group Layer":
            throw new s("arcgis-layers:unsupported", `fromUrl() not supported for "${t3}" layers`);
        }
      } else {
        i2 = await L(r, a2) ? "TileLayer" : "MapImageLayer";
      }
      break;
    case "ImageServer": {
      const e = await t(r, { customParameters: a2 }), { tileInfo: t3, cacheType: s4 } = e;
      i2 = t3 ? "LERC" !== ((_a = t3 == null ? void 0 : t3.format) == null ? void 0 : _a.toUpperCase()) || s4 && "elevation" !== s4.toLowerCase() ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
      break;
    }
    case "SceneServer": {
      const e = await t(s3.url.path, { customParameters: a2 });
      if (i2 = "SceneLayer", e) {
        const r2 = e == null ? void 0 : e.layers;
        if ("Voxel" === (e == null ? void 0 : e.layerType)) i2 = "VoxelLayer";
        else if (r2 == null ? void 0 : r2.length) {
          const e2 = (_b = r2[0]) == null ? void 0 : _b.layerType;
          null != e2 && null != g[e2] && (i2 = g[e2]);
        }
      }
      break;
    }
    case "3DTilesServer":
      throw new s("arcgis-layers:unsupported", "fromUrl() not supported for 3DTiles layers");
    case "FeatureServer":
      if (i2 = "FeatureLayer", null != n) {
        const e = await t(r, { customParameters: a2 });
        d3.sourceJSON = e, i2 = i(e.type);
      }
      break;
    default:
      i2 = f2[l];
  }
  if (y[i2] && null == n) {
    const e = await b(r, l, a2);
    p2 && (d3.sublayerInfos = e.layerInfos, d3.tableInfos = e.tableInfos);
    if (1 !== e.layers.length + e.tables.length) d3.layers = e.layers, d3.tables = e.tables, p2 && ((_c = e.layerInfos) == null ? void 0 : _c.length) && (d3.sublayerConstructorProvider = await g2(e.layerInfos));
    else if (p2 || m2) {
      const r2 = ((_d = e.layerInfos) == null ? void 0 : _d[0]) ?? ((_e = e.tableInfos) == null ? void 0 : _e[0]);
      if (d3.layerId = ((_f = e.layers[0]) == null ? void 0 : _f.id) ?? ((_g = e.tables[0]) == null ? void 0 : _g.id), d3.sourceJSON = r2, p2) {
        const e2 = r2 == null ? void 0 : r2.type;
        i2 = i(e2);
      }
    }
  }
  return d3.Constructor = await I2(i2), d3;
}
async function v(e, t3) {
  var _a;
  const l = await t(e, { customParameters: t3 });
  let o = null, n = null;
  const c = l.type;
  if ("Feature Layer" === c || "Table" === c ? (o = "FeatureServer", n = l.id ?? null) : "indexedVector" === c ? o = "VectorTileServer" : l.hasOwnProperty("mapName") ? o = "MapServer" : l.hasOwnProperty("bandCount") && l.hasOwnProperty("pixelSizeX") ? o = "ImageServer" : l.hasOwnProperty("maxRecordCount") && l.hasOwnProperty("allowGeometryUpdates") ? o = "FeatureServer" : l.hasOwnProperty("streamUrls") ? o = "StreamServer" : S(l) ? (o = "SceneServer", n = l.id) : l.hasOwnProperty("layers") && S((_a = l.layers) == null ? void 0 : _a[0]) && (o = "SceneServer"), !o) return null;
  const i2 = null != n ? h(e) : null;
  return { title: null != i2 && l.name || qt(e), serverType: o, sublayer: n, url: { path: null != i2 ? i2.serviceUrl : I(e).path } };
}
function S(e) {
  return null != e && e.hasOwnProperty("store") && e.hasOwnProperty("id") && "number" == typeof e.id;
}
async function b(e, r, a2) {
  let t3, s3, l = false;
  switch (r) {
    case "FeatureServer": {
      const r2 = await t2(e, { customParameters: a2 });
      l = !!r2.layersJSON, t3 = r2.layersJSON || r2.serviceJSON;
      break;
    }
    case "SceneServer": {
      const r2 = await h2(e, a2);
      t3 = r2.serviceInfo, s3 = r2.tableServerUrl;
      break;
    }
    default:
      t3 = await t(e, { customParameters: a2 });
  }
  const o = t3 == null ? void 0 : t3.layers, c = t3 == null ? void 0 : t3.tables;
  return { layers: (o == null ? void 0 : o.map((e2) => ({ id: e2.id })).reverse()) || [], tables: (c == null ? void 0 : c.map((e2) => ({ serverUrl: s3, id: e2.id })).reverse()) || [], layerInfos: l ? o : [], tableInfos: l ? c : [] };
}
async function h2(e, r) {
  var _a;
  const a2 = await t(e, { customParameters: r }), t3 = (_a = a2.layers) == null ? void 0 : _a[0];
  if (!t3) return { serviceInfo: a2 };
  try {
    const { serverUrl: t4 } = await s2(e), s3 = await t(t4, { customParameters: r }).catch(() => null);
    return s3 && (a2.tables = s3.tables), { serviceInfo: a2, tableServerUrl: t4 };
  } catch {
    return { serviceInfo: a2 };
  }
}
async function I2(e) {
  return (0, a[e])();
}
async function L(e, r) {
  return (await t(e, { customParameters: r })).tileInfo;
}
async function g2(e) {
  if (!e.length) return;
  const r = /* @__PURE__ */ new Set(), a2 = [];
  for (const { type: l } of e) r.has(l) || (r.add(l), a2.push(I2(i(l))));
  const t3 = await Promise.all(a2), s3 = /* @__PURE__ */ new Map();
  return Array.from(r).forEach((e2, r2) => {
    s3.set(e2, t3[r2]);
  }), (e2) => s3.get(e2.type);
}
export {
  f as fromUrl
};
//# sourceMappingURL=arcgisLayers-6ENJ73GD.js.map
