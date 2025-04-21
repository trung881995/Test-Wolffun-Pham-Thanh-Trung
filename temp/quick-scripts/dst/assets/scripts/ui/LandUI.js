
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
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed.name:
                UIManager_1.default.instance.gameController.model.storage.addBlueberry(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed.name:
                UIManager_1.default.instance.gameController.model.storage.addStrawberry(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.milkCow.name:
                UIManager_1.default.instance.gameController.model.storage.addMilk(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.cow.name:
                UIManager_1.default.instance.gameController.model.storage.addBeef(UIManager_1.default.instance.gameModel.landArray[this.index].containYield);
                break;
            default:
                break;
        }
        UIManager_1.default.instance.gameModel.landArray[this.index].containYield = 0;
        UIManager_1.default.instance.gameModel.landArray[this.index].landState = UIManager_1.default
            .instance.gameModel.landArray[this.index].plantType
            ? LandState.Plant
            : LandState.Cattle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBSzRCO0FBR3RCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQVksU0FNWDtBQU5ELFdBQVksU0FBUztJQUNuQixtREFBUyxDQUFBO0lBQ1QsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCw2Q0FBTSxDQUFBO0lBQ04sK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU1wQjtBQUNELElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQiw2QkFBYyxDQUFBO0lBQ2Qsa0NBQW1CLENBQUE7SUFDbkIsNEJBQWEsQ0FBQTtJQUNiLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUNELElBQVksWUFRWDtBQVJELFdBQVksWUFBWTtJQUN0Qix5REFBUyxDQUFBO0lBQ1QsdURBQVEsQ0FBQTtJQUNSLDZEQUFXLENBQUE7SUFDWCxtRUFBYyxDQUFBO0lBQ2QscUVBQWUsQ0FBQTtJQUNmLHVFQUFnQixDQUFBO0lBQ2hCLCtEQUFZLENBQUE7QUFDZCxDQUFDLEVBUlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFRdkI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXFtQkM7UUFubUJDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUks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QUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDYTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDVztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNnQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNLO0lBL0JOLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FxbUIxQjtJQUFELGFBQUM7Q0FybUJELEFBcW1CQyxDQXJtQm1DLEVBQUUsQ0FBQyxTQUFTLEdBcW1CL0M7a0JBcm1Cb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFBsYW50VHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9QbGFudFR5cGVcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5pbXBvcnQge1xuICBDYXR0bGVDb25maWdzLFxuICBGaXJzdENvbmZpZ3MsXG4gIExhbmRDb25maWdzLFxuICBQbGFudENvbmZpZ3MsXG59IGZyb20gXCIuLi9kYXRhL0dhbWVDb25maWdcIjtcbmltcG9ydCB7IExhbmQsIFRvbWF0b1NlZWQgfSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5leHBvcnQgZW51bSBMYW5kU3RhdGUge1xuICBVbmRlZmluZWQsXG4gIEVtcHR5LFxuICBQbGFudCxcbiAgQ2F0dGxlLFxuICBIYXJ2ZXN0LFxufVxuZXhwb3J0IGVudW0gWWVpbGRBY3Rpb24ge1xuICBVbmRlZmluZWQgPSBcIlwiLFxuICBIYXJ2ZXN0ID0gXCJIYXJ2ZXN0XCIsXG4gIE1pbGsgPSBcIk1pbGtcIixcbiAgQnV0Y2hlciA9IFwiQnV0Y2hlclwiLFxufVxuZXhwb3J0IGVudW0gV29ya2VyQWN0aW9uIHtcbiAgVW5kZWZpbmVkLFxuICBZaWVsZGluZyxcbiAgVG9tYXRvUGxhbnQsXG4gIEJsdWViZXJyeVBsYW50LFxuICBTdHJhd2JlcnJ5UGxhbnQsXG4gIE1pbGtjb3dMaXZlU3RvY2ssXG4gIENvd0xpdmVTdG9jayxcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5kVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICB0b21hdG9TZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBibHVlYmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzdHJhd2JlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgbWlsa0Nvd0J0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICB5aWVsZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIG5hbWVMYjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRpbWVMYjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHlpZWxkQ29udGFpbkxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgY3JvcExiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB5aWVsZEJ1dHRvbkxiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgd29ya2VyU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHdvcmtpbmdJbnRlcnZhbExiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gIGluZGV4OiBudW1iZXI7XG4gIC8vbGFuZDogTGFuZDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gIG9uTG9hZCgpIHt9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5zZXR1cFVJKCk7XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0pIHtcbiAgICAgIGlmICghVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNFbXB0eSkge1xuICAgICAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA8IC0wLjUpIHtcbiAgICAgICAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkWWllbGQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb0VtcHR5TGFuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lID4gLTAuNVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUxhbmRUaW1lKGR0KTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgVGltZSEhISEhXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS53b3JraW5nVGltZSA+IDApIHtcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWUgLT0gZHQ7XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lIDwgMFxuICAgICAgKSB7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS53b3JrZXIuV29yayhcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtlckFjdGlvblxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVibGljIHNldHVwTGFuZFN0YXRlKCkge1xuICAgIHN3aXRjaCAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlKSB7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5FbXB0eTpcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XG5cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNSZWFkeVRvV29yayA9XG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgICAubnVtYmVyID4gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5IYXJ2ZXN0OlxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG5cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNSZWFkeVRvV29yayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMYW5kU3RhdGUuUGxhbnQ6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNSZWFkeVRvV29yayA9XG4gICAgICAgICAgZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5DYXR0bGU6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNSZWFkeVRvV29yayA9XG4gICAgICAgICAgZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldHVwVUkoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1RvbWF0b1NlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQmx1ZWJlcnJ5U2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1N0cmF3YmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja01pbGtDb3dCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICAvL3RoaXMuaGFydmVzdEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy55aWVsZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrWWllbGRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFwic2V0dXAgTGFuZFVJIERvbmUhISEhXCIpO1xuICB9XG4gIHB1YmxpYyB1cGRhdGVVSSgpIHtcbiAgICB0aGlzLnNldFRpbWVMYihVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lKTtcbiAgICB0aGlzLnNldENyb3BMYihVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wKTtcbiAgICB0aGlzLnNldFdvcmtpbmdJbnRlcnZhbExiKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWVcbiAgICApO1xuICAgIHRoaXMuc2V0WWllbGRDb250YWluTGIoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jb250YWluWWllbGRcbiAgICApO1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lID4gMCkge1xuICAgICAgdGhpcy5zZXRTcHJpdGUoXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldC5uYW1lXG4gICAgICApO1xuICAgICAgdGhpcy5zZXROYW1lTGIoXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldC5uYW1lXG4gICAgICApO1xuXG4gICAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMubmFtZUxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMudGltZUxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMueWllbGRDb250YWluTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5jcm9wTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgfVxuXG4gICAgdGhpcy55aWVsZEJ0bi5ub2RlLmFjdGl2ZSA9XG4gICAgICAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ucGxhbnRUeXBlIHx8XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNhdHRsZVR5cGUpICYmXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jb250YWluWWllbGQgPiAwO1xuICAgIGlmICh0aGlzLnlpZWxkQnRuLm5vZGUuYWN0aXZlKSB7XG4gICAgICBzd2l0Y2ggKFxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQubmFtZVxuICAgICAgKSB7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5IYXJ2ZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZTpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uSGFydmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZFxuICAgICAgICAgIC5uYW1lOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5IYXJ2ZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubmFtZTpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uTWlsaztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5jb3cubmFtZTpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uQnV0Y2hlcjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9tYXRvU2VlZEJ0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPiAwKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ucGxhbnRUeXBlID1cbiAgICAgICAgUGxhbnRUeXBlLnRvbWF0b1NlZWQ7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lID1cbiAgICAgICAgUGxhbnRDb25maWdzLnRvbWF0b3NlZWQuaGFydmVzdEludGVydmFsICogNjA7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgLT1cbiAgICAgICAgKE1hdGguY2VpbChcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAgIC5oYXJ2ZXN0SW50ZXJ2YWwgKlxuICAgICAgICAgICAgNjAgKlxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgL1xuICAgICAgICAgIDEwMCkgKlxuICAgICAgICAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgLSAxKTtcblxuICAgICAgbGV0IG1heEhhcnZlc3QgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgIF0uY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wICs9XG4gICAgICAgIChNYXRoLmNlaWwoXG4gICAgICAgICAgbWF4SGFydmVzdCAqIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC9cbiAgICAgICAgICAxMDApICpcbiAgICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsIC0gMSk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyIC09IDE7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgfVxuICBvbkNsaWNrQmx1ZWJlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciA+IDBcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQ7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICAgIFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lIC09XG4gICAgICAgIChNYXRoLmNlaWwoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgICAuaGFydmVzdEludGVydmFsICpcbiAgICAgICAgICAgIDYwICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC9cbiAgICAgICAgICAxMDApICpcbiAgICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsIC0gMSk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSA9XG4gICAgICAgIFBsYW50VHlwZS5ibHVlYmVycnlTZWVkO1xuXG4gICAgICBsZXQgbWF4SGFydmVzdCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgIC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W1xuICAgICAgICAgIHRoaXMuaW5kZXhcbiAgICAgICAgXS5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgKz1cbiAgICAgICAgKE1hdGguY2VpbChcbiAgICAgICAgICBtYXhIYXJ2ZXN0ICogVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgL1xuICAgICAgICAgIDEwMCkgKlxuICAgICAgICAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgLSAxKTtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgLT0gMTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgIExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gIH1cbiAgb25DbGlja1N0cmF3YmVycnlTZWVkQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciA+IDBcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkO1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPVxuICAgICAgICBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQuaGFydmVzdEludGVydmFsICogNjA7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgLT1cbiAgICAgICAgKE1hdGguY2VpbChcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAgIC5oYXJ2ZXN0SW50ZXJ2YWwgKlxuICAgICAgICAgICAgNjAgKlxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgL1xuICAgICAgICAgIDEwMCkgKlxuICAgICAgICAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgLSAxKTtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ucGxhbnRUeXBlID1cbiAgICAgICAgUGxhbnRUeXBlLnN0cmF3YmVycnlTZWVkO1xuXG4gICAgICBsZXQgbWF4SGFydmVzdCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgIC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W1xuICAgICAgICAgIHRoaXMuaW5kZXhcbiAgICAgICAgXS5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgKz1cbiAgICAgICAgKE1hdGguY2VpbChcbiAgICAgICAgICBtYXhIYXJ2ZXN0ICogVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgL1xuICAgICAgICAgIDEwMCkgKlxuICAgICAgICAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgLSAxKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgLT0gMTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgIExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gIH1cbiAgb25DbGlja01pbGtDb3dCdG4oKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID4gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdztcbiAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lID1cbiAgICAgICAgQ2F0dGxlQ29uZmlncy5taWxrY293LmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lIC09XG4gICAgICAgIChNYXRoLmNlaWwoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgICAuaGFydmVzdEludGVydmFsICpcbiAgICAgICAgICAgIDYwICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC9cbiAgICAgICAgICAxMDApICpcbiAgICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsIC0gMSk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNhdHRsZVR5cGUgPVxuICAgICAgICBDYXR0bGVUeXBlLk1pbGtjb3c7XG5cbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgLm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbXG4gICAgICAgICAgdGhpcy5pbmRleFxuICAgICAgICBdLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCArPVxuICAgICAgICAoTWF0aC5jZWlsKFxuICAgICAgICAgIG1heEhhcnZlc3QgKiBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAvXG4gICAgICAgICAgMTAwKSAqXG4gICAgICAgIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLnN0b3JhZ2UubWFjaGluZS5sZXZlbCAtIDEpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgLT0gMTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgIExhbmRTdGF0ZS5DYXR0bGU7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICB9XG4gIG9uQ2xpY2tZaWVsZEJ0bigpIHtcbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHN3aXRjaCAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQubmFtZVxuICAgICkge1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZFRvbWF0byhcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCbHVlYmVycnkoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZFN0cmF3YmVycnkoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubmFtZTpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkTWlsayhcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293Lm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZEJlZWYoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkID0gMDtcblxuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9IFVJTWFuYWdlclxuICAgICAgLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ucGxhbnRUeXBlXG4gICAgICA/IExhbmRTdGF0ZS5QbGFudFxuICAgICAgOiBMYW5kU3RhdGUuQ2F0dGxlO1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wID09IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgIExhbmRTdGF0ZS5FbXB0eTtcbiAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMuaW5kZXgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgfVxuICBvbkNsaWNrTWlsa0J0bigpIHtcbiAgICB0aGlzLnJlc2V0VUkoKTtcbiAgfVxuICBzZXROYW1lTGIobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gbmFtZTtcbiAgfVxuICBzZXRZaWVsZENvbnRhaW5MYih5aWVsZENvbnRhaW46IG51bWJlcikge1xuICAgIHRoaXMueWllbGRDb250YWluTGIuc3RyaW5nID0geWllbGRDb250YWluLnRvU3RyaW5nKCk7XG4gIH1cbiAgc2V0Q3JvcExiKGNyb3A6IG51bWJlcikge1xuICAgIHRoaXMuY3JvcExiLnN0cmluZyA9IGNyb3AudG9TdHJpbmcoKTtcbiAgfVxuICBzZXRXb3JraW5nSW50ZXJ2YWxMYih3b3JraW5nVGltZTogbnVtYmVyKSB7XG4gICAgaWYgKHdvcmtpbmdUaW1lIDwgMCkge1xuICAgICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5zdHJpbmcgPSBcIjBzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBfd29ya2luZ1RpbWUgPSBwYXJzZUludCh3b3JraW5nVGltZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIuc3RyaW5nID0gX3dvcmtpbmdUaW1lLnRvU3RyaW5nKCkgKyBcInNcIjtcbiAgICB9XG4gIH1cbiAgc2V0VGltZUxiKHRpbWU6IG51bWJlcikge1xuICAgIGlmICh0aW1lIDwgMCkge1xuICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCIwc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgX3RpbWUgPSBwYXJzZUludCh0aW1lLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gX3RpbWUudG9TdHJpbmcoKSArIFwic1wiO1xuICAgIH1cbiAgfVxuXG4gIHNldFdvcmtlclNwcml0ZSgpIHtcbiAgICB0aGlzLmxvYWRJbWFnZShcIk1pZGRsZVwiLCB0aGlzLndvcmtlclNwcml0ZSk7XG4gIH1cbiAgc2V0U3ByaXRlKGltYWdlTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoaW1hZ2VOYW1lLCB0aGlzLlNwcml0ZSk7XG4gIH1cblxuICBsb2FkSW1hZ2UgPSAoaW1hZ2VOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGBpbWFnZXMvJHtpbWFnZU5hbWV9YDtcbiAgICBpZiAoaW1hZ2VOYW1lID09IFwiXCIpIHtcbiAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYy5lcnJvcihgS2jDtG5nIHRo4buDIGxvYWQg4bqjbmg6ICR7cGF0aH1gLCBlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9KTtcbiAgfTtcbiAgcmVzZXRVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnlpZWxkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLm5hbWVMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMueWllbGRDb250YWluTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jcm9wTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLmNyb3BMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudGltZUxiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy50aW1lTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLndvcmtlclNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSA9IG51bGw7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY2F0dGxlVHlwZSA9IG51bGw7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lID0gMDtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc0VtcHR5ID0gdHJ1ZTtcblxuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICBMYW5kU3RhdGUuRW1wdHk7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS53b3JrZXJBY3Rpb24gPVxuICAgICAgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICB9XG5cbiAgZW5hYmxlTGFuZCgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyID4gMDtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyID4gMDtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPiAwO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPiAwO1xuICB9XG5cbiAgZW5hYmxlV29ya2VyKCkge1xuICAgIHRoaXMuc2V0V29ya2VyU3ByaXRlKCk7XG4gICAgdGhpcy53b3JrZXJTcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZVdvcmtlcigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWUgIT0gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWUgPSAwO1xuICAgICAgdGhpcy53b3JrZXJTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgLT0gMTtcbiAgICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYWRkWWllbGQoKSB7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkICs9IDE7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2VyQWN0aW9uID1cbiAgICAgIFdvcmtlckFjdGlvbi5ZaWVsZGluZztcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wIC09IDE7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuXG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSAtPVxuICAgICAgKE1hdGguY2VpbChcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgLmhhcnZlc3RJbnRlcnZhbCAqXG4gICAgICAgICAgNjAgKlxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgKSAvXG4gICAgICAgIDEwMCkgKlxuICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsIC0gMSk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAuaGFydmVzdEludGVydmFsXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgIT1cbiAgICAgIExhbmRTdGF0ZS5IYXJ2ZXN0XG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuSGFydmVzdDtcbiAgICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzLmluZGV4KTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB9XG4gIH1cbiAgc3dpdGNoVG9FbXB0eUxhbmQoKSB7XG4gICAgY29uc29sZS5sb2coXCJzd2l0Y2ggdG8gZW1wdHkgbGFuZFwiKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzLmluZGV4KTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgY2hhbmdlTGFuZFRpbWUoZHVyYXRpb246IG51bWJlcikge1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgLT0gZHVyYXRpb247XG4gIH1cbn1cbiJdfQ==