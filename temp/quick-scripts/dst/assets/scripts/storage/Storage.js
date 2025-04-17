
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
    Storage.prototype.addGold = function (gold) {
        gold += gold;
    };
    Storage.prototype.getWorkerIdle = function (workingWorker) {
        var idleWorker = this.worker.number - workingWorker;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JhZ2UvU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSx1Q0FBeUM7QUFFekM7SUFBQTtJQVNBLENBQUM7SUFIQywrQkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxpQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksZ0NBQVU7QUFVdkI7SUFBQTtJQVNBLENBQUM7SUFIQyxrQ0FBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxvQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksc0NBQWE7QUFVMUI7SUFBQTtJQVNBLENBQUM7SUFIQyxtQ0FBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxxQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksd0NBQWM7QUFVM0I7SUFBQTtJQVNBLENBQUM7SUFIQyw0QkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSwwQkFBTztBQVVwQjtJQUFBO0lBU0EsQ0FBQztJQUhDLHdCQUFVLEdBQVY7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILFVBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGtCQUFHO0FBV2hCO0lBQUE7SUFPQSxDQUFDO0lBSEMsNkJBQVksR0FBWjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksd0JB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LHlCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQTNFQSxBQTJFQyxJQUFBO0FBM0VZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBJTGFuZCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lMYW5kXCI7XG5pbXBvcnQgeyBJTWFjaGluZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lNYWNoaW5lXCI7XG5pbXBvcnQgeyBJU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lTdG9yYWdlXCI7XG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVdvcmtlclwiO1xuaW1wb3J0IHsgSVlpZWxkIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVlpZWxkXCI7XG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JQXNzZXRcIjtcbmltcG9ydCB7IExhbmRTdGF0ZSB9IGZyb20gXCIuLi91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGNsYXNzIFRvbWF0b1NlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmx1ZWJlcnJ5U2VlZCBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdHJhd2JlcnJ5U2VlZCBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBNaWxrQ293IGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIENvdyBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvbWF0byBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCbHVlYmVycnkgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgU3RyYXdiZXJyeSBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBNaWxrIGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJlZWYgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXb3JrZXIgaW1wbGVtZW50cyBJV29ya2VyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgd29ya2luZ0ludGVydmFsOiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG4gIFdvcmsoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaGluZSBpbXBsZW1lbnRzIElNYWNoaW5lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBzdXBwb3J0OiBudW1iZXI7XG4gIHVwZ3JhZGVQcmljZTogbnVtYmVyO1xuICBPcGVyYXRlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTGFuZCBpbXBsZW1lbnRzIElMYW5kIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgbWlzc2lvbk51bWJlcjogbnVtYmVyO1xuICBjb250YWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcblxuICBpc0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgdGltZTogbnVtYmVyO1xuICBsYW5kU3RhdGU6IExhbmRTdGF0ZSA9IExhbmRTdGF0ZS5FbXB0eTtcbiAgcGxhbnRUeXBlOiBQbGFudFR5cGUgPSBudWxsO1xuICBjYXR0bGVUeXBlOiBDYXR0bGVUeXBlID0gbnVsbDtcblxuICBjdXJyZW50QXNzZXQ6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2UgaW1wbGVtZW50cyBJU3RvcmFnZSB7XG4gIHdvcmtlcjogV29ya2VyO1xuXG4gIG1hY2hpbmU6IE1hY2hpbmU7XG4gIGxhbmQ6IExhbmQ7XG5cbiAgZ29sZDogbnVtYmVyO1xuICB0b21hdG86IFRvbWF0bztcbiAgYmx1ZWJlcnJ5OiBCbHVlYmVycnk7XG4gIHN0cmF3YmVycnk6IFN0cmF3YmVycnk7XG4gIG1pbGs6IE1pbGs7XG4gIGJlZWY6IEJlZWY7XG4gIHRvbWF0b1NlZWQ6IFRvbWF0b1NlZWQ7XG4gIGJsdWViZXJyeVNlZWQ6IEJsdWViZXJyeVNlZWQ7XG4gIHN0cmF3YmVycnlTZWVkOiBTdHJhd2JlcnJ5U2VlZDtcbiAgbWlsa0NvdzogTWlsa0NvdztcbiAgY293OiBDb3c7XG5cbiAgcHVibGljIHNlbGxUb21hdG8oKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMudG9tYXRvLm51bWJlciAqIHRoaXMudG9tYXRvLnNlbGxQcmljZSk7XG4gICAgdGhpcy50b21hdG8ubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbEJsdWViZXJyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5ibHVlYmVycnkubnVtYmVyICogdGhpcy5ibHVlYmVycnkuc2VsbFByaWNlKTtcbiAgICB0aGlzLmJsdWViZXJyeS5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsU3RyYXdiZXJyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5zdHJhd2JlcnJ5Lm51bWJlciAqIHRoaXMuc3RyYXdiZXJyeS5zZWxsUHJpY2UpO1xuICAgIHRoaXMuc3RyYXdiZXJyeS5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsTWlsaygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5taWxrLm51bWJlciAqIHRoaXMubWlsay5zZWxsUHJpY2UpO1xuICAgIHRoaXMubWlsay5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsQmVlZigpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5iZWVmLm51bWJlciAqIHRoaXMuYmVlZi5zZWxsUHJpY2UpO1xuICAgIHRoaXMuYmVlZi5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBhZGRHb2xkKGdvbGQ6IG51bWJlcik6IHZvaWQge1xuICAgIGdvbGQgKz0gZ29sZDtcbiAgfVxuICBwdWJsaWMgZ2V0V29ya2VySWRsZSh3b3JraW5nV29ya2VyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBpZGxlV29ya2VyID0gdGhpcy53b3JrZXIubnVtYmVyIC0gd29ya2luZ1dvcmtlcjtcbiAgICByZXR1cm4gaWRsZVdvcmtlcjtcbiAgfVxuICBwdWJsaWMgZ2V0UGVyZm9ybWFjZU1hY2hpbmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tYWNoaW5lLnN1cHBvcnQ7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9tYXRvU2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvbWF0b1NlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkQmx1ZWJlcnJ5U2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkU3RyYXdiZXJyeVNlZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRNaWxrQ293KCk6IHZvaWQge1xuICAgIHRoaXMubWlsa0Nvdy5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRDb3coKTogdm9pZCB7XG4gICAgdGhpcy5jb3cubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkV29ya2VyKCk6IHZvaWQge1xuICAgIHRoaXMud29ya2VyLm51bWJlciArPSAxO1xuICB9XG4gIHVwZ3JhZGVNYWNoaW5lKCk6IHZvaWQge1xuICAgIHRoaXMubGFuZC50aW1lIC09XG4gICAgICAodGhpcy5sYW5kLmN1cnJlbnRBc3NldC50aW1lICogdGhpcy5tYWNoaW5lLnN1cHBvcnQpIC8gMTAwO1xuICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdCAqPSAxMDAgKyB0aGlzLm1hY2hpbmUuc3VwcG9ydDtcbiAgfVxuICBhZGRMYW5kKCk6IHZvaWQge1xuICAgIHRoaXMubGFuZC5udW1iZXIgKz0gMTtcbiAgfVxufVxuIl19