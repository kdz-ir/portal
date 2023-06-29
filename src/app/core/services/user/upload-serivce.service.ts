import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private readonly _url = environment.url + '/api/v1/files/upload';
  constructor (private readonly _httpClient: HttpClient) { }
  uploadFile(file: File, fileType: string, eventType: string, nationalCode: string) {
    const fb = new FormData();
    fb.append('file', file);
    fb.append('fileType', fileType);
    fb.append('eventType', eventType);
    fb.append('nationalCode', nationalCode);
    return this._httpClient.post<UploadFileInfo>(this._url, fb);
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
