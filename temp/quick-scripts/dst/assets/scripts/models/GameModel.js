
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
        //this.storage.tomatoSeed.number = data.number || 0;
        //this.storage.tomatoSeed.harvestInterval = data.harvestInterval || 0;
        //this.storage.tomatoSeed.maxHarvest = data.maxHarvest || 0;
        //this.storage.tomatoSeed.buyPrice = data.buyPrice || 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxxREFBb0Q7QUFDcEQsbURBQWtEO0FBRWxELHdDQUF1QztBQUN2QyxpREFlNEI7QUFDNUIsOENBZTRCO0FBQzVCLHVDQUErRDtBQUUvRDtJQUErQiw2QkFBUztJQUF4QztRQUFBLHFFQXNTQztRQXRLQyxvQkFBYyxHQUFhLEVBQUUsQ0FBQzs7UUE2STlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF3QkU7SUFDSixDQUFDO0lBclNDLDBDQUFzQixHQUF0QixVQUF1QixJQUFxQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDL0Msb0RBQW9EO1FBQ3BELHNFQUFzRTtRQUN0RSw0REFBNEQ7UUFDNUQsd0RBQXdEO0lBQzFELENBQUM7SUFDRCx5Q0FBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCw2Q0FBeUIsR0FBekIsVUFBMEIsSUFBd0M7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUks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LE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLDJCQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDJCQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLDJCQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt3QkFFOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt3QkFFcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFFMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7S0FDM0Q7SUFDSyw0QkFBUSxHQUFkOzs7OzRCQUNFLHFCQUFNLG1DQUFzQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixxQkFBTSxvQ0FBdUIsRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDaEMscUJBQU0sbUNBQXNCLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLHFCQUFNLGtDQUFxQixFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixxQkFBTSxtQ0FBc0IsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IscUJBQU0sb0NBQXVCLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLHFCQUFNLHFDQUF3QixFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDOzs7OztLQUNsQztJQUVELDJCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLGNBQUksQ0FDMUIscUJBQVksQ0FBQyxXQUFXLEVBQ3hCLENBQUMsRUFDRCxDQUFDLEVBQ0Qsd0JBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUNwQix5QkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ3hCLHdCQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDN0Isd0JBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUMvQix3QkFBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQ3hCLElBQUksRUFDSixDQUFDLEVBQ0Qsa0JBQVMsQ0FBQyxLQUFLLEVBQ2YscUJBQVMsQ0FBQyxVQUFVLEVBQ3BCLHVCQUFVLENBQUMsT0FBTyxFQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFDdkIsQ0FBQyxFQUNELElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00sK0JBQVcsR0FBbEI7UUFDRSxPQUFPLHdCQUFXLENBQUM7SUFDckIsQ0FBQztJQUNNLGlDQUFhLEdBQXBCO1FBQ0UsT0FBTywwQkFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQWEsR0FBcEI7UUFDRSxPQUFPLDBCQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNNLGtDQUFjLEdBQXJCO1FBQ0UsT0FBTywyQkFBYyxDQUFDO0lBQ3hCLENBQUM7SUEyQkgsZ0JBQUM7QUFBRCxDQXRTQSxBQXNTQyxDQXRTOEIscUJBQVMsR0FzU3ZDO0FBdFNZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2NvcmUvbXZjL0Jhc2VNb2RlbFwiO1xuaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBTYXZlRGF0YSB9IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVTYXZlTWFuYWdlclwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcbmltcG9ydCB7XG4gIEZpcnN0Q29uZmlncyxcbiAgUGxhbnRDb25maWdzLFxuICBDYXR0bGVDb25maWdzLFxuICBZaWVsZENvbmZpZ3MsXG4gIExhbmRDb25maWdzLFxuICBXb3JrZXJDb25maWdzLFxuICBNYWNoaW5lQ29uZmlncyxcbiAgbG9hZENhdHRsZUNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRMYW5kQ29uZmlnRnJvbUNTVixcbiAgbG9hZE1hY2hpbmVDb25maWdGcm9tQ1NWLFxuICBsb2FkUGxhbnRDb25maWdGcm9tQ1NWLFxuICBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVixcbiAgbG9hZFlpZWxkQ29uZmlnRnJvbUNTVixcbn0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHtcbiAgQmVlZixcbiAgQmx1ZWJlcnJ5LFxuICBCbHVlYmVycnlTZWVkLFxuICBDb3csXG4gIExhbmQsXG4gIE1hY2hpbmUsXG4gIE1pbGssXG4gIE1pbGtDb3csXG4gIFN0b3JhZ2UsXG4gIFN0cmF3YmVycnksXG4gIFN0cmF3YmVycnlTZWVkLFxuICBUb21hdG8sXG4gIFRvbWF0b1NlZWQsXG4gIFdvcmtlcixcbn0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUsIFdvcmtlckFjdGlvbiB9IGZyb20gXCIuLi91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIGxvYWRUb21hdG9TZWVkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInRvbWF0b1NlZWRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIC8vdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICAvL3RoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgLy90aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5tYXhIYXJ2ZXN0ID0gZGF0YS5tYXhIYXJ2ZXN0IHx8IDA7XG4gICAgLy90aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlVG9tYXRvU2VlZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInRvbWF0b1NlZWRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gIH1cbiAgbG9hZEJsdWViZXJyeVNlZWRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5U2VlZFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPSBkYXRhLmhhcnZlc3RJbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm1heEhhcnZlc3QgPSBkYXRhLm1heEhhcnZlc3QgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlQmx1ZWJlcnJ5U2VlZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImJsdWViZXJyeVNlZWRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQ7XG4gIH1cbiAgbG9hZFN0cmF3YmVycnlTZWVkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlTZWVkXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm1heEhhcnZlc3QgPSBkYXRhLm1heEhhcnZlc3QgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVN0cmF3YmVycnlTZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVNlZWRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkO1xuICB9XG4gIGxvYWRNaWxrQ293RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtDb3dcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cuaGFydmVzdEludGVydmFsID0gZGF0YS5oYXJ2ZXN0SW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5tYXhIYXJ2ZXN0ID0gZGF0YS5tYXhIYXJ2ZXN0IHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cuYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZU1pbGtDb3dEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrQ293XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5taWxrQ293O1xuICB9XG5cbiAgbG9hZFdva2VyRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcIndvcmtlclwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci53b3JraW5nSW50ZXJ2YWwgPSBkYXRhLndvcmtpbmdJbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVdvcmtlckRhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIndvcmtlclwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uud29ya2VyO1xuICB9XG4gIGxvYWRNYWNoaW5lRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcIm1hY2hpbmVcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLmxldmVsID0gZGF0YS5sZXZlbCB8fCAxO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnN1cHBvcnQgPSBkYXRhLnN1cHBvcnQgfHwgMTA7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUudXBncmFkZVByaWNlID0gZGF0YS51cGdyYWRlUHJpY2UgfHwgNTAwO1xuICB9XG4gIGdldFNhdmVNYWNoaW5lRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWFjaGluZVwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UubWFjaGluZTtcbiAgfVxuICBsb2FkR29sZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJnb2xkXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5nb2xkID0gZGF0YSB8fCAwO1xuICB9XG4gIGdldFNhdmVHb2xkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wiZ29sZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ29sZDtcbiAgfVxuICBsb2FkVGltZVN0YW1wRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInRpbWVzdGFtcFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UudGltZXN0YW1wID0gZGF0YSB8fCAwO1xuICB9XG4gIGdldFNhdmVUaW1lU3RhbXBEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0aW1lc3RhbXBcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnRpbWVzdGFtcDtcbiAgfVxuICBsb2FkVG9tYXRvRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInRvbWF0b1wiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5zZWxsUHJpY2UgPSBkYXRhLnNlbGxQcmljZSB8fCA1O1xuICB9XG4gIGdldFNhdmVUb21hdG9EYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9cIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnRvbWF0bztcbiAgfVxuICBsb2FkQmx1ZWJlcnJ5RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcImJsdWViZXJyeVwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5zZWxsUHJpY2UgPSBkYXRhLnNlbGxQcmljZSB8fCA4O1xuICB9XG4gIGdldFNhdmVCbHVlYmVycnlEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmJsdWViZXJyeTtcbiAgfVxuICBsb2FkU3RyYXdiZXJyeUZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5XCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5LnNlbGxQcmljZSA9IGRhdGEuc2VsbFByaWNlIHx8IDEwO1xuICB9XG4gIGdldFNhdmVTdHJhd2JlcnJ5RGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeTtcbiAgfVxuICBsb2FkTWlsa0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLnNlbGxQcmljZSA9IGRhdGEuc2VsbFByaWNlIHx8IDE1O1xuICB9XG4gIGdldFNhdmVNaWxrRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa1wiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UubWlsaztcbiAgfVxuXG4gIGluaXQoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgIHRoaXMuc3RvcmUgPSBuZXcgU3RvcmUodGhpcy5zdG9yYWdlKTtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkID0gbmV3IFRvbWF0b1NlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZCA9IG5ldyBCbHVlYmVycnlTZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkID0gbmV3IFN0cmF3YmVycnlTZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cgPSBuZXcgTWlsa0NvdygpO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cgPSBuZXcgQ293KCk7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlciA9IG5ldyBXb3JrZXIoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZSA9IG5ldyBNYWNoaW5lKCk7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvID0gbmV3IFRvbWF0bygpO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkgPSBuZXcgQmx1ZWJlcnJ5KCk7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkgPSBuZXcgU3RyYXdiZXJyeSgpO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrID0gbmV3IE1pbGsoKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZiA9IG5ldyBCZWVmKCk7XG4gIH1cbiAgc3RvcmU6IFN0b3JlO1xuICBzdG9yYWdlOiBTdG9yYWdlO1xuXG4gIHN0YXJ0TGFuZE51bWJlcjogbnVtYmVyO1xuXG4gIHF1ZXVlTGFuZEFycmF5OiBMYW5kVUlbXSA9IFtdO1xuXG4gIGFzeW5jIHNldERhdGEoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuc3RvcmFnZS5nb2xkID0gMTAwMDA7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSAwO1xuICAgIC8qXG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubnVtYmVyID0gRmlyc3RDb25maWdzLmxhbmQubnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmJ1eVByaWNlID0gTGFuZENvbmZpZ3MucmVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm5hbWUgPSBMYW5kQ29uZmlncy5yZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5taXNzaW9uTnVtYmVyID0gTGFuZENvbmZpZ3MucmVkLm1pc3Npb25OdW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbkludGVydmFsID0gTGFuZENvbmZpZ3MucmVkLmNvbnRhaW5JbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jb250YWluWWllbGQgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNyb3AgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JraW5nVGltZSA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY3VycmVudEFzc2V0ID0gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuaXNSZWFkeVRvV29yayA9IHRydWU7XG4qL1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciA9IEZpcnN0Q29uZmlncy5ibHVlYmVycnlzZWVkLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5uYW1lID0gUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubWF4SGFydmVzdCA9XG4gICAgICBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyID0gRmlyc3RDb25maWdzLnRvbWF0b3NlZWQubnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm5hbWUgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmJ1eVByaWNlID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy50b21hdG9zZWVkLmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5tYXhIYXJ2ZXN0ID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5uYW1lID0gUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmJ1eVByaWNlID0gUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubWF4SGFydmVzdCA9XG4gICAgICBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm51bWJlciA9IEZpcnN0Q29uZmlncy5taWxrY293Lm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5uYW1lID0gQ2F0dGxlQ29uZmlncy5taWxrY293Lm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cuYnV5UHJpY2UgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cuaGFydmVzdEludGVydmFsID1cbiAgICAgIENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubWF4SGFydmVzdCA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLmNvdy5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cubmFtZSA9IENhdHRsZUNvbmZpZ3MuY293Lm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmNvdy5idXlQcmljZSA9IENhdHRsZUNvbmZpZ3MuY293LmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cuaGFydmVzdEludGVydmFsID0gQ2F0dGxlQ29uZmlncy5jb3cuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cubWF4SGFydmVzdCA9IENhdHRsZUNvbmZpZ3MuY293Lm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm51bWJlciA9IEZpcnN0Q29uZmlncy53b3JrZXIubnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubmFtZSA9IFdvcmtlckNvbmZpZ3MubWlkZGxlLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci53b3JraW5nSW50ZXJ2YWwgPSBXb3JrZXJDb25maWdzLm1pZGRsZS53b3JraW5nSW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5idXlQcmljZSA9IFdvcmtlckNvbmZpZ3MubWlkZGxlLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuaXNCdXN5ID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciA9IDA7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5sZXZlbCA9IE1hY2hpbmVDb25maWdzLmNoaW5hLmxldmVsO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLm5hbWUgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnN1cHBvcnQgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5zdXBwb3J0O1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnVwZ3JhZGVQcmljZSA9IE1hY2hpbmVDb25maWdzLmNoaW5hLnVwZ3JhZGVQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm5hbWUgPSBZaWVsZENvbmZpZ3MudG9tYXRvLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MudG9tYXRvLnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm5hbWUgPSBZaWVsZENvbmZpZ3MuYmx1ZWJlcnJ5Lm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MuYmx1ZWJlcnJ5LnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubmFtZSA9IFlpZWxkQ29uZmlncy5zdHJhd2JlcnJ5Lm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkuc2VsbFByaWNlID0gWWllbGRDb25maWdzLnN0cmF3YmVycnkuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5uYW1lID0gWWllbGRDb25maWdzLm1pbGsubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MubWlsay5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5iZWVmLm5hbWUgPSBZaWVsZENvbmZpZ3MuYmVlZi5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5iZWVmLnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5iZWVmLnNlbGxQcmljZTtcbiAgfVxuICBhc3luYyBsb2FkRGF0YSgpIHtcbiAgICBhd2FpdCBsb2FkRmlyc3RDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZENhdHRsZUNvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkUGxhbnRDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZExhbmRDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFlpZWxkQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRXb3JrZXJDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZE1hY2hpbmVDb25maWdGcm9tQ1NWKCk7XG4gIH1cblxuICBuZXdMYW5kKCkge1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kID0gbmV3IExhbmQoXG4gICAgICBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIExhbmRDb25maWdzLnJlZC5uYW1lLFxuICAgICAgRmlyc3RDb25maWdzLmxhbmQubnVtYmVyLFxuICAgICAgTGFuZENvbmZpZ3MucmVkLm1pc3Npb25OdW1iZXIsXG4gICAgICBMYW5kQ29uZmlncy5yZWQuY29udGFpbkludGVydmFsLFxuICAgICAgTGFuZENvbmZpZ3MucmVkLmJ1eVByaWNlLFxuICAgICAgdHJ1ZSxcbiAgICAgIDAsXG4gICAgICBMYW5kU3RhdGUuRW1wdHksXG4gICAgICBQbGFudFR5cGUudG9tYXRvU2VlZCxcbiAgICAgIENhdHRsZVR5cGUuTWlsa2NvdyxcbiAgICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLFxuICAgICAgMCxcbiAgICAgIHRydWVcbiAgICApO1xuICB9XG4gIHB1YmxpYyBnZXRGaXJzdERhdGEoKSB7XG4gICAgcmV0dXJuIEZpcnN0Q29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0UGxhbnREYXRhKCkge1xuICAgIHJldHVybiBQbGFudENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldExhbmREYXRhKCkge1xuICAgIHJldHVybiBMYW5kQ29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0Q2F0dGxlRGF0YSgpIHtcbiAgICByZXR1cm4gQ2F0dGxlQ29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0WWllbGREYXRhKCkge1xuICAgIHJldHVybiBZaWVsZENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFdvcmtlckRhdGEoKSB7XG4gICAgcmV0dXJuIFdvcmtlckNvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldE1hY2hpbmVEYXRhKCkge1xuICAgIHJldHVybiBNYWNoaW5lQ29uZmlncztcbiAgfVxuXG4gIC8qcHVibGljIGdldExhbmROdW1iZXIoKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyc3RDb25maWcgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gZmlyc3RDb25maWcubGFuZC5udW1iZXI7XG4gIH1cbiAgcHVibGljIGdldFRvbWF0b1NlZWROdW1iZXIoKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyc3RDb25maWcgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gZmlyc3RDb25maWcudG9tYXRvc2VlZC5udW1iZXI7XG4gIH1cbiAgcHVibGljIGdldEJsdWViZXJyeVNlZWROdW1iZXIoKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyc3RDb25maWcgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gZmlyc3RDb25maWcuYmx1ZWJlcnJ5c2VlZC5udW1iZXI7XG4gIH1cbiAgcHVibGljIGdldE1pbGtDb3dOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyc3RDb25maWcgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gZmlyc3RDb25maWcubWlsa2Nvdy5udW1iZXI7XG4gIH1cbiAgcHVibGljIGdldFdva2VyTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLndvcmtlci5udW1iZXI7XG4gIH1cbiAgcHVibGljIGdldE1hY2hpbmVOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyc3RDb25maWcgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gZmlyc3RDb25maWcubWFjaGluZS5udW1iZXI7XG4gIH1cbiAgKi9cbn1cbiJdfQ==