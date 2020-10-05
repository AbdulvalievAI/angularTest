import { ACat } from './ACat';

/** Рысь */
export class Lynx extends ACat {
  public onNutrition(): void {
    console.log('======> onMoving');
    console.log('=> Ем пойманного зайца');
  }

  public onFoodExtraction(): void {
    console.log('======> onFoodExtraction');
    console.log('=> Сижу в засаде и выживаю добычу(птицы, зайцы...)');
  }
}
