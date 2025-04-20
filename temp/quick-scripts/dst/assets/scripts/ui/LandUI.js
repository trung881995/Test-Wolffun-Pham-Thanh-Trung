
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
exports.WorkerAction = exports.YeildAction = exports.LandState = void 0;
var CattleType_1 = require("../../enums/CattleType");
var PlantType_1 = require("../../enums/PlantType");
var UIManager_1 = require("../Manager/UIManager");
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
var YeildAction;
(function (YeildAction) {
    YeildAction["Undefined"] = "";
    YeildAction["Harvest"] = "Harvest";
    YeildAction["Milk"] = "Milk";
    YeildAction["Butcher"] = "Butcher";
})(YeildAction = exports.YeildAction || (exports.YeildAction = {}));
var WorkerAction;
(function (WorkerAction) {
    WorkerAction[WorkerAction["Undefined"] = 0] = "Undefined";
    WorkerAction[WorkerAction["Yielding"] = 1] = "Yielding";
    WorkerAction[WorkerAction["TomatoPlant"] = 2] = "TomatoPlant";
    WorkerAction[WorkerAction["BlueberryPlant"] = 3] = "BlueberryPlant";
    WorkerAction[WorkerAction["StrawberryPlant"] = 4] = "StrawberryPlant";
    WorkerAction[WorkerAction["MilkcowLiveStock"] = 5] = "MilkcowLiveStock";
    WorkerAction[WorkerAction["CowLiveStock"] = 6] = "CowLiveStock";
})(WorkerAction = exports.WorkerAction || (exports.WorkerAction = {}));
var LandUI = /** @class */ (function (_super) {
    __extends(LandUI, _super);
    function LandUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tomatoSeedBtn = null;
        _this.blueberrySeedBtn = null;
        _this.strawberrySeedBtn = null;
        _this.milkCowBtn = null;
        _this.yieldBtn = null;
        _this.nameLb = null;
        _this.timeLb = null;
        _this.yieldContainLb = null;
        _this.cropLb = null;
        _this.yieldButtonLb = null;
        _this.workerSprite = null;
        _this.workingIntervalLb = null;
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
    LandUI.prototype.onLoad = function () { };
    LandUI.prototype.start = function () {
        this.setupUI();
    };
    LandUI.prototype.update = function (dt) {
        if (this.land != null) {
            if (!this.land.isEmpty) {
                if (this.land.time < -0.5) {
                    if (this.land.crop > 0) {
                        console.log(this.land.currentAsset.maxHarvest);
                        this.addYield();
                    }
                    else {
                        this.switchToEmptyLand();
                    }
                }
                else if (this.land.time > -0.5) {
                    var duration = dt *
                        UIManager_1.default.instance.gameController.model.storage.machine.Operate();
                    this.changeLandTime(duration);
                    this.updateUI();
                }
            }
            else {
                //nothing
            }
            if (this.land.workingTime > 0) {
                this.land.workingTime -= dt;
                this.updateUI();
            }
            else if (this.land.workingTime < 0) {
                UIManager_1.default.instance.gameController.model.storage.worker.Work(this, this.land.workerAction);
            }
            else {
            }
        }
    };
    LandUI.prototype.setupLandState = function () {
        switch (this.land.landState) {
            case LandState.Empty:
                this.resetUI();
                //this.setupUI();
                //this.disableWorker();
                this.land.isReadyToWork = this.land.currentAsset.number > 0;
                break;
            case LandState.Harvest:
                this.updateUI();
                //this.disableWorker();
                this.land.isReadyToWork = true;
                break;
            case LandState.Plant:
                this.updateUI();
                this.land.isReadyToWork = false;
                //this.disableWorker();
                break;
            case LandState.Cattle:
                this.updateUI();
                this.land.isReadyToWork = false;
                //this.disableWorker();
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
        this.yieldBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickYieldBtn, this);
        console.log("setup LandUI Done!!!!");
    };
    LandUI.prototype.updateUI = function () {
        this.setTimeLb(this.land.time);
        this.setCropLb(this.land.crop);
        this.setWorkingIntervalLb(this.land.workingTime);
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
        this.yieldBtn.node.active =
            (this.land.plantType != null || this.land.cattleType != null) &&
                this.land.containYield > 0;
        if (this.yieldBtn.node.active) {
            switch (this.land.currentAsset) {
                case UIManager_1.default.instance.gameController.model.storage.tomatoSeed:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.blueberrySeed:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.strawberrySeed:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.milkCow:
                    this.yieldButtonLb.string = YeildAction.Milk;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.cow:
                    this.yieldButtonLb.string = YeildAction.Butcher;
                    break;
                default:
                    break;
            }
        }
    };
    LandUI.prototype.onClickTomatoSeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number > 0) {
            //this.disableWorker();
            this.land.isEmpty = false;
            this.land.plantType = PlantType_1.PlantType.tomatoSeed;
            this.land.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.tomatoSeed;
            var maxHarvest = this.land.currentAsset.maxHarvest;
            this.land.crop = this.land.currentAsset.maxHarvest;
            this.land.crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number -= 1;
            this.land.landState = LandState.Plant;
            this.disableWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.useWorkerForQueue3();
        }
        //this.disableWorker();
        this.setupLandState();
        //UIManager.instance.pushToQueue(this);
        //UIManager.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickBlueberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.PlantConfigs.blueberryseed.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.plantType = PlantType_1.PlantType.blueberrySeed;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.blueberrySeed;
            var maxHarvest = this.land.currentAsset.maxHarvest;
            this.land.crop = this.land.currentAsset.maxHarvest;
            this.land.crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number -= 1;
            this.land.landState = LandState.Plant;
            this.disableWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.useWorkerForQueue3();
        }
        //this.disableWorker();
        this.setupLandState();
        //UIManager.instance.pushToQueue(this);
        //UIManager.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.PlantConfigs.strawberryseed.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.plantType = PlantType_1.PlantType.strawberrySeed;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.strawberrySeed;
            var maxHarvest = this.land.currentAsset.maxHarvest;
            this.land.crop = this.land.currentAsset.maxHarvest;
            this.land.crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number -= 1;
            this.land.landState = LandState.Plant;
            this.disableWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.useWorkerForQueue3();
        }
        //this.disableWorker();
        this.setupLandState();
        //UIManager.instance.pushToQueue(this);
        //UIManager.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickMilkCowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.milkCow.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.CattleConfigs.milkcow.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.cattleType = CattleType_1.CattleType.Milkcow;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.milkCow;
            var maxHarvest = this.land.currentAsset.maxHarvest;
            this.land.crop = this.land.currentAsset.maxHarvest;
            this.land.crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.milkCow.number -= 1;
            this.land.landState = LandState.Cattle;
            this.disableWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.useWorkerForQueue3();
        }
        //this.disableWorker();
        this.setupLandState();
        //UIManager.instance.pushToQueue(this);
        //UIManager.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickYieldBtn = function () {
        //this.disableWorker();
        switch (this.land.currentAsset.name) {
            case UIManager_1.default.instance.gameController.model.storage.tomatoSeed.name:
                UIManager_1.default.instance.gameController.model.storage.addTomato(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed.name:
                UIManager_1.default.instance.gameController.model.storage.addBlueberry(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed.name:
                UIManager_1.default.instance.gameController.model.storage.addStrawberry(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.milkCow.name:
                UIManager_1.default.instance.gameController.model.storage.addMilk(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.cow.name:
                UIManager_1.default.instance.gameController.model.storage.addBeef(this.land.containYield);
                break;
            default:
                break;
        }
        this.land.containYield = 0;
        //this.updateUI();
        //UIManager.instance.storageUI.updateUI();
        this.land.landState = this.land.plantType
            ? LandState.Plant
            : LandState.Cattle;
        if (this.land.crop == 0) {
            this.land.landState = LandState.Empty;
            this.disableWorker();
            this.setupLandState();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.pushToQueue(this);
            UIManager_1.default.instance.useWorkerForQueue3();
            //UIManager.instance.useWorkerForQueue3();
            //UIManager.instance.useWorkerForQueue3();
            return;
        }
        this.disableWorker();
        this.setupLandState();
        UIManager_1.default.instance.storageUI.updateUI();
        this.updateUI();
        UIManager_1.default.instance.useWorkerForQueue3();
        //UIManager.instance.pushToQueue(this);
        //UIManager.instance.useWorkerForQueue3();
        //this.disableWorker();
        //UIManager.instance.useWorkerForQueue();
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
    LandUI.prototype.setWorkingIntervalLb = function (workingTime) {
        if (workingTime < 0) {
            this.workingIntervalLb.string = "0s";
        }
        else {
            var _workingTime = parseInt(workingTime.toString());
            this.workingIntervalLb.string = _workingTime.toString() + "s";
        }
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
        this.loadImage("Middle", this.workerSprite);
    };
    LandUI.prototype.setSprite = function (imageName) {
        this.loadImage(imageName, this.Sprite);
    };
    LandUI.prototype.resetUI = function () {
        this.tomatoSeedBtn.node.active = true;
        this.blueberrySeedBtn.node.active = true;
        this.strawberrySeedBtn.node.active = true;
        this.milkCowBtn.node.active = true;
        this.yieldBtn.node.active = false;
        this.nameLb.string = "";
        this.nameLb.node.active = false;
        this.yieldContainLb.string = "";
        this.yieldContainLb.node.active = false;
        this.cropLb.string = "";
        this.cropLb.node.active = false;
        this.timeLb.string = "";
        this.timeLb.node.active = false;
        this.workerSprite.node.active = false;
        this.Sprite.node.active = false;
        this.workingIntervalLb.string = "";
        this.workingIntervalLb.node.active = false;
        this.land.plantType = null;
        this.land.cattleType = null;
        this.land.time = 0;
        this.land.isEmpty = true;
        this.land.landState = LandState.Empty;
        //this.land.currentAsset = null;
        this.land.workerAction = WorkerAction.TomatoPlant;
    };
    LandUI.prototype.enableLand = function () {
        this.tomatoSeedBtn.interactable =
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number > 0;
        this.blueberrySeedBtn.interactable =
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number > 0;
        this.strawberrySeedBtn.interactable =
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number > 0;
        this.milkCowBtn.interactable =
            UIManager_1.default.instance.gameController.model.storage.milkCow.number > 0;
    };
    LandUI.prototype.enableWorker = function () {
        this.setWorkerSprite();
        this.workerSprite.node.active = true;
        this.workingIntervalLb.node.active = true;
    };
    LandUI.prototype.disableWorker = function () {
        if (this.land.workingTime != 0) {
            this.land.workingTime = 0;
            this.workerSprite.node.active = false;
            UIManager_1.default.instance.gameController.model.storage.workingWorkerNumber -= 1;
            this.workingIntervalLb.node.active = false;
        }
    };
    LandUI.prototype.addYield = function () {
        this.land.containYield += 1;
        this.land.workerAction = WorkerAction.Yielding;
        this.land.crop -= 1;
        this.land.time = this.land.currentAsset.harvestInterval * 60;
        console.log(this.land.currentAsset.harvestInterval);
        if (this.land.landState != LandState.Harvest) {
            this.land.landState = LandState.Harvest;
            this.setupLandState();
            UIManager_1.default.instance.pushToQueue(this);
            UIManager_1.default.instance.useWorkerForQueue3();
        }
    };
    LandUI.prototype.switchToEmptyLand = function () {
        this.land.landState = LandState.Empty;
        this.disableWorker();
        this.setupLandState();
        UIManager_1.default.instance.storageUI.updateUI();
        this.updateUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
        //UIManager.instance.useWorkerForQueue3();
    };
    LandUI.prototype.changeLandTime = function (duration) {
        this.land.time -= duration;
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
    ], LandUI.prototype, "yieldBtn", void 0);
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
        property(cc.Label)
    ], LandUI.prototype, "yieldButtonLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], LandUI.prototype, "workerSprite", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "workingIntervalLb", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBSzRCO0FBR3RCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQVksU0FNWDtBQU5ELFdBQVksU0FBUztJQUNuQixtREFBUyxDQUFBO0lBQ1QsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCw2Q0FBTSxDQUFBO0lBQ04sK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU1wQjtBQUNELElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQiw2QkFBYyxDQUFBO0lBQ2Qsa0NBQW1CLENBQUE7SUFDbkIsNEJBQWEsQ0FBQTtJQUNiLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUNELElBQVksWUFRWDtBQVJELFdBQVksWUFBWTtJQUN0Qix5REFBUyxDQUFBO0lBQ1QsdURBQVEsQ0FBQTtJQUNSLDZEQUFXLENBQUE7SUFDWCxtRUFBYyxDQUFBO0lBQ2QscUVBQWUsQ0FBQTtJQUNmLHVFQUFnQixDQUFBO0lBQ2hCLCtEQUFZLENBQUE7QUFDZCxDQUFDLEVBUlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFRdkI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWtoQkM7UUFoaEJDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUks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UUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDZ0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNhO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDWTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ2dCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUEvQk4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtoQjFCO0lBQUQsYUFBQztDQWxoQkQsQUFraEJDLENBbGhCbUMsRUFBRSxDQUFDLFNBQVMsR0FraEIvQztrQkFsaEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcbmltcG9ydCB7XG4gIENhdHRsZUNvbmZpZ3MsXG4gIEZpcnN0Q29uZmlncyxcbiAgTGFuZENvbmZpZ3MsXG4gIFBsYW50Q29uZmlncyxcbn0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHsgTGFuZCwgVG9tYXRvU2VlZCB9IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCBlbnVtIExhbmRTdGF0ZSB7XG4gIFVuZGVmaW5lZCxcbiAgRW1wdHksXG4gIFBsYW50LFxuICBDYXR0bGUsXG4gIEhhcnZlc3QsXG59XG5leHBvcnQgZW51bSBZZWlsZEFjdGlvbiB7XG4gIFVuZGVmaW5lZCA9IFwiXCIsXG4gIEhhcnZlc3QgPSBcIkhhcnZlc3RcIixcbiAgTWlsayA9IFwiTWlsa1wiLFxuICBCdXRjaGVyID0gXCJCdXRjaGVyXCIsXG59XG5leHBvcnQgZW51bSBXb3JrZXJBY3Rpb24ge1xuICBVbmRlZmluZWQsXG4gIFlpZWxkaW5nLFxuICBUb21hdG9QbGFudCxcbiAgQmx1ZWJlcnJ5UGxhbnQsXG4gIFN0cmF3YmVycnlQbGFudCxcbiAgTWlsa2Nvd0xpdmVTdG9jayxcbiAgQ293TGl2ZVN0b2NrLFxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHRvbWF0b1NlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJsdWViZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHN0cmF3YmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBtaWxrQ293QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHlpZWxkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbmFtZUxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdGltZUxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgeWllbGRDb250YWluTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBjcm9wTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHlpZWxkQnV0dG9uTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICB3b3JrZXJTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgd29ya2luZ0ludGVydmFsTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgbGFuZDogTGFuZDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gIG9uTG9hZCgpIHt9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5zZXR1cFVJKCk7XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAodGhpcy5sYW5kICE9IG51bGwpIHtcbiAgICAgIGlmICghdGhpcy5sYW5kLmlzRW1wdHkpIHtcbiAgICAgICAgaWYgKHRoaXMubGFuZC50aW1lIDwgLTAuNSkge1xuICAgICAgICAgIGlmICh0aGlzLmxhbmQuY3JvcCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdCk7XG4gICAgICAgICAgICB0aGlzLmFkZFlpZWxkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9FbXB0eUxhbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYW5kLnRpbWUgPiAtMC41KSB7XG4gICAgICAgICAgbGV0IGR1cmF0aW9uID1cbiAgICAgICAgICAgIGR0ICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlTGFuZFRpbWUoZHVyYXRpb24pO1xuICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9ub3RoaW5nXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhbmQud29ya2luZ1RpbWUgPiAwKSB7XG4gICAgICAgIHRoaXMubGFuZC53b3JraW5nVGltZSAtPSBkdDtcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmxhbmQud29ya2luZ1RpbWUgPCAwKSB7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci5Xb3JrKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgdGhpcy5sYW5kLndvcmtlckFjdGlvblxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVibGljIHNldHVwTGFuZFN0YXRlKCkge1xuICAgIHN3aXRjaCAodGhpcy5sYW5kLmxhbmRTdGF0ZSkge1xuICAgICAgY2FzZSBMYW5kU3RhdGUuRW1wdHk6XG4gICAgICAgIHRoaXMucmVzZXRVSSgpO1xuICAgICAgICAvL3RoaXMuc2V0dXBVSSgpO1xuICAgICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubnVtYmVyID4gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5IYXJ2ZXN0OlxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICAgIHRoaXMubGFuZC5pc1JlYWR5VG9Xb3JrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5QbGFudDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkNhdHRsZTpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0dXBVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrVG9tYXRvU2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrU3RyYXdiZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrTWlsa0Nvd0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIC8vdGhpcy5oYXJ2ZXN0QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnlpZWxkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tZaWVsZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coXCJzZXR1cCBMYW5kVUkgRG9uZSEhISFcIik7XG4gIH1cbiAgcHVibGljIHVwZGF0ZVVJKCkge1xuICAgIHRoaXMuc2V0VGltZUxiKHRoaXMubGFuZC50aW1lKTtcbiAgICB0aGlzLnNldENyb3BMYih0aGlzLmxhbmQuY3JvcCk7XG4gICAgdGhpcy5zZXRXb3JraW5nSW50ZXJ2YWxMYih0aGlzLmxhbmQud29ya2luZ1RpbWUpO1xuICAgIHRoaXMuc2V0WWllbGRDb250YWluTGIodGhpcy5sYW5kLmNvbnRhaW5ZaWVsZCk7XG4gICAgaWYgKHRoaXMubGFuZC50aW1lID4gMCkge1xuICAgICAgaWYgKHRoaXMubGFuZC5sYW5kU3RhdGUgPT0gTGFuZFN0YXRlLlBsYW50KSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5sYW5kLnBsYW50VHlwZSkge1xuICAgICAgICAgIGNhc2UgUGxhbnRUeXBlLnRvbWF0b1NlZWQ6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy50b21hdG9zZWVkLm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBQbGFudFR5cGUuYmx1ZWJlcnJ5U2VlZDpcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXROYW1lTGIoUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFBsYW50VHlwZS5zdHJhd2JlcnJ5U2VlZDpcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmxhbmQubGFuZFN0YXRlID09IExhbmRTdGF0ZS5DYXR0bGUpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmxhbmQuY2F0dGxlVHlwZSkge1xuICAgICAgICAgIGNhc2UgQ2F0dGxlVHlwZS5Db3c6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShDYXR0bGVDb25maWdzLmNvdy5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKENhdHRsZUNvbmZpZ3MuY293Lm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBDYXR0bGVUeXBlLk1pbGtjb3c6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLm5hbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnlpZWxkQ29udGFpbkxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3JvcExiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgIH1cblxuICAgIHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUgPVxuICAgICAgKHRoaXMubGFuZC5wbGFudFR5cGUgIT0gbnVsbCB8fCB0aGlzLmxhbmQuY2F0dGxlVHlwZSAhPSBudWxsKSAmJlxuICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZCA+IDA7XG4gICAgaWYgKHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5sYW5kLmN1cnJlbnRBc3NldCkge1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQ6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uSGFydmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uSGFydmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293OlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5NaWxrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmNvdzpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uQnV0Y2hlcjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9tYXRvU2VlZEJ0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPiAwKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5sYW5kLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMubGFuZC5wbGFudFR5cGUgPSBQbGFudFR5cGUudG9tYXRvU2VlZDtcbiAgICAgIHRoaXMubGFuZC50aW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDtcblxuICAgICAgbGV0IG1heEhhcnZlc3QgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICB0aGlzLmxhbmQuY3JvcCA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIHRoaXMubGFuZC5jcm9wICs9XG4gICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICBtYXhIYXJ2ZXN0ICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgLSBtYXhIYXJ2ZXN0O1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIG9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyID4gMFxuICAgICkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMubGFuZC50aW1lID0gUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYW5kLnBsYW50VHlwZSA9IFBsYW50VHlwZS5ibHVlYmVycnlTZWVkO1xuICAgICAgdGhpcy5sYW5kLmN1cnJlbnRBc3NldCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQ7XG5cbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgdGhpcy5sYW5kLmNyb3AgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICB0aGlzLmxhbmQuY3JvcCArPVxuICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgbWF4SGFydmVzdCAqXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC0gbWF4SGFydmVzdDtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgLT0gMTtcbiAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIG9uQ2xpY2tTdHJhd2JlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPiAwXG4gICAgKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5sYW5kLnRpbWUgPSBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYW5kLnBsYW50VHlwZSA9IFBsYW50VHlwZS5zdHJhd2JlcnJ5U2VlZDtcbiAgICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDtcbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgdGhpcy5sYW5kLmNyb3AgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICB0aGlzLmxhbmQuY3JvcCArPVxuICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgbWF4SGFydmVzdCAqXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC0gbWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB9XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgb25DbGlja01pbGtDb3dCdG4oKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID4gMCkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMubGFuZC50aW1lID0gQ2F0dGxlQ29uZmlncy5taWxrY293LmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgICAgdGhpcy5sYW5kLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMubGFuZC5jYXR0bGVUeXBlID0gQ2F0dGxlVHlwZS5NaWxrY293O1xuICAgICAgdGhpcy5sYW5kLmN1cnJlbnRBc3NldCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3c7XG4gICAgICBsZXQgbWF4SGFydmVzdCA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIHRoaXMubGFuZC5jcm9wID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgdGhpcy5sYW5kLmNyb3AgKz1cbiAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgIG1heEhhcnZlc3QgKlxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAtIG1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5DYXR0bGU7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIG9uQ2xpY2tZaWVsZEJ0bigpIHtcbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHN3aXRjaCAodGhpcy5sYW5kLmN1cnJlbnRBc3NldC5uYW1lKSB7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubmFtZTpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkVG9tYXRvKFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCbHVlYmVycnkoXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRTdHJhd2JlcnJ5KFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRNaWxrKFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293Lm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZEJlZWYoXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMubGFuZC5jb250YWluWWllbGQgPSAwO1xuICAgIC8vdGhpcy51cGRhdGVVSSgpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSB0aGlzLmxhbmQucGxhbnRUeXBlXG4gICAgICA/IExhbmRTdGF0ZS5QbGFudFxuICAgICAgOiBMYW5kU3RhdGUuQ2F0dGxlO1xuICAgIGlmICh0aGlzLmxhbmQuY3JvcCA9PSAwKSB7XG4gICAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZSgpO1xuICB9XG4gIG9uQ2xpY2tNaWxrQnRuKCkge1xuICAgIHRoaXMucmVzZXRVSSgpO1xuICB9XG4gIHNldE5hbWVMYihuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBuYW1lO1xuICB9XG4gIHNldFlpZWxkQ29udGFpbkxiKHlpZWxkQ29udGFpbjogbnVtYmVyKSB7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5zdHJpbmcgPSB5aWVsZENvbnRhaW4udG9TdHJpbmcoKTtcbiAgfVxuICBzZXRDcm9wTGIoY3JvcDogbnVtYmVyKSB7XG4gICAgdGhpcy5jcm9wTGIuc3RyaW5nID0gY3JvcC50b1N0cmluZygpO1xuICB9XG4gIHNldFdvcmtpbmdJbnRlcnZhbExiKHdvcmtpbmdUaW1lOiBudW1iZXIpIHtcbiAgICBpZiAod29ya2luZ1RpbWUgPCAwKSB7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IFwiMHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IF93b3JraW5nVGltZSA9IHBhcnNlSW50KHdvcmtpbmdUaW1lLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5zdHJpbmcgPSBfd29ya2luZ1RpbWUudG9TdHJpbmcoKSArIFwic1wiO1xuICAgIH1cbiAgfVxuICBzZXRUaW1lTGIodGltZTogbnVtYmVyKSB7XG4gICAgaWYgKHRpbWUgPCAwKSB7XG4gICAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBcIjBzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBfdGltZSA9IHBhcnNlSW50KHRpbWUudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBfdGltZS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgfVxuICB9XG5cbiAgc2V0V29ya2VyU3ByaXRlKCkge1xuICAgIHRoaXMubG9hZEltYWdlKFwiTWlkZGxlXCIsIHRoaXMud29ya2VyU3ByaXRlKTtcbiAgfVxuICBzZXRTcHJpdGUoaW1hZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvYWRJbWFnZShpbWFnZU5hbWUsIHRoaXMuU3ByaXRlKTtcbiAgfVxuXG4gIGxvYWRJbWFnZSA9IChpbWFnZU5hbWU6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gYGltYWdlcy8ke2ltYWdlTmFtZX1gO1xuICAgIGlmIChpbWFnZU5hbWUgPT0gXCJcIikge1xuICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNjLmVycm9yKGBLaMO0bmcgdGjhu4MgbG9hZCDhuqNuaDogJHtwYXRofWAsIGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgIH0pO1xuICB9O1xuICByZXNldFVJKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMubmFtZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMueWllbGRDb250YWluTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNyb3BMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMuY3JvcExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5TcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5sYW5kLnBsYW50VHlwZSA9IG51bGw7XG4gICAgdGhpcy5sYW5kLmNhdHRsZVR5cGUgPSBudWxsO1xuXG4gICAgdGhpcy5sYW5kLnRpbWUgPSAwO1xuICAgIHRoaXMubGFuZC5pc0VtcHR5ID0gdHJ1ZTtcblxuICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG5cbiAgICAvL3RoaXMubGFuZC5jdXJyZW50QXNzZXQgPSBudWxsO1xuICAgIHRoaXMubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gIH1cblxuICBlbmFibGVMYW5kKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPiAwO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPiAwO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5taWxrQ293QnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm51bWJlciA+IDA7XG4gIH1cblxuICBlbmFibGVXb3JrZXIoKSB7XG4gICAgdGhpcy5zZXRXb3JrZXJTcHJpdGUoKTtcbiAgICB0aGlzLndvcmtlclNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlV29ya2VyKCkge1xuICAgIGlmICh0aGlzLmxhbmQud29ya2luZ1RpbWUgIT0gMCkge1xuICAgICAgdGhpcy5sYW5kLndvcmtpbmdUaW1lID0gMDtcbiAgICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyIC09IDE7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGFkZFlpZWxkKCkge1xuICAgIHRoaXMubGFuZC5jb250YWluWWllbGQgKz0gMTtcbiAgICB0aGlzLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLllpZWxkaW5nO1xuICAgIHRoaXMubGFuZC5jcm9wIC09IDE7XG4gICAgdGhpcy5sYW5kLnRpbWUgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0LmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZC5jdXJyZW50QXNzZXQuaGFydmVzdEludGVydmFsKTtcbiAgICBpZiAodGhpcy5sYW5kLmxhbmRTdGF0ZSAhPSBMYW5kU3RhdGUuSGFydmVzdCkge1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5IYXJ2ZXN0O1xuICAgICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cbiAgfVxuICBzd2l0Y2hUb0VtcHR5TGFuZCgpIHtcbiAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgY2hhbmdlTGFuZFRpbWUoZHVyYXRpb246IG51bWJlcikge1xuICAgIHRoaXMubGFuZC50aW1lIC09IGR1cmF0aW9uO1xuICB9XG59XG4iXX0=