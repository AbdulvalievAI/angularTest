import { ICreature } from './ICreature';

export abstract class ACreature implements ICreature {
  readonly name: string;
  readonly size: number;
  readonly stamina: number;
  readonly weight: number;
  readonly virtual3DModel: string;
  constructor(creature: ICreature) {
    this.name = creature.name;
    this.size = creature.size;
    this.stamina = creature.stamina;
    this.weight = creature.weight;
    this.virtual3DModel = creature.virtual3DModel;
  }
}
