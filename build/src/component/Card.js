"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__GetDependency__ = exports.__get__ = _get__;
exports.__set__ = exports.__Rewire__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rebass = require("rebass");

var _link = _interopRequireDefault(require("next/link"));

var _moment = _interopRequireDefault(require("moment"));

var _context = require("../context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: rgba(0, 0, 0, 0.36);\n\n  & .title {\n    box-shadow: rgb(251, 250, 252) 0px 0px 0px 0px inset;\n    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    margin: 0;\n    color: hsla(270,17.119554496%,0%,0.92);\n    font-size: 1rem;\n    font-height: 1.4rem;\n    font-weight: bold;\n    font-rendering: optimizeLegibility;\n    font-family: Roboto, 'Nanum Gothic Coding';\n    white-space: pre-line;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.36);\n  font-size: 0.8409rem;\n  line-height: 1.4rem;\n  align-items: baseline;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  text-align: right;\n  bottom: 5px;\n  right: 8px;\n  background-color: #0000009e;\n  padding: 6px;\n  color: white;\n  font-family: Roboto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n  opacity: 1;\n  transition: opacity 0.5s ease 0s;\n\n  max-width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  margin-bottom: 1.05rem;\n\n  border-style: none;\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-bottom: 65%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  box-shadow: rgba(102, 51, 153, 0.1) 0px 4px 10px;\n  margin-bottom: 0.525rem;\n  border-radius: 4px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  &:hover {\n    transform: translateY(-3px);\n    box-shadow: rgba(140, 101, 179, 0.5) 0px 8px 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: none;\n  border-bottom: none;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  text-decoration: none;\n  background-color: ", ";\n  &:hover {\n    color: rgb(102, 51, 153);\n    outline-width: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  cursor: pointer;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _get__("styled")(_get__("RebassBox"))(_templateObject(), function (p) {
  return p.showLayout ? 'rgba(133, 233, 133, 0.65)' : 'initial';
});

var LinkInner = _get__("styled")(_get__("RebassLink"))(_templateObject2(), function (p) {
  return p.showLayout ? 'rgba(255, 0, 0, 0.81)' : 'transparent';
});

var ImageRapper = _get__("styled")(_get__("RebassBox"))(_templateObject3());

var Padding = _get__("styled").div(_templateObject4());

var Image = _get__("styled")(_get__("RebassImage"))(_templateObject5());

var AbsoluteBox = _get__("styled")(_get__("RebassBox"))(_templateObject6());

var InfoBox = _get__("styled")(_get__("RebassBox"))(_templateObject7());

var Title = _get__("styled")(_get__("RebassBox"))(_templateObject8(), function (p) {
  return p.showLayout ? 'rgba(233, 83, 133, 0.45)' : 'initial';
});

var SubInfo = _get__("styled")(_get__("RebassBox"))(_templateObject9());

var Card = function Card(props) {
  var _get__2 = _get__("useContext")(_get__("appContext")),
      showLayout = _get__2.showLayout;

  var title = props.title,
      thumbnailUrl = props.thumbnailUrl,
      id = props.id,
      date = props.date,
      author = props.author;

  var dateStr = _get__("moment")(date).format('MMMM D, YYYY');

  var duration = props.duration || "00:00";
  return _get__("React").createElement(_get__("Box"), {
    px: 2,
    py: 2,
    my: 1,
    width: [1, 1 / 2, 1 / 3, 1 / 4],
    showLayout: showLayout
  }, _get__("React").createElement(_get__("Link"), {
    href: {
      pathname: "/guide/".concat(id)
    }
  }, _get__("React").createElement(_get__("LinkInner"), {
    showLayout: showLayout
  }, _get__("React").createElement(_get__("ImageRapper"), null, _get__("React").createElement(_get__("Padding"), null), _get__("React").createElement(_get__("Image"), {
    width: [1],
    src: thumbnailUrl
  }), _get__("React").createElement(_get__("AbsoluteBox"), null, _get__("React").createElement("span", null, duration))))), _get__("React").createElement(_get__("InfoBox"), null, _get__("React").createElement(_get__("Title"), {
    showLayout: showLayout
  }, _get__("React").createElement("h5", {
    className: "title"
  }, title), _get__("React").createElement(_get__("SubInfo"), null, _get__("React").createElement("span", null, "".concat(dateStr, " / ").concat(author))))));
};

_get__("Card").propTypes = {
  // videoUrl: PropTypes.string.isRequired,
  id: _get__("PropTypes").string.isRequired,
  title: _get__("PropTypes").string.isRequired,
  description: _get__("PropTypes").string,
  thumbnailUrl: _get__("PropTypes").string.isRequired,
  duration: _get__("PropTypes").string.isRequired,
  date: _get__("PropTypes").string.isRequired,
  author: _get__("PropTypes").string.isRequired
};

var _default = _get__("Card");

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
    case "styled":
      return _styledComponents.default;

    case "RebassBox":
      return _rebass.Box;

    case "RebassLink":
      return _rebass.Link;

    case "RebassImage":
      return _rebass.Image;

    case "useContext":
      return _react.useContext;

    case "appContext":
      return _context.appContext;

    case "moment":
      return _moment.default;

    case "Card":
      return Card;

    case "PropTypes":
      return _propTypes.default;

    case "React":
      return _react.default;

    case "Box":
      return Box;

    case "Link":
      return _link.default;

    case "LinkInner":
      return LinkInner;

    case "ImageRapper":
      return ImageRapper;

    case "Padding":
      return Padding;

    case "Image":
      return Image;

    case "AbsoluteBox":
      return AbsoluteBox;

    case "InfoBox":
      return InfoBox;

    case "Title":
      return Title;

    case "SubInfo":
      return SubInfo;
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

var _typeOfOriginalExport = _typeof(Card);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(Card, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Card)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}