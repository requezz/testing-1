import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  getPopular() {
    return this.service.getPopular();
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
