import { BaseController } from "../../core/mvc/BaseController";
import { GameView } from "../views/GameView";
import { GameModel } from "../models/GameModel";

export class GameController extends BaseController<GameModel, GameView> {
  model: GameModel;
  view: GameView;
  constructor() {
    super();
    this.model = new GameModel();

    this.view = new GameView(this);
  }

  update(dt: number): void {
    throw new Error("Method not implemented.");
  }
  public setupUI(): void {}
}
