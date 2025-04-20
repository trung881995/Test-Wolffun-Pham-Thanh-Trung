
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
    GameController.prototype.setupUI = function () {
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
            var offlineDuration = Date.now() - this.model.storage.timestamp;
            this.updateOfflineProgress(offlineDuration);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFHL0QsOERBQXVFO0FBR3ZFO0lBQW9DLGtDQUFtQztJQUF2RTs7SUE2RUEsQ0FBQztJQTFFQzs7Ozs7OztNQU9FO0lBQ0YsNkJBQUksR0FBSixVQUFLLEtBQWdCLEVBQUUsSUFBYztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsK0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELGdDQUFPLEdBQVA7UUFBQSxpQkFJQztRQUhDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBTSxJQUFJLEdBQWE7WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ2xDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFO1lBQzlDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFO1lBQ3BELGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFO1lBQ3RELE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO1lBRXhDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBQ3RDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO1lBRXhDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBQ3RDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFO1lBQzVDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFO1lBQzlDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUVsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRTtZQUU1QyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFFbEMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRTtTQUNqRSxDQUFDO1FBQ0YsaUNBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFNLEtBQUssR0FBRyxpQ0FBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFeEMsSUFBSSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUV0RSxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCw4Q0FBcUIsR0FBckIsVUFBc0IsUUFBZ0IsSUFBRyxDQUFDO0lBRTFDLHNDQUFhLEdBQWIsVUFBYyxRQUFnQixJQUFHLENBQUM7SUFDbEMsd0NBQWUsR0FBZixVQUFnQixRQUFnQixJQUFHLENBQUM7SUFDdEMscUJBQUM7QUFBRCxDQTdFQSxBQTZFQyxDQTdFbUMsK0JBQWMsR0E2RWpEO0FBN0VZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vY29yZS9tdmMvQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL0dhbWVWaWV3XCI7XG5pbXBvcnQgeyBHYW1lTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL0dhbWVNb2RlbFwiO1xuaW1wb3J0IHsgR2FtZVNhdmVNYW5hZ2VyLCBTYXZlRGF0YSB9IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVTYXZlTWFuYWdlclwiO1xuaW1wb3J0IHsgTWlsaywgTWlsa0NvdywgVG9tYXRvU2VlZCB9IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXI8R2FtZU1vZGVsLCBHYW1lVmlldz4ge1xuICBtb2RlbDogR2FtZU1vZGVsO1xuICB2aWV3OiBHYW1lVmlldztcbiAgLyogY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsID0gbmV3IEdhbWVNb2RlbCgpO1xuXG4gICAgdGhpcy52aWV3ID0gbmV3IEdhbWVWaWV3KHRoaXMpO1xuXG4gIH1cbiAgKi9cbiAgaW5pdChtb2RlbDogR2FtZU1vZGVsLCB2aWV3OiBHYW1lVmlldyk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG4gIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgc2V0dXBVSSgpOiB2b2lkIHtcbiAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlR2FtZSgpO1xuICAgIH0pO1xuICB9XG4gIHNhdmVHYW1lKCkge1xuICAgIGNvbnN0IGRhdGE6IFNhdmVEYXRhID0ge1xuICAgICAgZ29sZDogdGhpcy5tb2RlbC5nZXRTYXZlR29sZERhdGEoKSxcbiAgICAgIHRvbWF0b1NlZWQ6IHRoaXMubW9kZWwuZ2V0U2F2ZVRvbWF0b1NlZWREYXRhKCksXG4gICAgICBibHVlYmVycnlTZWVkOiB0aGlzLm1vZGVsLmdldFNhdmVCbHVlYmVycnlTZWVkRGF0YSgpLFxuICAgICAgc3RyYXdiZXJyeVNlZWQ6IHRoaXMubW9kZWwuZ2V0U2F2ZVN0cmF3YmVycnlTZWVkRGF0YSgpLFxuICAgICAgbWlsa0NvdzogdGhpcy5tb2RlbC5nZXRTYXZlTWlsa0Nvd0RhdGEoKSxcblxuICAgICAgd29ya2VyOiB0aGlzLm1vZGVsLmdldFNhdmVXb3JrZXJEYXRhKCksXG4gICAgICBtYWNoaW5lOiB0aGlzLm1vZGVsLmdldFNhdmVNYWNoaW5lRGF0YSgpLFxuXG4gICAgICB0b21hdG86IHRoaXMubW9kZWwuZ2V0U2F2ZVRvbWF0b0RhdGEoKSxcbiAgICAgIGJsdWViZXJyeTogdGhpcy5tb2RlbC5nZXRTYXZlQmx1ZWJlcnJ5RGF0YSgpLFxuICAgICAgc3RyYXdiZXJyeTogdGhpcy5tb2RlbC5nZXRTYXZlU3RyYXdiZXJyeURhdGEoKSxcbiAgICAgIG1pbGs6IHRoaXMubW9kZWwuZ2V0U2F2ZU1pbGtEYXRhKCksXG5cbiAgICAgIHRpbWVzdGFtcDogdGhpcy5tb2RlbC5nZXRTYXZlVGltZVN0YW1wRGF0YSgpLFxuXG4gICAgICBsYW5kOiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kRGF0YSgpLFxuXG4gICAgICB3b3JraW5nV29ya2VyTnVtYmVyOiB0aGlzLm1vZGVsLmdldFNhdmVXb3JraW5nV29ya2VyTnVtYmVyRGF0YSgpLFxuICAgIH07XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoZGF0YSk7XG4gIH1cblxuICBsb2FkR2FtZSgpIHtcbiAgICBjb25zdCBzYXZlZCA9IEdhbWVTYXZlTWFuYWdlci5sb2FkKCk7XG4gICAgaWYgKHNhdmVkKSB7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRHb2xkRnJvbVNhdmUoc2F2ZWQuZ29sZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRUb21hdG9TZWVkRnJvbVNhdmUoc2F2ZWQudG9tYXRvU2VlZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRCbHVlYmVycnlTZWVkRnJvbVNhdmUoc2F2ZWQuYmx1ZWJlcnJ5U2VlZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRTdHJhd2JlcnJ5U2VlZEZyb21TYXZlKHNhdmVkLnN0cmF3YmVycnlTZWVkKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZE1pbGtDb3dGcm9tU2F2ZShzYXZlZC5taWxrQ293KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFdva2VyRnJvbVNhdmUoc2F2ZWQud29ya2VyKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZE1hY2hpbmVGcm9tU2F2ZShzYXZlZC5tYWNoaW5lKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFRvbWF0b0Zyb21TYXZlKHNhdmVkLnRvbWF0byk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRCbHVlYmVycnlGcm9tU2F2ZShzYXZlZC5ibHVlYmVycnkpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkU3RyYXdiZXJyeUZyb21TYXZlKHNhdmVkLnN0cmF3YmVycnkpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTWlsa0Zyb21TYXZlKHNhdmVkLm1pbGspO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkVGltZVN0YW1wRnJvbVNhdmUoc2F2ZWQudGltZXN0YW1wKTtcblxuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZEZyb21TYXZlKHNhdmVkLmxhbmQpO1xuXG4gICAgICB0aGlzLm1vZGVsLmxvYWRXb3JraW5nV29ya2VyTnVtYmVyRnJvbVNhdmUoc2F2ZWQud29ya2luZ1dvcmtlck51bWJlcik7XG5cbiAgICAgIGNvbnN0IG9mZmxpbmVEdXJhdGlvbiA9IERhdGUubm93KCkgLSB0aGlzLm1vZGVsLnN0b3JhZ2UudGltZXN0YW1wO1xuICAgICAgdGhpcy51cGRhdGVPZmZsaW5lUHJvZ3Jlc3Mob2ZmbGluZUR1cmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPZmZsaW5lUHJvZ3Jlc3MoZHVyYXRpb246IG51bWJlcikge31cblxuICBjYWxjdWxhdGVMYW5kKGR1cmF0aW9uOiBudW1iZXIpIHt9XG4gIGNhbGN1bGF0ZVdvcmtlcihkdXJhdGlvbjogbnVtYmVyKSB7fVxufVxuIl19