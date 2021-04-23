import {
  Component,
  Input
} from '@angular/core';

import { Account } from '../shared/account';
import { AccountsService } from '../shared/accounts.service';
import {LoggingService} from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: Account;

  constructor(private log: LoggingService, private accountService: AccountsService) {
    this.accountService.newAccountCreated.subscribe(
      name => {
        console.log(`${name} was just created!`);
      }
    );
  }

  onSetTo(newStatus: string) {
    this.account.status = newStatus;
    this.accountService.changeStatus(this.account);
    this.accountService.statusUpdated.emit(status);
  }
}
