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

  update(uid: string, email: string, displayName: string, picture: string) {
    const user: User = new User();
    user.uid = uid;
    user.email = email;
    user.displayName = displayName;
    user.picture = picture;
    this.afs.doc<User>(`users/${uid}` ).set(Object.assign({}, user));
  }

}

export class User {
  uid: string;
  email: string;
  displayName: string;
  picture: string;
  roles: Roles;

}

export class Roles {
  admin?: boolean;
}