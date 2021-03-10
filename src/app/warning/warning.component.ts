import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  toggleButton = false;
  buttonLog = [];
  constructor() { }

  ngOnInit(): void {

  }
  toggleDisplay(event: any){
    this.buttonLog.push(this.buttonLog.length + 1)
    if (this.toggleButton){
      this.toggleButton = false;
    }
    else{
      this.toggleButton = true;
    }
  }

  getColor(log: number){
    if (log > 5){
      return 'blue'
    }
    return 'transparent'

  }


}
