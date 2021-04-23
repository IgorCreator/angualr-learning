import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

import { Account } from '../shared/account';
import { AccountsService } from '../shared/accounts.service';
import {LoggingService} from '../shared/logging.service';
import {logging} from 'protractor';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  @Output() accountAdded = new EventEmitter<{name: string, status: string }>();

  constructor(private log: LoggingService, private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      status => {
        console.log(`${status} was updated!`);
      });
  }

  onCreateAction(accountName: string, accountStatus: string) {
    const newAccount = new Account(accountName, accountStatus, this.accountService.accounts.length);
    this.accountService.pushAccount(newAccount);
    this.accountService.newAccountCreated.emit(accountName);
  }

}
