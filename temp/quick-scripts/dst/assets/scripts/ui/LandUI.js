
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
var UIManager_1 = require("../Manager/UIManager");
var GameConfig_1 = require("../data/GameConfig");
var Storage_1 = require("../storage/Storage");
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
        _this.yieldContainLb = null;
        _this.cropLb = null;
        _this.workerSprite = null;
        _this.Sprite = null;
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
    LandUI.prototype.onLoad = function () {
        this.land = new Storage_1.Land();
    };
    LandUI.prototype.start = function () { };
    LandUI.prototype.update = function (dt) {
        if (!this.land.isEmpty) {
            this.land.time -= dt;
            if (this.land.time == 0) {
                this.land.landState = LandState.Empty;
            }
            else if (this.land.time < 0) {
                if (this.land.containYield < this.land.currentAsset.maxHarvest &&
                    this.land.crop > 0) {
                    console.log(this.land.currentAsset.maxHarvest);
                    this.land.containYield += 1;
                    this.land.crop -= 1;
                    this.land.time = this.land.currentAsset.harvestInterval * 60;
                    console.log(this.land.currentAsset.harvestInterval);
                    this.land.landState = LandState.Harvest;
                }
                else {
                    this.land.landState = LandState.Empty;
                }
            }
            else {
                this.land.landState =
                    this.land.plantType != null ? LandState.Plant : LandState.Cattle;
            }
            this.DisplayUI();
        }
    };
    LandUI.prototype.DisplayUI = function () {
        switch (this.land.landState) {
            case LandState.Empty:
                this.resetUI();
                this.setupUI();
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
        this.tomatoSeedBtn.node.active = true;
        this.tomatoSeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickTomatoSeedBtn, this);
        this.blueberrySeedBtn.node.active = true;
        this.blueberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBlueberrySeedBtn, this);
        this.strawberrySeedBtn.node.active = true;
        this.strawberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickStrawberrySeedBtn, this);
        this.milkCowBtn.node.active = true;
        this.milkCowBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickMilkCowBtn, this);
        //this.harvestBtn.node.active = true;
        this.harvestBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickHarvestBtn, this);
        //this.milkBtn.node.active = true;
        this.milkBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickMilkBtn, this);
        console.log("setup LandUI Done!!!!");
    };
    LandUI.prototype.updateUI = function () {
        this.setTimeLb(this.land.time);
        this.setCropLb(this.land.crop);
        this.setYieldContainLb(this.land.containYield);
        if (this.land.time > 0) {
            if (this.land.landState == LandState.Plant) {
                switch (this.land.plantType) {
                    case PlantType_1.PlantType.tomatoSeed:
                        this.setSprite(GameConfig_1.PlantConfigs.tomatoseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.tomatoseed.name);
                        break;
                    case PlantType_1.PlantType.blueberrySeed:
                        this.setSprite(GameConfig_1.PlantConfigs.blueberryseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.blueberryseed.name);
                        break;
                    case PlantType_1.PlantType.strawberrySeed:
                        this.setSprite(GameConfig_1.PlantConfigs.strawberryseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.strawberryseed.name);
                        break;
                    default:
                        break;
                }
            }
            else if (this.land.landState == LandState.Cattle) {
                switch (this.land.cattleType) {
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
            this.tomatoSeedBtn.node.active = false;
            this.blueberrySeedBtn.node.active = false;
            this.strawberrySeedBtn.node.active = false;
            this.milkCowBtn.node.active = false;
            this.nameLb.node.active = true;
            this.timeLb.node.active = true;
            this.Sprite.node.active = true;
            this.yieldContainLb.node.active = true;
            this.cropLb.node.active = true;
        }
        else {
        }
        this.harvestBtn.node.active =
            this.land.plantType != null && this.land.containYield > 0;
        this.milkBtn.node.active =
            this.land.cattleType != null && this.land.containYield > 0;
    };
    LandUI.prototype.onClickTomatoSeedBtn = function () {
        this.land.isEmpty = false;
        this.land.plantType = PlantType_1.PlantType.tomatoSeed;
        this.land.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
        this.land.currentAsset =
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed;
        this.land.crop = this.land.currentAsset.maxHarvest;
        //this.updateUI();
    };
    LandUI.prototype.onClickBlueberrySeedBtn = function () {
        this.land.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
        this.land.isEmpty = false;
        this.land.plantType = PlantType_1.PlantType.blueberrySeed;
        this.land.currentAsset =
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed;
        this.land.crop = this.land.currentAsset.maxHarvest;
    };
    LandUI.prototype.onClickStrawberrySeedBtn = function () {
        this.land.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
        this.land.isEmpty = false;
        this.land.plantType = PlantType_1.PlantType.strawberrySeed;
        this.land.currentAsset =
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed;
        this.land.crop = this.land.currentAsset.maxHarvest;
    };
    LandUI.prototype.onClickMilkCowBtn = function () {
        this.land.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
        this.land.isEmpty = false;
        this.land.cattleType = CattleType_1.CattleType.Milkcow;
        this.land.currentAsset =
            UIManager_1.default.instance.gameController.model.storage.milkCow;
        this.land.crop = this.land.currentAsset.maxHarvest;
    };
    LandUI.prototype.onClickHarvestBtn = function () {
        //this.resetUI();
        switch (this.land.currentAsset) {
            case UIManager_1.default.instance.gameController.model.storage.tomatoSeed:
                UIManager_1.default.instance.gameController.model.storage.addTomato(this.land.containYield);
                this.land.containYield = 0;
                this.updateUI();
                UIManager_1.default.instance.storageUI.updateUI();
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed:
                UIManager_1.default.instance.gameController.model.storage.addBlueberry(this.land.containYield);
                this.land.containYield = 0;
                this.updateUI();
                UIManager_1.default.instance.storageUI.updateUI();
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed:
                UIManager_1.default.instance.gameController.model.storage.addStrawberry(this.land.containYield);
                this.land.containYield = 0;
                this.updateUI();
                UIManager_1.default.instance.storageUI.updateUI();
                break;
            case UIManager_1.default.instance.gameController.model.storage.milk:
                UIManager_1.default.instance.gameController.model.storage.addMilk(this.land.containYield);
                this.land.containYield = 0;
                this.updateUI();
                UIManager_1.default.instance.storageUI.updateUI();
                break;
            case UIManager_1.default.instance.gameController.model.storage.beef:
                UIManager_1.default.instance.gameController.model.storage.addBeef(this.land.containYield);
                this.land.containYield = 0;
                this.updateUI();
                UIManager_1.default.instance.storageUI.updateUI();
                break;
            default:
                break;
        }
        if (this.land.crop == 0) {
            this.resetUI();
        }
    };
    LandUI.prototype.onClickMilkBtn = function () {
        this.resetUI();
    };
    LandUI.prototype.setNameLb = function (name) {
        this.nameLb.string = name;
    };
    LandUI.prototype.setYieldContainLb = function (yieldContain) {
        this.yieldContainLb.string = yieldContain.toString();
    };
    LandUI.prototype.setCropLb = function (crop) {
        this.cropLb.string = crop.toString();
    };
    LandUI.prototype.setTimeLb = function (time) {
        if (time < 0) {
            this.timeLb.string = "0s";
        }
        else {
            var _time = parseInt(time.toString());
            this.timeLb.string = _time.toString() + "s";
        }
    };
    LandUI.prototype.setWorkerSprite = function () {
        this.loadImage("Worker", this.workerSprite);
    };
    LandUI.prototype.setSprite = function (imageName) {
        this.loadImage(imageName, this.Sprite);
    };
    LandUI.prototype.resetUI = function () {
        this.tomatoSeedBtn.node.active = true;
        this.blueberrySeedBtn.node.active = true;
        this.strawberrySeedBtn.node.active = true;
        this.milkCowBtn.node.active = true;
        this.harvestBtn.node.active = false;
        this.milkBtn.node.active = false;
        this.nameLb.string = "";
        this.nameLb.node.active = false;
        this.yieldContainLb.string = "";
        this.yieldContainLb.node.active = false;
        this.timeLb.string = "";
        this.timeLb.node.active = false;
        this.workerSprite.node.active = false;
        this.Sprite.node.active = false;
        this.land.plantType = null;
        this.land.cattleType = null;
        this.land.time = 0;
        this.land.isEmpty = true;
        this.land.landState = LandState.Empty;
    };
    LandUI.prototype.enableLand = function () {
        this.tomatoSeedBtn.interactable = true;
        this.blueberrySeedBtn.interactable = true;
        this.strawberrySeedBtn.interactable = true;
        this.milkCowBtn.interactable = true;
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
        property(cc.Label)
    ], LandUI.prototype, "yieldContainLb", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "cropLb", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQWlFO0FBQ2pFLDhDQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDbkIsbURBQVMsQ0FBQTtJQUNULDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsNkNBQU0sQ0FBQTtJQUNOLCtDQUFPLENBQUE7QUFDVCxDQUFDLEVBTlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFNcEI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWdWQztRQTlVQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IsWUFBTSxHQUFjLElBQUksQ0FBQztRQXVRekIsZUFBUyxHQUFHLFVBQUMsU0FBaUIsRUFBRSxNQUFpQjtZQUMvQyxJQUFNLElBQUksR0FB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QUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2E7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUE1Qk4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWdWMUI7SUFBRCxhQUFDO0NBaFZELEFBZ1ZDLENBaFZtQyxFQUFFLENBQUMsU0FBUyxHQWdWL0M7a0JBaFZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcbmltcG9ydCB7IENhdHRsZUNvbmZpZ3MsIFBsYW50Q29uZmlncyB9IGZyb20gXCIuLi9kYXRhL0dhbWVDb25maWdcIjtcbmltcG9ydCB7IExhbmQsIFRvbWF0b1NlZWQgfSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5leHBvcnQgZW51bSBMYW5kU3RhdGUge1xuICBVbmRlZmluZWQsXG4gIEVtcHR5LFxuICBQbGFudCxcbiAgQ2F0dGxlLFxuICBIYXJ2ZXN0LFxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHRvbWF0b1NlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJsdWViZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHN0cmF3YmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBtaWxrQ293QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGhhcnZlc3RCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIG1pbGtCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB0aW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB5aWVsZENvbnRhaW5MYjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGNyb3BMYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIHdvcmtlclNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgbGFuZDogTGFuZDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmxhbmQgPSBuZXcgTGFuZCgpO1xuICB9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmICghdGhpcy5sYW5kLmlzRW1wdHkpIHtcbiAgICAgIHRoaXMubGFuZC50aW1lIC09IGR0O1xuICAgICAgaWYgKHRoaXMubGFuZC50aW1lID09IDApIHtcbiAgICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5FbXB0eTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sYW5kLnRpbWUgPCAwKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkIDwgdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0ICYmXG4gICAgICAgICAgdGhpcy5sYW5kLmNyb3AgPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdCk7XG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZCArPSAxO1xuICAgICAgICAgIHRoaXMubGFuZC5jcm9wIC09IDE7XG4gICAgICAgICAgdGhpcy5sYW5kLnRpbWUgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0LmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZC5jdXJyZW50QXNzZXQuaGFydmVzdEludGVydmFsKTtcbiAgICAgICAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLkhhcnZlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5FbXB0eTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9XG4gICAgICAgICAgdGhpcy5sYW5kLnBsYW50VHlwZSAhPSBudWxsID8gTGFuZFN0YXRlLlBsYW50IDogTGFuZFN0YXRlLkNhdHRsZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBEaXNwbGF5VUkoKSB7XG4gICAgc3dpdGNoICh0aGlzLmxhbmQubGFuZFN0YXRlKSB7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5FbXB0eTpcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XG4gICAgICAgIHRoaXMuc2V0dXBVSSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkhhcnZlc3Q6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5QbGFudDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkNhdHRsZTpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0dXBVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrVG9tYXRvU2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrU3RyYXdiZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrTWlsa0Nvd0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIC8vdGhpcy5oYXJ2ZXN0QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmhhcnZlc3RCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0hhcnZlc3RCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICAvL3RoaXMubWlsa0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5taWxrQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tNaWxrQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcInNldHVwIExhbmRVSSBEb25lISEhIVwiKTtcbiAgfVxuICBwdWJsaWMgdXBkYXRlVUkoKSB7XG4gICAgdGhpcy5zZXRUaW1lTGIodGhpcy5sYW5kLnRpbWUpO1xuICAgIHRoaXMuc2V0Q3JvcExiKHRoaXMubGFuZC5jcm9wKTtcbiAgICB0aGlzLnNldFlpZWxkQ29udGFpbkxiKHRoaXMubGFuZC5jb250YWluWWllbGQpO1xuICAgIGlmICh0aGlzLmxhbmQudGltZSA+IDApIHtcbiAgICAgIGlmICh0aGlzLmxhbmQubGFuZFN0YXRlID09IExhbmRTdGF0ZS5QbGFudCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubGFuZC5wbGFudFR5cGUpIHtcbiAgICAgICAgICBjYXNlIFBsYW50VHlwZS50b21hdG9TZWVkOlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgUGxhbnRUeXBlLmJsdWViZXJyeVNlZWQ6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBQbGFudFR5cGUuc3RyYXdiZXJyeVNlZWQ6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sYW5kLmxhbmRTdGF0ZSA9PSBMYW5kU3RhdGUuQ2F0dGxlKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5sYW5kLmNhdHRsZVR5cGUpIHtcbiAgICAgICAgICBjYXNlIENhdHRsZVR5cGUuQ293OlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoQ2F0dGxlQ29uZmlncy5jb3cubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihDYXR0bGVDb25maWdzLmNvdy5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ2F0dGxlVHlwZS5NaWxrY293OlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoQ2F0dGxlQ29uZmlncy5taWxrY293Lm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXROYW1lTGIoQ2F0dGxlQ29uZmlncy5taWxrY293Lm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5uYW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy50aW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5TcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy55aWVsZENvbnRhaW5MYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmNyb3BMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICB9XG5cbiAgICB0aGlzLmhhcnZlc3RCdG4ubm9kZS5hY3RpdmUgPVxuICAgICAgdGhpcy5sYW5kLnBsYW50VHlwZSAhPSBudWxsICYmIHRoaXMubGFuZC5jb250YWluWWllbGQgPiAwO1xuICAgIHRoaXMubWlsa0J0bi5ub2RlLmFjdGl2ZSA9XG4gICAgICB0aGlzLmxhbmQuY2F0dGxlVHlwZSAhPSBudWxsICYmIHRoaXMubGFuZC5jb250YWluWWllbGQgPiAwO1xuICB9XG5cbiAgb25DbGlja1RvbWF0b1NlZWRCdG4oKSB7XG4gICAgdGhpcy5sYW5kLmlzRW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmxhbmQucGxhbnRUeXBlID0gUGxhbnRUeXBlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kLnRpbWUgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kLmNyb3AgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgLy90aGlzLnVwZGF0ZVVJKCk7XG4gIH1cbiAgb25DbGlja0JsdWViZXJyeVNlZWRCdG4oKSB7XG4gICAgdGhpcy5sYW5kLnRpbWUgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IGZhbHNlO1xuICAgIHRoaXMubGFuZC5wbGFudFR5cGUgPSBQbGFudFR5cGUuYmx1ZWJlcnJ5U2VlZDtcbiAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQ7XG4gICAgdGhpcy5sYW5kLmNyb3AgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gIH1cbiAgb25DbGlja1N0cmF3YmVycnlTZWVkQnRuKCkge1xuICAgIHRoaXMubGFuZC50aW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgdGhpcy5sYW5kLmlzRW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmxhbmQucGxhbnRUeXBlID0gUGxhbnRUeXBlLnN0cmF3YmVycnlTZWVkO1xuICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ7XG4gICAgdGhpcy5sYW5kLmNyb3AgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gIH1cbiAgb25DbGlja01pbGtDb3dCdG4oKSB7XG4gICAgdGhpcy5sYW5kLnRpbWUgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IGZhbHNlO1xuICAgIHRoaXMubGFuZC5jYXR0bGVUeXBlID0gQ2F0dGxlVHlwZS5NaWxrY293O1xuICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdztcbiAgICB0aGlzLmxhbmQuY3JvcCA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgfVxuICBvbkNsaWNrSGFydmVzdEJ0bigpIHtcbiAgICAvL3RoaXMucmVzZXRVSSgpO1xuXG4gICAgc3dpdGNoICh0aGlzLmxhbmQuY3VycmVudEFzc2V0KSB7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQ6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZFRvbWF0byhcbiAgICAgICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGQgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQ6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZEJsdWViZXJyeShcbiAgICAgICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGQgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRTdHJhd2JlcnJ5KFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZCA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsazpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkTWlsayhcbiAgICAgICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGQgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJlZWY6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZEJlZWYoXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhbmQuY3JvcCA9PSAwKSB7XG4gICAgICB0aGlzLnJlc2V0VUkoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja01pbGtCdG4oKSB7XG4gICAgdGhpcy5yZXNldFVJKCk7XG4gIH1cbiAgc2V0TmFtZUxiKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IG5hbWU7XG4gIH1cbiAgc2V0WWllbGRDb250YWluTGIoeWllbGRDb250YWluOiBudW1iZXIpIHtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLnN0cmluZyA9IHlpZWxkQ29udGFpbi50b1N0cmluZygpO1xuICB9XG4gIHNldENyb3BMYihjcm9wOiBudW1iZXIpIHtcbiAgICB0aGlzLmNyb3BMYi5zdHJpbmcgPSBjcm9wLnRvU3RyaW5nKCk7XG4gIH1cbiAgc2V0VGltZUxiKHRpbWU6IG51bWJlcikge1xuICAgIGlmICh0aW1lIDwgMCkge1xuICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCIwc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgX3RpbWUgPSBwYXJzZUludCh0aW1lLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gX3RpbWUudG9TdHJpbmcoKSArIFwic1wiO1xuICAgIH1cbiAgfVxuXG4gIHNldFdvcmtlclNwcml0ZSgpIHtcbiAgICB0aGlzLmxvYWRJbWFnZShcIldvcmtlclwiLCB0aGlzLndvcmtlclNwcml0ZSk7XG4gIH1cbiAgc2V0U3ByaXRlKGltYWdlTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoaW1hZ2VOYW1lLCB0aGlzLlNwcml0ZSk7XG4gIH1cblxuICBsb2FkSW1hZ2UgPSAoaW1hZ2VOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGBpbWFnZXMvJHtpbWFnZU5hbWV9YDtcbiAgICBpZiAoaW1hZ2VOYW1lID09IFwiXCIpIHtcbiAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYy5lcnJvcihgS2jDtG5nIHRo4buDIGxvYWQg4bqjbmg6ICR7cGF0aH1gLCBlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9KTtcbiAgfTtcbiAgcmVzZXRVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmhhcnZlc3RCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm1pbGtCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMubmFtZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMueWllbGRDb250YWluTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMudGltZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy53b3JrZXJTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5sYW5kLnBsYW50VHlwZSA9IG51bGw7XG4gICAgdGhpcy5sYW5kLmNhdHRsZVR5cGUgPSBudWxsO1xuXG4gICAgdGhpcy5sYW5kLnRpbWUgPSAwO1xuICAgIHRoaXMubGFuZC5pc0VtcHR5ID0gdHJ1ZTtcblxuICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG4gIH1cblxuICBlbmFibGVMYW5kKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgfVxufVxuIl19