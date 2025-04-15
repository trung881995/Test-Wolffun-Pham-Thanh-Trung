
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