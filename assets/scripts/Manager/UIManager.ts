// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import { GameController } from "../controllers/GameController";
import { Land } from "../storage/Storage";
import LandUI from "../ui/LandUI";
import StorageUI from "../ui/StorageUI";
import StoreUI from "../ui/StoreUI";

@ccclass
export default class UIManager extends cc.Component {
  @property(LandUI) landUIArray: LandUI[] = [];
  @property(StoreUI) storeUI: StoreUI = null;
  @property(StorageUI) storageUI: StorageUI = null;
  public static instance: UIManager;
  public gameController: GameController;

  time: number = 0;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    if (UIManager.instance == null) {
      UIManager.instance = this;
    }

    this.gameController = new GameController();
  }

  start() {
    this.setupUI();
  }

  update(dt: number): void {
    if (this.time > 0) {
      this.time -= dt;
    } else if (this.time < 0) {
      this.useWorkerForQueue2();
      this.time = 0;
    } else {
    }
  }
  async setupUI() {
    await this.gameController.model.setData();
    const clones = Array.from({ length: 5 }, () => ({
      ...this.gameController.model.storage.land,
    }));

    for (let i = 0; i < this.gameController.model.storage.land.number; i++) {
      this.landUIArray[i].land = clones[i];
      this.landUIArray[i].enabled = true;
      this.landUIArray[i].DisplayUI();
      //this.landUIArray[i].resetUI();
      // this.landUIArray[i].disableWorker();
      // this.landUIArray[i].setupUI();
    }
    this.gameController.model.queueLandArray.push(this.landUIArray[0]);
    this.useWorkerForQueue2();
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
  }
  createLand() {
    for (let i = 0; i < this.gameController.model.storage.land.number; i++) {
      this.landUIArray[i].enableLand();
    }
  }
}
