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
  public static creatureMapping: {[K in ECreature]: any} = {
    [ ECreature.Crow ]: Crow,
    [ ECreature.Parrot ]: Parrot,
    [ ECreature.Lion ]: Lion,
    [ ECreature.Lynx ]: Lynx,
    [ ECreature.AppleTree ]: AppleTree,
    [ ECreature.RoseFlower ]: RoseFlower,
    [ ECreature.Tree ]: Tree,
  };

  static create(type: ECreature, creature: ICreature): any {
    if (CreatureFactory.creatureMapping[type]) {
      return new CreatureFactory.creatureMapping[type](creature);
    }
    throw(
      new Error(
        `CreatureFactory.create - value "${type}" for params "type" is not exist.
          See available values here "ECreature".`
      )
    );
  }
}
