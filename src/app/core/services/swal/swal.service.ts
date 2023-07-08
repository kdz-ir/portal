import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SwalService {
  public swal = Swal;
  /**
   *
   */
  constructor () {
    this.swal = this.swal.mixin({
      confirmButtonText: 'باشه',
      cancelButtonText: 'بستن'
    });
  }
  showWarnMessage() {
    return this.swal.fire({
      title: 'این کار شما برگشت ناپذیر است.',
      icon: 'warning',
      confirmButtonText: 'ادامه میدم.',
      showCancelButton: true
    });
  }
  async showErrorMessages(messages: string[]) {
    await this.showErrorMessage(messages.join('<br>'));
  }
  async showErrorMessage(message: string) {
    await this.swal.fire({
      title: 'خطا',
      html: message,
      icon: 'error',
      confirmButtonText: 'متوجه شدم'
    });
  }
  async successFullRegister() {
    await this.swal.fire({
      title: 'ثبت نام شما با موفقیت انجام شد.',
      text: 'منتظر دریافت پیامک باشید در صورت عدم دریافت دوباره تلاش کنید.',
      icon: 'success',
      confirmButtonText: 'متوجه شدم'
    });
  }
  async accessRegister() {
    await this.swal.fire({
      title: 'شما مجاز به ثبت نام نیستید!!.',
      icon: 'error',
      confirmButtonText: 'قبول دارم'
    });
  }
  async successFullSubmited() {
    await this.swal.fire({
      icon: 'success',
      text: 'اطلاعات جدید ثبت شد.',
      confirmButtonText: 'بستن'
    });
  }
}
