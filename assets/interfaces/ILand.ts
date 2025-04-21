import { CattleType } from "../enums/CattleType";
import { PlantType } from "../enums/PlantType";
import LandUI, { LandState, WorkerAction } from "../scripts/ui/LandUI";

export interface ILand {
  name: string;
  number: number;
  missionNumber: number;
  containInterval: number;
  buyPrice: number;
  containYield: number;
  currentAsset: any;
  crop: number;
  workerAction: WorkerAction;
  workingTime: number;
  isReadyToWork: boolean;

  isEmpty: boolean;
  time: number;
  landState: LandState;
  plantType: PlantType;
  cattleType: CattleType;
}
