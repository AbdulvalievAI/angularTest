import { ACat } from './ACat';

/** Лев */
export class Lion extends ACat {
  public onNutrition(): void {
    console.log('======> onMoving');
    console.log('=> Ем пойманную антилопу');
  }

  public onFoodExtraction(): void {
    console.log('======> onFoodExtraction');
    console.log('=> Сижу в засаде и выживаю добычу(антилопы, буйволы...)');
  }
}
