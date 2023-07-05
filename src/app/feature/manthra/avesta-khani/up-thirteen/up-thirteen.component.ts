import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgeType } from 'src/app/core/model/age-type-enum';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';
import { ILabel } from "src/app/shared/models/ILabel";
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-up-thirteen',
  templateUrl: './up-thirteen.component.html',
  styleUrls: ['./up-thirteen.component.scss']
})
export class UpThirteenComponent implements OnInit {
  readonly ageTypeEnum = AgeType;
  readonly avestaKhaniCategories = avestaKhaniCategoriesList;
  avestaKhaniForm: UntypedFormGroup;
  ageRange = 0;
  constructor (private readonly _fb: UntypedFormBuilder,
    private readonly _router: Router,
    private readonly _swal: SwalService, private readonly _repository: ManthraReporsitoryService) {
    this.avestaKhaniForm = _fb.group({
      ordooHamaysh: [],
      category: [, [Validators.required]],
      rade: [],
      iiarNationalCodeAsli0: [],
      groupNumber: [],
      groupNumberSingle:[]
    });
  }
  ngOnInit(): void {
    this._repository.getAgeRange().subscribe(c => {
      this.ageRange = c.entity.ageType;

    });
  }
  onSelectChange(data: MatSelectChange) {
    const selectedItem = <Array<number>>data.value;
    if (selectedItem.includes(0))
      this.avestaKhaniForm.controls.rade.addValidators([Validators.required]);
    else {
      this.avestaKhaniForm.controls.rade.clearValidators();
      this.avestaKhaniForm.controls.rade.setValue(null);
    }
  }
  onblurInput(control: AbstractControl) {
    if (control.valid && control.value != null)
      this._repository.canPersionRegister(control.value).subscribe(c => {
        console.log(c);

      }, () => {
        control.setValue('');
      });
  }
  onSubmit() {
    const values = this.avestaKhaniForm.value;
    this._repository.submitAvestaKhaniForms({
      rade: +values.rade,
      isOrdooHamayesh: values.ordooHamaysh?.isOrdooHamayesh ?? false,
      ageType: this.ageRange,
      category: values.category,
      iiarNationalCodeAsli0: values.iiarNationalCodeAsli0,
      groupNumber: values.groupNumber,
      groupNumberSingle: values.groupNumberSingle,
      step: 100,
      state: 'end',
      oordoHamayesh: {
        goftogo: values.ordooHamaysh?.goftogo,
        sweets: values.ordooHamaysh?.sweets,
        boors: values.ordooHamaysh?.boors,
        other: values.ordooHamaysh?.other,
        digital: values.ordooHamaysh?.digital,
        advidio: values.ordooHamaysh?.advidio,
        brand: values.ordooHamaysh?.brand,
        copyright: values.ordooHamaysh?.copyright,
        instageram: values.ordooHamaysh?.instageram,
        mozkerat: values.ordooHamaysh?.mozkerat,
        elmi: values.ordooHamaysh?.elmi,
        sport: values.ordooHamaysh?.sport,
        art: values.ordooHamaysh?.art,
        visit: values.ordooHamaysh?.visit,
      }
    }).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
export const avestaKhaniCategoriesList: ILabel[] = [{
  label: 'رو خوانی',
  value: 0
},
{
  label: 'از بر خوانی',
  value: 1
}, {
  label: 'از بر گروهی',
  value: 2
}];