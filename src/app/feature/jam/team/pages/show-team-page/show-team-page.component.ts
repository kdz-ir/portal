import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayer } from '../../models/IPlayer';
import { ActivatedRoute } from '@angular/router';
import { ITeam } from '../../models/ITeam';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamRepositoryService } from '../../services/team-repository.service';

@Component({
  selector: 'app-show-team-page',
  templateUrl: './show-team-page.component.html',
  styleUrls: ['./show-team-page.component.scss']
})
export class ShowTeamPageComponent {
  dataSource: MatTableDataSource<IPlayer>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'playerType', 'nationalCode', 'action'];
  teamInfo: ITeam;
  fGroup: FormGroup<{ player: FormControl<string>; }>;
  constructor (private readonly _activatedRoute: ActivatedRoute, fb: FormBuilder, private readonly _teamService: TeamRepositoryService) {
    this.teamInfo = <ITeam>_activatedRoute.snapshot.data['team'];
    this.dataSource = new MatTableDataSource(this.teamInfo.players);
    this.fGroup = fb.nonNullable.group({
      player: fb.nonNullable.control('', [Validators.required])
    });
  }

  onNewPlayerAdded() {
    this._teamService.addMember(this.teamInfo.team.id, { team: this.teamInfo.team.id, nationalCode: this.fGroup.value.player }).subscribe(c => this._teamService.team(this.teamInfo.team.id).subscribe(c =>{
      this.teamInfo=c;
    }));
  }
}
