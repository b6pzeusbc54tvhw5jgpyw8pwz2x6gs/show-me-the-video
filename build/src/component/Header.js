"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__GetDependency__ = exports.__get__ = _get__;
exports.__set__ = exports.__Rewire__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = exports.default = void 0;

var _router = require("next/router");

var _react = _interopRequireWildcard(require("react"));

var _config = _interopRequireDefault(require("next/config"));

var _go = require("react-icons/go");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rebass = require("rebass");

var _styled = require("./styled");

var _context = require("../context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.3em;\n  color: black;\n  background-color: ", ";\n  & a {\n    text-decoration: none;\n    color: black;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: inline-block;\n  cursor: pointer;\n  color: white;\n  margin-left: 1em;\n  font-size: 2em;\n  &:first-child {\n    margin-left: 0;\n  }\n  & a {\n    text-decoration: none;\n    color: white;\n  }\n  & a:hover {\n    color: #700f0f;\n  }\n  &:hover {\n    color: #700f0f;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  -webkit-box-align: center;\n  align-items: center;\n  height: 80px;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  border-bottom: 2px solid rgb(237, 237, 237);\n  padding: 0px 20px;\n  font-family: Roboto;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _get__2 = _get__("getConfig")(),
    serverRuntimeConfig = _get__2.serverRuntimeConfig,
    publicRuntimeConfig = _get__2.publicRuntimeConfig;

var Box = _get__("styled")(_get__("RebassFlex"))(_templateObject(), function (p) {
  return p.showLayout ? 'rgba(133, 233, 133, 0.65)' : '#f2aaaa';
});

var TextButton = _get__("styled").li(_templateObject2(), function (p) {
  return p.showLayout ? 'rgba(83, 23, 233, 0.65)' : '#f2aaaa';
});

var TextButtonBox = _get__("styled").ul(_templateObject3());

var H1 = _get__("styled").h1(_templateObject4(), function (p) {
  return p.showLayout ? 'rgba(83, 23, 233, 0.65)' : '#f2aaaa';
});

var Header = function Header(props) {
  var _get__3 = _get__("useContext")(_get__("appContext")),
      showLayout = _get__3.showLayout,
      toggleShowLayout = _get__3.toggleShowLayout;

  var pathname = props.router.pathname;

  var _get__4 = _get__("publicRuntimeConfig"),
      SMTV_TITLE = _get__4.SMTV_TITLE;

  return _get__("React").createElement(_get__("Box"), {
    showLayout: showLayout
  }, _get__("React").createElement(_get__("H1"), {
    showLayout: showLayout
  }, pathname !== '/' && _get__("React").createElement(_get__("Link"), {
    href: {
      pathname: "/"
    }
  }, _get__("React").createElement("a", null, SMTV_TITLE)), pathname === '/' && SMTV_TITLE), _get__("React").createElement(_get__("TextButtonBox"), null, _get__("React").createElement(_get__("TextButton"), {
    onClick: toggleShowLayout
  }, "layout"), _get__("React").createElement(_get__("TextButton"), null, pathname !== '/' && _get__("React").createElement(_get__("Link"), {
    href: {
      pathname: "/"
    }
  }, _get__("React").createElement("a", null, "list")))));
};

var _DefaultExportValue = _get__("withRouter")(_get__("Header"));

var _default = _DefaultExportValue;
exports.default = _default;

function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}

;
var _RewireModuleId__ = null;

function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    var globalVariable = _getGlobalObject();

    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }

    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }

  return _RewireModuleId__;
}

function _getRewireRegistry__() {
  var theGlobalVariable = _getGlobalObject();

  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }

  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}

function _getRewiredData__() {
  var moduleId = _getRewireModuleId__();

  var registry = _getRewireRegistry__();

  var rewireData = registry[moduleId];

  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }

  return rewireData;
}

(function registerResetAll() {
  var theGlobalVariable = _getGlobalObject();

  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};
exports.__RewireAPI__ = _RewireAPI__;

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  var rewireData = _getRewiredData__();

  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case "getConfig":
      return _config.default;

    case "styled":
      return _styledComponents.default;

    case "RebassFlex":
      return _rebass.Flex;

    case "useContext":
      return _react.useContext;

    case "appContext":
      return _context.appContext;

    case "publicRuntimeConfig":
      return publicRuntimeConfig;

    case "withRouter":
      return _router.withRouter;

    case "Header":
      return Header;

    case "React":
      return _react.default;

    case "Box":
      return Box;

    case "H1":
      return H1;

    case "Link":
      return _styled.Link;

    case "TextButtonBox":
      return TextButtonBox;

    case "TextButton":
      return TextButton;
  }

  return undefined;
}

function _assign__(variableName, value) {
  var rewireData = _getRewiredData__();

  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  var rewireData = _getRewiredData__();

  if (_typeof(variableName) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  var rewireData = _getRewiredData__();

  delete rewireData[variableName];

  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }

  ;
}

function _with__(object) {
  var rewireData = _getRewiredData__();

  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

var _typeOfOriginalExport = _typeof(_DefaultExportValue);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(_DefaultExportValue, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(_DefaultExportValue)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}