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
import LandUI from "../ui/LandUI";

export class SaveData {
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

  workingWorkerNumber: number;
}
export class SaveQueueData {
  queueIndexArray: Partial<number[]>;
}
export class SaveLand0Data {
  land_0: Partial<Land>;
}
export class SaveLand1Data {
  land_1: Partial<Land>;
}
export class SaveLand2Data {
  land_2: Partial<Land>;
}
export class SaveLand3Data {
  land_3: Partial<Land>;
}
export class SaveLand4Data {
  land_4: Partial<Land>;
}
export class SaveLand5Data {
  land_5: Partial<Land>;
}
export class SaveLand6Data {
  land_6: Partial<Land>;
}
export class SaveLand7Data {
  land_7: Partial<Land>;
}
export class SaveLand8Data {
  land_8: Partial<Land>;
}
export class GameSaveManager {
  static SAVE_KEY = "wolffun_test_save";
  static SAVE_KEY2 = "wolffun_test_save2";
  static SAVE_KEY3 = "wolffun_test_land_save0";
  static SAVE_KEY4 = "wolffun_test_land_save1";
  static SAVE_KEY5 = "wolffun_test_land_save2";
  static SAVE_KEY6 = "wolffun_test_land_save3";
  static SAVE_KEY7 = "wolffun_test_land_save4";
  static SAVE_KEY8 = "wolffun_test_land_save5";
  static SAVE_KEY9 = "wolffun_test_land_save6";
  static SAVE_KEY10 = "wolffun_test_land_save7";
  static SAVE_KEY11 = "wolffun_test_land_save8";

  static save(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static load(key: string): any {
    let raw = localStorage.getItem(key);
    console.log("raw: " + raw);
    return JSON.parse(raw);
  }

  static clear(): void {
    localStorage.clear();
  }
}
