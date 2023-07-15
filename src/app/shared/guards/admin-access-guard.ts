import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication/authentication.service";

export const adminAccessGuard: CanActivateFn = () => {
    return inject(AuthenticationService).getTokenItem<number>("isAdmin") == 1;
};