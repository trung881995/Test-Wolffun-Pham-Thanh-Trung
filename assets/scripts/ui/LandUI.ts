// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { CattleType } from "../../enums/CattleType";
import { PlantType } from "../../enums/PlantType";
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

  isEmpty: boolean;
  time: number;
  type: any;
  landState: LandState = LandState.Undefined;
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    this.DisplayUI();
  }

  update(dt) {
    if (!this.isEmpty) {
      this.time -= dt;
      if (this.time == 0) {
        this.landState = LandState.Empty;
        this.setupUI();
      } else if (this.time < 0) {
        this.landState = LandState.Harvest;
        this.setupUI();
      } else {
        this.landState = LandState.Cattle || LandState.Plant;
        this.setupUI();
      }
    }
  }
  public DisplayUI() {
    switch (this.landState) {
      case LandState.Undefined:
        this.setupUI();
        break;
      case LandState.Empty:
        this.resetUI();
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
    this.tomatoSeedBtn.enabled = true;
    this.tomatoSeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickTomatoSeedBtn,
      this
    );
    this.blueberrySeedBtn.enabled = true;
    this.blueberrySeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickBlueberrySeedBtn,
      this
    );
    this.strawberrySeedBtn.enabled = true;
    this.strawberrySeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickStrawberrySeedBtn,
      this
    );
    this.milkCowBtn.enabled = true;
    this.tomatoSeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickMilkCowBtn,
      this
    );
  }
  public updateUI() {
    this.setTimeLb(this.time);

    if (this.time > 0) {
      switch (this.type) {
        case PlantType.Tomato:
          this.setSprite(PlantConfigs.tomato.name);
          this.setNameLb(PlantConfigs.tomato.name);
          break;
        case PlantType.Blueberry:
          this.setSprite(PlantConfigs.blueberry.name);
          this.setNameLb(PlantConfigs.blueberry.name);
          break;
        case PlantType.Strawberry:
          this.setSprite(PlantConfigs.strawberry.name);
          this.setNameLb(PlantConfigs.strawberry.name);
          break;
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
    } else if (this.time < 0) {
      this.harvestBtn.enabled =
        this.type == PlantType.Tomato ||
        this.type == PlantType.Blueberry ||
        this.type == PlantType.Strawberry;
      this.milkBtn.enabled =
        this.type == CattleType.Cow || this.type == CattleType.Milkcow;
    } else {
    }
  }

  onClickTomatoSeedBtn() {
    this.tomatoSeedBtn.enabled = false;
    this.blueberrySeedBtn.enabled = false;
    this.milkCowBtn.enabled = false;

    this.setNameLb(PlantConfigs.tomato.name);
    this.setTimeLb(PlantConfigs.tomato.harvestInterval);
    this.setSprite(PlantConfigs.tomato.name);

    this.time = PlantConfigs.tomato.harvestInterval;
    this.isEmpty = false;
    this.type = PlantType.Tomato;
  }
  onClickBlueberrySeedBtn() {
    this.tomatoSeedBtn.enabled = false;
    this.blueberrySeedBtn.enabled = false;
    this.milkCowBtn.enabled = false;

    this.setNameLb(PlantConfigs.blueberry.name);
    this.setTimeLb(PlantConfigs.blueberry.harvestInterval);
    this.setSprite(PlantConfigs.blueberry.name);

    this.time = PlantConfigs.tomato.harvestInterval;
    this.isEmpty = false;
    this.type = PlantType.Blueberry;
  }
  onClickStrawberrySeedBtn() {
    this.tomatoSeedBtn.enabled = false;
    this.blueberrySeedBtn.enabled = false;
    this.milkCowBtn.enabled = false;

    this.setNameLb(PlantConfigs.blueberry.name);
    this.setTimeLb(PlantConfigs.blueberry.harvestInterval);
    this.setSprite(PlantConfigs.blueberry.name);

    this.time = PlantConfigs.tomato.harvestInterval;
    this.isEmpty = false;
    this.type = PlantType.Blueberry;
  }
  onClickMilkCowBtn() {
    this.tomatoSeedBtn.enabled = false;
    this.blueberrySeedBtn.enabled = false;
    this.milkCowBtn.enabled = false;

    this.setNameLb(CattleConfigs.milkcow.name);
    this.setTimeLb(CattleConfigs.milkcow.harvestInterval);
    this.setSprite(CattleConfigs.milkcow.name);

    this.time = PlantConfigs.tomato.harvestInterval;
    this.isEmpty = false;
    this.type = CattleType.Milkcow;
  }
  onClickHarvestBtn() {
    this.resetUI();
  }
  onClickMilkBtn() {
    this.resetUI();
  }
  setNameLb(name: string) {}
  setTimeLb(time: number) {
    if (time < 0) {
      this.timeLb.string = "0s";
    } else {
      this.timeLb.string = time.toString() + "s";
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
    this.tomatoSeedBtn.enabled = true;
    this.blueberrySeedBtn.enabled = true;
    this.milkCowBtn.enabled = true;
    this.harvestBtn.enabled = false;
    this.milkBtn.enabled = false;
    this.nameLb.string = "";
    this.nameLb.enabled = false;
    this.timeLb.string = "";
    this.timeLb.enabled = false;
    this.workerSprite.enabled = false;
    this.Sprite.enabled = false;

    this.time = 0;
    this.isEmpty = true;
  }
}
