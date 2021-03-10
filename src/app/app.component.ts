import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  serverElements = [{type: 'server', name: 'Server1', content: 'This is my test server'}];
  evens = [];
  odds = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}): void{
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
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
}
