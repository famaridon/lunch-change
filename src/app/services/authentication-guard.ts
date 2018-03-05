import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationGuard implements CanActivate {


  auth: any = {};

  constructor(public afAuth: AngularFireAuth, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.afAuth.authState.map((value) => {
      if (value) {
        console.log('authenticated as ');
        console.dir(value);
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}
