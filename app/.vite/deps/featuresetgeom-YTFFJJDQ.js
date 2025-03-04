import {
  l,
  u
} from "./chunk-N5NRCY3G.js";
import "./chunk-7SWL6AYJ.js";
import {
  a as a2
} from "./chunk-PE5QC36M.js";
import "./chunk-GKX3Z6XX.js";
import {
  B,
  Fe,
  U,
  oe,
  ye
} from "./chunk-O4H354HZ.js";
import "./chunk-SCYMP6Y5.js";
import "./chunk-TSDU5FXE.js";
import "./chunk-JMVIOIWP.js";
import "./chunk-F7TFMQ3A.js";
import "./chunk-YRSM2W7P.js";
import "./chunk-EM6PL3GZ.js";
import "./chunk-J7454WTE.js";
import "./chunk-U6JFTJMZ.js";
import {
  a,
  r
} from "./chunk-TA6O62P3.js";
import "./chunk-CBVVZO37.js";
import {
  n
} from "./chunk-Z2A222O3.js";
import "./chunk-FFVHLGAP.js";
import "./chunk-QM4DRRZI.js";
import "./chunk-LPMFP5XM.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-XEBZUAYT.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-SUVHJC6Z.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
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

// node_modules/@arcgis/core/arcade/functions/featuresetgeom.js
function f(a3) {
  return async (f2, p2, S) => {
    if (oe(S, 2, 2, f2, p2), null === (S = Fe(S))[0] && null === S[1]) return false;
    if (B(S[0])) {
      if (U(S[1])) return new l({ parentfeatureset: S[0], relation: a3, relationGeom: S[1] });
      if (null === S[1]) return new u({ parentfeatureset: S[0] });
      throw new a(f2, r.InvalidParameter, p2);
    }
    if (U(S[0])) {
      if (U(S[1])) {
        switch (a3) {
          case "esriSpatialRelEnvelopeIntersects": {
            const e = n(S[0]), t = n(S[1]);
            return null != e && null != t && a2("intersects", [e.toJSON(), t.toJSON()]);
          }
          case "esriSpatialRelIntersects":
            return a2("intersects", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelContains":
            return a2("contains", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelOverlaps":
            return a2("overlaps", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelWithin":
            return a2("within", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelTouches":
            return a2("touches", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelCrosses":
            return a2("crosses", [S[0].toJSON(), S[1].toJSON()]);
        }
        throw new a(f2, r.InvalidParameter, p2);
      }
      if (B(S[1])) return new l({ parentfeatureset: S[1], relation: a3, relationGeom: S[0] });
      if (null === S[1]) return false;
      throw new a(f2, r.InvalidParameter, p2);
    }
    if (null === S[0]) {
      if (B(S[1])) return new u({ parentfeatureset: S[1] });
      if (U(S[1]) || null === S[1]) return false;
    }
    throw new a(f2, r.InvalidParameter, p2);
  };
}
function p(n2) {
  "async" === n2.mode && (n2.functions.intersects = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelIntersects"));
  }, n2.functions.envelopeintersects = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelEnvelopeIntersects"));
  }, n2.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }), n2.functions.contains = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelContains"));
  }, n2.functions.overlaps = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelOverlaps"));
  }, n2.functions.within = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelWithin"));
  }, n2.functions.touches = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelTouches"));
  }, n2.functions.crosses = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelCrosses"));
  }, n2.functions.relate = function(u2, f2) {
    return n2.standardFunctionAsync(u2, f2, async (n3, p2, S) => {
      if (S = Fe(S), oe(S, 3, 3, u2, f2), U(S[0]) && U(S[1])) return a2("relate", [S[0].toJSON(), S[1].toJSON(), ye(S[2])]);
      if (U(S[0]) && null === S[1]) return false;
      if (U(S[1]) && null === S[0]) return false;
      if (B(S[0]) && null === S[1]) return new u({ parentfeatureset: S[0] });
      if (B(S[1]) && null === S[0]) return new u({ parentfeatureset: S[1] });
      if (B(S[0]) && U(S[1])) return S[0].relate(S[1], ye(S[2]));
      if (B(S[1]) && U(S[0])) return S[1].relate(S[0], ye(S[2]));
      if (null === S[0] && null === S[1]) return false;
      throw new a(u2, r.InvalidParameter, f2);
    });
  });
}
export {
  p as registerFunctions
};
//# sourceMappingURL=featuresetgeom-YTFFJJDQ.js.map
