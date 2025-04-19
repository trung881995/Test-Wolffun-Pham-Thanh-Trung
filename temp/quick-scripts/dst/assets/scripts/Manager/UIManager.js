
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        if (this.time > 0) {
            this.time -= dt;
        }
        else if (this.time < 0) {
            this.useWorkerForQueue2();
            this.time = 0;
        }
        else {
        }
    };
    UIManager.prototype.setupUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clones, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gameController.model.setData()];
                    case 1:
                        _a.sent();
                        clones = Array.from({ length: 5 }, function () { return (__assign({}, _this.gameController.model.storage.land)); });
                        for (i = 0; i < this.gameController.model.storage.land.number; i++) {
                            this.landUIArray[i].land = clones[i];
                            this.landUIArray[i].enabled = true;
                            this.landUIArray[i].DisplayUI();
                            //this.landUIArray[i].resetUI();
                            // this.landUIArray[i].disableWorker();
                            // this.landUIArray[i].setupUI();
                        }
                        this.gameController.model.queueLandArray.push(this.landUIArray[0]);
                        this.useWorkerForQueue2();
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
    };
    UIManager.prototype.createLand = function () {
        for (var i = 0; i < this.gameController.model.storage.land.number; i++) {
            this.landUIArray[i].enableLand();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsZ0VBQStEO0FBRS9ELHVDQUFrQztBQUNsQyw2Q0FBd0M7QUFDeEMseUNBQW9DO0FBR3BDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBa0hDO1FBakhtQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFJakQsVUFBSSxHQUFXLENBQUMsQ0FBQzs7SUEyR25CLENBQUM7a0JBbEhvQixTQUFTO0lBUzVCLHdCQUF3QjtJQUV4QiwwQkFBTSxHQUFOO1FBQ0UsSUFBSSxXQUFTLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM5QixXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNqQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxD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QUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ0QsOEJBQVUsR0FBVjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7SUFoSGlCO1FBQWpCLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO2tEQUE0QjtJQUMxQjtRQUFsQixRQUFRLENBQUMsaUJBQU8sQ0FBQzs4Q0FBeUI7SUFDdEI7UUFBcEIsUUFBUSxDQUFDLG1CQUFTLENBQUM7Z0RBQTZCO0lBSDlCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrSDdCO0lBQUQsZ0JBQUM7Q0FsSEQsQUFrSEMsQ0FsSHNDLEVBQUUsQ0FBQyxTQUFTLEdBa0hsRDtrQkFsSG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBMYW5kIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgU3RvcmFnZVVJIGZyb20gXCIuLi91aS9TdG9yYWdlVUlcIjtcbmltcG9ydCBTdG9yZVVJIGZyb20gXCIuLi91aS9TdG9yZVVJXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoTGFuZFVJKSBsYW5kVUlBcnJheTogTGFuZFVJW10gPSBbXTtcbiAgQHByb3BlcnR5KFN0b3JlVUkpIHN0b3JlVUk6IFN0b3JlVUkgPSBudWxsO1xuICBAcHJvcGVydHkoU3RvcmFnZVVJKSBzdG9yYWdlVUk6IFN0b3JhZ2VVSSA9IG51bGw7XG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFVJTWFuYWdlcjtcbiAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlcjtcblxuICB0aW1lOiBudW1iZXIgPSAwO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5zZXR1cFVJKCk7XG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWUgPiAwKSB7XG4gICAgICB0aGlzLnRpbWUgLT0gZHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPCAwKSB7XG4gICAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMigpO1xuICAgICAgdGhpcy50aW1lID0gMDtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfVxuICBhc3luYyBzZXR1cFVJKCkge1xuICAgIGF3YWl0IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc2V0RGF0YSgpO1xuICAgIGNvbnN0IGNsb25lcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCkgPT4gKHtcbiAgICAgIC4uLnRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLFxuICAgIH0pKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyOyBpKyspIHtcbiAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZCA9IGNsb25lc1tpXTtcbiAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLkRpc3BsYXlVSSgpO1xuICAgICAgLy90aGlzLmxhbmRVSUFycmF5W2ldLnJlc2V0VUkoKTtcbiAgICAgIC8vIHRoaXMubGFuZFVJQXJyYXlbaV0uZGlzYWJsZVdvcmtlcigpO1xuICAgICAgLy8gdGhpcy5sYW5kVUlBcnJheVtpXS5zZXR1cFVJKCk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkucHVzaCh0aGlzLmxhbmRVSUFycmF5WzBdKTtcbiAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMigpO1xuICAgIHRoaXMuc3RvcmFnZVVJLnNldHVwVUkoKTtcbiAgICB0aGlzLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuXG4gICAgdGhpcy5zdG9yZVVJLnNldHVwVUkoKTtcbiAgfVxuICB1c2VXb3JrZXJGb3JRdWV1ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdldFdvcmtlcklkbGUoXG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICAgICAgKSA+IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy51c2VXb3JrZXIodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheVswXSk7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC5pc1JlYWR5VG9Xb3JrKSB7XG4gICAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQuaXNSZWFkeVRvV29yaykge1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkucHVzaCh0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZVdvcmtlckZvclF1ZXVlMigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdldFdvcmtlcklkbGUoXG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICAgICAgKSA+IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmlzUmVhZHlUb1dvcmspIHtcbiAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5jaGVja01pbldvcmtpbmdUaW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNaW5Xb3JraW5nVGltZSgpOiBudW1iZXIge1xuICAgIGxldCBtaW46IG51bWJlciA9IHRoaXMubGFuZFVJQXJyYXlbMF0ubGFuZC53b3JraW5nVGltZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQud29ya2luZ1RpbWUgPCBtaW4pIHtcbiAgICAgICAgbWluID0gdGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLndvcmtpbmdUaW1lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgdXNlV29ya2VyKGxhbmRVaTogTGFuZFVJKSB7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFzc2lnbldvcmtlcihsYW5kVWkpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyICs9IDE7XG4gICAgbGFuZFVpLmxhbmQud29ya2luZ1RpbWUgPVxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci53b3JraW5nSW50ZXJ2YWwgKiAxMDtcbiAgICBsYW5kVWkubGFuZC5pc1JlYWR5VG9Xb3JrID0gZmFsc2U7XG4gIH1cbiAgY3JlYXRlTGFuZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLm51bWJlcjsgaSsrKSB7XG4gICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLmVuYWJsZUxhbmQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==