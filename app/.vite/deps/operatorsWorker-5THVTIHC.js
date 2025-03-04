import {
  f
} from "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
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
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/arcade/geometry/operatorsWorker.js
function t(e, t2) {
  let r2;
  return { loaded: false, load: () => r2 ?? (r2 = t2().then((t3) => {
    o[e] = { loaded: true, execute: t3 };
  })) };
}
function r(e) {
  return null == e ? null : e.toJSON();
}
var o = { disjoint: t("disjoint", () => import("./disjointOperator-IHW6LSIF.js").then((e) => e.execute)), intersects: t("intersects", () => import("./intersectsOperator-5BVIG5MM.js").then((e) => e.execute)), touches: t("touches", () => import("./touchesOperator-JTHLBOO2.js").then((e) => e.execute)), crosses: t("crosses", () => import("./crossesOperator-R4OMXUTD.js").then((e) => e.execute)), within: t("within", () => import("./withinOperator-WJZRDAI5.js").then((e) => e.execute)), contains: t("contains", () => import("./containsOperator-3QKBD5SX.js").then((e) => e.execute)), overlaps: t("overlaps", () => import("./overlapsOperator-3F4EHNWZ.js").then((e) => e.execute)), equals: t("equals", async () => {
  const t2 = await import("./equalsOperator-HHF2LPNT.js");
  return (r2, o2) => t2.execute(f(r2), f(o2));
}), relate: t("relate", async () => {
  const t2 = await import("./relateOperator-YXF5L7TL.js");
  return (r2, o2, n2) => t2.execute(f(r2), f(o2), n2);
}), intersection: t("intersection", () => import("./intersectionOperator-ZNLDZT5N.js").then((e) => e.execute)), union: t("union", () => import("./unionOperator-SNMJNV57.js").then((e) => e.executeMany)), difference: t("difference", async () => {
  const t2 = await import("./differenceOperator-PS45NFHZ.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), symmetricDifference: t("symmetricDifference", async () => {
  const t2 = await import("./symmetricDifferenceOperator-QDI4RGEK.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), clip: t("clip", async () => {
  const t2 = await import("./clipOperator-D4WKHEJC.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}), cut: t("cut", async () => {
  const t2 = await import("./cutOperator-24ZKAKO5.js");
  return (o2, n2) => t2.execute(f(o2), f(n2)).map((e) => r(e));
}), area: t("area", async () => {
  const t2 = await import("./areaOperator-JGFZZSJG.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = await import("./unitConversion-WWNTUFKK.js");
  return (n2, a) => {
    const s = t2.execute(f(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}), geodeticArea: t("geodeticArea", async () => {
  const t2 = await import("./geodeticAreaOperator-NDE2HT2A.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = await import("./unitConversion-WWNTUFKK.js");
  return await t2.load(), (a, s) => {
    const i = t2.execute(f(a));
    return r2(o2, n2(s), i);
  };
}), length: t("length", async () => {
  const e = await import("./lengthOperator-PINXRJYC.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-WWNTUFKK.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}), geodeticLength: t("geodeticLength", async () => {
  const t2 = await import("./geodeticLengthOperator-GTAT7GCK.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = await import("./unitConversion-WWNTUFKK.js");
  return await t2.load(), (a, s) => {
    const i = t2.execute(f(a));
    return r2(o2, n2(s), i);
  };
}), distance: t("distance", async () => {
  const t2 = await import("./distanceOperator-HDDGMKXJ.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = await import("./unitConversion-WWNTUFKK.js");
  return (n2, a, s) => {
    const i = t2.execute(f(n2), f(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}), densify: t("densify", async () => {
  const t2 = await import("./densifyOperator-MU7RVF5W.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-WWNTUFKK.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(f(a), s)));
}), geodeticDensify: t("geodeticDensify", async () => {
  const t2 = await import("./geodeticDensifyOperator-4L3L7H4M.js"), { convert: o2, meters: n2, toLengthUnit: a } = await import("./unitConversion-WWNTUFKK.js");
  return await t2.load(), (s, i, c) => (i = o2(a(c), n2, i), r(t2.execute(f(s), i)));
}), generalize: t("generalize", async () => {
  const t2 = await import("./generalizeOperator-THPQDXQ3.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-WWNTUFKK.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(f(a), s, c)));
}), buffer: t("buffer", async () => {
  const e = await import("./bufferOperator-QM2KWU57.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-WWNTUFKK.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}), geodesicBuffer: t("geodesicBuffer", async () => {
  const e = await import("./geodesicBufferOperator-EW6HUHIS.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = await import("./unitConversion-WWNTUFKK.js");
  return await e.load(), (n2, a, s) => (a = t2(o2(s), r2, a), e.execute(n2, a));
}), offset: t("offset", async () => {
  const e = await import("./offsetOperator-4AW74ARE.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-WWNTUFKK.js");
  return (o2, n2, a, s) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2, s));
}), rotate: t("rotate", async () => {
  const t2 = await import("./affineTransformOperator-45TBAMGP.js"), { default: o2 } = await import("./Transformation-SJWH66PX.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(f(n2), c));
  };
}), centroid: t("centroid", async () => {
  const t2 = await import("./centroidOperator-3AXFLJH6.js");
  return (o2) => r(t2.execute(f(o2)));
}), labelPoint: t("labelPoint", async () => {
  const t2 = await import("./labelPointOperator-375SIOSH.js");
  return (o2) => r(t2.execute(f(o2)));
}), simplify: t("simplify", () => import("./simplifyOperator-MKTG53QE.js").then((e) => e.execute)), isSimple: t("isSimple", () => import("./simplifyOperator-MKTG53QE.js").then((e) => e.isSimple)), convexHull: t("convexHull", () => import("./convexHullOperator-XCOCC6IA.js").then((e) => e.execute)), getNearestCoordinate: t("getNearestCoordinate", async () => {
  const t2 = await import("./proximityOperator-I7PJTZPH.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(f(o2), f(n2), a);
    return { ...s, coordinate: r(s.coordinate) };
  };
}), getNearestVertex: t("getNearestVertex", async () => {
  const t2 = await import("./proximityOperator-I7PJTZPH.js");
  return (o2, n2) => {
    const a = t2.getNearestVertex(f(o2), f(n2));
    return { ...a, coordinate: r(a.coordinate) };
  };
}) };
function n(e, t2) {
  const r2 = o[e];
  return r2.loaded ? r2.execute.apply(void 0, t2) : r2.load().then(() => n(e, t2));
}
export {
  n as invokeGeometryOp
};
//# sourceMappingURL=operatorsWorker-5THVTIHC.js.map
