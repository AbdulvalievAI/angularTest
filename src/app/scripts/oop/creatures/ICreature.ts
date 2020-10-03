/** @description Живое существо(рыба, птица, растение...) */
export interface ICreature {
  /** Название существа(белый попугай, лесной волк...) */
  name: string;

  /** Вес существа */
  weight: number;

  /** Размер существа */
  size: number;

  /** Количество жизенных сил существа */
  stamina: number;

  /** 3D модель существа */
  virtual3DModel: string;

  /** Event handler питания существа */
  onNutrition(): void;

  /** Event handler добычи пищи */
  onFoodExtraction(): void;

  /** Event handler перемещения существа */
  onMoving?(): void;

  /** Event handler атаки существа */
  onAttack?(): void;
}


