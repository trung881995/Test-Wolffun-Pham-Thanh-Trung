
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/LandUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fbc3+Fqj9Cc4pfV5s0aDz8', 'LandUI');
// scripts/ui/LandUI.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandState = void 0;
var CattleType_1 = require("../../enums/CattleType");
var PlantType_1 = require("../../enums/PlantType");
var GameConfig_1 = require("../data/GameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LandState;
(function (LandState) {
    LandState[LandState["Undefined"] = 0] = "Undefined";
    LandState[LandState["Empty"] = 1] = "Empty";
    LandState[LandState["Plant"] = 2] = "Plant";
    LandState[LandState["Cattle"] = 3] = "Cattle";
    LandState[LandState["Harvest"] = 4] = "Harvest";
})(LandState = exports.LandState || (exports.LandState = {}));
var LandUI = /** @class */ (function (_super) {
    __extends(LandUI, _super);
    function LandUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tomatoSeedBtn = null;
        _this.blueberrySeedBtn = null;
        _this.strawberrySeedBtn = null;
        _this.milkCowBtn = null;
        _this.harvestBtn = null;
        _this.milkBtn = null;
        _this.nameLb = null;
        _this.timeLb = null;
        _this.workerSprite = null;
        _this.Sprite = null;
        _this.isEmpty = true;
        _this.landState = LandState.Empty;
        _this.plantType = null;
        _this.cattleType = null;
        _this.loadImage = function (imageName, sprite) {
            var path = "images/" + imageName;
            if (imageName == "") {
                sprite.spriteFrame = null;
                return;
            }
            cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
                if (err) {
                    cc.error("Kh\u00F4ng th\u1EC3 load \u1EA3nh: " + path, err);
                    return;
                }
                sprite.spriteFrame = spriteFrame;
            });
        };
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LandUI.prototype.start = function () { };
    LandUI.prototype.update = function (dt) {
        if (!this.isEmpty) {
            this.time -= dt;
            if (this.time == 0) {
                this.landState = LandState.Empty;
            }
            else if (this.time < 0) {
                this.landState = LandState.Harvest;
            }
            else {
                this.landState =
                    this.plantType != null ? LandState.Plant : LandState.Cattle;
            }
            this.DisplayUI();
        }
    };
    LandUI.prototype.DisplayUI = function () {
        switch (this.landState) {
            case LandState.Empty:
                //this.resetUI();
                this.setupUI();
                break;
            case LandState.Harvest:
                this.updateUI();
                break;
            case LandState.Plant:
                this.updateUI();
                break;
            case LandState.Cattle:
                this.updateUI();
                break;
            default:
                break;
        }
    };
    LandUI.prototype.setupUI = function () {
        this.tomatoSeedBtn.node.active = true;
        this.tomatoSeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickTomatoSeedBtn, this);
        this.blueberrySeedBtn.node.active = true;
        this.blueberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickBlueberrySeedBtn, this);
        this.strawberrySeedBtn.node.active = true;
        this.strawberrySeedBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickStrawberrySeedBtn, this);
        this.milkCowBtn.node.active = true;
        this.milkCowBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickMilkCowBtn, this);
        //this.harvestBtn.node.active = true;
        this.harvestBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickHarvestBtn, this);
        //this.milkBtn.node.active = true;
        this.milkBtn.node.on(cc.Node.EventType.TOUCH_END, this.onClickMilkBtn, this);
        console.log("setup UI Done!!!!");
    };
    LandUI.prototype.updateUI = function () {
        this.setTimeLb(this.time);
        if (this.time > 0) {
            if (this.landState == LandState.Plant) {
                switch (this.plantType) {
                    case PlantType_1.PlantType.tomatoSeed:
                        this.setSprite(GameConfig_1.PlantConfigs.tomatoseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.tomatoseed.name);
                        break;
                    case PlantType_1.PlantType.blueberrySeed:
                        this.setSprite(GameConfig_1.PlantConfigs.blueberryseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.blueberryseed.name);
                        break;
                    case PlantType_1.PlantType.strawberrySeed:
                        this.setSprite(GameConfig_1.PlantConfigs.strawberryseed.name);
                        this.setNameLb(GameConfig_1.PlantConfigs.strawberryseed.name);
                        break;
                    default:
                        break;
                }
            }
            else if (this.landState == LandState.Cattle) {
                switch (this.cattleType) {
                    case CattleType_1.CattleType.Cow:
                        this.setSprite(GameConfig_1.CattleConfigs.cow.name);
                        this.setNameLb(GameConfig_1.CattleConfigs.cow.name);
                        break;
                    case CattleType_1.CattleType.Milkcow:
                        this.setSprite(GameConfig_1.CattleConfigs.milkcow.name);
                        this.setNameLb(GameConfig_1.CattleConfigs.milkcow.name);
                        break;
                    default:
                        break;
                }
            }
            this.tomatoSeedBtn.node.active = false;
            this.blueberrySeedBtn.node.active = false;
            this.strawberrySeedBtn.node.active = false;
            this.milkCowBtn.node.active = false;
            this.nameLb.node.active = true;
            this.timeLb.node.active = true;
            this.Sprite.node.active = true;
        }
        else if (this.time < 0) {
            this.harvestBtn.node.active = this.plantType != null;
            this.milkBtn.node.active = this.cattleType != null;
        }
        else {
        }
    };
    LandUI.prototype.onClickTomatoSeedBtn = function () {
        this.isEmpty = false;
        this.plantType = PlantType_1.PlantType.tomatoSeed;
        this.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
        //this.updateUI();
    };
    LandUI.prototype.onClickBlueberrySeedBtn = function () {
        this.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
        this.isEmpty = false;
        this.plantType = PlantType_1.PlantType.blueberrySeed;
    };
    LandUI.prototype.onClickStrawberrySeedBtn = function () {
        this.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
        this.isEmpty = false;
        this.plantType = PlantType_1.PlantType.strawberrySeed;
    };
    LandUI.prototype.onClickMilkCowBtn = function () {
        this.time = GameConfig_1.PlantConfigs.tomatoseed.harvestInterval * 60;
        this.isEmpty = false;
        this.cattleType = CattleType_1.CattleType.Milkcow;
    };
    LandUI.prototype.onClickHarvestBtn = function () {
        this.resetUI();
    };
    LandUI.prototype.onClickMilkBtn = function () {
        this.resetUI();
    };
    LandUI.prototype.setNameLb = function (name) {
        this.nameLb.string = name;
    };
    LandUI.prototype.setTimeLb = function (time) {
        if (time < 0) {
            this.timeLb.string = "0s";
        }
        else {
            var _time = parseInt(time.toString());
            this.timeLb.string = _time.toString() + "s";
        }
    };
    LandUI.prototype.setWorkerSprite = function () {
        this.loadImage("Worker", this.workerSprite);
    };
    LandUI.prototype.setSprite = function (imageName) {
        this.loadImage(imageName, this.Sprite);
    };
    LandUI.prototype.resetUI = function () {
        this.tomatoSeedBtn.node.active = true;
        this.blueberrySeedBtn.node.active = true;
        this.strawberrySeedBtn.node.active = true;
        this.milkCowBtn.node.active = true;
        this.harvestBtn.node.active = false;
        this.milkBtn.node.active = false;
        this.nameLb.string = "";
        this.nameLb.node.active = false;
        this.timeLb.string = "";
        this.timeLb.node.active = false;
        this.workerSprite.node.active = false;
        this.Sprite.node.active = false;
        this.plantType = null;
        this.cattleType = null;
        this.time = 0;
        this.isEmpty = true;
    };
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "tomatoSeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "blueberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "strawberrySeedBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "milkCowBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "harvestBtn", void 0);
    __decorate([
        property(cc.Button)
    ], LandUI.prototype, "milkBtn", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], LandUI.prototype, "timeLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], LandUI.prototype, "workerSprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], LandUI.prototype, "Sprite", void 0);
    LandUI = __decorate([
        ccclass
    ], LandUI);
    return LandUI;
}(cc.Component));
exports.default = LandUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL0xhbmRVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELG1EQUFrRDtBQUVsRCxpREFBaUU7QUFFM0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ25CLG1EQUFTLENBQUE7SUFDVCwyQ0FBSyxDQUFBO0lBQ0wsMkNBQUssQ0FBQTtJQUNMLDZDQUFNLENBQUE7SUFDTiwrQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRUQ7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUErT0M7UUE3T0MsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBRW5DLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUVwQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDdkMsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFlLElBQUksQ0FBQztRQStLOUIsZUFBUyxHQUFHLFVBQUMs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QU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQTVPRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ2U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDZ0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDSztJQXhCTixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBK08xQjtJQUFELGFBQUM7Q0EvT0QsQUErT0MsQ0EvT21DLEVBQUUsQ0FBQyxTQUFTLEdBK08vQztrQkEvT29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ2F0dGxlVHlwZSB9IGZyb20gXCIuLi8uLi9lbnVtcy9DYXR0bGVUeXBlXCI7XG5pbXBvcnQgeyBQbGFudFR5cGUgfSBmcm9tIFwiLi4vLi4vZW51bXMvUGxhbnRUeXBlXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xuaW1wb3J0IHsgQ2F0dGxlQ29uZmlncywgUGxhbnRDb25maWdzIH0gZnJvbSBcIi4uL2RhdGEvR2FtZUNvbmZpZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZXhwb3J0IGVudW0gTGFuZFN0YXRlIHtcbiAgVW5kZWZpbmVkLFxuICBFbXB0eSxcbiAgUGxhbnQsXG4gIENhdHRsZSxcbiAgSGFydmVzdCxcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5kVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICB0b21hdG9TZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBibHVlYmVycnlTZWVkQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBzdHJhd2JlcnJ5U2VlZEJ0bjogY2MuQnV0dG9uID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgbWlsa0Nvd0J0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBoYXJ2ZXN0QnRuOiBjYy5CdXR0b24gPSBudWxsO1xuICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICBtaWxrQnRuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbmFtZUxiOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdGltZUxiOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgd29ya2VyU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIFNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICBpc0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgdGltZTogbnVtYmVyO1xuICBsYW5kU3RhdGU6IExhbmRTdGF0ZSA9IExhbmRTdGF0ZS5FbXB0eTtcbiAgcGxhbnRUeXBlOiBQbGFudFR5cGUgPSBudWxsO1xuICBjYXR0bGVUeXBlOiBDYXR0bGVUeXBlID0gbnVsbDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gIC8vIG9uTG9hZCAoKSB7fVxuXG4gIHN0YXJ0KCkge31cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAoIXRoaXMuaXNFbXB0eSkge1xuICAgICAgdGhpcy50aW1lIC09IGR0O1xuICAgICAgaWYgKHRoaXMudGltZSA9PSAwKSB7XG4gICAgICAgIHRoaXMubGFuZFN0YXRlID0gTGFuZFN0YXRlLkVtcHR5O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPCAwKSB7XG4gICAgICAgIHRoaXMubGFuZFN0YXRlID0gTGFuZFN0YXRlLkhhcnZlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhbmRTdGF0ZSA9XG4gICAgICAgICAgdGhpcy5wbGFudFR5cGUgIT0gbnVsbCA/IExhbmRTdGF0ZS5QbGFudCA6IExhbmRTdGF0ZS5DYXR0bGU7XG4gICAgICB9XG4gICAgICB0aGlzLkRpc3BsYXlVSSgpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgRGlzcGxheVVJKCkge1xuICAgIHN3aXRjaCAodGhpcy5sYW5kU3RhdGUpIHtcbiAgICAgIGNhc2UgTGFuZFN0YXRlLkVtcHR5OlxuICAgICAgICAvL3RoaXMucmVzZXRVSSgpO1xuICAgICAgICB0aGlzLnNldHVwVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5IYXJ2ZXN0OlxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMYW5kU3RhdGUuUGxhbnQ6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExhbmRTdGF0ZS5DYXR0bGU6XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldHVwVUkoKSB7XG4gICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1RvbWF0b1NlZWRCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrQmx1ZWJlcnJ5U2VlZEJ0bixcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja1N0cmF3YmVycnlTZWVkQnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm1pbGtDb3dCdG4ubm9kZS5vbihcbiAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgIHRoaXMub25DbGlja01pbGtDb3dCdG4sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICAvL3RoaXMuaGFydmVzdEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5oYXJ2ZXN0QnRuLm5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICB0aGlzLm9uQ2xpY2tIYXJ2ZXN0QnRuLFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgLy90aGlzLm1pbGtCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWlsa0J0bi5ub2RlLm9uKFxuICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgdGhpcy5vbkNsaWNrTWlsa0J0bixcbiAgICAgIHRoaXNcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coXCJzZXR1cCBVSSBEb25lISEhIVwiKTtcbiAgfVxuICBwdWJsaWMgdXBkYXRlVUkoKSB7XG4gICAgdGhpcy5zZXRUaW1lTGIodGhpcy50aW1lKTtcblxuICAgIGlmICh0aGlzLnRpbWUgPiAwKSB7XG4gICAgICBpZiAodGhpcy5sYW5kU3RhdGUgPT0gTGFuZFN0YXRlLlBsYW50KSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wbGFudFR5cGUpIHtcbiAgICAgICAgICBjYXNlIFBsYW50VHlwZS50b21hdG9TZWVkOlxuICAgICAgICAgICAgdGhpcy5zZXRTcHJpdGUoUGxhbnRDb25maWdzLnRvbWF0b3NlZWQubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihQbGFudENvbmZpZ3MudG9tYXRvc2VlZC5uYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgUGxhbnRUeXBlLmJsdWViZXJyeVNlZWQ6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3MuYmx1ZWJlcnJ5c2VlZC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKFBsYW50Q29uZmlncy5ibHVlYmVycnlzZWVkLm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBQbGFudFR5cGUuc3RyYXdiZXJyeVNlZWQ6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihQbGFudENvbmZpZ3Muc3RyYXdiZXJyeXNlZWQubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sYW5kU3RhdGUgPT0gTGFuZFN0YXRlLkNhdHRsZSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2F0dGxlVHlwZSkge1xuICAgICAgICAgIGNhc2UgQ2F0dGxlVHlwZS5Db3c6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShDYXR0bGVDb25maWdzLmNvdy5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZUxiKENhdHRsZUNvbmZpZ3MuY293Lm5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBDYXR0bGVUeXBlLk1pbGtjb3c6XG4gICAgICAgICAgICB0aGlzLnNldFNwcml0ZShDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWVMYihDYXR0bGVDb25maWdzLm1pbGtjb3cubmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy50b21hdG9TZWVkQnRuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJsdWViZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RyYXdiZXJyeVNlZWRCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubWlsa0Nvd0J0bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLm5hbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLlNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPCAwKSB7XG4gICAgICB0aGlzLmhhcnZlc3RCdG4ubm9kZS5hY3RpdmUgPSB0aGlzLnBsYW50VHlwZSAhPSBudWxsO1xuICAgICAgdGhpcy5taWxrQnRuLm5vZGUuYWN0aXZlID0gdGhpcy5jYXR0bGVUeXBlICE9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9tYXRvU2VlZEJ0bigpIHtcbiAgICB0aGlzLmlzRW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLnBsYW50VHlwZSA9IFBsYW50VHlwZS50b21hdG9TZWVkO1xuICAgIHRoaXMudGltZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgIC8vdGhpcy51cGRhdGVVSSgpO1xuICB9XG4gIG9uQ2xpY2tCbHVlYmVycnlTZWVkQnRuKCkge1xuICAgIHRoaXMudGltZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgIHRoaXMucGxhbnRUeXBlID0gUGxhbnRUeXBlLmJsdWViZXJyeVNlZWQ7XG4gIH1cbiAgb25DbGlja1N0cmF3YmVycnlTZWVkQnRuKCkge1xuICAgIHRoaXMudGltZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgIHRoaXMucGxhbnRUeXBlID0gUGxhbnRUeXBlLnN0cmF3YmVycnlTZWVkO1xuICB9XG4gIG9uQ2xpY2tNaWxrQ293QnRuKCkge1xuICAgIHRoaXMudGltZSA9IFBsYW50Q29uZmlncy50b21hdG9zZWVkLmhhcnZlc3RJbnRlcnZhbCAqIDYwO1xuICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgIHRoaXMuY2F0dGxlVHlwZSA9IENhdHRsZVR5cGUuTWlsa2NvdztcbiAgfVxuICBvbkNsaWNrSGFydmVzdEJ0bigpIHtcbiAgICB0aGlzLnJlc2V0VUkoKTtcbiAgfVxuICBvbkNsaWNrTWlsa0J0bigpIHtcbiAgICB0aGlzLnJlc2V0VUkoKTtcbiAgfVxuICBzZXROYW1lTGIobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gbmFtZTtcbiAgfVxuICBzZXRUaW1lTGIodGltZTogbnVtYmVyKSB7XG4gICAgaWYgKHRpbWUgPCAwKSB7XG4gICAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBcIjBzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBfdGltZSA9IHBhcnNlSW50KHRpbWUudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLnRpbWVMYi5zdHJpbmcgPSBfdGltZS50b1N0cmluZygpICsgXCJzXCI7XG4gICAgfVxuICB9XG4gIHNldFdvcmtlclNwcml0ZSgpIHtcbiAgICB0aGlzLmxvYWRJbWFnZShcIldvcmtlclwiLCB0aGlzLndvcmtlclNwcml0ZSk7XG4gIH1cbiAgc2V0U3ByaXRlKGltYWdlTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoaW1hZ2VOYW1lLCB0aGlzLlNwcml0ZSk7XG4gIH1cblxuICBsb2FkSW1hZ2UgPSAoaW1hZ2VOYW1lOiBzdHJpbmcsIHNwcml0ZTogY2MuU3ByaXRlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGBpbWFnZXMvJHtpbWFnZU5hbWV9YDtcbiAgICBpZiAoaW1hZ2VOYW1lID09IFwiXCIpIHtcbiAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYy5lcnJvcihgS2jDtG5nIHRo4buDIGxvYWQg4bqjbmg6ICR7cGF0aH1gLCBlcnIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9KTtcbiAgfTtcbiAgcmVzZXRVSSgpIHtcbiAgICB0aGlzLnRvbWF0b1NlZWRCdG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmx1ZWJlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdHJhd2JlcnJ5U2VlZEJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5taWxrQ293QnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmhhcnZlc3RCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm1pbGtCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBcIlwiO1xuICAgIHRoaXMubmFtZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCJcIjtcbiAgICB0aGlzLnRpbWVMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMud29ya2VyU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5TcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMucGxhbnRUeXBlID0gbnVsbDtcbiAgICB0aGlzLmNhdHRsZVR5cGUgPSBudWxsO1xuXG4gICAgdGhpcy50aW1lID0gMDtcbiAgICB0aGlzLmlzRW1wdHkgPSB0cnVlO1xuICB9XG59XG4iXX0=