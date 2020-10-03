import { ICreature } from '../ICreature';

/** Растение */
export abstract class APlant implements ICreature {
  protected constructor(
    readonly name: string,
    readonly size: number,
    readonly stamina: number,
    readonly weight: number,
    readonly virtual3DModel: string
  ) {}

  public onNutrition(): void {
    console.log('======> onFoodExtraction');
    console.log('=> Усваиваю все поглощённые вещества');
  }

  public onFoodExtraction(): void {
    console.log('======> onAttack');
    console.log('=> Впитываю питательные вещества через корни, листья...');
  }
}
