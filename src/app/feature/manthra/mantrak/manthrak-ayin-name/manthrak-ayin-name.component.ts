import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { environment } from 'src/environments/environment';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-manthrak-ayin-name',
  templateUrl: './manthrak-ayin-name.component.html',
  styleUrls: ['./manthrak-ayin-name.component.scss']
})
export class ManthrakAyinNameComponent implements OnInit {
  isReadAll = !environment.production;
  isTimerEnded = !environment.production;
  private _timer: Subscription;
  constructor (private readonly _repository: ManthraReporsitoryService, private readonly _swal: SwalService, private readonly _location: Location) { }

  ngOnInit(): void {
    this._timer = timer(100 * 60).subscribe(c => this.isTimerEnded = true);
  }
  onScroll(event: { target: HTMLElement; }) {

    if (event.target.offsetHeight + event.target.scrollTop == event.target.scrollHeight) {
      this.isReadAll = true;
    }
  }
}
