import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {
  profileStatus = this._coreProfileService.checkProfileStatus();
  constructor (private readonly _coreProfileService: CoreProfileService) { }
  ngAfterViewInit(): void {
  }


}
