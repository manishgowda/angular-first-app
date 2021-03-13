import { AccountServices } from './../accounts.services';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  @Input() accountInserted: {name: string, status: string};
  @Input() id: number;
  constructor(private accountServices: AccountServices) { }

  ngOnInit(): void {
  }
  onSetTo(eventType: string): void{
    this.accountServices.accounts[this.id].status = eventType;
    this.accountServices.statusUpdated.emit(eventType);
  }

}
