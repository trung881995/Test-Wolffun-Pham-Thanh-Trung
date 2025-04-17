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

  @property(cc.Sprite)
  workerSprite: cc.Sprite = null;

  @property(cc.Sprite)
  Sprite: cc.Sprite = null;

  isEmpty: boolean = true;
  time: number;
  landState: LandState = LandState.Empty;
  plantType: PlantType = null;
  cattleType: CattleType = null;
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {}

  start() {}

  update(dt) {
    if (!this.isEmpty) {
      this.time -= dt;
      if (this.time == 0) {
        this.landState = LandState.Empty;
      } else if (this.time < 0) {
        this.landState = LandState.Harvest;
      } else {
        this.landState =
          this.plantType != null ? LandState.Plant : LandState.Cattle;
      }
      this.DisplayUI();
    }
  }
  public DisplayUI() {
    switch (this.landState) {
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

    console.log("setup UI Done!!!!");
  }
  public updateUI() {
    this.setTimeLb(this.time);

    if (this.time > 0) {
      if (this.landState == LandState.Plant) {
        switch (this.plantType) {
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
      } else if (this.landState == LandState.Cattle) {
        switch (this.cattleType) {
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
    } else if (this.time < 0) {
      this.harvestBtn.node.active = this.plantType != null;
      this.milkBtn.node.active = this.cattleType != null;
    } else {
    }
  }

  onClickTomatoSeedBtn() {
    this.isEmpty = false;
    this.plantType = PlantType.tomatoSeed;
    this.time = PlantConfigs.tomatoseed.harvestInterval * 60;
    //this.updateUI();
  }
  onClickBlueberrySeedBtn() {
    this.time = PlantConfigs.tomatoseed.harvestInterval * 60;
    this.isEmpty = false;
    this.plantType = PlantType.blueberrySeed;
  }
  onClickStrawberrySeedBtn() {
    this.time = PlantConfigs.tomatoseed.harvestInterval * 60;
    this.isEmpty = false;
    this.plantType = PlantType.strawberrySeed;
  }
  onClickMilkCowBtn() {
    this.time = PlantConfigs.tomatoseed.harvestInterval * 60;
    this.isEmpty = false;
    this.cattleType = CattleType.Milkcow;
  }
  onClickHarvestBtn() {
    this.resetUI();
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

    this.plantType = null;
    this.cattleType = null;

    this.time = 0;
    this.isEmpty = true;
  }
}
