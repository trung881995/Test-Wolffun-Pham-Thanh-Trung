
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
var LandUI_1 = require("../ui/LandUI");
var StorageUI_1 = require("../ui/StorageUI");
var StoreUI_1 = require("../ui/StoreUI");
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
    };
    UIManager.prototype.start = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLGdFQUErRDtBQUUvRCx1Q0FBaUQ7QUFDakQsNkNBQXdDO0FBQ3hDLHlDQUFvQztBQUdwQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTJLQztRQTFLbUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBR2pELHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBb0tuQixDQUFDO2tCQTNLb0IsU0FBUztJQVM1Qix3QkFBd0I7SUFFeEIsMEJBQU0sR0FBTjtRQUNFLElBQUksV0FBUyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDOUIsV0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmOzs7Ozs7O1VBT0U7UUFDRix5Q0FBeUM7SUFDM0MsQ0FBQztJQUNLLDJCQUFPLEdBQWI7Ozs7NEJBQ0UscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENB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Q0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFDdEM7b0JBQ0EsdUNBQXVDO29CQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFdEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7aUJBQzNCO2FBQ0Y7U0FDRjtJQUNILENBQUM7O0lBektpQjtRQUFqQixRQUFRLENBQUMsZ0JBQU0sQ0FBQztrREFBNEI7SUFDMUI7UUFBbEIsUUFBUSxDQUFDLGlCQUFPLENBQUM7OENBQXlCO0lBQ3RCO1FBQXBCLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUE2QjtJQUg5QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBMks3QjtJQUFELGdCQUFDO0NBM0tELEFBMktDLENBM0tzQyxFQUFFLENBQUMsU0FBUyxHQTJLbEQ7a0JBM0tvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgTGFuZCB9IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUksIHsgTGFuZFN0YXRlIH0gZnJvbSBcIi4uL3VpL0xhbmRVSVwiO1xuaW1wb3J0IFN0b3JhZ2VVSSBmcm9tIFwiLi4vdWkvU3RvcmFnZVVJXCI7XG5pbXBvcnQgU3RvcmVVSSBmcm9tIFwiLi4vdWkvU3RvcmVVSVwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KExhbmRVSSkgbGFuZFVJQXJyYXk6IExhbmRVSVtdID0gW107XG4gIEBwcm9wZXJ0eShTdG9yZVVJKSBzdG9yZVVJOiBTdG9yZVVJID0gbnVsbDtcbiAgQHByb3BlcnR5KFN0b3JhZ2VVSSkgc3RvcmFnZVVJOiBTdG9yYWdlVUkgPSBudWxsO1xuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBVSU1hbmFnZXI7XG4gIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIGxhbmRBcnJheUNsb25lczogTGFuZFtdID0gW107XG4gIHRpbWU6IG51bWJlciA9IDA7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnNldHVwVUkoKTtcbiAgfVxuXG4gIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgLyogIGlmICh0aGlzLnRpbWUgPiAwKSB7XG4gICAgICB0aGlzLnRpbWUgLT0gZHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPCAwKSB7XG4gICAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgICAgdGhpcy50aW1lID0gMDtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgICAqL1xuICAgIC8vaWYgKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZSk7XG4gIH1cbiAgYXN5bmMgc2V0dXBVSSgpIHtcbiAgICBhd2FpdCB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnNldERhdGEoKTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLm5ld0xhbmQoKTtcblxuICAgIHRoaXMuY3JlYXRlTGFuZCgpO1xuXG4gICAgdGhpcy51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB0aGlzLnN0b3JhZ2VVSS5zZXR1cFVJKCk7XG4gICAgdGhpcy5zdG9yYWdlVUkudXBkYXRlVUkoKTtcblxuICAgIHRoaXMuc3RvcmVVSS5zZXR1cFVJKCk7XG4gIH1cbiAgdXNlV29ya2VyRm9yUXVldWUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmRVSUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JrZXJJZGxlKFxuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyXG4gICAgICAgICkgPiAwXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMudXNlV29ya2VyKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXlbMF0pO1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQuaXNSZWFkeVRvV29yaykge1xuICAgICAgICAgICAgdGhpcy51c2VXb3JrZXIodGhpcy5sYW5kVUlBcnJheVtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmlzUmVhZHlUb1dvcmspIHtcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5LnB1c2godGhpcy5sYW5kVUlBcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2VXb3JrZXJGb3JRdWV1ZTIoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmRVSUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JrZXJJZGxlKFxuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyXG4gICAgICAgICkgPiAwXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC5pc1JlYWR5VG9Xb3JrKSB7XG4gICAgICAgICAgdGhpcy51c2VXb3JrZXIodGhpcy5sYW5kVUlBcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRoaXMuY2hlY2tNaW5Xb3JraW5nVGltZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdXNoVG9RdWV1ZShsYW5kVUk6IExhbmRVSSkge1xuICAgIGlmIChcbiAgICAgIGxhbmRVSS5sYW5kLmlzUmVhZHlUb1dvcmsgJiZcbiAgICAgICF0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5LmluY2x1ZGVzKGxhbmRVSSlcbiAgICApIHtcbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkucHVzaChsYW5kVUkpO1xuICAgIH1cbiAgfVxuICB1c2VXb3JrZXJGb3JRdWV1ZTMoKSB7XG4gICAgbGV0IGlkbGVXb3JrZXIgPSB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ2V0V29ya2VySWRsZShcbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyXG4gICAgKTtcbiAgICBpZiAoaWRsZVdvcmtlciA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRsZVdvcmtlcjsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheVswXS5sYW5kLmlzUmVhZHlUb1dvcmspIHtcbiAgICAgICAgICAgIHRoaXMudXNlV29ya2VyKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXlbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRodWFcIik7XG4gICAgICAgICAgICAvL3RoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXlbMF0uZGlzYWJsZVdvcmtlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL3RoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXlbMF0ubGFuZC5pc1JlYWR5VG9Xb3JrID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy90aGlzLnRpbWUgPSB0aGlzLmNoZWNrTWluV29ya2luZ1RpbWUoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja01pbldvcmtpbmdUaW1lKCk6IG51bWJlciB7XG4gICAgbGV0IG1pbjogbnVtYmVyID0gdGhpcy5sYW5kVUlBcnJheVswXS5sYW5kLndvcmtpbmdUaW1lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC53b3JraW5nVGltZSA8IG1pbikge1xuICAgICAgICBtaW4gPSB0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQud29ya2luZ1RpbWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtaW47XG4gIH1cblxuICB1c2VXb3JrZXIobGFuZFVpOiBMYW5kVUkpIHtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYXNzaWduV29ya2VyKGxhbmRVaSk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgKz0gMTtcbiAgICBsYW5kVWkubGFuZC53b3JraW5nVGltZSA9XG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2VyLndvcmtpbmdJbnRlcnZhbCAqIDEwO1xuICAgIGxhbmRVaS5sYW5kLmlzUmVhZHlUb1dvcmsgPSBmYWxzZTtcbiAgICBsYW5kVWkuZW5hYmxlV29ya2VyKCk7XG4gIH1cbiAgY3JlYXRlTGFuZCgpIHtcbiAgICAvKnRoaXMubGFuZEFycmF5Q2xvbmVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogOSB9LCAoKSA9PiAoe1xuICAgICAgLi4udGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQsXG4gICAgfSkpOyovXG4gICAgdGhpcy5sYW5kQXJyYXlDbG9uZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+XG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubGFuZC5jbG9uZSgpXG4gICAgKTtcbiAgICBjYy5sb2codGhpcy5sYW5kQXJyYXlDbG9uZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyOyBpKyspIHtcbiAgICAgIHRoaXMudXBkYXRlTGFuZChpKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkucHVzaCh0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlTGFuZChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5sYW5kVUlBcnJheVtpbmRleF0ubGFuZCA9IHRoaXMubGFuZEFycmF5Q2xvbmVzW2luZGV4XTtcbiAgICB0aGlzLmxhbmRVSUFycmF5W2luZGV4XS5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxhbmRVSUFycmF5W2luZGV4XS5zZXR1cExhbmRTdGF0ZSgpO1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmVuYWJsZUxhbmQoKTtcbiAgfVxuICBlbmFibGVBbGxMYW5kKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyOyBpKyspIHtcbiAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlTGFuZCgpO1xuICAgIH1cbiAgfVxuICBmaW5kTGFuZEZvclBsYW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlZCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmN1cnJlbnRBc3NldC5udW1iZXIgPiAwICYmXG4gICAgICAgICAgdGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmlzUmVhZHlUb1dvcmtcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy90aGlzLmxhbmRVSUFycmF5W2ldLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgICAgICAgdGhpcy5wdXNoVG9RdWV1ZSh0aGlzLmxhbmRVSUFycmF5W2ldKTtcblxuICAgICAgICAgIHRoaXMudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==