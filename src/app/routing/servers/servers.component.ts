import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ActivationEnd} from '@angular/router';

import { Server } from '../shared/server.model';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Server[];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.servers = this.serversService.getServers();
    this.serversService.serversRefresh.subscribe(
      () => {
        this.servers = this.serversService.getServers();
      }
    );
  }

  onReload() {
      // this.router.navigate(['servers'], {relativeTo: this.route});
  }

  onEdit(){
    this.router.navigate(['edit'],
      {
        relativeTo: this.route,
        queryParamsHandling: 'preserve'
      }
    );
  }
}
