import { IStore } from "../../interfaces/IStore";
import { Storage } from "../storage/Storage";

export class Store implements IStore {
  storage: Storage;
  constructor(_storage: Storage) {
    this.storage = _storage;
  }
  buyTomatoSeed(): void {
    this.storage.addGold(-this.storage.tomatoSeed.buyPrice);
    this.storage.addTomatoSeed();
  }
  buyBlueberrySeed(): void {
    this.storage.addGold(-this.storage.blueberrySeed.buyPrice);
    this.storage.addBlueberrySeed();
  }
  buyStrawberrySeed(): void {
    this.storage.addGold(-this.storage.strawberrySeed.buyPrice);
    this.storage.addStrawberrySeed();
  }
  buyMilkCow(): void {
    this.storage.addGold(-this.storage.milkCow.buyPrice);
    this.storage.addMilkCow();
  }
  buyCow(): void {
    this.storage.addGold(-this.storage.cow.buyPrice);
    this.storage.addCow();
  }
  buyWorker(): void {
    this.storage.addGold(-this.storage.worker.buyPrice);
    this.storage.addWorker();
  }
  upgradeMachine(): void {
    this.storage.addGold(-this.storage.machine.upgradePrice);
    this.storage.upgradeMachine();
  }
  buyLand(): void {
    this.storage.addGold(-this.storage.land.buyPrice);
    this.storage.addLand();
  }
}
