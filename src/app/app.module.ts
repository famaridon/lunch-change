import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';


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
import { HomeComponent } from './views/home/home.component';
import { AddLunchComponent } from './views/add-lunch/add-lunch.component';
import {UsersService} from './services/users.service';
import {LunchesService} from './services/lunches.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthenticationGuard], children: [
      {path: '', component: LunchesComponent},
      {path: 'add-lunch', component: AddLunchComponent},
    ]},
  {path: 'login', component: AuthenticationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LunchesComponent,
    HomeComponent,
    AddLunchComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [AuthenticationGuard, UsersService, LunchesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
