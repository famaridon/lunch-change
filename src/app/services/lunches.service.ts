import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {User} from './users.service';

@Injectable()
export class LunchesService {

  constructor(public afs: AngularFirestore) { }

  findAll(): AngularFirestoreCollection<Lunch> {
    return this.afs.collection<Lunch>(`lunches`);
  }

  save(lunch: Lunch) {
    const id = this.afs.createId();
    this.afs.doc(`lunches/${id}`).set((Object.assign({}, lunch)));
  }

}

export class Lunch {
  cooker: string;
  title: string;
  description: string;
}
