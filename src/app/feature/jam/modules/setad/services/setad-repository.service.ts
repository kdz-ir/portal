import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDataCollection } from '../../shared/jam-shared/models/IDataCollection';
import { IPlayer } from '../../shared/jam-shared/models/IPlayer';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SetadRepositoryService {
  private readonly _url = environment.url + '/api/v1/account/jam/setad';
  constructor (private readonly _httpClient: HttpClient) { }
  get allPlayers() {
    return this._httpClient.get<IDataCollection<IPlayer>>(this._url + '/all').pipe(map(c => c.data));
  }
}
