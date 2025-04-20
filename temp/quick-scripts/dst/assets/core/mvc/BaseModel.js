
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/core/mvc/BaseModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b6ddZ9THRN+IRL8V7rE/Ub', 'BaseModel');
// core/mvc/BaseModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());
exports.BaseModel = BaseModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3JlL212Yy9CYXNlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQXlDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNxQiw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhdmVEYXRhIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvTWFuYWdlci9HYW1lU2F2ZU1hbmFnZXJcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNb2RlbCB7XG4gIGFic3RyYWN0IGluaXQoLi4uYXJnczogYW55W10pOiB2b2lkO1xuICBhYnN0cmFjdCBsb2FkVG9tYXRvU2VlZEZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9TZWVkXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVUb21hdG9TZWVkRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvU2VlZFwiXT47XG5cbiAgYWJzdHJhY3QgbG9hZEJsdWViZXJyeVNlZWRGcm9tU2F2ZShcbiAgICBkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5U2VlZFwiXT5cbiAgKTogdm9pZDtcbiAgYWJzdHJhY3QgZ2V0U2F2ZUJsdWViZXJyeVNlZWREYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlTZWVkXCJdPjtcblxuICBhYnN0cmFjdCBsb2FkU3RyYXdiZXJyeVNlZWRGcm9tU2F2ZShcbiAgICBkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wic3RyYXdiZXJyeVNlZWRcIl0+XG4gICk6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVTdHJhd2JlcnJ5U2VlZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlTZWVkXCJdPjtcblxuICBhYnN0cmFjdCBsb2FkTWlsa0Nvd0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrQ293XCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVNaWxrQ293RGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa0Nvd1wiXT47XG5cbiAgYWJzdHJhY3QgbG9hZFdva2VyRnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcIndvcmtlclwiXT4pOiB2b2lkO1xuICBhYnN0cmFjdCBnZXRTYXZlV29ya2VyRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wid29ya2VyXCJdPjtcblxuICBhYnN0cmFjdCBsb2FkTWFjaGluZUZyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtYWNoaW5lXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVNYWNoaW5lRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWFjaGluZVwiXT47XG5cbiAgYWJzdHJhY3QgbG9hZEdvbGRGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiZ29sZFwiXT4pOiB2b2lkO1xuICBhYnN0cmFjdCBnZXRTYXZlR29sZERhdGEoKTogUGFydGlhbDxTYXZlRGF0YVtcImdvbGRcIl0+O1xuXG4gIGFic3RyYWN0IGxvYWRUaW1lU3RhbXBGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widGltZXN0YW1wXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVUaW1lU3RhbXBEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0aW1lc3RhbXBcIl0+O1xuXG4gIGFic3RyYWN0IGxvYWRUb21hdG9Gcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1widG9tYXRvXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVUb21hdG9EYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJ0b21hdG9cIl0+O1xuXG4gIGFic3RyYWN0IGxvYWRCbHVlYmVycnlGcm9tU2F2ZShkYXRhOiBQYXJ0aWFsPFNhdmVEYXRhW1wiYmx1ZWJlcnJ5XCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVCbHVlYmVycnlEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJibHVlYmVycnlcIl0+O1xuXG4gIGFic3RyYWN0IGxvYWRTdHJhd2JlcnJ5RnJvbVNhdmUoZGF0YTogUGFydGlhbDxTYXZlRGF0YVtcInN0cmF3YmVycnlcIl0+KTogdm9pZDtcbiAgYWJzdHJhY3QgZ2V0U2F2ZVN0cmF3YmVycnlEYXRhKCk6IFBhcnRpYWw8U2F2ZURhdGFbXCJzdHJhd2JlcnJ5XCJdPjtcblxuICBhYnN0cmFjdCBsb2FkTWlsa0Zyb21TYXZlKGRhdGE6IFBhcnRpYWw8U2F2ZURhdGFbXCJtaWxrXCJdPik6IHZvaWQ7XG4gIGFic3RyYWN0IGdldFNhdmVNaWxrRGF0YSgpOiBQYXJ0aWFsPFNhdmVEYXRhW1wibWlsa1wiXT47XG59XG4iXX0=