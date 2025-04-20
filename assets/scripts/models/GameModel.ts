import { BaseModel } from "../../core/mvc/BaseModel";
import { CattleType } from "../../enums/CattleType";
import { PlantType } from "../../enums/PlantType";
import { SaveData } from "../Manager/GameSaveManager";
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
import LandUI, { LandState, WorkerAction } from "../ui/LandUI";

export class GameModel extends BaseModel {
  loadTomatoSeedFromSave(data: Partial<SaveData["tomatoSeed"]>): void {
    this.storage.tomatoSeed.name = data.name || "";
    this.storage.tomatoSeed.number = data.number || 0;
    this.storage.tomatoSeed.harvestInterval = data.harvestInterval || 0;
    this.storage.tomatoSeed.maxHarvest = data.maxHarvest || 0;
    this.storage.tomatoSeed.buyPrice = data.buyPrice || 0;
  }
  getSaveTomatoSeedData(): Partial<SaveData["tomatoSeed"]> {
    return this.storage.tomatoSeed;
  }
  loadBlueberrySeedFromSave(data: Partial<SaveData["blueberrySeed"]>): void {
    this.storage.blueberrySeed.name = data.name || "";
    this.storage.blueberrySeed.number = data.number || 0;
    this.storage.blueberrySeed.harvestInterval = data.harvestInterval || 0;
    this.storage.blueberrySeed.maxHarvest = data.maxHarvest || 0;
    this.storage.blueberrySeed.buyPrice = data.buyPrice || 0;
  }
  getSaveBlueberrySeedData(): Partial<SaveData["blueberrySeed"]> {
    return this.storage.blueberrySeed;
  }
  loadStrawberrySeedFromSave(data: Partial<SaveData["strawberrySeed"]>): void {
    this.storage.strawberrySeed.name = data.name || "";
    this.storage.strawberrySeed.number = data.number || 0;
    this.storage.strawberrySeed.harvestInterval = data.harvestInterval || 0;
    this.storage.strawberrySeed.maxHarvest = data.maxHarvest || 0;
    this.storage.strawberrySeed.buyPrice = data.buyPrice || 0;
  }
  getSaveStrawberrySeedData(): Partial<SaveData["strawberrySeed"]> {
    return this.storage.strawberrySeed;
  }
  loadMilkCowFromSave(data: Partial<SaveData["milkCow"]>): void {
    this.storage.milkCow.name = data.name || "";
    this.storage.milkCow.number = data.number || 0;
    this.storage.milkCow.harvestInterval = data.harvestInterval || 0;
    this.storage.milkCow.maxHarvest = data.maxHarvest || 0;
    this.storage.milkCow.buyPrice = data.buyPrice || 0;
  }
  getSaveMilkCowData(): Partial<SaveData["milkCow"]> {
    return this.storage.milkCow;
  }

  loadWokerFromSave(data: Partial<SaveData["worker"]>): void {
    this.storage.worker.name = data.name || "";
    this.storage.worker.number = data.number || 0;
    this.storage.worker.workingInterval = data.workingInterval || 0;
    this.storage.worker.buyPrice = data.buyPrice || 0;
  }
  getSaveWorkerData(): Partial<SaveData["worker"]> {
    return this.storage.worker;
  }
  loadMachineFromSave(data: Partial<SaveData["machine"]>): void {
    this.storage.machine.name = data.name || "";
    this.storage.machine.level = data.level || 1;
    this.storage.machine.support = data.support || 10;
    this.storage.machine.upgradePrice = data.upgradePrice || 500;
  }
  getSaveMachineData(): Partial<SaveData["machine"]> {
    return this.storage.machine;
  }
  loadGoldFromSave(data: Partial<SaveData["gold"]>): void {
    this.storage.gold = data || 0;
  }
  getSaveGoldData(): Partial<SaveData["gold"]> {
    return this.storage.gold;
  }
  loadTimeStampFromSave(data: Partial<SaveData["timestamp"]>): void {
    this.storage.timestamp = data || 0;
  }
  getSaveTimeStampData(): Partial<SaveData["timestamp"]> {
    return this.storage.timestamp;
  }
  loadTomatoFromSave(data: Partial<SaveData["tomato"]>): void {
    this.storage.tomato.name = data.name || "";
    this.storage.tomato.number = data.number || 0;
    this.storage.tomato.sellPrice = data.sellPrice || 5;
  }
  getSaveTomatoData(): Partial<SaveData["tomato"]> {
    return this.storage.tomato;
  }
  loadBlueberryFromSave(data: Partial<SaveData["blueberry"]>): void {
    this.storage.blueberry.name = data.name || "";
    this.storage.blueberry.number = data.number || 0;
    this.storage.blueberry.sellPrice = data.sellPrice || 8;
  }
  getSaveBlueberryData(): Partial<SaveData["blueberry"]> {
    return this.storage.blueberry;
  }
  loadStrawberryFromSave(data: Partial<SaveData["strawberry"]>): void {
    this.storage.strawberry.name = data.name || "";
    this.storage.strawberry.number = data.number || 0;
    this.storage.strawberry.sellPrice = data.sellPrice || 10;
  }
  getSaveStrawberryData(): Partial<SaveData["strawberry"]> {
    return this.storage.strawberry;
  }
  loadMilkFromSave(data: Partial<SaveData["milk"]>): void {
    this.storage.milk.name = data.name || "";
    this.storage.milk.number = data.number || 0;
    this.storage.milk.sellPrice = data.sellPrice || 15;
  }
  getSaveMilkData(): Partial<SaveData["milk"]> {
    return this.storage.milk;
  }

  loadLandFromSave(data: Partial<SaveData["land"]>): void {
    this.storage.land.name = data.name || "";
    this.storage.land.number = data.number || 0;
    this.storage.land.missionNumber = data.missionNumber || 1;
    this.storage.land.containInterval = data.containInterval =
      data.containInterval || 0;
    this.storage.land.buyPrice = data.buyPrice || 0;
    this.storage.land.containYield = data.containYield || 0;
    this.storage.land.currentAsset = data.currentAsset || new TomatoSeed();
    this.storage.land.crop = data.crop || 0;
    this.storage.land.workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.storage.land.workingTime = data.workingTime || 0;
    this.storage.land.isReadyToWork = data.isReadyToWork || true;

    this.storage.land.isEmpty = data.isEmpty || true;
    this.storage.land.time = data.time || 0;
    this.storage.land.landState = data.landState || LandState.Empty;
    this.storage.land.plantType = data.plantType || null;
    this.storage.land.cattleType = data.cattleType || null;
  }
  getSaveLandData(): Partial<SaveData["land"]> {
    return this.storage.land;
  }

  init(...args: any[]): void {
    this.storage = new Storage();
    this.store = new Store(this.storage);

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
  store: Store;
  storage: Storage;

  startLandNumber: number;

  queueLandArray: LandUI[] = [];

  async setData() {
    await this.loadData();
    this.init();
    this.storage.gold = 10000;
    this.storage.workingWorkerNumber = 0;
    /*
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
*/
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
    this.storage.worker.isBusy = false;

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

  newLand() {
    this.storage.land = new Land(
      WorkerAction.TomatoPlant,
      0,
      0,
      LandConfigs.red.name,
      FirstConfigs.land.number,
      LandConfigs.red.missionNumber,
      LandConfigs.red.containInterval,
      LandConfigs.red.buyPrice,
      true,
      0,
      LandState.Empty,
      PlantType.tomatoSeed,
      CattleType.Milkcow,
      this.storage.tomatoSeed,
      0,
      true
    );
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
