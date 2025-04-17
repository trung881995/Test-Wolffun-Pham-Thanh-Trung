import { BaseModel } from "../../core/mvc/BaseModel";
import { Store } from "../Store/Store";
import {
  FirstConfigs,
  PlantConfigs,
  CattleConfigs,
  YieldConfigs,
  LandConfigs,
  WorkerConfigs,
  MachineConfigs,
  loadCattleConfigFromCSV,
  loadFirstConfigFromCSV,
  loadLandConfigFromCSV,
  loadMachineConfigFromCSV,
  loadPlantConfigFromCSV,
  loadWorkerConfigFromCSV,
  loadYieldConfigFromCSV,
} from "../data/GameConfig";
import {
  BlueberrySeed,
  Cow,
  Land,
  MilkCow,
  Storage,
  StrawberrySeed,
  TomatoSeed,
  Worker,
} from "../storage/Storage";

export class GameModel extends BaseModel {
  init(...args: any[]): void {}
  store: Store;
  storage: Storage;

  startLandNumber: number;

  landArray: Land[];
  setup() {
    this.storage = new Storage();
    this.store = new Store(this.storage);
    this.storage.land = new Land();
    this.storage.tomatoSeed = new TomatoSeed();
    this.storage.blueberrySeed = new BlueberrySeed();
    this.storage.strawberrySeed = new StrawberrySeed();
    this.storage.milkCow = new MilkCow();
    this.storage.cow = new Cow();
    this.storage.worker = new Worker();
  }
  async setData() {
    await this.loadData();
    this.setup();
    this.storage.land.number = FirstConfigs.land.number;
    this.storage.blueberrySeed.number = FirstConfigs.blueberryseed.number;
    this.storage.tomatoSeed.number = FirstConfigs.tomatoseed.number;
    this.storage.strawberrySeed.number = 0;
    this.storage.milkCow.number = FirstConfigs.milkcow.number;
    this.storage.cow.number = 0;
    this.storage.worker.number = FirstConfigs.worker.number;
  }
  async loadData() {
    await loadFirstConfigFromCSV();
    await loadCattleConfigFromCSV();
    await loadPlantConfigFromCSV();
    await loadLandConfigFromCSV();
    await loadYieldConfigFromCSV();
    await loadWorkerConfigFromCSV();
    await loadMachineConfigFromCSV();
  }
  public getFirstData() {
    return FirstConfigs;
  }
  public getPlantData() {
    return PlantConfigs;
  }
  public getLandData() {
    return LandConfigs;
  }
  public getCattleData() {
    return CattleConfigs;
  }
  public getYieldData() {
    return YieldConfigs;
  }
  public getWorkerData() {
    return WorkerConfigs;
  }
  public getMachineData() {
    return MachineConfigs;
  }

  /*public getLandNumber(): number {
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
  */
}
