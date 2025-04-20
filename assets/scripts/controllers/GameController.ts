import { BaseController } from "../../core/mvc/BaseController";
import { GameView } from "../views/GameView";
import { GameModel } from "../models/GameModel";
import { GameSaveManager, SaveData } from "../Manager/GameSaveManager";
import { Milk, MilkCow, TomatoSeed } from "../storage/Storage";

export class GameController extends BaseController<GameModel, GameView> {
  model: GameModel;
  view: GameView;
  /* constructor() {
    super();
    this.model = new GameModel();

    this.view = new GameView(this);

  }
  */
  init(model: GameModel, view: GameView): void {
    this.model = model;
    this.view = view;
  }
  update(dt: number): void {
    throw new Error("Method not implemented.");
  }
  setupUI(): void {
    cc.game.on(cc.game.EVENT_HIDE, () => {
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
    GameSaveManager.save(data);
  }

  loadGame() {
    const saved = GameSaveManager.load();
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
  }

  updateOfflineProgress(duration: number) {}

  calculateLand(duration: number) {}
  calculateWorker(duration: number) {}
}
