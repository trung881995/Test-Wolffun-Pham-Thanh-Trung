
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
                    var duration = dt * UIManager_1.default.instance.gameModel.storage.machine.Operate();
                    this.changeLandTime(duration);
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
                //this.setupUI();
                //this.disableWorker();
                UIManager_1.default.instance.gameModel.landArray[this.index].isReadyToWork =
                    UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                        .number > 0;
                break;
            case LandState.Harvest:
                this.updateUI();
                //this.disableWorker();
                UIManager_1.default.instance.gameModel.landArray[this.index].isReadyToWork = true;
                break;
            case LandState.Plant:
                this.updateUI();
                UIManager_1.default.instance.gameModel.landArray[this.index].isReadyToWork =
                    false;
                //this.disableWorker();
                break;
            case LandState.Cattle:
                this.updateUI();
                UIManager_1.default.instance.gameModel.landArray[this.index].isReadyToWork =
                    false;
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
            (UIManager_1.default.instance.gameModel.landArray[this.index].plantType != null ||
                UIManager_1.default.instance.gameModel.landArray[this.index].cattleType !=
                    null) &&
                UIManager_1.default.instance.gameModel.landArray[this.index].containYield > 0;
        if (this.yieldBtn.node.active) {
            switch (UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset) {
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
            UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = false;
            UIManager_1.default.instance.gameModel.landArray[this.index].plantType =
                PlantType_1.PlantType.tomatoSeed;
            UIManager_1.default.instance.gameModel.landArray[this.index].time =
                GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset =
                UIManager_1.default.instance.gameController.model.storage.tomatoSeed;
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop =
                UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
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
            //this.disableWorker();
            UIManager_1.default.instance.gameModel.landArray[this.index].time =
                GameConfig_1.PlantConfigs.blueberryseed.harvestInterval * 60;
            UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = false;
            UIManager_1.default.instance.gameModel.landArray[this.index].plantType =
                PlantType_1.PlantType.blueberrySeed;
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset =
                UIManager_1.default.instance.gameController.model.storage.blueberrySeed;
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop =
                UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number -= 1;
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
    LandUI.prototype.onClickStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number > 0) {
            //this.disableWorker();
            UIManager_1.default.instance.gameModel.landArray[this.index].time =
                GameConfig_1.PlantConfigs.strawberryseed.harvestInterval * 60;
            UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = false;
            UIManager_1.default.instance.gameModel.landArray[this.index].plantType =
                PlantType_1.PlantType.strawberrySeed;
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset =
                UIManager_1.default.instance.gameController.model.storage.strawberrySeed;
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop =
                UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameModel.storage.strawberrySeed.number -= 1;
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
    LandUI.prototype.onClickMilkCowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.milkCow.number > 0) {
            //this.disableWorker();
            UIManager_1.default.instance.gameModel.landArray[this.index].time =
                GameConfig_1.CattleConfigs.milkcow.harvestInterval * 60;
            UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = false;
            UIManager_1.default.instance.gameModel.landArray[this.index].cattleType =
                CattleType_1.CattleType.Milkcow;
            UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset =
                UIManager_1.default.instance.gameController.model.storage.milkCow;
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset
                .maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop =
                UIManager_1.default.instance.gameModel.landArray[this.index].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[this.index].crop +=
                Math.ceil(maxHarvest *
                    UIManager_1.default.instance.gameController.model.storage.machine.Operate()) - maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.milkCow.number -= 1;
            UIManager_1.default.instance.gameModel.landArray[this.index].landState =
                LandState.Cattle;
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
        //this.updateUI();
        //UIManager.instance.storageUI.updateUI();
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
        UIManager_1.default.instance.gameModel.landArray[this.index].plantType = null;
        UIManager_1.default.instance.gameModel.landArray[this.index].cattleType = null;
        UIManager_1.default.instance.gameModel.landArray[this.index].time = 0;
        UIManager_1.default.instance.gameModel.landArray[this.index].isEmpty = true;
        UIManager_1.default.instance.gameModel.landArray[this.index].landState =
            LandState.Empty;
        //this.land.currentAsset = null;
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
        //UIManager.instance.useWorkerForQueue3();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBSzRCO0FBR3RCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQVksU0FNWDtBQU5ELFdBQVksU0FBUztJQUNuQixtREFBUyxDQUFBO0lBQ1QsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCw2Q0FBTSxDQUFBO0lBQ04sK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU1wQjtBQUNELElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQiw2QkFBYyxDQUFBO0lBQ2Qsa0NBQW1CLENBQUE7SUFDbkIsNEJBQWEsQ0FBQTtJQUNiLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUNELElBQVksWUFRWDtBQVJELFdBQVksWUFBWTtJQUN0Qix5REFBUyxDQUFBO0lBQ1QsdURBQVEsQ0FBQTtJQUNSLDZEQUFXLENBQUE7SUFDWCxtRUFBYyxDQUFBO0lBQ2QscUVBQWUsQ0FBQTtJQUNmLHVFQUFnQixDQUFBO0lBQ2hCLCtEQUFZLENBQUE7QUFDZCxDQUFDLEVBUlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFRdkI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXVqQkM7UUFyakJDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUks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QUFFLENBQUMsS0FBSyxDQUFDO2tEQUNhO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDWTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ2dCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUEvQk4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXVqQjFCO0lBQUQsYUFBQztDQXZqQkQsQUF1akJDLENBdmpCbUMsRUFBRSxDQUFDLFNBQVMsR0F1akIvQztrQkF2akJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcbmltcG9ydCB7XG4gIENhdHRsZUNvbmZpZ3MsXG4gIEZpcnN0Q29uZmlncyxcbiAgTGFuZENvbmZpZ3MsXG4gIFBsYW50Q29uZmlncyxcbn0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IHsgTGFuZCwgVG9tYXRvU2VlZCB9IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCBlbnVtIExhbmRTdGF0ZSB7XG4gIFVuZGVmaW5lZCxcbiAgRW1wdHksXG4gIFBsYW50LFxuICBDYXR0bGUsXG4gIEhhcnZlc3QsXG59XG5leHBvcnQgZW51bSBZZWlsZEFjdGlvbiB7XG4gIFVuZGVmaW5lZCA9IFwiXCIsXG4gIEhhcnZlc3QgPSBcIkhhcnZlc3RcIixcbiAgTWlsayA9IFwiTWlsa1wiLFxuICBCdXRjaGVyID0gXCJCdXRjaGVyXCIsXG59XG5leHBvcnQgZW51bSBXb3JrZXJBY3Rpb24ge1xuICBVbmRlZmluZWQsXG4gIFlpZWxkaW5nLFxuICBUb21hdG9QbGFudCxcbiAgQmx1ZWJlcnJ5UGxhbnQsXG4gIFN0cmF3YmVycnlQbGFudCxcbiAgTWlsa2Nvd0xpdmVTdG9jayxcbiAgQ293TGl2ZVN0b2NrLFxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHRvbWF0b1NlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJsdWViZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHN0cmF3YmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBtaWxrQ293QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIHlpZWxkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbmFtZUxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdGltZUxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgeWllbGRDb250YWluTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBjcm9wTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHlpZWxkQnV0dG9uTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICB3b3JrZXJTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgd29ya2luZ0ludGVydmFsTGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgaW5kZXg6IG51bWJlcjtcbiAgLy9sYW5kOiBMYW5kO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgb25Mb2FkKCkge31cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnNldHVwVUkoKTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XSkge1xuICAgICAgaWYgKCFVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc0VtcHR5KSB7XG4gICAgICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS50aW1lIDwgLTAuNSkge1xuICAgICAgICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGRZaWVsZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRvRW1wdHlMYW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPiAtMC41XG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBkdXJhdGlvbiA9XG4gICAgICAgICAgICBkdCAqIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZUxhbmRUaW1lKGR1cmF0aW9uKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgVGltZSEhISEhXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS53b3JraW5nVGltZSA+IDApIHtcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWUgLT0gZHQ7XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lIDwgMFxuICAgICAgKSB7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS53b3JrZXIuV29yayhcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtlckFjdGlvblxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVibGljIHNldHVwTGFuZFN0YXRlKCkge1xuICAgIHN3aXRjaCAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlKSB7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5FbXB0eTpcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XG4gICAgICAgIC8vdGhpcy5zZXR1cFVJKCk7XG4gICAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzUmVhZHlUb1dvcmsgPVxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgICAgLm51bWJlciA+IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMYW5kU3RhdGUuSGFydmVzdDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc1JlYWR5VG9Xb3JrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5QbGFudDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc1JlYWR5VG9Xb3JrID1cbiAgICAgICAgICBmYWxzZTtcbiAgICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5DYXR0bGU6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNSZWFkeVRvV29yayA9XG4gICAgICAgICAgZmFsc2U7XG4gICAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZXR1cFVJKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tUb21hdG9TZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0JsdWViZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTdHJhd2JlcnJ5U2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tNaWxrQ293QnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgLy90aGlzLmhhcnZlc3RCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMueWllbGRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1lpZWxkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcInNldHVwIExhbmRVSSBEb25lISEhIVwiKTtcbiAgfVxuICBwdWJsaWMgdXBkYXRlVUkoKSB7XG4gICAgdGhpcy5zZXRUaW1lTGIoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSk7XG4gICAgdGhpcy5zZXRDcm9wTGIoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCk7XG4gICAgdGhpcy5zZXRXb3JraW5nSW50ZXJ2YWxMYihcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lXG4gICAgKTtcbiAgICB0aGlzLnNldFlpZWxkQ29udGFpbkxiKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgKTtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3ByaXRlKFxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQubmFtZVxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0TmFtZUxiKFxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQubmFtZVxuICAgICAgKTtcblxuICAgICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLm5hbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnlpZWxkQ29udGFpbkxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3JvcExiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgIH1cblxuICAgIHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUgPVxuICAgICAgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSAhPSBudWxsIHx8XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNhdHRsZVR5cGUgIT1cbiAgICAgICAgICBudWxsKSAmJlxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkID4gMDtcbiAgICBpZiAodGhpcy55aWVsZEJ0bi5ub2RlLmFjdGl2ZSkge1xuICAgICAgc3dpdGNoIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQpIHtcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5IYXJ2ZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQ6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdzpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uTWlsaztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5jb3c6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkJ1dGNoZXI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1RvbWF0b1NlZWRCdG4oKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyID4gMCkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSA9XG4gICAgICAgIFBsYW50VHlwZS50b21hdG9TZWVkO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICAgIFBsYW50Q29uZmlncy50b21hdG9zZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDtcblxuICAgICAgbGV0IG1heEhhcnZlc3QgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgIF0uY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wICs9XG4gICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICBtYXhIYXJ2ZXN0ICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgLSBtYXhIYXJ2ZXN0O1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciAtPSAxO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlID1cbiAgICAgICAgTGFuZFN0YXRlLlBsYW50O1xuICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB9XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgb25DbGlja0JsdWViZXJyeVNlZWRCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPiAwXG4gICAgKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICAgIFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ucGxhbnRUeXBlID1cbiAgICAgICAgUGxhbnRUeXBlLmJsdWViZXJyeVNlZWQ7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkO1xuXG4gICAgICBsZXQgbWF4SGFydmVzdCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAgIC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W1xuICAgICAgICAgIHRoaXMuaW5kZXhcbiAgICAgICAgXS5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgKz1cbiAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgIG1heEhhcnZlc3QgKlxuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS5PcGVyYXRlKClcbiAgICAgICAgKSAtIG1heEhhcnZlc3Q7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyIC09IDE7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIG9uQ2xpY2tTdHJhd2JlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPiAwXG4gICAgKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSA9XG4gICAgICAgIFBsYW50VHlwZS5zdHJhd2JlcnJ5U2VlZDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkO1xuICAgICAgbGV0IG1heEhhcnZlc3QgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgIF0uY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wICs9XG4gICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICBtYXhIYXJ2ZXN0ICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgLSBtYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciAtPSAxO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlID1cbiAgICAgICAgTGFuZFN0YXRlLlBsYW50O1xuICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgfVxuICBvbkNsaWNrTWlsa0Nvd0J0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPiAwKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICAgIENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNhdHRsZVR5cGUgPVxuICAgICAgICBDYXR0bGVUeXBlLk1pbGtjb3c7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293O1xuICAgICAgbGV0IG1heEhhcnZlc3QgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgIF0uY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wICs9XG4gICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICBtYXhIYXJ2ZXN0ICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgLSBtYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgLT0gMTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgIExhbmRTdGF0ZS5DYXR0bGU7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIG9uQ2xpY2tZaWVsZEJ0bigpIHtcbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHN3aXRjaCAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQubmFtZVxuICAgICkge1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZFRvbWF0byhcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCbHVlYmVycnkoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZFN0cmF3YmVycnkoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubmFtZTpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkTWlsayhcbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293Lm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZEJlZWYoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkID0gMDtcbiAgICAvL3RoaXMudXBkYXRlVUkoKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPSBVSU1hbmFnZXJcbiAgICAgIC5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZVxuICAgICAgPyBMYW5kU3RhdGUuUGxhbnRcbiAgICAgIDogTGFuZFN0YXRlLkNhdHRsZTtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCA9PSAwKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuRW1wdHk7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzLmluZGV4KTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlKCk7XG4gIH1cbiAgb25DbGlja01pbGtCdG4oKSB7XG4gICAgdGhpcy5yZXNldFVJKCk7XG4gIH1cbiAgc2V0TmFtZUxiKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IG5hbWU7XG4gIH1cbiAgc2V0WWllbGRDb250YWluTGIoeWllbGRDb250YWluOiBudW1iZXIpIHtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLnN0cmluZyA9IHlpZWxkQ29udGFpbi50b1N0cmluZygpO1xuICB9XG4gIHNldENyb3BMYihjcm9wOiBudW1iZXIpIHtcbiAgICB0aGlzLmNyb3BMYi5zdHJpbmcgPSBjcm9wLnRvU3RyaW5nKCk7XG4gIH1cbiAgc2V0V29ya2luZ0ludGVydmFsTGIod29ya2luZ1RpbWU6IG51bWJlcikge1xuICAgIGlmICh3b3JraW5nVGltZSA8IDApIHtcbiAgICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIuc3RyaW5nID0gXCIwc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgX3dvcmtpbmdUaW1lID0gcGFyc2VJbnQod29ya2luZ1RpbWUudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IF93b3JraW5nVGltZS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgfVxuICB9XG4gIHNldFRpbWVMYih0aW1lOiBudW1iZXIpIHtcbiAgICBpZiAodGltZSA8IDApIHtcbiAgICAgIHRoaXMudGltZUxiLnN0cmluZyA9IFwiMHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IF90aW1lID0gcGFyc2VJbnQodGltZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMudGltZUxiLnN0cmluZyA9IF90aW1lLnRvU3RyaW5nKCkgKyBcInNcIjtcbiAgICB9XG4gIH1cblxuICBzZXRXb3JrZXJTcHJpdGUoKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoXCJNaWRkbGVcIiwgdGhpcy53b3JrZXJTcHJpdGUpO1xuICB9XG4gIHNldFNwcml0ZShpbWFnZU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubG9hZEltYWdlKGltYWdlTmFtZSwgdGhpcy5TcHJpdGUpO1xuICB9XG5cbiAgbG9hZEltYWdlID0gKGltYWdlTmFtZTogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBgaW1hZ2VzLyR7aW1hZ2VOYW1lfWA7XG4gICAgaWYgKGltYWdlTmFtZSA9PSBcIlwiKSB7XG4gICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2MuZXJyb3IoYEtow7RuZyB0aOG7gyBsb2FkIOG6o25oOiAke3BhdGh9YCwgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgfSk7XG4gIH07XG4gIHJlc2V0VUkoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy55aWVsZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy5uYW1lTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY3JvcExiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy5jcm9wTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMudGltZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy53b3JrZXJTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5wbGFudFR5cGUgPSBudWxsO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNhdHRsZVR5cGUgPSBudWxsO1xuXG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9IDA7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNFbXB0eSA9IHRydWU7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgTGFuZFN0YXRlLkVtcHR5O1xuXG4gICAgLy90aGlzLmxhbmQuY3VycmVudEFzc2V0ID0gbnVsbDtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS53b3JrZXJBY3Rpb24gPVxuICAgICAgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICB9XG5cbiAgZW5hYmxlTGFuZCgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyID4gMDtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyID4gMDtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgPiAwO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPiAwO1xuICB9XG5cbiAgZW5hYmxlV29ya2VyKCkge1xuICAgIHRoaXMuc2V0V29ya2VyU3ByaXRlKCk7XG4gICAgdGhpcy53b3JrZXJTcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZVdvcmtlcigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWUgIT0gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWUgPSAwO1xuICAgICAgdGhpcy53b3JrZXJTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgLT0gMTtcbiAgICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgYWRkWWllbGQoKSB7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkICs9IDE7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2VyQWN0aW9uID1cbiAgICAgIFdvcmtlckFjdGlvbi5ZaWVsZGluZztcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wIC09IDE7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgIC5oYXJ2ZXN0SW50ZXJ2YWxcbiAgICApO1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSAhPVxuICAgICAgTGFuZFN0YXRlLkhhcnZlc3RcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgIExhbmRTdGF0ZS5IYXJ2ZXN0O1xuICAgICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMuaW5kZXgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cbiAgfVxuICBzd2l0Y2hUb0VtcHR5TGFuZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInN3aXRjaCB0byBlbXB0eSBsYW5kXCIpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMuaW5kZXgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgfVxuICBjaGFuZ2VMYW5kVGltZShkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSAtPSBkdXJhdGlvbjtcbiAgfVxufVxuIl19