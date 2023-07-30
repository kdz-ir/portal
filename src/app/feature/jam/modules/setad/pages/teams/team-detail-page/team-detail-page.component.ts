import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITeamDetail } from '../../../models/iteam-detail';
import { saveAs } from 'file-saver';
import * as moment from 'jalali-moment';
import { SetadRepositoryService } from '../../../services/setad-repository.service';

@Component({
  selector: 'app-team-detail-page',
  templateUrl: './team-detail-page.component.html',
  styleUrls: ['./team-detail-page.component.scss']
})
export class TeamDetailPageComponent {
  team: ITeamDetail;

  constructor (ac: ActivatedRoute, private readonly _setadRepository: SetadRepositoryService) {
    this.team = <ITeamDetail>ac.snapshot.data['team'];
  }
  onExportList() {
    let team = this.team;
    team.players = team.players.map(c => ({
      profile: {
        city: c.profile.city,
        IdCardPhoto: this._setadRepository.imageUrl + c.profile.IdCardPhoto,
        personalPhoto: this._setadRepository.imageUrl + c.profile.personalPhoto,
        address: c.profile.address,
        birthday: c.profile.birthday,
        family: c.profile.family,
        fatherName: c.profile.fatherName,
        name: c.profile.name,
        phone: c.profile.phone,
        sex: c.profile.sex,
        sexRaw: c.profile.sexRaw
      },
      ageRange: c.ageRange,
      ageRangeName: c.ageRangeName,
      created: c.created,
      field: c.field,
      fieldName: c.fieldName,
      id: c.id,
      mobile: c.mobile,
      nationalCode: c.nationalCode,
      playerType: c.playerType,
      playerTypeName: c.playerTypeName,
      registerStatus: c.registerStatus,
      subField: c.subField,
      subFieldName: c.subFieldName
    }));
    saveAs(new Blob([JSON.stringify(this.team)]), `${this.team.name}-${this.team.id}-${moment().format('jDD-HH-mm-ss')}.json`);
  }
}
