import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public number: number = 1;

  accumulate(value: number) {
    if (this.number < 1) {
      this.number = 1
    }
    this.number += value
  }
}
