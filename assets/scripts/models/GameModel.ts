import { BaseModel } from "../../core/mvc/BaseModel";
import { CattleType } from "../../enums/CattleType";
import { PlantType } from "../../enums/PlantType";
import {
  SaveData,
  SaveLand0Data,
  SaveLand1Data,
  SaveLand2Data,
  SaveLand3Data,
  SaveLand4Data,
  SaveLand5Data,
  SaveLand6Data,
  SaveLand7Data,
  SaveLand8Data,
  SaveQueueData,
} from "../Manager/GameSaveManager";
import UIManager from "../Manager/UIManager";
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

  loadWorkingWorkerNumberFromSave(
    data: Partial<SaveData["workingWorkerNumber"]>
  ): void {
    this.storage.workingWorkerNumber = data || 0;
  }
  getSaveWorkingWorkerNumberData(): Partial<SaveData["workingWorkerNumber"]> {
    return this.storage.workingWorkerNumber;
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

  loadQueueIndexArrayFromSave(
    data: Partial<SaveQueueData["queueIndexArray"]>
  ): void {
    this.queueIndexArray = data || [];
  }
  getSaveQueueIndexArrayData(): Partial<SaveQueueData["queueIndexArray"]> {
    return this.queueIndexArray;
  }

  loadLand0FromSave(data: Partial<SaveLand0Data["land_0"]>): void {
    this.landArray[0].name = data.name ?? "";
    this.landArray[0].number = data.number || 0;
    this.landArray[0].missionNumber = data.missionNumber || 1;
    this.landArray[0].containInterval = data.containInterval || 0;
    this.landArray[0].buyPrice = data.buyPrice || 0;
    this.landArray[0].containYield = data.containYield || 0;
    this.landArray[0].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[0].crop = data.crop || 0;
    this.landArray[0].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[0].workingTime = data.workingTime || 0;
    this.landArray[0].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[0].isEmpty = data.isEmpty ?? true;
    this.landArray[0].time = data.time || 0;
    this.landArray[0].landState = data.landState || LandState.Empty;
    this.landArray[0].plantType = data.plantType;
    this.landArray[0].cattleType = data.cattleType;
  }
  getSaveLand0Data(): Partial<SaveLand0Data["land_0"]> {
    return this.landArray[0];
  }

  loadLand1FromSave(data: Partial<SaveLand1Data["land_1"]>): void {
    this.landArray[1].name = data.name || "";
    this.landArray[1].number = data.number || 0;
    this.landArray[1].missionNumber = data.missionNumber || 1;
    this.landArray[1].containInterval = data.containInterval || 0;
    this.landArray[1].buyPrice = data.buyPrice || 0;
    this.landArray[1].containYield = data.containYield || 0;
    this.landArray[1].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[1].crop = data.crop || 0;
    this.landArray[1].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[1].workingTime = data.workingTime || 0;
    this.landArray[1].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[1].isEmpty = data.isEmpty ?? true;
    this.landArray[1].time = data.time || 0;
    this.landArray[1].landState = data.landState || LandState.Empty;
    this.landArray[1].plantType = data.plantType;
    this.landArray[1].cattleType = data.cattleType;
  }
  getSaveLand1Data(): Partial<SaveLand1Data["land_1"]> {
    return this.landArray[1];
  }

  loadLand2FromSave(data: Partial<SaveLand2Data["land_2"]>): void {
    this.landArray[2].name = data.name || "";
    this.landArray[2].number = data.number || 0;
    this.landArray[2].missionNumber = data.missionNumber || 1;
    this.landArray[2].containInterval = data.containInterval || 0;
    this.landArray[2].buyPrice = data.buyPrice || 0;
    this.landArray[2].containYield = data.containYield || 0;
    this.landArray[2].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[2].crop = data.crop || 0;
    this.landArray[2].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[2].workingTime = data.workingTime || 0;
    this.landArray[2].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[2].isEmpty = data.isEmpty ?? true;
    this.landArray[2].time = data.time || 0;
    this.landArray[2].landState = data.landState || LandState.Empty;
    this.landArray[2].plantType = data.plantType;
    this.landArray[2].cattleType = data.cattleType;
  }
  getSaveLand2Data(): Partial<SaveLand2Data["land_2"]> {
    return this.landArray[2];
  }

  loadLand3FromSave(data: Partial<SaveLand3Data["land_3"]>): void {
    this.landArray[3].name = data.name || "";
    this.landArray[3].number = data.number || 0;
    this.landArray[3].missionNumber = data.missionNumber || 1;
    this.landArray[3].containInterval = data.containInterval || 0;
    this.landArray[3].buyPrice = data.buyPrice || 0;
    this.landArray[3].containYield = data.containYield || 0;
    this.landArray[3].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[3].crop = data.crop || 0;
    this.landArray[3].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[3].workingTime = data.workingTime || 0;
    this.landArray[3].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[3].isEmpty = data.isEmpty ?? true;
    this.landArray[3].time = data.time || 0;
    this.landArray[3].landState = data.landState || LandState.Empty;
    this.landArray[3].plantType = data.plantType;
    this.landArray[3].cattleType = data.cattleType;
  }
  getSaveLand3Data(): Partial<SaveLand3Data["land_3"]> {
    return this.landArray[3];
  }

  loadLand4FromSave(data: Partial<SaveLand4Data["land_4"]>): void {
    this.landArray[4].name = data.name || "";
    this.landArray[4].number = data.number || 0;
    this.landArray[4].missionNumber = data.missionNumber || 1;
    this.landArray[4].containInterval = data.containInterval || 0;
    this.landArray[4].buyPrice = data.buyPrice || 0;
    this.landArray[4].containYield = data.containYield || 0;
    this.landArray[4].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[4].crop = data.crop || 0;
    this.landArray[4].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[4].workingTime = data.workingTime || 0;
    this.landArray[4].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[4].isEmpty = data.isEmpty ?? true;
    this.landArray[4].time = data.time || 0;
    this.landArray[4].landState = data.landState || LandState.Empty;
    this.landArray[4].plantType = data.plantType;
    this.landArray[4].cattleType = data.cattleType;
  }
  getSaveLand4Data(): Partial<SaveLand4Data["land_4"]> {
    return this.landArray[4];
  }

  loadLand5FromSave(data: Partial<SaveLand5Data["land_5"]>): void {
    this.landArray[5].name = data.name || "";
    this.landArray[5].number = data.number || 0;
    this.landArray[5].missionNumber = data.missionNumber || 1;
    this.landArray[5].containInterval = data.containInterval || 0;
    this.landArray[5].buyPrice = data.buyPrice || 0;
    this.landArray[5].containYield = data.containYield || 0;
    this.landArray[5].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[5].crop = data.crop || 0;
    this.landArray[5].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[5].workingTime = data.workingTime || 0;
    this.landArray[5].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[5].isEmpty = data.isEmpty ?? true;
    this.landArray[5].time = data.time || 0;
    this.landArray[5].landState = data.landState || LandState.Empty;
    this.landArray[5].plantType = data.plantType;
    this.landArray[5].cattleType = data.cattleType;
  }
  getSaveLand5Data(): Partial<SaveLand5Data["land_5"]> {
    return this.landArray[5];
  }

  loadLand6FromSave(data: Partial<SaveLand6Data["land_6"]>): void {
    this.landArray[6].name = data.name || "";
    this.landArray[6].number = data.number || 0;
    this.landArray[6].missionNumber = data.missionNumber || 1;
    this.landArray[6].containInterval = data.containInterval || 0;
    this.landArray[6].buyPrice = data.buyPrice || 0;
    this.landArray[6].containYield = data.containYield || 0;
    this.landArray[6].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[6].crop = data.crop || 0;
    this.landArray[6].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[6].workingTime = data.workingTime || 0;
    this.landArray[6].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[6].isEmpty = data.isEmpty ?? true;
    this.landArray[6].time = data.time || 0;
    this.landArray[6].landState = data.landState || LandState.Empty;
    this.landArray[6].plantType = data.plantType;
    this.landArray[6].cattleType = data.cattleType;
  }
  getSaveLand6Data(): Partial<SaveLand6Data["land_6"]> {
    return this.landArray[6];
  }

  loadLand7FromSave(data: Partial<SaveLand7Data["land_7"]>): void {
    this.landArray[7].name = data.name || "";
    this.landArray[7].number = data.number || 0;
    this.landArray[7].missionNumber = data.missionNumber || 1;
    this.landArray[7].containInterval = data.containInterval || 0;
    this.landArray[7].buyPrice = data.buyPrice || 0;
    this.landArray[7].containYield = data.containYield || 0;
    this.landArray[7].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[7].crop = data.crop || 0;
    this.landArray[7].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[7].workingTime = data.workingTime || 0;
    this.landArray[7].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[7].isEmpty = data.isEmpty ?? true;
    this.landArray[7].time = data.time || 0;
    this.landArray[7].landState = data.landState || LandState.Empty;
    this.landArray[7].plantType = data.plantType;
    this.landArray[7].cattleType = data.cattleType;
  }
  getSaveLand7Data(): Partial<SaveLand7Data["land_7"]> {
    return this.landArray[7];
  }

  loadLand8FromSave(data: Partial<SaveLand8Data["land_8"]>): void {
    this.landArray[8].name = data.name || "";
    this.landArray[8].number = data.number || 0;
    this.landArray[8].missionNumber = data.missionNumber || 1;
    this.landArray[8].containInterval = data.containInterval || 0;
    this.landArray[8].buyPrice = data.buyPrice || 0;
    this.landArray[8].containYield = data.containYield || 0;
    this.landArray[8].currentAsset =
      data.currentAsset ?? this.storage.tomatoSeed;
    this.landArray[8].crop = data.crop || 0;
    this.landArray[8].workerAction =
      data.workerAction || WorkerAction.TomatoPlant;
    this.landArray[8].workingTime = data.workingTime || 0;
    this.landArray[8].isReadyToWork = data.isReadyToWork ?? true;

    this.landArray[8].isEmpty = data.isEmpty ?? true;
    this.landArray[8].time = data.time || 0;
    this.landArray[8].landState = data.landState || LandState.Empty;
    this.landArray[8].plantType = data.plantType;
    this.landArray[8].cattleType = data.cattleType;
  }
  getSaveLand8Data(): Partial<SaveLand8Data["land_8"]> {
    return this.landArray[8];
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

  queueIndexArray: number[] = [];
  landArray: Land[] = [];

  async setData() {
    await this.loadData();
    this.init();
    this.storage.gold = 10000;
    this.storage.workingWorkerNumber = 0;

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
}
