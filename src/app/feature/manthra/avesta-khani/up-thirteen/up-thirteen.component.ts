import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgeType } from 'src/app/core/model/age-type-enum';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-up-thirteen',
  templateUrl: './up-thirteen.component.html',
  styleUrls: ['./up-thirteen.component.scss']
})
export class UpThirteenComponent implements OnInit {
  readonly ageTypeEnum = AgeType;
  avestaKhaniForm: FormGroup;
  ageRange = 0;
  constructor (private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _swal: SwalService, private readonly _repository: ManthraReporsitoryService) {
    this.avestaKhaniForm = _fb.group({
      isOrdooHamayesh: [false],
      learnPC: [false],
      ravanShenasi: [false],
      amazingFact: [false],
      other: [],
      digitalMarket: [false],
      startup: [false],
      bitcoin: [false],
      research: [false],
      rade: [, Validators.required]
    });
  }
  ngOnInit(): void {
    this._repository.getAgeRange().subscribe(c => {
      this.ageRange = c.entity.ageType;

    });
  }

  onSubmit() {
    const values = this.avestaKhaniForm.value;

    this._repository.submitAvestaKhaniForms({
      rade: +values.rade,
      isOrdooHamayesh: values.isOrdooHamayesh,
      ageType: this.ageRange,
      step: 100,
      state: 'end',
      oordoHamayesh: {
        learnPC: values.learnPC,
        ravanShenasi: values.ravanShenasi,
        amazingFact: values.amazingFact,
        other: values.other,
        digitalMarket: values.digitalMarket,
        startup: values.startup,
        bitcoin: values.bitcoin,
        research: values.research
      }
    }).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
