
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/data/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c45bDBVDVBl4WsS7kSl3/l', 'GameConfig');
// scripts/data/GameConfig.ts

"use strict";
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadLandConfigFromCSV = exports.loadMachineConfigFromCSV = exports.loadWorkerConfigFromCSV = exports.loadYieldConfigFromCSV = exports.loadCattleConfigFromCSV = exports.loadPlantConfigFromCSV = exports.loadFirstConfigFromCSV = exports.FirstConfigs = exports.MachineConfigs = exports.WorkerConfigs = exports.LandConfigs = exports.YieldConfigs = exports.CattleConfigs = exports.PlantConfigs = void 0;
var PlantType_1 = require("../../enums/PlantType");
var CattleType_1 = require("../../enums/CattleType");
var YieldType_1 = require("../../enums/YieldType");
var LandType_1 = require("../../enums/LandType");
var WorkerType_1 = require("../../enums/WorkerType");
var MachineType_1 = require("../../enums/MachineType");
var Type_1 = require("../../enums/Type");
var CSVLoader_1 = require("../utils/CSVLoader");
exports.PlantConfigs = (_a = {},
    _a[PlantType_1.PlantType.Tomato] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _a[PlantType_1.PlantType.Blueberry] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _a[PlantType_1.PlantType.Strawberry] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _a);
exports.CattleConfigs = (_b = {},
    _b[CattleType_1.CattleType.Milkcow] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _b[CattleType_1.CattleType.Cow] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _b);
exports.YieldConfigs = (_c = {},
    _c[YieldType_1.YieldType.Tomato] = {
        name: "",
        sellPrice: 0,
    },
    _c[YieldType_1.YieldType.Blueberry] = {
        name: "",
        sellPrice: 0,
    },
    _c[YieldType_1.YieldType.Milk] = {
        name: "",
        sellPrice: 0,
    },
    _c[YieldType_1.YieldType.Beef] = {
        name: "",
        sellPrice: 0,
    },
    _c);
exports.LandConfigs = (_d = {},
    _d[LandType_1.LandType.Red] = {
        name: "",
        missionNumber: 0,
        emptyInterval: 0,
        buyPrice: 0,
    },
    _d[LandType_1.LandType.Green] = {
        name: "",
        missionNumber: 0,
        emptyInterval: 0,
        buyPrice: 0,
    },
    _d[LandType_1.LandType.Brown] = {
        name: "",
        missionNumber: 0,
        emptyInterval: 0,
        buyPrice: 0,
    },
    _d);
exports.WorkerConfigs = (_e = {},
    _e[WorkerType_1.WorkerType.Fresher] = {
        name: "",
        workingInterval: 0,
        buyPrice: 0,
    },
    _e[WorkerType_1.WorkerType.Junior] = {
        name: "",
        workingInterval: 0,
        buyPrice: 0,
    },
    _e[WorkerType_1.WorkerType.Middle] = {
        name: "",
        workingInterval: 0,
        buyPrice: 0,
    },
    _e[WorkerType_1.WorkerType.Senior] = {
        name: "",
        workingInterval: 0,
        buyPrice: 0,
    },
    _e);
exports.MachineConfigs = (_f = {},
    _f[MachineType_1.MachineType.China] = {
        name: "",
        level: 0,
        support: 0,
        upgradePrice: 0,
    },
    _f[MachineType_1.MachineType.Japan] = {
        name: "",
        level: 0,
        support: 0,
        upgradePrice: 0,
    },
    _f[MachineType_1.MachineType.America] = {
        name: "",
        level: 0,
        support: 0,
        upgradePrice: 0,
    },
    _f[MachineType_1.MachineType.Vietnam] = {
        name: "",
        level: 0,
        support: 0,
        upgradePrice: 0,
    },
    _f);
exports.FirstConfigs = (_g = {},
    _g[Type_1.Type.Land] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Tomatoseed] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Blueberryseed] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Milkcow] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Worker] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Machine] = {
        name: "",
        number: 0,
    },
    _g);
function loadFirstConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("first.csv")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.FirstConfigs[type]) {
                            exports.FirstConfigs[type] = {
                                name: row.name,
                                number: parseInt(row.number),
                            };
                        }
                    });
                    console.log("[CSV] FirstConfigs loaded:", exports.FirstConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadFirstConfigFromCSV = loadFirstConfigFromCSV;
function loadPlantConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("plants.csv")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.PlantConfigs[type]) {
                            exports.PlantConfigs[type] = {
                                name: row.name,
                                harvestInterval: parseFloat(row.harvestInterval),
                                maxHarvest: parseInt(row.maxHarvest),
                                buyPrice: parseInt(row.buyPrice),
                            };
                        }
                    });
                    console.log("[CSV] PlantConfigs loaded:", exports.PlantConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadPlantConfigFromCSV = loadPlantConfigFromCSV;
function loadCattleConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("cattles.csv")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.CattleConfigs[type]) {
                            exports.CattleConfigs[type] = {
                                name: row.name,
                                harvestInterval: parseFloat(row.harvestInterval),
                                maxHarvest: parseInt(row.maxHarvest),
                                buyPrice: parseInt(row.sellPrice),
                            };
                        }
                    });
                    console.log("[CSV] CattleConfigs loaded:", exports.CattleConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadCattleConfigFromCSV = loadCattleConfigFromCSV;
function loadYieldConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("Yields.csv")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.YieldConfigs[type]) {
                            exports.YieldConfigs[type] = {
                                name: row.name,
                                sellPrice: parseInt(row.sellPrice),
                            };
                        }
                    });
                    console.log("[CSV] YieldConfigs loaded:", exports.YieldConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadYieldConfigFromCSV = loadYieldConfigFromCSV;
function loadWorkerConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("Workers.csv")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.WorkerConfigs[type]) {
                            exports.WorkerConfigs[type] = {
                                name: row.name,
                                workingInterval: parseFloat(row.workingInterval),
                                buyPrice: parseInt(row.buyPrice),
                            };
                        }
                    });
                    console.log("[CSV] WorkerConfigs loaded:", exports.WorkerConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadWorkerConfigFromCSV = loadWorkerConfigFromCSV;
function loadMachineConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("Machines.csv")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.MachineConfigs[type]) {
                            exports.MachineConfigs[type] = {
                                name: row.name,
                                level: parseInt(row.level),
                                support: parseFloat(row.support),
                                upgradePrice: parseInt(row.upgradePrice),
                            };
                        }
                    });
                    console.log("[CSV] MachineConfigs loaded:", exports.MachineConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadMachineConfigFromCSV = loadMachineConfigFromCSV;
function loadLandConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("Lands.csv")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.LandConfigs[type]) {
                            exports.LandConfigs[type] = {
                                name: row.name,
                                missionNumber: parseInt(row.missionNumber),
                                emptyInterval: parseFloat(row.emptyInterval),
                                buyPrice: parseInt(row.buyPrice),
                            };
                        }
                    });
                    console.log("[CSV] LandConfigs loaded:", exports.LandConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadLandConfigFromCSV = loadLandConfigFromCSV;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvR2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHFEQUFvRDtBQUNwRCxtREFBa0Q7QUFDbEQsaURBQWdEO0FBQ2hELHFEQUFvRDtBQUNwRCx1REFBc0Q7QUFDdEQseUNBQXdDO0FBQ3hDLGdEQUErQztBQXVDbEMsUUFBQSxZQUFZO0lBQ3ZCLEdBQUMscUJBQVMsQ0FBQyxNQUFNLElBQUc7UUFDbEIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHFCQUFTLENBQUMsU0FBUyxJQUFHO1FBQ3JCLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBQ0QsR0FBQyxxQkFBUyxDQUFDLFVBQVUsSUFBRztRQUN0QixJQUFJLEVBQUUsRUFBRTtRQUNSLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLENBQUM7S0FDWjtRQUNEO0FBQ1csUUFBQSxhQUFhO0lBQ3hCLEdBQUMsdUJBQVUsQ0FBQyxPQUFPLElBQUc7UUFDcEIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHVCQUFVLENBQUMsR0FBRyxJQUFHO1FBQ2hCLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO1FBQ0Q7QUFDVyxRQUFBLFlBQVk7SUFDdkIsR0FB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Q0FBQyxFQUFFOzRCQUNyQixtQkFBVyxDQUFDLElBQUksQ0FBQyxHQUFHO2dDQUNsQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7Z0NBQ2QsYUFBYSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO2dDQUMxQyxhQUFhLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0NBQzVDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQzs2QkFDakMsQ0FBQzt5QkFDSDtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLG1CQUFXLENBQUMsQ0FBQzs7Ozs7Q0FDdkQ7QUFqQkQsc0RBaUJDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBZaWVsZFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvWWllbGRUeXBlXCI7XG5pbXBvcnQgeyBMYW5kVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9MYW5kVHlwZVwiO1xuaW1wb3J0IHsgV29ya2VyVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9Xb3JrZXJUeXBlXCI7XG5pbXBvcnQgeyBNYWNoaW5lVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9NYWNoaW5lVHlwZVwiO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9UeXBlXCI7XG5pbXBvcnQgeyBDU1ZMb2FkZXIgfSBmcm9tIFwiLi4vdXRpbHMvQ1NWTG9hZGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlyc3RDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBZaWVsZENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2VsbFByaWNlOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIENhdHRsZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGxhbnRDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIExhbmRDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIG1pc3Npb25OdW1iZXI6IG51bWJlcjtcbiAgZW1wdHlJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBXb3JrZXJDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBNYWNoaW5lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBzdXBwb3J0OiBudW1iZXI7XG4gIHVwZ3JhZGVQcmljZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IFBsYW50Q29uZmlnczogUmVjb3JkPFBsYW50VHlwZSwgUGxhbnRDb25maWc+ID0ge1xuICBbUGxhbnRUeXBlLlRvbWF0b106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGhhcnZlc3RJbnRlcnZhbDogMCxcbiAgICBtYXhIYXJ2ZXN0OiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbUGxhbnRUeXBlLkJsdWViZXJyeV06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGhhcnZlc3RJbnRlcnZhbDogMCxcbiAgICBtYXhIYXJ2ZXN0OiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbUGxhbnRUeXBlLlN0cmF3YmVycnldOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBoYXJ2ZXN0SW50ZXJ2YWw6IDAsXG4gICAgbWF4SGFydmVzdDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbn07XG5leHBvcnQgY29uc3QgQ2F0dGxlQ29uZmlnczogUmVjb3JkPENhdHRsZVR5cGUsIENhdHRsZUNvbmZpZz4gPSB7XG4gIFtDYXR0bGVUeXBlLk1pbGtjb3ddOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBoYXJ2ZXN0SW50ZXJ2YWw6IDAsXG4gICAgbWF4SGFydmVzdDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW0NhdHRsZVR5cGUuQ293XToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IFlpZWxkQ29uZmlnczogUmVjb3JkPFlpZWxkVHlwZSwgWWllbGRDb25maWc+ID0ge1xuICBbWWllbGRUeXBlLlRvbWF0b106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHNlbGxQcmljZTogMCxcbiAgfSxcbiAgW1lpZWxkVHlwZS5CbHVlYmVycnldOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBzZWxsUHJpY2U6IDAsXG4gIH0sXG4gIFtZaWVsZFR5cGUuTWlsa106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHNlbGxQcmljZTogMCxcbiAgfSxcbiAgW1lpZWxkVHlwZS5CZWVmXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgc2VsbFByaWNlOiAwLFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBMYW5kQ29uZmlnczogUmVjb3JkPExhbmRUeXBlLCBMYW5kQ29uZmlnPiA9IHtcbiAgW0xhbmRUeXBlLlJlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG1pc3Npb25OdW1iZXI6IDAsXG4gICAgZW1wdHlJbnRlcnZhbDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW0xhbmRUeXBlLkdyZWVuXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbWlzc2lvbk51bWJlcjogMCxcbiAgICBlbXB0eUludGVydmFsOiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbTGFuZFR5cGUuQnJvd25dOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBtaXNzaW9uTnVtYmVyOiAwLFxuICAgIGVtcHR5SW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgV29ya2VyQ29uZmlnczogUmVjb3JkPFdvcmtlclR5cGUsIFdvcmtlckNvbmZpZz4gPSB7XG4gIFtXb3JrZXJUeXBlLkZyZXNoZXJdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICB3b3JraW5nSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtXb3JrZXJUeXBlLkp1bmlvcl06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHdvcmtpbmdJbnRlcnZhbDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW1dvcmtlclR5cGUuTWlkZGxlXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgd29ya2luZ0ludGVydmFsOiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbV29ya2VyVHlwZS5TZW5pb3JdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICB3b3JraW5nSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IE1hY2hpbmVDb25maWdzOiBSZWNvcmQ8TWFjaGluZVR5cGUsIE1hY2hpbmVDb25maWc+ID0ge1xuICBbTWFjaGluZVR5cGUuQ2hpbmFdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBsZXZlbDogMCxcbiAgICBzdXBwb3J0OiAwLFxuICAgIHVwZ3JhZGVQcmljZTogMCxcbiAgfSxcbiAgW01hY2hpbmVUeXBlLkphcGFuXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG4gIFtNYWNoaW5lVHlwZS5BbWVyaWNhXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG4gIFtNYWNoaW5lVHlwZS5WaWV0bmFtXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IEZpcnN0Q29uZmlnczogUmVjb3JkPFR5cGUsIEZpcnN0Q29uZmlnPiA9IHtcbiAgW1R5cGUuTGFuZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuVG9tYXRvc2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuQmx1ZWJlcnJ5c2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuTWlsa2Nvd106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuV29ya2VyXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICB9LFxuICBbVHlwZS5NYWNoaW5lXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICB9LFxufTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRmlyc3RDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJmaXJzdC5jc3ZcIik7XG5cbiAgcmVjb3Jkcy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBjb25zdCB0eXBlID0gcm93Lm5hbWUudG9Mb3dlckNhc2UoKSBhcyBUeXBlO1xuXG4gICAgaWYgKEZpcnN0Q29uZmlnc1t0eXBlXSkge1xuICAgICAgRmlyc3RDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgbnVtYmVyOiBwYXJzZUludChyb3cubnVtYmVyKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIEZpcnN0Q29uZmlncyBsb2FkZWQ6XCIsIEZpcnN0Q29uZmlncyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGxhbnRDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJwbGFudHMuY3N2XCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgUGxhbnRUeXBlO1xuXG4gICAgaWYgKFBsYW50Q29uZmlnc1t0eXBlXSkge1xuICAgICAgUGxhbnRDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgaGFydmVzdEludGVydmFsOiBwYXJzZUZsb2F0KHJvdy5oYXJ2ZXN0SW50ZXJ2YWwpLFxuICAgICAgICBtYXhIYXJ2ZXN0OiBwYXJzZUludChyb3cubWF4SGFydmVzdCksXG4gICAgICAgIGJ1eVByaWNlOiBwYXJzZUludChyb3cuYnV5UHJpY2UpLFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiW0NTVl0gUGxhbnRDb25maWdzIGxvYWRlZDpcIiwgUGxhbnRDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJjYXR0bGVzLmNzdlwiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIENhdHRsZVR5cGU7XG5cbiAgICBpZiAoQ2F0dGxlQ29uZmlnc1t0eXBlXSkge1xuICAgICAgQ2F0dGxlQ29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIGhhcnZlc3RJbnRlcnZhbDogcGFyc2VGbG9hdChyb3cuaGFydmVzdEludGVydmFsKSxcbiAgICAgICAgbWF4SGFydmVzdDogcGFyc2VJbnQocm93Lm1heEhhcnZlc3QpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LnNlbGxQcmljZSksXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbQ1NWXSBDYXR0bGVDb25maWdzIGxvYWRlZDpcIiwgQ2F0dGxlQ29uZmlncyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkWWllbGRDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJZaWVsZHMuY3N2XCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgWWllbGRUeXBlO1xuXG4gICAgaWYgKFlpZWxkQ29uZmlnc1t0eXBlXSkge1xuICAgICAgWWllbGRDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgc2VsbFByaWNlOiBwYXJzZUludChyb3cuc2VsbFByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIFlpZWxkQ29uZmlncyBsb2FkZWQ6XCIsIFlpZWxkQ29uZmlncyk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFdvcmtlckNvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcIldvcmtlcnMuY3N2XCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgV29ya2VyVHlwZTtcblxuICAgIGlmIChXb3JrZXJDb25maWdzW3R5cGVdKSB7XG4gICAgICBXb3JrZXJDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgd29ya2luZ0ludGVydmFsOiBwYXJzZUZsb2F0KHJvdy53b3JraW5nSW50ZXJ2YWwpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIFdvcmtlckNvbmZpZ3MgbG9hZGVkOlwiLCBXb3JrZXJDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IENTVkxvYWRlci5sb2FkKFwiTWFjaGluZXMuY3N2XCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgTWFjaGluZVR5cGU7XG5cbiAgICBpZiAoTWFjaGluZUNvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIE1hY2hpbmVDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgbGV2ZWw6IHBhcnNlSW50KHJvdy5sZXZlbCksXG4gICAgICAgIHN1cHBvcnQ6IHBhcnNlRmxvYXQocm93LnN1cHBvcnQpLFxuICAgICAgICB1cGdyYWRlUHJpY2U6IHBhcnNlSW50KHJvdy51cGdyYWRlUHJpY2UpLFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiW0NTVl0gTWFjaGluZUNvbmZpZ3MgbG9hZGVkOlwiLCBNYWNoaW5lQ29uZmlncyk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZExhbmRDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJMYW5kcy5jc3ZcIik7XG5cbiAgcmVjb3Jkcy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBjb25zdCB0eXBlID0gcm93Lm5hbWUudG9Mb3dlckNhc2UoKSBhcyBMYW5kVHlwZTtcblxuICAgIGlmIChMYW5kQ29uZmlnc1t0eXBlXSkge1xuICAgICAgTGFuZENvbmZpZ3NbdHlwZV0gPSB7XG4gICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICBtaXNzaW9uTnVtYmVyOiBwYXJzZUludChyb3cubWlzc2lvbk51bWJlciksXG4gICAgICAgIGVtcHR5SW50ZXJ2YWw6IHBhcnNlRmxvYXQocm93LmVtcHR5SW50ZXJ2YWwpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIExhbmRDb25maWdzIGxvYWRlZDpcIiwgTGFuZENvbmZpZ3MpO1xufVxuIl19