import { Component } from '@angular/core';
import { TeamRepositoryService } from '../../services/team-repository.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../models/gender';
import { AgeRange, BozorgsalLabel, NojavanLabel, NonahalLabel } from '../../../shared/jam-shared/models/age-range';
import { ILabel } from 'src/app/shared/models/ILabel';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { SportField } from 'src/app/feature/jam/models/sport-field';
import { SportSubField } from 'src/app/feature/jam/models/sub-sport-field';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-team-page',
  templateUrl: './create-team-page.component.html',
  styleUrls: ['./create-team-page.component.scss']
})
export class CreateTeamPageComponent {
  fGroup: FormGroup<ICreateTeamPageForm>;
  teamconst: ILabel = { label: 'تیمی', value: SportSubField.Normal };
  accessAbleSubFields: ILabel[] = [];
  accessAbleAgeRange: ILabel[] = [];
  constructor (private readonly _teamRepository: TeamRepositoryService,
    private readonly _swalService: SwalService,
    private readonly _location:Location,
    _fb: FormBuilder) {
    this.fGroup = _fb.nonNullable.group<ICreateTeamPageForm>({
      name: _fb.nonNullable.control<string>('', [Validators.required]),
      field: _fb.nonNullable.control<SportField>(SportField.Football, [Validators.required]),
      subField: _fb.nonNullable.control<SportSubField>(SportSubField.Normal, [Validators.required]),
      gender: _fb.nonNullable.control<Gender>(null, [Validators.required]),
      coach: _fb.nonNullable.control<string>('', [Validators.required]),
      ageRange: _fb.nonNullable.control<AgeRange>(null, [Validators.required])
    });
    this.fGroup.controls.gender.valueChanges.subscribe(c => {
      this.detecetsubFields(c);
      this.detecetAgeRange(c);
    });
    this.fGroup.controls.field.valueChanges.subscribe((c) => {
      this.detecetsubFields(undefined, c);
      this.detecetAgeRange(undefined, c);
    });
    this.fGroup.controls.subField.valueChanges.subscribe(c => {
      this.detecetAgeRange(undefined, undefined, c);
    });
  }
  private detecetAgeRange(gender: Gender = this.fGroup.value.gender, field: SportField = this.fGroup.value.field, subField: SportSubField = this.fGroup.value.subField) {
    if (field == SportField.BasketBall)
      if (subField == SportSubField.X3)
        this.accessAbleAgeRange = [NojavanLabel, NonahalLabel];
      else
        this.accessAbleAgeRange = [BozorgsalLabel];
    else if (field == SportField.Football)
      if (gender == Gender.woman)
        this.accessAbleAgeRange = [BozorgsalLabel];
      else
        this.accessAbleAgeRange = [BozorgsalLabel, NojavanLabel, NonahalLabel];
    else if (field == SportField.Volleyball)
      this.accessAbleAgeRange = [BozorgsalLabel];
    this.fGroup.controls.ageRange.setValue(null);
  }
  private detecetsubFields(gender: Gender = this.fGroup.value.gender, field: SportField = this.fGroup.value.field) {
    let tempTeam = [this.teamconst];

    if (field == SportField.BasketBall)
      tempTeam = [...tempTeam, { label: 'سه نفره', value: SportSubField.X3 }];
    if (this.accessAbleSubFields.length != tempTeam.length)
      this.fGroup.controls.subField.setValue(null);
    this.accessAbleSubFields = tempTeam;
  }
  onSubmit() {
    const values = this.fGroup.value;
    this._teamRepository.create({
      name: values.name ?? '',
      ageRange: values.ageRange ?? null,
      field: values.field ?? null,
      subField: values.subField ?? null,
      coach: values.coach ?? '',
      gender: values.gender ?? null,
    }).subscribe(c => {
      this._swalService.successFullRegister();
      this._location.back();
    });
  }
}

export interface ICreateTeamPageForm {
  name: FormControl<string>;
  field: FormControl<SportField>;
  subField: FormControl<SportSubField>;
  ageRange: FormControl<AgeRange>;
  gender: FormControl<Gender>;
  coach: FormControl<string>;
}