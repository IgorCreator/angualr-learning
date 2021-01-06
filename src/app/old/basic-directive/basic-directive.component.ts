import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-directive',
  templateUrl: './basic-directive.component.html',
  styleUrls: ['./basic-directive.component.css']
})
export class BasicDirectiveComponent implements OnInit {
  onlyOdd = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
