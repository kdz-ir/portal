import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { isEmpty, isNil, isNull } from 'lodash-es';
import { ProgramFieldMode } from 'src/app/core/model/ProgramFieldMode';
import { ProgramType } from 'src/app/core/model/ProgramType';
import { IGetProfileRoot } from 'src/app/core/model/profile-status-info';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
import { SetMinimumProfileDialogComponent } from 'src/app/shared/modules/shared-profile/components/set-minimum-profile-dialog/set-minimum-profile-dialog.component';
import { SportInsuranceRepositoryService } from '../../services/sport-insurance-repository.service';
import { ISportInsurance } from '../../models/isport-insurance';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-check-input',
  templateUrl: './profile-check-input.component.html',
  styleUrls: ['./profile-check-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ProfileCheckInputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ProfileCheckInputComponent
    }
  ]

})
export class ProfileCheckInputComponent implements ControlValueAccessor, Validator {
  onTouched = () => { };
  profile: IGetProfileRoot;
  fControl: FormControl<string>;
  @Input() profileMode: ProgramFieldMode;
  touched = false;

  isDisabled = false;
  sportInsurance: ISportInsurance;

  constructor (private readonly _profileService: CoreProfileService, private _snackBar: MatSnackBar, private readonly _dialog: MatDialog, fb: FormBuilder, private readonly _sportInsuranceRepository: SportInsuranceRepositoryService) {
    this.fControl = fb.nonNullable.control<string>('', [ValidatorCoreService.nationalCodeChecker]);
    this.fControl.valueChanges.subscribe(() => {
      this.markAsTouched();
    });

  }
  writeValue(obj: string): void {
    this.fControl.setValue(obj);

  }
  registerOnChange(fn: any): void {
    this.fControl.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  validate(control: AbstractControl<any, any>): ValidationErrors {
    if (this.profileMode != ProgramFieldMode.base && (isNil(this.sportInsurance) || !this.sportInsurance.membershipIsExpired))
      return { sportInsurace: true };
    if (control.hasValidator(Validators.required)) {
      if (isNull(this.fControl.value))
        return { required: true };
    }
    if (this.profile?.isCompleted == false || isNil(this.profile)) {
      return { inCompletedProfile: true };
    }
    return null;

  }
  private markAsTouched() {
    if (this.touched) {
      return;
    }
    this.onTouched();
    this.touched = true;
  }

  onEditProfileClick() {
    const dialog = this._dialog.open(SetMinimumProfileDialogComponent, { data: { profile: this.profile.profile, mode: this.profileMode }, disableClose: true });
    dialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.onSearchProfile();
      }
    });
  }
  onSearchProfile() {
    this._profileService.getProfileWithNationalCode(this.fControl.value, ProgramType.jam, this.profileMode).subscribe(c => {
      this.profile = c;
      this.fControl.updateValueAndValidity();
    });
    if (this.profileMode != ProgramFieldMode.base)
      this.onRefreshSportInsurance();
  }
  onRefreshSportInsurance() {
    this._sportInsuranceRepository.check(this.fControl.value).subscribe(t => {
      this.sportInsurance = t;
      this.fControl.updateValueAndValidity();
      if (!t.membershipIsExpired) {
        const message = this._snackBar.open('بیمه ورزشی بازیکن مورد نظر اعتبار ندارد. لطفا اعتبار بیمه را تمدید کنید.', 'تمدید');
        message.onAction().subscribe(() => {
          window.open('http://ifsm.ir', '_blank');
        });
      }
    });
  }
}
