import {
  Beef,
  Blueberry,
  BlueberrySeed,
  Cow,
  Land,
  Machine,
  Milk,
  MilkCow,
  Strawberry,
  StrawberrySeed,
  Tomato,
  TomatoSeed,
  Worker,
} from "../scripts/storage/Storage";
import LandUI from "../scripts/ui/LandUI";
import { IMachine } from "./IMachine";
import { IWorker } from "./IWorker";

export interface IStorage {
  gold: number;
  timestamp: number;

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

  worker: Worker;
  machine: Machine;

  land: Land;

  sellTomato(): void;
  sellBlueberry(): void;
  sellStrawberry(): void;
  sellMilk(): void;
  sellBeef(): void;
  addGold(gold: number): void;
  getWorkerIdle(workingWorker: number): number;
  getPerformaceMachine(): number;

  addTomatoSeed(): void;
  addBlueberrySeed(): void;
  addStrawberrySeed(): void;
  addMilkCow(): void;
  addCow(): void;
  addWorker(): void;
  upgradeMachine(): void;

  assignWorker(land: Land): void;
}
