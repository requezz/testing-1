import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() url: string;
  @Input() title: string;
  @Input() name: string;
  @Input() data: string;
  @Input() text: string;
  @Input() keep: string;

  constructor() { }

  ngOnInit(): void {
  }

}
