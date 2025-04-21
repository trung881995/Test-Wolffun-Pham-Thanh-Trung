"use strict";
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