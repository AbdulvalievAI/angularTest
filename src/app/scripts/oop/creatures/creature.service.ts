import { ICreature } from './ICreature';

export class CreatureService {
  /**
   * @description вывод в лог и информации о существе
   * @param creature - экземпляр существа
   */
  static printCreature(creature: ICreature): void {
    console.log('======> Инормация о существе');
    console.log(`=> название: ${creature.name}`);
    console.log(`=> вес: ${creature.weight}`);
    console.log(`=> размер: ${creature.size}`);
    console.log(`=> запас жизненных сил: ${creature.stamina}`);
    console.log(`=> 3D модель: ${creature.virtual3DModel}`);
  }
}
