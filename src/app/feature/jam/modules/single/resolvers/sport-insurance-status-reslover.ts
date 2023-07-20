import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ISportInsurance } from '../../shared/jam-shared/models/isport-insurance';
import { map } from "rxjs/operators";
import { SportInsuranceRepositoryService } from '../../shared/jam-shared/services/sport-insurance-repository.service';
export const sportInsurenceStatusResolver: ResolveFn<boolean> = () => {
    return inject(SportInsuranceRepositoryService).sportInsurance.pipe(map(t => t.membershipIsExpired));
};
export const sportInsuranceResolver: ResolveFn<ISportInsurance> = () => {
    return inject(SportInsuranceRepositoryService).sportInsurance;
};
