"use strict";
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