export class UserActivityServices{
  userActivity = [{name: 'Manish', active: true},
                  {name: 'Amish', active: true},
                {name: 'XYZ', active: false}];
  onToggle(event: {id: number}): void{
    this.userActivity[event.id].active = !this.userActivity[event.id].active;
  }
}
