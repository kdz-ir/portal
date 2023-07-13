import { Location } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { environment } from 'src/environments/environment';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-ayiine-name',
  templateUrl: './ayiine-name.component.html',
  styleUrls: ['./ayiine-name.component.scss']
})
export class AyiineNameComponent implements OnInit, OnDestroy, AfterViewInit {
  isReadAll = !environment.production;
  isTimerEnded = !environment.production;
  private _timer: Subscription;
  constructor (private readonly _repository: ManthraReporsitoryService, private readonly _swal: SwalService, private readonly _location: Location) { }
  ngAfterViewInit(): void {
    this._repository.checkStepoFRegster().subscribe(c => {
      if (c.entity.step == 100)
        this._swal.swal.fire({
          title: 'آیا شما مطمئن هستید؟',
          text: "شما قبلا در گاتاشناسی ثبت نام کرده اید. زمانی که شما دوباره مراحل ثبت نام رو کامل کنید ثبت نام قبلی حذف و ثبت نام جدید جایگزین میگردد",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'بر میگردم',
          cancelButtonText:'ادامه میدهم'
        }).then((result) => {
          if (result.isConfirmed) {
            this._location.back();
          }
        });
    });
  }


  ngOnInit(): void {
    this._timer = timer(2 * 1000 * 60).subscribe(c => this.isTimerEnded = true);
  }
  onScroll(event: any) {
    const target = event.target as HTMLElement;
    if (target.offsetHeight + target.scrollTop == target.scrollHeight) {
      this.isReadAll = true;
    }
  }
  ngOnDestroy(): void {
    this._timer.unsubscribe();
  }
}
