import {Component, Input, OnInit} from '@angular/core';
import {StoreTestService} from '../../../../../../store-test.service';

@Component({
  selector: 'app-item-blog',
  templateUrl: './item-blog.component.html',
  styleUrls: ['./item-blog.component.css']
})
export class ItemBlogComponent implements OnInit {

  @Input() url: string;
  @Input() title: string;
  @Input() text: string;
  @Input() read: string;

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
