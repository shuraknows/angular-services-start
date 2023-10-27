import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [
    LoggingService,
    // If we provide the service here, we get a new instance of the service for this component and all its children
    // AccountService
  ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  private loggingService?: LoggingService;
  private accountService?: AccountService;

  constructor() {
    this.loggingService = inject(LoggingService);
    this.accountService = inject(AccountService);
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
