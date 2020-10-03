/** Цветок */
export interface IFlower {
  /** Event handler выращивать цветы */
  onGrowFlowers(): void;

  /** Event handler Испускать цветочный аромат */
  onEmitFloralScent(): void;
}
