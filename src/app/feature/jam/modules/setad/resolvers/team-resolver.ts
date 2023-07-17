import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { SetadRepositoryService } from "../services/setad-repository.service";
import { ITeamDetail } from "../models/iteam-detail";

export const teamResolver:ResolveFn<ITeamDetail>=(ac:ActivatedRouteSnapshot)=>{
    return inject(SetadRepositoryService).team(+ac.params['id']);
}