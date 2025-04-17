export interface IAsset {
  name: string;
  harvestInterval: number;
  maxHarvest: number;
  buyPrice;

  useForFarm(): void;
}
