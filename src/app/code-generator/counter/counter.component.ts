import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public number: number = 1;

  @Output()
  public onNewNumber: EventEmitter<number> = new EventEmitter<number>()

  public accumulate(value: number): void {
    if (this.number < 1) {
      this.number = 1
    }
    this.number += value
    this.onNewNumber.emit(this.number)
  }
}
