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
  Beef,
  Blueberry,
  BlueberrySeed,
  Cow,
  Land,
  Machine,
  Milk,
  MilkCow,
  Storage,
  Strawberry,
  StrawberrySeed,
  Tomato,
  TomatoSeed,
  Worker,
} from "../storage/Storage";

export class GameModel extends BaseModel {
  init(...args: any[]): void {}
  store: Store;
  storage: Storage;

  startLandNumber: number;

  landArray: Land[];
  async setup() {
    await this.loadData();
    this.storage = new Storage();
    this.store = new Store(this.storage);
    this.storage.land = new Land();
    this.storage.tomatoSeed = new TomatoSeed();
    this.storage.blueberrySeed = new BlueberrySeed();
    this.storage.strawberrySeed = new StrawberrySeed();
    this.storage.milkCow = new MilkCow();
    this.storage.cow = new Cow();
    this.storage.worker = new Worker();
    this.storage.machine = new Machine();

    this.storage.tomato = new Tomato();
    this.storage.blueberry = new Blueberry();
    this.storage.strawberry = new Strawberry();
    this.storage.milk = new Milk();
    this.storage.beef = new Beef();
  }
  async setData() {
    await this.setup();
    this.storage.gold = 0;
    this.storage.land.number = FirstConfigs.land.number;
    this.storage.blueberrySeed.number = FirstConfigs.blueberryseed.number;
    this.storage.tomatoSeed.number = FirstConfigs.tomatoseed.number;
    this.storage.strawberrySeed.number = 0;
    this.storage.milkCow.number = FirstConfigs.milkcow.number;
    this.storage.cow.number = 0;
    this.storage.worker.number = FirstConfigs.worker.number;
    this.storage.workingWorkerNumber = 0;
    this.storage.machine.level = 1;

    this.storage.tomato.number = 0;
    this.storage.blueberry.number = 0;
    this.storage.strawberry.number = 0;
    this.storage.milk.number = 0;
    this.storage.beef.number = 0;
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
