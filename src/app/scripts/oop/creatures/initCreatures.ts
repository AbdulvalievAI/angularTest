import { CreatureService } from './creature.service';
import { CreatureFactory } from './creatureFactory';
import { ECreature } from './ECreature';

const myParrot = CreatureFactory.create(ECreature.Parrot, {
  name: 'Красный попугай',
  weight: 12,
  size: 100,
  stamina: 3,
  virtual3DModel: '3dModelRedParrot',
});
const myCrow = CreatureFactory.create(ECreature.Crow, {
  name: 'Бело-чёрная ворона',
  weight: 20,
  size: 100,
  stamina: 7,
  virtual3DModel: '3dModelWhiteBlackCrow',
});

const myLion = CreatureFactory.create(ECreature.Lion, {
  name: 'Лев сованны',
  weight: 30,
  size: 100,
  stamina: 15,
  virtual3DModel: '3dModelLion',
});
const myLynx = CreatureFactory.create(ECreature.Lynx, {
  name: 'Канадская рысь',
  weight: 22,
  size: 100,
  stamina: 11,
  virtual3DModel: '3dModelCanadaLynx',
});
const myRoseFlower = CreatureFactory.create(ECreature.RoseFlower, {
  name: 'Красная роза',
  weight: 7,
  size: 100,
  stamina: 2,
  virtual3DModel: '3dModelRedRose',
});
const myAppleTree = CreatureFactory.create(ECreature.AppleTree, {
  name: 'Дерево зелёных яблок',
  weight: 50,
  size: 100,
  stamina: 35,
  virtual3DModel: '3dModelGreenAppleTree',
});

console.log('=====================myParrot======================');
CreatureService.printCreature(myParrot);
myParrot.onMoving();
myParrot.onFoodExtraction();
myParrot.onNutrition();
myParrot.onAttack();
myParrot.onClearFeathers();
myParrot.onRepeatHumanPhrases();
myParrot.onCreateBirdNest();
console.log('  ');
console.log('  ');

console.log('=====================crow======================');
CreatureService.printCreature(myCrow);
myCrow.onMoving();
myCrow.onFoodExtraction();
myCrow.onNutrition();
myCrow.onClearFeathers();
myCrow.onStealShinyThings();
myCrow.onCreateBirdNest();
console.log('  ');
console.log('  ');

console.log('=====================lion======================');
CreatureService.printCreature(myLion);
myLion.onAttack();
myLion.onFoodExtraction();
myLion.onMoving();
myLion.onNutrition();
myLion.onLickWool();
console.log('  ');
console.log('  ');

console.log('=====================Lynx======================');
CreatureService.printCreature(myLynx);
myLynx.onAttack();
myLynx.onFoodExtraction();
myLynx.onMoving();
myLynx.onNutrition();
myLynx.onLickWool();
console.log('  ');
console.log('  ');

console.log('=====================Rose======================');
CreatureService.printCreature(myRoseFlower);
myRoseFlower.onFoodExtraction();
myRoseFlower.onNutrition();
myRoseFlower.onGrowFlowers();
myRoseFlower.onEmitFloralScent();
console.log('  ');
console.log('  ');

console.log('=====================AppleTree======================');
CreatureService.printCreature(myAppleTree);
myAppleTree.onFoodExtraction();
myAppleTree.onNutrition();
myAppleTree.onGrowFlowers();
myAppleTree.onEmitFloralScent();
myAppleTree.onGrowFetus();

// 1. Инкапсуляция
//     ограничение доступа к составляющим объект компонентам (методам, переменным, атрибутам...).
//
// 2. Наследование
//    механизм, который позволяет описать новый класс на основе существующего (родительского).
//
// 3. Полиморфизм
//    возможность объектов с одинаковой спецификацией иметь различную реализацию.
//
// 4. Абстракция
//    Абстракция означает выделение главных, наиболее значимых характеристик
//    предмета и наоборот — отбрасывание второстепенных, незначительных.
//
// 5. Принцип единственной ответственности
// 6. Принцип открытости-закрытости
// 7. Принцип подстановки Барбары Лисков
// 8. Принцип разделения интерфейса
// 9. Принцип инверсии зависимостей
