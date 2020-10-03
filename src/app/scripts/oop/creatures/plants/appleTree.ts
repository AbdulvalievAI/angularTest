import { APlant } from './APlant';
import { IFlower } from './IFolower';
import { IFetusPlant } from './IFetusPlant';

/** Яблочное дерево */
export class AppleTree extends APlant implements IFlower, IFetusPlant {
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
    console.log('=> Выращиваю белые цветки яблочного дерева');
  }

  public onGrowFlowers(): void {
    console.log('======> onGrowFlowers');
    console.log('=> Испускаю аромат цветков яблочного дерева');
  }

  public onGrowFetus(): void {
    console.log('======> onGrowGreenApples');
    console.log('=> Выращиваю зелёные яблоки');
  }
}
