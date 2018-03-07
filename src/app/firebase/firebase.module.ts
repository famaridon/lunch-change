import {NgModule} from '@angular/core';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import { StorageImgComponent } from './components/storage-img/storage-img.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FileUploadComponent,
    StorageImgComponent
  ],
  declarations: [FileUploadComponent, StorageImgComponent]
})
export class FirebaseModule {
}
