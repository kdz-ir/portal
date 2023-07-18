import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { SetadRepositoryService } from '../../services/setad-repository.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnDestroy {
  totalAnalysis: { total: number; unChecked: number; };
  _unsubscribe: Subject<void> = new Subject<void>();
  constructor (private readonly _setadRepository: SetadRepositoryService) {
    _setadRepository.totalAnalysis.pipe(takeUntil(this._unsubscribe)).subscribe(c=>{
      this.totalAnalysis=c;
    })
  }
  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
