
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
require('./assets/scripts/Manager/GameSaveManager');
require('./assets/scripts/Manager/UIManager');
require('./assets/scripts/PanelUI');
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
                    var __filename = 'preview-scripts/assets/scripts/Manager/GameSaveManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9f6d6WNCpCqak3kBDEPGY1', 'GameSaveManager');
// scripts/Manager/GameSaveManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSaveManager = exports.SaveLand8Data = exports.SaveLand7Data = exports.SaveLand6Data = exports.SaveLand5Data = exports.SaveLand4Data = exports.SaveLand3Data = exports.SaveLand2Data = exports.SaveLand1Data = exports.SaveLand0Data = exports.SaveQueueData = exports.SaveData = void 0;
var SaveData = /** @class */ (function () {
    function SaveData() {
    }
    return SaveData;
}());
exports.SaveData = SaveData;
var SaveQueueData = /** @class */ (function () {
    function SaveQueueData() {
    }
    return SaveQueueData;
}());
exports.SaveQueueData = SaveQueueData;
var SaveLand0Data = /** @class */ (function () {
    function SaveLand0Data() {
    }
    return SaveLand0Data;
}());
exports.SaveLand0Data = SaveLand0Data;
var SaveLand1Data = /** @class */ (function () {
    function SaveLand1Data() {
    }
    return SaveLand1Data;
}());
exports.SaveLand1Data = SaveLand1Data;
var SaveLand2Data = /** @class */ (function () {
    function SaveLand2Data() {
    }
    return SaveLand2Data;
}());
exports.SaveLand2Data = SaveLand2Data;
var SaveLand3Data = /** @class */ (function () {
    function SaveLand3Data() {
    }
    return SaveLand3Data;
}());
exports.SaveLand3Data = SaveLand3Data;
var SaveLand4Data = /** @class */ (function () {
    function SaveLand4Data() {
    }
    return SaveLand4Data;
}());
exports.SaveLand4Data = SaveLand4Data;
var SaveLand5Data = /** @class */ (function () {
    function SaveLand5Data() {
    }
    return SaveLand5Data;
}());
exports.SaveLand5Data = SaveLand5Data;
var SaveLand6Data = /** @class */ (function () {
    function SaveLand6Data() {
    }
    return SaveLand6Data;
}());
exports.SaveLand6Data = SaveLand6Data;
var SaveLand7Data = /** @class */ (function () {
    function SaveLand7Data() {
    }
    return SaveLand7Data;
}());
exports.SaveLand7Data = SaveLand7Data;
var SaveLand8Data = /** @class */ (function () {
    function SaveLand8Data() {
    }
    return SaveLand8Data;
}());
exports.SaveLand8Data = SaveLand8Data;
var GameSaveManager = /** @class */ (function () {
    function GameSaveManager() {
    }
    GameSaveManager.save = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    GameSaveManager.load = function (key) {
        var raw = localStorage.getItem(key);
        console.log("raw: " + raw);
        return JSON.parse(raw);
    };
    GameSaveManager.clear = function () {
        localStorage.clear();
    };
    GameSaveManager.SAVE_KEY = "wolffun_test_save";
    GameSaveManager.SAVE_KEY2 = "wolffun_test_save2";
    GameSaveManager.SAVE_KEY3 = "wolffun_test_land_save0";
    GameSaveManager.SAVE_KEY4 = "wolffun_test_land_save1";
    GameSaveManager.SAVE_KEY5 = "wolffun_test_land_save2";
    GameSaveManager.SAVE_KEY6 = "wolffun_test_land_save3";
    GameSaveManager.SAVE_KEY7 = "wolffun_test_land_save4";
    GameSaveManager.SAVE_KEY8 = "wolffun_test_land_save5";
    GameSaveManager.SAVE_KEY9 = "wolffun_test_land_save6";
    GameSaveManager.SAVE_KEY10 = "wolffun_test_land_save7";
    GameSaveManager.SAVE_KEY11 = "wolffun_test_land_save8";
    return GameSaveManager;
}());
exports.GameSaveManager = GameSaveManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvR2FtZVNhdmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0lBQUE7SUFvQkEsQ0FBQztJQUFELGVBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDRCQUFRO0FBcUJyQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBMEJBLENBQUM7SUFiUSxvQkFBSSxHQUFYLFVBQVksR0FBVyxFQUFFLElBQVM7UUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksR0FBVztRQUNyQixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0scUJBQUssR0FBWjtRQUNFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBeEJNLHdCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFDL0IseUJBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUNqQyx5QkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLHlCQUFTLEdBQUcseUJBQXlCLENBQUM7SUFDdEMseUJBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUN0Qyx5QkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLHlCQUFTLEdBQUcseUJBQXlCLENBQUM7SUFDdEMseUJBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUN0Qyx5QkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLDBCQUFVLEdBQUcseUJBQXlCLENBQUM7SUFDdkMsMEJBQVUsR0FBRyx5QkFBeUIsQ0FBQztJQWVoRCxzQkFBQztDQTFCRCxBQTBCQyxJQUFBO0FBMUJZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQmx1ZWJlcnJ5LFxuICBCbHVlYmVycnlTZWVkLFxuICBMYW5kLFxuICBNYWNoaW5lLFxuICBNaWxrLFxuICBNaWxrQ293LFxuICBTdHJhd2JlcnJ5LFxuICBTdHJhd2JlcnJ5U2VlZCxcbiAgVG9tYXRvLFxuICBUb21hdG9TZWVkLFxuICBXb3JrZXIsXG59IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUkgZnJvbSBcIi4uL3VpL0xhbmRVSVwiO1xuXG5leHBvcnQgY2xhc3MgU2F2ZURhdGEge1xuICBnb2xkOiBudW1iZXI7XG4gIHRvbWF0b1NlZWQ6IFBhcnRpYWw8VG9tYXRvU2VlZD47XG4gIGJsdWViZXJyeVNlZWQ6IFBhcnRpYWw8Qmx1ZWJlcnJ5U2VlZD47XG4gIHN0cmF3YmVycnlTZWVkOiBQYXJ0aWFsPFN0cmF3YmVycnlTZWVkPjtcbiAgbWlsa0NvdzogUGFydGlhbDxNaWxrQ293PjtcblxuICB3b3JrZXI6IFBhcnRpYWw8V29ya2VyPjtcbiAgbWFjaGluZTogUGFydGlhbDxNYWNoaW5lPjtcblxuICB0b21hdG86IFBhcnRpYWw8VG9tYXRvPjtcbiAgYmx1ZWJlcnJ5OiBQYXJ0aWFsPEJsdWViZXJyeT47XG4gIHN0cmF3YmVycnk6IFBhcnRpYWw8U3RyYXdiZXJyeT47XG4gIG1pbGs6IFBhcnRpYWw8TWlsaz47XG5cbiAgdGltZXN0YW1wOiBudW1iZXI7XG5cbiAgbGFuZDogUGFydGlhbDxMYW5kPjtcblxuICB3b3JraW5nV29ya2VyTnVtYmVyOiBudW1iZXI7XG59XG5leHBvcnQgY2xhc3MgU2F2ZVF1ZXVlRGF0YSB7XG4gIHF1ZXVlSW5kZXhBcnJheTogUGFydGlhbDxudW1iZXJbXT47XG59XG5leHBvcnQgY2xhc3MgU2F2ZUxhbmQwRGF0YSB7XG4gIGxhbmRfMDogUGFydGlhbDxMYW5kPjtcbn1cbmV4cG9ydCBjbGFzcyBTYXZlTGFuZDFEYXRhIHtcbiAgbGFuZF8xOiBQYXJ0aWFsPExhbmQ+O1xufVxuZXhwb3J0IGNsYXNzIFNhdmVMYW5kMkRhdGEge1xuICBsYW5kXzI6IFBhcnRpYWw8TGFuZD47XG59XG5leHBvcnQgY2xhc3MgU2F2ZUxhbmQzRGF0YSB7XG4gIGxhbmRfMzogUGFydGlhbDxMYW5kPjtcbn1cbmV4cG9ydCBjbGFzcyBTYXZlTGFuZDREYXRhIHtcbiAgbGFuZF80OiBQYXJ0aWFsPExhbmQ+O1xufVxuZXhwb3J0IGNsYXNzIFNhdmVMYW5kNURhdGEge1xuICBsYW5kXzU6IFBhcnRpYWw8TGFuZD47XG59XG5leHBvcnQgY2xhc3MgU2F2ZUxhbmQ2RGF0YSB7XG4gIGxhbmRfNjogUGFydGlhbDxMYW5kPjtcbn1cbmV4cG9ydCBjbGFzcyBTYXZlTGFuZDdEYXRhIHtcbiAgbGFuZF83OiBQYXJ0aWFsPExhbmQ+O1xufVxuZXhwb3J0IGNsYXNzIFNhdmVMYW5kOERhdGEge1xuICBsYW5kXzg6IFBhcnRpYWw8TGFuZD47XG59XG5leHBvcnQgY2xhc3MgR2FtZVNhdmVNYW5hZ2VyIHtcbiAgc3RhdGljIFNBVkVfS0VZID0gXCJ3b2xmZnVuX3Rlc3Rfc2F2ZVwiO1xuICBzdGF0aWMgU0FWRV9LRVkyID0gXCJ3b2xmZnVuX3Rlc3Rfc2F2ZTJcIjtcbiAgc3RhdGljIFNBVkVfS0VZMyA9IFwid29sZmZ1bl90ZXN0X2xhbmRfc2F2ZTBcIjtcbiAgc3RhdGljIFNBVkVfS0VZNCA9IFwid29sZmZ1bl90ZXN0X2xhbmRfc2F2ZTFcIjtcbiAgc3RhdGljIFNBVkVfS0VZNSA9IFwid29sZmZ1bl90ZXN0X2xhbmRfc2F2ZTJcIjtcbiAgc3RhdGljIFNBVkVfS0VZNiA9IFwid29sZmZ1bl90ZXN0X2xhbmRfc2F2ZTNcIjtcbiAgc3RhdGljIFNBVkVfS0VZNyA9IFwid29sZmZ1bl90ZXN0X2xhbmRfc2F2ZTRcIjtcbiAgc3RhdGljIFNBVkVfS0VZOCA9IFwid29sZmZ1bl90ZXN0X2xhbmRfc2F2ZTVcIjtcbiAgc3RhdGljIFNBVkVfS0VZOSA9IFwid29sZmZ1bl90ZXN0X2xhbmRfc2F2ZTZcIjtcbiAgc3RhdGljIFNBVkVfS0VZMTAgPSBcIndvbGZmdW5fdGVzdF9sYW5kX3NhdmU3XCI7XG4gIHN0YXRpYyBTQVZFX0tFWTExID0gXCJ3b2xmZnVuX3Rlc3RfbGFuZF9zYXZlOFwiO1xuXG4gIHN0YXRpYyBzYXZlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICBjb25zb2xlLmxvZyhcInJhdzogXCIgKyByYXcpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKHJhdyk7XG4gIH1cblxuICBzdGF0aWMgY2xlYXIoKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIH1cbn1cbiJdfQ==
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
var GameSaveManager_1 = require("../Manager/GameSaveManager");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameController.prototype.init = function (model, view) {
        this.model = model;
        this.view = view;
    };
    GameController.prototype.update = function (dt) {
        throw new Error("Method not implemented.");
    };
    GameController.prototype.setup = function () {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function () {
            _this.saveGame();
        });
        cc.game.on(cc.game.EVENT_RESTART, function () {
            _this.saveGame();
        });
    };
    GameController.prototype.saveGame = function () {
        var data = {
            gold: this.model.getSaveGoldData(),
            tomatoSeed: this.model.getSaveTomatoSeedData(),
            blueberrySeed: this.model.getSaveBlueberrySeedData(),
            strawberrySeed: this.model.getSaveStrawberrySeedData(),
            milkCow: this.model.getSaveMilkCowData(),
            worker: this.model.getSaveWorkerData(),
            machine: this.model.getSaveMachineData(),
            tomato: this.model.getSaveTomatoData(),
            blueberry: this.model.getSaveBlueberryData(),
            strawberry: this.model.getSaveStrawberryData(),
            milk: this.model.getSaveMilkData(),
            timestamp: this.model.getSaveTimeStampData(),
            land: this.model.getSaveLandData(),
            workingWorkerNumber: this.model.getSaveWorkingWorkerNumberData(),
        };
        var data2 = {
            queueIndexArray: this.model.getSaveQueueIndexArrayData(),
        };
        var landData0 = {
            land_0: this.model.getSaveLand0Data(),
        };
        var landData1 = {
            land_1: this.model.getSaveLand1Data(),
        };
        var landData2 = {
            land_2: this.model.getSaveLand2Data(),
        };
        var landData3 = {
            land_3: this.model.getSaveLand3Data(),
        };
        var landData4 = {
            land_4: this.model.getSaveLand4Data(),
        };
        var landData5 = {
            land_5: this.model.getSaveLand5Data(),
        };
        var landData6 = {
            land_6: this.model.getSaveLand6Data(),
        };
        var landData7 = {
            land_7: this.model.getSaveLand7Data(),
        };
        var landData8 = {
            land_8: this.model.getSaveLand8Data(),
        };
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY, data);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY2, data2);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY3, landData0);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY4, landData1);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY5, landData2);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY6, landData3);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY7, landData4);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY8, landData5);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY9, landData6);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY10, landData7);
        GameSaveManager_1.GameSaveManager.save(GameSaveManager_1.GameSaveManager.SAVE_KEY11, landData8);
        console.log("game Saved!!!!!!!!!");
    };
    GameController.prototype.loadGame = function () {
        var saved = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY);
        if (saved) {
            this.model.loadGoldFromSave(saved.gold);
            this.model.loadTomatoSeedFromSave(saved.tomatoSeed);
            this.model.loadBlueberrySeedFromSave(saved.blueberrySeed);
            this.model.loadStrawberrySeedFromSave(saved.strawberrySeed);
            this.model.loadMilkCowFromSave(saved.milkCow);
            this.model.loadWokerFromSave(saved.worker);
            this.model.loadMachineFromSave(saved.machine);
            this.model.loadTomatoFromSave(saved.tomato);
            this.model.loadBlueberryFromSave(saved.blueberry);
            this.model.loadStrawberryFromSave(saved.strawberry);
            this.model.loadMilkFromSave(saved.milk);
            this.model.loadTimeStampFromSave(saved.timestamp);
            this.model.loadLandFromSave(saved.land);
            this.model.loadWorkingWorkerNumberFromSave(saved.workingWorkerNumber);
            var offlineDuration = Date.now() - this.model.storage.timestamp;
            this.updateOfflineProgress(offlineDuration);
        }
        var saved2 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY2);
        if (saved2) {
            this.model.loadQueueIndexArrayFromSave(saved2.queueIndexArray);
        }
        var landSaved0 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY3);
        if (landSaved0) {
            this.model.loadLand0FromSave(landSaved0.land_0);
        }
        var landSaved1 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY4);
        if (landSaved1) {
            this.model.loadLand1FromSave(landSaved1.land_1);
        }
        var landSaved2 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY5);
        if (landSaved2) {
            this.model.loadLand2FromSave(landSaved2.land_2);
        }
        var landSaved3 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY6);
        if (landSaved3) {
            this.model.loadLand3FromSave(landSaved3.land_3);
        }
        var landSaved4 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY7);
        if (landSaved4) {
            this.model.loadLand4FromSave(landSaved4.land_4);
        }
        var landSaved5 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY8);
        if (landSaved5) {
            this.model.loadLand5FromSave(landSaved5.land_5);
        }
        var landSaved6 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY9);
        if (landSaved6) {
            this.model.loadLand6FromSave(landSaved6.land_6);
        }
        var landSaved7 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY10);
        if (landSaved7) {
            this.model.loadLand7FromSave(landSaved7.land_7);
        }
        var landSaved8 = GameSaveManager_1.GameSaveManager.load(GameSaveManager_1.GameSaveManager.SAVE_KEY11);
        if (landSaved8) {
            this.model.loadLand8FromSave(landSaved8.land_8);
        }
        console.log("game Loaded!!!!!!!!!");
        GameSaveManager_1.GameSaveManager.clear();
    };
    GameController.prototype.updateOfflineProgress = function (duration) { };
    GameController.prototype.calculateLand = function (duration) { };
    GameController.prototype.calculateWorker = function (duration) { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFHL0QsOERBYW9DO0FBR3BDO0lBQW9DLGtDQUFtQztJQUF2RTs7SUFpS0EsQ0FBQztJQTdKQyw2QkFBSSxHQUFKLFVBQUssS0FBZ0IsRUFBRSxJQUFjO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCwrQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsOEJBQUssR0FBTDtRQUFBLGlCQU9DO1FBTkMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDRSxJQUFNLElBQUksR0FBYTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDbEMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUU7WUFDOUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUU7WUFDcEQsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUU7WUFDdEQsT0FBTyxFQUFF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QUFDO1NBQ2pEO1FBRUQsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLGlDQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixRQUFnQixJQUFHLENBQUM7SUFFMUMsc0NBQWEsR0FBYixVQUFjLFFBQWdCLElBQUcsQ0FBQztJQUNsQyx3Q0FBZSxHQUFmLFVBQWdCLFFBQWdCLElBQUcsQ0FBQztJQUN0QyxxQkFBQztBQUFELENBaktBLEFBaUtDLENBakttQywrQkFBYyxHQWlLakQ7QUFqS1ksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgR2FtZVZpZXcgfSBmcm9tIFwiLi4vdmlld3MvR2FtZVZpZXdcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQge1xuICBHYW1lU2F2ZU1hbmFnZXIsXG4gIFNhdmVEYXRhLFxuICBTYXZlTGFuZDBEYXRhLFxuICBTYXZlTGFuZDFEYXRhLFxuICBTYXZlTGFuZDJEYXRhLFxuICBTYXZlTGFuZDNEYXRhLFxuICBTYXZlTGFuZDREYXRhLFxuICBTYXZlTGFuZDVEYXRhLFxuICBTYXZlTGFuZDZEYXRhLFxuICBTYXZlTGFuZDdEYXRhLFxuICBTYXZlTGFuZDhEYXRhLFxuICBTYXZlUXVldWVEYXRhLFxufSBmcm9tIFwiLi4vTWFuYWdlci9HYW1lU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7IE1pbGssIE1pbGtDb3csIFRvbWF0b1NlZWQgfSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyPEdhbWVNb2RlbCwgR2FtZVZpZXc+IHtcbiAgbW9kZWw6IEdhbWVNb2RlbDtcbiAgdmlldzogR2FtZVZpZXc7XG5cbiAgaW5pdChtb2RlbDogR2FtZU1vZGVsLCB2aWV3OiBHYW1lVmlldyk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG4gIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgc2V0dXAoKTogdm9pZCB7XG4gICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsICgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZUdhbWUoKTtcbiAgICB9KTtcbiAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfUkVTVEFSVCwgKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlR2FtZSgpO1xuICAgIH0pO1xuICB9XG4gIHNhdmVHYW1lKCkge1xuICAgIGNvbnN0IGRhdGE6IFNhdmVEYXRhID0ge1xuICAgICAgZ29sZDogdGhpcy5tb2RlbC5nZXRTYXZlR29sZERhdGEoKSxcbiAgICAgIHRvbWF0b1NlZWQ6IHRoaXMubW9kZWwuZ2V0U2F2ZVRvbWF0b1NlZWREYXRhKCksXG4gICAgICBibHVlYmVycnlTZWVkOiB0aGlzLm1vZGVsLmdldFNhdmVCbHVlYmVycnlTZWVkRGF0YSgpLFxuICAgICAgc3RyYXdiZXJyeVNlZWQ6IHRoaXMubW9kZWwuZ2V0U2F2ZVN0cmF3YmVycnlTZWVkRGF0YSgpLFxuICAgICAgbWlsa0NvdzogdGhpcy5tb2RlbC5nZXRTYXZlTWlsa0Nvd0RhdGEoKSxcblxuICAgICAgd29ya2VyOiB0aGlzLm1vZGVsLmdldFNhdmVXb3JrZXJEYXRhKCksXG4gICAgICBtYWNoaW5lOiB0aGlzLm1vZGVsLmdldFNhdmVNYWNoaW5lRGF0YSgpLFxuXG4gICAgICB0b21hdG86IHRoaXMubW9kZWwuZ2V0U2F2ZVRvbWF0b0RhdGEoKSxcbiAgICAgIGJsdWViZXJyeTogdGhpcy5tb2RlbC5nZXRTYXZlQmx1ZWJlcnJ5RGF0YSgpLFxuICAgICAgc3RyYXdiZXJyeTogdGhpcy5tb2RlbC5nZXRTYXZlU3RyYXdiZXJyeURhdGEoKSxcbiAgICAgIG1pbGs6IHRoaXMubW9kZWwuZ2V0U2F2ZU1pbGtEYXRhKCksXG5cbiAgICAgIHRpbWVzdGFtcDogdGhpcy5tb2RlbC5nZXRTYXZlVGltZVN0YW1wRGF0YSgpLFxuXG4gICAgICBsYW5kOiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kRGF0YSgpLFxuXG4gICAgICB3b3JraW5nV29ya2VyTnVtYmVyOiB0aGlzLm1vZGVsLmdldFNhdmVXb3JraW5nV29ya2VyTnVtYmVyRGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgZGF0YTI6IFNhdmVRdWV1ZURhdGEgPSB7XG4gICAgICBxdWV1ZUluZGV4QXJyYXk6IHRoaXMubW9kZWwuZ2V0U2F2ZVF1ZXVlSW5kZXhBcnJheURhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhMDogU2F2ZUxhbmQwRGF0YSA9IHtcbiAgICAgIGxhbmRfMDogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDBEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTE6IFNhdmVMYW5kMURhdGEgPSB7XG4gICAgICBsYW5kXzE6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQxRGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGEyOiBTYXZlTGFuZDJEYXRhID0ge1xuICAgICAgbGFuZF8yOiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kMkRhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhMzogU2F2ZUxhbmQzRGF0YSA9IHtcbiAgICAgIGxhbmRfMzogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDNEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTQ6IFNhdmVMYW5kNERhdGEgPSB7XG4gICAgICBsYW5kXzQ6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQ0RGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGE1OiBTYXZlTGFuZDVEYXRhID0ge1xuICAgICAgbGFuZF81OiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kNURhdGEoKSxcbiAgICB9O1xuICAgIGNvbnN0IGxhbmREYXRhNjogU2F2ZUxhbmQ2RGF0YSA9IHtcbiAgICAgIGxhbmRfNjogdGhpcy5tb2RlbC5nZXRTYXZlTGFuZDZEYXRhKCksXG4gICAgfTtcbiAgICBjb25zdCBsYW5kRGF0YTc6IFNhdmVMYW5kN0RhdGEgPSB7XG4gICAgICBsYW5kXzc6IHRoaXMubW9kZWwuZ2V0U2F2ZUxhbmQ3RGF0YSgpLFxuICAgIH07XG4gICAgY29uc3QgbGFuZERhdGE4OiBTYXZlTGFuZDhEYXRhID0ge1xuICAgICAgbGFuZF84OiB0aGlzLm1vZGVsLmdldFNhdmVMYW5kOERhdGEoKSxcbiAgICB9O1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWSwgZGF0YSk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMiwgZGF0YTIpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTMsIGxhbmREYXRhMCk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZNCwgbGFuZERhdGExKTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk1LCBsYW5kRGF0YTIpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTYsIGxhbmREYXRhMyk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZNywgbGFuZERhdGE0KTtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuc2F2ZShHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk4LCBsYW5kRGF0YTUpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5zYXZlKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTksIGxhbmREYXRhNik7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMTAsIGxhbmREYXRhNyk7XG4gICAgR2FtZVNhdmVNYW5hZ2VyLnNhdmUoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMTEsIGxhbmREYXRhOCk7XG4gICAgY29uc29sZS5sb2coXCJnYW1lIFNhdmVkISEhISEhISEhXCIpO1xuICB9XG5cbiAgbG9hZEdhbWUoKSB7XG4gICAgY29uc3Qgc2F2ZWQgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVkpO1xuICAgIGlmIChzYXZlZCkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkR29sZEZyb21TYXZlKHNhdmVkLmdvbGQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkVG9tYXRvU2VlZEZyb21TYXZlKHNhdmVkLnRvbWF0b1NlZWQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkQmx1ZWJlcnJ5U2VlZEZyb21TYXZlKHNhdmVkLmJsdWViZXJyeVNlZWQpO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkU3RyYXdiZXJyeVNlZWRGcm9tU2F2ZShzYXZlZC5zdHJhd2JlcnJ5U2VlZCk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRNaWxrQ293RnJvbVNhdmUoc2F2ZWQubWlsa0Nvdyk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRXb2tlckZyb21TYXZlKHNhdmVkLndvcmtlcik7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRNYWNoaW5lRnJvbVNhdmUoc2F2ZWQubWFjaGluZSk7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRUb21hdG9Gcm9tU2F2ZShzYXZlZC50b21hdG8pO1xuICAgICAgdGhpcy5tb2RlbC5sb2FkQmx1ZWJlcnJ5RnJvbVNhdmUoc2F2ZWQuYmx1ZWJlcnJ5KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFN0cmF3YmVycnlGcm9tU2F2ZShzYXZlZC5zdHJhd2JlcnJ5KTtcbiAgICAgIHRoaXMubW9kZWwubG9hZE1pbGtGcm9tU2F2ZShzYXZlZC5taWxrKTtcbiAgICAgIHRoaXMubW9kZWwubG9hZFRpbWVTdGFtcEZyb21TYXZlKHNhdmVkLnRpbWVzdGFtcCk7XG5cbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmRGcm9tU2F2ZShzYXZlZC5sYW5kKTtcblxuICAgICAgdGhpcy5tb2RlbC5sb2FkV29ya2luZ1dvcmtlck51bWJlckZyb21TYXZlKHNhdmVkLndvcmtpbmdXb3JrZXJOdW1iZXIpO1xuXG4gICAgICBjb25zdCBvZmZsaW5lRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gdGhpcy5tb2RlbC5zdG9yYWdlLnRpbWVzdGFtcDtcbiAgICAgIHRoaXMudXBkYXRlT2ZmbGluZVByb2dyZXNzKG9mZmxpbmVEdXJhdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2F2ZWQyID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMik7XG4gICAgaWYgKHNhdmVkMikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkUXVldWVJbmRleEFycmF5RnJvbVNhdmUoc2F2ZWQyLnF1ZXVlSW5kZXhBcnJheSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFuZFNhdmVkMCA9IEdhbWVTYXZlTWFuYWdlci5sb2FkKEdhbWVTYXZlTWFuYWdlci5TQVZFX0tFWTMpO1xuICAgIGlmIChsYW5kU2F2ZWQwKSB7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRMYW5kMEZyb21TYXZlKGxhbmRTYXZlZDAubGFuZF8wKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYW5kU2F2ZWQxID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZNCk7XG4gICAgaWYgKGxhbmRTYXZlZDEpIHtcbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmQxRnJvbVNhdmUobGFuZFNhdmVkMS5sYW5kXzEpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhbmRTYXZlZDIgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk1KTtcbiAgICBpZiAobGFuZFNhdmVkMikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDJGcm9tU2F2ZShsYW5kU2F2ZWQyLmxhbmRfMik7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDMgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk2KTtcbiAgICBpZiAobGFuZFNhdmVkMykge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDNGcm9tU2F2ZShsYW5kU2F2ZWQzLmxhbmRfMyk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDQgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk3KTtcbiAgICBpZiAobGFuZFNhdmVkNCkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDRGcm9tU2F2ZShsYW5kU2F2ZWQ0LmxhbmRfNCk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDUgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk4KTtcbiAgICBpZiAobGFuZFNhdmVkNSkge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDVGcm9tU2F2ZShsYW5kU2F2ZWQ1LmxhbmRfNSk7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDYgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVk5KTtcbiAgICBpZiAobGFuZFNhdmVkNikge1xuICAgICAgdGhpcy5tb2RlbC5sb2FkTGFuZDZGcm9tU2F2ZShsYW5kU2F2ZWQ2LmxhbmRfNik7XG4gICAgfVxuICAgIGNvbnN0IGxhbmRTYXZlZDcgPSBHYW1lU2F2ZU1hbmFnZXIubG9hZChHYW1lU2F2ZU1hbmFnZXIuU0FWRV9LRVkxMCk7XG4gICAgaWYgKGxhbmRTYXZlZDcpIHtcbiAgICAgIHRoaXMubW9kZWwubG9hZExhbmQ3RnJvbVNhdmUobGFuZFNhdmVkNy5sYW5kXzcpO1xuICAgIH1cbiAgICBjb25zdCBsYW5kU2F2ZWQ4ID0gR2FtZVNhdmVNYW5hZ2VyLmxvYWQoR2FtZVNhdmVNYW5hZ2VyLlNBVkVfS0VZMTEpO1xuICAgIGlmIChsYW5kU2F2ZWQ4KSB7XG4gICAgICB0aGlzLm1vZGVsLmxvYWRMYW5kOEZyb21TYXZlKGxhbmRTYXZlZDgubGFuZF84KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImdhbWUgTG9hZGVkISEhISEhISEhXCIpO1xuICAgIEdhbWVTYXZlTWFuYWdlci5jbGVhcigpO1xuICB9XG5cbiAgdXBkYXRlT2ZmbGluZVByb2dyZXNzKGR1cmF0aW9uOiBudW1iZXIpIHt9XG5cbiAgY2FsY3VsYXRlTGFuZChkdXJhdGlvbjogbnVtYmVyKSB7fVxuICBjYWxjdWxhdGVXb3JrZXIoZHVyYXRpb246IG51bWJlcikge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lMYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFBsYW50VHlwZSB9IGZyb20gXCIuLi9lbnVtcy9QbGFudFR5cGVcIjtcbmltcG9ydCBMYW5kVUksIHsgTGFuZFN0YXRlLCBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vc2NyaXB0cy91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTGFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIG1pc3Npb25OdW1iZXI6IG51bWJlcjtcbiAgY29udGFpbkludGVydmFsOiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG4gIGNvbnRhaW5ZaWVsZDogbnVtYmVyO1xuICBjdXJyZW50QXNzZXQ6IGFueTtcbiAgY3JvcDogbnVtYmVyO1xuICB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbjtcbiAgd29ya2luZ1RpbWU6IG51bWJlcjtcbiAgaXNSZWFkeVRvV29yazogYm9vbGVhbjtcblxuICBpc0VtcHR5OiBib29sZWFuO1xuICB0aW1lOiBudW1iZXI7XG4gIGxhbmRTdGF0ZTogTGFuZFN0YXRlO1xuICBwbGFudFR5cGU6IFBsYW50VHlwZTtcbiAgY2F0dGxlVHlwZTogQ2F0dGxlVHlwZTtcbn1cbiJdfQ==
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
var CattleType_1 = require("../../enums/CattleType");
var PlantType_1 = require("../../enums/PlantType");
var Store_1 = require("../Store/Store");
var GameConfig_1 = require("../data/GameConfig");
var Storage_1 = require("../storage/Storage");
var LandUI_1 = require("../ui/LandUI");
var GameModel = /** @class */ (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queueIndexArray = [];
        _this.landArray = [];
        return _this;
    }
    GameModel.prototype.loadTomatoSeedFromSave = function (data) {
        this.storage.tomatoSeed.name = data.name || "";
        this.storage.tomatoSeed.number = data.number || 0;
        this.storage.tomatoSeed.harvestInterval = data.harvestInterval || 0;
        this.storage.tomatoSeed.maxHarvest = data.maxHarvest || 0;
        this.storage.tomatoSeed.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveTomatoSeedData = function () {
        return this.storage.tomatoSeed;
    };
    GameModel.prototype.loadBlueberrySeedFromSave = function (data) {
        this.storage.blueberrySeed.name = data.name || "";
        this.storage.blueberrySeed.number = data.number || 0;
        this.storage.blueberrySeed.harvestInterval = data.harvestInterval || 0;
        this.storage.blueberrySeed.maxHarvest = data.maxHarvest || 0;
        this.storage.blueberrySeed.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveBlueberrySeedData = function () {
        return this.storage.blueberrySeed;
    };
    GameModel.prototype.loadStrawberrySeedFromSave = function (data) {
        this.storage.strawberrySeed.name = data.name || "";
        this.storage.strawberrySeed.number = data.number || 0;
        this.storage.strawberrySeed.harvestInterval = data.harvestInterval || 0;
        this.storage.strawberrySeed.maxHarvest = data.maxHarvest || 0;
        this.storage.strawberrySeed.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveStrawberrySeedData = function () {
        return this.storage.strawberrySeed;
    };
    GameModel.prototype.loadMilkCowFromSave = function (data) {
        this.storage.milkCow.name = data.name || "";
        this.storage.milkCow.number = data.number || 0;
        this.storage.milkCow.harvestInterval = data.harvestInterval || 0;
        this.storage.milkCow.maxHarvest = data.maxHarvest || 0;
        this.storage.milkCow.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveMilkCowData = function () {
        return this.storage.milkCow;
    };
    GameModel.prototype.loadWokerFromSave = function (data) {
        this.storage.worker.name = data.name || "";
        this.storage.worker.number = data.number || 0;
        this.storage.worker.workingInterval = data.workingInterval || 0;
        this.storage.worker.buyPrice = data.buyPrice || 0;
    };
    GameModel.prototype.getSaveWorkerData = function () {
        return this.storage.worker;
    };
    GameModel.prototype.loadMachineFromSave = function (data) {
        this.storage.machine.name = data.name || "";
        this.storage.machine.level = data.level || 1;
        this.storage.machine.support = data.support || 10;
        this.storage.machine.upgradePrice = data.upgradePrice || 500;
    };
    GameModel.prototype.getSaveMachineData = function () {
        return this.storage.machine;
    };
    GameModel.prototype.loadGoldFromSave = function (data) {
        this.storage.gold = data || 0;
    };
    GameModel.prototype.getSaveGoldData = function () {
        return this.storage.gold;
    };
    GameModel.prototype.loadTimeStampFromSave = function (data) {
        this.storage.timestamp = data || 0;
    };
    GameModel.prototype.getSaveTimeStampData = function () {
        return this.storage.timestamp;
    };
    GameModel.prototype.loadWorkingWorkerNumberFromSave = function (data) {
        this.storage.workingWorkerNumber = data || 0;
    };
    GameModel.prototype.getSaveWorkingWorkerNumberData = function () {
        return this.storage.workingWorkerNumber;
    };
    GameModel.prototype.loadTomatoFromSave = function (data) {
        this.storage.tomato.name = data.name || "";
        this.storage.tomato.number = data.number || 0;
        this.storage.tomato.sellPrice = data.sellPrice || 5;
    };
    GameModel.prototype.getSaveTomatoData = function () {
        return this.storage.tomato;
    };
    GameModel.prototype.loadBlueberryFromSave = function (data) {
        this.storage.blueberry.name = data.name || "";
        this.storage.blueberry.number = data.number || 0;
        this.storage.blueberry.sellPrice = data.sellPrice || 8;
    };
    GameModel.prototype.getSaveBlueberryData = function () {
        return this.storage.blueberry;
    };
    GameModel.prototype.loadStrawberryFromSave = function (data) {
        this.storage.strawberry.name = data.name || "";
        this.storage.strawberry.number = data.number || 0;
        this.storage.strawberry.sellPrice = data.sellPrice || 10;
    };
    GameModel.prototype.getSaveStrawberryData = function () {
        return this.storage.strawberry;
    };
    GameModel.prototype.loadMilkFromSave = function (data) {
        this.storage.milk.name = data.name || "";
        this.storage.milk.number = data.number || 0;
        this.storage.milk.sellPrice = data.sellPrice || 15;
    };
    GameModel.prototype.getSaveMilkData = function () {
        return this.storage.milk;
    };
    GameModel.prototype.loadLandFromSave = function (data) {
        this.storage.land.name = data.name || "";
        this.storage.land.number = data.number || 0;
        this.storage.land.missionNumber = data.missionNumber || 1;
        this.storage.land.containInterval = data.containInterval =
            data.containInterval || 0;
        this.storage.land.buyPrice = data.buyPrice || 0;
        this.storage.land.containYield = data.containYield || 0;
        this.storage.land.currentAsset = data.currentAsset || new Storage_1.TomatoSeed();
        this.storage.land.crop = data.crop || 0;
        this.storage.land.workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.storage.land.workingTime = data.workingTime || 0;
        this.storage.land.isReadyToWork = data.isReadyToWork || true;
        this.storage.land.isEmpty = data.isEmpty || true;
        this.storage.land.time = data.time || 0;
        this.storage.land.landState = data.landState || LandUI_1.LandState.Empty;
        this.storage.land.plantType = data.plantType || null;
        this.storage.land.cattleType = data.cattleType || null;
    };
    GameModel.prototype.getSaveLandData = function () {
        return this.storage.land;
    };
    GameModel.prototype.loadQueueIndexArrayFromSave = function (data) {
        this.queueIndexArray = data || [];
    };
    GameModel.prototype.getSaveQueueIndexArrayData = function () {
        return this.queueIndexArray;
    };
    GameModel.prototype.loadLand0FromSave = function (data) {
        var _a, _b, _c, _d;
        this.landArray[0].name = (_a = data.name) !== null && _a !== void 0 ? _a : "";
        this.landArray[0].number = data.number || 0;
        this.landArray[0].missionNumber = data.missionNumber || 1;
        this.landArray[0].containInterval = data.containInterval || 0;
        this.landArray[0].buyPrice = data.buyPrice || 0;
        this.landArray[0].containYield = data.containYield || 0;
        this.landArray[0].currentAsset = (_b = data.currentAsset) !== null && _b !== void 0 ? _b : this.storage.tomatoSeed;
        this.landArray[0].crop = data.crop || 0;
        this.landArray[0].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[0].workingTime = data.workingTime || 0;
        this.landArray[0].isReadyToWork = (_c = data.isReadyToWork) !== null && _c !== void 0 ? _c : true;
        this.landArray[0].isEmpty = (_d = data.isEmpty) !== null && _d !== void 0 ? _d : true;
        this.landArray[0].time = data.time || 0;
        this.landArray[0].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[0].plantType = data.plantType;
        this.landArray[0].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand0Data = function () {
        return this.landArray[0];
    };
    GameModel.prototype.loadLand1FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[1].name = data.name || "";
        this.landArray[1].number = data.number || 0;
        this.landArray[1].missionNumber = data.missionNumber || 1;
        this.landArray[1].containInterval = data.containInterval || 0;
        this.landArray[1].buyPrice = data.buyPrice || 0;
        this.landArray[1].containYield = data.containYield || 0;
        this.landArray[1].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[1].crop = data.crop || 0;
        this.landArray[1].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[1].workingTime = data.workingTime || 0;
        this.landArray[1].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[1].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[1].time = data.time || 0;
        this.landArray[1].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[1].plantType = data.plantType;
        this.landArray[1].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand1Data = function () {
        return this.landArray[1];
    };
    GameModel.prototype.loadLand2FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[2].name = data.name || "";
        this.landArray[2].number = data.number || 0;
        this.landArray[2].missionNumber = data.missionNumber || 1;
        this.landArray[2].containInterval = data.containInterval || 0;
        this.landArray[2].buyPrice = data.buyPrice || 0;
        this.landArray[2].containYield = data.containYield || 0;
        this.landArray[2].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[2].crop = data.crop || 0;
        this.landArray[2].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[2].workingTime = data.workingTime || 0;
        this.landArray[2].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[2].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[2].time = data.time || 0;
        this.landArray[2].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[2].plantType = data.plantType;
        this.landArray[2].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand2Data = function () {
        return this.landArray[2];
    };
    GameModel.prototype.loadLand3FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[3].name = data.name || "";
        this.landArray[3].number = data.number || 0;
        this.landArray[3].missionNumber = data.missionNumber || 1;
        this.landArray[3].containInterval = data.containInterval || 0;
        this.landArray[3].buyPrice = data.buyPrice || 0;
        this.landArray[3].containYield = data.containYield || 0;
        this.landArray[3].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[3].crop = data.crop || 0;
        this.landArray[3].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[3].workingTime = data.workingTime || 0;
        this.landArray[3].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[3].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[3].time = data.time || 0;
        this.landArray[3].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[3].plantType = data.plantType;
        this.landArray[3].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand3Data = function () {
        return this.landArray[3];
    };
    GameModel.prototype.loadLand4FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[4].name = data.name || "";
        this.landArray[4].number = data.number || 0;
        this.landArray[4].missionNumber = data.missionNumber || 1;
        this.landArray[4].containInterval = data.containInterval || 0;
        this.landArray[4].buyPrice = data.buyPrice || 0;
        this.landArray[4].containYield = data.containYield || 0;
        this.landArray[4].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[4].crop = data.crop || 0;
        this.landArray[4].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[4].workingTime = data.workingTime || 0;
        this.landArray[4].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[4].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[4].time = data.time || 0;
        this.landArray[4].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[4].plantType = data.plantType;
        this.landArray[4].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand4Data = function () {
        return this.landArray[4];
    };
    GameModel.prototype.loadLand5FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[5].name = data.name || "";
        this.landArray[5].number = data.number || 0;
        this.landArray[5].missionNumber = data.missionNumber || 1;
        this.landArray[5].containInterval = data.containInterval || 0;
        this.landArray[5].buyPrice = data.buyPrice || 0;
        this.landArray[5].containYield = data.containYield || 0;
        this.landArray[5].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[5].crop = data.crop || 0;
        this.landArray[5].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[5].workingTime = data.workingTime || 0;
        this.landArray[5].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[5].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[5].time = data.time || 0;
        this.landArray[5].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[5].plantType = data.plantType;
        this.landArray[5].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand5Data = function () {
        return this.landArray[5];
    };
    GameModel.prototype.loadLand6FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[6].name = data.name || "";
        this.landArray[6].number = data.number || 0;
        this.landArray[6].missionNumber = data.missionNumber || 1;
        this.landArray[6].containInterval = data.containInterval || 0;
        this.landArray[6].buyPrice = data.buyPrice || 0;
        this.landArray[6].containYield = data.containYield || 0;
        this.landArray[6].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[6].crop = data.crop || 0;
        this.landArray[6].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[6].workingTime = data.workingTime || 0;
        this.landArray[6].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[6].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[6].time = data.time || 0;
        this.landArray[6].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[6].plantType = data.plantType;
        this.landArray[6].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand6Data = function () {
        return this.landArray[6];
    };
    GameModel.prototype.loadLand7FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[7].name = data.name || "";
        this.landArray[7].number = data.number || 0;
        this.landArray[7].missionNumber = data.missionNumber || 1;
        this.landArray[7].containInterval = data.containInterval || 0;
        this.landArray[7].buyPrice = data.buyPrice || 0;
        this.landArray[7].containYield = data.containYield || 0;
        this.landArray[7].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[7].crop = data.crop || 0;
        this.landArray[7].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[7].workingTime = data.workingTime || 0;
        this.landArray[7].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[7].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[7].time = data.time || 0;
        this.landArray[7].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[7].plantType = data.plantType;
        this.landArray[7].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand7Data = function () {
        return this.landArray[7];
    };
    GameModel.prototype.loadLand8FromSave = function (data) {
        var _a, _b, _c;
        this.landArray[8].name = data.name || "";
        this.landArray[8].number = data.number || 0;
        this.landArray[8].missionNumber = data.missionNumber || 1;
        this.landArray[8].containInterval = data.containInterval || 0;
        this.landArray[8].buyPrice = data.buyPrice || 0;
        this.landArray[8].containYield = data.containYield || 0;
        this.landArray[8].currentAsset = (_a = data.currentAsset) !== null && _a !== void 0 ? _a : this.storage.tomatoSeed;
        this.landArray[8].crop = data.crop || 0;
        this.landArray[8].workerAction =
            data.workerAction || LandUI_1.WorkerAction.TomatoPlant;
        this.landArray[8].workingTime = data.workingTime || 0;
        this.landArray[8].isReadyToWork = (_b = data.isReadyToWork) !== null && _b !== void 0 ? _b : true;
        this.landArray[8].isEmpty = (_c = data.isEmpty) !== null && _c !== void 0 ? _c : true;
        this.landArray[8].time = data.time || 0;
        this.landArray[8].landState = data.landState || LandUI_1.LandState.Empty;
        this.landArray[8].plantType = data.plantType;
        this.landArray[8].cattleType = data.cattleType;
    };
    GameModel.prototype.getSaveLand8Data = function () {
        return this.landArray[8];
    };
    GameModel.prototype.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.storage = new Storage_1.Storage();
        this.store = new Store_1.Store(this.storage);
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
    };
    GameModel.prototype.setData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        this.init();
                        this.storage.gold = 20000;
                        this.storage.workingWorkerNumber = 0;
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
                        this.storage.worker.isBusy = false;
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
    GameModel.prototype.newLand = function () {
        this.storage.land = new Storage_1.Land(LandUI_1.WorkerAction.TomatoPlant, 0, 0, GameConfig_1.LandConfigs.red.name, GameConfig_1.FirstConfigs.land.number, GameConfig_1.LandConfigs.red.missionNumber, GameConfig_1.LandConfigs.red.containInterval, GameConfig_1.LandConfigs.red.buyPrice, true, 0, LandUI_1.LandState.Empty, PlantType_1.PlantType.tomatoSeed, CattleType_1.CattleType.Milkcow, this.storage.tomatoSeed, 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21vZGVscy9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUNyRCxxREFBb0Q7QUFDcEQsbURBQWtEO0FBZWxELHdDQUF1QztBQUN2QyxpREFlNEI7QUFDNUIsOENBZTRCO0FBQzVCLHVDQUErRDtBQUUvRDtJQUErQiw2QkFBUztJQUF4QztRQUFBLHFFQTRnQkM7UUFqSUMscUJBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IsZUFBUyxHQUFXLEVBQUUsQ0FBQzs7SUFnSXpCLENBQUM7SUEzZ0JDLDBDQUFzQixHQUF0QixVQUF1QixJQUFxQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCx5Q0FBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDRCw2Q0FBeUIsR0FBekIsVUFBMEIsSUFBd0M7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENB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QkFFOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt3QkFFcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFFMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7S0FDM0Q7SUFDSyw0QkFBUSxHQUFkOzs7OzRCQUNFLHFCQUFNLG1DQUFzQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixxQkFBTSxvQ0FBdUIsRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDaEMscUJBQU0sbUNBQXNCLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLHFCQUFNLGtDQUFxQixFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFDO3dCQUM5QixxQkFBTSxtQ0FBc0IsRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IscUJBQU0sb0NBQXVCLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLHFCQUFNLHFDQUF3QixFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDOzs7OztLQUNsQztJQUVELDJCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLGNBQUksQ0FDMUIscUJBQVksQ0FBQyxXQUFXLEVBQ3hCLENBQUMsRUFDRCxDQUFDLEVBQ0Qsd0JBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUNwQix5QkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ3hCLHdCQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDN0Isd0JBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUMvQix3QkFBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQ3hCLElBQUksRUFDSixDQUFDLEVBQ0Qsa0JBQVMsQ0FBQyxLQUFLLEVBQ2YscUJBQVMsQ0FBQyxVQUFVLEVBQ3BCLHVCQUFVLENBQUMsT0FBTyxFQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFDdkIsQ0FBQyxFQUNELElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNNLGdDQUFZLEdBQW5CO1FBQ0UsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00sK0JBQVcsR0FBbEI7UUFDRSxPQUFPLHdCQUFXLENBQUM7SUFDckIsQ0FBQztJQUNNLGlDQUFhLEdBQXBCO1FBQ0UsT0FBTywwQkFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8seUJBQVksQ0FBQztJQUN0QixDQUFDO0lBQ00saUNBQWEsR0FBcEI7UUFDRSxPQUFPLDBCQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNNLGtDQUFjLEdBQXJCO1FBQ0UsT0FBTywyQkFBYyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxnQkFBQztBQUFELENBNWdCQSxBQTRnQkMsQ0E1Z0I4QixxQkFBUyxHQTRnQnZDO0FBNWdCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9jb3JlL212Yy9CYXNlTW9kZWxcIjtcbmltcG9ydCB7IENhdHRsZVR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvQ2F0dGxlVHlwZVwiO1xuaW1wb3J0IHsgUGxhbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1BsYW50VHlwZVwiO1xuaW1wb3J0IHtcbiAgU2F2ZURhdGEsXG4gIFNhdmVMYW5kMERhdGEsXG4gIFNhdmVMYW5kMURhdGEsXG4gIFNhdmVMYW5kMkRhdGEsXG4gIFNhdmVMYW5kM0RhdGEsXG4gIFNhdmVMYW5kNERhdGEsXG4gIFNhdmVMYW5kNURhdGEsXG4gIFNhdmVMYW5kNkRhdGEsXG4gIFNhdmVMYW5kN0RhdGEsXG4gIFNhdmVMYW5kOERhdGEsXG4gIFNhdmVRdWV1ZURhdGEsXG59IGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVTYXZlTWFuYWdlclwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XG5pbXBvcnQge1xuICBGaXJzdENvbmZpZ3MsXG4gIFBsYW50Q29uZmlncyxcbiAgQ2F0dGxlQ29uZmlncyxcbiAgWWllbGRDb25maWdzLFxuICBMYW5kQ29uZmlncyxcbiAgV29ya2VyQ29uZmlncyxcbiAgTWFjaGluZUNvbmZpZ3MsXG4gIGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWLFxuICBsb2FkRmlyc3RDb25maWdGcm9tQ1NWLFxuICBsb2FkTGFuZENvbmZpZ0Zyb21DU1YsXG4gIGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVixcbiAgbG9hZFBsYW50Q29uZmlnRnJvbUNTVixcbiAgbG9hZFdvcmtlckNvbmZpZ0Zyb21DU1YsXG4gIGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YsXG59IGZyb20gXCIuLi9kYXRhL0dhbWVDb25maWdcIjtcbmltcG9ydCB7XG4gIEJlZWYsXG4gIEJsdWViZXJyeSxcbiAgQmx1ZWJlcnJ5U2VlZCxcbiAgQ293LFxuICBMYW5kLFxuICBNYWNoaW5lLFxuICBNaWxrLFxuICBNaWxrQ293LFxuICBTdG9yYWdlLFxuICBTdHJhd2JlcnJ5LFxuICBTdHJhd2JlcnJ5U2VlZCxcbiAgVG9tYXRvLFxuICBUb21hdG9TZWVkLFxuICBXb3JrZXIsXG59IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUksIHsgTGFuZFN0YXRlLCBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWwge1xuICBsb2FkVG9tYXRvU2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9TZWVkXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVUb21hdG9TZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvU2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgfVxuICBsb2FkQmx1ZWJlcnJ5U2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlTZWVkXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmhhcnZlc3RJbnRlcnZhbCA9IGRhdGEuaGFydmVzdEludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICB9XG4gIGdldFNhdmVCbHVlYmVycnlTZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5U2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDtcbiAgfVxuICBsb2FkU3RyYXdiZXJyeVNlZWRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVNlZWRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID0gZGF0YS5oYXJ2ZXN0SW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubWF4SGFydmVzdCA9IGRhdGEubWF4SGFydmVzdCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlU3RyYXdiZXJyeVNlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5U2VlZFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQ7XG4gIH1cbiAgbG9hZE1pbGtDb3dGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa0Nvd1wiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5oYXJ2ZXN0SW50ZXJ2YWwgPSBkYXRhLmhhcnZlc3RJbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBkYXRhLm1heEhhcnZlc3QgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlTWlsa0Nvd0RhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtDb3dcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm1pbGtDb3c7XG4gIH1cblxuICBsb2FkV29rZXJGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2VyXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLndvcmtpbmdJbnRlcnZhbCA9IGRhdGEud29ya2luZ0ludGVydmFsIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgfVxuICBnZXRTYXZlV29ya2VyRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2VyXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS53b3JrZXI7XG4gIH1cbiAgbG9hZE1hY2hpbmVGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWFjaGluZVwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgPSBkYXRhLmxldmVsIHx8IDE7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUuc3VwcG9ydCA9IGRhdGEuc3VwcG9ydCB8fCAxMDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2UgPSBkYXRhLnVwZ3JhZGVQcmljZSB8fCA1MDA7XG4gIH1cbiAgZ2V0U2F2ZU1hY2hpbmVEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJtYWNoaW5lXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5tYWNoaW5lO1xuICB9XG4gIGxvYWRHb2xkRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcImdvbGRcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLmdvbGQgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZUdvbGREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJnb2xkXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nb2xkO1xuICB9XG4gIGxvYWRUaW1lU3RhbXBGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widGltZXN0YW1wXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50aW1lc3RhbXAgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVRpbWVTdGFtcERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInRpbWVzdGFtcFwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudGltZXN0YW1wO1xuICB9XG5cbiAgbG9hZFdvcmtpbmdXb3JrZXJOdW1iZXJGcm9tU2F2ZShcbiAgICBkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2luZ1dvcmtlck51bWJlclwiXT5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSBkYXRhIHx8IDA7XG4gIH1cbiAgZ2V0U2F2ZVdvcmtpbmdXb3JrZXJOdW1iZXJEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ3b3JraW5nV29ya2VyTnVtYmVyXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyO1xuICB9XG4gIGxvYWRUb21hdG9Gcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvXCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLnNlbGxQcmljZSA9IGRhdGEuc2VsbFByaWNlIHx8IDU7XG4gIH1cbiAgZ2V0U2F2ZVRvbWF0b0RhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInRvbWF0b1wiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UudG9tYXRvO1xuICB9XG4gIGxvYWRCbHVlYmVycnlGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5XCJdPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5LnNlbGxQcmljZSA9IGRhdGEuc2VsbFByaWNlIHx8IDg7XG4gIH1cbiAgZ2V0U2F2ZUJsdWViZXJyeURhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImJsdWViZXJyeVwiXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5O1xuICB9XG4gIGxvYWRTdHJhd2JlcnJ5RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnkuc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgMTA7XG4gIH1cbiAgZ2V0U2F2ZVN0cmF3YmVycnlEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5O1xuICB9XG4gIGxvYWRNaWxrRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcIm1pbGtcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsuc2VsbFByaWNlID0gZGF0YS5zZWxsUHJpY2UgfHwgMTU7XG4gIH1cbiAgZ2V0U2F2ZU1pbGtEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5taWxrO1xuICB9XG5cbiAgbG9hZExhbmRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wibGFuZFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgPVxuICAgICAgZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLmN1cnJlbnRBc3NldCA9IGRhdGEuY3VycmVudEFzc2V0IHx8IG5ldyBUb21hdG9TZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayB8fCB0cnVlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmxhbmQuaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSB8fCB0cnVlO1xuICAgIHRoaXMuc3RvcmFnZS5sYW5kLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5zdG9yYWdlLmxhbmQucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGUgfHwgbnVsbDtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZC5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlIHx8IG51bGw7XG4gIH1cbiAgZ2V0U2F2ZUxhbmREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJsYW5kXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5sYW5kO1xuICB9XG5cbiAgbG9hZFF1ZXVlSW5kZXhBcnJheUZyb21TYXZlKFxuICAgIGRhdGE6IFBhcnRpYWw8U2F2ZVF1ZXVlRGF0YVtcInF1ZXVlSW5kZXhBcnJheVwiXT5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5xdWV1ZUluZGV4QXJyYXkgPSBkYXRhIHx8IFtdO1xuICB9XG4gIGdldFNhdmVRdWV1ZUluZGV4QXJyYXlEYXRhKCk6IFBhcnRpYWw8U2F2ZVF1ZXVlRGF0YVtcInF1ZXVlSW5kZXhBcnJheVwiXT4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlSW5kZXhBcnJheTtcbiAgfVxuXG4gIGxvYWRMYW5kMEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQwRGF0YVtcImxhbmRfMFwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5uYW1lID0gZGF0YS5uYW1lID8/IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVswXS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbMF0udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzBdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVswXS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kMERhdGEoKTogUGFydGlhbDxTYXZlTGFuZDBEYXRhW1wibGFuZF8wXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzBdO1xuICB9XG5cbiAgbG9hZExhbmQxRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDFEYXRhW1wibGFuZF8xXCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzFdLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzFdLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzFdLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVsxXS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMV0ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzFdLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzFdLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQxRGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kMURhdGFbXCJsYW5kXzFcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbMV07XG4gIH1cblxuICBsb2FkTGFuZDJGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kMkRhdGFbXCJsYW5kXzJcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzJdLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVsyXS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbMl0uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDJEYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQyRGF0YVtcImxhbmRfMlwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVsyXTtcbiAgfVxuXG4gIGxvYWRMYW5kM0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQzRGF0YVtcImxhbmRfM1wiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVszXS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbM10udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzNdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVszXS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kM0RhdGEoKTogUGFydGlhbDxTYXZlTGFuZDNEYXRhW1wibGFuZF8zXCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzNdO1xuICB9XG5cbiAgbG9hZExhbmQ0RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDREYXRhW1wibGFuZF80XCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzRdLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzRdLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzRdLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVs0XS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNF0ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzRdLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzRdLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQ0RGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kNERhdGFbXCJsYW5kXzRcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbNF07XG4gIH1cblxuICBsb2FkTGFuZDVGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kNURhdGFbXCJsYW5kXzVcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzVdLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs1XS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbNV0uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDVEYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQ1RGF0YVtcImxhbmRfNVwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVs1XTtcbiAgfVxuXG4gIGxvYWRMYW5kNkZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZUxhbmQ2RGF0YVtcImxhbmRfNlwiXT4pOiB2b2lkIHtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5uYW1lID0gZGF0YS5uYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0ubnVtYmVyID0gZGF0YS5udW1iZXIgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5taXNzaW9uTnVtYmVyID0gZGF0YS5taXNzaW9uTnVtYmVyIHx8IDE7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0uY29udGFpbkludGVydmFsID0gZGF0YS5jb250YWluSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5idXlQcmljZSA9IGRhdGEuYnV5UHJpY2UgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5jb250YWluWWllbGQgPSBkYXRhLmNvbnRhaW5ZaWVsZCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmN1cnJlbnRBc3NldCA9XG4gICAgICBkYXRhLmN1cnJlbnRBc3NldCA/PyB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5jcm9wID0gZGF0YS5jcm9wIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0ud29ya2VyQWN0aW9uID1cbiAgICAgIGRhdGEud29ya2VyQWN0aW9uIHx8IFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS53b3JraW5nVGltZSA9IGRhdGEud29ya2luZ1RpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5pc1JlYWR5VG9Xb3JrID0gZGF0YS5pc1JlYWR5VG9Xb3JrID8/IHRydWU7XG5cbiAgICB0aGlzLmxhbmRBcnJheVs2XS5pc0VtcHR5ID0gZGF0YS5pc0VtcHR5ID8/IHRydWU7XG4gICAgdGhpcy5sYW5kQXJyYXlbNl0udGltZSA9IGRhdGEudGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzZdLmxhbmRTdGF0ZSA9IGRhdGEubGFuZFN0YXRlIHx8IExhbmRTdGF0ZS5FbXB0eTtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5wbGFudFR5cGUgPSBkYXRhLnBsYW50VHlwZTtcbiAgICB0aGlzLmxhbmRBcnJheVs2XS5jYXR0bGVUeXBlID0gZGF0YS5jYXR0bGVUeXBlO1xuICB9XG4gIGdldFNhdmVMYW5kNkRhdGEoKTogUGFydGlhbDxTYXZlTGFuZDZEYXRhW1wibGFuZF82XCJdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZEFycmF5WzZdO1xuICB9XG5cbiAgbG9hZExhbmQ3RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlTGFuZDdEYXRhW1wibGFuZF83XCJdPik6IHZvaWQge1xuICAgIHRoaXMubGFuZEFycmF5WzddLm5hbWUgPSBkYXRhLm5hbWUgfHwgXCJcIjtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS5udW1iZXIgPSBkYXRhLm51bWJlciB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLm1pc3Npb25OdW1iZXIgPSBkYXRhLm1pc3Npb25OdW1iZXIgfHwgMTtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS5jb250YWluSW50ZXJ2YWwgPSBkYXRhLmNvbnRhaW5JbnRlcnZhbCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmJ1eVByaWNlID0gZGF0YS5idXlQcmljZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmNvbnRhaW5ZaWVsZCA9IGRhdGEuY29udGFpbllpZWxkIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10uY3VycmVudEFzc2V0ID1cbiAgICAgIGRhdGEuY3VycmVudEFzc2V0ID8/IHRoaXMuc3RvcmFnZS50b21hdG9TZWVkO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmNyb3AgPSBkYXRhLmNyb3AgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS53b3JrZXJBY3Rpb24gPVxuICAgICAgZGF0YS53b3JrZXJBY3Rpb24gfHwgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgIHRoaXMubGFuZEFycmF5WzddLndvcmtpbmdUaW1lID0gZGF0YS53b3JraW5nVGltZSB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmlzUmVhZHlUb1dvcmsgPSBkYXRhLmlzUmVhZHlUb1dvcmsgPz8gdHJ1ZTtcblxuICAgIHRoaXMubGFuZEFycmF5WzddLmlzRW1wdHkgPSBkYXRhLmlzRW1wdHkgPz8gdHJ1ZTtcbiAgICB0aGlzLmxhbmRBcnJheVs3XS50aW1lID0gZGF0YS50aW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbN10ubGFuZFN0YXRlID0gZGF0YS5sYW5kU3RhdGUgfHwgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMubGFuZEFycmF5WzddLnBsYW50VHlwZSA9IGRhdGEucGxhbnRUeXBlO1xuICAgIHRoaXMubGFuZEFycmF5WzddLmNhdHRsZVR5cGUgPSBkYXRhLmNhdHRsZVR5cGU7XG4gIH1cbiAgZ2V0U2F2ZUxhbmQ3RGF0YSgpOiBQYXJ0aWFsPFNhdmVMYW5kN0RhdGFbXCJsYW5kXzdcIl0+IHtcbiAgICByZXR1cm4gdGhpcy5sYW5kQXJyYXlbN107XG4gIH1cblxuICBsb2FkTGFuZDhGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVMYW5kOERhdGFbXCJsYW5kXzhcIl0+KTogdm9pZCB7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ubmFtZSA9IGRhdGEubmFtZSB8fCBcIlwiO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLm51bWJlciA9IGRhdGEubnVtYmVyIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ubWlzc2lvbk51bWJlciA9IGRhdGEubWlzc2lvbk51bWJlciB8fCAxO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLmNvbnRhaW5JbnRlcnZhbCA9IGRhdGEuY29udGFpbkludGVydmFsIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uYnV5UHJpY2UgPSBkYXRhLmJ1eVByaWNlIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uY29udGFpbllpZWxkID0gZGF0YS5jb250YWluWWllbGQgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5jdXJyZW50QXNzZXQgPVxuICAgICAgZGF0YS5jdXJyZW50QXNzZXQgPz8gdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uY3JvcCA9IGRhdGEuY3JvcCB8fCAwO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLndvcmtlckFjdGlvbiA9XG4gICAgICBkYXRhLndvcmtlckFjdGlvbiB8fCBXb3JrZXJBY3Rpb24uVG9tYXRvUGxhbnQ7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ud29ya2luZ1RpbWUgPSBkYXRhLndvcmtpbmdUaW1lIHx8IDA7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uaXNSZWFkeVRvV29yayA9IGRhdGEuaXNSZWFkeVRvV29yayA/PyB0cnVlO1xuXG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uaXNFbXB0eSA9IGRhdGEuaXNFbXB0eSA/PyB0cnVlO1xuICAgIHRoaXMubGFuZEFycmF5WzhdLnRpbWUgPSBkYXRhLnRpbWUgfHwgMDtcbiAgICB0aGlzLmxhbmRBcnJheVs4XS5sYW5kU3RhdGUgPSBkYXRhLmxhbmRTdGF0ZSB8fCBMYW5kU3RhdGUuRW1wdHk7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0ucGxhbnRUeXBlID0gZGF0YS5wbGFudFR5cGU7XG4gICAgdGhpcy5sYW5kQXJyYXlbOF0uY2F0dGxlVHlwZSA9IGRhdGEuY2F0dGxlVHlwZTtcbiAgfVxuICBnZXRTYXZlTGFuZDhEYXRhKCk6IFBhcnRpYWw8U2F2ZUxhbmQ4RGF0YVtcImxhbmRfOFwiXT4ge1xuICAgIHJldHVybiB0aGlzLmxhbmRBcnJheVs4XTtcbiAgfVxuICBpbml0KC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICB0aGlzLnN0b3JlID0gbmV3IFN0b3JlKHRoaXMuc3RvcmFnZSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCA9IG5ldyBUb21hdG9TZWVkKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQgPSBuZXcgQmx1ZWJlcnJ5U2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZCA9IG5ldyBTdHJhd2JlcnJ5U2VlZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293ID0gbmV3IE1pbGtDb3coKTtcbiAgICB0aGlzLnN0b3JhZ2UuY293ID0gbmV3IENvdygpO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUgPSBuZXcgTWFjaGluZSgpO1xuXG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0byA9IG5ldyBUb21hdG8oKTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5ID0gbmV3IEJsdWViZXJyeSgpO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5ID0gbmV3IFN0cmF3YmVycnkoKTtcbiAgICB0aGlzLnN0b3JhZ2UubWlsayA9IG5ldyBNaWxrKCk7XG4gICAgdGhpcy5zdG9yYWdlLmJlZWYgPSBuZXcgQmVlZigpO1xuICB9XG4gIHN0b3JlOiBTdG9yZTtcbiAgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzdGFydExhbmROdW1iZXI6IG51bWJlcjtcblxuICBxdWV1ZUluZGV4QXJyYXk6IG51bWJlcltdID0gW107XG4gIGxhbmRBcnJheTogTGFuZFtdID0gW107XG5cbiAgYXN5bmMgc2V0RGF0YSgpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5zdG9yYWdlLmdvbGQgPSAyMDAwMDtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2luZ1dvcmtlck51bWJlciA9IDA7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5udW1iZXIgPSBGaXJzdENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeVNlZWQuYnV5UHJpY2UgPSBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLmJsdWViZXJyeXNlZWQubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA9IEZpcnN0Q29uZmlncy50b21hdG9zZWVkLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lID0gUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG9TZWVkLmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0b1NlZWQubWF4SGFydmVzdCA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubmFtZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZSA9IFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQuaGFydmVzdEludGVydmFsID1cbiAgICAgIFBsYW50Q29uZmlncy5zdHJhd2JlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWw7XG4gICAgdGhpcy5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm1heEhhcnZlc3QgPVxuICAgICAgUGxhbnRDb25maWdzLnN0cmF3YmVycnlzZWVkLm1heEhhcnZlc3Q7XG5cbiAgICB0aGlzLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIgPSBGaXJzdENvbmZpZ3MubWlsa2Nvdy5udW1iZXI7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGtDb3cubmFtZSA9IENhdHRsZUNvbmZpZ3MubWlsa2Nvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmJ1eVByaWNlID0gQ2F0dGxlQ29uZmlncy5taWxrY293LmJ1eVByaWNlO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293LmhhcnZlc3RJbnRlcnZhbCA9XG4gICAgICBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS5taWxrQ293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLm1pbGtjb3cubWF4SGFydmVzdDtcblxuICAgIHRoaXMuc3RvcmFnZS5jb3cubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm5hbWUgPSBDYXR0bGVDb25maWdzLmNvdy5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5jb3cuYnV5UHJpY2UgPSBDYXR0bGVDb25maWdzLmNvdy5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2UuY293LmhhcnZlc3RJbnRlcnZhbCA9IENhdHRsZUNvbmZpZ3MuY293LmhhcnZlc3RJbnRlcnZhbDtcbiAgICB0aGlzLnN0b3JhZ2UuY293Lm1heEhhcnZlc3QgPSBDYXR0bGVDb25maWdzLmNvdy5tYXhIYXJ2ZXN0O1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtlci5udW1iZXIgPSBGaXJzdENvbmZpZ3Mud29ya2VyLm51bWJlcjtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLm5hbWUgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIud29ya2luZ0ludGVydmFsID0gV29ya2VyQ29uZmlncy5taWRkbGUud29ya2luZ0ludGVydmFsO1xuICAgIHRoaXMuc3RvcmFnZS53b3JrZXIuYnV5UHJpY2UgPSBXb3JrZXJDb25maWdzLm1pZGRsZS5idXlQcmljZTtcbiAgICB0aGlzLnN0b3JhZ2Uud29ya2VyLmlzQnVzeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXIgPSAwO1xuXG4gICAgdGhpcy5zdG9yYWdlLm1hY2hpbmUubGV2ZWwgPSBNYWNoaW5lQ29uZmlncy5jaGluYS5sZXZlbDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5uYW1lID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS5zdXBwb3J0ID0gTWFjaGluZUNvbmZpZ3MuY2hpbmEuc3VwcG9ydDtcbiAgICB0aGlzLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2UgPSBNYWNoaW5lQ29uZmlncy5jaGluYS51cGdyYWRlUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UudG9tYXRvLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLnRvbWF0by5uYW1lID0gWWllbGRDb25maWdzLnRvbWF0by5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS50b21hdG8uc2VsbFByaWNlID0gWWllbGRDb25maWdzLnRvbWF0by5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLmJsdWViZXJyeS5uYW1lID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5ibHVlYmVycnkuc2VsbFByaWNlID0gWWllbGRDb25maWdzLmJsdWViZXJyeS5zZWxsUHJpY2U7XG5cbiAgICB0aGlzLnN0b3JhZ2Uuc3RyYXdiZXJyeS5udW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5Lm5hbWUgPSBZaWVsZENvbmZpZ3Muc3RyYXdiZXJyeS5uYW1lO1xuICAgIHRoaXMuc3RvcmFnZS5zdHJhd2JlcnJ5LnNlbGxQcmljZSA9IFlpZWxkQ29uZmlncy5zdHJhd2JlcnJ5LnNlbGxQcmljZTtcblxuICAgIHRoaXMuc3RvcmFnZS5taWxrLm51bWJlciA9IDA7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsubmFtZSA9IFlpZWxkQ29uZmlncy5taWxrLm5hbWU7XG4gICAgdGhpcy5zdG9yYWdlLm1pbGsuc2VsbFByaWNlID0gWWllbGRDb25maWdzLm1pbGsuc2VsbFByaWNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmJlZWYubnVtYmVyID0gMDtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5uYW1lID0gWWllbGRDb25maWdzLmJlZWYubmFtZTtcbiAgICB0aGlzLnN0b3JhZ2UuYmVlZi5zZWxsUHJpY2UgPSBZaWVsZENvbmZpZ3MuYmVlZi5zZWxsUHJpY2U7XG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgYXdhaXQgbG9hZEZpcnN0Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRDYXR0bGVDb25maWdGcm9tQ1NWKCk7XG4gICAgYXdhaXQgbG9hZFBsYW50Q29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRMYW5kQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YoKTtcbiAgICBhd2FpdCBsb2FkV29ya2VyQ29uZmlnRnJvbUNTVigpO1xuICAgIGF3YWl0IGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVigpO1xuICB9XG5cbiAgbmV3TGFuZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UubGFuZCA9IG5ldyBMYW5kKFxuICAgICAgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBMYW5kQ29uZmlncy5yZWQubmFtZSxcbiAgICAgIEZpcnN0Q29uZmlncy5sYW5kLm51bWJlcixcbiAgICAgIExhbmRDb25maWdzLnJlZC5taXNzaW9uTnVtYmVyLFxuICAgICAgTGFuZENvbmZpZ3MucmVkLmNvbnRhaW5JbnRlcnZhbCxcbiAgICAgIExhbmRDb25maWdzLnJlZC5idXlQcmljZSxcbiAgICAgIHRydWUsXG4gICAgICAwLFxuICAgICAgTGFuZFN0YXRlLkVtcHR5LFxuICAgICAgUGxhbnRUeXBlLnRvbWF0b1NlZWQsXG4gICAgICBDYXR0bGVUeXBlLk1pbGtjb3csXG4gICAgICB0aGlzLnN0b3JhZ2UudG9tYXRvU2VlZCxcbiAgICAgIDAsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgZ2V0Rmlyc3REYXRhKCkge1xuICAgIHJldHVybiBGaXJzdENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFBsYW50RGF0YSgpIHtcbiAgICByZXR1cm4gUGxhbnRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRMYW5kRGF0YSgpIHtcbiAgICByZXR1cm4gTGFuZENvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldENhdHRsZURhdGEoKSB7XG4gICAgcmV0dXJuIENhdHRsZUNvbmZpZ3M7XG4gIH1cbiAgcHVibGljIGdldFlpZWxkRGF0YSgpIHtcbiAgICByZXR1cm4gWWllbGRDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRXb3JrZXJEYXRhKCkge1xuICAgIHJldHVybiBXb3JrZXJDb25maWdzO1xuICB9XG4gIHB1YmxpYyBnZXRNYWNoaW5lRGF0YSgpIHtcbiAgICByZXR1cm4gTWFjaGluZUNvbmZpZ3M7XG4gIH1cbn1cbiJdfQ==
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
                                buyPrice: parseInt(row.buyPrice),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGEvR2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHFEQUFvRDtBQUNwRCxtREFBa0Q7QUFDbEQsaURBQWdEO0FBQ2hELHFEQUFvRDtBQUNwRCx1REFBc0Q7QUFDdEQseUNBQXdDO0FBQ3hDLGdEQUErQztBQXVDbEMsUUFBQSxZQUFZO0lBQ3ZCLEdBQUMscUJBQVMsQ0FBQyxVQUFVLElBQUc7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHFCQUFTLENBQUMsYUFBYSxJQUFHO1FBQ3pCLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBQ0QsR0FBQyxxQkFBUyxDQUFDLGNBQWMsSUFBRztRQUMxQixJQUFJLEVBQUUsRUFBRTtRQUNSLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLENBQUM7S0FDWjtRQUNEO0FBQ1csUUFBQSxhQUFhO0lBQ3hCLEdBQUMsdUJBQVUsQ0FBQyxPQUFPLElBQUc7UUFDcEIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHVCQUFVLENBQUMsR0FBRyxJQUFHO1FBQ2hCLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO1FBQ0Q7QUFDVyxRQUFBLFlBQVk7SUFDdkIsR0FBQyxxQkFBUyxDQUFDLE1BQU0sSUFBRztRQUNsQixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxDQUFDO0tBQ2I7SUFDRCxHQUFDLHFCQUFTLENBQUMsU0FBUyxJQUFHO1FBQ3JCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLENBQUM7S0FDYjtJQUNELEdBQUMscUJBQVMsQ0FBQyxVQUFVLElBQUc7UUFDdEIsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsQ0FBQztLQUNiO0lBQ0QsR0FBQyxxQkFBUyxDQUFDLElBQUksSUFBRztRQUNoQixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxDQUFDO0tBQ2I7SUFDRCxHQUFDLHFCQUFTLENBQUMsSUFBSSxJQUFHO1FBQ2hCLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLENBQUM7S0FDYjtRQUNEO0FBQ1csUUFBQSxXQUFXO0lBQ3RCLEdBQUMsbUJBQVEsQ0FBQyxHQUFHLElBQUc7UUFDZCxJQUFJLEVBQUUsRUFBRTtRQUNSLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLG1CQUFRLENBQUMsS0FBSyxJQUFHO1FBQ2hCLElBQUksRUFBRSxFQUFFO1FBQ1IsYUFBYSxFQUFFLENBQUM7UUFDaEIsZUFBZSxFQUFFLENBQUM7UUFDbEIsUUFBUSxFQUFFLENBQUM7S0FDWjtJQUNELEdBQUMsbUJBQVEsQ0FBQyxLQUFLLElBQUc7UUFDaEIsSUFBSSxFQUFFLEVBQUU7UUFDUixhQUFhLEVBQUUsQ0FBQztRQUNoQixlQUFlLEVBQUUsQ0FBQztRQUNsQixRQUFRLEVBQUUsQ0FBQztLQUNaO1FBQ0Q7QUFFVyxRQUFBLGFBQWE7SUFDeEIsR0FBQyx1QkFBVSxDQUFDLE9BQU8sSUFBRztRQUNwQixJQUFJLEVBQUUsRUFBRTtRQUNSLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxHQUFDLHVCQUFVLENBQUMsTUFBTSxJQUFHO1FBQ25CLElBQUksRUFBRSxFQUFFO1FBQ1IsZUFBZSxFQUFFLENBQUM7UUFDbEIsUUFBUSxFQUFFLENBQUM7S0FDWjtJQUNELEdBQUMsdUJBQVUsQ0FBQyxNQUFNLElBQUc7UUFDbkIsSUFBSSxFQUFFLEVBQUU7UUFDUixlQUFlLEVBQUUsQ0FBQztRQUNsQixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBQ0QsR0FBQyx1QkFBVSxDQUFDLE1BQU0sSUFBRztRQUNuQixJQUFJLEVBQUUsRUFBRTtRQUNSLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO0tBQ1o7UUFDRDtBQUNXLFFBQUEsY0FBYztJQUN6QixHQUFDLHlCQUFXLENBQUMsS0FBSyxJQUFHO1FBQ25CLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztRQUNWLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsR0FBQyx5QkFBVyxDQUFDLEtBQUssSUFBRztRQUNuQixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUM7UUFDVixZQUFZLEVBQUUsQ0FBQztLQUNoQjtJQUNELEdBQUMseUJBQVcsQ0FBQyxPQUFPLElBQUc7UUFDckIsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDO1FBQ1YsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFDRCxHQUFDLHlCQUFXLENBQUMsT0FBTyxJQUFHO1FBQ3JCLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQztRQUNWLFlBQVksRUFBRSxDQUFDO0tBQ2hCO1FBQ0Q7QUFDVyxRQUFBLFlBQVk7SUFDdkIsR0FBQyxXQUFJLENBQUMsSUFBSSxJQUFHO1FBQ1gsSUFBSSxFQUFFLEVBQUU7UUFDUixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBQ0QsR0FBQyxXQUFJLENBQUMsVUFBVSxJQUFHO1FBQ2pCLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUNELEdBQUMsV0FBSSxDQUFDLGFBQWEsSUFBRztRQUNwQixJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFDRCxHQUFDLFdBQUksQ0FBQyxPQUFPLElBQUc7UUFDZCxJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFDRCxHQUFDLFdBQUksQ0FBQyxNQUFNLElBQUc7UUFDYixJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFDRCxHQUFDLFdBQUksQ0FBQyxPQUFPLElBQUc7UUFDZCxJQUFJLEVBQUUsRUFBRTtRQUNSLE1BQU0sRUFBRSxDQUFDO0tBQ1Y7UUFDRDtBQUNGLFNBQXNCLHNCQUFzQjttQ0FBSSxPQUFPOzs7O3dCQUNyQyxxQkFBTSxxQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQTs7b0JBQXZDLE9BQU8sR0FBRyxTQUE2QjtvQkFFN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQ2xCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFVLENBQUM7d0JBRTVDLElBQUksb0JBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDdEIsb0JBQVksQ0FBQyxJQUFJLENBQUMsR0FBRztnQ0FDbkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2dDQUNkLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs2QkFDN0IsQ0FBQzt5QkFDSDtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLG9CQUFZLENBQUMsQ0FBQzs7Ozs7Q0FDekQ7QUFmRCx3REFlQztBQUVELFNBQXNCLHNCQUFzQjttQ0FBSSxPQUFPOzs7O3dCQUNyQyxxQkFBTSxxQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7b0JBQXhDLE9BQU8sR0FBRyxTQUE4QjtvQkFFOUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQ2xCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFlLENBQUM7d0JBRWpELElBQUksb0JBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDdEIsb0JBQVksQ0FBQyxJQUFJLENBQUMsR0FBRztnQ0FDbkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2dDQUNkLGVBQWUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztnQ0FDaEQsVUFBVSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dDQUNwQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7NkJBQ2pDLENBQUM7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxvQkFBWSxDQUFDLENBQUM7Ozs7O0NBQ3pEO0FBakJELHdEQWlCQztBQUVELFNBQXNCLHVCQUF1QjttQ0FBSSxPQUFPOzs7O3dCQUN0QyxxQkFBTSxxQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQTs7b0JBQXpDLE9BQU8sR0FBRyxTQUErQjtvQkFFL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQ2xCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFnQixDQUFDO3dCQUVsRCxJQUFJLHFCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3ZCLHFCQUFhLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0NBQ3BCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQ0FDZCxlQUFlLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7Z0NBQ2hELFVBQVUsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQ0FDcEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOzZCQUNqQyxDQUFDO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUscUJBQWEsQ0FBQyxDQUFDOzs7OztDQUMzRDtBQWpCRCwwREFpQkM7QUFFRCxTQUFzQixzQkFBc0I7bUNBQUksT0FBTzs7Ozt3QkFDckMscUJBQU0scUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O29CQUF4QyxPQUFPLEdBQUcsU0FBOEI7b0JBRTlDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO3dCQUNsQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBZSxDQUFDO3dCQUVqRCxJQUFJLG9CQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3RCLG9CQUFZLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0NBQ25CLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQ0FDZCxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7NkJBQ25DLENBQUM7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxvQkFBWSxDQUFDLENBQUM7Ozs7O0NBQ3pEO0FBZkQsd0RBZUM7QUFDRCxTQUFzQix1QkFBdUI7bUNBQUksT0FBTzs7Ozt3QkFDdEMscUJBQU0scUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUE7O29CQUF6QyxPQUFPLEdBQUcsU0FBK0I7b0JBRS9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO3dCQUNsQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBZ0IsQ0FBQzt3QkFFbEQsSUFBSSxxQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUN2QixxQkFBYSxDQUFDLElBQUksQ0FBQyxHQUFHO2dDQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7Z0NBQ2QsZUFBZSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO2dDQUNoRCxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7NkJBQ2pDLENBQUM7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxxQkFBYSxDQUFDLENBQUM7Ozs7O0NBQzNEO0FBaEJELDBEQWdCQztBQUVELFNBQXNCLHdCQUF3QjttQ0FBSSxPQUFPOzs7O3dCQUN2QyxxQkFBTSxxQkFBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQTs7b0JBQTFDLE9BQU8sR0FBRyxTQUFnQztvQkFFaEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQ2xCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFpQixDQUFDO3dCQUVuRCxJQUFJLHNCQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3hCLHNCQUFjLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0NBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQ0FDZCxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0NBQzFCLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQ0FDaEMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDOzZCQUN6QyxDQUFDO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsc0JBQWMsQ0FBQyxDQUFDOzs7OztDQUM3RDtBQWpCRCw0REFpQkM7QUFDRCxTQUFzQixxQkFBcUI7bUNBQUksT0FBTzs7Ozt3QkFDcEMscUJBQU0scUJBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUE7O29CQUF2QyxPQUFPLEdBQUcsU0FBNkI7b0JBRTdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO3dCQUNsQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBYyxDQUFDO3dCQUVoRCxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3JCLG1CQUFXLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0NBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtnQ0FDZCxhQUFhLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0NBQzFDLGVBQWUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztnQ0FDOUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOzZCQUNqQyxDQUFDO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsbUJBQVcsQ0FBQyxDQUFDOzs7OztDQUN2RDtBQWpCRCxzREFpQkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBDYXR0bGVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0NhdHRsZVR5cGVcIjtcbmltcG9ydCB7IFlpZWxkVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9ZaWVsZFR5cGVcIjtcbmltcG9ydCB7IExhbmRUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL0xhbmRUeXBlXCI7XG5pbXBvcnQgeyBXb3JrZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1dvcmtlclR5cGVcIjtcbmltcG9ydCB7IE1hY2hpbmVUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL01hY2hpbmVUeXBlXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW1zL1R5cGVcIjtcbmltcG9ydCB7IENTVkxvYWRlciB9IGZyb20gXCIuLi91dGlscy9DU1ZMb2FkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGaXJzdENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFlpZWxkQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0dGxlQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBQbGFudENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZENvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbWlzc2lvbk51bWJlcjogbnVtYmVyO1xuICBjb250YWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV29ya2VyQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB3b3JraW5nSW50ZXJ2YWw6IG51bWJlcjtcbiAgYnV5UHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFjaGluZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgc3VwcG9ydDogbnVtYmVyO1xuICB1cGdyYWRlUHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBQbGFudENvbmZpZ3M6IFJlY29yZDxQbGFudFR5cGUsIFBsYW50Q29uZmlnPiA9IHtcbiAgW1BsYW50VHlwZS50b21hdG9TZWVkXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtQbGFudFR5cGUuYmx1ZWJlcnJ5U2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGhhcnZlc3RJbnRlcnZhbDogMCxcbiAgICBtYXhIYXJ2ZXN0OiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbUGxhbnRUeXBlLnN0cmF3YmVycnlTZWVkXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IENhdHRsZUNvbmZpZ3M6IFJlY29yZDxDYXR0bGVUeXBlLCBDYXR0bGVDb25maWc+ID0ge1xuICBbQ2F0dGxlVHlwZS5NaWxrY293XToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgaGFydmVzdEludGVydmFsOiAwLFxuICAgIG1heEhhcnZlc3Q6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtDYXR0bGVUeXBlLkNvd106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGhhcnZlc3RJbnRlcnZhbDogMCxcbiAgICBtYXhIYXJ2ZXN0OiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBZaWVsZENvbmZpZ3M6IFJlY29yZDxZaWVsZFR5cGUsIFlpZWxkQ29uZmlnPiA9IHtcbiAgW1lpZWxkVHlwZS5Ub21hdG9dOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBzZWxsUHJpY2U6IDAsXG4gIH0sXG4gIFtZaWVsZFR5cGUuQmx1ZWJlcnJ5XToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgc2VsbFByaWNlOiAwLFxuICB9LFxuICBbWWllbGRUeXBlLlN0cmF3YmVycnldOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBzZWxsUHJpY2U6IDAsXG4gIH0sXG4gIFtZaWVsZFR5cGUuTWlsa106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHNlbGxQcmljZTogMCxcbiAgfSxcbiAgW1lpZWxkVHlwZS5CZWVmXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgc2VsbFByaWNlOiAwLFxuICB9LFxufTtcbmV4cG9ydCBjb25zdCBMYW5kQ29uZmlnczogUmVjb3JkPExhbmRUeXBlLCBMYW5kQ29uZmlnPiA9IHtcbiAgW0xhbmRUeXBlLlJlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG1pc3Npb25OdW1iZXI6IDAsXG4gICAgY29udGFpbkludGVydmFsOiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbTGFuZFR5cGUuR3JlZW5dOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBtaXNzaW9uTnVtYmVyOiAwLFxuICAgIGNvbnRhaW5JbnRlcnZhbDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW0xhbmRUeXBlLkJyb3duXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbWlzc2lvbk51bWJlcjogMCxcbiAgICBjb250YWluSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgV29ya2VyQ29uZmlnczogUmVjb3JkPFdvcmtlclR5cGUsIFdvcmtlckNvbmZpZz4gPSB7XG4gIFtXb3JrZXJUeXBlLkZyZXNoZXJdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICB3b3JraW5nSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG4gIFtXb3JrZXJUeXBlLkp1bmlvcl06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHdvcmtpbmdJbnRlcnZhbDogMCxcbiAgICBidXlQcmljZTogMCxcbiAgfSxcbiAgW1dvcmtlclR5cGUuTWlkZGxlXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgd29ya2luZ0ludGVydmFsOiAwLFxuICAgIGJ1eVByaWNlOiAwLFxuICB9LFxuICBbV29ya2VyVHlwZS5TZW5pb3JdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICB3b3JraW5nSW50ZXJ2YWw6IDAsXG4gICAgYnV5UHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IE1hY2hpbmVDb25maWdzOiBSZWNvcmQ8TWFjaGluZVR5cGUsIE1hY2hpbmVDb25maWc+ID0ge1xuICBbTWFjaGluZVR5cGUuQ2hpbmFdOiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBsZXZlbDogMCxcbiAgICBzdXBwb3J0OiAwLFxuICAgIHVwZ3JhZGVQcmljZTogMCxcbiAgfSxcbiAgW01hY2hpbmVUeXBlLkphcGFuXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG4gIFtNYWNoaW5lVHlwZS5BbWVyaWNhXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG4gIFtNYWNoaW5lVHlwZS5WaWV0bmFtXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGV2ZWw6IDAsXG4gICAgc3VwcG9ydDogMCxcbiAgICB1cGdyYWRlUHJpY2U6IDAsXG4gIH0sXG59O1xuZXhwb3J0IGNvbnN0IEZpcnN0Q29uZmlnczogUmVjb3JkPFR5cGUsIEZpcnN0Q29uZmlnPiA9IHtcbiAgW1R5cGUuTGFuZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuVG9tYXRvc2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuQmx1ZWJlcnJ5c2VlZF06IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuTWlsa2Nvd106IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG51bWJlcjogMCxcbiAgfSxcbiAgW1R5cGUuV29ya2VyXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICB9LFxuICBbVHlwZS5NYWNoaW5lXToge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbnVtYmVyOiAwLFxuICB9LFxufTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRmlyc3RDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJmaXJzdFwiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFR5cGU7XG5cbiAgICBpZiAoRmlyc3RDb25maWdzW3R5cGVdKSB7XG4gICAgICBGaXJzdENvbmZpZ3NbdHlwZV0gPSB7XG4gICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICBudW1iZXI6IHBhcnNlSW50KHJvdy5udW1iZXIpLFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiW0NTVl0gRmlyc3RDb25maWdzIGxvYWRlZDpcIiwgRmlyc3RDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQbGFudENvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcInBsYW50c1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFBsYW50VHlwZTtcblxuICAgIGlmIChQbGFudENvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIFBsYW50Q29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIGhhcnZlc3RJbnRlcnZhbDogcGFyc2VGbG9hdChyb3cuaGFydmVzdEludGVydmFsKSxcbiAgICAgICAgbWF4SGFydmVzdDogcGFyc2VJbnQocm93Lm1heEhhcnZlc3QpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIFBsYW50Q29uZmlncyBsb2FkZWQ6XCIsIFBsYW50Q29uZmlncyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ2F0dGxlQ29uZmlnRnJvbUNTVigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IENTVkxvYWRlci5sb2FkKFwiY2F0dGxlc1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIENhdHRsZVR5cGU7XG5cbiAgICBpZiAoQ2F0dGxlQ29uZmlnc1t0eXBlXSkge1xuICAgICAgQ2F0dGxlQ29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIGhhcnZlc3RJbnRlcnZhbDogcGFyc2VGbG9hdChyb3cuaGFydmVzdEludGVydmFsKSxcbiAgICAgICAgbWF4SGFydmVzdDogcGFyc2VJbnQocm93Lm1heEhhcnZlc3QpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIENhdHRsZUNvbmZpZ3MgbG9hZGVkOlwiLCBDYXR0bGVDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRZaWVsZENvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcInlpZWxkc1wiKTtcblxuICByZWNvcmRzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSByb3cubmFtZS50b0xvd2VyQ2FzZSgpIGFzIFlpZWxkVHlwZTtcblxuICAgIGlmIChZaWVsZENvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIFlpZWxkQ29uZmlnc1t0eXBlXSA9IHtcbiAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgIHNlbGxQcmljZTogcGFyc2VJbnQocm93LnNlbGxQcmljZSksXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbQ1NWXSBZaWVsZENvbmZpZ3MgbG9hZGVkOlwiLCBZaWVsZENvbmZpZ3MpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRXb3JrZXJDb25maWdGcm9tQ1NWKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgQ1NWTG9hZGVyLmxvYWQoXCJ3b3JrZXJzXCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgV29ya2VyVHlwZTtcblxuICAgIGlmIChXb3JrZXJDb25maWdzW3R5cGVdKSB7XG4gICAgICBXb3JrZXJDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgd29ya2luZ0ludGVydmFsOiBwYXJzZUZsb2F0KHJvdy53b3JraW5nSW50ZXJ2YWwpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIFdvcmtlckNvbmZpZ3MgbG9hZGVkOlwiLCBXb3JrZXJDb25maWdzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRNYWNoaW5lQ29uZmlnRnJvbUNTVigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IENTVkxvYWRlci5sb2FkKFwibWFjaGluZXNcIik7XG5cbiAgcmVjb3Jkcy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBjb25zdCB0eXBlID0gcm93Lm5hbWUudG9Mb3dlckNhc2UoKSBhcyBNYWNoaW5lVHlwZTtcblxuICAgIGlmIChNYWNoaW5lQ29uZmlnc1t0eXBlXSkge1xuICAgICAgTWFjaGluZUNvbmZpZ3NbdHlwZV0gPSB7XG4gICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICBsZXZlbDogcGFyc2VJbnQocm93LmxldmVsKSxcbiAgICAgICAgc3VwcG9ydDogcGFyc2VGbG9hdChyb3cuc3VwcG9ydCksXG4gICAgICAgIHVwZ3JhZGVQcmljZTogcGFyc2VJbnQocm93LnVwZ3JhZGVQcmljZSksXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbQ1NWXSBNYWNoaW5lQ29uZmlncyBsb2FkZWQ6XCIsIE1hY2hpbmVDb25maWdzKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkTGFuZENvbmZpZ0Zyb21DU1YoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBDU1ZMb2FkZXIubG9hZChcImxhbmRzXCIpO1xuXG4gIHJlY29yZHMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHJvdy5uYW1lLnRvTG93ZXJDYXNlKCkgYXMgTGFuZFR5cGU7XG5cbiAgICBpZiAoTGFuZENvbmZpZ3NbdHlwZV0pIHtcbiAgICAgIExhbmRDb25maWdzW3R5cGVdID0ge1xuICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgbWlzc2lvbk51bWJlcjogcGFyc2VJbnQocm93Lm1pc3Npb25OdW1iZXIpLFxuICAgICAgICBjb250YWluSW50ZXJ2YWw6IHBhcnNlRmxvYXQocm93LmVtcHR5SW50ZXJ2YWwpLFxuICAgICAgICBidXlQcmljZTogcGFyc2VJbnQocm93LmJ1eVByaWNlKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIltDU1ZdIExhbmRDb25maWdzIGxvYWRlZDpcIiwgTGFuZENvbmZpZ3MpO1xufVxuIl19
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
            var maxHarvest = UIManager_1.default.instance.gameModel.landArray[i].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[i].crop =
                UIManager_1.default.instance.gameModel.landArray[i].currentAsset.maxHarvest;
            UIManager_1.default.instance.gameModel.landArray[i].crop +=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JhZ2UvU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSx1Q0FBK0Q7QUFDL0Qsa0RBQTZDO0FBRTdDO0lBQUE7SUFTQSxDQUFDO0lBSEMsK0JBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBVXZCO0lBQUE7SUFTQSxDQUFDO0lBSEMsa0NBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHNDQUFhO0FBVTFCO0lBQUE7SUFTQSxDQUFDO0lBSEMsbUNBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHdDQUFjO0FBVTNCO0lBQUE7SUFTQSxDQUFDO0lBSEMsNEJBQVUsR0FBVjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsY0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMEJBQU87QUFVcEI7SUFBQTtJQVNBLENBQUM7SUFIQyx3QkFBVSxHQUFWO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxrQkFBRztBQVdoQjtJQUFBO0lBT0EsQ0FBQztJQUhDLDZCQUFZLEdBQVo7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILGFBQUM7QUFBRCxDQVBBLEFBT0Ms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O1lBQ1IsS0FBSyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO2dCQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFZLENBQUMsWUFBWSxDQUFDO2dCQUM5QyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUNILGNBQUM7QUFBRCxDQXBJQSxBQW9JQyxJQUFBO0FBcElZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgeyBJTGFuZCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lMYW5kXCI7XG5pbXBvcnQgeyBJTWFjaGluZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lNYWNoaW5lXCI7XG5pbXBvcnQgeyBJU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lTdG9yYWdlXCI7XG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVdvcmtlclwiO1xuaW1wb3J0IHsgSVlpZWxkIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVlpZWxkXCI7XG5pbXBvcnQgeyBJQXNzZXQgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JQXNzZXRcIjtcbmltcG9ydCBMYW5kVUksIHsgTGFuZFN0YXRlLCBXb3JrZXJBY3Rpb24gfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvU2VlZCBpbXBsZW1lbnRzIElBc3NldCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGhhcnZlc3RJbnRlcnZhbDogbnVtYmVyO1xuICBtYXhIYXJ2ZXN0OiBudW1iZXI7XG4gIGJ1eVByaWNlOiBhbnk7XG4gIHVzZUZvckZhcm0oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCbHVlYmVycnlTZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN0cmF3YmVycnlTZWVkIGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE1pbGtDb3cgaW1wbGVtZW50cyBJQXNzZXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBoYXJ2ZXN0SW50ZXJ2YWw6IG51bWJlcjtcbiAgbWF4SGFydmVzdDogbnVtYmVyO1xuICBidXlQcmljZTogYW55O1xuICB1c2VGb3JGYXJtKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ293IGltcGxlbWVudHMgSUFzc2V0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgaGFydmVzdEludGVydmFsOiBudW1iZXI7XG4gIG1heEhhcnZlc3Q6IG51bWJlcjtcbiAgYnV5UHJpY2U6IGFueTtcbiAgdXNlRm9yRmFybSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9tYXRvIGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJsdWViZXJyeSBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdHJhd2JlcnJ5IGltcGxlbWVudHMgSVlpZWxkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBudW1iZXI6IG51bWJlcjtcbiAgc2VsbFByaWNlOiBudW1iZXI7XG4gIHNlbGxGb3JTdG9yZSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIE1pbGsgaW1wbGVtZW50cyBJWWllbGQge1xuICBuYW1lOiBzdHJpbmc7XG4gIG51bWJlcjogbnVtYmVyO1xuICBzZWxsUHJpY2U6IG51bWJlcjtcbiAgc2VsbEZvclN0b3JlKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmVlZiBpbXBsZW1lbnRzIElZaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHNlbGxQcmljZTogbnVtYmVyO1xuICBzZWxsRm9yU3RvcmUoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmtlciBpbXBsZW1lbnRzIElXb3JrZXIge1xuICBpc0J1c3k6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuICBXb3JrKGxhbmRVSTogTGFuZFVJLCB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbikge1xuICAgIHN3aXRjaCAod29ya2VyQWN0aW9uKSB7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5ZaWVsZGluZzpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tZaWVsZEJ0bigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50OlxuICAgICAgICBsYW5kVUkub25DbGlja1RvbWF0b1NlZWRCdG4oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JrZXIgQ0xpY2sgdG9tYXRvc2VlZGJ0blwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdvcmtlckFjdGlvbi5CbHVlYmVycnlQbGFudDpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uU3RyYXdiZXJyeVBsYW50OlxuICAgICAgICBsYW5kVUkub25DbGlja1N0cmF3YmVycnlTZWVkQnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uTWlsa2Nvd0xpdmVTdG9jazpcbiAgICAgICAgbGFuZFVJLm9uQ2xpY2tNaWxrQ293QnRuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXb3JrZXJBY3Rpb24uQ293TGl2ZVN0b2NrOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFjaGluZSBpbXBsZW1lbnRzIElNYWNoaW5lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBzdXBwb3J0OiBudW1iZXI7XG4gIHVwZ3JhZGVQcmljZTogbnVtYmVyO1xuICBPcGVyYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLnN1cHBvcnQgKiAodGhpcy5sZXZlbCAtIDEpICsgMTAwKSAvIDEwMDtcbiAgfVxuICB1cGdyYWRlUGVyZm9ybWFjZSgpIHtcbiAgICB0aGlzLnN1cHBvcnQgKz0gMTA7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBMYW5kIGltcGxlbWVudHMgSUxhbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICB3b3JrZXJBY3Rpb246IFdvcmtlckFjdGlvbixcbiAgICBjcm9wOiBudW1iZXIsXG4gICAgY29udGFpbllpZWxkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIG51bWJlcjogbnVtYmVyLFxuICAgIG1pc3Npb25OdW1iZXI6IG51bWJlcixcbiAgICBjb250YWluSW50ZXJ2YWw6IG51bWJlcixcbiAgICBidXlQcmljZTogbnVtYmVyLFxuXG4gICAgaXNFbXB0eTogYm9vbGVhbiA9IHRydWUsXG4gICAgdGltZTogbnVtYmVyLFxuICAgIGxhbmRTdGF0ZTogTGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5LFxuICAgIHBsYW50VHlwZTogUGxhbnRUeXBlID0gbnVsbCxcbiAgICBjYXR0bGVUeXBlOiBDYXR0bGVUeXBlID0gbnVsbCxcblxuICAgIGN1cnJlbnRBc3NldDogYW55LFxuXG4gICAgd29ya2luZ1RpbWU6IG51bWJlcixcblxuICAgIGlzUmVhZHlUb1dvcms6IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy53b3JrZXJBY3Rpb24gPSB3b3JrZXJBY3Rpb247XG4gICAgdGhpcy5jcm9wID0gY3JvcDtcbiAgICB0aGlzLmNvbnRhaW5ZaWVsZCA9IGNvbnRhaW5ZaWVsZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMubWlzc2lvbk51bWJlciA9IG1pc3Npb25OdW1iZXI7XG4gICAgdGhpcy5jb250YWluSW50ZXJ2YWwgPSBjb250YWluSW50ZXJ2YWw7XG4gICAgdGhpcy5idXlQcmljZSA9IGJ1eVByaWNlO1xuICAgIHRoaXMuaXNFbXB0eSA9IGlzRW1wdHk7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmxhbmRTdGF0ZSA9IGxhbmRTdGF0ZTtcbiAgICB0aGlzLnBsYW50VHlwZSA9IHBsYW50VHlwZTtcbiAgICB0aGlzLmNhdHRsZVR5cGUgPSBjYXR0bGVUeXBlO1xuICAgIHRoaXMuY3VycmVudEFzc2V0ID0gY3VycmVudEFzc2V0O1xuICAgIHRoaXMud29ya2luZ1RpbWUgPSB3b3JraW5nVGltZTtcbiAgICB0aGlzLmlzUmVhZHlUb1dvcmsgPSBpc1JlYWR5VG9Xb3JrO1xuICB9XG5cbiAgd29ya2VyQWN0aW9uOiBXb3JrZXJBY3Rpb247XG4gIGNyb3A6IG51bWJlcjtcbiAgY29udGFpbllpZWxkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIG1pc3Npb25OdW1iZXI6IG51bWJlcjtcbiAgY29udGFpbkludGVydmFsOiBudW1iZXI7XG4gIGJ1eVByaWNlOiBudW1iZXI7XG5cbiAgaXNFbXB0eTogYm9vbGVhbiA9IHRydWU7XG4gIHRpbWU6IG51bWJlcjtcbiAgbGFuZFN0YXRlOiBMYW5kU3RhdGUgPSBMYW5kU3RhdGUuRW1wdHk7XG4gIHBsYW50VHlwZTogUGxhbnRUeXBlID0gbnVsbDtcbiAgY2F0dGxlVHlwZTogQ2F0dGxlVHlwZSA9IG51bGw7XG5cbiAgY3VycmVudEFzc2V0OiBhbnk7XG5cbiAgd29ya2luZ1RpbWU6IG51bWJlcjtcblxuICBpc1JlYWR5VG9Xb3JrOiBib29sZWFuO1xuXG4gIGNsb25lKCk6IExhbmQge1xuICAgIHJldHVybiBuZXcgTGFuZChcbiAgICAgIHRoaXMud29ya2VyQWN0aW9uLFxuICAgICAgdGhpcy5jcm9wLFxuICAgICAgdGhpcy5jb250YWluWWllbGQsXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLm1pc3Npb25OdW1iZXIsXG4gICAgICB0aGlzLmNvbnRhaW5JbnRlcnZhbCxcbiAgICAgIHRoaXMuYnV5UHJpY2UsXG4gICAgICB0aGlzLm51bWJlcixcbiAgICAgIHRoaXMuaXNFbXB0eSxcbiAgICAgIHRoaXMudGltZSxcbiAgICAgIHRoaXMubGFuZFN0YXRlLFxuICAgICAgdGhpcy5wbGFudFR5cGUsXG4gICAgICB0aGlzLmNhdHRsZVR5cGUsXG4gICAgICB0aGlzLmN1cnJlbnRBc3NldCxcbiAgICAgIHRoaXMud29ya2luZ1RpbWUsXG4gICAgICB0aGlzLmlzUmVhZHlUb1dvcmtcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgd29ya2VyOiBXb3JrZXI7XG5cbiAgbWFjaGluZTogTWFjaGluZTtcbiAgbGFuZDogTGFuZDtcblxuICBnb2xkOiBudW1iZXI7XG4gIHRvbWF0bzogVG9tYXRvO1xuICBibHVlYmVycnk6IEJsdWViZXJyeTtcbiAgc3RyYXdiZXJyeTogU3RyYXdiZXJyeTtcbiAgbWlsazogTWlsaztcbiAgYmVlZjogQmVlZjtcbiAgdG9tYXRvU2VlZDogVG9tYXRvU2VlZDtcbiAgYmx1ZWJlcnJ5U2VlZDogQmx1ZWJlcnJ5U2VlZDtcbiAgc3RyYXdiZXJyeVNlZWQ6IFN0cmF3YmVycnlTZWVkO1xuICBtaWxrQ293OiBNaWxrQ293O1xuICBjb3c6IENvdztcblxuICB3b3JraW5nV29ya2VyTnVtYmVyOiBudW1iZXI7XG4gIGdldElkbGVXb3JrZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud29ya2VyLm51bWJlciAtIHRoaXMud29ya2luZ1dvcmtlck51bWJlcjtcbiAgfVxuICBnZXRXb3JraW5nV29ya2VyKCkge1xuICAgIHJldHVybiB0aGlzLndvcmtpbmdXb3JrZXJOdW1iZXI7XG4gIH1cblxuICBwdWJsaWMgc2VsbFRvbWF0bygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEdvbGQodGhpcy50b21hdG8ubnVtYmVyICogdGhpcy50b21hdG8uc2VsbFByaWNlKTtcbiAgICB0aGlzLnRvbWF0by5udW1iZXIgPSAwO1xuICB9XG4gIHB1YmxpYyBzZWxsQmx1ZWJlcnJ5KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLmJsdWViZXJyeS5udW1iZXIgKiB0aGlzLmJsdWViZXJyeS5zZWxsUHJpY2UpO1xuICAgIHRoaXMuYmx1ZWJlcnJ5Lm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxTdHJhd2JlcnJ5KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLnN0cmF3YmVycnkubnVtYmVyICogdGhpcy5zdHJhd2JlcnJ5LnNlbGxQcmljZSk7XG4gICAgdGhpcy5zdHJhd2JlcnJ5Lm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxNaWxrKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLm1pbGsubnVtYmVyICogdGhpcy5taWxrLnNlbGxQcmljZSk7XG4gICAgdGhpcy5taWxrLm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIHNlbGxCZWVmKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkR29sZCh0aGlzLmJlZWYubnVtYmVyICogdGhpcy5iZWVmLnNlbGxQcmljZSk7XG4gICAgdGhpcy5iZWVmLm51bWJlciA9IDA7XG4gIH1cbiAgcHVibGljIGFkZEdvbGQoX2dvbGQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZ29sZCArPSBfZ29sZDtcbiAgfVxuICBnZXRXb3JrZXJJZGxlKHdvcmtpbmdXb3JrZXJOdW1iZXI6IG51bWJlcikge1xuICAgIGxldCBpZGxlV29ya2VyID0gdGhpcy53b3JrZXIubnVtYmVyIC0gd29ya2luZ1dvcmtlck51bWJlcjtcbiAgICByZXR1cm4gaWRsZVdvcmtlcjtcbiAgfVxuICBwdWJsaWMgZ2V0UGVyZm9ybWFjZU1hY2hpbmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tYWNoaW5lLnN1cHBvcnQ7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9tYXRvU2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvbWF0b1NlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkQmx1ZWJlcnJ5U2VlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWQubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkU3RyYXdiZXJyeVNlZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgKz0gMTA7XG4gIH1cbiAgYWRkTWlsa0NvdygpOiB2b2lkIHtcbiAgICB0aGlzLm1pbGtDb3cubnVtYmVyICs9IDE7XG4gIH1cbiAgYWRkQ293KCk6IHZvaWQge1xuICAgIHRoaXMuY293Lm51bWJlciArPSAxO1xuICB9XG4gIGFkZFdvcmtlcigpOiB2b2lkIHtcbiAgICB0aGlzLndvcmtlci5udW1iZXIgKz0gMTtcbiAgfVxuICB1cGdyYWRlTWFjaGluZSgpOiB2b2lkIHtcbiAgICB0aGlzLm1hY2hpbmUubGV2ZWwgKz0gMTtcbiAgICB0aGlzLm1hY2hpbmUudXBncmFkZVBlcmZvcm1hY2UoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZC5udW1iZXI7IGkrKykge1xuICAgICAgbGV0IG1heEhhcnZlc3QgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtpXS5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W2ldLmNyb3AgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtpXS5jdXJyZW50QXNzZXQubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W2ldLmNyb3AgKz1cbiAgICAgICAgTWF0aC5jZWlsKG1heEhhcnZlc3QgKiB0aGlzLm1hY2hpbmUuT3BlcmF0ZSgpKSAtIG1heEhhcnZlc3Q7XG4gICAgfVxuICB9XG4gIGFkZExhbmQoKTogdm9pZCB7XG4gICAgdGhpcy5sYW5kLm51bWJlciArPSAxO1xuICB9XG5cbiAgcHVibGljIGFkZFRvbWF0byh0b21hdG9OdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudG9tYXRvLm51bWJlciArPSB0b21hdG9OdW1iZXI7XG4gIH1cbiAgYWRkQmx1ZWJlcnJ5KGJsdWViZXJyeU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5ibHVlYmVycnkubnVtYmVyICs9IGJsdWViZXJyeU51bWJlcjtcbiAgfVxuICBhZGRTdHJhd2JlcnJ5KHN0cmF3YmVycnlOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RyYXdiZXJyeS5udW1iZXIgKz0gc3RyYXdiZXJyeU51bWJlcjtcbiAgfVxuICBhZGRNaWxrKG1pbGtOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWlsay5udW1iZXIgKz0gbWlsa051bWJlcjtcbiAgfVxuICBhZGRCZWVmKGJlZWZOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYmVlZi5udW1iZXIgKz0gYmVlZk51bWJlcjtcbiAgfVxuICBhc3NpZ25Xb3JrZXIobGFuZDogTGFuZCkge1xuICAgIGlmIChsYW5kLmNvbnRhaW5ZaWVsZCA+IDApIHtcbiAgICAgIGxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLllpZWxkaW5nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGxhbmQuY3VycmVudEFzc2V0KSB7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQ6XG4gICAgICAgIGxhbmQud29ya2VyQWN0aW9uID0gV29ya2VyQWN0aW9uLlRvbWF0b1BsYW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDpcbiAgICAgICAgbGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uQmx1ZWJlcnJ5UGxhbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDpcbiAgICAgICAgbGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uU3RyYXdiZXJyeVBsYW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdzpcbiAgICAgICAgbGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uTWlsa2Nvd0xpdmVTdG9jaztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmNvdzpcbiAgICAgICAgbGFuZC53b3JrZXJBY3Rpb24gPSBXb3JrZXJBY3Rpb24uQ293TGl2ZVN0b2NrO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1N0b3JhZ2VVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixrREFBNkM7QUFFdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUErSEM7UUE3SEMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFFcEMsaUJBQVcsR0FBYyxJQUFJLENBQUM7O0lBOEZoQyxDQUFDO0lBN0ZDLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixpQkFBaUI7SUFDakIsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxD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QztvREFDWTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0c7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDZ0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDVTtJQWpDWCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0g3QjtJQUFELGdCQUFDO0NBL0hELEFBK0hDLENBL0hzQyxFQUFFLENBQUMsU0FBUyxHQStIbEQ7a0JBL0hvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRvbWF0b1NlZWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBibHVlYmVycnlTZWVkOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3RyYXdiZXJyeVNlZWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBtaWxrQ293OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgd29ya2VySWRsZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHdvcmtlcldvcmtpbmc6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBtYWNoaW5lTGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBnb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdG9tYXRvOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYmx1ZWJlcnJ5OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3RyYXdiZXJyeTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIG1pbGs6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsVG9tYXRvQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsQmx1ZWJlcnJ5QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzZWxsU3RyYXdiZXJyeUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc2VsbE1pbGtCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuXG4gIHN0YXJ0KCkge31cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxuICBzZXR1cFVJKCkge1xuICAgIHRoaXMuc2VsbFRvbWF0b0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zZWxsVG9tYXRvQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTZWxsVG9tYXRvQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5zZWxsQmx1ZWJlcnJ5QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGxCbHVlYmVycnlCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1NlbGxCbHVlYmVycnlCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLnNlbGxTdHJhd2JlcnJ5QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGxTdHJhd2JlcnJ5QnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tTZWxsU3RyYXdiZXJyeUJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc2VsbE1pbGtCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2VsbE1pbGtCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1NlbGxNaWxrQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cbiAgdXBkYXRlVUkoKSB7XG4gICAgY29uc3QgaWRsZVdvcmtlciA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRJZGxlV29ya2VyKCk7XG4gICAgY29uc3Qgd29ya2luZ1dvcmtlciA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JraW5nV29ya2VyKCk7XG5cbiAgICB0aGlzLnRvbWF0b1NlZWQuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkLnN0cmluZyA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWQuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkLm51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMubWlsa0Nvdy5zdHJpbmcgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLmdvbGQuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQudG9TdHJpbmcoKTtcblxuICAgIHRoaXMud29ya2VySWRsZS5zdHJpbmcgPSBpZGxlV29ya2VyLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5tYWNoaW5lTGV2ZWwuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUubGV2ZWwudG9TdHJpbmcoKTtcbiAgICB0aGlzLndvcmtlcldvcmtpbmcuc3RyaW5nID0gd29ya2luZ1dvcmtlci50b1N0cmluZygpO1xuXG4gICAgdGhpcy50b21hdG8uc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0by5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLmJsdWViZXJyeS5zdHJpbmcgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5Lm51bWJlci50b1N0cmluZygpO1xuICAgIHRoaXMuc3RyYXdiZXJyeS5zdHJpbmcgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeS5udW1iZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pbGsuc3RyaW5nID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGsubnVtYmVyLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBTdG9yYWdlIFVJIERvbmUgISEhXCIpO1xuICB9XG4gIHJlc2V0VUkoKSB7fVxuXG4gIG9uQ2xpY2tTZWxsVG9tYXRvQnRuKCkge1xuICAgIGNvbnNvbGUubG9nKFwib25DbGlja1NlbGxUb21hdG9CdG5cIik7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0by5udW1iZXIgPiAwKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zZWxsVG9tYXRvKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tTZWxsQmx1ZWJlcnJ5QnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnkubnVtYmVyID4gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc2VsbEJsdWViZXJyeSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrU2VsbFN0cmF3YmVycnlCdG4oKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnkubnVtYmVyID4gMCkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc2VsbFN0cmF3YmVycnkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja1NlbGxNaWxrQnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrLm51bWJlciA+IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnNlbGxNaWxrKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lTdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCZWVmLFxuICBCbHVlYmVycnksXG4gIEJsdWViZXJyeVNlZWQsXG4gIENvdyxcbiAgTGFuZCxcbiAgTWFjaGluZSxcbiAgTWlsayxcbiAgTWlsa0NvdyxcbiAgU3RyYXdiZXJyeSxcbiAgU3RyYXdiZXJyeVNlZWQsXG4gIFRvbWF0byxcbiAgVG9tYXRvU2VlZCxcbiAgV29ya2VyLFxufSBmcm9tIFwiLi4vc2NyaXB0cy9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUkgZnJvbSBcIi4uL3NjcmlwdHMvdWkvTGFuZFVJXCI7XG5pbXBvcnQgeyBJTWFjaGluZSB9IGZyb20gXCIuL0lNYWNoaW5lXCI7XG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSBcIi4vSVdvcmtlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yYWdlIHtcbiAgZ29sZDogbnVtYmVyO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcblxuICB0b21hdG86IFRvbWF0bztcbiAgYmx1ZWJlcnJ5OiBCbHVlYmVycnk7XG4gIHN0cmF3YmVycnk6IFN0cmF3YmVycnk7XG4gIG1pbGs6IE1pbGs7XG4gIGJlZWY6IEJlZWY7XG5cbiAgdG9tYXRvU2VlZDogVG9tYXRvU2VlZDtcbiAgYmx1ZWJlcnJ5U2VlZDogQmx1ZWJlcnJ5U2VlZDtcbiAgc3RyYXdiZXJyeVNlZWQ6IFN0cmF3YmVycnlTZWVkO1xuICBtaWxrQ293OiBNaWxrQ293O1xuICBjb3c6IENvdztcblxuICB3b3JrZXI6IFdvcmtlcjtcbiAgbWFjaGluZTogTWFjaGluZTtcblxuICBsYW5kOiBMYW5kO1xuXG4gIHNlbGxUb21hdG8oKTogdm9pZDtcbiAgc2VsbEJsdWViZXJyeSgpOiB2b2lkO1xuICBzZWxsU3RyYXdiZXJyeSgpOiB2b2lkO1xuICBzZWxsTWlsaygpOiB2b2lkO1xuICBzZWxsQmVlZigpOiB2b2lkO1xuICBhZGRHb2xkKGdvbGQ6IG51bWJlcik6IHZvaWQ7XG4gIGdldFdvcmtlcklkbGUod29ya2luZ1dvcmtlcjogbnVtYmVyKTogbnVtYmVyO1xuICBnZXRQZXJmb3JtYWNlTWFjaGluZSgpOiBudW1iZXI7XG5cbiAgYWRkVG9tYXRvU2VlZCgpOiB2b2lkO1xuICBhZGRCbHVlYmVycnlTZWVkKCk6IHZvaWQ7XG4gIGFkZFN0cmF3YmVycnlTZWVkKCk6IHZvaWQ7XG4gIGFkZE1pbGtDb3coKTogdm9pZDtcbiAgYWRkQ293KCk6IHZvaWQ7XG4gIGFkZFdvcmtlcigpOiB2b2lkO1xuICB1cGdyYWRlTWFjaGluZSgpOiB2b2lkO1xuXG4gIGFzc2lnbldvcmtlcihsYW5kOiBMYW5kKTogdm9pZDtcbn1cbiJdfQ==
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
var GameModel_1 = require("../models/GameModel");
var LandUI_1 = require("../ui/LandUI");
var StorageUI_1 = require("../ui/StorageUI");
var StoreUI_1 = require("../ui/StoreUI");
var GameView_1 = require("../views/GameView");
var GameSaveManager_1 = require("./GameSaveManager");
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.landUIArray = [];
        _this.storeUI = null;
        _this.storageUI = null;
        _this.StartBtn = null;
        _this.time = 0;
        _this.saveTime = 1;
        return _this;
    }
    UIManager_1 = UIManager;
    // LIFE-CYCLE CALLBACKS:
    UIManager.prototype.onLoad = function () {
        if (UIManager_1.instance == null) {
            UIManager_1.instance = this;
        }
        this.Init();
    };
    UIManager.prototype.start = function () {
        //this.Save();
    };
    UIManager.prototype.update = function (dt) { };
    UIManager.prototype.Init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gameController = new GameController_1.GameController();
                        this.gameModel = new GameModel_1.GameModel();
                        this.gameView = new GameView_1.GameView(this.gameController);
                        this.gameController.init(this.gameModel, this.gameView);
                        return [4 /*yield*/, this.setupData()];
                    case 1:
                        _a.sent();
                        this.gameController.model.newLand();
                        this.createLandData();
                        this.gameController.loadGame();
                        this.setupUI();
                        this.gameController.setup();
                        this.StartBtn.interactable = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.setupData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gameModel.setData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManager.prototype.setupUI = function () {
        this.createLandUI();
        this.storageUI.setupUI();
        this.storageUI.updateUI();
        this.storeUI.setupUI();
    };
    UIManager.prototype.pushToQueue = function (index) {
        if (this.gameModel.landArray[index].isReadyToWork &&
            !this.gameModel.queueIndexArray.includes(index)) {
            this.gameModel.queueIndexArray.push(index);
        }
    };
    UIManager.prototype.useWorkerForQueue3 = function () {
        console.log("queueIndex: " + this.gameModel.queueIndexArray);
        var idleWorker = this.gameController.model.storage.getWorkerIdle(this.gameController.model.storage.workingWorkerNumber);
        if (idleWorker > 0) {
            for (var i = 0; i < idleWorker; i++) {
                if (this.gameController.model.queueIndexArray.length > 0) {
                    if (this.gameModel.landArray[this.gameModel.queueIndexArray[0]]
                        .isReadyToWork) {
                        UIManager_1.instance.landUIArray[this.gameModel.queueIndexArray[0]].enableWorker();
                        this.useWorker(this.gameModel.landArray[this.gameModel.queueIndexArray[0]]);
                        UIManager_1.instance.landUIArray[this.gameModel.queueIndexArray[0]].updateUI();
                    }
                    else {
                    }
                    this.gameModel.queueIndexArray.splice(0, 1);
                }
            }
        }
        else {
        }
    };
    UIManager.prototype.checkMinWorkingTime = function () {
        var min = this.gameModel.landArray[0].workingTime;
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.gameModel.landArray[i].workingTime < min) {
                min = this.gameModel.landArray[i].workingTime;
            }
        }
        return min;
    };
    UIManager.prototype.useWorker = function (land) {
        this.gameController.model.storage.assignWorker(land);
        this.gameController.model.storage.workingWorkerNumber += 1;
        land.workingTime =
            this.gameController.model.storage.worker.workingInterval * 60;
        land.isReadyToWork = false;
        UIManager_1.instance.storageUI.updateUI();
    };
    UIManager.prototype.createLandUI = function () {
        for (var i = 0; i < this.gameModel.storage.land.number; i++) {
            this.updateLandUI(i);
            if (this.gameModel.landArray[i].isReadyToWork) {
                this.pushToQueue(i);
                this.useWorkerForQueue3();
            }
            else {
                if (this.gameModel.landArray[i].workingTime > 0) {
                    this.landUIArray[i].enableWorker();
                }
            }
        }
    };
    UIManager.prototype.createLandData = function () {
        var _this = this;
        /*this.landArrayClones = Array.from({ length: 9 }, () => ({
          ...this.gameController.model.storage.land,
        }));*/
        if (this.gameModel.landArray.length == 0) {
            this.gameModel.landArray = Array.from({ length: 9 }, function () {
                return _this.gameModel.storage.land.clone();
            });
        }
        cc.log(this.gameModel.landArray);
    };
    UIManager.prototype.updateLandUI = function (index) {
        this.landUIArray[index].enabled = true;
        this.landUIArray[index].index = index;
        this.landUIArray[index].enableLand();
    };
    UIManager.prototype.enableAllLand = function () {
        for (var i = 0; i < this.gameModel.storage.land.number; i++) {
            this.landUIArray[i].enableLand();
        }
    };
    UIManager.prototype.findLandForPlant = function () {
        for (var i = 0; i < this.landUIArray.length; i++) {
            if (this.landUIArray[i].enabled) {
                if (this.gameModel.landArray[i].currentAsset.number > 0 &&
                    this.gameModel.landArray[i].isReadyToWork) {
                    this.pushToQueue(i);
                    this.useWorkerForQueue3();
                }
            }
        }
    };
    UIManager.prototype.Save = function () {
        this.gameController.saveGame();
    };
    UIManager.prototype.clearCache = function () {
        GameSaveManager_1.GameSaveManager.clear();
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
    __decorate([
        property(cc.Button)
    ], UIManager.prototype, "StartBtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLGdFQUErRDtBQUMvRCxpREFBZ0Q7QUFFaEQsdUNBQWlEO0FBQ2pELDZDQUF3QztBQUN4Qyx5Q0FBb0M7QUFDcEMsOENBQTZDO0FBQzdDLHFEQUFvRDtBQUdwRDtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQThLQztRQTdLbUIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFRaEQsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQWlLdkIsQ0FBQztrQkE5S29CLFNBQVM7SUFjNUIsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDRSxJQUFJLFdBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDRSxjQUFjO0lBQ2hCLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sRUFBVSxJQUFTLENBQUM7SUFDckIsd0JBQUksR0FBVjs7Ozs0QkFDRSxxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dC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QUVELDhCQUFVLEdBQVY7UUFDRSxpQ0FBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7O0lBNUtpQjtRQUFqQixRQUFRLENBQUMsZ0JBQU0sQ0FBQztrREFBNEI7SUFDMUI7UUFBbEIsUUFBUSxDQUFDLGlCQUFPLENBQUM7OENBQXlCO0lBQ3RCO1FBQXBCLFFBQVEsQ0FBQyxtQkFBUyxDQUFDO2dEQUE2QjtJQUM1QjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FBNEI7SUFKN0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQThLN0I7SUFBRCxnQkFBQztDQTlLRCxBQThLQyxDQTlLc0MsRUFBRSxDQUFDLFNBQVMsR0E4S2xEO2tCQTlLb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBMYW5kIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuaW1wb3J0IExhbmRVSSwgeyBMYW5kU3RhdGUgfSBmcm9tIFwiLi4vdWkvTGFuZFVJXCI7XG5pbXBvcnQgU3RvcmFnZVVJIGZyb20gXCIuLi91aS9TdG9yYWdlVUlcIjtcbmltcG9ydCBTdG9yZVVJIGZyb20gXCIuLi91aS9TdG9yZVVJXCI7XG5pbXBvcnQgeyBHYW1lVmlldyB9IGZyb20gXCIuLi92aWV3cy9HYW1lVmlld1wiO1xuaW1wb3J0IHsgR2FtZVNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4vR2FtZVNhdmVNYW5hZ2VyXCI7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoTGFuZFVJKSBsYW5kVUlBcnJheTogTGFuZFVJW10gPSBbXTtcbiAgQHByb3BlcnR5KFN0b3JlVUkpIHN0b3JlVUk6IFN0b3JlVUkgPSBudWxsO1xuICBAcHJvcGVydHkoU3RvcmFnZVVJKSBzdG9yYWdlVUk6IFN0b3JhZ2VVSSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pIFN0YXJ0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFVJTWFuYWdlcjtcblxuICBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG4gIGdhbWVNb2RlbDogR2FtZU1vZGVsO1xuICBnYW1lVmlldzogR2FtZVZpZXc7XG5cbiAgdGltZTogbnVtYmVyID0gMDtcbiAgc2F2ZVRpbWU6IG51bWJlciA9IDE7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5Jbml0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvL3RoaXMuU2F2ZSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHt9XG4gIGFzeW5jIEluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5zZXR1cCgpO1xuICB9XG4gIGFzeW5jIHNldHVwKCkge1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmdhbWVNb2RlbCA9IG5ldyBHYW1lTW9kZWwoKTtcbiAgICB0aGlzLmdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KHRoaXMuZ2FtZUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5pbml0KHRoaXMuZ2FtZU1vZGVsLCB0aGlzLmdhbWVWaWV3KTtcblxuICAgIGF3YWl0IHRoaXMuc2V0dXBEYXRhKCk7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5uZXdMYW5kKCk7XG4gICAgdGhpcy5jcmVhdGVMYW5kRGF0YSgpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubG9hZEdhbWUoKTtcbiAgICB0aGlzLnNldHVwVUkoKTtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLnNldHVwKCk7XG4gICAgdGhpcy5TdGFydEJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICB9XG4gIGFzeW5jIHNldHVwRGF0YSgpIHtcbiAgICBhd2FpdCB0aGlzLmdhbWVNb2RlbC5zZXREYXRhKCk7XG4gIH1cbiAgc2V0dXBVSSgpIHtcbiAgICB0aGlzLmNyZWF0ZUxhbmRVSSgpO1xuICAgIHRoaXMuc3RvcmFnZVVJLnNldHVwVUkoKTtcbiAgICB0aGlzLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuXG4gICAgdGhpcy5zdG9yZVVJLnNldHVwVUkoKTtcbiAgfVxuXG4gIHB1c2hUb1F1ZXVlKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaW5kZXhdLmlzUmVhZHlUb1dvcmsgJiZcbiAgICAgICF0aGlzLmdhbWVNb2RlbC5xdWV1ZUluZGV4QXJyYXkuaW5jbHVkZXMoaW5kZXgpXG4gICAgKSB7XG4gICAgICB0aGlzLmdhbWVNb2RlbC5xdWV1ZUluZGV4QXJyYXkucHVzaChpbmRleCk7XG4gICAgfVxuICB9XG4gIHVzZVdvcmtlckZvclF1ZXVlMygpIHtcbiAgICBjb25zb2xlLmxvZyhcInF1ZXVlSW5kZXg6IFwiICsgdGhpcy5nYW1lTW9kZWwucXVldWVJbmRleEFycmF5KTtcbiAgICBsZXQgaWRsZVdvcmtlciA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nZXRXb3JrZXJJZGxlKFxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtpbmdXb3JrZXJOdW1iZXJcbiAgICApO1xuICAgIGlmIChpZGxlV29ya2VyID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZGxlV29ya2VyOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwucXVldWVJbmRleEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5nYW1lTW9kZWwucXVldWVJbmRleEFycmF5WzBdXVxuICAgICAgICAgICAgICAuaXNSZWFkeVRvV29ya1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmxhbmRVSUFycmF5W1xuICAgICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5xdWV1ZUluZGV4QXJyYXlbMF1cbiAgICAgICAgICAgIF0uZW5hYmxlV29ya2VyKCk7XG4gICAgICAgICAgICB0aGlzLnVzZVdvcmtlcihcbiAgICAgICAgICAgICAgdGhpcy5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuZ2FtZU1vZGVsLnF1ZXVlSW5kZXhBcnJheVswXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UubGFuZFVJQXJyYXlbXG4gICAgICAgICAgICAgIHRoaXMuZ2FtZU1vZGVsLnF1ZXVlSW5kZXhBcnJheVswXVxuICAgICAgICAgICAgXS51cGRhdGVVSSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5nYW1lTW9kZWwucXVldWVJbmRleEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNaW5Xb3JraW5nVGltZSgpOiBudW1iZXIge1xuICAgIGxldCBtaW46IG51bWJlciA9IHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheVswXS53b3JraW5nVGltZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZFVJQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0ud29ya2luZ1RpbWUgPCBtaW4pIHtcbiAgICAgICAgbWluID0gdGhpcy5nYW1lTW9kZWwubGFuZEFycmF5W2ldLndvcmtpbmdUaW1lO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgdXNlV29ya2VyKGxhbmQ6IExhbmQpIHtcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYXNzaWduV29ya2VyKGxhbmQpO1xuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyICs9IDE7XG4gICAgbGFuZC53b3JraW5nVGltZSA9XG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uud29ya2VyLndvcmtpbmdJbnRlcnZhbCAqIDYwO1xuICAgIGxhbmQuaXNSZWFkeVRvV29yayA9IGZhbHNlO1xuXG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICB9XG4gIGNyZWF0ZUxhbmRVSSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZU1vZGVsLnN0b3JhZ2UubGFuZC5udW1iZXI7IGkrKykge1xuICAgICAgdGhpcy51cGRhdGVMYW5kVUkoaSk7XG5cbiAgICAgIGlmICh0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uaXNSZWFkeVRvV29yaykge1xuICAgICAgICB0aGlzLnB1c2hUb1F1ZXVlKGkpO1xuICAgICAgICB0aGlzLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmxhbmRBcnJheVtpXS53b3JraW5nVGltZSA+IDApIHtcbiAgICAgICAgICB0aGlzLmxhbmRVSUFycmF5W2ldLmVuYWJsZVdvcmtlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNyZWF0ZUxhbmREYXRhKCkge1xuICAgIC8qdGhpcy5sYW5kQXJyYXlDbG9uZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+ICh7XG4gICAgICAuLi50aGlzLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubGFuZCxcbiAgICB9KSk7Ki9cbiAgICBpZiAodGhpcy5nYW1lTW9kZWwubGFuZEFycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXkgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA5IH0sICgpID0+XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLnN0b3JhZ2UubGFuZC5jbG9uZSgpXG4gICAgICApO1xuICAgIH1cbiAgICBjYy5sb2codGhpcy5nYW1lTW9kZWwubGFuZEFycmF5KTtcbiAgfVxuICB1cGRhdGVMYW5kVUkoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubGFuZFVJQXJyYXlbaW5kZXhdLmluZGV4ID0gaW5kZXg7XG5cbiAgICB0aGlzLmxhbmRVSUFycmF5W2luZGV4XS5lbmFibGVMYW5kKCk7XG4gIH1cbiAgZW5hYmxlQWxsTGFuZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZU1vZGVsLnN0b3JhZ2UubGFuZC5udW1iZXI7IGkrKykge1xuICAgICAgdGhpcy5sYW5kVUlBcnJheVtpXS5lbmFibGVMYW5kKCk7XG4gICAgfVxuICB9XG4gIGZpbmRMYW5kRm9yUGxhbnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmRVSUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5sYW5kVUlBcnJheVtpXS5lbmFibGVkKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uY3VycmVudEFzc2V0Lm51bWJlciA+IDAgJiZcbiAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5sYW5kQXJyYXlbaV0uaXNSZWFkeVRvV29ya1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnB1c2hUb1F1ZXVlKGkpO1xuXG4gICAgICAgICAgdGhpcy51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFNhdmUoKSB7XG4gICAgdGhpcy5nYW1lQ29udHJvbGxlci5zYXZlR2FtZSgpO1xuICB9XG5cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICBHYW1lU2F2ZU1hbmFnZXIuY2xlYXIoKTtcbiAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lXb3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYW5kVUksIHsgV29ya2VyQWN0aW9uIH0gZnJvbSBcIi4uL3NjcmlwdHMvdWkvTGFuZFVJXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHdvcmtpbmdJbnRlcnZhbDogbnVtYmVyO1xuICBidXlQcmljZTogbnVtYmVyO1xuICBpc0J1c3k6IGJvb2xlYW47XG4gIFdvcmsobGFuZFVJOiBMYW5kVUksIHdvcmtlckFjdGlvbjogV29ya2VyQWN0aW9uKTogdm9pZDtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PanelUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee548PWqqtF4rvvRPH8ToI2', 'PanelUI');
// scripts/PanelUI.ts

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
var UIManager_1 = require("./Manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelUI = /** @class */ (function (_super) {
    __extends(PanelUI, _super);
    function PanelUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiManager = null;
        _this.text = "hello";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PanelUI.prototype.start = function () { };
    // update (dt) {}
    PanelUI.prototype.startGame = function () {
        this.uiManager.node.active = true; //UIManager.instance.autoSave();
        this.node.active = false;
    };
    __decorate([
        property(UIManager_1.default)
    ], PanelUI.prototype, "uiManager", void 0);
    __decorate([
        property
    ], PanelUI.prototype, "text", void 0);
    PanelUI = __decorate([
        ccclass
    ], PanelUI);
    return PanelUI;
}(cc.Component));
exports.default = PanelUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhbmVsVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBa0JDO1FBaEJDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFhekIsQ0FBQztJQVhDLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsdUJBQUssR0FBTCxjQUFTLENBQUM7SUFFVixpQkFBaUI7SUFDakIsMkJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFmRDtRQURDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDOzhDQUNRO0lBRzVCO1FBREMsUUFBUTt5Q0FDYztJQUxKLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FrQjNCO0lBQUQsY0FBQztDQWxCRCxBQWtCQyxDQWxCb0MsRUFBRSxDQUFDLFNBQVMsR0FrQmhEO2tCQWxCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KFVJTWFuYWdlcilcbiAgdWlNYW5hZ2VyOiBVSU1hbmFnZXIgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eVxuICB0ZXh0OiBzdHJpbmcgPSBcImhlbGxvXCI7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG5cbiAgc3RhcnQoKSB7fVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLnVpTWFuYWdlci5ub2RlLmFjdGl2ZSA9IHRydWU7IC8vVUlNYW5hZ2VyLmluc3RhbmNlLmF1dG9TYXZlKCk7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pbnRlcmZhY2VzL0lNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElNYWNoaW5lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyO1xuICBzdXBwb3J0OiBudW1iZXI7XG4gIHVwZ3JhZGVQcmljZTogbnVtYmVyO1xuXG4gIE9wZXJhdGUoKTogbnVtYmVyO1xufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUNsRCxrREFBNkM7QUFDN0MsaURBSzRCO0FBR3RCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQVksU0FNWDtBQU5ELFdBQVksU0FBUztJQUNuQixtREFBUyxDQUFBO0lBQ1QsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCw2Q0FBTSxDQUFBO0lBQ04sK0NBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU1wQjtBQUNELElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQiw2QkFBYyxDQUFBO0lBQ2Qsa0NBQW1CLENBQUE7SUFDbkIsNEJBQWEsQ0FBQTtJQUNiLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUNELElBQVksWUFRWDtBQVJELFdBQVksWUFBWTtJQUN0Qix5REFBUyxDQUFBO0lBQ1QsdURBQVEsQ0FBQTtJQUNSLDZEQUFXLENBQUE7SUFDWCxtRUFBYyxDQUFBO0lBQ2QscUVBQWUsQ0FBQTtJQUNmLHVFQUFnQixDQUFBO0lBQ2hCLCtEQUFZLENBQUE7QUFDZCxDQUFDLEVBUlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFRdkI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTBpQkM7UUF4aUJDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHNCQUFnQixHQUFjLElBQUks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LE9BQU87T0FDYSxNQUFNLENBMGlCMUI7SUFBRCxhQUFDO0NBMWlCRCxBQTBpQkMsQ0ExaUJtQyxFQUFFLENBQUMsU0FBUyxHQTBpQi9DO2tCQTFpQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgQ2F0dGxlQ29uZmlncyxcbiAgRmlyc3RDb25maWdzLFxuICBMYW5kQ29uZmlncyxcbiAgUGxhbnRDb25maWdzLFxufSBmcm9tIFwiLi4vZGF0YS9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgeyBMYW5kLCBUb21hdG9TZWVkIH0gZnJvbSBcIi4uL3N0b3JhZ2UvU3RvcmFnZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZXhwb3J0IGVudW0gTGFuZFN0YXRlIHtcbiAgVW5kZWZpbmVkLFxuICBFbXB0eSxcbiAgUGxhbnQsXG4gIENhdHRsZSxcbiAgSGFydmVzdCxcbn1cbmV4cG9ydCBlbnVtIFllaWxkQWN0aW9uIHtcbiAgVW5kZWZpbmVkID0gXCJcIixcbiAgSGFydmVzdCA9IFwiSGFydmVzdFwiLFxuICBNaWxrID0gXCJNaWxrXCIsXG4gIEJ1dGNoZXIgPSBcIkJ1dGNoZXJcIixcbn1cbmV4cG9ydCBlbnVtIFdvcmtlckFjdGlvbiB7XG4gIFVuZGVmaW5lZCxcbiAgWWllbGRpbmcsXG4gIFRvbWF0b1BsYW50LFxuICBCbHVlYmVycnlQbGFudCxcbiAgU3RyYXdiZXJyeVBsYW50LFxuICBNaWxrY293TGl2ZVN0b2NrLFxuICBDb3dMaXZlU3RvY2ssXG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgdG9tYXRvU2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYmx1ZWJlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgc3RyYXdiZXJyeVNlZWRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gIG1pbGtDb3dCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgeWllbGRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB0aW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB5aWVsZENvbnRhaW5MYjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGNyb3BMYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgeWllbGRCdXR0b25MYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIHdvcmtlclNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB3b3JraW5nSW50ZXJ2YWxMYjogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICBpbmRleDogbnVtYmVyO1xuICAvL2xhbmQ6IExhbmQ7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICBvbkxvYWQoKSB7fVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc2V0dXBVSSgpO1xuICB9XG5cbiAgdXBkYXRlKGR0KSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdKSB7XG4gICAgICBpZiAoIVVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkpIHtcbiAgICAgICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPCAtMC41KSB7XG4gICAgICAgICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFlpZWxkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9FbXB0eUxhbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA+IC0wLjVcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGV0IGR1cmF0aW9uID1cbiAgICAgICAgICAgIGR0ICogVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlTGFuZFRpbWUoZHVyYXRpb24pO1xuICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBUaW1lISEhISFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lID4gMCkge1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS53b3JraW5nVGltZSAtPSBkdDtcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2luZ1RpbWUgPCAwXG4gICAgICApIHtcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5zdG9yYWdlLndvcmtlci5Xb3JrKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2VyQWN0aW9uXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0dXBMYW5kU3RhdGUoKSB7XG4gICAgc3dpdGNoIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUpIHtcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkVtcHR5OlxuICAgICAgICB0aGlzLnJlc2V0VUkoKTtcblxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc1JlYWR5VG9Xb3JrID1cbiAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAgIC5udW1iZXIgPiAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkhhcnZlc3Q6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcblxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc1JlYWR5VG9Xb3JrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5QbGFudDpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc1JlYWR5VG9Xb3JrID1cbiAgICAgICAgICBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkNhdHRsZTpcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc1JlYWR5VG9Xb3JrID1cbiAgICAgICAgICBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0dXBVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrVG9tYXRvU2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrU3RyYXdiZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrTWlsa0Nvd0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIC8vdGhpcy5oYXJ2ZXN0QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnlpZWxkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tZaWVsZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coXCJzZXR1cCBMYW5kVUkgRG9uZSEhISFcIik7XG4gIH1cbiAgcHVibGljIHVwZGF0ZVVJKCkge1xuICAgIHRoaXMuc2V0VGltZUxiKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUpO1xuICAgIHRoaXMuc2V0Q3JvcExiKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3ApO1xuICAgIHRoaXMuc2V0V29ya2luZ0ludGVydmFsTGIoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS53b3JraW5nVGltZVxuICAgICk7XG4gICAgdGhpcy5zZXRZaWVsZENvbnRhaW5MYihcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZFxuICAgICk7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPiAwKSB7XG4gICAgICB0aGlzLnNldFNwcml0ZShcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0Lm5hbWVcbiAgICAgICk7XG4gICAgICB0aGlzLnNldE5hbWVMYihcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0Lm5hbWVcbiAgICAgICk7XG5cbiAgICAgIHRoaXMudG9tYXRvU2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnN0cmF3YmVycnlTZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5uYW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy50aW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5TcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy55aWVsZENvbnRhaW5MYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmNyb3BMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICB9XG5cbiAgICB0aGlzLnlpZWxkQnRuLm5vZGUuYWN0aXZlID1cbiAgICAgIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5wbGFudFR5cGUgfHxcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY2F0dGxlVHlwZSkgJiZcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZCA+IDA7XG4gICAgaWYgKHRoaXMueWllbGRCdG4ubm9kZS5hY3RpdmUpIHtcbiAgICAgIHN3aXRjaCAoXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldC5uYW1lXG4gICAgICApIHtcbiAgICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm5hbWU6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZC5uYW1lOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5IYXJ2ZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnN0cmF3YmVycnlTZWVkXG4gICAgICAgICAgLm5hbWU6XG4gICAgICAgICAgdGhpcy55aWVsZEJ1dHRvbkxiLnN0cmluZyA9IFllaWxkQWN0aW9uLkhhcnZlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5uYW1lOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5NaWxrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmNvdy5uYW1lOlxuICAgICAgICAgIHRoaXMueWllbGRCdXR0b25MYi5zdHJpbmcgPSBZZWlsZEFjdGlvbi5CdXRjaGVyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tUb21hdG9TZWVkQnRuKCkge1xuICAgIGlmIChVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA+IDApIHtcbiAgICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5wbGFudFR5cGUgPVxuICAgICAgICBQbGFudFR5cGUudG9tYXRvU2VlZDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPVxuICAgICAgICBQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldCA9XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLnRvbWF0b1NlZWQ7XG5cbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgLm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbXG4gICAgICAgICAgdGhpcy5pbmRleFxuICAgICAgICBdLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCArPVxuICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgbWF4SGFydmVzdCAqXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC0gbWF4SGFydmVzdDtcblxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5udW1iZXIgLT0gMTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgIExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG5cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gICAgfVxuICAgIC8vdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgdGhpcy5zZXR1cExhbmRTdGF0ZSgpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnB1c2hUb1F1ZXVlKHRoaXMpO1xuICAgIC8vVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICB9XG4gIG9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQubnVtYmVyID4gMFxuICAgICkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPVxuICAgICAgICBQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZSA9XG4gICAgICAgIFBsYW50VHlwZS5ibHVlYmVycnlTZWVkO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYmx1ZWJlcnJ5U2VlZDtcblxuICAgICAgbGV0IG1heEhhcnZlc3QgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXRcbiAgICAgICAgICAubWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNyb3AgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVtcbiAgICAgICAgICB0aGlzLmluZGV4XG4gICAgICAgIF0uY3VycmVudEFzc2V0Lm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wICs9XG4gICAgICAgIE1hdGguY2VpbChcbiAgICAgICAgICBtYXhIYXJ2ZXN0ICpcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1hY2hpbmUuT3BlcmF0ZSgpXG4gICAgICAgICkgLSBtYXhIYXJ2ZXN0O1xuXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciAtPSAxO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ubGFuZFN0YXRlID1cbiAgICAgICAgTGFuZFN0YXRlLlBsYW50O1xuICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgfVxuICBvbkNsaWNrU3RyYXdiZXJyeVNlZWRCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID4gMFxuICAgICkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPVxuICAgICAgICBQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5wbGFudFR5cGUgPVxuICAgICAgICBQbGFudFR5cGUuc3RyYXdiZXJyeVNlZWQ7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jdXJyZW50QXNzZXQgPVxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZDtcbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgLm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbXG4gICAgICAgICAgdGhpcy5pbmRleFxuICAgICAgICBdLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCArPVxuICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgbWF4SGFydmVzdCAqXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC0gbWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5udW1iZXIgLT0gMTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmxhbmRTdGF0ZSA9XG4gICAgICAgIExhbmRTdGF0ZS5QbGFudDtcbiAgICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gIH1cbiAgb25DbGlja01pbGtDb3dCdG4oKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID4gMCkge1xuICAgICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPVxuICAgICAgICBDYXR0bGVDb25maWdzLm1pbGtjb3cuaGFydmVzdEludGVydmFsICogNjA7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jYXR0bGVUeXBlID1cbiAgICAgICAgQ2F0dGxlVHlwZS5NaWxrY293O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0NvdztcbiAgICAgIGxldCBtYXhIYXJ2ZXN0ID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgICAgLm1heEhhcnZlc3Q7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5jcm9wID1cbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbXG4gICAgICAgICAgdGhpcy5pbmRleFxuICAgICAgICBdLmN1cnJlbnRBc3NldC5tYXhIYXJ2ZXN0O1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCArPVxuICAgICAgICBNYXRoLmNlaWwoXG4gICAgICAgICAgbWF4SGFydmVzdCAqXG4gICAgICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5tYWNoaW5lLk9wZXJhdGUoKVxuICAgICAgICApIC0gbWF4SGFydmVzdDtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyIC09IDE7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuQ2F0dGxlO1xuICAgICAgdGhpcy5kaXNhYmxlV29ya2VyKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgfVxuICBvbkNsaWNrWWllbGRCdG4oKSB7XG4gICAgLy90aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICBzd2l0Y2ggKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0Lm5hbWVcbiAgICApIHtcbiAgICAgIGNhc2UgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRUb21hdG8oXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmJsdWViZXJyeVNlZWQubmFtZTpcbiAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuYWRkQmx1ZWJlcnJ5KFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRTdHJhd2JlcnJ5KFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5taWxrQ293Lm5hbWU6XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmFkZE1pbGsoXG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY29udGFpbllpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmNvdy5uYW1lOlxuICAgICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5hZGRCZWVmKFxuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZCA9IDA7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPSBVSU1hbmFnZXJcbiAgICAgIC5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnBsYW50VHlwZVxuICAgICAgPyBMYW5kU3RhdGUuUGxhbnRcbiAgICAgIDogTGFuZFN0YXRlLkNhdHRsZTtcbiAgICBpZiAoVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCA9PSAwKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuRW1wdHk7XG4gICAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzLmluZGV4KTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVXb3JrZXIoKTtcbiAgICB0aGlzLnNldHVwTGFuZFN0YXRlKCk7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgb25DbGlja01pbGtCdG4oKSB7XG4gICAgdGhpcy5yZXNldFVJKCk7XG4gIH1cbiAgc2V0TmFtZUxiKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IG5hbWU7XG4gIH1cbiAgc2V0WWllbGRDb250YWluTGIoeWllbGRDb250YWluOiBudW1iZXIpIHtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLnN0cmluZyA9IHlpZWxkQ29udGFpbi50b1N0cmluZygpO1xuICB9XG4gIHNldENyb3BMYihjcm9wOiBudW1iZXIpIHtcbiAgICB0aGlzLmNyb3BMYi5zdHJpbmcgPSBjcm9wLnRvU3RyaW5nKCk7XG4gIH1cbiAgc2V0V29ya2luZ0ludGVydmFsTGIod29ya2luZ1RpbWU6IG51bWJlcikge1xuICAgIGlmICh3b3JraW5nVGltZSA8IDApIHtcbiAgICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIuc3RyaW5nID0gXCIwc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgX3dvcmtpbmdUaW1lID0gcGFyc2VJbnQod29ya2luZ1RpbWUudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLnN0cmluZyA9IF93b3JraW5nVGltZS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgfVxuICB9XG4gIHNldFRpbWVMYih0aW1lOiBudW1iZXIpIHtcbiAgICBpZiAodGltZSA8IDApIHtcbiAgICAgIHRoaXMudGltZUxiLnN0cmluZyA9IFwiMHNcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IF90aW1lID0gcGFyc2VJbnQodGltZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMudGltZUxiLnN0cmluZyA9IF90aW1lLnRvU3RyaW5nKCkgKyBcInNcIjtcbiAgICB9XG4gIH1cblxuICBzZXRXb3JrZXJTcHJpdGUoKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoXCJNaWRkbGVcIiwgdGhpcy53b3JrZXJTcHJpdGUpO1xuICB9XG4gIHNldFNwcml0ZShpbWFnZU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubG9hZEltYWdlKGltYWdlTmFtZSwgdGhpcy5TcHJpdGUpO1xuICB9XG5cbiAgbG9hZEltYWdlID0gKGltYWdlTmFtZTogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBgaW1hZ2VzLyR7aW1hZ2VOYW1lfWA7XG4gICAgaWYgKGltYWdlTmFtZSA9PSBcIlwiKSB7XG4gICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2MuZXJyb3IoYEtow7RuZyB0aOG7gyBsb2FkIOG6o25oOiAke3BhdGh9YCwgZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgfSk7XG4gIH07XG4gIHJlc2V0VUkoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy55aWVsZEJ0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy5uYW1lTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnlpZWxkQ29udGFpbkxiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy55aWVsZENvbnRhaW5MYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY3JvcExiLnN0cmluZyA9IFwiXCI7XG4gICAgdGhpcy5jcm9wTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMudGltZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy53b3JrZXJTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMud29ya2luZ0ludGVydmFsTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5wbGFudFR5cGUgPSBudWxsO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNhdHRsZVR5cGUgPSBudWxsO1xuXG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0udGltZSA9IDA7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uaXNFbXB0eSA9IHRydWU7XG5cbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgTGFuZFN0YXRlLkVtcHR5O1xuXG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0ud29ya2VyQWN0aW9uID1cbiAgICAgIFdvcmtlckFjdGlvbi5Ub21hdG9QbGFudDtcbiAgfVxuXG4gIGVuYWJsZUxhbmQoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS50b21hdG9TZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5ibHVlYmVycnlTZWVkQnRuLmludGVyYWN0YWJsZSA9XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLm51bWJlciA+IDA7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5pbnRlcmFjdGFibGUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2Uuc3RyYXdiZXJyeVNlZWQubnVtYmVyID4gMDtcbiAgICB0aGlzLm1pbGtDb3dCdG4uaW50ZXJhY3RhYmxlID1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLm1pbGtDb3cubnVtYmVyID4gMDtcbiAgfVxuXG4gIGVuYWJsZVdvcmtlcigpIHtcbiAgICB0aGlzLnNldFdvcmtlclNwcml0ZSgpO1xuICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2FibGVXb3JrZXIoKSB7XG4gICAgaWYgKFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lICE9IDApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtpbmdUaW1lID0gMDtcbiAgICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS53b3JraW5nV29ya2VyTnVtYmVyIC09IDE7XG4gICAgICB0aGlzLndvcmtpbmdJbnRlcnZhbExiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGFkZFlpZWxkKCkge1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmNvbnRhaW5ZaWVsZCArPSAxO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLndvcmtlckFjdGlvbiA9XG4gICAgICBXb3JrZXJBY3Rpb24uWWllbGRpbmc7XG4gICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3JvcCAtPSAxO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgPVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVNb2RlbC5sYW5kQXJyYXlbdGhpcy5pbmRleF0uY3VycmVudEFzc2V0XG4gICAgICAgIC5oYXJ2ZXN0SW50ZXJ2YWwgKiA2MDtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLmN1cnJlbnRBc3NldFxuICAgICAgICAuaGFydmVzdEludGVydmFsXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgIT1cbiAgICAgIExhbmRTdGF0ZS5IYXJ2ZXN0XG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgICBMYW5kU3RhdGUuSGFydmVzdDtcbiAgICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzLmluZGV4KTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51c2VXb3JrZXJGb3JRdWV1ZTMoKTtcbiAgICB9XG4gIH1cbiAgc3dpdGNoVG9FbXB0eUxhbmQoKSB7XG4gICAgY29uc29sZS5sb2coXCJzd2l0Y2ggdG8gZW1wdHkgbGFuZFwiKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZU1vZGVsLmxhbmRBcnJheVt0aGlzLmluZGV4XS5sYW5kU3RhdGUgPVxuICAgICAgTGFuZFN0YXRlLkVtcHR5O1xuICAgIHRoaXMuZGlzYWJsZVdvcmtlcigpO1xuICAgIHRoaXMuc2V0dXBMYW5kU3RhdGUoKTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5wdXNoVG9RdWV1ZSh0aGlzLmluZGV4KTtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UudXNlV29ya2VyRm9yUXVldWUzKCk7XG4gIH1cbiAgY2hhbmdlTGFuZFRpbWUoZHVyYXRpb246IG51bWJlcikge1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lTW9kZWwubGFuZEFycmF5W3RoaXMuaW5kZXhdLnRpbWUgLT0gZHVyYXRpb247XG4gIH1cbn1cbiJdfQ==
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
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    StoreUI.prototype.onClickBuyBlueberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.blueberrySeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyBlueberrySeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    StoreUI.prototype.onClickBuyStrawberrySeedBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.strawberrySeed.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyStrawberrySeed();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    StoreUI.prototype.onClickBuyMilkcowBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.milkCow.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyMilkCow();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.enableAllLand();
            UIManager_1.default.instance.findLandForPlant();
        }
    };
    StoreUI.prototype.onClickBuyWorkerBtn = function () {
        if (UIManager_1.default.instance.gameController.model.storage.gold >=
            UIManager_1.default.instance.gameController.model.storage.worker.buyPrice) {
            UIManager_1.default.instance.gameController.model.store.buyWorker();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.useWorkerForQueue3();
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
            UIManager_1.default.instance.gameController.model.storage.land.buyPrice &&
            UIManager_1.default.instance.gameController.model.storage.land.number < 9) {
            UIManager_1.default.instance.gameController.model.store.buyLand();
            UIManager_1.default.instance.storageUI.updateUI();
            UIManager_1.default.instance.updateLandUI(UIManager_1.default.instance.gameController.model.storage.land.number - 1);
            UIManager_1.default.instance.findLandForPlant();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1N0b3JlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsa0RBQTZDO0FBRXZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBcUpDO1FBbkpDLHNCQUFnQixHQUFjLElBQUksQ0FBQztRQUVuQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFdEMsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBRXZDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFjLElBQUksQ0FBQzs7SUF1SS9CLENBQUM7SUFySUMsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLGlCQUFpQjtJQUVWLHlCQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQzNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0IsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDOUIsRUFBRSxDQUFDLElBQUks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QUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4RCxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUM3QixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDaEUsQ0FBQztZQUNGLG1CQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBbEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDa0I7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDbUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2dCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1M7SUFkVixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBcUozQjtJQUFELGNBQUM7Q0FySkQsQUFxSkMsQ0FySm9DLEVBQUUsQ0FBQyxTQUFTLEdBcUpoRDtrQkFySm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBidXlUb21hdG9TZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBidXlCbHVlYmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBidXlTdHJhd2JlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5TWlsa0Nvd0J0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5V29ya2VyQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICB1cGdyYWRlTWFjaGluZUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgYnV5TGFuZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBzdGFydCgpIHt9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cblxuICBwdWJsaWMgc2V0dXBVSSgpIHtcbiAgICB0aGlzLmJ1eVRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5VG9tYXRvU2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5VG9tYXRvU2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYnV5Qmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5idXlCbHVlYmVycnlTZWVkQnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tCdXlCbHVlYmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5idXlTdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5idXlTdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5U3RyYXdiZXJyeVNlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJ1eU1pbGtDb3dCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5TWlsa0Nvd0J0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5TWlsa2Nvd0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuYnV5V29ya2VyQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1eVdvcmtlckJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5V29ya2VyQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy51cGdyYWRlTWFjaGluZUJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy51cGdyYWRlTWFjaGluZUJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrVXBncmFkZU1hY2hpbmVCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJ1eUxhbmRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV5TGFuZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQnV5TGFuZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwic2V0dXAgVUkgRG9uZSEhISFcIik7XG4gIH1cbiAgdXBkYXRlVUkoKSB7fVxuICByZXNldFVJKCkge31cbiAgb25DbGlja0J1eVRvbWF0b1NlZWRCdG4oKSB7XG4gICAgY29uc29sZS5sb2coXCJvbkNsaWNrQnV5VG9tYXRvU2VlZEJ0biEhISFcIik7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ29sZCA+PVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UudG9tYXRvU2VlZC5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eVRvbWF0b1NlZWQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZmluZExhbmRGb3JQbGFudCgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5Qmx1ZWJlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5ibHVlYmVycnlTZWVkLmJ1eVByaWNlXG4gICAgKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmUuYnV5Qmx1ZWJlcnJ5U2VlZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmVuYWJsZUFsbExhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5maW5kTGFuZEZvclBsYW50KCk7XG4gICAgfVxuICB9XG4gIG9uQ2xpY2tCdXlTdHJhd2JlcnJ5U2VlZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5zdHJhd2JlcnJ5U2VlZC5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eVN0cmF3YmVycnlTZWVkKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc3RvcmFnZVVJLnVwZGF0ZVVJKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZW5hYmxlQWxsTGFuZCgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmZpbmRMYW5kRm9yUGxhbnQoKTtcbiAgICB9XG4gIH1cbiAgb25DbGlja0J1eU1pbGtjb3dCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ29sZCA+PVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWlsa0Nvdy5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eU1pbGtDb3coKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5lbmFibGVBbGxMYW5kKCk7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZmluZExhbmRGb3JQbGFudCgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5V29ya2VyQnRuKCkge1xuICAgIGlmIChcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmdvbGQgPj1cbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLndvcmtlci5idXlQcmljZVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eVdvcmtlcigpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnVzZVdvcmtlckZvclF1ZXVlMygpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrVXBncmFkZU1hY2hpbmVCdG4oKSB7XG4gICAgaWYgKFxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UuZ29sZCA+PVxuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JhZ2UubWFjaGluZS51cGdyYWRlUHJpY2VcbiAgICApIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yZS51cGdyYWRlTWFjaGluZSgpO1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnN0b3JhZ2VVSS51cGRhdGVVSSgpO1xuICAgIH1cbiAgfVxuICBvbkNsaWNrQnV5TGFuZEJ0bigpIHtcbiAgICBpZiAoXG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2UuZ2FtZUNvbnRyb2xsZXIubW9kZWwuc3RvcmFnZS5nb2xkID49XG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQuYnV5UHJpY2UgJiZcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyIDwgOVxuICAgICkge1xuICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLmdhbWVDb250cm9sbGVyLm1vZGVsLnN0b3JlLmJ1eUxhbmQoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zdG9yYWdlVUkudXBkYXRlVUkoKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS51cGRhdGVMYW5kVUkoXG4gICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5nYW1lQ29udHJvbGxlci5tb2RlbC5zdG9yYWdlLmxhbmQubnVtYmVyIC0gMVxuICAgICAgKTtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5maW5kTGFuZEZvclBsYW50KCk7XG4gICAgfVxuICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3JlL212Yy9CYXNlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQXlDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNxQiw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhdmVEYXRhIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvTWFuYWdlci9HYW1lU2F2ZU1hbmFnZXJcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNb2RlbCB7XG4gIGFic3RyYWN0IGluaXQoLi4uYXJnczogYW55W10pOiB2b2lkO1xuICBhYnN0cmFjdCBsb2FkVG9tYXRvU2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9TZWVkXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVUb21hdG9TZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvU2VlZFwiXT47XG5cbiAgYWJzdHJhY3QgbG9hZEJsdWViZXJyeVNlZWRGcm9tU2F2ZShcbiAgICBkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5U2VlZFwiXT5cbiAgKTogdm9pZDtcbiAgYWJzdHJhY3QgZ2V0U2F2ZUJsdWViZXJyeVNlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlTZWVkXCJdPjtcblxuICBhYnN0cmFjdCBsb2FkU3RyYXdiZXJyeVNlZWRGcm9tU2F2ZShcbiAgICBkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVNlZWRcIl0+XG4gICk6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVTdHJhd2JlcnJ5U2VlZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlTZWVkXCJdPjtcblxuICBhYnN0cmFjdCBsb2FkTWlsa0Nvd0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrQ293XCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVNaWxrQ293RGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa0Nvd1wiXT47XG5cbiAgYWJzdHJhY3QgbG9hZFdva2VyRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcIndvcmtlclwiXT4pOiB2b2lkO1xuICBhYnN0cmFjdCBnZXRTYXZlV29ya2VyRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2VyXCJdPjtcblxuICBhYnN0cmFjdCBsb2FkTWFjaGluZUZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtYWNoaW5lXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVNYWNoaW5lRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWFjaGluZVwiXT47XG5cbiAgYWJzdHJhY3QgbG9hZEdvbGRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiZ29sZFwiXT4pOiB2b2lkO1xuICBhYnN0cmFjdCBnZXRTYXZlR29sZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImdvbGRcIl0+O1xuXG4gIGFic3RyYWN0IGxvYWRUaW1lU3RhbXBGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widGltZXN0YW1wXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVUaW1lU3RhbXBEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0aW1lc3RhbXBcIl0+O1xuXG4gIGFic3RyYWN0IGxvYWRUb21hdG9Gcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVUb21hdG9EYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9cIl0+O1xuXG4gIGFic3RyYWN0IGxvYWRCbHVlYmVycnlGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5XCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVCbHVlYmVycnlEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlcIl0+O1xuXG4gIGFic3RyYWN0IGxvYWRTdHJhd2JlcnJ5RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlcIl0+KTogdm9pZDtcbiAgYWJzdHJhY3QgZ2V0U2F2ZVN0cmF3YmVycnlEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5XCJdPjtcblxuICBhYnN0cmFjdCBsb2FkTWlsa0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVNaWxrRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa1wiXT47XG59XG4iXX0=
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
