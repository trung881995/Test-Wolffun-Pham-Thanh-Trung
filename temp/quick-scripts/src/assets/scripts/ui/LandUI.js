"use strict";
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