import { APlant } from './APlant';
import { IFlower } from './IFolower';

/** Роза */
export class RoseFlower extends APlant implements IFlower {
  public onEmitFloralScent(): void {
    console.log('======> onEmitFloralScent');
    console.log('=> Выращиваю цветки розы');
  }

  public onGrowFlowers(): void {
    console.log('======> onGrowFlowers');
    console.log('=> Испускаю аромат розы');
  }
}
