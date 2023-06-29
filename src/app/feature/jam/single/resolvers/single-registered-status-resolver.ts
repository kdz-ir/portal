import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { SportField } from '../../models/sport-field';
import { SportSubField } from '../../models/sub-sport-field';
import { SingleRegisteredStatus } from "../models/SingleRegisteredStatus";
import { SingleRepositoryService } from '../services/single-repository.service';
import { IIndividual } from '../models/CheckSportInsuranceStatus';
import { DoubleRepositoryService } from '../services/double-repository.service';
export const SingleRegisteredStatusResolver: ResolveFn<SingleRegisteredStatus> = (activedRoute: ActivatedRouteSnapshot) => {
    const field = <SportField>activedRoute.params['field'];
    const subField = <SportSubField>activedRoute.params['subField'];
    return inject(SingleRepositoryService).getRegisteredStatus(field, subField);
};
export const IndividualsResolver:ResolveFn<IIndividual>=(route:ActivatedRouteSnapshot)=>{
    const field = <SportField>route.params['field'];
    const subField = <SportSubField>route.params['subField'];
    return inject(DoubleRepositoryService).individuals(field,subField);
}