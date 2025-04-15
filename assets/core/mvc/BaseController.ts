import { BaseModel } from "./BaseModel";
import { BaseView } from "./BaseView";

export abstract class BaseController<
  TModel extends BaseModel,
  TView extends BaseView<any>
> {
  public model!: TModel;
  protected view!: TView;

  init(model: TModel, view: TView): void {
    this.model = model;
    this.view = view;

    this.view.setController(this);
  }

  abstract update(dt: number): void;
}
