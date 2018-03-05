import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {AuthenticationComponent} from './views/authentication/authentication.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from './services/authentication-guard';
import {LunchesComponent} from './views/lunches/lunches.component';

const appRoutes: Routes = [
  {path: '', component: LunchesComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: AuthenticationComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LunchesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
