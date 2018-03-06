import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {User, UsersService} from '../../services/users.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})
export class LunchesComponent implements OnInit {

  public users: Observable<User[]>;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.findAll();
  }

}
