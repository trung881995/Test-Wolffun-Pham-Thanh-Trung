
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
    Worker.prototype.Work = function () { };
    return Worker;
}());
exports.Worker = Worker;
var Machine = /** @class */ (function () {
    function Machine() {
    }
    Machine.prototype.Operate = function () {
        throw new Error("Method not implemented.");
    };
    return Machine;
}());
exports.Machine = Machine;
var Land = /** @class */ (function () {
    function Land() {
        this.isEmpty = true;
        this.landState = LandUI_1.LandState.Empty;
        this.plantType = null;
        this.cattleType = null;
    }
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
        this.strawberrySeed.number += 1;
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
        this.land.time -=
            (this.land.currentAsset.time * this.machine.support) / 100;
        this.land.currentAsset.maxHarvest *= 100 + this.machine.support;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JhZ2UvU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSx1Q0FBdUQ7QUFFdkQ7SUFBQTtJQVNBLENBQUM7SUFIQywrQkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxpQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksZ0NBQVU7QUFVdkI7SUFBQTtJQVNBLENBQUM7SUFIQyxrQ0FBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxvQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksc0NBQWE7QUFVMUI7SUFBQTtJQVNBLENBQUM7SUFIQyxtQ0FBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxxQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksd0NBQWM7QUFVM0I7SUFBQTtJQVNBLENBQUM7SUFIQyw0QkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSwwQkFBTztBQVVwQjtJQUFBO0lBU0EsQ0FBQztJQUhDLHdCQUFVLEdBQVY7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILFVBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGtCQUFHO0FBV2hCO0lBQUE7SUFPQSxDQUFDO0lBSEMsNkJBQVksR0FBWjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksd0JB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QUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDbEUsQ0FBQztJQUNELHlCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLDJCQUFTLEdBQWhCLFVBQWlCLFlBQW9CO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBQ0QsOEJBQVksR0FBWixVQUFhLGVBQXVCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsK0JBQWEsR0FBYixVQUFjLGdCQUF3QjtRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQztJQUM3QyxDQUFDO0lBQ0QseUJBQU8sR0FBUCxVQUFRLFVBQWtCO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBQ0QseUJBQU8sR0FBUCxVQUFRLFVBQWtCO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsY0FBQztBQUFELENBbkdBLEFBbUdDLElBQUE7QUFuR1ksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFBsYW50VHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9QbGFudFR5cGVcIjtcbmltcG9ydCB7IElMYW5kIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSUxhbmRcIjtcbmltcG9ydCB7IElNYWNoaW5lIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSU1hY2hpbmVcIjtcbmltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVN0b3JhZ2VcIjtcbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JV29ya2VyXCI7XG5pbXBvcnQgeyBJWWllbGQgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JWWllbGRcIjtcbmltcG9ydCB7IElBc3NldCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lBc3NldFwiO1xuaW1wb3J0IHsgTGFuZFN0YXRlLCBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9TZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJsdWViZXJyeVNlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgU3RyYXdiZXJyeVNlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTWlsa0NvdyBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBDb3cgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb21hdG8gaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmx1ZWJlcnJ5IGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN0cmF3YmVycnkgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTWlsayBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCZWVmIGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV29ya2VyIGltcGxlbWVudHMgSVdvcmtlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuICBXb3JrKCk6IHZvaWQge31cbn1cblxuZXhwb3J0IGNsYXNzIE1hY2hpbmUgaW1wbGVtZW50cyBJTWFjaGluZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgc3VwcG9ydDogbnVtYmVyO1xuICB1cGdyYWRlUHJpY2U6IG51bWJlcjtcbiAgT3BlcmF0ZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIExhbmQgaW1wbGVtZW50cyBJTGFuZCB7XG4gIHdvcmtlckFjdGlvbjogV29ya2VyQWN0aW9uO1xuICBjcm9wOiBudW1iZXI7XG4gIGNvbnRhaW5ZaWVsZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBtaXNzaW9uTnVtYmVyOiBudW1iZXI7XG4gIGNvbnRhaW5JbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuXG4gIGlzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICB0aW1lOiBudW1iZXI7XG4gIGxhbmRTdGF0ZTogTGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICBwbGFudFR5cGU6IFBsYW50VHlwZSA9IG51bGw7XG4gIGNhdHRsZVR5cGU6IENhdHRsZVR5cGUgPSBudWxsO1xuXG4gIGN1cnJlbnRBc3NldDogYW55O1xuXG4gIHdvcmtpbmdUaW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xuICB3b3JrZXI6IFdvcmtlcjtcblxuICBtYWNoaW5lOiBNYWNoaW5lO1xuICBsYW5kOiBMYW5kO1xuXG4gIGdvbGQ6IG51bWJlcjtcbiAgdG9tYXRvOiBUb21hdG87XG4gIGJsdWViZXJyeTogQmx1ZWJlcnJ5O1xuICBzdHJhd2JlcnJ5OiBTdHJhd2JlcnJ5O1xuICBtaWxrOiBNaWxrO1xuICBiZWVmOiBCZWVmO1xuICB0b21hdG9TZWVkOiBUb21hdG9TZWVkO1xuICBibHVlYmVycnlTZWVkOiBCbHVlYmVycnlTZWVkO1xuICBzdHJhd2JlcnJ5U2VlZDogU3RyYXdiZXJyeVNlZWQ7XG4gIG1pbGtDb3c6IE1pbGtDb3c7XG4gIGNvdzogQ293O1xuXG4gIHdvcmtpbmdXb3JrZXJOdW1iZXI6IG51bWJlcjtcbiAgZ2V0SWRsZVdvcmtlcigpIHtcbiAgICByZXR1cm4gdGhpcy53b3JrZXIubnVtYmVyIC0gdGhpcy53b3JraW5nV29ya2VyTnVtYmVyO1xuICB9XG4gIGdldFdvcmtpbmdXb3JrZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud29ya2luZ1dvcmtlck51bWJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZWxsVG9tYXRvKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLnRvbWF0by5udW1iZXIgKiB0aGlzLnRvbWF0by5zZWxsUHJpY2UpO1xuICAgIHRoaXMudG9tYXRvLm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxCbHVlYmVycnkoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMuYmx1ZWJlcnJ5Lm51bWJlciAqIHRoaXMuYmx1ZWJlcnJ5LnNlbGxQcmljZSk7XG4gICAgdGhpcy5ibHVlYmVycnkubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbFN0cmF3YmVycnkoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMuc3RyYXdiZXJyeS5udW1iZXIgKiB0aGlzLnN0cmF3YmVycnkuc2VsbFByaWNlKTtcbiAgICB0aGlzLnN0cmF3YmVycnkubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbE1pbGsoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMubWlsay5udW1iZXIgKiB0aGlzLm1pbGsuc2VsbFByaWNlKTtcbiAgICB0aGlzLm1pbGsubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbEJlZWYoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMuYmVlZi5udW1iZXIgKiB0aGlzLmJlZWYuc2VsbFByaWNlKTtcbiAgICB0aGlzLmJlZWYubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgYWRkR29sZChfZ29sZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5nb2xkICs9IF9nb2xkO1xuICB9XG4gIGdldFdvcmtlcklkbGUod29ya2luZ1dvcmtlck51bWJlcjogbnVtYmVyKSB7XG4gICAgbGV0IGlkbGVXb3JrZXIgPSB0aGlzLndvcmtlci5udW1iZXIgLSB3b3JraW5nV29ya2VyTnVtYmVyO1xuICAgIHJldHVybiBpZGxlV29ya2VyO1xuICB9XG4gIHB1YmxpYyBnZXRQZXJmb3JtYWNlTWFjaGluZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1hY2hpbmUuc3VwcG9ydDtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb21hdG9TZWVkKCk6IHZvaWQge1xuICAgIHRoaXMudG9tYXRvU2VlZC5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRCbHVlYmVycnlTZWVkKCk6IHZvaWQge1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRTdHJhd2JlcnJ5U2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkLm51bWJlciArPSAxO1xuICB9XG4gIGFkZE1pbGtDb3coKTogdm9pZCB7XG4gICAgdGhpcy5taWxrQ293Lm51bWJlciArPSAxO1xuICB9XG4gIGFkZENvdygpOiB2b2lkIHtcbiAgICB0aGlzLmNvdy5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRXb3JrZXIoKTogdm9pZCB7XG4gICAgdGhpcy53b3JrZXIubnVtYmVyICs9IDE7XG4gIH1cbiAgdXBncmFkZU1hY2hpbmUoKTogdm9pZCB7XG4gICAgdGhpcy5sYW5kLnRpbWUgLT1cbiAgICAgICh0aGlzLmxhbmQuY3VycmVudEFzc2V0LnRpbWUgKiB0aGlzLm1hY2hpbmUuc3VwcG9ydCkgLyAxMDA7XG4gICAgdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0ICo9IDEwMCArIHRoaXMubWFjaGluZS5zdXBwb3J0O1xuICB9XG4gIGFkZExhbmQoKTogdm9pZCB7XG4gICAgdGhpcy5sYW5kLm51bWJlciArPSAxO1xuICB9XG5cbiAgcHVibGljIGFkZFRvbWF0byh0b21hdG9OdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudG9tYXRvLm51bWJlciArPSB0b21hdG9OdW1iZXI7XG4gIH1cbiAgYWRkQmx1ZWJlcnJ5KGJsdWViZXJyeU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5ibHVlYmVycnkubnVtYmVyICs9IGJsdWViZXJyeU51bWJlcjtcbiAgfVxuICBhZGRTdHJhd2JlcnJ5KHN0cmF3YmVycnlOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RyYXdiZXJyeS5udW1iZXIgKz0gc3RyYXdiZXJyeU51bWJlcjtcbiAgfVxuICBhZGRNaWxrKG1pbGtOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWlsay5udW1iZXIgKz0gbWlsa051bWJlcjtcbiAgfVxuICBhZGRCZWVmKGJlZWZOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYmVlZi5udW1iZXIgKz0gYmVlZk51bWJlcjtcbiAgfVxufVxuIl19