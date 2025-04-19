import { WorkerAction } from "../scripts/ui/LandUI";

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
}
