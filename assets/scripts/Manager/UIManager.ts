// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import { GameController } from "../controllers/GameController";
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
  async setupUI() {
    await this.gameController.model.setData();
    const clones = Array.from({ length: 5 }, () => ({
      ...this.gameController.model.storage.land,
    }));

    for (let i = 0; i < this.gameController.model.storage.land.number; i++) {
      this.landUIArray[i].node.active = true;

      this.landUIArray[i].land = clones[i];
      this.landUIArray[i].DisplayUI();
    }

    this.storageUI.setupUI();
    this.storageUI.updateUI();

    this.storeUI.setupUI();
  }

  createLand() {
    for (let i = 0; i < this.gameController.model.storage.land.number; i++) {
      this.landUIArray[i].enableLand();
    }
  }
}
