import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnChanges {
  private readonly _url = environment.url + '/api/v1/files/upload';
  src: string;
  @Input() maxSize = 100;
  @Input() accept: string;
  @Input() fbContorl: FormControl;
  @Input() label: string;
  @Input() lastImageid: string;
  @Input() fileType: string;
  @Input() eventType: string;
  constructor (private readonly _httpClient: HttpClient, private _lightbox: Lightbox) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.src = environment.url + '/api/v1/files/show/' + this.lastImageid;
  }
  onSelectedFile(event: { target: HTMLInputElement; }) {
    const file = event.target.files[0] as File;
    const fb = new FormData();
    fb.append('file', file);
    fb.append('fileType', this.fileType);
    fb.append('eventType', this.eventType);
    this._httpClient.post<UploadFileInfo>(this._url, fb).subscribe(c => {
      this.fbContorl.setValue(c.entity.fileId);
      this.src = environment.url + '/api/v1/files/show/' + this.fbContorl.value;
    });
  }
  onOpenImage(event: { target: HTMLImageElement; }) {
    this._lightbox.open([{ src: event.target.src, thumb: '' }]);
  }
}
export interface UploadFileInfo {
  status: boolean;
  message: string;
  entity: UploadFileEntity;
}

export interface UploadFileEntity {
  fileId: string;
  filePath: string;
}
