import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() url: string;
  @Input() title: string;
  @Input() text: string;
  @Input() read: string;

  constructor() { }

  ngOnInit(): void {
  }

}
