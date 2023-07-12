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
  sportInsurance: SportInsurance;
  constructor (private readonly _singleRepository: SingleRepositoryService, private readonly _swalService: SwalService, private readonly _route: ActivatedRoute, private readonly _router: Router) {
  }
  ngOnInit(): void {
    this.sportInsurance = this._route.snapshot.data['sportInsurance'] as SportInsurance;
  }
}