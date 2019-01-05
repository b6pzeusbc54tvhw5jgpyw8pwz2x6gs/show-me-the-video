"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var path_1 = require("path");
var promise_1 = require("simple-git/promise");
var await_to_js_1 = require("await-to-js");
var fs_1 = require("fs");
var compact_1 = require("lodash/compact");
var filter_1 = require("lodash/filter");
var reject_1 = require("lodash/reject");
var find_1 = require("lodash/find");
var findIndex_1 = require("lodash/findIndex");
var last_1 = require("lodash/last");
var marked_1 = require("marked");
var md5_1 = require("md5");
var readdir_enhanced_1 = require("readdir-enhanced");
var tracer_1 = require("tracer");
var constant_1 = require("../constant");
var ts_optchain_1 = require("ts-optchain");
function c(exp) {
    try {
        var val = exp();
        if (val != null) {
            return val;
        }
    }
    catch (err) {
        logger.debug(err);
    }
    return void 0;
}
var fs = fs_1["default"].promises;
var logger = tracer_1["default"].console();
var _a = process.env.SMTV_CLONE_REPO_URL, SMTV_CLONE_REPO_URL = _a === void 0 ? '' : _a;
var getPathFromGitRepoUrl = function (url) {
    var projectName = last_1["default"](url.split('/')).replace(/\.git$/, '');
    return projectName + "." + md5_1["default"](url);
};
var getRepo = function (repoUrl, dirPath) { return __awaiter(_this, void 0, void 0, function () {
    var dotGitPath, _a, err, stat, _b, err2, dotGitStat, err3, pathArr, err4, err4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                dirPath = dirPath || getPathFromGitRepoUrl(repoUrl);
                dotGitPath = path_1["default"].resolve(dirPath, '.git');
                return [4 /*yield*/, await_to_js_1["default"](fs.stat(dirPath))];
            case 1:
                _a = _c.sent(), err = _a[0], stat = _a[1];
                if (err && err.code !== 'ENOENT')
                    throw err;
                return [4 /*yield*/, await_to_js_1["default"](fs.stat(dotGitPath))];
            case 2:
                _b = _c.sent(), err2 = _b[0], dotGitStat = _b[1];
                if (err2 && err2.code !== 'ENOENT')
                    throw err;
                if (!(ts_optchain_1.oc(stat).isDirectory() && ts_optchain_1.oc(dotGitStat).isDirectory())) return [3 /*break*/, 4];
                return [4 /*yield*/, await_to_js_1["default"](promise_1["default"](dirPath).pull())];
            case 3:
                err3 = (_c.sent())[0];
                if (err3)
                    throw err3;
                logger.debug("success. git pull " + dirPath);
                return [3 /*break*/, 8];
            case 4:
                if (!(ts_optchain_1.oc(stat).isDirectory() && !ts_optchain_1.oc(dotGitStat).isDirectory())) return [3 /*break*/, 6];
                pathArr = readdir_enhanced_1["default"].sync(dirPath);
                if (pathArr.length > 0)
                    throw new Error('NOT_EMPTY_DIRECTORY');
                return [4 /*yield*/, await_to_js_1["default"](promise_1["default"]().clone(repoUrl, dirPath, ["--depth", "1"]))];
            case 5:
                err4 = (_c.sent())[0];
                if (err4)
                    throw err4;
                logger.debug("success. git clone " + repoUrl + " " + dirPath);
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, await_to_js_1["default"](promise_1["default"]().clone(repoUrl, dirPath, ["--depth", "1"]))];
            case 7:
                err4 = (_c.sent())[0];
                if (err4)
                    throw err4;
                logger.debug("success. git clone " + repoUrl + " " + dirPath);
                _c.label = 8;
            case 8: return [2 /*return*/, dirPath];
        }
    });
}); };
var getVideoGuideHereFileArr = function (repoPath) {
    var dirPath = path_1["default"].resolve(repoPath, constant_1.CONST_DIR_NAME);
    var fileArr = readdir_enhanced_1["default"].sync(dirPath);
    fileArr = reject_1["default"](fileArr, function (name) { return name === 'README.md'; });
    fileArr = filter_1["default"](fileArr, function (name) { return /\.md$/.test(name); });
    fileArr = fileArr.map(function (name) { return path_1["default"].resolve(dirPath, name); });
    return fileArr;
};
var readFile = function (absolutePath) { return new Promise(function (resolve, reject) {
    fs_1["default"].readFile(absolutePath, 'utf8', function (err, text) {
        err && reject(err);
        var ft = { filename: path_1["default"].basename(absolutePath), text: text };
        !err && resolve(ft);
    });
}); };
var parseVideoInfo = function (_a) {
    var filename = _a.filename, text = _a.text;
    // todotodotodotodo!!!
    var tokenArr = marked_1["default"].lexer(text);
    var firstHeading = find_1["default"](tokenArr, function (t) { return t.type === 'heading' && t.depth === 1; }) || {};
    var titleIndex = findIndex_1["default"](tokenArr, firstHeading);
    var subTitle = tokenArr[titleIndex + 1];
    subTitle = subTitle.type === 'heading' && subTitle.depth === 2
        ? subTitle.text : '';
    var isDraft = c(function () { return tokenArr.links.draft.href; }) === 'true';
    if (isDraft)
        return null;
    return {
        title: firstHeading.text || '[제목없음]',
        subTitle: subTitle,
        videoUrl: tokenArr.links.videourl.href,
        thumbnailUrl: tokenArr.links.thumbnailurl.href,
        tagArr: tokenArr.links.tags.href.split(',') || [],
        prevGuideId: tokenArr.links.prev.href,
        nextGuideId: tokenArr.links.next.href,
        author: tokenArr.links.author.href,
        date: tokenArr.links.date.href,
        duration: tokenArr.links.duration.href,
        id: md5_1["default"](filename).substr(0, 8),
        filename: filename,
        text: text
    };
};
exports.getVideoInfoArr = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var repoPath, err, fileArr, promiseArr, filenameTextArr, videoInfoArr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = url || SMTV_CLONE_REPO_URL;
                repoPath = getPathFromGitRepoUrl(url);
                return [4 /*yield*/, await_to_js_1["default"](getRepo(url, repoPath))];
            case 1:
                err = (_a.sent())[0];
                if (err)
                    throw err;
                fileArr = getVideoGuideHereFileArr(repoPath);
                promiseArr = fileArr.map(readFile);
                return [4 /*yield*/, Promise.all(promiseArr)];
            case 2:
                filenameTextArr = _a.sent();
                videoInfoArr = compact_1["default"](filenameTextArr.map(parseVideoInfo));
                return [2 /*return*/, videoInfoArr];
        }
    });
}); };
exports.getGuideInfo = function (id, url) { return __awaiter(_this, void 0, void 0, function () {
    var guideInfoArr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = url || SMTV_CLONE_REPO_URL;
                return [4 /*yield*/, exports.getVideoInfoArr(url)];
            case 1:
                guideInfoArr = _a.sent();
                return [2 /*return*/, find_1["default"](guideInfoArr, { id: id })];
        }
    });
}); };
exports["default"] = {
    getGuideInfo: exports.getGuideInfo,
    getVideoInfoArr: exports.getVideoInfoArr
};
