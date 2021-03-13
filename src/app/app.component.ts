import { UserActivityServices } from './activity.services';
import { Component, OnInit } from '@angular/core';
import { AccountServices } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountServices, UserActivityServices]
})
export class AppComponent implements OnInit{

  title = 'my-first-app';
  serverElements = [{type: 'server', name: 'Server1', content: 'This is my test server'}];
  evens = [];
  odds = [];
  accounts: {name: string, status: string}[] = [];

  link = 'server';
  constructor(private accountServices: AccountServices){
  }

  ngOnInit(): void{
    this.accounts = this.accountServices.accounts;
  }
  onServerAdded(serverData: {serverName: string, serverContent: string}): void{
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
  }
  switchLink(link: string): void{
    console.log('event is ' + link);
    this.link = link;
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}): void{
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  gameStarted(event: {number: number}): void{
    console.log(event.number);
    if (event.number % 2 === 0){
      this.evens.push({number: event.number});
    }
    else{
      this.odds.push({number: event.number});
    }
  }
  // accountCreated(event: {name: string, status: string}): void{
  //   this.accounts.push({
  //     name: event.name,
  //     status: event.status
  //   });
  // }
  // changeStatus(event: {id: number, status: string}): void{
  //   console.log(event)
  //   this.accounts[event.id].status = event.status;
  // }
}
