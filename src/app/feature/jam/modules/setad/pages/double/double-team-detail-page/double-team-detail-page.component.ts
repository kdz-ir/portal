import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoubleTeamDetial } from '../../../models/idouble-team-detial';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { Location } from '@angular/common';
import { SwalService } from 'src/app/core/services/swal/swal.service';

@Component({
  selector: 'app-double-team-detail-page',
  templateUrl: './double-team-detail-page.component.html',
  styleUrls: ['./double-team-detail-page.component.scss']
})
export class DoubleTeamDetailPageComponent {
  team: IDoubleTeamDetial;
  constructor (ac: ActivatedRoute, private readonly _location: Location, private readonly _swalService: SwalService, private readonly _setadRepository: SetadRepositoryService) {
    this.team = <IDoubleTeamDetial>ac.snapshot.data['team'];
  }
  onVerify() {
    if (this.team.players.every(c => c.registerStatus != 1)) {
      return;
    }
    this._setadRepository.verifyDouble(this.team.id, this.team.field, this.team.subField).subscribe(c => {
      this._swalService.successFullSubmited();
      this._location.back();
    });
  }
}
