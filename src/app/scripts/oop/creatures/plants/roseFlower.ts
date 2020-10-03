import { APlant } from './APlant';
import { IFlower } from './IFolower';

/** Роза */
export class RoseFlower extends APlant implements IFlower {
  constructor(
      name: string,
      size: number,
      stamina: number,
      weight: number,
      virtual3DModel: string
  ) {
      super(name, size, stamina, weight, virtual3DModel);
  }

  public onEmitFloralScent(): void {
    console.log('======> onEmitFloralScent');
    console.log('=> Выращиваю цветки розы');
  }

  public onGrowFlowers(): void {
    console.log('======> onGrowFlowers');
    console.log('=> Испускаю аромат розы');
  }
}
