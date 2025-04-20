
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
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.landUIArray = [];
        _this.storeUI = null;
        _this.storageUI = null;
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
        this.gameController = new GameController_1.GameController();
        this.gameModel = new GameModel_1.GameModel();
        this.gameView = new GameView_1.GameView(this.gameController);
    };
    UIManager.prototype.start = function () {
        this.gameController.init(this.gameModel, this.gameView);
        this.gameController.setupUI();
        this.setupUI();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLGdFQUErRDtBQUMvRCxpREFBZ0Q7QUFFaEQsdUNBQWlEO0FBQ2pELDZDQUF3QztBQUN4Qyx5Q0FBb0M7QUFDcEMsOENBQTZDO0FBRzdDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBbUxDO1FBbExtQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFPakQscUJBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsVUFBSSxHQUFXLENBQUMsQ0FBQzs7SUF3S25CLENBQUM7a0JBbkxvQixTQUFTO0lBYTVCLHdCQUF3QjtJQUV4QiwwQkFBTSxHQUFOO1FBQ0UsSUFBSSxXQUFTLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM5QixXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFD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Q0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQ3RDO29CQUNBLHVDQUF1QztvQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXRDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2lCQUMzQjthQUNGO1NBQ0Y7SUFDSCxDQUFDOztJQWpMaUI7UUFBakIsUUFBUSxDQUFDLGdCQUFNLENBQUM7a0RBQTRCO0lBQzFCO1FBQWxCLFFBQVEsQ0FBQyxpQkFBTyxDQUFDOzhDQUF5QjtJQUN0QjtRQUFwQixRQUFRLENBQUMsbUJBQVMsQ0FBQztnREFBNkI7SUFIOUIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1MN0I7SUFBRCxnQkFBQztDQW5MRCxBQW1MQyxDQW5Mc0MsRUFBRSxDQUFDLFNBQVMsR0FtTGxEO2tCQW5Mb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBMYW5kIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUgfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgU3RvcmFnZVVJIGZyb20gXCIuLi91aS9TdG9yYWdlVUlcIjtcbmltcG9ydCBTdG9yZVVJIGZyb20gXCIuLi91aS9TdG9yZVVJXCI7XG5pbXBvcnQgeyBHYW1lVmlldyB9IGZyb20gXCIuLi92aWV3cy9HYW1lVmlld1wiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KExhbmRVSSkgbGFuZFVJQXJyYXk6IExhbmRVSVtdID0gW107XG4gIEBwcm9wZXJ0eShTdG9yZVVJKSBzdG9yZVVJOiBTdG9yZVVJID0gbnVsbDtcbiAgQHByb3BlcnR5KFN0b3JhZ2VVSSkgc3RvcmFnZVVJOiBTdG9yYWdlVUkgPSBudWxsO1xuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBVSU1hbmFnZXI7XG5cbiAgZ2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyO1xuICBnYW1lTW9kZWw6IEdhbWVNb2RlbDtcbiAgZ2FtZVZpZXc6IEdhbWVWaWV3O1xuXG4gIGxhbmRBcnJheUNsb25lczogTGFuZFtdID0gW107XG4gIHRpbWU6IG51bWJlciA9IDA7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XG4gICAgdGhpcy5nYW1lTW9kZWwgPSBuZXcgR2FtZU1vZGVsKCk7XG4gICAgdGhpcy5nYW1lVmlldyA9IG5ldyBHYW1lVmlldyh0aGlzLmdhbWVDb250cm9sbGVyKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuaW5pdCh0aGlzLmdhbWVNb2RlbCwgdGhpcy5nYW1lVmlldyk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5zZXR1cFVJKCk7XG4gICAgdGhpcy5zZXR1cFVJKCk7XG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIC8qICBpZiAodGhpcy50aW1lID4gMCkge1xuICAgICAgdGhpcy50aW1lIC09IGR0O1xuICAgIH0gZWxzZSBpZiAodGhpcy50aW1lIDwgMCkge1xuICAgICAgdGhpcy51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gICAgKi9cbiAgICAvL2lmICh0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UpO1xuICB9XG4gIGFzeW5jIHNldHVwVUkoKSB7XG4gICAgYXdhaXQgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zZXREYXRhKCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5uZXdMYW5kKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUxhbmQoKTtcblxuICAgIHRoaXMudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgdGhpcy5zdG9yYWdlVUkuc2V0dXBVSSgpO1xuICAgIHRoaXMuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG5cbiAgICB0aGlzLnN0b3JlVUkuc2V0dXBVSSgpO1xuICB9XG4gIHVzZVdvcmtlckZvclF1ZXVlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ2V0V29ya2VySWRsZShcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlclxuICAgICAgICApID4gMFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5WzBdKTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmlzUmVhZHlUb1dvcmspIHtcbiAgICAgICAgICAgIHRoaXMudXNlV29ya2VyKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC5pc1JlYWR5VG9Xb3JrKSB7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5wdXNoKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlV29ya2VyRm9yUXVldWUyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ2V0V29ya2VySWRsZShcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlclxuICAgICAgICApID4gMFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQuaXNSZWFkeVRvV29yaykge1xuICAgICAgICAgIHRoaXMudXNlV29ya2VyKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmNoZWNrTWluV29ya2luZ1RpbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVzaFRvUXVldWUobGFuZFVJOiBMYW5kVUkpIHtcbiAgICBpZiAoXG4gICAgICBsYW5kVUkubGFuZC5pc1JlYWR5VG9Xb3JrICYmXG4gICAgICAhdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5pbmNsdWRlcyhsYW5kVUkpXG4gICAgKSB7XG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5LnB1c2gobGFuZFVJKTtcbiAgICB9XG4gIH1cbiAgdXNlV29ya2VyRm9yUXVldWUzKCkge1xuICAgIGxldCBpZGxlV29ya2VyID0gdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdldFdvcmtlcklkbGUoXG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlclxuICAgICk7XG4gICAgaWYgKGlkbGVXb3JrZXIgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkbGVXb3JrZXI7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXlbMF0ubGFuZC5pc1JlYWR5VG9Xb3JrKSB7XG4gICAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5WzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aHVhXCIpO1xuICAgICAgICAgICAgLy90aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5WzBdLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy90aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5WzBdLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vdGhpcy50aW1lID0gdGhpcy5jaGVja01pbldvcmtpbmdUaW1lKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNaW5Xb3JraW5nVGltZSgpOiBudW1iZXIge1xuICAgIGxldCBtaW46IG51bWJlciA9IHRoaXMubGFuZFVJQXJyYXlbMF0ubGFuZC53b3JraW5nVGltZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQud29ya2luZ1RpbWUgPCBtaW4pIHtcbiAgICAgICAgbWluID0gdGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLndvcmtpbmdUaW1lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgdXNlV29ya2VyKGxhbmRVaTogTGFuZFVJKSB7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFzc2lnbldvcmtlcihsYW5kVWkpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyICs9IDE7XG4gICAgbGFuZFVpLmxhbmQud29ya2luZ1RpbWUgPVxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci53b3JraW5nSW50ZXJ2YWwgKiAxMDtcbiAgICBsYW5kVWkubGFuZC5pc1JlYWR5VG9Xb3JrID0gZmFsc2U7XG4gICAgbGFuZFVpLmVuYWJsZVdvcmtlcigpO1xuICB9XG4gIGNyZWF0ZUxhbmQoKSB7XG4gICAgLyp0aGlzLmxhbmRBcnJheUNsb25lcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT4gKHtcbiAgICAgIC4uLnRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLFxuICAgIH0pKTsqL1xuICAgIHRoaXMubGFuZEFycmF5Q2xvbmVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogOSB9LCAoKSA9PlxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQuY2xvbmUoKVxuICAgICk7XG4gICAgY2MubG9nKHRoaXMubGFuZEFycmF5Q2xvbmVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLm51bWJlcjsgaSsrKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhbmQoaSk7XG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5LnB1c2godGhpcy5sYW5kVUlBcnJheVtpXSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUxhbmQoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmxhbmQgPSB0aGlzLmxhbmRBcnJheUNsb25lc1tpbmRleF07XG4gICAgdGhpcy5sYW5kVUlBcnJheVtpbmRleF0uZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5sYW5kVUlBcnJheVtpbmRleF0uc2V0dXBMYW5kU3RhdGUoKTtcbiAgICB0aGlzLmxhbmRVSUFycmF5W2luZGV4XS5lbmFibGVMYW5kKCk7XG4gIH1cbiAgZW5hYmxlQWxsTGFuZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLm51bWJlcjsgaSsrKSB7XG4gICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLmVuYWJsZUxhbmQoKTtcbiAgICB9XG4gIH1cbiAgZmluZExhbmRGb3JQbGFudCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmVuYWJsZWQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC5jdXJyZW50QXNzZXQubnVtYmVyID4gMCAmJlxuICAgICAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC5pc1JlYWR5VG9Xb3JrXG4gICAgICAgICkge1xuICAgICAgICAgIC8vdGhpcy5sYW5kVUlBcnJheVtpXS5zZXR1cExhbmRTdGF0ZSgpO1xuICAgICAgICAgIHRoaXMucHVzaFRvUXVldWUodGhpcy5sYW5kVUlBcnJheVtpXSk7XG5cbiAgICAgICAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=