import { Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('firedInterval') intervalFired = new EventEmitter<number>();
  interval:any;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onGameStart(){
    this.interval = setInterval(()=>{ 
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
      }, 1000);
  }

  onGamePause(){
    clearInterval(this.interval);
  }
}
