import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  getUpcoming() {
    return this.service.forUpcoming;
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
