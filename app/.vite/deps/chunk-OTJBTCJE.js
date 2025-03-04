import {
  n as n2,
  r as r2
} from "./chunk-LMA7TSBN.js";
import {
  a as a3,
  m as m2
} from "./chunk-C4XH7UYG.js";
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
  a3 as a2,
  h
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/MeshComponent.js
var u;
var h2 = u = class extends S {
  static from(t) {
    return h(u, t);
  }
  constructor(t) {
    super(t), this.faces = null, this.material = null, this.name = void 0, this.shading = "source", this.trustSourceNormals = false;
  }
  castFaces(t) {
    return n2(t, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, n.getLogger(this));
  }
  castMaterial(t) {
    return h(t && "object" == typeof t && ("metallic" in t || "roughness" in t || "metallicRoughnessTexture" in t) ? m2 : a3, t);
  }
  clone() {
    return new u({ faces: a(this.faces), shading: this.shading, material: a(this.material), trustSourceNormals: this.trustSourceNormals, name: this.name });
  }
  cloneWithDeduplication(t, r3) {
    const s2 = { faces: a(this.faces), shading: this.shading, material: this.material ? this.material.cloneWithDeduplication(t, r3) : null, trustSourceNormals: this.trustSourceNormals, name: this.name };
    return new u(s2);
  }
  get memoryUsage() {
    let t = 0;
    return null != this.faces && (t += this.faces.byteLength), null != this.material && (t += this.material.memoryUsage), t;
  }
};
r([m({ json: { write: r2 } })], h2.prototype, "faces", void 0), r([s("faces")], h2.prototype, "castFaces", null), r([m({ type: a3, json: { write: true } })], h2.prototype, "material", void 0), r([s("material")], h2.prototype, "castMaterial", null), r([m({ json: { write: true } })], h2.prototype, "name", void 0), r([m({ type: String, json: { write: true } })], h2.prototype, "shading", void 0), r([m({ type: Boolean })], h2.prototype, "trustSourceNormals", void 0), h2 = u = r([a2("esri.geometry.support.MeshComponent")], h2);
var f = h2;

export {
  f
};
//# sourceMappingURL=chunk-OTJBTCJE.js.map
