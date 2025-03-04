import {
  s as s3
} from "./chunk-C2Y5RHRE.js";
import {
  e
} from "./chunk-ZRT3UCXK.js";
import {
  b,
  m as m3
} from "./chunk-K35H6D4D.js";
import {
  s as s2
} from "./chunk-UQ4WWETM.js";
import {
  r as r3
} from "./chunk-HLOKDQU3.js";
import {
  s
} from "./chunk-SUVHJC6Z.js";
import {
  d,
  u as u3
} from "./chunk-G34KEQQG.js";
import {
  g,
  m,
  n3 as n
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  r2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  A
} from "./chunk-WCGYJMU3.js";
import {
  L,
  S,
  l2 as l,
  m as m2,
  u2 as u,
  u3 as u2,
  w
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/views/support/ScheduledQueueProcessor.js
var u4 = class {
  constructor(e2, s4) {
    this.item = e2, this.controller = s4, this.promise = null;
  }
};
var _ = class {
  constructor(e2) {
    this._schedule = null, this._task = null, this._deferreds = new s2(), this._controllers = new s2(), this._processingItems = new s2(), this._pausedSignal = r3(false), this.concurrency = 1, e2.concurrency && (this.concurrency = e2.concurrency), this._queue = new s(e2.peeker), this.process = e2.process;
    const s4 = e2.scheduler;
    e2.priority && s4 && (this._task = s4.registerTask(e2.priority, this));
  }
  destroy() {
    this.clear(), this._schedule = l(this._schedule), this._task = l(this._task);
  }
  get updating() {
    var _a;
    return !!((_a = this._task) == null ? void 0 : _a.updating) || this.running;
  }
  get length() {
    return this._processingItems.size + this._queue.length;
  }
  abort(e2) {
    const s4 = this._controllers.get(e2);
    s4 && s4.abort();
  }
  clear() {
    this._queue.clear();
    const e2 = [];
    this._controllers.forEach((s4) => e2.push(s4)), this._controllers.clear(), e2.forEach((e3) => e3.abort()), this._processingItems.clear(), this._cancelNext();
  }
  forEach(e2) {
    this._deferreds.forEach((s4, t2) => e2(t2));
  }
  get(e2) {
    const s4 = this._deferreds.get(e2);
    return s4 ? s4.promise : void 0;
  }
  isOngoing(e2) {
    return this._processingItems.has(e2);
  }
  has(e2) {
    return this._deferreds.has(e2);
  }
  pause() {
    this._pausedSignal.value || (this._pausedSignal.value = true, this._cancelNext());
  }
  push(e2, o2) {
    const h3 = this.get(e2);
    if (h3) return h3;
    const c2 = new AbortController();
    let n2 = null;
    o2 && (n2 = m2(o2, () => c2.abort()));
    const l3 = () => {
      const s4 = this._processingItems.get(e2);
      s4 && s4.controller.abort(), u5(), a3.reject(u2());
    }, u5 = () => {
      _2.remove(), null != n2 && n2.remove(), this._removeItem(e2), this._queue.remove(e2), this._scheduleNext();
    }, _2 = w(c2.signal, l3), a3 = L();
    return this._deferreds.set(e2, a3), this._controllers.set(e2, c2), a3.promise.then(u5, u5), this._queue.push(e2), this._scheduleNext(), a3.promise;
  }
  last() {
    return this._queue.last();
  }
  lastPromise() {
    const e2 = this.last();
    return e2 ? this.get(e2) : null;
  }
  peek() {
    return this._queue.peek();
  }
  popLast() {
    var _a;
    const e2 = this._queue.popLast();
    return e2 && ((_a = this._deferreds.get(e2)) == null ? void 0 : _a.reject(u2()), this._removeItem(e2)), e2;
  }
  reset() {
    const e2 = Array.from(this._processingItems.values());
    this._processingItems.clear();
    for (const s4 of e2) this._queue.push(s4.item), s4.controller.abort();
    this._scheduleNext();
  }
  resume() {
    this._pausedSignal.value && (this._pausedSignal.value = false, this._scheduleNext());
  }
  takeAll() {
    const e2 = [];
    for (; this._queue.length; ) e2.push(this._queue.pop());
    return this.clear(), e2;
  }
  get running() {
    return !this._pausedSignal.value && this._queue.length > 0 && this._processingItems.size < this.concurrency;
  }
  runTask(e2) {
    for (; !e2.done && this._queue.length > 0 && this._processingItems.size < this.concurrency; ) this._process(this._queue.pop()), e2.madeProgress();
  }
  _removeItem(e2) {
    this._deferreds.delete(e2), this._controllers.delete(e2), this._processingItems.delete(e2);
  }
  _scheduleNext() {
    this._task || this._pausedSignal.value || this._schedule || (this._schedule = A(() => {
      this._schedule = null, this._next();
    }));
  }
  _next() {
    for (; this._queue.length > 0 && this._processingItems.size < this.concurrency; ) this._process(this._queue.pop());
  }
  _cancelNext() {
    this._schedule && (this._schedule.remove(), this._schedule = null);
  }
  _processResult(e2, s4) {
    this._canProcessFulfillment(e2) && (this._scheduleNext(), this._deferreds.get(e2.item).resolve(s4));
  }
  _processError(e2, s4) {
    this._canProcessFulfillment(e2) && (this._scheduleNext(), this._deferreds.get(e2.item).reject(s4));
  }
  _canProcessFulfillment(e2) {
    return !!this._deferreds.get(e2.item) && this._processingItems.get(e2.item) === e2;
  }
  _process(e2) {
    if (null == e2) return;
    let s4;
    const t2 = new AbortController(), r5 = new u4(e2, t2);
    this._processingItems.set(e2, r5);
    try {
      s4 = this.process(e2, t2.signal);
    } catch (i2) {
      this._processError(r5, i2);
    }
    S(s4) ? (r5.promise = s4, s4.then((e3) => this._processResult(r5, e3), (e3) => this._processError(r5, e3))) : this._processResult(r5, s4);
  }
  get test() {
  }
};

// node_modules/@arcgis/core/views/2d/tiling/TileQueue.js
var l2 = [0, 0];
var h = class extends g {
  constructor(e2) {
    super(e2), this._keyToItem = /* @__PURE__ */ new Map(), this._tilesByScale = /* @__PURE__ */ new Map(), this.concurrency = 6;
  }
  initialize() {
    const { concurrency: e2, process: t2, scheduler: s4, priority: o2 } = this;
    this._queue = new _({ concurrency: e2, scheduler: s4, priority: o2, process: (e3, s5) => {
      const o3 = this._keyToItem.get(e3);
      return t2(o3, { signal: s5 });
    }, peeker: (e3) => this._peek(e3) });
  }
  destroy() {
    this.clear(), this._queue = u(this._queue);
  }
  get length() {
    return this._queue ? this._queue.length : 0;
  }
  abort(e2) {
    const t2 = "string" == typeof e2 ? e2 : e2.id;
    this._queue.abort(t2);
  }
  clear() {
    this._queue.clear(), this._keyToItem.clear(), this._tilesByScale.clear();
  }
  has(e2) {
    return "string" == typeof e2 ? this._keyToItem.has(e2) : this._keyToItem.has(e2.id);
  }
  pause() {
    this._queue.pause();
  }
  push(e2) {
    const t2 = e2.key.id;
    if (this._queue.has(t2)) return this._queue.get(t2);
    const o2 = this._queue.push(t2), r5 = this.tileInfoView.getTileScale(e2.key), i2 = r2(this._tilesByScale, r5, () => /* @__PURE__ */ new Set()), c2 = () => {
      i2.delete(e2.key), 0 === i2.size && this._tilesByScale.delete(r5), this._keyToItem.delete(t2);
    };
    return i2.add(e2.key), this._keyToItem.set(t2, e2), o2.then(c2, c2), o2;
  }
  reset() {
    this._queue.reset();
  }
  resume() {
    this._queue.resume();
  }
  _peek(e2) {
    if (!this.state) return e2.values().next().value;
    const t2 = /* @__PURE__ */ new Set();
    for (const r5 of e2) t2.add(this._keyToItem.get(r5).key);
    const s4 = this.state.scale;
    let o2, i2 = Number.POSITIVE_INFINITY;
    for (const [c2, u5] of this._tilesByScale) {
      if (n(u5, (e3) => t2.has(e3))) {
        const e3 = Math.abs(c2 - s4);
        e3 < i2 && (o2 = u5, i2 = e3);
      }
    }
    return this._getClosestTileKey(o2, e2).id;
  }
  _getClosestTileKey(e2, t2) {
    const s4 = this.tileInfoView, o2 = this.state.center;
    let r5, i2 = Number.POSITIVE_INFINITY;
    for (const c2 of e2) if (t2.has(c2.id)) {
      s4.getTileCoords(l2, c2);
      const e3 = m3(l2, o2);
      e3 < i2 && (i2 = e3, r5 = c2);
    }
    return r5;
  }
};
r([m({ constructOnly: true })], h.prototype, "concurrency", void 0), r([m({ constructOnly: true })], h.prototype, "priority", void 0), r([m({ constructOnly: true })], h.prototype, "process", void 0), r([m({ constructOnly: true })], h.prototype, "scheduler", void 0), r([m()], h.prototype, "state", void 0), r([m({ constructOnly: true })], h.prototype, "tileInfoView", void 0), h = r([a("esri.views.2d.tiling.TileQueue")], h);
var p = h;

// node_modules/@arcgis/core/views/2d/tiling/TileCache.js
var t = class {
  constructor(e2, t2, i2) {
    this.maxSize = e2, this._tileInfoView = t2, this._removedFunc = i2, this._tilePerId = /* @__PURE__ */ new Map(), this._tileKeysPerLevel = [];
  }
  clear() {
    this._tilePerId.clear(), this._tileKeysPerLevel = [];
  }
  has(e2) {
    return this._tilePerId.has(e2);
  }
  get(e2) {
    return this._tilePerId.get(e2);
  }
  pop(e2) {
    const t2 = this._tilePerId.get(e2);
    if (!t2) return;
    const r5 = t2.key.level, s4 = this._tileKeysPerLevel[r5];
    i(this._tilePerId, e2);
    for (let i2 = 0; i2 < s4.length; i2++) if (s4[i2].id === e2) {
      s4.splice(i2, 1);
      break;
    }
    return t2.visible = true, t2;
  }
  add(e2) {
    e2.visible = false;
    const t2 = e2.key, i2 = t2.id;
    if (this._tilePerId.has(i2)) return;
    this._tilePerId.set(i2, e2);
    const r5 = t2.level;
    this._tileKeysPerLevel[r5] || (this._tileKeysPerLevel[r5] = []), this._tileKeysPerLevel[r5].push(t2);
  }
  prune(e2, t2, i2) {
    let r5 = this._tilePerId.size;
    if (r5 <= this.maxSize) return;
    let s4 = this._tileKeysPerLevel.length - 1;
    for (; r5 > this.maxSize && s4 >= 0; ) s4 !== e2 && (r5 = this._pruneAroundCenterTile(r5, t2, i2, s4)), s4--;
    r5 > this.maxSize && (r5 = this._pruneAroundCenterTile(r5, t2, i2, e2));
  }
  _pruneAroundCenterTile(t2, i2, r5, s4) {
    const l3 = this._tileKeysPerLevel[s4];
    if (!l3 || 0 === l3.length) return t2;
    const { size: h3, origin: n2 } = this._tileInfoView.tileInfo, o2 = r5 * h3[0], _2 = r5 * h3[1], d2 = [0, 0], c2 = [0, 0];
    for (l3.sort((t3, r6) => (d2[0] = n2.x + o2 * (t3.col + 0.5), d2[1] = n2.y - _2 * (t3.row + 0.5), c2[0] = n2.x + o2 * (r6.col + 0.5), c2[1] = n2.y - _2 * (r6.row + 0.5), b(d2, i2) - b(c2, i2))); l3.length > 0; ) {
      const e2 = l3.pop();
      if (this._removeTile(e2.id), --t2 === this.maxSize) break;
    }
    return t2;
  }
  _removeTile(e2) {
    const t2 = this._tilePerId.get(e2);
    this._removedFunc && t2 && this._removedFunc(t2), i(this._tilePerId, e2);
  }
};
function i(e2, t2) {
  e2.delete(t2);
}

// node_modules/@arcgis/core/views/2d/tiling/TileStrategy.js
var o = new e(0, 0, 0, 0);
var a2 = /* @__PURE__ */ new Map();
var h2 = [];
var c = [];
var r4 = class {
  constructor(e2) {
    this._previousScale = Number.POSITIVE_INFINITY, this.cachePolicy = "keep", this.coveragePolicy = "closest", this.resampling = true, this.tileIndex = /* @__PURE__ */ new Map(), this.tiles = [], this.buffer = 192, this.acquireTile = e2.acquireTile, this.releaseTile = e2.releaseTile, this.tileInfoView = e2.tileInfoView, null != e2.resampling && (this.resampling = e2.resampling), e2.cachePolicy && (this.cachePolicy = e2.cachePolicy), e2.coveragePolicy && (this.coveragePolicy = e2.coveragePolicy), null != e2.buffer && (this.buffer = e2.buffer), e2.cacheSize && (this._tileCache = new t(e2.cacheSize, this.tileInfoView, (e3) => {
      this.releaseTile(e3);
    }));
  }
  destroy() {
    this.tileIndex.clear();
  }
  update(e2) {
    var _a, _b;
    const { resampling: i2, tileIndex: t2 } = this, { scale: l3, center: r5, resolution: n2 } = e2.state, { minScale: f, maxScale: d2 } = this.tileInfoView, u5 = !e2.stationary && l3 > this._previousScale;
    if (this._previousScale = l3, !i2 && (l3 > f || l3 < d2)) return this.tiles.length = 0, void this.clear();
    const p2 = this.tileInfoView.getTileCoverage(e2.state, this.buffer, this.resampling, this.coveragePolicy);
    if (!p2) return this.tiles.length = 0, void this.clear();
    const { spans: y, lodInfo: g2 } = p2, { level: I } = g2;
    this.tiles.length = 0, t2.forEach((e3) => e3.visible = true);
    let v = 0, m4 = 0;
    if (y.length > 0) for (const { row: s4, colFrom: h3, colTo: c2 } of y) for (let e3 = h3; e3 <= c2; e3++) {
      v++;
      const i3 = o.set(I, s4, g2.normalizeCol(e3), g2.getWorldForColumn(e3)).id;
      let l4 = t2.get(i3);
      if (l4) l4.isReady ? (a2.set(i3, l4), m4++) : u5 || this._addParentTile(i3, a2);
      else {
        if ((_a = this._tileCache) == null ? void 0 : _a.has(i3)) {
          if (l4 = this._tileCache.pop(i3), this.tileIndex.set(i3, l4), l4.isReady) {
            a2.set(i3, l4), m4++;
            continue;
          }
        } else l4 = this.acquireTile(o), this.tileIndex.set(i3, l4);
        u5 || this._addParentTile(i3, a2);
      }
    }
    const T = m4 === v;
    for (const [s4, _2] of t2) {
      if (a2.has(s4)) continue;
      o.set(s4);
      const e3 = this.tileInfoView.intersects(p2, o), i3 = "purge" === this.cachePolicy ? o.level !== I : o.level > I;
      !e3 || !u5 && T ? !i3 && e3 || h2.push(_2) : _2.isReady ? i3 && "purge" === this.cachePolicy && this._hasReadyAncestor(o, I) ? h2.push(_2) : c.push(_2) : i3 && h2.push(_2);
    }
    for (const s4 of c) s4.isReady && a2.set(s4.key.id, s4);
    for (const s4 of h2) this._tileCache ? this._tileCache.add(s4) : this.releaseTile(s4), t2.delete(s4.key.id);
    for (const s4 of a2.values()) this.tiles.push(s4);
    for (const s4 of t2.values()) a2.has(s4.key.id) || (s4.visible = false);
    (_b = this._tileCache) == null ? void 0 : _b.prune(I, r5, n2), s3.pool.release(p2), c.length = 0, h2.length = 0, a2.clear();
  }
  clear() {
    const { tileIndex: e2 } = this;
    for (const i2 of e2.values()) this.releaseTile(i2);
    e2.clear();
  }
  refresh(e2) {
    var _a;
    for (const i2 of this.tileIndex.values()) e2(i2);
    (_a = this._tileCache) == null ? void 0 : _a.clear();
  }
  updateCacheSize(e2) {
    this._tileCache && (this._tileCache.maxSize = e2);
  }
  _addParentTile(e2, i2) {
    var _a;
    let t2 = e2, s4 = null;
    for (; t2 = this.tileInfoView.getTileParentId(t2), t2; ) if (this.tileIndex.has(t2)) {
      if (s4 = this.tileIndex.get(t2), s4 == null ? void 0 : s4.isReady) {
        i2.has(s4.key.id) || i2.set(s4.key.id, s4);
        break;
      }
    } else if (((_a = this._tileCache) == null ? void 0 : _a.has(t2)) && (s4 = this._tileCache.pop(t2), this.tileIndex.set(t2, s4), s4 == null ? void 0 : s4.isReady)) {
      i2.has(s4.key.id) || i2.set(s4.key.id, s4);
      break;
    }
  }
  _hasReadyAncestor(t2, s4) {
    const l3 = u3();
    this.tileInfoView.getTileBounds(l3, t2, true);
    for (const o2 of this.tileIndex.values()) if (o2.isReady && o2.key.level >= s4 && o2.key.level < t2.level) {
      const t3 = u3();
      if (this.tileInfoView.getTileBounds(t3, o2.key, true), d(t3, l3)) return true;
    }
    return false;
  }
};

export {
  p,
  r4 as r
};
//# sourceMappingURL=chunk-SRWZJODN.js.map
