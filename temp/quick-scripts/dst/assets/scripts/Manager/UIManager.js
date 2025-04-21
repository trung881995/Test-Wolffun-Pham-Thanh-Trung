
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
    UIManager.prototype.update = function (dt) {
        /*  if (this.time > 0) {
          this.time -= dt;
        } else if (this.time < 0) {
          this.useWorkerForQueue3();
          this.time = 0;
        } else {
        }
        */
        if (this.gameController.model.storage &&
            this.gameModel.landArray.length == 9) {
        }
        this.saveTime -= dt;
        if (this.saveTime < 0) {
            this.saveTime = 1;
            //this.Save();
        }
    };
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
        //this.schedule(this.Save, 1);
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
                        //console.log("thua");
                        //this.gameController.model.queueLandArray[0].disableWorker();
                    }
                    //this.gameController.model.queueLandArray[0].land.isReadyToWork = false;
                    this.gameModel.queueIndexArray.splice(0, 1);
                }
            }
        }
        else {
            //this.time = this.checkMinWorkingTime();
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
            this.gameController.model.storage.worker.workingInterval * 10;
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
        //UIManager.instance.landUIArray[index] = this.landUIArray[index];
        this.landUIArray[index].enabled = true;
        this.landUIArray[index].index = index;
        //this.landUIArray[index].setupLandState();
        this.landUIArray[index].enableLand();
        //this.landUIArray[index].updateUI();
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
                    //this.landUIArray[i].setupLandState();
                    this.pushToQueue(i);
                    this.useWorkerForQueue3();
                }
            }
        }
    };
    UIManager.prototype.Save = function () {
        //GameSaveManager.clear();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLGdFQUErRDtBQUMvRCxpREFBZ0Q7QUFFaEQsdUNBQWlEO0FBQ2pELDZDQUF3QztBQUN4Qyx5Q0FBb0M7QUFDcEMsOENBQTZDO0FBQzdDLHFEQUFvRDtBQUdwRDtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTBNQztRQXpNbUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFRaEQsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQTZMdkIsQ0FBQztrQkExTW9CLFNBQVM7SUFjNUIsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDRSxJQUFJLFdBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDRSxjQUFjO0lBQ2hCLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmOzs7Ozs7O1VBT0U7UUFDRixJQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDakMsSUFB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SSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQ3pDO29CQUNBLHVDQUF1QztvQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFcEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7aUJBQzNCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0UsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDRSxpQ0FBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7O0lBeE1pQjtRQUFqQixRQUFRLENBQUMsZ0JBQU0sQ0FBQztrREFBNEI7SUFDMUI7UUFBbEIsUUFBUSxDQUFDLGlCQUFPLENBQUM7OENBQXlCO0lBQ3RCO1FBQXBCLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUE2QjtJQUM1QjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FBNEI7SUFKN0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBNN0I7SUFBRCxnQkFBQztDQTFNRCxBQTBNQyxDQTFNc0MsRUFBRSxDQUFDLFNBQVMsR0EwTWxEO2tCQTFNb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBMYW5kIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUgfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgU3RvcmFnZVVJIGZyb20gXCIuLi91aS9TdG9yYWdlVUlcIjtcbmltcG9ydCBTdG9yZVVJIGZyb20gXCIuLi91aS9TdG9yZVVJXCI7XG5pbXBvcnQgeyBHYW1lVmlldyB9IGZyb20gXCIuLi92aWV3cy9HYW1lVmlld1wiO1xuaW1wb3J0IHsgR2FtZVNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4vR2FtZVNhdmVNYW5hZ2VyXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoTGFuZFVJKSBsYW5kVUlBcnJheTogTGFuZFVJW10gPSBbXTtcbiAgQHByb3BlcnR5KFN0b3JlVUkpIHN0b3JlVUk6IFN0b3JlVUkgPSBudWxsO1xuICBAcHJvcGVydHkoU3RvcmFnZVVJKSBzdG9yYWdlVUk6IFN0b3JhZ2VVSSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pIFN0YXJ0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFVJTWFuYWdlcjtcblxuICBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIGdhbWVNb2RlbDogR2FtZU1vZGVsO1xuICBnYW1lVmlldzogR2FtZVZpZXc7XG5cbiAgdGltZTogbnVtYmVyID0gMDtcbiAgc2F2ZVRpbWU6IG51bWJlciA9IDE7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5Jbml0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvL3RoaXMuU2F2ZSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvKiAgaWYgKHRoaXMudGltZSA+IDApIHtcbiAgICAgIHRoaXMudGltZSAtPSBkdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGltZSA8IDApIHtcbiAgICAgIHRoaXMudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICB0aGlzLnRpbWUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgfVxuICAgICovXG4gICAgaWYgKFxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlICYmXG4gICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXkubGVuZ3RoID09IDlcbiAgICApIHtcbiAgICB9XG4gICAgdGhpcy5zYXZlVGltZSAtPSBkdDtcbiAgICBpZiAodGhpcy5zYXZlVGltZSA8IDApIHtcbiAgICAgIHRoaXMuc2F2ZVRpbWUgPSAxO1xuICAgICAgLy90aGlzLlNhdmUoKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLnNldHVwKCk7XG4gIH1cbiAgYXN5bmMgc2V0dXAoKSB7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xuICAgIHRoaXMuZ2FtZU1vZGVsID0gbmV3IEdhbWVNb2RlbCgpO1xuICAgIHRoaXMuZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcodGhpcy5nYW1lQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLmluaXQodGhpcy5nYW1lTW9kZWwsIHRoaXMuZ2FtZVZpZXcpO1xuXG4gICAgYXdhaXQgdGhpcy5zZXR1cERhdGEoKTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLm5ld0xhbmQoKTtcbiAgICB0aGlzLmNyZWF0ZUxhbmREYXRhKCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5sb2FkR2FtZSgpO1xuICAgIHRoaXMuc2V0dXBVSSgpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2V0dXAoKTtcbiAgICB0aGlzLlN0YXJ0QnRuLmludGVyYWN0YWJsZSA9IHRydWU7XG4gIH1cbiAgYXN5bmMgc2V0dXBEYXRhKCkge1xuICAgIGF3YWl0IHRoaXMuZ2FtZU1vZGVsLnNldERhdGEoKTtcbiAgfVxuICBzZXR1cFVJKCkge1xuICAgIHRoaXMuY3JlYXRlTGFuZFVJKCk7XG4gICAgdGhpcy5zdG9yYWdlVUkuc2V0dXBVSSgpO1xuICAgIHRoaXMuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG5cbiAgICB0aGlzLnN0b3JlVUkuc2V0dXBVSSgpO1xuICAgIC8vdGhpcy5zY2hlZHVsZSh0aGlzLlNhdmUsIDEpO1xuICB9XG5cbiAgcHVzaFRvUXVldWUoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheVtpbmRleF0uaXNSZWFkeVRvV29yayAmJlxuICAgICAgIXRoaXMuZ2FtZU1vZGVsLnF1ZXVlSW5kZXhBcnJheS5pbmNsdWRlcyhpbmRleClcbiAgICApIHtcbiAgICAgIHRoaXMuZ2FtZU1vZGVsLnF1ZXVlSW5kZXhBcnJheS5wdXNoKGluZGV4KTtcbiAgICB9XG4gIH1cbiAgdXNlV29ya2VyRm9yUXVldWUzKCkge1xuICAgIGNvbnNvbGUubG9nKFwicXVldWVJbmRleDogXCIgKyB0aGlzLmdhbWVNb2RlbC5xdWV1ZUluZGV4QXJyYXkpO1xuICAgIGxldCBpZGxlV29ya2VyID0gdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdldFdvcmtlcklkbGUoXG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlclxuICAgICk7XG4gICAgaWYgKGlkbGVXb3JrZXIgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkbGVXb3JrZXI7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUluZGV4QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmdhbWVNb2RlbC5xdWV1ZUluZGV4QXJyYXlbMF1dXG4gICAgICAgICAgICAgIC5pc1JlYWR5VG9Xb3JrXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UubGFuZFVJQXJyYXlbXG4gICAgICAgICAgICAgIHRoaXMuZ2FtZU1vZGVsLnF1ZXVlSW5kZXhBcnJheVswXVxuICAgICAgICAgICAgXS5lbmFibGVXb3JrZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXNlV29ya2VyKFxuICAgICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5nYW1lTW9kZWwucXVldWVJbmRleEFycmF5WzBdXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5sYW5kVUlBcnJheVtcbiAgICAgICAgICAgICAgdGhpcy5nYW1lTW9kZWwucXVldWVJbmRleEFycmF5WzBdXG4gICAgICAgICAgICBdLnVwZGF0ZVVJKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0aHVhXCIpO1xuICAgICAgICAgICAgLy90aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5WzBdLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy90aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5WzBdLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZ2FtZU1vZGVsLnF1ZXVlSW5kZXhBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy90aGlzLnRpbWUgPSB0aGlzLmNoZWNrTWluV29ya2luZ1RpbWUoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja01pbldvcmtpbmdUaW1lKCk6IG51bWJlciB7XG4gICAgbGV0IG1pbjogbnVtYmVyID0gdGhpcy5nYW1lTW9kZWwubGFuZEFycmF5WzBdLndvcmtpbmdUaW1lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheVtpXS53b3JraW5nVGltZSA8IG1pbikge1xuICAgICAgICBtaW4gPSB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0ud29ya2luZ1RpbWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtaW47XG4gIH1cblxuICB1c2VXb3JrZXIobGFuZDogTGFuZCkge1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hc3NpZ25Xb3JrZXIobGFuZCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgKz0gMTtcbiAgICBsYW5kLndvcmtpbmdUaW1lID1cbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsICogMTA7XG4gICAgbGFuZC5pc1JlYWR5VG9Xb3JrID0gZmFsc2U7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gIH1cbiAgY3JlYXRlTGFuZFVJKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lTW9kZWwuc3RvcmFnZS5sYW5kLm51bWJlcjsgaSsrKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhbmRVSShpKTtcblxuICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheVtpXS5pc1JlYWR5VG9Xb3JrKSB7XG4gICAgICAgIHRoaXMucHVzaFRvUXVldWUoaSk7XG4gICAgICAgIHRoaXMudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5nYW1lTW9kZWwubGFuZEFycmF5W2ldLndvcmtpbmdUaW1lID4gMCkge1xuICAgICAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlV29ya2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3JlYXRlTGFuZERhdGEoKSB7XG4gICAgLyp0aGlzLmxhbmRBcnJheUNsb25lcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gKHtcbiAgICAgIC4uLnRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLFxuICAgIH0pKTsqL1xuICAgIGlmICh0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXkubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT5cbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuc3RvcmFnZS5sYW5kLmNsb25lKClcbiAgICAgICk7XG4gICAgfVxuICAgIGNjLmxvZyh0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXkpO1xuICB9XG4gIHVwZGF0ZUxhbmRVSShpbmRleDogbnVtYmVyKSB7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UubGFuZFVJQXJyYXlbaW5kZXhdID0gdGhpcy5sYW5kVUlBcnJheVtpbmRleF07XG4gICAgdGhpcy5sYW5kVUlBcnJheVtpbmRleF0uZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5sYW5kVUlBcnJheVtpbmRleF0uaW5kZXggPSBpbmRleDtcblxuICAgIC8vdGhpcy5sYW5kVUlBcnJheVtpbmRleF0uc2V0dXBMYW5kU3RhdGUoKTtcbiAgICB0aGlzLmxhbmRVSUFycmF5W2luZGV4XS5lbmFibGVMYW5kKCk7XG4gICAgLy90aGlzLmxhbmRVSUFycmF5W2luZGV4XS51cGRhdGVVSSgpO1xuICB9XG4gIGVuYWJsZUFsbExhbmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVNb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyOyBpKyspIHtcbiAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlTGFuZCgpO1xuICAgIH1cbiAgfVxuICBmaW5kTGFuZEZvclBsYW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlZCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5nYW1lTW9kZWwubGFuZEFycmF5W2ldLmN1cnJlbnRBc3NldC5udW1iZXIgPiAwICYmXG4gICAgICAgICAgdGhpcy5nYW1lTW9kZWwubGFuZEFycmF5W2ldLmlzUmVhZHlUb1dvcmtcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy90aGlzLmxhbmRVSUFycmF5W2ldLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5wdXNoVG9RdWV1ZShpKTtcblxuICAgICAgICAgIHRoaXMudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBTYXZlKCkge1xuICAgIC8vR2FtZVNhdmVNYW5hZ2VyLmNsZWFyKCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5zYXZlR2FtZSgpO1xuICB9XG5cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuY2xlYXIoKTtcbiAgfVxufVxuIl19