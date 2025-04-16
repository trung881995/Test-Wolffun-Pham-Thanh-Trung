
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/LandUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fbc3+Fqj9Cc4pfV5s0aDz8', 'LandUI');
// scripts/ui/LandUI.ts

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
exports.LandState = void 0;
var CattleType_1 = require("../../enums/CattleType");
var PlantType_1 = require("../../enums/PlantType");
var GameConfig_1 = require("../data/GameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LandState;
(function (LandState) {
    LandState[LandState["Undefined"] = 0] = "Undefined";
    LandState[LandState["Empty"] = 1] = "Empty";
    LandState[LandState["Plant"] = 2] = "Plant";
    LandState[LandState["Cattle"] = 3] = "Cattle";
    LandState[LandState["Harvest"] = 4] = "Harvest";
})(LandState = exports.LandState || (exports.LandState = {}));
var LandUI = /** @class */ (function (_super) {
    __extends(LandUI, _super);
    function LandUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tomatoSeedBtn = null;
        _this.blueberrySeedBtn = null;
        _this.strawberrySeedBtn = null;
        _this.milkCowBtn = null;
        _this.harvestBtn = null;
        _this.milkBtn = null;
        _this.nameLb = null;
        _this.timeLb = null;
        _this.workerSprite = null;
        _this.Sprite = null;
        _this.landState = LandState.Undefined;
        _this.loadImage = function (imageName, sprite) {
            var path = "images/" + imageName;
            if (imageName == "") {
                sprite.spriteFrame = null;
                return;
            }
            cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
                if (err) {
                    cc.error("Kh\u00F4ng th\u1EC3 load \u1EA3nh: " + path, err);
                    return;
                }
                sprite.spriteFrame = spriteFrame;
            });
        };
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LandUI.prototype.start = function () {
        this.DisplayUI();
    };
    LandUI.prototype.update = function (dt) {
        if (!this.isEmpty) {
            this.time -= dt;
            if (this.time == 0) {
                this.landState = LandState.Empty;
                this.setupUI();
            }
            else if (this.time < 0) {
                this.landState = LandState.Harvest;
                this.setupUI();
            }
            else {
                this.landState = LandState.Cattle || LandState.Plant;
                this.setupUI();
            }
        }
    };
    LandUI.prototype.DisplayUI = function () {
        switch (this.landState) {
            case LandState.Undefined:
                this.setupUI();
                break;
            case LandState.Empty:
                this.resetUI();
                break;
            case LandState.Harvest:
                this.updateUI();
                break;
            case LandState.Plant:
                this.updateUI();
                break;
            case LandState.Cattle:
                this.updateUI();
                break;
            default:
                break;
        }
    };
    LandUI.prototype.setupUI = function () {
        this.tomatoSeedBtn.enabled = true;
        this.tomatoSeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickTomatoSeedBtn, this);
        this.blueberrySeedBtn.enabled = true;
        this.blueberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBlueberrySeedBtn, this);
        this.strawberrySeedBtn.enabled = true;
        this.strawberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickStrawberrySeedBtn, this);
        this.milkCowBtn.enabled = true;
        this.tomatoSeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickMilkCowBtn, this);
    };
    LandUI.prototype.updateUI = function () {
        this.setTimeLb(this.time);
        if (this.time > 0) {
            switch (this.type) {
                case PlantType_1.PlantType.Tomato:
                    this.setSprite(GameConfig_1.PlantConfigs.tomato.name);
                    this.setNameLb(GameConfig_1.PlantConfigs.tomato.name);
                    break;
                case PlantType_1.PlantType.Blueberry:
                    this.setSprite(GameConfig_1.PlantConfigs.blueberry.name);
                    this.setNameLb(GameConfig_1.PlantConfigs.blueberry.name);
                    break;
                case PlantType_1.PlantType.Strawberry:
                    this.setSprite(GameConfig_1.PlantConfigs.strawberry.name);
                    this.setNameLb(GameConfig_1.PlantConfigs.strawberry.name);
                    break;
                case CattleType_1.CattleType.Cow:
                    this.setSprite(GameConfig_1.CattleConfigs.cow.name);
                    this.setNameLb(GameConfig_1.CattleConfigs.cow.name);
                    break;
                case CattleType_1.CattleType.Milkcow:
                    this.setSprite(GameConfig_1.CattleConfigs.milkcow.name);
                    this.setNameLb(GameConfig_1.CattleConfigs.milkcow.name);
                    break;
                default:
                    break;
            }
        }
        else if (this.time < 0) {
            this.harvestBtn.enabled =
                this.type == PlantType_1.PlantType.Tomato ||
                    this.type == PlantType_1.PlantType.Blueberry ||
                    this.type == PlantType_1.PlantType.Strawberry;
            this.milkBtn.enabled =
                this.type == CattleType_1.CattleType.Cow || this.type == CattleType_1.CattleType.Milkcow;
        }
        else {
        }
    };
    LandUI.prototype.onClickTomatoSeedBtn = function () {
        this.tomatoSeedBtn.enabled = false;
        this.blueberrySeedBtn.enabled = false;
        this.milkCowBtn.enabled = false;
        this.setNameLb(GameConfig_1.PlantConfigs.tomato.name);
        this.setTimeLb(GameConfig_1.PlantConfigs.tomato.harvestInterval);
        this.setSprite(GameConfig_1.PlantConfigs.tomato.name);
        this.time = GameConfig_1.PlantConfigs.tomato.harvestInterval;
        this.isEmpty = false;
        this.type = PlantType_1.PlantType.Tomato;
    };
    LandUI.prototype.onClickBlueberrySeedBtn = function () {
        this.tomatoSeedBtn.enabled = false;
        this.blueberrySeedBtn.enabled = false;
        this.milkCowBtn.enabled = false;
        this.setNameLb(GameConfig_1.PlantConfigs.blueberry.name);
        this.setTimeLb(GameConfig_1.PlantConfigs.blueberry.harvestInterval);
        this.setSprite(GameConfig_1.PlantConfigs.blueberry.name);
        this.time = GameConfig_1.PlantConfigs.tomato.harvestInterval;
        this.isEmpty = false;
        this.type = PlantType_1.PlantType.Blueberry;
    };
    LandUI.prototype.onClickStrawberrySeedBtn = function () {
        this.tomatoSeedBtn.enabled = false;
        this.blueberrySeedBtn.enabled = false;
        this.milkCowBtn.enabled = false;
        this.setNameLb(GameConfig_1.PlantConfigs.blueberry.name);
        this.setTimeLb(GameConfig_1.PlantConfigs.blueberry.harvestInterval);
        this.setSprite(GameConfig_1.PlantConfigs.blueberry.name);
        this.time = GameConfig_1.PlantConfigs.tomato.harvestInterval;
        this.isEmpty = false;
        this.type = PlantType_1.PlantType.Blueberry;
    };
    LandUI.prototype.onClickMilkCowBtn = function () {
        this.tomatoSeedBtn.enabled = false;
        this.blueberrySeedBtn.enabled = false;
        this.milkCowBtn.enabled = false;
        this.setNameLb(GameConfig_1.CattleConfigs.milkcow.name);
        this.setTimeLb(GameConfig_1.CattleConfigs.milkcow.harvestInterval);
        this.setSprite(GameConfig_1.CattleConfigs.milkcow.name);
        this.time = GameConfig_1.PlantConfigs.tomato.harvestInterval;
        this.isEmpty = false;
        this.type = CattleType_1.CattleType.Milkcow;
    };
    LandUI.prototype.onClickHarvestBtn = function () {
        this.resetUI();
    };
    LandUI.prototype.onClickMilkBtn = function () {
        this.resetUI();
    };
    LandUI.prototype.setNameLb = function (name) { };
    LandUI.prototype.setTimeLb = function (time) {
        if (time < 0) {
            this.timeLb.string = "0s";
        }
        else {
            this.timeLb.string = time.toString() + "s";
        }
    };
    LandUI.prototype.setWorkerSprite = function () {
        this.loadImage("Worker", this.workerSprite);
    };
    LandUI.prototype.setSprite = function (imageName) {
        this.loadImage(imageName, this.Sprite);
    };
    LandUI.prototype.resetUI = function () {
        this.tomatoSeedBtn.enabled = true;
        this.blueberrySeedBtn.enabled = true;
        this.milkCowBtn.enabled = true;
        this.harvestBtn.enabled = false;
        this.milkBtn.enabled = false;
        this.nameLb.string = "";
        this.nameLb.enabled = false;
        this.timeLb.string = "";
        this.timeLb.enabled = false;
        this.workerSprite.enabled = false;
        this.Sprite.enabled = false;
        this.time = 0;
        this.isEmpty = true;
    };
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "tomatoSeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "blueberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "strawberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "milkCowBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "harvestBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "milkBtn", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "timeLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], LandUI.prototype, "workerSprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], LandUI.prototype, "Sprite", void 0);
    LandUI = __decorate([
        ccclass
    ], LandUI);
    return LandUI;
}(cc.Component));
exports.default = LandUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxpREFBaUU7QUFFM0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ25CLG1EQUFTLENBQUE7SUFDVCwyQ0FBSyxDQUFBO0lBQ0wsMkNBQUssQ0FBQTtJQUNMLDZDQUFNLENBQUE7SUFDTiwrQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRUQ7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFrUEM7UUFoUEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRW5DLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBS3pCLGVBQVMsR0FBYyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBdUwzQyxlQUFTLEdBQUcsVUFBQyxTQUFpQixFQUFFLE1BQWlCO1lBQy9DLElBQU0sSUFBSSxHQUFHLFlBQVUsU0FBVyxDQUFDO1lBQ25DLElBQUksU0FBUyxJQUFJLEVBQUUs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QUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUU1QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUEvT0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNlO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2dCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUF4Qk4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtQMUI7SUFBRCxhQUFDO0NBbFBELEFBa1BDLENBbFBtQyxFQUFFLENBQUMsU0FBUyxHQWtQL0M7a0JBbFBvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IHsgQ2F0dGxlQ29uZmlncywgUGxhbnRDb25maWdzIH0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZXhwb3J0IGVudW0gTGFuZFN0YXRlIHtcbiAgVW5kZWZpbmVkLFxuICBFbXB0eSxcbiAgUGxhbnQsXG4gIENhdHRsZSxcbiAgSGFydmVzdCxcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5kVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICB0b21hdG9TZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBibHVlYmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzdHJhd2JlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgbWlsa0Nvd0J0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBoYXJ2ZXN0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBtaWxrQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbmFtZUxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdGltZUxiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgd29ya2VyU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICBpc0VtcHR5OiBib29sZWFuO1xuICB0aW1lOiBudW1iZXI7XG4gIHR5cGU6IGFueTtcbiAgbGFuZFN0YXRlOiBMYW5kU3RhdGUgPSBMYW5kU3RhdGUuVW5kZWZpbmVkO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKCF0aGlzLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMudGltZSAtPSBkdDtcbiAgICAgIGlmICh0aGlzLnRpbWUgPT0gMCkge1xuICAgICAgICB0aGlzLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5FbXB0eTtcbiAgICAgICAgdGhpcy5zZXR1cFVJKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGltZSA8IDApIHtcbiAgICAgICAgdGhpcy5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuSGFydmVzdDtcbiAgICAgICAgdGhpcy5zZXR1cFVJKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5DYXR0bGUgfHwgTGFuZFN0YXRlLlBsYW50O1xuICAgICAgICB0aGlzLnNldHVwVUkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVibGljIERpc3BsYXlVSSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMubGFuZFN0YXRlKSB7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5VbmRlZmluZWQ6XG4gICAgICAgIHRoaXMuc2V0dXBVSSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkVtcHR5OlxuICAgICAgICB0aGlzLnJlc2V0VUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5IYXJ2ZXN0OlxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMYW5kU3RhdGUuUGxhbnQ6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5DYXR0bGU6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldHVwVUkoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrVG9tYXRvU2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0JsdWViZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1N0cmF3YmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5taWxrQ293QnRuLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrTWlsa0Nvd0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG4gIHB1YmxpYyB1cGRhdGVVSSgpIHtcbiAgICB0aGlzLnNldFRpbWVMYih0aGlzLnRpbWUpO1xuXG4gICAgaWYgKHRoaXMudGltZSA+IDApIHtcbiAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgUGxhbnRUeXBlLlRvbWF0bzpcbiAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3MudG9tYXRvLm5hbWUpO1xuICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy50b21hdG8ubmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUGxhbnRUeXBlLkJsdWViZXJyeTpcbiAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5Lm5hbWUpO1xuICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy5ibHVlYmVycnkubmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUGxhbnRUeXBlLlN0cmF3YmVycnk6XG4gICAgICAgICAgdGhpcy5zZXRTcHJpdGUoUGxhbnRDb25maWdzLnN0cmF3YmVycnkubmFtZSk7XG4gICAgICAgICAgdGhpcy5zZXROYW1lTGIoUGxhbnRDb25maWdzLnN0cmF3YmVycnkubmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ2F0dGxlVHlwZS5Db3c6XG4gICAgICAgICAgdGhpcy5zZXRTcHJpdGUoQ2F0dGxlQ29uZmlncy5jb3cubmFtZSk7XG4gICAgICAgICAgdGhpcy5zZXROYW1lTGIoQ2F0dGxlQ29uZmlncy5jb3cubmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ2F0dGxlVHlwZS5NaWxrY293OlxuICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lKTtcbiAgICAgICAgICB0aGlzLnNldE5hbWVMYihDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPCAwKSB7XG4gICAgICB0aGlzLmhhcnZlc3RCdG4uZW5hYmxlZCA9XG4gICAgICAgIHRoaXMudHlwZSA9PSBQbGFudFR5cGUuVG9tYXRvIHx8XG4gICAgICAgIHRoaXMudHlwZSA9PSBQbGFudFR5cGUuQmx1ZWJlcnJ5IHx8XG4gICAgICAgIHRoaXMudHlwZSA9PSBQbGFudFR5cGUuU3RyYXdiZXJyeTtcbiAgICAgIHRoaXMubWlsa0J0bi5lbmFibGVkID1cbiAgICAgICAgdGhpcy50eXBlID09IENhdHRsZVR5cGUuQ293IHx8IHRoaXMudHlwZSA9PSBDYXR0bGVUeXBlLk1pbGtjb3c7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9tYXRvU2VlZEJ0bigpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4uZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5taWxrQ293QnRuLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy50b21hdG8ubmFtZSk7XG4gICAgdGhpcy5zZXRUaW1lTGIoUGxhbnRDb25maWdzLnRvbWF0by5oYXJ2ZXN0SW50ZXJ2YWwpO1xuICAgIHRoaXMuc2V0U3ByaXRlKFBsYW50Q29uZmlncy50b21hdG8ubmFtZSk7XG5cbiAgICB0aGlzLnRpbWUgPSBQbGFudENvbmZpZ3MudG9tYXRvLmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLmlzRW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLnR5cGUgPSBQbGFudFR5cGUuVG9tYXRvO1xuICB9XG4gIG9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4uZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXROYW1lTGIoUGxhbnRDb25maWdzLmJsdWViZXJyeS5uYW1lKTtcbiAgICB0aGlzLnNldFRpbWVMYihQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5LmhhcnZlc3RJbnRlcnZhbCk7XG4gICAgdGhpcy5zZXRTcHJpdGUoUGxhbnRDb25maWdzLmJsdWViZXJyeS5uYW1lKTtcblxuICAgIHRoaXMudGltZSA9IFBsYW50Q29uZmlncy50b21hdG8uaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9IFBsYW50VHlwZS5CbHVlYmVycnk7XG4gIH1cbiAgb25DbGlja1N0cmF3YmVycnlTZWVkQnRuKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4uZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXROYW1lTGIoUGxhbnRDb25maWdzLmJsdWViZXJyeS5uYW1lKTtcbiAgICB0aGlzLnNldFRpbWVMYihQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5LmhhcnZlc3RJbnRlcnZhbCk7XG4gICAgdGhpcy5zZXRTcHJpdGUoUGxhbnRDb25maWdzLmJsdWViZXJyeS5uYW1lKTtcblxuICAgIHRoaXMudGltZSA9IFBsYW50Q29uZmlncy50b21hdG8uaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9IFBsYW50VHlwZS5CbHVlYmVycnk7XG4gIH1cbiAgb25DbGlja01pbGtDb3dCdG4oKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4uZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5lbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldE5hbWVMYihDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZSk7XG4gICAgdGhpcy5zZXRUaW1lTGIoQ2F0dGxlQ29uZmlncy5taWxrY293LmhhcnZlc3RJbnRlcnZhbCk7XG4gICAgdGhpcy5zZXRTcHJpdGUoQ2F0dGxlQ29uZmlncy5taWxrY293Lm5hbWUpO1xuXG4gICAgdGhpcy50aW1lID0gUGxhbnRDb25maWdzLnRvbWF0by5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5pc0VtcHR5ID0gZmFsc2U7XG4gICAgdGhpcy50eXBlID0gQ2F0dGxlVHlwZS5NaWxrY293O1xuICB9XG4gIG9uQ2xpY2tIYXJ2ZXN0QnRuKCkge1xuICAgIHRoaXMucmVzZXRVSSgpO1xuICB9XG4gIG9uQ2xpY2tNaWxrQnRuKCkge1xuICAgIHRoaXMucmVzZXRVSSgpO1xuICB9XG4gIHNldE5hbWVMYihuYW1lOiBzdHJpbmcpIHt9XG4gIHNldFRpbWVMYih0aW1lOiBudW1iZXIpIHtcbiAgICBpZiAodGltZSA8IDApIHtcbiAgICAgIHRoaXMudGltZUxiLnN0cmluZyA9IFwiMHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gdGltZS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgfVxuICB9XG4gIHNldFdvcmtlclNwcml0ZSgpIHtcbiAgICB0aGlzLmxvYWRJbWFnZShcIldvcmtlclwiLCB0aGlzLndvcmtlclNwcml0ZSk7XG4gIH1cbiAgc2V0U3ByaXRlKGltYWdlTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoaW1hZ2VOYW1lLCB0aGlzLlNwcml0ZSk7XG4gIH1cblxuICBsb2FkSW1hZ2UgPSAoaW1hZ2VOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGBpbWFnZXMvJHtpbWFnZU5hbWV9YDtcbiAgICBpZiAoaW1hZ2VOYW1lID09IFwiXCIpIHtcbiAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYy5lcnJvcihgS2jDtG5nIHRo4buDIGxvYWQg4bqjbmg6ICR7cGF0aH1gLCBlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9KTtcbiAgfTtcbiAgcmVzZXRVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4uZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmhhcnZlc3RCdG4uZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWlsa0J0bi5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLm5hbWVMYi5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLnRpbWVMYi5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy53b3JrZXJTcHJpdGUuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuU3ByaXRlLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMudGltZSA9IDA7XG4gICAgdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgfVxufVxuIl19