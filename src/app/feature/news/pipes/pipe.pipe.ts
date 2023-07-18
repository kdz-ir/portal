import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
  transform(value: Date|string, ...args: unknown[]): unknown {
    return moment(value).locale('fa').fromNow();
  }

}
