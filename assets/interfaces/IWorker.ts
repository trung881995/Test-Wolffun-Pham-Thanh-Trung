import LandUI, { WorkerAction } from "../scripts/ui/LandUI";

export interface IWorker {
  name: string;
  number: number;
  workingInterval: number;
  buyPrice: number;

  Work(landUI: LandUI, workerAction: WorkerAction): void;
}
