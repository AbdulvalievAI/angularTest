export interface ICreatureEventsHandlers {
  /** Event handler питания существа */
  onNutrition(): void;

  /** Event handler добычи пищи */
  onFoodExtraction(): void;

  /** Event handler перемещения существа */
  onMoving?(): void;

  /** Event handler атаки существа */
  onAttack?(): void;
}
