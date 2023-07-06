import { Component } from '@angular/core';
import * as moment from 'jalali-moment';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent {
  config: CountdownConfig = {
    leftTime: (new Date(2023, 7, 6, 18, 30).getTime() - (new Date().getTime())) / 1000,
    format: 'DDD HH:mm:ss',
    formatDate: ({ date, formatStr }) => {
      return moment.unix(date / 1000).utc().format(formatStr);
    },
  };
}
