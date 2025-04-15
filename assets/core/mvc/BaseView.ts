export abstract class BaseView<TController> {
  protected controller!: TController;

  setController(controller: TController): void {
    this.controller = controller;
  }

  abstract updateView(): void;
}
