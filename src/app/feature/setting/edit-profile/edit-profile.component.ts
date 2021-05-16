import { CdkVirtualForOf } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'jalali-moment';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { cites } from '../models/cites';
import { ProfileSaveInfo } from '../models/profile-info';
import { sextypes } from '../models/sex-type';
import { ProfileRepositoryService } from '../services/profile-reporsitory-service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements AfterViewInit {
  readonly cites = cites;
  readonly sexTypes = sextypes;
  loading = true;
  datemask = [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/];
  profileForm: FormGroup;
  constructor (readonly _fb: FormBuilder,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _swal: SwalService,
    private readonly _router: Router,
    private readonly _profileReporsitory: ProfileRepositoryService) {
    this.profileForm = _fb.group({
      name: [, [Validators.required]],
      lastName: [, [Validators.required]],
      sex: [0, [Validators.required]],
      fatherName: [, [Validators.required]],
      address: [, [Validators.required]],
      postalCode: [, [Validators.required]],
      city: [, [Validators.required]],
      birthday: [, [Validators.required]],
      phone: [, [Validators.required]],
      IdCardPhoto: [, [Validators.required]],
      personalPhoto: [, [Validators.required]]
    });
  }
  onSubmit(): void {
    this.loading = true;
    this.profileForm.disable();
    const formValus = this.profileForm.value;
    const savedProfile: ProfileSaveInfo = {
      name: formValus.name,
      address: formValus.address,
      birthday: moment(formValus.birthday).format('jYYYY/jMM/jDD'),
      city: formValus.city,
      family: formValus.lastName,
      fatherName: formValus.fatherName,
      phone: formValus.phone,
      sex: formValus.sex,
      postalCode: formValus.postalCode,
      IdCardPhoto: formValus.IdCardPhoto,
      personalPhoto: formValus.personalPhoto
    };
    this._profileReporsitory.updateProfile(savedProfile).subscribe(async () => {
      this.loading = false;
      this.profileForm.enable();
      await this._swal.swal.fire({
        title: 'پروفایل شما ثبت شد.',
        text: 'در مرحله بعد کارت زرتشتگری را آپلود کنید.',
        icon: 'success'
      });
      this._router.navigate(['/Settings/zoroastrianCard']);
    }, () => {
      this.loading = false;
      this.profileForm.enable();
    });
  }
  ngAfterViewInit(): void {
    this._profileReporsitory.getProfileData().subscribe(c => {
      this.loading = false;
      this.profileForm.setValue({
        name: c.entity.name,
        lastName: c.entity.family,
        sex: sextypes.find(s => s.lable == c.entity.sex)?.value ?? 0,
        fatherName: c.entity.fatherName,
        address: c.entity.address,
        city: cites.find(cs => cs.lable == c.entity.city)?.value ?? 0,
        birthday: moment(c.entity.birthday, 'jYYYY/jMM/jDD'),
        phone: c.entity.phone,
        postalCode: c.entity.postalCode,
        IdCardPhoto: c.entity?.IdCardPhoto ?? '',
        personalPhoto: c.entity.personalPhoto ?? ''
      });

    });
  }

}
