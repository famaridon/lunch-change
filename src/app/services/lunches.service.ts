import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {User} from './users.service';

@Injectable()
export class LunchesService {

  constructor(public afs: AngularFirestore) { }

  findAll(): Observable<Lunch[]> {
    return this.afs.collection<Lunch>(`lunches`).valueChanges();
  }

}

export class Lunch {
  cooker: User;
  description: string;
}
