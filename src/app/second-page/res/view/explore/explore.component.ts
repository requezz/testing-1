import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  getExplore() {
    return this.service.getExplore();
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
