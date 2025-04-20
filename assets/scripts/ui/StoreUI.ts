// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../Manager/UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StoreUI extends cc.Component {
  @property(cc.Button)
  buyTomatoSeedBtn: cc.Button = null;
  @property(cc.Button)
  buyBlueberrySeedBtn: cc.Button = null;
  @property(cc.Button)
  buyStrawberrySeedBtn: cc.Button = null;
  @property(cc.Button)
  buyMilkCowBtn: cc.Button = null;
  @property(cc.Button)
  buyWorkerBtn: cc.Button = null;
  @property(cc.Button)
  upgradeMachineBtn: cc.Button = null;
  @property(cc.Button)
  buyLandBtn: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}

  public setupUI() {
    this.buyTomatoSeedBtn.node.active = true;
    this.buyTomatoSeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickBuyTomatoSeedBtn,
      this
    );
    this.buyBlueberrySeedBtn.node.active = true;
    this.buyBlueberrySeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickBuyBlueberrySeedBtn,
      this
    );
    this.buyStrawberrySeedBtn.node.active = true;
    this.buyStrawberrySeedBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickBuyStrawberrySeedBtn,
      this
    );
    this.buyMilkCowBtn.node.active = true;
    this.buyMilkCowBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickBuyMilkcowBtn,
      this
    );
    this.buyWorkerBtn.node.active = true;
    this.buyWorkerBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickBuyWorkerBtn,
      this
    );
    this.upgradeMachineBtn.node.active = true;
    this.upgradeMachineBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickUpgradeMachineBtn,
      this
    );
    this.buyLandBtn.node.active = true;
    this.buyLandBtn.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onClickBuyLandBtn,
      this
    );
    console.log("setup UI Done!!!!");
  }
  updateUI() {}
  resetUI() {}
  onClickBuyTomatoSeedBtn() {
    console.log("onClickBuyTomatoSeedBtn!!!!");
    if (
      UIManager.instance.gameController.model.storage.gold >=
      UIManager.instance.gameController.model.storage.tomatoSeed.buyPrice
    ) {
      UIManager.instance.gameController.model.store.buyTomatoSeed();
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.enableAllLand();
      UIManager.instance.findLandForPlant();
    }
  }
  onClickBuyBlueberrySeedBtn() {
    if (
      UIManager.instance.gameController.model.storage.gold >=
      UIManager.instance.gameController.model.storage.blueberrySeed.buyPrice
    ) {
      UIManager.instance.gameController.model.store.buyBlueberrySeed();
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.enableAllLand();
      UIManager.instance.findLandForPlant();
    }
  }
  onClickBuyStrawberrySeedBtn() {
    if (
      UIManager.instance.gameController.model.storage.gold >=
      UIManager.instance.gameController.model.storage.strawberrySeed.buyPrice
    ) {
      UIManager.instance.gameController.model.store.buyStrawberrySeed();
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.enableAllLand();
      UIManager.instance.findLandForPlant();
    }
  }
  onClickBuyMilkcowBtn() {
    if (
      UIManager.instance.gameController.model.storage.gold >=
      UIManager.instance.gameController.model.storage.milkCow.buyPrice
    ) {
      UIManager.instance.gameController.model.store.buyMilkCow();
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.enableAllLand();
      UIManager.instance.findLandForPlant();
    }
  }
  onClickBuyWorkerBtn() {
    if (
      UIManager.instance.gameController.model.storage.gold >=
      UIManager.instance.gameController.model.storage.worker.buyPrice
    ) {
      UIManager.instance.gameController.model.store.buyWorker();
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.useWorkerForQueue3();
    }
  }
  onClickUpgradeMachineBtn() {
    if (
      UIManager.instance.gameController.model.storage.gold >=
      UIManager.instance.gameController.model.storage.machine.upgradePrice
    ) {
      UIManager.instance.gameController.model.store.upgradeMachine();
      UIManager.instance.storageUI.updateUI();
    }
  }
  onClickBuyLandBtn() {
    if (
      UIManager.instance.gameController.model.storage.gold >=
        UIManager.instance.gameController.model.storage.land.buyPrice &&
      UIManager.instance.gameController.model.storage.land.number < 9
    ) {
      UIManager.instance.gameController.model.store.buyLand();
      UIManager.instance.storageUI.updateUI();
      UIManager.instance.updateLand(
        UIManager.instance.gameController.model.storage.land.number - 1
      );
      UIManager.instance.findLandForPlant();
    }
  }
}
