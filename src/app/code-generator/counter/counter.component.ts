import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges {
  @Input()
  public disableButton: boolean = false

  @Input()
  public number!: number;

  @Input()
  public limit: number = 0

  @Output()
  public onNewNumber: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }


  public accumulate(value: number): void {
    this.number = +this.number + value
    this.onNewNumber.emit(this.number)
  }

  changeNumber() {
    this.onNewNumber.emit(this.number)
    //don't allow to change the number to a negative number
    if (this.number < 1) {
      this.number = 1
    }
    //don't allow characters
    if (isNaN(this.number)) {
      this.number = 1
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.number < 1) {
      this.number = 1
    }
  }
}
