"use strict";
cc._RF.push(module, 'fd7dfM9Pr1MlYFc6gEuLOqN', 'UIManager');
// scripts/Manager/UIManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController_1 = require("../controllers/GameController");
var GameModel_1 = require("../models/GameModel");
var LandUI_1 = require("../ui/LandUI");
var StorageUI_1 = require("../ui/StorageUI");
var StoreUI_1 = require("../ui/StoreUI");
var GameView_1 = require("../views/GameView");
var GameSaveManager_1 = require("./GameSaveManager");
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.landUIArray = [];
        _this.storeUI = null;
        _this.storageUI = null;
        _this.StartBtn = null;
        _this.time = 0;
        _this.saveTime = 1;
        return _this;
    }
    UIManager_1 = UIManager;
    // LIFE-CYCLE CALLBACKS:
    UIManager.prototype.onLoad = function () {
        if (UIManager_1.instance == null) {
            UIManager_1.instance = this;
        }
        this.Init();
    };
    UIManager.prototype.start = function () {
        //this.Save();
    };
    UIManager.prototype.update = function (dt) { };
    UIManager.prototype.Init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gameController = new GameController_1.GameController();
                        this.gameModel = new GameModel_1.GameModel();
                        this.gameView = new GameView_1.GameView(this.gameController);
                        this.gameController.init(this.gameModel, this.gameView);
                        return [4 /*yield*/, this.setupData()];
                    case 1:
                        _a.sent();
                        this.gameController.model.newLand();
                        this.createLandData();
                        this.gameController.loadGame();
                        this.setupUI();
                        this.gameController.setup();
                        this.StartBtn.interactable = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.setupData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gameModel.setData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.setupUI = function () {
        this.createLandUI();
        this.storageUI.setupUI();
        this.storageUI.updateUI();
        this.storeUI.setupUI();
    };
    UIManager.prototype.pushToQueue = function (index) {
        if (this.gameModel.landArray[index].isReadyToWork &&
            !this.gameModel.queueIndexArray.includes(index)) {
            this.gameModel.queueIndexArray.push(index);
        }
    };
    UIManager.prototype.useWorkerForQueue3 = function () {
        console.log("queueIndex: " + this.gameModel.queueIndexArray);
        var idleWorker = this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber);
        if (idleWorker > 0) {
            for (var i = 0; i < idleWorker; i++) {
                if (this.gameController.model.queueIndexArray.length > 0) {
                    if (this.gameModel.landArray[this.gameModel.queueIndexArray[0]]
                        .isReadyToWork) {
                        UIManager_1.instance.landUIArray[this.gameModel.queueIndexArray[0]].enableWorker();
                        this.useWorker(this.gameModel.landArray[this.gameModel.queueIndexArray[0]]);
                        UIManager_1.instance.landUIArray[this.gameModel.queueIndexArray[0]].updateUI();
                    }
                    else {
                    }
                    this.gameModel.queueIndexArray.splice(0, 1);
                }
            }
        }
        else {
        }
    };
    UIManager.prototype.checkMinWorkingTime = function () {
        var min = this.gameModel.landArray[0].workingTime;
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.gameModel.landArray[i].workingTime < min) {
                min = this.gameModel.landArray[i].workingTime;
            }
        }
        return min;
    };
    UIManager.prototype.useWorker = function (land) {
        this.gameController.model.storage.assignWorker(land);
        this.gameController.model.storage.workingWorkerNumber += 1;
        land.workingTime =
            this.gameController.model.storage.worker.workingInterval * 60;
        land.isReadyToWork = false;
        UIManager_1.instance.storageUI.updateUI();
    };
    UIManager.prototype.createLandUI = function () {
        for (var i = 0; i < this.gameModel.storage.land.number; i++) {
            this.updateLandUI(i);
            if (this.gameModel.landArray[i].isReadyToWork) {
                this.pushToQueue(i);
                this.useWorkerForQueue3();
            }
            else {
                if (this.gameModel.landArray[i].workingTime > 0) {
                    this.landUIArray[i].enableWorker();
                }
            }
        }
    };
    UIManager.prototype.createLandData = function () {
        var _this = this;
        /*this.landArrayClones = Array.from({ length: 9 }, () => ({
          ...this.gameController.model.storage.land,
        }));*/
        if (this.gameModel.landArray.length == 0) {
            this.gameModel.landArray = Array.from({ length: 9 }, function () {
                return _this.gameModel.storage.land.clone();
            });
        }
        cc.log(this.gameModel.landArray);
    };
    UIManager.prototype.updateLandUI = function (index) {
        this.landUIArray[index].enabled = true;
        this.landUIArray[index].index = index;
        this.landUIArray[index].enableLand();
    };
    UIManager.prototype.enableAllLand = function () {
        for (var i = 0; i < this.gameModel.storage.land.number; i++) {
            this.landUIArray[i].enableLand();
        }
    };
    UIManager.prototype.findLandForPlant = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.landUIArray[i].enabled) {
                if (this.gameModel.landArray[i].currentAsset.number > 0 &&
                    this.gameModel.landArray[i].isReadyToWork) {
                    this.pushToQueue(i);
                    this.useWorkerForQueue3();
                }
            }
        }
    };
    UIManager.prototype.Save = function () {
        this.gameController.saveGame();
    };
    UIManager.prototype.clearCache = function () {
        GameSaveManager_1.GameSaveManager.clear();
    };
    var UIManager_1;
    __decorate([
        property(LandUI_1.default)
    ], UIManager.prototype, "landUIArray", void 0);
    __decorate([
        property(StoreUI_1.default)
    ], UIManager.prototype, "storeUI", void 0);
    __decorate([
        property(StorageUI_1.default)
    ], UIManager.prototype, "storageUI", void 0);
    __decorate([
        property(cc.Button)
    ], UIManager.prototype, "StartBtn", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

cc._RF.pop();