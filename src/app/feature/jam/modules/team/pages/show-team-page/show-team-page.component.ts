import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayer } from '../../../shared/jam-shared/models/IPlayer';
import { ActivatedRoute } from '@angular/router';
import { ITeam } from '../../models/ITeam';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamRepositoryService } from '../../services/team-repository.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { Location } from '@angular/common';

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
  constructor (activatedRoute: ActivatedRoute, fb: FormBuilder,
    private readonly _teamService: TeamRepositoryService,
    private readonly _location: Location,
    private readonly _swalService: SwalService) {
    this.teamInfo = <ITeam>activatedRoute.snapshot.data['team'];
    this.dataSource = new MatTableDataSource(this.teamInfo.players);
    this.fGroup = fb.nonNullable.group({
      player: fb.nonNullable.control('', [Validators.required])
    });
  }
  async onDeletePlayer(nationalCode: string) {
    const player = this.teamInfo.players.find(c => c.nationalCode == nationalCode);
    const result = await this._swalService.swal.fire({ text: `آیا شما مطمعنید میخواهید بازیکن ${player.profile.name} ${player.profile.family} را حذف کنید.`, icon: 'warning', confirmButtonText: 'بله', showCancelButton: true });

    if (result.isConfirmed)
      this._teamService.deletePlayer(this.teamInfo.team.id, nationalCode).subscribe(c => {

        this._refreshTeam();
      });
  }
  private _refreshTeam() {
    this._teamService.team(this.teamInfo.team.id).subscribe(c => {
      this.teamInfo = c;
      this.dataSource = new MatTableDataSource(c.players);
    });
  }
  async onDeleteTeam() {
    const result = await this._swalService.showWarnMessage();
    if (result.isConfirmed) {
      this._teamService.delete(this.teamInfo.team.id).subscribe(c => {
        this._swalService.successFullSubmited();
        this._location.back();
      });
    }
  }
  onNewPlayerAdded() {
    this._teamService.addMember(this.teamInfo.team.id, { team: this.teamInfo.team.id, nationalCode: this.fGroup.value.player })
      .subscribe(c => {
        this.fGroup.reset();
        this._refreshTeam();
      });
  }
}
