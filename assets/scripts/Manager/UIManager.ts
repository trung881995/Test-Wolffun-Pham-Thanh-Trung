// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import { GameController } from "../controllers/GameController";
import { GameModel } from "../models/GameModel";
import { Land } from "../storage/Storage";
import LandUI, { LandState } from "../ui/LandUI";
import StorageUI from "../ui/StorageUI";
import StoreUI from "../ui/StoreUI";
import { GameView } from "../views/GameView";
import { GameSaveManager } from "./GameSaveManager";

@ccclass
export default class UIManager extends cc.Component {
  @property(LandUI) landUIArray: LandUI[] = [];
  @property(StoreUI) storeUI: StoreUI = null;
  @property(StorageUI) storageUI: StorageUI = null;
  @property(cc.Button) StartBtn: cc.Button = null;

  public static instance: UIManager;

  gameController: GameController;
  gameModel: GameModel;
  gameView: GameView;

  time: number = 0;
  saveTime: number = 1;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    if (UIManager.instance == null) {
      UIManager.instance = this;
    }

    this.Init();
  }

  start() {
    //this.Save();
  }

  update(dt: number): void {}
  async Init() {
    await this.setup();
  }
  async setup() {
    this.gameController = new GameController();
    this.gameModel = new GameModel();
    this.gameView = new GameView(this.gameController);

    this.gameController.init(this.gameModel, this.gameView);

    await this.setupData();
    this.gameController.model.newLand();
    this.createLandData();
    this.gameController.loadGame();
    this.setupUI();
    this.gameController.setup();
    this.StartBtn.interactable = true;
  }
  async setupData() {
    await this.gameModel.setData();
  }
  setupUI() {
    this.createLandUI();
    this.storageUI.setupUI();
    this.storageUI.updateUI();

    this.storeUI.setupUI();
  }

  pushToQueue(index: number) {
    if (
      this.gameModel.landArray[index].isReadyToWork &&
      !this.gameModel.queueIndexArray.includes(index)
    ) {
      this.gameModel.queueIndexArray.push(index);
    }
  }
  useWorkerForQueue3() {
    console.log("queueIndex: " + this.gameModel.queueIndexArray);
    let idleWorker = this.gameController.model.storage.getWorkerIdle(
      this.gameController.model.storage.workingWorkerNumber
    );
    if (idleWorker > 0) {
      for (let i = 0; i < idleWorker; i++) {
        if (this.gameController.model.queueIndexArray.length > 0) {
          if (
            this.gameModel.landArray[this.gameModel.queueIndexArray[0]]
              .isReadyToWork
          ) {
            UIManager.instance.landUIArray[
              this.gameModel.queueIndexArray[0]
            ].enableWorker();
            this.useWorker(
              this.gameModel.landArray[this.gameModel.queueIndexArray[0]]
            );
            UIManager.instance.landUIArray[
              this.gameModel.queueIndexArray[0]
            ].updateUI();
          } else {
          }

          this.gameModel.queueIndexArray.splice(0, 1);
        }
      }
    } else {
    }
  }

  checkMinWorkingTime(): number {
    let min: number = this.gameModel.landArray[0].workingTime;
    for (let i = 0; i < this.landUIArray.length; i++) {
      if (this.gameModel.landArray[i].workingTime < min) {
        min = this.gameModel.landArray[i].workingTime;
      }
    }
    return min;
  }

  useWorker(land: Land) {
    this.gameController.model.storage.assignWorker(land);
    this.gameController.model.storage.workingWorkerNumber += 1;
    land.workingTime =
      this.gameController.model.storage.worker.workingInterval * 60;
    land.isReadyToWork = false;

    UIManager.instance.storageUI.updateUI();
  }
  createLandUI() {
    for (let i = 0; i < this.gameModel.storage.land.number; i++) {
      this.updateLandUI(i);

      if (this.gameModel.landArray[i].isReadyToWork) {
        this.pushToQueue(i);
        this.useWorkerForQueue3();
      } else {
        if (this.gameModel.landArray[i].workingTime > 0) {
          this.landUIArray[i].enableWorker();
        }
      }
    }
  }
  createLandData() {
    /*this.landArrayClones = Array.from({ length: 9 }, () => ({
      ...this.gameController.model.storage.land,
    }));*/
    if (this.gameModel.landArray.length == 0) {
      this.gameModel.landArray = Array.from({ length: 9 }, () =>
        this.gameModel.storage.land.clone()
      );
    }
    cc.log(this.gameModel.landArray);
  }
  updateLandUI(index: number) {
    this.landUIArray[index].enabled = true;
    this.landUIArray[index].index = index;

    this.landUIArray[index].enableLand();
  }
  enableAllLand() {
    for (let i = 0; i < this.gameModel.storage.land.number; i++) {
      this.landUIArray[i].enableLand();
    }
  }
  findLandForPlant() {
    for (let i = 0; i < this.landUIArray.length; i++) {
      if (this.landUIArray[i].enabled) {
        if (
          this.gameModel.landArray[i].currentAsset.number > 0 &&
          this.gameModel.landArray[i].isReadyToWork
        ) {
          this.pushToQueue(i);

          this.useWorkerForQueue3();
        }
      }
    }
  }

  Save() {
    this.gameController.saveGame();
  }

  clearCache() {
    GameSaveManager.clear();
  }
}
