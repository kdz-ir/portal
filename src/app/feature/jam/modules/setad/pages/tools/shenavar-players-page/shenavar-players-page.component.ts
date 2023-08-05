import { AfterViewInit, Component } from '@angular/core';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { ProfileShowEntity } from 'src/app/feature/setting/models/profile-info';

@Component({
  selector: 'app-shenavar-players-page',
  templateUrl: './shenavar-players-page.component.html',
  styleUrls: ['./shenavar-players-page.component.scss']
})
export class ShenavarPlayersPageComponent implements AfterViewInit {
  players: { profile: ProfileShowEntity; teams: string; }[];

  constructor (private readonly _setadRepository: SetadRepositoryService) { }
  ngAfterViewInit(): void {
    this._setadRepository.shanavarPlayers.subscribe(c => this.players = c);
  }

}
