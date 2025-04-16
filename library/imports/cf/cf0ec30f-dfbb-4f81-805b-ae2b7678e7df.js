"use strict";
cc._RF.push(module, 'cf0ecMP37tPgYBbrit2eOff', 'StorageUI');
// scripts/ui/StorageUI.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StorageUI = /** @class */ (function (_super) {
    __extends(StorageUI, _super);
    function StorageUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tomatoSeed = null;
        _this.blueberrySeed = null;
        _this.strawberrySeed = null;
        _this.milkCow = null;
        _this.workerIdle = null;
        _this.workerWorking = null;
        _this.machineLevel = null;
        _this.gold = null;
        _this.tomato = null;
        _this.blueberry = null;
        _this.strawberry = null;
        _this.milk = null;
        _this.sellTomatoBtn = null;
        _this.sellBlueberryBtn = null;
        _this.sellStrawberrBtn = null;
        _this.sellMilkBtn = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StorageUI.prototype.start = function () { };
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "tomatoSeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "blueberrySeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "strawberrySeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "milkCow", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "workerIdle", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "workerWorking", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "machineLevel", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "gold", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "tomato", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "blueberry", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "strawberry", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "milk", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellTomatoBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellBlueberryBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellStrawberrBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellMilkBtn", void 0);
    StorageUI = __decorate([
        ccclass
    ], StorageUI);
    return StorageUI;
}(cc.Component));
exports.default = StorageUI;

cc._RF.pop();