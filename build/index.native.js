// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/tmui/index"] = factory();
	else
		root["npm/tmui/index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TmPersonage = undefined;

var _personage = __webpack_require__(0);

var _personage2 = _interopRequireDefault(_personage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TmPersonage = _personage2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex\\thmui\\packages\\personage\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-66dcbf8a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      demolist: []
    };
  },
  mounted: function mounted() {},

  methods: {
    gorouter: function gorouter(item) {
      this.$emit("itemClick", item);
    }
  },
  props: ["demolist"]
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "flexbox": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "paddingBottom": "50"
  },
  "flexitem": {
    "width": "300",
    "marginLeft": "50",
    "marginTop": "50",
    "backgroundColor": "#ffffff",
    "position": "relative",
    "paddingBottom": "10"
  },
  "typebox": {
    "position": "absolute",
    "left": "0",
    "top": "20",
    "height": "80",
    "width": "8"
  },
  "type1": {
    "backgroundColor": "rgb(250,50,50)"
  },
  "type2": {
    "backgroundColor": "rgb(50,250,50)"
  },
  "type3": {
    "backgroundColor": "rgb(50,50,250)"
  },
  "type4": {
    "backgroundColor": "rgb(150,50,250)"
  },
  "count": {
    "position": "absolute",
    "left": "15",
    "top": "35",
    "fontSize": "40",
    "width": "80",
    "textAlign": "center"
  },
  "name": {
    "position": "absolute",
    "left": "100",
    "top": "24",
    "fontSize": "30"
  },
  "sexage": {
    "position": "absolute",
    "left": "100",
    "top": "68",
    "fontSize": "24",
    "color": "#888888"
  },
  "righttips": {
    "position": "absolute",
    "right": "15",
    "top": "66",
    "color": "#888888",
    "borderStyle": "solid",
    "borderColor": "#888888",
    "borderWidth": "1",
    "borderRadius": "15",
    "paddingTop": "5",
    "paddingBottom": "5",
    "fontSize": "20",
    "width": "70",
    "textAlign": "center"
  },
  "isdamge": {
    "backgroundColor": "#ffaf1c",
    "color": "#ffffff",
    "borderColor": "#ffaf1c"
  },
  "itembottom": {
    "borderTopColor": "#e3e3e3",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "position": "relative",
    "top": "0",
    "left": "10",
    "width": "280",
    "paddingTop": "10",
    "marginTop": "120"
  },
  "labelbox": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between",
    "marginTop": "15",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "label": {
    "color": "#999999",
    "fontSize": "26"
  },
  "value": {
    "color": "#333333",
    "fontSize": "26"
  },
  "day": {
    "color": "#333333",
    "fontSize": "26",
    "marginTop": "20",
    "paddingLeft": "10"
  },
  "iscritical": {
    "borderTopColor": "#e3e3e3",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "width": "280",
    "height": "60",
    "paddingTop": "10",
    "marginTop": "10"
  },
  "critical": {
    "backgroundColor": "rgb(250,50,50)",
    "color": "#ffffff",
    "textAlign": "center",
    "width": "280",
    "fontSize": "28",
    "paddingTop": "10",
    "paddingBottom": "10",
    "lineHeight": "28"
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flexbox"]
  }, _vm._l((_vm.demolist), function(i) {
    return _c('div', {
      staticClass: ["flexitem"],
      on: {
        "click": function($event) {
          _vm.gorouter(i)
        }
      }
    }, [_c('div', {
      class: [i.type === 1 ? 'type1' : '', i.type === 2 ? 'type2' : '', i.type === 3 ? 'type3' : '', i.type === 4 ? 'type4' : '', 'typebox']
    }), _c('text', {
      staticClass: ["count"]
    }, [_vm._v(_vm._s(i.count))]), _c('text', {
      staticClass: ["name"]
    }, [_vm._v(_vm._s(i.name))]), _c('text', {
      staticClass: ["sexage"]
    }, [_vm._v(_vm._s(("" + (i.sex==1?'男':'女'))) + " " + _vm._s(i.age) + "岁")]), _c('text', {
      class: ['righttips', i.isdamge ? 'isdamge' : '']
    }, [_vm._v(_vm._s(("" + (i.isdamge?'重':'一般'))))]), _c('div', {
      staticClass: ["itembottom"]
    }, [_c('div', {
      staticClass: ["labelbox"]
    }, [_c('text', {
      staticClass: ["label"]
    }, [_vm._v("住院号")]), _c('text', {
      staticClass: ["value"]
    }, [_vm._v(_vm._s(i.number))])]), _c('div', {
      staticClass: ["labelbox"]
    }, [_c('text', {
      staticClass: ["label"]
    }, [_vm._v("费别")]), _c('text', {
      staticClass: ["value"]
    }, [_vm._v(_vm._s(("" + (i.payway==1?'自费':'市医保'))))])]), _c('div', {
      staticClass: ["labelbox"]
    }, [_c('text', {
      staticClass: ["label"]
    }, [_vm._v("余额")]), _c('text', {
      staticClass: ["value"]
    }, [_vm._v(_vm._s(i.pay))])]), _c('div', {
      staticClass: ["labelbox"]
    }, [_c('text', {
      staticClass: ["label"]
    }, [_vm._v("医生")]), _c('text', {
      staticClass: ["value"]
    }, [_vm._v(_vm._s(i.doc))])]), _c('div', {
      staticClass: ["labelbox"]
    }, [_c('text', {
      staticClass: ["label"]
    }, [_vm._v("护士")]), _c('text', {
      staticClass: ["value"]
    }, [_vm._v(_vm._s(i.hushi))])]), _c('text', {
      staticClass: ["day"]
    }, [_vm._v("入院第" + _vm._s(i.day) + "天")]), _c('div', {
      staticClass: ["iscritical"]
    }, [(i.critical == true) ? _c('text', {
      staticClass: ["critical"]
    }, [_vm._v("危急")]) : _vm._e()])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.native.js.map