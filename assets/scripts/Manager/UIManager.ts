// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import { GameController } from "../controllers/GameController";

@ccclass
export default class UIManager extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;

  @property
  text: string = "hello";

  gameController: GameController;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.gameController = new GameController();
  }

  start() {
    this.setupUI();
  }
  async setupUI() {
    await this.gameController.model.loadData();
    this.label.string = this.gameController.model.getLandNumber().toString();
  }
  // update (dt) {}
}
