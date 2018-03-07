import {Component, Input, OnInit} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-storage-img',
  templateUrl: './storage-img.component.html',
  styleUrls: ['./storage-img.component.css']
})
export class StorageImgComponent implements OnInit {

  @Input()
  filePath: string;

  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    if( this.filePath ) {
      this.downloadURL = this.storage.ref(this.filePath).getDownloadURL();
    }
  }

}
