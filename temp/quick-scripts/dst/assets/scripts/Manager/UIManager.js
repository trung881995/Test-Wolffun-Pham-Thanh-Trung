
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
        _this.GamePanel = null;
        _this.landArrayClones = [];
        _this.time = 0;
        return _this;
    }
    UIManager_1 = UIManager;
    // LIFE-CYCLE CALLBACKS:
    UIManager.prototype.onLoad = function () {
        if (UIManager_1.instance == null) {
            UIManager_1.instance = this;
        }
    };
    UIManager.prototype.start = function () { };
    UIManager.prototype.update = function (dt) {
        /*  if (this.time > 0) {
          this.time -= dt;
        } else if (this.time < 0) {
          this.useWorkerForQueue3();
          this.time = 0;
        } else {
        }
        */
        //if (this.gameController.model.storage);
    };
    UIManager.prototype.setupUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gameController.model.setData()];
                    case 1:
                        _a.sent();
                        this.gameController.model.newLand();
                        this.createLand();
                        this.useWorkerForQueue3();
                        this.storageUI.setupUI();
                        this.storageUI.updateUI();
                        this.storeUI.setupUI();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.useWorkerForQueue = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber) > 0) {
                if (this.gameController.model.queueLandArray.length > 0) {
                    this.useWorker(this.gameController.model.queueLandArray[0]);
                    this.gameController.model.queueLandArray.splice(0, 1);
                }
                else {
                    if (this.landUIArray[i].land.isReadyToWork) {
                        this.useWorker(this.landUIArray[i]);
                    }
                }
            }
            else {
                if (this.landUIArray[i].land.isReadyToWork) {
                    this.gameController.model.queueLandArray.push(this.landUIArray[i]);
                }
            }
        }
    };
    UIManager.prototype.useWorkerForQueue2 = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber) > 0) {
                if (this.landUIArray[i].land.isReadyToWork) {
                    this.useWorker(this.landUIArray[i]);
                }
            }
            else {
                this.time = this.checkMinWorkingTime();
            }
        }
    };
    UIManager.prototype.pushToQueue = function (landUI) {
        if (landUI.land.isReadyToWork &&
            !this.gameController.model.queueLandArray.includes(landUI)) {
            this.gameController.model.queueLandArray.push(landUI);
        }
    };
    UIManager.prototype.useWorkerForQueue3 = function () {
        var idleWorker = this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber);
        if (idleWorker > 0) {
            for (var i = 0; i < idleWorker; i++) {
                if (this.gameController.model.queueLandArray.length > 0) {
                    if (this.gameController.model.queueLandArray[0].land.isReadyToWork) {
                        this.useWorker(this.gameController.model.queueLandArray[0]);
                    }
                    else {
                        console.log("thua");
                        //this.gameController.model.queueLandArray[0].disableWorker();
                    }
                    //this.gameController.model.queueLandArray[0].land.isReadyToWork = false;
                    this.gameController.model.queueLandArray.splice(0, 1);
                }
            }
        }
        else {
            //this.time = this.checkMinWorkingTime();
        }
    };
    UIManager.prototype.checkMinWorkingTime = function () {
        var min = this.landUIArray[0].land.workingTime;
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.landUIArray[i].land.workingTime < min) {
                min = this.landUIArray[i].land.workingTime;
            }
        }
        return min;
    };
    UIManager.prototype.useWorker = function (landUi) {
        this.gameController.model.storage.assignWorker(landUi);
        this.gameController.model.storage.workingWorkerNumber += 1;
        landUi.land.workingTime =
            this.gameController.model.storage.worker.workingInterval * 10;
        landUi.land.isReadyToWork = false;
        landUi.enableWorker();
    };
    UIManager.prototype.createLand = function () {
        var _this = this;
        /*this.landArrayClones = Array.from({ length: 9 }, () => ({
          ...this.gameController.model.storage.land,
        }));*/
        this.landArrayClones = Array.from({ length: 9 }, function () {
            return _this.gameController.model.storage.land.clone();
        });
        cc.log(this.landArrayClones);
        for (var i = 0; i < this.gameController.model.storage.land.number; i++) {
            this.updateLand(i);
            this.gameController.model.queueLandArray.push(this.landUIArray[i]);
        }
    };
    UIManager.prototype.updateLand = function (index) {
        this.landUIArray[index].land = this.landArrayClones[index];
        this.landUIArray[index].enabled = true;
        this.landUIArray[index].setupLandState();
        this.landUIArray[index].enableLand();
    };
    UIManager.prototype.enableAllLand = function () {
        for (var i = 0; i < this.gameController.model.storage.land.number; i++) {
            this.landUIArray[i].enableLand();
        }
    };
    UIManager.prototype.findLandForPlant = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.landUIArray[i].enabled) {
                if (this.landUIArray[i].land.currentAsset.number > 0 &&
                    this.landUIArray[i].land.isReadyToWork) {
                    //this.landUIArray[i].setupLandState();
                    this.pushToQueue(this.landUIArray[i]);
                    this.useWorkerForQueue3();
                }
            }
        }
    };
    UIManager.prototype.clearCache = function () {
        GameSaveManager_1.GameSaveManager.clear();
    };
    UIManager.prototype.startGame = function () {
        //this.gameController.loadGame();
        this.gameController = new GameController_1.GameController();
        this.gameModel = new GameModel_1.GameModel();
        this.gameView = new GameView_1.GameView(this.gameController);
        this.gameController.init(this.gameModel, this.gameView);
        this.gameController.setupUI();
        this.setupUI();
        this.GamePanel.node.active = false;
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
        property(cc.Sprite)
    ], UIManager.prototype, "GamePanel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLGdFQUErRDtBQUMvRCxpREFBZ0Q7QUFFaEQsdUNBQWlEO0FBQ2pELDZDQUF3QztBQUN4Qyx5Q0FBb0M7QUFDcEMsOENBQTZDO0FBQzdDLHFEQUFvRDtBQUdwRDtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQThMQztRQTdMbUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFPakQscUJBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsVUFBSSxHQUFXLENBQUMsQ0FBQzs7SUFpTG5CLENBQUM7a0JBOUxvQixTQUFTO0lBZTVCLHdCQUF3QjtJQUV4QiwwQkFBTSxHQUFOO1FBQ0UsSUFBSSxXQUFTLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM5QixXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCx5QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLDBCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2Y7Ozs7Ozs7VUFPRTtRQUNGLHlDQUF5QztJQUMzQyxDQUFDO0lBQ0ssMkJBQU8sR0FBYjs7Ozs0QkFDRSxxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUs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U0FBUyxDQThMN0I7SUFBRCxnQkFBQztDQTlMRCxBQThMQyxDQTlMc0MsRUFBRSxDQUFDLFNBQVMsR0E4TGxEO2tCQTlMb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBMYW5kIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUgfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgU3RvcmFnZVVJIGZyb20gXCIuLi91aS9TdG9yYWdlVUlcIjtcbmltcG9ydCBTdG9yZVVJIGZyb20gXCIuLi91aS9TdG9yZVVJXCI7XG5pbXBvcnQgeyBHYW1lVmlldyB9IGZyb20gXCIuLi92aWV3cy9HYW1lVmlld1wiO1xuaW1wb3J0IHsgR2FtZVNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4vR2FtZVNhdmVNYW5hZ2VyXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoTGFuZFVJKSBsYW5kVUlBcnJheTogTGFuZFVJW10gPSBbXTtcbiAgQHByb3BlcnR5KFN0b3JlVUkpIHN0b3JlVUk6IFN0b3JlVUkgPSBudWxsO1xuICBAcHJvcGVydHkoU3RvcmFnZVVJKSBzdG9yYWdlVUk6IFN0b3JhZ2VVSSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSkgR2FtZVBhbmVsOiBjYy5TcHJpdGUgPSBudWxsO1xuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBVSU1hbmFnZXI7XG5cbiAgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyO1xuICBnYW1lTW9kZWw6IEdhbWVNb2RlbDtcbiAgZ2FtZVZpZXc6IEdhbWVWaWV3O1xuXG4gIGxhbmRBcnJheUNsb25lczogTGFuZFtdID0gW107XG4gIHRpbWU6IG51bWJlciA9IDA7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHt9XG5cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvKiAgaWYgKHRoaXMudGltZSA+IDApIHtcbiAgICAgIHRoaXMudGltZSAtPSBkdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGltZSA8IDApIHtcbiAgICAgIHRoaXMudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICB0aGlzLnRpbWUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgfVxuICAgICovXG4gICAgLy9pZiAodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlKTtcbiAgfVxuICBhc3luYyBzZXR1cFVJKCkge1xuICAgIGF3YWl0IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc2V0RGF0YSgpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwubmV3TGFuZCgpO1xuXG4gICAgdGhpcy5jcmVhdGVMYW5kKCk7XG5cbiAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIHRoaXMuc3RvcmFnZVVJLnNldHVwVUkoKTtcbiAgICB0aGlzLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuXG4gICAgdGhpcy5zdG9yZVVJLnNldHVwVUkoKTtcbiAgfVxuICB1c2VXb3JrZXJGb3JRdWV1ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdldFdvcmtlcklkbGUoXG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICAgICAgKSA+IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy51c2VXb3JrZXIodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheVswXSk7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC5pc1JlYWR5VG9Xb3JrKSB7XG4gICAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQuaXNSZWFkeVRvV29yaykge1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkucHVzaCh0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZVdvcmtlckZvclF1ZXVlMigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdldFdvcmtlcklkbGUoXG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICAgICAgKSA+IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmlzUmVhZHlUb1dvcmspIHtcbiAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5jaGVja01pbldvcmtpbmdUaW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1c2hUb1F1ZXVlKGxhbmRVSTogTGFuZFVJKSB7XG4gICAgaWYgKFxuICAgICAgbGFuZFVJLmxhbmQuaXNSZWFkeVRvV29yayAmJlxuICAgICAgIXRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkuaW5jbHVkZXMobGFuZFVJKVxuICAgICkge1xuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5wdXNoKGxhbmRVSSk7XG4gICAgfVxuICB9XG4gIHVzZVdvcmtlckZvclF1ZXVlMygpIHtcbiAgICBsZXQgaWRsZVdvcmtlciA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JrZXJJZGxlKFxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICApO1xuICAgIGlmIChpZGxlV29ya2VyID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZGxlV29ya2VyOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmICh0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5WzBdLmxhbmQuaXNSZWFkeVRvV29yaykge1xuICAgICAgICAgICAgdGhpcy51c2VXb3JrZXIodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheVswXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGh1YVwiKTtcbiAgICAgICAgICAgIC8vdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheVswXS5kaXNhYmxlV29ya2VyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheVswXS5sYW5kLmlzUmVhZHlUb1dvcmsgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL3RoaXMudGltZSA9IHRoaXMuY2hlY2tNaW5Xb3JraW5nVGltZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrTWluV29ya2luZ1RpbWUoKTogbnVtYmVyIHtcbiAgICBsZXQgbWluOiBudW1iZXIgPSB0aGlzLmxhbmRVSUFycmF5WzBdLmxhbmQud29ya2luZ1RpbWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmRVSUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLndvcmtpbmdUaW1lIDwgbWluKSB7XG4gICAgICAgIG1pbiA9IHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC53b3JraW5nVGltZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIHVzZVdvcmtlcihsYW5kVWk6IExhbmRVSSkge1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hc3NpZ25Xb3JrZXIobGFuZFVpKTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciArPSAxO1xuICAgIGxhbmRVaS5sYW5kLndvcmtpbmdUaW1lID1cbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsICogMTA7XG4gICAgbGFuZFVpLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgIGxhbmRVaS5lbmFibGVXb3JrZXIoKTtcbiAgfVxuICBjcmVhdGVMYW5kKCkge1xuICAgIC8qdGhpcy5sYW5kQXJyYXlDbG9uZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+ICh7XG4gICAgICAuLi50aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubGFuZCxcbiAgICB9KSk7Ki9cbiAgICB0aGlzLmxhbmRBcnJheUNsb25lcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT5cbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLmNsb25lKClcbiAgICApO1xuICAgIGNjLmxvZyh0aGlzLmxhbmRBcnJheUNsb25lcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubGFuZC5udW1iZXI7IGkrKykge1xuICAgICAgdGhpcy51cGRhdGVMYW5kKGkpO1xuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5wdXNoKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuICAgIH1cbiAgfVxuICB1cGRhdGVMYW5kKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxhbmRVSUFycmF5W2luZGV4XS5sYW5kID0gdGhpcy5sYW5kQXJyYXlDbG9uZXNbaW5kZXhdO1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgdGhpcy5sYW5kVUlBcnJheVtpbmRleF0uZW5hYmxlTGFuZCgpO1xuICB9XG4gIGVuYWJsZUFsbExhbmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubGFuZC5udW1iZXI7IGkrKykge1xuICAgICAgdGhpcy5sYW5kVUlBcnJheVtpXS5lbmFibGVMYW5kKCk7XG4gICAgfVxuICB9XG4gIGZpbmRMYW5kRm9yUGxhbnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmRVSUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5lbmFibGVkKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQuY3VycmVudEFzc2V0Lm51bWJlciA+IDAgJiZcbiAgICAgICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQuaXNSZWFkeVRvV29ya1xuICAgICAgICApIHtcbiAgICAgICAgICAvL3RoaXMubGFuZFVJQXJyYXlbaV0uc2V0dXBMYW5kU3RhdGUoKTtcbiAgICAgICAgICB0aGlzLnB1c2hUb1F1ZXVlKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuXG4gICAgICAgICAgdGhpcy51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyQ2FjaGUoKSB7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLmNsZWFyKCk7XG4gIH1cbiAgc3RhcnRHYW1lKCkge1xuICAgIC8vdGhpcy5nYW1lQ29udHJvbGxlci5sb2FkR2FtZSgpO1xuXG4gICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xuICAgIHRoaXMuZ2FtZU1vZGVsID0gbmV3IEdhbWVNb2RlbCgpO1xuICAgIHRoaXMuZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcodGhpcy5nYW1lQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLmluaXQodGhpcy5nYW1lTW9kZWwsIHRoaXMuZ2FtZVZpZXcpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2V0dXBVSSgpO1xuICAgIHRoaXMuc2V0dXBVSSgpO1xuXG4gICAgdGhpcy5HYW1lUGFuZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufVxuIl19