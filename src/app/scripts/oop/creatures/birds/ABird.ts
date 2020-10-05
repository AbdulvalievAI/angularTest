import { ICreatureEventsHandlers } from '../ICreatureEventsHandlers';
import { ACreature } from '../ACreature';

/** Существо птица(попугай, орёл, воробей...). */
export abstract class ABird
  extends ACreature
  implements ICreatureEventsHandlers {
  abstract onNutrition(): void;

  abstract onFoodExtraction(): void;

  public onMoving(): void {
    console.log('======> onMoving');
    console.log(`=> Перемещаюсь - хождением, прыжками и полётом`);
  }

  abstract onAttack(): void;

  /** Event handler чистка перьев */
  public onClearFeathers(): void {
    console.log('======> onClearFeathers');
    console.log('=> Чищу перья');
  }

  /** Event handler создание птичего гнезда */
  abstract onCreateBirdNest(): void;
}
