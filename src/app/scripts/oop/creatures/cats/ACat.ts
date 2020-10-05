import { ACreature } from '../ACreature';
import { ICreatureEventsHandlers } from '../ICreatureEventsHandlers';

/** Кошка */
export abstract class ACat
  extends ACreature
  implements ICreatureEventsHandlers {
  abstract onNutrition(): void;

  abstract onFoodExtraction(): void;

  public onMoving(): void {
    console.log('======> onMoving');
    console.log(`=> Перемещаюсь - хождение, бег, прыжки, лазанье по деревьям`);
  }

  public onAttack(): void {
    console.log('======> onAttack');
    console.log('=> Царапаю врага когтями');
  }

  /** Event handler вылизывания своей шерсти */
  public onLickWool(): void {
    console.log('======> onMoving');
    console.log(`=> Вылизываю свою шерсть`);
  }
}
