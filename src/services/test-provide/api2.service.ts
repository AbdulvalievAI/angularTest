import { Injectable } from '@angular/core';
import { ISourceData } from './source-data.interface';

@Injectable({
  providedIn: 'root',
})
export class Api2Service implements ISourceData {
  public getPosts(): Array<number> {
    return [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
  }
}
