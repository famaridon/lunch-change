import {NgModule} from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule, MatDividerModule, MatFormFieldModule,
  MatInputModule, MatListModule, MatSliderModule, MatStepperModule, MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatStepperModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatStepperModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class AngularMaterialModule {
}
