
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
exports.GameSaveManager = void 0;
var SAVE_KEY = "wolffun_farm_save";
var GameSaveManager = /** @class */ (function () {
    function GameSaveManager() {
    }
    GameSaveManager.save = function (data) {
        localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    };
    GameSaveManager.load = function () {
        var raw = localStorage.getItem(SAVE_KEY);
        return raw ? JSON.parse(raw) : null;
    };
    GameSaveManager.clear = function () {
        localStorage.removeItem(SAVE_KEY);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvR2FtZVNhdmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQSxJQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztBQUVyQztJQUFBO0lBYUEsQ0FBQztJQVpRLG9CQUFJLEdBQVgsVUFBWSxJQUFjO1FBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sb0JBQUksR0FBWDtRQUNFLElBQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRU0scUJBQUssR0FBWjtRQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJsdWViZXJyeSxcbiAgQmx1ZWJlcnJ5U2VlZCxcbiAgTWFjaGluZSxcbiAgTWlsayxcbiAgTWlsa0NvdyxcbiAgU3RyYXdiZXJyeSxcbiAgU3RyYXdiZXJyeVNlZWQsXG4gIFRvbWF0byxcbiAgVG9tYXRvU2VlZCxcbiAgV29ya2VyLFxufSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2F2ZURhdGEge1xuICBnb2xkOiBudW1iZXI7XG4gIHRvbWF0b1NlZWQ6IFBhcnRpYWw8VG9tYXRvU2VlZD47XG4gIGJsdWViZXJyeVNlZWQ6IFBhcnRpYWw8Qmx1ZWJlcnJ5U2VlZD47XG4gIHN0cmF3YmVycnlTZWVkOiBQYXJ0aWFsPFN0cmF3YmVycnlTZWVkPjtcbiAgbWlsa0NvdzogUGFydGlhbDxNaWxrQ293PjtcblxuICB3b3JrZXI6IFBhcnRpYWw8V29ya2VyPjtcbiAgbWFjaGluZTogUGFydGlhbDxNYWNoaW5lPjtcblxuICB0b21hdG86IFBhcnRpYWw8VG9tYXRvPjtcbiAgYmx1ZWJlcnJ5OiBQYXJ0aWFsPEJsdWViZXJyeT47XG4gIHN0cmF3YmVycnk6IFBhcnRpYWw8U3RyYXdiZXJyeT47XG4gIG1pbGs6IFBhcnRpYWw8TWlsaz47XG5cbiAgdGltZXN0YW1wOiBudW1iZXI7XG5cbiAgLyp0b21hdG86IHtcbiAgICB0b3RhbEhhcnZlc3RlZDogbnVtYmVyO1xuICAgIGxhc3RVcGRhdGU6IG51bWJlcjtcbiAgfTtcbiAgYmx1ZWJlcnJ5OiB7XG4gICAgdG90YWxIYXJ2ZXN0ZWQ6IG51bWJlcjtcbiAgICBsYXN0VXBkYXRlOiBudW1iZXI7XG4gIH07XG4gIGNvdzoge1xuICAgIHRvdGFsTWlsazogbnVtYmVyO1xuICAgIGxhc3RNaWxrVGltZTogbnVtYmVyO1xuICB9O1xuXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICAqL1xufVxuXG5jb25zdCBTQVZFX0tFWSA9IFwid29sZmZ1bl9mYXJtX3NhdmVcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVTYXZlTWFuYWdlciB7XG4gIHN0YXRpYyBzYXZlKGRhdGE6IFNhdmVEYXRhKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0FWRV9LRVksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkKCk6IFNhdmVEYXRhIHwgbnVsbCB7XG4gICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU0FWRV9LRVkpO1xuICAgIHJldHVybiByYXcgPyBKU09OLnBhcnNlKHJhdykgOiBudWxsO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyKCk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFNBVkVfS0VZKTtcbiAgfVxufVxuIl19