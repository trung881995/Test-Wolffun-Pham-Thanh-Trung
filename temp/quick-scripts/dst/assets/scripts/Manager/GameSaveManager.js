
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