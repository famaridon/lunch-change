import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Lunch} from './lunches.service';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class UsersService {

  constructor(public afs: AngularFirestore) { }

  findAll(): Observable<User[]> {
    return this.afs.collection<User>(`users`).valueChanges();
  }

}

export class User {
  uid: string;
  email: string;
  roles: Roles;
}

export class Roles {
  admin?: boolean;
}
