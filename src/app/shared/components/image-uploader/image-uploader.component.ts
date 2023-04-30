import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { isEmpty, isNull } from 'lodash-es';
import { Lightbox } from 'ngx-lightbox';
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
  @Input() maxSize = 100;
  @Input() accept: string;
  @Input() lastImageid: string;
  @Input() fileType: string;
  @Input() eventType: string;
  isUploading = false;
  onChange = (imageAddress: string) => { };

  onTouched = () => { };

  touched = false;

  disabled = false;

  constructor (private readonly _lightbox: Lightbox, private readonly _uploadService: UploadService) { }
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
    this.isUploading = true;
    this._uploadService.uploadFile(file, this.fileType, this.eventType).subscribe(c => {
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
