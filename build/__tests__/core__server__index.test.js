"use strict";
/* globals __rewire_reset_all__ */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = void 0;

exports.__esModule = true;

var fs_1 = require("fs");

var path_1 = require("path");

var await_to_js_1 = require("await-to-js");

var mktemp_1 = require("mktemp");

var rimraf_1 = require("rimraf");

var sinon_1 = require("sinon");

var constant_1 = require("../src/core/constant"); // import server, { getVideoInfoArr } from '../src/core/server'


var server = require("../src/core/server");

test('two plus two is four', function () {
  expect(2 + 2).toBe(4);
});
describe("check getPathFromGitRepoUrl", function () {
  var a = _get__("server").getGuideInfo();

  var validUrl = 'https://github.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/video-here-tc-data.git';
  it('should works: getPathFromGitRepoUrl(url)', function () {
    var dirName = _get__("server").__get__('getPathFromGitRepoUrl')(validUrl);

    expect(dirName).toMatch(/^video-here-tc-data.\w{32}$/);
  });
});
describe("check getRepo", function () {
  var dirName = 'tmp-git-repo-for-test-case';
  var validUrl = 'https://github.com/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/video-here-tc-data.git';
  var invalidUrl = 'https://wronggithub.com/b/video-here-tc-data.git';
  beforeAll(function () {
    return _get__("rimraf_1")["default"].sync(dirName);
  });
  it('should works: getRepo(validUrl) x 2', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var fakeGetPathFromGitRepoUrl, _a, err, repoPath, _b, err2, repoPath2;

      return _get__("__generator")(this, function (_c) {
        switch (_c.label) {
          case 0:
            fakeGetPathFromGitRepoUrl = _get__("sinon_1")["default"].fake.returns(dirName); // server.__set__('Clone', fakeClone)
            // server.__set__('Repository', { open: fakeOpen })

            _get__("server").__set__('getPathFromGitRepoUrl', fakeGetPathFromGitRepoUrl);

            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](_get__("server").__get__('getRepo')(validUrl))];

          case 1:
            _a = _c.sent(), err = _a[0], repoPath = _a[1];
            expect(fakeGetPathFromGitRepoUrl.callCount).toBe(1);
            expect(fakeGetPathFromGitRepoUrl.getCall(0).args[0]).toBe(validUrl); // expect(fakeOpen.callCount).toBe(1)
            // expect(fakeOpen.getCall(0).args[0]).toBe(dirName)
            // expect(fakeClone.callCount).toBe(1)
            // expect(fakeClone.getCall(0).args[0]).toBe(validUrl)

            expect(err).toBeNull();
            expect(repoPath).toBe(dirName);
            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](_get__("server").__get__('getRepo')(validUrl))];

          case 2:
            _b = _c.sent(), err2 = _b[0], repoPath2 = _b[1];
            expect(fakeGetPathFromGitRepoUrl.callCount).toBe(2);
            expect(fakeGetPathFromGitRepoUrl.lastCall.args[0]).toBe(validUrl); // expect(fakeOpen.callCount).toBe(2)
            // expect(fakeOpen.lastCall.args[0]).toBe(dirName)
            // expect(fakeClone.callCount).toBe(1)

            expect(err2).toBeNull();
            expect(repoPath2).toBe(dirName);
            return [2
            /*return*/
            ];
        }
      });
    });
  }, 15000);
  it('should works: getRepo(validUrl) second', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var fakeGetPathFromGitRepoUrl, _a, err, repoPath;

      return _get__("__generator")(this, function (_b) {
        switch (_b.label) {
          case 0:
            fakeGetPathFromGitRepoUrl = _get__("sinon_1")["default"].fake.returns(dirName);

            _get__("server").__set__('getPathFromGitRepoUrl', fakeGetPathFromGitRepoUrl);

            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](_get__("server").__get__('getRepo')(validUrl))];

          case 1:
            _a = _b.sent(), err = _a[0], repoPath = _a[1];
            expect(fakeGetPathFromGitRepoUrl.callCount).toBe(1);
            expect(fakeGetPathFromGitRepoUrl.lastCall.args[0]).toBe(validUrl);
            expect(err).toBeNull();
            expect(repoPath).toBe(dirName);
            return [2
            /*return*/
            ];
        }
      });
    });
  }, 15000);
  it('should works: getRepo(validUrl, emptyDirPath)', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var _a, err, repo;

      return _get__("__generator")(this, function (_b) {
        switch (_b.label) {
          case 0:
            _get__("mktemp_1")["default"].createDirSync(dirName);

            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](_get__("server").__get__('getRepo')(validUrl, dirName))];

          case 1:
            _a = _b.sent(), err = _a[0], repo = _a[1];
            expect(err).toBeNull();
            return [2
            /*return*/
            ];
        }
      });
    });
  }, 10000);
  it('should works: getRepo(validUrl, notExistDirPath)', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var _a, err, repo;

      return _get__("__generator")(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](_get__("server").__get__('getRepo')(validUrl, dirName))];

          case 1:
            _a = _b.sent(), err = _a[0], repo = _a[1];
            expect(err).toBeNull();
            return [2
            /*return*/
            ];
        }
      });
    });
  }, 10000);
  it('should error: getRepo(validUrl, existDirPath)', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var _a, err, repoPath;

      return _get__("__generator")(this, function (_b) {
        switch (_b.label) {
          case 0:
            _get__("mktemp_1")["default"].createDirSync(dirName);

            _get__("mktemp_1")["default"].createFileSync(dirName + "/XXXXX.tmp");

            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](_get__("server").__get__('getRepo')(validUrl, dirName))];

          case 1:
            _a = _b.sent(), err = _a[0], repoPath = _a[1];
            expect(err).not.toBe(null);
            expect(err.message).toBe('NOT_EMPTY_DIRECTORY');
            expect(err.name).toBe('Error');
            expect(repoPath).toBeUndefined();
            return [2
            /*return*/
            ];
        }
      });
    });
  });
  it('should error: getRepo(invalidUrl)', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var _a, err, repoPath;

      return _get__("__generator")(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](_get__("server").__get__('getRepo')(invalidUrl))];

          case 1:
            _a = _b.sent(), err = _a[0], repoPath = _a[1];
            expect(err.name).toBe('Error');
            expect(err.message).toMatch(/^Cloning into '.*'\.\.\.\nfatal: unable to access/);
            expect(repoPath).toBeUndefined();
            return [2
            /*return*/
            ];
        }
      });
    });
  }, 10000);
  it('should work: readFile(absolutePath)', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var filePath, _a, err, filenameAndTextObj, expectedObj;

      return _get__("__generator")(this, function (_b) {
        switch (_b.label) {
          case 0:
            filePath = _get__("path_1")["default"].resolve(__dirname, 'asset', _get__("constant_1").CONST_DIR_NAME, 'validVideoGuideHereMarkdown.md');
            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](_get__("server").__get__('readFile')(filePath))];

          case 1:
            _a = _b.sent(), err = _a[0], filenameAndTextObj = _a[1];
            expect(err).toBeNull();
            expectedObj = {
              filename: _get__("path_1")["default"].basename(filePath),
              text: _get__("fs_1")["default"].readFileSync(filePath, 'utf8')
            };
            expect(filenameAndTextObj).toEqual(expectedObj);
            return [2
            /*return*/
            ];
        }
      });
    });
  });
  it('should error: getVideoInfoArr(invalidUrl)', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var _a, err, arr;

      return _get__("__generator")(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , _get__("await_to_js_1")["default"](getVideoInfoArr(invalidUrl))];

          case 1:
            _a = _b.sent(), err = _a[0], arr = _a[1];
            expect(err.message).toMatch(/^Cloning into '.*'\.\.\.\nfatal: unable to access/);
            expect(arr).toBeUndefined();
            return [2
            /*return*/
            ];
        }
      });
    });
  });
  it('should work: getVideoGuideHereFileArr(validPath)', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var repoPath, fileArr;
      return _get__("__generator")(this, function (_a) {
        repoPath = _get__("path_1")["default"].resolve(__dirname, 'asset');
        fileArr = _get__("server").__get__('getVideoGuideHereFileArr')(repoPath);
        expect(fileArr).toEqual([_get__("path_1")["default"].resolve(repoPath, _get__("constant_1").CONST_DIR_NAME, 'validVideoGuideHereMarkdown.md'), _get__("path_1")["default"].resolve(repoPath, _get__("constant_1").CONST_DIR_NAME, 'validVideoGuideHereMarkdown2.md')]);
        return [2
        /*return*/
        ];
      });
    });
  });
  it('should work: parseVideoInfo()', function () {
    return _get__("__awaiter")(_get__("_this"), void 0, void 0, function () {
      var filePath, filename, text, info;
      return _get__("__generator")(this, function (_a) {
        filePath = _get__("path_1")["default"].resolve(__dirname, 'asset', _get__("constant_1").CONST_DIR_NAME, 'validVideoGuideHereMarkdown.md');
        filename = _get__("path_1")["default"].basename(filePath);
        text = _get__("fs_1")["default"].readFileSync(filePath, 'utf8');
        info = _get__("server").__get__('parseVideoInfo')({
          filename: filename,
          text: text
        });
        expect(info.title).toBe('Title');
        expect(info.subTitle).toBe('Sub title');
        expect(info.videoUrl).toBe('http://local-static.aluc.io:8998/video1.mkv');
        expect(info.thumbnailUrl).toBe('http://local-static.aluc.io:8998/resized.256/video1.jpg');
        expect(info.tagArr).toEqual(['windows', 'linux']);
        expect(info.prevGuideId).toBe('wio1io2ffh');
        expect(info.nextGuideId).toBe('ysT9Nii5An');
        expect(info.duration).toBe('2:30');
        expect(info.author).toBe('alfreduc');
        expect(info.date).toBe('20181127');
        return [2
        /*return*/
        ];
      });
    });
  });
  afterEach(function () {
    __rewire_reset_all__();

    var validPath = _get__("server").__get__('getPathFromGitRepoUrl')(validUrl);

    _get__("rimraf_1")["default"].sync(validPath);

    _get__("rimraf_1")["default"].sync(dirName);
  });
});

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
    case "server":
      return server;

    case "rimraf_1":
      return rimraf_1;

    case "__awaiter":
      return __awaiter;

    case "_this":
      return _this;

    case "__generator":
      return __generator;

    case "sinon_1":
      return sinon_1;

    case "await_to_js_1":
      return await_to_js_1;

    case "mktemp_1":
      return mktemp_1;

    case "path_1":
      return path_1;

    case "constant_1":
      return constant_1;

    case "fs_1":
      return fs_1;
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

var _typeOfOriginalExport = _typeof(module.exports);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}