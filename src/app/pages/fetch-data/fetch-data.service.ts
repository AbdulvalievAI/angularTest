import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUser} from './IUser';
// import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  // tslint:disable-next-line:variable-name
  private _apiUrl = 'https://40605b1b-1279-4694-8830-293335fb2aac.mock.pstmn.io';

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) {}

  private getConfig(method: string): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/${method}`);
  }

  public getUsers(): Observable<IUser[]> {
    console.log('===> getUsers');
    return this.getConfig('users');
  }

  public generateTitles(obj: object): Array<string> {
    return Object.keys(obj).map(value => value.toString());
  }

  public generateValues(obj: object): Array<string> {
    return Object.values(obj);
  }
}
