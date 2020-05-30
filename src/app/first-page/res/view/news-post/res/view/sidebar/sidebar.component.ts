import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  @Input() url: string;
  @Input() title: string;
  @Input() text: string;
  @Input() read: string;

  constructor() { }

  ngOnInit(): void {
  }

}
