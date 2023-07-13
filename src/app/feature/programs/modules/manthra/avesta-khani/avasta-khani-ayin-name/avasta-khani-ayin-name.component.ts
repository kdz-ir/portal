import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { environment } from 'src/environments/environment';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-avasta-khani-ayin-name',
  templateUrl: './avasta-khani-ayin-name.component.html',
  styleUrls: ['./avasta-khani-ayin-name.component.scss']
})
export class AvastaKhaniAyinNameComponent implements OnInit {
  avestaAgeRange: number;
  isLoading=true;
  constructor (private readonly _repository: ManthraReporsitoryService, private readonly _swal: SwalService, private readonly _location: Location) { }

  ngOnInit(): void {
    this._repository.avestaGetAgeRange.subscribe(c => {
      this.avestaAgeRange = c.entity.ageType;
      this.isLoading=false;
    });
  }

}
