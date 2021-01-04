import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName = '';
  username = '';
  servers = [ 'Alfa', 'Beta'];
  serverCreationStatus = 'No server was created!';
  allowNewServer = false;
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 20000);
  }

  ngOnInit(): void {
  }

  getAllowNewServer(): boolean{
    return this.allowNewServer;
  }

  onCreateServer(): void{
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is: ' + this.serverName;
  }

  onUpdatedServerName(name: Event): void{
    console.log(name);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  isUsernameNotEmpty(): boolean {
    if (this.username.length !== 0 ) { return true; }
    else { return false; }
  }

  clickedButton(): void {
    console.log('Username enter: ' + this.username);
    this.username = '';
  }
}
