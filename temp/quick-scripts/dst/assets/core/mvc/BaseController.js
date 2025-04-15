
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