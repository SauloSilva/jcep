(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jcep"] = factory();
	else
		root["jcep"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _aggregation2 = __webpack_require__(1);
	
	var _aggregation3 = _interopRequireDefault(_aggregation2);
	
	var _base = __webpack_require__(2);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _append_script = __webpack_require__(3);
	
	var _append_script2 = _interopRequireDefault(_append_script);
	
	var _jsonp = __webpack_require__(4);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _requester = __webpack_require__(5);
	
	var _requester2 = _interopRequireDefault(_requester);
	
	var _search = __webpack_require__(6);
	
	var _search2 = _interopRequireDefault(_search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Config = function (_aggregation) {
	  _inherits(Config, _aggregation);
	
	  function Config() {
	    _classCallCheck(this, Config);
	
	    return _possibleConstructorReturn(this, (Config.__proto__ || Object.getPrototypeOf(Config)).apply(this, arguments));
	  }
	
	  return Config;
	}((0, _aggregation3.default)(_base2.default, _append_script2.default, _jsonp2.default, _requester2.default, _search2.default));
	
	module.exports = Config;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var aggregation = function aggregation(baseClass) {
	  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    mixins[_key - 1] = arguments[_key];
	  }
	
	  var base = function (_baseClass) {
	    _inherits(_Combined, _baseClass);
	
	    function _Combined() {
	      var _ref;
	
	      _classCallCheck(this, _Combined);
	
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      var _this = _possibleConstructorReturn(this, (_ref = _Combined.__proto__ || Object.getPrototypeOf(_Combined)).call.apply(_ref, [this].concat(args)));
	
	      mixins.forEach(function (mixin) {
	        mixin.prototype.initializer.call(_this);
	      });
	      return _this;
	    }
	
	    return _Combined;
	  }(baseClass);
	
	  var copyProps = function copyProps(target, source) {
	    Object.getOwnPropertyNames(source).concat(Object.getOwnPropertySymbols(source)).forEach(function (prop) {
	      if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
	        return;
	      };
	
	      Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
	    });
	  };
	
	  mixins.forEach(function (mixin) {
	    copyProps(base.prototype, mixin.prototype);
	    copyProps(base, mixin);
	  });
	
	  return base;
	};
	
	module.exports = aggregation;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Base = function () {
	  function Base() {
	    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Base);
	
	    var _object$triggerEventN = object.triggerEventName,
	        triggerEventName = _object$triggerEventN === undefined ? false : _object$triggerEventN,
	        _object$elements = object.elements,
	        elements = _object$elements === undefined ? false : _object$elements,
	        callbackSuccess = object.success,
	        callbackError = object.error,
	        callbackBeforeSend = object.beforeSend;
	    var _elements$cepEl = elements.cepEl,
	        cepEl = _elements$cepEl === undefined ? 'cep' : _elements$cepEl,
	        _elements$streetEl = elements.streetEl,
	        streetEl = _elements$streetEl === undefined ? 'street' : _elements$streetEl,
	        _elements$numberEl = elements.numberEl,
	        numberEl = _elements$numberEl === undefined ? 'number' : _elements$numberEl,
	        _elements$neighborhoo = elements.neighborhoodEl,
	        neighborhoodEl = _elements$neighborhoo === undefined ? 'neighborhood' : _elements$neighborhoo,
	        _elements$cityEl = elements.cityEl,
	        cityEl = _elements$cityEl === undefined ? 'city' : _elements$cityEl,
	        _elements$stateEl = elements.stateEl,
	        stateEl = _elements$stateEl === undefined ? 'state' : _elements$stateEl;
	
	
	    this.cepEl = cepEl;
	    this.streetEl = streetEl;
	    this.numberEl = numberEl;
	    this.neighborhoodEl = neighborhoodEl;
	    this.cityEl = cityEl;
	    this.stateEl = stateEl;
	
	    this.triggerEventName = triggerEventName;
	    this.callbackSuccess = callbackSuccess || false;
	    this.callbackError = callbackError || false;
	    this.callbackBeforeSend = callbackBeforeSend || false;
	  }
	
	  _createClass(Base, [{
	    key: 'searchEl',
	    value: function searchEl(_ref) {
	      var el = _ref.el;
	
	      var element = void 0;
	
	      if (el) {
	        element = document.querySelectorAll(el)[0];
	
	        if (!element) {
	          var elWithoutSpecialChar = el.match(/[a-zA-Z]/g).join('');
	          element = document.querySelectorAll('[data-' + elWithoutSpecialChar + ']')[0];
	        }
	      }
	
	      return element;
	    }
	  }, {
	    key: 'cepEl',
	    set: function set(el) {
	      this._cepEl = this.searchEl({ el: el });
	    },
	    get: function get() {
	      return this._cepEl;
	    }
	  }, {
	    key: 'streetEl',
	    set: function set(el) {
	      this._streetEl = this.searchEl({ el: el });
	    },
	    get: function get() {
	      return this._streetEl;
	    }
	  }, {
	    key: 'neighborhoodEl',
	    set: function set(el) {
	      this._neighborhoodEl = this.searchEl({ el: el });
	    },
	    get: function get() {
	      return this._neighborhoodEl;
	    }
	  }, {
	    key: 'cityEl',
	    set: function set(el) {
	      this._cityEl = this.searchEl({ el: el });
	    },
	    get: function get() {
	      return this._cityEl;
	    }
	  }, {
	    key: 'stateEl',
	    set: function set(el) {
	      this._stateEl = this.searchEl({ el: el });
	    },
	    get: function get() {
	      return this._stateEl;
	    }
	  }, {
	    key: 'numberEl',
	    set: function set(el) {
	      this._numberEl = this.searchEl({ el: el });
	    },
	    get: function get() {
	      return this._numberEl;
	    }
	  }, {
	    key: 'triggerEventName',
	    set: function set(triggerEventName) {
	      this._triggerEventName = triggerEventName;
	    },
	    get: function get() {
	      return this._triggerEventName;
	    }
	  }, {
	    key: 'callbackSuccess',
	    set: function set(callbackSuccess) {
	      this._callbackSuccess = callbackSuccess;
	    },
	    get: function get() {
	      return this._callbackSuccess;
	    }
	  }, {
	    key: 'callbackError',
	    set: function set(callbackError) {
	      this._callbackError = callbackError;
	    },
	    get: function get() {
	      return this._callbackError;
	    }
	  }, {
	    key: 'callbackBeforeSend',
	    set: function set(callbackBeforeSend) {
	      this._callbackBeforeSend = callbackBeforeSend;
	    },
	    get: function get() {
	      return this._callbackBeforeSend;
	    }
	  }, {
	    key: 'cep',
	    set: function set(cep) {
	      this._cep = cep.match(/[0-9]/g).join('');
	    },
	    get: function get() {
	      return this._cep;
	    }
	  }, {
	    key: 'jsonCallbackName',
	    set: function set(prefix) {
	      return this._jsonCallbackName = 'jsonp_callback_' + prefix;
	    },
	    get: function get() {
	      return this._jsonCallbackName;
	    }
	  }]);
	
	  return Base;
	}();
	
	module.exports = Base;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AppendScript = function () {
	  function AppendScript() {
	    _classCallCheck(this, AppendScript);
	  }
	
	  _createClass(AppendScript, [{
	    key: 'initializer',
	    value: function initializer() {}
	  }, {
	    key: 'appendScript',
	    value: function appendScript() {
	      var script = document.createElement('script');
	      script.src = this.apiUrl + (this.apiUrl.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + this.jsonCallbackName;
	      document.body.appendChild(script);
	
	      return script;
	    }
	  }, {
	    key: 'apiUrl',
	    get: function get() {
	      var protocol = location.protocol === 'https:' ? 'https:' : 'http:';
	      return protocol + '//correiosapi.apphb.com/cep/' + this.cep;
	    }
	  }]);
	
	  return AppendScript;
	}();
	
	module.exports = AppendScript;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var JsonP = function () {
	  function JsonP() {
	    _classCallCheck(this, JsonP);
	  }
	
	  _createClass(JsonP, [{
	    key: "initializer",
	    value: function initializer() {}
	  }, {
	    key: "jsonp",
	    value: function jsonp(callbackSuccess, callbackError) {
	      var _this = this;
	
	      this.jsonCallbackName = Math.round(100000 * Math.random());
	
	      window[this.jsonCallbackName] = function (data) {
	        _this.removeScriptAndCallback(script);
	        callbackSuccess(data);
	      };
	
	      var script = this.appendScript();
	
	      script.onerror = function (xhr) {
	        _this.removeScriptAndCallback(script);
	        callbackError(xhr);
	      };
	    }
	  }, {
	    key: "removeScriptAndCallback",
	    value: function removeScriptAndCallback(script) {
	      delete window[this.jsonCallbackName];
	      document.body.removeChild(script);
	    }
	  }]);
	
	  return JsonP;
	}();
	
	module.exports = JsonP;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Requester = function () {
	  function Requester() {
	    _classCallCheck(this, Requester);
	  }
	
	  _createClass(Requester, [{
	    key: 'initializer',
	    value: function initializer() {}
	  }, {
	    key: 'request',
	    value: function request() {
	      var _this = this;
	
	      if (this.triggerEventName) {
	        this.dispatchEvent('beforeSend');
	      }
	
	      if (this.callbackBeforeSend) {
	        this.callbackBeforeSend();
	      }
	
	      return new Promise(function (resolve, reject) {
	        _this.jsonp(function (data) {
	          resolve(data);
	        }, function (error) {
	          reject(error);
	        });
	      });
	    }
	  }]);
	
	  return Requester;
	}();
	
	module.exports = Requester;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Search = function () {
	  function Search() {
	    _classCallCheck(this, Search);
	  }
	
	  _createClass(Search, [{
	    key: 'initializer',
	    value: function initializer() {
	      this.eventHandler();
	    }
	  }, {
	    key: 'eventHandler',
	    value: function eventHandler() {
	      var _this = this;
	
	      if (!this.cepEl) {
	        return;
	      };
	
	      this.cepEl.addEventListener('change', function () {
	        _this.cep = _this.cepEl.value;
	        _this.search();
	      }, false);
	    }
	  }, {
	    key: 'search',
	    value: function search() {
	      var _this2 = this;
	
	      this.request().then(function (data) {
	        if (_this2.callbackSuccess) {
	          _this2.callbackSuccess(data);
	        }
	
	        if (_this2.triggerEventName) {
	          _this2.dispatchEvent('success', data);
	        } else {
	          _this2.fillForm(data);
	        }
	      }, function (err) {
	        if (_this2.callbackError) {
	          _this2.callbackError(err);
	        }
	
	        if (_this2.triggerEventName) {
	          _this2.dispatchEvent('error', err);
	        }
	      });
	    }
	  }, {
	    key: 'dispatchEvent',
	    value: function dispatchEvent(type, detail) {
	      var event = new CustomEvent(this.triggerEventName + ':' + type, {
	        detail: detail
	      });
	
	      document.dispatchEvent(event);
	    }
	  }, {
	    key: 'fillForm',
	    value: function fillForm(data) {
	      this.streetEl.value = data.tipoDeLogradouro + ' ' + data.logradouro;
	      this.neighborhoodEl.value = data.bairro;
	      this.cityEl.value = data.cidade;
	      this.stateEl.value = data.estado;
	
	      this.numberEl.focus();
	    }
	  }]);
	
	  return Search;
	}();
	
	module.exports = Search;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=jcep.js.map