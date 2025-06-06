import { PlantType } from "../../enums/PlantType";
import { CattleType } from "../../enums/CattleType";
import { YieldType } from "../../enums/YieldType";
import { LandType } from "../../enums/LandType";
import { WorkerType } from "../../enums/WorkerType";
import { MachineType } from "../../enums/MachineType";
import { Type } from "../../enums/Type";
import { CSVLoader } from "../utils/CSVLoader";

export interface FirstConfig {
  name: string;
  number: number;
}
export interface YieldConfig {
  name: string;
  sellPrice: number;
}
export interface CattleConfig {
  name: string;
  harvestInterval: number;
  maxHarvest: number;
  buyPrice: number;
}
export interface PlantConfig {
  name: string;
  harvestInterval: number;
  maxHarvest: number;
  buyPrice: number;
}
export interface LandConfig {
  name: string;
  missionNumber: number;
  containInterval: number;
  buyPrice: number;
}
export interface WorkerConfig {
  name: string;
  workingInterval: number;
  buyPrice: number;
}
export interface MachineConfig {
  name: string;
  level: number;
  support: number;
  upgradePrice: number;
}
export const PlantConfigs: Record<PlantType, PlantConfig> = {
  [PlantType.tomatoSeed]: {
    name: "",
    harvestInterval: 0,
    maxHarvest: 0,
    buyPrice: 0,
  },
  [PlantType.blueberrySeed]: {
    name: "",
    harvestInterval: 0,
    maxHarvest: 0,
    buyPrice: 0,
  },
  [PlantType.strawberrySeed]: {
    name: "",
    harvestInterval: 0,
    maxHarvest: 0,
    buyPrice: 0,
  },
};
export const CattleConfigs: Record<CattleType, CattleConfig> = {
  [CattleType.Milkcow]: {
    name: "",
    harvestInterval: 0,
    maxHarvest: 0,
    buyPrice: 0,
  },
  [CattleType.Cow]: {
    name: "",
    harvestInterval: 0,
    maxHarvest: 0,
    buyPrice: 0,
  },
};
export const YieldConfigs: Record<YieldType, YieldConfig> = {
  [YieldType.Tomato]: {
    name: "",
    sellPrice: 0,
  },
  [YieldType.Blueberry]: {
    name: "",
    sellPrice: 0,
  },
  [YieldType.Strawberry]: {
    name: "",
    sellPrice: 0,
  },
  [YieldType.Milk]: {
    name: "",
    sellPrice: 0,
  },
  [YieldType.Beef]: {
    name: "",
    sellPrice: 0,
  },
};
export const LandConfigs: Record<LandType, LandConfig> = {
  [LandType.Red]: {
    name: "",
    missionNumber: 0,
    containInterval: 0,
    buyPrice: 0,
  },
  [LandType.Green]: {
    name: "",
    missionNumber: 0,
    containInterval: 0,
    buyPrice: 0,
  },
  [LandType.Brown]: {
    name: "",
    missionNumber: 0,
    containInterval: 0,
    buyPrice: 0,
  },
};

export const WorkerConfigs: Record<WorkerType, WorkerConfig> = {
  [WorkerType.Fresher]: {
    name: "",
    workingInterval: 0,
    buyPrice: 0,
  },
  [WorkerType.Junior]: {
    name: "",
    workingInterval: 0,
    buyPrice: 0,
  },
  [WorkerType.Middle]: {
    name: "",
    workingInterval: 0,
    buyPrice: 0,
  },
  [WorkerType.Senior]: {
    name: "",
    workingInterval: 0,
    buyPrice: 0,
  },
};
export const MachineConfigs: Record<MachineType, MachineConfig> = {
  [MachineType.China]: {
    name: "",
    level: 0,
    support: 0,
    upgradePrice: 0,
  },
  [MachineType.Japan]: {
    name: "",
    level: 0,
    support: 0,
    upgradePrice: 0,
  },
  [MachineType.America]: {
    name: "",
    level: 0,
    support: 0,
    upgradePrice: 0,
  },
  [MachineType.Vietnam]: {
    name: "",
    level: 0,
    support: 0,
    upgradePrice: 0,
  },
};
export const FirstConfigs: Record<Type, FirstConfig> = {
  [Type.Land]: {
    name: "",
    number: 0,
  },
  [Type.Tomatoseed]: {
    name: "",
    number: 0,
  },
  [Type.Blueberryseed]: {
    name: "",
    number: 0,
  },
  [Type.Milkcow]: {
    name: "",
    number: 0,
  },
  [Type.Worker]: {
    name: "",
    number: 0,
  },
  [Type.Machine]: {
    name: "",
    number: 0,
  },
};
export async function loadFirstConfigFromCSV(): Promise<void> {
  const records = await CSVLoader.load("first");

  records.forEach((row) => {
    const type = row.name.toLowerCase() as Type;

    if (FirstConfigs[type]) {
      FirstConfigs[type] = {
        name: row.name,
        number: parseInt(row.number),
      };
    }
  });

  console.log("[CSV] FirstConfigs loaded:", FirstConfigs);
}

export async function loadPlantConfigFromCSV(): Promise<void> {
  const records = await CSVLoader.load("plants");

  records.forEach((row) => {
    const type = row.name.toLowerCase() as PlantType;

    if (PlantConfigs[type]) {
      PlantConfigs[type] = {
        name: row.name,
        harvestInterval: parseFloat(row.harvestInterval),
        maxHarvest: parseInt(row.maxHarvest),
        buyPrice: parseInt(row.buyPrice),
      };
    }
  });

  console.log("[CSV] PlantConfigs loaded:", PlantConfigs);
}

export async function loadCattleConfigFromCSV(): Promise<void> {
  const records = await CSVLoader.load("cattles");

  records.forEach((row) => {
    const type = row.name.toLowerCase() as CattleType;

    if (CattleConfigs[type]) {
      CattleConfigs[type] = {
        name: row.name,
        harvestInterval: parseFloat(row.harvestInterval),
        maxHarvest: parseInt(row.maxHarvest),
        buyPrice: parseInt(row.buyPrice),
      };
    }
  });

  console.log("[CSV] CattleConfigs loaded:", CattleConfigs);
}

export async function loadYieldConfigFromCSV(): Promise<void> {
  const records = await CSVLoader.load("yields");

  records.forEach((row) => {
    const type = row.name.toLowerCase() as YieldType;

    if (YieldConfigs[type]) {
      YieldConfigs[type] = {
        name: row.name,
        sellPrice: parseInt(row.sellPrice),
      };
    }
  });

  console.log("[CSV] YieldConfigs loaded:", YieldConfigs);
}
export async function loadWorkerConfigFromCSV(): Promise<void> {
  const records = await CSVLoader.load("workers");

  records.forEach((row) => {
    const type = row.name.toLowerCase() as WorkerType;

    if (WorkerConfigs[type]) {
      WorkerConfigs[type] = {
        name: row.name,
        workingInterval: parseFloat(row.workingInterval),
        buyPrice: parseInt(row.buyPrice),
      };
    }
  });

  console.log("[CSV] WorkerConfigs loaded:", WorkerConfigs);
}

export async function loadMachineConfigFromCSV(): Promise<void> {
  const records = await CSVLoader.load("machines");

  records.forEach((row) => {
    const type = row.name.toLowerCase() as MachineType;

    if (MachineConfigs[type]) {
      MachineConfigs[type] = {
        name: row.name,
        level: parseInt(row.level),
        support: parseFloat(row.support),
        upgradePrice: parseInt(row.upgradePrice),
      };
    }
  });

  console.log("[CSV] MachineConfigs loaded:", MachineConfigs);
}
export async function loadLandConfigFromCSV(): Promise<void> {
  const records = await CSVLoader.load("lands");

  records.forEach((row) => {
    const type = row.name.toLowerCase() as LandType;

    if (LandConfigs[type]) {
      LandConfigs[type] = {
        name: row.name,
        missionNumber: parseInt(row.missionNumber),
        containInterval: parseFloat(row.emptyInterval),
        buyPrice: parseInt(row.buyPrice),
      };
    }
  });

  console.log("[CSV] LandConfigs loaded:", LandConfigs);
}
