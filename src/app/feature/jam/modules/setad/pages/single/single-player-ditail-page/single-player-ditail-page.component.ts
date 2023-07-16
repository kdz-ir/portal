import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlayer } from '../../../../shared/jam-shared/models/IPlayer';

@Component({
  selector: 'app-single-player-ditail-page',
  templateUrl: './single-player-ditail-page.component.html',
  styleUrls: ['./single-player-ditail-page.component.scss']
})
export class SinglePlayerDitailPageComponent {
  player: IPlayer;
  constructor (ac: ActivatedRoute) {
    this.player = <IPlayer>ac.snapshot.data['player'];
    console.log(this.player);

  }
}
