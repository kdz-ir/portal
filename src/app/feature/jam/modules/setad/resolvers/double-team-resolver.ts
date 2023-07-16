import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { SetadRepositoryService } from "../services/setad-repository.service";
import { IDoubleTeamDetial } from "../models/idouble-team-detial";

export const doubleTeamResolver:ResolveFn<IDoubleTeamDetial>=(ac:ActivatedRouteSnapshot)=>{
    return inject(SetadRepositoryService).doubleTeam(+ac.params['id']);
}