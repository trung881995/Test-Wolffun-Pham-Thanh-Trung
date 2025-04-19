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
import LandUI, { WorkerAction } from "../ui/LandUI";

export class GameModel extends BaseModel {
  init(...args: any[]): void {}
  store: Store;
  storage: Storage;

  startLandNumber: number;

  queueLandArray: LandUI[] = [];
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
    this.storage.gold = 5000;
    this.storage.workingWorkerNumber = 0;

    this.storage.land.number = FirstConfigs.land.number;
    this.storage.land.buyPrice = LandConfigs.red.buyPrice;
    this.storage.land.name = LandConfigs.red.name;
    this.storage.land.missionNumber = LandConfigs.red.missionNumber;
    this.storage.land.containInterval = LandConfigs.red.containInterval;
    this.storage.land.containYield = 0;
    this.storage.land.crop = 0;
    this.storage.land.workerAction = WorkerAction.TomatoPlant;
    this.storage.land.workingTime = 0;
    this.storage.land.currentAsset = this.storage.tomatoSeed;
    this.storage.land.isReadyToWork = true;

    this.storage.blueberrySeed.number = FirstConfigs.blueberryseed.number;
    this.storage.blueberrySeed.name = PlantConfigs.blueberryseed.name;
    this.storage.blueberrySeed.buyPrice = PlantConfigs.blueberryseed.buyPrice;
    this.storage.blueberrySeed.harvestInterval =
      PlantConfigs.blueberryseed.harvestInterval;
    this.storage.blueberrySeed.maxHarvest =
      PlantConfigs.blueberryseed.maxHarvest;

    this.storage.tomatoSeed.number = FirstConfigs.tomatoseed.number;
    this.storage.tomatoSeed.name = PlantConfigs.tomatoseed.name;
    this.storage.tomatoSeed.buyPrice = PlantConfigs.tomatoseed.buyPrice;
    this.storage.tomatoSeed.harvestInterval =
      PlantConfigs.tomatoseed.harvestInterval;
    this.storage.tomatoSeed.maxHarvest = PlantConfigs.tomatoseed.maxHarvest;

    this.storage.strawberrySeed.number = 0;
    this.storage.strawberrySeed.name = PlantConfigs.strawberryseed.name;
    this.storage.strawberrySeed.buyPrice = PlantConfigs.strawberryseed.buyPrice;
    this.storage.strawberrySeed.harvestInterval =
      PlantConfigs.strawberryseed.harvestInterval;
    this.storage.strawberrySeed.maxHarvest =
      PlantConfigs.strawberryseed.maxHarvest;

    this.storage.milkCow.number = FirstConfigs.milkcow.number;
    this.storage.milkCow.name = CattleConfigs.milkcow.name;
    this.storage.milkCow.buyPrice = CattleConfigs.milkcow.buyPrice;
    this.storage.milkCow.harvestInterval =
      CattleConfigs.milkcow.harvestInterval;
    this.storage.milkCow.maxHarvest = CattleConfigs.milkcow.maxHarvest;

    this.storage.cow.number = 0;
    this.storage.cow.name = CattleConfigs.cow.name;
    this.storage.cow.buyPrice = CattleConfigs.cow.buyPrice;
    this.storage.cow.harvestInterval = CattleConfigs.cow.harvestInterval;
    this.storage.cow.maxHarvest = CattleConfigs.cow.maxHarvest;

    this.storage.worker.number = FirstConfigs.worker.number;
    this.storage.worker.name = WorkerConfigs.middle.name;
    this.storage.worker.workingInterval = WorkerConfigs.middle.workingInterval;
    this.storage.worker.buyPrice = WorkerConfigs.middle.buyPrice;

    this.storage.workingWorkerNumber = 0;

    this.storage.machine.level = MachineConfigs.china.level;
    this.storage.machine.name = MachineConfigs.china.name;
    this.storage.machine.support = MachineConfigs.china.support;
    this.storage.machine.upgradePrice = MachineConfigs.china.upgradePrice;

    this.storage.tomato.number = 0;
    this.storage.tomato.name = YieldConfigs.tomato.name;
    this.storage.tomato.sellPrice = YieldConfigs.tomato.sellPrice;

    this.storage.blueberry.number = 0;
    this.storage.blueberry.name = YieldConfigs.blueberry.name;
    this.storage.blueberry.sellPrice = YieldConfigs.blueberry.sellPrice;

    this.storage.strawberry.number = 0;
    this.storage.strawberry.name = YieldConfigs.strawberry.name;
    this.storage.strawberry.sellPrice = YieldConfigs.strawberry.sellPrice;

    this.storage.milk.number = 0;
    this.storage.milk.name = YieldConfigs.milk.name;
    this.storage.milk.sellPrice = YieldConfigs.milk.sellPrice;

    this.storage.beef.number = 0;
    this.storage.beef.name = YieldConfigs.beef.name;
    this.storage.beef.sellPrice = YieldConfigs.beef.sellPrice;
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
