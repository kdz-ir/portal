import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { SingleRepositoryService } from '../../services/single-repository.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SportInsurance } from '../../models/CheckSportInsuranceStatus';
@Component({
  selector: 'app-sport-insurence-page',
  templateUrl: './sport-insurence-page.component.html',
  styleUrls: ['./sport-insurence-page.component.scss']
})
export class SportInsurencePageComponent implements OnInit {
  fGroup: FormGroup<ISetSportInsurance>;
  status: boolean;
  sportInsurance: SportInsurance;
  constructor (private readonly _singleRepository: SingleRepositoryService, fb: FormBuilder, private readonly _swalService: SwalService, private readonly _route: ActivatedRoute, private readonly _router: Router) {
    this.fGroup = fb.group<ISetSportInsurance>({
      sportInsurance: fb.control<string>('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.sportInsurance = this._route.snapshot.data['sportInsurance'] as SportInsurance;
    this.status = this.sportInsurance.status;
    if (this.sportInsurance.status)
      this.fGroup.controls.sportInsurance.setValue(this.sportInsurance.entity);
  }
  onSubmit() {
    this._singleRepository.setSportInsurance({ sportInsurance: this.fGroup.value?.sportInsurance ?? '' }).subscribe(async () => {
      await this._swalService.successFullSubmited();
      this._router.navigate(['..']);
    });
  }
}
export interface ISetSportInsurance {
  sportInsurance: FormControl<string>;
}
