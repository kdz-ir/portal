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
      algoritm: [false],
      narmafzar: [false],
      grim: [false],
      other: [],
      isLikeAttend:[false],
      bracelets: [false],
      narration: [false],
      caricature: [false],
      origami: [false],
      helps: [false],
      experiments: [false],
      iran: [false],
      yoga: [false],
      stories: [false],
      food: [false],
      arts: [false],
      ravanShenasi: [false],
      resumeWriting: [false],
      emotionalIntelligenceWorkshop: [false],
      technologyWorkshop: [false],
      contentProduction: [false],
      principlesOfPhotoarts: [false],graphy: [false],
      bodyLanguage: [false],
      mindControlWorkshop: [false],
      linkedin: [false],
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
      isLikeAttend: values.isLikeAttend,
      oordoHamayesh: {
        algoritm: values.algoritm,
        narmafzar: values.narmafzar,
        other: values.other,
        grim: values.grim,
        bracelets: values.Bracelets,
        narration: values.narration,
        origami: values.origami,
        helps: values.helps,
        experiments: values.Experiments,
        iran: values.iran,
        arts: values.arts,
        yoga: values.yoga,
        stories: values.stories,
        food: values.food,
        ravanShenasi: values.ravanShenasi,
        resumeWriting: values.resumeWriting,
        emotionalIntelligenceWorkshop: values.emotionalIntelligenceWorkshop,
        technologyWorkshop: values.technologyWorkshop,
        contentProduction: values.contentProduction,
        principlesOfPhotoarts: values.principlesOfPhotoarts,
        bodyLanguage: values.bodyLanguage,
        mindControlWorkshop: values.mindControlWorkshop,
        linkedin: values.linkedin,
        caricature: values.Caricature
      }
    }).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
