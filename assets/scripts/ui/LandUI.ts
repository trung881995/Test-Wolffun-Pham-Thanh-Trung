// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { CattleType } from "../../enums/CattleType";
import { PlantType } from "../../enums/PlantType";
import UIManager from "../Manager/UIManager";
import { CattleConfigs, PlantConfigs } from "../data/GameConfig";
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

  land: Land;
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    this.land = new Land();
  }

  start() {
    //UIManager.instance.useWorkerForQueue();
  }

  update(dt) {
    if (this.land != null) {
      if (!this.land.isEmpty) {
        if (this.land.time < 0.5) {
          if (
            this.land.containYield < this.land.currentAsset.maxHarvest &&
            this.land.crop > 0
          ) {
            console.log(this.land.currentAsset.maxHarvest);

            this.land.containYield += 1;
            this.land.workerAction = WorkerAction.Yielding;
            this.land.crop -= 1;
            this.land.time = this.land.currentAsset.harvestInterval * 60;
            console.log(this.land.currentAsset.harvestInterval);
            this.land.landState = LandState.Harvest;
            this.DisplayUI();
            UIManager.instance.useWorkerForQueue2();
          } else {
            this.land.landState = LandState.Empty;
            //this.disableWorker();
            this.DisplayUI();
            UIManager.instance.useWorkerForQueue2();
          }
        } else if (this.land.time > 0) {
          this.land.time -= dt;
          this.updateUI();
        }
      } else {
      }

      if (this.land.workingTime > 0) {
        this.land.workingTime -= dt;
        this.updateUI();
        //this.land.isReadyToWork = false;
      } else if (this.land.workingTime < 0) {
        //this.land.isReadyToWork = false;

        UIManager.instance.gameController.model.storage.worker.Work(
          this,
          this.land.workerAction
        );
      } else {
      }
    }
  }
  public DisplayUI() {
    switch (this.land.landState) {
      case LandState.Empty:
        this.resetUI();
        this.setupUI();
        this.land.isReadyToWork = true;
        this.disableWorker();
        break;
      case LandState.Harvest:
        this.updateUI();
        this.land.isReadyToWork = true;
        this.disableWorker();
        break;
      case LandState.Plant:
        this.updateUI();
        this.land.isReadyToWork = false;
        this.disableWorker();
        break;
      case LandState.Cattle:
        this.updateUI();
        this.land.isReadyToWork = false;
        this.disableWorker();
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
    this.setTimeLb(this.land.time);
    this.setCropLb(this.land.crop);
    this.setWorkingIntervalLb(this.land.workingTime);
    this.setYieldContainLb(this.land.containYield);
    if (this.land.time > 0) {
      if (this.land.landState == LandState.Plant) {
        switch (this.land.plantType) {
          case PlantType.tomatoSeed:
            this.setSprite(PlantConfigs.tomatoseed.name);
            this.setNameLb(PlantConfigs.tomatoseed.name);
            break;
          case PlantType.blueberrySeed:
            this.setSprite(PlantConfigs.blueberryseed.name);
            this.setNameLb(PlantConfigs.blueberryseed.name);
            break;
          case PlantType.strawberrySeed:
            this.setSprite(PlantConfigs.strawberryseed.name);
            this.setNameLb(PlantConfigs.strawberryseed.name);
            break;
          default:
            break;
        }
      } else if (this.land.landState == LandState.Cattle) {
        switch (this.land.cattleType) {
          case CattleType.Cow:
            this.setSprite(CattleConfigs.cow.name);
            this.setNameLb(CattleConfigs.cow.name);
            break;
          case CattleType.Milkcow:
            this.setSprite(CattleConfigs.milkcow.name);
            this.setNameLb(CattleConfigs.milkcow.name);
            break;
          default:
            break;
        }
      }

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
      (this.land.plantType != null || this.land.cattleType != null) &&
      this.land.containYield > 0;
    if (this.yieldBtn.node.active) {
      switch (this.land.currentAsset) {
        case UIManager.instance.gameController.model.storage.tomatoSeed:
          this.yieldButtonLb.string = YeildAction.Harvest;
          break;
        case UIManager.instance.gameController.model.storage.blueberrySeed:
          this.yieldButtonLb.string = YeildAction.Harvest;
          break;
        case UIManager.instance.gameController.model.storage.strawberrySeed:
          this.yieldButtonLb.string = YeildAction.Harvest;
          break;
        case UIManager.instance.gameController.model.storage.milkCow:
          this.yieldButtonLb.string = YeildAction.Milk;
          break;
        case UIManager.instance.gameController.model.storage.cow:
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
      this.land.isEmpty = false;
      this.land.plantType = PlantType.tomatoSeed;
      this.land.time = PlantConfigs.tomatoseed.harvestInterval * 60;
      this.land.currentAsset =
        UIManager.instance.gameController.model.storage.tomatoSeed;
      this.land.crop = this.land.currentAsset.maxHarvest;
      UIManager.instance.gameController.model.storage.tomatoSeed.number -= 1;
      this.land.landState = LandState.Plant;
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.enableAllLand();
    }
    //this.disableWorker();
    this.DisplayUI();
    UIManager.instance.useWorkerForQueue2();
  }
  onClickBlueberrySeedBtn() {
    if (
      UIManager.instance.gameController.model.storage.blueberrySeed.number > 0
    ) {
      //this.disableWorker();
      this.land.time = PlantConfigs.blueberryseed.harvestInterval * 60;
      this.land.isEmpty = false;
      this.land.plantType = PlantType.blueberrySeed;
      this.land.currentAsset =
        UIManager.instance.gameController.model.storage.blueberrySeed;
      this.land.crop = this.land.currentAsset.maxHarvest;
      UIManager.instance.gameController.model.storage.blueberrySeed.number -= 1;
      this.land.landState = LandState.Plant;
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.enableAllLand();
    }
    //this.disableWorker();
    this.DisplayUI();
    UIManager.instance.useWorkerForQueue2();
  }
  onClickStrawberrySeedBtn() {
    if (
      UIManager.instance.gameController.model.storage.strawberrySeed.number > 0
    ) {
      //this.disableWorker();
      this.land.time = PlantConfigs.strawberryseed.harvestInterval * 60;
      this.land.isEmpty = false;
      this.land.plantType = PlantType.strawberrySeed;
      this.land.currentAsset =
        UIManager.instance.gameController.model.storage.strawberrySeed;
      this.land.crop = this.land.currentAsset.maxHarvest;
      UIManager.instance.gameController.model.storage.strawberrySeed.number -= 1;
      this.land.landState = LandState.Plant;
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.enableAllLand();
    }
    //this.disableWorker();
    this.DisplayUI();
    UIManager.instance.useWorkerForQueue2();
  }
  onClickMilkCowBtn() {
    if (UIManager.instance.gameController.model.storage.milkCow.number > 0) {
      //this.disableWorker();
      this.land.time = CattleConfigs.milkcow.harvestInterval * 60;
      this.land.isEmpty = false;
      this.land.cattleType = CattleType.Milkcow;
      this.land.currentAsset =
        UIManager.instance.gameController.model.storage.milkCow;
      this.land.crop = this.land.currentAsset.maxHarvest;
      UIManager.instance.gameController.model.storage.milkCow.number -= 1;
      this.land.landState = LandState.Cattle;
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.enableAllLand();
    }
    //this.disableWorker();
    this.DisplayUI();
    UIManager.instance.useWorkerForQueue2();
  }
  onClickYieldBtn() {
    //this.disableWorker();
    switch (this.land.currentAsset) {
      case UIManager.instance.gameController.model.storage.tomatoSeed:
        UIManager.instance.gameController.model.storage.addTomato(
          this.land.containYield
        );

        break;
      case UIManager.instance.gameController.model.storage.blueberrySeed:
        UIManager.instance.gameController.model.storage.addBlueberry(
          this.land.containYield
        );

        break;
      case UIManager.instance.gameController.model.storage.strawberrySeed:
        UIManager.instance.gameController.model.storage.addStrawberry(
          this.land.containYield
        );

        break;
      case UIManager.instance.gameController.model.storage.milkCow:
        UIManager.instance.gameController.model.storage.addMilk(
          this.land.containYield
        );

        break;
      case UIManager.instance.gameController.model.storage.cow:
        UIManager.instance.gameController.model.storage.addBeef(
          this.land.containYield
        );

        break;
      default:
        break;
    }
    this.land.containYield = 0;
    this.updateUI();
    UIManager.instance.storageUI.updateUI();
    this.land.landState = this.land.plantType
      ? LandState.Plant
      : LandState.Cattle;
    if (this.land.crop == 0) {
      this.land.landState = LandState.Empty;
      this.DisplayUI();
      UIManager.instance.useWorkerForQueue2();
      return;
    }
    //this.disableWorker();
    this.DisplayUI();
    UIManager.instance.useWorkerForQueue2();
    //this.disableWorker();
    //UIManager.instance.useWorkerForQueue();
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

    this.land.plantType = null;
    this.land.cattleType = null;

    this.land.time = 0;
    this.land.isEmpty = true;

    this.land.landState = LandState.Empty;

    this.land.currentAsset = null;
    this.land.workerAction = WorkerAction.TomatoPlant;
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

    UIManager.instance.storageUI.updateUI();
    this.updateUI();
    this.workingIntervalLb.node.active = true;
  }

  disableWorker() {
    if (this.land.workingTime != 0) {
      this.land.workingTime = 0;
      this.workerSprite.node.active = false;
      UIManager.instance.gameController.model.storage.workingWorkerNumber -= 1;

      UIManager.instance.storageUI.updateUI();
      this.updateUI();
      this.workingIntervalLb.node.active = false;
      this.land.isReadyToWork = false;
    }
  }
}
