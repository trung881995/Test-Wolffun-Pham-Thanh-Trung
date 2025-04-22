
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
    //land: Land;
    // LIFE-CYCLE CALLBACKS:
    LandUI.prototype.onLoad = function () { };
    LandUI.prototype.start = function () {
        this.setupUI();
    };
    LandUI.prototype.update = function (dt) {
        if (UIManager_1.default.instance.gameModel.landArray[this.index]) {
            if (!UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty) {
                if (UIManager_1.default.instance.gameModel.landArray[this.index].time < -0.5) {
                    if (UIManager_1.default.instance.gameModel.landArray[this.index].crop > 0) {
                        this.addYield();
                    }
                    else {
                        this.switchToEmptyLand();
                    }
                }
                else if (UIManager_1.default.instance.gameModel.landArray[this.index].time > -0.5) {
                    this.changeLandTime(dt);
                    this.updateUI();
                    console.log("change Time!!!!!");
                }
            }
            if (UIManager_1.default.instance.gameModel.landArray[this.index].workingTime > 0) {
                UIManager_1.default.instance.gameModel.landArray[this.index].workingTime -= dt;
                this.updateUI();
            }
            else if (UIManager_1.default.instance.gameModel.landArray[this.index].workingTime < 0) {
                UIManager_1.default.instance.gameModel.storage.worker.Work(this, UIManager_1.default.instance.gameModel.landArray[this.index].workerAction);
            }
            else {
            }
        }
    };
    LandUI.prototype.setupLandState = function () {
        switch (UIManager_1.default.instance.gameModel.landArray[this.index].landState) {
            case LandState.Empty:
                this.resetUI();
                UIManager_1.default.instance.gameModel.landArray[this.index].isReadyToWork =
                    UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                        .number > 0;
                break;
            case LandState.Harvest:
                this.updateUI();
                UIManager_1.default.instance.gameModel.landArray[this.index].isReadyToWork = true;
                break;
            case LandState.Plant:
                this.updateUI();
                UIManager_1.default.instance.gameModel.landArray[this.index].isReadyToWork =
                    false;
                break;
            case LandState.Cattle:
                this.updateUI();
                UIManager_1.default.instance.gameModel.landArray[this.index].isReadyToWork =
                    false;
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
        this.setTimeLb(UIManager_1.default.instance.gameModel.landArray[this.index].time);
        this.setCropLb(UIManager_1.default.instance.gameModel.landArray[this.index].crop);
        this.setWorkingIntervalLb(UIManager_1.default.instance.gameModel.landArray[this.index].workingTime);
        this.setYieldContainLb(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
        if (UIManager_1.default.instance.gameModel.landArray[this.index].time > 0) {
            this.setSprite(UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.name);
            this.setNameLb(UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.name);
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
            (UIManager_1.default.instance.gameModel.landArray[this.index].plantType ||
                UIManager_1.default.instance.gameModel.landArray[this.index].cattleType) &&
                UIManager_1.default.instance.gameModel.landArray[this.index].containYield > 0;
        if (this.yieldBtn.node.active) {
            switch (UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.name) {
                case UIManager_1.default.instance.gameController.model.storage.tomatoSeed.name:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.blueberrySeed.name:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.strawberrySeed
                    .name:
                    this.yieldButtonLb.string = YeildAction.Harvest;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.milkCow.name:
                    this.yieldButtonLb.string = YeildAction.Milk;
                    break;
                case UIManager_1.default.instance.gameController.model.storage.cow.name:
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
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset =
                UIManager_1.default.instance.gameController.model.storage.tomatoSeed;
            UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = false;
            UIManager_1.default.instance.gameModel.landArray[this.index].plantType =
                PlantType_1.PlantType.tomatoSeed;
            UIManager_1.default.instance.gameModel.landArray[this.index].time =
                GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
            UIManager_1.default.instance.gameModel.landArray[this.index].time -=
                (Math.ceil(UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                    .harvestInterval *
                    60 *
                    UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                    100) *
                    (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop =
                UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop +=
                (Math.ceil(maxHarvest * UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                    100) *
                    (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number -= 1;
            UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                LandState.Plant;
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
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset =
                UIManager_1.default.instance.gameController.model.storage.blueberrySeed;
            //this.disableWorker();
            UIManager_1.default.instance.gameModel.landArray[this.index].time =
                GameConfig_1.PlantConfigs.blueberryseed.harvestInterval * 60;
            UIManager_1.default.instance.gameModel.landArray[this.index].time -=
                (Math.ceil(UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                    .harvestInterval *
                    60 *
                    UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                    100) *
                    (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
            UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = false;
            UIManager_1.default.instance.gameModel.landArray[this.index].plantType =
                PlantType_1.PlantType.blueberrySeed;
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop =
                UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop +=
                (Math.ceil(maxHarvest * UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                    100) *
                    (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number -= 1;
            UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                LandState.Plant;
            this.disableWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.useWorkerForQueue3();
        }
        this.setupLandState();
    };
    LandUI.prototype.onClickStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number > 0) {
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset =
                UIManager_1.default.instance.gameController.model.storage.strawberrySeed;
            //this.disableWorker();
            UIManager_1.default.instance.gameModel.landArray[this.index].time =
                GameConfig_1.PlantConfigs.strawberryseed.harvestInterval * 60;
            UIManager_1.default.instance.gameModel.landArray[this.index].time -=
                (Math.ceil(UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                    .harvestInterval *
                    60 *
                    UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                    100) *
                    (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
            UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = false;
            UIManager_1.default.instance.gameModel.landArray[this.index].plantType =
                PlantType_1.PlantType.strawberrySeed;
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop =
                UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop +=
                (Math.ceil(maxHarvest * UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                    100) *
                    (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
            UIManager_1.default.instance.gameModel.storage.strawberrySeed.number -= 1;
            UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                LandState.Plant;
            this.disableWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.useWorkerForQueue3();
        }
        this.setupLandState();
    };
    LandUI.prototype.onClickMilkCowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.milkCow.number > 0) {
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset =
                UIManager_1.default.instance.gameController.model.storage.milkCow;
            //this.disableWorker();
            UIManager_1.default.instance.gameModel.landArray[this.index].time =
                GameConfig_1.CattleConfigs.milkcow.harvestInterval * 60;
            UIManager_1.default.instance.gameModel.landArray[this.index].time -=
                (Math.ceil(UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                    .harvestInterval *
                    60 *
                    UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                    100) *
                    (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
            UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = false;
            UIManager_1.default.instance.gameModel.landArray[this.index].cattleType =
                CattleType_1.CattleType.Milkcow;
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop =
                UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop +=
                (Math.ceil(maxHarvest * UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                    100) *
                    (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
            UIManager_1.default.instance.gameController.model.storage.milkCow.number -= 1;
            UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                LandState.Cattle;
            this.disableWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.useWorkerForQueue3();
        }
        this.setupLandState();
    };
    LandUI.prototype.onClickYieldBtn = function () {
        //this.disableWorker();
        switch (UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.name) {
            case UIManager_1.default.instance.gameController.model.storage.tomatoSeed.name:
                UIManager_1.default.instance.gameController.model.storage.addTomato(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                    LandState.Plant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed.name:
                UIManager_1.default.instance.gameController.model.storage.addBlueberry(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                    LandState.Plant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed.name:
                UIManager_1.default.instance.gameController.model.storage.addStrawberry(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                    LandState.Plant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.milkCow.name:
                UIManager_1.default.instance.gameController.model.storage.addMilk(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                    LandState.Cattle;
                break;
            case UIManager_1.default.instance.gameController.model.storage.cow.name:
                UIManager_1.default.instance.gameController.model.storage.addBeef(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                    LandState.Cattle;
                break;
            default:
                break;
        }
        UIManager_1.default.instance.gameModel.landArray[this.index].containYield = 0;
        if (UIManager_1.default.instance.gameModel.landArray[this.index].crop == 0) {
            UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                LandState.Empty;
            this.disableWorker();
            this.setupLandState();
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            UIManager_1.default.instance.pushToQueue(this.index);
            UIManager_1.default.instance.useWorkerForQueue3();
            return;
        }
        this.disableWorker();
        this.setupLandState();
        UIManager_1.default.instance.storageUI.updateUI();
        this.updateUI();
        UIManager_1.default.instance.useWorkerForQueue3();
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
        UIManager_1.default.instance.gameModel.landArray[this.index].plantType = null;
        UIManager_1.default.instance.gameModel.landArray[this.index].cattleType = null;
        UIManager_1.default.instance.gameModel.landArray[this.index].time = 0;
        UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = true;
        UIManager_1.default.instance.gameModel.landArray[this.index].landState =
            LandState.Empty;
        UIManager_1.default.instance.gameModel.landArray[this.index].workerAction =
            WorkerAction.TomatoPlant;
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
        if (UIManager_1.default.instance.gameModel.landArray[this.index].workingTime != 0) {
            UIManager_1.default.instance.gameModel.landArray[this.index].workingTime = 0;
            this.workerSprite.node.active = false;
            UIManager_1.default.instance.gameController.model.storage.workingWorkerNumber -= 1;
            this.workingIntervalLb.node.active = false;
        }
    };
    LandUI.prototype.addYield = function () {
        UIManager_1.default.instance.gameModel.landArray[this.index].containYield += 1;
        UIManager_1.default.instance.gameModel.landArray[this.index].workerAction =
            WorkerAction.Yielding;
        UIManager_1.default.instance.gameModel.landArray[this.index].crop -= 1;
        UIManager_1.default.instance.gameModel.landArray[this.index].time =
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .harvestInterval * 60;
        UIManager_1.default.instance.gameModel.landArray[this.index].time -=
            (Math.ceil(UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .harvestInterval *
                60 *
                UIManager_1.default.instance.gameModel.storage.machine.Operate()) /
                100) *
                (UIManager_1.default.instance.gameModel.storage.machine.level - 1);
        console.log(UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
            .harvestInterval);
        if (UIManager_1.default.instance.gameModel.landArray[this.index].landState !=
            LandState.Harvest) {
            UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                LandState.Harvest;
            this.setupLandState();
            UIManager_1.default.instance.pushToQueue(this.index);
            UIManager_1.default.instance.useWorkerForQueue3();
        }
    };
    LandUI.prototype.switchToEmptyLand = function () {
        console.log("switch to empty land");
        UIManager_1.default.instance.gameModel.landArray[this.index].landState =
            LandState.Empty;
        this.disableWorker();
        this.setupLandState();
        UIManager_1.default.instance.storageUI.updateUI();
        this.updateUI();
        UIManager_1.default.instance.pushToQueue(this.index);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.changeLandTime = function (duration) {
        UIManager_1.default.instance.gameModel.landArray[this.index].time -= duration;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBSzRCO0FBR3RCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQVksU0FNWDtBQU5ELFdBQVksU0FBUztJQUNuQixtREFBUyxDQUFBO0lBQ1QsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCw2Q0FBTSxDQUFBO0lBQ04sK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU1wQjtBQUNELElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQiw2QkFBYyxDQUFBO0lBQ2Qsa0NBQW1CLENBQUE7SUFDbkIsNEJBQWEsQ0FBQTtJQUNiLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUNELElBQVksWUFRWDtBQVJELFdBQVksWUFBWTtJQUN0Qix5REFBUyxDQUFBO0lBQ1QsdURBQVEsQ0FBQTtJQUNSLDZEQUFXLENBQUE7SUFDWCxtRUFBYyxDQUFBO0lBQ2QscUVBQWUsQ0FBQTtJQUNmLHVFQUFnQixDQUFBO0lBQ2hCLCtEQUFZLENBQUE7QUFDZCxDQUFDLEVBUlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFRdkI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXNtQkM7UUFwbUJDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUks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QUM7SUFubUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1k7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDZTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNnQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2E7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNZO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDSztJQS9CTixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBc21CMUI7SUFBRCxhQUFDO0NBdG1CRCxBQXNtQkMsQ0F0bUJtQyxFQUFFLENBQUMsU0FBUyxHQXNtQi9DO2tCQXRtQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgQ2F0dGxlQ29uZmlncyxcbiAgRmlyc3RDb25maWdzLFxuICBMYW5kQ29uZmlncyxcbiAgUGxhbnRDb25maWdzLFxufSBmcm9tIFwiLi4vZGF0YS9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgeyBMYW5kLCBUb21hdG9TZWVkIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZXhwb3J0IGVudW0gTGFuZFN0YXRlIHtcbiAgVW5kZWZpbmVkLFxuICBFbXB0eSxcbiAgUGxhbnQsXG4gIENhdHRsZSxcbiAgSGFydmVzdCxcbn1cbmV4cG9ydCBlbnVtIFllaWxkQWN0aW9uIHtcbiAgVW5kZWZpbmVkID0gXCJcIixcbiAgSGFydmVzdCA9IFwiSGFydmVzdFwiLFxuICBNaWxrID0gXCJNaWxrXCIsXG4gIEJ1dGNoZXIgPSBcIkJ1dGNoZXJcIixcbn1cbmV4cG9ydCBlbnVtIFdvcmtlckFjdGlvbiB7XG4gIFVuZGVmaW5lZCxcbiAgWWllbGRpbmcsXG4gIFRvbWF0b1BsYW50LFxuICBCbHVlYmVycnlQbGFudCxcbiAgU3RyYXdiZXJyeVBsYW50LFxuICBNaWxrY293TGl2ZVN0b2NrLFxuICBDb3dMaXZlU3RvY2ssXG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgdG9tYXRvU2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYmx1ZWJlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc3RyYXdiZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIG1pbGtDb3dCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgeWllbGRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB0aW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB5aWVsZENvbnRhaW5MYjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGNyb3BMYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgeWllbGRCdXR0b25MYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIHdvcmtlclNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB3b3JraW5nSW50ZXJ2YWxMYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICBpbmRleDogbnVtYmVyO1xuICAvL2xhbmQ6IExhbmQ7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICBvbkxvYWQoKSB7fVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc2V0dXBVSSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdKSB7XG4gICAgICBpZiAoIVVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkpIHtcbiAgICAgICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPCAtMC41KSB7XG4gICAgICAgICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFlpZWxkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9FbXB0eUxhbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA+IC0wLjVcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VMYW5kVGltZShkdCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIFRpbWUhISEhIVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWUgPiAwKSB7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lIC09IGR0O1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS53b3JraW5nVGltZSA8IDBcbiAgICAgICkge1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2Uud29ya2VyLldvcmsoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS53b3JrZXJBY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZXR1cExhbmRTdGF0ZSgpIHtcbiAgICBzd2l0Y2ggKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSkge1xuICAgICAgY2FzZSBMYW5kU3RhdGUuRW1wdHk6XG4gICAgICAgIHRoaXMucmVzZXRVSSgpO1xuXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzUmVhZHlUb1dvcmsgPVxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgICAgLm51bWJlciA+IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMYW5kU3RhdGUuSGFydmVzdDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzUmVhZHlUb1dvcmsgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLlBsYW50OlxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzUmVhZHlUb1dvcmsgPVxuICAgICAgICAgIGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMYW5kU3RhdGUuQ2F0dGxlOlxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzUmVhZHlUb1dvcmsgPVxuICAgICAgICAgIGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZXR1cFVJKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tUb21hdG9TZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0JsdWViZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTdHJhd2JlcnJ5U2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tNaWxrQ293QnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgLy90aGlzLmhhcnZlc3RCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMueWllbGRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1lpZWxkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcInNldHVwIExhbmRVSSBEb25lISEhIVwiKTtcbiAgfVxuICBwdWJsaWMgdXBkYXRlVUkoKSB7XG4gICAgdGhpcy5zZXRUaW1lTGIoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSk7XG4gICAgdGhpcy5zZXRDcm9wTGIoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCk7XG4gICAgdGhpcy5zZXRXb3JraW5nSW50ZXJ2YWxMYihcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lXG4gICAgKTtcbiAgICB0aGlzLnNldFlpZWxkQ29udGFpbkxiKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgKTtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3ByaXRlKFxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQubmFtZVxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0TmFtZUxiKFxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQubmFtZVxuICAgICAgKTtcblxuICAgICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLm5hbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnlpZWxkQ29udGFpbkxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3JvcExiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgIH1cblxuICAgIHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUgPVxuICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSB8fFxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jYXR0bGVUeXBlKSAmJlxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkID4gMDtcbiAgICBpZiAodGhpcy55aWVsZEJ0bi5ub2RlLmFjdGl2ZSkge1xuICAgICAgc3dpdGNoIChcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0Lm5hbWVcbiAgICAgICkge1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubmFtZTpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uSGFydmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm5hbWU6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWRcbiAgICAgICAgICAubmFtZTpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uSGFydmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm5hbWU6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLk1pbGs7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293Lm5hbWU6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkJ1dGNoZXI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1RvbWF0b1NlZWRCdG4oKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyID4gMCkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSA9XG4gICAgICAgIFBsYW50VHlwZS50b21hdG9TZWVkO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICAgIFBsYW50Q29uZmlncy50b21hdG9zZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lIC09XG4gICAgICAgIChNYXRoLmNlaWwoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgICAuaGFydmVzdEludGVydmFsICpcbiAgICAgICAgICAgIDYwICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC9cbiAgICAgICAgICAxMDApICpcbiAgICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsIC0gMSk7XG5cbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgLm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbXG4gICAgICAgICAgdGhpcy5pbmRleFxuICAgICAgICBdLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCArPVxuICAgICAgICAoTWF0aC5jZWlsKFxuICAgICAgICAgIG1heEhhcnZlc3QgKiBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAvXG4gICAgICAgICAgMTAwKSAqXG4gICAgICAgIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5sZXZlbCAtIDEpO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciAtPSAxO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlID1cbiAgICAgICAgTGFuZFN0YXRlLlBsYW50O1xuICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB9XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgb25DbGlja0JsdWViZXJyeVNlZWRCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPiAwXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkO1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPVxuICAgICAgICBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSAtPVxuICAgICAgICAoTWF0aC5jZWlsKFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgICAgLmhhcnZlc3RJbnRlcnZhbCAqXG4gICAgICAgICAgICA2MCAqXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAvXG4gICAgICAgICAgMTAwKSAqXG4gICAgICAgIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5sZXZlbCAtIDEpO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5wbGFudFR5cGUgPVxuICAgICAgICBQbGFudFR5cGUuYmx1ZWJlcnJ5U2VlZDtcblxuICAgICAgbGV0IG1heEhhcnZlc3QgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgIF0uY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wICs9XG4gICAgICAgIChNYXRoLmNlaWwoXG4gICAgICAgICAgbWF4SGFydmVzdCAqIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC9cbiAgICAgICAgICAxMDApICpcbiAgICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsIC0gMSk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyIC09IDE7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICB9XG4gIG9uQ2xpY2tTdHJhd2JlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPiAwXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDtcbiAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lID1cbiAgICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lIC09XG4gICAgICAgIChNYXRoLmNlaWwoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgICAuaGFydmVzdEludGVydmFsICpcbiAgICAgICAgICAgIDYwICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC9cbiAgICAgICAgICAxMDApICpcbiAgICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsIC0gMSk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSA9XG4gICAgICAgIFBsYW50VHlwZS5zdHJhd2JlcnJ5U2VlZDtcblxuICAgICAgbGV0IG1heEhhcnZlc3QgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgIF0uY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wICs9XG4gICAgICAgIChNYXRoLmNlaWwoXG4gICAgICAgICAgbWF4SGFydmVzdCAqIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC9cbiAgICAgICAgICAxMDApICpcbiAgICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsIC0gMSk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyIC09IDE7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICB9XG4gIG9uQ2xpY2tNaWxrQ293QnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm51bWJlciA+IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3c7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICAgIENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSAtPVxuICAgICAgICAoTWF0aC5jZWlsKFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgICAgLmhhcnZlc3RJbnRlcnZhbCAqXG4gICAgICAgICAgICA2MCAqXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAvXG4gICAgICAgICAgMTAwKSAqXG4gICAgICAgIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5sZXZlbCAtIDEpO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jYXR0bGVUeXBlID1cbiAgICAgICAgQ2F0dGxlVHlwZS5NaWxrY293O1xuXG4gICAgICBsZXQgbWF4SGFydmVzdCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgIC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W1xuICAgICAgICAgIHRoaXMuaW5kZXhcbiAgICAgICAgXS5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgKz1cbiAgICAgICAgKE1hdGguY2VpbChcbiAgICAgICAgICBtYXhIYXJ2ZXN0ICogVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgL1xuICAgICAgICAgIDEwMCkgKlxuICAgICAgICAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgLSAxKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyIC09IDE7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuQ2F0dGxlO1xuICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgfVxuICBvbkNsaWNrWWllbGRCdG4oKSB7XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICBzd2l0Y2ggKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0Lm5hbWVcbiAgICApIHtcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRUb21hdG8oXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgICAgTGFuZFN0YXRlLlBsYW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCbHVlYmVycnkoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgICAgTGFuZFN0YXRlLlBsYW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZTpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkU3RyYXdiZXJyeShcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jb250YWluWWllbGRcbiAgICAgICAgKTtcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlID1cbiAgICAgICAgICBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZE1pbGsoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgICAgTGFuZFN0YXRlLkNhdHRsZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmNvdy5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCZWVmKFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICAgIExhbmRTdGF0ZS5DYXR0bGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZCA9IDA7XG5cbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCA9PSAwKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuRW1wdHk7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzLmluZGV4KTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgb25DbGlja01pbGtCdG4oKSB7XG4gICAgdGhpcy5yZXNldFVJKCk7XG4gIH1cbiAgc2V0TmFtZUxiKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IG5hbWU7XG4gIH1cbiAgc2V0WWllbGRDb250YWluTGIoeWllbGRDb250YWluOiBudW1iZXIpIHtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLnN0cmluZyA9IHlpZWxkQ29udGFpbi50b1N0cmluZygpO1xuICB9XG4gIHNldENyb3BMYihjcm9wOiBudW1iZXIpIHtcbiAgICB0aGlzLmNyb3BMYi5zdHJpbmcgPSBjcm9wLnRvU3RyaW5nKCk7XG4gIH1cbiAgc2V0V29ya2luZ0ludGVydmFsTGIod29ya2luZ1RpbWU6IG51bWJlcikge1xuICAgIGlmICh3b3JraW5nVGltZSA8IDApIHtcbiAgICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIuc3RyaW5nID0gXCIwc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgX3dvcmtpbmdUaW1lID0gcGFyc2VJbnQod29ya2luZ1RpbWUudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IF93b3JraW5nVGltZS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgfVxuICB9XG4gIHNldFRpbWVMYih0aW1lOiBudW1iZXIpIHtcbiAgICBpZiAodGltZSA8IDApIHtcbiAgICAgIHRoaXMudGltZUxiLnN0cmluZyA9IFwiMHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IF90aW1lID0gcGFyc2VJbnQodGltZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMudGltZUxiLnN0cmluZyA9IF90aW1lLnRvU3RyaW5nKCkgKyBcInNcIjtcbiAgICB9XG4gIH1cblxuICBzZXRXb3JrZXJTcHJpdGUoKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoXCJNaWRkbGVcIiwgdGhpcy53b3JrZXJTcHJpdGUpO1xuICB9XG4gIHNldFNwcml0ZShpbWFnZU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubG9hZEltYWdlKGltYWdlTmFtZSwgdGhpcy5TcHJpdGUpO1xuICB9XG5cbiAgbG9hZEltYWdlID0gKGltYWdlTmFtZTogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBgaW1hZ2VzLyR7aW1hZ2VOYW1lfWA7XG4gICAgaWYgKGltYWdlTmFtZSA9PSBcIlwiKSB7XG4gICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2MuZXJyb3IoYEtow7RuZyB0aOG7gyBsb2FkIOG6o25oOiAke3BhdGh9YCwgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgfSk7XG4gIH07XG4gIHJlc2V0VUkoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy55aWVsZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy5uYW1lTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY3JvcExiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy5jcm9wTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMudGltZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy53b3JrZXJTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5wbGFudFR5cGUgPSBudWxsO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNhdHRsZVR5cGUgPSBudWxsO1xuXG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9IDA7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNFbXB0eSA9IHRydWU7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgTGFuZFN0YXRlLkVtcHR5O1xuXG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2VyQWN0aW9uID1cbiAgICAgIFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgfVxuXG4gIGVuYWJsZUxhbmQoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID4gMDtcbiAgICB0aGlzLm1pbGtDb3dCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID4gMDtcbiAgfVxuXG4gIGVuYWJsZVdvcmtlcigpIHtcbiAgICB0aGlzLnNldFdvcmtlclNwcml0ZSgpO1xuICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2FibGVXb3JrZXIoKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lICE9IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lID0gMDtcbiAgICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyIC09IDE7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGFkZFlpZWxkKCkge1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZCArPSAxO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtlckFjdGlvbiA9XG4gICAgICBXb3JrZXJBY3Rpb24uWWllbGRpbmc7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCAtPSAxO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgIC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcblxuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgLT1cbiAgICAgIChNYXRoLmNlaWwoXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgIC5oYXJ2ZXN0SW50ZXJ2YWwgKlxuICAgICAgICAgIDYwICpcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICkgL1xuICAgICAgICAxMDApICpcbiAgICAgIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5sZXZlbCAtIDEpO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgLmhhcnZlc3RJbnRlcnZhbFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlICE9XG4gICAgICBMYW5kU3RhdGUuSGFydmVzdFxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlID1cbiAgICAgICAgTGFuZFN0YXRlLkhhcnZlc3Q7XG4gICAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcy5pbmRleCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuICB9XG4gIHN3aXRjaFRvRW1wdHlMYW5kKCkge1xuICAgIGNvbnNvbGUubG9nKFwic3dpdGNoIHRvIGVtcHR5IGxhbmRcIik7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlID1cbiAgICAgIExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcy5pbmRleCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIGNoYW5nZUxhbmRUaW1lKGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lIC09IGR1cmF0aW9uO1xuICB9XG59XG4iXX0=