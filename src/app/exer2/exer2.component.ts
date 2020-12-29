import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer2',
  templateUrl: './exer2.component.html',
  styleUrls: ['./exer2.component.css']
})
export class Exer2Component implements OnInit {

  isDisplayDetails = false;
  logs: Date[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(): void {
    this.isDisplayDetails = !this.isDisplayDetails;
    this.logPressedButton();
  }

  changeDetailButtonName(): string {
    if (this.isDisplayDetails === false) { return 'Display Details'; }
    else { return 'Hide Details'; }
  }

  logPressedButton(): void {
    const dateString = new Date();
    console.log('Button pressed at: ' + dateString);
    new Date(dateString).toDateString();
    this.logs.push(dateString);
  }
}
