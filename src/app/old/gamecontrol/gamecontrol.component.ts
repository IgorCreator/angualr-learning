import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  lastNumber: number = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(): void {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStop(): void {
    clearInterval(this.interval);
    console.log('counting stopped');
    // this.timerElement.stop;
  }
}
