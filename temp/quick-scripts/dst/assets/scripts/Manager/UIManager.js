
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLGdFQUErRDtBQUMvRCxpREFBZ0Q7QUFFaEQsdUNBQWlEO0FBQ2pELDZDQUF3QztBQUN4Qyx5Q0FBb0M7QUFDcEMsOENBQTZDO0FBQzdDLHFEQUFvRDtBQUdwRDtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQThLQztRQTdLbUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFRaEQsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQWlLdkIsQ0FBQztrQkE5S29CLFNBQVM7SUFjNUIsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDRSxJQUFJLFdBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDRSxjQUFjO0lBQ2hCLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sRUFBVSxJQUFTLENBQUM7SUFDckIsd0JBQUksR0FBVjs7Ozs0QkFDRSxxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dC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QUVELDhCQUFVLEdBQVY7UUFDRSxpQ0FBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7O0lBNUtpQjtRQUFqQixRQUFRLENBQUMsZ0JBQU0sQ0FBQztrREFBNEI7SUFDMUI7UUFBbEIsUUFBUSxDQUFDLGlCQUFPLENBQUM7OENBQXlCO0lBQ3RCO1FBQXBCLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUE2QjtJQUM1QjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FBNEI7SUFKN0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQThLN0I7SUFBRCxnQkFBQztDQTlLRCxBQThLQyxDQTlLc0MsRUFBRSxDQUFDLFNBQVMsR0E4S2xEO2tCQTlLb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBMYW5kIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUgfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgU3RvcmFnZVVJIGZyb20gXCIuLi91aS9TdG9yYWdlVUlcIjtcbmltcG9ydCBTdG9yZVVJIGZyb20gXCIuLi91aS9TdG9yZVVJXCI7XG5pbXBvcnQgeyBHYW1lVmlldyB9IGZyb20gXCIuLi92aWV3cy9HYW1lVmlld1wiO1xuaW1wb3J0IHsgR2FtZVNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4vR2FtZVNhdmVNYW5hZ2VyXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoTGFuZFVJKSBsYW5kVUlBcnJheTogTGFuZFVJW10gPSBbXTtcbiAgQHByb3BlcnR5KFN0b3JlVUkpIHN0b3JlVUk6IFN0b3JlVUkgPSBudWxsO1xuICBAcHJvcGVydHkoU3RvcmFnZVVJKSBzdG9yYWdlVUk6IFN0b3JhZ2VVSSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pIFN0YXJ0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFVJTWFuYWdlcjtcblxuICBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIGdhbWVNb2RlbDogR2FtZU1vZGVsO1xuICBnYW1lVmlldzogR2FtZVZpZXc7XG5cbiAgdGltZTogbnVtYmVyID0gMDtcbiAgc2F2ZVRpbWU6IG51bWJlciA9IDE7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5Jbml0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvL3RoaXMuU2F2ZSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHt9XG4gIGFzeW5jIEluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5zZXR1cCgpO1xuICB9XG4gIGFzeW5jIHNldHVwKCkge1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmdhbWVNb2RlbCA9IG5ldyBHYW1lTW9kZWwoKTtcbiAgICB0aGlzLmdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5pbml0KHRoaXMuZ2FtZU1vZGVsLCB0aGlzLmdhbWVWaWV3KTtcblxuICAgIGF3YWl0IHRoaXMuc2V0dXBEYXRhKCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5uZXdMYW5kKCk7XG4gICAgdGhpcy5jcmVhdGVMYW5kRGF0YSgpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubG9hZEdhbWUoKTtcbiAgICB0aGlzLnNldHVwVUkoKTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLnNldHVwKCk7XG4gICAgdGhpcy5TdGFydEJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICB9XG4gIGFzeW5jIHNldHVwRGF0YSgpIHtcbiAgICBhd2FpdCB0aGlzLmdhbWVNb2RlbC5zZXREYXRhKCk7XG4gIH1cbiAgc2V0dXBVSSgpIHtcbiAgICB0aGlzLmNyZWF0ZUxhbmRVSSgpO1xuICAgIHRoaXMuc3RvcmFnZVVJLnNldHVwVUkoKTtcbiAgICB0aGlzLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuXG4gICAgdGhpcy5zdG9yZVVJLnNldHVwVUkoKTtcbiAgfVxuXG4gIHB1c2hUb1F1ZXVlKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaW5kZXhdLmlzUmVhZHlUb1dvcmsgJiZcbiAgICAgICF0aGlzLmdhbWVNb2RlbC5xdWV1ZUluZGV4QXJyYXkuaW5jbHVkZXMoaW5kZXgpXG4gICAgKSB7XG4gICAgICB0aGlzLmdhbWVNb2RlbC5xdWV1ZUluZGV4QXJyYXkucHVzaChpbmRleCk7XG4gICAgfVxuICB9XG4gIHVzZVdvcmtlckZvclF1ZXVlMygpIHtcbiAgICBjb25zb2xlLmxvZyhcInF1ZXVlSW5kZXg6IFwiICsgdGhpcy5nYW1lTW9kZWwucXVldWVJbmRleEFycmF5KTtcbiAgICBsZXQgaWRsZVdvcmtlciA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JrZXJJZGxlKFxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICApO1xuICAgIGlmIChpZGxlV29ya2VyID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZGxlV29ya2VyOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVJbmRleEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5nYW1lTW9kZWwucXVldWVJbmRleEFycmF5WzBdXVxuICAgICAgICAgICAgICAuaXNSZWFkeVRvV29ya1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmxhbmRVSUFycmF5W1xuICAgICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5xdWV1ZUluZGV4QXJyYXlbMF1cbiAgICAgICAgICAgIF0uZW5hYmxlV29ya2VyKCk7XG4gICAgICAgICAgICB0aGlzLnVzZVdvcmtlcihcbiAgICAgICAgICAgICAgdGhpcy5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuZ2FtZU1vZGVsLnF1ZXVlSW5kZXhBcnJheVswXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UubGFuZFVJQXJyYXlbXG4gICAgICAgICAgICAgIHRoaXMuZ2FtZU1vZGVsLnF1ZXVlSW5kZXhBcnJheVswXVxuICAgICAgICAgICAgXS51cGRhdGVVSSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5nYW1lTW9kZWwucXVldWVJbmRleEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNaW5Xb3JraW5nVGltZSgpOiBudW1iZXIge1xuICAgIGxldCBtaW46IG51bWJlciA9IHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheVswXS53b3JraW5nVGltZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0ud29ya2luZ1RpbWUgPCBtaW4pIHtcbiAgICAgICAgbWluID0gdGhpcy5nYW1lTW9kZWwubGFuZEFycmF5W2ldLndvcmtpbmdUaW1lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgdXNlV29ya2VyKGxhbmQ6IExhbmQpIHtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYXNzaWduV29ya2VyKGxhbmQpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyICs9IDE7XG4gICAgbGFuZC53b3JraW5nVGltZSA9XG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2VyLndvcmtpbmdJbnRlcnZhbCAqIDYwO1xuICAgIGxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuXG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICB9XG4gIGNyZWF0ZUxhbmRVSSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZU1vZGVsLnN0b3JhZ2UubGFuZC5udW1iZXI7IGkrKykge1xuICAgICAgdGhpcy51cGRhdGVMYW5kVUkoaSk7XG5cbiAgICAgIGlmICh0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uaXNSZWFkeVRvV29yaykge1xuICAgICAgICB0aGlzLnB1c2hUb1F1ZXVlKGkpO1xuICAgICAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheVtpXS53b3JraW5nVGltZSA+IDApIHtcbiAgICAgICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLmVuYWJsZVdvcmtlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNyZWF0ZUxhbmREYXRhKCkge1xuICAgIC8qdGhpcy5sYW5kQXJyYXlDbG9uZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+ICh7XG4gICAgICAuLi50aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubGFuZCxcbiAgICB9KSk7Ki9cbiAgICBpZiAodGhpcy5nYW1lTW9kZWwubGFuZEFycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLnN0b3JhZ2UubGFuZC5jbG9uZSgpXG4gICAgICApO1xuICAgIH1cbiAgICBjYy5sb2codGhpcy5nYW1lTW9kZWwubGFuZEFycmF5KTtcbiAgfVxuICB1cGRhdGVMYW5kVUkoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmluZGV4ID0gaW5kZXg7XG5cbiAgICB0aGlzLmxhbmRVSUFycmF5W2luZGV4XS5lbmFibGVMYW5kKCk7XG4gIH1cbiAgZW5hYmxlQWxsTGFuZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZU1vZGVsLnN0b3JhZ2UubGFuZC5udW1iZXI7IGkrKykge1xuICAgICAgdGhpcy5sYW5kVUlBcnJheVtpXS5lbmFibGVMYW5kKCk7XG4gICAgfVxuICB9XG4gIGZpbmRMYW5kRm9yUGxhbnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmRVSUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5lbmFibGVkKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uY3VycmVudEFzc2V0Lm51bWJlciA+IDAgJiZcbiAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uaXNSZWFkeVRvV29ya1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnB1c2hUb1F1ZXVlKGkpO1xuXG4gICAgICAgICAgdGhpcy51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFNhdmUoKSB7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5zYXZlR2FtZSgpO1xuICB9XG5cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuY2xlYXIoKTtcbiAgfVxufVxuIl19