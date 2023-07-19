import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlayer } from '../../../../shared/jam-shared/models/IPlayer';
import { SetadRepositoryService } from '../../../services/setad-repository.service';

@Component({
  selector: 'app-single-player-ditail-page',
  templateUrl: './single-player-ditail-page.component.html',
  styleUrls: ['./single-player-ditail-page.component.scss']
})
export class SinglePlayerDitailPageComponent {
  player: IPlayer;
  constructor (ac: ActivatedRoute, private readonly _setadRepository: SetadRepositoryService) {
    this.player = <IPlayer>ac.snapshot.data['player'];
  }
  onVerifyRegister() {
    this._setadRepository.verifySingle(this.player.id, this.player.field, this.player.subField).subscribe(t => console.log(t));
  }
}
