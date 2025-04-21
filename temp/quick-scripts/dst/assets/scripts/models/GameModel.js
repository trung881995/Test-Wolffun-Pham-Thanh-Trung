
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
                        this.storage.gold = 20000;
                        this.storage.workingWorkerNumber = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxxREFBb0Q7QUFDcEQsbURBQWtEO0FBZWxELHdDQUF1QztBQUN2QyxpREFlNEI7QUFDNUIsOENBZTRCO0FBQzVCLHVDQUErRDtBQUUvRDtJQUErQiw2QkFBUztJQUF4QztRQUFBLHFFQTRnQkM7UUFqSUMscUJBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IsZUFBUyxHQUFXLEVBQUUsQ0FBQzs7SUFnSXpCLENBQUM7SUEzZ0JDLDBDQUFzQixHQUF0QixVQUF1QixJQUFxQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCx5Q0FBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCw2Q0FBeUIsR0FBekIsVUFBMEIsSUFBd0M7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENB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QkFFOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt3QkFFcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFFMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7S0FDM0Q7SUFDSyw0QkFBUSxHQUFkOzs7OzRCQUNFLHFCQUFNLG1DQUFzQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixxQkFBTSxvQ0FBdUIsRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDaEMscUJBQU0sbUNBQXNCLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLHFCQUFNLGtDQUFxQixFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixxQkFBTSxtQ0FBc0IsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IscUJBQU0sb0NBQXVCLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLHFCQUFNLHFDQUF3QixFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDOzs7OztLQUNsQztJQUVELDJCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLGNBQUksQ0FDMUIscUJBQVksQ0FBQyxXQUFXLEVBQ3hCLENBQUMsRUFDRCxDQUFDLEVBQ0Qsd0JBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUNwQix5QkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ3hCLHdCQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDN0Isd0JBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUMvQix3QkFBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQ3hCLElBQUksRUFDSixDQUFDLEVBQ0Qsa0JBQVMsQ0FBQyxLQUFLLEVBQ2YscUJBQVMsQ0FBQyxVQUFVLEVBQ3BCLHVCQUFVLENBQUMsT0FBTyxFQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFDdkIsQ0FBQyxFQUNELElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00sK0JBQVcsR0FBbEI7UUFDRSxPQUFPLHdCQUFXLENBQUM7SUFDckIsQ0FBQztJQUNNLGlDQUFhLEdBQXBCO1FBQ0UsT0FBTywwQkFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQWEsR0FBcEI7UUFDRSxPQUFPLDBCQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNNLGtDQUFjLEdBQXJCO1FBQ0UsT0FBTywyQkFBYyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxnQkFBQztBQUFELENBNWdCQSxBQTRnQkMsQ0E1Z0I4QixxQkFBUyxHQTRnQnZDO0FBNWdCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlTW9kZWxcIjtcbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IHtcbiAgU2F2ZURhdGEsXG4gIFNhdmVMYW5kMERhdGEsXG4gIFNhdmVMYW5kMURhdGEsXG4gIFNhdmVMYW5kMkRhdGEsXG4gIFNhdmVMYW5kM0RhdGEsXG4gIFNhdmVMYW5kNERhdGEsXG4gIFNhdmVMYW5kNURhdGEsXG4gIFNhdmVMYW5kNkRhdGEsXG4gIFNhdmVMYW5kN0RhdGEsXG4gIFNhdmVMYW5kOERhdGEsXG4gIFNhdmVRdWV1ZURhdGEsXG59IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVTYXZlTWFuYWdlclwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XG5pbXBvcnQge1xuICBGaXJzdENvbmZpZ3MsXG4gIFBsYW50Q29uZmlncyxcbiAgQ2F0dGxlQ29uZmlncyxcbiAgWWllbGRDb25maWdzLFxuICBMYW5kQ29uZmlncyxcbiAgV29ya2VyQ29uZmlncyxcbiAgTWFjaGluZUNvbmZpZ3MsXG4gIGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWLFxuICBsb2FkRmlyc3RDb25maWdGcm9tQ1NWLFxuICBsb2FkTGFuZENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVixcbiAgbG9hZFBsYW50Q29uZmlnRnJvbUNTVixcbiAgbG9hZFdvcmtlckNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YsXG59IGZyb20gXCIuLi9kYXRhL0dhbWVDb25maWdcIjtcbmltcG9ydCB7XG4gIEJlZWYsXG4gIEJsdWViZXJyeSxcbiAgQmx1ZWJlcnJ5U2VlZCxcbiAgQ293LFxuICBMYW5kLFxuICBNYWNoaW5lLFxuICBNaWxrLFxuICBNaWxrQ293LFxuICBTdG9yYWdlLFxuICBTdHJhd2JlcnJ5LFxuICBTdHJhd2JlcnJ5U2VlZCxcbiAgVG9tYXRvLFxuICBUb21hdG9TZWVkLFxuICBXb3JrZXIsXG59IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUksIHsgTGFuZFN0YXRlLCBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWwge1xuICBsb2FkVG9tYXRvU2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9TZWVkXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVUb21hdG9TZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvU2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgfVxuICBsb2FkQmx1ZWJlcnJ5U2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlTZWVkXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVCbHVlYmVycnlTZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5U2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDtcbiAgfVxuICBsb2FkU3RyYXdiZXJyeVNlZWRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVNlZWRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID0gZGF0YS5oYXJ2ZXN0SW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlU3RyYXdiZXJyeVNlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5U2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ7XG4gIH1cbiAgbG9hZE1pbGtDb3dGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa0Nvd1wiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5oYXJ2ZXN0SW50ZXJ2YWwgPSBkYXRhLmhhcnZlc3RJbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBkYXRhLm1heEhhcnZlc3QgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlTWlsa0Nvd0RhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtDb3dcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm1pbGtDb3c7XG4gIH1cblxuICBsb2FkV29rZXJGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2VyXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLndvcmtpbmdJbnRlcnZhbCA9IGRhdGEud29ya2luZ0ludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlV29ya2VyRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2VyXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS53b3JrZXI7XG4gIH1cbiAgbG9hZE1hY2hpbmVGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWFjaGluZVwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgPSBkYXRhLmxldmVsIHx8IDE7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUuc3VwcG9ydCA9IGRhdGEuc3VwcG9ydCB8fCAxMDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2UgPSBkYXRhLnVwZ3JhZGVQcmljZSB8fCA1MDA7XG4gIH1cbiAgZ2V0U2F2ZU1hY2hpbmVEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJtYWNoaW5lXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5tYWNoaW5lO1xuICB9XG4gIGxvYWRHb2xkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcImdvbGRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmdvbGQgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZUdvbGREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJnb2xkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nb2xkO1xuICB9XG4gIGxvYWRUaW1lU3RhbXBGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widGltZXN0YW1wXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50aW1lc3RhbXAgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVRpbWVTdGFtcERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInRpbWVzdGFtcFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudGltZXN0YW1wO1xuICB9XG5cbiAgbG9hZFdvcmtpbmdXb3JrZXJOdW1iZXJGcm9tU2F2ZShcbiAgICBkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2luZ1dvcmtlck51bWJlclwiXT5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVdvcmtpbmdXb3JrZXJOdW1iZXJEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JraW5nV29ya2VyTnVtYmVyXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyO1xuICB9XG4gIGxvYWRUb21hdG9Gcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLnNlbGxQcmljZSA9IGRhdGEuc2VsbFByaWNlIHx8IDU7XG4gIH1cbiAgZ2V0U2F2ZVRvbWF0b0RhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInRvbWF0b1wiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudG9tYXRvO1xuICB9XG4gIGxvYWRCbHVlYmVycnlGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5XCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5LnNlbGxQcmljZSA9IGRhdGEuc2VsbFByaWNlIHx8IDg7XG4gIH1cbiAgZ2V0U2F2ZUJsdWViZXJyeURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImJsdWViZXJyeVwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5O1xuICB9XG4gIGxvYWRTdHJhd2JlcnJ5RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkuc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgMTA7XG4gIH1cbiAgZ2V0U2F2ZVN0cmF3YmVycnlEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5O1xuICB9XG4gIGxvYWRNaWxrRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsuc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgMTU7XG4gIH1cbiAgZ2V0U2F2ZU1pbGtEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5taWxrO1xuICB9XG5cbiAgbG9hZExhbmRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibGFuZFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgPVxuICAgICAgZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmN1cnJlbnRBc3NldCA9IGRhdGEuY3VycmVudEFzc2V0IHx8IG5ldyBUb21hdG9TZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayB8fCB0cnVlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSB8fCB0cnVlO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGUgfHwgbnVsbDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlIHx8IG51bGw7XG4gIH1cbiAgZ2V0U2F2ZUxhbmREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJsYW5kXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5sYW5kO1xuICB9XG5cbiAgbG9hZFF1ZXVlSW5kZXhBcnJheUZyb21TYXZlKFxuICAgIGRhdGE6IFBhcnRpYWw8U2F2ZVF1ZXVlRGF0YVtcInF1ZXVlSW5kZXhBcnJheVwiXT5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5xdWV1ZUluZGV4QXJyYXkgPSBkYXRhIHx8IFtdO1xuICB9XG4gIGdldFNhdmVRdWV1ZUluZGV4QXJyYXlEYXRhKCk6IFBhcnRpYWw8U2F2ZVF1ZXVlRGF0YVtcInF1ZXVlSW5kZXhBcnJheVwiXT4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlSW5kZXhBcnJheTtcbiAgfVxuXG4gIGxvYWRMYW5kMEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQwRGF0YVtcImxhbmRfMFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5uYW1lID0gZGF0YS5uYW1lID8/IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVswXS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kMERhdGEoKTogUGFydGlhbDxTYXZlTGFuZDBEYXRhW1wibGFuZF8wXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzBdO1xuICB9XG5cbiAgbG9hZExhbmQxRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDFEYXRhW1wibGFuZF8xXCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzFdLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzFdLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzFdLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzFdLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQxRGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kMURhdGFbXCJsYW5kXzFcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbMV07XG4gIH1cblxuICBsb2FkTGFuZDJGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kMkRhdGFbXCJsYW5kXzJcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDJEYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQyRGF0YVtcImxhbmRfMlwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVsyXTtcbiAgfVxuXG4gIGxvYWRMYW5kM0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQzRGF0YVtcImxhbmRfM1wiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVszXS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kM0RhdGEoKTogUGFydGlhbDxTYXZlTGFuZDNEYXRhW1wibGFuZF8zXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzNdO1xuICB9XG5cbiAgbG9hZExhbmQ0RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDREYXRhW1wibGFuZF80XCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzRdLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzRdLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzRdLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzRdLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQ0RGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kNERhdGFbXCJsYW5kXzRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbNF07XG4gIH1cblxuICBsb2FkTGFuZDVGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kNURhdGFbXCJsYW5kXzVcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDVEYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQ1RGF0YVtcImxhbmRfNVwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVs1XTtcbiAgfVxuXG4gIGxvYWRMYW5kNkZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQ2RGF0YVtcImxhbmRfNlwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVs2XS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kNkRhdGEoKTogUGFydGlhbDxTYXZlTGFuZDZEYXRhW1wibGFuZF82XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzZdO1xuICB9XG5cbiAgbG9hZExhbmQ3RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDdEYXRhW1wibGFuZF83XCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzddLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzddLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzddLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzddLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQ3RGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kN0RhdGFbXCJsYW5kXzdcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbN107XG4gIH1cblxuICBsb2FkTGFuZDhGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kOERhdGFbXCJsYW5kXzhcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDhEYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQ4RGF0YVtcImxhbmRfOFwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVs4XTtcbiAgfVxuICBpbml0KC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICB0aGlzLnN0b3JlID0gbmV3IFN0b3JlKHRoaXMuc3RvcmFnZSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCA9IG5ldyBUb21hdG9TZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQgPSBuZXcgQmx1ZWJlcnJ5U2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZCA9IG5ldyBTdHJhd2JlcnJ5U2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293ID0gbmV3IE1pbGtDb3coKTtcbiAgICB0aGlzLnN0b3JhZ2UuY293ID0gbmV3IENvdygpO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUgPSBuZXcgTWFjaGluZSgpO1xuXG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0byA9IG5ldyBUb21hdG8oKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5ID0gbmV3IEJsdWViZXJyeSgpO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5ID0gbmV3IFN0cmF3YmVycnkoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsayA9IG5ldyBNaWxrKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJlZWYgPSBuZXcgQmVlZigpO1xuICB9XG4gIHN0b3JlOiBTdG9yZTtcbiAgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzdGFydExhbmROdW1iZXI6IG51bWJlcjtcblxuICBxdWV1ZUluZGV4QXJyYXk6IG51bWJlcltdID0gW107XG4gIGxhbmRBcnJheTogTGFuZFtdID0gW107XG5cbiAgYXN5bmMgc2V0RGF0YSgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5zdG9yYWdlLmdvbGQgPSAyMDAwMDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciA9IDA7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IEZpcnN0Q29uZmlncy50b21hdG9zZWVkLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBGaXJzdENvbmZpZ3MubWlsa2Nvdy5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubmFtZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5taWxrY293LmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5jb3cubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm5hbWUgPSBDYXR0bGVDb25maWdzLmNvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UgPSBDYXR0bGVDb25maWdzLmNvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmhhcnZlc3RJbnRlcnZhbCA9IENhdHRsZUNvbmZpZ3MuY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLmNvdy5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBGaXJzdENvbmZpZ3Mud29ya2VyLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm5hbWUgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gV29ya2VyQ29uZmlncy5taWRkbGUud29ya2luZ0ludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmlzQnVzeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSAwO1xuXG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5sZXZlbDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5uYW1lID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5zdXBwb3J0ID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEuc3VwcG9ydDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2UgPSBNYWNoaW5lQ29uZmlncy5jaGluYS51cGdyYWRlUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5uYW1lID0gWWllbGRDb25maWdzLnRvbWF0by5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8uc2VsbFByaWNlID0gWWllbGRDb25maWdzLnRvbWF0by5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5uYW1lID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkuc2VsbFByaWNlID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm5hbWUgPSBZaWVsZENvbmZpZ3Muc3RyYXdiZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5LnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5zdHJhd2JlcnJ5LnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5taWxrLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubmFtZSA9IFlpZWxkQ29uZmlncy5taWxrLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsuc2VsbFByaWNlID0gWWllbGRDb25maWdzLm1pbGsuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJlZWYubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5uYW1lID0gWWllbGRDb25maWdzLmJlZWYubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MuYmVlZi5zZWxsUHJpY2U7XG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgYXdhaXQgbG9hZEZpcnN0Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFBsYW50Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRMYW5kQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVigpO1xuICB9XG5cbiAgbmV3TGFuZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZCA9IG5ldyBMYW5kKFxuICAgICAgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBMYW5kQ29uZmlncy5yZWQubmFtZSxcbiAgICAgIEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcixcbiAgICAgIExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyLFxuICAgICAgTGFuZENvbmZpZ3MucmVkLmNvbnRhaW5JbnRlcnZhbCxcbiAgICAgIExhbmRDb25maWdzLnJlZC5idXlQcmljZSxcbiAgICAgIHRydWUsXG4gICAgICAwLFxuICAgICAgTGFuZFN0YXRlLkVtcHR5LFxuICAgICAgUGxhbnRUeXBlLnRvbWF0b1NlZWQsXG4gICAgICBDYXR0bGVUeXBlLk1pbGtjb3csXG4gICAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCxcbiAgICAgIDAsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgZ2V0Rmlyc3REYXRhKCkge1xuICAgIHJldHVybiBGaXJzdENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFBsYW50RGF0YSgpIHtcbiAgICByZXR1cm4gUGxhbnRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRMYW5kRGF0YSgpIHtcbiAgICByZXR1cm4gTGFuZENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldENhdHRsZURhdGEoKSB7XG4gICAgcmV0dXJuIENhdHRsZUNvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFlpZWxkRGF0YSgpIHtcbiAgICByZXR1cm4gWWllbGRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRXb3JrZXJEYXRhKCkge1xuICAgIHJldHVybiBXb3JrZXJDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lRGF0YSgpIHtcbiAgICByZXR1cm4gTWFjaGluZUNvbmZpZ3M7XG4gIH1cbn1cbiJdfQ==