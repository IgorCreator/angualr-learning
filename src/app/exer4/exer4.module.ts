import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

import { CounterService } from './service/counter.service';
import { UserService } from './service/user.service';
import { Exer4Component } from './exer4.component';
import {AddUsersComponent} from './add-users/add-users.component';

@NgModule({
  declarations: [
    Exer4Component,
    AddUsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CounterService,
    UserService
  ],
  exports: [
    Exer4Component
  ]
})
export class Exer4Module { }
