import { Component, OnInit } from '@angular/core';
import { SensetiveSickness, bloodTypes } from 'src/app/shared/models/bloodTypes';
import { YesOrNoAnswer } from 'src/app/shared/models/yesOrNoAnswer';

@Component({
  selector: 'app-ordoo-register-page',
  templateUrl: './ordoo-register-page.component.html',
  styleUrls: ['./ordoo-register-page.component.scss']
})
export class OrdooRegisterPageComponent implements OnInit {
  yesOrNoAnswer = YesOrNoAnswer;
  bloodTypes = bloodTypes;
  sensetiveSickness = SensetiveSickness;
  constructor () { }

  ngOnInit(): void {
  }

}
