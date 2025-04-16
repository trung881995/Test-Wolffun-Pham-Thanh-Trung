// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

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
  sellStrawberrBtn: cc.Button = null;
  @property(cc.Button)
  sellMilkBtn: cc.Button = null;
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}
}
