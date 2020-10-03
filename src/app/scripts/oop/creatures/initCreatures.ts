import { Parrot } from './birds/parrot';
import { CreatureService } from './creature.service';
import { Crow } from './birds/crow';
import { Lion } from './cats/lion';
import { Lynx } from './cats/lynx';
import { RoseFlower } from './plants/roseFlower';
import { AppleTree } from './plants/appleTree';
import { Tree } from './plants/tree';

const myParrot = new Parrot(
  'Красный попугай',
  12,
  100,
  3,
  '3dModelRedParrot'
);
const myCrow = new Crow(
  'Бело-чёрная ворона',
  20,
  100,
  7,
  '3dModelWhiteBlackCrow'
);
const myLion = new Lion(
  'Лев сованны',
  30,
  100,
  15,
  '3dModelLion'
);
const myLynx = new Lynx(
  'Канадская рысь',
  22,
  100,
  11,
  '3dModelCanadaLynx'
);
const myRoseFlower = new RoseFlower(
  'Красная роза',
  7,
  100,
  2,
  '3dModelRedRose'
);
const myAppleTree = new AppleTree(
  'Дерево зелёных яблок',
  50,
  100,
  35,
  '3dModelGreenAppleTree'
);
const myTree = new Tree(
  'Ель',
  55,
  100,
  40,
  '3dModelSpruceTree'
);

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
console.log('  ');
console.log('  ');

console.log('=====================Tree======================');
CreatureService.printCreature(myTree);
myTree.onFoodExtraction();
myTree.onNutrition();



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
