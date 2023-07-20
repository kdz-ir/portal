import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITeamDetail } from '../../../models/iteam-detail';

@Component({
  selector: 'app-team-detail-page',
  templateUrl: './team-detail-page.component.html',
  styleUrls: ['./team-detail-page.component.scss']
})
export class TeamDetailPageComponent {
team: ITeamDetail;

constructor(ac:ActivatedRoute) {
  this.team=<ITeamDetail>ac.snapshot.data['team'];
  
}
}
