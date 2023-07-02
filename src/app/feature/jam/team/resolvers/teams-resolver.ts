import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { TeamRepositoryService } from "../services/team-repository.service";
import { IDataCollection } from "../models/IDataCollection";
import { ITeamsList } from "../models/iteams-list";
import { ITeam } from "../models/ITeam";

export const TeamsResolver: ResolveFn<ITeamsList[]> = () => inject(TeamRepositoryService).teams;
export const TeamResolver: ResolveFn<ITeam> = (route: ActivatedRouteSnapshot) => {
    const id=<number>route.params['id'];
    return inject(TeamRepositoryService).team(id);
};