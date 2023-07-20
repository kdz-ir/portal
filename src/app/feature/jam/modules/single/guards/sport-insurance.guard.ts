import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { SportInsuranceRepositoryService } from "../../shared/jam-shared/services/sport-insurance-repository.service";
export const SportInsuranceGuard: CanActivateFn = async () => {
  const singleRepository = inject(SportInsuranceRepositoryService);
  const router: Router = inject(Router);
  const sportInsurence = await singleRepository.sportInsurance.pipe(map(t=>t.membershipIsExpired)).toPromise();
  
  return sportInsurence || router.createUrlTree(['jam','register','single', 'sport-insurence']);
};