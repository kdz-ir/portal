import { Injectable } from '@angular/core';
import * as moment from 'jalali-moment';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class TimerService {
  private timeCount = 0;
  private readonly _offNotitfication = new Subject<void>();
  constructor () { }
  start(minents: number) {
    this.timeCount = minents * 60;
    timer(200, 1000).pipe(takeUntil(this._offNotitfication)).subscribe(() => {
      this.timeCount--;
    });
  }
  stop() {
    this._offNotitfication.next();
    this.timeCount = 0;
  }
  pause() {
    this._offNotitfication.next();
  }
  public get timer(): string {
    return moment(this.timeCount * 1000).utc().format('mm:ss');
  }
}
