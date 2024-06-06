import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JamRepositoryService } from '../../services/jam-repository.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProfileForm } from 'src/app/feature/setting/edit-profile/IProfileForm';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss']
})
export class RegulationsComponent {
  fieldId!: string;
  acceptedRules: boolean = false;
  loading = false
  regulationsForm: FormGroup<{ fieldId: FormControl<string> }>;
  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly _JamRepository: JamRepositoryService, private readonly _swal: SwalService, readonly _fb: FormBuilder) {


    this.regulationsForm = _fb.group<{ fieldId: FormControl<string> }>({
      fieldId: _fb.nonNullable.control('', [Validators.required]),
    });

    this.route.params.subscribe((params) => {
      this.fieldId = params['id'];
    })

  }


  onCheckboxChange(event: any) {
    this.acceptedRules = event.checked;

  }

  onSubmit(): void {
    this.loading = true
    const fieldId = {
      field: Number(this.fieldId)
    };
    this._JamRepository.PostSportFielId(fieldId).subscribe(() => {
      this.loading = false
      this._swal.swal.fire({
        title: 'پیش ثبت‌‌نام شما با موفقیت انجام شد.',
        icon: 'success',
        confirmButtonText: 'بستن'
      });
    }, () => {
      this.loading = false;
    });
  }

}
