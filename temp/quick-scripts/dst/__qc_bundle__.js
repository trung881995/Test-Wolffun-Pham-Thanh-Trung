
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/core/mvc/BaseController');
require('./assets/core/mvc/BaseModel');
require('./assets/core/mvc/BaseView');
require('./assets/enums/CattleType');
require('./assets/enums/LandType');
require('./assets/enums/MachineType');
require('./assets/enums/PlantType');
require('./assets/enums/Type');
require('./assets/enums/WorkerType');
require('./assets/enums/YieldType');
require('./assets/interfaces/IAsset');
require('./assets/interfaces/ILand');
require('./assets/interfaces/IMachine');
require('./assets/interfaces/IStorage');
require('./assets/interfaces/IStore');
require('./assets/interfaces/IWorker');
require('./assets/interfaces/IYield');
require('./assets/scripts/Manager/ConfigManager');
require('./assets/scripts/Manager/UIManager');
require('./assets/scripts/Store/Store');
require('./assets/scripts/controllers/GameController');
require('./assets/scripts/data/GameConfig');
require('./assets/scripts/models/CattleModel');
require('./assets/scripts/models/GameModel');
require('./assets/scripts/models/LandModel');
require('./assets/scripts/models/MachineModel');
require('./assets/scripts/models/PlantModel');
require('./assets/scripts/models/WorkerModel');
require('./assets/scripts/models/YieldModel');
require('./assets/scripts/storage/Storage');
require('./assets/scripts/ui/LandUI');
require('./assets/scripts/ui/StorageUI');
require('./assets/scripts/ui/StoreUI');
require('./assets/scripts/utils/CSVLoader');
require('./assets/scripts/views/GameView');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/MachineType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4755cqesIxOiJBqXUhejd16', 'MachineType');
// enums/MachineType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineType = void 0;
var MachineType;
(function (MachineType) {
    MachineType["China"] = "china";
    MachineType["Japan"] = "japan";
    MachineType["America"] = "america";
    MachineType["Vietnam"] = "vietnam";
})(MachineType = exports.MachineType || (exports.MachineType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9NYWNoaW5lVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsOEJBQWUsQ0FBQTtJQUNmLDhCQUFlLENBQUE7SUFDZixrQ0FBbUIsQ0FBQTtJQUNuQixrQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFLdEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBNYWNoaW5lVHlwZSB7XG4gIENoaW5hID0gXCJjaGluYVwiLFxuICBKYXBhbiA9IFwiamFwYW5cIixcbiAgQW1lcmljYSA9IFwiYW1lcmljYVwiLFxuICBWaWV0bmFtID0gXCJ2aWV0bmFtXCIsXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/core/mvc/BaseView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b94b/tNepBi7ZnaO4Z2fQq', 'BaseView');
// core/mvc/BaseView.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseView = void 0;
var BaseView = /** @class */ (function () {
    function BaseView() {
    }
    BaseView.prototype.setController = function (controller) {
        this.controller = controller;
    };
    return BaseView;
}());
exports.BaseView = BaseView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3JlL212Yy9CYXNlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQUxDLGdDQUFhLEdBQWIsVUFBYyxVQUF1QjtRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBR0gsZUFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUnFCLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VWaWV3PFRDb250cm9sbGVyPiB7XG4gIHByb3RlY3RlZCBjb250cm9sbGVyITogVENvbnRyb2xsZXI7XG5cbiAgc2V0Q29udHJvbGxlcihjb250cm9sbGVyOiBUQ29udHJvbGxlcik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIH1cblxuICBhYnN0cmFjdCB1cGRhdGVWaWV3KCk6IHZvaWQ7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/ConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af14aYJ+fhBKryVQNCQZr2w', 'ConfigManager');
// scripts/Manager/ConfigManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigManager = void 0;
var ConfigManager = /** @class */ (function () {
    function ConfigManager() {
        this.firstConfigs = new Map();
        this.yieldConfigs = new Map();
        this.cattleConfigs = new Map();
        this.plantConfigs = new Map();
        this.workerConfigs = new Map();
        this.machineConfigs = new Map();
        this.landConfigs = new Map();
    }
    Object.defineProperty(ConfigManager, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new ConfigManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    ConfigManager.prototype.initFirstConfigs = function (configs) {
        var _this = this;
        this.firstConfigs.clear();
        configs.forEach(function (config) {
            _this.firstConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getFirstConfigByName = function (name) {
        return this.firstConfigs.get(name);
    };
    ConfigManager.prototype.getAllTomatoConfigs = function () {
        return Array.from(this.firstConfigs.values());
    };
    ConfigManager.prototype.initYieldConfigs = function (configs) {
        var _this = this;
        this.yieldConfigs.clear();
        configs.forEach(function (config) {
            _this.yieldConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getYieldConfigByName = function (name) {
        return this.yieldConfigs.get(name);
    };
    ConfigManager.prototype.getAllYieldConfigs = function () {
        return Array.from(this.yieldConfigs.values());
    };
    ConfigManager.prototype.initCattleConfigs = function (configs) {
        var _this = this;
        this.cattleConfigs.clear();
        configs.forEach(function (config) {
            _this.cattleConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getCattleConfigByName = function (name) {
        return this.cattleConfigs.get(name);
    };
    ConfigManager.prototype.getAllCattleConfigs = function () {
        return Array.from(this.cattleConfigs.values());
    };
    ConfigManager.prototype.initPlantConfigs = function (configs) {
        var _this = this;
        this.plantConfigs.clear();
        configs.forEach(function (config) {
            _this.plantConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getPlantConfigByName = function (name) {
        return this.plantConfigs.get(name);
    };
    ConfigManager.prototype.getAllPlantConfigs = function () {
        return Array.from(this.plantConfigs.values());
    };
    ConfigManager.prototype.initWorkerConfigs = function (configs) {
        var _this = this;
        this.workerConfigs.clear();
        configs.forEach(function (config) {
            _this.workerConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getWorkerConfigByName = function (name) {
        return this.workerConfigs.get(name);
    };
    ConfigManager.prototype.getAllWorkerConfigs = function () {
        return Array.from(this.workerConfigs.values());
    };
    ConfigManager.prototype.initMachineConfigs = function (configs) {
        var _this = this;
        this.machineConfigs.clear();
        configs.forEach(function (config) {
            _this.machineConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getMachineConfigByName = function (name) {
        return this.machineConfigs.get(name);
    };
    ConfigManager.prototype.getAllMachineConfigs = function () {
        return Array.from(this.machineConfigs.values());
    };
    ConfigManager.prototype.initLandConfigs = function (configs) {
        var _this = this;
        this.landConfigs.clear();
        configs.forEach(function (config) {
            _this.landConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getLandConfigByName = function (name) {
        return this.landConfigs.get(name);
    };
    ConfigManager.prototype.getAllLandConfigs = function () {
        return Array.from(this.landConfigs.values());
    };
    return ConfigManager;
}());
exports.ConfigManager = ConfigManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvQ29uZmlnTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtJQUFBO1FBU1UsaUJBQVksR0FBNkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxpQkFBWSxHQUE2QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25ELGtCQUFhLEdBQThCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDckQsaUJBQVksR0FBNkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxrQkFBYSxHQUE4QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JELG1CQUFjLEdBQStCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkQsZ0JBQVcsR0FBNEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQTBHM0QsQ0FBQztJQXZIQyxzQkFBa0IseUJBQVE7YUFBMUI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO2FBQ3RDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBVU0sd0NBQWdCLEdBQXZCLFVBQXdCLE9BQXNCO1FBQTlDLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRDQUFvQixHQUEzQixVQUE0QixJQUFZO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLDJDQUFtQixHQUExQjtRQUNFLE9BQU8s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QUssRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3JCLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sOENBQXNCLEdBQTdCLFVBQThCLElBQVk7UUFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sNENBQW9CLEdBQTNCO1FBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sdUNBQWUsR0FBdEIsVUFBdUIsT0FBcUI7UUFBNUMsaUJBS0M7UUFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sMkNBQW1CLEdBQTFCLFVBQTJCLElBQVk7UUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0seUNBQWlCLEdBQXhCO1FBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXpIQSxBQXlIQyxJQUFBO0FBekhZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRmlyc3RDb25maWcsXG4gIFlpZWxkQ29uZmlnLFxuICBDYXR0bGVDb25maWcsXG4gIFBsYW50Q29uZmlnLFxuICBXb3JrZXJDb25maWcsXG4gIE1hY2hpbmVDb25maWcsXG4gIExhbmRDb25maWcsXG59IGZyb20gXCIuLi8uLi9zY3JpcHRzL2RhdGEvR2FtZUNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnTWFuYWdlciB7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ29uZmlnTWFuYWdlcjtcbiAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQ29uZmlnTWFuYWdlciB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ29uZmlnTWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIGZpcnN0Q29uZmlnczogTWFwPHN0cmluZywgRmlyc3RDb25maWc+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHlpZWxkQ29uZmlnczogTWFwPHN0cmluZywgWWllbGRDb25maWc+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGNhdHRsZUNvbmZpZ3M6IE1hcDxzdHJpbmcsIENhdHRsZUNvbmZpZz4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgcGxhbnRDb25maWdzOiBNYXA8c3RyaW5nLCBQbGFudENvbmZpZz4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgd29ya2VyQ29uZmlnczogTWFwPHN0cmluZywgV29ya2VyQ29uZmlnPiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBtYWNoaW5lQ29uZmlnczogTWFwPHN0cmluZywgTWFjaGluZUNvbmZpZz4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgbGFuZENvbmZpZ3M6IE1hcDxzdHJpbmcsIExhbmRDb25maWc+ID0gbmV3IE1hcCgpO1xuXG4gIHB1YmxpYyBpbml0Rmlyc3RDb25maWdzKGNvbmZpZ3M6IEZpcnN0Q29uZmlnW10pIHtcbiAgICB0aGlzLmZpcnN0Q29uZmlncy5jbGVhcigpO1xuICAgIGNvbmZpZ3MuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmZpcnN0Q29uZmlncy5zZXQoY29uZmlnLm5hbWUsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rmlyc3RDb25maWdCeU5hbWUobmFtZTogc3RyaW5nKTogRmlyc3RDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmZpcnN0Q29uZmlncy5nZXQobmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsVG9tYXRvQ29uZmlncygpOiBGaXJzdENvbmZpZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpcnN0Q29uZmlncy52YWx1ZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdFlpZWxkQ29uZmlncyhjb25maWdzOiBZaWVsZENvbmZpZ1tdKSB7XG4gICAgdGhpcy55aWVsZENvbmZpZ3MuY2xlYXIoKTtcbiAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy55aWVsZENvbmZpZ3Muc2V0KGNvbmZpZy5uYW1lLCBjb25maWcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFlpZWxkQ29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IFlpZWxkQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy55aWVsZENvbmZpZ3MuZ2V0KG5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbFlpZWxkQ29uZmlncygpOiBZaWVsZENvbmZpZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnlpZWxkQ29uZmlncy52YWx1ZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdENhdHRsZUNvbmZpZ3MoY29uZmlnczogQ2F0dGxlQ29uZmlnW10pIHtcbiAgICB0aGlzLmNhdHRsZUNvbmZpZ3MuY2xlYXIoKTtcbiAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5jYXR0bGVDb25maWdzLnNldChjb25maWcubmFtZSwgY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXR0bGVDb25maWdCeU5hbWUobmFtZTogc3RyaW5nKTogQ2F0dGxlQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5jYXR0bGVDb25maWdzLmdldChuYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxDYXR0bGVDb25maWdzKCk6IENhdHRsZUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNhdHRsZUNvbmZpZ3MudmFsdWVzKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRQbGFudENvbmZpZ3MoY29uZmlnczogUGxhbnRDb25maWdbXSkge1xuICAgIHRoaXMucGxhbnRDb25maWdzLmNsZWFyKCk7XG4gICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMucGxhbnRDb25maWdzLnNldChjb25maWcubmFtZSwgY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQbGFudENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBQbGFudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucGxhbnRDb25maWdzLmdldChuYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxQbGFudENvbmZpZ3MoKTogUGxhbnRDb25maWdbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wbGFudENvbmZpZ3MudmFsdWVzKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRXb3JrZXJDb25maWdzKGNvbmZpZ3M6IFdvcmtlckNvbmZpZ1tdKSB7XG4gICAgdGhpcy53b3JrZXJDb25maWdzLmNsZWFyKCk7XG4gICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMud29ya2VyQ29uZmlncy5zZXQoY29uZmlnLm5hbWUsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0V29ya2VyQ29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IFdvcmtlckNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMud29ya2VyQ29uZmlncy5nZXQobmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsV29ya2VyQ29uZmlncygpOiBXb3JrZXJDb25maWdbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy53b3JrZXJDb25maWdzLnZhbHVlcygpKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0TWFjaGluZUNvbmZpZ3MoY29uZmlnczogTWFjaGluZUNvbmZpZ1tdKSB7XG4gICAgdGhpcy5tYWNoaW5lQ29uZmlncy5jbGVhcigpO1xuICAgIGNvbmZpZ3MuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLm1hY2hpbmVDb25maWdzLnNldChjb25maWcubmFtZSwgY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYWNoaW5lQ29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IE1hY2hpbmVDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm1hY2hpbmVDb25maWdzLmdldChuYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxNYWNoaW5lQ29uZmlncygpOiBNYWNoaW5lQ29uZmlnW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubWFjaGluZUNvbmZpZ3MudmFsdWVzKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRMYW5kQ29uZmlncyhjb25maWdzOiBMYW5kQ29uZmlnW10pIHtcbiAgICB0aGlzLmxhbmRDb25maWdzLmNsZWFyKCk7XG4gICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMubGFuZENvbmZpZ3Muc2V0KGNvbmZpZy5uYW1lLCBjb25maWcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldExhbmRDb25maWdCeU5hbWUobmFtZTogc3RyaW5nKTogTGFuZENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubGFuZENvbmZpZ3MuZ2V0KG5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbExhbmRDb25maWdzKCk6IExhbmRDb25maWdbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5sYW5kQ29uZmlncy52YWx1ZXMoKSk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/ILand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47d22v8hlJPp5ylOdm0VHUC', 'ILand');
// interfaces/ILand.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lMYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vc2NyaXB0cy91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTGFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIG1pc3Npb25OdW1iZXI6IG51bWJlcjtcbiAgY29udGFpbkludGVydmFsOiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG4gIGNvbnRhaW5ZaWVsZDogbnVtYmVyO1xuICBjdXJyZW50QXNzZXQ6IGFueTtcbiAgY3JvcDogbnVtYmVyO1xuICB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbjtcbiAgd29ya2luZ1RpbWU6IG51bWJlcjtcbiAgaXNSZWFkeVRvV29yazogYm9vbGVhbjtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Store/Store.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51926dGLeJMYZBAdbGvB9Sq', 'Store');
// scripts/Store/Store.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store(_storage) {
        this.storage = _storage;
    }
    Store.prototype.buyTomatoSeed = function () {
        this.storage.addGold(-this.storage.tomatoSeed.buyPrice);
        this.storage.addTomatoSeed();
    };
    Store.prototype.buyBlueberrySeed = function () {
        this.storage.addGold(-this.storage.blueberrySeed.buyPrice);
        this.storage.addBlueberrySeed();
    };
    Store.prototype.buyStrawberrySeed = function () {
        this.storage.addGold(-this.storage.strawberrySeed.buyPrice);
        this.storage.addStrawberrySeed();
    };
    Store.prototype.buyMilkCow = function () {
        this.storage.addGold(-this.storage.milkCow.buyPrice);
        this.storage.addMilkCow();
    };
    Store.prototype.buyCow = function () {
        this.storage.addGold(-this.storage.cow.buyPrice);
        this.storage.addCow();
    };
    Store.prototype.buyWorker = function () {
        this.storage.addGold(-this.storage.worker.buyPrice);
        this.storage.addWorker();
    };
    Store.prototype.upgradeMachine = function () {
        this.storage.addGold(-this.storage.machine.upgradePrice);
        this.storage.upgradeMachine();
    };
    Store.prototype.buyLand = function () {
        this.storage.addGold(-this.storage.land.buyPrice);
        this.storage.addLand();
    };
    return Store;
}());
exports.Store = Store;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0b3JlL1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBRUUsZUFBWSxRQUFpQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNkJBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsZ0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNELGlDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCwwQkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCx5QkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCw4QkFBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCx1QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtBQXJDWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTdG9yZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lTdG9yZVwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIFN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgc3RvcmFnZTogU3RvcmFnZTtcbiAgY29uc3RydWN0b3IoX3N0b3JhZ2U6IFN0b3JhZ2UpIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBfc3RvcmFnZTtcbiAgfVxuICBidXlUb21hdG9TZWVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5hZGRHb2xkKC10aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSk7XG4gICAgdGhpcy5zdG9yYWdlLmFkZFRvbWF0b1NlZWQoKTtcbiAgfVxuICBidXlCbHVlYmVycnlTZWVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5hZGRHb2xkKC10aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5idXlQcmljZSk7XG4gICAgdGhpcy5zdG9yYWdlLmFkZEJsdWViZXJyeVNlZWQoKTtcbiAgfVxuICBidXlTdHJhd2JlcnJ5U2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UuYWRkR29sZCgtdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmJ1eVByaWNlKTtcbiAgICB0aGlzLnN0b3JhZ2UuYWRkU3RyYXdiZXJyeVNlZWQoKTtcbiAgfVxuICBidXlNaWxrQ293KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5hZGRHb2xkKC10aGlzLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZSk7XG4gICAgdGhpcy5zdG9yYWdlLmFkZE1pbGtDb3coKTtcbiAgfVxuICBidXlDb3coKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmFkZEdvbGQoLXRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UpO1xuICAgIHRoaXMuc3RvcmFnZS5hZGRDb3coKTtcbiAgfVxuICBidXlXb3JrZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmFkZEdvbGQoLXRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UpO1xuICAgIHRoaXMuc3RvcmFnZS5hZGRXb3JrZXIoKTtcbiAgfVxuICB1cGdyYWRlTWFjaGluZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UuYWRkR29sZCgtdGhpcy5zdG9yYWdlLm1hY2hpbmUudXBncmFkZVByaWNlKTtcbiAgICB0aGlzLnN0b3JhZ2UudXBncmFkZU1hY2hpbmUoKTtcbiAgfVxuICBidXlMYW5kKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5hZGRHb2xkKC10aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSk7XG4gICAgdGhpcy5zdG9yYWdlLmFkZExhbmQoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controllers/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7a15UX2thEpocCqosGZMBo', 'GameController');
// scripts/controllers/GameController.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var BaseController_1 = require("../../core/mvc/BaseController");
var GameView_1 = require("../views/GameView");
var GameModel_1 = require("../models/GameModel");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super.call(this) || this;
        _this.model = new GameModel_1.GameModel();
        _this.view = new GameView_1.GameView(_this);
        return _this;
    }
    GameController.prototype.update = function (dt) {
        throw new Error("Method not implemented.");
    };
    GameController.prototype.setupUI = function () { };
    return GameController;
}(BaseController_1.BaseController));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFDL0QsOENBQTZDO0FBQzdDLGlEQUFnRDtBQUVoRDtJQUFvQyxrQ0FBbUM7SUFHckU7UUFBQSxZQUNFLGlCQUFPLFNBSVI7UUFIQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRTdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUNqQyxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNNLGdDQUFPLEdBQWQsY0FBd0IsQ0FBQztJQUMzQixxQkFBQztBQUFELENBZEEsQUFjQyxDQWRtQywrQkFBYyxHQWNqRDtBQWRZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vY29yZS9tdmMvQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL0dhbWVWaWV3XCI7XG5pbXBvcnQgeyBHYW1lTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL0dhbWVNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlcjxHYW1lTW9kZWwsIEdhbWVWaWV3PiB7XG4gIG1vZGVsOiBHYW1lTW9kZWw7XG4gIHZpZXc6IEdhbWVWaWV3O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBuZXcgR2FtZU1vZGVsKCk7XG5cbiAgICB0aGlzLnZpZXcgPSBuZXcgR2FtZVZpZXcodGhpcyk7XG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBzZXR1cFVJKCk6IHZvaWQge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
    _a[PlantType_1.PlantType.tomatoSeed] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _a[PlantType_1.PlantType.blueberrySeed] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _a[PlantType_1.PlantType.strawberrySeed] = {
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
    _c[YieldType_1.YieldType.Strawberry] = {
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
        containInterval: 0,
        buyPrice: 0,
    },
    _d[LandType_1.LandType.Green] = {
        name: "",
        missionNumber: 0,
        containInterval: 0,
        buyPrice: 0,
    },
    _d[LandType_1.LandType.Brown] = {
        name: "",
        missionNumber: 0,
        containInterval: 0,
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
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("first")];
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
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("plants")];
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
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("cattles")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.CattleConfigs[type]) {
                            exports.CattleConfigs[type] = {
                                name: row.name,
                                harvestInterval: parseFloat(row.harvestInterval),
                                maxHarvest: parseInt(row.maxHarvest),
                                buyPrice: parseInt(row.buyPrice),
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
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("yields")];
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
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("workers")];
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
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("machines")];
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
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("lands")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.LandConfigs[type]) {
                            exports.LandConfigs[type] = {
                                name: row.name,
                                missionNumber: parseInt(row.missionNumber),
                                containInterval: parseFloat(row.emptyInterval),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvR2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHFEQUFvRDtBQUNwRCxtREFBa0Q7QUFDbEQsaURBQWdEO0FBQ2hELHFEQUFvRDtBQUNwRCx1REFBc0Q7QUFDdEQseUNBQXdDO0FBQ3hDLGdEQUErQztBQXVDbEMsUUFBQSxZQUFZO0lBQ3ZCLEdBQUMscUJBQVMsQ0FBQyxVQUFVLElBQUc7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHFCQUFTLENBQUMsYUFBYSxJQUFHO1FBQ3pCLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBQ0QsR0FBQyxxQkFBUyxDQUFDLGNBQWMsSUFBRztRQUMxQixJQUFJLEVBQUUsRUFBRTtRQUNSLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLENBQUM7S0FDWjtRQUNEO0FBQ1csUUFBQSxhQUFhO0lBQ3hCLEdBQUMsdUJBQVUsQ0FBQyxPQUFPLElBQUc7UUFDcEIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHVCQUFVLENBQUMsR0FBRyxJQUFHO1FBQ2hCLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO1FBQ0Q7QUFDVyxRQUFBLFlBQVk7SUFDdkIsR0FB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QUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBYyxDQUFDO3dCQUVoRCxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3JCLG1CQUFXLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0NBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQ0FDZCxhQUFhLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0NBQzFDLGVBQWUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztnQ0FDOUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOzZCQUNqQyxDQUFDO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsbUJBQVcsQ0FBQyxDQUFDOzs7OztDQUN2RDtBQWpCRCxzREFpQkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFlpZWxkVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9ZaWVsZFR5cGVcIjtcbmltcG9ydCB7IExhbmRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0xhbmRUeXBlXCI7XG5pbXBvcnQgeyBXb3JrZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1dvcmtlclR5cGVcIjtcbmltcG9ydCB7IE1hY2hpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL01hY2hpbmVUeXBlXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1R5cGVcIjtcbmltcG9ydCB7IENTVkxvYWRlciB9IGZyb20gXCIuLi91dGlscy9DU1ZMb2FkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGaXJzdENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFlpZWxkQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0dGxlQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBQbGFudENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbWlzc2lvbk51bWJlcjogbnVtYmVyO1xuICBjb250YWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV29ya2VyQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB3b3JraW5nSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaGluZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgc3VwcG9ydDogbnVtYmVyO1xuICB1cGdyYWRlUHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBQbGFudENvbmZpZ3M6IFJlY29yZDxQbGFudFR5cGUsIFBsYW50Q29uZmlnPiA9IHtcbiAgW1BsYW50VHlwZS50b21hdG9TZWVkXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtQbGFudFR5cGUuYmx1ZWJlcnJ5U2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGhhcnZlc3RJbnRlcnZhbDogMCxcbiAgICBtYXhIYXJ2ZXN0OiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbUGxhbnRUeXBlLnN0cmF3YmVycnlTZWVkXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IENhdHRsZUNvbmZpZ3M6IFJlY29yZDxDYXR0bGVUeXBlLCBDYXR0bGVDb25maWc+ID0ge1xuICBbQ2F0dGxlVHlwZS5NaWxrY293XToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtDYXR0bGVUeXBlLkNvd106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGhhcnZlc3RJbnRlcnZhbDogMCxcbiAgICBtYXhIYXJ2ZXN0OiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBZaWVsZENvbmZpZ3M6IFJlY29yZDxZaWVsZFR5cGUsIFlpZWxkQ29uZmlnPiA9IHtcbiAgW1lpZWxkVHlwZS5Ub21hdG9dOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBzZWxsUHJpY2U6IDAsXG4gIH0sXG4gIFtZaWVsZFR5cGUuQmx1ZWJlcnJ5XToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgc2VsbFByaWNlOiAwLFxuICB9LFxuICBbWWllbGRUeXBlLlN0cmF3YmVycnldOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBzZWxsUHJpY2U6IDAsXG4gIH0sXG4gIFtZaWVsZFR5cGUuTWlsa106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHNlbGxQcmljZTogMCxcbiAgfSxcbiAgW1lpZWxkVHlwZS5CZWVmXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgc2VsbFByaWNlOiAwLFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBMYW5kQ29uZmlnczogUmVjb3JkPExhbmRUeXBlLCBMYW5kQ29uZmlnPiA9IHtcbiAgW0xhbmRUeXBlLlJlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG1pc3Npb25OdW1iZXI6IDAsXG4gICAgY29udGFpbkludGVydmFsOiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbTGFuZFR5cGUuR3JlZW5dOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBtaXNzaW9uTnVtYmVyOiAwLFxuICAgIGNvbnRhaW5JbnRlcnZhbDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW0xhbmRUeXBlLkJyb3duXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbWlzc2lvbk51bWJlcjogMCxcbiAgICBjb250YWluSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgV29ya2VyQ29uZmlnczogUmVjb3JkPFdvcmtlclR5cGUsIFdvcmtlckNvbmZpZz4gPSB7XG4gIFtXb3JrZXJUeXBlLkZyZXNoZXJdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICB3b3JraW5nSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtXb3JrZXJUeXBlLkp1bmlvcl06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHdvcmtpbmdJbnRlcnZhbDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW1dvcmtlclR5cGUuTWlkZGxlXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgd29ya2luZ0ludGVydmFsOiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbV29ya2VyVHlwZS5TZW5pb3JdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICB3b3JraW5nSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IE1hY2hpbmVDb25maWdzOiBSZWNvcmQ8TWFjaGluZVR5cGUsIE1hY2hpbmVDb25maWc+ID0ge1xuICBbTWFjaGluZVR5cGUuQ2hpbmFdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBsZXZlbDogMCxcbiAgICBzdXBwb3J0OiAwLFxuICAgIHVwZ3JhZGVQcmljZTogMCxcbiAgfSxcbiAgW01hY2hpbmVUeXBlLkphcGFuXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG4gIFtNYWNoaW5lVHlwZS5BbWVyaWNhXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG4gIFtNYWNoaW5lVHlwZS5WaWV0bmFtXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IEZpcnN0Q29uZmlnczogUmVjb3JkPFR5cGUsIEZpcnN0Q29uZmlnPiA9IHtcbiAgW1R5cGUuTGFuZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuVG9tYXRvc2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuQmx1ZWJlcnJ5c2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuTWlsa2Nvd106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuV29ya2VyXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICB9LFxuICBbVHlwZS5NYWNoaW5lXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICB9LFxufTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRmlyc3RDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJmaXJzdFwiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFR5cGU7XG5cbiAgICBpZiAoRmlyc3RDb25maWdzW3R5cGVdKSB7XG4gICAgICBGaXJzdENvbmZpZ3NbdHlwZV0gPSB7XG4gICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICBudW1iZXI6IHBhcnNlSW50KHJvdy5udW1iZXIpLFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiW0NTVl0gRmlyc3RDb25maWdzIGxvYWRlZDpcIiwgRmlyc3RDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQbGFudENvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcInBsYW50c1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFBsYW50VHlwZTtcblxuICAgIGlmIChQbGFudENvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIFBsYW50Q29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIGhhcnZlc3RJbnRlcnZhbDogcGFyc2VGbG9hdChyb3cuaGFydmVzdEludGVydmFsKSxcbiAgICAgICAgbWF4SGFydmVzdDogcGFyc2VJbnQocm93Lm1heEhhcnZlc3QpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIFBsYW50Q29uZmlncyBsb2FkZWQ6XCIsIFBsYW50Q29uZmlncyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ2F0dGxlQ29uZmlnRnJvbUNTVigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IENTVkxvYWRlci5sb2FkKFwiY2F0dGxlc1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIENhdHRsZVR5cGU7XG5cbiAgICBpZiAoQ2F0dGxlQ29uZmlnc1t0eXBlXSkge1xuICAgICAgQ2F0dGxlQ29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIGhhcnZlc3RJbnRlcnZhbDogcGFyc2VGbG9hdChyb3cuaGFydmVzdEludGVydmFsKSxcbiAgICAgICAgbWF4SGFydmVzdDogcGFyc2VJbnQocm93Lm1heEhhcnZlc3QpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIENhdHRsZUNvbmZpZ3MgbG9hZGVkOlwiLCBDYXR0bGVDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcInlpZWxkc1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFlpZWxkVHlwZTtcblxuICAgIGlmIChZaWVsZENvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIFlpZWxkQ29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIHNlbGxQcmljZTogcGFyc2VJbnQocm93LnNlbGxQcmljZSksXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbQ1NWXSBZaWVsZENvbmZpZ3MgbG9hZGVkOlwiLCBZaWVsZENvbmZpZ3MpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRXb3JrZXJDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJ3b3JrZXJzXCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgV29ya2VyVHlwZTtcblxuICAgIGlmIChXb3JrZXJDb25maWdzW3R5cGVdKSB7XG4gICAgICBXb3JrZXJDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgd29ya2luZ0ludGVydmFsOiBwYXJzZUZsb2F0KHJvdy53b3JraW5nSW50ZXJ2YWwpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIFdvcmtlckNvbmZpZ3MgbG9hZGVkOlwiLCBXb3JrZXJDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IENTVkxvYWRlci5sb2FkKFwibWFjaGluZXNcIik7XG5cbiAgcmVjb3Jkcy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBjb25zdCB0eXBlID0gcm93Lm5hbWUudG9Mb3dlckNhc2UoKSBhcyBNYWNoaW5lVHlwZTtcblxuICAgIGlmIChNYWNoaW5lQ29uZmlnc1t0eXBlXSkge1xuICAgICAgTWFjaGluZUNvbmZpZ3NbdHlwZV0gPSB7XG4gICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICBsZXZlbDogcGFyc2VJbnQocm93LmxldmVsKSxcbiAgICAgICAgc3VwcG9ydDogcGFyc2VGbG9hdChyb3cuc3VwcG9ydCksXG4gICAgICAgIHVwZ3JhZGVQcmljZTogcGFyc2VJbnQocm93LnVwZ3JhZGVQcmljZSksXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbQ1NWXSBNYWNoaW5lQ29uZmlncyBsb2FkZWQ6XCIsIE1hY2hpbmVDb25maWdzKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkTGFuZENvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcImxhbmRzXCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgTGFuZFR5cGU7XG5cbiAgICBpZiAoTGFuZENvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIExhbmRDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgbWlzc2lvbk51bWJlcjogcGFyc2VJbnQocm93Lm1pc3Npb25OdW1iZXIpLFxuICAgICAgICBjb250YWluSW50ZXJ2YWw6IHBhcnNlRmxvYXQocm93LmVtcHR5SW50ZXJ2YWwpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIExhbmRDb25maWdzIGxvYWRlZDpcIiwgTGFuZENvbmZpZ3MpO1xufVxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxxREFBb0Q7QUFDcEQsbURBQWtEO0FBQ2xELHdDQUF1QztBQUN2QyxpREFlNEI7QUFDNUIsOENBZTRCO0FBQzVCLHVDQUErRDtBQUUvRDtJQUErQiw2QkFBUztJQUF4QztRQUFBLHFFQTZMQztRQXRMQyxvQkFBYyxHQUFhLEVBQUUsQ0FBQzs7UUE2SjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF3QkU7SUFDSixDQUFDO0lBNUxDLHdCQUFJLEdBQUo7UUFBSyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztJQUFTLENBQUM7SUFPdkIseUJBQUssR0FBWDs7Ozs0QkFDRSxxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDO3dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO3dCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFFckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7d0JBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksdUJBQWEsRUFBRSxDQUFDO3dCQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLHdCQUFjLEVBQUUsQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksYUFB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MkJBQWMsQ0FBQztJQUN4QixDQUFDO0lBMkJILGdCQUFDO0FBQUQsQ0E3TEEsQUE2TEMsQ0E3TDhCLHFCQUFTLEdBNkx2QztBQTdMWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlTW9kZWxcIjtcbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcbmltcG9ydCB7XG4gIEZpcnN0Q29uZmlncyxcbiAgUGxhbnRDb25maWdzLFxuICBDYXR0bGVDb25maWdzLFxuICBZaWVsZENvbmZpZ3MsXG4gIExhbmRDb25maWdzLFxuICBXb3JrZXJDb25maWdzLFxuICBNYWNoaW5lQ29uZmlncyxcbiAgbG9hZENhdHRsZUNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRMYW5kQ29uZmlnRnJvbUNTVixcbiAgbG9hZE1hY2hpbmVDb25maWdGcm9tQ1NWLFxuICBsb2FkUGxhbnRDb25maWdGcm9tQ1NWLFxuICBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVixcbiAgbG9hZFlpZWxkQ29uZmlnRnJvbUNTVixcbn0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHtcbiAgQmVlZixcbiAgQmx1ZWJlcnJ5LFxuICBCbHVlYmVycnlTZWVkLFxuICBDb3csXG4gIExhbmQsXG4gIE1hY2hpbmUsXG4gIE1pbGssXG4gIE1pbGtDb3csXG4gIFN0b3JhZ2UsXG4gIFN0cmF3YmVycnksXG4gIFN0cmF3YmVycnlTZWVkLFxuICBUb21hdG8sXG4gIFRvbWF0b1NlZWQsXG4gIFdvcmtlcixcbn0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUsIFdvcmtlckFjdGlvbiB9IGZyb20gXCIuLi91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIGluaXQoLi4uYXJnczogYW55W10pOiB2b2lkIHt9XG4gIHN0b3JlOiBTdG9yZTtcbiAgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzdGFydExhbmROdW1iZXI6IG51bWJlcjtcblxuICBxdWV1ZUxhbmRBcnJheTogTGFuZFVJW10gPSBbXTtcbiAgYXN5bmMgc2V0dXAoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4gICAgdGhpcy5zdG9yZSA9IG5ldyBTdG9yZSh0aGlzLnN0b3JhZ2UpO1xuXG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQgPSBuZXcgVG9tYXRvU2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkID0gbmV3IEJsdWViZXJyeVNlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQgPSBuZXcgU3RyYXdiZXJyeVNlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0NvdyA9IG5ldyBNaWxrQ293KCk7XG4gICAgdGhpcy5zdG9yYWdlLmNvdyA9IG5ldyBDb3coKTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyID0gbmV3IFdvcmtlcigpO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lID0gbmV3IE1hY2hpbmUoKTtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG8gPSBuZXcgVG9tYXRvKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeSA9IG5ldyBCbHVlYmVycnkoKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeSA9IG5ldyBTdHJhd2JlcnJ5KCk7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsgPSBuZXcgTWlsaygpO1xuICAgIHRoaXMuc3RvcmFnZS5iZWVmID0gbmV3IEJlZWYoKTtcbiAgfVxuICBhc3luYyBzZXREYXRhKCkge1xuICAgIGF3YWl0IHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnN0b3JhZ2UuZ29sZCA9IDEwMDAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyID0gMDtcbiAgICAvKlxuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm51bWJlciA9IEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IExhbmRDb25maWdzLnJlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gTGFuZENvbmZpZ3MucmVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubWlzc2lvbk51bWJlciA9IExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5JbnRlcnZhbCA9IExhbmRDb25maWdzLnJlZC5jb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jcm9wID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmN1cnJlbnRBc3NldCA9IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmlzUmVhZHlUb1dvcmsgPSB0cnVlO1xuKi9cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IEZpcnN0Q29uZmlncy50b21hdG9zZWVkLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBGaXJzdENvbmZpZ3MubWlsa2Nvdy5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubmFtZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5taWxrY293LmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5jb3cubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm5hbWUgPSBDYXR0bGVDb25maWdzLmNvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UgPSBDYXR0bGVDb25maWdzLmNvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmhhcnZlc3RJbnRlcnZhbCA9IENhdHRsZUNvbmZpZ3MuY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLmNvdy5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBGaXJzdENvbmZpZ3Mud29ya2VyLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm5hbWUgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gV29ya2VyQ29uZmlncy5taWRkbGUud29ya2luZ0ludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5idXlQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyID0gMDtcblxuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLmxldmVsID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEubGV2ZWw7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubmFtZSA9IE1hY2hpbmVDb25maWdzLmNoaW5hLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUuc3VwcG9ydCA9IE1hY2hpbmVDb25maWdzLmNoaW5hLnN1cHBvcnQ7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUudXBncmFkZVByaWNlID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEudXBncmFkZVByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubmFtZSA9IFlpZWxkQ29uZmlncy50b21hdG8ubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy50b21hdG8uc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubmFtZSA9IFlpZWxkQ29uZmlncy5ibHVlYmVycnkubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5LnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5ibHVlYmVycnkuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5uYW1lID0gWWllbGRDb25maWdzLnN0cmF3YmVycnkubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3Muc3RyYXdiZXJyeS5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsay5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLm5hbWUgPSBZaWVsZENvbmZpZ3MubWlsay5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5taWxrLnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5iZWVmLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJlZWYubmFtZSA9IFlpZWxkQ29uZmlncy5iZWVmLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJlZWYuc2VsbFByaWNlID0gWWllbGRDb25maWdzLmJlZWYuc2VsbFByaWNlO1xuICB9XG4gIGFzeW5jIGxvYWREYXRhKCkge1xuICAgIGF3YWl0IGxvYWRGaXJzdENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkQ2F0dGxlQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRQbGFudENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkTGFuZENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkWWllbGRDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFdvcmtlckNvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkTWFjaGluZUNvbmZpZ0Zyb21DU1YoKTtcbiAgfVxuXG4gIG5ld0xhbmQoKSB7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQgPSBuZXcgTGFuZChcbiAgICAgIFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgTGFuZENvbmZpZ3MucmVkLm5hbWUsXG4gICAgICBGaXJzdENvbmZpZ3MubGFuZC5udW1iZXIsXG4gICAgICBMYW5kQ29uZmlncy5yZWQubWlzc2lvbk51bWJlcixcbiAgICAgIExhbmRDb25maWdzLnJlZC5jb250YWluSW50ZXJ2YWwsXG4gICAgICBMYW5kQ29uZmlncy5yZWQuYnV5UHJpY2UsXG4gICAgICB0cnVlLFxuICAgICAgMCxcbiAgICAgIExhbmRTdGF0ZS5FbXB0eSxcbiAgICAgIFBsYW50VHlwZS50b21hdG9TZWVkLFxuICAgICAgQ2F0dGxlVHlwZS5NaWxrY293LFxuICAgICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQsXG4gICAgICAwLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cbiAgcHVibGljIGdldEZpcnN0RGF0YSgpIHtcbiAgICByZXR1cm4gRmlyc3RDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRQbGFudERhdGEoKSB7XG4gICAgcmV0dXJuIFBsYW50Q29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0TGFuZERhdGEoKSB7XG4gICAgcmV0dXJuIExhbmRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRDYXR0bGVEYXRhKCkge1xuICAgIHJldHVybiBDYXR0bGVDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRZaWVsZERhdGEoKSB7XG4gICAgcmV0dXJuIFlpZWxkQ29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0V29ya2VyRGF0YSgpIHtcbiAgICByZXR1cm4gV29ya2VyQ29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0TWFjaGluZURhdGEoKSB7XG4gICAgcmV0dXJuIE1hY2hpbmVDb25maWdzO1xuICB9XG5cbiAgLypwdWJsaWMgZ2V0TGFuZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5sYW5kLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0VG9tYXRvU2VlZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy50b21hdG9zZWVkLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0Qmx1ZWJlcnJ5U2VlZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5ibHVlYmVycnlzZWVkLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0TWlsa0Nvd051bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5taWxrY293Lm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0V29rZXJOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyc3RDb25maWcgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gZmlyc3RDb25maWcud29ya2VyLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0TWFjaGluZU51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5tYWNoaW5lLm51bWJlcjtcbiAgfVxuICAqL1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/storage/Storage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef5e1Tq4MZK4azSZJ7rXMQr', 'Storage');
// scripts/storage/Storage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = exports.Land = exports.Machine = exports.Worker = exports.Beef = exports.Milk = exports.Strawberry = exports.Blueberry = exports.Tomato = exports.Cow = exports.MilkCow = exports.StrawberrySeed = exports.BlueberrySeed = exports.TomatoSeed = void 0;
var LandUI_1 = require("../ui/LandUI");
var UIManager_1 = require("../Manager/UIManager");
var TomatoSeed = /** @class */ (function () {
    function TomatoSeed() {
    }
    TomatoSeed.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return TomatoSeed;
}());
exports.TomatoSeed = TomatoSeed;
var BlueberrySeed = /** @class */ (function () {
    function BlueberrySeed() {
    }
    BlueberrySeed.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return BlueberrySeed;
}());
exports.BlueberrySeed = BlueberrySeed;
var StrawberrySeed = /** @class */ (function () {
    function StrawberrySeed() {
    }
    StrawberrySeed.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return StrawberrySeed;
}());
exports.StrawberrySeed = StrawberrySeed;
var MilkCow = /** @class */ (function () {
    function MilkCow() {
    }
    MilkCow.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return MilkCow;
}());
exports.MilkCow = MilkCow;
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return Cow;
}());
exports.Cow = Cow;
var Tomato = /** @class */ (function () {
    function Tomato() {
    }
    Tomato.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Tomato;
}());
exports.Tomato = Tomato;
var Blueberry = /** @class */ (function () {
    function Blueberry() {
    }
    Blueberry.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Blueberry;
}());
exports.Blueberry = Blueberry;
var Strawberry = /** @class */ (function () {
    function Strawberry() {
    }
    Strawberry.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Strawberry;
}());
exports.Strawberry = Strawberry;
var Milk = /** @class */ (function () {
    function Milk() {
    }
    Milk.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Milk;
}());
exports.Milk = Milk;
var Beef = /** @class */ (function () {
    function Beef() {
    }
    Beef.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Beef;
}());
exports.Beef = Beef;
var Worker = /** @class */ (function () {
    function Worker() {
    }
    Worker.prototype.Work = function (landUI, workerAction) {
        switch (workerAction) {
            case LandUI_1.WorkerAction.Yielding:
                landUI.onClickYieldBtn();
                break;
            case LandUI_1.WorkerAction.TomatoPlant:
                landUI.onClickTomatoSeedBtn();
                console.log("worker CLick tomatoseedbtn");
                break;
            case LandUI_1.WorkerAction.BlueberryPlant:
                landUI.onClickBlueberrySeedBtn();
                break;
            case LandUI_1.WorkerAction.StrawberryPlant:
                landUI.onClickStrawberrySeedBtn();
                break;
            case LandUI_1.WorkerAction.MilkcowLiveStock:
                landUI.onClickMilkCowBtn();
                break;
            case LandUI_1.WorkerAction.CowLiveStock:
                break;
            default:
                break;
        }
    };
    return Worker;
}());
exports.Worker = Worker;
var Machine = /** @class */ (function () {
    function Machine() {
    }
    Machine.prototype.Operate = function () {
        return (this.support * (this.level - 1) + 100) / 100;
    };
    Machine.prototype.upgradePerformace = function () {
        this.support += 10;
    };
    return Machine;
}());
exports.Machine = Machine;
var Land = /** @class */ (function () {
    function Land(workerAction, crop, containYield, name, number, missionNumber, containInterval, buyPrice, isEmpty, time, landState, plantType, cattleType, currentAsset, workingTime, isReadyToWork) {
        if (isEmpty === void 0) { isEmpty = true; }
        if (landState === void 0) { landState = LandUI_1.LandState.Empty; }
        if (plantType === void 0) { plantType = null; }
        if (cattleType === void 0) { cattleType = null; }
        this.isEmpty = true;
        this.landState = LandUI_1.LandState.Empty;
        this.plantType = null;
        this.cattleType = null;
        this.workerAction = workerAction;
        this.crop = crop;
        this.containYield = containYield;
        this.name = name;
        this.number = number;
        this.missionNumber = missionNumber;
        this.containInterval = containInterval;
        this.buyPrice = buyPrice;
        this.isEmpty = isEmpty;
        this.time = time;
        this.landState = landState;
        this.plantType = plantType;
        this.cattleType = cattleType;
        this.currentAsset = currentAsset;
        this.workingTime = workingTime;
        this.isReadyToWork = isReadyToWork;
    }
    Land.prototype.clone = function () {
        return new Land(this.workerAction, this.crop, this.containYield, this.name, this.missionNumber, this.containInterval, this.buyPrice, this.number, this.isEmpty, this.time, this.landState, this.plantType, this.cattleType, this.currentAsset, this.workingTime, this.isReadyToWork);
    };
    return Land;
}());
exports.Land = Land;
var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.prototype.getIdleWorker = function () {
        return this.worker.number - this.workingWorkerNumber;
    };
    Storage.prototype.getWorkingWorker = function () {
        return this.workingWorkerNumber;
    };
    Storage.prototype.sellTomato = function () {
        this.addGold(this.tomato.number * this.tomato.sellPrice);
        this.tomato.number = 0;
    };
    Storage.prototype.sellBlueberry = function () {
        this.addGold(this.blueberry.number * this.blueberry.sellPrice);
        this.blueberry.number = 0;
    };
    Storage.prototype.sellStrawberry = function () {
        this.addGold(this.strawberry.number * this.strawberry.sellPrice);
        this.strawberry.number = 0;
    };
    Storage.prototype.sellMilk = function () {
        this.addGold(this.milk.number * this.milk.sellPrice);
        this.milk.number = 0;
    };
    Storage.prototype.sellBeef = function () {
        this.addGold(this.beef.number * this.beef.sellPrice);
        this.beef.number = 0;
    };
    Storage.prototype.addGold = function (_gold) {
        this.gold += _gold;
    };
    Storage.prototype.getWorkerIdle = function (workingWorkerNumber) {
        var idleWorker = this.worker.number - workingWorkerNumber;
        return idleWorker;
    };
    Storage.prototype.getPerformaceMachine = function () {
        return this.machine.support;
    };
    Storage.prototype.addTomatoSeed = function () {
        this.tomatoSeed.number += 1;
    };
    Storage.prototype.addBlueberrySeed = function () {
        this.blueberrySeed.number += 1;
    };
    Storage.prototype.addStrawberrySeed = function () {
        this.strawberrySeed.number += 10;
    };
    Storage.prototype.addMilkCow = function () {
        this.milkCow.number += 1;
    };
    Storage.prototype.addCow = function () {
        this.cow.number += 1;
    };
    Storage.prototype.addWorker = function () {
        this.worker.number += 1;
    };
    Storage.prototype.upgradeMachine = function () {
        this.machine.level += 1;
        this.machine.upgradePerformace();
        for (var i = 0; i < this.land.number; i++) {
            var maxHarvest = UIManager_1.default.instance.landUIArray[i].land.currentAsset.maxHarvest;
            UIManager_1.default.instance.landUIArray[i].land.crop =
                UIManager_1.default.instance.landUIArray[i].land.currentAsset.maxHarvest;
            UIManager_1.default.instance.landUIArray[i].land.crop +=
                Math.ceil(maxHarvest * this.machine.Operate()) - maxHarvest;
        }
    };
    Storage.prototype.addLand = function () {
        this.land.number += 1;
    };
    Storage.prototype.addTomato = function (tomatoNumber) {
        this.tomato.number += tomatoNumber;
    };
    Storage.prototype.addBlueberry = function (blueberryNumber) {
        this.blueberry.number += blueberryNumber;
    };
    Storage.prototype.addStrawberry = function (strawberryNumber) {
        this.strawberry.number += strawberryNumber;
    };
    Storage.prototype.addMilk = function (milkNumber) {
        this.milk.number += milkNumber;
    };
    Storage.prototype.addBeef = function (beefNumber) {
        this.beef.number += beefNumber;
    };
    Storage.prototype.assignWorker = function (landUi) {
        if (landUi.land.containYield > 0) {
            landUi.land.workerAction = LandUI_1.WorkerAction.Yielding;
            return;
        }
        switch (landUi.land.currentAsset) {
            case UIManager_1.default.instance.gameController.model.storage.tomatoSeed:
                landUi.land.workerAction = LandUI_1.WorkerAction.TomatoPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed:
                landUi.land.workerAction = LandUI_1.WorkerAction.BlueberryPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed:
                landUi.land.workerAction = LandUI_1.WorkerAction.StrawberryPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.milkCow:
                landUi.land.workerAction = LandUI_1.WorkerAction.MilkcowLiveStock;
                break;
            case UIManager_1.default.instance.gameController.model.storage.cow:
                landUi.land.workerAction = LandUI_1.WorkerAction.CowLiveStock;
                break;
            default:
                break;
        }
    };
    return Storage;
}());
exports.Storage = Storage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JhZ2UvU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSx1Q0FBK0Q7QUFDL0Qsa0RBQTZDO0FBRTdDO0lBQUE7SUFTQSxDQUFDO0lBSEMsK0JBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBVXZCO0lBQUE7SUFTQSxDQUFDO0lBSEMsa0NBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHNDQUFhO0FBVTFCO0lBQUE7SUFTQSxDQUFDO0lBSEMsbUNBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdDQUFjO0FBVTNCO0lBQUE7SUFTQSxDQUFDO0lBSEMsNEJBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsY0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMEJBQU87QUFVcEI7SUFBQTtJQVNBLENBQUM7SUFIQyx3QkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxrQkFBRztBQVdoQjtJQUFBO0lBT0EsQ0FBQztJQUhDLDZCQUFZLEdBQVo7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILGFBQUM7QUFBRCxDQVBBLEFBT0Ms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QkFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDekQsTUFBTTtZQUNSLEtBQUssbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQVksQ0FBQyxZQUFZLENBQUM7Z0JBQ3JELE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBbklBLEFBbUlDLElBQUE7QUFuSVksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFBsYW50VHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9QbGFudFR5cGVcIjtcbmltcG9ydCB7IElMYW5kIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSUxhbmRcIjtcbmltcG9ydCB7IElNYWNoaW5lIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSU1hY2hpbmVcIjtcbmltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVN0b3JhZ2VcIjtcbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JV29ya2VyXCI7XG5pbXBvcnQgeyBJWWllbGQgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JWWllbGRcIjtcbmltcG9ydCB7IElBc3NldCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lBc3NldFwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUsIFdvcmtlckFjdGlvbiB9IGZyb20gXCIuLi91aS9MYW5kVUlcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9TZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJsdWViZXJyeVNlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgU3RyYXdiZXJyeVNlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTWlsa0NvdyBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBDb3cgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb21hdG8gaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmx1ZWJlcnJ5IGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN0cmF3YmVycnkgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTWlsayBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCZWVmIGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV29ya2VyIGltcGxlbWVudHMgSVdvcmtlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuICBXb3JrKGxhbmRVSTogTGFuZFVJLCB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbikge1xuICAgIHN3aXRjaCAod29ya2VyQWN0aW9uKSB7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5ZaWVsZGluZzpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tZaWVsZEJ0bigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50OlxuICAgICAgICBsYW5kVUkub25DbGlja1RvbWF0b1NlZWRCdG4oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JrZXIgQ0xpY2sgdG9tYXRvc2VlZGJ0blwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5CbHVlYmVycnlQbGFudDpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uU3RyYXdiZXJyeVBsYW50OlxuICAgICAgICBsYW5kVUkub25DbGlja1N0cmF3YmVycnlTZWVkQnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uTWlsa2Nvd0xpdmVTdG9jazpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tNaWxrQ293QnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uQ293TGl2ZVN0b2NrOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaGluZSBpbXBsZW1lbnRzIElNYWNoaW5lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBzdXBwb3J0OiBudW1iZXI7XG4gIHVwZ3JhZGVQcmljZTogbnVtYmVyO1xuICBPcGVyYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLnN1cHBvcnQgKiAodGhpcy5sZXZlbCAtIDEpICsgMTAwKSAvIDEwMDtcbiAgfVxuICB1cGdyYWRlUGVyZm9ybWFjZSgpIHtcbiAgICB0aGlzLnN1cHBvcnQgKz0gMTA7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBMYW5kIGltcGxlbWVudHMgSUxhbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbixcbiAgICBjcm9wOiBudW1iZXIsXG4gICAgY29udGFpbllpZWxkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIG51bWJlcjogbnVtYmVyLFxuICAgIG1pc3Npb25OdW1iZXI6IG51bWJlcixcbiAgICBjb250YWluSW50ZXJ2YWw6IG51bWJlcixcbiAgICBidXlQcmljZTogbnVtYmVyLFxuXG4gICAgaXNFbXB0eTogYm9vbGVhbiA9IHRydWUsXG4gICAgdGltZTogbnVtYmVyLFxuICAgIGxhbmRTdGF0ZTogTGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5LFxuICAgIHBsYW50VHlwZTogUGxhbnRUeXBlID0gbnVsbCxcbiAgICBjYXR0bGVUeXBlOiBDYXR0bGVUeXBlID0gbnVsbCxcblxuICAgIGN1cnJlbnRBc3NldDogYW55LFxuXG4gICAgd29ya2luZ1RpbWU6IG51bWJlcixcblxuICAgIGlzUmVhZHlUb1dvcms6IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy53b3JrZXJBY3Rpb24gPSB3b3JrZXJBY3Rpb247XG4gICAgdGhpcy5jcm9wID0gY3JvcDtcbiAgICB0aGlzLmNvbnRhaW5ZaWVsZCA9IGNvbnRhaW5ZaWVsZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMubWlzc2lvbk51bWJlciA9IG1pc3Npb25OdW1iZXI7XG4gICAgdGhpcy5jb250YWluSW50ZXJ2YWwgPSBjb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5idXlQcmljZSA9IGJ1eVByaWNlO1xuICAgIHRoaXMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmxhbmRTdGF0ZSA9IGxhbmRTdGF0ZTtcbiAgICB0aGlzLnBsYW50VHlwZSA9IHBsYW50VHlwZTtcbiAgICB0aGlzLmNhdHRsZVR5cGUgPSBjYXR0bGVUeXBlO1xuICAgIHRoaXMuY3VycmVudEFzc2V0ID0gY3VycmVudEFzc2V0O1xuICAgIHRoaXMud29ya2luZ1RpbWUgPSB3b3JraW5nVGltZTtcbiAgICB0aGlzLmlzUmVhZHlUb1dvcmsgPSBpc1JlYWR5VG9Xb3JrO1xuICB9XG5cbiAgd29ya2VyQWN0aW9uOiBXb3JrZXJBY3Rpb247XG4gIGNyb3A6IG51bWJlcjtcbiAgY29udGFpbllpZWxkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIG1pc3Npb25OdW1iZXI6IG51bWJlcjtcbiAgY29udGFpbkludGVydmFsOiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG5cbiAgaXNFbXB0eTogYm9vbGVhbiA9IHRydWU7XG4gIHRpbWU6IG51bWJlcjtcbiAgbGFuZFN0YXRlOiBMYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG4gIHBsYW50VHlwZTogUGxhbnRUeXBlID0gbnVsbDtcbiAgY2F0dGxlVHlwZTogQ2F0dGxlVHlwZSA9IG51bGw7XG5cbiAgY3VycmVudEFzc2V0OiBhbnk7XG5cbiAgd29ya2luZ1RpbWU6IG51bWJlcjtcblxuICBpc1JlYWR5VG9Xb3JrOiBib29sZWFuO1xuXG4gIGNsb25lKCk6IExhbmQge1xuICAgIHJldHVybiBuZXcgTGFuZChcbiAgICAgIHRoaXMud29ya2VyQWN0aW9uLFxuICAgICAgdGhpcy5jcm9wLFxuICAgICAgdGhpcy5jb250YWluWWllbGQsXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLm1pc3Npb25OdW1iZXIsXG4gICAgICB0aGlzLmNvbnRhaW5JbnRlcnZhbCxcbiAgICAgIHRoaXMuYnV5UHJpY2UsXG4gICAgICB0aGlzLm51bWJlcixcbiAgICAgIHRoaXMuaXNFbXB0eSxcbiAgICAgIHRoaXMudGltZSxcbiAgICAgIHRoaXMubGFuZFN0YXRlLFxuICAgICAgdGhpcy5wbGFudFR5cGUsXG4gICAgICB0aGlzLmNhdHRsZVR5cGUsXG4gICAgICB0aGlzLmN1cnJlbnRBc3NldCxcbiAgICAgIHRoaXMud29ya2luZ1RpbWUsXG4gICAgICB0aGlzLmlzUmVhZHlUb1dvcmtcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xuICB3b3JrZXI6IFdvcmtlcjtcblxuICBtYWNoaW5lOiBNYWNoaW5lO1xuICBsYW5kOiBMYW5kO1xuXG4gIGdvbGQ6IG51bWJlcjtcbiAgdG9tYXRvOiBUb21hdG87XG4gIGJsdWViZXJyeTogQmx1ZWJlcnJ5O1xuICBzdHJhd2JlcnJ5OiBTdHJhd2JlcnJ5O1xuICBtaWxrOiBNaWxrO1xuICBiZWVmOiBCZWVmO1xuICB0b21hdG9TZWVkOiBUb21hdG9TZWVkO1xuICBibHVlYmVycnlTZWVkOiBCbHVlYmVycnlTZWVkO1xuICBzdHJhd2JlcnJ5U2VlZDogU3RyYXdiZXJyeVNlZWQ7XG4gIG1pbGtDb3c6IE1pbGtDb3c7XG4gIGNvdzogQ293O1xuXG4gIHdvcmtpbmdXb3JrZXJOdW1iZXI6IG51bWJlcjtcbiAgZ2V0SWRsZVdvcmtlcigpIHtcbiAgICByZXR1cm4gdGhpcy53b3JrZXIubnVtYmVyIC0gdGhpcy53b3JraW5nV29ya2VyTnVtYmVyO1xuICB9XG4gIGdldFdvcmtpbmdXb3JrZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud29ya2luZ1dvcmtlck51bWJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZWxsVG9tYXRvKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLnRvbWF0by5udW1iZXIgKiB0aGlzLnRvbWF0by5zZWxsUHJpY2UpO1xuICAgIHRoaXMudG9tYXRvLm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxCbHVlYmVycnkoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMuYmx1ZWJlcnJ5Lm51bWJlciAqIHRoaXMuYmx1ZWJlcnJ5LnNlbGxQcmljZSk7XG4gICAgdGhpcy5ibHVlYmVycnkubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbFN0cmF3YmVycnkoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMuc3RyYXdiZXJyeS5udW1iZXIgKiB0aGlzLnN0cmF3YmVycnkuc2VsbFByaWNlKTtcbiAgICB0aGlzLnN0cmF3YmVycnkubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbE1pbGsoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMubWlsay5udW1iZXIgKiB0aGlzLm1pbGsuc2VsbFByaWNlKTtcbiAgICB0aGlzLm1pbGsubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbEJlZWYoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMuYmVlZi5udW1iZXIgKiB0aGlzLmJlZWYuc2VsbFByaWNlKTtcbiAgICB0aGlzLmJlZWYubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgYWRkR29sZChfZ29sZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nb2xkICs9IF9nb2xkO1xuICB9XG4gIGdldFdvcmtlcklkbGUod29ya2luZ1dvcmtlck51bWJlcjogbnVtYmVyKSB7XG4gICAgbGV0IGlkbGVXb3JrZXIgPSB0aGlzLndvcmtlci5udW1iZXIgLSB3b3JraW5nV29ya2VyTnVtYmVyO1xuICAgIHJldHVybiBpZGxlV29ya2VyO1xuICB9XG4gIHB1YmxpYyBnZXRQZXJmb3JtYWNlTWFjaGluZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1hY2hpbmUuc3VwcG9ydDtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb21hdG9TZWVkKCk6IHZvaWQge1xuICAgIHRoaXMudG9tYXRvU2VlZC5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRCbHVlYmVycnlTZWVkKCk6IHZvaWQge1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRTdHJhd2JlcnJ5U2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkLm51bWJlciArPSAxMDtcbiAgfVxuICBhZGRNaWxrQ293KCk6IHZvaWQge1xuICAgIHRoaXMubWlsa0Nvdy5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRDb3coKTogdm9pZCB7XG4gICAgdGhpcy5jb3cubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkV29ya2VyKCk6IHZvaWQge1xuICAgIHRoaXMud29ya2VyLm51bWJlciArPSAxO1xuICB9XG4gIHVwZ3JhZGVNYWNoaW5lKCk6IHZvaWQge1xuICAgIHRoaXMubWFjaGluZS5sZXZlbCArPSAxO1xuICAgIHRoaXMubWFjaGluZS51cGdyYWRlUGVyZm9ybWFjZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kLm51bWJlcjsgaSsrKSB7XG4gICAgICBsZXQgbWF4SGFydmVzdCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5sYW5kVUlBcnJheVtpXS5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmxhbmRVSUFycmF5W2ldLmxhbmQuY3JvcCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5sYW5kVUlBcnJheVtpXS5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmxhbmRVSUFycmF5W2ldLmxhbmQuY3JvcCArPVxuICAgICAgICBNYXRoLmNlaWwobWF4SGFydmVzdCAqIHRoaXMubWFjaGluZS5PcGVyYXRlKCkpIC0gbWF4SGFydmVzdDtcbiAgICB9XG4gIH1cbiAgYWRkTGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmxhbmQubnVtYmVyICs9IDE7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9tYXRvKHRvbWF0b051bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b21hdG8ubnVtYmVyICs9IHRvbWF0b051bWJlcjtcbiAgfVxuICBhZGRCbHVlYmVycnkoYmx1ZWJlcnJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJsdWViZXJyeS5udW1iZXIgKz0gYmx1ZWJlcnJ5TnVtYmVyO1xuICB9XG4gIGFkZFN0cmF3YmVycnkoc3RyYXdiZXJyeU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdHJhd2JlcnJ5Lm51bWJlciArPSBzdHJhd2JlcnJ5TnVtYmVyO1xuICB9XG4gIGFkZE1pbGsobWlsa051bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5taWxrLm51bWJlciArPSBtaWxrTnVtYmVyO1xuICB9XG4gIGFkZEJlZWYoYmVlZk51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5iZWVmLm51bWJlciArPSBiZWVmTnVtYmVyO1xuICB9XG4gIGFzc2lnbldvcmtlcihsYW5kVWk6IExhbmRVSSkge1xuICAgIGlmIChsYW5kVWkubGFuZC5jb250YWluWWllbGQgPiAwKSB7XG4gICAgICBsYW5kVWkubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uWWllbGRpbmc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAobGFuZFVpLmxhbmQuY3VycmVudEFzc2V0KSB7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQ6XG4gICAgICAgIGxhbmRVaS5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQ6XG4gICAgICAgIGxhbmRVaS5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5CbHVlYmVycnlQbGFudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkOlxuICAgICAgICBsYW5kVWkubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uU3RyYXdiZXJyeVBsYW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdzpcbiAgICAgICAgbGFuZFVpLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLk1pbGtjb3dMaXZlU3RvY2s7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5jb3c6XG4gICAgICAgIGxhbmRVaS5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5Db3dMaXZlU3RvY2s7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/StorageUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf0ecMP37tPgYBbrit2eOff', 'StorageUI');
// scripts/ui/StorageUI.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIManager_1 = require("../Manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StorageUI = /** @class */ (function (_super) {
    __extends(StorageUI, _super);
    function StorageUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tomatoSeed = null;
        _this.blueberrySeed = null;
        _this.strawberrySeed = null;
        _this.milkCow = null;
        _this.workerIdle = null;
        _this.workerWorking = null;
        _this.machineLevel = null;
        _this.gold = null;
        _this.tomato = null;
        _this.blueberry = null;
        _this.strawberry = null;
        _this.milk = null;
        _this.sellTomatoBtn = null;
        _this.sellBlueberryBtn = null;
        _this.sellStrawberryBtn = null;
        _this.sellMilkBtn = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StorageUI.prototype.start = function () { };
    // update (dt) {}
    StorageUI.prototype.setupUI = function () {
        this.sellTomatoBtn.node.active = true;
        this.sellTomatoBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellTomatoBtn, this);
        this.sellBlueberryBtn.node.active = true;
        this.sellBlueberryBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellBlueberryBtn, this);
        this.sellStrawberryBtn.node.active = true;
        this.sellStrawberryBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellStrawberryBtn, this);
        this.sellMilkBtn.node.active = true;
        this.sellMilkBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellMilkBtn, this);
    };
    StorageUI.prototype.updateUI = function () {
        var idleWorker = UIManager_1.default.instance.gameController.model.storage.getIdleWorker();
        var workingWorker = UIManager_1.default.instance.gameController.model.storage.getWorkingWorker();
        this.tomatoSeed.string =
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number.toString();
        this.blueberrySeed.string =
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number.toString();
        this.strawberrySeed.string =
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number.toString();
        this.milkCow.string =
            UIManager_1.default.instance.gameController.model.storage.milkCow.number.toString();
        this.gold.string =
            UIManager_1.default.instance.gameController.model.storage.gold.toString();
        this.workerIdle.string = idleWorker.toString();
        this.machineLevel.string =
            UIManager_1.default.instance.gameController.model.storage.machine.level.toString();
        this.workerWorking.string = workingWorker.toString();
        this.tomato.string =
            UIManager_1.default.instance.gameController.model.storage.tomato.number.toString();
        this.blueberry.string =
            UIManager_1.default.instance.gameController.model.storage.blueberry.number.toString();
        this.strawberry.string =
            UIManager_1.default.instance.gameController.model.storage.strawberry.number.toString();
        this.milk.string =
            UIManager_1.default.instance.gameController.model.storage.milk.number.toString();
        console.log("update Storage UI Done !!!");
    };
    StorageUI.prototype.resetUI = function () { };
    StorageUI.prototype.onClickSellTomatoBtn = function () {
        console.log("onClickSellTomatoBtn");
        if (UIManager_1.default.instance.gameController.model.storage.tomato.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellTomato();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellBlueberryBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.blueberry.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellBlueberry();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellStrawberryBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.strawberry.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellStrawberry();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellMilkBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.milk.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellMilk();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "tomatoSeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "blueberrySeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "strawberrySeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "milkCow", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "workerIdle", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "workerWorking", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "machineLevel", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "gold", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "tomato", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "blueberry", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "strawberry", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "milk", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellTomatoBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellBlueberryBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellStrawberryBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellMilkBtn", void 0);
    StorageUI = __decorate([
        ccclass
    ], StorageUI);
    return StorageUI;
}(cc.Component));
exports.default = StorageUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1N0b3JhZ2VVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixrREFBNkM7QUFFdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUErSEM7UUE3SEMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFFcEMsaUJBQVcsR0FBYyxJQUFJLENBQUM7O0lBOEZoQyxDQUFDO0lBN0ZDLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixpQkFBaUI7SUFDakIsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxD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QztvREFDWTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0c7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDZ0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVTtJQWpDWCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0g3QjtJQUFELGdCQUFDO0NBL0hELEFBK0hDLENBL0hzQyxFQUFFLENBQUMsU0FBUyxHQStIbEQ7a0JBL0hvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRvbWF0b1NlZWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBibHVlYmVycnlTZWVkOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3RyYXdiZXJyeVNlZWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBtaWxrQ293OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgd29ya2VySWRsZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHdvcmtlcldvcmtpbmc6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBtYWNoaW5lTGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBnb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdG9tYXRvOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYmx1ZWJlcnJ5OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3RyYXdiZXJyeTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIG1pbGs6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsVG9tYXRvQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsQmx1ZWJlcnJ5QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsU3RyYXdiZXJyeUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc2VsbE1pbGtCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuXG4gIHN0YXJ0KCkge31cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxuICBzZXR1cFVJKCkge1xuICAgIHRoaXMuc2VsbFRvbWF0b0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zZWxsVG9tYXRvQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTZWxsVG9tYXRvQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5zZWxsQmx1ZWJlcnJ5QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGxCbHVlYmVycnlCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1NlbGxCbHVlYmVycnlCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLnNlbGxTdHJhd2JlcnJ5QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGxTdHJhd2JlcnJ5QnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTZWxsU3RyYXdiZXJyeUJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc2VsbE1pbGtCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2VsbE1pbGtCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1NlbGxNaWxrQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cbiAgdXBkYXRlVUkoKSB7XG4gICAgY29uc3QgaWRsZVdvcmtlciA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRJZGxlV29ya2VyKCk7XG4gICAgY29uc3Qgd29ya2luZ1dvcmtlciA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JraW5nV29ya2VyKCk7XG5cbiAgICB0aGlzLnRvbWF0b1NlZWQuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWQuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMubWlsa0Nvdy5zdHJpbmcgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLmdvbGQuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQudG9TdHJpbmcoKTtcblxuICAgIHRoaXMud29ya2VySWRsZS5zdHJpbmcgPSBpZGxlV29ya2VyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5tYWNoaW5lTGV2ZWwuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUubGV2ZWwudG9TdHJpbmcoKTtcbiAgICB0aGlzLndvcmtlcldvcmtpbmcuc3RyaW5nID0gd29ya2luZ1dvcmtlci50b1N0cmluZygpO1xuXG4gICAgdGhpcy50b21hdG8uc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0by5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLmJsdWViZXJyeS5zdHJpbmcgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMuc3RyYXdiZXJyeS5zdHJpbmcgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeS5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pbGsuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGsubnVtYmVyLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBTdG9yYWdlIFVJIERvbmUgISEhXCIpO1xuICB9XG4gIHJlc2V0VUkoKSB7fVxuXG4gIG9uQ2xpY2tTZWxsVG9tYXRvQnRuKCkge1xuICAgIGNvbnNvbGUubG9nKFwib25DbGlja1NlbGxUb21hdG9CdG5cIik7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0by5udW1iZXIgPiAwKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zZWxsVG9tYXRvKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tTZWxsQmx1ZWJlcnJ5QnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnkubnVtYmVyID4gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc2VsbEJsdWViZXJyeSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrU2VsbFN0cmF3YmVycnlCdG4oKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnkubnVtYmVyID4gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc2VsbFN0cmF3YmVycnkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja1NlbGxNaWxrQnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrLm51bWJlciA+IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnNlbGxNaWxrKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/YieldType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2e19ZzzSpGBpv7RzjtdwVx', 'YieldType');
// enums/YieldType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldType = void 0;
var YieldType;
(function (YieldType) {
    YieldType["Tomato"] = "tomato";
    YieldType["Blueberry"] = "blueberry";
    YieldType["Strawberry"] = "strawberry";
    YieldType["Milk"] = "milk";
    YieldType["Beef"] = "beef";
})(YieldType = exports.YieldType || (exports.YieldType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9ZaWVsZFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ25CLDhCQUFpQixDQUFBO0lBQ2pCLG9DQUF1QixDQUFBO0lBQ3ZCLHNDQUF5QixDQUFBO0lBQ3pCLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gWWllbGRUeXBlIHtcbiAgVG9tYXRvID0gXCJ0b21hdG9cIixcbiAgQmx1ZWJlcnJ5ID0gXCJibHVlYmVycnlcIixcbiAgU3RyYXdiZXJyeSA9IFwic3RyYXdiZXJyeVwiLFxuICBNaWxrID0gXCJtaWxrXCIsXG4gIEJlZWYgPSBcImJlZWZcIixcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/PlantType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0a62BACnZHRaaCGaiX4GX5', 'PlantType');
// enums/PlantType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantType = void 0;
var PlantType;
(function (PlantType) {
    PlantType["tomatoSeed"] = "tomatoseed";
    PlantType["blueberrySeed"] = "blueberryseed";
    PlantType["strawberrySeed"] = "strawberryseed";
})(PlantType = exports.PlantType || (exports.PlantType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9QbGFudFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLHNDQUF5QixDQUFBO0lBQ3pCLDRDQUErQixDQUFBO0lBQy9CLDhDQUFpQyxDQUFBO0FBQ25DLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFBsYW50VHlwZSB7XG4gIHRvbWF0b1NlZWQgPSBcInRvbWF0b3NlZWRcIixcbiAgYmx1ZWJlcnJ5U2VlZCA9IFwiYmx1ZWJlcnJ5c2VlZFwiLFxuICBzdHJhd2JlcnJ5U2VlZCA9IFwic3RyYXdiZXJyeXNlZWRcIixcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/CSVLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '917b1sCBmpBmKrSaSzdZykt', 'CSVLoader');
// scripts/utils/CSVLoader.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
exports.CSVLoader = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CSVLoader = /** @class */ (function () {
    function CSVLoader() {
    }
    /**
     * Parse raw CSV string thành mảng object.
     */
    CSVLoader.parse = function (csvText) {
        var lines = csvText.trim().split("\n");
        var headers = lines[0].split(",");
        var records = [];
        var _loop_1 = function (i) {
            var line = lines[i].split(",");
            var record = {};
            headers.forEach(function (header, idx) {
                record[header.trim()] = line[idx].trim();
            });
            records.push(record);
        };
        for (var i = 1; i < lines.length; i++) {
            _loop_1(i);
        }
        return records;
    };
    /**
     * Tải CSV từ folder resources/configs/
     */
    CSVLoader.load = function (filename) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.resources.load("configs/" + filename, function (err, asset) {
                            if (err) {
                                console.error("Load CSV failed:", err);
                                reject(err);
                                return;
                            }
                            var data = _this.parse(asset.text);
                            resolve(data);
                        });
                    })];
            });
        });
    };
    return CSVLoader;
}());
exports.CSVLoader = CSVLoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0NTVkxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQU01QztJQUFBO0lBMkNBLENBQUM7SUExQ0M7O09BRUc7SUFDSSxlQUFLLEdBQVosVUFBYSxPQUFlO1FBQzFCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQyxJQUFNLE9BQU8sR0FBZ0IsRUFBRSxDQUFDO2dDQUV2QixDQUFDO1lBQ1IsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFNLE1BQU0sR0FBYyxFQUFFLENBQUM7WUFFN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxHQUFHO2dCQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFSdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUE1QixDQUFDO1NBU1Q7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDVSxjQUFJLEdBQWpCLFVBQWtCLFFBQWdCO3VDQUFHLE9BQU87OztnQkFDMUMsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDakMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2YsYUFBVyxRQUFVLEVBQ3JCLFVBQUMsR0FBaUIsRUFBRSxLQUFtQjs0QkFDckMsSUFBSSxHQUFHLEVBQUU7Z0NBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztnQ0FDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNaLE9BQU87NkJBQ1I7NEJBQ0QsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxDQUNGLENBQUM7b0JBQ0osQ0FBQyxDQUFDLEVBQUM7OztLQUNKO0lBQ0gsZ0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1NWUmVjb3JkIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ1NWTG9hZGVyIHtcbiAgLyoqXG4gICAqIFBhcnNlIHJhdyBDU1Ygc3RyaW5nIHRow6BuaCBt4bqjbmcgb2JqZWN0LlxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNzdlRleHQ6IHN0cmluZyk6IENTVlJlY29yZFtdIHtcbiAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQudHJpbSgpLnNwbGl0KFwiXFxuXCIpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBsaW5lc1swXS5zcGxpdChcIixcIik7XG5cbiAgICBjb25zdCByZWNvcmRzOiBDU1ZSZWNvcmRbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgIGNvbnN0IHJlY29yZDogQ1NWUmVjb3JkID0ge307XG5cbiAgICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyLCBpZHgpID0+IHtcbiAgICAgICAgcmVjb3JkW2hlYWRlci50cmltKCldID0gbGluZVtpZHhdLnRyaW0oKTtcbiAgICAgIH0pO1xuXG4gICAgICByZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjb3JkcztcbiAgfVxuXG4gIC8qKlxuICAgKiBU4bqjaSBDU1YgdOG7qyBmb2xkZXIgcmVzb3VyY2VzL2NvbmZpZ3MvXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgbG9hZChmaWxlbmFtZTogc3RyaW5nKTogUHJvbWlzZTxDU1ZSZWNvcmRbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjYy5yZXNvdXJjZXMubG9hZChcbiAgICAgICAgYGNvbmZpZ3MvJHtmaWxlbmFtZX1gLFxuICAgICAgICAoZXJyOiBFcnJvciB8IG51bGwsIGFzc2V0OiBjYy5UZXh0QXNzZXQpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9hZCBDU1YgZmFpbGVkOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnBhcnNlKGFzc2V0LnRleHQpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/views/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2686b1KiCpGqZMFXUPkJCnq', 'GameView');
// scripts/views/GameView.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
var BaseView_1 = require("../../core/mvc/BaseView");
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView(_controller) {
        var _this = _super.call(this) || this;
        _this.controller = _controller;
        _this.updateView();
        return _this;
    }
    GameView.prototype.updateView = function () { };
    return GameView;
}(BaseView_1.BaseView));
exports.GameView = GameView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZpZXdzL0dhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFHbkQ7SUFBOEIsNEJBQXdCO0lBR3BELGtCQUFZLFdBQTJCO1FBQXZDLFlBQ0UsaUJBQU8sU0FHUjtRQUZDLEtBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzlCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQUxELDZCQUFVLEdBQVYsY0FBb0IsQ0FBQztJQU12QixlQUFDO0FBQUQsQ0FSQSxBQVFDLENBUjZCLG1CQUFRLEdBUXJDO0FBUlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlVmlld1wiO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgQmFzZVZpZXc8R2FtZUNvbnRyb2xsZXI+IHtcbiAgY29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIHVwZGF0ZVZpZXcoKTogdm9pZCB7fVxuICBjb25zdHJ1Y3RvcihfY29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IF9jb250cm9sbGVyO1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd97cbimp1A5bPxZ5kddtUd', 'IStorage');
// interfaces/IStorage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCZWVmLFxuICBCbHVlYmVycnksXG4gIEJsdWViZXJyeVNlZWQsXG4gIENvdyxcbiAgTGFuZCxcbiAgTWFjaGluZSxcbiAgTWlsayxcbiAgTWlsa0NvdyxcbiAgU3RyYXdiZXJyeSxcbiAgU3RyYXdiZXJyeVNlZWQsXG4gIFRvbWF0byxcbiAgVG9tYXRvU2VlZCxcbiAgV29ya2VyLFxufSBmcm9tIFwiLi4vc2NyaXB0cy9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUkgZnJvbSBcIi4uL3NjcmlwdHMvdWkvTGFuZFVJXCI7XG5pbXBvcnQgeyBJTWFjaGluZSB9IGZyb20gXCIuL0lNYWNoaW5lXCI7XG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSBcIi4vSVdvcmtlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yYWdlIHtcbiAgZ29sZDogbnVtYmVyO1xuICB0b21hdG86IFRvbWF0bztcbiAgYmx1ZWJlcnJ5OiBCbHVlYmVycnk7XG4gIHN0cmF3YmVycnk6IFN0cmF3YmVycnk7XG4gIG1pbGs6IE1pbGs7XG4gIGJlZWY6IEJlZWY7XG5cbiAgdG9tYXRvU2VlZDogVG9tYXRvU2VlZDtcbiAgYmx1ZWJlcnJ5U2VlZDogQmx1ZWJlcnJ5U2VlZDtcbiAgc3RyYXdiZXJyeVNlZWQ6IFN0cmF3YmVycnlTZWVkO1xuICBtaWxrQ293OiBNaWxrQ293O1xuICBjb3c6IENvdztcblxuICB3b3JrZXI6IFdvcmtlcjtcbiAgbWFjaGluZTogTWFjaGluZTtcblxuICBsYW5kOiBMYW5kO1xuXG4gIHNlbGxUb21hdG8oKTogdm9pZDtcbiAgc2VsbEJsdWViZXJyeSgpOiB2b2lkO1xuICBzZWxsU3RyYXdiZXJyeSgpOiB2b2lkO1xuICBzZWxsTWlsaygpOiB2b2lkO1xuICBzZWxsQmVlZigpOiB2b2lkO1xuICBhZGRHb2xkKGdvbGQ6IG51bWJlcik6IHZvaWQ7XG4gIGdldFdvcmtlcklkbGUod29ya2luZ1dvcmtlcjogbnVtYmVyKTogbnVtYmVyO1xuICBnZXRQZXJmb3JtYWNlTWFjaGluZSgpOiBudW1iZXI7XG5cbiAgYWRkVG9tYXRvU2VlZCgpOiB2b2lkO1xuICBhZGRCbHVlYmVycnlTZWVkKCk6IHZvaWQ7XG4gIGFkZFN0cmF3YmVycnlTZWVkKCk6IHZvaWQ7XG4gIGFkZE1pbGtDb3coKTogdm9pZDtcbiAgYWRkQ293KCk6IHZvaWQ7XG4gIGFkZFdvcmtlcigpOiB2b2lkO1xuICB1cGdyYWRlTWFjaGluZSgpOiB2b2lkO1xuXG4gIGFzc2lnbldvcmtlcihsYW5kVWk6IExhbmRVSSk6IHZvaWQ7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IStore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fbeaphx5lOVJ3zaPkaw8pP', 'IStore');
// interfaces/IStore.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJU3RvcmUge1xuICBidXlUb21hdG9TZWVkKCk6IHZvaWQ7XG4gIGJ1eUJsdWViZXJyeVNlZWQoKTogdm9pZDtcbiAgYnV5U3RyYXdiZXJyeVNlZWQoKTogdm9pZDtcbiAgYnV5TWlsa0NvdygpOiB2b2lkO1xuICBidXlDb3coKTogdm9pZDtcbiAgYnV5V29ya2VyKCk6IHZvaWQ7XG4gIHVwZ3JhZGVNYWNoaW5lKCk6IHZvaWQ7XG4gIGJ1eUxhbmQoKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/Type.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aee3ee6ad9Nmp9eQPkTMQdR', 'Type');
// enums/Type.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    Type["Land"] = "land";
    Type["Tomatoseed"] = "tomatoseed";
    Type["Blueberryseed"] = "blueberryseed";
    Type["Milkcow"] = "milkcow";
    Type["Worker"] = "worker";
    Type["Machine"] = "machine";
})(Type = exports.Type || (exports.Type = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksSUFPWDtBQVBELFdBQVksSUFBSTtJQUNkLHFCQUFhLENBQUE7SUFDYixpQ0FBeUIsQ0FBQTtJQUN6Qix1Q0FBK0IsQ0FBQTtJQUMvQiwyQkFBbUIsQ0FBQTtJQUNuQix5QkFBaUIsQ0FBQTtJQUNqQiwyQkFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBUFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBT2YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBUeXBlIHtcbiAgTGFuZCA9IFwibGFuZFwiLFxuICBUb21hdG9zZWVkID0gXCJ0b21hdG9zZWVkXCIsXG4gIEJsdWViZXJyeXNlZWQgPSBcImJsdWViZXJyeXNlZWRcIixcbiAgTWlsa2NvdyA9IFwibWlsa2Nvd1wiLFxuICBXb3JrZXIgPSBcIndvcmtlclwiLFxuICBNYWNoaW5lID0gXCJtYWNoaW5lXCIsXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/CattleType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4ceaI+rHlH+ZvzxTNEmCqB', 'CattleType');
// enums/CattleType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CattleType = void 0;
var CattleType;
(function (CattleType) {
    CattleType["Milkcow"] = "milkcow";
    CattleType["Cow"] = "cow";
})(CattleType = exports.CattleType || (exports.CattleType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9DYXR0bGVUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixpQ0FBbUIsQ0FBQTtJQUNuQix5QkFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2F0dGxlVHlwZSB7XG4gIE1pbGtjb3cgPSBcIm1pbGtjb3dcIixcbiAgQ293ID0gXCJjb3dcIixcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/core/mvc/BaseController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2dadZyy+dCRpgHyenuZVfZ', 'BaseController');
// core/mvc/BaseController.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.init = function (model, view) {
        this.model = model;
        this.view = view;
        this.view.setController(this);
    };
    return BaseController;
}());
exports.BaseController = BaseController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3JlL212Yy9CYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO0lBZUEsQ0FBQztJQVJDLDZCQUFJLEdBQUosVUFBSyxLQUFhLEVBQUUsSUFBVztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0gscUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZxQix3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gXCIuL0Jhc2VNb2RlbFwiO1xuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tIFwiLi9CYXNlVmlld1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbnRyb2xsZXI8XG4gIFRNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCxcbiAgVFZpZXcgZXh0ZW5kcyBCYXNlVmlldzxhbnk+XG4+IHtcbiAgcHVibGljIG1vZGVsITogVE1vZGVsO1xuICBwcm90ZWN0ZWQgdmlldyE6IFRWaWV3O1xuXG4gIGluaXQobW9kZWw6IFRNb2RlbCwgdmlldzogVFZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy52aWV3ID0gdmlldztcblxuICAgIHRoaXMudmlldy5zZXRDb250cm9sbGVyKHRoaXMpO1xuICB9XG5cbiAgYWJzdHJhY3QgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/core/mvc/BaseModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b6ddZ9THRN+IRL8V7rE/Ub', 'BaseModel');
// core/mvc/BaseModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());
exports.BaseModel = BaseModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3JlL212Yy9CYXNlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRnFCLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNb2RlbCB7XG4gIGFic3RyYWN0IGluaXQoLi4uYXJnczogYW55W10pOiB2b2lkO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55a2fWzA/hP0J8DGMhBV0hO', 'IAsset');
// interfaces/IAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlO1xuXG4gIHVzZUZvckZhcm0oKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IMachine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea8a0tPiC1FraEEsEqKBdUf', 'IMachine');
// interfaces/IMachine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElNYWNoaW5lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBzdXBwb3J0OiBudW1iZXI7XG4gIHVwZ3JhZGVQcmljZTogbnVtYmVyO1xuXG4gIE9wZXJhdGUoKTogbnVtYmVyO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/WorkerType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '647ddShNVRPUoq97VvDJR14', 'WorkerType');
// enums/WorkerType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerType = void 0;
var WorkerType;
(function (WorkerType) {
    WorkerType["Fresher"] = "fresher";
    WorkerType["Junior"] = "junior";
    WorkerType["Middle"] = "middle";
    WorkerType["Senior"] = "senior";
})(WorkerType = exports.WorkerType || (exports.WorkerType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9Xb3JrZXJUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNwQixpQ0FBbUIsQ0FBQTtJQUNuQiwrQkFBaUIsQ0FBQTtJQUNqQiwrQkFBaUIsQ0FBQTtJQUNqQiwrQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBXb3JrZXJUeXBlIHtcbiAgRnJlc2hlciA9IFwiZnJlc2hlclwiLFxuICBKdW5pb3IgPSBcImp1bmlvclwiLFxuICBNaWRkbGUgPSBcIm1pZGRsZVwiLFxuICBTZW5pb3IgPSBcInNlbmlvclwiLFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IWorker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58a6e1i/1NF0b+vGFSBts1D', 'IWorker');
// interfaces/IWorker.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lXb3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYW5kVUksIHsgV29ya2VyQWN0aW9uIH0gZnJvbSBcIi4uL3NjcmlwdHMvdWkvTGFuZFVJXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuXG4gIFdvcmsobGFuZFVJOiBMYW5kVUksIHdvcmtlckFjdGlvbjogV29ya2VyQWN0aW9uKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/PlantModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b85bY6DUBPZ6zLTXvxlv8i', 'PlantModel');
// scripts/models/PlantModel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9QbGFudE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/MachineModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29c3cVFevZDdqX9OZzp08yk', 'MachineModel');
// scripts/models/MachineModel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9NYWNoaW5lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IYield.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1063aUmJJMNJwrUC/eIQP/', 'IYield');
// interfaces/IYield.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lZaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcblxuICBzZWxsRm9yU3RvcmUoKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/CattleModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5f6eaUI29PaKY1o83ETdu+', 'CattleModel');
// scripts/models/CattleModel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9DYXR0bGVNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/WorkerModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60531hve/FHOJBTOd9WeseG', 'WorkerModel');
// scripts/models/WorkerModel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9Xb3JrZXJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/LandModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4aae1HmUclIp7q1ufPy9fOP', 'LandModel');
// scripts/models/LandModel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9MYW5kTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/LandType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcd90zFvvpCvpj7gwhz0d8a', 'LandType');
// enums/LandType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandType = void 0;
var LandType;
(function (LandType) {
    LandType["Red"] = "red";
    LandType["Green"] = "green";
    LandType["Brown"] = "brown";
})(LandType = exports.LandType || (exports.LandType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9MYW5kVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDbEIsdUJBQVcsQ0FBQTtJQUNYLDJCQUFlLENBQUE7SUFDZiwyQkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUluQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIExhbmRUeXBlIHtcbiAgUmVkID0gXCJyZWRcIixcbiAgR3JlZW4gPSBcImdyZWVuXCIsXG4gIEJyb3duID0gXCJicm93blwiLFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/YieldModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb2f9gDSm9OqaZ9A2msyREs', 'YieldModel');
// scripts/models/YieldModel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9ZaWVsZE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/LandUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fbc3+Fqj9Cc4pfV5s0aDz8', 'LandUI');
// scripts/ui/LandUI.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerAction = exports.YeildAction = exports.LandState = void 0;
var CattleType_1 = require("../../enums/CattleType");
var PlantType_1 = require("../../enums/PlantType");
var UIManager_1 = require("../Manager/UIManager");
var GameConfig_1 = require("../data/GameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LandState;
(function (LandState) {
    LandState[LandState["Undefined"] = 0] = "Undefined";
    LandState[LandState["Empty"] = 1] = "Empty";
    LandState[LandState["Plant"] = 2] = "Plant";
    LandState[LandState["Cattle"] = 3] = "Cattle";
    LandState[LandState["Harvest"] = 4] = "Harvest";
})(LandState = exports.LandState || (exports.LandState = {}));
var YeildAction;
(function (YeildAction) {
    YeildAction["Undefined"] = "";
    YeildAction["Harvest"] = "Harvest";
    YeildAction["Milk"] = "Milk";
    YeildAction["Butcher"] = "Butcher";
})(YeildAction = exports.YeildAction || (exports.YeildAction = {}));
var WorkerAction;
(function (WorkerAction) {
    WorkerAction[WorkerAction["Undefined"] = 0] = "Undefined";
    WorkerAction[WorkerAction["Yielding"] = 1] = "Yielding";
    WorkerAction[WorkerAction["TomatoPlant"] = 2] = "TomatoPlant";
    WorkerAction[WorkerAction["BlueberryPlant"] = 3] = "BlueberryPlant";
    WorkerAction[WorkerAction["StrawberryPlant"] = 4] = "StrawberryPlant";
    WorkerAction[WorkerAction["MilkcowLiveStock"] = 5] = "MilkcowLiveStock";
    WorkerAction[WorkerAction["CowLiveStock"] = 6] = "CowLiveStock";
})(WorkerAction = exports.WorkerAction || (exports.WorkerAction = {}));
var LandUI = /** @class */ (function (_super) {
    __extends(LandUI, _super);
    function LandUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tomatoSeedBtn = null;
        _this.blueberrySeedBtn = null;
        _this.strawberrySeedBtn = null;
        _this.milkCowBtn = null;
        _this.yieldBtn = null;
        _this.nameLb = null;
        _this.timeLb = null;
        _this.yieldContainLb = null;
        _this.cropLb = null;
        _this.yieldButtonLb = null;
        _this.workerSprite = null;
        _this.workingIntervalLb = null;
        _this.Sprite = null;
        _this.loadImage = function (imageName, sprite) {
            var path = "images/" + imageName;
            if (imageName == "") {
                sprite.spriteFrame = null;
                return;
            }
            cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
                if (err) {
                    cc.error("Kh\u00F4ng th\u1EC3 load \u1EA3nh: " + path, err);
                    return;
                }
                sprite.spriteFrame = spriteFrame;
            });
        };
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    LandUI.prototype.onLoad = function () { };
    LandUI.prototype.start = function () {
        //UIManager.instance.useWorkerForQueue();
    };
    LandUI.prototype.update = function (dt) {
        if (this.land != null) {
            if (!this.land.isEmpty) {
                if (this.land.time < 0.5) {
                    if (this.land.crop > 0) {
                        console.log(this.land.currentAsset.maxHarvest);
                        this.land.containYield += 1;
                        this.land.workerAction = WorkerAction.Yielding;
                        this.land.crop -= 1;
                        this.land.time = this.land.currentAsset.harvestInterval * 60;
                        console.log(this.land.currentAsset.harvestInterval);
                        this.land.landState = LandState.Harvest;
                        this.DisplayUI();
                        UIManager_1.default.instance.pushToQueue(this);
                        UIManager_1.default.instance.useWorkerForQueue3();
                    }
                    else {
                        this.land.landState = LandState.Empty;
                        //this.disableWorker();
                        this.DisplayUI();
                        UIManager_1.default.instance.pushToQueue(this);
                        UIManager_1.default.instance.useWorkerForQueue3();
                    }
                }
                else if (this.land.time > 0) {
                    this.land.time -=
                        dt *
                            UIManager_1.default.instance.gameController.model.storage.machine.Operate();
                    this.updateUI();
                }
            }
            else {
            }
            if (this.land.workingTime > 0) {
                this.land.workingTime -= dt;
                this.updateUI();
                //this.land.isReadyToWork = false;
            }
            else if (this.land.workingTime < 0) {
                //this.land.isReadyToWork = false;
                UIManager_1.default.instance.gameController.model.storage.worker.Work(this, this.land.workerAction);
            }
            else {
            }
        }
    };
    LandUI.prototype.DisplayUI = function () {
        switch (this.land.landState) {
            case LandState.Empty:
                this.resetUI();
                this.setupUI();
                this.disableWorker();
                this.land.isReadyToWork = this.land.currentAsset.number > 0;
                break;
            case LandState.Harvest:
                this.updateUI();
                this.disableWorker();
                this.land.isReadyToWork = true;
                break;
            case LandState.Plant:
                this.updateUI();
                this.land.isReadyToWork = false;
                this.disableWorker();
                break;
            case LandState.Cattle:
                this.updateUI();
                this.land.isReadyToWork = false;
                this.disableWorker();
                break;
            default:
                break;
        }
    };
    LandUI.prototype.setupUI = function () {
        this.tomatoSeedBtn.node.active = true;
        this.tomatoSeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickTomatoSeedBtn, this);
        this.blueberrySeedBtn.node.active = true;
        this.blueberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBlueberrySeedBtn, this);
        this.strawberrySeedBtn.node.active = true;
        this.strawberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickStrawberrySeedBtn, this);
        this.milkCowBtn.node.active = true;
        this.milkCowBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickMilkCowBtn, this);
        //this.harvestBtn.node.active = true;
        this.yieldBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickYieldBtn, this);
        console.log("setup LandUI Done!!!!");
    };
    LandUI.prototype.updateUI = function () {
        this.setTimeLb(this.land.time);
        this.setCropLb(this.land.crop);
        this.setWorkingIntervalLb(this.land.workingTime);
        this.setYieldContainLb(this.land.containYield);
        if (this.land.time > 0) {
            if (this.land.landState == LandState.Plant) {
                switch (this.land.plantType) {
                    case PlantType_1.PlantType.tomatoSeed:
                        this.setSprite(GameConfig_1.PlantConfigs.tomatoseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.tomatoseed.name);
                        break;
                    case PlantType_1.PlantType.blueberrySeed:
                        this.setSprite(GameConfig_1.PlantConfigs.blueberryseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.blueberryseed.name);
                        break;
                    case PlantType_1.PlantType.strawberrySeed:
                        this.setSprite(GameConfig_1.PlantConfigs.strawberryseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.strawberryseed.name);
                        break;
                    default:
                        break;
                }
            }
            else if (this.land.landState == LandState.Cattle) {
                switch (this.land.cattleType) {
                    case CattleType_1.CattleType.Cow:
                        this.setSprite(GameConfig_1.CattleConfigs.cow.name);
                        this.setNameLb(GameConfig_1.CattleConfigs.cow.name);
                        break;
                    case CattleType_1.CattleType.Milkcow:
                        this.setSprite(GameConfig_1.CattleConfigs.milkcow.name);
                        this.setNameLb(GameConfig_1.CattleConfigs.milkcow.name);
                        break;
                    default:
                        break;
                }
            }
            this.tomatoSeedBtn.node.active = false;
            this.blueberrySeedBtn.node.active = false;
            this.strawberrySeedBtn.node.active = false;
            this.milkCowBtn.node.active = false;
            this.nameLb.node.active = true;
            this.timeLb.node.active = true;
            this.Sprite.node.active = true;
            this.yieldContainLb.node.active = true;
            this.cropLb.node.active = true;
        }
        else {
        }
        this.yieldBtn.node.active =
            (this.land.plantType != null || this.land.cattleType != null) &&
                this.land.containYield > 0;
        if (this.yieldBtn.node.active) {
            switch (this.land.currentAsset) {
                case UIManager_1.default.instance.gameController.model.storage.tomatoSeed:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.blueberrySeed:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.strawberrySeed:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.milkCow:
                    this.yieldButtonLb.string = YeildAction.Milk;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.cow:
                    this.yieldButtonLb.string = YeildAction.Butcher;
                    break;
                default:
                    break;
            }
        }
    };
    LandUI.prototype.onClickTomatoSeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number > 0) {
            //this.disableWorker();
            this.land.isEmpty = false;
            this.land.plantType = PlantType_1.PlantType.tomatoSeed;
            this.land.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.tomatoSeed;
            var maxHarvest = this.land.currentAsset.maxHarvest;
            this.land.crop = this.land.currentAsset.maxHarvest;
            this.land.crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number -= 1;
            this.land.landState = LandState.Plant;
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickBlueberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.PlantConfigs.blueberryseed.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.plantType = PlantType_1.PlantType.blueberrySeed;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.blueberrySeed;
            var maxHarvest = this.land.currentAsset.maxHarvest;
            this.land.crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number -= 1;
            this.land.landState = LandState.Plant;
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.PlantConfigs.strawberryseed.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.plantType = PlantType_1.PlantType.strawberrySeed;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.strawberrySeed;
            var maxHarvest = this.land.currentAsset.maxHarvest;
            this.land.crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number -= 1;
            this.land.landState = LandState.Plant;
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickMilkCowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.milkCow.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.CattleConfigs.milkcow.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.cattleType = CattleType_1.CattleType.Milkcow;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.milkCow;
            var maxHarvest = this.land.currentAsset.maxHarvest;
            this.land.crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.milkCow.number -= 1;
            this.land.landState = LandState.Cattle;
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickYieldBtn = function () {
        //this.disableWorker();
        switch (this.land.currentAsset) {
            case UIManager_1.default.instance.gameController.model.storage.tomatoSeed:
                UIManager_1.default.instance.gameController.model.storage.addTomato(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed:
                UIManager_1.default.instance.gameController.model.storage.addBlueberry(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed:
                UIManager_1.default.instance.gameController.model.storage.addStrawberry(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.milkCow:
                UIManager_1.default.instance.gameController.model.storage.addMilk(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.cow:
                UIManager_1.default.instance.gameController.model.storage.addBeef(this.land.containYield);
                break;
            default:
                break;
        }
        this.land.containYield = 0;
        this.updateUI();
        UIManager_1.default.instance.storageUI.updateUI();
        this.land.landState = this.land.plantType
            ? LandState.Plant
            : LandState.Cattle;
        if (this.land.crop == 0) {
            this.land.landState = LandState.Empty;
            this.DisplayUI();
            UIManager_1.default.instance.pushToQueue(this);
            UIManager_1.default.instance.useWorkerForQueue3();
            return;
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
        //this.disableWorker();
        //UIManager.instance.useWorkerForQueue();
    };
    LandUI.prototype.onClickMilkBtn = function () {
        this.resetUI();
    };
    LandUI.prototype.setNameLb = function (name) {
        this.nameLb.string = name;
    };
    LandUI.prototype.setYieldContainLb = function (yieldContain) {
        this.yieldContainLb.string = yieldContain.toString();
    };
    LandUI.prototype.setCropLb = function (crop) {
        this.cropLb.string = crop.toString();
    };
    LandUI.prototype.setWorkingIntervalLb = function (workingTime) {
        if (workingTime < 0) {
            this.workingIntervalLb.string = "0s";
        }
        else {
            var _workingTime = parseInt(workingTime.toString());
            this.workingIntervalLb.string = _workingTime.toString() + "s";
        }
    };
    LandUI.prototype.setTimeLb = function (time) {
        if (time < 0) {
            this.timeLb.string = "0s";
        }
        else {
            var _time = parseInt(time.toString());
            this.timeLb.string = _time.toString() + "s";
        }
    };
    LandUI.prototype.setWorkerSprite = function () {
        this.loadImage("Middle", this.workerSprite);
    };
    LandUI.prototype.setSprite = function (imageName) {
        this.loadImage(imageName, this.Sprite);
    };
    LandUI.prototype.resetUI = function () {
        this.tomatoSeedBtn.node.active = true;
        this.blueberrySeedBtn.node.active = true;
        this.strawberrySeedBtn.node.active = true;
        this.milkCowBtn.node.active = true;
        this.yieldBtn.node.active = false;
        this.nameLb.string = "";
        this.nameLb.node.active = false;
        this.yieldContainLb.string = "";
        this.yieldContainLb.node.active = false;
        this.cropLb.string = "";
        this.cropLb.node.active = false;
        this.timeLb.string = "";
        this.timeLb.node.active = false;
        this.workerSprite.node.active = false;
        this.Sprite.node.active = false;
        this.workingIntervalLb.string = "";
        this.workingIntervalLb.node.active = false;
        this.land.plantType = null;
        this.land.cattleType = null;
        this.land.time = 0;
        this.land.isEmpty = true;
        this.land.landState = LandState.Empty;
        //this.land.currentAsset = null;
        this.land.workerAction = WorkerAction.TomatoPlant;
    };
    LandUI.prototype.enableLand = function () {
        this.tomatoSeedBtn.interactable =
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number > 0;
        this.blueberrySeedBtn.interactable =
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number > 0;
        this.strawberrySeedBtn.interactable =
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number > 0;
        this.milkCowBtn.interactable =
            UIManager_1.default.instance.gameController.model.storage.milkCow.number > 0;
    };
    LandUI.prototype.enableWorker = function () {
        this.setWorkerSprite();
        this.workerSprite.node.active = true;
        UIManager_1.default.instance.storageUI.updateUI();
        this.updateUI();
        this.workingIntervalLb.node.active = true;
    };
    LandUI.prototype.disableWorker = function () {
        if (this.land.workingTime != 0) {
            this.land.workingTime = 0;
            this.workerSprite.node.active = false;
            UIManager_1.default.instance.gameController.model.storage.workingWorkerNumber -= 1;
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            this.workingIntervalLb.node.active = false;
            this.land.isReadyToWork = false;
        }
    };
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "tomatoSeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "blueberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "strawberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "milkCowBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "yieldBtn", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "timeLb", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "yieldContainLb", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "cropLb", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "yieldButtonLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], LandUI.prototype, "workerSprite", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "workingIntervalLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], LandUI.prototype, "Sprite", void 0);
    LandUI = __decorate([
        ccclass
    ], LandUI);
    return LandUI;
}(cc.Component));
exports.default = LandUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBSzRCO0FBR3RCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQVksU0FNWDtBQU5ELFdBQVksU0FBUztJQUNuQixtREFBUyxDQUFBO0lBQ1QsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCw2Q0FBTSxDQUFBO0lBQ04sK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU1wQjtBQUNELElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQiw2QkFBYyxDQUFBO0lBQ2Qsa0NBQW1CLENBQUE7SUFDbkIsNEJBQWEsQ0FBQTtJQUNiLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUNELElBQVksWUFRWDtBQVJELFdBQVksWUFBWTtJQUN0Qix5REFBUyxDQUFBO0lBQ1QsdURBQVEsQ0FBQTtJQUNSLDZEQUFXLENBQUE7SUFDWCxtRUFBYyxDQUFBO0lBQ2QscUVBQWUsQ0FBQTtJQUNmLHVFQUFnQixDQUFBO0lBQ2hCLCtEQUFZLENBQUE7QUFDZCxDQUFDLEVBUlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFRdkI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWtmQztRQWhmQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxzQkFBZ0IsR0FBYyxJQUFJLENB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bnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcbmltcG9ydCB7XG4gIENhdHRsZUNvbmZpZ3MsXG4gIEZpcnN0Q29uZmlncyxcbiAgTGFuZENvbmZpZ3MsXG4gIFBsYW50Q29uZmlncyxcbn0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHsgTGFuZCwgVG9tYXRvU2VlZCB9IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCBlbnVtIExhbmRTdGF0ZSB7XG4gIFVuZGVmaW5lZCxcbiAgRW1wdHksXG4gIFBsYW50LFxuICBDYXR0bGUsXG4gIEhhcnZlc3QsXG59XG5leHBvcnQgZW51bSBZZWlsZEFjdGlvbiB7XG4gIFVuZGVmaW5lZCA9IFwiXCIsXG4gIEhhcnZlc3QgPSBcIkhhcnZlc3RcIixcbiAgTWlsayA9IFwiTWlsa1wiLFxuICBCdXRjaGVyID0gXCJCdXRjaGVyXCIsXG59XG5leHBvcnQgZW51bSBXb3JrZXJBY3Rpb24ge1xuICBVbmRlZmluZWQsXG4gIFlpZWxkaW5nLFxuICBUb21hdG9QbGFudCxcbiAgQmx1ZWJlcnJ5UGxhbnQsXG4gIFN0cmF3YmVycnlQbGFudCxcbiAgTWlsa2Nvd0xpdmVTdG9jayxcbiAgQ293TGl2ZVN0b2NrLFxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHRvbWF0b1NlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJsdWViZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHN0cmF3YmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBtaWxrQ293QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHlpZWxkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbmFtZUxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdGltZUxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgeWllbGRDb250YWluTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBjcm9wTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHlpZWxkQnV0dG9uTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICB3b3JrZXJTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgd29ya2luZ0ludGVydmFsTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgbGFuZDogTGFuZDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gIG9uTG9hZCgpIHt9XG5cbiAgc3RhcnQoKSB7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUoKTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmICh0aGlzLmxhbmQgIT0gbnVsbCkge1xuICAgICAgaWYgKCF0aGlzLmxhbmQuaXNFbXB0eSkge1xuICAgICAgICBpZiAodGhpcy5sYW5kLnRpbWUgPCAwLjUpIHtcbiAgICAgICAgICBpZiAodGhpcy5sYW5kLmNyb3AgPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3QpO1xuXG4gICAgICAgICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkICs9IDE7XG4gICAgICAgICAgICB0aGlzLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLllpZWxkaW5nO1xuICAgICAgICAgICAgdGhpcy5sYW5kLmNyb3AgLT0gMTtcbiAgICAgICAgICAgIHRoaXMubGFuZC50aW1lID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZC5jdXJyZW50QXNzZXQuaGFydmVzdEludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuSGFydmVzdDtcbiAgICAgICAgICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG4gICAgICAgICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgICAgICAgdGhpcy5EaXNwbGF5VUkoKTtcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYW5kLnRpbWUgPiAwKSB7XG4gICAgICAgICAgdGhpcy5sYW5kLnRpbWUgLT1cbiAgICAgICAgICAgIGR0ICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGFuZC53b3JraW5nVGltZSA+IDApIHtcbiAgICAgICAgdGhpcy5sYW5kLndvcmtpbmdUaW1lIC09IGR0O1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIC8vdGhpcy5sYW5kLmlzUmVhZHlUb1dvcmsgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sYW5kLndvcmtpbmdUaW1lIDwgMCkge1xuICAgICAgICAvL3RoaXMubGFuZC5pc1JlYWR5VG9Xb3JrID0gZmFsc2U7XG5cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2VyLldvcmsoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICB0aGlzLmxhbmQud29ya2VyQWN0aW9uXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdWJsaWMgRGlzcGxheVVJKCkge1xuICAgIHN3aXRjaCAodGhpcy5sYW5kLmxhbmRTdGF0ZSkge1xuICAgICAgY2FzZSBMYW5kU3RhdGUuRW1wdHk6XG4gICAgICAgIHRoaXMucmVzZXRVSSgpO1xuICAgICAgICB0aGlzLnNldHVwVUkoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICAgIHRoaXMubGFuZC5pc1JlYWR5VG9Xb3JrID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5udW1iZXIgPiAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkhhcnZlc3Q6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICAgIHRoaXMubGFuZC5pc1JlYWR5VG9Xb3JrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5QbGFudDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5DYXR0bGU6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgdGhpcy5sYW5kLmlzUmVhZHlUb1dvcmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZXR1cFVJKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tUb21hdG9TZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0JsdWViZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTdHJhd2JlcnJ5U2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tNaWxrQ293QnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgLy90aGlzLmhhcnZlc3RCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMueWllbGRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1lpZWxkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcInNldHVwIExhbmRVSSBEb25lISEhIVwiKTtcbiAgfVxuICBwdWJsaWMgdXBkYXRlVUkoKSB7XG4gICAgdGhpcy5zZXRUaW1lTGIodGhpcy5sYW5kLnRpbWUpO1xuICAgIHRoaXMuc2V0Q3JvcExiKHRoaXMubGFuZC5jcm9wKTtcbiAgICB0aGlzLnNldFdvcmtpbmdJbnRlcnZhbExiKHRoaXMubGFuZC53b3JraW5nVGltZSk7XG4gICAgdGhpcy5zZXRZaWVsZENvbnRhaW5MYih0aGlzLmxhbmQuY29udGFpbllpZWxkKTtcbiAgICBpZiAodGhpcy5sYW5kLnRpbWUgPiAwKSB7XG4gICAgICBpZiAodGhpcy5sYW5kLmxhbmRTdGF0ZSA9PSBMYW5kU3RhdGUuUGxhbnQpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmxhbmQucGxhbnRUeXBlKSB7XG4gICAgICAgICAgY2FzZSBQbGFudFR5cGUudG9tYXRvU2VlZDpcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKFBsYW50Q29uZmlncy50b21hdG9zZWVkLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXROYW1lTGIoUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFBsYW50VHlwZS5ibHVlYmVycnlTZWVkOlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgUGxhbnRUeXBlLnN0cmF3YmVycnlTZWVkOlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXROYW1lTGIoUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGFuZC5sYW5kU3RhdGUgPT0gTGFuZFN0YXRlLkNhdHRsZSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubGFuZC5jYXR0bGVUeXBlKSB7XG4gICAgICAgICAgY2FzZSBDYXR0bGVUeXBlLkNvdzpcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKENhdHRsZUNvbmZpZ3MuY293Lm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXROYW1lTGIoQ2F0dGxlQ29uZmlncy5jb3cubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIENhdHRsZVR5cGUuTWlsa2NvdzpcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMubmFtZUxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMudGltZUxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMueWllbGRDb250YWluTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5jcm9wTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgfVxuXG4gICAgdGhpcy55aWVsZEJ0bi5ub2RlLmFjdGl2ZSA9XG4gICAgICAodGhpcy5sYW5kLnBsYW50VHlwZSAhPSBudWxsIHx8IHRoaXMubGFuZC5jYXR0bGVUeXBlICE9IG51bGwpICYmXG4gICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkID4gMDtcbiAgICBpZiAodGhpcy55aWVsZEJ0bi5ub2RlLmFjdGl2ZSkge1xuICAgICAgc3dpdGNoICh0aGlzLmxhbmQuY3VycmVudEFzc2V0KSB7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uSGFydmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5IYXJ2ZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5IYXJ2ZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3c6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLk1pbGs7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293OlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5CdXRjaGVyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tUb21hdG9TZWVkQnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA+IDApIHtcbiAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYW5kLnBsYW50VHlwZSA9IFBsYW50VHlwZS50b21hdG9TZWVkO1xuICAgICAgdGhpcy5sYW5kLnRpbWUgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkO1xuXG4gICAgICBsZXQgbWF4SGFydmVzdCA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIHRoaXMubGFuZC5jcm9wID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgdGhpcy5sYW5kLmNyb3AgKz1cbiAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgIG1heEhhcnZlc3QgKlxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAtIG1heEhhcnZlc3Q7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyIC09IDE7XG4gICAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLlBsYW50O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICB9XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgb25DbGlja0JsdWViZXJyeVNlZWRCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPiAwXG4gICAgKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5sYW5kLnRpbWUgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgIHRoaXMubGFuZC5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmxhbmQucGxhbnRUeXBlID0gUGxhbnRUeXBlLmJsdWViZXJyeVNlZWQ7XG4gICAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDtcbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgdGhpcy5sYW5kLmNyb3AgKz1cbiAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgIG1heEhhcnZlc3QgKlxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAtIG1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgfVxuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5EaXNwbGF5VUkoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIG9uQ2xpY2tTdHJhd2JlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPiAwXG4gICAgKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5sYW5kLnRpbWUgPSBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYW5kLnBsYW50VHlwZSA9IFBsYW50VHlwZS5zdHJhd2JlcnJ5U2VlZDtcbiAgICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDtcbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgdGhpcy5sYW5kLmNyb3AgKz1cbiAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgIG1heEhhcnZlc3QgKlxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAtIG1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgLT0gMTtcbiAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgIH1cbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgfVxuICBvbkNsaWNrTWlsa0Nvd0J0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPiAwKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5sYW5kLnRpbWUgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYW5kLmNhdHRsZVR5cGUgPSBDYXR0bGVUeXBlLk1pbGtjb3c7XG4gICAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdztcbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgdGhpcy5sYW5kLmNyb3AgKz1cbiAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgIG1heEhhcnZlc3QgKlxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAtIG1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5DYXR0bGU7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgIH1cbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgfVxuICBvbkNsaWNrWWllbGRCdG4oKSB7XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICBzd2l0Y2ggKHRoaXMubGFuZC5jdXJyZW50QXNzZXQpIHtcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkVG9tYXRvKFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkQmx1ZWJlcnJ5KFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZFN0cmF3YmVycnkoXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293OlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRNaWxrKFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293OlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCZWVmKFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSB0aGlzLmxhbmQucGxhbnRUeXBlXG4gICAgICA/IExhbmRTdGF0ZS5QbGFudFxuICAgICAgOiBMYW5kU3RhdGUuQ2F0dGxlO1xuICAgIGlmICh0aGlzLmxhbmQuY3JvcCA9PSAwKSB7XG4gICAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICAgICAgdGhpcy5EaXNwbGF5VUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZSgpO1xuICB9XG4gIG9uQ2xpY2tNaWxrQnRuKCkge1xuICAgIHRoaXMucmVzZXRVSSgpO1xuICB9XG4gIHNldE5hbWVMYihuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBuYW1lO1xuICB9XG4gIHNldFlpZWxkQ29udGFpbkxiKHlpZWxkQ29udGFpbjogbnVtYmVyKSB7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5zdHJpbmcgPSB5aWVsZENvbnRhaW4udG9TdHJpbmcoKTtcbiAgfVxuICBzZXRDcm9wTGIoY3JvcDogbnVtYmVyKSB7XG4gICAgdGhpcy5jcm9wTGIuc3RyaW5nID0gY3JvcC50b1N0cmluZygpO1xuICB9XG4gIHNldFdvcmtpbmdJbnRlcnZhbExiKHdvcmtpbmdUaW1lOiBudW1iZXIpIHtcbiAgICBpZiAod29ya2luZ1RpbWUgPCAwKSB7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IFwiMHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IF93b3JraW5nVGltZSA9IHBhcnNlSW50KHdvcmtpbmdUaW1lLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5zdHJpbmcgPSBfd29ya2luZ1RpbWUudG9TdHJpbmcoKSArIFwic1wiO1xuICAgIH1cbiAgfVxuICBzZXRUaW1lTGIodGltZTogbnVtYmVyKSB7XG4gICAgaWYgKHRpbWUgPCAwKSB7XG4gICAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBcIjBzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBfdGltZSA9IHBhcnNlSW50KHRpbWUudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBfdGltZS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgfVxuICB9XG5cbiAgc2V0V29ya2VyU3ByaXRlKCkge1xuICAgIHRoaXMubG9hZEltYWdlKFwiTWlkZGxlXCIsIHRoaXMud29ya2VyU3ByaXRlKTtcbiAgfVxuICBzZXRTcHJpdGUoaW1hZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvYWRJbWFnZShpbWFnZU5hbWUsIHRoaXMuU3ByaXRlKTtcbiAgfVxuXG4gIGxvYWRJbWFnZSA9IChpbWFnZU5hbWU6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gYGltYWdlcy8ke2ltYWdlTmFtZX1gO1xuICAgIGlmIChpbWFnZU5hbWUgPT0gXCJcIikge1xuICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNjLmVycm9yKGBLaMO0bmcgdGjhu4MgbG9hZCDhuqNuaDogJHtwYXRofWAsIGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgIH0pO1xuICB9O1xuICByZXNldFVJKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMubmFtZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMueWllbGRDb250YWluTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNyb3BMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMuY3JvcExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5TcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5sYW5kLnBsYW50VHlwZSA9IG51bGw7XG4gICAgdGhpcy5sYW5kLmNhdHRsZVR5cGUgPSBudWxsO1xuXG4gICAgdGhpcy5sYW5kLnRpbWUgPSAwO1xuICAgIHRoaXMubGFuZC5pc0VtcHR5ID0gdHJ1ZTtcblxuICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG5cbiAgICAvL3RoaXMubGFuZC5jdXJyZW50QXNzZXQgPSBudWxsO1xuICAgIHRoaXMubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gIH1cblxuICBlbmFibGVMYW5kKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPiAwO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPiAwO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5taWxrQ293QnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm51bWJlciA+IDA7XG4gIH1cblxuICBlbmFibGVXb3JrZXIoKSB7XG4gICAgdGhpcy5zZXRXb3JrZXJTcHJpdGUoKTtcbiAgICB0aGlzLndvcmtlclNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZVdvcmtlcigpIHtcbiAgICBpZiAodGhpcy5sYW5kLndvcmtpbmdUaW1lICE9IDApIHtcbiAgICAgIHRoaXMubGFuZC53b3JraW5nVGltZSA9IDA7XG4gICAgICB0aGlzLndvcmtlclNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciAtPSAxO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/StoreUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66f8f5D91JEoIIs+D0vM++r', 'StoreUI');
// scripts/ui/StoreUI.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIManager_1 = require("../Manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StoreUI = /** @class */ (function (_super) {
    __extends(StoreUI, _super);
    function StoreUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buyTomatoSeedBtn = null;
        _this.buyBlueberrySeedBtn = null;
        _this.buyStrawberrySeedBtn = null;
        _this.buyMilkCowBtn = null;
        _this.buyWorkerBtn = null;
        _this.upgradeMachineBtn = null;
        _this.buyLandBtn = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StoreUI.prototype.start = function () { };
    // update (dt) {}
    StoreUI.prototype.setupUI = function () {
        this.buyTomatoSeedBtn.node.active = true;
        this.buyTomatoSeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyTomatoSeedBtn, this);
        this.buyBlueberrySeedBtn.node.active = true;
        this.buyBlueberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyBlueberrySeedBtn, this);
        this.buyStrawberrySeedBtn.node.active = true;
        this.buyStrawberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyStrawberrySeedBtn, this);
        this.buyMilkCowBtn.node.active = true;
        this.buyMilkCowBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyMilkcowBtn, this);
        this.buyWorkerBtn.node.active = true;
        this.buyWorkerBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyWorkerBtn, this);
        this.upgradeMachineBtn.node.active = true;
        this.upgradeMachineBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickUpgradeMachineBtn, this);
        this.buyLandBtn.node.active = true;
        this.buyLandBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyLandBtn, this);
        console.log("setup UI Done!!!!");
    };
    StoreUI.prototype.updateUI = function () { };
    StoreUI.prototype.resetUI = function () { };
    StoreUI.prototype.onClickBuyTomatoSeedBtn = function () {
        console.log("onClickBuyTomatoSeedBtn!!!!");
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyTomatoSeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    StoreUI.prototype.onClickBuyBlueberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyBlueberrySeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    StoreUI.prototype.onClickBuyStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyStrawberrySeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    StoreUI.prototype.onClickBuyMilkcowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.milkCow.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyMilkCow();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    StoreUI.prototype.onClickBuyWorkerBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.worker.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.useWorkerForQueue3();
        }
    };
    StoreUI.prototype.onClickUpgradeMachineBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.machine.upgradePrice) {
            UIManager_1.default.instance.gameController.model.store.upgradeMachine();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StoreUI.prototype.onClickBuyLandBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.land.buyPrice &&
            UIManager_1.default.instance.gameController.model.storage.land.number < 9) {
            UIManager_1.default.instance.gameController.model.store.buyLand();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.updateLand(UIManager_1.default.instance.gameController.model.storage.land.number - 1);
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyTomatoSeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyBlueberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyStrawberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyMilkCowBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyWorkerBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "upgradeMachineBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyLandBtn", void 0);
    StoreUI = __decorate([
        ccclass
    ], StoreUI);
    return StoreUI;
}(cc.Component));
exports.default = StoreUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1N0b3JlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsa0RBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBcUpDO1FBbkpDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFdEMsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBRXZDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFjLElBQUksQ0FBQzs7SUF1SS9CLENBQUM7SUFySUMsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLGlCQUFpQjtJQUVWLHlCQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQzNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0IsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDOUIsRUFBRSxDQUFDLElBQUks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QUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4RCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUMzQixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDaEUsQ0FBQztZQUNGLG1CQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBbEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDbUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2dCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1M7SUFkVixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBcUozQjtJQUFELGNBQUM7Q0FySkQsQUFxSkMsQ0FySm9DLEVBQUUsQ0FBQyxTQUFTLEdBcUpoRDtrQkFySm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBidXlUb21hdG9TZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBidXlCbHVlYmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBidXlTdHJhd2JlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5TWlsa0Nvd0J0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5V29ya2VyQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICB1cGdyYWRlTWFjaGluZUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5TGFuZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHt9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cblxuICBwdWJsaWMgc2V0dXBVSSgpIHtcbiAgICB0aGlzLmJ1eVRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5VG9tYXRvU2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5VG9tYXRvU2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYnV5Qmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5idXlCbHVlYmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tCdXlCbHVlYmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5idXlTdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5idXlTdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5U3RyYXdiZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJ1eU1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5TWlsa0Nvd0J0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5TWlsa2Nvd0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYnV5V29ya2VyQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1eVdvcmtlckJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5V29ya2VyQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy51cGdyYWRlTWFjaGluZUJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy51cGdyYWRlTWFjaGluZUJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrVXBncmFkZU1hY2hpbmVCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJ1eUxhbmRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5TGFuZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5TGFuZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwic2V0dXAgVUkgRG9uZSEhISFcIik7XG4gIH1cbiAgdXBkYXRlVUkoKSB7fVxuICByZXNldFVJKCkge31cbiAgb25DbGlja0J1eVRvbWF0b1NlZWRCdG4oKSB7XG4gICAgY29uc29sZS5sb2coXCJvbkNsaWNrQnV5VG9tYXRvU2VlZEJ0biEhISFcIik7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ29sZCA+PVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eVRvbWF0b1NlZWQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZmluZExhbmRGb3JQbGFudCgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5Qmx1ZWJlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmUuYnV5Qmx1ZWJlcnJ5U2VlZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5maW5kTGFuZEZvclBsYW50KCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tCdXlTdHJhd2JlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eVN0cmF3YmVycnlTZWVkKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmZpbmRMYW5kRm9yUGxhbnQoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja0J1eU1pbGtjb3dCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ29sZCA+PVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eU1pbGtDb3coKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZmluZExhbmRGb3JQbGFudCgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5V29ya2VyQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrVXBncmFkZU1hY2hpbmVCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ29sZCA+PVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2VcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yZS51cGdyYWRlTWFjaGluZSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5TGFuZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQuYnV5UHJpY2UgJiZcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyIDwgOVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eUxhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51cGRhdGVMYW5kKFxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLm51bWJlciAtIDFcbiAgICAgICk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZmluZExhbmRGb3JQbGFudCgpO1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd7dfM9Pr1MlYFc6gEuLOqN', 'UIManager');
// scripts/Manager/UIManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController_1 = require("../controllers/GameController");
var LandUI_1 = require("../ui/LandUI");
var StorageUI_1 = require("../ui/StorageUI");
var StoreUI_1 = require("../ui/StoreUI");
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.landUIArray = [];
        _this.storeUI = null;
        _this.storageUI = null;
        _this.landArrayClones = [];
        _this.time = 0;
        return _this;
    }
    UIManager_1 = UIManager;
    // LIFE-CYCLE CALLBACKS:
    UIManager.prototype.onLoad = function () {
        if (UIManager_1.instance == null) {
            UIManager_1.instance = this;
        }
        this.gameController = new GameController_1.GameController();
    };
    UIManager.prototype.start = function () {
        this.setupUI();
    };
    UIManager.prototype.update = function (dt) {
        /*
        if (this.time > 0) {
          this.time -= dt;
        } else if (this.time < 0) {
          this.useWorkerForQueue3();
          this.time = 0;
        } else {
        }
        */
        if (this.gameController.model.queueLandArray.length > 0 &&
            this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber) > 0) {
            this.useWorker(this.gameController.model.queueLandArray[0]);
            this.gameController.model.queueLandArray.splice(0, 1);
        }
    };
    UIManager.prototype.setupUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gameController.model.setData()];
                    case 1:
                        _a.sent();
                        this.gameController.model.newLand();
                        this.createLand();
                        this.useWorkerForQueue3();
                        this.storageUI.setupUI();
                        this.storageUI.updateUI();
                        this.storeUI.setupUI();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.useWorkerForQueue = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber) > 0) {
                if (this.gameController.model.queueLandArray.length > 0) {
                    this.useWorker(this.gameController.model.queueLandArray[0]);
                    this.gameController.model.queueLandArray.splice(0, 1);
                }
                else {
                    if (this.landUIArray[i].land.isReadyToWork) {
                        this.useWorker(this.landUIArray[i]);
                    }
                }
            }
            else {
                if (this.landUIArray[i].land.isReadyToWork) {
                    this.gameController.model.queueLandArray.push(this.landUIArray[i]);
                }
            }
        }
    };
    UIManager.prototype.useWorkerForQueue2 = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber) > 0) {
                if (this.landUIArray[i].land.isReadyToWork) {
                    this.useWorker(this.landUIArray[i]);
                }
            }
            else {
                this.time = this.checkMinWorkingTime();
            }
        }
    };
    UIManager.prototype.pushToQueue = function (landUI) {
        if (landUI.land.isReadyToWork &&
            !this.gameController.model.queueLandArray.includes(landUI)) {
            this.gameController.model.queueLandArray.push(landUI);
        }
    };
    UIManager.prototype.useWorkerForQueue3 = function () {
        for (var i = 0; i < this.gameController.model.queueLandArray.length; i++) { }
    };
    UIManager.prototype.checkMinWorkingTime = function () {
        var min = this.landUIArray[0].land.workingTime;
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.landUIArray[i].land.workingTime < min) {
                min = this.landUIArray[i].land.workingTime;
            }
        }
        return min;
    };
    UIManager.prototype.useWorker = function (landUi) {
        this.gameController.model.storage.assignWorker(landUi);
        this.gameController.model.storage.workingWorkerNumber += 1;
        landUi.land.workingTime =
            this.gameController.model.storage.worker.workingInterval * 10;
        landUi.land.isReadyToWork = false;
        landUi.enableWorker();
    };
    UIManager.prototype.createLand = function () {
        var _this = this;
        /*this.landArrayClones = Array.from({ length: 9 }, () => ({
          ...this.gameController.model.storage.land,
        }));*/
        this.landArrayClones = Array.from({ length: 9 }, function () {
            return _this.gameController.model.storage.land.clone();
        });
        cc.log(this.landArrayClones);
        for (var i = 0; i < this.gameController.model.storage.land.number; i++) {
            this.updateLand(i);
            this.gameController.model.queueLandArray.push(this.landUIArray[i]);
        }
    };
    UIManager.prototype.updateLand = function (index) {
        this.landUIArray[index].land = this.landArrayClones[index];
        this.landUIArray[index].enabled = true;
        this.landUIArray[index].DisplayUI();
        this.landUIArray[index].enableLand();
    };
    UIManager.prototype.enableAllLand = function () {
        for (var i = 0; i < this.gameController.model.storage.land.number; i++) {
            this.landUIArray[i].enableLand();
        }
    };
    UIManager.prototype.findLandForPlant = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.landUIArray[i].enabled) {
                if (this.landUIArray[i].land.currentAsset.number > 0 &&
                    this.landUIArray[i].land.isReadyToWork) {
                    this.pushToQueue(this.landUIArray[i]);
                    this.useWorkerForQueue3();
                }
            }
        }
    };
    var UIManager_1;
    __decorate([
        property(LandUI_1.default)
    ], UIManager.prototype, "landUIArray", void 0);
    __decorate([
        property(StoreUI_1.default)
    ], UIManager.prototype, "storeUI", void 0);
    __decorate([
        property(StorageUI_1.default)
    ], UIManager.prototype, "storageUI", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLGdFQUErRDtBQUUvRCx1Q0FBa0M7QUFDbEMsNkNBQXdDO0FBQ3hDLHlDQUFvQztBQUdwQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWdLQztRQS9KbUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBR2pELHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBeUpuQixDQUFDO2tCQWhLb0IsU0FBUztJQVM1Qix3QkFBd0I7SUFFeEIsMEJBQU0sR0FBTjtRQUNFLElBQUksV0FBUyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDOUIsV0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmOzs7Ozs7OztVQVFFO1FBQ0YsSUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDbkQsSUFBSSxDQUFD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U0FDRjtJQUNILENBQUM7O0lBOUppQjtRQUFqQixRQUFRLENBQUMsZ0JBQU0sQ0FBQztrREFBNEI7SUFDMUI7UUFBbEIsUUFBUSxDQUFDLGlCQUFPLENBQUM7OENBQXlCO0lBQ3RCO1FBQXBCLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUE2QjtJQUg5QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ0s3QjtJQUFELGdCQUFDO0NBaEtELEFBZ0tDLENBaEtzQyxFQUFFLENBQUMsU0FBUyxHQWdLbEQ7a0JBaEtvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9HYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgTGFuZCB9IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUkgZnJvbSBcIi4uL3VpL0xhbmRVSVwiO1xuaW1wb3J0IFN0b3JhZ2VVSSBmcm9tIFwiLi4vdWkvU3RvcmFnZVVJXCI7XG5pbXBvcnQgU3RvcmVVSSBmcm9tIFwiLi4vdWkvU3RvcmVVSVwiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KExhbmRVSSkgbGFuZFVJQXJyYXk6IExhbmRVSVtdID0gW107XG4gIEBwcm9wZXJ0eShTdG9yZVVJKSBzdG9yZVVJOiBTdG9yZVVJID0gbnVsbDtcbiAgQHByb3BlcnR5KFN0b3JhZ2VVSSkgc3RvcmFnZVVJOiBTdG9yYWdlVUkgPSBudWxsO1xuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBVSU1hbmFnZXI7XG4gIHB1YmxpYyBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIGxhbmRBcnJheUNsb25lczogTGFuZFtdID0gW107XG4gIHRpbWU6IG51bWJlciA9IDA7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnNldHVwVUkoKTtcbiAgfVxuXG4gIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgLypcbiAgICBpZiAodGhpcy50aW1lID4gMCkge1xuICAgICAgdGhpcy50aW1lIC09IGR0O1xuICAgIH0gZWxzZSBpZiAodGhpcy50aW1lIDwgMCkge1xuICAgICAgdGhpcy51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gICAgKi9cbiAgICBpZiAoXG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5Lmxlbmd0aCA+IDAgJiZcbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JrZXJJZGxlKFxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlclxuICAgICAgKSA+IDBcbiAgICApIHtcbiAgICAgIHRoaXMudXNlV29ya2VyKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXlbMF0pO1xuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIHNldHVwVUkoKSB7XG4gICAgYXdhaXQgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zZXREYXRhKCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5uZXdMYW5kKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUxhbmQoKTtcblxuICAgIHRoaXMudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgdGhpcy5zdG9yYWdlVUkuc2V0dXBVSSgpO1xuICAgIHRoaXMuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG5cbiAgICB0aGlzLnN0b3JlVUkuc2V0dXBVSSgpO1xuICB9XG4gIHVzZVdvcmtlckZvclF1ZXVlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ2V0V29ya2VySWRsZShcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlclxuICAgICAgICApID4gMFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5WzBdKTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmlzUmVhZHlUb1dvcmspIHtcbiAgICAgICAgICAgIHRoaXMudXNlV29ya2VyKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC5pc1JlYWR5VG9Xb3JrKSB7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5wdXNoKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlV29ya2VyRm9yUXVldWUyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ2V0V29ya2VySWRsZShcbiAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlclxuICAgICAgICApID4gMFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQuaXNSZWFkeVRvV29yaykge1xuICAgICAgICAgIHRoaXMudXNlV29ya2VyKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmNoZWNrTWluV29ya2luZ1RpbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVzaFRvUXVldWUobGFuZFVJOiBMYW5kVUkpIHtcbiAgICBpZiAoXG4gICAgICBsYW5kVUkubGFuZC5pc1JlYWR5VG9Xb3JrICYmXG4gICAgICAhdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5pbmNsdWRlcyhsYW5kVUkpXG4gICAgKSB7XG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnF1ZXVlTGFuZEFycmF5LnB1c2gobGFuZFVJKTtcbiAgICB9XG4gIH1cbiAgdXNlV29ya2VyRm9yUXVldWUzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5sZW5ndGg7IGkrKykge31cbiAgfVxuXG4gIGNoZWNrTWluV29ya2luZ1RpbWUoKTogbnVtYmVyIHtcbiAgICBsZXQgbWluOiBudW1iZXIgPSB0aGlzLmxhbmRVSUFycmF5WzBdLmxhbmQud29ya2luZ1RpbWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmRVSUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLndvcmtpbmdUaW1lIDwgbWluKSB7XG4gICAgICAgIG1pbiA9IHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC53b3JraW5nVGltZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIHVzZVdvcmtlcihsYW5kVWk6IExhbmRVSSkge1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hc3NpZ25Xb3JrZXIobGFuZFVpKTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciArPSAxO1xuICAgIGxhbmRVaS5sYW5kLndvcmtpbmdUaW1lID1cbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsICogMTA7XG4gICAgbGFuZFVpLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgIGxhbmRVaS5lbmFibGVXb3JrZXIoKTtcbiAgfVxuICBjcmVhdGVMYW5kKCkge1xuICAgIC8qdGhpcy5sYW5kQXJyYXlDbG9uZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+ICh7XG4gICAgICAuLi50aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubGFuZCxcbiAgICB9KSk7Ki9cbiAgICB0aGlzLmxhbmRBcnJheUNsb25lcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDkgfSwgKCkgPT5cbiAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLmNsb25lKClcbiAgICApO1xuICAgIGNjLmxvZyh0aGlzLmxhbmRBcnJheUNsb25lcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubGFuZC5udW1iZXI7IGkrKykge1xuICAgICAgdGhpcy51cGRhdGVMYW5kKGkpO1xuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5wdXNoKHRoaXMubGFuZFVJQXJyYXlbaV0pO1xuICAgIH1cbiAgfVxuICB1cGRhdGVMYW5kKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxhbmRVSUFycmF5W2luZGV4XS5sYW5kID0gdGhpcy5sYW5kQXJyYXlDbG9uZXNbaW5kZXhdO1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLkRpc3BsYXlVSSgpO1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmVuYWJsZUxhbmQoKTtcbiAgfVxuICBlbmFibGVBbGxMYW5kKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyOyBpKyspIHtcbiAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlTGFuZCgpO1xuICAgIH1cbiAgfVxuICBmaW5kTGFuZEZvclBsYW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kVUlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlZCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmN1cnJlbnRBc3NldC5udW1iZXIgPiAwICYmXG4gICAgICAgICAgdGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmlzUmVhZHlUb1dvcmtcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5wdXNoVG9RdWV1ZSh0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
