import { AfterViewInit, Component, ViewEncapsulation, inject } from '@angular/core';
import { JamRepositoryService } from '../../services/jam-repository.service';
import { Observable } from 'rxjs';
import { IWordPressPage } from '../../models/iword-press-page';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryPageComponent implements AfterViewInit {
  history: IWordPressPage;
  isLoading=true;
  constructor (private readonly jamRepository: JamRepositoryService) {
    
  }
  ngAfterViewInit(): void {
    this.jamRepository.history.subscribe(c=>{
      this.history=c;
      this.isLoading=false;
    })
  }

}
