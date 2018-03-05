import {NgModule} from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatCardModule, MatIconRegistry} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: []
})
export class AngularMaterialModule {
}
