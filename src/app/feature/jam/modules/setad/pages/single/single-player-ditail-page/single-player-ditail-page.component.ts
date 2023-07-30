import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlayer } from '../../../../shared/jam-shared/models/IPlayer';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { Location } from '@angular/common';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-single-player-ditail-page',
  templateUrl: './single-player-ditail-page.component.html',
  styleUrls: ['./single-player-ditail-page.component.scss']
})
export class SinglePlayerDitailPageComponent {
  player: IPlayer;
  constructor (ac: ActivatedRoute, private readonly _setadRepository: SetadRepositoryService,
    private readonly _location: Location, private readonly _swal: SwalService) {
    this.player = <IPlayer>ac.snapshot.data['player'];
  }
  onVerifyRegister() {
    this._setadRepository.verifySingle(this.player.id, this.player.field, this.player.subField).subscribe(t => {
      this._swal.successFullSubmited();
      this._location.back();
    });
  }

}
