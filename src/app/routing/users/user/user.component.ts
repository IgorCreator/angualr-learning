import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../../shared/user.model';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  private pararmasSubs: Subscription;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pararmasSubs = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.user = this.usersService.getUserById(params.id);
      }
    );
  }

  ngOnDestroy(): void {
    this.pararmasSubs.unsubscribe();
  }

}
