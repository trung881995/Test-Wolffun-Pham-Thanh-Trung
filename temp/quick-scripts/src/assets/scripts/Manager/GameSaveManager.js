"use strict";
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