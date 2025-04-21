// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "./Manager/UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PanelUI extends cc.Component {
  @property(UIManager)
  uiManager: UIManager = null;

  @property
  text: string = "hello";

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}
  startGame() {
    this.uiManager.node.active = true; //UIManager.instance.autoSave();
    this.node.active = false;
  }
}
