import { ICreature } from '../ICreature';

/** Существо птица(попугай, орёл, воробей...). */
export abstract class ABird implements ICreature {
  protected constructor(
    readonly name: string,
    readonly size: number,
    readonly stamina: number,
    readonly weight: number,
    readonly virtual3DModel: string
  ) {}


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
