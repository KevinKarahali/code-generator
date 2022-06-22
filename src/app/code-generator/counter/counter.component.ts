import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  private limit: number = 10

  @Input()
  public number!: number;

  @Output()
  public onNewNumber: EventEmitter<number> = new EventEmitter<number>()

  public accumulate(value: number): void {
    if (this.number < 2) this.number = 2

    this.number += value
    if (this.number > this.limit) {
      this.number = this.limit
    }
    this.onNewNumber.emit(this.number)
  }
}
