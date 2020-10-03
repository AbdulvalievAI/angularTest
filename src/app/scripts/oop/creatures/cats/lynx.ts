import { ACat } from './ACat';

/** Рысь */
export class Lynx extends ACat {
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
      console.log('=> Ем пойманного зайца');
  }

  public onFoodExtraction(): void {
    console.log('======> onFoodExtraction');
    console.log('=> Сижу в засаде и выживаю добычу(птицы, зайцы...)');
  }
}
