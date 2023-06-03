import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SingleRepositoryService } from "../services/single-repository.service";
export const SportInsuranceGuard: CanActivateFn = async () => {
  const singleRepository = inject(SingleRepositoryService);
  const router: Router = inject(Router);
  const sportInsurence = await singleRepository.SportInsurenceStatus.toPromise();
  
  return sportInsurence || router.createUrlTree(['jam','single', 'sport-insurence']);
};