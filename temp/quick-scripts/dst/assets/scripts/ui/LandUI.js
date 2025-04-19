
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
    LandUI.prototype.onLoad = function () {
        this.land = new Storage_1.Land();
    };
    LandUI.prototype.start = function () {
        //UIManager.instance.useWorkerForQueue();
    };
    LandUI.prototype.update = function (dt) {
        if (this.land != null) {
            if (!this.land.isEmpty) {
                if (this.land.time < 0.5) {
                    if (this.land.containYield < this.land.currentAsset.maxHarvest &&
                        this.land.crop > 0) {
                        console.log(this.land.currentAsset.maxHarvest);
                        this.land.containYield += 1;
                        this.land.workerAction = WorkerAction.Yielding;
                        this.land.crop -= 1;
                        this.land.time = this.land.currentAsset.harvestInterval * 60;
                        console.log(this.land.currentAsset.harvestInterval);
                        this.land.landState = LandState.Harvest;
                        this.DisplayUI();
                        UIManager_1.default.instance.pushToQueue(this);
                        UIManager_1.default.instance.useWorkerForQueue3();
                    }
                    else {
                        this.land.landState = LandState.Empty;
                        //this.disableWorker();
                        this.DisplayUI();
                        UIManager_1.default.instance.pushToQueue(this);
                        UIManager_1.default.instance.useWorkerForQueue3();
                    }
                }
                else if (this.land.time > 0) {
                    this.land.time -= dt;
                    this.updateUI();
                }
            }
            else {
            }
            if (this.land.workingTime > 0) {
                this.land.workingTime -= dt;
                this.updateUI();
                //this.land.isReadyToWork = false;
            }
            else if (this.land.workingTime < 0) {
                //this.land.isReadyToWork = false;
                UIManager_1.default.instance.gameController.model.storage.worker.Work(this, this.land.workerAction);
            }
            else {
            }
        }
    };
    LandUI.prototype.DisplayUI = function () {
        switch (this.land.landState) {
            case LandState.Empty:
                this.resetUI();
                this.setupUI();
                this.disableWorker();
                this.land.isReadyToWork = this.land.currentAsset.number > 0;
                break;
            case LandState.Harvest:
                this.updateUI();
                this.disableWorker();
                this.land.isReadyToWork = true;
                break;
            case LandState.Plant:
                this.updateUI();
                this.land.isReadyToWork = false;
                this.disableWorker();
                break;
            case LandState.Cattle:
                this.updateUI();
                this.land.isReadyToWork = false;
                this.disableWorker();
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
            this.land.crop = this.land.currentAsset.maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number -= 1;
            this.land.landState = LandState.Plant;
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickBlueberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.PlantConfigs.blueberryseed.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.plantType = PlantType_1.PlantType.blueberrySeed;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.blueberrySeed;
            this.land.crop = this.land.currentAsset.maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number -= 1;
            this.land.landState = LandState.Plant;
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.PlantConfigs.strawberryseed.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.plantType = PlantType_1.PlantType.strawberrySeed;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.strawberrySeed;
            this.land.crop = this.land.currentAsset.maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number -= 1;
            this.land.landState = LandState.Plant;
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickMilkCowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.milkCow.number > 0) {
            //this.disableWorker();
            this.land.time = GameConfig_1.CattleConfigs.milkcow.harvestInterval * 60;
            this.land.isEmpty = false;
            this.land.cattleType = CattleType_1.CattleType.Milkcow;
            this.land.currentAsset =
                UIManager_1.default.instance.gameController.model.storage.milkCow;
            this.land.crop = this.land.currentAsset.maxHarvest;
            UIManager_1.default.instance.gameController.model.storage.milkCow.number -= 1;
            this.land.landState = LandState.Cattle;
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
    };
    LandUI.prototype.onClickYieldBtn = function () {
        //this.disableWorker();
        switch (this.land.currentAsset) {
            case UIManager_1.default.instance.gameController.model.storage.tomatoSeed:
                UIManager_1.default.instance.gameController.model.storage.addTomato(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed:
                UIManager_1.default.instance.gameController.model.storage.addBlueberry(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed:
                UIManager_1.default.instance.gameController.model.storage.addStrawberry(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.milkCow:
                UIManager_1.default.instance.gameController.model.storage.addMilk(this.land.containYield);
                break;
            case UIManager_1.default.instance.gameController.model.storage.cow:
                UIManager_1.default.instance.gameController.model.storage.addBeef(this.land.containYield);
                break;
            default:
                break;
        }
        this.land.containYield = 0;
        this.updateUI();
        UIManager_1.default.instance.storageUI.updateUI();
        this.land.landState = this.land.plantType
            ? LandState.Plant
            : LandState.Cattle;
        if (this.land.crop == 0) {
            this.land.landState = LandState.Empty;
            this.DisplayUI();
            UIManager_1.default.instance.pushToQueue(this);
            UIManager_1.default.instance.useWorkerForQueue3();
            return;
        }
        //this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.pushToQueue(this);
        UIManager_1.default.instance.useWorkerForQueue3();
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
        UIManager_1.default.instance.storageUI.updateUI();
        this.updateUI();
        this.workingIntervalLb.node.active = true;
    };
    LandUI.prototype.disableWorker = function () {
        if (this.land.workingTime != 0) {
            this.land.workingTime = 0;
            this.workerSprite.node.active = false;
            UIManager_1.default.instance.gameController.model.storage.workingWorkerNumber -= 1;
            UIManager_1.default.instance.storageUI.updateUI();
            this.updateUI();
            this.workingIntervalLb.node.active = false;
            this.land.isReadyToWork = false;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQWlFO0FBQ2pFLDhDQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDbkIsbURBQVMsQ0FBQTtJQUNULDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsNkNBQU0sQ0FBQTtJQUNOLCtDQUFPLENBQUE7QUFDVCxDQUFDLEVBTlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFNcEI7QUFDRCxJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsNkJBQWMsQ0FBQTtJQUNkLGtDQUFtQixDQUFBO0lBQ25CLDRCQUFhLENBQUE7SUFDYixrQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFLdEI7QUFDRCxJQUFZLFlBUVg7QUFSRCxXQUFZLFlBQVk7SUFDdEIseURBQVMsQ0FBQTtJQUNULHVEQUFRLENBQUE7SUFDUiw2REFBVyxDQUFBO0lBQ1gsbUVBQWMsQ0FBQTtJQUNkLHFFQUFlLENBQUE7SUFDZix1RUFBZ0IsQ0FBQTtJQUNoQiwrREFBWSxDQUFBO0FBQ2QsQ0FBQyxFQVJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBUXZCO0FBRUQ7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUE4ZEM7UUE1ZEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsc0JBQWdC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Q0FBQztpREFDWTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ2dCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUEvQk4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQThkMUI7SUFBRCxhQUFDO0NBOWRELEFBOGRDLENBOWRtQyxFQUFFLENBQUMsU0FBUyxHQThkL0M7a0JBOWRvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcbmltcG9ydCB7IENhdHRsZUNvbmZpZ3MsIFBsYW50Q29uZmlncyB9IGZyb20gXCIuLi9kYXRhL0dhbWVDb25maWdcIjtcbmltcG9ydCB7IExhbmQsIFRvbWF0b1NlZWQgfSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5leHBvcnQgZW51bSBMYW5kU3RhdGUge1xuICBVbmRlZmluZWQsXG4gIEVtcHR5LFxuICBQbGFudCxcbiAgQ2F0dGxlLFxuICBIYXJ2ZXN0LFxufVxuZXhwb3J0IGVudW0gWWVpbGRBY3Rpb24ge1xuICBVbmRlZmluZWQgPSBcIlwiLFxuICBIYXJ2ZXN0ID0gXCJIYXJ2ZXN0XCIsXG4gIE1pbGsgPSBcIk1pbGtcIixcbiAgQnV0Y2hlciA9IFwiQnV0Y2hlclwiLFxufVxuZXhwb3J0IGVudW0gV29ya2VyQWN0aW9uIHtcbiAgVW5kZWZpbmVkLFxuICBZaWVsZGluZyxcbiAgVG9tYXRvUGxhbnQsXG4gIEJsdWViZXJyeVBsYW50LFxuICBTdHJhd2JlcnJ5UGxhbnQsXG4gIE1pbGtjb3dMaXZlU3RvY2ssXG4gIENvd0xpdmVTdG9jayxcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5kVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICB0b21hdG9TZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBibHVlYmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzdHJhd2JlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgbWlsa0Nvd0J0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICB5aWVsZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIG5hbWVMYjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRpbWVMYjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHlpZWxkQ29udGFpbkxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgY3JvcExiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB5aWVsZEJ1dHRvbkxiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgd29ya2VyU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHdvcmtpbmdJbnRlcnZhbExiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gIGxhbmQ6IExhbmQ7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5sYW5kID0gbmV3IExhbmQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlKCk7XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAodGhpcy5sYW5kICE9IG51bGwpIHtcbiAgICAgIGlmICghdGhpcy5sYW5kLmlzRW1wdHkpIHtcbiAgICAgICAgaWYgKHRoaXMubGFuZC50aW1lIDwgMC41KSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZCA8IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdCAmJlxuICAgICAgICAgICAgdGhpcy5sYW5kLmNyb3AgPiAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3QpO1xuXG4gICAgICAgICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkICs9IDE7XG4gICAgICAgICAgICB0aGlzLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLllpZWxkaW5nO1xuICAgICAgICAgICAgdGhpcy5sYW5kLmNyb3AgLT0gMTtcbiAgICAgICAgICAgIHRoaXMubGFuZC50aW1lID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZC5jdXJyZW50QXNzZXQuaGFydmVzdEludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuSGFydmVzdDtcbiAgICAgICAgICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG4gICAgICAgICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgICAgICAgdGhpcy5EaXNwbGF5VUkoKTtcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYW5kLnRpbWUgPiAwKSB7XG4gICAgICAgICAgdGhpcy5sYW5kLnRpbWUgLT0gZHQ7XG4gICAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYW5kLndvcmtpbmdUaW1lID4gMCkge1xuICAgICAgICB0aGlzLmxhbmQud29ya2luZ1RpbWUgLT0gZHQ7XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgLy90aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmxhbmQud29ya2luZ1RpbWUgPCAwKSB7XG4gICAgICAgIC8vdGhpcy5sYW5kLmlzUmVhZHlUb1dvcmsgPSBmYWxzZTtcblxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JrZXIuV29yayhcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHRoaXMubGFuZC53b3JrZXJBY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBEaXNwbGF5VUkoKSB7XG4gICAgc3dpdGNoICh0aGlzLmxhbmQubGFuZFN0YXRlKSB7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5FbXB0eTpcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XG4gICAgICAgIHRoaXMuc2V0dXBVSSgpO1xuICAgICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgICAgdGhpcy5sYW5kLmlzUmVhZHlUb1dvcmsgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm51bWJlciA+IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMYW5kU3RhdGUuSGFydmVzdDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgICAgdGhpcy5sYW5kLmlzUmVhZHlUb1dvcmsgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLlBsYW50OlxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIHRoaXMubGFuZC5pc1JlYWR5VG9Xb3JrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkNhdHRsZTpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldHVwVUkoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1RvbWF0b1NlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQmx1ZWJlcnJ5U2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1N0cmF3YmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja01pbGtDb3dCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICAvL3RoaXMuaGFydmVzdEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy55aWVsZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrWWllbGRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFwic2V0dXAgTGFuZFVJIERvbmUhISEhXCIpO1xuICB9XG4gIHB1YmxpYyB1cGRhdGVVSSgpIHtcbiAgICB0aGlzLnNldFRpbWVMYih0aGlzLmxhbmQudGltZSk7XG4gICAgdGhpcy5zZXRDcm9wTGIodGhpcy5sYW5kLmNyb3ApO1xuICAgIHRoaXMuc2V0V29ya2luZ0ludGVydmFsTGIodGhpcy5sYW5kLndvcmtpbmdUaW1lKTtcbiAgICB0aGlzLnNldFlpZWxkQ29udGFpbkxiKHRoaXMubGFuZC5jb250YWluWWllbGQpO1xuICAgIGlmICh0aGlzLmxhbmQudGltZSA+IDApIHtcbiAgICAgIGlmICh0aGlzLmxhbmQubGFuZFN0YXRlID09IExhbmRTdGF0ZS5QbGFudCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubGFuZC5wbGFudFR5cGUpIHtcbiAgICAgICAgICBjYXNlIFBsYW50VHlwZS50b21hdG9TZWVkOlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgUGxhbnRUeXBlLmJsdWViZXJyeVNlZWQ6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBQbGFudFR5cGUuc3RyYXdiZXJyeVNlZWQ6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sYW5kLmxhbmRTdGF0ZSA9PSBMYW5kU3RhdGUuQ2F0dGxlKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5sYW5kLmNhdHRsZVR5cGUpIHtcbiAgICAgICAgICBjYXNlIENhdHRsZVR5cGUuQ293OlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoQ2F0dGxlQ29uZmlncy5jb3cubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihDYXR0bGVDb25maWdzLmNvdy5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ2F0dGxlVHlwZS5NaWxrY293OlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoQ2F0dGxlQ29uZmlncy5taWxrY293Lm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXROYW1lTGIoQ2F0dGxlQ29uZmlncy5taWxrY293Lm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5uYW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy50aW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5TcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy55aWVsZENvbnRhaW5MYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmNyb3BMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICB9XG5cbiAgICB0aGlzLnlpZWxkQnRuLm5vZGUuYWN0aXZlID1cbiAgICAgICh0aGlzLmxhbmQucGxhbnRUeXBlICE9IG51bGwgfHwgdGhpcy5sYW5kLmNhdHRsZVR5cGUgIT0gbnVsbCkgJiZcbiAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGQgPiAwO1xuICAgIGlmICh0aGlzLnlpZWxkQnRuLm5vZGUuYWN0aXZlKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubGFuZC5jdXJyZW50QXNzZXQpIHtcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5IYXJ2ZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQ6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdzpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uTWlsaztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5jb3c6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkJ1dGNoZXI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1RvbWF0b1NlZWRCdG4oKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyID4gMCkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMubGFuZC5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmxhbmQucGxhbnRUeXBlID0gUGxhbnRUeXBlLnRvbWF0b1NlZWQ7XG4gICAgICB0aGlzLmxhbmQudGltZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgICAgdGhpcy5sYW5kLmN1cnJlbnRBc3NldCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgICB0aGlzLmxhbmQuY3JvcCA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyIC09IDE7XG4gICAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLlBsYW50O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICB9XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgb25DbGlja0JsdWViZXJyeVNlZWRCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPiAwXG4gICAgKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5sYW5kLnRpbWUgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgIHRoaXMubGFuZC5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmxhbmQucGxhbnRUeXBlID0gUGxhbnRUeXBlLmJsdWViZXJyeVNlZWQ7XG4gICAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDtcbiAgICAgIHRoaXMubGFuZC5jcm9wID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgLT0gMTtcbiAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgIH1cbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgfVxuICBvbkNsaWNrU3RyYXdiZXJyeVNlZWRCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID4gMFxuICAgICkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMubGFuZC50aW1lID0gUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgICAgdGhpcy5sYW5kLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMubGFuZC5wbGFudFR5cGUgPSBQbGFudFR5cGUuc3RyYXdiZXJyeVNlZWQ7XG4gICAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ7XG4gICAgICB0aGlzLmxhbmQuY3JvcCA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgfVxuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5EaXNwbGF5VUkoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UucHVzaFRvUXVldWUodGhpcyk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIG9uQ2xpY2tNaWxrQ293QnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm51bWJlciA+IDApIHtcbiAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICB0aGlzLmxhbmQudGltZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgIHRoaXMubGFuZC5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmxhbmQuY2F0dGxlVHlwZSA9IENhdHRsZVR5cGUuTWlsa2NvdztcbiAgICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293O1xuICAgICAgdGhpcy5sYW5kLmNyb3AgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5DYXR0bGU7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgIH1cbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgfVxuICBvbkNsaWNrWWllbGRCdG4oKSB7XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICBzd2l0Y2ggKHRoaXMubGFuZC5jdXJyZW50QXNzZXQpIHtcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkVG9tYXRvKFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkQmx1ZWJlcnJ5KFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZFN0cmF3YmVycnkoXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293OlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRNaWxrKFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293OlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCZWVmKFxuICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGRcbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSB0aGlzLmxhbmQucGxhbnRUeXBlXG4gICAgICA/IExhbmRTdGF0ZS5QbGFudFxuICAgICAgOiBMYW5kU3RhdGUuQ2F0dGxlO1xuICAgIGlmICh0aGlzLmxhbmQuY3JvcCA9PSAwKSB7XG4gICAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICAgICAgdGhpcy5EaXNwbGF5VUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZSgpO1xuICB9XG4gIG9uQ2xpY2tNaWxrQnRuKCkge1xuICAgIHRoaXMucmVzZXRVSSgpO1xuICB9XG4gIHNldE5hbWVMYihuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBuYW1lO1xuICB9XG4gIHNldFlpZWxkQ29udGFpbkxiKHlpZWxkQ29udGFpbjogbnVtYmVyKSB7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5zdHJpbmcgPSB5aWVsZENvbnRhaW4udG9TdHJpbmcoKTtcbiAgfVxuICBzZXRDcm9wTGIoY3JvcDogbnVtYmVyKSB7XG4gICAgdGhpcy5jcm9wTGIuc3RyaW5nID0gY3JvcC50b1N0cmluZygpO1xuICB9XG4gIHNldFdvcmtpbmdJbnRlcnZhbExiKHdvcmtpbmdUaW1lOiBudW1iZXIpIHtcbiAgICBpZiAod29ya2luZ1RpbWUgPCAwKSB7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IFwiMHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IF93b3JraW5nVGltZSA9IHBhcnNlSW50KHdvcmtpbmdUaW1lLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5zdHJpbmcgPSBfd29ya2luZ1RpbWUudG9TdHJpbmcoKSArIFwic1wiO1xuICAgIH1cbiAgfVxuICBzZXRUaW1lTGIodGltZTogbnVtYmVyKSB7XG4gICAgaWYgKHRpbWUgPCAwKSB7XG4gICAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBcIjBzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBfdGltZSA9IHBhcnNlSW50KHRpbWUudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBfdGltZS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgfVxuICB9XG5cbiAgc2V0V29ya2VyU3ByaXRlKCkge1xuICAgIHRoaXMubG9hZEltYWdlKFwiTWlkZGxlXCIsIHRoaXMud29ya2VyU3ByaXRlKTtcbiAgfVxuICBzZXRTcHJpdGUoaW1hZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvYWRJbWFnZShpbWFnZU5hbWUsIHRoaXMuU3ByaXRlKTtcbiAgfVxuXG4gIGxvYWRJbWFnZSA9IChpbWFnZU5hbWU6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gYGltYWdlcy8ke2ltYWdlTmFtZX1gO1xuICAgIGlmIChpbWFnZU5hbWUgPT0gXCJcIikge1xuICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNjLmVycm9yKGBLaMO0bmcgdGjhu4MgbG9hZCDhuqNuaDogJHtwYXRofWAsIGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgIH0pO1xuICB9O1xuICByZXNldFVJKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMubmFtZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMueWllbGRDb250YWluTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNyb3BMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMuY3JvcExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5TcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5sYW5kLnBsYW50VHlwZSA9IG51bGw7XG4gICAgdGhpcy5sYW5kLmNhdHRsZVR5cGUgPSBudWxsO1xuXG4gICAgdGhpcy5sYW5kLnRpbWUgPSAwO1xuICAgIHRoaXMubGFuZC5pc0VtcHR5ID0gdHJ1ZTtcblxuICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG5cbiAgICAvL3RoaXMubGFuZC5jdXJyZW50QXNzZXQgPSBudWxsO1xuICAgIHRoaXMubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gIH1cblxuICBlbmFibGVMYW5kKCkge1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPiAwO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPiAwO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5taWxrQ293QnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm51bWJlciA+IDA7XG4gIH1cblxuICBlbmFibGVXb3JrZXIoKSB7XG4gICAgdGhpcy5zZXRXb3JrZXJTcHJpdGUoKTtcbiAgICB0aGlzLndvcmtlclNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZVdvcmtlcigpIHtcbiAgICBpZiAodGhpcy5sYW5kLndvcmtpbmdUaW1lICE9IDApIHtcbiAgICAgIHRoaXMubGFuZC53b3JraW5nVGltZSA9IDA7XG4gICAgICB0aGlzLndvcmtlclNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciAtPSAxO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19