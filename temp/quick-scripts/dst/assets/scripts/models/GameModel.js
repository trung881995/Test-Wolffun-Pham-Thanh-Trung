
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
var CattleType_1 = require("../../enums/CattleType");
var PlantType_1 = require("../../enums/PlantType");
var Store_1 = require("../Store/Store");
var GameConfig_1 = require("../data/GameConfig");
var Storage_1 = require("../storage/Storage");
var LandUI_1 = require("../ui/LandUI");
var GameModel = /** @class */ (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queueLandArray = [];
        return _this;
        /*public getLandNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.land.number;
        }
        public getTomatoSeedNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.tomatoseed.number;
        }
        public getBlueberrySeedNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.blueberryseed.number;
        }
        public getMilkCowNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.milkcow.number;
        }
        public getWokerNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.worker.number;
        }
        public getMachineNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.machine.number;
        }
        */
    }
    GameModel.prototype.loadTomatoSeedFromSave = function (data) {
        this.storage.tomatoSeed.name = data.name || "";
        this.storage.tomatoSeed.number = data.number || 0;
        this.storage.tomatoSeed.harvestInterval = data.harvestInterval || 0;
        this.storage.tomatoSeed.maxHarvest = data.maxHarvest || 0;
        this.storage.tomatoSeed.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveTomatoSeedData = function () {
        return this.storage.tomatoSeed;
    };
    GameModel.prototype.loadBlueberrySeedFromSave = function (data) {
        this.storage.blueberrySeed.name = data.name || "";
        this.storage.blueberrySeed.number = data.number || 0;
        this.storage.blueberrySeed.harvestInterval = data.harvestInterval || 0;
        this.storage.blueberrySeed.maxHarvest = data.maxHarvest || 0;
        this.storage.blueberrySeed.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveBlueberrySeedData = function () {
        return this.storage.blueberrySeed;
    };
    GameModel.prototype.loadStrawberrySeedFromSave = function (data) {
        this.storage.strawberrySeed.name = data.name || "";
        this.storage.strawberrySeed.number = data.number || 0;
        this.storage.strawberrySeed.harvestInterval = data.harvestInterval || 0;
        this.storage.strawberrySeed.maxHarvest = data.maxHarvest || 0;
        this.storage.strawberrySeed.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveStrawberrySeedData = function () {
        return this.storage.strawberrySeed;
    };
    GameModel.prototype.loadMilkCowFromSave = function (data) {
        this.storage.milkCow.name = data.name || "";
        this.storage.milkCow.number = data.number || 0;
        this.storage.milkCow.harvestInterval = data.harvestInterval || 0;
        this.storage.milkCow.maxHarvest = data.maxHarvest || 0;
        this.storage.milkCow.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveMilkCowData = function () {
        return this.storage.milkCow;
    };
    GameModel.prototype.loadWokerFromSave = function (data) {
        this.storage.worker.name = data.name || "";
        this.storage.worker.number = data.number || 0;
        this.storage.worker.workingInterval = data.workingInterval || 0;
        this.storage.worker.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveWorkerData = function () {
        return this.storage.worker;
    };
    GameModel.prototype.loadMachineFromSave = function (data) {
        this.storage.machine.name = data.name || "";
        this.storage.machine.level = data.level || 1;
        this.storage.machine.support = data.support || 10;
        this.storage.machine.upgradePrice = data.upgradePrice || 500;
    };
    GameModel.prototype.getSaveMachineData = function () {
        return this.storage.machine;
    };
    GameModel.prototype.loadGoldFromSave = function (data) {
        this.storage.gold = data || 0;
    };
    GameModel.prototype.getSaveGoldData = function () {
        return this.storage.gold;
    };
    GameModel.prototype.loadTimeStampFromSave = function (data) {
        this.storage.timestamp = data || 0;
    };
    GameModel.prototype.getSaveTimeStampData = function () {
        return this.storage.timestamp;
    };
    GameModel.prototype.loadWorkingWorkerNumberFromSave = function (data) {
        this.storage.workingWorkerNumber = data || 0;
    };
    GameModel.prototype.getSaveWorkingWorkerNumberData = function () {
        return this.storage.workingWorkerNumber;
    };
    GameModel.prototype.loadTomatoFromSave = function (data) {
        this.storage.tomato.name = data.name || "";
        this.storage.tomato.number = data.number || 0;
        this.storage.tomato.sellPrice = data.sellPrice || 5;
    };
    GameModel.prototype.getSaveTomatoData = function () {
        return this.storage.tomato;
    };
    GameModel.prototype.loadBlueberryFromSave = function (data) {
        this.storage.blueberry.name = data.name || "";
        this.storage.blueberry.number = data.number || 0;
        this.storage.blueberry.sellPrice = data.sellPrice || 8;
    };
    GameModel.prototype.getSaveBlueberryData = function () {
        return this.storage.blueberry;
    };
    GameModel.prototype.loadStrawberryFromSave = function (data) {
        this.storage.strawberry.name = data.name || "";
        this.storage.strawberry.number = data.number || 0;
        this.storage.strawberry.sellPrice = data.sellPrice || 10;
    };
    GameModel.prototype.getSaveStrawberryData = function () {
        return this.storage.strawberry;
    };
    GameModel.prototype.loadMilkFromSave = function (data) {
        this.storage.milk.name = data.name || "";
        this.storage.milk.number = data.number || 0;
        this.storage.milk.sellPrice = data.sellPrice || 15;
    };
    GameModel.prototype.getSaveMilkData = function () {
        return this.storage.milk;
    };
    GameModel.prototype.loadLandFromSave = function (data) {
        this.storage.land.name = data.name || "";
        this.storage.land.number = data.number || 0;
        this.storage.land.missionNumber = data.missionNumber || 1;
        this.storage.land.containInterval = data.containInterval =
            data.containInterval || 0;
        this.storage.land.buyPrice = data.buyPrice || 0;
        this.storage.land.containYield = data.containYield || 0;
        this.storage.land.currentAsset = data.currentAsset || new Storage_1.TomatoSeed();
        this.storage.land.crop = data.crop || 0;
        this.storage.land.workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.storage.land.workingTime = data.workingTime || 0;
        this.storage.land.isReadyToWork = data.isReadyToWork || true;
        this.storage.land.isEmpty = data.isEmpty || true;
        this.storage.land.time = data.time || 0;
        this.storage.land.landState = data.landState || LandUI_1.LandState.Empty;
        this.storage.land.plantType = data.plantType || null;
        this.storage.land.cattleType = data.cattleType || null;
    };
    GameModel.prototype.getSaveLandData = function () {
        return this.storage.land;
    };
    GameModel.prototype.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.storage = new Storage_1.Storage();
        this.store = new Store_1.Store(this.storage);
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
    };
    GameModel.prototype.setData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        this.init();
                        this.storage.gold = 10000;
                        this.storage.workingWorkerNumber = 0;
                        /*
                        this.storage.land.number = FirstConfigs.land.number;
                        this.storage.land.buyPrice = LandConfigs.red.buyPrice;
                        this.storage.land.name = LandConfigs.red.name;
                        this.storage.land.missionNumber = LandConfigs.red.missionNumber;
                        this.storage.land.containInterval = LandConfigs.red.containInterval;
                        this.storage.land.containYield = 0;
                        this.storage.land.crop = 0;
                        this.storage.land.workerAction = WorkerAction.TomatoPlant;
                        this.storage.land.workingTime = 0;
                        this.storage.land.currentAsset = this.storage.tomatoSeed;
                        this.storage.land.isReadyToWork = true;
                    */
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
                        this.storage.worker.isBusy = false;
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
    GameModel.prototype.newLand = function () {
        this.storage.land = new Storage_1.Land(LandUI_1.WorkerAction.TomatoPlant, 0, 0, GameConfig_1.LandConfigs.red.name, GameConfig_1.FirstConfigs.land.number, GameConfig_1.LandConfigs.red.missionNumber, GameConfig_1.LandConfigs.red.containInterval, GameConfig_1.LandConfigs.red.buyPrice, true, 0, LandUI_1.LandState.Empty, PlantType_1.PlantType.tomatoSeed, CattleType_1.CattleType.Milkcow, this.storage.tomatoSeed, 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxxREFBb0Q7QUFDcEQsbURBQWtEO0FBRWxELHdDQUF1QztBQUN2QyxpREFlNEI7QUFDNUIsOENBZTRCO0FBQzVCLHVDQUErRDtBQUUvRDtJQUErQiw2QkFBUztJQUF4QztRQUFBLHFFQXdVQztRQXRLQyxvQkFBYyxHQUFhLEVBQUUsQ0FBQzs7UUE2STlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF3QkU7SUFDSixDQUFDO0lBdlVDLDBDQUFzQixHQUF0QixVQUF1QixJQUFxQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCx5Q0FBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCw2Q0FBeUIsR0FBekIsVUFBMEIsSUFBd0M7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxh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LE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLDJCQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDJCQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLDJCQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt3QkFFOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt3QkFFcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFFMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7S0FDM0Q7SUFDSyw0QkFBUSxHQUFkOzs7OzRCQUNFLHFCQUFNLG1DQUFzQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixxQkFBTSxvQ0FBdUIsRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDaEMscUJBQU0sbUNBQXNCLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLHFCQUFNLGtDQUFxQixFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixxQkFBTSxtQ0FBc0IsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IscUJBQU0sb0NBQXVCLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLHFCQUFNLHFDQUF3QixFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDOzs7OztLQUNsQztJQUVELDJCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLGNBQUksQ0FDMUIscUJBQVksQ0FBQyxXQUFXLEVBQ3hCLENBQUMsRUFDRCxDQUFDLEVBQ0Qsd0JBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUNwQix5QkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ3hCLHdCQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDN0Isd0JBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUMvQix3QkFBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQ3hCLElBQUksRUFDSixDQUFDLEVBQ0Qsa0JBQVMsQ0FBQyxLQUFLLEVBQ2YscUJBQVMsQ0FBQyxVQUFVLEVBQ3BCLHVCQUFVLENBQUMsT0FBTyxFQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFDdkIsQ0FBQyxFQUNELElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00sK0JBQVcsR0FBbEI7UUFDRSxPQUFPLHdCQUFXLENBQUM7SUFDckIsQ0FBQztJQUNNLGlDQUFhLEdBQXBCO1FBQ0UsT0FBTywwQkFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQWEsR0FBcEI7UUFDRSxPQUFPLDBCQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNNLGtDQUFjLEdBQXJCO1FBQ0UsT0FBTywyQkFBYyxDQUFDO0lBQ3hCLENBQUM7SUEyQkgsZ0JBQUM7QUFBRCxDQXhVQSxBQXdVQyxDQXhVOEIscUJBQVMsR0F3VXZDO0FBeFVZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2NvcmUvbXZjL0Jhc2VNb2RlbFwiO1xuaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBTYXZlRGF0YSB9IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVTYXZlTWFuYWdlclwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcbmltcG9ydCB7XG4gIEZpcnN0Q29uZmlncyxcbiAgUGxhbnRDb25maWdzLFxuICBDYXR0bGVDb25maWdzLFxuICBZaWVsZENvbmZpZ3MsXG4gIExhbmRDb25maWdzLFxuICBXb3JrZXJDb25maWdzLFxuICBNYWNoaW5lQ29uZmlncyxcbiAgbG9hZENhdHRsZUNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRMYW5kQ29uZmlnRnJvbUNTVixcbiAgbG9hZE1hY2hpbmVDb25maWdGcm9tQ1NWLFxuICBsb2FkUGxhbnRDb25maWdGcm9tQ1NWLFxuICBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVixcbiAgbG9hZFlpZWxkQ29uZmlnRnJvbUNTVixcbn0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHtcbiAgQmVlZixcbiAgQmx1ZWJlcnJ5LFxuICBCbHVlYmVycnlTZWVkLFxuICBDb3csXG4gIExhbmQsXG4gIE1hY2hpbmUsXG4gIE1pbGssXG4gIE1pbGtDb3csXG4gIFN0b3JhZ2UsXG4gIFN0cmF3YmVycnksXG4gIFN0cmF3YmVycnlTZWVkLFxuICBUb21hdG8sXG4gIFRvbWF0b1NlZWQsXG4gIFdvcmtlcixcbn0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUsIFdvcmtlckFjdGlvbiB9IGZyb20gXCIuLi91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIGxvYWRUb21hdG9TZWVkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInRvbWF0b1NlZWRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQuaGFydmVzdEludGVydmFsID0gZGF0YS5oYXJ2ZXN0SW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5tYXhIYXJ2ZXN0ID0gZGF0YS5tYXhIYXJ2ZXN0IHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQuYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVRvbWF0b1NlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9TZWVkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICB9XG4gIGxvYWRCbHVlYmVycnlTZWVkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcImJsdWViZXJyeVNlZWRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuaGFydmVzdEludGVydmFsID0gZGF0YS5oYXJ2ZXN0SW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5tYXhIYXJ2ZXN0ID0gZGF0YS5tYXhIYXJ2ZXN0IHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZUJsdWViZXJyeVNlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlTZWVkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkO1xuICB9XG4gIGxvYWRTdHJhd2JlcnJ5U2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5U2VlZFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPSBkYXRhLmhhcnZlc3RJbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5tYXhIYXJ2ZXN0ID0gZGF0YS5tYXhIYXJ2ZXN0IHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVTdHJhd2JlcnJ5U2VlZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlTZWVkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDtcbiAgfVxuICBsb2FkTWlsa0Nvd0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrQ293XCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVNaWxrQ293RGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa0Nvd1wiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UubWlsa0NvdztcbiAgfVxuXG4gIGxvYWRXb2tlckZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JrZXJcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gZGF0YS53b3JraW5nSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVXb3JrZXJEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JrZXJcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLndvcmtlcjtcbiAgfVxuICBsb2FkTWFjaGluZUZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtYWNoaW5lXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5sZXZlbCA9IGRhdGEubGV2ZWwgfHwgMTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5zdXBwb3J0ID0gZGF0YS5zdXBwb3J0IHx8IDEwO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnVwZ3JhZGVQcmljZSA9IGRhdGEudXBncmFkZVByaWNlIHx8IDUwMDtcbiAgfVxuICBnZXRTYXZlTWFjaGluZURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIm1hY2hpbmVcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm1hY2hpbmU7XG4gIH1cbiAgbG9hZEdvbGRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiZ29sZFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ29sZCA9IGRhdGEgfHwgMDtcbiAgfVxuICBnZXRTYXZlR29sZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImdvbGRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdvbGQ7XG4gIH1cbiAgbG9hZFRpbWVTdGFtcEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0aW1lc3RhbXBcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnRpbWVzdGFtcCA9IGRhdGEgfHwgMDtcbiAgfVxuICBnZXRTYXZlVGltZVN0YW1wRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widGltZXN0YW1wXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS50aW1lc3RhbXA7XG4gIH1cblxuICBsb2FkV29ya2luZ1dvcmtlck51bWJlckZyb21TYXZlKFxuICAgIGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JraW5nV29ya2VyTnVtYmVyXCJdPlxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciA9IGRhdGEgfHwgMDtcbiAgfVxuICBnZXRTYXZlV29ya2luZ1dvcmtlck51bWJlckRhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIndvcmtpbmdXb3JrZXJOdW1iZXJcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXI7XG4gIH1cbiAgbG9hZFRvbWF0b0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9cIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8uc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgNTtcbiAgfVxuICBnZXRTYXZlVG9tYXRvRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS50b21hdG87XG4gIH1cbiAgbG9hZEJsdWViZXJyeUZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkuc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgODtcbiAgfVxuICBnZXRTYXZlQmx1ZWJlcnJ5RGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5ibHVlYmVycnk7XG4gIH1cbiAgbG9hZFN0cmF3YmVycnlGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5zZWxsUHJpY2UgPSBkYXRhLnNlbGxQcmljZSB8fCAxMDtcbiAgfVxuICBnZXRTYXZlU3RyYXdiZXJyeURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnN0cmF3YmVycnk7XG4gIH1cbiAgbG9hZE1pbGtGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa1wiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5zZWxsUHJpY2UgPSBkYXRhLnNlbGxQcmljZSB8fCAxNTtcbiAgfVxuICBnZXRTYXZlTWlsa0RhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm1pbGs7XG4gIH1cblxuICBsb2FkTGFuZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJsYW5kXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCA9XG4gICAgICBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY3VycmVudEFzc2V0ID0gZGF0YS5jdXJyZW50QXNzZXQgfHwgbmV3IFRvbWF0b1NlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrIHx8IHRydWU7XG5cbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5IHx8IHRydWU7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQudGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZSB8fCBudWxsO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGUgfHwgbnVsbDtcbiAgfVxuICBnZXRTYXZlTGFuZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImxhbmRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmxhbmQ7XG4gIH1cblxuICBpbml0KC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICB0aGlzLnN0b3JlID0gbmV3IFN0b3JlKHRoaXMuc3RvcmFnZSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCA9IG5ldyBUb21hdG9TZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQgPSBuZXcgQmx1ZWJlcnJ5U2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZCA9IG5ldyBTdHJhd2JlcnJ5U2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293ID0gbmV3IE1pbGtDb3coKTtcbiAgICB0aGlzLnN0b3JhZ2UuY293ID0gbmV3IENvdygpO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUgPSBuZXcgTWFjaGluZSgpO1xuXG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0byA9IG5ldyBUb21hdG8oKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5ID0gbmV3IEJsdWViZXJyeSgpO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5ID0gbmV3IFN0cmF3YmVycnkoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsayA9IG5ldyBNaWxrKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJlZWYgPSBuZXcgQmVlZigpO1xuICB9XG4gIHN0b3JlOiBTdG9yZTtcbiAgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzdGFydExhbmROdW1iZXI6IG51bWJlcjtcblxuICBxdWV1ZUxhbmRBcnJheTogTGFuZFVJW10gPSBbXTtcblxuICBhc3luYyBzZXREYXRhKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnN0b3JhZ2UuZ29sZCA9IDEwMDAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyID0gMDtcbiAgICAvKlxuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm51bWJlciA9IEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IExhbmRDb25maWdzLnJlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gTGFuZENvbmZpZ3MucmVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubWlzc2lvbk51bWJlciA9IExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5JbnRlcnZhbCA9IExhbmRDb25maWdzLnJlZC5jb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jcm9wID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmN1cnJlbnRBc3NldCA9IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmlzUmVhZHlUb1dvcmsgPSB0cnVlO1xuKi9cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IEZpcnN0Q29uZmlncy50b21hdG9zZWVkLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBGaXJzdENvbmZpZ3MubWlsa2Nvdy5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubmFtZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5taWxrY293LmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5jb3cubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm5hbWUgPSBDYXR0bGVDb25maWdzLmNvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UgPSBDYXR0bGVDb25maWdzLmNvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmhhcnZlc3RJbnRlcnZhbCA9IENhdHRsZUNvbmZpZ3MuY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLmNvdy5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBGaXJzdENvbmZpZ3Mud29ya2VyLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm5hbWUgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gV29ya2VyQ29uZmlncy5taWRkbGUud29ya2luZ0ludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmlzQnVzeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSAwO1xuXG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5sZXZlbDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5uYW1lID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5zdXBwb3J0ID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEuc3VwcG9ydDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2UgPSBNYWNoaW5lQ29uZmlncy5jaGluYS51cGdyYWRlUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5uYW1lID0gWWllbGRDb25maWdzLnRvbWF0by5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8uc2VsbFByaWNlID0gWWllbGRDb25maWdzLnRvbWF0by5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5uYW1lID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkuc2VsbFByaWNlID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm5hbWUgPSBZaWVsZENvbmZpZ3Muc3RyYXdiZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5LnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5zdHJhd2JlcnJ5LnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5taWxrLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubmFtZSA9IFlpZWxkQ29uZmlncy5taWxrLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsuc2VsbFByaWNlID0gWWllbGRDb25maWdzLm1pbGsuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJlZWYubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5uYW1lID0gWWllbGRDb25maWdzLmJlZWYubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MuYmVlZi5zZWxsUHJpY2U7XG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgYXdhaXQgbG9hZEZpcnN0Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFBsYW50Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRMYW5kQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVigpO1xuICB9XG5cbiAgbmV3TGFuZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZCA9IG5ldyBMYW5kKFxuICAgICAgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBMYW5kQ29uZmlncy5yZWQubmFtZSxcbiAgICAgIEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcixcbiAgICAgIExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyLFxuICAgICAgTGFuZENvbmZpZ3MucmVkLmNvbnRhaW5JbnRlcnZhbCxcbiAgICAgIExhbmRDb25maWdzLnJlZC5idXlQcmljZSxcbiAgICAgIHRydWUsXG4gICAgICAwLFxuICAgICAgTGFuZFN0YXRlLkVtcHR5LFxuICAgICAgUGxhbnRUeXBlLnRvbWF0b1NlZWQsXG4gICAgICBDYXR0bGVUeXBlLk1pbGtjb3csXG4gICAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCxcbiAgICAgIDAsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgZ2V0Rmlyc3REYXRhKCkge1xuICAgIHJldHVybiBGaXJzdENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFBsYW50RGF0YSgpIHtcbiAgICByZXR1cm4gUGxhbnRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRMYW5kRGF0YSgpIHtcbiAgICByZXR1cm4gTGFuZENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldENhdHRsZURhdGEoKSB7XG4gICAgcmV0dXJuIENhdHRsZUNvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFlpZWxkRGF0YSgpIHtcbiAgICByZXR1cm4gWWllbGRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRXb3JrZXJEYXRhKCkge1xuICAgIHJldHVybiBXb3JrZXJDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lRGF0YSgpIHtcbiAgICByZXR1cm4gTWFjaGluZUNvbmZpZ3M7XG4gIH1cblxuICAvKnB1YmxpYyBnZXRMYW5kTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLmxhbmQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRUb21hdG9TZWVkTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLnRvbWF0b3NlZWQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRCbHVlYmVycnlTZWVkTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLmJsdWViZXJyeXNlZWQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRNaWxrQ293TnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLm1pbGtjb3cubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRXb2tlck51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy53b3JrZXIubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLm1hY2hpbmUubnVtYmVyO1xuICB9XG4gICovXG59XG4iXX0=