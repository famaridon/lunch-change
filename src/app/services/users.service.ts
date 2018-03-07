import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Lunch} from './lunches.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class UsersService {

  constructor(protected afAuth: AngularFireAuth, public afs: AngularFirestore) {
  }

  findAll(): AngularFirestoreCollection<User> {
    return this.afs.collection<User>(`users`);
  }

  findById(uid: string): AngularFirestoreDocument<User> {
    return this.afs.doc<User>(`users/${uid}`);
  }

  findLoggedOn(): AngularFirestoreDocument<User> {
    return this.findById(this.afAuth.auth.currentUser.uid);
  }

  update(uid: string, email: string, displayName: string, picture: string) {
    const user: User = new User();
    user.email = email;
    user.displayName = displayName;
    user.picture = picture;
    const document = this.afs.doc<User>(`users/${uid}`);
    if (document.ref.id) {
      document.update(Object.assign({}, user));
    } else {
      document.set(Object.assign({}, user));
    }
  }

}

export class User {
  email: string;
  displayName: string;
  picture: string;
  roles: Roles;

}

export class Roles {
  admin?: boolean;
}
