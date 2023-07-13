import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-manthrak-ayin-name',
  templateUrl: './manthrak-ayin-name.component.html',
  styleUrls: ['./manthrak-ayin-name.component.scss']
})
export class ManthrakAyinNameComponent {

  constructor (private readonly _repository: ManthraReporsitoryService, private readonly _swal: SwalService, private readonly _location: Location) { }
}
