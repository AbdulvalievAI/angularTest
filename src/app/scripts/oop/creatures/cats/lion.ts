import { ACat } from './ACat';

/** Лев */
export class Lion extends ACat {
  constructor(
    name: string,
    size: number,
    stamina: number,
    weight: number,
    virtual3DModel: string
  ) {
    super(name, size, stamina, weight, virtual3DModel);
  }

  public onNutrition(): void {
      console.log('======> onMoving');
      console.log('=> Ем пойманную антилопу');
  }

  public onFoodExtraction(): void {
      console.log('======> onFoodExtraction');
      console.log('=> Сижу в засаде и выживаю добычу(антилопы, буйволы...)');
  }
}
