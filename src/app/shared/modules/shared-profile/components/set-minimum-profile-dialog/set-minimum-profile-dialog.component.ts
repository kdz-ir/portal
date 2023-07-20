import { Component, inject, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import * as moment from "jalali-moment";
import { IGetProfile } from "src/app/core/model/profile-status-info";
import { SwalService } from "src/app/core/services/swal/swal.service";
import { CoreProfileService } from "src/app/core/services/user/core-profile.service";
import { cites } from "src/app/feature/setting/models/cites";
import { sextypes } from "src/app/feature/setting/models/sex-type";
import { IBaseProfileForm } from "../../models/IBaseProfileForm";
import { IMinimumProfileSaveInfo } from "../../models/IMinimumProfileSaveInfo";
import { ISetMinimumProfileDialog } from "../../models/ISetMinimumProfileDialog";

@Component({
  selector: 'app-set-minimum-profile-dialog',
  templateUrl: './set-minimum-profile-dialog.component.html',
  styleUrls: ['./set-minimum-profile-dialog.component.scss']
})
export class SetMinimumProfileDialogComponent {
  fGroup: FormGroup<IBaseProfileForm>;
  private readonly _profileService = inject(CoreProfileService);
  readonly cites = cites;
  readonly sexTypes = sextypes;
  profile: IGetProfile;
  constructor (@Inject(MAT_DIALOG_DATA) public readonly data: ISetMinimumProfileDialog,
    private readonly _swalService: SwalService,
    fb: FormBuilder,
    private readonly _dialogRef: MatDialogRef<SetMinimumProfileDialogComponent>) {
    this.profile = data.profile;
    this.fGroup = fb.group<IBaseProfileForm>({
      nationalCode: fb.control<string>(this.profile.nationalCode, [Validators.required]),
      name: fb.control<string>(this.profile.name, [Validators.required]),
      family: fb.control<string>(this.profile.family, [Validators.required]),
      sex: fb.control<number>(sextypes.find(s => s.lable == this.profile.sex)?.value ?? 0, [Validators.required]),
      birthday: fb.control<moment.Moment>(moment(this.profile.birthday, 'jYYYY/jMM/jDD'), [Validators.required]),
      IdCardPhoto: fb.control<string>(this.profile.IdCardPhoto, [Validators.required]),
      city: fb.control<number>(cites.find(cs => cs.label == this.profile.city)?.value ?? 0, [Validators.required]),
      personalPhoto: fb.control(this.profile.personalPhoto, [Validators.required])
    });
    // if (this.data.mode == ProgramFieldMode.needed)
    //   this.fGroup.controls.sportInsurance.addValidators(Validators.required);
  }
  onSaveProfile() {
    const rawValues = this.fGroup.value;
    const profileSave: IMinimumProfileSaveInfo = {
      nationalCode: rawValues.nationalCode,
      name: rawValues.name,
      family: rawValues.family,
      city: rawValues.city,
      birthday: rawValues.birthday.format('jYYYY/jMM/jDD'),
      IdCardPhoto: rawValues.IdCardPhoto,
      personalPhoto: rawValues.personalPhoto,
      sex: rawValues.sex
    };
    this._profileService.saveProfileWithNationalCode(profileSave).subscribe(c => {
      this._swalService.successFullSubmited();
      this._dialogRef.close(true);
    });
  }
}
