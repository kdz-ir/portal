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
    
    saveAs(new Blob([JSON.stringify(this.team)]), `${this.team.name}-${this.team.id}-${moment().format('jDD-HH-mm-ss')}.json`);
  }
}
