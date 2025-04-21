"use strict";
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