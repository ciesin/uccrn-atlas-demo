import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/support/ColorRamp.js
var e = class extends S {
  constructor(r3) {
    super(r3), this.type = null;
  }
};
r([m({ readOnly: true, json: { read: false, write: true } })], e.prototype, "type", void 0), e = r([a2("esri.rest.support.ColorRamp")], e);
var p = e;

// node_modules/@arcgis/core/rest/support/AlgorithmicColorRamp.js
var m2;
var c = m2 = class extends p {
  constructor(o) {
    super(o), this.algorithm = null, this.fromColor = null, this.toColor = null, this.type = "algorithmic";
  }
  clone() {
    return new m2({ fromColor: a(this.fromColor), toColor: a(this.toColor), algorithm: this.algorithm });
  }
};
r([r2({ esriCIELabAlgorithm: "cie-lab", esriHSVAlgorithm: "hsv", esriLabLChAlgorithm: "lab-lch" })], c.prototype, "algorithm", void 0), r([m({ type: h, json: { type: [x], write: true } })], c.prototype, "fromColor", void 0), r([m({ type: h, json: { type: [x], write: true } })], c.prototype, "toColor", void 0), r([m({ type: ["algorithmic"] })], c.prototype, "type", void 0), c = m2 = r([a2("esri.rest.support.AlgorithmicColorRamp")], c);
var a3 = c;

// node_modules/@arcgis/core/rest/support/MultipartColorRamp.js
var m3;
var c2 = m3 = class extends p {
  constructor(o) {
    super(o), this.colorRamps = null, this.type = "multipart";
  }
  clone() {
    return new m3({ colorRamps: a(this.colorRamps) });
  }
};
r([m({ type: [a3], json: { write: true } })], c2.prototype, "colorRamps", void 0), r([m({ type: ["multipart"] })], c2.prototype, "type", void 0), c2 = m3 = r([a2("esri.rest.support.MultipartColorRamp")], c2);
var a4 = c2;

// node_modules/@arcgis/core/rest/support/colorRamps.js
var m4 = { key: "type", base: p, typeMap: { algorithmic: a3, multipart: a4 } };
function p2(o) {
  return (o == null ? void 0 : o.type) ? "algorithmic" === o.type ? a3.fromJSON(o) : "multipart" === o.type ? a4.fromJSON(o) : null : null;
}

export {
  a4 as a,
  m4 as m,
  p2 as p
};
//# sourceMappingURL=chunk-5LA23O74.js.map
