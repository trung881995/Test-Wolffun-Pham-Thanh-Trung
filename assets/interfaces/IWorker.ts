export interface IWorker {
  name: string;
  number: number;
  workingInterval: number;
  buyPrice: number;

  Work(): void;
}
