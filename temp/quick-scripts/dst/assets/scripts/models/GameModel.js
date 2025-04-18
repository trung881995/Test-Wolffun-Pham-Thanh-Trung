
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
var LandUI_1 = require("../ui/LandUI");
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
                        this.storage.workingWorkerNumber = 0;
                        this.storage.land.number = GameConfig_1.FirstConfigs.land.number;
                        this.storage.land.buyPrice = GameConfig_1.LandConfigs.red.buyPrice;
                        this.storage.land.name = GameConfig_1.LandConfigs.red.name;
                        this.storage.land.missionNumber = GameConfig_1.LandConfigs.red.missionNumber;
                        this.storage.land.containInterval = GameConfig_1.LandConfigs.red.containInterval;
                        this.storage.land.containYield = 0;
                        this.storage.land.crop = 0;
                        this.storage.land.workerAction = LandUI_1.WorkerAction.TomatoPlant;
                        this.storage.land.workingTime = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCx3Q0FBdUM7QUFDdkMsaURBZTRCO0FBQzVCLDhDQWU0QjtBQUM1Qix1Q0FBNEM7QUFFNUM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBc0tBLENBQUM7SUFyS0Msd0JBQUksR0FBSjtRQUFLLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O0lBQVMsQ0FBQztJQU92Qix5QkFBSyxHQUFYOzs7OzRCQUNFLHFCQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7d0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLGNBQUksRUFBRSxDQUFDO3dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFVLEVBQUUsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUM7d0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO3dCQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFN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S0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLDJCQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLDJCQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt3QkFFOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt3QkFFcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFFMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7S0FDM0Q7SUFDSyw0QkFBUSxHQUFkOzs7OzRCQUNFLHFCQUFNLG1DQUFzQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixxQkFBTSxvQ0FBdUIsRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDaEMscUJBQU0sbUNBQXNCLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLHFCQUFNLGtDQUFxQixFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixxQkFBTSxtQ0FBc0IsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IscUJBQU0sb0NBQXVCLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLHFCQUFNLHFDQUF3QixFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDOzs7OztLQUNsQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00sK0JBQVcsR0FBbEI7UUFDRSxPQUFPLHdCQUFXLENBQUM7SUFDckIsQ0FBQztJQUNNLGlDQUFhLEdBQXBCO1FBQ0UsT0FBTywwQkFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQWEsR0FBcEI7UUFDRSxPQUFPLDBCQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNNLGtDQUFjLEdBQXJCO1FBQ0UsT0FBTywyQkFBYyxDQUFDO0lBQ3hCLENBQUM7SUEyQkgsZ0JBQUM7QUFBRCxDQXRLQSxBQXNLQyxDQXRLOEIscUJBQVMsR0FzS3ZDO0FBdEtZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2NvcmUvbXZjL0Jhc2VNb2RlbFwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcbmltcG9ydCB7XG4gIEZpcnN0Q29uZmlncyxcbiAgUGxhbnRDb25maWdzLFxuICBDYXR0bGVDb25maWdzLFxuICBZaWVsZENvbmZpZ3MsXG4gIExhbmRDb25maWdzLFxuICBXb3JrZXJDb25maWdzLFxuICBNYWNoaW5lQ29uZmlncyxcbiAgbG9hZENhdHRsZUNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRMYW5kQ29uZmlnRnJvbUNTVixcbiAgbG9hZE1hY2hpbmVDb25maWdGcm9tQ1NWLFxuICBsb2FkUGxhbnRDb25maWdGcm9tQ1NWLFxuICBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVixcbiAgbG9hZFlpZWxkQ29uZmlnRnJvbUNTVixcbn0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHtcbiAgQmVlZixcbiAgQmx1ZWJlcnJ5LFxuICBCbHVlYmVycnlTZWVkLFxuICBDb3csXG4gIExhbmQsXG4gIE1hY2hpbmUsXG4gIE1pbGssXG4gIE1pbGtDb3csXG4gIFN0b3JhZ2UsXG4gIFN0cmF3YmVycnksXG4gIFN0cmF3YmVycnlTZWVkLFxuICBUb21hdG8sXG4gIFRvbWF0b1NlZWQsXG4gIFdvcmtlcixcbn0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IHsgV29ya2VyQWN0aW9uIH0gZnJvbSBcIi4uL3VpL0xhbmRVSVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsIHtcbiAgaW5pdCguLi5hcmdzOiBhbnlbXSk6IHZvaWQge31cbiAgc3RvcmU6IFN0b3JlO1xuICBzdG9yYWdlOiBTdG9yYWdlO1xuXG4gIHN0YXJ0TGFuZE51bWJlcjogbnVtYmVyO1xuXG4gIGxhbmRBcnJheTogTGFuZFtdO1xuICBhc3luYyBzZXR1cCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICB0aGlzLnN0b3JlID0gbmV3IFN0b3JlKHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQgPSBuZXcgTGFuZCgpO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkID0gbmV3IFRvbWF0b1NlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZCA9IG5ldyBCbHVlYmVycnlTZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkID0gbmV3IFN0cmF3YmVycnlTZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cgPSBuZXcgTWlsa0NvdygpO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cgPSBuZXcgQ293KCk7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlciA9IG5ldyBXb3JrZXIoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZSA9IG5ldyBNYWNoaW5lKCk7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvID0gbmV3IFRvbWF0bygpO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkgPSBuZXcgQmx1ZWJlcnJ5KCk7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkgPSBuZXcgU3RyYXdiZXJyeSgpO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrID0gbmV3IE1pbGsoKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZiA9IG5ldyBCZWVmKCk7XG4gIH1cbiAgYXN5bmMgc2V0RGF0YSgpIHtcbiAgICBhd2FpdCB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zdG9yYWdlLmdvbGQgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyID0gMDtcblxuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm51bWJlciA9IEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IExhbmRDb25maWdzLnJlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gTGFuZENvbmZpZ3MucmVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubWlzc2lvbk51bWJlciA9IExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5JbnRlcnZhbCA9IExhbmRDb25maWdzLnJlZC5jb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jcm9wID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSAwO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyID0gRmlyc3RDb25maWdzLmJsdWViZXJyeXNlZWQubnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm5hbWUgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlID0gUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5tYXhIYXJ2ZXN0ID1cbiAgICAgIFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MudG9tYXRvc2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubmFtZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLnRvbWF0b3NlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm1heEhhcnZlc3QgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm5hbWUgPSBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5tYXhIYXJ2ZXN0ID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID0gRmlyc3RDb25maWdzLm1pbGtjb3cubnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm5hbWUgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgQ2F0dGxlQ29uZmlncy5taWxrY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5tYXhIYXJ2ZXN0ID0gQ2F0dGxlQ29uZmlncy5taWxrY293Lm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UuY293Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmNvdy5uYW1lID0gQ2F0dGxlQ29uZmlncy5jb3cubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5jb3cuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLmNvdy5oYXJ2ZXN0SW50ZXJ2YWwgPSBDYXR0bGVDb25maWdzLmNvdy5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmNvdy5tYXhIYXJ2ZXN0ID0gQ2F0dGxlQ29uZmlncy5jb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubnVtYmVyID0gRmlyc3RDb25maWdzLndvcmtlci5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5uYW1lID0gV29ya2VyQ29uZmlncy5taWRkbGUubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLndvcmtpbmdJbnRlcnZhbCA9IFdvcmtlckNvbmZpZ3MubWlkZGxlLndvcmtpbmdJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmJ1eVByaWNlID0gV29ya2VyQ29uZmlncy5taWRkbGUuYnV5UHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciA9IDA7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5sZXZlbCA9IE1hY2hpbmVDb25maWdzLmNoaW5hLmxldmVsO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLm5hbWUgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnN1cHBvcnQgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5zdXBwb3J0O1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnVwZ3JhZGVQcmljZSA9IE1hY2hpbmVDb25maWdzLmNoaW5hLnVwZ3JhZGVQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm5hbWUgPSBZaWVsZENvbmZpZ3MudG9tYXRvLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MudG9tYXRvLnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm5hbWUgPSBZaWVsZENvbmZpZ3MuYmx1ZWJlcnJ5Lm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MuYmx1ZWJlcnJ5LnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubmFtZSA9IFlpZWxkQ29uZmlncy5zdHJhd2JlcnJ5Lm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkuc2VsbFByaWNlID0gWWllbGRDb25maWdzLnN0cmF3YmVycnkuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5uYW1lID0gWWllbGRDb25maWdzLm1pbGsubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MubWlsay5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5iZWVmLm5hbWUgPSBZaWVsZENvbmZpZ3MuYmVlZi5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5iZWVmLnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5iZWVmLnNlbGxQcmljZTtcbiAgfVxuICBhc3luYyBsb2FkRGF0YSgpIHtcbiAgICBhd2FpdCBsb2FkRmlyc3RDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZENhdHRsZUNvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkUGxhbnRDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZExhbmRDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFlpZWxkQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRXb3JrZXJDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZE1hY2hpbmVDb25maWdGcm9tQ1NWKCk7XG4gIH1cbiAgcHVibGljIGdldEZpcnN0RGF0YSgpIHtcbiAgICByZXR1cm4gRmlyc3RDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRQbGFudERhdGEoKSB7XG4gICAgcmV0dXJuIFBsYW50Q29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0TGFuZERhdGEoKSB7XG4gICAgcmV0dXJuIExhbmRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRDYXR0bGVEYXRhKCkge1xuICAgIHJldHVybiBDYXR0bGVDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRZaWVsZERhdGEoKSB7XG4gICAgcmV0dXJuIFlpZWxkQ29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0V29ya2VyRGF0YSgpIHtcbiAgICByZXR1cm4gV29ya2VyQ29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0TWFjaGluZURhdGEoKSB7XG4gICAgcmV0dXJuIE1hY2hpbmVDb25maWdzO1xuICB9XG5cbiAgLypwdWJsaWMgZ2V0TGFuZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5sYW5kLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0VG9tYXRvU2VlZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy50b21hdG9zZWVkLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0Qmx1ZWJlcnJ5U2VlZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5ibHVlYmVycnlzZWVkLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0TWlsa0Nvd051bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5taWxrY293Lm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0V29rZXJOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyc3RDb25maWcgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gZmlyc3RDb25maWcud29ya2VyLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0TWFjaGluZU51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5tYWNoaW5lLm51bWJlcjtcbiAgfVxuICAqL1xufVxuIl19