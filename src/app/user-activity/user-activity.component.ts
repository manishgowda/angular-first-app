import { element } from 'protractor';
import { UserActivityServices } from './../activity.services';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements OnInit {
  activity: {name: string, active: boolean}[] = [];
  constructor(private userActivity: UserActivityServices) {
  }
  activteUser: {name: string, active: boolean}[] = [];
  inactiveUser: {name: string, active: boolean}[] = [];
  ngOnInit(): void {
    this.activity = this.userActivity.userActivity;
    console.log(this.activity);
    this.seggregateArray();
  }
  seggregateArray(): void{
    this.activteUser = [];
    this.inactiveUser = [];
    for (const user of this.activity){
      if (user.active){
        this.activteUser.push(user);
      }
      else{
        this.inactiveUser.push(user);
      }
    }
  }

  getOriginalId(user: {name: string, active: boolean}): number{
    for (let i = 0; i < this.activity.length; i++){
      if (user === this.activity[i]){
        return i;
      }
    }
  }

  onItemClick(itemId: number, type: string): void{
    console.log(itemId);
    let myId: number;
    if (type === 'active'){
      myId = this.getOriginalId(this.activteUser[itemId]);
    }
    else if (type === 'inactive'){
      myId = this.getOriginalId(this.inactiveUser[itemId]);
    }
    // this.activteUser.forEach((elements, index) => {
    //   if (index === itemId){
    //     delete this.activteUser[index];
    //   }
    // });
    // this.inactiveUser.forEach((elements, index) => {
    //   if (index === itemId){
    //     delete this.activteUser[index];
    //   }
    // });
    this.userActivity.onToggle({
      id: myId
    });
    // todo: initialize array again
    this.seggregateArray();
  }
}
