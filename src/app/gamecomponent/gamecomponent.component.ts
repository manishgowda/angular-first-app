import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecomponent',
  templateUrl: './gamecomponent.component.html',
  styleUrls: ['./gamecomponent.component.css']
})
export class GamecomponentComponent implements OnInit {
  interval: any;
  @Output() gameStart = new EventEmitter<{number: number}>();
  constructor() { }

  ngOnInit(): void {
  }
  // generateNumbers(): void{
  //   console.log('Number generated');
  //   this.gameStart.emit({number: Math.floor(Math.random() * 10)});
  // }
  startGame(): void{
    this.interval = setInterval(() => {
      this.gameStart.emit({
        number: Math.floor(Math.random() * 10)
      });
      console.log('Number generated');
    }, 1000);
  }
  stopGame(): void{
    clearInterval(this.interval);
  }

}
