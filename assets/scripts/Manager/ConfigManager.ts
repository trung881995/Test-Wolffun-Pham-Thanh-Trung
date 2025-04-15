import {
  FirstConfig,
  YieldConfig,
  CattleConfig,
  PlantConfig,
  WorkerConfig,
  MachineConfig,
  LandConfig,
} from "../../scripts/data/GameConfig";

export class ConfigManager {
  private static _instance: ConfigManager;
  public static get instance(): ConfigManager {
    if (!this._instance) {
      this._instance = new ConfigManager();
    }
    return this._instance;
  }

  private firstConfigs: Map<string, FirstConfig> = new Map();
  private yieldConfigs: Map<string, YieldConfig> = new Map();
  private cattleConfigs: Map<string, CattleConfig> = new Map();
  private plantConfigs: Map<string, PlantConfig> = new Map();
  private workerConfigs: Map<string, WorkerConfig> = new Map();
  private machineConfigs: Map<string, MachineConfig> = new Map();
  private landConfigs: Map<string, LandConfig> = new Map();

  public initFirstConfigs(configs: FirstConfig[]) {
    this.firstConfigs.clear();
    configs.forEach((config) => {
      this.firstConfigs.set(config.name, config);
    });
  }

  public getFirstConfigByName(name: string): FirstConfig | undefined {
    return this.firstConfigs.get(name);
  }

  public getAllTomatoConfigs(): FirstConfig[] {
    return Array.from(this.firstConfigs.values());
  }

  public initYieldConfigs(configs: YieldConfig[]) {
    this.yieldConfigs.clear();
    configs.forEach((config) => {
      this.yieldConfigs.set(config.name, config);
    });
  }

  public getYieldConfigByName(name: string): YieldConfig | undefined {
    return this.yieldConfigs.get(name);
  }

  public getAllYieldConfigs(): YieldConfig[] {
    return Array.from(this.yieldConfigs.values());
  }

  public initCattleConfigs(configs: CattleConfig[]) {
    this.cattleConfigs.clear();
    configs.forEach((config) => {
      this.cattleConfigs.set(config.name, config);
    });
  }

  public getCattleConfigByName(name: string): CattleConfig | undefined {
    return this.cattleConfigs.get(name);
  }

  public getAllCattleConfigs(): CattleConfig[] {
    return Array.from(this.cattleConfigs.values());
  }

  public initPlantConfigs(configs: PlantConfig[]) {
    this.plantConfigs.clear();
    configs.forEach((config) => {
      this.plantConfigs.set(config.name, config);
    });
  }

  public getPlantConfigByName(name: string): PlantConfig | undefined {
    return this.plantConfigs.get(name);
  }

  public getAllPlantConfigs(): PlantConfig[] {
    return Array.from(this.plantConfigs.values());
  }

  public initWorkerConfigs(configs: WorkerConfig[]) {
    this.workerConfigs.clear();
    configs.forEach((config) => {
      this.workerConfigs.set(config.name, config);
    });
  }

  public getWorkerConfigByName(name: string): WorkerConfig | undefined {
    return this.workerConfigs.get(name);
  }

  public getAllWorkerConfigs(): WorkerConfig[] {
    return Array.from(this.workerConfigs.values());
  }

  public initMachineConfigs(configs: MachineConfig[]) {
    this.machineConfigs.clear();
    configs.forEach((config) => {
      this.machineConfigs.set(config.name, config);
    });
  }

  public getMachineConfigByName(name: string): MachineConfig | undefined {
    return this.machineConfigs.get(name);
  }

  public getAllMachineConfigs(): MachineConfig[] {
    return Array.from(this.machineConfigs.values());
  }

  public initLandConfigs(configs: LandConfig[]) {
    this.landConfigs.clear();
    configs.forEach((config) => {
      this.landConfigs.set(config.name, config);
    });
  }

  public getLandConfigByName(name: string): LandConfig | undefined {
    return this.landConfigs.get(name);
  }

  public getAllLandConfigs(): LandConfig[] {
    return Array.from(this.landConfigs.values());
  }
}
