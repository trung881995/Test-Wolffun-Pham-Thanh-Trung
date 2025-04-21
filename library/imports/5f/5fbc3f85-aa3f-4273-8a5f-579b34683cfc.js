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
        this.setupLandState();
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
        this.setupLandState();
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