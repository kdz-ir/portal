import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleRegisteredStatus } from '../../models/SingleRegisteredStatus';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IIndividual } from '../../models/CheckSportInsuranceStatus';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatDialog } from '@angular/material/dialog';
import { DoubleRepositoryService } from '../../services/double-repository.service';
import { ProgramFieldMode } from 'src/app/core/model/ProgramFieldMode';
import { SportField } from 'src/app/feature/jam/models/sport-field';
import { SportSubField } from 'src/app/feature/jam/models/sub-sport-field';

@Component({
  selector: 'app-double-register-page',
  templateUrl: './double-register-page.component.html',
  styleUrls: ['./double-register-page.component.scss']
})
export class DoubleRegisterPageComponent implements OnInit {
  _field: SportField;
  _subField: SportSubField;
  isRegistered: SingleRegisteredStatus;
  sportName: string;
  subFieldName: string;
  fGroup: FormGroup<IDoubleRegisterForm>;
  individual: IIndividual;
  readonly profileMode = ProgramFieldMode;
  constructor (private readonly _activetedRoute: ActivatedRoute, private readonly _dialog: MatDialog, private readonly _fb: FormBuilder, private readonly _doubleService: DoubleRepositoryService) {
    this._field = <SportField>_activetedRoute.snapshot.params['field'];
    this._subField = <SportSubField>_activetedRoute.snapshot.params['subField'];
    this.isRegistered = <SingleRegisteredStatus>this._activetedRoute.snapshot.data['registeredStatus'];
    this.sportName = <string>this._activetedRoute.snapshot.data['sportName'];
    this.subFieldName = <string>this._activetedRoute.snapshot.data['subFieldName'];
    this.individual = <IIndividual>this._activetedRoute.snapshot.data['individuals'][0];

  }
  ngOnInit(): void {
    const individuals: FormControl<string>[] = [];
    for (let index = 0; index < this.individual.min - 1; index++)
      individuals.push(this._fb.control('', [Validators.required, ValidatorCoreService.nationalCodeChecker]));
    this.fGroup = this._fb.group<IDoubleRegisterForm>({
      individuals: this._fb.array<FormControl<string>>(individuals)
    });
  }
  onSubmited() {
    this._doubleService.register(this._field, this._subField, this.fGroup.value.individuals).subscribe();
  }
}
export interface IDoubleRegisterForm {
  individuals: FormArray<FormControl<string>>;
}