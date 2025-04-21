
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
            //this.model.loadQueueLandArrayFromSave(saved.queueLandArray);
            // this.model.loadLandArrayFromSave(saved.landArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFHL0QsOERBYW9DO0FBR3BDO0lBQW9DLGtDQUFtQztJQUF2RTs7SUE2S0EsQ0FBQztJQTFLQzs7Ozs7OztNQU9FO0lBQ0YsNkJBQUksR0FBSixVQUFLLEtBQWdCLEVBQUUsSUFBYztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsK0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFBQSxpQkFPQztRQU5DLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBTSxJQUFJLEdBQWE7WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFO1lBQ2xDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFO1lBQzlDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFO1lBQ3BELGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFF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QUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLGlDQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixRQUFnQixJQUFHLENBQUM7SUFFMUMsc0NBQWEsR0FBYixVQUFjLFFBQWdCLElBQUcsQ0FBQztJQUNsQyx3Q0FBZSxHQUFmLFVBQWdCLFFBQWdCLElBQUcsQ0FBQztJQUN0QyxxQkFBQztBQUFELENBN0tBLEFBNktDLENBN0ttQywrQkFBYyxHQTZLakQ7QUE3S1ksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgR2FtZVZpZXcgfSBmcm9tIFwiLi4vdmlld3MvR2FtZVZpZXdcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQge1xuICBHYW1lU2F2ZU1hbmFnZXIsXG4gIFNhdmVEYXRhLFxuICBTYXZlTGFuZDBEYXRhLFxuICBTYXZlTGFuZDFEYXRhLFxuICBTYXZlTGFuZDJEYXRhLFxuICBTYXZlTGFuZDNEYXRhLFxuICBTYXZlTGFuZDREYXRhLFxuICBTYXZlTGFuZDVEYXRhLFxuICBTYXZlTGFuZDZEYXRhLFxuICBTYXZlTGFuZDdEYXRhLFxuICBTYXZlTGFuZDhEYXRhLFxuICBTYXZlUXVldWVEYXRhLFxufSBmcm9tIFwiLi4vTWFuYWdlci9HYW1lU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7IE1pbGssIE1pbGtDb3csIFRvbWF0b1NlZWQgfSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyPEdhbWVNb2RlbCwgR2FtZVZpZXc+IHtcbiAgbW9kZWw6IEdhbWVNb2RlbDtcbiAgdmlldzogR2FtZVZpZXc7XG4gIC8qIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG5ldyBHYW1lTW9kZWwoKTtcblxuICAgIHRoaXMudmlldyA9IG5ldyBHYW1lVmlldyh0aGlzKTtcblxuICB9XG4gICovXG4gIGluaXQobW9kZWw6IEdhbWVNb2RlbCwgdmlldzogR2FtZVZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgfVxuICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHNldHVwKCk6IHZvaWQge1xuICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCAoKSA9PiB7XG4gICAgICB0aGlzLnNhdmVHYW1lKCk7XG4gICAgfSk7XG4gICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1JFU1RBUlQsICgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZUdhbWUoKTtcbiAgICB9KTtcbiAgfVxuICBzYXZlR2FtZSgpIHtcbiAgICBjb25zdCBkYXRhOiBTYXZlRGF0YSA9IHtcbiAgICAgIGdvbGQ6IHRoaXMubW9kZWwuZ2V0U2F2ZUdvbGREYXRhKCksXG4gICAgICB0b21hdG9TZWVkOiB0aGlzLm1vZGVsLmdldFNhdmVUb21hdG9TZWVkRGF0YSgpLFxuICAgICAgYmx1ZWJlcnJ5U2VlZDogdGhpcy5tb2RlbC5nZXRTYXZlQmx1ZWJlcnJ5U2VlZERhdGEoKSxcbiAgICAgIHN0cmF3YmVycnlTZWVkOiB0aGlzLm1vZGVsLmdldFNhdmVTdHJhd2JlcnJ5U2VlZERhdGEoKSxcbiAgICAgIG1pbGtDb3c6IHRoaXMubW9kZWwuZ2V0U2F2ZU1pbGtDb3dEYXRhKCksXG5cbiAgICAgIHdvcmtlcjogdGhpcy5tb2RlbC5nZXRTYXZlV29ya2VyRGF0YSgpLFxuICAgICAgbWFjaGluZTogdGhpcy5tb2RlbC5nZXRTYXZlTWFjaGluZURhdGEoKSxcblxuICAgICAgdG9tYXRvOiB0aGlzLm1vZGVsLmdldFNhdmVUb21hdG9EYXRhKCksXG4gICAgICBibHVlYmVycnk6IHRoaXMubW9kZWwuZ2V0U2F2ZUJsdWViZXJyeURhdGEoKSxcbiAgICAgIHN0cmF3YmVycnk6IHRoaXMubW9kZWwuZ2V0U2F2ZVN0cmF3YmVycnlEYXRhKCksXG4gICAgICBtaWxrOiB0aGlzLm1vZGVsLmdldFNhdmVNaWxrRGF0YSgpLFxuXG4gICAgICB0aW1lc3RhbXA6IHRoaXMubW9kZWwuZ2V0U2F2ZVRpbWVTdGFtcERhdGEoKSxcblxuICAgICAgbGFuZDogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZERhdGEoKSxcblxuICAgICAgd29ya2luZ1dvcmtlck51bWJlcjogdGhpcy5tb2RlbC5nZXRTYXZlV29ya2luZ1dvcmtlck51bWJlckRhdGEoKSxcblxuICAgICAgLy9xdWV1ZUxhbmRBcnJheTogdGhpcy5tb2RlbC5nZXRTYXZlUXVldWVMYW5kQXJyYXlEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBkYXRhMjogU2F2ZVF1ZXVlRGF0YSA9IHtcbiAgICAgIHF1ZXVlSW5kZXhBcnJheTogdGhpcy5tb2RlbC5nZXRTYXZlUXVldWVJbmRleEFycmF5RGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGEwOiBTYXZlTGFuZDBEYXRhID0ge1xuICAgICAgbGFuZF8wOiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kMERhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhMTogU2F2ZUxhbmQxRGF0YSA9IHtcbiAgICAgIGxhbmRfMTogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDFEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTI6IFNhdmVMYW5kMkRhdGEgPSB7XG4gICAgICBsYW5kXzI6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQyRGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGEzOiBTYXZlTGFuZDNEYXRhID0ge1xuICAgICAgbGFuZF8zOiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kM0RhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhNDogU2F2ZUxhbmQ0RGF0YSA9IHtcbiAgICAgIGxhbmRfNDogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDREYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTU6IFNhdmVMYW5kNURhdGEgPSB7XG4gICAgICBsYW5kXzU6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQ1RGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGE2OiBTYXZlTGFuZDZEYXRhID0ge1xuICAgICAgbGFuZF82OiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kNkRhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhNzogU2F2ZUxhbmQ3RGF0YSA9IHtcbiAgICAgIGxhbmRfNzogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDdEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTg6IFNhdmVMYW5kOERhdGEgPSB7XG4gICAgICBsYW5kXzg6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQ4RGF0YSgpLFxuICAgIH07XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZLCBkYXRhKTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVkyLCBkYXRhMik7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMywgbGFuZERhdGEwKTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk0LCBsYW5kRGF0YTEpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTUsIGxhbmREYXRhMik7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZNiwgbGFuZERhdGEzKTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk3LCBsYW5kRGF0YTQpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTgsIGxhbmREYXRhNSk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZOSwgbGFuZERhdGE2KTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVkxMCwgbGFuZERhdGE3KTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVkxMSwgbGFuZERhdGE4KTtcbiAgICBjb25zb2xlLmxvZyhcImdhbWUgU2F2ZWQhISEhISEhISFcIik7XG4gIH1cblxuICBsb2FkR2FtZSgpIHtcbiAgICBjb25zdCBzYXZlZCA9IEdhbWVTYXZlTWFuYWdlci5sb2FkKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWSk7XG4gICAgaWYgKHNhdmVkKSB7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRHb2xkRnJvbVNhdmUoc2F2ZWQuZ29sZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRUb21hdG9TZWVkRnJvbVNhdmUoc2F2ZWQudG9tYXRvU2VlZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRCbHVlYmVycnlTZWVkRnJvbVNhdmUoc2F2ZWQuYmx1ZWJlcnJ5U2VlZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRTdHJhd2JlcnJ5U2VlZEZyb21TYXZlKHNhdmVkLnN0cmF3YmVycnlTZWVkKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZE1pbGtDb3dGcm9tU2F2ZShzYXZlZC5taWxrQ293KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFdva2VyRnJvbVNhdmUoc2F2ZWQud29ya2VyKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZE1hY2hpbmVGcm9tU2F2ZShzYXZlZC5tYWNoaW5lKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFRvbWF0b0Zyb21TYXZlKHNhdmVkLnRvbWF0byk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRCbHVlYmVycnlGcm9tU2F2ZShzYXZlZC5ibHVlYmVycnkpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkU3RyYXdiZXJyeUZyb21TYXZlKHNhdmVkLnN0cmF3YmVycnkpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTWlsa0Zyb21TYXZlKHNhdmVkLm1pbGspO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkVGltZVN0YW1wRnJvbVNhdmUoc2F2ZWQudGltZXN0YW1wKTtcblxuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZEZyb21TYXZlKHNhdmVkLmxhbmQpO1xuXG4gICAgICB0aGlzLm1vZGVsLmxvYWRXb3JraW5nV29ya2VyTnVtYmVyRnJvbVNhdmUoc2F2ZWQud29ya2luZ1dvcmtlck51bWJlcik7XG5cbiAgICAgIC8vdGhpcy5tb2RlbC5sb2FkUXVldWVMYW5kQXJyYXlGcm9tU2F2ZShzYXZlZC5xdWV1ZUxhbmRBcnJheSk7XG4gICAgICAvLyB0aGlzLm1vZGVsLmxvYWRMYW5kQXJyYXlGcm9tU2F2ZShzYXZlZC5sYW5kQXJyYXkpO1xuXG4gICAgICBjb25zdCBvZmZsaW5lRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5tb2RlbC5zdG9yYWdlLnRpbWVzdGFtcDtcbiAgICAgIHRoaXMudXBkYXRlT2ZmbGluZVByb2dyZXNzKG9mZmxpbmVEdXJhdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2F2ZWQyID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMik7XG4gICAgaWYgKHNhdmVkMikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkUXVldWVJbmRleEFycmF5RnJvbVNhdmUoc2F2ZWQyLnF1ZXVlSW5kZXhBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFuZFNhdmVkMCA9IEdhbWVTYXZlTWFuYWdlci5sb2FkKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTMpO1xuICAgIGlmIChsYW5kU2F2ZWQwKSB7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRMYW5kMEZyb21TYXZlKGxhbmRTYXZlZDAubGFuZF8wKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYW5kU2F2ZWQxID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZNCk7XG4gICAgaWYgKGxhbmRTYXZlZDEpIHtcbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmQxRnJvbVNhdmUobGFuZFNhdmVkMS5sYW5kXzEpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhbmRTYXZlZDIgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk1KTtcbiAgICBpZiAobGFuZFNhdmVkMikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDJGcm9tU2F2ZShsYW5kU2F2ZWQyLmxhbmRfMik7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDMgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk2KTtcbiAgICBpZiAobGFuZFNhdmVkMykge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDNGcm9tU2F2ZShsYW5kU2F2ZWQzLmxhbmRfMyk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDQgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk3KTtcbiAgICBpZiAobGFuZFNhdmVkNCkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDRGcm9tU2F2ZShsYW5kU2F2ZWQ0LmxhbmRfNCk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDUgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk4KTtcbiAgICBpZiAobGFuZFNhdmVkNSkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDVGcm9tU2F2ZShsYW5kU2F2ZWQ1LmxhbmRfNSk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDYgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk5KTtcbiAgICBpZiAobGFuZFNhdmVkNikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDZGcm9tU2F2ZShsYW5kU2F2ZWQ2LmxhbmRfNik7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDcgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVkxMCk7XG4gICAgaWYgKGxhbmRTYXZlZDcpIHtcbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmQ3RnJvbVNhdmUobGFuZFNhdmVkNy5sYW5kXzcpO1xuICAgIH1cbiAgICBjb25zdCBsYW5kU2F2ZWQ4ID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMTEpO1xuICAgIGlmIChsYW5kU2F2ZWQ4KSB7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRMYW5kOEZyb21TYXZlKGxhbmRTYXZlZDgubGFuZF84KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImdhbWUgTG9hZGVkISEhISEhISEhXCIpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5jbGVhcigpO1xuICB9XG5cbiAgdXBkYXRlT2ZmbGluZVByb2dyZXNzKGR1cmF0aW9uOiBudW1iZXIpIHt9XG5cbiAgY2FsY3VsYXRlTGFuZChkdXJhdGlvbjogbnVtYmVyKSB7fVxuICBjYWxjdWxhdGVXb3JrZXIoZHVyYXRpb246IG51bWJlcikge31cbn1cbiJdfQ==