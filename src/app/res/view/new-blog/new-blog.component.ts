import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../store-test.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  getDatabase() {
    return this.service.getDatabase();
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
