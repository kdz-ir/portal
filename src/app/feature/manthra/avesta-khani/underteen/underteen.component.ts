import { Component, OnInit } from '@angular/core';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-underteen',
  templateUrl: './underteen.component.html',
  styleUrls: ['./underteen.component.scss']
})
export class UnderteenComponent implements OnInit {
  agerange: number;
  constructor (private readonly _repository: ManthraReporsitoryService, private readonly _swal: SwalService) { }

  ngOnInit(): void {
    this._repository.avestaGetAgeRange.subscribe(c => this.agerange = c.entity
      .ageType);
  }
  onClickToSubmut() {
    this._repository.submitAvestaKhaniForms({
      state: 'end',
      ageType: this.agerange
    }).subscribe(c => {
      this._swal.successFullRegister();
    });
  }
}
