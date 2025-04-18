
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/StoreUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66f8f5D91JEoIIs+D0vM++r', 'StoreUI');
// scripts/ui/StoreUI.ts

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
var UIManager_1 = require("../Manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StoreUI = /** @class */ (function (_super) {
    __extends(StoreUI, _super);
    function StoreUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buyTomatoSeedBtn = null;
        _this.buyBlueberrySeedBtn = null;
        _this.buyStrawberrySeedBtn = null;
        _this.buyMilkCowBtn = null;
        _this.buyWorkerBtn = null;
        _this.upgradeMachineBtn = null;
        _this.buyLandBtn = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StoreUI.prototype.start = function () { };
    // update (dt) {}
    StoreUI.prototype.setupUI = function () {
        this.buyTomatoSeedBtn.node.active = true;
        this.buyTomatoSeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyTomatoSeedBtn, this);
        this.buyBlueberrySeedBtn.node.active = true;
        this.buyBlueberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyBlueberrySeedBtn, this);
        this.buyStrawberrySeedBtn.node.active = true;
        this.buyStrawberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyStrawberrySeedBtn, this);
        this.buyMilkCowBtn.node.active = true;
        this.buyMilkCowBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyMilkcowBtn, this);
        this.buyWorkerBtn.node.active = true;
        this.buyWorkerBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyWorkerBtn, this);
        this.upgradeMachineBtn.node.active = true;
        this.upgradeMachineBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickUpgradeMachineBtn, this);
        this.buyLandBtn.node.active = true;
        this.buyLandBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyLandBtn, this);
        console.log("setup UI Done!!!!");
    };
    StoreUI.prototype.updateUI = function () { };
    StoreUI.prototype.resetUI = function () { };
    StoreUI.prototype.onClickBuyTomatoSeedBtn = function () {
        console.log("onClickBuyTomatoSeedBtn!!!!");
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyTomatoSeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.createLand();
        }
    };
    StoreUI.prototype.onClickBuyBlueberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyBlueberrySeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.createLand();
        }
    };
    StoreUI.prototype.onClickBuyStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyStrawberrySeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.createLand();
        }
    };
    StoreUI.prototype.onClickBuyMilkcowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.milkCow.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyMilkCow();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.createLand();
        }
    };
    StoreUI.prototype.onClickBuyWorkerBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.worker.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyWorker();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StoreUI.prototype.onClickUpgradeMachineBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.machine.upgradePrice) {
            UIManager_1.default.instance.gameController.model.store.upgradeMachine();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StoreUI.prototype.onClickBuyLandBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.land.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyLand();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyTomatoSeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyBlueberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyStrawberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyMilkCowBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyWorkerBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "upgradeMachineBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyLandBtn", void 0);
    StoreUI = __decorate([
        ccclass
    ], StoreUI);
    return StoreUI;
}(cc.Component));
exports.default = StoreUI;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1N0b3JlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsa0RBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMklDO1FBeklDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFdEMsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBRXZDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFjLElBQUksQ0FBQzs7SUE2SC9CLENBQUM7SUEzSEMsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLGlCQUFpQjtJQUVWLHlCQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQzNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0IsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUMzQixJQUFJLENBQUMsMEJBQTBCLEVBQy9CLElBQUksQ0FDTCxDQUFDO1FBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUMvQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQzNCLElBQUksQ0FBQywyQkFBMkIsRUFDaEMsSUFBSSxDQUNMLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDeEIsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUMzQixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksQ0FDTCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ3ZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0IsSUFBSSxDQUFDLG1CQUFtQixFQUN4QixJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDNUIsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUMzQixJQUFJLENBQUMsd0JBQXdCLEVBQzdCLElBQUksQ0FDTCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ3JCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLENBQ0wsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsMEJBQVEsR0FBUixjQUFZLENBQUM7SUFDYix5QkFBTyxHQUFQLGNBQVcsQ0FBQztJQUNaLHlDQUF1QixHQUF2QjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMzQyxJQUNFLG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDcEQsbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFDbkU7WUFDQSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5RCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBQ0QsNENBQTBCLEdBQTFCO1FBQ0UsSUFDRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3BELG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQ3RFO1lBQ0EsbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNqRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBQ0QsNkNBQTJCLEdBQTNCO1FBQ0UsSUFDRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3BELG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQ3ZFO1lBQ0EsbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNsRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBQ0Qsc0NBQW9CLEdBQXBCO1FBQ0UsSUFDRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3BELG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQ2hFO1lBQ0EsbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDM0QsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUNELHFDQUFtQixHQUFuQjtRQUNFLElBQ0UsbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUNwRCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUMvRDtZQUNBLG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzFELG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFDRCwwQ0FBd0IsR0FBeEI7UUFDRSxJQUNFLG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDcEQsbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFDcEU7WUFDQSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMvRCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBQ0QsbUNBQWlCLEdBQWpCO1FBQ0UsSUFDRSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3BELG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQzdEO1lBQ0EsbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEQsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQXhJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNlO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ21CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1k7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNnQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNTO0lBZFYsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTJJM0I7SUFBRCxjQUFDO0NBM0lELEFBMklDLENBM0lvQyxFQUFFLENBQUMsU0FBUyxHQTJJaEQ7a0JBM0lvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5VG9tYXRvU2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5Qmx1ZWJlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5U3RyYXdiZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJ1eU1pbGtDb3dCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJ1eVdvcmtlckJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgdXBncmFkZU1hY2hpbmVCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJ1eUxhbmRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgcHVibGljIHNldHVwVUkoKSB7XG4gICAgdGhpcy5idXlUb21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1eVRvbWF0b1NlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eVRvbWF0b1NlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJ1eUJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5Qmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5Qmx1ZWJlcnJ5U2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYnV5U3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5U3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eVN0cmF3YmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5idXlNaWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1eU1pbGtDb3dCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eU1pbGtjb3dCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJ1eVdvcmtlckJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5idXlXb3JrZXJCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eVdvcmtlckJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMudXBncmFkZU1hY2hpbmVCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudXBncmFkZU1hY2hpbmVCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1VwZ3JhZGVNYWNoaW5lQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5idXlMYW5kQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1eUxhbmRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eUxhbmRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcInNldHVwIFVJIERvbmUhISEhXCIpO1xuICB9XG4gIHVwZGF0ZVVJKCkge31cbiAgcmVzZXRVSSgpIHt9XG4gIG9uQ2xpY2tCdXlUb21hdG9TZWVkQnRuKCkge1xuICAgIGNvbnNvbGUubG9nKFwib25DbGlja0J1eVRvbWF0b1NlZWRCdG4hISEhXCIpO1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQuYnV5UHJpY2VcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yZS5idXlUb21hdG9TZWVkKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuY3JlYXRlTGFuZCgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5Qmx1ZWJlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmUuYnV5Qmx1ZWJlcnJ5U2VlZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmNyZWF0ZUxhbmQoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja0J1eVN0cmF3YmVycnlTZWVkQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmJ1eVByaWNlXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmUuYnV5U3RyYXdiZXJyeVNlZWQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5jcmVhdGVMYW5kKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tCdXlNaWxrY293QnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cuYnV5UHJpY2VcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yZS5idXlNaWxrQ293KCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuY3JlYXRlTGFuZCgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5V29ya2VyQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrVXBncmFkZU1hY2hpbmVCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ29sZCA+PVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2VcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yZS51cGdyYWRlTWFjaGluZSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5TGFuZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLmJ1eVByaWNlXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmUuYnV5TGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxufVxuIl19