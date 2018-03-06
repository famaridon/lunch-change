import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public userService: UsersService, private router: Router) {
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((credential) => {
      const user: any = credential.user;
      this.userService.update(user.uid, user.email, user.displayName, user.photoURL);
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
