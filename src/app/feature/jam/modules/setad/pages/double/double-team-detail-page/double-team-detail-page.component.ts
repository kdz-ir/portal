import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoubleTeamDetial } from '../../../models/idouble-team-detial';

@Component({
  selector: 'app-double-team-detail-page',
  templateUrl: './double-team-detail-page.component.html',
  styleUrls: ['./double-team-detail-page.component.scss']
})
export class DoubleTeamDetailPageComponent {
  team: IDoubleTeamDetial;
  constructor (ac: ActivatedRoute) {
    this.team = <IDoubleTeamDetial>ac.data['team'];
  }
}
