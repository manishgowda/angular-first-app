import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  appName = 'Success app';
  appId = 2;
  allowToCreate = false;
  testInput: string;
  constructor() {

  }

  getAppName(): string{
    return this.appName;
  }
  getAppId(): number{
    return this.appId;
  }

  onClick(): void{
    this.testInput = '';
  }

  testClick(event: any): void{
    this.testInput = event.target.value;
    if (this.testInput.length > 0){
      this.allowToCreate = true;
    }
    else {
      this.allowToCreate = false;
    }
  }
  ngOnInit(): void {
  }

}
