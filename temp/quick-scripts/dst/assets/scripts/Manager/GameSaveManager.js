
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01hbmFnZXIvR2FtZVNhdmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxJQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztBQUVyQztJQUFBO0lBYUEsQ0FBQztJQVpRLG9CQUFJLEdBQVgsVUFBWSxJQUFjO1FBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sb0JBQUksR0FBWDtRQUNFLElBQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRU0scUJBQUssR0FBWjtRQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJsdWViZXJyeSxcbiAgQmx1ZWJlcnJ5U2VlZCxcbiAgTGFuZCxcbiAgTWFjaGluZSxcbiAgTWlsayxcbiAgTWlsa0NvdyxcbiAgU3RyYXdiZXJyeSxcbiAgU3RyYXdiZXJyeVNlZWQsXG4gIFRvbWF0byxcbiAgVG9tYXRvU2VlZCxcbiAgV29ya2VyLFxufSBmcm9tIFwiLi4vc3RvcmFnZS9TdG9yYWdlXCI7XG5pbXBvcnQgTGFuZFVJIGZyb20gXCIuLi91aS9MYW5kVUlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTYXZlRGF0YSB7XG4gIGdvbGQ6IG51bWJlcjtcbiAgdG9tYXRvU2VlZDogUGFydGlhbDxUb21hdG9TZWVkPjtcbiAgYmx1ZWJlcnJ5U2VlZDogUGFydGlhbDxCbHVlYmVycnlTZWVkPjtcbiAgc3RyYXdiZXJyeVNlZWQ6IFBhcnRpYWw8U3RyYXdiZXJyeVNlZWQ+O1xuICBtaWxrQ293OiBQYXJ0aWFsPE1pbGtDb3c+O1xuXG4gIHdvcmtlcjogUGFydGlhbDxXb3JrZXI+O1xuICBtYWNoaW5lOiBQYXJ0aWFsPE1hY2hpbmU+O1xuXG4gIHRvbWF0bzogUGFydGlhbDxUb21hdG8+O1xuICBibHVlYmVycnk6IFBhcnRpYWw8Qmx1ZWJlcnJ5PjtcbiAgc3RyYXdiZXJyeTogUGFydGlhbDxTdHJhd2JlcnJ5PjtcbiAgbWlsazogUGFydGlhbDxNaWxrPjtcblxuICB0aW1lc3RhbXA6IG51bWJlcjtcblxuICBsYW5kOiBQYXJ0aWFsPExhbmQ+O1xuXG4gIHdvcmtpbmdXb3JrZXJOdW1iZXI6IG51bWJlcjtcblxuICBxdWV1ZUxhbmRBcnJheTogTGFuZFVJW107XG4gIGxhbmRBcnJheTogTGFuZFtdO1xuXG4gIC8qdG9tYXRvOiB7XG4gICAgdG90YWxIYXJ2ZXN0ZWQ6IG51bWJlcjtcbiAgICBsYXN0VXBkYXRlOiBudW1iZXI7XG4gIH07XG4gIGJsdWViZXJyeToge1xuICAgIHRvdGFsSGFydmVzdGVkOiBudW1iZXI7XG4gICAgbGFzdFVwZGF0ZTogbnVtYmVyO1xuICB9O1xuICBjb3c6IHtcbiAgICB0b3RhbE1pbGs6IG51bWJlcjtcbiAgICBsYXN0TWlsa1RpbWU6IG51bWJlcjtcbiAgfTtcblxuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgKi9cbn1cblxuY29uc3QgU0FWRV9LRVkgPSBcIndvbGZmdW5fZmFybV9zYXZlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2F2ZU1hbmFnZXIge1xuICBzdGF0aWMgc2F2ZShkYXRhOiBTYXZlRGF0YSk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNBVkVfS0VZLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBzdGF0aWMgbG9hZCgpOiBTYXZlRGF0YSB8IG51bGwge1xuICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNBVkVfS0VZKTtcbiAgICByZXR1cm4gcmF3ID8gSlNPTi5wYXJzZShyYXcpIDogbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhcigpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTQVZFX0tFWSk7XG4gIH1cbn1cbiJdfQ==