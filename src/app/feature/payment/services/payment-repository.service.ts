import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentRepositoryService {
  private readonly _url = environment.url + '/api/v1/payment';
  constructor (private readonly _httpClient: HttpClient) { }
  verify(authority: string, status: boolean) {
    return this._httpClient.post<{ refId: string, status: boolean; }>(this._url + '/verify', { authority, status });
  }
}
