import { Component, OnInit } from '@angular/core';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-underteen',
  templateUrl: './underteen.component.html',
  styleUrls: ['./underteen.component.scss']
})
export class UnderteenComponent implements OnInit {

  constructor (private readonly _repository: ManthraReporsitoryService) { }

  ngOnInit(): void {
  }
  onClickToSubmut() {

  }
}
