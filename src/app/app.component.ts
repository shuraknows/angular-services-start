import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AccountService ]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService) {}

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountService.addAccount(newAccount.name, newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountService.updateStatus(updateInfo.id, updateInfo.newStatus);
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
