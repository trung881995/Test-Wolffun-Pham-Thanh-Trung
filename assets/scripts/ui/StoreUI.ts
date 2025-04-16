// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
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
  upgradeLandBtn: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}
}
