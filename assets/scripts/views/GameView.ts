import { BaseView } from "../../core/mvc/BaseView";
import { GameController } from "../controllers/GameController";

export class GameView extends BaseView<GameController> {
  controller: GameController;
  updateView(): void {}
  constructor(_controller: GameController) {
    super();
    this.controller = _controller;
    this.updateView();
  }
}
