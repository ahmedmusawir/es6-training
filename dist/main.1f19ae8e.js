// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/bootstrap-scss/bootstrap.scss":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/animate.css/animate.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"modules/ui/form-comps/Form.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"modules/ui/UIBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**THIS IS A UI BASE CLASS
 * ALL THE UI ELEMENT CLASSES WILL EXTEND THIS
 */
var UIBase =
/*#__PURE__*/
function () {
  function UIBase() {
    _classCallCheck(this, UIBase);

    //Init Message
    // console.log('UIBase initialized!');
    //ES6 Object
    this.element = null;
  }

  _createClass(UIBase, [{
    key: "createElement",
    value: function createElement() {
      var s = this.getElementString();
      this.element = document.createElement('span');
      this.element.classList.add('col-sm-6');
      this.element = this.element;
      this.element.innerHTML = s;
    }
  }, {
    key: "appendToElement",
    value: function appendToElement(el) {
      this.createElement();
      el.appendChild(this.element);
    }
  }, {
    key: "getElementString",
    value: function getElementString() {
      throw 'Please override getElementString ...';
    }
  }]);

  return UIBase;
}();

var _default = UIBase;
exports.default = _default;
},{}],"modules/ui/form-comps/Form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Form.scss");

var _UIBase2 = _interopRequireDefault(require("../UIBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form =
/*#__PURE__*/
function (_UIBase) {
  _inherits(Form, _UIBase);

  function Form(title) {
    var _this;

    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this));

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      //Init Message
      console.log('Form initialized!');
    });

    _defineProperty(_assertThisInitialized(_this), "getElementString", function () {
      return "\n    <!-- Simple Bootstrap Form -->\n    <h1>Form Validation</h1>\n    <form id='the-only-form' class=\"pr-5\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputName\">User ID</label>\n        <input type=\"text\" name=\"userId\" class=\"form-control\" id=\"exampleInputName\" name=\"exampleInputName2\" aria-describedby=\"emailHelp\" placeholder=\"Enter Name\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">3-6 letters & digits</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"text\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">alpha numaric with any 4-8 characters </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail\">Email address</label>\n        <input type=\"text\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\"name@example.com\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">\n        (all lowercase)\n          <ol>1. any letter, numbers, dots and/or hypens</ol>\n          <ol>2. any letter, number and/or hypens</ol>\n          <ol>3. any letter</ol>\n          <ol>4. a dot(.) then any letters</ol>\n        \n          </small>\n      </div>\n\n     \n      <!-- SUBMIT BTN -->\n      <button type=\"submit\" class=\"btn btn-info btn-block\">Submit</button>\n    </form>\n\n    ";
    });

    _this.title = title;
    _this.id = id;

    _this.init();

    return _this;
  }

  return Form;
}(_UIBase2.default);

var _default = Form;
exports.default = _default;
},{"./Form.scss":"modules/ui/form-comps/Form.scss","../UIBase":"modules/ui/UIBase.js"}],"modules/ui/form-comps/Validate.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"modules/ui/form-comps/Validate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Validate.scss");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Validate = function Validate(form) {
  var _this = this;

  _classCallCheck(this, Validate);

  _defineProperty(this, "addingEventListeners", function () {
    _this.inputs.forEach(function (input) {
      input.addEventListener('keyup', function (e) {
        _this.doValidation(e.target, e.target.attributes.name.value);
      });
    });
  });

  _defineProperty(this, "doValidation", function (field, regEx) {
    var valid = _this.rx[regEx].test(field.value); // console.log(valid);


    if (valid) {
      field.setAttribute('class', 'valid form-control');
    } else {
      field.setAttribute('class', 'invalid form-control');
    } // console.log(field.value);
    // console.log(this.rx[regEx]);

  });

  this.formID = form.id; // console.log(this.formID);

  this.inputs = document.querySelectorAll("#".concat(this.formID, " input")); // console.log(this.inputs);
  // The RegEx Object

  this.rx = {
    userId: /^[a-z\d]{3,8}$/i,
    password: /^[\w@-].{4,8}$/i,
    email: /^([a-z-_\.\d]{3,20})@([a-z-_]{3,5})\.([a-z]{3,})(\.[a-z]{2,})?$/
  }; // Doing the Validation

  this.addingEventListeners();
};

var _default = Validate;
exports.default = _default;
},{"./Validate.scss":"modules/ui/form-comps/Validate.scss"}],"main.js":[function(require,module,exports) {
"use strict";

require("./style.scss");

require("bootstrap-scss/bootstrap.scss");

require("../node_modules/animate.css/animate.css");

var _Form = _interopRequireDefault(require("./modules/ui/form-comps/Form"));

var _Validate = _interopRequireDefault(require("./modules/ui/form-comps/Validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Main = function Main() {
  var _this = this;

  _classCallCheck(this, Main);

  _defineProperty(this, "addUIElements", function () {
    var form = new _Form.default();
    form.appendToElement(_this.app);
  });

  _defineProperty(this, "addEventListeners", function () {
    console.log('Adding Event Listerners');

    _this.theForm.addEventListener('submit', _this.formHandler);
  });

  _defineProperty(this, "formHandler", function (e) {
    e.preventDefault();
    var formName = _this.theForm.exampleInputName.value;
    var formPass = _this.theForm.exampleInputPassword1.value;
    var formEmail = _this.theForm.exampleInputEmail.value; // Creating a display element & adding to DOM directly by JS

    var displayBox = document.createElement('DIV');
    displayBox.classList.add('display-box-styles', 'animated', 'zoomIn', 'col-sm-6'); // Replacing the DisplayBox with a new one everytime Submit button is clicked

    var firstDisplayBox = document.querySelector('.display-box-styles'); // console.log(firstDisplayBox);

    if (firstDisplayBox !== null) {
      firstDisplayBox.remove();
    } // Adding displayBox above the form


    _this.app.appendChild(displayBox); // Display the input values in the DOM inside the DisplayBox


    displayBox.innerHTML = "<h4><strong>Name:</strong> ".concat(formName, "</h4>");
    displayBox.innerHTML += "<h4><strong>Pass:</strong> ".concat(formPass, "</h4>");
    displayBox.innerHTML += "<h4><strong>Email:</strong> ".concat(formEmail, "</h4>"); //Clear the From

    _this.theForm.reset();
  });

  console.log('Main Initialized!'); //Get App from DOM

  this.app = document.getElementById('app'); //Add Elements to the Page

  this.addUIElements(); //Get From Element from DOM

  this.theForm = document.querySelector('form'); // console.log(this.theForm);
  //Add Event Listeners to DOM Elements

  this.addEventListeners(); //Validation passing the id

  var validate = new _Validate.default(this.theForm);
};

var main = new Main();
},{"./style.scss":"style.scss","bootstrap-scss/bootstrap.scss":"../node_modules/bootstrap-scss/bootstrap.scss","../node_modules/animate.css/animate.css":"../node_modules/animate.css/animate.css","./modules/ui/form-comps/Form":"modules/ui/form-comps/Form.js","./modules/ui/form-comps/Validate":"modules/ui/form-comps/Validate.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59503" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map