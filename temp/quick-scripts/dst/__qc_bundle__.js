
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/core/mvc/BaseController');
require('./assets/core/mvc/BaseModel');
require('./assets/core/mvc/BaseView');
require('./assets/enums/CattleType');
require('./assets/enums/LandType');
require('./assets/enums/MachineType');
require('./assets/enums/PlantType');
require('./assets/enums/Type');
require('./assets/enums/WorkerType');
require('./assets/enums/YieldType');
require('./assets/interfaces/IAsset');
require('./assets/interfaces/ILand');
require('./assets/interfaces/IMachine');
require('./assets/interfaces/IStorage');
require('./assets/interfaces/IStore');
require('./assets/interfaces/IWorker');
require('./assets/interfaces/IYield');
require('./assets/scripts/Manager/ConfigManager');
require('./assets/scripts/Manager/UIManager');
require('./assets/scripts/Store/Store');
require('./assets/scripts/controllers/GameController');
require('./assets/scripts/data/GameConfig');
require('./assets/scripts/models/CattleModel');
require('./assets/scripts/models/GameModel');
require('./assets/scripts/models/LandModel');
require('./assets/scripts/models/MachineModel');
require('./assets/scripts/models/PlantModel');
require('./assets/scripts/models/WorkerModel');
require('./assets/scripts/models/YieldModel');
require('./assets/scripts/storage/Storage');
require('./assets/scripts/ui/LandUI');
require('./assets/scripts/ui/StorageUI');
require('./assets/scripts/ui/StoreUI');
require('./assets/scripts/utils/CSVLoader');
require('./assets/scripts/views/GameView');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/MachineType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4755cqesIxOiJBqXUhejd16', 'MachineType');
// enums/MachineType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineType = void 0;
var MachineType;
(function (MachineType) {
    MachineType["China"] = "china";
    MachineType["Japan"] = "japan";
    MachineType["America"] = "america";
    MachineType["Vietnam"] = "vietnam";
})(MachineType = exports.MachineType || (exports.MachineType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9NYWNoaW5lVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsOEJBQWUsQ0FBQTtJQUNmLDhCQUFlLENBQUE7SUFDZixrQ0FBbUIsQ0FBQTtJQUNuQixrQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFLdEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBNYWNoaW5lVHlwZSB7XG4gIENoaW5hID0gXCJjaGluYVwiLFxuICBKYXBhbiA9IFwiamFwYW5cIixcbiAgQW1lcmljYSA9IFwiYW1lcmljYVwiLFxuICBWaWV0bmFtID0gXCJ2aWV0bmFtXCIsXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/core/mvc/BaseView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b94b/tNepBi7ZnaO4Z2fQq', 'BaseView');
// core/mvc/BaseView.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseView = void 0;
var BaseView = /** @class */ (function () {
    function BaseView() {
    }
    BaseView.prototype.setController = function (controller) {
        this.controller = controller;
    };
    return BaseView;
}());
exports.BaseView = BaseView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3JlL212Yy9CYXNlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQUxDLGdDQUFhLEdBQWIsVUFBYyxVQUF1QjtRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBR0gsZUFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUnFCLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VWaWV3PFRDb250cm9sbGVyPiB7XG4gIHByb3RlY3RlZCBjb250cm9sbGVyITogVENvbnRyb2xsZXI7XG5cbiAgc2V0Q29udHJvbGxlcihjb250cm9sbGVyOiBUQ29udHJvbGxlcik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIH1cblxuICBhYnN0cmFjdCB1cGRhdGVWaWV3KCk6IHZvaWQ7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Store/Store.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51926dGLeJMYZBAdbGvB9Sq', 'Store');
// scripts/Store/Store.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store(_storage) {
        this.storage = _storage;
    }
    Store.prototype.buyTomatoSeed = function () {
        this.storage.addGold(-this.storage.tomatoSeed.buyPrice);
        this.storage.addTomatoSeed();
    };
    Store.prototype.buyBlueberrySeed = function () {
        this.storage.addGold(-this.storage.blueberrySeed.buyPrice);
        this.storage.addBlueberrySeed();
    };
    Store.prototype.buyStrawberrySeed = function () {
        this.storage.addGold(-this.storage.strawberrySeed.buyPrice);
        this.storage.addStrawberrySeed();
    };
    Store.prototype.buyMilkCow = function () {
        this.storage.addGold(-this.storage.milkCow.buyPrice);
        this.storage.addMilkCow();
    };
    Store.prototype.buyCow = function () {
        this.storage.addGold(-this.storage.cow.buyPrice);
        this.storage.addCow();
    };
    Store.prototype.buyWorker = function () {
        this.storage.addGold(-this.storage.worker.buyPrice);
        this.storage.addWorker();
    };
    Store.prototype.upgradeMachine = function () {
        this.storage.addGold(-this.storage.machine.upgradePrice);
        this.storage.upgradeMachine();
    };
    Store.prototype.buyLand = function () {
        this.storage.addGold(-this.storage.land.buyPrice);
        this.storage.addLand();
    };
    return Store;
}());
exports.Store = Store;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0b3JlL1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBRUUsZUFBWSxRQUFpQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNkJBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsZ0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNELGlDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCwwQkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCx5QkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCw4QkFBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCx1QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtBQXJDWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTdG9yZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lTdG9yZVwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIFN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgc3RvcmFnZTogU3RvcmFnZTtcbiAgY29uc3RydWN0b3IoX3N0b3JhZ2U6IFN0b3JhZ2UpIHtcbiAgICB0aGlzLnN0b3JhZ2UgPSBfc3RvcmFnZTtcbiAgfVxuICBidXlUb21hdG9TZWVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5hZGRHb2xkKC10aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSk7XG4gICAgdGhpcy5zdG9yYWdlLmFkZFRvbWF0b1NlZWQoKTtcbiAgfVxuICBidXlCbHVlYmVycnlTZWVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5hZGRHb2xkKC10aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5idXlQcmljZSk7XG4gICAgdGhpcy5zdG9yYWdlLmFkZEJsdWViZXJyeVNlZWQoKTtcbiAgfVxuICBidXlTdHJhd2JlcnJ5U2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UuYWRkR29sZCgtdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmJ1eVByaWNlKTtcbiAgICB0aGlzLnN0b3JhZ2UuYWRkU3RyYXdiZXJyeVNlZWQoKTtcbiAgfVxuICBidXlNaWxrQ293KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5hZGRHb2xkKC10aGlzLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZSk7XG4gICAgdGhpcy5zdG9yYWdlLmFkZE1pbGtDb3coKTtcbiAgfVxuICBidXlDb3coKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmFkZEdvbGQoLXRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UpO1xuICAgIHRoaXMuc3RvcmFnZS5hZGRDb3coKTtcbiAgfVxuICBidXlXb3JrZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmFkZEdvbGQoLXRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UpO1xuICAgIHRoaXMuc3RvcmFnZS5hZGRXb3JrZXIoKTtcbiAgfVxuICB1cGdyYWRlTWFjaGluZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UuYWRkR29sZCgtdGhpcy5zdG9yYWdlLm1hY2hpbmUudXBncmFkZVByaWNlKTtcbiAgICB0aGlzLnN0b3JhZ2UudXBncmFkZU1hY2hpbmUoKTtcbiAgfVxuICBidXlMYW5kKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5hZGRHb2xkKC10aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSk7XG4gICAgdGhpcy5zdG9yYWdlLmFkZExhbmQoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/ILand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47d22v8hlJPp5ylOdm0VHUC', 'ILand');
// interfaces/ILand.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lMYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vc2NyaXB0cy91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTGFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIG1pc3Npb25OdW1iZXI6IG51bWJlcjtcbiAgY29udGFpbkludGVydmFsOiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG4gIGNvbnRhaW5ZaWVsZDogbnVtYmVyO1xuICBjdXJyZW50QXNzZXQ6IGFueTtcbiAgY3JvcDogbnVtYmVyO1xuICB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbjtcbiAgd29ya2luZ1RpbWU6IG51bWJlcjtcbiAgaXNSZWFkeVRvV29yazogYm9vbGVhbjtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controllers/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7a15UX2thEpocCqosGZMBo', 'GameController');
// scripts/controllers/GameController.ts

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var BaseController_1 = require("../../core/mvc/BaseController");
var GameView_1 = require("../views/GameView");
var GameModel_1 = require("../models/GameModel");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super.call(this) || this;
        _this.model = new GameModel_1.GameModel();
        _this.view = new GameView_1.GameView(_this);
        return _this;
    }
    GameController.prototype.update = function (dt) {
        throw new Error("Method not implemented.");
    };
    GameController.prototype.setupUI = function () { };
    return GameController;
}(BaseController_1.BaseController));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFDL0QsOENBQTZDO0FBQzdDLGlEQUFnRDtBQUVoRDtJQUFvQyxrQ0FBbUM7SUFHckU7UUFBQSxZQUNFLGlCQUFPLFNBSVI7UUFIQyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRTdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUNqQyxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNNLGdDQUFPLEdBQWQsY0FBd0IsQ0FBQztJQUMzQixxQkFBQztBQUFELENBZEEsQUFjQyxDQWRtQywrQkFBYyxHQWNqRDtBQWRZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vY29yZS9tdmMvQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL0dhbWVWaWV3XCI7XG5pbXBvcnQgeyBHYW1lTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL0dhbWVNb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlcjxHYW1lTW9kZWwsIEdhbWVWaWV3PiB7XG4gIG1vZGVsOiBHYW1lTW9kZWw7XG4gIHZpZXc6IEdhbWVWaWV3O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBuZXcgR2FtZU1vZGVsKCk7XG5cbiAgICB0aGlzLnZpZXcgPSBuZXcgR2FtZVZpZXcodGhpcyk7XG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBzZXR1cFVJKCk6IHZvaWQge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4666aTReI5J4JMzDYDwzNco', 'GameModel');
// scripts/models/GameModel.ts

"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = void 0;
var BaseModel_1 = require("../../core/mvc/BaseModel");
var Store_1 = require("../Store/Store");
var GameConfig_1 = require("../data/GameConfig");
var Storage_1 = require("../storage/Storage");
var LandUI_1 = require("../ui/LandUI");
var GameModel = /** @class */ (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queueLandArray = [];
        return _this;
        /*public getLandNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.land.number;
        }
        public getTomatoSeedNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.tomatoseed.number;
        }
        public getBlueberrySeedNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.blueberryseed.number;
        }
        public getMilkCowNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.milkcow.number;
        }
        public getWokerNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.worker.number;
        }
        public getMachineNumber(): number {
          let firstConfig = this.getData();
          return firstConfig.machine.number;
        }
        */
    }
    GameModel.prototype.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    GameModel.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        this.storage = new Storage_1.Storage();
                        this.store = new Store_1.Store(this.storage);
                        this.storage.land = new Storage_1.Land();
                        this.storage.tomatoSeed = new Storage_1.TomatoSeed();
                        this.storage.blueberrySeed = new Storage_1.BlueberrySeed();
                        this.storage.strawberrySeed = new Storage_1.StrawberrySeed();
                        this.storage.milkCow = new Storage_1.MilkCow();
                        this.storage.cow = new Storage_1.Cow();
                        this.storage.worker = new Storage_1.Worker();
                        this.storage.machine = new Storage_1.Machine();
                        this.storage.tomato = new Storage_1.Tomato();
                        this.storage.blueberry = new Storage_1.Blueberry();
                        this.storage.strawberry = new Storage_1.Strawberry();
                        this.storage.milk = new Storage_1.Milk();
                        this.storage.beef = new Storage_1.Beef();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameModel.prototype.setData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        this.storage.gold = 0;
                        this.storage.workingWorkerNumber = 0;
                        this.storage.land.number = GameConfig_1.FirstConfigs.land.number;
                        this.storage.land.buyPrice = GameConfig_1.LandConfigs.red.buyPrice;
                        this.storage.land.name = GameConfig_1.LandConfigs.red.name;
                        this.storage.land.missionNumber = GameConfig_1.LandConfigs.red.missionNumber;
                        this.storage.land.containInterval = GameConfig_1.LandConfigs.red.containInterval;
                        this.storage.land.containYield = 0;
                        this.storage.land.crop = 0;
                        this.storage.land.workerAction = LandUI_1.WorkerAction.TomatoPlant;
                        this.storage.land.workingTime = 0;
                        this.storage.land.currentAsset = this.storage.tomatoSeed;
                        this.storage.land.isReadyToWork = true;
                        this.storage.blueberrySeed.number = GameConfig_1.FirstConfigs.blueberryseed.number;
                        this.storage.blueberrySeed.name = GameConfig_1.PlantConfigs.blueberryseed.name;
                        this.storage.blueberrySeed.buyPrice = GameConfig_1.PlantConfigs.blueberryseed.buyPrice;
                        this.storage.blueberrySeed.harvestInterval =
                            GameConfig_1.PlantConfigs.blueberryseed.harvestInterval;
                        this.storage.blueberrySeed.maxHarvest =
                            GameConfig_1.PlantConfigs.blueberryseed.maxHarvest;
                        this.storage.tomatoSeed.number = GameConfig_1.FirstConfigs.tomatoseed.number;
                        this.storage.tomatoSeed.name = GameConfig_1.PlantConfigs.tomatoseed.name;
                        this.storage.tomatoSeed.buyPrice = GameConfig_1.PlantConfigs.tomatoseed.buyPrice;
                        this.storage.tomatoSeed.harvestInterval =
                            GameConfig_1.PlantConfigs.tomatoseed.harvestInterval;
                        this.storage.tomatoSeed.maxHarvest = GameConfig_1.PlantConfigs.tomatoseed.maxHarvest;
                        this.storage.strawberrySeed.number = 0;
                        this.storage.strawberrySeed.name = GameConfig_1.PlantConfigs.strawberryseed.name;
                        this.storage.strawberrySeed.buyPrice = GameConfig_1.PlantConfigs.strawberryseed.buyPrice;
                        this.storage.strawberrySeed.harvestInterval =
                            GameConfig_1.PlantConfigs.strawberryseed.harvestInterval;
                        this.storage.strawberrySeed.maxHarvest =
                            GameConfig_1.PlantConfigs.strawberryseed.maxHarvest;
                        this.storage.milkCow.number = GameConfig_1.FirstConfigs.milkcow.number;
                        this.storage.milkCow.name = GameConfig_1.CattleConfigs.milkcow.name;
                        this.storage.milkCow.buyPrice = GameConfig_1.CattleConfigs.milkcow.buyPrice;
                        this.storage.milkCow.harvestInterval =
                            GameConfig_1.CattleConfigs.milkcow.harvestInterval;
                        this.storage.milkCow.maxHarvest = GameConfig_1.CattleConfigs.milkcow.maxHarvest;
                        this.storage.cow.number = 0;
                        this.storage.cow.name = GameConfig_1.CattleConfigs.cow.name;
                        this.storage.cow.buyPrice = GameConfig_1.CattleConfigs.cow.buyPrice;
                        this.storage.cow.harvestInterval = GameConfig_1.CattleConfigs.cow.harvestInterval;
                        this.storage.cow.maxHarvest = GameConfig_1.CattleConfigs.cow.maxHarvest;
                        this.storage.worker.number = GameConfig_1.FirstConfigs.worker.number;
                        this.storage.worker.name = GameConfig_1.WorkerConfigs.middle.name;
                        this.storage.worker.workingInterval = GameConfig_1.WorkerConfigs.middle.workingInterval;
                        this.storage.worker.buyPrice = GameConfig_1.WorkerConfigs.middle.buyPrice;
                        this.storage.workingWorkerNumber = 0;
                        this.storage.machine.level = GameConfig_1.MachineConfigs.china.level;
                        this.storage.machine.name = GameConfig_1.MachineConfigs.china.name;
                        this.storage.machine.support = GameConfig_1.MachineConfigs.china.support;
                        this.storage.machine.upgradePrice = GameConfig_1.MachineConfigs.china.upgradePrice;
                        this.storage.tomato.number = 0;
                        this.storage.tomato.name = GameConfig_1.YieldConfigs.tomato.name;
                        this.storage.tomato.sellPrice = GameConfig_1.YieldConfigs.tomato.sellPrice;
                        this.storage.blueberry.number = 0;
                        this.storage.blueberry.name = GameConfig_1.YieldConfigs.blueberry.name;
                        this.storage.blueberry.sellPrice = GameConfig_1.YieldConfigs.blueberry.sellPrice;
                        this.storage.strawberry.number = 0;
                        this.storage.strawberry.name = GameConfig_1.YieldConfigs.strawberry.name;
                        this.storage.strawberry.sellPrice = GameConfig_1.YieldConfigs.strawberry.sellPrice;
                        this.storage.milk.number = 0;
                        this.storage.milk.name = GameConfig_1.YieldConfigs.milk.name;
                        this.storage.milk.sellPrice = GameConfig_1.YieldConfigs.milk.sellPrice;
                        this.storage.beef.number = 0;
                        this.storage.beef.name = GameConfig_1.YieldConfigs.beef.name;
                        this.storage.beef.sellPrice = GameConfig_1.YieldConfigs.beef.sellPrice;
                        return [2 /*return*/];
                }
            });
        });
    };
    GameModel.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameConfig_1.loadFirstConfigFromCSV()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadCattleConfigFromCSV()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadPlantConfigFromCSV()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadLandConfigFromCSV()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadYieldConfigFromCSV()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadWorkerConfigFromCSV()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, GameConfig_1.loadMachineConfigFromCSV()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameModel.prototype.getFirstData = function () {
        return GameConfig_1.FirstConfigs;
    };
    GameModel.prototype.getPlantData = function () {
        return GameConfig_1.PlantConfigs;
    };
    GameModel.prototype.getLandData = function () {
        return GameConfig_1.LandConfigs;
    };
    GameModel.prototype.getCattleData = function () {
        return GameConfig_1.CattleConfigs;
    };
    GameModel.prototype.getYieldData = function () {
        return GameConfig_1.YieldConfigs;
    };
    GameModel.prototype.getWorkerData = function () {
        return GameConfig_1.WorkerConfigs;
    };
    GameModel.prototype.getMachineData = function () {
        return GameConfig_1.MachineConfigs;
    };
    return GameModel;
}(BaseModel_1.BaseModel));
exports.GameModel = GameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCx3Q0FBdUM7QUFDdkMsaURBZTRCO0FBQzVCLDhDQWU0QjtBQUM1Qix1Q0FBb0Q7QUFFcEQ7SUFBK0IsNkJBQVM7SUFBeEM7UUFBQSxxRUF3S0M7UUFqS0Msb0JBQWMsR0FBYSxFQUFFLENBQUM7O1FBd0k5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBd0JFO0lBQ0osQ0FBQztJQXZLQyx3QkFBSSxHQUFKO1FBQUssY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7SUFBUyxDQUFDO0lBT3ZCLHlCQUFLLEdBQVg7Ozs7NEJBQ0UscUJBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBckIsU0FBcUIsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksY0FBSSxFQUFFLENBQUM7d0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLHVCQUFhLEVBQUUsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7d0JBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO3dCQUNyQyxJQUFJLENB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Ozt3QkFBaEMsU0FBZ0MsQ0FBQzs7Ozs7S0FDbEM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00sZ0NBQVksR0FBbkI7UUFDRSxPQUFPLHlCQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNNLCtCQUFXLEdBQWxCO1FBQ0UsT0FBTyx3QkFBVyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxpQ0FBYSxHQUFwQjtRQUNFLE9BQU8sMEJBQWEsQ0FBQztJQUN2QixDQUFDO0lBQ00sZ0NBQVksR0FBbkI7UUFDRSxPQUFPLHlCQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFhLEdBQXBCO1FBQ0UsT0FBTywwQkFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxrQ0FBYyxHQUFyQjtRQUNFLE9BQU8sMkJBQWMsQ0FBQztJQUN4QixDQUFDO0lBMkJILGdCQUFDO0FBQUQsQ0F4S0EsQUF3S0MsQ0F4SzhCLHFCQUFTLEdBd0t2QztBQXhLWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlTW9kZWxcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XG5pbXBvcnQge1xuICBGaXJzdENvbmZpZ3MsXG4gIFBsYW50Q29uZmlncyxcbiAgQ2F0dGxlQ29uZmlncyxcbiAgWWllbGRDb25maWdzLFxuICBMYW5kQ29uZmlncyxcbiAgV29ya2VyQ29uZmlncyxcbiAgTWFjaGluZUNvbmZpZ3MsXG4gIGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWLFxuICBsb2FkRmlyc3RDb25maWdGcm9tQ1NWLFxuICBsb2FkTGFuZENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVixcbiAgbG9hZFBsYW50Q29uZmlnRnJvbUNTVixcbiAgbG9hZFdvcmtlckNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YsXG59IGZyb20gXCIuLi9kYXRhL0dhbWVDb25maWdcIjtcbmltcG9ydCB7XG4gIEJlZWYsXG4gIEJsdWViZXJyeSxcbiAgQmx1ZWJlcnJ5U2VlZCxcbiAgQ293LFxuICBMYW5kLFxuICBNYWNoaW5lLFxuICBNaWxrLFxuICBNaWxrQ293LFxuICBTdG9yYWdlLFxuICBTdHJhd2JlcnJ5LFxuICBTdHJhd2JlcnJ5U2VlZCxcbiAgVG9tYXRvLFxuICBUb21hdG9TZWVkLFxuICBXb3JrZXIsXG59IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUksIHsgV29ya2VyQWN0aW9uIH0gZnJvbSBcIi4uL3VpL0xhbmRVSVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsIHtcbiAgaW5pdCguLi5hcmdzOiBhbnlbXSk6IHZvaWQge31cbiAgc3RvcmU6IFN0b3JlO1xuICBzdG9yYWdlOiBTdG9yYWdlO1xuXG4gIHN0YXJ0TGFuZE51bWJlcjogbnVtYmVyO1xuXG4gIHF1ZXVlTGFuZEFycmF5OiBMYW5kVUlbXSA9IFtdO1xuICBhc3luYyBzZXR1cCgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICB0aGlzLnN0b3JlID0gbmV3IFN0b3JlKHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQgPSBuZXcgTGFuZCgpO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkID0gbmV3IFRvbWF0b1NlZWQoKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZCA9IG5ldyBCbHVlYmVycnlTZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkID0gbmV3IFN0cmF3YmVycnlTZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cgPSBuZXcgTWlsa0NvdygpO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cgPSBuZXcgQ293KCk7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlciA9IG5ldyBXb3JrZXIoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZSA9IG5ldyBNYWNoaW5lKCk7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvID0gbmV3IFRvbWF0bygpO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkgPSBuZXcgQmx1ZWJlcnJ5KCk7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkgPSBuZXcgU3RyYXdiZXJyeSgpO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrID0gbmV3IE1pbGsoKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZiA9IG5ldyBCZWVmKCk7XG4gIH1cbiAgYXN5bmMgc2V0RGF0YSgpIHtcbiAgICBhd2FpdCB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zdG9yYWdlLmdvbGQgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyID0gMDtcblxuICAgIHRoaXMuc3RvcmFnZS5sYW5kLm51bWJlciA9IEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IExhbmRDb25maWdzLnJlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gTGFuZENvbmZpZ3MucmVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubWlzc2lvbk51bWJlciA9IExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmNvbnRhaW5JbnRlcnZhbCA9IExhbmRDb25maWdzLnJlZC5jb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbllpZWxkID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jcm9wID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmN1cnJlbnRBc3NldCA9IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmlzUmVhZHlUb1dvcmsgPSB0cnVlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyID0gRmlyc3RDb25maWdzLmJsdWViZXJyeXNlZWQubnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm5hbWUgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlID0gUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5tYXhIYXJ2ZXN0ID1cbiAgICAgIFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MudG9tYXRvc2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubmFtZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLnRvbWF0b3NlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm1heEhhcnZlc3QgPSBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm5hbWUgPSBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5tYXhIYXJ2ZXN0ID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID0gRmlyc3RDb25maWdzLm1pbGtjb3cubnVtYmVyO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm5hbWUgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgQ2F0dGxlQ29uZmlncy5taWxrY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5tYXhIYXJ2ZXN0ID0gQ2F0dGxlQ29uZmlncy5taWxrY293Lm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UuY293Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmNvdy5uYW1lID0gQ2F0dGxlQ29uZmlncy5jb3cubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5jb3cuYnV5UHJpY2U7XG4gICAgdGhpcy5zdG9yYWdlLmNvdy5oYXJ2ZXN0SW50ZXJ2YWwgPSBDYXR0bGVDb25maWdzLmNvdy5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLmNvdy5tYXhIYXJ2ZXN0ID0gQ2F0dGxlQ29uZmlncy5jb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubnVtYmVyID0gRmlyc3RDb25maWdzLndvcmtlci5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5uYW1lID0gV29ya2VyQ29uZmlncy5taWRkbGUubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLndvcmtpbmdJbnRlcnZhbCA9IFdvcmtlckNvbmZpZ3MubWlkZGxlLndvcmtpbmdJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmJ1eVByaWNlID0gV29ya2VyQ29uZmlncy5taWRkbGUuYnV5UHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciA9IDA7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5sZXZlbCA9IE1hY2hpbmVDb25maWdzLmNoaW5hLmxldmVsO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLm5hbWUgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnN1cHBvcnQgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5zdXBwb3J0O1xuICAgIHRoaXMuc3RvcmFnZS5tYWNoaW5lLnVwZ3JhZGVQcmljZSA9IE1hY2hpbmVDb25maWdzLmNoaW5hLnVwZ3JhZGVQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm5hbWUgPSBZaWVsZENvbmZpZ3MudG9tYXRvLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MudG9tYXRvLnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm5hbWUgPSBZaWVsZENvbmZpZ3MuYmx1ZWJlcnJ5Lm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MuYmx1ZWJlcnJ5LnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubmFtZSA9IFlpZWxkQ29uZmlncy5zdHJhd2JlcnJ5Lm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkuc2VsbFByaWNlID0gWWllbGRDb25maWdzLnN0cmF3YmVycnkuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5uYW1lID0gWWllbGRDb25maWdzLm1pbGsubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsay5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MubWlsay5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5iZWVmLm5hbWUgPSBZaWVsZENvbmZpZ3MuYmVlZi5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5iZWVmLnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5iZWVmLnNlbGxQcmljZTtcbiAgfVxuICBhc3luYyBsb2FkRGF0YSgpIHtcbiAgICBhd2FpdCBsb2FkRmlyc3RDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZENhdHRsZUNvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkUGxhbnRDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZExhbmRDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFlpZWxkQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRXb3JrZXJDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZE1hY2hpbmVDb25maWdGcm9tQ1NWKCk7XG4gIH1cbiAgcHVibGljIGdldEZpcnN0RGF0YSgpIHtcbiAgICByZXR1cm4gRmlyc3RDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRQbGFudERhdGEoKSB7XG4gICAgcmV0dXJuIFBsYW50Q29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0TGFuZERhdGEoKSB7XG4gICAgcmV0dXJuIExhbmRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRDYXR0bGVEYXRhKCkge1xuICAgIHJldHVybiBDYXR0bGVDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRZaWVsZERhdGEoKSB7XG4gICAgcmV0dXJuIFlpZWxkQ29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0V29ya2VyRGF0YSgpIHtcbiAgICByZXR1cm4gV29ya2VyQ29uZmlncztcbiAgfVxuICBwdWJsaWMgZ2V0TWFjaGluZURhdGEoKSB7XG4gICAgcmV0dXJuIE1hY2hpbmVDb25maWdzO1xuICB9XG5cbiAgLypwdWJsaWMgZ2V0TGFuZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5sYW5kLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0VG9tYXRvU2VlZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy50b21hdG9zZWVkLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0Qmx1ZWJlcnJ5U2VlZE51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5ibHVlYmVycnlzZWVkLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0TWlsa0Nvd051bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5taWxrY293Lm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0V29rZXJOdW1iZXIoKTogbnVtYmVyIHtcbiAgICBsZXQgZmlyc3RDb25maWcgPSB0aGlzLmdldERhdGEoKTtcbiAgICByZXR1cm4gZmlyc3RDb25maWcud29ya2VyLm51bWJlcjtcbiAgfVxuICBwdWJsaWMgZ2V0TWFjaGluZU51bWJlcigpOiBudW1iZXIge1xuICAgIGxldCBmaXJzdENvbmZpZyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIHJldHVybiBmaXJzdENvbmZpZy5tYWNoaW5lLm51bWJlcjtcbiAgfVxuICAqL1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/data/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c45bDBVDVBl4WsS7kSl3/l', 'GameConfig');
// scripts/data/GameConfig.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadLandConfigFromCSV = exports.loadMachineConfigFromCSV = exports.loadWorkerConfigFromCSV = exports.loadYieldConfigFromCSV = exports.loadCattleConfigFromCSV = exports.loadPlantConfigFromCSV = exports.loadFirstConfigFromCSV = exports.FirstConfigs = exports.MachineConfigs = exports.WorkerConfigs = exports.LandConfigs = exports.YieldConfigs = exports.CattleConfigs = exports.PlantConfigs = void 0;
var PlantType_1 = require("../../enums/PlantType");
var CattleType_1 = require("../../enums/CattleType");
var YieldType_1 = require("../../enums/YieldType");
var LandType_1 = require("../../enums/LandType");
var WorkerType_1 = require("../../enums/WorkerType");
var MachineType_1 = require("../../enums/MachineType");
var Type_1 = require("../../enums/Type");
var CSVLoader_1 = require("../utils/CSVLoader");
exports.PlantConfigs = (_a = {},
    _a[PlantType_1.PlantType.tomatoSeed] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _a[PlantType_1.PlantType.blueberrySeed] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _a[PlantType_1.PlantType.strawberrySeed] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _a);
exports.CattleConfigs = (_b = {},
    _b[CattleType_1.CattleType.Milkcow] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _b[CattleType_1.CattleType.Cow] = {
        name: "",
        harvestInterval: 0,
        maxHarvest: 0,
        buyPrice: 0,
    },
    _b);
exports.YieldConfigs = (_c = {},
    _c[YieldType_1.YieldType.Tomato] = {
        name: "",
        sellPrice: 0,
    },
    _c[YieldType_1.YieldType.Blueberry] = {
        name: "",
        sellPrice: 0,
    },
    _c[YieldType_1.YieldType.Strawberry] = {
        name: "",
        sellPrice: 0,
    },
    _c[YieldType_1.YieldType.Milk] = {
        name: "",
        sellPrice: 0,
    },
    _c[YieldType_1.YieldType.Beef] = {
        name: "",
        sellPrice: 0,
    },
    _c);
exports.LandConfigs = (_d = {},
    _d[LandType_1.LandType.Red] = {
        name: "",
        missionNumber: 0,
        containInterval: 0,
        buyPrice: 0,
    },
    _d[LandType_1.LandType.Green] = {
        name: "",
        missionNumber: 0,
        containInterval: 0,
        buyPrice: 0,
    },
    _d[LandType_1.LandType.Brown] = {
        name: "",
        missionNumber: 0,
        containInterval: 0,
        buyPrice: 0,
    },
    _d);
exports.WorkerConfigs = (_e = {},
    _e[WorkerType_1.WorkerType.Fresher] = {
        name: "",
        workingInterval: 0,
        buyPrice: 0,
    },
    _e[WorkerType_1.WorkerType.Junior] = {
        name: "",
        workingInterval: 0,
        buyPrice: 0,
    },
    _e[WorkerType_1.WorkerType.Middle] = {
        name: "",
        workingInterval: 0,
        buyPrice: 0,
    },
    _e[WorkerType_1.WorkerType.Senior] = {
        name: "",
        workingInterval: 0,
        buyPrice: 0,
    },
    _e);
exports.MachineConfigs = (_f = {},
    _f[MachineType_1.MachineType.China] = {
        name: "",
        level: 0,
        support: 0,
        upgradePrice: 0,
    },
    _f[MachineType_1.MachineType.Japan] = {
        name: "",
        level: 0,
        support: 0,
        upgradePrice: 0,
    },
    _f[MachineType_1.MachineType.America] = {
        name: "",
        level: 0,
        support: 0,
        upgradePrice: 0,
    },
    _f[MachineType_1.MachineType.Vietnam] = {
        name: "",
        level: 0,
        support: 0,
        upgradePrice: 0,
    },
    _f);
exports.FirstConfigs = (_g = {},
    _g[Type_1.Type.Land] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Tomatoseed] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Blueberryseed] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Milkcow] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Worker] = {
        name: "",
        number: 0,
    },
    _g[Type_1.Type.Machine] = {
        name: "",
        number: 0,
    },
    _g);
function loadFirstConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("first")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.FirstConfigs[type]) {
                            exports.FirstConfigs[type] = {
                                name: row.name,
                                number: parseInt(row.number),
                            };
                        }
                    });
                    console.log("[CSV] FirstConfigs loaded:", exports.FirstConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadFirstConfigFromCSV = loadFirstConfigFromCSV;
function loadPlantConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("plants")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.PlantConfigs[type]) {
                            exports.PlantConfigs[type] = {
                                name: row.name,
                                harvestInterval: parseFloat(row.harvestInterval),
                                maxHarvest: parseInt(row.maxHarvest),
                                buyPrice: parseInt(row.buyPrice),
                            };
                        }
                    });
                    console.log("[CSV] PlantConfigs loaded:", exports.PlantConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadPlantConfigFromCSV = loadPlantConfigFromCSV;
function loadCattleConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("cattles")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.CattleConfigs[type]) {
                            exports.CattleConfigs[type] = {
                                name: row.name,
                                harvestInterval: parseFloat(row.harvestInterval),
                                maxHarvest: parseInt(row.maxHarvest),
                                buyPrice: parseInt(row.sellPrice),
                            };
                        }
                    });
                    console.log("[CSV] CattleConfigs loaded:", exports.CattleConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadCattleConfigFromCSV = loadCattleConfigFromCSV;
function loadYieldConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("yields")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.YieldConfigs[type]) {
                            exports.YieldConfigs[type] = {
                                name: row.name,
                                sellPrice: parseInt(row.sellPrice),
                            };
                        }
                    });
                    console.log("[CSV] YieldConfigs loaded:", exports.YieldConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadYieldConfigFromCSV = loadYieldConfigFromCSV;
function loadWorkerConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("workers")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.WorkerConfigs[type]) {
                            exports.WorkerConfigs[type] = {
                                name: row.name,
                                workingInterval: parseFloat(row.workingInterval),
                                buyPrice: parseInt(row.buyPrice),
                            };
                        }
                    });
                    console.log("[CSV] WorkerConfigs loaded:", exports.WorkerConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadWorkerConfigFromCSV = loadWorkerConfigFromCSV;
function loadMachineConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("machines")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.MachineConfigs[type]) {
                            exports.MachineConfigs[type] = {
                                name: row.name,
                                level: parseInt(row.level),
                                support: parseFloat(row.support),
                                upgradePrice: parseInt(row.upgradePrice),
                            };
                        }
                    });
                    console.log("[CSV] MachineConfigs loaded:", exports.MachineConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadMachineConfigFromCSV = loadMachineConfigFromCSV;
function loadLandConfigFromCSV() {
    return __awaiter(this, void 0, Promise, function () {
        var records;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CSVLoader_1.CSVLoader.load("lands")];
                case 1:
                    records = _a.sent();
                    records.forEach(function (row) {
                        var type = row.name.toLowerCase();
                        if (exports.LandConfigs[type]) {
                            exports.LandConfigs[type] = {
                                name: row.name,
                                missionNumber: parseInt(row.missionNumber),
                                containInterval: parseFloat(row.emptyInterval),
                                buyPrice: parseInt(row.buyPrice),
                            };
                        }
                    });
                    console.log("[CSV] LandConfigs loaded:", exports.LandConfigs);
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadLandConfigFromCSV = loadLandConfigFromCSV;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvR2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHFEQUFvRDtBQUNwRCxtREFBa0Q7QUFDbEQsaURBQWdEO0FBQ2hELHFEQUFvRDtBQUNwRCx1REFBc0Q7QUFDdEQseUNBQXdDO0FBQ3hDLGdEQUErQztBQXVDbEMsUUFBQSxZQUFZO0lBQ3ZCLEdBQUMscUJBQVMsQ0FBQyxVQUFVLElBQUc7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHFCQUFTLENBQUMsYUFBYSxJQUFHO1FBQ3pCLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBQ0QsR0FBQyxxQkFBUyxDQUFDLGNBQWMsSUFBRztRQUMxQixJQUFJLEVBQUUsRUFBRTtRQUNSLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLENBQUM7S0FDWjtRQUNEO0FBQ1csUUFBQSxhQUFhO0lBQ3hCLEdBQUMsdUJBQVUsQ0FBQyxPQUFPLElBQUc7UUFDcEIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHVCQUFVLENBQUMsR0FBRyxJQUFHO1FBQ2hCLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO1FBQ0Q7QUFDVyxRQUFBLFlBQVk7SUFDdkIsR0FB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QUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBYyxDQUFDO3dCQUVoRCxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3JCLG1CQUFXLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0NBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQ0FDZCxhQUFhLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0NBQzFDLGVBQWUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztnQ0FDOUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOzZCQUNqQyxDQUFDO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsbUJBQVcsQ0FBQyxDQUFDOzs7OztDQUN2RDtBQWpCRCxzREFpQkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFlpZWxkVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9ZaWVsZFR5cGVcIjtcbmltcG9ydCB7IExhbmRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0xhbmRUeXBlXCI7XG5pbXBvcnQgeyBXb3JrZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1dvcmtlclR5cGVcIjtcbmltcG9ydCB7IE1hY2hpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL01hY2hpbmVUeXBlXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1R5cGVcIjtcbmltcG9ydCB7IENTVkxvYWRlciB9IGZyb20gXCIuLi91dGlscy9DU1ZMb2FkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGaXJzdENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFlpZWxkQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0dGxlQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBQbGFudENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbWlzc2lvbk51bWJlcjogbnVtYmVyO1xuICBjb250YWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV29ya2VyQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB3b3JraW5nSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaGluZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgc3VwcG9ydDogbnVtYmVyO1xuICB1cGdyYWRlUHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBQbGFudENvbmZpZ3M6IFJlY29yZDxQbGFudFR5cGUsIFBsYW50Q29uZmlnPiA9IHtcbiAgW1BsYW50VHlwZS50b21hdG9TZWVkXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtQbGFudFR5cGUuYmx1ZWJlcnJ5U2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGhhcnZlc3RJbnRlcnZhbDogMCxcbiAgICBtYXhIYXJ2ZXN0OiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbUGxhbnRUeXBlLnN0cmF3YmVycnlTZWVkXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IENhdHRsZUNvbmZpZ3M6IFJlY29yZDxDYXR0bGVUeXBlLCBDYXR0bGVDb25maWc+ID0ge1xuICBbQ2F0dGxlVHlwZS5NaWxrY293XToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtDYXR0bGVUeXBlLkNvd106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGhhcnZlc3RJbnRlcnZhbDogMCxcbiAgICBtYXhIYXJ2ZXN0OiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBZaWVsZENvbmZpZ3M6IFJlY29yZDxZaWVsZFR5cGUsIFlpZWxkQ29uZmlnPiA9IHtcbiAgW1lpZWxkVHlwZS5Ub21hdG9dOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBzZWxsUHJpY2U6IDAsXG4gIH0sXG4gIFtZaWVsZFR5cGUuQmx1ZWJlcnJ5XToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgc2VsbFByaWNlOiAwLFxuICB9LFxuICBbWWllbGRUeXBlLlN0cmF3YmVycnldOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBzZWxsUHJpY2U6IDAsXG4gIH0sXG4gIFtZaWVsZFR5cGUuTWlsa106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHNlbGxQcmljZTogMCxcbiAgfSxcbiAgW1lpZWxkVHlwZS5CZWVmXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgc2VsbFByaWNlOiAwLFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBMYW5kQ29uZmlnczogUmVjb3JkPExhbmRUeXBlLCBMYW5kQ29uZmlnPiA9IHtcbiAgW0xhbmRUeXBlLlJlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG1pc3Npb25OdW1iZXI6IDAsXG4gICAgY29udGFpbkludGVydmFsOiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbTGFuZFR5cGUuR3JlZW5dOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBtaXNzaW9uTnVtYmVyOiAwLFxuICAgIGNvbnRhaW5JbnRlcnZhbDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW0xhbmRUeXBlLkJyb3duXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbWlzc2lvbk51bWJlcjogMCxcbiAgICBjb250YWluSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgV29ya2VyQ29uZmlnczogUmVjb3JkPFdvcmtlclR5cGUsIFdvcmtlckNvbmZpZz4gPSB7XG4gIFtXb3JrZXJUeXBlLkZyZXNoZXJdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICB3b3JraW5nSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtXb3JrZXJUeXBlLkp1bmlvcl06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHdvcmtpbmdJbnRlcnZhbDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW1dvcmtlclR5cGUuTWlkZGxlXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgd29ya2luZ0ludGVydmFsOiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbV29ya2VyVHlwZS5TZW5pb3JdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICB3b3JraW5nSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IE1hY2hpbmVDb25maWdzOiBSZWNvcmQ8TWFjaGluZVR5cGUsIE1hY2hpbmVDb25maWc+ID0ge1xuICBbTWFjaGluZVR5cGUuQ2hpbmFdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBsZXZlbDogMCxcbiAgICBzdXBwb3J0OiAwLFxuICAgIHVwZ3JhZGVQcmljZTogMCxcbiAgfSxcbiAgW01hY2hpbmVUeXBlLkphcGFuXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG4gIFtNYWNoaW5lVHlwZS5BbWVyaWNhXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG4gIFtNYWNoaW5lVHlwZS5WaWV0bmFtXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IEZpcnN0Q29uZmlnczogUmVjb3JkPFR5cGUsIEZpcnN0Q29uZmlnPiA9IHtcbiAgW1R5cGUuTGFuZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuVG9tYXRvc2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuQmx1ZWJlcnJ5c2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuTWlsa2Nvd106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuV29ya2VyXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICB9LFxuICBbVHlwZS5NYWNoaW5lXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICB9LFxufTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRmlyc3RDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJmaXJzdFwiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFR5cGU7XG5cbiAgICBpZiAoRmlyc3RDb25maWdzW3R5cGVdKSB7XG4gICAgICBGaXJzdENvbmZpZ3NbdHlwZV0gPSB7XG4gICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICBudW1iZXI6IHBhcnNlSW50KHJvdy5udW1iZXIpLFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiW0NTVl0gRmlyc3RDb25maWdzIGxvYWRlZDpcIiwgRmlyc3RDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQbGFudENvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcInBsYW50c1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFBsYW50VHlwZTtcblxuICAgIGlmIChQbGFudENvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIFBsYW50Q29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIGhhcnZlc3RJbnRlcnZhbDogcGFyc2VGbG9hdChyb3cuaGFydmVzdEludGVydmFsKSxcbiAgICAgICAgbWF4SGFydmVzdDogcGFyc2VJbnQocm93Lm1heEhhcnZlc3QpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIFBsYW50Q29uZmlncyBsb2FkZWQ6XCIsIFBsYW50Q29uZmlncyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ2F0dGxlQ29uZmlnRnJvbUNTVigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IENTVkxvYWRlci5sb2FkKFwiY2F0dGxlc1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIENhdHRsZVR5cGU7XG5cbiAgICBpZiAoQ2F0dGxlQ29uZmlnc1t0eXBlXSkge1xuICAgICAgQ2F0dGxlQ29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIGhhcnZlc3RJbnRlcnZhbDogcGFyc2VGbG9hdChyb3cuaGFydmVzdEludGVydmFsKSxcbiAgICAgICAgbWF4SGFydmVzdDogcGFyc2VJbnQocm93Lm1heEhhcnZlc3QpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LnNlbGxQcmljZSksXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbQ1NWXSBDYXR0bGVDb25maWdzIGxvYWRlZDpcIiwgQ2F0dGxlQ29uZmlncyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkWWllbGRDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJ5aWVsZHNcIik7XG5cbiAgcmVjb3Jkcy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBjb25zdCB0eXBlID0gcm93Lm5hbWUudG9Mb3dlckNhc2UoKSBhcyBZaWVsZFR5cGU7XG5cbiAgICBpZiAoWWllbGRDb25maWdzW3R5cGVdKSB7XG4gICAgICBZaWVsZENvbmZpZ3NbdHlwZV0gPSB7XG4gICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICBzZWxsUHJpY2U6IHBhcnNlSW50KHJvdy5zZWxsUHJpY2UpLFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiW0NTVl0gWWllbGRDb25maWdzIGxvYWRlZDpcIiwgWWllbGRDb25maWdzKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IENTVkxvYWRlci5sb2FkKFwid29ya2Vyc1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFdvcmtlclR5cGU7XG5cbiAgICBpZiAoV29ya2VyQ29uZmlnc1t0eXBlXSkge1xuICAgICAgV29ya2VyQ29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIHdvcmtpbmdJbnRlcnZhbDogcGFyc2VGbG9hdChyb3cud29ya2luZ0ludGVydmFsKSxcbiAgICAgICAgYnV5UHJpY2U6IHBhcnNlSW50KHJvdy5idXlQcmljZSksXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbQ1NWXSBXb3JrZXJDb25maWdzIGxvYWRlZDpcIiwgV29ya2VyQ29uZmlncyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkTWFjaGluZUNvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcIm1hY2hpbmVzXCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgTWFjaGluZVR5cGU7XG5cbiAgICBpZiAoTWFjaGluZUNvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIE1hY2hpbmVDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgbGV2ZWw6IHBhcnNlSW50KHJvdy5sZXZlbCksXG4gICAgICAgIHN1cHBvcnQ6IHBhcnNlRmxvYXQocm93LnN1cHBvcnQpLFxuICAgICAgICB1cGdyYWRlUHJpY2U6IHBhcnNlSW50KHJvdy51cGdyYWRlUHJpY2UpLFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiW0NTVl0gTWFjaGluZUNvbmZpZ3MgbG9hZGVkOlwiLCBNYWNoaW5lQ29uZmlncyk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZExhbmRDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJsYW5kc1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIExhbmRUeXBlO1xuXG4gICAgaWYgKExhbmRDb25maWdzW3R5cGVdKSB7XG4gICAgICBMYW5kQ29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIG1pc3Npb25OdW1iZXI6IHBhcnNlSW50KHJvdy5taXNzaW9uTnVtYmVyKSxcbiAgICAgICAgY29udGFpbkludGVydmFsOiBwYXJzZUZsb2F0KHJvdy5lbXB0eUludGVydmFsKSxcbiAgICAgICAgYnV5UHJpY2U6IHBhcnNlSW50KHJvdy5idXlQcmljZSksXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbQ1NWXSBMYW5kQ29uZmlncyBsb2FkZWQ6XCIsIExhbmRDb25maWdzKTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/PlantType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0a62BACnZHRaaCGaiX4GX5', 'PlantType');
// enums/PlantType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantType = void 0;
var PlantType;
(function (PlantType) {
    PlantType["tomatoSeed"] = "tomatoseed";
    PlantType["blueberrySeed"] = "blueberryseed";
    PlantType["strawberrySeed"] = "strawberryseed";
})(PlantType = exports.PlantType || (exports.PlantType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9QbGFudFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLHNDQUF5QixDQUFBO0lBQ3pCLDRDQUErQixDQUFBO0lBQy9CLDhDQUFpQyxDQUFBO0FBQ25DLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFBsYW50VHlwZSB7XG4gIHRvbWF0b1NlZWQgPSBcInRvbWF0b3NlZWRcIixcbiAgYmx1ZWJlcnJ5U2VlZCA9IFwiYmx1ZWJlcnJ5c2VlZFwiLFxuICBzdHJhd2JlcnJ5U2VlZCA9IFwic3RyYXdiZXJyeXNlZWRcIixcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/StorageUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf0ecMP37tPgYBbrit2eOff', 'StorageUI');
// scripts/ui/StorageUI.ts

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
var UIManager_1 = require("../Manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StorageUI = /** @class */ (function (_super) {
    __extends(StorageUI, _super);
    function StorageUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tomatoSeed = null;
        _this.blueberrySeed = null;
        _this.strawberrySeed = null;
        _this.milkCow = null;
        _this.workerIdle = null;
        _this.workerWorking = null;
        _this.machineLevel = null;
        _this.gold = null;
        _this.tomato = null;
        _this.blueberry = null;
        _this.strawberry = null;
        _this.milk = null;
        _this.sellTomatoBtn = null;
        _this.sellBlueberryBtn = null;
        _this.sellStrawberryBtn = null;
        _this.sellMilkBtn = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StorageUI.prototype.start = function () { };
    // update (dt) {}
    StorageUI.prototype.setupUI = function () {
        this.sellTomatoBtn.node.active = true;
        this.sellTomatoBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellTomatoBtn, this);
        this.sellBlueberryBtn.node.active = true;
        this.sellBlueberryBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellBlueberryBtn, this);
        this.sellStrawberryBtn.node.active = true;
        this.sellStrawberryBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellStrawberryBtn, this);
        this.sellMilkBtn.node.active = true;
        this.sellMilkBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickSellMilkBtn, this);
    };
    StorageUI.prototype.updateUI = function () {
        var idleWorker = UIManager_1.default.instance.gameController.model.storage.getIdleWorker();
        var workingWorker = UIManager_1.default.instance.gameController.model.storage.getWorkingWorker();
        UIManager_1.default.instance.createLand();
        this.tomatoSeed.string =
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.number.toString();
        this.blueberrySeed.string =
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.number.toString();
        this.strawberrySeed.string =
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.number.toString();
        this.milkCow.string =
            UIManager_1.default.instance.gameController.model.storage.milkCow.number.toString();
        this.gold.string =
            UIManager_1.default.instance.gameController.model.storage.gold.toString();
        this.workerIdle.string = idleWorker.toString();
        this.machineLevel.string =
            UIManager_1.default.instance.gameController.model.storage.machine.level.toString();
        this.workerWorking.string = workingWorker.toString();
        this.tomato.string =
            UIManager_1.default.instance.gameController.model.storage.tomato.number.toString();
        this.blueberry.string =
            UIManager_1.default.instance.gameController.model.storage.blueberry.number.toString();
        this.strawberry.string =
            UIManager_1.default.instance.gameController.model.storage.strawberry.number.toString();
        this.milk.string =
            UIManager_1.default.instance.gameController.model.storage.milk.number.toString();
        console.log("update Storage UI Done !!!");
    };
    StorageUI.prototype.resetUI = function () { };
    StorageUI.prototype.onClickSellTomatoBtn = function () {
        console.log("onClickSellTomatoBtn");
        if (UIManager_1.default.instance.gameController.model.storage.tomato.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellTomato();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellBlueberryBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.blueberry.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellBlueberry();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellStrawberryBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.strawberry.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellStrawberry();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StorageUI.prototype.onClickSellMilkBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.milk.number > 0) {
            UIManager_1.default.instance.gameController.model.storage.sellMilk();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "tomatoSeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "blueberrySeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "strawberrySeed", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "milkCow", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "workerIdle", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "workerWorking", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "machineLevel", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "gold", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "tomato", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "blueberry", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "strawberry", void 0);
    __decorate([
        property(cc.Label)
    ], StorageUI.prototype, "milk", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellTomatoBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellBlueberryBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellStrawberryBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StorageUI.prototype, "sellMilkBtn", void 0);
    StorageUI = __decorate([
        ccclass
    ], StorageUI);
    return StorageUI;
}(cc.Component));
exports.default = StorageUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1N0b3JhZ2VVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixrREFBNkM7QUFFdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFpSUM7UUEvSEMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFFcEMsaUJBQVcsR0FBYyxJQUFJLENBQUM7O0lBZ0doQyxDQUFDO0lBL0ZDLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixpQkFBaUI7SUFDakIsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxD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Q1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDWTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0c7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDZ0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVTtJQWpDWCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaUk3QjtJQUFELGdCQUFDO0NBaklELEFBaUlDLENBaklzQyxFQUFFLENBQUMsU0FBUyxHQWlJbEQ7a0JBaklvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRvbWF0b1NlZWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBibHVlYmVycnlTZWVkOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3RyYXdiZXJyeVNlZWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBtaWxrQ293OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgd29ya2VySWRsZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHdvcmtlcldvcmtpbmc6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBtYWNoaW5lTGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBnb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdG9tYXRvOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYmx1ZWJlcnJ5OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3RyYXdiZXJyeTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIG1pbGs6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsVG9tYXRvQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsQmx1ZWJlcnJ5QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsU3RyYXdiZXJyeUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc2VsbE1pbGtCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuXG4gIHN0YXJ0KCkge31cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxuICBzZXR1cFVJKCkge1xuICAgIHRoaXMuc2VsbFRvbWF0b0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zZWxsVG9tYXRvQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTZWxsVG9tYXRvQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5zZWxsQmx1ZWJlcnJ5QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGxCbHVlYmVycnlCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1NlbGxCbHVlYmVycnlCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLnNlbGxTdHJhd2JlcnJ5QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGxTdHJhd2JlcnJ5QnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTZWxsU3RyYXdiZXJyeUJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc2VsbE1pbGtCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2VsbE1pbGtCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1NlbGxNaWxrQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cbiAgdXBkYXRlVUkoKSB7XG4gICAgY29uc3QgaWRsZVdvcmtlciA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRJZGxlV29ya2VyKCk7XG4gICAgY29uc3Qgd29ya2luZ1dvcmtlciA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JraW5nV29ya2VyKCk7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuY3JlYXRlTGFuZCgpO1xuXG4gICAgdGhpcy50b21hdG9TZWVkLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZC5zdHJpbmcgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLnN0cmF3YmVycnlTZWVkLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pbGtDb3cuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5nb2xkLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkLnRvU3RyaW5nKCk7XG5cbiAgICB0aGlzLndvcmtlcklkbGUuc3RyaW5nID0gaWRsZVdvcmtlci50b1N0cmluZygpO1xuICAgIHRoaXMubWFjaGluZUxldmVsLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5tYWNoaW5lLmxldmVsLnRvU3RyaW5nKCk7XG4gICAgdGhpcy53b3JrZXJXb3JraW5nLnN0cmluZyA9IHdvcmtpbmdXb3JrZXIudG9TdHJpbmcoKTtcblxuICAgIHRoaXMudG9tYXRvLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG8ubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5ibHVlYmVycnkuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeS5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLnN0cmF3YmVycnkuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnkubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5taWxrLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrLm51bWJlci50b1N0cmluZygpO1xuXG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGUgU3RvcmFnZSBVSSBEb25lICEhIVwiKTtcbiAgfVxuICByZXNldFVJKCkge31cblxuICBvbkNsaWNrU2VsbFRvbWF0b0J0bigpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tTZWxsVG9tYXRvQnRuXCIpO1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG8ubnVtYmVyID4gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc2VsbFRvbWF0bygpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrU2VsbEJsdWViZXJyeUJ0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlciA+IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnNlbGxCbHVlYmVycnkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja1NlbGxTdHJhd2JlcnJ5QnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5Lm51bWJlciA+IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnNlbGxTdHJhd2JlcnJ5KCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tTZWxsTWlsa0J0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsay5udW1iZXIgPiAwKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zZWxsTWlsaygpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/Type.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aee3ee6ad9Nmp9eQPkTMQdR', 'Type');
// enums/Type.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    Type["Land"] = "land";
    Type["Tomatoseed"] = "tomatoseed";
    Type["Blueberryseed"] = "blueberryseed";
    Type["Milkcow"] = "milkcow";
    Type["Worker"] = "worker";
    Type["Machine"] = "machine";
})(Type = exports.Type || (exports.Type = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksSUFPWDtBQVBELFdBQVksSUFBSTtJQUNkLHFCQUFhLENBQUE7SUFDYixpQ0FBeUIsQ0FBQTtJQUN6Qix1Q0FBK0IsQ0FBQTtJQUMvQiwyQkFBbUIsQ0FBQTtJQUNuQix5QkFBaUIsQ0FBQTtJQUNqQiwyQkFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBUFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBT2YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBUeXBlIHtcbiAgTGFuZCA9IFwibGFuZFwiLFxuICBUb21hdG9zZWVkID0gXCJ0b21hdG9zZWVkXCIsXG4gIEJsdWViZXJyeXNlZWQgPSBcImJsdWViZXJyeXNlZWRcIixcbiAgTWlsa2NvdyA9IFwibWlsa2Nvd1wiLFxuICBXb3JrZXIgPSBcIndvcmtlclwiLFxuICBNYWNoaW5lID0gXCJtYWNoaW5lXCIsXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/YieldType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2e19ZzzSpGBpv7RzjtdwVx', 'YieldType');
// enums/YieldType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldType = void 0;
var YieldType;
(function (YieldType) {
    YieldType["Tomato"] = "tomato";
    YieldType["Blueberry"] = "blueberry";
    YieldType["Strawberry"] = "strawberry";
    YieldType["Milk"] = "milk";
    YieldType["Beef"] = "beef";
})(YieldType = exports.YieldType || (exports.YieldType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9ZaWVsZFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ25CLDhCQUFpQixDQUFBO0lBQ2pCLG9DQUF1QixDQUFBO0lBQ3ZCLHNDQUF5QixDQUFBO0lBQ3pCLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gWWllbGRUeXBlIHtcbiAgVG9tYXRvID0gXCJ0b21hdG9cIixcbiAgQmx1ZWJlcnJ5ID0gXCJibHVlYmVycnlcIixcbiAgU3RyYXdiZXJyeSA9IFwic3RyYXdiZXJyeVwiLFxuICBNaWxrID0gXCJtaWxrXCIsXG4gIEJlZWYgPSBcImJlZWZcIixcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/WorkerType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '647ddShNVRPUoq97VvDJR14', 'WorkerType');
// enums/WorkerType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerType = void 0;
var WorkerType;
(function (WorkerType) {
    WorkerType["Fresher"] = "fresher";
    WorkerType["Junior"] = "junior";
    WorkerType["Middle"] = "middle";
    WorkerType["Senior"] = "senior";
})(WorkerType = exports.WorkerType || (exports.WorkerType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9Xb3JrZXJUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNwQixpQ0FBbUIsQ0FBQTtJQUNuQiwrQkFBaUIsQ0FBQTtJQUNqQiwrQkFBaUIsQ0FBQTtJQUNqQiwrQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBXb3JrZXJUeXBlIHtcbiAgRnJlc2hlciA9IFwiZnJlc2hlclwiLFxuICBKdW5pb3IgPSBcImp1bmlvclwiLFxuICBNaWRkbGUgPSBcIm1pZGRsZVwiLFxuICBTZW5pb3IgPSBcInNlbmlvclwiLFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IWorker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58a6e1i/1NF0b+vGFSBts1D', 'IWorker');
// interfaces/IWorker.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lXb3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYW5kVUksIHsgV29ya2VyQWN0aW9uIH0gZnJvbSBcIi4uL3NjcmlwdHMvdWkvTGFuZFVJXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuXG4gIFdvcmsobGFuZFVJOiBMYW5kVUksIHdvcmtlckFjdGlvbjogV29ya2VyQWN0aW9uKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IMachine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea8a0tPiC1FraEEsEqKBdUf', 'IMachine');
// interfaces/IMachine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElNYWNoaW5lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBzdXBwb3J0OiBudW1iZXI7XG4gIHVwZ3JhZGVQcmljZTogbnVtYmVyO1xuXG4gIE9wZXJhdGUoKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55a2fWzA/hP0J8DGMhBV0hO', 'IAsset');
// interfaces/IAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlO1xuXG4gIHVzZUZvckZhcm0oKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IYield.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1063aUmJJMNJwrUC/eIQP/', 'IYield');
// interfaces/IYield.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lZaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcblxuICBzZWxsRm9yU3RvcmUoKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/LandType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcd90zFvvpCvpj7gwhz0d8a', 'LandType');
// enums/LandType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandType = void 0;
var LandType;
(function (LandType) {
    LandType["Red"] = "red";
    LandType["Green"] = "green";
    LandType["Brown"] = "brown";
})(LandType = exports.LandType || (exports.LandType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9MYW5kVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDbEIsdUJBQVcsQ0FBQTtJQUNYLDJCQUFlLENBQUE7SUFDZiwyQkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUluQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIExhbmRUeXBlIHtcbiAgUmVkID0gXCJyZWRcIixcbiAgR3JlZW4gPSBcImdyZWVuXCIsXG4gIEJyb3duID0gXCJicm93blwiLFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/enums/CattleType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4ceaI+rHlH+ZvzxTNEmCqB', 'CattleType');
// enums/CattleType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CattleType = void 0;
var CattleType;
(function (CattleType) {
    CattleType["Milkcow"] = "milkcow";
    CattleType["Cow"] = "cow";
})(CattleType = exports.CattleType || (exports.CattleType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9lbnVtcy9DYXR0bGVUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixpQ0FBbUIsQ0FBQTtJQUNuQix5QkFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2F0dGxlVHlwZSB7XG4gIE1pbGtjb3cgPSBcIm1pbGtjb3dcIixcbiAgQ293ID0gXCJjb3dcIixcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/core/mvc/BaseModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b6ddZ9THRN+IRL8V7rE/Ub', 'BaseModel');
// core/mvc/BaseModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());
exports.BaseModel = BaseModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3JlL212Yy9CYXNlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRnFCLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNb2RlbCB7XG4gIGFic3RyYWN0IGluaXQoLi4uYXJnczogYW55W10pOiB2b2lkO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/core/mvc/BaseController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2dadZyy+dCRpgHyenuZVfZ', 'BaseController');
// core/mvc/BaseController.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.init = function (model, view) {
        this.model = model;
        this.view = view;
        this.view.setController(this);
    };
    return BaseController;
}());
exports.BaseController = BaseController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3JlL212Yy9CYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO0lBZUEsQ0FBQztJQVJDLDZCQUFJLEdBQUosVUFBSyxLQUFhLEVBQUUsSUFBVztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0gscUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZxQix3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gXCIuL0Jhc2VNb2RlbFwiO1xuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tIFwiLi9CYXNlVmlld1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbnRyb2xsZXI8XG4gIFRNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCxcbiAgVFZpZXcgZXh0ZW5kcyBCYXNlVmlldzxhbnk+XG4+IHtcbiAgcHVibGljIG1vZGVsITogVE1vZGVsO1xuICBwcm90ZWN0ZWQgdmlldyE6IFRWaWV3O1xuXG4gIGluaXQobW9kZWw6IFRNb2RlbCwgdmlldzogVFZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy52aWV3ID0gdmlldztcblxuICAgIHRoaXMudmlldy5zZXRDb250cm9sbGVyKHRoaXMpO1xuICB9XG5cbiAgYWJzdHJhY3QgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/views/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2686b1KiCpGqZMFXUPkJCnq', 'GameView');
// scripts/views/GameView.ts

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
var BaseView_1 = require("../../core/mvc/BaseView");
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView(_controller) {
        var _this = _super.call(this) || this;
        _this.controller = _controller;
        _this.updateView();
        return _this;
    }
    GameView.prototype.updateView = function () { };
    return GameView;
}(BaseView_1.BaseView));
exports.GameView = GameView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZpZXdzL0dhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFHbkQ7SUFBOEIsNEJBQXdCO0lBR3BELGtCQUFZLFdBQTJCO1FBQXZDLFlBQ0UsaUJBQU8sU0FHUjtRQUZDLEtBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQzlCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQUxELDZCQUFVLEdBQVYsY0FBb0IsQ0FBQztJQU12QixlQUFDO0FBQUQsQ0FSQSxBQVFDLENBUjZCLG1CQUFRLEdBUXJDO0FBUlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlVmlld1wiO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgQmFzZVZpZXc8R2FtZUNvbnRyb2xsZXI+IHtcbiAgY29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIHVwZGF0ZVZpZXcoKTogdm9pZCB7fVxuICBjb25zdHJ1Y3RvcihfY29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IF9jb250cm9sbGVyO1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/LandModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4aae1HmUclIp7q1ufPy9fOP', 'LandModel');
// scripts/models/LandModel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9MYW5kTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IStore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fbeaphx5lOVJ3zaPkaw8pP', 'IStore');
// interfaces/IStore.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJU3RvcmUge1xuICBidXlUb21hdG9TZWVkKCk6IHZvaWQ7XG4gIGJ1eUJsdWViZXJyeVNlZWQoKTogdm9pZDtcbiAgYnV5U3RyYXdiZXJyeVNlZWQoKTogdm9pZDtcbiAgYnV5TWlsa0NvdygpOiB2b2lkO1xuICBidXlDb3coKTogdm9pZDtcbiAgYnV5V29ya2VyKCk6IHZvaWQ7XG4gIHVwZ3JhZGVNYWNoaW5lKCk6IHZvaWQ7XG4gIGJ1eUxhbmQoKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/CattleModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5f6eaUI29PaKY1o83ETdu+', 'CattleModel');
// scripts/models/CattleModel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9DYXR0bGVNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/WorkerModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60531hve/FHOJBTOd9WeseG', 'WorkerModel');
// scripts/models/WorkerModel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9Xb3JrZXJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
    Storage.prototype.assignWorker = function (landUi) {
        landUi.enableWorker();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JhZ2UvU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSx1Q0FBK0Q7QUFDL0Qsa0RBQTZDO0FBRTdDO0lBQUE7SUFTQSxDQUFDO0lBSEMsK0JBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBVXZCO0lBQUE7SUFTQSxDQUFDO0lBSEMsa0NBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHNDQUFhO0FBVTFCO0lBQUE7SUFTQSxDQUFDO0lBSEMsbUNBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdDQUFjO0FBVTNCO0lBQUE7SUFTQSxDQUFDO0lBSEMsNEJBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsY0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMEJBQU87QUFVcEI7SUFBQTtJQVNBLENBQUM7SUFIQyx3QkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxrQkFBRztBQVdoQjtJQUFBO0lBT0EsQ0FBQztJQUhDLDZCQUFZLEdBQVo7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILGFBQUM7QUFBRCxDQVBBLEFBT0Ms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Z0JBQ3hELE1BQU07WUFDUixLQUFLLG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFZLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3pELE1BQU07WUFDUixLQUFLLG1CQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFZLENBQUMsWUFBWSxDQUFDO2dCQUNyRCxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUNILGNBQUM7QUFBRCxDQTdIQSxBQTZIQyxJQUFBO0FBN0hZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBJTGFuZCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lMYW5kXCI7XG5pbXBvcnQgeyBJTWFjaGluZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lNYWNoaW5lXCI7XG5pbXBvcnQgeyBJU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lTdG9yYWdlXCI7XG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVdvcmtlclwiO1xuaW1wb3J0IHsgSVlpZWxkIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVlpZWxkXCI7XG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JQXNzZXRcIjtcbmltcG9ydCBMYW5kVUksIHsgTGFuZFN0YXRlLCBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvU2VlZCBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCbHVlYmVycnlTZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN0cmF3YmVycnlTZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE1pbGtDb3cgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ293IGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9tYXRvIGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJsdWViZXJyeSBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdHJhd2JlcnJ5IGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE1pbGsgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmVlZiBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmtlciBpbXBsZW1lbnRzIElXb3JrZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICB3b3JraW5nSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbiAgV29yayhsYW5kVUk6IExhbmRVSSwgd29ya2VyQWN0aW9uOiBXb3JrZXJBY3Rpb24pIHtcbiAgICBzd2l0Y2ggKHdvcmtlckFjdGlvbikge1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uWWllbGRpbmc6XG4gICAgICAgIGxhbmRVSS5vbkNsaWNrWWllbGRCdG4oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tUb21hdG9TZWVkQnRuKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2VyIENMaWNrIHRvbWF0b3NlZWRidG5cIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uQmx1ZWJlcnJ5UGxhbnQ6XG4gICAgICAgIGxhbmRVSS5vbkNsaWNrQmx1ZWJlcnJ5U2VlZEJ0bigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgV29ya2VyQWN0aW9uLlN0cmF3YmVycnlQbGFudDpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tTdHJhd2JlcnJ5U2VlZEJ0bigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgV29ya2VyQWN0aW9uLk1pbGtjb3dMaXZlU3RvY2s6XG4gICAgICAgIGxhbmRVSS5vbkNsaWNrTWlsa0Nvd0J0bigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgV29ya2VyQWN0aW9uLkNvd0xpdmVTdG9jazpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hY2hpbmUgaW1wbGVtZW50cyBJTWFjaGluZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgc3VwcG9ydDogbnVtYmVyO1xuICB1cGdyYWRlUHJpY2U6IG51bWJlcjtcbiAgT3BlcmF0ZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIExhbmQgaW1wbGVtZW50cyBJTGFuZCB7XG4gIHdvcmtlckFjdGlvbjogV29ya2VyQWN0aW9uO1xuICBjcm9wOiBudW1iZXI7XG4gIGNvbnRhaW5ZaWVsZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBtaXNzaW9uTnVtYmVyOiBudW1iZXI7XG4gIGNvbnRhaW5JbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuXG4gIGlzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICB0aW1lOiBudW1iZXI7XG4gIGxhbmRTdGF0ZTogTGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICBwbGFudFR5cGU6IFBsYW50VHlwZSA9IG51bGw7XG4gIGNhdHRsZVR5cGU6IENhdHRsZVR5cGUgPSBudWxsO1xuXG4gIGN1cnJlbnRBc3NldDogYW55O1xuXG4gIHdvcmtpbmdUaW1lOiBudW1iZXI7XG5cbiAgaXNSZWFkeVRvV29yazogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2UgaW1wbGVtZW50cyBJU3RvcmFnZSB7XG4gIHdvcmtlcjogV29ya2VyO1xuXG4gIG1hY2hpbmU6IE1hY2hpbmU7XG4gIGxhbmQ6IExhbmQ7XG5cbiAgZ29sZDogbnVtYmVyO1xuICB0b21hdG86IFRvbWF0bztcbiAgYmx1ZWJlcnJ5OiBCbHVlYmVycnk7XG4gIHN0cmF3YmVycnk6IFN0cmF3YmVycnk7XG4gIG1pbGs6IE1pbGs7XG4gIGJlZWY6IEJlZWY7XG4gIHRvbWF0b1NlZWQ6IFRvbWF0b1NlZWQ7XG4gIGJsdWViZXJyeVNlZWQ6IEJsdWViZXJyeVNlZWQ7XG4gIHN0cmF3YmVycnlTZWVkOiBTdHJhd2JlcnJ5U2VlZDtcbiAgbWlsa0NvdzogTWlsa0NvdztcbiAgY293OiBDb3c7XG5cbiAgd29ya2luZ1dvcmtlck51bWJlcjogbnVtYmVyO1xuICBnZXRJZGxlV29ya2VyKCkge1xuICAgIHJldHVybiB0aGlzLndvcmtlci5udW1iZXIgLSB0aGlzLndvcmtpbmdXb3JrZXJOdW1iZXI7XG4gIH1cbiAgZ2V0V29ya2luZ1dvcmtlcigpIHtcbiAgICByZXR1cm4gdGhpcy53b3JraW5nV29ya2VyTnVtYmVyO1xuICB9XG5cbiAgcHVibGljIHNlbGxUb21hdG8oKTogdm9pZCB7XG4gICAgdGhpcy5hZGRHb2xkKHRoaXMudG9tYXRvLm51bWJlciAqIHRoaXMudG9tYXRvLnNlbGxQcmljZSk7XG4gICAgdGhpcy50b21hdG8ubnVtYmVyID0gMDtcbiAgfVxuICBwdWJsaWMgc2VsbEJsdWViZXJyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5ibHVlYmVycnkubnVtYmVyICogdGhpcy5ibHVlYmVycnkuc2VsbFByaWNlKTtcbiAgICB0aGlzLmJsdWViZXJyeS5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsU3RyYXdiZXJyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5zdHJhd2JlcnJ5Lm51bWJlciAqIHRoaXMuc3RyYXdiZXJyeS5zZWxsUHJpY2UpO1xuICAgIHRoaXMuc3RyYXdiZXJyeS5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsTWlsaygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5taWxrLm51bWJlciAqIHRoaXMubWlsay5zZWxsUHJpY2UpO1xuICAgIHRoaXMubWlsay5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsQmVlZigpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy5iZWVmLm51bWJlciAqIHRoaXMuYmVlZi5zZWxsUHJpY2UpO1xuICAgIHRoaXMuYmVlZi5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBhZGRHb2xkKF9nb2xkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmdvbGQgKz0gX2dvbGQ7XG4gIH1cbiAgZ2V0V29ya2VySWRsZSh3b3JraW5nV29ya2VyTnVtYmVyOiBudW1iZXIpIHtcbiAgICBsZXQgaWRsZVdvcmtlciA9IHRoaXMud29ya2VyLm51bWJlciAtIHdvcmtpbmdXb3JrZXJOdW1iZXI7XG4gICAgcmV0dXJuIGlkbGVXb3JrZXI7XG4gIH1cbiAgcHVibGljIGdldFBlcmZvcm1hY2VNYWNoaW5lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubWFjaGluZS5zdXBwb3J0O1xuICB9XG5cbiAgcHVibGljIGFkZFRvbWF0b1NlZWQoKTogdm9pZCB7XG4gICAgdGhpcy50b21hdG9TZWVkLm51bWJlciArPSAxO1xuICB9XG4gIGFkZEJsdWViZXJyeVNlZWQoKTogdm9pZCB7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkLm51bWJlciArPSAxO1xuICB9XG4gIGFkZFN0cmF3YmVycnlTZWVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkTWlsa0NvdygpOiB2b2lkIHtcbiAgICB0aGlzLm1pbGtDb3cubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkQ293KCk6IHZvaWQge1xuICAgIHRoaXMuY293Lm51bWJlciArPSAxO1xuICB9XG4gIGFkZFdvcmtlcigpOiB2b2lkIHtcbiAgICB0aGlzLndvcmtlci5udW1iZXIgKz0gMTtcbiAgfVxuICB1cGdyYWRlTWFjaGluZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxhbmQudGltZSAtPVxuICAgICAgKHRoaXMubGFuZC5jdXJyZW50QXNzZXQudGltZSAqIHRoaXMubWFjaGluZS5zdXBwb3J0KSAvIDEwMDtcbiAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3QgKj0gMTAwICsgdGhpcy5tYWNoaW5lLnN1cHBvcnQ7XG4gIH1cbiAgYWRkTGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmxhbmQubnVtYmVyICs9IDE7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9tYXRvKHRvbWF0b051bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b21hdG8ubnVtYmVyICs9IHRvbWF0b051bWJlcjtcbiAgfVxuICBhZGRCbHVlYmVycnkoYmx1ZWJlcnJ5TnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJsdWViZXJyeS5udW1iZXIgKz0gYmx1ZWJlcnJ5TnVtYmVyO1xuICB9XG4gIGFkZFN0cmF3YmVycnkoc3RyYXdiZXJyeU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdHJhd2JlcnJ5Lm51bWJlciArPSBzdHJhd2JlcnJ5TnVtYmVyO1xuICB9XG4gIGFkZE1pbGsobWlsa051bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5taWxrLm51bWJlciArPSBtaWxrTnVtYmVyO1xuICB9XG4gIGFkZEJlZWYoYmVlZk51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5iZWVmLm51bWJlciArPSBiZWVmTnVtYmVyO1xuICB9XG4gIGFzc2lnbldvcmtlcihsYW5kVWk6IExhbmRVSSkge1xuICAgIGxhbmRVaS5lbmFibGVXb3JrZXIoKTtcbiAgICBpZiAobGFuZFVpLmxhbmQuY29udGFpbllpZWxkID4gMCkge1xuICAgICAgbGFuZFVpLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLllpZWxkaW5nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGxhbmRVaS5sYW5kLmN1cnJlbnRBc3NldCkge1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkOlxuICAgICAgICBsYW5kVWkubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkOlxuICAgICAgICBsYW5kVWkubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uQmx1ZWJlcnJ5UGxhbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDpcbiAgICAgICAgbGFuZFVpLmxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLlN0cmF3YmVycnlQbGFudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3c6XG4gICAgICAgIGxhbmRVaS5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5NaWxrY293TGl2ZVN0b2NrO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuY293OlxuICAgICAgICBsYW5kVWkubGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uQ293TGl2ZVN0b2NrO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/PlantModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b85bY6DUBPZ6zLTXvxlv8i', 'PlantModel');
// scripts/models/PlantModel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9QbGFudE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/MachineModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29c3cVFevZDdqX9OZzp08yk', 'MachineModel');
// scripts/models/MachineModel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9NYWNoaW5lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/ConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af14aYJ+fhBKryVQNCQZr2w', 'ConfigManager');
// scripts/Manager/ConfigManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigManager = void 0;
var ConfigManager = /** @class */ (function () {
    function ConfigManager() {
        this.firstConfigs = new Map();
        this.yieldConfigs = new Map();
        this.cattleConfigs = new Map();
        this.plantConfigs = new Map();
        this.workerConfigs = new Map();
        this.machineConfigs = new Map();
        this.landConfigs = new Map();
    }
    Object.defineProperty(ConfigManager, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new ConfigManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    ConfigManager.prototype.initFirstConfigs = function (configs) {
        var _this = this;
        this.firstConfigs.clear();
        configs.forEach(function (config) {
            _this.firstConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getFirstConfigByName = function (name) {
        return this.firstConfigs.get(name);
    };
    ConfigManager.prototype.getAllTomatoConfigs = function () {
        return Array.from(this.firstConfigs.values());
    };
    ConfigManager.prototype.initYieldConfigs = function (configs) {
        var _this = this;
        this.yieldConfigs.clear();
        configs.forEach(function (config) {
            _this.yieldConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getYieldConfigByName = function (name) {
        return this.yieldConfigs.get(name);
    };
    ConfigManager.prototype.getAllYieldConfigs = function () {
        return Array.from(this.yieldConfigs.values());
    };
    ConfigManager.prototype.initCattleConfigs = function (configs) {
        var _this = this;
        this.cattleConfigs.clear();
        configs.forEach(function (config) {
            _this.cattleConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getCattleConfigByName = function (name) {
        return this.cattleConfigs.get(name);
    };
    ConfigManager.prototype.getAllCattleConfigs = function () {
        return Array.from(this.cattleConfigs.values());
    };
    ConfigManager.prototype.initPlantConfigs = function (configs) {
        var _this = this;
        this.plantConfigs.clear();
        configs.forEach(function (config) {
            _this.plantConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getPlantConfigByName = function (name) {
        return this.plantConfigs.get(name);
    };
    ConfigManager.prototype.getAllPlantConfigs = function () {
        return Array.from(this.plantConfigs.values());
    };
    ConfigManager.prototype.initWorkerConfigs = function (configs) {
        var _this = this;
        this.workerConfigs.clear();
        configs.forEach(function (config) {
            _this.workerConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getWorkerConfigByName = function (name) {
        return this.workerConfigs.get(name);
    };
    ConfigManager.prototype.getAllWorkerConfigs = function () {
        return Array.from(this.workerConfigs.values());
    };
    ConfigManager.prototype.initMachineConfigs = function (configs) {
        var _this = this;
        this.machineConfigs.clear();
        configs.forEach(function (config) {
            _this.machineConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getMachineConfigByName = function (name) {
        return this.machineConfigs.get(name);
    };
    ConfigManager.prototype.getAllMachineConfigs = function () {
        return Array.from(this.machineConfigs.values());
    };
    ConfigManager.prototype.initLandConfigs = function (configs) {
        var _this = this;
        this.landConfigs.clear();
        configs.forEach(function (config) {
            _this.landConfigs.set(config.name, config);
        });
    };
    ConfigManager.prototype.getLandConfigByName = function (name) {
        return this.landConfigs.get(name);
    };
    ConfigManager.prototype.getAllLandConfigs = function () {
        return Array.from(this.landConfigs.values());
    };
    return ConfigManager;
}());
exports.ConfigManager = ConfigManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvQ29uZmlnTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtJQUFBO1FBU1UsaUJBQVksR0FBNkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxpQkFBWSxHQUE2QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25ELGtCQUFhLEdBQThCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDckQsaUJBQVksR0FBNkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxrQkFBYSxHQUE4QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JELG1CQUFjLEdBQStCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdkQsZ0JBQVcsR0FBNEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQTBHM0QsQ0FBQztJQXZIQyxzQkFBa0IseUJBQVE7YUFBMUI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO2FBQ3RDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBVU0sd0NBQWdCLEdBQXZCLFVBQXdCLE9BQXNCO1FBQTlDLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNyQixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRDQUFvQixHQUEzQixVQUE0QixJQUFZO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLDJDQUFtQixHQUExQjtRQUNFLE9BQU8s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QUssRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3JCLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sOENBQXNCLEdBQTdCLFVBQThCLElBQVk7UUFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sNENBQW9CLEdBQTNCO1FBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sdUNBQWUsR0FBdEIsVUFBdUIsT0FBcUI7UUFBNUMsaUJBS0M7UUFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sMkNBQW1CLEdBQTFCLFVBQTJCLElBQVk7UUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0seUNBQWlCLEdBQXhCO1FBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXpIQSxBQXlIQyxJQUFBO0FBekhZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRmlyc3RDb25maWcsXG4gIFlpZWxkQ29uZmlnLFxuICBDYXR0bGVDb25maWcsXG4gIFBsYW50Q29uZmlnLFxuICBXb3JrZXJDb25maWcsXG4gIE1hY2hpbmVDb25maWcsXG4gIExhbmRDb25maWcsXG59IGZyb20gXCIuLi8uLi9zY3JpcHRzL2RhdGEvR2FtZUNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnTWFuYWdlciB7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ29uZmlnTWFuYWdlcjtcbiAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQ29uZmlnTWFuYWdlciB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ29uZmlnTWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIGZpcnN0Q29uZmlnczogTWFwPHN0cmluZywgRmlyc3RDb25maWc+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHlpZWxkQ29uZmlnczogTWFwPHN0cmluZywgWWllbGRDb25maWc+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGNhdHRsZUNvbmZpZ3M6IE1hcDxzdHJpbmcsIENhdHRsZUNvbmZpZz4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgcGxhbnRDb25maWdzOiBNYXA8c3RyaW5nLCBQbGFudENvbmZpZz4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgd29ya2VyQ29uZmlnczogTWFwPHN0cmluZywgV29ya2VyQ29uZmlnPiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBtYWNoaW5lQ29uZmlnczogTWFwPHN0cmluZywgTWFjaGluZUNvbmZpZz4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgbGFuZENvbmZpZ3M6IE1hcDxzdHJpbmcsIExhbmRDb25maWc+ID0gbmV3IE1hcCgpO1xuXG4gIHB1YmxpYyBpbml0Rmlyc3RDb25maWdzKGNvbmZpZ3M6IEZpcnN0Q29uZmlnW10pIHtcbiAgICB0aGlzLmZpcnN0Q29uZmlncy5jbGVhcigpO1xuICAgIGNvbmZpZ3MuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmZpcnN0Q29uZmlncy5zZXQoY29uZmlnLm5hbWUsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rmlyc3RDb25maWdCeU5hbWUobmFtZTogc3RyaW5nKTogRmlyc3RDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmZpcnN0Q29uZmlncy5nZXQobmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsVG9tYXRvQ29uZmlncygpOiBGaXJzdENvbmZpZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpcnN0Q29uZmlncy52YWx1ZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdFlpZWxkQ29uZmlncyhjb25maWdzOiBZaWVsZENvbmZpZ1tdKSB7XG4gICAgdGhpcy55aWVsZENvbmZpZ3MuY2xlYXIoKTtcbiAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy55aWVsZENvbmZpZ3Muc2V0KGNvbmZpZy5uYW1lLCBjb25maWcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFlpZWxkQ29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IFlpZWxkQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy55aWVsZENvbmZpZ3MuZ2V0KG5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbFlpZWxkQ29uZmlncygpOiBZaWVsZENvbmZpZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnlpZWxkQ29uZmlncy52YWx1ZXMoKSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdENhdHRsZUNvbmZpZ3MoY29uZmlnczogQ2F0dGxlQ29uZmlnW10pIHtcbiAgICB0aGlzLmNhdHRsZUNvbmZpZ3MuY2xlYXIoKTtcbiAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5jYXR0bGVDb25maWdzLnNldChjb25maWcubmFtZSwgY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXR0bGVDb25maWdCeU5hbWUobmFtZTogc3RyaW5nKTogQ2F0dGxlQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5jYXR0bGVDb25maWdzLmdldChuYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxDYXR0bGVDb25maWdzKCk6IENhdHRsZUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNhdHRsZUNvbmZpZ3MudmFsdWVzKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRQbGFudENvbmZpZ3MoY29uZmlnczogUGxhbnRDb25maWdbXSkge1xuICAgIHRoaXMucGxhbnRDb25maWdzLmNsZWFyKCk7XG4gICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMucGxhbnRDb25maWdzLnNldChjb25maWcubmFtZSwgY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQbGFudENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBQbGFudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucGxhbnRDb25maWdzLmdldChuYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxQbGFudENvbmZpZ3MoKTogUGxhbnRDb25maWdbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wbGFudENvbmZpZ3MudmFsdWVzKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRXb3JrZXJDb25maWdzKGNvbmZpZ3M6IFdvcmtlckNvbmZpZ1tdKSB7XG4gICAgdGhpcy53b3JrZXJDb25maWdzLmNsZWFyKCk7XG4gICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMud29ya2VyQ29uZmlncy5zZXQoY29uZmlnLm5hbWUsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0V29ya2VyQ29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IFdvcmtlckNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMud29ya2VyQ29uZmlncy5nZXQobmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWxsV29ya2VyQ29uZmlncygpOiBXb3JrZXJDb25maWdbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy53b3JrZXJDb25maWdzLnZhbHVlcygpKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0TWFjaGluZUNvbmZpZ3MoY29uZmlnczogTWFjaGluZUNvbmZpZ1tdKSB7XG4gICAgdGhpcy5tYWNoaW5lQ29uZmlncy5jbGVhcigpO1xuICAgIGNvbmZpZ3MuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLm1hY2hpbmVDb25maWdzLnNldChjb25maWcubmFtZSwgY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYWNoaW5lQ29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IE1hY2hpbmVDb25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm1hY2hpbmVDb25maWdzLmdldChuYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBbGxNYWNoaW5lQ29uZmlncygpOiBNYWNoaW5lQ29uZmlnW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubWFjaGluZUNvbmZpZ3MudmFsdWVzKCkpO1xuICB9XG5cbiAgcHVibGljIGluaXRMYW5kQ29uZmlncyhjb25maWdzOiBMYW5kQ29uZmlnW10pIHtcbiAgICB0aGlzLmxhbmRDb25maWdzLmNsZWFyKCk7XG4gICAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgIHRoaXMubGFuZENvbmZpZ3Muc2V0KGNvbmZpZy5uYW1lLCBjb25maWcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldExhbmRDb25maWdCeU5hbWUobmFtZTogc3RyaW5nKTogTGFuZENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubGFuZENvbmZpZ3MuZ2V0KG5hbWUpO1xuICB9XG5cbiAgcHVibGljIGdldEFsbExhbmRDb25maWdzKCk6IExhbmRDb25maWdbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5sYW5kQ29uZmlncy52YWx1ZXMoKSk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/interfaces/IStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd97cbimp1A5bPxZ5kddtUd', 'IStorage');
// interfaces/IStorage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCZWVmLFxuICBCbHVlYmVycnksXG4gIEJsdWViZXJyeVNlZWQsXG4gIENvdyxcbiAgTGFuZCxcbiAgTWFjaGluZSxcbiAgTWlsayxcbiAgTWlsa0NvdyxcbiAgU3RyYXdiZXJyeSxcbiAgU3RyYXdiZXJyeVNlZWQsXG4gIFRvbWF0byxcbiAgVG9tYXRvU2VlZCxcbiAgV29ya2VyLFxufSBmcm9tIFwiLi4vc2NyaXB0cy9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUkgZnJvbSBcIi4uL3NjcmlwdHMvdWkvTGFuZFVJXCI7XG5pbXBvcnQgeyBJTWFjaGluZSB9IGZyb20gXCIuL0lNYWNoaW5lXCI7XG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSBcIi4vSVdvcmtlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yYWdlIHtcbiAgZ29sZDogbnVtYmVyO1xuICB0b21hdG86IFRvbWF0bztcbiAgYmx1ZWJlcnJ5OiBCbHVlYmVycnk7XG4gIHN0cmF3YmVycnk6IFN0cmF3YmVycnk7XG4gIG1pbGs6IE1pbGs7XG4gIGJlZWY6IEJlZWY7XG5cbiAgdG9tYXRvU2VlZDogVG9tYXRvU2VlZDtcbiAgYmx1ZWJlcnJ5U2VlZDogQmx1ZWJlcnJ5U2VlZDtcbiAgc3RyYXdiZXJyeVNlZWQ6IFN0cmF3YmVycnlTZWVkO1xuICBtaWxrQ293OiBNaWxrQ293O1xuICBjb3c6IENvdztcblxuICB3b3JrZXI6IFdvcmtlcjtcbiAgbWFjaGluZTogTWFjaGluZTtcblxuICBsYW5kOiBMYW5kO1xuXG4gIHNlbGxUb21hdG8oKTogdm9pZDtcbiAgc2VsbEJsdWViZXJyeSgpOiB2b2lkO1xuICBzZWxsU3RyYXdiZXJyeSgpOiB2b2lkO1xuICBzZWxsTWlsaygpOiB2b2lkO1xuICBzZWxsQmVlZigpOiB2b2lkO1xuICBhZGRHb2xkKGdvbGQ6IG51bWJlcik6IHZvaWQ7XG4gIGdldFdvcmtlcklkbGUod29ya2luZ1dvcmtlcjogbnVtYmVyKTogbnVtYmVyO1xuICBnZXRQZXJmb3JtYWNlTWFjaGluZSgpOiBudW1iZXI7XG5cbiAgYWRkVG9tYXRvU2VlZCgpOiB2b2lkO1xuICBhZGRCbHVlYmVycnlTZWVkKCk6IHZvaWQ7XG4gIGFkZFN0cmF3YmVycnlTZWVkKCk6IHZvaWQ7XG4gIGFkZE1pbGtDb3coKTogdm9pZDtcbiAgYWRkQ293KCk6IHZvaWQ7XG4gIGFkZFdvcmtlcigpOiB2b2lkO1xuICB1cGdyYWRlTWFjaGluZSgpOiB2b2lkO1xuXG4gIGFzc2lnbldvcmtlcihsYW5kVWk6IExhbmRVSSk6IHZvaWQ7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/CSVLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '917b1sCBmpBmKrSaSzdZykt', 'CSVLoader');
// scripts/utils/CSVLoader.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVLoader = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CSVLoader = /** @class */ (function () {
    function CSVLoader() {
    }
    /**
     * Parse raw CSV string thành mảng object.
     */
    CSVLoader.parse = function (csvText) {
        var lines = csvText.trim().split("\n");
        var headers = lines[0].split(",");
        var records = [];
        var _loop_1 = function (i) {
            var line = lines[i].split(",");
            var record = {};
            headers.forEach(function (header, idx) {
                record[header.trim()] = line[idx].trim();
            });
            records.push(record);
        };
        for (var i = 1; i < lines.length; i++) {
            _loop_1(i);
        }
        return records;
    };
    /**
     * Tải CSV từ folder resources/configs/
     */
    CSVLoader.load = function (filename) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.resources.load("configs/" + filename, function (err, asset) {
                            if (err) {
                                console.error("Load CSV failed:", err);
                                reject(err);
                                return;
                            }
                            var data = _this.parse(asset.text);
                            resolve(data);
                        });
                    })];
            });
        });
    };
    return CSVLoader;
}());
exports.CSVLoader = CSVLoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0NTVkxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQU01QztJQUFBO0lBMkNBLENBQUM7SUExQ0M7O09BRUc7SUFDSSxlQUFLLEdBQVosVUFBYSxPQUFlO1FBQzFCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQyxJQUFNLE9BQU8sR0FBZ0IsRUFBRSxDQUFDO2dDQUV2QixDQUFDO1lBQ1IsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFNLE1BQU0sR0FBYyxFQUFFLENBQUM7WUFFN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxHQUFHO2dCQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFSdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUE1QixDQUFDO1NBU1Q7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDVSxjQUFJLEdBQWpCLFVBQWtCLFFBQWdCO3VDQUFHLE9BQU87OztnQkFDMUMsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDakMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2YsYUFBVyxRQUFVLEVBQ3JCLFVBQUMsR0FBaUIsRUFBRSxLQUFtQjs0QkFDckMsSUFBSSxHQUFHLEVBQUU7Z0NBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztnQ0FDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNaLE9BQU87NkJBQ1I7NEJBQ0QsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxDQUNGLENBQUM7b0JBQ0osQ0FBQyxDQUFDLEVBQUM7OztLQUNKO0lBQ0gsZ0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1NWUmVjb3JkIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ1NWTG9hZGVyIHtcbiAgLyoqXG4gICAqIFBhcnNlIHJhdyBDU1Ygc3RyaW5nIHRow6BuaCBt4bqjbmcgb2JqZWN0LlxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNzdlRleHQ6IHN0cmluZyk6IENTVlJlY29yZFtdIHtcbiAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQudHJpbSgpLnNwbGl0KFwiXFxuXCIpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBsaW5lc1swXS5zcGxpdChcIixcIik7XG5cbiAgICBjb25zdCByZWNvcmRzOiBDU1ZSZWNvcmRbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgIGNvbnN0IHJlY29yZDogQ1NWUmVjb3JkID0ge307XG5cbiAgICAgIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyLCBpZHgpID0+IHtcbiAgICAgICAgcmVjb3JkW2hlYWRlci50cmltKCldID0gbGluZVtpZHhdLnRyaW0oKTtcbiAgICAgIH0pO1xuXG4gICAgICByZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjb3JkcztcbiAgfVxuXG4gIC8qKlxuICAgKiBU4bqjaSBDU1YgdOG7qyBmb2xkZXIgcmVzb3VyY2VzL2NvbmZpZ3MvXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgbG9hZChmaWxlbmFtZTogc3RyaW5nKTogUHJvbWlzZTxDU1ZSZWNvcmRbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjYy5yZXNvdXJjZXMubG9hZChcbiAgICAgICAgYGNvbmZpZ3MvJHtmaWxlbmFtZX1gLFxuICAgICAgICAoZXJyOiBFcnJvciB8IG51bGwsIGFzc2V0OiBjYy5UZXh0QXNzZXQpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9hZCBDU1YgZmFpbGVkOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnBhcnNlKGFzc2V0LnRleHQpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
                        UIManager_1.default.instance.useWorkerForQueue2();
                    }
                    else {
                        this.land.landState = LandState.Empty;
                        this.disableWorker();
                        this.DisplayUI();
                        UIManager_1.default.instance.useWorkerForQueue2();
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
                this.land.isReadyToWork = true;
                break;
            case LandState.Harvest:
                this.updateUI();
                this.land.isReadyToWork = true;
                // UIManager.instance.useWorkerForQueue();
                break;
            case LandState.Plant:
                this.updateUI();
                this.land.isReadyToWork = false;
                break;
            case LandState.Cattle:
                this.updateUI();
                this.land.isReadyToWork = false;
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
            UIManager_1.default.instance.createLand();
            this.disableWorker();
            this.DisplayUI();
            UIManager_1.default.instance.useWorkerForQueue2();
        }
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
            UIManager_1.default.instance.createLand();
            this.disableWorker();
            this.DisplayUI();
            UIManager_1.default.instance.useWorkerForQueue2();
            //this.disableWorker();
            //UIManager.instance.useWorkerForQueue();
        }
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
            UIManager_1.default.instance.createLand();
            this.disableWorker();
            this.DisplayUI();
            UIManager_1.default.instance.useWorkerForQueue2();
            //this.disableWorker();
            //UIManager.instance.useWorkerForQueue();
        }
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
            UIManager_1.default.instance.createLand();
            this.disableWorker();
            this.DisplayUI();
            UIManager_1.default.instance.useWorkerForQueue2();
            //this.disableWorker();
            //UIManager.instance.useWorkerForQueue();
        }
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
        }
        this.disableWorker();
        this.DisplayUI();
        UIManager_1.default.instance.useWorkerForQueue2();
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
        this.land.currentAsset = null;
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
        this.workerSprite.node.active = false;
        UIManager_1.default.instance.gameController.model.storage.workingWorkerNumber -= 1;
        this.land.workingTime = 0;
        UIManager_1.default.instance.storageUI.updateUI();
        this.updateUI();
        this.workingIntervalLb.node.active = false;
        this.land.isReadyToWork = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBQWlFO0FBQ2pFLDhDQUFzRDtBQUVoRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDbkIsbURBQVMsQ0FBQTtJQUNULDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsNkNBQU0sQ0FBQTtJQUNOLCtDQUFPLENBQUE7QUFDVCxDQUFDLEVBTlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFNcEI7QUFDRCxJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsNkJBQWMsQ0FBQTtJQUNkLGtDQUFtQixDQUFBO0lBQ25CLDRCQUFhLENBQUE7SUFDYixrQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFLdEI7QUFDRCxJQUFZLFlBUVg7QUFSRCxXQUFZLFlBQVk7SUFDdEIseURBQVMsQ0FBQTtJQUNULHVEQUFRLENBQUE7SUFDUiw2REFBVyxDQUFBO0lBQ1gsbUVBQWMsQ0FBQTtJQUNkLHFFQUFlLENBQUE7SUFDZix1RUFBZ0IsQ0FBQTtJQUNoQiwrREFBWSxDQUFBO0FBQ2QsQ0FBQyxFQVJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBUXZCO0FBRUQ7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF1ZEM7UUFyZEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsc0JBQWdC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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNlO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2dCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDYTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDVztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNnQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNLO0lBL0JOLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1ZDFCO0lBQUQsYUFBQztDQXZkRCxBQXVkQyxDQXZkbUMsRUFBRSxDQUFDLFNBQVMsR0F1ZC9DO2tCQXZkb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFBsYW50VHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9QbGFudFR5cGVcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBDYXR0bGVDb25maWdzLCBQbGFudENvbmZpZ3MgfSBmcm9tIFwiLi4vZGF0YS9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgeyBMYW5kLCBUb21hdG9TZWVkIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZXhwb3J0IGVudW0gTGFuZFN0YXRlIHtcbiAgVW5kZWZpbmVkLFxuICBFbXB0eSxcbiAgUGxhbnQsXG4gIENhdHRsZSxcbiAgSGFydmVzdCxcbn1cbmV4cG9ydCBlbnVtIFllaWxkQWN0aW9uIHtcbiAgVW5kZWZpbmVkID0gXCJcIixcbiAgSGFydmVzdCA9IFwiSGFydmVzdFwiLFxuICBNaWxrID0gXCJNaWxrXCIsXG4gIEJ1dGNoZXIgPSBcIkJ1dGNoZXJcIixcbn1cbmV4cG9ydCBlbnVtIFdvcmtlckFjdGlvbiB7XG4gIFVuZGVmaW5lZCxcbiAgWWllbGRpbmcsXG4gIFRvbWF0b1BsYW50LFxuICBCbHVlYmVycnlQbGFudCxcbiAgU3RyYXdiZXJyeVBsYW50LFxuICBNaWxrY293TGl2ZVN0b2NrLFxuICBDb3dMaXZlU3RvY2ssXG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgdG9tYXRvU2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYmx1ZWJlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc3RyYXdiZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIG1pbGtDb3dCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgeWllbGRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB0aW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB5aWVsZENvbnRhaW5MYjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGNyb3BMYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgeWllbGRCdXR0b25MYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIHdvcmtlclNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB3b3JraW5nSW50ZXJ2YWxMYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICBsYW5kOiBMYW5kO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubGFuZCA9IG5ldyBMYW5kKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKHRoaXMubGFuZCAhPSBudWxsKSB7XG4gICAgICBpZiAoIXRoaXMubGFuZC5pc0VtcHR5KSB7XG4gICAgICAgIGlmICh0aGlzLmxhbmQudGltZSA8IDAuNSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubGFuZC5jb250YWluWWllbGQgPCB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3QgJiZcbiAgICAgICAgICAgIHRoaXMubGFuZC5jcm9wID4gMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0KTtcblxuICAgICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZCArPSAxO1xuICAgICAgICAgICAgdGhpcy5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5ZaWVsZGluZztcbiAgICAgICAgICAgIHRoaXMubGFuZC5jcm9wIC09IDE7XG4gICAgICAgICAgICB0aGlzLmxhbmQudGltZSA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhbmQuY3VycmVudEFzc2V0LmhhcnZlc3RJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLkhhcnZlc3Q7XG4gICAgICAgICAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICAgICAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhbmQudGltZSA+IDApIHtcbiAgICAgICAgICB0aGlzLmxhbmQudGltZSAtPSBkdDtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhbmQud29ya2luZ1RpbWUgPiAwKSB7XG4gICAgICAgIHRoaXMubGFuZC53b3JraW5nVGltZSAtPSBkdDtcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICAvL3RoaXMubGFuZC5pc1JlYWR5VG9Xb3JrID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGFuZC53b3JraW5nVGltZSA8IDApIHtcbiAgICAgICAgLy90aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci5Xb3JrKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgdGhpcy5sYW5kLndvcmtlckFjdGlvblxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVibGljIERpc3BsYXlVSSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMubGFuZC5sYW5kU3RhdGUpIHtcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkVtcHR5OlxuICAgICAgICB0aGlzLnJlc2V0VUkoKTtcbiAgICAgICAgdGhpcy5zZXR1cFVJKCk7XG4gICAgICAgIHRoaXMubGFuZC5pc1JlYWR5VG9Xb3JrID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkhhcnZlc3Q6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgdGhpcy5sYW5kLmlzUmVhZHlUb1dvcmsgPSB0cnVlO1xuICAgICAgICAvLyBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5QbGFudDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkNhdHRsZTpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICB0aGlzLmxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0dXBVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrVG9tYXRvU2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrU3RyYXdiZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrTWlsa0Nvd0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIC8vdGhpcy5oYXJ2ZXN0QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnlpZWxkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tZaWVsZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coXCJzZXR1cCBMYW5kVUkgRG9uZSEhISFcIik7XG4gIH1cbiAgcHVibGljIHVwZGF0ZVVJKCkge1xuICAgIHRoaXMuc2V0VGltZUxiKHRoaXMubGFuZC50aW1lKTtcbiAgICB0aGlzLnNldENyb3BMYih0aGlzLmxhbmQuY3JvcCk7XG4gICAgdGhpcy5zZXRXb3JraW5nSW50ZXJ2YWxMYih0aGlzLmxhbmQud29ya2luZ1RpbWUpO1xuICAgIHRoaXMuc2V0WWllbGRDb250YWluTGIodGhpcy5sYW5kLmNvbnRhaW5ZaWVsZCk7XG4gICAgaWYgKHRoaXMubGFuZC50aW1lID4gMCkge1xuICAgICAgaWYgKHRoaXMubGFuZC5sYW5kU3RhdGUgPT0gTGFuZFN0YXRlLlBsYW50KSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5sYW5kLnBsYW50VHlwZSkge1xuICAgICAgICAgIGNhc2UgUGxhbnRUeXBlLnRvbWF0b1NlZWQ6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy50b21hdG9zZWVkLm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBQbGFudFR5cGUuYmx1ZWJlcnJ5U2VlZDpcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXROYW1lTGIoUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFBsYW50VHlwZS5zdHJhd2JlcnJ5U2VlZDpcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmxhbmQubGFuZFN0YXRlID09IExhbmRTdGF0ZS5DYXR0bGUpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmxhbmQuY2F0dGxlVHlwZSkge1xuICAgICAgICAgIGNhc2UgQ2F0dGxlVHlwZS5Db3c6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShDYXR0bGVDb25maWdzLmNvdy5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKENhdHRsZUNvbmZpZ3MuY293Lm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBDYXR0bGVUeXBlLk1pbGtjb3c6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLm5hbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnlpZWxkQ29udGFpbkxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3JvcExiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgIH1cblxuICAgIHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUgPVxuICAgICAgKHRoaXMubGFuZC5wbGFudFR5cGUgIT0gbnVsbCB8fCB0aGlzLmxhbmQuY2F0dGxlVHlwZSAhPSBudWxsKSAmJlxuICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZCA+IDA7XG4gICAgaWYgKHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5sYW5kLmN1cnJlbnRBc3NldCkge1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQ6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uSGFydmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uSGFydmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293OlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5NaWxrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmNvdzpcbiAgICAgICAgICB0aGlzLnlpZWxkQnV0dG9uTGIuc3RyaW5nID0gWWVpbGRBY3Rpb24uQnV0Y2hlcjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9tYXRvU2VlZEJ0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPiAwKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5sYW5kLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMubGFuZC5wbGFudFR5cGUgPSBQbGFudFR5cGUudG9tYXRvU2VlZDtcbiAgICAgIHRoaXMubGFuZC50aW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICAgIHRoaXMubGFuZC5jcm9wID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgLT0gMTtcbiAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuUGxhbnQ7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuY3JlYXRlTGFuZCgpO1xuICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMigpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQmx1ZWJlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciA+IDBcbiAgICApIHtcbiAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICB0aGlzLmxhbmQudGltZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgICAgdGhpcy5sYW5kLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMubGFuZC5wbGFudFR5cGUgPSBQbGFudFR5cGUuYmx1ZWJlcnJ5U2VlZDtcbiAgICAgIHRoaXMubGFuZC5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkO1xuICAgICAgdGhpcy5sYW5kLmNyb3AgPSB0aGlzLmxhbmQuY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5jcmVhdGVMYW5kKCk7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUyKCk7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuXG4gICAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrU3RyYXdiZXJyeVNlZWRCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID4gMFxuICAgICkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMubGFuZC50aW1lID0gUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgICAgdGhpcy5sYW5kLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMubGFuZC5wbGFudFR5cGUgPSBQbGFudFR5cGUuc3RyYXdiZXJyeVNlZWQ7XG4gICAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ7XG4gICAgICB0aGlzLmxhbmQuY3JvcCA9IHRoaXMubGFuZC5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlciAtPSAxO1xuICAgICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5jcmVhdGVMYW5kKCk7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUyKCk7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuXG4gICAgICAvL1VJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrTWlsa0Nvd0J0bigpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPiAwKSB7XG4gICAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5sYW5kLnRpbWUgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYW5kLmNhdHRsZVR5cGUgPSBDYXR0bGVUeXBlLk1pbGtjb3c7XG4gICAgICB0aGlzLmxhbmQuY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdztcbiAgICAgIHRoaXMubGFuZC5jcm9wID0gdGhpcy5sYW5kLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgLT0gMTtcbiAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuQ2F0dGxlO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmNyZWF0ZUxhbmQoKTtcbiAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgdGhpcy5EaXNwbGF5VUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTIoKTtcbiAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG5cbiAgICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tZaWVsZEJ0bigpIHtcbiAgICAvL3RoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHN3aXRjaCAodGhpcy5sYW5kLmN1cnJlbnRBc3NldCkge1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRUb21hdG8oXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCbHVlYmVycnkoXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkU3RyYXdiZXJyeShcbiAgICAgICAgICB0aGlzLmxhbmQuY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3c6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZE1pbGsoXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5jb3c6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZEJlZWYoXG4gICAgICAgICAgdGhpcy5sYW5kLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMubGFuZC5jb250YWluWWllbGQgPSAwO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy5sYW5kLmxhbmRTdGF0ZSA9IHRoaXMubGFuZC5wbGFudFR5cGVcbiAgICAgID8gTGFuZFN0YXRlLlBsYW50XG4gICAgICA6IExhbmRTdGF0ZS5DYXR0bGU7XG4gICAgaWYgKHRoaXMubGFuZC5jcm9wID09IDApIHtcbiAgICAgIHRoaXMubGFuZC5sYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuRGlzcGxheVVJKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMigpO1xuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgLy9VSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUoKTtcbiAgfVxuICBvbkNsaWNrTWlsa0J0bigpIHtcbiAgICB0aGlzLnJlc2V0VUkoKTtcbiAgfVxuICBzZXROYW1lTGIobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gbmFtZTtcbiAgfVxuICBzZXRZaWVsZENvbnRhaW5MYih5aWVsZENvbnRhaW46IG51bWJlcikge1xuICAgIHRoaXMueWllbGRDb250YWluTGIuc3RyaW5nID0geWllbGRDb250YWluLnRvU3RyaW5nKCk7XG4gIH1cbiAgc2V0Q3JvcExiKGNyb3A6IG51bWJlcikge1xuICAgIHRoaXMuY3JvcExiLnN0cmluZyA9IGNyb3AudG9TdHJpbmcoKTtcbiAgfVxuICBzZXRXb3JraW5nSW50ZXJ2YWxMYih3b3JraW5nVGltZTogbnVtYmVyKSB7XG4gICAgaWYgKHdvcmtpbmdUaW1lIDwgMCkge1xuICAgICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5zdHJpbmcgPSBcIjBzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBfd29ya2luZ1RpbWUgPSBwYXJzZUludCh3b3JraW5nVGltZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIuc3RyaW5nID0gX3dvcmtpbmdUaW1lLnRvU3RyaW5nKCkgKyBcInNcIjtcbiAgICB9XG4gIH1cbiAgc2V0VGltZUxiKHRpbWU6IG51bWJlcikge1xuICAgIGlmICh0aW1lIDwgMCkge1xuICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCIwc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgX3RpbWUgPSBwYXJzZUludCh0aW1lLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gX3RpbWUudG9TdHJpbmcoKSArIFwic1wiO1xuICAgIH1cbiAgfVxuXG4gIHNldFdvcmtlclNwcml0ZSgpIHtcbiAgICB0aGlzLmxvYWRJbWFnZShcIk1pZGRsZVwiLCB0aGlzLndvcmtlclNwcml0ZSk7XG4gIH1cbiAgc2V0U3ByaXRlKGltYWdlTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoaW1hZ2VOYW1lLCB0aGlzLlNwcml0ZSk7XG4gIH1cblxuICBsb2FkSW1hZ2UgPSAoaW1hZ2VOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGBpbWFnZXMvJHtpbWFnZU5hbWV9YDtcbiAgICBpZiAoaW1hZ2VOYW1lID09IFwiXCIpIHtcbiAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYy5lcnJvcihgS2jDtG5nIHRo4buDIGxvYWQg4bqjbmg6ICR7cGF0aH1gLCBlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9KTtcbiAgfTtcbiAgcmVzZXRVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnlpZWxkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLm5hbWVMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMueWllbGRDb250YWluTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jcm9wTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLmNyb3BMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudGltZUxiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy50aW1lTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLndvcmtlclNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMubGFuZC5wbGFudFR5cGUgPSBudWxsO1xuICAgIHRoaXMubGFuZC5jYXR0bGVUeXBlID0gbnVsbDtcblxuICAgIHRoaXMubGFuZC50aW1lID0gMDtcbiAgICB0aGlzLmxhbmQuaXNFbXB0eSA9IHRydWU7XG5cbiAgICB0aGlzLmxhbmQubGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuXG4gICAgdGhpcy5sYW5kLmN1cnJlbnRBc3NldCA9IG51bGw7XG4gICAgdGhpcy5sYW5kLndvcmtlckFjdGlvbiA9IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgfVxuXG4gIGVuYWJsZUxhbmQoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID4gMDtcbiAgICB0aGlzLm1pbGtDb3dCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID4gMDtcbiAgfVxuXG4gIGVuYWJsZVdvcmtlcigpIHtcbiAgICB0aGlzLnNldFdvcmtlclNwcml0ZSgpO1xuICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy53b3JraW5nSW50ZXJ2YWxMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlV29ya2VyKCkge1xuICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciAtPSAxO1xuICAgIHRoaXMubGFuZC53b3JraW5nVGltZSA9IDA7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5sYW5kLmlzUmVhZHlUb1dvcmsgPSBmYWxzZTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/models/YieldModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb2f9gDSm9OqaZ9A2msyREs', 'YieldModel');
// scripts/models/YieldModel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9ZaWVsZE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/StoreUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66f8f5D91JEoIIs+D0vM++r', 'StoreUI');
// scripts/ui/StoreUI.ts

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
var UIManager_1 = require("../Manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StoreUI = /** @class */ (function (_super) {
    __extends(StoreUI, _super);
    function StoreUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buyTomatoSeedBtn = null;
        _this.buyBlueberrySeedBtn = null;
        _this.buyStrawberrySeedBtn = null;
        _this.buyMilkCowBtn = null;
        _this.buyWorkerBtn = null;
        _this.upgradeMachineBtn = null;
        _this.buyLandBtn = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StoreUI.prototype.start = function () { };
    // update (dt) {}
    StoreUI.prototype.setupUI = function () {
        this.buyTomatoSeedBtn.node.active = true;
        this.buyTomatoSeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyTomatoSeedBtn, this);
        this.buyBlueberrySeedBtn.node.active = true;
        this.buyBlueberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyBlueberrySeedBtn, this);
        this.buyStrawberrySeedBtn.node.active = true;
        this.buyStrawberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyStrawberrySeedBtn, this);
        this.buyMilkCowBtn.node.active = true;
        this.buyMilkCowBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyMilkcowBtn, this);
        this.buyWorkerBtn.node.active = true;
        this.buyWorkerBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyWorkerBtn, this);
        this.upgradeMachineBtn.node.active = true;
        this.upgradeMachineBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickUpgradeMachineBtn, this);
        this.buyLandBtn.node.active = true;
        this.buyLandBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBuyLandBtn, this);
        console.log("setup UI Done!!!!");
    };
    StoreUI.prototype.updateUI = function () { };
    StoreUI.prototype.resetUI = function () { };
    StoreUI.prototype.onClickBuyTomatoSeedBtn = function () {
        console.log("onClickBuyTomatoSeedBtn!!!!");
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.tomatoSeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyTomatoSeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.createLand();
        }
    };
    StoreUI.prototype.onClickBuyBlueberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyBlueberrySeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.createLand();
        }
    };
    StoreUI.prototype.onClickBuyStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyStrawberrySeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.createLand();
        }
    };
    StoreUI.prototype.onClickBuyMilkcowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.milkCow.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyMilkCow();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.createLand();
        }
    };
    StoreUI.prototype.onClickBuyWorkerBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.worker.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyWorker();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StoreUI.prototype.onClickUpgradeMachineBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.machine.upgradePrice) {
            UIManager_1.default.instance.gameController.model.store.upgradeMachine();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    StoreUI.prototype.onClickBuyLandBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.land.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyLand();
            UIManager_1.default.instance.storageUI.updateUI();
        }
    };
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyTomatoSeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyBlueberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyStrawberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyMilkCowBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyWorkerBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "upgradeMachineBtn", void 0);
    __decorate([
        property(cc.Button)
    ], StoreUI.prototype, "buyLandBtn", void 0);
    StoreUI = __decorate([
        ccclass
    ], StoreUI);
    return StoreUI;
}(cc.Component));
exports.default = StoreUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1N0b3JlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsa0RBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMklDO1FBeklDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFdEMsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBRXZDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFjLElBQUksQ0FBQzs7SUE2SC9CLENBQUM7SUEzSEMsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLGlCQUFpQjtJQUVWLHlCQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQzNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0IsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDOUIsRUFBRSxDQUFDLElBQUks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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNnQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNTO0lBZFYsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTJJM0I7SUFBRCxjQUFDO0NBM0lELEFBMklDLENBM0lvQyxFQUFFLENBQUMsU0FBUyxHQTJJaEQ7a0JBM0lvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5VG9tYXRvU2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5Qmx1ZWJlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5U3RyYXdiZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJ1eU1pbGtDb3dCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJ1eVdvcmtlckJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgdXBncmFkZU1hY2hpbmVCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIGJ1eUxhbmRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgcHVibGljIHNldHVwVUkoKSB7XG4gICAgdGhpcy5idXlUb21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1eVRvbWF0b1NlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eVRvbWF0b1NlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJ1eUJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5Qmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5Qmx1ZWJlcnJ5U2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYnV5U3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5U3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eVN0cmF3YmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5idXlNaWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1eU1pbGtDb3dCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eU1pbGtjb3dCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJ1eVdvcmtlckJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5idXlXb3JrZXJCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eVdvcmtlckJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMudXBncmFkZU1hY2hpbmVCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudXBncmFkZU1hY2hpbmVCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1VwZ3JhZGVNYWNoaW5lQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5idXlMYW5kQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1eUxhbmRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja0J1eUxhbmRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcInNldHVwIFVJIERvbmUhISEhXCIpO1xuICB9XG4gIHVwZGF0ZVVJKCkge31cbiAgcmVzZXRVSSgpIHt9XG4gIG9uQ2xpY2tCdXlUb21hdG9TZWVkQnRuKCkge1xuICAgIGNvbnNvbGUubG9nKFwib25DbGlja0J1eVRvbWF0b1NlZWRCdG4hISEhXCIpO1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQuYnV5UHJpY2VcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yZS5idXlUb21hdG9TZWVkKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuY3JlYXRlTGFuZCgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5Qmx1ZWJlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmUuYnV5Qmx1ZWJlcnJ5U2VlZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmNyZWF0ZUxhbmQoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja0J1eVN0cmF3YmVycnlTZWVkQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLmJ1eVByaWNlXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmUuYnV5U3RyYXdiZXJyeVNlZWQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5jcmVhdGVMYW5kKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tCdXlNaWxrY293QnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cuYnV5UHJpY2VcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yZS5idXlNaWxrQ293KCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuY3JlYXRlTGFuZCgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5V29ya2VyQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrVXBncmFkZU1hY2hpbmVCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ29sZCA+PVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2VcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yZS51cGdyYWRlTWFjaGluZSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5TGFuZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLmJ1eVByaWNlXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmUuYnV5TGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd7dfM9Pr1MlYFc6gEuLOqN', 'UIManager');
// scripts/Manager/UIManager.ts

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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController_1 = require("../controllers/GameController");
var LandUI_1 = require("../ui/LandUI");
var StorageUI_1 = require("../ui/StorageUI");
var StoreUI_1 = require("../ui/StoreUI");
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.landUIArray = [];
        _this.storeUI = null;
        _this.storageUI = null;
        _this.time = 0;
        return _this;
    }
    UIManager_1 = UIManager;
    // LIFE-CYCLE CALLBACKS:
    UIManager.prototype.onLoad = function () {
        if (UIManager_1.instance == null) {
            UIManager_1.instance = this;
        }
        this.gameController = new GameController_1.GameController();
    };
    UIManager.prototype.start = function () {
        this.setupUI();
    };
    UIManager.prototype.update = function (dt) {
        if (this.time > 0) {
            this.time -= dt;
        }
        else if (this.time < 0) {
            this.useWorkerForQueue2();
            this.time = 0;
        }
        else {
        }
    };
    UIManager.prototype.setupUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clones, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gameController.model.setData()];
                    case 1:
                        _a.sent();
                        clones = Array.from({ length: 5 }, function () { return (__assign({}, _this.gameController.model.storage.land)); });
                        for (i = 0; i < this.gameController.model.storage.land.number; i++) {
                            this.landUIArray[i].land = clones[i];
                            this.landUIArray[i].enabled = true;
                            this.landUIArray[i].DisplayUI();
                            //this.landUIArray[i].resetUI();
                            // this.landUIArray[i].disableWorker();
                            // this.landUIArray[i].setupUI();
                        }
                        this.gameController.model.queueLandArray.push(this.landUIArray[0]);
                        this.useWorkerForQueue2();
                        this.storageUI.setupUI();
                        this.storageUI.updateUI();
                        this.storeUI.setupUI();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.useWorkerForQueue = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber) > 0) {
                if (this.gameController.model.queueLandArray.length > 0) {
                    this.useWorker(this.gameController.model.queueLandArray[0]);
                    this.gameController.model.queueLandArray.splice(0, 1);
                }
                else {
                    if (this.landUIArray[i].land.isReadyToWork) {
                        this.useWorker(this.landUIArray[i]);
                    }
                }
            }
            else {
                if (this.landUIArray[i].land.isReadyToWork) {
                    this.gameController.model.queueLandArray.push(this.landUIArray[i]);
                }
            }
        }
    };
    UIManager.prototype.useWorkerForQueue2 = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber) > 0) {
                if (this.landUIArray[i].land.isReadyToWork) {
                    this.useWorker(this.landUIArray[i]);
                }
            }
            else {
                this.time = this.checkMinWorkingTime();
            }
        }
    };
    UIManager.prototype.checkMinWorkingTime = function () {
        var min = this.landUIArray[0].land.workingTime;
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.landUIArray[i].land.workingTime < min) {
                min = this.landUIArray[i].land.workingTime;
            }
        }
        return min;
    };
    UIManager.prototype.useWorker = function (landUi) {
        this.gameController.model.storage.assignWorker(landUi);
        this.gameController.model.storage.workingWorkerNumber += 1;
        landUi.land.workingTime =
            this.gameController.model.storage.worker.workingInterval * 10;
        landUi.land.isReadyToWork = false;
    };
    UIManager.prototype.createLand = function () {
        for (var i = 0; i < this.gameController.model.storage.land.number; i++) {
            this.landUIArray[i].enableLand();
        }
    };
    var UIManager_1;
    __decorate([
        property(LandUI_1.default)
    ], UIManager.prototype, "landUIArray", void 0);
    __decorate([
        property(StoreUI_1.default)
    ], UIManager.prototype, "storeUI", void 0);
    __decorate([
        property(StorageUI_1.default)
    ], UIManager.prototype, "storageUI", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsZ0VBQStEO0FBRS9ELHVDQUFrQztBQUNsQyw2Q0FBd0M7QUFDeEMseUNBQW9DO0FBR3BDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBa0hDO1FBakhtQixpQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFJakQsVUFBSSxHQUFXLENBQUMsQ0FBQzs7SUEyR25CLENBQUM7a0JBbEhvQixTQUFTO0lBUzVCLHdCQUF3QjtJQUV4QiwwQkFBTSxHQUFOO1FBQ0UsSUFBSSxXQUFTLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM5QixXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNqQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxD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QUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ0QsOEJBQVUsR0FBVjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7SUFoSGlCO1FBQWpCLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO2tEQUE0QjtJQUMxQjtRQUFsQixRQUFRLENBQUMsaUJBQU8sQ0FBQzs4Q0FBeUI7SUFDdEI7UUFBcEIsUUFBUSxDQUFDLG1CQUFTLENBQUM7Z0RBQTZCO0lBSDlCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrSDdCO0lBQUQsZ0JBQUM7Q0FsSEQsQUFrSEMsQ0FsSHNDLEVBQUUsQ0FBQyxTQUFTLEdBa0hsRDtrQkFsSG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBMYW5kIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgU3RvcmFnZVVJIGZyb20gXCIuLi91aS9TdG9yYWdlVUlcIjtcbmltcG9ydCBTdG9yZVVJIGZyb20gXCIuLi91aS9TdG9yZVVJXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoTGFuZFVJKSBsYW5kVUlBcnJheTogTGFuZFVJW10gPSBbXTtcbiAgQHByb3BlcnR5KFN0b3JlVUkpIHN0b3JlVUk6IFN0b3JlVUkgPSBudWxsO1xuICBAcHJvcGVydHkoU3RvcmFnZVVJKSBzdG9yYWdlVUk6IFN0b3JhZ2VVSSA9IG51bGw7XG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFVJTWFuYWdlcjtcbiAgcHVibGljIGdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlcjtcblxuICB0aW1lOiBudW1iZXIgPSAwO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5zZXR1cFVJKCk7XG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWUgPiAwKSB7XG4gICAgICB0aGlzLnRpbWUgLT0gZHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPCAwKSB7XG4gICAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMigpO1xuICAgICAgdGhpcy50aW1lID0gMDtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfVxuICBhc3luYyBzZXR1cFVJKCkge1xuICAgIGF3YWl0IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc2V0RGF0YSgpO1xuICAgIGNvbnN0IGNsb25lcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCkgPT4gKHtcbiAgICAgIC4uLnRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLFxuICAgIH0pKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyOyBpKyspIHtcbiAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZCA9IGNsb25lc1tpXTtcbiAgICAgIHRoaXMubGFuZFVJQXJyYXlbaV0uZW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLkRpc3BsYXlVSSgpO1xuICAgICAgLy90aGlzLmxhbmRVSUFycmF5W2ldLnJlc2V0VUkoKTtcbiAgICAgIC8vIHRoaXMubGFuZFVJQXJyYXlbaV0uZGlzYWJsZVdvcmtlcigpO1xuICAgICAgLy8gdGhpcy5sYW5kVUlBcnJheVtpXS5zZXR1cFVJKCk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkucHVzaCh0aGlzLmxhbmRVSUFycmF5WzBdKTtcbiAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMigpO1xuICAgIHRoaXMuc3RvcmFnZVVJLnNldHVwVUkoKTtcbiAgICB0aGlzLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuXG4gICAgdGhpcy5zdG9yZVVJLnNldHVwVUkoKTtcbiAgfVxuICB1c2VXb3JrZXJGb3JRdWV1ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdldFdvcmtlcklkbGUoXG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICAgICAgKSA+IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy51c2VXb3JrZXIodGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheVswXSk7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5xdWV1ZUxhbmRBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMubGFuZFVJQXJyYXlbaV0ubGFuZC5pc1JlYWR5VG9Xb3JrKSB7XG4gICAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQuaXNSZWFkeVRvV29yaykge1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVMYW5kQXJyYXkucHVzaCh0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZVdvcmtlckZvclF1ZXVlMigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdldFdvcmtlcklkbGUoXG4gICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICAgICAgKSA+IDBcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLmlzUmVhZHlUb1dvcmspIHtcbiAgICAgICAgICB0aGlzLnVzZVdvcmtlcih0aGlzLmxhbmRVSUFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5jaGVja01pbldvcmtpbmdUaW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNaW5Xb3JraW5nVGltZSgpOiBudW1iZXIge1xuICAgIGxldCBtaW46IG51bWJlciA9IHRoaXMubGFuZFVJQXJyYXlbMF0ubGFuZC53b3JraW5nVGltZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmxhbmRVSUFycmF5W2ldLmxhbmQud29ya2luZ1RpbWUgPCBtaW4pIHtcbiAgICAgICAgbWluID0gdGhpcy5sYW5kVUlBcnJheVtpXS5sYW5kLndvcmtpbmdUaW1lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgdXNlV29ya2VyKGxhbmRVaTogTGFuZFVJKSB7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFzc2lnbldvcmtlcihsYW5kVWkpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyICs9IDE7XG4gICAgbGFuZFVpLmxhbmQud29ya2luZ1RpbWUgPVxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci53b3JraW5nSW50ZXJ2YWwgKiAxMDtcbiAgICBsYW5kVWkubGFuZC5pc1JlYWR5VG9Xb3JrID0gZmFsc2U7XG4gIH1cbiAgY3JlYXRlTGFuZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5sYW5kLm51bWJlcjsgaSsrKSB7XG4gICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLmVuYWJsZUxhbmQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
