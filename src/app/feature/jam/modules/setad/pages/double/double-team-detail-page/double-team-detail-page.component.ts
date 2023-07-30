import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoubleTeamDetial } from '../../../models/idouble-team-detial';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { Location } from '@angular/common';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-double-team-detail-page',
  templateUrl: './double-team-detail-page.component.html',
  styleUrls: ['./double-team-detail-page.component.scss']
})
export class DoubleTeamDetailPageComponent {
  team: IDoubleTeamDetial;
  public get isVerify(): boolean {
    return this.team?.players?.every(c => c.registerStatus != 1);
  }
  constructor (ac: ActivatedRoute, private readonly _location: Location, private readonly _swalService: SwalService, private readonly _setadRepository: SetadRepositoryService) {
    this.team = <IDoubleTeamDetial>ac.snapshot.data['team'];
  }
  onVerify() {
    if (this.isVerify) {
      return;
    }
    this._setadRepository.verifyDouble(this.team.id, this.team.field, this.team.subField).subscribe(c => {
      this._swalService.successFullSubmited();
      this._location.back();
    });
  }
  onDownloadImage(imageId: string,name:string,family:string,nationalCode:string) {
    this._setadRepository.getImage(imageId).subscribe(c => {
      saveAs(new Blob([c]), `${name}-${family}-${nationalCode}-${imageId}.jpg`);
    });
  }
}
