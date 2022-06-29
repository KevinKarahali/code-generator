import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges {
  private readonly limit: number
  @Input()
  public disableButton: boolean = false

  @Input()
  public number!: number;

  @Output()
  public onNewNumber: EventEmitter<number> = new EventEmitter<number>()

  constructor(private generatorService: GeneratorService) {
    this.limit = generatorService.limit
  }


  public accumulate(value: number): void {
    // if (this.number < 2) this.number = 2

    this.number = +this.number + value
    // if (this.number > this.limit) {
    //   this.number = this.limit
    // }
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
