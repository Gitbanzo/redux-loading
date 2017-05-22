(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-polyfill"), require("react"), require("react-bootstrap/lib/Modal"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-polyfill", "react", "react-bootstrap/lib/Modal"], factory);
	else if(typeof exports === 'object')
		exports["redux-loading"] = factory(require("babel-polyfill"), require("react"), require("react-bootstrap/lib/Modal"));
	else
		root["redux-loading"] = factory(root["babel-polyfill"], root["react"], root["react-bootstrap/lib/Modal"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.end = exports.start = undefined;

var _types = __webpack_require__(1);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var start = exports.start = function start() {
   return {
      type: types.LOADING_START
   };
};

var end = exports.end = function end() {
   return {
      type: types.LOADING_END
   };
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * アクション定数
 *
 */
var LOADING_START = exports.LOADING_START = '@@loading/START';
var LOADING_END = exports.LOADING_END = '@@loading/END';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lodingMiddleware = exports.Loding = exports.loadingModuleReducer = exports.actions = undefined;

var _reducer = __webpack_require__(6);

Object.defineProperty(exports, 'loadingModuleReducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reducer).default;
  }
});

var _Loading = __webpack_require__(4);

Object.defineProperty(exports, 'Loding', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Loading).default;
  }
});

var _middleware = __webpack_require__(5);

Object.defineProperty(exports, 'lodingMiddleware', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_middleware).default;
  }
});

var _actions = __webpack_require__(0);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.actions = actions;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(8);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Style = {
  modal: {
    position: 'fixed',
    zIndex: 1040,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    opacity: 0.5
  },
  icon: {
    backgroundColor: '#3C3C3C',
    textAlign: 'center',
    color: 'white',
    border: '1px solid white',
    paddingTop: '8px',
    paddingBottom: '8px',
    position: 'absolute',
    top: '300px',
    width: '100%'
  },
  title: {
    display: 'inline'
  }
};

var Loading = function Loading(_ref) {
  var loading = _ref.loading;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Modal2.default,
      {
        show: loading.isLoading,
        bsSize: 'large',
        'aria-labelledby': 'contained-modal-title-lg',
        backdrop: 'static',
        backdropStyle: Style.modal },
      _react2.default.createElement(
        'div',
        { style: Style.icon },
        _react2.default.createElement('i', { className: 'fa fa-spinner fa-3x fa-spin' }),
        '\xA0',
        _react2.default.createElement(
          'h3',
          { style: Style.title },
          'Now Loading...'
        )
      )
    )
  );
};

Loading.propTypes = {
  loading: _react.PropTypes.object.isRequired
};

exports.default = Loading;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(0);

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (store) {
  return function (next) {
    return function (action) {
      if (!store.getState().loading) {
        return next(action);
      }

      if (store.getState().loading.isLoading) {
        next(Actions.end());
      }
      return next(action);
    };
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _types = __webpack_require__(1);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
   isLoading: false
};

var loading = function loading() {
   var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
   var action = arguments[1];

   switch (action.type) {
      case types.LOADING_START:
         return {
            isLoading: true
         };
      case types.LOADING_END:
         return {
            isLoading: false
         };
      default:
         return state;
   }
};

exports.default = loading;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Modal");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});