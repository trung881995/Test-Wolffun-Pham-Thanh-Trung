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
    await this.gameController.model.loadData();
    this.landUIArray[0].DisplayUI();
    //this.label.string = this.gameController.model.getFirstData().land.number.toString();
  }
  // update (dt) {}
}
