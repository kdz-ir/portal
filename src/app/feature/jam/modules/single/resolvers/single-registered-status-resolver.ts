import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { SingleRegisteredStatus } from "../models/SingleRegisteredStatus";
import { SingleRepositoryService } from '../services/single-repository.service';
import { IIndividual } from "../models/IIndividual";
import { DoubleRepositoryService } from '../services/double-repository.service';
import { SportField } from '../../../models/sport-field';
import { SportSubField } from '../../../models/sub-sport-field';
import { Gender } from '../../team/models/gender';
import { CoreProfileService } from 'src/app/core/services/user/core-profile.service';
import { IBaseProfileShow } from 'src/app/shared/modules/shared-profile/models/IBaseProfileShow';
import { map } from 'rxjs/operators';
export const SingleRegisteredStatusResolver: ResolveFn<SingleRegisteredStatus> = (activedRoute: ActivatedRouteSnapshot) => {
    const field = <SportField>activedRoute.params['field'];
    const subField = <SportSubField>activedRoute.params['subField'];
    return inject(SingleRepositoryService).getRegisteredStatus(field, subField);
};
export const IndividualsResolver: ResolveFn<IIndividual> = (route: ActivatedRouteSnapshot) => {
    const field = <SportField>route.params['field'];
    const subField = <SportSubField>route.params['subField'];
    return inject(DoubleRepositoryService).individuals(field, subField);
};
export const GenderResolver: ResolveFn<Gender> = () => {
    return inject(CoreProfileService).profileData<{ entity: IBaseProfileShow; }>().pipe(map(t => t.entity.sexRaw));
};