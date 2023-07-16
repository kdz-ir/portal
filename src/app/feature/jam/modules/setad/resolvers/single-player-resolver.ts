import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { IPlayer } from "../../shared/jam-shared/models/IPlayer";
import { inject } from "@angular/core";
import { SetadRepositoryService } from "../services/setad-repository.service";

export const SinglePlayerResolver: ResolveFn<IPlayer> = (ac: ActivatedRouteSnapshot) => {
    return inject(SetadRepositoryService).singlePlayer(+ac.params['id']);
};