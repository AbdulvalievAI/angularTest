import { APlant } from './APlant';

/** Дерево */
export class Tree extends APlant {
  constructor(
    name: string,
    size: number,
    stamina: number,
    weight: number,
    virtual3DModel: string
  ) {
    super(name, size, stamina, weight, virtual3DModel);
  }
}
