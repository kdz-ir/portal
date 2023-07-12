import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { SingleRepositoryService } from '../services/single-repository.service';
import { ISportInsurance } from '../models/isport-insurance';
import { map } from "rxjs/operators";
export const sportInsurenceStatusResolver: ResolveFn<boolean> = () => {
    return inject(SingleRepositoryService).sportInsurance.pipe(map(t => t.membershipIsExpired));
};
export const sportInsuranceResolver: ResolveFn<ISportInsurance> = () => {
    return inject(SingleRepositoryService).sportInsurance;
};
