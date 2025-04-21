import { CattleType } from "../../enums/CattleType";
import { PlantType } from "../../enums/PlantType";
import { ILand } from "../../interfaces/ILand";
import { IMachine } from "../../interfaces/IMachine";
import { IStorage } from "../../interfaces/IStorage";
import { IWorker } from "../../interfaces/IWorker";
import { IYield } from "../../interfaces/IYield";
import { IAsset } from "../../interfaces/IAsset";
import LandUI, { LandState, WorkerAction } from "../ui/LandUI";
import UIManager from "../Manager/UIManager";

export class TomatoSeed implements IAsset {
  name: string;
  number: number;
  harvestInterval: number;
  maxHarvest: number;
  buyPrice: any;
  useForFarm(): void {
    throw new Error("Method not implemented.");
  }
}
export class BlueberrySeed implements IAsset {
  name: string;
  number: number;
  harvestInterval: number;
  maxHarvest: number;
  buyPrice: any;
  useForFarm(): void {
    throw new Error("Method not implemented.");
  }
}
export class StrawberrySeed implements IAsset {
  name: string;
  number: number;
  harvestInterval: number;
  maxHarvest: number;
  buyPrice: any;
  useForFarm(): void {
    throw new Error("Method not implemented.");
  }
}
export class MilkCow implements IAsset {
  name: string;
  number: number;
  harvestInterval: number;
  maxHarvest: number;
  buyPrice: any;
  useForFarm(): void {
    throw new Error("Method not implemented.");
  }
}
export class Cow implements IAsset {
  name: string;
  number: number;
  harvestInterval: number;
  maxHarvest: number;
  buyPrice: any;
  useForFarm(): void {
    throw new Error("Method not implemented.");
  }
}

export class Tomato implements IYield {
  name: string;
  number: number;
  sellPrice: number;
  sellForStore(): void {
    throw new Error("Method not implemented.");
  }
}
export class Blueberry implements IYield {
  name: string;
  number: number;
  sellPrice: number;
  sellForStore(): void {
    throw new Error("Method not implemented.");
  }
}
export class Strawberry implements IYield {
  name: string;
  number: number;
  sellPrice: number;
  sellForStore(): void {
    throw new Error("Method not implemented.");
  }
}
export class Milk implements IYield {
  name: string;
  number: number;
  sellPrice: number;
  sellForStore(): void {
    throw new Error("Method not implemented.");
  }
}
export class Beef implements IYield {
  name: string;
  number: number;
  sellPrice: number;
  sellForStore(): void {
    throw new Error("Method not implemented.");
  }
}

export class Worker implements IWorker {
  isBusy: boolean;
  name: string;
  number: number;
  workingInterval: number;
  buyPrice: number;
  Work(landUI: LandUI, workerAction: WorkerAction) {
    switch (workerAction) {
      case WorkerAction.Yielding:
        landUI.onClickYieldBtn();
        break;
      case WorkerAction.TomatoPlant:
        landUI.onClickTomatoSeedBtn();
        console.log("worker CLick tomatoseedbtn");
        break;
      case WorkerAction.BlueberryPlant:
        landUI.onClickBlueberrySeedBtn();
        break;
      case WorkerAction.StrawberryPlant:
        landUI.onClickStrawberrySeedBtn();
        break;
      case WorkerAction.MilkcowLiveStock:
        landUI.onClickMilkCowBtn();
        break;
      case WorkerAction.CowLiveStock:
        break;
      default:
        break;
    }
  }
}

export class Machine implements IMachine {
  name: string;
  level: number;
  support: number;
  upgradePrice: number;
  Operate(): number {
    return this.support;
  }
  upgradePerformace() {
    this.level += 1;
  }
}
export class Land implements ILand {
  constructor(
    workerAction: WorkerAction,
    crop: number,
    containYield: number,
    name: string,
    number: number,
    missionNumber: number,
    containInterval: number,
    buyPrice: number,

    isEmpty: boolean = true,
    time: number,
    landState: LandState = LandState.Empty,
    plantType: PlantType = null,
    cattleType: CattleType = null,

    currentAsset: any,

    workingTime: number,

    isReadyToWork: boolean
  ) {
    this.workerAction = workerAction;
    this.crop = crop;
    this.containYield = containYield;
    this.name = name;
    this.number = number;
    this.missionNumber = missionNumber;
    this.containInterval = containInterval;
    this.buyPrice = buyPrice;
    this.isEmpty = isEmpty;
    this.time = time;
    this.landState = landState;
    this.plantType = plantType;
    this.cattleType = cattleType;
    this.currentAsset = currentAsset;
    this.workingTime = workingTime;
    this.isReadyToWork = isReadyToWork;
  }

  workerAction: WorkerAction;
  crop: number;
  containYield: number;
  name: string;
  number: number;
  missionNumber: number;
  containInterval: number;
  buyPrice: number;

  isEmpty: boolean = true;
  time: number;
  landState: LandState = LandState.Empty;
  plantType: PlantType = null;
  cattleType: CattleType = null;

  currentAsset: any;

  workingTime: number;

  isReadyToWork: boolean;

  clone(): Land {
    return new Land(
      this.workerAction,
      this.crop,
      this.containYield,
      this.name,
      this.missionNumber,
      this.containInterval,
      this.buyPrice,
      this.number,
      this.isEmpty,
      this.time,
      this.landState,
      this.plantType,
      this.cattleType,
      this.currentAsset,
      this.workingTime,
      this.isReadyToWork
    );
  }
}

export class Storage implements IStorage {
  timestamp: number;
  worker: Worker;

  machine: Machine;
  land: Land;

  gold: number;
  tomato: Tomato;
  blueberry: Blueberry;
  strawberry: Strawberry;
  milk: Milk;
  beef: Beef;
  tomatoSeed: TomatoSeed;
  blueberrySeed: BlueberrySeed;
  strawberrySeed: StrawberrySeed;
  milkCow: MilkCow;
  cow: Cow;

  workingWorkerNumber: number;
  getIdleWorker() {
    return this.worker.number - this.workingWorkerNumber;
  }
  getWorkingWorker() {
    return this.workingWorkerNumber;
  }

  public sellTomato(): void {
    this.addGold(this.tomato.number * this.tomato.sellPrice);
    this.tomato.number = 0;
  }
  public sellBlueberry(): void {
    this.addGold(this.blueberry.number * this.blueberry.sellPrice);
    this.blueberry.number = 0;
  }
  public sellStrawberry(): void {
    this.addGold(this.strawberry.number * this.strawberry.sellPrice);
    this.strawberry.number = 0;
  }
  public sellMilk(): void {
    this.addGold(this.milk.number * this.milk.sellPrice);
    this.milk.number = 0;
  }
  public sellBeef(): void {
    this.addGold(this.beef.number * this.beef.sellPrice);
    this.beef.number = 0;
  }
  public addGold(_gold: number): void {
    this.gold += _gold;
  }
  getWorkerIdle(workingWorkerNumber: number) {
    let idleWorker = this.worker.number - workingWorkerNumber;
    return idleWorker;
  }
  public getPerformaceMachine(): number {
    return this.machine.support;
  }

  public addTomatoSeed(): void {
    this.tomatoSeed.number += 1;
  }
  addBlueberrySeed(): void {
    this.blueberrySeed.number += 1;
  }
  addStrawberrySeed(): void {
    this.strawberrySeed.number += 10;
  }
  addMilkCow(): void {
    this.milkCow.number += 1;
  }
  addCow(): void {
    this.cow.number += 1;
  }
  addWorker(): void {
    this.worker.number += 1;
  }
  upgradeMachine(): void {
    //this.machine.level += 1;
    this.machine.upgradePerformace();
    for (let i = 0; i < this.land.number; i++) {
      if (
        UIManager.instance.gameModel.landArray[i].landState != LandState.Empty
      ) {
        let maxHarvest =
          UIManager.instance.gameModel.landArray[i].currentAsset.maxHarvest;

        UIManager.instance.gameModel.landArray[i].crop +=
          Math.ceil(maxHarvest * this.machine.Operate()) / 100;

        let harvestInterval =
          UIManager.instance.gameModel.landArray[i].currentAsset
            .harvestInterval;
        UIManager.instance.gameModel.landArray[i].time -=
          Math.ceil(harvestInterval * 60 * this.machine.Operate()) / 100;

        console.log("value: " + this.machine.Operate());
      }
    }
  }
  addLand(): void {
    this.land.number += 1;
  }

  public addTomato(tomatoNumber: number): void {
    this.tomato.number += tomatoNumber;
  }
  addBlueberry(blueberryNumber: number): void {
    this.blueberry.number += blueberryNumber;
  }
  addStrawberry(strawberryNumber: number): void {
    this.strawberry.number += strawberryNumber;
  }
  addMilk(milkNumber: number): void {
    this.milk.number += milkNumber;
  }
  addBeef(beefNumber: number): void {
    this.beef.number += beefNumber;
  }
  assignWorker(land: Land) {
    if (land.containYield > 0) {
      land.workerAction = WorkerAction.Yielding;
      return;
    }
    switch (land.currentAsset) {
      case UIManager.instance.gameController.model.storage.tomatoSeed:
        land.workerAction = WorkerAction.TomatoPlant;
        break;
      case UIManager.instance.gameController.model.storage.blueberrySeed:
        land.workerAction = WorkerAction.BlueberryPlant;
        break;
      case UIManager.instance.gameController.model.storage.strawberrySeed:
        land.workerAction = WorkerAction.StrawberryPlant;
        break;
      case UIManager.instance.gameController.model.storage.milkCow:
        land.workerAction = WorkerAction.MilkcowLiveStock;
        break;
      case UIManager.instance.gameController.model.storage.cow:
        land.workerAction = WorkerAction.CowLiveStock;
        break;
      default:
        break;
    }
  }
}
