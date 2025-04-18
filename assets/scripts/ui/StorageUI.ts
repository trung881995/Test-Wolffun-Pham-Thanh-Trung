// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../Manager/UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StorageUI extends cc.Component {
  @property(cc.Label)
  tomatoSeed: cc.Label = null;
  @property(cc.Label)
  blueberrySeed: cc.Label = null;
  @property(cc.Label)
  strawberrySeed: cc.Label = null;
  @property(cc.Label)
  milkCow: cc.Label = null;
  @property(cc.Label)
  workerIdle: cc.Label = null;
  @property(cc.Label)
  workerWorking: cc.Label = null;
  @property(cc.Label)
  machineLevel: cc.Label = null;
  @property(cc.Label)
  gold: cc.Label = null;
  @property(cc.Label)
  tomato: cc.Label = null;
  @property(cc.Label)
  blueberry: cc.Label = null;
  @property(cc.Label)
  strawberry: cc.Label = null;
  @property(cc.Label)
  milk: cc.Label = null;

  @property(cc.Button)
  sellTomatoBtn: cc.Button = null;
  @property(cc.Button)
  sellBlueberryBtn: cc.Button = null;
  @property(cc.Button)
  sellStrawberryBtn: cc.Button = null;
  @property(cc.Button)
  sellMilkBtn: cc.Button = null;
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}
  setupUI() {
    this.sellTomatoBtn.node.active = true;
    this.sellTomatoBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickSellTomatoBtn,
      this
    );
    this.sellBlueberryBtn.node.active = true;
    this.sellBlueberryBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickSellBlueberryBtn,
      this
    );
    this.sellStrawberryBtn.node.active = true;
    this.sellStrawberryBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickSellStrawberryBtn,
      this
    );
    this.sellMilkBtn.node.active = true;
    this.sellMilkBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickSellMilkBtn,
      this
    );
  }
  updateUI() {
    const idleWorker =
      UIManager.instance.gameController.model.storage.getIdleWorker();
    const workingWorker =
      UIManager.instance.gameController.model.storage.getWorkingWorker();
    this.tomatoSeed.string =
      UIManager.instance.gameController.model.storage.tomatoSeed.number.toString();
    this.blueberrySeed.string =
      UIManager.instance.gameController.model.storage.blueberrySeed.number.toString();
    this.strawberrySeed.string =
      UIManager.instance.gameController.model.storage.strawberrySeed.number.toString();
    this.milkCow.string =
      UIManager.instance.gameController.model.storage.milkCow.number.toString();
    this.gold.string =
      UIManager.instance.gameController.model.storage.gold.toString();

    this.workerIdle.string = idleWorker.toString();
    this.machineLevel.string =
      UIManager.instance.gameController.model.storage.machine.level.toString();
    this.workerWorking.string = workingWorker.toString();

    this.tomato.string =
      UIManager.instance.gameController.model.storage.tomato.number.toString();
    this.blueberry.string =
      UIManager.instance.gameController.model.storage.blueberry.number.toString();
    this.strawberry.string =
      UIManager.instance.gameController.model.storage.strawberry.number.toString();
    this.milk.string =
      UIManager.instance.gameController.model.storage.milk.number.toString();
  }
  resetUI() {}

  onClickSellTomatoBtn() {
    UIManager.instance.gameController.model.storage.sellTomato();
    UIManager.instance.storageUI.updateUI();
  }
  onClickSellBlueberryBtn() {
    UIManager.instance.gameController.model.storage.sellBlueberry();
    UIManager.instance.storageUI.updateUI();
  }
  onClickSellStrawberryBtn() {
    UIManager.instance.gameController.model.storage.sellStrawberry();
    UIManager.instance.storageUI.updateUI();
  }
  onClickSellMilkBtn() {
    UIManager.instance.gameController.model.storage.sellMilk();
    UIManager.instance.storageUI.updateUI();
  }
}
