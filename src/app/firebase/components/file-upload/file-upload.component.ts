import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import {UUID} from 'angular2-uuid';

@Component({
  selector: 'app-image-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  @Output('onUploadCompleted')
  onUploadCompleted = new EventEmitter<string>();

  constructor(private storage: AngularFireStorage, private afAuth: AngularFireAuth) {

  }

  uploadFile(event) {
    const filePath = `${this.afAuth.auth.currentUser.uid}/${UUID.UUID()}`;

    const file = event.target.files[0];
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();
    this.downloadURL.subscribe((url) => {
      this.uploadPercent = null;
      this.onUploadCompleted.emit(filePath);
    });
  }
}
