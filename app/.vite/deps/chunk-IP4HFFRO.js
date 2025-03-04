import {
  C
} from "./chunk-PAGKMWJH.js";
import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
import {
  n as n2
} from "./chunk-7AOPU62X.js";
import {
  R
} from "./chunk-UFBX3XSC.js";
import {
  G,
  Y,
  _,
  tt
} from "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  h
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  l,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/portal/PortalItemResource.js
var c = class extends g {
  constructor(t) {
    super(t), this.portalItem = null;
  }
  normalizeCtorArgs(t) {
    return (t == null ? void 0 : t.portalItem) && t.path ? { ...t, path: n3(t.path, t.portalItem) } : t;
  }
  set path(t) {
    null != t && Y(t) ? n.getLogger(this).error("portalitemresource:invalid-path", "A portal item resource path must be relative") : this._set("path", t);
  }
  _castPath(t) {
    return n3(t, this.portalItem);
  }
  get url() {
    return this.portalItem && this.path ? `${this.portalItem.itemUrl}/resources/${this.path}` : null;
  }
  get cdnUrl() {
    return this.portalItem && this.path ? `${this.portalItem.itemCdnUrl}/resources/${this.path}` : null;
  }
  get itemRelativeUrl() {
    return this.portalItem && this.path ? `./resources/${this.path}` : null;
  }
  fetch(t = "json", r2) {
    const o2 = this.cdnUrl;
    if (null == o2) throw new s("portal-item-resource:fetch", "Portal item resource does not refer to a valid item or path");
    return this.portalItem.portal.request(o2, { responseType: t, query: { token: this.portalItem.apiKey, _ts: (r2 == null ? void 0 : r2.cacheBust) ? Date.now() : null }, signal: r2 == null ? void 0 : r2.signal });
  }
  async update(t, r2) {
    const { addOrUpdateResources: e2 } = await import("./resourceUtils-SI6ZGLNU.js");
    return await e2(this.portalItem, [{ resource: this, content: t, compress: r2 == null ? void 0 : r2.compress, access: r2 == null ? void 0 : r2.access }], "update", r2), this;
  }
  hasPath() {
    return null != this.path;
  }
};
function n3(t, r2) {
  return null == t ? t : (t = t.replace(/^\/+/, ""), null != r2 && Y(t) && (t = G(t, r2.itemUrl)), t == null ? void 0 : t.replace(/^\/+/, "").replace(/^(\.\/)?resources\//, ""));
}
r([m()], c.prototype, "portalItem", void 0), r([m({ type: String, value: null })], c.prototype, "path", null), r([s2("path")], c.prototype, "_castPath", null), r([m({ type: String, readOnly: true })], c.prototype, "url", null), r([m({ type: String, readOnly: true })], c.prototype, "cdnUrl", null), r([m({ type: String, readOnly: true })], c.prototype, "itemRelativeUrl", null), c = r([a2("esri.portal.PortalItemResource")], c);
var u = c;

// node_modules/@arcgis/core/portal/PortalRating.js
var e = class extends g {
  constructor(r2) {
    super(r2), this.created = null, this.rating = null;
  }
};
r([m({ type: Date })], e.prototype, "created", void 0), r([m()], e.prototype, "rating", void 0), e = r([a2("esri.portal.PortalRating")], e);
var c2 = e;

// node_modules/@arcgis/core/portal/PortalItem.js
var v;
var f = /* @__PURE__ */ new Set(["3DTiles Service", "CSV", "Feature Collection", "Feature Service", "Feed", "GeoJson", "Group Layer", "Image Service", "KML", "Map Service", "Media Layer", "Scene Service", "Stream Service", "Vector Tile Service", "WFS", "WMS", "WMTS"]);
var b = /* @__PURE__ */ new Set(["KML", "GeoJson", "CSV"]);
var k = v = class extends S.JSONSupportMixin(m2) {
  static from(e2) {
    return h(v, e2);
  }
  constructor(e2) {
    super(e2), this.access = null, this.accessInformation = null, this.apiKey = null, this.applicationProxies = null, this.avgRating = null, this.categories = null, this.classification = null, this.created = null, this.culture = null, this.description = null, this.extent = null, this.groupCategories = null, this.id = null, this.isOrgItem = false, this.itemControl = null, this.licenseInfo = null, this.modified = null, this.name = null, this.numComments = null, this.numRatings = null, this.numViews = null, this.owner = null, this.ownerFolder = null, this.portal = null, this.screenshots = null, this.size = null, this.snippet = null, this.sourceJSON = null, this.sourceUrl = null, this.spatialReference = null, this.tags = null, this.title = null, this.type = null, this.typeKeywords = null, this.url = null;
  }
  destroy() {
    this.portal = null;
  }
  get displayName() {
    const e2 = this.type, t = this.typeKeywords || [];
    let i = e2;
    return "Feature Service" === e2 || "Feature Collection" === e2 ? i = t.includes("Table") ? "Table" : t.includes("Route Layer") ? "Route Layer" : t.includes("Markup") ? "Markup" : "Feature Layer" : "Image Service" === e2 ? i = t.includes("Elevation 3D Layer") ? "Elevation Layer" : t.includes("Tiled Imagery") ? "Tiled Imagery Layer" : "Imagery Layer" : "Scene Service" === e2 ? i = "Scene Layer" : "Video Service" === e2 ? i = "Video Layer" : "Scene Package" === e2 ? i = "Scene Layer Package" : "Stream Service" === e2 ? i = "Feature Layer" : "Geoprocessing Service" === e2 ? i = t.includes("Web Tool") ? "Tool" : "Geoprocessing Service" : "Geoenrichment Service" === e2 ? i = "GeoEnrichment Service" : "Geocoding Service" === e2 ? i = "Locator" : "Microsoft Powerpoint" === e2 ? i = "Microsoft PowerPoint" : "GeoJson" === e2 ? i = "GeoJSON" : "Globe Service" === e2 ? i = "Globe Layer" : "Vector Tile Service" === e2 ? i = "Tile Layer" : "netCDF" === e2 ? i = "NetCDF" : "Map Service" === e2 ? i = t.includes("Spatiotemporal") || !t.includes("Hosted Service") && !t.includes("Tiled") || t.includes("Relational") ? "Map Image Layer" : "Tile Layer" : (e2 == null ? void 0 : e2.toLowerCase().includes("add in")) ? i = e2.replaceAll(/(add in)/gi, "Add-In") : "datastore catalog service" === e2 ? i = "Big Data File Share" : "Compact Tile Package" === e2 ? i = "Tile Package (tpkx)" : "Raster function template" === e2 ? i = "Raster Function Template" : "OGCFeatureServer" === e2 ? i = "OGC Feature Layer" : "web mapping application" === e2 && t.includes("configurableApp") ? i = "Instant App" : "Insights Page" === e2 ? i = "Insights Report" : "Excalibur Imagery Project" === e2 ? i = "Excalibur Project" : "3DTiles Service" === e2 ? i = "3D tiles layer" : "3DTiles Package" === e2 && (i = "3D tiles package"), i;
  }
  readExtent(e2) {
    return e2 && e2.length ? new w(e2[0][0], e2[0][1], e2[1][0], e2[1][1]) : null;
  }
  get iconUrl() {
    var _a;
    const e2 = ((_a = this.type) == null ? void 0 : _a.toLowerCase()) || "", i = this.typeKeywords || [], r2 = "esri/images/portal/", o2 = "16";
    let s3, a3 = false, n4 = false, l2 = false, p = false, c3 = false, d = false, u2 = false, m3 = false;
    return e2.indexOf("service") > 0 || "feature collection" === e2 || "kml" === e2 || "wms" === e2 || "wmts" === e2 || "wfs" === e2 ? (a3 = i.includes("Hosted Service"), "feature service" === e2 || "feature collection" === e2 || "kml" === e2 || "wfs" === e2 ? (n4 = i.includes("Table"), l2 = i.includes("Route Layer"), p = i.includes("Markup"), c3 = i.includes("Spatiotemporal"), d = i.includes("UtilityNetwork"), s3 = c3 && n4 ? "spatiotemporaltable" : n4 ? "table" : l2 ? "routelayer" : p ? "markup" : c3 ? "spatiotemporal" : d ? "utilitynetwork" : a3 ? "featureshosted" : "features") : "map service" === e2 || "wms" === e2 || "wmts" === e2 ? (c3 = i.includes("Spatiotemporal"), u2 = i.includes("Relational"), s3 = c3 || u2 ? "mapimages" : a3 || i.includes("Tiled") || "wmts" === e2 ? "maptiles" : "mapimages") : s3 = "scene service" === e2 ? i.includes("Line") ? "sceneweblayerline" : i.includes("3DObject") ? "sceneweblayermultipatch" : i.includes("Point") ? "sceneweblayerpoint" : i.includes("IntegratedMesh") ? "sceneweblayermesh" : i.includes("PointCloud") ? "sceneweblayerpointcloud" : i.includes("Polygon") ? "sceneweblayerpolygon" : i.includes("Building") ? "sceneweblayerbuilding" : i.includes("Voxel") ? "sceneweblayervoxel" : "sceneweblayer" : "image service" === e2 ? i.includes("Elevation 3D Layer") ? "elevationlayer" : i.includes("Tiled Imagery") ? "tiledimagerylayer" : "imagery" : "stream service" === e2 ? "streamlayer" : "vector tile service" === e2 ? "vectortile" : "datastore catalog service" === e2 ? "datastorecollection" : "geocoding service" === e2 ? "geocodeservice" : "video service" === e2 ? i.includes("Live Stream") ? "livestreamvideolayer" : "videolayer" : "geoprocessing service" === e2 ? i.includes("Web Tool") ? "tool" : "layers" : "geodata service" === e2 ? "geodataservice" : "3dtiles service" === e2 ? i.includes("3DObject") ? "3dobjecttileslayer" : i.includes("IntegratedMesh") ? "integratedmeshtileslayer" : "3dtileslayer" : "layers") : "web map" === e2 || "cityengine web scene" === e2 ? s3 = "maps" : "web scene" === e2 ? s3 = i.includes("ViewingMode-Local") ? "webscenelocal" : "websceneglobal" : "web mapping application" === e2 && i.includes("configurableApp") ? s3 = "instantapps" : "web mapping application" === e2 || "mobile application" === e2 || "application" === e2 || "operation view" === e2 || "desktop application" === e2 ? s3 = "apps" : "map document" === e2 || "map package" === e2 || "published map" === e2 || "scene document" === e2 || "globe document" === e2 || "basemap package" === e2 || "mobile basemap package" === e2 || "mobile map package" === e2 || "project package" === e2 || "project template" === e2 || "pro map" === e2 || "layout" === e2 || "layer" === e2 && i.includes("ArcGIS Pro") || "explorer map" === e2 && i.indexOf("Explorer Document") ? s3 = "mapsgray" : "service definition" === e2 || "shapefile" === e2 || "cad drawing" === e2 || "geojson" === e2 || "netcdf" === e2 || "administrative report" === e2 ? s3 = "datafiles" : "360 vr experience" === e2 ? s3 = "360vr" : "explorer add in" === e2 || "desktop add in" === e2 || "windows viewer add in" === e2 || "windows viewer configuration" === e2 ? s3 = "appsgray" : "arcgis pro add in" === e2 || "arcgis pro configuration" === e2 ? s3 = "addindesktop" : "pdf" === e2 ? s3 = "pdf" : "microsoft word" === e2 ? s3 = "word" : "microsoft excel" === e2 ? s3 = "excel" : "microsoft powerpoint" === e2 ? s3 = "ppt" : "rule package" === e2 || "file geodatabase" === e2 || "sqlite geodatabase" === e2 || "csv collection" === e2 || "kml collection" === e2 || "windows mobile package" === e2 || "map template" === e2 || "desktop application template" === e2 || "gml" === e2 || "arcpad package" === e2 || "code sample" === e2 || "document link" === e2 || "earth configuration" === e2 || "operations dashboard add in" === e2 || "rules package" === e2 || "workflow manager package" === e2 || "explorer map" === e2 && i.includes("Explorer Mapping Application") || i.includes("Document") ? s3 = "datafilesgray" : "network analysis service" === e2 || "geoprocessing service" === e2 || "geodata service" === e2 || "geometry service" === e2 || "geoprocessing package" === e2 || "locator package" === e2 || "geoprocessing sample" === e2 || "workflow manager service" === e2 ? s3 = "toolsgray" : "layer" === e2 || "layer package" === e2 || "explorer layer" === e2 ? s3 = "layersgray" : "analysis model" === e2 ? s3 = "analysismodel" : "scene package" === e2 ? s3 = "scenepackage" : "3dtiles package" === e2 ? s3 = "3dtileslayerpackage" : "3dtiles service" === e2 ? s3 = "3dtileslayer" : "mobile scene package" === e2 ? s3 = "mobilescenepackage" : "tile package" === e2 || "compact tile package" === e2 ? s3 = "tilepackage" : "task file" === e2 ? s3 = "taskfile" : "report template" === e2 ? s3 = "report-template" : "statistical data collection" === e2 ? s3 = "statisticaldatacollection" : "insights workbook" === e2 ? s3 = "workbook" : "insights model" === e2 ? s3 = "insightsmodel" : "insights page" === e2 ? s3 = "insightspage" : "insights theme" === e2 ? s3 = "insightstheme" : "hub initiative" === e2 ? s3 = "hubinitiative" : "hub page" === e2 ? s3 = "hubpage" : "hub site application" === e2 ? s3 = "hubsite" : "hub event" === e2 ? s3 = "hubevent" : "hub project" === e2 ? s3 = "hubproject" : "relational database connection" === e2 ? s3 = "relationaldatabaseconnection" : "big data file share" === e2 ? s3 = "datastorecollection" : "image collection" === e2 ? s3 = "imagecollection" : "desktop style" === e2 ? s3 = "desktopstyle" : "style" === e2 ? s3 = i.includes("Dictionary") ? "dictionarystyle" : "style" : "dashboard" === e2 ? s3 = "dashboard" : "raster function template" === e2 ? s3 = "rasterprocessingtemplate" : "vector tile package" === e2 ? s3 = "vectortilepackage" : "ortho mapping project" === e2 ? s3 = "orthomappingproject" : "ortho mapping template" === e2 ? s3 = "orthomappingtemplate" : "solution" === e2 ? s3 = "solutions" : "geopackage" === e2 ? s3 = "geopackage" : "deep learning package" === e2 ? s3 = "deeplearningpackage" : "real time analytic" === e2 ? s3 = "realtimeanalytics" : "reality mapping project" === e2 ? s3 = "realitymappingproject" : "big data analytic" === e2 ? s3 = "bigdataanalytics" : "feed" === e2 ? s3 = "feed" : "excalibur imagery project" === e2 ? s3 = "excaliburimageryproject" : "notebook" === e2 ? s3 = "notebook" : "storymap" === e2 ? s3 = "storymap" : "survey123 add in" === e2 ? s3 = "survey123addin" : "mission" === e2 ? s3 = "mission" : "mission report" === e2 ? s3 = "missionreport" : "mission template" === e2 ? s3 = "missiontemplate" : "quickcapture project" === e2 ? s3 = "quickcaptureproject" : "pro report" === e2 ? s3 = "proreport" : "pro report template" === e2 ? s3 = "proreporttemplate" : "urban model" === e2 ? s3 = "urbanmodel" : "urban project" === e2 ? s3 = "urbanproject" : "web experience" === e2 ? s3 = "experiencebuilder" : "web experience template" === e2 ? s3 = "webexperiencetemplate" : "experience builder widget" === e2 ? s3 = "experiencebuilderwidget" : "experience builder widget package" === e2 ? s3 = "experiencebuilderwidgetpackage" : "workflow" === e2 ? s3 = "workflow" : "kernel gateway connection" === e2 ? s3 = "kernelgatewayconnection" : "insights script" === e2 ? s3 = "insightsscript" : "hub initiative template" === e2 ? s3 = "hubinitiativetemplate" : "storymap theme" === e2 ? s3 = "storymaptheme" : "knowledge graph" === e2 ? s3 = "knowledgegraph" : "knowledge graph layer" === e2 ? s3 = "knowledgegraphlayer" : "knowledge studio project" === e2 ? s3 = "knowledgestudio" : "native application" === e2 ? s3 = "nativeapp" : "native application installer" === e2 ? s3 = "nativeappinstaller" : "web link chart" === e2 ? s3 = "linkchart" : "knowledge graph web investigation" === e2 ? s3 = "investigation" : "ogcfeatureserver" === e2 ? s3 = "features" : "pro presentation" === e2 ? s3 = "propresentation" : "pro project" === e2 ? s3 = "proproject" : "insights workbook package" === e2 ? s3 = "insightsworkbookpackage" : "apache parquet" === e2 ? s3 = "apacheparquet" : "notebook code snippet library" === e2 ? s3 = "notebookcodesnippets" : "suitability model" === e2 ? s3 = "suitabilitymodel" : "esri classifier definition" === e2 ? s3 = "classifierdefinition" : "esri classification schema" === e2 ? s3 = "classificationschema" : "insights data engineering workbook" === e2 ? s3 = "dataengineeringworkbook" : "insights data engineering model" === e2 ? s3 = "dataengineeringmodel" : "deep learning studio project" === e2 ? s3 = "deeplearningproject" : "discussion" === e2 ? s3 = "discussion" : "allsource project" === e2 ? s3 = "allsourceproject" : "api key" === e2 ? s3 = "apikey" : "data pipeline" === e2 ? s3 = "datapipelines" : "group layer" === e2 ? (m3 = i.includes("Map"), s3 = m3 ? "layergroup2d" : "layergroup") : s3 = "media layer" === e2 ? "onlinemedialayer" : "form" === e2 ? i.includes("Survey123") ? "survey" : "datafilesgray" : "csv" === e2 ? "csv" : "image" === e2 ? "image" : "maps", s3 ? n2(r2 + s3 + o2 + ".png") : null;
  }
  get isLayer() {
    return null != this.type && f.has(this.type);
  }
  get itemCdnUrl() {
    return R(this.itemUrl);
  }
  get itemPageUrl() {
    var _a;
    const e2 = (_a = this.portal) == null ? void 0 : _a.itemPageUrl;
    return e2 && this.id ? `${e2}?id=${this.id}` : null;
  }
  get itemUrl() {
    var _a;
    const e2 = (_a = this.portal) == null ? void 0 : _a.restUrl;
    return e2 && this.id ? `${e2}/content/items/${this.id}` : null;
  }
  get thumbnailUrl() {
    var _a;
    const e2 = this.itemUrl, t = this.thumbnail;
    return e2 && t ? ((_a = this.portal) == null ? void 0 : _a.normalizeUrl(`${e2}/info/${t}?f=json`)) ?? null : null;
  }
  get userItemUrl() {
    var _a, _b, _c;
    const e2 = (_a = this.portal) == null ? void 0 : _a.restUrl;
    if (!e2) return null;
    const t = this.owner || ((_c = (_b = this.portal) == null ? void 0 : _b.user) == null ? void 0 : _c.username);
    if (!t) return null;
    return `${e2}/content/users/${this.ownerFolder ? `${t}/${this.ownerFolder}` : t}/items/${this.id}`;
  }
  load(e2) {
    const t = this.portal ?? (this.portal = C.getDefault()), i = t.load(e2).then(() => this.sourceJSON ? this.sourceJSON : this.id && this.itemUrl ? t.request(this.itemUrl, { signal: null != e2 ? e2.signal : null, query: { token: this.apiKey } }) : {}).then((e3) => {
      this.sourceJSON = e3, this.read(e3);
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  async addRating(e2) {
    const t = { method: "post", query: {} }, i = e2 instanceof c2 ? e2.rating : e2;
    return null == i || isNaN(i) || "number" != typeof e2 || (t.query.rating = i), this.portal ? (await this.portal.request(this.itemUrl + "/addRating", t), new c2({ rating: i, created: /* @__PURE__ */ new Date() })) : null;
  }
  clone() {
    const e2 = { access: this.access, accessInformation: this.accessInformation, applicationProxies: a(this.applicationProxies), avgRating: this.avgRating, categories: a(this.categories), classification: a(this.classification), created: a(this.created), culture: this.culture, description: this.description, extent: a(this.extent), groupCategories: a(this.groupCategories), id: this.id, itemControl: this.itemControl, licenseInfo: this.licenseInfo, modified: a(this.modified), name: this.name, numComments: this.numComments, numRatings: this.numRatings, numViews: this.numViews, owner: this.owner, ownerFolder: this.ownerFolder, portal: this.portal, screenshots: a(this.screenshots), size: this.size, snippet: this.snippet, sourceUrl: this.sourceUrl, spatialReference: this.spatialReference, tags: a(this.tags), thumbnail: this.thumbnail, title: this.title, type: this.type, typeKeywords: a(this.typeKeywords), url: this.url };
    this.loaded && (e2.loadStatus = "loaded");
    const t = new v({ sourceJSON: this.sourceJSON }).set(e2);
    return t._set("isOrgItem", this.isOrgItem), t;
  }
  createPostQuery() {
    var _a;
    const e2 = this.toJSON();
    for (const t of ["tags", "typeKeywords", "categories"]) e2[t] = (_a = e2[t]) == null ? void 0 : _a.join(", ");
    for (const t of ["extent", "classification"]) {
      const i = e2[t];
      i && (e2[t] = JSON.stringify(i));
    }
    return e2;
  }
  async deleteRating() {
    await this.portal.request(this.itemUrl + "/deleteRating", { method: "post" });
  }
  fetchData(e2 = "json", t) {
    return this.portal.request(this.itemUrl + "/data", { responseType: e2, ...t, query: { token: this.apiKey } });
  }
  async fetchRating(e2) {
    const t = await this.portal.request(this.itemUrl + "/rating", { query: { token: this.apiKey }, ...e2 });
    return null != t.rating ? (t.created = new Date(t.created), new c2(t)) : null;
  }
  fetchRelatedItems(e2, t) {
    return this.portal.requestToTypedArray(this.itemUrl + "/relatedItems", { query: { ...e2, token: this.apiKey }, ...t }, v);
  }
  getThumbnailUrl(e2) {
    let t = this.thumbnailUrl;
    return t && e2 && (t += `&w=${e2}`), t;
  }
  reload() {
    return this.portal.request(this.itemUrl ?? "", { cacheBust: true, query: { token: this.apiKey } }).then((e2) => (this.applicationProxies && !Object.hasOwn(e2, "appProxies") && (this.applicationProxies = null), this.sourceJSON = e2, this.read(e2), this));
  }
  update(e2) {
    return this.id ? this.load().then(() => this.portal.signIn()).then(() => {
      const t = e2 == null ? void 0 : e2.data, i = { method: "post" };
      i.query = this.createPostQuery();
      for (const e3 in i.query) null === i.query[e3] && (i.query[e3] = "");
      return i.query.clearEmptyFields = true, null != t && ("string" == typeof t ? i.query.text = t : "object" == typeof t && (i.query.text = JSON.stringify(t))), this.portal.request(`${this.userItemUrl}/update`, i).then(() => this.reload());
    }) : Promise.reject(new s("portal:item-does-not-exist", "The item does not exist yet and cannot be updated"));
  }
  async copy(e2) {
    if (!this.id) throw new s("portal:item-does-not-exist", "The item does not exist yet");
    await this.load();
    const { portal: t, itemUrl: r2 } = this;
    await t.signIn();
    const { copyResources: o2, folder: s3, tags: a3, title: n4 } = e2 || {}, l2 = { method: "post", query: { copyPrivateResources: "all" === o2, folder: "string" == typeof s3 ? s3 : s3 == null ? void 0 : s3.id, includeResources: !!o2, tags: a3 == null ? void 0 : a3.join(","), title: n4 } }, { itemId: p } = await t.request(`${r2}/copy`, l2);
    return new v({ id: p, portal: t });
  }
  updateThumbnail(e2) {
    return this.id ? this.load().then(() => this.portal.signIn()).then(() => {
      const t = e2.thumbnail, i = e2.filename, r2 = { method: "post" };
      if ("string" == typeof t) tt(t) ? r2.query = { data: t } : r2.query = { url: _(t) }, null != i && (r2.query.filename = i);
      else {
        const e3 = new FormData();
        null != i ? e3.append("file", t, i) : e3.append("file", t), r2.body = e3;
      }
      return this.portal.request(`${this.userItemUrl}/updateThumbnail`, r2).then(() => this.reload());
    }) : Promise.reject(new s("portal:item-does-not-exist", "The item does not exist yet and cannot be updated"));
  }
  async fetchResources(e2 = {}, t) {
    const { fetchResources: i } = await import("./resourceUtils-SI6ZGLNU.js");
    return i(this, e2, t);
  }
  async addResource(e2, t, i) {
    const { addOrUpdateResources: r2 } = await import("./resourceUtils-SI6ZGLNU.js");
    return e2.portalItem = this, await r2(this, [{ resource: e2, content: t, compress: i == null ? void 0 : i.compress, access: i == null ? void 0 : i.access }], "add", i), e2;
  }
  async removeResource(e2, t) {
    const { removeResource: r2 } = await import("./resourceUtils-SI6ZGLNU.js");
    if (e2.portalItem && e2.portalItem.itemUrl !== this.itemUrl) throw new s("removeresource:portal-item-mismatch", "The portal item associated with the provided resource does not match the item");
    return r2(this, e2, t);
  }
  async removeAllResources(e2) {
    const { removeAllResources: t } = await import("./resourceUtils-SI6ZGLNU.js");
    return t(this, e2);
  }
  resourceFromPath(e2) {
    return new u({ portalItem: this, path: e2 });
  }
  toJSON() {
    var _a, _b;
    const e2 = this.extent, t = { accessInformation: this.accessInformation, categories: a(this.categories), classification: a(this.classification), created: (_a = this.created) == null ? void 0 : _a.getTime(), description: this.description, extent: e2 && [[e2.xmin, e2.ymin], [e2.xmax, e2.ymax]], id: this.id, isOrgItem: this.isOrgItem, licenseInfo: this.licenseInfo, modified: (_b = this.modified) == null ? void 0 : _b.getTime(), name: this.name, owner: this.owner, ownerFolder: this.ownerFolder, snippet: this.snippet, sourceUrl: this.sourceUrl, spatialReference: this.spatialReference, tags: a(this.tags), thumbnail: this.thumbnail, title: this.title, type: this.type, typeKeywords: a(this.typeKeywords), url: this.url };
    return l(t);
  }
  static fromJSON(e2) {
    if (!e2) return null;
    if (e2.declaredClass) throw new Error("JSON object is already hydrated");
    return new v({ sourceJSON: e2 });
  }
  _getPostQuery() {
    const e2 = this.toJSON();
    for (const t in e2) "tags" === t && null !== e2[t] && (e2[t] = e2[t].join(", ")), "typeKeywords" === t && null !== e2[t] && (e2[t] = e2[t].join(", ")), "extent" === t && e2[t] && (e2[t] = JSON.stringify(e2[t]));
    return e2;
  }
};
r([m({ type: ["private", "shared", "org", "public"] })], k.prototype, "access", void 0), r([m()], k.prototype, "accessInformation", void 0), r([m({ type: String })], k.prototype, "apiKey", void 0), r([m({ json: { read: { source: "appProxies" } } })], k.prototype, "applicationProxies", void 0), r([m()], k.prototype, "avgRating", void 0), r([m()], k.prototype, "categories", void 0), r([m()], k.prototype, "classification", void 0), r([m({ type: Date })], k.prototype, "created", void 0), r([m()], k.prototype, "culture", void 0), r([m()], k.prototype, "description", void 0), r([m({ readOnly: true })], k.prototype, "displayName", null), r([m({ type: w })], k.prototype, "extent", void 0), r([o("extent")], k.prototype, "readExtent", null), r([m()], k.prototype, "groupCategories", void 0), r([m({ readOnly: true })], k.prototype, "iconUrl", null), r([m()], k.prototype, "id", void 0), r([m({ readOnly: true })], k.prototype, "isLayer", null), r([m({ type: Boolean, readOnly: true })], k.prototype, "isOrgItem", void 0), r([m()], k.prototype, "itemControl", void 0), r([m({ readOnly: true })], k.prototype, "itemPageUrl", null), r([m({ readOnly: true })], k.prototype, "itemUrl", null), r([m()], k.prototype, "licenseInfo", void 0), r([m({ type: Date })], k.prototype, "modified", void 0), r([m()], k.prototype, "name", void 0), r([m()], k.prototype, "numComments", void 0), r([m()], k.prototype, "numRatings", void 0), r([m()], k.prototype, "numViews", void 0), r([m()], k.prototype, "owner", void 0), r([m()], k.prototype, "ownerFolder", void 0), r([m({ type: C })], k.prototype, "portal", void 0), r([m()], k.prototype, "screenshots", void 0), r([m()], k.prototype, "size", void 0), r([m()], k.prototype, "snippet", void 0), r([m()], k.prototype, "sourceJSON", void 0), r([m({ type: String })], k.prototype, "sourceUrl", void 0), r([m({ type: String })], k.prototype, "spatialReference", void 0), r([m()], k.prototype, "tags", void 0), r([m()], k.prototype, "thumbnail", void 0), r([m({ readOnly: true })], k.prototype, "thumbnailUrl", null), r([m()], k.prototype, "title", void 0), r([m()], k.prototype, "type", void 0), r([m()], k.prototype, "typeKeywords", void 0), r([m({ type: String, json: { read(e2, t) {
  var _a;
  if (b.has(t.type)) {
    const t2 = (_a = this.portal) == null ? void 0 : _a.restUrl;
    e2 || (e2 = t2 && this.id ? `${t2}/content/items/${this.id}/data` : null);
  }
  return e2;
} } })], k.prototype, "url", void 0), r([m({ readOnly: true })], k.prototype, "userItemUrl", null), k = v = r([a2("esri.portal.PortalItem")], k);
var S2 = k;

export {
  S2 as S
};
//# sourceMappingURL=chunk-IP4HFFRO.js.map
