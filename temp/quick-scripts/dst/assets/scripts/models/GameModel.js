
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4666aTReI5J4JMzDYDwzNco', 'GameModel');
// scripts/models/GameModel.ts

"use strict";
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
exports.GameModel = void 0;
var BaseModel_1 = require("../../core/mvc/BaseModel");
var GameConfig_1 = require("../data/GameConfig");
var GameModel = /** @class */ (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameModel.prototype.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    GameModel.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig_1.loadFirstConfigFromCSV()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameModel.prototype.getData = function () {
        return GameConfig_1.FirstConfigs;
    };
    GameModel.prototype.getLandNumber = function () {
        var firstConfig = this.getData();
        return firstConfig.land.number;
    };
    GameModel.prototype.getTomatoSeedNumber = function () {
        var firstConfig = this.getData();
        return firstConfig.tomatoseed.number;
    };
    GameModel.prototype.getBlueberrySeedNumber = function () {
        var firstConfig = this.getData();
        return firstConfig.blueberryseed.number;
    };
    GameModel.prototype.getMilkCowNumber = function () {
        var firstConfig = this.getData();
        return firstConfig.milkcow.number;
    };
    GameModel.prototype.getWokerNumber = function () {
        var firstConfig = this.getData();
        return firstConfig.worker.number;
    };
    GameModel.prototype.getMachineNumber = function () {
        var firstConfig = this.getData();
        return firstConfig.machine.number;
    };
    return GameModel;
}(BaseModel_1.BaseModel));
exports.GameModel = GameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxpREFBMEU7QUFFMUU7SUFBK0IsNkJBQVM7SUFBeEM7O0lBaUNBLENBQUM7SUFoQ0Msd0JBQUksR0FBSjtRQUFLLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O0lBQVMsQ0FBQztJQUV2Qiw0QkFBUSxHQUFkOzs7OzRCQUNFLHFCQUFNLG1DQUFzQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDOzs7OztLQUNoQztJQUNNLDJCQUFPLEdBQWQ7UUFDRSxPQUFPLHlCQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFhLEdBQXBCO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUNNLHVDQUFtQixHQUExQjtRQUNFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFDTSwwQ0FBc0IsR0FBN0I7UUFDRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDO0lBQ00sb0NBQWdCLEdBQXZCO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUNNLGtDQUFjLEdBQXJCO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUNNLG9DQUFnQixHQUF2QjtRQUNFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFDSCxnQkFBQztBQUFELENBakNBLEFBaUNDLENBakM4QixxQkFBUyxHQWlDdkM7QUFqQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vY29yZS9tdmMvQmFzZU1vZGVsXCI7XG5pbXBvcnQgeyBGaXJzdENvbmZpZ3MsIGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YgfSBmcm9tIFwiLi4vZGF0YS9HYW1lQ29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWwge1xuICBpbml0KC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7fVxuXG4gIGFzeW5jIGxvYWREYXRhKCkge1xuICAgIGF3YWl0IGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YoKTtcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gRmlyc3RDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRMYW5kTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLmxhbmQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRUb21hdG9TZWVkTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLnRvbWF0b3NlZWQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRCbHVlYmVycnlTZWVkTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLmJsdWViZXJyeXNlZWQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRNaWxrQ293TnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLm1pbGtjb3cubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRXb2tlck51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy53b3JrZXIubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLm1hY2hpbmUubnVtYmVyO1xuICB9XG59XG4iXX0=