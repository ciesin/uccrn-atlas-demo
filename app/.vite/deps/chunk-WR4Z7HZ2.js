import {
  a as a4
} from "./chunk-3ATECVKT.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  r as r2
} from "./chunk-6P7HXSJ6.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a,
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/CameraLayout.js
var t = class extends a3 {
  constructor(o2) {
    super(o2), this.row = 0, this.column = 0, this.rows = 1, this.columns = 1;
  }
  equals(o2) {
    return null != o2 && (this.row === o2.row && this.rows === o2.rows && this.column === o2.column && this.columns === o2.columns);
  }
};
r([m({ type: Number, nonNullable: true, json: { read: false, write: false } })], t.prototype, "row", void 0), r([m({ type: Number, nonNullable: true, json: { read: false, write: false } })], t.prototype, "column", void 0), r([m({ type: Number, nonNullable: true, json: { read: false, write: false } })], t.prototype, "rows", void 0), r([m({ type: Number, nonNullable: true, json: { read: false, write: false } })], t.prototype, "columns", void 0), t = r([a2("esri.CameraLayout")], t);
var l2 = t;

// node_modules/@arcgis/core/Camera.js
var y = class extends a3.ClonableMixin(S) {
  constructor(...o2) {
    super(...o2), this.position = new j([0, 0, 0]), this.heading = 0, this.tilt = 0, this.fov = 55, this.layout = new l2();
  }
  normalizeCtorArgs(o2, r4, t2, e) {
    if (o2 && "object" == typeof o2 && ("x" in o2 || Array.isArray(o2))) {
      const s2 = { position: o2 };
      return null != r4 && (s2.heading = r4), null != t2 && (s2.tilt = t2), null != e && (s2.fov = e), s2;
    }
    return o2;
  }
  writePosition(o2, r4, t2, e) {
    const s2 = o2.clone();
    s2.x = a(o2.x || 0), s2.y = a(o2.y || 0), s2.z = o2.hasZ ? a(o2.z || 0) : o2.z, r4[t2] = s2.write({}, e);
  }
  readPosition(o2, r4) {
    const t2 = new j();
    return t2.read(o2, r4), t2.x = a(t2.x || 0), t2.y = a(t2.y || 0), t2.z = t2.hasZ ? a(t2.z || 0) : t2.z, t2;
  }
  equals(o2) {
    return null != o2 && (this.tilt === o2.tilt && this.heading === o2.heading && this.fov === o2.fov && this.position.equals(o2.position) && this.layout.equals(o2.layout));
  }
};
r([m({ type: j, json: { write: { isRequired: true } } })], y.prototype, "position", void 0), r([r3("position")], y.prototype, "writePosition", null), r([o("position")], y.prototype, "readPosition", null), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((o2) => a4.normalize(a(o2)))], y.prototype, "heading", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((o2) => r2(a(o2), -180, 180))], y.prototype, "tilt", void 0), r([m({ type: Number, nonNullable: true, json: { default: 55, write: true } }), s((o2) => r2(a(o2, 55), 1, 170))], y.prototype, "fov", void 0), r([m({ type: l2, nonNullable: true, json: { read: false, write: false } })], y.prototype, "layout", void 0), y = r([a2("esri.Camera")], y);
var d = y;

// node_modules/@arcgis/core/Viewpoint.js
var p;
var n = p = class extends S {
  constructor(e) {
    super(e), this.rotation = 0, this.scale = 0, this.targetGeometry = null, this.camera = null;
  }
  castRotation(e) {
    return (e %= 360) < 0 && (e += 360), e;
  }
  clone() {
    return new p({ rotation: this.rotation, scale: this.scale, targetGeometry: null != this.targetGeometry ? this.targetGeometry.clone() : null, camera: null != this.camera ? this.camera.clone() : null });
  }
};
r([m({ type: Number, json: { write: true, origins: { "web-map": { default: 0, write: true }, "web-scene": { write: { overridePolicy: l3 } } } } })], n.prototype, "rotation", void 0), r([s("rotation")], n.prototype, "castRotation", null), r([m({ type: Number, json: { write: true, origins: { "web-map": { default: 0, write: true }, "web-scene": { write: { overridePolicy: l3 } } } } })], n.prototype, "scale", void 0), r([m({ types: l, json: { read: f, write: true, origins: { "web-scene": { read: f, write: { overridePolicy: l3 } } } } })], n.prototype, "targetGeometry", void 0), r([m({ type: d, json: { write: true, origins: { "web-scene": { write: { isRequired: true } } } } })], n.prototype, "camera", void 0), n = p = r([a2("esri.Viewpoint")], n);
var m2 = n;
function l3() {
  return { enabled: !this.camera };
}

export {
  m2 as m
};
//# sourceMappingURL=chunk-WR4Z7HZ2.js.map
