import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentRepositoryService } from '../../services/payment-repository.service';

@Component({
  selector: 'app-call-back-page',
  templateUrl: './call-back-page.component.html',
  styleUrls: ['./call-back-page.component.scss']
})
export class CallBackPageComponent implements AfterViewInit {
  authority: string;
  status: boolean;
  isLoading = true;
  refId: string;
  constructor (activedRoute: ActivatedRoute, private readonly _paymentService: PaymentRepositoryService) {
    this.authority = <string>activedRoute.snapshot.queryParams['Authority'];
    this.status = activedRoute.snapshot.queryParams['Status'] == 'OK';
  }
  ngAfterViewInit(): void {
    this._paymentService.verify(this.authority, this.status).subscribe(c => { this.isLoading = false; this.status = c.status; this.refId = c.refId; });
  }
}
