import { Component, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  constructor(private userService: UserService) {
  }

  addInactiveName(username: HTMLInputElement): void {
    this.userService.addToInactiveList(username.value);
  }

  addActiveName(username: HTMLInputElement): void {
    this.userService.addToActiveList(username.value);
  }
}
