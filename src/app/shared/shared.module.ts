import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyRadioButton as MatRadioButton, MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { ButtonLoadingDirective } from './directives/button-loading.directive';
import { LargeLoadingDirective } from './directives/large-loading.directive';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { LegecyImageUploaderComponent } from './components/legecy-image-uploader/legecy-image-uploader.component';
import { LightboxModule } from 'ngx-lightbox';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
@NgModule({
  declarations: [ButtonLoadingDirective, LargeLoadingDirective, LegecyImageUploaderComponent, BackButtonComponent, ImageUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    LightboxModule,
    MatRadioModule
  ],
  exports: [
    CommonModule,
    ButtonLoadingDirective,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    LargeLoadingDirective,
    LegecyImageUploaderComponent,
    BackButtonComponent,
    MatRadioModule,
    ImageUploaderComponent
  ]
})
export class SharedModule { }
