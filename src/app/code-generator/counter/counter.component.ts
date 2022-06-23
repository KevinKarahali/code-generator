import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  private readonly limit: number
  public disableButton: boolean = true

  @Input()
  public number!: number;

  @Output()
  public onNewNumber: EventEmitter<number> = new EventEmitter<number>()

  constructor(private generatorService: GeneratorService) {
    this.limit = generatorService.limit
  }


  public accumulate(value: number): void {
    // if (this.number < 2) this.number = 2

    this.number += value
    // if (this.number > this.limit) {
    //   this.number = this.limit
    // }
    this.onNewNumber.emit(this.number)
  }
}
