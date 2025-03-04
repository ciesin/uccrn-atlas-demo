import {
  m as m3,
  m2 as m4,
  m3 as m6,
  n as n6,
  p as p3
} from "./chunk-PUC7IJYJ.js";
import {
  a as a4,
  i as i2,
  u as u2
} from "./chunk-ESU5C3MV.js";
import {
  c,
  m as m5,
  n as n7
} from "./chunk-TYJOGWKZ.js";
import {
  S as S2,
  p as p4,
  y
} from "./chunk-4WO6KUCB.js";
import {
  d,
  e as e2,
  n as n4,
  n2 as n5
} from "./chunk-2Y4TRKRB.js";
import {
  _
} from "./chunk-6REABBOQ.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  h as h2
} from "./chunk-3UHB6K6P.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  n as n2,
  t
} from "./chunk-MLOZK7WX.js";
import {
  n as n3,
  r as r4
} from "./chunk-K2PILHWE.js";
import {
  e,
  o as o2
} from "./chunk-JLFV7EBO.js";
import {
  t as t2
} from "./chunk-JLFSX3JT.js";
import {
  C as C2
} from "./chunk-PAGKMWJH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  C,
  v
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  s as s4
} from "./chunk-BDBI2KVA.js";
import {
  i
} from "./chunk-WE4EKKVR.js";
import {
  f,
  h,
  m as m2,
  p as p2
} from "./chunk-UFBX3XSC.js";
import {
  J,
  K,
  Y,
  it,
  tt
} from "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m,
  p
} from "./chunk-RYSF6YCR.js";
import {
  N,
  a3 as a2,
  s2 as s,
  u2 as u,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  s as s3
} from "./chunk-M6FNW7GP.js";
import {
  a,
  l2 as l,
  n2 as n,
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/symbols/support/IconSymbol3DLayerResource.js
var l2;
var d2 = i()({ circle: "circle", square: "square", cross: "cross", x: "x", kite: "kite", triangle: "triangle" });
var h3 = l2 = class extends S {
  constructor(r7) {
    super(r7);
  }
  readHref(r7, e7, o6) {
    return r7 ? p2(r7, o6) : e7.dataURI;
  }
  writeHref(r7, e7, o6, c17) {
    r7 && (tt(r7) ? e7.dataURI = r7 : (e7.href = m2(r7, c17), Y(e7.href) && (e7.href = K(e7.href))));
  }
  clone() {
    return new l2({ href: this.href, primitive: this.primitive });
  }
};
r([m({ type: String, json: { write: true, read: { source: ["href", "dataURI"] } } })], h3.prototype, "href", void 0), r([o("href")], h3.prototype, "readHref", null), r([r2("href", { href: { type: String }, dataURI: { type: String } })], h3.prototype, "writeHref", null), r([r3(d2)], h3.prototype, "primitive", void 0), h3 = l2 = r([a2("esri.symbols.support.IconSymbol3DLayerResource")], h3);
var j = "circle";

// node_modules/@arcgis/core/symbols/support/ObjectSymbol3DLayerResource.js
var m7;
var n8 = i()({ sphere: "sphere", cylinder: "cylinder", cube: "cube", cone: "cone", diamond: "diamond", tetrahedron: "tetrahedron", invertedCone: "inverted-cone" });
var a5 = m7 = class extends S {
  clone() {
    return new m7({ href: this.href, primitive: this.primitive });
  }
};
r([m({ type: String, json: { read: f, write: h } })], a5.prototype, "href", void 0), r([r3(n8)], a5.prototype, "primitive", void 0), a5 = m7 = r([a2("esri.symbols.support.ObjectSymbol3DLayerResource")], a5);
var d3 = "sphere";

// node_modules/@arcgis/core/symbols/support/StyleOrigin.js
var p5;
var l3 = p5 = class extends g {
  constructor(t10) {
    super(t10), this.name = null, this.styleUrl = null, this.styleName = null, this.portal = null;
  }
  clone() {
    return new p5({ name: this.name, styleUrl: this.styleUrl, styleName: this.styleName, portal: this.portal });
  }
};
r([m({ type: String })], l3.prototype, "name", void 0), r([m({ type: String })], l3.prototype, "styleUrl", void 0), r([m({ type: String })], l3.prototype, "styleName", void 0), r([m({ type: C2 })], l3.prototype, "portal", void 0), l3 = p5 = r([a2("esri.symbols.support.StyleOrigin")], l3);
var i3 = l3;

// node_modules/@arcgis/core/symbols/support/Thumbnail.js
var e3;
var c2 = e3 = class extends g {
  constructor() {
    super(...arguments), this.url = "";
  }
  clone() {
    return new e3({ url: this.url });
  }
};
r([m({ type: String })], c2.prototype, "url", void 0), c2 = e3 = r([a2("esri.symbols.support.Thumbnail")], c2);

// node_modules/@arcgis/core/symbols/CIMSymbol.js
var n9;
var l4 = n9 = class extends n4 {
  constructor(r7) {
    super(r7), this.data = null, this.type = "cim";
  }
  readData(r7, o6) {
    return o6;
  }
  writeData(r7, o6) {
    Object.assign(o6, r7);
  }
  async collectRequiredFields(r7, o6) {
    var _a;
    if ("CIMSymbolReference" === ((_a = this.data) == null ? void 0 : _a.type)) {
      const t10 = this.data.primitiveOverrides;
      if (t10) {
        const e7 = t10.map((t11) => {
          const e8 = t11.valueExpressionInfo;
          return e8 ? _(r7, o6, e8.expression) : null;
        });
        await Promise.all(e7);
      }
    }
  }
  clone() {
    return new n9({ data: a(this.data) });
  }
  hash() {
    return l(JSON.stringify(this.data)).toString();
  }
};
r([m({ json: { write: false } })], l4.prototype, "color", void 0), r([m({ json: { write: true } })], l4.prototype, "data", void 0), r([o("data", ["symbol"])], l4.prototype, "readData", null), r([r2("data", {})], l4.prototype, "writeData", null), r([r3({ CIMSymbolReference: "cim" }, { readOnly: true })], l4.prototype, "type", void 0), l4 = n9 = r([a2("esri.symbols.CIMSymbol")], l4);
var d4 = l4;

// node_modules/@arcgis/core/symbols/Symbol3DLayer.js
var p6 = class extends S {
  constructor(e7) {
    super(e7), this.enabled = true, this.type = null, this.ignoreDrivers = false;
  }
  writeEnabled(e7, r7, o6) {
    e7 || (r7[o6] = e7);
  }
};
r([m({ type: Boolean, json: { read: { source: "enable" }, write: { target: "enable" } } })], p6.prototype, "enabled", void 0), r([r2("enabled")], p6.prototype, "writeEnabled", null), r([m({ type: ["icon", "object", "line", "path", "fill", "water", "extrude", "text"], readOnly: true, json: { write: { isRequired: true } } })], p6.prototype, "type", void 0), p6 = r([a2("esri.symbols.Symbol3DLayer")], p6);
var a6 = p6;

// node_modules/@arcgis/core/symbols/support/materialUtils.js
function c3(e7, o6) {
  const n18 = null != o6.transparency ? r4(o6.transparency) : 1, c17 = o6.color;
  return c17 && Array.isArray(c17) ? new h2([c17[0] || 0, c17[1] || 0, c17[2] || 0, n18]) : null;
}
function s5(r7, e7) {
  e7.color = r7.toJSON().slice(0, 3);
  const o6 = n3(r7.a);
  0 !== o6 && (e7.transparency = o6);
}
function a7(e7) {
  return { type: h2, nonNullable: e7 == null ? void 0 : e7.nonNullable, json: { type: [x], default: null, read: { source: ["color", "transparency"], reader: c3 }, write: { target: { color: { type: [x], isRequired: e7 == null ? void 0 : e7.colorRequiredOnWrite }, transparency: { type: x } }, writer: s5 } } };
}
var l5 = { type: Number, cast: o2, json: { write: true } };

// node_modules/@arcgis/core/symbols/edges/Edges3D.js
var l6 = class extends S {
  constructor(o6) {
    super(o6), this.color = new h2([0, 0, 0, 1]), this.extensionLength = 0, this.size = e(1);
  }
  clone() {
  }
  cloneProperties() {
    return { color: a(this.color), size: this.size, extensionLength: this.extensionLength };
  }
};
r([m({ type: ["solid", "sketch"], readOnly: true, json: { read: true, write: { ignoreOrigin: true, isRequired: true } } })], l6.prototype, "type", void 0), r([m(a7({ colorRequiredOnWrite: true }))], l6.prototype, "color", void 0), r([m({ ...l5, json: { write: { overridePolicy: (o6) => ({ enabled: !!o6 }) } } })], l6.prototype, "extensionLength", void 0), r([m(l5)], l6.prototype, "size", void 0), l6 = r([a2("esri.symbols.edges.Edges3D")], l6);
var m8 = l6;

// node_modules/@arcgis/core/symbols/edges/SketchEdges3D.js
var t3;
var c4 = t3 = class extends m8 {
  constructor(r7) {
    super(r7), this.type = "sketch";
  }
  clone() {
    return new t3(this.cloneProperties());
  }
};
r([r3({ sketch: "sketch" }, { readOnly: true })], c4.prototype, "type", void 0), c4 = t3 = r([a2("esri.symbols.edges.SketchEdges3D")], c4);
var p7 = c4;

// node_modules/@arcgis/core/symbols/edges/SolidEdges3D.js
var t4;
var c5 = t4 = class extends m8 {
  constructor(o6) {
    super(o6), this.type = "solid";
  }
  clone() {
    return new t4(this.cloneProperties());
  }
};
r([r3({ solid: "solid" }, { readOnly: true })], c5.prototype, "type", void 0), c5 = t4 = r([a2("esri.symbols.edges.SolidEdges3D")], c5);
var i4 = c5;

// node_modules/@arcgis/core/symbols/edges/utils.js
var t5 = { types: { key: "type", base: m8, typeMap: { solid: i4, sketch: p7 } }, json: { write: true } };

// node_modules/@arcgis/core/symbols/support/Symbol3DMaterial.js
var c6;
var m9 = c6 = class extends S {
  constructor(o6) {
    super(o6), this.color = null, this.emissiveFactor = null;
  }
  clone() {
    var _a;
    const o6 = { color: ((_a = this.color) == null ? void 0 : _a.clone()) ?? null, emissiveFactor: this.emissiveFactor ? t2(this.emissiveFactor) : null };
    return new c6(o6);
  }
};
r([m(a7())], m9.prototype, "color", void 0), r([m({ type: [Number], json: { write: false } })], m9.prototype, "emissiveFactor", void 0), m9 = c6 = r([a2("esri.symbols.support.Symbol3DMaterial")], m9);

// node_modules/@arcgis/core/symbols/ExtrudeSymbol3DLayer.js
var p8;
var l7 = p8 = class extends a6 {
  constructor(e7) {
    super(e7), this.type = "extrude", this.size = 1, this.material = null, this.castShadows = true, this.edges = null;
  }
  clone() {
    var _a, _b;
    return new p8({ edges: (_a = this.edges) == null ? void 0 : _a.clone(), enabled: this.enabled, material: (_b = this.material) == null ? void 0 : _b.clone(), castShadows: this.castShadows, size: this.size });
  }
};
r([r3({ Extrude: "extrude" }, { readOnly: true })], l7.prototype, "type", void 0), r([m({ type: Number, json: { write: { enabled: true, isRequired: true } }, nonNullable: true })], l7.prototype, "size", void 0), r([m({ type: m9, json: { write: true } })], l7.prototype, "material", void 0), r([m({ type: Boolean, nonNullable: true, json: { write: true, default: true } })], l7.prototype, "castShadows", void 0), r([m(t5)], l7.prototype, "edges", void 0), l7 = p8 = r([a2("esri.symbols.ExtrudeSymbol3DLayer")], l7);
var d5 = l7;

// node_modules/@arcgis/core/symbols/patterns/LinePattern3D.js
var t6 = class extends S {
  constructor(r7) {
    super(r7);
  }
  clone() {
    throw new Error("Subclasses of LinePattern3D should implement their own clone method.");
  }
};
r([m({ type: ["style"], readOnly: true, json: { read: true, write: { ignoreOrigin: true } } })], t6.prototype, "type", void 0), t6 = r([a2("esri.symbols.patterns.LinePattern3D")], t6);
var p9 = t6;

// node_modules/@arcgis/core/symbols/patterns/lineStyles.js
var o3 = ["dash", "dash-dot", "dot", "long-dash", "long-dash-dot", "long-dash-dot-dot", "none", "short-dash", "short-dash-dot", "short-dash-dot-dot", "short-dot", "solid"];

// node_modules/@arcgis/core/symbols/patterns/LineStylePattern3D.js
var i5;
var p10 = i()({ dash: "dash", "dash-dot": "dash-dot", "dash-dot-dot": "long-dash-dot-dot", dot: "dot", "long-dash": "long-dash", "long-dash-dot": "long-dash-dot", null: "none", "short-dash": "short-dash", "short-dash-dot": "short-dash-dot", "short-dash-dot-dot": "short-dash-dot-dot", "short-dot": "short-dot", solid: "solid" });
var h4 = i5 = class extends p9 {
  constructor(o6) {
    super(o6), this.type = "style", this.style = "solid";
  }
  clone() {
    const o6 = { style: this.style };
    return new i5(o6);
  }
};
r([m({ type: ["style"], json: { write: { isRequired: true } } })], h4.prototype, "type", void 0), r([r3(p10), m({ type: o3, json: { write: { isRequired: true } } })], h4.prototype, "style", void 0), h4 = i5 = r([a2("esri.symbols.patterns.LineStylePattern3D")], h4);
var n10 = h4;

// node_modules/@arcgis/core/symbols/patterns/Pattern3D.js
var t7 = class extends S {
  constructor(r7) {
    super(r7), this.type = "style";
  }
  clone() {
    throw new Error("Subclasses of Pattern3D should implement their own clone method.");
  }
};
r([m({ type: ["style"], readOnly: true, json: { read: true, write: { ignoreOrigin: true } } })], t7.prototype, "type", void 0), t7 = r([a2("esri.symbols.patterns.Pattern3D")], t7);
var p11 = t7;

// node_modules/@arcgis/core/symbols/patterns/styles.js
var a8 = ["backward-diagonal", "cross", "diagonal-cross", "forward-diagonal", "horizontal", "none", "solid", "vertical"];

// node_modules/@arcgis/core/symbols/patterns/StylePattern3D.js
var p12;
var i6 = p12 = class extends p11 {
  constructor(s7) {
    super(s7), this.type = "style", this.style = "solid";
  }
  clone() {
    return new p12({ style: this.style });
  }
};
r([m({ type: ["style"], json: { write: { isRequired: true } } })], i6.prototype, "type", void 0), r([m({ type: a8, json: { read: true, write: { isRequired: true } } })], i6.prototype, "style", void 0), i6 = p12 = r([a2("esri.symbols.patterns.StylePattern3D")], i6);
var c7 = i6;

// node_modules/@arcgis/core/symbols/patterns/utils.js
var s6 = { types: { key: "type", base: p11, typeMap: { style: c7 } }, json: { write: true } };
var o4 = { types: { key: "type", base: p9, typeMap: { style: n10 } }, json: { write: true } };

// node_modules/@arcgis/core/symbols/support/colors.js
var r5 = new h2("white");
var n11 = new h2([255, 255, 255, 0]);
function t8(o6) {
  return 0 === o6.r && 0 === o6.g && 0 === o6.b;
}

// node_modules/@arcgis/core/symbols/support/Symbol3DFillMaterial.js
var i7;
var c8 = i7 = class extends m9 {
  constructor(o6) {
    super(o6), this.colorMixMode = null;
  }
  clone() {
    var _a;
    const o6 = { color: ((_a = this.color) == null ? void 0 : _a.clone()) ?? null, emissiveFactor: this.emissiveFactor ? t2(this.emissiveFactor) : null, colorMixMode: this.colorMixMode };
    return new i7(o6);
  }
};
r([r3({ multiply: "multiply", replace: "replace", tint: "tint" })], c8.prototype, "colorMixMode", void 0), c8 = i7 = r([a2("esri.symbols.support.Symbol3DFillMaterial")], c8);

// node_modules/@arcgis/core/symbols/support/Symbol3DOutline.js
var c9;
var m10 = c9 = class extends S {
  constructor(t10) {
    super(t10), this.color = new h2([0, 0, 0, 1]), this.size = e(1), this.pattern = null, this.patternCap = "butt";
  }
  clone() {
    const t10 = { color: null != this.color ? this.color.clone() : null, size: this.size, pattern: null != this.pattern ? this.pattern.clone() : null, patternCap: this.patternCap };
    return new c9(t10);
  }
};
r([m(a7({ colorRequiredOnWrite: true }))], m10.prototype, "color", void 0), r([m({ ...l5, json: { write: { isRequired: true } } })], m10.prototype, "size", void 0), r([m(o4)], m10.prototype, "pattern", void 0), r([m({ type: i2, json: { default: "butt", write: { overridePolicy() {
  return { enabled: null != this.pattern };
} } } })], m10.prototype, "patternCap", void 0), m10 = c9 = r([a2("esri.symbols.support.Symbol3DOutline")], m10);

// node_modules/@arcgis/core/symbols/FillSymbol3DLayer.js
var y2;
var d6 = y2 = class extends a6 {
  constructor(t10) {
    super(t10), this.type = "fill", this.material = null, this.pattern = null, this.castShadows = true, this.outline = null, this.edges = null;
  }
  clone() {
    const t10 = { edges: null != this.edges ? this.edges.clone() : null, enabled: this.enabled, material: null != this.material ? this.material.clone() : null, pattern: null != this.pattern ? this.pattern.clone() : null, castShadows: this.castShadows, outline: null != this.outline ? this.outline.clone() : null };
    return new y2(t10);
  }
  static fromSimpleFillSymbol(t10) {
    var _a, _b, _c;
    const o6 = t10.outline && t10.outline.style && "solid" !== t10.outline.style ? new n10({ style: t10.outline.style }) : null, e7 = { size: ((_a = t10.outline) == null ? void 0 : _a.width) ?? 0, color: (((_b = t10.outline) == null ? void 0 : _b.color) ?? r5).clone(), pattern: o6 };
    return o6 && ((_c = t10.outline) == null ? void 0 : _c.cap) && (e7.patternCap = t10.outline.cap), new y2({ material: new c8({ color: (t10.color ?? n11).clone() }), pattern: t10.style && "solid" !== t10.style ? new c7({ style: t10.style }) : null, outline: e7 });
  }
};
r([r3({ Fill: "fill" }, { readOnly: true })], d6.prototype, "type", void 0), r([m({ type: c8, json: { write: true } })], d6.prototype, "material", void 0), r([m(s6)], d6.prototype, "pattern", void 0), r([m({ type: Boolean, nonNullable: true, json: { write: true, default: true } })], d6.prototype, "castShadows", void 0), r([m({ type: m10, json: { write: true } })], d6.prototype, "outline", void 0), r([m(t5)], d6.prototype, "edges", void 0), d6 = y2 = r([a2("esri.symbols.FillSymbol3DLayer")], d6);
var h5 = d6;

// node_modules/@arcgis/core/symbols/support/Symbol3DAnchorPosition2D.js
var e4;
var p13 = e4 = class extends g {
  constructor() {
    super(...arguments), this.x = 0, this.y = 0;
  }
  clone() {
    return new e4({ x: this.x, y: this.y });
  }
};
r([m({ type: Number })], p13.prototype, "x", void 0), r([m({ type: Number })], p13.prototype, "y", void 0), p13 = e4 = r([a2("esri.symbols.support.Symbol3DAnchorPosition2D")], p13);

// node_modules/@arcgis/core/symbols/support/Symbol3DIconOutline.js
var l8;
var m11 = l8 = class extends S {
  constructor(o6) {
    super(o6), this.color = new h2([0, 0, 0, 1]), this.size = e(1);
  }
  clone() {
    const o6 = { color: null != this.color ? this.color.clone() : null, size: this.size };
    return new l8(o6);
  }
};
r([m(a7({ colorRequiredOnWrite: true }))], m11.prototype, "color", void 0), r([m({ ...l5, json: { write: { isRequired: true } } })], m11.prototype, "size", void 0), m11 = l8 = r([a2("esri.symbols.support.Symbol3DIconOutline")], m11);

// node_modules/@arcgis/core/symbols/IconSymbol3DLayer.js
var d7;
var f2 = "esri.symbols.IconSymbol3DLayer";
var g2 = d7 = class extends a6 {
  constructor(o6) {
    super(o6), this.material = null, this.resource = null, this.type = "icon", this.size = 12, this.anchor = "center", this.anchorPosition = null, this.outline = null, this.angle = 0;
  }
  clone() {
    return new d7({ anchor: this.anchor, anchorPosition: a(this.anchorPosition), enabled: this.enabled, material: a(this.material), outline: a(this.outline), resource: a(this.resource), angle: this.angle, size: this.size });
  }
  static fromSimpleMarkerSymbol(o6) {
    const t10 = o6.color || r5, r7 = j2(o6), e7 = o6.outline && o6.outline.width > 0 ? { size: o6.outline.width, color: (o6.outline.color || r5).clone() } : null;
    return new d7({ size: o6.size, angle: o6.angle, resource: { primitive: S3(o6.style) }, material: { color: t10 }, outline: e7, anchor: r7 ? "relative" : void 0, anchorPosition: r7 });
  }
  static fromPictureMarkerSymbol(o6) {
    const t10 = !o6.color || t8(o6.color) ? r5 : o6.color, r7 = j2(o6);
    return new d7({ size: o6.width <= o6.height ? o6.height : o6.width, angle: o6.angle, resource: { href: o6.url }, material: { color: t10.clone() }, anchor: r7 ? "relative" : void 0, anchorPosition: r7 });
  }
  static fromCIMSymbol(o6) {
    return new d7({ resource: { href: it({ mediaType: "application/json", data: JSON.stringify(o6.data) }) } });
  }
};
r([m({ type: m9, json: { write: true } })], g2.prototype, "material", void 0), r([m({ type: h3, json: { write: true } })], g2.prototype, "resource", void 0), r([r3({ Icon: "icon" }, { readOnly: true })], g2.prototype, "type", void 0), r([m({ ...l5, json: { write: { isRequired: true } } })], g2.prototype, "size", void 0), r([r3({ center: "center", left: "left", right: "right", top: "top", bottom: "bottom", topLeft: "top-left", topRight: "top-right", bottomLeft: "bottom-left", bottomRight: "bottom-right", relative: "relative" }, { default: "center" })], g2.prototype, "anchor", void 0), r([m({ type: p13, json: { type: [Number], read: { reader: (o6) => new p13({ x: o6[0], y: o6[1] }) }, write: { writer: (o6, t10) => {
  t10.anchorPosition = [o6.x, o6.y];
}, overridePolicy() {
  return { enabled: "relative" === this.anchor };
} } } })], g2.prototype, "anchorPosition", void 0), r([m({ type: m11, json: { write: true } })], g2.prototype, "outline", void 0), r([m({ type: Number, json: { write: true, default: 0 } })], g2.prototype, "angle", void 0), g2 = d7 = r([a2(f2)], g2);
var b = g2;
function j2(o6) {
  const t10 = "width" in o6 ? o6.width : o6.size, r7 = "height" in o6 ? o6.height : o6.size, e7 = w(o6.xoffset), i11 = w(o6.yoffset);
  return (e7 || i11) && t10 && r7 ? { x: -e7 / t10, y: i11 / r7 } : null;
}
function w(o6) {
  return isFinite(o6) ? o6 : 0;
}
var v2 = { circle: "circle", cross: "cross", diamond: "kite", square: "square", x: "x", triangle: "triangle", path: null };
function S3(o6) {
  const t10 = v2[o6];
  return t10 || (n.getLogger(f2).warn(`${o6} cannot be mapped to Icon symbol. Fallback to "circle"`), "circle");
}

// node_modules/@arcgis/core/symbols/LineStyleMarker3D.js
var c10 = class extends a3.ClonableMixin(S) {
  constructor(o6) {
    super(o6), this.type = "style", this.placement = "begin-end", this.style = "arrow", this.color = null;
  }
  equals(o6) {
    return null != o6 && o6.placement === this.placement && o6.style === this.style && (null == this.color && null == o6.color || null != this.color && null != o6.color && this.color.toJSON() === o6.color.toJSON());
  }
};
r([m({ type: ["style"], readOnly: true, json: { read: true, write: { ignoreOrigin: true, isRequired: true } } })], c10.prototype, "type", void 0), r([m({ type: e2, json: { default: "begin-end", write: true } })], c10.prototype, "placement", void 0), r([m({ type: n5, json: { default: "arrow", write: true } })], c10.prototype, "style", void 0), r([m({ type: h2, json: { type: [x], default: null, write: true } })], c10.prototype, "color", void 0), c10 = r([a2("esri.symbols.LineStyleMarker3D")], c10);
var a9 = c10;

// node_modules/@arcgis/core/symbols/LineSymbol3DLayer.js
var j3;
var d8 = j3 = class extends a6 {
  constructor(t10) {
    super(t10), this.material = null, this.type = "line", this.join = "miter", this.cap = "butt", this.size = e(1), this.pattern = null, this.marker = null;
  }
  clone() {
    const t10 = { enabled: this.enabled, material: null != this.material ? this.material.clone() : null, size: this.size, join: this.join, cap: this.cap, pattern: null != this.pattern ? this.pattern.clone() : null, marker: null != this.marker ? this.marker.clone() : null };
    return new j3(t10);
  }
  static fromSimpleLineSymbol(t10) {
    var _a;
    const r7 = { enabled: true, size: t10.width ?? e(1), cap: t10.cap || "butt", join: t10.join || "miter", pattern: t10.style ? new n10({ style: t10.style }) : null, material: new m9({ color: (t10.color || r5).clone() }), marker: t10.marker ? new a9({ placement: t10.marker.placement, style: t10.marker.style, color: ((_a = t10.marker.color) == null ? void 0 : _a.clone()) ?? null }) : null };
    return new j3(r7);
  }
};
r([m({ type: m9, json: { write: true } })], d8.prototype, "material", void 0), r([r3({ Line: "line" }, { readOnly: true })], d8.prototype, "type", void 0), r([m({ type: a4, json: { write: true, default: "miter" } })], d8.prototype, "join", void 0), r([m({ type: i2, json: { write: true, default: "butt" } })], d8.prototype, "cap", void 0), r([m({ ...l5, json: { write: { isRequired: true } } })], d8.prototype, "size", void 0), r([m(o4)], d8.prototype, "pattern", void 0), r([m({ types: { key: "type", base: a9, typeMap: { style: a9 } }, json: { write: true } })], d8.prototype, "marker", void 0), d8 = j3 = r([a2("esri.symbols.LineSymbol3DLayer")], d8);
var h6 = d8;

// node_modules/@arcgis/core/symbols/support/Symbol3DAnchorPosition3D.js
var e5;
var p14 = e5 = class extends g {
  constructor() {
    super(...arguments), this.x = 0, this.y = 0, this.z = 0;
  }
  clone() {
    return new e5({ x: this.x, y: this.y, z: this.z });
  }
};
r([m({ type: Number })], p14.prototype, "x", void 0), r([m({ type: Number })], p14.prototype, "y", void 0), r([m({ type: Number })], p14.prototype, "z", void 0), p14 = e5 = r([a2("esri.symbols.support.Symbol3DAnchorPosition3D")], p14);

// node_modules/@arcgis/core/symbols/ObjectSymbol3DLayer.js
var n12;
var a10 = n12 = class extends a6 {
  constructor(o6) {
    super(o6), this.material = null, this.castShadows = true, this.resource = null, this.type = "object", this.width = void 0, this.height = void 0, this.depth = void 0, this.anchor = void 0, this.anchorPosition = void 0, this.heading = void 0, this.tilt = void 0, this.roll = void 0;
  }
  clone() {
    var _a, _b, _c;
    return new n12({ heading: this.heading, tilt: this.tilt, roll: this.roll, anchor: this.anchor, anchorPosition: (_a = this.anchorPosition) == null ? void 0 : _a.clone(), depth: this.depth, enabled: this.enabled, height: this.height, material: ((_b = this.material) == null ? void 0 : _b.clone()) ?? null, castShadows: this.castShadows, resource: (_c = this.resource) == null ? void 0 : _c.clone(), width: this.width });
  }
  get isPrimitive() {
    return !this.resource || "string" != typeof this.resource.href;
  }
};
r([m({ type: m9, json: { write: true } })], a10.prototype, "material", void 0), r([m({ type: Boolean, nonNullable: true, json: { write: true, default: true } })], a10.prototype, "castShadows", void 0), r([m({ type: a5, json: { write: true } })], a10.prototype, "resource", void 0), r([r3({ Object: "object" }, { readOnly: true })], a10.prototype, "type", void 0), r([m({ type: Number, json: { write: true } })], a10.prototype, "width", void 0), r([m({ type: Number, json: { write: true } })], a10.prototype, "height", void 0), r([m({ type: Number, json: { write: true } })], a10.prototype, "depth", void 0), r([r3({ center: "center", top: "top", bottom: "bottom", origin: "origin", relative: "relative" }, { default: "origin" })], a10.prototype, "anchor", void 0), r([m({ type: p14, json: { type: [Number], read: { reader: (o6) => new p14({ x: o6[0], y: o6[1], z: o6[2] }) }, write: { writer: (o6, t10) => {
  t10.anchorPosition = [o6.x, o6.y, o6.z];
}, overridePolicy() {
  return { enabled: "relative" === this.anchor };
} } } })], a10.prototype, "anchorPosition", void 0), r([m({ type: Number, json: { write: true } })], a10.prototype, "heading", void 0), r([m({ type: Number, json: { write: true } })], a10.prototype, "tilt", void 0), r([m({ type: Number, json: { write: true } })], a10.prototype, "roll", void 0), r([m({ readOnly: true })], a10.prototype, "isPrimitive", null), a10 = n12 = r([a2("esri.symbols.ObjectSymbol3DLayer")], a10);
var c11 = a10;

// node_modules/@arcgis/core/symbols/PathSymbol3DLayer.js
var h7;
var n13 = h7 = class extends a6 {
  constructor(t10) {
    super(t10), this.material = null, this.castShadows = true, this.type = "path", this.profile = "circle", this.join = "miter", this.cap = "butt", this.width = void 0, this.height = void 0, this.anchor = "center", this.profileRotation = "all";
  }
  readWidth(t10, o6) {
    return null != t10 ? t10 : null == o6.height && null != o6.size ? o6.size : void 0;
  }
  readHeight(t10, o6) {
    return null != t10 ? t10 : null == o6.width && null != o6.size ? o6.size : void 0;
  }
  clone() {
    return new h7({ enabled: this.enabled, material: null != this.material ? this.material.clone() : null, castShadows: this.castShadows, profile: this.profile, join: this.join, cap: this.cap, width: this.width, height: this.height, profileRotation: this.profileRotation, anchor: this.anchor });
  }
};
r([m({ type: m9, json: { write: true } })], n13.prototype, "material", void 0), r([m({ type: Boolean, nonNullable: true, json: { write: true, default: true } })], n13.prototype, "castShadows", void 0), r([r3({ Path: "path" }, { readOnly: true })], n13.prototype, "type", void 0), r([m({ type: ["circle", "quad"], json: { write: true, default: "circle" } })], n13.prototype, "profile", void 0), r([m({ type: a4, json: { write: true, default: "miter" } })], n13.prototype, "join", void 0), r([m({ type: u2, json: { write: true, default: "butt" } })], n13.prototype, "cap", void 0), r([m({ type: Number, json: { write: { enabled: true, target: { width: { type: Number }, size: { type: Number } } } } })], n13.prototype, "width", void 0), r([o("width", ["width", "size", "height"])], n13.prototype, "readWidth", null), r([m({ type: Number, json: { write: true } })], n13.prototype, "height", void 0), r([o("height", ["height", "size", "width"])], n13.prototype, "readHeight", null), r([m({ type: ["center", "bottom", "top"], json: { write: true, default: "center" } })], n13.prototype, "anchor", void 0), r([m({ type: ["heading", "all"], json: { write: true, default: "all" } })], n13.prototype, "profileRotation", void 0), n13 = h7 = r([a2("esri.symbols.PathSymbol3DLayer")], n13);
var d9 = n13;

// node_modules/@arcgis/core/symbols/support/Symbol3DHalo.js
var m12;
var l9 = m12 = class extends S {
  constructor() {
    super(...arguments), this.color = new h2([0, 0, 0, 1]), this.size = 0;
  }
  clone() {
    const o6 = { color: a(this.color), size: this.size };
    return new m12(o6);
  }
};
r([m(a7())], l9.prototype, "color", void 0), r([m(l5)], l9.prototype, "size", void 0), l9 = m12 = r([a2("esri.symbols.support.Symbol3DHalo")], l9);

// node_modules/@arcgis/core/symbols/support/Symbol3DTextBackground.js
var c12 = class extends a3.ClonableMixin(S) {
  constructor(o6) {
    super(o6), this.color = null;
  }
};
r([m(a7())], c12.prototype, "color", void 0), c12 = r([a2("esri.symbols.support.Symbol3DTextBackground")], c12);

// node_modules/@arcgis/core/symbols/TextSymbol3DLayer.js
var g3;
var y3 = g3 = class extends a6 {
  constructor(t10) {
    super(t10), this._userSize = void 0, this.halo = null, this.horizontalAlignment = "center", this.lineHeight = 1, this.material = null, this.background = null, this.text = null, this.type = "text", this.verticalAlignment = "baseline";
  }
  get font() {
    return this._get("font") || null;
  }
  set font(t10) {
    null != t10 && null != this._userSize && (t10.size = this._userSize), this._set("font", t10);
  }
  writeFont(t10, o6, e7, r7) {
    const i11 = { ...r7, textSymbol3D: true };
    o6.font = t10.write({}, i11), delete o6.font.size;
  }
  get size() {
    var _a;
    return null != this._userSize ? this._userSize : null != ((_a = this.font) == null ? void 0 : _a.size) ? this.font.size : 9;
  }
  set size(t10) {
    this._userSize = t10, null != this.font && (this.font.size = this._userSize), this.notifyChange("size");
  }
  clone() {
    const t10 = new g3({ enabled: this.enabled, font: this.font && a(this.font), halo: this.halo && a(this.halo), horizontalAlignment: this.horizontalAlignment, lineHeight: this.lineHeight, material: null != this.material ? this.material.clone() : null, text: this.text, verticalAlignment: this.verticalAlignment, background: a(this.background) });
    return t10._userSize = this._userSize, t10;
  }
  static fromTextSymbol(t10) {
    return new g3({ font: null != t10.font ? t10.font.clone() : new m4(), halo: d10(t10.haloColor, t10.haloSize), horizontalAlignment: t10.horizontalAlignment, lineHeight: t10.lineHeight, material: t10.color ? new m9({ color: t10.color.clone() }) : null, text: t10.text, verticalAlignment: t10.verticalAlignment, background: t10.backgroundColor ? new c12({ color: t10.backgroundColor.clone() }) : null });
  }
};
function d10(t10, e7) {
  return t10 && null != e7 && e7 > 0 ? new l9({ color: a(t10), size: e7 }) : null;
}
r([m({ type: m4, json: { write: true } })], y3.prototype, "font", null), r([r2("font")], y3.prototype, "writeFont", null), r([m({ type: l9, json: { write: true } })], y3.prototype, "halo", void 0), r([m({ ...m3, json: { default: "center", write: true } })], y3.prototype, "horizontalAlignment", void 0), r([m({ ...n6, json: { default: 1, write: true } })], y3.prototype, "lineHeight", void 0), r([m({ type: m9, json: { write: true } })], y3.prototype, "material", void 0), r([m({ type: c12, json: { write: true } })], y3.prototype, "background", void 0), r([m(l5)], y3.prototype, "size", null), r([m({ type: String, json: { write: true } })], y3.prototype, "text", void 0), r([r3({ Text: "text" }, { readOnly: true })], y3.prototype, "type", void 0), r([m({ ...p3, json: { default: "baseline", write: true } })], y3.prototype, "verticalAlignment", void 0), y3 = g3 = r([a2("esri.symbols.TextSymbol3DLayer")], y3);
var z = y3;

// node_modules/@arcgis/core/symbols/WaterSymbol3DLayer.js
var l10;
var c13 = l10 = class extends a6 {
  constructor(e7) {
    super(e7), this.color = n14.clone(), this.type = "water", this.waterbodySize = "medium", this.waveDirection = null, this.waveStrength = "moderate";
  }
  clone() {
    return new l10({ color: a(this.color), waterbodySize: this.waterbodySize, waveDirection: this.waveDirection, waveStrength: this.waveStrength });
  }
};
r([m({ type: h2, nonNullable: true, json: { type: [x], write: (e7, r7, t10) => r7[t10] = e7.toArray(h2.AlphaMode.UNLESS_OPAQUE), default: () => n14.clone(), defaultEquals: (e7) => e7.toCss(true) === n14.toCss(true) } })], c13.prototype, "color", void 0), r([r3({ Water: "water" }, { readOnly: true })], c13.prototype, "type", void 0), r([m({ type: ["small", "medium", "large"], json: { write: true, default: "medium" } })], c13.prototype, "waterbodySize", void 0), r([m({ type: Number, json: { write: true, default: null } })], c13.prototype, "waveDirection", void 0), r([m({ type: ["calm", "rippled", "slight", "moderate"], json: { write: true, default: "moderate" } })], c13.prototype, "waveStrength", void 0), c13 = l10 = r([a2("esri.symbols.WaterSymbol3DLayer")], c13);
var m13 = c13;
var n14 = new h2([0, 119, 190]);

// node_modules/@arcgis/core/symbols/Symbol3D.js
var v3 = { icon: b, object: c11, line: h6, path: d9, fill: h5, extrude: d5, text: z, water: m13 };
var C3 = V.ofType({ base: a6, key: "type", typeMap: v3, errorContext: "symbol-layer" });
var T = class extends n4 {
  constructor(e7) {
    super(e7), this.styleOrigin = null, this.thumbnail = null, this.type = null;
    const t10 = this.__accessor__ && this.__accessor__.metadata && this.__accessor__.metadata.symbolLayers, o6 = t10 == null ? void 0 : t10.type, s7 = o6 || V;
    this._set("symbolLayers", new s7());
  }
  get color() {
    return null;
  }
  set color(e7) {
    this.constructed && n.getLogger(this).error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.");
  }
  set symbolLayers(e7) {
    n2(e7, this._get("symbolLayers"));
  }
  readStyleOrigin(e7, r7, t10) {
    if (e7.styleUrl && e7.name) {
      const r8 = p2(e7.styleUrl, t10);
      return new i3({ styleUrl: r8, name: e7.name });
    }
    if (e7.styleName && e7.name) return new i3({ portal: (t10 == null ? void 0 : t10.portal) || C2.getDefault(), styleName: e7.styleName, name: e7.name });
    (t10 == null ? void 0 : t10.messages) && t10.messages.push(new s("symbol3d:incomplete-style-origin", "Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property", { context: t10, definition: e7 }));
  }
  writeStyleOrigin(e7, r7, t10, o6) {
    if (e7.styleUrl && e7.name) {
      let t11 = m2(e7.styleUrl, o6);
      Y(t11) && (t11 = K(t11)), r7.styleOrigin = { styleUrl: t11, name: e7.name };
    } else e7.styleName && e7.name && (e7.portal && (o6 == null ? void 0 : o6.portal) && !J(e7.portal.restUrl, o6.portal.restUrl) ? (o6 == null ? void 0 : o6.messages) && o6.messages.push(new s("symbol:cross-portal", "The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.", { symbol: this })) : r7.styleOrigin = { styleName: e7.styleName, name: e7.name });
  }
  normalizeCtorArgs(e7) {
    return e7 instanceof a6 || e7 && v3[e7.type] ? { symbolLayers: [e7] } : Array.isArray(e7) ? { symbolLayers: e7 } : e7;
  }
};
r([m({ json: { read: false, write: false } })], T.prototype, "color", null), r([m({ type: C3, nonNullable: true, json: { write: true } }), s4(t)], T.prototype, "symbolLayers", null), r([m({ type: i3 })], T.prototype, "styleOrigin", void 0), r([o("styleOrigin")], T.prototype, "readStyleOrigin", null), r([r2("styleOrigin", { "styleOrigin.styleUrl": { type: String }, "styleOrigin.styleName": { type: String }, "styleOrigin.name": { type: String } })], T.prototype, "writeStyleOrigin", null), r([m({ type: c2, json: { read: false } })], T.prototype, "thumbnail", void 0), r([m({ type: ["point-3d", "line-3d", "polygon-3d", "mesh-3d", "label-3d"], readOnly: true })], T.prototype, "type", void 0), T = r([a2("esri.symbols.Symbol3D")], T);
var k = T;

// node_modules/@arcgis/core/symbols/callouts/Callout3D.js
var t9 = class extends S {
  constructor(o6) {
    super(o6), this.visible = true;
  }
  clone() {
    throw new Error("Subclasses of Callout3D should implement their own clone method.");
  }
};
r([m({ type: ["line"], constructOnly: true, json: { read: false, write: { ignoreOrigin: true, isRequired: true } } })], t9.prototype, "type", void 0), r([m({ readOnly: true })], t9.prototype, "visible", void 0), t9 = r([a2("esri.symbols.callouts.Callout3D")], t9);
var i8 = t9;

// node_modules/@arcgis/core/symbols/callouts/LineCallout3DBorder.js
var i9;
var l11 = i9 = class extends S {
  constructor(o6) {
    super(o6), this.color = new h2("white");
  }
  clone() {
    return new i9({ color: a(this.color) });
  }
};
r([m(a7({ colorRequiredOnWrite: true }))], l11.prototype, "color", void 0), l11 = i9 = r([a2("esri.symbols.callouts.LineCallout3DBorder")], l11);
var m14 = l11;

// node_modules/@arcgis/core/symbols/callouts/LineCallout3D.js
var a11;
var u3 = a11 = class extends i8 {
  constructor(o6) {
    super(o6), this.type = "line", this.color = new h2([0, 0, 0, 1]), this.size = e(1), this.border = null;
  }
  get visible() {
    return this.size > 0 && null != this.color && this.color.a > 0;
  }
  clone() {
    return new a11({ color: a(this.color), size: this.size, border: a(this.border) });
  }
};
r([r3({ line: "line" })], u3.prototype, "type", void 0), r([m(a7({ colorRequiredOnWrite: true }))], u3.prototype, "color", void 0), r([m({ ...l5, json: { write: { isRequired: true } } })], u3.prototype, "size", void 0), r([m({ type: m14, json: { write: true } })], u3.prototype, "border", void 0), r([m({ readOnly: true })], u3.prototype, "visible", null), u3 = a11 = r([a2("esri.symbols.callouts.LineCallout3D")], u3);
var d11 = u3;

// node_modules/@arcgis/core/symbols/callouts/calloutUtils.js
function e6(t10) {
  if (!t10) return false;
  const n18 = t10.verticalOffset;
  return !(!n18 || n18.screenLength <= 0 || null != n18.maxWorldLength && n18.maxWorldLength <= 0);
}
function r6(t10) {
  if (!t10 || !t10.supportsCallout || !t10.supportsCallout()) return false;
  const n18 = t10.callout;
  return !!(n18 == null ? void 0 : n18.visible) && !!e6(t10);
}
function o5(t10) {
  return "point-3d" === t10.type || "label-3d" === t10.type;
}
function l12(t10) {
  return "center" === t10.horizontalAlignment;
}
var u4 = { types: { key: "type", base: i8, typeMap: { line: d11 } }, json: { write: true } };

// node_modules/@arcgis/core/symbols/support/Symbol3DVerticalOffset.js
var n15;
var i10 = n15 = class extends S {
  constructor(r7) {
    super(r7), this.screenLength = 0, this.minWorldLength = 0, this.maxWorldLength = null;
  }
  clone() {
    return new n15({ screenLength: this.screenLength, minWorldLength: this.minWorldLength, maxWorldLength: this.maxWorldLength });
  }
};
r([m({ ...l5, json: { write: { isRequired: true } } })], i10.prototype, "screenLength", void 0), r([m({ type: Number, nonNullable: true, json: { write: true, default: 0 } })], i10.prototype, "minWorldLength", void 0), r([m({ type: Number, json: { write: true } })], i10.prototype, "maxWorldLength", void 0), i10 = n15 = r([a2("esri.symbols.support.Symbol3DVerticalOffset")], i10);
var p15 = i10;

// node_modules/@arcgis/core/symbols/LabelSymbol3D.js
var n16;
var u5 = V.ofType({ base: null, key: "type", typeMap: { text: z } });
var f3 = n16 = class extends k {
  constructor(t10) {
    super(t10), this.verticalOffset = null, this.callout = null, this.styleOrigin = null, this.symbolLayers = new u5(), this.type = "label-3d";
  }
  supportsCallout() {
    return true;
  }
  hasVisibleCallout() {
    return r6(this);
  }
  hasVisibleVerticalOffset() {
    return e6(this);
  }
  clone() {
    return new n16({ styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail), callout: a(this.callout), verticalOffset: a(this.verticalOffset) });
  }
  static fromTextSymbol(t10) {
    return new n16({ symbolLayers: new V([z.fromTextSymbol(t10)]) });
  }
};
r([m({ type: p15, json: { write: true } })], f3.prototype, "verticalOffset", void 0), r([m(u4)], f3.prototype, "callout", void 0), r([m({ json: { read: false, write: false } })], f3.prototype, "styleOrigin", void 0), r([m({ type: u5 })], f3.prototype, "symbolLayers", void 0), r([r3({ LabelSymbol3D: "label-3d" }, { readOnly: true })], f3.prototype, "type", void 0), f3 = n16 = r([a2("esri.symbols.LabelSymbol3D")], f3);
var b2 = f3;

// node_modules/@arcgis/core/symbols/LineSymbol3D.js
var l13;
var a12 = V.ofType({ base: null, key: "type", typeMap: { line: h6, path: d9 } });
var n17 = V.ofType({ base: null, key: "type", typeMap: { line: h6, path: d9 } });
var c14 = l13 = class extends k {
  constructor(o6) {
    super(o6), this.symbolLayers = new a12(), this.type = "line-3d";
  }
  clone() {
    return new l13({ styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail) });
  }
  static fromSimpleLineSymbol(o6) {
    return new l13({ symbolLayers: new V([h6.fromSimpleLineSymbol(o6)]) });
  }
};
r([m({ type: a12, json: { type: n17 } })], c14.prototype, "symbolLayers", void 0), r([r3({ LineSymbol3D: "line-3d" }, { readOnly: true })], c14.prototype, "type", void 0), c14 = l13 = r([a2("esri.symbols.LineSymbol3D")], c14);
var b3 = c14;

// node_modules/@arcgis/core/symbols/MeshSymbol3D.js
var p16;
var y4 = V.ofType({ base: null, key: "type", typeMap: { fill: h5 } });
var a13 = p16 = class extends k {
  constructor(o6) {
    super(o6), this.symbolLayers = new y4(), this.type = "mesh-3d";
  }
  clone() {
    return new p16({ styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail) });
  }
  static fromSimpleFillSymbol(o6) {
    return new p16({ symbolLayers: new V([h5.fromSimpleFillSymbol(o6)]) });
  }
};
r([m({ type: y4 })], a13.prototype, "symbolLayers", void 0), r([r3({ MeshSymbol3D: "mesh-3d" }, { readOnly: true })], a13.prototype, "type", void 0), a13 = p16 = r([a2("esri.symbols.MeshSymbol3D")], a13);
var c15 = a13;

// node_modules/@arcgis/core/symbols/PictureFillSymbol.js
var c16;
var u6 = c16 = class extends p4 {
  constructor(...t10) {
    super(...t10), this.type = "picture-fill", this.url = null, this.xscale = 1, this.yscale = 1, this.width = 12, this.height = 12, this.xoffset = 0, this.yoffset = 0, this.source = null;
  }
  normalizeCtorArgs(t10, s7, e7, r7) {
    if (t10 && "string" != typeof t10 && null == t10.imageData) return t10;
    const i11 = {};
    return t10 && (i11.url = t10), s7 && (i11.outline = s7), null != e7 && (i11.width = o2(e7)), null != r7 && (i11.height = o2(r7)), i11;
  }
  clone() {
    const t10 = new c16({ color: a(this.color), height: this.height, outline: a(this.outline), url: this.url, width: this.width, xoffset: this.xoffset, xscale: this.xscale, yoffset: this.yoffset, yscale: this.yscale });
    return t10._set("source", a(this.source)), t10;
  }
  hash() {
    var _a;
    return `${super.hash()}.${(_a = this.color) == null ? void 0 : _a.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`;
  }
};
r([r3({ esriPFS: "picture-fill" }, { readOnly: true })], u6.prototype, "type", void 0), r([m(m5)], u6.prototype, "url", void 0), r([m({ type: Number, json: { write: true } })], u6.prototype, "xscale", void 0), r([m({ type: Number, json: { write: true } })], u6.prototype, "yscale", void 0), r([m({ type: Number, cast: o2, json: { write: true } })], u6.prototype, "width", void 0), r([m({ type: Number, cast: o2, json: { write: true } })], u6.prototype, "height", void 0), r([m({ type: Number, cast: o2, json: { write: true } })], u6.prototype, "xoffset", void 0), r([m({ type: Number, cast: o2, json: { write: true } })], u6.prototype, "yoffset", void 0), r([m(c)], u6.prototype, "source", void 0), u6 = c16 = r([a2("esri.symbols.PictureFillSymbol")], u6);
var a14 = u6;

// node_modules/@arcgis/core/symbols/PointSymbol3D.js
var h8;
var S4 = V.ofType({ base: null, key: "type", typeMap: { icon: b, object: c11, text: z } });
var j4 = h8 = class extends k {
  constructor(o6) {
    super(o6), this.verticalOffset = null, this.callout = null, this.symbolLayers = new S4(), this.type = "point-3d";
  }
  supportsCallout() {
    if ((this.symbolLayers ? this.symbolLayers.length : 0) < 1) return false;
    for (const o6 of this.symbolLayers.items) switch (o6.type) {
      case "icon":
      case "text":
      case "object":
        continue;
      default:
        return false;
    }
    return true;
  }
  hasVisibleCallout() {
    return r6(this);
  }
  hasVisibleVerticalOffset() {
    return e6(this);
  }
  clone() {
    return new h8({ verticalOffset: a(this.verticalOffset), callout: a(this.callout), styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail) });
  }
  static fromSimpleMarkerSymbol(o6) {
    return new h8({ symbolLayers: new V([b.fromSimpleMarkerSymbol(o6)]) });
  }
  static fromPictureMarkerSymbol(o6) {
    return new h8({ symbolLayers: new V([b.fromPictureMarkerSymbol(o6)]) });
  }
  static fromCIMSymbol(o6) {
    var _a, _b;
    const e7 = (_b = (_a = o6.data) == null ? void 0 : _a.symbol) == null ? void 0 : _b.type;
    if ("CIMPointSymbol" !== e7) return null;
    const s7 = o6.data.symbol;
    return new h8((s7 == null ? void 0 : s7.callout) ? { symbolLayers: new V([b.fromCIMSymbol(o6)]), callout: new d11({ size: 0.5, color: new h2([0, 0, 0]) }), verticalOffset: new p15({ screenLength: 40 }) } : { symbolLayers: new V([b.fromCIMSymbol(o6)]) });
  }
  static fromTextSymbol(o6) {
    return new h8({ symbolLayers: new V([z.fromTextSymbol(o6)]) });
  }
};
r([m({ type: p15, json: { write: true } })], j4.prototype, "verticalOffset", void 0), r([m(u4)], j4.prototype, "callout", void 0), r([m({ type: S4, json: { origins: { "web-scene": { write: true } } } })], j4.prototype, "symbolLayers", void 0), r([r3({ PointSymbol3D: "point-3d" }, { readOnly: true })], j4.prototype, "type", void 0), j4 = h8 = r([a2("esri.symbols.PointSymbol3D")], j4);
var w2 = j4;

// node_modules/@arcgis/core/symbols/PolygonSymbol3D.js
var u7;
var j5 = V.ofType({ base: null, key: "type", typeMap: { extrude: d5, fill: h5, icon: b, line: h6, object: c11, text: z, water: m13 } });
var g4 = u7 = class extends k {
  constructor(o6) {
    super(o6), this.symbolLayers = new j5(), this.type = "polygon-3d";
  }
  initialize() {
    const o6 = (o7) => {
      "line" === o7.type && p(n.getLogger(this), "LineSymbol3DLayer can not be used as a SymbolLayer with a PolygonSymbol3D symbol anymore.", { replacement: "Use FillSymbol3DLayer.outline instead.", version: "4.28" }), "text" === o7.type && p(n.getLogger(this), "TextSymbol3DLayer can not be used as a SymbolLayer with a PolygonSymbol3D symbol anymore.", { replacement: "Use Labels instead.", version: "4.28" });
    };
    for (const e7 of this.symbolLayers) o6(e7);
    this.addHandles(v(() => this.symbolLayers, "after-add", ({ item: e7 }) => o6(e7), C));
  }
  clone() {
    return new u7({ styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail) });
  }
  static fromJSON(o6) {
    var _a;
    const e7 = new u7();
    if (e7.read(o6), 2 === e7.symbolLayers.length && "fill" === e7.symbolLayers.at(0).type && "line" === e7.symbolLayers.at(1).type) {
      const r7 = e7.symbolLayers.at(0), s7 = e7.symbolLayers.at(1);
      !s7.enabled || ((_a = o6.symbolLayers) == null ? void 0 : _a[1]) && false === o6.symbolLayers[1].enable || (r7.outline = { size: s7.size, color: null != s7.material ? s7.material.color : null }), e7.symbolLayers.removeAt(1);
    }
    return e7;
  }
  static fromSimpleFillSymbol(o6) {
    return new u7({ symbolLayers: new V([h5.fromSimpleFillSymbol(o6)]) });
  }
};
r([m({ type: j5, json: { write: true } })], g4.prototype, "symbolLayers", void 0), r([r3({ PolygonSymbol3D: "polygon-3d" }, { readOnly: true })], g4.prototype, "type", void 0), g4 = u7 = r([a2("esri.symbols.PolygonSymbol3D")], g4);
var h9 = g4;

// node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var y5;
var h10 = y5 = class extends n4 {
  constructor(t10) {
    super(t10), this.color = null, this.styleName = null, this.portal = null, this.styleUrl = null, this.thumbnail = null, this.name = null, this.type = "web-style";
  }
  get _fetchCacheKey() {
    const t10 = null != this.portal ? this.portal : C2.getDefault(), e7 = t10.user ? t10.user.username : null;
    return `${this.styleName}:${this.styleUrl}:${this.name}:${e7}:${t10.url}`;
  }
  read(t10, e7) {
    this.portal = e7 == null ? void 0 : e7.portal, super.read(t10, e7);
  }
  clone() {
    return new y5({ name: this.name, styleUrl: this.styleUrl, styleName: this.styleName, portal: this.portal });
  }
  fetchSymbol(t10) {
    const e7 = t10 && "acceptedFormats" in t10 ? t10.acceptedFormats : ["web"];
    return this._fetchSymbol({ ...t10, acceptedFormats: e7 });
  }
  async fetchCIMSymbol(t10) {
    const o6 = await this.fetchSymbol({ ...t10, acceptedFormats: ["cim"] });
    if ("cim" !== (o6 == null ? void 0 : o6.type)) throw new s2("webstylesymbol:fetchCIMSymbol", "Resolved web style symbol is not of type 'cim'");
    return o6;
  }
  async _fetchSymbol(t10) {
    const e7 = null != t10 ? t10.cache : null, s7 = e7 ? this._fetchCacheKey : null;
    if (null != e7) {
      const t11 = s7 && e7.get(s7);
      if (t11) return t11.clone();
    }
    const { resolveWebStyleSymbol: l14 } = await import("./webStyleSymbolUtils-ACIIAQ4N.js");
    s3(t10);
    const i11 = l14(this, { portal: this.portal }, t10);
    i11.catch((t11) => {
      n.getLogger(this).error("#fetchSymbol()", "Failed to create symbol from style", t11);
    });
    const a15 = await i11;
    return null != e7 && e7.set(s7, a15.clone()), a15;
  }
};
r([m({ json: { write: false } })], h10.prototype, "color", void 0), r([m({ type: String, json: { write: true } })], h10.prototype, "styleName", void 0), r([m({ type: C2, json: { write: false } })], h10.prototype, "portal", void 0), r([m({ type: String, json: { read: f, write: h } })], h10.prototype, "styleUrl", void 0), r([m({ type: c2, json: { read: false } })], h10.prototype, "thumbnail", void 0), r([m({ type: String, json: { write: true } })], h10.prototype, "name", void 0), r([r3({ styleSymbolReference: "web-style" }, { readOnly: true })], h10.prototype, "type", void 0), r([m()], h10.prototype, "_fetchCacheKey", null), h10 = y5 = r([a2("esri.symbols.WebStyleSymbol")], h10);
var u8 = h10;

// node_modules/@arcgis/core/symbols/support/typeUtils.js
function k2(e7) {
  if (!e7) return false;
  switch (e7.type) {
    case "picture-fill":
    case "picture-marker":
    case "simple-fill":
    case "simple-line":
    case "simple-marker":
    case "text":
    case "cim":
      return true;
    default:
      return false;
  }
}
function S5(e7) {
  switch (e7 == null ? void 0 : e7.type) {
    case "label-3d":
    case "line-3d":
    case "mesh-3d":
    case "point-3d":
    case "polygon-3d":
      return true;
    default:
      return false;
  }
}
var x2 = { base: n4, key: "type", typeMap: { "simple-fill": S2, "picture-fill": a14, "picture-marker": n7, "simple-line": d, "simple-marker": y, text: m6, "label-3d": b2, "line-3d": b3, "mesh-3d": c15, "point-3d": w2, "polygon-3d": h9, "web-style": u8, cim: d4 }, errorContext: "symbol" };
var M = { base: n4, key: "type", typeMap: { "picture-marker": n7, "simple-marker": y, "point-3d": w2, cim: d4 }, errorContext: "symbol" };
var C4 = { base: n4, key: "type", typeMap: { "simple-line": d, "line-3d": b3, cim: d4 }, errorContext: "symbol" };
var h11 = { base: n4, key: "type", typeMap: { "simple-fill": S2, "picture-fill": a14, "polygon-3d": h9, cim: d4 }, errorContext: "symbol" };
var g5 = { base: n4, key: "type", typeMap: { "picture-marker": n7, "simple-marker": y, text: m6, "web-style": u8, cim: d4 }, errorContext: "symbol" };
var w3 = u({ types: x2 });
var D = { base: n4, key: "type", typeMap: { "simple-fill": S2, "picture-fill": a14, "picture-marker": n7, "simple-line": d, "simple-marker": y, text: m6, "line-3d": b3, "mesh-3d": c15, "point-3d": w2, "polygon-3d": h9, "web-style": u8, cim: d4 }, errorContext: "symbol" };
var P = { base: n4, key: "type", typeMap: { text: m6, "label-3d": b2 }, errorContext: "symbol" };
var F = { base: n4, key: "type", typeMap: { "line-3d": b3, "mesh-3d": c15, "point-3d": w2, "polygon-3d": h9, "web-style": u8, cim: d4 }, errorContext: "symbol" };
var T2 = { base: n4, key: "type", typeMap: { "label-3d": b2 }, errorContext: "symbol" };
var z2 = N(x2);

export {
  d4 as d,
  i4 as i,
  t5 as t,
  m9 as m,
  h5 as h,
  j,
  p13 as p,
  h6 as h2,
  d3 as d2,
  z,
  i3 as i2,
  c2 as c,
  m14 as m2,
  d11 as d3,
  o5 as o,
  l12 as l,
  p15 as p2,
  b2 as b,
  b3 as b2,
  c15 as c2,
  w2 as w,
  h9 as h3,
  u8 as u,
  k2 as k,
  S5 as S,
  x2 as x,
  M,
  C4 as C,
  h11 as h4,
  g5 as g,
  w3 as w2,
  D,
  P,
  F,
  T2 as T,
  z2
};
//# sourceMappingURL=chunk-IPFYNOOY.js.map
