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

  @property(cc.Sprite) GamePanel: cc.Sprite = null;
  public static instance: UIManager;

  gameController: GameController;
  gameModel: GameModel;
  gameView: GameView;

  time: number = 0;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    if (UIManager.instance == null) {
      UIManager.instance = this;
    }
    //this.Init();
  }

  start() {}

  update(dt: number): void {
    /*  if (this.time > 0) {
      this.time -= dt;
    } else if (this.time < 0) {
      this.useWorkerForQueue3();
      this.time = 0;
    } else {
    }
    */
    //if (this.gameController.model.storage);
  }
  Init() {
    this.setup();
  }
  async setup() {
    this.gameController = new GameController();
    this.gameModel = new GameModel();
    this.gameView = new GameView(this.gameController);

    this.gameController.init(this.gameModel, this.gameView);
    await this.setupData();
    this.setupUI();
    this.gameController.setup();
  }
  async setupData() {
    await this.gameController.model.setData();

    this.gameController.model.newLand();

    this.gameController.loadGame();

    this.createLandData();
  }
  setupUI() {
    this.createLandUI();
    this.storageUI.setupUI();
    this.storageUI.updateUI();

    this.storeUI.setupUI();
  }
  useWorkerForQueue() {
    for (let i = 0; i < this.landUIArray.length; i++) {
      if (
        this.gameController.model.storage.getWorkerIdle(
          this.gameController.model.storage.workingWorkerNumber
        ) > 0
      ) {
        if (this.gameController.model.queueLandArray.length > 0) {
          this.useWorker(this.gameController.model.queueLandArray[0]);
          this.gameController.model.queueLandArray.splice(0, 1);
        } else {
          if (this.landUIArray[i].land.isReadyToWork) {
            this.useWorker(this.landUIArray[i]);
          }
        }
      } else {
        if (this.landUIArray[i].land.isReadyToWork) {
          this.gameController.model.queueLandArray.push(this.landUIArray[i]);
        }
      }
    }
  }

  useWorkerForQueue2() {
    for (let i = 0; i < this.landUIArray.length; i++) {
      if (
        this.gameController.model.storage.getWorkerIdle(
          this.gameController.model.storage.workingWorkerNumber
        ) > 0
      ) {
        if (this.landUIArray[i].land.isReadyToWork) {
          this.useWorker(this.landUIArray[i]);
        }
      } else {
        this.time = this.checkMinWorkingTime();
      }
    }
  }
  pushToQueue(landUI: LandUI) {
    if (
      landUI.land.isReadyToWork &&
      !this.gameController.model.queueLandArray.includes(landUI)
    ) {
      this.gameController.model.queueLandArray.push(landUI);
    }
  }
  useWorkerForQueue3() {
    let idleWorker = this.gameController.model.storage.getWorkerIdle(
      this.gameController.model.storage.workingWorkerNumber
    );
    if (idleWorker > 0) {
      for (let i = 0; i < idleWorker; i++) {
        if (this.gameController.model.queueLandArray.length > 0) {
          if (this.gameController.model.queueLandArray[0].land.isReadyToWork) {
            this.useWorker(this.gameController.model.queueLandArray[0]);
          } else {
            console.log("thua");
            //this.gameController.model.queueLandArray[0].disableWorker();
          }
          //this.gameController.model.queueLandArray[0].land.isReadyToWork = false;
          this.gameController.model.queueLandArray.splice(0, 1);
        }
      }
    } else {
      //this.time = this.checkMinWorkingTime();
    }
  }

  checkMinWorkingTime(): number {
    let min: number = this.landUIArray[0].land.workingTime;
    for (let i = 0; i < this.landUIArray.length; i++) {
      if (this.landUIArray[i].land.workingTime < min) {
        min = this.landUIArray[i].land.workingTime;
      }
    }
    return min;
  }

  useWorker(landUi: LandUI) {
    this.gameController.model.storage.assignWorker(landUi);
    this.gameController.model.storage.workingWorkerNumber += 1;
    landUi.land.workingTime =
      this.gameController.model.storage.worker.workingInterval * 10;
    landUi.land.isReadyToWork = false;
    landUi.enableWorker();
    UIManager.instance.storageUI.updateUI();
    landUi.updateUI();
  }
  createLandUI() {
    for (let i = 0; i < this.gameController.model.storage.land.number; i++) {
      this.updateLandUI(i);
      if (this.gameModel.landArray[i].isReadyToWork) {
        this.pushToQueue(this.landUIArray[i]);
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
    this.landUIArray[index].land = this.gameModel.landArray[index];
    this.landUIArray[index].enabled = true;
    //this.landUIArray[index].setupLandState();
    this.landUIArray[index].enableLand();
  }
  enableAllLand() {
    for (let i = 0; i < this.gameController.model.storage.land.number; i++) {
      this.landUIArray[i].enableLand();
    }
  }
  findLandForPlant() {
    for (let i = 0; i < this.landUIArray.length; i++) {
      if (this.landUIArray[i].enabled) {
        if (
          this.landUIArray[i].land.currentAsset.number > 0 &&
          this.landUIArray[i].land.isReadyToWork
        ) {
          //this.landUIArray[i].setupLandState();
          this.pushToQueue(this.landUIArray[i]);

          this.useWorkerForQueue3();
        }
      }
    }
  }

  clearCache() {
    GameSaveManager.clear();
  }
  startGame() {
    this.Init();
    this.GamePanel.node.active = false;
  }
}
