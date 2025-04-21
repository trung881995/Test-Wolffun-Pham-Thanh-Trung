
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/storage/Storage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef5e1Tq4MZK4azSZJ7rXMQr', 'Storage');
// scripts/storage/Storage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = exports.Land = exports.Machine = exports.Worker = exports.Beef = exports.Milk = exports.Strawberry = exports.Blueberry = exports.Tomato = exports.Cow = exports.MilkCow = exports.StrawberrySeed = exports.BlueberrySeed = exports.TomatoSeed = void 0;
var LandUI_1 = require("../ui/LandUI");
var UIManager_1 = require("../Manager/UIManager");
var TomatoSeed = /** @class */ (function () {
    function TomatoSeed() {
    }
    TomatoSeed.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return TomatoSeed;
}());
exports.TomatoSeed = TomatoSeed;
var BlueberrySeed = /** @class */ (function () {
    function BlueberrySeed() {
    }
    BlueberrySeed.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return BlueberrySeed;
}());
exports.BlueberrySeed = BlueberrySeed;
var StrawberrySeed = /** @class */ (function () {
    function StrawberrySeed() {
    }
    StrawberrySeed.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return StrawberrySeed;
}());
exports.StrawberrySeed = StrawberrySeed;
var MilkCow = /** @class */ (function () {
    function MilkCow() {
    }
    MilkCow.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return MilkCow;
}());
exports.MilkCow = MilkCow;
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.useForFarm = function () {
        throw new Error("Method not implemented.");
    };
    return Cow;
}());
exports.Cow = Cow;
var Tomato = /** @class */ (function () {
    function Tomato() {
    }
    Tomato.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Tomato;
}());
exports.Tomato = Tomato;
var Blueberry = /** @class */ (function () {
    function Blueberry() {
    }
    Blueberry.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Blueberry;
}());
exports.Blueberry = Blueberry;
var Strawberry = /** @class */ (function () {
    function Strawberry() {
    }
    Strawberry.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Strawberry;
}());
exports.Strawberry = Strawberry;
var Milk = /** @class */ (function () {
    function Milk() {
    }
    Milk.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Milk;
}());
exports.Milk = Milk;
var Beef = /** @class */ (function () {
    function Beef() {
    }
    Beef.prototype.sellForStore = function () {
        throw new Error("Method not implemented.");
    };
    return Beef;
}());
exports.Beef = Beef;
var Worker = /** @class */ (function () {
    function Worker() {
    }
    Worker.prototype.Work = function (landUI, workerAction) {
        switch (workerAction) {
            case LandUI_1.WorkerAction.Yielding:
                landUI.onClickYieldBtn();
                break;
            case LandUI_1.WorkerAction.TomatoPlant:
                landUI.onClickTomatoSeedBtn();
                console.log("worker CLick tomatoseedbtn");
                break;
            case LandUI_1.WorkerAction.BlueberryPlant:
                landUI.onClickBlueberrySeedBtn();
                break;
            case LandUI_1.WorkerAction.StrawberryPlant:
                landUI.onClickStrawberrySeedBtn();
                break;
            case LandUI_1.WorkerAction.MilkcowLiveStock:
                landUI.onClickMilkCowBtn();
                break;
            case LandUI_1.WorkerAction.CowLiveStock:
                break;
            default:
                break;
        }
    };
    return Worker;
}());
exports.Worker = Worker;
var Machine = /** @class */ (function () {
    function Machine() {
    }
    Machine.prototype.Operate = function () {
        return this.support;
    };
    Machine.prototype.upgradePerformace = function () {
        this.level += 1;
    };
    return Machine;
}());
exports.Machine = Machine;
var Land = /** @class */ (function () {
    function Land(workerAction, crop, containYield, name, number, missionNumber, containInterval, buyPrice, isEmpty, time, landState, plantType, cattleType, currentAsset, workingTime, isReadyToWork) {
        if (isEmpty === void 0) { isEmpty = true; }
        if (landState === void 0) { landState = LandUI_1.LandState.Empty; }
        if (plantType === void 0) { plantType = null; }
        if (cattleType === void 0) { cattleType = null; }
        this.isEmpty = true;
        this.landState = LandUI_1.LandState.Empty;
        this.plantType = null;
        this.cattleType = null;
        this.workerAction = workerAction;
        this.crop = crop;
        this.containYield = containYield;
        this.name = name;
        this.number = number;
        this.missionNumber = missionNumber;
        this.containInterval = containInterval;
        this.buyPrice = buyPrice;
        this.isEmpty = isEmpty;
        this.time = time;
        this.landState = landState;
        this.plantType = plantType;
        this.cattleType = cattleType;
        this.currentAsset = currentAsset;
        this.workingTime = workingTime;
        this.isReadyToWork = isReadyToWork;
    }
    Land.prototype.clone = function () {
        return new Land(this.workerAction, this.crop, this.containYield, this.name, this.missionNumber, this.containInterval, this.buyPrice, this.number, this.isEmpty, this.time, this.landState, this.plantType, this.cattleType, this.currentAsset, this.workingTime, this.isReadyToWork);
    };
    return Land;
}());
exports.Land = Land;
var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.prototype.getIdleWorker = function () {
        return this.worker.number - this.workingWorkerNumber;
    };
    Storage.prototype.getWorkingWorker = function () {
        return this.workingWorkerNumber;
    };
    Storage.prototype.sellTomato = function () {
        this.addGold(this.tomato.number * this.tomato.sellPrice);
        this.tomato.number = 0;
    };
    Storage.prototype.sellBlueberry = function () {
        this.addGold(this.blueberry.number * this.blueberry.sellPrice);
        this.blueberry.number = 0;
    };
    Storage.prototype.sellStrawberry = function () {
        this.addGold(this.strawberry.number * this.strawberry.sellPrice);
        this.strawberry.number = 0;
    };
    Storage.prototype.sellMilk = function () {
        this.addGold(this.milk.number * this.milk.sellPrice);
        this.milk.number = 0;
    };
    Storage.prototype.sellBeef = function () {
        this.addGold(this.beef.number * this.beef.sellPrice);
        this.beef.number = 0;
    };
    Storage.prototype.addGold = function (_gold) {
        this.gold += _gold;
    };
    Storage.prototype.getWorkerIdle = function (workingWorkerNumber) {
        var idleWorker = this.worker.number - workingWorkerNumber;
        return idleWorker;
    };
    Storage.prototype.getPerformaceMachine = function () {
        return this.machine.support;
    };
    Storage.prototype.addTomatoSeed = function () {
        this.tomatoSeed.number += 1;
    };
    Storage.prototype.addBlueberrySeed = function () {
        this.blueberrySeed.number += 1;
    };
    Storage.prototype.addStrawberrySeed = function () {
        this.strawberrySeed.number += 10;
    };
    Storage.prototype.addMilkCow = function () {
        this.milkCow.number += 1;
    };
    Storage.prototype.addCow = function () {
        this.cow.number += 1;
    };
    Storage.prototype.addWorker = function () {
        this.worker.number += 1;
    };
    Storage.prototype.upgradeMachine = function () {
        //this.machine.level += 1;
        this.machine.upgradePerformace();
        for (var i = 0; i < this.land.number; i++) {
            if (UIManager_1.default.instance.gameModel.landArray[i].landState != LandUI_1.LandState.Empty) {
                var maxHarvest = UIManager_1.default.instance.gameModel.landArray[i].currentAsset.maxHarvest;
                UIManager_1.default.instance.gameModel.landArray[i].crop +=
                    Math.ceil(maxHarvest * this.machine.Operate()) / 100;
                var harvestInterval = UIManager_1.default.instance.gameModel.landArray[i].currentAsset
                    .harvestInterval;
                UIManager_1.default.instance.gameModel.landArray[i].time -=
                    Math.ceil(harvestInterval * 60 * this.machine.Operate()) / 100;
                console.log("value: " + this.machine.Operate());
            }
        }
    };
    Storage.prototype.addLand = function () {
        this.land.number += 1;
    };
    Storage.prototype.addTomato = function (tomatoNumber) {
        this.tomato.number += tomatoNumber;
    };
    Storage.prototype.addBlueberry = function (blueberryNumber) {
        this.blueberry.number += blueberryNumber;
    };
    Storage.prototype.addStrawberry = function (strawberryNumber) {
        this.strawberry.number += strawberryNumber;
    };
    Storage.prototype.addMilk = function (milkNumber) {
        this.milk.number += milkNumber;
    };
    Storage.prototype.addBeef = function (beefNumber) {
        this.beef.number += beefNumber;
    };
    Storage.prototype.assignWorker = function (land) {
        if (land.containYield > 0) {
            land.workerAction = LandUI_1.WorkerAction.Yielding;
            return;
        }
        switch (land.currentAsset) {
            case UIManager_1.default.instance.gameController.model.storage.tomatoSeed:
                land.workerAction = LandUI_1.WorkerAction.TomatoPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed:
                land.workerAction = LandUI_1.WorkerAction.BlueberryPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed:
                land.workerAction = LandUI_1.WorkerAction.StrawberryPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.milkCow:
                land.workerAction = LandUI_1.WorkerAction.MilkcowLiveStock;
                break;
            case UIManager_1.default.instance.gameController.model.storage.cow:
                land.workerAction = LandUI_1.WorkerAction.CowLiveStock;
                break;
            default:
                break;
        }
    };
    return Storage;
}());
exports.Storage = Storage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JhZ2UvU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSx1Q0FBK0Q7QUFDL0Qsa0RBQTZDO0FBRTdDO0lBQUE7SUFTQSxDQUFDO0lBSEMsK0JBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBVXZCO0lBQUE7SUFTQSxDQUFDO0lBSEMsa0NBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHNDQUFhO0FBVTFCO0lBQUE7SUFTQSxDQUFDO0lBSEMsbUNBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdDQUFjO0FBVTNCO0lBQUE7SUFTQSxDQUFDO0lBSEMsNEJBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsY0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMEJBQU87QUFVcEI7SUFBQTtJQVNBLENBQUM7SUFIQyx3QkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxrQkFBRztBQVdoQjtJQUFBO0lBT0EsQ0FBQztJQUhDLDZCQUFZLEdBQVo7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILGFBQUM7QUFBRCxDQVBBLEFBT0Ms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QUMsY0FBYztnQkFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBWSxDQUFDLGVBQWUsQ0FBQztnQkFDakQsTUFBTTtZQUNSLEtBQUssbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBWSxDQUFDLGdCQUFnQixDQUFDO2dCQUNsRCxNQUFNO1lBQ1IsS0FBSyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO2dCQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFZLENBQUMsWUFBWSxDQUFDO2dCQUM5QyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUNILGNBQUM7QUFBRCxDQS9JQSxBQStJQyxJQUFBO0FBL0lZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBJTGFuZCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lMYW5kXCI7XG5pbXBvcnQgeyBJTWFjaGluZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lNYWNoaW5lXCI7XG5pbXBvcnQgeyBJU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lTdG9yYWdlXCI7XG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVdvcmtlclwiO1xuaW1wb3J0IHsgSVlpZWxkIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVlpZWxkXCI7XG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JQXNzZXRcIjtcbmltcG9ydCBMYW5kVUksIHsgTGFuZFN0YXRlLCBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvU2VlZCBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCbHVlYmVycnlTZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN0cmF3YmVycnlTZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE1pbGtDb3cgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ293IGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9tYXRvIGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJsdWViZXJyeSBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdHJhd2JlcnJ5IGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE1pbGsgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmVlZiBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmtlciBpbXBsZW1lbnRzIElXb3JrZXIge1xuICBpc0J1c3k6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuICBXb3JrKGxhbmRVSTogTGFuZFVJLCB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbikge1xuICAgIHN3aXRjaCAod29ya2VyQWN0aW9uKSB7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5ZaWVsZGluZzpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tZaWVsZEJ0bigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50OlxuICAgICAgICBsYW5kVUkub25DbGlja1RvbWF0b1NlZWRCdG4oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JrZXIgQ0xpY2sgdG9tYXRvc2VlZGJ0blwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5CbHVlYmVycnlQbGFudDpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uU3RyYXdiZXJyeVBsYW50OlxuICAgICAgICBsYW5kVUkub25DbGlja1N0cmF3YmVycnlTZWVkQnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uTWlsa2Nvd0xpdmVTdG9jazpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tNaWxrQ293QnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uQ293TGl2ZVN0b2NrOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaGluZSBpbXBsZW1lbnRzIElNYWNoaW5lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBzdXBwb3J0OiBudW1iZXI7XG4gIHVwZ3JhZGVQcmljZTogbnVtYmVyO1xuICBPcGVyYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9ydDtcbiAgfVxuICB1cGdyYWRlUGVyZm9ybWFjZSgpIHtcbiAgICB0aGlzLmxldmVsICs9IDE7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBMYW5kIGltcGxlbWVudHMgSUxhbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbixcbiAgICBjcm9wOiBudW1iZXIsXG4gICAgY29udGFpbllpZWxkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIG51bWJlcjogbnVtYmVyLFxuICAgIG1pc3Npb25OdW1iZXI6IG51bWJlcixcbiAgICBjb250YWluSW50ZXJ2YWw6IG51bWJlcixcbiAgICBidXlQcmljZTogbnVtYmVyLFxuXG4gICAgaXNFbXB0eTogYm9vbGVhbiA9IHRydWUsXG4gICAgdGltZTogbnVtYmVyLFxuICAgIGxhbmRTdGF0ZTogTGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5LFxuICAgIHBsYW50VHlwZTogUGxhbnRUeXBlID0gbnVsbCxcbiAgICBjYXR0bGVUeXBlOiBDYXR0bGVUeXBlID0gbnVsbCxcblxuICAgIGN1cnJlbnRBc3NldDogYW55LFxuXG4gICAgd29ya2luZ1RpbWU6IG51bWJlcixcblxuICAgIGlzUmVhZHlUb1dvcms6IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy53b3JrZXJBY3Rpb24gPSB3b3JrZXJBY3Rpb247XG4gICAgdGhpcy5jcm9wID0gY3JvcDtcbiAgICB0aGlzLmNvbnRhaW5ZaWVsZCA9IGNvbnRhaW5ZaWVsZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMubWlzc2lvbk51bWJlciA9IG1pc3Npb25OdW1iZXI7XG4gICAgdGhpcy5jb250YWluSW50ZXJ2YWwgPSBjb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5idXlQcmljZSA9IGJ1eVByaWNlO1xuICAgIHRoaXMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmxhbmRTdGF0ZSA9IGxhbmRTdGF0ZTtcbiAgICB0aGlzLnBsYW50VHlwZSA9IHBsYW50VHlwZTtcbiAgICB0aGlzLmNhdHRsZVR5cGUgPSBjYXR0bGVUeXBlO1xuICAgIHRoaXMuY3VycmVudEFzc2V0ID0gY3VycmVudEFzc2V0O1xuICAgIHRoaXMud29ya2luZ1RpbWUgPSB3b3JraW5nVGltZTtcbiAgICB0aGlzLmlzUmVhZHlUb1dvcmsgPSBpc1JlYWR5VG9Xb3JrO1xuICB9XG5cbiAgd29ya2VyQWN0aW9uOiBXb3JrZXJBY3Rpb247XG4gIGNyb3A6IG51bWJlcjtcbiAgY29udGFpbllpZWxkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIG1pc3Npb25OdW1iZXI6IG51bWJlcjtcbiAgY29udGFpbkludGVydmFsOiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG5cbiAgaXNFbXB0eTogYm9vbGVhbiA9IHRydWU7XG4gIHRpbWU6IG51bWJlcjtcbiAgbGFuZFN0YXRlOiBMYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG4gIHBsYW50VHlwZTogUGxhbnRUeXBlID0gbnVsbDtcbiAgY2F0dGxlVHlwZTogQ2F0dGxlVHlwZSA9IG51bGw7XG5cbiAgY3VycmVudEFzc2V0OiBhbnk7XG5cbiAgd29ya2luZ1RpbWU6IG51bWJlcjtcblxuICBpc1JlYWR5VG9Xb3JrOiBib29sZWFuO1xuXG4gIGNsb25lKCk6IExhbmQge1xuICAgIHJldHVybiBuZXcgTGFuZChcbiAgICAgIHRoaXMud29ya2VyQWN0aW9uLFxuICAgICAgdGhpcy5jcm9wLFxuICAgICAgdGhpcy5jb250YWluWWllbGQsXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLm1pc3Npb25OdW1iZXIsXG4gICAgICB0aGlzLmNvbnRhaW5JbnRlcnZhbCxcbiAgICAgIHRoaXMuYnV5UHJpY2UsXG4gICAgICB0aGlzLm51bWJlcixcbiAgICAgIHRoaXMuaXNFbXB0eSxcbiAgICAgIHRoaXMudGltZSxcbiAgICAgIHRoaXMubGFuZFN0YXRlLFxuICAgICAgdGhpcy5wbGFudFR5cGUsXG4gICAgICB0aGlzLmNhdHRsZVR5cGUsXG4gICAgICB0aGlzLmN1cnJlbnRBc3NldCxcbiAgICAgIHRoaXMud29ya2luZ1RpbWUsXG4gICAgICB0aGlzLmlzUmVhZHlUb1dvcmtcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgd29ya2VyOiBXb3JrZXI7XG5cbiAgbWFjaGluZTogTWFjaGluZTtcbiAgbGFuZDogTGFuZDtcblxuICBnb2xkOiBudW1iZXI7XG4gIHRvbWF0bzogVG9tYXRvO1xuICBibHVlYmVycnk6IEJsdWViZXJyeTtcbiAgc3RyYXdiZXJyeTogU3RyYXdiZXJyeTtcbiAgbWlsazogTWlsaztcbiAgYmVlZjogQmVlZjtcbiAgdG9tYXRvU2VlZDogVG9tYXRvU2VlZDtcbiAgYmx1ZWJlcnJ5U2VlZDogQmx1ZWJlcnJ5U2VlZDtcbiAgc3RyYXdiZXJyeVNlZWQ6IFN0cmF3YmVycnlTZWVkO1xuICBtaWxrQ293OiBNaWxrQ293O1xuICBjb3c6IENvdztcblxuICB3b3JraW5nV29ya2VyTnVtYmVyOiBudW1iZXI7XG4gIGdldElkbGVXb3JrZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud29ya2VyLm51bWJlciAtIHRoaXMud29ya2luZ1dvcmtlck51bWJlcjtcbiAgfVxuICBnZXRXb3JraW5nV29ya2VyKCkge1xuICAgIHJldHVybiB0aGlzLndvcmtpbmdXb3JrZXJOdW1iZXI7XG4gIH1cblxuICBwdWJsaWMgc2VsbFRvbWF0bygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy50b21hdG8ubnVtYmVyICogdGhpcy50b21hdG8uc2VsbFByaWNlKTtcbiAgICB0aGlzLnRvbWF0by5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsQmx1ZWJlcnJ5KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLmJsdWViZXJyeS5udW1iZXIgKiB0aGlzLmJsdWViZXJyeS5zZWxsUHJpY2UpO1xuICAgIHRoaXMuYmx1ZWJlcnJ5Lm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxTdHJhd2JlcnJ5KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLnN0cmF3YmVycnkubnVtYmVyICogdGhpcy5zdHJhd2JlcnJ5LnNlbGxQcmljZSk7XG4gICAgdGhpcy5zdHJhd2JlcnJ5Lm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxNaWxrKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLm1pbGsubnVtYmVyICogdGhpcy5taWxrLnNlbGxQcmljZSk7XG4gICAgdGhpcy5taWxrLm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxCZWVmKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLmJlZWYubnVtYmVyICogdGhpcy5iZWVmLnNlbGxQcmljZSk7XG4gICAgdGhpcy5iZWVmLm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIGFkZEdvbGQoX2dvbGQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ29sZCArPSBfZ29sZDtcbiAgfVxuICBnZXRXb3JrZXJJZGxlKHdvcmtpbmdXb3JrZXJOdW1iZXI6IG51bWJlcikge1xuICAgIGxldCBpZGxlV29ya2VyID0gdGhpcy53b3JrZXIubnVtYmVyIC0gd29ya2luZ1dvcmtlck51bWJlcjtcbiAgICByZXR1cm4gaWRsZVdvcmtlcjtcbiAgfVxuICBwdWJsaWMgZ2V0UGVyZm9ybWFjZU1hY2hpbmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tYWNoaW5lLnN1cHBvcnQ7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9tYXRvU2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvbWF0b1NlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkQmx1ZWJlcnJ5U2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkU3RyYXdiZXJyeVNlZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgKz0gMTA7XG4gIH1cbiAgYWRkTWlsa0NvdygpOiB2b2lkIHtcbiAgICB0aGlzLm1pbGtDb3cubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkQ293KCk6IHZvaWQge1xuICAgIHRoaXMuY293Lm51bWJlciArPSAxO1xuICB9XG4gIGFkZFdvcmtlcigpOiB2b2lkIHtcbiAgICB0aGlzLndvcmtlci5udW1iZXIgKz0gMTtcbiAgfVxuICB1cGdyYWRlTWFjaGluZSgpOiB2b2lkIHtcbiAgICAvL3RoaXMubWFjaGluZS5sZXZlbCArPSAxO1xuICAgIHRoaXMubWFjaGluZS51cGdyYWRlUGVyZm9ybWFjZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYW5kLm51bWJlcjsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W2ldLmxhbmRTdGF0ZSAhPSBMYW5kU3RhdGUuRW1wdHlcbiAgICAgICkge1xuICAgICAgICBsZXQgbWF4SGFydmVzdCA9XG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG5cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uY3JvcCArPVxuICAgICAgICAgIE1hdGguY2VpbChtYXhIYXJ2ZXN0ICogdGhpcy5tYWNoaW5lLk9wZXJhdGUoKSkgLyAxMDA7XG5cbiAgICAgICAgbGV0IGhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uY3VycmVudEFzc2V0XG4gICAgICAgICAgICAuaGFydmVzdEludGVydmFsO1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtpXS50aW1lIC09XG4gICAgICAgICAgTWF0aC5jZWlsKGhhcnZlc3RJbnRlcnZhbCAqIDYwICogdGhpcy5tYWNoaW5lLk9wZXJhdGUoKSkgLyAxMDA7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZTogXCIgKyB0aGlzLm1hY2hpbmUuT3BlcmF0ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYWRkTGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmxhbmQubnVtYmVyICs9IDE7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9tYXRvKHRvbWF0b051bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b21hdG8ubnVtYmVyICs9IHRvbWF0b051bWJlcjtcbiAgfVxuICBhZGRCbHVlYmVycnkoYmx1ZWJlcnJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJsdWViZXJyeS5udW1iZXIgKz0gYmx1ZWJlcnJ5TnVtYmVyO1xuICB9XG4gIGFkZFN0cmF3YmVycnkoc3RyYXdiZXJyeU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdHJhd2JlcnJ5Lm51bWJlciArPSBzdHJhd2JlcnJ5TnVtYmVyO1xuICB9XG4gIGFkZE1pbGsobWlsa051bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5taWxrLm51bWJlciArPSBtaWxrTnVtYmVyO1xuICB9XG4gIGFkZEJlZWYoYmVlZk51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5iZWVmLm51bWJlciArPSBiZWVmTnVtYmVyO1xuICB9XG4gIGFzc2lnbldvcmtlcihsYW5kOiBMYW5kKSB7XG4gICAgaWYgKGxhbmQuY29udGFpbllpZWxkID4gMCkge1xuICAgICAgbGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uWWllbGRpbmc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAobGFuZC5jdXJyZW50QXNzZXQpIHtcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDpcbiAgICAgICAgbGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkOlxuICAgICAgICBsYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5CbHVlYmVycnlQbGFudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkOlxuICAgICAgICBsYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5TdHJhd2JlcnJ5UGxhbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293OlxuICAgICAgICBsYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5NaWxrY293TGl2ZVN0b2NrO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293OlxuICAgICAgICBsYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5Db3dMaXZlU3RvY2s7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=