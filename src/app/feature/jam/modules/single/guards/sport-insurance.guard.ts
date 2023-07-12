import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SingleRepositoryService } from "../services/single-repository.service";
import { map } from "rxjs/operators";
export const SportInsuranceGuard: CanActivateFn = async () => {
  const singleRepository = inject(SingleRepositoryService);
  const router: Router = inject(Router);
  const sportInsurence = await singleRepository.sportInsurance.pipe(map(t=>t.membershipIsExpired)).toPromise();
  
  return sportInsurence || router.createUrlTree(['jam','register','single', 'sport-insurence']);
};