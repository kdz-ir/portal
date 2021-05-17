import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gataHaRegisterFilledEntity } from 'src/app/core/model/gata-ha-register-filled';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
import { gataHaRegisterFiled } from '../../manthra/models/gata-ha-register-field-enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {
  profileStatus = this._coreProfileService.checkProfileStatus();
  registerFiled: gataHaRegisterFilledEntity;
  constructor (private readonly _coreProfileService: CoreProfileService, private readonly _swal: SwalService) { }
  ngAfterViewInit(): void {
    this._coreProfileService.getUserRegisteredFilled().subscribe(c => {
      this.registerFiled = c.entity;
    });
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
      title: 'ثبت نام در این بخش ها ثبت نام کرده اید.',
      html: regs.join('<br>'),
      icon:'info',
      confirmButtonText:'بستن'
    });
  }

}
