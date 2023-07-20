import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gataHaRegisterFilledEntity } from 'src/app/core/model/gata-ha-register-filled';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
import { gataHaRegisterFiled } from '../models/gata-ha-register-field-enum';
import { ManthraReporsitoryService } from '../services/manthra-reporsitory.service';

@Component({
  selector: 'app-manthta-home',
  templateUrl: './manthta-home.component.html',
  styleUrls: ['./manthta-home.component.scss']
})
export class ManthtaHomeComponent implements OnInit, AfterViewInit {
  profileStatus = this._coreProfileService.checkProfileStatus();
  haveAgeRange = this.manthraReporsitoryService.gataHaHaveReqiuredAge();
  registerFiled: gataHaRegisterFilledEntity;
  isLoading = true;
  avestaAgeRange: number;
  constructor (private readonly _coreProfileService: CoreProfileService, private readonly _swal: SwalService, public readonly manthraReporsitoryService: ManthraReporsitoryService) { }
  ngAfterViewInit(): void {
    this.manthraReporsitoryService.getUserRegisteredFilled.subscribe(c => {
      this.registerFiled = c.entity;
      this.isLoading = false;
    });
    this.manthraReporsitoryService.avestaGetAgeRange.subscribe(c=>{
      this.avestaAgeRange=c.entity.ageType;
    });
  }

  ngOnInit(): void {

  }
  onSeeRegisters() {
    const regs = this.registerFiled.registerFiled.map(c => {
      switch (c) {
        case gataHaRegisterFiled.projectBase:
          return 'پروژه محور';
        case gataHaRegisterFiled.Asli:
          return 'آزاد بخش اصلی';
        case gataHaRegisterFiled.Janbi:
          return 'آزاد بخش جنبی';
      }
    });
    this._swal.swal.fire({
      title: 'کاربر گرامی؛ شما در این بخش‌ها ثبت ‌نام کرده‌اید.',
      html: regs.join('<br>'),
      icon: 'info',
      confirmButtonText: 'بستن'
    });
  }
}
