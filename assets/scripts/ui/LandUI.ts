// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { CattleType } from "../../enums/CattleType";
import { PlantType } from "../../enums/PlantType";
import UIManager from "../Manager/UIManager";
import {
  CattleConfigs,
  FirstConfigs,
  LandConfigs,
  PlantConfigs,
} from "../data/GameConfig";
import { Land, TomatoSeed } from "../storage/Storage";

const { ccclass, property } = cc._decorator;
export enum LandState {
  Undefined,
  Empty,
  Plant,
  Cattle,
  Harvest,
}
export enum YeildAction {
  Undefined = "",
  Harvest = "Harvest",
  Milk = "Milk",
  Butcher = "Butcher",
}
export enum WorkerAction {
  Undefined,
  Yielding,
  TomatoPlant,
  BlueberryPlant,
  StrawberryPlant,
  MilkcowLiveStock,
  CowLiveStock,
}
@ccclass
export default class LandUI extends cc.Component {
  @property(cc.Button)
  tomatoSeedBtn: cc.Button = null;
  @property(cc.Button)
  blueberrySeedBtn: cc.Button = null;
  @property(cc.Button)
  strawberrySeedBtn: cc.Button = null;
  @property(cc.Button)
  milkCowBtn: cc.Button = null;

  @property(cc.Button)
  yieldBtn: cc.Button = null;

  @property(cc.Label)
  nameLb: cc.Label = null;
  @property(cc.Label)
  timeLb: cc.Label = null;
  @property(cc.Label)
  yieldContainLb: cc.Label = null;
  @property(cc.Label)
  cropLb: cc.Label = null;

  @property(cc.Label)
  yieldButtonLb: cc.Label = null;

  @property(cc.Sprite)
  workerSprite: cc.Sprite = null;
  @property(cc.Label)
  workingIntervalLb: cc.Label = null;

  @property(cc.Sprite)
  Sprite: cc.Sprite = null;

  index: number;
  //land: Land;
  // LIFE-CYCLE CALLBACKS:
  onLoad() {}

  start() {
    this.setupUI();
  }

  update(dt) {
    if (UIManager.instance.gameModel.landArray[this.index]) {
      if (!UIManager.instance.gameModel.landArray[this.index].isEmpty) {
        if (UIManager.instance.gameModel.landArray[this.index].time < -0.5) {
          if (UIManager.instance.gameModel.landArray[this.index].crop > 0) {
            this.addYield();
          } else {
            this.switchToEmptyLand();
          }
        } else if (
          UIManager.instance.gameModel.landArray[this.index].time > -0.5
        ) {
          this.changeLandTime(dt);
          this.updateUI();
          console.log("change Time!!!!!");
        }
      }

      if (UIManager.instance.gameModel.landArray[this.index].workingTime > 0) {
        UIManager.instance.gameModel.landArray[this.index].workingTime -= dt;
        this.updateUI();
      } else if (
        UIManager.instance.gameModel.landArray[this.index].workingTime < 0
      ) {
        UIManager.instance.gameModel.storage.worker.Work(
          this,
          UIManager.instance.gameModel.landArray[this.index].workerAction
        );
      } else {
      }
    }
  }
  public setupLandState() {
    switch (UIManager.instance.gameModel.landArray[this.index].landState) {
      case LandState.Empty:
        this.resetUI();

        UIManager.instance.gameModel.landArray[this.index].isReadyToWork =
          UIManager.instance.gameModel.landArray[this.index].currentAsset
            .number > 0;
        break;
      case LandState.Harvest:
        this.updateUI();

        UIManager.instance.gameModel.landArray[this.index].isReadyToWork = true;
        break;
      case LandState.Plant:
        this.updateUI();
        UIManager.instance.gameModel.landArray[this.index].isReadyToWork =
          false;

        break;
      case LandState.Cattle:
        this.updateUI();
        UIManager.instance.gameModel.landArray[this.index].isReadyToWork =
          false;

        break;
      default:
        break;
    }
  }
  public setupUI() {
    this.tomatoSeedBtn.node.active = true;
    this.tomatoSeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickTomatoSeedBtn,
      this
    );
    this.blueberrySeedBtn.node.active = true;
    this.blueberrySeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickBlueberrySeedBtn,
      this
    );
    this.strawberrySeedBtn.node.active = true;
    this.strawberrySeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickStrawberrySeedBtn,
      this
    );
    this.milkCowBtn.node.active = true;
    this.milkCowBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickMilkCowBtn,
      this
    );
    //this.harvestBtn.node.active = true;
    this.yieldBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickYieldBtn,
      this
    );

    console.log("setup LandUI Done!!!!");
  }
  public updateUI() {
    this.setTimeLb(UIManager.instance.gameModel.landArray[this.index].time);
    this.setCropLb(UIManager.instance.gameModel.landArray[this.index].crop);
    this.setWorkingIntervalLb(
      UIManager.instance.gameModel.landArray[this.index].workingTime
    );
    this.setYieldContainLb(
      UIManager.instance.gameModel.landArray[this.index].containYield
    );
    if (UIManager.instance.gameModel.landArray[this.index].time > 0) {
      this.setSprite(
        UIManager.instance.gameModel.landArray[this.index].currentAsset.name
      );
      this.setNameLb(
        UIManager.instance.gameModel.landArray[this.index].currentAsset.name
      );

      this.tomatoSeedBtn.node.active = false;
      this.blueberrySeedBtn.node.active = false;
      this.strawberrySeedBtn.node.active = false;
      this.milkCowBtn.node.active = false;

      this.nameLb.node.active = true;
      this.timeLb.node.active = true;
      this.Sprite.node.active = true;
      this.yieldContainLb.node.active = true;
      this.cropLb.node.active = true;
    } else {
    }

    this.yieldBtn.node.active =
      (UIManager.instance.gameModel.landArray[this.index].plantType ||
        UIManager.instance.gameModel.landArray[this.index].cattleType) &&
      UIManager.instance.gameModel.landArray[this.index].containYield > 0;
    if (this.yieldBtn.node.active) {
      switch (
        UIManager.instance.gameModel.landArray[this.index].currentAsset.name
      ) {
        case UIManager.instance.gameController.model.storage.tomatoSeed.name:
          this.yieldButtonLb.string = YeildAction.Harvest;
          break;
        case UIManager.instance.gameController.model.storage.blueberrySeed.name:
          this.yieldButtonLb.string = YeildAction.Harvest;
          break;
        case UIManager.instance.gameController.model.storage.strawberrySeed
          .name:
          this.yieldButtonLb.string = YeildAction.Harvest;
          break;
        case UIManager.instance.gameController.model.storage.milkCow.name:
          this.yieldButtonLb.string = YeildAction.Milk;
          break;
        case UIManager.instance.gameController.model.storage.cow.name:
          this.yieldButtonLb.string = YeildAction.Butcher;
          break;
        default:
          break;
      }
    }
  }

  onClickTomatoSeedBtn() {
    if (UIManager.instance.gameController.model.storage.tomatoSeed.number > 0) {
      //this.disableWorker();

      UIManager.instance.gameModel.landArray[this.index].currentAsset =
        UIManager.instance.gameController.model.storage.tomatoSeed;
      UIManager.instance.gameModel.landArray[this.index].isEmpty = false;
      UIManager.instance.gameModel.landArray[this.index].plantType =
        PlantType.tomatoSeed;
      UIManager.instance.gameModel.landArray[this.index].time =
        PlantConfigs.tomatoseed.harvestInterval * 60;

      UIManager.instance.gameModel.landArray[this.index].time -=
        (Math.ceil(
          UIManager.instance.gameModel.landArray[this.index].currentAsset
            .harvestInterval *
            60 *
            UIManager.instance.gameModel.storage.machine.Operate()
        ) /
          100) *
        (UIManager.instance.gameModel.storage.machine.level - 1);

      let maxHarvest =
        UIManager.instance.gameModel.landArray[this.index].currentAsset
          .maxHarvest;
      UIManager.instance.gameModel.landArray[this.index].crop =
        UIManager.instance.gameModel.landArray[
          this.index
        ].currentAsset.maxHarvest;
      UIManager.instance.gameModel.landArray[this.index].crop +=
        (Math.ceil(
          maxHarvest * UIManager.instance.gameModel.storage.machine.Operate()
        ) /
          100) *
        (UIManager.instance.gameModel.storage.machine.level - 1);

      UIManager.instance.gameController.model.storage.tomatoSeed.number -= 1;
      UIManager.instance.gameModel.landArray[this.index].landState =
        LandState.Plant;
      this.disableWorker();

      UIManager.instance.storageUI.updateUI();
      this.updateUI();

      UIManager.instance.enableAllLand();
      UIManager.instance.useWorkerForQueue3();
    }
    //this.disableWorker();
    this.setupLandState();
    //UIManager.instance.pushToQueue(this);
    //UIManager.instance.useWorkerForQueue3();
  }
  onClickBlueberrySeedBtn() {
    if (
      UIManager.instance.gameController.model.storage.blueberrySeed.number > 0
    ) {
      UIManager.instance.gameModel.landArray[this.index].currentAsset =
        UIManager.instance.gameController.model.storage.blueberrySeed;
      //this.disableWorker();
      UIManager.instance.gameModel.landArray[this.index].time =
        PlantConfigs.blueberryseed.harvestInterval * 60;

      UIManager.instance.gameModel.landArray[this.index].time -=
        (Math.ceil(
          UIManager.instance.gameModel.landArray[this.index].currentAsset
            .harvestInterval *
            60 *
            UIManager.instance.gameModel.storage.machine.Operate()
        ) /
          100) *
        (UIManager.instance.gameModel.storage.machine.level - 1);

      UIManager.instance.gameModel.landArray[this.index].isEmpty = false;
      UIManager.instance.gameModel.landArray[this.index].plantType =
        PlantType.blueberrySeed;

      let maxHarvest =
        UIManager.instance.gameModel.landArray[this.index].currentAsset
          .maxHarvest;
      UIManager.instance.gameModel.landArray[this.index].crop =
        UIManager.instance.gameModel.landArray[
          this.index
        ].currentAsset.maxHarvest;
      UIManager.instance.gameModel.landArray[this.index].crop +=
        (Math.ceil(
          maxHarvest * UIManager.instance.gameModel.storage.machine.Operate()
        ) /
          100) *
        (UIManager.instance.gameModel.storage.machine.level - 1);

      UIManager.instance.gameController.model.storage.blueberrySeed.number -= 1;
      UIManager.instance.gameModel.landArray[this.index].landState =
        LandState.Plant;
      this.disableWorker();
      UIManager.instance.storageUI.updateUI();
      this.updateUI();
      UIManager.instance.enableAllLand();
      UIManager.instance.useWorkerForQueue3();
    }

    this.setupLandState();
  }
  onClickStrawberrySeedBtn() {
    if (
      UIManager.instance.gameController.model.storage.strawberrySeed.number > 0
    ) {
      UIManager.instance.gameModel.landArray[this.index].currentAsset =
        UIManager.instance.gameController.model.storage.strawberrySeed;
      //this.disableWorker();
      UIManager.instance.gameModel.landArray[this.index].time =
        PlantConfigs.strawberryseed.harvestInterval * 60;

      UIManager.instance.gameModel.landArray[this.index].time -=
        (Math.ceil(
          UIManager.instance.gameModel.landArray[this.index].currentAsset
            .harvestInterval *
            60 *
            UIManager.instance.gameModel.storage.machine.Operate()
        ) /
          100) *
        (UIManager.instance.gameModel.storage.machine.level - 1);

      UIManager.instance.gameModel.landArray[this.index].isEmpty = false;
      UIManager.instance.gameModel.landArray[this.index].plantType =
        PlantType.strawberrySeed;

      let maxHarvest =
        UIManager.instance.gameModel.landArray[this.index].currentAsset
          .maxHarvest;
      UIManager.instance.gameModel.landArray[this.index].crop =
        UIManager.instance.gameModel.landArray[
          this.index
        ].currentAsset.maxHarvest;
      UIManager.instance.gameModel.landArray[this.index].crop +=
        (Math.ceil(
          maxHarvest * UIManager.instance.gameModel.storage.machine.Operate()
        ) /
          100) *
        (UIManager.instance.gameModel.storage.machine.level - 1);
      UIManager.instance.gameModel.storage.strawberrySeed.number -= 1;
      UIManager.instance.gameModel.landArray[this.index].landState =
        LandState.Plant;
      this.disableWorker();
      UIManager.instance.storageUI.updateUI();
      this.updateUI();
      UIManager.instance.enableAllLand();
      UIManager.instance.useWorkerForQueue3();
    }

    this.setupLandState();
  }
  onClickMilkCowBtn() {
    if (UIManager.instance.gameController.model.storage.milkCow.number > 0) {
      UIManager.instance.gameModel.landArray[this.index].currentAsset =
        UIManager.instance.gameController.model.storage.milkCow;
      //this.disableWorker();
      UIManager.instance.gameModel.landArray[this.index].time =
        CattleConfigs.milkcow.harvestInterval * 60;

      UIManager.instance.gameModel.landArray[this.index].time -=
        (Math.ceil(
          UIManager.instance.gameModel.landArray[this.index].currentAsset
            .harvestInterval *
            60 *
            UIManager.instance.gameModel.storage.machine.Operate()
        ) /
          100) *
        (UIManager.instance.gameModel.storage.machine.level - 1);

      UIManager.instance.gameModel.landArray[this.index].isEmpty = false;
      UIManager.instance.gameModel.landArray[this.index].cattleType =
        CattleType.Milkcow;

      let maxHarvest =
        UIManager.instance.gameModel.landArray[this.index].currentAsset
          .maxHarvest;
      UIManager.instance.gameModel.landArray[this.index].crop =
        UIManager.instance.gameModel.landArray[
          this.index
        ].currentAsset.maxHarvest;
      UIManager.instance.gameModel.landArray[this.index].crop +=
        (Math.ceil(
          maxHarvest * UIManager.instance.gameModel.storage.machine.Operate()
        ) /
          100) *
        (UIManager.instance.gameModel.storage.machine.level - 1);
      UIManager.instance.gameController.model.storage.milkCow.number -= 1;
      UIManager.instance.gameModel.landArray[this.index].landState =
        LandState.Cattle;
      this.disableWorker();
      UIManager.instance.storageUI.updateUI();
      this.updateUI();
      UIManager.instance.enableAllLand();
      UIManager.instance.useWorkerForQueue3();
    }

    this.setupLandState();
  }
  onClickYieldBtn() {
    //this.disableWorker();
    switch (
      UIManager.instance.gameModel.landArray[this.index].currentAsset.name
    ) {
      case UIManager.instance.gameController.model.storage.tomatoSeed.name:
        UIManager.instance.gameController.model.storage.addTomato(
          UIManager.instance.gameModel.landArray[this.index].containYield
        );

        break;
      case UIManager.instance.gameController.model.storage.blueberrySeed.name:
        UIManager.instance.gameController.model.storage.addBlueberry(
          UIManager.instance.gameModel.landArray[this.index].containYield
        );

        break;
      case UIManager.instance.gameController.model.storage.strawberrySeed.name:
        UIManager.instance.gameController.model.storage.addStrawberry(
          UIManager.instance.gameModel.landArray[this.index].containYield
        );

        break;
      case UIManager.instance.gameController.model.storage.milkCow.name:
        UIManager.instance.gameController.model.storage.addMilk(
          UIManager.instance.gameModel.landArray[this.index].containYield
        );

        break;
      case UIManager.instance.gameController.model.storage.cow.name:
        UIManager.instance.gameController.model.storage.addBeef(
          UIManager.instance.gameModel.landArray[this.index].containYield
        );

        break;
      default:
        break;
    }
    UIManager.instance.gameModel.landArray[this.index].containYield = 0;

    UIManager.instance.gameModel.landArray[this.index].landState = UIManager
      .instance.gameModel.landArray[this.index].plantType
      ? LandState.Plant
      : LandState.Cattle;
    if (UIManager.instance.gameModel.landArray[this.index].crop == 0) {
      UIManager.instance.gameModel.landArray[this.index].landState =
        LandState.Empty;
      this.disableWorker();
      this.setupLandState();
      UIManager.instance.storageUI.updateUI();
      this.updateUI();
      UIManager.instance.pushToQueue(this.index);
      UIManager.instance.useWorkerForQueue3();

      return;
    }
    this.disableWorker();
    this.setupLandState();
    UIManager.instance.storageUI.updateUI();
    this.updateUI();
    UIManager.instance.useWorkerForQueue3();
  }
  onClickMilkBtn() {
    this.resetUI();
  }
  setNameLb(name: string) {
    this.nameLb.string = name;
  }
  setYieldContainLb(yieldContain: number) {
    this.yieldContainLb.string = yieldContain.toString();
  }
  setCropLb(crop: number) {
    this.cropLb.string = crop.toString();
  }
  setWorkingIntervalLb(workingTime: number) {
    if (workingTime < 0) {
      this.workingIntervalLb.string = "0s";
    } else {
      let _workingTime = parseInt(workingTime.toString());
      this.workingIntervalLb.string = _workingTime.toString() + "s";
    }
  }
  setTimeLb(time: number) {
    if (time < 0) {
      this.timeLb.string = "0s";
    } else {
      let _time = parseInt(time.toString());
      this.timeLb.string = _time.toString() + "s";
    }
  }

  setWorkerSprite() {
    this.loadImage("Middle", this.workerSprite);
  }
  setSprite(imageName: string) {
    this.loadImage(imageName, this.Sprite);
  }

  loadImage = (imageName: string, sprite: cc.Sprite) => {
    const path = `images/${imageName}`;
    if (imageName == "") {
      sprite.spriteFrame = null;
      return;
    }
    cc.resources.load(path, cc.SpriteFrame, (err, spriteFrame) => {
      if (err) {
        cc.error(`Không thể load ảnh: ${path}`, err);
        return;
      }
      sprite.spriteFrame = spriteFrame;
    });
  };
  resetUI() {
    this.tomatoSeedBtn.node.active = true;
    this.blueberrySeedBtn.node.active = true;
    this.strawberrySeedBtn.node.active = true;
    this.milkCowBtn.node.active = true;
    this.yieldBtn.node.active = false;
    this.nameLb.string = "";
    this.nameLb.node.active = false;
    this.yieldContainLb.string = "";
    this.yieldContainLb.node.active = false;
    this.cropLb.string = "";
    this.cropLb.node.active = false;
    this.timeLb.string = "";
    this.timeLb.node.active = false;
    this.workerSprite.node.active = false;
    this.Sprite.node.active = false;
    this.workingIntervalLb.string = "";
    this.workingIntervalLb.node.active = false;

    UIManager.instance.gameModel.landArray[this.index].plantType = null;
    UIManager.instance.gameModel.landArray[this.index].cattleType = null;

    UIManager.instance.gameModel.landArray[this.index].time = 0;
    UIManager.instance.gameModel.landArray[this.index].isEmpty = true;

    UIManager.instance.gameModel.landArray[this.index].landState =
      LandState.Empty;

    UIManager.instance.gameModel.landArray[this.index].workerAction =
      WorkerAction.TomatoPlant;
  }

  enableLand() {
    this.tomatoSeedBtn.interactable =
      UIManager.instance.gameController.model.storage.tomatoSeed.number > 0;
    this.blueberrySeedBtn.interactable =
      UIManager.instance.gameController.model.storage.blueberrySeed.number > 0;
    this.strawberrySeedBtn.interactable =
      UIManager.instance.gameController.model.storage.strawberrySeed.number > 0;
    this.milkCowBtn.interactable =
      UIManager.instance.gameController.model.storage.milkCow.number > 0;
  }

  enableWorker() {
    this.setWorkerSprite();
    this.workerSprite.node.active = true;
    this.workingIntervalLb.node.active = true;
  }

  disableWorker() {
    if (UIManager.instance.gameModel.landArray[this.index].workingTime != 0) {
      UIManager.instance.gameModel.landArray[this.index].workingTime = 0;
      this.workerSprite.node.active = false;
      UIManager.instance.gameController.model.storage.workingWorkerNumber -= 1;
      this.workingIntervalLb.node.active = false;
    }
  }
  addYield() {
    UIManager.instance.gameModel.landArray[this.index].containYield += 1;
    UIManager.instance.gameModel.landArray[this.index].workerAction =
      WorkerAction.Yielding;
    UIManager.instance.gameModel.landArray[this.index].crop -= 1;
    UIManager.instance.gameModel.landArray[this.index].time =
      UIManager.instance.gameModel.landArray[this.index].currentAsset
        .harvestInterval * 60;

    UIManager.instance.gameModel.landArray[this.index].time -=
      (Math.ceil(
        UIManager.instance.gameModel.landArray[this.index].currentAsset
          .harvestInterval *
          60 *
          UIManager.instance.gameModel.storage.machine.Operate()
      ) /
        100) *
      (UIManager.instance.gameModel.storage.machine.level - 1);

    console.log(
      UIManager.instance.gameModel.landArray[this.index].currentAsset
        .harvestInterval
    );
    if (
      UIManager.instance.gameModel.landArray[this.index].landState !=
      LandState.Harvest
    ) {
      UIManager.instance.gameModel.landArray[this.index].landState =
        LandState.Harvest;
      this.setupLandState();
      UIManager.instance.pushToQueue(this.index);
      UIManager.instance.useWorkerForQueue3();
    }
  }
  switchToEmptyLand() {
    console.log("switch to empty land");
    UIManager.instance.gameModel.landArray[this.index].landState =
      LandState.Empty;
    this.disableWorker();
    this.setupLandState();
    UIManager.instance.storageUI.updateUI();
    this.updateUI();
    UIManager.instance.pushToQueue(this.index);
    UIManager.instance.useWorkerForQueue3();
  }
  changeLandTime(duration: number) {
    UIManager.instance.gameModel.landArray[this.index].time -= duration;
  }
}
