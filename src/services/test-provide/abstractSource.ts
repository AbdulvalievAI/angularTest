import { ISourceData } from './source-data.interface';

export abstract class AbstractSource implements ISourceData {
  abstract getPosts(): Array<number>;
}
