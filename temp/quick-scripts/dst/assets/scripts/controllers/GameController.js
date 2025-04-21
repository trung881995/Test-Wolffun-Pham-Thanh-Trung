
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
        cc.game.on(cc.game.EVENT_RESTART, function () {
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
        var data2 = {
            queueIndexArray: this.model.getSaveQueueIndexArrayData(),
        };
        var landData0 = {
            land_0: this.model.getSaveLand0Data(),
        };
        var landData1 = {
            land_1: this.model.getSaveLand1Data(),
        };
        var landData2 = {
            land_2: this.model.getSaveLand2Data(),
        };
        var landData3 = {
            land_3: this.model.getSaveLand3Data(),
        };
        var landData4 = {
            land_4: this.model.getSaveLand4Data(),
        };
        var landData5 = {
            land_5: this.model.getSaveLand5Data(),
        };
        var landData6 = {
            land_6: this.model.getSaveLand6Data(),
        };
        var landData7 = {
            land_7: this.model.getSaveLand7Data(),
        };
        var landData8 = {
            land_8: this.model.getSaveLand8Data(),
        };
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY, data);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY2, data2);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY3, landData0);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY4, landData1);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY5, landData2);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY6, landData3);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY7, landData4);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY8, landData5);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY9, landData6);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY10, landData7);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY11, landData8);
        console.log("game Saved!!!!!!!!!");
    };
    GameController.prototype.loadGame = function () {
        var saved = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY);
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
        var saved2 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY2);
        if (saved2) {
            this.model.loadQueueIndexArrayFromSave(saved2.queueIndexArray);
        }
        var landSaved0 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY3);
        if (landSaved0) {
            this.model.loadLand0FromSave(landSaved0.land_0);
        }
        var landSaved1 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY4);
        if (landSaved1) {
            this.model.loadLand1FromSave(landSaved1.land_1);
        }
        var landSaved2 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY5);
        if (landSaved2) {
            this.model.loadLand2FromSave(landSaved2.land_2);
        }
        var landSaved3 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY6);
        if (landSaved3) {
            this.model.loadLand3FromSave(landSaved3.land_3);
        }
        var landSaved4 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY7);
        if (landSaved4) {
            this.model.loadLand4FromSave(landSaved4.land_4);
        }
        var landSaved5 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY8);
        if (landSaved5) {
            this.model.loadLand5FromSave(landSaved5.land_5);
        }
        var landSaved6 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY9);
        if (landSaved6) {
            this.model.loadLand6FromSave(landSaved6.land_6);
        }
        var landSaved7 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY10);
        if (landSaved7) {
            this.model.loadLand7FromSave(landSaved7.land_7);
        }
        var landSaved8 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY11);
        if (landSaved8) {
            this.model.loadLand8FromSave(landSaved8.land_8);
        }
        console.log("game Loaded!!!!!!!!!");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFHL0QsOERBYW9DO0FBR3BDO0lBQW9DLGtDQUFtQztJQUF2RTs7SUFpS0EsQ0FBQztJQTdKQyw2QkFBSSxHQUFKLFVBQUssS0FBZ0IsRUFBRSxJQUFjO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCwrQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsOEJBQUssR0FBTDtRQUFBLGlCQU9DO1FBTkMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDRSxJQUFNLElBQUksR0FBYTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDbEMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUU7WUFDOUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUU7WUFDcEQsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUU7WUFDdEQsT0FBTyxFQUFF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QUFDO1NBQ2pEO1FBRUQsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLGlDQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixRQUFnQixJQUFHLENBQUM7SUFFMUMsc0NBQWEsR0FBYixVQUFjLFFBQWdCLElBQUcsQ0FBQztJQUNsQyx3Q0FBZSxHQUFmLFVBQWdCLFFBQWdCLElBQUcsQ0FBQztJQUN0QyxxQkFBQztBQUFELENBaktBLEFBaUtDLENBakttQywrQkFBYyxHQWlLakQ7QUFqS1ksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgR2FtZVZpZXcgfSBmcm9tIFwiLi4vdmlld3MvR2FtZVZpZXdcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQge1xuICBHYW1lU2F2ZU1hbmFnZXIsXG4gIFNhdmVEYXRhLFxuICBTYXZlTGFuZDBEYXRhLFxuICBTYXZlTGFuZDFEYXRhLFxuICBTYXZlTGFuZDJEYXRhLFxuICBTYXZlTGFuZDNEYXRhLFxuICBTYXZlTGFuZDREYXRhLFxuICBTYXZlTGFuZDVEYXRhLFxuICBTYXZlTGFuZDZEYXRhLFxuICBTYXZlTGFuZDdEYXRhLFxuICBTYXZlTGFuZDhEYXRhLFxuICBTYXZlUXVldWVEYXRhLFxufSBmcm9tIFwiLi4vTWFuYWdlci9HYW1lU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7IE1pbGssIE1pbGtDb3csIFRvbWF0b1NlZWQgfSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyPEdhbWVNb2RlbCwgR2FtZVZpZXc+IHtcbiAgbW9kZWw6IEdhbWVNb2RlbDtcbiAgdmlldzogR2FtZVZpZXc7XG5cbiAgaW5pdChtb2RlbDogR2FtZU1vZGVsLCB2aWV3OiBHYW1lVmlldyk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG4gIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgc2V0dXAoKTogdm9pZCB7XG4gICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsICgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZUdhbWUoKTtcbiAgICB9KTtcbiAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfUkVTVEFSVCwgKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlR2FtZSgpO1xuICAgIH0pO1xuICB9XG4gIHNhdmVHYW1lKCkge1xuICAgIGNvbnN0IGRhdGE6IFNhdmVEYXRhID0ge1xuICAgICAgZ29sZDogdGhpcy5tb2RlbC5nZXRTYXZlR29sZERhdGEoKSxcbiAgICAgIHRvbWF0b1NlZWQ6IHRoaXMubW9kZWwuZ2V0U2F2ZVRvbWF0b1NlZWREYXRhKCksXG4gICAgICBibHVlYmVycnlTZWVkOiB0aGlzLm1vZGVsLmdldFNhdmVCbHVlYmVycnlTZWVkRGF0YSgpLFxuICAgICAgc3RyYXdiZXJyeVNlZWQ6IHRoaXMubW9kZWwuZ2V0U2F2ZVN0cmF3YmVycnlTZWVkRGF0YSgpLFxuICAgICAgbWlsa0NvdzogdGhpcy5tb2RlbC5nZXRTYXZlTWlsa0Nvd0RhdGEoKSxcblxuICAgICAgd29ya2VyOiB0aGlzLm1vZGVsLmdldFNhdmVXb3JrZXJEYXRhKCksXG4gICAgICBtYWNoaW5lOiB0aGlzLm1vZGVsLmdldFNhdmVNYWNoaW5lRGF0YSgpLFxuXG4gICAgICB0b21hdG86IHRoaXMubW9kZWwuZ2V0U2F2ZVRvbWF0b0RhdGEoKSxcbiAgICAgIGJsdWViZXJyeTogdGhpcy5tb2RlbC5nZXRTYXZlQmx1ZWJlcnJ5RGF0YSgpLFxuICAgICAgc3RyYXdiZXJyeTogdGhpcy5tb2RlbC5nZXRTYXZlU3RyYXdiZXJyeURhdGEoKSxcbiAgICAgIG1pbGs6IHRoaXMubW9kZWwuZ2V0U2F2ZU1pbGtEYXRhKCksXG5cbiAgICAgIHRpbWVzdGFtcDogdGhpcy5tb2RlbC5nZXRTYXZlVGltZVN0YW1wRGF0YSgpLFxuXG4gICAgICBsYW5kOiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kRGF0YSgpLFxuXG4gICAgICB3b3JraW5nV29ya2VyTnVtYmVyOiB0aGlzLm1vZGVsLmdldFNhdmVXb3JraW5nV29ya2VyTnVtYmVyRGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgZGF0YTI6IFNhdmVRdWV1ZURhdGEgPSB7XG4gICAgICBxdWV1ZUluZGV4QXJyYXk6IHRoaXMubW9kZWwuZ2V0U2F2ZVF1ZXVlSW5kZXhBcnJheURhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhMDogU2F2ZUxhbmQwRGF0YSA9IHtcbiAgICAgIGxhbmRfMDogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDBEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTE6IFNhdmVMYW5kMURhdGEgPSB7XG4gICAgICBsYW5kXzE6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQxRGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGEyOiBTYXZlTGFuZDJEYXRhID0ge1xuICAgICAgbGFuZF8yOiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kMkRhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhMzogU2F2ZUxhbmQzRGF0YSA9IHtcbiAgICAgIGxhbmRfMzogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDNEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTQ6IFNhdmVMYW5kNERhdGEgPSB7XG4gICAgICBsYW5kXzQ6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQ0RGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGE1OiBTYXZlTGFuZDVEYXRhID0ge1xuICAgICAgbGFuZF81OiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kNURhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhNjogU2F2ZUxhbmQ2RGF0YSA9IHtcbiAgICAgIGxhbmRfNjogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDZEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTc6IFNhdmVMYW5kN0RhdGEgPSB7XG4gICAgICBsYW5kXzc6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQ3RGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGE4OiBTYXZlTGFuZDhEYXRhID0ge1xuICAgICAgbGFuZF84OiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kOERhdGEoKSxcbiAgICB9O1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWSwgZGF0YSk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMiwgZGF0YTIpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTMsIGxhbmREYXRhMCk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZNCwgbGFuZERhdGExKTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk1LCBsYW5kRGF0YTIpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTYsIGxhbmREYXRhMyk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZNywgbGFuZERhdGE0KTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk4LCBsYW5kRGF0YTUpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTksIGxhbmREYXRhNik7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMTAsIGxhbmREYXRhNyk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMTEsIGxhbmREYXRhOCk7XG4gICAgY29uc29sZS5sb2coXCJnYW1lIFNhdmVkISEhISEhISEhXCIpO1xuICB9XG5cbiAgbG9hZEdhbWUoKSB7XG4gICAgY29uc3Qgc2F2ZWQgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVkpO1xuICAgIGlmIChzYXZlZCkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkR29sZEZyb21TYXZlKHNhdmVkLmdvbGQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkVG9tYXRvU2VlZEZyb21TYXZlKHNhdmVkLnRvbWF0b1NlZWQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkQmx1ZWJlcnJ5U2VlZEZyb21TYXZlKHNhdmVkLmJsdWViZXJyeVNlZWQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkU3RyYXdiZXJyeVNlZWRGcm9tU2F2ZShzYXZlZC5zdHJhd2JlcnJ5U2VlZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRNaWxrQ293RnJvbVNhdmUoc2F2ZWQubWlsa0Nvdyk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRXb2tlckZyb21TYXZlKHNhdmVkLndvcmtlcik7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRNYWNoaW5lRnJvbVNhdmUoc2F2ZWQubWFjaGluZSk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRUb21hdG9Gcm9tU2F2ZShzYXZlZC50b21hdG8pO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkQmx1ZWJlcnJ5RnJvbVNhdmUoc2F2ZWQuYmx1ZWJlcnJ5KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFN0cmF3YmVycnlGcm9tU2F2ZShzYXZlZC5zdHJhd2JlcnJ5KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZE1pbGtGcm9tU2F2ZShzYXZlZC5taWxrKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFRpbWVTdGFtcEZyb21TYXZlKHNhdmVkLnRpbWVzdGFtcCk7XG5cbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmRGcm9tU2F2ZShzYXZlZC5sYW5kKTtcblxuICAgICAgdGhpcy5tb2RlbC5sb2FkV29ya2luZ1dvcmtlck51bWJlckZyb21TYXZlKHNhdmVkLndvcmtpbmdXb3JrZXJOdW1iZXIpO1xuXG4gICAgICBjb25zdCBvZmZsaW5lRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5tb2RlbC5zdG9yYWdlLnRpbWVzdGFtcDtcbiAgICAgIHRoaXMudXBkYXRlT2ZmbGluZVByb2dyZXNzKG9mZmxpbmVEdXJhdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2F2ZWQyID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMik7XG4gICAgaWYgKHNhdmVkMikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkUXVldWVJbmRleEFycmF5RnJvbVNhdmUoc2F2ZWQyLnF1ZXVlSW5kZXhBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFuZFNhdmVkMCA9IEdhbWVTYXZlTWFuYWdlci5sb2FkKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTMpO1xuICAgIGlmIChsYW5kU2F2ZWQwKSB7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRMYW5kMEZyb21TYXZlKGxhbmRTYXZlZDAubGFuZF8wKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYW5kU2F2ZWQxID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZNCk7XG4gICAgaWYgKGxhbmRTYXZlZDEpIHtcbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmQxRnJvbVNhdmUobGFuZFNhdmVkMS5sYW5kXzEpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhbmRTYXZlZDIgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk1KTtcbiAgICBpZiAobGFuZFNhdmVkMikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDJGcm9tU2F2ZShsYW5kU2F2ZWQyLmxhbmRfMik7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDMgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk2KTtcbiAgICBpZiAobGFuZFNhdmVkMykge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDNGcm9tU2F2ZShsYW5kU2F2ZWQzLmxhbmRfMyk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDQgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk3KTtcbiAgICBpZiAobGFuZFNhdmVkNCkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDRGcm9tU2F2ZShsYW5kU2F2ZWQ0LmxhbmRfNCk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDUgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk4KTtcbiAgICBpZiAobGFuZFNhdmVkNSkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDVGcm9tU2F2ZShsYW5kU2F2ZWQ1LmxhbmRfNSk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDYgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk5KTtcbiAgICBpZiAobGFuZFNhdmVkNikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDZGcm9tU2F2ZShsYW5kU2F2ZWQ2LmxhbmRfNik7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDcgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVkxMCk7XG4gICAgaWYgKGxhbmRTYXZlZDcpIHtcbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmQ3RnJvbVNhdmUobGFuZFNhdmVkNy5sYW5kXzcpO1xuICAgIH1cbiAgICBjb25zdCBsYW5kU2F2ZWQ4ID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMTEpO1xuICAgIGlmIChsYW5kU2F2ZWQ4KSB7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRMYW5kOEZyb21TYXZlKGxhbmRTYXZlZDgubGFuZF84KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImdhbWUgTG9hZGVkISEhISEhISEhXCIpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5jbGVhcigpO1xuICB9XG5cbiAgdXBkYXRlT2ZmbGluZVByb2dyZXNzKGR1cmF0aW9uOiBudW1iZXIpIHt9XG5cbiAgY2FsY3VsYXRlTGFuZChkdXJhdGlvbjogbnVtYmVyKSB7fVxuICBjYWxjdWxhdGVXb3JrZXIoZHVyYXRpb246IG51bWJlcikge31cbn1cbiJdfQ==