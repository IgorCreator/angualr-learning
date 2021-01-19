import {Injectable} from '@angular/core';

import {CounterService} from './counter.service';

@Injectable()
export class UserService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private counter: CounterService) {
  }

  activeToInactive(name: string): void {
    this.activeUsers.splice(this.activeUsers.indexOf(name), 1);
    this.inactiveUsers.push(name);
    this.counter.addToInactive();
    this.counter.printResults();
  }

  inactiveToActive(name: string): void {
    this.inactiveUsers.splice(this.inactiveUsers.indexOf(name), 1);
    this.activeUsers.push(name);
    this.counter.addToActive();
    this.counter.printResults();
  }

  addToInactiveList(name: string): void {
    this.inactiveUsers.push(name);
    this.counter.addToInactive();
    this.counter.printResults();
  }

  addToActiveList(name: string): void {
    this.activeUsers.push(name);
    this.counter.addToActive();
    this.counter.printResults();
  }
}
