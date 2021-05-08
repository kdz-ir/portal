import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SwalService {
  public swal = Swal;
  async showErrorMessages(messages: string[]) {
    await this.showErrorMessage(messages.join('<br>'));
  }
  async showErrorMessage(message: string) {
    await this.swal.fire({
      title: 'خطا',
      html: message,
      icon: 'error',
      confirmButtonText: 'باشه'
    });
  }
}
