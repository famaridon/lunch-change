import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.authState.subscribe((value) => {
      if (value) {
        this.router.navigate(['/']);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
