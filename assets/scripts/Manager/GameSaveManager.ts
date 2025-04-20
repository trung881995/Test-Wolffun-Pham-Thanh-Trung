import {
  Blueberry,
  BlueberrySeed,
  Land,
  Machine,
  Milk,
  MilkCow,
  Strawberry,
  StrawberrySeed,
  Tomato,
  TomatoSeed,
  Worker,
} from "../storage/Storage";

export interface SaveData {
  gold: number;
  tomatoSeed: Partial<TomatoSeed>;
  blueberrySeed: Partial<BlueberrySeed>;
  strawberrySeed: Partial<StrawberrySeed>;
  milkCow: Partial<MilkCow>;

  worker: Partial<Worker>;
  machine: Partial<Machine>;

  tomato: Partial<Tomato>;
  blueberry: Partial<Blueberry>;
  strawberry: Partial<Strawberry>;
  milk: Partial<Milk>;

  timestamp: number;

  land: Partial<Land>;

  /*tomato: {
    totalHarvested: number;
    lastUpdate: number;
  };
  blueberry: {
    totalHarvested: number;
    lastUpdate: number;
  };
  cow: {
    totalMilk: number;
    lastMilkTime: number;
  };

  timestamp: number;
  */
}

const SAVE_KEY = "wolffun_farm_save";

export class GameSaveManager {
  static save(data: SaveData): void {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  }

  static load(): SaveData | null {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  static clear(): void {
    localStorage.removeItem(SAVE_KEY);
  }
}
