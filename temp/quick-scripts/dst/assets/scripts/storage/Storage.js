
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JhZ2UvU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSx1Q0FBeUM7QUFFekM7SUFBQTtJQVNBLENBQUM7SUFIQywrQkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxpQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksZ0NBQVU7QUFVdkI7SUFBQTtJQVNBLENBQUM7SUFIQyxrQ0FBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxvQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksc0NBQWE7QUFVMUI7SUFBQTtJQVNBLENBQUM7SUFIQyxtQ0FBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxxQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksd0NBQWM7QUFVM0I7SUFBQTtJQVNBLENBQUM7SUFIQyw0QkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSwwQkFBTztBQVVwQjtJQUFBO0lBU0EsQ0FBQztJQUhDLHdCQUFVLEdBQVY7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILFVBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGtCQUFHO0FBV2hCO0lBQUE7SUFPQSxDQUFDO0lBSEMsNkJBQVksR0FBWjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksd0JBQU07QUFRbkI7SUFBQTtJQU9BLENBQUM7SUFIQyxnQ0FBWSxHQUFaO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxnQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksOEJBQVM7QUFRdEI7SUFBQTtJQU9BLENBQUM7SUFIQyxpQ0FBWSxHQUFaO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxpQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksZ0NBQVU7QUFRdkI7SUFBQTtJQU9BLENBQUM7SUFIQywyQkFBWSxHQUFaO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxvQkFBSTtBQVFqQjtJQUFBO0lBT0EsQ0FBQztJQUhDLDJCQUFZLEdBQVo7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILFdBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9CQUFJO0FBU2pCO0lBQUE7SUFNQSxDQUFDO0lBREMscUJBQUksR0FBSixjQUFjLENBQUM7SUFDakIsYUFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksd0JBQU07QUFRbkI7SUFBQTtJQVFBLENBQUM7SUFIQyx5QkFBTyxHQUFQO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSwwQkFBTztBQVNwQjtJQUFBO1FBUUUsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFTLEdBQWMsa0JBQVMsQ0FBQyxLQUFLLENBQUM7UUFDdkMsY0FBUyxHQUFjLElBQUksQ0FBQztRQUM1QixlQUFVLEdBQWUsSUFBSSxDQUFDO0lBR2hDLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxvQkFBSTtBQWlCakI7SUFBQTtJQW1HQSxDQUFDO0lBaEZDLCtCQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsa0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUVNLDRCQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ00sK0JBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSxnQ0FBYyxHQUFyQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNNLDBCQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDTSwwQkFBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ00seUJBQU8sR0FBZCxVQUFlLEtBQWE7UUFDMUIsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLCtCQUFhLEdBQXBCLFVBQXFCLGFBQXFCO1FBQ3hDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUNwRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ00sc0NBQW9CLEdBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRU0sK0JBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsbUNBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCw0QkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCx3QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1osQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNsRSxDQUFDO0lBQ0QseUJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sMkJBQVMsR0FBaEIsVUFBaUIsWUFBb0I7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFDRCw4QkFBWSxHQUFaLFVBQWEsZUFBdUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDO0lBQzNDLENBQUM7SUFDRCwrQkFBYSxHQUFiLFVBQWMsZ0JBQXdCO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFDRCx5QkFBTyxHQUFQLFVBQVEsVUFBa0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCx5QkFBTyxHQUFQLFVBQVEsVUFBa0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FuR0EsQUFtR0MsSUFBQTtBQW5HWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IHsgSUxhbmQgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JTGFuZFwiO1xuaW1wb3J0IHsgSU1hY2hpbmUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JTWFjaGluZVwiO1xuaW1wb3J0IHsgSVN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JU3RvcmFnZVwiO1xuaW1wb3J0IHsgSVdvcmtlciB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lXb3JrZXJcIjtcbmltcG9ydCB7IElZaWVsZCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lZaWVsZFwiO1xuaW1wb3J0IHsgSUFzc2V0IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSUFzc2V0XCI7XG5pbXBvcnQgeyBMYW5kU3RhdGUgfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9TZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJsdWViZXJyeVNlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgU3RyYXdiZXJyeVNlZWQgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTWlsa0NvdyBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBDb3cgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb21hdG8gaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmx1ZWJlcnJ5IGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN0cmF3YmVycnkgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgTWlsayBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCZWVmIGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV29ya2VyIGltcGxlbWVudHMgSVdvcmtlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuICBXb3JrKCk6IHZvaWQge31cbn1cblxuZXhwb3J0IGNsYXNzIE1hY2hpbmUgaW1wbGVtZW50cyBJTWFjaGluZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgc3VwcG9ydDogbnVtYmVyO1xuICB1cGdyYWRlUHJpY2U6IG51bWJlcjtcbiAgT3BlcmF0ZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIExhbmQgaW1wbGVtZW50cyBJTGFuZCB7XG4gIGNvbnRhaW5ZaWVsZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBtaXNzaW9uTnVtYmVyOiBudW1iZXI7XG4gIGNvbnRhaW5JbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuXG4gIGlzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICB0aW1lOiBudW1iZXI7XG4gIGxhbmRTdGF0ZTogTGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICBwbGFudFR5cGU6IFBsYW50VHlwZSA9IG51bGw7XG4gIGNhdHRsZVR5cGU6IENhdHRsZVR5cGUgPSBudWxsO1xuXG4gIGN1cnJlbnRBc3NldDogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgU3RvcmFnZSBpbXBsZW1lbnRzIElTdG9yYWdlIHtcbiAgd29ya2VyOiBXb3JrZXI7XG5cbiAgbWFjaGluZTogTWFjaGluZTtcbiAgbGFuZDogTGFuZDtcblxuICBnb2xkOiBudW1iZXI7XG4gIHRvbWF0bzogVG9tYXRvO1xuICBibHVlYmVycnk6IEJsdWViZXJyeTtcbiAgc3RyYXdiZXJyeTogU3RyYXdiZXJyeTtcbiAgbWlsazogTWlsaztcbiAgYmVlZjogQmVlZjtcbiAgdG9tYXRvU2VlZDogVG9tYXRvU2VlZDtcbiAgYmx1ZWJlcnJ5U2VlZDogQmx1ZWJlcnJ5U2VlZDtcbiAgc3RyYXdiZXJyeVNlZWQ6IFN0cmF3YmVycnlTZWVkO1xuICBtaWxrQ293OiBNaWxrQ293O1xuICBjb3c6IENvdztcblxuICB3b3JraW5nV29ya2VyTnVtYmVyOiBudW1iZXI7XG4gIGdldElkbGVXb3JrZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud29ya2VyLm51bWJlciAtIHRoaXMud29ya2luZ1dvcmtlck51bWJlcjtcbiAgfVxuICBnZXRXb3JraW5nV29ya2VyKCkge1xuICAgIHJldHVybiB0aGlzLndvcmtpbmdXb3JrZXJOdW1iZXI7XG4gIH1cblxuICBwdWJsaWMgc2VsbFRvbWF0bygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy50b21hdG8ubnVtYmVyICogdGhpcy50b21hdG8uc2VsbFByaWNlKTtcbiAgICB0aGlzLnRvbWF0by5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsQmx1ZWJlcnJ5KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLmJsdWViZXJyeS5udW1iZXIgKiB0aGlzLmJsdWViZXJyeS5zZWxsUHJpY2UpO1xuICAgIHRoaXMuYmx1ZWJlcnJ5Lm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxTdHJhd2JlcnJ5KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLnN0cmF3YmVycnkubnVtYmVyICogdGhpcy5zdHJhd2JlcnJ5LnNlbGxQcmljZSk7XG4gICAgdGhpcy5zdHJhd2JlcnJ5Lm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxNaWxrKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLm1pbGsubnVtYmVyICogdGhpcy5taWxrLnNlbGxQcmljZSk7XG4gICAgdGhpcy5taWxrLm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxCZWVmKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLmJlZWYubnVtYmVyICogdGhpcy5iZWVmLnNlbGxQcmljZSk7XG4gICAgdGhpcy5iZWVmLm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIGFkZEdvbGQoX2dvbGQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ29sZCArPSBfZ29sZDtcbiAgfVxuICBwdWJsaWMgZ2V0V29ya2VySWRsZSh3b3JraW5nV29ya2VyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCBpZGxlV29ya2VyID0gdGhpcy53b3JrZXIubnVtYmVyIC0gd29ya2luZ1dvcmtlcjtcbiAgICByZXR1cm4gaWRsZVdvcmtlcjtcbiAgfVxuICBwdWJsaWMgZ2V0UGVyZm9ybWFjZU1hY2hpbmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tYWNoaW5lLnN1cHBvcnQ7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9tYXRvU2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvbWF0b1NlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkQmx1ZWJlcnJ5U2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkU3RyYXdiZXJyeVNlZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRNaWxrQ293KCk6IHZvaWQge1xuICAgIHRoaXMubWlsa0Nvdy5udW1iZXIgKz0gMTtcbiAgfVxuICBhZGRDb3coKTogdm9pZCB7XG4gICAgdGhpcy5jb3cubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkV29ya2VyKCk6IHZvaWQge1xuICAgIHRoaXMud29ya2VyLm51bWJlciArPSAxO1xuICB9XG4gIHVwZ3JhZGVNYWNoaW5lKCk6IHZvaWQge1xuICAgIHRoaXMubGFuZC50aW1lIC09XG4gICAgICAodGhpcy5sYW5kLmN1cnJlbnRBc3NldC50aW1lICogdGhpcy5tYWNoaW5lLnN1cHBvcnQpIC8gMTAwO1xuICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdCAqPSAxMDAgKyB0aGlzLm1hY2hpbmUuc3VwcG9ydDtcbiAgfVxuICBhZGRMYW5kKCk6IHZvaWQge1xuICAgIHRoaXMubGFuZC5udW1iZXIgKz0gMTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb21hdG8odG9tYXRvTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRvbWF0by5udW1iZXIgKz0gdG9tYXRvTnVtYmVyO1xuICB9XG4gIGFkZEJsdWViZXJyeShibHVlYmVycnlOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYmx1ZWJlcnJ5Lm51bWJlciArPSBibHVlYmVycnlOdW1iZXI7XG4gIH1cbiAgYWRkU3RyYXdiZXJyeShzdHJhd2JlcnJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0cmF3YmVycnkubnVtYmVyICs9IHN0cmF3YmVycnlOdW1iZXI7XG4gIH1cbiAgYWRkTWlsayhtaWxrTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm1pbGsubnVtYmVyICs9IG1pbGtOdW1iZXI7XG4gIH1cbiAgYWRkQmVlZihiZWVmTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJlZWYubnVtYmVyICs9IGJlZWZOdW1iZXI7XG4gIH1cbn1cbiJdfQ==