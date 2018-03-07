import {NgModule} from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule, MatDividerModule, MatFormFieldModule,
  MatInputModule, MatListModule
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
    MatListModule
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
    MatListModule
  ],
  declarations: []
})
export class AngularMaterialModule {
}
