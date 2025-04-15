import { BaseModel } from "../../core/mvc/BaseModel";
import { FirstConfigs, loadFirstConfigFromCSV } from "../data/GameConfig";

export class GameModel extends BaseModel {
  init(...args: any[]): void {}

  async loadData() {
    await loadFirstConfigFromCSV();
  }
  public getData() {
    return FirstConfigs;
  }
  public getLandNumber(): number {
    let firstConfig = this.getData();
    return firstConfig.land.number;
  }
  public getTomatoSeedNumber(): number {
    let firstConfig = this.getData();
    return firstConfig.tomatoseed.number;
  }
  public getBlueberrySeedNumber(): number {
    let firstConfig = this.getData();
    return firstConfig.blueberryseed.number;
  }
  public getMilkCowNumber(): number {
    let firstConfig = this.getData();
    return firstConfig.milkcow.number;
  }
  public getWokerNumber(): number {
    let firstConfig = this.getData();
    return firstConfig.worker.number;
  }
  public getMachineNumber(): number {
    let firstConfig = this.getData();
    return firstConfig.machine.number;
  }
}
