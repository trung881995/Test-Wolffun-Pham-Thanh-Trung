"use strict";
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