import { SaveData } from "../../scripts/Manager/GameSaveManager";

export abstract class BaseModel {
  abstract init(...args: any[]): void;
  abstract loadTomatoSeedFromSave(data: Partial<SaveData["tomatoSeed"]>): void;
  abstract getSaveTomatoSeedData(): Partial<SaveData["tomatoSeed"]>;

  abstract loadBlueberrySeedFromSave(
    data: Partial<SaveData["blueberrySeed"]>
  ): void;
  abstract getSaveBlueberrySeedData(): Partial<SaveData["blueberrySeed"]>;

  abstract loadStrawberrySeedFromSave(
    data: Partial<SaveData["strawberrySeed"]>
  ): void;
  abstract getSaveStrawberrySeedData(): Partial<SaveData["strawberrySeed"]>;

  abstract loadMilkCowFromSave(data: Partial<SaveData["milkCow"]>): void;
  abstract getSaveMilkCowData(): Partial<SaveData["milkCow"]>;

  abstract loadWokerFromSave(data: Partial<SaveData["worker"]>): void;
  abstract getSaveWorkerData(): Partial<SaveData["worker"]>;

  abstract loadMachineFromSave(data: Partial<SaveData["machine"]>): void;
  abstract getSaveMachineData(): Partial<SaveData["machine"]>;

  abstract loadGoldFromSave(data: Partial<SaveData["gold"]>): void;
  abstract getSaveGoldData(): Partial<SaveData["gold"]>;

  abstract loadTimeStampFromSave(data: Partial<SaveData["timestamp"]>): void;
  abstract getSaveTimeStampData(): Partial<SaveData["timestamp"]>;

  abstract loadTomatoFromSave(data: Partial<SaveData["tomato"]>): void;
  abstract getSaveTomatoData(): Partial<SaveData["tomato"]>;

  abstract loadBlueberryFromSave(data: Partial<SaveData["blueberry"]>): void;
  abstract getSaveBlueberryData(): Partial<SaveData["blueberry"]>;

  abstract loadStrawberryFromSave(data: Partial<SaveData["strawberry"]>): void;
  abstract getSaveStrawberryData(): Partial<SaveData["strawberry"]>;

  abstract loadMilkFromSave(data: Partial<SaveData["milk"]>): void;
  abstract getSaveMilkData(): Partial<SaveData["milk"]>;
}
