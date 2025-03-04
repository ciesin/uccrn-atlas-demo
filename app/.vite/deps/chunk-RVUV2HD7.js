// node_modules/@arcgis/components-utils/dist/index.js
var Deferred = class {
  /**
   * Resolves the promise.
   * @param value The value to resolve the promise with.
   */
  resolve(_value) {
  }
  /**
   * Rejects the promise.
   */
  reject(_error) {
  }
  /**
   * Creates a new deferred promise.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};
function inTargetElement(element, targetElement) {
  let currentElement = element;
  while (currentElement) {
    if (currentElement === targetElement) {
      return true;
    }
    if (!currentElement.parentNode) {
      return false;
    }
    if (currentElement.parentNode instanceof ShadowRoot) {
      currentElement = currentElement.parentNode.host;
    } else {
      currentElement = currentElement.parentNode;
    }
  }
  return false;
}
function observeAncestorsMutation(element, attributeFilter, callback) {
  const { subscribe } = observe(attributeFilter);
  return subscribe((mutations) => {
    const matched = mutations.some((mutation) => inTargetElement(element, mutation.target));
    if (matched) {
      callback();
    }
  });
}
var observers = {};
function observe(attributeFilter) {
  const attributes = attributeFilter.join(",");
  const previousObserver = observers[attributes];
  if (previousObserver !== void 0) {
    return previousObserver;
  }
  const subscribers = /* @__PURE__ */ new Set();
  const mutationObserver = new MutationObserver((mutations) => subscribers.forEach((callback) => callback(mutations)));
  if (globalThis.document) {
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter,
      subtree: true
    });
  }
  const observer = {
    subscribe(callback) {
      subscribers.add(callback);
      return () => {
        subscribers.delete(callback);
        if (subscribers.size === 0) {
          mutationObserver.disconnect();
          observers[attributes] = void 0;
        }
      };
    }
  };
  observers[attributes] = observer;
  return observer;
}
function closestElement(base, selector) {
  var _a8, _b3;
  let currentElement = base;
  while (currentElement) {
    const element = (_a8 = currentElement.closest) == null ? void 0 : _a8.call(currentElement, selector);
    if (element) {
      return element;
    }
    const rootElement = (_b3 = currentElement.getRootNode) == null ? void 0 : _b3.call(currentElement);
    if (rootElement === globalThis.document) {
      return null;
    }
    currentElement = rootElement.host;
  }
  return null;
}
function getElementAttribute(el, prop, fallbackValue) {
  const closest = closestElement(el, `[${prop}]`);
  return (closest == null ? void 0 : closest.getAttribute(prop)) ?? fallbackValue;
}
function isEsriInternalEnv() {
  return typeof globalThis.process === "object" && !!process.env.ESRI_INTERNAL;
}
function safeCall(callback, thisContext, ...rest) {
  try {
    return callback == null ? void 0 : callback.call(thisContext, ...rest);
  } catch (error) {
    console.error(error, callback);
  }
  return void 0;
}
async function safeAsyncCall(callback, thisContext, ...rest) {
  try {
    const result = callback == null ? void 0 : callback.call(thisContext, ...rest);
    return result instanceof Promise ? await result : result;
  } catch (error) {
    console.error(error, callback);
  }
  return void 0;
}
var supportedLocalesArray = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  "en",
  "es",
  "et",
  "fi",
  "fr",
  "he",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "nl",
  "nb",
  "no",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
var supportedLocales = new Set(supportedLocalesArray);
var defaultLocale = "en";
var localeEquivalencies = {
  // We use `pt-PT` as it will have the same translations as `pt`, which has no corresponding bundle
  pt: "pt-PT",
  // We support both 'nb' and 'no' (BCP 47) for Norwegian but only `no` has corresponding bundle
  nb: "no",
  // We use `zh-CN` as base translation for chinese locales which has no corresponding bundle.
  zh: "zh-CN"
};
async function fetchT9nStringsBundle(locale, assetsPath, prefix = "") {
  const path = `${assetsPath}/${prefix}`;
  const filePath = `${path}${locale}.json`;
  t9nStringsCache[filePath] ?? (t9nStringsCache[filePath] = fetchBundle(locale, path));
  return await t9nStringsCache[filePath];
}
var t9nStringsCache = {};
async function fetchBundle(locale, path) {
  const filePath = `${path}${locale}.json`;
  try {
    const response = await fetch(filePath);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    if (true) {
      const is404ViteFallback = String(error).includes(`Unexpected token '<', "<!doctype "... is not valid JSON`);
      if (is404ViteFallback) {
        console.error(`[404] Localization strings not found at ${filePath}`);
      } else {
        console.error(`Error fetching localization strings at ${filePath}`, error);
      }
    } else {
      console.error(error);
    }
    return {};
  }
  if (locale === defaultLocale) {
    return {};
  }
  return await fetchBundle(defaultLocale, path);
}
function getElementLocales(element) {
  var _a8;
  const lang = getElementAttribute(element, "lang", ((_a8 = globalThis.navigator) == null ? void 0 : _a8.language) || defaultLocale);
  return { lang, t9nLocale: normalizeLocale(lang) };
}
function normalizeLocale(locale) {
  const [rawLanguageCode, regionCode] = locale.split("-");
  const languageCode = rawLanguageCode.toLowerCase();
  let normalizedLocale = languageCode;
  if (regionCode) {
    normalizedLocale = `${languageCode}-${regionCode.toUpperCase()}`;
  }
  normalizedLocale = localeEquivalencies[normalizedLocale] ?? normalizedLocale;
  if (supportedLocales.has(normalizedLocale)) {
    return normalizedLocale;
  }
  if (regionCode) {
    return normalizeLocale(languageCode);
  }
  return defaultLocale;
}
function startLocaleObserver(element, getAssetsPath, onUpdated, assetName) {
  let result = void 0;
  const callback = () => void updateComponentLocaleState(element, getAssetsPath(), assetName).then((newResult) => {
    if ((result == null ? void 0 : result.lang) !== newResult.lang || result.t9nLocale !== newResult.t9nLocale || result.t9nStrings !== newResult.t9nStrings) {
      onUpdated(newResult);
    }
    result = newResult;
  }).catch(console.error);
  queueMicrotask(callback);
  return observeAncestorsMutation(element, ["lang"], callback);
}
async function updateComponentLocaleState(element, assetsPath, assetName = element.tagName.toLowerCase().split("-").slice(1).join("-")) {
  const { lang, t9nLocale } = getElementLocales(element);
  const t9nAssetsPath = `${assetsPath}/${assetName}/t9n`;
  const prefix = `messages.`;
  const t9nStrings = (
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    assetName === null ? {} : await fetchT9nStringsBundle(t9nLocale, t9nAssetsPath, prefix)
  );
  return { lang, t9nLocale, t9nStrings };
}
var camelToKebab = (string) => string.replace(upperBeforeLower, (upper, remainder) => `${remainder === 0 ? "" : "-"}${upper.toLowerCase()}`);
var upperBeforeLower = /[A-Z]+(?![a-z])|[A-Z]/gu;
function devToolsAwareTimeout(callback, timeout) {
  const interval = timeout > longTimeoutThreshold ? longTimeoutInterval : timeout / shortTimeoutIntervals;
  let elapsed = 0;
  const reference = setInterval(() => {
    elapsed += interval;
    if (elapsed >= timeout) {
      clearInterval(reference);
      callback();
    }
  }, interval);
  return reference;
}
var longTimeoutThreshold = 4e3;
var longTimeoutInterval = 2e3;
var shortTimeoutIntervals = 4;
function isNotUndefined(item) {
  return item !== void 0;
}

// node_modules/@arcgis/components-controllers/dist/chunk-XKVBN44N.js
function retrieveComponentMembers(component, isLit) {
  var _a8;
  if (isLit) {
    const elementProperties = component.constructor.elementProperties;
    component.manager.internals.members = Object.fromEntries(
      Array.from(
        elementProperties,
        ([name2, descriptor]) => descriptor.noAccessor ? void 0 : [
          name2,
          [
            (descriptor.readOnly ? 2048 : 0) | (descriptor.state ? 32 : 16)
          ]
        ]
      ).filter(isNotUndefined)
    );
  } else {
    const constructor = component.constructor;
    const members = ((_a8 = constructor.__registerControllers) == null ? void 0 : _a8.call(constructor, component)) ?? void 0;
    constructor.__registerControllers = void 0;
    if (typeof members !== "object") {
      throw new Error(
        isEsriInternalEnv() ? "Failed to retrieve internal component meta. Make sure you have the useComponentsControllers() Rollup Plugin for Stencil Controllers configured in your Stencil config." : "Failed to retrieve component meta"
      );
    }
    component.manager.internals.members = Object.fromEntries(
      Object.entries(members).filter(([_name, [propType]]) => (propType & 63) !== 0)
    );
  }
}
function parsePropertyValue(value, type = 8) {
  const isComplex = value == null || typeof value === "object" || typeof value === "function";
  if (isComplex) {
    return value;
  }
  if ((type & 4) !== 0) {
    return value === "false" ? false : value === "" || !!value;
  } else if ((type & 2) !== 0) {
    return Number.parseFloat(value);
  } else if ((type & 1) !== 0) {
    return String(value);
  } else {
    return value;
  }
}
var getMemberType = (component, name2) => {
  var _a8, _b3;
  return (_b3 = (_a8 = component.manager.internals.members) == null ? void 0 : _a8[name2]) == null ? void 0 : _b3[0];
};

// node_modules/@arcgis/components-controllers/dist/chunk-PP2BAVRW.js
var controllerSymbol = Symbol.for("controller");
var name = "@arcgis/components-controllers";
var isController = (value) => typeof value === "object" && value !== null && (controllerSymbol in value || "hostConnected" in value || "hostDisconnected" in value || "hostUpdate" in value || "hostUpdated" in value);
var devOnlySetPersistentControllerData = isEsriInternalEnv() ? (controller, data) => {
  const manager = controller.component.manager;
  const controllers = "_controllers" in manager ? manager._controllers : void 0;
  if (controllers === void 0) {
    return void 0;
  }
  const index = Array.from(controllers).indexOf(controller);
  if (index === -1) {
    return;
  }
  const devOnlyControllerData = Symbol.for(`${name}: devOnlyControllerData`);
  const el = controller.component.el;
  el[devOnlyControllerData] ?? (el[devOnlyControllerData] = {});
  el[devOnlyControllerData][index] = data;
} : void 0;
var devOnlyGetPersistentControllerData = isEsriInternalEnv() ? (controller) => {
  var _a8;
  const manager = controller.component.manager;
  const controllers = "_controllers" in manager ? manager._controllers : void 0;
  if (controllers === void 0) {
    return void 0;
  }
  const index = Array.from(controllers).indexOf(controller);
  const devOnlyControllerData = Symbol.for(`${name}: devOnlyControllerData`);
  const el = controller.component.el;
  return (_a8 = el[devOnlyControllerData]) == null ? void 0 : _a8[index];
} : void 0;
var ambientComponent;
function setAmbientComponent(component) {
  if (ambientComponent === component) {
    return;
  }
  ambientComponent = component;
  queueMicrotask(() => {
    if (ambientComponent === component) {
      ambientComponent = void 0;
    }
  });
}
function retrieveComponent(name2) {
  if (ambientComponent === void 0) {
    throw new Error(
      [
        `Unable to find out which component ${name2 || "this"} controller `,
        "belongs to. Possible causes:\n",
        "- You might also have multiple versions of ",
        "@arcgis/components-controllers package installed\n",
        ...isEsriInternalEnv() ? [
          "- You tried to create controller outside the component. If so, ",
          "please wrap your controller definition in an arrow function (like",
          "`const myController = ()=>makeController(...);`) and call that",
          "function inside the component (`my = myController();`), or ",
          "define your controller using makeGenericController/GenericController ",
          "instead.\n",
          "- You tried to create a controller inside an async function. ",
          "This is allowed without calling controller.use(). Make sure you ",
          "use it like `await controller.use(useController())`."
        ] : []
      ].join("")
    );
  }
  return ambientComponent;
}
var ambientControllers = [];
function setParentController(controller) {
  if (controller === void 0) {
    ambientControllers = [];
    return;
  }
  const index = ambientControllers.indexOf(controller);
  ambientControllers = index === -1 ? [...ambientControllers, controller] : ambientControllers.slice(0, index + 1);
  queueMicrotask(() => {
    ambientControllers = [];
  });
}
function retrieveParentControllers() {
  return ambientControllers;
}
var ambientChildController;
function setAmbientChildController(controller) {
  if (ambientChildController === controller) {
    return;
  }
  ambientChildController = controller;
  queueMicrotask(() => {
    if (ambientChildController === controller) {
      ambientChildController = void 0;
    }
  });
}
function retrieveAmbientChildController() {
  const controller = ambientChildController;
  ambientChildController = void 0;
  return controller;
}
var use = async (value, watchExports) => {
  const controller = useRefSync(value);
  if (controller === void 0) {
    if (isEsriInternalEnv() && typeof watchExports === "function") {
      throw new Error(
        `Unable to resolve a controller from the provided value, so can't watch it's exports. The value you passed is not a controller and not a controller exports. If your controller exports a literal value, try making your controller export an object instead`
      );
    }
    return value;
  }
  await controller.ready;
  if (typeof watchExports === "function") {
    if (isEsriInternalEnv() && controller.watchExports === void 0) {
      throw new Error(`The controller must implement watchExports method to support watching exports`);
    }
    const unsubscribe = controller.watchExports(
      (exports) => watchExports(exports, unsubscribe)
    );
  }
  return controller.exports;
};
var useRef = async (value) => {
  const controller = useRefSync(value);
  if (isEsriInternalEnv() && controller === void 0) {
    throw new Error(
      `Unable to resolve a controller from the provided value. The value you passed is not a controller and not a controller exports. If your controller exports a literal value, try making your controller export an object instead`
    );
  }
  await controller.ready;
  return controller;
};
var useRefSync = (value) => {
  const component = retrieveComponent();
  const controller = component.manager.internals.resolveExports(value);
  if (controller !== void 0) {
    return controller;
  }
  if (isController(value)) {
    return value;
  }
  const ambientChildController2 = retrieveAmbientChildController();
  if (ambientChildController2 !== void 0) {
    return ambientChildController2;
  }
  return void 0;
};
var shouldBypass = {
  setter: false,
  getter: false,
  readOnly: false
};
var elementToInstance = /* @__PURE__ */ new WeakMap();
var _a;
_a = controllerSymbol;
var Controller = class {
  constructor(component) {
    var _a8, _b3;
    this._callbacks = {
      hostConnected: [],
      hostDisconnected: [],
      hostLoad: [],
      hostLoaded: [],
      hostUpdate: [],
      hostUpdated: [],
      hostDestroy: [],
      hostLifecycle: []
    };
    this._ready = new Deferred();
    this._lifecycleCleanups = [];
    this.connectedCalled = false;
    this._loadCalled = false;
    this.loadedCalled = false;
    this[_a] = true;
    this.ready = this._ready.promise;
    this._exports = makeProvisionalValue(this);
    this._exportWatchers = /* @__PURE__ */ new Set();
    const resolvedComponent = toControllerHost(component ?? retrieveComponent(new.target.name));
    if (true) {
      Object.defineProperty(this, "component", {
        writable: false,
        enumerable: false,
        configurable: true,
        value: resolvedComponent
      });
      if ("hostDestroy" in this) {
        (_b3 = (_a8 = this.component.manager).ensureHasDestroy) == null ? void 0 : _b3.call(_a8);
      }
    } else {
      this.component = resolvedComponent;
    }
    this.component.addController(this);
    const manager = this.component.manager;
    const isInControllerManager = manager === void 0;
    if (!isInControllerManager) {
      setParentController(this);
      queueMicrotask(() => this.catchUpLifecycle());
    }
  }
  /**
   * If controller is being added dynamically, after the component
   * construction, then trigger connected and load right away
   */
  catchUpLifecycle() {
    const { manager } = this.component;
    const connectedWillStillHappen = !manager.connectedCalled;
    if (!connectedWillStillHappen && !this.connectedCalled) {
      this.triggerConnected();
    }
    const loadWillStillHappen = !manager._loadCalled;
    if (loadWillStillHappen) {
      return;
    }
    this.triggerLoad().then(() => {
      const loadedWillStillHappen = !manager.loadedCalled;
      if (loadedWillStillHappen) {
        return;
      }
      this.triggerLoaded();
    }).catch(console.error);
  }
  get exports() {
    return this._exports;
  }
  /**
   * Set controller's exports property (for usage with proxyExports()) and mark
   * controller as ready (for usage in other controllers). Also, triggers
   * re-render of the component
   */
  set exports(exports) {
    const oldExports = this._exports;
    if (oldExports !== exports) {
      this._exports = exports;
      this._exportWatchers.forEach(safeCall);
      if (this.connectedCalled && this.assignedProperty !== false) {
        this.component.requestUpdate(this.assignedProperty, oldExports);
      }
    }
    this._ready.resolve(exports);
  }
  setProvisionalExports(exports, proxy2 = true) {
    this._exports = proxy2 ? makeProvisionalValue(exports) : exports;
    this._exportWatchers.forEach(safeCall);
  }
  watchExports(callback) {
    const safeCallback = () => callback(this._exports);
    this._exportWatchers.add(safeCallback);
    return () => void this._exportWatchers.delete(safeCallback);
  }
  /**
   * A flexible utility for making sure a controller is loaded before it's used,
   * regardless of how or where a controller was defined:
   *
   * @example
   * makeGenericController(async (component, controller) => {
   *   // Await some controller from the component:
   *   await controller.use(component.someController);
   *   // Initialize new controllers
   *   await controller.use(load(importCoreReactiveUtils));
   *   await controller.use(new ViewModelController(component,newWidgetsHomeHomeViewModel));
   *   await controller.use(someController(component));
   * });
   *
   * @remarks
   * If your controller is not async, and you are not creating it async, then
   * you are not required to use controller.use - you can use it directly.
   * Similarly, accessing controllers after componentWillLoad callback does not
   * require awaiting them as they are guaranteed to be loaded by then.
   */
  get use() {
    setAmbientComponent(this.component);
    return use;
  }
  /**
   * Just like controller.use, but returns the controller itself, rather than it's
   * exports
   *
   * Use cases:
   * - You have a controller and you want to make sure it's loaded before you
   *   try to use it
   * - Your controller is not using exports, so you wish to access some props on
   *   it directly
   * - You have a controller exports only, and you want to retrieve the
   *   controller itself. This is useful if you wish to call .watchExports() or
   *   some other method on the controller
   */
  get useRef() {
    setAmbientComponent(this.component);
    return useRef;
  }
  /**
   * Like useRef, but doesn't wait for the controller to get ready
   *
   * @internal
   */
  get useRefSync() {
    setAmbientComponent(this.component);
    return useRefSync;
  }
  controllerRemoved() {
    if (this.component.el.isConnected) {
      this.triggerDisconnected();
    }
    this.triggerDestroy();
  }
  // Register a lifecycle callback
  onConnected(callback) {
    this._callbacks.hostConnected.push(callback);
  }
  onDisconnected(callback) {
    this._callbacks.hostDisconnected.push(callback);
  }
  onLoad(callback) {
    this._callbacks.hostLoad.push(callback);
  }
  onLoaded(callback) {
    this._callbacks.hostLoaded.push(callback);
  }
  onUpdate(callback) {
    this._callbacks.hostUpdate.push(callback);
  }
  onUpdated(callback) {
    this._callbacks.hostUpdated.push(callback);
  }
  onDestroy(callback) {
    var _a8, _b3;
    if (isEsriInternalEnv()) {
      (_b3 = (_a8 = this.component.manager).ensureHasDestroy) == null ? void 0 : _b3.call(_a8);
    }
    this._callbacks.hostDestroy.push(callback);
  }
  onLifecycle(callback) {
    this._callbacks.hostLifecycle.push(callback);
    if (this.connectedCalled && this.component.el.isConnected) {
      this._callLifecycle(callback);
    }
  }
  // Call each lifecycle hook
  /** @internal */
  triggerConnected() {
    const genericController = this;
    if (genericController.hostConnected) {
      safeCall(genericController.hostConnected, genericController);
    }
    this._callbacks.hostConnected.forEach(safeCall);
    this.triggerLifecycle();
    this.connectedCalled = true;
  }
  /** @internal */
  triggerDisconnected() {
    const genericController = this;
    if (genericController.hostDisconnected) {
      safeCall(genericController.hostDisconnected, genericController);
    }
    this._callbacks.hostDisconnected.forEach(safeCall);
    this._lifecycleCleanups.forEach(safeCall);
    this._lifecycleCleanups = [];
  }
  /** @internal */
  async triggerLoad() {
    if (this._loadCalled) {
      return;
    }
    this._loadCalled = true;
    const genericController = this;
    if (genericController.hostLoad) {
      await safeAsyncCall(genericController.hostLoad, genericController);
    }
    if (this._callbacks.hostLoad.length > 0) {
      await Promise.allSettled(this._callbacks.hostLoad.map(safeAsyncCall));
    }
    this._ready.resolve(this._exports);
  }
  /** @internal */
  triggerLoaded() {
    if (this.loadedCalled) {
      return;
    }
    const genericController = this;
    if (genericController.hostLoaded) {
      safeCall(genericController.hostLoaded, genericController);
    }
    this._callbacks.hostLoaded.forEach(safeCall);
    this.loadedCalled = true;
  }
  /** @internal */
  triggerUpdate(changes) {
    const genericController = this;
    if (genericController.hostUpdate) {
      safeCall(genericController.hostUpdate, genericController, changes);
    }
    this._callbacks.hostUpdate.forEach(callUpdate, changes);
  }
  /** @internal */
  triggerUpdated(changes) {
    const genericController = this;
    if (genericController.hostUpdated) {
      safeCall(genericController.hostUpdated, genericController, changes);
    }
    this._callbacks.hostUpdated.forEach(callUpdate, changes);
  }
  /** @internal */
  triggerDestroy() {
    const genericController = this;
    if (genericController.hostDestroy) {
      safeCall(genericController.hostDestroy, genericController);
    }
    this._callbacks.hostDestroy.forEach(safeCall);
  }
  /** @internal */
  triggerLifecycle() {
    const genericController = this;
    if (genericController.hostLifecycle) {
      this._callLifecycle(() => genericController.hostLifecycle());
    }
    this._callbacks.hostLifecycle.forEach(this._callLifecycle, this);
  }
  _callLifecycle(callback) {
    setAmbientComponent(this.component);
    const cleanupRaw = safeCall(callback);
    const cleanup = Array.isArray(cleanupRaw) ? cleanupRaw : [cleanupRaw];
    cleanup.forEach((cleanup2) => {
      if (typeof cleanup2 === "function") {
        this._lifecycleCleanups.push(cleanup2);
      } else if (typeof cleanup2 === "object" && typeof cleanup2.remove === "function") {
        this._lifecycleCleanups.push(cleanup2.remove);
      }
    });
  }
};
function callUpdate(callback) {
  safeCall(callback, void 0, this);
}
var GenericController = Controller;
function makeProvisionalValue(base) {
  if (typeof base !== "object" && typeof base !== "function" || base === null) {
    return base;
  }
  const proxy2 = new Proxy(base, {
    get(target, prop, receiver) {
      if (cyclical.has(prop) && prop in target && target[prop] === proxy2) {
        return void 0;
      }
      if (prop in target || prop in Promise.prototype || typeof prop === "symbol") {
        return typeof target === "function" ? target[prop] : Reflect.get(target, prop, receiver);
      }
      if (isEsriInternalEnv()) {
        if (false) {
          return;
        }
        console.error(
          `Trying to access "${prop.toString()}" on the controller before it's loaded. ${accessBeforeLoad}`
        );
      }
      return void 0;
    },
    set: (target, prop, newValue, receiver) => {
      if (isEsriInternalEnv()) {
        console.error(`Trying to set "${prop.toString()}" on the controller before it's loaded. ${accessBeforeLoad}`);
      }
      return Reflect.set(target, prop, newValue, receiver);
    }
  });
  return proxy2;
}
var cyclical = /* @__PURE__ */ new Set(["exports", "_exports"]);
var accessBeforeLoad = isEsriInternalEnv() ? [
  "This might be the case if you are trying to access an async controller in ",
  "connectedCallback(). Or, if you are using it inside of ",
  "componentWillLoad()/another controller without controller.use. Example correct ",
  "usage:\n",
  "makeController(async (component, controller)=>{ await controller.use(someOtherController); });"
].join("") : void 0;
function toControllerHost(component) {
  if (isEsriInternalEnv()) {
    if ("addController" in component) {
      return component;
    } else {
      throw new Error(
        "Component does not implement ControllerHost. This might be because you forgot to add 'manager: Controller<this> = useControllerManager(this);' in your component, or you tried to use some controller before that line"
      );
    }
  } else {
    return component;
  }
}
function trackPropertyKey(object, onResolved, defaultValue) {
  const keys = Object.keys(object);
  const keyCount = keys.length;
  if (keyTrackMap === void 0) {
    queueMicrotask(keyTrackResolve);
  }
  keyTrackMap ?? (keyTrackMap = /* @__PURE__ */ new Map());
  let pendingTrackers = keyTrackMap.get(object);
  if (pendingTrackers === void 0) {
    pendingTrackers = { callbacks: [], keyCount };
    keyTrackMap.set(object, pendingTrackers);
  }
  if (pendingTrackers.keyCount !== keyCount) {
    pendingTrackers.callbacks.forEach((resolve) => resolve(keys));
    pendingTrackers.callbacks = [];
    pendingTrackers.keyCount = keyCount;
  }
  pendingTrackers.callbacks.push((keys2) => {
    const callback = (key2) => safeCall(onResolved, null, key2);
    const key = keys2[keyCount];
    if (key === void 0) {
      callback(void 0);
    } else if (object[key] === defaultValue) {
      callback(key);
    } else {
      callback(void 0);
    }
  });
  return defaultValue;
}
var keyTrackMap = void 0;
function keyTrackResolve() {
  Array.from((keyTrackMap == null ? void 0 : keyTrackMap.entries()) ?? []).forEach(([object, { callbacks }]) => {
    const keys = Object.keys(object);
    callbacks.forEach((commit) => commit(keys));
  });
  keyTrackMap = void 0;
}
function watch(component, property2, callback) {
  var _a22;
  const genericProperty = property2;
  if (isEsriInternalEnv()) {
    const type = getMemberType(component, genericProperty);
    if (type === void 0) {
      throw new Error(
        component.manager.isLit ? `Trying to watch a non-@property, non-@state property "${genericProperty}". Either convert it into a @state() to be able to use watch() on it, or use the get/set syntax` : `Trying to watch a non-@Prop, non-@State property "${genericProperty}". Convert it into a @State() or @Prop property if you need to use watch() on it`
      );
    }
  }
  const internals = component.manager.internals;
  (_a22 = internals.allWatchers)[genericProperty] ?? (_a22[genericProperty] = []);
  const watchers = internals.allWatchers[genericProperty];
  const genericCallback = callback;
  const safeCallback = (newValue, oldValue, propertyName) => safeCall(genericCallback, null, newValue, oldValue, propertyName);
  watchers.push(safeCallback);
  return () => {
    const index = watchers.indexOf(safeCallback);
    if (index !== -1) {
      watchers.splice(index, 1);
    }
  };
}
var ComponentInternals = class {
  constructor(component) {
    this.enabledWatchers = {};
    this.allWatchers = {};
    this.enableReadonly = () => {
      this.enableReadonly = void 0;
      if (!this.component.manager.isLit) {
        return;
      }
      const internals = this.component.manager.internals;
      Object.entries(internals.members).forEach(([name2, [type]]) => {
        var _a22;
        const isReadOnly = type & 2048;
        if (isReadOnly) {
          (_a22 = internals.setters)[name2] ?? (_a22[name2] = []);
          internals.setters[name2].push(internals.readonlySetter);
        }
      });
    };
    this.trackedValue = nothing;
    this.keyTrackers = [];
    this.getters = {};
    this.setters = {};
    this.accessorGetter = {};
    this.accessorSetter = {};
    this._exports = /* @__PURE__ */ new WeakMap();
    this.readonlySetter = (newValue, _oldValue, property2) => {
      if (shouldBypass.readOnly) {
        return newValue;
      }
      throw new Error(
        `Cannot assign to read-only property "${property2}" of ${this.component.el.tagName.toLowerCase()}. Trying to assign "${String(
          newValue
        )}"`
      );
    };
    if (true) {
      Object.defineProperty(this, "component", {
        writable: false,
        enumerable: false,
        configurable: true,
        value: component
      });
    } else {
      this.component = component;
    }
  }
  firePropTrackers(key, value) {
    const trackers = this.keyTrackers;
    this.trackedValue = nothing;
    this.keyTrackers = [];
    trackers.forEach((tracker) => tracker(key, value));
  }
  // REFACTOR: once Stencil is no longer supported, simplify this with Lit's getPropertyDescriptor(), or https://github.com/shoelace-style/shoelace/issues/1990
  /**
   * Configure a getter or setter for a given \@Prop/\@State
   *
   * Since props are defined on the prototype, they are shared between all
   * instances of a component. Thus, instead of passing a reference to the
   * getter/setter function, you should update the
   * ComponentInternals.getters/setters properties, and then call getSetProxy
   * to apply the changes to the prototype
   */
  getSetProxy(property2) {
    const component = this.component;
    const classPrototype = component.constructor.prototype;
    this._getSetProxy(classPrototype, property2, "class");
    if (component.manager.isLit) {
      return;
    }
    const htmlPrototype = component.el.constructor.prototype;
    if (classPrototype !== htmlPrototype) {
      this._getSetProxy(htmlPrototype, property2, "html");
    }
  }
  _getSetProxy(prototype, name2, type) {
    const component = this.component;
    const propType = getMemberType(component, name2);
    let descriptor;
    do {
      descriptor = Object.getOwnPropertyDescriptor(prototype, name2);
    } while (!descriptor && (prototype = Object.getPrototypeOf(prototype)));
    if (isEsriInternalEnv()) {
      const tolerateNotFound = type === "html";
      if ((descriptor == null ? void 0 : descriptor.set) === void 0 || descriptor.get === void 0) {
        if (descriptor !== void 0 && "value" in descriptor) {
          throw new Error(
            `getSet() should only be used on @Prop/@property/@State/@state properties. For internal component properties, use regular get/set syntax. Tried to use it on "${name2}" in ${component.el.tagName}`
          );
        } else if (tolerateNotFound) {
          return;
        } else {
          throw new Error(`Unable to find "${name2}" property on the ${component.el.tagName} component`);
        }
      }
      if (propType === void 0) {
        throw new Error("Unable to retrieve prop type");
      }
    } else if (!descriptor) {
      return void 0;
    }
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;
    const isGetterAlreadyOverwritten = customAccessor in originalGet;
    const isSetterAlreadyOverwritten = customAccessor in originalSet;
    if (isGetterAlreadyOverwritten && isSetterAlreadyOverwritten) {
      return;
    }
    const shouldOverwriteGet = !isGetterAlreadyOverwritten;
    const shouldOverwriteSet = !isSetterAlreadyOverwritten;
    const finalGetter = shouldOverwriteGet ? function getter() {
      let value = originalGet.call(this);
      const component2 = elementToInstance.get(this);
      if (shouldBypass.getter || component2 === void 0) {
        return value;
      }
      const internals = component2.manager.internals;
      value = internals.accessorGetter[name2](value, name2);
      const getters = internals.getters[name2] ?? emptyArray;
      for (let i = 0; i < getters.length; i++) {
        value = getters[i](value, name2);
      }
      return value;
    } : originalGet;
    const finalSetter = shouldOverwriteSet ? function setter(rawNewValue) {
      var _a8;
      const oldValue = originalGet.call(this);
      const component2 = elementToInstance.get(this);
      if (component2 === void 0) {
        originalSet.call(this, rawNewValue);
        return;
      }
      let newValue = component2.manager.isLit ? (
        /*
         * Cast `null` to `undefined`.
         * See https://devtopia.esri.com/WebGIS/arcgis-web-components/discussions/1299
         */
        rawNewValue ?? void 0
      ) : parsePropertyValue(rawNewValue, propType);
      const internals = component2.manager.internals;
      if (newValue === oldValue) {
        originalSet.call(this, newValue);
      } else {
        const setters = shouldBypass.setter ? emptyArray : internals.setters[name2] ?? emptyArray;
        for (let i = 0; i < setters.length; i++) {
          newValue = setters[i](newValue, oldValue, name2);
          if (newValue === oldValue) {
            break;
          }
        }
        newValue = internals.accessorSetter[name2](newValue, oldValue, name2);
        originalSet.call(this, newValue);
        if (newValue !== oldValue) {
          (_a8 = internals.enabledWatchers[name2]) == null ? void 0 : _a8.forEach((watcher) => watcher(newValue, oldValue, name2));
        }
      }
      if (internals.keyTrackers.length > 0) {
        internals == null ? void 0 : internals.firePropTrackers(name2, rawNewValue);
      }
    } : originalSet;
    if (shouldOverwriteGet) {
      finalGetter[customAccessor] = true;
    }
    if (shouldOverwriteSet) {
      finalSetter[customAccessor] = true;
    }
    Object.defineProperty(prototype, name2, {
      ...descriptor,
      get: finalGetter,
      set: finalSetter
    });
  }
  /**
   * Associate an exports object with a controller for reverse lookup in
   * controller.use
   */
  markExports(controller, exports) {
    if (typeof exports === "object" && exports !== null || typeof exports === "function") {
      this._exports.set(exports, controller);
    }
  }
  resolveExports(exports) {
    if (typeof exports === "object" && exports !== null || typeof exports === "function") {
      return this._exports.get(exports);
    } else {
      return void 0;
    }
  }
};
var emptyArray = [];
var customAccessor = Symbol();
var nothing = true ? Symbol.for(
  // Use Symbol.for in dev mode to make it easier to maintain state when doing HMR.
  `${name}: nothing`
) : (
  // eslint-disable-next-line symbol-description
  Symbol()
);
function trackPropKey(component, onResolved, defaultValue) {
  const internals = component.manager.internals;
  if (internals.trackedValue !== nothing && internals.trackedValue !== defaultValue) {
    internals.firePropTrackers(void 0, void 0);
  }
  if (internals.keyTrackers.length === 0) {
    queueMicrotask(() => internals.firePropTrackers(void 0, void 0));
  }
  internals.trackedValue = defaultValue;
  internals.keyTrackers.push((key, value) => safeCall(onResolved, void 0, defaultValue === value ? key : void 0));
  return defaultValue;
}
function trackKey(hostsCandidates = [
  retrieveComponent(),
  ...retrieveParentControllers()
], onResolved, defaultValue) {
  const candidateHosts = Array.isArray(hostsCandidates) ? hostsCandidates : [hostsCandidates];
  let leftToResolve = candidateHosts.length + 1;
  const resolved = (resolution) => {
    leftToResolve -= 1;
    if (resolution !== void 0) {
      leftToResolve = Math.min(leftToResolve, 0);
    }
    if (leftToResolve === 0) {
      onResolved(resolution);
    }
  };
  candidateHosts.forEach(
    (host) => trackPropertyKey(
      host,
      (key) => resolved(
        key === void 0 ? void 0 : {
          key,
          host,
          isReactive: false
        }
      ),
      defaultValue
    )
  );
  const component = candidateHosts.find(
    (host) => "manager" in host && typeof host.manager === "object" && host.manager.component === host
  );
  if (component) {
    trackPropKey(
      component,
      (key) => resolved(
        key === void 0 ? void 0 : {
          key,
          host: component,
          isReactive: true
        }
      ),
      defaultValue
    );
  }
  return defaultValue;
}
function bypassReadOnly(callback) {
  shouldBypass.readOnly = true;
  try {
    return callback();
  } finally {
    shouldBypass.readOnly = false;
  }
}
var proxyExports = (Class) => (...args) => {
  const ambientControllers2 = retrieveParentControllers();
  const instance = new Class(...args);
  const initialExports = instance.exports;
  setParentController(ambientControllers2.at(-1));
  const internals = instance.component.manager.internals;
  internals.markExports(instance, initialExports);
  instance.watchExports((exports) => internals.markExports(instance, exports));
  setAmbientChildController(instance);
  const hostCandidates = [instance.component, ...ambientControllers2].reverse();
  return trackKey(
    hostCandidates,
    (resolution) => resolution === void 0 ? void 0 : setProxy(instance, resolution, initialExports),
    initialExports
  );
};
function setProxy(controller, { host, key, isReactive: assignedToProp }, initialExports) {
  const genericHost = host;
  const controllerValueChanged = genericHost[key] !== controller.exports;
  const hostValueChanged = genericHost[key] !== initialExports;
  const controllerUpdatedExports = initialExports !== controller.exports;
  if (controllerValueChanged && !hostValueChanged && controllerUpdatedExports) {
    genericHost[key] = controller.exports;
  }
  const isProxyExportsOnComponent = host === controller.component;
  if (isProxyExportsOnComponent) {
    if (assignedToProp) {
      const internals = controller.component.manager.internals;
      if (hostValueChanged) {
        internals.markExports(controller, genericHost[key]);
      }
      watch(controller.component, key, (value) => {
        if (value !== controller.exports) {
          internals.markExports(controller, value);
        }
      });
    }
    controller.assignedProperty = assignedToProp ? void 0 : key;
  }
  controller.watchExports(() => {
    var _a8;
    if (genericHost[key] === controller.exports) {
      return;
    }
    const manager = controller.component.manager;
    const isReadOnly = (_a8 = manager.internals.setters[key]) == null ? void 0 : _a8.includes(manager.internals.readonlySetter);
    if (isReadOnly) {
      bypassReadOnly(() => {
        genericHost[key] = controller.exports;
      });
    } else {
      genericHost[key] = controller.exports;
    }
  });
}

// node_modules/@arcgis/components-controllers/dist/index.js
var useControllerManager = (component, forceUpdate) => new ControllerManager(component, forceUpdate);
var ControllerManager = class extends GenericController {
  constructor(component, forceUpdate) {
    const isLit = "addController" in component;
    if (isEsriInternalEnv() && !isLit) {
      Object.defineProperty(component.el, "__component", {
        value: component
      });
      ({});
    }
    const controllers = /* @__PURE__ */ new Set();
    function addController(controller) {
      var _a8;
      controllers.add(controller);
      if (!(controllerSymbol in controller) && component.renderRoot && component.el.isConnected) {
        (_a8 = controller.hostConnected) == null ? void 0 : _a8.call(controller);
      }
    }
    function removeController(controller) {
      var _a8;
      void controllers.delete(controller);
      (_a8 = controller.controllerRemoved) == null ? void 0 : _a8.call(controller);
    }
    const controllerHost = component;
    controllerHost.addController = addController;
    controllerHost.removeController = removeController;
    if (!isLit) {
      const update = forceUpdate ?? component.constructor.__forceUpdate;
      controllerHost.requestUpdate = () => update(component);
    }
    if (isEsriInternalEnv()) {
      const stencilToLitMapping = {
        componentDidLoad: "loaded",
        componentDidRender: "updated",
        componentDidUpdate: "updated",
        componentShouldUpdate: "shouldUpdate",
        componentWillLoad: "load",
        componentWillRender: "willUpdate",
        componentWillUpdate: "willUpdate"
      };
      Object.entries(stencilToLitMapping).forEach(([stencilMethod, litMethod]) => {
        if (isLit && stencilMethod in component) {
          throw new Error(
            `Unexpected ${stencilMethod}() in a Lit component ${component.el.tagName.toLowerCase()}. In Lit, you should use ${litMethod}() instead`
          );
        }
        if (!isLit && litMethod in component) {
          throw new Error(
            `Unexpected ${litMethod}() in a Stencil component ${component.el.tagName.toLowerCase()}. In Stencil, you should use ${litMethod}() instead`
          );
        }
      });
      if (isLit) {
        let i = 0;
        let isLitElementClass = false;
        for (let prototype = component; !isLitElementClass; i++) {
          if (prototype === null) {
            throw new Error("Expected controllers to be used in a LitElement class");
          }
          if (Object.hasOwn(prototype, "_load")) {
            isLitElementClass = true;
            break;
          }
          prototype = Object.getPrototypeOf(prototype);
        }
        if (i < 1) {
          throw new Error(
            "It looks like you are trying to call useControllerManager in a component that uses LitElement imported from 'lit'. useControllerManager should only be used in the LitElement coming from `@arcgis/lumina`"
          );
        }
      }
    }
    super(component);
    this.internals = new ComponentInternals(this.component);
    this.destroyed = false;
    this._updatePromise = new Deferred();
    this._originalLifecycles = {};
    this.isLit = isLit;
    this.component.manager = this;
    retrieveComponentMembers(component, isLit);
    this._controllers = controllers;
    this.exports = void 0;
    this.hasDestroy = autoDestroyDisabledPropName in this.component && typeof this.component.destroy === "function";
    this._bindLifecycleMethods();
    const internals = this.internals;
    Object.keys(internals.members).forEach((name2) => {
      internals.accessorGetter[name2] = defaultGetterSetter;
      internals.accessorSetter[name2] = defaultGetterSetter;
      internals.getSetProxy(name2);
    });
    if (isLit) {
      this.internals.enabledWatchers = this.internals.allWatchers;
    } else {
      Object.defineProperty(component, "updateComplete", {
        get: async () => await this._updatePromise.promise
      });
    }
    queueMicrotask(internals.enableReadonly);
    setAmbientComponent(component);
    elementToInstance.set(component.el, component);
    elementToInstance.set(component, component);
  }
  _bindLifecycleMethods() {
    const component = this.component;
    const isLit = this.isLit;
    const isStencilDistBuild = component.el === component;
    this._originalLifecycles = {
      // These component's callbacks will be called by Lit, so we don't have to
      _connectedCallback: isLit || isStencilDistBuild ? void 0 : component.connectedCallback,
      _disconnectedCallback: isLit || isStencilDistBuild ? void 0 : component.disconnectedCallback,
      _load: isLit ? component.load : component.componentWillLoad,
      _loaded: isLit ? component.loaded : component.componentDidLoad,
      _willUpdate: isLit ? void 0 : component.componentWillUpdate,
      _updated: isLit ? void 0 : component.componentDidUpdate,
      _destroy: component.destroy
    };
    const hostConnected = this._connectedCallback.bind(this);
    const hostDisconnected = this._disconnectedCallback.bind(this);
    const hostUpdate = this._update.bind(this);
    const hostUpdated = this._updated.bind(this);
    if (isLit) {
      component.constructor.prototype.addController.call(component, {
        // Lit will call these callbacks
        hostConnected,
        hostDisconnected,
        hostUpdate,
        hostUpdated
      });
    } else {
      component.connectedCallback = hostConnected;
      component.disconnectedCallback = hostDisconnected;
      component.componentWillLoad = this._load.bind(this);
      component.componentDidLoad = this._loaded.bind(this);
      component.componentWillUpdate = hostUpdate;
      component.componentDidUpdate = hostUpdated;
    }
    if (this.hasDestroy) {
      component.destroy = this.destroy.bind(this);
    }
  }
  /**
   * Private because this is not supposed to be called by Component directly.
   * Instead, _bindLifecycleMethods will take care of that. Otherwise, you risk
   * calling lifecycle methods twice.
   *
   * @internal
   */
  _connectedCallback() {
    var _a8, _b3, _c;
    if (this.destroyed) {
      const tagName = this.component.el.tagName.toLowerCase();
      this.component.el.remove();
      throw new Error(
        `The ${tagName} component has already been destroyed. It cannot be used again. If you meant to disconnect and reconnect a component without automatic destroy, set the ${autoDestroyDisabledPropName} prop.`
      );
    }
    if (this._autoDestroyTimeout !== void 0) {
      clearTimeout(this._autoDestroyTimeout);
    }
    const internals = this.internals;
    internals.enabledWatchers = internals.allWatchers;
    keyTrackResolve();
    (_a8 = internals.enableReadonly) == null ? void 0 : _a8.call(internals);
    this._controllers.forEach(callConnected);
    (_b3 = this._originalLifecycles._connectedCallback) == null ? void 0 : _b3.call(this.component);
    if (isEsriInternalEnv()) {
      (_c = devOnlySetPersistentControllerData) == null ? void 0 : _c(this, true);
    }
  }
  /** @internal */
  _disconnectedCallback() {
    var _a8;
    if (this.destroyed) {
      return;
    }
    this._controllers.forEach(callDisconnected);
    (_a8 = this._originalLifecycles._disconnectedCallback) == null ? void 0 : _a8.call(this.component);
    if (this.hasDestroy) {
      this._setAutoDestroyTimeout();
    }
  }
  /** @internal */
  async _load() {
    var _a8;
    await Promise.allSettled(Array.from(this._controllers, callLoad));
    await ((_a8 = this._originalLifecycles._load) == null ? void 0 : _a8.call(this.component));
    if (this.hasDestroy) {
      watch(this.component, autoDestroyDisabledPropName, () => this._setAutoDestroyTimeout());
    }
  }
  /** @internal */
  _loaded() {
    var _a8;
    this._controllers.forEach(callLoaded);
    (_a8 = this._originalLifecycles._loaded) == null ? void 0 : _a8.call(this.component);
  }
  _update() {
    var _a8;
    const maybeLitComponent = this.component;
    this._controllers.forEach(callUpdate2, maybeLitComponent.$changes);
    return (_a8 = this._originalLifecycles._willUpdate) == null ? void 0 : _a8.call(this.component);
  }
  _updated() {
    var _a8;
    const maybeLitComponent = this.component;
    this._controllers.forEach(callUpdated, maybeLitComponent.$changes);
    (_a8 = this._originalLifecycles._updated) == null ? void 0 : _a8.call(this.component);
    if (this.isLit) {
      maybeLitComponent.$changes = /* @__PURE__ */ new Map();
    } else {
      const updatePromise = this._updatePromise;
      this._updatePromise = new Deferred();
      updatePromise.resolve(true);
    }
  }
  async destroy() {
    var _a8, _b3;
    if (isEsriInternalEnv()) {
      (_a8 = this.ensureHasDestroy) == null ? void 0 : _a8.call(this);
    }
    if (this.destroyed) {
      return;
    }
    if (this.component.el.isConnected) {
      this.hasDestroy = false;
      try {
        this.component.el.remove();
      } finally {
        this.hasDestroy = true;
      }
    }
    this._autoDestroyTimeout = void 0;
    this.destroyed = true;
    this._controllers.forEach(callDestroy);
    this._controllers.clear();
    await ((_b3 = this._originalLifecycles._destroy) == null ? void 0 : _b3.call(this.component));
  }
  _setAutoDestroyTimeout() {
    if (this._autoDestroyTimeout !== void 0) {
      clearTimeout(this._autoDestroyTimeout);
    }
    if (!this.component.el.isConnected && !this.component.autoDestroyDisabled) {
      const destroy = () => void this.destroy().catch(console.error);
      if (isEsriInternalEnv() && autoDestroyOnDisconnectTimeout === 0) {
        queueMicrotask(destroy);
      } else {
        this._autoDestroyTimeout = devToolsAwareTimeout(destroy, autoDestroyOnDisconnectTimeout);
      }
    }
  }
};
if (isEsriInternalEnv()) {
  ControllerManager.prototype.ensureHasDestroy = function ensureHasDestroy() {
    if (!this.hasDestroy) {
      throw new Error(
        `
          If the component uses a controller that uses destroy() method, then the
          component must have the following properties:
          /**
           * If true, the component will not be destroyed automatically when it is
           * disconnected from the document. This is useful when you want to move the
           * component to a different place on the page, or temporarily hide it. If this
           * is set, make sure to call the \`destroy\` method when you are done to prevent
           * memory leaks.
           */
          @${this.isLit ? "property" : "Prop"}() ${autoDestroyDisabledPropName} = false;
          
          /** Permanently destroy the component */
          @${this.isLit ? "method" : "Method"}()
          async destroy(): Promise<void> {
            await this.manager.destroy();
          }
          `.trim().split("\n").map((line) => line.trim()).join("\n")
      );
    }
  };
}
var autoDestroyDisabledPropName = "autoDestroyDisabled";
var autoDestroyOnDisconnectTimeout = 1e3;
var exportsForTests = isEsriInternalEnv() ? {
  setAutoDestroyOnDisconnectTimeout: (timeout) => {
    autoDestroyOnDisconnectTimeout = timeout;
  }
} : void 0;
var defaultGetterSetter = (value) => value;
function callConnected(controller) {
  if ("triggerConnected" in controller) {
    controller.triggerConnected();
  } else {
    safeCall(controller.hostConnected, controller);
  }
}
function callDisconnected(controller) {
  if ("triggerDisconnected" in controller) {
    controller.triggerDisconnected();
  } else {
    safeCall(controller.hostDisconnected, controller);
  }
}
async function callLoad(controller) {
  if ("triggerLoad" in controller) {
    await controller.triggerLoad();
  } else {
    await safeAsyncCall(controller.hostLoad, controller);
  }
}
function callLoaded(controller) {
  if ("triggerLoaded" in controller) {
    controller.triggerLoaded();
  } else {
    safeCall(controller.hostLoaded, controller);
  }
}
function callUpdate2(controller) {
  if ("triggerUpdate" in controller) {
    controller.triggerUpdate(this);
  } else {
    safeCall(controller.hostUpdate, controller, this);
  }
}
function callUpdated(controller) {
  if ("triggerUpdated" in controller) {
    controller.triggerUpdated(this);
  } else {
    safeCall(controller.hostUpdated, controller, this);
  }
}
function callDestroy(controller) {
  if ("triggerDestroy" in controller) {
    controller.triggerDestroy();
  } else {
    safeCall(controller.hostDestroy, controller);
  }
}
var makeController = (constructor) => proxy(void 0, constructor);
var makeGenericController = (constructor) => (component) => proxy(
  component,
  /**
   * GenericController is identical to Controller, in all except for typing.
   * So dying a type-cast here so as not to needlessly add one more object
   * to the prototype chain
   */
  constructor
);
var FunctionalController = class extends Controller {
  constructor(component, constructor) {
    super(component);
    const originalExports = this.exports;
    try {
      setAmbientComponent(this.component);
      const value = constructor(this.component, this);
      const constructorChangedExports = this.exports !== originalExports;
      if (value instanceof Promise) {
        if (!constructorChangedExports) {
          this.setProvisionalExports(value);
        }
        const resolved = value.then((result) => {
          this.exports = result;
          super.catchUpLifecycle();
        }).catch((error) => {
          this._ready.reject(error);
          console.error(error);
        });
        this.onLoad(async () => await resolved);
      } else {
        if (!constructorChangedExports || value !== void 0) {
          this.exports = value;
        }
        queueMicrotask(() => super.catchUpLifecycle());
      }
    } catch (error) {
      this._ready.reject(error);
      console.error(error);
    }
  }
  /** Noop - will be called in the constructor instead */
  catchUpLifecycle() {
    return;
  }
};
var proxy = proxyExports(FunctionalController);
var useWatchAttributes = (attributes, callback) => new AttributeWatchController(attributes, callback);
var AttributeWatchController = class extends Controller {
  constructor(_attributes, _callback) {
    super();
    this._attributes = _attributes;
    this._callback = _callback;
    this._observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (_attributes.includes(mutation.attributeName)) {
          _callback.call(
            this.component,
            this.component.el.getAttribute(mutation.attributeName),
            mutation.oldValue,
            mutation.attributeName
          );
        }
      });
    });
  }
  hostConnected() {
    this._attributes.forEach((attribute) => {
      if (this.component.el.hasAttribute(attribute)) {
        this._callback.call(this.component, null, this.component.el.getAttribute(attribute), attribute);
      }
    });
    this._observer.observe(this.component.el, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: this._attributes
    });
  }
  hostDisconnected() {
    this._observer.disconnect();
  }
};
var makeT9nController = (getAssetPath) => (options = {}) => (
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  makeController((component, controller) => {
    const locale = getElementLocales(component.el);
    const pending = {
      _lang: locale.lang,
      _t9nLocale: locale.t9nLocale,
      _loading: true
    };
    const componentWithOverrides = component;
    controller.onLifecycle(
      () => startLocaleObserver(
        component.el,
        () => getAssetPath("./assets"),
        ({ t9nLocale, t9nStrings, lang }) => {
          const withoutOverrides = {
            ...t9nStrings,
            _lang: lang,
            _t9nLocale: t9nLocale,
            _loading: false
          };
          controller.exports = withoutOverrides;
          const label = t9nStrings.componentLabel;
          if (typeof label === "string" && "label" in component && component.label == null) {
            component.label ?? (component.label = label);
          }
          applyOverrides(componentWithOverrides.messageOverrides);
        },
        options.name
      )
    );
    function applyOverrides(messageOverrides) {
      const currentValue = controller.exports;
      const rawMessages = currentValue._original ?? currentValue;
      const updated = deepMerge(rawMessages, messageOverrides);
      if (messageOverrides) {
        updated._original = rawMessages;
      }
      controller.exports = updated;
    }
    if ("messageOverrides" in componentWithOverrides) {
      controller.onLifecycle(() => watch(componentWithOverrides, "messageOverrides", applyOverrides));
    }
    if (options.blocking) {
      controller.setProvisionalExports(pending, false);
      return controller.ready;
    } else {
      return pending;
    }
  })
);
function deepMerge(original, overwrites) {
  if (!overwrites) {
    return original;
  }
  const merged = { ...original };
  Object.entries(overwrites).forEach(([key, value]) => {
    if (typeof value === "object") {
      merged[key] = deepMerge(original[key], value);
    } else {
      merged[key] = value ?? original[key];
    }
  });
  return merged;
}

// node_modules/@lit/reactive-element/development/css-tag.js
var NODE_MODE = false;
var global = globalThis;
var supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === void 0 || global.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var cssTagCache = /* @__PURE__ */ new WeakMap();
var CSSResult = class {
  constructor(cssText, strings, safeToken) {
    this["_$cssResult$"] = true;
    if (safeToken !== constructionToken) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.
  get styleSheet() {
    let styleSheet = this._styleSheet;
    const strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === void 0) {
      const cacheable = strings !== void 0 && strings.length === 1;
      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }
      if (styleSheet === void 0) {
        (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
};
var textFromCSSResult = (value) => {
  if (value["_$cssResult$"] === true) {
    return value.cssText;
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`);
  }
};
var unsafeCSS = (value) => new CSSResult(typeof value === "string" ? value : String(value), void 0, constructionToken);
var css = (strings, ...values) => {
  const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v2, idx) => acc + textFromCSSResult(v2) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
};
var adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  } else {
    for (const s of styles) {
      const style = document.createElement("style");
      const nonce = global["litNonce"];
      if (nonce !== void 0) {
        style.setAttribute("nonce", nonce);
      }
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    }
  }
};
var cssResultFromStyleSheet = (sheet) => {
  let cssText = "";
  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
var getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === void 0 ? (s) => s : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;

// node_modules/lit-html/development/lit-html.js
var DEV_MODE = true;
var ENABLE_EXTRA_SECURITY_HOOKS = true;
var ENABLE_SHADYDOM_NOPATCH = true;
var NODE_MODE2 = false;
var global2 = globalThis;
var debugLogEvent = DEV_MODE ? (event) => {
  const shouldEmit = global2.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global2.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var debugLogRenderId = 0;
var issueWarning;
if (DEV_MODE) {
  global2.litIssuedWarnings ?? (global2.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!global2.litIssuedWarnings.has(warning)) {
      console.warn(warning);
      global2.litIssuedWarnings.add(warning);
    }
  };
  issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
}
var _a2, _b;
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_a2 = global2.ShadyDOM) == null ? void 0 : _a2.inUse) && ((_b = global2.ShadyDOM) == null ? void 0 : _b.noPatch) === true ? global2.ShadyDOM.wrap : (node) => node;
var trustedTypes = global2.trustedTypes;
var policy = trustedTypes ? trustedTypes.createPolicy("lit-html", {
  createHTML: (s) => s
}) : void 0;
var identityFunction = (value) => value;
var noopSanitizer = (_node, _name, _type) => identityFunction;
var setSanitizer = (newSanitizer) => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.`);
  }
  sanitizerFactoryInternal = newSanitizer;
};
var _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};
var createSanitizer = (node, name2, type) => {
  return sanitizerFactoryInternal(node, name2, type);
};
var boundAttributeSuffix = "$lit$";
var marker = `lit$${Math.random().toFixed(9).slice(2)}$`;
var markerMatch = "?" + marker;
var nodeMarker = `<${markerMatch}>`;
var d = NODE_MODE2 && global2.document === void 0 ? {
  createTreeWalker() {
    return {};
  }
} : document;
var createMarker = () => d.createComment("");
var isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
var isArray = Array.isArray;
var isIterable = (value) => isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof (value == null ? void 0 : value[Symbol.iterator]) === "function";
var SPACE_CHAR = `[ 	
\f\r]`;
var ATTR_VALUE_CHAR = `[^ 	
\f\r"'\`<>=]`;
var NAME_CHAR = `[^\\s"'>=/]`;
var textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var COMMENT_START = 1;
var TAG_NAME = 2;
var DYNAMIC_TAG_NAME = 3;
var commentEndRegex = /-->/g;
var comment2EndRegex = />/g;
var tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, "g");
var ENTIRE_MATCH = 0;
var ATTRIBUTE_NAME = 1;
var SPACES_AND_EQUALS = 2;
var QUOTE_CHAR = 3;
var singleQuoteAttrEndRegex = /'/g;
var doubleQuoteAttrEndRegex = /"/g;
var rawTextElement = /^(?:script|style|textarea|title)$/i;
var HTML_RESULT = 1;
var SVG_RESULT = 2;
var MATHML_RESULT = 3;
var ATTRIBUTE_PART = 1;
var CHILD_PART = 2;
var PROPERTY_PART = 3;
var BOOLEAN_ATTRIBUTE_PART = 4;
var EVENT_PART = 5;
var ELEMENT_PART = 6;
var COMMENT_PART = 7;
var tag = (type) => (strings, ...values) => {
  if (DEV_MODE && strings.some((s) => s === void 0)) {
    console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences.");
  }
  if (DEV_MODE) {
    if (values.some((val) => val == null ? void 0 : val["_$litStatic$"])) {
      issueWarning("", `Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);
    }
  }
  return {
    // This property needs to remain unminified.
    ["_$litType$"]: type,
    strings,
    values
  };
};
var html = tag(HTML_RESULT);
var svg = tag(SVG_RESULT);
var mathml = tag(MATHML_RESULT);
var noChange = Symbol.for("lit-noChange");
var nothing2 = Symbol.for("lit-nothing");
var templateCache = /* @__PURE__ */ new WeakMap();
var walker = d.createTreeWalker(
  d,
  129
  /* NodeFilter.SHOW_{ELEMENT|COMMENT} */
);
var sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  if (!isArray(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    if (DEV_MODE) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, "\n");
    }
    throw new Error(message);
  }
  return policy !== void 0 ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
var getTemplateHtml = (strings, type) => {
  const l2 = strings.length - 1;
  const attrNames = [];
  let html2 = type === SVG_RESULT ? "<svg>" : type === MATHML_RESULT ? "<math>" : "";
  let rawTextEndRegex;
  let regex = textEndRegex;
  for (let i = 0; i < l2; i++) {
    const s = strings[i];
    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match;
    while (lastIndex < s.length) {
      regex.lastIndex = lastIndex;
      match = regex.exec(s);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === "!--") {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== void 0) {
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== void 0) {
          if (rawTextElement.test(match[TAG_NAME])) {
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, "g");
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== void 0) {
          if (DEV_MODE) {
            throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === ">") {
          regex = rawTextEndRegex ?? textEndRegex;
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === void 0) {
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === void 0 ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        regex = tagEndRegex;
        rawTextEndRegex = void 0;
      }
    }
    if (DEV_MODE) {
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, "unexpected parse state B");
    }
    const end = regex === tagEndRegex && strings[i + 1].startsWith("/>") ? " " : "";
    html2 += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? i : end);
  }
  const htmlResult = html2 + (strings[l2] || "<?>") + (type === SVG_RESULT ? "</svg>" : type === MATHML_RESULT ? "</math>" : "");
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
var Template = class _Template {
  constructor({ strings, ["_$litType$"]: type }, options) {
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts;
    const [html2, attrNames] = getTemplateHtml(strings, type);
    this.el = _Template.createElement(html2, options);
    walker.currentNode = this.el.content;
    if (type === SVG_RESULT || type === MATHML_RESULT) {
      const wrapper = this.el.content.firstChild;
      wrapper.replaceWith(...wrapper.childNodes);
    }
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE) {
          const tag2 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag2) && node.innerHTML.includes(marker)) {
            const m2 = `Expressions are not supported inside \`${tag2}\` elements. See https://lit.dev/msg/expression-in-${tag2} for more information.`;
            if (tag2 === "template") {
              throw new Error(m2);
            } else
              issueWarning("", m2);
          }
        }
        if (node.hasAttributes()) {
          for (const name2 of node.getAttributeNames()) {
            if (name2.endsWith(boundAttributeSuffix)) {
              const realName = attrNames[attrNameIndex++];
              const value = node.getAttribute(name2);
              const statics = value.split(marker);
              const m2 = /([.?@])?(.*)/.exec(realName);
              parts.push({
                type: ATTRIBUTE_PART,
                index: nodeIndex,
                name: m2[2],
                strings: statics,
                ctor: m2[1] === "." ? PropertyPart : m2[1] === "?" ? BooleanAttributePart : m2[1] === "@" ? EventPart : AttributePart
              });
              node.removeAttribute(name2);
            } else if (name2.startsWith(marker)) {
              parts.push({
                type: ELEMENT_PART,
                index: nodeIndex
              });
              node.removeAttribute(name2);
            }
          }
        }
        if (rawTextElement.test(node.tagName)) {
          const strings2 = node.textContent.split(marker);
          const lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes ? trustedTypes.emptyScript : "";
            for (let i = 0; i < lastIndex; i++) {
              node.append(strings2[i], createMarker());
              walker.nextNode();
              parts.push({ type: CHILD_PART, index: ++nodeIndex });
            }
            node.append(strings2[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data = node.data;
        if (data === markerMatch) {
          parts.push({ type: CHILD_PART, index: nodeIndex });
        } else {
          let i = -1;
          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            parts.push({ type: COMMENT_PART, index: nodeIndex });
            i += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    if (DEV_MODE) {
      if (attrNames.length !== attrNameIndex) {
        throw new Error(`Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=\${true} ?disabled=\${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: 
\`` + strings.join("${...}") + "`");
      }
    }
    debugLogEvent && debugLogEvent({
      kind: "template prep",
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  static createElement(html2, _options) {
    const el = d.createElement("template");
    el.innerHTML = html2;
    return el;
  }
};
function resolveDirective(part, value, parent = part, attributeIndex) {
  var _a8, _b3;
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== void 0 ? (_a8 = parent.__directives) == null ? void 0 : _a8[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? void 0 : (
    // This property needs to remain unminified.
    value["_$litDirective$"]
  );
  if ((currentDirective == null ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
    (_b3 = currentDirective == null ? void 0 : currentDirective["_$notifyDirectiveConnectionChanged"]) == null ? void 0 : _b3.call(currentDirective, false);
    if (nextDirectiveConstructor === void 0) {
      currentDirective = void 0;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== void 0) {
      (parent.__directives ?? (parent.__directives = []))[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== void 0) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
var TemplateInstance = class {
  constructor(template, parent) {
    this._$parts = [];
    this._$disconnectableChildren = void 0;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  get parentNode() {
    return this._$parent.parentNode;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.
  _clone(options) {
    const { el: { content }, parts } = this._$template;
    const fragment = ((options == null ? void 0 : options.creationScope) ?? d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];
    while (templatePart !== void 0) {
      if (nodeIndex === templatePart.index) {
        let part;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== (templatePart == null ? void 0 : templatePart.index)) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    walker.currentNode = d;
    return fragment;
  }
  _update(values) {
    let i = 0;
    for (const part of this._$parts) {
      if (part !== void 0) {
        debugLogEvent && debugLogEvent({
          kind: "set part",
          part,
          value: values[i],
          valueIndex: i,
          values,
          templateInstance: this
        });
        if (part.strings !== void 0) {
          part._$setValue(values, part, i);
          i += part.strings.length - 2;
        } else {
          part._$setValue(values[i]);
        }
      }
      i++;
    }
  }
};
var ChildPart = class _ChildPart {
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    var _a8;
    return ((_a8 = this._$parent) == null ? void 0 : _a8._$isConnected) ?? this.__isConnected;
  }
  constructor(startNode, endNode, parent, options) {
    this.type = CHILD_PART;
    this._$committedValue = nothing2;
    this._$disconnectableChildren = void 0;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    this.__isConnected = (options == null ? void 0 : options.isConnected) ?? true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._textSanitizer = void 0;
    }
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;
    if (parent !== void 0 && (parentNode == null ? void 0 : parentNode.nodeType) === 11) {
      parentNode = parent.parentNode;
    }
    return parentNode;
  }
  /**
   * The part's leading marker node, if any. See `.parentNode` for more
   * information.
   */
  get startNode() {
    return this._$startNode;
  }
  /**
   * The part's trailing marker node, if any. See `.parentNode` for more
   * information.
   */
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    var _a8;
    if (DEV_MODE && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      if (value === nothing2 || value == null || value === "") {
        if (this._$committedValue !== nothing2) {
          debugLogEvent && debugLogEvent({
            kind: "commit nothing to child",
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing2;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
    } else if (value["_$litType$"] !== void 0) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== void 0) {
      if (DEV_MODE && ((_a8 = this.options) == null ? void 0 : _a8.host) === value) {
        this._commitText(`[probable mistake: rendered a template's host in itself (commonly caused by writing \${this} in a template]`);
        console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
        return;
      }
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      this._commitText(value);
    }
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    var _a8;
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = (_a8 = this._$startNode.parentNode) == null ? void 0 : _a8.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          if (DEV_MODE) {
            if (parentNodeName === "STYLE") {
              message = `Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css\`...\` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.`;
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent && debugLogEvent({
        kind: "commit node",
        start: this._$startNode,
        parent: this._$parent,
        value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing2 && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(node, "data", "property");
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent && debugLogEvent({
        kind: "commit text",
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = d.createTextNode("");
        this._commitNode(textNode);
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(textNode, "data", "property");
        }
        value = this._textSanitizer(value);
        debugLogEvent && debugLogEvent({
          kind: "commit text",
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent && debugLogEvent({
          kind: "commit text",
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    var _a8;
    const { values, ["_$litType$"]: type } = result;
    const template = typeof type === "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (((_a8 = this._$committedValue) == null ? void 0 : _a8._$template) === template) {
      debugLogEvent && debugLogEvent({
        kind: "template updating",
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values
      });
      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);
      const fragment = instance._clone(this.options);
      debugLogEvent && debugLogEvent({
        kind: "template instantiated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent && debugLogEvent({
        kind: "template instantiated and updated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @internal */
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    if (template === void 0) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  }
  _commitIterable(value) {
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      if (partIndex === itemParts.length) {
        itemParts.push(itemPart = new _ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives in
   *     those Parts.
   *
   * @internal
   */
  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    var _a8;
    (_a8 = this._$notifyConnectionChanged) == null ? void 0 : _a8.call(this, false, true, from);
    while (start && start !== this._$endNode) {
      const n2 = wrap(start).nextSibling;
      wrap(start).remove();
      start = n2;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this method
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */
  setConnected(isConnected) {
    var _a8;
    if (this._$parent === void 0) {
      this.__isConnected = isConnected;
      (_a8 = this._$notifyConnectionChanged) == null ? void 0 : _a8.call(this, isConnected);
    } else if (DEV_MODE) {
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
    }
  }
};
var AttributePart = class {
  get tagName() {
    return this.element.tagName;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  constructor(element, name2, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    this._$committedValue = nothing2;
    this._$disconnectableChildren = void 0;
    this.element = element;
    this.name = name2;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== "" || strings[1] !== "") {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing2;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = void 0;
    }
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings;
    let change = false;
    if (strings === void 0) {
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      const values = value;
      value = strings[0];
      let i, v2;
      for (i = 0; i < strings.length - 1; i++) {
        v2 = resolveDirective(this, values[valueIndex + i], directiveParent, i);
        if (v2 === noChange) {
          v2 = this._$committedValue[i];
        }
        change || (change = !isPrimitive(v2) || v2 !== this._$committedValue[i]);
        if (v2 === nothing2) {
          value = nothing2;
        } else if (value !== nothing2) {
          value += (v2 ?? "") + strings[i + 1];
        }
        this._$committedValue[i] = v2;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */
  _commitValue(value) {
    if (value === nothing2) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === void 0) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "attribute");
        }
        value = this._sanitizer(value ?? "");
      }
      debugLogEvent && debugLogEvent({
        kind: "commit attribute",
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value ?? "");
    }
  }
};
var PropertyPart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  /** @internal */
  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === void 0) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "property");
      }
      value = this._sanitizer(value);
    }
    debugLogEvent && debugLogEvent({
      kind: "commit property",
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    this.element[this.name] = value === nothing2 ? void 0 : value;
  }
};
var BooleanAttributePart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */
  _commitValue(value) {
    debugLogEvent && debugLogEvent({
      kind: "commit boolean attribute",
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing2),
      options: this.options
    });
    wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing2);
  }
};
var EventPart = class extends AttributePart {
  constructor(element, name2, strings, parent, options) {
    super(element, name2, strings, parent, options);
    this.type = EVENT_PART;
    if (DEV_MODE && this.strings !== void 0) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name2}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
    }
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  _$setValue(newListener, directiveParent = this) {
    newListener = resolveDirective(this, newListener, directiveParent, 0) ?? nothing2;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    const shouldRemoveListener = newListener === nothing2 && oldListener !== nothing2 || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    const shouldAddListener = newListener !== nothing2 && (oldListener === nothing2 || shouldRemoveListener);
    debugLogEvent && debugLogEvent({
      kind: "commit event listener",
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  }
  handleEvent(event) {
    var _a8;
    if (typeof this._$committedValue === "function") {
      this._$committedValue.call(((_a8 = this.options) == null ? void 0 : _a8.host) ?? this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }
};
var ElementPart = class {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    this._$disconnectableChildren = void 0;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent && debugLogEvent({
      kind: "commit to element binding",
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }
};
var _$LH = {
  // Used in lit-ssr
  _boundAttributeSuffix: boundAttributeSuffix,
  _marker: marker,
  _markerMatch: markerMatch,
  _HTML_RESULT: HTML_RESULT,
  _getTemplateHtml: getTemplateHtml,
  // Used in tests and private-ssr-support
  _TemplateInstance: TemplateInstance,
  _isIterable: isIterable,
  _resolveDirective: resolveDirective,
  _ChildPart: ChildPart,
  _AttributePart: AttributePart,
  _BooleanAttributePart: BooleanAttributePart,
  _EventPart: EventPart,
  _PropertyPart: PropertyPart,
  _ElementPart: ElementPart
};
var polyfillSupport = DEV_MODE ? global2.litHtmlPolyfillSupportDevMode : global2.litHtmlPolyfillSupport;
polyfillSupport == null ? void 0 : polyfillSupport(Template, ChildPart);
(global2.litHtmlVersions ?? (global2.litHtmlVersions = [])).push("3.2.1");
if (DEV_MODE && global2.litHtmlVersions.length > 1) {
  issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}
var render = (value, container, options) => {
  if (DEV_MODE && container == null) {
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE ? debugLogRenderId++ : 0;
  const partOwnerNode = (options == null ? void 0 : options.renderBefore) ?? container;
  let part = partOwnerNode["_$litPart$"];
  debugLogEvent && debugLogEvent({
    kind: "begin render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === void 0) {
    const endNode = (options == null ? void 0 : options.renderBefore) ?? null;
    partOwnerNode["_$litPart$"] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, void 0, options ?? {});
  }
  part._$setValue(value);
  debugLogEvent && debugLogEvent({
    kind: "end render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

// node_modules/@lit/reactive-element/development/reactive-element.js
var { is, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf } = Object;
var NODE_MODE3 = false;
var global3 = globalThis;
if (NODE_MODE3) {
  global3.customElements ?? (global3.customElements = customElements);
}
var DEV_MODE2 = true;
var issueWarning2;
var trustedTypes2 = global3.trustedTypes;
var emptyStringForBooleanAttribute = trustedTypes2 ? trustedTypes2.emptyScript : "";
var polyfillSupport2 = DEV_MODE2 ? global3.reactiveElementPolyfillSupportDevMode : global3.reactiveElementPolyfillSupport;
var _a3;
if (DEV_MODE2) {
  const issuedWarnings = global3.litIssuedWarnings ?? (global3.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning2 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
  issueWarning2("dev-mode", `Lit is in dev mode. Not recommended for production!`);
  if (((_a3 = global3.ShadyDOM) == null ? void 0 : _a3.inUse) && polyfillSupport2 === void 0) {
    issueWarning2("polyfill-support-missing", `Shadow DOM is being polyfilled via \`ShadyDOM\` but the \`polyfill-support\` module has not been loaded.`);
  }
}
var debugLogEvent2 = DEV_MODE2 ? (event) => {
  const shouldEmit = global3.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global3.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var JSCompiler_renameProperty = (prop, _obj) => prop;
var defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute : null;
        break;
      case Object:
      case Array:
        value = value == null ? value : JSON.stringify(value);
        break;
    }
    return value;
  },
  fromAttribute(value, type) {
    let fromValue = value;
    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;
      case Number:
        fromValue = value === null ? null : Number(value);
        break;
      case Object:
      case Array:
        try {
          fromValue = JSON.parse(value);
        } catch (e) {
          fromValue = null;
        }
        break;
    }
    return fromValue;
  }
};
var notEqual = (value, old) => !is(value, old);
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata"));
global3.litPropertyMetadata ?? (global3.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var ReactiveElement = class extends HTMLElement {
  /**
   * Adds an initializer function to the class that is called during instance
   * construction.
   *
   * This is useful for code that runs against a `ReactiveElement`
   * subclass, such as a decorator, that needs to do work for each
   * instance, such as setting up a `ReactiveController`.
   *
   * ```ts
   * const myDecorator = (target: typeof ReactiveElement, key: string) => {
   *   target.addInitializer((instance: ReactiveElement) => {
   *     // This is run during construction of the element
   *     new MyController(instance);
   *   });
   * }
   * ```
   *
   * Decorating a field will then cause each instance to run an initializer
   * that adds a controller:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   @myDecorator foo;
   * }
   * ```
   *
   * Initializers are stored per-constructor. Adding an initializer to a
   * subclass does not add it to a superclass. Since initializers are run in
   * constructors, initializers will run in order of the class hierarchy,
   * starting with superclasses and progressing to the instance's class.
   *
   * @nocollapse
   */
  static addInitializer(initializer) {
    this.__prepare();
    (this._initializers ?? (this._initializers = [])).push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */
  static get observedAttributes() {
    this.finalize();
    return this.__attributeToPropertyMap && [...this.__attributeToPropertyMap.keys()];
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a {@linkcode PropertyDeclaration} for the property with the
   * given options. The property setter calls the property's `hasChanged`
   * property option or uses a strict identity check to determine whether or not
   * to request an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * ```ts
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static createProperty(name2, options = defaultPropertyDeclaration) {
    if (options.state) {
      options.attribute = false;
    }
    this.__prepare();
    this.elementProperties.set(name2, options);
    if (!options.noAccessor) {
      const key = DEV_MODE2 ? (
        // Use Symbol.for in dev mode to make it easier to maintain state
        // when doing HMR.
        Symbol.for(`${String(name2)} (@property() cache)`)
      ) : Symbol();
      const descriptor = this.getPropertyDescriptor(name2, key, options);
      if (descriptor !== void 0) {
        defineProperty(this.prototype, name2, descriptor);
      }
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   * ```ts
   * class MyElement extends LitElement {
   *   static getPropertyDescriptor(name, key, options) {
   *     const defaultDescriptor =
   *         super.getPropertyDescriptor(name, key, options);
   *     const setter = defaultDescriptor.set;
   *     return {
   *       get: defaultDescriptor.get,
   *       set(value) {
   *         setter.call(this, value);
   *         // custom action.
   *       },
   *       configurable: true,
   *       enumerable: true
   *     }
   *   }
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static getPropertyDescriptor(name2, key, options) {
    const { get, set } = getOwnPropertyDescriptor(this.prototype, name2) ?? {
      get() {
        return this[key];
      },
      set(v2) {
        this[key] = v2;
      }
    };
    if (DEV_MODE2 && get == null) {
      if ("value" in (getOwnPropertyDescriptor(this.prototype, name2) ?? {})) {
        throw new Error(`Field ${JSON.stringify(String(name2))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);
      }
      issueWarning2("reactive-property-without-getter", `Field ${JSON.stringify(String(name2))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`);
    }
    return {
      get() {
        return get == null ? void 0 : get.call(this);
      },
      set(value) {
        const oldValue = get == null ? void 0 : get.call(this);
        set.call(this, value);
        this.requestUpdate(name2, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a `PropertyDeclaration` via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override
   * {@linkcode createProperty}.
   *
   * @nocollapse
   * @final
   * @category properties
   */
  static getPropertyOptions(name2) {
    return this.elementProperties.get(name2) ?? defaultPropertyDeclaration;
  }
  /**
   * Initializes static own properties of the class used in bookkeeping
   * for element properties, initializers, etc.
   *
   * Can be called multiple times by code that needs to ensure these
   * properties exist before using them.
   *
   * This method ensures the superclass is finalized so that inherited
   * property metadata can be copied down.
   * @nocollapse
   */
  static __prepare() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("elementProperties", this))) {
      return;
    }
    const superCtor = getPrototypeOf(this);
    superCtor.finalize();
    if (superCtor._initializers !== void 0) {
      this._initializers = [...superCtor._initializers];
    }
    this.elementProperties = new Map(superCtor.elementProperties);
  }
  /**
   * Finishes setting up the class so that it's ready to be registered
   * as a custom element and instantiated.
   *
   * This method is called by the ReactiveElement.observedAttributes getter.
   * If you override the observedAttributes getter, you must either call
   * super.observedAttributes to trigger finalization, or call finalize()
   * yourself.
   *
   * @nocollapse
   */
  static finalize() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("finalized", this))) {
      return;
    }
    this.finalized = true;
    this.__prepare();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [
        ...getOwnPropertyNames(props),
        ...getOwnPropertySymbols(props)
      ];
      for (const p2 of propKeys) {
        this.createProperty(p2, props[p2]);
      }
    }
    const metadata = this[Symbol.metadata];
    if (metadata !== null) {
      const properties = litPropertyMetadata.get(metadata);
      if (properties !== void 0) {
        for (const [p2, options] of properties) {
          this.elementProperties.set(p2, options);
        }
      }
    }
    this.__attributeToPropertyMap = /* @__PURE__ */ new Map();
    for (const [p2, options] of this.elementProperties) {
      const attr = this.__attributeNameForProperty(p2, options);
      if (attr !== void 0) {
        this.__attributeToPropertyMap.set(attr, p2);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE2) {
      if (this.hasOwnProperty("createProperty")) {
        issueWarning2("no-override-create-property", "Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");
      }
      if (this.hasOwnProperty("getPropertyDescriptor")) {
        issueWarning2("no-override-get-property-descriptor", "Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators");
      }
    }
  }
  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * Styles are deduplicated preserving the _last_ instance in the list. This
   * is a performance optimization to avoid duplicated styles that can occur
   * especially when composing via subclassing. The last item is kept to try
   * to preserve the cascade order with the assumption that it's most important
   * that last added styles override previous styles.
   *
   * @nocollapse
   * @category styles
   */
  static finalizeStyles(styles) {
    const elementStyles = [];
    if (Array.isArray(styles)) {
      const set = new Set(styles.flat(Infinity).reverse());
      for (const s of set) {
        elementStyles.unshift(getCompatibleStyle(s));
      }
    } else if (styles !== void 0) {
      elementStyles.push(getCompatibleStyle(styles));
    }
    return elementStyles;
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static __attributeNameForProperty(name2, options) {
    const attribute = options.attribute;
    return attribute === false ? void 0 : typeof attribute === "string" ? attribute : typeof name2 === "string" ? name2.toLowerCase() : void 0;
  }
  constructor() {
    super();
    this.__instanceProperties = void 0;
    this.isUpdatePending = false;
    this.hasUpdated = false;
    this.__reflectingProperty = null;
    this.__initialize();
  }
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   */
  __initialize() {
    var _a8;
    this.__updatePromise = new Promise((res) => this.enableUpdating = res);
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.__saveInstanceProperties();
    this.requestUpdate();
    (_a8 = this.constructor._initializers) == null ? void 0 : _a8.forEach((i) => i(this));
  }
  /**
   * Registers a `ReactiveController` to participate in the element's reactive
   * update cycle. The element automatically calls into any registered
   * controllers during its lifecycle callbacks.
   *
   * If the element is connected when `addController()` is called, the
   * controller's `hostConnected()` callback will be immediately called.
   * @category controllers
   */
  addController(controller) {
    var _a8;
    (this.__controllers ?? (this.__controllers = /* @__PURE__ */ new Set())).add(controller);
    if (this.renderRoot !== void 0 && this.isConnected) {
      (_a8 = controller.hostConnected) == null ? void 0 : _a8.call(controller);
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */
  removeController(controller) {
    var _a8;
    (_a8 = this.__controllers) == null ? void 0 : _a8.delete(controller);
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  __saveInstanceProperties() {
    const instanceProperties = /* @__PURE__ */ new Map();
    const elementProperties = this.constructor.elementProperties;
    for (const p2 of elementProperties.keys()) {
      if (this.hasOwnProperty(p2)) {
        instanceProperties.set(p2, this[p2]);
        delete this[p2];
      }
    }
    if (instanceProperties.size > 0) {
      this.__instanceProperties = instanceProperties;
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   *
   * @return Returns a node into which to render.
   * @category rendering
   */
  createRenderRoot() {
    const renderRoot = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    adoptStyles(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */
  connectedCallback() {
    var _a8;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot());
    this.enableUpdating(true);
    (_a8 = this.__controllers) == null ? void 0 : _a8.forEach((c) => {
      var _a9;
      return (_a9 = c.hostConnected) == null ? void 0 : _a9.call(c);
    });
  }
  /**
   * Note, this method should be considered final and not overridden. It is
   * overridden on the element instance with a function that triggers the first
   * update.
   * @category updates
   */
  enableUpdating(_requestedUpdate) {
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   * @category lifecycle
   */
  disconnectedCallback() {
    var _a8;
    (_a8 = this.__controllers) == null ? void 0 : _a8.forEach((c) => {
      var _a9;
      return (_a9 = c.hostDisconnected) == null ? void 0 : _a9.call(c);
    });
  }
  /**
   * Synchronizes property values when attributes change.
   *
   * Specifically, when an attribute is set, the corresponding property is set.
   * You should rarely need to implement this callback. If this method is
   * overridden, `super.attributeChangedCallback(name, _old, value)` must be
   * called.
   *
   * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
   * on MDN for more information about the `attributeChangedCallback`.
   * @category attributes
   */
  attributeChangedCallback(name2, _old, value) {
    this._$attributeToProperty(name2, value);
  }
  __propertyToAttribute(name2, value) {
    var _a8;
    const elemProperties = this.constructor.elementProperties;
    const options = elemProperties.get(name2);
    const attr = this.constructor.__attributeNameForProperty(name2, options);
    if (attr !== void 0 && options.reflect === true) {
      const converter = ((_a8 = options.converter) == null ? void 0 : _a8.toAttribute) !== void 0 ? options.converter : defaultConverter;
      const attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE2 && this.constructor.enabledWarnings.includes("migration") && attrValue === void 0) {
        issueWarning2("undefined-attribute-value", `The attribute value for the ${name2} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);
      }
      this.__reflectingProperty = name2;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      this.__reflectingProperty = null;
    }
  }
  /** @internal */
  _$attributeToProperty(name2, value) {
    var _a8;
    const ctor = this.constructor;
    const propName = ctor.__attributeToPropertyMap.get(name2);
    if (propName !== void 0 && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = typeof options.converter === "function" ? { fromAttribute: options.converter } : ((_a8 = options.converter) == null ? void 0 : _a8.fromAttribute) !== void 0 ? options.converter : defaultConverter;
      this.__reflectingProperty = propName;
      this[propName] = converter.fromAttribute(
        value,
        options.type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      );
      this.__reflectingProperty = null;
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should be called
   * when an element should update based on some state not triggered by setting
   * a reactive property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored.
   *
   * @param name name of requesting property
   * @param oldValue old value of requesting property
   * @param options property options to use instead of the previously
   *     configured options
   * @category updates
   */
  requestUpdate(name2, oldValue, options) {
    if (name2 !== void 0) {
      if (DEV_MODE2 && name2 instanceof Event) {
        issueWarning2(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
      }
      options ?? (options = this.constructor.getPropertyOptions(name2));
      const hasChanged = options.hasChanged ?? notEqual;
      const newValue = this[name2];
      if (hasChanged(newValue, oldValue)) {
        this._$changeProperty(name2, oldValue, options);
      } else {
        return;
      }
    }
    if (this.isUpdatePending === false) {
      this.__updatePromise = this.__enqueueUpdate();
    }
  }
  /**
   * @internal
   */
  _$changeProperty(name2, oldValue, options) {
    if (!this._$changedProperties.has(name2)) {
      this._$changedProperties.set(name2, oldValue);
    }
    if (options.reflect === true && this.__reflectingProperty !== name2) {
      (this.__reflectingProperties ?? (this.__reflectingProperties = /* @__PURE__ */ new Set())).add(name2);
    }
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async __enqueueUpdate() {
    this.isUpdatePending = true;
    try {
      await this.__updatePromise;
    } catch (e) {
      Promise.reject(e);
    }
    const result = this.scheduleUpdate();
    if (result != null) {
      await result;
    }
    return !this.isUpdatePending;
  }
  /**
   * Schedules an element update. You can override this method to change the
   * timing of updates by returning a Promise. The update will await the
   * returned Promise, and you should resolve the Promise to allow the update
   * to proceed. If this method is overridden, `super.scheduleUpdate()`
   * must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```ts
   * override protected async scheduleUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.scheduleUpdate();
   * }
   * ```
   * @category updates
   */
  scheduleUpdate() {
    const result = this.performUpdate();
    if (DEV_MODE2 && this.constructor.enabledWarnings.includes("async-perform-update") && typeof (result == null ? void 0 : result.then) === "function") {
      issueWarning2("async-perform-update", `Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);
    }
    return result;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * @category updates
   */
  performUpdate() {
    var _a8;
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent2 == null ? void 0 : debugLogEvent2({ kind: "update" });
    if (!this.hasUpdated) {
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot());
      if (DEV_MODE2) {
        const ctor = this.constructor;
        const shadowedProperties = [...ctor.elementProperties.keys()].filter((p2) => this.hasOwnProperty(p2) && p2 in getPrototypeOf(this));
        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${shadowedProperties.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`);
        }
      }
      if (this.__instanceProperties) {
        for (const [p2, value] of this.__instanceProperties) {
          this[p2] = value;
        }
        this.__instanceProperties = void 0;
      }
      const elementProperties = this.constructor.elementProperties;
      if (elementProperties.size > 0) {
        for (const [p2, options] of elementProperties) {
          if (options.wrapped === true && !this._$changedProperties.has(p2) && this[p2] !== void 0) {
            this._$changeProperty(p2, this[p2], options);
          }
        }
      }
    }
    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        (_a8 = this.__controllers) == null ? void 0 : _a8.forEach((c) => {
          var _a9;
          return (_a9 = c.hostUpdate) == null ? void 0 : _a9.call(c);
        });
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e) {
      shouldUpdate = false;
      this.__markUpdated();
      throw e;
    }
    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  /**
   * Invoked before `update()` to compute values needed during the update.
   *
   * Implement `willUpdate` to compute property values that depend on other
   * properties and are used in the rest of the update process.
   *
   * ```ts
   * willUpdate(changedProperties) {
   *   // only need to check changed properties for an expensive computation.
   *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
   *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
   *   }
   * }
   *
   * render() {
   *   return html`SHA: ${this.sha}`;
   * }
   * ```
   *
   * @category updates
   */
  willUpdate(_changedProperties) {
  }
  // Note, this is an override point for polyfill-support.
  // @internal
  _$didUpdate(changedProperties) {
    var _a8;
    (_a8 = this.__controllers) == null ? void 0 : _a8.forEach((c) => {
      var _a9;
      return (_a9 = c.hostUpdated) == null ? void 0 : _a9.call(c);
    });
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE2 && this.isUpdatePending && this.constructor.enabledWarnings.includes("change-in-update")) {
      issueWarning2("change-in-update", `Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`);
    }
  }
  __markUpdated() {
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.isUpdatePending = false;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super.getUpdateComplete()`, then any subsequent state.
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  get updateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   override async getUpdateComplete() {
   *     const result = await super.getUpdateComplete();
   *     await this._myChild.updateComplete;
   *     return result;
   *   }
   * }
   * ```
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  getUpdateComplete() {
    return this.__updatePromise;
  }
  /**
   * Controls whether or not `update()` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  update(_changedProperties) {
    this.__reflectingProperties && (this.__reflectingProperties = this.__reflectingProperties.forEach((p2) => this.__propertyToAttribute(p2, this[p2])));
    this.__markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  updated(_changedProperties) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * ```ts
   * firstUpdated() {
   *   this.renderRoot.getElementById('my-text-area').focus();
   * }
   * ```
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  firstUpdated(_changedProperties) {
  }
};
ReactiveElement.elementStyles = [];
ReactiveElement.shadowRootOptions = { mode: "open" };
ReactiveElement[JSCompiler_renameProperty("elementProperties", ReactiveElement)] = /* @__PURE__ */ new Map();
ReactiveElement[JSCompiler_renameProperty("finalized", ReactiveElement)] = /* @__PURE__ */ new Map();
polyfillSupport2 == null ? void 0 : polyfillSupport2({ ReactiveElement });
if (DEV_MODE2) {
  ReactiveElement.enabledWarnings = [
    "change-in-update",
    "async-perform-update"
  ];
  const ensureOwnWarnings = function(ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty("enabledWarnings", ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function(warning) {
    ensureOwnWarnings(this);
    if (!this.enabledWarnings.includes(warning)) {
      this.enabledWarnings.push(warning);
    }
  };
  ReactiveElement.disableWarning = function(warning) {
    ensureOwnWarnings(this);
    const i = this.enabledWarnings.indexOf(warning);
    if (i >= 0) {
      this.enabledWarnings.splice(i, 1);
    }
  };
}
(global3.reactiveElementVersions ?? (global3.reactiveElementVersions = [])).push("2.0.4");
if (DEV_MODE2 && global3.reactiveElementVersions.length > 1) {
  issueWarning2("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}

// node_modules/lit-element/development/lit-element.js
var JSCompiler_renameProperty2 = (prop, _obj) => prop;
var DEV_MODE3 = true;
var issueWarning3;
if (DEV_MODE3) {
  const issuedWarnings = globalThis.litIssuedWarnings ?? (globalThis.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning3 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
var LitElement = class extends ReactiveElement {
  constructor() {
    super(...arguments);
    this.renderOptions = { host: this };
    this.__childPart = void 0;
  }
  /**
   * @category rendering
   */
  createRenderRoot() {
    var _a8;
    const renderRoot = super.createRenderRoot();
    (_a8 = this.renderOptions).renderBefore ?? (_a8.renderBefore = renderRoot.firstChild);
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */
  update(changedProperties) {
    const value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    super.update(changedProperties);
    this.__childPart = render(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */
  connectedCallback() {
    var _a8;
    super.connectedCallback();
    (_a8 = this.__childPart) == null ? void 0 : _a8.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */
  disconnectedCallback() {
    var _a8;
    super.disconnectedCallback();
    (_a8 = this.__childPart) == null ? void 0 : _a8.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */
  render() {
    return noChange;
  }
};
LitElement["_$litElement$"] = true;
LitElement[JSCompiler_renameProperty2("finalized", LitElement)] = true;
var _a4;
(_a4 = globalThis.litElementHydrateSupport) == null ? void 0 : _a4.call(globalThis, { LitElement });
var polyfillSupport3 = DEV_MODE3 ? globalThis.litElementPolyfillSupportDevMode : globalThis.litElementPolyfillSupport;
polyfillSupport3 == null ? void 0 : polyfillSupport3({ LitElement });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
if (DEV_MODE3 && globalThis.litElementVersions.length > 1) {
  issueWarning3("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}

// node_modules/lit-html/development/is-server.js
var NODE_MODE4 = false;
var isServer = NODE_MODE4;

// node_modules/lit-html/development/directive.js
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
var directive = (c) => (...values) => ({
  // This property needs to remain unminified.
  ["_$litDirective$"]: c,
  values
});
var Directive = class {
  constructor(_partInfo) {
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */
  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
};

// node_modules/lit-html/development/directive-helpers.js
var { _ChildPart: ChildPart2 } = _$LH;
var ENABLE_SHADYDOM_NOPATCH2 = true;
var _a5, _b2;
var wrap2 = ENABLE_SHADYDOM_NOPATCH2 && ((_a5 = window.ShadyDOM) == null ? void 0 : _a5.inUse) && ((_b2 = window.ShadyDOM) == null ? void 0 : _b2.noPatch) === true ? window.ShadyDOM.wrap : (node) => node;
var isSingleExpression = (part) => part.strings === void 0;
var RESET_VALUE = {};
var setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;

// node_modules/lit-html/development/directives/live.js
var LiveDirective = class extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (!(partInfo.type === PartType.PROPERTY || partInfo.type === PartType.ATTRIBUTE || partInfo.type === PartType.BOOLEAN_ATTRIBUTE)) {
      throw new Error("The `live` directive is not allowed on child or event bindings");
    }
    if (!isSingleExpression(partInfo)) {
      throw new Error("`live` bindings can only contain a single expression");
    }
  }
  render(value) {
    return value;
  }
  update(part, [value]) {
    if (value === noChange || value === nothing2) {
      return value;
    }
    const element = part.element;
    const name2 = part.name;
    if (part.type === PartType.PROPERTY) {
      if (value === element[name2]) {
        return noChange;
      }
    } else if (part.type === PartType.BOOLEAN_ATTRIBUTE) {
      if (!!value === element.hasAttribute(name2)) {
        return noChange;
      }
    } else if (part.type === PartType.ATTRIBUTE) {
      if (element.getAttribute(name2) === String(value)) {
        return noChange;
      }
    }
    setCommittedValue(part);
    return value;
  }
};
var live = directive(LiveDirective);

// node_modules/@arcgis/lumina/dist/chunk-PGHUBTOM.js
var lazyMetaSubItemJoiner = ":";
var PropertyFlags = ((PropertyFlags2) => {
  PropertyFlags2[PropertyFlags2["ATTRIBUTE"] = 1] = "ATTRIBUTE";
  PropertyFlags2[PropertyFlags2["REFLECT"] = 2] = "REFLECT";
  PropertyFlags2[PropertyFlags2["BOOLEAN"] = 4] = "BOOLEAN";
  PropertyFlags2[PropertyFlags2["NUMBER"] = 8] = "NUMBER";
  PropertyFlags2[PropertyFlags2["STATE"] = 16] = "STATE";
  PropertyFlags2[PropertyFlags2["READ_ONLY"] = 32] = "READ_ONLY";
  PropertyFlags2[PropertyFlags2["NO_ACCESSOR"] = 64] = "NO_ACCESSOR";
  return PropertyFlags2;
})(PropertyFlags || {});

// node_modules/@arcgis/lumina/dist/chunk-NO7HOBNA.js
function devOnlyDetectIncorrectLazyUsages(LitClass) {
  const genericPrototype = LitClass.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(genericPrototype, "innerText");
  if (descriptor !== void 0 && descriptor.get === descriptor.set) {
    return;
  }
  const allowList = /* @__PURE__ */ new Set([
    // We shouldn't be overwriting this property
    "constructor",
    // Called by Lit - we proxy it to this.el in ProxyComponent
    "setAttribute",
    // Called by Lit SSR - we proxy it to this.el in ProxyComponent
    "removeAttribute",
    // Called by Lit - we proxy it to this.el in ProxyComponent
    "isConnected",
    // Called by Lit, but only in dev mode for warnings, so we don't have to proxy.
    "localName",
    // Called by Lit Context - we proxy it to this.el in ProxyComponent.
    // Interestingly, they never call removeEventListener.
    "addEventListener"
  ]);
  const customErrorMessages = {
    addEventListener: "use this.listen() or this.el.addEventListener()"
  };
  Object.entries({
    ...Object.getOwnPropertyDescriptors(HTMLElement.prototype),
    ...Object.getOwnPropertyDescriptors(Element.prototype),
    ...Object.getOwnPropertyDescriptors(Node.prototype),
    ...Object.getOwnPropertyDescriptors(EventTarget.prototype)
  }).forEach(([key, value]) => {
    if (allowList.has(key)) {
      return;
    }
    const callback = (...args) => {
      if (key === "hasAttribute" && args[0] === "defer-hydration") {
        return false;
      }
      throw new Error(
        `You should not be trying to access this.${key} directly as it won't work correctly in lazy-builds. Instead, ${customErrorMessages[key] ?? `use this.el.${key}`}`
      );
    };
    if (typeof value.value === "function") {
      genericPrototype[key] = callback;
    } else {
      Object.defineProperty(genericPrototype, key, { get: callback, set: callback });
    }
  });
}
function attachToAncestor(child) {
  var _a8, _b3;
  let ancestor = child;
  while (ancestor = ancestor.parentNode ?? ancestor.host) {
    if ((_a8 = ancestor == null ? void 0 : ancestor.constructor) == null ? void 0 : _a8.lumina) {
      const litParent = ancestor;
      if (!((_b3 = litParent.manager) == null ? void 0 : _b3.loadedCalled)) {
        litParent._offspring.push(child);
      }
      return litParent._postLoad.promise;
    }
  }
  return false;
}
var defineProperty2 = Object.defineProperty;
function parseCondensedProp(propAndAttribute) {
  const name2 = propAndAttribute.split(lazyMetaSubItemJoiner);
  return name2.length === 1 ? [name2[0], camelToKebab(name2[0])] : name2;
}
var HtmlElement = globalThis.HTMLElement ?? parseCondensedProp;
var _a6;
var ProxyComponent = (_a6 = class extends HtmlElement {
  constructor() {
    super();
    this._store = {};
    this._pendingAttributes = [];
    this._postLoad = new Deferred();
    this._postLoaded = new Deferred();
    this._offspring = [];
    if (isEsriInternalEnv()) {
      this._hmrSetProps = /* @__PURE__ */ new Set();
      this._hmrSetAttributes = /* @__PURE__ */ new Set();
      globalThis.devOnly$createdElements ?? (globalThis.devOnly$createdElements = []);
      globalThis.devOnly$createdElements.push(new WeakRef(this));
    }
    this._saveInstanceProperties();
    const ProxyClass = this.constructor;
    if (ProxyClass._LitConstructor) {
      this._initializeComponent({ a: ProxyClass._LitConstructor });
    } else {
      void ProxyClass._loadPromise.then(this._initializeComponent.bind(this)).catch((error) => {
        this._postLoaded.reject(error);
        setTimeout(() => {
          throw error;
        });
      });
    }
    if (isEsriInternalEnv()) {
      ProxyClass._hmrInstances ?? (ProxyClass._hmrInstances = []);
      ProxyClass._hmrInstances.push(new WeakRef(this));
      Object.defineProperty(this, "_store", {
        value: this._store,
        enumerable: false,
        configurable: true
      });
    }
  }
  /** @internal */
  static _initializePrototype() {
    var _a8, _b3, _c;
    (_a8 = this._properties) == null ? void 0 : _a8.forEach(this._bindProp, this);
    (_b3 = this._asyncMethods) == null ? void 0 : _b3.forEach(this._bindAsync, this);
    (_c = this._syncMethods) == null ? void 0 : _c.forEach(this._bindSync, this);
  }
  static _bindProp(propName) {
    defineProperty2(this.prototype, propName, {
      configurable: true,
      enumerable: true,
      get() {
        return this._store[propName];
      },
      set(value) {
        this._store[propName] = value;
        if (isEsriInternalEnv()) {
          this._hmrSetProps.add(propName);
        }
      }
    });
  }
  static _bindAsync(methodName) {
    defineProperty2(this.prototype, methodName, {
      async value(...args) {
        if (!this._litElement) {
          await this._postLoaded.promise;
        }
        const genericLitElement = this._litElement;
        return await genericLitElement[methodName](...args);
      },
      configurable: true
    });
  }
  static _bindSync(methodName) {
    defineProperty2(this.prototype, methodName, {
      value(...args) {
        if (!this._litElement) {
          const ProxyClass = this.constructor;
          throw new Error(
            `Tried to call method ${methodName}() on <${ProxyClass._name}> component before it's fully loaded. Please do 'await component.componentOnReady();' before calling this method.`
          );
        }
        const genericLitElement = this._litElement;
        return genericLitElement[methodName](...args);
      },
      configurable: true
    });
  }
  get manager() {
    var _a8;
    return (_a8 = this._litElement) == null ? void 0 : _a8.manager;
  }
  /**
   * Until the custom element is registered on the page, an instance of that
   * element can be constructed and some properties on that instance set.
   *
   * These properties are set before the element prototype is set to this proxy
   * class and thus none of our getters/setters are yet registered - such
   * properties will be set by JavaScript on the instance directly.
   *
   * Once element is registered, the properties set in the meanwhile will shadow
   * the getter/setters, and thus break reactivity. The fix is to delete these
   * properties from the instance, and re-apply them once accessors are set.
   *
   * @example
   * ```ts
   * import { defineCustomElements } from '@arcgis/map-components';
   * const map = document.createElement('arcgis-map');
   * // This will shadow the getter/setters
   * map.itemId = '...';
   * // This finally defines the custom elements and sets the property accessors
   * defineCustomElements();
   * ```
   *
   * @remarks
   * This is an equivalent of the __saveInstanceProperties method in Lit's
   * ReactiveElement. Lit takes care of this on LitElement, but we have to take
   * care of this on the lazy proxy
   */
  _saveInstanceProperties() {
    var _a8;
    const ProxyClass = this.constructor;
    const genericThis = this;
    (_a8 = ProxyClass._properties) == null ? void 0 : _a8.forEach((propName) => {
      if (Object.hasOwn(this, propName)) {
        this._store[propName] = genericThis[propName];
        delete genericThis[propName];
      }
    });
  }
  /*
   * This method must be statically present rather than added later, or else,
   * browsers won't call it. Same for connected and disconnected callbacks.
   */
  attributeChangedCallback(name2, oldValue, newValue) {
    var _a8;
    (_a8 = this._litElement) == null ? void 0 : _a8.attributeChangedCallback(name2, oldValue, newValue);
    if (!this._litElement) {
      this._pendingAttributes.push(name2);
    }
    if (isEsriInternalEnv()) {
      this._hmrSetAttributes.add(name2);
    }
  }
  connectedCallback() {
    var _a8, _b3;
    if (this._litElement) {
      (_b3 = (_a8 = this._litElement).connectedCallback) == null ? void 0 : _b3.call(_a8);
    } else {
      queueMicrotask(() => {
        this._ancestorLoad = attachToAncestor(this);
      });
    }
  }
  disconnectedCallback() {
    var _a8, _b3;
    (_b3 = (_a8 = this._litElement) == null ? void 0 : _a8.disconnectedCallback) == null ? void 0 : _b3.call(_a8);
  }
  /**
   * Create a promise that resolves once component is fully loaded
   */
  async componentOnReady() {
    await this._postLoaded.promise;
    return this;
  }
  /** @internal */
  _initializeComponent(module) {
    var _a8;
    const ProxyClass = this.constructor;
    const tagName = ProxyClass._name;
    const store = this._store;
    const LitConstructor = Object.values(module).find(
      (LitConstructor2) => LitConstructor2.tagName === tagName
    );
    if (isEsriInternalEnv() && !LitConstructor) {
      throw new Error(
        `Unable to find the LitElement class for the "${tagName}" custom element in the lazy-loaded module`
      );
    }
    const lazyTagName = isEsriInternalEnv() ? (ProxyClass._hmrIndex ?? 0) === 0 ? `${tagName}--lazy` : `${tagName}--lazy-${ProxyClass._hmrIndex}` : `${tagName}--lazy`;
    let parentClass = LitConstructor;
    while (parentClass && !Object.hasOwn(parentClass, "lumina")) {
      parentClass = Object.getPrototypeOf(parentClass);
    }
    patchLitElement(parentClass);
    const isFirstInitialization = !ProxyClass._LitConstructor;
    if (isFirstInitialization) {
      ProxyClass._LitConstructor = LitConstructor;
      customElements.define(lazyTagName, LitConstructor);
    }
    LitConstructor.lazy = this;
    const litElement = document.createElement(lazyTagName);
    LitConstructor.lazy = void 0;
    if (isEsriInternalEnv()) {
      Object.defineProperty(this, "_litElement", {
        value: litElement,
        configurable: true,
        enumerable: false
      });
    } else {
      this._litElement = litElement;
    }
    this._store = litElement;
    this._pendingAttributes.forEach((name2) => {
      const value = this.getAttribute(name2);
      litElement.attributeChangedCallback(
        name2,
        // Lit doesn't look at this value, thus even if attribute already exists, that's ok
        null,
        value
      );
    });
    Object.entries(store).forEach(syncLitElement, litElement);
    if (isEsriInternalEnv()) {
      const litObserved = LitConstructor.observedAttributes ?? [];
      const lazyObserved = ProxyClass.observedAttributes ?? [];
      const missingFromLazy = litObserved.filter((attribute) => !lazyObserved.includes(attribute));
      const missingFromLit = lazyObserved.filter((attribute) => !litObserved.includes(attribute));
      if (missingFromLazy.length > 0) {
        console.warn(
          `The following attributes on <${ProxyClass._name}> are present on the Lit element, but are missing from the lazy proxy component: ${missingFromLazy.join(", ")}. This either indicates a bug in Lumina, or you are creating the attribute dynamically in a way that compiler cannot infer statically. For these attributes, lazy-loading version of your component won't work correctly, thus this must be resolved`
        );
      }
      if (missingFromLit.length > 0) {
        console.warn(
          `The following attributes on <${ProxyClass._name}> are defined on the lazy proxy component, but not on the actual Lit element: ${missingFromLit.join(", ")}. This either indicates a bug in Lumina, or you are creating the attribute dynamically in a way that compiler cannot infer statically. This is a non-critical issue, but does indicate that something is going wrong and should be fixed`
        );
      }
    }
    const isStillConnected = this.isConnected;
    if (isStillConnected || this._ancestorLoad) {
      (_a8 = litElement.connectedCallback) == null ? void 0 : _a8.call(litElement);
      if (!isStillConnected) {
        litElement.disconnectedCallback();
      }
    }
  }
  /**
   * Implemented on the proxy for compatibility with Lit Context.
   */
  addController() {
  }
  /**
   * Implemented on the proxy for compatibility with Lit Context.
   */
  requestUpdate() {
    var _a8;
    (_a8 = this._litElement) == null ? void 0 : _a8.requestUpdate();
  }
}, _a6.lumina = true, _a6);
function syncLitElement([key, value]) {
  this[key] = value;
}
function patchLitElement(parentClass) {
  const litElementPrototype = parentClass.prototype;
  const elementPrototype = Element.prototype;
  const alreadyPatched = Object.hasOwn(litElementPrototype, "isConnected");
  if (!alreadyPatched) {
    litElementPrototype.setAttribute = function(qualifiedName, value) {
      elementPrototype.setAttribute.call(this.el, qualifiedName, value);
    };
    litElementPrototype.removeAttribute = function(qualifiedName) {
      elementPrototype.removeAttribute.call(this.el, qualifiedName);
    };
    defineProperty2(litElementPrototype, "isConnected", {
      get() {
        return Reflect.get(elementPrototype, "isConnected", this.el);
      }
    });
  }
  if (isEsriInternalEnv()) {
    devOnlyDetectIncorrectLazyUsages(parentClass);
  }
}
var noShadowRoot = {};

// node_modules/@lit/reactive-element/development/decorators/property.js
var DEV_MODE4 = true;
var issueWarning4;
if (DEV_MODE4) {
  const issuedWarnings = globalThis.litIssuedWarnings ?? (globalThis.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning4 = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}

// node_modules/lit-html/development/directives/class-map.js
var ClassMapDirective = class extends Directive {
  constructor(partInfo) {
    var _a8;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "class" || ((_a8 = partInfo.strings) == null ? void 0 : _a8.length) > 2) {
      throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
  }
  render(classInfo) {
    return " " + Object.keys(classInfo).filter((key) => classInfo[key]).join(" ") + " ";
  }
  update(part, [classInfo]) {
    var _a8, _b3;
    if (this._previousClasses === void 0) {
      this._previousClasses = /* @__PURE__ */ new Set();
      if (part.strings !== void 0) {
        this._staticClasses = new Set(part.strings.join(" ").split(/\s/).filter((s) => s !== ""));
      }
      for (const name2 in classInfo) {
        if (classInfo[name2] && !((_a8 = this._staticClasses) == null ? void 0 : _a8.has(name2))) {
          this._previousClasses.add(name2);
        }
      }
      return this.render(classInfo);
    }
    const classList = part.element.classList;
    for (const name2 of this._previousClasses) {
      if (!(name2 in classInfo)) {
        classList.remove(name2);
        this._previousClasses.delete(name2);
      }
    }
    for (const name2 in classInfo) {
      const value = !!classInfo[name2];
      if (value !== this._previousClasses.has(name2) && !((_b3 = this._staticClasses) == null ? void 0 : _b3.has(name2))) {
        if (value) {
          classList.add(name2);
          this._previousClasses.add(name2);
        } else {
          classList.remove(name2);
          this._previousClasses.delete(name2);
        }
      }
    }
    return noChange;
  }
};
var classMap = directive(ClassMapDirective);

// node_modules/lit-html/development/directives/style-map.js
var important = "important";
var importantFlag = " !" + important;
var flagTrim = 0 - importantFlag.length;
var StyleMapDirective = class extends Directive {
  constructor(partInfo) {
    var _a8;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "style" || ((_a8 = partInfo.strings) == null ? void 0 : _a8.length) > 2) {
      throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
  }
  render(styleInfo) {
    return Object.keys(styleInfo).reduce((style, prop) => {
      const value = styleInfo[prop];
      if (value == null) {
        return style;
      }
      prop = prop.includes("-") ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
      return style + `${prop}:${value};`;
    }, "");
  }
  update(part, [styleInfo]) {
    const { style } = part.element;
    if (this._previousStyleProperties === void 0) {
      this._previousStyleProperties = new Set(Object.keys(styleInfo));
      return this.render(styleInfo);
    }
    for (const name2 of this._previousStyleProperties) {
      if (styleInfo[name2] == null) {
        this._previousStyleProperties.delete(name2);
        if (name2.includes("-")) {
          style.removeProperty(name2);
        } else {
          style[name2] = null;
        }
      }
    }
    for (const name2 in styleInfo) {
      const value = styleInfo[name2];
      if (value != null) {
        this._previousStyleProperties.add(name2);
        const isImportant = typeof value === "string" && value.endsWith(importantFlag);
        if (name2.includes("-") || isImportant) {
          style.setProperty(name2, isImportant ? value.slice(0, flagTrim) : value, isImportant ? important : "");
        } else {
          style[name2] = value;
        }
      }
    }
    return noChange;
  }
};
var styleMap = directive(StyleMapDirective);

// node_modules/@arcgis/lumina/dist/index.js
var createEventFactory = (eventName = "", options = {}, component = retrieveComponent()) => {
  const emitter = {
    emit: (payload) => {
      if (isEsriInternalEnv() && !component.el.isConnected) {
        console.warn(
          `Trying to emit an ${eventName} event on a disconnected element ${component.el.tagName.toLowerCase()}`
        );
      }
      if (eventName === "") {
        keyTrackResolve();
        if (isEsriInternalEnv() && eventName === "") {
          throw new Error("Unable to resolve event name from property name");
        }
      }
      const event = new CustomEvent(eventName, {
        detail: payload,
        cancelable: true,
        bubbles: true,
        composed: true,
        ...options
      });
      component.el.dispatchEvent(event);
      return event;
    }
  };
  if (eventName === "") {
    trackKey(
      void 0,
      (resolution) => {
        if (isEsriInternalEnv() && resolution === void 0) {
          throw new Error(`createEvent must be called in property default value only`);
        }
        eventName = resolution.key;
      },
      emitter
    );
  }
  return emitter;
};
var createEvent = createEventFactory.bind(null, "");
var emptyFunction = () => void 0;
var _a7;
var LitElement2 = (_a7 = class extends LitElement {
  constructor() {
    var _a8, _b3, _c, _d, _e, _f;
    super();
    this.el = this.constructor.lazy ?? this;
    this.manager = useControllerManager(this);
    this._postLoad = ((_a8 = this.constructor.lazy) == null ? void 0 : _a8._postLoad) ?? new Deferred();
    this._offspring = ((_b3 = this.constructor.lazy) == null ? void 0 : _b3._offspring) ?? [];
    this._postLoaded = ((_c = this.constructor.lazy) == null ? void 0 : _c._postLoaded) ?? new Deferred();
    this._enableUpdating = this.enableUpdating;
    this.enableUpdating = emptyFunction;
    const ourShouldUpdate = _a7.prototype.shouldUpdate;
    if (this.shouldUpdate !== ourShouldUpdate) {
      this._originalShouldUpdate = this.shouldUpdate;
      this.shouldUpdate = ourShouldUpdate;
    }
    if (true) {
      const isOwnComponent = (_d = globalThis.devOnly$ownTagNames) == null ? void 0 : _d.has(
        this.el.tagName.toLowerCase()
      );
      const constructor = this.constructor;
      const warningsWereCustomized = constructor.enabledWarnings !== LitElement.enabledWarnings;
      if (!isOwnComponent && !warningsWereCustomized) {
        (_e = constructor.disableWarning) == null ? void 0 : _e.call(constructor, "change-in-update");
      }
      if (isEsriInternalEnv()) {
        (_f = globalThis.devOnly$luminaComponentRefCallback) == null ? void 0 : _f.call(globalThis, this);
      }
    }
    if (isServer) {
      this.el.setAttribute(this.constructor.runtime.hydratedAttribute, "");
    }
  }
  /**
   * Customize Lit's default style handling to support non-shadow-root styles
   */
  static finalizeStyles(styles) {
    var _a8;
    if (false) {
      styles = styles.filter(Boolean);
    }
    const finalizedStyles = super.finalizeStyles(styles);
    const useLightDom = this.shadowRootOptions === noShadowRoot;
    return ((_a8 = this.runtime) == null ? void 0 : _a8.commonStyles) === void 0 || useLightDom ? finalizedStyles : [this.runtime.commonStyles, ...finalizedStyles];
  }
  static createProperty(name2, options) {
    const flags = typeof options === "number" ? options : Array.isArray(options) ? options[0] : 0;
    const rest = Array.isArray(options) ? options[1] : void 0;
    super.createProperty(name2, {
      /**
       * By default to infer attribute name from property name, Lit just
       * converts property name to lowercase. That is consistent with
       * native DOM attributes.
       *
       * However, that is not consistent with Stencil and would be a
       * breaking change for us. Also, kebab-case is more common among the
       * web components. But the most important reason is that we have
       * some pretty long attribute names, which would be utterly
       * unreadable in lowercase.
       *
       * Also, if browsers add new attributes, that may cause a conflict
       * with our attributes.
       *
       * Thus, overwriting Lit's default behavior to use kebab-case:
       */
      attribute: !!(flags & 1) && typeof name2 === "string" ? camelToKebab(name2) : false,
      reflect: !!(flags & 2),
      type: flags & 4 ? Boolean : flags & 8 ? Number : void 0,
      /**
       * At the moment in Lit, state:true just means attribute:false, so this
       * line is technically redundant, but let's keep it here just in case Lit
       * will add more meaning to state:true in the future.
       */
      state: !!(flags & 16),
      // Controllers add this option to Lit
      readOnly: !!(flags & 32),
      noAccessor: !!(flags & 64),
      ...rest
    });
  }
  connectedCallback() {
    if (this.el.hasAttribute("defer-hydration")) {
      return;
    }
    const isFirstCall = !this.manager.connectedCalled;
    super.connectedCallback();
    if (isFirstCall) {
      queueMicrotask(
        // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
        () => this._load().catch((error) => {
          this._postLoaded.reject(error);
          setTimeout(() => {
            throw error;
          });
        })
      );
    }
  }
  /**
   * Overwrite Lit's default behavior of attaching shadow root to the lit
   * element, and instead use this.el to support lazy builds.
   *
   * Also, support the case when component asked to not use shadow root
   */
  createRenderRoot() {
    const existingShadowRoot = this.el.shadowRoot;
    const Class = this.constructor;
    const options = Class.shadowRootOptions;
    const useLightDom = options === noShadowRoot;
    const renderRoot = existingShadowRoot ?? (useLightDom ? this.el : this.el.attachShadow(options));
    Object.defineProperty(this, "shadowRoot", {
      // Create shadow root on the proxy instance, to make Lit render content there
      value: renderRoot
    });
    if (existingShadowRoot) {
      if (false) {
        LitElement.prototype.createRenderRoot.call(this);
      }
      return existingShadowRoot;
    }
    if (this.isConnected) {
      const domRoot = renderRoot.getRootNode();
      if (false) {
        domRoot.adoptedStyleSheets ?? (domRoot.adoptedStyleSheets = []);
      }
      domRoot.adoptedStyleSheets = [
        ...domRoot.adoptedStyleSheets,
        ...Class.elementStyles.map((stylesheet) => "styleSheet" in stylesheet ? stylesheet.styleSheet : stylesheet)
      ];
    }
    return renderRoot;
  }
  /** Do asynchronous component load */
  async _load() {
    const parentLoadPromise = this.el._ancestorLoad ?? attachToAncestor(this.el);
    if (parentLoadPromise) {
      await parentLoadPromise;
    }
    await this.manager._load();
    this._enableUpdating(true);
    this.performUpdate();
    this._postLoad.resolve();
    await Promise.resolve();
    const pendingChildren = this._offspring.filter((loaded) => {
      var _a8;
      return !((_a8 = loaded.manager) == null ? void 0 : _a8.loadedCalled);
    });
    if (pendingChildren.length) {
      await Promise.allSettled(pendingChildren.map(async (child) => await child.componentOnReady()));
    }
    this._offspring.length = 0;
    this.el.setAttribute(this.constructor.runtime.hydratedAttribute, "");
    this.manager._loaded();
    this._postLoaded.resolve();
  }
  /**
   * Overwriting default shouldUpdate simply to get access to
   * "changedProperties" so that we can later provide it to ControllerManager
   */
  shouldUpdate(_changedProperties) {
    var _a8;
    this.$changes = _changedProperties;
    return ((_a8 = this._originalShouldUpdate) == null ? void 0 : _a8.call(this, _changedProperties)) ?? true;
  }
  listen(name2, listener, options) {
    const boundListener = (listener == null ? void 0 : listener.bind(this)) ?? listener;
    this.manager.onLifecycle(() => {
      this.el.addEventListener(name2, boundListener, options);
      return () => this.el.removeEventListener(name2, boundListener, options);
    });
  }
  listenOn(target, name2, listener, options) {
    const boundListener = (listener == null ? void 0 : listener.bind(this)) ?? listener;
    this.manager.onLifecycle(() => {
      target.addEventListener(name2, boundListener, options);
      return () => target.removeEventListener(name2, boundListener, options);
    });
  }
  /**
   * Create a promise that resolves once component is fully loaded.
   *
   * @example
   * const map = document.createElement('arcgis-map');
   * document.body.append(map);
   * map.componentOnReady().then(() => {
   *   console.log('Map is ready to go!');
   * });
   */
  async componentOnReady() {
    await this._postLoaded.promise;
    return this;
  }
}, _a7.lumina = true, _a7);
LitElement2.$createEvent = createEventFactory;
if (isEsriInternalEnv()) {
  const globalWithLit = globalThis;
  globalWithLit.litIssuedWarnings ?? (globalWithLit.litIssuedWarnings = /* @__PURE__ */ new Set());
  globalWithLit.litIssuedWarnings.add(
    "Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators See https://lit.dev/msg/no-override-create-property for more information."
  );
}
function makeRuntime(options) {
  let assetPath;
  const setAssetPath = (path) => {
    var _c;
    assetPath = new URL(
      path,
      /**
       * setAssetPath() is called in global scope whenever Lumina runtime is
       * imported. Thus we need to carefully handle different environments.
       *
       * Need `|| undefined` because Stencil's unit tests mock-dock defines
       * `location.href` as empty string, which crashes `new URL()`. Stencil's
       * test environment does not define `NODE_ENV` by default, so we have to
       * add a few bytes to production.
       *
       * For happy-dom and jsdom, we are assuming that `NODE_ENV` is set.
       * Depending on configuration, `location?.href` is either undefined (not
       * an exception) or `about:blank` (an exception - thus handling that case
       * explicitly).
       *
       * For Node.js without a DOM environment, `location?.href` is undefined so
       * all is good.
       */
      false ? ((_a8 = globalThis.location) == null ? void 0 : _a8.href) === "about:blank" ? void 0 : ((_b3 = globalThis.location) == null ? void 0 : _b3.href) || void 0 : ((_c = globalThis.location) == null ? void 0 : _c.href) || void 0
    ).href;
  };
  const runtime = {
    ...options,
    // FEATURE: research https://vitejs.dev/guide/build.html#advanced-base-options
    getAssetPath(suffix) {
      var _a8;
      const assetUrl = new URL(suffix, assetPath);
      return assetUrl.origin !== ((_a8 = globalThis.location) == null ? void 0 : _a8.origin) ? assetUrl.href : assetUrl.pathname;
    },
    setAssetPath,
    customElement(tagName, component) {
      component.runtime = runtime;
      component.tagName = tagName;
      if (!customElements.get(tagName)) {
        customElements.define(tagName, component);
      }
    }
  };
  setAssetPath(options.defaultAssetPath);
  if (isEsriInternalEnv()) {
    globalThis.devOnly$luminaRuntime = runtime;
  }
  return runtime;
}
var safeClassMap = (parameters) => typeof parameters === "object" && parameters != null ? classMap(parameters) : parameters;
var safeStyleMap = (parameters) => typeof parameters === "object" && parameters != null ? styleMap(parameters) : parameters;
var nothing3 = nothing2;
function setAttribute(element, attributeName, value) {
  if (value == null) {
    element.removeAttribute(attributeName);
  } else {
    element.setAttribute(attributeName, value);
  }
}
var stringOrBoolean = {
  toAttribute: (value) => value === true ? "" : value === false ? null : value
};

// node_modules/@esri/calcite-components/dist/chunks/runtime.js
var l = "calcite-mode-auto";
var u = "calcite-mode-dark";
var h = "calcite-mode-light";
var D = {
  autoMode: l,
  darkMode: u,
  lightMode: h,
  rtl: "calcite--rtl",
  calciteAnimate: "calcite-animate",
  calciteAnimateInUp: "calcite-animate__in-up",
  calciteAnimateInDown: "calcite-animate__in-down",
  calciteAnimateInRight: "calcite-animate__in-right",
  calciteAnimateInLeft: "calcite-animate__in-left"
};
var M = {
  filter: 250,
  nextTick: 0,
  resize: 150,
  reposition: 100
};
function r() {
  const { classList: t } = document.body, i = window.matchMedia("(prefers-color-scheme: dark)").matches, a = () => t.contains(u) || t.contains(l) && i ? "dark" : "light", c = (e) => document.body.dispatchEvent(new CustomEvent("calciteModeChange", { bubbles: true, detail: { mode: e } })), s = (e) => {
    o !== e && c(e), o = e;
  };
  let o = a();
  c(o), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => s(e.matches ? "dark" : "light")), new MutationObserver(() => s(a())).observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });
}
var n = globalThis.calciteConfig;
var _ = (n == null ? void 0 : n.focusTrapStack) || [];
var E = (n == null ? void 0 : n.logLevel) || "info";
var d2 = "3.0.3";
var p = "2025-02-19";
var b = "0b0b89f59";
function v() {
  if (n && n.version)
    return;
  console.info(`Using Calcite Components ${d2} [Date: ${p}, Revision: ${b}]`);
  const t = n || globalThis.calciteConfig || {};
  Object.defineProperty(t, "version", {
    value: d2,
    writable: false
  }), globalThis.calciteConfig = t;
}
var m = () => !isServer && typeof navigator < "u" && typeof window < "u" && typeof location < "u" && typeof document < "u" && window.location === location && window.document === document;
function C() {
  return navigator.userAgentData;
}
function L() {
  if (!m())
    return "";
  const t = C();
  return (t == null ? void 0 : t.brands) ? t.brands.map(({ brand: i, version: a }) => `${i}/${a}`).join(" ") : navigator.userAgent;
}
function w() {
  m() && (document.readyState === "interactive" ? r() : document.addEventListener("DOMContentLoaded", () => r(), { once: true })), v();
}
w();
var A = makeRuntime({ defaultAssetPath: "https://js.arcgis.com/calcite-components/3.0.3/", hydratedAttribute: "calcite-hydrated" });
var { customElement: S, getAssetPath: T, setAssetPath: I } = A;

export {
  makeGenericController,
  useWatchAttributes,
  makeT9nController,
  css,
  html,
  svg,
  mathml,
  nothing2 as nothing,
  render,
  PartType,
  directive,
  Directive,
  isSingleExpression,
  setCommittedValue,
  live,
  createEvent,
  LitElement2 as LitElement,
  safeClassMap,
  safeStyleMap,
  nothing3 as nothing2,
  setAttribute,
  stringOrBoolean,
  D,
  M,
  _,
  E,
  m,
  L,
  S,
  T,
  I
};
/*! Bundled license information:

@lit/reactive-element/development/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/development/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/development/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@esri/calcite-components/dist/chunks/runtime.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-RVUV2HD7.js.map
