export interface IMachine {
  name: string;
  level: number;
  support: number;
  upgradePrice: number;

  Operate(): void;
}
