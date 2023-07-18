import { AfterViewInit, Component } from '@angular/core';
import { SetadRepositoryService } from '../../services/setad-repository.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {
  totalAnalysis: { total: number; unChecked: number; };
  
  constructor (private readonly _setadRepository: SetadRepositoryService) {
    _setadRepository.totalAnalysis.subscribe(c=>{
      this.totalAnalysis=c;
    })
  }
}
