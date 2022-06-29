import {Component, OnInit} from '@angular/core';
import {GeneratorService} from "../services/generator.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {


  public numberOfCodes: number;
  public lengthCode: number = 1;
  public disableButton: boolean = false;
  public guessedProbability: number = 0;
  selectedOption: string = '';
  public options = ["-", "*", "/", "."]
  public numberOption = 1;


  constructor(private generatorService: GeneratorService) {
    this.numberOfCodes = generatorService.numberOfCodes
    this.lengthCode = generatorService.lengthCode
  }

  public selectOption() {
    this.generatorService.selectedOption = this.selectedOption
  }

  public getNumber($event: number) {
    this.numberOfCodes = $event
    if ($event == this.generatorService.limit) {
      console.log("Limit erreicht")
      this.disableButton = true
    }
    if ($event != this.generatorService.limit) {
      this.disableButton = false
    }
    this.getGuessedProbability(this.numberOfCodes, this.generatorService.limit)
  }

  private getGuessedProbability(numberOfCodes: number, maximalCodes: number) {
    this.guessedProbability = Math.round((numberOfCodes / maximalCodes) * 100)
  }

  getLength($event: number) {
    if ($event == this.generatorService.limit) {
      console.log("Limit erreicht")
      this.disableButton = true
    }
    if ($event != this.generatorService.limit) {
      this.disableButton = false
    }
    this.generatorService.lengthCode = $event
    this.generatorService.limitNumber()
    this.getGuessedProbability(this.numberOfCodes, this.generatorService.limit)
  }

  public generateCode(numberOfCodes: number) {
    this.generatorService.generateCode(numberOfCodes)
  }

  ngOnInit(): void {
    this.getGuessedProbability(this.numberOfCodes, this.generatorService.limit)
    this.generatorService.limitNumber()
  }


  changeNumber() {
    this.generatorService.optionNumber = this.numberOption
  }

  downloadCsv() {
    this.generatorService.downloadCsv()
  }
}
