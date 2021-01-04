import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer3',
  templateUrl: './exer3.component.html',
  styleUrls: ['./exer3.component.css']
})
export class Exer3Component implements OnInit {
  evenArray: number[] = [];
  oddArray: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(firedNumber: number): void {
    if (firedNumber % 2 === 0) {this.addOddComponent(firedNumber)}
    else {this.addEvenComponent(firedNumber)};
    console.log('current number at: ' + firedNumber);
  }

  addEvenComponent(firedNumber: number): void {
    this.evenArray.push(firedNumber);
  }

  addOddComponent(firedNumber: number): void {
    this.oddArray.push(firedNumber);
  }

}
