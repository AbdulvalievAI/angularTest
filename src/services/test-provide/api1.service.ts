import { Injectable } from '@angular/core';
import { ISourceData } from './source-data.interface';

@Injectable({
  providedIn: 'root',
})
export class Api1Service implements ISourceData {
  public getPosts(): Array<number> {
    return [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  }
}
