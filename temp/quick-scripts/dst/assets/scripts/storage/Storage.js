
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
        return (this.support * (this.level - 1) + 100) / 100;
    };
    Machine.prototype.upgradePerformace = function () {
        this.support += 10;
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
        this.machine.level += 1;
        this.machine.upgradePerformace();
        for (var i = 0; i < this.land.number; i++) {
            var maxHarvest = UIManager_1.default.instance.landUIArray[i].land.currentAsset.maxHarvest;
            UIManager_1.default.instance.landUIArray[i].land.crop =
                UIManager_1.default.instance.landUIArray[i].land.currentAsset.maxHarvest;
            UIManager_1.default.instance.landUIArray[i].land.crop +=
                Math.ceil(maxHarvest * this.machine.Operate()) - maxHarvest;
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
    Storage.prototype.assignWorker = function (landUi) {
        if (landUi.land.containYield > 0) {
            landUi.land.workerAction = LandUI_1.WorkerAction.Yielding;
            return;
        }
        switch (landUi.land.currentAsset) {
            case UIManager_1.default.instance.gameController.model.storage.tomatoSeed:
                landUi.land.workerAction = LandUI_1.WorkerAction.TomatoPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.blueberrySeed:
                landUi.land.workerAction = LandUI_1.WorkerAction.BlueberryPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.strawberrySeed:
                landUi.land.workerAction = LandUI_1.WorkerAction.StrawberryPlant;
                break;
            case UIManager_1.default.instance.gameController.model.storage.milkCow:
                landUi.land.workerAction = LandUI_1.WorkerAction.MilkcowLiveStock;
                break;
            case UIManager_1.default.instance.gameController.model.storage.cow:
                landUi.land.workerAction = LandUI_1.WorkerAction.CowLiveStock;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JhZ2UvU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSx1Q0FBK0Q7QUFDL0Qsa0RBQTZDO0FBRTdDO0lBQUE7SUFTQSxDQUFDO0lBSEMsK0JBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBVXZCO0lBQUE7SUFTQSxDQUFDO0lBSEMsa0NBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHNDQUFhO0FBVTFCO0lBQUE7SUFTQSxDQUFDO0lBSEMsbUNBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdDQUFjO0FBVTNCO0lBQUE7SUFTQSxDQUFDO0lBSEMsNEJBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsY0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMEJBQU87QUFVcEI7SUFBQTtJQVNBLENBQUM7SUFIQyx3QkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxrQkFBRztBQVdoQjtJQUFBO0lBT0EsQ0FBQztJQUhDLDZCQUFZLEdBQVo7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILGFBQUM7QUFBRCxDQVBBLEFBT0Ms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QkFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDekQsTUFBTTtZQUNSLEtBQUssbUJBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQVksQ0FBQyxZQUFZLENBQUM7Z0JBQ3JELE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBbklBLEFBbUlDLElBQUE7QUFuSVksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFBsYW50VHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9QbGFudFR5cGVcIjtcbmltcG9ydCB7IElMYW5kIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSUxhbmRcIjtcbmltcG9ydCB7IElNYWNoaW5lIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSU1hY2hpbmVcIjtcbmltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVN0b3JhZ2VcIjtcbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JV29ya2VyXCI7XG5pbXBvcnQgeyBJWWllbGQgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JWWllbGRcIjtcbmltcG9ydCB7IElBc3NldCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lBc3NldFwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUsIFdvcmtlckFjdGlvbiB9IGZyb20gXCIuLi91aS9MYW5kVUlcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9TZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJsdWViZXJyeVNlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgU3RyYXdiZXJyeVNlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTWlsa0NvdyBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBDb3cgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb21hdG8gaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmx1ZWJlcnJ5IGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN0cmF3YmVycnkgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTWlsayBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCZWVmIGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV29ya2VyIGltcGxlbWVudHMgSVdvcmtlciB7XG4gIGlzQnVzeTogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgd29ya2luZ0ludGVydmFsOiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG4gIFdvcmsobGFuZFVJOiBMYW5kVUksIHdvcmtlckFjdGlvbjogV29ya2VyQWN0aW9uKSB7XG4gICAgc3dpdGNoICh3b3JrZXJBY3Rpb24pIHtcbiAgICAgIGNhc2UgV29ya2VyQWN0aW9uLllpZWxkaW5nOlxuICAgICAgICBsYW5kVUkub25DbGlja1lpZWxkQnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ6XG4gICAgICAgIGxhbmRVSS5vbkNsaWNrVG9tYXRvU2VlZEJ0bigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtlciBDTGljayB0b21hdG9zZWVkYnRuXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgV29ya2VyQWN0aW9uLkJsdWViZXJyeVBsYW50OlxuICAgICAgICBsYW5kVUkub25DbGlja0JsdWViZXJyeVNlZWRCdG4oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5TdHJhd2JlcnJ5UGxhbnQ6XG4gICAgICAgIGxhbmRVSS5vbkNsaWNrU3RyYXdiZXJyeVNlZWRCdG4oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5NaWxrY293TGl2ZVN0b2NrOlxuICAgICAgICBsYW5kVUkub25DbGlja01pbGtDb3dCdG4oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5Db3dMaXZlU3RvY2s6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYWNoaW5lIGltcGxlbWVudHMgSU1hY2hpbmUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIHN1cHBvcnQ6IG51bWJlcjtcbiAgdXBncmFkZVByaWNlOiBudW1iZXI7XG4gIE9wZXJhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuc3VwcG9ydCAqICh0aGlzLmxldmVsIC0gMSkgKyAxMDApIC8gMTAwO1xuICB9XG4gIHVwZ3JhZGVQZXJmb3JtYWNlKCkge1xuICAgIHRoaXMuc3VwcG9ydCArPSAxMDtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIExhbmQgaW1wbGVtZW50cyBJTGFuZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHdvcmtlckFjdGlvbjogV29ya2VyQWN0aW9uLFxuICAgIGNyb3A6IG51bWJlcixcbiAgICBjb250YWluWWllbGQ6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbnVtYmVyOiBudW1iZXIsXG4gICAgbWlzc2lvbk51bWJlcjogbnVtYmVyLFxuICAgIGNvbnRhaW5JbnRlcnZhbDogbnVtYmVyLFxuICAgIGJ1eVByaWNlOiBudW1iZXIsXG5cbiAgICBpc0VtcHR5OiBib29sZWFuID0gdHJ1ZSxcbiAgICB0aW1lOiBudW1iZXIsXG4gICAgbGFuZFN0YXRlOiBMYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHksXG4gICAgcGxhbnRUeXBlOiBQbGFudFR5cGUgPSBudWxsLFxuICAgIGNhdHRsZVR5cGU6IENhdHRsZVR5cGUgPSBudWxsLFxuXG4gICAgY3VycmVudEFzc2V0OiBhbnksXG5cbiAgICB3b3JraW5nVGltZTogbnVtYmVyLFxuXG4gICAgaXNSZWFkeVRvV29yazogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLndvcmtlckFjdGlvbiA9IHdvcmtlckFjdGlvbjtcbiAgICB0aGlzLmNyb3AgPSBjcm9wO1xuICAgIHRoaXMuY29udGFpbllpZWxkID0gY29udGFpbllpZWxkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5taXNzaW9uTnVtYmVyID0gbWlzc2lvbk51bWJlcjtcbiAgICB0aGlzLmNvbnRhaW5JbnRlcnZhbCA9IGNvbnRhaW5JbnRlcnZhbDtcbiAgICB0aGlzLmJ1eVByaWNlID0gYnV5UHJpY2U7XG4gICAgdGhpcy5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMubGFuZFN0YXRlID0gbGFuZFN0YXRlO1xuICAgIHRoaXMucGxhbnRUeXBlID0gcGxhbnRUeXBlO1xuICAgIHRoaXMuY2F0dGxlVHlwZSA9IGNhdHRsZVR5cGU7XG4gICAgdGhpcy5jdXJyZW50QXNzZXQgPSBjdXJyZW50QXNzZXQ7XG4gICAgdGhpcy53b3JraW5nVGltZSA9IHdvcmtpbmdUaW1lO1xuICAgIHRoaXMuaXNSZWFkeVRvV29yayA9IGlzUmVhZHlUb1dvcms7XG4gIH1cblxuICB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbjtcbiAgY3JvcDogbnVtYmVyO1xuICBjb250YWluWWllbGQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgbWlzc2lvbk51bWJlcjogbnVtYmVyO1xuICBjb250YWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcblxuICBpc0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgdGltZTogbnVtYmVyO1xuICBsYW5kU3RhdGU6IExhbmRTdGF0ZSA9IExhbmRTdGF0ZS5FbXB0eTtcbiAgcGxhbnRUeXBlOiBQbGFudFR5cGUgPSBudWxsO1xuICBjYXR0bGVUeXBlOiBDYXR0bGVUeXBlID0gbnVsbDtcblxuICBjdXJyZW50QXNzZXQ6IGFueTtcblxuICB3b3JraW5nVGltZTogbnVtYmVyO1xuXG4gIGlzUmVhZHlUb1dvcms6IGJvb2xlYW47XG5cbiAgY2xvbmUoKTogTGFuZCB7XG4gICAgcmV0dXJuIG5ldyBMYW5kKFxuICAgICAgdGhpcy53b3JrZXJBY3Rpb24sXG4gICAgICB0aGlzLmNyb3AsXG4gICAgICB0aGlzLmNvbnRhaW5ZaWVsZCxcbiAgICAgIHRoaXMubmFtZSxcbiAgICAgIHRoaXMubWlzc2lvbk51bWJlcixcbiAgICAgIHRoaXMuY29udGFpbkludGVydmFsLFxuICAgICAgdGhpcy5idXlQcmljZSxcbiAgICAgIHRoaXMubnVtYmVyLFxuICAgICAgdGhpcy5pc0VtcHR5LFxuICAgICAgdGhpcy50aW1lLFxuICAgICAgdGhpcy5sYW5kU3RhdGUsXG4gICAgICB0aGlzLnBsYW50VHlwZSxcbiAgICAgIHRoaXMuY2F0dGxlVHlwZSxcbiAgICAgIHRoaXMuY3VycmVudEFzc2V0LFxuICAgICAgdGhpcy53b3JraW5nVGltZSxcbiAgICAgIHRoaXMuaXNSZWFkeVRvV29ya1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2UgaW1wbGVtZW50cyBJU3RvcmFnZSB7XG4gIHdvcmtlcjogV29ya2VyO1xuXG4gIG1hY2hpbmU6IE1hY2hpbmU7XG4gIGxhbmQ6IExhbmQ7XG5cbiAgZ29sZDogbnVtYmVyO1xuICB0b21hdG86IFRvbWF0bztcbiAgYmx1ZWJlcnJ5OiBCbHVlYmVycnk7XG4gIHN0cmF3YmVycnk6IFN0cmF3YmVycnk7XG4gIG1pbGs6IE1pbGs7XG4gIGJlZWY6IEJlZWY7XG4gIHRvbWF0b1NlZWQ6IFRvbWF0b1NlZWQ7XG4gIGJsdWViZXJyeVNlZWQ6IEJsdWViZXJyeVNlZWQ7XG4gIHN0cmF3YmVycnlTZWVkOiBTdHJhd2JlcnJ5U2VlZDtcbiAgbWlsa0NvdzogTWlsa0NvdztcbiAgY293OiBDb3c7XG5cbiAgd29ya2luZ1dvcmtlck51bWJlcjogbnVtYmVyO1xuICBnZXRJZGxlV29ya2VyKCkge1xuICAgIHJldHVybiB0aGlzLndvcmtlci5udW1iZXIgLSB0aGlzLndvcmtpbmdXb3JrZXJOdW1iZXI7XG4gIH1cbiAgZ2V0V29ya2luZ1dvcmtlcigpIHtcbiAgICByZXR1cm4gdGhpcy53b3JraW5nV29ya2VyTnVtYmVyO1xuICB9XG5cbiAgcHVibGljIHNlbGxUb21hdG8oKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMudG9tYXRvLm51bWJlciAqIHRoaXMudG9tYXRvLnNlbGxQcmljZSk7XG4gICAgdGhpcy50b21hdG8ubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbEJsdWViZXJyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5ibHVlYmVycnkubnVtYmVyICogdGhpcy5ibHVlYmVycnkuc2VsbFByaWNlKTtcbiAgICB0aGlzLmJsdWViZXJyeS5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsU3RyYXdiZXJyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5zdHJhd2JlcnJ5Lm51bWJlciAqIHRoaXMuc3RyYXdiZXJyeS5zZWxsUHJpY2UpO1xuICAgIHRoaXMuc3RyYXdiZXJyeS5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsTWlsaygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5taWxrLm51bWJlciAqIHRoaXMubWlsay5zZWxsUHJpY2UpO1xuICAgIHRoaXMubWlsay5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsQmVlZigpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5iZWVmLm51bWJlciAqIHRoaXMuYmVlZi5zZWxsUHJpY2UpO1xuICAgIHRoaXMuYmVlZi5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBhZGRHb2xkKF9nb2xkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdvbGQgKz0gX2dvbGQ7XG4gIH1cbiAgZ2V0V29ya2VySWRsZSh3b3JraW5nV29ya2VyTnVtYmVyOiBudW1iZXIpIHtcbiAgICBsZXQgaWRsZVdvcmtlciA9IHRoaXMud29ya2VyLm51bWJlciAtIHdvcmtpbmdXb3JrZXJOdW1iZXI7XG4gICAgcmV0dXJuIGlkbGVXb3JrZXI7XG4gIH1cbiAgcHVibGljIGdldFBlcmZvcm1hY2VNYWNoaW5lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubWFjaGluZS5zdXBwb3J0O1xuICB9XG5cbiAgcHVibGljIGFkZFRvbWF0b1NlZWQoKTogdm9pZCB7XG4gICAgdGhpcy50b21hdG9TZWVkLm51bWJlciArPSAxO1xuICB9XG4gIGFkZEJsdWViZXJyeVNlZWQoKTogdm9pZCB7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkLm51bWJlciArPSAxO1xuICB9XG4gIGFkZFN0cmF3YmVycnlTZWVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWQubnVtYmVyICs9IDEwO1xuICB9XG4gIGFkZE1pbGtDb3coKTogdm9pZCB7XG4gICAgdGhpcy5taWxrQ293Lm51bWJlciArPSAxO1xuICB9XG4gIGFkZENvdygpOiB2b2lkIHtcbiAgICB0aGlzLmNvdy5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRXb3JrZXIoKTogdm9pZCB7XG4gICAgdGhpcy53b3JrZXIubnVtYmVyICs9IDE7XG4gIH1cbiAgdXBncmFkZU1hY2hpbmUoKTogdm9pZCB7XG4gICAgdGhpcy5tYWNoaW5lLmxldmVsICs9IDE7XG4gICAgdGhpcy5tYWNoaW5lLnVwZ3JhZGVQZXJmb3JtYWNlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmQubnVtYmVyOyBpKyspIHtcbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmxhbmRVSUFycmF5W2ldLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UubGFuZFVJQXJyYXlbaV0ubGFuZC5jcm9wID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmxhbmRVSUFycmF5W2ldLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UubGFuZFVJQXJyYXlbaV0ubGFuZC5jcm9wICs9XG4gICAgICAgIE1hdGguY2VpbChtYXhIYXJ2ZXN0ICogdGhpcy5tYWNoaW5lLk9wZXJhdGUoKSkgLSBtYXhIYXJ2ZXN0O1xuICAgIH1cbiAgfVxuICBhZGRMYW5kKCk6IHZvaWQge1xuICAgIHRoaXMubGFuZC5udW1iZXIgKz0gMTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb21hdG8odG9tYXRvTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRvbWF0by5udW1iZXIgKz0gdG9tYXRvTnVtYmVyO1xuICB9XG4gIGFkZEJsdWViZXJyeShibHVlYmVycnlOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYmx1ZWJlcnJ5Lm51bWJlciArPSBibHVlYmVycnlOdW1iZXI7XG4gIH1cbiAgYWRkU3RyYXdiZXJyeShzdHJhd2JlcnJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0cmF3YmVycnkubnVtYmVyICs9IHN0cmF3YmVycnlOdW1iZXI7XG4gIH1cbiAgYWRkTWlsayhtaWxrTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm1pbGsubnVtYmVyICs9IG1pbGtOdW1iZXI7XG4gIH1cbiAgYWRkQmVlZihiZWVmTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJlZWYubnVtYmVyICs9IGJlZWZOdW1iZXI7XG4gIH1cbiAgYXNzaWduV29ya2VyKGxhbmRVaTogTGFuZFVJKSB7XG4gICAgaWYgKGxhbmRVaS5sYW5kLmNvbnRhaW5ZaWVsZCA+IDApIHtcbiAgICAgIGxhbmRVaS5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5ZaWVsZGluZztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChsYW5kVWkubGFuZC5jdXJyZW50QXNzZXQpIHtcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDpcbiAgICAgICAgbGFuZFVpLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDpcbiAgICAgICAgbGFuZFVpLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLkJsdWViZXJyeVBsYW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ6XG4gICAgICAgIGxhbmRVaS5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5TdHJhd2JlcnJ5UGxhbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293OlxuICAgICAgICBsYW5kVWkubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uTWlsa2Nvd0xpdmVTdG9jaztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmNvdzpcbiAgICAgICAgbGFuZFVpLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLkNvd0xpdmVTdG9jaztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==