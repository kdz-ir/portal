import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-mantrk-participat-avesta-khani',
  templateUrl: './mantrk-participat-avesta-khani.component.html',
  styleUrls: ['./mantrk-participat-avesta-khani.component.scss']
})
export class MantrkParticipatAvestaKhaniComponent {
  sectionOfManthra = sectionOfManthra;
  radeOfAvestaKhani = radeOfAvestaKhani;
  participatAvastaForm: FormGroup;
  get isContainMAvestaKhani(): boolean {
    return (<number>this.participatAvastaForm.value.sectionOfManthra) == 2 || (<number>this.participatAvastaForm.value.sectionOfManthra) == 0;
  }
  constructor (private readonly _fb: FormBuilder, 
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _repository: ManthraReporsitoryService, private readonly _swal: SwalService, private readonly _router: Router) {
    this.participatAvastaForm = _fb.group({
      numberofmanthras: [, [Validators.required]],
      goalForOld: [, [Validators.required]],
      sectionOfManthra: [, [Validators.required]],
      radeOfAvestaKhani: [],
      isAcceptInfinal: [],
      finalPlace: [],
      isRegisterdLastMantrak: [],
      likeInLastManthrak: [0],
      likedLastManthrak:[]
    });
  }
  onSubmit() {
    const formValue = this.participatAvastaForm.value;
    const data = {
      numberofmanthras: formValue.numberofmanthras,
      goalForOld: formValue.goalForOld,
      sectionOfManthra: formValue.sectionOfManthra,
      radeOfAvestaKhani: formValue.radeOfAvestaKhani,
      isAcceptInfinal: formValue.isAcceptInfinal,
      finalPlace: formValue.finalPlace,
      isRegisterdLastMantrak: formValue.isRegisterdLastMantrak,
      likeInLastManthrak: formValue.likeInLastManthrak,
      likedLastManthrak: formValue.likedLastManthrak,
      step: 100,
      status: 'end'
    };
    this._repository.mantrakRegister(data).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);

    });
  }
}
export const sectionOfManthra = [
  { value: 0, label: '?????? ???????????????????? ?? ????????????' },
  { value: 1, label: '?????? ????????????' },
  { value: 2, label: '?????? ????????????????????' },
];
export const radeOfAvestaKhani = [
  { value: 0, label: '???? ?????????????? ?????? ???? ??????' },
  { value: 1, label: '???? ?????????????? ???? ???? ???? ??????' },
  { value: 2, label: '???? ?????????????? ??????????' },
  { value: 3, label: '????????????????' },
  { value: 4, label: '??????????-??????????????????' },
  { value: 5, label: '???? ????????' },

];