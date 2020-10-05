import { Crow } from './birds/crow';
import { Parrot } from './birds/parrot';
import { ICreature } from './ICreature';
import { Lion } from './cats/lion';
import { Lynx } from './cats/lynx';
import { AppleTree } from './plants/appleTree';
import { RoseFlower } from './plants/roseFlower';
import { ECreature } from './ECreature';
import { Tree } from './plants/tree';

/** Паттерн: Фабричный метод */
export class CreatureFactory {
  create(type: ECreature, creature: ICreature): any {
    switch (type) {
      case 'Crow':
        return new Crow(creature);
      case 'Parrot':
        return new Parrot(creature);
      case 'Lion':
        return new Lion(creature);
      case 'Lynx':
        return new Lynx(creature);
      case 'AppleTree':
        return new AppleTree(creature);
      case 'RoseFlower':
        return new RoseFlower(creature);
      case 'Tree':
        return new Tree(creature);
    }
  }
}
