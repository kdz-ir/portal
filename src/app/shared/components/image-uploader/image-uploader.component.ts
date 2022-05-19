import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';
import { UploadService } from 'src/app/core/services/user/upload-serivce.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnChanges {

  src: string;
  @Input() maxSize = 100;
  @Input() accept: string;
  @Input() fbContorl: AbstractControl;
  @Input() label: string;
  @Input() lastImageid: string;
  @Input() fileType: string;
  @Input() eventType: string;
  isUploading = false;
  constructor (private _lightbox: Lightbox, private readonly _uploadService: UploadService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.src = environment.url + '/api/v1/files/show/' + this.lastImageid;
  }
  onSelectedFile(event:Event ) {
    const file = (<HTMLInputElement>event.target).files[0] as File;
    this.isUploading = true;
    this._uploadService.uploadFile(file, this.fileType, this.eventType).subscribe(c => {
      this.fbContorl.setValue(c.entity.fileId);
      this.isUploading = false;
      this.src = environment.url + '/api/v1/files/show/' + this.fbContorl.value;
    }, () => {
      this.isUploading = false;
    });

  }
  onOpenImage(event) {
    this._lightbox.open([{ src: (<HTMLImageElement>event.target).src, thumb: '' }]);
  }
}
