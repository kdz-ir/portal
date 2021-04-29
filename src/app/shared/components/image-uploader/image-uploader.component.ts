import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  constructor (private readonly _httpClient: HttpClient) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.src = environment.url + '/api/v1/files/show/' + this.lastImageid;
  }
  onSelectedFile(event) {
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
