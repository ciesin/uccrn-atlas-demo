import {
  l as l2
} from "./chunk-FU3ZCHIF.js";
import {
  Cg,
  L,
  P as P4,
  d as d3,
  f as f2,
  g as g3,
  l,
  n
} from "./chunk-5AGXSIZF.js";
import "./chunk-H2PMLL3X.js";
import "./chunk-K24WU5UX.js";
import "./chunk-56GFF6UO.js";
import "./chunk-LH36NQSN.js";
import "./chunk-UMYFDXOJ.js";
import {
  A
} from "./chunk-6WVUJOLD.js";
import {
  e
} from "./chunk-2O2K2GAF.js";
import "./chunk-37HZDVD7.js";
import {
  p
} from "./chunk-LGG5FPVD.js";
import "./chunk-TOMXDOXB.js";
import "./chunk-VTPZW6H5.js";
import {
  t
} from "./chunk-DWXK7D3B.js";
import {
  y
} from "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S as S2
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import {
  P as P3
} from "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g as g2,
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  r as r2
} from "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  P,
  d as d2
} from "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2,
  d2 as d
} from "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
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

// node_modules/@arcgis/core/layers/support/PlaybackInfo.js
var s2 = class extends a2.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.framerate = null, this.containerFormat = null, this.gop = null, this.aspectRatio = null, this.klv = null;
  }
};
r([m({ type: String })], s2.prototype, "framerate", void 0), r([m({ type: String })], s2.prototype, "containerFormat", void 0), r([m({ type: Number })], s2.prototype, "gop", void 0), r([m({ type: String })], s2.prototype, "aspectRatio", void 0), r([m({ type: Object })], s2.prototype, "klv", void 0), s2 = r([a("esri.layers.support.PlaybackInfo")], s2);
var i = s2;

// node_modules/@arcgis/core/layers/support/VideoFrame.js
var l3 = class extends g {
  constructor() {
    super(...arguments), this.sourcePoint = null, this.mapPoint = null;
  }
};
function a3(o2) {
  return null != (o2 == null ? void 0 : o2.sourcePoint) && null != o2.mapPoint;
}
r([m()], l3.prototype, "sourcePoint", void 0), r([m({ type: j })], l3.prototype, "mapPoint", void 0), l3 = r([a("esri.layers.support.VideoFrame.ControlPoint")], l3);
var m2 = class extends a2.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.frame = null, this.controlPoints = null;
  }
  readControlPoints(o2) {
    return o2.map((o3) => ({ sourcePoint: { x: o3.frameX, y: o3.frameY }, mapPoint: new j(o3.point) }));
  }
  writeControlPoints(o2, r4) {
    null != o2 && a3(o2[0]) && (r4.controlPoints = o2.map((o3) => {
      const r5 = o3.sourcePoint, t2 = o3.mapPoint;
      return { frameX: r5.x, frameY: r5.y, point: t2.toJSON() };
    }));
  }
};
r([m({ type: String })], m2.prototype, "frame", void 0), r([m({ type: [l3], json: { write: { allowNull: false, isRequired: true } } })], m2.prototype, "controlPoints", void 0), r([o("controlPoints")], m2.prototype, "readControlPoints", null), r([r3("controlPoints")], m2.prototype, "writeControlPoints", null), m2 = r([a("esri.layers.support.VideoFrame")], m2);
var u = m2;

// node_modules/@arcgis/core/layers/VideoLayer.js
var w2 = class extends p(t(S2(e(f)))) {
  constructor(e2) {
    super(e2), this._trailPoints = [], this.capabilities = null, this.connectionInfo = null, this.controller = new Cg(), this.copyright = null, this.created = null, this.description = null, this.elevationSource = null, this.frame = null, this.frameCount = null, this.fullExtent = null, this.initialExtent = null, this.layerId = null, this.playbackInfo = null, this.posterUrl = null, this.qualities = null, this.serviceItemId = null, this.sourceJSON = null, this.sourceQuality = null, this.sourceType = null, this.spatialReference = g2.WGS84, this.telemetryDisplay = null, this.title = null, this.type = "video", this.url = null, this.videoLayersInfo = null, this.videoTimeExtent = null;
  }
  initialize() {
    this.telemetryDisplay = new l2({ frame: false, frameCenter: false, frameOutline: true, lineOfSight: true, sensorLocation: true, sensorTrail: true }), this.addHandles([d2(() => this.metadata, () => {
      this.notifyChange("telemetry"), this.notifyChange("groundControlPoints"), this.notifyChange("frameHorizonPoints");
    }), d2(() => {
      var _a;
      return (_a = this.telemetry) == null ? void 0 : _a.sensorLocation;
    }, (e2) => this._setSensorTrail(e2), P)]);
  }
  load(e2) {
    const t2 = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this._fetchService(t2)), Promise.resolve(this);
  }
  get buffered() {
    return this.controller.buffered;
  }
  readCapabilitiesFromService(e2, t2) {
    return A(t2);
  }
  readConnectionInfo(e2, t2) {
    const r4 = Object.values(t2.connectionUrl);
    return (r4 == null ? void 0 : r4.length) && (this.controller.playerUrl = r4[0]), t2.connectionUrl;
  }
  get currentTime() {
    return this.controller.currentTime;
  }
  get duration() {
    return this.controller.duration;
  }
  get ended() {
    return this.controller.ended;
  }
  get frameHorizonPoints() {
    return L(this.metadata);
  }
  get groundControlPoints() {
    return f2(this.metadata);
  }
  get loop() {
    return this.controller.loop;
  }
  set loop(e2) {
    this.controller.loop = e2;
  }
  get metadata() {
    var _a;
    return (_a = this.controller) == null ? void 0 : _a.currentMetadata;
  }
  get mimeType() {
    var _a;
    return (_a = this.controller) == null ? void 0 : _a.mimeType;
  }
  get muted() {
    return this.controller.muted;
  }
  set muted(e2) {
    this.controller.muted = e2;
  }
  get playbackRate() {
    return this.controller.rate;
  }
  set playbackRate(e2) {
    this.controller.rate = e2;
  }
  get playerUrl() {
    return this.controller.playerUrl;
  }
  get playing() {
    return this.controller.playing;
  }
  get state() {
    return this.controller.state;
  }
  get telemetry() {
    return g3(this.metadata);
  }
  get videoElement() {
    var _a;
    return (_a = this.controller) == null ? void 0 : _a.element;
  }
  get videoHeight() {
    var _a;
    return (_a = this.controller) == null ? void 0 : _a.videoHeight;
  }
  readLayerInfosFromService(e2, t2) {
    return P4(t2);
  }
  get videoWidth() {
    var _a;
    return (_a = this.controller) == null ? void 0 : _a.videoWidth;
  }
  get waiting() {
    return this.controller.waiting;
  }
  play() {
    this.controller.play();
  }
  pause() {
    this.controller.pause();
  }
  reset() {
    this.controller.reset();
  }
  setCurrentTime(e2) {
    if (!this.duration) return;
    const t2 = r2(e2, 0, this.duration);
    this.controller.setCurrentTime(t2);
  }
  toGround(e2, t2) {
    var _a, _b;
    return ((_b = (_a = this.controller) == null ? void 0 : _a.sensorModel) == null ? void 0 : _b.metadataSupportsTransforms) ? this.controller.sensorModel.transformImageToGeo(e2, t2) : null;
  }
  toVideo(e2) {
    var _a, _b;
    if (!((_b = (_a = this.controller) == null ? void 0 : _a.sensorModel) == null ? void 0 : _b.metadataSupportsTransforms)) return null;
    const t2 = this.controller.sensorModel.transformGeoToImage(e2.x, e2.y, e2.z);
    return { x: t2[0], y: t2[1] };
  }
  async _fetchService(e2) {
    var _a, _b;
    if (this.sourceJSON) return void this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
    const o2 = d((_a = this.parsedUrl) == null ? void 0 : _a.path);
    if (null == o2) throw new s("arcgis-layers:url-mismatch", "The url is not a valid arcgis resource");
    let i2 = null;
    const { data: l4, ssl: s3 } = await P2(o2.url.path, { query: { f: "json", ...this.parsedUrl.query, ...this.customParameters }, signal: e2 }), n2 = l4;
    if (this.url = o2.url.path, s3 && (this.url = this.url.replace(/^http:/i, "https:")), !(n2 == null ? void 0 : n2.currentVersion)) return n2.currentVersion = "11.2", this.sourceJSON = n2, void this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
    let a4 = o2 == null ? void 0 : o2.sublayer;
    if (null == a4 && ((_b = n2.layers) == null ? void 0 : _b.length) && (a4 = n2.layers[0].id), null == a4) throw new s("arcgis-layers:url-mismatch", "The url is not a valid arcgis resource");
    this.url = `${o2.url.path}/${a4}`, i2 = await P2(this.url, { query: { f: "json", ...this.customParameters }, signal: e2 });
    const p2 = { ...n2, ...i2.data };
    this.sourceJSON = p2, this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
  }
  _setSensorTrail(e2) {
    if (!e2) return;
    const t2 = d3(e2, this._trailPoints);
    this._trailPoints = [...t2];
    const r4 = this._trailPoints.map((e3) => e3.toArray()), o2 = new P3({ hasZ: e2.hasZ, paths: [r4] });
    this.telemetry.sensorTrail = o2.clone();
  }
};
r([m({ readOnly: true })], w2.prototype, "buffered", null), r([m({ readOnly: true, json: { read: false } })], w2.prototype, "capabilities", void 0), r([o("service", "capabilities", ["supportsAppend", "supportsCoverageQuery", "supportsExportClip", "supportsExportFrameset", "supportsMensuration", "supportsUpdate"])], w2.prototype, "readCapabilitiesFromService", null), r([m({ readOnly: true })], w2.prototype, "connectionInfo", void 0), r([o("connectionInfo", ["connectionUrl"])], w2.prototype, "readConnectionInfo", null), r([m()], w2.prototype, "controller", void 0), r([m({ type: String })], w2.prototype, "copyright", void 0), r([m({ readOnly: true, type: Date })], w2.prototype, "created", void 0), r([m({ type: Number })], w2.prototype, "currentTime", null), r([m({ type: String })], w2.prototype, "description", void 0), r([m({ type: Number })], w2.prototype, "duration", null), r([m({ readOnly: true })], w2.prototype, "elevationSource", void 0), r([m({ type: Boolean })], w2.prototype, "ended", null), r([m({ type: u })], w2.prototype, "frame", void 0), r([m({ readOnly: true, type: Number })], w2.prototype, "frameCount", void 0), r([m({ type: w })], w2.prototype, "fullExtent", void 0), r([m({ readOnly: true })], w2.prototype, "frameHorizonPoints", null), r([m({ readOnly: true })], w2.prototype, "groundControlPoints", null), r([m({ type: w })], w2.prototype, "initialExtent", void 0), r([m({ readOnly: true, json: { read: { source: "id" } } })], w2.prototype, "layerId", void 0), r([m({ type: Boolean })], w2.prototype, "loop", null), r([m({ readOnly: true })], w2.prototype, "metadata", null), r([m({ readOnly: true })], w2.prototype, "mimeType", null), r([m({ type: Boolean })], w2.prototype, "muted", null), r([m({ type: i })], w2.prototype, "playbackInfo", void 0), r([m({ type: Number })], w2.prototype, "playbackRate", null), r([m({ type: String })], w2.prototype, "playerUrl", null), r([m({ readOnly: true })], w2.prototype, "playing", null), r([m({ readOnly: true, json: { read: { source: "poster" } } })], w2.prototype, "posterUrl", void 0), r([m({ readOnly: true })], w2.prototype, "qualities", void 0), r([m({ readOnly: true })], w2.prototype, "serviceItemId", void 0), r([m()], w2.prototype, "sourceJSON", void 0), r([m({ readOnly: true })], w2.prototype, "sourceQuality", void 0), r([m({ readOnly: true, json: { name: "serviceType" } })], w2.prototype, "sourceType", void 0), r([m()], w2.prototype, "spatialReference", void 0), r([m({ readOnly: true, type: String })], w2.prototype, "state", null), r([m({ readOnly: true, type: n })], w2.prototype, "telemetry", null), r([m({ type: l2 })], w2.prototype, "telemetryDisplay", void 0), r([m({ readOnly: false, json: { read: { source: "name" } } })], w2.prototype, "title", void 0), r([m({ readOnly: true })], w2.prototype, "type", void 0), r([m(y)], w2.prototype, "url", void 0), r([m({ readOnly: true })], w2.prototype, "videoElement", null), r([m({ readOnly: true })], w2.prototype, "videoHeight", null), r([m({ readOnly: true, json: { read: false } })], w2.prototype, "videoLayersInfo", void 0), r([o("service", "videoLayersInfo", ["id", "name", "poster", "serviceType", "type"])], w2.prototype, "readLayerInfosFromService", null), r([m({ readOnly: true, nonNullable: false, json: { read: { reader: l, source: "time" } } })], w2.prototype, "videoTimeExtent", void 0), r([m({ readOnly: true })], w2.prototype, "videoWidth", null), r([m({ readOnly: true })], w2.prototype, "waiting", null), w2 = r([a("esri.layers.VideoLayer")], w2);
var E = w2;
export {
  E as default
};
//# sourceMappingURL=VideoLayer-5APJDOCW.js.map
