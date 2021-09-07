import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumber: number[] = [];
  oddNumber: number[] = [];
  title = 'oddEven-app';
  onIntervalFired(number:number){
    number % 2 === 0 
    ? this.evenNumber.push(number)
    :this.oddNumber.push(number);
  }
}
