
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
var Store_1 = require("../Store/Store");
var GameConfig_1 = require("../data/GameConfig");
var Storage_1 = require("../storage/Storage");
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
    GameModel.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        this.storage = new Storage_1.Storage();
                        this.store = new Store_1.Store(this.storage);
                        this.storage.land = new Storage_1.Land();
                        this.storage.tomatoSeed = new Storage_1.TomatoSeed();
                        this.storage.blueberrySeed = new Storage_1.BlueberrySeed();
                        this.storage.strawberrySeed = new Storage_1.StrawberrySeed();
                        this.storage.milkCow = new Storage_1.MilkCow();
                        this.storage.cow = new Storage_1.Cow();
                        this.storage.worker = new Storage_1.Worker();
                        this.storage.machine = new Storage_1.Machine();
                        this.storage.tomato = new Storage_1.Tomato();
                        this.storage.blueberry = new Storage_1.Blueberry();
                        this.storage.strawberry = new Storage_1.Strawberry();
                        this.storage.milk = new Storage_1.Milk();
                        this.storage.beef = new Storage_1.Beef();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameModel.prototype.setData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        this.storage.gold = 0;
                        this.storage.land.number = GameConfig_1.FirstConfigs.land.number;
                        this.storage.land.buyPrice = GameConfig_1.LandConfigs.red.buyPrice;
                        this.storage.land.name = GameConfig_1.LandConfigs.red.name;
                        this.storage.land.missionNumber = GameConfig_1.LandConfigs.red.missionNumber;
                        this.storage.land.containInterval = GameConfig_1.LandConfigs.red.containInterval;
                        this.storage.land.containYield = 0;
                        this.storage.land.crop = 0;
                        this.storage.blueberrySeed.number = GameConfig_1.FirstConfigs.blueberryseed.number;
                        this.storage.blueberrySeed.name = GameConfig_1.PlantConfigs.blueberryseed.name;
                        this.storage.blueberrySeed.buyPrice = GameConfig_1.PlantConfigs.blueberryseed.buyPrice;
                        this.storage.blueberrySeed.harvestInterval =
                            GameConfig_1.PlantConfigs.blueberryseed.harvestInterval;
                        this.storage.blueberrySeed.maxHarvest =
                            GameConfig_1.PlantConfigs.blueberryseed.maxHarvest;
                        this.storage.tomatoSeed.number = GameConfig_1.FirstConfigs.tomatoseed.number;
                        this.storage.tomatoSeed.name = GameConfig_1.PlantConfigs.tomatoseed.name;
                        this.storage.tomatoSeed.buyPrice = GameConfig_1.PlantConfigs.tomatoseed.buyPrice;
                        this.storage.tomatoSeed.harvestInterval =
                            GameConfig_1.PlantConfigs.tomatoseed.harvestInterval;
                        this.storage.tomatoSeed.maxHarvest = GameConfig_1.PlantConfigs.tomatoseed.maxHarvest;
                        this.storage.strawberrySeed.number = 0;
                        this.storage.strawberrySeed.name = GameConfig_1.PlantConfigs.strawberryseed.name;
                        this.storage.strawberrySeed.buyPrice = GameConfig_1.PlantConfigs.strawberryseed.buyPrice;
                        this.storage.strawberrySeed.harvestInterval =
                            GameConfig_1.PlantConfigs.strawberryseed.harvestInterval;
                        this.storage.strawberrySeed.maxHarvest =
                            GameConfig_1.PlantConfigs.strawberryseed.maxHarvest;
                        this.storage.milkCow.number = GameConfig_1.FirstConfigs.milkcow.number;
                        this.storage.milkCow.name = GameConfig_1.CattleConfigs.milkcow.name;
                        this.storage.milkCow.buyPrice = GameConfig_1.CattleConfigs.milkcow.buyPrice;
                        this.storage.milkCow.harvestInterval =
                            GameConfig_1.CattleConfigs.milkcow.harvestInterval;
                        this.storage.milkCow.maxHarvest = GameConfig_1.CattleConfigs.milkcow.maxHarvest;
                        this.storage.cow.number = 0;
                        this.storage.cow.name = GameConfig_1.CattleConfigs.cow.name;
                        this.storage.cow.buyPrice = GameConfig_1.CattleConfigs.cow.buyPrice;
                        this.storage.cow.harvestInterval = GameConfig_1.CattleConfigs.cow.harvestInterval;
                        this.storage.cow.maxHarvest = GameConfig_1.CattleConfigs.cow.maxHarvest;
                        this.storage.worker.number = GameConfig_1.FirstConfigs.worker.number;
                        this.storage.worker.name = GameConfig_1.WorkerConfigs.middle.name;
                        this.storage.worker.workingInterval = GameConfig_1.WorkerConfigs.middle.workingInterval;
                        this.storage.worker.buyPrice = GameConfig_1.WorkerConfigs.middle.buyPrice;
                        this.storage.workingWorkerNumber = 0;
                        this.storage.machine.level = GameConfig_1.MachineConfigs.china.level;
                        this.storage.machine.name = GameConfig_1.MachineConfigs.china.name;
                        this.storage.machine.support = GameConfig_1.MachineConfigs.china.support;
                        this.storage.machine.upgradePrice = GameConfig_1.MachineConfigs.china.upgradePrice;
                        this.storage.tomato.number = 0;
                        this.storage.tomato.name = GameConfig_1.YieldConfigs.tomato.name;
                        this.storage.tomato.sellPrice = GameConfig_1.YieldConfigs.tomato.sellPrice;
                        this.storage.blueberry.number = 0;
                        this.storage.blueberry.name = GameConfig_1.YieldConfigs.blueberry.name;
                        this.storage.blueberry.sellPrice = GameConfig_1.YieldConfigs.blueberry.sellPrice;
                        this.storage.strawberry.number = 0;
                        this.storage.strawberry.name = GameConfig_1.YieldConfigs.strawberry.name;
                        this.storage.strawberry.sellPrice = GameConfig_1.YieldConfigs.strawberry.sellPrice;
                        this.storage.milk.number = 0;
                        this.storage.milk.name = GameConfig_1.YieldConfigs.milk.name;
                        this.storage.milk.sellPrice = GameConfig_1.YieldConfigs.milk.sellPrice;
                        this.storage.beef.number = 0;
                        this.storage.beef.name = GameConfig_1.YieldConfigs.beef.name;
                        this.storage.beef.sellPrice = GameConfig_1.YieldConfigs.beef.sellPrice;
                        return [2 /*return*/];
                }
            });
        });
    };
    GameModel.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig_1.loadFirstConfigFromCSV()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadCattleConfigFromCSV()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadPlantConfigFromCSV()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadLandConfigFromCSV()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadYieldConfigFromCSV()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadWorkerConfigFromCSV()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadMachineConfigFromCSV()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameModel.prototype.getFirstData = function () {
        return GameConfig_1.FirstConfigs;
    };
    GameModel.prototype.getPlantData = function () {
        return GameConfig_1.PlantConfigs;
    };
    GameModel.prototype.getLandData = function () {
        return GameConfig_1.LandConfigs;
    };
    GameModel.prototype.getCattleData = function () {
        return GameConfig_1.CattleConfigs;
    };
    GameModel.prototype.getYieldData = function () {
        return GameConfig_1.YieldConfigs;
    };
    GameModel.prototype.getWorkerData = function () {
        return GameConfig_1.WorkerConfigs;
    };
    GameModel.prototype.getMachineData = function () {
        return GameConfig_1.MachineConfigs;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCx3Q0FBdUM7QUFDdkMsaURBZTRCO0FBQzVCLDhDQWU0QjtBQUU1QjtJQUErQiw2QkFBUztJQUF4Qzs7SUFtS0EsQ0FBQztJQWxLQyx3QkFBSSxHQUFKO1FBQUssY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7SUFBUyxDQUFDO0lBT3ZCLHlCQUFLLEdBQVg7Ozs7NEJBQ0UscUJBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBckIsU0FBcUIsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksY0FBSSxFQUFFLENBQUM7d0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLHVCQUFhLEVBQUUsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7d0JBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO3dCQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFDO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLGdC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LENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO3dCQUU5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO3dCQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO3dCQUVwRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO3dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO3dCQUV0RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUUxRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztLQUMzRDtJQUNLLDRCQUFRLEdBQWQ7Ozs7NEJBQ0UscUJBQU0sbUNBQXNCLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLHFCQUFNLG9DQUF1QixFQUFFLEVBQUE7O3dCQUEvQixTQUErQixDQUFDO3dCQUNoQyxxQkFBTSxtQ0FBc0IsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IscUJBQU0sa0NBQXFCLEVBQUUsRUFBQTs7d0JBQTdCLFNBQTZCLENBQUM7d0JBQzlCLHFCQUFNLG1DQUFzQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixxQkFBTSxvQ0FBdUIsRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDaEMscUJBQU0scUNBQXdCLEVBQUUsRUFBQTs7d0JBQWhDLFNBQWdDLENBQUM7Ozs7O0tBQ2xDO0lBQ00sZ0NBQVksR0FBbkI7UUFDRSxPQUFPLHlCQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSwrQkFBVyxHQUFsQjtRQUNFLE9BQU8sd0JBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ00saUNBQWEsR0FBcEI7UUFDRSxPQUFPLDBCQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSxpQ0FBYSxHQUFwQjtRQUNFLE9BQU8sMEJBQWEsQ0FBQztJQUN2QixDQUFDO0lBQ00sa0NBQWMsR0FBckI7UUFDRSxPQUFPLDJCQUFjLENBQUM7SUFDeEIsQ0FBQztJQTJCSCxnQkFBQztBQUFELENBbktBLEFBbUtDLENBbks4QixxQkFBUyxHQW1LdkM7QUFuS1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vY29yZS9tdmMvQmFzZU1vZGVsXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi9TdG9yZS9TdG9yZVwiO1xuaW1wb3J0IHtcbiAgRmlyc3RDb25maWdzLFxuICBQbGFudENvbmZpZ3MsXG4gIENhdHRsZUNvbmZpZ3MsXG4gIFlpZWxkQ29uZmlncyxcbiAgTGFuZENvbmZpZ3MsXG4gIFdvcmtlckNvbmZpZ3MsXG4gIE1hY2hpbmVDb25maWdzLFxuICBsb2FkQ2F0dGxlQ29uZmlnRnJvbUNTVixcbiAgbG9hZEZpcnN0Q29uZmlnRnJvbUNTVixcbiAgbG9hZExhbmRDb25maWdGcm9tQ1NWLFxuICBsb2FkTWFjaGluZUNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRQbGFudENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRXb3JrZXJDb25maWdGcm9tQ1NWLFxuICBsb2FkWWllbGRDb25maWdGcm9tQ1NWLFxufSBmcm9tIFwiLi4vZGF0YS9HYW1lQ29uZmlnXCI7XG5pbXBvcnQge1xuICBCZWVmLFxuICBCbHVlYmVycnksXG4gIEJsdWViZXJyeVNlZWQsXG4gIENvdyxcbiAgTGFuZCxcbiAgTWFjaGluZSxcbiAgTWlsayxcbiAgTWlsa0NvdyxcbiAgU3RvcmFnZSxcbiAgU3RyYXdiZXJyeSxcbiAgU3RyYXdiZXJyeVNlZWQsXG4gIFRvbWF0byxcbiAgVG9tYXRvU2VlZCxcbiAgV29ya2VyLFxufSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWwge1xuICBpbml0KC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7fVxuICBzdG9yZTogU3RvcmU7XG4gIHN0b3JhZ2U6IFN0b3JhZ2U7XG5cbiAgc3RhcnRMYW5kTnVtYmVyOiBudW1iZXI7XG5cbiAgbGFuZEFycmF5OiBMYW5kW107XG4gIGFzeW5jIHNldHVwKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgIHRoaXMuc3RvcmUgPSBuZXcgU3RvcmUodGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZCA9IG5ldyBMYW5kKCk7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQgPSBuZXcgVG9tYXRvU2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkID0gbmV3IEJsdWViZXJyeVNlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQgPSBuZXcgU3RyYXdiZXJyeVNlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0NvdyA9IG5ldyBNaWxrQ293KCk7XG4gICAgdGhpcy5zdG9yYWdlLmNvdyA9IG5ldyBDb3coKTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyID0gbmV3IFdvcmtlcigpO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lID0gbmV3IE1hY2hpbmUoKTtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG8gPSBuZXcgVG9tYXRvKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeSA9IG5ldyBCbHVlYmVycnkoKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeSA9IG5ldyBTdHJhd2JlcnJ5KCk7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsgPSBuZXcgTWlsaygpO1xuICAgIHRoaXMuc3RvcmFnZS5iZWVmID0gbmV3IEJlZWYoKTtcbiAgfVxuICBhc3luYyBzZXREYXRhKCkge1xuICAgIGF3YWl0IHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnN0b3JhZ2UuZ29sZCA9IDA7XG5cbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MubGFuZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuYnV5UHJpY2UgPSBMYW5kQ29uZmlncy5yZWQuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubmFtZSA9IExhbmRDb25maWdzLnJlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm1pc3Npb25OdW1iZXIgPSBMYW5kQ29uZmlncy5yZWQubWlzc2lvbk51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jb250YWluSW50ZXJ2YWwgPSBMYW5kQ29uZmlncy5yZWQuY29udGFpbkludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5ZaWVsZCA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY3JvcCA9IDA7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IEZpcnN0Q29uZmlncy50b21hdG9zZWVkLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBGaXJzdENvbmZpZ3MubWlsa2Nvdy5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubmFtZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5taWxrY293LmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5jb3cubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm5hbWUgPSBDYXR0bGVDb25maWdzLmNvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UgPSBDYXR0bGVDb25maWdzLmNvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmhhcnZlc3RJbnRlcnZhbCA9IENhdHRsZUNvbmZpZ3MuY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLmNvdy5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBGaXJzdENvbmZpZ3Mud29ya2VyLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm5hbWUgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gV29ya2VyQ29uZmlncy5taWRkbGUud29ya2luZ0ludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5idXlQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyID0gMDtcblxuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLmxldmVsID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEubGV2ZWw7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubmFtZSA9IE1hY2hpbmVDb25maWdzLmNoaW5hLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUuc3VwcG9ydCA9IE1hY2hpbmVDb25maWdzLmNoaW5hLnN1cHBvcnQ7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUudXBncmFkZVByaWNlID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEudXBncmFkZVByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubmFtZSA9IFlpZWxkQ29uZmlncy50b21hdG8ubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy50b21hdG8uc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubmFtZSA9IFlpZWxkQ29uZmlncy5ibHVlYmVycnkubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5LnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5ibHVlYmVycnkuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5uYW1lID0gWWllbGRDb25maWdzLnN0cmF3YmVycnkubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3Muc3RyYXdiZXJyeS5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsay5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLm5hbWUgPSBZaWVsZENvbmZpZ3MubWlsay5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5taWxrLnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5iZWVmLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJlZWYubmFtZSA9IFlpZWxkQ29uZmlncy5iZWVmLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJlZWYuc2VsbFByaWNlID0gWWllbGRDb25maWdzLmJlZWYuc2VsbFByaWNlO1xuICB9XG4gIGFzeW5jIGxvYWREYXRhKCkge1xuICAgIGF3YWl0IGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkQ2F0dGxlQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRQbGFudENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkTGFuZENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkWWllbGRDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFdvcmtlckNvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkTWFjaGluZUNvbmZpZ0Zyb21DU1YoKTtcbiAgfVxuICBwdWJsaWMgZ2V0Rmlyc3REYXRhKCkge1xuICAgIHJldHVybiBGaXJzdENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFBsYW50RGF0YSgpIHtcbiAgICByZXR1cm4gUGxhbnRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRMYW5kRGF0YSgpIHtcbiAgICByZXR1cm4gTGFuZENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldENhdHRsZURhdGEoKSB7XG4gICAgcmV0dXJuIENhdHRsZUNvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFlpZWxkRGF0YSgpIHtcbiAgICByZXR1cm4gWWllbGRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRXb3JrZXJEYXRhKCkge1xuICAgIHJldHVybiBXb3JrZXJDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lRGF0YSgpIHtcbiAgICByZXR1cm4gTWFjaGluZUNvbmZpZ3M7XG4gIH1cblxuICAvKnB1YmxpYyBnZXRMYW5kTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLmxhbmQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRUb21hdG9TZWVkTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLnRvbWF0b3NlZWQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRCbHVlYmVycnlTZWVkTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLmJsdWViZXJyeXNlZWQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRNaWxrQ293TnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLm1pbGtjb3cubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRXb2tlck51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy53b3JrZXIubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLm1hY2hpbmUubnVtYmVyO1xuICB9XG4gICovXG59XG4iXX0=