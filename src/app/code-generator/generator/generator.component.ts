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


  constructor(private generatorService: GeneratorService) {
    this.numberOfCodes = generatorService.numberOfCodes
    // this.lengthCode = generatorService.lengthCode
  }

  public getNumber($event: number) {
    this.numberOfCodes = $event
    if ($event == this.generatorService.limit) {
      console.log("Limit erreicht")
      this.disableButton = true
    } else {
      this.disableButton = false
    }
    this.getGuessedProbability(this.numberOfCodes, this.generatorService.limit)
  }

  private getGuessedProbability(numberOfCodes: number, maximalCodes: number) {
    this.guessedProbability = Math.round((numberOfCodes / maximalCodes) * 100)
    // this.guessedProbability = numberOfCodes / maximalCodes * 100
    // console.log(this.guessedProbability)
  }

  getLength($event: number) {
    // this.lengthCode = $event
    this.generatorService.lengthCode = $event
    this.generatorService.limitNumber()
    //guess probability
    this.getGuessedProbability(this.numberOfCodes, this.generatorService.limit)

    // console.log(this.generatorService.lengthCode)
  }

  public generateCode(numberOfCodes: number, characterAmount: number) {
    this.generatorService.generateCode(numberOfCodes, characterAmount)
  }

  ngOnInit(): void {
    this.getGuessedProbability(this.numberOfCodes, this.generatorService.limit)
    this.generatorService.limitNumber()
  }


}
