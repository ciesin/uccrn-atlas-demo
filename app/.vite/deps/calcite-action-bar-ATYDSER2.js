import {
  n
} from "./chunk-IECJITUT.js";
import {
  e
} from "./chunk-OCK4DKGQ.js";
import "./chunk-QSGR2P6B.js";
import "./chunk-FXH7S4UL.js";
import "./chunk-ZP5MYPNA.js";
import "./chunk-RB3I4NA3.js";
import {
  debounce_default
} from "./chunk-75ZAPGBC.js";
import "./chunk-LIL4TPKU.js";
import "./chunk-TWQBATEK.js";
import "./chunk-O5FA53B6.js";
import "./chunk-MF3N5VFJ.js";
import "./chunk-RWVOOLIP.js";
import "./chunk-KES7E466.js";
import "./chunk-4YX4MYVW.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import "./chunk-DXGBUQNN.js";
import {
  ref
} from "./chunk-6Q5AUVK4.js";
import "./chunk-H3ILWZIP.js";
import {
  s
} from "./chunk-KYXTLOLK.js";
import {
  b
} from "./chunk-RQCMOTBU.js";
import {
  bt,
  mt,
  st,
  ut
} from "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  M,
  S,
  createEvent,
  css,
  html,
  nothing,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/chunks/ExpandToggle.js
var I = 2;
var g = (t) => t.reduce((o, e2) => o + e2, 0) / t.length;
var D = (t) => {
  const o = t.filter((n2) => n2.slot !== n.menuActions), e2 = o == null ? void 0 : o.length;
  return {
    actionWidth: e2 ? g(o.map((n2) => n2.clientWidth || 0)) : 0,
    actionHeight: e2 ? g(o.map((n2) => n2.clientHeight || 0)) : 0
  };
};
var N = ({
  width: t,
  actionWidth: o,
  layout: e2,
  height: n2,
  actionHeight: i,
  groupCount: r2
}) => {
  const c = e2 === "horizontal" ? t : n2, s2 = e2 === "horizontal" ? o : i;
  return Math.floor((c - r2 * I) / s2);
};
var H = ({
  layout: t,
  actionCount: o,
  actionWidth: e2,
  width: n2,
  actionHeight: i,
  height: r2,
  groupCount: c
}) => Math.max(o - N({ width: n2, actionWidth: e2, layout: t, height: r2, actionHeight: i, groupCount: c }), 0);
var A = (t) => Array.from(t.querySelectorAll("calcite-action")).filter(
  (o) => o.closest("calcite-action-menu") ? o.slot === e.trigger : true
);
var k = ({
  actionGroups: t,
  expanded: o,
  overflowCount: e2
}) => {
  let n2 = e2;
  t.reverse().forEach((i) => {
    let r2 = 0;
    const c = A(i).reverse();
    c.forEach((s2) => {
      s2.slot === n.menuActions && (s2.removeAttribute("slot"), s2.textEnabled = o);
    }), n2 > 0 && c.some((s2) => (c.filter((f) => !f.slot).length > 1 && c.length > 2 && !s2.closest("calcite-action-menu") && (s2.textEnabled = true, s2.setAttribute("slot", n.menuActions), r2++, r2 > 1 && n2--), n2 < 1)), i.manager.component.requestUpdate();
  });
};
var v = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};
function O(t, o) {
  var _a;
  return t || ((_a = o.closest("calcite-shell-panel")) == null ? void 0 : _a.position) || "start";
}
function B({ el: t, expanded: o }) {
  A(t).filter((e2) => e2.slot !== n.menuActions).forEach((e2) => e2.textEnabled = o), t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((e2) => e2.expanded = o);
}
var P = ({ tooltip: t, referenceElement: o, expanded: e2, ref: n2 }) => (t && (t.referenceElement = !e2 && o ? o : null), n2 && n2(o), o);
var G = ({ expanded: t, expandText: o, collapseText: e2, expandLabel: n2, collapseLabel: i, toggle: r2, el: c, position: s2, tooltip: u, ref: f, scale: d }) => {
  const x = bt(c) === "rtl", h2 = t ? e2 : o, S2 = t ? i : n2, l = [v.chevronsLeft, v.chevronsRight];
  x && l.reverse();
  const m = O(s2, c) === "end", p = m ? l[1] : l[0], E = m ? l[0] : l[1];
  return html`<calcite-action .icon=${t ? p : E} id=expand-toggle .label=${S2} @click=${r2} .scale=${d} .text=${h2} .textEnabled=${t} title=${(!t && !u ? h2 : null) ?? nothing} ${ref(($) => P({ tooltip: u, referenceElement: $, expanded: t, ref: f }))}></calcite-action>`;
};

// node_modules/@esri/calcite-components/dist/components/calcite-action-bar/customElement.js
var k2 = {
  actionGroupEnd: "action-group--end"
};
var h = {
  actionsEnd: "actions-end",
  bottomActions: "bottom-actions",
  expandTooltip: "expand-tooltip"
};
var P2 = css`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}`;
var _U = class _U extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.mutationObserver = b("mutation", () => this.mutationObserverHandler()), this.resize = debounce_default(({ width: t, height: o }) => {
      const { el: e2, expanded: l, expandDisabled: n2, layout: i, overflowActionsDisabled: r2, actionGroups: s2 } = this;
      if (r2 || i === "vertical" && !o || i === "horizontal" && !t)
        return;
      const a = A(e2), c = n2 ? a.length : a.length + 1;
      this.updateGroups();
      const d = this.hasActionsEnd || this.hasBottomActions || !n2 ? s2.length + 1 : s2.length, { actionHeight: b2, actionWidth: m } = D(a), g2 = H({
        layout: i,
        actionCount: c,
        actionHeight: b2,
        actionWidth: m,
        height: o,
        width: t,
        groupCount: d
      });
      k({
        actionGroups: s2,
        expanded: l,
        overflowCount: g2
      });
    }, M.resize), this.resizeHandler = (t) => {
      const { width: o, height: e2 } = t.contentRect;
      this.resize({ width: o, height: e2 });
    }, this.resizeObserver = b("resize", (t) => this.resizeHandlerEntries(t)), this.toggleExpand = () => {
      this.expanded = !this.expanded, this.calciteActionBarToggle.emit();
    }, this.hasActionsEnd = false, this.hasBottomActions = false, this.expandDisabled = false, this.expanded = false, this.layout = "vertical", this.messages = s(), this.overflowActionsDisabled = false, this.overlayPositioning = "absolute", this.scale = "m", this.calciteActionBarToggle = createEvent({ cancelable: false }), this.listen("calciteActionMenuOpen", this.actionMenuOpenHandler);
  }
  // #endregion
  // #region Public Methods
  /**
   * Overflows actions that won't fit into menus.
   *
   * @private
   */
  async overflowActions() {
    this.resize({ width: this.el.clientWidth, height: this.el.clientHeight });
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await r(this), mt(this.el);
  }
  connectedCallback() {
    var _a;
    super.connectedCallback(), this.updateGroups(), this.overflowActions(), (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true }), this.overflowActionsDisabledHandler(this.overflowActionsDisabled);
  }
  async load() {
  }
  willUpdate(t) {
    t.has("expandDisabled") && (this.hasUpdated || this.expandDisabled !== false) && this.overflowActions(), t.has("expanded") && this.hasUpdated && this.expandedHandler(), t.has("layout") && (this.hasUpdated || this.layout !== "vertical") && this.updateGroups(), t.has("overflowActionsDisabled") && (this.hasUpdated || this.overflowActionsDisabled !== false) && this.overflowActionsDisabledHandler(this.overflowActionsDisabled);
  }
  loaded() {
    this.overflowActions();
  }
  disconnectedCallback() {
    var _a, _b;
    super.disconnectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.disconnect(), (_b = this.resizeObserver) == null ? void 0 : _b.disconnect();
  }
  // #endregion
  // #region Private Methods
  expandedHandler() {
    const { el: t, expanded: o } = this;
    B({ el: t, expanded: o }), this.overflowActions();
  }
  overflowActionsDisabledHandler(t) {
    var _a, _b;
    if (t) {
      (_a = this.resizeObserver) == null ? void 0 : _a.disconnect();
      return;
    }
    (_b = this.resizeObserver) == null ? void 0 : _b.observe(this.el), this.overflowActions();
  }
  actionMenuOpenHandler(t) {
    var _a;
    if (t.target.menuOpen) {
      const o = t.composedPath();
      (_a = this.actionGroups) == null ? void 0 : _a.forEach((e2) => {
        o.includes(e2) || (e2.menuOpen = false);
      });
    }
  }
  mutationObserverHandler() {
    this.updateGroups(), this.overflowActions();
  }
  resizeHandlerEntries(t) {
    t.forEach(this.resizeHandler);
  }
  updateGroups() {
    const t = Array.from(this.el.querySelectorAll("calcite-action-group"));
    this.actionGroups = t, this.setGroupLayout(t);
  }
  setGroupLayout(t) {
    t.forEach((o) => o.layout = this.layout);
  }
  handleDefaultSlotChange() {
    this.updateGroups();
  }
  handleActionsEndSlotChange(t) {
    this.hasActionsEnd = ut(t);
  }
  handleBottomActionsSlotChange(t) {
    this.hasBottomActions = ut(t);
  }
  handleTooltipSlotChange(t) {
    const o = st(t).filter((e2) => e2 == null ? void 0 : e2.matches("calcite-tooltip"));
    this.expandTooltip = o[0];
  }
  // #endregion
  // #region Rendering
  renderBottomActionGroup() {
    const { expanded: t, expandDisabled: o, el: e2, position: l, toggleExpand: n2, scale: i, layout: r2, messages: s2, actionsEndGroupLabel: a, overlayPositioning: c } = this, d = o ? null : G({ collapseLabel: s2.collapseLabel, collapseText: s2.collapse, el: e2, expandLabel: s2.expandLabel, expandText: s2.expand, expanded: t, position: l, scale: i, toggle: n2, tooltip: this.expandTooltip });
    return html`<calcite-action-group class=${safeClassMap(k2.actionGroupEnd)} .hidden=${this.expandDisabled && !(this.hasActionsEnd || this.hasBottomActions)} .label=${a} .layout=${r2} .overlayPositioning=${c} .scale=${i}><slot name=${h.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot><slot name=${h.bottomActions} @slotchange=${this.handleBottomActionsSlotChange}></slot><slot name=${h.expandTooltip} @slotchange=${this.handleTooltipSlotChange}></slot>${d}</calcite-action-group>`;
  }
  render() {
    return html`<slot @slotchange=${this.handleDefaultSlotChange}></slot>${this.renderBottomActionGroup()}`;
  }
};
_U.properties = { expandTooltip: 16, hasActionsEnd: 16, hasBottomActions: 16, actionsEndGroupLabel: 1, expandDisabled: 7, expanded: 7, layout: 3, messageOverrides: 0, overflowActionsDisabled: 7, overlayPositioning: 3, position: 3, scale: 3 };
_U.styles = P2;
var U = _U;
S("calcite-action-bar", U);
export {
  U as ActionBar
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/ExpandToggle.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-action-bar/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-action-bar-ATYDSER2.js.map
