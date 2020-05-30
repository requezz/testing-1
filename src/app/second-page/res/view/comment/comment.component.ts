import {Component, OnInit} from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  getComment() {
    return this.service.getComment();
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
