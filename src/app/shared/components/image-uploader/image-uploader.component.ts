import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { inject } from '@angular/core/testing';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { isEmpty, isNull } from 'lodash-es';
import { Lightbox } from 'ngx-lightbox';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { UploadService } from 'src/app/core/services/user/upload-serivce.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ImageUploaderComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ImageUploaderComponent
    }
  ]
})
export class ImageUploaderComponent implements ControlValueAccessor, Validator, OnChanges {
  src: string;
  @Input() maxSize = 300;
  @Input() accept: string;
  @Input() lastImageid: string;
  @Input() fileType: string;
  @Input() eventType: string;
  @Input() nationalCode: string = this._authSerivce.getTokenItem('nationalCode');
  isUploading = false;
  onChange = (imageAddress: string) => { };
  onTouched = () => { };

  touched = false;

  disabled = false;

  constructor (private readonly _lightbox: Lightbox,
    private readonly _uploadService: UploadService, private readonly _swalService: SwalService,
    private readonly _authSerivce: AuthenticationService) { }
  writeValue(obj: string): void {
    if (isEmpty(obj))
      return;
    this.src = environment.url + '/api/v1/files/show/' + obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  validate(control: AbstractControl<any, any>): ValidationErrors {
    if (control.hasValidator(Validators.required)) {
      if (isNull(this.src))
        return { required: true };
    }
    return null;

  }
  private markAsTouched() {
    if (this.touched) {
      return;
    }
    this.onTouched();
    this.touched = true;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.src = environment.url + '/api/v1/files/show/' + this.lastImageid;
  }
  onSelectedFile(event: Event) {
    this.markAsTouched();
    const file = (<HTMLInputElement>event.target).files[0] as File;
    if (this.maxSize <= (file.size / 1024)) {
      this._swalService.showErrorMessage('حجم فایل بیشتر از حد مجاز می باشد.');
      return;
    }
    this.isUploading = true;
    this._uploadService.uploadFile(file, this.fileType, this.eventType, this.nationalCode).subscribe(c => {
      this.onChange(c.entity.fileId);
      this.isUploading = false;
      this.src = c.entity.filePath;
    }, () => {
      this.isUploading = false;
    });

  }
  onOpenImage(event) {
    this._lightbox.open([{ src: (<HTMLImageElement>event.target).src, thumb: '' }]);
  }

}
