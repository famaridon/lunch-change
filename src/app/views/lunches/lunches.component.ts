import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Lunch, LunchesService} from '../../services/lunches.service';

@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})
export class LunchesComponent implements OnInit {

  public lunchesObservable: Observable<Lunch[]>;

  constructor(public lunchesService: LunchesService) { }

  ngOnInit() {
    this.lunchesObservable = this.lunchesService.findAll();
  }

}
