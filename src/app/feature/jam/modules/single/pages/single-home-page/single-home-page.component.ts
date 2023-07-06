import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gender } from '../../../team/models/gender';
import { AgeRange } from '../../../shared/jam-shared/models/age-range';

@Component({
  selector: 'app-single-home-page',
  templateUrl: './single-home-page.component.html',
  styleUrls: ['./single-home-page.component.scss']
})
export class SingleHomePageComponent {
  gender: Gender;
  ageRange: AgeRange;
  /**
   *
   */
  constructor (private readonly _activatedRoute: ActivatedRoute) {
    this.gender = <Gender>_activatedRoute.snapshot.data['gender'];
    this.ageRange = <AgeRange>_activatedRoute.snapshot.data['ageRange'];
  }
}
