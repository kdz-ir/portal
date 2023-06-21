import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { SingleRepositoryService } from '../services/single-repository.service';
import { SportInsurance } from '../models/CheckSportInsuranceStatus';
import { SportField } from '../../models/sport-field';

export const sportInsurenceStatusResolver: ResolveFn<boolean> = () => {
    return inject(SingleRepositoryService).SportInsurenceStatus;
};
export const sportInsuranceResolver: ResolveFn<SportInsurance> = () => {
    return inject(SingleRepositoryService).sportInsurance;
};
