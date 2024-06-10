import { Component } from '@angular/core';
import { JamRepositoryService } from 'src/app/feature/jam/services/jam-repository.service';

@Component({
  selector: 'app-setad-report',
  templateUrl: './setad-report.component.html',
  styleUrls: ['./setad-report.component.scss']
})
export class SetadReportComponent {
  loading = false

  constructor(private readonly _JamRepository: JamRepositoryService) {}

report(fieldId:string){
  
  this._JamRepository.preRegisterReport().subscribe(() => {



    this.loading = false
  }, () => {
    this.loading = false;
  });
}
  
}
