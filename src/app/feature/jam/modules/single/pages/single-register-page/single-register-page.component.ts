import { Component } from '@angular/core';
import { SingleRepositoryService } from '../../services/single-repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleRegisteredStatus } from "../../models/SingleRegisteredStatus";
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { Location } from '@angular/common';
import { SportField } from 'src/app/feature/jam/models/sport-field';
import { SportSubField } from 'src/app/feature/jam/models/sub-sport-field';

@Component({
  selector: 'app-single-register-page',
  templateUrl: './single-register-page.component.html',
  styleUrls: ['./single-register-page.component.scss']
})
export class SingleRegisterPageComponent {
  private _field: SportField;
  private _subField: SportSubField;
  isRegistered: SingleRegisteredStatus;
  isLoading = false;
  sportName: string;
  subFieldName: string;
  constructor (private readonly _singleService: SingleRepositoryService, private readonly _router: Router,
    private readonly _location: Location,
    private readonly _activetedRoute: ActivatedRoute, private readonly _swalService: SwalService) {
    this._field = <SportField>_activetedRoute.snapshot.params['field'];
    this._subField = <SportSubField>_activetedRoute.snapshot.params['subField'];
    this.isRegistered = <SingleRegisteredStatus>this._activetedRoute.snapshot.data['registeredStatus'];
    this.sportName = <string>this._activetedRoute.snapshot.data['sportName'];
    this.subFieldName = <string>this._activetedRoute.snapshot.data['subFieldName'];
  }
  onWantRegister() {
    if (this.isLoading == true)
      return;
    this.isLoading = true;
    this._singleService.register(this._field, this._subField).subscribe(c => {
      this._swalService.successFullRegister();
      this.isLoading = false;
      this._location.back();
    });
  }
  async onWantDelete() {
    const confirm = await this._swalService.showWarnMessage();
    if (!confirm.isConfirmed)
      return;
    this._singleService.delete(this._field, this._subField).subscribe(c => {
      this._swalService.successFullSubmited();
      this._location.back();
    });
  }
}
