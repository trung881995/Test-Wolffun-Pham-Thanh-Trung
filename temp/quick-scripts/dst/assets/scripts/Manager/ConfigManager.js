
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