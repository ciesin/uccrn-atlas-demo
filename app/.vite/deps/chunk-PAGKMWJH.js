import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  w as w2
} from "./chunk-NENDDUWH.js";
import {
  y
} from "./chunk-YUVX6H42.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  g as g2
} from "./chunk-RDUV6YP6.js";
import {
  r as r2
} from "./chunk-A42OBC4U.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  P2 as P,
  n,
  s as s4
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a as a3,
  c2 as c,
  l2 as l,
  s as s3,
  u2 as u,
  u3 as u2
} from "./chunk-M6FNW7GP.js";
import {
  a,
  s,
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/portal/portalDefault.js
var t;
function n2(e2) {
  return t && !t.destroyed || (t = e2()), t;
}

// node_modules/@arcgis/core/portal/PortalQueryParams.js
var u3;
var m3 = new o({ avgRating: "avg-rating", numRatings: "num-ratings", numComments: "num-comments", numViews: "num-views" });
var p = u3 = class extends g {
  constructor(t2) {
    super(t2), this.categories = null, this.disableExtraQuery = false, this.extent = null, this.filter = null, this.num = 10, this.query = null, this.sortField = null, this.start = 1;
  }
  get sortOrder() {
    return this._get("sortOrder") || "asc";
  }
  set sortOrder(t2) {
    "asc" !== t2 && "desc" !== t2 || this._set("sortOrder", t2);
  }
  clone() {
    return new u3({ categories: this.categories ? a(this.categories) : null, disableExtraQuery: this.disableExtraQuery, extent: this.extent ? this.extent.clone() : null, filter: this.filter, num: this.num, query: this.query, sortField: this.sortField, sortOrder: this.sortOrder, start: this.start });
  }
  toRequestOptions(t2, r3) {
    let e2 = [];
    this.categories && (e2 = this.categories.map((t3) => Array.isArray(t3) ? JSON.stringify(t3) : t3));
    let s5 = "";
    if (this.extent) {
      const t3 = y(this.extent, g2.WGS84);
      null != t3 && (s5 = `${t3.xmin},${t3.ymin},${t3.xmax},${t3.ymax}`);
    }
    let o3 = this.query;
    !this.disableExtraQuery && t2.extraQuery && (o3 = "(" + o3 + ")" + t2.extraQuery);
    const i = { categories: e2, bbox: s5, q: o3, filter: this.filter, num: this.num, sortField: null, sortOrder: null, start: this.start };
    return this.sortField && (i.sortField = this.sortField.split(",").map((t3) => m3.toJSON(t3.trim())).join(","), i.sortOrder = this.sortOrder), { query: { ...r3, ...i } };
  }
};
r([m()], p.prototype, "categories", void 0), r([m()], p.prototype, "disableExtraQuery", void 0), r([m({ type: w2 })], p.prototype, "extent", void 0), r([m()], p.prototype, "filter", void 0), r([m()], p.prototype, "num", void 0), r([m()], p.prototype, "query", void 0), r([m()], p.prototype, "sortField", void 0), r([m()], p.prototype, "sortOrder", null), r([m()], p.prototype, "start", void 0), p = u3 = r([a2("esri.portal.PortalQueryParams")], p);
var c2 = p;

// node_modules/@arcgis/core/portal/PortalGroup.js
var l2;
var u4 = l2 = class extends S {
  constructor(t2) {
    super(t2), this.access = null, this.created = null, this.description = null, this.id = null, this.isInvitationOnly = false, this.modified = null, this.owner = null, this.portal = null, this.snippet = null, this.sortField = null, this.sortOrder = null, this.sourceJSON = null, this.tags = null, this.title = null;
  }
  get thumbnailUrl() {
    var _a;
    const t2 = this.url, r3 = this.thumbnail;
    return t2 && r3 && this.portal ? (_a = this.portal) == null ? void 0 : _a.normalizeUrl(`${t2}/info/${r3}?f=json`) : null;
  }
  get url() {
    var _a;
    const t2 = (_a = this.portal) == null ? void 0 : _a.restUrl;
    return t2 ? t2 + "/community/groups/" + this.id : null;
  }
  fetchCategorySchema(t2) {
    return this.portal.request(this.url + "/categorySchema", t2).then((r3) => {
      const e2 = r3.categorySchema || [];
      return e2.some((t3) => "contentCategorySetsGroupQuery.LivingAtlas" === t3.source) ? this._fetchCategorySchemaSet("LivingAtlas", t2) : e2;
    });
  }
  fetchMembers(t2) {
    return this.portal.request(this.url + "/users", t2);
  }
  getThumbnailUrl(t2) {
    let r3 = this.thumbnailUrl;
    return r3 && t2 && (r3 += `&w=${t2}`), r3;
  }
  toJSON() {
    throw new s2("internal:not-yet-implemented", "PortalGroup.toJSON is not yet implemented");
  }
  static fromJSON(t2) {
    if (!t2) return null;
    if (t2.declaredClass) throw new Error("JSON object is already hydrated");
    const r3 = new l2({ sourceJSON: t2 });
    return r3.read(t2), r3;
  }
  queryItems(t2, r3) {
    let e2 = w(c2, t2);
    const o3 = this.portal;
    return parseFloat(o3.currentVersion) > 5 ? (e2 = e2 || new c2(), o3.queryPortal(`/content/groups/${this.id}/search`, e2, "PortalItem", r3)) : (e2 = e2 ? e2.clone() : new c2(), e2.query = "group:" + this.id + (e2.query ? " " + e2.query : ""), o3.queryItems(e2, r3));
  }
  _fetchCategorySchemaSet(t2, e2) {
    const o3 = this.portal;
    return o3.fetchSelf(o3.authMode, true, e2).then((t3) => {
      const s5 = t3.contentCategorySetsGroupQuery;
      if (s5) {
        const t4 = new c2({ disableExtraQuery: true, num: 1, query: s5 });
        return o3.queryGroups(t4, e2);
      }
      throw new s2("portal-group:fetchCategorySchema", "contentCategorySetsGroupQuery value not found");
    }).then((o4) => {
      if (o4.total) {
        const r3 = o4.results[0], s5 = new c2({ num: 1, query: `typekeywords:"${t2}"` });
        return r3.queryItems(s5, e2);
      }
      throw new s2("portal-group:fetchCategorySchema", "contentCategorySetsGroupQuery group not found");
    }).then((t3) => {
      if (t3.total) {
        return t3.results[0].fetchData("json", e2).then((t4) => {
          const r3 = t4 == null ? void 0 : t4.categorySchema;
          return (r3 == null ? void 0 : r3.length) ? r3 : [];
        });
      }
      return [];
    });
  }
};
r([m()], u4.prototype, "access", void 0), r([m({ type: Date })], u4.prototype, "created", void 0), r([m()], u4.prototype, "description", void 0), r([m()], u4.prototype, "id", void 0), r([m()], u4.prototype, "isInvitationOnly", void 0), r([m({ type: Date })], u4.prototype, "modified", void 0), r([m()], u4.prototype, "owner", void 0), r([m()], u4.prototype, "portal", void 0), r([m()], u4.prototype, "snippet", void 0), r([m()], u4.prototype, "sortField", void 0), r([m()], u4.prototype, "sortOrder", void 0), r([m()], u4.prototype, "sourceJSON", void 0), r([m()], u4.prototype, "tags", void 0), r([m()], u4.prototype, "thumbnail", void 0), r([m({ readOnly: true })], u4.prototype, "thumbnailUrl", null), r([m()], u4.prototype, "title", void 0), r([m({ readOnly: true })], u4.prototype, "url", null), u4 = l2 = r([a2("esri.portal.PortalGroup")], u4);
var p2 = u4;

// node_modules/@arcgis/core/portal/PortalQueryResult.js
var e = class extends g {
  constructor(r3) {
    super(r3), this.nextQueryParams = null, this.queryParams = null, this.results = null, this.total = null;
  }
};
r([m()], e.prototype, "nextQueryParams", void 0), r([m()], e.prototype, "queryParams", void 0), r([m()], e.prototype, "results", void 0), r([m()], e.prototype, "total", void 0), e = r([a2("esri.portal.PortalQueryResult")], e);
var p3 = e;

// node_modules/@arcgis/core/portal/PortalFolder.js
var p4 = class extends S {
  constructor(t2) {
    super(t2), this.created = null, this.id = null, this.portal = null, this.title = null, this.username = null;
  }
  get url() {
    var _a;
    const t2 = (_a = this.portal) == null ? void 0 : _a.restUrl;
    return t2 ? `${t2}/content/users/${this.username}/${this.id}` : null;
  }
  toJSON() {
    throw new s2("internal:not-yet-implemented", "PortalFolder.toJSON is not yet implemented");
  }
};
r([m({ type: Date })], p4.prototype, "created", void 0), r([m()], p4.prototype, "id", void 0), r([m()], p4.prototype, "portal", void 0), r([m()], p4.prototype, "title", void 0), r([m({ readOnly: true })], p4.prototype, "url", null), r([m()], p4.prototype, "username", void 0), p4 = r([a2("esri.portal.PortalFolder")], p4);
var l3 = p4;

// node_modules/@arcgis/core/portal/PortalUser.js
var n3;
var u5 = n3 = class extends S {
  constructor(t2) {
    super(t2), this.access = null, this.created = null, this.culture = null, this.description = null, this.email = null, this.fullName = null, this.modified = null, this.orgId = null, this.portal = null, this.preferredView = null, this.privileges = null, this.region = null, this.role = null, this.roleId = null, this.sourceJSON = null, this.units = null, this.username = null, this.userLicenseTypeId = null, this.userType = null;
  }
  get thumbnailUrl() {
    const t2 = this.url, e2 = this.thumbnail;
    return t2 && e2 ? this.portal.normalizeUrl(`${t2}/info/${e2}?f=json`) : null;
  }
  get userContentUrl() {
    var _a;
    const t2 = (_a = this.portal) == null ? void 0 : _a.restUrl;
    return t2 ? `${t2}/content/users/${this.username}` : null;
  }
  get url() {
    var _a;
    const t2 = (_a = this.portal) == null ? void 0 : _a.restUrl;
    return t2 ? `${t2}/community/users/${this.username}` : null;
  }
  addItem(t2) {
    const e2 = t2 && t2.item, r3 = t2 == null ? void 0 : t2.data, o3 = t2 == null ? void 0 : t2.folder, s5 = { method: "post" };
    e2 && (s5.query = e2.createPostQuery(), null != r3 && ("string" == typeof r3 ? s5.query.text = r3 : "object" == typeof r3 && (s5.query.text = JSON.stringify(r3))));
    let l4 = this.userContentUrl;
    return o3 && (l4 += "/" + ("string" == typeof o3 ? o3 : o3.id)), this.portal.request(l4 + "/addItem", s5).then((t3) => (e2.id = t3.id, e2.portal = this.portal, e2.loaded ? e2.reload() : e2.load()));
  }
  async deleteItem(t2, e2 = false) {
    let r3 = this.userContentUrl;
    t2.ownerFolder && (r3 += "/" + t2.ownerFolder);
    const o3 = e2 ? { permanentDelete: true } : {};
    await this.portal.request(r3 + `/items/${t2.id}/delete`, { method: "post", query: o3 }), t2.id = null, t2.portal = null;
  }
  async deleteItems(t2, r3 = false) {
    t2 = t2.slice();
    const o3 = this.userContentUrl + "/deleteItems", s5 = [], l4 = t2.map((t3) => t3.id);
    if (l4.length) {
      const i = { method: "post", query: { items: l4.join(","), permanentDelete: r3 } }, n4 = await this.portal.request(o3, i);
      for (const r4 of n4.results) {
        const o4 = t2.find((t3) => r4.itemId === t3.id), l5 = r4.success;
        let i2 = null;
        l5 ? (o4.id = null, o4.portal = null) : r4.error && (i2 = new s2("portal:delete-item-failed", r4.error.message, r4.error)), s5.push({ item: o4, success: l5, error: i2 });
      }
    }
    return s5;
  }
  fetchFolders() {
    const t2 = { query: { num: 1 } };
    return this.portal.request(this.userContentUrl ?? "", t2).then((t3) => {
      let e2;
      return e2 = t3 && t3.folders ? t3.folders.map((t4) => {
        const e3 = l3.fromJSON(t4);
        return e3.portal = this.portal, e3;
      }) : [], e2;
    });
  }
  fetchGroups() {
    return this.portal.request(this.url ?? "").then((t2) => {
      let e2;
      return e2 = t2 && t2.groups ? t2.groups.map((t3) => {
        const e3 = p2.fromJSON(t3);
        return e3.portal = this.portal, e3;
      }) : [], e2;
    });
  }
  async fetchItems(t2) {
    t2 ?? (t2 = {});
    let e2 = this.userContentUrl ?? "";
    t2.folder && (e2 += "/" + t2.folder.id);
    const { default: r3 } = await import("./PortalItem-GUEYAFUR.js"), o3 = { folders: false, inRecycleBin: !!t2.inRecycleBin || null, foldersContent: !(t2.folder || !t2.includeSubfolderItems) || null, num: t2.num || 10, start: t2.start || 1, sortField: t2.sortField || "created", sortOrder: t2.sortOrder || "asc" }, s5 = await this.portal.request(e2, { query: o3 });
    let l4;
    return (s5 == null ? void 0 : s5.items) ? (l4 = s5.items.map((t3) => {
      const e3 = r3.fromJSON(t3);
      return e3.portal = this.portal, e3;
    }), await Promise.all(l4.map((t3) => t3.load())), { items: l4, nextStart: s5.nextStart, total: s5.total }) : { items: [], nextStart: -1, total: 0 };
  }
  fetchTags() {
    return this.portal.request(this.url + "/tags").then((t2) => t2.tags);
  }
  getThumbnailUrl(t2) {
    let e2 = this.thumbnailUrl;
    return e2 && t2 && (e2 += `&w=${t2}`), e2;
  }
  queryFavorites(t2) {
    return this.favGroupId ? (this._favGroup || (this._favGroup = new p2({ id: this.favGroupId, portal: this.portal })), this._favGroup.queryItems(t2)) : Promise.reject(new s2("internal:unknown", "Unknown internal error", { internalError: "Unknown favGroupId" }));
  }
  async restoreItem(t2, e2) {
    const r3 = this.userContentUrl, o3 = e2 ? { folderID: "string" == typeof e2 ? e2 : e2.id } : null;
    await this.portal.request(r3 + `/items/${t2.id}/restore`, { method: "post", query: o3 });
  }
  toJSON() {
    throw new s2("internal:not-yet-implemented", "PortalUser.toJSON is not yet implemented");
  }
  static fromJSON(t2) {
    if (!t2) return null;
    if (t2.declaredClass) throw new Error("JSON object is already hydrated");
    const e2 = new n3({ sourceJSON: t2 });
    return e2.read(t2), e2;
  }
};
r([m()], u5.prototype, "access", void 0), r([m({ type: Date })], u5.prototype, "created", void 0), r([m()], u5.prototype, "culture", void 0), r([m()], u5.prototype, "description", void 0), r([m()], u5.prototype, "email", void 0), r([m()], u5.prototype, "favGroupId", void 0), r([m()], u5.prototype, "fullName", void 0), r([m({ type: Date })], u5.prototype, "modified", void 0), r([m()], u5.prototype, "orgId", void 0), r([m()], u5.prototype, "portal", void 0), r([m()], u5.prototype, "preferredView", void 0), r([m()], u5.prototype, "privileges", void 0), r([m()], u5.prototype, "region", void 0), r([m()], u5.prototype, "role", void 0), r([m()], u5.prototype, "roleId", void 0), r([m()], u5.prototype, "sourceJSON", void 0), r([m()], u5.prototype, "thumbnail", void 0), r([m({ readOnly: true })], u5.prototype, "thumbnailUrl", null), r([m()], u5.prototype, "units", void 0), r([m({ readOnly: true })], u5.prototype, "userContentUrl", null), r([m({ readOnly: true })], u5.prototype, "url", null), r([m()], u5.prototype, "username", void 0), r([m()], u5.prototype, "userLicenseTypeId", void 0), r([m()], u5.prototype, "userType", void 0), u5 = n3 = r([a2("esri.portal.PortalUser")], u5);
var p5 = u5;

// node_modules/@arcgis/core/portal/Portal.js
var _;
var M;
var Q = { PortalGroup: () => Promise.resolve({ default: p2 }), PortalItem: () => import("./PortalItem-GUEYAFUR.js"), PortalUser: () => Promise.resolve({ default: p5 }) };
var U = _ = class extends S.JSONSupportMixin(m2) {
  constructor(e2) {
    super(e2), this._esriIdCredentialCreateHandle = null, this.access = null, this.allSSL = false, this.authMode = "auto", this.authorizedCrossOriginDomains = null, this.basemapGalleryGroupQuery = null, this.basemapGalleryGroupQuery3D = null, this.bingKey = null, this.canListApps = false, this.canListData = false, this.canListPreProvisionedItems = false, this.canProvisionDirectPurchase = false, this.canSearchPublic = true, this.canShareBingPublic = false, this.canSharePublic = false, this.canSignInArcGIS = false, this.canSignInIDP = false, this.colorSetsGroupQuery = null, this.commentsEnabled = false, this.created = null, this.culture = null, this.customBaseUrl = null, this.default3DBasemapQuery = null, this.defaultBasemap = null, this.defaultDevBasemap = null, this.defaultExtent = null, this.defaultVectorBasemap = null, this.description = null, this.devBasemapGalleryGroupQuery = null, this.eueiEnabled = null, this.featuredGroups = null, this.featuredItemsGroupQuery = null, this.galleryTemplatesGroupQuery = null, this.layoutGroupQuery = null, this.livingAtlasGroupQuery = null, this.hasCategorySchema = false, this.hasClassificationSchema = false, this.helperServices = null, this.homePageFeaturedContent = null, this.homePageFeaturedContentCount = null, this.httpPort = null, this.httpsPort = null, this.id = null, this.ipCntryCode = null, this.isPortal = false, this.isReadOnly = false, this.layerTemplatesGroupQuery = null, this.maxTokenExpirationMinutes = null, this.modified = null, this.name = null, this.portalHostname = null, this.portalMode = null, this.portalProperties = null, this.region = null, this.recycleBinEnabled = false, this.rotatorPanels = null, this.showHomePageDescription = false, this.sourceJSON = null, this.supportsHostedServices = false, this.symbolSetsGroupQuery = null, this.templatesGroupQuery = null, this.units = null, this.url = s.portalUrl, this.urlKey = null, this.user = null, this.use3dBasemaps = true, this.useDefault3dBasemap = false, this.useStandardizedQuery = false, this.useVectorBasemaps = false, this.vectorBasemapGalleryGroupQuery = null;
  }
  normalizeCtorArgs(e2) {
    return "string" == typeof e2 ? { url: e2 } : e2;
  }
  destroy() {
    b.unregister(this), this.defaultBasemap = u(this.defaultBasemap), this.defaultDevBasemap = u(this.defaultDevBasemap), this.defaultVectorBasemap = u(this.defaultVectorBasemap), this._esriIdCredentialCreateHandle = l(this._esriIdCredentialCreateHandle);
  }
  readAuthorizedCrossOriginDomains(e2) {
    if (e2) for (const r3 of e2) s.request.trustedServers.includes(r3) || s.request.trustedServers.push(r3);
    return e2;
  }
  readDefaultBasemap(e2) {
    return this._readBasemap(e2);
  }
  readDefaultDevBasemap(e2) {
    return this._readBasemap(e2);
  }
  readDefaultVectorBasemap(e2) {
    return this._readBasemap(e2);
  }
  get extraQuery() {
    var _a;
    const e2 = (_a = this.user) == null ? void 0 : _a.orgId, t2 = !e2 || this.canSearchPublic;
    return this.id && !t2 ? ` AND orgid:${this.id}` : null;
  }
  get hasAPIKey() {
    return n(this.url);
  }
  get isOrganization() {
    return !!this.access;
  }
  get itemPageUrl() {
    return this.url ? `${this.url}/home/item.html` : null;
  }
  get restUrl() {
    let e2 = this.url;
    if (e2) {
      const t2 = e2.indexOf("/sharing");
      e2 = t2 > 0 ? e2.slice(0, t2) : this.url.replace(/\/+$/, ""), e2 += "/sharing/rest";
    }
    return e2;
  }
  get thumbnailUrl() {
    const e2 = this.restUrl, t2 = this.thumbnail;
    return e2 && t2 ? this._normalizeSSL(e2 + "/portals/self/resources/" + t2) : null;
  }
  readUrlKey(e2) {
    return e2 ? e2.toLowerCase() : e2;
  }
  readUser(e2) {
    let t2 = null;
    return e2 && (t2 = p5.fromJSON(e2), t2.portal = this), t2;
  }
  load(e2) {
    const t2 = import("./Basemap-NKTCBT5O.js").then(({ default: t3 }) => {
      s3(e2), M = t3;
    }).then(() => this.sourceJSON ? this.sourceJSON : this.fetchSelf(this.authMode, false, e2)).then((e3) => {
      var _a;
      if (!this.hasAPIKey && s4) {
        const e4 = s4;
        this.credential = e4.findCredential(this.restUrl), this.credential || this.authMode !== _.AUTH_MODE_AUTO && this.authMode !== _.AUTH_MODE_NO_PROMPT || ((_a = this._esriIdCredentialCreateHandle) == null ? void 0 : _a.remove(), this._esriIdCredentialCreateHandle = e4.on("credential-create", w3(new WeakRef(this))), b.register(this, this._esriIdCredentialCreateHandle, this));
      }
      this.sourceJSON = e3, this.read(e3);
    });
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  async createElevationLayers() {
    await this.load();
    const e2 = this._getHelperService("defaultElevationLayers"), t2 = (await import("./ElevationLayer-Y3ZRTM4O.js")).default;
    return e2 ? e2.map((e3) => new t2({ id: e3.id, url: e3.url })) : [];
  }
  async fetchBasemaps(e2, t2) {
    const r3 = await this._fetchBasemaps(e2, t2);
    if (true === (t2 == null ? void 0 : t2.include3d) && false !== this.use3dBasemaps) {
      const o3 = await this._fetchBasemaps3D(e2, t2);
      r3.unshift(...o3);
    }
    return r3;
  }
  async fetchDefault3DBasemap(e2) {
    if (!this.useDefault3dBasemap || !this.default3DBasemapQuery || "none" === this.default3DBasemapQuery) return null;
    const t2 = new c2();
    t2.query = this.default3DBasemapQuery, t2.disableExtraQuery = true;
    const r3 = (await this.queryItems(t2, e2)).results.find((e3) => "Web Scene" === e3.type);
    return r3 ? new M({ portalItem: r3 }) : null;
  }
  fetchCategorySchema(e2) {
    return this.hasCategorySchema ? this.request(this.restUrl + "/portals/self/categorySchema", e2).then((e3) => e3.categorySchema) : c(e2) ? Promise.reject(u2()) : Promise.resolve([]);
  }
  async fetchClassificationSchema(e2) {
    return this.hasClassificationSchema ? this.request(this.restUrl + "/portals/self/classification/classificationSchema", e2).then((e3) => e3.classificationSchema) : null;
  }
  fetchFeaturedGroups(e2) {
    const t2 = this.featuredGroups, r3 = new c2({ num: 100, sortField: "title" });
    if (t2 == null ? void 0 : t2.length) {
      const o3 = [];
      for (const e3 of t2) o3.push(`(title:"${e3.title}" AND owner:${e3.owner})`);
      return r3.query = o3.join(" OR "), this.queryGroups(r3, e2).then((e3) => e3.results);
    }
    return c(e2) ? Promise.reject(u2()) : Promise.resolve([]);
  }
  fetchRegions(e2) {
    var _a;
    const t2 = ((_a = this.user) == null ? void 0 : _a.culture) || this.culture || r2();
    return this.request(this.restUrl + "/portals/regions", { ...e2, query: { culture: t2 } });
  }
  fetchSettings(e2) {
    var _a;
    const t2 = ((_a = this.user) == null ? void 0 : _a.culture) || this.culture || r2();
    return this.request(this.restUrl + "/portals/self/settings", { ...e2, query: { culture: t2 } });
  }
  static getDefault() {
    return n2(() => new _());
  }
  queryGroups(e2, t2) {
    return this.queryPortal("/community/groups", e2, "PortalGroup", t2);
  }
  queryItems(e2, t2) {
    return this.queryPortal("/search", e2, "PortalItem", t2);
  }
  queryUsers(e2, t2) {
    return e2.sortField || (e2.sortField = "username"), this.queryPortal("/community/users", e2, "PortalUser", t2);
  }
  fetchSelf(e2 = this.authMode, t2 = false, r3) {
    const o3 = this.restUrl + "/portals/self", s5 = { authMode: e2, query: { culture: r2().toLowerCase() }, withCredentials: true, ...r3 };
    return "auto" === s5.authMode && (s5.authMode = "no-prompt"), t2 && (s5.query.default = true), this.request(o3, s5);
  }
  queryPortal(e2, t2, r3, o3) {
    const s5 = w(c2, t2), a4 = (t3) => this.request(this.restUrl + e2, { ...s5.toRequestOptions(this), ...o3 }).then((e3) => {
      const r4 = s5.clone();
      return r4.start = e3.nextStart, new p3({ nextQueryParams: r4, queryParams: s5, total: e3.total, results: _._resultsToTypedArray(t3, { portal: this }, e3, o3) });
    }).then((e3) => Promise.all(e3.results.map((t4) => "function" == typeof t4.when ? t4.when() : e3)).then(() => e3, (t4) => (a3(t4), e3)));
    return r3 && Q[r3] ? Q[r3]().then(({ default: e3 }) => (s3(o3), a4(e3))) : a4();
  }
  signIn() {
    if (this.hasAPIKey) return this.load().then(() => {
      if (!this.user) throw new s2("portal:not-authenticated", "Unable to authenticate user. Portal.user is missing");
    });
    if (this.authMode === _.AUTH_MODE_ANONYMOUS || this.authMode === _.AUTH_MODE_NO_PROMPT && !s4) return Promise.reject(new s2("portal:invalid-auth-mode", `Current "authMode"' is "${this.authMode}"`));
    if ("failed" === this.loadStatus) return Promise.reject(this.loadError);
    const e2 = (e3) => Promise.resolve().then(() => "not-loaded" === this.loadStatus ? (e3 || (this.authMode = "immediate"), this.load().then(() => null)) : "loading" === this.loadStatus ? this.load().then(() => this.credential ? null : (this.credential = e3, this.fetchSelf("immediate"))) : this.user && this.credential === e3 ? null : (this.credential = e3, this.fetchSelf("immediate"))).then((e4) => {
      e4 && (this.sourceJSON = e4, this.read(e4));
    });
    return s4 ? s4.getCredential(this.restUrl, { prompt: this.authMode !== _.AUTH_MODE_NO_PROMPT }).then((t2) => e2(t2)) : e2(this.credential);
  }
  normalizeUrl(e2) {
    var _a;
    const t2 = (_a = this.credential) == null ? void 0 : _a.token;
    return this._normalizeSSL(t2 ? e2 + (e2.includes("?") ? "&" : "?") + "token=" + t2 : e2);
  }
  requestToTypedArray(e2, t2, r3) {
    return this.request(e2, t2).then((e3) => {
      const t3 = _._resultsToTypedArray(r3, { portal: this }, e3);
      return Promise.all(t3.map((t4) => "function" == typeof t4.when ? t4.when() : e3)).then(() => t3, () => t3);
    });
  }
  request(e2, t2 = {}) {
    const r3 = { f: "json", ...t2.query }, { authMode: s5 = this.authMode === _.AUTH_MODE_ANONYMOUS || this.authMode === _.AUTH_MODE_NO_PROMPT ? this.authMode : "auto", body: a4 = null, cacheBust: i = false, method: l4 = "auto", responseType: u6 = "json", signal: n4 } = t2, p6 = { authMode: s5, body: a4, cacheBust: i, method: l4, query: r3, responseType: u6, timeout: 0, signal: n4 };
    return t2.withCredentials && (p6.withCredentials = true), P(this._normalizeSSL(e2), p6).then((e3) => e3.data);
  }
  toJSON() {
    throw new s2("internal:not-yet-implemented", "Portal.toJSON is not yet implemented");
  }
  static fromJSON(e2) {
    if (!e2) return null;
    if (e2.declaredClass) throw new Error("JSON object is already hydrated");
    return new _({ sourceJSON: e2 });
  }
  _getHelperService(e2) {
    const t2 = this.helperServices && this.helperServices[e2];
    if (!t2) throw new s2("portal:service-not-found", `The \`helperServices\` do not include an entry named "${e2}"`);
    return t2;
  }
  async _fetchBasemaps(e2, t2) {
    const r3 = new c2();
    r3.query = e2 || (this.hasAPIKey ? this.devBasemapGalleryGroupQuery : this.useVectorBasemaps ? this.vectorBasemapGalleryGroupQuery : this.basemapGalleryGroupQuery), r3.disableExtraQuery = true;
    const o3 = await this.queryGroups(r3, t2);
    if (!o3.total) return [];
    const s5 = o3.results[0];
    r3.num = 100, r3.query = 'type:"Web Map" -type:"Web Application"', r3.sortField = s5.sortField || "name", r3.sortOrder = s5.sortOrder || "desc";
    const a4 = await s5.queryItems(r3, t2);
    if (!a4.total) return [];
    return a4.results.filter((e3) => "Web Map" === e3.type).map((e3) => new M({ portalItem: e3 }));
  }
  async _fetchBasemaps3D(e2, t2) {
    const r3 = e2 || this.basemapGalleryGroupQuery3D;
    if (!r3) return [];
    if (this.hasAPIKey) return [];
    const o3 = new c2({ query: r3, disableExtraQuery: true }), s5 = await this.queryGroups(o3, t2);
    if (!s5.total) return [];
    const a4 = s5.results[0];
    o3.num = 100, o3.query = 'type:"Web Scene"', o3.sortField = a4.sortField || "name", o3.sortOrder = a4.sortOrder || "desc";
    const i = await a4.queryItems(o3, t2);
    if (!i.total) return [];
    return i.results.filter((e3) => "Web Scene" === e3.type).map((e3) => new M({ portalItem: e3 }));
  }
  _normalizeSSL(e2) {
    return e2.replace(/^http:/i, "https:").replace(":7080", ":7443");
  }
  _readBasemap(e2) {
    if (e2) {
      const t2 = M.fromJSON(e2);
      return t2.portalItem = { portal: this }, t2;
    }
    return null;
  }
  static _resultsToTypedArray(e2, t2, r3, o3) {
    let s5;
    if (r3) {
      const a4 = null != o3 ? o3.signal : null;
      s5 = r3.listings || r3.notifications || r3.userInvitations || r3.tags || r3.items || r3.groups || r3.comments || r3.provisions || r3.results || r3.relatedItems || r3, (e2 || t2) && (s5 = s5.map((r4) => {
        const o4 = Object.assign(e2 ? e2.fromJSON(r4) : r4, t2);
        return "function" == typeof o4.load && o4.load(a4), o4;
      }));
    } else s5 = [];
    return s5;
  }
};
U.AUTH_MODE_ANONYMOUS = "anonymous", U.AUTH_MODE_AUTO = "auto", U.AUTH_MODE_IMMEDIATE = "immediate", U.AUTH_MODE_NO_PROMPT = "no-prompt", r([m()], U.prototype, "access", void 0), r([m()], U.prototype, "allSSL", void 0), r([m()], U.prototype, "authMode", void 0), r([m()], U.prototype, "authorizedCrossOriginDomains", void 0), r([o2("authorizedCrossOriginDomains")], U.prototype, "readAuthorizedCrossOriginDomains", null), r([m()], U.prototype, "basemapGalleryGroupQuery", void 0), r([m({ json: { name: "3DBasemapGalleryGroupQuery" } })], U.prototype, "basemapGalleryGroupQuery3D", void 0), r([m()], U.prototype, "bingKey", void 0), r([m()], U.prototype, "canListApps", void 0), r([m()], U.prototype, "canListData", void 0), r([m()], U.prototype, "canListPreProvisionedItems", void 0), r([m()], U.prototype, "canProvisionDirectPurchase", void 0), r([m()], U.prototype, "canSearchPublic", void 0), r([m()], U.prototype, "canShareBingPublic", void 0), r([m()], U.prototype, "canSharePublic", void 0), r([m()], U.prototype, "canSignInArcGIS", void 0), r([m()], U.prototype, "canSignInIDP", void 0), r([m()], U.prototype, "colorSetsGroupQuery", void 0), r([m()], U.prototype, "commentsEnabled", void 0), r([m({ type: Date })], U.prototype, "created", void 0), r([m()], U.prototype, "credential", void 0), r([m()], U.prototype, "culture", void 0), r([m()], U.prototype, "currentVersion", void 0), r([m()], U.prototype, "customBaseUrl", void 0), r([m()], U.prototype, "default3DBasemapQuery", void 0), r([m()], U.prototype, "defaultBasemap", void 0), r([o2("defaultBasemap")], U.prototype, "readDefaultBasemap", null), r([m()], U.prototype, "defaultDevBasemap", void 0), r([o2("defaultDevBasemap")], U.prototype, "readDefaultDevBasemap", null), r([m({ type: w2 })], U.prototype, "defaultExtent", void 0), r([m()], U.prototype, "defaultVectorBasemap", void 0), r([o2("defaultVectorBasemap")], U.prototype, "readDefaultVectorBasemap", null), r([m()], U.prototype, "description", void 0), r([m()], U.prototype, "devBasemapGalleryGroupQuery", void 0), r([m()], U.prototype, "eueiEnabled", void 0), r([m({ readOnly: true })], U.prototype, "extraQuery", null), r([m()], U.prototype, "featuredGroups", void 0), r([m()], U.prototype, "featuredItemsGroupQuery", void 0), r([m()], U.prototype, "galleryTemplatesGroupQuery", void 0), r([m()], U.prototype, "layoutGroupQuery", void 0), r([m()], U.prototype, "livingAtlasGroupQuery", void 0), r([m({ readOnly: true })], U.prototype, "hasAPIKey", null), r([m()], U.prototype, "hasCategorySchema", void 0), r([m()], U.prototype, "hasClassificationSchema", void 0), r([m()], U.prototype, "helpBase", void 0), r([m()], U.prototype, "helperServices", void 0), r([m()], U.prototype, "helpMap", void 0), r([m()], U.prototype, "homePageFeaturedContent", void 0), r([m()], U.prototype, "homePageFeaturedContentCount", void 0), r([m()], U.prototype, "httpPort", void 0), r([m()], U.prototype, "httpsPort", void 0), r([m()], U.prototype, "id", void 0), r([m()], U.prototype, "ipCntryCode", void 0), r([m({ readOnly: true })], U.prototype, "isOrganization", null), r([m()], U.prototype, "isPortal", void 0), r([m()], U.prototype, "isReadOnly", void 0), r([m({ readOnly: true })], U.prototype, "itemPageUrl", null), r([m()], U.prototype, "layerTemplatesGroupQuery", void 0), r([m()], U.prototype, "maxTokenExpirationMinutes", void 0), r([m({ type: Date })], U.prototype, "modified", void 0), r([m()], U.prototype, "name", void 0), r([m()], U.prototype, "portalHostname", void 0), r([m()], U.prototype, "portalMode", void 0), r([m()], U.prototype, "portalProperties", void 0), r([m()], U.prototype, "region", void 0), r([m()], U.prototype, "recycleBinEnabled", void 0), r([m({ readOnly: true })], U.prototype, "restUrl", null), r([m()], U.prototype, "rotatorPanels", void 0), r([m()], U.prototype, "showHomePageDescription", void 0), r([m()], U.prototype, "sourceJSON", void 0), r([m()], U.prototype, "staticImagesUrl", void 0), r([m({ json: { name: "2DStylesGroupQuery" } })], U.prototype, "stylesGroupQuery2d", void 0), r([m({ json: { name: "stylesGroupQuery" } })], U.prototype, "stylesGroupQuery3d", void 0), r([m()], U.prototype, "supportsHostedServices", void 0), r([m()], U.prototype, "symbolSetsGroupQuery", void 0), r([m()], U.prototype, "templatesGroupQuery", void 0), r([m()], U.prototype, "thumbnail", void 0), r([m({ readOnly: true })], U.prototype, "thumbnailUrl", null), r([m()], U.prototype, "units", void 0), r([m()], U.prototype, "url", void 0), r([m()], U.prototype, "urlKey", void 0), r([o2("urlKey")], U.prototype, "readUrlKey", null), r([m()], U.prototype, "user", void 0), r([o2("user")], U.prototype, "readUser", null), r([m()], U.prototype, "use3dBasemaps", void 0), r([m()], U.prototype, "useDefault3dBasemap", void 0), r([m()], U.prototype, "useStandardizedQuery", void 0), r([m()], U.prototype, "useVectorBasemaps", void 0), r([m()], U.prototype, "vectorBasemapGalleryGroupQuery", void 0), U = _ = r([a2("esri.portal.Portal")], U);
var C = U;
var b = new FinalizationRegistry((e2) => {
  e2.remove();
});
function w3(e2) {
  const t2 = s4;
  return () => {
    const r3 = e2.deref();
    r3 && t2.findCredential(r3.restUrl) && r3.signIn().catch(() => {
    });
  };
}

export {
  c2 as c,
  p5 as p,
  C
};
//# sourceMappingURL=chunk-PAGKMWJH.js.map
