import {Component, OnInit} from '@angular/core';
import {AccountsService} from './old/shared/accounts.service';
import {Account} from './old/shared/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  serverElements = [{type: 'string', name: 'Testserver', content: 'Just a test!'}];

  evenArray: number[] = [];
  oddArray: number[] = [];

  accounts: Account[] = [];
  title: string;
  filteredStatus = '';

  constructor(private accountsService: AccountsService) {
    this.title = 'In the main sandbox page';
  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onServerBlueprintAdded(serverData: {serverName: string, serverContent: string}): void {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onDestroyFirst(): void {
    this.serverElements.slice(0, 1);
  }

  onChangeFirst(): void {
    this.serverElements.length;
  }

  onIntervalFired(firedNumber: number): void {
    if (firedNumber % 2 === 0) {this.addOddComponent(firedNumber);}
    else {this.addEvenComponent(firedNumber);}
    console.log('current number at: ' + firedNumber);
  }

  addEvenComponent(firedNumber: number): void {
    this.evenArray.push(firedNumber);
  }

  addOddComponent(firedNumber: number): void {
    this.oddArray.push(firedNumber);
  }
}
