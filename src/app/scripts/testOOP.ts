/**
 * 1. Инкапсуляция
 *     ограничение доступа к составляющим объект компонентам (методам, переменным, атрибутам...).
 *
 * 2. Наследование
 *    механизм, который позволяет описать новый класс на основе существующего (родительского).
 *
 * 3. Полиморфизм
 *    возможность объектов с одинаковой спецификацией иметь различную реализацию.
 *
 * 4. Абстракция
 *    Абстракция означает выделение главных, наиболее значимых характеристик
 *    предмета и наоборот — отбрасывание второстепенных, незначительных.
 *
 * 5. Принцип единственной ответственности
 * 6. Принцип открытости-закрытости
 * 7. Принцип подстановки Барбары Лисков
 * 8. Принцип разделения интерфейса
 * 9. Принцип инверсии зависимостей
 */

// Существо
interface ICreature {
  type: string; // тип существа
  name: string; // название
  weight: number; // вес
  size: number; // размер
  color: string; // окрас
  stamina: number; // запас жизненных сил

  moving?(typeMoving: string): void; // перемещение

  nutrition(typeFood: string): void; // питание

  foodExtraction(): void; // добыча пищи

  attack?(): void; // Атака

  printInfo(): void; // Получение информации о существе
}

// Птица
abstract class ABird implements ICreature {
  private _type = 'Bird';
  private _color: string;
  private _name: string;
  private _size: number;
  private _stamina: number;
  private _weight: number;

  get type(): string {
    return this._type;
  }
  get name(): string {
    return this._name;
  }
  get color(): string {
    return this._color;
  }
  get size(): number {
    return this._size;
  }
  get stamina(): number {
    return this._stamina;
  }
  get weight(): number {
    return this._weight;
  }

  constructor(
    color: string,
    name: string,
    size: number,
    stamina: number,
    weight: number
  ) {
    this._color = color;
    this._name = name;
    this._size = size;
    this._stamina = stamina;
    this._weight = weight;
  }

  moving(typeMoving: string): void {
    console.log('======> moving');
    console.log(`=> Перемещаюсь - "${typeMoving}"`);
  }

  nutrition(typeFood: string): void {
    console.log('======> nutrition');
    console.log(`=> Кушаю - "${typeFood}"`);
  }

  abstract foodExtraction(): void;

  abstract attack(): void;

  printInfo(): void {
    console.log('======> Инормация о существе');
    console.log(`=> тип существа: ${this.type}`);
    console.log(`=> название: ${this.name}`);
    console.log(`=> вес: ${this.weight}`);
    console.log(`=> размер: ${this.size}`);
    console.log(`=> окрас: ${this.color}`);
    console.log(`=> запас жизненных сил: ${this.stamina}`);
  }

  clearFeathers(): void {
    console.log('======> clearFeathers');
    console.log('=> Чищу перья');
  }
}

class Parrot extends ABird {
  constructor(
    color: string,
    name: string,
    size: number,
    stamina: number,
    weight: number
  ) {
    super(color, name, size, stamina, weight);
  }

  attack(): void {
    console.log('======> attack');
    console.log(
      '=> Атакую врага своим клювом при помощи специальной попугайной техники'
    );
  }

  foodExtraction(): void {
    console.log('======> foodExtraction');
    console.log(
      '=> Копаю землю когтями и ищу еду в земле именно так, как это делают попугаи'
    );
  }

  moving(): void {
    super.moving('Хождение по земле');
  }

  nutrition(): void {
    super.nutrition('Червяк');
  }

  beAParrot(): void {
    console.log('======> beAParrot');
    console.log('=> Ура я попугай, делаю свои попугайные дела');
  }
}
const myParrot1 = new Parrot('red', 'Красный попугай', 12, 100, 3);
const myParrot2 = new Parrot('blue', 'Синий попугай', 16, 111, 5);

console.log('=============myParrot1==============');
myParrot1.printInfo();
myParrot1.moving();
myParrot1.foodExtraction();
myParrot1.nutrition();
myParrot1.attack();
myParrot1.clearFeathers();
myParrot1.beAParrot();

console.log('=============myParrot2==============');
myParrot2.printInfo();
myParrot2.moving();
myParrot2.foodExtraction();
myParrot2.nutrition();
myParrot2.clearFeathers();
myParrot2.beAParrot();
