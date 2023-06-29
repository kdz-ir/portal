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
  constructor (@Inject(MAT_DIALOG_DATA) public readonly data: IGetProfile,
    private readonly _swalService: SwalService,
    fb: FormBuilder,
    private readonly _dialogRef: MatDialogRef<SetMinimumProfileDialogComponent>) {
    this.fGroup = fb.group<IBaseProfileForm>({
      nationalCode: fb.control<string>(data.nationalCode, [Validators.required]),
      name: fb.control<string>(data.name, [Validators.required]),
      family: fb.control<string>(data.family, [Validators.required]),
      sex: fb.control<number>(sextypes.find(s => s.lable == data.sex)?.value ?? 0, [Validators.required]),
      birthday: fb.control<moment.Moment>(moment(data.birthday, 'jYYYY/jMM/jDD'), [Validators.required]),
      IdCardPhoto: fb.control<string>(data.idCardPhoto, [Validators.required]),
      city: fb.control<number>(cites.find(cs => cs.label == data.city)?.value ?? 0, [Validators.required]),
      sportInsurance: fb.control(data.sportInsurance, [Validators.required]),
      personalPhoto: fb.control(data.personalPhoto, [Validators.required])
    });
  }
  onSaveProfile() {
    const rawValues = this.fGroup.value;
    const profileSave: IMinimumProfileSaveInfo = {
      nationalCode: rawValues.nationalCode,
      sportInsurance: rawValues.sportInsurance,
      name: rawValues.name,
      family: rawValues.family,
      city:rawValues.city,
      birthday:rawValues.birthday.format('jYYYY/jMM/jDD'),
      IdCardPhoto:rawValues.IdCardPhoto,
      personalPhoto:rawValues.personalPhoto,
      sex:rawValues.sex
    };
    this._profileService.saveProfileWithNationalCode(profileSave).subscribe(c => {
      this._swalService.successFullSubmited();
      this._dialogRef.close(true);
    });
  }
}
