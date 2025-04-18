import { CattleType } from "../../enums/CattleType";
import { PlantType } from "../../enums/PlantType";
import { ILand } from "../../interfaces/ILand";
import { IMachine } from "../../interfaces/IMachine";
import { IStorage } from "../../interfaces/IStorage";
import { IWorker } from "../../interfaces/IWorker";
import { IYield } from "../../interfaces/IYield";
import { IAsset } from "../../interfaces/IAsset";
import { LandState } from "../ui/LandUI";

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
  name: string;
  number: number;
  workingInterval: number;
  buyPrice: number;
  Work(): void {}
}

export class Machine implements IMachine {
  name: string;
  level: number;
  support: number;
  upgradePrice: number;
  Operate(): void {
    throw new Error("Method not implemented.");
  }
}
export class Land implements ILand {
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
}

export class Storage implements IStorage {
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
  public getWorkerIdle(workingWorker: number): number {
    let idleWorker = this.worker.number - workingWorker;
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
    this.strawberrySeed.number += 1;
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
    this.land.time -=
      (this.land.currentAsset.time * this.machine.support) / 100;
    this.land.currentAsset.maxHarvest *= 100 + this.machine.support;
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
}
