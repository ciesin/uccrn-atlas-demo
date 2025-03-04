import {
  Yr
} from "./chunk-DWZQXKZC.js";
import {
  r as r2
} from "./chunk-WWKEPYTK.js";
import {
  n
} from "./chunk-E5SL4O22.js";
import "./chunk-OCK4DKGQ.js";
import "./chunk-7YNOTTY2.js";
import "./chunk-QSGR2P6B.js";
import "./chunk-FXH7S4UL.js";
import {
  F
} from "./chunk-ZP5MYPNA.js";
import "./chunk-RB3I4NA3.js";
import "./chunk-75ZAPGBC.js";
import "./chunk-LIL4TPKU.js";
import {
  s as s2
} from "./chunk-TWQBATEK.js";
import "./chunk-O5FA53B6.js";
import "./chunk-MF3N5VFJ.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import "./chunk-KES7E466.js";
import "./chunk-4YX4MYVW.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import "./chunk-DXGBUQNN.js";
import {
  createRef,
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
  Ot,
  mt
} from "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-dialog/customElement.js
var p = {
  dialog: "dialog",
  panel: "panel",
  scrim: "scrim",
  container: "container",
  containerOpen: "container--open",
  containerEmbedded: "container--embedded",
  assistiveText: "assistive-text",
  openingActive: "dialog--opening-active"
};
var o = {
  actionBar: "action-bar",
  alerts: "alerts",
  content: "content",
  customContent: "custom-content",
  contentTop: "content-top",
  contentBottom: "content-bottom",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerStart: "footer-start",
  footerEnd: "footer-end"
};
var m = 25;
var w = 25;
var D = { x: 0, y: 0 };
var C = { top: 0, right: 0, bottom: 0, left: 0 };
var F2 = css`:host{--calcite-dialog-scrim-background-color: rgba(0, 0, 0, .85);pointer-events:none;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;--calcite-internal-dialog-animation-offset: 20px}:host([modal]){position:absolute}.container{pointer-events:auto;position:fixed;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88)}:host([placement=top]) .container{align-items:flex-start;justify-content:center}:host([placement=top-start]) .container{align-items:flex-start;justify-content:flex-start}:host([placement=top-end]) .container{align-items:flex-start;justify-content:flex-end}:host([placement=bottom]) .container{align-items:flex-end;justify-content:center}:host([placement=bottom-start]) .container{align-items:flex-end;justify-content:flex-start}:host([placement=bottom-end]) .container{align-items:flex-end;justify-content:flex-end}:host(:not([modal])) .container{pointer-events:none}:host([scale=s]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-sm));--calcite-internal-dialog-min-size-x: 198px;--calcite-internal-dialog-min-size-y: 140px}:host([scale=m]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-md));--calcite-internal-dialog-min-size-x: 288px;--calcite-internal-dialog-min-size-y: 180px}:host([scale=l]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-md-plus));--calcite-internal-dialog-min-size-x: 388px;--calcite-internal-dialog-min-size-y: 220px}.scrim{--calcite-scrim-background: var(--calcite-dialog-scrim-background-color, var(--calcite-color-transparent-scrim));--calcite-scrim-background-color: var( --calcite-dialog-scrim-background-color, var(--calcite-color-transparent-scrim) );position:fixed;inset:0;display:flex;overflow-y:hidden}calcite-panel{--calcite-panel-content-space: var(--calcite-dialog-content-space, var(--calcite-internal-dialog-content-padding));--calcite-panel-footer-space: var(--calcite-dialog-footer-space);--calcite-panel-border-color: var(--calcite-dialog-border-color);--calcite-panel-background-color: var(--calcite-dialog-background-color, var(--calcite-color-foreground-1))}::slotted(*){--calcite-panel-background-color: initial}.dialog{pointer-events:none;position:relative;z-index:var(--calcite-z-index-modal);margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;border-radius:.25rem;opacity:0;--tw-shadow: 0 2px 12px -4px rgba(0, 0, 0, .2), 0 2px 4px -2px rgba(0, 0, 0, .16);--tw-shadow-colored: 0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:inset-block var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88);min-inline-size:var(--calcite-dialog-min-size-x, var(--calcite-internal-dialog-min-size-x));max-inline-size:var(--calcite-dialog-max-size-x, 100%);min-block-size:var(--calcite-dialog-min-size-y, var(--calcite-internal-dialog-min-size-y));max-block-size:var(--calcite-dialog-max-size-y, 100%);--calcite-internal-dialog-hidden-position: calc( var(--calcite-dialog-offset-y, 0px) + var(--calcite-internal-dialog-animation-offset) );--calcite-internal-dialog-shown-position: var(--calcite-dialog-offset-y, 0);inset-inline-start:var(--calcite-dialog-offset-x, 0);inset-block-start:var(--calcite-internal-dialog-hidden-position)}.dialog--opening-active{inset-block-start:var(--calcite-internal-dialog-shown-position)}:host([menu-open]) .dialog{transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88)}.panel{border-radius:.25rem}.container--open{opacity:1;visibility:visible;transition-delay:0ms}.container--open .dialog{pointer-events:auto;visibility:visible;opacity:1;transition:inset-block var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88);transition-delay:0ms}.width-s{inline-size:auto;inline-size:var(--calcite-dialog-size-x, 32rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 35rem){.width-s{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-s.dialog--opening-active{inset-block-start:0}}.width-m{inline-size:var(--calcite-dialog-size-x, 48rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 51rem){.width-m{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-m.dialog--opening-active{inset-block-start:0}}.width-l{inline-size:var(--calcite-dialog-size-x, 94rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 97rem){.width-l{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-l.dialog--opening-active{inset-block-start:0}}:host([placement=cover]) .dialog{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0}:host([placement=cover]) .panel{border-radius:0}:host([kind]) .panel{border-start-start-radius:0px;border-start-end-radius:0px}:host([kind=brand]) .dialog{border-color:var(--calcite-color-brand)}:host([kind=danger]) .dialog{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .dialog{border-color:var(--calcite-color-status-info)}:host([kind=success]) .dialog{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .dialog{border-color:var(--calcite-color-status-warning)}:host([kind=brand][open]) .dialog,:host([kind=danger][open]) .dialog,:host([kind=info][open]) .dialog,:host([kind=success][open]) .dialog,:host([kind=warning][open]) .dialog{border-width:0px;border-block-start-width:4px;border-style:solid}.container--embedded{position:absolute;pointer-events:auto}.container--embedded calcite-scrim{position:absolute}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`;
var y = 0;
var $ = "";
var _H = class _H extends LitElement {
  constructor() {
    super(...arguments), this.dragPosition = { ...D }, this.focusTrap = F({
      triggerProp: "open",
      focusTrapOptions: {
        // scrim closes on click, so we let it take over
        clickOutsideDeactivates: () => !this.modal,
        escapeDeactivates: (e) => (!e.defaultPrevented && !this.escapeDisabled && (this.open = false, e.preventDefault()), false)
      }
    })(this), this.ignoreOpenChange = false, this.mutationObserver = b("mutation", () => this.handleMutationObserver()), this._open = false, this.openEnd = () => {
      this.setFocus(), this.el.removeEventListener("calciteDialogOpen", this.openEnd);
    }, this.openProp = "opened", this.transitionProp = "opacity", this.panelEl = createRef(), this.resizePosition = { ...C }, this.assistiveText = null, this.hasContentBottom = false, this.hasContentTop = false, this.hasFooter = true, this.opened = false, this.closeDisabled = false, this.dragEnabled = false, this.embedded = false, this.escapeDisabled = false, this.loading = false, this.menuOpen = false, this.messages = s(), this.modal = false, this.focusTrapDisabled = false, this.outsideCloseDisabled = false, this.overlayPositioning = "absolute", this.placement = "center", this.resizable = false, this.scale = "m", this.widthScale = "m", this.calciteDialogBeforeClose = createEvent({ cancelable: false }), this.calciteDialogBeforeOpen = createEvent({ cancelable: false }), this.calciteDialogClose = createEvent({ cancelable: false }), this.calciteDialogOpen = createEvent({ cancelable: false }), this.calciteDialogScroll = createEvent({ cancelable: false });
  }
  /** When `true`, displays and positions the component. */
  get open() {
    return this._open;
  }
  set open(e) {
    const t = this._open;
    e !== t && (this._open = e, this.toggleDialog(e));
  }
  // #endregion
  // #region Public Methods
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(e) {
    var _a;
    await ((_a = this.panelEl.value) == null ? void 0 : _a.scrollContentTo(e));
  }
  /**
   * Sets focus on the component's "close" button (the first focusable item).
   *
   * @returns {Promise<void>} - A promise that is resolved when the operation has completed.
   */
  async setFocus() {
    var _a;
    return await r(this), ((_a = this.panelEl.value) == null ? void 0 : _a.setFocus()) ?? mt(this.el);
  }
  /**
   * Updates the element(s) that are included in the focus-trap of the component.
   *
   * @param extraContainers - Additional elements to include in the focus trap. This is useful for including elements that may have related parts rendered outside the main focus trapping element.
   */
  async updateFocusTrapElements(e) {
    this.focusTrap.setExtraContainers(e), this.focusTrap.updateContainerElements();
  }
  /** When defined, provides a condition to disable focus trapping. When `true`, prevents focus trapping. */
  focusTrapDisabledOverride() {
    return !this.modal && this.focusTrapDisabled;
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    var _a;
    super.connectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true }), this.setupInteractions();
  }
  async load() {
  }
  willUpdate(e) {
    e.has("modal") && (this.hasUpdated || this.modal !== false) && this.updateOverflowHiddenClass(), (e.has("open") && (this.hasUpdated || this.open !== false) || e.has("placement") && (this.hasUpdated || this.placement !== "center") || e.has("resizable") && (this.hasUpdated || this.resizable !== false) || e.has("dragEnabled") && (this.hasUpdated || this.dragEnabled !== false)) && this.setupInteractions(), (e.has("messages") || e.has("dragEnabled") && (this.hasUpdated || this.dragEnabled !== false) || e.has("resizable") && (this.hasUpdated || this.resizable !== false)) && this.updateAssistiveText(), e.has("opened") && (this.hasUpdated || this.opened !== false) && this.handleOpenedChange(this.opened);
  }
  loaded() {
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), this.removeOverflowHiddenClass(), (_a = this.mutationObserver) == null ? void 0 : _a.disconnect(), this.embedded = false, this.cleanupInteractions();
  }
  // #endregion
  // #region Private Methods
  updateAssistiveText() {
    const { messages: e } = this;
    this.assistiveText = e && (this.dragEnabled || this.resizable) ? `${this.dragEnabled ? e.dragEnabled : ""} ${this.resizable ? e.resizeEnabled : ""}` : null;
  }
  onBeforeOpen() {
    this.calciteDialogBeforeOpen.emit();
  }
  onOpen() {
    this.calciteDialogOpen.emit(), this.focusTrap.activate();
  }
  onBeforeClose() {
    this.calciteDialogBeforeClose.emit();
  }
  onClose() {
    this.calciteDialogClose.emit(), this.focusTrap.deactivate();
  }
  toggleDialog(e) {
    this.ignoreOpenChange || (e ? this.openDialog() : this.closeDialog());
  }
  handleOpenedChange(e) {
    const { transitionEl: t } = this;
    t && (t.classList.toggle(p.openingActive, e), s2(this));
  }
  async triggerInteractModifiers() {
    const { interaction: e } = this;
    e && (await e.reflow({
      name: "drag"
    }), await e.reflow({
      name: "resize"
    }));
  }
  getTransitionElDOMRect() {
    return this.transitionEl.getBoundingClientRect();
  }
  handleKeyDown(e) {
    const { key: t, shiftKey: i, defaultPrevented: a } = e, { dragEnabled: n2, resizable: l, resizePosition: r3, dragPosition: s3, transitionEl: d } = this;
    if (!(a || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(t)))
      switch (t) {
        case "ArrowUp":
          i && l && d ? (this.updateSize({
            size: this.getTransitionElDOMRect().height - m,
            type: "blockSize"
          }), r3.bottom -= m, this.updateTransform(), this.triggerInteractModifiers(), e.preventDefault()) : n2 && (s3.y -= w, this.updateTransform(), this.triggerInteractModifiers(), e.preventDefault());
          break;
        case "ArrowDown":
          i && l && d ? (this.updateSize({
            size: this.getTransitionElDOMRect().height + m,
            type: "blockSize"
          }), r3.bottom += m, this.updateTransform(), this.triggerInteractModifiers(), e.preventDefault()) : n2 && (s3.y += w, this.updateTransform(), this.triggerInteractModifiers(), e.preventDefault());
          break;
        case "ArrowLeft":
          i && l && d ? (this.updateSize({
            size: this.getTransitionElDOMRect().width - m,
            type: "inlineSize"
          }), r3.right -= m, this.updateTransform(), this.triggerInteractModifiers(), e.preventDefault()) : n2 && (s3.x -= w, this.updateTransform(), this.triggerInteractModifiers(), e.preventDefault());
          break;
        case "ArrowRight":
          i && l && d ? (this.updateSize({
            size: this.getTransitionElDOMRect().width + m,
            type: "inlineSize"
          }), r3.right += m, this.updateTransform(), this.triggerInteractModifiers(), e.preventDefault()) : n2 && (s3.x += w, this.updateTransform(), this.triggerInteractModifiers(), e.preventDefault());
          break;
      }
  }
  updateTransform() {
    const { dragPosition: { x: e, y: t }, resizePosition: i, transitionEl: a, dragEnabled: n2, resizable: l } = this;
    if (!a)
      return;
    if (!n2 && !l) {
      a.style.transform = null;
      return;
    }
    const { top: r3, right: s3, bottom: d, left: g } = this.getAdjustedResizePosition(i), f = Math.round(e + g + s3), h = Math.round(t + r3 + d);
    a.style.transform = f || h ? `translate(${f}px, ${h}px)` : null;
  }
  updateSize({ type: e, size: t }) {
    const { transitionEl: i } = this;
    i && (i.style[e] = t !== null ? `${Math.round(t)}px` : null);
  }
  cleanupInteractions() {
    var _a;
    (_a = this.interaction) == null ? void 0 : _a.unset(), this.updateSize({ size: null, type: "inlineSize" }), this.updateSize({ size: null, type: "blockSize" }), this.dragPosition = { ...D }, this.resizePosition = { ...C }, this.updateTransform();
  }
  setupInteractions() {
    this.cleanupInteractions();
    const { el: e, transitionEl: t, resizable: i, dragEnabled: a, resizePosition: n2, dragPosition: l } = this;
    if (!(!t || !this.open)) {
      if ((i || a) && (this.interaction = Yr(t, { context: e.ownerDocument })), i) {
        const { minInlineSize: r3, minBlockSize: s3, maxInlineSize: d, maxBlockSize: g } = window.getComputedStyle(t);
        this.interaction.resizable({
          edges: {
            top: true,
            right: true,
            bottom: true,
            left: true
          },
          modifiers: [
            Yr.modifiers.restrictSize({
              min: {
                width: Ot(r3) ? parseInt(r3) : 0,
                height: Ot(s3) ? parseInt(s3) : 0
              },
              max: {
                width: Ot(d) ? parseInt(d) : window.innerWidth,
                height: Ot(g) ? parseInt(g) : window.innerHeight
              }
            }),
            Yr.modifiers.restrict({
              restriction: "parent"
            })
          ],
          listeners: {
            move: ({ rect: f, deltaRect: h }) => {
              h && (n2.top += h.top, n2.right += h.right, n2.bottom += h.bottom, n2.left += h.left), this.updateSize({ size: f.width, type: "inlineSize" }), this.updateSize({ size: f.height, type: "blockSize" }), this.updateTransform();
            }
          }
        });
      }
      a && this.interaction.draggable({
        modifiers: [
          Yr.modifiers.restrictRect({
            restriction: "parent"
          })
        ],
        listeners: {
          move: ({ dx: r3, dy: s3 }) => {
            l.x += r3, l.y += s3, this.updateTransform();
          }
        }
      });
    }
  }
  getAdjustedResizePosition({ top: e, right: t, bottom: i, left: a }) {
    const n2 = e / 2, l = t / 2, r3 = i / 2, s3 = a / 2;
    switch (this.placement) {
      case "top":
        return { top: e, right: l, bottom: 0, left: s3 };
      case "top-start":
        return { top: e, right: 0, bottom: 0, left: a };
      case "top-end":
        return { top: e, right: t, bottom: 0, left: 0 };
      case "bottom":
        return { top: 0, right: l, bottom: i, left: s3 };
      case "bottom-start":
        return { top: 0, right: 0, bottom: i, left: a };
      case "bottom-end":
        return { top: 0, right: t, bottom: i, left: 0 };
      case "cover":
      case "center":
      default:
        return {
          top: n2,
          right: l,
          bottom: r3,
          left: s3
        };
    }
  }
  setTransitionEl(e) {
    this.transitionEl = e, this.setupInteractions();
  }
  handleInternalPanelScroll(e) {
    e.target === this.panelEl.value && (e.stopPropagation(), this.calciteDialogScroll.emit());
  }
  handleInternalPanelCloseClick(e) {
    e.target === this.panelEl.value && (e.stopPropagation(), this.open = false);
  }
  handlePanelKeyDown(e) {
    this.escapeDisabled && e.key === "Escape" && e.preventDefault();
  }
  async openDialog() {
    await this.componentOnReady(), this.el.addEventListener("calciteDialogOpen", this.openEnd), this.opened = true, this.updateOverflowHiddenClass();
  }
  handleOutsideClose() {
    this.outsideCloseDisabled || (this.open = false);
  }
  async closeDialog() {
    if (this.beforeClose)
      try {
        await this.beforeClose();
      } catch {
        requestAnimationFrame(() => {
          this.ignoreOpenChange = true, this.open = true, this.ignoreOpenChange = false;
        });
        return;
      }
    y--, this.opened = false, this.updateOverflowHiddenClass();
  }
  updateOverflowHiddenClass() {
    this.opened && !this.embedded && this.modal ? this.addOverflowHiddenClass() : this.removeOverflowHiddenClass();
  }
  addOverflowHiddenClass() {
    y === 0 && ($ = document.documentElement.style.overflow), y++, document.documentElement.style.setProperty("overflow", "hidden");
  }
  removeOverflowHiddenClass() {
    document.documentElement.style.setProperty("overflow", $);
  }
  handleMutationObserver() {
    this.focusTrap.updateContainerElements();
  }
  // #endregion
  // #region Rendering
  render() {
    const { assistiveText: e, description: t, heading: i, opened: a } = this;
    return html`<div class=${safeClassMap({
      [p.container]: true,
      [p.containerOpen]: a,
      [p.containerEmbedded]: this.embedded
    })}>${this.modal ? html`<calcite-scrim class=${safeClassMap(p.scrim)} @click=${this.handleOutsideClose}></calcite-scrim>` : null}<div .ariaDescription=${t} .ariaLabel=${i} .ariaModal=${this.modal} class=${safeClassMap({
      [p.dialog]: true,
      [r2("width", this.width, this.widthScale)]: !!(this.width || this.widthScale)
    })} @keydown=${this.handleKeyDown} role=dialog ${ref(this.setTransitionEl)}>${e ? keyed("assistive-text", html`<div aria-live=polite class=${safeClassMap(p.assistiveText)}>${e}</div>`) : null}<slot name=${o.customContent}><slot name=${o.content}><calcite-panel .beforeClose=${this.beforeClose} class=${safeClassMap(p.panel)} .closable=${!this.closeDisabled} .closed=${!a} .description=${t} .heading=${i} .headingLevel=${this.headingLevel} .loading=${this.loading} .menuOpen=${this.menuOpen} .messageOverrides=${this.messageOverrides} @keydown=${this.handlePanelKeyDown} @calcitePanelClose=${this.handleInternalPanelCloseClick} @calcitePanelScroll=${this.handleInternalPanelScroll} .overlayPositioning=${this.overlayPositioning} .scale=${this.scale} ${ref(this.panelEl)}><slot name=${o.actionBar} slot=${n.actionBar}></slot><slot name=${o.alerts} slot=${n.alerts}></slot><slot name=${o.headerActionsStart} slot=${n.headerActionsStart}></slot><slot name=${o.headerActionsEnd} slot=${n.headerActionsEnd}></slot><slot name=${o.headerContent} slot=${n.headerContent}></slot><slot name=${o.headerMenuActions} slot=${n.headerMenuActions}></slot><slot name=${o.fab} slot=${n.fab}></slot><slot name=${o.contentTop} slot=${n.contentTop}></slot><slot name=${o.contentBottom} slot=${n.contentBottom}></slot><slot name=${o.footerStart} slot=${n.footerStart}></slot><slot name=${o.footer} slot=${n.footer}></slot><slot name=${o.footerEnd} slot=${n.footerEnd}></slot><slot></slot></calcite-panel></slot></slot></div></div>`;
  }
};
_H.properties = { assistiveText: 16, hasContentBottom: 16, hasContentTop: 16, hasFooter: 16, opened: 16, beforeClose: 0, closeDisabled: 7, description: 1, dragEnabled: 7, embedded: 5, escapeDisabled: 7, focusTrapOptions: 0, heading: 1, headingLevel: 11, kind: 3, loading: 7, menuOpen: 7, messageOverrides: 0, modal: 7, focusTrapDisabled: 7, open: 7, outsideCloseDisabled: 7, overlayPositioning: 3, placement: 3, resizable: 7, scale: 3, widthScale: 3, width: 3 };
_H.styles = F2;
var H = _H;
S("calcite-dialog", H);
export {
  H as Dialog
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-dialog/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-dialog-666O63O4.js.map
