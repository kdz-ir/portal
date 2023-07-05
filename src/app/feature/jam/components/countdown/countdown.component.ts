import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { map, pairwise, switchMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent {

}
