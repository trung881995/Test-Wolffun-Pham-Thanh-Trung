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