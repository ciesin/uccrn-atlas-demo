import {
  m as m2
} from "./chunk-WR4Z7HZ2.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  n as n2
} from "./chunk-SWBNCJYN.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
import {
  dt,
  tt
} from "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  _,
  a3 as a2,
  w,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/webdoc/support/SlideThumbnail.js
var p2;
var u = p2 = class extends S {
  constructor() {
    super(...arguments), this.url = "";
  }
  destroy() {
    this.url = "";
  }
  get isSecureUrl() {
    return dt(this.url);
  }
  get isDataURI() {
    return tt(this.url);
  }
  clone() {
    return new p2({ url: this.url });
  }
};
r([m({ type: String, json: { write: { isRequired: true } } })], u.prototype, "url", void 0), r([m()], u.prototype, "isSecureUrl", null), r([m()], u.prototype, "isDataURI", null), u = p2 = r([a2("esri.webdoc.support.SlideThumbnail")], u);

// node_modules/@arcgis/core/webdoc/support/timeProperties.js
var m3 = { type: p, json: { read: { source: "timeExtent", reader: (e) => e ? Array.isArray(e) ? p.fromArray(e) : p.fromJSON(e) : null }, write: { writer: (r3, t, o2, m4) => {
  r3 && (r3.isEmpty ? (m4 == null ? void 0 : m4.messages) && m4.messages.push(new s("invalid-timeExtent", "TimeExtent cannot be empty")) : t[o2] = r3.toArray());
}, target: { timeExtent: { type: [[x, _]] } } } } };

// node_modules/@arcgis/core/webmap/Bookmark.js
var h;
var f = h = class extends n2.IdentifiableMixin(S) {
  constructor(t) {
    super(t), this.name = null, this.thumbnail = new u(), this.timeExtent = null;
  }
  castThumbnail(t) {
    return "string" == typeof t ? new u({ url: t }) : w(u, t);
  }
  set viewpoint(t) {
    const { targetGeometry: e, scale: o2 } = t;
    null != e && "point" === e.type && null == o2 && n.getLogger(this).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.", t), this._set("viewpoint", t);
  }
  readViewpoint(t, o2) {
    const { extent: r3, viewpoint: i } = o2;
    return m2.fromJSON(i || { targetGeometry: r3 });
  }
  writeViewpoint(t, e, r3, i) {
    if (!t) return;
    const { targetGeometry: n3 } = t;
    if (null == n3 || "extent" === n3.type) null != n3 && (e.extent = n3.toJSON()), e[r3] = t.toJSON();
    else {
      const t2 = "Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";
      (i == null ? void 0 : i.messages) ? i.messages.push(new s("property:unsupported", t2)) : n.getLogger(this).error(t2);
    }
  }
  clone() {
    return new h(a({ name: this.name, thumbnail: this.thumbnail, timeExtent: this.timeExtent, viewpoint: this.viewpoint }));
  }
};
r([m({ type: String, nonNullable: true, json: { write: { isRequired: true } } })], f.prototype, "name", void 0), r([m({ type: u, json: { write: { overridePolicy: (t) => ({ enabled: !(!t || !t.url) }) } } })], f.prototype, "thumbnail", void 0), r([s2("thumbnail")], f.prototype, "castThumbnail", null), r([m(m3)], f.prototype, "timeExtent", void 0), r([m({ type: m2, nonNullable: true, json: { write: true } })], f.prototype, "viewpoint", null), r([o("viewpoint", ["extent", "viewpoint"])], f.prototype, "readViewpoint", null), r([r2("viewpoint")], f.prototype, "writeViewpoint", null), f = h = r([a2("esri.webmap.Bookmark")], f);
var y = f;

export {
  u,
  y
};
//# sourceMappingURL=chunk-AQ2I4LPZ.js.map
