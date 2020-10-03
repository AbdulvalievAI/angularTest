import { ABird } from './ABird';

/** Ворона */
export class Crow extends ABird {
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
    console.log('======> onNutrition');
    console.log(`=> Кушаю - жука`);
  }

  public onFoodExtraction(): void {
    console.log('======> onFoodExtraction');
    console.log('=> Добываю еду по вороньи(жуков, мух...)');
  }

  public onAttack(): void {
    console.log('======> onAttack');
    console.log('=> Атакую врага пекированием и кликом по вороньи');
  }

  public onCreateBirdNest(): void {
    console.log('======> onCreateBirdNest');
    console.log('=> Создаю воронье гнездо');
  }

  /** Event handler красть блестящие вещи */
  public onStealShinyThings(): void {
    console.log('======> onStealShinyThings');
    console.log('=> Краду блестяшки');
  }
}
