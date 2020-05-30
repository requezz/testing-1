import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  getMailBox() {
    return this.service.getMailBox();
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
