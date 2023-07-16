import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDataCollection } from '../../shared/jam-shared/models/IDataCollection';
import { IPlayer } from '../../shared/jam-shared/models/IPlayer';
import { map } from 'rxjs/operators';
import { SportField } from '../../../models/sport-field';
import { SportSubField } from '../../../models/sub-sport-field';
@Injectable({
  providedIn: 'root'
})
export class SetadRepositoryService {
  private readonly _url = environment.url + '/api/v1/account/jam/setad';
  constructor (private readonly _httpClient: HttpClient) { }
  get allPlayers() {
    return this._httpClient.get<IDataCollection<IPlayer>>(this._url + '/all').pipe(map(c => c.data));
  }
  singlePlayers(field: SportField, subField: SportSubField) {
    return this._httpClient.post<IDataCollection<IPlayer>>(`${this._url}/single-filtered`, { field, subField }).pipe(map(t => t.data));
  }
  singlePlayer(id: number) {
    return this._httpClient.get<IPlayer>(this._url + '/single/' + id);
  }
}
