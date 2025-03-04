import {
  l
} from "./chunk-KAAAN25B.js";
import {
  t
} from "./chunk-SMPH4DRM.js";
import {
  C
} from "./chunk-GKX3Z6XX.js";
import {
  Be,
  K,
  U,
  X,
  ne,
  oe,
  q,
  re,
  te,
  ye
} from "./chunk-O4H354HZ.js";
import "./chunk-SCYMP6Y5.js";
import "./chunk-TSDU5FXE.js";
import "./chunk-JMVIOIWP.js";
import {
  p as p2
} from "./chunk-JLP3FR5H.js";
import {
  c as c2,
  c2 as c3,
  p,
  t as t2
} from "./chunk-WRD6NYYH.js";
import {
  a,
  r
} from "./chunk-TA6O62P3.js";
import "./chunk-Z2A222O3.js";
import {
  m,
  n as n3
} from "./chunk-H3KNPVGL.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-JJAT7JGD.js";
import "./chunk-D4CSBMND.js";
import {
  K as K2,
  O,
  k
} from "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import {
  c,
  e,
  n as n2,
  o
} from "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-JLFSX3JT.js";
import {
  S as S2
} from "./chunk-IP4HFFRO.js";
import {
  C as C2
} from "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-NENDDUWH.js";
import {
  S,
  j,
  n
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-7LY6RE4Z.js";
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
import {
  s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/arcade/functions/knowledgegraph.js
var U2 = null;
async function F(r2) {
  const t3 = s.geometryServiceUrl ?? "";
  if (!t3) {
    k() || await K2();
    for (const e2 of r2) e2.container[e2.indexer] = O(e2.container[e2.indexer], g.WGS84);
    return;
  }
  const n4 = r2.map((e2) => e2.container[e2.indexer]), o2 = new m({ geometries: n4, outSpatialReference: g.WGS84 }), a2 = await n3(t3, o2);
  for (let e2 = 0; e2 < a2.length; e2++) {
    const t4 = r2[e2];
    t4.container[t4.indexer] = a2[e2];
  }
}
async function M(e2, r2) {
  const t3 = new S2({ portal: e2, id: r2 });
  return await t3.load(), null === U2 && (U2 = await import("./knowledgeGraphService-IV5MUCFA.js")), await U2.fetchKnowledgeGraph(t3.url);
}
function Q(e2, r2, t3, n4, o2) {
  if (null === e2) return null;
  if (e(e2) || n2(e2)) return e2;
  if (te(e2)) return e2.toJSDate();
  if (te(e2)) return e2.toJSDate();
  if (ne(e2)) return e2.toStorageFormat();
  if (re(e2)) return e2.toStorageString();
  if (K(e2)) {
    const a2 = {};
    for (const i of e2.keys()) a2[i] = Q(e2.field(i), r2, t3, n4, o2), a2[i] instanceof n && o2.push({ container: a2, indexer: i });
    return a2;
  }
  if (o(e2)) {
    const a2 = e2.map((e3) => Q(e3, r2, t3, n4, o2));
    for (let e3 = 0; e3 < a2.length; e3++) a2[e3] instanceof n && o2.push({ container: a2, indexer: e3 });
    return a2;
  }
  return U(e2) ? e2.spatialReference.isWGS84 ? e2 : e2.spatialReference.isWebMercator && r2 ? S(e2) : e2 : void 0;
}
function E(e2, r2) {
  if (!e2) return e2;
  if (e2.spatialReference.isWGS84 && r2.spatialReference.isWebMercator) return j(e2);
  if (e2.spatialReference.equals(r2.spatialReference)) return e2;
  throw new a(r2, r.WrongSpatialReference, null);
}
function K3(e2, r2) {
  if (!e2) return null;
  const t3 = {};
  for (const n4 in e2) t3[n4] = V(e2[n4], r2);
  return t3;
}
function V(e2, r2) {
  return null === e2 ? null : o(e2) ? e2.map((e3) => V(e3, r2)) : e2 instanceof c2 ? { graphTypeName: e2.typeName, id: e2.id, graphType: "entity", properties: K3(e2.properties, r2) } : e2 instanceof t2 ? { graphType: "object", properties: K3(e2.properties, r2) } : e2 instanceof p ? { graphTypeName: e2.typeName, id: e2.id, graphType: "relationship", originId: e2.originId ?? null, destinationId: e2.destinationId ?? null, properties: K3(e2.properties, r2) } : e2 instanceof c3 ? { graphType: "path", path: e2.path ? e2.path.map((e3) => V(e3, r2)) : null } : U(e2) ? E(e2, r2) : e(e2) || n2(e2) || c(e2) ? e2 : null;
}
function C3(e2) {
  "async" === e2.mode && (e2.functions.knowledgegraphbyportalitem = function(t3, s2) {
    return e2.standardFunctionAsync(t3, s2, (e3, p3, l2) => {
      var _a, _b;
      if (oe(l2, 2, 2, t3, s2), null === l2[0]) throw new a(t3, r.PortalRequired, s2);
      if (l2[0] instanceof t) {
        const e4 = ye(l2[1]);
        let r2;
        r2 = ((_a = t3.services) == null ? void 0 : _a.portal) ? t3.services.portal : C2.getDefault();
        return M(l(l2[0], r2), e4);
      }
      if (false === e(l2[0])) throw new a(t3, r.InvalidParameter, s2);
      const c4 = ye(l2[0]);
      return M(((_b = t3.services) == null ? void 0 : _b.portal) ?? C2.getDefault(), c4);
    });
  }, e2.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), e2.functions.querygraph = function(r2, i) {
    return e2.standardFunctionAsync(r2, i, async (e3, c4, f) => {
      var _a;
      oe(f, 2, 4, r2, i);
      const u = f[0];
      if (!X(u)) throw new a(r2, r.InvalidParameter, i);
      const m2 = f[1];
      if (!e(m2)) throw new a(r2, r.InvalidParameter, i);
      null === U2 && (U2 = await import("./knowledgeGraphService-IV5MUCFA.js"));
      let d = null;
      const g2 = q(f[2], null);
      if (!(g2 instanceof C || null === g2)) throw new a(r2, r.InvalidParameter, i);
      if (g2) {
        let e4 = [];
        d = Q(g2, true, false, r2, e4), e4 = e4.filter((e5) => !e5.container[e5.indexer].spatialReference.isWGS84), e4.length > 0 && await F(e4);
      }
      const h = new p2({ openCypherQuery: m2, bindParameters: d });
      (((_a = u == null ? void 0 : u.serviceDefinition) == null ? void 0 : _a.currentVersion) ?? 11.3) > 11.2 && (h.outputSpatialReference = r2.spatialReference);
      const w = (await U2.executeQueryStreaming(u, h)).resultRowsStream.getReader(), y = [];
      try {
        for (; ; ) {
          const { done: e4, value: t3 } = await w.read();
          if (e4) break;
          if (o(t3)) for (const n4 of t3) y.push(V(n4, r2));
          else {
            const e5 = [];
            for (const n4 of t3) e5.push(V(t3[n4], r2));
            y.push(e5);
          }
        }
      } catch (j2) {
        throw j2;
      }
      return C.convertJsonToArcade(y, Be(r2), false, true);
    });
  }, e2.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  C3 as registerFunctions
};
//# sourceMappingURL=knowledgegraph-CTFB3X6C.js.map
