export class AccountServices{
  accounts = [{name: 'Test1', status: 'active'},
            {name: 'Test2', status: 'Inactive'}];

  onCreateAccount(account: {name: string, status: string}): void{
    this.accounts.push({name: account.name,
    status: account.status});
  }

  onStatusChanged(change: {id: number, status: string}): void{
    this.accounts[change.id].status = change.status;
  }
}
