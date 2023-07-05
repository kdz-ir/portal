import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { DormitoryRepositoryService } from '../services/dormitory-repository.service';
import { IDorm } from '../models/idorm';

export const DormsResolver: ResolveFn<IDorm[]> = (route: ActivatedRouteSnapshot) => {
  return inject(DormitoryRepositoryService).dorms;
};
