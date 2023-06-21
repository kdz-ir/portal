import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { SportField } from "../models/sport-field";
import { inject } from "@angular/core";
import { JamRepositoryService } from "../services/jam-repository.service";
import { SportSubField } from "../models/sub-sport-field";

export const FieldNameResolver: ResolveFn<string> = (activedRoute: ActivatedRouteSnapshot) => {
    const field = <SportField>activedRoute.params['field'];
    return inject(JamRepositoryService).getSportName(field);
};
export const SubFieldNameResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
    const subField = <SportSubField>route.params['subField'];
    return inject(JamRepositoryService).getSubSportName(subField);
};