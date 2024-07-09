import { Component, Input } from '@angular/core';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { SportInsuranceRepositoryService } from '../../../shared/jam-shared/services/sport-insurance-repository.service';

@Component({
  selector: 'app-sport-in-surence-check-button',
  templateUrl: './sport-in-surence-check-button.component.html',
  styleUrls: ['./sport-in-surence-check-button.component.scss']
})
export class SportInSurenceCheckButtonComponent {
  @Input() nationalCode: string;
  constructor (private readonly _swal: SwalService, private readonly _sportInsurceSerivce: SportInsuranceRepositoryService) {

  }
  onClick() {
    this._sportInsurceSerivce.check(this.nationalCode).subscribe(c => {
      this._swal.swal.fire(`اطلاعات دریافت شده برای کد ملی ${this.nationalCode}`, `${c.firstName},${c.lastName},${c.persianExpireDate}`);
    });
  }
}
