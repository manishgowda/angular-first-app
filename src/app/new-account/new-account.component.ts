import { AccountServices } from './../accounts.services';
import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  // Use th following code for the normal event emitter
  // @Output() createAccountEvent = new EventEmitter<{name: string, status: string}>();
  constructor(private accountServices: AccountServices) { }
  @ViewChild('accountName', {static: true}) accountName: ElementRef;
  @ViewChild('accountStatus', {static: true}) accountStatus: ElementRef;
  ngOnInit(): void {
  }
  onCreateAccount(): void{
    this.accountServices.accounts.push({
      name: this.accountName.nativeElement.value,
      status: this.accountStatus.nativeElement.value
    });
  }
}
