import {Component, Input, OnInit} from '@angular/core';
import {StoreTestService} from '../../../../../../../store-test.service';

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.css']
})
export class ItemPostComponent implements OnInit {

  @Input() url: string;
  @Input() subtitle: string;
  @Input() title: string;
  @Input() text: string;
  @Input() button: string;

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
