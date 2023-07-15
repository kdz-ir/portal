import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleRegisteredStatus } from '../../models/SingleRegisteredStatus';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IIndividual } from "../../models/IIndividual";
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { MatDialog } from '@angular/material/dialog';
import { DoubleRepositoryService } from '../../services/double-repository.service';
import { ProgramFieldMode } from 'src/app/core/model/ProgramFieldMode';
import { SportField } from 'src/app/feature/jam/models/sport-field';
import { SportSubField } from 'src/app/feature/jam/models/sub-sport-field';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { Location } from '@angular/common';

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
  isLoading = false;
  readonly profileMode = ProgramFieldMode;
  constructor (private readonly _activetedRoute: ActivatedRoute,
    private readonly _fb: FormBuilder,
    private readonly _location: Location,
    private readonly _doubleService: DoubleRepositoryService,
    private readonly _swalService: SwalService) {
    this._field = <SportField>_activetedRoute.snapshot.params['field'];
    this._subField = <SportSubField>_activetedRoute.snapshot.params['subField'];
    this.isRegistered = <SingleRegisteredStatus>this._activetedRoute.snapshot.data['registeredStatus'];
    this.sportName = <string>this._activetedRoute.snapshot.data['sportName'];
    this.subFieldName = <string>this._activetedRoute.snapshot.data['subFieldName'];
    this.individual = <IIndividual>this._activetedRoute.snapshot.data['individuals'][0];
    this.isRegistered = <SingleRegisteredStatus>this._activetedRoute.snapshot.data['registeredStatus'];
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
    if (this.isLoading == true)
      return;
    this.isLoading = true;
    this._doubleService.register(this._field, this._subField, this.fGroup.value.individuals).subscribe(() => {
      this._swalService.successFullRegister();
      this.isLoading = false;
      this._location.back();
    });
  }
  async onWantDelete() {
    const confirm = await this._swalService.showWarnMessage();
    if (!confirm.isConfirmed)
      return;
    this._doubleService.delete(this._field, this._subField).subscribe(c => {
      this._swalService.successFullSubmited();
      this._location.back();
    });
  }
}
export interface IDoubleRegisterForm {
  individuals: FormArray<FormControl<string>>;
}