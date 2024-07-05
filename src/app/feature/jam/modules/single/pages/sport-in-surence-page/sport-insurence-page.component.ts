import { Component, OnInit } from '@angular/core';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISportInsurance } from '../../../shared/jam-shared/models/isport-insurance';
import { SportInsuranceRepositoryService } from '../../../shared/jam-shared/services/sport-insurance-repository.service';
@Component({
  selector: 'app-sport-insurence-page',
  templateUrl: './sport-insurence-page.component.html',
  styleUrls: ['./sport-insurence-page.component.scss']
})
export class SportInsurencePageComponent implements OnInit {
  sportInsurance: ISportInsurance;
  isLoading = false;
  constructor (private readonly _route: ActivatedRoute, private readonly _sportInsuranceRepo: SportInsuranceRepositoryService) {
  }
  ngOnInit(): void {
    this.sportInsurance = this._route.snapshot.data['sportInsurance'] as ISportInsurance;
  }
  onRefreshClicked() {
    this.isLoading = true;
    this._sportInsuranceRepo.sportInsurance.subscribe(c => {
      this.sportInsurance = c;
      this.isLoading = false;
    });
  }
}