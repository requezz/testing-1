import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-pop',
  templateUrl: './item-pop.component.html',
  styleUrls: ['./item-pop.component.css']
})
export class ItemPopComponent implements OnInit {

  @Input() url: string;
  @Input() title: string;
  @Input() text: string;
  @Input() read: string;

  constructor() { }

  ngOnInit(): void {
  }

}
