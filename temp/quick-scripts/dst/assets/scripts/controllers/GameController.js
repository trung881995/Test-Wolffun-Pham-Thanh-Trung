
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
var GameSaveManager_1 = require("../Manager/GameSaveManager");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* constructor() {
      super();
      this.model = new GameModel();
  
      this.view = new GameView(this);
  
    }
    */
    GameController.prototype.init = function (model, view) {
        this.model = model;
        this.view = view;
    };
    GameController.prototype.update = function (dt) {
        throw new Error("Method not implemented.");
    };
    GameController.prototype.setup = function () {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function () {
            _this.saveGame();
        });
    };
    GameController.prototype.saveGame = function () {
        var data = {
            gold: this.model.getSaveGoldData(),
            tomatoSeed: this.model.getSaveTomatoSeedData(),
            blueberrySeed: this.model.getSaveBlueberrySeedData(),
            strawberrySeed: this.model.getSaveStrawberrySeedData(),
            milkCow: this.model.getSaveMilkCowData(),
            worker: this.model.getSaveWorkerData(),
            machine: this.model.getSaveMachineData(),
            tomato: this.model.getSaveTomatoData(),
            blueberry: this.model.getSaveBlueberryData(),
            strawberry: this.model.getSaveStrawberryData(),
            milk: this.model.getSaveMilkData(),
            timestamp: this.model.getSaveTimeStampData(),
            land: this.model.getSaveLandData(),
            workingWorkerNumber: this.model.getSaveWorkingWorkerNumberData(),
            queueLandArray: this.model.getSaveQueueLandArrayData(),
            landArray: this.model.getSavelandArrayData(),
        };
        GameSaveManager_1.GameSaveManager.save(data);
    };
    GameController.prototype.loadGame = function () {
        var saved = GameSaveManager_1.GameSaveManager.load();
        if (saved) {
            this.model.loadGoldFromSave(saved.gold);
            this.model.loadTomatoSeedFromSave(saved.tomatoSeed);
            this.model.loadBlueberrySeedFromSave(saved.blueberrySeed);
            this.model.loadStrawberrySeedFromSave(saved.strawberrySeed);
            this.model.loadMilkCowFromSave(saved.milkCow);
            this.model.loadWokerFromSave(saved.worker);
            this.model.loadMachineFromSave(saved.machine);
            this.model.loadTomatoFromSave(saved.tomato);
            this.model.loadBlueberryFromSave(saved.blueberry);
            this.model.loadStrawberryFromSave(saved.strawberry);
            this.model.loadMilkFromSave(saved.milk);
            this.model.loadTimeStampFromSave(saved.timestamp);
            this.model.loadLandFromSave(saved.land);
            this.model.loadWorkingWorkerNumberFromSave(saved.workingWorkerNumber);
            this.model.loadQueueLandArrayFromSave(saved.queueLandArray);
            this.model.loadLandArrayFromSave(saved.landArray);
            var offlineDuration = Date.now() - this.model.storage.timestamp;
            this.updateOfflineProgress(offlineDuration);
        }
        GameSaveManager_1.GameSaveManager.clear();
    };
    GameController.prototype.updateOfflineProgress = function (duration) { };
    GameController.prototype.calculateLand = function (duration) { };
    GameController.prototype.calculateWorker = function (duration) { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFHL0QsOERBQXVFO0FBR3ZFO0lBQW9DLGtDQUFtQztJQUF2RTs7SUFvRkEsQ0FBQztJQWpGQzs7Ozs7OztNQU9FO0lBQ0YsNkJBQUksR0FBSixVQUFLLEtBQWdCLEVBQUUsSUFBYztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsK0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBTSxJQUFJLEdBQWE7WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ2xDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFO1lBQzlDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFO1lBQ3BELGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFO1lBQ3RELE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO1lBRXhDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBQ3RDLE9BQU8sRUFBRSxJQUFJ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QixHQUFyQixVQUFzQixRQUFnQixJQUFHLENBQUM7SUFFMUMsc0NBQWEsR0FBYixVQUFjLFFBQWdCLElBQUcsQ0FBQztJQUNsQyx3Q0FBZSxHQUFmLFVBQWdCLFFBQWdCLElBQUcsQ0FBQztJQUN0QyxxQkFBQztBQUFELENBcEZBLEFBb0ZDLENBcEZtQywrQkFBYyxHQW9GakQ7QUFwRlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgR2FtZVZpZXcgfSBmcm9tIFwiLi4vdmlld3MvR2FtZVZpZXdcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBHYW1lU2F2ZU1hbmFnZXIsIFNhdmVEYXRhIH0gZnJvbSBcIi4uL01hbmFnZXIvR2FtZVNhdmVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBNaWxrLCBNaWxrQ293LCBUb21hdG9TZWVkIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlcjxHYW1lTW9kZWwsIEdhbWVWaWV3PiB7XG4gIG1vZGVsOiBHYW1lTW9kZWw7XG4gIHZpZXc6IEdhbWVWaWV3O1xuICAvKiBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBuZXcgR2FtZU1vZGVsKCk7XG5cbiAgICB0aGlzLnZpZXcgPSBuZXcgR2FtZVZpZXcodGhpcyk7XG5cbiAgfVxuICAqL1xuICBpbml0KG1vZGVsOiBHYW1lTW9kZWwsIHZpZXc6IEdhbWVWaWV3KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gIH1cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuICBzZXR1cCgpOiB2b2lkIHtcbiAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlR2FtZSgpO1xuICAgIH0pO1xuICB9XG4gIHNhdmVHYW1lKCkge1xuICAgIGNvbnN0IGRhdGE6IFNhdmVEYXRhID0ge1xuICAgICAgZ29sZDogdGhpcy5tb2RlbC5nZXRTYXZlR29sZERhdGEoKSxcbiAgICAgIHRvbWF0b1NlZWQ6IHRoaXMubW9kZWwuZ2V0U2F2ZVRvbWF0b1NlZWREYXRhKCksXG4gICAgICBibHVlYmVycnlTZWVkOiB0aGlzLm1vZGVsLmdldFNhdmVCbHVlYmVycnlTZWVkRGF0YSgpLFxuICAgICAgc3RyYXdiZXJyeVNlZWQ6IHRoaXMubW9kZWwuZ2V0U2F2ZVN0cmF3YmVycnlTZWVkRGF0YSgpLFxuICAgICAgbWlsa0NvdzogdGhpcy5tb2RlbC5nZXRTYXZlTWlsa0Nvd0RhdGEoKSxcblxuICAgICAgd29ya2VyOiB0aGlzLm1vZGVsLmdldFNhdmVXb3JrZXJEYXRhKCksXG4gICAgICBtYWNoaW5lOiB0aGlzLm1vZGVsLmdldFNhdmVNYWNoaW5lRGF0YSgpLFxuXG4gICAgICB0b21hdG86IHRoaXMubW9kZWwuZ2V0U2F2ZVRvbWF0b0RhdGEoKSxcbiAgICAgIGJsdWViZXJyeTogdGhpcy5tb2RlbC5nZXRTYXZlQmx1ZWJlcnJ5RGF0YSgpLFxuICAgICAgc3RyYXdiZXJyeTogdGhpcy5tb2RlbC5nZXRTYXZlU3RyYXdiZXJyeURhdGEoKSxcbiAgICAgIG1pbGs6IHRoaXMubW9kZWwuZ2V0U2F2ZU1pbGtEYXRhKCksXG5cbiAgICAgIHRpbWVzdGFtcDogdGhpcy5tb2RlbC5nZXRTYXZlVGltZVN0YW1wRGF0YSgpLFxuXG4gICAgICBsYW5kOiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kRGF0YSgpLFxuXG4gICAgICB3b3JraW5nV29ya2VyTnVtYmVyOiB0aGlzLm1vZGVsLmdldFNhdmVXb3JraW5nV29ya2VyTnVtYmVyRGF0YSgpLFxuXG4gICAgICBxdWV1ZUxhbmRBcnJheTogdGhpcy5tb2RlbC5nZXRTYXZlUXVldWVMYW5kQXJyYXlEYXRhKCksXG4gICAgICBsYW5kQXJyYXk6IHRoaXMubW9kZWwuZ2V0U2F2ZWxhbmRBcnJheURhdGEoKSxcbiAgICB9O1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKGRhdGEpO1xuICB9XG5cbiAgbG9hZEdhbWUoKSB7XG4gICAgY29uc3Qgc2F2ZWQgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZCgpO1xuICAgIGlmIChzYXZlZCkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkR29sZEZyb21TYXZlKHNhdmVkLmdvbGQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkVG9tYXRvU2VlZEZyb21TYXZlKHNhdmVkLnRvbWF0b1NlZWQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkQmx1ZWJlcnJ5U2VlZEZyb21TYXZlKHNhdmVkLmJsdWViZXJyeVNlZWQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkU3RyYXdiZXJyeVNlZWRGcm9tU2F2ZShzYXZlZC5zdHJhd2JlcnJ5U2VlZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRNaWxrQ293RnJvbVNhdmUoc2F2ZWQubWlsa0Nvdyk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRXb2tlckZyb21TYXZlKHNhdmVkLndvcmtlcik7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRNYWNoaW5lRnJvbVNhdmUoc2F2ZWQubWFjaGluZSk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRUb21hdG9Gcm9tU2F2ZShzYXZlZC50b21hdG8pO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkQmx1ZWJlcnJ5RnJvbVNhdmUoc2F2ZWQuYmx1ZWJlcnJ5KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFN0cmF3YmVycnlGcm9tU2F2ZShzYXZlZC5zdHJhd2JlcnJ5KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZE1pbGtGcm9tU2F2ZShzYXZlZC5taWxrKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFRpbWVTdGFtcEZyb21TYXZlKHNhdmVkLnRpbWVzdGFtcCk7XG5cbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmRGcm9tU2F2ZShzYXZlZC5sYW5kKTtcblxuICAgICAgdGhpcy5tb2RlbC5sb2FkV29ya2luZ1dvcmtlck51bWJlckZyb21TYXZlKHNhdmVkLndvcmtpbmdXb3JrZXJOdW1iZXIpO1xuXG4gICAgICB0aGlzLm1vZGVsLmxvYWRRdWV1ZUxhbmRBcnJheUZyb21TYXZlKHNhdmVkLnF1ZXVlTGFuZEFycmF5KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmRBcnJheUZyb21TYXZlKHNhdmVkLmxhbmRBcnJheSk7XG5cbiAgICAgIGNvbnN0IG9mZmxpbmVEdXJhdGlvbiA9IERhdGUubm93KCkgLSB0aGlzLm1vZGVsLnN0b3JhZ2UudGltZXN0YW1wO1xuICAgICAgdGhpcy51cGRhdGVPZmZsaW5lUHJvZ3Jlc3Mob2ZmbGluZUR1cmF0aW9uKTtcbiAgICB9XG4gICAgR2FtZVNhdmVNYW5hZ2VyLmNsZWFyKCk7XG4gIH1cblxuICB1cGRhdGVPZmZsaW5lUHJvZ3Jlc3MoZHVyYXRpb246IG51bWJlcikge31cblxuICBjYWxjdWxhdGVMYW5kKGR1cmF0aW9uOiBudW1iZXIpIHt9XG4gIGNhbGN1bGF0ZVdvcmtlcihkdXJhdGlvbjogbnVtYmVyKSB7fVxufVxuIl19