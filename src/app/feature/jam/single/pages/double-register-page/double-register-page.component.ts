import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportField } from '../../../models/sport-field';
import { SportSubField } from '../../../models/sub-sport-field';
import { SingleRegisteredStatus } from '../../models/SingleRegisteredStatus';

@Component({
  selector: 'app-double-register-page',
  templateUrl: './double-register-page.component.html',
  styleUrls: ['./double-register-page.component.scss']
})
export class DoubleRegisterPageComponent {
  _field: SportField;
  _subField: SportSubField;
  isRegistered: SingleRegisteredStatus;
  sportName: string;
  subFieldName: string;
  constructor (private readonly _activetedRoute: ActivatedRoute) {
    this._field = <SportField>_activetedRoute.snapshot.params['field'];
    this._subField = <SportSubField>_activetedRoute.snapshot.params['subField'];
    this.isRegistered = <SingleRegisteredStatus>this._activetedRoute.snapshot.data['registeredStatus'];
    this.sportName = <string>this._activetedRoute.snapshot.data['sportName'];
    this.subFieldName = <string>this._activetedRoute.snapshot.data['subFieldName'];
  }
  onWantRegister() {
  }
}
