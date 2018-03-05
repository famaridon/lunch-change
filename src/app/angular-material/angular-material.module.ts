import {NgModule} from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule, MatDividerModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  declarations: []
})
export class AngularMaterialModule {
}
