import { Component } from '@angular/core';
import { SingleRepositoryService } from '../../services/single-repository.service';

@Component({
  selector: 'app-sport-insurence-page',
  templateUrl: './sport-insurence-page.component.html',
  styleUrls: ['./sport-insurence-page.component.scss']
})
export class SportInsurencePageComponent {
  readonly sportInsurenceStatus = this._singleRepository.SportInsurenceStatus;
  constructor (private readonly _singleRepository: SingleRepositoryService) {

  }
}
