import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  getThird() {
    return this.service.forThird;
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
