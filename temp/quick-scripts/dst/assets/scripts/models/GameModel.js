
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
        _this.landArray = [];
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
    GameModel.prototype.loadQueueLandArrayFromSave = function (data) {
        this.queueLandArray = data;
    };
    GameModel.prototype.getSaveQueueLandArrayData = function () {
        return this.queueLandArray;
    };
    GameModel.prototype.loadLandArrayFromSave = function (data) {
        this.landArray = data;
    };
    GameModel.prototype.getSavelandArrayData = function () {
        return this.landArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxxREFBb0Q7QUFDcEQsbURBQWtEO0FBRWxELHdDQUF1QztBQUN2QyxpREFlNEI7QUFDNUIsOENBZTRCO0FBQzVCLHVDQUErRDtBQUUvRDtJQUErQiw2QkFBUztJQUF4QztRQUFBLHFFQXNWQztRQXZLQyxvQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUM5QixlQUFTLEdBQVcsRUFBRSxDQUFDOztRQTZJdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXdCRTtJQUNKLENBQUM7SUFyVkMsMENBQXNCLEdBQXRCLFVBQXVCLElBQXFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELHlDQUFxQixHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUNELDZDQUF5QixHQUF6QixVQUEwQixJQUF3QztR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QU8sMkJBQWMsQ0FBQztJQUN4QixDQUFDO0lBMkJILGdCQUFDO0FBQUQsQ0F0VkEsQUFzVkMsQ0F0VjhCLHFCQUFTLEdBc1Z2QztBQXRWWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlTW9kZWxcIjtcbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IHsgU2F2ZURhdGEgfSBmcm9tIFwiLi4vTWFuYWdlci9HYW1lU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XG5pbXBvcnQge1xuICBGaXJzdENvbmZpZ3MsXG4gIFBsYW50Q29uZmlncyxcbiAgQ2F0dGxlQ29uZmlncyxcbiAgWWllbGRDb25maWdzLFxuICBMYW5kQ29uZmlncyxcbiAgV29ya2VyQ29uZmlncyxcbiAgTWFjaGluZUNvbmZpZ3MsXG4gIGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWLFxuICBsb2FkRmlyc3RDb25maWdGcm9tQ1NWLFxuICBsb2FkTGFuZENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVixcbiAgbG9hZFBsYW50Q29uZmlnRnJvbUNTVixcbiAgbG9hZFdvcmtlckNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YsXG59IGZyb20gXCIuLi9kYXRhL0dhbWVDb25maWdcIjtcbmltcG9ydCB7XG4gIEJlZWYsXG4gIEJsdWViZXJyeSxcbiAgQmx1ZWJlcnJ5U2VlZCxcbiAgQ293LFxuICBMYW5kLFxuICBNYWNoaW5lLFxuICBNaWxrLFxuICBNaWxrQ293LFxuICBTdG9yYWdlLFxuICBTdHJhd2JlcnJ5LFxuICBTdHJhd2JlcnJ5U2VlZCxcbiAgVG9tYXRvLFxuICBUb21hdG9TZWVkLFxuICBXb3JrZXIsXG59IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUksIHsgTGFuZFN0YXRlLCBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWwge1xuICBsb2FkVG9tYXRvU2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9TZWVkXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVUb21hdG9TZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvU2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgfVxuICBsb2FkQmx1ZWJlcnJ5U2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlTZWVkXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVCbHVlYmVycnlTZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5U2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDtcbiAgfVxuICBsb2FkU3RyYXdiZXJyeVNlZWRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVNlZWRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID0gZGF0YS5oYXJ2ZXN0SW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlU3RyYXdiZXJyeVNlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5U2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ7XG4gIH1cbiAgbG9hZE1pbGtDb3dGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa0Nvd1wiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5oYXJ2ZXN0SW50ZXJ2YWwgPSBkYXRhLmhhcnZlc3RJbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBkYXRhLm1heEhhcnZlc3QgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlTWlsa0Nvd0RhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtDb3dcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm1pbGtDb3c7XG4gIH1cblxuICBsb2FkV29rZXJGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2VyXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLndvcmtpbmdJbnRlcnZhbCA9IGRhdGEud29ya2luZ0ludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlV29ya2VyRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2VyXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS53b3JrZXI7XG4gIH1cbiAgbG9hZE1hY2hpbmVGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWFjaGluZVwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgPSBkYXRhLmxldmVsIHx8IDE7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUuc3VwcG9ydCA9IGRhdGEuc3VwcG9ydCB8fCAxMDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2UgPSBkYXRhLnVwZ3JhZGVQcmljZSB8fCA1MDA7XG4gIH1cbiAgZ2V0U2F2ZU1hY2hpbmVEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJtYWNoaW5lXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5tYWNoaW5lO1xuICB9XG4gIGxvYWRHb2xkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcImdvbGRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmdvbGQgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZUdvbGREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJnb2xkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nb2xkO1xuICB9XG4gIGxvYWRUaW1lU3RhbXBGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widGltZXN0YW1wXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50aW1lc3RhbXAgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVRpbWVTdGFtcERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInRpbWVzdGFtcFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudGltZXN0YW1wO1xuICB9XG5cbiAgbG9hZFdvcmtpbmdXb3JrZXJOdW1iZXJGcm9tU2F2ZShcbiAgICBkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2luZ1dvcmtlck51bWJlclwiXT5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVdvcmtpbmdXb3JrZXJOdW1iZXJEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JraW5nV29ya2VyTnVtYmVyXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyO1xuICB9XG4gIGxvYWRUb21hdG9Gcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLnNlbGxQcmljZSA9IGRhdGEuc2VsbFByaWNlIHx8IDU7XG4gIH1cbiAgZ2V0U2F2ZVRvbWF0b0RhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInRvbWF0b1wiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudG9tYXRvO1xuICB9XG4gIGxvYWRCbHVlYmVycnlGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5XCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5LnNlbGxQcmljZSA9IGRhdGEuc2VsbFByaWNlIHx8IDg7XG4gIH1cbiAgZ2V0U2F2ZUJsdWViZXJyeURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImJsdWViZXJyeVwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5O1xuICB9XG4gIGxvYWRTdHJhd2JlcnJ5RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkuc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgMTA7XG4gIH1cbiAgZ2V0U2F2ZVN0cmF3YmVycnlEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5O1xuICB9XG4gIGxvYWRNaWxrRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsuc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgMTU7XG4gIH1cbiAgZ2V0U2F2ZU1pbGtEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5taWxrO1xuICB9XG5cbiAgbG9hZExhbmRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibGFuZFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgPVxuICAgICAgZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmN1cnJlbnRBc3NldCA9IGRhdGEuY3VycmVudEFzc2V0IHx8IG5ldyBUb21hdG9TZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayB8fCB0cnVlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSB8fCB0cnVlO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGUgfHwgbnVsbDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlIHx8IG51bGw7XG4gIH1cbiAgZ2V0U2F2ZUxhbmREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJsYW5kXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5sYW5kO1xuICB9XG5cbiAgbG9hZFF1ZXVlTGFuZEFycmF5RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInF1ZXVlTGFuZEFycmF5XCJdPik6IHZvaWQge1xuICAgIHRoaXMucXVldWVMYW5kQXJyYXkgPSBkYXRhO1xuICB9XG4gIGdldFNhdmVRdWV1ZUxhbmRBcnJheURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInF1ZXVlTGFuZEFycmF5XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMucXVldWVMYW5kQXJyYXk7XG4gIH1cblxuICBsb2FkTGFuZEFycmF5RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcImxhbmRBcnJheVwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheSA9IGRhdGE7XG4gIH1cbiAgZ2V0U2F2ZWxhbmRBcnJheURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImxhbmRBcnJheVwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheTtcbiAgfVxuICBpbml0KC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICB0aGlzLnN0b3JlID0gbmV3IFN0b3JlKHRoaXMuc3RvcmFnZSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCA9IG5ldyBUb21hdG9TZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQgPSBuZXcgQmx1ZWJlcnJ5U2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZCA9IG5ldyBTdHJhd2JlcnJ5U2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293ID0gbmV3IE1pbGtDb3coKTtcbiAgICB0aGlzLnN0b3JhZ2UuY293ID0gbmV3IENvdygpO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUgPSBuZXcgTWFjaGluZSgpO1xuXG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0byA9IG5ldyBUb21hdG8oKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5ID0gbmV3IEJsdWViZXJyeSgpO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5ID0gbmV3IFN0cmF3YmVycnkoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsayA9IG5ldyBNaWxrKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJlZWYgPSBuZXcgQmVlZigpO1xuICB9XG4gIHN0b3JlOiBTdG9yZTtcbiAgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzdGFydExhbmROdW1iZXI6IG51bWJlcjtcblxuICBxdWV1ZUxhbmRBcnJheTogTGFuZFVJW10gPSBbXTtcbiAgbGFuZEFycmF5OiBMYW5kW10gPSBbXTtcblxuICBhc3luYyBzZXREYXRhKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnN0b3JhZ2UuZ29sZCA9IDEwMDAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyID0gMDtcbiAgICAvKlxuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm51bWJlciA9IEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IExhbmRDb25maWdzLnJlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gTGFuZENvbmZpZ3MucmVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubWlzc2lvbk51bWJlciA9IExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5JbnRlcnZhbCA9IExhbmRDb25maWdzLnJlZC5jb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jcm9wID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmN1cnJlbnRBc3NldCA9IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmlzUmVhZHlUb1dvcmsgPSB0cnVlO1xuKi9cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IEZpcnN0Q29uZmlncy50b21hdG9zZWVkLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBGaXJzdENvbmZpZ3MubWlsa2Nvdy5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubmFtZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5taWxrY293LmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5jb3cubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm5hbWUgPSBDYXR0bGVDb25maWdzLmNvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UgPSBDYXR0bGVDb25maWdzLmNvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmhhcnZlc3RJbnRlcnZhbCA9IENhdHRsZUNvbmZpZ3MuY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLmNvdy5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBGaXJzdENvbmZpZ3Mud29ya2VyLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm5hbWUgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gV29ya2VyQ29uZmlncy5taWRkbGUud29ya2luZ0ludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmlzQnVzeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSAwO1xuXG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5sZXZlbDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5uYW1lID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5zdXBwb3J0ID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEuc3VwcG9ydDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2UgPSBNYWNoaW5lQ29uZmlncy5jaGluYS51cGdyYWRlUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5uYW1lID0gWWllbGRDb25maWdzLnRvbWF0by5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8uc2VsbFByaWNlID0gWWllbGRDb25maWdzLnRvbWF0by5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5uYW1lID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkuc2VsbFByaWNlID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm5hbWUgPSBZaWVsZENvbmZpZ3Muc3RyYXdiZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5LnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5zdHJhd2JlcnJ5LnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5taWxrLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubmFtZSA9IFlpZWxkQ29uZmlncy5taWxrLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsuc2VsbFByaWNlID0gWWllbGRDb25maWdzLm1pbGsuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJlZWYubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5uYW1lID0gWWllbGRDb25maWdzLmJlZWYubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MuYmVlZi5zZWxsUHJpY2U7XG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgYXdhaXQgbG9hZEZpcnN0Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFBsYW50Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRMYW5kQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVigpO1xuICB9XG5cbiAgbmV3TGFuZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZCA9IG5ldyBMYW5kKFxuICAgICAgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBMYW5kQ29uZmlncy5yZWQubmFtZSxcbiAgICAgIEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcixcbiAgICAgIExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyLFxuICAgICAgTGFuZENvbmZpZ3MucmVkLmNvbnRhaW5JbnRlcnZhbCxcbiAgICAgIExhbmRDb25maWdzLnJlZC5idXlQcmljZSxcbiAgICAgIHRydWUsXG4gICAgICAwLFxuICAgICAgTGFuZFN0YXRlLkVtcHR5LFxuICAgICAgUGxhbnRUeXBlLnRvbWF0b1NlZWQsXG4gICAgICBDYXR0bGVUeXBlLk1pbGtjb3csXG4gICAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCxcbiAgICAgIDAsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgZ2V0Rmlyc3REYXRhKCkge1xuICAgIHJldHVybiBGaXJzdENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFBsYW50RGF0YSgpIHtcbiAgICByZXR1cm4gUGxhbnRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRMYW5kRGF0YSgpIHtcbiAgICByZXR1cm4gTGFuZENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldENhdHRsZURhdGEoKSB7XG4gICAgcmV0dXJuIENhdHRsZUNvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFlpZWxkRGF0YSgpIHtcbiAgICByZXR1cm4gWWllbGRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRXb3JrZXJEYXRhKCkge1xuICAgIHJldHVybiBXb3JrZXJDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lRGF0YSgpIHtcbiAgICByZXR1cm4gTWFjaGluZUNvbmZpZ3M7XG4gIH1cblxuICAvKnB1YmxpYyBnZXRMYW5kTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLmxhbmQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRUb21hdG9TZWVkTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLnRvbWF0b3NlZWQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRCbHVlYmVycnlTZWVkTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLmJsdWViZXJyeXNlZWQubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRNaWxrQ293TnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLm1pbGtjb3cubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRXb2tlck51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy53b3JrZXIubnVtYmVyO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lTnVtYmVyKCk6IG51bWJlciB7XG4gICAgbGV0IGZpcnN0Q29uZmlnID0gdGhpcy5nZXREYXRhKCk7XG4gICAgcmV0dXJuIGZpcnN0Q29uZmlnLm1hY2hpbmUubnVtYmVyO1xuICB9XG4gICovXG59XG4iXX0=