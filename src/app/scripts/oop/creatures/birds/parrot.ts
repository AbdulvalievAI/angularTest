import { ABird } from './ABird';

/** Попугай */
export class Parrot extends ABird {
  public onNutrition(): void {
    console.log('======> onNutrition');
    console.log(`=> Кушаю - ягоды`);
  }

  public onFoodExtraction(): void {
    console.log('======> onFoodExtraction');
    console.log('=> Добываю еду по попугайски(фрукты, ягоды...)');
  }

  public onAttack(): void {
    console.log('======> onAttack');
    console.log('=> Атакую врага своим клювом по попугайски');
  }

  public onCreateBirdNest(): void {
    console.log('======> onCreateBirdNest');
    console.log('=> Создаю гнездо попугая');
  }

  /** Повторять человеческие фразы */
  public onRepeatHumanPhrases(): void {
    console.log('======> onRepeatHumanPhrases');
    console.log('=> Повторяю услышенную фразу от человека');
  }
}
