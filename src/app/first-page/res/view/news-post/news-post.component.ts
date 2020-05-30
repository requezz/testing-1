import {Component, Input, OnInit} from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.css']
})
export class NewsPostComponent implements OnInit {


  Items() {
    return this.service.Items();
  }

  getPost() {
    return this.service.getPost();
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
