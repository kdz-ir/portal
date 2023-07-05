import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { JamRepositoryService } from "../services/jam-repository.service";
import { map, tap } from "rxjs/operators";
import { SwalService } from "src/app/core/services/swal/swal.service";

export const CanRegisterGuard: CanActivateFn = () => {
    const swalService = inject(SwalService);
    return inject(JamRepositoryService).canRegister.pipe(tap(async (c) => {
        if (!c.access) {
            await swalService.accessRegister();
        }

    }), map(c => c.access));
};