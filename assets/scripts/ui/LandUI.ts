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
import { Land } from "../storage/Storage";

const { ccclass, property } = cc._decorator;
export enum LandState {
  Undefined,
  Empty,
  Plant,
  Cattle,
  Harvest,
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
  harvestBtn: cc.Button = null;
  @property(cc.Button)
  milkBtn: cc.Button = null;

  @property(cc.Label)
  nameLb: cc.Label = null;
  @property(cc.Label)
  timeLb: cc.Label = null;
  @property(cc.Label)
  yieldContainLb: cc.Label = null;

  @property(cc.Sprite)
  workerSprite: cc.Sprite = null;

  @property(cc.Sprite)
  Sprite: cc.Sprite = null;

  land: Land;
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    this.land = new Land();
  }

  start() {}

  update(dt) {
    if (!this.land.isEmpty) {
      this.land.time -= dt;
      if (this.land.time == 0) {
        this.land.landState = LandState.Empty;
      } else if (this.land.time < 0) {
        if (this.land.containYield < this.land.currentAsset.maxHarvest) {
          this.land.containYield += 1;
          this.land.time = this.land.currentAsset.harvestInterval;
          this.land.landState = LandState.Harvest;
        } else {
          this.land.landState = LandState.Empty;
        }
      } else {
        this.land.landState =
          this.land.plantType != null ? LandState.Plant : LandState.Cattle;
      }
      this.DisplayUI();
    }
  }
  public DisplayUI() {
    switch (this.land.landState) {
      case LandState.Empty:
        //this.resetUI();
        this.setupUI();
        break;
      case LandState.Harvest:
        this.updateUI();
        break;
      case LandState.Plant:
        this.updateUI();
        break;
      case LandState.Cattle:
        this.updateUI();
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
    this.harvestBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickHarvestBtn,
      this
    );
    //this.milkBtn.node.active = true;
    this.milkBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickMilkBtn,
      this
    );

    console.log("setup LandUI Done!!!!");
  }
  public updateUI() {
    this.setTimeLb(this.land.time);

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
    } else {
    }
    if (this.land.containYield > 0) {
      this.harvestBtn.node.active = this.land.plantType != null;
      this.milkBtn.node.active = this.land.cattleType != null;
    }
  }

  onClickTomatoSeedBtn() {
    this.land.isEmpty = false;
    this.land.plantType = PlantType.tomatoSeed;
    this.land.time = PlantConfigs.tomatoseed.harvestInterval * 60;
    this.land.currentAsset =
      UIManager.instance.gameController.model.storage.tomatoSeed;
    //this.updateUI();
  }
  onClickBlueberrySeedBtn() {
    this.land.time = PlantConfigs.tomatoseed.harvestInterval * 60;
    this.land.isEmpty = false;
    this.land.plantType = PlantType.blueberrySeed;
    this.land.currentAsset =
      UIManager.instance.gameController.model.storage.blueberrySeed;
  }
  onClickStrawberrySeedBtn() {
    this.land.time = PlantConfigs.tomatoseed.harvestInterval * 60;
    this.land.isEmpty = false;
    this.land.plantType = PlantType.strawberrySeed;
    this.land.currentAsset =
      UIManager.instance.gameController.model.storage.strawberrySeed;
  }
  onClickMilkCowBtn() {
    this.land.time = PlantConfigs.tomatoseed.harvestInterval * 60;
    this.land.isEmpty = false;
    this.land.cattleType = CattleType.Milkcow;
    this.land.currentAsset =
      UIManager.instance.gameController.model.storage.milk;
  }
  onClickHarvestBtn() {
    this.resetUI();
    var _storage = UIManager.instance.gameController.model.storage;
    switch (this.land.currentAsset) {
      case _storage.tomatoSeed:
        _storage.addTomato(this.land.containYield);
        break;
      case _storage.blueberrySeed:
        _storage.addBlueberry(this.land.containYield);
        break;
      case _storage.strawberrySeed:
        _storage.addStrawberry(this.land.containYield);
        break;
      case _storage.milk:
        _storage.addMilk(this.land.containYield);
        break;
      case _storage.beef:
        _storage.addBeef(this.land.containYield);
        break;
      default:
        break;
    }
  }
  onClickMilkBtn() {
    this.resetUI();
  }
  setNameLb(name: string) {
    this.nameLb.string = name;
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
    this.loadImage("Worker", this.workerSprite);
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
    this.harvestBtn.node.active = false;
    this.milkBtn.node.active = false;
    this.nameLb.string = "";
    this.nameLb.node.active = false;
    this.timeLb.string = "";
    this.timeLb.node.active = false;
    this.workerSprite.node.active = false;
    this.Sprite.node.active = false;

    this.land.plantType = null;
    this.land.cattleType = null;

    this.land.time = 0;
    this.land.isEmpty = true;

    this.land.landState = LandState.Empty;
  }

  enableLand() {
    this.tomatoSeedBtn.interactable = true;
    this.blueberrySeedBtn.interactable = true;
    this.strawberrySeedBtn.interactable = true;
    this.milkCowBtn.interactable = true;
  }
}
