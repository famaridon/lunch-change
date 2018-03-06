import { Component, OnInit } from '@angular/core';
import {LunchesService} from '../../services/lunches.service';

@Component({
  selector: 'app-add-lunch',
  templateUrl: './add-lunch.component.html',
  styleUrls: ['./add-lunch.component.css']
})
export class AddLunchComponent implements OnInit {



  constructor(protected lunchesService: LunchesService) { }

  ngOnInit() {
  }

}
