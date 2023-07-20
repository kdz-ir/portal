import { HttpClient } from "@angular/common/http";
import { SwUpdate, SwPush, VersionReadyEvent } from "@angular/service-worker";
import { filter, map } from "rxjs/operators";
import { SwalService } from "../swal/swal.service";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class SwService {
    public constructor (protected readonly updates: SwUpdate,
        protected readonly push: SwPush,
        protected readonly httpClient: HttpClient,
        protected readonly swalService: SwalService) {

    }
    checkUpdate() {
        console.log('Checking update');
        const updatesAvailable = this.updates.versionUpdates.pipe(
            filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
            map(evt => ({
                type: 'UPDATE_AVAILABLE',
                current: evt.currentVersion,
                available: evt.latestVersion,
            })));
        updatesAvailable.subscribe(async (event) => {
            await this.swalService.swal.fire({
                title: 'به روز رسانی جدید',
                icon: 'question',
                allowOutsideClick: false,
                confirmButtonText: 'انجام به روز رسانی'
            });
            await this.updates.activateUpdate();
            document.location.reload();
        });
    }
    async unSubscribePushNotification() {
        try {
            if (this.push.isEnabled)
                await this.push.unsubscribe();
            console.log('push nusubed');
        } catch (e) {
            console.log(e);

        }

    }
}