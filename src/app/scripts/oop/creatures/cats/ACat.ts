import {ICreature} from '../ICreature';

/** Кошка */
export abstract class ACat implements ICreature {
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

