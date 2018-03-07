import { Component, OnInit } from '@angular/core';
import {Lunch, LunchesService} from '../../services/lunches.service';
import {User, UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {AngularFirestoreDocument} from 'angularfire2/firestore';

@Component({
  selector: 'app-add-lunch',
  templateUrl: './add-lunch.component.html',
  styleUrls: ['./add-lunch.component.css']
})
export class AddLunchComponent implements OnInit {

  loggedOnUser: AngularFirestoreDocument<User>;
  lunch: Lunch;


  constructor(protected lunchesService: LunchesService, protected userService: UsersService, protected router: Router) { }

  ngOnInit() {
    this.loggedOnUser = this.userService.findLoggedOn();
    this.reset();
  }

  onImageUploaded(path: string) {
    this.lunch.filePath = path;
  }

  reset() {
    this.lunch = new Lunch();
    this.lunch.cooker = this.loggedOnUser.ref.id;
  }

  submit() {
    this.lunchesService.save(this.lunch);
    this.reset();
    this.router.navigate(['/']);
  }

  cancel() {
    this.reset();
    this.router.navigate(['/']);
  }

}
