import { Component, OnInit } from '@angular/core';
import { SingleRepositoryService } from '../../services/single-repository.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISportInsurance } from '../../../shared/jam-shared/models/isport-insurance';
@Component({
  selector: 'app-sport-insurence-page',
  templateUrl: './sport-insurence-page.component.html',
  styleUrls: ['./sport-insurence-page.component.scss']
})
export class SportInsurencePageComponent implements OnInit {
  sportInsurance: ISportInsurance;
  constructor (private readonly _singleRepository: SingleRepositoryService, private readonly _swalService: SwalService, private readonly _route: ActivatedRoute, private readonly _router: Router) {
  }
  ngOnInit(): void {
    this.sportInsurance = this._route.snapshot.data['sportInsurance'] as ISportInsurance;
  }
}