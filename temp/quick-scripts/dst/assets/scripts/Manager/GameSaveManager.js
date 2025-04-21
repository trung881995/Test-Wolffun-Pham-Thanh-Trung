
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvR2FtZVNhdmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0lBQUE7SUFzQ0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBO0FBdENZLDRCQUFRO0FBdUNyQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBRUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxzQ0FBYTtBQUcxQjtJQUFBO0lBMEJBLENBQUM7SUFiUSxvQkFBSSxHQUFYLFVBQVksR0FBVyxFQUFFLElBQVM7UUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksR0FBVztRQUNyQixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0scUJBQUssR0FBWjtRQUNFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBeEJNLHdCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFDL0IseUJBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUNqQyx5QkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLHlCQUFTLEdBQUcseUJBQXlCLENBQUM7SUFDdEMseUJBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUN0Qyx5QkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLHlCQUFTLEdBQUcseUJBQXlCLENBQUM7SUFDdEMseUJBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUN0Qyx5QkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLDBCQUFVLEdBQUcseUJBQXlCLENBQUM7SUFDdkMsMEJBQVUsR0FBRyx5QkFBeUIsQ0FBQztJQWVoRCxzQkFBQztDQTFCRCxBQTBCQyxJQUFBO0FBMUJZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQmx1ZWJlcnJ5LFxuICBCbHVlYmVycnlTZWVkLFxuICBMYW5kLFxuICBNYWNoaW5lLFxuICBNaWxrLFxuICBNaWxrQ293LFxuICBTdHJhd2JlcnJ5LFxuICBTdHJhd2JlcnJ5U2VlZCxcbiAgVG9tYXRvLFxuICBUb21hdG9TZWVkLFxuICBXb3JrZXIsXG59IGZyb20gXCIuLi9zdG9yYWdlL1N0b3JhZ2VcIjtcbmltcG9ydCBMYW5kVUkgZnJvbSBcIi4uL3VpL0xhbmRVSVwiO1xuXG5leHBvcnQgY2xhc3MgU2F2ZURhdGEge1xuICBnb2xkOiBudW1iZXI7XG4gIHRvbWF0b1NlZWQ6IFBhcnRpYWw8VG9tYXRvU2VlZD47XG4gIGJsdWViZXJyeVNlZWQ6IFBhcnRpYWw8Qmx1ZWJlcnJ5U2VlZD47XG4gIHN0cmF3YmVycnlTZWVkOiBQYXJ0aWFsPFN0cmF3YmVycnlTZWVkPjtcbiAgbWlsa0NvdzogUGFydGlhbDxNaWxrQ293PjtcblxuICB3b3JrZXI6IFBhcnRpYWw8V29ya2VyPjtcbiAgbWFjaGluZTogUGFydGlhbDxNYWNoaW5lPjtcblxuICB0b21hdG86IFBhcnRpYWw8VG9tYXRvPjtcbiAgYmx1ZWJlcnJ5OiBQYXJ0aWFsPEJsdWViZXJyeT47XG4gIHN0cmF3YmVycnk6IFBhcnRpYWw8U3RyYXdiZXJyeT47XG4gIG1pbGs6IFBhcnRpYWw8TWlsaz47XG5cbiAgdGltZXN0YW1wOiBudW1iZXI7XG5cbiAgbGFuZDogUGFydGlhbDxMYW5kPjtcblxuICB3b3JraW5nV29ya2VyTnVtYmVyOiBudW1iZXI7XG5cbiAgLy9xdWV1ZUxhbmRBcnJheTogTGFuZFtdO1xuXG4gIC8qdG9tYXRvOiB7XG4gICAgdG90YWxIYXJ2ZXN0ZWQ6IG51bWJlcjtcbiAgICBsYXN0VXBkYXRlOiBudW1iZXI7XG4gIH07XG4gIGJsdWViZXJyeToge1xuICAgIHRvdGFsSGFydmVzdGVkOiBudW1iZXI7XG4gICAgbGFzdFVwZGF0ZTogbnVtYmVyO1xuICB9O1xuICBjb3c6IHtcbiAgICB0b3RhbE1pbGs6IG51bWJlcjtcbiAgICBsYXN0TWlsa1RpbWU6IG51bWJlcjtcbiAgfTtcblxuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgKi9cbn1cbmV4cG9ydCBjbGFzcyBTYXZlUXVldWVEYXRhIHtcbiAgcXVldWVJbmRleEFycmF5OiBQYXJ0aWFsPG51bWJlcltdPjtcbn1cbmV4cG9ydCBjbGFzcyBTYXZlTGFuZDBEYXRhIHtcbiAgbGFuZF8wOiBQYXJ0aWFsPExhbmQ+O1xufVxuZXhwb3J0IGNsYXNzIFNhdmVMYW5kMURhdGEge1xuICBsYW5kXzE6IFBhcnRpYWw8TGFuZD47XG59XG5leHBvcnQgY2xhc3MgU2F2ZUxhbmQyRGF0YSB7XG4gIGxhbmRfMjogUGFydGlhbDxMYW5kPjtcbn1cbmV4cG9ydCBjbGFzcyBTYXZlTGFuZDNEYXRhIHtcbiAgbGFuZF8zOiBQYXJ0aWFsPExhbmQ+O1xufVxuZXhwb3J0IGNsYXNzIFNhdmVMYW5kNERhdGEge1xuICBsYW5kXzQ6IFBhcnRpYWw8TGFuZD47XG59XG5leHBvcnQgY2xhc3MgU2F2ZUxhbmQ1RGF0YSB7XG4gIGxhbmRfNTogUGFydGlhbDxMYW5kPjtcbn1cbmV4cG9ydCBjbGFzcyBTYXZlTGFuZDZEYXRhIHtcbiAgbGFuZF82OiBQYXJ0aWFsPExhbmQ+O1xufVxuZXhwb3J0IGNsYXNzIFNhdmVMYW5kN0RhdGEge1xuICBsYW5kXzc6IFBhcnRpYWw8TGFuZD47XG59XG5leHBvcnQgY2xhc3MgU2F2ZUxhbmQ4RGF0YSB7XG4gIGxhbmRfODogUGFydGlhbDxMYW5kPjtcbn1cbmV4cG9ydCBjbGFzcyBHYW1lU2F2ZU1hbmFnZXIge1xuICBzdGF0aWMgU0FWRV9LRVkgPSBcIndvbGZmdW5fdGVzdF9zYXZlXCI7XG4gIHN0YXRpYyBTQVZFX0tFWTIgPSBcIndvbGZmdW5fdGVzdF9zYXZlMlwiO1xuICBzdGF0aWMgU0FWRV9LRVkzID0gXCJ3b2xmZnVuX3Rlc3RfbGFuZF9zYXZlMFwiO1xuICBzdGF0aWMgU0FWRV9LRVk0ID0gXCJ3b2xmZnVuX3Rlc3RfbGFuZF9zYXZlMVwiO1xuICBzdGF0aWMgU0FWRV9LRVk1ID0gXCJ3b2xmZnVuX3Rlc3RfbGFuZF9zYXZlMlwiO1xuICBzdGF0aWMgU0FWRV9LRVk2ID0gXCJ3b2xmZnVuX3Rlc3RfbGFuZF9zYXZlM1wiO1xuICBzdGF0aWMgU0FWRV9LRVk3ID0gXCJ3b2xmZnVuX3Rlc3RfbGFuZF9zYXZlNFwiO1xuICBzdGF0aWMgU0FWRV9LRVk4ID0gXCJ3b2xmZnVuX3Rlc3RfbGFuZF9zYXZlNVwiO1xuICBzdGF0aWMgU0FWRV9LRVk5ID0gXCJ3b2xmZnVuX3Rlc3RfbGFuZF9zYXZlNlwiO1xuICBzdGF0aWMgU0FWRV9LRVkxMCA9IFwid29sZmZ1bl90ZXN0X2xhbmRfc2F2ZTdcIjtcbiAgc3RhdGljIFNBVkVfS0VZMTEgPSBcIndvbGZmdW5fdGVzdF9sYW5kX3NhdmU4XCI7XG5cbiAgc3RhdGljIHNhdmUoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgc3RhdGljIGxvYWQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGNvbnNvbGUubG9nKFwicmF3OiBcIiArIHJhdyk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmF3KTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhcigpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxufVxuIl19