import { Component } from '@angular/core';
import { IPlayer } from '../../../shared/jam-shared/models/IPlayer';

@Component({
  selector: 'app-player-detail-page',
  templateUrl: './player-detail-page.component.html',
  styleUrls: ['./player-detail-page.component.scss']
})
export class PlayerDetailPageComponent {
  player: IPlayer;
}
