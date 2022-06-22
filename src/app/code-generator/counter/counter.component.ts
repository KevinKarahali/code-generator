import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  public number: number = 2;

  @Output()
  public onNewNumber: EventEmitter<number> = new EventEmitter<number>()

  public accumulate(value: number): void {
    if (this.number < 2) {
      this.number = 2
    }
    this.number += value
    this.onNewNumber.emit(this.number)
  }
}
