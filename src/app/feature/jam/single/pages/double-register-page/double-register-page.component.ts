import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportField } from '../../../models/sport-field';
import { SportSubField } from '../../../models/sub-sport-field';
import { SingleRegisteredStatus } from '../../models/SingleRegisteredStatus';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IIndividual } from '../../models/CheckSportInsuranceStatus';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { SingleRepositoryService } from '../../services/single-repository.service';
import { IGetProfileRoot } from 'src/app/core/model/profile-status-info';

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
  profiles: IGetProfileRoot[];
  constructor (private readonly _activetedRoute: ActivatedRoute, private readonly _fb: FormBuilder, private readonly _singleService: SingleRepositoryService) {
    this._field = <SportField>_activetedRoute.snapshot.params['field'];
    this._subField = <SportSubField>_activetedRoute.snapshot.params['subField'];
    this.isRegistered = <SingleRegisteredStatus>this._activetedRoute.snapshot.data['registeredStatus'];
    this.sportName = <string>this._activetedRoute.snapshot.data['sportName'];
    this.subFieldName = <string>this._activetedRoute.snapshot.data['subFieldName'];
    this.individual = <IIndividual>this._activetedRoute.snapshot.data['individuals'][0];
    this.profiles = [];
  }
  ngOnInit(): void {
    const individuals: FormControl<string>[] = [];
    for (let index = 0; index < this.individual.min - 1; index++)
      individuals.push(this._fb.control('', [Validators.required, ValidatorCoreService.nationalCodeChecker]));
    this.fGroup = this._fb.group<IDoubleRegisterForm>({
      individuals: this._fb.array<FormControl<string>>(individuals)
    });
  }
  onSearchProfile(index: number) {
    this._singleService.getProfileWithNationalCode(this.fGroup.controls.individuals.at(index).value).subscribe(c => {
      this.profiles[index] = c;
    });
  }
  onSubmited() {
  }
}
export interface IDoubleRegisterForm {
  individuals: FormArray<FormControl<string>>;
}