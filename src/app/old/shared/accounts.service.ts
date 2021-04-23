import { Injectable, EventEmitter } from '@angular/core';

import { Account } from './account';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  newAccountCreated: EventEmitter<string> = new EventEmitter<string>();
  statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  accounts: Account[] = [
    new Account('Master Account', 'active', 0),
    new Account('Test Account', 'inactive', 1),
    new Account('Hidden Account', 'unknown', 2)
  ];

  constructor(private logger: LoggingService) {}

  pushAccount(account: Account): void {
    this.accounts.push(account);
    this.logger.statusChange(account.status);
  }

  changeStatus(account: Account): void {
    this.accounts[account.id].status = account.status;
    this.logger.statusChange(account.status);
  }
}
