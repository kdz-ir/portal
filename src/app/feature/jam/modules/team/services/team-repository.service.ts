import { Injectable } from '@angular/core';
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
import { environment } from 'src/environments/environment';
import { ICreateTeam } from '../models/icreate-team';
import { ITeamsList } from '../models/iteams-list';
import { ITeam } from "../models/ITeam";
import { map } from 'rxjs/operators';
import { IDataCollection } from '../../shared/jam-shared/models/IDataCollection';

@Injectable({
  providedIn: 'root'
})
export class TeamRepositoryService extends CoreProfileService {
  private readonly _url = environment.url + '/api/v1/account/jam/team';
  constructor () {
    super();
  }
  get teams() {
    return this.http.get<IDataCollection<ITeamsList>>(this._url).pipe(map(c => c.data));
  }
  team(id: number) {
    return this.http.get<ITeam>(this._url + `/${id}`);
  }
  create(data: ICreateTeam) {
    return this.http.post(this._url, data);
  }
  addMember(id: number, data) {
    return this.http.post(this._url + `/${id}/add-player`, data);
  }
  delete(id: number) {
    return this.http.delete(this._url + `/${id}`);
  }
  deletePlayer(teamId: number, nationalCode: string) {
    return this.http.delete(this._url + `/${teamId}/${nationalCode}`);
  }
}
