import { BaseController } from "../../core/mvc/BaseController";
import { GameView } from "../views/GameView";
import { GameModel } from "../models/GameModel";
import {
  GameSaveManager,
  SaveData,
  SaveLand0Data,
  SaveLand1Data,
  SaveLand2Data,
  SaveLand3Data,
  SaveLand4Data,
  SaveLand5Data,
  SaveLand6Data,
  SaveLand7Data,
  SaveLand8Data,
  SaveQueueData,
} from "../Manager/GameSaveManager";
import { Milk, MilkCow, TomatoSeed } from "../storage/Storage";

export class GameController extends BaseController<GameModel, GameView> {
  model: GameModel;
  view: GameView;

  init(model: GameModel, view: GameView): void {
    this.model = model;
    this.view = view;
  }
  update(dt: number): void {
    throw new Error("Method not implemented.");
  }
  setup(): void {
    cc.game.on(cc.game.EVENT_HIDE, () => {
      this.saveGame();
    });
    cc.game.on(cc.game.EVENT_RESTART, () => {
      this.saveGame();
    });
  }
  saveGame() {
    const data: SaveData = {
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
    const data2: SaveQueueData = {
      queueIndexArray: this.model.getSaveQueueIndexArrayData(),
    };
    const landData0: SaveLand0Data = {
      land_0: this.model.getSaveLand0Data(),
    };
    const landData1: SaveLand1Data = {
      land_1: this.model.getSaveLand1Data(),
    };
    const landData2: SaveLand2Data = {
      land_2: this.model.getSaveLand2Data(),
    };
    const landData3: SaveLand3Data = {
      land_3: this.model.getSaveLand3Data(),
    };
    const landData4: SaveLand4Data = {
      land_4: this.model.getSaveLand4Data(),
    };
    const landData5: SaveLand5Data = {
      land_5: this.model.getSaveLand5Data(),
    };
    const landData6: SaveLand6Data = {
      land_6: this.model.getSaveLand6Data(),
    };
    const landData7: SaveLand7Data = {
      land_7: this.model.getSaveLand7Data(),
    };
    const landData8: SaveLand8Data = {
      land_8: this.model.getSaveLand8Data(),
    };
    GameSaveManager.save(GameSaveManager.SAVE_KEY, data);
    GameSaveManager.save(GameSaveManager.SAVE_KEY2, data2);
    GameSaveManager.save(GameSaveManager.SAVE_KEY3, landData0);
    GameSaveManager.save(GameSaveManager.SAVE_KEY4, landData1);
    GameSaveManager.save(GameSaveManager.SAVE_KEY5, landData2);
    GameSaveManager.save(GameSaveManager.SAVE_KEY6, landData3);
    GameSaveManager.save(GameSaveManager.SAVE_KEY7, landData4);
    GameSaveManager.save(GameSaveManager.SAVE_KEY8, landData5);
    GameSaveManager.save(GameSaveManager.SAVE_KEY9, landData6);
    GameSaveManager.save(GameSaveManager.SAVE_KEY10, landData7);
    GameSaveManager.save(GameSaveManager.SAVE_KEY11, landData8);
    console.log("game Saved!!!!!!!!!");
  }

  loadGame() {
    const saved = GameSaveManager.load(GameSaveManager.SAVE_KEY);
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

      const offlineDuration = Date.now() - this.model.storage.timestamp;
      this.updateOfflineProgress(offlineDuration);
    }

    const saved2 = GameSaveManager.load(GameSaveManager.SAVE_KEY2);
    if (saved2) {
      this.model.loadQueueIndexArrayFromSave(saved2.queueIndexArray);
    }

    const landSaved0 = GameSaveManager.load(GameSaveManager.SAVE_KEY3);
    if (landSaved0) {
      this.model.loadLand0FromSave(landSaved0.land_0);
    }

    const landSaved1 = GameSaveManager.load(GameSaveManager.SAVE_KEY4);
    if (landSaved1) {
      this.model.loadLand1FromSave(landSaved1.land_1);
    }

    const landSaved2 = GameSaveManager.load(GameSaveManager.SAVE_KEY5);
    if (landSaved2) {
      this.model.loadLand2FromSave(landSaved2.land_2);
    }
    const landSaved3 = GameSaveManager.load(GameSaveManager.SAVE_KEY6);
    if (landSaved3) {
      this.model.loadLand3FromSave(landSaved3.land_3);
    }
    const landSaved4 = GameSaveManager.load(GameSaveManager.SAVE_KEY7);
    if (landSaved4) {
      this.model.loadLand4FromSave(landSaved4.land_4);
    }
    const landSaved5 = GameSaveManager.load(GameSaveManager.SAVE_KEY8);
    if (landSaved5) {
      this.model.loadLand5FromSave(landSaved5.land_5);
    }
    const landSaved6 = GameSaveManager.load(GameSaveManager.SAVE_KEY9);
    if (landSaved6) {
      this.model.loadLand6FromSave(landSaved6.land_6);
    }
    const landSaved7 = GameSaveManager.load(GameSaveManager.SAVE_KEY10);
    if (landSaved7) {
      this.model.loadLand7FromSave(landSaved7.land_7);
    }
    const landSaved8 = GameSaveManager.load(GameSaveManager.SAVE_KEY11);
    if (landSaved8) {
      this.model.loadLand8FromSave(landSaved8.land_8);
    }

    console.log("game Loaded!!!!!!!!!");
    GameSaveManager.clear();
  }

  updateOfflineProgress(duration: number) {}

  calculateLand(duration: number) {}
  calculateWorker(duration: number) {}
}
