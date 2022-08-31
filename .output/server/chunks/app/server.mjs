import { g as getDefaultExportFromNamespaceIfNotNamed, c as commonjsGlobal, a as getDefaultExportFromCjs } from '../handlers/renderer.mjs';
import * as ufo from 'ufo';
import * as cookieEs from 'cookie-es';
import * as defu from 'defu';
import * as axios from 'axios';
import * as destr from 'destr';
import * as hookable from 'hookable';
import * as radix3 from 'radix3';
import * as ohash from 'ohash';
import * as esnext_set_addAll from 'core-js/modules/esnext.set.add-all.js';
import * as esnext_set_deleteAll from 'core-js/modules/esnext.set.delete-all.js';
import * as esnext_set_difference from 'core-js/modules/esnext.set.difference.js';
import * as esnext_set_every from 'core-js/modules/esnext.set.every.js';
import * as esnext_set_filter from 'core-js/modules/esnext.set.filter.js';
import * as esnext_set_find from 'core-js/modules/esnext.set.find.js';
import * as esnext_set_intersection from 'core-js/modules/esnext.set.intersection.js';
import * as esnext_set_isDisjointFrom from 'core-js/modules/esnext.set.is-disjoint-from.js';
import * as esnext_set_isSubsetOf from 'core-js/modules/esnext.set.is-subset-of.js';
import * as esnext_set_isSupersetOf from 'core-js/modules/esnext.set.is-superset-of.js';
import * as esnext_set_join from 'core-js/modules/esnext.set.join.js';
import * as esnext_set_map from 'core-js/modules/esnext.set.map.js';
import * as esnext_set_reduce from 'core-js/modules/esnext.set.reduce.js';
import * as esnext_set_some from 'core-js/modules/esnext.set.some.js';
import * as esnext_set_symmetricDifference from 'core-js/modules/esnext.set.symmetric-difference.js';
import * as esnext_set_union from 'core-js/modules/esnext.set.union.js';
import * as deepmerge from 'deepmerge';
import * as url from 'url';
import 'h3';
import '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'fs';
import 'pathe';
import 'stream';
import 'unenv/runtime/mock/proxy';
import 'path';
import 'vm';
import 'module';

var server$2 = {exports: {}};

var server$1 = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ufo);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(cookieEs);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(defu);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(axios);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(destr);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(hookable);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(radix3);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ohash);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_addAll);

const require$$9 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_deleteAll);

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_difference);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_every);

const require$$12 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_filter);

const require$$13 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_find);

const require$$14 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_intersection);

const require$$15 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isDisjointFrom);

const require$$16 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSubsetOf);

const require$$17 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSupersetOf);

const require$$18 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_join);

const require$$19 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_map);

const require$$20 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_reduce);

const require$$21 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_some);

const require$$22 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_symmetricDifference);

const require$$23 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_union);

const require$$24 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(deepmerge);

const require$$25 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(url);

(function (module) {
	module.exports = function(modules) {
	  var installedModules = {};
	  var installedChunks = {
	    0: 0
	  };
	  function __webpack_require__(moduleId) {
	    if (installedModules[moduleId]) {
	      return installedModules[moduleId].exports;
	    }
	    var module2 = installedModules[moduleId] = {
	      i: moduleId,
	      l: false,
	      exports: {}
	    };
	    modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
	    module2.l = true;
	    return module2.exports;
	  }
	  __webpack_require__.e = function requireEnsure(chunkId) {
	    var promises = [];
	    var installedChunkData = installedChunks[chunkId];
	    if (installedChunkData !== 0) {
	      if (installedChunkData) {
	        promises.push(installedChunkData[2]);
	      } else {
	        var promise = new Promise(function(resolve, reject) {
	          installedChunkData = installedChunks[chunkId] = [resolve, reject];
	          import('../rollup/_dynamic-require.mjs').then(r => r.default || r).then(dynamicRequire => dynamicRequire( ({ "1": "components/nuxt-logo", "2": "components/tutorial", "3": "pages/index" }[chunkId] || chunkId) + ".js")).then((chunk) => {
	            var moreModules = chunk.modules, chunkIds = chunk.ids;
	            for (var moduleId in moreModules) {
	              modules[moduleId] = moreModules[moduleId];
	            }
	            var callbacks = [];
	            for (var i = 0; i < chunkIds.length; i++) {
	              if (installedChunks[chunkIds[i]])
	                callbacks = callbacks.concat(installedChunks[chunkIds[i]][0]);
	              installedChunks[chunkIds[i]] = 0;
	            }
	            for (i = 0; i < callbacks.length; i++)
	              callbacks[i]();
	          });
	        });
	        promises.push(installedChunkData[2] = promise);
	      }
	    }
	    return Promise.all(promises);
	  };
	  __webpack_require__.m = modules;
	  __webpack_require__.c = installedModules;
	  __webpack_require__.d = function(exports, name, getter) {
	    if (!__webpack_require__.o(exports, name)) {
	      Object.defineProperty(exports, name, { enumerable: true, get: getter });
	    }
	  };
	  __webpack_require__.r = function(exports) {
	    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
	      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	  };
	  __webpack_require__.t = function(value, mode) {
	    if (mode & 1)
	      value = __webpack_require__(value);
	    if (mode & 8)
	      return value;
	    if (mode & 4 && typeof value === "object" && value && value.__esModule)
	      return value;
	    var ns = /* @__PURE__ */ Object.create(null);
	    __webpack_require__.r(ns);
	    Object.defineProperty(ns, "default", { enumerable: true, value });
	    if (mode & 2 && typeof value != "string")
	      for (var key in value)
	        __webpack_require__.d(ns, key, function(key2) {
	          return value[key2];
	        }.bind(null, key));
	    return ns;
	  };
	  __webpack_require__.n = function(module2) {
	    var getter = module2 && module2.__esModule ? function getDefault() {
	      return module2["default"];
	    } : function getModuleExports() {
	      return module2;
	    };
	    __webpack_require__.d(getter, "a", getter);
	    return getter;
	  };
	  __webpack_require__.o = function(object, property) {
	    return Object.prototype.hasOwnProperty.call(object, property);
	  };
	  __webpack_require__.p = "/_nuxt/";
	  __webpack_require__.oe = function(err) {
	    process.nextTick(function() {
	      throw err;
	    });
	  };
	  return __webpack_require__(__webpack_require__.s = 20);
	}([
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.d(__webpack_exports__, "l", function() {
	      return ref;
	    });
	    __webpack_require__.d(__webpack_exports__, "f", function() {
	      return isRef;
	    });
	    __webpack_require__.d(__webpack_exports__, "n", function() {
	      return toRef;
	    });
	    __webpack_require__.d(__webpack_exports__, "a", function() {
	      return computed;
	    });
	    __webpack_require__.d(__webpack_exports__, "k", function() {
	      return reactive;
	    });
	    __webpack_require__.d(__webpack_exports__, "e", function() {
	      return isReactive;
	    });
	    __webpack_require__.d(__webpack_exports__, "o", function() {
	      return watch;
	    });
	    __webpack_require__.d(__webpack_exports__, "g", function() {
	      return onBeforeMount;
	    });
	    __webpack_require__.d(__webpack_exports__, "h", function() {
	      return onBeforeUnmount;
	    });
	    __webpack_require__.d(__webpack_exports__, "j", function() {
	      return onUnmounted;
	    });
	    __webpack_require__.d(__webpack_exports__, "i", function() {
	      return onServerPrefetch;
	    });
	    __webpack_require__.d(__webpack_exports__, "m", function() {
	      return set;
	    });
	    __webpack_require__.d(__webpack_exports__, "d", function() {
	      return getCurrentInstance;
	    });
	    __webpack_require__.d(__webpack_exports__, "c", function() {
	      return defineComponent;
	    });
	    var _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
	    var _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0__);
	    __webpack_exports__["b"] = _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default.a;
	    const {
	      version,
	      ref,
	      shallowRef,
	      isRef,
	      toRef,
	      toRefs,
	      unref,
	      proxyRefs,
	      customRef,
	      triggerRef,
	      computed,
	      reactive,
	      isReactive,
	      isReadonly,
	      isShallow,
	      isProxy,
	      shallowReactive,
	      markRaw,
	      toRaw,
	      readonly,
	      shallowReadonly,
	      watch,
	      watchEffect,
	      watchPostEffect,
	      watchSyncEffect,
	      effectScope,
	      onScopeDispose,
	      getCurrentScope,
	      provide,
	      inject,
	      onBeforeMount,
	      onMounted,
	      onBeforeUpdate,
	      onUpdated,
	      onBeforeUnmount,
	      onUnmounted,
	      onErrorCaptured,
	      onActivated,
	      onDeactivated,
	      onServerPrefetch,
	      onRenderTracked,
	      onRenderTriggered,
	      set,
	      del,
	      h,
	      getCurrentInstance,
	      useSlots,
	      useAttrs,
	      mergeDefaults,
	      nextTick,
	      useCssModule,
	      useCssVars,
	      defineComponent,
	      defineAsyncComponent
	    } = _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default.a;
	  },
	  function(module2, exports) {
	    module2.exports = require$$0;
	  },
	  function(module2, exports) {
	    module2.exports = require$$1;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.d(__webpack_exports__, "a", function() {
	      return normalizeComponent;
	    });
	    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
	      var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
	      if (render) {
	        options.render = render;
	        options.staticRenderFns = staticRenderFns;
	        options._compiled = true;
	      }
	      if (functionalTemplate) {
	        options.functional = true;
	      }
	      if (scopeId) {
	        options._scopeId = "data-v-" + scopeId;
	      }
	      var hook;
	      if (moduleIdentifier) {
	        hook = function(context) {
	          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
	          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
	            context = __VUE_SSR_CONTEXT__;
	          }
	          if (injectStyles) {
	            injectStyles.call(this, context);
	          }
	          if (context && context._registeredComponents) {
	            context._registeredComponents.add(moduleIdentifier);
	          }
	        };
	        options._ssrRegister = hook;
	      } else if (injectStyles) {
	        hook = shadowMode ? function() {
	          injectStyles.call(
	            this,
	            (options.functional ? this.parent : this).$root.$options.shadowRoot
	          );
	        } : injectStyles;
	      }
	      if (hook) {
	        if (options.functional) {
	          options._injectStyles = hook;
	          var originalRender = options.render;
	          options.render = function renderWithStyleInjection(h, context) {
	            hook.call(context);
	            return originalRender(h, context);
	          };
	        } else {
	          var existing = options.beforeCreate;
	          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	      }
	      return {
	        exports: scriptExports,
	        options
	      };
	    }
	  },
	  function(module2, exports) {
	    module2.exports = require$$2;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    const middleware = {};
	    __webpack_exports__["default"] = middleware;
	  },
	  function(module2, exports) {
	    module2.exports = require$$3;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    (function(URLSearchParams) {
	      __webpack_require__.d(__webpack_exports__, "a", function() {
	        return appendHeader;
	      });
	      __webpack_require__.d(__webpack_exports__, "b", function() {
	        return sendRedirect;
	      });
	      __webpack_require__(1);
	      __webpack_require__(18);
	      __webpack_require__(8);
	      __webpack_require__(2);
	      const MIMES = {
	        html: "text/html",
	        json: "application/json"
	      };
	      const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
	      function send(event, data, type) {
	        if (type) {
	          defaultContentType(event, type);
	        }
	        return new Promise((resolve) => {
	          defer(() => {
	            event.res.end(data);
	            resolve(void 0);
	          });
	        });
	      }
	      function defaultContentType(event, type) {
	        if (type && !event.res.getHeader("Content-Type")) {
	          event.res.setHeader("Content-Type", type);
	        }
	      }
	      function sendRedirect(event, location, code = 302) {
	        const encodedLoc = encodeURI(location);
	        event.res.statusCode = code;
	        event.res.setHeader("Location", encodedLoc);
	        const html = `<!DOCTYPE html>
<html>
  <head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head>
  <body>Redirecting to <a href=${JSON.stringify(encodedLoc)}>${encodedLoc}</a></body>
</html>`;
	        return send(event, html, MIMES.html);
	      }
	      function appendResponseHeader(event, name, value) {
	        let current = event.res.getHeader(name);
	        if (!current) {
	          event.res.setHeader(name, value);
	          return;
	        }
	        if (!Array.isArray(current)) {
	          current = [current.toString()];
	        }
	        event.res.setHeader(name, current.concat(value));
	      }
	      const appendHeader = appendResponseHeader;
	      class H3Error extends Error {
	        constructor() {
	          super(...arguments);
	          this.statusCode = 500;
	          this.fatal = false;
	          this.unhandled = false;
	          this.statusMessage = "Internal Server Error";
	        }
	      }
	      H3Error.__h3_error__ = true;
	    }).call(this, __webpack_require__(46)["URLSearchParams"]);
	  },
	  function(module2, exports) {
	    module2.exports = require$$4;
	  },
	  function(module2, exports, __webpack_require__) {
	    /*!
	     * vue-no-ssr v1.1.1
	     * (c) 2018-present egoist <0x142857@gmail.com>
	     * Released under the MIT License.
	     */
	    var index = {
	      name: "NoSsr",
	      functional: true,
	      props: {
	        placeholder: String,
	        placeholderTag: {
	          type: String,
	          default: "div"
	        }
	      },
	      render: function render(h, ref) {
	        var parent = ref.parent;
	        var slots = ref.slots;
	        var props = ref.props;
	        var ref$1 = slots();
	        var defaultSlot = ref$1.default;
	        if (defaultSlot === void 0)
	          defaultSlot = [];
	        var placeholderSlot = ref$1.placeholder;
	        if (parent._isMounted) {
	          return defaultSlot;
	        }
	        parent.$once("hook:mounted", function() {
	          parent.$forceUpdate();
	        });
	        if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
	          return h(props.placeholderTag, {
	            class: ["no-ssr-placeholder"]
	          }, props.placeholder || placeholderSlot);
	        }
	        return defaultSlot.length > 0 ? defaultSlot.map(function() {
	          return h(false);
	        }) : h(false);
	      }
	    };
	    module2.exports = index;
	  },
	  function(module2, exports, __webpack_require__) {
	    module2.exports = function(cssWithMappingToString) {
	      var list = [];
	      list.toString = function toString() {
	        return this.map(function(item) {
	          var content = cssWithMappingToString(item);
	          if (item[2]) {
	            return "@media ".concat(item[2], " {").concat(content, "}");
	          }
	          return content;
	        }).join("");
	      };
	      list.i = function(modules, mediaQuery, dedupe) {
	        if (typeof modules === "string") {
	          modules = [[null, modules, ""]];
	        }
	        var alreadyImportedModules = {};
	        if (dedupe) {
	          for (var i = 0; i < this.length; i++) {
	            var id = this[i][0];
	            if (id != null) {
	              alreadyImportedModules[id] = true;
	            }
	          }
	        }
	        for (var _i = 0; _i < modules.length; _i++) {
	          var item = [].concat(modules[_i]);
	          if (dedupe && alreadyImportedModules[item[0]]) {
	            continue;
	          }
	          if (mediaQuery) {
	            if (!item[2]) {
	              item[2] = mediaQuery;
	            } else {
	              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
	            }
	          }
	          list.push(item);
	        }
	      };
	      return list;
	    };
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "default", function() {
	      return addStylesServer;
	    });
	    function listToStyles(parentId, list) {
	      var styles = [];
	      var newStyles = {};
	      for (var i = 0; i < list.length; i++) {
	        var item = list[i];
	        var id = item[0];
	        var css = item[1];
	        var media = item[2];
	        var sourceMap = item[3];
	        var part = {
	          id: parentId + ":" + i,
	          css,
	          media,
	          sourceMap
	        };
	        if (!newStyles[id]) {
	          styles.push(newStyles[id] = {
	            id,
	            parts: [part]
	          });
	        } else {
	          newStyles[id].parts.push(part);
	        }
	      }
	      return styles;
	    }
	    function addStylesServer(parentId, list, isProduction, context) {
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
	        context = __VUE_SSR_CONTEXT__;
	      }
	      if (context) {
	        if (!context.hasOwnProperty("styles")) {
	          Object.defineProperty(context, "styles", {
	            enumerable: true,
	            get: function() {
	              return renderStyles(context._styles);
	            }
	          });
	          context._renderStyles = renderStyles;
	        }
	        var styles = context._styles || (context._styles = {});
	        list = listToStyles(parentId, list);
	        if (isProduction) {
	          addStyleProd(styles, list);
	        } else {
	          addStyleDev(styles, list);
	        }
	      }
	    }
	    function addStyleProd(styles, list) {
	      for (var i = 0; i < list.length; i++) {
	        var parts = list[i].parts;
	        for (var j = 0; j < parts.length; j++) {
	          var part = parts[j];
	          var id = part.media || "default";
	          var style = styles[id];
	          if (style) {
	            if (style.ids.indexOf(part.id) < 0) {
	              style.ids.push(part.id);
	              style.css += "\n" + part.css;
	            }
	          } else {
	            styles[id] = {
	              ids: [part.id],
	              css: part.css,
	              media: part.media
	            };
	          }
	        }
	      }
	    }
	    function addStyleDev(styles, list) {
	      for (var i = 0; i < list.length; i++) {
	        var parts = list[i].parts;
	        for (var j = 0; j < parts.length; j++) {
	          var part = parts[j];
	          styles[part.id] = {
	            ids: [part.id],
	            css: part.css,
	            media: part.media
	          };
	        }
	      }
	    }
	    function renderStyles(styles) {
	      var css = "";
	      for (var key in styles) {
	        var style = styles[key];
	        css += '<style data-vue-ssr-id="' + style.ids.join(" ") + '"' + (style.media ? ' media="' + style.media + '"' : "") + ">" + style.css + "</style>";
	      }
	      return css;
	    }
	  },
	  function(module2, exports, __webpack_require__) {
	    {
	      module2.exports = __webpack_require__(22);
	    }
	  },
	  function(module2, exports, __webpack_require__) {
	    /*!
	     * vue-client-only v0.0.0-semantic-release
	     * (c) 2021-present egoist <0x142857@gmail.com>
	     * Released under the MIT License.
	     */
	    var index = {
	      name: "ClientOnly",
	      functional: true,
	      props: {
	        placeholder: String,
	        placeholderTag: {
	          type: String,
	          default: "div"
	        }
	      },
	      render: function render(h, ref) {
	        var parent = ref.parent;
	        var slots = ref.slots;
	        var props = ref.props;
	        var ref$1 = slots();
	        var defaultSlot = ref$1.default;
	        if (defaultSlot === void 0)
	          defaultSlot = [];
	        var placeholderSlot = ref$1.placeholder;
	        if (parent._isMounted) {
	          return defaultSlot;
	        }
	        parent.$once("hook:mounted", function() {
	          parent.$forceUpdate();
	        });
	        if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
	          return h(props.placeholderTag, {
	            class: ["client-only-placeholder"]
	          }, props.placeholder || placeholderSlot);
	        }
	        return defaultSlot.length > 0 ? defaultSlot.map(function() {
	          return h(false);
	        }) : h(false);
	      }
	    };
	    module2.exports = index;
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(41);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(11).default;
	    module2.exports.__inject__ = function(context) {
	      add("75f99d77", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(43);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(11).default;
	    module2.exports.__inject__ = function(context) {
	      add("6c1adca6", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    /**
	     * vue-meta v2.4.0
	     * (c) 2020
	     * - Declan de Wet
	     * - Sébastien Chopin (@Atinux)
	     * - Pim (@pimlie)
	     * - All the amazing contributors
	     * @license MIT
	     */
	    function _interopDefault(ex) {
	      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
	    }
	    var deepmerge = _interopDefault(__webpack_require__(39));
	    var version = "2.4.0";
	    function _typeof(obj) {
	      "@babel/helpers - typeof";
	      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	        _typeof = function(obj2) {
	          return typeof obj2;
	        };
	      } else {
	        _typeof = function(obj2) {
	          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
	        };
	      }
	      return _typeof(obj);
	    }
	    function _defineProperty(obj, key, value) {
	      if (key in obj) {
	        Object.defineProperty(obj, key, {
	          value,
	          enumerable: true,
	          configurable: true,
	          writable: true
	        });
	      } else {
	        obj[key] = value;
	      }
	      return obj;
	    }
	    function ownKeys(object, enumerableOnly) {
	      var keys = Object.keys(object);
	      if (Object.getOwnPropertySymbols) {
	        var symbols = Object.getOwnPropertySymbols(object);
	        if (enumerableOnly)
	          symbols = symbols.filter(function(sym) {
	            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	          });
	        keys.push.apply(keys, symbols);
	      }
	      return keys;
	    }
	    function _objectSpread2(target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i] != null ? arguments[i] : {};
	        if (i % 2) {
	          ownKeys(Object(source), true).forEach(function(key) {
	            _defineProperty(target, key, source[key]);
	          });
	        } else if (Object.getOwnPropertyDescriptors) {
	          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	        } else {
	          ownKeys(Object(source)).forEach(function(key) {
	            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	          });
	        }
	      }
	      return target;
	    }
	    function _toConsumableArray(arr) {
	      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	    }
	    function _arrayWithoutHoles(arr) {
	      if (Array.isArray(arr))
	        return _arrayLikeToArray(arr);
	    }
	    function _iterableToArray(iter) {
	      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
	        return Array.from(iter);
	    }
	    function _unsupportedIterableToArray(o, minLen) {
	      if (!o)
	        return;
	      if (typeof o === "string")
	        return _arrayLikeToArray(o, minLen);
	      var n = Object.prototype.toString.call(o).slice(8, -1);
	      if (n === "Object" && o.constructor)
	        n = o.constructor.name;
	      if (n === "Map" || n === "Set")
	        return Array.from(o);
	      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
	        return _arrayLikeToArray(o, minLen);
	    }
	    function _arrayLikeToArray(arr, len) {
	      if (len == null || len > arr.length)
	        len = arr.length;
	      for (var i = 0, arr2 = new Array(len); i < len; i++)
	        arr2[i] = arr[i];
	      return arr2;
	    }
	    function _nonIterableSpread() {
	      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	    }
	    function _createForOfIteratorHelper(o, allowArrayLike) {
	      var it;
	      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
	        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	          if (it)
	            o = it;
	          var i = 0;
	          var F = function() {
	          };
	          return {
	            s: F,
	            n: function() {
	              if (i >= o.length)
	                return {
	                  done: true
	                };
	              return {
	                done: false,
	                value: o[i++]
	              };
	            },
	            e: function(e) {
	              throw e;
	            },
	            f: F
	          };
	        }
	        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	      }
	      var normalCompletion = true, didErr = false, err;
	      return {
	        s: function() {
	          it = o[Symbol.iterator]();
	        },
	        n: function() {
	          var step = it.next();
	          normalCompletion = step.done;
	          return step;
	        },
	        e: function(e) {
	          didErr = true;
	          err = e;
	        },
	        f: function() {
	          try {
	            if (!normalCompletion && it.return != null)
	              it.return();
	          } finally {
	            if (didErr)
	              throw err;
	          }
	        }
	      };
	    }
	    function isArray(arg) {
	      return Array.isArray(arg);
	    }
	    function isUndefined(arg) {
	      return typeof arg === "undefined";
	    }
	    function isObject(arg) {
	      return _typeof(arg) === "object";
	    }
	    function isPureObject(arg) {
	      return _typeof(arg) === "object" && arg !== null;
	    }
	    function isFunction(arg) {
	      return typeof arg === "function";
	    }
	    function isString(arg) {
	      return typeof arg === "string";
	    }
	    function hasGlobalWindowFn() {
	      try {
	        return !isUndefined(window);
	      } catch (e) {
	        return false;
	      }
	    }
	    var hasGlobalWindow = hasGlobalWindowFn();
	    var _global = hasGlobalWindow ? window : commonjsGlobal;
	    var console2 = _global.console || {};
	    function warn(str) {
	      if (!console2 || !console2.warn) {
	        return;
	      }
	      console2.warn(str);
	    }
	    var showWarningNotSupported = function showWarningNotSupported2() {
	      return warn("This vue app/component has no vue-meta configuration");
	    };
	    var defaultInfo = {
	      title: void 0,
	      titleChunk: "",
	      titleTemplate: "%s",
	      htmlAttrs: {},
	      bodyAttrs: {},
	      headAttrs: {},
	      base: [],
	      link: [],
	      meta: [],
	      style: [],
	      script: [],
	      noscript: [],
	      __dangerouslyDisableSanitizers: [],
	      __dangerouslyDisableSanitizersByTagID: {}
	    };
	    var rootConfigKey = "_vueMeta";
	    var keyName = "metaInfo";
	    var attribute = "data-vue-meta";
	    var ssrAttribute = "data-vue-meta-server-rendered";
	    var tagIDKeyName = "vmid";
	    var metaTemplateKeyName = "template";
	    var contentKeyName = "content";
	    var ssrAppId = "ssr";
	    var debounceWait = 10;
	    var waitOnDestroyed = true;
	    var defaultOptions = {
	      keyName,
	      attribute,
	      ssrAttribute,
	      tagIDKeyName,
	      contentKeyName,
	      metaTemplateKeyName,
	      waitOnDestroyed,
	      debounceWait,
	      ssrAppId
	    };
	    var defaultInfoKeys = Object.keys(defaultInfo);
	    var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]];
	    var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], "changed"].concat(disableOptionKeys);
	    var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]];
	    var tagsSupportingOnload = ["link", "style", "script"];
	    var tagsWithoutEndTag = ["base", "meta", "link"];
	    var tagsWithInnerContent = ["noscript", "script", "style"];
	    var tagAttributeAsInnerContent = ["innerHTML", "cssText", "json"];
	    var tagProperties = ["once", "skip", "template"];
	    var commonDataAttributes = ["body", "pbody"];
	    var booleanHtmlAttributes = ["allowfullscreen", "amp", "amp-boilerplate", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", "required", "reversed", "scoped", "seamless", "selected", "sortable", "truespeed", "typemustmatch", "visible"];
	    var batchId = null;
	    function triggerUpdate(_ref, rootVm, hookName) {
	      var debounceWait2 = _ref.debounceWait;
	      if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === "watcher")) {
	        rootVm[rootConfigKey].initialized = null;
	      }
	      if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
	        batchUpdate(function() {
	          return void rootVm.$meta().refresh();
	        }, debounceWait2);
	      }
	    }
	    function batchUpdate(callback, timeout) {
	      timeout = timeout === void 0 ? 10 : timeout;
	      if (!timeout) {
	        callback();
	        return;
	      }
	      clearTimeout(batchId);
	      batchId = setTimeout(function() {
	        callback();
	      }, timeout);
	      return batchId;
	    }
	    function find(array, predicate, thisArg) {
	      if (!Array.prototype.find) {
	        for (var idx = 0; idx < array.length; idx++) {
	          if (predicate.call(thisArg, array[idx], idx, array)) {
	            return array[idx];
	          }
	        }
	        return;
	      }
	      return array.find(predicate, thisArg);
	    }
	    function findIndex(array, predicate, thisArg) {
	      if (!Array.prototype.findIndex) {
	        for (var idx = 0; idx < array.length; idx++) {
	          if (predicate.call(thisArg, array[idx], idx, array)) {
	            return idx;
	          }
	        }
	        return -1;
	      }
	      return array.findIndex(predicate, thisArg);
	    }
	    function toArray(arg) {
	      if (!Array.from) {
	        return Array.prototype.slice.call(arg);
	      }
	      return Array.from(arg);
	    }
	    function includes(array, value) {
	      if (!Array.prototype.includes) {
	        for (var idx in array) {
	          if (array[idx] === value) {
	            return true;
	          }
	        }
	        return false;
	      }
	      return array.includes(value);
	    }
	    var querySelector = function querySelector2(arg, el) {
	      return (el || document).querySelectorAll(arg);
	    };
	    function getTag(tags, tag) {
	      if (!tags[tag]) {
	        tags[tag] = document.getElementsByTagName(tag)[0];
	      }
	      return tags[tag];
	    }
	    function getElementsKey(_ref) {
	      var body = _ref.body, pbody = _ref.pbody;
	      return body ? "body" : pbody ? "pbody" : "head";
	    }
	    function queryElements(parentNode, _ref2, attributes) {
	      var appId2 = _ref2.appId, attribute2 = _ref2.attribute, type = _ref2.type, tagIDKeyName2 = _ref2.tagIDKeyName;
	      attributes = attributes || {};
	      var queries = ["".concat(type, "[").concat(attribute2, '="').concat(appId2, '"]'), "".concat(type, "[data-").concat(tagIDKeyName2, "]")].map(function(query) {
	        for (var key in attributes) {
	          var val = attributes[key];
	          var attributeValue = val && val !== true ? '="'.concat(val, '"') : "";
	          query += "[data-".concat(key).concat(attributeValue, "]");
	        }
	        return query;
	      });
	      return toArray(querySelector(queries.join(", "), parentNode));
	    }
	    function removeElementsByAppId(_ref3, appId2) {
	      var attribute2 = _ref3.attribute;
	      toArray(querySelector("[".concat(attribute2, '="').concat(appId2, '"]'))).map(function(el) {
	        return el.remove();
	      });
	    }
	    function removeAttribute(el, attributeName) {
	      el.removeAttribute(attributeName);
	    }
	    function hasMetaInfo(vm) {
	      vm = vm || this;
	      return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]));
	    }
	    function inMetaInfoBranch(vm) {
	      vm = vm || this;
	      return vm && !isUndefined(vm[rootConfigKey]);
	    }
	    function pause(rootVm, refresh2) {
	      rootVm[rootConfigKey].pausing = true;
	      return function() {
	        return resume(rootVm, refresh2);
	      };
	    }
	    function resume(rootVm, refresh2) {
	      rootVm[rootConfigKey].pausing = false;
	      if (refresh2 || refresh2 === void 0) {
	        return rootVm.$meta().refresh();
	      }
	    }
	    function addNavGuards(rootVm) {
	      var router = rootVm.$router;
	      if (rootVm[rootConfigKey].navGuards || !router) {
	        return;
	      }
	      rootVm[rootConfigKey].navGuards = true;
	      router.beforeEach(function(to, from, next) {
	        pause(rootVm);
	        next();
	      });
	      router.afterEach(function() {
	        rootVm.$nextTick(function() {
	          var _resume = resume(rootVm), metaInfo = _resume.metaInfo;
	          if (metaInfo && isFunction(metaInfo.afterNavigation)) {
	            metaInfo.afterNavigation(metaInfo);
	          }
	        });
	      });
	    }
	    var appId = 1;
	    function createMixin(Vue, options) {
	      var updateOnLifecycleHook = ["activated", "deactivated", "beforeMount"];
	      var wasServerRendered = false;
	      return {
	        beforeCreate: function beforeCreate() {
	          var _this2 = this;
	          var rootKey = "$root";
	          var $root = this[rootKey];
	          var $options = this.$options;
	          var devtoolsEnabled = Vue.config.devtools;
	          Object.defineProperty(this, "_hasMetaInfo", {
	            configurable: true,
	            get: function get() {
	              if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
	                warn("VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead");
	                $root[rootConfigKey].deprecationWarningShown = true;
	              }
	              return hasMetaInfo(this);
	            }
	          });
	          if (this === $root) {
	            $root.$once("hook:beforeMount", function() {
	              wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute("data-server-rendered");
	              if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
	                var htmlTag = getTag({}, "html");
	                wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute);
	              }
	            });
	          }
	          if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
	            return;
	          }
	          if (!$root[rootConfigKey]) {
	            $root[rootConfigKey] = {
	              appId
	            };
	            appId++;
	            if (devtoolsEnabled && $root.$options[options.keyName]) {
	              this.$nextTick(function() {
	                var child = find($root.$children, function(c) {
	                  return c.$vnode && c.$vnode.fnOptions;
	                });
	                if (child && child.$vnode.fnOptions[options.keyName]) {
	                  warn("VueMeta has detected a possible global mixin which adds a ".concat(options.keyName, " property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"));
	                }
	              });
	            }
	          }
	          if (!this[rootConfigKey]) {
	            this[rootConfigKey] = true;
	            var parent = this.$parent;
	            while (parent && parent !== $root) {
	              if (isUndefined(parent[rootConfigKey])) {
	                parent[rootConfigKey] = false;
	              }
	              parent = parent.$parent;
	            }
	          }
	          if (isFunction($options[options.keyName])) {
	            $options.computed = $options.computed || {};
	            $options.computed.$metaInfo = $options[options.keyName];
	            if (!this.$isServer) {
	              this.$on("hook:created", function() {
	                this.$watch("$metaInfo", function() {
	                  triggerUpdate(options, this[rootKey], "watcher");
	                });
	              });
	            }
	          }
	          if (isUndefined($root[rootConfigKey].initialized)) {
	            $root[rootConfigKey].initialized = this.$isServer;
	            if (!$root[rootConfigKey].initialized) {
	              if (!$root[rootConfigKey].initializedSsr) {
	                $root[rootConfigKey].initializedSsr = true;
	                this.$on("hook:beforeMount", function() {
	                  var $root2 = this[rootKey];
	                  if (wasServerRendered) {
	                    $root2[rootConfigKey].appId = options.ssrAppId;
	                  }
	                });
	              }
	              this.$on("hook:mounted", function() {
	                var $root2 = this[rootKey];
	                if ($root2[rootConfigKey].initialized) {
	                  return;
	                }
	                $root2[rootConfigKey].initializing = true;
	                this.$nextTick(function() {
	                  var _$root$$meta$refresh = $root2.$meta().refresh(), tags = _$root$$meta$refresh.tags, metaInfo = _$root$$meta$refresh.metaInfo;
	                  if (tags === false && $root2[rootConfigKey].initialized === null) {
	                    this.$nextTick(function() {
	                      return triggerUpdate(options, $root2, "init");
	                    });
	                  }
	                  $root2[rootConfigKey].initialized = true;
	                  delete $root2[rootConfigKey].initializing;
	                  if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
	                    addNavGuards($root2);
	                  }
	                });
	              });
	              if (options.refreshOnceOnNavigation) {
	                addNavGuards($root);
	              }
	            }
	          }
	          this.$on("hook:destroyed", function() {
	            var _this = this;
	            if (!this.$parent || !hasMetaInfo(this)) {
	              return;
	            }
	            delete this._hasMetaInfo;
	            this.$nextTick(function() {
	              if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
	                triggerUpdate(options, _this.$root, "destroyed");
	                return;
	              }
	              var interval = setInterval(function() {
	                if (_this.$el && _this.$el.offsetParent !== null) {
	                  return;
	                }
	                clearInterval(interval);
	                triggerUpdate(options, _this.$root, "destroyed");
	              }, 50);
	            });
	          });
	          if (this.$isServer) {
	            return;
	          }
	          updateOnLifecycleHook.forEach(function(lifecycleHook) {
	            _this2.$on("hook:".concat(lifecycleHook), function() {
	              triggerUpdate(options, this[rootKey], lifecycleHook);
	            });
	          });
	        }
	      };
	    }
	    function setOptions(options) {
	      options = isObject(options) ? options : {};
	      return {
	        keyName: options["keyName"] || defaultOptions.keyName,
	        attribute: options["attribute"] || defaultOptions.attribute,
	        ssrAttribute: options["ssrAttribute"] || defaultOptions.ssrAttribute,
	        tagIDKeyName: options["tagIDKeyName"] || defaultOptions.tagIDKeyName,
	        contentKeyName: options["contentKeyName"] || defaultOptions.contentKeyName,
	        metaTemplateKeyName: options["metaTemplateKeyName"] || defaultOptions.metaTemplateKeyName,
	        debounceWait: isUndefined(options["debounceWait"]) ? defaultOptions.debounceWait : options["debounceWait"],
	        waitOnDestroyed: isUndefined(options["waitOnDestroyed"]) ? defaultOptions.waitOnDestroyed : options["waitOnDestroyed"],
	        ssrAppId: options["ssrAppId"] || defaultOptions.ssrAppId,
	        refreshOnceOnNavigation: !!options["refreshOnceOnNavigation"]
	      };
	    }
	    function getOptions(options) {
	      var optionsCopy = {};
	      for (var key in options) {
	        optionsCopy[key] = options[key];
	      }
	      return optionsCopy;
	    }
	    function ensureIsArray(arg, key) {
	      if (!key || !isObject(arg)) {
	        return isArray(arg) ? arg : [];
	      }
	      if (!isArray(arg[key])) {
	        arg[key] = [];
	      }
	      return arg;
	    }
	    var serverSequences = [[/&/g, "&amp;"], [/</g, "&lt;"], [/>/g, "&gt;"], [/"/g, "&quot;"], [/'/g, "&#x27;"]];
	    var clientSequences = [[/&/g, "&"], [/</g, "<"], [/>/g, ">"], [/"/g, '"'], [/'/g, "'"]];
	    function escape(info, options, escapeOptions, escapeKeys) {
	      var tagIDKeyName2 = options.tagIDKeyName;
	      var _escapeOptions$doEsca = escapeOptions.doEscape, doEscape = _escapeOptions$doEsca === void 0 ? function(v) {
	        return v;
	      } : _escapeOptions$doEsca;
	      var escaped = {};
	      for (var key in info) {
	        var value = info[key];
	        if (includes(metaInfoOptionKeys, key)) {
	          escaped[key] = value;
	          continue;
	        }
	        var disableKey = disableOptionKeys[0];
	        if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
	          escaped[key] = value;
	          continue;
	        }
	        var tagId = info[tagIDKeyName2];
	        if (tagId) {
	          disableKey = disableOptionKeys[1];
	          if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
	            escaped[key] = value;
	            continue;
	          }
	        }
	        if (isString(value)) {
	          escaped[key] = doEscape(value);
	        } else if (isArray(value)) {
	          escaped[key] = value.map(function(v) {
	            if (isPureObject(v)) {
	              return escape(v, options, escapeOptions, true);
	            }
	            return doEscape(v);
	          });
	        } else if (isPureObject(value)) {
	          escaped[key] = escape(value, options, escapeOptions, true);
	        } else {
	          escaped[key] = value;
	        }
	        if (escapeKeys) {
	          var escapedKey = doEscape(key);
	          if (key !== escapedKey) {
	            escaped[escapedKey] = escaped[key];
	            delete escaped[key];
	          }
	        }
	      }
	      return escaped;
	    }
	    function escapeMetaInfo(options, info, escapeSequences) {
	      escapeSequences = escapeSequences || [];
	      var escapeOptions = {
	        doEscape: function doEscape(value) {
	          return escapeSequences.reduce(function(val, seq) {
	            return val.replace(seq[0], seq[1]);
	          }, value);
	        }
	      };
	      disableOptionKeys.forEach(function(disableKey, index2) {
	        if (index2 === 0) {
	          ensureIsArray(info, disableKey);
	        } else if (index2 === 1) {
	          for (var key in info[disableKey]) {
	            ensureIsArray(info[disableKey], key);
	          }
	        }
	        escapeOptions[disableKey] = info[disableKey];
	      });
	      return escape(info, options, escapeOptions);
	    }
	    function applyTemplate(_ref, headObject, template, chunk) {
	      var component = _ref.component, metaTemplateKeyName2 = _ref.metaTemplateKeyName, contentKeyName2 = _ref.contentKeyName;
	      if (template === true || headObject[metaTemplateKeyName2] === true) {
	        return false;
	      }
	      if (isUndefined(template) && headObject[metaTemplateKeyName2]) {
	        template = headObject[metaTemplateKeyName2];
	        headObject[metaTemplateKeyName2] = true;
	      }
	      if (!template) {
	        delete headObject[metaTemplateKeyName2];
	        return false;
	      }
	      if (isUndefined(chunk)) {
	        chunk = headObject[contentKeyName2];
	      }
	      headObject[contentKeyName2] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk);
	      return true;
	    }
	    function _arrayMerge(_ref, target, source) {
	      var component = _ref.component, tagIDKeyName2 = _ref.tagIDKeyName, metaTemplateKeyName2 = _ref.metaTemplateKeyName, contentKeyName2 = _ref.contentKeyName;
	      var destination = [];
	      if (!target.length && !source.length) {
	        return destination;
	      }
	      target.forEach(function(targetItem, targetIndex) {
	        if (!targetItem[tagIDKeyName2]) {
	          destination.push(targetItem);
	          return;
	        }
	        var sourceIndex = findIndex(source, function(item) {
	          return item[tagIDKeyName2] === targetItem[tagIDKeyName2];
	        });
	        var sourceItem = source[sourceIndex];
	        if (sourceIndex === -1) {
	          destination.push(targetItem);
	          return;
	        }
	        if (contentKeyName2 in sourceItem && sourceItem[contentKeyName2] === void 0 || "innerHTML" in sourceItem && sourceItem.innerHTML === void 0) {
	          destination.push(targetItem);
	          source.splice(sourceIndex, 1);
	          return;
	        }
	        if (sourceItem[contentKeyName2] === null || sourceItem.innerHTML === null) {
	          source.splice(sourceIndex, 1);
	          return;
	        }
	        var targetTemplate = targetItem[metaTemplateKeyName2];
	        if (!targetTemplate) {
	          return;
	        }
	        var sourceTemplate = sourceItem[metaTemplateKeyName2];
	        if (!sourceTemplate) {
	          applyTemplate({
	            component,
	            metaTemplateKeyName: metaTemplateKeyName2,
	            contentKeyName: contentKeyName2
	          }, sourceItem, targetTemplate);
	          sourceItem.template = true;
	          return;
	        }
	        if (!sourceItem[contentKeyName2]) {
	          applyTemplate({
	            component,
	            metaTemplateKeyName: metaTemplateKeyName2,
	            contentKeyName: contentKeyName2
	          }, sourceItem, void 0, targetItem[contentKeyName2]);
	        }
	      });
	      return destination.concat(source);
	    }
	    var warningShown = false;
	    function merge(target, source, options) {
	      options = options || {};
	      if (source.title === void 0) {
	        delete source.title;
	      }
	      metaInfoAttributeKeys.forEach(function(attrKey) {
	        if (!source[attrKey]) {
	          return;
	        }
	        for (var key in source[attrKey]) {
	          if (key in source[attrKey] && source[attrKey][key] === void 0) {
	            if (includes(booleanHtmlAttributes, key) && !warningShown) {
	              warn("VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details");
	              warningShown = true;
	            }
	            delete source[attrKey][key];
	          }
	        }
	      });
	      return deepmerge(target, source, {
	        arrayMerge: function arrayMerge(t, s) {
	          return _arrayMerge(options, t, s);
	        }
	      });
	    }
	    function getComponentMetaInfo(options, component) {
	      return getComponentOption(options || {}, component, defaultInfo);
	    }
	    function getComponentOption(options, component, result) {
	      result = result || {};
	      if (component._inactive) {
	        return result;
	      }
	      options = options || {};
	      var _options = options, keyName2 = _options.keyName;
	      var $metaInfo = component.$metaInfo, $options = component.$options, $children = component.$children;
	      if ($options[keyName2]) {
	        var data = $metaInfo || $options[keyName2];
	        if (isObject(data)) {
	          result = merge(result, data, options);
	        }
	      }
	      if ($children.length) {
	        $children.forEach(function(childComponent) {
	          if (!inMetaInfoBranch(childComponent)) {
	            return;
	          }
	          result = getComponentOption(options, childComponent, result);
	        });
	      }
	      return result;
	    }
	    var callbacks = [];
	    function isDOMComplete(d) {
	      return (d || document).readyState === "complete";
	    }
	    function addCallback(query, callback) {
	      if (arguments.length === 1) {
	        callback = query;
	        query = "";
	      }
	      callbacks.push([query, callback]);
	    }
	    function addCallbacks(_ref, type, tags, autoAddListeners) {
	      var tagIDKeyName2 = _ref.tagIDKeyName;
	      var hasAsyncCallback = false;
	      tags.forEach(function(tag) {
	        if (!tag[tagIDKeyName2] || !tag.callback) {
	          return;
	        }
	        hasAsyncCallback = true;
	        addCallback("".concat(type, "[data-").concat(tagIDKeyName2, '="').concat(tag[tagIDKeyName2], '"]'), tag.callback);
	      });
	      if (!autoAddListeners || !hasAsyncCallback) {
	        return hasAsyncCallback;
	      }
	      return addListeners();
	    }
	    function addListeners() {
	      if (isDOMComplete()) {
	        applyCallbacks();
	        return;
	      }
	      document.onreadystatechange = function() {
	        applyCallbacks();
	      };
	    }
	    function applyCallbacks(matchElement) {
	      callbacks.forEach(function(args) {
	        var query = args[0];
	        var callback = args[1];
	        var selector = "".concat(query, '[onload="this.__vm_l=1"]');
	        var elements = [];
	        if (!matchElement) {
	          elements = toArray(querySelector(selector));
	        }
	        if (matchElement && matchElement.matches(selector)) {
	          elements = [matchElement];
	        }
	        elements.forEach(function(element) {
	          if (element.__vm_cb) {
	            return;
	          }
	          var onload = function onload2() {
	            element.__vm_cb = true;
	            removeAttribute(element, "onload");
	            callback(element);
	          };
	          if (element.__vm_l) {
	            onload();
	            return;
	          }
	          if (!element.__vm_ev) {
	            element.__vm_ev = true;
	            element.addEventListener("load", onload);
	          }
	        });
	      });
	    }
	    var attributeMap = {};
	    function updateAttribute(appId2, options, type, attrs, tag) {
	      var _ref = options || {}, attribute2 = _ref.attribute;
	      var vueMetaAttrString = tag.getAttribute(attribute2);
	      if (vueMetaAttrString) {
	        attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString));
	        removeAttribute(tag, attribute2);
	      }
	      var data = attributeMap[type] || {};
	      var toUpdate = [];
	      for (var attr in data) {
	        if (data[attr] !== void 0 && appId2 in data[attr]) {
	          toUpdate.push(attr);
	          if (!attrs[attr]) {
	            delete data[attr][appId2];
	          }
	        }
	      }
	      for (var _attr in attrs) {
	        var attrData = data[_attr];
	        if (!attrData || attrData[appId2] !== attrs[_attr]) {
	          toUpdate.push(_attr);
	          if (attrs[_attr] !== void 0) {
	            data[_attr] = data[_attr] || {};
	            data[_attr][appId2] = attrs[_attr];
	          }
	        }
	      }
	      for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
	        var _attr2 = _toUpdate[_i];
	        var _attrData = data[_attr2];
	        var attrValues = [];
	        for (var _appId in _attrData) {
	          Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]));
	        }
	        if (attrValues.length) {
	          var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? "" : attrValues.filter(function(v) {
	            return v !== void 0;
	          }).join(" ");
	          tag.setAttribute(_attr2, attrValue);
	        } else {
	          removeAttribute(tag, _attr2);
	        }
	      }
	      attributeMap[type] = data;
	    }
	    function updateTitle(title) {
	      if (!title && title !== "") {
	        return;
	      }
	      document.title = title;
	    }
	    function updateTag(appId2, options, type, tags, head, body) {
	      var _ref = options || {}, attribute2 = _ref.attribute, tagIDKeyName2 = _ref.tagIDKeyName;
	      var dataAttributes = commonDataAttributes.slice();
	      dataAttributes.push(tagIDKeyName2);
	      var newElements = [];
	      var queryOptions = {
	        appId: appId2,
	        attribute: attribute2,
	        type,
	        tagIDKeyName: tagIDKeyName2
	      };
	      var currentElements = {
	        head: queryElements(head, queryOptions),
	        pbody: queryElements(body, queryOptions, {
	          pbody: true
	        }),
	        body: queryElements(body, queryOptions, {
	          body: true
	        })
	      };
	      if (tags.length > 1) {
	        var found = [];
	        tags = tags.filter(function(x) {
	          var k = JSON.stringify(x);
	          var res = !includes(found, k);
	          found.push(k);
	          return res;
	        });
	      }
	      tags.forEach(function(tag) {
	        if (tag.skip) {
	          return;
	        }
	        var newElement = document.createElement(type);
	        if (!tag.once) {
	          newElement.setAttribute(attribute2, appId2);
	        }
	        Object.keys(tag).forEach(function(attr) {
	          if (includes(tagProperties, attr)) {
	            return;
	          }
	          if (attr === "innerHTML") {
	            newElement.innerHTML = tag.innerHTML;
	            return;
	          }
	          if (attr === "json") {
	            newElement.innerHTML = JSON.stringify(tag.json);
	            return;
	          }
	          if (attr === "cssText") {
	            if (newElement.styleSheet) {
	              newElement.styleSheet.cssText = tag.cssText;
	            } else {
	              newElement.appendChild(document.createTextNode(tag.cssText));
	            }
	            return;
	          }
	          if (attr === "callback") {
	            newElement.onload = function() {
	              return tag[attr](newElement);
	            };
	            return;
	          }
	          var _attr = includes(dataAttributes, attr) ? "data-".concat(attr) : attr;
	          var isBooleanAttribute = includes(booleanHtmlAttributes, attr);
	          if (isBooleanAttribute && !tag[attr]) {
	            return;
	          }
	          var value = isBooleanAttribute ? "" : tag[attr];
	          newElement.setAttribute(_attr, value);
	        });
	        var oldElements2 = currentElements[getElementsKey(tag)];
	        var indexToDelete;
	        var hasEqualElement = oldElements2.some(function(existingTag, index2) {
	          indexToDelete = index2;
	          return newElement.isEqualNode(existingTag);
	        });
	        if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
	          oldElements2.splice(indexToDelete, 1);
	        } else {
	          newElements.push(newElement);
	        }
	      });
	      var oldElements = [];
	      for (var _type in currentElements) {
	        Array.prototype.push.apply(oldElements, currentElements[_type]);
	      }
	      oldElements.forEach(function(element) {
	        element.parentNode.removeChild(element);
	      });
	      newElements.forEach(function(element) {
	        if (element.hasAttribute("data-body")) {
	          body.appendChild(element);
	          return;
	        }
	        if (element.hasAttribute("data-pbody")) {
	          body.insertBefore(element, body.firstChild);
	          return;
	        }
	        head.appendChild(element);
	      });
	      return {
	        oldTags: oldElements,
	        newTags: newElements
	      };
	    }
	    function updateClientMetaInfo(appId2, options, newInfo) {
	      options = options || {};
	      var _options = options, ssrAttribute2 = _options.ssrAttribute, ssrAppId2 = _options.ssrAppId;
	      var tags = {};
	      var htmlTag = getTag(tags, "html");
	      if (appId2 === ssrAppId2 && htmlTag.hasAttribute(ssrAttribute2)) {
	        removeAttribute(htmlTag, ssrAttribute2);
	        var addLoadListeners = false;
	        tagsSupportingOnload.forEach(function(type2) {
	          if (newInfo[type2] && addCallbacks(options, type2, newInfo[type2])) {
	            addLoadListeners = true;
	          }
	        });
	        if (addLoadListeners) {
	          addListeners();
	        }
	        return false;
	      }
	      var tagsAdded = {};
	      var tagsRemoved = {};
	      for (var type in newInfo) {
	        if (includes(metaInfoOptionKeys, type)) {
	          continue;
	        }
	        if (type === "title") {
	          updateTitle(newInfo.title);
	          continue;
	        }
	        if (includes(metaInfoAttributeKeys, type)) {
	          var tagName = type.substr(0, 4);
	          updateAttribute(appId2, options, type, newInfo[type], getTag(tags, tagName));
	          continue;
	        }
	        if (!isArray(newInfo[type])) {
	          continue;
	        }
	        var _updateTag = updateTag(appId2, options, type, newInfo[type], getTag(tags, "head"), getTag(tags, "body")), oldTags = _updateTag.oldTags, newTags = _updateTag.newTags;
	        if (newTags.length) {
	          tagsAdded[type] = newTags;
	          tagsRemoved[type] = oldTags;
	        }
	      }
	      return {
	        tagsAdded,
	        tagsRemoved
	      };
	    }
	    var appsMetaInfo;
	    function addApp(rootVm, appId2, options) {
	      return {
	        set: function set(metaInfo) {
	          return setMetaInfo(rootVm, appId2, options, metaInfo);
	        },
	        remove: function remove() {
	          return removeMetaInfo(rootVm, appId2, options);
	        }
	      };
	    }
	    function setMetaInfo(rootVm, appId2, options, metaInfo) {
	      if (rootVm && rootVm.$el) {
	        return updateClientMetaInfo(appId2, options, metaInfo);
	      }
	      appsMetaInfo = appsMetaInfo || {};
	      appsMetaInfo[appId2] = metaInfo;
	    }
	    function removeMetaInfo(rootVm, appId2, options) {
	      if (rootVm && rootVm.$el) {
	        var tags = {};
	        var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys), _step;
	        try {
	          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
	            var type = _step.value;
	            var tagName = type.substr(0, 4);
	            updateAttribute(appId2, options, type, {}, getTag(tags, tagName));
	          }
	        } catch (err) {
	          _iterator.e(err);
	        } finally {
	          _iterator.f();
	        }
	        return removeElementsByAppId(options, appId2);
	      }
	      if (appsMetaInfo[appId2]) {
	        delete appsMetaInfo[appId2];
	        clearAppsMetaInfo();
	      }
	    }
	    function getAppsMetaInfo() {
	      return appsMetaInfo;
	    }
	    function clearAppsMetaInfo(force) {
	      if (force || !Object.keys(appsMetaInfo).length) {
	        appsMetaInfo = void 0;
	      }
	    }
	    function getMetaInfo(options, info, escapeSequences, component) {
	      options = options || {};
	      escapeSequences = escapeSequences || [];
	      var _options = options, tagIDKeyName2 = _options.tagIDKeyName;
	      if (info.title) {
	        info.titleChunk = info.title;
	      }
	      if (info.titleTemplate && info.titleTemplate !== "%s") {
	        applyTemplate({
	          component,
	          contentKeyName: "title"
	        }, info, info.titleTemplate, info.titleChunk || "");
	      }
	      if (info.base) {
	        info.base = Object.keys(info.base).length ? [info.base] : [];
	      }
	      if (info.meta) {
	        info.meta = info.meta.filter(function(metaItem, index2, arr) {
	          var hasVmid = !!metaItem[tagIDKeyName2];
	          if (!hasVmid) {
	            return true;
	          }
	          var isFirstItemForVmid = index2 === findIndex(arr, function(item) {
	            return item[tagIDKeyName2] === metaItem[tagIDKeyName2];
	          });
	          return isFirstItemForVmid;
	        });
	        info.meta.forEach(function(metaObject) {
	          return applyTemplate(options, metaObject);
	        });
	      }
	      return escapeMetaInfo(options, info, escapeSequences);
	    }
	    function refresh(rootVm, options) {
	      options = options || {};
	      if (!rootVm[rootConfigKey]) {
	        showWarningNotSupported();
	        return {};
	      }
	      var rawInfo = getComponentMetaInfo(options, rootVm);
	      var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm);
	      var appId2 = rootVm[rootConfigKey].appId;
	      var tags = updateClientMetaInfo(appId2, options, metaInfo);
	      if (tags && isFunction(metaInfo.changed)) {
	        metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved);
	        tags = {
	          addedTags: tags.tagsAdded,
	          removedTags: tags.tagsRemoved
	        };
	      }
	      var appsMetaInfo2 = getAppsMetaInfo();
	      if (appsMetaInfo2) {
	        for (var additionalAppId in appsMetaInfo2) {
	          updateClientMetaInfo(additionalAppId, options, appsMetaInfo2[additionalAppId]);
	          delete appsMetaInfo2[additionalAppId];
	        }
	        clearAppsMetaInfo(true);
	      }
	      return {
	        vm: rootVm,
	        metaInfo,
	        tags
	      };
	    }
	    function attributeGenerator(options, type, data, _ref) {
	      var addSsrAttribute = _ref.addSsrAttribute;
	      var _ref2 = options || {}, attribute2 = _ref2.attribute, ssrAttribute2 = _ref2.ssrAttribute;
	      var attributeStr = "";
	      for (var attr in data) {
	        var attrData = data[attr];
	        var attrValues = [];
	        for (var appId2 in attrData) {
	          attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId2])));
	        }
	        if (attrValues.length) {
	          attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? "".concat(attr) : "".concat(attr, '="').concat(attrValues.join(" "), '"');
	          attributeStr += " ";
	        }
	      }
	      if (attributeStr) {
	        attributeStr += "".concat(attribute2, '="').concat(encodeURI(JSON.stringify(data)), '"');
	      }
	      if (type === "htmlAttrs" && addSsrAttribute) {
	        return "".concat(ssrAttribute2).concat(attributeStr ? " " : "").concat(attributeStr);
	      }
	      return attributeStr;
	    }
	    function titleGenerator(options, type, data, generatorOptions) {
	      var _ref = generatorOptions || {}, ln = _ref.ln;
	      if (!data) {
	        return "";
	      }
	      return "<".concat(type, ">").concat(data, "</").concat(type, ">").concat(ln ? "\n" : "");
	    }
	    function tagGenerator(options, type, tags, generatorOptions) {
	      var _ref = options || {}, ssrAppId2 = _ref.ssrAppId, attribute2 = _ref.attribute, tagIDKeyName2 = _ref.tagIDKeyName;
	      var _ref2 = generatorOptions || {}, appId2 = _ref2.appId, _ref2$isSSR = _ref2.isSSR, isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR, _ref2$body = _ref2.body, body = _ref2$body === void 0 ? false : _ref2$body, _ref2$pbody = _ref2.pbody, pbody = _ref2$pbody === void 0 ? false : _ref2$pbody, _ref2$ln = _ref2.ln, ln = _ref2$ln === void 0 ? false : _ref2$ln;
	      var dataAttributes = [tagIDKeyName2].concat(_toConsumableArray(commonDataAttributes));
	      if (!tags || !tags.length) {
	        return "";
	      }
	      return tags.reduce(function(tagsStr, tag) {
	        if (tag.skip) {
	          return tagsStr;
	        }
	        var tagKeys = Object.keys(tag);
	        if (tagKeys.length === 0) {
	          return tagsStr;
	        }
	        if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
	          return tagsStr;
	        }
	        var attrs = tag.once ? "" : " ".concat(attribute2, '="').concat(appId2 || (isSSR === false ? "1" : ssrAppId2), '"');
	        for (var attr in tag) {
	          if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
	            continue;
	          }
	          if (attr === "callback") {
	            attrs += ' onload="this.__vm_l=1"';
	            continue;
	          }
	          var prefix = "";
	          if (dataAttributes.includes(attr)) {
	            prefix = "data-";
	          }
	          var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr);
	          if (isBooleanAttr && !tag[attr]) {
	            continue;
	          }
	          attrs += " ".concat(prefix).concat(attr) + (isBooleanAttr ? "" : '="'.concat(tag[attr], '"'));
	        }
	        var json = "";
	        if (tag.json) {
	          json = JSON.stringify(tag.json);
	        }
	        var content = tag.innerHTML || tag.cssText || json;
	        var hasEndTag = !tagsWithoutEndTag.includes(type);
	        var hasContent = hasEndTag && tagsWithInnerContent.includes(type);
	        return "".concat(tagsStr, "<").concat(type).concat(attrs).concat(!hasContent && hasEndTag ? "/" : "", ">") + (hasContent ? "".concat(content, "</").concat(type, ">") : "") + (ln ? "\n" : "");
	      }, "");
	    }
	    function generateServerInjector(options, metaInfo, globalInjectOptions) {
	      var serverInjector = {
	        data: metaInfo,
	        extraData: void 0,
	        addInfo: function addInfo(appId2, metaInfo2) {
	          this.extraData = this.extraData || {};
	          this.extraData[appId2] = metaInfo2;
	        },
	        callInjectors: function callInjectors(opts) {
	          var m = this.injectors;
	          return (opts.body || opts.pbody ? "" : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts);
	        },
	        injectors: {
	          head: function head(ln) {
	            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
	              ln
	            }));
	          },
	          bodyPrepend: function bodyPrepend(ln) {
	            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
	              ln,
	              pbody: true
	            }));
	          },
	          bodyAppend: function bodyAppend(ln) {
	            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
	              ln,
	              body: true
	            }));
	          }
	        }
	      };
	      var _loop = function _loop2(type2) {
	        if (metaInfoOptionKeys.includes(type2)) {
	          return "continue";
	        }
	        serverInjector.injectors[type2] = {
	          text: function text(injectOptions) {
	            var addSsrAttribute = injectOptions === true;
	            injectOptions = _objectSpread2(_objectSpread2({
	              addSsrAttribute
	            }, globalInjectOptions), injectOptions);
	            if (type2 === "title") {
	              return titleGenerator(options, type2, serverInjector.data[type2], injectOptions);
	            }
	            if (metaInfoAttributeKeys.includes(type2)) {
	              var attributeData = {};
	              var data = serverInjector.data[type2];
	              if (data) {
	                var appId2 = injectOptions.isSSR === false ? "1" : options.ssrAppId;
	                for (var attr in data) {
	                  attributeData[attr] = _defineProperty({}, appId2, data[attr]);
	                }
	              }
	              if (serverInjector.extraData) {
	                for (var _appId in serverInjector.extraData) {
	                  var _data = serverInjector.extraData[_appId][type2];
	                  if (_data) {
	                    for (var _attr in _data) {
	                      attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]));
	                    }
	                  }
	                }
	              }
	              return attributeGenerator(options, type2, attributeData, injectOptions);
	            }
	            var str = tagGenerator(options, type2, serverInjector.data[type2], injectOptions);
	            if (serverInjector.extraData) {
	              for (var _appId2 in serverInjector.extraData) {
	                var _data2 = serverInjector.extraData[_appId2][type2];
	                var extraStr = tagGenerator(options, type2, _data2, _objectSpread2({
	                  appId: _appId2
	                }, injectOptions));
	                str = "".concat(str).concat(extraStr);
	              }
	            }
	            return str;
	          }
	        };
	      };
	      for (var type in defaultInfo) {
	        var _ret = _loop(type);
	        if (_ret === "continue")
	          continue;
	      }
	      return serverInjector;
	    }
	    function inject(rootVm, options, injectOptions) {
	      if (!rootVm[rootConfigKey]) {
	        showWarningNotSupported();
	        return {};
	      }
	      var rawInfo = getComponentMetaInfo(options, rootVm);
	      var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm);
	      var serverInjector = generateServerInjector(options, metaInfo, injectOptions);
	      var appsMetaInfo2 = getAppsMetaInfo();
	      if (appsMetaInfo2) {
	        for (var additionalAppId in appsMetaInfo2) {
	          serverInjector.addInfo(additionalAppId, appsMetaInfo2[additionalAppId]);
	          delete appsMetaInfo2[additionalAppId];
	        }
	        clearAppsMetaInfo(true);
	      }
	      return serverInjector.injectors;
	    }
	    function $meta(options) {
	      options = options || {};
	      var $root = this.$root;
	      return {
	        getOptions: function getOptions$1() {
	          return getOptions(options);
	        },
	        setOptions: function setOptions2(newOptions) {
	          var refreshNavKey = "refreshOnceOnNavigation";
	          if (newOptions && newOptions[refreshNavKey]) {
	            options.refreshOnceOnNavigation = !!newOptions[refreshNavKey];
	            addNavGuards($root);
	          }
	          var debounceWaitKey = "debounceWait";
	          if (newOptions && debounceWaitKey in newOptions) {
	            var debounceWait2 = parseInt(newOptions[debounceWaitKey]);
	            if (!isNaN(debounceWait2)) {
	              options.debounceWait = debounceWait2;
	            }
	          }
	          var waitOnDestroyedKey = "waitOnDestroyed";
	          if (newOptions && waitOnDestroyedKey in newOptions) {
	            options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey];
	          }
	        },
	        refresh: function refresh$1() {
	          return refresh($root, options);
	        },
	        inject: function inject$1(injectOptions) {
	          return inject($root, options, injectOptions);
	        },
	        pause: function pause$1() {
	          return pause($root);
	        },
	        resume: function resume$1() {
	          return resume($root);
	        },
	        addApp: function addApp$1(appId2) {
	          return addApp($root, appId2, options);
	        }
	      };
	    }
	    function generate(rawInfo, options) {
	      options = setOptions(options);
	      var metaInfo = getMetaInfo(options, rawInfo, serverSequences);
	      var serverInjector = generateServerInjector(options, metaInfo);
	      return serverInjector.injectors;
	    }
	    function install(Vue, options) {
	      if (Vue.__vuemeta_installed) {
	        return;
	      }
	      Vue.__vuemeta_installed = true;
	      options = setOptions(options);
	      Vue.prototype.$meta = function() {
	        return $meta.call(this, options);
	      };
	      Vue.mixin(createMixin(Vue, options));
	    }
	    var index = {
	      version,
	      install,
	      generate: function generate$1(metaInfo, options) {
	        return generate(metaInfo, options);
	      },
	      hasMetaInfo
	    };
	    module2.exports = index;
	  },
	  function(module2, exports) {
	    module2.exports = require$$5;
	  },
	  function(module2, exports) {
	    module2.exports = require$$6;
	  },
	  function(module2, exports) {
	    module2.exports = require$$7;
	  },
	  function(module2, exports, __webpack_require__) {
	    __webpack_require__(21);
	    module2.exports = __webpack_require__(48);
	  },
	  function(module2, exports) {
	    commonjsGlobal.installComponents = function(component, components) {
	      var options = typeof component.exports === "function" ? component.exports.extendOptions : component.options;
	      if (typeof component.exports === "function") {
	        options.components = component.exports.options.components;
	      }
	      options.components = options.components || {};
	      for (var i in components) {
	        options.components[i] = options.components[i] || components[i];
	      }
	      if (options.functional) {
	        provideFunctionalComponents(component, options.components);
	      }
	    };
	    var functionalPatchKey = "_functionalComponents";
	    function provideFunctionalComponents(component, components) {
	      if (component.exports[functionalPatchKey]) {
	        return;
	      }
	      component.exports[functionalPatchKey] = true;
	      var render = component.exports.render;
	      component.exports.render = function(h, vm) {
	        return render(h, Object.assign({}, vm, {
	          _c: function(n, a, b) {
	            return vm._c(components[n] || n, a, b);
	          }
	        }));
	      };
	    }
	  },
	  function(module2, exports, __webpack_require__) {
	    /*!
	     * Vue.js v2.7.10
	     * (c) 2014-2022 Evan You
	     * Released under the MIT License.
	     */
	    /*!
	     * Vue.js v2.7.10
	     * (c) 2014-2022 Evan You
	     * Released under the MIT License.
	     */
	    __webpack_require__(23);
	    __webpack_require__(24);
	    __webpack_require__(25);
	    __webpack_require__(26);
	    __webpack_require__(27);
	    __webpack_require__(28);
	    __webpack_require__(29);
	    __webpack_require__(30);
	    __webpack_require__(31);
	    __webpack_require__(32);
	    __webpack_require__(33);
	    __webpack_require__(34);
	    __webpack_require__(35);
	    __webpack_require__(36);
	    __webpack_require__(37);
	    __webpack_require__(38);
	    const t = Object.freeze({}), e = Array.isArray;
	    function n(t2) {
	      return null == t2;
	    }
	    function o(t2) {
	      return null != t2;
	    }
	    function r(t2) {
	      return true === t2;
	    }
	    function s(t2) {
	      return "string" == typeof t2 || "number" == typeof t2 || "symbol" == typeof t2 || "boolean" == typeof t2;
	    }
	    function i(t2) {
	      return "function" == typeof t2;
	    }
	    function c(t2) {
	      return null !== t2 && "object" == typeof t2;
	    }
	    const a = Object.prototype.toString;
	    function l(t2) {
	      return "[object Object]" === a.call(t2);
	    }
	    function u(t2) {
	      const e2 = parseFloat(String(t2));
	      return e2 >= 0 && Math.floor(e2) === e2 && isFinite(t2);
	    }
	    function f(t2) {
	      return o(t2) && "function" == typeof t2.then && "function" == typeof t2.catch;
	    }
	    function d(t2) {
	      return null == t2 ? "" : Array.isArray(t2) || l(t2) && t2.toString === a ? JSON.stringify(t2, null, 2) : String(t2);
	    }
	    function p(t2) {
	      const e2 = parseFloat(t2);
	      return isNaN(e2) ? t2 : e2;
	    }
	    function h(t2, e2) {
	      const n2 = /* @__PURE__ */ Object.create(null), o2 = t2.split(",");
	      for (let t3 = 0; t3 < o2.length; t3++)
	        n2[o2[t3]] = true;
	      return e2 ? (t3) => n2[t3.toLowerCase()] : (t3) => n2[t3];
	    }
	    const m = h("key,ref,slot,slot-scope,is");
	    function _(t2, e2) {
	      if (t2.length) {
	        const n2 = t2.indexOf(e2);
	        if (n2 > -1)
	          return t2.splice(n2, 1);
	      }
	    }
	    const v = Object.prototype.hasOwnProperty;
	    function y(t2, e2) {
	      return v.call(t2, e2);
	    }
	    function g(t2) {
	      const e2 = /* @__PURE__ */ Object.create(null);
	      return function(n2) {
	        return e2[n2] || (e2[n2] = t2(n2));
	      };
	    }
	    const b = /-(\w)/g, $ = g((t2) => t2.replace(b, (t3, e2) => e2 ? e2.toUpperCase() : "")), w = g((t2) => t2.charAt(0).toUpperCase() + t2.slice(1)), C = /\B([A-Z])/g, x = g((t2) => t2.replace(C, "-$1").toLowerCase());
	    const k = Function.prototype.bind ? function(t2, e2) {
	      return t2.bind(e2);
	    } : function(t2, e2) {
	      function n2(n3) {
	        const o2 = arguments.length;
	        return o2 ? o2 > 1 ? t2.apply(e2, arguments) : t2.call(e2, n3) : t2.call(e2);
	      }
	      return n2._length = t2.length, n2;
	    };
	    function O(t2, e2) {
	      e2 = e2 || 0;
	      let n2 = t2.length - e2;
	      const o2 = new Array(n2);
	      for (; n2--; )
	        o2[n2] = t2[n2 + e2];
	      return o2;
	    }
	    function S(t2, e2) {
	      for (const n2 in e2)
	        t2[n2] = e2[n2];
	      return t2;
	    }
	    function A(t2) {
	      const e2 = {};
	      for (let n2 = 0; n2 < t2.length; n2++)
	        t2[n2] && S(e2, t2[n2]);
	      return e2;
	    }
	    function T(t2, e2, n2) {
	    }
	    const j = (t2, e2, n2) => false, E = (t2) => t2;
	    function P(t2, e2) {
	      if (t2 === e2)
	        return true;
	      const n2 = c(t2), o2 = c(e2);
	      if (!n2 || !o2)
	        return !n2 && !o2 && String(t2) === String(e2);
	      try {
	        const n3 = Array.isArray(t2), o3 = Array.isArray(e2);
	        if (n3 && o3)
	          return t2.length === e2.length && t2.every((t3, n4) => P(t3, e2[n4]));
	        if (t2 instanceof Date && e2 instanceof Date)
	          return t2.getTime() === e2.getTime();
	        if (n3 || o3)
	          return false;
	        {
	          const n4 = Object.keys(t2), o4 = Object.keys(e2);
	          return n4.length === o4.length && n4.every((n5) => P(t2[n5], e2[n5]));
	        }
	      } catch (t3) {
	        return false;
	      }
	    }
	    function I(t2, e2) {
	      for (let n2 = 0; n2 < t2.length; n2++)
	        if (P(t2[n2], e2))
	          return n2;
	      return -1;
	    }
	    function D(t2) {
	      let e2 = false;
	      return function() {
	        e2 || (e2 = true, t2.apply(this, arguments));
	      };
	    }
	    function N(t2, e2) {
	      return t2 === e2 ? 0 === t2 && 1 / t2 != 1 / e2 : t2 == t2 || e2 == e2;
	    }
	    const M = ["component", "directive", "filter"], R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch", "renderTracked", "renderTriggered"];
	    var L = {
	      optionMergeStrategies: /* @__PURE__ */ Object.create(null),
	      silent: false,
	      productionTip: false,
	      devtools: false,
	      performance: false,
	      errorHandler: null,
	      warnHandler: null,
	      ignoredElements: [],
	      keyCodes: /* @__PURE__ */ Object.create(null),
	      isReservedTag: j,
	      isReservedAttr: j,
	      isUnknownElement: j,
	      getTagNamespace: T,
	      parsePlatformTagName: E,
	      mustUseProp: j,
	      async: true,
	      _lifecycleHooks: R
	    };
	    function F(t2) {
	      const e2 = (t2 + "").charCodeAt(0);
	      return 36 === e2 || 95 === e2;
	    }
	    function U(t2, e2, n2, o2) {
	      Object.defineProperty(t2, e2, {
	        value: n2,
	        enumerable: !!o2,
	        writable: true,
	        configurable: true
	      });
	    }
	    const B = new RegExp(`[^${/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source}.$_\\d]`);
	    const V = "__proto__" in {}, z = false, H = z , K = H ;
	    const Z = H , J = {}.watch;
	    let X;
	    const Y = () => (void 0 === X && (X = "undefined" != typeof commonjsGlobal && commonjsGlobal.process && "server" === commonjsGlobal.process.env.VUE_ENV), X);
	    function et(t2) {
	      return "function" == typeof t2 && /native code/.test(t2.toString());
	    }
	    const nt = "undefined" != typeof Symbol && et(Symbol) && "undefined" != typeof Reflect && et(Reflect.ownKeys);
	    let ot;
	    ot = "undefined" != typeof Set && et(Set) ? Set : class {
	      constructor() {
	        this.set = /* @__PURE__ */ Object.create(null);
	      }
	      has(t2) {
	        return true === this.set[t2];
	      }
	      add(t2) {
	        this.set[t2] = true;
	      }
	      clear() {
	        this.set = /* @__PURE__ */ Object.create(null);
	      }
	    };
	    let rt = null;
	    function st(t2 = null) {
	      t2 || rt && rt._scope.off(), rt = t2, t2 && t2._scope.on();
	    }
	    class it {
	      constructor(t2, e2, n2, o2, r2, s2, i2, c2) {
	        this.tag = t2, this.data = e2, this.children = n2, this.text = o2, this.elm = r2, this.ns = void 0, this.context = s2, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e2 && e2.key, this.componentOptions = i2, this.componentInstance = void 0, this.parent = void 0, this.raw = false, this.isStatic = false, this.isRootInsert = true, this.isComment = false, this.isCloned = false, this.isOnce = false, this.asyncFactory = c2, this.asyncMeta = void 0, this.isAsyncPlaceholder = false;
	      }
	      get child() {
	        return this.componentInstance;
	      }
	    }
	    const ct = (t2 = "") => {
	      const e2 = new it();
	      return e2.text = t2, e2.isComment = true, e2;
	    };
	    function at(t2) {
	      return new it(void 0, void 0, void 0, String(t2));
	    }
	    function lt(t2) {
	      const e2 = new it(t2.tag, t2.data, t2.children && t2.children.slice(), t2.text, t2.elm, t2.context, t2.componentOptions, t2.asyncFactory);
	      return e2.ns = t2.ns, e2.isStatic = t2.isStatic, e2.key = t2.key, e2.isComment = t2.isComment, e2.fnContext = t2.fnContext, e2.fnOptions = t2.fnOptions, e2.fnScopeId = t2.fnScopeId, e2.asyncMeta = t2.asyncMeta, e2.isCloned = true, e2;
	    }
	    let ut = 0;
	    class ft {
	      constructor() {
	        this.id = ut++, this.subs = [];
	      }
	      addSub(t2) {
	        this.subs.push(t2);
	      }
	      removeSub(t2) {
	        _(this.subs, t2);
	      }
	      depend(t2) {
	        ft.target && ft.target.addDep(this);
	      }
	      notify(t2) {
	        const e2 = this.subs.slice();
	        for (let t3 = 0, n2 = e2.length; t3 < n2; t3++)
	          e2[t3].update();
	      }
	    }
	    ft.target = null;
	    const dt = [];
	    function pt(t2) {
	      dt.push(t2), ft.target = t2;
	    }
	    function ht() {
	      dt.pop(), ft.target = dt[dt.length - 1];
	    }
	    const mt = Array.prototype, _t = Object.create(mt);
	    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t2) {
	      const e2 = mt[t2];
	      U(_t, t2, function(...n2) {
	        const o2 = e2.apply(this, n2), r2 = this.__ob__;
	        let s2;
	        switch (t2) {
	          case "push":
	          case "unshift":
	            s2 = n2;
	            break;
	          case "splice":
	            s2 = n2.slice(2);
	        }
	        return s2 && r2.observeArray(s2), r2.dep.notify(), o2;
	      });
	    });
	    const vt = Object.getOwnPropertyNames(_t), yt = {};
	    let gt = true;
	    function bt(t2) {
	      gt = t2;
	    }
	    const $t = {
	      notify: T,
	      depend: T,
	      addSub: T,
	      removeSub: T
	    };
	    class wt {
	      constructor(t2, n2 = false, o2 = false) {
	        if (this.value = t2, this.shallow = n2, this.mock = o2, this.dep = o2 ? $t : new ft(), this.vmCount = 0, U(t2, "__ob__", this), e(t2)) {
	          if (!o2)
	            if (V)
	              t2.__proto__ = _t;
	            else
	              for (let e2 = 0, n3 = vt.length; e2 < n3; e2++) {
	                const n4 = vt[e2];
	                U(t2, n4, _t[n4]);
	              }
	          n2 || this.observeArray(t2);
	        } else {
	          const e2 = Object.keys(t2);
	          for (let r2 = 0; r2 < e2.length; r2++) {
	            xt(t2, e2[r2], yt, void 0, n2, o2);
	          }
	        }
	      }
	      observeArray(t2) {
	        for (let e2 = 0, n2 = t2.length; e2 < n2; e2++)
	          Ct(t2[e2], false, this.mock);
	      }
	    }
	    function Ct(t2, n2, o2) {
	      if (!c(t2) || It(t2) || t2 instanceof it)
	        return;
	      let r2;
	      return y(t2, "__ob__") && t2.__ob__ instanceof wt ? r2 = t2.__ob__ : !gt || !o2 && Y() || !e(t2) && !l(t2) || !Object.isExtensible(t2) || t2.__v_skip || (r2 = new wt(t2, n2, o2)), r2;
	    }
	    function xt(t2, n2, o2, r2, s2, i2) {
	      const c2 = new ft(), a2 = Object.getOwnPropertyDescriptor(t2, n2);
	      if (a2 && false === a2.configurable)
	        return;
	      const l2 = a2 && a2.get, u2 = a2 && a2.set;
	      l2 && !u2 || o2 !== yt && 2 !== arguments.length || (o2 = t2[n2]);
	      let f2 = !s2 && Ct(o2, false, i2);
	      return Object.defineProperty(t2, n2, {
	        enumerable: true,
	        configurable: true,
	        get: function() {
	          const n3 = l2 ? l2.call(t2) : o2;
	          return ft.target && (c2.depend(), f2 && (f2.dep.depend(), e(n3) && St(n3))), It(n3) && !s2 ? n3.value : n3;
	        },
	        set: function(e2) {
	          const n3 = l2 ? l2.call(t2) : o2;
	          if (N(n3, e2)) {
	            if (u2)
	              u2.call(t2, e2);
	            else {
	              if (l2)
	                return;
	              if (!s2 && It(n3) && !It(e2))
	                return void (n3.value = e2);
	              o2 = e2;
	            }
	            f2 = !s2 && Ct(e2, false, i2), c2.notify();
	          }
	        }
	      }), c2;
	    }
	    function kt(t2, n2, o2) {
	      if (Pt(t2))
	        return;
	      const r2 = t2.__ob__;
	      return e(t2) && u(n2) ? (t2.length = Math.max(t2.length, n2), t2.splice(n2, 1, o2), r2 && !r2.shallow && r2.mock && Ct(o2, false, true), o2) : n2 in t2 && !(n2 in Object.prototype) ? (t2[n2] = o2, o2) : t2._isVue || r2 && r2.vmCount ? o2 : r2 ? (xt(r2.value, n2, o2, void 0, r2.shallow, r2.mock), r2.dep.notify(), o2) : (t2[n2] = o2, o2);
	    }
	    function Ot(t2, n2) {
	      if (e(t2) && u(n2))
	        return void t2.splice(n2, 1);
	      const o2 = t2.__ob__;
	      t2._isVue || o2 && o2.vmCount || Pt(t2) || y(t2, n2) && (delete t2[n2], o2 && o2.dep.notify());
	    }
	    function St(t2) {
	      for (let n2, o2 = 0, r2 = t2.length; o2 < r2; o2++)
	        n2 = t2[o2], n2 && n2.__ob__ && n2.__ob__.dep.depend(), e(n2) && St(n2);
	    }
	    function At(t2) {
	      return Tt(t2, true), U(t2, "__v_isShallow", true), t2;
	    }
	    function Tt(t2, e2) {
	      Pt(t2) || Ct(t2, e2, Y());
	    }
	    function jt(t2) {
	      return Pt(t2) ? jt(t2.__v_raw) : !(!t2 || !t2.__ob__);
	    }
	    function Et(t2) {
	      return !(!t2 || !t2.__v_isShallow);
	    }
	    function Pt(t2) {
	      return !(!t2 || !t2.__v_isReadonly);
	    }
	    function It(t2) {
	      return !(!t2 || true !== t2.__v_isRef);
	    }
	    function Dt(t2, e2) {
	      if (It(t2))
	        return t2;
	      const n2 = {};
	      return U(n2, "__v_isRef", true), U(n2, "__v_isShallow", e2), U(n2, "dep", xt(n2, "value", t2, null, e2, Y())), n2;
	    }
	    function Nt(t2, e2, n2) {
	      Object.defineProperty(t2, n2, {
	        enumerable: true,
	        configurable: true,
	        get: () => {
	          const t3 = e2[n2];
	          if (It(t3))
	            return t3.value;
	          {
	            const e3 = t3 && t3.__ob__;
	            return e3 && e3.dep.depend(), t3;
	          }
	        },
	        set: (t3) => {
	          const o2 = e2[n2];
	          It(o2) && !It(t3) ? o2.value = t3 : e2[n2] = t3;
	        }
	      });
	    }
	    function Mt(t2, e2, n2) {
	      const o2 = t2[e2];
	      if (It(o2))
	        return o2;
	      const r2 = {
	        get value() {
	          const o3 = t2[e2];
	          return void 0 === o3 ? n2 : o3;
	        },
	        set value(n3) {
	          t2[e2] = n3;
	        }
	      };
	      return U(r2, "__v_isRef", true), r2;
	    }
	    function Rt(t2) {
	      return Lt(t2, false);
	    }
	    function Lt(t2, e2) {
	      if (!l(t2))
	        return t2;
	      if (Pt(t2))
	        return t2;
	      const n2 = e2 ? "__v_rawToShallowReadonly" : "__v_rawToReadonly", o2 = t2[n2];
	      if (o2)
	        return o2;
	      const r2 = Object.create(Object.getPrototypeOf(t2));
	      U(t2, n2, r2), U(r2, "__v_isReadonly", true), U(r2, "__v_raw", t2), It(t2) && U(r2, "__v_isRef", true), (e2 || Et(t2)) && U(r2, "__v_isShallow", true);
	      const s2 = Object.keys(t2);
	      for (let n3 = 0; n3 < s2.length; n3++)
	        Ft(r2, t2, s2[n3], e2);
	      return r2;
	    }
	    function Ft(t2, e2, n2, o2) {
	      Object.defineProperty(t2, n2, {
	        enumerable: true,
	        configurable: true,
	        get() {
	          const t3 = e2[n2];
	          return o2 || !l(t3) ? t3 : Rt(t3);
	        },
	        set() {
	        }
	      });
	    }
	    function Ut(t2, e2) {
	      return Vt(t2, null, {
	        flush: "post"
	      });
	    }
	    const Bt = {};
	    function Vt(n2, o2, {
	      immediate: r2,
	      deep: s2,
	      flush: c2 = "pre",
	      onTrack: a2,
	      onTrigger: l2
	    } = t) {
	      const u2 = rt, f2 = (t2, e2, n3 = null) => Pe(t2, null, n3, u2, e2);
	      let d2, p2, h2 = false, m2 = false;
	      if (It(n2) ? (d2 = () => n2.value, h2 = Et(n2)) : jt(n2) ? (d2 = () => (n2.__ob__.dep.depend(), n2), s2 = true) : e(n2) ? (m2 = true, h2 = n2.some((t2) => jt(t2) || Et(t2)), d2 = () => n2.map((t2) => It(t2) ? t2.value : jt(t2) ? nn(t2) : i(t2) ? f2(t2, "watcher getter") : void 0)) : d2 = i(n2) ? o2 ? () => f2(n2, "watcher getter") : () => {
	        if (!u2 || !u2._isDestroyed)
	          return p2 && p2(), f2(n2, "watcher", [_2]);
	      } : T, o2 && s2) {
	        const t2 = d2;
	        d2 = () => nn(t2());
	      }
	      let _2 = (t2) => {
	        p2 = v2.onStop = () => {
	          f2(t2, "watcher cleanup");
	        };
	      };
	      if (Y())
	        return _2 = T, o2 ? r2 && f2(o2, "watcher callback", [d2(), m2 ? [] : void 0, _2]) : d2(), T;
	      const v2 = new cn(rt, d2, T, {
	        lazy: true
	      });
	      v2.noRecurse = !o2;
	      let y2 = m2 ? [] : Bt;
	      return v2.run = () => {
	        if (v2.active)
	          if (o2) {
	            const t2 = v2.get();
	            (s2 || h2 || (m2 ? t2.some((t3, e2) => N(t3, y2[e2])) : N(t2, y2))) && (p2 && p2(), f2(o2, "watcher callback", [t2, y2 === Bt ? void 0 : y2, _2]), y2 = t2);
	          } else
	            v2.get();
	      }, "sync" === c2 ? v2.update = v2.run : "post" === c2 ? (v2.post = true, v2.update = () => An(v2)) : v2.update = () => {
	        if (u2 && u2 === rt && !u2._isMounted) {
	          const t2 = u2._preWatchers || (u2._preWatchers = []);
	          t2.indexOf(v2) < 0 && t2.push(v2);
	        } else
	          An(v2);
	      }, o2 ? r2 ? v2.run() : y2 = v2.get() : "post" === c2 && u2 ? u2.$once("hook:mounted", () => v2.get()) : v2.get(), () => {
	        v2.teardown();
	      };
	    }
	    let zt;
	    class Ht {
	      constructor(t2 = false) {
	        this.active = true, this.effects = [], this.cleanups = [], !t2 && zt && (this.parent = zt, this.index = (zt.scopes || (zt.scopes = [])).push(this) - 1);
	      }
	      run(t2) {
	        if (this.active) {
	          const e2 = zt;
	          try {
	            return zt = this, t2();
	          } finally {
	            zt = e2;
	          }
	        }
	      }
	      on() {
	        zt = this;
	      }
	      off() {
	        zt = this.parent;
	      }
	      stop(t2) {
	        if (this.active) {
	          let e2, n2;
	          for (e2 = 0, n2 = this.effects.length; e2 < n2; e2++)
	            this.effects[e2].teardown();
	          for (e2 = 0, n2 = this.cleanups.length; e2 < n2; e2++)
	            this.cleanups[e2]();
	          if (this.scopes)
	            for (e2 = 0, n2 = this.scopes.length; e2 < n2; e2++)
	              this.scopes[e2].stop(true);
	          if (this.parent && !t2) {
	            const t3 = this.parent.scopes.pop();
	            t3 && t3 !== this && (this.parent.scopes[this.index] = t3, t3.index = this.index);
	          }
	          this.active = false;
	        }
	      }
	    }
	    function Wt(t2) {
	      const e2 = t2._provided, n2 = t2.$parent && t2.$parent._provided;
	      return n2 === e2 ? t2._provided = Object.create(n2) : e2;
	    }
	    const Kt = g((t2) => {
	      const e2 = "&" === t2.charAt(0), n2 = "~" === (t2 = e2 ? t2.slice(1) : t2).charAt(0), o2 = "!" === (t2 = n2 ? t2.slice(1) : t2).charAt(0);
	      return {
	        name: t2 = o2 ? t2.slice(1) : t2,
	        once: n2,
	        capture: o2,
	        passive: e2
	      };
	    });
	    function qt(t2, n2) {
	      function o2() {
	        const t3 = o2.fns;
	        if (!e(t3))
	          return Pe(t3, null, arguments, n2, "v-on handler");
	        {
	          const e2 = t3.slice();
	          for (let t4 = 0; t4 < e2.length; t4++)
	            Pe(e2[t4], null, arguments, n2, "v-on handler");
	        }
	      }
	      return o2.fns = t2, o2;
	    }
	    function Gt(t2, e2, o2, s2, i2, c2) {
	      let a2, l2, u2, f2;
	      for (a2 in t2)
	        l2 = t2[a2], u2 = e2[a2], f2 = Kt(a2), n(l2) || (n(u2) ? (n(l2.fns) && (l2 = t2[a2] = qt(l2, c2)), r(f2.once) && (l2 = t2[a2] = i2(f2.name, l2, f2.capture)), o2(f2.name, l2, f2.capture, f2.passive, f2.params)) : l2 !== u2 && (u2.fns = l2, t2[a2] = u2));
	      for (a2 in e2)
	        n(t2[a2]) && (f2 = Kt(a2), s2(f2.name, e2[a2], f2.capture));
	    }
	    function Zt(t2, e2, s2) {
	      let i2;
	      t2 instanceof it && (t2 = t2.data.hook || (t2.data.hook = {}));
	      const c2 = t2[e2];
	      function a2() {
	        s2.apply(this, arguments), _(i2.fns, a2);
	      }
	      n(c2) ? i2 = qt([a2]) : o(c2.fns) && r(c2.merged) ? (i2 = c2, i2.fns.push(a2)) : i2 = qt([c2, a2]), i2.merged = true, t2[e2] = i2;
	    }
	    function Jt(t2, e2, n2, r2, s2) {
	      if (o(e2)) {
	        if (y(e2, n2))
	          return t2[n2] = e2[n2], s2 || delete e2[n2], true;
	        if (y(e2, r2))
	          return t2[n2] = e2[r2], s2 || delete e2[r2], true;
	      }
	      return false;
	    }
	    function Xt(t2) {
	      return s(t2) ? [at(t2)] : e(t2) ? Yt(t2) : void 0;
	    }
	    function Qt(t2) {
	      return o(t2) && o(t2.text) && false === t2.isComment;
	    }
	    function Yt(t2, i2) {
	      const c2 = [];
	      let a2, l2, u2, f2;
	      for (a2 = 0; a2 < t2.length; a2++)
	        l2 = t2[a2], n(l2) || "boolean" == typeof l2 || (u2 = c2.length - 1, f2 = c2[u2], e(l2) ? l2.length > 0 && (l2 = Yt(l2, `${i2 || ""}_${a2}`), Qt(l2[0]) && Qt(f2) && (c2[u2] = at(f2.text + l2[0].text), l2.shift()), c2.push.apply(c2, l2)) : s(l2) ? Qt(f2) ? c2[u2] = at(f2.text + l2) : "" !== l2 && c2.push(at(l2)) : Qt(l2) && Qt(f2) ? c2[u2] = at(f2.text + l2.text) : (r(t2._isVList) && o(l2.tag) && n(l2.key) && o(i2) && (l2.key = `__vlist${i2}_${a2}__`), c2.push(l2)));
	      return c2;
	    }
	    function te(t2, n2) {
	      let r2, s2, i2, a2, l2 = null;
	      if (e(t2) || "string" == typeof t2)
	        for (l2 = new Array(t2.length), r2 = 0, s2 = t2.length; r2 < s2; r2++)
	          l2[r2] = n2(t2[r2], r2);
	      else if ("number" == typeof t2)
	        for (l2 = new Array(t2), r2 = 0; r2 < t2; r2++)
	          l2[r2] = n2(r2 + 1, r2);
	      else if (c(t2))
	        if (nt && t2[Symbol.iterator]) {
	          l2 = [];
	          const e2 = t2[Symbol.iterator]();
	          let o2 = e2.next();
	          for (; !o2.done; )
	            l2.push(n2(o2.value, l2.length)), o2 = e2.next();
	        } else
	          for (i2 = Object.keys(t2), l2 = new Array(i2.length), r2 = 0, s2 = i2.length; r2 < s2; r2++)
	            a2 = i2[r2], l2[r2] = n2(t2[a2], a2, r2);
	      return o(l2) || (l2 = []), l2._isVList = true, l2;
	    }
	    function ee(t2, e2, n2, o2) {
	      const r2 = this.$scopedSlots[t2];
	      let s2;
	      r2 ? (n2 = n2 || {}, o2 && (n2 = S(S({}, o2), n2)), s2 = r2(n2) || (i(e2) ? e2() : e2)) : s2 = this.$slots[t2] || (i(e2) ? e2() : e2);
	      const c2 = n2 && n2.slot;
	      return c2 ? this.$createElement("template", {
	        slot: c2
	      }, s2) : s2;
	    }
	    function ne(t2) {
	      return Kn(this.$options, "filters", t2) || E;
	    }
	    function oe(t2, n2) {
	      return e(t2) ? -1 === t2.indexOf(n2) : t2 !== n2;
	    }
	    function re(t2, e2, n2, o2, r2) {
	      const s2 = L.keyCodes[e2] || n2;
	      return r2 && o2 && !L.keyCodes[e2] ? oe(r2, o2) : s2 ? oe(s2, t2) : o2 ? x(o2) !== e2 : void 0 === t2;
	    }
	    function se(t2, n2, o2, r2, s2) {
	      if (o2)
	        if (c(o2)) {
	          let i2;
	          e(o2) && (o2 = A(o2));
	          for (const e2 in o2) {
	            if ("class" === e2 || "style" === e2 || m(e2))
	              i2 = t2;
	            else {
	              const o3 = t2.attrs && t2.attrs.type;
	              i2 = r2 || L.mustUseProp(n2, o3, e2) ? t2.domProps || (t2.domProps = {}) : t2.attrs || (t2.attrs = {});
	            }
	            const c2 = $(e2), a2 = x(e2);
	            if (!(c2 in i2) && !(a2 in i2) && (i2[e2] = o2[e2], s2)) {
	              (t2.on || (t2.on = {}))[`update:${e2}`] = function(t3) {
	                o2[e2] = t3;
	              };
	            }
	          }
	        }
	      return t2;
	    }
	    function ie(t2, e2) {
	      const n2 = this._staticTrees || (this._staticTrees = []);
	      let o2 = n2[t2];
	      return o2 && !e2 || (o2 = n2[t2] = this.$options.staticRenderFns[t2].call(this._renderProxy, this._c, this), ae(o2, `__static__${t2}`, false)), o2;
	    }
	    function ce(t2, e2, n2) {
	      return ae(t2, `__once__${e2}${n2 ? `_${n2}` : ""}`, true), t2;
	    }
	    function ae(t2, n2, o2) {
	      if (e(t2))
	        for (let e2 = 0; e2 < t2.length; e2++)
	          t2[e2] && "string" != typeof t2[e2] && le(t2[e2], `${n2}_${e2}`, o2);
	      else
	        le(t2, n2, o2);
	    }
	    function le(t2, e2, n2) {
	      t2.isStatic = true, t2.key = e2, t2.isOnce = n2;
	    }
	    function ue(t2, e2) {
	      if (e2)
	        if (l(e2)) {
	          const n2 = t2.on = t2.on ? S({}, t2.on) : {};
	          for (const t3 in e2) {
	            const o2 = n2[t3], r2 = e2[t3];
	            n2[t3] = o2 ? [].concat(o2, r2) : r2;
	          }
	        }
	      return t2;
	    }
	    function fe(t2, n2, o2, r2) {
	      n2 = n2 || {
	        $stable: !o2
	      };
	      for (let r3 = 0; r3 < t2.length; r3++) {
	        const s2 = t2[r3];
	        e(s2) ? fe(s2, n2, o2) : s2 && (s2.proxy && (s2.fn.proxy = true), n2[s2.key] = s2.fn);
	      }
	      return r2 && (n2.$key = r2), n2;
	    }
	    function de(t2, e2) {
	      for (let n2 = 0; n2 < e2.length; n2 += 2) {
	        const o2 = e2[n2];
	        "string" == typeof o2 && o2 && (t2[e2[n2]] = e2[n2 + 1]);
	      }
	      return t2;
	    }
	    function pe(t2, e2) {
	      return "string" == typeof t2 ? e2 + t2 : t2;
	    }
	    function he(t2) {
	      t2._o = ce, t2._n = p, t2._s = d, t2._l = te, t2._t = ee, t2._q = P, t2._i = I, t2._m = ie, t2._f = ne, t2._k = re, t2._b = se, t2._v = at, t2._e = ct, t2._u = fe, t2._g = ue, t2._d = de, t2._p = pe;
	    }
	    function me(t2, e2) {
	      if (!t2 || !t2.length)
	        return {};
	      const n2 = {};
	      for (let o2 = 0, r2 = t2.length; o2 < r2; o2++) {
	        const r3 = t2[o2], s2 = r3.data;
	        if (s2 && s2.attrs && s2.attrs.slot && delete s2.attrs.slot, r3.context !== e2 && r3.fnContext !== e2 || !s2 || null == s2.slot)
	          (n2.default || (n2.default = [])).push(r3);
	        else {
	          const t3 = s2.slot, e3 = n2[t3] || (n2[t3] = []);
	          "template" === r3.tag ? e3.push.apply(e3, r3.children || []) : e3.push(r3);
	        }
	      }
	      for (const t3 in n2)
	        n2[t3].every(_e) && delete n2[t3];
	      return n2;
	    }
	    function _e(t2) {
	      return t2.isComment && !t2.asyncFactory || " " === t2.text;
	    }
	    function ve(t2) {
	      return t2.isComment && t2.asyncFactory;
	    }
	    function ye(e2, n2, o2, r2) {
	      let s2;
	      const i2 = Object.keys(o2).length > 0, c2 = n2 ? !!n2.$stable : !i2, a2 = n2 && n2.$key;
	      if (n2) {
	        if (n2._normalized)
	          return n2._normalized;
	        if (c2 && r2 && r2 !== t && a2 === r2.$key && !i2 && !r2.$hasNormal)
	          return r2;
	        s2 = {};
	        for (const t2 in n2)
	          n2[t2] && "$" !== t2[0] && (s2[t2] = ge(e2, o2, t2, n2[t2]));
	      } else
	        s2 = {};
	      for (const t2 in o2)
	        t2 in s2 || (s2[t2] = be(o2, t2));
	      return n2 && Object.isExtensible(n2) && (n2._normalized = s2), U(s2, "$stable", c2), U(s2, "$key", a2), U(s2, "$hasNormal", i2), s2;
	    }
	    function ge(t2, n2, o2, r2) {
	      const s2 = function() {
	        const n3 = rt;
	        st(t2);
	        let o3 = arguments.length ? r2.apply(null, arguments) : r2({});
	        o3 = o3 && "object" == typeof o3 && !e(o3) ? [o3] : Xt(o3);
	        const s3 = o3 && o3[0];
	        return st(n3), o3 && (!s3 || 1 === o3.length && s3.isComment && !ve(s3)) ? void 0 : o3;
	      };
	      return r2.proxy && Object.defineProperty(n2, o2, {
	        get: s2,
	        enumerable: true,
	        configurable: true
	      }), s2;
	    }
	    function be(t2, e2) {
	      return () => t2[e2];
	    }
	    function $e(e2) {
	      return {
	        get attrs() {
	          if (!e2._attrsProxy) {
	            const n2 = e2._attrsProxy = {};
	            U(n2, "_v_attr_proxy", true), we(n2, e2.$attrs, t, e2, "$attrs");
	          }
	          return e2._attrsProxy;
	        },
	        get listeners() {
	          if (!e2._listenersProxy) {
	            we(e2._listenersProxy = {}, e2.$listeners, t, e2, "$listeners");
	          }
	          return e2._listenersProxy;
	        },
	        get slots() {
	          return function(t2) {
	            t2._slotsProxy || xe(t2._slotsProxy = {}, t2.$scopedSlots);
	            return t2._slotsProxy;
	          }(e2);
	        },
	        emit: k(e2.$emit, e2),
	        expose(t2) {
	          t2 && Object.keys(t2).forEach((n2) => Nt(e2, t2, n2));
	        }
	      };
	    }
	    function we(t2, e2, n2, o2, r2) {
	      let s2 = false;
	      for (const i2 in e2)
	        i2 in t2 ? e2[i2] !== n2[i2] && (s2 = true) : (s2 = true, Ce(t2, i2, o2, r2));
	      for (const n3 in t2)
	        n3 in e2 || (s2 = true, delete t2[n3]);
	      return s2;
	    }
	    function Ce(t2, e2, n2, o2) {
	      Object.defineProperty(t2, e2, {
	        enumerable: true,
	        configurable: true,
	        get: () => n2[o2][e2]
	      });
	    }
	    function xe(t2, e2) {
	      for (const n2 in e2)
	        t2[n2] = e2[n2];
	      for (const n2 in t2)
	        n2 in e2 || delete t2[n2];
	    }
	    function ke() {
	      const t2 = rt;
	      return t2._setupContext || (t2._setupContext = $e(t2));
	    }
	    let Oe = null;
	    function Se(t2, e2) {
	      return (t2.__esModule || nt && "Module" === t2[Symbol.toStringTag]) && (t2 = t2.default), c(t2) ? e2.extend(t2) : t2;
	    }
	    function Ae(t2) {
	      if (e(t2))
	        for (let e2 = 0; e2 < t2.length; e2++) {
	          const n2 = t2[e2];
	          if (o(n2) && (o(n2.componentOptions) || ve(n2)))
	            return n2;
	        }
	    }
	    function Te(t2, n2, a2, l2, u2, f2) {
	      return (e(a2) || s(a2)) && (u2 = l2, l2 = a2, a2 = void 0), r(f2) && (u2 = 2), function(t3, n3, r2, s2, a3) {
	        if (o(r2) && o(r2.__ob__))
	          return ct();
	        o(r2) && o(r2.is) && (n3 = r2.is);
	        if (!n3)
	          return ct();
	        e(s2) && i(s2[0]) && ((r2 = r2 || {}).scopedSlots = {
	          default: s2[0]
	        }, s2.length = 0);
	        2 === a3 ? s2 = Xt(s2) : 1 === a3 && (s2 = function(t4) {
	          for (let n4 = 0; n4 < t4.length; n4++)
	            if (e(t4[n4]))
	              return Array.prototype.concat.apply([], t4);
	          return t4;
	        }(s2));
	        let l3, u3;
	        if ("string" == typeof n3) {
	          let e2;
	          u3 = t3.$vnode && t3.$vnode.ns || L.getTagNamespace(n3), l3 = L.isReservedTag(n3) ? new it(L.parsePlatformTagName(n3), r2, s2, void 0, void 0, t3) : r2 && r2.pre || !o(e2 = Kn(t3.$options, "components", n3)) ? new it(n3, r2, s2, void 0, void 0, t3) : Mn(e2, r2, t3, s2, n3);
	        } else
	          l3 = Mn(n3, r2, t3, s2);
	        return e(l3) ? l3 : o(l3) ? (o(u3) && je(l3, u3), o(r2) && function(t4) {
	          c(t4.style) && nn(t4.style);
	          c(t4.class) && nn(t4.class);
	        }(r2), l3) : ct();
	      }(t2, n2, a2, l2, u2);
	    }
	    function je(t2, e2, s2) {
	      if (t2.ns = e2, "foreignObject" === t2.tag && (e2 = void 0, s2 = true), o(t2.children))
	        for (let i2 = 0, c2 = t2.children.length; i2 < c2; i2++) {
	          const c3 = t2.children[i2];
	          o(c3.tag) && (n(c3.ns) || r(s2) && "svg" !== c3.tag) && je(c3, e2, s2);
	        }
	    }
	    function Ee(t2, e2, n2) {
	      pt();
	      try {
	        if (e2) {
	          let o2 = e2;
	          for (; o2 = o2.$parent; ) {
	            const r2 = o2.$options.errorCaptured;
	            if (r2)
	              for (let s2 = 0; s2 < r2.length; s2++)
	                try {
	                  if (false === r2[s2].call(o2, t2, e2, n2))
	                    return;
	                } catch (t3) {
	                  Ie(t3, o2, "errorCaptured hook");
	                }
	          }
	        }
	        Ie(t2, e2, n2);
	      } finally {
	        ht();
	      }
	    }
	    function Pe(t2, e2, n2, o2, r2) {
	      let s2;
	      try {
	        s2 = n2 ? t2.apply(e2, n2) : t2.call(e2), s2 && !s2._isVue && f(s2) && !s2._handled && (s2.catch((t3) => Ee(t3, o2, r2 + " (Promise/async)")), s2._handled = true);
	      } catch (t3) {
	        Ee(t3, o2, r2);
	      }
	      return s2;
	    }
	    function Ie(t2, e2, n2) {
	      if (L.errorHandler)
	        try {
	          return L.errorHandler.call(null, t2, e2, n2);
	        } catch (e3) {
	          e3 !== t2 && De(e3);
	        }
	      De(t2);
	    }
	    function De(t2, e2, n2) {
	      throw t2;
	    }
	    let Ne = false;
	    const Me = [];
	    let Re, Le = false;
	    function Fe() {
	      Le = false;
	      const t2 = Me.slice(0);
	      Me.length = 0;
	      for (let e2 = 0; e2 < t2.length; e2++)
	        t2[e2]();
	    }
	    if ("undefined" != typeof Promise && et(Promise)) {
	      const t2 = Promise.resolve();
	      Re = () => {
	        t2.then(Fe);
	      }, Ne = true;
	    } else if ("undefined" == typeof MutationObserver || !et(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
	      Re = "undefined" != typeof setImmediate && et(setImmediate) ? () => {
	        setImmediate(Fe);
	      } : () => {
	        setTimeout(Fe, 0);
	      };
	    else {
	      let t2 = 1;
	      const e2 = new MutationObserver(Fe), n2 = document.createTextNode(String(t2));
	      e2.observe(n2, {
	        characterData: true
	      }), Re = () => {
	        t2 = (t2 + 1) % 2, n2.data = String(t2);
	      }, Ne = true;
	    }
	    function Ue(t2, e2) {
	      let n2;
	      if (Me.push(() => {
	        if (t2)
	          try {
	            t2.call(e2);
	          } catch (t3) {
	            Ee(t3, e2, "nextTick");
	          }
	        else
	          n2 && n2(e2);
	      }), Le || (Le = true, Re()), !t2 && "undefined" != typeof Promise)
	        return new Promise((t3) => {
	          n2 = t3;
	        });
	    }
	    function Be(t2) {
	      return (e2, n2 = rt) => {
	        if (n2)
	          return function(t3, e3, n3) {
	            const o2 = t3.$options;
	            o2[e3] = Vn(o2[e3], n3);
	          }(n2, t2, e2);
	      };
	    }
	    const Ve = Be("beforeMount"), ze = Be("mounted"), He = Be("beforeUpdate"), We = Be("updated"), Ke = Be("beforeDestroy"), qe = Be("destroyed"), Ge = Be("activated"), Ze = Be("deactivated"), Je = Be("serverPrefetch"), Xe = Be("renderTracked"), Qe = Be("renderTriggered"), Ye = Be("errorCaptured");
	    var tn = Object.freeze({
	      __proto__: null,
	      version: "2.7.10",
	      defineComponent: function(t2) {
	        return t2;
	      },
	      ref: function(t2) {
	        return Dt(t2, false);
	      },
	      shallowRef: function(t2) {
	        return Dt(t2, true);
	      },
	      isRef: It,
	      toRef: Mt,
	      toRefs: function(t2) {
	        const n2 = e(t2) ? new Array(t2.length) : {};
	        for (const e2 in t2)
	          n2[e2] = Mt(t2, e2);
	        return n2;
	      },
	      unref: function(t2) {
	        return It(t2) ? t2.value : t2;
	      },
	      proxyRefs: function(t2) {
	        if (jt(t2))
	          return t2;
	        const e2 = {}, n2 = Object.keys(t2);
	        for (let o2 = 0; o2 < n2.length; o2++)
	          Nt(e2, t2, n2[o2]);
	        return e2;
	      },
	      customRef: function(t2) {
	        const e2 = new ft(), {
	          get: n2,
	          set: o2
	        } = t2(() => {
	          e2.depend();
	        }, () => {
	          e2.notify();
	        }), r2 = {
	          get value() {
	            return n2();
	          },
	          set value(t3) {
	            o2(t3);
	          }
	        };
	        return U(r2, "__v_isRef", true), r2;
	      },
	      triggerRef: function(t2) {
	        t2.dep && t2.dep.notify();
	      },
	      reactive: function(t2) {
	        return Tt(t2, false), t2;
	      },
	      isReactive: jt,
	      isReadonly: Pt,
	      isShallow: Et,
	      isProxy: function(t2) {
	        return jt(t2) || Pt(t2);
	      },
	      shallowReactive: At,
	      markRaw: function(t2) {
	        return U(t2, "__v_skip", true), t2;
	      },
	      toRaw: function t2(e2) {
	        const n2 = e2 && e2.__v_raw;
	        return n2 ? t2(n2) : e2;
	      },
	      readonly: Rt,
	      shallowReadonly: function(t2) {
	        return Lt(t2, true);
	      },
	      computed: function(t2, e2) {
	        let n2, o2;
	        const r2 = i(t2);
	        r2 ? (n2 = t2, o2 = T) : (n2 = t2.get, o2 = t2.set);
	        const s2 = Y() ? null : new cn(rt, n2, T, {
	          lazy: true
	        }), c2 = {
	          effect: s2,
	          get value() {
	            return s2 ? (s2.dirty && s2.evaluate(), ft.target && s2.depend(), s2.value) : n2();
	          },
	          set value(t3) {
	            o2(t3);
	          }
	        };
	        return U(c2, "__v_isRef", true), U(c2, "__v_isReadonly", r2), c2;
	      },
	      watch: function(t2, e2, n2) {
	        return Vt(t2, e2, n2);
	      },
	      watchEffect: function(t2, e2) {
	        return Vt(t2, null, e2);
	      },
	      watchPostEffect: Ut,
	      watchSyncEffect: function(t2, e2) {
	        return Vt(t2, null, {
	          flush: "sync"
	        });
	      },
	      EffectScope: Ht,
	      effectScope: function(t2) {
	        return new Ht(t2);
	      },
	      onScopeDispose: function(t2) {
	        zt && zt.cleanups.push(t2);
	      },
	      getCurrentScope: function() {
	        return zt;
	      },
	      provide: function(t2, e2) {
	        rt && (Wt(rt)[t2] = e2);
	      },
	      inject: function(t2, e2, n2 = false) {
	        const o2 = rt;
	        if (o2) {
	          const r2 = o2.$parent && o2.$parent._provided;
	          if (r2 && t2 in r2)
	            return r2[t2];
	          if (arguments.length > 1)
	            return n2 && i(e2) ? e2.call(o2) : e2;
	        }
	      },
	      h: function(t2, e2, n2) {
	        return Te(rt, t2, e2, n2, 2, true);
	      },
	      getCurrentInstance: function() {
	        return rt && {
	          proxy: rt
	        };
	      },
	      useSlots: function() {
	        return ke().slots;
	      },
	      useAttrs: function() {
	        return ke().attrs;
	      },
	      useListeners: function() {
	        return ke().listeners;
	      },
	      mergeDefaults: function(t2, n2) {
	        const o2 = e(t2) ? t2.reduce((t3, e2) => (t3[e2] = {}, t3), {}) : t2;
	        for (const t3 in n2) {
	          const r2 = o2[t3];
	          r2 ? e(r2) || i(r2) ? o2[t3] = {
	            type: r2,
	            default: n2[t3]
	          } : r2.default = n2[t3] : null === r2 && (o2[t3] = {
	            default: n2[t3]
	          });
	        }
	        return o2;
	      },
	      nextTick: Ue,
	      set: kt,
	      del: Ot,
	      useCssModule: function(e2 = "$style") {
	        {
	          if (!rt)
	            return t;
	          const n2 = rt[e2];
	          return n2 || t;
	        }
	      },
	      useCssVars: function(t2) {
	        return;
	      },
	      defineAsyncComponent: function(t2) {
	        i(t2) && (t2 = {
	          loader: t2
	        });
	        const {
	          loader: e2,
	          loadingComponent: n2,
	          errorComponent: o2,
	          delay: r2 = 200,
	          timeout: s2,
	          suspensible: c2 = false,
	          onError: a2
	        } = t2;
	        let l2 = null, u2 = 0;
	        const f2 = () => {
	          let t3;
	          return l2 || (t3 = l2 = e2().catch((t4) => {
	            if (t4 = t4 instanceof Error ? t4 : new Error(String(t4)), a2)
	              return new Promise((e3, n3) => {
	                a2(t4, () => e3((u2++, l2 = null, f2())), () => n3(t4), u2 + 1);
	              });
	            throw t4;
	          }).then((e3) => t3 !== l2 && l2 ? l2 : (e3 && (e3.__esModule || "Module" === e3[Symbol.toStringTag]) && (e3 = e3.default), e3)));
	        };
	        return () => ({
	          component: f2(),
	          delay: r2,
	          timeout: s2,
	          error: o2,
	          loading: n2
	        });
	      },
	      onBeforeMount: Ve,
	      onMounted: ze,
	      onBeforeUpdate: He,
	      onUpdated: We,
	      onBeforeUnmount: Ke,
	      onUnmounted: qe,
	      onActivated: Ge,
	      onDeactivated: Ze,
	      onServerPrefetch: Je,
	      onRenderTracked: Xe,
	      onRenderTriggered: Qe,
	      onErrorCaptured: function(t2, e2 = rt) {
	        Ye(t2, e2);
	      }
	    });
	    const en = new ot();
	    function nn(t2) {
	      return on(t2, en), en.clear(), t2;
	    }
	    function on(t2, n2) {
	      let o2, r2;
	      const s2 = e(t2);
	      if (!(!s2 && !c(t2) || Object.isFrozen(t2) || t2 instanceof it)) {
	        if (t2.__ob__) {
	          const e2 = t2.__ob__.dep.id;
	          if (n2.has(e2))
	            return;
	          n2.add(e2);
	        }
	        if (s2)
	          for (o2 = t2.length; o2--; )
	            on(t2[o2], n2);
	        else if (It(t2))
	          on(t2.value, n2);
	        else
	          for (r2 = Object.keys(t2), o2 = r2.length; o2--; )
	            on(t2[r2[o2]], n2);
	      }
	    }
	    let rn, sn = 0;
	    class cn {
	      constructor(t2, e2, n2, o2, r2) {
	        !function(t3, e3 = zt) {
	          e3 && e3.active && e3.effects.push(t3);
	        }(this, zt && !zt._vm ? zt : t2 ? t2._scope : void 0), (this.vm = t2) && r2 && (t2._watcher = this), o2 ? (this.deep = !!o2.deep, this.user = !!o2.user, this.lazy = !!o2.lazy, this.sync = !!o2.sync, this.before = o2.before) : this.deep = this.user = this.lazy = this.sync = false, this.cb = n2, this.id = ++sn, this.active = true, this.post = false, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ot(), this.newDepIds = new ot(), this.expression = "", i(e2) ? this.getter = e2 : (this.getter = function(t3) {
	          if (B.test(t3))
	            return;
	          const e3 = t3.split(".");
	          return function(t4) {
	            for (let n3 = 0; n3 < e3.length; n3++) {
	              if (!t4)
	                return;
	              t4 = t4[e3[n3]];
	            }
	            return t4;
	          };
	        }(e2), this.getter || (this.getter = T)), this.value = this.lazy ? void 0 : this.get();
	      }
	      get() {
	        let t2;
	        pt(this);
	        const e2 = this.vm;
	        try {
	          t2 = this.getter.call(e2, e2);
	        } catch (t3) {
	          if (!this.user)
	            throw t3;
	          Ee(t3, e2, `getter for watcher "${this.expression}"`);
	        } finally {
	          this.deep && nn(t2), ht(), this.cleanupDeps();
	        }
	        return t2;
	      }
	      addDep(t2) {
	        const e2 = t2.id;
	        this.newDepIds.has(e2) || (this.newDepIds.add(e2), this.newDeps.push(t2), this.depIds.has(e2) || t2.addSub(this));
	      }
	      cleanupDeps() {
	        let t2 = this.deps.length;
	        for (; t2--; ) {
	          const e3 = this.deps[t2];
	          this.newDepIds.has(e3.id) || e3.removeSub(this);
	        }
	        let e2 = this.depIds;
	        this.depIds = this.newDepIds, this.newDepIds = e2, this.newDepIds.clear(), e2 = this.deps, this.deps = this.newDeps, this.newDeps = e2, this.newDeps.length = 0;
	      }
	      update() {
	        this.lazy ? this.dirty = true : this.sync ? this.run() : An(this);
	      }
	      run() {
	        if (this.active) {
	          const t2 = this.get();
	          if (t2 !== this.value || c(t2) || this.deep) {
	            const e2 = this.value;
	            if (this.value = t2, this.user) {
	              const n2 = `callback for watcher "${this.expression}"`;
	              Pe(this.cb, this.vm, [t2, e2], this.vm, n2);
	            } else
	              this.cb.call(this.vm, t2, e2);
	          }
	        }
	      }
	      evaluate() {
	        this.value = this.get(), this.dirty = false;
	      }
	      depend() {
	        let t2 = this.deps.length;
	        for (; t2--; )
	          this.deps[t2].depend();
	      }
	      teardown() {
	        if (this.vm && !this.vm._isBeingDestroyed && _(this.vm._scope.effects, this), this.active) {
	          let t2 = this.deps.length;
	          for (; t2--; )
	            this.deps[t2].removeSub(this);
	          this.active = false, this.onStop && this.onStop();
	        }
	      }
	    }
	    function an(t2, e2) {
	      rn.$on(t2, e2);
	    }
	    function ln(t2, e2) {
	      rn.$off(t2, e2);
	    }
	    function un(t2, e2) {
	      const n2 = rn;
	      return function o2() {
	        const r2 = e2.apply(null, arguments);
	        null !== r2 && n2.$off(t2, o2);
	      };
	    }
	    function fn(t2, e2, n2) {
	      rn = t2, Gt(e2, n2 || {}, an, ln, un, t2), rn = void 0;
	    }
	    let dn = null;
	    function pn(t2) {
	      const e2 = dn;
	      return dn = t2, () => {
	        dn = e2;
	      };
	    }
	    function hn(t2) {
	      for (; t2 && (t2 = t2.$parent); )
	        if (t2._inactive)
	          return true;
	      return false;
	    }
	    function mn(t2, e2) {
	      if (e2) {
	        if (t2._directInactive = false, hn(t2))
	          return;
	      } else if (t2._directInactive)
	        return;
	      if (t2._inactive || null === t2._inactive) {
	        t2._inactive = false;
	        for (let e3 = 0; e3 < t2.$children.length; e3++)
	          mn(t2.$children[e3]);
	        vn(t2, "activated");
	      }
	    }
	    function _n(t2, e2) {
	      if (!(e2 && (t2._directInactive = true, hn(t2)) || t2._inactive)) {
	        t2._inactive = true;
	        for (let e3 = 0; e3 < t2.$children.length; e3++)
	          _n(t2.$children[e3]);
	        vn(t2, "deactivated");
	      }
	    }
	    function vn(t2, e2, n2, o2 = true) {
	      pt();
	      const r2 = rt;
	      o2 && st(t2);
	      const s2 = t2.$options[e2], i2 = `${e2} hook`;
	      if (s2)
	        for (let e3 = 0, o3 = s2.length; e3 < o3; e3++)
	          Pe(s2[e3], t2, n2 || null, t2, i2);
	      t2._hasHookEvent && t2.$emit("hook:" + e2), o2 && st(r2), ht();
	    }
	    const yn = [], gn = [];
	    let bn = {}, $n = false, wn = false, Cn = 0;
	    let xn = 0, kn = Date.now;
	    const On = (t2, e2) => {
	      if (t2.post) {
	        if (!e2.post)
	          return 1;
	      } else if (e2.post)
	        return -1;
	      return t2.id - e2.id;
	    };
	    function Sn() {
	      let t2, e2;
	      for (xn = kn(), wn = true, yn.sort(On), Cn = 0; Cn < yn.length; Cn++)
	        t2 = yn[Cn], t2.before && t2.before(), e2 = t2.id, bn[e2] = null, t2.run();
	      const n2 = gn.slice(), o2 = yn.slice();
	      Cn = yn.length = gn.length = 0, bn = {}, $n = wn = false, function(t3) {
	        for (let e3 = 0; e3 < t3.length; e3++)
	          t3[e3]._inactive = true, mn(t3[e3], true);
	      }(n2), function(t3) {
	        let e3 = t3.length;
	        for (; e3--; ) {
	          const n3 = t3[e3], o3 = n3.vm;
	          o3 && o3._watcher === n3 && o3._isMounted && !o3._isDestroyed && vn(o3, "updated");
	        }
	      }(o2);
	    }
	    function An(t2) {
	      const e2 = t2.id;
	      if (null == bn[e2] && (t2 !== ft.target || !t2.noRecurse)) {
	        if (bn[e2] = true, wn) {
	          let e3 = yn.length - 1;
	          for (; e3 > Cn && yn[e3].id > t2.id; )
	            e3--;
	          yn.splice(e3 + 1, 0, t2);
	        } else
	          yn.push(t2);
	        $n || ($n = true, Ue(Sn));
	      }
	    }
	    function Tn(t2, e2) {
	      if (t2) {
	        const n2 = /* @__PURE__ */ Object.create(null), o2 = nt ? Reflect.ownKeys(t2) : Object.keys(t2);
	        for (let r2 = 0; r2 < o2.length; r2++) {
	          const s2 = o2[r2];
	          if ("__ob__" === s2)
	            continue;
	          const c2 = t2[s2].from;
	          if (c2 in e2._provided)
	            n2[s2] = e2._provided[c2];
	          else if ("default" in t2[s2]) {
	            const o3 = t2[s2].default;
	            n2[s2] = i(o3) ? o3.call(e2) : o3;
	          }
	        }
	        return n2;
	      }
	    }
	    function jn(n2, o2, s2, i2, c2) {
	      const a2 = c2.options;
	      let l2;
	      y(i2, "_uid") ? (l2 = Object.create(i2), l2._original = i2) : (l2 = i2, i2 = i2._original);
	      const u2 = r(a2._compiled), f2 = !u2;
	      this.data = n2, this.props = o2, this.children = s2, this.parent = i2, this.listeners = n2.on || t, this.injections = Tn(a2.inject, i2), this.slots = () => (this.$slots || ye(i2, n2.scopedSlots, this.$slots = me(s2, i2)), this.$slots), Object.defineProperty(this, "scopedSlots", {
	        enumerable: true,
	        get() {
	          return ye(i2, n2.scopedSlots, this.slots());
	        }
	      }), u2 && (this.$options = a2, this.$slots = this.slots(), this.$scopedSlots = ye(i2, n2.scopedSlots, this.$slots)), a2._scopeId ? this._c = (t2, n3, o3, r2) => {
	        const s3 = Te(l2, t2, n3, o3, r2, f2);
	        return s3 && !e(s3) && (s3.fnScopeId = a2._scopeId, s3.fnContext = i2), s3;
	      } : this._c = (t2, e2, n3, o3) => Te(l2, t2, e2, n3, o3, f2);
	    }
	    function En(t2, e2, n2, o2, r2) {
	      const s2 = lt(t2);
	      return s2.fnContext = n2, s2.fnOptions = o2, e2.slot && ((s2.data || (s2.data = {})).slot = e2.slot), s2;
	    }
	    function Pn(t2, e2) {
	      for (const n2 in e2)
	        t2[$(n2)] = e2[n2];
	    }
	    function In(t2) {
	      return t2.name || t2.__name || t2._componentTag;
	    }
	    he(jn.prototype);
	    const Dn = {
	      init(t2, e2) {
	        if (t2.componentInstance && !t2.componentInstance._isDestroyed && t2.data.keepAlive) {
	          const e3 = t2;
	          Dn.prepatch(e3, e3);
	        } else {
	          (t2.componentInstance = function(t3, e3) {
	            const n2 = {
	              _isComponent: true,
	              _parentVnode: t3,
	              parent: e3
	            }, r2 = t3.data.inlineTemplate;
	            o(r2) && (n2.render = r2.render, n2.staticRenderFns = r2.staticRenderFns);
	            return new t3.componentOptions.Ctor(n2);
	          }(t2, dn)).$mount(e2 ? t2.elm : void 0, e2);
	        }
	      },
	      prepatch(e2, n2) {
	        const o2 = n2.componentOptions;
	        !function(e3, n3, o3, r2, s2) {
	          const i2 = r2.data.scopedSlots, c2 = e3.$scopedSlots, a2 = !!(i2 && !i2.$stable || c2 !== t && !c2.$stable || i2 && e3.$scopedSlots.$key !== i2.$key || !i2 && e3.$scopedSlots.$key);
	          let l2 = !!(s2 || e3.$options._renderChildren || a2);
	          const u2 = e3.$vnode;
	          e3.$options._parentVnode = r2, e3.$vnode = r2, e3._vnode && (e3._vnode.parent = r2), e3.$options._renderChildren = s2;
	          const f2 = r2.data.attrs || t;
	          e3._attrsProxy && we(e3._attrsProxy, f2, u2.data && u2.data.attrs || t, e3, "$attrs") && (l2 = true), e3.$attrs = f2, o3 = o3 || t;
	          const d2 = e3.$options._parentListeners;
	          if (e3._listenersProxy && we(e3._listenersProxy, o3, d2 || t, e3, "$listeners"), e3.$listeners = e3.$options._parentListeners = o3, fn(e3, o3, d2), n3 && e3.$options.props) {
	            bt(false);
	            const t2 = e3._props, o4 = e3.$options._propKeys || [];
	            for (let r3 = 0; r3 < o4.length; r3++) {
	              const s3 = o4[r3], i3 = e3.$options.props;
	              t2[s3] = qn(s3, i3, n3, e3);
	            }
	            bt(true), e3.$options.propsData = n3;
	          }
	          l2 && (e3.$slots = me(s2, r2.context), e3.$forceUpdate());
	        }(n2.componentInstance = e2.componentInstance, o2.propsData, o2.listeners, n2, o2.children);
	      },
	      insert(t2) {
	        const {
	          context: e2,
	          componentInstance: n2
	        } = t2;
	        var o2;
	        n2._isMounted || (n2._isMounted = true, vn(n2, "mounted")), t2.data.keepAlive && (e2._isMounted ? ((o2 = n2)._inactive = false, gn.push(o2)) : mn(n2, true));
	      },
	      destroy(t2) {
	        const {
	          componentInstance: e2
	        } = t2;
	        e2._isDestroyed || (t2.data.keepAlive ? _n(e2, true) : e2.$destroy());
	      }
	    }, Nn = Object.keys(Dn);
	    function Mn(s2, i2, a2, l2, u2) {
	      if (n(s2))
	        return;
	      const d2 = a2.$options._base;
	      if (c(s2) && (s2 = d2.extend(s2)), "function" != typeof s2)
	        return;
	      let p2;
	      if (n(s2.cid) && (p2 = s2, s2 = function(t2, e2) {
	        if (r(t2.error) && o(t2.errorComp))
	          return t2.errorComp;
	        if (o(t2.resolved))
	          return t2.resolved;
	        const s3 = Oe;
	        if (s3 && o(t2.owners) && -1 === t2.owners.indexOf(s3) && t2.owners.push(s3), r(t2.loading) && o(t2.loadingComp))
	          return t2.loadingComp;
	        if (s3 && !o(t2.owners)) {
	          const r2 = t2.owners = [s3];
	          let i3 = true, a3 = null, l3 = null;
	          s3.$on("hook:destroyed", () => _(r2, s3));
	          const u3 = (t3) => {
	            for (let t4 = 0, e3 = r2.length; t4 < e3; t4++)
	              r2[t4].$forceUpdate();
	            t3 && (r2.length = 0, null !== a3 && (clearTimeout(a3), a3 = null), null !== l3 && (clearTimeout(l3), l3 = null));
	          }, d3 = D((n2) => {
	            t2.resolved = Se(n2, e2), i3 ? r2.length = 0 : u3(true);
	          }), p3 = D((e3) => {
	            o(t2.errorComp) && (t2.error = true, u3(true));
	          }), h3 = t2(d3, p3);
	          return c(h3) && (f(h3) ? n(t2.resolved) && h3.then(d3, p3) : f(h3.component) && (h3.component.then(d3, p3), o(h3.error) && (t2.errorComp = Se(h3.error, e2)), o(h3.loading) && (t2.loadingComp = Se(h3.loading, e2), 0 === h3.delay ? t2.loading = true : a3 = setTimeout(() => {
	            a3 = null, n(t2.resolved) && n(t2.error) && (t2.loading = true, u3(false));
	          }, h3.delay || 200)), o(h3.timeout) && (l3 = setTimeout(() => {
	            l3 = null, n(t2.resolved) && p3(null);
	          }, h3.timeout)))), i3 = false, t2.loading ? t2.loadingComp : t2.resolved;
	        }
	      }(p2, d2), void 0 === s2))
	        return function(t2, e2, n2, o2, r2) {
	          const s3 = ct();
	          return s3.asyncFactory = t2, s3.asyncMeta = {
	            data: e2,
	            context: n2,
	            children: o2,
	            tag: r2
	          }, s3;
	        }(p2, i2, a2, l2, u2);
	      i2 = i2 || {}, co(s2), o(i2.model) && function(t2, n2) {
	        const r2 = t2.model && t2.model.prop || "value", s3 = t2.model && t2.model.event || "input";
	        (n2.attrs || (n2.attrs = {}))[r2] = n2.model.value;
	        const i3 = n2.on || (n2.on = {}), c2 = i3[s3], a3 = n2.model.callback;
	        o(c2) ? (e(c2) ? -1 === c2.indexOf(a3) : c2 !== a3) && (i3[s3] = [a3].concat(c2)) : i3[s3] = a3;
	      }(s2.options, i2);
	      const h2 = function(t2, e2, r2) {
	        const s3 = e2.options.props;
	        if (n(s3))
	          return;
	        const i3 = {}, {
	          attrs: c2,
	          props: a3
	        } = t2;
	        if (o(c2) || o(a3))
	          for (const t3 in s3) {
	            const e3 = x(t3);
	            Jt(i3, a3, t3, e3, true) || Jt(i3, c2, t3, e3, false);
	          }
	        return i3;
	      }(i2, s2);
	      if (r(s2.options.functional))
	        return function(n2, r2, s3, i3, c2) {
	          const a3 = n2.options, l3 = {}, u3 = a3.props;
	          if (o(u3))
	            for (const e2 in u3)
	              l3[e2] = qn(e2, u3, r2 || t);
	          else
	            o(s3.attrs) && Pn(l3, s3.attrs), o(s3.props) && Pn(l3, s3.props);
	          const f2 = new jn(s3, l3, c2, i3, n2), d3 = a3.render.call(null, f2._c, f2);
	          if (d3 instanceof it)
	            return En(d3, s3, f2.parent, a3);
	          if (e(d3)) {
	            const t2 = Xt(d3) || [], e2 = new Array(t2.length);
	            for (let n3 = 0; n3 < t2.length; n3++)
	              e2[n3] = En(t2[n3], s3, f2.parent, a3);
	            return e2;
	          }
	        }(s2, h2, i2, a2, l2);
	      const m2 = i2.on;
	      if (i2.on = i2.nativeOn, r(s2.options.abstract)) {
	        const t2 = i2.slot;
	        i2 = {}, t2 && (i2.slot = t2);
	      }
	      !function(t2) {
	        const e2 = t2.hook || (t2.hook = {});
	        for (let t3 = 0; t3 < Nn.length; t3++) {
	          const n2 = Nn[t3], o2 = e2[n2], r2 = Dn[n2];
	          o2 === r2 || o2 && o2._merged || (e2[n2] = o2 ? Rn(r2, o2) : r2);
	        }
	      }(i2);
	      const v2 = In(s2.options) || u2;
	      return new it(`vue-component-${s2.cid}${v2 ? `-${v2}` : ""}`, i2, void 0, void 0, void 0, a2, {
	        Ctor: s2,
	        propsData: h2,
	        listeners: m2,
	        tag: u2,
	        children: l2
	      }, p2);
	    }
	    function Rn(t2, e2) {
	      const n2 = (n3, o2) => {
	        t2(n3, o2), e2(n3, o2);
	      };
	      return n2._merged = true, n2;
	    }
	    let Ln = T;
	    const Fn = L.optionMergeStrategies;
	    function Un(t2, e2) {
	      if (!e2)
	        return t2;
	      let n2, o2, r2;
	      const s2 = nt ? Reflect.ownKeys(e2) : Object.keys(e2);
	      for (let i2 = 0; i2 < s2.length; i2++)
	        n2 = s2[i2], "__ob__" !== n2 && (o2 = t2[n2], r2 = e2[n2], y(t2, n2) ? o2 !== r2 && l(o2) && l(r2) && Un(o2, r2) : kt(t2, n2, r2));
	      return t2;
	    }
	    function Bn(t2, e2, n2) {
	      return n2 ? function() {
	        const o2 = i(e2) ? e2.call(n2, n2) : e2, r2 = i(t2) ? t2.call(n2, n2) : t2;
	        return o2 ? Un(o2, r2) : r2;
	      } : e2 ? t2 ? function() {
	        return Un(i(e2) ? e2.call(this, this) : e2, i(t2) ? t2.call(this, this) : t2);
	      } : e2 : t2;
	    }
	    function Vn(t2, n2) {
	      const o2 = n2 ? t2 ? t2.concat(n2) : e(n2) ? n2 : [n2] : t2;
	      return o2 ? function(t3) {
	        const e2 = [];
	        for (let n3 = 0; n3 < t3.length; n3++)
	          -1 === e2.indexOf(t3[n3]) && e2.push(t3[n3]);
	        return e2;
	      }(o2) : o2;
	    }
	    function zn(t2, e2, n2, o2) {
	      const r2 = Object.create(t2 || null);
	      return e2 ? S(r2, e2) : r2;
	    }
	    Fn.data = function(t2, e2, n2) {
	      return n2 ? Bn(t2, e2, n2) : e2 && "function" != typeof e2 ? t2 : Bn(t2, e2);
	    }, R.forEach((t2) => {
	      Fn[t2] = Vn;
	    }), M.forEach(function(t2) {
	      Fn[t2 + "s"] = zn;
	    }), Fn.watch = function(t2, n2, o2, r2) {
	      if (t2 === J && (t2 = void 0), n2 === J && (n2 = void 0), !n2)
	        return Object.create(t2 || null);
	      if (!t2)
	        return n2;
	      const s2 = {};
	      S(s2, t2);
	      for (const t3 in n2) {
	        let o3 = s2[t3];
	        const r3 = n2[t3];
	        o3 && !e(o3) && (o3 = [o3]), s2[t3] = o3 ? o3.concat(r3) : e(r3) ? r3 : [r3];
	      }
	      return s2;
	    }, Fn.props = Fn.methods = Fn.inject = Fn.computed = function(t2, e2, n2, o2) {
	      if (!t2)
	        return e2;
	      const r2 = /* @__PURE__ */ Object.create(null);
	      return S(r2, t2), e2 && S(r2, e2), r2;
	    }, Fn.provide = Bn;
	    const Hn = function(t2, e2) {
	      return void 0 === e2 ? t2 : e2;
	    };
	    function Wn(t2, n2, o2) {
	      if (i(n2) && (n2 = n2.options), function(t3, n3) {
	        const o3 = t3.props;
	        if (!o3)
	          return;
	        const r3 = {};
	        let s3, i2, c3;
	        if (e(o3))
	          for (s3 = o3.length; s3--; )
	            i2 = o3[s3], "string" == typeof i2 && (c3 = $(i2), r3[c3] = {
	              type: null
	            });
	        else if (l(o3))
	          for (const t4 in o3)
	            i2 = o3[t4], c3 = $(t4), r3[c3] = l(i2) ? i2 : {
	              type: i2
	            };
	        t3.props = r3;
	      }(n2), function(t3, n3) {
	        const o3 = t3.inject;
	        if (!o3)
	          return;
	        const r3 = t3.inject = {};
	        if (e(o3))
	          for (let t4 = 0; t4 < o3.length; t4++)
	            r3[o3[t4]] = {
	              from: o3[t4]
	            };
	        else if (l(o3))
	          for (const t4 in o3) {
	            const e2 = o3[t4];
	            r3[t4] = l(e2) ? S({
	              from: t4
	            }, e2) : {
	              from: e2
	            };
	          }
	      }(n2), function(t3) {
	        const e2 = t3.directives;
	        if (e2)
	          for (const t4 in e2) {
	            const n3 = e2[t4];
	            i(n3) && (e2[t4] = {
	              bind: n3,
	              update: n3
	            });
	          }
	      }(n2), !n2._base && (n2.extends && (t2 = Wn(t2, n2.extends, o2)), n2.mixins))
	        for (let e2 = 0, r3 = n2.mixins.length; e2 < r3; e2++)
	          t2 = Wn(t2, n2.mixins[e2], o2);
	      const r2 = {};
	      let s2;
	      for (s2 in t2)
	        c2(s2);
	      for (s2 in n2)
	        y(t2, s2) || c2(s2);
	      function c2(e2) {
	        const s3 = Fn[e2] || Hn;
	        r2[e2] = s3(t2[e2], n2[e2], o2, e2);
	      }
	      return r2;
	    }
	    function Kn(t2, e2, n2, o2) {
	      if ("string" != typeof n2)
	        return;
	      const r2 = t2[e2];
	      if (y(r2, n2))
	        return r2[n2];
	      const s2 = $(n2);
	      if (y(r2, s2))
	        return r2[s2];
	      const i2 = w(s2);
	      if (y(r2, i2))
	        return r2[i2];
	      return r2[n2] || r2[s2] || r2[i2];
	    }
	    function qn(t2, e2, n2, o2) {
	      const r2 = e2[t2], s2 = !y(n2, t2);
	      let c2 = n2[t2];
	      const a2 = Xn(Boolean, r2.type);
	      if (a2 > -1) {
	        if (s2 && !y(r2, "default"))
	          c2 = false;
	        else if ("" === c2 || c2 === x(t2)) {
	          const t3 = Xn(String, r2.type);
	          (t3 < 0 || a2 < t3) && (c2 = true);
	        }
	      }
	      if (void 0 === c2) {
	        c2 = function(t3, e4, n3) {
	          if (!y(e4, "default"))
	            return;
	          const o3 = e4.default;
	          if (t3 && t3.$options.propsData && void 0 === t3.$options.propsData[n3] && void 0 !== t3._props[n3])
	            return t3._props[n3];
	          return i(o3) && "Function" !== Zn(e4.type) ? o3.call(t3) : o3;
	        }(o2, r2, t2);
	        const e3 = gt;
	        bt(true), Ct(c2), bt(e3);
	      }
	      return c2;
	    }
	    const Gn = /^\s*function (\w+)/;
	    function Zn(t2) {
	      const e2 = t2 && t2.toString().match(Gn);
	      return e2 ? e2[1] : "";
	    }
	    function Jn(t2, e2) {
	      return Zn(t2) === Zn(e2);
	    }
	    function Xn(t2, n2) {
	      if (!e(n2))
	        return Jn(n2, t2) ? 0 : -1;
	      for (let e2 = 0, o2 = n2.length; e2 < o2; e2++)
	        if (Jn(n2[e2], t2))
	          return e2;
	      return -1;
	    }
	    const Qn = {
	      enumerable: true,
	      configurable: true,
	      get: T,
	      set: T
	    };
	    function Yn(t2, e2, n2) {
	      Qn.get = function() {
	        return this[e2][n2];
	      }, Qn.set = function(t3) {
	        this[e2][n2] = t3;
	      }, Object.defineProperty(t2, n2, Qn);
	    }
	    function to(t2) {
	      const n2 = t2.$options;
	      if (n2.props && function(t3, e2) {
	        const n3 = t3.$options.propsData || {}, o2 = t3._props = At({}), r2 = t3.$options._propKeys = [];
	        t3.$parent && bt(false);
	        for (const s2 in e2) {
	          r2.push(s2);
	          xt(o2, s2, qn(s2, e2, n3, t3)), s2 in t3 || Yn(t3, "_props", s2);
	        }
	        bt(true);
	      }(t2, n2.props), function(t3) {
	        const e2 = t3.$options, n3 = e2.setup;
	        if (n3) {
	          const o2 = t3._setupContext = $e(t3);
	          st(t3), pt();
	          const r2 = Pe(n3, null, [t3._props || At({}), o2], t3, "setup");
	          if (ht(), st(), i(r2))
	            e2.render = r2;
	          else if (c(r2))
	            if (t3._setupState = r2, r2.__sfc) {
	              const e3 = t3._setupProxy = {};
	              for (const t4 in r2)
	                "__sfc" !== t4 && Nt(e3, r2, t4);
	            } else
	              for (const e3 in r2)
	                F(e3) || Nt(t3, r2, e3);
	        }
	      }(t2), n2.methods && function(t3, e2) {
	        t3.$options.props;
	        for (const n3 in e2)
	          t3[n3] = "function" != typeof e2[n3] ? T : k(e2[n3], t3);
	      }(t2, n2.methods), n2.data)
	        !function(t3) {
	          let e2 = t3.$options.data;
	          e2 = t3._data = i(e2) ? function(t4, e3) {
	            pt();
	            try {
	              return t4.call(e3, e3);
	            } catch (t5) {
	              return Ee(t5, e3, "data()"), {};
	            } finally {
	              ht();
	            }
	          }(e2, t3) : e2 || {}, l(e2) || (e2 = {});
	          const n3 = Object.keys(e2), o2 = t3.$options.props;
	          t3.$options.methods;
	          let r2 = n3.length;
	          for (; r2--; ) {
	            const e3 = n3[r2];
	            o2 && y(o2, e3) || F(e3) || Yn(t3, "_data", e3);
	          }
	          const s2 = Ct(e2);
	          s2 && s2.vmCount++;
	        }(t2);
	      else {
	        const e2 = Ct(t2._data = {});
	        e2 && e2.vmCount++;
	      }
	      n2.computed && function(t3, e2) {
	        const n3 = t3._computedWatchers = /* @__PURE__ */ Object.create(null), o2 = Y();
	        for (const r2 in e2) {
	          const s2 = e2[r2], c2 = i(s2) ? s2 : s2.get;
	          o2 || (n3[r2] = new cn(t3, c2 || T, T, eo)), r2 in t3 || no(t3, r2, s2);
	        }
	      }(t2, n2.computed), n2.watch && n2.watch !== J && function(t3, n3) {
	        for (const o2 in n3) {
	          const r2 = n3[o2];
	          if (e(r2))
	            for (let e2 = 0; e2 < r2.length; e2++)
	              so(t3, o2, r2[e2]);
	          else
	            so(t3, o2, r2);
	        }
	      }(t2, n2.watch);
	    }
	    const eo = {
	      lazy: true
	    };
	    function no(t2, e2, n2) {
	      const o2 = !Y();
	      i(n2) ? (Qn.get = o2 ? oo(e2) : ro(n2), Qn.set = T) : (Qn.get = n2.get ? o2 && false !== n2.cache ? oo(e2) : ro(n2.get) : T, Qn.set = n2.set || T), Object.defineProperty(t2, e2, Qn);
	    }
	    function oo(t2) {
	      return function() {
	        const e2 = this._computedWatchers && this._computedWatchers[t2];
	        if (e2)
	          return e2.dirty && e2.evaluate(), ft.target && e2.depend(), e2.value;
	      };
	    }
	    function ro(t2) {
	      return function() {
	        return t2.call(this, this);
	      };
	    }
	    function so(t2, e2, n2, o2) {
	      return l(n2) && (o2 = n2, n2 = n2.handler), "string" == typeof n2 && (n2 = t2[n2]), t2.$watch(e2, n2, o2);
	    }
	    let io = 0;
	    function co(t2) {
	      let e2 = t2.options;
	      if (t2.super) {
	        const n2 = co(t2.super);
	        if (n2 !== t2.superOptions) {
	          t2.superOptions = n2;
	          const o2 = function(t3) {
	            let e3;
	            const n3 = t3.options, o3 = t3.sealedOptions;
	            for (const t4 in n3)
	              n3[t4] !== o3[t4] && (e3 || (e3 = {}), e3[t4] = n3[t4]);
	            return e3;
	          }(t2);
	          o2 && S(t2.extendOptions, o2), e2 = t2.options = Wn(n2, t2.extendOptions), e2.name && (e2.components[e2.name] = t2);
	        }
	      }
	      return e2;
	    }
	    function ao(t2) {
	      this._init(t2);
	    }
	    function lo(t2) {
	      t2.cid = 0;
	      let e2 = 1;
	      t2.extend = function(t3) {
	        t3 = t3 || {};
	        const n2 = this, o2 = n2.cid, r2 = t3._Ctor || (t3._Ctor = {});
	        if (r2[o2])
	          return r2[o2];
	        const s2 = In(t3) || In(n2.options), i2 = function(t4) {
	          this._init(t4);
	        };
	        return (i2.prototype = Object.create(n2.prototype)).constructor = i2, i2.cid = e2++, i2.options = Wn(n2.options, t3), i2.super = n2, i2.options.props && function(t4) {
	          const e3 = t4.options.props;
	          for (const n3 in e3)
	            Yn(t4.prototype, "_props", n3);
	        }(i2), i2.options.computed && function(t4) {
	          const e3 = t4.options.computed;
	          for (const n3 in e3)
	            no(t4.prototype, n3, e3[n3]);
	        }(i2), i2.extend = n2.extend, i2.mixin = n2.mixin, i2.use = n2.use, M.forEach(function(t4) {
	          i2[t4] = n2[t4];
	        }), s2 && (i2.options.components[s2] = i2), i2.superOptions = n2.options, i2.extendOptions = t3, i2.sealedOptions = S({}, i2.options), r2[o2] = i2, i2;
	      };
	    }
	    function uo(t2) {
	      return t2 && (In(t2.Ctor.options) || t2.tag);
	    }
	    function fo(t2, n2) {
	      return e(t2) ? t2.indexOf(n2) > -1 : "string" == typeof t2 ? t2.split(",").indexOf(n2) > -1 : (o2 = t2, "[object RegExp]" === a.call(o2) && t2.test(n2));
	      var o2;
	    }
	    function po(t2, e2) {
	      const {
	        cache: n2,
	        keys: o2,
	        _vnode: r2
	      } = t2;
	      for (const t3 in n2) {
	        const s2 = n2[t3];
	        if (s2) {
	          const i2 = s2.name;
	          i2 && !e2(i2) && ho(n2, t3, o2, r2);
	        }
	      }
	    }
	    function ho(t2, e2, n2, o2) {
	      const r2 = t2[e2];
	      !r2 || o2 && r2.tag === o2.tag || r2.componentInstance.$destroy(), t2[e2] = null, _(n2, e2);
	    }
	    !function(e2) {
	      e2.prototype._init = function(e3) {
	        const n2 = this;
	        n2._uid = io++, n2._isVue = true, n2.__v_skip = true, n2._scope = new Ht(true), n2._scope._vm = true, e3 && e3._isComponent ? function(t2, e4) {
	          const n3 = t2.$options = Object.create(t2.constructor.options), o2 = e4._parentVnode;
	          n3.parent = e4.parent, n3._parentVnode = o2;
	          const r2 = o2.componentOptions;
	          n3.propsData = r2.propsData, n3._parentListeners = r2.listeners, n3._renderChildren = r2.children, n3._componentTag = r2.tag, e4.render && (n3.render = e4.render, n3.staticRenderFns = e4.staticRenderFns);
	        }(n2, e3) : n2.$options = Wn(co(n2.constructor), e3 || {}, n2), n2._renderProxy = n2, n2._self = n2, function(t2) {
	          const e4 = t2.$options;
	          let n3 = e4.parent;
	          if (n3 && !e4.abstract) {
	            for (; n3.$options.abstract && n3.$parent; )
	              n3 = n3.$parent;
	            n3.$children.push(t2);
	          }
	          t2.$parent = n3, t2.$root = n3 ? n3.$root : t2, t2.$children = [], t2.$refs = {}, t2._provided = n3 ? n3._provided : /* @__PURE__ */ Object.create(null), t2._watcher = null, t2._inactive = null, t2._directInactive = false, t2._isMounted = false, t2._isDestroyed = false, t2._isBeingDestroyed = false;
	        }(n2), function(t2) {
	          t2._events = /* @__PURE__ */ Object.create(null), t2._hasHookEvent = false;
	          const e4 = t2.$options._parentListeners;
	          e4 && fn(t2, e4);
	        }(n2), function(e4) {
	          e4._vnode = null, e4._staticTrees = null;
	          const n3 = e4.$options, o2 = e4.$vnode = n3._parentVnode, r2 = o2 && o2.context;
	          e4.$slots = me(n3._renderChildren, r2), e4.$scopedSlots = o2 ? ye(e4.$parent, o2.data.scopedSlots, e4.$slots) : t, e4._c = (t2, n4, o3, r3) => Te(e4, t2, n4, o3, r3, false), e4.$createElement = (t2, n4, o3, r3) => Te(e4, t2, n4, o3, r3, true);
	          const s2 = o2 && o2.data;
	          xt(e4, "$attrs", s2 && s2.attrs || t, null, true), xt(e4, "$listeners", n3._parentListeners || t, null, true);
	        }(n2), vn(n2, "beforeCreate", void 0, false), function(t2) {
	          const e4 = Tn(t2.$options.inject, t2);
	          e4 && (bt(false), Object.keys(e4).forEach((n3) => {
	            xt(t2, n3, e4[n3]);
	          }), bt(true));
	        }(n2), to(n2), function(t2) {
	          const e4 = t2.$options.provide;
	          if (e4) {
	            const n3 = i(e4) ? e4.call(t2) : e4;
	            if (!c(n3))
	              return;
	            const o2 = Wt(t2), r2 = nt ? Reflect.ownKeys(n3) : Object.keys(n3);
	            for (let t3 = 0; t3 < r2.length; t3++) {
	              const e5 = r2[t3];
	              Object.defineProperty(o2, e5, Object.getOwnPropertyDescriptor(n3, e5));
	            }
	          }
	        }(n2), vn(n2, "created"), n2.$options.el && n2.$mount(n2.$options.el);
	      };
	    }(ao), function(t2) {
	      const e2 = {
	        get: function() {
	          return this._data;
	        }
	      }, n2 = {
	        get: function() {
	          return this._props;
	        }
	      };
	      Object.defineProperty(t2.prototype, "$data", e2), Object.defineProperty(t2.prototype, "$props", n2), t2.prototype.$set = kt, t2.prototype.$delete = Ot, t2.prototype.$watch = function(t3, e3, n3) {
	        const o2 = this;
	        if (l(e3))
	          return so(o2, t3, e3, n3);
	        (n3 = n3 || {}).user = true;
	        const r2 = new cn(o2, t3, e3, n3);
	        if (n3.immediate) {
	          const t4 = `callback for immediate watcher "${r2.expression}"`;
	          pt(), Pe(e3, o2, [r2.value], o2, t4), ht();
	        }
	        return function() {
	          r2.teardown();
	        };
	      };
	    }(ao), function(t2) {
	      const n2 = /^hook:/;
	      t2.prototype.$on = function(t3, o2) {
	        const r2 = this;
	        if (e(t3))
	          for (let e2 = 0, n3 = t3.length; e2 < n3; e2++)
	            r2.$on(t3[e2], o2);
	        else
	          (r2._events[t3] || (r2._events[t3] = [])).push(o2), n2.test(t3) && (r2._hasHookEvent = true);
	        return r2;
	      }, t2.prototype.$once = function(t3, e2) {
	        const n3 = this;
	        function o2() {
	          n3.$off(t3, o2), e2.apply(n3, arguments);
	        }
	        return o2.fn = e2, n3.$on(t3, o2), n3;
	      }, t2.prototype.$off = function(t3, n3) {
	        const o2 = this;
	        if (!arguments.length)
	          return o2._events = /* @__PURE__ */ Object.create(null), o2;
	        if (e(t3)) {
	          for (let e2 = 0, r3 = t3.length; e2 < r3; e2++)
	            o2.$off(t3[e2], n3);
	          return o2;
	        }
	        const r2 = o2._events[t3];
	        if (!r2)
	          return o2;
	        if (!n3)
	          return o2._events[t3] = null, o2;
	        let s2, i2 = r2.length;
	        for (; i2--; )
	          if (s2 = r2[i2], s2 === n3 || s2.fn === n3) {
	            r2.splice(i2, 1);
	            break;
	          }
	        return o2;
	      }, t2.prototype.$emit = function(t3) {
	        const e2 = this;
	        let n3 = e2._events[t3];
	        if (n3) {
	          n3 = n3.length > 1 ? O(n3) : n3;
	          const o2 = O(arguments, 1), r2 = `event handler for "${t3}"`;
	          for (let t4 = 0, s2 = n3.length; t4 < s2; t4++)
	            Pe(n3[t4], e2, o2, e2, r2);
	        }
	        return e2;
	      };
	    }(ao), function(t2) {
	      t2.prototype._update = function(t3, e2) {
	        const n2 = this, o2 = n2.$el, r2 = n2._vnode, s2 = pn(n2);
	        n2._vnode = t3, n2.$el = r2 ? n2.__patch__(r2, t3) : n2.__patch__(n2.$el, t3, e2, false), s2(), o2 && (o2.__vue__ = null), n2.$el && (n2.$el.__vue__ = n2);
	        let i2 = n2;
	        for (; i2 && i2.$vnode && i2.$parent && i2.$vnode === i2.$parent._vnode; )
	          i2.$parent.$el = i2.$el, i2 = i2.$parent;
	      }, t2.prototype.$forceUpdate = function() {
	        const t3 = this;
	        t3._watcher && t3._watcher.update();
	      }, t2.prototype.$destroy = function() {
	        const t3 = this;
	        if (t3._isBeingDestroyed)
	          return;
	        vn(t3, "beforeDestroy"), t3._isBeingDestroyed = true;
	        const e2 = t3.$parent;
	        !e2 || e2._isBeingDestroyed || t3.$options.abstract || _(e2.$children, t3), t3._scope.stop(), t3._data.__ob__ && t3._data.__ob__.vmCount--, t3._isDestroyed = true, t3.__patch__(t3._vnode, null), vn(t3, "destroyed"), t3.$off(), t3.$el && (t3.$el.__vue__ = null), t3.$vnode && (t3.$vnode.parent = null);
	      };
	    }(ao), function(t2) {
	      he(t2.prototype), t2.prototype.$nextTick = function(t3) {
	        return Ue(t3, this);
	      }, t2.prototype._render = function() {
	        const t3 = this, {
	          render: n2,
	          _parentVnode: o2
	        } = t3.$options;
	        let r2;
	        o2 && t3._isMounted && (t3.$scopedSlots = ye(t3.$parent, o2.data.scopedSlots, t3.$slots, t3.$scopedSlots), t3._slotsProxy && xe(t3._slotsProxy, t3.$scopedSlots)), t3.$vnode = o2;
	        try {
	          st(t3), Oe = t3, r2 = n2.call(t3._renderProxy, t3.$createElement);
	        } catch (e2) {
	          Ee(e2, t3, "render"), r2 = t3._vnode;
	        } finally {
	          Oe = null, st();
	        }
	        return e(r2) && 1 === r2.length && (r2 = r2[0]), r2 instanceof it || (r2 = ct()), r2.parent = o2, r2;
	      };
	    }(ao);
	    const mo = [String, RegExp, Array];
	    var _o = {
	      KeepAlive: {
	        name: "keep-alive",
	        abstract: true,
	        props: {
	          include: mo,
	          exclude: mo,
	          max: [String, Number]
	        },
	        methods: {
	          cacheVNode() {
	            const {
	              cache: t2,
	              keys: e2,
	              vnodeToCache: n2,
	              keyToCache: o2
	            } = this;
	            if (n2) {
	              const {
	                tag: r2,
	                componentInstance: s2,
	                componentOptions: i2
	              } = n2;
	              t2[o2] = {
	                name: uo(i2),
	                tag: r2,
	                componentInstance: s2
	              }, e2.push(o2), this.max && e2.length > parseInt(this.max) && ho(t2, e2[0], e2, this._vnode), this.vnodeToCache = null;
	            }
	          }
	        },
	        created() {
	          this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
	        },
	        destroyed() {
	          for (const t2 in this.cache)
	            ho(this.cache, t2, this.keys);
	        },
	        mounted() {
	          this.cacheVNode(), this.$watch("include", (t2) => {
	            po(this, (e2) => fo(t2, e2));
	          }), this.$watch("exclude", (t2) => {
	            po(this, (e2) => !fo(t2, e2));
	          });
	        },
	        updated() {
	          this.cacheVNode();
	        },
	        render() {
	          const t2 = this.$slots.default, e2 = Ae(t2), n2 = e2 && e2.componentOptions;
	          if (n2) {
	            const t3 = uo(n2), {
	              include: o2,
	              exclude: r2
	            } = this;
	            if (o2 && (!t3 || !fo(o2, t3)) || r2 && t3 && fo(r2, t3))
	              return e2;
	            const {
	              cache: s2,
	              keys: i2
	            } = this, c2 = null == e2.key ? n2.Ctor.cid + (n2.tag ? `::${n2.tag}` : "") : e2.key;
	            s2[c2] ? (e2.componentInstance = s2[c2].componentInstance, _(i2, c2), i2.push(c2)) : (this.vnodeToCache = e2, this.keyToCache = c2), e2.data.keepAlive = true;
	          }
	          return e2 || t2 && t2[0];
	        }
	      }
	    };
	    !function(t2) {
	      const e2 = {
	        get: () => L
	      };
	      Object.defineProperty(t2, "config", e2), t2.util = {
	        warn: Ln,
	        extend: S,
	        mergeOptions: Wn,
	        defineReactive: xt
	      }, t2.set = kt, t2.delete = Ot, t2.nextTick = Ue, t2.observable = (t3) => (Ct(t3), t3), t2.options = /* @__PURE__ */ Object.create(null), M.forEach((e3) => {
	        t2.options[e3 + "s"] = /* @__PURE__ */ Object.create(null);
	      }), t2.options._base = t2, S(t2.options.components, _o), function(t3) {
	        t3.use = function(t4) {
	          const e3 = this._installedPlugins || (this._installedPlugins = []);
	          if (e3.indexOf(t4) > -1)
	            return this;
	          const n2 = O(arguments, 1);
	          return n2.unshift(this), i(t4.install) ? t4.install.apply(t4, n2) : i(t4) && t4.apply(null, n2), e3.push(t4), this;
	        };
	      }(t2), function(t3) {
	        t3.mixin = function(t4) {
	          return this.options = Wn(this.options, t4), this;
	        };
	      }(t2), lo(t2), function(t3) {
	        M.forEach((e3) => {
	          t3[e3] = function(t4, n2) {
	            return n2 ? ("component" === e3 && l(n2) && (n2.name = n2.name || t4, n2 = this.options._base.extend(n2)), "directive" === e3 && i(n2) && (n2 = {
	              bind: n2,
	              update: n2
	            }), this.options[e3 + "s"][t4] = n2, n2) : this.options[e3 + "s"][t4];
	          };
	        });
	      }(t2);
	    }(ao), Object.defineProperty(ao.prototype, "$isServer", {
	      get: Y
	    }), Object.defineProperty(ao.prototype, "$ssrContext", {
	      get() {
	        return this.$vnode && this.$vnode.ssrContext;
	      }
	    }), Object.defineProperty(ao, "FunctionalRenderContext", {
	      value: jn
	    }), ao.version = "2.7.10";
	    const vo = h("style,class"), yo = h("input,textarea,option,select,progress"), go = h("contenteditable,draggable,spellcheck"), bo = h("events,caret,typing,plaintext-only"), $o = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), wo = "http://www.w3.org/1999/xlink", Co = (t2) => ":" === t2.charAt(5) && "xlink" === t2.slice(0, 5), xo = (t2) => Co(t2) ? t2.slice(6, t2.length) : "", ko = (t2) => null == t2 || false === t2;
	    function Oo(t2) {
	      let e2 = t2.data, n2 = t2, r2 = t2;
	      for (; o(r2.componentInstance); )
	        r2 = r2.componentInstance._vnode, r2 && r2.data && (e2 = So(r2.data, e2));
	      for (; o(n2 = n2.parent); )
	        n2 && n2.data && (e2 = So(e2, n2.data));
	      return function(t3, e3) {
	        if (o(t3) || o(e3))
	          return Ao(t3, To(e3));
	        return "";
	      }(e2.staticClass, e2.class);
	    }
	    function So(t2, e2) {
	      return {
	        staticClass: Ao(t2.staticClass, e2.staticClass),
	        class: o(t2.class) ? [t2.class, e2.class] : e2.class
	      };
	    }
	    function Ao(t2, e2) {
	      return t2 ? e2 ? t2 + " " + e2 : t2 : e2 || "";
	    }
	    function To(t2) {
	      return Array.isArray(t2) ? function(t3) {
	        let e2, n2 = "";
	        for (let r2 = 0, s2 = t3.length; r2 < s2; r2++)
	          o(e2 = To(t3[r2])) && "" !== e2 && (n2 && (n2 += " "), n2 += e2);
	        return n2;
	      }(t2) : c(t2) ? function(t3) {
	        let e2 = "";
	        for (const n2 in t3)
	          t3[n2] && (e2 && (e2 += " "), e2 += n2);
	        return e2;
	      }(t2) : "string" == typeof t2 ? t2 : "";
	    }
	    const jo = {
	      svg: "http://www.w3.org/2000/svg",
	      math: "http://www.w3.org/1998/Math/MathML"
	    }, Eo = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), Po = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true), Io = (t2) => Eo(t2) || Po(t2);
	    const No = h("text,number,password,search,email,tel,url");
	    var Mo = Object.freeze({
	      __proto__: null,
	      createElement: function(t2, e2) {
	        const n2 = document.createElement(t2);
	        return "select" !== t2 || e2.data && e2.data.attrs && void 0 !== e2.data.attrs.multiple && n2.setAttribute("multiple", "multiple"), n2;
	      },
	      createElementNS: function(t2, e2) {
	        return document.createElementNS(jo[t2], e2);
	      },
	      createTextNode: function(t2) {
	        return document.createTextNode(t2);
	      },
	      createComment: function(t2) {
	        return document.createComment(t2);
	      },
	      insertBefore: function(t2, e2, n2) {
	        t2.insertBefore(e2, n2);
	      },
	      removeChild: function(t2, e2) {
	        t2.removeChild(e2);
	      },
	      appendChild: function(t2, e2) {
	        t2.appendChild(e2);
	      },
	      parentNode: function(t2) {
	        return t2.parentNode;
	      },
	      nextSibling: function(t2) {
	        return t2.nextSibling;
	      },
	      tagName: function(t2) {
	        return t2.tagName;
	      },
	      setTextContent: function(t2, e2) {
	        t2.textContent = e2;
	      },
	      setStyleScope: function(t2, e2) {
	        t2.setAttribute(e2, "");
	      }
	    }), Ro = {
	      create(t2, e2) {
	        Lo(e2);
	      },
	      update(t2, e2) {
	        t2.data.ref !== e2.data.ref && (Lo(t2, true), Lo(e2));
	      },
	      destroy(t2) {
	        Lo(t2, true);
	      }
	    };
	    function Lo(t2, n2) {
	      const r2 = t2.data.ref;
	      if (!o(r2))
	        return;
	      const s2 = t2.context, c2 = t2.componentInstance || t2.elm, a2 = n2 ? null : c2, l2 = n2 ? void 0 : c2;
	      if (i(r2))
	        return void Pe(r2, s2, [a2], s2, "template ref function");
	      const u2 = t2.data.refInFor, f2 = "string" == typeof r2 || "number" == typeof r2, d2 = It(r2), p2 = s2.$refs;
	      if (f2 || d2) {
	        if (u2) {
	          const t3 = f2 ? p2[r2] : r2.value;
	          n2 ? e(t3) && _(t3, c2) : e(t3) ? t3.includes(c2) || t3.push(c2) : f2 ? (p2[r2] = [c2], Fo(s2, r2, p2[r2])) : r2.value = [c2];
	        } else if (f2) {
	          if (n2 && p2[r2] !== c2)
	            return;
	          p2[r2] = l2, Fo(s2, r2, a2);
	        } else if (d2) {
	          if (n2 && r2.value !== c2)
	            return;
	          r2.value = a2;
	        }
	      }
	    }
	    function Fo({
	      _setupState: t2
	    }, e2, n2) {
	      t2 && y(t2, e2) && (It(t2[e2]) ? t2[e2].value = n2 : t2[e2] = n2);
	    }
	    const Uo = new it("", {}, []), Bo = ["create", "activate", "update", "remove", "destroy"];
	    function Vo(t2, e2) {
	      return t2.key === e2.key && t2.asyncFactory === e2.asyncFactory && (t2.tag === e2.tag && t2.isComment === e2.isComment && o(t2.data) === o(e2.data) && function(t3, e3) {
	        if ("input" !== t3.tag)
	          return true;
	        let n2;
	        const r2 = o(n2 = t3.data) && o(n2 = n2.attrs) && n2.type, s2 = o(n2 = e3.data) && o(n2 = n2.attrs) && n2.type;
	        return r2 === s2 || No(r2) && No(s2);
	      }(t2, e2) || r(t2.isAsyncPlaceholder) && n(e2.asyncFactory.error));
	    }
	    function zo(t2, e2, n2) {
	      let r2, s2;
	      const i2 = {};
	      for (r2 = e2; r2 <= n2; ++r2)
	        s2 = t2[r2].key, o(s2) && (i2[s2] = r2);
	      return i2;
	    }
	    var Ho = {
	      create: Wo,
	      update: Wo,
	      destroy: function(t2) {
	        Wo(t2, Uo);
	      }
	    };
	    function Wo(t2, e2) {
	      (t2.data.directives || e2.data.directives) && function(t3, e3) {
	        const n2 = t3 === Uo, o2 = e3 === Uo, r2 = qo(t3.data.directives, t3.context), s2 = qo(e3.data.directives, e3.context), i2 = [], c2 = [];
	        let a2, l2, u2;
	        for (a2 in s2)
	          l2 = r2[a2], u2 = s2[a2], l2 ? (u2.oldValue = l2.value, u2.oldArg = l2.arg, Zo(u2, "update", e3, t3), u2.def && u2.def.componentUpdated && c2.push(u2)) : (Zo(u2, "bind", e3, t3), u2.def && u2.def.inserted && i2.push(u2));
	        if (i2.length) {
	          const o3 = () => {
	            for (let n3 = 0; n3 < i2.length; n3++)
	              Zo(i2[n3], "inserted", e3, t3);
	          };
	          n2 ? Zt(e3, "insert", o3) : o3();
	        }
	        c2.length && Zt(e3, "postpatch", () => {
	          for (let n3 = 0; n3 < c2.length; n3++)
	            Zo(c2[n3], "componentUpdated", e3, t3);
	        });
	        if (!n2)
	          for (a2 in r2)
	            s2[a2] || Zo(r2[a2], "unbind", t3, t3, o2);
	      }(t2, e2);
	    }
	    const Ko = /* @__PURE__ */ Object.create(null);
	    function qo(t2, e2) {
	      const n2 = /* @__PURE__ */ Object.create(null);
	      if (!t2)
	        return n2;
	      let o2, r2;
	      for (o2 = 0; o2 < t2.length; o2++) {
	        if (r2 = t2[o2], r2.modifiers || (r2.modifiers = Ko), n2[Go(r2)] = r2, e2._setupState && e2._setupState.__sfc) {
	          const t3 = r2.def || Kn(e2, "_setupState", "v-" + r2.name);
	          r2.def = "function" == typeof t3 ? {
	            bind: t3,
	            update: t3
	          } : t3;
	        }
	        r2.def = r2.def || Kn(e2.$options, "directives", r2.name);
	      }
	      return n2;
	    }
	    function Go(t2) {
	      return t2.rawName || `${t2.name}.${Object.keys(t2.modifiers || {}).join(".")}`;
	    }
	    function Zo(t2, e2, n2, o2, r2) {
	      const s2 = t2.def && t2.def[e2];
	      if (s2)
	        try {
	          s2(n2.elm, t2, n2, o2, r2);
	        } catch (o3) {
	          Ee(o3, n2.context, `directive ${t2.name} ${e2} hook`);
	        }
	    }
	    var Jo = [Ro, Ho];
	    function Xo(t2, e2) {
	      const s2 = e2.componentOptions;
	      if (o(s2) && false === s2.Ctor.options.inheritAttrs)
	        return;
	      if (n(t2.data.attrs) && n(e2.data.attrs))
	        return;
	      let i2, c2, a2;
	      const l2 = e2.elm, u2 = t2.data.attrs || {};
	      let f2 = e2.data.attrs || {};
	      for (i2 in (o(f2.__ob__) || r(f2._v_attr_proxy)) && (f2 = e2.data.attrs = S({}, f2)), f2)
	        c2 = f2[i2], a2 = u2[i2], a2 !== c2 && Qo(l2, i2, c2, e2.data.pre);
	      for (i2 in u2)
	        n(f2[i2]) && (Co(i2) ? l2.removeAttributeNS(wo, xo(i2)) : go(i2) || l2.removeAttribute(i2));
	    }
	    function Qo(t2, e2, n2, o2) {
	      o2 || t2.tagName.indexOf("-") > -1 ? Yo(t2, e2, n2) : $o(e2) ? ko(n2) ? t2.removeAttribute(e2) : (n2 = "allowfullscreen" === e2 && "EMBED" === t2.tagName ? "true" : e2, t2.setAttribute(e2, n2)) : go(e2) ? t2.setAttribute(e2, ((t3, e3) => ko(e3) || "false" === e3 ? "false" : "contenteditable" === t3 && bo(e3) ? e3 : "true")(e2, n2)) : Co(e2) ? ko(n2) ? t2.removeAttributeNS(wo, xo(e2)) : t2.setAttributeNS(wo, e2, n2) : Yo(t2, e2, n2);
	    }
	    function Yo(t2, e2, n2) {
	      if (ko(n2))
	        t2.removeAttribute(e2);
	      else {
	        t2.setAttribute(e2, n2);
	      }
	    }
	    var tr = {
	      create: Xo,
	      update: Xo
	    };
	    function er(t2, e2) {
	      const r2 = e2.elm, s2 = e2.data, i2 = t2.data;
	      if (n(s2.staticClass) && n(s2.class) && (n(i2) || n(i2.staticClass) && n(i2.class)))
	        return;
	      let c2 = Oo(e2);
	      const a2 = r2._transitionClasses;
	      o(a2) && (c2 = Ao(c2, To(a2))), c2 !== r2._prevClass && (r2.setAttribute("class", c2), r2._prevClass = c2);
	    }
	    var nr = {
	      create: er,
	      update: er
	    };
	    let or;
	    function rr(t2, e2, n2) {
	      const o2 = or;
	      return function r2() {
	        const s2 = e2.apply(null, arguments);
	        null !== s2 && cr(t2, r2, n2, o2);
	      };
	    }
	    const sr = Ne && !(Z );
	    function ir(t2, e2, n2, o2) {
	      if (sr) {
	        const t3 = xn, n3 = e2;
	        e2 = n3._wrapper = function(e3) {
	          if (e3.target === e3.currentTarget || e3.timeStamp >= t3 || e3.timeStamp <= 0 || e3.target.ownerDocument !== document)
	            return n3.apply(this, arguments);
	        };
	      }
	      or.addEventListener(t2, e2, n2);
	    }
	    function cr(t2, e2, n2, o2) {
	      (o2 || or).removeEventListener(t2, e2._wrapper || e2, n2);
	    }
	    function ar(t2, e2) {
	      if (n(t2.data.on) && n(e2.data.on))
	        return;
	      const r2 = e2.data.on || {}, s2 = t2.data.on || {};
	      or = e2.elm || t2.elm, function(t3) {
	        if (o(t3.__r)) {
	          const e3 = "input";
	          t3[e3] = [].concat(t3.__r, t3[e3] || []), delete t3.__r;
	        }
	        o(t3.__c) && (t3.change = [].concat(t3.__c, t3.change || []), delete t3.__c);
	      }(r2), Gt(r2, s2, ir, cr, rr, e2.context), or = void 0;
	    }
	    var lr = {
	      create: ar,
	      update: ar,
	      destroy: (t2) => ar(t2, Uo)
	    };
	    let ur;
	    function fr(t2, e2) {
	      if (n(t2.data.domProps) && n(e2.data.domProps))
	        return;
	      let s2, i2;
	      const c2 = e2.elm, a2 = t2.data.domProps || {};
	      let l2 = e2.data.domProps || {};
	      for (s2 in (o(l2.__ob__) || r(l2._v_attr_proxy)) && (l2 = e2.data.domProps = S({}, l2)), a2)
	        s2 in l2 || (c2[s2] = "");
	      for (s2 in l2) {
	        if (i2 = l2[s2], "textContent" === s2 || "innerHTML" === s2) {
	          if (e2.children && (e2.children.length = 0), i2 === a2[s2])
	            continue;
	          1 === c2.childNodes.length && c2.removeChild(c2.childNodes[0]);
	        }
	        if ("value" === s2 && "PROGRESS" !== c2.tagName) {
	          c2._value = i2;
	          const t3 = n(i2) ? "" : String(i2);
	          dr(c2, t3) && (c2.value = t3);
	        } else if ("innerHTML" === s2 && Po(c2.tagName) && n(c2.innerHTML)) {
	          ur = ur || document.createElement("div"), ur.innerHTML = `<svg>${i2}</svg>`;
	          const t3 = ur.firstChild;
	          for (; c2.firstChild; )
	            c2.removeChild(c2.firstChild);
	          for (; t3.firstChild; )
	            c2.appendChild(t3.firstChild);
	        } else if (i2 !== a2[s2])
	          try {
	            c2[s2] = i2;
	          } catch (t3) {
	          }
	      }
	    }
	    function dr(t2, e2) {
	      return !t2.composing && ("OPTION" === t2.tagName || function(t3, e3) {
	        let n2 = true;
	        try {
	          n2 = document.activeElement !== t3;
	        } catch (t4) {
	        }
	        return n2 && t3.value !== e3;
	      }(t2, e2) || function(t3, e3) {
	        const n2 = t3.value, r2 = t3._vModifiers;
	        if (o(r2)) {
	          if (r2.number)
	            return p(n2) !== p(e3);
	          if (r2.trim)
	            return n2.trim() !== e3.trim();
	        }
	        return n2 !== e3;
	      }(t2, e2));
	    }
	    var pr = {
	      create: fr,
	      update: fr
	    };
	    const hr = g(function(t2) {
	      const e2 = {}, n2 = /:(.+)/;
	      return t2.split(/;(?![^(]*\))/g).forEach(function(t3) {
	        if (t3) {
	          const o2 = t3.split(n2);
	          o2.length > 1 && (e2[o2[0].trim()] = o2[1].trim());
	        }
	      }), e2;
	    });
	    function mr(t2) {
	      const e2 = _r(t2.style);
	      return t2.staticStyle ? S(t2.staticStyle, e2) : e2;
	    }
	    function _r(t2) {
	      return Array.isArray(t2) ? A(t2) : "string" == typeof t2 ? hr(t2) : t2;
	    }
	    const vr = /^--/, yr = /\s*!important$/, gr = (t2, e2, n2) => {
	      if (vr.test(e2))
	        t2.style.setProperty(e2, n2);
	      else if (yr.test(n2))
	        t2.style.setProperty(x(e2), n2.replace(yr, ""), "important");
	      else {
	        const o2 = wr(e2);
	        if (Array.isArray(n2))
	          for (let e3 = 0, r2 = n2.length; e3 < r2; e3++)
	            t2.style[o2] = n2[e3];
	        else
	          t2.style[o2] = n2;
	      }
	    }, br = ["Webkit", "Moz", "ms"];
	    let $r;
	    const wr = g(function(t2) {
	      if ($r = $r || document.createElement("div").style, "filter" !== (t2 = $(t2)) && t2 in $r)
	        return t2;
	      const e2 = t2.charAt(0).toUpperCase() + t2.slice(1);
	      for (let t3 = 0; t3 < br.length; t3++) {
	        const n2 = br[t3] + e2;
	        if (n2 in $r)
	          return n2;
	      }
	    });
	    function Cr(t2, e2) {
	      const r2 = e2.data, s2 = t2.data;
	      if (n(r2.staticStyle) && n(r2.style) && n(s2.staticStyle) && n(s2.style))
	        return;
	      let i2, c2;
	      const a2 = e2.elm, l2 = s2.staticStyle, u2 = s2.normalizedStyle || s2.style || {}, f2 = l2 || u2, d2 = _r(e2.data.style) || {};
	      e2.data.normalizedStyle = o(d2.__ob__) ? S({}, d2) : d2;
	      const p2 = function(t3, e3) {
	        const n2 = {};
	        let o2;
	        if (e3) {
	          let e4 = t3;
	          for (; e4.componentInstance; )
	            e4 = e4.componentInstance._vnode, e4 && e4.data && (o2 = mr(e4.data)) && S(n2, o2);
	        }
	        (o2 = mr(t3.data)) && S(n2, o2);
	        let r3 = t3;
	        for (; r3 = r3.parent; )
	          r3.data && (o2 = mr(r3.data)) && S(n2, o2);
	        return n2;
	      }(e2, true);
	      for (c2 in f2)
	        n(p2[c2]) && gr(a2, c2, "");
	      for (c2 in p2)
	        i2 = p2[c2], i2 !== f2[c2] && gr(a2, c2, null == i2 ? "" : i2);
	    }
	    var xr = {
	      create: Cr,
	      update: Cr
	    };
	    const kr = /\s+/;
	    function Or(t2, e2) {
	      if (e2 && (e2 = e2.trim()))
	        if (t2.classList)
	          e2.indexOf(" ") > -1 ? e2.split(kr).forEach((e3) => t2.classList.add(e3)) : t2.classList.add(e2);
	        else {
	          const n2 = ` ${t2.getAttribute("class") || ""} `;
	          n2.indexOf(" " + e2 + " ") < 0 && t2.setAttribute("class", (n2 + e2).trim());
	        }
	    }
	    function Sr(t2, e2) {
	      if (e2 && (e2 = e2.trim()))
	        if (t2.classList)
	          e2.indexOf(" ") > -1 ? e2.split(kr).forEach((e3) => t2.classList.remove(e3)) : t2.classList.remove(e2), t2.classList.length || t2.removeAttribute("class");
	        else {
	          let n2 = ` ${t2.getAttribute("class") || ""} `;
	          const o2 = " " + e2 + " ";
	          for (; n2.indexOf(o2) >= 0; )
	            n2 = n2.replace(o2, " ");
	          n2 = n2.trim(), n2 ? t2.setAttribute("class", n2) : t2.removeAttribute("class");
	        }
	    }
	    function Ar(t2) {
	      if (t2) {
	        if ("object" == typeof t2) {
	          const e2 = {};
	          return false !== t2.css && S(e2, Tr(t2.name || "v")), S(e2, t2), e2;
	        }
	        return "string" == typeof t2 ? Tr(t2) : void 0;
	      }
	    }
	    const Tr = g((t2) => ({
	      enterClass: `${t2}-enter`,
	      enterToClass: `${t2}-enter-to`,
	      enterActiveClass: `${t2}-enter-active`,
	      leaveClass: `${t2}-leave`,
	      leaveToClass: `${t2}-leave-to`,
	      leaveActiveClass: `${t2}-leave-active`
	    }));
	    let Er = "transition", Pr = "transitionend", Ir = "animation", Dr = "animationend";
	    const Nr = (t2) => t2();
	    function Mr(t2) {
	      Nr(() => {
	        Nr(t2);
	      });
	    }
	    function Rr(t2, e2) {
	      const n2 = t2._transitionClasses || (t2._transitionClasses = []);
	      n2.indexOf(e2) < 0 && (n2.push(e2), Or(t2, e2));
	    }
	    function Lr(t2, e2) {
	      t2._transitionClasses && _(t2._transitionClasses, e2), Sr(t2, e2);
	    }
	    function Fr(t2, e2, n2) {
	      const {
	        type: o2,
	        timeout: r2,
	        propCount: s2
	      } = Br(t2, e2);
	      if (!o2)
	        return n2();
	      const i2 = "transition" === o2 ? Pr : Dr;
	      let c2 = 0;
	      const a2 = () => {
	        t2.removeEventListener(i2, l2), n2();
	      }, l2 = (e3) => {
	        e3.target === t2 && ++c2 >= s2 && a2();
	      };
	      setTimeout(() => {
	        c2 < s2 && a2();
	      }, r2 + 1), t2.addEventListener(i2, l2);
	    }
	    const Ur = /\b(transform|all)(,|$)/;
	    function Br(t2, e2) {
	      const n2 = window.getComputedStyle(t2), o2 = (n2[Er + "Delay"] || "").split(", "), r2 = (n2[Er + "Duration"] || "").split(", "), s2 = Vr(o2, r2), i2 = (n2[Ir + "Delay"] || "").split(", "), c2 = (n2[Ir + "Duration"] || "").split(", "), a2 = Vr(i2, c2);
	      let l2, u2 = 0, f2 = 0;
	      "transition" === e2 ? s2 > 0 && (l2 = "transition", u2 = s2, f2 = r2.length) : "animation" === e2 ? a2 > 0 && (l2 = "animation", u2 = a2, f2 = c2.length) : (u2 = Math.max(s2, a2), l2 = u2 > 0 ? s2 > a2 ? "transition" : "animation" : null, f2 = l2 ? "transition" === l2 ? r2.length : c2.length : 0);
	      return {
	        type: l2,
	        timeout: u2,
	        propCount: f2,
	        hasTransform: "transition" === l2 && Ur.test(n2[Er + "Property"])
	      };
	    }
	    function Vr(t2, e2) {
	      for (; t2.length < e2.length; )
	        t2 = t2.concat(t2);
	      return Math.max.apply(null, e2.map((e3, n2) => zr(e3) + zr(t2[n2])));
	    }
	    function zr(t2) {
	      return 1e3 * Number(t2.slice(0, -1).replace(",", "."));
	    }
	    function Hr(t2, e2) {
	      const r2 = t2.elm;
	      o(r2._leaveCb) && (r2._leaveCb.cancelled = true, r2._leaveCb());
	      const s2 = Ar(t2.data.transition);
	      if (n(s2))
	        return;
	      if (o(r2._enterCb) || 1 !== r2.nodeType)
	        return;
	      const {
	        css: a2,
	        type: l2,
	        enterClass: u2,
	        enterToClass: f2,
	        enterActiveClass: d2,
	        appearClass: h2,
	        appearToClass: m2,
	        appearActiveClass: _2,
	        beforeEnter: v2,
	        enter: y2,
	        afterEnter: g2,
	        enterCancelled: b2,
	        beforeAppear: $2,
	        appear: w2,
	        afterAppear: C2,
	        appearCancelled: x2,
	        duration: k2
	      } = s2;
	      let O2 = dn, S2 = dn.$vnode;
	      for (; S2 && S2.parent; )
	        O2 = S2.context, S2 = S2.parent;
	      const A2 = !O2._isMounted || !t2.isRootInsert;
	      if (A2 && !w2 && "" !== w2)
	        return;
	      const T2 = A2 && h2 ? h2 : u2, j2 = A2 && _2 ? _2 : d2, E2 = A2 && m2 ? m2 : f2, P2 = A2 && $2 || v2, I2 = A2 && i(w2) ? w2 : y2, N2 = A2 && C2 || g2, M2 = A2 && x2 || b2, R2 = p(c(k2) ? k2.enter : k2), L2 = false !== a2 && !K, F2 = qr(I2), U2 = r2._enterCb = D(() => {
	        L2 && (Lr(r2, E2), Lr(r2, j2)), U2.cancelled ? (L2 && Lr(r2, T2), M2 && M2(r2)) : N2 && N2(r2), r2._enterCb = null;
	      });
	      t2.data.show || Zt(t2, "insert", () => {
	        const e3 = r2.parentNode, n2 = e3 && e3._pending && e3._pending[t2.key];
	        n2 && n2.tag === t2.tag && n2.elm._leaveCb && n2.elm._leaveCb(), I2 && I2(r2, U2);
	      }), P2 && P2(r2), L2 && (Rr(r2, T2), Rr(r2, j2), Mr(() => {
	        Lr(r2, T2), U2.cancelled || (Rr(r2, E2), F2 || (Kr(R2) ? setTimeout(U2, R2) : Fr(r2, l2, U2)));
	      })), t2.data.show && (e2 && e2(), I2 && I2(r2, U2)), L2 || F2 || U2();
	    }
	    function Wr(t2, e2) {
	      const r2 = t2.elm;
	      o(r2._enterCb) && (r2._enterCb.cancelled = true, r2._enterCb());
	      const s2 = Ar(t2.data.transition);
	      if (n(s2) || 1 !== r2.nodeType)
	        return e2();
	      if (o(r2._leaveCb))
	        return;
	      const {
	        css: i2,
	        type: a2,
	        leaveClass: l2,
	        leaveToClass: u2,
	        leaveActiveClass: f2,
	        beforeLeave: d2,
	        leave: h2,
	        afterLeave: m2,
	        leaveCancelled: _2,
	        delayLeave: v2,
	        duration: y2
	      } = s2, g2 = false !== i2 && !K, b2 = qr(h2), $2 = p(c(y2) ? y2.leave : y2), w2 = r2._leaveCb = D(() => {
	        r2.parentNode && r2.parentNode._pending && (r2.parentNode._pending[t2.key] = null), g2 && (Lr(r2, u2), Lr(r2, f2)), w2.cancelled ? (g2 && Lr(r2, l2), _2 && _2(r2)) : (e2(), m2 && m2(r2)), r2._leaveCb = null;
	      });
	      function C2() {
	        w2.cancelled || (!t2.data.show && r2.parentNode && ((r2.parentNode._pending || (r2.parentNode._pending = {}))[t2.key] = t2), d2 && d2(r2), g2 && (Rr(r2, l2), Rr(r2, f2), Mr(() => {
	          Lr(r2, l2), w2.cancelled || (Rr(r2, u2), b2 || (Kr($2) ? setTimeout(w2, $2) : Fr(r2, a2, w2)));
	        })), h2 && h2(r2, w2), g2 || b2 || w2());
	      }
	      v2 ? v2(C2) : C2();
	    }
	    function Kr(t2) {
	      return "number" == typeof t2 && !isNaN(t2);
	    }
	    function qr(t2) {
	      if (n(t2))
	        return false;
	      const e2 = t2.fns;
	      return o(e2) ? qr(Array.isArray(e2) ? e2[0] : e2) : (t2._length || t2.length) > 1;
	    }
	    (function(t2) {
	      let i2, c2;
	      const a2 = {}, {
	        modules: l2,
	        nodeOps: u2
	      } = t2;
	      for (i2 = 0; i2 < Bo.length; ++i2)
	        for (a2[Bo[i2]] = [], c2 = 0; c2 < l2.length; ++c2)
	          o(l2[c2][Bo[i2]]) && a2[Bo[i2]].push(l2[c2][Bo[i2]]);
	      function f2(t3) {
	        const e2 = u2.parentNode(t3);
	        o(e2) && u2.removeChild(e2, t3);
	      }
	      function d2(t3, e2, n2, s2, i3, c3, l3) {
	        if (o(t3.elm) && o(c3) && (t3 = c3[l3] = lt(t3)), t3.isRootInsert = !i3, function(t4, e3, n3, s3) {
	          let i4 = t4.data;
	          if (o(i4)) {
	            const c4 = o(t4.componentInstance) && i4.keepAlive;
	            if (o(i4 = i4.hook) && o(i4 = i4.init) && i4(t4, false), o(t4.componentInstance))
	              return p2(t4, e3), m2(n3, t4.elm, s3), r(c4) && function(t5, e4, n4, r2) {
	                let s4, i5 = t5;
	                for (; i5.componentInstance; )
	                  if (i5 = i5.componentInstance._vnode, o(s4 = i5.data) && o(s4 = s4.transition)) {
	                    for (s4 = 0; s4 < a2.activate.length; ++s4)
	                      a2.activate[s4](Uo, i5);
	                    e4.push(i5);
	                    break;
	                  }
	                m2(n4, t5.elm, r2);
	              }(t4, e3, n3, s3), true;
	          }
	        }(t3, e2, n2, s2))
	          return;
	        const f3 = t3.data, d3 = t3.children, h2 = t3.tag;
	        o(h2) ? (t3.elm = t3.ns ? u2.createElementNS(t3.ns, h2) : u2.createElement(h2, t3), g2(t3), _2(t3, d3, e2), o(f3) && y2(t3, e2), m2(n2, t3.elm, s2)) : r(t3.isComment) ? (t3.elm = u2.createComment(t3.text), m2(n2, t3.elm, s2)) : (t3.elm = u2.createTextNode(t3.text), m2(n2, t3.elm, s2));
	      }
	      function p2(t3, e2) {
	        o(t3.data.pendingInsert) && (e2.push.apply(e2, t3.data.pendingInsert), t3.data.pendingInsert = null), t3.elm = t3.componentInstance.$el, v2(t3) ? (y2(t3, e2), g2(t3)) : (Lo(t3), e2.push(t3));
	      }
	      function m2(t3, e2, n2) {
	        o(t3) && (o(n2) ? u2.parentNode(n2) === t3 && u2.insertBefore(t3, e2, n2) : u2.appendChild(t3, e2));
	      }
	      function _2(t3, n2, o2) {
	        if (e(n2))
	          for (let e2 = 0; e2 < n2.length; ++e2)
	            d2(n2[e2], o2, t3.elm, null, true, n2, e2);
	        else
	          s(t3.text) && u2.appendChild(t3.elm, u2.createTextNode(String(t3.text)));
	      }
	      function v2(t3) {
	        for (; t3.componentInstance; )
	          t3 = t3.componentInstance._vnode;
	        return o(t3.tag);
	      }
	      function y2(t3, e2) {
	        for (let e3 = 0; e3 < a2.create.length; ++e3)
	          a2.create[e3](Uo, t3);
	        i2 = t3.data.hook, o(i2) && (o(i2.create) && i2.create(Uo, t3), o(i2.insert) && e2.push(t3));
	      }
	      function g2(t3) {
	        let e2;
	        if (o(e2 = t3.fnScopeId))
	          u2.setStyleScope(t3.elm, e2);
	        else {
	          let n2 = t3;
	          for (; n2; )
	            o(e2 = n2.context) && o(e2 = e2.$options._scopeId) && u2.setStyleScope(t3.elm, e2), n2 = n2.parent;
	        }
	        o(e2 = dn) && e2 !== t3.context && e2 !== t3.fnContext && o(e2 = e2.$options._scopeId) && u2.setStyleScope(t3.elm, e2);
	      }
	      function b2(t3, e2, n2, o2, r2, s2) {
	        for (; o2 <= r2; ++o2)
	          d2(n2[o2], s2, t3, e2, false, n2, o2);
	      }
	      function $2(t3) {
	        let e2, n2;
	        const r2 = t3.data;
	        if (o(r2))
	          for (o(e2 = r2.hook) && o(e2 = e2.destroy) && e2(t3), e2 = 0; e2 < a2.destroy.length; ++e2)
	            a2.destroy[e2](t3);
	        if (o(e2 = t3.children))
	          for (n2 = 0; n2 < t3.children.length; ++n2)
	            $2(t3.children[n2]);
	      }
	      function w2(t3, e2, n2) {
	        for (; e2 <= n2; ++e2) {
	          const n3 = t3[e2];
	          o(n3) && (o(n3.tag) ? (C2(n3), $2(n3)) : f2(n3.elm));
	        }
	      }
	      function C2(t3, e2) {
	        if (o(e2) || o(t3.data)) {
	          let n2;
	          const r2 = a2.remove.length + 1;
	          for (o(e2) ? e2.listeners += r2 : e2 = function(t4, e3) {
	            function n3() {
	              0 == --n3.listeners && f2(t4);
	            }
	            return n3.listeners = e3, n3;
	          }(t3.elm, r2), o(n2 = t3.componentInstance) && o(n2 = n2._vnode) && o(n2.data) && C2(n2, e2), n2 = 0; n2 < a2.remove.length; ++n2)
	            a2.remove[n2](t3, e2);
	          o(n2 = t3.data.hook) && o(n2 = n2.remove) ? n2(t3, e2) : e2();
	        } else
	          f2(t3.elm);
	      }
	      function x2(t3, e2, n2, r2) {
	        for (let s2 = n2; s2 < r2; s2++) {
	          const n3 = e2[s2];
	          if (o(n3) && Vo(t3, n3))
	            return s2;
	        }
	      }
	      function k2(t3, e2, s2, i3, c3, l3) {
	        if (t3 === e2)
	          return;
	        o(e2.elm) && o(i3) && (e2 = i3[c3] = lt(e2));
	        const f3 = e2.elm = t3.elm;
	        if (r(t3.isAsyncPlaceholder))
	          return void (o(e2.asyncFactory.resolved) ? A2(t3.elm, e2, s2) : e2.isAsyncPlaceholder = true);
	        if (r(e2.isStatic) && r(t3.isStatic) && e2.key === t3.key && (r(e2.isCloned) || r(e2.isOnce)))
	          return void (e2.componentInstance = t3.componentInstance);
	        let p3;
	        const h2 = e2.data;
	        o(h2) && o(p3 = h2.hook) && o(p3 = p3.prepatch) && p3(t3, e2);
	        const m3 = t3.children, _3 = e2.children;
	        if (o(h2) && v2(e2)) {
	          for (p3 = 0; p3 < a2.update.length; ++p3)
	            a2.update[p3](t3, e2);
	          o(p3 = h2.hook) && o(p3 = p3.update) && p3(t3, e2);
	        }
	        n(e2.text) ? o(m3) && o(_3) ? m3 !== _3 && function(t4, e3, r2, s3, i4) {
	          let c4, a3, l4, f4, p4 = 0, h3 = 0, m4 = e3.length - 1, _4 = e3[0], v3 = e3[m4], y3 = r2.length - 1, g3 = r2[0], $3 = r2[y3];
	          const C3 = !i4;
	          for (; p4 <= m4 && h3 <= y3; )
	            n(_4) ? _4 = e3[++p4] : n(v3) ? v3 = e3[--m4] : Vo(_4, g3) ? (k2(_4, g3, s3, r2, h3), _4 = e3[++p4], g3 = r2[++h3]) : Vo(v3, $3) ? (k2(v3, $3, s3, r2, y3), v3 = e3[--m4], $3 = r2[--y3]) : Vo(_4, $3) ? (k2(_4, $3, s3, r2, y3), C3 && u2.insertBefore(t4, _4.elm, u2.nextSibling(v3.elm)), _4 = e3[++p4], $3 = r2[--y3]) : Vo(v3, g3) ? (k2(v3, g3, s3, r2, h3), C3 && u2.insertBefore(t4, v3.elm, _4.elm), v3 = e3[--m4], g3 = r2[++h3]) : (n(c4) && (c4 = zo(e3, p4, m4)), a3 = o(g3.key) ? c4[g3.key] : x2(g3, e3, p4, m4), n(a3) ? d2(g3, s3, t4, _4.elm, false, r2, h3) : (l4 = e3[a3], Vo(l4, g3) ? (k2(l4, g3, s3, r2, h3), e3[a3] = void 0, C3 && u2.insertBefore(t4, l4.elm, _4.elm)) : d2(g3, s3, t4, _4.elm, false, r2, h3)), g3 = r2[++h3]);
	          p4 > m4 ? (f4 = n(r2[y3 + 1]) ? null : r2[y3 + 1].elm, b2(t4, f4, r2, h3, y3, s3)) : h3 > y3 && w2(e3, p4, m4);
	        }(f3, m3, _3, s2, l3) : o(_3) ? (o(t3.text) && u2.setTextContent(f3, ""), b2(f3, null, _3, 0, _3.length - 1, s2)) : o(m3) ? w2(m3, 0, m3.length - 1) : o(t3.text) && u2.setTextContent(f3, "") : t3.text !== e2.text && u2.setTextContent(f3, e2.text), o(h2) && o(p3 = h2.hook) && o(p3 = p3.postpatch) && p3(t3, e2);
	      }
	      function O2(t3, e2, n2) {
	        if (r(n2) && o(t3.parent))
	          t3.parent.data.pendingInsert = e2;
	        else
	          for (let t4 = 0; t4 < e2.length; ++t4)
	            e2[t4].data.hook.insert(e2[t4]);
	      }
	      const S2 = h("attrs,class,staticClass,staticStyle,key");
	      function A2(t3, e2, n2, s2) {
	        let i3;
	        const {
	          tag: c3,
	          data: a3,
	          children: l3
	        } = e2;
	        if (s2 = s2 || a3 && a3.pre, e2.elm = t3, r(e2.isComment) && o(e2.asyncFactory))
	          return e2.isAsyncPlaceholder = true, true;
	        if (o(a3) && (o(i3 = a3.hook) && o(i3 = i3.init) && i3(e2, true), o(i3 = e2.componentInstance)))
	          return p2(e2, n2), true;
	        if (o(c3)) {
	          if (o(l3))
	            if (t3.hasChildNodes()) {
	              if (o(i3 = a3) && o(i3 = i3.domProps) && o(i3 = i3.innerHTML)) {
	                if (i3 !== t3.innerHTML)
	                  return false;
	              } else {
	                let e3 = true, o2 = t3.firstChild;
	                for (let t4 = 0; t4 < l3.length; t4++) {
	                  if (!o2 || !A2(o2, l3[t4], n2, s2)) {
	                    e3 = false;
	                    break;
	                  }
	                  o2 = o2.nextSibling;
	                }
	                if (!e3 || o2)
	                  return false;
	              }
	            } else
	              _2(e2, l3, n2);
	          if (o(a3)) {
	            let t4 = false;
	            for (const o2 in a3)
	              if (!S2(o2)) {
	                t4 = true, y2(e2, n2);
	                break;
	              }
	            !t4 && a3.class && nn(a3.class);
	          }
	        } else
	          t3.data !== e2.text && (t3.data = e2.text);
	        return true;
	      }
	      return function(t3, e2, s2, i3) {
	        if (n(e2))
	          return void (o(t3) && $2(t3));
	        let c3 = false;
	        const l3 = [];
	        if (n(t3))
	          c3 = true, d2(e2, l3);
	        else {
	          const n2 = o(t3.nodeType);
	          if (!n2 && Vo(t3, e2))
	            k2(t3, e2, l3, null, null, i3);
	          else {
	            if (n2) {
	              if (1 === t3.nodeType && t3.hasAttribute("data-server-rendered") && (t3.removeAttribute("data-server-rendered"), s2 = true), r(s2) && A2(t3, e2, l3))
	                return O2(e2, l3, true), t3;
	              f3 = t3, t3 = new it(u2.tagName(f3).toLowerCase(), {}, [], void 0, f3);
	            }
	            const i4 = t3.elm, c4 = u2.parentNode(i4);
	            if (d2(e2, l3, i4._leaveCb ? null : c4, u2.nextSibling(i4)), o(e2.parent)) {
	              let t4 = e2.parent;
	              const n3 = v2(e2);
	              for (; t4; ) {
	                for (let e3 = 0; e3 < a2.destroy.length; ++e3)
	                  a2.destroy[e3](t4);
	                if (t4.elm = e2.elm, n3) {
	                  for (let e4 = 0; e4 < a2.create.length; ++e4)
	                    a2.create[e4](Uo, t4);
	                  const e3 = t4.data.hook.insert;
	                  if (e3.merged)
	                    for (let t5 = 1; t5 < e3.fns.length; t5++)
	                      e3.fns[t5]();
	                } else
	                  Lo(t4);
	                t4 = t4.parent;
	              }
	            }
	            o(c4) ? w2([t3], 0, 0) : o(t3.tag) && $2(t3);
	          }
	        }
	        var f3;
	        return O2(e2, l3, c3), e2.elm;
	      };
	    })({
	      nodeOps: Mo,
	      modules: [tr, nr, lr, pr, xr, {}].concat(Jo)
	    });
	    const Jr = {
	      inserted(t2, e2, n2, o2) {
	        "select" === n2.tag ? (o2.elm && !o2.elm._vOptions ? Zt(n2, "postpatch", () => {
	          Jr.componentUpdated(t2, e2, n2);
	        }) : Xr(t2, e2, n2.context), t2._vOptions = [].map.call(t2.options, ts)) : ("textarea" === n2.tag || No(t2.type)) && (t2._vModifiers = e2.modifiers, e2.modifiers.lazy || (t2.addEventListener("compositionstart", es), t2.addEventListener("compositionend", ns), t2.addEventListener("change", ns), K ));
	      },
	      componentUpdated(t2, e2, n2) {
	        if ("select" === n2.tag) {
	          Xr(t2, e2, n2.context);
	          const o2 = t2._vOptions, r2 = t2._vOptions = [].map.call(t2.options, ts);
	          if (r2.some((t3, e3) => !P(t3, o2[e3]))) {
	            (t2.multiple ? e2.value.some((t3) => Yr(t3, r2)) : e2.value !== e2.oldValue && Yr(e2.value, r2)) && os(t2, "change");
	          }
	        }
	      }
	    };
	    function Xr(t2, e2, n2) {
	      Qr(t2, e2);
	    }
	    function Qr(t2, e2, n2) {
	      const o2 = e2.value, r2 = t2.multiple;
	      if (r2 && !Array.isArray(o2))
	        return;
	      let s2, i2;
	      for (let e3 = 0, n3 = t2.options.length; e3 < n3; e3++)
	        if (i2 = t2.options[e3], r2)
	          s2 = I(o2, ts(i2)) > -1, i2.selected !== s2 && (i2.selected = s2);
	        else if (P(ts(i2), o2))
	          return void (t2.selectedIndex !== e3 && (t2.selectedIndex = e3));
	      r2 || (t2.selectedIndex = -1);
	    }
	    function Yr(t2, e2) {
	      return e2.every((e3) => !P(e3, t2));
	    }
	    function ts(t2) {
	      return "_value" in t2 ? t2._value : t2.value;
	    }
	    function es(t2) {
	      t2.target.composing = true;
	    }
	    function ns(t2) {
	      t2.target.composing && (t2.target.composing = false, os(t2.target, "input"));
	    }
	    function os(t2, e2) {
	      const n2 = document.createEvent("HTMLEvents");
	      n2.initEvent(e2, true, true), t2.dispatchEvent(n2);
	    }
	    function rs(t2) {
	      return !t2.componentInstance || t2.data && t2.data.transition ? t2 : rs(t2.componentInstance._vnode);
	    }
	    var ss = {
	      bind(t2, {
	        value: e2
	      }, n2) {
	        const o2 = (n2 = rs(n2)).data && n2.data.transition, r2 = t2.__vOriginalDisplay = "none" === t2.style.display ? "" : t2.style.display;
	        e2 && o2 ? (n2.data.show = true, Hr(n2, () => {
	          t2.style.display = r2;
	        })) : t2.style.display = e2 ? r2 : "none";
	      },
	      update(t2, {
	        value: e2,
	        oldValue: n2
	      }, o2) {
	        if (!e2 == !n2)
	          return;
	        (o2 = rs(o2)).data && o2.data.transition ? (o2.data.show = true, e2 ? Hr(o2, () => {
	          t2.style.display = t2.__vOriginalDisplay;
	        }) : Wr(o2, () => {
	          t2.style.display = "none";
	        })) : t2.style.display = e2 ? t2.__vOriginalDisplay : "none";
	      },
	      unbind(t2, e2, n2, o2, r2) {
	        r2 || (t2.style.display = t2.__vOriginalDisplay);
	      }
	    }, is = {
	      model: Jr,
	      show: ss
	    };
	    const cs = {
	      name: String,
	      appear: Boolean,
	      css: Boolean,
	      mode: String,
	      type: String,
	      enterClass: String,
	      leaveClass: String,
	      enterToClass: String,
	      leaveToClass: String,
	      enterActiveClass: String,
	      leaveActiveClass: String,
	      appearClass: String,
	      appearActiveClass: String,
	      appearToClass: String,
	      duration: [Number, String, Object]
	    };
	    function as(t2) {
	      const e2 = t2 && t2.componentOptions;
	      return e2 && e2.Ctor.options.abstract ? as(Ae(e2.children)) : t2;
	    }
	    function ls(t2) {
	      const e2 = {}, n2 = t2.$options;
	      for (const o3 in n2.propsData)
	        e2[o3] = t2[o3];
	      const o2 = n2._parentListeners;
	      for (const t3 in o2)
	        e2[$(t3)] = o2[t3];
	      return e2;
	    }
	    function us(t2, e2) {
	      if (/\d-keep-alive$/.test(e2.tag))
	        return t2("keep-alive", {
	          props: e2.componentOptions.propsData
	        });
	    }
	    const fs = (t2) => t2.tag || ve(t2), ds = (t2) => "show" === t2.name;
	    var ps = {
	      name: "transition",
	      props: cs,
	      abstract: true,
	      render(t2) {
	        let e2 = this.$slots.default;
	        if (!e2)
	          return;
	        if (e2 = e2.filter(fs), !e2.length)
	          return;
	        const n2 = this.mode, o2 = e2[0];
	        if (function(t3) {
	          for (; t3 = t3.parent; )
	            if (t3.data.transition)
	              return true;
	        }(this.$vnode))
	          return o2;
	        const r2 = as(o2);
	        if (!r2)
	          return o2;
	        if (this._leaving)
	          return us(t2, o2);
	        const i2 = `__transition-${this._uid}-`;
	        r2.key = null == r2.key ? r2.isComment ? i2 + "comment" : i2 + r2.tag : s(r2.key) ? 0 === String(r2.key).indexOf(i2) ? r2.key : i2 + r2.key : r2.key;
	        const c2 = (r2.data || (r2.data = {})).transition = ls(this), a2 = this._vnode, l2 = as(a2);
	        if (r2.data.directives && r2.data.directives.some(ds) && (r2.data.show = true), l2 && l2.data && !function(t3, e3) {
	          return e3.key === t3.key && e3.tag === t3.tag;
	        }(r2, l2) && !ve(l2) && (!l2.componentInstance || !l2.componentInstance._vnode.isComment)) {
	          const e3 = l2.data.transition = S({}, c2);
	          if ("out-in" === n2)
	            return this._leaving = true, Zt(e3, "afterLeave", () => {
	              this._leaving = false, this.$forceUpdate();
	            }), us(t2, o2);
	          if ("in-out" === n2) {
	            if (ve(r2))
	              return a2;
	            let t3;
	            const n3 = () => {
	              t3();
	            };
	            Zt(c2, "afterEnter", n3), Zt(c2, "enterCancelled", n3), Zt(e3, "delayLeave", (e4) => {
	              t3 = e4;
	            });
	          }
	        }
	        return o2;
	      }
	    };
	    const hs = S({
	      tag: String,
	      moveClass: String
	    }, cs);
	    delete hs.mode;
	    var ms = {
	      props: hs,
	      beforeMount() {
	        const t2 = this._update;
	        this._update = (e2, n2) => {
	          const o2 = pn(this);
	          this.__patch__(this._vnode, this.kept, false, true), this._vnode = this.kept, o2(), t2.call(this, e2, n2);
	        };
	      },
	      render(t2) {
	        const e2 = this.tag || this.$vnode.data.tag || "span", n2 = /* @__PURE__ */ Object.create(null), o2 = this.prevChildren = this.children, r2 = this.$slots.default || [], s2 = this.children = [], i2 = ls(this);
	        for (let t3 = 0; t3 < r2.length; t3++) {
	          const e3 = r2[t3];
	          e3.tag && null != e3.key && 0 !== String(e3.key).indexOf("__vlist") && (s2.push(e3), n2[e3.key] = e3, (e3.data || (e3.data = {})).transition = i2);
	        }
	        if (o2) {
	          const r3 = [], s3 = [];
	          for (let t3 = 0; t3 < o2.length; t3++) {
	            const e3 = o2[t3];
	            e3.data.transition = i2, e3.data.pos = e3.elm.getBoundingClientRect(), n2[e3.key] ? r3.push(e3) : s3.push(e3);
	          }
	          this.kept = t2(e2, null, r3), this.removed = s3;
	        }
	        return t2(e2, null, s2);
	      },
	      updated() {
	        const t2 = this.prevChildren, e2 = this.moveClass || (this.name || "v") + "-move";
	        t2.length && this.hasMove(t2[0].elm, e2) && (t2.forEach(_s), t2.forEach(vs), t2.forEach(ys), this._reflow = document.body.offsetHeight, t2.forEach((t3) => {
	          if (t3.data.moved) {
	            const n2 = t3.elm, o2 = n2.style;
	            Rr(n2, e2), o2.transform = o2.WebkitTransform = o2.transitionDuration = "", n2.addEventListener(Pr, n2._moveCb = function t4(o3) {
	              o3 && o3.target !== n2 || o3 && !/transform$/.test(o3.propertyName) || (n2.removeEventListener(Pr, t4), n2._moveCb = null, Lr(n2, e2));
	            });
	          }
	        }));
	      },
	      methods: {
	        hasMove(t2, e2) {
	          return false;
	        }
	      }
	    };
	    function _s(t2) {
	      t2.elm._moveCb && t2.elm._moveCb(), t2.elm._enterCb && t2.elm._enterCb();
	    }
	    function vs(t2) {
	      t2.data.newPos = t2.elm.getBoundingClientRect();
	    }
	    function ys(t2) {
	      const e2 = t2.data.pos, n2 = t2.data.newPos, o2 = e2.left - n2.left, r2 = e2.top - n2.top;
	      if (o2 || r2) {
	        t2.data.moved = true;
	        const e3 = t2.elm.style;
	        e3.transform = e3.WebkitTransform = `translate(${o2}px,${r2}px)`, e3.transitionDuration = "0s";
	      }
	    }
	    var gs = {
	      Transition: ps,
	      TransitionGroup: ms
	    };
	    ao.config.mustUseProp = (t2, e2, n2) => "value" === n2 && yo(t2) && "button" !== e2 || "selected" === n2 && "option" === t2 || "checked" === n2 && "input" === t2 || "muted" === n2 && "video" === t2, ao.config.isReservedTag = Io, ao.config.isReservedAttr = vo, ao.config.getTagNamespace = function(t2) {
	      return Po(t2) ? "svg" : "math" === t2 ? "math" : void 0;
	    }, ao.config.isUnknownElement = function(t2) {
	      return true;
	    }, S(ao.options.directives, is), S(ao.options.components, gs), ao.prototype.__patch__ = T, ao.prototype.$mount = function(t2, e2) {
	      return function(t3, e3, n2) {
	        let o2;
	        t3.$el = e3, t3.$options.render || (t3.$options.render = ct), vn(t3, "beforeMount"), o2 = () => {
	          t3._update(t3._render(), n2);
	        }, new cn(t3, o2, T, {
	          before() {
	            t3._isMounted && !t3._isDestroyed && vn(t3, "beforeUpdate");
	          }
	        }, true), n2 = false;
	        const r2 = t3._preWatchers;
	        if (r2)
	          for (let t4 = 0; t4 < r2.length; t4++)
	            r2[t4].run();
	        return null == t3.$vnode && (t3._isMounted = true, vn(t3, "mounted")), t3;
	      }(this, t2 = t2 && z ? function(t3) {
	        if ("string" == typeof t3) {
	          return document.querySelector(t3) || document.createElement("div");
	        }
	        return t3;
	      }(t2) : void 0, e2);
	    }, S(ao, tn), module2.exports = ao;
	  },
	  function(module2, exports) {
	    module2.exports = require$$8;
	  },
	  function(module2, exports) {
	    module2.exports = require$$9;
	  },
	  function(module2, exports) {
	    module2.exports = require$$10;
	  },
	  function(module2, exports) {
	    module2.exports = require$$11;
	  },
	  function(module2, exports) {
	    module2.exports = require$$12;
	  },
	  function(module2, exports) {
	    module2.exports = require$$13;
	  },
	  function(module2, exports) {
	    module2.exports = require$$14;
	  },
	  function(module2, exports) {
	    module2.exports = require$$15;
	  },
	  function(module2, exports) {
	    module2.exports = require$$16;
	  },
	  function(module2, exports) {
	    module2.exports = require$$17;
	  },
	  function(module2, exports) {
	    module2.exports = require$$18;
	  },
	  function(module2, exports) {
	    module2.exports = require$$19;
	  },
	  function(module2, exports) {
	    module2.exports = require$$20;
	  },
	  function(module2, exports) {
	    module2.exports = require$$21;
	  },
	  function(module2, exports) {
	    module2.exports = require$$22;
	  },
	  function(module2, exports) {
	    module2.exports = require$$23;
	  },
	  function(module2, exports) {
	    module2.exports = require$$24;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*purgecss start ignore*/\n.__nuxt-error-page{\n  padding:1rem;\n  background:#f7f8fb;\n  color:#47494e;\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  font-family:sans-serif;\n  font-weight:100!important;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -webkit-font-smoothing:antialiased;\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.__nuxt-error-page .error{\n  max-width:450px\n}\n.__nuxt-error-page .title{\n  font-size:1.5rem;\n  margin-top:15px;\n  color:#47494e;\n  margin-bottom:8px\n}\n.__nuxt-error-page .description{\n  color:#7f828b;\n  line-height:21px;\n  margin-bottom:10px\n}\n.__nuxt-error-page a{\n  color:#7f828b!important;\n  text-decoration:none\n}\n.__nuxt-error-page .logo{\n  position:fixed;\n  left:12px;\n  bottom:12px\n}\n\n/*purgecss end ignore*/", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*purgecss start ignore*/\n.nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}\n\n/*purgecss end ignore*/", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(45);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    __webpack_require__(11).default("45b69f40", content, true);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n		system-ui,\n		-apple-system, /* Firefox supports this but not yet `system-ui` */\n		'Segoe UI',\n		Roboto,\n		Helvetica,\n		Arial,\n		sans-serif,\n		'Apple Color Emoji',\n		'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n		ui-monospace,\n		SFMono-Regular,\n		Consolas,\n		'Liberation Mono',\n		Menlo,\n		monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.relative{\n  position:relative;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.max-w-4xl{\n  max-width:56rem;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-t{\n  border-top-width:1px;\n}\n\n.border-dashed{\n  border-style:dashed;\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.p-1{\n  padding:0.25rem;\n}\n\n.p-6{\n  padding:1.5rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pt-8{\n  padding-top:2rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.leading-7{\n  line-height:1.75rem;\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-green-500{\n  --tw-text-opacity:1;\n  color:rgba(16, 185, 129, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-800:hover{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.hover\\:underline:hover{\n  text-decoration:underline;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n@media (min-width: 640px){\n  .sm\\:items-center{\n    align-items:center;\n  }\n\n  .sm\\:rounded-lg{\n    border-radius:0.5rem;\n  }\n\n  .sm\\:px-6{\n    padding-left:1.5rem;\n    padding-right:1.5rem;\n  }\n\n  .sm\\:pt-0{\n    padding-top:0px;\n  }\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n  .lg\\:px-8{\n    padding-left:2rem;\n    padding-right:2rem;\n  }\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, exports) {
	    module2.exports = require$$25;
	  },
	  function(module2, exports) {
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var components_namespaceObject = {};
	    __webpack_require__.r(components_namespaceObject);
	    __webpack_require__.d(components_namespaceObject, "NuxtLogo", function() {
	      return NuxtLogo;
	    });
	    __webpack_require__.d(components_namespaceObject, "Tutorial", function() {
	      return Tutorial;
	    });
	    var vue_runtime = __webpack_require__(0);
	    var external_ufo_ = __webpack_require__(1);
	    var _nuxt_middleware = __webpack_require__(5);
	    function createGetCounter(counterObject, defaultKey = "") {
	      return function getCounter(id = defaultKey) {
	        if (counterObject[id] === void 0) {
	          counterObject[id] = 0;
	        }
	        return counterObject[id]++;
	      };
	    }
	    function globalHandleError(error) {
	      if (vue_runtime["b"].config.errorHandler) {
	        vue_runtime["b"].config.errorHandler(error);
	      }
	    }
	    function interopDefault(promise) {
	      return promise.then((m) => m.default || m);
	    }
	    function hasFetch(vm) {
	      return vm.$options && typeof vm.$options.fetch === "function" && !vm.$options.fetch.length;
	    }
	    function purifyData(data) {
	      {
	        return data;
	      }
	    }
	    function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
	      const children = vm.$children || [];
	      for (const child of children) {
	        if (child.$fetch) {
	          instances.push(child);
	        }
	        if (child.$children) {
	          getChildrenComponentInstancesUsingFetch(child, instances);
	        }
	      }
	      return instances;
	    }
	    function applyAsyncData(Component, asyncData) {
	      if (!asyncData && Component.options.__hasNuxtData) {
	        return;
	      }
	      const ComponentData = Component.options._originDataFn || Component.options.data || function() {
	        return {};
	      };
	      Component.options._originDataFn = ComponentData;
	      Component.options.data = function() {
	        const data = ComponentData.call(this, this);
	        if (this.$ssrContext) {
	          asyncData = this.$ssrContext.asyncData[Component.cid];
	        }
	        return {
	          ...data,
	          ...asyncData
	        };
	      };
	      Component.options.__hasNuxtData = true;
	      if (Component._Ctor && Component._Ctor.options) {
	        Component._Ctor.options.data = Component.options.data;
	      }
	    }
	    function sanitizeComponent(Component) {
	      if (Component.options && Component._Ctor === Component) {
	        return Component;
	      }
	      if (!Component.options) {
	        Component = vue_runtime["b"].extend(Component);
	        Component._Ctor = Component;
	      } else {
	        Component._Ctor = Component;
	        Component.extendOptions = Component.options;
	      }
	      if (!Component.options.name && Component.options.__file) {
	        Component.options.name = Component.options.__file;
	      }
	      return Component;
	    }
	    function getMatchedComponents(route, matches = false, prop = "components") {
	      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
	        return Object.keys(m[prop]).map((key) => {
	          matches && matches.push(index);
	          return m[prop][key];
	        });
	      }));
	    }
	    function getMatchedComponentsInstances(route, matches = false) {
	      return getMatchedComponents(route, matches, "instances");
	    }
	    function flatMapComponents(route, fn) {
	      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
	        return Object.keys(m.components).reduce((promises, key) => {
	          if (m.components[key]) {
	            promises.push(fn(m.components[key], m.instances[key], m, key, index));
	          } else {
	            delete m.components[key];
	          }
	          return promises;
	        }, []);
	      }));
	    }
	    function resolveRouteComponents(route, fn) {
	      return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
	        if (typeof Component === "function" && !Component.options) {
	          try {
	            Component = await Component();
	          } catch (error) {
	            if (error && error.name === "ChunkLoadError" && false) {
	              const timeNow = Date.now();
	              const previousReloadTime = parseInt(window.sessionStorage.getItem("nuxt-reload"));
	              if (!previousReloadTime || previousReloadTime + 6e4 < timeNow) {
	                window.sessionStorage.setItem("nuxt-reload", timeNow);
	                window.location.reload(
	                  true
	                );
	              }
	            }
	            throw error;
	          }
	        }
	        match.components[key] = Component = sanitizeComponent(Component);
	        return typeof fn === "function" ? fn(Component, instance, match, key) : Component;
	      }));
	    }
	    async function getRouteData(route) {
	      if (!route) {
	        return;
	      }
	      await resolveRouteComponents(route);
	      return {
	        ...route,
	        meta: getMatchedComponents(route).map((Component, index) => {
	          return {
	            ...Component.options.meta,
	            ...(route.matched[index] || {}).meta
	          };
	        })
	      };
	    }
	    async function setContext(app, context) {
	      if (!app.context) {
	        app.context = {
	          isStatic: false,
	          isDev: false,
	          isHMR: false,
	          app,
	          payload: context.payload,
	          error: context.error,
	          base: app.router.options.base,
	          env: {}
	        };
	        if (context.req) {
	          app.context.req = context.req;
	        }
	        if (context.res) {
	          app.context.res = context.res;
	        }
	        if (context.ssrContext) {
	          app.context.ssrContext = context.ssrContext;
	        }
	        app.context.redirect = (status, path, query) => {
	          if (!status) {
	            return;
	          }
	          app.context._redirected = true;
	          let pathType = typeof path;
	          if (typeof status !== "number" && (pathType === "undefined" || pathType === "object")) {
	            query = path || {};
	            path = status;
	            pathType = typeof path;
	            status = 302;
	          }
	          if (pathType === "object") {
	            path = app.router.resolve(path).route.fullPath;
	          }
	          if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
	            app.context.next({
	              path,
	              query,
	              status
	            });
	          } else {
	            path = Object(external_ufo_["withQuery"])(path, query);
	            {
	              app.context.next({
	                path,
	                status
	              });
	            }
	          }
	        };
	        {
	          app.context.beforeNuxtRender = (fn) => context.beforeRenderFns.push(fn);
	          app.context.beforeSerialize = (fn) => context.beforeSerializeFns.push(fn);
	        }
	      }
	      const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
	      if (context.route) {
	        app.context.route = currentRouteData;
	      }
	      if (context.from) {
	        app.context.from = fromRouteData;
	      }
	      app.context.next = context.next;
	      app.context._redirected = false;
	      app.context._errored = false;
	      app.context.isHMR = false;
	      app.context.params = app.context.route.params || {};
	      app.context.query = app.context.route.query || {};
	    }
	    function middlewareSeries(promises, appContext) {
	      if (!promises.length || appContext._redirected || appContext._errored) {
	        return Promise.resolve();
	      }
	      return promisify(promises[0], appContext).then(() => {
	        return middlewareSeries(promises.slice(1), appContext);
	      });
	    }
	    function promisify(fn, context) {
	      let promise;
	      if (fn.length === 2) {
	        promise = new Promise((resolve) => {
	          fn(context, function(err, data) {
	            if (err) {
	              context.error(err);
	            }
	            data = data || {};
	            resolve(data);
	          });
	        });
	      } else {
	        promise = fn(context);
	      }
	      if (promise && promise instanceof Promise && typeof promise.then === "function") {
	        return promise;
	      }
	      return Promise.resolve(promise);
	    }
	    function getLocation(base, mode) {
	      if (mode === "hash") {
	        return window.location.hash.replace(/^#\//, "");
	      }
	      base = decodeURI(base).slice(0, -1);
	      let path = decodeURI(window.location.pathname);
	      if (base && path.startsWith(base)) {
	        path = path.slice(base.length);
	      }
	      const fullPath = (path || "/") + window.location.search + window.location.hash;
	      return Object(external_ufo_["normalizeURL"])(fullPath);
	    }
	    function compile(str, options) {
	      return tokensToFunction(parse(str, options), options);
	    }
	    function normalizeError(err) {
	      let message;
	      if (!(err.message || typeof err === "string")) {
	        try {
	          message = JSON.stringify(err, null, 2);
	        } catch (e) {
	          message = `[${err.constructor.name}]`;
	        }
	      } else {
	        message = err.message || err;
	      }
	      return {
	        ...err,
	        message,
	        statusCode: err.statusCode || err.status || err.response && err.response.status || 500
	      };
	    }
	    const PATH_REGEXP = new RegExp([
	      "(\\\\.)",
	      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
	    ].join("|"), "g");
	    function parse(str, options) {
	      const tokens = [];
	      let key = 0;
	      let index = 0;
	      let path = "";
	      const defaultDelimiter = options && options.delimiter || "/";
	      let res;
	      while ((res = PATH_REGEXP.exec(str)) != null) {
	        const m = res[0];
	        const escaped = res[1];
	        const offset = res.index;
	        path += str.slice(index, offset);
	        index = offset + m.length;
	        if (escaped) {
	          path += escaped[1];
	          continue;
	        }
	        const next = str[index];
	        const prefix = res[2];
	        const name = res[3];
	        const capture = res[4];
	        const group = res[5];
	        const modifier = res[6];
	        const asterisk = res[7];
	        if (path) {
	          tokens.push(path);
	          path = "";
	        }
	        const partial = prefix != null && next != null && next !== prefix;
	        const repeat = modifier === "+" || modifier === "*";
	        const optional = modifier === "?" || modifier === "*";
	        const delimiter = res[2] || defaultDelimiter;
	        const pattern = capture || group;
	        tokens.push({
	          name: name || key++,
	          prefix: prefix || "",
	          delimiter,
	          optional,
	          repeat,
	          partial,
	          asterisk: Boolean(asterisk),
	          pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
	        });
	      }
	      if (index < str.length) {
	        path += str.substr(index);
	      }
	      if (path) {
	        tokens.push(path);
	      }
	      return tokens;
	    }
	    function encodeURIComponentPretty(str, slashAllowed) {
	      const re = slashAllowed ? /[?#]/g : /[/?#]/g;
	      return encodeURI(str).replace(re, (c) => {
	        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
	      });
	    }
	    function encodeAsterisk(str) {
	      return encodeURIComponentPretty(str, true);
	    }
	    function escapeString(str) {
	      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	    }
	    function escapeGroup(group) {
	      return group.replace(/([=!:$/()])/g, "\\$1");
	    }
	    function tokensToFunction(tokens, options) {
	      const matches = new Array(tokens.length);
	      for (let i = 0; i < tokens.length; i++) {
	        if (typeof tokens[i] === "object") {
	          matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
	        }
	      }
	      return function(obj, opts) {
	        let path = "";
	        const data = obj || {};
	        const options2 = opts || {};
	        const encode2 = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
	        for (let i = 0; i < tokens.length; i++) {
	          const token = tokens[i];
	          if (typeof token === "string") {
	            path += token;
	            continue;
	          }
	          const value = data[token.name || "pathMatch"];
	          let segment;
	          if (value == null) {
	            if (token.optional) {
	              if (token.partial) {
	                path += token.prefix;
	              }
	              continue;
	            } else {
	              throw new TypeError('Expected "' + token.name + '" to be defined');
	            }
	          }
	          if (Array.isArray(value)) {
	            if (!token.repeat) {
	              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
	            }
	            if (value.length === 0) {
	              if (token.optional) {
	                continue;
	              } else {
	                throw new TypeError('Expected "' + token.name + '" to not be empty');
	              }
	            }
	            for (let j = 0; j < value.length; j++) {
	              segment = encode2(value[j]);
	              if (!matches[i].test(segment)) {
	                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
	              }
	              path += (j === 0 ? token.prefix : token.delimiter) + segment;
	            }
	            continue;
	          }
	          segment = token.asterisk ? encodeAsterisk(value) : encode2(value);
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	          }
	          path += token.prefix + segment;
	        }
	        return path;
	      };
	    }
	    function flags(options) {
	      return options && options.sensitive ? "" : "i";
	    }
	    function addLifecycleHook(vm, hook, fn) {
	      if (!vm.$options[hook]) {
	        vm.$options[hook] = [];
	      }
	      if (!vm.$options[hook].includes(fn)) {
	        vm.$options[hook].push(fn);
	      }
	    }
	    external_ufo_["joinURL"];
	    external_ufo_["withoutTrailingSlash"];
	    external_ufo_["isSamePath"];
	    async function serverPrefetch() {
	      if (!this._fetchOnServer) {
	        return;
	      }
	      try {
	        await this.$options.fetch.call(this);
	      } catch (err) {
	        this.$fetchState.error = normalizeError(err);
	      }
	      this.$fetchState.pending = false;
	      this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters[""]++;
	      const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
	      attrs["data-fetch-key"] = this._fetchKey;
	      this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
	        _error: this.$fetchState.error
	      } : purifyData(this._data);
	    }
	    var fetch_server = {
	      created() {
	        if (!hasFetch(this)) {
	          return;
	        }
	        if (typeof this.$options.fetchOnServer === "function") {
	          this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
	        } else {
	          this._fetchOnServer = this.$options.fetchOnServer !== false;
	        }
	        const defaultKey = this.$options._scopeId || this.$options.name || "";
	        const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
	        if (typeof this.$options.fetchKey === "function") {
	          this._fetchKey = this.$options.fetchKey.call(this, getCounter);
	        } else {
	          const key = "string" === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
	          this._fetchKey = key ? key + ":" + getCounter(key) : String(getCounter(key));
	        }
	        this.$fetch = () => {
	        };
	        vue_runtime["b"].util.defineReactive(this, "$fetchState", {
	          pending: true,
	          error: null,
	          timestamp: Date.now()
	        });
	        addLifecycleHook(this, "serverPrefetch", serverPrefetch);
	      }
	    };
	    var vue_meta_common = __webpack_require__(16);
	    var vue_meta_common_default = /* @__PURE__ */ __webpack_require__.n(vue_meta_common);
	    var vue_client_only_common = __webpack_require__(13);
	    var vue_client_only_common_default = /* @__PURE__ */ __webpack_require__.n(vue_client_only_common);
	    var vue_no_ssr_common = __webpack_require__(9);
	    var vue_no_ssr_common_default = /* @__PURE__ */ __webpack_require__.n(vue_no_ssr_common);
	    function extend(a, b) {
	      for (var key in b) {
	        a[key] = b[key];
	      }
	      return a;
	    }
	    var encodeReserveRE = /[!'()*]/g;
	    var encodeReserveReplacer = function(c) {
	      return "%" + c.charCodeAt(0).toString(16);
	    };
	    var commaRE = /%2C/g;
	    var encode = function(str) {
	      return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ",");
	    };
	    function decode(str) {
	      try {
	        return decodeURIComponent(str);
	      } catch (err) {
	      }
	      return str;
	    }
	    function resolveQuery(query, extraQuery, _parseQuery) {
	      if (extraQuery === void 0)
	        extraQuery = {};
	      var parse2 = _parseQuery || parseQuery;
	      var parsedQuery;
	      try {
	        parsedQuery = parse2(query || "");
	      } catch (e) {
	        parsedQuery = {};
	      }
	      for (var key in extraQuery) {
	        var value = extraQuery[key];
	        parsedQuery[key] = Array.isArray(value) ? value.map(castQueryParamValue) : castQueryParamValue(value);
	      }
	      return parsedQuery;
	    }
	    var castQueryParamValue = function(value) {
	      return value == null || typeof value === "object" ? value : String(value);
	    };
	    function parseQuery(query) {
	      var res = {};
	      query = query.trim().replace(/^(\?|#|&)/, "");
	      if (!query) {
	        return res;
	      }
	      query.split("&").forEach(function(param) {
	        var parts = param.replace(/\+/g, " ").split("=");
	        var key = decode(parts.shift());
	        var val = parts.length > 0 ? decode(parts.join("=")) : null;
	        if (res[key] === void 0) {
	          res[key] = val;
	        } else if (Array.isArray(res[key])) {
	          res[key].push(val);
	        } else {
	          res[key] = [res[key], val];
	        }
	      });
	      return res;
	    }
	    function stringifyQuery(obj) {
	      var res = obj ? Object.keys(obj).map(function(key) {
	        var val = obj[key];
	        if (val === void 0) {
	          return "";
	        }
	        if (val === null) {
	          return encode(key);
	        }
	        if (Array.isArray(val)) {
	          var result = [];
	          val.forEach(function(val2) {
	            if (val2 === void 0) {
	              return;
	            }
	            if (val2 === null) {
	              result.push(encode(key));
	            } else {
	              result.push(encode(key) + "=" + encode(val2));
	            }
	          });
	          return result.join("&");
	        }
	        return encode(key) + "=" + encode(val);
	      }).filter(function(x) {
	        return x.length > 0;
	      }).join("&") : null;
	      return res ? "?" + res : "";
	    }
	    var trailingSlashRE = /\/?$/;
	    function createRoute(record, location, redirectedFrom, router) {
	      var stringifyQuery2 = router && router.options.stringifyQuery;
	      var query = location.query || {};
	      try {
	        query = clone(query);
	      } catch (e) {
	      }
	      var route = {
	        name: location.name || record && record.name,
	        meta: record && record.meta || {},
	        path: location.path || "/",
	        hash: location.hash || "",
	        query,
	        params: location.params || {},
	        fullPath: getFullPath(location, stringifyQuery2),
	        matched: record ? formatMatch(record) : []
	      };
	      if (redirectedFrom) {
	        route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery2);
	      }
	      return Object.freeze(route);
	    }
	    function clone(value) {
	      if (Array.isArray(value)) {
	        return value.map(clone);
	      } else if (value && typeof value === "object") {
	        var res = {};
	        for (var key in value) {
	          res[key] = clone(value[key]);
	        }
	        return res;
	      } else {
	        return value;
	      }
	    }
	    var START = createRoute(null, {
	      path: "/"
	    });
	    function formatMatch(record) {
	      var res = [];
	      while (record) {
	        res.unshift(record);
	        record = record.parent;
	      }
	      return res;
	    }
	    function getFullPath(ref, _stringifyQuery) {
	      var path = ref.path;
	      var query = ref.query;
	      if (query === void 0)
	        query = {};
	      var hash = ref.hash;
	      if (hash === void 0)
	        hash = "";
	      var stringify = _stringifyQuery || stringifyQuery;
	      return (path || "/") + stringify(query) + hash;
	    }
	    function isSameRoute(a, b, onlyPath) {
	      if (b === START) {
	        return a === b;
	      } else if (!b) {
	        return false;
	      } else if (a.path && b.path) {
	        return a.path.replace(trailingSlashRE, "") === b.path.replace(trailingSlashRE, "") && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query));
	      } else if (a.name && b.name) {
	        return a.name === b.name && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params));
	      } else {
	        return false;
	      }
	    }
	    function isObjectEqual(a, b) {
	      if (a === void 0)
	        a = {};
	      if (b === void 0)
	        b = {};
	      if (!a || !b) {
	        return a === b;
	      }
	      var aKeys = Object.keys(a).sort();
	      var bKeys = Object.keys(b).sort();
	      if (aKeys.length !== bKeys.length) {
	        return false;
	      }
	      return aKeys.every(function(key, i) {
	        var aVal = a[key];
	        var bKey = bKeys[i];
	        if (bKey !== key) {
	          return false;
	        }
	        var bVal = b[key];
	        if (aVal == null || bVal == null) {
	          return aVal === bVal;
	        }
	        if (typeof aVal === "object" && typeof bVal === "object") {
	          return isObjectEqual(aVal, bVal);
	        }
	        return String(aVal) === String(bVal);
	      });
	    }
	    function isIncludedRoute(current, target) {
	      return current.path.replace(trailingSlashRE, "/").indexOf(target.path.replace(trailingSlashRE, "/")) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
	    }
	    function queryIncludes(current, target) {
	      for (var key in target) {
	        if (!(key in current)) {
	          return false;
	        }
	      }
	      return true;
	    }
	    function handleRouteEntered(route) {
	      for (var i = 0; i < route.matched.length; i++) {
	        var record = route.matched[i];
	        for (var name in record.instances) {
	          var instance = record.instances[name];
	          var cbs = record.enteredCbs[name];
	          if (!instance || !cbs) {
	            continue;
	          }
	          delete record.enteredCbs[name];
	          for (var i$1 = 0; i$1 < cbs.length; i$1++) {
	            if (!instance._isBeingDestroyed) {
	              cbs[i$1](instance);
	            }
	          }
	        }
	      }
	    }
	    var View = {
	      name: "RouterView",
	      functional: true,
	      props: {
	        name: {
	          type: String,
	          default: "default"
	        }
	      },
	      render: function render2(_, ref) {
	        var props = ref.props;
	        var children = ref.children;
	        var parent = ref.parent;
	        var data = ref.data;
	        data.routerView = true;
	        var h = parent.$createElement;
	        var name = props.name;
	        var route = parent.$route;
	        var cache = parent._routerViewCache || (parent._routerViewCache = {});
	        var depth = 0;
	        var inactive = false;
	        while (parent && parent._routerRoot !== parent) {
	          var vnodeData = parent.$vnode ? parent.$vnode.data : {};
	          if (vnodeData.routerView) {
	            depth++;
	          }
	          if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
	            inactive = true;
	          }
	          parent = parent.$parent;
	        }
	        data.routerViewDepth = depth;
	        if (inactive) {
	          var cachedData = cache[name];
	          var cachedComponent = cachedData && cachedData.component;
	          if (cachedComponent) {
	            if (cachedData.configProps) {
	              fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
	            }
	            return h(cachedComponent, data, children);
	          } else {
	            return h();
	          }
	        }
	        var matched = route.matched[depth];
	        var component = matched && matched.components[name];
	        if (!matched || !component) {
	          cache[name] = null;
	          return h();
	        }
	        cache[name] = {
	          component
	        };
	        data.registerRouteInstance = function(vm, val) {
	          var current = matched.instances[name];
	          if (val && current !== vm || !val && current === vm) {
	            matched.instances[name] = val;
	          }
	        };
	        (data.hook || (data.hook = {})).prepatch = function(_2, vnode) {
	          matched.instances[name] = vnode.componentInstance;
	        };
	        data.hook.init = function(vnode) {
	          if (vnode.data.keepAlive && vnode.componentInstance && vnode.componentInstance !== matched.instances[name]) {
	            matched.instances[name] = vnode.componentInstance;
	          }
	          handleRouteEntered(route);
	        };
	        var configProps = matched.props && matched.props[name];
	        if (configProps) {
	          extend(cache[name], {
	            route,
	            configProps
	          });
	          fillPropsinData(component, data, route, configProps);
	        }
	        return h(component, data, children);
	      }
	    };
	    function fillPropsinData(component, data, route, configProps) {
	      var propsToPass = data.props = resolveProps(route, configProps);
	      if (propsToPass) {
	        propsToPass = data.props = extend({}, propsToPass);
	        var attrs = data.attrs = data.attrs || {};
	        for (var key in propsToPass) {
	          if (!component.props || !(key in component.props)) {
	            attrs[key] = propsToPass[key];
	            delete propsToPass[key];
	          }
	        }
	      }
	    }
	    function resolveProps(route, config) {
	      switch (typeof config) {
	        case "undefined":
	          return;
	        case "object":
	          return config;
	        case "function":
	          return config(route);
	        case "boolean":
	          return config ? route.params : void 0;
	      }
	    }
	    function resolvePath(relative, base, append) {
	      var firstChar = relative.charAt(0);
	      if (firstChar === "/") {
	        return relative;
	      }
	      if (firstChar === "?" || firstChar === "#") {
	        return base + relative;
	      }
	      var stack = base.split("/");
	      if (!append || !stack[stack.length - 1]) {
	        stack.pop();
	      }
	      var segments = relative.replace(/^\//, "").split("/");
	      for (var i = 0; i < segments.length; i++) {
	        var segment = segments[i];
	        if (segment === "..") {
	          stack.pop();
	        } else if (segment !== ".") {
	          stack.push(segment);
	        }
	      }
	      if (stack[0] !== "") {
	        stack.unshift("");
	      }
	      return stack.join("/");
	    }
	    function parsePath(path) {
	      var hash = "";
	      var query = "";
	      var hashIndex = path.indexOf("#");
	      if (hashIndex >= 0) {
	        hash = path.slice(hashIndex);
	        path = path.slice(0, hashIndex);
	      }
	      var queryIndex = path.indexOf("?");
	      if (queryIndex >= 0) {
	        query = path.slice(queryIndex + 1);
	        path = path.slice(0, queryIndex);
	      }
	      return {
	        path,
	        query,
	        hash
	      };
	    }
	    function cleanPath(path) {
	      return path.replace(/\/(?:\s*\/)+/g, "/");
	    }
	    var isarray = Array.isArray || function(arr) {
	      return Object.prototype.toString.call(arr) == "[object Array]";
	    };
	    var pathToRegexp_1 = pathToRegexp;
	    var parse_1 = vue_router_parse;
	    var compile_1 = vue_router_compile;
	    var tokensToFunction_1 = vue_router_tokensToFunction;
	    var tokensToRegExp_1 = tokensToRegExp;
	    var vue_router_PATH_REGEXP = new RegExp([
	      "(\\\\.)",
	      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
	    ].join("|"), "g");
	    function vue_router_parse(str, options) {
	      var tokens = [];
	      var key = 0;
	      var index = 0;
	      var path = "";
	      var defaultDelimiter = options && options.delimiter || "/";
	      var res;
	      while ((res = vue_router_PATH_REGEXP.exec(str)) != null) {
	        var m = res[0];
	        var escaped = res[1];
	        var offset = res.index;
	        path += str.slice(index, offset);
	        index = offset + m.length;
	        if (escaped) {
	          path += escaped[1];
	          continue;
	        }
	        var next = str[index];
	        var prefix = res[2];
	        var name = res[3];
	        var capture = res[4];
	        var group = res[5];
	        var modifier = res[6];
	        var asterisk = res[7];
	        if (path) {
	          tokens.push(path);
	          path = "";
	        }
	        var partial = prefix != null && next != null && next !== prefix;
	        var repeat = modifier === "+" || modifier === "*";
	        var optional = modifier === "?" || modifier === "*";
	        var delimiter = res[2] || defaultDelimiter;
	        var pattern = capture || group;
	        tokens.push({
	          name: name || key++,
	          prefix: prefix || "",
	          delimiter,
	          optional,
	          repeat,
	          partial,
	          asterisk: !!asterisk,
	          pattern: pattern ? vue_router_escapeGroup(pattern) : asterisk ? ".*" : "[^" + vue_router_escapeString(delimiter) + "]+?"
	        });
	      }
	      if (index < str.length) {
	        path += str.substr(index);
	      }
	      if (path) {
	        tokens.push(path);
	      }
	      return tokens;
	    }
	    function vue_router_compile(str, options) {
	      return vue_router_tokensToFunction(vue_router_parse(str, options), options);
	    }
	    function vue_router_encodeURIComponentPretty(str) {
	      return encodeURI(str).replace(/[\/?#]/g, function(c) {
	        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
	      });
	    }
	    function vue_router_encodeAsterisk(str) {
	      return encodeURI(str).replace(/[?#]/g, function(c) {
	        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
	      });
	    }
	    function vue_router_tokensToFunction(tokens, options) {
	      var matches = new Array(tokens.length);
	      for (var i = 0; i < tokens.length; i++) {
	        if (typeof tokens[i] === "object") {
	          matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", vue_router_flags(options));
	        }
	      }
	      return function(obj, opts) {
	        var path = "";
	        var data = obj || {};
	        var options2 = opts || {};
	        var encode2 = options2.pretty ? vue_router_encodeURIComponentPretty : encodeURIComponent;
	        for (var i2 = 0; i2 < tokens.length; i2++) {
	          var token = tokens[i2];
	          if (typeof token === "string") {
	            path += token;
	            continue;
	          }
	          var value = data[token.name];
	          var segment;
	          if (value == null) {
	            if (token.optional) {
	              if (token.partial) {
	                path += token.prefix;
	              }
	              continue;
	            } else {
	              throw new TypeError('Expected "' + token.name + '" to be defined');
	            }
	          }
	          if (isarray(value)) {
	            if (!token.repeat) {
	              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
	            }
	            if (value.length === 0) {
	              if (token.optional) {
	                continue;
	              } else {
	                throw new TypeError('Expected "' + token.name + '" to not be empty');
	              }
	            }
	            for (var j = 0; j < value.length; j++) {
	              segment = encode2(value[j]);
	              if (!matches[i2].test(segment)) {
	                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
	              }
	              path += (j === 0 ? token.prefix : token.delimiter) + segment;
	            }
	            continue;
	          }
	          segment = token.asterisk ? vue_router_encodeAsterisk(value) : encode2(value);
	          if (!matches[i2].test(segment)) {
	            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	          }
	          path += token.prefix + segment;
	        }
	        return path;
	      };
	    }
	    function vue_router_escapeString(str) {
	      return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
	    }
	    function vue_router_escapeGroup(group) {
	      return group.replace(/([=!:$\/()])/g, "\\$1");
	    }
	    function attachKeys(re, keys) {
	      re.keys = keys;
	      return re;
	    }
	    function vue_router_flags(options) {
	      return options && options.sensitive ? "" : "i";
	    }
	    function regexpToRegexp(path, keys) {
	      var groups = path.source.match(/\((?!\?)/g);
	      if (groups) {
	        for (var i = 0; i < groups.length; i++) {
	          keys.push({
	            name: i,
	            prefix: null,
	            delimiter: null,
	            optional: false,
	            repeat: false,
	            partial: false,
	            asterisk: false,
	            pattern: null
	          });
	        }
	      }
	      return attachKeys(path, keys);
	    }
	    function arrayToRegexp(path, keys, options) {
	      var parts = [];
	      for (var i = 0; i < path.length; i++) {
	        parts.push(pathToRegexp(path[i], keys, options).source);
	      }
	      var regexp = new RegExp("(?:" + parts.join("|") + ")", vue_router_flags(options));
	      return attachKeys(regexp, keys);
	    }
	    function stringToRegexp(path, keys, options) {
	      return tokensToRegExp(vue_router_parse(path, options), keys, options);
	    }
	    function tokensToRegExp(tokens, keys, options) {
	      if (!isarray(keys)) {
	        options = keys || options;
	        keys = [];
	      }
	      options = options || {};
	      var strict = options.strict;
	      var end = options.end !== false;
	      var route = "";
	      for (var i = 0; i < tokens.length; i++) {
	        var token = tokens[i];
	        if (typeof token === "string") {
	          route += vue_router_escapeString(token);
	        } else {
	          var prefix = vue_router_escapeString(token.prefix);
	          var capture = "(?:" + token.pattern + ")";
	          keys.push(token);
	          if (token.repeat) {
	            capture += "(?:" + prefix + capture + ")*";
	          }
	          if (token.optional) {
	            if (!token.partial) {
	              capture = "(?:" + prefix + "(" + capture + "))?";
	            } else {
	              capture = prefix + "(" + capture + ")?";
	            }
	          } else {
	            capture = prefix + "(" + capture + ")";
	          }
	          route += capture;
	        }
	      }
	      var delimiter = vue_router_escapeString(options.delimiter || "/");
	      var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
	      if (!strict) {
	        route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
	      }
	      if (end) {
	        route += "$";
	      } else {
	        route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
	      }
	      return attachKeys(new RegExp("^" + route, vue_router_flags(options)), keys);
	    }
	    function pathToRegexp(path, keys, options) {
	      if (!isarray(keys)) {
	        options = keys || options;
	        keys = [];
	      }
	      options = options || {};
	      if (path instanceof RegExp) {
	        return regexpToRegexp(
	          path,
	          keys
	        );
	      }
	      if (isarray(path)) {
	        return arrayToRegexp(
	          path,
	          keys,
	          options
	        );
	      }
	      return stringToRegexp(
	        path,
	        keys,
	        options
	      );
	    }
	    pathToRegexp_1.parse = parse_1;
	    pathToRegexp_1.compile = compile_1;
	    pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	    pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
	    var regexpCompileCache = /* @__PURE__ */ Object.create(null);
	    function fillParams(path, params, routeMsg) {
	      params = params || {};
	      try {
	        var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
	        if (typeof params.pathMatch === "string") {
	          params[0] = params.pathMatch;
	        }
	        return filler(params, {
	          pretty: true
	        });
	      } catch (e) {
	        return "";
	      } finally {
	        delete params[0];
	      }
	    }
	    function normalizeLocation(raw, current, append, router) {
	      var next = typeof raw === "string" ? {
	        path: raw
	      } : raw;
	      if (next._normalized) {
	        return next;
	      } else if (next.name) {
	        next = extend({}, raw);
	        var params = next.params;
	        if (params && typeof params === "object") {
	          next.params = extend({}, params);
	        }
	        return next;
	      }
	      if (!next.path && next.params && current) {
	        next = extend({}, next);
	        next._normalized = true;
	        var params$1 = extend(extend({}, current.params), next.params);
	        if (current.name) {
	          next.name = current.name;
	          next.params = params$1;
	        } else if (current.matched.length) {
	          var rawPath = current.matched[current.matched.length - 1].path;
	          next.path = fillParams(rawPath, params$1, "path " + current.path);
	        } else ;
	        return next;
	      }
	      var parsedPath = parsePath(next.path || "");
	      var basePath = current && current.path || "/";
	      var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;
	      var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);
	      var hash = next.hash || parsedPath.hash;
	      if (hash && hash.charAt(0) !== "#") {
	        hash = "#" + hash;
	      }
	      return {
	        _normalized: true,
	        path,
	        query,
	        hash
	      };
	    }
	    var toTypes = [String, Object];
	    var eventTypes = [String, Array];
	    var noop = function() {
	    };
	    var Link = {
	      name: "RouterLink",
	      props: {
	        to: {
	          type: toTypes,
	          required: true
	        },
	        tag: {
	          type: String,
	          default: "a"
	        },
	        custom: Boolean,
	        exact: Boolean,
	        exactPath: Boolean,
	        append: Boolean,
	        replace: Boolean,
	        activeClass: String,
	        exactActiveClass: String,
	        ariaCurrentValue: {
	          type: String,
	          default: "page"
	        },
	        event: {
	          type: eventTypes,
	          default: "click"
	        }
	      },
	      render: function render2(h) {
	        var this$1$1 = this;
	        var router = this.$router;
	        var current = this.$route;
	        var ref = router.resolve(this.to, current, this.append);
	        var location = ref.location;
	        var route = ref.route;
	        var href = ref.href;
	        var classes = {};
	        var globalActiveClass = router.options.linkActiveClass;
	        var globalExactActiveClass = router.options.linkExactActiveClass;
	        var activeClassFallback = globalActiveClass == null ? "router-link-active" : globalActiveClass;
	        var exactActiveClassFallback = globalExactActiveClass == null ? "router-link-exact-active" : globalExactActiveClass;
	        var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
	        var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
	        var compareTarget = route.redirectedFrom ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router) : route;
	        classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
	        classes[activeClass] = this.exact || this.exactPath ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);
	        var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;
	        var handler = function(e) {
	          if (guardEvent(e)) {
	            if (this$1$1.replace) {
	              router.replace(location, noop);
	            } else {
	              router.push(location, noop);
	            }
	          }
	        };
	        var on = {
	          click: guardEvent
	        };
	        if (Array.isArray(this.event)) {
	          this.event.forEach(function(e) {
	            on[e] = handler;
	          });
	        } else {
	          on[this.event] = handler;
	        }
	        var data = {
	          class: classes
	        };
	        var scopedSlot = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
	          href,
	          route,
	          navigate: handler,
	          isActive: classes[activeClass],
	          isExactActive: classes[exactActiveClass]
	        });
	        if (scopedSlot) {
	          if (scopedSlot.length === 1) {
	            return scopedSlot[0];
	          } else if (scopedSlot.length > 1 || !scopedSlot.length) {
	            return scopedSlot.length === 0 ? h() : h("span", {}, scopedSlot);
	          }
	        }
	        if (this.tag === "a") {
	          data.on = on;
	          data.attrs = {
	            href,
	            "aria-current": ariaCurrentValue
	          };
	        } else {
	          var a = findAnchor(this.$slots.default);
	          if (a) {
	            a.isStatic = false;
	            var aData = a.data = extend({}, a.data);
	            aData.on = aData.on || {};
	            for (var event in aData.on) {
	              var handler$1 = aData.on[event];
	              if (event in on) {
	                aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
	              }
	            }
	            for (var event$1 in on) {
	              if (event$1 in aData.on) {
	                aData.on[event$1].push(on[event$1]);
	              } else {
	                aData.on[event$1] = handler;
	              }
	            }
	            var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	            aAttrs.href = href;
	            aAttrs["aria-current"] = ariaCurrentValue;
	          } else {
	            data.on = on;
	          }
	        }
	        return h(this.tag, data, this.$slots.default);
	      }
	    };
	    function guardEvent(e) {
	      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
	        return;
	      }
	      if (e.defaultPrevented) {
	        return;
	      }
	      if (e.button !== void 0 && e.button !== 0) {
	        return;
	      }
	      if (e.currentTarget && e.currentTarget.getAttribute) {
	        var target = e.currentTarget.getAttribute("target");
	        if (/\b_blank\b/i.test(target)) {
	          return;
	        }
	      }
	      if (e.preventDefault) {
	        e.preventDefault();
	      }
	      return true;
	    }
	    function findAnchor(children) {
	      if (children) {
	        var child;
	        for (var i = 0; i < children.length; i++) {
	          child = children[i];
	          if (child.tag === "a") {
	            return child;
	          }
	          if (child.children && (child = findAnchor(child.children))) {
	            return child;
	          }
	        }
	      }
	    }
	    var _Vue;
	    function install(Vue) {
	      if (install.installed && _Vue === Vue) {
	        return;
	      }
	      install.installed = true;
	      _Vue = Vue;
	      var isDef = function(v) {
	        return v !== void 0;
	      };
	      var registerInstance = function(vm, callVal) {
	        var i = vm.$options._parentVnode;
	        if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	          i(vm, callVal);
	        }
	      };
	      Vue.mixin({
	        beforeCreate: function beforeCreate() {
	          if (isDef(this.$options.router)) {
	            this._routerRoot = this;
	            this._router = this.$options.router;
	            this._router.init(this);
	            Vue.util.defineReactive(this, "_route", this._router.history.current);
	          } else {
	            this._routerRoot = this.$parent && this.$parent._routerRoot || this;
	          }
	          registerInstance(this, this);
	        },
	        destroyed: function destroyed() {
	          registerInstance(this);
	        }
	      });
	      Object.defineProperty(Vue.prototype, "$router", {
	        get: function get() {
	          return this._routerRoot._router;
	        }
	      });
	      Object.defineProperty(Vue.prototype, "$route", {
	        get: function get() {
	          return this._routerRoot._route;
	        }
	      });
	      Vue.component("RouterView", View);
	      Vue.component("RouterLink", Link);
	      var strats = Vue.config.optionMergeStrategies;
	      strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
	    }
	    var inBrowser = false;
	    function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap, parentRoute) {
	      var pathList = oldPathList || [];
	      var pathMap = oldPathMap || /* @__PURE__ */ Object.create(null);
	      var nameMap = oldNameMap || /* @__PURE__ */ Object.create(null);
	      routes.forEach(function(route) {
	        addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
	      });
	      for (var i = 0, l = pathList.length; i < l; i++) {
	        if (pathList[i] === "*") {
	          pathList.push(pathList.splice(i, 1)[0]);
	          l--;
	          i--;
	        }
	      }
	      return {
	        pathList,
	        pathMap,
	        nameMap
	      };
	    }
	    function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
	      var path = route.path;
	      var name = route.name;
	      var pathToRegexpOptions = route.pathToRegexpOptions || {};
	      var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);
	      if (typeof route.caseSensitive === "boolean") {
	        pathToRegexpOptions.sensitive = route.caseSensitive;
	      }
	      var record = {
	        path: normalizedPath,
	        regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
	        components: route.components || {
	          default: route.component
	        },
	        alias: route.alias ? typeof route.alias === "string" ? [route.alias] : route.alias : [],
	        instances: {},
	        enteredCbs: {},
	        name,
	        parent,
	        matchAs,
	        redirect: route.redirect,
	        beforeEnter: route.beforeEnter,
	        meta: route.meta || {},
	        props: route.props == null ? {} : route.components ? route.props : {
	          default: route.props
	        }
	      };
	      if (route.children) {
	        route.children.forEach(function(child) {
	          var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : void 0;
	          addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	        });
	      }
	      if (!pathMap[record.path]) {
	        pathList.push(record.path);
	        pathMap[record.path] = record;
	      }
	      if (route.alias !== void 0) {
	        var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
	        for (var i = 0; i < aliases.length; ++i) {
	          var alias = aliases[i];
	          var aliasRoute = {
	            path: alias,
	            children: route.children
	          };
	          addRouteRecord(
	            pathList,
	            pathMap,
	            nameMap,
	            aliasRoute,
	            parent,
	            record.path || "/"
	          );
	        }
	      }
	      if (name) {
	        if (!nameMap[name]) {
	          nameMap[name] = record;
	        }
	      }
	    }
	    function compileRouteRegex(path, pathToRegexpOptions) {
	      var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
	      return regex;
	    }
	    function normalizePath(path, parent, strict) {
	      if (!strict) {
	        path = path.replace(/\/$/, "");
	      }
	      if (path[0] === "/") {
	        return path;
	      }
	      if (parent == null) {
	        return path;
	      }
	      return cleanPath(parent.path + "/" + path);
	    }
	    function createMatcher(routes, router) {
	      var ref = createRouteMap(routes);
	      var pathList = ref.pathList;
	      var pathMap = ref.pathMap;
	      var nameMap = ref.nameMap;
	      function addRoutes(routes2) {
	        createRouteMap(routes2, pathList, pathMap, nameMap);
	      }
	      function addRoute(parentOrRoute, route) {
	        var parent = typeof parentOrRoute !== "object" ? nameMap[parentOrRoute] : void 0;
	        createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);
	        if (parent && parent.alias.length) {
	          createRouteMap(
	            parent.alias.map(function(alias2) {
	              return {
	                path: alias2,
	                children: [route]
	              };
	            }),
	            pathList,
	            pathMap,
	            nameMap,
	            parent
	          );
	        }
	      }
	      function getRoutes() {
	        return pathList.map(function(path) {
	          return pathMap[path];
	        });
	      }
	      function match(raw, currentRoute, redirectedFrom) {
	        var location = normalizeLocation(raw, currentRoute, false, router);
	        var name = location.name;
	        if (name) {
	          var record = nameMap[name];
	          if (!record) {
	            return _createRoute(null, location);
	          }
	          var paramNames = record.regex.keys.filter(function(key2) {
	            return !key2.optional;
	          }).map(function(key2) {
	            return key2.name;
	          });
	          if (typeof location.params !== "object") {
	            location.params = {};
	          }
	          if (currentRoute && typeof currentRoute.params === "object") {
	            for (var key in currentRoute.params) {
	              if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	                location.params[key] = currentRoute.params[key];
	              }
	            }
	          }
	          location.path = fillParams(record.path, location.params);
	          return _createRoute(record, location, redirectedFrom);
	        } else if (location.path) {
	          location.params = {};
	          for (var i = 0; i < pathList.length; i++) {
	            var path = pathList[i];
	            var record$1 = pathMap[path];
	            if (matchRoute(record$1.regex, location.path, location.params)) {
	              return _createRoute(record$1, location, redirectedFrom);
	            }
	          }
	        }
	        return _createRoute(null, location);
	      }
	      function redirect(record, location) {
	        var originalRedirect = record.redirect;
	        var redirect2 = typeof originalRedirect === "function" ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;
	        if (typeof redirect2 === "string") {
	          redirect2 = {
	            path: redirect2
	          };
	        }
	        if (!redirect2 || typeof redirect2 !== "object") {
	          return _createRoute(null, location);
	        }
	        var re = redirect2;
	        var name = re.name;
	        var path = re.path;
	        var query = location.query;
	        var hash = location.hash;
	        var params = location.params;
	        query = re.hasOwnProperty("query") ? re.query : query;
	        hash = re.hasOwnProperty("hash") ? re.hash : hash;
	        params = re.hasOwnProperty("params") ? re.params : params;
	        if (name) {
	          nameMap[name];
	          return match({
	            _normalized: true,
	            name,
	            query,
	            hash,
	            params
	          }, void 0, location);
	        } else if (path) {
	          var rawPath = resolveRecordPath(path, record);
	          var resolvedPath = fillParams(rawPath, params);
	          return match({
	            _normalized: true,
	            path: resolvedPath,
	            query,
	            hash
	          }, void 0, location);
	        } else {
	          return _createRoute(null, location);
	        }
	      }
	      function alias(record, location, matchAs) {
	        var aliasedPath = fillParams(matchAs, location.params);
	        var aliasedMatch = match({
	          _normalized: true,
	          path: aliasedPath
	        });
	        if (aliasedMatch) {
	          var matched = aliasedMatch.matched;
	          var aliasedRecord = matched[matched.length - 1];
	          location.params = aliasedMatch.params;
	          return _createRoute(aliasedRecord, location);
	        }
	        return _createRoute(null, location);
	      }
	      function _createRoute(record, location, redirectedFrom) {
	        if (record && record.redirect) {
	          return redirect(record, redirectedFrom || location);
	        }
	        if (record && record.matchAs) {
	          return alias(record, location, record.matchAs);
	        }
	        return createRoute(record, location, redirectedFrom, router);
	      }
	      return {
	        match,
	        addRoute,
	        getRoutes,
	        addRoutes
	      };
	    }
	    function matchRoute(regex, path, params) {
	      var m = path.match(regex);
	      if (!m) {
	        return false;
	      } else if (!params) {
	        return true;
	      }
	      for (var i = 1, len = m.length; i < len; ++i) {
	        var key = regex.keys[i - 1];
	        if (key) {
	          params[key.name || "pathMatch"] = typeof m[i] === "string" ? decode(m[i]) : m[i];
	        }
	      }
	      return true;
	    }
	    function resolveRecordPath(path, record) {
	      return resolvePath(path, record.parent ? record.parent.path : "/", true);
	    }
	    var Time = Date;
	    function genStateKey() {
	      return Time.now().toFixed(3);
	    }
	    var _key = genStateKey();
	    function getStateKey() {
	      return _key;
	    }
	    function setStateKey(key) {
	      return _key = key;
	    }
	    var positionStore = /* @__PURE__ */ Object.create(null);
	    function handleScroll(router, to, from, isPop) {
	      if (!router.app) {
	        return;
	      }
	      var behavior = router.options.scrollBehavior;
	      if (!behavior) {
	        return;
	      }
	      router.app.$nextTick(function() {
	        var position = getScrollPosition();
	        var shouldScroll = behavior.call(router, to, from, isPop ? position : null);
	        if (!shouldScroll) {
	          return;
	        }
	        if (typeof shouldScroll.then === "function") {
	          shouldScroll.then(function(shouldScroll2) {
	            scrollToPosition(shouldScroll2, position);
	          }).catch(function(err) {
	          });
	        } else {
	          scrollToPosition(shouldScroll, position);
	        }
	      });
	    }
	    function saveScrollPosition() {
	      var key = getStateKey();
	      if (key) {
	        positionStore[key] = {
	          x: window.pageXOffset,
	          y: window.pageYOffset
	        };
	      }
	    }
	    function getScrollPosition() {
	      var key = getStateKey();
	      if (key) {
	        return positionStore[key];
	      }
	    }
	    function getElementPosition(el, offset) {
	      var docEl = document.documentElement;
	      var docRect = docEl.getBoundingClientRect();
	      var elRect = el.getBoundingClientRect();
	      return {
	        x: elRect.left - docRect.left - offset.x,
	        y: elRect.top - docRect.top - offset.y
	      };
	    }
	    function isValidPosition(obj) {
	      return isNumber(obj.x) || isNumber(obj.y);
	    }
	    function normalizePosition(obj) {
	      return {
	        x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	        y: isNumber(obj.y) ? obj.y : window.pageYOffset
	      };
	    }
	    function normalizeOffset(obj) {
	      return {
	        x: isNumber(obj.x) ? obj.x : 0,
	        y: isNumber(obj.y) ? obj.y : 0
	      };
	    }
	    function isNumber(v) {
	      return typeof v === "number";
	    }
	    var hashStartsWithNumberRE = /^#\d/;
	    function scrollToPosition(shouldScroll, position) {
	      var isObject = typeof shouldScroll === "object";
	      if (isObject && typeof shouldScroll.selector === "string") {
	        var el = hashStartsWithNumberRE.test(shouldScroll.selector) ? document.getElementById(shouldScroll.selector.slice(1)) : document.querySelector(shouldScroll.selector);
	        if (el) {
	          var offset = shouldScroll.offset && typeof shouldScroll.offset === "object" ? shouldScroll.offset : {};
	          offset = normalizeOffset(offset);
	          position = getElementPosition(el, offset);
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll);
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	      if (position) {
	        if ("scrollBehavior" in document.documentElement.style) {
	          window.scrollTo({
	            left: position.x,
	            top: position.y,
	            behavior: shouldScroll.behavior
	          });
	        } else {
	          window.scrollTo(position.x, position.y);
	        }
	      }
	    }
	    var supportsPushState = inBrowser ;
	    function pushState(url, replace) {
	      saveScrollPosition();
	      var history = window.history;
	      try {
	        if (replace) {
	          var stateCopy = extend({}, history.state);
	          stateCopy.key = getStateKey();
	          history.replaceState(stateCopy, "", url);
	        } else {
	          history.pushState({
	            key: setStateKey(genStateKey())
	          }, "", url);
	        }
	      } catch (e) {
	        window.location[replace ? "replace" : "assign"](url);
	      }
	    }
	    function replaceState(url) {
	      pushState(url, true);
	    }
	    var NavigationFailureType = {
	      redirected: 2,
	      aborted: 4,
	      cancelled: 8,
	      duplicated: 16
	    };
	    function createNavigationRedirectedError(from, to) {
	      return createRouterError(from, to, NavigationFailureType.redirected, 'Redirected when going from "' + from.fullPath + '" to "' + stringifyRoute(to) + '" via a navigation guard.');
	    }
	    function createNavigationDuplicatedError(from, to) {
	      var error = createRouterError(from, to, NavigationFailureType.duplicated, 'Avoided redundant navigation to current location: "' + from.fullPath + '".');
	      error.name = "NavigationDuplicated";
	      return error;
	    }
	    function createNavigationCancelledError(from, to) {
	      return createRouterError(from, to, NavigationFailureType.cancelled, 'Navigation cancelled from "' + from.fullPath + '" to "' + to.fullPath + '" with a new navigation.');
	    }
	    function createNavigationAbortedError(from, to) {
	      return createRouterError(from, to, NavigationFailureType.aborted, 'Navigation aborted from "' + from.fullPath + '" to "' + to.fullPath + '" via a navigation guard.');
	    }
	    function createRouterError(from, to, type, message) {
	      var error = new Error(message);
	      error._isRouter = true;
	      error.from = from;
	      error.to = to;
	      error.type = type;
	      return error;
	    }
	    var propertiesToLog = ["params", "query", "hash"];
	    function stringifyRoute(to) {
	      if (typeof to === "string") {
	        return to;
	      }
	      if ("path" in to) {
	        return to.path;
	      }
	      var location = {};
	      propertiesToLog.forEach(function(key) {
	        if (key in to) {
	          location[key] = to[key];
	        }
	      });
	      return JSON.stringify(location, null, 2);
	    }
	    function isError(err) {
	      return Object.prototype.toString.call(err).indexOf("Error") > -1;
	    }
	    function isNavigationFailure(err, errorType) {
	      return isError(err) && err._isRouter && (errorType == null || err.type === errorType);
	    }
	    function runQueue(queue, fn, cb) {
	      var step = function(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          if (queue[index]) {
	            fn(queue[index], function() {
	              step(index + 1);
	            });
	          } else {
	            step(index + 1);
	          }
	        }
	      };
	      step(0);
	    }
	    function resolveAsyncComponents(matched) {
	      return function(to, from, next) {
	        var hasAsync = false;
	        var pending = 0;
	        var error = null;
	        vue_router_flatMapComponents(matched, function(def, _, match, key) {
	          if (typeof def === "function" && def.cid === void 0) {
	            hasAsync = true;
	            pending++;
	            var resolve = once(function(resolvedDef) {
	              if (isESModule(resolvedDef)) {
	                resolvedDef = resolvedDef.default;
	              }
	              def.resolved = typeof resolvedDef === "function" ? resolvedDef : _Vue.extend(resolvedDef);
	              match.components[key] = resolvedDef;
	              pending--;
	              if (pending <= 0) {
	                next();
	              }
	            });
	            var reject = once(function(reason) {
	              var msg = "Failed to resolve async component " + key + ": " + reason;
	              if (!error) {
	                error = isError(reason) ? reason : new Error(msg);
	                next(error);
	              }
	            });
	            var res;
	            try {
	              res = def(resolve, reject);
	            } catch (e) {
	              reject(e);
	            }
	            if (res) {
	              if (typeof res.then === "function") {
	                res.then(resolve, reject);
	              } else {
	                var comp = res.component;
	                if (comp && typeof comp.then === "function") {
	                  comp.then(resolve, reject);
	                }
	              }
	            }
	          }
	        });
	        if (!hasAsync) {
	          next();
	        }
	      };
	    }
	    function vue_router_flatMapComponents(matched, fn) {
	      return flatten(matched.map(function(m) {
	        return Object.keys(m.components).map(function(key) {
	          return fn(m.components[key], m.instances[key], m, key);
	        });
	      }));
	    }
	    function flatten(arr) {
	      return Array.prototype.concat.apply([], arr);
	    }
	    var hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
	    function isESModule(obj) {
	      return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
	    }
	    function once(fn) {
	      var called = false;
	      return function() {
	        var args = [], len = arguments.length;
	        while (len--)
	          args[len] = arguments[len];
	        if (called) {
	          return;
	        }
	        called = true;
	        return fn.apply(this, args);
	      };
	    }
	    var History = function History2(router, base) {
	      this.router = router;
	      this.base = normalizeBase(base);
	      this.current = START;
	      this.pending = null;
	      this.ready = false;
	      this.readyCbs = [];
	      this.readyErrorCbs = [];
	      this.errorCbs = [];
	      this.listeners = [];
	    };
	    History.prototype.listen = function listen(cb) {
	      this.cb = cb;
	    };
	    History.prototype.onReady = function onReady(cb, errorCb) {
	      if (this.ready) {
	        cb();
	      } else {
	        this.readyCbs.push(cb);
	        if (errorCb) {
	          this.readyErrorCbs.push(errorCb);
	        }
	      }
	    };
	    History.prototype.onError = function onError(errorCb) {
	      this.errorCbs.push(errorCb);
	    };
	    History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
	      var this$1$1 = this;
	      var route;
	      try {
	        route = this.router.match(location, this.current);
	      } catch (e) {
	        this.errorCbs.forEach(function(cb) {
	          cb(e);
	        });
	        throw e;
	      }
	      var prev = this.current;
	      this.confirmTransition(route, function() {
	        this$1$1.updateRoute(route);
	        onComplete && onComplete(route);
	        this$1$1.ensureURL();
	        this$1$1.router.afterHooks.forEach(function(hook) {
	          hook && hook(route, prev);
	        });
	        if (!this$1$1.ready) {
	          this$1$1.ready = true;
	          this$1$1.readyCbs.forEach(function(cb) {
	            cb(route);
	          });
	        }
	      }, function(err) {
	        if (onAbort) {
	          onAbort(err);
	        }
	        if (err && !this$1$1.ready) {
	          if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
	            this$1$1.ready = true;
	            this$1$1.readyErrorCbs.forEach(function(cb) {
	              cb(err);
	            });
	          }
	        }
	      });
	    };
	    History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
	      var this$1$1 = this;
	      var current = this.current;
	      this.pending = route;
	      var abort = function(err) {
	        if (!isNavigationFailure(err) && isError(err)) {
	          if (this$1$1.errorCbs.length) {
	            this$1$1.errorCbs.forEach(function(cb) {
	              cb(err);
	            });
	          } else {
	            console.error(err);
	          }
	        }
	        onAbort && onAbort(err);
	      };
	      var lastRouteIndex = route.matched.length - 1;
	      var lastCurrentIndex = current.matched.length - 1;
	      if (isSameRoute(route, current) && lastRouteIndex === lastCurrentIndex && route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]) {
	        this.ensureURL();
	        if (route.hash) {
	          handleScroll(this.router, current, route, false);
	        }
	        return abort(createNavigationDuplicatedError(current, route));
	      }
	      var ref = resolveQueue(this.current.matched, route.matched);
	      var updated = ref.updated;
	      var deactivated = ref.deactivated;
	      var activated = ref.activated;
	      var queue = [].concat(
	        extractLeaveGuards(deactivated),
	        this.router.beforeHooks,
	        extractUpdateHooks(updated),
	        activated.map(function(m) {
	          return m.beforeEnter;
	        }),
	        resolveAsyncComponents(activated)
	      );
	      var iterator = function(hook, next) {
	        if (this$1$1.pending !== route) {
	          return abort(createNavigationCancelledError(current, route));
	        }
	        try {
	          hook(route, current, function(to) {
	            if (to === false) {
	              this$1$1.ensureURL(true);
	              abort(createNavigationAbortedError(current, route));
	            } else if (isError(to)) {
	              this$1$1.ensureURL(true);
	              abort(to);
	            } else if (typeof to === "string" || typeof to === "object" && (typeof to.path === "string" || typeof to.name === "string")) {
	              abort(createNavigationRedirectedError(current, route));
	              if (typeof to === "object" && to.replace) {
	                this$1$1.replace(to);
	              } else {
	                this$1$1.push(to);
	              }
	            } else {
	              next(to);
	            }
	          });
	        } catch (e) {
	          abort(e);
	        }
	      };
	      runQueue(queue, iterator, function() {
	        var enterGuards = extractEnterGuards(activated);
	        var queue2 = enterGuards.concat(this$1$1.router.resolveHooks);
	        runQueue(queue2, iterator, function() {
	          if (this$1$1.pending !== route) {
	            return abort(createNavigationCancelledError(current, route));
	          }
	          this$1$1.pending = null;
	          onComplete(route);
	          if (this$1$1.router.app) {
	            this$1$1.router.app.$nextTick(function() {
	              handleRouteEntered(route);
	            });
	          }
	        });
	      });
	    };
	    History.prototype.updateRoute = function updateRoute(route) {
	      this.current = route;
	      this.cb && this.cb(route);
	    };
	    History.prototype.setupListeners = function setupListeners() {
	    };
	    History.prototype.teardown = function teardown() {
	      this.listeners.forEach(function(cleanupListener) {
	        cleanupListener();
	      });
	      this.listeners = [];
	      this.current = START;
	      this.pending = null;
	    };
	    function normalizeBase(base) {
	      if (!base) {
	        {
	          base = "/";
	        }
	      }
	      if (base.charAt(0) !== "/") {
	        base = "/" + base;
	      }
	      return base.replace(/\/$/, "");
	    }
	    function resolveQueue(current, next) {
	      var i;
	      var max = Math.max(current.length, next.length);
	      for (i = 0; i < max; i++) {
	        if (current[i] !== next[i]) {
	          break;
	        }
	      }
	      return {
	        updated: next.slice(0, i),
	        activated: next.slice(i),
	        deactivated: current.slice(i)
	      };
	    }
	    function extractGuards(records, name, bind, reverse) {
	      var guards = vue_router_flatMapComponents(records, function(def, instance, match, key) {
	        var guard = extractGuard(def, name);
	        if (guard) {
	          return Array.isArray(guard) ? guard.map(function(guard2) {
	            return bind(guard2, instance, match, key);
	          }) : bind(guard, instance, match, key);
	        }
	      });
	      return flatten(reverse ? guards.reverse() : guards);
	    }
	    function extractGuard(def, key) {
	      if (typeof def !== "function") {
	        def = _Vue.extend(def);
	      }
	      return def.options[key];
	    }
	    function extractLeaveGuards(deactivated) {
	      return extractGuards(deactivated, "beforeRouteLeave", bindGuard, true);
	    }
	    function extractUpdateHooks(updated) {
	      return extractGuards(updated, "beforeRouteUpdate", bindGuard);
	    }
	    function bindGuard(guard, instance) {
	      if (instance) {
	        return function boundRouteGuard() {
	          return guard.apply(instance, arguments);
	        };
	      }
	    }
	    function extractEnterGuards(activated) {
	      return extractGuards(activated, "beforeRouteEnter", function(guard, _, match, key) {
	        return bindEnterGuard(guard, match, key);
	      });
	    }
	    function bindEnterGuard(guard, match, key) {
	      return function routeEnterGuard(to, from, next) {
	        return guard(to, from, function(cb) {
	          if (typeof cb === "function") {
	            if (!match.enteredCbs[key]) {
	              match.enteredCbs[key] = [];
	            }
	            match.enteredCbs[key].push(cb);
	          }
	          next(cb);
	        });
	      };
	    }
	    var HTML5History = /* @__PURE__ */ function(History2) {
	      function HTML5History2(router, base) {
	        History2.call(this, router, base);
	        this._startLocation = vue_router_getLocation(this.base);
	      }
	      if (History2)
	        HTML5History2.__proto__ = History2;
	      HTML5History2.prototype = Object.create(History2 && History2.prototype);
	      HTML5History2.prototype.constructor = HTML5History2;
	      HTML5History2.prototype.setupListeners = function setupListeners() {
	        var this$1$1 = this;
	        if (this.listeners.length > 0) {
	          return;
	        }
	        var router = this.router;
	        router.options.scrollBehavior;
	        var handleRoutingEvent = function() {
	          this$1$1.current;
	          var location = vue_router_getLocation(this$1$1.base);
	          if (this$1$1.current === START && location === this$1$1._startLocation) {
	            return;
	          }
	          this$1$1.transitionTo(location, function(route) {
	          });
	        };
	        window.addEventListener("popstate", handleRoutingEvent);
	        this.listeners.push(function() {
	          window.removeEventListener("popstate", handleRoutingEvent);
	        });
	      };
	      HTML5History2.prototype.go = function go(n) {
	        window.history.go(n);
	      };
	      HTML5History2.prototype.push = function push(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        var ref = this;
	        var fromRoute = ref.current;
	        this.transitionTo(location, function(route) {
	          pushState(cleanPath(this$1$1.base + route.fullPath));
	          handleScroll(this$1$1.router, route, fromRoute, false);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      HTML5History2.prototype.replace = function replace(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        var ref = this;
	        var fromRoute = ref.current;
	        this.transitionTo(location, function(route) {
	          replaceState(cleanPath(this$1$1.base + route.fullPath));
	          handleScroll(this$1$1.router, route, fromRoute, false);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      HTML5History2.prototype.ensureURL = function ensureURL(push) {
	        if (vue_router_getLocation(this.base) !== this.current.fullPath) {
	          var current = cleanPath(this.base + this.current.fullPath);
	          push ? pushState(current) : replaceState(current);
	        }
	      };
	      HTML5History2.prototype.getCurrentLocation = function getCurrentLocation() {
	        return vue_router_getLocation(this.base);
	      };
	      return HTML5History2;
	    }(History);
	    function vue_router_getLocation(base) {
	      var path = window.location.pathname;
	      var pathLowerCase = path.toLowerCase();
	      var baseLowerCase = base.toLowerCase();
	      if (base && (pathLowerCase === baseLowerCase || pathLowerCase.indexOf(cleanPath(baseLowerCase + "/")) === 0)) {
	        path = path.slice(base.length);
	      }
	      return (path || "/") + window.location.search + window.location.hash;
	    }
	    var HashHistory = /* @__PURE__ */ function(History2) {
	      function HashHistory2(router, base, fallback) {
	        History2.call(this, router, base);
	        if (fallback && checkFallback(this.base)) {
	          return;
	        }
	        ensureSlash();
	      }
	      if (History2)
	        HashHistory2.__proto__ = History2;
	      HashHistory2.prototype = Object.create(History2 && History2.prototype);
	      HashHistory2.prototype.constructor = HashHistory2;
	      HashHistory2.prototype.setupListeners = function setupListeners() {
	        var this$1$1 = this;
	        if (this.listeners.length > 0) {
	          return;
	        }
	        var router = this.router;
	        router.options.scrollBehavior;
	        var handleRoutingEvent = function() {
	          this$1$1.current;
	          if (!ensureSlash()) {
	            return;
	          }
	          this$1$1.transitionTo(getHash(), function(route) {
	            {
	              replaceHash(route.fullPath);
	            }
	          });
	        };
	        var eventType = "hashchange";
	        window.addEventListener(eventType, handleRoutingEvent);
	        this.listeners.push(function() {
	          window.removeEventListener(eventType, handleRoutingEvent);
	        });
	      };
	      HashHistory2.prototype.push = function push(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        var ref = this;
	        var fromRoute = ref.current;
	        this.transitionTo(location, function(route) {
	          pushHash(route.fullPath);
	          handleScroll(this$1$1.router, route, fromRoute, false);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      HashHistory2.prototype.replace = function replace(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        var ref = this;
	        var fromRoute = ref.current;
	        this.transitionTo(location, function(route) {
	          replaceHash(route.fullPath);
	          handleScroll(this$1$1.router, route, fromRoute, false);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      HashHistory2.prototype.go = function go(n) {
	        window.history.go(n);
	      };
	      HashHistory2.prototype.ensureURL = function ensureURL(push) {
	        var current = this.current.fullPath;
	        if (getHash() !== current) {
	          push ? pushHash(current) : replaceHash(current);
	        }
	      };
	      HashHistory2.prototype.getCurrentLocation = function getCurrentLocation() {
	        return getHash();
	      };
	      return HashHistory2;
	    }(History);
	    function checkFallback(base) {
	      var location = vue_router_getLocation(base);
	      if (!/^\/#/.test(location)) {
	        window.location.replace(cleanPath(base + "/#" + location));
	        return true;
	      }
	    }
	    function ensureSlash() {
	      var path = getHash();
	      if (path.charAt(0) === "/") {
	        return true;
	      }
	      replaceHash("/" + path);
	      return false;
	    }
	    function getHash() {
	      var href = window.location.href;
	      var index = href.indexOf("#");
	      if (index < 0) {
	        return "";
	      }
	      href = href.slice(index + 1);
	      return href;
	    }
	    function getUrl(path) {
	      var href = window.location.href;
	      var i = href.indexOf("#");
	      var base = i >= 0 ? href.slice(0, i) : href;
	      return base + "#" + path;
	    }
	    function pushHash(path) {
	      {
	        window.location.hash = path;
	      }
	    }
	    function replaceHash(path) {
	      {
	        window.location.replace(getUrl(path));
	      }
	    }
	    var AbstractHistory = /* @__PURE__ */ function(History2) {
	      function AbstractHistory2(router, base) {
	        History2.call(this, router, base);
	        this.stack = [];
	        this.index = -1;
	      }
	      if (History2)
	        AbstractHistory2.__proto__ = History2;
	      AbstractHistory2.prototype = Object.create(History2 && History2.prototype);
	      AbstractHistory2.prototype.constructor = AbstractHistory2;
	      AbstractHistory2.prototype.push = function push(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        this.transitionTo(location, function(route) {
	          this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route);
	          this$1$1.index++;
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      AbstractHistory2.prototype.replace = function replace(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        this.transitionTo(location, function(route) {
	          this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      AbstractHistory2.prototype.go = function go(n) {
	        var this$1$1 = this;
	        var targetIndex = this.index + n;
	        if (targetIndex < 0 || targetIndex >= this.stack.length) {
	          return;
	        }
	        var route = this.stack[targetIndex];
	        this.confirmTransition(route, function() {
	          var prev = this$1$1.current;
	          this$1$1.index = targetIndex;
	          this$1$1.updateRoute(route);
	          this$1$1.router.afterHooks.forEach(function(hook) {
	            hook && hook(route, prev);
	          });
	        }, function(err) {
	          if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
	            this$1$1.index = targetIndex;
	          }
	        });
	      };
	      AbstractHistory2.prototype.getCurrentLocation = function getCurrentLocation() {
	        var current = this.stack[this.stack.length - 1];
	        return current ? current.fullPath : "/";
	      };
	      AbstractHistory2.prototype.ensureURL = function ensureURL() {
	      };
	      return AbstractHistory2;
	    }(History);
	    var VueRouter = function VueRouter2(options) {
	      if (options === void 0)
	        options = {};
	      this.app = null;
	      this.apps = [];
	      this.options = options;
	      this.beforeHooks = [];
	      this.resolveHooks = [];
	      this.afterHooks = [];
	      this.matcher = createMatcher(options.routes || [], this);
	      var mode = options.mode || "hash";
	      this.fallback = mode === "history" && !supportsPushState && options.fallback !== false;
	      if (this.fallback) {
	        mode = "hash";
	      }
	      {
	        mode = "abstract";
	      }
	      this.mode = mode;
	      switch (mode) {
	        case "history":
	          this.history = new HTML5History(this, options.base);
	          break;
	        case "hash":
	          this.history = new HashHistory(this, options.base, this.fallback);
	          break;
	        case "abstract":
	          this.history = new AbstractHistory(this, options.base);
	          break;
	      }
	    };
	    var prototypeAccessors = {
	      currentRoute: {
	        configurable: true
	      }
	    };
	    VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
	      return this.matcher.match(raw, current, redirectedFrom);
	    };
	    prototypeAccessors.currentRoute.get = function() {
	      return this.history && this.history.current;
	    };
	    VueRouter.prototype.init = function init(app) {
	      var this$1$1 = this;
	      this.apps.push(app);
	      app.$once("hook:destroyed", function() {
	        var index = this$1$1.apps.indexOf(app);
	        if (index > -1) {
	          this$1$1.apps.splice(index, 1);
	        }
	        if (this$1$1.app === app) {
	          this$1$1.app = this$1$1.apps[0] || null;
	        }
	        if (!this$1$1.app) {
	          this$1$1.history.teardown();
	        }
	      });
	      if (this.app) {
	        return;
	      }
	      this.app = app;
	      var history = this.history;
	      if (history instanceof HTML5History || history instanceof HashHistory) {
	        var handleInitialScroll = function(routeOrError) {
	          history.current;
	          this$1$1.options.scrollBehavior;
	        };
	        var setupListeners = function(routeOrError) {
	          history.setupListeners();
	          handleInitialScroll(routeOrError);
	        };
	        history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
	      }
	      history.listen(function(route) {
	        this$1$1.apps.forEach(function(app2) {
	          app2._route = route;
	        });
	      });
	    };
	    VueRouter.prototype.beforeEach = function beforeEach(fn) {
	      return registerHook(this.beforeHooks, fn);
	    };
	    VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
	      return registerHook(this.resolveHooks, fn);
	    };
	    VueRouter.prototype.afterEach = function afterEach(fn) {
	      return registerHook(this.afterHooks, fn);
	    };
	    VueRouter.prototype.onReady = function onReady(cb, errorCb) {
	      this.history.onReady(cb, errorCb);
	    };
	    VueRouter.prototype.onError = function onError(errorCb) {
	      this.history.onError(errorCb);
	    };
	    VueRouter.prototype.push = function push(location, onComplete, onAbort) {
	      var this$1$1 = this;
	      if (!onComplete && !onAbort && typeof Promise !== "undefined") {
	        return new Promise(function(resolve, reject) {
	          this$1$1.history.push(location, resolve, reject);
	        });
	      } else {
	        this.history.push(location, onComplete, onAbort);
	      }
	    };
	    VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
	      var this$1$1 = this;
	      if (!onComplete && !onAbort && typeof Promise !== "undefined") {
	        return new Promise(function(resolve, reject) {
	          this$1$1.history.replace(location, resolve, reject);
	        });
	      } else {
	        this.history.replace(location, onComplete, onAbort);
	      }
	    };
	    VueRouter.prototype.go = function go(n) {
	      this.history.go(n);
	    };
	    VueRouter.prototype.back = function back() {
	      this.go(-1);
	    };
	    VueRouter.prototype.forward = function forward() {
	      this.go(1);
	    };
	    VueRouter.prototype.getMatchedComponents = function getMatchedComponents2(to) {
	      var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
	      if (!route) {
	        return [];
	      }
	      return [].concat.apply([], route.matched.map(function(m) {
	        return Object.keys(m.components).map(function(key) {
	          return m.components[key];
	        });
	      }));
	    };
	    VueRouter.prototype.resolve = function resolve(to, current, append) {
	      current = current || this.history.current;
	      var location = normalizeLocation(to, current, append, this);
	      var route = this.match(location, current);
	      var fullPath = route.redirectedFrom || route.fullPath;
	      var base = this.history.base;
	      var href = createHref(base, fullPath, this.mode);
	      return {
	        location,
	        route,
	        href,
	        normalizedTo: location,
	        resolved: route
	      };
	    };
	    VueRouter.prototype.getRoutes = function getRoutes() {
	      return this.matcher.getRoutes();
	    };
	    VueRouter.prototype.addRoute = function addRoute(parentOrRoute, route) {
	      this.matcher.addRoute(parentOrRoute, route);
	      if (this.history.current !== START) {
	        this.history.transitionTo(this.history.getCurrentLocation());
	      }
	    };
	    VueRouter.prototype.addRoutes = function addRoutes(routes) {
	      this.matcher.addRoutes(routes);
	      if (this.history.current !== START) {
	        this.history.transitionTo(this.history.getCurrentLocation());
	      }
	    };
	    Object.defineProperties(VueRouter.prototype, prototypeAccessors);
	    var VueRouter$1 = VueRouter;
	    function registerHook(list, fn) {
	      list.push(fn);
	      return function() {
	        var i = list.indexOf(fn);
	        if (i > -1) {
	          list.splice(i, 1);
	        }
	      };
	    }
	    function createHref(base, fullPath, mode) {
	      var path = mode === "hash" ? "#" + fullPath : fullPath;
	      return base ? cleanPath(base + "/" + path) : path;
	    }
	    VueRouter.install = install;
	    VueRouter.version = "3.6.4";
	    VueRouter.isNavigationFailure = isNavigationFailure;
	    VueRouter.NavigationFailureType = NavigationFailureType;
	    VueRouter.START_LOCATION = START;
	    function shouldScrollToTop(route) {
	      const Pages = getMatchedComponents(route);
	      if (Pages.length === 1) {
	        const {
	          options = {}
	        } = Pages[0];
	        return options.scrollToTop !== false;
	      }
	      return Pages.some(({
	        options
	      }) => options && options.scrollToTop);
	    }
	    var router_scrollBehavior = function(to, from, savedPosition) {
	      let position = false;
	      const isRouteChanged = to !== from;
	      if (savedPosition) {
	        position = savedPosition;
	      } else if (isRouteChanged && shouldScrollToTop(to)) {
	        position = {
	          x: 0,
	          y: 0
	        };
	      }
	      const nuxt = window.$nuxt;
	      if (!isRouteChanged || to.path === from.path && to.hash !== from.hash) {
	        nuxt.$nextTick(() => nuxt.$emit("triggerScroll"));
	      }
	      return new Promise((resolve) => {
	        nuxt.$once("triggerScroll", () => {
	          if (to.hash) {
	            let hash = to.hash;
	            if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
	              hash = "#" + window.CSS.escape(hash.substr(1));
	            }
	            try {
	              const el = document.querySelector(hash);
	              if (el) {
	                var _getComputedStyle$scr;
	                position = {
	                  selector: hash
	                };
	                const y = Number((_getComputedStyle$scr = getComputedStyle(el)["scroll-margin-top"]) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace("px", ""));
	                if (y) {
	                  position.offset = {
	                    y
	                  };
	                }
	              }
	            } catch (e) {
	              console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).");
	            }
	          }
	          resolve(position);
	        });
	      });
	    };
	    const _bf5b3cd0 = () => interopDefault(__webpack_require__.e(3).then(__webpack_require__.bind(null, 53)));
	    const emptyFn = () => {
	    };
	    vue_runtime["b"].use(VueRouter$1);
	    const routerOptions = {
	      mode: "history",
	      base: "/",
	      linkActiveClass: "nuxt-link-active",
	      linkExactActiveClass: "nuxt-link-exact-active",
	      scrollBehavior: router_scrollBehavior,
	      routes: [{
	        path: "/",
	        component: _bf5b3cd0,
	        name: "index"
	      }],
	      fallback: false
	    };
	    function createRouter(ssrContext, config) {
	      const base = config._app && config._app.basePath || routerOptions.base;
	      const router = new VueRouter$1({
	        ...routerOptions,
	        base
	      });
	      const originalPush = router.push;
	      router.push = function push(location, onComplete = emptyFn, onAbort) {
	        return originalPush.call(this, location, onComplete, onAbort);
	      };
	      const resolve = router.resolve.bind(router);
	      router.resolve = (to, current, append) => {
	        if (typeof to === "string") {
	          to = Object(external_ufo_["normalizeURL"])(to);
	        }
	        return resolve(to, current, append);
	      };
	      return router;
	    }
	    var nuxt_child = {
	      name: "NuxtChild",
	      functional: true,
	      props: {
	        nuxtChildKey: {
	          type: String,
	          default: ""
	        },
	        keepAlive: Boolean,
	        keepAliveProps: {
	          type: Object,
	          default: void 0
	        }
	      },
	      render(_, {
	        parent,
	        data,
	        props
	      }) {
	        const h = parent.$createElement;
	        data.nuxtChild = true;
	        const _parent = parent;
	        const transitions = parent.$nuxt.nuxt.transitions;
	        const defaultTransition2 = parent.$nuxt.nuxt.defaultTransition;
	        let depth = 0;
	        while (parent) {
	          if (parent.$vnode && parent.$vnode.data.nuxtChild) {
	            depth++;
	          }
	          parent = parent.$parent;
	        }
	        data.nuxtChildDepth = depth;
	        const transition = transitions[depth] || defaultTransition2;
	        const transitionProps = {};
	        transitionsKeys.forEach((key) => {
	          if (typeof transition[key] !== "undefined") {
	            transitionProps[key] = transition[key];
	          }
	        });
	        const listeners = {};
	        listenersKeys.forEach((key) => {
	          if (typeof transition[key] === "function") {
	            listeners[key] = transition[key].bind(_parent);
	          }
	        });
	        if (transition.css === false) {
	          const leave = listeners.leave;
	          if (!leave || leave.length < 2) {
	            listeners.leave = (el, done) => {
	              if (leave) {
	                leave.call(_parent, el);
	              }
	              _parent.$nextTick(done);
	            };
	          }
	        }
	        let routerView = h("routerView", data);
	        if (props.keepAlive) {
	          routerView = h("keep-alive", {
	            props: props.keepAliveProps
	          }, [routerView]);
	        }
	        return h("transition", {
	          props: transitionProps,
	          on: listeners
	        }, [routerView]);
	      }
	    };
	    const transitionsKeys = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"];
	    const listenersKeys = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"];
	    var render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "__nuxt-error-page"
	      }, [_vm._ssrNode('<div class="error">', "</div>", [_vm._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">' + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode('<p class="description">', "</p>", [typeof _vm.$route === "undefined" ? _vm._ssrNode('<a href="/" class="error-link">', "</a>") : _c("NuxtLink", {
	        staticClass: "error-link",
	        attrs: {
	          "to": "/"
	        }
	      }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt</a></div>')], 2)]);
	    };
	    var staticRenderFns = [];
	    var nuxt_errorvue_type_script_lang_js_ = {
	      name: "NuxtError",
	      props: {
	        error: {
	          type: Object,
	          default: null
	        }
	      },
	      computed: {
	        statusCode() {
	          return this.error && this.error.statusCode || 500;
	        },
	        message() {
	          return this.error.message || "Error";
	        }
	      },
	      head() {
	        return {
	          title: this.message,
	          meta: [{
	            name: "viewport",
	            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
	          }]
	        };
	      }
	    };
	    var components_nuxt_errorvue_type_script_lang_js_ = nuxt_errorvue_type_script_lang_js_;
	    var componentNormalizer = __webpack_require__(3);
	    function injectStyles(context) {
	      var style0 = __webpack_require__(40);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var nuxt_error_component = Object(componentNormalizer["a"])(
	      components_nuxt_errorvue_type_script_lang_js_,
	      render,
	      staticRenderFns,
	      false,
	      injectStyles,
	      null,
	      "2fdf788e"
	    );
	    var nuxt_error = nuxt_error_component.exports;
	    var components_nuxt = {
	      name: "Nuxt",
	      components: {
	        NuxtChild: nuxt_child,
	        NuxtError: nuxt_error
	      },
	      props: {
	        nuxtChildKey: {
	          type: String,
	          default: void 0
	        },
	        keepAlive: Boolean,
	        keepAliveProps: {
	          type: Object,
	          default: void 0
	        },
	        name: {
	          type: String,
	          default: "default"
	        }
	      },
	      errorCaptured(error) {
	        if (this.displayingNuxtError) {
	          this.errorFromNuxtError = error;
	          this.$forceUpdate();
	        }
	      },
	      computed: {
	        routerViewKey() {
	          if (typeof this.nuxtChildKey !== "undefined" || this.$route.matched.length > 1) {
	            return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
	          }
	          const [matchedRoute] = this.$route.matched;
	          if (!matchedRoute) {
	            return this.$route.path;
	          }
	          const Component = matchedRoute.components.default;
	          if (Component && Component.options) {
	            const {
	              options
	            } = Component;
	            if (options.key) {
	              return typeof options.key === "function" ? options.key(this.$route) : options.key;
	            }
	          }
	          const strict = /\/$/.test(matchedRoute.path);
	          return strict ? this.$route.path : this.$route.path.replace(/\/$/, "");
	        }
	      },
	      beforeCreate() {
	        vue_runtime["b"].util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
	      },
	      render(h) {
	        if (!this.nuxt.err) {
	          return h("NuxtChild", {
	            key: this.routerViewKey,
	            props: this.$props
	          });
	        }
	        if (this.errorFromNuxtError) {
	          this.$nextTick(() => this.errorFromNuxtError = false);
	          return h("div", {}, [h("h2", "An error occurred while showing the error page"), h("p", "Unfortunately an error occurred and while showing the error page another error occurred"), h("p", `Error details: ${this.errorFromNuxtError.toString()}`), h("nuxt-link", {
	            props: {
	              to: "/"
	            }
	          }, "Go back to home")]);
	        }
	        this.displayingNuxtError = true;
	        this.$nextTick(() => this.displayingNuxtError = false);
	        return h(nuxt_error, {
	          props: {
	            error: this.nuxt.err
	          }
	        });
	      }
	    };
	    var nuxt_loadingvue_type_script_lang_js_ = {
	      name: "NuxtLoading",
	      data() {
	        return {
	          percent: 0,
	          show: false,
	          canSucceed: true,
	          reversed: false,
	          skipTimerCount: 0,
	          rtl: false,
	          throttle: 200,
	          duration: 5e3,
	          continuous: false
	        };
	      },
	      computed: {
	        left() {
	          if (!this.continuous && !this.rtl) {
	            return false;
	          }
	          return this.rtl ? this.reversed ? "0px" : "auto" : !this.reversed ? "0px" : "auto";
	        }
	      },
	      beforeDestroy() {
	        this.clear();
	      },
	      methods: {
	        clear() {
	          clearInterval(this._timer);
	          clearTimeout(this._throttle);
	          this._timer = null;
	        },
	        start() {
	          this.clear();
	          this.percent = 0;
	          this.reversed = false;
	          this.skipTimerCount = 0;
	          this.canSucceed = true;
	          if (this.throttle) {
	            this._throttle = setTimeout(() => this.startTimer(), this.throttle);
	          } else {
	            this.startTimer();
	          }
	          return this;
	        },
	        set(num) {
	          this.show = true;
	          this.canSucceed = true;
	          this.percent = Math.min(100, Math.max(0, Math.floor(num)));
	          return this;
	        },
	        get() {
	          return this.percent;
	        },
	        increase(num) {
	          this.percent = Math.min(100, Math.floor(this.percent + num));
	          return this;
	        },
	        decrease(num) {
	          this.percent = Math.max(0, Math.floor(this.percent - num));
	          return this;
	        },
	        pause() {
	          clearInterval(this._timer);
	          return this;
	        },
	        resume() {
	          this.startTimer();
	          return this;
	        },
	        finish() {
	          this.percent = this.reversed ? 0 : 100;
	          this.hide();
	          return this;
	        },
	        hide() {
	          this.clear();
	          setTimeout(() => {
	            this.show = false;
	            this.$nextTick(() => {
	              this.percent = 0;
	              this.reversed = false;
	            });
	          }, 500);
	          return this;
	        },
	        fail(error) {
	          this.canSucceed = false;
	          return this;
	        },
	        startTimer() {
	          if (!this.show) {
	            this.show = true;
	          }
	          if (typeof this._cut === "undefined") {
	            this._cut = 1e4 / Math.floor(this.duration);
	          }
	          this._timer = setInterval(() => {
	            if (this.skipTimerCount > 0) {
	              this.skipTimerCount--;
	              return;
	            }
	            if (this.reversed) {
	              this.decrease(this._cut);
	            } else {
	              this.increase(this._cut);
	            }
	            if (this.continuous) {
	              if (this.percent >= 100) {
	                this.skipTimerCount = 1;
	                this.reversed = !this.reversed;
	              } else if (this.percent <= 0) {
	                this.skipTimerCount = 1;
	                this.reversed = !this.reversed;
	              }
	            }
	          }, 100);
	        }
	      },
	      render(h) {
	        let el = h(false);
	        if (this.show) {
	          el = h("div", {
	            staticClass: "nuxt-progress",
	            class: {
	              "nuxt-progress-notransition": this.skipTimerCount > 0,
	              "nuxt-progress-failed": !this.canSucceed
	            },
	            style: {
	              width: this.percent + "%",
	              left: this.left
	            }
	          });
	        }
	        return el;
	      }
	    };
	    var components_nuxt_loadingvue_type_script_lang_js_ = nuxt_loadingvue_type_script_lang_js_;
	    var nuxt_loading_render, nuxt_loading_staticRenderFns;
	    function nuxt_loading_injectStyles(context) {
	      var style0 = __webpack_require__(42);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var nuxt_loading_component = Object(componentNormalizer["a"])(
	      components_nuxt_loadingvue_type_script_lang_js_,
	      nuxt_loading_render,
	      nuxt_loading_staticRenderFns,
	      false,
	      nuxt_loading_injectStyles,
	      null,
	      "c93592a6"
	    );
	    var nuxt_loading = nuxt_loading_component.exports;
	    __webpack_require__(44);
	    var defaultvue_type_template_id_0040005c_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("Nuxt");
	    };
	    var defaultvue_type_template_id_0040005c_staticRenderFns = [];
	    var script = {};
	    var default_component = Object(componentNormalizer["a"])(
	      script,
	      defaultvue_type_template_id_0040005c_render,
	      defaultvue_type_template_id_0040005c_staticRenderFns,
	      false,
	      null,
	      null,
	      "6e8e529d"
	    );
	    var layouts_default = default_component.exports;
	    const layouts = {
	      "_default": sanitizeComponent(layouts_default)
	    };
	    var App = {
	      render(h, props) {
	        const loadingEl = h("NuxtLoading", {
	          ref: "loading"
	        });
	        const layoutEl = h(this.layout || "nuxt");
	        const templateEl = h("div", {
	          domProps: {
	            id: "__layout"
	          },
	          key: this.layoutName
	        }, [layoutEl]);
	        const transitionEl = h("transition", {
	          props: {
	            name: "layout",
	            mode: "out-in"
	          },
	          on: {
	            beforeEnter(el) {
	              window.$nuxt.$nextTick(() => {
	                window.$nuxt.$emit("triggerScroll");
	              });
	            }
	          }
	        }, [templateEl]);
	        return h("div", {
	          domProps: {
	            id: "__nuxt"
	          }
	        }, [loadingEl, transitionEl]);
	      },
	      data: () => ({
	        isOnline: true,
	        layout: null,
	        layoutName: "",
	        nbFetching: 0
	      }),
	      beforeCreate() {
	        vue_runtime["b"].util.defineReactive(this, "nuxt", this.$options.nuxt);
	      },
	      created() {
	        this.$root.$options.$nuxt = this;
	        this.error = this.nuxt.error;
	        this.context = this.$options.context;
	      },
	      async mounted() {
	        this.$loading = this.$refs.loading;
	      },
	      watch: {
	        "nuxt.err": "errorChanged"
	      },
	      computed: {
	        isOffline() {
	          return !this.isOnline;
	        },
	        isFetching() {
	          return this.nbFetching > 0;
	        }
	      },
	      methods: {
	        refreshOnlineStatus() {
	        },
	        async refresh() {
	          const pages = getMatchedComponentsInstances(this.$route);
	          if (!pages.length) {
	            return;
	          }
	          this.$loading.start();
	          const promises = pages.map(async (page) => {
	            let p = [];
	            if (page.$options.fetch && page.$options.fetch.length) {
	              p.push(promisify(page.$options.fetch, this.context));
	            }
	            if (page.$options.asyncData) {
	              p.push(promisify(page.$options.asyncData, this.context).then((newData) => {
	                for (const key in newData) {
	                  vue_runtime["b"].set(page.$data, key, newData[key]);
	                }
	              }));
	            }
	            await Promise.all(p);
	            p = [];
	            if (page.$fetch) {
	              p.push(page.$fetch());
	            }
	            for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
	              p.push(component.$fetch());
	            }
	            return Promise.all(p);
	          });
	          try {
	            await Promise.all(promises);
	          } catch (error) {
	            this.$loading.fail(error);
	            globalHandleError(error);
	            this.error(error);
	          }
	          this.$loading.finish();
	        },
	        errorChanged() {
	          if (this.nuxt.err) {
	            if (this.$loading) {
	              if (this.$loading.fail) {
	                this.$loading.fail(this.nuxt.err);
	              }
	              if (this.$loading.finish) {
	                this.$loading.finish();
	              }
	            }
	            let errorLayout = (nuxt_error.options || nuxt_error).layout;
	            if (typeof errorLayout === "function") {
	              errorLayout = errorLayout(this.context);
	            }
	            this.setLayout(errorLayout);
	          }
	        },
	        setLayout(layout) {
	          if (!layout || !layouts["_" + layout]) {
	            layout = "default";
	          }
	          this.layoutName = layout;
	          this.layout = layouts["_" + layout];
	          return this.layout;
	        },
	        loadLayout(layout) {
	          if (!layout || !layouts["_" + layout]) {
	            layout = "default";
	          }
	          return Promise.resolve(layouts["_" + layout]);
	        }
	      },
	      components: {
	        NuxtLoading: nuxt_loading
	      }
	    };
	    const NuxtLogo = () => __webpack_require__.e(1).then(__webpack_require__.bind(null, 54)).then((c) => wrapFunctional(c.default || c));
	    const Tutorial = () => __webpack_require__.e(2).then(__webpack_require__.bind(null, 50)).then((c) => wrapFunctional(c.default || c));
	    function wrapFunctional(options) {
	      if (!options || !options.functional) {
	        return options;
	      }
	      const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
	      return {
	        render(h) {
	          const attrs = {};
	          const props = {};
	          for (const key in this.$attrs) {
	            if (propKeys.includes(key)) {
	              props[key] = this.$attrs[key];
	            } else {
	              attrs[key] = this.$attrs[key];
	            }
	          }
	          return h(options, {
	            on: this.$listeners,
	            attrs,
	            props,
	            scopedSlots: this.$scopedSlots
	          }, this.$slots.default);
	        }
	      };
	    }
	    for (const name in components_namespaceObject) {
	      vue_runtime["b"].component(name, components_namespaceObject[name]);
	      vue_runtime["b"].component("Lazy" + name, components_namespaceObject[name]);
	    }
	    var external_hookable_ = __webpack_require__(17);
	    __webpack_require__(7);
	    var external_defu_ = __webpack_require__(4);
	    var external_defu_default = /* @__PURE__ */ __webpack_require__.n(external_defu_);
	    __webpack_require__(19);
	    __webpack_require__(2);
	    __webpack_require__(8);
	    vue_runtime["c"];
	    function callWithNuxt(nuxt, setup, args) {
	      const p = args ? setup(...args) : setup();
	      return p;
	    }
	    function defineNuxtPlugin(plugin) {
	      return async (ctx, inject) => {
	        const result = await callWithNuxt(ctx.$_nuxtApp, plugin, [ctx.$_nuxtApp]);
	        if (result && result.provide) {
	          for (const key in result.provide) {
	            inject(key, result.provide[key]);
	          }
	        }
	        return result;
	      };
	    }
	    function proxiedState(state) {
	      state._asyncData = state._asyncData || {};
	      state._errors = state._errors || {};
	      return new Proxy(state, {
	        get(target, prop) {
	          if (prop === "data") {
	            return target._asyncData;
	          }
	          if (prop === "_data") {
	            return target.state;
	          }
	          return Reflect.get(target, prop);
	        }
	      });
	    }
	    const runOnceWith = (obj, fn) => {
	      if (!obj || !["function", "object"].includes(typeof obj)) {
	        return fn();
	      }
	      if (obj.__nuxt_installed) {
	        return;
	      }
	      obj.__nuxt_installed = true;
	      return fn();
	    };
	    var app_plugin = async (ctx, inject) => {
	      const nuxtApp = {
	        vueApp: {
	          component: (id, definition) => runOnceWith(definition, () => vue_runtime["b"].component(id, definition)),
	          config: {
	            globalProperties: {}
	          },
	          directive: (id, definition) => runOnceWith(definition, () => vue_runtime["b"].directive(id, definition)),
	          mixin: (mixin) => runOnceWith(mixin, () => vue_runtime["b"].mixin(mixin)),
	          mount: () => {
	          },
	          provide: inject,
	          unmount: () => {
	          },
	          use(vuePlugin) {
	            runOnceWith(vuePlugin, () => vuePlugin.install(this));
	          },
	          version: vue_runtime["b"].version
	        },
	        provide: inject,
	        globalName: "nuxt",
	        payload: proxiedState(ctx.ssrContext.nuxt),
	        _asyncDataPromises: [],
	        isHydrating: true,
	        nuxt2Context: ctx
	      };
	      nuxtApp.hooks = Object(external_hookable_["createHooks"])();
	      nuxtApp.hook = nuxtApp.hooks.hook;
	      nuxtApp.callHook = nuxtApp.hooks.callHook;
	      const middleware = await Promise.resolve().then(__webpack_require__.bind(null, 5)).then((r) => r.default);
	      nuxtApp._middleware = nuxtApp._middleware || {
	        global: [],
	        named: middleware
	      };
	      ctx.app.router.beforeEach(async (to, from, next) => {
	        nuxtApp._processingMiddleware = true;
	        for (const middleware2 of nuxtApp._middleware.global) {
	          const result = await callWithNuxt(nuxtApp, middleware2, [to, from]);
	          if (result || result === false) {
	            return next(result);
	          }
	        }
	        next();
	      });
	      ctx.app.router.afterEach(() => {
	        delete nuxtApp._processingMiddleware;
	      });
	      if (!Array.isArray(ctx.app.created)) {
	        ctx.app.created = [ctx.app.created].filter(Boolean);
	      }
	      if (!Array.isArray(ctx.app.mounted)) {
	        ctx.app.mounted = [ctx.app.mounted].filter(Boolean);
	      }
	      {
	        nuxtApp.ssrContext = ctx.ssrContext;
	      }
	      ctx.app.created.push(function() {
	        nuxtApp.vue2App = this;
	      });
	      ctx.app.mounted.push(() => {
	        nuxtApp.isHydrating = false;
	      });
	      const proxiedApp = new Proxy(nuxtApp, {
	        get(target, prop) {
	          if (prop[0] === "$") {
	            var _target$vue2App;
	            return target.nuxt2Context[prop] || ((_target$vue2App = target.vue2App) === null || _target$vue2App === void 0 ? void 0 : _target$vue2App[prop]);
	          }
	          return Reflect.get(target, prop);
	        }
	      });
	      inject("_nuxtApp", proxiedApp);
	    };
	    const vueMetaRenderer = (nuxt) => {
	      const meta = nuxt.ssrContext.meta.inject({
	        isSSR: nuxt.ssrContext.nuxt.serverRendered,
	        ln: false
	      });
	      return {
	        htmlAttrs: meta.htmlAttrs.text(),
	        headAttrs: meta.headAttrs.text(),
	        headTags: meta.title.text() + meta.base.text() + meta.meta.text() + meta.link.text() + meta.style.text() + meta.script.text() + meta.noscript.text(),
	        bodyAttrs: meta.bodyAttrs.text(),
	        bodyScriptsPrepend: meta.meta.text({
	          pbody: true
	        }) + meta.link.text({
	          pbody: true
	        }) + meta.style.text({
	          pbody: true
	        }) + meta.script.text({
	          pbody: true
	        }) + meta.noscript.text({
	          pbody: true
	        }),
	        bodyScripts: meta.meta.text({
	          body: true
	        }) + meta.link.text({
	          body: true
	        }) + meta.style.text({
	          body: true
	        }) + meta.script.text({
	          body: true
	        }) + meta.noscript.text({
	          body: true
	        })
	      };
	    };
	    var nitro_bridge_server = defineNuxtPlugin((nuxtApp) => {
	      const metaRenderers = [vueMetaRenderer];
	      nuxtApp.callHook("meta:register", metaRenderers);
	      nuxtApp.ssrContext.renderMeta = async () => {
	        const metadata = {
	          htmlAttrs: "",
	          headAttrs: "",
	          headTags: "",
	          bodyAttrs: "",
	          bodyScriptsPrepend: "",
	          bodyScripts: ""
	        };
	        for await (const renderer of metaRenderers) {
	          const result = await renderer(nuxtApp);
	          for (const key in result) {
	            metadata[key] += result[key];
	          }
	        }
	        return metadata;
	      };
	    });
	    __webpack_require__(47);
	    var external_axios_ = __webpack_require__(6);
	    var external_axios_default = /* @__PURE__ */ __webpack_require__.n(external_axios_);
	    const axiosExtra = {
	      setBaseURL(baseURL) {
	        this.defaults.baseURL = baseURL;
	      },
	      setHeader(name, value, scopes = "common") {
	        for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
	          if (!value) {
	            delete this.defaults.headers[scope][name];
	            continue;
	          }
	          this.defaults.headers[scope][name] = value;
	        }
	      },
	      setToken(token, type, scopes = "common") {
	        const value = !token ? null : (type ? type + " " : "") + token;
	        this.setHeader("Authorization", value, scopes);
	      },
	      onRequest(fn) {
	        this.interceptors.request.use((config) => fn(config) || config);
	      },
	      onResponse(fn) {
	        this.interceptors.response.use((response) => fn(response) || response);
	      },
	      onRequestError(fn) {
	        this.interceptors.request.use(void 0, (error) => fn(error) || Promise.reject(error));
	      },
	      onResponseError(fn) {
	        this.interceptors.response.use(void 0, (error) => fn(error) || Promise.reject(error));
	      },
	      onError(fn) {
	        this.onRequestError(fn);
	        this.onResponseError(fn);
	      },
	      create(options) {
	        return createAxiosInstance(external_defu_default()(options, this.defaults));
	      }
	    };
	    for (const method of ["request", "delete", "get", "head", "options", "post", "put", "patch"]) {
	      axiosExtra["$" + method] = function() {
	        return this[method].apply(this, arguments).then((res) => res && res.data);
	      };
	    }
	    const extendAxiosInstance = (axios) => {
	      for (const key in axiosExtra) {
	        axios[key] = axiosExtra[key].bind(axios);
	      }
	    };
	    const createAxiosInstance = (axiosOptions) => {
	      const axios = external_axios_default.a.create(axiosOptions);
	      axios.CancelToken = external_axios_default.a.CancelToken;
	      axios.isCancel = external_axios_default.a.isCancel;
	      extendAxiosInstance(axios);
	      axios.onRequest((config) => {
	        config.headers = {
	          ...axios.defaults.headers.common,
	          ...config.headers
	        };
	      });
	      return axios;
	    };
	    var _nuxt_axios = (ctx, inject) => {
	      const runtimeConfig = ctx.$config && ctx.$config.axios || {};
	      const baseURL = runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || "/";
	      const headers = {
	        "common": {
	          "Accept": "application/json, text/plain, */*"
	        },
	        "delete": {},
	        "get": {},
	        "head": {},
	        "post": {},
	        "put": {},
	        "patch": {}
	      };
	      const axiosOptions = {
	        baseURL,
	        headers
	      };
	      if (ctx.req && ctx.req.headers) {
	        const reqHeaders = {
	          ...ctx.req.headers
	        };
	        for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
	          delete reqHeaders[h];
	        }
	        axiosOptions.headers.common = {
	          ...reqHeaders,
	          ...axiosOptions.headers.common
	        };
	      }
	      {
	        axiosOptions.headers.common["accept-encoding"] = "gzip, deflate";
	      }
	      const axios = createAxiosInstance(axiosOptions);
	      ctx.$axios = axios;
	      inject("axios", axios);
	    };
	    var capi_plugin = defineNuxtPlugin((nuxtApp) => {
	      const _originalSetup = nuxtApp.nuxt2Context.app.setup;
	      nuxtApp.nuxt2Context.app.setup = function(...args) {
	        const result = _originalSetup instanceof Function ? _originalSetup(...args) : {};
	        nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
	        return result;
	      };
	    });
	    var error_plugin_server = (ctx) => {
	      if (ctx.ssrContext.error) {
	        ctx.error(ctx.ssrContext.error);
	      }
	    };
	    vue_runtime["b"].component(vue_client_only_common_default.a.name, vue_client_only_common_default.a);
	    vue_runtime["b"].component(vue_no_ssr_common_default.a.name, {
	      ...vue_no_ssr_common_default.a,
	      render(h, ctx) {
	        return vue_no_ssr_common_default.a.render(h, ctx);
	      }
	    });
	    vue_runtime["b"].component(nuxt_child.name, nuxt_child);
	    vue_runtime["b"].component("NChild", nuxt_child);
	    vue_runtime["b"].component(components_nuxt.name, components_nuxt);
	    Object.defineProperty(vue_runtime["b"].prototype, "$nuxt", {
	      get() {
	        const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
	        return globalNuxt;
	      },
	      configurable: true
	    });
	    vue_runtime["b"].use(vue_meta_common_default.a, {
	      "keyName": "head",
	      "attribute": "data-n-head",
	      "ssrAttribute": "data-n-head-ssr",
	      "tagIDKeyName": "hid"
	    });
	    const defaultTransition = {
	      "name": "page",
	      "mode": "out-in",
	      "appear": false,
	      "appearClass": "appear",
	      "appearActiveClass": "appear-active",
	      "appearToClass": "appear-to"
	    };
	    async function createApp(ssrContext, config = {}) {
	      const router = await createRouter(ssrContext, config);
	      const app = {
	        head: {
	          "title": "nuxt-ok-nuxt-jai",
	          "htmlAttrs": {
	            "lang": "en"
	          },
	          "meta": [{
	            "charset": "utf-8"
	          }, {
	            "name": "viewport",
	            "content": "width=device-width, initial-scale=1"
	          }, {
	            "hid": "description",
	            "name": "description",
	            "content": ""
	          }, {
	            "name": "format-detection",
	            "content": "telephone=no"
	          }],
	          "link": [{
	            "rel": "icon",
	            "type": "image/x-icon",
	            "href": "/favicon.ico"
	          }],
	          "style": [],
	          "script": []
	        },
	        router,
	        nuxt: {
	          defaultTransition,
	          transitions: [defaultTransition],
	          setTransitions(transitions) {
	            if (!Array.isArray(transitions)) {
	              transitions = [transitions];
	            }
	            transitions = transitions.map((transition) => {
	              if (!transition) {
	                transition = defaultTransition;
	              } else if (typeof transition === "string") {
	                transition = Object.assign({}, defaultTransition, {
	                  name: transition
	                });
	              } else {
	                transition = Object.assign({}, defaultTransition, transition);
	              }
	              return transition;
	            });
	            this.$options.nuxt.transitions = transitions;
	            return transitions;
	          },
	          err: null,
	          dateErr: null,
	          error(err) {
	            err = err || null;
	            app.context._errored = Boolean(err);
	            err = err ? normalizeError(err) : null;
	            let nuxt = app.nuxt;
	            if (this) {
	              nuxt = this.nuxt || this.$options.nuxt;
	            }
	            nuxt.dateErr = Date.now();
	            nuxt.err = err;
	            if (ssrContext) {
	              ssrContext.nuxt.error = err;
	            }
	            return err;
	          }
	        },
	        ...App
	      };
	      const next = ssrContext ? ssrContext.next : (location) => app.router.push(location);
	      let route;
	      if (ssrContext) {
	        route = router.resolve(ssrContext.url).route;
	      } else {
	        const path = getLocation(router.options.base, router.options.mode);
	        route = router.resolve(path).route;
	      }
	      await setContext(app, {
	        route,
	        next,
	        error: app.nuxt.error.bind(app),
	        payload: ssrContext ? ssrContext.payload : void 0,
	        req: ssrContext ? ssrContext.req : void 0,
	        res: ssrContext ? ssrContext.res : void 0,
	        beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : void 0,
	        beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : void 0,
	        ssrContext
	      });
	      function inject(key, value) {
	        if (!key) {
	          throw new Error("inject(key, value) has no key provided");
	        }
	        if (value === void 0) {
	          throw new Error(`inject('${key}', value) has no value provided`);
	        }
	        key = "$" + key;
	        app[key] = value;
	        if (!app.context[key]) {
	          app.context[key] = value;
	        }
	        const installKey = "__nuxt_" + key + "_installed__";
	        if (vue_runtime["b"][installKey]) {
	          return;
	        }
	        vue_runtime["b"][installKey] = true;
	        vue_runtime["b"].use(() => {
	          if (!Object.prototype.hasOwnProperty.call(vue_runtime["b"].prototype, key)) {
	            Object.defineProperty(vue_runtime["b"].prototype, key, {
	              get() {
	                return this.$root.$options[key];
	              }
	            });
	          }
	        });
	      }
	      inject("config", config);
	      if (typeof app_plugin === "function") {
	        await app_plugin(app.context, inject);
	      }
	      if (typeof nitro_bridge_server === "function") {
	        await nitro_bridge_server(app.context, inject);
	      }
	      if (typeof _nuxt_axios === "function") {
	        await _nuxt_axios(app.context, inject);
	      }
	      if (typeof capi_plugin === "function") {
	        await capi_plugin(app.context, inject);
	      }
	      if (typeof error_plugin_server === "function") {
	        await error_plugin_server(app.context);
	      }
	      await new Promise((resolve, reject) => {
	        router.replace(app.context.route.fullPath, resolve, (err) => {
	          if (!err._isRouter)
	            return reject(err);
	          if (err.type !== 2)
	            return resolve();
	          const unregister = router.afterEach(async (to, from) => {
	            if (ssrContext && ssrContext.url) {
	              ssrContext.url = to.fullPath;
	            }
	            app.context.route = await getRouteData(to);
	            app.context.params = to.params || {};
	            app.context.query = to.query || {};
	            unregister();
	            resolve();
	          });
	        });
	      });
	      return {
	        app,
	        router
	      };
	    }
	    var nuxt_link_server = {
	      name: "NuxtLink",
	      extends: vue_runtime["b"].component("RouterLink"),
	      props: {
	        prefetch: {
	          type: Boolean,
	          default: true
	        },
	        noPrefetch: {
	          type: Boolean,
	          default: false
	        }
	      }
	    };
	    vue_runtime["b"].config.optionMergeStrategies.serverPrefetch = vue_runtime["b"].config.optionMergeStrategies.created;
	    if (!vue_runtime["b"].__nuxt__fetch__mixin__) {
	      vue_runtime["b"].mixin(fetch_server);
	      vue_runtime["b"].__nuxt__fetch__mixin__ = true;
	    }
	    vue_runtime["b"].component(nuxt_link_server.name, nuxt_link_server);
	    vue_runtime["b"].component("NLink", nuxt_link_server);
	    const noopApp = () => new vue_runtime["b"]({
	      render: (h) => h("div", {
	        domProps: {
	          id: "__nuxt"
	        }
	      })
	    });
	    const createNext = (ssrContext) => (opts) => {
	      ssrContext.redirected = opts;
	      if (ssrContext.target === "static" || !ssrContext.res) {
	        ssrContext.nuxt.serverRendered = false;
	        return;
	      }
	      let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
	      const $config = ssrContext.nuxt.config || {};
	      const routerBase = $config._app && $config._app.basePath || "/";
	      if (!fullPath.startsWith("http") && routerBase !== "/" && !fullPath.startsWith(routerBase)) {
	        fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
	      }
	      if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
	        ssrContext.redirected = false;
	        return;
	      }
	      ssrContext.res.writeHead(opts.status, {
	        Location: Object(external_ufo_["normalizeURL"])(fullPath)
	      });
	      ssrContext.res.end();
	    };
	    __webpack_exports__["default"] = async (ssrContext) => {
	      ssrContext.redirected = false;
	      ssrContext.next = createNext(ssrContext);
	      ssrContext.beforeRenderFns = [];
	      ssrContext.beforeSerializeFns = [];
	      ssrContext.nuxt = {
	        layout: "default",
	        data: [],
	        fetch: {},
	        error: null,
	        serverRendered: true,
	        routePath: ""
	      };
	      ssrContext.fetchCounters = {};
	      ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
	      if (ssrContext.nuxt.config._app) {
	        __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
	      }
	      const {
	        app,
	        router
	      } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
	      const _app = new vue_runtime["b"](app);
	      ssrContext.nuxt.routePath = app.context.route.path;
	      ssrContext.meta = _app.$meta();
	      ssrContext.asyncData = {};
	      const beforeRender = async () => {
	        await Promise.all(ssrContext.beforeRenderFns.map((fn) => promisify(fn, {
	          Components,
	          nuxtState: ssrContext.nuxt
	        })));
	        ssrContext.rendered = () => {
	          ssrContext.beforeSerializeFns.forEach((fn) => fn(ssrContext.nuxt));
	        };
	      };
	      const renderErrorPage = async () => {
	        if (ssrContext.target === "static") {
	          ssrContext.nuxt.serverRendered = false;
	        }
	        const layout2 = (nuxt_error.options || nuxt_error).layout;
	        const errLayout = typeof layout2 === "function" ? layout2.call(nuxt_error, app.context) : layout2;
	        ssrContext.nuxt.layout = errLayout || "default";
	        await _app.loadLayout(errLayout);
	        _app.setLayout(errLayout);
	        await beforeRender();
	        return _app;
	      };
	      const render404Page = () => {
	        app.context.error({
	          statusCode: 404,
	          path: ssrContext.url,
	          message: "This page could not be found"
	        });
	        return renderErrorPage();
	      };
	      const Components = getMatchedComponents(app.context.route);
	      let midd = [];
	      midd = midd.map((name) => {
	        if (typeof name === "function") {
	          return name;
	        }
	        if (typeof _nuxt_middleware["default"][name] !== "function") {
	          app.context.error({
	            statusCode: 500,
	            message: "Unknown middleware " + name
	          });
	        }
	        return _nuxt_middleware["default"][name];
	      });
	      await middlewareSeries(midd, app.context);
	      if (ssrContext.redirected) {
	        return noopApp();
	      }
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
	      if (typeof layout === "function") {
	        layout = layout(app.context);
	      }
	      await _app.loadLayout(layout);
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      layout = _app.setLayout(layout);
	      ssrContext.nuxt.layout = _app.layoutName;
	      midd = [];
	      layout = sanitizeComponent(layout);
	      if (layout.options.middleware) {
	        midd = midd.concat(layout.options.middleware);
	      }
	      Components.forEach((Component) => {
	        if (Component.options.middleware) {
	          midd = midd.concat(Component.options.middleware);
	        }
	      });
	      midd = midd.map((name) => {
	        if (typeof name === "function") {
	          return name;
	        }
	        if (typeof _nuxt_middleware["default"][name] !== "function") {
	          app.context.error({
	            statusCode: 500,
	            message: "Unknown middleware " + name
	          });
	        }
	        return _nuxt_middleware["default"][name];
	      });
	      await middlewareSeries(midd, app.context);
	      if (ssrContext.redirected) {
	        return noopApp();
	      }
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      let isValid = true;
	      try {
	        for (const Component of Components) {
	          if (typeof Component.options.validate !== "function") {
	            continue;
	          }
	          isValid = await Component.options.validate(app.context);
	          if (!isValid) {
	            break;
	          }
	        }
	      } catch (validationError) {
	        app.context.error({
	          statusCode: validationError.statusCode || "500",
	          message: validationError.message
	        });
	        return renderErrorPage();
	      }
	      if (!isValid) {
	        return render404Page();
	      }
	      if (!Components.length) {
	        return render404Page();
	      }
	      const asyncDatas = await Promise.all(Components.map((Component) => {
	        const promises = [];
	        if (Component.options.asyncData && typeof Component.options.asyncData === "function") {
	          const promise = promisify(Component.options.asyncData, app.context);
	          promise.then((asyncDataResult) => {
	            ssrContext.asyncData[Component.cid] = asyncDataResult;
	            applyAsyncData(Component);
	            return asyncDataResult;
	          });
	          promises.push(promise);
	        } else {
	          promises.push(null);
	        }
	        if (Component.options.fetch && Component.options.fetch.length) {
	          promises.push(Component.options.fetch(app.context));
	        } else {
	          promises.push(null);
	        }
	        return Promise.all(promises);
	      }));
	      ssrContext.nuxt.data = asyncDatas.map((r) => r[0] || {});
	      if (ssrContext.redirected) {
	        return noopApp();
	      }
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      await beforeRender();
	      return _app;
	    };
	  }
	]);
} (server$1));

(function (module) {
	module.exports = server$1.exports;
} (server$2));

const server = /*@__PURE__*/getDefaultExportFromCjs(server$2.exports);

export { server as default };
//# sourceMappingURL=server.mjs.map
