import { ICreatureEventsHandlers } from '../ICreatureEventsHandlers';
import { ACreature } from '../ACreature';

/** Растение */
export abstract class APlant
  extends ACreature
  implements ICreatureEventsHandlers {
  public onNutrition(): void {
    console.log('======> onFoodExtraction');
    console.log('=> Усваиваю все поглощённые вещества');
  }

  public onFoodExtraction(): void {
    console.log('======> onAttack');
    console.log('=> Впитываю питательные вещества через корни, листья...');
  }
}
