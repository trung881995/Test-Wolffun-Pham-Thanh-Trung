
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
        _this.queueIndexArray = [];
        _this.landArray = [];
        return _this;
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
    GameModel.prototype.loadQueueIndexArrayFromSave = function (data) {
        this.queueIndexArray = data || [];
    };
    GameModel.prototype.getSaveQueueIndexArrayData = function () {
        return this.queueIndexArray;
    };
    GameModel.prototype.loadLand0FromSave = function (data) {
        var _a, _b, _c, _d;
        this.landArray[0].name = (_a = data.name) !== null && _a !== void 0 ? _a : "";
        this.landArray[0].number = data.number || 0;
        this.landArray[0].missionNumber = data.missionNumber || 1;
        this.landArray[0].containInterval = data.containInterval || 0;
        this.landArray[0].buyPrice = data.buyPrice || 0;
        this.landArray[0].containYield = data.containYield || 0;
        this.landArray[0].currentAsset = (_b = data.currentAsset) !== null && _b !== void 0 ? _b : this.storage.tomatoSeed;
        this.landArray[0].crop = data.crop || 0;
        this.landArray[0].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[0].workingTime = data.workingTime || 0;
        this.landArray[0].isReadyToWork = (_c = data.isReadyToWork) !== null && _c !== void 0 ? _c : true;
        this.landArray[0].isEmpty = (_d = data.isEmpty) !== null && _d !== void 0 ? _d : true;
        this.landArray[0].time = data.time || 0;
        this.landArray[0].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[0].plantType = data.plantType;
        this.landArray[0].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand0Data = function () {
        return this.landArray[0];
    };
    GameModel.prototype.loadLand1FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[1].name = data.name || "";
        this.landArray[1].number = data.number || 0;
        this.landArray[1].missionNumber = data.missionNumber || 1;
        this.landArray[1].containInterval = data.containInterval || 0;
        this.landArray[1].buyPrice = data.buyPrice || 0;
        this.landArray[1].containYield = data.containYield || 0;
        this.landArray[1].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[1].crop = data.crop || 0;
        this.landArray[1].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[1].workingTime = data.workingTime || 0;
        this.landArray[1].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[1].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[1].time = data.time || 0;
        this.landArray[1].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[1].plantType = data.plantType;
        this.landArray[1].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand1Data = function () {
        return this.landArray[1];
    };
    GameModel.prototype.loadLand2FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[2].name = data.name || "";
        this.landArray[2].number = data.number || 0;
        this.landArray[2].missionNumber = data.missionNumber || 1;
        this.landArray[2].containInterval = data.containInterval || 0;
        this.landArray[2].buyPrice = data.buyPrice || 0;
        this.landArray[2].containYield = data.containYield || 0;
        this.landArray[2].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[2].crop = data.crop || 0;
        this.landArray[2].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[2].workingTime = data.workingTime || 0;
        this.landArray[2].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[2].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[2].time = data.time || 0;
        this.landArray[2].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[2].plantType = data.plantType;
        this.landArray[2].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand2Data = function () {
        return this.landArray[2];
    };
    GameModel.prototype.loadLand3FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[3].name = data.name || "";
        this.landArray[3].number = data.number || 0;
        this.landArray[3].missionNumber = data.missionNumber || 1;
        this.landArray[3].containInterval = data.containInterval || 0;
        this.landArray[3].buyPrice = data.buyPrice || 0;
        this.landArray[3].containYield = data.containYield || 0;
        this.landArray[3].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[3].crop = data.crop || 0;
        this.landArray[3].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[3].workingTime = data.workingTime || 0;
        this.landArray[3].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[3].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[3].time = data.time || 0;
        this.landArray[3].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[3].plantType = data.plantType;
        this.landArray[3].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand3Data = function () {
        return this.landArray[3];
    };
    GameModel.prototype.loadLand4FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[4].name = data.name || "";
        this.landArray[4].number = data.number || 0;
        this.landArray[4].missionNumber = data.missionNumber || 1;
        this.landArray[4].containInterval = data.containInterval || 0;
        this.landArray[4].buyPrice = data.buyPrice || 0;
        this.landArray[4].containYield = data.containYield || 0;
        this.landArray[4].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[4].crop = data.crop || 0;
        this.landArray[4].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[4].workingTime = data.workingTime || 0;
        this.landArray[4].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[4].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[4].time = data.time || 0;
        this.landArray[4].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[4].plantType = data.plantType;
        this.landArray[4].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand4Data = function () {
        return this.landArray[4];
    };
    GameModel.prototype.loadLand5FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[5].name = data.name || "";
        this.landArray[5].number = data.number || 0;
        this.landArray[5].missionNumber = data.missionNumber || 1;
        this.landArray[5].containInterval = data.containInterval || 0;
        this.landArray[5].buyPrice = data.buyPrice || 0;
        this.landArray[5].containYield = data.containYield || 0;
        this.landArray[5].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[5].crop = data.crop || 0;
        this.landArray[5].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[5].workingTime = data.workingTime || 0;
        this.landArray[5].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[5].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[5].time = data.time || 0;
        this.landArray[5].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[5].plantType = data.plantType;
        this.landArray[5].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand5Data = function () {
        return this.landArray[5];
    };
    GameModel.prototype.loadLand6FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[6].name = data.name || "";
        this.landArray[6].number = data.number || 0;
        this.landArray[6].missionNumber = data.missionNumber || 1;
        this.landArray[6].containInterval = data.containInterval || 0;
        this.landArray[6].buyPrice = data.buyPrice || 0;
        this.landArray[6].containYield = data.containYield || 0;
        this.landArray[6].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[6].crop = data.crop || 0;
        this.landArray[6].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[6].workingTime = data.workingTime || 0;
        this.landArray[6].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[6].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[6].time = data.time || 0;
        this.landArray[6].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[6].plantType = data.plantType;
        this.landArray[6].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand6Data = function () {
        return this.landArray[6];
    };
    GameModel.prototype.loadLand7FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[7].name = data.name || "";
        this.landArray[7].number = data.number || 0;
        this.landArray[7].missionNumber = data.missionNumber || 1;
        this.landArray[7].containInterval = data.containInterval || 0;
        this.landArray[7].buyPrice = data.buyPrice || 0;
        this.landArray[7].containYield = data.containYield || 0;
        this.landArray[7].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[7].crop = data.crop || 0;
        this.landArray[7].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[7].workingTime = data.workingTime || 0;
        this.landArray[7].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[7].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[7].time = data.time || 0;
        this.landArray[7].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[7].plantType = data.plantType;
        this.landArray[7].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand7Data = function () {
        return this.landArray[7];
    };
    GameModel.prototype.loadLand8FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[8].name = data.name || "";
        this.landArray[8].number = data.number || 0;
        this.landArray[8].missionNumber = data.missionNumber || 1;
        this.landArray[8].containInterval = data.containInterval || 0;
        this.landArray[8].buyPrice = data.buyPrice || 0;
        this.landArray[8].containYield = data.containYield || 0;
        this.landArray[8].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[8].crop = data.crop || 0;
        this.landArray[8].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[8].workingTime = data.workingTime || 0;
        this.landArray[8].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[8].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[8].time = data.time || 0;
        this.landArray[8].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[8].plantType = data.plantType;
        this.landArray[8].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand8Data = function () {
        return this.landArray[8];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxxREFBb0Q7QUFDcEQsbURBQWtEO0FBZWxELHdDQUF1QztBQUN2QyxpREFlNEI7QUFDNUIsOENBZTRCO0FBQzVCLHVDQUErRDtBQUUvRDtJQUErQiw2QkFBUztJQUF4QztRQUFBLHFFQXdoQkM7UUE3SUMscUJBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IsZUFBUyxHQUFXLEVBQUUsQ0FBQzs7SUE0SXpCLENBQUM7SUF2aEJDLDBDQUFzQixHQUF0QixVQUF1QixJQUFxQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCx5Q0FBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCw2Q0FBeUIsR0FBekIsVUFBMEIsSUFBd0M7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsNENBQXdCLEdBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsOENBQTBCLEdBQTFCLFVBQTJCLElBQXlDO1FBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELDZDQUF5QixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDckMsQ0FBQztJQUNELHVDQUFtQixHQUFuQixVQUFvQixJQUFrQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxzQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQ0FBaUIsR0FBakIsVUFBa0IsSUFBaUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxxQ0FBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFDRCx1Q0FBbUIsR0FBbkIsVUFBb0IsSUFBa0M7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDO0lBQy9ELENBQUM7SUFDRCxzQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBK0I7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsbUNBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNELHlDQUFxQixHQUFyQixVQUFzQixJQUFvQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCx3Q0FBb0IsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtREFBK0IsR0FBL0IsVUFDRSxJQUE4QztRQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELGtEQUE4QixHQUE5QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsc0NBQWtCLEdBQWxCLFVBQW1CLElBQWlDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxxQ0FBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFDRCx5Q0FBcUIsR0FBckIsVUFBc0IsSUFBb0M7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELHdDQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELDBDQUFzQixHQUF0QixVQUF1QixJQUFxQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBQ0QseUNBQXFCLEdBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCLFVBQWlCLElBQStCO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFDRCxtQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQWdCLEdBQWhCLFVBQWlCLElBQStCO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZTtZQUN0RCxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQzVCLElBQUksQ0FBQyxZQUFZLElBQUkscUJBQVksQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQztRQUU3RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUM7SUFDekQsQ0FBQztJQUNELG1DQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCwrQ0FBMkIsR0FBM0IsVUFDRSxJQUErQztRQUUvQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNELDhDQUEwQixHQUExQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQscUNBQWlCLEdBQWpCLFVBQWtCLElBQXNDOztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBRyxJQUFJLENBQUMsSUFBSSxtQ0FBSSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLFNBQzVCLElBQUksQ0FBQyxZQUFZLG1DQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUM1QixJQUFJLENBQUMsWUFBWSxJQUFJLHFCQUFZLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxTQUFHLElBQUksQ0FBQyxhQUFhLG1DQUFJLElBQUksQ0FBQztRQUU3RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBRyxJQUFJLENBQUMsT0FBTyxtQ0FBSSxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxrQkFBUyxDQUFDLEtBQUssQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDakQsQ0FBQztJQUNELG9DQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWlCLEdBQWpCLFVBQWtCLElBQXNDOztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksU0FDNUIsSUFBSSxDQUFDLFlBQVksbUNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBQzVCLElBQUksQ0FBQyxZQUFZLElBQUkscUJBQVksQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLFNBQUcsSUFBSSxDQUFDLGFBQWEsbUNBQUksSUFBSSxDQUFDO1FBRTdELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFHLElBQUksQ0FBQyxPQUFPLG1DQUFJLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBaUIsR0FBakIsVUFBa0IsSUFBc0M7O1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxTQUM1QixJQUFJLENBQUMsWUFBWSxtQ0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFDNUIsSUFBSSxDQUFDLFlBQVksSUFBSSxxQkFBWSxDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsU0FBRyxJQUFJLENBQUMsYUFBYSxtQ0FBSSxJQUFJLENBQUM7UUFFN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQUcsSUFBSSxDQUFDLE9BQU8sbUNBQUksSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksa0JBQVMsQ0FBQyxLQUFLLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2pELENBQUM7SUFDRCxvQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFpQixHQUFqQixVQUFrQixJQUFzQzs7UUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLFNBQzVCLElBQUksQ0FBQyxZQUFZLG1DQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUM1QixJQUFJLENBQUMsWUFBWSxJQUFJLHFCQUFZLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxTQUFHLElBQUksQ0FBQyxhQUFhLG1DQUFJLElBQUksQ0FBQztRQUU3RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBRyxJQUFJLENBQUMsT0FBTyxtQ0FBSSxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxrQkFBUyxDQUFDLEtBQUssQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDakQsQ0FBQztJQUNELG9DQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWlCLEdBQWpCLFVBQWtCLElBQXNDOztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksU0FDNUIsSUFBSSxDQUFDLFlBQVksbUNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBQzVCLElBQUksQ0FBQyxZQUFZLElBQUkscUJBQVksQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLFNBQUcsSUFBSSxDQUFDLGFBQWEsbUNBQUksSUFBSSxDQUFDO1FBRTdELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFHLElBQUksQ0FBQyxPQUFPLG1DQUFJLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBaUIsR0FBakIsVUFBa0IsSUFBc0M7O1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxTQUM1QixJQUFJLENBQUMsWUFBWSxtQ0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFDNUIsSUFBSSxDQUFDLFlBQVksSUFBSSxxQkFBWSxDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsU0FBRyxJQUFJLENBQUMsYUFBYSxtQ0FBSSxJQUFJLENBQUM7UUFFN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQUcsSUFBSSxDQUFDLE9BQU8sbUNBQUksSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksa0JBQVMsQ0FBQyxLQUFLLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2pELENBQUM7SUFDRCxvQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFpQixHQUFqQixVQUFrQixJQUFzQzs7UUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLFNBQzVCLElBQUksQ0FBQyxZQUFZLG1DQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUM1QixJQUFJLENBQUMsWUFBWSxJQUFJLHFCQUFZLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxTQUFHLElBQUksQ0FBQyxhQUFhLG1DQUFJLElBQUksQ0FBQztRQUU3RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBRyxJQUFJLENBQUMsT0FBTyxtQ0FBSSxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxrQkFBUyxDQUFDLEtBQUssQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDakQsQ0FBQztJQUNELG9DQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWlCLEdBQWpCLFVBQWtCLElBQXNDOztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksU0FDNUIsSUFBSSxDQUFDLFlBQVksbUNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBQzVCLElBQUksQ0FBQyxZQUFZLElBQUkscUJBQVksQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLFNBQUcsSUFBSSxDQUFDLGFBQWEsbUNBQUksSUFBSSxDQUFDO1FBRTdELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFHLElBQUksQ0FBQyxPQUFPLG1DQUFJLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBaUIsR0FBakIsVUFBa0IsSUFBc0M7O1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxTQUM1QixJQUFJLENBQUMsWUFBWSxtQ0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFDNUIsSUFBSSxDQUFDLFlBQVksSUFBSSxxQkFBWSxDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsU0FBRyxJQUFJLENBQUMsYUFBYSxtQ0FBSSxJQUFJLENBQUM7UUFFN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQUcsSUFBSSxDQUFDLE9BQU8sbUNBQUksSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksa0JBQVMsQ0FBQyxLQUFLLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2pELENBQUM7SUFDRCxvQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELHdCQUFJLEdBQUo7UUFBSyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksdUJBQWEsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksYUFBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxjQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLGNBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFTSywyQkFBTyxHQUFiOzs7OzRCQUNFLHFCQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7d0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQzs7Ozs7Ozs7Ozs7O3NCQVlGO3dCQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyx5QkFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7d0JBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyx5QkFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyx5QkFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7d0JBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWU7NEJBQ3hDLHlCQUFZLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVTs0QkFDbkMseUJBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUV4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcseUJBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO3dCQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO3dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcseUJBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlOzRCQUNyQyx5QkFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7d0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyx5QkFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7d0JBRXhFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyx5QkFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7d0JBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyx5QkFBWSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7d0JBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGVBQWU7NEJBQ3pDLHlCQUFZLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVTs0QkFDcEMseUJBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO3dCQUV6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcseUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsMEJBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsMEJBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO3dCQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlOzRCQUNsQywwQkFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRywwQkFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBRW5FLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRywwQkFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRywwQkFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7d0JBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRywwQkFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7d0JBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRywwQkFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7d0JBRTNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyx5QkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRywwQkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRywwQkFBYSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7d0JBQzNFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRywwQkFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBRW5DLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO3dCQUVyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsMkJBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsMkJBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsMkJBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsMkJBQWMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO3dCQUV0RSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO3dCQUU5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO3dCQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO3dCQUVwRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO3dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO3dCQUV0RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUUxRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcseUJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcseUJBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztLQUMzRDtJQUNLLDRCQUFRLEdBQWQ7Ozs7NEJBQ0UscUJBQU0sbUNBQXNCLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLHFCQUFNLG9DQUF1QixFQUFFLEVBQUE7O3dCQUEvQixTQUErQixDQUFDO3dCQUNoQyxxQkFBTSxtQ0FBc0IsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IscUJBQU0sa0NBQXFCLEVBQUUsRUFBQTs7d0JBQTdCLFNBQTZCLENBQUM7d0JBQzlCLHFCQUFNLG1DQUFzQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixxQkFBTSxvQ0FBdUIsRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDaEMscUJBQU0scUNBQXdCLEVBQUUsRUFBQTs7d0JBQWhDLFNBQWdDLENBQUM7Ozs7O0tBQ2xDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksY0FBSSxDQUMxQixxQkFBWSxDQUFDLFdBQVcsRUFDeEIsQ0FBQyxFQUNELENBQUMsRUFDRCx3QkFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQ3BCLHlCQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDeEIsd0JBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUM3Qix3QkFBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQy9CLHdCQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDeEIsSUFBSSxFQUNKLENBQUMsRUFDRCxrQkFBUyxDQUFDLEtBQUssRUFDZixxQkFBUyxDQUFDLFVBQVUsRUFDcEIsdUJBQVUsQ0FBQyxPQUFPLEVBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUN2QixDQUFDLEVBQ0QsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBQ00sZ0NBQVksR0FBbkI7UUFDRSxPQUFPLHlCQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSwrQkFBVyxHQUFsQjtRQUNFLE9BQU8sd0JBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ00saUNBQWEsR0FBcEI7UUFDRSxPQUFPLDBCQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSxpQ0FBYSxHQUFwQjtRQUNFLE9BQU8sMEJBQWEsQ0FBQztJQUN2QixDQUFDO0lBQ00sa0NBQWMsR0FBckI7UUFDRSxPQUFPLDJCQUFjLENBQUM7SUFDeEIsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0F4aEJBLEFBd2hCQyxDQXhoQjhCLHFCQUFTLEdBd2hCdkM7QUF4aEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2NvcmUvbXZjL0Jhc2VNb2RlbFwiO1xuaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQge1xuICBTYXZlRGF0YSxcbiAgU2F2ZUxhbmQwRGF0YSxcbiAgU2F2ZUxhbmQxRGF0YSxcbiAgU2F2ZUxhbmQyRGF0YSxcbiAgU2F2ZUxhbmQzRGF0YSxcbiAgU2F2ZUxhbmQ0RGF0YSxcbiAgU2F2ZUxhbmQ1RGF0YSxcbiAgU2F2ZUxhbmQ2RGF0YSxcbiAgU2F2ZUxhbmQ3RGF0YSxcbiAgU2F2ZUxhbmQ4RGF0YSxcbiAgU2F2ZVF1ZXVlRGF0YSxcbn0gZnJvbSBcIi4uL01hbmFnZXIvR2FtZVNhdmVNYW5hZ2VyXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcbmltcG9ydCB7XG4gIEZpcnN0Q29uZmlncyxcbiAgUGxhbnRDb25maWdzLFxuICBDYXR0bGVDb25maWdzLFxuICBZaWVsZENvbmZpZ3MsXG4gIExhbmRDb25maWdzLFxuICBXb3JrZXJDb25maWdzLFxuICBNYWNoaW5lQ29uZmlncyxcbiAgbG9hZENhdHRsZUNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRMYW5kQ29uZmlnRnJvbUNTVixcbiAgbG9hZE1hY2hpbmVDb25maWdGcm9tQ1NWLFxuICBsb2FkUGxhbnRDb25maWdGcm9tQ1NWLFxuICBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVixcbiAgbG9hZFlpZWxkQ29uZmlnRnJvbUNTVixcbn0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHtcbiAgQmVlZixcbiAgQmx1ZWJlcnJ5LFxuICBCbHVlYmVycnlTZWVkLFxuICBDb3csXG4gIExhbmQsXG4gIE1hY2hpbmUsXG4gIE1pbGssXG4gIE1pbGtDb3csXG4gIFN0b3JhZ2UsXG4gIFN0cmF3YmVycnksXG4gIFN0cmF3YmVycnlTZWVkLFxuICBUb21hdG8sXG4gIFRvbWF0b1NlZWQsXG4gIFdvcmtlcixcbn0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUsIFdvcmtlckFjdGlvbiB9IGZyb20gXCIuLi91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIGxvYWRUb21hdG9TZWVkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInRvbWF0b1NlZWRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQuaGFydmVzdEludGVydmFsID0gZGF0YS5oYXJ2ZXN0SW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5tYXhIYXJ2ZXN0ID0gZGF0YS5tYXhIYXJ2ZXN0IHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQuYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVRvbWF0b1NlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9TZWVkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICB9XG4gIGxvYWRCbHVlYmVycnlTZWVkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcImJsdWViZXJyeVNlZWRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuaGFydmVzdEludGVydmFsID0gZGF0YS5oYXJ2ZXN0SW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5tYXhIYXJ2ZXN0ID0gZGF0YS5tYXhIYXJ2ZXN0IHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZUJsdWViZXJyeVNlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlTZWVkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkO1xuICB9XG4gIGxvYWRTdHJhd2JlcnJ5U2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5U2VlZFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPSBkYXRhLmhhcnZlc3RJbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5tYXhIYXJ2ZXN0ID0gZGF0YS5tYXhIYXJ2ZXN0IHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVTdHJhd2JlcnJ5U2VlZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlTZWVkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDtcbiAgfVxuICBsb2FkTWlsa0Nvd0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrQ293XCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVNaWxrQ293RGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa0Nvd1wiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UubWlsa0NvdztcbiAgfVxuXG4gIGxvYWRXb2tlckZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JrZXJcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gZGF0YS53b3JraW5nSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVXb3JrZXJEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JrZXJcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLndvcmtlcjtcbiAgfVxuICBsb2FkTWFjaGluZUZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtYWNoaW5lXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5sZXZlbCA9IGRhdGEubGV2ZWwgfHwgMTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5zdXBwb3J0ID0gZGF0YS5zdXBwb3J0IHx8IDEwO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnVwZ3JhZGVQcmljZSA9IGRhdGEudXBncmFkZVByaWNlIHx8IDUwMDtcbiAgfVxuICBnZXRTYXZlTWFjaGluZURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIm1hY2hpbmVcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm1hY2hpbmU7XG4gIH1cbiAgbG9hZEdvbGRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiZ29sZFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ29sZCA9IGRhdGEgfHwgMDtcbiAgfVxuICBnZXRTYXZlR29sZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImdvbGRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdvbGQ7XG4gIH1cbiAgbG9hZFRpbWVTdGFtcEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0aW1lc3RhbXBcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnRpbWVzdGFtcCA9IGRhdGEgfHwgMDtcbiAgfVxuICBnZXRTYXZlVGltZVN0YW1wRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widGltZXN0YW1wXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS50aW1lc3RhbXA7XG4gIH1cblxuICBsb2FkV29ya2luZ1dvcmtlck51bWJlckZyb21TYXZlKFxuICAgIGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JraW5nV29ya2VyTnVtYmVyXCJdPlxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciA9IGRhdGEgfHwgMDtcbiAgfVxuICBnZXRTYXZlV29ya2luZ1dvcmtlck51bWJlckRhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIndvcmtpbmdXb3JrZXJOdW1iZXJcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXI7XG4gIH1cbiAgbG9hZFRvbWF0b0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9cIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8uc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgNTtcbiAgfVxuICBnZXRTYXZlVG9tYXRvRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS50b21hdG87XG4gIH1cbiAgbG9hZEJsdWViZXJyeUZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkuc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgODtcbiAgfVxuICBnZXRTYXZlQmx1ZWJlcnJ5RGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5ibHVlYmVycnk7XG4gIH1cbiAgbG9hZFN0cmF3YmVycnlGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5zZWxsUHJpY2UgPSBkYXRhLnNlbGxQcmljZSB8fCAxMDtcbiAgfVxuICBnZXRTYXZlU3RyYXdiZXJyeURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnN0cmF3YmVycnk7XG4gIH1cbiAgbG9hZE1pbGtGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa1wiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5zZWxsUHJpY2UgPSBkYXRhLnNlbGxQcmljZSB8fCAxNTtcbiAgfVxuICBnZXRTYXZlTWlsa0RhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm1pbGs7XG4gIH1cblxuICBsb2FkTGFuZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJsYW5kXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCA9XG4gICAgICBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY3VycmVudEFzc2V0ID0gZGF0YS5jdXJyZW50QXNzZXQgfHwgbmV3IFRvbWF0b1NlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrIHx8IHRydWU7XG5cbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5IHx8IHRydWU7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQudGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZSB8fCBudWxsO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGUgfHwgbnVsbDtcbiAgfVxuICBnZXRTYXZlTGFuZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImxhbmRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmxhbmQ7XG4gIH1cblxuICBsb2FkUXVldWVJbmRleEFycmF5RnJvbVNhdmUoXG4gICAgZGF0YTogUGFydGlhbDxTYXZlUXVldWVEYXRhW1wicXVldWVJbmRleEFycmF5XCJdPlxuICApOiB2b2lkIHtcbiAgICB0aGlzLnF1ZXVlSW5kZXhBcnJheSA9IGRhdGEgfHwgW107XG4gIH1cbiAgZ2V0U2F2ZVF1ZXVlSW5kZXhBcnJheURhdGEoKTogUGFydGlhbDxTYXZlUXVldWVEYXRhW1wicXVldWVJbmRleEFycmF5XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMucXVldWVJbmRleEFycmF5O1xuICB9XG5cbiAgbG9hZExhbmQwRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDBEYXRhW1wibGFuZF8wXCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzBdLm5hbWUgPSBkYXRhLm5hbWUgPz8gXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzBdLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzBdLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVswXS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzBdLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQwRGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kMERhdGFbXCJsYW5kXzBcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbMF07XG4gIH1cblxuICBsb2FkTGFuZDFGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kMURhdGFbXCJsYW5kXzFcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbMV0uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDFEYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQxRGF0YVtcImxhbmRfMVwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVsxXTtcbiAgfVxuXG4gIGxvYWRMYW5kMkZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQyRGF0YVtcImxhbmRfMlwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVsyXS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kMkRhdGEoKTogUGFydGlhbDxTYXZlTGFuZDJEYXRhW1wibGFuZF8yXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzJdO1xuICB9XG5cbiAgbG9hZExhbmQzRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDNEYXRhW1wibGFuZF8zXCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzNdLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzNdLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzNdLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVszXS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzNdLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQzRGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kM0RhdGFbXCJsYW5kXzNcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbM107XG4gIH1cblxuICBsb2FkTGFuZDRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kNERhdGFbXCJsYW5kXzRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbNF0uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDREYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQ0RGF0YVtcImxhbmRfNFwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVs0XTtcbiAgfVxuXG4gIGxvYWRMYW5kNUZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQ1RGF0YVtcImxhbmRfNVwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVs1XS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kNURhdGEoKTogUGFydGlhbDxTYXZlTGFuZDVEYXRhW1wibGFuZF81XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzVdO1xuICB9XG5cbiAgbG9hZExhbmQ2RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDZEYXRhW1wibGFuZF82XCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzZdLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzZdLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzZdLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzZdLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQ2RGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kNkRhdGFbXCJsYW5kXzZcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbNl07XG4gIH1cblxuICBsb2FkTGFuZDdGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kN0RhdGFbXCJsYW5kXzdcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzddLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbN10uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzddLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDdEYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQ3RGF0YVtcImxhbmRfN1wiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVs3XTtcbiAgfVxuXG4gIGxvYWRMYW5kOEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQ4RGF0YVtcImxhbmRfOFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVs4XS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kOERhdGEoKTogUGFydGlhbDxTYXZlTGFuZDhEYXRhW1wibGFuZF84XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzhdO1xuICB9XG4gIGluaXQoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgIHRoaXMuc3RvcmUgPSBuZXcgU3RvcmUodGhpcy5zdG9yYWdlKTtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkID0gbmV3IFRvbWF0b1NlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZCA9IG5ldyBCbHVlYmVycnlTZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkID0gbmV3IFN0cmF3YmVycnlTZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cgPSBuZXcgTWlsa0NvdygpO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cgPSBuZXcgQ293KCk7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlciA9IG5ldyBXb3JrZXIoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZSA9IG5ldyBNYWNoaW5lKCk7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvID0gbmV3IFRvbWF0bygpO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkgPSBuZXcgQmx1ZWJlcnJ5KCk7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkgPSBuZXcgU3RyYXdiZXJyeSgpO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrID0gbmV3IE1pbGsoKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZiA9IG5ldyBCZWVmKCk7XG4gIH1cbiAgc3RvcmU6IFN0b3JlO1xuICBzdG9yYWdlOiBTdG9yYWdlO1xuXG4gIHN0YXJ0TGFuZE51bWJlcjogbnVtYmVyO1xuXG4gIHF1ZXVlSW5kZXhBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgbGFuZEFycmF5OiBMYW5kW10gPSBbXTtcblxuICBhc3luYyBzZXREYXRhKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnN0b3JhZ2UuZ29sZCA9IDEwMDAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyID0gMDtcbiAgICAvKlxuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm51bWJlciA9IEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IExhbmRDb25maWdzLnJlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gTGFuZENvbmZpZ3MucmVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubWlzc2lvbk51bWJlciA9IExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5JbnRlcnZhbCA9IExhbmRDb25maWdzLnJlZC5jb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jcm9wID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmN1cnJlbnRBc3NldCA9IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmlzUmVhZHlUb1dvcmsgPSB0cnVlO1xuKi9cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IEZpcnN0Q29uZmlncy50b21hdG9zZWVkLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBGaXJzdENvbmZpZ3MubWlsa2Nvdy5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubmFtZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5taWxrY293LmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5jb3cubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm5hbWUgPSBDYXR0bGVDb25maWdzLmNvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UgPSBDYXR0bGVDb25maWdzLmNvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmhhcnZlc3RJbnRlcnZhbCA9IENhdHRsZUNvbmZpZ3MuY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLmNvdy5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBGaXJzdENvbmZpZ3Mud29ya2VyLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm5hbWUgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gV29ya2VyQ29uZmlncy5taWRkbGUud29ya2luZ0ludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmlzQnVzeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSAwO1xuXG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5sZXZlbDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5uYW1lID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5zdXBwb3J0ID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEuc3VwcG9ydDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2UgPSBNYWNoaW5lQ29uZmlncy5jaGluYS51cGdyYWRlUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5uYW1lID0gWWllbGRDb25maWdzLnRvbWF0by5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8uc2VsbFByaWNlID0gWWllbGRDb25maWdzLnRvbWF0by5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5uYW1lID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkuc2VsbFByaWNlID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm5hbWUgPSBZaWVsZENvbmZpZ3Muc3RyYXdiZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5LnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5zdHJhd2JlcnJ5LnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5taWxrLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubmFtZSA9IFlpZWxkQ29uZmlncy5taWxrLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsuc2VsbFByaWNlID0gWWllbGRDb25maWdzLm1pbGsuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJlZWYubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5uYW1lID0gWWllbGRDb25maWdzLmJlZWYubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MuYmVlZi5zZWxsUHJpY2U7XG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgYXdhaXQgbG9hZEZpcnN0Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFBsYW50Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRMYW5kQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVigpO1xuICB9XG5cbiAgbmV3TGFuZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZCA9IG5ldyBMYW5kKFxuICAgICAgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBMYW5kQ29uZmlncy5yZWQubmFtZSxcbiAgICAgIEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcixcbiAgICAgIExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyLFxuICAgICAgTGFuZENvbmZpZ3MucmVkLmNvbnRhaW5JbnRlcnZhbCxcbiAgICAgIExhbmRDb25maWdzLnJlZC5idXlQcmljZSxcbiAgICAgIHRydWUsXG4gICAgICAwLFxuICAgICAgTGFuZFN0YXRlLkVtcHR5LFxuICAgICAgUGxhbnRUeXBlLnRvbWF0b1NlZWQsXG4gICAgICBDYXR0bGVUeXBlLk1pbGtjb3csXG4gICAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCxcbiAgICAgIDAsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgZ2V0Rmlyc3REYXRhKCkge1xuICAgIHJldHVybiBGaXJzdENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFBsYW50RGF0YSgpIHtcbiAgICByZXR1cm4gUGxhbnRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRMYW5kRGF0YSgpIHtcbiAgICByZXR1cm4gTGFuZENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldENhdHRsZURhdGEoKSB7XG4gICAgcmV0dXJuIENhdHRsZUNvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFlpZWxkRGF0YSgpIHtcbiAgICByZXR1cm4gWWllbGRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRXb3JrZXJEYXRhKCkge1xuICAgIHJldHVybiBXb3JrZXJDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lRGF0YSgpIHtcbiAgICByZXR1cm4gTWFjaGluZUNvbmZpZ3M7XG4gIH1cbn1cbiJdfQ==