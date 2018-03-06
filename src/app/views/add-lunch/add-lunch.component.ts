import { Component, OnInit } from '@angular/core';
import {Lunch, LunchesService} from '../../services/lunches.service';
import {User, UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-lunch',
  templateUrl: './add-lunch.component.html',
  styleUrls: ['./add-lunch.component.css']
})
export class AddLunchComponent implements OnInit {

  // loggedOnUser: User;
  lunch: Lunch;


  constructor(protected lunchesService: LunchesService, protected userService: UsersService, protected router: Router) { }

  ngOnInit() {
    this.lunch = new Lunch();
    // this.userService.findLoggedOn().subscribe((user) => {
    //   this.loggedOnUser = user;
    //   this.lunch.cooker = this.loggedOnUser;
    // });
  }

  submit() {
    this.lunchesService.save(this.lunch);
    this.router.navigate(['/']);
  }

  cancel() {

  }

}
