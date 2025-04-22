
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
require('./assets/scripts/models/GameModel');
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