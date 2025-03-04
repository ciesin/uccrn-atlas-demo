import {
  F
} from "./chunk-QM5VEZEX.js";
import {
  a as a3
} from "./chunk-FENCNBXD.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  l,
  l2,
  t as t2
} from "./chunk-WNY2UW4Q.js";
import {
  t
} from "./chunk-3C7TTTUX.js";
import {
  n as n2
} from "./chunk-45XNKFWX.js";
import {
  n as n3
} from "./chunk-MLOZK7WX.js";
import {
  B,
  O
} from "./chunk-XWXWIBVO.js";
import {
  n as n4,
  r as r4
} from "./chunk-K2PILHWE.js";
import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  A,
  d
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  s as s4
} from "./chunk-BDBI2KVA.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  w,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  b,
  e,
  s as s3,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n,
  s,
  s2
} from "./chunk-CWMZW2S5.js";
import {
  o
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/ground/NavigationConstraint.js
var p;
var c = p = class extends S {
  constructor(o2) {
    super(o2), this.type = "none";
  }
  clone() {
    return new p({ type: this.type });
  }
};
r([r3({ none: "none", stayAbove: "stay-above" }), m({ json: { write: { isRequired: true } } })], c.prototype, "type", void 0), c = p = r([a2("esri.ground.NavigationConstraint")], c);

// node_modules/@arcgis/core/support/groundInstanceUtils.js
var n5 = Symbol("GroundInstance");

// node_modules/@arcgis/core/Ground.js
var C;
var I;
var L = I = class extends S.JSONSupportMixin(m2) {
  constructor(r5) {
    super(r5), this[C] = true, this.opacity = 1, this.surfaceColor = null, this.navigationConstraint = null, this.layers = new V();
    const e3 = (r6) => {
      r6.parent && r6.parent !== this && "remove" in r6.parent && r6.parent.remove(r6), r6.parent = this, "elevation" !== r6.type && "base-elevation" !== r6.type && n.getLogger(this).error(`Layer '${r6.title}, id:${r6.id}' of type '${r6.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`);
    }, t4 = (r6) => {
      r6.parent = null;
    };
    this.addHandles([this.layers.on("after-add", (r6) => e3(r6.item)), this.layers.on("after-remove", (r6) => t4(r6.item))]);
  }
  initialize() {
    this.when().catch((r5) => {
      b(r5) || n.getLogger(this).error("#load()", "Failed to load ground", r5);
    }), this.resourceInfo && this.read(this.resourceInfo.data, this.resourceInfo.context);
  }
  destroy() {
    const r5 = this.layers.removeAll();
    for (const e3 of r5) u(e3);
    this.layers.destroy();
  }
  normalizeCtorArgs(r5) {
    return r5 && "resourceInfo" in r5 && (this._set("resourceInfo", r5.resourceInfo), delete (r5 = { ...r5 }).resourceInfo), r5;
  }
  get layers() {
    return this._get("layers");
  }
  set layers(r5) {
    this._set("layers", n3(r5, this._get("layers")));
  }
  writeLayers(r5, e3, o2, t4) {
    const i3 = [];
    r5 ? (t4 = { ...t4, layerContainerType: "ground" }, r5.forEach((r6) => {
      if ("write" in r6) {
        const e4 = {};
        o(r6)().write(e4, t4) && i3.push(e4);
      } else (t4 == null ? void 0 : t4.messages) && t4.messages.push(new s2("layer:unsupported", `Layers (${r6.title}, ${r6.id}) of type '${r6.declaredClass}' cannot be persisted in the ground`, { layer: r6 }));
    }), e3.layers = i3) : e3.layers = i3;
  }
  load(r5) {
    return this.addResolvingPromise(this._loadFromSource(r5)), Promise.resolve(this);
  }
  loadAll() {
    return t(this, (r5) => {
      r5(this.layers);
    });
  }
  async queryElevation(r5, e3) {
    await this.load({ signal: e3 == null ? void 0 : e3.signal });
    const { ElevationQuery: o2 } = await import("./ElevationQuery-X3NQOIHP.js");
    s3(e3);
    const t4 = new o2(), s5 = this.layers.filter(A2).toArray();
    return t4.queryAll(s5, r5, e3);
  }
  async createElevationSampler(r5, e3) {
    await this.load({ signal: e3 == null ? void 0 : e3.signal });
    const { ElevationQuery: o2 } = await import("./ElevationQuery-X3NQOIHP.js");
    s3(e3);
    const t4 = new o2(), s5 = this.layers.filter(A2).toArray();
    return t4.createSamplerAll(s5, r5, e3);
  }
  clone() {
    const r5 = { opacity: this.opacity, surfaceColor: a(this.surfaceColor), navigationConstraint: a(this.navigationConstraint), layers: this.layers.slice() };
    return this.loaded && (r5.loadStatus = "loaded"), new I({ resourceInfo: this.resourceInfo }).set(r5);
  }
  read(r5, e3) {
    this.resourceInfo || this._set("resourceInfo", { data: r5, context: e3 }), super.read(r5, e3);
  }
  _loadFromSource(r5) {
    const e3 = this.resourceInfo;
    return e3 ? this._loadLayersFromJSON(e3.data, e3.context, r5) : Promise.resolve();
  }
  async _loadLayersFromJSON(r5, e3, o2) {
    const t4 = (e3 == null ? void 0 : e3.origin) || "web-scene", s5 = (e3 == null ? void 0 : e3.portal) || null, a5 = (e3 == null ? void 0 : e3.url) || null, { populateOperationalLayers: i3 } = await import("./layersCreator-AQJFBWC3.js");
    s3(o2);
    const n8 = [];
    if (r5.layers && Array.isArray(r5.layers)) {
      const e4 = { context: { origin: t4, url: a5, portal: s5, layerContainerType: "ground" }, defaultLayerType: "ArcGISTiledElevationServiceLayer" };
      n8.push(i3(this.layers, r5.layers, e4));
    }
    await Promise.allSettled(n8);
  }
};
function b2(r5) {
  return r5 && "createElevationSampler" in r5;
}
function A2(r5) {
  return "elevation" === r5.type || b2(r5);
}
C = n5, r([m({ json: { read: false, write: { isRequired: true } } })], L.prototype, "layers", null), r([r2("layers")], L.prototype, "writeLayers", null), r([m({ readOnly: true })], L.prototype, "resourceInfo", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 1 }, json: { type: x, read: { reader: r4, source: "transparency" }, write: { writer: (r5, e3) => {
  e3.transparency = n4(r5);
}, target: "transparency" } } })], L.prototype, "opacity", void 0), r([m({ type: h, json: { type: [x], write: (r5, e3) => {
  e3.surfaceColor = r5.toJSON().slice(0, 3);
} } })], L.prototype, "surfaceColor", void 0), r([m({ type: c, json: { write: true } })], L.prototype, "navigationConstraint", void 0), L = I = r([a2("esri.Ground")], L);
var E = L;

// node_modules/@arcgis/core/layers/catalog/catalogUtils.js
var n6 = /* @__PURE__ */ new WeakMap();
function a4(o2) {
  return !o2.destroyed && (n6.has(o2) || o2.addHandles([d(() => {
    const e3 = o2.parent;
    return !(!e3 || !("type" in e3)) && ("catalog-dynamic-group" === e3.type || a4(e3));
  }, (e3) => n6.set(o2, e3), A), e(() => n6.delete(o2))]), n6.get(o2));
}

// node_modules/@arcgis/core/layers/support/editableLayers.js
function n7(t4) {
  return "object" == typeof t4 && null != t4 && "loaded" in t4 && true === t4.loaded && "type" in t4;
}
function e2(e3) {
  var _a, _b;
  return !(!n7(e3) || !((_b = (_a = O(e3)) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsEditing) || "editingEnabled" in e3 && !B(e3) || a4(e3));
}

// node_modules/@arcgis/core/support/basemapEnsureType.js
var f = () => n.getLogger("esri.support.basemapUtils");
function p2() {
  return {};
}
function l3(e3) {
  for (const r5 in e3) {
    const s5 = e3[r5];
    u(s5), delete e3[r5];
  }
}
function m3(s5, o2) {
  let n8;
  if ("string" == typeof s5) {
    const t4 = s5 in a3, a5 = !t4 && s5.includes("/");
    if (!t4 && !a5) {
      if (s.apiKey) f().warn(`Unable to find basemap definition for: ${s5}. See available styles at https://developers.arcgis.com/rest/basemap-styles/`);
      else {
        const e3 = Object.entries(a3).filter(([e4, r5]) => r5.classic || r5.is3d).map(([e4]) => `"${e4}"`).sort().join(", ");
        f().warn(`Unable to find basemap definition for: ${s5}. Try one of these: ${e3}`);
      }
      return null;
    }
    o2 && (n8 = o2[s5]), n8 || (n8 = t4 ? F.fromId(s5) : new F({ style: { id: s5 } }), o2 && (o2[s5] = n8));
  } else n8 = w(F, s5);
  return (n8 == null ? void 0 : n8.destroyed) && (f().warn("The provided basemap is already destroyed", { basemap: n8 }), n8 = null), n8;
}

// node_modules/@arcgis/core/support/groundUtils.js
var i2 = { "world-elevation": { id: "worldElevation", url: "//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer", layerType: "ArcGISTiledElevationServiceLayer" }, "world-topobathymetry": { id: "worldTopoBathymetry", url: "//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer", layerType: "ArcGISTiledElevationServiceLayer" } };
function t3(t4) {
  let a5 = null;
  if ("string" == typeof t4) if (t4 in i2) {
    const r5 = i2[t4];
    a5 = new E({ resourceInfo: { data: { layers: [r5] } } });
  } else n.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${t4}. Try "world-elevation"`);
  else a5 = w(E, t4);
  return a5;
}

// node_modules/@arcgis/core/Map.js
var j = class extends l2(l(i.EventedMixin(g))) {
  constructor(e3) {
    super(e3), this.allLayers = new n2({ getCollections: () => {
      var _a, _b, _c;
      return [(_a = this.basemap) == null ? void 0 : _a.baseLayers, (_b = this.ground) == null ? void 0 : _b.layers, this.layers, (_c = this.basemap) == null ? void 0 : _c.referenceLayers];
    }, getChildrenFunction: (e4) => "layers" in e4 ? e4.layers : null }), this.allTables = t2(this), this.basemap = null, this.editableLayers = new n2({ getCollections: () => [this.allLayers], itemFilterFunction: e2 }), this.ground = new E(), this._basemapCache = p2();
  }
  destroy() {
    l3(this._basemapCache), this._basemapCache = null, this.allLayers.destroy(), this.allTables.destroy(), this.editableLayers.destroy(), this.basemap = u(this.basemap), u(this.ground), this._set("ground", null);
  }
  castBasemap(e3) {
    return m3(e3, this._basemapCache);
  }
  castGround(e3) {
    const s5 = t3(e3);
    return s5 ?? this._get("ground");
  }
  findLayerById(e3) {
    return this.allLayers.find((s5) => s5.id === e3);
  }
  findTableById(e3) {
    return this.allTables.find((s5) => s5.id === e3);
  }
};
r([m({ readOnly: true, dependsOn: [] })], j.prototype, "allLayers", void 0), r([m({ readOnly: true })], j.prototype, "allTables", void 0), r([m({ type: F, json: { read: { source: "baseMap" }, write: { target: "baseMap" } } })], j.prototype, "basemap", void 0), r([s4("basemap")], j.prototype, "castBasemap", null), r([m({ readOnly: true })], j.prototype, "editableLayers", void 0), r([m({ type: E, nonNullable: true })], j.prototype, "ground", void 0), r([s4("ground")], j.prototype, "castGround", null), r([m()], j.prototype, "undoRedo", void 0), j = r([a2("esri.Map")], j);
var L2 = j;

export {
  L2 as L
};
//# sourceMappingURL=chunk-IIQW7SYI.js.map
