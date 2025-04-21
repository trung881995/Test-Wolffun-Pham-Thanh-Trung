
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/StorageUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var UIManager_1 = require("../Manager/UIManager");
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
        _this.sellStrawberryBtn = null;
        _this.sellMilkBtn = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StorageUI.prototype.start = function () { };
    // update (dt) {}
    StorageUI.prototype.setupUI = function () {
        this.sellTomatoBtn.node.active = true;
        this.sellTomatoBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellTomatoBtn, this);
        this.sellBlueberryBtn.node.active = true;
        this.sellBlueberryBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellBlueberryBtn, this);
        this.sellStrawberryBtn.node.active = true;
        this.sellStrawberryBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellStrawberryBtn, this);
        this.sellMilkBtn.node.active = true;
        this.sellMilkBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellMilkBtn, this);
    };
    StorageUI.prototype.updateUI = function () {
        var idleWorker = UIManager_1.default.instance.gameController.model.storage.getIdleWorker();
        var workingWorker = UIManager_1.default.instance.gameController.model.storage.getWorkingWorker();
        this.tomatoSeed.string =
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number.toString();
        this.blueberrySeed.string =
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number.toString();
        this.strawberrySeed.string =
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number.toString();
        this.milkCow.string =
            UIManager_1.default.instance.gameController.model.storage.milkCow.number.toString();
        this.gold.string =
            UIManager_1.default.instance.gameController.model.storage.gold.toString();
        this.workerIdle.string = idleWorker.toString();
        this.machineLevel.string =
            UIManager_1.default.instance.gameModel.storage.machine.level < 10
                ? UIManager_1.default.instance.gameModel.storage.machine.level.toString()
                : "Max";
        this.workerWorking.string = workingWorker.toString();
        this.tomato.string =
            UIManager_1.default.instance.gameController.model.storage.tomato.number.toString();
        this.blueberry.string =
            UIManager_1.default.instance.gameController.model.storage.blueberry.number.toString();
        this.strawberry.string =
            UIManager_1.default.instance.gameController.model.storage.strawberry.number.toString();
        this.milk.string =
            UIManager_1.default.instance.gameController.model.storage.milk.number.toString();
        console.log("update Storage UI Done !!!");
    };
    StorageUI.prototype.resetUI = function () { };
    StorageUI.prototype.onClickSellTomatoBtn = function () {
        console.log("onClickSellTomatoBtn");
        if (UIManager_1.default.instance.gameController.model.storage.tomato.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellTomato();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellBlueberryBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.blueberry.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellBlueberry();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellStrawberryBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.strawberry.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellStrawberry();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellMilkBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.milk.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellMilk();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
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
    ], StorageUI.prototype, "sellStrawberryBtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1N0b3JhZ2VVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixrREFBNkM7QUFFdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFpSUM7UUEvSEMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFFcEMsaUJBQVcsR0FBYyxJQUFJLENBQUM7O0lBZ0doQyxDQUFDO0lBL0ZDLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixpQkFBaUI7SUFDakIsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxD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Qzs4Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNlO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ2dCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ1U7SUFqQ1gsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWlJN0I7SUFBRCxnQkFBQztDQWpJRCxBQWlJQyxDQWpJc0MsRUFBRSxDQUFDLFNBQVMsR0FpSWxEO2tCQWpJb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB0b21hdG9TZWVkOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYmx1ZWJlcnJ5U2VlZDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHN0cmF3YmVycnlTZWVkOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbWlsa0NvdzogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHdvcmtlcklkbGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB3b3JrZXJXb3JraW5nOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbWFjaGluZUxldmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgZ29sZDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRvbWF0bzogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGJsdWViZXJyeTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHN0cmF3YmVycnk6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBtaWxrOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc2VsbFRvbWF0b0J0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc2VsbEJsdWViZXJyeUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc2VsbFN0cmF3YmVycnlCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHNlbGxNaWxrQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHt9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbiAgc2V0dXBVSSgpIHtcbiAgICB0aGlzLnNlbGxUb21hdG9CdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2VsbFRvbWF0b0J0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrU2VsbFRvbWF0b0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc2VsbEJsdWViZXJyeUJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zZWxsQmx1ZWJlcnJ5QnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTZWxsQmx1ZWJlcnJ5QnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5zZWxsU3RyYXdiZXJyeUJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zZWxsU3RyYXdiZXJyeUJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrU2VsbFN0cmF3YmVycnlCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLnNlbGxNaWxrQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGxNaWxrQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTZWxsTWlsa0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIGNvbnN0IGlkbGVXb3JrZXIgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ2V0SWRsZVdvcmtlcigpO1xuICAgIGNvbnN0IHdvcmtpbmdXb3JrZXIgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ2V0V29ya2luZ1dvcmtlcigpO1xuXG4gICAgdGhpcy50b21hdG9TZWVkLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZC5zdHJpbmcgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pbGtDb3cuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5nb2xkLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkLnRvU3RyaW5nKCk7XG5cbiAgICB0aGlzLndvcmtlcklkbGUuc3RyaW5nID0gaWRsZVdvcmtlci50b1N0cmluZygpO1xuICAgIHRoaXMubWFjaGluZUxldmVsLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5sZXZlbCA8IDEwXG4gICAgICAgID8gVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUubGV2ZWwudG9TdHJpbmcoKVxuICAgICAgICA6IFwiTWF4XCI7XG4gICAgdGhpcy53b3JrZXJXb3JraW5nLnN0cmluZyA9IHdvcmtpbmdXb3JrZXIudG9TdHJpbmcoKTtcblxuICAgIHRoaXMudG9tYXRvLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG8ubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5ibHVlYmVycnkuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeS5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLnN0cmF3YmVycnkuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnkubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5taWxrLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrLm51bWJlci50b1N0cmluZygpO1xuXG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGUgU3RvcmFnZSBVSSBEb25lICEhIVwiKTtcbiAgfVxuICByZXNldFVJKCkge31cblxuICBvbkNsaWNrU2VsbFRvbWF0b0J0bigpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tTZWxsVG9tYXRvQnRuXCIpO1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG8ubnVtYmVyID4gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc2VsbFRvbWF0bygpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrU2VsbEJsdWViZXJyeUJ0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlciA+IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnNlbGxCbHVlYmVycnkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja1NlbGxTdHJhd2JlcnJ5QnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5Lm51bWJlciA+IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnNlbGxTdHJhd2JlcnJ5KCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tTZWxsTWlsa0J0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsay5udW1iZXIgPiAwKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zZWxsTWlsaygpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxufVxuIl19